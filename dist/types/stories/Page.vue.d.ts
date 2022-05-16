declare var _default: import("vue").DefineComponent<{
    user: {
        type: ObjectConstructor;
    };
}, any, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("login" | "logout" | "createAccount")[], "login" | "logout" | "createAccount", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    user: {
        type: ObjectConstructor;
    };
}>> & {
    onLogin?: ((...args: any[]) => any) | undefined;
    onLogout?: ((...args: any[]) => any) | undefined;
    onCreateAccount?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
