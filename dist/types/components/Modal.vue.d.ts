declare function close(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToOption<{
    open: boolean;
    size?: "S" | "L" | undefined;
    padding?: "0" | "s" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | undefined;
    gap?: "0" | "s" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    open: boolean;
    size?: "S" | "L" | undefined;
    padding?: "0" | "s" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | undefined;
    gap?: "0" | "s" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | undefined;
}>>> & {
    onClose?: (() => any) | undefined;
}, {}, {}>, {
    default?(_: {
        close: typeof close;
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
