<template>
  <div class="animation-wrapper">
    <Ballon />
    <Ballon />
    <Ballon />
    <Ballon />
    <Ballon />
    <Ballon />
    <Ballon />
    <Ballon />
    <Ballon />
    <Ballon />
    <Ballon />
    <Ballon />
    <Ballon />
    <Ballon />
    <Ballon />
    <Ballon />
    <Ballon />
    <Ballon />
  </div>
</template>

<script>
// duration is 10s
import Ballon from "./Ballon";

export default {
  name: "Ballons",
  components: {
    Ballon,
  },
};
</script>
<style scoped>
.animation-wrapper {
  animation-duration: 4s;
}
</style>
