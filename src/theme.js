const colors = {
  primary: [329, 78, 44],
  neutral: [236, 8, 50],
  danger: [343, 100, 41],
};

function getColor([h, s, l, a], lightness, alpha) {
  return `hsla(${h}, ${s}%, ${lightness || l}%, ${alpha || a || 1})`;
}

export const theme = {
  primary: getColor(colors.primary),
  primaryDark: getColor(colors.primary, 35),
  primaryDarkest: getColor(colors.primary, 30),
  primaryContrast: "white",
  neutralDark: getColor(colors.neutral, 27),
  neutralMedium: getColor(colors.neutral),
  neutralLight: getColor(colors.neutral, 80),
  danger: getColor(colors.danger),
  neutralLightest: getColor(colors.neutral, 95),
  contentPaddingHorizontal: "1rem",
  focusOutlineShadow: `0 0 0 0.15rem ${getColor(colors.primary, 20)}`,
  focusOutline: `0.15rem solid ${getColor(colors.primary, 20)}`,
  headerTopOffset: "3rem",
  bodyColor: getColor(colors.neutral, 35),
  headingColor: "inherit",
  headingWeight: "normal",
  inputPadding: "0.5rem",
  inputBorderRadius: "0.15rem",
  inputBorderColor: getColor(colors.neutral),
  dropdownZindex: 2,
  dropdownBackgroundColor: "white",
};
