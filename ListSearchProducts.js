//Lấy giá trị mảng sản phẩm từ LocalStorage
const storedJsonString = localStorage.getItem('ArrayListProducts');
// Chuyển đổi chuỗi JSON thành mảng
const storedArray = JSON.parse(storedJsonString);
function ListSellingProductss(storedArray) {
   // let filteredProducts = []; 
    let s ='';
    for (let i = 0; i < storedArray.length; i++) {
        const product = storedArray[i];
        var anh = product.img;
        var doi = product.doi;
        var thuonghieu = product.thuonghieu;
        var phanloai = product.phanloai;
        var name = product.name.toLowerCase();
        var cpu = product.cpu;
        var ram = product.ram;
        var ssd = product.ssd;
        var vga = product.vga;
        var lcd = product.lcd;
        var pricecompare = product.pricecompare;
        s+=`<div class="itemproduct" id = "itemproduct">
                <div>
                    <a href="#">
                        <img src="${anh}" class="anh" data-doi="${doi}" style="width: 100%; height: 210px;"/>
                    </a>
                </div>
                <div class="content">
                    <div class="title" title="${product.name}">${name}</div>
                    <div id="cpu"><img src="./sua/css/image/cpu.png" width="9%">
                        <span>&nbsp; ${cpu}</span>
                    </div>
                    <div id="ram"><img src="./css/image/ram.png" width="9%">
                        <span>&nbsp; ${ram}</span>
                    </div>                    
                    <div id="ssd"><img src="./css/image/ssd.png" width="7%">
                        <span>&nbsp; ${ssd}</span>
                    </div>                    
                    <div id="vga"><img src="./css/image/vga-card.png" width="8%">
                        <span>&nbsp; ${vga}</span>
                    </div>                    
                    <div id="price">
                        <span id="price-item" id="price">${pricecompare}₫</span>
                    </div>                    
                </div>
            </div>`;   
    }
    document.getElementById("item-selling-products").innerHTML = s;
  //  localStorage.setItem('filteredProducts', JSON.stringify(filteredProducts));
    
}
