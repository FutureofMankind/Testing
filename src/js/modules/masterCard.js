export default function masterCard(value) {
  let condition = false;
  if (value.length !== 16) { return condition; }

  const valueArr = value.split('');
  const oneRangesIIN = Number(valueArr[0] + valueArr[1]);
  const twoRangesIIN = Number(valueArr[0] + valueArr[1] + valueArr[2] + valueArr[3]);

  if (oneRangesIIN >= 51 && oneRangesIIN <= 55) {
    condition = true;
  }

  if (twoRangesIIN >= 2221 && twoRangesIIN <= 2720) {
    condition = true;
  }

  return condition;
}
