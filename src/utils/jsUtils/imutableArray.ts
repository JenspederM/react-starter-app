export const immutableSplice = (
  arr: any[],
  start: number,
  deleteCount: number,
  ...items: any
): any[] => {
  return [...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount)];
};

export const updateArrayVal = (
  array: { id: string; [key: string]: any }[],
  value: { id: string; [key: string]: any }
) => {
  const i = array.findIndex((item) => item.id === value.id);
  return i > -1 ? immutableSplice(array, i, 1, value) : [...array, value];
};

export const updateArrayValRawString = (array: string[], value: string) => {
  const i = array.findIndex((item) => item === value);
  return i > -1 ? immutableSplice(array, i, 1, value) : [...array, value];
};

export const updateArrayValUUID = (
  array: { uuid: string; [key: string]: any }[],
  value: { uuid: string; [key: string]: any }
) => {
  const i = array.findIndex((item) => item.uuid === value.uuid);
  return i > -1 ? immutableSplice(array, i, 1, value) : [...array, value];
};
// export const updateArrayValCustomKey = (
//   key: string,
//   array: { [key: string]: any }[],
//   value: { [key: string]: any }
// ) => {
//   const i = array.findIndex((item) => item[key] === value[key]);
//   return i > -1 ? immutableSplice(array, i, 1, value) : [...array, value];
// };

export const mergeArrays = (
  arrayOne: { id: string; [key: string]: any }[],
  arrayTwo: { id: string; [key: string]: any }[]
) => {
  return [
    ...arrayOne,
    ...arrayTwo.filter(
      (item) => !arrayOne.some((arrayOneItem) => arrayOneItem.id === item.id)
    ),
  ];
};

export const updateArrayItemPosition = (
  array: { id: string; [key: string]: any }[],
  item: { id: string; [key: string]: any },
  newPosition: number
) => {
  const listWithoutItem = array.filter((li) => li.id !== item.id);
  const listWithItem = immutableSplice(listWithoutItem, newPosition, 0, item);
  return listWithItem;
};
