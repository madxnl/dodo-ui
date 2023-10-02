import { ColorProp } from '..';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    color: {
        type: import("vue").PropType<ColorProp>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: import("vue").PropType<ColorProp>;
    };
}>>, {}, {}>, {
    before?(_: {}): any;
    default?(_: {}): any;
    after?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
