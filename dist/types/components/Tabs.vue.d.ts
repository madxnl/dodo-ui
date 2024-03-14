export interface Tab {
    name: string;
    disabled?: boolean;
    slot?: string;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToOption<{
    tabs: Tab[];
    tabIndex?: number | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:tabIndex": (i: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    tabs: Tab[];
    tabIndex?: number | undefined;
}>>> & {
    "onUpdate:tabIndex"?: ((i: number) => any) | undefined;
}, {}, {}>, Partial<Record<string, (_: {
    tab: Tab;
}) => any>> & {
    "tab-title"?(_: {
        i: number;
        tab: Tab;
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
