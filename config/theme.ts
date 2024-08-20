import {
  createTheme,
} from "@mantine/core";

const generateColorSpectrum = (colorName: string) => {
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  return shades.map(
    (shadeNumber) => `rgb(var(--color-${colorName}-${shadeNumber}))`,
  ) as [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
    ];
};

export const theme = createTheme({
  fontFamily: '"Open Sauce One", sans-serif',
  primaryColor: "brand",
  primaryShade: { light: 5 },
  colors: {
    brand: generateColorSpectrum("brand"),
    neutrals: generateColorSpectrum("neutrals"),
    supportingGreen: generateColorSpectrum("supporting-green"),
    supportingYellow: generateColorSpectrum("supporting-yellow"),
    supportingRed: generateColorSpectrum("supporting-red"),
  },
});
