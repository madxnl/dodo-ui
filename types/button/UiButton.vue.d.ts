declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    /** Set button color
     * @example color="success"
     */
    color?: string | undefined;
    /** Set button variant
     * @example variant="border"
     * @example variant="text"
     */
    variant?: string | undefined;
    /** Change button size
     * @example size="small"
     */
    size?: "small" | "default" | "large" | undefined;
    /** Set button type to 'submit' to trigger form submit
     * @example type="submit"
     */
    type?: "button" | "submit" | undefined;
    /** Square button for icons
     * @example square
     */
    square?: boolean | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    /** Set button color
     * @example color="success"
     */
    color?: string | undefined;
    /** Set button variant
     * @example variant="border"
     * @example variant="text"
     */
    variant?: string | undefined;
    /** Change button size
     * @example size="small"
     */
    size?: "small" | "default" | "large" | undefined;
    /** Set button type to 'submit' to trigger form submit
     * @example type="submit"
     */
    type?: "button" | "submit" | undefined;
    /** Square button for icons
     * @example square
     */
    square?: boolean | undefined;
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
