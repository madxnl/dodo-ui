import { reactive, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, toDisplayString } from "vue";
var button = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "my-button",
  props: {
    label: {
      type: String,
      required: true
    },
    primary: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: function(value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      }
    },
    backgroundColor: {
      type: String
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "storybook-button": true,
        "storybook-button--primary": props.primary,
        "storybook-button--secondary": !props.primary,
        [`storybook-button--${props.size || "medium"}`]: true
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor
      })),
      onClick() {
        emit("click");
      }
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    type: "button",
    class: normalizeClass($setup.classes),
    onClick: _cache[0] || (_cache[0] = (...args) => $setup.onClick && $setup.onClick(...args)),
    style: normalizeStyle($setup.style)
  }, toDisplayString($props.label), 7);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Button };
