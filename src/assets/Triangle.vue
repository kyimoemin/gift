<template>
  <div>
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
      <defs>
        <filter id="shadow">
          <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
      <g>
        <title>triangle</title>
        <path
          :filter="shadow ? 'url(#shadow)' : ''"
          :stroke="color"
          id="star"
          d="m3.037977,15.177017l6.962023,-12.18354l6.962023,12.18354l-13.924046,0z"
          fill-opacity="null"
          stroke-opacity="null"
          stroke-width="1.5"
          fill="transparent"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Triangle",
  props: {
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
