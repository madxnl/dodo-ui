declare const _default: <T extends string | null | undefined>(__VLS_props: {
    name?: string | undefined;
    label?: string | undefined;
    disabled?: boolean | undefined;
    error?: string | undefined;
    autocomplete?: string | undefined;
    placeholder?: string | undefined;
    id?: string | null | undefined;
    modelValue: T;
    "onUpdate:modelValue"?: ((value: T) => any) | undefined;
    description?: string | undefined;
    options: {
        label: string;
        value: T;
    }[];
    optional?: boolean | undefined;
    autofocus?: boolean | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    slots: {};
    emit: (evt: "update:modelValue", value: T) => void;
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        name?: string | undefined;
        label?: string | undefined;
        disabled?: boolean | undefined;
        error?: string | undefined;
        autocomplete?: string | undefined;
        placeholder?: string | undefined;
        id?: string | null | undefined;
        modelValue: T;
        "onUpdate:modelValue"?: ((value: T) => any) | undefined;
        description?: string | undefined;
        options: {
            label: string;
            value: T;
        }[];
        optional?: boolean | undefined;
        autofocus?: boolean | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {};
    emit: (evt: "update:modelValue", value: T) => void;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            name?: string | undefined;
            label?: string | undefined;
            disabled?: boolean | undefined;
            error?: string | undefined;
            autocomplete?: string | undefined;
            placeholder?: string | undefined;
            id?: string | null | undefined;
            modelValue: T;
            "onUpdate:modelValue"?: ((value: T) => any) | undefined;
            description?: string | undefined;
            options: {
                label: string;
                value: T;
            }[];
            optional?: boolean | undefined;
            autofocus?: boolean | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {};
        emit: (evt: "update:modelValue", value: T) => void;
    } | undefined;
};
export default _default;
type __VLS_OmitKeepDiscriminatedUnion<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
