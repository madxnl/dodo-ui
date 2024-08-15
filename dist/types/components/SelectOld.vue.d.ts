type Option = {
    value: unknown;
    label: string;
};
declare function __VLS_template(): {
    default?(_: {
        option: Option;
        index: number;
    }): any;
    default?(_: {
        index: number;
        option: Option;
    }): any;
    default?(_: {
        index: number;
        option: Option;
    }): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /** Array of available options */
    options: Option[];
    /** v-model binding */
    modelValue?: unknown;
    disabled?: boolean;
    /** Set placeholder text */
    placeholder?: string;
    /** Allow multiple select */
    multiple?: boolean;
    variant?: "buttons";
    size?: "s";
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (v: unknown) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /** Array of available options */
    options: Option[];
    /** v-model binding */
    modelValue?: unknown;
    disabled?: boolean;
    /** Set placeholder text */
    placeholder?: string;
    /** Allow multiple select */
    multiple?: boolean;
    variant?: "buttons";
    size?: "s";
}>>> & {
    "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
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
