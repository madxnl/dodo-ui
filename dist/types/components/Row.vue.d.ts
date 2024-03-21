import type { AlignType, JustifyType } from '../composables';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /**
     * Add spacing between child elements
     * @example gap="s"
     */
    gap?: "0" | "s" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | undefined;
    /**
     * Amount of padding around the contents
     * @example padding="xl"
     */
    padding?: "0" | "s" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | undefined;
    /**
     * Align content along main direction (horizontal for Row, vertical for Column)
     * @example justify="space-between"
     */
    justify?: JustifyType | undefined;
    /**
     * Aligns children along cross-axis direction
     * @example align="end"
     */
    align?: AlignType | undefined;
    /**
     * Child elements will wrap instead of shrinking
     * @example wrap
     */
    wrap?: boolean | undefined;
    /**
     * Grow to take up available space
     * @example grow
     */
    grow?: boolean | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /**
     * Add spacing between child elements
     * @example gap="s"
     */
    gap?: "0" | "s" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | undefined;
    /**
     * Amount of padding around the contents
     * @example padding="xl"
     */
    padding?: "0" | "s" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | undefined;
    /**
     * Align content along main direction (horizontal for Row, vertical for Column)
     * @example justify="space-between"
     */
    justify?: JustifyType | undefined;
    /**
     * Aligns children along cross-axis direction
     * @example align="end"
     */
    align?: AlignType | undefined;
    /**
     * Child elements will wrap instead of shrinking
     * @example wrap
     */
    wrap?: boolean | undefined;
    /**
     * Grow to take up available space
     * @example grow
     */
    grow?: boolean | undefined;
}>>>, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
