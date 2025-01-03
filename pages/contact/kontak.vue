<template>
  <!-- Contact -->
  <section id="kontak">
     <div class=" container-fluid overlay h-100">
         <div class="container">
             <div class="row ">
                 <div class="col-md-6 mb-5 lh-lg">
                     <h3>Hubungi kami</h3>
                     <div class="kontak">
                         <h6 class="mt-4">Kontak</h6>

                         <div class="alamat">
                             <img src="assets/kontak/Alamat Icon.png" alt="">
                             <NuxtLink to="#" class="d-inline-block w-lg-50 align-middle lh-sm ms-3 ">Jl Depok Kel. Sukamenak Kec. Purbaratu Kota Tasikmalaya 46196.
                                </NuxtLink>
                         </div>

                         <div class="whatsapp ">
                             <img src="assets/kontak/Whatsapp icon.png" alt="">
                             <NuxtLink to="#" class="ms-3">089506334996</NuxtLink>
                         </div>

                         <div class="email">
                             <img src="assets/kontak/Email Icon.png" alt="">
                             <NuxtLink to="#"></NuxtLink>
                         </div>

                         <h6 class="mt-4">Social Media</h6>
                         <NuxtLink to="#"><img src="~/assets/kontak/Facebook Icon.png" alt=""> </NuxtLink>
                         <NuxtLink to="#"><img src="~/assets/kontak/Twiter Icon.png" alt=""></NuxtLink>
                         <NuxtLink to="#"><img src="~/assets/kontak/Instagram Iicon.png" alt=""></NuxtLink>
                         <NuxtLink to="#"></NuxtLink>
                     </div>
                 </div>
                 <div class="col-md-6">
                     <div class="card-contact w-100">
                         <form @submit.prevent="kirim()">
                             <div class="form-floating mb-4">
                                 <input v-model="form.nama" type="email" class="form-control" id="floatingInput"
                                     placeholder="name@example.com">
                                 <label for="floatingInput" class="d-flex align-items-center">Email Anda</label>
                             </div>
                             <div class="form-floating mb-4">
                                 <input v-model="form.pesan" type="text" class="form-control" id="floatingInput"
                                     placeholder="name@example.com">
                                 <label for="floatingInput" class="d-flex align-items-center">Ada
                                     Pertanyaan..?</label>
                             </div>

                             <button type="submit" class="button-kontak">Kirim</button>
                         </form>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </section>
</template>

<script setup>
const sb = useSupabaseClient()
const form = ref({
    nama: "",
    pesan: ""
})

// console.log(sb)

async function kirim() { 
    console.log(form.value)
    const { data, error } = await sb
    .from('kontak')
    .insert([
        { nama: form.value.nama, pesan: form.value.pesan },
    ])
    .select()
    if(data) {
        alert("Pesan terkirim!")
    } else {
        throw error
    }
}
</script>

<style> 
#kontak {
 background-image: url(assets/smkn4.jpeg);
 background-size: cover;
 background-repeat: no-repeat;
}
#kontak h3 {
 width: 70%;
 font-size: 40px;
 color: #fff;
}

#kontak .overlay {
 background-color: rgba(0, 0, 0, .6);
}

#kontak .container {
 padding : 130px 0;
}



.card-contact {
 height: 445px;
 background-color: #fff;
 border-radius: 5px;
 padding: 75px 48px;
}

.card-contact .form-control {
 height: 75px ;
 border-radius: 0;
 background-color: #DADADA;
}

.card-contact .form-control:focus {
 box-shadow: 0 0 3px var(--pr-color);
}

.card-contact label {
 color: #656565;
 font-size: 18px;
}

.button-kontak {
 width: 100%;
 height: 75px;
 background-color: var(--pr-color);
 border: none;
 font-size: 23px;
 font-weight: 600;
 color: #fff;
}

.kontak h6 {
 color: #fff;

}

.kontak a {
 color: #fff;
 width: 355px;
 font-size: 16px;
 text-decoration: none;
}

</style>