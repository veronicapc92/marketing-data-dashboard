// Formats the date to dd/mm/yyyy
export const formatDate = (date) => {
  const dateObject = new Date(date);
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();
  return `${day}/${month}/${year}`;
};

// Capitalizes the first letter of a string
export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

// Takes a number, formats it following the British notation and returns a string.
export const formatNumber = (number) => number.toLocaleString("en-GB");

// Takes a number and turns it into a percentage. Returns a string.
export const formatPercentage = (number) => (number * 100).toFixed(2) + "%";

// Calculates CTR but doesn't turn it into a percentage
export const ctr = (clicks, impressions) => clicks / impressions;

// Calculates CPC
export const cpc = (cost, clicks) => cost / clicks;

// Calculates CPA
export const cpa = (cost, conversions) => cost / conversions;

// Calculates CR but doesn't turn it into a percentage
export const cr = (conversions, clicks) => conversions / clicks;
