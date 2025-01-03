<template>
  <!-- Hero Section -->
  <section id="hero">
    <!-- Tagline -->
    <div class="container h-100">
      <div class="row h-100">
        <div class="col-lg-6 col-sm-12 hero-tagline my-auto">
          <h1>Selamat Datang Di Website SMK Negeri 4 Tasikmalaya</h1>
          <p>
            <span class="fw-bold"></span>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Non incidunt deserunt voluptatem fuga culpa porro
            consequuntur excepturi dignissimos ex ut accusamus adipisci
            reiciendis eligendi, provident suscipit autem recusandae mollitia
            aspernatur!
          </p>
          <button class="button-lg-secondary me-4">Lihat selengkapnya</button>
          <NuxtLink to="#">
            <img src="assets/Right Arrow.png" alt="" />
          </NuxtLink>
        </div>
      </div>
      <img
        src="assets/smkn4.jpeg"
        class="image-hero position-absolute end-0 bottom-0"
        alt=""/>
        <img src="assets/kepala sekolah.png" 
        class="image-hero2 position-absolute end-0 bottom-0"
        alt="">
    </div>
  </section>

  <!-- Berita Terbaru Section -->
  <div class="container mt-5">
    <h1 class="text-center mb-4">Berita Terbaru</h1>
    <div class="row">
      <!-- Berita pertama di kiri -->
      <div class="col-md-6 mb-3">
        <div v-for="(berita, index) in beritaListkiri" :key="index" class="mb-3 shadow-sm berita-card hover-effect">
          <Nuxtlink :to="berita.link" target="_blank" class="card-link-wrapper">
            <div class="card">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img :src="berita.foto" class="card-img" alt="Gambar Berita" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ berita.judul }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{ berita.tanggal }}</h6>
                    <p class="card-text">{{ berita.deskripsi }}</p>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Berita kedua di kanan -->
      <div class="col-md-6 mb-3">
        <div v-for="(berita, index) in beritaListKanan" :key="'right-' + index" class="mb-3 shadow-sm berita-card hover-effect">
          <NuxtLink :to="berita.link" target="_blank" class="card-link-wrapper">
            <div class="card">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img :src="berita.foto" class="card-img" alt="Gambar Berita" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ berita.judul }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{ berita.tanggal }}</h6>
                    <p class="card-text">{{ berita.deskripsi }}</p>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <!-- Sambutan Kepala Sekolah Section -->
  <section id="about" class="pt-5">
    <div class="mb-3 pb-5" style="max-width: 100%;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="@/assets/kepala sekolah.png" class="img-fluid p-4" alt="Kepala Sekolah" />
        </div>
        <div class="col-md-8 text-justify">
          <div class="card-body">
            <h2 class="about card-title text-center mb-5">Sambutan Kepala Sekolah</h2>
            <p>Assalamu’alaikum warahmatullahi wabarakatuh,</p>
            <p>Salam sejahtera bagi kita semua.</p>
            <p>Puji syukur kita panjatkan ke hadirat Allah SWT atas segala limpahan rahmat dan karunia-Nya. Dengan penuh rasa bangga, saya menyampaikan sambutan hangat kepada seluruh pengunjung website resmi SMKN 4 Tasikmalaya.</p>
            <p>Website ini kami hadirkan sebagai media informasi, komunikasi, dan edukasi yang dapat diakses oleh siswa, orang tua, guru, serta masyarakat luas. Di sini, Anda dapat menemukan berbagai informasi terkait kegiatan sekolah, prestasi siswa, program unggulan, serta berita terbaru yang menjadi bagian dari perjalanan kami di dunia pendidikan.</p>
            <p>Kami berkomitmen untuk terus memberikan pelayanan terbaik demi mencetak generasi unggul, berkarakter, dan siap menghadapi tantangan masa depan. Harapan kami, kehadiran website ini dapat semakin mempererat hubungan antara sekolah, orang tua, dan masyarakat.</p>
            <p>Terima kasih atas kunjungan Anda. Jangan ragu untuk memberikan saran dan masukan demi pengembangan sekolah yang lebih baik.</p>
            <p>Wassalamu’alaikum warahmatullahi wabarakatuh.</p>
            <p>Hormat saya,</p>
            <p>SMKN 4 Tasikmalaya</p>
            <p>Kuniawan Spd.Mpd</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>


import foto1 from '@/assets/berita/astra.jpg'
import foto2 from '@/assets/berita/gur.jpeg'
import foto3 from '@/assets/berita/jo.jpg'

const beritaListkiri = [
  {
    judul: 'SMKN 4 Tasikmalaya Gelar Job Fair 2023, Harapkan Angka Pengangguran di Tasikmalaya Berkurang',
    tanggal: '12/10/2024',
    foto: foto3,
    link: 'https://ruangatas.com/smkn-4-tasikmalaya-gelar-job-fair-2023-harapkan-angka-pengangguran-di-tasikmalaya-berkurang/'
  },
  {
    judul: 'Sinkronisasi Kurikulum SMKN 4 Tasikmalaya dengan Inovindo',
    tanggal: '09/07/2024',
    foto: foto2,
    link: 'https://inovindoacademy.com/berita/sinkronisasi-kurikulum-smkn-4-tasikmalaya-dengan-inovindo'
  },
  {
    judul: 'Astra Honda Resmikan Safety Riding Lab ke-7 di SMKN 4 Tasikmalaya, Kampanye Keselamatan Berkendara',
    tanggal: '20/05/2024',
    foto: foto1,
    link: 'https://inovindoacademy.com/berita/sinkronisasi-kurikulum-smkn-4-tasikmalaya-dengan-inovindo'
  }
];

const beritaListKanan = [
  ...beritaListkiri
];
</script>

<style>
:root {
  --pr-color: #25c585;
}

/* Hero Section */

#hero {
  background: linear-gradient(160deg, var(--pr-color), #000);
  height: 100vh;
  width: 100%;
}

#hero img {
  z-index: 0;
}

.image-hero {
  height: 100%;
  width: 100%;
  opacity: 0.2;
}

.image-hero2 {
  height: 90%;
  
}

.hero-tagline h1 {
  font-size: 50px;
  color: #fff;
  line-height: 72px;
}

.hero-tagline p {
  font-size: 1rem;
  color: #fff;
  margin-bottom: 60px;
  margin-top: 20px;
  line-height: 30px;
  width: 90%;
}

* {
  z-index: 2;
}

.accsent-img {
  z-index: 1;
}
</style>