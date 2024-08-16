var Le = Object.defineProperty;
var He = (d, o, e) => o in d ? Le(d, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[o] = e;
var $e = (d, o, e) => He(d, typeof o != "symbol" ? o + "" : o, e);
import { defineComponent as V, openBlock as a, createBlock as S, TransitionGroup as Oe, withCtx as b, renderSlot as h, Transition as re, computed as _, createElementBlock as v, normalizeClass as m, normalizeStyle as G, Fragment as D, createTextVNode as T, toDisplayString as F, createCommentVNode as M, useAttrs as Ue, ref as w, mergeProps as ie, unref as f, createElementVNode as $, onMounted as x, watchEffect as U, onBeforeUnmount as ee, watch as K, inject as de, provide as ce, reactive as he, withModifiers as oe, createVNode as I, resolveDynamicComponent as ue, renderList as P, Teleport as _e, nextTick as Be, onUnmounted as je, useSlots as ne, getCurrentInstance as Se, withDirectives as se, vShow as qe, vModelText as Ve, vModelSelect as We, createStaticVNode as pe, mergeModels as ze, useModel as Ie, vModelDynamic as Pe } from "vue";
const ge = !1, ja = /* @__PURE__ */ V({
  __name: "Animated",
  props: {
    list: { type: Boolean },
    appear: { type: Boolean }
  },
  setup(d) {
    return (o, e) => o.list ? (a(), S(Oe, {
      key: 0,
      name: "dodo",
      appear: o.appear,
      css: !ge
    }, {
      default: b(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"])) : (a(), S(re, {
      key: 1,
      appear: o.appear,
      name: "dodo",
      css: !ge,
      mode: "out-in"
    }, {
      default: b(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"]));
  }
}), Ge = /* @__PURE__ */ V({
  __name: "Avatar",
  props: {
    text: {},
    image: {},
    round: { type: Boolean }
  },
  setup(d) {
    const o = ["info", "warning", "success", "danger"], e = d, l = _(() => {
      let s = e.text.trim();
      const u = /\b\w|[A-Z]/g, i = e.text.match(u);
      return i != null && i.length && (s = i.join("")), s.slice(0, 2).toUpperCase();
    }), t = _(() => {
      const s = o.length, u = r(e.text);
      return `var(--dodo-color-${o[u % s]}`;
    });
    function r(s) {
      let u = 0;
      for (let i = 0; i < s.length; ++i) u = 997 * (u % 1e6) + 11 * s.charCodeAt(i);
      return u;
    }
    return (s, u) => (a(), v("span", {
      class: m([s.$style.Avatar, s.round && s.$style.round]),
      style: G([`--color:${t.value}`, s.image ? `background-image:url(${s.image})` : ""])
    }, [
      s.image ? M("", !0) : (a(), v(D, { key: 0 }, [
        T(F(l.value), 1)
      ], 64))
    ], 6));
  }
}), Ke = "dodo-avatar", Je = "dodo-avatar-round", Ze = {
  Avatar: Ke,
  round: Je
}, E = (d, o) => {
  const e = d.__vccOpts || d;
  for (const [l, t] of o)
    e[l] = t;
  return e;
}, Qe = {
  $style: Ze
}, qa = /* @__PURE__ */ E(Ge, [["__cssModules", Qe]]), Xe = ["disabled", "type"], Ye = /* @__PURE__ */ V({
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
  setup(d) {
    const o = d, e = _(() => {
      let s = "";
      return o.color && (s += `--button-color:var(--dodo-color-${o.color});`), s;
    }), l = Ue(), t = w(!1);
    async function r(s) {
      if (!t.value && typeof l.onClick == "function") {
        const u = l.onClick(s);
        u instanceof Promise && (t.value = !0, await u.finally(() => {
          t.value = !1;
        }));
      }
    }
    return (s, u) => (a(), v("button", ie({
      style: e.value,
      disabled: s.disabled,
      type: s.type ?? "button",
      class: [
        s.$style.Button,
        s.$style[o.variant ?? "default"],
        t.value && s.$style.loading,
        s.small && s.$style.small,
        s.square && s.$style.square,
        s.active && s.$style.active,
        s.rounded && s.$style.rounded
      ]
    }, { ...f(l), onClick: r }), [
      $("div", {
        class: m(s.$style.content)
      }, [
        h(s.$slots, "default")
      ], 2),
      t.value ? (a(), S(f(Zn), {
        key: 0,
        small: s.small,
        class: m(s.$style.spinner),
        color: "inherit"
      }, null, 8, ["small", "class"])) : M("", !0)
    ], 16, Xe));
  }
}), xe = "dodo-button", eo = "dodo-button-content", oo = "dodo-button-solid", to = "dodo-button-rounded", so = "dodo-button-text", lo = "dodo-button-loading", no = "dodo-button-spinner", ao = "dodo-button-active", ro = "dodo-button-small", io = "dodo-button-square", co = {
  Button: xe,
  content: eo,
  solid: oo,
  default: "dodo-button-default",
  rounded: to,
  text: so,
  loading: lo,
  spinner: no,
  active: ao,
  small: ro,
  square: io
}, uo = {
  $style: co
}, X = /* @__PURE__ */ E(Ye, [["__cssModules", uo]]), po = /* @__PURE__ */ V({
  __name: "Card",
  props: {
    hoverable: { type: Boolean },
    active: { type: Boolean },
    gap: {},
    padding: {}
  },
  setup(d) {
    const o = te();
    return (e, l) => (a(), v("div", {
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
}), Ee = Symbol("NavBarService"), mo = Symbol("DropdownService");
function Wa(d) {
  const o = w(0), e = w(0), l = new ResizeObserver(t);
  function t() {
    var r, s;
    o.value = ((r = d.value) == null ? void 0 : r.clientWidth) ?? 0, e.value = ((s = d.value) == null ? void 0 : s.clientHeight) ?? 0;
  }
  return x(t), U(() => {
    l.disconnect(), d.value && l.observe(d.value), t();
  }), ee(() => {
    l.disconnect();
  }), { width: o, height: e, observer: l };
}
function Fe() {
  const e = w(window.innerWidth), l = w(window.innerHeight), t = _(() => e.value < 600), r = _(() => e.value >= 600 && e.value < 1200), s = _(() => e.value >= 1200);
  function u() {
    e.value = window.innerWidth, l.value = window.innerHeight;
  }
  return x(() => {
    window.addEventListener("resize", u, { passive: !0 });
  }), ee(() => {
    window.removeEventListener("resize", u);
  }), {
    screenSmall: t,
    screenMedium: r,
    screenLarge: s
  };
}
function vo(d, o) {
  const e = w(o), l = sessionStorage.getItem(d);
  return l && (e.value = JSON.parse(l)), K(e, (t) => {
    sessionStorage.setItem(d, JSON.stringify(t));
  }), e;
}
function fo(d) {
  const o = w(!1);
  return x(async () => {
    const e = `font-${d.name}-${d.weight}`;
    let l = document.getElementById(e);
    if (l || (l = document.createElement("link"), l.setAttribute("href", d.href), l.setAttribute("rel", "stylesheet"), l.setAttribute("id", e), document.head.appendChild(l)), !document.fonts) {
      o.value = !0;
      return;
    }
    await document.fonts.ready, o.value = document.fonts.check(`${d.weight} 1em ${d.name}`);
  }), { isReady: o };
}
function Pa(d) {
  if (!d.match(/^#\w{6}$/)) throw new Error("Invalid hex color");
  return d.match(/(\w\w)/g).map((o) => parseInt(o, 16)).slice(0, 3);
}
const Ae = Symbol(Te.name);
function Te(d) {
  const o = w(null), e = w(0), l = 1e3;
  function t() {
    o.value = null, e.value = Date.now() + l;
  }
  function r() {
    location.reload();
  }
  function s(u) {
    d.onError && d.onError(u) === !1 || !o.value && e.value < Date.now() && (console.error(u), o.value = u);
  }
  return { ignoreError: t, reloadPage: r, currentError: o, handleCrash: s };
}
function Ga(d) {
  return (o) => {
    var t;
    const e = Te(d);
    o.provide(Ae, e);
    const { errorHandler: l } = o.config;
    o.config.errorHandler = (r, s, u) => {
      if (e.handleCrash(r), l) return l(r, s, u);
    }, (t = d.router) == null || t.onError((r) => {
      e.handleCrash(r);
    }), window.addEventListener("unhandledrejection", (r) => {
      e.handleCrash(r.reason);
    }), window.addEventListener("error", (r) => {
      e.handleCrash(r.error ?? r.message);
    });
  };
}
function yo() {
  return de(Ae);
}
function Ka(d, o) {
  if (typeof ResizeObserver > "u") return {};
  const e = new ResizeObserver(() => o(d.value));
  return U(() => {
    d.value && e.observe(d.value);
  }), ee(() => {
    e.disconnect();
  }), { observer: e };
}
function $o(d) {
  const o = Symbol("ServiceKey");
  return { createAndProvide: () => {
    const t = d();
    return ce(o, t), t;
  }, injectOptional: () => de(o, void 0) };
}
function te() {
  function d(i) {
    return `var(--dodo-spacing-${i})`;
  }
  function o(i) {
    return i ? `dodo-gap-${i}` : "";
  }
  function e(i) {
    return i ? `dodo-padding-${i}` : "";
  }
  function l(i) {
    return i ? `dodo-justify-${i}` : "";
  }
  function t(i) {
    return i ? `dodo-align-${i}` : "";
  }
  function r(i) {
    return i ? "dodo-wrap" : "";
  }
  function s(i) {
    return i ? "dodo-flex" : "";
  }
  function u(i) {
    return i ? "dodo-grow" : "";
  }
  return {
    gapValue: d,
    gap: o,
    padding: e,
    justify: l,
    align: t,
    wrap: r,
    flex: s,
    grow: u,
    theme: ve,
    toggleTheme: bo
  };
}
const be = w(), ho = localStorage.getItem("dodotheme"), me = w(ho), Ne = w();
if (window.matchMedia) {
  const d = window.matchMedia("(prefers-color-scheme: dark)"), o = () => {
    Ne.value = d.matches ? "dark" : "light";
  };
  d.addEventListener("change", o), o();
}
const go = _(() => be.value === "auto" ? Ne.value : be.value), ve = _(() => me.value || go.value || "light");
function bo() {
  me.value = ve.value === "dark" ? "light" : "dark";
}
U(() => {
  localStorage.setItem("dodotheme", me.value ?? ""), document.body.setAttribute("data-dodotheme", ve.value ?? "");
});
class Ja extends Error {
  constructor(e, l) {
    super(l);
    $e(this, "name", "ValidationError");
    this.field = e;
  }
}
function Za(d) {
  const o = he(d), e = he({});
  K(o, () => r());
  async function l(n) {
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
    return (await Promise.all(p.map((C) => l(C)))).every((C) => C);
  }
  async function r() {
    return (await Promise.all(Object.keys(e).map((p) => l(p)))).every((p) => p);
  }
  function s() {
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
        if (z) return z;
      }
  }
  function i(n) {
    return n.toString().replace(/_/g, " ").replace(/^./, (p) => p.toUpperCase()).replace(/[a-z][A-Z]/g, (p) => `${p[0]} ${p[1]}`);
  }
  return { errors: e, rules: o, validate: t, clearErrors: s };
}
const wo = ["checked"], ko = /* @__PURE__ */ V({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean },
    indeterminate: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(d, { emit: o }) {
    const e = d, l = o;
    function t() {
      l("update:modelValue", e.indeterminate || !e.modelValue);
    }
    function r(s) {
      s.target.checked !== e.modelValue && t();
    }
    return (s, u) => (a(), v("span", {
      class: m([s.$style.Checkbox, s.modelValue && s.$style.checked]),
      onClick: oe(t, ["stop"])
    }, [
      I(f(O), {
        name: s.indeterminate ? "indeterminate_check_box" : s.modelValue ? "check_box" : "check_box_outline_blank"
      }, null, 8, ["name"]),
      h(s.$slots, "default"),
      $("input", {
        type: "checkbox",
        checked: s.modelValue,
        onChange: r
      }, null, 40, wo)
    ], 2));
  }
}), Mo = "dodo-checkbox", Co = "dodo-checkbox-checked", _o = {
  Checkbox: Mo,
  checked: Co
}, Bo = {
  $style: _o
}, we = /* @__PURE__ */ E(ko, [["__cssModules", Bo]]), So = /* @__PURE__ */ V({
  __name: "Chip",
  props: {
    color: {},
    variant: {}
  },
  setup(d) {
    const o = d, e = _(() => {
      let l = "";
      return o.color && (l += `--chip-color:var(--dodo-color-${o.color});`), l;
    });
    return (l, t) => (a(), S(ue(l.$attrs.onClick ? "button" : "div"), {
      class: m([l.$style.Chip, l.variant === "solid" && l.$style.solid]),
      style: G(e.value)
    }, {
      default: b(() => [
        h(l.$slots, "before"),
        $("div", {
          class: m(l.$style.text)
        }, [
          h(l.$slots, "default")
        ], 2),
        h(l.$slots, "after")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), Vo = "dodo-chip", zo = "dodo-chip-solid", Io = "dodo-chip-text", Eo = {
  Chip: Vo,
  solid: zo,
  text: Io
}, Fo = {
  $style: Eo
}, Ao = /* @__PURE__ */ E(So, [["__cssModules", Fo]]), ae = "Outlined", ke = "300", To = /* @__PURE__ */ V({
  __name: "Icon",
  props: {
    name: {},
    color: {},
    fill: { type: Boolean },
    small: {},
    large: {},
    size: {}
  },
  setup(d) {
    const o = d, e = w(), l = fo({
      weight: ke,
      name: `Material Symbols ${ae}`,
      href: `https://fonts.googleapis.com/css2?family=Material+Symbols+${ae}:wght,FILL@${ke},0..1`
    });
    return (t, r) => (a(), v("span", {
      ref_key: "el",
      ref: e,
      style: G([t.color ? `color: var(--dodo-color-${t.color});` : "", f(l).isReady ? "" : "visibility:hidden"]),
      class: m([
        t.$style.icon,
        "material-symbols-" + ae.toLowerCase(),
        o.size && t.$style[o.size],
        o.fill && t.$style.fill
      ])
    }, F(t.name), 7));
  }
}), No = "dodo-icon", Ro = "dodo-icon-fill", Do = "dodo-icon-xs", Lo = "dodo-icon-s", Ho = "dodo-icon-l", Oo = "dodo-icon-xl", Uo = {
  icon: No,
  fill: Ro,
  xs: Do,
  s: Lo,
  l: Ho,
  xl: Oo
}, jo = {
  $style: Uo
}, O = /* @__PURE__ */ E(To, [["__cssModules", jo]]), qo = /* @__PURE__ */ V({
  __name: "ChoiceChips",
  props: {
    options: {},
    modelValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    small: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(d, { emit: o }) {
    const e = d, l = o, t = _(() => e.multiple ? [e.modelValue].flat() : [e.modelValue]);
    function r(i, n) {
      return i.value === n;
    }
    function s(i) {
      return t.value.some((n) => r(i, n));
    }
    function u(i) {
      let n = i.value;
      s(i) && e.multiple ? n = t.value.filter((y) => !r(i, y)) : e.multiple && (n = [...t.value, i.value]), l("update:modelValue", n);
    }
    return (i, n) => (a(), v("div", {
      class: m([i.$style.ChoiceChips, i.multiple && i.$style.multiple])
    }, [
      (a(!0), v(D, null, P(i.options, (p, y) => (a(), S(Ao, {
        key: p.label,
        color: s(p) ? "info" : void 0,
        variant: !i.multiple && s(p) ? "solid" : void 0,
        disabled: i.disabled,
        small: i.small,
        rounded: "",
        onClick: (C) => u(p)
      }, {
        default: b(() => [
          i.multiple && s(p) ? (a(), S(O, {
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
}), Wo = "dodo-choicechips", Po = {
  ChoiceChips: Wo
}, Go = {
  $style: Po
}, Qa = /* @__PURE__ */ E(qo, [["__cssModules", Go]]), Ko = /* @__PURE__ */ V({
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
  setup(d) {
    const o = te();
    return (e, l) => (a(), S(ue(e.tag ?? "div"), {
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
}), Jo = "dodo-column-el", Zo = {
  el: Jo
}, Qo = {
  $style: Zo
}, W = /* @__PURE__ */ E(Ko, [["__cssModules", Qo]]), Xo = /* @__PURE__ */ $("h3", null, "Something went wrong", -1), Me = `
  An unexpected error occurred and the application may not function correctly until the page is reloaded.
  Any unsaved changes will be lost if you choose to reload the page.
`, Xa = /* @__PURE__ */ V({
  __name: "CrashDialog",
  setup(d) {
    const o = yo(), e = _(() => o.currentError.value), l = w(!1);
    return U(() => {
      l.value = !!e.value;
    }), (t, r) => (a(), S(f(Bt), { active: l.value }, {
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
        Xo,
        h(t.$slots, "body", {
          error: e.value,
          defaultText: Me
        }, () => [
          $("p", null, F(Me))
        ])
      ]),
      _: 3
    }, 8, ["active"]));
  }
}), Yo = {
  key: 0,
  style: { width: "0" },
  scope: "col"
}, xo = ["onClick"], et = ["onClick"], ot = { key: 0 }, tt = /* @__PURE__ */ $("td", { colspan: "999" }, "No results", -1), st = [
  tt
], lt = { colspan: "999" }, nt = { key: 0 }, at = /* @__PURE__ */ V({
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
  setup(d, { emit: o }) {
    const e = d, l = o, t = w(), r = w([]), s = w(!1);
    U(() => {
      t.value = e.sortValue;
    }), U(() => {
      r.value = e.selection ?? [];
    }), K(t, (c) => {
      l("update:sortValue", c);
    }), K(r, (c) => {
      l("update:selection", c);
    });
    const u = _(() => {
      var c;
      return (c = t.value) == null ? void 0 : c.startsWith("-");
    }), i = _(() => e.columns.filter((c) => !c.disabled)), n = _(() => !!e.selection), p = _(() => {
      const c = i.value.find(C);
      return e.sortAsync || !c ? e.rows : e.rows.slice().sort((g, B) => {
        const R = Z(c, g), q = Z(c, B), ye = typeof R == "number" && typeof q == "number" ? q - R : `${q}`.localeCompare(`${R}`);
        return u.value ? ye : -ye;
      });
    });
    function y(c) {
      if (C(c))
        return u.value ? "arrow_drop_up" : "arrow_drop_down";
    }
    function C(c) {
      var g;
      return ((g = t.value) == null ? void 0 : g.replace("-", "")) === c.sort;
    }
    function A(c) {
      return c.slot || c.name.trim().replace(/\W/g, "");
    }
    function z(c) {
      return !!c.sort;
    }
    function L(c) {
      return c.align ? `text-align:${c.align}` : "";
    }
    function J(c) {
      return c.width ? `width:${c.width}` : "";
    }
    async function N(c) {
      z(c) && (C(c) ? t.value = u.value ? void 0 : "-" + c.sort : t.value = c.sort, e.sortAsync && (s.value = !0, await e.sortAsync(t.value).finally(() => {
        s.value = !1;
      })));
    }
    function H(c) {
      return e.selectBy ? c[e.selectBy] : c;
    }
    function j(c) {
      const g = H(c);
      r.value.includes(g) ? r.value = r.value.filter((B) => B !== g) : r.value = r.value.concat(g);
    }
    function Z(c, g) {
      return typeof c.value == "function" ? c.value(g) : typeof c.value == "string" ? g[c.value] : "";
    }
    function Y(c) {
      if (!n.value) return !1;
      const g = H(c);
      return r.value.includes(g);
    }
    const Q = _(() => n.value ? e.rows.filter((c) => r.value.includes(H(c))) : []);
    function k() {
      const c = Q.value.length === e.rows.length;
      r.value = c ? [] : e.rows.map(H);
    }
    return (c, g) => (a(), v("div", {
      class: m([c.$style.Datatable, c.contentLoading && c.$style.loading])
    }, [
      $("table", null, [
        $("tbody", null, [
          $("tr", {
            class: m(c.stickyHeader && c.$style.stickyHeader)
          }, [
            n.value ? (a(), v("th", Yo, [
              I(f(we), {
                indeterminate: Q.value.length > 0 && Q.value.length < c.rows.length,
                "model-value": Q.value.length > 0 && Q.value.length === c.rows.length,
                "onUpdate:modelValue": k
              }, null, 8, ["indeterminate", "model-value"])
            ])) : M("", !0),
            (a(!0), v(D, null, P(i.value, (B) => (a(), v("th", {
              key: B.name,
              scope: "col",
              class: m([z(B) ? c.$style.sortable : "", C(B) && c.$style.sortActive]),
              style: G([L(B), J(B)]),
              onClick: (R) => N(B)
            }, [
              $("span", {
                class: m(c.$style.colName)
              }, [
                $("span", null, [
                  h(c.$slots, `${A(B)}-header`, { column: B }, () => [
                    T(F(B.name), 1)
                  ])
                ]),
                y(B) ? (a(), S(f(O), {
                  key: 0,
                  name: y(B),
                  class: m(c.$style.sortIcon)
                }, null, 8, ["name", "class"])) : M("", !0)
              ], 2)
            ], 14, xo))), 128))
          ], 2),
          (a(!0), v(D, null, P(p.value, (B, R) => (a(), v("tr", {
            key: R,
            class: m([c.rowClick && c.$style.clickableRow, Y(B) && c.$style.rowSelected]),
            onClick: (q) => c.rowClick && c.rowClick(B)
          }, [
            n.value ? (a(), v("td", ot, [
              I(f(we), {
                "model-value": Y(B),
                "onUpdate:modelValue": (q) => j(B)
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ])) : M("", !0),
            (a(!0), v(D, null, P(i.value, (q) => (a(), v("td", {
              key: q.name,
              class: m([]),
              style: G(L(q))
            }, [
              h(c.$slots, A(q), {
                row: B,
                column: q
              }, () => [
                T(F(Z(q, B)), 1)
              ])
            ], 4))), 128))
          ], 10, et))), 128)),
          c.rows.length ? M("", !0) : (a(), v("tr", {
            key: 0,
            class: m(c.$style.noResults)
          }, st, 2)),
          c.rows.length && c.showMore ? (a(), v("tr", {
            key: 1,
            class: m(c.$style.showMore)
          }, [
            $("td", lt, [
              I(f(X), {
                variant: "text",
                color: "info",
                onClick: c.showMore
              }, {
                default: b(() => [
                  T("Show more results")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ], 2)) : M("", !0),
          c.showFooter ? (a(), v("tr", {
            key: 2,
            class: m([c.$style.footer, c.stickyHeader && c.$style.stickyFooter])
          }, [
            n.value ? (a(), v("td", nt)) : M("", !0),
            (a(!0), v(D, null, P(i.value, (B) => (a(), v("th", {
              key: B.name,
              style: G(L(B)),
              scope: "col"
            }, [
              h(c.$slots, `${A(B)}-footer`, { column: B })
            ], 4))), 128))
          ], 2)) : M("", !0)
        ])
      ])
    ], 2));
  }
}), rt = "dodo-datatable", it = "dodo-datatable-colname", dt = "dodo-datatable-sortable", ct = "dodo-datatable-sorticon", ut = "dodo-datatable-sortactive", pt = "dodo-datatable-noresults", mt = "dodo-datatable-showmore", vt = "dodo-datatable-clickablerow", ft = "dodo-datatable-rowselected", yt = "dodo-datatable-stickyheader", $t = "dodo-datatable-stickyfooter", ht = "dodo-datatable-loading", gt = {
  Datatable: rt,
  colName: it,
  sortable: dt,
  sortIcon: ct,
  sortActive: ut,
  noResults: pt,
  showMore: mt,
  clickableRow: vt,
  rowSelected: ft,
  stickyHeader: yt,
  stickyFooter: $t,
  loading: ht
}, bt = {
  $style: gt
}, Ya = /* @__PURE__ */ E(at, [["__cssModules", bt]]), wt = /* @__PURE__ */ V({
  __name: "Dialog",
  props: {
    active: { type: Boolean }
  },
  setup(d) {
    const o = d, e = w();
    return U(() => {
      o.active && e.value && e.value.parentNode.appendChild(e.value);
    }), (l, t) => (a(), S(_e, { to: "body" }, [
      I(re, { name: "Dialog" }, {
        default: b(() => [
          l.active ? (a(), v("div", {
            key: 0,
            ref_key: "el",
            ref: e,
            class: m([l.$style.Dialog])
          }, [
            $("div", {
              class: m(l.$style.window)
            }, [
              I(f(W), { padding: "m" }, {
                default: b(() => [
                  h(l.$slots, "default")
                ]),
                _: 3
              }),
              I(f(le), {
                padding: "m",
                justify: "end",
                gap: "s"
              }, {
                default: b(() => [
                  h(l.$slots, "controls")
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
}), kt = "dodo-dialog", Mt = "dodo-dialog-window", Ct = {
  Dialog: kt,
  window: Mt,
  "Dialog-enter-active": "dodo-dialog-dialog-enter-active",
  "Dialog-leave-active": "dodo-dialog-dialog-leave-active",
  "Dialog-enter-from": "dodo-dialog-dialog-enter-from",
  "Dialog-leave-to": "dodo-dialog-dialog-leave-to"
}, _t = {
  $style: Ct
}, Bt = /* @__PURE__ */ E(wt, [["__cssModules", _t]]), St = /* @__PURE__ */ V({
  __name: "Dropdown",
  props: {
    modelValue: { type: Boolean },
    padding: {},
    gap: {},
    disabled: { type: Boolean },
    trigger: {}
  },
  emits: ["update:modelValue"],
  setup(d, { emit: o }) {
    const e = d, l = o, t = w(!1), r = w(""), s = w(), u = w();
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
      t.value !== z && (e.disabled && z || (t.value = z, l("update:modelValue", z), z ? Be().then(() => {
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
      var H, j;
      if (!t.value || e.trigger !== "hover") return;
      const L = z.relatedTarget, J = (H = u.value) == null ? void 0 : H.contains(L), N = (j = s.value) == null ? void 0 : j.contains(L);
      J || N || i(!1);
    }
    function C(z) {
      var L, J;
      if (z.target) {
        const N = (L = u.value) == null ? void 0 : L.contains(z.target), H = (J = s.value) == null ? void 0 : J.contains(z.target);
        if (N || H) return;
      }
      i(!1);
    }
    function A() {
      const L = s.value;
      if (!L) return;
      const J = L.scrollWidth, N = u.value.getBoundingClientRect(), H = window.innerWidth, j = window.innerHeight, Z = N.bottom + 300 + 16 > j, Y = Math.max(16, Math.min(N.left, H - J - 16)), Q = Math.min(600, H - 16 * 2);
      let k = `left: ${Y}px; max-width:${Q}px;`;
      Z ? k += `bottom: ${j - N.top}px; max-height: ${N.top - 16}px;` : k += `top: ${N.bottom}px; max-height: ${j - N.bottom - 16}px;`, r.value = k, t.value && requestAnimationFrame(A);
    }
    return ce(mo, { toggle: i }), (z, L) => (a(), v(D, null, [
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
      t.value ? (a(), v("div", {
        key: 0,
        class: m([z.$style.container]),
        style: G(r.value)
      }, [
        $("div", {
          ref_key: "content",
          ref: s,
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
}), Vt = "dodo-dropdown-trigger", zt = "dodo-dropdown-disabled", It = "dodo-dropdown-container", Et = "dodo-dropdown-content", Ft = {
  trigger: Vt,
  disabled: zt,
  container: It,
  content: Et
}, At = {
  $style: Ft
}, Re = /* @__PURE__ */ E(St, [["__cssModules", At]]), Tt = /* @__PURE__ */ V({
  __name: "FieldOld",
  props: {
    disabled: { type: Boolean },
    button: { type: Boolean }
  },
  setup(d) {
    return (o, e) => (a(), v("div", {
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
}), Nt = "dodo-fieldold-field", Rt = "dodo-fieldold-button", Dt = "dodo-fieldold-inner", Lt = "dodo-fieldold-disabled", Ht = {
  Field: Nt,
  button: Rt,
  inner: Dt,
  disabled: Lt
}, Ot = {
  $style: Ht
}, Ut = /* @__PURE__ */ E(Tt, [["__cssModules", Ot]]), jt = /* @__PURE__ */ V({
  __name: "FluidGrid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean },
    alignItems: {}
  },
  setup(d) {
    const o = d, e = te(), l = w(), t = w(99999);
    let r = null;
    const s = new ResizeObserver(() => {
      r && clearTimeout(r), r = setTimeout(() => {
        t.value = l.value.clientWidth;
      }, 50);
    });
    x(() => {
      s.observe(l.value);
    }), je(() => {
      s.disconnect();
    });
    const u = _(() => o.columnSize >= t.value), i = _(() => {
      let n = `--fluidgrid-size:${o.columnSize}px;`;
      return o.autoFill && (n += "--fluidgrid-mode:auto-fill;"), o.gap && (n += `gap:${e.gapValue(o.gap)};`), o.padding && (n += `padding:${e.gapValue(o.padding)};`), n;
    });
    return (n, p) => (a(), v("div", {
      ref_key: "el",
      ref: l,
      class: m([n.$style.FluidGrid, u.value && n.$style.oneColumn]),
      style: G(i.value)
    }, [
      h(n.$slots, "default")
    ], 6));
  }
}), qt = "dodo-fluidgrid", Wt = "dodo-fluidgrid-onecolumn", Pt = {
  FluidGrid: qt,
  oneColumn: Wt
}, Gt = {
  $style: Pt
}, xa = /* @__PURE__ */ E(jt, [["__cssModules", Gt]]), Kt = /* @__PURE__ */ V({
  __name: "Form",
  props: {
    gap: {}
  },
  emits: ["submit"],
  setup(d, { emit: o }) {
    const e = o, l = te();
    function t() {
      e("submit");
    }
    return (r, s) => (a(), v("form", {
      class: m([r.$style.form, f(l).gap(r.gap)]),
      onSubmit: oe(t, ["prevent"])
    }, [
      h(r.$slots, "default")
    ], 34));
  }
}), Jt = "dodo-form", Zt = {
  form: Jt
}, Qt = {
  $style: Zt
}, er = /* @__PURE__ */ E(Kt, [["__cssModules", Qt]]), Xt = ["data-itemerror"], Yt = ["for"], xt = /* @__PURE__ */ V({
  __name: "FormItem",
  props: {
    label: {},
    error: {},
    description: {},
    for: {},
    optional: { type: Boolean }
  },
  setup(d) {
    const o = d, e = ne(), l = Se();
    return x(() => {
      if (!e.default)
        throw new Error("FormEntry requires a default slot");
    }), (t, r) => {
      var s;
      return a(), v("div", {
        class: m([t.$style.FormEntry, t.error && t.$style.hasError]),
        "data-itemerror": t.error
      }, [
        t.label ? (a(), v("div", {
          key: 0,
          class: m(t.$style.labelRow)
        }, [
          $("label", {
            class: m(t.$style.label),
            for: o.for
          }, F(t.label), 11, Yt),
          t.optional ? (a(), v("span", {
            key: 0,
            class: m(t.$style.optional)
          }, "Optional", 2)) : M("", !0)
        ], 2)) : M("", !0),
        h(t.$slots, "default", {
          error: t.error,
          entryId: o.for ? o.for : `form-item-${(s = f(l)) == null ? void 0 : s.uid}`
        }),
        t.error ? (a(), v("div", {
          key: 1,
          class: m(t.$style.error)
        }, [
          $("span", null, F(t.error), 1)
        ], 2)) : M("", !0),
        t.description ? (a(), v("div", {
          key: 2,
          class: m(t.$style.description)
        }, F(t.description), 3)) : M("", !0)
      ], 10, Xt);
    };
  }
}), es = "dodo-formitem-formentry", os = "dodo-formitem-label", ts = "dodo-formitem-optional", ss = "dodo-formitem-labelrow", ls = "dodo-formitem-description", ns = "dodo-formitem-haserror", as = "dodo-formitem-error", rs = {
  FormEntry: es,
  label: os,
  optional: ts,
  labelRow: ss,
  description: ls,
  hasError: ns,
  error: as
}, is = {
  $style: rs
}, ds = /* @__PURE__ */ E(xt, [["__cssModules", is]]), cs = /* @__PURE__ */ V({
  __name: "Grid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean }
  },
  setup(d) {
    const o = te();
    return (e, l) => (a(), v("div", {
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
}), us = "dodo-grid-component", ps = "dodo-grid-autofill", ms = {
  component: us,
  autoFill: ps,
  "col-xs": "dodo-grid-col-xs",
  "col-s": "dodo-grid-col-s",
  "col-m": "dodo-grid-col-m",
  "col-l": "dodo-grid-col-l"
}, vs = {
  $style: ms
}, or = /* @__PURE__ */ E(cs, [["__cssModules", vs]]), fs = {
  key: 0,
  class: "dodo-nowrap dodo-fade-secondary"
}, ys = /* @__PURE__ */ V({
  __name: "MenuItem",
  props: {
    active: { type: Boolean },
    emphasize: { type: Boolean },
    separator: { type: Boolean }
  },
  setup(d) {
    return (o, e) => (a(), v(D, null, [
      o.separator ? (a(), v("hr", {
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
            o.$slots["text-secondary"] ? (a(), v("p", fs, [
              h(o.$slots, "text-secondary")
            ])) : M("", !0)
          ]),
          _: 3
        }),
        h(o.$slots, "after")
      ], 16)
    ], 64));
  }
}), $s = "dodo-menuitem-dropdownitem", hs = "dodo-menuitem-active", gs = "dodo-menuitem-emphasize", bs = "dodo-menuitem-text", ws = "dodo-menuitem-separator", ks = {
  DropdownItem: $s,
  active: hs,
  emphasize: gs,
  text: bs,
  separator: ws
}, Ms = {
  $style: ks
}, Cs = /* @__PURE__ */ E(ys, [["__cssModules", Ms]]), _s = /* @__PURE__ */ V({
  __name: "Modal",
  props: {
    open: { type: Boolean },
    size: {},
    padding: {},
    gap: {}
  },
  emits: ["close"],
  setup(d, { emit: o }) {
    const e = d, l = o, t = w();
    U(() => {
      var n;
      (n = t.value) == null || n.showModal();
    });
    const r = _(() => e.open);
    K(r, (n) => {
      if (n) {
        const p = window.innerWidth - document.body.clientWidth;
        document.body.style.setProperty("padding-right", `${p}px`), document.body.style.setProperty("overflow", "hidden");
      }
    });
    function s(n) {
      const p = t.value;
      n.target === p && u();
    }
    function u() {
      l("close");
    }
    async function i() {
      document.body.style.removeProperty("padding-right"), document.body.style.removeProperty("overflow");
    }
    return (n, p) => (a(), S(re, {
      appear: "",
      "enter-from-class": n.$style.enter,
      "leave-to-class": n.$style.enter,
      onAfterLeave: i
    }, {
      default: b(() => [
        r.value ? (a(), v("dialog", {
          key: 0,
          ref_key: "dialogElem",
          ref: t,
          class: m(n.$style.background),
          onClick: s,
          onCancel: oe(u, ["prevent"])
        }, [
          I(po, {
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
        ], 34)) : M("", !0)
      ]),
      _: 3
    }, 8, ["enter-from-class", "leave-to-class"]));
  }
}), Bs = "dodo-modal-background", Ss = "dodo-modal-enter", Vs = "dodo-modal", zs = "dodo-modal-s", Is = "dodo-modal-l", Es = {
  background: Bs,
  enter: Ss,
  modal: Vs,
  S: zs,
  L: Is
}, Fs = {
  $style: Es
}, tr = /* @__PURE__ */ E(_s, [["__cssModules", Fs]]), As = /* @__PURE__ */ V({
  __name: "NavBarItem",
  props: {
    text: {},
    link: {},
    textSecondary: {},
    icon: {},
    active: { type: Boolean },
    important: { type: Boolean }
  },
  setup(d) {
    const o = d, e = ne(), l = w(), t = w(!1);
    x(() => {
      t.value = !!l.value.closest("[data-mobile-nav]");
    });
    const r = de(Ee), s = _(() => r == null ? void 0 : r.collapsed.value), u = _(() => r == null ? void 0 : r.renderMobile.value), i = _(() => u.value || !s.value);
    async function n(p) {
      r && !e.submenu && (r.mobileToggle.value = !1), o.link && await o.link.navigate();
    }
    return (p, y) => (a(), S(f(fe), {
      text: p.text,
      disabled: i.value,
      side: "right"
    }, {
      default: b(() => [
        (a(), S(ue(p.$slots.submenu ? f(Re) : "div"), null, {
          dropdown: b(() => [
            h(p.$slots, "submenu")
          ]),
          default: b(() => {
            var C;
            return [
              $("div", {
                ref_key: "el",
                ref: l,
                class: m([
                  p.$style.NavBarItem,
                  (p.active || ((C = p.link) == null ? void 0 : C.isActive.value)) && p.$style.active,
                  p.important && p.$style.important,
                  s.value && p.$style.collapsed
                ]),
                onClick: n
              }, [
                p.icon || p.$slots.icon ? (a(), v("div", {
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
                  p.textSecondary ? (a(), v("p", {
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
}), Ts = "dodo-navbaritem", Ns = "dodo-navbaritem-active", Rs = "dodo-navbaritem-important", Ds = "dodo-navbaritem-textwrap", Ls = "dodo-navbaritem-icon", Hs = "dodo-navbaritem-text", Os = "dodo-navbaritem-secondary", Us = {
  NavBarItem: Ts,
  active: Ns,
  important: Rs,
  textwrap: Ds,
  icon: Ls,
  text: Hs,
  secondary: Os
}, js = {
  $style: Us
}, Ce = /* @__PURE__ */ E(As, [["__cssModules", js]]), qs = { style: { "margin-right": "8px" } }, Ws = /* @__PURE__ */ V({
  __name: "NavBar",
  props: {
    mobile: { type: Boolean }
  },
  setup(d) {
    const o = d, { screenLarge: e } = Fe(), l = vo("NavBar-collapse", null), t = w(!1), r = _(() => o.mobile || !e.value);
    ce(Ee, { collapsed: l, renderMobile: r, mobileToggle: t });
    function s() {
      r.value && (t.value = !1);
    }
    return (u, i) => (a(), v("div", {
      class: m([
        u.$style.root,
        f(l) && u.$style.collapsed,
        t.value && u.$style.mobileToggle,
        r.value && u.$style.mobileMenu
      ]),
      onClick: oe(s, ["self"])
    }, [
      t.value ? (a(), v("div", {
        key: 0,
        class: m(u.$style.backdrop),
        onClick: i[0] || (i[0] = (n) => t.value = !1)
      }, null, 2)) : M("", !0),
      $("div", {
        class: m(u.$style.NavBar)
      }, [
        u.$slots["navbar-header"] ? (a(), v("div", {
          key: 0,
          class: m(u.$style.header)
        }, [
          $("div", null, [
            h(u.$slots, "navbar-header")
          ]),
          $("div", qs, [
            r.value ? (a(), S(f(X), {
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
        u.$slots["navbar-footer"] ? (a(), v("div", {
          key: 1,
          class: m(u.$style.footer)
        }, [
          h(u.$slots, "navbar-footer"),
          r.value ? M("", !0) : (a(), S(Ce, {
            key: 0,
            text: f(l) ? "Expand" : "Collapse",
            icon: f(l) ? "last_page" : "first_page",
            onClick: i[2] || (i[2] = (n) => l.value = !f(l))
          }, null, 8, ["text", "icon"]))
        ], 2)) : M("", !0)
      ], 2),
      $("div", {
        class: m(u.$style.wrapMobile)
      }, [
        u.$slots.main ? (a(), S(f(W), {
          key: 0,
          class: m(u.$style.main)
        }, {
          default: b(() => [
            h(u.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : M("", !0),
        r.value ? (a(), v("div", {
          key: 1,
          class: m(u.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          h(u.$slots, "default", { inMobileBar: !0 }),
          h(u.$slots, "navbar-footer", { inMobileBar: !0 }),
          I(Ce, {
            text: "Menu",
            icon: "menu",
            onClick: i[3] || (i[3] = (n) => t.value = !t.value)
          })
        ], 2)) : M("", !0)
      ], 2)
    ], 2));
  }
}), Ps = "dodo-navbar-root", Gs = "dodo-navbar", Ks = "dodo-navbar-collapsed", Js = "dodo-navbar-header", Zs = "dodo-navbar-middle", Qs = "dodo-navbar-footer", Xs = "dodo-navbar-wrapmobile", Ys = "dodo-navbar-main", xs = "dodo-navbar-backdrop", el = "dodo-navbar-mobilemenu", ol = "dodo-navbar-mobiletoggle", tl = "dodo-navbar-mobilenav", sl = {
  root: Ps,
  NavBar: Gs,
  collapsed: Ks,
  header: Js,
  middle: Zs,
  footer: Qs,
  wrapMobile: Xs,
  main: Ys,
  backdrop: xs,
  mobileMenu: el,
  mobileToggle: ol,
  mobileNav: tl
}, ll = {
  $style: sl
}, sr = /* @__PURE__ */ E(Ws, [["__cssModules", ll]]), De = $o(() => {
  const d = w([]), o = w(""), e = w([]), l = w(!1);
  return K(d, () => {
    l.value = !1;
  }), { headerText: o, activeItems: d, expandedMenu: e, mobileToggle: l };
}), nl = (d) => {
  const o = De.injectOptional(), e = Se(), l = (n) => n ? [n.uid, ...l(n.parent)] : [], t = (n) => {
    !n || !o || (o.activeItems.value = l(e), o.headerText.value = d.text.value);
  }, r = _(() => o == null ? void 0 : o.headerText.value), s = () => {
    !e || !o || (o.expandedMenu.value.includes(e.uid) ? o.expandedMenu.value = [] : o.expandedMenu.value = l(e));
  }, u = _(() => !e || !o ? !1 : o.activeItems.value.includes(e.uid)), i = _(() => !e || !o ? !1 : o.expandedMenu.value.length ? o.expandedMenu.value.includes(e.uid) : o.activeItems.value.includes(e.uid));
  return K(d.active, () => t(d.active.value), { immediate: !0 }), ee(() => t(!1)), U(() => {
    r.value && (document.title = r.value);
  }), { showAsActive: u, isExpanded: i, toggleExpand: s, headerText: r };
}, al = /* @__PURE__ */ V({
  __name: "NavBarNew",
  setup(d) {
    const { headerText: o, mobileToggle: e } = De.createAndProvide(), { screenLarge: l } = Fe(), t = _(() => !l.value);
    function r() {
      e.value = !1;
    }
    return (s, u) => (a(), v("div", {
      class: m([s.$style.root, f(e) && s.$style.mobileToggle, t.value && s.$style.mobileMenu]),
      onClick: oe(r, ["self"])
    }, [
      f(e) ? (a(), v("div", {
        key: 0,
        class: m(s.$style.backdrop),
        onClick: u[0] || (u[0] = (i) => e.value = !1)
      }, null, 2)) : M("", !0),
      $("div", {
        class: m(s.$style.NavBar)
      }, [
        $("div", {
          class: m(s.$style.middle)
        }, [
          h(s.$slots, "default")
        ], 2),
        s.$slots["navbar-footer"] ? (a(), v("div", {
          key: 0,
          class: m(s.$style.footer)
        }, [
          h(s.$slots, "navbar-footer")
        ], 2)) : M("", !0)
      ], 2),
      $("div", {
        class: m(s.$style.wrapMobile)
      }, [
        t.value ? (a(), v("div", {
          key: 0,
          class: m(s.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          $("h5", null, F(f(o)), 1),
          I(f(fe), { text: "Toggle menu" }, {
            default: b(() => [
              $("div", {
                class: m(s.$style.menuButton)
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
        s.$slots.main ? (a(), S(f(W), {
          key: 1,
          class: m(s.$style.main)
        }, {
          default: b(() => [
            h(s.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : M("", !0)
      ], 2)
    ], 2));
  }
}), rl = "dodo-navbarnew-root", il = "dodo-navbarnew-navbar", dl = "dodo-navbarnew-middle", cl = "dodo-navbarnew-footer", ul = "dodo-navbarnew-wrapmobile", pl = "dodo-navbarnew-main", ml = "dodo-navbarnew-backdrop", vl = "dodo-navbarnew-menubutton", fl = "dodo-navbarnew-mobilemenu", yl = "dodo-navbarnew-mobiletoggle", $l = "dodo-navbarnew-mobilenav", hl = {
  root: rl,
  NavBar: il,
  middle: dl,
  footer: cl,
  wrapMobile: ul,
  main: pl,
  backdrop: ml,
  menuButton: vl,
  mobileMenu: fl,
  mobileToggle: yl,
  mobileNav: $l
}, gl = {
  $style: hl
}, lr = /* @__PURE__ */ E(al, [["__cssModules", gl]]), bl = ["href"], wl = { key: 0 }, kl = /* @__PURE__ */ V({
  __name: "NavItem",
  props: {
    link: {},
    text: {},
    textSecondary: {},
    tooltipText: {},
    icon: {},
    important: { type: Boolean }
  },
  setup(d) {
    const o = d, e = _(() => o.link ? f(o.link.isActive) : !1), l = _(() => o.text), { isExpanded: t, showAsActive: r, toggleExpand: s } = nl({ text: l, active: e }), u = ne();
    async function i(n) {
      u.submenu && s(), o.link && (await o.link.navigate(), n.preventDefault());
    }
    return (n, p) => (a(), v("div", {
      class: m([n.$style.el])
    }, [
      I(f(fe), {
        text: n.tooltipText,
        side: "right"
      }, {
        default: b(() => {
          var y;
          return [
            $("a", {
              class: m([n.$style.link, f(r) && n.$style.active, n.important && n.$style.important]),
              href: f((y = n.link) == null ? void 0 : y.href),
              onClick: i
            }, [
              $("div", {
                class: m(n.$style.icon)
              }, [
                h(n.$slots, "icon", {}, () => [
                  n.icon ? (a(), S(f(O), {
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
                }, F(l.value), 3),
                n.textSecondary ? (a(), v("p", {
                  key: 0,
                  class: m([n.$style.secondary, "dodo-nowrap"])
                }, F(n.textSecondary), 3)) : M("", !0)
              ], 2),
              f(u).submenu ? (a(), v("div", wl, [
                I(f(O), {
                  name: f(t) ? "keyboard_arrow_up" : "keyboard_arrow_down",
                  size: "s",
                  style: { margin: "0 -0.25em" }
                }, null, 8, ["name"])
              ])) : M("", !0)
            ], 10, bl)
          ];
        }),
        _: 3
      }, 8, ["text"]),
      n.$slots.submenu ? (a(), v("div", {
        key: 0,
        class: m([n.$style.submenu, f(t) && n.$style.expanded])
      }, [
        h(n.$slots, "submenu")
      ], 2)) : M("", !0)
    ], 2));
  }
}), Ml = "dodo-navitem-el", Cl = "dodo-navitem-link", _l = "dodo-navitem-submenu", Bl = "dodo-navitem-expanded", Sl = "dodo-navitem-active", Vl = "dodo-navitem-important", zl = "dodo-navitem-textwrap", Il = "dodo-navitem-icon", El = "dodo-navitem-text", Fl = "dodo-navitem-secondary", Al = {
  el: Ml,
  link: Cl,
  submenu: _l,
  expanded: Bl,
  active: Sl,
  important: Vl,
  textwrap: zl,
  icon: Il,
  text: El,
  secondary: Fl
}, Tl = {
  $style: Al
}, nr = /* @__PURE__ */ E(kl, [["__cssModules", Tl]]), Nl = /* @__PURE__ */ V({
  __name: "Row",
  props: {
    gap: {},
    padding: {},
    justify: {},
    align: {},
    wrap: { type: Boolean },
    grow: { type: Boolean }
  },
  setup(d) {
    const o = te();
    return (e, l) => (a(), v("div", {
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
}), Rl = "dodo-row-el", Dl = {
  el: Rl
}, Ll = {
  $style: Dl
}, le = /* @__PURE__ */ E(Nl, [["__cssModules", Ll]]), Hl = /* @__PURE__ */ V({
  __name: "ScrollContainer",
  setup(d) {
    const o = _(() => "");
    return (e, l) => (a(), v("div", {
      class: m([e.$style.ScrollContainer]),
      style: G(o.value)
    }, [
      h(e.$slots, "default")
    ], 6));
  }
}), Ol = "dodo-scrollcontainer", Ul = {
  ScrollContainer: Ol
}, jl = {
  $style: Ul
}, ql = /* @__PURE__ */ E(Hl, [["__cssModules", jl]]), Wl = {
  key: 0,
  class: "dodo-nowrap"
}, Pl = {
  key: 1,
  class: "dodo-nowrap dodo-fade-secondary"
}, Gl = ["disabled"], Kl = 12, Jl = /* @__PURE__ */ V({
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
  setup(d, { emit: o }) {
    const e = d, l = o, t = _(() => (e.multiple ? [e.modelValue].flat() : [e.modelValue]).filter(N)), r = w(!1), s = w(""), u = w(), i = w(), n = w(), p = w();
    U(() => {
      r.value && u.value && (s.value = "", u.value.focus());
    }), U(() => {
      s.value && i.value && i.value.$el.focus();
    }), U(() => {
      r.value && setTimeout(() => {
        var g;
        const k = (g = n.value) == null ? void 0 : g.$el, c = k == null ? void 0 : k.querySelector("[data-selectactive]");
        c == null || c.scrollIntoView({ block: "center" });
      }, 0);
    });
    const y = w(!1), C = _(() => e.options.length > Kl), A = _(() => C.value && !y.value ? 6 : e.options.length), z = _(() => s.value || e.options.length >= 10), L = _(() => {
      const k = s.value.toLowerCase(), c = e.options.filter((R) => `${R.value}|${R.label}`.toLowerCase().includes(k));
      if (!e.multiple) return c;
      const g = c.filter((R) => t.value.find((q) => j(R, q))), B = c.filter((R) => !g.includes(R));
      return g.concat(B);
    }), J = _(() => e.placeholder ? e.placeholder : e.multiple ? "Select one or more" : "Select one");
    function N(k) {
      return e.options.find((c) => j(c, k));
    }
    function H(k) {
      let c = k.value;
      e.multiple ? t.value.includes(c) ? c = t.value.filter((g) => !j(k, g)) : c = t.value.concat(k.value) : r.value = !1, l("update:modelValue", c);
    }
    function j(k, c) {
      return k.value === c;
    }
    function Z(k) {
      return k.label || `${k.value}`;
    }
    function Y(k) {
      return t.value.some((c) => j(k, c));
    }
    function Q(k) {
      var B, R;
      const c = (B = p.value) == null ? void 0 : B.$el.contains(k.target), g = (R = n.value) == null ? void 0 : R.$el.contains(k.target);
      r.value = c || g;
    }
    return x(() => {
      document.addEventListener("focusin", Q);
    }), ee(() => {
      document.removeEventListener("focusin", Q);
    }), (k, c) => k.variant === "buttons" ? (a(), S(f(le), {
      key: 0,
      gap: "xs",
      wrap: ""
    }, {
      default: b(() => [
        (a(!0), v(D, null, P(k.options.slice(0, A.value), (g, B) => (a(), S(f(X), {
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
            k.multiple && Y(g) ? (a(), S(f(O), {
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
        C.value ? (a(), v(D, { key: 0 }, [
          y.value ? (a(), S(f(X), {
            key: 0,
            small: k.size === "s",
            variant: "text",
            rounded: "",
            onClick: c[0] || (c[0] = (g) => y.value = !y.value)
          }, {
            default: b(() => [
              T(" Less "),
              I(f(O), {
                name: "keyboard_arrow_up",
                size: "s",
                style: { margin: "-2px" }
              })
            ]),
            _: 1
          }, 8, ["small"])) : (a(), S(f(X), {
            key: 1,
            small: k.size === "s",
            variant: "text",
            rounded: "",
            onClick: c[1] || (c[1] = (g) => y.value = !y.value)
          }, {
            default: b(() => [
              T(F(k.options.length - A.value) + " more ", 1),
              I(f(O), {
                name: "keyboard_arrow_down",
                size: "s",
                style: { margin: "-2px" }
              })
            ]),
            _: 1
          }, 8, ["small"]))
        ], 64)) : M("", !0)
      ]),
      _: 3
    })) : (a(), S(f(Re), {
      key: 1,
      modelValue: r.value,
      "onUpdate:modelValue": c[5] || (c[5] = (g) => r.value = g),
      disabled: k.disabled
    }, {
      dropdown: b(() => [
        I(f(W), {
          ref_key: "dropdownEl",
          ref: n,
          style: { "min-height": "0" },
          gap: "0",
          onMousedown: c[4] || (c[4] = oe(() => {
          }, ["stop", "prevent"]))
        }, {
          default: b(() => [
            se(I(f(le), {
              padding: "s",
              class: m(k.$style.searchbox)
            }, {
              default: b(() => [
                I(f(_a), {
                  ref_key: "searchEl",
                  ref: i,
                  modelValue: s.value,
                  "onUpdate:modelValue": c[3] || (c[3] = (g) => s.value = g),
                  type: "search",
                  placeholder: "Search",
                  tabindex: "0",
                  style: { "flex-grow": "1" }
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["class"]), [
              [qe, z.value]
            ]),
            I(f(ql), null, {
              default: b(() => [
                (a(!0), v(D, null, P(L.value, (g, B) => (a(), S(f(Cs), {
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
        I(Ut, {
          ref_key: "fieldEl",
          ref: p,
          button: "",
          disabled: k.disabled
        }, {
          after: b(() => [
            I(f(O), { name: "arrow_drop_down" })
          ]),
          default: b(() => [
            t.value.length ? (a(), v("p", Wl, [
              (a(!0), v(D, null, P(t.value, (g, B) => (a(), v(D, null, [
                B ? (a(), v(D, { key: 0 }, [
                  T(", ")
                ], 64)) : M("", !0),
                N(g) ? h(k.$slots, "default", {
                  key: 1,
                  index: k.options.indexOf(N(g)),
                  option: N(g)
                }, () => [
                  T(F(Z(N(g))), 1)
                ]) : (a(), v(D, { key: 2 }, [
                  T(F(g), 1)
                ], 64))
              ], 64))), 256))
            ])) : (a(), v("p", Pl, F(J.value), 1)),
            se($("input", {
              ref_key: "hiddenInput",
              ref: u,
              "onUpdate:modelValue": c[2] || (c[2] = (g) => s.value = g),
              style: { position: "fixed", "pointer-events": "none", opacity: "0" },
              disabled: k.disabled
            }, null, 8, Gl), [
              [Ve, s.value]
            ])
          ]),
          _: 3
        }, 8, ["disabled"])
      ]),
      _: 3
    }, 8, ["modelValue", "disabled"]));
  }
}), Zl = "dodo-selectold-searchbox", Ql = {
  searchbox: Zl
}, Xl = {
  $style: Ql
}, ar = /* @__PURE__ */ E(Jl, [["__cssModules", Xl]]), Yl = ["id", "disabled"], xl = ["value"], en = /* @__PURE__ */ V({
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
  setup(d, { emit: o }) {
    const e = d, l = o, t = _({
      get: () => e.modelValue,
      set: (r) => l("update:modelValue", r)
    });
    return (r, s) => (a(), S(ds, {
      class: m(r.error && r.$style.error),
      label: r.label,
      error: r.error,
      description: r.description,
      optional: r.optional,
      for: r.id ?? void 0
    }, {
      default: b(({ entryId: u }) => [
        $("div", {
          class: m(r.$style.select)
        }, [
          se($("select", {
            id: r.id ?? u,
            "onUpdate:modelValue": s[0] || (s[0] = (i) => t.value = i),
            disabled: r.disabled,
            class: m(["dodo-formfield"])
          }, [
            (a(!0), v(D, null, P(r.options, (i) => (a(), v("option", {
              key: i.label,
              value: i.value
            }, F(i.label), 9, xl))), 128))
          ], 8, Yl), [
            [We, t.value]
          ]),
          $("span", {
            class: m(r.$style.icon)
          }, [
            I(O, { name: "unfold_more" })
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["class", "label", "error", "description", "optional", "for"]));
  }
}), on = "dodo-simpleselect-select", tn = "dodo-simpleselect-icon", sn = "dodo-simpleselect-error", ln = {
  select: on,
  icon: tn,
  error: sn
}, nn = {
  $style: ln
}, rr = /* @__PURE__ */ E(en, [["__cssModules", nn]]), an = {
  key: 0,
  viewBox: "0 0 48 48"
}, rn = /* @__PURE__ */ pe('<clipPath id="g"><path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path></clipPath><g clip-path="url(#g)"><path fill="#FBBC05" d="M0 37V11l17 13z"></path><path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path><path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path><path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path></g>', 2), dn = [
  rn
], cn = {
  key: 1,
  viewBox: "0 0 248 204"
}, un = /* @__PURE__ */ $("path", {
  id: "white_background",
  fill: "#1D9BF0",
  d: "M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
}, null, -1), pn = [
  un
], mn = {
  key: 2,
  viewBox: "60 60 140 140"
}, vn = /* @__PURE__ */ pe('<path fill="#E01E5A" d="M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"></path><path fill="#E01E5A" d="M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9V151.2z"></path><path fill="#36C5F0" d="M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"></path><path fill="#36C5F0" d="M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9H118.8z"></path><path fill="#2EB67D" d="M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"></path><path fill="#2EB67D" d="M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9V118.8z"></path><path fill="#ECB22E" d="M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"></path><path fill="#ECB22E" d="M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9H151.2z"></path>', 8), fn = [
  vn
], yn = {
  key: 3,
  viewBox: "2 2 46 46"
}, $n = /* @__PURE__ */ $("path", { d: "M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" }, null, -1), hn = [
  $n
], gn = {
  key: 4,
  viewBox: "0 0 14222 14222"
}, bn = /* @__PURE__ */ $("circle", {
  cx: "7111",
  cy: "7112",
  r: "7111",
  fill: "#1977f3"
}, null, -1), wn = /* @__PURE__ */ $("path", {
  d: "M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z",
  fill: "#fff"
}, null, -1), kn = [
  bn,
  wn
], Mn = {
  key: 5,
  viewBox: "0 0 24 24"
}, Cn = /* @__PURE__ */ $("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }, null, -1), _n = [
  Cn
], Bn = {
  key: 6,
  viewBox: "6 6 36 36"
}, Sn = /* @__PURE__ */ $("path", {
  fill: "#0288D1",
  d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
}, null, -1), Vn = /* @__PURE__ */ $("path", {
  fill: "#FFF",
  d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
}, null, -1), zn = [
  Sn,
  Vn
], In = {
  key: 7,
  viewBox: "10 10 160 160"
}, En = /* @__PURE__ */ pe('<defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"></stop><stop offset="1" stop-color="#23b33a"></stop></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531"></feGaussianBlur></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"></path><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"></path><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"></path><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"></path><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"></path>', 6), Fn = [
  En
], An = /* @__PURE__ */ V({
  __name: "SocialIcon",
  props: {
    name: {},
    white: { type: Boolean },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(d) {
    return (o, e) => (a(), v("span", {
      class: m([o.$style.SocialIcon, o.small && o.$style.small, o.large && o.$style.large, o.white && o.$style.white])
    }, [
      o.name === "google" ? (a(), v("svg", an, dn)) : o.name === "twitter" ? (a(), v("svg", cn, pn)) : o.name === "slack" ? (a(), v("svg", mn, fn)) : o.white && o.name === "facebook" ? (a(), v("svg", yn, hn)) : o.name === "facebook" ? (a(), v("svg", gn, kn)) : o.white && o.name === "linkedin" ? (a(), v("svg", Mn, _n)) : o.name === "linkedin" ? (a(), v("svg", Bn, zn)) : o.name === "whatsapp" ? (a(), v("svg", In, Fn)) : M("", !0)
    ], 2));
  }
}), Tn = "dodo-socialicon", Nn = "dodo-socialicon-white", Rn = "dodo-socialicon-small", Dn = "dodo-socialicon-large", Ln = {
  SocialIcon: Tn,
  white: Nn,
  small: Rn,
  large: Dn
}, Hn = {
  $style: Ln
}, ir = /* @__PURE__ */ E(An, [["__cssModules", Hn]]), On = /* @__PURE__ */ $("path", {
  stroke: "currentColor",
  fill: "none",
  d: "M 9 1 A 8 8 0 0 1 17 9",
  "stroke-width": "2"
}, null, -1), Un = /* @__PURE__ */ $("path", {
  stroke: "currentColor",
  opacity: "0.33",
  fill: "none",
  d: "M 17 9 A 8 8 0 1 1 9 1",
  "stroke-width": "2"
}, null, -1), jn = [
  On,
  Un
], qn = /* @__PURE__ */ V({
  __name: "Spinner",
  props: {
    color: { default: void 0 },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(d) {
    const o = d, e = _(() => {
      let l = "";
      return o.color === "inherit" ? l += "color:inherit;" : o.color && (l += `color:var(--dodo-color-${o.color});`), l;
    });
    return (l, t) => (a(), v("div", {
      class: m([l.$style.Spinner, l.small && l.$style.small, l.large && l.$style.large])
    }, [
      (a(), v("svg", {
        style: G(e.value),
        viewBox: "0 0 18 18"
      }, jn, 4))
    ], 2));
  }
}), Wn = "dodo-spinner", Pn = "dodo-spinner-small", Gn = "dodo-spinner-large", Kn = {
  Spinner: Wn,
  small: Pn,
  large: Gn
}, Jn = {
  $style: Kn
}, Zn = /* @__PURE__ */ E(qn, [["__cssModules", Jn]]), Qn = ["onClick"], Xn = {
  key: 1,
  class: "dodo-color-background"
}, Yn = { style: {} }, xn = { key: 0 }, ea = {
  key: 1,
  class: "dodo-fade-secondary"
}, oa = {
  key: 0,
  class: "dodo-fade-secondary"
}, ta = /* @__PURE__ */ $("br", null, null, -1), sa = /* @__PURE__ */ V({
  __name: "Stepper",
  props: {
    stepIndex: {},
    steps: {},
    submit: { type: Function },
    completed: {}
  },
  emits: ["update:stepIndex", "submit"],
  setup(d, { emit: o }) {
    const e = d, l = o, t = w(0), r = _(() => e.steps[t.value]);
    function s() {
      t.value--;
    }
    async function u() {
      const n = r.value;
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
    return U(() => {
      e.stepIndex != null && (t.value = e.stepIndex);
    }), K(t, () => {
      l("update:stepIndex", t.value);
    }), (n, p) => (a(), S(f(W), {
      class: m(n.$style.stepper)
    }, {
      default: b(() => [
        (a(!0), v(D, null, P(n.steps, (y, C) => (a(), S(f(le), {
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
                  t.value > C ? (a(), S(f(O), {
                    key: 0,
                    name: "check"
                  })) : (a(), v("h3", Xn, F(C + 1), 1))
                ], 10, Qn),
                C < n.steps.length - 1 ? (a(), v("div", {
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
                    $("h3", Yn, [
                      y === r.value ? (a(), v("span", xn, F(y.name), 1)) : (a(), v("span", ea, F(y.name), 1))
                    ]),
                    y.hint ? (a(), v("p", oa, F(y.hint), 1)) : M("", !0)
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                y === r.value ? (a(), S(f(W), { key: 0 }, {
                  default: b(() => [
                    h(n.$slots, y.slot),
                    I(f(le), null, {
                      default: b(() => [
                        t.value > 0 ? (a(), S(f(X), {
                          key: 0,
                          variant: "text",
                          onClick: s
                        }, {
                          default: b(() => [
                            T(" Back ")
                          ]),
                          _: 1
                        })) : M("", !0),
                        t.value < n.steps.length - 1 ? (a(), S(f(X), {
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
                        }, 1032, ["disabled"])) : (a(), S(f(X), {
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
                ta
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
}), la = "dodo-stepper-line", na = "dodo-stepper-circle", aa = "dodo-stepper-inactivestep", ra = {
  line: la,
  circle: na,
  inactiveStep: aa
}, ia = {
  $style: ra
}, dr = /* @__PURE__ */ E(sa, [["__cssModules", ia]]), da = ["onClick"], ca = /* @__PURE__ */ $("hr", null, null, -1), ua = /* @__PURE__ */ V({
  __name: "Tabs",
  props: {
    tabs: {},
    tabIndex: {}
  },
  emits: ["update:tabIndex"],
  setup(d, { emit: o }) {
    const e = d, l = o, t = w(""), r = _(() => e.tabs.find((u) => s(u) === t.value));
    U(() => {
      !r.value && e.tabs.length && (t.value = s(e.tabs[0]));
    }), K(
      () => e.tabIndex,
      () => {
        e.tabIndex != null && e.tabs[e.tabIndex] && (t.value = s(e.tabs[e.tabIndex]));
      },
      { immediate: !0 }
    ), K(
      () => r.value,
      () => {
        r.value && l("update:tabIndex", e.tabs.indexOf(r.value));
      },
      { immediate: !0 }
    );
    function s(u) {
      return u.slot ?? u.name;
    }
    return (u, i) => (a(), S(f(W), {
      gap: "m",
      style: { "min-width": "0" }
    }, {
      default: b(() => [
        I(f(W), { gap: "0" }, {
          default: b(() => [
            $("div", {
              class: m(u.$style.bar)
            }, [
              (a(!0), v(D, null, P(u.tabs, (n, p) => (a(), v("div", {
                key: s(n),
                class: m([u.$style.tab, t.value === s(n) && u.$style.active, n.disabled && u.$style.disabled]),
                onClick: (y) => t.value = s(n)
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
              ], 10, da))), 128))
            ], 2),
            ca
          ]),
          _: 3
        }),
        r.value ? h(u.$slots, r.value.slot ?? "default", {
          key: 0,
          tab: r.value
        }) : M("", !0)
      ]),
      _: 3
    }));
  }
}), pa = "dodo-tabs-bar", ma = "dodo-tabs-tab", va = "dodo-tabs-tabname", fa = "dodo-tabs-active", ya = "dodo-tabs-disabled", $a = {
  bar: pa,
  tab: ma,
  tabName: va,
  active: fa,
  disabled: ya
}, ha = {
  $style: $a
}, cr = /* @__PURE__ */ E(ua, [["__cssModules", ha]]), ga = ["placeholder", "disabled", "maxlength", "type", "name", "autofocus", "autocomplete"], ba = /* @__PURE__ */ V({
  __name: "TextInput",
  props: /* @__PURE__ */ ze({
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
  setup(d) {
    const o = Ie(d, "modelValue");
    return (e, l) => se((a(), v("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (t) => o.value = t),
      class: m(["dodo-formfield", e.error && e.$style.error, e.$style.input]),
      placeholder: e.placeholder,
      disabled: e.disabled,
      maxlength: e.maxlength,
      type: e.type || "text",
      name: e.name,
      autofocus: e.autofocus,
      autocomplete: e.autocomplete
    }, null, 10, ga)), [
      [Pe, o.value]
    ]);
  }
}), wa = "dodo-textinput-input", ka = "dodo-textinput-error", Ma = {
  input: wa,
  error: ka
}, Ca = {
  $style: Ma
}, _a = /* @__PURE__ */ E(ba, [["__cssModules", Ca]]), Ba = ["placeholder", "disabled", "name", "autofocus", "rows", "autocomplete"], Sa = /* @__PURE__ */ V({
  __name: "Textarea",
  props: /* @__PURE__ */ ze({
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
  setup(d) {
    const o = d, e = Ie(d, "modelValue"), l = w(null), t = w(o.minRows);
    function r() {
      const i = o.maxRows && o.maxRows > 0 ? o.maxRows : 12, n = o.minRows && o.minRows > 0 ? o.minRows : 4, p = l.value;
      if (!p) return n;
      let y = n;
      for (p.style.overflow = "hidden", p.setAttribute("rows", `${y}`); p.scrollHeight > p.offsetHeight && y < i; )
        p.setAttribute("rows", `${++y}`);
      return p.style.overflow = "", y;
    }
    function s() {
      t.value = r(), u.value || window.requestAnimationFrame(s);
    }
    const u = w(!1);
    return x(s), ee(() => {
      u.value = !0;
    }), (i, n) => se((a(), v("textarea", {
      ref_key: "textarea",
      ref: l,
      "onUpdate:modelValue": n[0] || (n[0] = (p) => e.value = p),
      class: m(["dodo-formfield", i.error && i.$style.error, i.$style.textarea]),
      placeholder: i.placeholder,
      disabled: i.disabled,
      name: i.name,
      autofocus: i.autofocus,
      rows: t.value,
      autocomplete: i.autocomplete,
      resize: "false"
    }, null, 10, Ba)), [
      [Ve, e.value]
    ]);
  }
}), Va = "dodo-textarea", za = "dodo-textarea-error", Ia = {
  textarea: Va,
  error: za
}, Ea = {
  $style: Ia
}, ur = /* @__PURE__ */ E(Sa, [["__cssModules", Ea]]), Fa = /* @__PURE__ */ V({
  __name: "Tooltip",
  props: {
    text: {},
    disabled: { type: Boolean },
    side: {}
  },
  setup(d) {
    const o = d, e = w(!1), l = w(""), t = w(), r = w(), s = ne(), u = _(() => o.disabled || !(o.text || s["tooltip-text"]));
    ee(n);
    async function i() {
      if (e.value || u.value) return;
      e.value = !0, await Be();
      const p = t.value.getBoundingClientRect(), y = r.value.getBoundingClientRect();
      o.side, p.bottom + y.height < window.innerHeight;
      let C = (p.right + p.left - y.width) / 2, A = p.bottom;
      o.side === "right" ? (C = p.right, A = (p.bottom + p.top - y.height) / 2) : o.side === "top" ? (C = (p.left + p.right - y.width) / 2, A = p.top - y.height) : o.side === "left" && (C = p.left - y.width, A = (p.bottom + p.top - y.height) / 2), A = Math.round(Math.max(Math.min(A, window.innerHeight - y.height), 0)), C = Math.round(Math.max(Math.min(C, window.innerWidth - y.width), 0)), l.value = `left:${C}px;top:${A}px`;
    }
    function n() {
      e.value = !1;
    }
    return (p, y) => (a(), v("div", {
      ref_key: "trigger",
      ref: t,
      class: m(p.$style.trigger),
      onMouseover: i,
      onMouseleave: n
    }, [
      h(p.$slots, "default"),
      e.value ? (a(), S(_e, {
        key: 0,
        to: "body"
      }, [
        $("div", {
          ref_key: "tooltip",
          ref: r,
          class: m(p.$style.Tooltip),
          style: G(l.value)
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
}), Aa = "dodo-tooltip", Ta = "dodo-tooltip-content", Na = "dodo-tooltip-text", Ra = "dodo-tooltip-trigger", Da = {
  Tooltip: Aa,
  content: Ta,
  text: Na,
  trigger: Ra
}, La = {
  $style: Da
}, fe = /* @__PURE__ */ E(Fa, [["__cssModules", La]]);
export {
  ja as Animated,
  qa as Avatar,
  X as Button,
  po as Card,
  we as Checkbox,
  Ao as Chip,
  Qa as ChoiceChips,
  W as Column,
  Xa as CrashDialog,
  Ya as Datatable,
  Bt as Dialog,
  Re as Dropdown,
  Ut as FieldOld,
  xa as FluidGrid,
  er as Form,
  ds as FormItem,
  or as Grid,
  O as Icon,
  Cs as MenuItem,
  tr as Modal,
  sr as NavBar,
  Ce as NavBarItem,
  lr as NavBarNew,
  nr as NavItem,
  le as Row,
  ql as ScrollContainer,
  rr as Select,
  ar as SelectOld,
  ir as SocialIcon,
  Zn as Spinner,
  dr as Stepper,
  cr as Tabs,
  _a as TextInput,
  ur as Textarea,
  fe as Tooltip,
  Ja as ValidationError,
  Ga as crashPlugin,
  Ae as crashServiceKey,
  be as darkModeSetting,
  mo as dropdownServiceKey,
  Ee as navBarServiceKey,
  Pa as parseColor,
  yo as useCrashService,
  Wa as useElementSize,
  Ka as useResizeObserver,
  Fe as useScreenSize,
  $o as useServiceFactory,
  vo as useSessionStoredRef,
  te as useTheme,
  Za as useValidation,
  fo as useWebFont
};
