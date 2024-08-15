import type { ColorProp, IconName } from '..';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /** The icon name
     * @example icon="plus"
     */
    name: IconName;
    /** Change icon color
     * @example color="success"
     */
    color?: ColorProp;
    /** Filled variant
     */
    fill?: boolean;
    small?: -1;
    large?: -1;
    size?: "xs" | "s" | "m" | "l" | "xl";
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /** The icon name
     * @example icon="plus"
     */
    name: IconName;
    /** Change icon color
     * @example color="success"
     */
    color?: ColorProp;
    /** Filled variant
     */
    fill?: boolean;
    small?: -1;
    large?: -1;
    size?: "xs" | "s" | "m" | "l" | "xl";
}>>>, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
