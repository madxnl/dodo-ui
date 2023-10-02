declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    mobile: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mobile: {
        type: import("vue").PropType<boolean>;
    };
}>>, {}, {}>, {
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
