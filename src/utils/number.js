const currencySymbol = '$';

export const abbr = (n, m=1) => {
  let x = ("" + n).length;
  let p = Math.pow;
  let d = p(10, m);
  x -= x % 3;
  return Math.round((n * d) / p(10, x)) / d + " kMGTPE"[x / 3];
};


export const formatValue = (value) => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatCurrency = (value) => {
  return currencySymbol + formatValue(parseFloat(value).toFixed(2));
}