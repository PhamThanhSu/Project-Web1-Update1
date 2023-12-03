//GHI SAN PHAM TU GIO HANG
const cartData = localStorage.getItem('cart');
const productList = JSON.parse(cartData);

// Get image data from localStorage.ArrayListProducts
const imageList = localStorage.getItem('ArrayListProducts');
const imageArray = JSON.parse(imageList);

// Reference to the table body
const tableBody = document.getElementById('product-table-body');

// Fill in the table with product data including images
productList.forEach(product => {
    const row = document.createElement('tr');

    // Find the image URL corresponding to the product ID
    const productImage = imageArray.find(img => img.id === product.id);

    row.innerHTML = `
        <td class="product-image">
            <img src="${productImage.imageURL}" alt="${product.name}" width="100">
        </td>
        <td>${product.name}</td>
        <td>${product.quantity}</td>
        <td>${product.price}</td>
    `;
    
    tableBody.appendChild(row);
}); 
//-----------------------------------------------------------------------------
//TINH TAM THU VA TONG TIEN
let totalAmount = 0;

productList.forEach(product => {
    const price = parseFloat(product.price.replace(/[^\d.-]/g, ''));
    const quantity = parseInt(product.quantity);
    const subtotal = price * quantity;
    totalAmount += subtotal;
});

// Định dạng số tiền thành chuỗi hiển thị VND
const formattedTotal = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalAmount);

// Chọn thẻ có class là 'total-line-price'
const totalLinePrice = document.querySelector('.total-line-price .product-price');

// Ghi giá trị tổng tiền vào thẻ đã chọn
totalLinePrice.textContent = formattedTotal;

let additionalAmount = 50000 + totalAmount;

const formattedTotal1 = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(additionalAmount);

// Chọn thẻ có class là 'payment-due-price'
const paymentDuePrice = document.querySelector('.payment-due-price');

// Ghi giá trị tổng tiền (bao gồm cả số tiền cộng thêm) vào thẻ đã chọn
paymentDuePrice.textContent = formattedTotal1;
//-----------------------------------------------------------------------------





//Ghi bill len LocalStorage 
const submitButton = document.getElementById('submitButton');
const fullNameInput = document.getElementById('billing_address_full_name');
const emailInput = document.getElementById('checkout_user_email');
const phoneInput = document.getElementById('billing_address_phone');
const addressInput = document.getElementById('billing_address_address1');

// Tạo ID duy nhất cho hóa đơn
let nextBillId = 1; // Khởi tạo ID cho hóa đơn đầu tiên

function generateBillId() {
    return `bill_${nextBillId++}`;
}

submitButton.addEventListener('click', function() {
    
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

        const newBill = {
            id: generateBillId(), // Tạo ID mới cho hóa đơn
            hoten: fullNameInput.value.trim(),
            email: emailInput.value.trim(),
            sdt: phoneInput.value.trim(),
            diachi: addressInput.value.trim(),
            date: formattedDate
        };

        // Lấy thông tin từ localStorage của giỏ hàng
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Thêm thông tin của giỏ hàng vào hóa đơn
        newBill.cart = cartItems;

        // Lưu hóa đơn vào localStorage với ID và thông tin giỏ hàng
        localStorage.setItem(`bill_${newBill.id}`, JSON.stringify(newBill));
        
        alert('Hóa đơn đã được lưu lại!');
        window.location.href = '../html/Trangchu_DoAn.html'; // Chuyển hướng trang
    } 

);

