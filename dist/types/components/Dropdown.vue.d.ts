declare function toggle(show: boolean): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /** Use v-model to modify dropdown state from outside */
    modelValue?: boolean | undefined;
    /** Change padding around dropdown content */
    padding?: "0" | "s" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | undefined;
    /** Change gap between dropdown content */
    gap?: "0" | "s" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | undefined;
    /** (temporaily) disable dropdown functionality */
    disabled?: boolean | undefined;
    /** Change trigger event */
    trigger?: "hover" | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /** Use v-model to modify dropdown state from outside */
    modelValue?: boolean | undefined;
    /** Change padding around dropdown content */
    padding?: "0" | "s" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | undefined;
    /** Change gap between dropdown content */
    gap?: "0" | "s" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | undefined;
    /** (temporaily) disable dropdown functionality */
    disabled?: boolean | undefined;
    /** Change trigger event */
    trigger?: "hover" | undefined;
}>>> & {
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
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
