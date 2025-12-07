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
        harga: "Rp 15.000",
        gambar: "images/kbs.jpg",
        deskripsi: "Destinasi wisata edukasi satwa terlengkap di Asia Tenggara. Cocok untuk keluarga dan anak-anak mengenal berbagai jenis binatang di lingkungan yang asri.",
        alamat: "Jl. Setail No.1, Darmo, Kec. Wonokromo, Kota SBY, Jawa Timur 60241"
    },
    {
        id: 2,
        nama: "Tugu Pahlawan",
        jenis: ["sejarah"],
        lokasi: "outdoor",
        suasana: "menengah",
        budget: "murah",
        harga: "Rp 5.000",
        gambar: "images/tupal.jpg",
        deskripsi: "Monumen ikonik Surabaya untuk mengenang pertempuran 10 November. Dilengkapi dengan museum bawah tanah yang menyimpan diorama sejarah perjuangan.",
        alamat: "Jl. Pahlawan No.10, Alun-alun Contong, Kec. Bubutan, Kota SBY, Jawa Timur 60174"
    },
    {
        id: 3,
        nama: "Taman Bungkul",
        jenis: ["alam", "keluarga", "kuliner"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "gratis",
        harga: "Gratis",
        gambar: "images/bungkul.png", 
        deskripsi: "Taman kota terbaik yang asri dan hijau. Dilengkapi area bermain anak, skate park, dan sentra kuliner kaki lima yang sangat ramai di malam hari.",
        alamat: "Jl. Taman Bungkul, Darmo, Kec. Wonokromo, Kota SBY, Jawa Timur 60241"
    },
    {
        id: 4,
        nama: "Museum 10 November",
        jenis: ["sejarah", "edukasi"],
        lokasi: "indoor",
        suasana: "tenang",
        budget: "murah",
        harga: "Gratis - Rp 8.000",
        gambar: "images/mussep.webp",
        deskripsi: "Museum yang terletak di kompleks Tugu Pahlawan. Menyimpan bukti sejarah pertempuran 10 November, rekaman pidato Bung Tomo, dan senjata perjuangan.",
        alamat: "Jl. Pahlawan No.10, Alun-alun Contong, Kec. Bubutan, Kota SBY, Jawa Timur 60174"
    },
    {
        id: 5,
        nama: "Jembatan Suramadu",
        jenis: ["alam"],
        lokasi: "outdoor",
        suasana: "menengah",
        budget: "gratis",
        harga: "Gratis",
        gambar: "images/suramadu.jpg",
        deskripsi: "Jembatan terpanjang di Indonesia yang menghubungkan Surabaya dan Madura. Menawarkan pemandangan laut selat Madura yang indah, terutama saat matahari terbit.",
        alamat: "Jl. Jembatan Suramadu, Surabaya, Jawa Timur"
    },
    {
        id: 6,
        nama: "Hotel Majapahit",
        jenis: ["sejarah"],
        lokasi: "indoor",
        suasana: "tenang",
        budget: "menengah",
        gambar: "images/homaj.png",
        deskripsi: "Hotel bersejarah saksi bisu insiden perobekan bendera Belanda. Memiliki arsitektur kolonial yang mewah dan taman dalam yang sangat indah.",
        alamat: "Jl. Tunjungan No.65-67, Genteng, Kec. Genteng, Kota SBY, Jawa Timur 60275"
    },
    {
        id: 7,
        nama: "Ciputra Waterpark",
        jenis: ["keluarga"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "menengah",
        harga: "Rp 75.000 - Rp 95.000",
        gambar: "images/ciputra.jpg",
        deskripsi: "Taman bermain air terbesar di Surabaya dengan tema Sinbad. Memiliki banyak wahana seru seperti kolam ombak dan seluncuran raksasa.",
        alamat: "Jl. Citra Raya Niaga No.1, Lakarsantri, Kec. Lakarsantri, Kota SBY, Jawa Timur 60216"
    },
    {
        id: 8,
        nama: "Monumen Kapal Selam",
        jenis: ["sejarah", "edukasi"],
        lokasi: "indoor",
        suasana: "menengah",
        budget: "murah",
        harga: "Rp 15.000",
        gambar: "images/monkasel.jpg",
        deskripsi: "Monumen Kapal Selam KRI Pasopati 410 asli buatan Rusia. Pengunjung bisa masuk ke dalam kapal selam dan melihat interior ruang kendali serta torpedo.",
        alamat: "Jl. Pemuda No.39, Embong Kaliasin, Kec. Genteng, Kota SBY, Jawa Timur 60271"
    },
    {
        id: 9,
        nama: "Surabaya North Quay",
        jenis: ["kuliner", "edukasi"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "murah",
        harga: "Rp 10.000",
        gambar: "images/snq.jpg",
        deskripsi: "Tempat nongkrong kekinian di tepi laut Pelabuhan Tanjung Perak. Menawarkan pemandangan laut lepas dan kapal pesiar mewah yang bersandar.",
        alamat: "Jl. Pelabuhan Tanjung Perak, Surabaya, Jawa Timur"
    },
    {
        id: 10,
        nama: "Alun-alun Surabaya",
        jenis: ["alam", "sejarah"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "gratis",
        harga: "Gratis",
        gambar: "images/alun.png",
        deskripsi: "Ikon pusat kota Surabaya yang menggabungkan area terbuka hijau dan ruang seni bawah tanah (basement) yang sering mengadakan pameran seni.",
        alamat: "Jl. Taman Surya No.1, Alun-alun Contong, Kec. Bubutan, Kota SBY, Jawa Timur 60174"
    },
    {
        id: 11,
        nama: "Taman Harmoni Keputih",
        jenis: ["alam", "keluarga"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "gratis",
        harga: "Gratis",
        gambar: "images/taman-harmoni.webp",
        deskripsi: "Taman Harmoni Keputih menawarkan keindahan bunga berwarna-warni dan spot favorit bunga matahari untuk swafoto. Selain itu, terdapat juga hutan bambu bernuansa alami yang sering dijadikan latar foto, termasuk pre-wedding.",
        alamat: "Jl. Keputih Tegal Timur No.17, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111"
    },
    {
        id: 12,
        nama: "Patung Brahma 4 Rupa",
        jenis: ["sejarah", "religi"],
        lokasi: "outdoor",
        suasana: "menengah",
        budget: "gratis",
        harga: "Gratis",
        gambar: "images/patung.jpg",
        deskripsi: "Patung Buddha 4 Rupa di Klenteng Hong Sang Tan, Kenjeran, memiliki 4 wajah dan 8 tangan berlapis emas. Dikenal juga dengan nama lain seperti She Mien Fo atau Dewa Catur Muka. Empat wajahnya melambangkan murah hati, adil, pengasih, dan meditasi, sementara 8 tangannya memegang benda suci berbeda sebagai simbol kekuatan Buddha.",
        alamat: "Jl. Pantai Ria Kenjeran No.8, Sukolilo Baru, Kec. Bulak, Kota Surabaya, Jawa Timur 60122"
    },
    {
        id: 13,
        nama: "Wisata Religi Sunan Ampel (Kampung Arab)",
        jenis: ["religi", "kuliner", "sejarah"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "gratis",
        harga: "Gratis",
        gambar: "images/sunan-ampel.jpg",
        deskripsi: "Kampung Arab di kawasan Ampel, Surabaya, dihuni mayoritas warga keturunan Arab dan menjadi destinasi wisata religi. Selain mengenal budaya Arab, pengunjung dapat membeli suvenir seperti pakaian, minyak wangi, dan perlengkapan ibadah.",
        alamat: "Jl. Ampel, Kec. Semampir, Kota SBY, Jawa Timur 60151"
    },
    {
        id: 14,
        nama: "Eko-Wisata Mangrove Wonorejo",
        jenis: ["keluarga", "alam"],
        lokasi: "outdoor",
        suasana: "menengah",
        budget: "murah",
        harga: "Rp 10.000 - Rp 25.000",
        gambar: "images/mangrove.jpg",
        deskripsi: "Eko-Wisata Mangrove Wonorejo menawarkan pengalaman edukasi dan rekreasi di hutan mangrove yang asri. Pengunjung dapat berjalan di jembatan kayu yang melintasi area mangrove, menikmati keindahan alam, serta belajar tentang ekosistem mangrove dan pentingnya pelestarian lingkungan.",
        alamat: "Jl. Raya Wonorejo No.1, Wonorejo, Rungkut, Kota SBY, Jawa Timur 60293"
    },
    {
        id: 15,
        nama: "Jalan Kembang Jepun",
        jenis: ["keluarga", "kuliner"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "gratis",
        harga: "Gratis",
        gambar: "images/kembang-jepun.jpg",
        deskripsi: "Jalan Kembang Jepun, China Town Surabaya, menawarkan kuliner khas Surabaya dan Tiongkok dari sekitar 200 pedagang. Selain menikmati makanan, pengunjung juga bisa berfoto dengan ornamen Tiongkok yang menghiasi jalan dan bangunan.",
        alamat: "Jl. Kembang Jepun, Kec. Genteng, Kota SBY, Jawa Timur 60275"
    },
    {
        id: 16,
        nama: "Harvestory Park",
        jenis: ["keluarga", "alam", "kuliner"],
        lokasi: "outdoor",
        suasana: "tenang",
        budget: "gratis",
        harga: "Gratis",
        gambar: "images/harvestory-park.jpg",
        deskripsi: "Harvestory Park menawarkan sejumlah wahana dan spot menarik berlatar pemandangan indah. Saat berada di Harvestory Park, sejumlah aktivitas yang bisa dilakukan di antaranya berkeliling danau dengan perahu, atau olahraga lari di area jogging track yang disediakan.",
        alamat: "Kompleks Grand Harvest, Jalan Raya Wiyung, Kelurahan Balas Klumprik, Kecamatan Wiyung, Surabaya"
    },
    {
        id: 17,
        nama: "Taman Kunang-Kunang",
        jenis: ["keluarga", "alam"],
        lokasi: "outdoor",
        suasana: "tenang",
        budget: "gratis",
        harga: "Gratis",
        gambar: "images/taman-kunang.jpeg",
        deskripsi: "Taman kunang-kunang menjadi salah satu tujuan wisata gratis hingga tempat bersantai serta piknik keluarga yang nyaman di area Surabaya. Taman ini memiliki luas 400 meter persegi. Taman Kunang-kunang dinamakan demikian karena ada miniatur serangga kunang-kunang di sini.",
        alamat: "Jl. Penjaringan Tim. No.22A, Penjaringan Sari, Kecamatan Rungkut, Surabaya"
    },
    {
        id: 18,
        nama: "Hutan Bambu Keputih",
        jenis: ["alam", "keluarga"],
        lokasi: "outdoor",
        suasana: "tenang",
        budget: "gratis",
        harga: "Gratis",
        gambar: "images/hutan-bambu.jpg",
        deskripsi: "Hutan Bambu Keputih berisi pohon bambu yang berjajar rapi sehingga memunculkan suasana asri. Hutan Bambu Keputih cocok jadi tempat menenangkan diri di tengah hiruk-pikuknya kota besar.",
        alamat: "Jl. Raya Marina Asri, Keputih, Kecamatan Sukolilo, Surabaya"
    },
    {
        id: 19,
        nama: "Atlantis Land",
        jenis: ["keluarga", "edukasi"],
        lokasi: "outdoor",
        suasana: "menengah",
        budget: "Menengah",
        harga: "Rp 100.000",
        gambar: "images/atlantis-land.jpg",
        deskripsi: "Atlantis Land adalah taman rekreasi keluarga yang menawarkan berbagai wahana edukasi dan hiburan. Tempat ini menawarkan berbagai wahana, seperti antara lain Istana Es, Dino Land, Tornado & Boomerang Slide, dan Istana Patung Lilin.",
        alamat: "Jl. Sukolilo Lor No.100, Sukolilo Baru, Surabaya, Jawa Timur 60122"
    },
    {
        id: 20,
        nama: "Taman Hiburan Pantai Kenjeran",
        jenis: ["keluarga", "alam", "kuliner"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "murah",
        harga: "Rp 10.000 - Rp 15.000",
        gambar: "images/taman-kenjeran.jpg",
        deskripsi: "Taman Hiburan Pantai Kenjeran menyuguhkan daya tarik wisata pesisir pantai di utara Kota Surabaya. Keindahan pesona pantai dengan pemandangan berlatar belakang Jembatan Suramadu bisa dinikmati dari sini. Beragam fasilitas seperti gazebo, anjungan, stan – stan souvenir produk UMKM, dan oleh-oleh khas Pantai Kenjeran Surabaya bisa dinikmati disini. Terdapat pula stan makanan yang menawarkan berbagai pilihan kuliner khas pesisir wajib dicoba saat berwisata di THP Kenjeran Surabaya.",
        alamat: "Jl. Pantai Ria Kenjeran, Kenjeran, Kec. Bulak, Surabaya, Jawa Timur 60123"
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
        document.getElementById("modalAddr").innerHTML = `<i class="fa-solid fa-map-location-dot"></i> ${wisata.alamat || "Alamat tidak tersedia"}`;
        // Update Info Footer Modal
        document.getElementById("modalLoc").innerHTML = `<i class="fa-solid fa-building"></i> ${wisata.lokasi.charAt(0).toUpperCase() + wisata.lokasi.slice(1)}`;
        document.getElementById("modalPrice").innerHTML = `<i class="fa-solid fa-wallet"></i> ${wisata.harga || "Harga tidak tersedia"}`;

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