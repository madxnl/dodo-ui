export interface DatatableColumn<T = object> {
    name: string;
    value?: keyof T | ((row: T) => unknown);
    align?: 'start' | 'end';
    width?: string;
    sort?: string;
    disabled?: boolean;
    slot?: string;
}
declare const _default: <T>(__VLS_props: {
    "onUpdate:selection"?: ((selection: unknown[]) => any) | undefined;
    "onUpdate:sortValue"?: ((order: string | undefined) => any) | undefined;
    rows: T[];
    columns: DatatableColumn<T>[];
    selection?: T[] | undefined;
    rowClick?: ((row: T) => void) | undefined;
    selectBy?: keyof T | undefined;
    stickyHeader?: boolean | undefined;
    contentLoading?: boolean | undefined;
    showFooter?: boolean | undefined;
    showMore?: (() => Promise<unknown>) | undefined;
    sortValue?: string | undefined;
    sortAsync?: ((sortBy: string | undefined) => Promise<unknown>) | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    slots: Readonly<{
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
    };
    emit: {
        (e: 'update:selection', selection: unknown[]): void;
        (e: 'update:sortValue', order: string | undefined): void;
    };
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        "onUpdate:selection"?: ((selection: unknown[]) => any) | undefined;
        "onUpdate:sortValue"?: ((order: string | undefined) => any) | undefined;
        rows: T[];
        columns: DatatableColumn<T>[];
        selection?: T[] | undefined;
        rowClick?: ((row: T) => void) | undefined;
        selectBy?: keyof T | undefined;
        stickyHeader?: boolean | undefined;
        contentLoading?: boolean | undefined;
        showFooter?: boolean | undefined;
        showMore?: (() => Promise<unknown>) | undefined;
        sortValue?: string | undefined;
        sortAsync?: ((sortBy: string | undefined) => Promise<unknown>) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: Readonly<{
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
    };
    emit: {
        (e: 'update:selection', selection: unknown[]): void;
        (e: 'update:sortValue', order: string | undefined): void;
    };
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            "onUpdate:selection"?: ((selection: unknown[]) => any) | undefined;
            "onUpdate:sortValue"?: ((order: string | undefined) => any) | undefined;
            rows: T[];
            columns: DatatableColumn<T>[];
            selection?: T[] | undefined;
            rowClick?: ((row: T) => void) | undefined;
            selectBy?: keyof T | undefined;
            stickyHeader?: boolean | undefined;
            contentLoading?: boolean | undefined;
            showFooter?: boolean | undefined;
            showMore?: (() => Promise<unknown>) | undefined;
            sortValue?: string | undefined;
            sortAsync?: ((sortBy: string | undefined) => Promise<unknown>) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: Readonly<{
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
        };
        emit: {
            (e: 'update:selection', selection: unknown[]): void;
            (e: 'update:sortValue', order: string | undefined): void;
        };
    } | undefined;
};
export default _default;
type __VLS_OmitKeepDiscriminatedUnion<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
