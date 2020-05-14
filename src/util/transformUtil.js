function getY(el) {
  const centerPoint = el.parentElement.clientHeight / 2;
  const y = el.offsetTop + el.clientHeight / 2;
  return centerPoint - y;
}

const getX = (el) => {
  const centerPoint = el.parentElement.clientWidth / 2;
  const x = el.offsetLeft + el.clientWidth / 2;
  return centerPoint - x;
};

export function moveAway(el, scale = 0.7, amount = 1, reverseX, reverseY) {
  if (!(el instanceof Element))
    throw new Error("el expect element but get", el);
  let y = getY(el);
  if (reverseY) y *= -1;
  let x = getX(el);
  if (reverseX) x *= -1;
  const slope = y / x;
  // el.style.opacity = 0;
  el.style.transform = `scale(${scale}) translate(${amount *
    x *
    slope}px, ${amount * y * slope}px) `; //rotate(90deg)
}
