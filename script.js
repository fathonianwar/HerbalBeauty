// Fungsi untuk popup detail produk
document.querySelectorAll('.detail-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const produk = this.parentElement.dataset.produk;
        const popup = document.getElementById('produk-popup');
        const img = document.getElementById('popup-img');
        const nama = document.getElementById('popup-nama');
        const harga = document.getElementById('popup-harga');
        const deskripsi = document.getElementById('popup-deskripsi');
        const varian = document.getElementById('popup-varian');
        const waLink = document.getElementById('popup-wa');

        // Data produk (hardcoded untuk demo)
        const produkData = {
            'Sabun Lavender': {
                img: 'img/produk1.jpg',
                harga: 'Rp 25.000',
                deskripsi: 'Sabun herbal dengan aroma lavender yang menenangkan.',
                varian: 'Ukuran: 100g'
            },
            'Lotion Aloe Vera': {
                img: 'img/produk2.jpg',
                harga: 'Rp 35.000',
                deskripsi: 'Lotion pelembap dari ekstrak aloe vera.',
                varian: 'Ukuran: 200ml'
            },
            'Minyak Esensial Peppermint': {
                img: 'img/produk3.jpg',
                harga: 'Rp 40.000',
                deskripsi: 'Minyak esensial peppermint untuk relaksasi.',
                varian: 'Ukuran: 10ml'
            }
        };

        const data = produkData[produk];
        img.src = data.img;
        nama.textContent = produk;
        harga.textContent = data.harga;
        deskripsi.textContent = data.deskripsi;
        varian.textContent = data.varian;
        waLink.href = `https://wa.me/628123456789?text=Halo,%20saya%20ingin%20pesan%20${encodeURIComponent(produk)}.`;

        popup.style.display = 'block';
    });
});

// Fungsi untuk popup detail blog
document.querySelectorAll('.baca-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const blogId = this.parentElement.dataset.blog;
        const popup = document.getElementById('blog-popup');
        const img = document.getElementById('blog-popup-img');
        const judul = document.getElementById('blog-popup-judul');
        const tanggal = document.getElementById('blog-popup-tanggal');
        const isi = document.getElementById('blog-popup-isi');

        // Data blog (hardcoded untuk demo)
        const blogData = {
            '1': {
                img: 'img/blog1.jpg',
                judul: 'Manfaat Sabun Herbal untuk Kulit',
                tanggal: '15 Oktober 2023',
                isi: 'Sabun herbal dapat membersihkan kulit tanpa iritasi. Bahan alami seperti lavender membantu menenangkan kulit sensitif.'
            },
            '2': {
                img: 'img/blog2.jpg',
                judul: 'Cara Merawat Kulit dengan Bahan Alami',
                tanggal: '20 Oktober 2023',
                isi: 'Perawatan kulit alami menggunakan bahan dari alam seperti aloe vera dan peppermint. Ini lebih aman dan efektif.'
            }
        };

        const data = blogData[blogId];
        img.src = data.img;
        judul.textContent = data.judul;
        tanggal.textContent = data.tanggal;
        isi.textContent = data.isi;

        popup.style.display = 'block';
    });
});

// Tutup popup
document.querySelectorAll('.close').forEach(close => {
    close.addEventListener('click', function() {
        this.closest('.popup').style.display = 'none';
    });
});

// Validasi form kontak
document.getElementById('kontak-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const hp = document.getElementById
    