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
