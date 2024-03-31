export const toQueryString = (params) => {
  if (!params) {
    return "";
  }

  return (
    "?" +
    Object.keys(params)
      .map((key) => key + "=" + params[key])
      .join("&")
  );
};
