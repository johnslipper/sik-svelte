import { theme } from "../../theme.js";

export const infoToast = {
  theme: {
    "--toastBackground": theme.neutralDark,
    "--toastColor": theme.neutralLighter,
    "--toastProgressBackground": theme.neutralMedium,
  },
};

export const errorToast = {
  initial: 0,
  theme: {
    "--toastBackground": theme.danger,
    "--toastColor": theme.primaryContrast,
    "--toastProgressBackground": theme.primaryContrast,
  },
};
