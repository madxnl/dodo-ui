declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    text: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    side: {
        type: import("vue").PropType<"left" | "right" | "top" | "bottom">;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    side: {
        type: import("vue").PropType<"left" | "right" | "top" | "bottom">;
    };
}>>, {}, {}>, {
    default?(_: {}): any;
    "tooltip-text"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
