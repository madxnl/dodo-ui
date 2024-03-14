import type { ComputedRef } from 'vue';
export declare const useNavbar: (opts: {
    active: ComputedRef<boolean>;
    text: ComputedRef<string>;
}) => {
    showAsActive: ComputedRef<boolean>;
    isExpanded: ComputedRef<boolean>;
    toggleExpand: () => void;
    headerText: ComputedRef<string | undefined>;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, {
    default?(_: {}): any;
    "navbar-footer"?(_: {}): any;
    main?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
