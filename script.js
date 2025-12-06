// --- BASIS PENGETAHUAN (Knowledge Base) ---
// Data ini disusun berdasarkan Dokumentasi Tabel Pengetahuan 
// Kami menambahkan beberapa tag tambahan untuk menutupi celah logika (seperti Taman Bungkul = Kuliner)

const dataWisata = [
    {
        nama: "Kebun Binatang Surabaya",
        jenis: ["keluarga", "edukasi", "alam"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "murah"
    },
    {
        nama: "Tugu Pahlawan",
        jenis: ["sejarah", "edukasi"],
        lokasi: "outdoor",
        suasana: "menengah",
        budget: "murah" // Tiket masuk museum murah, area tugu gratis
    },
    {
        nama: "Taman Bungkul",
        jenis: ["alam", "keluarga", "kuliner"], // Kuliner ditambahkan karena sentra PKL
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "gratis"
    },
    {
        nama: "Museum 10 November",
        jenis: ["sejarah", "edukasi", "keluarga"], // Keluarga ditambahkan untuk edukasi anak
        lokasi: "indoor",
        suasana: "tenang", // Bisa juga menengah, tapi cenderung tenang dibanding taman
        budget: "murah"
    },
    {
        nama: "House of Sampoerna",
        jenis: ["sejarah", "edukasi", "keluarga"],
        lokasi: "indoor",
        suasana: "tenang",
        budget: "gratis"
    },
    {
        nama: "Jembatan Suramadu",
        jenis: ["alam", "sejarah"], // Ikon sejarah pembangunan
        lokasi: "outdoor",
        suasana: "menengah",
        budget: "gratis"
    },
    {
        nama: "Hotel Majapahit",
        jenis: ["sejarah", "kuliner"], // Kuliner ditambahkan (High Tea)
        lokasi: "indoor",
        suasana: "tenang",
        budget: "menengah"
    },
    {
        nama: "Ciputra Waterpark",
        jenis: ["keluarga"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "menengah"
    },
    {
        nama: "Monumen Kapal Selam",
        jenis: ["sejarah", "edukasi", "keluarga"],
        lokasi: "indoor", // Masuk ke dalam kapal (indoor)
        suasana: "menengah",
        budget: "murah"
    },
    {
        nama: "Surabaya North Quay",
        jenis: ["kuliner", "edukasi", "alam"], // Pemandangan laut (alam)
        lokasi: "outdoor", // Semi-outdoor
        suasana: "ramai",
        budget: "murah"
    },
    {
        nama: "Alun-alun Surabaya",
        jenis: ["alam", "sejarah", "keluarga"],
        lokasi: "outdoor", // Ada area basement (indoor), tapi dominan outdoor/alun-alun
        suasana: "ramai",
        budget: "gratis"
    }
];

function cariRekomendasi() {
    // --- 1. Ambil Input dari User ---
    
    // Jenis Wisata (Sekarang bisa di-skip)
    let inputJenis = document.getElementById("jenis").value;
    if (inputJenis === "skip") inputJenis = null; // Ubah jadi null jika skip

    // Lokasi
    let inputLokasi = document.getElementById("lokasi").value;
    if (inputLokasi === "skip") inputLokasi = null;

    // Suasana
    let inputSuasana = document.getElementById("suasana").value;
    if (inputSuasana === "skip") inputSuasana = null;

    // Budget
    let inputBudget = document.getElementById("budget").value;
    if (inputBudget === "skip") inputBudget = null;

    // --- 2. Mesin Inferensi (Filter Logic) ---
    let hasilRekomendasi = dataWisata.filter(wisata => {
        
        // Cek Jenis
        // Jika inputJenis NULL (User pilih skip), maka otomatis TRUE (lolos filter)
        // ATAU jika inputJenis ada di dalam list jenis wisata tersebut
        let cekJenis = inputJenis === null || wisata.jenis.includes(inputJenis);

        // Cek Lokasi
        let cekLokasi = inputLokasi === null || wisata.lokasi === inputLokasi;

        // Cek Suasana
        let cekSuasana = inputSuasana === null || wisata.suasana === inputSuasana;

        // Cek Budget
        let cekBudget = inputBudget === null || wisata.budget === inputBudget;

        // Syarat: Semua filter harus TRUE agar wisata ditampilkan
        return cekJenis && cekLokasi && cekSuasana && cekBudget;
    });

    // --- 3. Tampilkan Output ---
    let outputDiv = document.getElementById("output");
    outputDiv.style.display = "block";

    if (hasilRekomendasi.length === 0) {
        outputDiv.innerHTML = `<div style="padding:10px; color: #7f1d1d; background: #fef2f2; border-radius:6px;">
            <i class="fa-solid fa-circle-exclamation"></i> 
            Mohon maaf, tidak ada wisata yang cocok dengan kombinasi filter ini.
        </div>`;
    } else {
        let listHtml = hasilRekomendasi.map(w => `<li>${w.nama}</li>`).join("");
        outputDiv.innerHTML = `<b>Rekomendasi (${hasilRekomendasi.length} ditemukan):</b><ul>${listHtml}</ul>`;
    }
}