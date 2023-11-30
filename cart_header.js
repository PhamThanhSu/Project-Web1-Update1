// Lấy tham chiếu đến cửa sổ đăng nhập và nút "Đăng nhập"
var loginPopupCart = document.getElementById('login-popup-cart'); // Mờ nền
var loginContentCart = document.getElementById('login-content-cart'); // Ô đăng nhập
var loginButtonCart = document.getElementById('button-cart');  // Nút đăng nhập

// Biến để theo dõi trạng thái cửa sổ đăng nhập
var isLoginPopupCartOpen = false;

// Thêm sự kiện click cho nút "Đăng nhập"
loginButtonCart.addEventListener('click', function(event) {
    // Ngăn sự kiện click lan ra ngoài cửa sổ đăng nhập
    event.stopPropagation();
    
    if (!isLoginPopupCartOpen) {
        // Hiển thị cửa sổ nếu nó đang ẩn
        loginPopupCart.style.display = 'block';
        loginContentCart.classList.add('active');
        isLoginPopupCartOpen = true;
    } else {
        // Ẩn cửa sổ nếu nó đang hiển thị
        loginPopupCart.style.display = 'none';
        loginContentCart.classList.remove('active');
        isLoginPopupCartOpen = false;
    }
    if(isLoginPopupOpen){
        loginPopup.style.display= 'none';
        loginContent.classList.remove('active');
        isLoginPopupOpen = false;
    }
});

// Sự kiện click bất kỳ nơi nào trên trang để ẩn cửa sổ
document.body.addEventListener('click', function(event) {
    if (isLoginPopupCartOpen && !loginContentCart.contains(event.target)){
        // Ẩn cửa sổ nếu nó đang hiển thị
        loginPopupCart.style.display = 'none';
        loginContentCart.classList.remove('active');
        isLoginPopupCartOpen = false;
    }
});
