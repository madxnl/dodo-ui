declare function __VLS_template(): Partial<Record<string, (_: {}) => any>> & {
    "continue-button-text"?(_: {}): any;
    "submit-button-text"?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    stepIndex?: number;
    steps: {
        name: string;
        slot?: string;
        hint?: string;
        filled?: boolean;
        validate?: () => Promise<boolean> | boolean;
        submitText?: never;
        incomplete?: never;
        submitStep?: never;
    }[];
    submit: () => Promise<void> | void;
    completed?: -1;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: () => void;
    "update:stepIndex": (index: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    stepIndex?: number;
    steps: {
        name: string;
        slot?: string;
        hint?: string;
        filled?: boolean;
        validate?: () => Promise<boolean> | boolean;
        submitText?: never;
        incomplete?: never;
        submitStep?: never;
    }[];
    submit: () => Promise<void> | void;
    completed?: -1;
}>>> & {
    onSubmit?: (() => any) | undefined;
    "onUpdate:stepIndex"?: ((index: number) => any) | undefined;
}, {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
