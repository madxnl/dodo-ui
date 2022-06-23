import { Plugin } from 'vue';
declare type Theme = {
    colors: Record<string, string>;
    buttonClasses: Record<string, string>;
    textClasses: Record<string, string>;
    fonts: Record<string, string>;
    icons: Record<string, string>;
    spacings: Record<string, string>;
};
export declare function provideCustomTheme(customize?: (theme: Theme) => void): Plugin;
export declare function useTheme(): {
    readonly colors: {
        readonly [x: string]: string;
    };
    readonly buttonClasses: {
        readonly [x: string]: string;
    };
    readonly textClasses: {
        readonly [x: string]: string;
    };
    readonly fonts: {
        readonly [x: string]: string;
    };
    readonly icons: {
        readonly [x: string]: string;
    };
    readonly spacings: {
        readonly [x: string]: string;
    };
};
export declare function useCustomTheme(): Theme | undefined;
export declare function useThemeColor(name: string): string;
/**
 * Returns color as RGB array: [255, 255, 255], used when modifying colors
 */
export declare function useThemeColorRGB(name: string): number[];
export declare function hexToRGB(hex: string): number[];
export declare function useTextVariant(name: string): string;
export declare function useButtonVariant(name: string): string;
export declare function useIconSvgPath(name: string): string;
export declare function useSpacing(name: string): string;
export declare function useThemeCssVars(): void;
export {};
