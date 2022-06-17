import { Plugin } from "vue";
declare type Theme = {
    colors: Record<string, string>;
    buttonClasses: Record<string, string>;
    textClasses: Record<string, string>;
    icons: Record<string, string>;
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
    readonly icons: {
        readonly [x: string]: string;
    };
};
export declare function useCustomTheme(): Theme | undefined;
export declare function useThemeColor(name: string): string;
export declare function useTextVariant(name: string): string;
export declare function useButtonVariant(name: string): string;
export declare function useIconSvgPath(name: string): string;
export {};
