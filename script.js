// --- BASIS PENGETAHUAN (Knowledge Base) ---
// Data ini disusun berdasarkan Dokumentasi Tabel Pengetahuan 
// Kami menambahkan beberapa tag tambahan untuk menutupi celah logika (seperti Taman Bungkul = Kuliner)

// --- BASIS PENGETAHUAN (Knowledge Base) ---
const dataWisata = [
    {
        id: 1,
        nama: "Kebun Binatang Surabaya",
        jenis: ["keluarga", "edukasi", "alam"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "murah",
        gambar: "images/kbs.jpg",
        deskripsi: "Destinasi wisata edukasi satwa terlengkap di Asia Tenggara. Cocok untuk keluarga dan anak-anak mengenal berbagai jenis binatang di lingkungan yang asri."
    },
    {
        id: 2,
        nama: "Tugu Pahlawan",
        jenis: ["sejarah"],
        lokasi: "outdoor",
        suasana: "menengah",
        budget: "murah",
        gambar: "images/tupal.jpg",
        deskripsi: "Monumen ikonik Surabaya untuk mengenang pertempuran 10 November. Dilengkapi dengan museum bawah tanah yang menyimpan diorama sejarah perjuangan."
    },
    {
        id: 3,
        nama: "Taman Bungkul",
        jenis: ["alam", "keluarga", "kuliner"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "gratis",
        gambar: "images/bungkul.png", 
        deskripsi: "Taman kota terbaik yang asri dan hijau. Dilengkapi area bermain anak, skate park, dan sentra kuliner kaki lima yang sangat ramai di malam hari."
    },
    {
        id: 4,
        nama: "Museum 10 November",
        jenis: ["sejarah", "edukasi"],
        lokasi: "indoor",
        suasana: "tenang",
        budget: "murah",
        gambar: "images/mussep.webp",
        deskripsi: "Museum yang terletak di kompleks Tugu Pahlawan. Menyimpan bukti sejarah pertempuran 10 November, rekaman pidato Bung Tomo, dan senjata perjuangan."
    },
    {
        id: 5,
        nama: "Jembatan Suramadu",
        jenis: ["alam"],
        lokasi: "outdoor",
        suasana: "menengah",
        budget: "gratis",
        gambar: "images/suramadu.jpg",
        deskripsi: "Jembatan terpanjang di Indonesia yang menghubungkan Surabaya dan Madura. Menawarkan pemandangan laut selat Madura yang indah, terutama saat matahari terbit."
    },
    {
        id: 6,
        nama: "Hotel Majapahit",
        jenis: ["sejarah"],
        lokasi: "indoor",
        suasana: "tenang",
        budget: "menengah",
        gambar: "images/homaj.png",
        deskripsi: "Hotel bersejarah saksi bisu insiden perobekan bendera Belanda. Memiliki arsitektur kolonial yang mewah dan taman dalam yang sangat indah."
    },
    {
        id: 7,
        nama: "Ciputra Waterpark",
        jenis: ["keluarga"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "menengah",
        gambar: "images/ciputra.jpg",
        deskripsi: "Taman bermain air terbesar di Surabaya dengan tema Sinbad. Memiliki banyak wahana seru seperti kolam ombak dan seluncuran raksasa."
    },
    {
        id: 8,
        nama: "Monumen Kapal Selam",
        jenis: ["sejarah", "edukasi"],
        lokasi: "indoor",
        suasana: "menengah",
        budget: "murah",
        gambar: "images/monkasel.jpg",
        deskripsi: "Monumen Kapal Selam KRI Pasopati 410 asli buatan Rusia. Pengunjung bisa masuk ke dalam kapal selam dan melihat interior ruang kendali serta torpedo."
    },
    {
        id: 9,
        nama: "Surabaya North Quay",
        jenis: ["kuliner", "edukasi"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "murah",
        gambar: "images/snq.jpg",
        deskripsi: "Tempat nongkrong kekinian di tepi laut Pelabuhan Tanjung Perak. Menawarkan pemandangan laut lepas dan kapal pesiar mewah yang bersandar."
    },
    {
        id: 10,
        nama: "Alun-alun Surabaya",
        jenis: ["alam", "sejarah"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "gratis",
        gambar: "images/alun.png",
        deskripsi: "Ikon pusat kota Surabaya yang menggabungkan area terbuka hijau dan ruang seni bawah tanah (basement) yang sering mengadakan pameran seni."
    }
];

function cariRekomendasi() {
    // 1. Ambil Input (sama seperti sebelumnya)
    let inputJenis = document.getElementById("jenis").value;
    if (inputJenis === "skip") inputJenis = null;
    let inputLokasi = document.getElementById("lokasi").value;
    if (inputLokasi === "skip") inputLokasi = null;
    let inputSuasana = document.getElementById("suasana").value;
    if (inputSuasana === "skip") inputSuasana = null;
    let inputBudget = document.getElementById("budget").value;
    if (inputBudget === "skip") inputBudget = null;

    // 2. Filter Logic (sama seperti sebelumnya)
    let hasilRekomendasi = dataWisata.filter(wisata => {
        let cekJenis = inputJenis === null || wisata.jenis.includes(inputJenis);
        let cekLokasi = inputLokasi === null || wisata.lokasi === inputLokasi;
        let cekSuasana = inputSuasana === null || wisata.suasana === inputSuasana;
        let cekBudget = inputBudget === null || wisata.budget === inputBudget;
        return cekJenis && cekLokasi && cekSuasana && cekBudget;
    });

    // 3. Tampilkan Output (DIPERBARUI agar bisa diklik)
    let outputDiv = document.getElementById("output");
    outputDiv.style.display = "block";

    if (hasilRekomendasi.length === 0) {
        outputDiv.innerHTML = `<div style="padding:10px; color: #7f1d1d; background: #fef2f2; border-radius:6px;">
            <i class="fa-solid fa-circle-exclamation"></i> 
            Maaf, tidak ada wisata yang cocok dengan kombinasi filter ini.
        </div>`;
    } else {
        // Generate list dengan fungsi onclick="lihatDetail(id)"
        let listHtml = hasilRekomendasi.map(w => 
            `<div class="result-item" onclick="lihatDetail(${w.id})">
                ${w.nama}
            </div>`
        ).join("");
        
        outputDiv.innerHTML = `
            <div style="margin-bottom:10px; font-weight:bold;">
                Ditemukan ${hasilRekomendasi.length} rekomendasi (Klik untuk detail):
            </div>
            <div style="background:white; border-radius:8px; overflow:hidden; border:1px solid #e2e8f0;">
                ${listHtml}
            </div>`;
    }
}

// --- Fungsi Baru: Menampilkan Modal ---
function lihatDetail(idWisata) {
    // Cari data berdasarkan ID
    const wisata = dataWisata.find(w => w.id === idWisata);

    if (wisata) {
        // Isi data ke dalam elemen HTML Modal
        document.getElementById("modalTitle").innerText = wisata.nama;
        document.getElementById("modalImg").src = wisata.gambar || 'https://via.placeholder.com/500x300?text=No+Image'; // Fallback img
        document.getElementById("modalDesc").innerText = wisata.deskripsi;
        
        // Update Info Footer Modal
        document.getElementById("modalLoc").innerHTML = `<i class="fa-solid fa-map-pin"></i> ${wisata.lokasi.charAt(0).toUpperCase() + wisata.lokasi.slice(1)}`;
        document.getElementById("modalPrice").innerHTML = `<i class="fa-solid fa-wallet"></i> ${wisata.budget.charAt(0).toUpperCase() + wisata.budget.slice(1)}`;

        // Tampilkan Modal
        document.getElementById("detailModal").style.display = "block";
    }
}

// Fungsi Menutup Modal
function tutupModal() {
    document.getElementById("detailModal").style.display = "none";
}

// Menutup modal jika user klik di area gelap (luar box)
window.onclick = function(event) {
    let modal = document.getElementById("detailModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}