var Qe = Object.defineProperty;
var Xe = (n, e, o) => e in n ? Qe(n, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[e] = o;
var he = (n, e, o) => Xe(n, typeof e != "symbol" ? e + "" : e, o);
import { defineComponent as B, openBlock as r, createBlock as V, TransitionGroup as Ye, withCtx as k, renderSlot as g, Transition as re, computed as w, createElementBlock as v, normalizeClass as m, normalizeStyle as P, Fragment as D, createTextVNode as T, toDisplayString as A, createCommentVNode as C, ref as $, watchEffect as L, createElementVNode as h, useAttrs as xe, mergeProps as ie, unref as f, onMounted as x, onBeforeUnmount as ee, watch as K, inject as de, provide as ce, reactive as $e, withModifiers as oe, createVNode as I, resolveDynamicComponent as ue, renderList as G, Teleport as ze, nextTick as Ie, onUnmounted as eo, useSlots as ne, getCurrentInstance as Ee, withDirectives as se, vShow as oo, vModelText as Ae, vModelSelect as to, createStaticVNode as pe, mergeModels as Fe, useModel as Te, vModelDynamic as so } from "vue";
const ge = !1, Cr = /* @__PURE__ */ B({
  __name: "Animated",
  props: {
    list: { type: Boolean },
    appear: { type: Boolean }
  },
  setup(n) {
    return (e, o) => e.list ? (r(), V(Ye, {
      key: 0,
      name: "dodo",
      appear: e.appear,
      css: !ge
    }, {
      default: k(() => [
        g(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"])) : (r(), V(re, {
      key: 1,
      appear: e.appear,
      name: "dodo",
      css: !ge,
      mode: "out-in"
    }, {
      default: k(() => [
        g(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"]));
  }
}), lo = /* @__PURE__ */ B({
  __name: "Avatar",
  props: {
    text: {},
    image: {},
    round: { type: Boolean }
  },
  setup(n) {
    const e = ["info", "warning", "success", "danger"], o = n, s = w(() => {
      let c = o.text.trim();
      const a = /\b\w|[A-Z]/g, d = o.text.match(a);
      return d != null && d.length && (c = d.join("")), c.slice(0, 2).toUpperCase();
    }), t = w(() => {
      const c = e.length, a = i(o.text);
      return `var(--dodo-color-${e[a % c]}`;
    });
    function i(c) {
      let a = 0;
      for (let d = 0; d < c.length; ++d) a = 997 * (a % 1e6) + 11 * c.charCodeAt(d);
      return a;
    }
    return (c, a) => (r(), v("span", {
      class: m([c.$style.Avatar, c.round && c.$style.round]),
      style: P([`--color:${t.value}`, c.image ? `background-image:url(${c.image})` : ""])
    }, [
      c.image ? C("", !0) : (r(), v(D, { key: 0 }, [
        T(A(s.value), 1)
      ], 64))
    ], 6));
  }
}), no = "dodo-avatar", ao = "dodo-avatar-round", ro = {
  Avatar: no,
  round: ao
}, E = (n, e) => {
  const o = n.__vccOpts || n;
  for (const [s, t] of e)
    o[s] = t;
  return o;
}, io = {
  $style: ro
}, Sr = /* @__PURE__ */ E(lo, [["__cssModules", io]]), co = (n, e) => {
  const o = n.__vccOpts || n;
  for (const [s, t] of e)
    o[s] = t;
  return o;
}, be = $(), uo = localStorage.getItem("dodotheme"), Ne = $(uo), Re = $();
if (window.matchMedia) {
  const n = window.matchMedia("(prefers-color-scheme: dark)"), e = () => {
    Re.value = n.matches ? "dark" : "light";
  };
  n.addEventListener("change", e), e();
}
const po = w(() => be.value === "auto" ? Re.value : be.value), mo = w(() => Ne.value || po.value || "light");
L(() => {
  localStorage.setItem("dodotheme", Ne.value ?? ""), document.body.setAttribute("data-dodotheme", mo.value ?? "");
});
const we = $(), vo = localStorage.getItem("dodotheme"), De = $(vo), Le = $();
if (window.matchMedia) {
  const n = window.matchMedia("(prefers-color-scheme: dark)"), e = () => {
    Le.value = n.matches ? "dark" : "light";
  };
  n.addEventListener("change", e), e();
}
const fo = w(() => we.value === "auto" ? Le.value : we.value), yo = w(() => De.value || fo.value || "light");
L(() => {
  localStorage.setItem("dodotheme", De.value ?? ""), document.body.setAttribute("data-dodotheme", yo.value ?? "");
});
const ke = $(), ho = localStorage.getItem("dodotheme"), He = $(ho), Oe = $();
if (window.matchMedia) {
  const n = window.matchMedia("(prefers-color-scheme: dark)"), e = () => {
    Oe.value = n.matches ? "dark" : "light";
  };
  n.addEventListener("change", e), e();
}
const $o = w(() => ke.value === "auto" ? Oe.value : ke.value), go = w(() => He.value || $o.value || "light");
L(() => {
  localStorage.setItem("dodotheme", He.value ?? ""), document.body.setAttribute("data-dodotheme", go.value ?? "");
});
const Me = $(), bo = localStorage.getItem("dodotheme"), je = $(bo), Ue = $();
if (window.matchMedia) {
  const n = window.matchMedia("(prefers-color-scheme: dark)"), e = () => {
    Ue.value = n.matches ? "dark" : "light";
  };
  n.addEventListener("change", e), e();
}
const wo = w(() => Me.value === "auto" ? Ue.value : Me.value), ko = w(() => je.value || wo.value || "light");
L(() => {
  localStorage.setItem("dodotheme", je.value ?? ""), document.body.setAttribute("data-dodotheme", ko.value ?? "");
});
const Mo = /* @__PURE__ */ h("path", {
  stroke: "currentColor",
  fill: "none",
  d: "M 9 1 A 8 8 0 0 1 17 9",
  "stroke-width": "2"
}, null, -1), Co = /* @__PURE__ */ h("path", {
  stroke: "currentColor",
  opacity: "0.33",
  fill: "none",
  d: "M 17 9 A 8 8 0 1 1 9 1",
  "stroke-width": "2"
}, null, -1), So = [
  Mo,
  Co
], _o = /* @__PURE__ */ B({
  __name: "Spinner",
  props: {
    color: { default: void 0 },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(n) {
    const e = n, o = w(() => {
      let s = "";
      return e.color === "inherit" ? s += "color:inherit;" : e.color && (s += `color:var(--dodo-color-${e.color});`), s;
    });
    return (s, t) => (r(), v("div", {
      class: m([s.$style.Spinner, s.small && s.$style.small, s.large && s.$style.large])
    }, [
      (r(), v("svg", {
        style: P(o.value),
        viewBox: "0 0 18 18"
      }, So, 4))
    ], 2));
  }
}), Bo = "dodo-spinner", Vo = "dodo-spinner-small", zo = "dodo-spinner-large", Io = {
  Spinner: Bo,
  small: Vo,
  large: zo
}, Eo = {
  $style: Io
}, Ao = /* @__PURE__ */ co(_o, [["__cssModules", Eo]]), Fo = ["disabled", "type"], To = /* @__PURE__ */ B({
  inheritAttrs: !1,
  __name: "Button",
  props: {
    color: {},
    variant: {},
    type: {},
    size: {},
    active: { type: Boolean },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    round: { type: Boolean },
    square: { type: Boolean },
    small: {},
    rounded: {}
  },
  setup(n) {
    const e = n, o = w(() => {
      let a = "";
      return e.color && (a += `--button-color:var(--dodo-color-${e.color});`), a;
    }), s = xe(), t = $(!1), i = w(() => e.loading || t.value);
    async function c(a) {
      if (!t.value && typeof s.onClick == "function") {
        const d = s.onClick(a);
        d instanceof Promise && (t.value = !0, await d.finally(() => t.value = !1));
      }
    }
    return (a, d) => (r(), v("button", ie({
      style: o.value,
      disabled: a.disabled,
      type: a.type ?? "button",
      class: [
        a.$style.Button,
        a.$style[e.variant ?? "default"],
        i.value && a.$style.loading,
        a.size && a.$style[a.size],
        a.active && a.$style.active,
        a.square && a.$style.square,
        a.round && a.$style.round
      ]
    }, { ...f(s), onClick: c }), [
      h("div", {
        class: m(a.$style.content)
      }, [
        g(a.$slots, "default")
      ], 2),
      i.value ? (r(), V(f(Ao), {
        key: 0,
        small: a.size === "s",
        class: m(a.$style.spinner),
        color: "inherit"
      }, null, 8, ["small", "class"])) : C("", !0)
    ], 16, Fo));
  }
}), No = "dodo-button", Ro = "dodo-button-active", Do = "dodo-button-loading", Lo = "dodo-button-content", Ho = "dodo-button-solid", Oo = "dodo-button-clear", jo = "dodo-button-link", Uo = "dodo-button-spinner", qo = "dodo-button-s", Wo = "dodo-button-l", Po = "dodo-button-square", Go = "dodo-button-round", Ko = {
  Button: No,
  active: Ro,
  loading: Do,
  content: Lo,
  solid: Ho,
  clear: Oo,
  link: jo,
  spinner: Uo,
  s: qo,
  l: Wo,
  square: Po,
  round: Go
}, Zo = {
  $style: Ko
}, X = /* @__PURE__ */ E(To, [["__cssModules", Zo]]), Jo = /* @__PURE__ */ B({
  __name: "Card",
  props: {
    hoverable: { type: Boolean },
    active: { type: Boolean },
    gap: {},
    padding: {}
  },
  setup(n) {
    const e = te();
    return (o, s) => (r(), v("div", {
      class: m([
        "dodo-card",
        o.hoverable && "dodo-card--hoverable",
        o.active && "dodo-card--active",
        f(e).padding(o.padding),
        f(e).gap(o.gap)
      ])
    }, [
      g(o.$slots, "default")
    ], 2));
  }
}), qe = Symbol("NavBarService"), Qo = Symbol("DropdownService");
function _r(n) {
  const e = $(0), o = $(0), s = new ResizeObserver(t);
  function t() {
    var i, c;
    e.value = ((i = n.value) == null ? void 0 : i.clientWidth) ?? 0, o.value = ((c = n.value) == null ? void 0 : c.clientHeight) ?? 0;
  }
  return x(t), L(() => {
    s.disconnect(), n.value && s.observe(n.value), t();
  }), ee(() => {
    s.disconnect();
  }), { width: e, height: o, observer: s };
}
function We() {
  const o = $(window.innerWidth), s = $(window.innerHeight), t = w(() => o.value < 600), i = w(() => o.value >= 600 && o.value < 1200), c = w(() => o.value >= 1200);
  function a() {
    o.value = window.innerWidth, s.value = window.innerHeight;
  }
  return x(() => {
    window.addEventListener("resize", a, { passive: !0 });
  }), ee(() => {
    window.removeEventListener("resize", a);
  }), {
    screenSmall: t,
    screenMedium: i,
    screenLarge: c
  };
}
function Xo(n, e) {
  const o = $(e), s = sessionStorage.getItem(n);
  return s && (o.value = JSON.parse(s)), K(o, (t) => {
    sessionStorage.setItem(n, JSON.stringify(t));
  }), o;
}
function Yo(n) {
  const e = $(!1);
  return x(async () => {
    const o = `font-${n.name}-${n.weight}`;
    let s = document.getElementById(o);
    if (s || (s = document.createElement("link"), s.setAttribute("href", n.href), s.setAttribute("rel", "stylesheet"), s.setAttribute("id", o), document.head.appendChild(s)), !document.fonts) {
      e.value = !0;
      return;
    }
    await document.fonts.ready, e.value = document.fonts.check(`${n.weight} 1em ${n.name}`);
  }), { isReady: e };
}
function Br(n) {
  if (!n.match(/^#\w{6}$/)) throw new Error("Invalid hex color");
  return n.match(/(\w\w)/g).map((e) => parseInt(e, 16)).slice(0, 3);
}
const Pe = Symbol(Ge.name);
function Ge(n) {
  const e = $(null), o = $(0), s = 1e3;
  function t() {
    e.value = null, o.value = Date.now() + s;
  }
  function i() {
    location.reload();
  }
  function c(a) {
    n.onError && n.onError(a) === !1 || !e.value && o.value < Date.now() && (console.error(a), e.value = a);
  }
  return { ignoreError: t, reloadPage: i, currentError: e, handleCrash: c };
}
function Vr(n) {
  return (e) => {
    var t;
    const o = Ge(n);
    e.provide(Pe, o);
    const { errorHandler: s } = e.config;
    e.config.errorHandler = (i, c, a) => {
      if (o.handleCrash(i), s) return s(i, c, a);
    }, (t = n.router) == null || t.onError((i) => {
      o.handleCrash(i);
    }), window.addEventListener("unhandledrejection", (i) => {
      o.handleCrash(i.reason);
    }), window.addEventListener("error", (i) => {
      o.handleCrash(i.error ?? i.message);
    });
  };
}
function xo() {
  return de(Pe);
}
function zr(n, e) {
  if (typeof ResizeObserver > "u") return {};
  const o = new ResizeObserver(() => e(n.value));
  return L(() => {
    n.value && o.observe(n.value);
  }), ee(() => {
    o.disconnect();
  }), { observer: o };
}
function et(n) {
  const e = Symbol("ServiceKey");
  return { createAndProvide: () => {
    const t = n();
    return ce(e, t), t;
  }, injectOptional: () => de(e, void 0) };
}
function te() {
  function n(d) {
    return `var(--dodo-spacing-${d})`;
  }
  function e(d) {
    return d ? `dodo-gap-${d}` : "";
  }
  function o(d) {
    return d ? `dodo-padding-${d}` : "";
  }
  function s(d) {
    return d ? `dodo-justify-${d}` : "";
  }
  function t(d) {
    return d ? `dodo-align-${d}` : "";
  }
  function i(d) {
    return d ? "dodo-wrap" : "";
  }
  function c(d) {
    return d ? "dodo-flex" : "";
  }
  function a(d) {
    return d ? "dodo-grow" : "";
  }
  return {
    gapValue: n,
    gap: e,
    padding: o,
    justify: s,
    align: t,
    wrap: i,
    flex: c,
    grow: a,
    theme: ve,
    toggleTheme: st
  };
}
const Ce = $(), ot = localStorage.getItem("dodotheme"), me = $(ot), Ke = $();
if (window.matchMedia) {
  const n = window.matchMedia("(prefers-color-scheme: dark)"), e = () => {
    Ke.value = n.matches ? "dark" : "light";
  };
  n.addEventListener("change", e), e();
}
const tt = w(() => Ce.value === "auto" ? Ke.value : Ce.value), ve = w(() => me.value || tt.value || "light");
function st() {
  me.value = ve.value === "dark" ? "light" : "dark";
}
L(() => {
  localStorage.setItem("dodotheme", me.value ?? ""), document.body.setAttribute("data-dodotheme", ve.value ?? "");
});
class Ir extends Error {
  constructor(o, s) {
    super(s);
    he(this, "name", "ValidationError");
    this.field = o;
  }
}
function Er(n) {
  const e = $e(n), o = $e({});
  K(e, () => i());
  async function s(l) {
    const p = e[l];
    if (p) {
      const y = p.value, S = await a(l, y);
      if (S)
        return o[l] = String(S), !1;
    }
    return delete o[l], !0;
  }
  async function t(...l) {
    const p = l.length ? l : Object.keys(e);
    return (await Promise.all(p.map((S) => s(S)))).every((S) => S);
  }
  async function i() {
    return (await Promise.all(Object.keys(o).map((p) => s(p)))).every((p) => p);
  }
  function c() {
    for (const l in o)
      delete o[l];
  }
  async function a(l, p) {
    const y = e[l], S = y.name ?? d(l);
    if (y.required && !p)
      return `${S} is required`;
    if (y.isEmail && p != null && (typeof p != "string" || !p.includes("@")))
      return `${S} is not valid`;
    if (typeof p == "string") {
      if (y.minLen != null && p.length < y.minLen)
        return `${S} must be at least ${y.minLen} characters`;
      if (y.maxLen != null && p.length > y.maxLen)
        return `${S} must be less than ${y.maxLen} characters`;
    }
    if (y.validators)
      for (const F of y.validators) {
        const z = await F(p, S);
        if (z) return z;
      }
  }
  function d(l) {
    return l.toString().replace(/_/g, " ").replace(/^./, (p) => p.toUpperCase()).replace(/[a-z][A-Z]/g, (p) => `${p[0]} ${p[1]}`);
  }
  return { errors: o, rules: e, validate: t, clearErrors: c };
}
const lt = ["checked"], nt = /* @__PURE__ */ B({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean },
    indeterminate: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const o = n, s = e;
    function t() {
      s("update:modelValue", o.indeterminate || !o.modelValue);
    }
    function i(c) {
      c.target.checked !== o.modelValue && t();
    }
    return (c, a) => (r(), v("span", {
      class: m([c.$style.Checkbox, c.modelValue && c.$style.checked]),
      onClick: oe(t, ["stop"])
    }, [
      I(f(j), {
        name: c.indeterminate ? "indeterminate_check_box" : c.modelValue ? "check_box" : "check_box_outline_blank"
      }, null, 8, ["name"]),
      g(c.$slots, "default"),
      h("input", {
        type: "checkbox",
        checked: c.modelValue,
        onChange: i
      }, null, 40, lt)
    ], 2));
  }
}), at = "dodo-checkbox", rt = "dodo-checkbox-checked", it = {
  Checkbox: at,
  checked: rt
}, dt = {
  $style: it
}, Se = /* @__PURE__ */ E(nt, [["__cssModules", dt]]), ct = /* @__PURE__ */ B({
  __name: "Chip",
  props: {
    color: {},
    variant: {}
  },
  setup(n) {
    const e = n, o = w(() => {
      let s = "";
      return e.color && (s += `--chip-color:var(--dodo-color-${e.color});`), s;
    });
    return (s, t) => (r(), V(ue(s.$attrs.onClick ? "button" : "div"), {
      class: m([s.$style.Chip, s.variant === "solid" && s.$style.solid]),
      style: P(o.value)
    }, {
      default: k(() => [
        g(s.$slots, "before"),
        h("div", {
          class: m(s.$style.text)
        }, [
          g(s.$slots, "default")
        ], 2),
        g(s.$slots, "after")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), ut = "dodo-chip", pt = "dodo-chip-solid", mt = "dodo-chip-text", vt = {
  Chip: ut,
  solid: pt,
  text: mt
}, ft = {
  $style: vt
}, yt = /* @__PURE__ */ E(ct, [["__cssModules", ft]]), ae = "Outlined", _e = "300", ht = /* @__PURE__ */ B({
  __name: "Icon",
  props: {
    name: {},
    color: {},
    fill: { type: Boolean },
    small: {},
    large: {},
    size: {}
  },
  setup(n) {
    const e = n, o = $(), s = Yo({
      weight: _e,
      name: `Material Symbols ${ae}`,
      href: `https://fonts.googleapis.com/css2?family=Material+Symbols+${ae}:wght,FILL@${_e},0..1`
    });
    return (t, i) => (r(), v("span", {
      ref_key: "el",
      ref: o,
      style: P([t.color ? `color: var(--dodo-color-${t.color});` : "", f(s).isReady ? "" : "visibility:hidden"]),
      class: m([
        t.$style.icon,
        "material-symbols-" + ae.toLowerCase(),
        e.size && t.$style[e.size],
        e.fill && t.$style.fill
      ])
    }, A(t.name), 7));
  }
}), $t = "dodo-icon", gt = "dodo-icon-fill", bt = "dodo-icon-xs", wt = "dodo-icon-s", kt = "dodo-icon-l", Mt = "dodo-icon-xl", Ct = {
  icon: $t,
  fill: gt,
  xs: bt,
  s: wt,
  l: kt,
  xl: Mt
}, St = {
  $style: Ct
}, j = /* @__PURE__ */ E(ht, [["__cssModules", St]]), _t = /* @__PURE__ */ B({
  __name: "ChoiceChips",
  props: {
    options: {},
    modelValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    small: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const o = n, s = e, t = w(() => o.multiple ? [o.modelValue].flat() : [o.modelValue]);
    function i(d, l) {
      return d.value === l;
    }
    function c(d) {
      return t.value.some((l) => i(d, l));
    }
    function a(d) {
      let l = d.value;
      c(d) && o.multiple ? l = t.value.filter((y) => !i(d, y)) : o.multiple && (l = [...t.value, d.value]), s("update:modelValue", l);
    }
    return (d, l) => (r(), v("div", {
      class: m([d.$style.ChoiceChips, d.multiple && d.$style.multiple])
    }, [
      (r(!0), v(D, null, G(d.options, (p, y) => (r(), V(yt, {
        key: p.label,
        color: c(p) ? "info" : void 0,
        variant: !d.multiple && c(p) ? "solid" : void 0,
        disabled: d.disabled,
        small: d.small,
        rounded: "",
        onClick: (S) => a(p)
      }, {
        default: k(() => [
          d.multiple && c(p) ? (r(), V(j, {
            key: 0,
            name: "check"
          })) : C("", !0),
          g(d.$slots, "default", {
            option: p,
            index: y
          }, () => [
            T(A(p.label || p.value), 1)
          ])
        ]),
        _: 2
      }, 1032, ["color", "variant", "disabled", "small", "onClick"]))), 128))
    ], 2));
  }
}), Bt = "dodo-choicechips", Vt = {
  ChoiceChips: Bt
}, zt = {
  $style: Vt
}, Ar = /* @__PURE__ */ E(_t, [["__cssModules", zt]]), It = /* @__PURE__ */ B({
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
  setup(n) {
    const e = te();
    return (o, s) => (r(), V(ue(o.tag ?? "div"), {
      class: m([
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
        g(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Et = "dodo-column-el", At = {
  el: Et
}, Ft = {
  $style: At
}, W = /* @__PURE__ */ E(It, [["__cssModules", Ft]]), Tt = /* @__PURE__ */ h("h3", null, "Something went wrong", -1), Be = `
  An unexpected error occurred and the application may not function correctly until the page is reloaded.
  Any unsaved changes will be lost if you choose to reload the page.
`, Fr = /* @__PURE__ */ B({
  __name: "CrashDialog",
  setup(n) {
    const e = xo(), o = w(() => e.currentError.value), s = $(!1);
    return L(() => {
      s.value = !!o.value;
    }), (t, i) => (r(), V(f(ds), { active: s.value }, {
      controls: k(() => [
        I(f(X), {
          variant: "clear",
          onClick: f(e).ignoreError
        }, {
          default: k(() => [
            T("Ignore")
          ]),
          _: 1
        }, 8, ["onClick"]),
        I(f(X), {
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
        Tt,
        g(t.$slots, "body", {
          error: o.value,
          defaultText: Be
        }, () => [
          h("p", null, A(Be))
        ])
      ]),
      _: 3
    }, 8, ["active"]));
  }
}), Nt = {
  key: 0,
  style: { width: "0" },
  scope: "col"
}, Rt = ["onClick"], Dt = ["onClick"], Lt = { key: 0 }, Ht = /* @__PURE__ */ h("td", { colspan: "999" }, "No results", -1), Ot = [
  Ht
], jt = { colspan: "999" }, Ut = { key: 0 }, qt = /* @__PURE__ */ B({
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
  setup(n, { emit: e }) {
    const o = n, s = e, t = $(), i = $([]), c = $(!1);
    L(() => {
      t.value = o.sortValue;
    }), L(() => {
      i.value = o.selection ?? [];
    }), K(t, (u) => {
      s("update:sortValue", u);
    }), K(i, (u) => {
      s("update:selection", u);
    });
    const a = w(() => {
      var u;
      return (u = t.value) == null ? void 0 : u.startsWith("-");
    }), d = w(() => o.columns.filter((u) => !u.disabled)), l = w(() => !!o.selection), p = w(() => {
      const u = d.value.find(S);
      return o.sortAsync || !u ? o.rows : o.rows.slice().sort((b, _) => {
        const R = J(u, b), q = J(u, _), ye = typeof R == "number" && typeof q == "number" ? q - R : `${q}`.localeCompare(`${R}`);
        return a.value ? ye : -ye;
      });
    });
    function y(u) {
      if (S(u))
        return a.value ? "arrow_drop_up" : "arrow_drop_down";
    }
    function S(u) {
      var b;
      return ((b = t.value) == null ? void 0 : b.replace("-", "")) === u.sort;
    }
    function F(u) {
      return u.slot || u.name.trim().replace(/\W/g, "");
    }
    function z(u) {
      return !!u.sort;
    }
    function H(u) {
      return u.align ? `text-align:${u.align}` : "";
    }
    function Z(u) {
      return u.width ? `width:${u.width}` : "";
    }
    async function N(u) {
      z(u) && (S(u) ? t.value = a.value ? void 0 : "-" + u.sort : t.value = u.sort, o.sortAsync && (c.value = !0, await o.sortAsync(t.value).finally(() => {
        c.value = !1;
      })));
    }
    function O(u) {
      return o.selectBy ? u[o.selectBy] : u;
    }
    function U(u) {
      const b = O(u);
      i.value.includes(b) ? i.value = i.value.filter((_) => _ !== b) : i.value = i.value.concat(b);
    }
    function J(u, b) {
      return typeof u.value == "function" ? u.value(b) : typeof u.value == "string" ? b[u.value] : "";
    }
    function Y(u) {
      if (!l.value) return !1;
      const b = O(u);
      return i.value.includes(b);
    }
    const Q = w(() => l.value ? o.rows.filter((u) => i.value.includes(O(u))) : []);
    function M() {
      const u = Q.value.length === o.rows.length;
      i.value = u ? [] : o.rows.map(O);
    }
    return (u, b) => (r(), v("div", {
      class: m([u.$style.Datatable, u.contentLoading && u.$style.loading])
    }, [
      h("table", null, [
        h("tbody", null, [
          h("tr", {
            class: m(u.stickyHeader && u.$style.stickyHeader)
          }, [
            l.value ? (r(), v("th", Nt, [
              I(f(Se), {
                indeterminate: Q.value.length > 0 && Q.value.length < u.rows.length,
                "model-value": Q.value.length > 0 && Q.value.length === u.rows.length,
                "onUpdate:modelValue": M
              }, null, 8, ["indeterminate", "model-value"])
            ])) : C("", !0),
            (r(!0), v(D, null, G(d.value, (_) => (r(), v("th", {
              key: _.name,
              scope: "col",
              class: m([z(_) ? u.$style.sortable : "", S(_) && u.$style.sortActive]),
              style: P([H(_), Z(_)]),
              onClick: (R) => N(_)
            }, [
              h("span", {
                class: m(u.$style.colName)
              }, [
                h("span", null, [
                  g(u.$slots, `${F(_)}-header`, { column: _ }, () => [
                    T(A(_.name), 1)
                  ])
                ]),
                y(_) ? (r(), V(f(j), {
                  key: 0,
                  name: y(_),
                  class: m(u.$style.sortIcon)
                }, null, 8, ["name", "class"])) : C("", !0)
              ], 2)
            ], 14, Rt))), 128))
          ], 2),
          (r(!0), v(D, null, G(p.value, (_, R) => (r(), v("tr", {
            key: R,
            class: m([u.rowClick && u.$style.clickableRow, Y(_) && u.$style.rowSelected]),
            onClick: (q) => u.rowClick && u.rowClick(_)
          }, [
            l.value ? (r(), v("td", Lt, [
              I(f(Se), {
                "model-value": Y(_),
                "onUpdate:modelValue": (q) => U(_)
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ])) : C("", !0),
            (r(!0), v(D, null, G(d.value, (q) => (r(), v("td", {
              key: q.name,
              class: m([]),
              style: P(H(q))
            }, [
              g(u.$slots, F(q), {
                row: _,
                column: q
              }, () => [
                T(A(J(q, _)), 1)
              ])
            ], 4))), 128))
          ], 10, Dt))), 128)),
          u.rows.length ? C("", !0) : (r(), v("tr", {
            key: 0,
            class: m(u.$style.noResults)
          }, Ot, 2)),
          u.rows.length && u.showMore ? (r(), v("tr", {
            key: 1,
            class: m(u.$style.showMore)
          }, [
            h("td", jt, [
              I(f(X), {
                variant: "link",
                color: "info",
                onClick: u.showMore
              }, {
                default: k(() => [
                  T("Show more results")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ], 2)) : C("", !0),
          u.showFooter ? (r(), v("tr", {
            key: 2,
            class: m([u.$style.footer, u.stickyHeader && u.$style.stickyFooter])
          }, [
            l.value ? (r(), v("td", Ut)) : C("", !0),
            (r(!0), v(D, null, G(d.value, (_) => (r(), v("th", {
              key: _.name,
              style: P(H(_)),
              scope: "col"
            }, [
              g(u.$slots, `${F(_)}-footer`, { column: _ })
            ], 4))), 128))
          ], 2)) : C("", !0)
        ])
      ])
    ], 2));
  }
}), Wt = "dodo-datatable", Pt = "dodo-datatable-colname", Gt = "dodo-datatable-sortable", Kt = "dodo-datatable-sorticon", Zt = "dodo-datatable-sortactive", Jt = "dodo-datatable-noresults", Qt = "dodo-datatable-showmore", Xt = "dodo-datatable-clickablerow", Yt = "dodo-datatable-rowselected", xt = "dodo-datatable-stickyheader", es = "dodo-datatable-stickyfooter", os = "dodo-datatable-loading", ts = {
  Datatable: Wt,
  colName: Pt,
  sortable: Gt,
  sortIcon: Kt,
  sortActive: Zt,
  noResults: Jt,
  showMore: Qt,
  clickableRow: Xt,
  rowSelected: Yt,
  stickyHeader: xt,
  stickyFooter: es,
  loading: os
}, ss = {
  $style: ts
}, Tr = /* @__PURE__ */ E(qt, [["__cssModules", ss]]), ls = /* @__PURE__ */ B({
  __name: "Dialog",
  props: {
    active: { type: Boolean }
  },
  setup(n) {
    const e = n, o = $();
    return L(() => {
      e.active && o.value && o.value.parentNode.appendChild(o.value);
    }), (s, t) => (r(), V(ze, { to: "body" }, [
      I(re, { name: "Dialog" }, {
        default: k(() => [
          s.active ? (r(), v("div", {
            key: 0,
            ref_key: "el",
            ref: o,
            class: m([s.$style.Dialog])
          }, [
            h("div", {
              class: m(s.$style.window)
            }, [
              I(f(W), { padding: "m" }, {
                default: k(() => [
                  g(s.$slots, "default")
                ]),
                _: 3
              }),
              I(f(le), {
                padding: "m",
                justify: "end",
                gap: "s"
              }, {
                default: k(() => [
                  g(s.$slots, "controls")
                ]),
                _: 3
              })
            ], 2)
          ], 2)) : C("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ns = "dodo-dialog", as = "dodo-dialog-window", rs = {
  Dialog: ns,
  window: as,
  "Dialog-enter-active": "dodo-dialog-dialog-enter-active",
  "Dialog-leave-active": "dodo-dialog-dialog-leave-active",
  "Dialog-enter-from": "dodo-dialog-dialog-enter-from",
  "Dialog-leave-to": "dodo-dialog-dialog-leave-to"
}, is = {
  $style: rs
}, ds = /* @__PURE__ */ E(ls, [["__cssModules", is]]), cs = /* @__PURE__ */ B({
  __name: "Dropdown",
  props: {
    modelValue: { type: Boolean },
    padding: {},
    gap: {},
    disabled: { type: Boolean },
    trigger: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const o = n, s = e, t = $(!1), i = $(""), c = $(), a = $();
    K(
      () => o.modelValue,
      () => {
        d(!!o.modelValue);
      },
      { immediate: !0 }
    ), ee(() => {
      d(!1);
    });
    function d(z) {
      t.value !== z && (o.disabled && z || (t.value = z, s("update:modelValue", z), z ? Ie().then(() => {
        F(), window.addEventListener("click", S, { passive: !0, capture: !0 });
      }) : window.removeEventListener("click", S, { capture: !0 })));
    }
    function l(z) {
      o.trigger !== "hover" && (d(!t.value), z.preventDefault());
    }
    function p() {
      o.trigger === "hover" && d(!0);
    }
    function y(z) {
      var O, U;
      if (!t.value || o.trigger !== "hover") return;
      const H = z.relatedTarget, Z = (O = a.value) == null ? void 0 : O.contains(H), N = (U = c.value) == null ? void 0 : U.contains(H);
      Z || N || d(!1);
    }
    function S(z) {
      var H, Z;
      if (z.target) {
        const N = (H = a.value) == null ? void 0 : H.contains(z.target), O = (Z = c.value) == null ? void 0 : Z.contains(z.target);
        if (N || O) return;
      }
      d(!1);
    }
    function F() {
      const H = c.value;
      if (!H) return;
      const Z = H.scrollWidth, N = a.value.getBoundingClientRect(), O = window.innerWidth, U = window.innerHeight, J = N.bottom + 300 + 16 > U, Y = Math.max(16, Math.min(N.left, O - Z - 16)), Q = Math.min(600, O - 16 * 2);
      let M = `left: ${Y}px; max-width:${Q}px;`;
      J ? M += `bottom: ${U - N.top}px; max-height: ${N.top - 16}px;` : M += `top: ${N.bottom}px; max-height: ${U - N.bottom - 16}px;`, i.value = M, t.value && requestAnimationFrame(F);
    }
    return ce(Qo, { toggle: d }), (z, H) => (r(), v(D, null, [
      h("div", ie({
        ref_key: "el",
        ref: a,
        class: [z.$style.trigger, z.disabled && z.$style.disabled]
      }, z.$attrs, {
        onClick: l,
        onMouseover: p,
        onMouseleave: y
      }), [
        g(z.$slots, "default", { isActive: t.value })
      ], 16),
      t.value ? (r(), v("div", {
        key: 0,
        class: m([z.$style.container]),
        style: P(i.value)
      }, [
        h("div", {
          ref_key: "content",
          ref: c,
          class: m(z.$style.content),
          onMouseleave: y
        }, [
          I(f(W), {
            padding: z.padding ?? "s",
            gap: z.gap ?? "s"
          }, {
            default: k(() => [
              g(z.$slots, "dropdown", { toggle: d })
            ]),
            _: 3
          }, 8, ["padding", "gap"])
        ], 34)
      ], 6)) : C("", !0)
    ], 64));
  }
}), us = "dodo-dropdown-trigger", ps = "dodo-dropdown-disabled", ms = "dodo-dropdown-container", vs = "dodo-dropdown-content", fs = {
  trigger: us,
  disabled: ps,
  container: ms,
  content: vs
}, ys = {
  $style: fs
}, Ze = /* @__PURE__ */ E(cs, [["__cssModules", ys]]), hs = /* @__PURE__ */ B({
  __name: "FieldOld",
  props: {
    disabled: { type: Boolean },
    button: { type: Boolean }
  },
  setup(n) {
    return (e, o) => (r(), v("div", {
      class: m([e.$style.Field, e.disabled && e.$style.disabled, e.button && e.$style.button])
    }, [
      g(e.$slots, "before"),
      h("div", {
        class: m(e.$style.inner)
      }, [
        g(e.$slots, "default")
      ], 2),
      g(e.$slots, "after")
    ], 2));
  }
}), $s = "dodo-fieldold-field", gs = "dodo-fieldold-button", bs = "dodo-fieldold-inner", ws = "dodo-fieldold-disabled", ks = {
  Field: $s,
  button: gs,
  inner: bs,
  disabled: ws
}, Ms = {
  $style: ks
}, Cs = /* @__PURE__ */ E(hs, [["__cssModules", Ms]]), Ss = /* @__PURE__ */ B({
  __name: "FluidGrid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean },
    alignItems: {}
  },
  setup(n) {
    const e = n, o = te(), s = $(), t = $(99999);
    let i = null;
    const c = new ResizeObserver(() => {
      i && clearTimeout(i), i = setTimeout(() => {
        t.value = s.value.clientWidth;
      }, 50);
    });
    x(() => {
      c.observe(s.value);
    }), eo(() => {
      c.disconnect();
    });
    const a = w(() => e.columnSize >= t.value), d = w(() => {
      let l = `--fluidgrid-size:${e.columnSize}px;`;
      return e.autoFill && (l += "--fluidgrid-mode:auto-fill;"), e.gap && (l += `gap:${o.gapValue(e.gap)};`), e.padding && (l += `padding:${o.gapValue(e.padding)};`), l;
    });
    return (l, p) => (r(), v("div", {
      ref_key: "el",
      ref: s,
      class: m([l.$style.FluidGrid, a.value && l.$style.oneColumn]),
      style: P(d.value)
    }, [
      g(l.$slots, "default")
    ], 6));
  }
}), _s = "dodo-fluidgrid", Bs = "dodo-fluidgrid-onecolumn", Vs = {
  FluidGrid: _s,
  oneColumn: Bs
}, zs = {
  $style: Vs
}, Nr = /* @__PURE__ */ E(Ss, [["__cssModules", zs]]), Is = /* @__PURE__ */ B({
  __name: "Form",
  props: {
    gap: {}
  },
  emits: ["submit"],
  setup(n, { emit: e }) {
    const o = e, s = te();
    function t() {
      o("submit");
    }
    return (i, c) => (r(), v("form", {
      class: m([i.$style.form, f(s).gap(i.gap)]),
      onSubmit: oe(t, ["prevent"])
    }, [
      g(i.$slots, "default")
    ], 34));
  }
}), Es = "dodo-form", As = {
  form: Es
}, Fs = {
  $style: As
}, Rr = /* @__PURE__ */ E(Is, [["__cssModules", Fs]]), Ts = ["data-itemerror"], Ns = ["for"], Rs = /* @__PURE__ */ B({
  __name: "FormItem",
  props: {
    label: {},
    error: {},
    description: {},
    for: {},
    optional: { type: Boolean }
  },
  setup(n) {
    const e = n, o = ne(), s = Ee();
    return x(() => {
      if (!o.default)
        throw new Error("FormEntry requires a default slot");
    }), (t, i) => {
      var c;
      return r(), v("div", {
        class: m([t.$style.FormEntry, t.error && t.$style.hasError]),
        "data-itemerror": t.error
      }, [
        t.label ? (r(), v("div", {
          key: 0,
          class: m(t.$style.labelRow)
        }, [
          h("label", {
            class: m(t.$style.label),
            for: e.for
          }, A(t.label), 11, Ns),
          t.optional ? (r(), v("span", {
            key: 0,
            class: m(t.$style.optional)
          }, "Optional", 2)) : C("", !0)
        ], 2)) : C("", !0),
        g(t.$slots, "default", {
          error: t.error,
          entryId: e.for ? e.for : `form-item-${(c = f(s)) == null ? void 0 : c.uid}`
        }),
        t.error ? (r(), v("div", {
          key: 1,
          class: m(t.$style.error)
        }, [
          h("span", null, A(t.error), 1)
        ], 2)) : C("", !0),
        t.description ? (r(), v("div", {
          key: 2,
          class: m(t.$style.description)
        }, A(t.description), 3)) : C("", !0)
      ], 10, Ts);
    };
  }
}), Ds = "dodo-formitem-formentry", Ls = "dodo-formitem-label", Hs = "dodo-formitem-optional", Os = "dodo-formitem-labelrow", js = "dodo-formitem-description", Us = "dodo-formitem-haserror", qs = "dodo-formitem-error", Ws = {
  FormEntry: Ds,
  label: Ls,
  optional: Hs,
  labelRow: Os,
  description: js,
  hasError: Us,
  error: qs
}, Ps = {
  $style: Ws
}, Gs = /* @__PURE__ */ E(Rs, [["__cssModules", Ps]]), Ks = /* @__PURE__ */ B({
  __name: "Grid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean }
  },
  setup(n) {
    const e = te();
    return (o, s) => (r(), v("div", {
      class: m([
        o.$style.component,
        o.$style[`col-${o.columnSize}`],
        o.autoFill && o.$style.autoFill,
        f(e).gap(o.gap),
        f(e).padding(o.padding)
      ])
    }, [
      g(o.$slots, "default")
    ], 2));
  }
}), Zs = "dodo-grid-component", Js = "dodo-grid-autofill", Qs = {
  component: Zs,
  autoFill: Js,
  "col-xs": "dodo-grid-col-xs",
  "col-s": "dodo-grid-col-s",
  "col-m": "dodo-grid-col-m",
  "col-l": "dodo-grid-col-l"
}, Xs = {
  $style: Qs
}, Dr = /* @__PURE__ */ E(Ks, [["__cssModules", Xs]]), Ys = {
  key: 0,
  class: "dodo-nowrap dodo-fade-secondary"
}, xs = /* @__PURE__ */ B({
  __name: "MenuItem",
  props: {
    active: { type: Boolean },
    emphasize: { type: Boolean },
    separator: { type: Boolean }
  },
  setup(n) {
    return (e, o) => (r(), v(D, null, [
      e.separator ? (r(), v("hr", {
        key: 0,
        class: m(e.$style.separator)
      }, null, 2)) : C("", !0),
      h("div", ie(e.$attrs, {
        class: [e.$style.DropdownItem, e.active && e.$style.active, e.emphasize && e.$style.emphasize]
      }), [
        g(e.$slots, "before"),
        I(f(W), {
          gap: "0",
          style: { flex: "1" }
        }, {
          default: k(() => [
            h("p", {
              class: m([e.$style.text, "dodo-nowrap"])
            }, [
              g(e.$slots, "default")
            ], 2),
            e.$slots["text-secondary"] ? (r(), v("p", Ys, [
              g(e.$slots, "text-secondary")
            ])) : C("", !0)
          ]),
          _: 3
        }),
        g(e.$slots, "after")
      ], 16)
    ], 64));
  }
}), el = "dodo-menuitem-dropdownitem", ol = "dodo-menuitem-active", tl = "dodo-menuitem-emphasize", sl = "dodo-menuitem-text", ll = "dodo-menuitem-separator", nl = {
  DropdownItem: el,
  active: ol,
  emphasize: tl,
  text: sl,
  separator: ll
}, al = {
  $style: nl
}, rl = /* @__PURE__ */ E(xs, [["__cssModules", al]]), il = /* @__PURE__ */ B({
  __name: "Modal",
  props: {
    open: { type: Boolean },
    size: {},
    padding: {},
    gap: {}
  },
  emits: ["close"],
  setup(n, { emit: e }) {
    const o = n, s = e, t = $();
    L(() => {
      var l;
      (l = t.value) == null || l.showModal();
    });
    const i = w(() => o.open);
    K(i, (l) => {
      if (l) {
        const p = window.innerWidth - document.body.clientWidth;
        document.body.style.setProperty("padding-right", `${p}px`), document.body.style.setProperty("overflow", "hidden");
      }
    });
    function c(l) {
      const p = t.value;
      l.target === p && a();
    }
    function a() {
      s("close");
    }
    async function d() {
      document.body.style.removeProperty("padding-right"), document.body.style.removeProperty("overflow");
    }
    return (l, p) => (r(), V(re, {
      appear: "",
      "enter-from-class": l.$style.enter,
      "leave-to-class": l.$style.enter,
      onAfterLeave: d
    }, {
      default: k(() => [
        i.value ? (r(), v("dialog", {
          key: 0,
          ref_key: "dialogElem",
          ref: t,
          class: m(l.$style.background),
          onMousedown: c,
          onCancel: oe(a, ["prevent"])
        }, [
          I(Jo, {
            class: m([l.$style.modal, l.size && l.$style[l.size]]),
            padding: l.padding,
            gap: l.gap
          }, {
            default: k(() => [
              g(l.$slots, "default", { close: a }, () => [
                T("Modal slot")
              ])
            ]),
            _: 3
          }, 8, ["class", "padding", "gap"])
        ], 34)) : C("", !0)
      ]),
      _: 3
    }, 8, ["enter-from-class", "leave-to-class"]));
  }
}), dl = "dodo-modal-background", cl = "dodo-modal-enter", ul = "dodo-modal", pl = "dodo-modal-s", ml = "dodo-modal-l", vl = {
  background: dl,
  enter: cl,
  modal: ul,
  S: pl,
  L: ml
}, fl = {
  $style: vl
}, Lr = /* @__PURE__ */ E(il, [["__cssModules", fl]]), yl = /* @__PURE__ */ B({
  __name: "NavBarItem",
  props: {
    text: {},
    link: {},
    textSecondary: {},
    icon: {},
    active: { type: Boolean },
    important: { type: Boolean }
  },
  setup(n) {
    const e = n, o = ne(), s = $(), t = $(!1);
    x(() => {
      t.value = !!s.value.closest("[data-mobile-nav]");
    });
    const i = de(qe), c = w(() => i == null ? void 0 : i.collapsed.value), a = w(() => i == null ? void 0 : i.renderMobile.value), d = w(() => a.value || !c.value);
    async function l(p) {
      i && !o.submenu && (i.mobileToggle.value = !1), e.link && await e.link.navigate();
    }
    return (p, y) => (r(), V(f(fe), {
      text: p.text,
      disabled: d.value,
      side: "right"
    }, {
      default: k(() => [
        (r(), V(ue(p.$slots.submenu ? f(Ze) : "div"), null, {
          dropdown: k(() => [
            g(p.$slots, "submenu")
          ]),
          default: k(() => {
            var S;
            return [
              h("div", {
                ref_key: "el",
                ref: s,
                class: m([
                  p.$style.NavBarItem,
                  (p.active || ((S = p.link) == null ? void 0 : S.isActive.value)) && p.$style.active,
                  p.important && p.$style.important,
                  c.value && p.$style.collapsed
                ]),
                onClick: l
              }, [
                p.icon || p.$slots.icon ? (r(), v("div", {
                  key: 0,
                  class: m(p.$style.icon)
                }, [
                  g(p.$slots, "icon", {}, () => [
                    I(f(j), {
                      name: p.icon
                    }, null, 8, ["name"])
                  ])
                ], 2)) : C("", !0),
                h("div", {
                  class: m(p.$style.textwrap)
                }, [
                  h("p", {
                    class: m([p.$style.text, "dodo-nowrap"]),
                    color: "background"
                  }, A(p.text), 3),
                  p.textSecondary ? (r(), v("p", {
                    key: 0,
                    class: m([p.$style.secondary, "dodo-nowrap"]),
                    color: "background"
                  }, A(p.textSecondary), 3)) : C("", !0)
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
}), hl = "dodo-navbaritem", $l = "dodo-navbaritem-active", gl = "dodo-navbaritem-important", bl = "dodo-navbaritem-textwrap", wl = "dodo-navbaritem-icon", kl = "dodo-navbaritem-text", Ml = "dodo-navbaritem-secondary", Cl = {
  NavBarItem: hl,
  active: $l,
  important: gl,
  textwrap: bl,
  icon: wl,
  text: kl,
  secondary: Ml
}, Sl = {
  $style: Cl
}, Ve = /* @__PURE__ */ E(yl, [["__cssModules", Sl]]), _l = { style: { "margin-right": "8px" } }, Bl = /* @__PURE__ */ B({
  __name: "NavBar",
  props: {
    mobile: { type: Boolean }
  },
  setup(n) {
    const e = n, { screenLarge: o } = We(), s = Xo("NavBar-collapse", null), t = $(!1), i = w(() => e.mobile || !o.value);
    ce(qe, { collapsed: s, renderMobile: i, mobileToggle: t });
    function c() {
      i.value && (t.value = !1);
    }
    return (a, d) => (r(), v("div", {
      class: m([
        a.$style.root,
        f(s) && a.$style.collapsed,
        t.value && a.$style.mobileToggle,
        i.value && a.$style.mobileMenu
      ]),
      onClick: oe(c, ["self"])
    }, [
      t.value ? (r(), v("div", {
        key: 0,
        class: m(a.$style.backdrop),
        onClick: d[0] || (d[0] = (l) => t.value = !1)
      }, null, 2)) : C("", !0),
      h("div", {
        class: m(a.$style.NavBar)
      }, [
        a.$slots["navbar-header"] ? (r(), v("div", {
          key: 0,
          class: m(a.$style.header)
        }, [
          h("div", null, [
            g(a.$slots, "navbar-header")
          ]),
          h("div", _l, [
            i.value ? (r(), V(f(X), {
              key: 0,
              variant: "link",
              square: "",
              color: "background",
              onClick: d[1] || (d[1] = (l) => t.value = !1)
            }, {
              default: k(() => [
                I(f(j), { name: "close" })
              ]),
              _: 1
            })) : C("", !0)
          ])
        ], 2)) : C("", !0),
        h("div", {
          class: m(a.$style.middle)
        }, [
          g(a.$slots, "default")
        ], 2),
        a.$slots["navbar-footer"] ? (r(), v("div", {
          key: 1,
          class: m(a.$style.footer)
        }, [
          g(a.$slots, "navbar-footer"),
          i.value ? C("", !0) : (r(), V(Ve, {
            key: 0,
            text: f(s) ? "Expand" : "Collapse",
            icon: f(s) ? "last_page" : "first_page",
            onClick: d[2] || (d[2] = (l) => s.value = !f(s))
          }, null, 8, ["text", "icon"]))
        ], 2)) : C("", !0)
      ], 2),
      h("div", {
        class: m(a.$style.wrapMobile)
      }, [
        a.$slots.main ? (r(), V(f(W), {
          key: 0,
          class: m(a.$style.main)
        }, {
          default: k(() => [
            g(a.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : C("", !0),
        i.value ? (r(), v("div", {
          key: 1,
          class: m(a.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          g(a.$slots, "default", { inMobileBar: !0 }),
          g(a.$slots, "navbar-footer", { inMobileBar: !0 }),
          I(Ve, {
            text: "Menu",
            icon: "menu",
            onClick: d[3] || (d[3] = (l) => t.value = !t.value)
          })
        ], 2)) : C("", !0)
      ], 2)
    ], 2));
  }
}), Vl = "dodo-navbar-root", zl = "dodo-navbar", Il = "dodo-navbar-collapsed", El = "dodo-navbar-header", Al = "dodo-navbar-middle", Fl = "dodo-navbar-footer", Tl = "dodo-navbar-wrapmobile", Nl = "dodo-navbar-main", Rl = "dodo-navbar-backdrop", Dl = "dodo-navbar-mobilemenu", Ll = "dodo-navbar-mobiletoggle", Hl = "dodo-navbar-mobilenav", Ol = {
  root: Vl,
  NavBar: zl,
  collapsed: Il,
  header: El,
  middle: Al,
  footer: Fl,
  wrapMobile: Tl,
  main: Nl,
  backdrop: Rl,
  mobileMenu: Dl,
  mobileToggle: Ll,
  mobileNav: Hl
}, jl = {
  $style: Ol
}, Hr = /* @__PURE__ */ E(Bl, [["__cssModules", jl]]), Je = et(() => {
  const n = $([]), e = $(""), o = $([]), s = $(!1);
  return K(n, () => {
    s.value = !1;
  }), { headerText: e, activeItems: n, expandedMenu: o, mobileToggle: s };
}), Ul = (n) => {
  const e = Je.injectOptional(), o = Ee(), s = (l) => l ? [l.uid, ...s(l.parent)] : [], t = (l) => {
    !l || !e || (e.activeItems.value = s(o), e.headerText.value = n.text.value);
  }, i = w(() => e == null ? void 0 : e.headerText.value), c = () => {
    !o || !e || (e.expandedMenu.value.includes(o.uid) ? e.expandedMenu.value = [] : e.expandedMenu.value = s(o));
  }, a = w(() => !o || !e ? !1 : e.activeItems.value.includes(o.uid)), d = w(() => !o || !e ? !1 : e.expandedMenu.value.length ? e.expandedMenu.value.includes(o.uid) : e.activeItems.value.includes(o.uid));
  return K(n.active, () => t(n.active.value), { immediate: !0 }), ee(() => t(!1)), L(() => {
    i.value && (document.title = i.value);
  }), { showAsActive: a, isExpanded: d, toggleExpand: c, headerText: i };
}, ql = /* @__PURE__ */ B({
  __name: "NavBarNew",
  setup(n) {
    const { headerText: e, mobileToggle: o } = Je.createAndProvide(), { screenLarge: s } = We(), t = w(() => !s.value);
    function i() {
      o.value = !1;
    }
    return (c, a) => (r(), v("div", {
      class: m([c.$style.root, f(o) && c.$style.mobileToggle, t.value && c.$style.mobileMenu]),
      onClick: oe(i, ["self"])
    }, [
      f(o) ? (r(), v("div", {
        key: 0,
        class: m(c.$style.backdrop),
        onClick: a[0] || (a[0] = (d) => o.value = !1)
      }, null, 2)) : C("", !0),
      h("div", {
        class: m(c.$style.NavBar)
      }, [
        h("div", {
          class: m(c.$style.middle)
        }, [
          g(c.$slots, "default")
        ], 2),
        c.$slots["navbar-footer"] ? (r(), v("div", {
          key: 0,
          class: m(c.$style.footer)
        }, [
          g(c.$slots, "navbar-footer")
        ], 2)) : C("", !0)
      ], 2),
      h("div", {
        class: m(c.$style.wrapMobile)
      }, [
        t.value ? (r(), v("div", {
          key: 0,
          class: m(c.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          h("h5", null, A(f(e)), 1),
          I(f(fe), { text: "Toggle menu" }, {
            default: k(() => [
              h("div", {
                class: m(c.$style.menuButton)
              }, [
                I(f(j), {
                  name: "menu",
                  onClick: a[1] || (a[1] = (d) => o.value = !f(o))
                })
              ], 2)
            ]),
            _: 1
          })
        ], 2)) : C("", !0),
        c.$slots.main ? (r(), V(f(W), {
          key: 1,
          class: m(c.$style.main)
        }, {
          default: k(() => [
            g(c.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : C("", !0)
      ], 2)
    ], 2));
  }
}), Wl = "dodo-navbarnew-root", Pl = "dodo-navbarnew-navbar", Gl = "dodo-navbarnew-middle", Kl = "dodo-navbarnew-footer", Zl = "dodo-navbarnew-wrapmobile", Jl = "dodo-navbarnew-main", Ql = "dodo-navbarnew-backdrop", Xl = "dodo-navbarnew-menubutton", Yl = "dodo-navbarnew-mobilemenu", xl = "dodo-navbarnew-mobiletoggle", en = "dodo-navbarnew-mobilenav", on = {
  root: Wl,
  NavBar: Pl,
  middle: Gl,
  footer: Kl,
  wrapMobile: Zl,
  main: Jl,
  backdrop: Ql,
  menuButton: Xl,
  mobileMenu: Yl,
  mobileToggle: xl,
  mobileNav: en
}, tn = {
  $style: on
}, Or = /* @__PURE__ */ E(ql, [["__cssModules", tn]]), sn = ["href"], ln = { key: 0 }, nn = /* @__PURE__ */ B({
  __name: "NavItem",
  props: {
    link: {},
    text: {},
    textSecondary: {},
    tooltipText: {},
    icon: {},
    important: { type: Boolean }
  },
  setup(n) {
    const e = n, o = w(() => e.link ? f(e.link.isActive) : !1), s = w(() => e.text), { isExpanded: t, showAsActive: i, toggleExpand: c } = Ul({ text: s, active: o }), a = ne();
    async function d(l) {
      a.submenu && c(), e.link && (await e.link.navigate(), l.preventDefault());
    }
    return (l, p) => (r(), v("div", {
      class: m([l.$style.el])
    }, [
      I(f(fe), {
        text: l.tooltipText,
        side: "right"
      }, {
        default: k(() => {
          var y;
          return [
            h("a", {
              class: m([l.$style.link, f(i) && l.$style.active, l.important && l.$style.important]),
              href: f((y = l.link) == null ? void 0 : y.href),
              onClick: d
            }, [
              h("div", {
                class: m(l.$style.icon)
              }, [
                g(l.$slots, "icon", {}, () => [
                  l.icon ? (r(), V(f(j), {
                    key: 0,
                    name: l.icon
                  }, null, 8, ["name"])) : C("", !0)
                ])
              ], 2),
              h("div", {
                class: m(l.$style.textwrap)
              }, [
                h("p", {
                  class: m([l.$style.text, "dodo-nowrap"])
                }, A(s.value), 3),
                l.textSecondary ? (r(), v("p", {
                  key: 0,
                  class: m([l.$style.secondary, "dodo-nowrap"])
                }, A(l.textSecondary), 3)) : C("", !0)
              ], 2),
              f(a).submenu ? (r(), v("div", ln, [
                I(f(j), {
                  name: f(t) ? "keyboard_arrow_up" : "keyboard_arrow_down",
                  size: "s",
                  style: { margin: "0 -0.25em" }
                }, null, 8, ["name"])
              ])) : C("", !0)
            ], 10, sn)
          ];
        }),
        _: 3
      }, 8, ["text"]),
      l.$slots.submenu ? (r(), v("div", {
        key: 0,
        class: m([l.$style.submenu, f(t) && l.$style.expanded])
      }, [
        g(l.$slots, "submenu")
      ], 2)) : C("", !0)
    ], 2));
  }
}), an = "dodo-navitem-el", rn = "dodo-navitem-link", dn = "dodo-navitem-submenu", cn = "dodo-navitem-expanded", un = "dodo-navitem-active", pn = "dodo-navitem-important", mn = "dodo-navitem-textwrap", vn = "dodo-navitem-icon", fn = "dodo-navitem-text", yn = "dodo-navitem-secondary", hn = {
  el: an,
  link: rn,
  submenu: dn,
  expanded: cn,
  active: un,
  important: pn,
  textwrap: mn,
  icon: vn,
  text: fn,
  secondary: yn
}, $n = {
  $style: hn
}, jr = /* @__PURE__ */ E(nn, [["__cssModules", $n]]), gn = /* @__PURE__ */ B({
  __name: "Row",
  props: {
    gap: {},
    padding: {},
    justify: {},
    align: {},
    wrap: { type: Boolean },
    grow: { type: Boolean }
  },
  setup(n) {
    const e = te();
    return (o, s) => (r(), v("div", {
      class: m([
        o.$style.el,
        f(e).gap(o.gap),
        f(e).padding(o.padding),
        f(e).align(o.align),
        f(e).justify(o.justify),
        f(e).wrap(o.wrap),
        f(e).grow(o.grow)
      ])
    }, [
      g(o.$slots, "default")
    ], 2));
  }
}), bn = "dodo-row-el", wn = {
  el: bn
}, kn = {
  $style: wn
}, le = /* @__PURE__ */ E(gn, [["__cssModules", kn]]), Mn = /* @__PURE__ */ B({
  __name: "ScrollContainer",
  setup(n) {
    const e = w(() => "");
    return (o, s) => (r(), v("div", {
      class: m([o.$style.ScrollContainer]),
      style: P(e.value)
    }, [
      g(o.$slots, "default")
    ], 6));
  }
}), Cn = "dodo-scrollcontainer", Sn = {
  ScrollContainer: Cn
}, _n = {
  $style: Sn
}, Bn = /* @__PURE__ */ E(Mn, [["__cssModules", _n]]), Vn = {
  key: 0,
  class: "dodo-nowrap"
}, zn = {
  key: 1,
  class: "dodo-nowrap dodo-fade-secondary"
}, In = ["disabled"], En = 12, An = /* @__PURE__ */ B({
  __name: "SelectOld",
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
  setup(n, { emit: e }) {
    const o = n, s = e, t = w(() => (o.multiple ? [o.modelValue].flat() : [o.modelValue]).filter(N)), i = $(!1), c = $(""), a = $(), d = $(), l = $(), p = $();
    L(() => {
      i.value && a.value && (c.value = "", a.value.focus());
    }), L(() => {
      c.value && d.value && d.value.$el.focus();
    }), L(() => {
      i.value && setTimeout(() => {
        var b;
        const M = (b = l.value) == null ? void 0 : b.$el, u = M == null ? void 0 : M.querySelector("[data-selectactive]");
        u == null || u.scrollIntoView({ block: "center" });
      }, 0);
    });
    const y = $(!1), S = w(() => o.options.length > En), F = w(() => S.value && !y.value ? 6 : o.options.length), z = w(() => c.value || o.options.length >= 10), H = w(() => {
      const M = c.value.toLowerCase(), u = o.options.filter((R) => `${R.value}|${R.label}`.toLowerCase().includes(M));
      if (!o.multiple) return u;
      const b = u.filter((R) => t.value.find((q) => U(R, q))), _ = u.filter((R) => !b.includes(R));
      return b.concat(_);
    }), Z = w(() => o.placeholder ? o.placeholder : o.multiple ? "Select one or more" : "Select one");
    function N(M) {
      return o.options.find((u) => U(u, M));
    }
    function O(M) {
      let u = M.value;
      o.multiple ? t.value.includes(u) ? u = t.value.filter((b) => !U(M, b)) : u = t.value.concat(M.value) : i.value = !1, s("update:modelValue", u);
    }
    function U(M, u) {
      return M.value === u;
    }
    function J(M) {
      return M.label || `${M.value}`;
    }
    function Y(M) {
      return t.value.some((u) => U(M, u));
    }
    function Q(M) {
      var _, R;
      const u = (_ = p.value) == null ? void 0 : _.$el.contains(M.target), b = (R = l.value) == null ? void 0 : R.$el.contains(M.target);
      i.value = u || b;
    }
    return x(() => {
      document.addEventListener("focusin", Q);
    }), ee(() => {
      document.removeEventListener("focusin", Q);
    }), (M, u) => M.variant === "buttons" ? (r(), V(f(le), {
      key: 0,
      gap: "xs",
      wrap: ""
    }, {
      default: k(() => [
        (r(!0), v(D, null, G(M.options.slice(0, F.value), (b, _) => (r(), V(f(X), {
          key: J(b),
          color: Y(b) ? "info" : void 0,
          active: Y(b),
          variant: Y(b) && !M.multiple ? "solid" : void 0,
          disabled: M.disabled,
          size: M.size,
          round: "",
          onClick: (R) => O(b)
        }, {
          default: k(() => [
            M.multiple && Y(b) ? (r(), V(f(j), {
              key: 0,
              name: "check",
              size: "s",
              style: { margin: "-2px" }
            })) : C("", !0),
            g(M.$slots, "default", {
              option: b,
              index: _
            }, () => [
              T(A(J(b)), 1)
            ])
          ]),
          _: 2
        }, 1032, ["color", "active", "variant", "disabled", "size", "onClick"]))), 128)),
        S.value ? (r(), v(D, { key: 0 }, [
          y.value ? (r(), V(f(X), {
            key: 0,
            size: M.size,
            variant: "link",
            round: "",
            onClick: u[0] || (u[0] = (b) => y.value = !y.value)
          }, {
            default: k(() => [
              T(" Less "),
              I(f(j), {
                name: "keyboard_arrow_up",
                size: "s",
                style: { margin: "-2px" }
              })
            ]),
            _: 1
          }, 8, ["size"])) : (r(), V(f(X), {
            key: 1,
            size: M.size,
            variant: "link",
            round: "",
            onClick: u[1] || (u[1] = (b) => y.value = !y.value)
          }, {
            default: k(() => [
              T(A(M.options.length - F.value) + " more ", 1),
              I(f(j), {
                name: "keyboard_arrow_down",
                size: "s",
                style: { margin: "-2px" }
              })
            ]),
            _: 1
          }, 8, ["size"]))
        ], 64)) : C("", !0)
      ]),
      _: 3
    })) : (r(), V(f(Ze), {
      key: 1,
      modelValue: i.value,
      "onUpdate:modelValue": u[5] || (u[5] = (b) => i.value = b),
      disabled: M.disabled
    }, {
      dropdown: k(() => [
        I(f(W), {
          ref_key: "dropdownEl",
          ref: l,
          style: { "min-height": "0" },
          gap: "0",
          onMousedown: u[4] || (u[4] = oe(() => {
          }, ["stop", "prevent"]))
        }, {
          default: k(() => [
            se(I(f(le), {
              padding: "s",
              class: m(M.$style.searchbox)
            }, {
              default: k(() => [
                I(f(rr), {
                  ref_key: "searchEl",
                  ref: d,
                  modelValue: c.value,
                  "onUpdate:modelValue": u[3] || (u[3] = (b) => c.value = b),
                  type: "search",
                  placeholder: "Search",
                  tabindex: "0",
                  style: { "flex-grow": "1" }
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["class"]), [
              [oo, z.value]
            ]),
            I(f(Bn), null, {
              default: k(() => [
                (r(!0), v(D, null, G(H.value, (b, _) => (r(), V(f(rl), {
                  key: `${b.value}`,
                  "data-selectactive": t.value.includes(b.value) ? "true" : void 0,
                  active: t.value.includes(b.value),
                  onClick: (R) => O(b)
                }, {
                  default: k(() => [
                    g(M.$slots, "default", {
                      index: _,
                      option: b
                    }, () => [
                      T(A(J(b)), 1)
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
      default: k(() => [
        I(Cs, {
          ref_key: "fieldEl",
          ref: p,
          button: "",
          disabled: M.disabled
        }, {
          after: k(() => [
            I(f(j), { name: "arrow_drop_down" })
          ]),
          default: k(() => [
            t.value.length ? (r(), v("p", Vn, [
              (r(!0), v(D, null, G(t.value, (b, _) => (r(), v(D, null, [
                _ ? (r(), v(D, { key: 0 }, [
                  T(", ")
                ], 64)) : C("", !0),
                N(b) ? g(M.$slots, "default", {
                  key: 1,
                  index: M.options.indexOf(N(b)),
                  option: N(b)
                }, () => [
                  T(A(J(N(b))), 1)
                ]) : (r(), v(D, { key: 2 }, [
                  T(A(b), 1)
                ], 64))
              ], 64))), 256))
            ])) : (r(), v("p", zn, A(Z.value), 1)),
            se(h("input", {
              ref_key: "hiddenInput",
              ref: a,
              "onUpdate:modelValue": u[2] || (u[2] = (b) => c.value = b),
              style: { position: "fixed", "pointer-events": "none", opacity: "0" },
              disabled: M.disabled
            }, null, 8, In), [
              [Ae, c.value]
            ])
          ]),
          _: 3
        }, 8, ["disabled"])
      ]),
      _: 3
    }, 8, ["modelValue", "disabled"]));
  }
}), Fn = "dodo-selectold-searchbox", Tn = {
  searchbox: Fn
}, Nn = {
  $style: Tn
}, Ur = /* @__PURE__ */ E(An, [["__cssModules", Nn]]), Rn = ["id", "disabled"], Dn = ["value"], Ln = /* @__PURE__ */ B({
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
  setup(n, { emit: e }) {
    const o = n, s = e, t = w({
      get: () => o.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, c) => (r(), V(Gs, {
      class: m(i.error && i.$style.error),
      label: i.label,
      error: i.error,
      description: i.description,
      optional: i.optional,
      for: i.id ?? void 0
    }, {
      default: k(({ entryId: a }) => [
        h("div", {
          class: m(i.$style.select)
        }, [
          se(h("select", {
            id: i.id ?? a,
            "onUpdate:modelValue": c[0] || (c[0] = (d) => t.value = d),
            disabled: i.disabled,
            class: m(["dodo-formfield"])
          }, [
            (r(!0), v(D, null, G(i.options, (d) => (r(), v("option", {
              key: d.label,
              value: d.value
            }, A(d.label), 9, Dn))), 128))
          ], 8, Rn), [
            [to, t.value]
          ]),
          h("span", {
            class: m(i.$style.icon)
          }, [
            I(j, { name: "unfold_more" })
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["class", "label", "error", "description", "optional", "for"]));
  }
}), Hn = "dodo-simpleselect-select", On = "dodo-simpleselect-icon", jn = "dodo-simpleselect-error", Un = {
  select: Hn,
  icon: On,
  error: jn
}, qn = {
  $style: Un
}, qr = /* @__PURE__ */ E(Ln, [["__cssModules", qn]]), Wn = {
  key: 0,
  viewBox: "0 0 48 48"
}, Pn = /* @__PURE__ */ pe('<clipPath id="g"><path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path></clipPath><g clip-path="url(#g)"><path fill="#FBBC05" d="M0 37V11l17 13z"></path><path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path><path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path><path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path></g>', 2), Gn = [
  Pn
], Kn = {
  key: 1,
  viewBox: "0 0 248 204"
}, Zn = /* @__PURE__ */ h("path", {
  id: "white_background",
  fill: "#1D9BF0",
  d: "M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
}, null, -1), Jn = [
  Zn
], Qn = {
  key: 2,
  viewBox: "60 60 140 140"
}, Xn = /* @__PURE__ */ pe('<path fill="#E01E5A" d="M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"></path><path fill="#E01E5A" d="M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9V151.2z"></path><path fill="#36C5F0" d="M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"></path><path fill="#36C5F0" d="M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9H118.8z"></path><path fill="#2EB67D" d="M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"></path><path fill="#2EB67D" d="M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9V118.8z"></path><path fill="#ECB22E" d="M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"></path><path fill="#ECB22E" d="M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9H151.2z"></path>', 8), Yn = [
  Xn
], xn = {
  key: 3,
  viewBox: "2 2 46 46"
}, ea = /* @__PURE__ */ h("path", { d: "M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" }, null, -1), oa = [
  ea
], ta = {
  key: 4,
  viewBox: "0 0 14222 14222"
}, sa = /* @__PURE__ */ h("circle", {
  cx: "7111",
  cy: "7112",
  r: "7111",
  fill: "#1977f3"
}, null, -1), la = /* @__PURE__ */ h("path", {
  d: "M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z",
  fill: "#fff"
}, null, -1), na = [
  sa,
  la
], aa = {
  key: 5,
  viewBox: "0 0 24 24"
}, ra = /* @__PURE__ */ h("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }, null, -1), ia = [
  ra
], da = {
  key: 6,
  viewBox: "6 6 36 36"
}, ca = /* @__PURE__ */ h("path", {
  fill: "#0288D1",
  d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
}, null, -1), ua = /* @__PURE__ */ h("path", {
  fill: "#FFF",
  d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
}, null, -1), pa = [
  ca,
  ua
], ma = {
  key: 7,
  viewBox: "10 10 160 160"
}, va = /* @__PURE__ */ pe('<defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"></stop><stop offset="1" stop-color="#23b33a"></stop></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531"></feGaussianBlur></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"></path><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"></path><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"></path><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"></path><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"></path>', 6), fa = [
  va
], ya = /* @__PURE__ */ B({
  __name: "SocialIcon",
  props: {
    name: {},
    white: { type: Boolean },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(n) {
    return (e, o) => (r(), v("span", {
      class: m([e.$style.SocialIcon, e.small && e.$style.small, e.large && e.$style.large, e.white && e.$style.white])
    }, [
      e.name === "google" ? (r(), v("svg", Wn, Gn)) : e.name === "twitter" ? (r(), v("svg", Kn, Jn)) : e.name === "slack" ? (r(), v("svg", Qn, Yn)) : e.white && e.name === "facebook" ? (r(), v("svg", xn, oa)) : e.name === "facebook" ? (r(), v("svg", ta, na)) : e.white && e.name === "linkedin" ? (r(), v("svg", aa, ia)) : e.name === "linkedin" ? (r(), v("svg", da, pa)) : e.name === "whatsapp" ? (r(), v("svg", ma, fa)) : C("", !0)
    ], 2));
  }
}), ha = "dodo-socialicon", $a = "dodo-socialicon-white", ga = "dodo-socialicon-small", ba = "dodo-socialicon-large", wa = {
  SocialIcon: ha,
  white: $a,
  small: ga,
  large: ba
}, ka = {
  $style: wa
}, Wr = /* @__PURE__ */ E(ya, [["__cssModules", ka]]), Ma = /* @__PURE__ */ h("path", {
  stroke: "currentColor",
  fill: "none",
  d: "M 9 1 A 8 8 0 0 1 17 9",
  "stroke-width": "2"
}, null, -1), Ca = /* @__PURE__ */ h("path", {
  stroke: "currentColor",
  opacity: "0.33",
  fill: "none",
  d: "M 17 9 A 8 8 0 1 1 9 1",
  "stroke-width": "2"
}, null, -1), Sa = [
  Ma,
  Ca
], _a = /* @__PURE__ */ B({
  __name: "Spinner",
  props: {
    color: { default: void 0 },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(n) {
    const e = n, o = w(() => {
      let s = "";
      return e.color === "inherit" ? s += "color:inherit;" : e.color && (s += `color:var(--dodo-color-${e.color});`), s;
    });
    return (s, t) => (r(), v("div", {
      class: m([s.$style.Spinner, s.small && s.$style.small, s.large && s.$style.large])
    }, [
      (r(), v("svg", {
        style: P(o.value),
        viewBox: "0 0 18 18"
      }, Sa, 4))
    ], 2));
  }
}), Ba = "dodo-spinner", Va = "dodo-spinner-small", za = "dodo-spinner-large", Ia = {
  Spinner: Ba,
  small: Va,
  large: za
}, Ea = {
  $style: Ia
}, Pr = /* @__PURE__ */ E(_a, [["__cssModules", Ea]]), Aa = ["onClick"], Fa = {
  key: 1,
  class: "dodo-color-background"
}, Ta = { style: {} }, Na = { key: 0 }, Ra = {
  key: 1,
  class: "dodo-fade-secondary"
}, Da = {
  key: 0,
  class: "dodo-fade-secondary"
}, La = /* @__PURE__ */ h("br", null, null, -1), Ha = /* @__PURE__ */ B({
  __name: "Stepper",
  props: {
    stepIndex: {},
    steps: {},
    submit: { type: Function },
    completed: {}
  },
  emits: ["update:stepIndex", "submit"],
  setup(n, { emit: e }) {
    const o = n, s = e, t = $(0), i = w(() => o.steps[t.value]);
    function c() {
      t.value--;
    }
    async function a() {
      const l = i.value;
      if (l.filled !== !1 && !(l.validate && !await l.validate())) {
        if (t.value === o.steps.length - 1) {
          await o.submit();
          return;
        }
        t.value++;
      }
    }
    function d(l) {
      l > t.value || (t.value = l);
    }
    return L(() => {
      o.stepIndex != null && (t.value = o.stepIndex);
    }), K(t, () => {
      s("update:stepIndex", t.value);
    }), (l, p) => (r(), V(f(W), {
      class: m(l.$style.stepper)
    }, {
      default: k(() => [
        (r(!0), v(D, null, G(l.steps, (y, S) => (r(), V(f(le), {
          key: y.key,
          align: "stretch",
          gap: "m",
          class: m(S > t.value && l.$style.inactiveStep)
        }, {
          default: k(() => [
            I(f(W), { align: "center" }, {
              default: k(() => [
                h("div", {
                  class: m([l.$style.circle]),
                  onClick: (F) => d(S)
                }, [
                  t.value > S ? (r(), V(f(j), {
                    key: 0,
                    name: "check"
                  })) : (r(), v("h3", Fa, A(S + 1), 1))
                ], 10, Aa),
                S < l.steps.length - 1 ? (r(), v("div", {
                  key: 0,
                  class: m(l.$style.line)
                }, null, 2)) : C("", !0)
              ]),
              _: 2
            }, 1024),
            I(f(W), { grow: "" }, {
              default: k(() => [
                I(f(W), {
                  gap: "xs",
                  onClick: (F) => d(S)
                }, {
                  default: k(() => [
                    h("h3", Ta, [
                      y === i.value ? (r(), v("span", Na, A(y.name), 1)) : (r(), v("span", Ra, A(y.name), 1))
                    ]),
                    y.hint ? (r(), v("p", Da, A(y.hint), 1)) : C("", !0)
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                y === i.value ? (r(), V(f(W), { key: 0 }, {
                  default: k(() => [
                    g(l.$slots, y.slot),
                    I(f(le), null, {
                      default: k(() => [
                        t.value > 0 ? (r(), V(f(X), {
                          key: 0,
                          variant: "link",
                          onClick: c
                        }, {
                          default: k(() => [
                            T(" Back ")
                          ]),
                          _: 1
                        })) : C("", !0),
                        t.value < l.steps.length - 1 ? (r(), V(f(X), {
                          key: 1,
                          disabled: y.filled === !1,
                          color: "primary",
                          variant: "solid",
                          onClick: a
                        }, {
                          default: k(() => [
                            g(l.$slots, "continue-button-text", {}, () => [
                              T("Continue")
                            ])
                          ]),
                          _: 2
                        }, 1032, ["disabled"])) : (r(), V(f(X), {
                          key: 2,
                          color: "primary",
                          variant: "solid",
                          onClick: a
                        }, {
                          default: k(() => [
                            g(l.$slots, "submit-button-text", {}, () => [
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
                }, 1024)) : C("", !0),
                La
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
}), Oa = "dodo-stepper-line", ja = "dodo-stepper-circle", Ua = "dodo-stepper-inactivestep", qa = {
  line: Oa,
  circle: ja,
  inactiveStep: Ua
}, Wa = {
  $style: qa
}, Gr = /* @__PURE__ */ E(Ha, [["__cssModules", Wa]]), Pa = ["onClick"], Ga = /* @__PURE__ */ h("hr", null, null, -1), Ka = /* @__PURE__ */ B({
  __name: "Tabs",
  props: {
    tabs: {},
    tabIndex: {}
  },
  emits: ["update:tabIndex"],
  setup(n, { emit: e }) {
    const o = n, s = e, t = $(""), i = w(() => o.tabs.find((a) => c(a) === t.value));
    L(() => {
      !i.value && o.tabs.length && (t.value = c(o.tabs[0]));
    }), K(
      () => o.tabIndex,
      () => {
        o.tabIndex != null && o.tabs[o.tabIndex] && (t.value = c(o.tabs[o.tabIndex]));
      },
      { immediate: !0 }
    ), K(
      () => i.value,
      () => {
        i.value && s("update:tabIndex", o.tabs.indexOf(i.value));
      },
      { immediate: !0 }
    );
    function c(a) {
      return a.slot ?? a.name;
    }
    return (a, d) => (r(), V(f(W), {
      gap: "m",
      style: { "min-width": "0" }
    }, {
      default: k(() => [
        I(f(W), { gap: "0" }, {
          default: k(() => [
            h("div", {
              class: m(a.$style.bar)
            }, [
              (r(!0), v(D, null, G(a.tabs, (l, p) => (r(), v("div", {
                key: c(l),
                class: m([a.$style.tab, t.value === c(l) && a.$style.active, l.disabled && a.$style.disabled]),
                onClick: (y) => t.value = c(l)
              }, [
                h("h5", {
                  class: m(a.$style.tabName)
                }, [
                  g(a.$slots, "tab-title", {
                    i: p,
                    tab: l
                  }, () => [
                    T(A(l.name), 1)
                  ])
                ], 2)
              ], 10, Pa))), 128))
            ], 2),
            Ga
          ]),
          _: 3
        }),
        i.value ? g(a.$slots, i.value.slot ?? "default", {
          key: 0,
          tab: i.value
        }) : C("", !0)
      ]),
      _: 3
    }));
  }
}), Za = "dodo-tabs-bar", Ja = "dodo-tabs-tab", Qa = "dodo-tabs-tabname", Xa = "dodo-tabs-active", Ya = "dodo-tabs-disabled", xa = {
  bar: Za,
  tab: Ja,
  tabName: Qa,
  active: Xa,
  disabled: Ya
}, er = {
  $style: xa
}, Kr = /* @__PURE__ */ E(Ka, [["__cssModules", er]]), or = ["placeholder", "disabled", "maxlength", "type", "name", "autofocus", "autocomplete"], tr = /* @__PURE__ */ B({
  __name: "TextInput",
  props: /* @__PURE__ */ Fe({
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
  setup(n) {
    const e = Te(n, "modelValue");
    return (o, s) => se((r(), v("input", {
      "onUpdate:modelValue": s[0] || (s[0] = (t) => e.value = t),
      class: m(["dodo-formfield", o.error && o.$style.error, o.$style.input]),
      placeholder: o.placeholder,
      disabled: o.disabled,
      maxlength: o.maxlength,
      type: o.type || "text",
      name: o.name,
      autofocus: o.autofocus,
      autocomplete: o.autocomplete
    }, null, 10, or)), [
      [so, e.value]
    ]);
  }
}), sr = "dodo-textinput-input", lr = "dodo-textinput-error", nr = {
  input: sr,
  error: lr
}, ar = {
  $style: nr
}, rr = /* @__PURE__ */ E(tr, [["__cssModules", ar]]), ir = ["placeholder", "disabled", "name", "autofocus", "rows", "autocomplete"], dr = /* @__PURE__ */ B({
  __name: "Textarea",
  props: /* @__PURE__ */ Fe({
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
  setup(n) {
    const e = n, o = Te(n, "modelValue"), s = $(null), t = $(e.minRows);
    function i() {
      const d = e.maxRows && e.maxRows > 0 ? e.maxRows : 12, l = e.minRows && e.minRows > 0 ? e.minRows : 4, p = s.value;
      if (!p) return l;
      let y = l;
      for (p.style.overflow = "hidden", p.setAttribute("rows", `${y}`); p.scrollHeight > p.offsetHeight && y < d; )
        p.setAttribute("rows", `${++y}`);
      return p.style.overflow = "", y;
    }
    function c() {
      t.value = i(), a.value || window.requestAnimationFrame(c);
    }
    const a = $(!1);
    return x(c), ee(() => {
      a.value = !0;
    }), (d, l) => se((r(), v("textarea", {
      ref_key: "textarea",
      ref: s,
      "onUpdate:modelValue": l[0] || (l[0] = (p) => o.value = p),
      class: m(["dodo-formfield", d.error && d.$style.error, d.$style.textarea]),
      placeholder: d.placeholder,
      disabled: d.disabled,
      name: d.name,
      autofocus: d.autofocus,
      rows: t.value,
      autocomplete: d.autocomplete,
      resize: "false"
    }, null, 10, ir)), [
      [Ae, o.value]
    ]);
  }
}), cr = "dodo-textarea", ur = "dodo-textarea-error", pr = {
  textarea: cr,
  error: ur
}, mr = {
  $style: pr
}, Zr = /* @__PURE__ */ E(dr, [["__cssModules", mr]]), vr = /* @__PURE__ */ B({
  __name: "Tooltip",
  props: {
    text: {},
    disabled: { type: Boolean },
    side: {}
  },
  setup(n) {
    const e = n, o = $(!1), s = $(""), t = $(), i = $(), c = ne(), a = w(() => e.disabled || !(e.text || c["tooltip-text"]));
    ee(l);
    async function d() {
      if (o.value || a.value) return;
      o.value = !0, await Ie();
      const p = t.value.getBoundingClientRect(), y = i.value.getBoundingClientRect();
      e.side, p.bottom + y.height < window.innerHeight;
      let S = (p.right + p.left - y.width) / 2, F = p.bottom;
      e.side === "right" ? (S = p.right, F = (p.bottom + p.top - y.height) / 2) : e.side === "top" ? (S = (p.left + p.right - y.width) / 2, F = p.top - y.height) : e.side === "left" && (S = p.left - y.width, F = (p.bottom + p.top - y.height) / 2), F = Math.round(Math.max(Math.min(F, window.innerHeight - y.height), 0)), S = Math.round(Math.max(Math.min(S, window.innerWidth - y.width), 0)), s.value = `left:${S}px;top:${F}px`;
    }
    function l() {
      o.value = !1;
    }
    return (p, y) => (r(), v("div", {
      ref_key: "trigger",
      ref: t,
      class: m(p.$style.trigger),
      onMouseover: d,
      onMouseleave: l
    }, [
      g(p.$slots, "default"),
      o.value ? (r(), V(ze, {
        key: 0,
        to: "body"
      }, [
        h("div", {
          ref_key: "tooltip",
          ref: i,
          class: m(p.$style.Tooltip),
          style: P(s.value)
        }, [
          h("div", {
            class: m(p.$style.content)
          }, [
            h("small", {
              class: m(p.$style.text)
            }, [
              g(p.$slots, "tooltip-text", {}, () => [
                T(A(p.text), 1)
              ])
            ], 2)
          ], 2)
        ], 6)
      ])) : C("", !0)
    ], 34));
  }
}), fr = "dodo-tooltip", yr = "dodo-tooltip-content", hr = "dodo-tooltip-text", $r = "dodo-tooltip-trigger", gr = {
  Tooltip: fr,
  content: yr,
  text: hr,
  trigger: $r
}, br = {
  $style: gr
}, fe = /* @__PURE__ */ E(vr, [["__cssModules", br]]);
export {
  Cr as Animated,
  Sr as Avatar,
  X as Button,
  Jo as Card,
  Se as Checkbox,
  yt as Chip,
  Ar as ChoiceChips,
  W as Column,
  Fr as CrashDialog,
  Tr as Datatable,
  ds as Dialog,
  Ze as Dropdown,
  Cs as FieldOld,
  Nr as FluidGrid,
  Rr as Form,
  Gs as FormItem,
  Dr as Grid,
  j as Icon,
  rl as MenuItem,
  Lr as Modal,
  Hr as NavBar,
  Ve as NavBarItem,
  Or as NavBarNew,
  jr as NavItem,
  le as Row,
  Bn as ScrollContainer,
  qr as Select,
  Ur as SelectOld,
  Wr as SocialIcon,
  Pr as Spinner,
  Gr as Stepper,
  Kr as Tabs,
  rr as TextInput,
  Zr as Textarea,
  fe as Tooltip,
  Ir as ValidationError,
  Vr as crashPlugin,
  Pe as crashServiceKey,
  Ce as darkModeSetting,
  Qo as dropdownServiceKey,
  qe as navBarServiceKey,
  Br as parseColor,
  xo as useCrashService,
  _r as useElementSize,
  zr as useResizeObserver,
  We as useScreenSize,
  et as useServiceFactory,
  Xo as useSessionStoredRef,
  te as useTheme,
  Er as useValidation,
  Yo as useWebFont
};
