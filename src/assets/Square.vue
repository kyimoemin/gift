<template>
  <div
    :style="
      `border:12px;
      display:inline-block;
    height:${area}px;
    width:${area}px;
    border:3px solid ${color};
    box-shadow: 0px 0px 4px ${color}, inset 0px 0px 4px ${color};
  `
    "
  />
</template>

<script>
export default {
  name: "Square",
  props: {
    area: {
      type: Number,
      default: 16,
    },
    color: {
      type: String,
      default: "red",
    },
  },
};
</script>
