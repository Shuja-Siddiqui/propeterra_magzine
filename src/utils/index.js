export function formatDate(inputDate) {
  const date = new Date(inputDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const [month, day, year] = formattedDate.split(" ");
  return `${month.toUpperCase()} ${day.replace(",", "")}, ${year}`;
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
