declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /** Override mobile/desktop version, default is based on screen size */
    mobile?: boolean | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /** Override mobile/desktop version, default is based on screen size */
    mobile?: boolean | undefined;
}>>>, {}, {}>, {
    "navbar-header"?(_: {}): any;
    default?(_: {
        inMobileBar: boolean;
    }): any;
    "navbar-footer"?(_: {
        inMobileBar: boolean;
    }): any;
    main?(_: {}): any;
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
