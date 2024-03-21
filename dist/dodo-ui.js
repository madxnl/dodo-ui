var Re = Object.defineProperty;
var De = (r, e, o) => e in r ? Re(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o;
var $e = (r, e, o) => (De(r, typeof e != "symbol" ? e + "" : e, o), o);
import { defineComponent as C, openBlock as d, createBlock as S, TransitionGroup as Le, withCtx as k, renderSlot as h, Transition as ae, computed as M, createElementBlock as m, normalizeClass as p, normalizeStyle as O, Fragment as H, createTextVNode as T, toDisplayString as I, createCommentVNode as g, useAttrs as He, ref as b, mergeProps as re, unref as f, createElementVNode as y, onMounted as Z, watchEffect as j, onBeforeUnmount as Q, watch as W, inject as ie, provide as de, reactive as he, withModifiers as te, createVNode as z, resolveDynamicComponent as ce, renderList as G, Teleport as Be, nextTick as _e, onUnmounted as Oe, useSlots as se, getCurrentInstance as Se, withDirectives as ue, vModelSelect as je, createStaticVNode as pe, mergeModels as Ve, useModel as ze, vModelDynamic as We, vModelText as qe } from "vue";
const ge = !1, za = /* @__PURE__ */ C({
  __name: "Animated",
  props: {
    list: { type: Boolean },
    appear: { type: Boolean }
  },
  setup(r) {
    return (e, o) => e.list ? (d(), S(Le, {
      key: 0,
      name: "dodo",
      appear: e.appear,
      css: !ge
    }, {
      default: k(() => [
        h(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"])) : (d(), S(ae, {
      key: 1,
      appear: e.appear,
      name: "dodo",
      css: !ge,
      mode: "out-in"
    }, {
      default: k(() => [
        h(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"]));
  }
}), Pe = /* @__PURE__ */ C({
  __name: "Avatar",
  props: {
    text: {},
    image: {},
    round: { type: Boolean }
  },
  setup(r) {
    const e = ["info", "warning", "success", "danger"], o = r, s = M(() => {
      let l = o.text.trim();
      const u = /\b\w|[A-Z]/g, i = o.text.match(u);
      return i != null && i.length && (l = i.join("")), l.slice(0, 2).toUpperCase();
    }), t = M(() => {
      const l = e.length, u = a(o.text);
      return `var(--dodo-color-${e[u % l]}`;
    });
    function a(l) {
      let u = 0;
      for (let i = 0; i < l.length; ++i)
        u = 997 * (u % 1e6) + 11 * l.charCodeAt(i);
      return u;
    }
    return (l, u) => (d(), m("span", {
      class: p([l.$style.Avatar, l.round && l.$style.round]),
      style: O([`--color:${t.value}`, l.image ? `background-image:url(${l.image})` : ""])
    }, [
      l.image ? g("", !0) : (d(), m(H, { key: 0 }, [
        T(I(s.value), 1)
      ], 64))
    ], 6));
  }
}), Ue = "dodo-avatar", Ge = "dodo-avatar-round", Ke = {
  Avatar: Ue,
  round: Ge
}, _ = (r, e) => {
  const o = r.__vccOpts || r;
  for (const [s, t] of e)
    o[s] = t;
  return o;
}, Je = {
  $style: Ke
}, Ia = /* @__PURE__ */ _(Pe, [["__cssModules", Je]]), Ze = ["disabled", "type"], Qe = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "Button",
  props: {
    color: {},
    variant: {},
    type: {},
    square: { type: Boolean },
    rounded: { type: Boolean },
    small: { type: Boolean },
    active: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(r) {
    const e = r, o = M(() => {
      let l = "";
      return e.color && (l += `--button-color:var(--dodo-color-${e.color});`), l;
    }), s = He(), t = b(!1);
    async function a(l) {
      if (!t.value && typeof s.onClick == "function") {
        const u = s.onClick(l);
        u instanceof Promise && (t.value = !0, await u.finally(() => {
          t.value = !1;
        }));
      }
    }
    return (l, u) => (d(), m("button", re({
      style: o.value,
      disabled: l.disabled,
      type: l.type ?? "button",
      class: [
        l.$style.Button,
        l.$style[e.variant ?? "default"],
        t.value && l.$style.loading,
        l.small && l.$style.small,
        l.square && l.$style.square,
        l.active && l.$style.active,
        l.rounded && l.$style.rounded
      ]
    }, { ...f(s), onClick: a }), [
      y("div", {
        class: p(l.$style.content)
      }, [
        h(l.$slots, "default")
      ], 2),
      t.value ? (d(), S(f(Dl), {
        key: 0,
        small: l.small,
        class: p(l.$style.spinner),
        color: "inherit"
      }, null, 8, ["small", "class"])) : g("", !0)
    ], 16, Ze));
  }
}), Xe = "dodo-button", Ye = "dodo-button-content", xe = "dodo-button-solid", eo = "dodo-button-rounded", oo = "dodo-button-text", to = "dodo-button-loading", so = "dodo-button-spinner", no = "dodo-button-active", lo = "dodo-button-small", ao = "dodo-button-square", ro = {
  Button: Xe,
  content: Ye,
  solid: xe,
  default: "dodo-button-default",
  rounded: eo,
  text: oo,
  loading: to,
  spinner: so,
  active: no,
  small: lo,
  square: ao
}, io = {
  $style: ro
}, J = /* @__PURE__ */ _(Qe, [["__cssModules", io]]), co = /* @__PURE__ */ C({
  __name: "Card",
  props: {
    hoverable: { type: Boolean },
    active: { type: Boolean },
    gap: {},
    padding: {}
  },
  setup(r) {
    const e = Y();
    return (o, s) => (d(), m("div", {
      class: p([
        "dodo-card",
        o.hoverable && "dodo-card--hoverable",
        o.active && "dodo-card--active",
        f(e).padding(o.padding),
        f(e).gap(o.gap)
      ])
    }, [
      h(o.$slots, "default")
    ], 2));
  }
}), Ie = Symbol("NavBarService"), uo = Symbol("DropdownService");
function Ea(r) {
  const e = b(0), o = b(0), s = new ResizeObserver(t);
  function t() {
    var a, l;
    e.value = ((a = r.value) == null ? void 0 : a.clientWidth) ?? 0, o.value = ((l = r.value) == null ? void 0 : l.clientHeight) ?? 0;
  }
  return Z(t), j(() => {
    s.disconnect(), r.value && s.observe(r.value), t();
  }), Q(() => {
    s.disconnect();
  }), { width: e, height: o, observer: s };
}
function Ee() {
  const o = b(window.innerWidth), s = b(window.innerHeight), t = M(() => o.value < 600), a = M(() => o.value >= 600 && o.value < 1200), l = M(() => o.value >= 1200);
  function u() {
    o.value = window.innerWidth, s.value = window.innerHeight;
  }
  return Z(() => {
    window.addEventListener("resize", u, { passive: !0 });
  }), Q(() => {
    window.removeEventListener("resize", u);
  }), {
    screenSmall: t,
    screenMedium: a,
    screenLarge: l
  };
}
function po(r, e) {
  const o = b(e), s = sessionStorage.getItem(r);
  return s && (o.value = JSON.parse(s)), W(o, (t) => {
    sessionStorage.setItem(r, JSON.stringify(t));
  }), o;
}
function mo(r) {
  const e = b(!1);
  return Z(async () => {
    const o = `font-${r.name}-${r.weight}`;
    let s = document.getElementById(o);
    if (s || (s = document.createElement("link"), s.setAttribute("href", r.href), s.setAttribute("rel", "stylesheet"), s.setAttribute("id", o), document.head.appendChild(s)), !document.fonts) {
      e.value = !0;
      return;
    }
    await document.fonts.ready, e.value = document.fonts.check(`${r.weight} 1em ${r.name}`);
  }), { isReady: e };
}
function Aa(r) {
  if (!r.match(/^#\w{6}$/))
    throw new Error("Invalid hex color");
  return r.match(/(\w\w)/g).map((e) => parseInt(e, 16)).slice(0, 3);
}
const Ae = Symbol(Fe.name);
function Fe(r) {
  const e = b(null), o = b(0), s = 1e3;
  function t() {
    e.value = null, o.value = Date.now() + s;
  }
  function a() {
    location.reload();
  }
  function l(u) {
    r.onError && r.onError(u) === !1 || !e.value && o.value < Date.now() && (console.error(u), e.value = u);
  }
  return { ignoreError: t, reloadPage: a, currentError: e, handleCrash: l };
}
function Fa(r) {
  return (e) => {
    var t;
    const o = Fe(r);
    e.provide(Ae, o);
    const { errorHandler: s } = e.config;
    e.config.errorHandler = (a, l, u) => {
      if (o.handleCrash(a), s)
        return s(a, l, u);
    }, (t = r.router) == null || t.onError((a) => {
      o.handleCrash(a);
    }), window.addEventListener("unhandledrejection", (a) => {
      o.handleCrash(a.reason);
    }), window.addEventListener("error", (a) => {
      o.handleCrash(a.error ?? a.message);
    });
  };
}
function vo() {
  return ie(Ae);
}
function Ta(r, e) {
  if (typeof ResizeObserver > "u")
    return {};
  const o = new ResizeObserver(() => e(r.value));
  return j(() => {
    r.value && o.observe(r.value);
  }), Q(() => {
    o.disconnect();
  }), { observer: o };
}
function fo(r) {
  const e = Symbol("ServiceKey");
  return { createAndProvide: () => {
    const t = r();
    return de(e, t), t;
  }, injectOptional: () => ie(e, void 0) };
}
function Y() {
  function r(i) {
    return `var(--dodo-spacing-${i})`;
  }
  function e(i) {
    return i ? `dodo-gap-${i}` : "";
  }
  function o(i) {
    return i ? `dodo-padding-${i}` : "";
  }
  function s(i) {
    return i ? `dodo-justify-${i}` : "";
  }
  function t(i) {
    return i ? `dodo-align-${i}` : "";
  }
  function a(i) {
    return i ? "dodo-wrap" : "";
  }
  function l(i) {
    return i ? "dodo-flex" : "";
  }
  function u(i) {
    return i ? "dodo-grow" : "";
  }
  return {
    gapValue: r,
    gap: e,
    padding: o,
    justify: s,
    align: t,
    wrap: a,
    flex: l,
    grow: u,
    theme: ve,
    toggleTheme: ho
  };
}
const be = b(), yo = localStorage.getItem("dodotheme"), me = b(yo), Te = b();
if (window.matchMedia) {
  const r = window.matchMedia("(prefers-color-scheme: dark)"), e = () => {
    Te.value = r.matches ? "dark" : "light";
  };
  r.addEventListener("change", e), e();
}
const $o = M(() => be.value === "auto" ? Te.value : be.value), ve = M(() => me.value || $o.value || "light");
function ho() {
  me.value = ve.value === "dark" ? "light" : "dark";
}
j(() => {
  localStorage.setItem("dodotheme", me.value ?? ""), document.body.setAttribute("data-dodotheme", ve.value ?? "");
});
class Na extends Error {
  constructor(o, s) {
    super(s);
    $e(this, "name", "ValidationError");
    this.field = o;
  }
}
function Ra(r) {
  const e = he(r), o = he({});
  W(e, () => a());
  async function s(n) {
    const c = e[n];
    if (c) {
      const $ = c.value, w = await u(n, $);
      if (w)
        return o[n] = String(w), !1;
    }
    return delete o[n], !0;
  }
  async function t(...n) {
    const c = n.length ? n : Object.keys(e);
    return (await Promise.all(c.map((w) => s(w)))).every((w) => w);
  }
  async function a() {
    return (await Promise.all(Object.keys(o).map((c) => s(c)))).every((c) => c);
  }
  function l() {
    for (const n in o)
      delete o[n];
  }
  async function u(n, c) {
    const $ = e[n], w = $.name ?? i(n);
    if ($.required && !c)
      return `${w} is required`;
    if ($.isEmail && c != null && (typeof c != "string" || !c.includes("@")))
      return `${w} is not valid`;
    if (typeof c == "string") {
      if ($.minLen != null && c.length < $.minLen)
        return `${w} must be at least ${$.minLen} characters`;
      if ($.maxLen != null && c.length > $.maxLen)
        return `${w} must be less than ${$.maxLen} characters`;
    }
    if ($.validators)
      for (const E of $.validators) {
        const B = await E(c, w);
        if (B)
          return B;
      }
  }
  function i(n) {
    return n.toString().replace(/_/g, " ").replace(/^./, (c) => c.toUpperCase()).replace(/[a-z][A-Z]/g, (c) => `${c[0]} ${c[1]}`);
  }
  return { errors: o, rules: e, validate: t, clearErrors: l };
}
const go = ["checked"], bo = /* @__PURE__ */ C({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean },
    indeterminate: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(r, { emit: e }) {
    const o = r, s = e;
    function t() {
      s("update:modelValue", o.indeterminate || !o.modelValue);
    }
    function a(l) {
      l.target.checked !== o.modelValue && t();
    }
    return (l, u) => (d(), m("span", {
      class: p([l.$style.Checkbox, l.modelValue && l.$style.checked]),
      onClick: te(t, ["stop"])
    }, [
      z(f(q), {
        name: l.indeterminate ? "indeterminate_check_box" : l.modelValue ? "check_box" : "check_box_outline_blank"
      }, null, 8, ["name"]),
      h(l.$slots, "default"),
      y("input", {
        type: "checkbox",
        checked: l.modelValue,
        onChange: a
      }, null, 40, go)
    ], 2));
  }
}), wo = "dodo-checkbox", ko = "dodo-checkbox-checked", Mo = {
  Checkbox: wo,
  checked: ko
}, Co = {
  $style: Mo
}, we = /* @__PURE__ */ _(bo, [["__cssModules", Co]]), Bo = /* @__PURE__ */ C({
  __name: "Chip",
  props: {
    color: {},
    variant: {}
  },
  setup(r) {
    const e = r, o = M(() => {
      let s = "";
      return e.color && (s += `--chip-color:var(--dodo-color-${e.color});`), s;
    });
    return (s, t) => (d(), S(ce(s.$attrs.onClick ? "button" : "div"), {
      class: p([s.$style.Chip, s.variant === "solid" && s.$style.solid]),
      style: O(o.value)
    }, {
      default: k(() => [
        h(s.$slots, "before"),
        y("div", {
          class: p(s.$style.text)
        }, [
          h(s.$slots, "default")
        ], 2),
        h(s.$slots, "after")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), _o = "dodo-chip", So = "dodo-chip-solid", Vo = "dodo-chip-text", zo = {
  Chip: _o,
  solid: So,
  text: Vo
}, Io = {
  $style: zo
}, Eo = /* @__PURE__ */ _(Bo, [["__cssModules", Io]]), ne = "Outlined", ke = "300", Ao = /* @__PURE__ */ C({
  __name: "Icon",
  props: {
    name: {},
    color: {},
    fill: { type: Boolean },
    small: {},
    large: {},
    size: {}
  },
  setup(r) {
    const e = r, o = b(), s = mo({
      weight: ke,
      name: `Material Symbols ${ne}`,
      href: `https://fonts.googleapis.com/css2?family=Material+Symbols+${ne}:wght,FILL@${ke},0..1`
    });
    return (t, a) => (d(), m("span", {
      ref_key: "el",
      ref: o,
      style: O([t.color ? `color: var(--dodo-color-${t.color});` : "", f(s).isReady ? "" : "visibility:hidden"]),
      class: p([
        t.$style.icon,
        "material-symbols-" + ne.toLowerCase(),
        e.size && t.$style[e.size],
        e.fill && t.$style.fill
      ])
    }, I(t.name), 7));
  }
}), Fo = "dodo-icon", To = "dodo-icon-fill", No = "dodo-icon-xs", Ro = "dodo-icon-s", Do = "dodo-icon-l", Lo = "dodo-icon-xl", Ho = {
  icon: Fo,
  fill: To,
  xs: No,
  s: Ro,
  l: Do,
  xl: Lo
}, Oo = {
  $style: Ho
}, q = /* @__PURE__ */ _(Ao, [["__cssModules", Oo]]), jo = /* @__PURE__ */ C({
  __name: "ChoiceChips",
  props: {
    options: {},
    modelValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    small: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(r, { emit: e }) {
    const o = r, s = e, t = M(() => o.multiple ? [o.modelValue].flat() : [o.modelValue]);
    function a(i, n) {
      return i.value === n;
    }
    function l(i) {
      return t.value.some((n) => a(i, n));
    }
    function u(i) {
      let n = i.value;
      l(i) && o.multiple ? n = t.value.filter(($) => !a(i, $)) : o.multiple && (n = [...t.value, i.value]), s("update:modelValue", n);
    }
    return (i, n) => (d(), m("div", {
      class: p([i.$style.Select, i.multiple && i.$style.multiple])
    }, [
      (d(!0), m(H, null, G(i.options, (c, $) => (d(), S(Eo, {
        key: c.label,
        color: l(c) ? "info" : void 0,
        variant: !i.multiple && l(c) ? "solid" : void 0,
        disabled: i.disabled,
        small: i.small,
        rounded: "",
        onClick: (w) => u(c)
      }, {
        default: k(() => [
          i.multiple && l(c) ? (d(), S(q, {
            key: 0,
            name: "check"
          })) : g("", !0),
          h(i.$slots, "default", {
            option: c,
            index: $
          }, () => [
            T(I(c.label || c.value), 1)
          ])
        ]),
        _: 2
      }, 1032, ["color", "variant", "disabled", "small", "onClick"]))), 128))
    ], 2));
  }
}), Wo = "dodo-choicechips-select", qo = {
  Select: Wo
}, Po = {
  $style: qo
}, Da = /* @__PURE__ */ _(jo, [["__cssModules", Po]]), Uo = /* @__PURE__ */ C({
  __name: "Column",
  props: {
    gap: {},
    padding: {},
    grow: { type: Boolean },
    justify: {},
    align: {},
    wrap: { type: Boolean },
    tag: {}
  },
  setup(r) {
    const e = Y();
    return (o, s) => (d(), S(ce(o.tag ?? "div"), {
      class: p([
        o.$style.el,
        f(e).gap(o.gap),
        f(e).padding(o.padding),
        f(e).align(o.align),
        f(e).padding(o.padding),
        f(e).wrap(o.wrap),
        f(e).grow(o.grow)
      ])
    }, {
      default: k(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Go = "dodo-column-el", Ko = {
  el: Go
}, Jo = {
  $style: Ko
}, D = /* @__PURE__ */ _(Uo, [["__cssModules", Jo]]), Zo = /* @__PURE__ */ y("h3", null, "Something went wrong", -1), Me = `
  An unexpected error occurred and the application may not function correctly until the page is reloaded.
  Any unsaved changes will be lost if you choose to reload the page.
`, La = /* @__PURE__ */ C({
  __name: "CrashDialog",
  setup(r) {
    const e = vo(), o = M(() => e.currentError.value), s = b(!1);
    return j(() => {
      s.value = !!o.value;
    }), (t, a) => (d(), S(f(Ct), { active: s.value }, {
      controls: k(() => [
        z(f(J), {
          variant: "text",
          onClick: f(e).ignoreError
        }, {
          default: k(() => [
            T("Ignore")
          ]),
          _: 1
        }, 8, ["onClick"]),
        z(f(J), {
          variant: "solid",
          color: "info",
          onClick: f(e).reloadPage
        }, {
          default: k(() => [
            T("Reload page")
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: k(() => [
        Zo,
        h(t.$slots, "body", {
          error: o.value,
          defaultText: Me
        }, () => [
          y("p", null, I(Me))
        ])
      ]),
      _: 3
    }, 8, ["active"]));
  }
}), Qo = {
  key: 0,
  style: { width: "0" },
  scope: "col"
}, Xo = ["onClick"], Yo = ["onClick"], xo = { key: 0 }, et = /* @__PURE__ */ y("td", { colspan: "999" }, "No results", -1), ot = [
  et
], tt = { colspan: "999" }, st = { key: 0 }, nt = /* @__PURE__ */ C({
  __name: "Datatable",
  props: {
    rows: {},
    columns: {},
    selection: {},
    rowClick: { type: Function },
    selectBy: {},
    stickyHeader: { type: Boolean },
    contentLoading: { type: Boolean },
    showFooter: { type: Boolean },
    showMore: { type: Function },
    sortValue: {},
    sortAsync: { type: Function }
  },
  emits: ["update:selection", "update:sortValue"],
  setup(r, { emit: e }) {
    const o = r, s = e, t = b(), a = b([]), l = b(!1);
    j(() => {
      t.value = o.sortValue;
    }), j(() => {
      a.value = o.selection ?? [];
    }), W(t, (v) => {
      s("update:sortValue", v);
    }), W(a, (v) => {
      s("update:selection", v);
    });
    const u = M(() => {
      var v;
      return (v = t.value) == null ? void 0 : v.startsWith("-");
    }), i = M(() => o.columns.filter((v) => !v.disabled)), n = M(() => !!o.selection), c = M(() => {
      const v = i.value.find(w);
      return o.sortAsync || !v ? o.rows : o.rows.slice().sort((A, V) => {
        const X = x(v, A), L = x(v, V), ye = typeof X == "number" && typeof L == "number" ? L - X : `${L}`.localeCompare(`${X}`);
        return u.value ? ye : -ye;
      });
    });
    function $(v) {
      if (w(v))
        return u.value ? "arrow_drop_up" : "arrow_drop_down";
    }
    function w(v) {
      var A;
      return ((A = t.value) == null ? void 0 : A.replace("-", "")) === v.sort;
    }
    function E(v) {
      return v.slot || v.name.trim().replace(/\W/g, "");
    }
    function B(v) {
      return !!v.sort;
    }
    function F(v) {
      return v.align ? `text-align:${v.align}` : "";
    }
    function P(v) {
      return v.width ? `width:${v.width}` : "";
    }
    async function N(v) {
      B(v) && (w(v) ? t.value = u.value ? void 0 : "-" + v.sort : t.value = v.sort, o.sortAsync && (l.value = !0, await o.sortAsync(t.value).finally(() => {
        l.value = !1;
      })));
    }
    function R(v) {
      return o.selectBy ? v[o.selectBy] : v;
    }
    function U(v) {
      const A = R(v);
      a.value.includes(A) ? a.value = a.value.filter((V) => V !== A) : a.value = a.value.concat(A);
    }
    function x(v, A) {
      return typeof v.value == "function" ? v.value(A) : typeof v.value == "string" ? A[v.value] : "";
    }
    function oe(v) {
      if (!n.value)
        return !1;
      const A = R(v);
      return a.value.includes(A);
    }
    const K = M(() => n.value ? o.rows.filter((v) => a.value.includes(R(v))) : []);
    function ee() {
      const v = K.value.length === o.rows.length;
      a.value = v ? [] : o.rows.map(R);
    }
    return (v, A) => (d(), m("div", {
      class: p([v.$style.Datatable, v.contentLoading && v.$style.loading])
    }, [
      y("table", null, [
        y("tbody", null, [
          y("tr", {
            class: p(v.stickyHeader && v.$style.stickyHeader)
          }, [
            n.value ? (d(), m("th", Qo, [
              z(f(we), {
                indeterminate: K.value.length > 0 && K.value.length < v.rows.length,
                "model-value": K.value.length > 0 && K.value.length === v.rows.length,
                "onUpdate:modelValue": ee
              }, null, 8, ["indeterminate", "model-value"])
            ])) : g("", !0),
            (d(!0), m(H, null, G(i.value, (V) => (d(), m("th", {
              key: V.name,
              scope: "col",
              class: p([B(V) ? v.$style.sortable : "", w(V) && v.$style.sortActive]),
              style: O([F(V), P(V)]),
              onClick: (X) => N(V)
            }, [
              y("span", {
                class: p(v.$style.colName)
              }, [
                y("span", null, [
                  h(v.$slots, `${E(V)}-header`, { column: V }, () => [
                    T(I(V.name), 1)
                  ])
                ]),
                $(V) ? (d(), S(f(q), {
                  key: 0,
                  name: $(V),
                  class: p(v.$style.sortIcon)
                }, null, 8, ["name", "class"])) : g("", !0)
              ], 2)
            ], 14, Xo))), 128))
          ], 2),
          (d(!0), m(H, null, G(c.value, (V, X) => (d(), m("tr", {
            key: X,
            class: p([v.rowClick && v.$style.clickableRow, oe(V) && v.$style.rowSelected]),
            onClick: (L) => v.rowClick && v.rowClick(V)
          }, [
            n.value ? (d(), m("td", xo, [
              z(f(we), {
                "model-value": oe(V),
                "onUpdate:modelValue": (L) => U(V)
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ])) : g("", !0),
            (d(!0), m(H, null, G(i.value, (L) => (d(), m("td", {
              key: L.name,
              class: p([]),
              style: O(F(L))
            }, [
              h(v.$slots, E(L), {
                row: V,
                column: L
              }, () => [
                T(I(x(L, V)), 1)
              ])
            ], 4))), 128))
          ], 10, Yo))), 128)),
          v.rows.length ? g("", !0) : (d(), m("tr", {
            key: 0,
            class: p(v.$style.noResults)
          }, ot, 2)),
          v.rows.length && v.showMore ? (d(), m("tr", {
            key: 1,
            class: p(v.$style.showMore)
          }, [
            y("td", tt, [
              z(f(J), {
                variant: "text",
                color: "info",
                onClick: v.showMore
              }, {
                default: k(() => [
                  T("Show more results")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ], 2)) : g("", !0),
          v.showFooter ? (d(), m("tr", {
            key: 2,
            class: p([v.$style.footer, v.stickyHeader && v.$style.stickyFooter])
          }, [
            n.value ? (d(), m("td", st)) : g("", !0),
            (d(!0), m(H, null, G(i.value, (V) => (d(), m("th", {
              key: V.name,
              style: O(F(V)),
              scope: "col"
            }, [
              h(v.$slots, `${E(V)}-footer`, { column: V })
            ], 4))), 128))
          ], 2)) : g("", !0)
        ])
      ])
    ], 2));
  }
}), lt = "dodo-datatable", at = "dodo-datatable-colname", rt = "dodo-datatable-sortable", it = "dodo-datatable-sorticon", dt = "dodo-datatable-sortactive", ct = "dodo-datatable-noresults", ut = "dodo-datatable-showmore", pt = "dodo-datatable-clickablerow", mt = "dodo-datatable-rowselected", vt = "dodo-datatable-stickyheader", ft = "dodo-datatable-stickyfooter", yt = "dodo-datatable-loading", $t = {
  Datatable: lt,
  colName: at,
  sortable: rt,
  sortIcon: it,
  sortActive: dt,
  noResults: ct,
  showMore: ut,
  clickableRow: pt,
  rowSelected: mt,
  stickyHeader: vt,
  stickyFooter: ft,
  loading: yt
}, ht = {
  $style: $t
}, Ha = /* @__PURE__ */ _(nt, [["__cssModules", ht]]), gt = /* @__PURE__ */ C({
  __name: "Dialog",
  props: {
    active: { type: Boolean }
  },
  setup(r) {
    const e = r, o = b();
    return j(() => {
      e.active && o.value && o.value.parentNode.appendChild(o.value);
    }), (s, t) => (d(), S(Be, { to: "body" }, [
      z(ae, { name: "Dialog" }, {
        default: k(() => [
          s.active ? (d(), m("div", {
            key: 0,
            ref_key: "el",
            ref: o,
            class: p([s.$style.Dialog])
          }, [
            y("div", {
              class: p(s.$style.window)
            }, [
              z(f(D), { padding: "m" }, {
                default: k(() => [
                  h(s.$slots, "default")
                ]),
                _: 3
              }),
              z(f(le), {
                padding: "m",
                justify: "end",
                gap: "s"
              }, {
                default: k(() => [
                  h(s.$slots, "controls")
                ]),
                _: 3
              })
            ], 2)
          ], 2)) : g("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), bt = "dodo-dialog", wt = "dodo-dialog-window", kt = {
  Dialog: bt,
  window: wt,
  "Dialog-enter-active": "dodo-dialog-dialog-enter-active",
  "Dialog-leave-active": "dodo-dialog-dialog-leave-active",
  "Dialog-enter-from": "dodo-dialog-dialog-enter-from",
  "Dialog-leave-to": "dodo-dialog-dialog-leave-to"
}, Mt = {
  $style: kt
}, Ct = /* @__PURE__ */ _(gt, [["__cssModules", Mt]]), Bt = /* @__PURE__ */ C({
  __name: "Dropdown",
  props: {
    modelValue: { type: Boolean },
    padding: {},
    gap: {},
    disabled: { type: Boolean },
    trigger: {}
  },
  emits: ["update:modelValue"],
  setup(r, { emit: e }) {
    const o = r, s = e, t = b(!1), a = b(""), l = b(), u = b();
    W(
      () => o.modelValue,
      () => {
        i(!!o.modelValue);
      },
      { immediate: !0 }
    ), Q(() => {
      i(!1);
    });
    function i(B) {
      t.value !== B && (o.disabled && B || (t.value = B, s("update:modelValue", B), B ? _e().then(() => {
        E(), window.addEventListener("click", w, { passive: !0, capture: !0 });
      }) : window.removeEventListener("click", w, { capture: !0 })));
    }
    function n(B) {
      o.trigger !== "hover" && (i(!t.value), B.preventDefault());
    }
    function c() {
      o.trigger === "hover" && i(!0);
    }
    function $(B) {
      var R, U;
      if (!t.value || o.trigger !== "hover")
        return;
      const F = B.relatedTarget, P = (R = u.value) == null ? void 0 : R.contains(F), N = (U = l.value) == null ? void 0 : U.contains(F);
      P || N || i(!1);
    }
    function w(B) {
      var F, P;
      if (B.target) {
        const N = (F = u.value) == null ? void 0 : F.contains(B.target), R = (P = l.value) == null ? void 0 : P.contains(B.target);
        if (N || R)
          return;
      }
      i(!1);
    }
    function E() {
      const F = l.value;
      if (!F)
        return;
      const P = F.scrollWidth, N = u.value.getBoundingClientRect(), R = window.innerWidth, U = window.innerHeight, x = N.bottom + 300 + 16 > U, oe = Math.max(16, Math.min(N.left, R - P - 16)), K = Math.min(600, R - 16 * 2);
      let ee = `left: ${oe}px; max-width:${K}px;`;
      x ? ee += `bottom: ${U - N.top}px; max-height: ${N.top - 16}px;` : ee += `top: ${N.bottom}px; max-height: ${U - N.bottom - 16}px;`, a.value = ee, t.value && requestAnimationFrame(E);
    }
    return de(uo, { toggle: i }), (B, F) => (d(), m(H, null, [
      y("div", re({
        ref_key: "el",
        ref: u,
        class: [B.$style.trigger, B.disabled && B.$style.disabled]
      }, B.$attrs, {
        onClick: n,
        onMouseover: c,
        onMouseleave: $
      }), [
        h(B.$slots, "default", { isActive: t.value })
      ], 16),
      t.value ? (d(), m("div", {
        key: 0,
        class: p([B.$style.container]),
        style: O(a.value)
      }, [
        y("div", {
          ref_key: "content",
          ref: l,
          class: p(B.$style.content),
          onMouseleave: $
        }, [
          z(f(D), {
            padding: B.padding ?? "s",
            gap: B.gap ?? "s"
          }, {
            default: k(() => [
              h(B.$slots, "dropdown", { toggle: i })
            ]),
            _: 3
          }, 8, ["padding", "gap"])
        ], 34)
      ], 6)) : g("", !0)
    ], 64));
  }
}), _t = "dodo-dropdown-trigger", St = "dodo-dropdown-disabled", Vt = "dodo-dropdown-container", zt = "dodo-dropdown-content", It = {
  trigger: _t,
  disabled: St,
  container: Vt,
  content: zt
}, Et = {
  $style: It
}, At = /* @__PURE__ */ _(Bt, [["__cssModules", Et]]), Ft = /* @__PURE__ */ C({
  __name: "Field",
  props: {
    disabled: { type: Boolean },
    button: { type: Boolean }
  },
  setup(r) {
    return (e, o) => (d(), m("div", {
      class: p([e.$style.Field, e.disabled && e.$style.disabled, e.button && e.$style.button])
    }, [
      h(e.$slots, "before"),
      y("div", {
        class: p(e.$style.inner)
      }, [
        h(e.$slots, "default")
      ], 2),
      h(e.$slots, "after")
    ], 2));
  }
}), Tt = "dodo-field", Nt = "dodo-field-button", Rt = "dodo-field-inner", Dt = "dodo-field-disabled", Lt = {
  Field: Tt,
  button: Nt,
  inner: Rt,
  disabled: Dt
}, Ht = {
  $style: Lt
}, Oa = /* @__PURE__ */ _(Ft, [["__cssModules", Ht]]), Ot = /* @__PURE__ */ C({
  __name: "FluidGrid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean },
    alignItems: {}
  },
  setup(r) {
    const e = r, o = Y(), s = b(), t = b(99999);
    let a = null;
    const l = new ResizeObserver(() => {
      a && clearTimeout(a), a = setTimeout(() => {
        t.value = s.value.clientWidth;
      }, 50);
    });
    Z(() => {
      l.observe(s.value);
    }), Oe(() => {
      l.disconnect();
    });
    const u = M(() => e.columnSize >= t.value), i = M(() => {
      let n = `--fluidgrid-size:${e.columnSize}px;`;
      return e.autoFill && (n += "--fluidgrid-mode:auto-fill;"), e.gap && (n += `gap:${o.gapValue(e.gap)};`), e.padding && (n += `padding:${o.gapValue(e.padding)};`), n;
    });
    return (n, c) => (d(), m("div", {
      ref_key: "el",
      ref: s,
      class: p([n.$style.FluidGrid, u.value && n.$style.oneColumn]),
      style: O(i.value)
    }, [
      h(n.$slots, "default")
    ], 6));
  }
}), jt = "dodo-fluidgrid", Wt = "dodo-fluidgrid-onecolumn", qt = {
  FluidGrid: jt,
  oneColumn: Wt
}, Pt = {
  $style: qt
}, ja = /* @__PURE__ */ _(Ot, [["__cssModules", Pt]]), Ut = /* @__PURE__ */ C({
  __name: "Form",
  props: {
    gap: {}
  },
  emits: ["submit"],
  setup(r, { emit: e }) {
    const o = e, s = Y();
    function t() {
      o("submit");
    }
    return (a, l) => (d(), m("form", {
      class: p([a.$style.form, f(s).gap(a.gap)]),
      onSubmit: te(t, ["prevent"])
    }, [
      h(a.$slots, "default")
    ], 34));
  }
}), Gt = "dodo-form", Kt = {
  form: Gt
}, Jt = {
  $style: Kt
}, Wa = /* @__PURE__ */ _(Ut, [["__cssModules", Jt]]), Zt = ["data-itemerror"], Qt = ["for"], Xt = /* @__PURE__ */ C({
  __name: "FormItem",
  props: {
    label: {},
    error: {},
    description: {},
    for: {},
    optional: { type: Boolean }
  },
  setup(r) {
    const e = r, o = se(), s = Se();
    return Z(() => {
      if (!o.default)
        throw new Error("FormEntry requires a default slot");
    }), (t, a) => {
      var l;
      return d(), m("div", {
        class: p([t.$style.FormEntry, t.error && t.$style.hasError]),
        "data-itemerror": t.error
      }, [
        t.label ? (d(), m("div", {
          key: 0,
          class: p(t.$style.labelRow)
        }, [
          y("label", {
            class: p(t.$style.label),
            for: e.for
          }, I(t.label), 11, Qt),
          t.optional ? (d(), m("span", {
            key: 0,
            class: p(t.$style.optional)
          }, "Optional", 2)) : g("", !0)
        ], 2)) : g("", !0),
        h(t.$slots, "default", {
          error: t.error,
          entryId: e.for ? e.for : `form-item-${(l = f(s)) == null ? void 0 : l.uid}`
        }),
        t.error ? (d(), m("div", {
          key: 1,
          class: p(t.$style.error)
        }, [
          y("span", null, I(t.error), 1)
        ], 2)) : g("", !0),
        t.description ? (d(), m("div", {
          key: 2,
          class: p(t.$style.description)
        }, I(t.description), 3)) : g("", !0)
      ], 10, Zt);
    };
  }
}), Yt = "dodo-formitem-formentry", xt = "dodo-formitem-label", es = "dodo-formitem-optional", os = "dodo-formitem-labelrow", ts = "dodo-formitem-description", ss = "dodo-formitem-haserror", ns = "dodo-formitem-error", ls = {
  FormEntry: Yt,
  label: xt,
  optional: es,
  labelRow: os,
  description: ts,
  hasError: ss,
  error: ns
}, as = {
  $style: ls
}, rs = /* @__PURE__ */ _(Xt, [["__cssModules", as]]), is = /* @__PURE__ */ C({
  __name: "Grid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean }
  },
  setup(r) {
    const e = Y();
    return (o, s) => (d(), m("div", {
      class: p([
        o.$style.component,
        o.$style[`col-${o.columnSize}`],
        o.autoFill && o.$style.autoFill,
        f(e).gap(o.gap),
        f(e).padding(o.padding)
      ])
    }, [
      h(o.$slots, "default")
    ], 2));
  }
}), ds = "dodo-grid-component", cs = "dodo-grid-autofill", us = {
  component: ds,
  autoFill: cs,
  "col-xs": "dodo-grid-col-xs",
  "col-s": "dodo-grid-col-s",
  "col-m": "dodo-grid-col-m",
  "col-l": "dodo-grid-col-l"
}, ps = {
  $style: us
}, qa = /* @__PURE__ */ _(is, [["__cssModules", ps]]), ms = {
  key: 0,
  class: "dodo-nowrap dodo-fade-secondary"
}, vs = /* @__PURE__ */ C({
  __name: "MenuItem",
  props: {
    active: { type: Boolean },
    emphasize: { type: Boolean },
    separator: { type: Boolean }
  },
  setup(r) {
    return (e, o) => (d(), m(H, null, [
      e.separator ? (d(), m("hr", {
        key: 0,
        class: p(e.$style.separator)
      }, null, 2)) : g("", !0),
      y("div", re(e.$attrs, {
        class: [e.$style.DropdownItem, e.active && e.$style.active, e.emphasize && e.$style.emphasize]
      }), [
        h(e.$slots, "before"),
        z(f(D), {
          gap: "0",
          style: { flex: "1" }
        }, {
          default: k(() => [
            y("p", {
              class: p([e.$style.text, "dodo-nowrap"])
            }, [
              h(e.$slots, "default")
            ], 2),
            e.$slots["text-secondary"] ? (d(), m("p", ms, [
              h(e.$slots, "text-secondary")
            ])) : g("", !0)
          ]),
          _: 3
        }),
        h(e.$slots, "after")
      ], 16)
    ], 64));
  }
}), fs = "dodo-menuitem-dropdownitem", ys = "dodo-menuitem-active", $s = "dodo-menuitem-emphasize", hs = "dodo-menuitem-text", gs = "dodo-menuitem-separator", bs = {
  DropdownItem: fs,
  active: ys,
  emphasize: $s,
  text: hs,
  separator: gs
}, ws = {
  $style: bs
}, Pa = /* @__PURE__ */ _(vs, [["__cssModules", ws]]), ks = /* @__PURE__ */ C({
  __name: "Modal",
  props: {
    open: { type: Boolean },
    size: {},
    padding: {},
    gap: {}
  },
  emits: ["close"],
  setup(r, { emit: e }) {
    const o = r, s = e, t = b();
    j(() => {
      var n;
      (n = t.value) == null || n.showModal();
    });
    const a = M(() => o.open);
    W(a, (n) => {
      if (n) {
        const c = window.innerWidth - document.body.clientWidth;
        document.body.style.setProperty("padding-right", `${c}px`), document.body.style.setProperty("overflow", "hidden");
      }
    });
    function l(n) {
      const c = t.value;
      n.target === c && u();
    }
    function u() {
      s("close");
    }
    async function i() {
      document.body.style.removeProperty("padding-right"), document.body.style.removeProperty("overflow");
    }
    return (n, c) => (d(), S(ae, {
      appear: "",
      "enter-from-class": n.$style.enter,
      "leave-to-class": n.$style.enter,
      onAfterLeave: i
    }, {
      default: k(() => [
        a.value ? (d(), m("dialog", {
          key: 0,
          ref_key: "dialogElem",
          ref: t,
          class: p(n.$style.background),
          onClick: l
        }, [
          z(co, {
            class: p([n.$style.modal, n.size && n.$style[n.size]]),
            padding: n.padding,
            gap: n.gap
          }, {
            default: k(() => [
              h(n.$slots, "default", { close: u }, () => [
                T("Modal slot")
              ])
            ]),
            _: 3
          }, 8, ["class", "padding", "gap"])
        ], 2)) : g("", !0)
      ]),
      _: 3
    }, 8, ["enter-from-class", "leave-to-class"]));
  }
}), Ms = "dodo-modal-background", Cs = "dodo-modal-enter", Bs = "dodo-modal", _s = "dodo-modal-s", Ss = "dodo-modal-l", Vs = {
  background: Ms,
  enter: Cs,
  modal: Bs,
  S: _s,
  L: Ss
}, zs = {
  $style: Vs
}, Ua = /* @__PURE__ */ _(ks, [["__cssModules", zs]]), Is = /* @__PURE__ */ C({
  __name: "NavBarItem",
  props: {
    text: {},
    link: {},
    textSecondary: {},
    icon: {},
    active: { type: Boolean },
    important: { type: Boolean }
  },
  setup(r) {
    const e = r, o = se(), s = b(), t = b(!1);
    Z(() => {
      t.value = !!s.value.closest("[data-mobile-nav]");
    });
    const a = ie(Ie), l = M(() => a == null ? void 0 : a.collapsed.value), u = M(() => a == null ? void 0 : a.renderMobile.value), i = M(() => u.value || !l.value);
    async function n(c) {
      a && !o.submenu && (a.mobileToggle.value = !1), e.link && await e.link.navigate();
    }
    return (c, $) => (d(), S(f(fe), {
      text: c.text,
      disabled: i.value,
      side: "right"
    }, {
      default: k(() => [
        (d(), S(ce(c.$slots.submenu ? f(At) : "div"), null, {
          dropdown: k(() => [
            h(c.$slots, "submenu")
          ]),
          default: k(() => {
            var w;
            return [
              y("div", {
                ref_key: "el",
                ref: s,
                class: p([
                  c.$style.NavBarItem,
                  (c.active || ((w = c.link) == null ? void 0 : w.isActive.value)) && c.$style.active,
                  c.important && c.$style.important,
                  l.value && c.$style.collapsed
                ]),
                onClick: n
              }, [
                c.icon || c.$slots.icon ? (d(), m("div", {
                  key: 0,
                  class: p(c.$style.icon)
                }, [
                  h(c.$slots, "icon", {}, () => [
                    z(f(q), {
                      name: c.icon
                    }, null, 8, ["name"])
                  ])
                ], 2)) : g("", !0),
                y("div", {
                  class: p(c.$style.textwrap)
                }, [
                  y("p", {
                    class: p([c.$style.text, "dodo-nowrap"]),
                    color: "background"
                  }, I(c.text), 3),
                  c.textSecondary ? (d(), m("p", {
                    key: 0,
                    class: p([c.$style.secondary, "dodo-nowrap"]),
                    color: "background"
                  }, I(c.textSecondary), 3)) : g("", !0)
                ], 2)
              ], 2)
            ];
          }),
          _: 3
        }))
      ]),
      _: 3
    }, 8, ["text", "disabled"]));
  }
}), Es = "dodo-navbaritem", As = "dodo-navbaritem-active", Fs = "dodo-navbaritem-important", Ts = "dodo-navbaritem-textwrap", Ns = "dodo-navbaritem-icon", Rs = "dodo-navbaritem-text", Ds = "dodo-navbaritem-secondary", Ls = {
  NavBarItem: Es,
  active: As,
  important: Fs,
  textwrap: Ts,
  icon: Ns,
  text: Rs,
  secondary: Ds
}, Hs = {
  $style: Ls
}, Ce = /* @__PURE__ */ _(Is, [["__cssModules", Hs]]), Os = { style: { "margin-right": "8px" } }, js = /* @__PURE__ */ C({
  __name: "NavBar",
  props: {
    mobile: { type: Boolean }
  },
  setup(r) {
    const e = r, { screenLarge: o } = Ee(), s = po("NavBar-collapse", null), t = b(!1), a = M(() => e.mobile || !o.value);
    de(Ie, { collapsed: s, renderMobile: a, mobileToggle: t });
    function l() {
      a.value && (t.value = !1);
    }
    return (u, i) => (d(), m("div", {
      class: p([
        u.$style.root,
        f(s) && u.$style.collapsed,
        t.value && u.$style.mobileToggle,
        a.value && u.$style.mobileMenu
      ]),
      onClick: te(l, ["self"])
    }, [
      t.value ? (d(), m("div", {
        key: 0,
        class: p(u.$style.backdrop),
        onClick: i[0] || (i[0] = (n) => t.value = !1)
      }, null, 2)) : g("", !0),
      y("div", {
        class: p(u.$style.NavBar)
      }, [
        u.$slots["navbar-header"] ? (d(), m("div", {
          key: 0,
          class: p(u.$style.header)
        }, [
          y("div", null, [
            h(u.$slots, "navbar-header")
          ]),
          y("div", Os, [
            a.value ? (d(), S(f(J), {
              key: 0,
              variant: "text",
              square: "",
              color: "background",
              onClick: i[1] || (i[1] = (n) => t.value = !1)
            }, {
              default: k(() => [
                z(f(q), { name: "close" })
              ]),
              _: 1
            })) : g("", !0)
          ])
        ], 2)) : g("", !0),
        y("div", {
          class: p(u.$style.middle)
        }, [
          h(u.$slots, "default")
        ], 2),
        u.$slots["navbar-footer"] ? (d(), m("div", {
          key: 1,
          class: p(u.$style.footer)
        }, [
          h(u.$slots, "navbar-footer"),
          a.value ? g("", !0) : (d(), S(Ce, {
            key: 0,
            text: f(s) ? "Expand" : "Collapse",
            icon: f(s) ? "last_page" : "first_page",
            onClick: i[2] || (i[2] = (n) => s.value = !f(s))
          }, null, 8, ["text", "icon"]))
        ], 2)) : g("", !0)
      ], 2),
      y("div", {
        class: p(u.$style.wrapMobile)
      }, [
        u.$slots.main ? (d(), S(f(D), {
          key: 0,
          class: p(u.$style.main)
        }, {
          default: k(() => [
            h(u.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : g("", !0),
        a.value ? (d(), m("div", {
          key: 1,
          class: p(u.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          h(u.$slots, "default", { inMobileBar: !0 }),
          h(u.$slots, "navbar-footer", { inMobileBar: !0 }),
          z(Ce, {
            text: "Menu",
            icon: "menu",
            onClick: i[3] || (i[3] = (n) => t.value = !t.value)
          })
        ], 2)) : g("", !0)
      ], 2)
    ], 2));
  }
}), Ws = "dodo-navbar-root", qs = "dodo-navbar", Ps = "dodo-navbar-collapsed", Us = "dodo-navbar-header", Gs = "dodo-navbar-middle", Ks = "dodo-navbar-footer", Js = "dodo-navbar-wrapmobile", Zs = "dodo-navbar-main", Qs = "dodo-navbar-backdrop", Xs = "dodo-navbar-mobilemenu", Ys = "dodo-navbar-mobiletoggle", xs = "dodo-navbar-mobilenav", en = {
  root: Ws,
  NavBar: qs,
  collapsed: Ps,
  header: Us,
  middle: Gs,
  footer: Ks,
  wrapMobile: Js,
  main: Zs,
  backdrop: Qs,
  mobileMenu: Xs,
  mobileToggle: Ys,
  mobileNav: xs
}, on = {
  $style: en
}, Ga = /* @__PURE__ */ _(js, [["__cssModules", on]]), Ne = fo(() => {
  const r = b([]), e = b(""), o = b([]), s = b(!1);
  return W(r, () => {
    s.value = !1;
  }), { headerText: e, activeItems: r, expandedMenu: o, mobileToggle: s };
}), tn = (r) => {
  const e = Ne.injectOptional(), o = Se(), s = (n) => n ? [n.uid, ...s(n.parent)] : [], t = (n) => {
    !n || !e || (e.activeItems.value = s(o), e.headerText.value = r.text.value);
  }, a = M(() => e == null ? void 0 : e.headerText.value), l = () => {
    !o || !e || (e.expandedMenu.value.includes(o.uid) ? e.expandedMenu.value = [] : e.expandedMenu.value = s(o));
  }, u = M(() => !o || !e ? !1 : e.activeItems.value.includes(o.uid)), i = M(() => !o || !e ? !1 : e.expandedMenu.value.length ? e.expandedMenu.value.includes(o.uid) : e.activeItems.value.includes(o.uid));
  return W(r.active, () => t(r.active.value), { immediate: !0 }), Q(() => t(!1)), j(() => {
    a.value && (document.title = a.value);
  }), { showAsActive: u, isExpanded: i, toggleExpand: l, headerText: a };
}, sn = /* @__PURE__ */ C({
  __name: "NavBarNew",
  setup(r) {
    const { headerText: e, mobileToggle: o } = Ne.createAndProvide(), { screenLarge: s } = Ee(), t = M(() => !s.value);
    function a() {
      o.value = !1;
    }
    return (l, u) => (d(), m("div", {
      class: p([l.$style.root, f(o) && l.$style.mobileToggle, t.value && l.$style.mobileMenu]),
      onClick: te(a, ["self"])
    }, [
      f(o) ? (d(), m("div", {
        key: 0,
        class: p(l.$style.backdrop),
        onClick: u[0] || (u[0] = (i) => o.value = !1)
      }, null, 2)) : g("", !0),
      y("div", {
        class: p(l.$style.NavBar)
      }, [
        y("div", {
          class: p(l.$style.middle)
        }, [
          h(l.$slots, "default")
        ], 2),
        l.$slots["navbar-footer"] ? (d(), m("div", {
          key: 0,
          class: p(l.$style.footer)
        }, [
          h(l.$slots, "navbar-footer")
        ], 2)) : g("", !0)
      ], 2),
      y("div", {
        class: p(l.$style.wrapMobile)
      }, [
        t.value ? (d(), m("div", {
          key: 0,
          class: p(l.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          y("h5", null, I(f(e)), 1),
          z(f(fe), { text: "Toggle menu" }, {
            default: k(() => [
              y("div", {
                class: p(l.$style.menuButton)
              }, [
                z(f(q), {
                  name: "menu",
                  onClick: u[1] || (u[1] = (i) => o.value = !f(o))
                })
              ], 2)
            ]),
            _: 1
          })
        ], 2)) : g("", !0),
        l.$slots.main ? (d(), S(f(D), {
          key: 1,
          class: p(l.$style.main)
        }, {
          default: k(() => [
            h(l.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : g("", !0)
      ], 2)
    ], 2));
  }
}), nn = "dodo-navbarnew-root", ln = "dodo-navbarnew-navbar", an = "dodo-navbarnew-middle", rn = "dodo-navbarnew-footer", dn = "dodo-navbarnew-wrapmobile", cn = "dodo-navbarnew-main", un = "dodo-navbarnew-backdrop", pn = "dodo-navbarnew-menubutton", mn = "dodo-navbarnew-mobilemenu", vn = "dodo-navbarnew-mobiletoggle", fn = "dodo-navbarnew-mobilenav", yn = {
  root: nn,
  NavBar: ln,
  middle: an,
  footer: rn,
  wrapMobile: dn,
  main: cn,
  backdrop: un,
  menuButton: pn,
  mobileMenu: mn,
  mobileToggle: vn,
  mobileNav: fn
}, $n = {
  $style: yn
}, Ka = /* @__PURE__ */ _(sn, [["__cssModules", $n]]), hn = ["href"], gn = { key: 0 }, bn = /* @__PURE__ */ C({
  __name: "NavItem",
  props: {
    link: {},
    text: {},
    textSecondary: {},
    tooltipText: {},
    icon: {},
    important: { type: Boolean }
  },
  setup(r) {
    const e = r, o = M(() => e.link ? f(e.link.isActive) : !1), s = M(() => e.text), { isExpanded: t, showAsActive: a, toggleExpand: l } = tn({ text: s, active: o }), u = se();
    async function i(n) {
      u.submenu && l(), e.link && (await e.link.navigate(), n.preventDefault());
    }
    return (n, c) => (d(), m("div", {
      class: p([n.$style.el])
    }, [
      z(f(fe), {
        text: n.tooltipText,
        side: "right"
      }, {
        default: k(() => {
          var $;
          return [
            y("a", {
              class: p([n.$style.link, f(a) && n.$style.active, n.important && n.$style.important]),
              href: f(($ = n.link) == null ? void 0 : $.href),
              onClick: i
            }, [
              y("div", {
                class: p(n.$style.icon)
              }, [
                h(n.$slots, "icon", {}, () => [
                  n.icon ? (d(), S(f(q), {
                    key: 0,
                    name: n.icon
                  }, null, 8, ["name"])) : g("", !0)
                ])
              ], 2),
              y("div", {
                class: p(n.$style.textwrap)
              }, [
                y("p", {
                  class: p([n.$style.text, "dodo-nowrap"])
                }, I(s.value), 3),
                n.textSecondary ? (d(), m("p", {
                  key: 0,
                  class: p([n.$style.secondary, "dodo-nowrap"])
                }, I(n.textSecondary), 3)) : g("", !0)
              ], 2),
              f(u).submenu ? (d(), m("div", gn, [
                z(f(q), {
                  name: f(t) ? "expand_less" : "expand_more",
                  size: "s",
                  style: { margin: "0 -0.25em" }
                }, null, 8, ["name"])
              ])) : g("", !0)
            ], 10, hn)
          ];
        }),
        _: 3
      }, 8, ["text"]),
      n.$slots.submenu ? (d(), m("div", {
        key: 0,
        class: p([n.$style.submenu, f(t) && n.$style.expanded])
      }, [
        h(n.$slots, "submenu")
      ], 2)) : g("", !0)
    ], 2));
  }
}), wn = "dodo-navitem-el", kn = "dodo-navitem-link", Mn = "dodo-navitem-submenu", Cn = "dodo-navitem-expanded", Bn = "dodo-navitem-active", _n = "dodo-navitem-important", Sn = "dodo-navitem-textwrap", Vn = "dodo-navitem-icon", zn = "dodo-navitem-text", In = "dodo-navitem-secondary", En = {
  el: wn,
  link: kn,
  submenu: Mn,
  expanded: Cn,
  active: Bn,
  important: _n,
  textwrap: Sn,
  icon: Vn,
  text: zn,
  secondary: In
}, An = {
  $style: En
}, Ja = /* @__PURE__ */ _(bn, [["__cssModules", An]]), Fn = /* @__PURE__ */ C({
  __name: "Row",
  props: {
    gap: {},
    padding: {},
    justify: {},
    align: {},
    wrap: { type: Boolean },
    grow: { type: Boolean }
  },
  setup(r) {
    const e = Y();
    return (o, s) => (d(), m("div", {
      class: p([
        o.$style.el,
        f(e).gap(o.gap),
        f(e).padding(o.padding),
        f(e).align(o.align),
        f(e).justify(o.justify),
        f(e).wrap(o.wrap),
        f(e).grow(o.grow)
      ])
    }, [
      h(o.$slots, "default")
    ], 2));
  }
}), Tn = "dodo-row-el", Nn = {
  el: Tn
}, Rn = {
  $style: Nn
}, le = /* @__PURE__ */ _(Fn, [["__cssModules", Rn]]), Dn = /* @__PURE__ */ C({
  __name: "ScrollContainer",
  setup(r) {
    const e = M(() => "");
    return (o, s) => (d(), m("div", {
      class: p([o.$style.ScrollContainer]),
      style: O(e.value)
    }, [
      h(o.$slots, "default")
    ], 6));
  }
}), Ln = "dodo-scrollcontainer", Hn = {
  ScrollContainer: Ln
}, On = {
  $style: Hn
}, Za = /* @__PURE__ */ _(Dn, [["__cssModules", On]]), jn = ["id", "disabled"], Wn = ["value"], qn = /* @__PURE__ */ C({
  __name: "SimpleSelect",
  props: {
    modelValue: {},
    options: {},
    id: {},
    placeholder: {},
    disabled: { type: Boolean },
    name: {},
    autofocus: { type: Boolean },
    label: {},
    error: {},
    description: {},
    optional: { type: Boolean },
    autocomplete: {}
  },
  emits: ["update:modelValue"],
  setup(r, { emit: e }) {
    const o = r, s = e, t = M({
      get: () => o.modelValue,
      set: (a) => s("update:modelValue", a)
    });
    return (a, l) => (d(), S(rs, {
      class: p(a.error && a.$style.error),
      label: a.label,
      error: a.error,
      description: a.description,
      optional: a.optional,
      for: a.id ?? void 0
    }, {
      default: k(({ entryId: u }) => [
        y("div", {
          class: p(a.$style.select)
        }, [
          ue(y("select", {
            id: a.id ?? u,
            "onUpdate:modelValue": l[0] || (l[0] = (i) => t.value = i),
            disabled: a.disabled,
            class: p(["dodo-formfield"])
          }, [
            (d(!0), m(H, null, G(a.options, (i) => (d(), m("option", {
              key: i.label,
              value: i.value
            }, I(i.label), 9, Wn))), 128))
          ], 8, jn), [
            [je, t.value]
          ]),
          y("span", {
            class: p(a.$style.icon)
          }, [
            z(q, { name: "unfold_more" })
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["class", "label", "error", "description", "optional", "for"]));
  }
}), Pn = "dodo-simpleselect-select", Un = "dodo-simpleselect-icon", Gn = "dodo-simpleselect-error", Kn = {
  select: Pn,
  icon: Un,
  error: Gn
}, Jn = {
  $style: Kn
}, Qa = /* @__PURE__ */ _(qn, [["__cssModules", Jn]]), Zn = {
  key: 0,
  viewBox: "0 0 48 48"
}, Qn = /* @__PURE__ */ pe('<clipPath id="g"><path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path></clipPath><g clip-path="url(#g)"><path fill="#FBBC05" d="M0 37V11l17 13z"></path><path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path><path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path><path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path></g>', 2), Xn = [
  Qn
], Yn = {
  key: 1,
  viewBox: "0 0 248 204"
}, xn = /* @__PURE__ */ y("path", {
  id: "white_background",
  fill: "#1D9BF0",
  d: "M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
}, null, -1), el = [
  xn
], ol = {
  key: 2,
  viewBox: "60 60 140 140"
}, tl = /* @__PURE__ */ pe('<path fill="#E01E5A" d="M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"></path><path fill="#E01E5A" d="M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9V151.2z"></path><path fill="#36C5F0" d="M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"></path><path fill="#36C5F0" d="M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9H118.8z"></path><path fill="#2EB67D" d="M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"></path><path fill="#2EB67D" d="M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9V118.8z"></path><path fill="#ECB22E" d="M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"></path><path fill="#ECB22E" d="M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9H151.2z"></path>', 8), sl = [
  tl
], nl = {
  key: 3,
  viewBox: "2 2 46 46"
}, ll = /* @__PURE__ */ y("path", { d: "M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" }, null, -1), al = [
  ll
], rl = {
  key: 4,
  viewBox: "0 0 14222 14222"
}, il = /* @__PURE__ */ y("circle", {
  cx: "7111",
  cy: "7112",
  r: "7111",
  fill: "#1977f3"
}, null, -1), dl = /* @__PURE__ */ y("path", {
  d: "M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z",
  fill: "#fff"
}, null, -1), cl = [
  il,
  dl
], ul = {
  key: 5,
  viewBox: "0 0 24 24"
}, pl = /* @__PURE__ */ y("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }, null, -1), ml = [
  pl
], vl = {
  key: 6,
  viewBox: "6 6 36 36"
}, fl = /* @__PURE__ */ y("path", {
  fill: "#0288D1",
  d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
}, null, -1), yl = /* @__PURE__ */ y("path", {
  fill: "#FFF",
  d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
}, null, -1), $l = [
  fl,
  yl
], hl = {
  key: 7,
  viewBox: "10 10 160 160"
}, gl = /* @__PURE__ */ pe('<defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"></stop><stop offset="1" stop-color="#23b33a"></stop></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531"></feGaussianBlur></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"></path><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"></path><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"></path><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"></path><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"></path>', 6), bl = [
  gl
], wl = /* @__PURE__ */ C({
  __name: "SocialIcon",
  props: {
    name: {},
    white: { type: Boolean },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(r) {
    return (e, o) => (d(), m("span", {
      class: p([e.$style.SocialIcon, e.small && e.$style.small, e.large && e.$style.large, e.white && e.$style.white])
    }, [
      e.name === "google" ? (d(), m("svg", Zn, Xn)) : e.name === "twitter" ? (d(), m("svg", Yn, el)) : e.name === "slack" ? (d(), m("svg", ol, sl)) : e.white && e.name === "facebook" ? (d(), m("svg", nl, al)) : e.name === "facebook" ? (d(), m("svg", rl, cl)) : e.white && e.name === "linkedin" ? (d(), m("svg", ul, ml)) : e.name === "linkedin" ? (d(), m("svg", vl, $l)) : e.name === "whatsapp" ? (d(), m("svg", hl, bl)) : g("", !0)
    ], 2));
  }
}), kl = "dodo-socialicon", Ml = "dodo-socialicon-white", Cl = "dodo-socialicon-small", Bl = "dodo-socialicon-large", _l = {
  SocialIcon: kl,
  white: Ml,
  small: Cl,
  large: Bl
}, Sl = {
  $style: _l
}, Xa = /* @__PURE__ */ _(wl, [["__cssModules", Sl]]), Vl = /* @__PURE__ */ y("path", {
  stroke: "currentColor",
  fill: "none",
  d: "M 9 1 A 8 8 0 0 1 17 9",
  "stroke-width": "2"
}, null, -1), zl = /* @__PURE__ */ y("path", {
  stroke: "currentColor",
  opacity: "0.33",
  fill: "none",
  d: "M 17 9 A 8 8 0 1 1 9 1",
  "stroke-width": "2"
}, null, -1), Il = [
  Vl,
  zl
], El = /* @__PURE__ */ C({
  __name: "Spinner",
  props: {
    color: { default: void 0 },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(r) {
    const e = r, o = M(() => {
      let s = "";
      return e.color === "inherit" ? s += "color:inherit;" : e.color && (s += `color:var(--dodo-color-${e.color});`), s;
    });
    return (s, t) => (d(), m("div", {
      class: p([s.$style.Spinner, s.small && s.$style.small, s.large && s.$style.large])
    }, [
      (d(), m("svg", {
        style: O(o.value),
        viewBox: "0 0 18 18"
      }, Il, 4))
    ], 2));
  }
}), Al = "dodo-spinner", Fl = "dodo-spinner-small", Tl = "dodo-spinner-large", Nl = {
  Spinner: Al,
  small: Fl,
  large: Tl
}, Rl = {
  $style: Nl
}, Dl = /* @__PURE__ */ _(El, [["__cssModules", Rl]]), Ll = ["onClick"], Hl = {
  key: 1,
  class: "dodo-color-background"
}, Ol = { style: {} }, jl = { key: 0 }, Wl = {
  key: 1,
  class: "dodo-fade-secondary"
}, ql = {
  key: 0,
  class: "dodo-fade-secondary"
}, Pl = /* @__PURE__ */ y("br", null, null, -1), Ul = /* @__PURE__ */ C({
  __name: "Stepper",
  props: {
    stepIndex: {},
    steps: {},
    submit: { type: Function },
    completed: {}
  },
  emits: ["update:stepIndex", "submit"],
  setup(r, { emit: e }) {
    const o = r, s = e, t = b(0), a = M(() => o.steps[t.value]);
    function l() {
      t.value--;
    }
    async function u() {
      const n = a.value;
      if (n.filled !== !1 && !(n.validate && !await n.validate())) {
        if (t.value === o.steps.length - 1) {
          await o.submit();
          return;
        }
        t.value++;
      }
    }
    function i(n) {
      n > t.value || (t.value = n);
    }
    return j(() => {
      o.stepIndex != null && (t.value = o.stepIndex);
    }), W(t, () => {
      s("update:stepIndex", t.value);
    }), (n, c) => (d(), S(f(D), {
      class: p(n.$style.stepper)
    }, {
      default: k(() => [
        (d(!0), m(H, null, G(n.steps, ($, w) => (d(), S(f(le), {
          key: $.key,
          align: "stretch",
          gap: "m",
          class: p(w > t.value && n.$style.inactiveStep)
        }, {
          default: k(() => [
            z(f(D), { align: "center" }, {
              default: k(() => [
                y("div", {
                  class: p([n.$style.circle]),
                  onClick: (E) => i(w)
                }, [
                  t.value > w ? (d(), S(f(q), {
                    key: 0,
                    name: "check"
                  })) : (d(), m("h3", Hl, I(w + 1), 1))
                ], 10, Ll),
                w < n.steps.length - 1 ? (d(), m("div", {
                  key: 0,
                  class: p(n.$style.line)
                }, null, 2)) : g("", !0)
              ]),
              _: 2
            }, 1024),
            z(f(D), { grow: "" }, {
              default: k(() => [
                z(f(D), {
                  gap: "xs",
                  onClick: (E) => i(w)
                }, {
                  default: k(() => [
                    y("h3", Ol, [
                      $ === a.value ? (d(), m("span", jl, I($.name), 1)) : (d(), m("span", Wl, I($.name), 1))
                    ]),
                    $.hint ? (d(), m("p", ql, I($.hint), 1)) : g("", !0)
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                $ === a.value ? (d(), S(f(D), { key: 0 }, {
                  default: k(() => [
                    h(n.$slots, $.slot),
                    z(f(le), null, {
                      default: k(() => [
                        t.value > 0 ? (d(), S(f(J), {
                          key: 0,
                          variant: "text",
                          onClick: l
                        }, {
                          default: k(() => [
                            T(" Back ")
                          ]),
                          _: 1
                        })) : g("", !0),
                        t.value < n.steps.length - 1 ? (d(), S(f(J), {
                          key: 1,
                          disabled: $.filled === !1,
                          color: "primary",
                          variant: "solid",
                          onClick: u
                        }, {
                          default: k(() => [
                            h(n.$slots, "continue-button-text", {}, () => [
                              T("Continue")
                            ])
                          ]),
                          _: 2
                        }, 1032, ["disabled"])) : (d(), S(f(J), {
                          key: 2,
                          color: "primary",
                          variant: "solid",
                          onClick: u
                        }, {
                          default: k(() => [
                            h(n.$slots, "submit-button-text", {}, () => [
                              T("Submit")
                            ])
                          ]),
                          _: 3
                        }))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)) : g("", !0),
                Pl
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["class"]))), 128))
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Gl = "dodo-stepper-line", Kl = "dodo-stepper-circle", Jl = "dodo-stepper-inactivestep", Zl = {
  line: Gl,
  circle: Kl,
  inactiveStep: Jl
}, Ql = {
  $style: Zl
}, Ya = /* @__PURE__ */ _(Ul, [["__cssModules", Ql]]), Xl = ["onClick"], Yl = /* @__PURE__ */ y("hr", null, null, -1), xl = /* @__PURE__ */ C({
  __name: "Tabs",
  props: {
    tabs: {},
    tabIndex: {}
  },
  emits: ["update:tabIndex"],
  setup(r, { emit: e }) {
    const o = r, s = e, t = b(""), a = M(() => o.tabs.find((u) => l(u) === t.value));
    j(() => {
      !a.value && o.tabs.length && (t.value = l(o.tabs[0]));
    }), W(
      () => o.tabIndex,
      () => {
        o.tabIndex != null && o.tabs[o.tabIndex] && (t.value = l(o.tabs[o.tabIndex]));
      },
      { immediate: !0 }
    ), W(
      () => a.value,
      () => {
        a.value && s("update:tabIndex", o.tabs.indexOf(a.value));
      },
      { immediate: !0 }
    );
    function l(u) {
      return u.slot ?? u.name;
    }
    return (u, i) => (d(), S(f(D), {
      gap: "m",
      style: { "min-width": "0" }
    }, {
      default: k(() => [
        z(f(D), { gap: "0" }, {
          default: k(() => [
            y("div", {
              class: p(u.$style.bar)
            }, [
              (d(!0), m(H, null, G(u.tabs, (n, c) => (d(), m("div", {
                key: l(n),
                class: p([u.$style.tab, t.value === l(n) && u.$style.active, n.disabled && u.$style.disabled]),
                onClick: ($) => t.value = l(n)
              }, [
                y("h5", {
                  class: p(u.$style.tabName)
                }, [
                  h(u.$slots, "tab-title", {
                    i: c,
                    tab: n
                  }, () => [
                    T(I(n.name), 1)
                  ])
                ], 2)
              ], 10, Xl))), 128))
            ], 2),
            Yl
          ]),
          _: 3
        }),
        a.value ? h(u.$slots, a.value.slot ?? "default", {
          key: 0,
          tab: a.value
        }) : g("", !0)
      ]),
      _: 3
    }));
  }
}), ea = "dodo-tabs-bar", oa = "dodo-tabs-tab", ta = "dodo-tabs-tabname", sa = "dodo-tabs-active", na = "dodo-tabs-disabled", la = {
  bar: ea,
  tab: oa,
  tabName: ta,
  active: sa,
  disabled: na
}, aa = {
  $style: la
}, xa = /* @__PURE__ */ _(xl, [["__cssModules", aa]]), ra = ["placeholder", "disabled", "maxlength", "type", "name", "autofocus", "autocomplete"], ia = /* @__PURE__ */ C({
  __name: "TextInput",
  props: /* @__PURE__ */ Ve({
    modelValue: {},
    placeholder: {},
    disabled: { type: Boolean },
    maxlength: {},
    type: {},
    name: {},
    autofocus: { type: Boolean },
    error: {},
    rows: {},
    autocomplete: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(r) {
    const e = ze(r, "modelValue");
    return (o, s) => ue((d(), m("input", {
      "onUpdate:modelValue": s[0] || (s[0] = (t) => e.value = t),
      class: p(["dodo-formfield", o.error && o.$style.error, o.$style.input]),
      placeholder: o.placeholder,
      disabled: o.disabled,
      maxlength: o.maxlength,
      type: o.type || "text",
      name: o.name,
      autofocus: o.autofocus,
      autocomplete: o.autocomplete
    }, null, 10, ra)), [
      [We, e.value]
    ]);
  }
}), da = "dodo-textinput-input", ca = "dodo-textinput-error", ua = {
  input: da,
  error: ca
}, pa = {
  $style: ua
}, er = /* @__PURE__ */ _(ia, [["__cssModules", pa]]), ma = ["placeholder", "disabled", "name", "autofocus", "rows", "autocomplete"], va = /* @__PURE__ */ C({
  __name: "Textarea",
  props: /* @__PURE__ */ Ve({
    modelValue: {},
    placeholder: {},
    disabled: { type: Boolean },
    name: {},
    autofocus: { type: Boolean },
    error: {},
    minRows: {},
    maxRows: {},
    autocomplete: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(r) {
    const e = r, o = ze(r, "modelValue"), s = b(null), t = b(e.minRows);
    function a() {
      const i = e.maxRows && e.maxRows > 0 ? e.maxRows : 12, n = e.minRows && e.minRows > 0 ? e.minRows : 4, c = s.value;
      if (!c)
        return n;
      let $ = n;
      for (c.style.overflow = "hidden", c.setAttribute("rows", `${$}`); c.scrollHeight > c.offsetHeight && $ < i; )
        c.setAttribute("rows", `${++$}`);
      return c.style.overflow = "", $;
    }
    function l() {
      t.value = a(), u.value || window.requestAnimationFrame(l);
    }
    const u = b(!1);
    return Z(l), Q(() => {
      u.value = !0;
    }), (i, n) => ue((d(), m("textarea", {
      ref_key: "textarea",
      ref: s,
      "onUpdate:modelValue": n[0] || (n[0] = (c) => o.value = c),
      class: p(["dodo-formfield", i.error && i.$style.error, i.$style.textarea]),
      placeholder: i.placeholder,
      disabled: i.disabled,
      name: i.name,
      autofocus: i.autofocus,
      rows: t.value,
      autocomplete: i.autocomplete,
      resize: "false"
    }, null, 10, ma)), [
      [qe, o.value]
    ]);
  }
}), fa = "dodo-textarea", ya = "dodo-textarea-error", $a = {
  textarea: fa,
  error: ya
}, ha = {
  $style: $a
}, or = /* @__PURE__ */ _(va, [["__cssModules", ha]]), ga = /* @__PURE__ */ C({
  __name: "Tooltip",
  props: {
    text: {},
    disabled: { type: Boolean },
    side: {}
  },
  setup(r) {
    const e = r, o = b(!1), s = b(""), t = b(), a = b(), l = se(), u = M(() => e.disabled || !(e.text || l["tooltip-text"]));
    Q(n);
    async function i() {
      if (o.value || u.value)
        return;
      o.value = !0, await _e();
      const c = t.value.getBoundingClientRect(), $ = a.value.getBoundingClientRect();
      e.side, c.bottom + $.height < window.innerHeight;
      let w = (c.right + c.left - $.width) / 2, E = c.bottom;
      e.side === "right" ? (w = c.right, E = (c.bottom + c.top - $.height) / 2) : e.side === "top" ? (w = (c.left + c.right - $.width) / 2, E = c.top - $.height) : e.side === "left" && (w = c.left - $.width, E = (c.bottom + c.top - $.height) / 2), E = Math.round(Math.max(Math.min(E, window.innerHeight - $.height), 0)), w = Math.round(Math.max(Math.min(w, window.innerWidth - $.width), 0)), s.value = `left:${w}px;top:${E}px`;
    }
    function n() {
      o.value = !1;
    }
    return (c, $) => (d(), m("div", {
      ref_key: "trigger",
      ref: t,
      class: p(c.$style.trigger),
      onMouseover: i,
      onMouseleave: n
    }, [
      h(c.$slots, "default"),
      o.value ? (d(), S(Be, {
        key: 0,
        to: "body"
      }, [
        y("div", {
          ref_key: "tooltip",
          ref: a,
          class: p(c.$style.Tooltip),
          style: O(s.value)
        }, [
          y("div", {
            class: p(c.$style.content)
          }, [
            y("small", {
              class: p(c.$style.text)
            }, [
              h(c.$slots, "tooltip-text", {}, () => [
                T(I(c.text), 1)
              ])
            ], 2)
          ], 2)
        ], 6)
      ])) : g("", !0)
    ], 34));
  }
}), ba = "dodo-tooltip", wa = "dodo-tooltip-content", ka = "dodo-tooltip-text", Ma = "dodo-tooltip-trigger", Ca = {
  Tooltip: ba,
  content: wa,
  text: ka,
  trigger: Ma
}, Ba = {
  $style: Ca
}, fe = /* @__PURE__ */ _(ga, [["__cssModules", Ba]]);
export {
  za as Animated,
  Ia as Avatar,
  J as Button,
  co as Card,
  we as Checkbox,
  Eo as Chip,
  Da as ChoiceChips,
  D as Column,
  La as CrashDialog,
  Ha as Datatable,
  Ct as Dialog,
  At as Dropdown,
  Oa as Field,
  ja as FluidGrid,
  Wa as Form,
  rs as FormItem,
  qa as Grid,
  q as Icon,
  Pa as MenuItem,
  Ua as Modal,
  Ga as NavBar,
  Ce as NavBarItem,
  Ka as NavBarNew,
  Ja as NavItem,
  le as Row,
  Za as ScrollContainer,
  Qa as SimpleSelect,
  Xa as SocialIcon,
  Dl as Spinner,
  Ya as Stepper,
  xa as Tabs,
  er as TextInput,
  or as Textarea,
  fe as Tooltip,
  Na as ValidationError,
  Fa as crashPlugin,
  Ae as crashServiceKey,
  be as darkModeSetting,
  uo as dropdownServiceKey,
  Ie as navBarServiceKey,
  Aa as parseColor,
  vo as useCrashService,
  Ea as useElementSize,
  Ta as useResizeObserver,
  Ee as useScreenSize,
  fo as useServiceFactory,
  po as useSessionStoredRef,
  Y as useTheme,
  Ra as useValidation,
  mo as useWebFont
};
