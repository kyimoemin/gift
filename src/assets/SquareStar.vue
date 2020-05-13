<template>
  <svg
    style="position:absolute;"
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!--Created with Method Draw - http://github.com/duopixel/Method-Draw/-->
    <defs>
      <filter id="shadow">
        <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>
    </defs>
    <g>
      <title>
        star
      </title>
      <path
        filter="url(#shadow)"
        :stroke="color"
        id="square-star"
        d="M10 10 L50 20 L90 10 L80 50 L90 90 L50 80 L10 90 L20 50 z"
        fill-opacity="null"
        stroke-opacity="null"
        stroke-width="12"
        fill="transparent"
      />
    </g>
  </svg>
</template>
<script>
export default {
  name: "SquareStar",
  props: {
    color: {
      type: String,
      default: "red",
    },
  },
};
</script>
