<template>
  <div>
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <!--Created with Method Draw - http://github.com/duopixel/Method-Draw/-->
      <defs>
        <filter id="shadow">
          <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation=".1" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
      <g>
        <title>
          square star
        </title>
        <path
          :filter="shadow ? `url(${$route.path}#shadow)` : ''"
          :stroke="color"
          id="square-star"
          d="M2 2 L10 4 L18 2 L16 10 L18 18 L10 16 L2 18 L4 10 z"
          fill-opacity="null"
          stroke-opacity="null"
          stroke-width="1.5"
          :fill="fill"
        />
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  name: "SquareStar",
  props: {
    color: {
      type: String,
      default: "red",
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: String,
      default: "transparent",
    },
  },
};
</script>

<style scoped>
div {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
