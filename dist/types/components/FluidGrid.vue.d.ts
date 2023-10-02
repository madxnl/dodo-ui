declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    columnSize: {
        type: import("vue").PropType<number>;
        required: true;
    };
    gap: {
        type: import("vue").PropType<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
    };
    padding: {
        type: import("vue").PropType<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
    };
    autoFill: {
        type: import("vue").PropType<boolean>;
    };
    alignItems: {
        type: import("vue").PropType<"start" | "end" | "center" | "stretch">;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columnSize: {
        type: import("vue").PropType<number>;
        required: true;
    };
    gap: {
        type: import("vue").PropType<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
    };
    padding: {
        type: import("vue").PropType<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
    };
    autoFill: {
        type: import("vue").PropType<boolean>;
    };
    alignItems: {
        type: import("vue").PropType<"start" | "end" | "center" | "stretch">;
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
