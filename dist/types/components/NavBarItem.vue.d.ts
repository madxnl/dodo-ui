import type { ComputedRef } from 'vue';
import type { IconName } from '..';
declare function __VLS_template(): {
    icon?(_: {}): any;
    submenu?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    text: string;
    /** Secondary line of text */
    link?: {
        isActive: ComputedRef<boolean>;
        navigate: () => Promise<void>;
    };
    /** Secondary line of text */
    textSecondary?: string;
    /** Icon name (or use 'icon' slot) */
    icon?: IconName;
    /** Style as active nav item */
    active?: boolean;
    /** Important items are always fully opaque */
    important?: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    text: string;
    /** Secondary line of text */
    link?: {
        isActive: ComputedRef<boolean>;
        navigate: () => Promise<void>;
    };
    /** Secondary line of text */
    textSecondary?: string;
    /** Icon name (or use 'icon' slot) */
    icon?: IconName;
    /** Style as active nav item */
    active?: boolean;
    /** Important items are always fully opaque */
    important?: boolean;
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
