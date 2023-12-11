
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
                                <td>${formatCurrency(bill[i].total)}</td>
                                <td>${bill[i].date}</td>
                                <td style="color :red; font-weight:bold">  ${bill[i].status} 
                                <button type="submit" onclick= "daxuly(${bill[i].id})" style="margin-right: 10px " > Đã xử lý </button> 
                                <button type="submit" onclick= "chuaxuly(${bill[i].id})" style="margin-right: 10px"> Chưa xử lý </button> 
                                <button type="button" onclick="xoaHoaDonById(${bill[i].id})" style="margin-right: 10px>Xóa</button>
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
    for (let i=0; i<bills[billindex].list.length; i++)  {
        var total=0;
        total+=parseInt(bills[billindex].list[i].price.replace(/\D/g, ''))*bills[billindex].list[i].quantity;
        tongfull+=total;
        var total1=formatCurrency(total)
   chitiet+=`<tr>
    <td>${bills[billindex].list[i].name} </td>
    <td>${bills[billindex].list[i].hang}</td>
    <td>${bills[billindex].list[i].price}</td>
    <td>${bills[billindex].list[i].quantity}</td>
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
    console.log(datestart);
    console.log(dateend);
    
    if (datestart>dateend) {alert("Ngày bắt đầu không được sau ngày kết thúc"); return;}
    if (datestart&&dateend) {
      
        var filteredOrders = getOrdersInDateRange(datestart,dateend)
     
        displayFilteredOrders(filteredOrders);
    } else {
     
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
            <td>${formatCurrency(filteredOrders[i].total)}</td>
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

    var day = date.getDate();
    var month = date.getMonth() + 1; 
    var year = date.getFullYear();
    
    var formattedDate = `${day}/${month}/${year}`;
    
    return formattedDate;
}

function thongKeDoanhSoTrong1Tuan() {
    var startDate =getFormattedDate(document.getElementById("datestart2").value);
    var endDate = getFormattedDate(document.getElementById("dateend2").value);
    


    var allOrders = getOrdersInDateRange(startDate, endDate);
    var doanhSo = 0;

    for (let i = 0; i < allOrders.length; i++) {
        doanhSo += allOrders[i].total;
    }

    var intongdoanhso = `  <h2> Doanh số từ ngày ${getFormattedDate(startDate)} tới ngày ${getFormattedDate(endDate)} là ${formatCurrency(doanhSo)}</h2> `;
    document.getElementById("tongdoanhso").innerHTML=intongdoanhso;
    }
   

quanlydonhang();
function thongKedoanhsotheohang1tuan(firms) {
    var endDate = document.getElementById("dateend2").value;
    var startDate= document.getElementById("datestart2").value;
    endDate=getFormattedDate(endDate);
    startDate=getFormattedDate(startDate);
    console.log(endDate);
    console.log(startDate);
    var allOrders = getOrdersInDateRange(startDate, endDate);
    var TongTienTheoFirm = {};
    var TongsoluongtheoFirm={}
;

    firms.forEach(firm => {
       TongTienTheoFirm[firm] = 0;
       TongsoluongtheoFirm[firm]=0;
    });

    for (let i = 0; i < allOrders.length; i++) {
        for (let j = 0; j < allOrders[i].list.length; j++) {
            var hang = allOrders[i].list[j].hang;
          
            if (firms.includes(hang)) {
                TongTienTheoFirm[hang] += parseInt(allOrders[i].list[j].price.replace(/\D/g, ''))*allOrders[i].list[j].quantity;
                TongsoluongtheoFirm[hang] += parseInt(allOrders[i].list[j].quantity);
            }
        }
    }
    var tableHtml = `  <h2 > Doanh số theo hãng từ ngày ${getFormattedDate(startDate)} tới ngày ${getFormattedDate(endDate)} </h2>
                        <tr>
                            <th>Hãng</th>
                            <th>Số lượng bán được</th>
                            <th>Doanh số bán</th>
                        </tr>`;

    firms.forEach(firm => {
        tableHtml += ` 
        <tr>
                        <td>${firm}</td>
                        <td>${TongsoluongtheoFirm[firm]}</td>
                        <td>${formatCurrency(TongTienTheoFirm[firm])}</td>
                      </tr>`;
    });

  

 
    document.getElementById("quanlydoanhso").innerHTML = tableHtml
} 


var firms = ['Asus', 'Acer', 'Lenovo', 'MSI', 'DELL', 'Hp'];
var tongtientheongay;

var result = thongKedoanhsotheohang1tuan(firms);
console.log(result);

function thongKe(){
    var startDate =getFormattedDate(document.getElementById("datestart2").value);
    var endDate = getFormattedDate(document.getElementById("dateend2").value);
    
    if (startDate>endDate) {alert("Ngày bắt đầu không được sau ngày kết thúc"); return;}
    thongKeDoanhSoTrong1Tuan();
    thongKedoanhsotheohang1tuan(firms);

}


function xoaHoaDonById(id) {
    var result = confirm("Bạn có chắc muốn xóa hóa đơn có ID " + id + " không?");
    if (result) {
        var bills = JSON.parse(localStorage.getItem('bill')) || [];
        var updatedBills = bills.filter(bill => bill.id !== id);
        localStorage.setItem('bill', JSON.stringify(updatedBills));
        quanlydonhang(); // Refresh the order management table
    }
}
