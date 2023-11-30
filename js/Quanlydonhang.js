quanlydonhang();
function quanlydonhang()
{
    var bill=JSON.parse(localStorage.getItem('bill'));

    var qlydonhang = ` <tr>
    <th> ID </th>
    <th>Email</th>
    <th>Xem chi tiết</th>
    <th>Tổng tiền</th>
    <th>Ngày mua hàng</th>
    <th>Tình trạng đơn hàng</th>
   
</tr>`;

                for (let i = 0; i < bill.length; i++) {
                    qlydonhang += `<tr>
                                <td>${bill[i].id} </td>
                                <td>${bill[i].email}</td>
                                <td> <button onclick="xemchitiet(${bill[i].id})"> Chi tiết </button> </td>
                                <td>${formatCurrency(bill[i].tonghoadon)}</td>
                                <td>${bill[i].date}</td>
                                <td style="color :red; font-weight:bold">  ${bill[i].status} 
                                <button type="submit" onclick= "daxuly(${bill[i].id})" style="margin-right: 10px " > Đã xử lý </button> 
                                <button type="submit" onclick= "chuaxuly(${bill[i].id})" style="margin-right: 10px"> Chưa xử lý </button> 
                                </td>
                            </tr>`;
                }
                document.getElementById("quanlyhoadon").innerHTML = qlydonhang;
}
function xemchitiet(id)
{   var tongfull=0;
    var detailbill = document.getElementById('detailbill');
    detailbill.style.display = 'block';
    var bills=JSON.parse(localStorage.getItem('bill'));
    var billindex=bills.findIndex( bill => bill.id === id);
    var chitiet=` </tr>
    <th>Tên sản phẩm</th>
    <th>Hãng</th>
    <th>Giá tiền</th>
    <th>Số lượng</th>
    <th>Đơn giá</th> 
</tr>`;
    for (let i=0; i<bills[billindex].donhang.length; i++)  {
        var total=0;
        total+=parseInt(bills[billindex].donhang[i].price.replace(/\D/g, ''))*bills[billindex].donhang[i].quantity;
        tongfull+=total;
        var total1=formatCurrency(total)
   chitiet+=`<tr>
    <td>${bills[billindex].donhang[i].name} </td>
    <td>${bills[billindex].donhang[i].hang}</td>
    <td>${bills[billindex].donhang[i].price}</td>
    <td>${bills[billindex].donhang[i].quantity}</td>
    <td>${total1} </td>

</tr>`;
   

 }
 chitiet+=`<tr >
 <td style="color :red; font-weight:bolder" colspan="4" font-weight:bold> Tổng: </td>
 <td style="color :red; font-weight:bolder"> ${formatCurrency(tongfull)}</td>

</tr>`
 document.getElementById("chitiethoadon1").innerHTML = chitiet;

}


function closedetailbill() {
    var detailbill = document.getElementById('detailbill');
    detailbill.style.display = 'none';
}
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    }

function daxuly(id)
{    
    var result= confirm("Chuyển trạng thái thành đã xử lý ?")
    if (result===true)
   { var bills=JSON.parse(localStorage.getItem('bill'));
    var billindex=bills.findIndex( bill => bill.id === id);
    if (bills[billindex].status=== "Chưa xử lý")
    bills[billindex].status="Đã xử lý";
    localStorage.setItem('bill',JSON.stringify(bills));
    quanlydonhang();
}
}
function chuaxuly(id)
{    
    var result= confirm("Chuyển trạng thái thành chưa xử lý ?")
    if (result===true)
   { var bills=JSON.parse(localStorage.getItem('bill'));
    var billindex=bills.findIndex( bill => bill.id === id);
    if (bills[billindex].status=== "Đã xử lý")
    bills[billindex].status="Chưa xử lý";
    localStorage.setItem('bill',JSON.stringify(bills));
    quanlydonhang();
}
}

function filterByDate() {
    var datestart = getFormattedDate(document.getElementById("datestart").value);
    var dateend=getFormattedDate(document.getElementById("dateend").value);
    
    if (datestart>dateend) {alert("Ngày bắt đầu không được sau ngày kết thúc"); return;}
    if (datestart&&dateend) {
      
        var filteredOrders = getOrdersInDateRange(datestart,dateend)
     
        displayFilteredOrders(filteredOrders);
    } else {
        // If no date is selected, display all orders
        quanlydonhang();
    }
}
function displayFilteredOrders(filteredOrders)
{

    var qlydonhang = `<tr>
        <th>ID</th>
        <th>Email</th>
        <th>Xem chi tiết</th>
        <th>Tổng tiền</th>
        <th>Ngày mua hàng</th>
        <th>Tình trạng đơn hàng</th>
    </tr>`;

    for (let i = 0; i < filteredOrders.length; i++) {
        qlydonhang += `<tr>
            <td>${filteredOrders[i].id}</td>
            <td>${filteredOrders[i].email}</td>
            <td><button onclick="xemchitiet(${filteredOrders[i].id})">Chi tiết</button></td>
            <td>${formatCurrency(filteredOrders[i].tonghoadon)}</td>
            <td>${filteredOrders[i].date}</td>
            <td style="color:red; font-weight:bold">${filteredOrders[i].status}
                <button type="submit" onclick="daxuly(${filteredOrders[i].id})" style="margin-right: 10px">Đã xử lý</button>
                <button type="submit" onclick="chuaxuly(${filteredOrders[i].id})" style="margin-right: 10px">Chưa xử lý</button>
            </td>
        </tr>`;
    }

    document.getElementById("quanlyhoadon").innerHTML = qlydonhang;
}

function getOrdersInDateRange(startDate, endDate) {
    var allOrders = JSON.parse(localStorage.getItem('bill')) || [];

  
    var filteredOrders = allOrders.filter(order => {
        var formattedOrderDate = getFormattedDate(order.date);
        return formattedOrderDate >= startDate && formattedOrderDate <= endDate;
    });
    
    return filteredOrders;
}

function getFormattedDate(dateString) {
    var date = new Date(dateString);
    // Get day, month, and year
    var day = date.getDate();
    var month = date.getMonth() + 1; 
    var year = date.getFullYear();
    
    // Format the date as DD/MM/YYYY
    var formattedDate = `${day}/${month}/${year}`;
    
    return formattedDate;
}

function thongKeDoanhSoTrong1Tuan() {
    var startDate =getFormattedDate(document.getElementById("datestart2").value);
    var endDate = getFormattedDate(document.getElementById("dateend2").value);

    var allOrders = getOrdersInDateRange(startDate, endDate);
    var doanhSo = 0;

    for (let i = 0; i < allOrders.length; i++) {
        doanhSo += allOrders[i].tonghoadon;
    }
    for (let i = 0; i < allOrders.length; i++) {
        console.log(`Date: ${allOrders[i].date}, Revenue: ${formatCurrency(allOrders[i].tonghoadon)}`);
    }

    console.log(doanhSo);
    return formatCurrency(doanhSo);
}

function thongKedoanhsotheohang1tuan(firms) {
    var endDate = new Date();
    var startDate= new Date(endDate.getTime());
    startDate.setDate(endDate.getDate()-7)
    endDate=getFormattedDate(endDate);
    startDate=getFormattedDate(startDate);
    var allOrders = getOrdersInDateRange(startDate, endDate);
    var TongTienTheoFirm = {};

var endDate = new Date();

    // Initialize the quantities for each firm to 0
    firms.forEach(firm => {
       TongTienTheoFirm[firm] = 0;
    });

    for (let i = 0; i < allOrders.length; i++) {
        for (let j = 0; j < allOrders[i].donhang.length; j++) {
            var hang = allOrders[i].donhang[j].hang;
            // Check if the hang is in the list of firms
            if (firms.includes(hang)) {
                TongTienTheoFirm[hang] += parseInt(allOrders[i].donhang[j].price.replace(/\D/g, ''))*allOrders[i].donhang[j].quantity;
            }
        }
    }
    return TongTienTheoFirm;
    
}

// Example usage
var firms = ['Asus', 'Acer', 'Lenovo', 'MSI', 'DELL', 'Hp'];
var tongtientheongay;

var result = thongKedoanhsotheohang1tuan(firms);
console.log(result);

