export default function AboutContent() {
  return (
    <div className="container my-5">
      {/* content 1 */}
      <div className="row align-items-center">
        {/* Kolom untuk gambar */}
        <div className="col-md-6">
          <img
            src="assets/about/people.png"
            alt="Deskripsi Gambar"
            className="img-fluid rounded-3"
          />
        </div>

        {/* Kolom untuk teks */}
        <div className="col-md-6">
          <h2 className="mb-3">Tentang Kami</h2>
          <p>
            Tech Quiztify adalah platform edukatif berbasis kuis yang kami
            kembangkan bersama dengan tujuan untuk menginspirasi dan mengedukasi
            generasi muda Indonesia dalam dunia teknologi informasi dan
            pemrograman. Kami terdiri dari tim beranggotakan tujuh orang yang
            berkomitmen untuk memberikan akses pengetahuan dan pengalaman
            belajar interaktif bagi pelajar SMP hingga SMA di seluruh Indonesia.
          </p>
        </div>
      </div>

      {/* content 2 */}
      <div className="row flex-md-row-reverse align-items-center">
        {/* Kolom untuk gambar */}
        <div className="col-md-6">
          <img
            src="assets/about/list.png"
            alt="Deskripsi Gambar"
            className="img-fluid ms-md-5 ms-0 rounded-3"
          />
        </div>

        {/* Kolom untuk teks */}
        <div className="col-md-6">
          <h2 className="mb-3">Latar Belakang</h2>
          <p>
            Tech Quiztify hadir sebagai respons atas meningkatnya minat anak
            muda terhadap bidang teknologi informasi dan pemrograman. Kami
            memahami bahwa generasi muda memerlukan wadah yang dapat membimbing
            mereka memahami konsep teknologi sekaligus membantu mereka
            menjelajahi jalur karir potensial di bidang ini. Platform ini juga
            mendukung visi Indonesia Emas 2045, di mana generasi muda yang
            cerdas dan berdaya saing tinggi akan menjadi kunci bagi kemajuan
            bangsa.
          </p>
        </div>
      </div>

      {/* Visi & Misi */}
      <div className="mt-4 bg-warning py-5">
        <h1 className="text-center">Visi dan Misi</h1>

        <div className="row justify-content-center">
          {/* visi 1 */}
          <div className="col-md-4 text-center">
            <h4>1. Memberikan Pendidikan yang Interaktif</h4>
            <p>
              Menyediakan kuis dan materi yang relevan agar siswa bisa belajar
              dengan cara yang lebih menyenangkan.
            </p>
          </div>

          {/* visi 2 */}
          <div className="col-md-4 text-center">
            <h4>2. Menginspirasi Jalur Karir di Teknologi</h4>
            <p>
              Menunjukkan jalur karir yang dapat dikejar di bidang teknologi
              berdasarkan minat dan keterampilan mereka.
            </p>
          </div>
          {/* visi 3 */}

          <div className="col-md-5 text-center">
            <h4>3. Memajukan Kompetensi Digital Anak Bangsa</h4>
            <p>
              Membantu siswa membangun keterampilan digital dasar hingga tingkat
              lanjut untuk menghadapi masa depan yang penuh dengan peluang
              teknologi.
            </p>
          </div>
        </div>
      </div>

      {/* Penawaran */}
      <div className="mt-5">
        <h1 className="text-center">Apa yang Kami Tawarkan</h1>
        <p className="text-center mx-auto col-md-8 ">
          Di Tech Quiztify, siswa dapat memilih dari delapan topik utama, mulai
          dari Web Development hingga Artificial Intelligence. Setiap topik
          dirancang untuk
        </p>
        <div className="row justify-content-center mt-5 gap-4">
          <div className="col-md-3 p-4 shadow rounded bg-white">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="fw-bold text-warning">1</h1>
              <p>Membaca Materi</p>
            </div>
          </div>
          <div className="col-md-3 p-4 shadow rounded bg-white mx-md-5">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="fw-bold text-warning">2</h1>
              <p>Mengikuti Kuis</p>
            </div>
          </div>
          <div className="col-md-3 p-4 shadow rounded bg-white">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="fw-bold text-warning">3</h1>
              <p>Menjelajahi Jenjang Karir</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
