const colours = {
  primary: [329, 78, 44],
  neutral: [236, 8, 50],
};

function getColour([h, s, l, a], lightness, alpha) {
  return `hsla(${h}, ${s}%, ${lightness || l}%, ${alpha || a || 1})`;
}

export const theme = {
  primary: getColour(colours.primary),
  primaryDark: getColour(colours.primary, 35),
  primaryDarkest: getColour(colours.primary, 30),
  primaryContrast: "white",
  neutralDark: getColour(colours.neutral, 27),
  neutralMedium: getColour(colours.neutral),
  neutralLight: getColour(colours.neutral, 80),
  neutralLightest: getColour(colours.neutral, 95),
  contentPaddingHorizontal: "1rem",
  focusOutlineShadow: `0 0 0 0.15rem ${getColour(colours.primary, 20)}`,
  focusOutline: `0.15rem solid ${getColour(colours.primary, 20)}`,
  headerTopOffset: "3rem",
  bodyColor: getColour(colours.neutral, 27),
  headingColor: getColour(colours.neutral, 27),
  headingWeight: "normal",
  inputPadding: "0.5rem",
  inputBorderRadius: "0.15rem",
  inputBorderColour: getColour(colours.neutral),
};
