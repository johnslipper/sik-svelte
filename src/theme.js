const colorBases = {
  primary: [329, 78, 44],
  neutral: [236, 8, 50],
  danger: [343, 100, 41],
};

const colors = {
  primary: getColor(colorBases.primary),
  primaryDark: getColor(colorBases.primary, 35),
  primaryDarkest: getColor(colorBases.primary, 30),
  primaryContrast: "white",
  neutralDark: getColor(colorBases.neutral, 27),
  neutralMedium: getColor(colorBases.neutral),
  neutralLight: getColor(colorBases.neutral, 80),
  neutralLighter: getColor(colorBases.neutral, 87),
  neutralLightest: getColor(colorBases.neutral, 95),
  danger: getColor(colorBases.danger),
};

function getColor([h, s, l, a], lightness, alpha) {
  return `hsla(${h}, ${s}%, ${lightness || l}%, ${alpha || a || 1})`;
}

export const theme = {
  /* Colours */
  primary: colors.primary,
  primaryDark: colors.primaryDark,
  primaryDarkest: colors.primaryDarkest,
  primaryContrast: colors.primaryContrast,
  neutralDark: colors.neutralDark,
  neutralMedium: colors.neutralMedium,
  neutralLight: colors.neutralLight,
  neutralLighter: colors.neutralLighter,
  neutralLightest: colors.neutralLightest,
  danger: colors.danger,
  /* General */
  contentPaddingHorizontal: "1rem",
  headerTopOffset: "3rem",
  /* Focus outline */
  focusOutlineShadow: `0 0 0 0.15rem ${getColor(colorBases.primary, 20)}`,
  focusOutline: `0.15rem solid ${getColor(colorBases.primary, 20)}`,
  /* Body text */
  bodyColor: colors.neutralDark,
  bodyColorMuted: colors.neutralMedium,
  /* Headings */
  headingColor: "inherit",
  headingWeight: "normal",
  /* Input */
  inputPadding: "0.5rem",
  inputBorderRadius: "0.15rem",
  inputBorderColor: colors.neutralMedium,
  /* Dropdown */
  dropdownZndex: 2,
  dropdownBackgroundColor: "white",
  /* Button (Default) */
  buttonPadding: "0.6rem 1rem",
  buttonBorderRadius: "0.25rem",
  buttonFontSize: "0.85rem",
  buttonBorderColor: colors.neutralMedium,
  buttonBackgroundColor: colors.primaryContrast,
  buttonColor: "inherit",
  buttonActiveBorderColor: colors.primary,
  buttonActiveBackgroundColor: colors.primaryContrast,
  buttonActiveColor: colors.primary,
  /* Button (Primary) */
  buttonPrimaryBorderColor: "transparent",
  buttonPrimaryBackgroundColor: colors.primary,
  buttonPrimaryColor: colors.primaryContrast,
  buttonPrimaryActiveBorderColor: "transparent",
  buttonPrimaryActiveBackgroundColor: colors.primaryDark,
  buttonPrimaryActiveColor: colors.primaryContrast,
};
