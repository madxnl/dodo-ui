declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    text: {
        type: import("vue").PropType<string>;
        required: true;
    };
    for: {
        type: import("vue").PropType<string>;
    };
    error: {
        type: import("vue").PropType<string>;
    };
    hint: {
        type: import("vue").PropType<string>;
    };
    required: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: import("vue").PropType<string>;
        required: true;
    };
    for: {
        type: import("vue").PropType<string>;
    };
    error: {
        type: import("vue").PropType<string>;
    };
    hint: {
        type: import("vue").PropType<string>;
    };
    required: {
        type: import("vue").PropType<boolean>;
    };
}>>, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
