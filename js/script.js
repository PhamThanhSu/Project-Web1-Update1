const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const ForgotPassLink=document.querySelector('.ForgotPassword-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconclose=document.querySelector('.icon-close');
var email2;
//Bấm vào để chuyển qua trang đăng ký
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

//Bấm vào để chuyển qua trang đổi mật khẩu


//Bấm vào để chuyển qua trang đăng nhập
loginLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

//Chuyển đổi các trang
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

//Bấm vào để tắt trang đăng nhập
iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});


//Kiểm tra tính hợp lệ của email
function validateEmail(email) 
{
  const regex= /^[^\s@]+@gmail\.com$/;
  //const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

//Kiểm tra độ mạnh yếu của email
function checkPassword(password) 
{
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return regex.test(password);
}


//Kiểm tra xác nhận mật khẩu có trùng khớp với mật khẩu khi ở trang đăng ký
function arePasswordsMatching(password, checkpassword) 
{
  // Kiểm tra xem mật khẩu và xác nhận mật khẩu có trùng khớp hay không
  return password === checkpassword;
}

function isEmailExists(email) {
  var users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the email exists in the users array
  return users.some(user => user.email === email);
}


//localStorage cho trang đăng ký lưu trữ thông tin

// localStorage cho trang đăng ký lưu trữ thông tin
function signup() {
  // Lấy email từ input
  var email = document.getElementById('email').value;

  // Lấy mật khẩu từ input
  var password = document.getElementById('password').value;

  var registrationDate = new Date();
 
  var formattedDate = registrationDate.toLocaleString();

  // Lấy xác nhận mật khẩu từ input
  var checkpassword = document.getElementById('checkpassword').value;
  if (isEmailExists(email)) {
    alert('Email đã tồn tại');
    return;
  } 
  // Kiểm tra email đã hợp lệ chưa 
  if (!validateEmail(email)) {
      alert("Email không hợp lệ! Vui lòng nhập tài khoản có đuôi @gmail.com");
      return;
  }

  // Kiểm tra mật khẩu mạnh hay yếu
  if (!checkPassword(password)) {
      alert("Mật khẩu của bạn chưa đủ mạnh! Hãy đặt mật khẩu có chữ cái viết hoa và có số !" 
      );
      return;
  }
  
  

  // Kiểm tra độ trùng khớp giữa xác nhận mật khẩu và mật khẩu
  var passwordsMatch = arePasswordsMatching(password, checkpassword);

  if (!passwordsMatch) {
      alert("Xác nhận mật khẩu chưa chính xác!");
      return;
  }
 
// <------------------------------------------------->
  // Tạo tài khoản bằng đăng kí
  if(email === "Admin123@gmail.com")
  var role = 'Admin'; else var role = 'User';
  var status= 'False';
  // Tạo 1 đối tượng tài khoản mới
  var account = {
      email: email,
      password: password,
      checkpassword: checkpassword,
      registrationDate: formattedDate,
      role: role,
      status: status // Include the role field
  };
  
  // Kiểm tra tài khoản đã nằm trong localStorage chưa
  var accounts = JSON.parse(localStorage.getItem('users')) || [];
  
  // Thêm tài khoản mới vào mảng
  accounts.push(account);

  // Lưu tài khoản vào localStorage với key là 'users'
  localStorage.setItem('users', JSON.stringify(accounts));

  if (password === checkpassword) {
      // Hiển thị thông báo thành công
 
      alert('Tài khoản đã tạo thành công');
           window.location.href="Trangchu_DoAn.html";
  } else {
      alert('Tài khoản đã tạo thất bại');
  }
}
// localStorage cho trang đăng nhập truy xuất thông tin
function login(event) {
  // Lấy từ form login
  event.preventDefault();
  var email1 = document.getElementById("gmail").value;
  var password1 = document.getElementById("firewall").value;

  // Kiểm tra từ localstorage
  var users = JSON.parse(localStorage.getItem('users')) || [];



  // Tìm email và mật khẩu trong localstorage
  var loggedInUser = users.find(user => user.email === email1 && user.password === password1 && user.role === "User" );
  var loggedInAdmin = users.find(user => user.email === email1 && user.password === password1 && user.role === "Admin" );
  
  if(loggedInAdmin)
  {  

     
    var userIndex= users.findIndex(account => account.email === document.getElementById('gmail').value);
    users[userIndex].status='True';
    localStorage.setItem('loginemail', JSON.stringify({ email: email1, role: 'Admin' }));
    localStorage.setItem('users', JSON.stringify(users));
    
    alert("Đăng nhập thành công!, Chào Admin");
      window.location.href="Layout admin.html";
  }  
  else if (loggedInUser) {
    var userIndex= users.findIndex(account => account.email === document.getElementById('gmail').value);
    users[userIndex].status='True';
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('loginemail', JSON.stringify({ email: email1, role: 'User' }));
    alert("Đăng nhập thành công!");
      window.location.href="Trangchu_DoAn.html";
  } else {
    
      alert("Tài khoản hoặc mật khẩu không chính xác!");
  }
}

// Logout function
function logout() {
  var loggedInEmail = localStorage.getItem('loginemail');

  // Convert the JSON string back to an object
      loggedInEmail = JSON.parse(loggedInEmail);
  // Get the list of users from localStorage
  var users = JSON.parse(localStorage.getItem('users')) || [];

  // Find the user with the matching email
  var userIndex = users.findIndex(user => user.email === loggedInEmail.email );

  // Update the user's status to "False"
  if (userIndex !== -1) {
      users[userIndex].status = 'False';
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.removeItem('loginemail');
      alert("Đăng xuất thành công!");
      // Redirect to the login page or any other desired page after logout
      window.location.href = "8Lap_Login.html";
  } else {
      alert("Đăng xuất thất bại. Người dùng không tồn tại!");
  }
}

