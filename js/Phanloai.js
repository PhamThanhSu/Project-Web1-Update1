//Lấy giá trị mảng sản phẩm từ LocalStorage
const storedJsonStringphanloai = localStorage.getItem('ArrayListProducts');
// Chuyển đổi chuỗi JSON thành mảng
const storedArrayphanloai = JSON.parse(storedJsonStringphanloai);

function ListSellingProductphanloai(category, targetElementId) {
    var s = '';
    for (var i = 0; i <storedArrayphanloai.length; i++) {
        var product = storedArrayphanloai[i];
        if (!(product.phanloai === category)) {
            continue;
            }
            s +=`<div class="itemproduct" id = "itemproduct" data-product-id="${product.id}">
                            <div>
                                <a href="#">
                                    <img src="${product.img}" class="anh" data-doi="${product.doi}" style="width: 100%; height: 210px;"/>
                                </a>
                            </div>
                            <div class="content">
                                <div class="title" title="${product.name}">${product.name}</div>
                                <div id="cpu"><img src="../imageDoAn/cpu.png" width="9%">
                                    <span>&nbsp; ${product.cpu}</span>
                                </div>
                                <div id="ram"><img src="../imageDoAn/ram.png" width="9%">
                                    <span>&nbsp; ${product.ram}</span>
                                </div>
                                <div id="ssd"><img src="../imageDoAn/ssd.png" width="7%">
                                    <span>&nbsp; ${product.ssd}</span>
                                </div>
                                <div id="vga"><img src="../imageDoAn/vga-card.png" width="8%">
                                    <span>&nbsp; ${product.vga}</span>
                                </div>
                                <div id="price">
                                    <span id="price-item" id="price" style="color :red; font-weight:800">${product.price}₫</span>
                                </div>
                            </div>
                        </div>`; 
                        
    }
    const container = document.getElementById(targetElementId);
    container.innerHTML = s;
    var elements = document.querySelectorAll('.anh');
    elements.forEach(function (element) {
      handleImageHover(element);
    });
    const productElements = container.getElementsByClassName("itemproduct");
 for (let i = 0; i < productElements.length; i++) {
     let listItem = productElements[i];
     listItem.addEventListener('click', function(event) {
         // Retrieve the productId from the clicked element's data-product-id attribute
         let productId = listItem.getAttribute('data-product-id');
             let productURL = 'productInfomation.html?id=' + productId;
             localStorage.setItem('productURL_' + productId, productURL);
             window.location.href = productURL;
         
     });
  }

}
  function handleImageHover(element) {
    var initialImagePath = element.src;
    var hoverImagePath = element.dataset.doi;
  
    element.addEventListener('mouseover', function () {
      // Change the image source when the element is hovered over
      element.src = hoverImagePath;
    });
  
    element.addEventListener('mouseout', function () {
      // Reset the image source when the mouse leaves the element
      element.src = initialImagePath;
    });
  }

  ListSellingProductphanloai('gaming', 'list-gaming');
  ListSellingProductphanloai('doanhnhan', 'list-doanhnhan');
  ListSellingProductphanloai('dohoa', 'list-dohoa');
  
