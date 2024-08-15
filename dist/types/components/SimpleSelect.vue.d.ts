declare const _default: <T extends string | undefined | null>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_Prettify<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_Prettify<Pick<Partial<{}> & Omit<{
        "onUpdate:modelValue"?: ((value: T) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{}>> & {
        "onUpdate:modelValue"?: ((value: T) => any) | undefined;
    }, never>, "onUpdate:modelValue"> & {
        modelValue: T;
        options: {
            label: string;
            value: T;
        }[];
        id?: string | null;
        placeholder?: string;
        disabled?: boolean;
        name?: string;
        autofocus?: boolean;
        label?: string;
        error?: string;
        description?: string;
        optional?: boolean;
        autocomplete?: string;
    }> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: ReturnType<() => {}>;
    emit: ((evt: "update:modelValue", value: T) => void) & {};
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
