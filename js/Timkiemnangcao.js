document.addEventListener('DOMContentLoaded', function () {
    var clickboloc = document.getElementById('button-boloc');
    clickboloc.addEventListener('click', function () {
      var containerboloc = document.getElementById('container-timkiemnangcao');
        containerboloc.style.display = 'block';
    });
    var closeboloc = document.getElementById('closeboloc');
    closeboloc.addEventListener('click', function () {
        var containerboloc = document.getElementById('container-timkiemnangcao');
          containerboloc.style.display = 'none';
      });
  });

function changeColor(element) {
    // Đảo trạng thái màu sắc thông qua việc thêm/xóa lớp 'selected'
    element.classList.toggle('selected');
}

// Function để định dạng số với dấu phẩy
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function để xóa dấu phẩy khi lấy giá trị số từ chuỗi
function removeCommas(value) {
    return value.replace(/,/g, '');
}

document.addEventListener('DOMContentLoaded', function () {
    var priceMinInput = document.getElementById('price-min');
    var priceMaxInput = document.getElementById('price-max');
// Thêm sự kiện input cho ô input giá thấp nhất
    priceMinInput.addEventListener('input', function () {
        // Lấy giá trị từ ô input
        var inputValue = this.value;
        // Chuyển giá trị thành số
        var minValue = parseFloat(inputValue.replace(/,/g, '')) || 0;
        var maxValue = parseFloat(priceMaxInput.value.replace(/,/g, ''));
        // Định dạng số với dấu phẩy và hiển thị
        this.value = formatNumberWithCommas(minValue);
        priceSlider.noUiSlider.set([minValue, maxValue]);
    });

    // Thêm sự kiện input cho ô input giá cao nhất
    priceMaxInput.addEventListener('input', function () {
        // Lấy giá trị từ ô input
        var inputValue = this.value;
        // Chuyển giá trị thành số
        var minValue = parseFloat(priceMinInput.value.replace(/,/g, '')) || 0;
        var maxValue = parseFloat(inputValue.replace(/,/g, '')) || 50000000;
        // Định dạng số với dấu phẩy và hiển thị
        this.value = formatNumberWithCommas(maxValue);
        priceSlider.noUiSlider.set([minValue, maxValue]);
        console.log(maxValue);
    });

});

//HÀM ĐÓNG MỞ FORM LỌC NÂNG CAO
function filterAndShowProducts(){
    filteritem();
    var containerboloc = document.getElementById('container-timkiemnangcao');
        containerboloc.style.display = 'none';
}


