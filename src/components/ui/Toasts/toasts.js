import { theme } from "../../../theme.js";
import { toast } from "@zerodevx/svelte-toast";

const infoToastConfig = {
  theme: {
    "--toastBackground": theme.neutralDark,
    "--toastColor": theme.neutralLighter,
    "--toastProgressBackground": theme.neutralMedium,
  },
};

const errorToastConfig = {
  initial: 0,
  theme: {
    "--toastBackground": theme.danger,
    "--toastColor": theme.primaryContrast,
    "--toastProgressBackground": theme.primaryContrast,
  },
};

export function infoToast(message) {
  toast.push(message, infoToastConfig);
}

export function errorToast(message) {
  toast.push(message, errorToastConfig);
}
