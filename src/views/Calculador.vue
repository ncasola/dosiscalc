<template>
  <section class="hero">
    <div class="hero-body">
      <p class="title">Calculador</p>
      <p class="subtitle">Para el calculo de dosis</p>
    </div>
  </section>
  <div class="box">
    <FormKit
      type="number"
      label="Peso"
      help="Peso del niño en Kg"
      v-model="peso"
    />
    <hr />
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
                >{{ roundMe(peso * 0.15) }} ml</span
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
                >{{ roundMe(peso / 3) }} ml</span
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
                >{{ roundMe(peso / 6) }} ml</span
              >
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "calculador",
  data() {
    return {
      peso: 0,
    };
  },
  methods: {
    roundMe(val) {
      return +(Math.round(+(val.toFixed(2) + "e+" + 2)) + "e-" + 2);
    },
  },
};
</script>
