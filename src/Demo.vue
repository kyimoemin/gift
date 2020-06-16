<template>
  <div id="app" @click="showAnimation">
    <div class="relative">
      <App id="#app" />
    </div>
  </div>
</template>

<script>
import App from "./App.vue";
export default {
  components: {
    App
  },
  methods: {
    showAnimation() {
      this.$root.$emit("show-animation", "star");
    }
  }
};
</script>
<style>
#app {
  height: 100vh;
}
.relative {
  position: relative;
  height: 100%;
}
</style>
