import '../dodo.scss';
export type JustifyType = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type AlignType = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
declare const spacingValues: readonly [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 24, 32];
export type Color = [number, number, number];
export type ThemeColorName = 'info' | 'success' | 'warn' | 'danger' | 'background' | 'foreground' | 'primary' | 'secondary';
export type ColorProp = Color | ThemeColorName;
export type SpacingValue = `${(typeof spacingValues)[number]}`;
export type GapSize = SpacingValue;
export type Spacing = SpacingValue[] | SpacingValue;
export declare function useTheme(): {
    colorCss: (color: ColorProp) => string;
    colorPropRgb: (color: ColorProp) => string;
    gapValue: (size: SpacingValue) => string;
    colorHexStr: (color: ColorProp) => string;
    colorRgbValues: (color: ColorProp) => number[];
    gap: (size?: SpacingValue) => string;
    padding: (size?: SpacingValue) => string;
    justify: (type?: JustifyType) => string;
    align: (type?: AlignType) => string;
    wrap: (wrap?: boolean) => "" | "dodo-wrap";
    flex: (flex?: boolean) => "" | "dodo-flex";
    grow: (grow?: boolean) => "" | "dodo-grow";
};
export declare function useBaseFont(): {
    fontClass: string;
};
export {};
