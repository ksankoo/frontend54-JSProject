// Catalog
let divProducts = document.querySelector(".block2-catalog");
class Products {
  render() {
    let htmlCatalog = "";
    CATALOG.forEach(({ id, name, img, price }) => {
      htmlCatalog += `
        <li class="block2-catalog__element">
        <img class="block2-catalog__img" src ="${img}"/>
        <span class="block2-catalog__name">${name}</span>
        <span class="block2-catalog__price">${price}</span>
        <button class="block2-catalog__btn" >Add</button>
        </li>`;
    });
    const html = `
    <ul class="block2-catalog__products">
    ${htmlCatalog}
    </ul>`;
    divProducts.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
//блок 4
let offset = 0;
const sliderLine = document.querySelector('.block4-perfectPair');

document.querySelector('.btn-next').addEventListener('click', function () {
    offset = offset + 1200;
    if (offset > 1100) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.btn-prev').addEventListener('click', function () {
    offset = offset - 1200;
    if (offset < 0) {
        offset = 1100;
    }
    sliderLine.style.left = -offset + 'px';
});

document.addEventListener("DOMContentLoaded", function (event) {
  ymaps.ready(init);
  function init(){
      // Создание карты.
      let myMap = new ymaps.Map("map", {
          center: [59.89, 30.37],
          zoom: 11
      }),

      myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [59.89, 30.37]
        },
        // Свойства.
        properties: {
            // Контент метки.
            iconContent: '',
            hintContent: 'Мы здесь!'
        }
      }, {
        // Опции.
        // Иконка метки будет растягиваться под размер ее содержимого.
        preset: 'islands#blackDotIconWithCaption',
        draggable: false
      });
      myMap.geoObjects
        .add(myGeoObject)
  }
});
