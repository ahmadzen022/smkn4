<template>
  <div>
    <div class="container">
      <h1 class="fw-bold text-center ">Program Keahlian</h1>
      <div class="row g-4 pt-5  ">
        <div class="col-md-4">
          <div class="card1 text-center shadow hover-card">
            <div class="card-body">
              <img
                src="~/assets/jurusan/tjkt.png"
                alt="Teknik Komputer dan Jaringan"
                class="img-fluid mb-3"/>
              <h5 class="card-title mt-3">
                Teknik Komputer Jaringan dan Telekomunikasi
              </h5>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card2 text-center shadow hover-card">
            <div class="card-body">
              <img
                src="~/assets/jurusan/pplg.png"
                alt="Rekayasa Perangkat Lunak"
                class="img-fluid mb-3"
              />
              <h5 class="card-title mt-3">
                Perkembangan Perangkat Lunak dan Game
              </h5>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card3 text-center shadow hover-card">
            <div class="card-body">
              <img
                src="~/assets/jurusan/tbsm.png"
                alt="Teknik dan Bisnis Sepeda Motor"
                class="img-fluid mb-3"
              />
              <h5 class="card-title mt-3">Teknik dan Bisnis Sepeda Motor</h5>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card4 text-center shadow hover-card">
            <div class="card-body">
              <img
                src="~/assets/jurusan/dkv.png"
                alt="Desain Komunikasi Visual"
                class="img-fluid mb-3"
              />
              <h5 class="card-title mt-3">Desain Komunikasi Visual</h5>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card5 text-center shadow hover-card">
            <div class="card-body">
              <img
                src="~/assets/jurusan/toi.jpg"
                alt="Teknik Otomasi Industri"
                class="img-fluid mb-3"
              />
              <h5 class="card-title mt-3">Teknik Otomasi Industri</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  padding-top: 120px;
}

.card-body {
  padding: 1.5rem;
}

.card1 {
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 220px;
  max-width: 270px;
  margin-left: auto;
  margin-right: auto;
}

.card2 {
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 220px;
  max-width: 270px;
  margin-left: auto;
  margin-right: auto;
}

.card3 {
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 220px;
  max-width: 270px;
  margin-left: auto;
  margin-right: auto;
}

.card4 {
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 220px;
  max-width: 270px;
  margin-left: auto;
  margin-right: auto;
}

.card5 {
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 220px;
  max-width: 270px;
  margin-left: auto;
  margin-right: auto;
}

.card1:hover {
  background:  #87CEFA;
  transform: translateY(-10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card2:hover {
  background: #4ee7a7;
  transform: translateY(-10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card3:hover {
  background: #b92b2b;
  transform: translateY(-10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card4:hover {
  background:  #ebb44d;
  transform: translateY(-10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card5:hover {
  background:  #b4b4b4;
  transform: translateY(-10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.img-fluid {
  max-height: 90px;
  width: 70px;
  object-fit: cover;
  border-radius: 8px;
}

.hover-card:hover {
  transform: scale(1.05);
}
</style>