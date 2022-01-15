import { theme } from "../../app/theme";
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

export function infoToast(message: string) {
  toast.push(message, infoToastConfig);
}

export function errorToast(message: string) {
  toast.push(message, errorToastConfig);
}
