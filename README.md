# gift

Vue library for gift-animation

## Install

1. Install the package

```
npm i gift-animation
```

2. import css file to root js file.

```
  import "gift-animation/dist/gift-animation.css";
```

## Example

```vue
<template>
  <div id="app" @click="show">
    <GiftAnimation name="star" />
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
  methods: {
    show() {
      this.$root.$emit("show-animation");
    },
  },
};
</script>
```

## Event

| Name             | Description         |
| ---------------- | ------------------- |
| `show-animation` | start the animation |

## Props

| Name   | Description                                                                                                   |
| ------ | ------------------------------------------------------------------------------------------------------------- |
| `name` | animation names: `ballon`, `beach`, `candy`, `car`, `diamond`, `flower`, `heart`, `kiss`, `magicwand`, `star` |
