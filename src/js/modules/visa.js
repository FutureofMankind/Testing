export default function visa(value) {
  const valueArr = value.split('');
  let condition = false;

  if (valueArr.length >= 13 && valueArr.length <= 19 && +valueArr[0] === 4) {
    condition = true;
  }

  return condition;
}
