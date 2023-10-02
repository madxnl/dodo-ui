type Option = {
    value: unknown;
    label: string;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    options: {
        type: import("vue").PropType<Option[]>;
        required: true;
    };
    modelValue: {
        type: import("vue").PropType<unknown>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
    multiple: {
        type: import("vue").PropType<boolean>;
    };
    variant: {
        type: import("vue").PropType<"buttons">;
    };
    size: {
        type: import("vue").PropType<"s">;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (v: unknown) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: import("vue").PropType<Option[]>;
        required: true;
    };
    modelValue: {
        type: import("vue").PropType<unknown>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
    multiple: {
        type: import("vue").PropType<boolean>;
    };
    variant: {
        type: import("vue").PropType<"buttons">;
    };
    size: {
        type: import("vue").PropType<"s">;
    };
}>> & {
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
