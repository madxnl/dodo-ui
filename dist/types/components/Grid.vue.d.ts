type ColumnSize = 'xs' | 's' | 'm' | 'l';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    columnSize: {
        type: import("vue").PropType<ColumnSize>;
        required: true;
    };
    gap: {
        type: import("vue").PropType<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "24" | "32">;
    };
    padding: {
        type: import("vue").PropType<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "24" | "32">;
    };
    autoFill: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columnSize: {
        type: import("vue").PropType<ColumnSize>;
        required: true;
    };
    gap: {
        type: import("vue").PropType<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "24" | "32">;
    };
    padding: {
        type: import("vue").PropType<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "24" | "32">;
    };
    autoFill: {
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
