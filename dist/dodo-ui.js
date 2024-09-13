var Ue = Object.defineProperty;
var je = (i, e, o) => e in i ? Ue(i, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[e] = o;
var $e = (i, e, o) => je(i, typeof e != "symbol" ? e + "" : e, o);
import { defineComponent as B, openBlock as a, createBlock as V, TransitionGroup as qe, withCtx as w, renderSlot as h, Transition as re, computed as C, createElementBlock as v, normalizeClass as m, normalizeStyle as P, Fragment as D, createTextVNode as T, toDisplayString as A, createCommentVNode as M, ref as b, watchEffect as O, createElementVNode as $, useAttrs as We, mergeProps as ie, unref as f, onMounted as x, onBeforeUnmount as ee, watch as K, inject as de, provide as ce, reactive as he, withModifiers as oe, createVNode as I, resolveDynamicComponent as ue, renderList as G, Teleport as Se, nextTick as Be, onUnmounted as Pe, useSlots as le, getCurrentInstance as Ve, withDirectives as se, vShow as Ge, vModelText as ze, vModelSelect as Ke, createStaticVNode as pe, mergeModels as Ie, useModel as Ee, vModelDynamic as Je } from "vue";
const ge = !1, ar = /* @__PURE__ */ B({
  __name: "Animated",
  props: {
    list: { type: Boolean },
    appear: { type: Boolean }
  },
  setup(i) {
    return (e, o) => e.list ? (a(), V(qe, {
      key: 0,
      name: "dodo",
      appear: e.appear,
      css: !ge
    }, {
      default: w(() => [
        h(e.$slots, "default")
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
        h(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"]));
  }
}), Ze = /* @__PURE__ */ B({
  __name: "Avatar",
  props: {
    text: {},
    image: {},
    round: { type: Boolean }
  },
  setup(i) {
    const e = ["info", "warning", "success", "danger"], o = i, s = C(() => {
      let c = o.text.trim();
      const l = /\b\w|[A-Z]/g, d = o.text.match(l);
      return d != null && d.length && (c = d.join("")), c.slice(0, 2).toUpperCase();
    }), t = C(() => {
      const c = e.length, l = r(o.text);
      return `var(--dodo-color-${e[l % c]}`;
    });
    function r(c) {
      let l = 0;
      for (let d = 0; d < c.length; ++d) l = 997 * (l % 1e6) + 11 * c.charCodeAt(d);
      return l;
    }
    return (c, l) => (a(), v("span", {
      class: m([c.$style.Avatar, c.round && c.$style.round]),
      style: P([`--color:${t.value}`, c.image ? `background-image:url(${c.image})` : ""])
    }, [
      c.image ? M("", !0) : (a(), v(D, { key: 0 }, [
        T(A(s.value), 1)
      ], 64))
    ], 6));
  }
}), Qe = "dodo-avatar", Xe = "dodo-avatar-round", Ye = {
  Avatar: Qe,
  round: Xe
}, E = (i, e) => {
  const o = i.__vccOpts || i;
  for (const [s, t] of e)
    o[s] = t;
  return o;
}, xe = {
  $style: Ye
}, rr = /* @__PURE__ */ E(Ze, [["__cssModules", xe]]), eo = (i, e) => {
  const o = i.__vccOpts || i;
  for (const [s, t] of e)
    o[s] = t;
  return o;
}, be = b(), oo = localStorage.getItem("dodotheme"), Ae = b(oo), Fe = b();
if (window.matchMedia) {
  const i = window.matchMedia("(prefers-color-scheme: dark)"), e = () => {
    Fe.value = i.matches ? "dark" : "light";
  };
  i.addEventListener("change", e), e();
}
const to = C(() => be.value === "auto" ? Fe.value : be.value), so = C(() => Ae.value || to.value || "light");
O(() => {
  localStorage.setItem("dodotheme", Ae.value ?? ""), document.body.setAttribute("data-dodotheme", so.value ?? "");
});
const no = /* @__PURE__ */ $("path", {
  stroke: "currentColor",
  fill: "none",
  d: "M 9 1 A 8 8 0 0 1 17 9",
  "stroke-width": "2"
}, null, -1), lo = /* @__PURE__ */ $("path", {
  stroke: "currentColor",
  opacity: "0.33",
  fill: "none",
  d: "M 17 9 A 8 8 0 1 1 9 1",
  "stroke-width": "2"
}, null, -1), ao = [
  no,
  lo
], ro = /* @__PURE__ */ B({
  __name: "Spinner",
  props: {
    color: { default: void 0 },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(i) {
    const e = i, o = C(() => {
      let s = "";
      return e.color === "inherit" ? s += "color:inherit;" : e.color && (s += `color:var(--dodo-color-${e.color});`), s;
    });
    return (s, t) => (a(), v("div", {
      class: m([s.$style.Spinner, s.small && s.$style.small, s.large && s.$style.large])
    }, [
      (a(), v("svg", {
        style: P(o.value),
        viewBox: "0 0 18 18"
      }, ao, 4))
    ], 2));
  }
}), io = "dodo-spinner", co = "dodo-spinner-small", uo = "dodo-spinner-large", po = {
  Spinner: io,
  small: co,
  large: uo
}, mo = {
  $style: po
}, vo = /* @__PURE__ */ eo(ro, [["__cssModules", mo]]), fo = ["disabled", "type"], yo = /* @__PURE__ */ B({
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
  setup(i) {
    const e = i, o = C(() => {
      let l = "";
      return e.color && (l += `--button-color:var(--dodo-color-${e.color});`), l;
    }), s = We(), t = b(!1), r = C(() => e.loading || t.value);
    async function c(l) {
      if (!t.value && typeof s.onClick == "function") {
        const d = s.onClick(l);
        d instanceof Promise && (t.value = !0, await d.finally(() => t.value = !1));
      }
    }
    return (l, d) => (a(), v("button", ie({
      style: o.value,
      disabled: l.disabled,
      type: l.type ?? "button",
      class: [
        l.$style.Button,
        l.$style[e.variant ?? "default"],
        r.value && l.$style.loading,
        l.size && l.$style[l.size],
        l.active && l.$style.active,
        l.square && l.$style.square,
        l.round && l.$style.round
      ]
    }, { ...f(s), onClick: c }), [
      $("div", {
        class: m(l.$style.content)
      }, [
        h(l.$slots, "default")
      ], 2),
      r.value ? (a(), V(f(vo), {
        key: 0,
        small: l.size === "s",
        class: m(l.$style.spinner),
        color: "inherit"
      }, null, 8, ["small", "class"])) : M("", !0)
    ], 16, fo));
  }
}), $o = "dodo-button", ho = "dodo-button-active", go = "dodo-button-loading", bo = "dodo-button-content", wo = "dodo-button-solid", ko = "dodo-button-clear", Mo = "dodo-button-link", Co = "dodo-button-spinner", _o = "dodo-button-s", So = "dodo-button-l", Bo = "dodo-button-square", Vo = "dodo-button-round", zo = {
  Button: $o,
  active: ho,
  loading: go,
  content: bo,
  solid: wo,
  clear: ko,
  link: Mo,
  spinner: Co,
  s: _o,
  l: So,
  square: Bo,
  round: Vo
}, Io = {
  $style: zo
}, X = /* @__PURE__ */ E(yo, [["__cssModules", Io]]), Eo = /* @__PURE__ */ B({
  __name: "Card",
  props: {
    hoverable: { type: Boolean },
    active: { type: Boolean },
    gap: {},
    padding: {}
  },
  setup(i) {
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
      h(o.$slots, "default")
    ], 2));
  }
}), Te = Symbol("NavBarService"), Ao = Symbol("DropdownService");
function ir(i) {
  const e = b(0), o = b(0), s = new ResizeObserver(t);
  function t() {
    var r, c;
    e.value = ((r = i.value) == null ? void 0 : r.clientWidth) ?? 0, o.value = ((c = i.value) == null ? void 0 : c.clientHeight) ?? 0;
  }
  return x(t), O(() => {
    s.disconnect(), i.value && s.observe(i.value), t();
  }), ee(() => {
    s.disconnect();
  }), { width: e, height: o, observer: s };
}
function Ne() {
  const o = b(window.innerWidth), s = b(window.innerHeight), t = C(() => o.value < 600), r = C(() => o.value >= 600 && o.value < 1200), c = C(() => o.value >= 1200);
  function l() {
    o.value = window.innerWidth, s.value = window.innerHeight;
  }
  return x(() => {
    window.addEventListener("resize", l, { passive: !0 });
  }), ee(() => {
    window.removeEventListener("resize", l);
  }), {
    screenSmall: t,
    screenMedium: r,
    screenLarge: c
  };
}
function Fo(i, e) {
  const o = b(e), s = sessionStorage.getItem(i);
  return s && (o.value = JSON.parse(s)), K(o, (t) => {
    sessionStorage.setItem(i, JSON.stringify(t));
  }), o;
}
function To(i) {
  const e = b(!1);
  return x(async () => {
    const o = `font-${i.name}-${i.weight}`;
    let s = document.getElementById(o);
    if (s || (s = document.createElement("link"), s.setAttribute("href", i.href), s.setAttribute("rel", "stylesheet"), s.setAttribute("id", o), document.head.appendChild(s)), !document.fonts) {
      e.value = !0;
      return;
    }
    await document.fonts.ready, e.value = document.fonts.check(`${i.weight} 1em ${i.name}`);
  }), { isReady: e };
}
function dr(i) {
  if (!i.match(/^#\w{6}$/)) throw new Error("Invalid hex color");
  return i.match(/(\w\w)/g).map((e) => parseInt(e, 16)).slice(0, 3);
}
const Re = Symbol(De.name);
function De(i) {
  const e = b(null), o = b(0), s = 1e3;
  function t() {
    e.value = null, o.value = Date.now() + s;
  }
  function r() {
    location.reload();
  }
  function c(l) {
    i.onError && i.onError(l) === !1 || !e.value && o.value < Date.now() && (console.error(l), e.value = l);
  }
  return { ignoreError: t, reloadPage: r, currentError: e, handleCrash: c };
}
function cr(i) {
  return (e) => {
    var t;
    const o = De(i);
    e.provide(Re, o);
    const { errorHandler: s } = e.config;
    e.config.errorHandler = (r, c, l) => {
      if (o.handleCrash(r), s) return s(r, c, l);
    }, (t = i.router) == null || t.onError((r) => {
      o.handleCrash(r);
    }), window.addEventListener("unhandledrejection", (r) => {
      o.handleCrash(r.reason);
    }), window.addEventListener("error", (r) => {
      o.handleCrash(r.error ?? r.message);
    });
  };
}
function No() {
  return de(Re);
}
function ur(i, e) {
  if (typeof ResizeObserver > "u") return {};
  const o = new ResizeObserver(() => e(i.value));
  return O(() => {
    i.value && o.observe(i.value);
  }), ee(() => {
    o.disconnect();
  }), { observer: o };
}
function Ro(i) {
  const e = Symbol("ServiceKey");
  return { createAndProvide: () => {
    const t = i();
    return ce(e, t), t;
  }, injectOptional: () => de(e, void 0) };
}
function te() {
  function i(d) {
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
  function r(d) {
    return d ? "dodo-wrap" : "";
  }
  function c(d) {
    return d ? "dodo-flex" : "";
  }
  function l(d) {
    return d ? "dodo-grow" : "";
  }
  return {
    gapValue: i,
    gap: e,
    padding: o,
    justify: s,
    align: t,
    wrap: r,
    flex: c,
    grow: l,
    theme: ve,
    toggleTheme: Ho
  };
}
const we = b(), Do = localStorage.getItem("dodotheme"), me = b(Do), Le = b();
if (window.matchMedia) {
  const i = window.matchMedia("(prefers-color-scheme: dark)"), e = () => {
    Le.value = i.matches ? "dark" : "light";
  };
  i.addEventListener("change", e), e();
}
const Lo = C(() => we.value === "auto" ? Le.value : we.value), ve = C(() => me.value || Lo.value || "light");
function Ho() {
  me.value = ve.value === "dark" ? "light" : "dark";
}
O(() => {
  localStorage.setItem("dodotheme", me.value ?? ""), document.body.setAttribute("data-dodotheme", ve.value ?? "");
});
class pr extends Error {
  constructor(o, s) {
    super(s);
    $e(this, "name", "ValidationError");
    this.field = o;
  }
}
function mr(i) {
  const e = he(i), o = he({});
  K(e, () => r());
  async function s(n) {
    const p = e[n];
    if (p) {
      const y = p.value, _ = await l(n, y);
      if (_)
        return o[n] = String(_), !1;
    }
    return delete o[n], !0;
  }
  async function t(...n) {
    const p = n.length ? n : Object.keys(e);
    return (await Promise.all(p.map((_) => s(_)))).every((_) => _);
  }
  async function r() {
    return (await Promise.all(Object.keys(o).map((p) => s(p)))).every((p) => p);
  }
  function c() {
    for (const n in o)
      delete o[n];
  }
  async function l(n, p) {
    const y = e[n], _ = y.name ?? d(n);
    if (y.required && !p)
      return `${_} is required`;
    if (y.isEmail && p != null && (typeof p != "string" || !p.includes("@")))
      return `${_} is not valid`;
    if (typeof p == "string") {
      if (y.minLen != null && p.length < y.minLen)
        return `${_} must be at least ${y.minLen} characters`;
      if (y.maxLen != null && p.length > y.maxLen)
        return `${_} must be less than ${y.maxLen} characters`;
    }
    if (y.validators)
      for (const F of y.validators) {
        const z = await F(p, _);
        if (z) return z;
      }
  }
  function d(n) {
    return n.toString().replace(/_/g, " ").replace(/^./, (p) => p.toUpperCase()).replace(/[a-z][A-Z]/g, (p) => `${p[0]} ${p[1]}`);
  }
  return { errors: o, rules: e, validate: t, clearErrors: c };
}
const Oo = ["checked"], Uo = /* @__PURE__ */ B({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean },
    indeterminate: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(i, { emit: e }) {
    const o = i, s = e;
    function t() {
      s("update:modelValue", o.indeterminate || !o.modelValue);
    }
    function r(c) {
      c.target.checked !== o.modelValue && t();
    }
    return (c, l) => (a(), v("span", {
      class: m([c.$style.Checkbox, c.modelValue && c.$style.checked]),
      onClick: oe(t, ["stop"])
    }, [
      I(f(U), {
        name: c.indeterminate ? "indeterminate_check_box" : c.modelValue ? "check_box" : "check_box_outline_blank"
      }, null, 8, ["name"]),
      h(c.$slots, "default"),
      $("input", {
        type: "checkbox",
        checked: c.modelValue,
        onChange: r
      }, null, 40, Oo)
    ], 2));
  }
}), jo = "dodo-checkbox", qo = "dodo-checkbox-checked", Wo = {
  Checkbox: jo,
  checked: qo
}, Po = {
  $style: Wo
}, ke = /* @__PURE__ */ E(Uo, [["__cssModules", Po]]), Go = /* @__PURE__ */ B({
  __name: "Chip",
  props: {
    color: {},
    variant: {}
  },
  setup(i) {
    const e = i, o = C(() => {
      let s = "";
      return e.color && (s += `--chip-color:var(--dodo-color-${e.color});`), s;
    });
    return (s, t) => (a(), V(ue(s.$attrs.onClick ? "button" : "div"), {
      class: m([s.$style.Chip, s.variant === "solid" && s.$style.solid]),
      style: P(o.value)
    }, {
      default: w(() => [
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
}), Ko = "dodo-chip", Jo = "dodo-chip-solid", Zo = "dodo-chip-text", Qo = {
  Chip: Ko,
  solid: Jo,
  text: Zo
}, Xo = {
  $style: Qo
}, Yo = /* @__PURE__ */ E(Go, [["__cssModules", Xo]]), ae = "Outlined", Me = "300", xo = /* @__PURE__ */ B({
  __name: "Icon",
  props: {
    name: {},
    color: {},
    fill: { type: Boolean },
    small: {},
    large: {},
    size: {}
  },
  setup(i) {
    const e = i, o = b(), s = To({
      weight: Me,
      name: `Material Symbols ${ae}`,
      href: `https://fonts.googleapis.com/css2?family=Material+Symbols+${ae}:wght,FILL@${Me},0..1`
    });
    return (t, r) => (a(), v("span", {
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
}), et = "dodo-icon", ot = "dodo-icon-fill", tt = "dodo-icon-xs", st = "dodo-icon-s", nt = "dodo-icon-l", lt = "dodo-icon-xl", at = {
  icon: et,
  fill: ot,
  xs: tt,
  s: st,
  l: nt,
  xl: lt
}, rt = {
  $style: at
}, U = /* @__PURE__ */ E(xo, [["__cssModules", rt]]), it = /* @__PURE__ */ B({
  __name: "ChoiceChips",
  props: {
    options: {},
    modelValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    small: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(i, { emit: e }) {
    const o = i, s = e, t = C(() => o.multiple ? [o.modelValue].flat() : [o.modelValue]);
    function r(d, n) {
      return d.value === n;
    }
    function c(d) {
      return t.value.some((n) => r(d, n));
    }
    function l(d) {
      let n = d.value;
      c(d) && o.multiple ? n = t.value.filter((y) => !r(d, y)) : o.multiple && (n = [...t.value, d.value]), s("update:modelValue", n);
    }
    return (d, n) => (a(), v("div", {
      class: m([d.$style.ChoiceChips, d.multiple && d.$style.multiple])
    }, [
      (a(!0), v(D, null, G(d.options, (p, y) => (a(), V(Yo, {
        key: p.label,
        color: c(p) ? "info" : void 0,
        variant: !d.multiple && c(p) ? "solid" : void 0,
        disabled: d.disabled,
        small: d.small,
        rounded: "",
        onClick: (_) => l(p)
      }, {
        default: w(() => [
          d.multiple && c(p) ? (a(), V(U, {
            key: 0,
            name: "check"
          })) : M("", !0),
          h(d.$slots, "default", {
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
}), dt = "dodo-choicechips", ct = {
  ChoiceChips: dt
}, ut = {
  $style: ct
}, vr = /* @__PURE__ */ E(it, [["__cssModules", ut]]), pt = /* @__PURE__ */ B({
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
  setup(i) {
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
        h(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), mt = "dodo-column-el", vt = {
  el: mt
}, ft = {
  $style: vt
}, W = /* @__PURE__ */ E(pt, [["__cssModules", ft]]), yt = /* @__PURE__ */ $("h3", null, "Something went wrong", -1), Ce = `
  An unexpected error occurred and the application may not function correctly until the page is reloaded.
  Any unsaved changes will be lost if you choose to reload the page.
`, fr = /* @__PURE__ */ B({
  __name: "CrashDialog",
  setup(i) {
    const e = No(), o = C(() => e.currentError.value), s = b(!1);
    return O(() => {
      s.value = !!o.value;
    }), (t, r) => (a(), V(f(Pt), { active: s.value }, {
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
        yt,
        h(t.$slots, "body", {
          error: o.value,
          defaultText: Ce
        }, () => [
          $("p", null, A(Ce))
        ])
      ]),
      _: 3
    }, 8, ["active"]));
  }
}), $t = {
  key: 0,
  style: { width: "0" },
  scope: "col"
}, ht = ["onClick"], gt = ["onClick"], bt = { key: 0 }, wt = /* @__PURE__ */ $("td", { colspan: "999" }, "No results", -1), kt = [
  wt
], Mt = { colspan: "999" }, Ct = { key: 0 }, _t = /* @__PURE__ */ B({
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
  setup(i, { emit: e }) {
    const o = i, s = e, t = b(), r = b([]), c = b(!1);
    O(() => {
      t.value = o.sortValue;
    }), O(() => {
      r.value = o.selection ?? [];
    }), K(t, (u) => {
      s("update:sortValue", u);
    }), K(r, (u) => {
      s("update:selection", u);
    });
    const l = C(() => {
      var u;
      return (u = t.value) == null ? void 0 : u.startsWith("-");
    }), d = C(() => o.columns.filter((u) => !u.disabled)), n = C(() => !!o.selection), p = C(() => {
      const u = d.value.find(_);
      return o.sortAsync || !u ? o.rows : o.rows.slice().sort((g, S) => {
        const R = Z(u, g), q = Z(u, S), ye = typeof R == "number" && typeof q == "number" ? q - R : `${q}`.localeCompare(`${R}`);
        return l.value ? ye : -ye;
      });
    });
    function y(u) {
      if (_(u))
        return l.value ? "arrow_drop_up" : "arrow_drop_down";
    }
    function _(u) {
      var g;
      return ((g = t.value) == null ? void 0 : g.replace("-", "")) === u.sort;
    }
    function F(u) {
      return u.slot || u.name.trim().replace(/\W/g, "");
    }
    function z(u) {
      return !!u.sort;
    }
    function L(u) {
      return u.align ? `text-align:${u.align}` : "";
    }
    function J(u) {
      return u.width ? `width:${u.width}` : "";
    }
    async function N(u) {
      z(u) && (_(u) ? t.value = l.value ? void 0 : "-" + u.sort : t.value = u.sort, o.sortAsync && (c.value = !0, await o.sortAsync(t.value).finally(() => {
        c.value = !1;
      })));
    }
    function H(u) {
      return o.selectBy ? u[o.selectBy] : u;
    }
    function j(u) {
      const g = H(u);
      r.value.includes(g) ? r.value = r.value.filter((S) => S !== g) : r.value = r.value.concat(g);
    }
    function Z(u, g) {
      return typeof u.value == "function" ? u.value(g) : typeof u.value == "string" ? g[u.value] : "";
    }
    function Y(u) {
      if (!n.value) return !1;
      const g = H(u);
      return r.value.includes(g);
    }
    const Q = C(() => n.value ? o.rows.filter((u) => r.value.includes(H(u))) : []);
    function k() {
      const u = Q.value.length === o.rows.length;
      r.value = u ? [] : o.rows.map(H);
    }
    return (u, g) => (a(), v("div", {
      class: m([u.$style.Datatable, u.contentLoading && u.$style.loading])
    }, [
      $("table", null, [
        $("tbody", null, [
          $("tr", {
            class: m(u.stickyHeader && u.$style.stickyHeader)
          }, [
            n.value ? (a(), v("th", $t, [
              I(f(ke), {
                indeterminate: Q.value.length > 0 && Q.value.length < u.rows.length,
                "model-value": Q.value.length > 0 && Q.value.length === u.rows.length,
                "onUpdate:modelValue": k
              }, null, 8, ["indeterminate", "model-value"])
            ])) : M("", !0),
            (a(!0), v(D, null, G(d.value, (S) => (a(), v("th", {
              key: S.name,
              scope: "col",
              class: m([z(S) ? u.$style.sortable : "", _(S) && u.$style.sortActive]),
              style: P([L(S), J(S)]),
              onClick: (R) => N(S)
            }, [
              $("span", {
                class: m(u.$style.colName)
              }, [
                $("span", null, [
                  h(u.$slots, `${F(S)}-header`, { column: S }, () => [
                    T(A(S.name), 1)
                  ])
                ]),
                y(S) ? (a(), V(f(U), {
                  key: 0,
                  name: y(S),
                  class: m(u.$style.sortIcon)
                }, null, 8, ["name", "class"])) : M("", !0)
              ], 2)
            ], 14, ht))), 128))
          ], 2),
          (a(!0), v(D, null, G(p.value, (S, R) => (a(), v("tr", {
            key: R,
            class: m([u.rowClick && u.$style.clickableRow, Y(S) && u.$style.rowSelected]),
            onClick: (q) => u.rowClick && u.rowClick(S)
          }, [
            n.value ? (a(), v("td", bt, [
              I(f(ke), {
                "model-value": Y(S),
                "onUpdate:modelValue": (q) => j(S)
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ])) : M("", !0),
            (a(!0), v(D, null, G(d.value, (q) => (a(), v("td", {
              key: q.name,
              class: m([]),
              style: P(L(q))
            }, [
              h(u.$slots, F(q), {
                row: S,
                column: q
              }, () => [
                T(A(Z(q, S)), 1)
              ])
            ], 4))), 128))
          ], 10, gt))), 128)),
          u.rows.length ? M("", !0) : (a(), v("tr", {
            key: 0,
            class: m(u.$style.noResults)
          }, kt, 2)),
          u.rows.length && u.showMore ? (a(), v("tr", {
            key: 1,
            class: m(u.$style.showMore)
          }, [
            $("td", Mt, [
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
          ], 2)) : M("", !0),
          u.showFooter ? (a(), v("tr", {
            key: 2,
            class: m([u.$style.footer, u.stickyHeader && u.$style.stickyFooter])
          }, [
            n.value ? (a(), v("td", Ct)) : M("", !0),
            (a(!0), v(D, null, G(d.value, (S) => (a(), v("th", {
              key: S.name,
              style: P(L(S)),
              scope: "col"
            }, [
              h(u.$slots, `${F(S)}-footer`, { column: S })
            ], 4))), 128))
          ], 2)) : M("", !0)
        ])
      ])
    ], 2));
  }
}), St = "dodo-datatable", Bt = "dodo-datatable-colname", Vt = "dodo-datatable-sortable", zt = "dodo-datatable-sorticon", It = "dodo-datatable-sortactive", Et = "dodo-datatable-noresults", At = "dodo-datatable-showmore", Ft = "dodo-datatable-clickablerow", Tt = "dodo-datatable-rowselected", Nt = "dodo-datatable-stickyheader", Rt = "dodo-datatable-stickyfooter", Dt = "dodo-datatable-loading", Lt = {
  Datatable: St,
  colName: Bt,
  sortable: Vt,
  sortIcon: zt,
  sortActive: It,
  noResults: Et,
  showMore: At,
  clickableRow: Ft,
  rowSelected: Tt,
  stickyHeader: Nt,
  stickyFooter: Rt,
  loading: Dt
}, Ht = {
  $style: Lt
}, yr = /* @__PURE__ */ E(_t, [["__cssModules", Ht]]), Ot = /* @__PURE__ */ B({
  __name: "Dialog",
  props: {
    active: { type: Boolean }
  },
  setup(i) {
    const e = i, o = b();
    return O(() => {
      e.active && o.value && o.value.parentNode.appendChild(o.value);
    }), (s, t) => (a(), V(Se, { to: "body" }, [
      I(re, { name: "Dialog" }, {
        default: w(() => [
          s.active ? (a(), v("div", {
            key: 0,
            ref_key: "el",
            ref: o,
            class: m([s.$style.Dialog])
          }, [
            $("div", {
              class: m(s.$style.window)
            }, [
              I(f(W), { padding: "m" }, {
                default: w(() => [
                  h(s.$slots, "default")
                ]),
                _: 3
              }),
              I(f(ne), {
                padding: "m",
                justify: "end",
                gap: "s"
              }, {
                default: w(() => [
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
}), Ut = "dodo-dialog", jt = "dodo-dialog-window", qt = {
  Dialog: Ut,
  window: jt,
  "Dialog-enter-active": "dodo-dialog-dialog-enter-active",
  "Dialog-leave-active": "dodo-dialog-dialog-leave-active",
  "Dialog-enter-from": "dodo-dialog-dialog-enter-from",
  "Dialog-leave-to": "dodo-dialog-dialog-leave-to"
}, Wt = {
  $style: qt
}, Pt = /* @__PURE__ */ E(Ot, [["__cssModules", Wt]]), Gt = /* @__PURE__ */ B({
  __name: "Dropdown",
  props: {
    modelValue: { type: Boolean },
    padding: {},
    gap: {},
    disabled: { type: Boolean },
    trigger: {}
  },
  emits: ["update:modelValue"],
  setup(i, { emit: e }) {
    const o = i, s = e, t = b(!1), r = b(""), c = b(), l = b();
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
      t.value !== z && (o.disabled && z || (t.value = z, s("update:modelValue", z), z ? Be().then(() => {
        F(), window.addEventListener("click", _, { passive: !0, capture: !0 });
      }) : window.removeEventListener("click", _, { capture: !0 })));
    }
    function n(z) {
      o.trigger !== "hover" && (d(!t.value), z.preventDefault());
    }
    function p() {
      o.trigger === "hover" && d(!0);
    }
    function y(z) {
      var H, j;
      if (!t.value || o.trigger !== "hover") return;
      const L = z.relatedTarget, J = (H = l.value) == null ? void 0 : H.contains(L), N = (j = c.value) == null ? void 0 : j.contains(L);
      J || N || d(!1);
    }
    function _(z) {
      var L, J;
      if (z.target) {
        const N = (L = l.value) == null ? void 0 : L.contains(z.target), H = (J = c.value) == null ? void 0 : J.contains(z.target);
        if (N || H) return;
      }
      d(!1);
    }
    function F() {
      const L = c.value;
      if (!L) return;
      const J = L.scrollWidth, N = l.value.getBoundingClientRect(), H = window.innerWidth, j = window.innerHeight, Z = N.bottom + 300 + 16 > j, Y = Math.max(16, Math.min(N.left, H - J - 16)), Q = Math.min(600, H - 16 * 2);
      let k = `left: ${Y}px; max-width:${Q}px;`;
      Z ? k += `bottom: ${j - N.top}px; max-height: ${N.top - 16}px;` : k += `top: ${N.bottom}px; max-height: ${j - N.bottom - 16}px;`, r.value = k, t.value && requestAnimationFrame(F);
    }
    return ce(Ao, { toggle: d }), (z, L) => (a(), v(D, null, [
      $("div", ie({
        ref_key: "el",
        ref: l,
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
        style: P(r.value)
      }, [
        $("div", {
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
              h(z.$slots, "dropdown", { toggle: d })
            ]),
            _: 3
          }, 8, ["padding", "gap"])
        ], 34)
      ], 6)) : M("", !0)
    ], 64));
  }
}), Kt = "dodo-dropdown-trigger", Jt = "dodo-dropdown-disabled", Zt = "dodo-dropdown-container", Qt = "dodo-dropdown-content", Xt = {
  trigger: Kt,
  disabled: Jt,
  container: Zt,
  content: Qt
}, Yt = {
  $style: Xt
}, He = /* @__PURE__ */ E(Gt, [["__cssModules", Yt]]), xt = /* @__PURE__ */ B({
  __name: "FieldOld",
  props: {
    disabled: { type: Boolean },
    button: { type: Boolean }
  },
  setup(i) {
    return (e, o) => (a(), v("div", {
      class: m([e.$style.Field, e.disabled && e.$style.disabled, e.button && e.$style.button])
    }, [
      h(e.$slots, "before"),
      $("div", {
        class: m(e.$style.inner)
      }, [
        h(e.$slots, "default")
      ], 2),
      h(e.$slots, "after")
    ], 2));
  }
}), es = "dodo-fieldold-field", os = "dodo-fieldold-button", ts = "dodo-fieldold-inner", ss = "dodo-fieldold-disabled", ns = {
  Field: es,
  button: os,
  inner: ts,
  disabled: ss
}, ls = {
  $style: ns
}, as = /* @__PURE__ */ E(xt, [["__cssModules", ls]]), rs = /* @__PURE__ */ B({
  __name: "FluidGrid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean },
    alignItems: {}
  },
  setup(i) {
    const e = i, o = te(), s = b(), t = b(99999);
    let r = null;
    const c = new ResizeObserver(() => {
      r && clearTimeout(r), r = setTimeout(() => {
        t.value = s.value.clientWidth;
      }, 50);
    });
    x(() => {
      c.observe(s.value);
    }), Pe(() => {
      c.disconnect();
    });
    const l = C(() => e.columnSize >= t.value), d = C(() => {
      let n = `--fluidgrid-size:${e.columnSize}px;`;
      return e.autoFill && (n += "--fluidgrid-mode:auto-fill;"), e.gap && (n += `gap:${o.gapValue(e.gap)};`), e.padding && (n += `padding:${o.gapValue(e.padding)};`), n;
    });
    return (n, p) => (a(), v("div", {
      ref_key: "el",
      ref: s,
      class: m([n.$style.FluidGrid, l.value && n.$style.oneColumn]),
      style: P(d.value)
    }, [
      h(n.$slots, "default")
    ], 6));
  }
}), is = "dodo-fluidgrid", ds = "dodo-fluidgrid-onecolumn", cs = {
  FluidGrid: is,
  oneColumn: ds
}, us = {
  $style: cs
}, $r = /* @__PURE__ */ E(rs, [["__cssModules", us]]), ps = /* @__PURE__ */ B({
  __name: "Form",
  props: {
    gap: {}
  },
  emits: ["submit"],
  setup(i, { emit: e }) {
    const o = e, s = te();
    function t() {
      o("submit");
    }
    return (r, c) => (a(), v("form", {
      class: m([r.$style.form, f(s).gap(r.gap)]),
      onSubmit: oe(t, ["prevent"])
    }, [
      h(r.$slots, "default")
    ], 34));
  }
}), ms = "dodo-form", vs = {
  form: ms
}, fs = {
  $style: vs
}, hr = /* @__PURE__ */ E(ps, [["__cssModules", fs]]), ys = ["data-itemerror"], $s = ["for"], hs = /* @__PURE__ */ B({
  __name: "FormItem",
  props: {
    label: {},
    error: {},
    description: {},
    for: {},
    optional: { type: Boolean }
  },
  setup(i) {
    const e = i, o = le(), s = Ve();
    return x(() => {
      if (!o.default)
        throw new Error("FormEntry requires a default slot");
    }), (t, r) => {
      var c;
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
            for: e.for
          }, A(t.label), 11, $s),
          t.optional ? (a(), v("span", {
            key: 0,
            class: m(t.$style.optional)
          }, "Optional", 2)) : M("", !0)
        ], 2)) : M("", !0),
        h(t.$slots, "default", {
          error: t.error,
          entryId: e.for ? e.for : `form-item-${(c = f(s)) == null ? void 0 : c.uid}`
        }),
        t.error ? (a(), v("div", {
          key: 1,
          class: m(t.$style.error)
        }, [
          $("span", null, A(t.error), 1)
        ], 2)) : M("", !0),
        t.description ? (a(), v("div", {
          key: 2,
          class: m(t.$style.description)
        }, A(t.description), 3)) : M("", !0)
      ], 10, ys);
    };
  }
}), gs = "dodo-formitem-formentry", bs = "dodo-formitem-label", ws = "dodo-formitem-optional", ks = "dodo-formitem-labelrow", Ms = "dodo-formitem-description", Cs = "dodo-formitem-haserror", _s = "dodo-formitem-error", Ss = {
  FormEntry: gs,
  label: bs,
  optional: ws,
  labelRow: ks,
  description: Ms,
  hasError: Cs,
  error: _s
}, Bs = {
  $style: Ss
}, Vs = /* @__PURE__ */ E(hs, [["__cssModules", Bs]]), zs = /* @__PURE__ */ B({
  __name: "Grid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean }
  },
  setup(i) {
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
      h(o.$slots, "default")
    ], 2));
  }
}), Is = "dodo-grid-component", Es = "dodo-grid-autofill", As = {
  component: Is,
  autoFill: Es,
  "col-xs": "dodo-grid-col-xs",
  "col-s": "dodo-grid-col-s",
  "col-m": "dodo-grid-col-m",
  "col-l": "dodo-grid-col-l"
}, Fs = {
  $style: As
}, gr = /* @__PURE__ */ E(zs, [["__cssModules", Fs]]), Ts = {
  key: 0,
  class: "dodo-nowrap dodo-fade-secondary"
}, Ns = /* @__PURE__ */ B({
  __name: "MenuItem",
  props: {
    active: { type: Boolean },
    emphasize: { type: Boolean },
    separator: { type: Boolean }
  },
  setup(i) {
    return (e, o) => (a(), v(D, null, [
      e.separator ? (a(), v("hr", {
        key: 0,
        class: m(e.$style.separator)
      }, null, 2)) : M("", !0),
      $("div", ie(e.$attrs, {
        class: [e.$style.DropdownItem, e.active && e.$style.active, e.emphasize && e.$style.emphasize]
      }), [
        h(e.$slots, "before"),
        I(f(W), {
          gap: "0",
          style: { flex: "1" }
        }, {
          default: w(() => [
            $("p", {
              class: m([e.$style.text, "dodo-nowrap"])
            }, [
              h(e.$slots, "default")
            ], 2),
            e.$slots["text-secondary"] ? (a(), v("p", Ts, [
              h(e.$slots, "text-secondary")
            ])) : M("", !0)
          ]),
          _: 3
        }),
        h(e.$slots, "after")
      ], 16)
    ], 64));
  }
}), Rs = "dodo-menuitem-dropdownitem", Ds = "dodo-menuitem-active", Ls = "dodo-menuitem-emphasize", Hs = "dodo-menuitem-text", Os = "dodo-menuitem-separator", Us = {
  DropdownItem: Rs,
  active: Ds,
  emphasize: Ls,
  text: Hs,
  separator: Os
}, js = {
  $style: Us
}, qs = /* @__PURE__ */ E(Ns, [["__cssModules", js]]), Ws = /* @__PURE__ */ B({
  __name: "Modal",
  props: {
    open: { type: Boolean },
    size: {},
    padding: {},
    gap: {}
  },
  emits: ["close"],
  setup(i, { emit: e }) {
    const o = i, s = e, t = b();
    O(() => {
      var n;
      (n = t.value) == null || n.showModal();
    });
    const r = C(() => o.open);
    K(r, (n) => {
      if (n) {
        const p = window.innerWidth - document.body.clientWidth;
        document.body.style.setProperty("padding-right", `${p}px`), document.body.style.setProperty("overflow", "hidden");
      }
    });
    function c(n) {
      const p = t.value;
      n.target === p && l();
    }
    function l() {
      s("close");
    }
    async function d() {
      document.body.style.removeProperty("padding-right"), document.body.style.removeProperty("overflow");
    }
    return (n, p) => (a(), V(re, {
      appear: "",
      "enter-from-class": n.$style.enter,
      "leave-to-class": n.$style.enter,
      onAfterLeave: d
    }, {
      default: w(() => [
        r.value ? (a(), v("dialog", {
          key: 0,
          ref_key: "dialogElem",
          ref: t,
          class: m(n.$style.background),
          onClick: c,
          onCancel: oe(l, ["prevent"])
        }, [
          I(Eo, {
            class: m([n.$style.modal, n.size && n.$style[n.size]]),
            padding: n.padding,
            gap: n.gap
          }, {
            default: w(() => [
              h(n.$slots, "default", { close: l }, () => [
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
}), Ps = "dodo-modal-background", Gs = "dodo-modal-enter", Ks = "dodo-modal", Js = "dodo-modal-s", Zs = "dodo-modal-l", Qs = {
  background: Ps,
  enter: Gs,
  modal: Ks,
  S: Js,
  L: Zs
}, Xs = {
  $style: Qs
}, br = /* @__PURE__ */ E(Ws, [["__cssModules", Xs]]), Ys = /* @__PURE__ */ B({
  __name: "NavBarItem",
  props: {
    text: {},
    link: {},
    textSecondary: {},
    icon: {},
    active: { type: Boolean },
    important: { type: Boolean }
  },
  setup(i) {
    const e = i, o = le(), s = b(), t = b(!1);
    x(() => {
      t.value = !!s.value.closest("[data-mobile-nav]");
    });
    const r = de(Te), c = C(() => r == null ? void 0 : r.collapsed.value), l = C(() => r == null ? void 0 : r.renderMobile.value), d = C(() => l.value || !c.value);
    async function n(p) {
      r && !o.submenu && (r.mobileToggle.value = !1), e.link && await e.link.navigate();
    }
    return (p, y) => (a(), V(f(fe), {
      text: p.text,
      disabled: d.value,
      side: "right"
    }, {
      default: w(() => [
        (a(), V(ue(p.$slots.submenu ? f(He) : "div"), null, {
          dropdown: w(() => [
            h(p.$slots, "submenu")
          ]),
          default: w(() => {
            var _;
            return [
              $("div", {
                ref_key: "el",
                ref: s,
                class: m([
                  p.$style.NavBarItem,
                  (p.active || ((_ = p.link) == null ? void 0 : _.isActive.value)) && p.$style.active,
                  p.important && p.$style.important,
                  c.value && p.$style.collapsed
                ]),
                onClick: n
              }, [
                p.icon || p.$slots.icon ? (a(), v("div", {
                  key: 0,
                  class: m(p.$style.icon)
                }, [
                  h(p.$slots, "icon", {}, () => [
                    I(f(U), {
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
                  }, A(p.text), 3),
                  p.textSecondary ? (a(), v("p", {
                    key: 0,
                    class: m([p.$style.secondary, "dodo-nowrap"]),
                    color: "background"
                  }, A(p.textSecondary), 3)) : M("", !0)
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
}), xs = "dodo-navbaritem", en = "dodo-navbaritem-active", on = "dodo-navbaritem-important", tn = "dodo-navbaritem-textwrap", sn = "dodo-navbaritem-icon", nn = "dodo-navbaritem-text", ln = "dodo-navbaritem-secondary", an = {
  NavBarItem: xs,
  active: en,
  important: on,
  textwrap: tn,
  icon: sn,
  text: nn,
  secondary: ln
}, rn = {
  $style: an
}, _e = /* @__PURE__ */ E(Ys, [["__cssModules", rn]]), dn = { style: { "margin-right": "8px" } }, cn = /* @__PURE__ */ B({
  __name: "NavBar",
  props: {
    mobile: { type: Boolean }
  },
  setup(i) {
    const e = i, { screenLarge: o } = Ne(), s = Fo("NavBar-collapse", null), t = b(!1), r = C(() => e.mobile || !o.value);
    ce(Te, { collapsed: s, renderMobile: r, mobileToggle: t });
    function c() {
      r.value && (t.value = !1);
    }
    return (l, d) => (a(), v("div", {
      class: m([
        l.$style.root,
        f(s) && l.$style.collapsed,
        t.value && l.$style.mobileToggle,
        r.value && l.$style.mobileMenu
      ]),
      onClick: oe(c, ["self"])
    }, [
      t.value ? (a(), v("div", {
        key: 0,
        class: m(l.$style.backdrop),
        onClick: d[0] || (d[0] = (n) => t.value = !1)
      }, null, 2)) : M("", !0),
      $("div", {
        class: m(l.$style.NavBar)
      }, [
        l.$slots["navbar-header"] ? (a(), v("div", {
          key: 0,
          class: m(l.$style.header)
        }, [
          $("div", null, [
            h(l.$slots, "navbar-header")
          ]),
          $("div", dn, [
            r.value ? (a(), V(f(X), {
              key: 0,
              variant: "link",
              square: "",
              color: "background",
              onClick: d[1] || (d[1] = (n) => t.value = !1)
            }, {
              default: w(() => [
                I(f(U), { name: "close" })
              ]),
              _: 1
            })) : M("", !0)
          ])
        ], 2)) : M("", !0),
        $("div", {
          class: m(l.$style.middle)
        }, [
          h(l.$slots, "default")
        ], 2),
        l.$slots["navbar-footer"] ? (a(), v("div", {
          key: 1,
          class: m(l.$style.footer)
        }, [
          h(l.$slots, "navbar-footer"),
          r.value ? M("", !0) : (a(), V(_e, {
            key: 0,
            text: f(s) ? "Expand" : "Collapse",
            icon: f(s) ? "last_page" : "first_page",
            onClick: d[2] || (d[2] = (n) => s.value = !f(s))
          }, null, 8, ["text", "icon"]))
        ], 2)) : M("", !0)
      ], 2),
      $("div", {
        class: m(l.$style.wrapMobile)
      }, [
        l.$slots.main ? (a(), V(f(W), {
          key: 0,
          class: m(l.$style.main)
        }, {
          default: w(() => [
            h(l.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : M("", !0),
        r.value ? (a(), v("div", {
          key: 1,
          class: m(l.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          h(l.$slots, "default", { inMobileBar: !0 }),
          h(l.$slots, "navbar-footer", { inMobileBar: !0 }),
          I(_e, {
            text: "Menu",
            icon: "menu",
            onClick: d[3] || (d[3] = (n) => t.value = !t.value)
          })
        ], 2)) : M("", !0)
      ], 2)
    ], 2));
  }
}), un = "dodo-navbar-root", pn = "dodo-navbar", mn = "dodo-navbar-collapsed", vn = "dodo-navbar-header", fn = "dodo-navbar-middle", yn = "dodo-navbar-footer", $n = "dodo-navbar-wrapmobile", hn = "dodo-navbar-main", gn = "dodo-navbar-backdrop", bn = "dodo-navbar-mobilemenu", wn = "dodo-navbar-mobiletoggle", kn = "dodo-navbar-mobilenav", Mn = {
  root: un,
  NavBar: pn,
  collapsed: mn,
  header: vn,
  middle: fn,
  footer: yn,
  wrapMobile: $n,
  main: hn,
  backdrop: gn,
  mobileMenu: bn,
  mobileToggle: wn,
  mobileNav: kn
}, Cn = {
  $style: Mn
}, wr = /* @__PURE__ */ E(cn, [["__cssModules", Cn]]), Oe = Ro(() => {
  const i = b([]), e = b(""), o = b([]), s = b(!1);
  return K(i, () => {
    s.value = !1;
  }), { headerText: e, activeItems: i, expandedMenu: o, mobileToggle: s };
}), _n = (i) => {
  const e = Oe.injectOptional(), o = Ve(), s = (n) => n ? [n.uid, ...s(n.parent)] : [], t = (n) => {
    !n || !e || (e.activeItems.value = s(o), e.headerText.value = i.text.value);
  }, r = C(() => e == null ? void 0 : e.headerText.value), c = () => {
    !o || !e || (e.expandedMenu.value.includes(o.uid) ? e.expandedMenu.value = [] : e.expandedMenu.value = s(o));
  }, l = C(() => !o || !e ? !1 : e.activeItems.value.includes(o.uid)), d = C(() => !o || !e ? !1 : e.expandedMenu.value.length ? e.expandedMenu.value.includes(o.uid) : e.activeItems.value.includes(o.uid));
  return K(i.active, () => t(i.active.value), { immediate: !0 }), ee(() => t(!1)), O(() => {
    r.value && (document.title = r.value);
  }), { showAsActive: l, isExpanded: d, toggleExpand: c, headerText: r };
}, Sn = /* @__PURE__ */ B({
  __name: "NavBarNew",
  setup(i) {
    const { headerText: e, mobileToggle: o } = Oe.createAndProvide(), { screenLarge: s } = Ne(), t = C(() => !s.value);
    function r() {
      o.value = !1;
    }
    return (c, l) => (a(), v("div", {
      class: m([c.$style.root, f(o) && c.$style.mobileToggle, t.value && c.$style.mobileMenu]),
      onClick: oe(r, ["self"])
    }, [
      f(o) ? (a(), v("div", {
        key: 0,
        class: m(c.$style.backdrop),
        onClick: l[0] || (l[0] = (d) => o.value = !1)
      }, null, 2)) : M("", !0),
      $("div", {
        class: m(c.$style.NavBar)
      }, [
        $("div", {
          class: m(c.$style.middle)
        }, [
          h(c.$slots, "default")
        ], 2),
        c.$slots["navbar-footer"] ? (a(), v("div", {
          key: 0,
          class: m(c.$style.footer)
        }, [
          h(c.$slots, "navbar-footer")
        ], 2)) : M("", !0)
      ], 2),
      $("div", {
        class: m(c.$style.wrapMobile)
      }, [
        t.value ? (a(), v("div", {
          key: 0,
          class: m(c.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          $("h5", null, A(f(e)), 1),
          I(f(fe), { text: "Toggle menu" }, {
            default: w(() => [
              $("div", {
                class: m(c.$style.menuButton)
              }, [
                I(f(U), {
                  name: "menu",
                  onClick: l[1] || (l[1] = (d) => o.value = !f(o))
                })
              ], 2)
            ]),
            _: 1
          })
        ], 2)) : M("", !0),
        c.$slots.main ? (a(), V(f(W), {
          key: 1,
          class: m(c.$style.main)
        }, {
          default: w(() => [
            h(c.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : M("", !0)
      ], 2)
    ], 2));
  }
}), Bn = "dodo-navbarnew-root", Vn = "dodo-navbarnew-navbar", zn = "dodo-navbarnew-middle", In = "dodo-navbarnew-footer", En = "dodo-navbarnew-wrapmobile", An = "dodo-navbarnew-main", Fn = "dodo-navbarnew-backdrop", Tn = "dodo-navbarnew-menubutton", Nn = "dodo-navbarnew-mobilemenu", Rn = "dodo-navbarnew-mobiletoggle", Dn = "dodo-navbarnew-mobilenav", Ln = {
  root: Bn,
  NavBar: Vn,
  middle: zn,
  footer: In,
  wrapMobile: En,
  main: An,
  backdrop: Fn,
  menuButton: Tn,
  mobileMenu: Nn,
  mobileToggle: Rn,
  mobileNav: Dn
}, Hn = {
  $style: Ln
}, kr = /* @__PURE__ */ E(Sn, [["__cssModules", Hn]]), On = ["href"], Un = { key: 0 }, jn = /* @__PURE__ */ B({
  __name: "NavItem",
  props: {
    link: {},
    text: {},
    textSecondary: {},
    tooltipText: {},
    icon: {},
    important: { type: Boolean }
  },
  setup(i) {
    const e = i, o = C(() => e.link ? f(e.link.isActive) : !1), s = C(() => e.text), { isExpanded: t, showAsActive: r, toggleExpand: c } = _n({ text: s, active: o }), l = le();
    async function d(n) {
      l.submenu && c(), e.link && (await e.link.navigate(), n.preventDefault());
    }
    return (n, p) => (a(), v("div", {
      class: m([n.$style.el])
    }, [
      I(f(fe), {
        text: n.tooltipText,
        side: "right"
      }, {
        default: w(() => {
          var y;
          return [
            $("a", {
              class: m([n.$style.link, f(r) && n.$style.active, n.important && n.$style.important]),
              href: f((y = n.link) == null ? void 0 : y.href),
              onClick: d
            }, [
              $("div", {
                class: m(n.$style.icon)
              }, [
                h(n.$slots, "icon", {}, () => [
                  n.icon ? (a(), V(f(U), {
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
                }, A(s.value), 3),
                n.textSecondary ? (a(), v("p", {
                  key: 0,
                  class: m([n.$style.secondary, "dodo-nowrap"])
                }, A(n.textSecondary), 3)) : M("", !0)
              ], 2),
              f(l).submenu ? (a(), v("div", Un, [
                I(f(U), {
                  name: f(t) ? "keyboard_arrow_up" : "keyboard_arrow_down",
                  size: "s",
                  style: { margin: "0 -0.25em" }
                }, null, 8, ["name"])
              ])) : M("", !0)
            ], 10, On)
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
}), qn = "dodo-navitem-el", Wn = "dodo-navitem-link", Pn = "dodo-navitem-submenu", Gn = "dodo-navitem-expanded", Kn = "dodo-navitem-active", Jn = "dodo-navitem-important", Zn = "dodo-navitem-textwrap", Qn = "dodo-navitem-icon", Xn = "dodo-navitem-text", Yn = "dodo-navitem-secondary", xn = {
  el: qn,
  link: Wn,
  submenu: Pn,
  expanded: Gn,
  active: Kn,
  important: Jn,
  textwrap: Zn,
  icon: Qn,
  text: Xn,
  secondary: Yn
}, el = {
  $style: xn
}, Mr = /* @__PURE__ */ E(jn, [["__cssModules", el]]), ol = /* @__PURE__ */ B({
  __name: "Row",
  props: {
    gap: {},
    padding: {},
    justify: {},
    align: {},
    wrap: { type: Boolean },
    grow: { type: Boolean }
  },
  setup(i) {
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
      h(o.$slots, "default")
    ], 2));
  }
}), tl = "dodo-row-el", sl = {
  el: tl
}, nl = {
  $style: sl
}, ne = /* @__PURE__ */ E(ol, [["__cssModules", nl]]), ll = /* @__PURE__ */ B({
  __name: "ScrollContainer",
  setup(i) {
    const e = C(() => "");
    return (o, s) => (a(), v("div", {
      class: m([o.$style.ScrollContainer]),
      style: P(e.value)
    }, [
      h(o.$slots, "default")
    ], 6));
  }
}), al = "dodo-scrollcontainer", rl = {
  ScrollContainer: al
}, il = {
  $style: rl
}, dl = /* @__PURE__ */ E(ll, [["__cssModules", il]]), cl = {
  key: 0,
  class: "dodo-nowrap"
}, ul = {
  key: 1,
  class: "dodo-nowrap dodo-fade-secondary"
}, pl = ["disabled"], ml = 12, vl = /* @__PURE__ */ B({
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
  setup(i, { emit: e }) {
    const o = i, s = e, t = C(() => (o.multiple ? [o.modelValue].flat() : [o.modelValue]).filter(N)), r = b(!1), c = b(""), l = b(), d = b(), n = b(), p = b();
    O(() => {
      r.value && l.value && (c.value = "", l.value.focus());
    }), O(() => {
      c.value && d.value && d.value.$el.focus();
    }), O(() => {
      r.value && setTimeout(() => {
        var g;
        const k = (g = n.value) == null ? void 0 : g.$el, u = k == null ? void 0 : k.querySelector("[data-selectactive]");
        u == null || u.scrollIntoView({ block: "center" });
      }, 0);
    });
    const y = b(!1), _ = C(() => o.options.length > ml), F = C(() => _.value && !y.value ? 6 : o.options.length), z = C(() => c.value || o.options.length >= 10), L = C(() => {
      const k = c.value.toLowerCase(), u = o.options.filter((R) => `${R.value}|${R.label}`.toLowerCase().includes(k));
      if (!o.multiple) return u;
      const g = u.filter((R) => t.value.find((q) => j(R, q))), S = u.filter((R) => !g.includes(R));
      return g.concat(S);
    }), J = C(() => o.placeholder ? o.placeholder : o.multiple ? "Select one or more" : "Select one");
    function N(k) {
      return o.options.find((u) => j(u, k));
    }
    function H(k) {
      let u = k.value;
      o.multiple ? t.value.includes(u) ? u = t.value.filter((g) => !j(k, g)) : u = t.value.concat(k.value) : r.value = !1, s("update:modelValue", u);
    }
    function j(k, u) {
      return k.value === u;
    }
    function Z(k) {
      return k.label || `${k.value}`;
    }
    function Y(k) {
      return t.value.some((u) => j(k, u));
    }
    function Q(k) {
      var S, R;
      const u = (S = p.value) == null ? void 0 : S.$el.contains(k.target), g = (R = n.value) == null ? void 0 : R.$el.contains(k.target);
      r.value = u || g;
    }
    return x(() => {
      document.addEventListener("focusin", Q);
    }), ee(() => {
      document.removeEventListener("focusin", Q);
    }), (k, u) => k.variant === "buttons" ? (a(), V(f(ne), {
      key: 0,
      gap: "xs",
      wrap: ""
    }, {
      default: w(() => [
        (a(!0), v(D, null, G(k.options.slice(0, F.value), (g, S) => (a(), V(f(X), {
          key: Z(g),
          color: Y(g) ? "info" : void 0,
          active: Y(g),
          variant: Y(g) && !k.multiple ? "solid" : void 0,
          disabled: k.disabled,
          size: k.size,
          round: "",
          onClick: (R) => H(g)
        }, {
          default: w(() => [
            k.multiple && Y(g) ? (a(), V(f(U), {
              key: 0,
              name: "check",
              size: "s",
              style: { margin: "-2px" }
            })) : M("", !0),
            h(k.$slots, "default", {
              option: g,
              index: S
            }, () => [
              T(A(Z(g)), 1)
            ])
          ]),
          _: 2
        }, 1032, ["color", "active", "variant", "disabled", "size", "onClick"]))), 128)),
        _.value ? (a(), v(D, { key: 0 }, [
          y.value ? (a(), V(f(X), {
            key: 0,
            size: k.size,
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
            size: k.size,
            variant: "link",
            round: "",
            onClick: u[1] || (u[1] = (g) => y.value = !y.value)
          }, {
            default: w(() => [
              T(A(k.options.length - F.value) + " more ", 1),
              I(f(U), {
                name: "keyboard_arrow_down",
                size: "s",
                style: { margin: "-2px" }
              })
            ]),
            _: 1
          }, 8, ["size"]))
        ], 64)) : M("", !0)
      ]),
      _: 3
    })) : (a(), V(f(He), {
      key: 1,
      modelValue: r.value,
      "onUpdate:modelValue": u[5] || (u[5] = (g) => r.value = g),
      disabled: k.disabled
    }, {
      dropdown: w(() => [
        I(f(W), {
          ref_key: "dropdownEl",
          ref: n,
          style: { "min-height": "0" },
          gap: "0",
          onMousedown: u[4] || (u[4] = oe(() => {
          }, ["stop", "prevent"]))
        }, {
          default: w(() => [
            se(I(f(ne), {
              padding: "s",
              class: m(k.$style.searchbox)
            }, {
              default: w(() => [
                I(f(qa), {
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
              [Ge, z.value]
            ]),
            I(f(dl), null, {
              default: w(() => [
                (a(!0), v(D, null, G(L.value, (g, S) => (a(), V(f(qs), {
                  key: `${g.value}`,
                  "data-selectactive": t.value.includes(g.value) ? "true" : void 0,
                  active: t.value.includes(g.value),
                  onClick: (R) => H(g)
                }, {
                  default: w(() => [
                    h(k.$slots, "default", {
                      index: S,
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
        I(as, {
          ref_key: "fieldEl",
          ref: p,
          button: "",
          disabled: k.disabled
        }, {
          after: w(() => [
            I(f(U), { name: "arrow_drop_down" })
          ]),
          default: w(() => [
            t.value.length ? (a(), v("p", cl, [
              (a(!0), v(D, null, G(t.value, (g, S) => (a(), v(D, null, [
                S ? (a(), v(D, { key: 0 }, [
                  T(", ")
                ], 64)) : M("", !0),
                N(g) ? h(k.$slots, "default", {
                  key: 1,
                  index: k.options.indexOf(N(g)),
                  option: N(g)
                }, () => [
                  T(A(Z(N(g))), 1)
                ]) : (a(), v(D, { key: 2 }, [
                  T(A(g), 1)
                ], 64))
              ], 64))), 256))
            ])) : (a(), v("p", ul, A(J.value), 1)),
            se($("input", {
              ref_key: "hiddenInput",
              ref: l,
              "onUpdate:modelValue": u[2] || (u[2] = (g) => c.value = g),
              style: { position: "fixed", "pointer-events": "none", opacity: "0" },
              disabled: k.disabled
            }, null, 8, pl), [
              [ze, c.value]
            ])
          ]),
          _: 3
        }, 8, ["disabled"])
      ]),
      _: 3
    }, 8, ["modelValue", "disabled"]));
  }
}), fl = "dodo-selectold-searchbox", yl = {
  searchbox: fl
}, $l = {
  $style: yl
}, Cr = /* @__PURE__ */ E(vl, [["__cssModules", $l]]), hl = ["id", "disabled"], gl = ["value"], bl = /* @__PURE__ */ B({
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
  setup(i, { emit: e }) {
    const o = i, s = e, t = C({
      get: () => o.modelValue,
      set: (r) => s("update:modelValue", r)
    });
    return (r, c) => (a(), V(Vs, {
      class: m(r.error && r.$style.error),
      label: r.label,
      error: r.error,
      description: r.description,
      optional: r.optional,
      for: r.id ?? void 0
    }, {
      default: w(({ entryId: l }) => [
        $("div", {
          class: m(r.$style.select)
        }, [
          se($("select", {
            id: r.id ?? l,
            "onUpdate:modelValue": c[0] || (c[0] = (d) => t.value = d),
            disabled: r.disabled,
            class: m(["dodo-formfield"])
          }, [
            (a(!0), v(D, null, G(r.options, (d) => (a(), v("option", {
              key: d.label,
              value: d.value
            }, A(d.label), 9, gl))), 128))
          ], 8, hl), [
            [Ke, t.value]
          ]),
          $("span", {
            class: m(r.$style.icon)
          }, [
            I(U, { name: "unfold_more" })
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["class", "label", "error", "description", "optional", "for"]));
  }
}), wl = "dodo-simpleselect-select", kl = "dodo-simpleselect-icon", Ml = "dodo-simpleselect-error", Cl = {
  select: wl,
  icon: kl,
  error: Ml
}, _l = {
  $style: Cl
}, _r = /* @__PURE__ */ E(bl, [["__cssModules", _l]]), Sl = {
  key: 0,
  viewBox: "0 0 48 48"
}, Bl = /* @__PURE__ */ pe('<clipPath id="g"><path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path></clipPath><g clip-path="url(#g)"><path fill="#FBBC05" d="M0 37V11l17 13z"></path><path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path><path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path><path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path></g>', 2), Vl = [
  Bl
], zl = {
  key: 1,
  viewBox: "0 0 248 204"
}, Il = /* @__PURE__ */ $("path", {
  id: "white_background",
  fill: "#1D9BF0",
  d: "M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
}, null, -1), El = [
  Il
], Al = {
  key: 2,
  viewBox: "60 60 140 140"
}, Fl = /* @__PURE__ */ pe('<path fill="#E01E5A" d="M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"></path><path fill="#E01E5A" d="M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9V151.2z"></path><path fill="#36C5F0" d="M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"></path><path fill="#36C5F0" d="M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9H118.8z"></path><path fill="#2EB67D" d="M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"></path><path fill="#2EB67D" d="M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9V118.8z"></path><path fill="#ECB22E" d="M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"></path><path fill="#ECB22E" d="M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9H151.2z"></path>', 8), Tl = [
  Fl
], Nl = {
  key: 3,
  viewBox: "2 2 46 46"
}, Rl = /* @__PURE__ */ $("path", { d: "M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" }, null, -1), Dl = [
  Rl
], Ll = {
  key: 4,
  viewBox: "0 0 14222 14222"
}, Hl = /* @__PURE__ */ $("circle", {
  cx: "7111",
  cy: "7112",
  r: "7111",
  fill: "#1977f3"
}, null, -1), Ol = /* @__PURE__ */ $("path", {
  d: "M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z",
  fill: "#fff"
}, null, -1), Ul = [
  Hl,
  Ol
], jl = {
  key: 5,
  viewBox: "0 0 24 24"
}, ql = /* @__PURE__ */ $("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }, null, -1), Wl = [
  ql
], Pl = {
  key: 6,
  viewBox: "6 6 36 36"
}, Gl = /* @__PURE__ */ $("path", {
  fill: "#0288D1",
  d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
}, null, -1), Kl = /* @__PURE__ */ $("path", {
  fill: "#FFF",
  d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
}, null, -1), Jl = [
  Gl,
  Kl
], Zl = {
  key: 7,
  viewBox: "10 10 160 160"
}, Ql = /* @__PURE__ */ pe('<defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"></stop><stop offset="1" stop-color="#23b33a"></stop></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531"></feGaussianBlur></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"></path><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"></path><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"></path><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"></path><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"></path>', 6), Xl = [
  Ql
], Yl = /* @__PURE__ */ B({
  __name: "SocialIcon",
  props: {
    name: {},
    white: { type: Boolean },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(i) {
    return (e, o) => (a(), v("span", {
      class: m([e.$style.SocialIcon, e.small && e.$style.small, e.large && e.$style.large, e.white && e.$style.white])
    }, [
      e.name === "google" ? (a(), v("svg", Sl, Vl)) : e.name === "twitter" ? (a(), v("svg", zl, El)) : e.name === "slack" ? (a(), v("svg", Al, Tl)) : e.white && e.name === "facebook" ? (a(), v("svg", Nl, Dl)) : e.name === "facebook" ? (a(), v("svg", Ll, Ul)) : e.white && e.name === "linkedin" ? (a(), v("svg", jl, Wl)) : e.name === "linkedin" ? (a(), v("svg", Pl, Jl)) : e.name === "whatsapp" ? (a(), v("svg", Zl, Xl)) : M("", !0)
    ], 2));
  }
}), xl = "dodo-socialicon", ea = "dodo-socialicon-white", oa = "dodo-socialicon-small", ta = "dodo-socialicon-large", sa = {
  SocialIcon: xl,
  white: ea,
  small: oa,
  large: ta
}, na = {
  $style: sa
}, Sr = /* @__PURE__ */ E(Yl, [["__cssModules", na]]), la = /* @__PURE__ */ $("path", {
  stroke: "currentColor",
  fill: "none",
  d: "M 9 1 A 8 8 0 0 1 17 9",
  "stroke-width": "2"
}, null, -1), aa = /* @__PURE__ */ $("path", {
  stroke: "currentColor",
  opacity: "0.33",
  fill: "none",
  d: "M 17 9 A 8 8 0 1 1 9 1",
  "stroke-width": "2"
}, null, -1), ra = [
  la,
  aa
], ia = /* @__PURE__ */ B({
  __name: "Spinner",
  props: {
    color: { default: void 0 },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(i) {
    const e = i, o = C(() => {
      let s = "";
      return e.color === "inherit" ? s += "color:inherit;" : e.color && (s += `color:var(--dodo-color-${e.color});`), s;
    });
    return (s, t) => (a(), v("div", {
      class: m([s.$style.Spinner, s.small && s.$style.small, s.large && s.$style.large])
    }, [
      (a(), v("svg", {
        style: P(o.value),
        viewBox: "0 0 18 18"
      }, ra, 4))
    ], 2));
  }
}), da = "dodo-spinner", ca = "dodo-spinner-small", ua = "dodo-spinner-large", pa = {
  Spinner: da,
  small: ca,
  large: ua
}, ma = {
  $style: pa
}, Br = /* @__PURE__ */ E(ia, [["__cssModules", ma]]), va = ["onClick"], fa = {
  key: 1,
  class: "dodo-color-background"
}, ya = { style: {} }, $a = { key: 0 }, ha = {
  key: 1,
  class: "dodo-fade-secondary"
}, ga = {
  key: 0,
  class: "dodo-fade-secondary"
}, ba = /* @__PURE__ */ $("br", null, null, -1), wa = /* @__PURE__ */ B({
  __name: "Stepper",
  props: {
    stepIndex: {},
    steps: {},
    submit: { type: Function },
    completed: {}
  },
  emits: ["update:stepIndex", "submit"],
  setup(i, { emit: e }) {
    const o = i, s = e, t = b(0), r = C(() => o.steps[t.value]);
    function c() {
      t.value--;
    }
    async function l() {
      const n = r.value;
      if (n.filled !== !1 && !(n.validate && !await n.validate())) {
        if (t.value === o.steps.length - 1) {
          await o.submit();
          return;
        }
        t.value++;
      }
    }
    function d(n) {
      n > t.value || (t.value = n);
    }
    return O(() => {
      o.stepIndex != null && (t.value = o.stepIndex);
    }), K(t, () => {
      s("update:stepIndex", t.value);
    }), (n, p) => (a(), V(f(W), {
      class: m(n.$style.stepper)
    }, {
      default: w(() => [
        (a(!0), v(D, null, G(n.steps, (y, _) => (a(), V(f(ne), {
          key: y.key,
          align: "stretch",
          gap: "m",
          class: m(_ > t.value && n.$style.inactiveStep)
        }, {
          default: w(() => [
            I(f(W), { align: "center" }, {
              default: w(() => [
                $("div", {
                  class: m([n.$style.circle]),
                  onClick: (F) => d(_)
                }, [
                  t.value > _ ? (a(), V(f(U), {
                    key: 0,
                    name: "check"
                  })) : (a(), v("h3", fa, A(_ + 1), 1))
                ], 10, va),
                _ < n.steps.length - 1 ? (a(), v("div", {
                  key: 0,
                  class: m(n.$style.line)
                }, null, 2)) : M("", !0)
              ]),
              _: 2
            }, 1024),
            I(f(W), { grow: "" }, {
              default: w(() => [
                I(f(W), {
                  gap: "xs",
                  onClick: (F) => d(_)
                }, {
                  default: w(() => [
                    $("h3", ya, [
                      y === r.value ? (a(), v("span", $a, A(y.name), 1)) : (a(), v("span", ha, A(y.name), 1))
                    ]),
                    y.hint ? (a(), v("p", ga, A(y.hint), 1)) : M("", !0)
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                y === r.value ? (a(), V(f(W), { key: 0 }, {
                  default: w(() => [
                    h(n.$slots, y.slot),
                    I(f(ne), null, {
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
                        })) : M("", !0),
                        t.value < n.steps.length - 1 ? (a(), V(f(X), {
                          key: 1,
                          disabled: y.filled === !1,
                          color: "primary",
                          variant: "solid",
                          onClick: l
                        }, {
                          default: w(() => [
                            h(n.$slots, "continue-button-text", {}, () => [
                              T("Continue")
                            ])
                          ]),
                          _: 2
                        }, 1032, ["disabled"])) : (a(), V(f(X), {
                          key: 2,
                          color: "primary",
                          variant: "solid",
                          onClick: l
                        }, {
                          default: w(() => [
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
                ba
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
}), ka = "dodo-stepper-line", Ma = "dodo-stepper-circle", Ca = "dodo-stepper-inactivestep", _a = {
  line: ka,
  circle: Ma,
  inactiveStep: Ca
}, Sa = {
  $style: _a
}, Vr = /* @__PURE__ */ E(wa, [["__cssModules", Sa]]), Ba = ["onClick"], Va = /* @__PURE__ */ $("hr", null, null, -1), za = /* @__PURE__ */ B({
  __name: "Tabs",
  props: {
    tabs: {},
    tabIndex: {}
  },
  emits: ["update:tabIndex"],
  setup(i, { emit: e }) {
    const o = i, s = e, t = b(""), r = C(() => o.tabs.find((l) => c(l) === t.value));
    O(() => {
      !r.value && o.tabs.length && (t.value = c(o.tabs[0]));
    }), K(
      () => o.tabIndex,
      () => {
        o.tabIndex != null && o.tabs[o.tabIndex] && (t.value = c(o.tabs[o.tabIndex]));
      },
      { immediate: !0 }
    ), K(
      () => r.value,
      () => {
        r.value && s("update:tabIndex", o.tabs.indexOf(r.value));
      },
      { immediate: !0 }
    );
    function c(l) {
      return l.slot ?? l.name;
    }
    return (l, d) => (a(), V(f(W), {
      gap: "m",
      style: { "min-width": "0" }
    }, {
      default: w(() => [
        I(f(W), { gap: "0" }, {
          default: w(() => [
            $("div", {
              class: m(l.$style.bar)
            }, [
              (a(!0), v(D, null, G(l.tabs, (n, p) => (a(), v("div", {
                key: c(n),
                class: m([l.$style.tab, t.value === c(n) && l.$style.active, n.disabled && l.$style.disabled]),
                onClick: (y) => t.value = c(n)
              }, [
                $("h5", {
                  class: m(l.$style.tabName)
                }, [
                  h(l.$slots, "tab-title", {
                    i: p,
                    tab: n
                  }, () => [
                    T(A(n.name), 1)
                  ])
                ], 2)
              ], 10, Ba))), 128))
            ], 2),
            Va
          ]),
          _: 3
        }),
        r.value ? h(l.$slots, r.value.slot ?? "default", {
          key: 0,
          tab: r.value
        }) : M("", !0)
      ]),
      _: 3
    }));
  }
}), Ia = "dodo-tabs-bar", Ea = "dodo-tabs-tab", Aa = "dodo-tabs-tabname", Fa = "dodo-tabs-active", Ta = "dodo-tabs-disabled", Na = {
  bar: Ia,
  tab: Ea,
  tabName: Aa,
  active: Fa,
  disabled: Ta
}, Ra = {
  $style: Na
}, zr = /* @__PURE__ */ E(za, [["__cssModules", Ra]]), Da = ["placeholder", "disabled", "maxlength", "type", "name", "autofocus", "autocomplete"], La = /* @__PURE__ */ B({
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
  setup(i) {
    const e = Ee(i, "modelValue");
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
    }, null, 10, Da)), [
      [Je, e.value]
    ]);
  }
}), Ha = "dodo-textinput-input", Oa = "dodo-textinput-error", Ua = {
  input: Ha,
  error: Oa
}, ja = {
  $style: Ua
}, qa = /* @__PURE__ */ E(La, [["__cssModules", ja]]), Wa = ["placeholder", "disabled", "name", "autofocus", "rows", "autocomplete"], Pa = /* @__PURE__ */ B({
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
  setup(i) {
    const e = i, o = Ee(i, "modelValue"), s = b(null), t = b(e.minRows);
    function r() {
      const d = e.maxRows && e.maxRows > 0 ? e.maxRows : 12, n = e.minRows && e.minRows > 0 ? e.minRows : 4, p = s.value;
      if (!p) return n;
      let y = n;
      for (p.style.overflow = "hidden", p.setAttribute("rows", `${y}`); p.scrollHeight > p.offsetHeight && y < d; )
        p.setAttribute("rows", `${++y}`);
      return p.style.overflow = "", y;
    }
    function c() {
      t.value = r(), l.value || window.requestAnimationFrame(c);
    }
    const l = b(!1);
    return x(c), ee(() => {
      l.value = !0;
    }), (d, n) => se((a(), v("textarea", {
      ref_key: "textarea",
      ref: s,
      "onUpdate:modelValue": n[0] || (n[0] = (p) => o.value = p),
      class: m(["dodo-formfield", d.error && d.$style.error, d.$style.textarea]),
      placeholder: d.placeholder,
      disabled: d.disabled,
      name: d.name,
      autofocus: d.autofocus,
      rows: t.value,
      autocomplete: d.autocomplete,
      resize: "false"
    }, null, 10, Wa)), [
      [ze, o.value]
    ]);
  }
}), Ga = "dodo-textarea", Ka = "dodo-textarea-error", Ja = {
  textarea: Ga,
  error: Ka
}, Za = {
  $style: Ja
}, Ir = /* @__PURE__ */ E(Pa, [["__cssModules", Za]]), Qa = /* @__PURE__ */ B({
  __name: "Tooltip",
  props: {
    text: {},
    disabled: { type: Boolean },
    side: {}
  },
  setup(i) {
    const e = i, o = b(!1), s = b(""), t = b(), r = b(), c = le(), l = C(() => e.disabled || !(e.text || c["tooltip-text"]));
    ee(n);
    async function d() {
      if (o.value || l.value) return;
      o.value = !0, await Be();
      const p = t.value.getBoundingClientRect(), y = r.value.getBoundingClientRect();
      e.side, p.bottom + y.height < window.innerHeight;
      let _ = (p.right + p.left - y.width) / 2, F = p.bottom;
      e.side === "right" ? (_ = p.right, F = (p.bottom + p.top - y.height) / 2) : e.side === "top" ? (_ = (p.left + p.right - y.width) / 2, F = p.top - y.height) : e.side === "left" && (_ = p.left - y.width, F = (p.bottom + p.top - y.height) / 2), F = Math.round(Math.max(Math.min(F, window.innerHeight - y.height), 0)), _ = Math.round(Math.max(Math.min(_, window.innerWidth - y.width), 0)), s.value = `left:${_}px;top:${F}px`;
    }
    function n() {
      o.value = !1;
    }
    return (p, y) => (a(), v("div", {
      ref_key: "trigger",
      ref: t,
      class: m(p.$style.trigger),
      onMouseover: d,
      onMouseleave: n
    }, [
      h(p.$slots, "default"),
      o.value ? (a(), V(Se, {
        key: 0,
        to: "body"
      }, [
        $("div", {
          ref_key: "tooltip",
          ref: r,
          class: m(p.$style.Tooltip),
          style: P(s.value)
        }, [
          $("div", {
            class: m(p.$style.content)
          }, [
            $("small", {
              class: m(p.$style.text)
            }, [
              h(p.$slots, "tooltip-text", {}, () => [
                T(A(p.text), 1)
              ])
            ], 2)
          ], 2)
        ], 6)
      ])) : M("", !0)
    ], 34));
  }
}), Xa = "dodo-tooltip", Ya = "dodo-tooltip-content", xa = "dodo-tooltip-text", er = "dodo-tooltip-trigger", or = {
  Tooltip: Xa,
  content: Ya,
  text: xa,
  trigger: er
}, tr = {
  $style: or
}, fe = /* @__PURE__ */ E(Qa, [["__cssModules", tr]]);
export {
  ar as Animated,
  rr as Avatar,
  X as Button,
  Eo as Card,
  ke as Checkbox,
  Yo as Chip,
  vr as ChoiceChips,
  W as Column,
  fr as CrashDialog,
  yr as Datatable,
  Pt as Dialog,
  He as Dropdown,
  as as FieldOld,
  $r as FluidGrid,
  hr as Form,
  Vs as FormItem,
  gr as Grid,
  U as Icon,
  qs as MenuItem,
  br as Modal,
  wr as NavBar,
  _e as NavBarItem,
  kr as NavBarNew,
  Mr as NavItem,
  ne as Row,
  dl as ScrollContainer,
  _r as Select,
  Cr as SelectOld,
  Sr as SocialIcon,
  Br as Spinner,
  Vr as Stepper,
  zr as Tabs,
  qa as TextInput,
  Ir as Textarea,
  fe as Tooltip,
  pr as ValidationError,
  cr as crashPlugin,
  Re as crashServiceKey,
  we as darkModeSetting,
  Ao as dropdownServiceKey,
  Te as navBarServiceKey,
  dr as parseColor,
  No as useCrashService,
  ir as useElementSize,
  ur as useResizeObserver,
  Ne as useScreenSize,
  Ro as useServiceFactory,
  Fo as useSessionStoredRef,
  te as useTheme,
  mr as useValidation,
  To as useWebFont
};
