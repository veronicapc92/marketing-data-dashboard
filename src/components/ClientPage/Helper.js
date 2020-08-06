export const formatDate = (element) => {
  const dateObject = new Date(element.date);
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();
  return `${day}/${month}/${year}`;
};

export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const formatNumber = (number) => number.toLocaleString("en-GB");

export const formatPercentage = (number) => (number * 100).toFixed(2) + "%";
