        // Переводы
        const showcaseTranslations = {
            showcase1: {
                en: { title: "Showcase № 1" },
                ru: { title: "Витрина № 1" }
            },
            showcase2: {
                en: { title: "Showcase № 2" },
                ru: { title: "Витрина № 2" }
            }
        };

        const commonTranslations = {
            en: { returnToPanorama: "← Return" },
            ru: { returnToPanorama: "← Вернуться к панораме" }
        };

        // Основная функция
        document.addEventListener('DOMContentLoaded', function () {
            const currentShowcase = 'showcase2';
            let currentLang = localStorage.getItem('language') || 'ru';
            document.documentElement.lang = currentLang;

            // Инициализация слайдера
            new Swiper(".cube-slider", {
                effect: "cube",
                grabCursor: true,
                loop: true,
                speed: 1000,
                cubeEffect: {
                    shadow: true,
                    slideShadows: false,
                    shadowOffset: 40,
                    shadowScale: 1,
                },
                autoplay: {
                    delay: 2600,
                    pauseOnMouseEnter: true,
                },
            });

    
            // Обновление языка
            function updateLanguage() {
                document.querySelector('.exit').textContent = commonTranslations[currentLang].returnToPanorama;
                document.getElementById('showcase-title').textContent = showcaseTranslations[currentShowcase][currentLang].title;
                document.getElementById('lang-toggle').textContent = currentLang === 'ru' ? 'EN' : 'RU';

                document.querySelectorAll('.slide-text').forEach(el => el.style.display = 'none');
                document.querySelectorAll(`.slide-text.${currentLang}`).forEach(el => el.style.display = 'block');
            }

            // Переключение языка
            document.getElementById('lang-toggle').addEventListener('click', function () {
                currentLang = currentLang === 'ru' ? 'en' : 'ru';
                localStorage.setItem('language', currentLang);
                document.documentElement.lang = currentLang;
                updateLanguage();
            });

            updateLanguage();
        });


           // Модальное окно
            document.querySelectorAll('.swiper-slide img').forEach(img => {
                img.addEventListener('click', function() {
                    const bigImageSrc = this.src.replace('../img/mp/small/7874.webp', '/');
                    document.getElementById('modalImage').src = bigImageSrc;
                    document.getElementById('modalOverlay').style.display = 'block';
                    document.body.style.overflow = 'hidden';
                });
            });

            document.querySelector('.close-btn').addEventListener('click', closeModal);
            document.getElementById('modalOverlay').addEventListener('click', function(e) {
                if (e.target === this) closeModal();
            });

            function closeModal() {
                document.getElementById('modalOverlay').style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        
// зум 

document.querySelectorAll('.swiper-slide img').forEach(img => {
            img.style.cursor = 'zoom-in'; // Показываем, что изображение можно увеличить
            img.addEventListener('click', function() {
                // Создаем временный элемент для зума
                const zoomDiv = document.createElement('div');
                zoomDiv.style.position = 'fixed';
                zoomDiv.style.top = '0';
                zoomDiv.style.left = '0';
                zoomDiv.style.width = '100%';
                zoomDiv.style.height = '100%';
                zoomDiv.style.backgroundColor = 'rgba(0,0,0,0.9)';
                zoomDiv.style.display = 'flex';
                zoomDiv.style.justifyContent = 'center';
                zoomDiv.style.alignItems = 'center';
                zoomDiv.style.zIndex = '1000';
                zoomDiv.style.cursor = 'zoom-out';
                
                // Копируем изображение
                const zoomImg = new Image();
                zoomImg.src = this.src;
                zoomImg.style.maxWidth = '90%';
                zoomImg.style.maxHeight = '90%';
                zoomImg.style.objectFit = 'contain';
                
                // Добавляем в DOM
                zoomDiv.appendChild(zoomImg);
                document.body.appendChild(zoomDiv);
                
                // Закрытие по клику
                zoomDiv.addEventListener('click', function() {
                    document.body.removeChild(zoomDiv);
                });
                
                // Блокируем скролл страницы
                document.body.style.overflow = 'hidden';
            });
        });

            function redirectToIndex() {
                window.location.href = '../index.html';
            }

            setTimeout(redirectToIndex, 10000); 