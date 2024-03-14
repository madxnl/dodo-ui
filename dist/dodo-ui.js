var Te = Object.defineProperty;
var Ee = (d, t, e) => t in d ? Te(d, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[t] = e;
var me = (d, t, e) => (Ee(d, typeof t != "symbol" ? t + "" : t, e), e);
import { defineComponent as T, openBlock as n, createBlock as I, TransitionGroup as Ne, withCtx as w, renderSlot as $, Transition as ke, computed as S, createElementBlock as m, normalizeClass as f, normalizeStyle as J, Fragment as R, createTextVNode as D, toDisplayString as N, createCommentVNode as M, useAttrs as Ae, ref as C, mergeProps as ne, unref as c, createElementVNode as h, onMounted as te, watchEffect as U, onBeforeUnmount as ee, watch as X, inject as re, provide as ie, reactive as fe, withModifiers as se, createVNode as z, resolveDynamicComponent as le, renderList as K, Teleport as Ce, nextTick as Me, onUnmounted as Fe, useSlots as de, getCurrentInstance as De, withDirectives as ye, vShow as Le, vModelText as Re, createStaticVNode as ce } from "vue";
const $e = !1, Zl = /* @__PURE__ */ T({
  __name: "Animated",
  props: {
    list: { type: Boolean },
    appear: { type: Boolean }
  },
  setup(d) {
    return (t, e) => t.list ? (n(), I(Ne, {
      key: 0,
      name: "dodo",
      appear: t.appear,
      css: !$e
    }, {
      default: w(() => [
        $(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"])) : (n(), I(ke, {
      key: 1,
      appear: t.appear,
      name: "dodo",
      css: !$e,
      mode: "out-in"
    }, {
      default: w(() => [
        $(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"]));
  }
}), He = /* @__PURE__ */ T({
  __name: "Avatar",
  props: {
    text: {},
    image: {},
    round: { type: Boolean }
  },
  setup(d) {
    const t = ["info", "warn", "success", "danger"], e = d, i = Y(), o = S(() => {
      let s = e.text.trim();
      const y = /\b\w|[A-Z]/g, l = e.text.match(y);
      return l != null && l.length && (s = l.join("")), s.slice(0, 2).toUpperCase();
    }), a = S(() => {
      const s = t.length, y = u(e.text), l = t[y % s];
      return i.colorCss(l);
    });
    function u(s) {
      let y = 0;
      for (let l = 0; l < s.length; ++l)
        y = 997 * (y % 1e6) + 11 * s.charCodeAt(l);
      return y;
    }
    return (s, y) => (n(), m("span", {
      class: f([s.$style.Avatar, s.round && s.$style.round]),
      style: J([`--color:${a.value}`, s.image ? `background-image:url(${s.image})` : ""])
    }, [
      s.image ? M("", !0) : (n(), m(R, { key: 0 }, [
        D(N(o.value), 1)
      ], 64))
    ], 6));
  }
}), Oe = "dodo-avatar", je = "dodo-avatar-round", qe = {
  Avatar: Oe,
  round: je
}, A = (d, t) => {
  const e = d.__vccOpts || d;
  for (const [i, o] of t)
    e[i] = o;
  return e;
}, We = {
  $style: qe
}, Ql = /* @__PURE__ */ A(He, [["__cssModules", We]]), Pe = ["disabled", "type"], Ue = /* @__PURE__ */ T({
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
    const t = d, { colorCss: e } = Y(), i = S(() => {
      let s = "";
      return t.color && (s += `--button-color:${e(t.color)};`), s;
    }), o = Ae(), a = C(!1);
    async function u(s) {
      if (!a.value && typeof o.onClick == "function") {
        const y = o.onClick(s);
        y instanceof Promise && (a.value = !0, await y.finally(() => {
          a.value = !1;
        }));
      }
    }
    return (s, y) => (n(), m("button", ne({
      style: i.value,
      disabled: s.disabled,
      type: s.type ?? "button",
      class: [
        s.$style.Button,
        s.$style[t.variant ?? "default"],
        a.value && s.$style.loading,
        s.small && s.$style.small,
        s.square && s.$style.square,
        s.active && s.$style.active,
        s.rounded && s.$style.rounded
      ]
    }, { ...c(o), onClick: u }), [
      h("div", {
        class: f(s.$style.content)
      }, [
        $(s.$slots, "default")
      ], 2),
      a.value ? (n(), I(c(il), {
        key: 0,
        small: s.small,
        class: f(s.$style.spinner),
        color: "inherit"
      }, null, 8, ["small", "class"])) : M("", !0)
    ], 16, Pe));
  }
}), Ge = "dodo-button", Ke = "dodo-button-content", Je = "dodo-button-solid", Ze = "dodo-button-rounded", Qe = "dodo-button-text", Xe = "dodo-button-loading", Ye = "dodo-button-spinner", xe = "dodo-button-active", et = "dodo-button-small", tt = "dodo-button-square", ot = {
  Button: Ge,
  content: Ke,
  solid: Je,
  default: "dodo-button-default",
  rounded: Ze,
  text: Qe,
  loading: Xe,
  spinner: Ye,
  active: xe,
  small: et,
  square: tt
}, st = {
  $style: ot
}, G = /* @__PURE__ */ A(Ue, [["__cssModules", st]]), Xl = /* @__PURE__ */ T({
  __name: "Card",
  props: {
    hoverable: { type: Boolean },
    active: { type: Boolean },
    gap: {},
    padding: {}
  },
  setup(d) {
    const t = Y();
    return (e, i) => (n(), m("div", {
      class: f([
        "dodo-card",
        e.hoverable && "dodo-card--hoverable",
        e.active && "dodo-card--active",
        c(t).padding(e.padding),
        c(t).gap(e.gap)
      ])
    }, [
      $(e.$slots, "default")
    ], 2));
  }
}), _e = Symbol("NavBarService"), nt = Symbol("DropdownService");
function Yl(d) {
  const t = C(0), e = C(0), i = new ResizeObserver(o);
  function o() {
    var a, u;
    t.value = ((a = d.value) == null ? void 0 : a.clientWidth) ?? 0, e.value = ((u = d.value) == null ? void 0 : u.clientHeight) ?? 0;
  }
  return te(o), U(() => {
    i.disconnect(), d.value && i.observe(d.value), o();
  }), ee(() => {
    i.disconnect();
  }), { width: t, height: e, observer: i };
}
function Se() {
  const e = C(window.innerWidth), i = C(window.innerHeight), o = S(() => e.value < 600), a = S(() => e.value >= 600 && e.value < 1200), u = S(() => e.value >= 1200);
  function s() {
    e.value = window.innerWidth, i.value = window.innerHeight;
  }
  return te(() => {
    window.addEventListener("resize", s, { passive: !0 });
  }), ee(() => {
    window.removeEventListener("resize", s);
  }), {
    screenSmall: o,
    screenMedium: a,
    screenLarge: u
  };
}
function lt(d, t) {
  const e = C(t), i = sessionStorage.getItem(d);
  return i && (e.value = JSON.parse(i)), X(e, (o) => {
    sessionStorage.setItem(d, JSON.stringify(o));
  }), e;
}
function at(d) {
  const t = C(!1);
  return te(async () => {
    const e = `font-${d.name}-${d.weight}`;
    let i = document.getElementById(e);
    if (i || (i = document.createElement("link"), i.setAttribute("href", d.href), i.setAttribute("rel", "stylesheet"), i.setAttribute("id", e), document.head.appendChild(i)), !document.fonts) {
      t.value = !0;
      return;
    }
    await document.fonts.ready, t.value = document.fonts.check(`${d.weight} 1em ${d.name}`);
  }), { isReady: t };
}
function xl(d) {
  if (!d.match(/^#\w{6}$/))
    throw new Error("Invalid hex color");
  return d.match(/(\w\w)/g).map((t) => parseInt(t, 16)).slice(0, 3);
}
const Be = Symbol(Ve.name);
function Ve(d) {
  const t = C(null), e = C(0), i = 1e3;
  function o() {
    t.value = null, e.value = Date.now() + i;
  }
  function a() {
    location.reload();
  }
  function u(s) {
    d.onError && d.onError(s) === !1 || !t.value && e.value < Date.now() && (console.error(s), t.value = s);
  }
  return { ignoreError: o, reloadPage: a, currentError: t, handleCrash: u };
}
function ea(d) {
  return (t) => {
    var o;
    const e = Ve(d);
    t.provide(Be, e);
    const { errorHandler: i } = t.config;
    t.config.errorHandler = (a, u, s) => {
      if (e.handleCrash(a), i)
        return i(a, u, s);
    }, (o = d.router) == null || o.onError((a) => {
      e.handleCrash(a);
    }), window.addEventListener("unhandledrejection", (a) => {
      e.handleCrash(a.reason);
    }), window.addEventListener("error", (a) => {
      e.handleCrash(a.error ?? a.message);
    });
  };
}
function rt() {
  return re(Be);
}
function ta(d, t) {
  if (typeof ResizeObserver > "u")
    return {};
  const e = new ResizeObserver(() => t(d.value));
  return U(() => {
    d.value && e.observe(d.value);
  }), ee(() => {
    e.disconnect();
  }), { observer: e };
}
function it(d) {
  const t = Symbol("ServiceKey");
  return { createAndProvide: () => {
    const o = d();
    return ie(t, o), o;
  }, injectOptional: () => re(t, void 0) };
}
function Y() {
  function d(v) {
    return typeof v == "string" ? `var(--dodo-color-${v})` : `rgb(${v.join(",")})`;
  }
  function t(v) {
    if (v instanceof Array)
      return v;
    const g = getComputedStyle(document.body).getPropertyValue(`--dodo-rgb-${v}`);
    return g ? g.split(",").map(Number) : [0, 0, 0];
  }
  function e(v) {
    return "#" + t(v).map((_) => _.toString(16).padStart(2, "0")).join("");
  }
  function i(v) {
    return `var(--dodo-gap-${v})`;
  }
  function o(v) {
    return v ? `dodo-gap-${v}` : "";
  }
  function a(v) {
    return v ? `dodo-pad-${v}` : "";
  }
  function u(v) {
    return v ? `dodo-justify-${v}` : "";
  }
  function s(v) {
    return v ? `dodo-align-${v}` : "";
  }
  function y(v) {
    return v ? "dodo-wrap" : "";
  }
  function l(v) {
    return v ? "dodo-flex" : "";
  }
  function p(v) {
    return v ? "dodo-grow" : "";
  }
  return {
    colorCss: d,
    gapValue: i,
    colorHexStr: e,
    colorRgbValues: t,
    gap: o,
    padding: a,
    justify: u,
    align: s,
    wrap: y,
    flex: l,
    grow: p
  };
}
class oa extends Error {
  constructor(e, i) {
    super(i);
    me(this, "name", "ValidationError");
    this.field = e;
  }
}
function sa(d) {
  const t = fe(d), e = fe({});
  X(t, () => a());
  async function i(l) {
    const p = t[l];
    if (p) {
      const v = p.value, g = await s(l, v);
      if (g)
        return e[l] = String(g), !1;
    }
    return delete e[l], !0;
  }
  async function o(...l) {
    const p = l.length ? l : Object.keys(t);
    return (await Promise.all(p.map((g) => i(g)))).every((g) => g);
  }
  async function a() {
    return (await Promise.all(Object.keys(e).map((p) => i(p)))).every((p) => p);
  }
  function u() {
    for (const l in e)
      delete e[l];
  }
  async function s(l, p) {
    const v = t[l], g = v.name ?? y(l);
    if (v.required && !p)
      return `${g} is required`;
    if (v.isEmail && p != null && (typeof p != "string" || !p.includes("@")))
      return `${g} is not valid`;
    if (typeof p == "string") {
      if (v.minLen != null && p.length < v.minLen)
        return `${g} must be at least ${v.minLen} characters`;
      if (v.maxLen != null && p.length > v.maxLen)
        return `${g} must be less than ${v.maxLen} characters`;
    }
    if (v.validators)
      for (const _ of v.validators) {
        const V = await _(p, g);
        if (V)
          return V;
      }
  }
  function y(l) {
    return l.toString().replace(/_/g, " ").replace(/^./, (p) => p.toUpperCase()).replace(/[a-z][A-Z]/g, (p) => `${p[0]} ${p[1]}`);
  }
  return { errors: e, rules: t, validate: o, clearErrors: u };
}
const dt = ["checked"], ct = /* @__PURE__ */ T({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean },
    indeterminate: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(d, { emit: t }) {
    const e = d, i = t;
    function o() {
      i("update:modelValue", e.indeterminate || !e.modelValue);
    }
    function a(u) {
      u.target.checked !== e.modelValue && o();
    }
    return (u, s) => (n(), m("span", {
      class: f([u.$style.Checkbox, u.modelValue && u.$style.checked]),
      onClick: se(o, ["stop"])
    }, [
      z(c(P), {
        name: u.indeterminate ? "indeterminate_check_box" : u.modelValue ? "check_box" : "check_box_outline_blank"
      }, null, 8, ["name"]),
      $(u.$slots, "default"),
      h("input", {
        type: "checkbox",
        checked: u.modelValue,
        onChange: a
      }, null, 40, dt)
    ], 2));
  }
}), ut = "dodo-checkbox", pt = "dodo-checkbox-checked", vt = {
  Checkbox: ut,
  checked: pt
}, mt = {
  $style: vt
}, he = /* @__PURE__ */ A(ct, [["__cssModules", mt]]), ft = /* @__PURE__ */ T({
  __name: "Chip",
  props: {
    color: {}
  },
  setup(d) {
    const t = d, e = Y(), i = S(() => {
      let o = "";
      return t.color && (o += `--chip-color:${e.colorCss(t.color)};`), o;
    });
    return (o, a) => (n(), I(le(o.$attrs.onClick ? "button" : "div"), {
      class: f(o.$style.Chip),
      style: J(i.value)
    }, {
      default: w(() => [
        $(o.$slots, "before"),
        h("div", {
          class: f(o.$style.text)
        }, [
          $(o.$slots, "default")
        ], 2),
        $(o.$slots, "after")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), yt = "dodo-chip", $t = "dodo-chip-text", ht = {
  Chip: yt,
  text: $t
}, gt = {
  $style: ht
}, na = /* @__PURE__ */ A(ft, [["__cssModules", gt]]), bt = /* @__PURE__ */ T({
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
    const t = Y();
    return (e, i) => (n(), I(le(e.tag ?? "div"), {
      class: f([
        e.$style.el,
        c(t).gap(e.gap),
        c(t).padding(e.padding),
        c(t).align(e.align),
        c(t).padding(e.padding),
        c(t).wrap(e.wrap),
        c(t).grow(e.grow)
      ])
    }, {
      default: w(() => [
        $(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), wt = "dodo-column-el", kt = {
  el: wt
}, Ct = {
  $style: kt
}, W = /* @__PURE__ */ A(bt, [["__cssModules", Ct]]), Mt = /* @__PURE__ */ h("h3", null, "Something went wrong", -1), ge = `
  An unexpected error occurred and the application may not function correctly until the page is reloaded.
  Any unsaved changes will be lost if you choose to reload the page.
`, la = /* @__PURE__ */ T({
  __name: "CrashDialog",
  setup(d) {
    const t = rt(), e = S(() => t.currentError.value), i = C(!1);
    return U(() => {
      i.value = !!e.value;
    }), (o, a) => (n(), I(c(xt), { active: i.value }, {
      controls: w(() => [
        z(c(G), {
          variant: "text",
          onClick: c(t).ignoreError
        }, {
          default: w(() => [
            D("Ignore")
          ]),
          _: 1
        }, 8, ["onClick"]),
        z(c(G), {
          variant: "solid",
          color: "info",
          onClick: c(t).reloadPage
        }, {
          default: w(() => [
            D("Reload page")
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: w(() => [
        Mt,
        $(o.$slots, "body", {
          error: e.value,
          defaultText: ge
        }, () => [
          h("p", null, N(ge))
        ])
      ]),
      _: 3
    }, 8, ["active"]));
  }
}), _t = {
  key: 0,
  style: { width: "0" },
  scope: "col"
}, St = ["onClick"], Bt = ["onClick"], Vt = { key: 0 }, It = /* @__PURE__ */ h("td", { colspan: "999" }, "No results", -1), zt = [
  It
], Tt = { colspan: "999" }, Et = { key: 0 }, Nt = /* @__PURE__ */ T({
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
  setup(d, { emit: t }) {
    const e = d, i = t, o = C(), a = C([]), u = C(!1);
    U(() => {
      o.value = e.sortValue;
    }), U(() => {
      a.value = e.selection ?? [];
    }), X(o, (r) => {
      i("update:sortValue", r);
    }), X(a, (r) => {
      i("update:selection", r);
    });
    const s = S(() => {
      var r;
      return (r = o.value) == null ? void 0 : r.startsWith("-");
    }), y = S(() => e.columns.filter((r) => !r.disabled)), l = S(() => !!e.selection), p = S(() => {
      const r = y.value.find(g);
      return e.sortAsync || !r ? e.rows : e.rows.slice().sort((b, B) => {
        const L = Z(r, b), q = Z(r, B), ve = typeof L == "number" && typeof q == "number" ? q - L : `${q}`.localeCompare(`${L}`);
        return s.value ? ve : -ve;
      });
    });
    function v(r) {
      if (g(r))
        return s.value ? "arrow_drop_up" : "arrow_drop_down";
    }
    function g(r) {
      var b;
      return ((b = o.value) == null ? void 0 : b.replace("-", "")) === r.sort;
    }
    function _(r) {
      return r.slot || r.name.trim().replace(/\W/g, "");
    }
    function V(r) {
      return !!r.sort;
    }
    function E(r) {
      return r.align ? `text-align:${r.align}` : "";
    }
    function H(r) {
      return r.width ? `width:${r.width}` : "";
    }
    async function F(r) {
      V(r) && (g(r) ? o.value = s.value ? void 0 : "-" + r.sort : o.value = r.sort, e.sortAsync && (u.value = !0, await e.sortAsync(o.value).finally(() => {
        u.value = !1;
      })));
    }
    function O(r) {
      return e.selectBy ? r[e.selectBy] : r;
    }
    function j(r) {
      const b = O(r);
      a.value.includes(b) ? a.value = a.value.filter((B) => B !== b) : a.value = a.value.concat(b);
    }
    function Z(r, b) {
      return typeof r.value == "function" ? r.value(b) : typeof r.value == "string" ? b[r.value] : "";
    }
    function x(r) {
      if (!l.value)
        return !1;
      const b = O(r);
      return a.value.includes(b);
    }
    const Q = S(() => l.value ? e.rows.filter((r) => a.value.includes(O(r))) : []);
    function k() {
      const r = Q.value.length === e.rows.length;
      a.value = r ? [] : e.rows.map(O);
    }
    return (r, b) => (n(), m("div", {
      class: f([r.$style.Datatable, r.contentLoading && r.$style.loading])
    }, [
      h("table", null, [
        h("tbody", null, [
          h("tr", {
            class: f(r.stickyHeader && r.$style.stickyHeader)
          }, [
            l.value ? (n(), m("th", _t, [
              z(c(he), {
                indeterminate: Q.value.length > 0 && Q.value.length < r.rows.length,
                "model-value": Q.value.length > 0 && Q.value.length === r.rows.length,
                "onUpdate:modelValue": k
              }, null, 8, ["indeterminate", "model-value"])
            ])) : M("", !0),
            (n(!0), m(R, null, K(y.value, (B) => (n(), m("th", {
              key: B.name,
              scope: "col",
              class: f([V(B) ? r.$style.sortable : "", g(B) && r.$style.sortActive]),
              style: J([E(B), H(B)]),
              onClick: (L) => F(B)
            }, [
              h("span", {
                class: f(r.$style.colName)
              }, [
                h("span", null, [
                  $(r.$slots, `${_(B)}-header`, { column: B }, () => [
                    D(N(B.name), 1)
                  ])
                ]),
                v(B) ? (n(), I(c(P), {
                  key: 0,
                  name: v(B),
                  class: f(r.$style.sortIcon)
                }, null, 8, ["name", "class"])) : M("", !0)
              ], 2)
            ], 14, St))), 128))
          ], 2),
          (n(!0), m(R, null, K(p.value, (B, L) => (n(), m("tr", {
            key: L,
            class: f([r.rowClick && r.$style.clickableRow, x(B) && r.$style.rowSelected]),
            onClick: (q) => r.rowClick && r.rowClick(B)
          }, [
            l.value ? (n(), m("td", Vt, [
              z(c(he), {
                "model-value": x(B),
                "onUpdate:modelValue": (q) => j(B)
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ])) : M("", !0),
            (n(!0), m(R, null, K(y.value, (q) => (n(), m("td", {
              key: q.name,
              class: f([]),
              style: J(E(q))
            }, [
              $(r.$slots, _(q), {
                row: B,
                column: q
              }, () => [
                D(N(Z(q, B)), 1)
              ])
            ], 4))), 128))
          ], 10, Bt))), 128)),
          r.rows.length ? M("", !0) : (n(), m("tr", {
            key: 0,
            class: f(r.$style.noResults)
          }, zt, 2)),
          r.rows.length && r.showMore ? (n(), m("tr", {
            key: 1,
            class: f(r.$style.showMore)
          }, [
            h("td", Tt, [
              z(c(G), {
                variant: "text",
                color: "info",
                onClick: r.showMore
              }, {
                default: w(() => [
                  D("Show more results")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ], 2)) : M("", !0),
          r.showFooter ? (n(), m("tr", {
            key: 2,
            class: f([r.$style.footer, r.stickyHeader && r.$style.stickyFooter])
          }, [
            l.value ? (n(), m("td", Et)) : M("", !0),
            (n(!0), m(R, null, K(y.value, (B) => (n(), m("th", {
              key: B.name,
              style: J(E(B)),
              scope: "col"
            }, [
              $(r.$slots, `${_(B)}-footer`, { column: B })
            ], 4))), 128))
          ], 2)) : M("", !0)
        ])
      ])
    ], 2));
  }
}), At = "dodo-datatable", Ft = "dodo-datatable-colname", Dt = "dodo-datatable-sortable", Lt = "dodo-datatable-sorticon", Rt = "dodo-datatable-sortactive", Ht = "dodo-datatable-noresults", Ot = "dodo-datatable-showmore", jt = "dodo-datatable-clickablerow", qt = "dodo-datatable-rowselected", Wt = "dodo-datatable-stickyheader", Pt = "dodo-datatable-stickyfooter", Ut = "dodo-datatable-loading", Gt = {
  Datatable: At,
  colName: Ft,
  sortable: Dt,
  sortIcon: Lt,
  sortActive: Rt,
  noResults: Ht,
  showMore: Ot,
  clickableRow: jt,
  rowSelected: qt,
  stickyHeader: Wt,
  stickyFooter: Pt,
  loading: Ut
}, Kt = {
  $style: Gt
}, aa = /* @__PURE__ */ A(Nt, [["__cssModules", Kt]]), Jt = /* @__PURE__ */ T({
  __name: "Dialog",
  props: {
    active: { type: Boolean }
  },
  setup(d) {
    const t = d, e = C();
    return U(() => {
      t.active && e.value && e.value.parentNode.appendChild(e.value);
    }), (i, o) => (n(), I(Ce, { to: "body" }, [
      z(ke, { name: "Dialog" }, {
        default: w(() => [
          i.active ? (n(), m("div", {
            key: 0,
            ref_key: "el",
            ref: e,
            class: f([i.$style.Dialog])
          }, [
            h("div", {
              class: f(i.$style.window)
            }, [
              z(c(W), { padding: "4" }, {
                default: w(() => [
                  $(i.$slots, "default")
                ]),
                _: 3
              }),
              z(c(oe), {
                padding: "4",
                justify: "end",
                gap: "2"
              }, {
                default: w(() => [
                  $(i.$slots, "controls")
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
}), Zt = "dodo-dialog", Qt = "dodo-dialog-window", Xt = {
  Dialog: Zt,
  window: Qt,
  "Dialog-enter-active": "dodo-dialog-dialog-enter-active",
  "Dialog-leave-active": "dodo-dialog-dialog-leave-active",
  "Dialog-enter-from": "dodo-dialog-dialog-enter-from",
  "Dialog-leave-to": "dodo-dialog-dialog-leave-to"
}, Yt = {
  $style: Xt
}, xt = /* @__PURE__ */ A(Jt, [["__cssModules", Yt]]), eo = /* @__PURE__ */ T({
  __name: "Dropdown",
  props: {
    modelValue: { type: Boolean },
    padding: {},
    gap: {},
    disabled: { type: Boolean },
    trigger: {}
  },
  emits: ["update:modelValue"],
  setup(d, { emit: t }) {
    const e = d, i = t, o = C(!1), a = C(""), u = C(), s = C();
    X(
      () => e.modelValue,
      () => {
        y(!!e.modelValue);
      },
      { immediate: !0 }
    ), ee(() => {
      y(!1);
    });
    function y(V) {
      o.value !== V && (e.disabled && V || (o.value = V, i("update:modelValue", V), V ? Me().then(() => {
        _(), window.addEventListener("click", g, { passive: !0, capture: !0 });
      }) : window.removeEventListener("click", g, { capture: !0 })));
    }
    function l(V) {
      e.trigger !== "hover" && (y(!o.value), V.preventDefault());
    }
    function p() {
      e.trigger === "hover" && y(!0);
    }
    function v(V) {
      var O, j;
      if (!o.value || e.trigger !== "hover")
        return;
      const E = V.relatedTarget, H = (O = s.value) == null ? void 0 : O.contains(E), F = (j = u.value) == null ? void 0 : j.contains(E);
      H || F || y(!1);
    }
    function g(V) {
      var E, H;
      if (V.target) {
        const F = (E = s.value) == null ? void 0 : E.contains(V.target), O = (H = u.value) == null ? void 0 : H.contains(V.target);
        if (F || O)
          return;
      }
      y(!1);
    }
    function _() {
      const E = u.value;
      if (!E)
        return;
      const H = E.scrollWidth, F = s.value.getBoundingClientRect(), O = window.innerWidth, j = window.innerHeight, Z = F.bottom + 300 + 16 > j, x = Math.max(16, Math.min(F.left, O - H - 16)), Q = Math.min(600, O - 16 * 2);
      let k = `left: ${x}px; max-width:${Q}px;`;
      Z ? k += `bottom: ${j - F.top}px; max-height: ${F.top - 16}px;` : k += `top: ${F.bottom}px; max-height: ${j - F.bottom - 16}px;`, a.value = k, o.value && requestAnimationFrame(_);
    }
    return ie(nt, { toggle: y }), (V, E) => (n(), m(R, null, [
      h("div", ne({
        ref_key: "el",
        ref: s,
        class: [V.$style.trigger, V.disabled && V.$style.disabled]
      }, V.$attrs, {
        onClick: l,
        onMouseover: p,
        onMouseleave: v
      }), [
        $(V.$slots, "default", { isActive: o.value })
      ], 16),
      o.value ? (n(), m("div", {
        key: 0,
        class: f([V.$style.container]),
        style: J(a.value)
      }, [
        h("div", {
          ref_key: "content",
          ref: u,
          class: f(V.$style.content),
          onMouseleave: v
        }, [
          z(c(W), {
            padding: V.padding ?? "2",
            gap: V.gap ?? "2"
          }, {
            default: w(() => [
              $(V.$slots, "dropdown", { toggle: y })
            ]),
            _: 3
          }, 8, ["padding", "gap"])
        ], 34)
      ], 6)) : M("", !0)
    ], 64));
  }
}), to = "dodo-dropdown-trigger", oo = "dodo-dropdown-disabled", so = "dodo-dropdown-container", no = "dodo-dropdown-content", lo = {
  trigger: to,
  disabled: oo,
  container: so,
  content: no
}, ao = {
  $style: lo
}, ue = /* @__PURE__ */ A(eo, [["__cssModules", ao]]), ro = /* @__PURE__ */ T({
  __name: "Field",
  props: {
    disabled: { type: Boolean },
    button: { type: Boolean }
  },
  setup(d) {
    return (t, e) => (n(), m("div", {
      class: f([t.$style.Field, t.disabled && t.$style.disabled, t.button && t.$style.button])
    }, [
      $(t.$slots, "before"),
      h("div", {
        class: f(t.$style.inner)
      }, [
        $(t.$slots, "default")
      ], 2),
      $(t.$slots, "after")
    ], 2));
  }
}), io = "dodo-field", co = "dodo-field-button", uo = "dodo-field-inner", po = "dodo-field-disabled", vo = {
  Field: io,
  button: co,
  inner: uo,
  disabled: po
}, mo = {
  $style: vo
}, Ie = /* @__PURE__ */ A(ro, [["__cssModules", mo]]), fo = /* @__PURE__ */ T({
  __name: "FluidGrid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean },
    alignItems: {}
  },
  setup(d) {
    const t = d, e = Y(), i = C(), o = C(99999);
    let a = null;
    const u = new ResizeObserver(() => {
      a && clearTimeout(a), a = setTimeout(() => {
        o.value = i.value.clientWidth;
      }, 50);
    });
    te(() => {
      u.observe(i.value);
    }), Fe(() => {
      u.disconnect();
    });
    const s = S(() => t.columnSize >= o.value), y = S(() => {
      let l = `--fluidgrid-size:${t.columnSize}px;`;
      return t.autoFill && (l += "--fluidgrid-mode:auto-fill;"), t.gap && (l += `gap:${e.gapValue(t.gap)};`), t.padding && (l += `padding:${e.gapValue(t.padding)};`), l;
    });
    return (l, p) => (n(), m("div", {
      ref_key: "el",
      ref: i,
      class: f([l.$style.FluidGrid, s.value && l.$style.oneColumn]),
      style: J(y.value)
    }, [
      $(l.$slots, "default")
    ], 6));
  }
}), yo = "dodo-fluidgrid", $o = "dodo-fluidgrid-onecolumn", ho = {
  FluidGrid: yo,
  oneColumn: $o
}, go = {
  $style: ho
}, ra = /* @__PURE__ */ A(fo, [["__cssModules", go]]), bo = /* @__PURE__ */ T({
  __name: "Grid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean }
  },
  setup(d) {
    const t = Y();
    return (e, i) => (n(), m("div", {
      class: f([
        e.$style.component,
        e.$style[`col-${e.columnSize}`],
        e.autoFill && e.$style.autoFill,
        c(t).gap(e.gap),
        c(t).padding(e.padding)
      ])
    }, [
      $(e.$slots, "default")
    ], 2));
  }
}), wo = "dodo-grid-component", ko = "dodo-grid-autofill", Co = {
  component: wo,
  autoFill: ko,
  "col-xs": "dodo-grid-col-xs",
  "col-s": "dodo-grid-col-s",
  "col-m": "dodo-grid-col-m",
  "col-l": "dodo-grid-col-l"
}, Mo = {
  $style: Co
}, ia = /* @__PURE__ */ A(bo, [["__cssModules", Mo]]), ae = "Outlined", be = "300", _o = /* @__PURE__ */ T({
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
    const t = d, e = Y(), i = C(), o = at({
      weight: be,
      name: `Material Symbols ${ae}`,
      href: `https://fonts.googleapis.com/css2?family=Material+Symbols+${ae}:wght,FILL@${be},0..1`
    });
    return (a, u) => (n(), m("span", {
      ref_key: "el",
      ref: i,
      style: J([a.color ? `color: ${c(e).colorCss(a.color)};` : "", c(o).isReady ? "" : "visibility:hidden"]),
      class: f([
        a.$style.icon,
        "material-symbols-" + ae.toLowerCase(),
        t.size && a.$style[t.size],
        t.fill && a.$style.fill
      ])
    }, N(a.name), 7));
  }
}), So = "dodo-icon", Bo = "dodo-icon-fill", Vo = "dodo-icon-xs", Io = "dodo-icon-s", zo = "dodo-icon-l", To = "dodo-icon-xl", Eo = {
  icon: So,
  fill: Bo,
  xs: Vo,
  s: Io,
  l: zo,
  xl: To
}, No = {
  $style: Eo
}, P = /* @__PURE__ */ A(_o, [["__cssModules", No]]), Ao = ["id", "value", "placeholder", "disabled", "maxlength", "type", "name", "autofocus"], da = /* @__PURE__ */ T({
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
  setup(d, { emit: t }) {
    const e = C(null), i = t;
    function o() {
      i("update:modelValue", e.value.value);
    }
    return (a, u) => (n(), m("input", {
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
      onInput: o
    }, null, 40, Ao));
  }
}), Fo = ["for"], Do = { class: "dodo-label-text" }, Lo = {
  key: 0,
  class: "dodo-color-danger"
}, Ro = {
  key: 1,
  class: "dodo-fade-secondary"
}, ca = /* @__PURE__ */ T({
  __name: "Label",
  props: {
    text: {},
    for: {},
    error: {},
    hint: {},
    required: { type: Boolean }
  },
  setup(d) {
    const t = d;
    return (e, i) => (n(), m("label", {
      class: f(["dodo-label", e.error && "dodo-label--error"]),
      for: t.for
    }, [
      h("span", Do, N(e.text), 1),
      $(e.$slots, "default"),
      e.error ? (n(), m("small", Lo, N(e.error), 1)) : e.hint ? (n(), m("small", Ro, N(e.hint), 1)) : M("", !0)
    ], 10, Fo));
  }
}), Ho = {
  key: 0,
  class: "dodo-nowrap dodo-fade-secondary"
}, Oo = /* @__PURE__ */ T({
  __name: "MenuItem",
  props: {
    active: { type: Boolean },
    emphasize: { type: Boolean },
    separator: { type: Boolean }
  },
  setup(d) {
    return (t, e) => (n(), m(R, null, [
      t.separator ? (n(), m("hr", {
        key: 0,
        class: f(t.$style.separator)
      }, null, 2)) : M("", !0),
      h("div", ne(t.$attrs, {
        class: [t.$style.DropdownItem, t.active && t.$style.active, t.emphasize && t.$style.emphasize]
      }), [
        $(t.$slots, "before"),
        z(c(W), {
          gap: "0",
          style: { flex: "1" }
        }, {
          default: w(() => [
            h("p", {
              class: f([t.$style.text, "dodo-nowrap"])
            }, [
              $(t.$slots, "default")
            ], 2),
            t.$slots["text-secondary"] ? (n(), m("p", Ho, [
              $(t.$slots, "text-secondary")
            ])) : M("", !0)
          ]),
          _: 3
        }),
        $(t.$slots, "after")
      ], 16)
    ], 64));
  }
}), jo = "dodo-menuitem-dropdownitem", qo = "dodo-menuitem-active", Wo = "dodo-menuitem-emphasize", Po = "dodo-menuitem-text", Uo = "dodo-menuitem-separator", Go = {
  DropdownItem: jo,
  active: qo,
  emphasize: Wo,
  text: Po,
  separator: Uo
}, Ko = {
  $style: Go
}, Jo = /* @__PURE__ */ A(Oo, [["__cssModules", Ko]]), Zo = /* @__PURE__ */ T({
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
    const t = d, e = de(), i = C(), o = C(!1);
    te(() => {
      o.value = !!i.value.closest("[data-mobile-nav]");
    });
    const a = re(_e), u = S(() => a == null ? void 0 : a.collapsed.value), s = S(() => a == null ? void 0 : a.renderMobile.value), y = S(() => s.value || !u.value);
    async function l(p) {
      a && !e.submenu && (a.mobileToggle.value = !1), t.link && await t.link.navigate();
    }
    return (p, v) => (n(), I(c(pe), {
      text: p.text,
      disabled: y.value,
      side: "right"
    }, {
      default: w(() => [
        (n(), I(le(p.$slots.submenu ? c(ue) : "div"), null, {
          dropdown: w(() => [
            $(p.$slots, "submenu")
          ]),
          default: w(() => {
            var g;
            return [
              h("div", {
                ref_key: "el",
                ref: i,
                class: f([
                  p.$style.NavBarItem,
                  (p.active || ((g = p.link) == null ? void 0 : g.isActive.value)) && p.$style.active,
                  p.important && p.$style.important,
                  u.value && p.$style.collapsed
                ]),
                onClick: l
              }, [
                p.icon || p.$slots.icon ? (n(), m("div", {
                  key: 0,
                  class: f(p.$style.icon)
                }, [
                  $(p.$slots, "icon", {}, () => [
                    z(c(P), {
                      name: p.icon
                    }, null, 8, ["name"])
                  ])
                ], 2)) : M("", !0),
                h("div", {
                  class: f(p.$style.textwrap)
                }, [
                  h("p", {
                    class: f([p.$style.text, "dodo-nowrap"]),
                    color: "background"
                  }, N(p.text), 3),
                  p.textSecondary ? (n(), m("p", {
                    key: 0,
                    class: f([p.$style.secondary, "dodo-nowrap"]),
                    color: "background"
                  }, N(p.textSecondary), 3)) : M("", !0)
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
}), Qo = "dodo-navbaritem", Xo = "dodo-navbaritem-active", Yo = "dodo-navbaritem-important", xo = "dodo-navbaritem-textwrap", es = "dodo-navbaritem-icon", ts = "dodo-navbaritem-text", os = "dodo-navbaritem-secondary", ss = {
  NavBarItem: Qo,
  active: Xo,
  important: Yo,
  textwrap: xo,
  icon: es,
  text: ts,
  secondary: os
}, ns = {
  $style: ss
}, we = /* @__PURE__ */ A(Zo, [["__cssModules", ns]]), ls = { style: { "margin-right": "8px" } }, as = /* @__PURE__ */ T({
  __name: "NavBar",
  props: {
    mobile: { type: Boolean }
  },
  setup(d) {
    const t = d, { screenLarge: e } = Se(), i = lt("NavBar-collapse", null), o = C(!1), a = S(() => t.mobile || !e.value);
    ie(_e, { collapsed: i, renderMobile: a, mobileToggle: o });
    function u() {
      a.value && (o.value = !1);
    }
    return (s, y) => (n(), m("div", {
      class: f([
        s.$style.root,
        c(i) && s.$style.collapsed,
        o.value && s.$style.mobileToggle,
        a.value && s.$style.mobileMenu
      ]),
      onClick: se(u, ["self"])
    }, [
      o.value ? (n(), m("div", {
        key: 0,
        class: f(s.$style.backdrop),
        onClick: y[0] || (y[0] = (l) => o.value = !1)
      }, null, 2)) : M("", !0),
      h("div", {
        class: f(s.$style.NavBar)
      }, [
        s.$slots["navbar-header"] ? (n(), m("div", {
          key: 0,
          class: f(s.$style.header)
        }, [
          h("div", null, [
            $(s.$slots, "navbar-header")
          ]),
          h("div", ls, [
            a.value ? (n(), I(c(G), {
              key: 0,
              variant: "text",
              square: "",
              color: "background",
              onClick: y[1] || (y[1] = (l) => o.value = !1)
            }, {
              default: w(() => [
                z(c(P), { name: "close" })
              ]),
              _: 1
            })) : M("", !0)
          ])
        ], 2)) : M("", !0),
        h("div", {
          class: f(s.$style.middle)
        }, [
          $(s.$slots, "default")
        ], 2),
        s.$slots["navbar-footer"] ? (n(), m("div", {
          key: 1,
          class: f(s.$style.footer)
        }, [
          $(s.$slots, "navbar-footer"),
          a.value ? M("", !0) : (n(), I(we, {
            key: 0,
            text: c(i) ? "Expand" : "Collapse",
            icon: c(i) ? "last_page" : "first_page",
            onClick: y[2] || (y[2] = (l) => i.value = !c(i))
          }, null, 8, ["text", "icon"]))
        ], 2)) : M("", !0)
      ], 2),
      h("div", {
        class: f(s.$style.wrapMobile)
      }, [
        s.$slots.main ? (n(), I(c(W), {
          key: 0,
          class: f(s.$style.main)
        }, {
          default: w(() => [
            $(s.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : M("", !0),
        a.value ? (n(), m("div", {
          key: 1,
          class: f(s.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          $(s.$slots, "default", { inMobileBar: !0 }),
          $(s.$slots, "navbar-footer", { inMobileBar: !0 }),
          z(we, {
            text: "Menu",
            icon: "menu",
            onClick: y[3] || (y[3] = (l) => o.value = !o.value)
          })
        ], 2)) : M("", !0)
      ], 2)
    ], 2));
  }
}), rs = "dodo-navbar-root", is = "dodo-navbar", ds = "dodo-navbar-collapsed", cs = "dodo-navbar-header", us = "dodo-navbar-middle", ps = "dodo-navbar-footer", vs = "dodo-navbar-wrapmobile", ms = "dodo-navbar-main", fs = "dodo-navbar-backdrop", ys = "dodo-navbar-mobilemenu", $s = "dodo-navbar-mobiletoggle", hs = "dodo-navbar-mobilenav", gs = {
  root: rs,
  NavBar: is,
  collapsed: ds,
  header: cs,
  middle: us,
  footer: ps,
  wrapMobile: vs,
  main: ms,
  backdrop: fs,
  mobileMenu: ys,
  mobileToggle: $s,
  mobileNav: hs
}, bs = {
  $style: gs
}, ua = /* @__PURE__ */ A(as, [["__cssModules", bs]]), ze = it(() => {
  const d = C([]), t = C(""), e = C([]), i = C(!1);
  return X(d, () => {
    i.value = !1;
  }), { headerText: t, activeItems: d, expandedMenu: e, mobileToggle: i };
}), ws = (d) => {
  const t = ze.injectOptional(), e = De(), i = (l) => l ? [l.uid, ...i(l.parent)] : [], o = (l) => {
    !l || !t || (t.activeItems.value = i(e), t.headerText.value = d.text.value);
  }, a = S(() => t == null ? void 0 : t.headerText.value), u = () => {
    !e || !t || (t.expandedMenu.value.includes(e.uid) ? t.expandedMenu.value = [] : t.expandedMenu.value = i(e));
  }, s = S(() => !e || !t ? !1 : t.activeItems.value.includes(e.uid)), y = S(() => !e || !t ? !1 : t.expandedMenu.value.length ? t.expandedMenu.value.includes(e.uid) : t.activeItems.value.includes(e.uid));
  return X(d.active, () => o(d.active.value), { immediate: !0 }), ee(() => o(!1)), U(() => {
    a.value && (document.title = a.value);
  }), { showAsActive: s, isExpanded: y, toggleExpand: u, headerText: a };
}, ks = /* @__PURE__ */ T({
  __name: "NavBarNew",
  setup(d) {
    const { headerText: t, mobileToggle: e } = ze.createAndProvide(), { screenLarge: i } = Se(), o = S(() => !i.value);
    function a() {
      e.value = !1;
    }
    return (u, s) => (n(), m("div", {
      class: f([u.$style.root, c(e) && u.$style.mobileToggle, o.value && u.$style.mobileMenu]),
      onClick: se(a, ["self"])
    }, [
      c(e) ? (n(), m("div", {
        key: 0,
        class: f(u.$style.backdrop),
        onClick: s[0] || (s[0] = (y) => e.value = !1)
      }, null, 2)) : M("", !0),
      h("div", {
        class: f(u.$style.NavBar)
      }, [
        h("div", {
          class: f(u.$style.middle)
        }, [
          $(u.$slots, "default")
        ], 2),
        u.$slots["navbar-footer"] ? (n(), m("div", {
          key: 0,
          class: f(u.$style.footer)
        }, [
          $(u.$slots, "navbar-footer")
        ], 2)) : M("", !0)
      ], 2),
      h("div", {
        class: f(u.$style.wrapMobile)
      }, [
        o.value ? (n(), m("div", {
          key: 0,
          class: f(u.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          h("h5", null, N(c(t)), 1),
          z(c(pe), { text: "Toggle menu" }, {
            default: w(() => [
              h("div", {
                class: f(u.$style.menuButton)
              }, [
                z(c(P), {
                  name: "menu",
                  onClick: s[1] || (s[1] = (y) => e.value = !c(e))
                })
              ], 2)
            ]),
            _: 1
          })
        ], 2)) : M("", !0),
        u.$slots.main ? (n(), I(c(W), {
          key: 1,
          class: f(u.$style.main)
        }, {
          default: w(() => [
            $(u.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : M("", !0)
      ], 2)
    ], 2));
  }
}), Cs = "dodo-navbarnew-root", Ms = "dodo-navbarnew-navbar", _s = "dodo-navbarnew-middle", Ss = "dodo-navbarnew-footer", Bs = "dodo-navbarnew-wrapmobile", Vs = "dodo-navbarnew-main", Is = "dodo-navbarnew-backdrop", zs = "dodo-navbarnew-menubutton", Ts = "dodo-navbarnew-mobilemenu", Es = "dodo-navbarnew-mobiletoggle", Ns = "dodo-navbarnew-mobilenav", As = {
  root: Cs,
  NavBar: Ms,
  middle: _s,
  footer: Ss,
  wrapMobile: Bs,
  main: Vs,
  backdrop: Is,
  menuButton: zs,
  mobileMenu: Ts,
  mobileToggle: Es,
  mobileNav: Ns
}, Fs = {
  $style: As
}, pa = /* @__PURE__ */ A(ks, [["__cssModules", Fs]]), Ds = ["href"], Ls = { key: 0 }, Rs = /* @__PURE__ */ T({
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
    const t = d, e = S(() => t.link ? c(t.link.isActive) : !1), i = S(() => t.text), { isExpanded: o, showAsActive: a, toggleExpand: u } = ws({ text: i, active: e }), s = de();
    async function y(l) {
      s.submenu && u(), t.link && (await t.link.navigate(), l.preventDefault());
    }
    return (l, p) => (n(), m("div", {
      class: f([l.$style.el])
    }, [
      z(c(pe), {
        text: l.tooltipText,
        side: "right"
      }, {
        default: w(() => {
          var v;
          return [
            h("a", {
              class: f([l.$style.link, c(a) && l.$style.active, l.important && l.$style.important]),
              href: c((v = l.link) == null ? void 0 : v.href),
              onClick: y
            }, [
              h("div", {
                class: f(l.$style.icon)
              }, [
                $(l.$slots, "icon", {}, () => [
                  l.icon ? (n(), I(c(P), {
                    key: 0,
                    name: l.icon
                  }, null, 8, ["name"])) : M("", !0)
                ])
              ], 2),
              h("div", {
                class: f(l.$style.textwrap)
              }, [
                h("p", {
                  class: f([l.$style.text, "dodo-nowrap"])
                }, N(i.value), 3),
                l.textSecondary ? (n(), m("p", {
                  key: 0,
                  class: f([l.$style.secondary, "dodo-nowrap"])
                }, N(l.textSecondary), 3)) : M("", !0)
              ], 2),
              c(s).submenu ? (n(), m("div", Ls, [
                z(c(P), {
                  name: c(o) ? "expand_less" : "expand_more",
                  size: "s",
                  style: { margin: "0 -0.25em" }
                }, null, 8, ["name"])
              ])) : M("", !0)
            ], 10, Ds)
          ];
        }),
        _: 3
      }, 8, ["text"]),
      l.$slots.submenu ? (n(), m("div", {
        key: 0,
        class: f([l.$style.submenu, c(o) && l.$style.expanded])
      }, [
        $(l.$slots, "submenu")
      ], 2)) : M("", !0)
    ], 2));
  }
}), Hs = "dodo-navitem-el", Os = "dodo-navitem-link", js = "dodo-navitem-submenu", qs = "dodo-navitem-expanded", Ws = "dodo-navitem-active", Ps = "dodo-navitem-important", Us = "dodo-navitem-textwrap", Gs = "dodo-navitem-icon", Ks = "dodo-navitem-text", Js = "dodo-navitem-secondary", Zs = {
  el: Hs,
  link: Os,
  submenu: js,
  expanded: qs,
  active: Ws,
  important: Ps,
  textwrap: Us,
  icon: Gs,
  text: Ks,
  secondary: Js
}, Qs = {
  $style: Zs
}, va = /* @__PURE__ */ A(Rs, [["__cssModules", Qs]]), Xs = /* @__PURE__ */ T({
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
    const t = Y();
    return (e, i) => (n(), m("div", {
      class: f([
        e.$style.el,
        c(t).gap(e.gap),
        c(t).padding(e.padding),
        c(t).align(e.align),
        c(t).justify(e.justify),
        c(t).wrap(e.wrap),
        c(t).grow(e.grow)
      ])
    }, [
      $(e.$slots, "default")
    ], 2));
  }
}), Ys = "dodo-row-el", xs = {
  el: Ys
}, en = {
  $style: xs
}, oe = /* @__PURE__ */ A(Xs, [["__cssModules", en]]), tn = /* @__PURE__ */ T({
  __name: "ScrollContainer",
  setup(d) {
    const t = S(() => "");
    return (e, i) => (n(), m("div", {
      class: f([e.$style.ScrollContainer]),
      style: J(t.value)
    }, [
      $(e.$slots, "default")
    ], 6));
  }
}), on = "dodo-scrollcontainer", sn = {
  ScrollContainer: on
}, nn = {
  $style: sn
}, ln = /* @__PURE__ */ A(tn, [["__cssModules", nn]]), an = {
  key: 0,
  class: "dodo-nowrap"
}, rn = {
  key: 1,
  class: "dodo-nowrap dodo-fade-secondary"
}, dn = ["disabled"], cn = 12, un = /* @__PURE__ */ T({
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
  setup(d, { emit: t }) {
    const e = d, i = t, o = S(() => (e.multiple ? [e.modelValue].flat() : [e.modelValue]).filter(F)), a = C(!1), u = C(""), s = C(), y = C(), l = C(), p = C();
    U(() => {
      a.value && s.value && (u.value = "", s.value.focus());
    }), U(() => {
      u.value && y.value && y.value.$el.querySelector("input").focus();
    }), U(() => {
      a.value && setTimeout(() => {
        var b;
        const k = (b = l.value) == null ? void 0 : b.$el, r = k == null ? void 0 : k.querySelector("[data-selectactive]");
        r == null || r.scrollIntoView({ block: "center" });
      }, 0);
    });
    const v = C(!1), g = S(() => e.options.length > cn), _ = S(() => g.value && !v.value ? 6 : e.options.length), V = S(() => u.value || e.options.length >= 10), E = S(() => {
      const k = u.value.toLowerCase(), r = e.options.filter((L) => `${L.value}|${L.label}`.toLowerCase().includes(k));
      if (!e.multiple)
        return r;
      const b = r.filter((L) => o.value.find((q) => j(L, q))), B = r.filter((L) => !b.includes(L));
      return b.concat(B);
    }), H = S(() => e.placeholder ? e.placeholder : e.multiple ? "Select one or more" : "Select one");
    function F(k) {
      return e.options.find((r) => j(r, k));
    }
    function O(k) {
      let r = k.value;
      e.multiple ? o.value.includes(r) ? r = o.value.filter((b) => !j(k, b)) : r = o.value.concat(k.value) : a.value = !1, i("update:modelValue", r);
    }
    function j(k, r) {
      return k.value === r;
    }
    function Z(k) {
      return k.label || `${k.value}`;
    }
    function x(k) {
      return o.value.some((r) => j(k, r));
    }
    function Q(k) {
      var B, L;
      const r = (B = p.value) == null ? void 0 : B.$el.contains(k.target), b = (L = l.value) == null ? void 0 : L.$el.contains(k.target);
      a.value = r || b;
    }
    return te(() => {
      document.addEventListener("focusin", Q);
    }), ee(() => {
      document.removeEventListener("focusin", Q);
    }), (k, r) => k.variant === "buttons" ? (n(), I(c(oe), {
      key: 0,
      gap: "1",
      wrap: ""
    }, {
      default: w(() => [
        (n(!0), m(R, null, K(k.options.slice(0, _.value), (b, B) => (n(), I(c(G), {
          key: Z(b),
          color: x(b) ? "info" : void 0,
          active: x(b),
          variant: x(b) && !k.multiple ? "solid" : void 0,
          disabled: k.disabled,
          small: k.size === "s",
          rounded: "",
          onClick: (L) => O(b)
        }, {
          default: w(() => [
            k.multiple && x(b) ? (n(), I(c(P), {
              key: 0,
              name: "check",
              size: "s",
              style: { margin: "-2px" }
            })) : M("", !0),
            $(k.$slots, "default", {
              option: b,
              index: B
            }, () => [
              D(N(Z(b)), 1)
            ])
          ]),
          _: 2
        }, 1032, ["color", "active", "variant", "disabled", "small", "onClick"]))), 128)),
        g.value ? (n(), m(R, { key: 0 }, [
          v.value ? (n(), I(c(G), {
            key: 0,
            small: k.size === "s",
            variant: "text",
            rounded: "",
            onClick: r[0] || (r[0] = (b) => v.value = !v.value)
          }, {
            default: w(() => [
              D(" Less "),
              z(c(P), {
                name: "expand_less",
                size: "s",
                style: { margin: "-2px" }
              })
            ]),
            _: 1
          }, 8, ["small"])) : (n(), I(c(G), {
            key: 1,
            small: k.size === "s",
            variant: "text",
            rounded: "",
            onClick: r[1] || (r[1] = (b) => v.value = !v.value)
          }, {
            default: w(() => [
              D(N(k.options.length - _.value) + " more ", 1),
              z(c(P), {
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
    })) : (n(), I(c(ue), {
      key: 1,
      modelValue: a.value,
      "onUpdate:modelValue": r[5] || (r[5] = (b) => a.value = b),
      disabled: k.disabled
    }, {
      dropdown: w(() => [
        z(c(W), {
          ref_key: "dropdownEl",
          ref: l,
          style: { "min-height": "0" },
          gap: "0",
          onMousedown: r[4] || (r[4] = se(() => {
          }, ["stop", "prevent"]))
        }, {
          default: w(() => [
            ye(z(c(oe), {
              padding: "2",
              class: f(k.$style.searchbox)
            }, {
              default: w(() => [
                z(c(Rl), {
                  ref_key: "searchEl",
                  ref: y,
                  modelValue: u.value,
                  "onUpdate:modelValue": r[3] || (r[3] = (b) => u.value = b),
                  type: "search",
                  placeholder: "Search",
                  tabindex: "0",
                  style: { "flex-grow": "1" }
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["class"]), [
              [Le, V.value]
            ]),
            z(c(ln), null, {
              default: w(() => [
                (n(!0), m(R, null, K(E.value, (b, B) => (n(), I(c(Jo), {
                  key: `${b.value}`,
                  "data-selectactive": o.value.includes(b.value) ? "true" : void 0,
                  active: o.value.includes(b.value),
                  onClick: (L) => O(b)
                }, {
                  default: w(() => [
                    $(k.$slots, "default", {
                      index: B,
                      option: b
                    }, () => [
                      D(N(Z(b)), 1)
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
        z(c(Ie), {
          ref_key: "fieldEl",
          ref: p,
          button: "",
          disabled: k.disabled
        }, {
          after: w(() => [
            z(c(P), { name: "arrow_drop_down" })
          ]),
          default: w(() => [
            o.value.length ? (n(), m("p", an, [
              (n(!0), m(R, null, K(o.value, (b, B) => (n(), m(R, null, [
                B ? (n(), m(R, { key: 0 }, [
                  D(", ")
                ], 64)) : M("", !0),
                F(b) ? $(k.$slots, "default", {
                  key: 1,
                  index: k.options.indexOf(F(b)),
                  option: F(b)
                }, () => [
                  D(N(Z(F(b))), 1)
                ]) : (n(), m(R, { key: 2 }, [
                  D(N(b), 1)
                ], 64))
              ], 64))), 256))
            ])) : (n(), m("p", rn, N(H.value), 1)),
            ye(h("input", {
              ref_key: "hiddenInput",
              ref: s,
              "onUpdate:modelValue": r[2] || (r[2] = (b) => u.value = b),
              style: { position: "fixed", "pointer-events": "none", opacity: "0" },
              disabled: k.disabled
            }, null, 8, dn), [
              [Re, u.value]
            ])
          ]),
          _: 3
        }, 8, ["disabled"])
      ]),
      _: 3
    }, 8, ["modelValue", "disabled"]));
  }
}), pn = "dodo-select-searchbox", vn = {
  searchbox: pn
}, mn = {
  $style: vn
}, ma = /* @__PURE__ */ A(un, [["__cssModules", mn]]), fn = /* @__PURE__ */ T({
  __name: "SelectButtons",
  props: {
    options: {},
    modelValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    small: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(d, { emit: t }) {
    const e = d, i = t, o = S(() => e.multiple ? [e.modelValue].flat() : [e.modelValue]);
    function a(y, l) {
      return y.value === l;
    }
    function u(y) {
      return o.value.some((l) => a(y, l));
    }
    function s(y) {
      let l = y.value;
      u(y) && e.multiple ? l = o.value.filter((v) => !a(y, v)) : e.multiple && (l = [...o.value, y.value]), i("update:modelValue", l);
    }
    return (y, l) => (n(), m("div", {
      class: f([y.$style.Select, y.multiple && y.$style.multiple])
    }, [
      (n(!0), m(R, null, K(y.options, (p, v) => (n(), I(c(G), ne({
        key: p.label
      }, u(p) ? { active: !0, color: "info" } : {}, {
        disabled: y.disabled,
        small: y.small,
        rounded: "",
        onClick: (g) => s(p)
      }), {
        default: w(() => [
          $(y.$slots, "default", {
            option: p,
            index: v
          }, () => [
            D(N(p.label || p.value), 1)
          ])
        ]),
        _: 2
      }, 1040, ["disabled", "small", "onClick"]))), 128))
    ], 2));
  }
}), yn = "dodo-selectbuttons-select", $n = "dodo-selectbuttons-multiple", hn = {
  Select: yn,
  multiple: $n
}, gn = {
  $style: hn
}, fa = /* @__PURE__ */ A(fn, [["__cssModules", gn]]), bn = {
  key: 0,
  viewBox: "0 0 48 48"
}, wn = /* @__PURE__ */ ce('<clipPath id="g"><path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path></clipPath><g clip-path="url(#g)"><path fill="#FBBC05" d="M0 37V11l17 13z"></path><path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path><path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path><path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path></g>', 2), kn = [
  wn
], Cn = {
  key: 1,
  viewBox: "0 0 248 204"
}, Mn = /* @__PURE__ */ h("path", {
  id: "white_background",
  fill: "#1D9BF0",
  d: "M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
}, null, -1), _n = [
  Mn
], Sn = {
  key: 2,
  viewBox: "60 60 140 140"
}, Bn = /* @__PURE__ */ ce('<path fill="#E01E5A" d="M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"></path><path fill="#E01E5A" d="M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9V151.2z"></path><path fill="#36C5F0" d="M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"></path><path fill="#36C5F0" d="M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9H118.8z"></path><path fill="#2EB67D" d="M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"></path><path fill="#2EB67D" d="M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9V118.8z"></path><path fill="#ECB22E" d="M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"></path><path fill="#ECB22E" d="M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9H151.2z"></path>', 8), Vn = [
  Bn
], In = {
  key: 3,
  viewBox: "2 2 46 46"
}, zn = /* @__PURE__ */ h("path", { d: "M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" }, null, -1), Tn = [
  zn
], En = {
  key: 4,
  viewBox: "0 0 14222 14222"
}, Nn = /* @__PURE__ */ h("circle", {
  cx: "7111",
  cy: "7112",
  r: "7111",
  fill: "#1977f3"
}, null, -1), An = /* @__PURE__ */ h("path", {
  d: "M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z",
  fill: "#fff"
}, null, -1), Fn = [
  Nn,
  An
], Dn = {
  key: 5,
  viewBox: "0 0 24 24"
}, Ln = /* @__PURE__ */ h("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }, null, -1), Rn = [
  Ln
], Hn = {
  key: 6,
  viewBox: "6 6 36 36"
}, On = /* @__PURE__ */ h("path", {
  fill: "#0288D1",
  d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
}, null, -1), jn = /* @__PURE__ */ h("path", {
  fill: "#FFF",
  d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
}, null, -1), qn = [
  On,
  jn
], Wn = {
  key: 7,
  viewBox: "10 10 160 160"
}, Pn = /* @__PURE__ */ ce('<defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"></stop><stop offset="1" stop-color="#23b33a"></stop></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531"></feGaussianBlur></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"></path><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"></path><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"></path><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"></path><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"></path>', 6), Un = [
  Pn
], Gn = /* @__PURE__ */ T({
  __name: "SocialIcon",
  props: {
    name: {},
    white: { type: Boolean },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(d) {
    return (t, e) => (n(), m("span", {
      class: f([t.$style.SocialIcon, t.small && t.$style.small, t.large && t.$style.large, t.white && t.$style.white])
    }, [
      t.name === "google" ? (n(), m("svg", bn, kn)) : t.name === "twitter" ? (n(), m("svg", Cn, _n)) : t.name === "slack" ? (n(), m("svg", Sn, Vn)) : t.white && t.name === "facebook" ? (n(), m("svg", In, Tn)) : t.name === "facebook" ? (n(), m("svg", En, Fn)) : t.white && t.name === "linkedin" ? (n(), m("svg", Dn, Rn)) : t.name === "linkedin" ? (n(), m("svg", Hn, qn)) : t.name === "whatsapp" ? (n(), m("svg", Wn, Un)) : M("", !0)
    ], 2));
  }
}), Kn = "dodo-socialicon", Jn = "dodo-socialicon-white", Zn = "dodo-socialicon-small", Qn = "dodo-socialicon-large", Xn = {
  SocialIcon: Kn,
  white: Jn,
  small: Zn,
  large: Qn
}, Yn = {
  $style: Xn
}, ya = /* @__PURE__ */ A(Gn, [["__cssModules", Yn]]), xn = /* @__PURE__ */ h("path", {
  stroke: "currentColor",
  fill: "none",
  d: "M 9 1 A 8 8 0 0 1 17 9",
  "stroke-width": "2"
}, null, -1), el = /* @__PURE__ */ h("path", {
  stroke: "currentColor",
  opacity: "0.33",
  fill: "none",
  d: "M 17 9 A 8 8 0 1 1 9 1",
  "stroke-width": "2"
}, null, -1), tl = [
  xn,
  el
], ol = /* @__PURE__ */ T({
  __name: "Spinner",
  props: {
    color: { default: void 0 },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(d) {
    const t = Y(), e = d, i = S(() => {
      let o = "";
      return e.color === "inherit" ? o += "color:inherit;" : e.color && (o += `color:${t.colorCss(e.color)};`), o;
    });
    return (o, a) => (n(), m("div", {
      class: f([o.$style.Spinner, o.small && o.$style.small, o.large && o.$style.large])
    }, [
      (n(), m("svg", {
        style: J(i.value),
        viewBox: "0 0 18 18"
      }, tl, 4))
    ], 2));
  }
}), sl = "dodo-spinner", nl = "dodo-spinner-small", ll = "dodo-spinner-large", al = {
  Spinner: sl,
  small: nl,
  large: ll
}, rl = {
  $style: al
}, il = /* @__PURE__ */ A(ol, [["__cssModules", rl]]), dl = ["onClick"], cl = {
  key: 1,
  class: "dodo-color-background"
}, ul = { style: {} }, pl = { key: 0 }, vl = {
  key: 1,
  class: "dodo-fade-secondary"
}, ml = {
  key: 0,
  class: "dodo-fade-secondary"
}, fl = /* @__PURE__ */ h("br", null, null, -1), yl = /* @__PURE__ */ T({
  __name: "Stepper",
  props: {
    stepIndex: {},
    steps: {},
    submit: { type: Function },
    completed: {}
  },
  emits: ["update:stepIndex", "submit"],
  setup(d, { emit: t }) {
    const e = d, i = t, o = C(0), a = S(() => e.steps[o.value]);
    function u() {
      o.value--;
    }
    async function s() {
      const l = a.value;
      if (l.filled !== !1 && !(l.validate && !await l.validate())) {
        if (o.value === e.steps.length - 1) {
          await e.submit();
          return;
        }
        o.value++;
      }
    }
    function y(l) {
      l > o.value || (o.value = l);
    }
    return U(() => {
      e.stepIndex != null && (o.value = e.stepIndex);
    }), X(o, () => {
      i("update:stepIndex", o.value);
    }), (l, p) => (n(), I(c(W), {
      class: f(l.$style.stepper)
    }, {
      default: w(() => [
        (n(!0), m(R, null, K(l.steps, (v, g) => (n(), I(c(oe), {
          key: v.key,
          align: "stretch",
          gap: "4",
          class: f(g > o.value && l.$style.inactiveStep)
        }, {
          default: w(() => [
            z(c(W), { align: "center" }, {
              default: w(() => [
                h("div", {
                  class: f([l.$style.circle]),
                  onClick: (_) => y(g)
                }, [
                  o.value > g ? (n(), I(c(P), {
                    key: 0,
                    name: "check"
                  })) : (n(), m("h3", cl, N(g + 1), 1))
                ], 10, dl),
                g < l.steps.length - 1 ? (n(), m("div", {
                  key: 0,
                  class: f(l.$style.line)
                }, null, 2)) : M("", !0)
              ]),
              _: 2
            }, 1024),
            z(c(W), { grow: "" }, {
              default: w(() => [
                z(c(W), {
                  gap: "1",
                  onClick: (_) => y(g)
                }, {
                  default: w(() => [
                    h("h3", ul, [
                      v === a.value ? (n(), m("span", pl, N(v.name), 1)) : (n(), m("span", vl, N(v.name), 1))
                    ]),
                    v.hint ? (n(), m("p", ml, N(v.hint), 1)) : M("", !0)
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                v === a.value ? (n(), I(c(W), { key: 0 }, {
                  default: w(() => [
                    $(l.$slots, v.slot),
                    z(c(oe), null, {
                      default: w(() => [
                        o.value > 0 ? (n(), I(c(G), {
                          key: 0,
                          variant: "text",
                          onClick: u
                        }, {
                          default: w(() => [
                            D(" Back ")
                          ]),
                          _: 1
                        })) : M("", !0),
                        o.value < l.steps.length - 1 ? (n(), I(c(G), {
                          key: 1,
                          disabled: v.filled === !1,
                          color: "primary",
                          variant: "solid",
                          onClick: s
                        }, {
                          default: w(() => [
                            $(l.$slots, "continue-button-text", {}, () => [
                              D("Continue")
                            ])
                          ]),
                          _: 2
                        }, 1032, ["disabled"])) : (n(), I(c(G), {
                          key: 2,
                          color: "primary",
                          variant: "solid",
                          onClick: s
                        }, {
                          default: w(() => [
                            $(l.$slots, "submit-button-text", {}, () => [
                              D("Submit")
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
                fl
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
}), $l = "dodo-stepper-line", hl = "dodo-stepper-circle", gl = "dodo-stepper-inactivestep", bl = {
  line: $l,
  circle: hl,
  inactiveStep: gl
}, wl = {
  $style: bl
}, $a = /* @__PURE__ */ A(yl, [["__cssModules", wl]]), kl = ["onClick"], Cl = ["onClick"], Ml = /* @__PURE__ */ h("hr", null, null, -1), _l = /* @__PURE__ */ T({
  __name: "Tabs",
  props: {
    tabs: {},
    tabIndex: {}
  },
  emits: ["update:tabIndex"],
  setup(d, { emit: t }) {
    const e = d, i = t, o = C(), a = C(""), u = S(() => e.tabs.find((_) => g(_) === a.value)), s = C(99), y = S(() => e.tabs.slice(0, s.value)), l = S(() => e.tabs.slice(s.value)), p = C();
    U(() => {
      !u.value && e.tabs.length && (a.value = g(e.tabs[0]));
    }), te(() => {
      v(), p.value = setInterval(v, 100);
    }), ee(() => {
      clearInterval(p.value);
    });
    function v() {
      var H;
      const V = ((H = o.value) == null ? void 0 : H.clientWidth) || 1e3, E = Math.max(1, Math.floor(V / 60));
      s.value = E;
    }
    X(
      () => e.tabIndex,
      () => {
        e.tabIndex != null && e.tabs[e.tabIndex] && (a.value = g(e.tabs[e.tabIndex]));
      },
      { immediate: !0 }
    ), X(
      () => u.value,
      () => {
        u.value && i("update:tabIndex", e.tabs.indexOf(u.value));
      },
      { immediate: !0 }
    );
    function g(_) {
      return _.slot ?? _.name;
    }
    return (_, V) => (n(), I(c(W), {
      gap: "4",
      style: { "min-width": "0" }
    }, {
      default: w(() => [
        z(c(W), { gap: "0" }, {
          default: w(() => [
            h("div", {
              class: f(_.$style.bar)
            }, [
              h("div", {
                ref_key: "tabsDiv",
                ref: o,
                class: f([_.$style.tabs])
              }, [
                (n(!0), m(R, null, K(y.value, (E, H) => (n(), m("div", {
                  key: g(E),
                  class: f([_.$style.tab, a.value === g(E) && _.$style.active, E.disabled && _.$style.disabled]),
                  onClick: (F) => a.value = g(E)
                }, [
                  h("h5", {
                    class: f(_.$style.tabName)
                  }, [
                    $(_.$slots, "tab-title", {
                      i: H,
                      tab: E
                    }, () => [
                      D(N(E.name), 1)
                    ])
                  ], 2)
                ], 10, kl))), 128))
              ], 2),
              z(c(ue), null, {
                default: w(() => [
                  l.value.length > 0 ? (n(), I(c(G), {
                    key: 0,
                    class: f([_.$style.arrow]),
                    variant: "text",
                    small: ""
                  }, {
                    default: w(() => [
                      z(c(P), {
                        name: "more_horiz",
                        size: "l"
                      })
                    ]),
                    _: 1
                  }, 8, ["class"])) : M("", !0)
                ]),
                dropdown: w(() => [
                  (n(!0), m(R, null, K(l.value, (E, H) => (n(), m("p", {
                    key: g(E),
                    onClick: (F) => a.value = g(E)
                  }, [
                    $(_.$slots, "tab-title", {
                      i: H,
                      tab: E
                    }, () => [
                      D(N(E.name), 1)
                    ])
                  ], 8, Cl))), 128))
                ]),
                _: 3
              })
            ], 2),
            Ml
          ]),
          _: 3
        }),
        u.value ? $(_.$slots, u.value.slot ?? "default", {
          key: 0,
          tab: u.value
        }) : M("", !0)
      ]),
      _: 3
    }));
  }
}), Sl = "dodo-tabs-bar", Bl = "dodo-tabs", Vl = "dodo-tabs-tab", Il = "dodo-tabs-tabname", zl = "dodo-tabs-active", Tl = "dodo-tabs-disabled", El = {
  bar: Sl,
  tabs: Bl,
  tab: Vl,
  tabName: Il,
  active: zl,
  disabled: Tl
}, Nl = {
  $style: El
}, ha = /* @__PURE__ */ A(_l, [["__cssModules", Nl]]), Al = /* @__PURE__ */ T({
  __name: "TextInput",
  props: {
    id: {},
    modelValue: {},
    placeholder: {},
    disabled: { type: Boolean },
    rows: {},
    maxlength: {},
    type: {},
    tabIndex: {},
    name: {},
    autofocus: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(d, { emit: t }) {
    const e = d, i = C(), o = t;
    function a() {
      i.value.focus();
    }
    function u() {
      o("update:modelValue", i.value.value);
    }
    return U(() => {
      e.autofocus && i.value && i.value.focus();
    }), (s, y) => (n(), I(c(Ie), {
      class: f([s.$style.TextInput]),
      disabled: s.disabled,
      onClick: se(a, ["self"])
    }, {
      before: w(() => [
        $(s.$slots, "before")
      ]),
      after: w(() => [
        $(s.$slots, "after")
      ]),
      default: w(() => [
        (n(), I(le(s.rows && s.rows > 1 ? "textarea" : "input"), {
          id: s.id,
          ref_key: "el",
          ref: i,
          value: s.modelValue,
          class: f(s.$style.input),
          placeholder: s.placeholder,
          disabled: s.disabled,
          rows: s.rows,
          maxlength: s.maxlength,
          type: s.type,
          name: s.name,
          "tab-index": s.tabIndex,
          autofocus: s.autofocus,
          onInput: u
        }, null, 40, ["id", "value", "class", "placeholder", "disabled", "rows", "maxlength", "type", "name", "tab-index", "autofocus"]))
      ]),
      _: 3
    }, 8, ["class", "disabled"]));
  }
}), Fl = "dodo-textinput", Dl = {
  TextInput: Fl
}, Ll = {
  $style: Dl
}, Rl = /* @__PURE__ */ A(Al, [["__cssModules", Ll]]), Hl = /* @__PURE__ */ T({
  __name: "Tooltip",
  props: {
    text: {},
    disabled: { type: Boolean },
    side: {}
  },
  setup(d) {
    const t = d, e = C(!1), i = C(""), o = C(), a = C(), u = de(), s = S(() => t.disabled || !(t.text || u["tooltip-text"]));
    ee(l);
    async function y() {
      if (e.value || s.value)
        return;
      e.value = !0, await Me();
      const p = o.value.getBoundingClientRect(), v = a.value.getBoundingClientRect();
      t.side, p.bottom + v.height < window.innerHeight;
      let g = (p.right + p.left - v.width) / 2, _ = p.bottom;
      t.side === "right" ? (g = p.right, _ = (p.bottom + p.top - v.height) / 2) : t.side === "top" ? (g = (p.left + p.right - v.width) / 2, _ = p.top - v.height) : t.side === "left" && (g = p.left - v.width, _ = (p.bottom + p.top - v.height) / 2), _ = Math.round(Math.max(Math.min(_, window.innerHeight - v.height), 0)), g = Math.round(Math.max(Math.min(g, window.innerWidth - v.width), 0)), i.value = `left:${g}px;top:${_}px`;
    }
    function l() {
      e.value = !1;
    }
    return (p, v) => (n(), m("div", {
      ref_key: "trigger",
      ref: o,
      class: f(p.$style.trigger),
      onMouseover: y,
      onMouseleave: l
    }, [
      $(p.$slots, "default"),
      e.value ? (n(), I(Ce, {
        key: 0,
        to: "body"
      }, [
        h("div", {
          ref_key: "tooltip",
          ref: a,
          class: f(p.$style.Tooltip),
          style: J(i.value)
        }, [
          h("div", {
            class: f(p.$style.content)
          }, [
            h("small", {
              class: f(p.$style.text)
            }, [
              $(p.$slots, "tooltip-text", {}, () => [
                D(N(p.text), 1)
              ])
            ], 2)
          ], 2)
        ], 6)
      ])) : M("", !0)
    ], 34));
  }
}), Ol = "dodo-tooltip", jl = "dodo-tooltip-content", ql = "dodo-tooltip-text", Wl = "dodo-tooltip-trigger", Pl = {
  Tooltip: Ol,
  content: jl,
  text: ql,
  trigger: Wl
}, Ul = {
  $style: Pl
}, pe = /* @__PURE__ */ A(Hl, [["__cssModules", Ul]]);
export {
  Zl as Animated,
  Ql as Avatar,
  G as Button,
  Xl as Card,
  he as Checkbox,
  na as Chip,
  W as Column,
  la as CrashDialog,
  aa as Datatable,
  xt as Dialog,
  ue as Dropdown,
  Ie as Field,
  ra as FluidGrid,
  ia as Grid,
  P as Icon,
  da as Input,
  ca as Label,
  Jo as MenuItem,
  ua as NavBar,
  we as NavBarItem,
  pa as NavBarNew,
  va as NavItem,
  oe as Row,
  ln as ScrollContainer,
  ma as Select,
  fa as SelectButtons,
  ya as SocialIcon,
  il as Spinner,
  $a as Stepper,
  ha as Tabs,
  Rl as TextInput,
  pe as Tooltip,
  oa as ValidationError,
  ea as crashPlugin,
  Be as crashServiceKey,
  nt as dropdownServiceKey,
  _e as navBarServiceKey,
  xl as parseColor,
  rt as useCrashService,
  Yl as useElementSize,
  ta as useResizeObserver,
  Se as useScreenSize,
  it as useServiceFactory,
  lt as useSessionStoredRef,
  Y as useTheme,
  sa as useValidation,
  at as useWebFont
};
