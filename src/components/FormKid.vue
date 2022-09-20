<template>
  <FormKit type="form" :actions="false" @submit="sendKid" v-model="theKid">
    <FormKit name="name" label="Nombre" validation="required" />
    <FormKit type="number" name="peso" label="Peso" validation="required" />
    <FormKit
      label="Guardar"
      type="submit"
      :classes="{
        input: {
          'button is-primary': true,
        },
      }"
    />
  </FormKit>
</template>

<script>
export default {
  name: "FormKid",
  props: {
    kid: Object,
  },
  data() {
    return {
      theKid: this.kid,
    };
  },
  methods: {
    sendKid(formData) {
      let new_id = "_" + Math.random().toString(36).substr(2, 9);
      formData.id = this.theKid.id ? this.theKid.id : new_id;
      this.$emit("KidData", formData);
    },
  },
};
</script>
