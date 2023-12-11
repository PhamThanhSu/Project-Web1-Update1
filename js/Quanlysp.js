
// Call render on page load to display existing ArrayListProducts
render();
var selectedImage = document.getElementById('selectedImage');
function addProduct() {
  
    var productID = document.getElementById('productID').value;
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;
    var productfirm = document.getElementById('productfirm').value;
    var producttype = document.getElementById('producttype').value;
    var productCPU= document.getElementById('productCPU').value;
    var productRAM= document.getElementById('productRAM').value;
    var productSSD= document.getElementById('productSSD').value;
    var productVGA= document.getElementById('productVGA').value;

    // Check if an image is selected
    var productImageInput = document.getElementById('productImageInput');
    var productImage = productImageInput.files.length > 0 ? productImageInput.files[0] : null;

    if (productName && productPrice) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var productImageData = e.target.result;

            // Lưu thông tin sản phẩm vào local storage
            var product = {
                id: productID,
                name: productName,
                price: productPrice,
                thuonghieu:productfirm,
                phanloai:producttype,
                img: productImageData,
                cpu: productCPU,
                ram: productRAM,
                ssd: productSSD,
                vga: productVGA
            };

            // Kiểm tra xem danh sách sản phẩm đã tồn tại trong local storage chưa
            var ArrayListProducts = JSON.parse(localStorage.getItem('ArrayListProducts')) || [];

            // Thêm sản phẩm mới vào danh sách
            ArrayListProducts.push(product);

            // Lưu lại danh sách sản phẩm vào local storage
            localStorage.setItem('ArrayListProducts', JSON.stringify(ArrayListProducts));

            render();
         
            alert('Sản phẩm đã được thêm vào dữ liệu.');
            document.getElementById("frmnhapsp").reset();
        };

        if (productImage) {
            reader.readAsDataURL(productImage);
        } else {
         
            reader.readAsDataURL(new Blob([]));
        }
    } else {
        alert('Vui lòng điền đầy đủ thông tin cho sản phẩm.');
    }
}
function editProduct(id) {

var ArrayListProducts = JSON.parse(localStorage.getItem('ArrayListProducts')) || [];

var productIndex = ArrayListProducts.findIndex(product => product.id === id);


if (productIndex !== -1) {
    document.getElementById('productID').value = ArrayListProducts[productIndex].id; 
    document.getElementById('editProductName').value = ArrayListProducts[productIndex].name;
    document.getElementById('editProductPrice').value = ArrayListProducts[productIndex].price;
    document.getElementById('editProductfirm').value = ArrayListProducts[productIndex].thuonghieu;
    document.getElementById('editProductCPU').value = ArrayListProducts[productIndex].cpu;
    document.getElementById('editProductRAM').value = ArrayListProducts[productIndex].ram;
    document.getElementById('editProductSSD').value = ArrayListProducts[productIndex].ssd;
    document.getElementById('editProductVGA').value = ArrayListProducts[productIndex].vga;

    var existingImage = document.getElementById('existingImage');
    existingImage.src = ArrayListProducts[productIndex].img;

    var selectedImage = document.getElementById('selectedImage');
    selectedImage.style.display = 'none';

    var editModal = document.getElementById('editModal');
    editModal.style.display = 'block';
} else {
    alert("Product not found.");
}
}

function removeExistingImage() {
var existingImage = document.getElementById('existingImage');
existingImage.src = '';

var editProductImageInput = document.getElementById('editProductImageInput');
editProductImageInput.value = '';
}

function saveEditedProduct() {

var ArrayListProducts = JSON.parse(localStorage.getItem('ArrayListProducts')) || [];

var productIndex = ArrayListProducts.findIndex(product => product.id === document.getElementById('productID').value);

if (productIndex !== -1) {
    // Update the product properties
    ArrayListProducts[productIndex].name = document.getElementById('editProductName').value;
    ArrayListProducts[productIndex].price = document.getElementById('editProductPrice').value;
    ArrayListProducts[productIndex].thuonghieu = document.getElementById('editProductfirm').value;
    ArrayListProducts[productIndex].cpu = document.getElementById('editProductCPU').value;
    ArrayListProducts[productIndex].ram = document.getElementById('editProductRAM').value;
    ArrayListProducts[productIndex].ssd = document.getElementById('editProductSSD').value;
    ArrayListProducts[productIndex].vga = document.getElementById('editProductVGA').value;

   
    var editProductImageInput = document.getElementById('editProductImageInput');
    if (editProductImageInput.files.length > 0) {
        var reader = new FileReader();
        reader.onload = function(e) {{
            ArrayListProducts[productIndex].img = e.target.result;
            selectedImage.src = e.target.result;
            selectedImage.style.display = 'block';}
           
            localStorage.setItem('ArrayListProducts', JSON.stringify(ArrayListProducts));

         
            closeEditModal();

            
            render();
        };
        reader.readAsDataURL(editProductImageInput.files[0]);} 
        

        else {
            var existingImage = document.getElementById('existingImage');
            if (existingImage.src) {
                ArrayListProducts[productIndex].img = existingImage.src;
            } else {
                ArrayListProducts[productIndex].img = null;
            }

    
        localStorage.setItem('ArrayListProducts', JSON.stringify(ArrayListProducts));

        closeEditModal();

        
        render();
    }
    
} else {
    alert("Product not found.");
}
}

function closeEditModal() {
    var editModal = document.getElementById('editModal');
    editModal.style.display = 'none';
}

function render() {
   
    var ArrayListProducts = JSON.parse(localStorage.getItem('ArrayListProducts')) || [];

   
    var table = `<tr>
    <th>ID</th>
    <th>Tên</th>
    <th>Giá</th>
    <th>Hãng</th>
    <th>Phân loại</th>
    <th>CPU</th>
    <th>RAM</th>
    <th>SSD</th>
    <th>VGA</th>
    <th>Hình</th>
    <th>Action</th>
                </tr>`;


    for (let i = 0; i < ArrayListProducts.length; i++) {
        table += `<tr>
                    <td>${ArrayListProducts[i].id}</td>
                    <td>${ArrayListProducts[i].name}</td>
                    <td>${ArrayListProducts[i].price}</td>
                    <td>${ArrayListProducts[i].thuonghieu}</td>
                    <td>${ArrayListProducts[i].phanloai}</td>
                    <td>${ArrayListProducts[i].cpu}</td>
                    <td>${ArrayListProducts[i].ram}</td>
                    <td>${ArrayListProducts[i].ssd}</td>
                    <td>${ArrayListProducts[i].vga}</td>
                    <td><img src="${ArrayListProducts[i].img}" alt="Product Image" style="width: 50px; height: 50px;"></td>
                    <td>
                        <button onclick="editProduct('${ArrayListProducts[i].id}')"> Edit </button>
                        <button onclick="deleteProduct('${ArrayListProducts[i].id}')">Delete</button>
                    </td>
                </tr>`;
    }

   
    document.getElementById("render").innerHTML = table;
}
function deleteProduct(id) {
  var result=  confirm("Ban co muon xoa san pham");
  if(result == true) {

var ArrayListProducts = JSON.parse(localStorage.getItem('ArrayListProducts')) || [];


var productIndex = ArrayListProducts.findIndex(product => product.id === id);


if (productIndex !== -1) {


ArrayListProducts.splice(productIndex, 1);


localStorage.setItem('ArrayListProducts', JSON.stringify(ArrayListProducts));


render();

alert('Sản phẩm đã được xóa khỏi dữ liệu.');
} else {
alert('Không tìm thấy sản phẩm để xóa.');}
}
else  alert("Bạn không xóa sản phẩm");
}
