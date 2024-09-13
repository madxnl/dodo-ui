var We = Object.defineProperty;
var Pe = (r, e, o) => e in r ? We(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o;
var he = (r, e, o) => Pe(r, typeof e != "symbol" ? e + "" : e, o);
import { defineComponent as B, openBlock as a, createBlock as V, TransitionGroup as Ge, withCtx as w, renderSlot as $, Transition as re, computed as k, createElementBlock as v, normalizeClass as m, normalizeStyle as P, Fragment as R, createTextVNode as T, toDisplayString as A, createCommentVNode as C, ref as b, watchEffect as L, createElementVNode as h, useAttrs as Ke, mergeProps as ie, unref as f, onMounted as x, onBeforeUnmount as ee, watch as K, inject as de, provide as ce, reactive as $e, withModifiers as oe, createVNode as I, resolveDynamicComponent as ue, renderList as G, Teleport as Be, nextTick as Ve, onUnmounted as Je, useSlots as ne, getCurrentInstance as ze, withDirectives as se, vShow as Ze, vModelText as Ie, vModelSelect as Qe, createStaticVNode as pe, mergeModels as Ee, useModel as Ae, vModelDynamic as Xe } from "vue";
const ge = !1, pr = /* @__PURE__ */ B({
  __name: "Animated",
  props: {
    list: { type: Boolean },
    appear: { type: Boolean }
  },
  setup(r) {
    return (e, o) => e.list ? (a(), V(Ge, {
      key: 0,
      name: "dodo",
      appear: e.appear,
      css: !ge
    }, {
      default: w(() => [
        $(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"])) : (a(), V(re, {
      key: 1,
      appear: e.appear,
      name: "dodo",
      css: !ge,
      mode: "out-in"
    }, {
      default: w(() => [
        $(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"]));
  }
}), Ye = /* @__PURE__ */ B({
  __name: "Avatar",
  props: {
    text: {},
    image: {},
    round: { type: Boolean }
  },
  setup(r) {
    const e = ["info", "warning", "success", "danger"], o = r, s = k(() => {
      let c = o.text.trim();
      const n = /\b\w|[A-Z]/g, d = o.text.match(n);
      return d != null && d.length && (c = d.join("")), c.slice(0, 2).toUpperCase();
    }), t = k(() => {
      const c = e.length, n = i(o.text);
      return `var(--dodo-color-${e[n % c]}`;
    });
    function i(c) {
      let n = 0;
      for (let d = 0; d < c.length; ++d) n = 997 * (n % 1e6) + 11 * c.charCodeAt(d);
      return n;
    }
    return (c, n) => (a(), v("span", {
      class: m([c.$style.Avatar, c.round && c.$style.round]),
      style: P([`--color:${t.value}`, c.image ? `background-image:url(${c.image})` : ""])
    }, [
      c.image ? C("", !0) : (a(), v(R, { key: 0 }, [
        T(A(s.value), 1)
      ], 64))
    ], 6));
  }
}), xe = "dodo-avatar", eo = "dodo-avatar-round", oo = {
  Avatar: xe,
  round: eo
}, E = (r, e) => {
  const o = r.__vccOpts || r;
  for (const [s, t] of e)
    o[s] = t;
  return o;
}, to = {
  $style: oo
}, mr = /* @__PURE__ */ E(Ye, [["__cssModules", to]]), so = (r, e) => {
  const o = r.__vccOpts || r;
  for (const [s, t] of e)
    o[s] = t;
  return o;
}, be = b(), lo = localStorage.getItem("dodotheme"), Fe = b(lo), Te = b();
if (window.matchMedia) {
  const r = window.matchMedia("(prefers-color-scheme: dark)"), e = () => {
    Te.value = r.matches ? "dark" : "light";
  };
  r.addEventListener("change", e), e();
}
const no = k(() => be.value === "auto" ? Te.value : be.value), ao = k(() => Fe.value || no.value || "light");
L(() => {
  localStorage.setItem("dodotheme", Fe.value ?? ""), document.body.setAttribute("data-dodotheme", ao.value ?? "");
});
const we = b(), ro = localStorage.getItem("dodotheme"), Ne = b(ro), De = b();
if (window.matchMedia) {
  const r = window.matchMedia("(prefers-color-scheme: dark)"), e = () => {
    De.value = r.matches ? "dark" : "light";
  };
  r.addEventListener("change", e), e();
}
const io = k(() => we.value === "auto" ? De.value : we.value), co = k(() => Ne.value || io.value || "light");
L(() => {
  localStorage.setItem("dodotheme", Ne.value ?? ""), document.body.setAttribute("data-dodotheme", co.value ?? "");
});
const uo = /* @__PURE__ */ h("path", {
  stroke: "currentColor",
  fill: "none",
  d: "M 9 1 A 8 8 0 0 1 17 9",
  "stroke-width": "2"
}, null, -1), po = /* @__PURE__ */ h("path", {
  stroke: "currentColor",
  opacity: "0.33",
  fill: "none",
  d: "M 17 9 A 8 8 0 1 1 9 1",
  "stroke-width": "2"
}, null, -1), mo = [
  uo,
  po
], vo = /* @__PURE__ */ B({
  __name: "Spinner",
  props: {
    color: { default: void 0 },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(r) {
    const e = r, o = k(() => {
      let s = "";
      return e.color === "inherit" ? s += "color:inherit;" : e.color && (s += `color:var(--dodo-color-${e.color});`), s;
    });
    return (s, t) => (a(), v("div", {
      class: m([s.$style.Spinner, s.small && s.$style.small, s.large && s.$style.large])
    }, [
      (a(), v("svg", {
        style: P(o.value),
        viewBox: "0 0 18 18"
      }, mo, 4))
    ], 2));
  }
}), fo = "dodo-spinner", yo = "dodo-spinner-small", ho = "dodo-spinner-large", $o = {
  Spinner: fo,
  small: yo,
  large: ho
}, go = {
  $style: $o
}, bo = /* @__PURE__ */ so(vo, [["__cssModules", go]]), wo = ["disabled", "type"], ko = /* @__PURE__ */ B({
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
  setup(r) {
    const e = r, o = k(() => {
      let n = "";
      return e.color && (n += `--button-color:var(--dodo-color-${e.color});`), n;
    }), s = Ke(), t = b(!1), i = k(() => e.loading || t.value);
    async function c(n) {
      if (!t.value && typeof s.onClick == "function") {
        const d = s.onClick(n);
        d instanceof Promise && (t.value = !0, await d.finally(() => t.value = !1));
      }
    }
    return (n, d) => (a(), v("button", ie({
      style: o.value,
      disabled: n.disabled,
      type: n.type ?? "button",
      class: [
        n.$style.Button,
        n.$style[e.variant ?? "default"],
        i.value && n.$style.loading,
        n.size && n.$style[n.size],
        n.active && n.$style.active,
        n.square && n.$style.square,
        n.round && n.$style.round
      ]
    }, { ...f(s), onClick: c }), [
      h("div", {
        class: m(n.$style.content)
      }, [
        $(n.$slots, "default")
      ], 2),
      i.value ? (a(), V(f(bo), {
        key: 0,
        small: n.size === "s",
        class: m(n.$style.spinner),
        color: "inherit"
      }, null, 8, ["small", "class"])) : C("", !0)
    ], 16, wo));
  }
}), Mo = "dodo-button", Co = "dodo-button-active", So = "dodo-button-loading", _o = "dodo-button-content", Bo = "dodo-button-solid", Vo = "dodo-button-clear", zo = "dodo-button-link", Io = "dodo-button-spinner", Eo = "dodo-button-s", Ao = "dodo-button-l", Fo = "dodo-button-square", To = "dodo-button-round", No = {
  Button: Mo,
  active: Co,
  loading: So,
  content: _o,
  solid: Bo,
  clear: Vo,
  link: zo,
  spinner: Io,
  s: Eo,
  l: Ao,
  square: Fo,
  round: To
}, Do = {
  $style: No
}, X = /* @__PURE__ */ E(ko, [["__cssModules", Do]]), Ro = /* @__PURE__ */ B({
  __name: "Card",
  props: {
    hoverable: { type: Boolean },
    active: { type: Boolean },
    gap: {},
    padding: {}
  },
  setup(r) {
    const e = te();
    return (o, s) => (a(), v("div", {
      class: m([
        "dodo-card",
        o.hoverable && "dodo-card--hoverable",
        o.active && "dodo-card--active",
        f(e).padding(o.padding),
        f(e).gap(o.gap)
      ])
    }, [
      $(o.$slots, "default")
    ], 2));
  }
}), Re = Symbol("NavBarService"), Lo = Symbol("DropdownService");
function vr(r) {
  const e = b(0), o = b(0), s = new ResizeObserver(t);
  function t() {
    var i, c;
    e.value = ((i = r.value) == null ? void 0 : i.clientWidth) ?? 0, o.value = ((c = r.value) == null ? void 0 : c.clientHeight) ?? 0;
  }
  return x(t), L(() => {
    s.disconnect(), r.value && s.observe(r.value), t();
  }), ee(() => {
    s.disconnect();
  }), { width: e, height: o, observer: s };
}
function Le() {
  const o = b(window.innerWidth), s = b(window.innerHeight), t = k(() => o.value < 600), i = k(() => o.value >= 600 && o.value < 1200), c = k(() => o.value >= 1200);
  function n() {
    o.value = window.innerWidth, s.value = window.innerHeight;
  }
  return x(() => {
    window.addEventListener("resize", n, { passive: !0 });
  }), ee(() => {
    window.removeEventListener("resize", n);
  }), {
    screenSmall: t,
    screenMedium: i,
    screenLarge: c
  };
}
function Ho(r, e) {
  const o = b(e), s = sessionStorage.getItem(r);
  return s && (o.value = JSON.parse(s)), K(o, (t) => {
    sessionStorage.setItem(r, JSON.stringify(t));
  }), o;
}
function Oo(r) {
  const e = b(!1);
  return x(async () => {
    const o = `font-${r.name}-${r.weight}`;
    let s = document.getElementById(o);
    if (s || (s = document.createElement("link"), s.setAttribute("href", r.href), s.setAttribute("rel", "stylesheet"), s.setAttribute("id", o), document.head.appendChild(s)), !document.fonts) {
      e.value = !0;
      return;
    }
    await document.fonts.ready, e.value = document.fonts.check(`${r.weight} 1em ${r.name}`);
  }), { isReady: e };
}
function fr(r) {
  if (!r.match(/^#\w{6}$/)) throw new Error("Invalid hex color");
  return r.match(/(\w\w)/g).map((e) => parseInt(e, 16)).slice(0, 3);
}
const He = Symbol(Oe.name);
function Oe(r) {
  const e = b(null), o = b(0), s = 1e3;
  function t() {
    e.value = null, o.value = Date.now() + s;
  }
  function i() {
    location.reload();
  }
  function c(n) {
    r.onError && r.onError(n) === !1 || !e.value && o.value < Date.now() && (console.error(n), e.value = n);
  }
  return { ignoreError: t, reloadPage: i, currentError: e, handleCrash: c };
}
function yr(r) {
  return (e) => {
    var t;
    const o = Oe(r);
    e.provide(He, o);
    const { errorHandler: s } = e.config;
    e.config.errorHandler = (i, c, n) => {
      if (o.handleCrash(i), s) return s(i, c, n);
    }, (t = r.router) == null || t.onError((i) => {
      o.handleCrash(i);
    }), window.addEventListener("unhandledrejection", (i) => {
      o.handleCrash(i.reason);
    }), window.addEventListener("error", (i) => {
      o.handleCrash(i.error ?? i.message);
    });
  };
}
function Uo() {
  return de(He);
}
function hr(r, e) {
  if (typeof ResizeObserver > "u") return {};
  const o = new ResizeObserver(() => e(r.value));
  return L(() => {
    r.value && o.observe(r.value);
  }), ee(() => {
    o.disconnect();
  }), { observer: o };
}
function jo(r) {
  const e = Symbol("ServiceKey");
  return { createAndProvide: () => {
    const t = r();
    return ce(e, t), t;
  }, injectOptional: () => de(e, void 0) };
}
function te() {
  function r(d) {
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
  function n(d) {
    return d ? "dodo-grow" : "";
  }
  return {
    gapValue: r,
    gap: e,
    padding: o,
    justify: s,
    align: t,
    wrap: i,
    flex: c,
    grow: n,
    theme: ve,
    toggleTheme: Po
  };
}
const ke = b(), qo = localStorage.getItem("dodotheme"), me = b(qo), Ue = b();
if (window.matchMedia) {
  const r = window.matchMedia("(prefers-color-scheme: dark)"), e = () => {
    Ue.value = r.matches ? "dark" : "light";
  };
  r.addEventListener("change", e), e();
}
const Wo = k(() => ke.value === "auto" ? Ue.value : ke.value), ve = k(() => me.value || Wo.value || "light");
function Po() {
  me.value = ve.value === "dark" ? "light" : "dark";
}
L(() => {
  localStorage.setItem("dodotheme", me.value ?? ""), document.body.setAttribute("data-dodotheme", ve.value ?? "");
});
class $r extends Error {
  constructor(o, s) {
    super(s);
    he(this, "name", "ValidationError");
    this.field = o;
  }
}
function gr(r) {
  const e = $e(r), o = $e({});
  K(e, () => i());
  async function s(l) {
    const p = e[l];
    if (p) {
      const y = p.value, S = await n(l, y);
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
  async function n(l, p) {
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
const Go = ["checked"], Ko = /* @__PURE__ */ B({
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
    function i(c) {
      c.target.checked !== o.modelValue && t();
    }
    return (c, n) => (a(), v("span", {
      class: m([c.$style.Checkbox, c.modelValue && c.$style.checked]),
      onClick: oe(t, ["stop"])
    }, [
      I(f(U), {
        name: c.indeterminate ? "indeterminate_check_box" : c.modelValue ? "check_box" : "check_box_outline_blank"
      }, null, 8, ["name"]),
      $(c.$slots, "default"),
      h("input", {
        type: "checkbox",
        checked: c.modelValue,
        onChange: i
      }, null, 40, Go)
    ], 2));
  }
}), Jo = "dodo-checkbox", Zo = "dodo-checkbox-checked", Qo = {
  Checkbox: Jo,
  checked: Zo
}, Xo = {
  $style: Qo
}, Me = /* @__PURE__ */ E(Ko, [["__cssModules", Xo]]), Yo = /* @__PURE__ */ B({
  __name: "Chip",
  props: {
    color: {},
    variant: {}
  },
  setup(r) {
    const e = r, o = k(() => {
      let s = "";
      return e.color && (s += `--chip-color:var(--dodo-color-${e.color});`), s;
    });
    return (s, t) => (a(), V(ue(s.$attrs.onClick ? "button" : "div"), {
      class: m([s.$style.Chip, s.variant === "solid" && s.$style.solid]),
      style: P(o.value)
    }, {
      default: w(() => [
        $(s.$slots, "before"),
        h("div", {
          class: m(s.$style.text)
        }, [
          $(s.$slots, "default")
        ], 2),
        $(s.$slots, "after")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), xo = "dodo-chip", et = "dodo-chip-solid", ot = "dodo-chip-text", tt = {
  Chip: xo,
  solid: et,
  text: ot
}, st = {
  $style: tt
}, lt = /* @__PURE__ */ E(Yo, [["__cssModules", st]]), ae = "Outlined", Ce = "300", nt = /* @__PURE__ */ B({
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
    const e = r, o = b(), s = Oo({
      weight: Ce,
      name: `Material Symbols ${ae}`,
      href: `https://fonts.googleapis.com/css2?family=Material+Symbols+${ae}:wght,FILL@${Ce},0..1`
    });
    return (t, i) => (a(), v("span", {
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
}), at = "dodo-icon", rt = "dodo-icon-fill", it = "dodo-icon-xs", dt = "dodo-icon-s", ct = "dodo-icon-l", ut = "dodo-icon-xl", pt = {
  icon: at,
  fill: rt,
  xs: it,
  s: dt,
  l: ct,
  xl: ut
}, mt = {
  $style: pt
}, U = /* @__PURE__ */ E(nt, [["__cssModules", mt]]), vt = /* @__PURE__ */ B({
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
    const o = r, s = e, t = k(() => o.multiple ? [o.modelValue].flat() : [o.modelValue]);
    function i(d, l) {
      return d.value === l;
    }
    function c(d) {
      return t.value.some((l) => i(d, l));
    }
    function n(d) {
      let l = d.value;
      c(d) && o.multiple ? l = t.value.filter((y) => !i(d, y)) : o.multiple && (l = [...t.value, d.value]), s("update:modelValue", l);
    }
    return (d, l) => (a(), v("div", {
      class: m([d.$style.ChoiceChips, d.multiple && d.$style.multiple])
    }, [
      (a(!0), v(R, null, G(d.options, (p, y) => (a(), V(lt, {
        key: p.label,
        color: c(p) ? "info" : void 0,
        variant: !d.multiple && c(p) ? "solid" : void 0,
        disabled: d.disabled,
        small: d.small,
        rounded: "",
        onClick: (S) => n(p)
      }, {
        default: w(() => [
          d.multiple && c(p) ? (a(), V(U, {
            key: 0,
            name: "check"
          })) : C("", !0),
          $(d.$slots, "default", {
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
}), ft = "dodo-choicechips", yt = {
  ChoiceChips: ft
}, ht = {
  $style: yt
}, br = /* @__PURE__ */ E(vt, [["__cssModules", ht]]), $t = /* @__PURE__ */ B({
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
    const e = te();
    return (o, s) => (a(), V(ue(o.tag ?? "div"), {
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
      default: w(() => [
        $(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), gt = "dodo-column-el", bt = {
  el: gt
}, wt = {
  $style: bt
}, W = /* @__PURE__ */ E($t, [["__cssModules", wt]]), kt = /* @__PURE__ */ h("h3", null, "Something went wrong", -1), Se = `
  An unexpected error occurred and the application may not function correctly until the page is reloaded.
  Any unsaved changes will be lost if you choose to reload the page.
`, wr = /* @__PURE__ */ B({
  __name: "CrashDialog",
  setup(r) {
    const e = Uo(), o = k(() => e.currentError.value), s = b(!1);
    return L(() => {
      s.value = !!o.value;
    }), (t, i) => (a(), V(f(Xt), { active: s.value }, {
      controls: w(() => [
        I(f(X), {
          variant: "clear",
          onClick: f(e).ignoreError
        }, {
          default: w(() => [
            T("Ignore")
          ]),
          _: 1
        }, 8, ["onClick"]),
        I(f(X), {
          variant: "solid",
          color: "info",
          onClick: f(e).reloadPage
        }, {
          default: w(() => [
            T("Reload page")
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: w(() => [
        kt,
        $(t.$slots, "body", {
          error: o.value,
          defaultText: Se
        }, () => [
          h("p", null, A(Se))
        ])
      ]),
      _: 3
    }, 8, ["active"]));
  }
}), Mt = {
  key: 0,
  style: { width: "0" },
  scope: "col"
}, Ct = ["onClick"], St = ["onClick"], _t = { key: 0 }, Bt = /* @__PURE__ */ h("td", { colspan: "999" }, "No results", -1), Vt = [
  Bt
], zt = { colspan: "999" }, It = { key: 0 }, Et = /* @__PURE__ */ B({
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
    const o = r, s = e, t = b(), i = b([]), c = b(!1);
    L(() => {
      t.value = o.sortValue;
    }), L(() => {
      i.value = o.selection ?? [];
    }), K(t, (u) => {
      s("update:sortValue", u);
    }), K(i, (u) => {
      s("update:selection", u);
    });
    const n = k(() => {
      var u;
      return (u = t.value) == null ? void 0 : u.startsWith("-");
    }), d = k(() => o.columns.filter((u) => !u.disabled)), l = k(() => !!o.selection), p = k(() => {
      const u = d.value.find(S);
      return o.sortAsync || !u ? o.rows : o.rows.slice().sort((g, _) => {
        const D = Z(u, g), q = Z(u, _), ye = typeof D == "number" && typeof q == "number" ? q - D : `${q}`.localeCompare(`${D}`);
        return n.value ? ye : -ye;
      });
    });
    function y(u) {
      if (S(u))
        return n.value ? "arrow_drop_up" : "arrow_drop_down";
    }
    function S(u) {
      var g;
      return ((g = t.value) == null ? void 0 : g.replace("-", "")) === u.sort;
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
    function J(u) {
      return u.width ? `width:${u.width}` : "";
    }
    async function N(u) {
      z(u) && (S(u) ? t.value = n.value ? void 0 : "-" + u.sort : t.value = u.sort, o.sortAsync && (c.value = !0, await o.sortAsync(t.value).finally(() => {
        c.value = !1;
      })));
    }
    function O(u) {
      return o.selectBy ? u[o.selectBy] : u;
    }
    function j(u) {
      const g = O(u);
      i.value.includes(g) ? i.value = i.value.filter((_) => _ !== g) : i.value = i.value.concat(g);
    }
    function Z(u, g) {
      return typeof u.value == "function" ? u.value(g) : typeof u.value == "string" ? g[u.value] : "";
    }
    function Y(u) {
      if (!l.value) return !1;
      const g = O(u);
      return i.value.includes(g);
    }
    const Q = k(() => l.value ? o.rows.filter((u) => i.value.includes(O(u))) : []);
    function M() {
      const u = Q.value.length === o.rows.length;
      i.value = u ? [] : o.rows.map(O);
    }
    return (u, g) => (a(), v("div", {
      class: m([u.$style.Datatable, u.contentLoading && u.$style.loading])
    }, [
      h("table", null, [
        h("tbody", null, [
          h("tr", {
            class: m(u.stickyHeader && u.$style.stickyHeader)
          }, [
            l.value ? (a(), v("th", Mt, [
              I(f(Me), {
                indeterminate: Q.value.length > 0 && Q.value.length < u.rows.length,
                "model-value": Q.value.length > 0 && Q.value.length === u.rows.length,
                "onUpdate:modelValue": M
              }, null, 8, ["indeterminate", "model-value"])
            ])) : C("", !0),
            (a(!0), v(R, null, G(d.value, (_) => (a(), v("th", {
              key: _.name,
              scope: "col",
              class: m([z(_) ? u.$style.sortable : "", S(_) && u.$style.sortActive]),
              style: P([H(_), J(_)]),
              onClick: (D) => N(_)
            }, [
              h("span", {
                class: m(u.$style.colName)
              }, [
                h("span", null, [
                  $(u.$slots, `${F(_)}-header`, { column: _ }, () => [
                    T(A(_.name), 1)
                  ])
                ]),
                y(_) ? (a(), V(f(U), {
                  key: 0,
                  name: y(_),
                  class: m(u.$style.sortIcon)
                }, null, 8, ["name", "class"])) : C("", !0)
              ], 2)
            ], 14, Ct))), 128))
          ], 2),
          (a(!0), v(R, null, G(p.value, (_, D) => (a(), v("tr", {
            key: D,
            class: m([u.rowClick && u.$style.clickableRow, Y(_) && u.$style.rowSelected]),
            onClick: (q) => u.rowClick && u.rowClick(_)
          }, [
            l.value ? (a(), v("td", _t, [
              I(f(Me), {
                "model-value": Y(_),
                "onUpdate:modelValue": (q) => j(_)
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ])) : C("", !0),
            (a(!0), v(R, null, G(d.value, (q) => (a(), v("td", {
              key: q.name,
              class: m([]),
              style: P(H(q))
            }, [
              $(u.$slots, F(q), {
                row: _,
                column: q
              }, () => [
                T(A(Z(q, _)), 1)
              ])
            ], 4))), 128))
          ], 10, St))), 128)),
          u.rows.length ? C("", !0) : (a(), v("tr", {
            key: 0,
            class: m(u.$style.noResults)
          }, Vt, 2)),
          u.rows.length && u.showMore ? (a(), v("tr", {
            key: 1,
            class: m(u.$style.showMore)
          }, [
            h("td", zt, [
              I(f(X), {
                variant: "link",
                color: "info",
                onClick: u.showMore
              }, {
                default: w(() => [
                  T("Show more results")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ], 2)) : C("", !0),
          u.showFooter ? (a(), v("tr", {
            key: 2,
            class: m([u.$style.footer, u.stickyHeader && u.$style.stickyFooter])
          }, [
            l.value ? (a(), v("td", It)) : C("", !0),
            (a(!0), v(R, null, G(d.value, (_) => (a(), v("th", {
              key: _.name,
              style: P(H(_)),
              scope: "col"
            }, [
              $(u.$slots, `${F(_)}-footer`, { column: _ })
            ], 4))), 128))
          ], 2)) : C("", !0)
        ])
      ])
    ], 2));
  }
}), At = "dodo-datatable", Ft = "dodo-datatable-colname", Tt = "dodo-datatable-sortable", Nt = "dodo-datatable-sorticon", Dt = "dodo-datatable-sortactive", Rt = "dodo-datatable-noresults", Lt = "dodo-datatable-showmore", Ht = "dodo-datatable-clickablerow", Ot = "dodo-datatable-rowselected", Ut = "dodo-datatable-stickyheader", jt = "dodo-datatable-stickyfooter", qt = "dodo-datatable-loading", Wt = {
  Datatable: At,
  colName: Ft,
  sortable: Tt,
  sortIcon: Nt,
  sortActive: Dt,
  noResults: Rt,
  showMore: Lt,
  clickableRow: Ht,
  rowSelected: Ot,
  stickyHeader: Ut,
  stickyFooter: jt,
  loading: qt
}, Pt = {
  $style: Wt
}, kr = /* @__PURE__ */ E(Et, [["__cssModules", Pt]]), Gt = /* @__PURE__ */ B({
  __name: "Dialog",
  props: {
    active: { type: Boolean }
  },
  setup(r) {
    const e = r, o = b();
    return L(() => {
      e.active && o.value && o.value.parentNode.appendChild(o.value);
    }), (s, t) => (a(), V(Be, { to: "body" }, [
      I(re, { name: "Dialog" }, {
        default: w(() => [
          s.active ? (a(), v("div", {
            key: 0,
            ref_key: "el",
            ref: o,
            class: m([s.$style.Dialog])
          }, [
            h("div", {
              class: m(s.$style.window)
            }, [
              I(f(W), { padding: "m" }, {
                default: w(() => [
                  $(s.$slots, "default")
                ]),
                _: 3
              }),
              I(f(le), {
                padding: "m",
                justify: "end",
                gap: "s"
              }, {
                default: w(() => [
                  $(s.$slots, "controls")
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
}), Kt = "dodo-dialog", Jt = "dodo-dialog-window", Zt = {
  Dialog: Kt,
  window: Jt,
  "Dialog-enter-active": "dodo-dialog-dialog-enter-active",
  "Dialog-leave-active": "dodo-dialog-dialog-leave-active",
  "Dialog-enter-from": "dodo-dialog-dialog-enter-from",
  "Dialog-leave-to": "dodo-dialog-dialog-leave-to"
}, Qt = {
  $style: Zt
}, Xt = /* @__PURE__ */ E(Gt, [["__cssModules", Qt]]), Yt = /* @__PURE__ */ B({
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
    const o = r, s = e, t = b(!1), i = b(""), c = b(), n = b();
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
      t.value !== z && (o.disabled && z || (t.value = z, s("update:modelValue", z), z ? Ve().then(() => {
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
      var O, j;
      if (!t.value || o.trigger !== "hover") return;
      const H = z.relatedTarget, J = (O = n.value) == null ? void 0 : O.contains(H), N = (j = c.value) == null ? void 0 : j.contains(H);
      J || N || d(!1);
    }
    function S(z) {
      var H, J;
      if (z.target) {
        const N = (H = n.value) == null ? void 0 : H.contains(z.target), O = (J = c.value) == null ? void 0 : J.contains(z.target);
        if (N || O) return;
      }
      d(!1);
    }
    function F() {
      const H = c.value;
      if (!H) return;
      const J = H.scrollWidth, N = n.value.getBoundingClientRect(), O = window.innerWidth, j = window.innerHeight, Z = N.bottom + 300 + 16 > j, Y = Math.max(16, Math.min(N.left, O - J - 16)), Q = Math.min(600, O - 16 * 2);
      let M = `left: ${Y}px; max-width:${Q}px;`;
      Z ? M += `bottom: ${j - N.top}px; max-height: ${N.top - 16}px;` : M += `top: ${N.bottom}px; max-height: ${j - N.bottom - 16}px;`, i.value = M, t.value && requestAnimationFrame(F);
    }
    return ce(Lo, { toggle: d }), (z, H) => (a(), v(R, null, [
      h("div", ie({
        ref_key: "el",
        ref: n,
        class: [z.$style.trigger, z.disabled && z.$style.disabled]
      }, z.$attrs, {
        onClick: l,
        onMouseover: p,
        onMouseleave: y
      }), [
        $(z.$slots, "default", { isActive: t.value })
      ], 16),
      t.value ? (a(), v("div", {
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
            default: w(() => [
              $(z.$slots, "dropdown", { toggle: d })
            ]),
            _: 3
          }, 8, ["padding", "gap"])
        ], 34)
      ], 6)) : C("", !0)
    ], 64));
  }
}), xt = "dodo-dropdown-trigger", es = "dodo-dropdown-disabled", os = "dodo-dropdown-container", ts = "dodo-dropdown-content", ss = {
  trigger: xt,
  disabled: es,
  container: os,
  content: ts
}, ls = {
  $style: ss
}, je = /* @__PURE__ */ E(Yt, [["__cssModules", ls]]), ns = /* @__PURE__ */ B({
  __name: "FieldOld",
  props: {
    disabled: { type: Boolean },
    button: { type: Boolean }
  },
  setup(r) {
    return (e, o) => (a(), v("div", {
      class: m([e.$style.Field, e.disabled && e.$style.disabled, e.button && e.$style.button])
    }, [
      $(e.$slots, "before"),
      h("div", {
        class: m(e.$style.inner)
      }, [
        $(e.$slots, "default")
      ], 2),
      $(e.$slots, "after")
    ], 2));
  }
}), as = "dodo-fieldold-field", rs = "dodo-fieldold-button", is = "dodo-fieldold-inner", ds = "dodo-fieldold-disabled", cs = {
  Field: as,
  button: rs,
  inner: is,
  disabled: ds
}, us = {
  $style: cs
}, ps = /* @__PURE__ */ E(ns, [["__cssModules", us]]), ms = /* @__PURE__ */ B({
  __name: "FluidGrid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean },
    alignItems: {}
  },
  setup(r) {
    const e = r, o = te(), s = b(), t = b(99999);
    let i = null;
    const c = new ResizeObserver(() => {
      i && clearTimeout(i), i = setTimeout(() => {
        t.value = s.value.clientWidth;
      }, 50);
    });
    x(() => {
      c.observe(s.value);
    }), Je(() => {
      c.disconnect();
    });
    const n = k(() => e.columnSize >= t.value), d = k(() => {
      let l = `--fluidgrid-size:${e.columnSize}px;`;
      return e.autoFill && (l += "--fluidgrid-mode:auto-fill;"), e.gap && (l += `gap:${o.gapValue(e.gap)};`), e.padding && (l += `padding:${o.gapValue(e.padding)};`), l;
    });
    return (l, p) => (a(), v("div", {
      ref_key: "el",
      ref: s,
      class: m([l.$style.FluidGrid, n.value && l.$style.oneColumn]),
      style: P(d.value)
    }, [
      $(l.$slots, "default")
    ], 6));
  }
}), vs = "dodo-fluidgrid", fs = "dodo-fluidgrid-onecolumn", ys = {
  FluidGrid: vs,
  oneColumn: fs
}, hs = {
  $style: ys
}, Mr = /* @__PURE__ */ E(ms, [["__cssModules", hs]]), $s = /* @__PURE__ */ B({
  __name: "Form",
  props: {
    gap: {}
  },
  emits: ["submit"],
  setup(r, { emit: e }) {
    const o = e, s = te();
    function t() {
      o("submit");
    }
    return (i, c) => (a(), v("form", {
      class: m([i.$style.form, f(s).gap(i.gap)]),
      onSubmit: oe(t, ["prevent"])
    }, [
      $(i.$slots, "default")
    ], 34));
  }
}), gs = "dodo-form", bs = {
  form: gs
}, ws = {
  $style: bs
}, Cr = /* @__PURE__ */ E($s, [["__cssModules", ws]]), ks = ["data-itemerror"], Ms = ["for"], Cs = /* @__PURE__ */ B({
  __name: "FormItem",
  props: {
    label: {},
    error: {},
    description: {},
    for: {},
    optional: { type: Boolean }
  },
  setup(r) {
    const e = r, o = ne(), s = ze();
    return x(() => {
      if (!o.default)
        throw new Error("FormEntry requires a default slot");
    }), (t, i) => {
      var c;
      return a(), v("div", {
        class: m([t.$style.FormEntry, t.error && t.$style.hasError]),
        "data-itemerror": t.error
      }, [
        t.label ? (a(), v("div", {
          key: 0,
          class: m(t.$style.labelRow)
        }, [
          h("label", {
            class: m(t.$style.label),
            for: e.for
          }, A(t.label), 11, Ms),
          t.optional ? (a(), v("span", {
            key: 0,
            class: m(t.$style.optional)
          }, "Optional", 2)) : C("", !0)
        ], 2)) : C("", !0),
        $(t.$slots, "default", {
          error: t.error,
          entryId: e.for ? e.for : `form-item-${(c = f(s)) == null ? void 0 : c.uid}`
        }),
        t.error ? (a(), v("div", {
          key: 1,
          class: m(t.$style.error)
        }, [
          h("span", null, A(t.error), 1)
        ], 2)) : C("", !0),
        t.description ? (a(), v("div", {
          key: 2,
          class: m(t.$style.description)
        }, A(t.description), 3)) : C("", !0)
      ], 10, ks);
    };
  }
}), Ss = "dodo-formitem-formentry", _s = "dodo-formitem-label", Bs = "dodo-formitem-optional", Vs = "dodo-formitem-labelrow", zs = "dodo-formitem-description", Is = "dodo-formitem-haserror", Es = "dodo-formitem-error", As = {
  FormEntry: Ss,
  label: _s,
  optional: Bs,
  labelRow: Vs,
  description: zs,
  hasError: Is,
  error: Es
}, Fs = {
  $style: As
}, Ts = /* @__PURE__ */ E(Cs, [["__cssModules", Fs]]), Ns = /* @__PURE__ */ B({
  __name: "Grid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean }
  },
  setup(r) {
    const e = te();
    return (o, s) => (a(), v("div", {
      class: m([
        o.$style.component,
        o.$style[`col-${o.columnSize}`],
        o.autoFill && o.$style.autoFill,
        f(e).gap(o.gap),
        f(e).padding(o.padding)
      ])
    }, [
      $(o.$slots, "default")
    ], 2));
  }
}), Ds = "dodo-grid-component", Rs = "dodo-grid-autofill", Ls = {
  component: Ds,
  autoFill: Rs,
  "col-xs": "dodo-grid-col-xs",
  "col-s": "dodo-grid-col-s",
  "col-m": "dodo-grid-col-m",
  "col-l": "dodo-grid-col-l"
}, Hs = {
  $style: Ls
}, Sr = /* @__PURE__ */ E(Ns, [["__cssModules", Hs]]), Os = {
  key: 0,
  class: "dodo-nowrap dodo-fade-secondary"
}, Us = /* @__PURE__ */ B({
  __name: "MenuItem",
  props: {
    active: { type: Boolean },
    emphasize: { type: Boolean },
    separator: { type: Boolean }
  },
  setup(r) {
    return (e, o) => (a(), v(R, null, [
      e.separator ? (a(), v("hr", {
        key: 0,
        class: m(e.$style.separator)
      }, null, 2)) : C("", !0),
      h("div", ie(e.$attrs, {
        class: [e.$style.DropdownItem, e.active && e.$style.active, e.emphasize && e.$style.emphasize]
      }), [
        $(e.$slots, "before"),
        I(f(W), {
          gap: "0",
          style: { flex: "1" }
        }, {
          default: w(() => [
            h("p", {
              class: m([e.$style.text, "dodo-nowrap"])
            }, [
              $(e.$slots, "default")
            ], 2),
            e.$slots["text-secondary"] ? (a(), v("p", Os, [
              $(e.$slots, "text-secondary")
            ])) : C("", !0)
          ]),
          _: 3
        }),
        $(e.$slots, "after")
      ], 16)
    ], 64));
  }
}), js = "dodo-menuitem-dropdownitem", qs = "dodo-menuitem-active", Ws = "dodo-menuitem-emphasize", Ps = "dodo-menuitem-text", Gs = "dodo-menuitem-separator", Ks = {
  DropdownItem: js,
  active: qs,
  emphasize: Ws,
  text: Ps,
  separator: Gs
}, Js = {
  $style: Ks
}, Zs = /* @__PURE__ */ E(Us, [["__cssModules", Js]]), Qs = /* @__PURE__ */ B({
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
    L(() => {
      var l;
      (l = t.value) == null || l.showModal();
    });
    const i = k(() => o.open);
    K(i, (l) => {
      if (l) {
        const p = window.innerWidth - document.body.clientWidth;
        document.body.style.setProperty("padding-right", `${p}px`), document.body.style.setProperty("overflow", "hidden");
      }
    });
    function c(l) {
      const p = t.value;
      l.target === p && n();
    }
    function n() {
      s("close");
    }
    async function d() {
      document.body.style.removeProperty("padding-right"), document.body.style.removeProperty("overflow");
    }
    return (l, p) => (a(), V(re, {
      appear: "",
      "enter-from-class": l.$style.enter,
      "leave-to-class": l.$style.enter,
      onAfterLeave: d
    }, {
      default: w(() => [
        i.value ? (a(), v("dialog", {
          key: 0,
          ref_key: "dialogElem",
          ref: t,
          class: m(l.$style.background),
          onClick: c,
          onCancel: oe(n, ["prevent"])
        }, [
          I(Ro, {
            class: m([l.$style.modal, l.size && l.$style[l.size]]),
            padding: l.padding,
            gap: l.gap
          }, {
            default: w(() => [
              $(l.$slots, "default", { close: n }, () => [
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
}), Xs = "dodo-modal-background", Ys = "dodo-modal-enter", xs = "dodo-modal", el = "dodo-modal-s", ol = "dodo-modal-l", tl = {
  background: Xs,
  enter: Ys,
  modal: xs,
  S: el,
  L: ol
}, sl = {
  $style: tl
}, _r = /* @__PURE__ */ E(Qs, [["__cssModules", sl]]), ll = /* @__PURE__ */ B({
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
    const e = r, o = ne(), s = b(), t = b(!1);
    x(() => {
      t.value = !!s.value.closest("[data-mobile-nav]");
    });
    const i = de(Re), c = k(() => i == null ? void 0 : i.collapsed.value), n = k(() => i == null ? void 0 : i.renderMobile.value), d = k(() => n.value || !c.value);
    async function l(p) {
      i && !o.submenu && (i.mobileToggle.value = !1), e.link && await e.link.navigate();
    }
    return (p, y) => (a(), V(f(fe), {
      text: p.text,
      disabled: d.value,
      side: "right"
    }, {
      default: w(() => [
        (a(), V(ue(p.$slots.submenu ? f(je) : "div"), null, {
          dropdown: w(() => [
            $(p.$slots, "submenu")
          ]),
          default: w(() => {
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
                p.icon || p.$slots.icon ? (a(), v("div", {
                  key: 0,
                  class: m(p.$style.icon)
                }, [
                  $(p.$slots, "icon", {}, () => [
                    I(f(U), {
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
                  p.textSecondary ? (a(), v("p", {
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
}), nl = "dodo-navbaritem", al = "dodo-navbaritem-active", rl = "dodo-navbaritem-important", il = "dodo-navbaritem-textwrap", dl = "dodo-navbaritem-icon", cl = "dodo-navbaritem-text", ul = "dodo-navbaritem-secondary", pl = {
  NavBarItem: nl,
  active: al,
  important: rl,
  textwrap: il,
  icon: dl,
  text: cl,
  secondary: ul
}, ml = {
  $style: pl
}, _e = /* @__PURE__ */ E(ll, [["__cssModules", ml]]), vl = { style: { "margin-right": "8px" } }, fl = /* @__PURE__ */ B({
  __name: "NavBar",
  props: {
    mobile: { type: Boolean }
  },
  setup(r) {
    const e = r, { screenLarge: o } = Le(), s = Ho("NavBar-collapse", null), t = b(!1), i = k(() => e.mobile || !o.value);
    ce(Re, { collapsed: s, renderMobile: i, mobileToggle: t });
    function c() {
      i.value && (t.value = !1);
    }
    return (n, d) => (a(), v("div", {
      class: m([
        n.$style.root,
        f(s) && n.$style.collapsed,
        t.value && n.$style.mobileToggle,
        i.value && n.$style.mobileMenu
      ]),
      onClick: oe(c, ["self"])
    }, [
      t.value ? (a(), v("div", {
        key: 0,
        class: m(n.$style.backdrop),
        onClick: d[0] || (d[0] = (l) => t.value = !1)
      }, null, 2)) : C("", !0),
      h("div", {
        class: m(n.$style.NavBar)
      }, [
        n.$slots["navbar-header"] ? (a(), v("div", {
          key: 0,
          class: m(n.$style.header)
        }, [
          h("div", null, [
            $(n.$slots, "navbar-header")
          ]),
          h("div", vl, [
            i.value ? (a(), V(f(X), {
              key: 0,
              variant: "link",
              square: "",
              color: "background",
              onClick: d[1] || (d[1] = (l) => t.value = !1)
            }, {
              default: w(() => [
                I(f(U), { name: "close" })
              ]),
              _: 1
            })) : C("", !0)
          ])
        ], 2)) : C("", !0),
        h("div", {
          class: m(n.$style.middle)
        }, [
          $(n.$slots, "default")
        ], 2),
        n.$slots["navbar-footer"] ? (a(), v("div", {
          key: 1,
          class: m(n.$style.footer)
        }, [
          $(n.$slots, "navbar-footer"),
          i.value ? C("", !0) : (a(), V(_e, {
            key: 0,
            text: f(s) ? "Expand" : "Collapse",
            icon: f(s) ? "last_page" : "first_page",
            onClick: d[2] || (d[2] = (l) => s.value = !f(s))
          }, null, 8, ["text", "icon"]))
        ], 2)) : C("", !0)
      ], 2),
      h("div", {
        class: m(n.$style.wrapMobile)
      }, [
        n.$slots.main ? (a(), V(f(W), {
          key: 0,
          class: m(n.$style.main)
        }, {
          default: w(() => [
            $(n.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : C("", !0),
        i.value ? (a(), v("div", {
          key: 1,
          class: m(n.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          $(n.$slots, "default", { inMobileBar: !0 }),
          $(n.$slots, "navbar-footer", { inMobileBar: !0 }),
          I(_e, {
            text: "Menu",
            icon: "menu",
            onClick: d[3] || (d[3] = (l) => t.value = !t.value)
          })
        ], 2)) : C("", !0)
      ], 2)
    ], 2));
  }
}), yl = "dodo-navbar-root", hl = "dodo-navbar", $l = "dodo-navbar-collapsed", gl = "dodo-navbar-header", bl = "dodo-navbar-middle", wl = "dodo-navbar-footer", kl = "dodo-navbar-wrapmobile", Ml = "dodo-navbar-main", Cl = "dodo-navbar-backdrop", Sl = "dodo-navbar-mobilemenu", _l = "dodo-navbar-mobiletoggle", Bl = "dodo-navbar-mobilenav", Vl = {
  root: yl,
  NavBar: hl,
  collapsed: $l,
  header: gl,
  middle: bl,
  footer: wl,
  wrapMobile: kl,
  main: Ml,
  backdrop: Cl,
  mobileMenu: Sl,
  mobileToggle: _l,
  mobileNav: Bl
}, zl = {
  $style: Vl
}, Br = /* @__PURE__ */ E(fl, [["__cssModules", zl]]), qe = jo(() => {
  const r = b([]), e = b(""), o = b([]), s = b(!1);
  return K(r, () => {
    s.value = !1;
  }), { headerText: e, activeItems: r, expandedMenu: o, mobileToggle: s };
}), Il = (r) => {
  const e = qe.injectOptional(), o = ze(), s = (l) => l ? [l.uid, ...s(l.parent)] : [], t = (l) => {
    !l || !e || (e.activeItems.value = s(o), e.headerText.value = r.text.value);
  }, i = k(() => e == null ? void 0 : e.headerText.value), c = () => {
    !o || !e || (e.expandedMenu.value.includes(o.uid) ? e.expandedMenu.value = [] : e.expandedMenu.value = s(o));
  }, n = k(() => !o || !e ? !1 : e.activeItems.value.includes(o.uid)), d = k(() => !o || !e ? !1 : e.expandedMenu.value.length ? e.expandedMenu.value.includes(o.uid) : e.activeItems.value.includes(o.uid));
  return K(r.active, () => t(r.active.value), { immediate: !0 }), ee(() => t(!1)), L(() => {
    i.value && (document.title = i.value);
  }), { showAsActive: n, isExpanded: d, toggleExpand: c, headerText: i };
}, El = /* @__PURE__ */ B({
  __name: "NavBarNew",
  setup(r) {
    const { headerText: e, mobileToggle: o } = qe.createAndProvide(), { screenLarge: s } = Le(), t = k(() => !s.value);
    function i() {
      o.value = !1;
    }
    return (c, n) => (a(), v("div", {
      class: m([c.$style.root, f(o) && c.$style.mobileToggle, t.value && c.$style.mobileMenu]),
      onClick: oe(i, ["self"])
    }, [
      f(o) ? (a(), v("div", {
        key: 0,
        class: m(c.$style.backdrop),
        onClick: n[0] || (n[0] = (d) => o.value = !1)
      }, null, 2)) : C("", !0),
      h("div", {
        class: m(c.$style.NavBar)
      }, [
        h("div", {
          class: m(c.$style.middle)
        }, [
          $(c.$slots, "default")
        ], 2),
        c.$slots["navbar-footer"] ? (a(), v("div", {
          key: 0,
          class: m(c.$style.footer)
        }, [
          $(c.$slots, "navbar-footer")
        ], 2)) : C("", !0)
      ], 2),
      h("div", {
        class: m(c.$style.wrapMobile)
      }, [
        t.value ? (a(), v("div", {
          key: 0,
          class: m(c.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          h("h5", null, A(f(e)), 1),
          I(f(fe), { text: "Toggle menu" }, {
            default: w(() => [
              h("div", {
                class: m(c.$style.menuButton)
              }, [
                I(f(U), {
                  name: "menu",
                  onClick: n[1] || (n[1] = (d) => o.value = !f(o))
                })
              ], 2)
            ]),
            _: 1
          })
        ], 2)) : C("", !0),
        c.$slots.main ? (a(), V(f(W), {
          key: 1,
          class: m(c.$style.main)
        }, {
          default: w(() => [
            $(c.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : C("", !0)
      ], 2)
    ], 2));
  }
}), Al = "dodo-navbarnew-root", Fl = "dodo-navbarnew-navbar", Tl = "dodo-navbarnew-middle", Nl = "dodo-navbarnew-footer", Dl = "dodo-navbarnew-wrapmobile", Rl = "dodo-navbarnew-main", Ll = "dodo-navbarnew-backdrop", Hl = "dodo-navbarnew-menubutton", Ol = "dodo-navbarnew-mobilemenu", Ul = "dodo-navbarnew-mobiletoggle", jl = "dodo-navbarnew-mobilenav", ql = {
  root: Al,
  NavBar: Fl,
  middle: Tl,
  footer: Nl,
  wrapMobile: Dl,
  main: Rl,
  backdrop: Ll,
  menuButton: Hl,
  mobileMenu: Ol,
  mobileToggle: Ul,
  mobileNav: jl
}, Wl = {
  $style: ql
}, Vr = /* @__PURE__ */ E(El, [["__cssModules", Wl]]), Pl = ["href"], Gl = { key: 0 }, Kl = /* @__PURE__ */ B({
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
    const e = r, o = k(() => e.link ? f(e.link.isActive) : !1), s = k(() => e.text), { isExpanded: t, showAsActive: i, toggleExpand: c } = Il({ text: s, active: o }), n = ne();
    async function d(l) {
      n.submenu && c(), e.link && (await e.link.navigate(), l.preventDefault());
    }
    return (l, p) => (a(), v("div", {
      class: m([l.$style.el])
    }, [
      I(f(fe), {
        text: l.tooltipText,
        side: "right"
      }, {
        default: w(() => {
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
                $(l.$slots, "icon", {}, () => [
                  l.icon ? (a(), V(f(U), {
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
                l.textSecondary ? (a(), v("p", {
                  key: 0,
                  class: m([l.$style.secondary, "dodo-nowrap"])
                }, A(l.textSecondary), 3)) : C("", !0)
              ], 2),
              f(n).submenu ? (a(), v("div", Gl, [
                I(f(U), {
                  name: f(t) ? "keyboard_arrow_up" : "keyboard_arrow_down",
                  size: "s",
                  style: { margin: "0 -0.25em" }
                }, null, 8, ["name"])
              ])) : C("", !0)
            ], 10, Pl)
          ];
        }),
        _: 3
      }, 8, ["text"]),
      l.$slots.submenu ? (a(), v("div", {
        key: 0,
        class: m([l.$style.submenu, f(t) && l.$style.expanded])
      }, [
        $(l.$slots, "submenu")
      ], 2)) : C("", !0)
    ], 2));
  }
}), Jl = "dodo-navitem-el", Zl = "dodo-navitem-link", Ql = "dodo-navitem-submenu", Xl = "dodo-navitem-expanded", Yl = "dodo-navitem-active", xl = "dodo-navitem-important", en = "dodo-navitem-textwrap", on = "dodo-navitem-icon", tn = "dodo-navitem-text", sn = "dodo-navitem-secondary", ln = {
  el: Jl,
  link: Zl,
  submenu: Ql,
  expanded: Xl,
  active: Yl,
  important: xl,
  textwrap: en,
  icon: on,
  text: tn,
  secondary: sn
}, nn = {
  $style: ln
}, zr = /* @__PURE__ */ E(Kl, [["__cssModules", nn]]), an = /* @__PURE__ */ B({
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
    const e = te();
    return (o, s) => (a(), v("div", {
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
      $(o.$slots, "default")
    ], 2));
  }
}), rn = "dodo-row-el", dn = {
  el: rn
}, cn = {
  $style: dn
}, le = /* @__PURE__ */ E(an, [["__cssModules", cn]]), un = /* @__PURE__ */ B({
  __name: "ScrollContainer",
  setup(r) {
    const e = k(() => "");
    return (o, s) => (a(), v("div", {
      class: m([o.$style.ScrollContainer]),
      style: P(e.value)
    }, [
      $(o.$slots, "default")
    ], 6));
  }
}), pn = "dodo-scrollcontainer", mn = {
  ScrollContainer: pn
}, vn = {
  $style: mn
}, fn = /* @__PURE__ */ E(un, [["__cssModules", vn]]), yn = {
  key: 0,
  class: "dodo-nowrap"
}, hn = {
  key: 1,
  class: "dodo-nowrap dodo-fade-secondary"
}, $n = ["disabled"], gn = 12, bn = /* @__PURE__ */ B({
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
  setup(r, { emit: e }) {
    const o = r, s = e, t = k(() => (o.multiple ? [o.modelValue].flat() : [o.modelValue]).filter(N)), i = b(!1), c = b(""), n = b(), d = b(), l = b(), p = b();
    L(() => {
      i.value && n.value && (c.value = "", n.value.focus());
    }), L(() => {
      c.value && d.value && d.value.$el.focus();
    }), L(() => {
      i.value && setTimeout(() => {
        var g;
        const M = (g = l.value) == null ? void 0 : g.$el, u = M == null ? void 0 : M.querySelector("[data-selectactive]");
        u == null || u.scrollIntoView({ block: "center" });
      }, 0);
    });
    const y = b(!1), S = k(() => o.options.length > gn), F = k(() => S.value && !y.value ? 6 : o.options.length), z = k(() => c.value || o.options.length >= 10), H = k(() => {
      const M = c.value.toLowerCase(), u = o.options.filter((D) => `${D.value}|${D.label}`.toLowerCase().includes(M));
      if (!o.multiple) return u;
      const g = u.filter((D) => t.value.find((q) => j(D, q))), _ = u.filter((D) => !g.includes(D));
      return g.concat(_);
    }), J = k(() => o.placeholder ? o.placeholder : o.multiple ? "Select one or more" : "Select one");
    function N(M) {
      return o.options.find((u) => j(u, M));
    }
    function O(M) {
      let u = M.value;
      o.multiple ? t.value.includes(u) ? u = t.value.filter((g) => !j(M, g)) : u = t.value.concat(M.value) : i.value = !1, s("update:modelValue", u);
    }
    function j(M, u) {
      return M.value === u;
    }
    function Z(M) {
      return M.label || `${M.value}`;
    }
    function Y(M) {
      return t.value.some((u) => j(M, u));
    }
    function Q(M) {
      var _, D;
      const u = (_ = p.value) == null ? void 0 : _.$el.contains(M.target), g = (D = l.value) == null ? void 0 : D.$el.contains(M.target);
      i.value = u || g;
    }
    return x(() => {
      document.addEventListener("focusin", Q);
    }), ee(() => {
      document.removeEventListener("focusin", Q);
    }), (M, u) => M.variant === "buttons" ? (a(), V(f(le), {
      key: 0,
      gap: "xs",
      wrap: ""
    }, {
      default: w(() => [
        (a(!0), v(R, null, G(M.options.slice(0, F.value), (g, _) => (a(), V(f(X), {
          key: Z(g),
          color: Y(g) ? "info" : void 0,
          active: Y(g),
          variant: Y(g) && !M.multiple ? "solid" : void 0,
          disabled: M.disabled,
          size: M.size,
          round: "",
          onClick: (D) => O(g)
        }, {
          default: w(() => [
            M.multiple && Y(g) ? (a(), V(f(U), {
              key: 0,
              name: "check",
              size: "s",
              style: { margin: "-2px" }
            })) : C("", !0),
            $(M.$slots, "default", {
              option: g,
              index: _
            }, () => [
              T(A(Z(g)), 1)
            ])
          ]),
          _: 2
        }, 1032, ["color", "active", "variant", "disabled", "size", "onClick"]))), 128)),
        S.value ? (a(), v(R, { key: 0 }, [
          y.value ? (a(), V(f(X), {
            key: 0,
            size: M.size,
            variant: "link",
            round: "",
            onClick: u[0] || (u[0] = (g) => y.value = !y.value)
          }, {
            default: w(() => [
              T(" Less "),
              I(f(U), {
                name: "keyboard_arrow_up",
                size: "s",
                style: { margin: "-2px" }
              })
            ]),
            _: 1
          }, 8, ["size"])) : (a(), V(f(X), {
            key: 1,
            size: M.size,
            variant: "link",
            round: "",
            onClick: u[1] || (u[1] = (g) => y.value = !y.value)
          }, {
            default: w(() => [
              T(A(M.options.length - F.value) + " more ", 1),
              I(f(U), {
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
    })) : (a(), V(f(je), {
      key: 1,
      modelValue: i.value,
      "onUpdate:modelValue": u[5] || (u[5] = (g) => i.value = g),
      disabled: M.disabled
    }, {
      dropdown: w(() => [
        I(f(W), {
          ref_key: "dropdownEl",
          ref: l,
          style: { "min-height": "0" },
          gap: "0",
          onMousedown: u[4] || (u[4] = oe(() => {
          }, ["stop", "prevent"]))
        }, {
          default: w(() => [
            se(I(f(le), {
              padding: "s",
              class: m(M.$style.searchbox)
            }, {
              default: w(() => [
                I(f(Za), {
                  ref_key: "searchEl",
                  ref: d,
                  modelValue: c.value,
                  "onUpdate:modelValue": u[3] || (u[3] = (g) => c.value = g),
                  type: "search",
                  placeholder: "Search",
                  tabindex: "0",
                  style: { "flex-grow": "1" }
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["class"]), [
              [Ze, z.value]
            ]),
            I(f(fn), null, {
              default: w(() => [
                (a(!0), v(R, null, G(H.value, (g, _) => (a(), V(f(Zs), {
                  key: `${g.value}`,
                  "data-selectactive": t.value.includes(g.value) ? "true" : void 0,
                  active: t.value.includes(g.value),
                  onClick: (D) => O(g)
                }, {
                  default: w(() => [
                    $(M.$slots, "default", {
                      index: _,
                      option: g
                    }, () => [
                      T(A(Z(g)), 1)
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
      default: w(() => [
        I(ps, {
          ref_key: "fieldEl",
          ref: p,
          button: "",
          disabled: M.disabled
        }, {
          after: w(() => [
            I(f(U), { name: "arrow_drop_down" })
          ]),
          default: w(() => [
            t.value.length ? (a(), v("p", yn, [
              (a(!0), v(R, null, G(t.value, (g, _) => (a(), v(R, null, [
                _ ? (a(), v(R, { key: 0 }, [
                  T(", ")
                ], 64)) : C("", !0),
                N(g) ? $(M.$slots, "default", {
                  key: 1,
                  index: M.options.indexOf(N(g)),
                  option: N(g)
                }, () => [
                  T(A(Z(N(g))), 1)
                ]) : (a(), v(R, { key: 2 }, [
                  T(A(g), 1)
                ], 64))
              ], 64))), 256))
            ])) : (a(), v("p", hn, A(J.value), 1)),
            se(h("input", {
              ref_key: "hiddenInput",
              ref: n,
              "onUpdate:modelValue": u[2] || (u[2] = (g) => c.value = g),
              style: { position: "fixed", "pointer-events": "none", opacity: "0" },
              disabled: M.disabled
            }, null, 8, $n), [
              [Ie, c.value]
            ])
          ]),
          _: 3
        }, 8, ["disabled"])
      ]),
      _: 3
    }, 8, ["modelValue", "disabled"]));
  }
}), wn = "dodo-selectold-searchbox", kn = {
  searchbox: wn
}, Mn = {
  $style: kn
}, Ir = /* @__PURE__ */ E(bn, [["__cssModules", Mn]]), Cn = ["id", "disabled"], Sn = ["value"], _n = /* @__PURE__ */ B({
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
    const o = r, s = e, t = k({
      get: () => o.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, c) => (a(), V(Ts, {
      class: m(i.error && i.$style.error),
      label: i.label,
      error: i.error,
      description: i.description,
      optional: i.optional,
      for: i.id ?? void 0
    }, {
      default: w(({ entryId: n }) => [
        h("div", {
          class: m(i.$style.select)
        }, [
          se(h("select", {
            id: i.id ?? n,
            "onUpdate:modelValue": c[0] || (c[0] = (d) => t.value = d),
            disabled: i.disabled,
            class: m(["dodo-formfield"])
          }, [
            (a(!0), v(R, null, G(i.options, (d) => (a(), v("option", {
              key: d.label,
              value: d.value
            }, A(d.label), 9, Sn))), 128))
          ], 8, Cn), [
            [Qe, t.value]
          ]),
          h("span", {
            class: m(i.$style.icon)
          }, [
            I(U, { name: "unfold_more" })
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["class", "label", "error", "description", "optional", "for"]));
  }
}), Bn = "dodo-simpleselect-select", Vn = "dodo-simpleselect-icon", zn = "dodo-simpleselect-error", In = {
  select: Bn,
  icon: Vn,
  error: zn
}, En = {
  $style: In
}, Er = /* @__PURE__ */ E(_n, [["__cssModules", En]]), An = {
  key: 0,
  viewBox: "0 0 48 48"
}, Fn = /* @__PURE__ */ pe('<clipPath id="g"><path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path></clipPath><g clip-path="url(#g)"><path fill="#FBBC05" d="M0 37V11l17 13z"></path><path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path><path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path><path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path></g>', 2), Tn = [
  Fn
], Nn = {
  key: 1,
  viewBox: "0 0 248 204"
}, Dn = /* @__PURE__ */ h("path", {
  id: "white_background",
  fill: "#1D9BF0",
  d: "M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
}, null, -1), Rn = [
  Dn
], Ln = {
  key: 2,
  viewBox: "60 60 140 140"
}, Hn = /* @__PURE__ */ pe('<path fill="#E01E5A" d="M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"></path><path fill="#E01E5A" d="M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9V151.2z"></path><path fill="#36C5F0" d="M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"></path><path fill="#36C5F0" d="M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9H118.8z"></path><path fill="#2EB67D" d="M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"></path><path fill="#2EB67D" d="M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9V118.8z"></path><path fill="#ECB22E" d="M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"></path><path fill="#ECB22E" d="M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9H151.2z"></path>', 8), On = [
  Hn
], Un = {
  key: 3,
  viewBox: "2 2 46 46"
}, jn = /* @__PURE__ */ h("path", { d: "M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" }, null, -1), qn = [
  jn
], Wn = {
  key: 4,
  viewBox: "0 0 14222 14222"
}, Pn = /* @__PURE__ */ h("circle", {
  cx: "7111",
  cy: "7112",
  r: "7111",
  fill: "#1977f3"
}, null, -1), Gn = /* @__PURE__ */ h("path", {
  d: "M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z",
  fill: "#fff"
}, null, -1), Kn = [
  Pn,
  Gn
], Jn = {
  key: 5,
  viewBox: "0 0 24 24"
}, Zn = /* @__PURE__ */ h("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }, null, -1), Qn = [
  Zn
], Xn = {
  key: 6,
  viewBox: "6 6 36 36"
}, Yn = /* @__PURE__ */ h("path", {
  fill: "#0288D1",
  d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
}, null, -1), xn = /* @__PURE__ */ h("path", {
  fill: "#FFF",
  d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
}, null, -1), ea = [
  Yn,
  xn
], oa = {
  key: 7,
  viewBox: "10 10 160 160"
}, ta = /* @__PURE__ */ pe('<defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"></stop><stop offset="1" stop-color="#23b33a"></stop></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531"></feGaussianBlur></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"></path><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"></path><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"></path><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"></path><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"></path>', 6), sa = [
  ta
], la = /* @__PURE__ */ B({
  __name: "SocialIcon",
  props: {
    name: {},
    white: { type: Boolean },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(r) {
    return (e, o) => (a(), v("span", {
      class: m([e.$style.SocialIcon, e.small && e.$style.small, e.large && e.$style.large, e.white && e.$style.white])
    }, [
      e.name === "google" ? (a(), v("svg", An, Tn)) : e.name === "twitter" ? (a(), v("svg", Nn, Rn)) : e.name === "slack" ? (a(), v("svg", Ln, On)) : e.white && e.name === "facebook" ? (a(), v("svg", Un, qn)) : e.name === "facebook" ? (a(), v("svg", Wn, Kn)) : e.white && e.name === "linkedin" ? (a(), v("svg", Jn, Qn)) : e.name === "linkedin" ? (a(), v("svg", Xn, ea)) : e.name === "whatsapp" ? (a(), v("svg", oa, sa)) : C("", !0)
    ], 2));
  }
}), na = "dodo-socialicon", aa = "dodo-socialicon-white", ra = "dodo-socialicon-small", ia = "dodo-socialicon-large", da = {
  SocialIcon: na,
  white: aa,
  small: ra,
  large: ia
}, ca = {
  $style: da
}, Ar = /* @__PURE__ */ E(la, [["__cssModules", ca]]), ua = /* @__PURE__ */ h("path", {
  stroke: "currentColor",
  fill: "none",
  d: "M 9 1 A 8 8 0 0 1 17 9",
  "stroke-width": "2"
}, null, -1), pa = /* @__PURE__ */ h("path", {
  stroke: "currentColor",
  opacity: "0.33",
  fill: "none",
  d: "M 17 9 A 8 8 0 1 1 9 1",
  "stroke-width": "2"
}, null, -1), ma = [
  ua,
  pa
], va = /* @__PURE__ */ B({
  __name: "Spinner",
  props: {
    color: { default: void 0 },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(r) {
    const e = r, o = k(() => {
      let s = "";
      return e.color === "inherit" ? s += "color:inherit;" : e.color && (s += `color:var(--dodo-color-${e.color});`), s;
    });
    return (s, t) => (a(), v("div", {
      class: m([s.$style.Spinner, s.small && s.$style.small, s.large && s.$style.large])
    }, [
      (a(), v("svg", {
        style: P(o.value),
        viewBox: "0 0 18 18"
      }, ma, 4))
    ], 2));
  }
}), fa = "dodo-spinner", ya = "dodo-spinner-small", ha = "dodo-spinner-large", $a = {
  Spinner: fa,
  small: ya,
  large: ha
}, ga = {
  $style: $a
}, Fr = /* @__PURE__ */ E(va, [["__cssModules", ga]]), ba = ["onClick"], wa = {
  key: 1,
  class: "dodo-color-background"
}, ka = { style: {} }, Ma = { key: 0 }, Ca = {
  key: 1,
  class: "dodo-fade-secondary"
}, Sa = {
  key: 0,
  class: "dodo-fade-secondary"
}, _a = /* @__PURE__ */ h("br", null, null, -1), Ba = /* @__PURE__ */ B({
  __name: "Stepper",
  props: {
    stepIndex: {},
    steps: {},
    submit: { type: Function },
    completed: {}
  },
  emits: ["update:stepIndex", "submit"],
  setup(r, { emit: e }) {
    const o = r, s = e, t = b(0), i = k(() => o.steps[t.value]);
    function c() {
      t.value--;
    }
    async function n() {
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
    }), (l, p) => (a(), V(f(W), {
      class: m(l.$style.stepper)
    }, {
      default: w(() => [
        (a(!0), v(R, null, G(l.steps, (y, S) => (a(), V(f(le), {
          key: y.key,
          align: "stretch",
          gap: "m",
          class: m(S > t.value && l.$style.inactiveStep)
        }, {
          default: w(() => [
            I(f(W), { align: "center" }, {
              default: w(() => [
                h("div", {
                  class: m([l.$style.circle]),
                  onClick: (F) => d(S)
                }, [
                  t.value > S ? (a(), V(f(U), {
                    key: 0,
                    name: "check"
                  })) : (a(), v("h3", wa, A(S + 1), 1))
                ], 10, ba),
                S < l.steps.length - 1 ? (a(), v("div", {
                  key: 0,
                  class: m(l.$style.line)
                }, null, 2)) : C("", !0)
              ]),
              _: 2
            }, 1024),
            I(f(W), { grow: "" }, {
              default: w(() => [
                I(f(W), {
                  gap: "xs",
                  onClick: (F) => d(S)
                }, {
                  default: w(() => [
                    h("h3", ka, [
                      y === i.value ? (a(), v("span", Ma, A(y.name), 1)) : (a(), v("span", Ca, A(y.name), 1))
                    ]),
                    y.hint ? (a(), v("p", Sa, A(y.hint), 1)) : C("", !0)
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                y === i.value ? (a(), V(f(W), { key: 0 }, {
                  default: w(() => [
                    $(l.$slots, y.slot),
                    I(f(le), null, {
                      default: w(() => [
                        t.value > 0 ? (a(), V(f(X), {
                          key: 0,
                          variant: "link",
                          onClick: c
                        }, {
                          default: w(() => [
                            T(" Back ")
                          ]),
                          _: 1
                        })) : C("", !0),
                        t.value < l.steps.length - 1 ? (a(), V(f(X), {
                          key: 1,
                          disabled: y.filled === !1,
                          color: "primary",
                          variant: "solid",
                          onClick: n
                        }, {
                          default: w(() => [
                            $(l.$slots, "continue-button-text", {}, () => [
                              T("Continue")
                            ])
                          ]),
                          _: 2
                        }, 1032, ["disabled"])) : (a(), V(f(X), {
                          key: 2,
                          color: "primary",
                          variant: "solid",
                          onClick: n
                        }, {
                          default: w(() => [
                            $(l.$slots, "submit-button-text", {}, () => [
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
                _a
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
}), Va = "dodo-stepper-line", za = "dodo-stepper-circle", Ia = "dodo-stepper-inactivestep", Ea = {
  line: Va,
  circle: za,
  inactiveStep: Ia
}, Aa = {
  $style: Ea
}, Tr = /* @__PURE__ */ E(Ba, [["__cssModules", Aa]]), Fa = ["onClick"], Ta = /* @__PURE__ */ h("hr", null, null, -1), Na = /* @__PURE__ */ B({
  __name: "Tabs",
  props: {
    tabs: {},
    tabIndex: {}
  },
  emits: ["update:tabIndex"],
  setup(r, { emit: e }) {
    const o = r, s = e, t = b(""), i = k(() => o.tabs.find((n) => c(n) === t.value));
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
    function c(n) {
      return n.slot ?? n.name;
    }
    return (n, d) => (a(), V(f(W), {
      gap: "m",
      style: { "min-width": "0" }
    }, {
      default: w(() => [
        I(f(W), { gap: "0" }, {
          default: w(() => [
            h("div", {
              class: m(n.$style.bar)
            }, [
              (a(!0), v(R, null, G(n.tabs, (l, p) => (a(), v("div", {
                key: c(l),
                class: m([n.$style.tab, t.value === c(l) && n.$style.active, l.disabled && n.$style.disabled]),
                onClick: (y) => t.value = c(l)
              }, [
                h("h5", {
                  class: m(n.$style.tabName)
                }, [
                  $(n.$slots, "tab-title", {
                    i: p,
                    tab: l
                  }, () => [
                    T(A(l.name), 1)
                  ])
                ], 2)
              ], 10, Fa))), 128))
            ], 2),
            Ta
          ]),
          _: 3
        }),
        i.value ? $(n.$slots, i.value.slot ?? "default", {
          key: 0,
          tab: i.value
        }) : C("", !0)
      ]),
      _: 3
    }));
  }
}), Da = "dodo-tabs-bar", Ra = "dodo-tabs-tab", La = "dodo-tabs-tabname", Ha = "dodo-tabs-active", Oa = "dodo-tabs-disabled", Ua = {
  bar: Da,
  tab: Ra,
  tabName: La,
  active: Ha,
  disabled: Oa
}, ja = {
  $style: Ua
}, Nr = /* @__PURE__ */ E(Na, [["__cssModules", ja]]), qa = ["placeholder", "disabled", "maxlength", "type", "name", "autofocus", "autocomplete"], Wa = /* @__PURE__ */ B({
  __name: "TextInput",
  props: /* @__PURE__ */ Ee({
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
    const e = Ae(r, "modelValue");
    return (o, s) => se((a(), v("input", {
      "onUpdate:modelValue": s[0] || (s[0] = (t) => e.value = t),
      class: m(["dodo-formfield", o.error && o.$style.error, o.$style.input]),
      placeholder: o.placeholder,
      disabled: o.disabled,
      maxlength: o.maxlength,
      type: o.type || "text",
      name: o.name,
      autofocus: o.autofocus,
      autocomplete: o.autocomplete
    }, null, 10, qa)), [
      [Xe, e.value]
    ]);
  }
}), Pa = "dodo-textinput-input", Ga = "dodo-textinput-error", Ka = {
  input: Pa,
  error: Ga
}, Ja = {
  $style: Ka
}, Za = /* @__PURE__ */ E(Wa, [["__cssModules", Ja]]), Qa = ["placeholder", "disabled", "name", "autofocus", "rows", "autocomplete"], Xa = /* @__PURE__ */ B({
  __name: "Textarea",
  props: /* @__PURE__ */ Ee({
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
    const e = r, o = Ae(r, "modelValue"), s = b(null), t = b(e.minRows);
    function i() {
      const d = e.maxRows && e.maxRows > 0 ? e.maxRows : 12, l = e.minRows && e.minRows > 0 ? e.minRows : 4, p = s.value;
      if (!p) return l;
      let y = l;
      for (p.style.overflow = "hidden", p.setAttribute("rows", `${y}`); p.scrollHeight > p.offsetHeight && y < d; )
        p.setAttribute("rows", `${++y}`);
      return p.style.overflow = "", y;
    }
    function c() {
      t.value = i(), n.value || window.requestAnimationFrame(c);
    }
    const n = b(!1);
    return x(c), ee(() => {
      n.value = !0;
    }), (d, l) => se((a(), v("textarea", {
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
    }, null, 10, Qa)), [
      [Ie, o.value]
    ]);
  }
}), Ya = "dodo-textarea", xa = "dodo-textarea-error", er = {
  textarea: Ya,
  error: xa
}, or = {
  $style: er
}, Dr = /* @__PURE__ */ E(Xa, [["__cssModules", or]]), tr = /* @__PURE__ */ B({
  __name: "Tooltip",
  props: {
    text: {},
    disabled: { type: Boolean },
    side: {}
  },
  setup(r) {
    const e = r, o = b(!1), s = b(""), t = b(), i = b(), c = ne(), n = k(() => e.disabled || !(e.text || c["tooltip-text"]));
    ee(l);
    async function d() {
      if (o.value || n.value) return;
      o.value = !0, await Ve();
      const p = t.value.getBoundingClientRect(), y = i.value.getBoundingClientRect();
      e.side, p.bottom + y.height < window.innerHeight;
      let S = (p.right + p.left - y.width) / 2, F = p.bottom;
      e.side === "right" ? (S = p.right, F = (p.bottom + p.top - y.height) / 2) : e.side === "top" ? (S = (p.left + p.right - y.width) / 2, F = p.top - y.height) : e.side === "left" && (S = p.left - y.width, F = (p.bottom + p.top - y.height) / 2), F = Math.round(Math.max(Math.min(F, window.innerHeight - y.height), 0)), S = Math.round(Math.max(Math.min(S, window.innerWidth - y.width), 0)), s.value = `left:${S}px;top:${F}px`;
    }
    function l() {
      o.value = !1;
    }
    return (p, y) => (a(), v("div", {
      ref_key: "trigger",
      ref: t,
      class: m(p.$style.trigger),
      onMouseover: d,
      onMouseleave: l
    }, [
      $(p.$slots, "default"),
      o.value ? (a(), V(Be, {
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
              $(p.$slots, "tooltip-text", {}, () => [
                T(A(p.text), 1)
              ])
            ], 2)
          ], 2)
        ], 6)
      ])) : C("", !0)
    ], 34));
  }
}), sr = "dodo-tooltip", lr = "dodo-tooltip-content", nr = "dodo-tooltip-text", ar = "dodo-tooltip-trigger", rr = {
  Tooltip: sr,
  content: lr,
  text: nr,
  trigger: ar
}, ir = {
  $style: rr
}, fe = /* @__PURE__ */ E(tr, [["__cssModules", ir]]);
export {
  pr as Animated,
  mr as Avatar,
  X as Button,
  Ro as Card,
  Me as Checkbox,
  lt as Chip,
  br as ChoiceChips,
  W as Column,
  wr as CrashDialog,
  kr as Datatable,
  Xt as Dialog,
  je as Dropdown,
  ps as FieldOld,
  Mr as FluidGrid,
  Cr as Form,
  Ts as FormItem,
  Sr as Grid,
  U as Icon,
  Zs as MenuItem,
  _r as Modal,
  Br as NavBar,
  _e as NavBarItem,
  Vr as NavBarNew,
  zr as NavItem,
  le as Row,
  fn as ScrollContainer,
  Er as Select,
  Ir as SelectOld,
  Ar as SocialIcon,
  Fr as Spinner,
  Tr as Stepper,
  Nr as Tabs,
  Za as TextInput,
  Dr as Textarea,
  fe as Tooltip,
  $r as ValidationError,
  yr as crashPlugin,
  He as crashServiceKey,
  ke as darkModeSetting,
  Lo as dropdownServiceKey,
  Re as navBarServiceKey,
  fr as parseColor,
  Uo as useCrashService,
  vr as useElementSize,
  hr as useResizeObserver,
  Le as useScreenSize,
  jo as useServiceFactory,
  Ho as useSessionStoredRef,
  te as useTheme,
  gr as useValidation,
  Oo as useWebFont
};
