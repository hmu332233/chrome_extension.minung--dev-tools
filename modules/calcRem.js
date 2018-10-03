const calcRemToPx = ({ targetValue, remValue }) => {
  return targetValue * remValue;
}

const calcPxToRem = ({ targetValue, remValue }) => {
  return targetValue / remValue;
}

export { calcRemToPx, calcPxToRem };