declare const _default: import("vue").DefineComponent<{
    modelValue: import("vue").PropType<string | null>;
    placeholder: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    name: {
        type: import("vue").PropType<string>;
    };
    autofocus: {
        type: import("vue").PropType<boolean>;
    };
    error: {
        type: import("vue").PropType<string>;
    };
    minRows: {
        type: import("vue").PropType<number>;
    };
    maxRows: {
        type: import("vue").PropType<number>;
    };
    autocomplete: {
        type: import("vue").PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (modelValue: string | null) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue").PropType<string | null>;
    placeholder: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    name: {
        type: import("vue").PropType<string>;
    };
    autofocus: {
        type: import("vue").PropType<boolean>;
    };
    error: {
        type: import("vue").PropType<string>;
    };
    minRows: {
        type: import("vue").PropType<number>;
    };
    maxRows: {
        type: import("vue").PropType<number>;
    };
    autocomplete: {
        type: import("vue").PropType<string>;
    };
}>> & {
    "onUpdate:modelValue"?: ((modelValue: string | null) => any) | undefined;
}, {}, {}>;
export default _default;
