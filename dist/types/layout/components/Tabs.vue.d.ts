export interface Tab {
    name: string;
    disabled?: boolean;
    slot?: string;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    tabs: {
        type: import("vue").PropType<Tab[]>;
        required: true;
    };
    tabIndex: {
        type: import("vue").PropType<number>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:tabIndex": (i: number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tabs: {
        type: import("vue").PropType<Tab[]>;
        required: true;
    };
    tabIndex: {
        type: import("vue").PropType<number>;
    };
}>> & {
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
