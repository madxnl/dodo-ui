export interface DatatableColumn<T = object> {
    name: string;
    value?: keyof T | ((row: T) => unknown);
    align?: 'start' | 'end';
    width?: string;
    sort?: string;
    disabled?: boolean;
    slot?: string;
}
declare const _default: <T>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_Prettify<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_Prettify<Pick<Partial<{}> & Omit<{
        "onUpdate:selection"?: ((selection: unknown[]) => any) | undefined;
        "onUpdate:sortValue"?: ((order: string | undefined) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{}>> & {
        "onUpdate:selection"?: ((selection: unknown[]) => any) | undefined;
        "onUpdate:sortValue"?: ((order: string | undefined) => any) | undefined;
    }, never>, "onUpdate:selection" | "onUpdate:sortValue"> & {
        rows: T[];
        columns: DatatableColumn<T>[];
        selection?: T[];
        rowClick?: (row: T) => void;
        selectBy?: keyof T;
        stickyHeader?: boolean;
        contentLoading?: boolean;
        showFooter?: boolean;
        showMore?: () => Promise<unknown>;
        sortValue?: string;
        sortAsync?: (sortBy: string | undefined) => Promise<unknown>;
    }> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: ReturnType<() => Readonly<{
        [key: string]: (scope: {
            row: T;
            column: DatatableColumn<T>;
        }) => any;
        [key: `${string}-header`]: (scope: {
            column: DatatableColumn<T>;
        }) => any;
        [key: `${string}-footer`]: (scope: {
            column: DatatableColumn<T>;
        }) => any;
    }> & {
        [key: string]: (scope: {
            row: T;
            column: DatatableColumn<T>;
        }) => any;
        [key: `${string}-header`]: (scope: {
            column: DatatableColumn<T>;
        }) => any;
        [key: `${string}-footer`]: (scope: {
            column: DatatableColumn<T>;
        }) => any;
    }>;
    emit: {
        (e: "update:selection", selection: unknown[]): void;
        (e: "update:sortValue", order: string | undefined): void;
    } & {};
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
