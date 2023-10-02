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
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
    props: {
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
    };
    expose(exposed: {}): void;
    attrs: any;
    slots: {
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
}, "attrs" | "slots" | "emit"> | undefined, __VLS_setup?: {
    props: {
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
    };
    expose(exposed: {}): void;
    attrs: any;
    slots: {
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
}) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
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
        };
        expose(exposed: {}): void;
        attrs: any;
        slots: {
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
