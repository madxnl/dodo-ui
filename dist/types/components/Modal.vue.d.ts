import type { GapSize } from '@/composables';
declare function close(): void;
declare function __VLS_template(): {
    default?(_: {
        close: typeof close;
    }): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    open: boolean;
    size?: "S" | "L";
    padding?: GapSize;
    gap?: GapSize;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    open: boolean;
    size?: "S" | "L";
    padding?: GapSize;
    gap?: GapSize;
}>>> & {
    onClose?: (() => any) | undefined;
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
