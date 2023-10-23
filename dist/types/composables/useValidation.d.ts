import { Ref } from 'vue';
type ValidatorReturn = string | null | undefined | boolean;
type CustomValidator<V> = (value: V, fieldLabel: string) => Promise<ValidatorReturn> | ValidatorReturn;
export declare class ValidationError extends Error {
    field: string;
    name: string;
    constructor(field: string, message?: string);
}
type FormData = Record<string, unknown>;
export type ValidateRules<T extends FormData> = {
    [K in keyof T]: {
        value: Ref<T[K]>;
        name?: string;
        required?: boolean;
        minLen?: number;
        maxLen?: number;
        isEmail?: boolean;
        validators?: CustomValidator<T[K]>[];
    };
};
export declare function useValidation<T extends FormData>(initialRules: ValidateRules<T>): {
    errors: Partial<Record<keyof T, string>>;
    rules: import("vue").UnwrapNestedRefs<ValidateRules<T>>;
    validate: (...fields: (keyof T)[]) => Promise<boolean>;
    clearErrors: () => void;
};
export {};
