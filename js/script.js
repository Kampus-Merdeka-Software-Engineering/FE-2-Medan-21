let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function tambahKeKeranjang() {
    // Lakukan operasi penambahan ke keranjang di sini
    
    // Tampilkan alert
    alert("Produk berhasil ditambahkan ke keranjang!");
}

// checkout
function placeOrder() {
    // Dapatkan informasi pengiriman
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    // Dapatkan informasi pembayaran
    var cardNumber = document.getElementById("cardNumber").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;

    // Lakukan validasi atau pengolahan data lebih lanjut jika diperlukan

    // Simulasikan pesanan berhasil
    alert("Pesanan berhasil ditempatkan!\nTerima kasih, " + name + "!");
}
