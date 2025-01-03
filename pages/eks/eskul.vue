<template>
  <div class="container">
  <h1 class="text-center mb-4">
    <b>Ekstrakurikuler SMKN 4 TASIKMALAYA</b>
  </h1>
  <div class="eks-container">
    <div class="eks-grid">
      <div class="card">
        <img src="@/assets/eks/pramuka.jpeg" alt="Pramuka" class="img" />
        <h2 class="title">Pramuka</h2>
      </div>
      <div class="card">
        <img src="@/assets/eks/paskib.jpeg" alt="Paskibra" class="img" />
        <h2 class="title">Paskibra</h2>
      </div>
      <div class="card">
        <img src="@/assets/eks/perisai.jpg" alt="Perisai Diri" class="img" />
        <h2 class="title">Perisai Diri</h2>
      </div>
      <div class="card">
        <img src="@/assets/eks/bola.jpeg" alt="Sepak Bola" class="img" />
        <h2 class="title">Sepak Bola</h2>
      </div>
      <div class="card">
        <img src="@/assets/eks/futsal.jpeg" alt="Futsal" class="img" />
        <h2 class="title">Futsal</h2>
      </div>
      <div class="card">
        <img src="@/assets/eks/voli.jpg" alt="Voly" class="img" />
        <h2 class="title">Voly</h2>
      </div>
      <div class="card">
        <img src="@/assets/eks/safe.jpg" alt="Safety Riding" class="img" />
        <h2 class="title">Safety Riding</h2>
      </div>
      <div class="card">
        <img src="@/assets/eks/pks.jpeg" alt="PKS" class="img" />
        <h2 class="title">PKS</h2>
      </div>
      <div class="card">
        <img src="@/assets/eks/irma.jpg" alt="Rohis" class="img" />
        <h2 class="title">Rohis (IRMA)</h2>
      </div>
      <div class="card ">
        <img src="@/assets/eks/basket.jpg" alt="Basket" class="img" />
        <h2 class="title">Basket</h2>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  padding-top: 120px;
}


  .eks-container {
    padding: 20px;
    font-family: Arial, sans-serif;
    text-align: center;
  }

  .eks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  .card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: scale(1.05); 
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  .img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .title {
    padding: 10px;
    font-size: 18px;
    color: #555;
    font-weight: bold;
  }
</style>