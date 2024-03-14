import type { Ref } from 'vue';
export declare function useResizeObserver(ref: Ref<HTMLElement | undefined>, onResize: (el: HTMLElement) => void): {
    observer?: undefined;
} | {
    observer: ResizeObserver;
};
