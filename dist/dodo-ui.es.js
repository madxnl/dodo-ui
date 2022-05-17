import { defineComponent, computed, openBlock, createElementBlock, normalizeStyle, unref, renderSlot } from "vue";
function useSettings() {
  return {
    gapSizes: {
      0: 0,
      xs: 4,
      s: 8,
      m: 16,
      l: 32,
      xl: 64
    }
  };
}
var Flex_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    gap: null,
    pad: null,
    column: { type: Boolean },
    grow: { type: Boolean },
    justify: null,
    align: null,
    wrap: { type: Boolean },
    background: null
  },
  setup(__props) {
    const props = __props;
    const { gapSizes } = useSettings();
    function spacingToCSS(str) {
      return str.split(" ").map((x) => (gapSizes[x] || "0") + "px").join(" ");
    }
    const css = computed(() => {
      let s = "";
      if (props.gap)
        s += `gap:${spacingToCSS(props.gap)};`;
      if (props.pad)
        s += `padding:${spacingToCSS(props.pad)};`;
      if (props.column)
        s += `flex-flow:column;`;
      if (props.grow)
        s += `flex-grow:1;`;
      if (props.wrap)
        s += `flex-wrap:wrap;`;
      if (props.justify)
        s += `justify-content:${props.justify};`;
      if (props.align)
        s += `align-items:${props.align};`;
      if (props.background)
        s += `background:${props.background};`;
      return s;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "Flex",
        style: normalizeStyle(unref(css))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
});
var GridResponsive_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    column: null,
    gap: null
  },
  setup(__props) {
    const props = __props;
    const { gapSizes } = useSettings();
    function spacingToCSS(str) {
      return str.split(" ").map((x) => (gapSizes[x] || "0") + "px").join(" ");
    }
    const css = computed(() => {
      let s = "";
      s += `grid-template-columns: repeat(auto-fill, minmax(${props.column}, 1fr));`;
      if (props.gap)
        s += `gap:${spacingToCSS(props.gap)};`;
      return s;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "GridResponsive",
        style: normalizeStyle(unref(css))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
});
export { _sfc_main$1 as Flex, _sfc_main as GridResponsive };
