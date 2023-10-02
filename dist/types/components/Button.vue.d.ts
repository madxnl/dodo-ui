import { ColorProp } from '..';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    color: {
        type: import("vue").PropType<ColorProp>;
    };
    variant: {
        type: import("vue").PropType<"text" | "solid">;
    };
    type: {
        type: import("vue").PropType<"button" | "submit">;
    };
    square: {
        type: import("vue").PropType<boolean>;
    };
    rounded: {
        type: import("vue").PropType<boolean>;
    };
    small: {
        type: import("vue").PropType<boolean>;
    };
    active: {
        type: import("vue").PropType<boolean>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: import("vue").PropType<ColorProp>;
    };
    variant: {
        type: import("vue").PropType<"text" | "solid">;
    };
    type: {
        type: import("vue").PropType<"button" | "submit">;
    };
    square: {
        type: import("vue").PropType<boolean>;
    };
    rounded: {
        type: import("vue").PropType<boolean>;
    };
    small: {
        type: import("vue").PropType<boolean>;
    };
    active: {
        type: import("vue").PropType<boolean>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
}>>, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
