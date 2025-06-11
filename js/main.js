
      

async function loadData() {
  const currentLang = localStorage.getItem('language') || 'ru'; // Используем значение из localStorage
  document.documentElement.lang = currentLang; // Важно для accessibility

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `mp-${currentLang}.json`); // Используем currentLang для определения пути
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(`HTTP error! status: ${xhr.status}`));
      }
    };
    xhr.onerror = function() {
      reject(new Error("Ошибка загрузки данных"));
    };
    xhr.send();
  });
}



function createExhibitHTML(exhibit) {

    return `
      <div class="content-mp">
      <div class="image-container">
         <a href="${exhibit.imageBig}" class="js-img-viwer popup-img" data-caption="${exhibit.caption}" data-id="${exhibit.id}">
          <img id="myImage" src="${exhibit.imageSmall}" width="340px" alt="${exhibit.caption}"/>
        </a>
 
          </div>
        <div class="art">
          <p><strong>${exhibit.name}</strong><br>
          <strong>${exhibit.caption}</strong><br>
          ${exhibit.details.join('<br>')}
          </p>
        </div>
        <div class="EtikAll">
          <p>${exhibit.description}</p>
        </div>
      </div>
    `;
}


document.addEventListener('DOMContentLoaded', async () => {
  const pageDiv = document.getElementById('page'); 
  const data = await loadData();

  const urlParams = new URLSearchParams(window.location.search);
  const exhibitId = urlParams.get('id');

  if (exhibitId) {
    const exhibit = data.find(item => item.id === exhibitId);
    if (exhibit) {
      pageDiv.innerHTML = createExhibitHTML(exhibit); 
      // new SmartPhoto(".js-img-viwer"); 
      $('.popup-img').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true // Если нужно, включите галерею
        }
    });
         // Обработчик удаления экспоната
         const closeButtons = document.querySelectorAll('.close-button');
         closeButtons.forEach(button => {
             button.addEventListener('click', () => {
               const idToRemove = button.dataset.id;

               console.log(`Удаляем экспонат с ID: ${idToRemove}`);

               // Пример удаления элемента из DOM:
               const exhibitToRemove = button.closest('.content-mp');
               if (exhibitToRemove) {
                 exhibitToRemove.remove();
               }
             });
           });


    } else {
      pageDiv.innerHTML = "<p>Экспонат не найден.</p>";
    }
  } else {
    pageDiv.innerHTML = "<p>ID экспоната не указан.</p>";
  }
});


// масштаб 


let image = document.getElementById('myImage');
let container = document.getElementById('imageContainer');
let resetButton = document.getElementById('resetButton');

image.addEventListener('dblclick', () => {
  image.classList.toggle('fullscreen');
  if (image.classList.contains('fullscreen')) {
      resetButton.style.display = "block"; // Показываем кнопку
  } else {
      resetButton.style.display = "none"; // Скрываем кнопку
  }
});

resetButton.addEventListener('click', () => {
  image.classList.remove('fullscreen');
  resetButton.style.display = "none"; // Скрываем кнопку после нажатия
});

//Вначале скрываем кнопку.
resetButton.style.display = "none";





