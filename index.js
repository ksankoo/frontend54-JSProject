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


// маска для ввода номера телефона
document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function (e) {
      var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+7(___)___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
      if (clearVal !== 'false' && e.type === 'blur') {
          if (val.length < matrix.match(/([\_\d])/g).length) {
              e.target.value = '';
              return;
          }
      }
      if (def.length >= val.length) val = def;
      e.target.value = matrix.replace(/./g, function (a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
  }
  var phone_inputs = document.querySelectorAll('.tel');
  for (let elem of phone_inputs) {
      for (let ev of ['input', 'blur', 'focus']) {
          elem.addEventListener(ev, eventCalllback);
      }
  }
});


// Ограничиваем ввод для имени только кирилическими символ
const inputName = document.getElementById("form__name");

inputName.addEventListener("keypress", (event) => {
  const value = event.which;
  if ((value >= 1040 && value <= 1103) || value === 1025 || value === 1105) {
    inputName.innerText = value;
  } else {
    event.preventDefault();
  }
});


const btnSendUserInf = document.getElementById('send-user-inf');
let userName;
let userNumber;

btnSendUserInf.addEventListener ('click', (event) => {
  event.preventDefault();
  userName = document.getElementById("form__name").value;
  userNumber = document.getElementById("form__number").value;
  userName = userName.toLowerCase();
  userName = userName[0].toUpperCase() + userName.slice(1);
});

