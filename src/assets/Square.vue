<template>
  <div :style="style" />
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
    shadow: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    style() {
      let style = `border:1.5px;
      display:inline-block;
      height:${this.area}px;
      width:${this.area}px;
      border:3px solid ${this.color};
      `;
      if (this.shadow)
        style += `box-shadow: 0px 0px 4px ${this.color}, inset 0px 0px 4px ${this.color};`;

      return style;
    },
  },
};
</script>
