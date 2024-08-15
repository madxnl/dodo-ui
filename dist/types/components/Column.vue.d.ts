import type { AlignType, JustifyType, SpacingValue } from '..';
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /**
     * Add spacing between child elements
     * @example gap="xl"
     */
    gap?: SpacingValue;
    /**
     * Amount of padding around the content
     * @example padding="xl"
     */
    padding?: SpacingValue;
    /**
     * Grow to take up available space (when nested inside another Row)
     * @example grow
     */
    grow?: boolean;
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
     * Wrap contents over instead of shrinking
     * @example wrap
     */
    wrap?: boolean;
    /**
     * HTML tag to use for the container
     * @example tag="section"
     */
    tag?: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /**
     * Add spacing between child elements
     * @example gap="xl"
     */
    gap?: SpacingValue;
    /**
     * Amount of padding around the content
     * @example padding="xl"
     */
    padding?: SpacingValue;
    /**
     * Grow to take up available space (when nested inside another Row)
     * @example grow
     */
    grow?: boolean;
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
     * Wrap contents over instead of shrinking
     * @example wrap
     */
    wrap?: boolean;
    /**
     * HTML tag to use for the container
     * @example tag="section"
     */
    tag?: string;
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
