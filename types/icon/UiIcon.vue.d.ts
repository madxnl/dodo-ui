declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    /** The icon name
     * @example icon="plus"
     */
    name: string;
    /** Change icon color
     * @example color="success"
     */
    color?: string | undefined;
    /** Change icon size
     * @example size="small"
     */
    size?: "small" | "default" | "large" | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    /** The icon name
     * @example icon="plus"
     */
    name: string;
    /** Change icon color
     * @example color="success"
     */
    color?: string | undefined;
    /** Change icon size
     * @example size="small"
     */
    size?: "small" | "default" | "large" | undefined;
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
