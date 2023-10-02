declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    id: {
        type: import("vue").PropType<string | null>;
    };
    modelValue: {
        type: import("vue").PropType<string | null>;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    rows: {
        type: import("vue").PropType<number>;
    };
    maxlength: {
        type: import("vue").PropType<number>;
    };
    type: {
        type: import("vue").PropType<"search">;
    };
    tabIndex: {
        type: import("vue").PropType<number>;
    };
    name: {
        type: import("vue").PropType<string>;
    };
    autofocus: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: import("vue").PropType<string | null>;
    };
    modelValue: {
        type: import("vue").PropType<string | null>;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    rows: {
        type: import("vue").PropType<number>;
    };
    maxlength: {
        type: import("vue").PropType<number>;
    };
    type: {
        type: import("vue").PropType<"search">;
    };
    tabIndex: {
        type: import("vue").PropType<number>;
    };
    name: {
        type: import("vue").PropType<string>;
    };
    autofocus: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {}, {}>, {
    before?(_: {}): any;
    after?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
