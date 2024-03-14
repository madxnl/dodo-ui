type SocialIconName = 'google' | 'facebook' | 'twitter' | 'linkedin' | 'slack' | 'whatsapp';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /** Social icon name
     * @example icon="google"
     */
    name: SocialIconName;
    /** Render icon in a single color
     * @example color="success"
     */
    white?: boolean | undefined;
    small?: boolean | undefined;
    large?: boolean | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /** Social icon name
     * @example icon="google"
     */
    name: SocialIconName;
    /** Render icon in a single color
     * @example color="success"
     */
    white?: boolean | undefined;
    small?: boolean | undefined;
    large?: boolean | undefined;
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
