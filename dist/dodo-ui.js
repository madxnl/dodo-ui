var He = Object.defineProperty;
var Oe = (c, o, e) => o in c ? He(c, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[o] = e;
var he = (c, o, e) => (Oe(c, typeof o != "symbol" ? o + "" : o, e), e);
import { defineComponent as _, openBlock as r, createBlock as V, TransitionGroup as qe, withCtx as b, renderSlot as h, Transition as re, computed as S, createElementBlock as v, normalizeClass as m, normalizeStyle as G, Fragment as D, createTextVNode as T, toDisplayString as F, createCommentVNode as M, useAttrs as Ue, ref as w, mergeProps as ie, unref as f, createElementVNode as $, onMounted as x, watchEffect as q, onBeforeUnmount as ee, watch as K, inject as de, provide as ce, reactive as ge, withModifiers as le, createVNode as I, resolveDynamicComponent as ue, renderList as P, Teleport as Be, nextTick as _e, onUnmounted as je, useSlots as ne, getCurrentInstance as Ve, withDirectives as te, vShow as We, vModelText as ze, vModelSelect as Pe, createStaticVNode as pe, mergeModels as Ie, useModel as Ee, vModelDynamic as Ge } from "vue";
const be = !1, Pa = /* @__PURE__ */ _({
  __name: "Animated",
  props: {
    list: { type: Boolean },
    appear: { type: Boolean }
  },
  setup(c) {
    return (o, e) => o.list ? (r(), V(qe, {
      key: 0,
      name: "dodo",
      appear: o.appear,
      css: !be
    }, {
      default: b(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"])) : (r(), V(re, {
      key: 1,
      appear: o.appear,
      name: "dodo",
      css: !be,
      mode: "out-in"
    }, {
      default: b(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"]));
  }
}), Ke = /* @__PURE__ */ _({
  __name: "Avatar",
  props: {
    text: {},
    image: {},
    round: { type: Boolean }
  },
  setup(c) {
    const o = ["info", "warning", "success", "danger"], e = c, s = S(() => {
      let l = e.text.trim();
      const u = /\b\w|[A-Z]/g, i = e.text.match(u);
      return i != null && i.length && (l = i.join("")), l.slice(0, 2).toUpperCase();
    }), t = S(() => {
      const l = o.length, u = a(e.text);
      return `var(--dodo-color-${o[u % l]}`;
    });
    function a(l) {
      let u = 0;
      for (let i = 0; i < l.length; ++i)
        u = 997 * (u % 1e6) + 11 * l.charCodeAt(i);
      return u;
    }
    return (l, u) => (r(), v("span", {
      class: m([l.$style.Avatar, l.round && l.$style.round]),
      style: G([`--color:${t.value}`, l.image ? `background-image:url(${l.image})` : ""])
    }, [
      l.image ? M("", !0) : (r(), v(D, { key: 0 }, [
        T(F(s.value), 1)
      ], 64))
    ], 6));
  }
}), Je = "dodo-avatar", Ze = "dodo-avatar-round", Qe = {
  Avatar: Je,
  round: Ze
}, E = (c, o) => {
  const e = c.__vccOpts || c;
  for (const [s, t] of o)
    e[s] = t;
  return e;
}, Xe = {
  $style: Qe
}, Ga = /* @__PURE__ */ E(Ke, [["__cssModules", Xe]]), Ye = ["disabled", "type"], xe = /* @__PURE__ */ _({
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
  setup(c) {
    const o = c, e = S(() => {
      let l = "";
      return o.color && (l += `--button-color:var(--dodo-color-${o.color});`), l;
    }), s = Ue(), t = w(!1);
    async function a(l) {
      if (!t.value && typeof s.onClick == "function") {
        const u = s.onClick(l);
        u instanceof Promise && (t.value = !0, await u.finally(() => {
          t.value = !1;
        }));
      }
    }
    return (l, u) => (r(), v("button", ie({
      style: e.value,
      disabled: l.disabled,
      type: l.type ?? "button",
      class: [
        l.$style.Button,
        l.$style[o.variant ?? "default"],
        t.value && l.$style.loading,
        l.small && l.$style.small,
        l.square && l.$style.square,
        l.active && l.$style.active,
        l.rounded && l.$style.rounded
      ]
    }, { ...f(s), onClick: a }), [
      $("div", {
        class: m(l.$style.content)
      }, [
        h(l.$slots, "default")
      ], 2),
      t.value ? (r(), V(f(Yn), {
        key: 0,
        small: l.small,
        class: m(l.$style.spinner),
        color: "inherit"
      }, null, 8, ["small", "class"])) : M("", !0)
    ], 16, Ye));
  }
}), eo = "dodo-button", oo = "dodo-button-content", to = "dodo-button-solid", so = "dodo-button-rounded", lo = "dodo-button-text", no = "dodo-button-loading", ao = "dodo-button-spinner", ro = "dodo-button-active", io = "dodo-button-small", co = "dodo-button-square", uo = {
  Button: eo,
  content: oo,
  solid: to,
  default: "dodo-button-default",
  rounded: so,
  text: lo,
  loading: no,
  spinner: ao,
  active: ro,
  small: io,
  square: co
}, po = {
  $style: uo
}, X = /* @__PURE__ */ E(xe, [["__cssModules", po]]), mo = /* @__PURE__ */ _({
  __name: "Card",
  props: {
    hoverable: { type: Boolean },
    active: { type: Boolean },
    gap: {},
    padding: {}
  },
  setup(c) {
    const o = oe();
    return (e, s) => (r(), v("div", {
      class: m([
        "dodo-card",
        e.hoverable && "dodo-card--hoverable",
        e.active && "dodo-card--active",
        f(o).padding(e.padding),
        f(o).gap(e.gap)
      ])
    }, [
      h(e.$slots, "default")
    ], 2));
  }
}), Fe = Symbol("NavBarService"), vo = Symbol("DropdownService");
function Ka(c) {
  const o = w(0), e = w(0), s = new ResizeObserver(t);
  function t() {
    var a, l;
    o.value = ((a = c.value) == null ? void 0 : a.clientWidth) ?? 0, e.value = ((l = c.value) == null ? void 0 : l.clientHeight) ?? 0;
  }
  return x(t), q(() => {
    s.disconnect(), c.value && s.observe(c.value), t();
  }), ee(() => {
    s.disconnect();
  }), { width: o, height: e, observer: s };
}
function Ae() {
  const e = w(window.innerWidth), s = w(window.innerHeight), t = S(() => e.value < 600), a = S(() => e.value >= 600 && e.value < 1200), l = S(() => e.value >= 1200);
  function u() {
    e.value = window.innerWidth, s.value = window.innerHeight;
  }
  return x(() => {
    window.addEventListener("resize", u, { passive: !0 });
  }), ee(() => {
    window.removeEventListener("resize", u);
  }), {
    screenSmall: t,
    screenMedium: a,
    screenLarge: l
  };
}
function fo(c, o) {
  const e = w(o), s = sessionStorage.getItem(c);
  return s && (e.value = JSON.parse(s)), K(e, (t) => {
    sessionStorage.setItem(c, JSON.stringify(t));
  }), e;
}
function yo(c) {
  const o = w(!1);
  return x(async () => {
    const e = `font-${c.name}-${c.weight}`;
    let s = document.getElementById(e);
    if (s || (s = document.createElement("link"), s.setAttribute("href", c.href), s.setAttribute("rel", "stylesheet"), s.setAttribute("id", e), document.head.appendChild(s)), !document.fonts) {
      o.value = !0;
      return;
    }
    await document.fonts.ready, o.value = document.fonts.check(`${c.weight} 1em ${c.name}`);
  }), { isReady: o };
}
function Ja(c) {
  if (!c.match(/^#\w{6}$/))
    throw new Error("Invalid hex color");
  return c.match(/(\w\w)/g).map((o) => parseInt(o, 16)).slice(0, 3);
}
const Te = Symbol(Ne.name);
function Ne(c) {
  const o = w(null), e = w(0), s = 1e3;
  function t() {
    o.value = null, e.value = Date.now() + s;
  }
  function a() {
    location.reload();
  }
  function l(u) {
    c.onError && c.onError(u) === !1 || !o.value && e.value < Date.now() && (console.error(u), o.value = u);
  }
  return { ignoreError: t, reloadPage: a, currentError: o, handleCrash: l };
}
function Za(c) {
  return (o) => {
    var t;
    const e = Ne(c);
    o.provide(Te, e);
    const { errorHandler: s } = o.config;
    o.config.errorHandler = (a, l, u) => {
      if (e.handleCrash(a), s)
        return s(a, l, u);
    }, (t = c.router) == null || t.onError((a) => {
      e.handleCrash(a);
    }), window.addEventListener("unhandledrejection", (a) => {
      e.handleCrash(a.reason);
    }), window.addEventListener("error", (a) => {
      e.handleCrash(a.error ?? a.message);
    });
  };
}
function $o() {
  return de(Te);
}
function Qa(c, o) {
  if (typeof ResizeObserver > "u")
    return {};
  const e = new ResizeObserver(() => o(c.value));
  return q(() => {
    c.value && e.observe(c.value);
  }), ee(() => {
    e.disconnect();
  }), { observer: e };
}
function ho(c) {
  const o = Symbol("ServiceKey");
  return { createAndProvide: () => {
    const t = c();
    return ce(o, t), t;
  }, injectOptional: () => de(o, void 0) };
}
function oe() {
  function c(i) {
    return `var(--dodo-spacing-${i})`;
  }
  function o(i) {
    return i ? `dodo-gap-${i}` : "";
  }
  function e(i) {
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
    gapValue: c,
    gap: o,
    padding: e,
    justify: s,
    align: t,
    wrap: a,
    flex: l,
    grow: u,
    theme: fe,
    toggleTheme: ko
  };
}
const we = w(), go = localStorage.getItem("dodotheme"), me = w(go), ve = window.matchMedia("(prefers-color-scheme: dark)"), Re = w(ve.matches ? "dark" : "light");
function bo() {
  Re.value = ve.matches ? "dark" : "light";
}
ve.addEventListener("change", bo);
const wo = S(() => we.value === "auto" ? Re.value : we.value), fe = S(() => me.value || wo.value || "light");
function ko() {
  me.value = fe.value === "dark" ? "light" : "dark";
}
q(() => {
  localStorage.setItem("dodotheme", me.value ?? ""), document.body.setAttribute("data-dodotheme", fe.value ?? "");
});
class Xa extends Error {
  constructor(e, s) {
    super(s);
    he(this, "name", "ValidationError");
    this.field = e;
  }
}
function Ya(c) {
  const o = ge(c), e = ge({});
  K(o, () => a());
  async function s(n) {
    const p = o[n];
    if (p) {
      const y = p.value, C = await u(n, y);
      if (C)
        return e[n] = String(C), !1;
    }
    return delete e[n], !0;
  }
  async function t(...n) {
    const p = n.length ? n : Object.keys(o);
    return (await Promise.all(p.map((C) => s(C)))).every((C) => C);
  }
  async function a() {
    return (await Promise.all(Object.keys(e).map((p) => s(p)))).every((p) => p);
  }
  function l() {
    for (const n in e)
      delete e[n];
  }
  async function u(n, p) {
    const y = o[n], C = y.name ?? i(n);
    if (y.required && !p)
      return `${C} is required`;
    if (y.isEmail && p != null && (typeof p != "string" || !p.includes("@")))
      return `${C} is not valid`;
    if (typeof p == "string") {
      if (y.minLen != null && p.length < y.minLen)
        return `${C} must be at least ${y.minLen} characters`;
      if (y.maxLen != null && p.length > y.maxLen)
        return `${C} must be less than ${y.maxLen} characters`;
    }
    if (y.validators)
      for (const A of y.validators) {
        const z = await A(p, C);
        if (z)
          return z;
      }
  }
  function i(n) {
    return n.toString().replace(/_/g, " ").replace(/^./, (p) => p.toUpperCase()).replace(/[a-z][A-Z]/g, (p) => `${p[0]} ${p[1]}`);
  }
  return { errors: e, rules: o, validate: t, clearErrors: l };
}
const Mo = ["checked"], Co = /* @__PURE__ */ _({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean },
    indeterminate: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(c, { emit: o }) {
    const e = c, s = o;
    function t() {
      s("update:modelValue", e.indeterminate || !e.modelValue);
    }
    function a(l) {
      l.target.checked !== e.modelValue && t();
    }
    return (l, u) => (r(), v("span", {
      class: m([l.$style.Checkbox, l.modelValue && l.$style.checked]),
      onClick: le(t, ["stop"])
    }, [
      I(f(O), {
        name: l.indeterminate ? "indeterminate_check_box" : l.modelValue ? "check_box" : "check_box_outline_blank"
      }, null, 8, ["name"]),
      h(l.$slots, "default"),
      $("input", {
        type: "checkbox",
        checked: l.modelValue,
        onChange: a
      }, null, 40, Mo)
    ], 2));
  }
}), So = "dodo-checkbox", Bo = "dodo-checkbox-checked", _o = {
  Checkbox: So,
  checked: Bo
}, Vo = {
  $style: _o
}, ke = /* @__PURE__ */ E(Co, [["__cssModules", Vo]]), zo = /* @__PURE__ */ _({
  __name: "Chip",
  props: {
    color: {},
    variant: {}
  },
  setup(c) {
    const o = c, e = S(() => {
      let s = "";
      return o.color && (s += `--chip-color:var(--dodo-color-${o.color});`), s;
    });
    return (s, t) => (r(), V(ue(s.$attrs.onClick ? "button" : "div"), {
      class: m([s.$style.Chip, s.variant === "solid" && s.$style.solid]),
      style: G(e.value)
    }, {
      default: b(() => [
        h(s.$slots, "before"),
        $("div", {
          class: m(s.$style.text)
        }, [
          h(s.$slots, "default")
        ], 2),
        h(s.$slots, "after")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), Io = "dodo-chip", Eo = "dodo-chip-solid", Fo = "dodo-chip-text", Ao = {
  Chip: Io,
  solid: Eo,
  text: Fo
}, To = {
  $style: Ao
}, No = /* @__PURE__ */ E(zo, [["__cssModules", To]]), ae = "Outlined", Me = "300", Ro = /* @__PURE__ */ _({
  __name: "Icon",
  props: {
    name: {},
    color: {},
    fill: { type: Boolean },
    small: {},
    large: {},
    size: {}
  },
  setup(c) {
    const o = c, e = w(), s = yo({
      weight: Me,
      name: `Material Symbols ${ae}`,
      href: `https://fonts.googleapis.com/css2?family=Material+Symbols+${ae}:wght,FILL@${Me},0..1`
    });
    return (t, a) => (r(), v("span", {
      ref_key: "el",
      ref: e,
      style: G([t.color ? `color: var(--dodo-color-${t.color});` : "", f(s).isReady ? "" : "visibility:hidden"]),
      class: m([
        t.$style.icon,
        "material-symbols-" + ae.toLowerCase(),
        o.size && t.$style[o.size],
        o.fill && t.$style.fill
      ])
    }, F(t.name), 7));
  }
}), Do = "dodo-icon", Lo = "dodo-icon-fill", Ho = "dodo-icon-xs", Oo = "dodo-icon-s", qo = "dodo-icon-l", Uo = "dodo-icon-xl", jo = {
  icon: Do,
  fill: Lo,
  xs: Ho,
  s: Oo,
  l: qo,
  xl: Uo
}, Wo = {
  $style: jo
}, O = /* @__PURE__ */ E(Ro, [["__cssModules", Wo]]), Po = /* @__PURE__ */ _({
  __name: "ChoiceChips",
  props: {
    options: {},
    modelValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    small: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(c, { emit: o }) {
    const e = c, s = o, t = S(() => e.multiple ? [e.modelValue].flat() : [e.modelValue]);
    function a(i, n) {
      return i.value === n;
    }
    function l(i) {
      return t.value.some((n) => a(i, n));
    }
    function u(i) {
      let n = i.value;
      l(i) && e.multiple ? n = t.value.filter((y) => !a(i, y)) : e.multiple && (n = [...t.value, i.value]), s("update:modelValue", n);
    }
    return (i, n) => (r(), v("div", {
      class: m([i.$style.Select, i.multiple && i.$style.multiple])
    }, [
      (r(!0), v(D, null, P(i.options, (p, y) => (r(), V(No, {
        key: p.label,
        color: l(p) ? "info" : void 0,
        variant: !i.multiple && l(p) ? "solid" : void 0,
        disabled: i.disabled,
        small: i.small,
        rounded: "",
        onClick: (C) => u(p)
      }, {
        default: b(() => [
          i.multiple && l(p) ? (r(), V(O, {
            key: 0,
            name: "check"
          })) : M("", !0),
          h(i.$slots, "default", {
            option: p,
            index: y
          }, () => [
            T(F(p.label || p.value), 1)
          ])
        ]),
        _: 2
      }, 1032, ["color", "variant", "disabled", "small", "onClick"]))), 128))
    ], 2));
  }
}), Go = "dodo-choicechips-select", Ko = {
  Select: Go
}, Jo = {
  $style: Ko
}, xa = /* @__PURE__ */ E(Po, [["__cssModules", Jo]]), Zo = /* @__PURE__ */ _({
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
  setup(c) {
    const o = oe();
    return (e, s) => (r(), V(ue(e.tag ?? "div"), {
      class: m([
        e.$style.el,
        f(o).gap(e.gap),
        f(o).padding(e.padding),
        f(o).align(e.align),
        f(o).padding(e.padding),
        f(o).wrap(e.wrap),
        f(o).grow(e.grow)
      ])
    }, {
      default: b(() => [
        h(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Qo = "dodo-column-el", Xo = {
  el: Qo
}, Yo = {
  $style: Xo
}, W = /* @__PURE__ */ E(Zo, [["__cssModules", Yo]]), xo = /* @__PURE__ */ $("h3", null, "Something went wrong", -1), Ce = `
  An unexpected error occurred and the application may not function correctly until the page is reloaded.
  Any unsaved changes will be lost if you choose to reload the page.
`, er = /* @__PURE__ */ _({
  __name: "CrashDialog",
  setup(c) {
    const o = $o(), e = S(() => o.currentError.value), s = w(!1);
    return q(() => {
      s.value = !!e.value;
    }), (t, a) => (r(), V(f(Vt), { active: s.value }, {
      controls: b(() => [
        I(f(X), {
          variant: "text",
          onClick: f(o).ignoreError
        }, {
          default: b(() => [
            T("Ignore")
          ]),
          _: 1
        }, 8, ["onClick"]),
        I(f(X), {
          variant: "solid",
          color: "info",
          onClick: f(o).reloadPage
        }, {
          default: b(() => [
            T("Reload page")
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: b(() => [
        xo,
        h(t.$slots, "body", {
          error: e.value,
          defaultText: Ce
        }, () => [
          $("p", null, F(Ce))
        ])
      ]),
      _: 3
    }, 8, ["active"]));
  }
}), et = {
  key: 0,
  style: { width: "0" },
  scope: "col"
}, ot = ["onClick"], tt = ["onClick"], st = { key: 0 }, lt = /* @__PURE__ */ $("td", { colspan: "999" }, "No results", -1), nt = [
  lt
], at = { colspan: "999" }, rt = { key: 0 }, it = /* @__PURE__ */ _({
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
  setup(c, { emit: o }) {
    const e = c, s = o, t = w(), a = w([]), l = w(!1);
    q(() => {
      t.value = e.sortValue;
    }), q(() => {
      a.value = e.selection ?? [];
    }), K(t, (d) => {
      s("update:sortValue", d);
    }), K(a, (d) => {
      s("update:selection", d);
    });
    const u = S(() => {
      var d;
      return (d = t.value) == null ? void 0 : d.startsWith("-");
    }), i = S(() => e.columns.filter((d) => !d.disabled)), n = S(() => !!e.selection), p = S(() => {
      const d = i.value.find(C);
      return e.sortAsync || !d ? e.rows : e.rows.slice().sort((g, B) => {
        const R = Z(d, g), j = Z(d, B), $e = typeof R == "number" && typeof j == "number" ? j - R : `${j}`.localeCompare(`${R}`);
        return u.value ? $e : -$e;
      });
    });
    function y(d) {
      if (C(d))
        return u.value ? "arrow_drop_up" : "arrow_drop_down";
    }
    function C(d) {
      var g;
      return ((g = t.value) == null ? void 0 : g.replace("-", "")) === d.sort;
    }
    function A(d) {
      return d.slot || d.name.trim().replace(/\W/g, "");
    }
    function z(d) {
      return !!d.sort;
    }
    function L(d) {
      return d.align ? `text-align:${d.align}` : "";
    }
    function J(d) {
      return d.width ? `width:${d.width}` : "";
    }
    async function N(d) {
      z(d) && (C(d) ? t.value = u.value ? void 0 : "-" + d.sort : t.value = d.sort, e.sortAsync && (l.value = !0, await e.sortAsync(t.value).finally(() => {
        l.value = !1;
      })));
    }
    function H(d) {
      return e.selectBy ? d[e.selectBy] : d;
    }
    function U(d) {
      const g = H(d);
      a.value.includes(g) ? a.value = a.value.filter((B) => B !== g) : a.value = a.value.concat(g);
    }
    function Z(d, g) {
      return typeof d.value == "function" ? d.value(g) : typeof d.value == "string" ? g[d.value] : "";
    }
    function Y(d) {
      if (!n.value)
        return !1;
      const g = H(d);
      return a.value.includes(g);
    }
    const Q = S(() => n.value ? e.rows.filter((d) => a.value.includes(H(d))) : []);
    function k() {
      const d = Q.value.length === e.rows.length;
      a.value = d ? [] : e.rows.map(H);
    }
    return (d, g) => (r(), v("div", {
      class: m([d.$style.Datatable, d.contentLoading && d.$style.loading])
    }, [
      $("table", null, [
        $("tbody", null, [
          $("tr", {
            class: m(d.stickyHeader && d.$style.stickyHeader)
          }, [
            n.value ? (r(), v("th", et, [
              I(f(ke), {
                indeterminate: Q.value.length > 0 && Q.value.length < d.rows.length,
                "model-value": Q.value.length > 0 && Q.value.length === d.rows.length,
                "onUpdate:modelValue": k
              }, null, 8, ["indeterminate", "model-value"])
            ])) : M("", !0),
            (r(!0), v(D, null, P(i.value, (B) => (r(), v("th", {
              key: B.name,
              scope: "col",
              class: m([z(B) ? d.$style.sortable : "", C(B) && d.$style.sortActive]),
              style: G([L(B), J(B)]),
              onClick: (R) => N(B)
            }, [
              $("span", {
                class: m(d.$style.colName)
              }, [
                $("span", null, [
                  h(d.$slots, `${A(B)}-header`, { column: B }, () => [
                    T(F(B.name), 1)
                  ])
                ]),
                y(B) ? (r(), V(f(O), {
                  key: 0,
                  name: y(B),
                  class: m(d.$style.sortIcon)
                }, null, 8, ["name", "class"])) : M("", !0)
              ], 2)
            ], 14, ot))), 128))
          ], 2),
          (r(!0), v(D, null, P(p.value, (B, R) => (r(), v("tr", {
            key: R,
            class: m([d.rowClick && d.$style.clickableRow, Y(B) && d.$style.rowSelected]),
            onClick: (j) => d.rowClick && d.rowClick(B)
          }, [
            n.value ? (r(), v("td", st, [
              I(f(ke), {
                "model-value": Y(B),
                "onUpdate:modelValue": (j) => U(B)
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ])) : M("", !0),
            (r(!0), v(D, null, P(i.value, (j) => (r(), v("td", {
              key: j.name,
              class: m([]),
              style: G(L(j))
            }, [
              h(d.$slots, A(j), {
                row: B,
                column: j
              }, () => [
                T(F(Z(j, B)), 1)
              ])
            ], 4))), 128))
          ], 10, tt))), 128)),
          d.rows.length ? M("", !0) : (r(), v("tr", {
            key: 0,
            class: m(d.$style.noResults)
          }, nt, 2)),
          d.rows.length && d.showMore ? (r(), v("tr", {
            key: 1,
            class: m(d.$style.showMore)
          }, [
            $("td", at, [
              I(f(X), {
                variant: "text",
                color: "info",
                onClick: d.showMore
              }, {
                default: b(() => [
                  T("Show more results")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ], 2)) : M("", !0),
          d.showFooter ? (r(), v("tr", {
            key: 2,
            class: m([d.$style.footer, d.stickyHeader && d.$style.stickyFooter])
          }, [
            n.value ? (r(), v("td", rt)) : M("", !0),
            (r(!0), v(D, null, P(i.value, (B) => (r(), v("th", {
              key: B.name,
              style: G(L(B)),
              scope: "col"
            }, [
              h(d.$slots, `${A(B)}-footer`, { column: B })
            ], 4))), 128))
          ], 2)) : M("", !0)
        ])
      ])
    ], 2));
  }
}), dt = "dodo-datatable", ct = "dodo-datatable-colname", ut = "dodo-datatable-sortable", pt = "dodo-datatable-sorticon", mt = "dodo-datatable-sortactive", vt = "dodo-datatable-noresults", ft = "dodo-datatable-showmore", yt = "dodo-datatable-clickablerow", $t = "dodo-datatable-rowselected", ht = "dodo-datatable-stickyheader", gt = "dodo-datatable-stickyfooter", bt = "dodo-datatable-loading", wt = {
  Datatable: dt,
  colName: ct,
  sortable: ut,
  sortIcon: pt,
  sortActive: mt,
  noResults: vt,
  showMore: ft,
  clickableRow: yt,
  rowSelected: $t,
  stickyHeader: ht,
  stickyFooter: gt,
  loading: bt
}, kt = {
  $style: wt
}, or = /* @__PURE__ */ E(it, [["__cssModules", kt]]), Mt = /* @__PURE__ */ _({
  __name: "Dialog",
  props: {
    active: { type: Boolean }
  },
  setup(c) {
    const o = c, e = w();
    return q(() => {
      o.active && e.value && e.value.parentNode.appendChild(e.value);
    }), (s, t) => (r(), V(Be, { to: "body" }, [
      I(re, { name: "Dialog" }, {
        default: b(() => [
          s.active ? (r(), v("div", {
            key: 0,
            ref_key: "el",
            ref: e,
            class: m([s.$style.Dialog])
          }, [
            $("div", {
              class: m(s.$style.window)
            }, [
              I(f(W), { padding: "m" }, {
                default: b(() => [
                  h(s.$slots, "default")
                ]),
                _: 3
              }),
              I(f(se), {
                padding: "m",
                justify: "end",
                gap: "s"
              }, {
                default: b(() => [
                  h(s.$slots, "controls")
                ]),
                _: 3
              })
            ], 2)
          ], 2)) : M("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Ct = "dodo-dialog", St = "dodo-dialog-window", Bt = {
  Dialog: Ct,
  window: St,
  "Dialog-enter-active": "dodo-dialog-dialog-enter-active",
  "Dialog-leave-active": "dodo-dialog-dialog-leave-active",
  "Dialog-enter-from": "dodo-dialog-dialog-enter-from",
  "Dialog-leave-to": "dodo-dialog-dialog-leave-to"
}, _t = {
  $style: Bt
}, Vt = /* @__PURE__ */ E(Mt, [["__cssModules", _t]]), zt = /* @__PURE__ */ _({
  __name: "Dropdown",
  props: {
    modelValue: { type: Boolean },
    padding: {},
    gap: {},
    disabled: { type: Boolean },
    trigger: {}
  },
  emits: ["update:modelValue"],
  setup(c, { emit: o }) {
    const e = c, s = o, t = w(!1), a = w(""), l = w(), u = w();
    K(
      () => e.modelValue,
      () => {
        i(!!e.modelValue);
      },
      { immediate: !0 }
    ), ee(() => {
      i(!1);
    });
    function i(z) {
      t.value !== z && (e.disabled && z || (t.value = z, s("update:modelValue", z), z ? _e().then(() => {
        A(), window.addEventListener("click", C, { passive: !0, capture: !0 });
      }) : window.removeEventListener("click", C, { capture: !0 })));
    }
    function n(z) {
      e.trigger !== "hover" && (i(!t.value), z.preventDefault());
    }
    function p() {
      e.trigger === "hover" && i(!0);
    }
    function y(z) {
      var H, U;
      if (!t.value || e.trigger !== "hover")
        return;
      const L = z.relatedTarget, J = (H = u.value) == null ? void 0 : H.contains(L), N = (U = l.value) == null ? void 0 : U.contains(L);
      J || N || i(!1);
    }
    function C(z) {
      var L, J;
      if (z.target) {
        const N = (L = u.value) == null ? void 0 : L.contains(z.target), H = (J = l.value) == null ? void 0 : J.contains(z.target);
        if (N || H)
          return;
      }
      i(!1);
    }
    function A() {
      const L = l.value;
      if (!L)
        return;
      const J = L.scrollWidth, N = u.value.getBoundingClientRect(), H = window.innerWidth, U = window.innerHeight, Z = N.bottom + 300 + 16 > U, Y = Math.max(16, Math.min(N.left, H - J - 16)), Q = Math.min(600, H - 16 * 2);
      let k = `left: ${Y}px; max-width:${Q}px;`;
      Z ? k += `bottom: ${U - N.top}px; max-height: ${N.top - 16}px;` : k += `top: ${N.bottom}px; max-height: ${U - N.bottom - 16}px;`, a.value = k, t.value && requestAnimationFrame(A);
    }
    return ce(vo, { toggle: i }), (z, L) => (r(), v(D, null, [
      $("div", ie({
        ref_key: "el",
        ref: u,
        class: [z.$style.trigger, z.disabled && z.$style.disabled]
      }, z.$attrs, {
        onClick: n,
        onMouseover: p,
        onMouseleave: y
      }), [
        h(z.$slots, "default", { isActive: t.value })
      ], 16),
      t.value ? (r(), v("div", {
        key: 0,
        class: m([z.$style.container]),
        style: G(a.value)
      }, [
        $("div", {
          ref_key: "content",
          ref: l,
          class: m(z.$style.content),
          onMouseleave: y
        }, [
          I(f(W), {
            padding: z.padding ?? "s",
            gap: z.gap ?? "s"
          }, {
            default: b(() => [
              h(z.$slots, "dropdown", { toggle: i })
            ]),
            _: 3
          }, 8, ["padding", "gap"])
        ], 34)
      ], 6)) : M("", !0)
    ], 64));
  }
}), It = "dodo-dropdown-trigger", Et = "dodo-dropdown-disabled", Ft = "dodo-dropdown-container", At = "dodo-dropdown-content", Tt = {
  trigger: It,
  disabled: Et,
  container: Ft,
  content: At
}, Nt = {
  $style: Tt
}, De = /* @__PURE__ */ E(zt, [["__cssModules", Nt]]), Rt = /* @__PURE__ */ _({
  __name: "Field",
  props: {
    disabled: { type: Boolean },
    button: { type: Boolean }
  },
  setup(c) {
    return (o, e) => (r(), v("div", {
      class: m([o.$style.Field, o.disabled && o.$style.disabled, o.button && o.$style.button])
    }, [
      h(o.$slots, "before"),
      $("div", {
        class: m(o.$style.inner)
      }, [
        h(o.$slots, "default")
      ], 2),
      h(o.$slots, "after")
    ], 2));
  }
}), Dt = "dodo-field", Lt = "dodo-field-button", Ht = "dodo-field-inner", Ot = "dodo-field-disabled", qt = {
  Field: Dt,
  button: Lt,
  inner: Ht,
  disabled: Ot
}, Ut = {
  $style: qt
}, jt = /* @__PURE__ */ E(Rt, [["__cssModules", Ut]]), Wt = /* @__PURE__ */ _({
  __name: "FluidGrid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean },
    alignItems: {}
  },
  setup(c) {
    const o = c, e = oe(), s = w(), t = w(99999);
    let a = null;
    const l = new ResizeObserver(() => {
      a && clearTimeout(a), a = setTimeout(() => {
        t.value = s.value.clientWidth;
      }, 50);
    });
    x(() => {
      l.observe(s.value);
    }), je(() => {
      l.disconnect();
    });
    const u = S(() => o.columnSize >= t.value), i = S(() => {
      let n = `--fluidgrid-size:${o.columnSize}px;`;
      return o.autoFill && (n += "--fluidgrid-mode:auto-fill;"), o.gap && (n += `gap:${e.gapValue(o.gap)};`), o.padding && (n += `padding:${e.gapValue(o.padding)};`), n;
    });
    return (n, p) => (r(), v("div", {
      ref_key: "el",
      ref: s,
      class: m([n.$style.FluidGrid, u.value && n.$style.oneColumn]),
      style: G(i.value)
    }, [
      h(n.$slots, "default")
    ], 6));
  }
}), Pt = "dodo-fluidgrid", Gt = "dodo-fluidgrid-onecolumn", Kt = {
  FluidGrid: Pt,
  oneColumn: Gt
}, Jt = {
  $style: Kt
}, tr = /* @__PURE__ */ E(Wt, [["__cssModules", Jt]]), Zt = /* @__PURE__ */ _({
  __name: "Form",
  props: {
    gap: {}
  },
  emits: ["submit"],
  setup(c, { emit: o }) {
    const e = o, s = oe();
    function t() {
      e("submit");
    }
    return (a, l) => (r(), v("form", {
      class: m([a.$style.form, f(s).gap(a.gap)]),
      onSubmit: le(t, ["prevent"])
    }, [
      h(a.$slots, "default")
    ], 34));
  }
}), Qt = "dodo-form", Xt = {
  form: Qt
}, Yt = {
  $style: Xt
}, sr = /* @__PURE__ */ E(Zt, [["__cssModules", Yt]]), xt = ["data-itemerror"], es = ["for"], os = /* @__PURE__ */ _({
  __name: "FormItem",
  props: {
    label: {},
    error: {},
    description: {},
    for: {},
    optional: { type: Boolean }
  },
  setup(c) {
    const o = c, e = ne(), s = Ve();
    return x(() => {
      if (!e.default)
        throw new Error("FormEntry requires a default slot");
    }), (t, a) => {
      var l;
      return r(), v("div", {
        class: m([t.$style.FormEntry, t.error && t.$style.hasError]),
        "data-itemerror": t.error
      }, [
        t.label ? (r(), v("div", {
          key: 0,
          class: m(t.$style.labelRow)
        }, [
          $("label", {
            class: m(t.$style.label),
            for: o.for
          }, F(t.label), 11, es),
          t.optional ? (r(), v("span", {
            key: 0,
            class: m(t.$style.optional)
          }, "Optional", 2)) : M("", !0)
        ], 2)) : M("", !0),
        h(t.$slots, "default", {
          error: t.error,
          entryId: o.for ? o.for : `form-item-${(l = f(s)) == null ? void 0 : l.uid}`
        }),
        t.error ? (r(), v("div", {
          key: 1,
          class: m(t.$style.error)
        }, [
          $("span", null, F(t.error), 1)
        ], 2)) : M("", !0),
        t.description ? (r(), v("div", {
          key: 2,
          class: m(t.$style.description)
        }, F(t.description), 3)) : M("", !0)
      ], 10, xt);
    };
  }
}), ts = "dodo-formitem-formentry", ss = "dodo-formitem-label", ls = "dodo-formitem-optional", ns = "dodo-formitem-labelrow", as = "dodo-formitem-description", rs = "dodo-formitem-haserror", is = "dodo-formitem-error", ds = {
  FormEntry: ts,
  label: ss,
  optional: ls,
  labelRow: ns,
  description: as,
  hasError: rs,
  error: is
}, cs = {
  $style: ds
}, us = /* @__PURE__ */ E(os, [["__cssModules", cs]]), ps = /* @__PURE__ */ _({
  __name: "Grid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean }
  },
  setup(c) {
    const o = oe();
    return (e, s) => (r(), v("div", {
      class: m([
        e.$style.component,
        e.$style[`col-${e.columnSize}`],
        e.autoFill && e.$style.autoFill,
        f(o).gap(e.gap),
        f(o).padding(e.padding)
      ])
    }, [
      h(e.$slots, "default")
    ], 2));
  }
}), ms = "dodo-grid-component", vs = "dodo-grid-autofill", fs = {
  component: ms,
  autoFill: vs,
  "col-xs": "dodo-grid-col-xs",
  "col-s": "dodo-grid-col-s",
  "col-m": "dodo-grid-col-m",
  "col-l": "dodo-grid-col-l"
}, ys = {
  $style: fs
}, lr = /* @__PURE__ */ E(ps, [["__cssModules", ys]]), $s = ["id", "value", "placeholder", "disabled", "maxlength", "type", "name", "autofocus"], nr = /* @__PURE__ */ _({
  __name: "Input",
  props: {
    modelValue: {},
    id: {},
    placeholder: {},
    disabled: { type: Boolean },
    maxlength: {},
    type: {},
    tabIndex: {},
    name: {},
    autofocus: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(c, { emit: o }) {
    const e = w(null), s = o;
    function t() {
      s("update:modelValue", e.value.value);
    }
    return (a, l) => (r(), v("input", {
      id: a.id ?? void 0,
      ref_key: "el",
      ref: e,
      value: a.modelValue,
      class: "dodo-formfield dodo-input",
      placeholder: a.placeholder,
      disabled: a.disabled,
      maxlength: a.maxlength,
      type: a.type,
      name: a.name,
      autofocus: a.autofocus,
      onInput: t
    }, null, 40, $s));
  }
}), hs = {
  key: 0,
  class: "dodo-nowrap dodo-fade-secondary"
}, gs = /* @__PURE__ */ _({
  __name: "MenuItem",
  props: {
    active: { type: Boolean },
    emphasize: { type: Boolean },
    separator: { type: Boolean }
  },
  setup(c) {
    return (o, e) => (r(), v(D, null, [
      o.separator ? (r(), v("hr", {
        key: 0,
        class: m(o.$style.separator)
      }, null, 2)) : M("", !0),
      $("div", ie(o.$attrs, {
        class: [o.$style.DropdownItem, o.active && o.$style.active, o.emphasize && o.$style.emphasize]
      }), [
        h(o.$slots, "before"),
        I(f(W), {
          gap: "0",
          style: { flex: "1" }
        }, {
          default: b(() => [
            $("p", {
              class: m([o.$style.text, "dodo-nowrap"])
            }, [
              h(o.$slots, "default")
            ], 2),
            o.$slots["text-secondary"] ? (r(), v("p", hs, [
              h(o.$slots, "text-secondary")
            ])) : M("", !0)
          ]),
          _: 3
        }),
        h(o.$slots, "after")
      ], 16)
    ], 64));
  }
}), bs = "dodo-menuitem-dropdownitem", ws = "dodo-menuitem-active", ks = "dodo-menuitem-emphasize", Ms = "dodo-menuitem-text", Cs = "dodo-menuitem-separator", Ss = {
  DropdownItem: bs,
  active: ws,
  emphasize: ks,
  text: Ms,
  separator: Cs
}, Bs = {
  $style: Ss
}, _s = /* @__PURE__ */ E(gs, [["__cssModules", Bs]]), Vs = /* @__PURE__ */ _({
  __name: "Modal",
  props: {
    open: { type: Boolean },
    size: {},
    padding: {},
    gap: {}
  },
  emits: ["close"],
  setup(c, { emit: o }) {
    const e = c, s = o, t = w();
    q(() => {
      var n;
      (n = t.value) == null || n.showModal();
    });
    const a = S(() => e.open);
    K(a, (n) => {
      if (n) {
        const p = window.innerWidth - document.body.clientWidth;
        document.body.style.setProperty("padding-right", `${p}px`), document.body.style.setProperty("overflow", "hidden");
      }
    });
    function l(n) {
      const p = t.value;
      n.target === p && u();
    }
    function u() {
      s("close");
    }
    async function i() {
      document.body.style.removeProperty("padding-right"), document.body.style.removeProperty("overflow");
    }
    return (n, p) => (r(), V(re, {
      appear: "",
      "enter-from-class": n.$style.enter,
      "leave-to-class": n.$style.enter,
      onAfterLeave: i
    }, {
      default: b(() => [
        a.value ? (r(), v("dialog", {
          key: 0,
          ref_key: "dialogElem",
          ref: t,
          class: m(n.$style.background),
          onClick: l
        }, [
          I(mo, {
            class: m([n.$style.modal, n.size && n.$style[n.size]]),
            padding: n.padding,
            gap: n.gap
          }, {
            default: b(() => [
              h(n.$slots, "default", { close: u }, () => [
                T("Modal slot")
              ])
            ]),
            _: 3
          }, 8, ["class", "padding", "gap"])
        ], 2)) : M("", !0)
      ]),
      _: 3
    }, 8, ["enter-from-class", "leave-to-class"]));
  }
}), zs = "dodo-modal-background", Is = "dodo-modal-enter", Es = "dodo-modal", Fs = "dodo-modal-s", As = "dodo-modal-l", Ts = {
  background: zs,
  enter: Is,
  modal: Es,
  S: Fs,
  L: As
}, Ns = {
  $style: Ts
}, ar = /* @__PURE__ */ E(Vs, [["__cssModules", Ns]]), Rs = /* @__PURE__ */ _({
  __name: "NavBarItem",
  props: {
    text: {},
    link: {},
    textSecondary: {},
    icon: {},
    active: { type: Boolean },
    important: { type: Boolean }
  },
  setup(c) {
    const o = c, e = ne(), s = w(), t = w(!1);
    x(() => {
      t.value = !!s.value.closest("[data-mobile-nav]");
    });
    const a = de(Fe), l = S(() => a == null ? void 0 : a.collapsed.value), u = S(() => a == null ? void 0 : a.renderMobile.value), i = S(() => u.value || !l.value);
    async function n(p) {
      a && !e.submenu && (a.mobileToggle.value = !1), o.link && await o.link.navigate();
    }
    return (p, y) => (r(), V(f(ye), {
      text: p.text,
      disabled: i.value,
      side: "right"
    }, {
      default: b(() => [
        (r(), V(ue(p.$slots.submenu ? f(De) : "div"), null, {
          dropdown: b(() => [
            h(p.$slots, "submenu")
          ]),
          default: b(() => {
            var C;
            return [
              $("div", {
                ref_key: "el",
                ref: s,
                class: m([
                  p.$style.NavBarItem,
                  (p.active || ((C = p.link) == null ? void 0 : C.isActive.value)) && p.$style.active,
                  p.important && p.$style.important,
                  l.value && p.$style.collapsed
                ]),
                onClick: n
              }, [
                p.icon || p.$slots.icon ? (r(), v("div", {
                  key: 0,
                  class: m(p.$style.icon)
                }, [
                  h(p.$slots, "icon", {}, () => [
                    I(f(O), {
                      name: p.icon
                    }, null, 8, ["name"])
                  ])
                ], 2)) : M("", !0),
                $("div", {
                  class: m(p.$style.textwrap)
                }, [
                  $("p", {
                    class: m([p.$style.text, "dodo-nowrap"]),
                    color: "background"
                  }, F(p.text), 3),
                  p.textSecondary ? (r(), v("p", {
                    key: 0,
                    class: m([p.$style.secondary, "dodo-nowrap"]),
                    color: "background"
                  }, F(p.textSecondary), 3)) : M("", !0)
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
}), Ds = "dodo-navbaritem", Ls = "dodo-navbaritem-active", Hs = "dodo-navbaritem-important", Os = "dodo-navbaritem-textwrap", qs = "dodo-navbaritem-icon", Us = "dodo-navbaritem-text", js = "dodo-navbaritem-secondary", Ws = {
  NavBarItem: Ds,
  active: Ls,
  important: Hs,
  textwrap: Os,
  icon: qs,
  text: Us,
  secondary: js
}, Ps = {
  $style: Ws
}, Se = /* @__PURE__ */ E(Rs, [["__cssModules", Ps]]), Gs = { style: { "margin-right": "8px" } }, Ks = /* @__PURE__ */ _({
  __name: "NavBar",
  props: {
    mobile: { type: Boolean }
  },
  setup(c) {
    const o = c, { screenLarge: e } = Ae(), s = fo("NavBar-collapse", null), t = w(!1), a = S(() => o.mobile || !e.value);
    ce(Fe, { collapsed: s, renderMobile: a, mobileToggle: t });
    function l() {
      a.value && (t.value = !1);
    }
    return (u, i) => (r(), v("div", {
      class: m([
        u.$style.root,
        f(s) && u.$style.collapsed,
        t.value && u.$style.mobileToggle,
        a.value && u.$style.mobileMenu
      ]),
      onClick: le(l, ["self"])
    }, [
      t.value ? (r(), v("div", {
        key: 0,
        class: m(u.$style.backdrop),
        onClick: i[0] || (i[0] = (n) => t.value = !1)
      }, null, 2)) : M("", !0),
      $("div", {
        class: m(u.$style.NavBar)
      }, [
        u.$slots["navbar-header"] ? (r(), v("div", {
          key: 0,
          class: m(u.$style.header)
        }, [
          $("div", null, [
            h(u.$slots, "navbar-header")
          ]),
          $("div", Gs, [
            a.value ? (r(), V(f(X), {
              key: 0,
              variant: "text",
              square: "",
              color: "background",
              onClick: i[1] || (i[1] = (n) => t.value = !1)
            }, {
              default: b(() => [
                I(f(O), { name: "close" })
              ]),
              _: 1
            })) : M("", !0)
          ])
        ], 2)) : M("", !0),
        $("div", {
          class: m(u.$style.middle)
        }, [
          h(u.$slots, "default")
        ], 2),
        u.$slots["navbar-footer"] ? (r(), v("div", {
          key: 1,
          class: m(u.$style.footer)
        }, [
          h(u.$slots, "navbar-footer"),
          a.value ? M("", !0) : (r(), V(Se, {
            key: 0,
            text: f(s) ? "Expand" : "Collapse",
            icon: f(s) ? "last_page" : "first_page",
            onClick: i[2] || (i[2] = (n) => s.value = !f(s))
          }, null, 8, ["text", "icon"]))
        ], 2)) : M("", !0)
      ], 2),
      $("div", {
        class: m(u.$style.wrapMobile)
      }, [
        u.$slots.main ? (r(), V(f(W), {
          key: 0,
          class: m(u.$style.main)
        }, {
          default: b(() => [
            h(u.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : M("", !0),
        a.value ? (r(), v("div", {
          key: 1,
          class: m(u.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          h(u.$slots, "default", { inMobileBar: !0 }),
          h(u.$slots, "navbar-footer", { inMobileBar: !0 }),
          I(Se, {
            text: "Menu",
            icon: "menu",
            onClick: i[3] || (i[3] = (n) => t.value = !t.value)
          })
        ], 2)) : M("", !0)
      ], 2)
    ], 2));
  }
}), Js = "dodo-navbar-root", Zs = "dodo-navbar", Qs = "dodo-navbar-collapsed", Xs = "dodo-navbar-header", Ys = "dodo-navbar-middle", xs = "dodo-navbar-footer", el = "dodo-navbar-wrapmobile", ol = "dodo-navbar-main", tl = "dodo-navbar-backdrop", sl = "dodo-navbar-mobilemenu", ll = "dodo-navbar-mobiletoggle", nl = "dodo-navbar-mobilenav", al = {
  root: Js,
  NavBar: Zs,
  collapsed: Qs,
  header: Xs,
  middle: Ys,
  footer: xs,
  wrapMobile: el,
  main: ol,
  backdrop: tl,
  mobileMenu: sl,
  mobileToggle: ll,
  mobileNav: nl
}, rl = {
  $style: al
}, rr = /* @__PURE__ */ E(Ks, [["__cssModules", rl]]), Le = ho(() => {
  const c = w([]), o = w(""), e = w([]), s = w(!1);
  return K(c, () => {
    s.value = !1;
  }), { headerText: o, activeItems: c, expandedMenu: e, mobileToggle: s };
}), il = (c) => {
  const o = Le.injectOptional(), e = Ve(), s = (n) => n ? [n.uid, ...s(n.parent)] : [], t = (n) => {
    !n || !o || (o.activeItems.value = s(e), o.headerText.value = c.text.value);
  }, a = S(() => o == null ? void 0 : o.headerText.value), l = () => {
    !e || !o || (o.expandedMenu.value.includes(e.uid) ? o.expandedMenu.value = [] : o.expandedMenu.value = s(e));
  }, u = S(() => !e || !o ? !1 : o.activeItems.value.includes(e.uid)), i = S(() => !e || !o ? !1 : o.expandedMenu.value.length ? o.expandedMenu.value.includes(e.uid) : o.activeItems.value.includes(e.uid));
  return K(c.active, () => t(c.active.value), { immediate: !0 }), ee(() => t(!1)), q(() => {
    a.value && (document.title = a.value);
  }), { showAsActive: u, isExpanded: i, toggleExpand: l, headerText: a };
}, dl = /* @__PURE__ */ _({
  __name: "NavBarNew",
  setup(c) {
    const { headerText: o, mobileToggle: e } = Le.createAndProvide(), { screenLarge: s } = Ae(), t = S(() => !s.value);
    function a() {
      e.value = !1;
    }
    return (l, u) => (r(), v("div", {
      class: m([l.$style.root, f(e) && l.$style.mobileToggle, t.value && l.$style.mobileMenu]),
      onClick: le(a, ["self"])
    }, [
      f(e) ? (r(), v("div", {
        key: 0,
        class: m(l.$style.backdrop),
        onClick: u[0] || (u[0] = (i) => e.value = !1)
      }, null, 2)) : M("", !0),
      $("div", {
        class: m(l.$style.NavBar)
      }, [
        $("div", {
          class: m(l.$style.middle)
        }, [
          h(l.$slots, "default")
        ], 2),
        l.$slots["navbar-footer"] ? (r(), v("div", {
          key: 0,
          class: m(l.$style.footer)
        }, [
          h(l.$slots, "navbar-footer")
        ], 2)) : M("", !0)
      ], 2),
      $("div", {
        class: m(l.$style.wrapMobile)
      }, [
        t.value ? (r(), v("div", {
          key: 0,
          class: m(l.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          $("h5", null, F(f(o)), 1),
          I(f(ye), { text: "Toggle menu" }, {
            default: b(() => [
              $("div", {
                class: m(l.$style.menuButton)
              }, [
                I(f(O), {
                  name: "menu",
                  onClick: u[1] || (u[1] = (i) => e.value = !f(e))
                })
              ], 2)
            ]),
            _: 1
          })
        ], 2)) : M("", !0),
        l.$slots.main ? (r(), V(f(W), {
          key: 1,
          class: m(l.$style.main)
        }, {
          default: b(() => [
            h(l.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : M("", !0)
      ], 2)
    ], 2));
  }
}), cl = "dodo-navbarnew-root", ul = "dodo-navbarnew-navbar", pl = "dodo-navbarnew-middle", ml = "dodo-navbarnew-footer", vl = "dodo-navbarnew-wrapmobile", fl = "dodo-navbarnew-main", yl = "dodo-navbarnew-backdrop", $l = "dodo-navbarnew-menubutton", hl = "dodo-navbarnew-mobilemenu", gl = "dodo-navbarnew-mobiletoggle", bl = "dodo-navbarnew-mobilenav", wl = {
  root: cl,
  NavBar: ul,
  middle: pl,
  footer: ml,
  wrapMobile: vl,
  main: fl,
  backdrop: yl,
  menuButton: $l,
  mobileMenu: hl,
  mobileToggle: gl,
  mobileNav: bl
}, kl = {
  $style: wl
}, ir = /* @__PURE__ */ E(dl, [["__cssModules", kl]]), Ml = ["href"], Cl = { key: 0 }, Sl = /* @__PURE__ */ _({
  __name: "NavItem",
  props: {
    link: {},
    text: {},
    textSecondary: {},
    tooltipText: {},
    icon: {},
    important: { type: Boolean }
  },
  setup(c) {
    const o = c, e = S(() => o.link ? f(o.link.isActive) : !1), s = S(() => o.text), { isExpanded: t, showAsActive: a, toggleExpand: l } = il({ text: s, active: e }), u = ne();
    async function i(n) {
      u.submenu && l(), o.link && (await o.link.navigate(), n.preventDefault());
    }
    return (n, p) => (r(), v("div", {
      class: m([n.$style.el])
    }, [
      I(f(ye), {
        text: n.tooltipText,
        side: "right"
      }, {
        default: b(() => {
          var y;
          return [
            $("a", {
              class: m([n.$style.link, f(a) && n.$style.active, n.important && n.$style.important]),
              href: f((y = n.link) == null ? void 0 : y.href),
              onClick: i
            }, [
              $("div", {
                class: m(n.$style.icon)
              }, [
                h(n.$slots, "icon", {}, () => [
                  n.icon ? (r(), V(f(O), {
                    key: 0,
                    name: n.icon
                  }, null, 8, ["name"])) : M("", !0)
                ])
              ], 2),
              $("div", {
                class: m(n.$style.textwrap)
              }, [
                $("p", {
                  class: m([n.$style.text, "dodo-nowrap"])
                }, F(s.value), 3),
                n.textSecondary ? (r(), v("p", {
                  key: 0,
                  class: m([n.$style.secondary, "dodo-nowrap"])
                }, F(n.textSecondary), 3)) : M("", !0)
              ], 2),
              f(u).submenu ? (r(), v("div", Cl, [
                I(f(O), {
                  name: f(t) ? "expand_less" : "expand_more",
                  size: "s",
                  style: { margin: "0 -0.25em" }
                }, null, 8, ["name"])
              ])) : M("", !0)
            ], 10, Ml)
          ];
        }),
        _: 3
      }, 8, ["text"]),
      n.$slots.submenu ? (r(), v("div", {
        key: 0,
        class: m([n.$style.submenu, f(t) && n.$style.expanded])
      }, [
        h(n.$slots, "submenu")
      ], 2)) : M("", !0)
    ], 2));
  }
}), Bl = "dodo-navitem-el", _l = "dodo-navitem-link", Vl = "dodo-navitem-submenu", zl = "dodo-navitem-expanded", Il = "dodo-navitem-active", El = "dodo-navitem-important", Fl = "dodo-navitem-textwrap", Al = "dodo-navitem-icon", Tl = "dodo-navitem-text", Nl = "dodo-navitem-secondary", Rl = {
  el: Bl,
  link: _l,
  submenu: Vl,
  expanded: zl,
  active: Il,
  important: El,
  textwrap: Fl,
  icon: Al,
  text: Tl,
  secondary: Nl
}, Dl = {
  $style: Rl
}, dr = /* @__PURE__ */ E(Sl, [["__cssModules", Dl]]), Ll = /* @__PURE__ */ _({
  __name: "Row",
  props: {
    gap: {},
    padding: {},
    justify: {},
    align: {},
    wrap: { type: Boolean },
    grow: { type: Boolean }
  },
  setup(c) {
    const o = oe();
    return (e, s) => (r(), v("div", {
      class: m([
        e.$style.el,
        f(o).gap(e.gap),
        f(o).padding(e.padding),
        f(o).align(e.align),
        f(o).justify(e.justify),
        f(o).wrap(e.wrap),
        f(o).grow(e.grow)
      ])
    }, [
      h(e.$slots, "default")
    ], 2));
  }
}), Hl = "dodo-row-el", Ol = {
  el: Hl
}, ql = {
  $style: Ol
}, se = /* @__PURE__ */ E(Ll, [["__cssModules", ql]]), Ul = /* @__PURE__ */ _({
  __name: "ScrollContainer",
  setup(c) {
    const o = S(() => "");
    return (e, s) => (r(), v("div", {
      class: m([e.$style.ScrollContainer]),
      style: G(o.value)
    }, [
      h(e.$slots, "default")
    ], 6));
  }
}), jl = "dodo-scrollcontainer", Wl = {
  ScrollContainer: jl
}, Pl = {
  $style: Wl
}, Gl = /* @__PURE__ */ E(Ul, [["__cssModules", Pl]]), Kl = {
  key: 0,
  class: "dodo-nowrap"
}, Jl = {
  key: 1,
  class: "dodo-nowrap dodo-fade-secondary"
}, Zl = ["disabled"], Ql = 12, Xl = /* @__PURE__ */ _({
  __name: "Select",
  props: {
    options: {},
    modelValue: {},
    disabled: { type: Boolean },
    placeholder: {},
    multiple: { type: Boolean },
    variant: {},
    size: {}
  },
  emits: ["update:modelValue"],
  setup(c, { emit: o }) {
    const e = c, s = o, t = S(() => (e.multiple ? [e.modelValue].flat() : [e.modelValue]).filter(N)), a = w(!1), l = w(""), u = w(), i = w(), n = w(), p = w();
    q(() => {
      a.value && u.value && (l.value = "", u.value.focus());
    }), q(() => {
      l.value && i.value && i.value.$el.querySelector("input").focus();
    }), q(() => {
      a.value && setTimeout(() => {
        var g;
        const k = (g = n.value) == null ? void 0 : g.$el, d = k == null ? void 0 : k.querySelector("[data-selectactive]");
        d == null || d.scrollIntoView({ block: "center" });
      }, 0);
    });
    const y = w(!1), C = S(() => e.options.length > Ql), A = S(() => C.value && !y.value ? 6 : e.options.length), z = S(() => l.value || e.options.length >= 10), L = S(() => {
      const k = l.value.toLowerCase(), d = e.options.filter((R) => `${R.value}|${R.label}`.toLowerCase().includes(k));
      if (!e.multiple)
        return d;
      const g = d.filter((R) => t.value.find((j) => U(R, j))), B = d.filter((R) => !g.includes(R));
      return g.concat(B);
    }), J = S(() => e.placeholder ? e.placeholder : e.multiple ? "Select one or more" : "Select one");
    function N(k) {
      return e.options.find((d) => U(d, k));
    }
    function H(k) {
      let d = k.value;
      e.multiple ? t.value.includes(d) ? d = t.value.filter((g) => !U(k, g)) : d = t.value.concat(k.value) : a.value = !1, s("update:modelValue", d);
    }
    function U(k, d) {
      return k.value === d;
    }
    function Z(k) {
      return k.label || `${k.value}`;
    }
    function Y(k) {
      return t.value.some((d) => U(k, d));
    }
    function Q(k) {
      var B, R;
      const d = (B = p.value) == null ? void 0 : B.$el.contains(k.target), g = (R = n.value) == null ? void 0 : R.$el.contains(k.target);
      a.value = d || g;
    }
    return x(() => {
      document.addEventListener("focusin", Q);
    }), ee(() => {
      document.removeEventListener("focusin", Q);
    }), (k, d) => k.variant === "buttons" ? (r(), V(f(se), {
      key: 0,
      gap: "xs",
      wrap: ""
    }, {
      default: b(() => [
        (r(!0), v(D, null, P(k.options.slice(0, A.value), (g, B) => (r(), V(f(X), {
          key: Z(g),
          color: Y(g) ? "info" : void 0,
          active: Y(g),
          variant: Y(g) && !k.multiple ? "solid" : void 0,
          disabled: k.disabled,
          small: k.size === "s",
          rounded: "",
          onClick: (R) => H(g)
        }, {
          default: b(() => [
            k.multiple && Y(g) ? (r(), V(f(O), {
              key: 0,
              name: "check",
              size: "s",
              style: { margin: "-2px" }
            })) : M("", !0),
            h(k.$slots, "default", {
              option: g,
              index: B
            }, () => [
              T(F(Z(g)), 1)
            ])
          ]),
          _: 2
        }, 1032, ["color", "active", "variant", "disabled", "small", "onClick"]))), 128)),
        C.value ? (r(), v(D, { key: 0 }, [
          y.value ? (r(), V(f(X), {
            key: 0,
            small: k.size === "s",
            variant: "text",
            rounded: "",
            onClick: d[0] || (d[0] = (g) => y.value = !y.value)
          }, {
            default: b(() => [
              T(" Less "),
              I(f(O), {
                name: "expand_less",
                size: "s",
                style: { margin: "-2px" }
              })
            ]),
            _: 1
          }, 8, ["small"])) : (r(), V(f(X), {
            key: 1,
            small: k.size === "s",
            variant: "text",
            rounded: "",
            onClick: d[1] || (d[1] = (g) => y.value = !y.value)
          }, {
            default: b(() => [
              T(F(k.options.length - A.value) + " more ", 1),
              I(f(O), {
                name: "expand_more",
                size: "s",
                style: { margin: "-2px" }
              })
            ]),
            _: 1
          }, 8, ["small"]))
        ], 64)) : M("", !0)
      ]),
      _: 3
    })) : (r(), V(f(De), {
      key: 1,
      modelValue: a.value,
      "onUpdate:modelValue": d[5] || (d[5] = (g) => a.value = g),
      disabled: k.disabled
    }, {
      dropdown: b(() => [
        I(f(W), {
          ref_key: "dropdownEl",
          ref: n,
          style: { "min-height": "0" },
          gap: "0",
          onMousedown: d[4] || (d[4] = le(() => {
          }, ["stop", "prevent"]))
        }, {
          default: b(() => [
            te(I(f(se), {
              padding: "s",
              class: m(k.$style.searchbox)
            }, {
              default: b(() => [
                I(f(Va), {
                  ref_key: "searchEl",
                  ref: i,
                  modelValue: l.value,
                  "onUpdate:modelValue": d[3] || (d[3] = (g) => l.value = g),
                  type: "search",
                  placeholder: "Search",
                  tabindex: "0",
                  style: { "flex-grow": "1" }
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["class"]), [
              [We, z.value]
            ]),
            I(f(Gl), null, {
              default: b(() => [
                (r(!0), v(D, null, P(L.value, (g, B) => (r(), V(f(_s), {
                  key: `${g.value}`,
                  "data-selectactive": t.value.includes(g.value) ? "true" : void 0,
                  active: t.value.includes(g.value),
                  onClick: (R) => H(g)
                }, {
                  default: b(() => [
                    h(k.$slots, "default", {
                      index: B,
                      option: g
                    }, () => [
                      T(F(Z(g)), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["data-selectactive", "active", "onClick"]))), 128))
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 512)
      ]),
      default: b(() => [
        I(f(jt), {
          ref_key: "fieldEl",
          ref: p,
          button: "",
          disabled: k.disabled
        }, {
          after: b(() => [
            I(f(O), { name: "arrow_drop_down" })
          ]),
          default: b(() => [
            t.value.length ? (r(), v("p", Kl, [
              (r(!0), v(D, null, P(t.value, (g, B) => (r(), v(D, null, [
                B ? (r(), v(D, { key: 0 }, [
                  T(", ")
                ], 64)) : M("", !0),
                N(g) ? h(k.$slots, "default", {
                  key: 1,
                  index: k.options.indexOf(N(g)),
                  option: N(g)
                }, () => [
                  T(F(Z(N(g))), 1)
                ]) : (r(), v(D, { key: 2 }, [
                  T(F(g), 1)
                ], 64))
              ], 64))), 256))
            ])) : (r(), v("p", Jl, F(J.value), 1)),
            te($("input", {
              ref_key: "hiddenInput",
              ref: u,
              "onUpdate:modelValue": d[2] || (d[2] = (g) => l.value = g),
              style: { position: "fixed", "pointer-events": "none", opacity: "0" },
              disabled: k.disabled
            }, null, 8, Zl), [
              [ze, l.value]
            ])
          ]),
          _: 3
        }, 8, ["disabled"])
      ]),
      _: 3
    }, 8, ["modelValue", "disabled"]));
  }
}), Yl = "dodo-select-searchbox", xl = {
  searchbox: Yl
}, en = {
  $style: xl
}, cr = /* @__PURE__ */ E(Xl, [["__cssModules", en]]), on = ["id", "disabled"], tn = ["value"], sn = /* @__PURE__ */ _({
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
  setup(c, { emit: o }) {
    const e = c, s = o, t = S({
      get: () => e.modelValue,
      set: (a) => s("update:modelValue", a)
    });
    return (a, l) => (r(), V(us, {
      class: m(a.error && a.$style.error),
      label: a.label,
      error: a.error,
      description: a.description,
      optional: a.optional,
      for: a.id ?? void 0
    }, {
      default: b(({ entryId: u }) => [
        $("div", {
          class: m(a.$style.select)
        }, [
          te($("select", {
            id: a.id ?? u,
            "onUpdate:modelValue": l[0] || (l[0] = (i) => t.value = i),
            disabled: a.disabled,
            class: m(["dodo-formfield"])
          }, [
            (r(!0), v(D, null, P(a.options, (i) => (r(), v("option", {
              key: i.label,
              value: i.value
            }, F(i.label), 9, tn))), 128))
          ], 8, on), [
            [Pe, t.value]
          ]),
          $("span", {
            class: m(a.$style.icon)
          }, [
            I(O, { name: "unfold_more" })
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["class", "label", "error", "description", "optional", "for"]));
  }
}), ln = "dodo-simpleselect-select", nn = "dodo-simpleselect-icon", an = "dodo-simpleselect-error", rn = {
  select: ln,
  icon: nn,
  error: an
}, dn = {
  $style: rn
}, ur = /* @__PURE__ */ E(sn, [["__cssModules", dn]]), cn = {
  key: 0,
  viewBox: "0 0 48 48"
}, un = /* @__PURE__ */ pe('<clipPath id="g"><path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path></clipPath><g clip-path="url(#g)"><path fill="#FBBC05" d="M0 37V11l17 13z"></path><path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path><path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path><path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path></g>', 2), pn = [
  un
], mn = {
  key: 1,
  viewBox: "0 0 248 204"
}, vn = /* @__PURE__ */ $("path", {
  id: "white_background",
  fill: "#1D9BF0",
  d: "M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
}, null, -1), fn = [
  vn
], yn = {
  key: 2,
  viewBox: "60 60 140 140"
}, $n = /* @__PURE__ */ pe('<path fill="#E01E5A" d="M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"></path><path fill="#E01E5A" d="M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9V151.2z"></path><path fill="#36C5F0" d="M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"></path><path fill="#36C5F0" d="M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9H118.8z"></path><path fill="#2EB67D" d="M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"></path><path fill="#2EB67D" d="M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9V118.8z"></path><path fill="#ECB22E" d="M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"></path><path fill="#ECB22E" d="M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9H151.2z"></path>', 8), hn = [
  $n
], gn = {
  key: 3,
  viewBox: "2 2 46 46"
}, bn = /* @__PURE__ */ $("path", { d: "M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" }, null, -1), wn = [
  bn
], kn = {
  key: 4,
  viewBox: "0 0 14222 14222"
}, Mn = /* @__PURE__ */ $("circle", {
  cx: "7111",
  cy: "7112",
  r: "7111",
  fill: "#1977f3"
}, null, -1), Cn = /* @__PURE__ */ $("path", {
  d: "M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z",
  fill: "#fff"
}, null, -1), Sn = [
  Mn,
  Cn
], Bn = {
  key: 5,
  viewBox: "0 0 24 24"
}, _n = /* @__PURE__ */ $("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }, null, -1), Vn = [
  _n
], zn = {
  key: 6,
  viewBox: "6 6 36 36"
}, In = /* @__PURE__ */ $("path", {
  fill: "#0288D1",
  d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
}, null, -1), En = /* @__PURE__ */ $("path", {
  fill: "#FFF",
  d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
}, null, -1), Fn = [
  In,
  En
], An = {
  key: 7,
  viewBox: "10 10 160 160"
}, Tn = /* @__PURE__ */ pe('<defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"></stop><stop offset="1" stop-color="#23b33a"></stop></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531"></feGaussianBlur></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"></path><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"></path><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"></path><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"></path><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"></path>', 6), Nn = [
  Tn
], Rn = /* @__PURE__ */ _({
  __name: "SocialIcon",
  props: {
    name: {},
    white: { type: Boolean },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(c) {
    return (o, e) => (r(), v("span", {
      class: m([o.$style.SocialIcon, o.small && o.$style.small, o.large && o.$style.large, o.white && o.$style.white])
    }, [
      o.name === "google" ? (r(), v("svg", cn, pn)) : o.name === "twitter" ? (r(), v("svg", mn, fn)) : o.name === "slack" ? (r(), v("svg", yn, hn)) : o.white && o.name === "facebook" ? (r(), v("svg", gn, wn)) : o.name === "facebook" ? (r(), v("svg", kn, Sn)) : o.white && o.name === "linkedin" ? (r(), v("svg", Bn, Vn)) : o.name === "linkedin" ? (r(), v("svg", zn, Fn)) : o.name === "whatsapp" ? (r(), v("svg", An, Nn)) : M("", !0)
    ], 2));
  }
}), Dn = "dodo-socialicon", Ln = "dodo-socialicon-white", Hn = "dodo-socialicon-small", On = "dodo-socialicon-large", qn = {
  SocialIcon: Dn,
  white: Ln,
  small: Hn,
  large: On
}, Un = {
  $style: qn
}, pr = /* @__PURE__ */ E(Rn, [["__cssModules", Un]]), jn = /* @__PURE__ */ $("path", {
  stroke: "currentColor",
  fill: "none",
  d: "M 9 1 A 8 8 0 0 1 17 9",
  "stroke-width": "2"
}, null, -1), Wn = /* @__PURE__ */ $("path", {
  stroke: "currentColor",
  opacity: "0.33",
  fill: "none",
  d: "M 17 9 A 8 8 0 1 1 9 1",
  "stroke-width": "2"
}, null, -1), Pn = [
  jn,
  Wn
], Gn = /* @__PURE__ */ _({
  __name: "Spinner",
  props: {
    color: { default: void 0 },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(c) {
    const o = c, e = S(() => {
      let s = "";
      return o.color === "inherit" ? s += "color:inherit;" : o.color && (s += `color:var(--dodo-color-${o.color});`), s;
    });
    return (s, t) => (r(), v("div", {
      class: m([s.$style.Spinner, s.small && s.$style.small, s.large && s.$style.large])
    }, [
      (r(), v("svg", {
        style: G(e.value),
        viewBox: "0 0 18 18"
      }, Pn, 4))
    ], 2));
  }
}), Kn = "dodo-spinner", Jn = "dodo-spinner-small", Zn = "dodo-spinner-large", Qn = {
  Spinner: Kn,
  small: Jn,
  large: Zn
}, Xn = {
  $style: Qn
}, Yn = /* @__PURE__ */ E(Gn, [["__cssModules", Xn]]), xn = ["onClick"], ea = {
  key: 1,
  class: "dodo-color-background"
}, oa = { style: {} }, ta = { key: 0 }, sa = {
  key: 1,
  class: "dodo-fade-secondary"
}, la = {
  key: 0,
  class: "dodo-fade-secondary"
}, na = /* @__PURE__ */ $("br", null, null, -1), aa = /* @__PURE__ */ _({
  __name: "Stepper",
  props: {
    stepIndex: {},
    steps: {},
    submit: { type: Function },
    completed: {}
  },
  emits: ["update:stepIndex", "submit"],
  setup(c, { emit: o }) {
    const e = c, s = o, t = w(0), a = S(() => e.steps[t.value]);
    function l() {
      t.value--;
    }
    async function u() {
      const n = a.value;
      if (n.filled !== !1 && !(n.validate && !await n.validate())) {
        if (t.value === e.steps.length - 1) {
          await e.submit();
          return;
        }
        t.value++;
      }
    }
    function i(n) {
      n > t.value || (t.value = n);
    }
    return q(() => {
      e.stepIndex != null && (t.value = e.stepIndex);
    }), K(t, () => {
      s("update:stepIndex", t.value);
    }), (n, p) => (r(), V(f(W), {
      class: m(n.$style.stepper)
    }, {
      default: b(() => [
        (r(!0), v(D, null, P(n.steps, (y, C) => (r(), V(f(se), {
          key: y.key,
          align: "stretch",
          gap: "m",
          class: m(C > t.value && n.$style.inactiveStep)
        }, {
          default: b(() => [
            I(f(W), { align: "center" }, {
              default: b(() => [
                $("div", {
                  class: m([n.$style.circle]),
                  onClick: (A) => i(C)
                }, [
                  t.value > C ? (r(), V(f(O), {
                    key: 0,
                    name: "check"
                  })) : (r(), v("h3", ea, F(C + 1), 1))
                ], 10, xn),
                C < n.steps.length - 1 ? (r(), v("div", {
                  key: 0,
                  class: m(n.$style.line)
                }, null, 2)) : M("", !0)
              ]),
              _: 2
            }, 1024),
            I(f(W), { grow: "" }, {
              default: b(() => [
                I(f(W), {
                  gap: "xs",
                  onClick: (A) => i(C)
                }, {
                  default: b(() => [
                    $("h3", oa, [
                      y === a.value ? (r(), v("span", ta, F(y.name), 1)) : (r(), v("span", sa, F(y.name), 1))
                    ]),
                    y.hint ? (r(), v("p", la, F(y.hint), 1)) : M("", !0)
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                y === a.value ? (r(), V(f(W), { key: 0 }, {
                  default: b(() => [
                    h(n.$slots, y.slot),
                    I(f(se), null, {
                      default: b(() => [
                        t.value > 0 ? (r(), V(f(X), {
                          key: 0,
                          variant: "text",
                          onClick: l
                        }, {
                          default: b(() => [
                            T(" Back ")
                          ]),
                          _: 1
                        })) : M("", !0),
                        t.value < n.steps.length - 1 ? (r(), V(f(X), {
                          key: 1,
                          disabled: y.filled === !1,
                          color: "primary",
                          variant: "solid",
                          onClick: u
                        }, {
                          default: b(() => [
                            h(n.$slots, "continue-button-text", {}, () => [
                              T("Continue")
                            ])
                          ]),
                          _: 2
                        }, 1032, ["disabled"])) : (r(), V(f(X), {
                          key: 2,
                          color: "primary",
                          variant: "solid",
                          onClick: u
                        }, {
                          default: b(() => [
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
                }, 1024)) : M("", !0),
                na
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
}), ra = "dodo-stepper-line", ia = "dodo-stepper-circle", da = "dodo-stepper-inactivestep", ca = {
  line: ra,
  circle: ia,
  inactiveStep: da
}, ua = {
  $style: ca
}, mr = /* @__PURE__ */ E(aa, [["__cssModules", ua]]), pa = ["onClick"], ma = /* @__PURE__ */ $("hr", null, null, -1), va = /* @__PURE__ */ _({
  __name: "Tabs",
  props: {
    tabs: {},
    tabIndex: {}
  },
  emits: ["update:tabIndex"],
  setup(c, { emit: o }) {
    const e = c, s = o, t = w(""), a = S(() => e.tabs.find((u) => l(u) === t.value));
    q(() => {
      !a.value && e.tabs.length && (t.value = l(e.tabs[0]));
    }), K(
      () => e.tabIndex,
      () => {
        e.tabIndex != null && e.tabs[e.tabIndex] && (t.value = l(e.tabs[e.tabIndex]));
      },
      { immediate: !0 }
    ), K(
      () => a.value,
      () => {
        a.value && s("update:tabIndex", e.tabs.indexOf(a.value));
      },
      { immediate: !0 }
    );
    function l(u) {
      return u.slot ?? u.name;
    }
    return (u, i) => (r(), V(f(W), {
      gap: "m",
      style: { "min-width": "0" }
    }, {
      default: b(() => [
        I(f(W), { gap: "0" }, {
          default: b(() => [
            $("div", {
              class: m(u.$style.bar)
            }, [
              (r(!0), v(D, null, P(u.tabs, (n, p) => (r(), v("div", {
                key: l(n),
                class: m([u.$style.tab, t.value === l(n) && u.$style.active, n.disabled && u.$style.disabled]),
                onClick: (y) => t.value = l(n)
              }, [
                $("h5", {
                  class: m(u.$style.tabName)
                }, [
                  h(u.$slots, "tab-title", {
                    i: p,
                    tab: n
                  }, () => [
                    T(F(n.name), 1)
                  ])
                ], 2)
              ], 10, pa))), 128))
            ], 2),
            ma
          ]),
          _: 3
        }),
        a.value ? h(u.$slots, a.value.slot ?? "default", {
          key: 0,
          tab: a.value
        }) : M("", !0)
      ]),
      _: 3
    }));
  }
}), fa = "dodo-tabs-bar", ya = "dodo-tabs-tab", $a = "dodo-tabs-tabname", ha = "dodo-tabs-active", ga = "dodo-tabs-disabled", ba = {
  bar: fa,
  tab: ya,
  tabName: $a,
  active: ha,
  disabled: ga
}, wa = {
  $style: ba
}, vr = /* @__PURE__ */ E(va, [["__cssModules", wa]]), ka = ["placeholder", "disabled", "maxlength", "type", "name", "autofocus", "autocomplete"], Ma = /* @__PURE__ */ _({
  __name: "TextInput",
  props: /* @__PURE__ */ Ie({
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
  setup(c) {
    const o = Ee(c, "modelValue");
    return (e, s) => te((r(), v("input", {
      "onUpdate:modelValue": s[0] || (s[0] = (t) => o.value = t),
      class: m(["dodo-formfield", e.error && e.$style.error, e.$style.input]),
      placeholder: e.placeholder,
      disabled: e.disabled,
      maxlength: e.maxlength,
      type: e.type || "text",
      name: e.name,
      autofocus: e.autofocus,
      autocomplete: e.autocomplete
    }, null, 10, ka)), [
      [Ge, o.value]
    ]);
  }
}), Ca = "dodo-textinput-input", Sa = "dodo-textinput-error", Ba = {
  input: Ca,
  error: Sa
}, _a = {
  $style: Ba
}, Va = /* @__PURE__ */ E(Ma, [["__cssModules", _a]]), za = ["placeholder", "disabled", "name", "autofocus", "rows", "autocomplete"], Ia = /* @__PURE__ */ _({
  __name: "Textarea",
  props: /* @__PURE__ */ Ie({
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
  setup(c) {
    const o = c, e = Ee(c, "modelValue"), s = w(null), t = w(o.minRows);
    function a() {
      const i = o.maxRows && o.maxRows > 0 ? o.maxRows : 12, n = o.minRows && o.minRows > 0 ? o.minRows : 4, p = s.value;
      if (!p)
        return n;
      let y = n;
      for (p.style.overflow = "hidden", p.setAttribute("rows", `${y}`); p.scrollHeight > p.offsetHeight && y < i; )
        p.setAttribute("rows", `${++y}`);
      return p.style.overflow = "", y;
    }
    function l() {
      t.value = a(), u.value || window.requestAnimationFrame(l);
    }
    const u = w(!1);
    return x(l), ee(() => {
      u.value = !0;
    }), (i, n) => te((r(), v("textarea", {
      ref_key: "textarea",
      ref: s,
      "onUpdate:modelValue": n[0] || (n[0] = (p) => e.value = p),
      class: m(["dodo-formfield", i.error && i.$style.error, i.$style.textarea]),
      placeholder: i.placeholder,
      disabled: i.disabled,
      name: i.name,
      autofocus: i.autofocus,
      rows: t.value,
      autocomplete: i.autocomplete,
      resize: "false"
    }, null, 10, za)), [
      [ze, e.value]
    ]);
  }
}), Ea = "dodo-textarea", Fa = "dodo-textarea-error", Aa = {
  textarea: Ea,
  error: Fa
}, Ta = {
  $style: Aa
}, fr = /* @__PURE__ */ E(Ia, [["__cssModules", Ta]]), Na = /* @__PURE__ */ _({
  __name: "Tooltip",
  props: {
    text: {},
    disabled: { type: Boolean },
    side: {}
  },
  setup(c) {
    const o = c, e = w(!1), s = w(""), t = w(), a = w(), l = ne(), u = S(() => o.disabled || !(o.text || l["tooltip-text"]));
    ee(n);
    async function i() {
      if (e.value || u.value)
        return;
      e.value = !0, await _e();
      const p = t.value.getBoundingClientRect(), y = a.value.getBoundingClientRect();
      o.side, p.bottom + y.height < window.innerHeight;
      let C = (p.right + p.left - y.width) / 2, A = p.bottom;
      o.side === "right" ? (C = p.right, A = (p.bottom + p.top - y.height) / 2) : o.side === "top" ? (C = (p.left + p.right - y.width) / 2, A = p.top - y.height) : o.side === "left" && (C = p.left - y.width, A = (p.bottom + p.top - y.height) / 2), A = Math.round(Math.max(Math.min(A, window.innerHeight - y.height), 0)), C = Math.round(Math.max(Math.min(C, window.innerWidth - y.width), 0)), s.value = `left:${C}px;top:${A}px`;
    }
    function n() {
      e.value = !1;
    }
    return (p, y) => (r(), v("div", {
      ref_key: "trigger",
      ref: t,
      class: m(p.$style.trigger),
      onMouseover: i,
      onMouseleave: n
    }, [
      h(p.$slots, "default"),
      e.value ? (r(), V(Be, {
        key: 0,
        to: "body"
      }, [
        $("div", {
          ref_key: "tooltip",
          ref: a,
          class: m(p.$style.Tooltip),
          style: G(s.value)
        }, [
          $("div", {
            class: m(p.$style.content)
          }, [
            $("small", {
              class: m(p.$style.text)
            }, [
              h(p.$slots, "tooltip-text", {}, () => [
                T(F(p.text), 1)
              ])
            ], 2)
          ], 2)
        ], 6)
      ])) : M("", !0)
    ], 34));
  }
}), Ra = "dodo-tooltip", Da = "dodo-tooltip-content", La = "dodo-tooltip-text", Ha = "dodo-tooltip-trigger", Oa = {
  Tooltip: Ra,
  content: Da,
  text: La,
  trigger: Ha
}, qa = {
  $style: Oa
}, ye = /* @__PURE__ */ E(Na, [["__cssModules", qa]]);
export {
  Pa as Animated,
  Ga as Avatar,
  X as Button,
  mo as Card,
  ke as Checkbox,
  No as Chip,
  xa as ChoiceChips,
  W as Column,
  er as CrashDialog,
  or as Datatable,
  Vt as Dialog,
  De as Dropdown,
  jt as Field,
  tr as FluidGrid,
  sr as Form,
  us as FormItem,
  lr as Grid,
  O as Icon,
  nr as Input,
  _s as MenuItem,
  ar as Modal,
  rr as NavBar,
  Se as NavBarItem,
  ir as NavBarNew,
  dr as NavItem,
  se as Row,
  Gl as ScrollContainer,
  cr as Select,
  ur as SimpleSelect,
  pr as SocialIcon,
  Yn as Spinner,
  mr as Stepper,
  vr as Tabs,
  Va as TextInput,
  fr as Textarea,
  ye as Tooltip,
  Xa as ValidationError,
  Za as crashPlugin,
  Te as crashServiceKey,
  we as darkModeSetting,
  vo as dropdownServiceKey,
  Fe as navBarServiceKey,
  Ja as parseColor,
  $o as useCrashService,
  Ka as useElementSize,
  Qa as useResizeObserver,
  Ae as useScreenSize,
  ho as useServiceFactory,
  fo as useSessionStoredRef,
  oe as useTheme,
  Ya as useValidation,
  yo as useWebFont
};
