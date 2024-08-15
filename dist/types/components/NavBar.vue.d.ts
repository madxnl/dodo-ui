declare function __VLS_template(): {
    "navbar-header"?(_: {}): any;
    default?(_: {}): any;
    default?(_: {
        inMobileBar: boolean;
    }): any;
    "navbar-footer"?(_: {}): any;
    "navbar-footer"?(_: {
        inMobileBar: boolean;
    }): any;
    main?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /** Override mobile/desktop version, default is based on screen size */
    mobile?: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /** Override mobile/desktop version, default is based on screen size */
    mobile?: boolean;
}>>>, {}, {}>;
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
