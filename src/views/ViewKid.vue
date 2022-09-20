<template>
  <section class="hero" v-if="currentKid">
    <div class="hero-body">
      <p class="title">{{ currentKid.name }}</p>
      <p class="subtitle">Peso: {{ currentKid.peso }} kg</p>
    </div>
  </section>
  <div class="card" v-if="currentKid">
    <div class="card-content">
      <div class="content">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img
                  src="https://farmaciajimenez.com/storage/products/paracetamol-kern-pharma-100-mgml-efg-solucion-oral-60-ml/paracetamol-kern-pharma-60-ml.jpg"
                  alt="Image"
                />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Paracetamol</strong>
                  <br /><span class="tag is-primary is-medium"
                    >{{ roundMe(currentKid.peso * 0.15) }} ml</span
                  >
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img
                  src="https://www.kernpharma.com/sites/default/files/productos/imagenes/ibuprofeno-kern-pharma-efg-20-mgml-200-ml-5205.jpeg"
                  alt="Image"
                />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Ibuprofeno 20mg</strong>
                  <br /><span class="tag is-primary is-medium"
                    >{{ roundMe(currentKid.peso / 3) }} ml</span
                  >
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img
                  src="https://www.kernpharma.com/sites/default/files/productos/imagenes/ibuprofeno-kern-pharma-efg-40-mgml-150-ml-5209.jpeg"
                  alt="Image"
                />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Ibuprofeno 40mg</strong>
                  <br /><span class="tag is-primary is-medium"
                    >{{ roundMe(currentKid.peso / 6) }} ml</span
                  >
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" @click="returnHome" class="card-footer-item is-info"
        >Regresar</a
      >
    </footer>
  </div>
</template>

<script>
import KidDataService from "../services/KidDataService";

export default {
  name: "view-kid",
  data() {
    return {
      currentKid: null,
      message: "",
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

    returnHome() {
      this.$router.push({ path: "/" });
    },

    roundMe(val) {
      return +(Math.round(+(val.toFixed(2) + "e+" + 2)) + "e-" + 2);
    },
  },
  mounted() {
    this.message = "";
    this.getKid(this.$route.params.id);
  },
};
</script>
