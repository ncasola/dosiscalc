<template>
  <div class="box" v-if="currentKid">
    <h1 class="title">{{ currentKid.name }}</h1>
    <FormKid :kid="currentKid" @kidData="updateKid"></FormKid>
    <hr />
    <button class="button is-danger is-fullwidth" @click="deleteKid">
      Eliminar
    </button>
    <hr />
    <div class="notification is-primary is-light">
      {{ message }}
    </div>
  </div>
</template>

<script>
import KidDataService from "../services/KidDataService";
import FormKid from "@/components/FormKid";

export default {
  name: "edit-kid",
  components: { FormKid },
  data() {
    return {
      currentKid: null,
      message: "...",
      the_id: 0,
    };
  },
  methods: {
    getKid(id) {
      KidDataService.get(id)
        .then((response) => {
          this.currentKid = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateKid(formData) {
      KidDataService.update(this.the_id, formData)
        .then((response) => {
          console.log(response.data);
          this.message = "Actualizado correctamente";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteKid() {
      KidDataService.delete(this.the_id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "kids" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.the_id = this.$route.params.id;
    this.getKid(this.the_id);
  },
};
</script>
