declare let __VLS_typeProps: {
    modelValue?: string | null;
    placeholder?: string;
    disabled?: boolean;
    maxlength?: number;
    type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number';
    name?: string;
    autofocus?: boolean;
    error?: string;
    rows?: never;
    autocomplete?: string;
};
type __VLS_PublicProps = {
    modelValue?: string | null;
} & typeof __VLS_typeProps;
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_PublicProps>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (modelValue: string | null) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_PublicProps>>> & {
    "onUpdate:modelValue"?: ((modelValue: string | null) => any) | undefined;
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
