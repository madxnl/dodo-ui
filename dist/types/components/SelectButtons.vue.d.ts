declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    options: {
        type: import("vue").PropType<{
            value: any;
            label?: string | undefined;
        }[]>;
        required: true;
    };
    modelValue: {
        type: import("vue").PropType<unknown>;
    };
    multiple: {
        type: import("vue").PropType<boolean>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    small: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: unknown) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: import("vue").PropType<{
            value: any;
            label?: string | undefined;
        }[]>;
        required: true;
    };
    modelValue: {
        type: import("vue").PropType<unknown>;
    };
    multiple: {
        type: import("vue").PropType<boolean>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    small: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
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
