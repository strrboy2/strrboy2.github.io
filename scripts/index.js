const products  = [{
    level: 'Gem Collection',
    priceCents: 10000,
    image: 'products/products-1.png',
    name: 'Wallet Crochet',
}, {
    level: 'Zodiac Collection',
    priceCents: 10000,
    image: 'products/products-2.png',
    name: 'Tablet Cover Crochet',
}, {
    level: 'Personalise Collection',
    priceCents: 10000,
    image: 'products/products-3.png',
    name: 'Key-chain Crochet',
}];

let productHTML = '';
products.forEach((products) => {
    productHTML += 
    `<div class = "product" id = "crochet1">
    <div class = "level">
      <h2>${products.level}</h2>
    </div>
      <h3>${products.priceCents}</h3>
      <div class="product_img">
        <img class = "img" src="${products.image}" alt="">
      </div>
      <div class="product-name">
        ${products.name}
      </div>
    <button class = "btn">BUY</button>
  </div>`;
});

document.querySelector('.pricing-grid').
innerHTML = productHTML;
