import type { GapSize } from '..';
declare function toggle(show: boolean): void;
declare function __VLS_template(): {
    default?(_: {
        isActive: boolean;
    }): any;
    dropdown?(_: {
        toggle: typeof toggle;
    }): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /** Use v-model to modify dropdown state from outside */
    modelValue?: boolean;
    /** Change padding around dropdown content */
    padding?: GapSize;
    /** Change gap between dropdown content */
    gap?: GapSize;
    /** (temporaily) disable dropdown functionality */
    disabled?: boolean;
    /** Change trigger event */
    trigger?: "hover";
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /** Use v-model to modify dropdown state from outside */
    modelValue?: boolean;
    /** Change padding around dropdown content */
    padding?: GapSize;
    /** Change gap between dropdown content */
    gap?: GapSize;
    /** (temporaily) disable dropdown functionality */
    disabled?: boolean;
    /** Change trigger event */
    trigger?: "hover";
}>>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
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
