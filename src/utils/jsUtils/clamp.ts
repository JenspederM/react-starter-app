const clamp = (value: number, min: number, max?: number) => {
  //apply minimum:
  let val = Math.max(value, min);
  if (max) val = Math.min(val, max);
  return val;
};
export default clamp;
