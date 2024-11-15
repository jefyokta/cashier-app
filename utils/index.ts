export const generateUniqueBarcode = (): string => {
  const uniqueValue = `${Date.now()}-${Math.floor(
    Math.random() * 1000000,
  ).toString()}`;
  return uniqueValue;
};
