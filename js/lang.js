const translations = {
    en: {
        title: "Room 1. Prologue",
        returnToPanorama: "← Return",
        moreDetails: "More Details",
        sectionTitle: "Room 1. Prologue",
        sectionContent: [
            "This room is dedicated to the eighteenth century, at the end of which Pushkin was born.",
            "To the left of the entrance is a portrait of the first Russian Emperor, Peter the Great. Pushkin was genuinely interested in the time of Peter’s reign, which determined the historical path Russia would take from then on: “The times were ripe with troubled broil: In threatened struggles hard and stern The young empire must try her strength And slowly reach her full manhood Beneath great Peter’s rule.”",
            "Peter the Great is depicted in the uniform of the Preobrazhensky Regiment, wearing the Order of St. Andrew the First-Called - the highest order of chivalry established by Peter himself.",
            "Next, ancient engravings show evidence of his victories in the war with Sweden: the Battle of Poltava (June 27, 1709) and the Battle of Lesnaya (September 28, 1708). Pushkin’s maternal great-grandfather, Abram (Ibrahim) Hannibal (1697-1781), accompanied the Tsar during these and other battles of the Northern War.",
            "The engraving of the battle of Lesnaya village shows a young man with dark complexion, in a green uniform and a light turban, next to the equestrian figure of Peter the Great. Presumably, this is Abram Hannibal, Peter’s godson. Pushkin wrote about him in his poem, «My Genealogy,» that he had risen to become “the tsar’s confidant and not a slave.”",
            "Pushkin’s autograph of this poem is presented in the central display case next to the portrait of Tsarevich Peter. “Peter the Great’s Moor,” Hannibal, became Russia’s first military engineer and fortress builder.",
            "As a representative of the new nobility, he retired in the rank of General-in-Chief under Elizabeth, Peter’s daughter, and later witnessed the reign of Catherine the Great. The exhibition shows a ceremonial portrait of the Empress. Pushkin genuinely admired her and wrote about that in his «Notes on the Russian History of the Eighteenth Century.”",
            "Her thirty-four-year reign was the longest in Russia. During this period the Russian Empire significantly expanded its borders and spent a total of twenty-five years in wars. Winning three wars against Turkey provided access to the Black Sea.",
            "Military victories were secured by the high command of the Russian army, among them Count Rumyantsev-Zadunaisky, an outstanding commander and General Field Marshal, whose sculptural portrait is next to the portrait of the Empress.",
            "Princess Ekaterina Dashkova was another prominent figure of the eighteenth century. After Catherine the Great’s death in 1796, the throne passed to her only son, the forty-two-year-old Pavel who had never been an object of his mother’s affection.",
            "His reign began with persecution of Catherine’s associates, among them Dashkova. At the same time, many of those who fell into disgrace under Catherine gained freedom. Among them was Pavel’s childhood friend Prince Alexander Borisovich Kurakin (1752-1818).",
            "The portrait depicts him with a blue ribbon and the Star of the Order of St. Andrew the Apostle the First-Called, granted to him by Pavel Petrovich immediately after his return from exile.",
            "Another important portrait is the one of Nikolai Ivanovich Novikov (1744-1818), an outstanding figure of the Age of Enlightenment, who was released from imprisonment in Schlüsselburg Fortress.",
            "The eighteenth century is also represented by lifetime publications of Mikhail Lomonosov, Denis Fonvizin, and Alexander Sumarokov. The book “Works of Derzhavin” has an autograph of the author.",
            "Pavel’s reign, which lasted little more than four years, was the time when Alexander Pushkin was born. The story of Pushkin’s time continues in the next room, just beyond a small two-flight staircase."
        ]
    },
    ru: {
        title: "Зал № 1. «Пролог»",
        returnToPanorama: "← Вернуться к панораме",
        moreDetails: "Подробнее",
        sectionTitle: "Зал № 1. «Пролог»",
        sectionContent: [
            "Судьба пушкинского рода, основателем которого в XIII веке был воин Радша, так же как и судьба предков Пушкина по линии матери, урожденной Ганнибал, неотделима от истории России.",
            "Зал посвящен XVIII столетию, в конце которого родился Пушкин.",
            "«Громкий век военных споров, Свидетель славы Россиян» – так писал он об этом времени.",
            "Портреты русских царей, государственных деятелей, полководцев, поэтов, мыслителей. Среди них (в витрине) – один из самых ранних портретов Петра I конца XVII века работы неизвестного художника московской школы; детский портрет Великого князя Павла I работы Л.З. Христинека; живописный портрет сподвижницы Екатерины II – первого президента Российской академии Е.Р. Дашковой, выполненный С. Тончи. Здесь же скульптурные изображения полководца П.А. Румянцева-Задунайского работы Ф.И. Шубина и кн. И.И. Барятинского, государственного деятеля конца XVIII века, работы Х.Д. Рауха.",
            "В зале представлены гравюры русских и европейских мастеров XVIII века, посвященные важным историческим событиям. О Петре I, Екатерине II, Павле I, о людях, их окружавших, писал Пушкин в своих произведениях; с некоторыми из них он встречался, записывал их рассказы.",
            "На гравюре «Сражение при Лесной 28 сентября 1708 года» возле фигуры Петра I – предок Пушкина Ибрагим Ганнибал. Стихотворение Пушкина «Моя родословная», воспроизведение рукописи которого представлено в зале, свидетельствует о гордости поэта за своих предков. (Все рукописи Пушкина на экспозиции – воспроизведение на бумаге пушкинского времени).",
            "В витринах – прижизненные издания М.В. Ломоносова, Д.И. Фонвизина, А.П. Сумарокова, Г.Р. Державина, Н.М. Карамзина. Их имена представляют литературу XVIII века, предшествовавшую эпохе Пушкина."
        ]
    }
};


// Установка русского языка по умолчанию
// Установка русского языка по умолчанию и инициализация
let currentLang = localStorage.getItem('language') || 'ru';
document.documentElement.lang = currentLang; // Важно для accessibility

// Функция обновления языка
function updateLanguage() {
    // Обновляем атрибут lang у html элемента
    document.documentElement.lang = currentLang;
    
    // Обновляем заголовок страницы
    document.title = translations[currentLang].title;

    // Получаем элементы для обновления
    const elementsToUpdate = {
        '.exit': translations[currentLang].returnToPanorama,
        '.neonText a div span': translations[currentLang].moreDetails,
        '.EtikAll h2': translations[currentLang].sectionTitle,
        // Добавьте другие элементы по необходимости
    };

    // Обновляем элементы
    Object.entries(elementsToUpdate).forEach(([selector, text]) => {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = text;
        }
    });

    // Специальная обработка для заголовка зала
    const hallTitle = document.querySelector('.neonText a');
    if (hallTitle) {
        hallTitle.innerHTML = `${translations[currentLang].title}<br>
            <div style="text-align: center;">
                <span style="font-size: 28px;">${translations[currentLang].moreDetails}</span>
            </div>`;
    }

    // Обновление контента секции
    const sectionContent = document.querySelector('.EtikAll');
    if (sectionContent) {
        const contentParagraphs = sectionContent.querySelectorAll('p');
        contentParagraphs.forEach(paragraph => paragraph.remove());

        translations[currentLang].sectionContent.forEach(text => {
            const p = document.createElement('p');
            p.textContent = text;
            sectionContent.appendChild(p);
        });
    }

    // Обновление подписи к изображению
    const figcaption = document.querySelector('.EtikAll figure figcaption');
    if (figcaption) {
        figcaption.innerHTML = `
           <span class="translation" style="display: ${currentLang === 'ru' ? 'block' : 'none'};">
            Цесаревич Петр Алексеевич (1672–1725) Неизвестный художник Московской школы. 1670-е. Дерево, масло, темпера</span>
            <br>
            <span class="translation" style="display: ${currentLang === 'en' ? 'block' : 'none'};">
                Tsarevich Peter Alexeyevich (1672–1725) Unknown artist of the Moscow school. 1670s. Wood, oil, tempera
            </span>
        `;
    }


}

// Инициализация при загрузке
function initLanguage() {
    // Устанавливаем правильную надпись на кнопке при загрузке
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = currentLang === 'ru' ? 'EN' : 'RU';
        langToggle.style.color = 'azure';
        
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'ru' ? 'en' : 'ru';
            localStorage.setItem('language', currentLang);
            updateLanguage();
            langToggle.textContent = currentLang === 'ru' ? 'EN' : 'RU';
        });
    }
    
    updateLanguage();
}

// Запускаем при полной загрузке DOM
document.addEventListener('DOMContentLoaded', initLanguage);

// Для SPA или AJAX-навигации можно добавить:
window.addEventListener('popstate', initLanguage);


