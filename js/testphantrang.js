// Số lượng phần tử hiển thị trên mỗi trang
const itemsPerPage = 5;
// Trang hiện tại
let currentPage = 1;

// Hàm thay đổi trang
function changePage(page, items, paginationContainer) {
    // Cập nhật trang hiện tại
    currentPage = page;
    // Hiển thị các phần tử trên trang mới
    showPage(items, paginationContainer);
}

// Hàm hiển thị các phần tử trên trang hiện tại
function showPage(items, paginationContainer) {
    // Ẩn tất cả các phần tử
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }

    // Tính chỉ số bắt đầu và kết thúc của phần tử trên trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, items.length);

    // Hiển thị các phần tử trong khoảng từ startIndex đến endIndex
    for (let i = startIndex; i < endIndex; i++) {
        items[i].style.display = 'block';
    }

    // Kiểm tra nếu có ít nhất 2 trang thì mới hiển thị phân trang
    if (calculateTotalPages(items) > 1) {
        renderPagination(items, paginationContainer);
    } else {
        // Nếu không, xóa phân trang cũ
        removePagination();
    }
}

// Hàm tính tổng số trang
function calculateTotalPages(items) {
    return Math.ceil(items.length / itemsPerPage);
}
// Hàm xóa phân trang
function removePagination() {
    var divremove = document.getElementsByClassName('pagination-btn');
    // Lặp qua danh sách và xóa từng phần tử
    for (var i = divremove.length - 1; i >= 0; i--) {
        divremove[i].remove();
    }
}

// Hàm tạo và hiển thị các nút phân trang
function renderPagination(items, paginationContainer) {
    // Tính tổng số phần tử
    const totalItems = items.length;
    // Tính tổng số trang
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Xóa nội dung của container phân trang
    paginationContainer.innerHTML = '';

    // Tạo nút cho mỗi trang
    for (let i = 1; i <= totalPages; i++) {
        // Tạo một div để làm nút phân trang
        const btn = document.createElement('div');
        // Gán số trang cho nút
        btn.innerText = i;
        // Gán lớp CSS cho nút
        btn.className = 'pagination-btn';

        // Gán sự kiện click cho nút, gọi hàm changePage khi nút được nhấp
        btn.onclick = function () {
            changePage(i, items, paginationContainer);
        };

        // Nếu là trang hiện tại, thêm lớp 'active' để làm nổi bật
        if (i === currentPage) {
            btn.classList.add('active');
        }

        // Thêm nút vào container phân trang
        paginationContainer.appendChild(btn);
    }
}
thisPageloc = document.querySelectorAll('.item-selling-products .itemproduct');
    var phantrangloc = document.getElementById('pagenumber2');
    showPage(thisPageloc, phantrangloc);
// Ví dụ sử dụng cho phân trang gaming
thisPageGaming = document.querySelectorAll('.list1-gaming .itemproduct');
var paginationContainergaming = document.getElementById('pagenumber-gaming');
showPage(thisPageGaming, paginationContainergaming);
// Ví dụ sử dụng cho phân trang doanh nhan
thisPageDoanhnhan = document.querySelectorAll('.list1-doanhnhan .itemproduct');
var paginationContainerdoanhnhan = document.getElementById('pagenumber-doanhnhan');
showPage(thisPageDoanhnhan, paginationContainerdoanhnhan);
// Ví dụ sử dụng cho phân trang do hoa
thisPageDohoa = document.querySelectorAll('.list1-dohoa .itemproduct');
var paginationContainerdohoa = document.getElementById('pagenumber-dohoa');
showPage(thisPageDohoa, paginationContainerdohoa);