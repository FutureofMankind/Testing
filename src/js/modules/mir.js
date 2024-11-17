export default function mir(value) {
  let condition = false;
  const conditionLength = value.length >= 16 && value.length <= 19;
  if (!conditionLength) { return condition; }

  const valueArr = value.split('');
  const rangesIIN = Number(valueArr[0] + valueArr[1] + valueArr[2] + valueArr[3]);

  if (rangesIIN >= 2200 && rangesIIN <= 2204) {
    condition = true;
  }

  return condition;
}
