import type { ColorProp } from '..';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /** Set button color
     * @example color="success"
     */
    color?: ColorProp | undefined;
    /** Set button variant
     * @example variant="border"
     * @example variant="text"
     */
    variant?: "text" | "solid" | undefined;
    /** Set button type to 'submit' to trigger form submit
     * @example type="submit"
     */
    type?: "button" | "submit" | undefined;
    /** Square button for icons
     * @example square
     */
    square?: boolean | undefined;
    /** Square button for icons
     * @example square
     */
    rounded?: boolean | undefined;
    /** Change button size
     * @example small
     */
    small?: boolean | undefined;
    /** Style button as active
     * @example active
     */
    active?: boolean | undefined;
    disabled?: boolean | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /** Set button color
     * @example color="success"
     */
    color?: ColorProp | undefined;
    /** Set button variant
     * @example variant="border"
     * @example variant="text"
     */
    variant?: "text" | "solid" | undefined;
    /** Set button type to 'submit' to trigger form submit
     * @example type="submit"
     */
    type?: "button" | "submit" | undefined;
    /** Square button for icons
     * @example square
     */
    square?: boolean | undefined;
    /** Square button for icons
     * @example square
     */
    rounded?: boolean | undefined;
    /** Change button size
     * @example small
     */
    small?: boolean | undefined;
    /** Style button as active
     * @example active
     */
    active?: boolean | undefined;
    disabled?: boolean | undefined;
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
