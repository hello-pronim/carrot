const convertDateToYYYYMMDD = (date) => {
  const dateObject = new Date(date);
  const dd = String(dateObject.getDate()).padStart(2, "0");
  const mm = String(dateObject.getMonth() + 1).padStart(2, "0");
  const yy = String(dateObject.getFullYear());

  return yy + "-" + mm + "-" + dd;
};

export { convertDateToYYYYMMDD };
