export default function luna(value) {
  const reverseArray = value.split('').reverse();
  const arrForSum = [];

  if (reverseArray.length <= 0) { return false; }

  for (let i = 0; i < reverseArray.length; i += 1) {
    if (i % 2 === 0) {
      arrForSum.push(reverseArray[i] * 1);
    }
    if (i % 2 !== 0) {
      let elem = reverseArray[i] * 2;
      if (elem > 9) { elem -= 9; }
      arrForSum.push(elem);
    }
  }

  const sumElem = arrForSum.reduce((sum, elem) => sum + elem, 0);

  if (sumElem % 10 === 0) { return true; }
  return false;
}
