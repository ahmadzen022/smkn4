<script setup lang="ts">
import Contact from '../components/Contact.vue';

</script>

<template>
  <div>
    <Header />

    <slot />

    <Contact />
  </div>

</template>