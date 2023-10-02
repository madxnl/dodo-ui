export declare function useServiceFactory<T>(factory: () => T): {
    createAndProvide: () => T;
    injectOptional: () => T | undefined;
};
