declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /** Array of available options */
    options: {
        value: any;
        label?: string | undefined;
    }[];
    /** Currently selected value(s) */
    modelValue?: unknown;
    /** Allow multiple values to be selected (use array for modelValue) */
    multiple?: boolean | undefined;
    /** Toggle disable */
    disabled?: boolean | undefined;
    /** Small buttons */
    small?: boolean | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: unknown) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /** Array of available options */
    options: {
        value: any;
        label?: string | undefined;
    }[];
    /** Currently selected value(s) */
    modelValue?: unknown;
    /** Allow multiple values to be selected (use array for modelValue) */
    multiple?: boolean | undefined;
    /** Toggle disable */
    disabled?: boolean | undefined;
    /** Small buttons */
    small?: boolean | undefined;
}>>> & {
    "onUpdate:modelValue"?: ((value: unknown) => any) | undefined;
}, {}, {}>, {
    default?(_: {
        option: {
            value: any;
            label?: string | undefined;
        };
        index: number;
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
