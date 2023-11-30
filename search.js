function handleSearchs() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const products = document.getElementsByClassName('name');

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productName = product.textContent.toLowerCase();
        const productItem = product.parentElement.parentElement.parentElement;

        if (productName.includes(searchTerm)) {
            productItem.style.display = 'block';
        } else {
            productItem.style.display = 'none';
        }
    }

    return false; // Ngăn chặn việc gửi biểu mẫu
}
function handleSearchFileresult() {
    const searchTerm = document.getElementById('search').value;
    window.location.href = `testketqua.html?searchTerm=${searchTerm}`;
    return false; // Ngăn chặn việc gửi biểu mẫu
}