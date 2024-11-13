export default function AboutContent() {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Kolom untuk gambar */}
        <div className="col-md-6">
          <img
            src="assets/about/people.png"
            alt="Deskripsi Gambar"
            className="img-fluid"
          />
        </div>

        {/* Kolom untuk teks */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
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

      {/*  */}
      <div className="row flex-row-reverse">
        {/* Kolom untuk gambar */}
        <div className="col-md-6">
          <img
            src="assets/about/list.png"
            alt="Deskripsi Gambar"
            className="img-fluid ms-md-5 ms-0"
          />
        </div>

        {/* Kolom untuk teks */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
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

      {/*  */}
    </div>
  );
}
