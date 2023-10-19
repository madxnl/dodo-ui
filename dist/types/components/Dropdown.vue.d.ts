declare function toggle(show: boolean): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<boolean>;
    };
    padding: {
        type: import("vue").PropType<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "24" | "32">;
    };
    gap: {
        type: import("vue").PropType<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "24" | "32">;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    trigger: {
        type: import("vue").PropType<"hover">;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<boolean>;
    };
    padding: {
        type: import("vue").PropType<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "24" | "32">;
    };
    gap: {
        type: import("vue").PropType<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "24" | "32">;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    trigger: {
        type: import("vue").PropType<"hover">;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {}, {}>, {
    default?(_: {
        isActive: boolean;
    }): any;
    dropdown?(_: {
        toggle: typeof toggle;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
