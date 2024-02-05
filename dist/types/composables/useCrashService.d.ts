import { InjectionKey, Plugin } from 'vue';
import { Router } from 'vue-router';
export type CrashService = ReturnType<typeof createCrashService>;
export type CrashServiceOptions = {
    router: Router | null;
    onError?: (err: unknown) => undefined | boolean;
};
export declare const crashServiceKey: InjectionKey<CrashService>;
declare function createCrashService(opts: CrashServiceOptions): {
    ignoreError: () => void;
    reloadPage: () => void;
    currentError: import("vue").Ref<unknown>;
    handleCrash: (err: unknown) => void;
};
export declare function crashPlugin(opts: CrashServiceOptions): Plugin;
export declare function useCrashService(): {
    ignoreError: () => void;
    reloadPage: () => void;
    currentError: import("vue").Ref<unknown>;
    handleCrash: (err: unknown) => void;
};
export {};
