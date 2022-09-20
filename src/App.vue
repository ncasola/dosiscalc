<template>
  <nav
    class="navbar is-fixed-top is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/img/icons/android-chrome-384x384.png" />
      </a>
      <a class="navbar-item"> Dosis-Calc </a>
      <a @click="refreshIn" class="navbar-item">
        <span class="icon is-small">
          <i class="fas fa-refresh"></i>
        </span>
      </a>
    </div>
  </nav>
  <nav class="navbar is-link is-fixed-bottom pb-4" role="navigation">
    <div class="navbar-brand">
      <router-link to="/" custom v-slot="{ navigate, href }">
        <a
          :href="href"
          @click="navigate"
          class="navbar-item is-expanded is-block has-text-centered"
        >
          <i class="fa fa-user"></i>
          <p class="is-size-7">Inicio</p>
        </a>
      </router-link>
      <router-link to="/add" custom v-slot="{ navigate, href }">
        <a
          :href="href"
          @click="navigate"
          class="navbar-item is-expanded is-block has-text-centered"
        >
          <i class="fa fa-plus"></i>
          <p class="is-size-7">Añadir</p>
        </a>
      </router-link>
      <router-link to="/calcular" custom v-slot="{ navigate, href }">
        <a
          :href="href"
          @click="navigate"
          class="navbar-item is-expanded is-block has-text-centered"
        >
          <i class="fa fa-cog"></i>
          <p class="is-size-7">Calcular</p>
        </a>
      </router-link>
      <router-link to="/about" custom v-slot="{ navigate, href }">
        <a
          :href="href"
          @click="navigate"
          class="navbar-item is-expanded is-block has-text-centered"
        >
          <i class="fa fa-info"></i>
          <p class="is-size-7">Info</p>
        </a>
      </router-link>
    </div>
  </nav>
  <div class="section">
    <router-view />
    <div
      v-if="updateExists"
      class="notification is-warning is-light has-text-centered"
    >
      <button class="delete"></button>
      ¡Actualizacion disponible!
      <br />
      <button @click="refreshApp" class="button is-primary is-rounded mt-2">
        Actualizar
      </button>
    </div>
  </div>
</template>
<script>
import update from "./mixins/update";

export default {
  name: "App",
  mixins: [update],
  methods: {
    refreshIn() {
      window.location.reload();
    },
  },
};
</script>
