<template>
  <div
    :style="
      `border:5px;
      display:inline-block;
    height:${area}px;
    width:${area}px;
    border-radius:50%;
    border:3px solid ${color};
    
  ` + shadow
        ? `box-shadow: 0px 0px 4px ${color}, inset 0px 0px 4px ${color};`
        : ''
    "
  />
</template>

<script>
export default {
  name: "CircleComponent",
  props: {
    area: {
      type: Number,
      default: 16,
    },
    color: {
      type: String,
      default: "red",
    },
    shadow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
