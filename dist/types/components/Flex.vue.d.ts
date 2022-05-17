declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    /**
     * Add spacing between child elements
     * @example
      * gap="s"
     */
    gap?: string | undefined;
    /**
     * Amount of padding around the contents. Use array to set padding for each side separately.
     * @example pad="m" // medium padding
     * @example pad="s 0 s s" // small padding on all sides except right
     */
    pad?: string | undefined;
    /**
     * Toggle column orientation instead of row
     * @example <Flex column>
     */
    column?: boolean | undefined;
    /**
     * Grow to take up available space (when nested inside another Flex)
     */
    grow?: boolean | undefined;
    /**
     * Justify contents
     */
    justify?: "center" | "end" | "start" | "stretch" | "space-between" | "space-around" | "space-evenly" | undefined;
    /**
     * Align contents
     */
    align?: "center" | "end" | "start" | "stretch" | undefined;
    /**
     * Wrap contents over multiple rows instead of shrinking
     */
    wrap?: boolean | undefined;
    /**
     * Set a background color
     * @example background="#cccccc"
     */
    background?: string | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    /**
     * Add spacing between child elements
     * @example
      * gap="s"
     */
    gap?: string | undefined;
    /**
     * Amount of padding around the contents. Use array to set padding for each side separately.
     * @example pad="m" // medium padding
     * @example pad="s 0 s s" // small padding on all sides except right
     */
    pad?: string | undefined;
    /**
     * Toggle column orientation instead of row
     * @example <Flex column>
     */
    column?: boolean | undefined;
    /**
     * Grow to take up available space (when nested inside another Flex)
     */
    grow?: boolean | undefined;
    /**
     * Justify contents
     */
    justify?: "center" | "end" | "start" | "stretch" | "space-between" | "space-around" | "space-evenly" | undefined;
    /**
     * Align contents
     */
    align?: "center" | "end" | "start" | "stretch" | undefined;
    /**
     * Wrap contents over multiple rows instead of shrinking
     */
    wrap?: boolean | undefined;
    /**
     * Set a background color
     * @example background="#cccccc"
     */
    background?: string | undefined;
}>>>, {}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
