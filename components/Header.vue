<template>
  <div>
    <!--  Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-success position-fixed w-100">
      <div class="container">
        <a class="navbar-brand" href="#hero">
          <img
            src="assets/logo.png"
            alt=""
            width="35"
            class="d-inline-block align-text me-3 "/>
          SMKN4 TASIKMALAYA
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <NuxtLink  to="/" class="nav-link active"aria-current="page" href="">Beranda</NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link active dropdown-toggle" href="#"id="navbarDropdownEkskul" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">Profile</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownProfil" id="navbarDropdownProfil">
                <li>
                  <nuxt-link to="/profile/sejarah" class="dropdown-item">
                    Sejarah
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/profile/visi-misi" class="dropdown-item">
                    Visi & Misi
                  </nuxt-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink  to="/kejuruan/jurusan" class="nav-link active"aria-current="page" href="">Kejuruan</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/eks/eskul" class="nav-link active"aria-current="page" href="">Ekskul</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/galeriSekolah/galeri" class="nav-link active"aria-current="page" href="">Galeri</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink  to="/contact/kontak" class="nav-link active"aria-current="page" href="">Kontak</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};

</script>

<style>
body {
  font-family: "Poppins", sans-serif;
  background-color: #ffffff;
}

.navbar {
  z-index: 3;
}

nav .navbar-brand {
  font-size: 20px;
  font-weight: 700;
  color: #fff !important;
}

.navbar .nav-link.active {
  font-weight: 700;
}

.nav-link:hover {
  background-color: var(--pr-color);
}

.navbar .nav-link {
  font-size: 1rem;
  color: #fff !important;
}


.button-secondary {
  width: 133px;
  height: 40px;
  background-color: #fff;
  color: var(--pr-color);
  font-size: 1rem;
  font-weight: 500;
  border: none;
}

.button-lg-secondary {
  width: 237px;
  height: 70px;
  background-color: #fff;
  color: var(--pr-color);
  border: none;
  font-size: 20px;
  font-weight: 700;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  min-width: 200px;
}

.dropdown-menu li {
  width: 100%;
}

.dropdown-menu li a {
  padding: 10px;
}

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
