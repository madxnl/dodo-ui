import { Plugin } from 'vue';
import { Router } from 'vue-router';
/** The service which contains global crash state and can be injected */
declare function newCrashInfo(): {
    setError: (err: unknown | null) => void;
    clearError: () => void;
    getError: () => unknown;
};
export declare type ErrorService = ReturnType<typeof newCrashInfo>;
/** Vue plugin for the service, use with app.use() */
export declare function crashDialogPlugin(opts: {
    router?: Router;
}): Plugin;
/** Use service inside a component */
export declare function useCrashInfo(): {
    setError: (err: unknown) => void;
    clearError: () => void;
    getError: () => unknown;
} | undefined;
export {};
