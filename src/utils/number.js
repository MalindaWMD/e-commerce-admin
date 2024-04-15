const currencySymbol = '$';

export const abbr = (n) => {
  return Intl.NumberFormat('en-US', {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(n);
};


export const formatValue = (value) => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatCurrency = (value) => {
  return currencySymbol + formatValue(parseFloat(value).toFixed(2));
}