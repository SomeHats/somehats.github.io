import { createContext, ReactNode, useContext } from "react";
import * as Colors from "./colors";

export enum ThemeName {
    Dark = "Dark",
    Light = "Light",
}

export const Themes = {
    [ThemeName.Light]: {
        id: ThemeName.Light,
        bg: Colors.bgColor,
        text: Colors.textColor,
        primaryText: Colors.primaryDark,
        primaryHeading: Colors.primary,
        androidThemeColor: Colors.primaryLightest,
    },
    [ThemeName.Dark]: {
        id: ThemeName.Dark,
        bg: "black",
        text: Colors.darkTextColor,
        primaryText: Colors.primaryLight,
        primaryHeading: Colors.primaryLight,
        androidThemeColor: "black",
    },
} as const;

export type Theme = typeof Themes[ThemeName];

const ThemeContext = createContext(ThemeName.Light);
export function ThemeProvider({ theme, children }: { theme: ThemeName; children: ReactNode }) {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
export function useTheme(): Theme {
    return Themes[useContext(ThemeContext)];
}
