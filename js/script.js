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
    // TODO
    // setiap kali ini dipencet,
    // fetch barang yang di "add to cart"
    // di database
    
    // misal jika hasil fetch dari tabel cart
    // itu kumpulan id setiap barang
    barangId = [1, 2, 3];

    // https://localhost:3003/images/nasi-goreng.jpg
    // domain: https://localhost:3003 <- baseUrl
    // subdomain: imimages/nasi-goreng.j

    // let imgUrl = baseUrl + subdomain3];
    // "https://be-palembang-24-production.up.railway.app/images/nasi-goreng.jpg"

    // untuk setiap data pada database,
    // ini dipakai sebagai "template" untuk
    // menunjukkan barang pada "cart"
    let isiHTML = "";
    foreach(id in idBarang);{
        // fetch buat barang berdasarkan idnya
        let hasilFetch = {
            nama: namaBarang,
            urlImg: imgBarang,
            harga: hargaBarang
        };
        
        let namaBarang = hasilFetch["namaBarang"];
        let imgBarang = hasilFetch["imgBarang"];
        let hargaBarang = hasilFetch["hargaBarang"];
        isiHTML += `
            <div class="cart-item">
                <span class="fas fa-times"></span>
                <img src="${imgBarang}" alt="">
                <div class="content">
                    <h3>${namaBarang}</h3>
                    <div class="price">Rp ${hargaBarang}}/-</div>
                </div>
            </div>
        `;
    }

    //taruh hasil format html ke tampilan carth
    cartItem.innerHTML = isiHTML;

    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function tambahKeKeranjang(idbarang) {
    // Lakukan operasi penambahan ke keranjang di sini
    
    // Tampilkan alert
    alert("Produk " + idbarang + " berhasil ditambahkan ke keranjang!");
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
