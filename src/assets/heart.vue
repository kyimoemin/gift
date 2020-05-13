<template>
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
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
        heart
      </title>
      <path
        filter="url(#shadow)"
        :stroke="color"
        id="heart"
        d="m49.999999,34.374502c13.921026,-35.578002 68.464062,0 0,45.743145c-68.464062,-45.743145 -13.921026,-81.321146 0,-45.743145z"
        stroke-width="4"
        fill="transparent"
      />
    </g>
  </svg>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "red",
    },
  },
};
</script>
