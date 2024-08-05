<script setup>
import { ref, onMounted } from 'vue';
import tematicasData from '../db/home.json';

const tematicas = ref([]);

onMounted(() => {
  tematicas.value = tematicasData.paginaInicio.tematicasDestacadas;
});
</script>

<template>
  <div class="flex flex-col items-center space-y-4 w-4/5 mx-auto mt-8">
    <div v-for="tematica in tematicas" :key="tematica.id" class="bg-white rounded-lg shadow-md border border-gray-300 w-full max-w-4xl">
      <!-- Nombre de la temática -->
      <div class="bg-gray-200 p-2 border-b border-gray-300">
        <h2 class="text-xl font-bold text-gray-800">{{ tematica.nombre }}</h2>
      </div>
      
      <!-- Descripción de la temática -->
      <div class="p-4">
        <p class="text-gray-600">{{ tematica.descripcion }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos específicos para este componente si es necesario */
</style>
