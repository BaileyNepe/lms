import { createContext, ReactNode } from "react";

// project import
import useLocalStorage from "../hooks/useLocalStorage";

// types
import { PaletteMode } from "@mui/material";

const defaultConfig = {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  borderRadius: 8,
  outlinedFilled: true,
  navType: "dark" as PaletteMode, // light, dark
  presetColor: "theme2", // default, theme1, theme2, theme3, theme4, theme5, theme6
  container: false,
};

// initial state
const initialState = {
  ...defaultConfig,
  onChangeMenuType: () => {},
  onChangePresetColor: () => {},
  onChangeContainer: () => {},
  onChangeFontFamily: () => {},
  onChangeBorderRadius: () => {},
  onChangeOutlinedField: () => {},
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

const ConfigContext = createContext(initialState);

type ConfigProviderProps = {
  children: ReactNode;
};

function ConfigProvider({ children }: ConfigProviderProps) {
  const [config, setConfig] = useLocalStorage("theme-config", {
    fontFamily: initialState.fontFamily,
    borderRadius: initialState.borderRadius,
    outlinedFilled: initialState.outlinedFilled,
    navType: initialState.navType,
    presetColor: initialState.presetColor,
  });

  const onChangeMenuType = (navType: PaletteMode) => {
    setConfig({
      ...config,
      navType,
    });
  };

  const onChangePresetColor = (presetColor: string) => {
    setConfig({
      ...config,
      presetColor,
    });
  };

  const onChangeContainer = () => {
    setConfig({
      ...config,
      container: !config.container,
    });
  };

  const onChangeFontFamily = (fontFamily: string) => {
    setConfig({
      ...config,
      fontFamily,
    });
  };

  const onChangeBorderRadius = (event: Event, newValue: number | number[]) => {
    setConfig({
      ...config,
      borderRadius: newValue as number,
    });
  };

  const onChangeOutlinedField = (outlinedFilled: boolean) => {
    setConfig({
      ...config,
      outlinedFilled,
    });
  };

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onChangeMenuType,
        onChangePresetColor,
        onChangeContainer,
        onChangeFontFamily,
        onChangeBorderRadius,
        onChangeOutlinedField,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigProvider, ConfigContext };
