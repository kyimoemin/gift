# gift

Vue library for gift-animation

## Install

1. Install the package

```
npm i gift-animation
```

2. import css file in script tag of root vue file.

```
  import "gift-animation/dist/gift-animation.css";
```

## Example

```vue
<template>
  <div id="app" @click="show">
    <div class="gift-wrapper">
      <GiftAnimation />
    </div>
  </div>
</template>

<script>
import GiftAnimation from "gift-animation";
import "gift-animation/dist/gift-animation.css";
export default {
  name: "App",
  components: {
    GiftAnimation,
  },
  mounted() {
    this.$root.$on("animation-stopped", this.onAnimationFinish);
  },
  destroyed() {
    this.$root.$off("animation-stopped", this.onAnimationFinish);
  },
  methods: {
    show() {
      this.$root.$emit("show-animation", "candy");
    },
    onAnimationFinish() {
      console.log("animation is finished");
    },
  },
};
</script>
<style scope>
.gift-wrapper {
  height: 50%;
  position: absolute;
}
</style>
```

| Event Name          | Payload                                                                                         | Description                           |
| ------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------- |
| `show-animation`    | `balloon`, `bikini`, `candy`, `porsche`, `diamonds`, `flower`, `heart`, `lips`, `magic`, `star` | animation names that you want to show |
| `animation-stopped` | -                                                                                               | triggered after animation is finished |
