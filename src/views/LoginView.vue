<script setup>
    import { ref } from 'vue';
    import { RouterLink } from "vue-router";
    import { FormKit } from '@formkit/vue';
    import { useRouter } from 'vue-router';

    import userData from '../db/login.json';

    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const handleSubmit = (data) => {
    const { username: inputUsername, password: inputPassword } = data;

    if (inputUsername === userData.user.username && inputPassword === userData.user.password) {
      router.push({ name: 'home' });
    } else {
      alert('El usuario y/o contraseña no son correctos');
    }
  };

</script>



<template>
  <div class="flex justify-center">
    <img src="../../public/logo.jpg" alt="logo libreria">
  </div>

  <div class="mx-auto">
            <div class="mx-auto py-20 px-6 md:w-1/3">
                <FormKit
                    type="form"
                    incomplete-message="El usuario y/o contraseña no es/son correcto/s"
                    @submit="handleSubmit">

                    <h2>Login</h2>
                    <div class="bg-blue-100 h-1 w-full mb-3"></div>

                    <FormKit
                      type="text"
                      name="username"
                      label="Usuario"
                      placeholder="johndoe"
                      validation="required"
                      :validation-messages="{ required: 'El usuario es obligatorio' }"
                      validation-visibility="live"
                    />

                    <FormKit
                      type="password"
                      name="password"
                      label="Contraseña"
                      placeholder="********"
                      validation="required"
                      :validation-messages="{ required: 'La contraseña es obligatoria'}"
                      validation-visibility="live"
                    />

                    <FormKit
                      type="submit"
                      input-class="bg-blue-500 text-white py-3 px-4 rounded mt-4 hover:bg-blue-700 duration-200 ease-in-out cursor-pointer"
                      label="LOGIN"
                      />

                    <div class="bg-blue-100 h-1 w-full mb-3"></div>
                  
                </FormKit>
            </div>
  </div>
</template>



<style>
  .formkit-form {
    border: solid gray 1px;
    padding: 2rem;
  }

  .formkit-actions {
    display: none;
  }
  /* este hidden es para borrar el boton de submit que se crea por defecto con el tema de formkit */
</style>
