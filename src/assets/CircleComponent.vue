<template>
  <div :style="style" />
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
  computed: {
    style() {
      let style = `border:5px;
      display:inline-block;
      height:${this.area}px;
      width:${this.area}px;
      border-radius:50%;
      border:3px solid ${this.color};
    `;
      if (this.shadow)
        style += `box-shadow: 0px 0px 4px ${color}, inset 0px 0px 4px ${color};`;
      return style;
    },
  },
};
</script>
