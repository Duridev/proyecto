<script setup>
import { ref, onMounted } from 'vue';
import homeData from '../../src/db/home.json';

const eventos = ref([]);

onMounted(() => {
  eventos.value = homeData.paginaInicio.eventos;
});
</script>

<template>
  <div class="flex flex-wrap justify-center w-2/5 mx-auto">
    <div v-for="evento in eventos" :key="evento.id" class="bg-white rounded-lg shadow-md p-4 mb-4 relative">
      <div class="absolute top-2 right-2 text-sm">
        <div class="flex items-center space-x-1">
          <span class="text-gray-600">📅</span>
          <div class="text-right">
            <p class="text-gray-700">{{ evento.fecha }}</p>
            <p class="text-gray-700">{{ evento.hora }}</p>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <h2 class="text-xl font-bold mb-2">{{ evento.titulo }}</h2>
        <p class="text-gray-600 mb-2">{{ evento.descripcion }}</p>
        <p class="text-gray-800 italic">{{ evento.ubicacion }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
