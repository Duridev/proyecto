<script setup>
    import { RouterLink } from "vue-router";
    import Header from "../components/Header.vue";
    import ProximosEventos from "../components/ProximosEventos.vue";
    import PromocionesActivas from "../components/PromocionesActivas.vue"
    import Tematicas from "../components/Tematicas.vue"
    import ListadoDeLibrosHome from "../components/ListadoDeLibrosHome.vue"
    import PieDePagina from "../components/PieDePagina.vue"

</script>



<template>

  <Header />



  <ProximosEventos />

  <PromocionesActivas />

  <Tematicas />

  <ListadoDeLibrosHome />

  <PieDePagina />

</template>



<style lang="stylus" scoped>

</style>
