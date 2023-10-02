declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    stepIndex: {
        type: import("vue").PropType<number>;
    };
    steps: {
        type: import("vue").PropType<{
            name: string;
            key?: string | undefined;
            hint?: string | undefined;
            submitText?: string | undefined;
            incomplete?: boolean | undefined;
            submitStep?: (() => boolean | Promise<boolean>) | undefined;
        }[]>;
        required: true;
    };
    completed: {
        type: import("vue").PropType<() => void | Promise<void>>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:stepIndex": (index: number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    stepIndex: {
        type: import("vue").PropType<number>;
    };
    steps: {
        type: import("vue").PropType<{
            name: string;
            key?: string | undefined;
            hint?: string | undefined;
            submitText?: string | undefined;
            incomplete?: boolean | undefined;
            submitStep?: (() => boolean | Promise<boolean>) | undefined;
        }[]>;
        required: true;
    };
    completed: {
        type: import("vue").PropType<() => void | Promise<void>>;
        required: true;
    };
}>> & {
    "onUpdate:stepIndex"?: ((index: number) => any) | undefined;
}, {}, {}>, Partial<Record<string, (_: {}) => any>>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
