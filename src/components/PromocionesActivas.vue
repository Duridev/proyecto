<script setup>
import { ref, onMounted } from 'vue';
import promocionesData from '../db/home.json';

const promociones = ref([]);

onMounted(() => {
  promociones.value = promocionesData.paginaInicio.promociones;
});
</script>

<template>
  <div class="flex justify-around space-x-4 mt-8">
    <div v-for="promo in promociones" :key="promo.id" class="bg-white rounded-xl shadow-md w-1/2 border border-gray-300">

      <div class="bg-gray-200 p-2 border-b border-gray-300">
        <h2 class="text-xl font-bold text-gray-800">{{ promo.titulo }}</h2>
      </div>
      
      <div class="p-4">
        <p class="text-black font-bold text-lg mb-2">{{ promo.validoHasta }}</p>
        <p class="text-gray-600">{{ promo.descripcion }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos específicos para este componente si es necesario */
</style>
