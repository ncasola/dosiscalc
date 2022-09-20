<template>
  <section class="hero">
    <div class="hero-body">
      <p class="title">Añadir niño</p>
      <p class="subtitle">Para el calculo de dosis</p>
    </div>
  </section>
  <div class="box">
    <div v-if="!submitted">
      <FormKid :kid="emptyKid" @kidData="saveKid"></FormKid>
    </div>
    <div v-else>
      <div class="notification is-primary is-light">
        ¡Guardado correctamente!
      </div>
      <div class="buttons are-medium">
        <button class="button is-primary" @click="regresar">Regresar</button>
        <button class="button is-success" @click="newKid">Añadir Nuevo</button>
      </div>
    </div>
  </div>
</template>

<script>
import KidDataService from "@/services/KidDataService";
import FormKid from "@/components/FormKid";
import router from "@/router";

export default {
  name: "add-kid",
  components: { FormKid },
  data() {
    return {
      emptyKid: {
        name: "",
        peso: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveKid(kidData) {
      KidDataService.create(kidData.id, kidData)
        .then((response) => {
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newKid() {
      this.submitted = false;
    },

    regresar() {
      router.push("/kids");
    },
  },
};
</script>
