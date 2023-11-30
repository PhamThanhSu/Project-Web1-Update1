hienthiquanlytk();
function hienthiquanlytk() {
    // Get existing users from local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];
    // Reinitialize the table header
    var qlytk = `<tr>
                    <th>Email</th>
                    <th>Mật khẩu</th>
                    <th>Ngày đăng ký</th>
                    <th>Quyền</th>
                    <th>Xóa</th>
                </tr>`;

    // Populate the table with user data
    for (let i = 0; i < users.length; i++) {
        qlytk += `<tr>
                    <td>${users[i].email}</td>
                    <td>${users[i].password}</td>
                    <td>${users[i].registrationDate}</td>
                    <td>${users[i].role}</td>
                    <td>
                        <button onclick="deleteusers('${users[i].email}')"> Xóa </button>
                    </td>
                </tr>`;
    }

    // Update the table content
    document.getElementById("quanlytkTable").innerHTML = qlytk;
}

function deleteusers(email) {
    var result=  confirm("Bạn có muốn xóa tài khoản này ?");
    if(result == true) {
  // Get existing products from local storage
  var users = JSON.parse(localStorage.getItem('users')) || [];
  
  // Find the product index by ID
  var usersIndex = users.findIndex(users => users.email === email);
  
  // Delete the product if found
  if (usersIndex !== -1) {
  // Remove the product from the array
  
  users.splice(usersIndex, 1);
  
  // Save the updated products to local storage
  localStorage.setItem('users', JSON.stringify(users));
  
  // Call render to update the table
  hienthiquanlytk();
  
  alert('Tài khoản đã được xóa');
  } 
  }
  else  alert("Bạn không xóa tài khoản");
  }
