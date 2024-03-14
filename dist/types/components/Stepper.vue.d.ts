declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToOption<{
    stepIndex?: number | undefined;
    steps: {
        name: string;
        slot?: string | undefined;
        hint?: string | undefined;
        filled?: boolean | undefined;
        validate?: (() => boolean | Promise<boolean>) | undefined;
        submitText?: undefined;
        incomplete?: undefined;
        submitStep?: undefined;
    }[];
    submit: () => void | Promise<void>;
    completed?: -1 | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: () => void;
    "update:stepIndex": (index: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    stepIndex?: number | undefined;
    steps: {
        name: string;
        slot?: string | undefined;
        hint?: string | undefined;
        filled?: boolean | undefined;
        validate?: (() => boolean | Promise<boolean>) | undefined;
        submitText?: undefined;
        incomplete?: undefined;
        submitStep?: undefined;
    }[];
    submit: () => void | Promise<void>;
    completed?: -1 | undefined;
}>>> & {
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
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
