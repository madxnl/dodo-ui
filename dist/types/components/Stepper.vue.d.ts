declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    stepIndex: {
        type: import("vue").PropType<number>;
    };
    steps: {
        type: import("vue").PropType<{
            name: string;
            slot?: string | undefined;
            hint?: string | undefined;
            submitText?: string | undefined;
            incomplete?: undefined;
            filled?: boolean | undefined;
            validate?: (() => boolean | Promise<boolean>) | undefined;
            submitStep?: undefined;
        }[]>;
        required: true;
    };
    submit: {
        type: import("vue").PropType<() => void | Promise<void>>;
        required: true;
    };
    completed: {
        type: import("vue").PropType<-1>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:stepIndex': (index: number) => void;
    submit: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    stepIndex: {
        type: import("vue").PropType<number>;
    };
    steps: {
        type: import("vue").PropType<{
            name: string;
            slot?: string | undefined;
            hint?: string | undefined;
            submitText?: string | undefined;
            incomplete?: undefined;
            filled?: boolean | undefined;
            validate?: (() => boolean | Promise<boolean>) | undefined;
            submitStep?: undefined;
        }[]>;
        required: true;
    };
    submit: {
        type: import("vue").PropType<() => void | Promise<void>>;
        required: true;
    };
    completed: {
        type: import("vue").PropType<-1>;
    };
}>> & {
    onSubmit?: (() => any) | undefined;
    "onUpdate:stepIndex"?: ((index: number) => any) | undefined;
}, {}, {}>, Partial<Record<string, (_: {}) => any>> & {
    "continue-button-text"?(_: {}): any;
    "submit-button-text"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
