  
  
  document.addEventListener('DOMContentLoaded', function () {
            // =====================
            // ОПРЕДЕЛЕНИЕ ПЕРЕМЕННЫХ
            // =====================

            const imgOriginal = document.getElementById('panorama-image');
            const imgClone = document.getElementById('panorama-image-clone');
            const container = document.getElementById('panorama-container');

            let scrollPosition = parseInt(localStorage.getItem('scrollPosition')) || 0;
            const scrollSpeed = 0.8;
            let isAnimating = true;
            let isDragging = false;
            let startX = 0;
            let animationTimer;
            let imgWidth = 0;

            // =====================
            // ОСНОВНЫЕ ФУНКЦИИ
            // =====================

            function updateImagePosition() {
                imgOriginal.style.transform = `translateX(${scrollPosition}px)`;
                imgClone.style.transform = `translateX(${scrollPosition + imgWidth}px)`;
                updateHighlightsPosition();
            }

            function startAnimation() {
                if (imgOriginal.complete) {
                    imgWidth = imgOriginal.offsetWidth;
                    animate();
                } else {
                    imgOriginal.onload = function () {
                        imgWidth = this.offsetWidth;
                        animate();
                    };
                }
            }

            function animate() {
                if (!isAnimating) {
                    requestAnimationFrame(animate);
                    return;
                }

                scrollPosition -= scrollSpeed;

                // Плавный переход между изображениями
                if (scrollPosition <= -imgWidth) {
                    scrollPosition += imgWidth;
                } else if (scrollPosition > 0) {
                    scrollPosition -= imgWidth;
                }

                updateImagePosition();
                requestAnimationFrame(animate);
            }

            // =====================
            // ОБРАБОТЧИКИ ПРОКРУТКИ
            // =====================

            function handleHorizontalStart(e) {
                isAnimating = false;
                isDragging = true;
                startX = (e.touches ? e.touches[0].clientX : e.clientX);
                if (e.type === 'touchstart') e.preventDefault();
                clearTimeout(animationTimer);
                animationTimer = setTimeout(() => { isAnimating = true }, 3000);
            }

            function handleHorizontalMove(e) {
                if (!isDragging) return;
                e.preventDefault();

                const x = (e.touches ? e.touches[0].clientX : e.clientX);
                const walk = (x - startX) * 1.5; // Увеличиваем чувствительность

                scrollPosition += walk;

                // Плавный переход при ручной прокрутке
                if (scrollPosition <= -imgWidth) {
                    scrollPosition += imgWidth;
                } else if (scrollPosition > 0) {
                    scrollPosition -= imgWidth;
                }

                startX = x;
                updateImagePosition();
            }

            function handleDragEnd() {
                isDragging = false;
            }

            // =====================
            // ОСТАЛЬНЫЕ ФУНКЦИИ 
            // =====================

            function createHighlights() {
                const panoramaContainer = document.getElementById('panorama-container');
                document.querySelectorAll('area').forEach(area => {
                    const coords = area.getAttribute('coords').split(',').map(Number);
                    const shape = area.getAttribute('shape');
                    const highlight = document.createElement('div');
                    highlight.classList.add('highlight');

                    if (shape === 'rectangle') {
                        const [x1, y1, x2, y2] = coords;
                        highlight.style.cssText = `
                                width: ${x2 - x1}px;
                                height: ${y2 - y1}px;
                                left: ${x1}px;
                                top: ${y1}px;
                            `;
                    } else if (shape === 'circle') {
                        const [x, y, radius] = coords;
                        highlight.style.cssText = `
                                width: ${radius * 2}px;
                                height: ${radius * 2}px;
                                left: ${x - radius}px;
                                top: ${y - radius}px;
                                border-radius: 50%;
                            `;
                    }
                    panoramaContainer.appendChild(highlight);
                });
            }

            function updateHighlightsPosition() {
                document.querySelectorAll('.highlight').forEach(highlight => {
                    highlight.style.transform = `translateX(${scrollPosition}px)`;
                });
            }

            function handleDynamicLinks(event) {
                event.preventDefault();
                localStorage.setItem('scrollPosition', scrollPosition);
                const exhibitId = this.dataset.id;
                window.location.href = `text.html?id=${exhibitId}`;
            }

            function handleStaticLinks(event) {
                localStorage.setItem('scrollPosition', scrollPosition);
                if (event.type === 'touchstart') {
                    event.preventDefault();
                    window.location.href = this.href;
                }
            }

            function initClickHandlers() {
                document.querySelectorAll('area').forEach(link => {
                    if (link.classList.contains('area-link')) {
                        link.addEventListener('click', handleDynamicLinks);
                        link.addEventListener('touchstart', handleDynamicLinks);
                    } else {
                        link.addEventListener('click', handleStaticLinks);
                        link.addEventListener('touchstart', handleStaticLinks);
                        link.style.cursor = 'pointer';
                    }
                });
            }

            function initEventListeners() {
                container.addEventListener('mousedown', handleHorizontalStart);
                container.addEventListener('mousemove', handleHorizontalMove);
                container.addEventListener('touchstart', handleHorizontalStart);
                container.addEventListener('touchmove', handleHorizontalMove);

                container.addEventListener('mouseup', handleDragEnd);
                container.addEventListener('mouseleave', handleDragEnd);
                container.addEventListener('touchend', handleDragEnd);
            }

            function restoreScrollPosition() {
                if (localStorage.getItem('scrollPosition')) {
                    scrollPosition = parseInt(localStorage.getItem('scrollPosition'));
                    updateImagePosition();
                    localStorage.removeItem('scrollPosition');
                }
            }

            // =====================
            // ИНИЦИАЛИЗАЦИЯ
            // =====================

            function init() {
                imgWidth = imgOriginal.offsetWidth;
                initEventListeners();
                createHighlights();
                initClickHandlers();
                restoreScrollPosition();

                // Инициализация клона
                imgClone.style.transform = `translateX(${imgWidth}px)`;
                startAnimation();
            }

            init();
        });