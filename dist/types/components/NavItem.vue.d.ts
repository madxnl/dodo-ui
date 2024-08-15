import type { ComputedRef } from 'vue';
import type { NavigationFailure } from 'vue-router';
import type { IconName } from '..';
declare function __VLS_template(): {
    icon?(_: {}): any;
    submenu?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    /** Secondary line of text */
    link?: {
        href: string | ComputedRef<string>;
        isActive: boolean | ComputedRef<boolean>;
        navigate: (e?: MouseEvent) => Promise<void | NavigationFailure>;
    };
    text: string;
    /** Secondary line of text */
    textSecondary?: string;
    tooltipText?: string;
    /** Icon name (or use 'icon' slot) */
    icon?: IconName;
    /** Important items are always fully opaque */
    important?: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    /** Secondary line of text */
    link?: {
        href: string | ComputedRef<string>;
        isActive: boolean | ComputedRef<boolean>;
        navigate: (e?: MouseEvent) => Promise<void | NavigationFailure>;
    };
    text: string;
    /** Secondary line of text */
    textSecondary?: string;
    tooltipText?: string;
    /** Icon name (or use 'icon' slot) */
    icon?: IconName;
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
