function ListSellingProductFilter(mangdaloc, filterthuonghieu = [], filtergiaban = [], filtercpu = [], filtervga = [], filterssd = []) {
   // let searchResults = [];
    let s ='';
    const container = document.getElementById("item-selling-products");
    for (let i = 0; i < mangdaloc.length; i++) {
        const product = mangdaloc[i];
        var anh = product.img;
        var doi = product.doi;
        var thuonghieu = product.thuonghieu.toUpperCase();
        var phanloai = product.phanloai;
        var name = product.name;
        var cpu = product.cpu;
        var ram = product.ram;
        var ssd = product.ssd;
        var vga = product.vga;
        var lcd = product.lcd;
        var price = product.price;
        console.log('filter.thuonghieu.length');
        if (filterthuonghieu.length > 0) {
            if (filterthuonghieu.includes(thuonghieu) == false)
                continue;
        }

        if (filtergiaban.length > 0) {
            if (removeCommas(price) < 10000000 && !filtergiaban.includes('1')) continue;
            if (removeCommas(price) >= 10000000 && removeCommas(price) <= 15000000 && !filtergiaban.includes('2')) continue;
            if (removeCommas(price) > 15000000 && removeCommas(price) <= 25000000 && !filtergiaban.includes('3')) continue;
            if (removeCommas(price) > 25000000 && !filtergiaban.includes('4')) continue;
        }

        // Kiểm tra điều kiện cho CPU
        if (filtercpu.length > 0) {
            var cpuMatches = filtercpu.some(function(cpuValue) {
            return product.cpu.includes(cpuValue);
            });

        // Nếu không có giá trị nào trong filtercpu match với cpu của sản phẩm, tiếp tục với sản phẩm tiếp theo
        if (!cpuMatches) {
            continue;
            }
        }
        // Kiểm tra điều kiện cho SSD
        if (filterssd.length > 0) {
            var ssdMatches = filterssd.some(function(ssdValue) {
            return product.ssd.includes(ssdValue);
            });

        // Nếu không có giá trị nào trong filtercpu match với cpu của sản phẩm, tiếp tục với sản phẩm tiếp theo
        if (!ssdMatches) {
            continue;
            }
        }
        // Kiểm tra điều kiện cho VGA
        if (filtervga.length > 0) {
            var vgaMatches = filtervga.some(function(vgaValue) {
            return product.vga.includes(vgaValue);
            });

        // Nếu không có giá trị nào trong filtercpu match với cpu của sản phẩm, tiếp tục với sản phẩm tiếp theo
        if (!vgaMatches) {
            continue;
            }
        }
        textss = document.getElementById('filter-result');
        textss.innerHTML = "Laptop";
        s+=`<div class="itemproduct" id = "itemproduct" data-product-id="${product.id}">
                <div>
                    <a href="#">
                        <img src="${anh}" class="anh" data-doi="${doi}" style="width: 100%; height: 210px;"/>
                    </a>
                </div>
                <div class="content">
                    <div class="title" title="${product.name}">${name}</div>
                    <div id="cpu"><img src="../imageDoAn/cpu.png" width="9%">
                        <span>&nbsp; ${cpu}</span>
                    </div>
                    <div id="ram"><img src="../imageDoAn/ram.png" width="9%">
                        <span>&nbsp; ${ram}</span>
                    </div>                    
                    <div id="ssd"><img src="../imageDoAn/ssd.png" width="7%">
                        <span>&nbsp; ${ssd}</span>
                    </div>                    
                    <div id="vga"><img src="../imageDoAn/vga-card.png" width="8%">
                        <span>&nbsp; ${vga}</span>
                    </div>                    
                    <div id="price">
                        <span id="price-item" id="price">${price}₫</span>
                    </div>                    
                </div>
            </div>`;   
    }
    container.innerHTML = s;    
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
    thisPageloc = document.querySelectorAll('.item-selling-products .itemproduct');
    var phantrangloc = document.getElementById('pagenumber2');
    showPage(thisPageloc, phantrangloc);

    var elements = document.querySelectorAll('.anh');

    elements.forEach(function (element) {
      handleImageHover(element);
    });
  //  localStorage.setItem('SearchResult', JSON.stringify(searchResults)); //Lưu mảng searchresult vào local

}

const urlParams = new URLSearchParams(window.location.search);
const filterTerm = urlParams.get('Filter');
}
function filteritem() {
    var arrthuonghieu = document.getElementsByClassName("thuonghieu");
    var filterthuonghieu = [];
    for (var i = 0; i < arrthuonghieu.length; i++) {
        if (arrthuonghieu[i].checked) filterthuonghieu.push(arrthuonghieu[i].value);
    }

    var arrgiaban = document.getElementsByClassName("gia");
    var filtergiaban = [];
    for(var i = 0; i< arrgiaban.length; i++){
        if(arrgiaban[i].checked) filtergiaban.push(arrgiaban[i].value);
    }
    var arrcpu = document.getElementsByClassName("cpu");
    var filtercpu = [];
    for(var i=0; i< arrcpu.length; i++){
        if(arrcpu[i].checked) filtercpu.push(arrcpu[i].value);
    }

    var arrvga = document.getElementsByClassName("vga");
    var filtervga = [];
    for(var i=0; i< arrvga.length; i++){
        if(arrvga[i].checked) filtervga.push(arrvga[i].value);
    }

    var arrssd = document.getElementsByClassName("ssd");
    var filterssd = [];
    for(var i=0; i< arrssd.length; i++){
        if(arrssd[i].checked) filterssd.push(arrssd[i].value);
    }
    //Lấy giá trị mảng sản phẩm từ LocalStorage
    const mangdaloc = JSON.parse(localStorage.getItem('SearchResult'));
    ListSellingProductFilter(mangdaloc, filterthuonghieu,filtergiaban, filtercpu, filtervga, filterssd);  
}
//Hàm bỏ dấu phẩy
function removeCommas(inputString) {
    return inputString.replace(/,/g, '');
}
//Mảng giá trị lọc
// Tạo một mảng để lưu trữ thông tin từ các phần tử
//Lấy giá trị mảng sản phẩm từ LocalStorage
/// Lấy dữ liệu từ local storage và chuyển đổi thành đối tượng JavaScript
 brandarray = JSON.parse(localStorage.getItem('brandarray'));
console.log(brandarray);
var listbrandfilter = `<ul id="listthuonghieu-checkbox" class="listcheckbox">`;
// Kiểm tra xem filtertest có tồn tại và có chứa ít nhất một phần tử không
for(var i=0; i< brandarray.length; i++) {
    // Tạo chuỗi HTML cho danh sách các thương hiệu
    console.log(brandarray[i]);
    listbrandfilter += `
        <li>
            <label id="label-item-search">
                <input type="checkbox" onchange="filteritem()" class="thuonghieu" value="${brandarray[i]}">${brandarray[i]}
            </label>
        </li>`;
        listbrandfilter += `</ul>`;

    // Gán chuỗi HTML vào một phần tử có id="listthuonghieu-checkbox"
    document.getElementById('listthuonghieu-checkbox').innerHTML = listbrandfilter;
}







