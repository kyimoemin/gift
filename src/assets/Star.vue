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
          star
        </title>
        <path
          :filter="shadow ? `url(${$route.path}#shadow)` : ''"
          :stroke="color"
          id="star"
          d="m3.510995,8.544758l4.957194,0l1.531811,-4.709314l1.531812,4.709314l4.957193,0l-4.010447,2.910483l1.53189,4.709314l-4.010449,-2.910562l-4.010448,2.910562l1.531891,-4.709314l-4.010448,-2.910483z"
          stroke-width="1.5"
          :fill="fill"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Star",
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
