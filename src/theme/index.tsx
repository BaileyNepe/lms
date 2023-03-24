import { ReactNode, useMemo } from "react";

// material-ui
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import {
  createTheme,
  Theme,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

// project import
import useConfig from "../utils/hooks/useConfig";
import Palette from "./palette";
import Typography from "./typography";

import componentStyleOverrides from "./overrides";
import customShadows from "./shadows";

// types
import { TypographyOptions } from "@mui/material/styles/createTypography";

export default function ThemeCustomization({
  children,
}: {
  children: ReactNode;
}) {
  const { borderRadius, fontFamily, navType, outlinedFilled, presetColor } =
    useConfig();

  const theme = useMemo(
    () => Palette(navType, presetColor),
    [navType, presetColor]
  );

  const themeTypography: TypographyOptions = useMemo<TypographyOptions>(
    () => Typography(theme, borderRadius, fontFamily),
    [theme, borderRadius, fontFamily]
  );
  const themeCustomShadows = useMemo(
    () => customShadows(navType, theme),
    [navType, theme]
  );

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: theme.palette,
      mixins: {
        toolbar: {
          minHeight: "48px",
          padding: "16px",
          "@media (min-width: 600px)": {
            minHeight: "48px",
          },
        },
      },
      typography: themeTypography,
      customShadows: themeCustomShadows,
    }),
    [theme, themeCustomShadows, themeTypography]
  );

  const themes = createTheme(themeOptions);
  themes.components = useMemo(
    () => componentStyleOverrides(themes, borderRadius, outlinedFilled),
    [themes, borderRadius, outlinedFilled]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <StyledThemeProvider theme={themes}>
          <CssBaseline />
          {children}
        </StyledThemeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
