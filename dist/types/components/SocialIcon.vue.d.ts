type SocialIconName = 'google' | 'facebook' | 'twitter' | 'linkedin' | 'slack' | 'whatsapp';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: import("vue").PropType<SocialIconName>;
        required: true;
    };
    white: {
        type: import("vue").PropType<boolean>;
    };
    small: {
        type: import("vue").PropType<boolean>;
    };
    large: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: import("vue").PropType<SocialIconName>;
        required: true;
    };
    white: {
        type: import("vue").PropType<boolean>;
    };
    small: {
        type: import("vue").PropType<boolean>;
    };
    large: {
        type: import("vue").PropType<boolean>;
    };
}>>, {}, {}>;
export default _default;
