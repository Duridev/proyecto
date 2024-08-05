<script setup>
import { ref } from 'vue';
import homeData from '../db/home.json';

const redesSociales = ref(homeData.paginaInicio.redesSociales);
const contacto = ref(homeData.paginaInicio.contacto);
</script>

<template>
  <footer class="flex flex-col sm:flex-row justify-between p-4 rounded-xl border-2 border-black m-8">
    <div>
      <h3 class="text-xl font-semibold mb-2">Redes Sociales</h3>
      <ul>
        <li class="mb-1">
          <a :href="redesSociales.facebook" class="text-blue-600 hover:underline">Facebook</a>
          <svg class="h-10 w-10 text-blue-700"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
        </li>
        <li class="mb-1">
          <a :href="redesSociales.twitter" class="text-blue-600 hover:underline">Twitter</a>
          <svg class="h-10 w-10 text-slate-900"  width="24" height="24" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
        </li>
        <li class="mb-1">
          <a :href="redesSociales.instagram" class="text-blue-600 hover:underline">Instagram</a>
          <svg class="h-10 w-10 text-purple-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
        </li>
      </ul>
    </div>

    <div class="mt-4 sm:mt-0 sm:ml-8">
      <h3 class="text-xl font-semibold mb-2">Contacto</h3>
      <div>
        <h4 class="font-semibold">Dirección:</h4>
        <p>{{ contacto.direccion.linea1 }}</p>
        <p>{{ contacto.direccion.linea2 }}</p>
        <p>{{ contacto.direccion.ciudad }}, {{ contacto.direccion.estado }} {{ contacto.direccion.codigoPostal }}</p>
      </div>
      <div class="mt-4">
        <h4 class="font-semibold">Números Telefónicos:</h4>
        <ul>
          <li v-for="numero in contacto.numerosTelefonicos" :key="numero">{{ numero }}</li>
        </ul>
      </div>
      <div class="mt-4">
        <h4 class="font-semibold">Correo Electrónico:</h4>
        <p>{{ contacto.correoElectronico }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Puedes agregar tus estilos personalizados aquí */
</style>
