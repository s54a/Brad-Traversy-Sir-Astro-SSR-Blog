export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(undefined, options);
}

export const capitalize = (string: string): string => {
  if (typeof string !== "string" || string.length === 0) {
    return string;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};
