import type { InjectionKey, Ref } from 'vue';
export declare const navBarServiceKey: InjectionKey<{
    collapsed: Ref<boolean | null>;
    renderMobile: Ref<boolean>;
    mobileToggle: Ref<boolean>;
}>;
export declare const dropdownServiceKey: InjectionKey<{
    toggle(active: boolean): void;
}>;
export declare function useElementSize(el: Ref<Element | undefined>): {
    width: Ref<number>;
    height: Ref<number>;
    observer: ResizeObserver;
};
export declare function useScreenSize(): {
    screenSmall: import("vue").ComputedRef<boolean>;
    screenMedium: import("vue").ComputedRef<boolean>;
    screenLarge: import("vue").ComputedRef<boolean>;
};
export declare function useSessionStoredRef<T>(key: string, initialValue: T): Ref<import("vue").UnwrapRef<T>>;
export declare function useWebFont(opts: {
    weight: string;
    name: string;
    href: string;
}): {
    isReady: Ref<boolean>;
};
export declare function parseColor(hex: string): [number, number, number];
