declare function __VLS_template(): {
    body?(_: {
        error: unknown;
        defaultText: "\n  An unexpected error occurred and the application may not function correctly until the page is reloaded.\n  Any unsaved changes will be lost if you choose to reload the page.\n";
    }): any;
};
declare const __VLS_component: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
