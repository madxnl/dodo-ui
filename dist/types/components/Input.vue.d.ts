declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    modelValue?: string | null | undefined;
    id?: string | null | undefined;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    maxlength?: number | undefined;
    type?: string | undefined;
    tabIndex?: number | undefined;
    name?: string | undefined;
    autofocus?: boolean | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    modelValue?: string | null | undefined;
    id?: string | null | undefined;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    maxlength?: number | undefined;
    type?: string | undefined;
    tabIndex?: number | undefined;
    name?: string | undefined;
    autofocus?: boolean | undefined;
}>>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {}, {}>;
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
