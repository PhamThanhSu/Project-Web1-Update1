let gaming = 'oldgaming';
let vanphong = 'oldvanphong';
let other = 'other';
let hieunanggaming = 'gaming';
let doanhnhan = 'doanhnhan';
let dohoa = 'dohoa';
let vanphonghoctap = 'vanphong';

//Lấy giá trị mảng sản phẩm từ LocalStorage
const storedJsonStrings = localStorage.getItem('ArrayListProducts');
// Chuyển đổi chuỗi JSON thành mảng
const storedArrays = JSON.parse(storedJsonStrings);
// Gọi hàm ListSellingProducts với các filter
ListSellingProductsgamingcu(storedArrays);

function ListSellingProductsgamingcu(storedArrays) {
    let s = `<div class="item-selling-products-gaming" id="item-selling-products-gaming">`;
    for (let i = 0; i < storedArrays.length; i++) {
        const product = storedArrays[i];
        var anh = product.img;
        var thuonghieu = product.thuonghieu;
        var phanloai = product.phanloai;
        var name = product.name;
        var cpu = product.cpu;
        var ram = product.ram;
        var ssd = product.ssd;
        var vga = product.vga;
        var lcd = product.lcd;
        var pricecompare = product.pricecompare;
        var pricehighlight = product.pricehighlight;
        var labelonsale = product.labelonsale;

        // Kiểm tra điều kiện lọc, nếu phanloai không rỗng và không bằng giá trị gaming thì tiếp tục vòng lặp
        if(phanloai && !(phanloai.toLowerCase() === gaming.toLowerCase())) {
            continue;
        }
        if(phanloai && !(phanloai.toLowerCase() === vanphong.toLowerCase())) {
            continue;
        }
        if(phanloai && !(phanloai.toLowerCase() === other.toLowerCase())) {
            continue;
        }if(phanloai && !(phanloai.toLowerCase() === hieunanggaming.toLowerCase())) {
            continue;
        }
        if(phanloai && !(phanloai.toLowerCase() === doanhnhan.toLowerCase())) {
            continue;
        }
        if(phanloai && !(phanloai.toLowerCase() === dohoa.toLowerCase())) {
            continue;
        }
        if(phanloai && !(phanloai.toLowerCase() === vanphonghoctap.toLowerCase())) {
            continue;
        }
        s += `
            <div class="item-show-gaming">
                <a href="#">
                    <img src="${anh}" width="100%"/>
                </a>
                <div class="detail">
                    <h3 class="name-product">
                        <a id="name" href="#" title="${name}" tabindex="0">${phanloai}</a>
                    </h3>
                    <div class="technical">
                        <div class="cpu">
                            <span>${cpu}</span>
                        </div>
                        <div class ="vga">
                            <span>${vga}</span>
                        </div>
                        <div class="ram">
                            <span>${ram}</span>
                        </div>
                        <div class="ssd">
                            <span>${ssd}</span>
                        </div>
                        <div class="lcd">
                            <span>${lcd}</span>
                        </div>
                    </div>
                    <div class="price">
                        <div class="price--compare">
                            <del>${pricecompare}</del>
                        </div>
                        <div class="price--default">
                            <span class="pricehighlight">${pricehighlight}</span>
                            <span class="label--on-sale">${labelonsale}</span>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    s += `</div>`;
    document.getElementById("item-selling-products-gaming").innerHTML = s;
}
