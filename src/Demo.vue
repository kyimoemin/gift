<template>
  <div id="app" @click="showAnimation">
    <App id="#app" />
  </div>
</template>

<script>
import App from "./App.vue";
export default {
  components: {
    App,
  },
  methods: {
    showAnimation() {
      this.$root.$emit("show-animation", "ramadan");
    },
  },
};
</script>
<style>
#app {
  height: 100vh;
}
</style>
