const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const forgotLink=document.querySelector('.ForgotPass-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconclose=document.querySelector('.icon-close');

//Bấm vào để chuyển qua trang đăng ký
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

//Bấm vào để chuyển qua trang đổi mật khẩu
forgotLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

//Bấm vào để chuyển qua trang đăng nhập
loginLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

//Chuyển đổi các trang
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

//Bấm vào để tắt trang đăng nhập
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});



 function register() {
    // Lấy dữ liệu người dùng từ form
    const username = document.getElementById("#username").value;
    const email = document.getElementById("#email").value;
    const password = document.getElementById("#password").value;

    // Kiểm tra dữ liệu người dùng
    if (username === "" || email === "" || password === "") {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    // Lưu dữ liệu người dùng vào Local Storage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    

    // Thông báo đăng ký thành công
    alert("Đăng ký thành công");
}

// Tạo form đăng ký
const signin = document.getElementById("signin");
signin.addEventListener("submit", register);

function login() {
    // Lấy dữ liệu người dùng từ form
    const username = document.getElementById("#username").value;
    const password = document.getElementById("#password").value;

    // Kiểm tra dữ liệu người dùng
    if (username === "" || password === "") {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    // Lấy dữ liệu người dùng từ Local Storage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // So sánh dữ liệu người dùng
    if (username === storedUsername && password === storedPassword) {
        // Đăng nhập thành công
        alert("Đăng nhập thành công");
    } else {
        // Đăng nhập thất bại
        alert("Tài khoản hoặc mật khẩu không chính xác");
    }
}



