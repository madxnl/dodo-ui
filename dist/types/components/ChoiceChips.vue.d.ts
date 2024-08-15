declare function __VLS_template(): {
    default?(_: {
        option: {
            value: any;
            label?: string;
        };
        index: number;
    }): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /** Array of available options */
    options: {
        value: any;
        label?: string;
    }[];
    /** Currently selected value(s) */
    modelValue?: unknown;
    /** Allow multiple values to be selected (use array for modelValue) */
    multiple?: boolean;
    /** Toggle disable */
    disabled?: boolean;
    /** Small buttons */
    small?: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: unknown) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /** Array of available options */
    options: {
        value: any;
        label?: string;
    }[];
    /** Currently selected value(s) */
    modelValue?: unknown;
    /** Allow multiple values to be selected (use array for modelValue) */
    multiple?: boolean;
    /** Toggle disable */
    disabled?: boolean;
    /** Small buttons */
    small?: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((value: unknown) => any) | undefined;
}, {}, {}>;
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
