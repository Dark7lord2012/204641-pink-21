// Шапка
let header = document.querySelector(".header");
let btnHeaderToggle = document.querySelector(".header__btn-toggle");

btnHeaderToggle.addEventListener("click", function() {
  header.classList.toggle("header--opened");
});

// Цены

let tablePrice = document.querySelector(".prices__table");
let btnPrice1 = document.querySelector(".prices__btn-price--1");
let btnPrice2 = document.querySelector(".prices__btn-price--2");
let btnPrice3 = document.querySelector(".prices__btn-price--3");

btnPrice1.addEventListener("click", function() {
  tablePrice.classList.remove("prices__table--slide-2");
  tablePrice.classList.remove("prices__table--slide-3");
  tablePrice.classList.add("prices__table--slide-1");
});

btnPrice2.addEventListener("click", function() {
  tablePrice.classList.remove("prices__table--slide-1");
  tablePrice.classList.remove("prices__table--slide-3");
  tablePrice.classList.add("prices__table--slide-2");
});

btnPrice3.addEventListener("click", function() {
  tablePrice.classList.remove("prices__table--slide-1");
  tablePrice.classList.remove("prices__table--slide-2");
  tablePrice.classList.add("prices__table--slide-3");
});

// Карта Яндекс с кастомным маркером

ymaps.ready(function () {
  let myMap = new ymaps.Map('map', {
          center: [59.938635, 30.323118],
          zoom: 17
      }, {
          searchControlProvider: 'yandex#search'
      }),

      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Pink'
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/icon-map-marker.svg',
          iconImageSize: [36, 36],
          iconImageOffset: [-18, -18]
      });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom'); // Убрать прокрутку карты колесиком мыши
  myMap.controls.remove('searchControl'); // Удалил поисковую строку, так как оно частично перекрывается контактами
});
