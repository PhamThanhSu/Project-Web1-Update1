
// Get existing products from local storage
var products = JSON.parse(localStorage.getItem('products')) || [];

// Reinitialize the table header
var table = `<tr>
                <th></th>
            </tr>`;

// Populate the table with product data
for (let i = 0; i < products.length; i++) {
    table += `     <div class="item-show">
                <a href="#">
                    <div>  <img src="${products[i].image}" alt="Product Image" style="width: 200px; height: 200px;"> </div>
                </a>
                <div class="detial">
                    <h3 class="name-product">
                        <a id="name" href="#">${products[i].name}</a>
                    </h3>
                    
                    <div class="price">
                        <div class="price--default">${products[i].price}đ</div>
                              
                
                    </div>
                </div>
            </div>    
      
               
            `;
}

// Update the table content
document.getElementById("item-selling-products").innerHTML = table;
