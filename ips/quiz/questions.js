/* ============================================================
   IPS SMP Quiz — Questions Data
   30 Pilihan Ganda + 10 PGK + 10 Benar/Salah = 50 Total
   ============================================================ */

const QUIZ_QUESTIONS = {

  /* ──────────────────────────────────────────────────────────
     SECTION A: PILIHAN GANDA (Multiple Choice) — 30 soal
     ────────────────────────────────────────────────────────── */
  pg: [
    {
      id: 'pg1',
      text: 'Dua syarat utama yang harus dipenuhi agar interaksi sosial dapat terjadi adalah…',
      options: [
        'Kontak sosial dan komunikasi',
        'Kerja sama dan kompetisi',
        'Akomodasi dan asimilasi',
        'Imitasi dan sugesti'
      ],
      answer: 0,
      explanation: 'Interaksi sosial memerlukan dua syarat: (1) Kontak sosial — hubungan antara satu pihak dengan pihak lain, dan (2) Komunikasi — proses penyampaian pesan sehingga terjadi saling pengertian.'
    },
    {
      id: 'pg2',
      text: 'Proses di mana seseorang meniru perilaku atau gaya orang lain disebut…',
      options: ['Sugesti', 'Simpati', 'Imitasi', 'Identifikasi'],
      answer: 2,
      explanation: 'Imitasi adalah proses meniru perilaku, gaya, atau tindakan orang lain. Berbeda dengan identifikasi yang lebih mendalam (meniru kepribadian secara keseluruhan).'
    },
    {
      id: 'pg3',
      text: 'Seorang remaja mulai berpakaian, berbicara, dan bersikap persis seperti artis idolanya secara keseluruhan. Proses ini disebut…',
      options: ['Imitasi', 'Simpati', 'Sugesti', 'Identifikasi'],
      answer: 3,
      explanation: 'Identifikasi adalah kecenderungan seseorang menjadi sama dengan orang yang dikaguminya secara menyeluruh — bukan hanya meniru perilaku tertentu (imitasi), melainkan seluruh kepribadian dan nilai.'
    },
    {
      id: 'pg4',
      text: 'Status sosial yang diperoleh seseorang berdasarkan usaha dan kerja keras diri sendiri disebut…',
      options: ['Ascribed status', 'Assigned status', 'Achieved status', 'Given status'],
      answer: 2,
      explanation: 'Achieved status adalah status yang diperoleh melalui usaha, kerja keras, bakat, dan kemampuan. Contoh: dokter, pengusaha, juara olimpiade. Berbeda dengan ascribed status (berdasarkan keturunan) dan assigned status (diberikan orang lain).'
    },
    {
      id: 'pg5',
      text: 'Gelar "Pahlawan Nasional" yang diberikan negara kepada seseorang merupakan contoh dari…',
      options: ['Ascribed status', 'Achieved status', 'Assigned status', 'Inherited status'],
      answer: 2,
      explanation: 'Assigned status adalah status yang diberikan oleh kelompok atau masyarakat kepada seseorang atas jasa atau pengakuan tertentu. Gelar pahlawan nasional diberikan (assigned) oleh negara, bukan berdasarkan keturunan atau usaha sendiri.'
    },
    {
      id: 'pg6',
      text: 'Menurut C. Kluckhohn, unsur kebudayaan yang dianggap paling penting karena menopang semua unsur lainnya adalah…',
      options: ['Kesenian', 'Sistem religi', 'Bahasa', 'Peralatan dan teknologi'],
      answer: 2,
      explanation: 'Bahasa adalah unsur terpenting karena berfungsi sebagai medium untuk mewarisi, menyebarkan, dan mengembangkan semua unsur kebudayaan lainnya. Tanpa bahasa, pengetahuan dan kebudayaan tidak dapat ditransmisikan.'
    },
    {
      id: 'pg7',
      text: 'Kegiatan menyalurkan barang dari produsen ke konsumen disebut…',
      options: ['Produksi', 'Konsumsi', 'Distribusi', 'Akumulasi'],
      answer: 2,
      explanation: 'Distribusi adalah kegiatan menyalurkan barang/jasa dari produsen ke konsumen. Pelakunya disebut distributor. Distribusi bisa langsung (tanpa perantara) atau tidak langsung (melalui agen, grosir, dll).'
    },
    {
      id: 'pg8',
      text: 'Prinsip ekonomi berbunyi: dengan pengorbanan … untuk mendapatkan hasil …',
      options: [
        'Sebesar-besarnya; sebesar-besarnya',
        'Sekecil-kecilnya; sebesar-besarnya',
        'Seadanya; seadanya',
        'Sebesar-besarnya; sekecil-kecilnya'
      ],
      answer: 1,
      explanation: 'Prinsip ekonomi adalah pedoman untuk mencapai efisiensi: "Dengan pengorbanan sekecil-kecilnya untuk mendapatkan hasil sebesar-besarnya." Ini berlaku untuk konsumen, produsen, maupun distributor.'
    },
    {
      id: 'pg9',
      text: 'Fungsi uang sebagai alat pembayaran termasuk dalam kategori…',
      options: [
        'Fungsi asli uang',
        'Fungsi turunan uang',
        'Fungsi primer uang',
        'Fungsi dasar uang'
      ],
      answer: 1,
      explanation: 'Fungsi uang dibagi menjadi fungsi asli (alat tukar dan satuan hitung) dan fungsi turunan. Alat pembayaran, alat penyimpan nilai, alat pemindah kekayaan, dan pendorong kegiatan ekonomi adalah fungsi turunan uang.'
    },
    {
      id: 'pg10',
      text: 'Fungsi asli (primer) uang terdiri dari dua hal, yaitu…',
      options: [
        'Alat tukar dan alat pembayaran',
        'Alat penyimpan nilai dan satuan hitung',
        'Alat tukar dan satuan hitung',
        'Alat pembayaran dan penyimpan nilai'
      ],
      answer: 2,
      explanation: 'Fungsi asli (primer) uang: (1) Alat tukar — menggantikan barter, dan (2) Satuan hitung — mengukur nilai barang/jasa. Sedangkan alat pembayaran, penyimpan nilai, dll. termasuk fungsi turunan.'
    },
    {
      id: 'pg11',
      text: 'Fungsi hutan sebagai penyerap karbon dioksida dan penghasil oksigen dikenal sebagai fungsi hutan sebagai…',
      options: [
        'Pengatur tata air',
        'Paru-paru dunia',
        'Sumber bahan baku',
        'Pencegah erosi'
      ],
      answer: 1,
      explanation: 'Hutan disebut "paru-paru dunia" karena pohon-pohon di hutan menyerap CO₂ (karbondioksida) melalui fotosintesis dan menghasilkan O₂ (oksigen), sehingga menjaga kualitas udara global.'
    },
    {
      id: 'pg12',
      text: 'Akar pohon-pohon di hutan berperan penting dalam mencegah terjadinya…',
      options: [
        'Kekeringan dan gurun',
        'Erosi dan longsor',
        'Banjir bandang dan tsunami',
        'Gempa bumi dan letusan gunung'
      ],
      answer: 1,
      explanation: 'Akar pohon mengikat butiran tanah sehingga mencegah pengikisan tanah (erosi) oleh air hujan dan mencegah longsor, terutama di daerah berbukit atau miring.'
    },
    {
      id: 'pg13',
      text: 'Berikut ini yang merupakan faktor produksi adalah…',
      options: [
        'Alam, tenaga kerja, modal, kewirausahaan',
        'Alam, uang, pasar, konsumen',
        'Teknologi, distribusi, pasar, konsumen',
        'Modal, harga, distribusi, konsumsi'
      ],
      answer: 0,
      explanation: 'Empat faktor produksi: (1) Alam/natural resources, (2) Tenaga Kerja/labour, (3) Modal/capital, dan (4) Kewirausahaan/entrepreneurship. Keempatnya diperlukan dalam proses produksi.'
    },
    {
      id: 'pg14',
      text: 'Pengaruh yang diberikan seseorang kepada orang lain sehingga pihak tersebut mengikuti tanpa berpikir kritis disebut…',
      options: ['Imitasi', 'Identifikasi', 'Sugesti', 'Simpati'],
      answer: 2,
      explanation: 'Sugesti adalah pengaruh yang diberikan seseorang sehingga orang lain melakukan sesuatu tanpa mempertimbangkannya secara rasional. Sugesti terjadi ketika seseorang dalam kondisi rentan atau kurang kritis.'
    },
    {
      id: 'pg15',
      text: 'Kerjasama yang dilakukan secara sukarela oleh masyarakat Indonesia untuk kepentingan bersama disebut…',
      options: ['Koalisi', 'Joint venture', 'Gotong royong', 'Bargaining'],
      answer: 2,
      explanation: 'Gotong royong adalah bentuk kerjasama sukarela yang merupakan nilai khas budaya Indonesia. Contoh: membangun balai desa bersama, membersihkan lingkungan, dll.'
    },
    {
      id: 'pg16',
      text: 'Kerjasama antara dua perusahaan dari negara berbeda dalam proyek tertentu disebut…',
      options: ['Koalisi', 'Gotong royong', 'Ko-optasi', 'Joint venture'],
      answer: 3,
      explanation: 'Joint venture adalah kerjasama antara dua perusahaan atau lebih dalam satu proyek tertentu, terutama dalam bisnis internasional. Masing-masing pihak menyetor modal dan berbagi keuntungan/risiko.'
    },
    {
      id: 'pg17',
      text: 'Tingkat literasi finansial tertinggi menurut OJK disebut…',
      options: ['Sufficient literate', 'Less literate', 'Well literate', 'Not literate'],
      answer: 2,
      explanation: 'Well literate (melek finansial) adalah tingkat tertinggi — individu memiliki pengetahuan, keyakinan, DAN keterampilan dalam menggunakan produk dan layanan jasa keuangan.'
    },
    {
      id: 'pg18',
      text: 'Individu yang memiliki pengetahuan tentang lembaga keuangan namun belum mampu menggunakannya termasuk kategori…',
      options: ['Well literate', 'Sufficient literate', 'Less literate', 'Not literate'],
      answer: 1,
      explanation: 'Sufficient literate: sudah memiliki pengetahuan dan keyakinan tentang lembaga dan produk jasa keuangan, tetapi belum memiliki keterampilan untuk menggunakannya dalam praktik.'
    },
    {
      id: 'pg19',
      text: 'Kegiatan menjual barang atau jasa ke luar negeri disebut…',
      options: ['Impor', 'Ekspor', 'Distribusi', 'Transit'],
      answer: 1,
      explanation: 'Ekspor adalah kegiatan menjual barang/jasa ke luar negeri. Ekspor menghasilkan devisa bagi negara. Kebalikannya adalah impor (membeli dari luar negeri).'
    },
    {
      id: 'pg20',
      text: 'Keuntungan utama dari perdagangan internasional bagi negara adalah…',
      options: [
        'Mengurangi jumlah penduduk',
        'Memperoleh devisa dan memperluas pasar',
        'Menghilangkan produksi dalam negeri',
        'Menurunkan harga impor'
      ],
      answer: 1,
      explanation: 'Perdagangan internasional memberikan manfaat utama berupa: (1) Perolehan devisa dari ekspor, (2) Perluasan pasar bagi produsen dalam negeri, (3) Pemenuhan kebutuhan yang tidak bisa diproduksi sendiri, dll.'
    },
    {
      id: 'pg21',
      text: 'Modernisasi adalah proses perubahan dari cara tradisional menuju cara yang lebih modern. Syarat modernisasi menurut J.W. Schoorl yang pertama adalah…',
      options: [
        'Cara berpikir ilmiah',
        'Penguasaan teknologi',
        'Globalisasi budaya',
        'Revolusi industri'
      ],
      answer: 0,
      explanation: 'Syarat pertama modernisasi menurut J.W. Schoorl adalah cara berpikir ilmiah — masyarakat harus menggunakan pola pikir rasional dan ilmiah, bukan hanya tradisi dan mitos, dalam memecahkan masalah.'
    },
    {
      id: 'pg22',
      text: 'Faktor internal penyebab perubahan sosial yang paling mendasar dan sering terjadi adalah…',
      options: [
        'Konflik dengan negara lain',
        'Perubahan jumlah penduduk',
        'Bencana alam',
        'Pengaruh budaya asing'
      ],
      answer: 1,
      explanation: 'Perubahan jumlah penduduk (pertambahan atau penurunan) adalah faktor internal yang paling mendasar karena langsung mengubah komposisi, kebutuhan, dan struktur sosial masyarakat dari dalam.'
    },
    {
      id: 'pg23',
      text: 'Pemilu pertama Indonesia dilaksanakan pada tahun…',
      options: ['1945', '1950', '1955', '1960'],
      answer: 2,
      explanation: 'Pemilu pertama Indonesia dilaksanakan pada tahun 1955 — Tahap I (memilih DPR) pada 29 September 1955, dan Tahap II (memilih Konstituante) pada 15 Desember 1955.'
    },
    {
      id: 'pg24',
      text: 'Kabinet yang berhasil menyelenggarakan Pemilu pertama Indonesia tahun 1955 adalah…',
      options: [
        'Kabinet Ali Sastroamidjojo I',
        'Kabinet Burhanuddin Harahap',
        'Kabinet Natsir',
        'Kabinet Djuanda'
      ],
      answer: 1,
      explanation: 'Kabinet Burhanuddin Harahap (Agustus 1955 – Maret 1956) adalah kabinet yang secara langsung menyelenggarakan Pemilu 1955. Program utamanya memang melaksanakan pemilu yang bebas dan jujur.'
    },
    {
      id: 'pg25',
      text: 'Konferensi Asia-Afrika di Bandung tahun 1955 berhasil diselenggarakan pada masa Kabinet…',
      options: [
        'Kabinet Natsir',
        'Kabinet Wilopo',
        'Kabinet Ali Sastroamidjojo I',
        'Kabinet Burhanuddin Harahap'
      ],
      answer: 2,
      explanation: 'Konferensi Asia-Afrika (KAA) 1955 di Bandung diselenggarakan pada masa Kabinet Ali Sastroamidjojo I (1953–1955). Ini adalah salah satu pencapaian diplomasi terbesar Indonesia di era demokrasi liberal.'
    },
    {
      id: 'pg26',
      text: 'Discovery dan Invention adalah faktor internal perubahan sosial dalam kategori…',
      options: [
        'Konflik sosial',
        'Penemuan baru',
        'Dinamika penduduk',
        'Revolusi'
      ],
      answer: 1,
      explanation: 'Discovery (penemuan unsur baru yang belum diketahui) dan Invention (pengembangan discovery menjadi sesuatu yang lebih bermanfaat) termasuk dalam faktor "penemuan baru" sebagai penyebab internal perubahan sosial.'
    },
    {
      id: 'pg27',
      text: 'Ikut merasakan kesedihan saat melihat korban bencana alam merupakan contoh dari…',
      options: ['Imitasi', 'Sugesti', 'Identifikasi', 'Simpati'],
      answer: 3,
      explanation: 'Simpati adalah perasaan tertarik kepada orang lain sehingga ingin memahami dan ikut merasakan keadaannya. Berbeda dengan empati yang lebih mendalam, simpati lebih bersifat perasaan ikut sedih atau senang.'
    },
    {
      id: 'pg28',
      text: 'Hutan berperan dalam menyerap air hujan dan menyimpannya untuk mencegah banjir dan kekeringan. Ini merupakan fungsi hutan sebagai…',
      options: [
        'Paru-paru dunia',
        'Sumber bahan baku',
        'Pengatur tata air (hidrologi)',
        'Pencegah erosi'
      ],
      answer: 2,
      explanation: 'Fungsi hidrologi hutan: menyerap air hujan, menyimpannya di dalam tanah, dan melepaskannya secara perlahan melalui sumber mata air. Ini mencegah banjir saat hujan dan kekeringan saat kemarau.'
    },
    {
      id: 'pg29',
      text: 'Selisih antara nilai ekspor dan nilai impor suatu negara disebut…',
      options: [
        'Devisa negara',
        'Neraca perdagangan',
        'Tarif bea masuk',
        'Neraca pembayaran'
      ],
      answer: 1,
      explanation: 'Neraca perdagangan (trade balance) adalah selisih antara nilai ekspor dan impor. Surplus bila ekspor > impor, defisit bila impor > ekspor.'
    },
    {
      id: 'pg30',
      text: 'Motif ekonomi yang mendorong seseorang bekerja untuk membantu masyarakat melalui donasi dan CSR adalah…',
      options: [
        'Motif keuntungan',
        'Motif kekuasaan',
        'Motif memenuhi kebutuhan',
        'Motif sosial'
      ],
      answer: 3,
      explanation: 'Motif sosial adalah dorongan melakukan kegiatan ekonomi untuk membantu orang lain atau berkontribusi pada kesejahteraan masyarakat. Contoh: donasi, program CSR (Corporate Social Responsibility) perusahaan.'
    }
  ],

  /* ──────────────────────────────────────────────────────────
     SECTION B: PILIHAN GANDA KOMPLEKS (PGK) — 10 soal
     Pilih SEMUA jawaban yang benar (bisa lebih dari satu)
     ────────────────────────────────────────────────────────── */
  pgk: [
    {
      id: 'pgk1',
      text: 'Pernyataan mana saja yang BENAR mengenai syarat-syarat interaksi sosial?',
      options: [
        'Kontak sosial selalu menghasilkan komunikasi yang efektif',
        'Komunikasi dapat terjadi secara verbal maupun non-verbal',
        'Kontak sosial bisa bersifat langsung maupun tidak langsung',
        'Tanpa kontak sosial, komunikasi tetap dapat menghasilkan interaksi sosial'
      ],
      answers: [1, 2],
      explanation: 'Pernyataan benar: (B) Komunikasi memang bisa verbal/non-verbal, dan (C) Kontak sosial bisa langsung (tatap muka) atau tidak langsung (melalui media). Pernyataan A salah karena kontak sosial belum tentu menghasilkan komunikasi efektif. Pernyataan D salah karena komunikasi memerlukan kontak sosial terlebih dahulu.'
    },
    {
      id: 'pgk2',
      text: 'Dari pernyataan berikut, manakah yang merupakan contoh ACHIEVED STATUS?',
      options: [
        'Seorang pria yang terlahir dari keluarga bangsawan',
        'Seorang perempuan yang berhasil menjadi dokter spesialis',
        'Seorang atlet yang meraih medali emas olimpiade',
        'Seorang anak yang mewarisi jabatan kepala suku dari ayahnya'
      ],
      answers: [1, 2],
      explanation: 'Achieved status diperoleh melalui usaha: (B) Menjadi dokter spesialis dan (C) Meraih medali olimpiade adalah hasil kerja keras sendiri. Sedangkan (A) terlahir bangsawan = ascribed status, dan (D) mewarisi jabatan = ascribed/assigned status.'
    },
    {
      id: 'pgk3',
      text: 'Manakah yang termasuk 7 Unsur Kebudayaan Universal menurut C. Kluckhohn?',
      options: [
        'Sistem kemasyarakatan dan organisasi sosial',
        'Bahasa',
        'Sistem pemerintahan demokratis',
        'Sistem religi dan kepercayaan',
        'Kesenian'
      ],
      answers: [0, 1, 3, 4],
      explanation: 'Dari pilihan tersebut, yang termasuk 7 Unsur Kebudayaan Universal adalah: (A) Sistem kemasyarakatan, (B) Bahasa, (D) Sistem religi, dan (E) Kesenian. "Sistem pemerintahan demokratis" (C) bukan salah satu dari 7 unsur universal karena tidak semua kebudayaan memilikinya.'
    },
    {
      id: 'pgk4',
      text: 'Manakah pernyataan yang BENAR tentang fungsi turunan uang?',
      options: [
        'Uang sebagai alat tukar merupakan fungsi turunan',
        'Uang dapat berfungsi sebagai alat penyimpan nilai',
        'Uang sebagai satuan hitung merupakan fungsi turunan',
        'Uang dapat berfungsi sebagai alat pemindah kekayaan',
        'Uang dapat mendorong kegiatan ekonomi'
      ],
      answers: [1, 3, 4],
      explanation: 'Fungsi turunan uang: (B) Penyimpan nilai, (D) Pemindah kekayaan, dan (E) Pendorong kegiatan ekonomi. Alat tukar (A) dan satuan hitung (C) adalah fungsi ASLI (primer), bukan turunan.'
    },
    {
      id: 'pgk5',
      text: 'Manakah yang merupakan manfaat perdagangan internasional bagi Indonesia?',
      options: [
        'Mendapatkan devisa dari kegiatan ekspor',
        'Menghasilkan semua kebutuhan secara mandiri tanpa impor',
        'Memperluas lapangan kerja melalui produksi untuk ekspor',
        'Memperoleh alih teknologi dari negara maju',
        'Mempererat hubungan diplomatik dengan negara lain'
      ],
      answers: [0, 2, 3, 4],
      explanation: 'Manfaat perdagangan internasional: (A) devisa, (C) lapangan kerja, (D) alih teknologi, dan (E) hubungan diplomatik. Pernyataan (B) salah — justru tujuan perdagangan internasional adalah untuk memenuhi kebutuhan yang tidak bisa diproduksi sendiri (bukan menghasilkan semua secara mandiri).'
    },
    {
      id: 'pgk6',
      text: 'Pernyataan mana yang BENAR tentang modernisasi?',
      options: [
        'Modernisasi identik dengan westernisasi (meniru budaya Barat)',
        'Modernisasi bisa mempertahankan nilai budaya lokal',
        'Modernisasi selalu berdampak negatif pada masyarakat',
        'Cara berpikir ilmiah adalah syarat modernisasi',
        'Modernisasi hanya menyangkut teknologi semata'
      ],
      answers: [1, 3],
      explanation: 'Pernyataan benar: (B) Modernisasi tidak harus menghilangkan budaya lokal — idealnya mempertahankannya, dan (D) Cara berpikir ilmiah memang salah satu syarat modernisasi menurut Schoorl. Pernyataan A salah (modernisasi ≠ westernisasi), C salah (juga ada dampak positif), E salah (modernisasi mencakup sosial, ekonomi, budaya, bukan hanya teknologi).'
    },
    {
      id: 'pgk7',
      text: 'Manakah yang termasuk faktor INTERNAL penyebab perubahan sosial?',
      options: [
        'Penemuan baru (discovery dan invention)',
        'Pengaruh budaya asing melalui media',
        'Konflik dalam masyarakat',
        'Bencana alam seperti gempa dan banjir',
        'Perubahan jumlah penduduk'
      ],
      answers: [0, 2, 4],
      explanation: 'Faktor internal perubahan sosial berasal dari dalam masyarakat: (A) Penemuan baru, (C) Konflik dalam masyarakat, dan (E) Perubahan jumlah penduduk. Pengaruh budaya asing (B) dan bencana alam (D) adalah faktor EKSTERNAL.'
    },
    {
      id: 'pgk8',
      text: 'Manakah pernyataan yang BENAR tentang Pemilu 1955?',
      options: [
        'Pemilu 1955 merupakan pemilu pertama dan paling demokratis Indonesia',
        'Pemilu 1955 diselenggarakan oleh Kabinet Djuanda',
        'Tujuan Pemilu 1955 adalah memilih anggota DPR dan Konstituante',
        'Partai pemenang pertama Pemilu 1955 adalah Masyumi',
        'Tingkat partisipasi pemilih dalam Pemilu 1955 sangat tinggi'
      ],
      answers: [0, 2, 4],
      explanation: 'Benar: (A) Pemilu 1955 memang yang pertama dan paling demokratis, (C) tujuannya memilih DPR dan Konstituante, dan (E) partisipasi sangat tinggi (~87,65%). Salah: (B) penyelenggaranya Kabinet Burhanuddin Harahap (bukan Djuanda), (D) pemenang pertama adalah PNI (22,3%), bukan Masyumi.'
    },
    {
      id: 'pgk9',
      text: 'Manakah yang merupakan fungsi EKOLOGIS hutan?',
      options: [
        'Sumber kayu untuk industri mebel',
        'Paru-paru dunia — penyerap CO₂ dan penghasil O₂',
        'Pengatur siklus air (hidrologi)',
        'Tempat ekowisata yang menghasilkan pendapatan',
        'Pencegah erosi dan tanah longsor'
      ],
      answers: [1, 2, 4],
      explanation: 'Fungsi ekologis hutan: (B) Paru-paru dunia, (C) Pengatur tata air/hidrologi, dan (E) Pencegah erosi-longsor. Sedangkan (A) sumber kayu adalah fungsi ekonomis, dan (D) ekowisata adalah fungsi ekonomis/sosial.'
    },
    {
      id: 'pgk10',
      text: 'Manakah yang termasuk komponen utama literasi finansial?',
      options: [
        'Pengetahuan (knowledge) tentang produk keuangan',
        'Kemampuan membobol sistem perbankan',
        'Sikap (attitude) positif terhadap pengelolaan keuangan',
        'Perilaku (behavior) dalam mengelola keuangan',
        'Keterampilan (skill) menggunakan produk keuangan'
      ],
      answers: [0, 2, 3, 4],
      explanation: 'Empat komponen literasi finansial: (A) Pengetahuan, (C) Sikap, (D) Perilaku, dan (E) Keterampilan. Kemampuan membobol sistem perbankan (B) jelas bukan komponen literasi finansial yang sah.'
    }
  ],

  /* ──────────────────────────────────────────────────────────
     SECTION C: BENAR / SALAH (True/False) — 10 soal
     ────────────────────────────────────────────────────────── */
  tf: [
    {
      id: 'tf1',
      text: 'Kontak sosial selalu diikuti dengan terjadinya komunikasi yang efektif.',
      answer: false,
      explanation: 'SALAH. Kontak sosial belum tentu menghasilkan komunikasi yang efektif. Misalnya, dua orang yang saling menatap (kontak) belum tentu berhasil berkomunikasi karena perbedaan bahasa atau ketidakmauan berbicara.'
    },
    {
      id: 'tf2',
      text: 'Ascribed status adalah status sosial yang diperoleh seseorang melalui usaha dan kerja kerasnya sendiri.',
      answer: false,
      explanation: 'SALAH. Ascribed status adalah status yang DIPEROLEH SEJAK LAHIR berdasarkan keturunan, ras, jenis kelamin, dll — bukan melalui usaha. Status yang diperoleh melalui usaha disebut achieved status.'
    },
    {
      id: 'tf3',
      text: 'Bahasa termasuk salah satu dari 7 Unsur Kebudayaan Universal menurut C. Kluckhohn.',
      answer: true,
      explanation: 'BENAR. Bahasa adalah salah satu dari 7 unsur kebudayaan universal menurut C. Kluckhohn, bahkan dianggap yang paling penting karena menopang semua unsur kebudayaan lainnya.'
    },
    {
      id: 'tf4',
      text: 'Fungsi asli (primer) uang terdiri dari alat tukar dan alat pembayaran.',
      answer: false,
      explanation: 'SALAH. Fungsi asli (primer) uang adalah ALAT TUKAR dan SATUAN HITUNG. Alat pembayaran adalah fungsi turunan (sekunder) uang, bukan fungsi asli.'
    },
    {
      id: 'tf5',
      text: 'Kabinet Burhanuddin Harahap adalah kabinet yang berhasil menyelenggarakan Pemilu pertama Indonesia tahun 1955.',
      answer: true,
      explanation: 'BENAR. Kabinet Burhanuddin Harahap (Agustus 1955 – Maret 1956) memang berhasil menyelenggarakan Pemilu 1955 sebagai program utamanya — pemilu yang dianggap paling demokratis dalam sejarah Indonesia.'
    },
    {
      id: 'tf6',
      text: 'Modernisasi dan westernisasi adalah dua hal yang sama.',
      answer: false,
      explanation: 'SALAH. Modernisasi (kemajuan dalam berbagai aspek kehidupan) BERBEDA dengan westernisasi (peniruan gaya hidup Barat). Modernisasi yang ideal justru mempertahankan nilai-nilai budaya lokal sambil mengadopsi kemajuan ilmu pengetahuan dan teknologi.'
    },
    {
      id: 'tf7',
      text: 'Penemuan baru (discovery dan invention) merupakan salah satu faktor internal penyebab perubahan sosial.',
      answer: true,
      explanation: 'BENAR. Penemuan baru (discovery = menemukan hal baru; invention = mengembangkannya) adalah faktor internal perubahan sosial karena muncul dari dalam masyarakat itu sendiri dan mendorong perubahan cara hidup.'
    },
    {
      id: 'tf8',
      text: 'Hutan tidak memiliki fungsi ekonomis karena hanya berfungsi sebagai penjaga lingkungan hidup.',
      answer: false,
      explanation: 'SALAH. Hutan memiliki fungsi ekonomis yang sangat penting: sumber kayu/rotan/bambu untuk industri, sumber pangan dan obat-obatan, serta potensi ekowisata yang menghasilkan pendapatan dan devisa.'
    },
    {
      id: 'tf9',
      text: 'Well literate adalah tingkat literasi finansial tertinggi menurut kategorisasi OJK.',
      answer: true,
      explanation: 'BENAR. Well literate (melek finansial penuh) adalah tingkat tertinggi literasi finansial menurut OJK — individu yang memiliki pengetahuan, keyakinan, DAN keterampilan dalam menggunakan produk keuangan.'
    },
    {
      id: 'tf10',
      text: 'Gotong royong, koalisi, dan joint venture adalah contoh-contoh bentuk kerjasama (cooperation) dalam interaksi sosial.',
      answer: true,
      explanation: 'BENAR. Ketiganya merupakan bentuk kerjasama: gotong royong (sukarela berbasis komunitas), koalisi (antar organisasi/partai politik), dan joint venture (kerjasama bisnis antar perusahaan). Ketiganya masuk kategori proses sosial asosiatif.'
    }
  ]
};
