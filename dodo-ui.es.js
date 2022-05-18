import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, unref, renderSlot, createBlock, Teleport, createElementVNode, inject, reactive, withCtx, createVNode, createCommentVNode, createTextVNode, Fragment, renderList, toDisplayString } from "vue";
var Button_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    color: null,
    secondary: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const css = computed(() => {
      let s = "";
      if (props.color)
        s += `--color:${props.color};`;
      return s;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["Button", {
          secondary: props.secondary
        }]),
        style: normalizeStyle(unref(css))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
var Dialog_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const css = computed(() => {
      let s = "";
      return s;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createElementVNode("div", {
          class: "Dialog",
          style: normalizeStyle(unref(css))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 4)
      ]);
    };
  }
});
function newCrashInfo() {
  const state = reactive({
    error: null
  });
  function setError(err) {
    if (!err) {
      state.error = null;
      return;
    }
    console.warn("Displaying error dialog for the following unhandled error:", err);
    state.error = err;
  }
  function clearError() {
    state.error = null;
  }
  function getError() {
    return state.error;
  }
  return { setError, clearError, getError };
}
const key = Symbol(newCrashInfo.name);
function crashDialogPlugin(opts) {
  const crashInfo = newCrashInfo();
  return (app) => {
    app.provide(key, crashInfo);
    const _errorHandler = app.config.errorHandler;
    app.config.errorHandler = (err, instance, info) => {
      crashInfo.setError(err);
      if (_errorHandler)
        return _errorHandler(err, instance, info);
    };
    window.addEventListener("unhandledrejection", (event) => {
      crashInfo.setError(event.reason);
    });
    if (opts.router) {
      opts.router.onError((err) => {
        crashInfo.setError(err);
      });
    }
  };
}
function useCrashInfo() {
  return inject(key);
}
const _hoisted_1$1 = /* @__PURE__ */ createElementVNode("p", null, " An unexpected error occurred and the application may not function correctly until the page is reloaded. Any unsaved changes will be lost if you choose to reload the page. ", -1);
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("p", null, "Please contact us if the problem persists.", -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Ignore");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Reload page");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const crashInfo = useCrashInfo();
    function reload() {
      location.reload();
    }
    function ignore() {
      crashInfo.setError(null);
    }
    return (_ctx, _cache) => {
      return unref(crashInfo).getError() ? (openBlock(), createBlock(_sfc_main$4, {
        key: 0,
        "modal-title": "Something went wrong"
      }, {
        content: withCtx(() => [
          _hoisted_1$1,
          _hoisted_2$1
        ]),
        controls: withCtx(() => [
          createVNode(_sfc_main$5, { onClick: ignore }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createVNode(_sfc_main$5, {
            color: "brand-600",
            variant: "solid",
            onClick: reload
          }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    columnWidth: null,
    stretch: { type: Boolean },
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
      const fitFill = props.stretch ? "auto-fit" : "auto-fill";
      s += `grid-template-columns: repeat(${fitFill}, minmax(${props.columnWidth}, 1fr));`;
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
var NavLayout_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["href"];
const _hoisted_2 = { class: "NavLayout_content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    items: null
  },
  setup(__props) {
    const css = computed(() => {
      let s = "";
      return s;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "NavLayout",
        style: normalizeStyle(unref(css))
      }, [
        createVNode(_sfc_main$2, {
          column: "",
          pad: "l",
          class: "NavLayout_bar"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
              return openBlock(), createElementBlock("a", {
                href: item.href,
                class: "NavLayout_item"
              }, toDisplayString(item.label), 9, _hoisted_1);
            }), 256))
          ]),
          _: 1
        }),
        createElementVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 4);
    };
  }
});
export { _sfc_main$5 as Button, _sfc_main$3 as CrashDialog, _sfc_main$4 as Dialog, _sfc_main$2 as Flex, _sfc_main$1 as GridResponsive, _sfc_main as NavBar, crashDialogPlugin };
