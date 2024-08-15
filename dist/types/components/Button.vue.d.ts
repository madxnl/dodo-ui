import type { ColorProp } from '..';
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /** Set button color
     * @example color="success"
     */
    color?: ColorProp;
    /** Set button variant
     * @example variant="border"
     * @example variant="text"
     */
    variant?: "text" | "solid";
    /** Set button type to 'submit' to trigger form submit
     * @example type="submit"
     */
    type?: "button" | "submit";
    /** Square button for icons
     * @example square
     */
    square?: boolean;
    /** Square button for icons
     * @example square
     */
    rounded?: boolean;
    /** Change button size
     * @example small
     */
    small?: boolean;
    /** Style button as active
     * @example active
     */
    active?: boolean;
    disabled?: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /** Set button color
     * @example color="success"
     */
    color?: ColorProp;
    /** Set button variant
     * @example variant="border"
     * @example variant="text"
     */
    variant?: "text" | "solid";
    /** Set button type to 'submit' to trigger form submit
     * @example type="submit"
     */
    type?: "button" | "submit";
    /** Square button for icons
     * @example square
     */
    square?: boolean;
    /** Square button for icons
     * @example square
     */
    rounded?: boolean;
    /** Change button size
     * @example small
     */
    small?: boolean;
    /** Style button as active
     * @example active
     */
    active?: boolean;
    disabled?: boolean;
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
