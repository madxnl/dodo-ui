import type { AlignType, JustifyType, SpacingValue } from '../composables';
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /**
     * Add spacing between child elements
     * @example gap="s"
     */
    gap?: SpacingValue;
    /**
     * Amount of padding around the contents
     * @example padding="xl"
     */
    padding?: SpacingValue;
    /**
     * Align content along main direction (horizontal for Row, vertical for Column)
     * @example justify="space-between"
     */
    justify?: JustifyType;
    /**
     * Aligns children along cross-axis direction
     * @example align="end"
     */
    align?: AlignType;
    /**
     * Child elements will wrap instead of shrinking
     * @example wrap
     */
    wrap?: boolean;
    /**
     * Grow to take up available space
     * @example grow
     */
    grow?: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /**
     * Add spacing between child elements
     * @example gap="s"
     */
    gap?: SpacingValue;
    /**
     * Amount of padding around the contents
     * @example padding="xl"
     */
    padding?: SpacingValue;
    /**
     * Align content along main direction (horizontal for Row, vertical for Column)
     * @example justify="space-between"
     */
    justify?: JustifyType;
    /**
     * Aligns children along cross-axis direction
     * @example align="end"
     */
    align?: AlignType;
    /**
     * Child elements will wrap instead of shrinking
     * @example wrap
     */
    wrap?: boolean;
    /**
     * Grow to take up available space
     * @example grow
     */
    grow?: boolean;
}>>>, {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
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
