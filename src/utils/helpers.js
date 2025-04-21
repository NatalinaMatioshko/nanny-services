export const calculateAge = (birthdate) => {
  const birthdateObj = new Date(birthdate);
  const now = new Date();
  const ageInMilliseconds = now - birthdateObj;
  const ageInYears = Math.floor(
    ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
  );
  return ageInYears;
};

export const formatList = (items) => {
  return items
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(", ");
};

export const formatCurrency = (amount, currencySymbol = "$") => {
  return `${amount}${currencySymbol}`;
};

export const getInitials = (name) => {
  if (!name) return "";

  const parts = name.split(" ");
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();

  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

export const formatRating = (rating, decimalPlaces = 1) => {
  return rating.toFixed(decimalPlaces);
};

export const generateId = () => {
  return Math.random().toString(36).substring(2, 10);
};
