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
        harga: "Rp 100.000 (Tour Sejarah)",
        gambar: "images/homaj.png",
        deskripsi: "Hotel bersejarah saksi bisu insiden perobekan bendera Belanda. Memiliki arsitektur kolonial yang mewah dan taman dalam yang sangat indah. Kamu bisa ke sini tidak hanya untuk menginap, tetapi juga untuk tur sejarah karena Hotel Majapahit juga membuka tur untuk wisatawan umum bertajuk Heritage Hotel Tour. Saat mengikuti tur ini, kamu bakal dibawa berkeliling hotel sambil dijelaskan sejarah yang pernah terjadi di ruangan-ruangan hotel tersebut.",
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
    },
    {
        id: 21,
        nama: "Romokalisari Adventure Land",
        jenis: ["alam", "edukasi", "kuliner"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "murah",
        harga: "Rp 5.000 - Rp 10.000",
        gambar: "images/romokalisari.jpg",
        deskripsi: "Romokalisari Adventure Land menawarkan pengalaman wisata alam dengan berbagai wahana permainan seru dan edukatif. Berlokasi di atas lahan seluas lebih dari 76.000 meter persegi, tempat ini menghadirkan nuansa rekreasi outdoor yang menyenangkan untuk semua usia. Beberapa wahana favorit di sini antara lain Playground, Mini Zoo, Arena Berkuda, ATV, Kano dan Sekoci di kawasan mangrove, serta Jetski.",
        alamat: "Jl. Romokalisari I, Romokalisari, Kec. Benowo, Surabaya, Jawa Timur 60192"
    },
    {
        id: 22,
        nama: "Kebun Bibit/Taman Flora Bratang",
        jenis: ["alam", "keluarga", "edukasi"],
        lokasi: "outdoor",
        suasana: "tenang",
        budget: "gratis",
        harga: "Gratis",
        gambar: "images/kebun-bibit.jpg",
        deskripsi: "Kebun Bibit / Taman Flora merupakan taman menarik dengan aneka tumbuhan tropis dengan berbagai jenis pohon. Tidak kurang dari seribu pohon tumbuh di sana hingga dapat memberikan suasana yang sejuk, nyaman dan udara yang segar. Taman ini dilengkapi dengan : sangkar burung raksasa, kandang rusa, permainan outbond untuk anak-anak, taman bacaan, dan Free Wifi.",
        alamat: "Jl. Raya Bratang Binangun, Baratajaya, Kec. Gubeng, Surabaya, Jawa Timur 60284"
    },
    {
        id: 23,
        nama: "Wisata Perahu Kalimas",
        jenis: ["keluarga", "alam"],
        lokasi: "outdoor",
        suasana: "tenang",
        budget: "murah",
        harga: "Rp 10.000",
        gambar: "images/kalimas.jpg",
        deskripsi: "Wisata Perahu Kalimas menawarkan pengalaman unik menyusuri sungai di tengah kota Surabaya dengan suasana malam yang romantis. Rute perjalanan perahu dimulai dari Taman Prestasi hingga Taman Ekspresi, melewati berbagai titik menarik seperti Museum Pendidikan, Pasar Apung, dan taman-taman tematik.",
        alamat: "Jl. Ketabang Kali No.2-B, Ketabang, Kec. Genteng, Surabaya, Jawa Timur 60272"
    },
    {
        id: 24,
        nama: "Kampung Arab",
        jenis: ["religi", "kuliner"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "gratis",
        harga: "Gratis",
        gambar: "images/kampung-arab.jpg",
        deskripsi: "Kampung ini dihuni oleh penduduknya yang mayoritas berasal dari Arab. Kampung Arab menjadi salah satu kampung yang dijadikan tempat wisata di Surabaya dan mendapat perhatian dari banyak wisatawan. Selain bisa mengenal budaya Arab yang masih kental, kamu juga bisa berburu suvenir mulai dari pakaian, minyak wangi, hingga peralatan ibadah yang dijual di kampung yang terletak di kawasan Ampel tersebut.",
        alamat: "Jl. Ampel Kejeron I No.4, RT.006/RW.02, Ampel, Kec. Semampir, Kota SBY, Jawa Timur 60151"
    },
    {
        id: 25,
        nama: "Kelenteng Sanggar Agung",
        jenis: ["religi", "sejarah"],
        lokasi: "outdoor",
        suasana: "menengah",
        budget: "gratis",
        harga: "Gratis",
        gambar: "images/kelenteng-sanggar-agung.jpg",
        deskripsi: "Klenteng Sanggar Agung juga dikenal dengan sebutan Klenteng Hong San Tang. Didirikan pada tahun 1999 dan berfungsi sebagai tempat ibadah umat Tri Dharma. Klenteng ini memiliki ciri khas yaitu terdapat patung Dewi Kwan Im setinggi 20 meter dan berada di tepi laut. Patung ini menjadi daya tarik wisata dan menjadi spot foto favorit bagi siapapun yang berkunjung kesana.",
        alamat: "Jl. Sukolilo No.100, Sukolilo Baru, Kecamatan Pantai Kenjeran, Surabaya, East Java 60122"
    },
    { 
        id: 26,
        nama: "Food Junction Grand Pakuwon",
        jenis: ["kuliner"],
        lokasi: "outdoor",
        suasana: "ramai",
        budget: "menengah",
        harga: "Rp 25.000 - Rp 50.000 per orang",
        gambar: "images/food-junction.jpg",
        deskripsi: "Food Junction Grand Pakuwon telah menjadi destinasi kuliner dan rekreasi yang menarik di Surabaya Barat. Berlokasi strategis di dekat pintu masuk utama Grand Pakuwon, tempat ini menyediakan lebih dari 100 tenant makanan dan minuman dengan konsep indoor dan outdoor dengan danau buatan seluas lebih dari 4.400 m².",
        alamat: "Jl. Grand Banjar Mutiara Asri No.1, Banjar Sugihan, Kec. Tandes, Surabaya, Jawa Timur 60184"
    },
    {
        id: 27,
        nama: "Kampung Bulak",
        jenis:["keluarga", "edukasi", "kuliner"],
        lokasi: "outdoor",
        suasana: "menengah",
        budget: "murah",
        harga: "Rp 2.000",
        gambar: "images/kampung-bulak.jpg",
        deskripsi: "Kampung Bulak Surabaya adalah kampung nelayan warna-warni di pesisir Kenjeran yang diubah menjadi destinasi wisata ikonik dengan rumah-rumah dicat cerah, mural menarik, dan dilengkapi Sentra Ikan Bulak (SIB) untuk kuliner laut serta oleh-oleh seperti ikan asap dan kerupuk ikan, menjadi tempat yang instagramable dan membangkitkan ekonomi warga pesisir. ",
        alamat: "Kampung Bulak, Kenjeran, Kec. Bulak, Kota Surabaya, Jawa Timur"
    },
    {
        id: 28,
        nama: "Hutan Kota Pakal",
        jenis: ["alam", "keluarga"],
        lokasi: "outdoor",
        suasana: "tenang",
        budget: "gratis",
        harga: "Gratis",
        gambar: "images/hutan-kota-pakal.jpg",
        deskripsi: "Hutan Kota Pakal merupakan salah satu lahan hijau yang dipertahankan pemerintah setempat untuk menjaga kestabilan alam. Keberadaan hutan kota tersebut dapat menjadi tempat piknik untuk menghilangkan penat dari kesibukan Kota Surabaya. Hutan Kota Pakal memiliki luas sekitar 6 hektar dengan beragam koleksi pohon di dalamnya. Jenis tanaman dan pohon yang ada di Tahura Pakal adalah Akasia, Waru Laut, Cemara Udang, Trembesi, Dadap Serap, Jati, Ketepeng, /Kepuh, Mahoni, Kemiri, Sogok Telik, Sono, Mangrove, Kluweh, Sawo Kecik, Mangga, Kelapa, Cerme.",
        alamat: "Jl. Raya Pakal Gg. Sidorejo, Pakal, Surabaya, Jawa Timur 60196"
    },
    {
        id: 29,
        nama: "Taman Cahaya",
        jenis: ["alam", "keluarga"],
        lokasi: "outdoor",
        suasana: "menengah",
        budget: "gratis",
        harga: "Gratis",
        gambar: "images/taman-cahaya.jpg",
        deskripsi: "Taman Cahaya Surabaya adalah salah satu ruang hijau ikonik di Kota Surabaya yang menawarkan suasana yang asri dan nyaman untuk warga kota maupun wisatawan. Terletak di kawasan yang mudah diakses, taman ini menjadi tempat favorit bagi mereka yang ingin bersantai, berolahraga, atau menikmati waktu bersama keluarga di tengah hiruk pikuk kota. Taman ini dilengkapi dengan berbagai fasilitas untuk memenuhi kebutuhan pengunjung, antara lain: area bermain anak, jogging track, area piknik, kandang rusa, lapangan futsal, perpustakaan mini, dan taman bunga yang indah.",
        alamat: "Jalan Raya Babat Jerawat No. 68, Pakal, Surabaya Barat, Surabaya, Jawa Timur"
    },
    {
        id: 30,
        nama: "Museum Dr. Soetomo",
        jenis: ["sejarah", "edukasi"],
        lokasi: "indoor",
        suasana: "tenang",
        budget: "murah",
        harga: "Rp 5.000",
        gambar: "images/museum-dr-soetomo.jpg",
        deskripsi: "Gedung Nasional Indonesia (GNI) mulai dibangun pada 11 Juli 1930 yang awalnya difungsikan sebagai tempat pertemuan para tokoh perintis kemerdekaan dalam menyusun taktik dan strategi dalam mencapai kemerdekaan Indonesia. Pada tahun 2017 salah satu bangunan di dalam komplek GNI dipakai untuk Museum Dr. Soetomo, yang khusus menampilkan riwayat hidup Dr. Soetomo. Di dalam museum ini dapat dijumpai lebih dari 300 koleksi berupa alat-alat kesehatan dan foto-foto.",
        alamat: "Jl. Bubutan No.85-87, Bubutan, Kec. Bubutan, Surabaya, Jawa Timur 60174"
    },
    {
        id: 31,
        nama: "Museum Pendidikan",
        jenis: ["sejarah", "edukasi"],
        lokasi: "indoor",
        suasana: "tenang",
        budget: "murah",
        harga: "Rp 5.000",
        gambar: "images/museum-pendidikan.jpg",
        deskripsi: "Museum Pendidikan Surabaya merupakan museum tematik yang didirikan sebagai langkah pelestarian sejarah dan budaya bangsa dengan tujuan untuk mendukung kegiatan edukasi, riset dan rekreasi di Kota Surabaya. Museum ini menyimpan bukti materiil Pendidikan pada masa Pra-Aksara, Masa Klasik, Masa Kolonial dan Masa Kemerdekaan. Menempati sebuah bangunan di Jalan Genteng Kali no. 10 yang merupakan bekas gedung Sekolah Taman Siswa.", 
        alamat: "Jl. Genteng Kali No.10, Genteng, Kec. Genteng, Surabaya, Jawa Timur 60275"
    },
    {
        id: 32,
        nama: "Museum Surabaya Gedung Siola",
        jenis: ["sejarah", "edukasi"],
        lokasi: "indoor",
        suasana: "tenang",
        budgets: "gratis",
        harga: "Gratis",
        gambar: "images/museum-sby.jpg",
        deskripsi: "Museum Surabaya diresmikan oleh Walikota Surabaya pada tanggal 3 Mei 2015. Museum ini berlokasi di ujung Jalan Tunjungan, tepatnya di dalam gedung ex. SIOLA. Koleksi-koleksinya berkaitan dengan sosial budaya Kota Surabaya. Gedung ini sendiri merupakan salah satu bangunan cagar budaya yang dulunya bernama Gedung Whiteaway Laidlaw.",
        alamat: "Jl. Tunjungan No.1, Genteng, Kec. Genteng, Surabaya, Jawa Timur 60275"
    },
    {
        id: 33,
        nama: "Museum H.O.S Tjokroaminoto",
        jenis: ["sejarah", "edukasi"],
        lokasi: "indoor",
        suasana: "tenang",
        budget: "murah",
        harga: "Rp 5.000",
        gambar: "images/museum-hos.jpg",
        deskripsi: "Museum ini dulunya merupakan rumah dari salah satu tokoh pergerakan nasional yakni Haji Oemar Said Tjokroaminoto. Rumah tersebut tidak hanya digunakan oleh Pahlawan Nasional H. O. S. Tjokroaminoto beserta keluarga sebagai tempat tinggal, namun juga sebagai tempat dimana tokoh-tokoh pergerakan dari berbagai latar belakang ideologi seperti Semaoen, Alimin, Darsono, serta Tan Malaka bertemu dan berdialog. Jumlah Koleksi saat ini terdapat di Museum H.O.S Tjokroaminoto sebanyak 143 Koleksi terkait dengan rumah Tinggal H.O.S Tjokroaminoto.",
        alamat: "Jl. Peneleh Gg. VII No.29-31, Peneleh, Kec. Genteng, Surabaya, Jawa Timur 60274"
    },
    {
        id: 34,
        nama: "Museum W.R. Soepratman",
        jenis: ["sejarah", "edukasi"],
        lokasi: "indoor",
        suasana: "tenang",
        budget: "murah",
        harga: "Rp 5.000",
        gambar: "images/museum-wr.jpg",
        deskripsi: "Museum ini menempati rumah wafat Wage Rudolf Soepratman di Jalan Mangga no 21 Surabaya. Rumah ini menjadi saksi akhir perjuangan sang komposer yang meskipun kondisi sakit tetap berjuang demi kemerdekaan Indonesia dengan caranya sendiri melalui biola. Jumlah koleksi yang terdapat di Museum W.R Soepratman saat ini sebanyak 39 koleksi. Diantaranya terdapat replika pakaian W.R Soepratman, replika biola W.R Soepratman, zona memorabilia, serta zona penghargaan pemerintah Indonesia kepada W.R Soepratman.",
        alamat: "Jl. Mangga No.21, Tambaksari, Kec. Tambaksari, Surabaya, Jawa Timur 60136"
    },
    {
        id: 35,
        nama: "Museum Olahraga Surabaya",
        jenis: ["sejarah", "edukasi"],
        lokasi: "indoor",
        suasana: "tenang",
        budget: "murah",
        harga: "Rp 5.000",
        gambar: "images/museum-olahraga.jpg",
        deskripsi: "Museum Olahraga dibangun untuk menggambarkan dinamika sejarah dan budaya bangsa Indonesia terkait cerita sejarah olahraga serta benda-benda / bukti materiil peninggalan para Pejuang dan Pahlawan Olahraga Surabaya. Museum ini menyimpan koleksi-koleksi Atlet Surabaya. Ratusan koleksi yang ada terbagi menjadi tiga jenis yaitu koleksi historika (koleksi yang diperoleh dari hasil temuan, hasil escavasi atau bukti materil bersejarah), koleksi heraldika (tanda penghargaan atau jasa, kepangkatan, lambang atau logo), dan koleksi teknologika terkait benda dengan unsur teknologi.",
        alamat: "Jl. Indragiri No. 6, Darmo, Kec. Wonokromo, Surabaya, Jawa Timur 60241"
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