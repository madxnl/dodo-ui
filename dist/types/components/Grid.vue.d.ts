import type { SpacingValue } from '../composables';
type ColumnSize = 'xs' | 's' | 'm' | 'l';
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /**
     * Desired maximum size in pixels for columns (eg 300)
     * @example grow
     */
    columnSize: ColumnSize;
    /**
     * Add spacing between child elements
     * @example gap="xl"
     */
    gap?: SpacingValue;
    /**
     * Amount of padding around the contents
     * @example padding="xl"
     */
    padding?: SpacingValue;
    /**
     * Prefer empty columns instead of stretching
     */
    autoFill?: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /**
     * Desired maximum size in pixels for columns (eg 300)
     * @example grow
     */
    columnSize: ColumnSize;
    /**
     * Add spacing between child elements
     * @example gap="xl"
     */
    gap?: SpacingValue;
    /**
     * Amount of padding around the contents
     * @example padding="xl"
     */
    padding?: SpacingValue;
    /**
     * Prefer empty columns instead of stretching
     */
    autoFill?: boolean;
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
