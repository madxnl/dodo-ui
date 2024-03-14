declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /**
     * Desired maximum size in pixels for columns (eg 300)
     * @example grow
     */
    columnSize: number;
    /**
     * Add spacing between child elements
     * @example gap="2"
     */
    gap?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "24" | "32" | undefined;
    /**
     * Amount of padding around the contents.
     * @example padding="4"
     */
    padding?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "24" | "32" | undefined;
    /**
     * Prefer empty columns instead of stretching
     */
    autoFill?: boolean | undefined;
    /**
     * Aligns children along cross-axis direction (default 'start')
     * @example align="end"
     */
    alignItems?: "start" | "end" | "center" | "stretch" | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /**
     * Desired maximum size in pixels for columns (eg 300)
     * @example grow
     */
    columnSize: number;
    /**
     * Add spacing between child elements
     * @example gap="2"
     */
    gap?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "24" | "32" | undefined;
    /**
     * Amount of padding around the contents.
     * @example padding="4"
     */
    padding?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "24" | "32" | undefined;
    /**
     * Prefer empty columns instead of stretching
     */
    autoFill?: boolean | undefined;
    /**
     * Aligns children along cross-axis direction (default 'start')
     * @example align="end"
     */
    alignItems?: "start" | "end" | "center" | "stretch" | undefined;
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
