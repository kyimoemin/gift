<template>
  <div>
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <!--Created with Method Draw - http://github.com/duopixel/Method-Draw/-->
      <defs>
        <filter id="shadow">
          <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
      <g>
        <title>
          heart
        </title>
        <path
          :filter="shadow ? 'url(#shadow)' : ''"
          :stroke="color"
          id="heart"
          stroke-width="1.5"
          d="m10.000001,6.519341c3.036485,-7.92518 14.933532,0 0,10.189518c-14.933532,-10.189518 -3.036485,-18.114698 0,-10.189518z"
          fill="transparent"
        />
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  name: "Heart",
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
