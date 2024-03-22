type Option = {
    value: unknown;
    label: string;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /** Array of available options */
    options: Option[];
    /** v-model binding */
    modelValue?: unknown;
    disabled?: boolean | undefined;
    /** Set placeholder text */
    placeholder?: string | undefined;
    /** Allow multiple select */
    multiple?: boolean | undefined;
    variant?: "buttons" | undefined;
    size?: "s" | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (v: unknown) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /** Array of available options */
    options: Option[];
    /** v-model binding */
    modelValue?: unknown;
    disabled?: boolean | undefined;
    /** Set placeholder text */
    placeholder?: string | undefined;
    /** Allow multiple select */
    multiple?: boolean | undefined;
    variant?: "buttons" | undefined;
    size?: "s" | undefined;
}>>> & {
    "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
}, {}, {}>, {
    default?(_: {
        index: number;
        option: Option;
    }): any;
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
