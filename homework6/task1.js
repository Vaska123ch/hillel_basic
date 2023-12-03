const array = [2, 78, -5, 13, 0];
const array2 = [];

function findMinValue(minArray) {
  if (minArray.length === 0) {
    return null;
  }
  let minValue = minArray[0];
  for (let i = 1; i < minArray.length; i++) {
    if (minArray[i] < minValue) {
      minValue = minArray[i];
    }
  }
  return minValue;
}
console.log(findMinValue(array));
console.log(findMinValue(array2));

function findMaxValue(maxArray) {
  if (maxArray.length === 0) {
    return null;
  }
  let maxValue = maxArray[0];
  for (let i = 1; i < maxArray.length; i++) {
    if (maxArray[i] > maxValue) {
      maxValue = maxArray[i];
    }
  }
  return maxValue;
}
console.log(findMaxValue(array));
console.log(findMaxValue(array2));

function findMinAndMaxValue(minMaxArray) {
  if (minMaxArray.length === 0) {
    return null;
  }
  let maxValue = minMaxArray[0];
  let minValue = minMaxArray[0];
  for (let i = 1; i < minMaxArray.length; i++) {
    if (minMaxArray[i] > maxValue) {
      maxValue = minMaxArray[i];
    }
    if (minMaxArray[i] < minValue) {
      minValue = minMaxArray[i];
    }
  }
  return [minValue, maxValue];
}
console.log(findMinAndMaxValue(array));
console.log(findMinAndMaxValue(array2));
