declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    /** Change text color
     * @example color="#FFAA00"
     * @example :color="success"
     */
    color?: string | undefined;
    /** Change text variant
     * @example fontsize="200%"
     * @example fontsize="12px"
     * @example :fontsize="headingSize"
     */
    variant?: string | undefined;
    /** Show ellipsis instead of wrapping if text does not fit on one line
     */
    nowrap?: boolean | undefined;
    /** Set text-align property
     */
    textAlign?: "center" | "left" | "right" | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    /** Change text color
     * @example color="#FFAA00"
     * @example :color="success"
     */
    color?: string | undefined;
    /** Change text variant
     * @example fontsize="200%"
     * @example fontsize="12px"
     * @example :fontsize="headingSize"
     */
    variant?: string | undefined;
    /** Show ellipsis instead of wrapping if text does not fit on one line
     */
    nowrap?: boolean | undefined;
    /** Set text-align property
     */
    textAlign?: "center" | "left" | "right" | undefined;
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
