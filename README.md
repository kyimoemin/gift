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
    <GiftAnimation />
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
```

| Event Name          | Payload                                                                                      | Description                           |
| ------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------- |
| `show-animation`    | `ballon`, `beach`, `candy`, `car`, `diamond`, `flower`, `heart`, `kiss`, `magicwand`, `star` | animation names that you want to show |
| `animation-stopped` | -                                                                                            | triggered after animation is finished |
