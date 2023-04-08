import { alpha } from "@mui/material";

export const colors = {
  white: "#ffffff",
  lightWhite: "#eceff1",
  darkWhite: "#b0bec5",

  blueEgg: "#607d8b",
  darkBlueEgg: "#546e7a",
  lightBlueEgg: "#b0bec5",
  darkerBlueEgg: "#455a64",

  lightestForestGreen: "#e0f2f1",
  forestGreen: "#009688",
  darkForestGreen: "#00897b",
  lightForestGreen: "#80cbc4",
  darkerForestGreen: "#00695c",

  darkestPurple: "#15162c",
  darkerPurple: "#2e026d",
  darkPurple: "#4a148c",
  purple: "#6a1b9a",

  variantSuccess: "#edf7ed",
  variantSuccessLight: "#b6e0b3",
  variantSuccessMain: "#64ba5f",
  variantSuccessDark: "#6cc067",

  variantError: "#e48784",
  variantErrorLight: "#e48784",
  variantErrorMain: "#d9534f",
  variantErrorDark: "#d54c48",

  variantOrange: "#fbe9e7",
  variantOrangeLight: "#ffab91",
  variantOrangeMain: "#d84315",

  variantWarningLight: "#fdf5ea",
  variantWarningMain: "#f0ad4e",
  variantWarningDark: "#ec9c3d",

  variantGrey50: "#fafafa",
  variantGrey100: "#f5f5f5",
  variantGrey200: "#eeeeee",
  variantGrey300: "#e0e0e0",
  variantGrey500: "#9e9e9e",
  variantGrey600: "#757575",
  variantGrey700: "#616161",
  variantGrey900: "#212121",

  darkBackground: "#0e1b23",
  darkPaper: "#060d12",

  darkLevel1: "#0b161d",
  darkLevel2: "#14252f",

  darkTextTitle: "#e4e8f7",
  darkTextPrimary: "#d5d9e9",
  darkTextSecondary: "#d8ddf0",

  black: "#000000",

  transparent: "transparent",

  neutral50: "#F8F9FA",
  neutral100: "#F3F4F6",
  neutral200: "#E5E7EB",
  neutral300: "#D2D6DB",
  neutral400: "#9DA4AE",
  neutral500: "#6C737F",
  neutral600: "#4D5761",
  neutral700: "#2F3746",
  neutral800: "#1C2536",
  neutral900: "#111927",
};

const withAlphas = (color: {
  lightest: string;
  light: string;
  main: string;
  dark: string;
  darkest: string;
  contrastText: string;
}) => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.3),
    alpha50: alpha(color.main, 0.5),
  };
};

export const blue = withAlphas({
  lightest: "#F5F8FF",
  light: "#EBEFFF",
  main: "#2970FF",
  dark: "#004EEB",
  darkest: "#00359E",
  contrastText: "#FFFFFF",
});

export const green = withAlphas({
  lightest: "#F6FEF9",
  light: "#EDFCF2",
  main: "#16B364",
  dark: "#087443",
  darkest: "#084C2E",
  contrastText: "#FFFFFF",
});

export const indigo = withAlphas({
  lightest: "#F5F7FF",
  light: "#EBEEFE",
  main: "#6366F1",
  dark: "#4338CA",
  darkest: "#312E81",
  contrastText: "#FFFFFF",
});

export const purple = withAlphas({
  lightest: "#F9F5FF",
  light: "#F4EBFF",
  main: "#9E77ED",
  dark: "#6941C6",
  darkest: "#42307D",
  contrastText: "#FFFFFF",
});

export const success = withAlphas({
  lightest: "#F0FDF9",
  light: "#3FC79A",
  main: "#10B981",
  dark: "#0B815A",
  darkest: "#134E48",
  contrastText: "#FFFFFF",
});

export const info = withAlphas({
  lightest: "#ECFDFF",
  light: "#CFF9FE",
  main: "#06AED4",
  dark: "#0E7090",
  darkest: "#164C63",
  contrastText: "#FFFFFF",
});

export const warning = withAlphas({
  lightest: "#FFFAEB",
  light: "#FEF0C7",
  main: "#F79009",
  dark: "#B54708",
  darkest: "#7A2E0E",
  contrastText: "#FFFFFF",
});

export const error = withAlphas({
  lightest: "#FEF3F2",
  light: "#FEE4E2",
  main: "#F04438",
  dark: "#B42318",
  darkest: "#7A271A",
  contrastText: "#FFFFFF",
});
