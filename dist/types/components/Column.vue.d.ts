import { AlignType, JustifyType } from '../composables';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    gap: {
        type: import("vue").PropType<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
    };
    padding: {
        type: import("vue").PropType<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
    };
    grow: {
        type: import("vue").PropType<boolean>;
    };
    justify: {
        type: import("vue").PropType<JustifyType>;
    };
    align: {
        type: import("vue").PropType<AlignType>;
    };
    wrap: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    gap: {
        type: import("vue").PropType<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
    };
    padding: {
        type: import("vue").PropType<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
    };
    grow: {
        type: import("vue").PropType<boolean>;
    };
    justify: {
        type: import("vue").PropType<JustifyType>;
    };
    align: {
        type: import("vue").PropType<AlignType>;
    };
    wrap: {
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
