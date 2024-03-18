var Te = Object.defineProperty;
var Re = (i, o, e) => o in i ? Te(i, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[o] = e;
var ye = (i, o, e) => (Re(i, typeof o != "symbol" ? o + "" : o, e), e);
import { defineComponent as _, openBlock as a, createBlock as V, TransitionGroup as De, withCtx as b, renderSlot as h, Transition as ie, computed as S, createElementBlock as f, normalizeClass as v, normalizeStyle as G, Fragment as D, createTextVNode as N, toDisplayString as A, createCommentVNode as k, useAttrs as Le, ref as M, mergeProps as ne, unref as y, createElementVNode as $, onMounted as ee, watchEffect as P, onBeforeUnmount as oe, watch as J, inject as de, provide as ce, reactive as $e, withModifiers as le, createVNode as I, resolveDynamicComponent as ue, renderList as W, Teleport as Me, nextTick as Ce, onUnmounted as He, useSlots as ae, getCurrentInstance as Se, withDirectives as te, vShow as Oe, vModelText as Be, vModelSelect as je, createStaticVNode as pe, mergeModels as _e, useModel as Ve, vModelDynamic as qe } from "vue";
const he = !1, La = /* @__PURE__ */ _({
  __name: "Animated",
  props: {
    list: { type: Boolean },
    appear: { type: Boolean }
  },
  setup(i) {
    return (o, e) => o.list ? (a(), V(De, {
      key: 0,
      name: "dodo",
      appear: o.appear,
      css: !he
    }, {
      default: b(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"])) : (a(), V(ie, {
      key: 1,
      appear: o.appear,
      name: "dodo",
      css: !he,
      mode: "out-in"
    }, {
      default: b(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"]));
  }
}), Ue = /* @__PURE__ */ _({
  __name: "Avatar",
  props: {
    text: {},
    image: {},
    round: { type: Boolean }
  },
  setup(i) {
    const o = ["info", "warn", "success", "danger"], e = i, r = Z(), t = S(() => {
      let n = e.text.trim();
      const u = /\b\w|[A-Z]/g, s = e.text.match(u);
      return s != null && s.length && (n = s.join("")), n.slice(0, 2).toUpperCase();
    }), l = S(() => {
      const n = o.length, u = p(e.text), s = o[u % n];
      return r.colorCss(s);
    });
    function p(n) {
      let u = 0;
      for (let s = 0; s < n.length; ++s)
        u = 997 * (u % 1e6) + 11 * n.charCodeAt(s);
      return u;
    }
    return (n, u) => (a(), f("span", {
      class: v([n.$style.Avatar, n.round && n.$style.round]),
      style: G([`--color:${l.value}`, n.image ? `background-image:url(${n.image})` : ""])
    }, [
      n.image ? k("", !0) : (a(), f(D, { key: 0 }, [
        N(A(t.value), 1)
      ], 64))
    ], 6));
  }
}), Pe = "dodo-avatar", We = "dodo-avatar-round", Ge = {
  Avatar: Pe,
  round: We
}, E = (i, o) => {
  const e = i.__vccOpts || i;
  for (const [r, t] of o)
    e[r] = t;
  return e;
}, Ke = {
  $style: Ge
}, Ha = /* @__PURE__ */ E(Ue, [["__cssModules", Ke]]), Je = ["disabled", "type"], Ze = /* @__PURE__ */ _({
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
  setup(i) {
    const o = i, { colorCss: e } = Z(), r = S(() => {
      let n = "";
      return o.color && (n += `--button-color:${e(o.color)};`), n;
    }), t = Le(), l = M(!1);
    async function p(n) {
      if (!l.value && typeof t.onClick == "function") {
        const u = t.onClick(n);
        u instanceof Promise && (l.value = !0, await u.finally(() => {
          l.value = !1;
        }));
      }
    }
    return (n, u) => (a(), f("button", ne({
      style: r.value,
      disabled: n.disabled,
      type: n.type ?? "button",
      class: [
        n.$style.Button,
        n.$style[o.variant ?? "default"],
        l.value && n.$style.loading,
        n.small && n.$style.small,
        n.square && n.$style.square,
        n.active && n.$style.active,
        n.rounded && n.$style.rounded
      ]
    }, { ...y(t), onClick: p }), [
      $("div", {
        class: v(n.$style.content)
      }, [
        h(n.$slots, "default")
      ], 2),
      l.value ? (a(), V(y(Wn), {
        key: 0,
        small: n.small,
        class: v(n.$style.spinner),
        color: "inherit"
      }, null, 8, ["small", "class"])) : k("", !0)
    ], 16, Je));
  }
}), Qe = "dodo-button", Xe = "dodo-button-content", Ye = "dodo-button-solid", xe = "dodo-button-rounded", eo = "dodo-button-text", oo = "dodo-button-loading", to = "dodo-button-spinner", so = "dodo-button-active", lo = "dodo-button-small", no = "dodo-button-square", ao = {
  Button: Qe,
  content: Xe,
  solid: Ye,
  default: "dodo-button-default",
  rounded: xe,
  text: eo,
  loading: oo,
  spinner: to,
  active: so,
  small: lo,
  square: no
}, ro = {
  $style: ao
}, K = /* @__PURE__ */ E(Ze, [["__cssModules", ro]]), io = /* @__PURE__ */ _({
  __name: "Card",
  props: {
    hoverable: { type: Boolean },
    active: { type: Boolean },
    gap: {},
    padding: {}
  },
  setup(i) {
    const o = Z();
    return (e, r) => (a(), f("div", {
      class: v([
        "dodo-card",
        e.hoverable && "dodo-card--hoverable",
        e.active && "dodo-card--active",
        y(o).padding(e.padding),
        y(o).gap(e.gap)
      ])
    }, [
      h(e.$slots, "default")
    ], 2));
  }
}), ze = Symbol("NavBarService"), co = Symbol("DropdownService");
function Oa(i) {
  const o = M(0), e = M(0), r = new ResizeObserver(t);
  function t() {
    var l, p;
    o.value = ((l = i.value) == null ? void 0 : l.clientWidth) ?? 0, e.value = ((p = i.value) == null ? void 0 : p.clientHeight) ?? 0;
  }
  return ee(t), P(() => {
    r.disconnect(), i.value && r.observe(i.value), t();
  }), oe(() => {
    r.disconnect();
  }), { width: o, height: e, observer: r };
}
function Ie() {
  const e = M(window.innerWidth), r = M(window.innerHeight), t = S(() => e.value < 600), l = S(() => e.value >= 600 && e.value < 1200), p = S(() => e.value >= 1200);
  function n() {
    e.value = window.innerWidth, r.value = window.innerHeight;
  }
  return ee(() => {
    window.addEventListener("resize", n, { passive: !0 });
  }), oe(() => {
    window.removeEventListener("resize", n);
  }), {
    screenSmall: t,
    screenMedium: l,
    screenLarge: p
  };
}
function uo(i, o) {
  const e = M(o), r = sessionStorage.getItem(i);
  return r && (e.value = JSON.parse(r)), J(e, (t) => {
    sessionStorage.setItem(i, JSON.stringify(t));
  }), e;
}
function po(i) {
  const o = M(!1);
  return ee(async () => {
    const e = `font-${i.name}-${i.weight}`;
    let r = document.getElementById(e);
    if (r || (r = document.createElement("link"), r.setAttribute("href", i.href), r.setAttribute("rel", "stylesheet"), r.setAttribute("id", e), document.head.appendChild(r)), !document.fonts) {
      o.value = !0;
      return;
    }
    await document.fonts.ready, o.value = document.fonts.check(`${i.weight} 1em ${i.name}`);
  }), { isReady: o };
}
function ja(i) {
  if (!i.match(/^#\w{6}$/))
    throw new Error("Invalid hex color");
  return i.match(/(\w\w)/g).map((o) => parseInt(o, 16)).slice(0, 3);
}
const Ee = Symbol(Ae.name);
function Ae(i) {
  const o = M(null), e = M(0), r = 1e3;
  function t() {
    o.value = null, e.value = Date.now() + r;
  }
  function l() {
    location.reload();
  }
  function p(n) {
    i.onError && i.onError(n) === !1 || !o.value && e.value < Date.now() && (console.error(n), o.value = n);
  }
  return { ignoreError: t, reloadPage: l, currentError: o, handleCrash: p };
}
function qa(i) {
  return (o) => {
    var t;
    const e = Ae(i);
    o.provide(Ee, e);
    const { errorHandler: r } = o.config;
    o.config.errorHandler = (l, p, n) => {
      if (e.handleCrash(l), r)
        return r(l, p, n);
    }, (t = i.router) == null || t.onError((l) => {
      e.handleCrash(l);
    }), window.addEventListener("unhandledrejection", (l) => {
      e.handleCrash(l.reason);
    }), window.addEventListener("error", (l) => {
      e.handleCrash(l.error ?? l.message);
    });
  };
}
function mo() {
  return de(Ee);
}
function Ua(i, o) {
  if (typeof ResizeObserver > "u")
    return {};
  const e = new ResizeObserver(() => o(i.value));
  return P(() => {
    i.value && e.observe(i.value);
  }), oe(() => {
    e.disconnect();
  }), { observer: e };
}
function vo(i) {
  const o = Symbol("ServiceKey");
  return { createAndProvide: () => {
    const t = i();
    return ce(o, t), t;
  }, injectOptional: () => de(o, void 0) };
}
function Z() {
  function i(m) {
    return typeof m == "string" ? `var(--dodo-color-${m})` : `rgb(${m.join(",")})`;
  }
  function o(m) {
    if (m instanceof Array)
      return m;
    const C = getComputedStyle(document.body).getPropertyValue(`--dodo-rgb-${m}`);
    return C ? C.split(",").map(Number) : [0, 0, 0];
  }
  function e(m) {
    return "#" + o(m).map((F) => F.toString(16).padStart(2, "0")).join("");
  }
  function r(m) {
    return `var(--dodo-gap-${m})`;
  }
  function t(m) {
    return m ? `dodo-gap-${m}` : "";
  }
  function l(m) {
    return m ? `dodo-pad-${m}` : "";
  }
  function p(m) {
    return m ? `dodo-justify-${m}` : "";
  }
  function n(m) {
    return m ? `dodo-align-${m}` : "";
  }
  function u(m) {
    return m ? "dodo-wrap" : "";
  }
  function s(m) {
    return m ? "dodo-flex" : "";
  }
  function c(m) {
    return m ? "dodo-grow" : "";
  }
  return {
    colorCss: i,
    gapValue: r,
    colorHexStr: e,
    colorRgbValues: o,
    gap: t,
    padding: l,
    justify: p,
    align: n,
    wrap: u,
    flex: s,
    grow: c
  };
}
class Pa extends Error {
  constructor(e, r) {
    super(r);
    ye(this, "name", "ValidationError");
    this.field = e;
  }
}
function Wa(i) {
  const o = $e(i), e = $e({});
  J(o, () => l());
  async function r(s) {
    const c = o[s];
    if (c) {
      const m = c.value, C = await n(s, m);
      if (C)
        return e[s] = String(C), !1;
    }
    return delete e[s], !0;
  }
  async function t(...s) {
    const c = s.length ? s : Object.keys(o);
    return (await Promise.all(c.map((C) => r(C)))).every((C) => C);
  }
  async function l() {
    return (await Promise.all(Object.keys(e).map((c) => r(c)))).every((c) => c);
  }
  function p() {
    for (const s in e)
      delete e[s];
  }
  async function n(s, c) {
    const m = o[s], C = m.name ?? u(s);
    if (m.required && !c)
      return `${C} is required`;
    if (m.isEmail && c != null && (typeof c != "string" || !c.includes("@")))
      return `${C} is not valid`;
    if (typeof c == "string") {
      if (m.minLen != null && c.length < m.minLen)
        return `${C} must be at least ${m.minLen} characters`;
      if (m.maxLen != null && c.length > m.maxLen)
        return `${C} must be less than ${m.maxLen} characters`;
    }
    if (m.validators)
      for (const F of m.validators) {
        const z = await F(c, C);
        if (z)
          return z;
      }
  }
  function u(s) {
    return s.toString().replace(/_/g, " ").replace(/^./, (c) => c.toUpperCase()).replace(/[a-z][A-Z]/g, (c) => `${c[0]} ${c[1]}`);
  }
  return { errors: e, rules: o, validate: t, clearErrors: p };
}
const fo = ["checked"], yo = /* @__PURE__ */ _({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean },
    indeterminate: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(i, { emit: o }) {
    const e = i, r = o;
    function t() {
      r("update:modelValue", e.indeterminate || !e.modelValue);
    }
    function l(p) {
      p.target.checked !== e.modelValue && t();
    }
    return (p, n) => (a(), f("span", {
      class: v([p.$style.Checkbox, p.modelValue && p.$style.checked]),
      onClick: le(t, ["stop"])
    }, [
      I(y(U), {
        name: p.indeterminate ? "indeterminate_check_box" : p.modelValue ? "check_box" : "check_box_outline_blank"
      }, null, 8, ["name"]),
      h(p.$slots, "default"),
      $("input", {
        type: "checkbox",
        checked: p.modelValue,
        onChange: l
      }, null, 40, fo)
    ], 2));
  }
}), $o = "dodo-checkbox", ho = "dodo-checkbox-checked", go = {
  Checkbox: $o,
  checked: ho
}, bo = {
  $style: go
}, ge = /* @__PURE__ */ E(yo, [["__cssModules", bo]]), wo = /* @__PURE__ */ _({
  __name: "Chip",
  props: {
    color: {}
  },
  setup(i) {
    const o = i, e = Z(), r = S(() => {
      let t = "";
      return o.color && (t += `--chip-color:${e.colorCss(o.color)};`), t;
    });
    return (t, l) => (a(), V(ue(t.$attrs.onClick ? "button" : "div"), {
      class: v(t.$style.Chip),
      style: G(r.value)
    }, {
      default: b(() => [
        h(t.$slots, "before"),
        $("div", {
          class: v(t.$style.text)
        }, [
          h(t.$slots, "default")
        ], 2),
        h(t.$slots, "after")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), ko = "dodo-chip", Mo = "dodo-chip-text", Co = {
  Chip: ko,
  text: Mo
}, So = {
  $style: Co
}, Ga = /* @__PURE__ */ E(wo, [["__cssModules", So]]), Bo = /* @__PURE__ */ _({
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
    const o = Z();
    return (e, r) => (a(), V(ue(e.tag ?? "div"), {
      class: v([
        e.$style.el,
        y(o).gap(e.gap),
        y(o).padding(e.padding),
        y(o).align(e.align),
        y(o).padding(e.padding),
        y(o).wrap(e.wrap),
        y(o).grow(e.grow)
      ])
    }, {
      default: b(() => [
        h(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _o = "dodo-column-el", Vo = {
  el: _o
}, zo = {
  $style: Vo
}, q = /* @__PURE__ */ E(Bo, [["__cssModules", zo]]), Io = /* @__PURE__ */ $("h3", null, "Something went wrong", -1), be = `
  An unexpected error occurred and the application may not function correctly until the page is reloaded.
  Any unsaved changes will be lost if you choose to reload the page.
`, Ka = /* @__PURE__ */ _({
  __name: "CrashDialog",
  setup(i) {
    const o = mo(), e = S(() => o.currentError.value), r = M(!1);
    return P(() => {
      r.value = !!e.value;
    }), (t, l) => (a(), V(y(nt), { active: r.value }, {
      controls: b(() => [
        I(y(K), {
          variant: "text",
          onClick: y(o).ignoreError
        }, {
          default: b(() => [
            N("Ignore")
          ]),
          _: 1
        }, 8, ["onClick"]),
        I(y(K), {
          variant: "solid",
          color: "info",
          onClick: y(o).reloadPage
        }, {
          default: b(() => [
            N("Reload page")
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: b(() => [
        Io,
        h(t.$slots, "body", {
          error: e.value,
          defaultText: be
        }, () => [
          $("p", null, A(be))
        ])
      ]),
      _: 3
    }, 8, ["active"]));
  }
}), Eo = {
  key: 0,
  style: { width: "0" },
  scope: "col"
}, Ao = ["onClick"], Fo = ["onClick"], No = { key: 0 }, To = /* @__PURE__ */ $("td", { colspan: "999" }, "No results", -1), Ro = [
  To
], Do = { colspan: "999" }, Lo = { key: 0 }, Ho = /* @__PURE__ */ _({
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
  setup(i, { emit: o }) {
    const e = i, r = o, t = M(), l = M([]), p = M(!1);
    P(() => {
      t.value = e.sortValue;
    }), P(() => {
      l.value = e.selection ?? [];
    }), J(t, (d) => {
      r("update:sortValue", d);
    }), J(l, (d) => {
      r("update:selection", d);
    });
    const n = S(() => {
      var d;
      return (d = t.value) == null ? void 0 : d.startsWith("-");
    }), u = S(() => e.columns.filter((d) => !d.disabled)), s = S(() => !!e.selection), c = S(() => {
      const d = u.value.find(C);
      return e.sortAsync || !d ? e.rows : e.rows.slice().sort((g, B) => {
        const R = X(d, g), j = X(d, B), fe = typeof R == "number" && typeof j == "number" ? j - R : `${j}`.localeCompare(`${R}`);
        return n.value ? fe : -fe;
      });
    });
    function m(d) {
      if (C(d))
        return n.value ? "arrow_drop_up" : "arrow_drop_down";
    }
    function C(d) {
      var g;
      return ((g = t.value) == null ? void 0 : g.replace("-", "")) === d.sort;
    }
    function F(d) {
      return d.slot || d.name.trim().replace(/\W/g, "");
    }
    function z(d) {
      return !!d.sort;
    }
    function L(d) {
      return d.align ? `text-align:${d.align}` : "";
    }
    function Q(d) {
      return d.width ? `width:${d.width}` : "";
    }
    async function T(d) {
      z(d) && (C(d) ? t.value = n.value ? void 0 : "-" + d.sort : t.value = d.sort, e.sortAsync && (p.value = !0, await e.sortAsync(t.value).finally(() => {
        p.value = !1;
      })));
    }
    function H(d) {
      return e.selectBy ? d[e.selectBy] : d;
    }
    function O(d) {
      const g = H(d);
      l.value.includes(g) ? l.value = l.value.filter((B) => B !== g) : l.value = l.value.concat(g);
    }
    function X(d, g) {
      return typeof d.value == "function" ? d.value(g) : typeof d.value == "string" ? g[d.value] : "";
    }
    function x(d) {
      if (!s.value)
        return !1;
      const g = H(d);
      return l.value.includes(g);
    }
    const Y = S(() => s.value ? e.rows.filter((d) => l.value.includes(H(d))) : []);
    function w() {
      const d = Y.value.length === e.rows.length;
      l.value = d ? [] : e.rows.map(H);
    }
    return (d, g) => (a(), f("div", {
      class: v([d.$style.Datatable, d.contentLoading && d.$style.loading])
    }, [
      $("table", null, [
        $("tbody", null, [
          $("tr", {
            class: v(d.stickyHeader && d.$style.stickyHeader)
          }, [
            s.value ? (a(), f("th", Eo, [
              I(y(ge), {
                indeterminate: Y.value.length > 0 && Y.value.length < d.rows.length,
                "model-value": Y.value.length > 0 && Y.value.length === d.rows.length,
                "onUpdate:modelValue": w
              }, null, 8, ["indeterminate", "model-value"])
            ])) : k("", !0),
            (a(!0), f(D, null, W(u.value, (B) => (a(), f("th", {
              key: B.name,
              scope: "col",
              class: v([z(B) ? d.$style.sortable : "", C(B) && d.$style.sortActive]),
              style: G([L(B), Q(B)]),
              onClick: (R) => T(B)
            }, [
              $("span", {
                class: v(d.$style.colName)
              }, [
                $("span", null, [
                  h(d.$slots, `${F(B)}-header`, { column: B }, () => [
                    N(A(B.name), 1)
                  ])
                ]),
                m(B) ? (a(), V(y(U), {
                  key: 0,
                  name: m(B),
                  class: v(d.$style.sortIcon)
                }, null, 8, ["name", "class"])) : k("", !0)
              ], 2)
            ], 14, Ao))), 128))
          ], 2),
          (a(!0), f(D, null, W(c.value, (B, R) => (a(), f("tr", {
            key: R,
            class: v([d.rowClick && d.$style.clickableRow, x(B) && d.$style.rowSelected]),
            onClick: (j) => d.rowClick && d.rowClick(B)
          }, [
            s.value ? (a(), f("td", No, [
              I(y(ge), {
                "model-value": x(B),
                "onUpdate:modelValue": (j) => O(B)
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ])) : k("", !0),
            (a(!0), f(D, null, W(u.value, (j) => (a(), f("td", {
              key: j.name,
              class: v([]),
              style: G(L(j))
            }, [
              h(d.$slots, F(j), {
                row: B,
                column: j
              }, () => [
                N(A(X(j, B)), 1)
              ])
            ], 4))), 128))
          ], 10, Fo))), 128)),
          d.rows.length ? k("", !0) : (a(), f("tr", {
            key: 0,
            class: v(d.$style.noResults)
          }, Ro, 2)),
          d.rows.length && d.showMore ? (a(), f("tr", {
            key: 1,
            class: v(d.$style.showMore)
          }, [
            $("td", Do, [
              I(y(K), {
                variant: "text",
                color: "info",
                onClick: d.showMore
              }, {
                default: b(() => [
                  N("Show more results")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ], 2)) : k("", !0),
          d.showFooter ? (a(), f("tr", {
            key: 2,
            class: v([d.$style.footer, d.stickyHeader && d.$style.stickyFooter])
          }, [
            s.value ? (a(), f("td", Lo)) : k("", !0),
            (a(!0), f(D, null, W(u.value, (B) => (a(), f("th", {
              key: B.name,
              style: G(L(B)),
              scope: "col"
            }, [
              h(d.$slots, `${F(B)}-footer`, { column: B })
            ], 4))), 128))
          ], 2)) : k("", !0)
        ])
      ])
    ], 2));
  }
}), Oo = "dodo-datatable", jo = "dodo-datatable-colname", qo = "dodo-datatable-sortable", Uo = "dodo-datatable-sorticon", Po = "dodo-datatable-sortactive", Wo = "dodo-datatable-noresults", Go = "dodo-datatable-showmore", Ko = "dodo-datatable-clickablerow", Jo = "dodo-datatable-rowselected", Zo = "dodo-datatable-stickyheader", Qo = "dodo-datatable-stickyfooter", Xo = "dodo-datatable-loading", Yo = {
  Datatable: Oo,
  colName: jo,
  sortable: qo,
  sortIcon: Uo,
  sortActive: Po,
  noResults: Wo,
  showMore: Go,
  clickableRow: Ko,
  rowSelected: Jo,
  stickyHeader: Zo,
  stickyFooter: Qo,
  loading: Xo
}, xo = {
  $style: Yo
}, Ja = /* @__PURE__ */ E(Ho, [["__cssModules", xo]]), et = /* @__PURE__ */ _({
  __name: "Dialog",
  props: {
    active: { type: Boolean }
  },
  setup(i) {
    const o = i, e = M();
    return P(() => {
      o.active && e.value && e.value.parentNode.appendChild(e.value);
    }), (r, t) => (a(), V(Me, { to: "body" }, [
      I(ie, { name: "Dialog" }, {
        default: b(() => [
          r.active ? (a(), f("div", {
            key: 0,
            ref_key: "el",
            ref: e,
            class: v([r.$style.Dialog])
          }, [
            $("div", {
              class: v(r.$style.window)
            }, [
              I(y(q), { padding: "4" }, {
                default: b(() => [
                  h(r.$slots, "default")
                ]),
                _: 3
              }),
              I(y(se), {
                padding: "4",
                justify: "end",
                gap: "2"
              }, {
                default: b(() => [
                  h(r.$slots, "controls")
                ]),
                _: 3
              })
            ], 2)
          ], 2)) : k("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ot = "dodo-dialog", tt = "dodo-dialog-window", st = {
  Dialog: ot,
  window: tt,
  "Dialog-enter-active": "dodo-dialog-dialog-enter-active",
  "Dialog-leave-active": "dodo-dialog-dialog-leave-active",
  "Dialog-enter-from": "dodo-dialog-dialog-enter-from",
  "Dialog-leave-to": "dodo-dialog-dialog-leave-to"
}, lt = {
  $style: st
}, nt = /* @__PURE__ */ E(et, [["__cssModules", lt]]), at = /* @__PURE__ */ _({
  __name: "Dropdown",
  props: {
    modelValue: { type: Boolean },
    padding: {},
    gap: {},
    disabled: { type: Boolean },
    trigger: {}
  },
  emits: ["update:modelValue"],
  setup(i, { emit: o }) {
    const e = i, r = o, t = M(!1), l = M(""), p = M(), n = M();
    J(
      () => e.modelValue,
      () => {
        u(!!e.modelValue);
      },
      { immediate: !0 }
    ), oe(() => {
      u(!1);
    });
    function u(z) {
      t.value !== z && (e.disabled && z || (t.value = z, r("update:modelValue", z), z ? Ce().then(() => {
        F(), window.addEventListener("click", C, { passive: !0, capture: !0 });
      }) : window.removeEventListener("click", C, { capture: !0 })));
    }
    function s(z) {
      e.trigger !== "hover" && (u(!t.value), z.preventDefault());
    }
    function c() {
      e.trigger === "hover" && u(!0);
    }
    function m(z) {
      var H, O;
      if (!t.value || e.trigger !== "hover")
        return;
      const L = z.relatedTarget, Q = (H = n.value) == null ? void 0 : H.contains(L), T = (O = p.value) == null ? void 0 : O.contains(L);
      Q || T || u(!1);
    }
    function C(z) {
      var L, Q;
      if (z.target) {
        const T = (L = n.value) == null ? void 0 : L.contains(z.target), H = (Q = p.value) == null ? void 0 : Q.contains(z.target);
        if (T || H)
          return;
      }
      u(!1);
    }
    function F() {
      const L = p.value;
      if (!L)
        return;
      const Q = L.scrollWidth, T = n.value.getBoundingClientRect(), H = window.innerWidth, O = window.innerHeight, X = T.bottom + 300 + 16 > O, x = Math.max(16, Math.min(T.left, H - Q - 16)), Y = Math.min(600, H - 16 * 2);
      let w = `left: ${x}px; max-width:${Y}px;`;
      X ? w += `bottom: ${O - T.top}px; max-height: ${T.top - 16}px;` : w += `top: ${T.bottom}px; max-height: ${O - T.bottom - 16}px;`, l.value = w, t.value && requestAnimationFrame(F);
    }
    return ce(co, { toggle: u }), (z, L) => (a(), f(D, null, [
      $("div", ne({
        ref_key: "el",
        ref: n,
        class: [z.$style.trigger, z.disabled && z.$style.disabled]
      }, z.$attrs, {
        onClick: s,
        onMouseover: c,
        onMouseleave: m
      }), [
        h(z.$slots, "default", { isActive: t.value })
      ], 16),
      t.value ? (a(), f("div", {
        key: 0,
        class: v([z.$style.container]),
        style: G(l.value)
      }, [
        $("div", {
          ref_key: "content",
          ref: p,
          class: v(z.$style.content),
          onMouseleave: m
        }, [
          I(y(q), {
            padding: z.padding ?? "2",
            gap: z.gap ?? "2"
          }, {
            default: b(() => [
              h(z.$slots, "dropdown", { toggle: u })
            ]),
            _: 3
          }, 8, ["padding", "gap"])
        ], 34)
      ], 6)) : k("", !0)
    ], 64));
  }
}), rt = "dodo-dropdown-trigger", it = "dodo-dropdown-disabled", dt = "dodo-dropdown-container", ct = "dodo-dropdown-content", ut = {
  trigger: rt,
  disabled: it,
  container: dt,
  content: ct
}, pt = {
  $style: ut
}, Fe = /* @__PURE__ */ E(at, [["__cssModules", pt]]), mt = /* @__PURE__ */ _({
  __name: "Field",
  props: {
    disabled: { type: Boolean },
    button: { type: Boolean }
  },
  setup(i) {
    return (o, e) => (a(), f("div", {
      class: v([o.$style.Field, o.disabled && o.$style.disabled, o.button && o.$style.button])
    }, [
      h(o.$slots, "before"),
      $("div", {
        class: v(o.$style.inner)
      }, [
        h(o.$slots, "default")
      ], 2),
      h(o.$slots, "after")
    ], 2));
  }
}), vt = "dodo-field", ft = "dodo-field-button", yt = "dodo-field-inner", $t = "dodo-field-disabled", ht = {
  Field: vt,
  button: ft,
  inner: yt,
  disabled: $t
}, gt = {
  $style: ht
}, bt = /* @__PURE__ */ E(mt, [["__cssModules", gt]]), wt = /* @__PURE__ */ _({
  __name: "FluidGrid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean },
    alignItems: {}
  },
  setup(i) {
    const o = i, e = Z(), r = M(), t = M(99999);
    let l = null;
    const p = new ResizeObserver(() => {
      l && clearTimeout(l), l = setTimeout(() => {
        t.value = r.value.clientWidth;
      }, 50);
    });
    ee(() => {
      p.observe(r.value);
    }), He(() => {
      p.disconnect();
    });
    const n = S(() => o.columnSize >= t.value), u = S(() => {
      let s = `--fluidgrid-size:${o.columnSize}px;`;
      return o.autoFill && (s += "--fluidgrid-mode:auto-fill;"), o.gap && (s += `gap:${e.gapValue(o.gap)};`), o.padding && (s += `padding:${e.gapValue(o.padding)};`), s;
    });
    return (s, c) => (a(), f("div", {
      ref_key: "el",
      ref: r,
      class: v([s.$style.FluidGrid, n.value && s.$style.oneColumn]),
      style: G(u.value)
    }, [
      h(s.$slots, "default")
    ], 6));
  }
}), kt = "dodo-fluidgrid", Mt = "dodo-fluidgrid-onecolumn", Ct = {
  FluidGrid: kt,
  oneColumn: Mt
}, St = {
  $style: Ct
}, Za = /* @__PURE__ */ E(wt, [["__cssModules", St]]), Bt = /* @__PURE__ */ _({
  __name: "Form",
  props: {
    gap: {}
  },
  emits: ["submit"],
  setup(i, { emit: o }) {
    const e = o, r = Z();
    function t() {
      e("submit");
    }
    return (l, p) => (a(), f("form", {
      class: v([l.$style.form, y(r).gap(l.gap)]),
      onSubmit: le(t, ["prevent"])
    }, [
      h(l.$slots, "default")
    ], 34));
  }
}), _t = "dodo-form", Vt = {
  form: _t
}, zt = {
  $style: Vt
}, Qa = /* @__PURE__ */ E(Bt, [["__cssModules", zt]]), It = ["for"], Et = /* @__PURE__ */ _({
  __name: "FormItem",
  props: {
    label: {},
    error: {},
    description: {},
    for: {},
    optional: { type: Boolean }
  },
  setup(i) {
    const o = i, e = ae(), r = Se();
    return ee(() => {
      if (!e.default)
        throw new Error("FormEntry requires a default slot");
    }), (t, l) => {
      var p;
      return a(), f("div", {
        class: v([t.$style.FormEntry, t.error && t.$style.hasError])
      }, [
        t.label ? (a(), f("div", {
          key: 0,
          class: v(t.$style.labelRow)
        }, [
          $("label", {
            class: v(t.$style.label),
            for: o.for
          }, A(t.label), 11, It),
          t.optional ? (a(), f("span", {
            key: 0,
            class: v(t.$style.optional)
          }, "Optional", 2)) : k("", !0)
        ], 2)) : k("", !0),
        h(t.$slots, "default", {
          error: t.error,
          entryId: o.for ? o.for : `form-item-${(p = y(r)) == null ? void 0 : p.uid}`
        }),
        t.error ? (a(), f("div", {
          key: 1,
          class: v(t.$style.error)
        }, [
          $("span", null, A(t.error), 1)
        ], 2)) : k("", !0),
        t.description ? (a(), f("div", {
          key: 2,
          class: v(t.$style.description)
        }, A(t.description), 3)) : k("", !0)
      ], 2);
    };
  }
}), At = "dodo-formitem-formentry", Ft = "dodo-formitem-label", Nt = "dodo-formitem-optional", Tt = "dodo-formitem-labelrow", Rt = "dodo-formitem-description", Dt = "dodo-formitem-haserror", Lt = "dodo-formitem-error", Ht = {
  FormEntry: At,
  label: Ft,
  optional: Nt,
  labelRow: Tt,
  description: Rt,
  hasError: Dt,
  error: Lt
}, Ot = {
  $style: Ht
}, me = /* @__PURE__ */ E(Et, [["__cssModules", Ot]]), jt = /* @__PURE__ */ _({
  __name: "Grid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean }
  },
  setup(i) {
    const o = Z();
    return (e, r) => (a(), f("div", {
      class: v([
        e.$style.component,
        e.$style[`col-${e.columnSize}`],
        e.autoFill && e.$style.autoFill,
        y(o).gap(e.gap),
        y(o).padding(e.padding)
      ])
    }, [
      h(e.$slots, "default")
    ], 2));
  }
}), qt = "dodo-grid-component", Ut = "dodo-grid-autofill", Pt = {
  component: qt,
  autoFill: Ut,
  "col-xs": "dodo-grid-col-xs",
  "col-s": "dodo-grid-col-s",
  "col-m": "dodo-grid-col-m",
  "col-l": "dodo-grid-col-l"
}, Wt = {
  $style: Pt
}, Xa = /* @__PURE__ */ E(jt, [["__cssModules", Wt]]), re = "Outlined", we = "300", Gt = /* @__PURE__ */ _({
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
    const o = i, e = Z(), r = M(), t = po({
      weight: we,
      name: `Material Symbols ${re}`,
      href: `https://fonts.googleapis.com/css2?family=Material+Symbols+${re}:wght,FILL@${we},0..1`
    });
    return (l, p) => (a(), f("span", {
      ref_key: "el",
      ref: r,
      style: G([l.color ? `color: ${y(e).colorCss(l.color)};` : "", y(t).isReady ? "" : "visibility:hidden"]),
      class: v([
        l.$style.icon,
        "material-symbols-" + re.toLowerCase(),
        o.size && l.$style[o.size],
        o.fill && l.$style.fill
      ])
    }, A(l.name), 7));
  }
}), Kt = "dodo-icon", Jt = "dodo-icon-fill", Zt = "dodo-icon-xs", Qt = "dodo-icon-s", Xt = "dodo-icon-l", Yt = "dodo-icon-xl", xt = {
  icon: Kt,
  fill: Jt,
  xs: Zt,
  s: Qt,
  l: Xt,
  xl: Yt
}, es = {
  $style: xt
}, U = /* @__PURE__ */ E(Gt, [["__cssModules", es]]), os = ["id", "value", "placeholder", "disabled", "maxlength", "type", "name", "autofocus"], Ya = /* @__PURE__ */ _({
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
  setup(i, { emit: o }) {
    const e = M(null), r = o;
    function t() {
      r("update:modelValue", e.value.value);
    }
    return (l, p) => (a(), f("input", {
      id: l.id ?? void 0,
      ref_key: "el",
      ref: e,
      value: l.modelValue,
      class: "dodo-formfield dodo-input",
      placeholder: l.placeholder,
      disabled: l.disabled,
      maxlength: l.maxlength,
      type: l.type,
      name: l.name,
      autofocus: l.autofocus,
      onInput: t
    }, null, 40, os));
  }
}), ts = ["for"], ss = { class: "dodo-label-text" }, ls = {
  key: 0,
  class: "dodo-color-danger"
}, ns = {
  key: 1,
  class: "dodo-fade-secondary"
}, xa = /* @__PURE__ */ _({
  __name: "Label",
  props: {
    text: {},
    for: {},
    error: {},
    hint: {},
    required: { type: Boolean }
  },
  setup(i) {
    const o = i;
    return (e, r) => (a(), f("label", {
      class: v(["dodo-label", e.error && "dodo-label--error"]),
      for: o.for
    }, [
      $("span", ss, A(e.text), 1),
      h(e.$slots, "default"),
      e.error ? (a(), f("small", ls, A(e.error), 1)) : e.hint ? (a(), f("small", ns, A(e.hint), 1)) : k("", !0)
    ], 10, ts));
  }
}), as = {
  key: 0,
  class: "dodo-nowrap dodo-fade-secondary"
}, rs = /* @__PURE__ */ _({
  __name: "MenuItem",
  props: {
    active: { type: Boolean },
    emphasize: { type: Boolean },
    separator: { type: Boolean }
  },
  setup(i) {
    return (o, e) => (a(), f(D, null, [
      o.separator ? (a(), f("hr", {
        key: 0,
        class: v(o.$style.separator)
      }, null, 2)) : k("", !0),
      $("div", ne(o.$attrs, {
        class: [o.$style.DropdownItem, o.active && o.$style.active, o.emphasize && o.$style.emphasize]
      }), [
        h(o.$slots, "before"),
        I(y(q), {
          gap: "0",
          style: { flex: "1" }
        }, {
          default: b(() => [
            $("p", {
              class: v([o.$style.text, "dodo-nowrap"])
            }, [
              h(o.$slots, "default")
            ], 2),
            o.$slots["text-secondary"] ? (a(), f("p", as, [
              h(o.$slots, "text-secondary")
            ])) : k("", !0)
          ]),
          _: 3
        }),
        h(o.$slots, "after")
      ], 16)
    ], 64));
  }
}), is = "dodo-menuitem-dropdownitem", ds = "dodo-menuitem-active", cs = "dodo-menuitem-emphasize", us = "dodo-menuitem-text", ps = "dodo-menuitem-separator", ms = {
  DropdownItem: is,
  active: ds,
  emphasize: cs,
  text: us,
  separator: ps
}, vs = {
  $style: ms
}, fs = /* @__PURE__ */ E(rs, [["__cssModules", vs]]), ys = /* @__PURE__ */ _({
  __name: "Modal",
  props: {
    open: { type: Boolean },
    size: {},
    padding: {},
    gap: {}
  },
  emits: ["close"],
  setup(i, { emit: o }) {
    const e = i, r = o, t = M();
    P(() => {
      var s;
      (s = t.value) == null || s.showModal();
    });
    const l = S(() => e.open);
    J(l, (s) => {
      if (s) {
        const c = window.innerWidth - document.body.clientWidth;
        document.body.style.setProperty("padding-right", `${c}px`), document.body.style.setProperty("overflow", "hidden");
      }
    });
    function p(s) {
      const c = t.value;
      s.target === c && n();
    }
    function n() {
      r("close");
    }
    async function u() {
      document.body.style.removeProperty("padding-right"), document.body.style.removeProperty("overflow");
    }
    return (s, c) => (a(), V(ie, {
      appear: "",
      "enter-from-class": s.$style.enter,
      "leave-to-class": s.$style.enter,
      onAfterLeave: u
    }, {
      default: b(() => [
        l.value ? (a(), f("dialog", {
          key: 0,
          ref_key: "dialogElem",
          ref: t,
          class: v(s.$style.background),
          onClick: p
        }, [
          I(io, {
            class: v([s.$style.modal, s.size && s.$style[s.size]]),
            padding: s.padding,
            gap: s.gap
          }, {
            default: b(() => [
              h(s.$slots, "default", { close: n }, () => [
                N("Modal slot")
              ])
            ]),
            _: 3
          }, 8, ["class", "padding", "gap"])
        ], 2)) : k("", !0)
      ]),
      _: 3
    }, 8, ["enter-from-class", "leave-to-class"]));
  }
}), $s = "dodo-modal-background", hs = "dodo-modal-enter", gs = "dodo-modal", bs = "dodo-modal-s", ws = "dodo-modal-l", ks = {
  background: $s,
  enter: hs,
  modal: gs,
  S: bs,
  L: ws
}, Ms = {
  $style: ks
}, er = /* @__PURE__ */ E(ys, [["__cssModules", Ms]]), Cs = /* @__PURE__ */ _({
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
    const o = i, e = ae(), r = M(), t = M(!1);
    ee(() => {
      t.value = !!r.value.closest("[data-mobile-nav]");
    });
    const l = de(ze), p = S(() => l == null ? void 0 : l.collapsed.value), n = S(() => l == null ? void 0 : l.renderMobile.value), u = S(() => n.value || !p.value);
    async function s(c) {
      l && !e.submenu && (l.mobileToggle.value = !1), o.link && await o.link.navigate();
    }
    return (c, m) => (a(), V(y(ve), {
      text: c.text,
      disabled: u.value,
      side: "right"
    }, {
      default: b(() => [
        (a(), V(ue(c.$slots.submenu ? y(Fe) : "div"), null, {
          dropdown: b(() => [
            h(c.$slots, "submenu")
          ]),
          default: b(() => {
            var C;
            return [
              $("div", {
                ref_key: "el",
                ref: r,
                class: v([
                  c.$style.NavBarItem,
                  (c.active || ((C = c.link) == null ? void 0 : C.isActive.value)) && c.$style.active,
                  c.important && c.$style.important,
                  p.value && c.$style.collapsed
                ]),
                onClick: s
              }, [
                c.icon || c.$slots.icon ? (a(), f("div", {
                  key: 0,
                  class: v(c.$style.icon)
                }, [
                  h(c.$slots, "icon", {}, () => [
                    I(y(U), {
                      name: c.icon
                    }, null, 8, ["name"])
                  ])
                ], 2)) : k("", !0),
                $("div", {
                  class: v(c.$style.textwrap)
                }, [
                  $("p", {
                    class: v([c.$style.text, "dodo-nowrap"]),
                    color: "background"
                  }, A(c.text), 3),
                  c.textSecondary ? (a(), f("p", {
                    key: 0,
                    class: v([c.$style.secondary, "dodo-nowrap"]),
                    color: "background"
                  }, A(c.textSecondary), 3)) : k("", !0)
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
}), Ss = "dodo-navbaritem", Bs = "dodo-navbaritem-active", _s = "dodo-navbaritem-important", Vs = "dodo-navbaritem-textwrap", zs = "dodo-navbaritem-icon", Is = "dodo-navbaritem-text", Es = "dodo-navbaritem-secondary", As = {
  NavBarItem: Ss,
  active: Bs,
  important: _s,
  textwrap: Vs,
  icon: zs,
  text: Is,
  secondary: Es
}, Fs = {
  $style: As
}, ke = /* @__PURE__ */ E(Cs, [["__cssModules", Fs]]), Ns = { style: { "margin-right": "8px" } }, Ts = /* @__PURE__ */ _({
  __name: "NavBar",
  props: {
    mobile: { type: Boolean }
  },
  setup(i) {
    const o = i, { screenLarge: e } = Ie(), r = uo("NavBar-collapse", null), t = M(!1), l = S(() => o.mobile || !e.value);
    ce(ze, { collapsed: r, renderMobile: l, mobileToggle: t });
    function p() {
      l.value && (t.value = !1);
    }
    return (n, u) => (a(), f("div", {
      class: v([
        n.$style.root,
        y(r) && n.$style.collapsed,
        t.value && n.$style.mobileToggle,
        l.value && n.$style.mobileMenu
      ]),
      onClick: le(p, ["self"])
    }, [
      t.value ? (a(), f("div", {
        key: 0,
        class: v(n.$style.backdrop),
        onClick: u[0] || (u[0] = (s) => t.value = !1)
      }, null, 2)) : k("", !0),
      $("div", {
        class: v(n.$style.NavBar)
      }, [
        n.$slots["navbar-header"] ? (a(), f("div", {
          key: 0,
          class: v(n.$style.header)
        }, [
          $("div", null, [
            h(n.$slots, "navbar-header")
          ]),
          $("div", Ns, [
            l.value ? (a(), V(y(K), {
              key: 0,
              variant: "text",
              square: "",
              color: "background",
              onClick: u[1] || (u[1] = (s) => t.value = !1)
            }, {
              default: b(() => [
                I(y(U), { name: "close" })
              ]),
              _: 1
            })) : k("", !0)
          ])
        ], 2)) : k("", !0),
        $("div", {
          class: v(n.$style.middle)
        }, [
          h(n.$slots, "default")
        ], 2),
        n.$slots["navbar-footer"] ? (a(), f("div", {
          key: 1,
          class: v(n.$style.footer)
        }, [
          h(n.$slots, "navbar-footer"),
          l.value ? k("", !0) : (a(), V(ke, {
            key: 0,
            text: y(r) ? "Expand" : "Collapse",
            icon: y(r) ? "last_page" : "first_page",
            onClick: u[2] || (u[2] = (s) => r.value = !y(r))
          }, null, 8, ["text", "icon"]))
        ], 2)) : k("", !0)
      ], 2),
      $("div", {
        class: v(n.$style.wrapMobile)
      }, [
        n.$slots.main ? (a(), V(y(q), {
          key: 0,
          class: v(n.$style.main)
        }, {
          default: b(() => [
            h(n.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : k("", !0),
        l.value ? (a(), f("div", {
          key: 1,
          class: v(n.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          h(n.$slots, "default", { inMobileBar: !0 }),
          h(n.$slots, "navbar-footer", { inMobileBar: !0 }),
          I(ke, {
            text: "Menu",
            icon: "menu",
            onClick: u[3] || (u[3] = (s) => t.value = !t.value)
          })
        ], 2)) : k("", !0)
      ], 2)
    ], 2));
  }
}), Rs = "dodo-navbar-root", Ds = "dodo-navbar", Ls = "dodo-navbar-collapsed", Hs = "dodo-navbar-header", Os = "dodo-navbar-middle", js = "dodo-navbar-footer", qs = "dodo-navbar-wrapmobile", Us = "dodo-navbar-main", Ps = "dodo-navbar-backdrop", Ws = "dodo-navbar-mobilemenu", Gs = "dodo-navbar-mobiletoggle", Ks = "dodo-navbar-mobilenav", Js = {
  root: Rs,
  NavBar: Ds,
  collapsed: Ls,
  header: Hs,
  middle: Os,
  footer: js,
  wrapMobile: qs,
  main: Us,
  backdrop: Ps,
  mobileMenu: Ws,
  mobileToggle: Gs,
  mobileNav: Ks
}, Zs = {
  $style: Js
}, or = /* @__PURE__ */ E(Ts, [["__cssModules", Zs]]), Ne = vo(() => {
  const i = M([]), o = M(""), e = M([]), r = M(!1);
  return J(i, () => {
    r.value = !1;
  }), { headerText: o, activeItems: i, expandedMenu: e, mobileToggle: r };
}), Qs = (i) => {
  const o = Ne.injectOptional(), e = Se(), r = (s) => s ? [s.uid, ...r(s.parent)] : [], t = (s) => {
    !s || !o || (o.activeItems.value = r(e), o.headerText.value = i.text.value);
  }, l = S(() => o == null ? void 0 : o.headerText.value), p = () => {
    !e || !o || (o.expandedMenu.value.includes(e.uid) ? o.expandedMenu.value = [] : o.expandedMenu.value = r(e));
  }, n = S(() => !e || !o ? !1 : o.activeItems.value.includes(e.uid)), u = S(() => !e || !o ? !1 : o.expandedMenu.value.length ? o.expandedMenu.value.includes(e.uid) : o.activeItems.value.includes(e.uid));
  return J(i.active, () => t(i.active.value), { immediate: !0 }), oe(() => t(!1)), P(() => {
    l.value && (document.title = l.value);
  }), { showAsActive: n, isExpanded: u, toggleExpand: p, headerText: l };
}, Xs = /* @__PURE__ */ _({
  __name: "NavBarNew",
  setup(i) {
    const { headerText: o, mobileToggle: e } = Ne.createAndProvide(), { screenLarge: r } = Ie(), t = S(() => !r.value);
    function l() {
      e.value = !1;
    }
    return (p, n) => (a(), f("div", {
      class: v([p.$style.root, y(e) && p.$style.mobileToggle, t.value && p.$style.mobileMenu]),
      onClick: le(l, ["self"])
    }, [
      y(e) ? (a(), f("div", {
        key: 0,
        class: v(p.$style.backdrop),
        onClick: n[0] || (n[0] = (u) => e.value = !1)
      }, null, 2)) : k("", !0),
      $("div", {
        class: v(p.$style.NavBar)
      }, [
        $("div", {
          class: v(p.$style.middle)
        }, [
          h(p.$slots, "default")
        ], 2),
        p.$slots["navbar-footer"] ? (a(), f("div", {
          key: 0,
          class: v(p.$style.footer)
        }, [
          h(p.$slots, "navbar-footer")
        ], 2)) : k("", !0)
      ], 2),
      $("div", {
        class: v(p.$style.wrapMobile)
      }, [
        t.value ? (a(), f("div", {
          key: 0,
          class: v(p.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          $("h5", null, A(y(o)), 1),
          I(y(ve), { text: "Toggle menu" }, {
            default: b(() => [
              $("div", {
                class: v(p.$style.menuButton)
              }, [
                I(y(U), {
                  name: "menu",
                  onClick: n[1] || (n[1] = (u) => e.value = !y(e))
                })
              ], 2)
            ]),
            _: 1
          })
        ], 2)) : k("", !0),
        p.$slots.main ? (a(), V(y(q), {
          key: 1,
          class: v(p.$style.main)
        }, {
          default: b(() => [
            h(p.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : k("", !0)
      ], 2)
    ], 2));
  }
}), Ys = "dodo-navbarnew-root", xs = "dodo-navbarnew-navbar", el = "dodo-navbarnew-middle", ol = "dodo-navbarnew-footer", tl = "dodo-navbarnew-wrapmobile", sl = "dodo-navbarnew-main", ll = "dodo-navbarnew-backdrop", nl = "dodo-navbarnew-menubutton", al = "dodo-navbarnew-mobilemenu", rl = "dodo-navbarnew-mobiletoggle", il = "dodo-navbarnew-mobilenav", dl = {
  root: Ys,
  NavBar: xs,
  middle: el,
  footer: ol,
  wrapMobile: tl,
  main: sl,
  backdrop: ll,
  menuButton: nl,
  mobileMenu: al,
  mobileToggle: rl,
  mobileNav: il
}, cl = {
  $style: dl
}, tr = /* @__PURE__ */ E(Xs, [["__cssModules", cl]]), ul = ["href"], pl = { key: 0 }, ml = /* @__PURE__ */ _({
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
    const o = i, e = S(() => o.link ? y(o.link.isActive) : !1), r = S(() => o.text), { isExpanded: t, showAsActive: l, toggleExpand: p } = Qs({ text: r, active: e }), n = ae();
    async function u(s) {
      n.submenu && p(), o.link && (await o.link.navigate(), s.preventDefault());
    }
    return (s, c) => (a(), f("div", {
      class: v([s.$style.el])
    }, [
      I(y(ve), {
        text: s.tooltipText,
        side: "right"
      }, {
        default: b(() => {
          var m;
          return [
            $("a", {
              class: v([s.$style.link, y(l) && s.$style.active, s.important && s.$style.important]),
              href: y((m = s.link) == null ? void 0 : m.href),
              onClick: u
            }, [
              $("div", {
                class: v(s.$style.icon)
              }, [
                h(s.$slots, "icon", {}, () => [
                  s.icon ? (a(), V(y(U), {
                    key: 0,
                    name: s.icon
                  }, null, 8, ["name"])) : k("", !0)
                ])
              ], 2),
              $("div", {
                class: v(s.$style.textwrap)
              }, [
                $("p", {
                  class: v([s.$style.text, "dodo-nowrap"])
                }, A(r.value), 3),
                s.textSecondary ? (a(), f("p", {
                  key: 0,
                  class: v([s.$style.secondary, "dodo-nowrap"])
                }, A(s.textSecondary), 3)) : k("", !0)
              ], 2),
              y(n).submenu ? (a(), f("div", pl, [
                I(y(U), {
                  name: y(t) ? "expand_less" : "expand_more",
                  size: "s",
                  style: { margin: "0 -0.25em" }
                }, null, 8, ["name"])
              ])) : k("", !0)
            ], 10, ul)
          ];
        }),
        _: 3
      }, 8, ["text"]),
      s.$slots.submenu ? (a(), f("div", {
        key: 0,
        class: v([s.$style.submenu, y(t) && s.$style.expanded])
      }, [
        h(s.$slots, "submenu")
      ], 2)) : k("", !0)
    ], 2));
  }
}), vl = "dodo-navitem-el", fl = "dodo-navitem-link", yl = "dodo-navitem-submenu", $l = "dodo-navitem-expanded", hl = "dodo-navitem-active", gl = "dodo-navitem-important", bl = "dodo-navitem-textwrap", wl = "dodo-navitem-icon", kl = "dodo-navitem-text", Ml = "dodo-navitem-secondary", Cl = {
  el: vl,
  link: fl,
  submenu: yl,
  expanded: $l,
  active: hl,
  important: gl,
  textwrap: bl,
  icon: wl,
  text: kl,
  secondary: Ml
}, Sl = {
  $style: Cl
}, sr = /* @__PURE__ */ E(ml, [["__cssModules", Sl]]), Bl = /* @__PURE__ */ _({
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
    const o = Z();
    return (e, r) => (a(), f("div", {
      class: v([
        e.$style.el,
        y(o).gap(e.gap),
        y(o).padding(e.padding),
        y(o).align(e.align),
        y(o).justify(e.justify),
        y(o).wrap(e.wrap),
        y(o).grow(e.grow)
      ])
    }, [
      h(e.$slots, "default")
    ], 2));
  }
}), _l = "dodo-row-el", Vl = {
  el: _l
}, zl = {
  $style: Vl
}, se = /* @__PURE__ */ E(Bl, [["__cssModules", zl]]), Il = /* @__PURE__ */ _({
  __name: "ScrollContainer",
  setup(i) {
    const o = S(() => "");
    return (e, r) => (a(), f("div", {
      class: v([e.$style.ScrollContainer]),
      style: G(o.value)
    }, [
      h(e.$slots, "default")
    ], 6));
  }
}), El = "dodo-scrollcontainer", Al = {
  ScrollContainer: El
}, Fl = {
  $style: Al
}, Nl = /* @__PURE__ */ E(Il, [["__cssModules", Fl]]), Tl = {
  key: 0,
  class: "dodo-nowrap"
}, Rl = {
  key: 1,
  class: "dodo-nowrap dodo-fade-secondary"
}, Dl = ["disabled"], Ll = 12, Hl = /* @__PURE__ */ _({
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
  setup(i, { emit: o }) {
    const e = i, r = o, t = S(() => (e.multiple ? [e.modelValue].flat() : [e.modelValue]).filter(T)), l = M(!1), p = M(""), n = M(), u = M(), s = M(), c = M();
    P(() => {
      l.value && n.value && (p.value = "", n.value.focus());
    }), P(() => {
      p.value && u.value && u.value.$el.querySelector("input").focus();
    }), P(() => {
      l.value && setTimeout(() => {
        var g;
        const w = (g = s.value) == null ? void 0 : g.$el, d = w == null ? void 0 : w.querySelector("[data-selectactive]");
        d == null || d.scrollIntoView({ block: "center" });
      }, 0);
    });
    const m = M(!1), C = S(() => e.options.length > Ll), F = S(() => C.value && !m.value ? 6 : e.options.length), z = S(() => p.value || e.options.length >= 10), L = S(() => {
      const w = p.value.toLowerCase(), d = e.options.filter((R) => `${R.value}|${R.label}`.toLowerCase().includes(w));
      if (!e.multiple)
        return d;
      const g = d.filter((R) => t.value.find((j) => O(R, j))), B = d.filter((R) => !g.includes(R));
      return g.concat(B);
    }), Q = S(() => e.placeholder ? e.placeholder : e.multiple ? "Select one or more" : "Select one");
    function T(w) {
      return e.options.find((d) => O(d, w));
    }
    function H(w) {
      let d = w.value;
      e.multiple ? t.value.includes(d) ? d = t.value.filter((g) => !O(w, g)) : d = t.value.concat(w.value) : l.value = !1, r("update:modelValue", d);
    }
    function O(w, d) {
      return w.value === d;
    }
    function X(w) {
      return w.label || `${w.value}`;
    }
    function x(w) {
      return t.value.some((d) => O(w, d));
    }
    function Y(w) {
      var B, R;
      const d = (B = c.value) == null ? void 0 : B.$el.contains(w.target), g = (R = s.value) == null ? void 0 : R.$el.contains(w.target);
      l.value = d || g;
    }
    return ee(() => {
      document.addEventListener("focusin", Y);
    }), oe(() => {
      document.removeEventListener("focusin", Y);
    }), (w, d) => w.variant === "buttons" ? (a(), V(y(se), {
      key: 0,
      gap: "1",
      wrap: ""
    }, {
      default: b(() => [
        (a(!0), f(D, null, W(w.options.slice(0, F.value), (g, B) => (a(), V(y(K), {
          key: X(g),
          color: x(g) ? "info" : void 0,
          active: x(g),
          variant: x(g) && !w.multiple ? "solid" : void 0,
          disabled: w.disabled,
          small: w.size === "s",
          rounded: "",
          onClick: (R) => H(g)
        }, {
          default: b(() => [
            w.multiple && x(g) ? (a(), V(y(U), {
              key: 0,
              name: "check",
              size: "s",
              style: { margin: "-2px" }
            })) : k("", !0),
            h(w.$slots, "default", {
              option: g,
              index: B
            }, () => [
              N(A(X(g)), 1)
            ])
          ]),
          _: 2
        }, 1032, ["color", "active", "variant", "disabled", "small", "onClick"]))), 128)),
        C.value ? (a(), f(D, { key: 0 }, [
          m.value ? (a(), V(y(K), {
            key: 0,
            small: w.size === "s",
            variant: "text",
            rounded: "",
            onClick: d[0] || (d[0] = (g) => m.value = !m.value)
          }, {
            default: b(() => [
              N(" Less "),
              I(y(U), {
                name: "expand_less",
                size: "s",
                style: { margin: "-2px" }
              })
            ]),
            _: 1
          }, 8, ["small"])) : (a(), V(y(K), {
            key: 1,
            small: w.size === "s",
            variant: "text",
            rounded: "",
            onClick: d[1] || (d[1] = (g) => m.value = !m.value)
          }, {
            default: b(() => [
              N(A(w.options.length - F.value) + " more ", 1),
              I(y(U), {
                name: "expand_more",
                size: "s",
                style: { margin: "-2px" }
              })
            ]),
            _: 1
          }, 8, ["small"]))
        ], 64)) : k("", !0)
      ]),
      _: 3
    })) : (a(), V(y(Fe), {
      key: 1,
      modelValue: l.value,
      "onUpdate:modelValue": d[5] || (d[5] = (g) => l.value = g),
      disabled: w.disabled
    }, {
      dropdown: b(() => [
        I(y(q), {
          ref_key: "dropdownEl",
          ref: s,
          style: { "min-height": "0" },
          gap: "0",
          onMousedown: d[4] || (d[4] = le(() => {
          }, ["stop", "prevent"]))
        }, {
          default: b(() => [
            te(I(y(se), {
              padding: "2",
              class: v(w.$style.searchbox)
            }, {
              default: b(() => [
                I(y(wa), {
                  ref_key: "searchEl",
                  ref: u,
                  modelValue: p.value,
                  "onUpdate:modelValue": d[3] || (d[3] = (g) => p.value = g),
                  type: "search",
                  placeholder: "Search",
                  tabindex: "0",
                  style: { "flex-grow": "1" }
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["class"]), [
              [Oe, z.value]
            ]),
            I(y(Nl), null, {
              default: b(() => [
                (a(!0), f(D, null, W(L.value, (g, B) => (a(), V(y(fs), {
                  key: `${g.value}`,
                  "data-selectactive": t.value.includes(g.value) ? "true" : void 0,
                  active: t.value.includes(g.value),
                  onClick: (R) => H(g)
                }, {
                  default: b(() => [
                    h(w.$slots, "default", {
                      index: B,
                      option: g
                    }, () => [
                      N(A(X(g)), 1)
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
        I(y(bt), {
          ref_key: "fieldEl",
          ref: c,
          button: "",
          disabled: w.disabled
        }, {
          after: b(() => [
            I(y(U), { name: "arrow_drop_down" })
          ]),
          default: b(() => [
            t.value.length ? (a(), f("p", Tl, [
              (a(!0), f(D, null, W(t.value, (g, B) => (a(), f(D, null, [
                B ? (a(), f(D, { key: 0 }, [
                  N(", ")
                ], 64)) : k("", !0),
                T(g) ? h(w.$slots, "default", {
                  key: 1,
                  index: w.options.indexOf(T(g)),
                  option: T(g)
                }, () => [
                  N(A(X(T(g))), 1)
                ]) : (a(), f(D, { key: 2 }, [
                  N(A(g), 1)
                ], 64))
              ], 64))), 256))
            ])) : (a(), f("p", Rl, A(Q.value), 1)),
            te($("input", {
              ref_key: "hiddenInput",
              ref: n,
              "onUpdate:modelValue": d[2] || (d[2] = (g) => p.value = g),
              style: { position: "fixed", "pointer-events": "none", opacity: "0" },
              disabled: w.disabled
            }, null, 8, Dl), [
              [Be, p.value]
            ])
          ]),
          _: 3
        }, 8, ["disabled"])
      ]),
      _: 3
    }, 8, ["modelValue", "disabled"]));
  }
}), Ol = "dodo-select-searchbox", jl = {
  searchbox: Ol
}, ql = {
  $style: jl
}, lr = /* @__PURE__ */ E(Hl, [["__cssModules", ql]]), Ul = /* @__PURE__ */ _({
  __name: "SelectButtons",
  props: {
    options: {},
    modelValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    small: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(i, { emit: o }) {
    const e = i, r = o, t = S(() => e.multiple ? [e.modelValue].flat() : [e.modelValue]);
    function l(u, s) {
      return u.value === s;
    }
    function p(u) {
      return t.value.some((s) => l(u, s));
    }
    function n(u) {
      let s = u.value;
      p(u) && e.multiple ? s = t.value.filter((m) => !l(u, m)) : e.multiple && (s = [...t.value, u.value]), r("update:modelValue", s);
    }
    return (u, s) => (a(), f("div", {
      class: v([u.$style.Select, u.multiple && u.$style.multiple])
    }, [
      (a(!0), f(D, null, W(u.options, (c, m) => (a(), V(y(K), ne({
        key: c.label
      }, p(c) ? { active: !0, color: "info" } : {}, {
        disabled: u.disabled,
        small: u.small,
        rounded: "",
        onClick: (C) => n(c)
      }), {
        default: b(() => [
          h(u.$slots, "default", {
            option: c,
            index: m
          }, () => [
            N(A(c.label || c.value), 1)
          ])
        ]),
        _: 2
      }, 1040, ["disabled", "small", "onClick"]))), 128))
    ], 2));
  }
}), Pl = "dodo-selectbuttons-select", Wl = "dodo-selectbuttons-multiple", Gl = {
  Select: Pl,
  multiple: Wl
}, Kl = {
  $style: Gl
}, nr = /* @__PURE__ */ E(Ul, [["__cssModules", Kl]]), Jl = ["id", "disabled"], Zl = ["value"], Ql = /* @__PURE__ */ _({
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
  setup(i, { emit: o }) {
    const e = i, r = o, t = S({
      get: () => e.modelValue,
      set: (l) => r("update:modelValue", l)
    });
    return (l, p) => (a(), V(me, {
      class: v(l.error && l.$style.error),
      label: l.label,
      error: l.error,
      description: l.description,
      optional: l.optional,
      for: l.id ?? void 0
    }, {
      default: b(({ entryId: n }) => [
        $("div", {
          class: v(l.$style.select)
        }, [
          te($("select", {
            id: l.id ?? n,
            "onUpdate:modelValue": p[0] || (p[0] = (u) => t.value = u),
            disabled: l.disabled,
            class: v(["dodo-formfield"])
          }, [
            (a(!0), f(D, null, W(l.options, (u) => (a(), f("option", {
              key: u.label,
              value: u.value
            }, A(u.label), 9, Zl))), 128))
          ], 8, Jl), [
            [je, t.value]
          ]),
          $("span", {
            class: v(l.$style.icon)
          }, [
            I(U, { name: "unfold_more" })
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["class", "label", "error", "description", "optional", "for"]));
  }
}), Xl = "dodo-simpleselect-select", Yl = "dodo-simpleselect-icon", xl = "dodo-simpleselect-error", en = {
  select: Xl,
  icon: Yl,
  error: xl
}, on = {
  $style: en
}, ar = /* @__PURE__ */ E(Ql, [["__cssModules", on]]), tn = {
  key: 0,
  viewBox: "0 0 48 48"
}, sn = /* @__PURE__ */ pe('<clipPath id="g"><path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path></clipPath><g clip-path="url(#g)"><path fill="#FBBC05" d="M0 37V11l17 13z"></path><path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path><path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path><path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path></g>', 2), ln = [
  sn
], nn = {
  key: 1,
  viewBox: "0 0 248 204"
}, an = /* @__PURE__ */ $("path", {
  id: "white_background",
  fill: "#1D9BF0",
  d: "M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
}, null, -1), rn = [
  an
], dn = {
  key: 2,
  viewBox: "60 60 140 140"
}, cn = /* @__PURE__ */ pe('<path fill="#E01E5A" d="M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"></path><path fill="#E01E5A" d="M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9V151.2z"></path><path fill="#36C5F0" d="M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"></path><path fill="#36C5F0" d="M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9H118.8z"></path><path fill="#2EB67D" d="M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"></path><path fill="#2EB67D" d="M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9V118.8z"></path><path fill="#ECB22E" d="M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"></path><path fill="#ECB22E" d="M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9H151.2z"></path>', 8), un = [
  cn
], pn = {
  key: 3,
  viewBox: "2 2 46 46"
}, mn = /* @__PURE__ */ $("path", { d: "M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" }, null, -1), vn = [
  mn
], fn = {
  key: 4,
  viewBox: "0 0 14222 14222"
}, yn = /* @__PURE__ */ $("circle", {
  cx: "7111",
  cy: "7112",
  r: "7111",
  fill: "#1977f3"
}, null, -1), $n = /* @__PURE__ */ $("path", {
  d: "M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z",
  fill: "#fff"
}, null, -1), hn = [
  yn,
  $n
], gn = {
  key: 5,
  viewBox: "0 0 24 24"
}, bn = /* @__PURE__ */ $("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }, null, -1), wn = [
  bn
], kn = {
  key: 6,
  viewBox: "6 6 36 36"
}, Mn = /* @__PURE__ */ $("path", {
  fill: "#0288D1",
  d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
}, null, -1), Cn = /* @__PURE__ */ $("path", {
  fill: "#FFF",
  d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
}, null, -1), Sn = [
  Mn,
  Cn
], Bn = {
  key: 7,
  viewBox: "10 10 160 160"
}, _n = /* @__PURE__ */ pe('<defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"></stop><stop offset="1" stop-color="#23b33a"></stop></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531"></feGaussianBlur></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"></path><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"></path><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"></path><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"></path><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"></path>', 6), Vn = [
  _n
], zn = /* @__PURE__ */ _({
  __name: "SocialIcon",
  props: {
    name: {},
    white: { type: Boolean },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(i) {
    return (o, e) => (a(), f("span", {
      class: v([o.$style.SocialIcon, o.small && o.$style.small, o.large && o.$style.large, o.white && o.$style.white])
    }, [
      o.name === "google" ? (a(), f("svg", tn, ln)) : o.name === "twitter" ? (a(), f("svg", nn, rn)) : o.name === "slack" ? (a(), f("svg", dn, un)) : o.white && o.name === "facebook" ? (a(), f("svg", pn, vn)) : o.name === "facebook" ? (a(), f("svg", fn, hn)) : o.white && o.name === "linkedin" ? (a(), f("svg", gn, wn)) : o.name === "linkedin" ? (a(), f("svg", kn, Sn)) : o.name === "whatsapp" ? (a(), f("svg", Bn, Vn)) : k("", !0)
    ], 2));
  }
}), In = "dodo-socialicon", En = "dodo-socialicon-white", An = "dodo-socialicon-small", Fn = "dodo-socialicon-large", Nn = {
  SocialIcon: In,
  white: En,
  small: An,
  large: Fn
}, Tn = {
  $style: Nn
}, rr = /* @__PURE__ */ E(zn, [["__cssModules", Tn]]), Rn = /* @__PURE__ */ $("path", {
  stroke: "currentColor",
  fill: "none",
  d: "M 9 1 A 8 8 0 0 1 17 9",
  "stroke-width": "2"
}, null, -1), Dn = /* @__PURE__ */ $("path", {
  stroke: "currentColor",
  opacity: "0.33",
  fill: "none",
  d: "M 17 9 A 8 8 0 1 1 9 1",
  "stroke-width": "2"
}, null, -1), Ln = [
  Rn,
  Dn
], Hn = /* @__PURE__ */ _({
  __name: "Spinner",
  props: {
    color: { default: void 0 },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(i) {
    const o = Z(), e = i, r = S(() => {
      let t = "";
      return e.color === "inherit" ? t += "color:inherit;" : e.color && (t += `color:${o.colorCss(e.color)};`), t;
    });
    return (t, l) => (a(), f("div", {
      class: v([t.$style.Spinner, t.small && t.$style.small, t.large && t.$style.large])
    }, [
      (a(), f("svg", {
        style: G(r.value),
        viewBox: "0 0 18 18"
      }, Ln, 4))
    ], 2));
  }
}), On = "dodo-spinner", jn = "dodo-spinner-small", qn = "dodo-spinner-large", Un = {
  Spinner: On,
  small: jn,
  large: qn
}, Pn = {
  $style: Un
}, Wn = /* @__PURE__ */ E(Hn, [["__cssModules", Pn]]), Gn = ["onClick"], Kn = {
  key: 1,
  class: "dodo-color-background"
}, Jn = { style: {} }, Zn = { key: 0 }, Qn = {
  key: 1,
  class: "dodo-fade-secondary"
}, Xn = {
  key: 0,
  class: "dodo-fade-secondary"
}, Yn = /* @__PURE__ */ $("br", null, null, -1), xn = /* @__PURE__ */ _({
  __name: "Stepper",
  props: {
    stepIndex: {},
    steps: {},
    submit: { type: Function },
    completed: {}
  },
  emits: ["update:stepIndex", "submit"],
  setup(i, { emit: o }) {
    const e = i, r = o, t = M(0), l = S(() => e.steps[t.value]);
    function p() {
      t.value--;
    }
    async function n() {
      const s = l.value;
      if (s.filled !== !1 && !(s.validate && !await s.validate())) {
        if (t.value === e.steps.length - 1) {
          await e.submit();
          return;
        }
        t.value++;
      }
    }
    function u(s) {
      s > t.value || (t.value = s);
    }
    return P(() => {
      e.stepIndex != null && (t.value = e.stepIndex);
    }), J(t, () => {
      r("update:stepIndex", t.value);
    }), (s, c) => (a(), V(y(q), {
      class: v(s.$style.stepper)
    }, {
      default: b(() => [
        (a(!0), f(D, null, W(s.steps, (m, C) => (a(), V(y(se), {
          key: m.key,
          align: "stretch",
          gap: "4",
          class: v(C > t.value && s.$style.inactiveStep)
        }, {
          default: b(() => [
            I(y(q), { align: "center" }, {
              default: b(() => [
                $("div", {
                  class: v([s.$style.circle]),
                  onClick: (F) => u(C)
                }, [
                  t.value > C ? (a(), V(y(U), {
                    key: 0,
                    name: "check"
                  })) : (a(), f("h3", Kn, A(C + 1), 1))
                ], 10, Gn),
                C < s.steps.length - 1 ? (a(), f("div", {
                  key: 0,
                  class: v(s.$style.line)
                }, null, 2)) : k("", !0)
              ]),
              _: 2
            }, 1024),
            I(y(q), { grow: "" }, {
              default: b(() => [
                I(y(q), {
                  gap: "1",
                  onClick: (F) => u(C)
                }, {
                  default: b(() => [
                    $("h3", Jn, [
                      m === l.value ? (a(), f("span", Zn, A(m.name), 1)) : (a(), f("span", Qn, A(m.name), 1))
                    ]),
                    m.hint ? (a(), f("p", Xn, A(m.hint), 1)) : k("", !0)
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                m === l.value ? (a(), V(y(q), { key: 0 }, {
                  default: b(() => [
                    h(s.$slots, m.slot),
                    I(y(se), null, {
                      default: b(() => [
                        t.value > 0 ? (a(), V(y(K), {
                          key: 0,
                          variant: "text",
                          onClick: p
                        }, {
                          default: b(() => [
                            N(" Back ")
                          ]),
                          _: 1
                        })) : k("", !0),
                        t.value < s.steps.length - 1 ? (a(), V(y(K), {
                          key: 1,
                          disabled: m.filled === !1,
                          color: "primary",
                          variant: "solid",
                          onClick: n
                        }, {
                          default: b(() => [
                            h(s.$slots, "continue-button-text", {}, () => [
                              N("Continue")
                            ])
                          ]),
                          _: 2
                        }, 1032, ["disabled"])) : (a(), V(y(K), {
                          key: 2,
                          color: "primary",
                          variant: "solid",
                          onClick: n
                        }, {
                          default: b(() => [
                            h(s.$slots, "submit-button-text", {}, () => [
                              N("Submit")
                            ])
                          ]),
                          _: 3
                        }))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)) : k("", !0),
                Yn
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
}), ea = "dodo-stepper-line", oa = "dodo-stepper-circle", ta = "dodo-stepper-inactivestep", sa = {
  line: ea,
  circle: oa,
  inactiveStep: ta
}, la = {
  $style: sa
}, ir = /* @__PURE__ */ E(xn, [["__cssModules", la]]), na = ["onClick"], aa = /* @__PURE__ */ $("hr", null, null, -1), ra = /* @__PURE__ */ _({
  __name: "Tabs",
  props: {
    tabs: {},
    tabIndex: {}
  },
  emits: ["update:tabIndex"],
  setup(i, { emit: o }) {
    const e = i, r = o, t = M(""), l = S(() => e.tabs.find((n) => p(n) === t.value));
    P(() => {
      !l.value && e.tabs.length && (t.value = p(e.tabs[0]));
    }), J(
      () => e.tabIndex,
      () => {
        e.tabIndex != null && e.tabs[e.tabIndex] && (t.value = p(e.tabs[e.tabIndex]));
      },
      { immediate: !0 }
    ), J(
      () => l.value,
      () => {
        l.value && r("update:tabIndex", e.tabs.indexOf(l.value));
      },
      { immediate: !0 }
    );
    function p(n) {
      return n.slot ?? n.name;
    }
    return (n, u) => (a(), V(y(q), {
      gap: "4",
      style: { "min-width": "0" }
    }, {
      default: b(() => [
        I(y(q), { gap: "0" }, {
          default: b(() => [
            $("div", {
              class: v(n.$style.bar)
            }, [
              (a(!0), f(D, null, W(n.tabs, (s, c) => (a(), f("div", {
                key: p(s),
                class: v([n.$style.tab, t.value === p(s) && n.$style.active, s.disabled && n.$style.disabled]),
                onClick: (m) => t.value = p(s)
              }, [
                $("h5", {
                  class: v(n.$style.tabName)
                }, [
                  h(n.$slots, "tab-title", {
                    i: c,
                    tab: s
                  }, () => [
                    N(A(s.name), 1)
                  ])
                ], 2)
              ], 10, na))), 128))
            ], 2),
            aa
          ]),
          _: 3
        }),
        l.value ? h(n.$slots, l.value.slot ?? "default", {
          key: 0,
          tab: l.value
        }) : k("", !0)
      ]),
      _: 3
    }));
  }
}), ia = "dodo-tabs-bar", da = "dodo-tabs-tab", ca = "dodo-tabs-tabname", ua = "dodo-tabs-active", pa = "dodo-tabs-disabled", ma = {
  bar: ia,
  tab: da,
  tabName: ca,
  active: ua,
  disabled: pa
}, va = {
  $style: ma
}, dr = /* @__PURE__ */ E(ra, [["__cssModules", va]]), fa = ["id", "placeholder", "disabled", "maxlength", "type", "name", "autofocus", "autocomplete"], ya = /* @__PURE__ */ _({
  __name: "TextInput",
  props: /* @__PURE__ */ _e({
    modelValue: {},
    id: {},
    placeholder: {},
    disabled: { type: Boolean },
    maxlength: {},
    type: {},
    name: {},
    autofocus: { type: Boolean },
    label: {},
    error: {},
    description: {},
    optional: { type: Boolean },
    rows: {},
    autocomplete: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(i) {
    const o = Ve(i, "modelValue");
    return (e, r) => (a(), V(me, {
      label: e.label,
      error: e.error,
      description: e.description,
      class: v(e.error && e.$style.error),
      optional: e.optional,
      for: e.id ?? void 0
    }, {
      default: b(({ entryId: t }) => [
        te($("input", {
          id: e.id ?? t,
          "onUpdate:modelValue": r[0] || (r[0] = (l) => o.value = l),
          class: v(["dodo-formfield", e.$style.input]),
          placeholder: e.placeholder,
          disabled: e.disabled,
          maxlength: e.maxlength,
          type: e.type || "text",
          name: e.name,
          autofocus: e.autofocus,
          autocomplete: e.autocomplete
        }, null, 10, fa), [
          [qe, o.value]
        ])
      ]),
      _: 1
    }, 8, ["label", "error", "description", "class", "optional", "for"]));
  }
}), $a = "dodo-textinput-error", ha = "dodo-textinput-input", ga = {
  error: $a,
  input: ha
}, ba = {
  $style: ga
}, wa = /* @__PURE__ */ E(ya, [["__cssModules", ba]]), ka = ["id", "placeholder", "disabled", "name", "autofocus", "rows", "autocomplete"], Ma = /* @__PURE__ */ _({
  __name: "Textarea",
  props: /* @__PURE__ */ _e({
    modelValue: {},
    id: {},
    placeholder: {},
    disabled: { type: Boolean },
    name: {},
    autofocus: { type: Boolean },
    label: {},
    error: {},
    description: {},
    optional: { type: Boolean },
    minRows: {},
    maxRows: {},
    autocomplete: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(i) {
    const o = i, e = Ve(i, "modelValue"), r = M(null), t = M(o.minRows);
    function l() {
      const u = o.maxRows && o.maxRows > 0 ? o.maxRows : 12, s = o.minRows && o.minRows > 0 ? o.minRows : 4, c = r.value;
      if (!c)
        return s;
      let m = s;
      for (c.style.overflow = "hidden", c.setAttribute("rows", `${m}`); c.scrollHeight > c.offsetHeight && m < u; )
        c.setAttribute("rows", `${++m}`);
      return c.style.overflow = "", m;
    }
    function p() {
      t.value = l(), n.value || window.requestAnimationFrame(p);
    }
    const n = M(!1);
    return ee(p), oe(() => {
      n.value = !0;
    }), (u, s) => (a(), V(me, {
      label: u.label,
      error: u.error,
      description: u.description,
      class: v(u.error && u.$style.error),
      optional: u.optional,
      for: u.id ?? void 0
    }, {
      default: b(({ entryId: c }) => [
        te($("textarea", {
          id: u.id ?? c,
          ref_key: "textarea",
          ref: r,
          "onUpdate:modelValue": s[0] || (s[0] = (m) => e.value = m),
          class: v(["dodo-formfield", u.$style.textarea]),
          placeholder: u.placeholder,
          disabled: u.disabled,
          name: u.name,
          autofocus: u.autofocus,
          rows: t.value,
          autocomplete: u.autocomplete,
          resize: "false"
        }, null, 10, ka), [
          [Be, e.value]
        ])
      ]),
      _: 1
    }, 8, ["label", "error", "description", "class", "optional", "for"]));
  }
}), Ca = "dodo-textarea", Sa = "dodo-textarea-error", Ba = {
  textarea: Ca,
  error: Sa
}, _a = {
  $style: Ba
}, cr = /* @__PURE__ */ E(Ma, [["__cssModules", _a]]), Va = /* @__PURE__ */ _({
  __name: "Tooltip",
  props: {
    text: {},
    disabled: { type: Boolean },
    side: {}
  },
  setup(i) {
    const o = i, e = M(!1), r = M(""), t = M(), l = M(), p = ae(), n = S(() => o.disabled || !(o.text || p["tooltip-text"]));
    oe(s);
    async function u() {
      if (e.value || n.value)
        return;
      e.value = !0, await Ce();
      const c = t.value.getBoundingClientRect(), m = l.value.getBoundingClientRect();
      o.side, c.bottom + m.height < window.innerHeight;
      let C = (c.right + c.left - m.width) / 2, F = c.bottom;
      o.side === "right" ? (C = c.right, F = (c.bottom + c.top - m.height) / 2) : o.side === "top" ? (C = (c.left + c.right - m.width) / 2, F = c.top - m.height) : o.side === "left" && (C = c.left - m.width, F = (c.bottom + c.top - m.height) / 2), F = Math.round(Math.max(Math.min(F, window.innerHeight - m.height), 0)), C = Math.round(Math.max(Math.min(C, window.innerWidth - m.width), 0)), r.value = `left:${C}px;top:${F}px`;
    }
    function s() {
      e.value = !1;
    }
    return (c, m) => (a(), f("div", {
      ref_key: "trigger",
      ref: t,
      class: v(c.$style.trigger),
      onMouseover: u,
      onMouseleave: s
    }, [
      h(c.$slots, "default"),
      e.value ? (a(), V(Me, {
        key: 0,
        to: "body"
      }, [
        $("div", {
          ref_key: "tooltip",
          ref: l,
          class: v(c.$style.Tooltip),
          style: G(r.value)
        }, [
          $("div", {
            class: v(c.$style.content)
          }, [
            $("small", {
              class: v(c.$style.text)
            }, [
              h(c.$slots, "tooltip-text", {}, () => [
                N(A(c.text), 1)
              ])
            ], 2)
          ], 2)
        ], 6)
      ])) : k("", !0)
    ], 34));
  }
}), za = "dodo-tooltip", Ia = "dodo-tooltip-content", Ea = "dodo-tooltip-text", Aa = "dodo-tooltip-trigger", Fa = {
  Tooltip: za,
  content: Ia,
  text: Ea,
  trigger: Aa
}, Na = {
  $style: Fa
}, ve = /* @__PURE__ */ E(Va, [["__cssModules", Na]]);
export {
  La as Animated,
  Ha as Avatar,
  K as Button,
  io as Card,
  ge as Checkbox,
  Ga as Chip,
  q as Column,
  Ka as CrashDialog,
  Ja as Datatable,
  nt as Dialog,
  Fe as Dropdown,
  bt as Field,
  Za as FluidGrid,
  Qa as Form,
  me as FormItem,
  Xa as Grid,
  U as Icon,
  Ya as Input,
  xa as Label,
  fs as MenuItem,
  er as Modal,
  or as NavBar,
  ke as NavBarItem,
  tr as NavBarNew,
  sr as NavItem,
  se as Row,
  Nl as ScrollContainer,
  lr as Select,
  nr as SelectButtons,
  ar as SimpleSelect,
  rr as SocialIcon,
  Wn as Spinner,
  ir as Stepper,
  dr as Tabs,
  wa as TextInput,
  cr as Textarea,
  ve as Tooltip,
  Pa as ValidationError,
  qa as crashPlugin,
  Ee as crashServiceKey,
  co as dropdownServiceKey,
  ze as navBarServiceKey,
  ja as parseColor,
  mo as useCrashService,
  Oa as useElementSize,
  Ua as useResizeObserver,
  Ie as useScreenSize,
  vo as useServiceFactory,
  uo as useSessionStoredRef,
  Z as useTheme,
  Wa as useValidation,
  po as useWebFont
};
