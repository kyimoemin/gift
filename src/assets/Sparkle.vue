<template>
  <svg
    style="position:absolute;transform:scale(.2);"
    width="100"
    height="100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!--Created with Method Draw - http://github.com/duopixel/Method-Draw/-->
    <defs>
      <filter id="shadow">
        <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>
      <filter id="shadow1">
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
        filter="url(#shadow1)"
        stroke="#fffa"
        id="square-star"
        d="M40,40 L60,40 L60,60 L40,60 z"
        fill-opacity="null"
        stroke-opacity="null"
        stroke-width=".1"
        fill="#fffa"
      />
      <path
        filter="url(#shadow1)"
        stroke="#fffa"
        id="square-star"
        d="M40,40 L60,40 L60,60 L40,60 z"
        fill-opacity="null"
        stroke-opacity="null"
        stroke-width=".1"
        style="transform-origin:50% 50%;transform:rotate(45deg)"
        fill="#fffa"
      />
      <path
        filter="url(#shadow)"
        stroke="white"
        id="square-star"
        d="M0 0 L50 47.5 L100 0 L52.5 50 L100 100 L50 52.5 L0 100 L47.5 50 z"
        fill-opacity="null"
        stroke-opacity="null"
        stroke-width=".1"
        fill="white"
      />
      <path
        filter="url(#shadow)"
        stroke="white"
        id="square-star"
        d="M30 30 L50 47.5 L70 30 L52.5 50 L70 70 L50 52.5 L30 70 L47.5 50 z"
        fill-opacity="null"
        stroke-opacity="null"
        stroke-width=".1"
        style="transform-origin:50% 50%;transform:rotate(45deg)"
        fill="white"
      />
    </g>
  </svg>
</template>
<script>
export default {
  name: "Sparkle",
};
</script>
