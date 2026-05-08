const product = [
  {
    id: 0,
    image: "https://i.pinimg.com/1200x/79/09/d1/7909d100077cafbf326307e770bf2cc1.jpg",
    product: "Running Sneakers",
    price: 1.00,
  },
  {
    id: 1,
    image: "https://i.pinimg.com/1200x/79/98/8b/79988b2eee627354afac869880f36748.jpg",
    product: "Leather Boots",
    price: 2.00,
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/81/0a/38/810a38baeea0480989c31ea75813ab3d.jpg",
    product: "Casual Loafers",
    price: 3.00,
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/28/11/2f/28112f46e3350155a605a6bdfee45b37.jpg",
    product: "basketball Shoe",
    price: 2.00,
  },
];

const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
  var { image, title, price } = item;
  return (
    `<div class='box'>
      <div class='img-box'>
        <img src="${image}" alt="${image}" class="image" />
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
      `</div>
    </div>`
  )
}).join('')

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart() {
  let j = 0, total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById('cartItem').innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  }
  else {
    document.getElementById("cartItem").innerHTML = cart.map((items) => {
      var { image, product, price } = items;
      total = total + price;
      document.getElementById("total").innerHTML = "$ " + total + ".00";
      return (
        `<div class='cart-item'>
          <div class='row-img'>
            <img class='rowimg' src=${image}>
          </div>
          <p style='font-size:12px;'>${title}</p>
          <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
        "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
      );
    }).join('');
  }
}