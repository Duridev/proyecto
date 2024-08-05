<script setup>
    import { RouterLink } from "vue-router";
</script>



<template>
  <div class="bg-gray-200 rounded-md p-4 mt-8">
      <h1 class="text-5xl font-semibold text-gray-700 mb-6">Listado de Libros</h1>

    <div class="flex justify-center mb-4">
      <RouterLink to="/listado-libros" class="inline-block rounded bg-cyan-600 text-xl px-2 py-6 text-white font-bold w-72 text-center hover:bg-gray-500 duration-200 ease-in">
        VER LISTADO DE LIBROS
      </RouterLink>
    </div>
    </div>
</template>



<style lang="scss" scoped>

</style>