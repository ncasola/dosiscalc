<template>
  <section class="hero">
    <div class="hero-body">
      <p class="title">Calculador de Dosis</p>
    </div>
  </section>
  <nav class="panel">
    <p class="panel-heading">Listado de niños</p>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input
          class="input"
          type="text"
          v-model="searchText"
          placeholder="Buscar"
          @change="searchName"
        />
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
    <div
      class="columns is-mobile is-vcentered"
      v-for="(kid, index) in filteredList"
      :key="index"
    >
      <div class="column is-three-fifths">
        <a class="panel-block is-active">
          <span class="panel-icon">
            <i class="fas fa-user" aria-hidden="true"></i>
          </span>
          {{ kid.name }}
        </a>
      </div>
      <div class="column is-align-content-flex-end">
        <button
          class="button is-info is-outlined is-small"
          @click="viewCurrent(kid.id)"
        >
          <span class="icon is-small">
            <i class="fas fa-eye"></i>
          </span>
        </button>
        <button
          class="button is-info is-outlined is-small"
          @click="editCurrent(kid.id)"
        >
          <span class="icon is-small">
            <i class="fas fa-edit"></i>
          </span>
        </button>
      </div>
    </div>
    <div class="panel-block">
      <button class="button is-danger is-fullwidth" @click="removeAllKids">
        Eliminar niños
      </button>
    </div>
  </nav>
</template>

<script>
import _ from "lodash";
import KidDataService from "../services/KidDataService";

export default {
  name: "kids-list",
  data() {
    return {
      kids: [],
      searchText: "",
    };
  },
  computed: {
    filteredList() {
      return this.kids.filter((kid) => {
        return kid.name.toLowerCase().includes(this.searchText.toLowerCase());
      });
    },
  },
  methods: {
    retrieveKids() {
      KidDataService.getAll()
        .then((response) => {
          this.kids = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    removeAllKids() {
      KidDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.retrieveKids();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchName() {
      this.kids = _.filter(this.kids, function (item) {
        return item.name.indexOf(this.name) > -1;
      });
    },

    viewCurrent(id) {
      this.$router.push({ path: `/view/${id}` });
    },

    editCurrent(id) {
      this.$router.push({ path: `/edit/${id}` });
    },
  },
  mounted() {
    this.retrieveKids();
  },
};
</script>
