<script setup>
import { RouterLink } from "vue-router";
import Header from "../components/Header.vue";
import librosData from '../db/libros.json';

const libros = librosData.libros;
</script>

<template>
  <Header />

  <div class="bg-gray-200 rounded-md p-4">
    <div class="flex justify-end mb-4">
      <RouterLink to="/home" class="inline-block rounded bg-gray-700 text-xl p-2 text-white font-bold w-40 text-center hover:bg-gray-500 duration-200 ease-in">
        Regresar al Home
      </RouterLink>
    </div>

    <div>
      <h1 class="text-5xl font-semibold text-gray-700 mb-6">Listado de Libros</h1>
      <div class="overflow-y-auto max-h-[80dvh] max-h-"> <!-- scroll -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div v-for="libro in libros" :key="libro.id" class="bg-white rounded-lg shadow-md p-4">
            <h2 class="text-xl font-bold mb-2">{{ libro.titulo }}</h2>
            <p class="text-gray-600 mb-2"><strong>Autor:</strong> {{ libro.autor }}</p>
            <p class="text-gray-800">{{ libro.descripcion }}</p>
          </div>

        </div>
      </div>
    </div>
  </div>


  <PieDePagina />
  
</template>

<style>
    
</style>
