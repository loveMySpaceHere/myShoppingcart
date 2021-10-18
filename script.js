const prodContainer = document.getElementById("products-section")
const table = document.getElementById("table");
const calculateCart = document.getElementById("calculateCart")


// const storeProducts = [
//     { "id":0, "imgsrc":"https://media.istockphoto.com/photos/mango-picture-id168370138", "item":'Mango', "price":15, "qtyAvl":15},
//     { "id":1, "imgsrc":"https://media.istockphoto.com/photos/red-apple-picture-id184276818", "item":'Apple', "price":35, "qtyAvl":10},
//     { "id":2, "imgsrc":"https://media.istockphoto.com/photos/orange-picture-id185284489?s=612x612","item":'Orange', "price":25, "qtyAvl":20},
//     { "id":3, "imgsrc":"https://media.istockphoto.com/photos/avocado-isolated-on-a-white-background-picture-id157070012?s=612x612","item":'Avacado', "price":35, "qtyAvl":20}
// ]

// Store Products 
// ---------------
const storeProducts = [
    { "id":0, "imgsrc":"images/casual-life-3d-bin.png", "item":'Bin3D', "price":15, "qty":1, "total":15, "qtyAvl":0},
    { "id":1, "imgsrc":"images/casual-life-3d-cup.png", "item":'Cup3D', "price":35, "qty":1, "total":35, "qtyAvl":10},
    { "id":2, "imgsrc":"images/casual-life-3d-books.png","item":'Books3D', "price":25, "qty":1, "total":25, "qtyAvl":20},
    { "id":3, "imgsrc":"images/casual-life-3d-gift-box.png","item":'GiftBox3D', "price":35, "qty":1, "total":35,"qtyAvl":20},
    { "id":4, "imgsrc":"images/casual-life-3d-sanitizer.png","item":'Sanitiser3D', "price":35, "qty":1, "total":35,"qtyAvl":20}
]


// To display the store products
// -----------------------------
function render(product) {  
    // console.log(product);
    let prodOutput =`<div class="card" style="width: 18rem;">
                <img src=${product.imgsrc} class="card-img-top" alt="coffecup"/>
                <div class="card-body">
                  <span class="card-text">${product.item}</span><br>
                  <span class="card-price">Price: $</span><span class="price">${product.price}</span><br>
                  <button type="button" id=${product.id} class="btn btn-info">AddToCart</button>
                </div>
              </div>`
              return prodOutput;
}

function productsdisplay() {

storeProducts.forEach(product => {
    let prod = document.createElement("div");
    prod.innerHTML = render(product);
    prodContainer.appendChild(prod);
    }
    )

}

window.onload = productsdisplay();

// To add an item to cart
// ----------------------
const btnElements = document.getElementsByClassName("btn btn-info");
const cartItems=[];
Array.from(btnElements).forEach( btn => {
    btn.onclick = () => {
        // console.log(btn.id)
        const cartItem = storeProducts[btn.id]
        if(cartItem.qtyAvl>0) {
        shoppingcartRender(cartItem);
        cartItems.push(cartItem);
        }
        else
        alert("Item not in stock")
        }
    }
)

// To render the cart items to the browser
// ---------------------------------------
function shoppingcartRender(x) {
    let cartRow = document.createElement("TR")
     cartRow.innerHTML =   `<td>${x.item}</td>
                            <td><img src="images/plus-square.svg" class="qty-inc" id=${x.cartId} onclick="deleteCartProd(${x.cartId})"/></td>
                            <td>${x.qty}</td>
                            <td><img src="images/dash-square.svg" class="qty-dec" id=${x.cartId} onclick="deleteCartProd(${x.cartId})"/></td>
                            <td>$${x.price}</td>
                            <td>$${x.total}</td>
                            <td><img src="images/trash.svg" class="del" id=${x.cartId} onclick="deleteCartProd(${x.cartId})"/></td>`
                            
    table.appendChild(cartRow);                
                    
}

// To calculate the cart total and the number of items
// ---------------------------------------------------
calculateCart.addEventListener("click", () => {

var cartTot = 0;
var qty = 0;

cartItems.forEach((item) => {
    cartTot += item.price;
    qty += 1;
}
)
const spanTot = document.getElementById("total")
const qtyTot = document.getElementById("qty")
spanTot.textContent = "Total Price:  $"+ cartTot;
qtyTot.textContent = "Number Of Items:  "+ qty;
})



