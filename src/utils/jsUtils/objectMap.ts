export const objectMap = (obj: { [key: string]: any }, fn: (v: any) => any) =>
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v)]));
