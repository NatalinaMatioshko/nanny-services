export const FILTER_OPTIONS = {
  ALL: "all",
  ALPHABETICAL_ASC: "a-to-z",
  ALPHABETICAL_DESC: "z-to-a",
  PRICE_LOW: "price-low",
  PRICE_HIGH: "price-high",
  RATING_HIGH: "top-rated",
  RATING_LOW: "new-caregivers",
};

export const FILTER_LABELS = {
  [FILTER_OPTIONS.ALL]: "Show All",
  [FILTER_OPTIONS.ALPHABETICAL_ASC]: "A to Z",
  [FILTER_OPTIONS.ALPHABETICAL_DESC]: "Z to A",
  [FILTER_OPTIONS.PRICE_LOW]: "Less than $10/hr",
  [FILTER_OPTIONS.PRICE_HIGH]: "Greater than $10/hr",
  [FILTER_OPTIONS.RATING_HIGH]: "Popular",
  [FILTER_OPTIONS.RATING_LOW]: "Not Popular",
};

export const ROUTES = {
  HOME: "/",
  CAREGIVERS: "/nannies",
  BOOKMARKS: "/favorites",
};

export const VALIDATION_MESSAGES = {
  REQUIRED: "This field is required",
  EMAIL_FORMAT: "Please enter a valid email address",
  PASSWORD_LENGTH: "Password must be at least 6 characters",
  PHONE_FORMAT: "Phone should be in format +380XXXXXXXXX",
};

export const STORAGE_KEYS = {
  BOOKMARKS: "childcare-connect-bookmarks",
  THEME: "childcare-connect-theme",
  USER_DATA: "childcare-connect-user-data",
};

export const TIME_SLOTS = {
  START: 9,
  END: 21,
  INTERVAL: 30,
};

export const ANIMATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
};

export const TOAST_CONFIG = {
  DEFAULT_DURATION: 3000,
  POSITION: "top-right",
};
