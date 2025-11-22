function cariRekomendasi() {
    let jenis = document.getElementById("jenis").value;
    let lokasi = document.getElementById("lokasi").value === "skip" ? null : document.getElementById("lokasi").value;
    let suasana = document.getElementById("suasana").value === "skip" ? null : document.getElementById("suasana").value;
    let budget = document.getElementById("budget").value === "skip" ? null : document.getElementById("budget").value;

    let rekomendasi = new Set();

    // --- Aturan ---
    if (jenis === "sejarah" && lokasi === "indoor")
        rekomendasi.add("Museum 10 November").add("House of Sampoerna").add("Monumen Kapal Selam").add("Hotel Majapahit");

    if (jenis === "sejarah" && lokasi === "outdoor")
        rekomendasi.add("Tugu Pahlawan").add("Alun-alun Surabaya");

    if (jenis === "edukasi" && lokasi === "indoor")
        rekomendasi.add("Museum 10 November").add("House of Sampoerna").add("Monumen Kapal Selam");

    if (jenis === "edukasi" && lokasi === "outdoor")
        rekomendasi.add("Kebun Binatang Surabaya").add("Surabaya North Quay");

    if (jenis === "sejarah" && suasana === "tenang")
        rekomendasi.add("Museum 10 November").add("House of Sampoerna").add("Hotel Majapahit");

    if (jenis === "alam" && suasana === "tenang")
        rekomendasi.add("Jembatan Suramadu");

    if (jenis === "alam" && suasana === "ramai")
        rekomendasi.add("Taman Bungkul").add("Alun-alun Surabaya");

    if (jenis === "keluarga" && lokasi === "outdoor")
        rekomendasi.add("Kebun Binatang Surabaya").add("Ciputra Waterpark");

    if (jenis === "kuliner" && suasana === "ramai")
        rekomendasi.add("Surabaya North Quay");

    if (budget === "gratis")
        rekomendasi.add("Tugu Pahlawan").add("Taman Bungkul").add("House of Sampoerna")
                    .add("Alun-alun Surabaya").add("Jembatan Suramadu");

    if (budget === "murah")
        rekomendasi.add("Kebun Binatang Surabaya").add("Museum 10 November")
                    .add("Monumen Kapal Selam").add("Surabaya North Quay");

    if (budget === "menengah")
        rekomendasi.add("Ciputra Waterpark").add("Hotel Majapahit");

    if (suasana === "ramai")
        rekomendasi.add("Kebun Binatang Surabaya").add("Taman Bungkul").add("Ciputra Waterpark")
                    .add("Surabaya North Quay").add("Alun-alun Surabaya");

    if (suasana === "menengah")
        rekomendasi.add("Tugu Pahlawan").add("Jembatan Suramadu").add("Monumen Kapal Selam");

    // Tampilkan hasil
    let outputDiv = document.getElementById("output");
    outputDiv.style.display = "block";

    if (rekomendasi.size === 0) {
        outputDiv.innerHTML = "Tidak ada rekomendasi sesuai kriteria Anda.";
    } else {
        outputDiv.innerHTML = "<b>Rekomendasi:</b><ul>" +
            [...rekomendasi].map(r => `<li>${r}</li>`).join("") +
            "</ul>";
    }
}