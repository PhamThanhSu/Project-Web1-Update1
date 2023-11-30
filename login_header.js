// Lấy tham chiếu đến cửa sổ đăng nhập và nút "Đăng nhập"
var loginPopup = document.getElementById('login-popup'); //Mờ nền
var loginContent = document.getElementById('login-content'); //Ô đăng nhập
var loginButton = document.getElementById('button-login');  //Nút đăng nhập

// Biến để theo dõi trạng thái cửa sổ đăng nhập
var isLoginPopupOpen;

// Thêm sự kiện click cho nút "Đăng nhập"
loginButton.addEventListener('click', function(event) {
    event.stopPropagation();
    if (!isLoginPopupOpen) {
        // Hiển thị cửa sổ nếu nó đang ẩn
        loginPopup.style.display = 'block';
        loginContent.classList.add('active');
        isLoginPopupOpen = true;
    } else {
        // Ẩn cửa sổ nếu nó đang hiển thị
        loginPopup.style.display = 'none';
        loginContent.classList.remove('active');
        isLoginPopupOpen = false;
    }
    if(isLoginPopupCartOpen){
        loginPopupCart.style.display = 'none';
        loginContentCart.classList.remove('active');
        isLoginPopupCartOpen = false;
    }
});

// Sự kiện click bất kỳ nơi nào trên trang để ẩn cửa sổ
document.body.addEventListener('click', function(event) {
    if (isLoginPopupOpen && !loginContent.contains(event.target)){
        // Ẩn cửa sổ nếu nó đang hiển thị
        loginPopup.style.display = 'none';
        loginContent.classList.remove('active');
        isLoginPopupOpen = false;
    }
});