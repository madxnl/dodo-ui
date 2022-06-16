declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    /**
     * Add spacing between child elements
     * @example
      * gap="s"
     */
    gap?: string | undefined;
    /**
     * Amount of padding around the contents. Use array to set padding for each side separately.
     * @example pad="m"
     * @example pad="s 0 s s"
     */
    pad?: string | undefined;
    /**
     * Toggle column orientation instead of row
     * @example column
     */
    column?: boolean | undefined;
    /**
     * Grow to take up available space (when nested inside another UiFlex)
     * @example grow
     */
    grow?: boolean | undefined;
    /**
     * Justify contents
     * @example justify="space-between"
     */
    justify?: "center" | "end" | "start" | "stretch" | "space-between" | "space-around" | "space-evenly" | undefined;
    /**
     * Align contents
     * @example align="end"
     */
    align?: "center" | "end" | "start" | "stretch" | undefined;
    /**
     * Wrap contents over multiple rows instead of shrinking
     * @example wrap
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
     * @example pad="m"
     * @example pad="s 0 s s"
     */
    pad?: string | undefined;
    /**
     * Toggle column orientation instead of row
     * @example column
     */
    column?: boolean | undefined;
    /**
     * Grow to take up available space (when nested inside another UiFlex)
     * @example grow
     */
    grow?: boolean | undefined;
    /**
     * Justify contents
     * @example justify="space-between"
     */
    justify?: "center" | "end" | "start" | "stretch" | "space-between" | "space-around" | "space-evenly" | undefined;
    /**
     * Align contents
     * @example align="end"
     */
    align?: "center" | "end" | "start" | "stretch" | undefined;
    /**
     * Wrap contents over multiple rows instead of shrinking
     * @example wrap
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
