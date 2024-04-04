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

export const isCurrentUrl = (path) => {
  const pathname = window.location.pathname;
  if(pathname === path){
    return true;
  }

  let regex = new RegExp(path + '/', 'g');
  let found = pathname.match(regex);
  return found != null;
};