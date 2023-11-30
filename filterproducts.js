var listthuonghieu = document.getElementById('item-thuonghieu');
var groupfilterthuonghieu = document.getElementById('group-filter-thuonghieu');

var listgia = document.getElementById('item-gia');
var groupfiltergia = document.getElementById('group-filter-gia');

var listssd = document.getElementById('item-ssd');
var groupfilterssd = document.getElementById('group-filter-ssd');

var listcpu = document.getElementById('item-cpu');
var groupfiltercpu = document.getElementById('group-filter-cpu');

var listvga = document.getElementById('item-vga');
var groupfiltervga = document.getElementById('group-filter-vga');

listthuonghieu.addEventListener('click', function(){
    if ( groupfilterthuonghieu.style.display === 'none') {
        // Hiển thị cửa sổ nếu nó đang ẩn
        groupfilterthuonghieu.style.display = 'block';
    } else {
        // Ẩn cửa sổ nếu nó đang hiển thị
        groupfilterthuonghieu.style.display = 'none';
    }
});

listgia.addEventListener('click', function(){
    if ( groupfiltergia.style.display === 'none') {
        // Hiển thị cửa sổ nếu nó đang ẩn
        groupfiltergia.style.display = 'block';
    } else {
        // Ẩn cửa sổ nếu nó đang hiển thị
        groupfiltergia.style.display = 'none';
    }
});

listssd.addEventListener('click', function(){
    if ( groupfilterssd.style.display === 'none') {
        // Hiển thị cửa sổ nếu nó đang ẩn
        groupfilterssd.style.display = 'block';
    } else {
        // Ẩn cửa sổ nếu nó đang hiển thị
        groupfilterssd.style.display = 'none';
    }
});

listcpu.addEventListener('click', function(){
    if ( groupfiltercpu.style.display === 'none') {
        // Hiển thị cửa sổ nếu nó đang ẩn
        groupfiltercpu.style.display = 'block';
    } else {
        // Ẩn cửa sổ nếu nó đang hiển thị
        groupfiltercpu.style.display = 'none';
    }
});

listvga.addEventListener('click', function(){
    if ( groupfiltervga.style.display === 'none') {
        // Hiển thị cửa sổ nếu nó đang ẩn
        groupfiltervga.style.display = 'block';
    } else {
        // Ẩn cửa sổ nếu nó đang hiển thị
        groupfiltervga.style.display = 'none';
    }
});