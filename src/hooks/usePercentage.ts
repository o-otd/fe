export const usePercentage = (
  leftValue: number,
  rightValue: number,
  minValue: number,
  maxValue: number,
) => {
  const getPercentage = (value: number, min: number, max: number) =>
    ((value - min) / (max - min)) * 100;

  const leftPercentage = getPercentage(leftValue, minValue, maxValue);
  const rightPercentage = getPercentage(rightValue, minValue, maxValue);

  return [leftPercentage, rightPercentage];
};
