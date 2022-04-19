const appendOrdinalSuffix = (value) => {
  const action = value % 10,
    b = value % 100;
  const suffix =
    action === 1 && b !== 11
      ? "st"
      : action === 2 && b !== 12
      ? "nd"
      : action === 3 && b !== 13
      ? "rd"
      : "th";

  return value + suffix;
};
const convertDateToYYYYMMDD = (date) => {
  const dateObject = new Date(date);
  const d = String(dateObject.getDate()).padStart(2, "0");
  const m = String(dateObject.getMonth() + 1).padStart(2, "0");
  const y = String(dateObject.getFullYear());

  return y + "-" + m + "-" + d;
};
const convertDateToMMMMDDYYYY = (date) => {
  const dateObject = new Date(date);
  let d = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(dateObject);
  let m = new Intl.DateTimeFormat("en", { month: "long" }).format(dateObject);
  let y = new Intl.DateTimeFormat("en", { year: "numeric" }).format(dateObject);

  return m + " " + appendOrdinalSuffix(d) + ", " + y;
};

export { convertDateToYYYYMMDD, convertDateToMMMMDDYYYY };
