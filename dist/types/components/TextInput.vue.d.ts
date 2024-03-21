declare const _default: import("vue").DefineComponent<{
    modelValue: import("vue").PropType<string | null>;
    placeholder: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    maxlength: {
        type: import("vue").PropType<number>;
    };
    type: {
        type: import("vue").PropType<"number" | "search" | "text" | "email" | "tel" | "password" | "url">;
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
    rows: {
        type: import("vue").PropType<never>;
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
    maxlength: {
        type: import("vue").PropType<number>;
    };
    type: {
        type: import("vue").PropType<"number" | "search" | "text" | "email" | "tel" | "password" | "url">;
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
    rows: {
        type: import("vue").PropType<never>;
    };
    autocomplete: {
        type: import("vue").PropType<string>;
    };
}>> & {
    "onUpdate:modelValue"?: ((modelValue: string | null) => any) | undefined;
}, {}, {}>;
export default _default;
