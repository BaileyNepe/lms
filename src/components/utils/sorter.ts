export const isNumber = (value: string | number): boolean => {
  return !isNaN(Number(value.toString()));
};