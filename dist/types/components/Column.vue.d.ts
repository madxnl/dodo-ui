import type { AlignType, JustifyType } from '..';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /**
     * Add spacing between child elements
     * @example gap="2"
     */
    gap?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "24" | "32" | undefined;
    /**
     * Amount of padding around the content
     * @example padding="4"
     */
    padding?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "24" | "32" | undefined;
    /**
     * Grow to take up available space (when nested inside another Row)
     * @example grow
     */
    grow?: boolean | undefined;
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
     * Wrap contents over instead of shrinking
     * @example wrap
     */
    wrap?: boolean | undefined;
    /**
     * HTML tag to use for the container
     * @example tag="section"
     */
    tag?: string | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /**
     * Add spacing between child elements
     * @example gap="2"
     */
    gap?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "24" | "32" | undefined;
    /**
     * Amount of padding around the content
     * @example padding="4"
     */
    padding?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "24" | "32" | undefined;
    /**
     * Grow to take up available space (when nested inside another Row)
     * @example grow
     */
    grow?: boolean | undefined;
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
     * Wrap contents over instead of shrinking
     * @example wrap
     */
    wrap?: boolean | undefined;
    /**
     * HTML tag to use for the container
     * @example tag="section"
     */
    tag?: string | undefined;
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
