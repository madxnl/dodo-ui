var Ee = Object.defineProperty;
var Le = (c, t, e) => t in c ? Ee(c, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[t] = e;
var me = (c, t, e) => (Le(c, typeof t != "symbol" ? t + "" : t, e), e);
import { defineComponent as E, openBlock as l, createBlock as I, TransitionGroup as Ae, withCtx as w, renderSlot as b, Transition as ke, computed as V, createElementBlock as v, normalizeClass as m, normalizeStyle as X, Fragment as W, createTextVNode as R, toDisplayString as T, createCommentVNode as M, useAttrs as Te, ref as k, mergeProps as oe, unref as p, createElementVNode as h, onMounted as ee, watchEffect as G, onBeforeUnmount as x, watch as J, inject as se, provide as ae, reactive as fe, withModifiers as ne, createVNode as z, resolveDynamicComponent as re, renderList as Q, Teleport as ie, nextTick as de, onUnmounted as Ne, useSlots as ce, getCurrentInstance as Fe, withDirectives as ye, vShow as De, vModelText as Re, createStaticVNode as ue, useCssModule as He } from "vue";
const $e = !1, ea = /* @__PURE__ */ E({
  __name: "Animated",
  props: {
    list: { type: Boolean },
    appear: { type: Boolean }
  },
  setup(c) {
    return (t, e) => t.list ? (l(), I(Ae, {
      key: 0,
      name: "dodo",
      css: !$e
    }, {
      default: w(() => [
        b(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["css"])) : (l(), I(ke, {
      key: 1,
      appear: t.appear,
      name: "dodo",
      css: !$e,
      mode: "out-in"
    }, {
      default: w(() => [
        b(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"]));
  }
});
const Oe = /* @__PURE__ */ E({
  __name: "Avatar",
  props: {
    text: {},
    image: {},
    round: { type: Boolean }
  },
  setup(c) {
    const t = c, e = ["info", "warn", "success", "danger"], o = Y(), n = V(() => {
      let s = t.text.trim();
      const $ = /\b\w|[A-Z]/g, i = t.text.match($);
      return i != null && i.length && (s = i.join("")), s.slice(0, 2).toUpperCase();
    }), r = V(() => {
      const s = e.length, $ = u(t.text), i = e[$ % s];
      return o.colorCss(i);
    });
    function u(s) {
      let $ = 0;
      for (let i = 0; i < s.length; ++i)
        $ = 997 * ($ % 1e6) + 11 * s.charCodeAt(i);
      return $;
    }
    return (s, $) => (l(), v("span", {
      class: m([s.$style.Avatar, s.round && s.$style.round]),
      style: X([`--color:${r.value}`, s.image ? `background-image:url(${s.image})` : ""])
    }, [
      s.image ? M("", !0) : (l(), v(W, { key: 0 }, [
        R(T(n.value), 1)
      ], 64))
    ], 6));
  }
}), je = "dodo-avatar", We = "dodo-avatar-round", qe = {
  Avatar: je,
  round: We
}, N = (c, t) => {
  const e = c.__vccOpts || c;
  for (const [o, n] of t)
    e[o] = n;
  return e;
}, Pe = {
  $style: qe
}, ta = /* @__PURE__ */ N(Oe, [["__cssModules", Pe]]), Ue = ["disabled", "type"], Ge = /* @__PURE__ */ E({
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
    const t = c, { colorPropRgb: e } = Y(), o = V(() => {
      let s = "";
      return t.color && (s += `--bnt-rgb:${e(t.color)};`), s;
    }), n = Te(), r = k(!1);
    async function u(s) {
      if (!r.value && typeof n.onClick == "function") {
        const $ = n.onClick(s);
        $ instanceof Promise && (r.value = !0, await $.finally(() => {
          r.value = !1;
        }));
      }
    }
    return (s, $) => (l(), v("button", oe({
      style: o.value,
      disabled: s.disabled,
      type: s.type ?? "button",
      class: [
        s.$style.Button,
        s.$style[t.variant ?? "default"],
        r.value && s.$style.loading,
        s.small && s.$style.small,
        s.square && s.$style.square,
        s.active && s.$style.active,
        s.rounded && s.$style.rounded
      ]
    }, { ...p(n), onClick: u }), [
      h("div", {
        class: m(s.$style.content)
      }, [
        b(s.$slots, "default")
      ], 2),
      r.value ? (l(), I(p(pl), {
        key: 0,
        small: s.small,
        class: m(s.$style.spinner),
        color: "inherit"
      }, null, 8, ["small", "class"])) : M("", !0)
    ], 16, Ue));
  }
}), Ke = "dodo-button", Xe = "dodo-button-content", Je = "dodo-button-solid", Ze = "dodo-button-rounded", Qe = "dodo-button-text", Ye = "dodo-button-loading", xe = "dodo-button-spinner", et = "dodo-button-active", tt = "dodo-button-small", ot = "dodo-button-square", st = {
  Button: Ke,
  content: Xe,
  solid: Je,
  default: "dodo-button-default",
  rounded: Ze,
  text: Qe,
  loading: Ye,
  spinner: xe,
  active: et,
  small: tt,
  square: ot
}, nt = {
  $style: st
}, Z = /* @__PURE__ */ N(Ge, [["__cssModules", nt]]), oa = /* @__PURE__ */ E({
  __name: "Card",
  props: {
    hoverable: { type: Boolean },
    active: { type: Boolean },
    gap: {},
    padding: {}
  },
  setup(c) {
    const t = Y();
    return (e, o) => (l(), v("div", {
      class: m([
        "dodo-card",
        e.hoverable && "dodo-card--hoverable",
        e.active && "dodo-card--active",
        p(t).padding(e.padding),
        p(t).gap(e.gap)
      ])
    }, [
      b(e.$slots, "default")
    ], 2));
  }
});
const _e = Symbol("NavBarService"), Ce = Symbol("DropdownService");
function sa(c) {
  const t = k(0), e = k(0), o = new ResizeObserver(n);
  function n() {
    var r, u;
    t.value = ((r = c.value) == null ? void 0 : r.clientWidth) ?? 0, e.value = ((u = c.value) == null ? void 0 : u.clientHeight) ?? 0;
  }
  return ee(n), G(() => {
    o.disconnect(), c.value && o.observe(c.value), n();
  }), x(() => {
    o.disconnect();
  }), { width: t, height: e, observer: o };
}
function Me() {
  const e = k(window.innerWidth), o = k(window.innerHeight), n = V(() => e.value < 600), r = V(() => e.value >= 600 && e.value < 1200), u = V(() => e.value >= 1200);
  function s() {
    e.value = window.innerWidth, o.value = window.innerHeight;
  }
  return ee(() => {
    window.addEventListener("resize", s, { passive: !0 });
  }), x(() => {
    window.removeEventListener("resize", s);
  }), {
    screenSmall: n,
    screenMedium: r,
    screenLarge: u
  };
}
function lt(c, t) {
  const e = k(t), o = sessionStorage.getItem(c);
  return o && (e.value = JSON.parse(o)), J(e, (n) => {
    sessionStorage.setItem(c, JSON.stringify(n));
  }), e;
}
function at(c) {
  const t = k(!1);
  return ee(async () => {
    const e = `font-${c.name}-${c.weight}`;
    let o = document.getElementById(e);
    o || (o = document.createElement("link"), o.setAttribute("href", c.href), o.setAttribute("rel", "stylesheet"), o.setAttribute("id", e), document.head.appendChild(o)), await document.fonts.ready, t.value = document.fonts.check(`${c.weight} 1em ${c.name}`);
  }), { isReady: t };
}
function na(c) {
  if (!c.match(/^#\w{6}$/))
    throw new Error("Invalid hex color");
  return c.match(/(\w\w)/g).map((t) => parseInt(t, 16)).slice(0, 3);
}
const Se = Symbol(Be.name);
function Be(c) {
  const t = k(null), e = k(0), o = 1e3;
  function n() {
    t.value = null, e.value = Date.now() + o;
  }
  function r() {
    location.reload();
  }
  function u(s) {
    !t.value && e.value < Date.now() && (console.error(s), t.value = s);
  }
  return { ignoreError: n, reloadPage: r, currentError: t, handleCrash: u };
}
function la(c) {
  return (t) => {
    var n;
    const e = Be();
    t.provide(Se, e);
    const { errorHandler: o } = t.config;
    t.config.errorHandler = (r, u, s) => {
      if (e.handleCrash(r), o)
        return o(r, u, s);
    }, (n = c.router) == null || n.onError((r) => {
      e.handleCrash(r);
    }), window.addEventListener("unhandledrejection", (r) => {
      e.handleCrash(r.reason);
    }), window.addEventListener("error", (r) => {
      e.handleCrash(r.error ?? r.message);
    });
  };
}
function rt() {
  return se(Se);
}
function it(c, t) {
  const e = new ResizeObserver(() => t(c.value));
  return G(() => {
    c.value && e.observe(c.value);
  }), x(() => {
    e.disconnect();
  }), { observer: e };
}
function dt(c) {
  const t = Symbol("ServiceKey");
  return { createAndProvide: () => {
    const n = c();
    return ae(t, n), n;
  }, injectOptional: () => se(t, void 0) };
}
function Y() {
  function c(f) {
    return typeof f == "string" ? `var(--dodo-rgb-${f})` : f.join(",");
  }
  function t(f) {
    return typeof f == "string" ? `var(--dodo-color-${f})` : `rgb(${f.join(",")})`;
  }
  function e(f) {
    if (f instanceof Array)
      return f;
    const F = getComputedStyle(document.body).getPropertyValue(`--dodo-rgb-${f}`);
    return F ? F.split(",").map(Number) : [0, 0, 0];
  }
  function o(f) {
    return "#" + e(f).map((S) => S.toString(16).padStart(2, "0")).join("");
  }
  function n(f) {
    return `var(--dodo-gap-${f})`;
  }
  function r(f) {
    return f ? `dodo-gap-${f}` : "";
  }
  function u(f) {
    return f ? `dodo-pad-${f}` : "";
  }
  function s(f) {
    return f ? `dodo-justify-${f}` : "";
  }
  function $(f) {
    return f ? `dodo-align-${f}` : "";
  }
  function i(f) {
    return f ? "dodo-wrap" : "";
  }
  function d(f) {
    return f ? "dodo-flex" : "";
  }
  function _(f) {
    return f ? "dodo-grow" : "";
  }
  return { colorCss: t, colorPropRgb: c, gapValue: n, colorHexStr: o, colorRgbValues: e, gap: r, padding: u, justify: s, align: $, wrap: i, flex: d, grow: _ };
}
function aa() {
  return { fontClass: "dodo-fonts" };
}
class ra extends Error {
  constructor(e, o) {
    super(o);
    me(this, "name", "ValidationError");
    this.field = e;
  }
}
function ia(c) {
  const t = fe(c), e = fe({});
  J(t, () => r());
  async function o(i) {
    const d = t[i];
    if (d) {
      const _ = d.value, f = await s(i, _);
      if (f)
        return e[i] = String(f), !1;
    }
    return delete e[i], !0;
  }
  async function n() {
    return (await Promise.all(Object.keys(t).map((d) => o(d)))).every((d) => d);
  }
  async function r() {
    return (await Promise.all(Object.keys(e).map((d) => o(d)))).every((d) => d);
  }
  function u() {
    for (const i in e)
      delete e[i];
  }
  async function s(i, d) {
    const _ = t[i], f = _.name ?? $(i);
    if (_.required && !d)
      return `${f} is required`;
    if (_.isEmail && d != null && (typeof d != "string" || !d.includes("@")))
      return `${f} is not valid`;
    if (typeof d == "string") {
      if (_.minLen != null && d.length < _.minLen)
        return `${f} must be at least ${_.minLen} characters`;
      if (_.maxLen != null && d.length > _.maxLen)
        return `${f} must be less than ${_.maxLen} characters`;
    }
    if (_.validators)
      for (const F of _.validators) {
        const S = await F(d, f);
        if (S)
          return S;
      }
  }
  function $(i) {
    return i.toString().replace(/_/g, " ").replace(/^./, (d) => d.toUpperCase()).replace(/[a-z][A-Z]/g, (d) => `${d[0]} ${d[1]}`);
  }
  return { errors: e, rules: t, validate: n, validateField: o, clearErrors: u };
}
const ct = ["onClick"], ut = ["checked"], pt = /* @__PURE__ */ E({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean },
    indeterminate: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(c, { emit: t }) {
    const e = c;
    function o() {
      t("update:modelValue", e.indeterminate || !e.modelValue);
    }
    function n(r) {
      r.target.checked !== e.modelValue && o();
    }
    return (r, u) => (l(), v("span", {
      class: m([r.$style.Checkbox, r.modelValue && r.$style.checked]),
      onClick: ne(o, ["stop"])
    }, [
      z(p(q), {
        name: r.indeterminate ? "indeterminate_check_box" : r.modelValue ? "check_box" : "check_box_outline_blank"
      }, null, 8, ["name"]),
      b(r.$slots, "default"),
      h("input", {
        type: "checkbox",
        checked: r.modelValue,
        onChange: n
      }, null, 40, ut)
    ], 10, ct));
  }
}), vt = "dodo-checkbox", mt = "dodo-checkbox-checked", ft = {
  Checkbox: vt,
  checked: mt
}, yt = {
  $style: ft
}, he = /* @__PURE__ */ N(pt, [["__cssModules", yt]]), $t = /* @__PURE__ */ E({
  __name: "Chip",
  props: {
    color: {}
  },
  setup(c) {
    const t = c, e = Y(), o = V(() => {
      let n = "";
      return t.color && (n += `--chip-rgb:${e.colorPropRgb(t.color)};`), n;
    });
    return (n, r) => (l(), I(re(n.$attrs.onClick ? "button" : "div"), {
      class: m(n.$style.Chip),
      style: X(o.value)
    }, {
      default: w(() => [
        b(n.$slots, "before"),
        h("div", {
          class: m(n.$style.text)
        }, [
          b(n.$slots, "default")
        ], 2),
        b(n.$slots, "after")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), ht = "dodo-chip", gt = "dodo-chip-text", bt = {
  Chip: ht,
  text: gt
}, wt = {
  $style: bt
}, da = /* @__PURE__ */ N($t, [["__cssModules", wt]]), kt = /* @__PURE__ */ E({
  __name: "Column",
  props: {
    gap: {},
    padding: {},
    grow: { type: Boolean },
    justify: {},
    align: {},
    wrap: { type: Boolean }
  },
  setup(c) {
    const t = Y();
    return (e, o) => (l(), v("div", {
      class: m([
        e.$style.el,
        p(t).gap(e.gap),
        p(t).padding(e.padding),
        p(t).align(e.align),
        p(t).padding(e.padding),
        p(t).wrap(e.wrap),
        p(t).grow(e.grow)
      ])
    }, [
      b(e.$slots, "default")
    ], 2));
  }
}), _t = "dodo-column-el", Ct = {
  el: _t
}, Mt = {
  $style: Ct
}, U = /* @__PURE__ */ N(kt, [["__cssModules", Mt]]), St = /* @__PURE__ */ h("h3", null, "Something went wrong", -1), ge = `
  An unexpected error occurred and the application may not function correctly until the page is reloaded.
  Any unsaved changes will be lost if you choose to reload the page.
`, ca = /* @__PURE__ */ E({
  __name: "CrashDialog",
  setup(c) {
    const t = rt(), e = V(() => t.currentError.value), o = k(!1);
    return G(() => {
      o.value = !!e.value;
    }), (n, r) => (l(), I(p(to), { active: o.value }, {
      controls: w(() => [
        z(p(Z), {
          variant: "text",
          onClick: p(t).ignoreError
        }, {
          default: w(() => [
            R("Ignore")
          ]),
          _: 1
        }, 8, ["onClick"]),
        z(p(Z), {
          variant: "solid",
          color: "info",
          onClick: p(t).reloadPage
        }, {
          default: w(() => [
            R("Reload page")
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: w(() => [
        St,
        b(n.$slots, "body", {
          error: e.value,
          defaultText: ge
        }, () => [
          h("p", null, T(ge))
        ])
      ]),
      _: 3
    }, 8, ["active"]));
  }
}), Bt = {
  key: 0,
  style: { width: "0" },
  scope: "col"
}, Vt = ["onClick"], It = ["onClick"], zt = { key: 0 }, Et = /* @__PURE__ */ h("td", { colspan: "999" }, "No results", -1), Lt = [
  Et
], At = { colspan: "999" }, Tt = { key: 0 }, Nt = /* @__PURE__ */ E({
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
  setup(c, { emit: t }) {
    const e = c, o = k(), n = k([]), r = k(!1);
    G(() => {
      o.value = e.sortValue;
    }), G(() => {
      n.value = e.selection ?? [];
    }), J(o, (a) => {
      t("update:sortValue", a);
    }), J(n, (a) => {
      t("update:selection", a);
    });
    const u = V(() => {
      var a;
      return (a = o.value) == null ? void 0 : a.startsWith("-");
    }), s = V(() => e.columns.filter((a) => !a.disabled)), $ = V(() => !!e.selection), i = V(() => {
      const a = s.value.find(_);
      return e.sortAsync || !a ? e.rows : e.rows.slice().sort((g, B) => {
        const H = L(a, g), P = L(a, B), ve = typeof H == "number" && typeof P == "number" ? P - H : `${P}`.localeCompare(`${H}`);
        return u.value ? ve : -ve;
      });
    });
    function d(a) {
      if (_(a))
        return u.value ? "arrow_drop_up" : "arrow_drop_down";
    }
    function _(a) {
      var g;
      return ((g = o.value) == null ? void 0 : g.replace("-", "")) === a.sort;
    }
    function f(a) {
      return a.slot || a.name.trim().replace(/\W/g, "");
    }
    function F(a) {
      return !!a.sort;
    }
    function S(a) {
      return a.align ? `text-align:${a.align}` : "";
    }
    function D(a) {
      return a.width ? `width:${a.width}` : "";
    }
    async function O(a) {
      F(a) && (_(a) ? o.value = u.value ? void 0 : "-" + a.sort : o.value = a.sort, e.sortAsync && (r.value = !0, await e.sortAsync(o.value).finally(() => {
        r.value = !1;
      })));
    }
    function y(a) {
      return e.selectBy ? a[e.selectBy] : a;
    }
    function A(a) {
      const g = y(a);
      n.value.includes(g) ? n.value = n.value.filter((B) => B !== g) : n.value = n.value.concat(g);
    }
    function L(a, g) {
      return typeof a.value == "function" ? a.value(g) : typeof a.value == "string" ? g[a.value] : "";
    }
    function j(a) {
      if (!$.value)
        return !1;
      const g = y(a);
      return n.value.includes(g);
    }
    const K = V(() => $.value ? e.rows.filter((a) => n.value.includes(y(a))) : []);
    function C() {
      const a = K.value.length === e.rows.length;
      n.value = a ? [] : e.rows.map(y);
    }
    return (a, g) => (l(), v("div", {
      class: m([a.$style.Datatable, a.contentLoading && a.$style.loading])
    }, [
      h("table", null, [
        h("tr", {
          class: m(a.stickyHeader && a.$style.stickyHeader)
        }, [
          $.value ? (l(), v("th", Bt, [
            z(p(he), {
              indeterminate: K.value.length > 0 && K.value.length < a.rows.length,
              "model-value": K.value.length > 0 && K.value.length === a.rows.length,
              "onUpdate:modelValue": C
            }, null, 8, ["indeterminate", "model-value"])
          ])) : M("", !0),
          (l(!0), v(W, null, Q(s.value, (B) => (l(), v("th", {
            key: B.name,
            scope: "col",
            class: m([F(B) ? a.$style.sortable : "", _(B) && a.$style.sortActive]),
            style: X([S(B), D(B)]),
            onClick: (H) => O(B)
          }, [
            h("span", {
              class: m(a.$style.colName)
            }, [
              h("span", null, [
                b(a.$slots, `${f(B)}-header`, { column: B }, () => [
                  R(T(B.name), 1)
                ])
              ]),
              d(B) ? (l(), I(p(q), {
                key: 0,
                name: d(B),
                class: m(a.$style.sortIcon)
              }, null, 8, ["name", "class"])) : M("", !0)
            ], 2)
          ], 14, Vt))), 128))
        ], 2),
        (l(!0), v(W, null, Q(i.value, (B, H) => (l(), v("tr", {
          key: H,
          class: m([a.rowClick && a.$style.clickableRow, j(B) && a.$style.rowSelected]),
          onClick: (P) => a.rowClick && a.rowClick(B)
        }, [
          $.value ? (l(), v("td", zt, [
            z(p(he), {
              "model-value": j(B),
              "onUpdate:modelValue": (P) => A(B)
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ])) : M("", !0),
          (l(!0), v(W, null, Q(s.value, (P) => (l(), v("td", {
            key: P.name,
            class: m([]),
            style: X(S(P))
          }, [
            b(a.$slots, f(P), {
              row: B,
              column: P
            }, () => [
              R(T(L(P, B)), 1)
            ])
          ], 4))), 128))
        ], 10, It))), 128)),
        a.rows.length ? M("", !0) : (l(), v("tr", {
          key: 0,
          class: m(a.$style.noResults)
        }, Lt, 2)),
        a.rows.length && a.showMore ? (l(), v("tr", {
          key: 1,
          class: m(a.$style.showMore)
        }, [
          h("td", At, [
            z(p(Z), {
              variant: "text",
              color: "info",
              onClick: a.showMore
            }, {
              default: w(() => [
                R("Show more results")
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ], 2)) : M("", !0),
        a.showFooter ? (l(), v("tr", {
          key: 2,
          class: m([a.$style.footer, a.stickyHeader && a.$style.stickyFooter])
        }, [
          $.value ? (l(), v("td", Tt)) : M("", !0),
          (l(!0), v(W, null, Q(s.value, (B) => (l(), v("th", {
            key: B.name,
            style: X(S(B)),
            scope: "col"
          }, [
            b(a.$slots, `${f(B)}-footer`, { column: B })
          ], 4))), 128))
        ], 2)) : M("", !0)
      ])
    ], 2));
  }
}), Ft = "dodo-datatable", Dt = "dodo-datatable-colname", Rt = "dodo-datatable-sortable", Ht = "dodo-datatable-sorticon", Ot = "dodo-datatable-sortactive", jt = "dodo-datatable-noresults", Wt = "dodo-datatable-showmore", qt = "dodo-datatable-clickablerow", Pt = "dodo-datatable-rowselected", Ut = "dodo-datatable-stickyheader", Gt = "dodo-datatable-stickyfooter", Kt = "dodo-datatable-loading", Xt = {
  Datatable: Ft,
  colName: Dt,
  sortable: Rt,
  sortIcon: Ht,
  sortActive: Ot,
  noResults: jt,
  showMore: Wt,
  clickableRow: qt,
  rowSelected: Pt,
  stickyHeader: Ut,
  stickyFooter: Gt,
  loading: Kt
}, Jt = {
  $style: Xt
}, ua = /* @__PURE__ */ N(Nt, [["__cssModules", Jt]]), Zt = /* @__PURE__ */ E({
  __name: "Dialog",
  props: {
    active: { type: Boolean }
  },
  setup(c) {
    const t = c, e = k();
    return G(() => {
      t.active && e.value && e.value.parentNode.appendChild(e.value);
    }), (o, n) => (l(), I(ie, { to: "body" }, [
      z(ke, { name: "Dialog" }, {
        default: w(() => [
          o.active ? (l(), v("div", {
            key: 0,
            ref_key: "el",
            ref: e,
            class: m([o.$style.Dialog, "dodo-fonts"])
          }, [
            h("div", {
              class: m(o.$style.window)
            }, [
              z(p(U), { padding: "4" }, {
                default: w(() => [
                  b(o.$slots, "default")
                ]),
                _: 3
              }),
              z(p(te), {
                padding: "4",
                justify: "end",
                gap: "2"
              }, {
                default: w(() => [
                  b(o.$slots, "controls")
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
}), Qt = "dodo-dialog", Yt = "dodo-dialog-window", xt = {
  Dialog: Qt,
  window: Yt,
  "Dialog-enter-active": "dodo-dialog-dialog-enter-active",
  "Dialog-leave-active": "dodo-dialog-dialog-leave-active",
  "Dialog-enter-from": "dodo-dialog-dialog-enter-from",
  "Dialog-leave-to": "dodo-dialog-dialog-leave-to"
}, eo = {
  $style: xt
}, to = /* @__PURE__ */ N(Zt, [["__cssModules", eo]]), oo = /* @__PURE__ */ E({
  __name: "Dropdown",
  props: {
    modelValue: { type: Boolean },
    padding: {},
    gap: {},
    disabled: { type: Boolean },
    trigger: {}
  },
  emits: ["update:modelValue"],
  setup(c, { emit: t }) {
    const e = c, o = k(!1), n = k(""), r = k(), u = k();
    J(
      () => e.modelValue,
      () => s(!!e.modelValue),
      { immediate: !0 }
    ), x(() => {
      s(!1);
    });
    function s(S) {
      o.value !== S && (e.disabled && S || (o.value = S, t("update:modelValue", S), S ? de().then(() => {
        F(), window.addEventListener("click", _, { passive: !0, capture: !0 }), window.addEventListener("scroll", f, { passive: !0, capture: !0 }), window.addEventListener("resize", f);
      }) : (window.removeEventListener("click", _, { capture: !0 }), window.removeEventListener("scroll", f, { capture: !0 }), window.removeEventListener("resize", f))));
    }
    function $() {
      e.trigger !== "hover" && s(!o.value);
    }
    function i() {
      e.trigger === "hover" && s(!0);
    }
    function d(S) {
      var A, L;
      if (!o.value || e.trigger !== "hover")
        return;
      const D = S.relatedTarget, O = (A = u.value) == null ? void 0 : A.contains(D), y = (L = r.value) == null ? void 0 : L.contains(D);
      O || y || s(!1);
    }
    function _(S) {
      var D, O;
      if (S.target) {
        const y = (D = u.value) == null ? void 0 : D.contains(S.target), A = (O = r.value) == null ? void 0 : O.contains(S.target);
        if (y || A)
          return;
      }
      s(!1);
    }
    function f() {
      s(!1);
    }
    function F() {
      const D = r.value;
      if (!D)
        return;
      const O = D.scrollWidth, y = u.value.getBoundingClientRect(), A = window.innerWidth, L = window.innerHeight, j = y.bottom + 300 + 16 > L, K = Math.max(16, Math.min(y.left, A - O - 16)), C = Math.min(600, A - 16 * 2);
      let a = `left: ${K}px; max-width:${C}px;`;
      j ? a += `bottom: ${L - y.top}px; max-height: ${y.top - 16}px;` : a += `top: ${y.bottom}px; max-height: ${L - y.bottom - 16}px;`, n.value = a;
    }
    return ae(Ce, { toggle: s }), (S, D) => (l(), v(W, null, [
      h("div", oe({
        ref_key: "el",
        ref: u,
        class: [S.$style.trigger, S.disabled && S.$style.disabled]
      }, S.$attrs, {
        onClick: $,
        onMouseover: i,
        onMouseleave: d
      }), [
        b(S.$slots, "default", { isActive: o.value })
      ], 16),
      (l(), I(ie, { to: "body" }, [
        o.value ? (l(), v("div", {
          key: 0,
          class: m([S.$style.container, "dodo-fonts"]),
          style: X(n.value)
        }, [
          h("div", {
            ref_key: "content",
            ref: r,
            class: m(S.$style.content),
            onMouseleave: d
          }, [
            z(p(U), {
              padding: S.padding ?? "2",
              gap: S.gap ?? "2"
            }, {
              default: w(() => [
                b(S.$slots, "dropdown", { toggle: s })
              ]),
              _: 3
            }, 8, ["padding", "gap"])
          ], 34)
        ], 6)) : M("", !0)
      ]))
    ], 64));
  }
}), so = "dodo-dropdown-trigger", no = "dodo-dropdown-disabled", lo = "dodo-dropdown-container", ao = "dodo-dropdown-content", ro = {
  trigger: so,
  disabled: no,
  container: lo,
  content: ao
}, io = {
  $style: ro
}, Ve = /* @__PURE__ */ N(oo, [["__cssModules", io]]), co = {
  key: 0,
  class: "dodo-nowrap dodo-fade-secondary"
}, uo = /* @__PURE__ */ E({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    emphasize: { type: Boolean },
    separator: { type: Boolean }
  },
  setup(c) {
    const t = se(Ce);
    async function e() {
      await (t == null ? void 0 : t.toggle(!1));
    }
    return (o, n) => (l(), v(W, null, [
      o.separator ? (l(), v("hr", {
        key: 0,
        class: m(o.$style.separator)
      }, null, 2)) : M("", !0),
      h("div", oe(o.$attrs, {
        class: [o.$style.DropdownItem, o.active && o.$style.active, o.emphasize && o.$style.emphasize],
        onClick: e
      }), [
        b(o.$slots, "before"),
        z(p(U), {
          gap: "0",
          style: { flex: "1" }
        }, {
          default: w(() => [
            h("p", {
              class: m([o.$style.text, "dodo-nowrap"])
            }, [
              b(o.$slots, "default")
            ], 2),
            o.$slots["text-secondary"] ? (l(), v("p", co, [
              b(o.$slots, "text-secondary")
            ])) : M("", !0)
          ]),
          _: 3
        }),
        b(o.$slots, "after")
      ], 16)
    ], 64));
  }
}), po = "dodo-dropdownitem", vo = "dodo-dropdownitem-active", mo = "dodo-dropdownitem-emphasize", fo = "dodo-dropdownitem-text", yo = "dodo-dropdownitem-separator", $o = {
  DropdownItem: po,
  active: vo,
  emphasize: mo,
  text: fo,
  separator: yo
}, ho = {
  $style: $o
}, go = /* @__PURE__ */ N(uo, [["__cssModules", ho]]), bo = /* @__PURE__ */ E({
  __name: "Field",
  props: {
    disabled: { type: Boolean },
    button: { type: Boolean }
  },
  setup(c) {
    return (t, e) => (l(), v("div", {
      class: m([t.$style.Field, t.disabled && t.$style.disabled, t.button && t.$style.button])
    }, [
      b(t.$slots, "before"),
      h("div", {
        class: m(t.$style.inner)
      }, [
        b(t.$slots, "default")
      ], 2),
      b(t.$slots, "after")
    ], 2));
  }
}), wo = "dodo-field", ko = "dodo-field-button", _o = "dodo-field-inner", Co = "dodo-field-disabled", Mo = {
  Field: wo,
  button: ko,
  inner: _o,
  disabled: Co
}, So = {
  $style: Mo
}, Ie = /* @__PURE__ */ N(bo, [["__cssModules", So]]), Bo = /* @__PURE__ */ E({
  __name: "FluidGrid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean },
    alignItems: {}
  },
  setup(c) {
    const t = c, e = Y(), o = k(), n = k(99999);
    let r = null;
    const u = new ResizeObserver(() => {
      r && clearTimeout(r), r = setTimeout(() => {
        n.value = o.value.clientWidth;
      }, 50);
    });
    ee(() => {
      u.observe(o.value);
    }), Ne(() => {
      u.disconnect();
    });
    const s = V(() => t.columnSize >= n.value), $ = V(() => {
      let i = `--fluidgrid-size:${t.columnSize}px;`;
      return t.autoFill && (i += "--fluidgrid-mode:auto-fill;"), t.gap && (i += `gap:${e.gapValue(t.gap)};`), t.padding && (i += `padding:${e.gapValue(t.padding)};`), i;
    });
    return (i, d) => (l(), v("div", {
      ref_key: "el",
      ref: o,
      class: m([i.$style.FluidGrid, s.value && i.$style.oneColumn]),
      style: X($.value)
    }, [
      b(i.$slots, "default")
    ], 6));
  }
}), Vo = "dodo-fluidgrid", Io = "dodo-fluidgrid-onecolumn", zo = {
  FluidGrid: Vo,
  oneColumn: Io
}, Eo = {
  $style: zo
}, pa = /* @__PURE__ */ N(Bo, [["__cssModules", Eo]]), Lo = /* @__PURE__ */ E({
  __name: "Grid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean }
  },
  setup(c) {
    const t = Y();
    return (e, o) => (l(), v("div", {
      class: m([
        e.$style.component,
        e.$style[`col-${e.columnSize}`],
        e.autoFill && e.$style.autoFill,
        p(t).gap(e.gap),
        p(t).padding(e.padding)
      ])
    }, [
      b(e.$slots, "default")
    ], 2));
  }
}), Ao = "dodo-grid-component", To = "dodo-grid-autofill", No = {
  component: Ao,
  autoFill: To,
  "col-xs": "dodo-grid-col-xs",
  "col-s": "dodo-grid-col-s",
  "col-m": "dodo-grid-col-m",
  "col-l": "dodo-grid-col-l"
}, Fo = {
  $style: No
}, va = /* @__PURE__ */ N(Lo, [["__cssModules", Fo]]), le = "Outlined", be = "300", Do = /* @__PURE__ */ E({
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
    const t = c, e = Y(), o = k(), n = at({
      weight: be,
      name: `Material Symbols ${le}`,
      href: `https://fonts.googleapis.com/css2?family=Material+Symbols+${le}:wght,FILL@${be},0..1`
    });
    return (r, u) => (l(), v("span", {
      ref_key: "el",
      ref: o,
      style: X([r.color ? `color: ${p(e).colorCss(r.color)};` : "", p(n).isReady ? "" : "visibility:hidden"]),
      class: m([
        r.$style.icon,
        "material-symbols-" + le.toLowerCase(),
        t.size && r.$style[t.size],
        t.fill && r.$style.fill
      ])
    }, T(r.name), 7));
  }
}), Ro = "dodo-icon", Ho = "dodo-icon-fill", Oo = "dodo-icon-xs", jo = "dodo-icon-s", Wo = "dodo-icon-l", qo = "dodo-icon-xl", Po = {
  icon: Ro,
  fill: Ho,
  xs: Oo,
  s: jo,
  l: Wo,
  xl: qo
}, Uo = {
  $style: Po
}, q = /* @__PURE__ */ N(Do, [["__cssModules", Uo]]), Go = ["id", "value", "placeholder", "disabled", "maxlength", "type", "name", "autofocus"], ma = /* @__PURE__ */ E({
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
  setup(c, { emit: t }) {
    const e = k(null);
    function o() {
      t("update:modelValue", e.value.value);
    }
    return (n, r) => (l(), v("input", {
      id: n.id ?? void 0,
      ref_key: "el",
      ref: e,
      value: n.modelValue,
      class: "dodo-formfield dodo-input",
      placeholder: n.placeholder,
      disabled: n.disabled,
      maxlength: n.maxlength,
      type: n.type,
      name: n.name,
      autofocus: n.autofocus,
      onInput: o
    }, null, 40, Go));
  }
});
const Ko = ["for"], Xo = { class: "dodo-label-text" }, Jo = {
  key: 0,
  class: "dodo-color-danger"
}, Zo = {
  key: 1,
  class: "dodo-fade-secondary"
}, fa = /* @__PURE__ */ E({
  __name: "Label",
  props: {
    text: {},
    for: {},
    error: {},
    hint: {},
    required: { type: Boolean }
  },
  setup(c) {
    const t = c;
    return (e, o) => (l(), v("label", {
      class: m(["dodo-label", e.error && "dodo-label--error"]),
      for: t.for
    }, [
      h("span", Xo, T(e.text), 1),
      b(e.$slots, "default"),
      e.error ? (l(), v("small", Jo, T(e.error), 1)) : e.hint ? (l(), v("small", Zo, T(e.hint), 1)) : M("", !0)
    ], 10, Ko));
  }
});
const Qo = /* @__PURE__ */ E({
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
    const t = c, e = ce(), o = k(), n = k(!1);
    ee(() => {
      n.value = !!o.value.closest("[data-mobile-nav]");
    });
    const r = se(_e), u = V(() => r == null ? void 0 : r.collapsed.value), s = V(() => r == null ? void 0 : r.renderMobile.value), $ = V(() => s.value || !u.value);
    async function i(d) {
      r && !e.submenu && (r.mobileToggle.value = !1), t.link && await t.link.navigate();
    }
    return (d, _) => (l(), I(p(pe), {
      text: d.text,
      disabled: $.value,
      side: "right"
    }, {
      default: w(() => [
        (l(), I(re(d.$slots.submenu ? p(Ve) : "div"), null, {
          dropdown: w(() => [
            b(d.$slots, "submenu")
          ]),
          default: w(() => {
            var f;
            return [
              h("div", {
                ref_key: "el",
                ref: o,
                class: m([
                  d.$style.NavBarItem,
                  (d.active || ((f = d.link) == null ? void 0 : f.isActive.value)) && d.$style.active,
                  d.important && d.$style.important,
                  u.value && d.$style.collapsed
                ]),
                onClick: i
              }, [
                d.icon || d.$slots.icon ? (l(), v("div", {
                  key: 0,
                  class: m(d.$style.icon)
                }, [
                  b(d.$slots, "icon", {}, () => [
                    z(p(q), {
                      name: d.icon
                    }, null, 8, ["name"])
                  ])
                ], 2)) : M("", !0),
                h("div", {
                  class: m(d.$style.textwrap)
                }, [
                  h("p", {
                    class: m([d.$style.text, "dodo-nowrap"]),
                    color: "background"
                  }, T(d.text), 3),
                  d.textSecondary ? (l(), v("p", {
                    key: 0,
                    class: m([d.$style.secondary, "dodo-nowrap"]),
                    color: "background"
                  }, T(d.textSecondary), 3)) : M("", !0)
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
}), Yo = "dodo-navbaritem", xo = "dodo-navbaritem-active", es = "dodo-navbaritem-important", ts = "dodo-navbaritem-textwrap", os = "dodo-navbaritem-icon", ss = "dodo-navbaritem-text", ns = "dodo-navbaritem-secondary", ls = {
  NavBarItem: Yo,
  active: xo,
  important: es,
  textwrap: ts,
  icon: os,
  text: ss,
  secondary: ns
}, as = {
  $style: ls
}, we = /* @__PURE__ */ N(Qo, [["__cssModules", as]]), rs = ["onClick"], is = { style: { "margin-right": "8px" } }, ds = /* @__PURE__ */ E({
  __name: "NavBar",
  props: {
    mobile: { type: Boolean }
  },
  setup(c) {
    const t = c, { screenLarge: e } = Me(), o = lt("NavBar-collapse", null), n = k(!1), r = V(() => t.mobile || !e.value);
    ae(_e, { collapsed: o, renderMobile: r, mobileToggle: n });
    function u() {
      r.value && (n.value = !1);
    }
    return (s, $) => (l(), v("div", {
      class: m([
        s.$style.root,
        p(o) && s.$style.collapsed,
        n.value && s.$style.mobileToggle,
        r.value && s.$style.mobileMenu
      ]),
      onClick: ne(u, ["self"])
    }, [
      n.value ? (l(), v("div", {
        key: 0,
        class: m(s.$style.backdrop),
        onClick: $[0] || ($[0] = (i) => n.value = !1)
      }, null, 2)) : M("", !0),
      h("div", {
        class: m(s.$style.NavBar)
      }, [
        s.$slots["navbar-header"] ? (l(), v("div", {
          key: 0,
          class: m(s.$style.header)
        }, [
          h("div", null, [
            b(s.$slots, "navbar-header")
          ]),
          h("div", is, [
            r.value ? (l(), I(p(Z), {
              key: 0,
              variant: "text",
              square: "",
              color: "background",
              onClick: $[1] || ($[1] = (i) => n.value = !1)
            }, {
              default: w(() => [
                z(p(q), { name: "close" })
              ]),
              _: 1
            })) : M("", !0)
          ])
        ], 2)) : M("", !0),
        h("div", {
          class: m(s.$style.middle)
        }, [
          b(s.$slots, "default")
        ], 2),
        s.$slots["navbar-footer"] ? (l(), v("div", {
          key: 1,
          class: m(s.$style.footer)
        }, [
          b(s.$slots, "navbar-footer"),
          r.value ? M("", !0) : (l(), I(we, {
            key: 0,
            text: p(o) ? "Expand" : "Collapse",
            icon: p(o) ? "last_page" : "first_page",
            onClick: $[2] || ($[2] = (i) => o.value = !p(o))
          }, null, 8, ["text", "icon"]))
        ], 2)) : M("", !0)
      ], 2),
      h("div", {
        class: m(s.$style.wrapMobile)
      }, [
        s.$slots.main ? (l(), I(p(U), {
          key: 0,
          class: m(s.$style.main)
        }, {
          default: w(() => [
            b(s.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : M("", !0),
        r.value ? (l(), v("div", {
          key: 1,
          class: m(s.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          b(s.$slots, "default", { inMobileBar: !0 }),
          b(s.$slots, "navbar-footer", { inMobileBar: !0 }),
          z(we, {
            text: "Menu",
            icon: "menu",
            onClick: $[3] || ($[3] = (i) => n.value = !n.value)
          })
        ], 2)) : M("", !0)
      ], 2)
    ], 10, rs));
  }
}), cs = "dodo-navbar-root", us = "dodo-navbar", ps = "dodo-navbar-collapsed", vs = "dodo-navbar-header", ms = "dodo-navbar-middle", fs = "dodo-navbar-footer", ys = "dodo-navbar-wrapmobile", $s = "dodo-navbar-main", hs = "dodo-navbar-backdrop", gs = "dodo-navbar-mobilemenu", bs = "dodo-navbar-mobiletoggle", ws = "dodo-navbar-mobilenav", ks = {
  root: cs,
  NavBar: us,
  collapsed: ps,
  header: vs,
  middle: ms,
  footer: fs,
  wrapMobile: ys,
  main: $s,
  backdrop: hs,
  mobileMenu: gs,
  mobileToggle: bs,
  mobileNav: ws
}, _s = {
  $style: ks
}, ya = /* @__PURE__ */ N(ds, [["__cssModules", _s]]), Cs = ["onClick"], ze = dt(() => {
  const c = k([]), t = k(""), e = k([]), o = k(!1);
  return J(c, () => {
    o.value = !1;
  }), { headerText: t, activeItems: c, expandedMenu: e, mobileToggle: o };
}), Ms = (c) => {
  const t = ze.injectOptional(), e = Fe(), o = (i) => i ? [i.uid, ...o(i.parent)] : [], n = (i) => {
    !i || !t || (t.activeItems.value = o(e), t.headerText.value = c.text.value);
  }, r = V(() => t == null ? void 0 : t.headerText.value), u = () => {
    !e || !t || (t.expandedMenu.value.includes(e.uid) ? t.expandedMenu.value = [] : t.expandedMenu.value = o(e));
  }, s = V(() => !e || !t ? !1 : t.activeItems.value.includes(e.uid)), $ = V(() => !e || !t ? !1 : t.expandedMenu.value.length ? t.expandedMenu.value.includes(e.uid) : t.activeItems.value.includes(e.uid));
  return J(c.active, () => n(c.active.value), { immediate: !0 }), x(() => n(!1)), G(() => {
    r.value && (document.title = r.value);
  }), { showAsActive: s, isExpanded: $, toggleExpand: u, headerText: r };
}, Ss = /* @__PURE__ */ E({
  __name: "NavBarNew",
  setup(c) {
    const { headerText: t, mobileToggle: e } = ze.createAndProvide(), { screenLarge: o } = Me(), n = V(() => !o.value);
    function r() {
      e.value = !1;
    }
    return (u, s) => (l(), v("div", {
      class: m([u.$style.root, p(e) && u.$style.mobileToggle, n.value && u.$style.mobileMenu]),
      onClick: ne(r, ["self"])
    }, [
      p(e) ? (l(), v("div", {
        key: 0,
        class: m(u.$style.backdrop),
        onClick: s[0] || (s[0] = ($) => e.value = !1)
      }, null, 2)) : M("", !0),
      h("div", {
        class: m(u.$style.NavBar)
      }, [
        h("div", {
          class: m(u.$style.middle)
        }, [
          b(u.$slots, "default")
        ], 2),
        u.$slots["navbar-footer"] ? (l(), v("div", {
          key: 0,
          class: m(u.$style.footer)
        }, [
          b(u.$slots, "navbar-footer")
        ], 2)) : M("", !0)
      ], 2),
      h("div", {
        class: m(u.$style.wrapMobile)
      }, [
        n.value ? (l(), v("div", {
          key: 0,
          class: m(u.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          h("h5", null, T(p(t)), 1),
          z(p(pe), { text: "Toggle menu" }, {
            default: w(() => [
              h("div", {
                class: m(u.$style.menuButton)
              }, [
                z(p(q), {
                  name: "menu",
                  onClick: s[1] || (s[1] = ($) => e.value = !p(e))
                })
              ], 2)
            ]),
            _: 1
          })
        ], 2)) : M("", !0),
        u.$slots.main ? (l(), I(p(U), {
          key: 1,
          class: m(u.$style.main)
        }, {
          default: w(() => [
            b(u.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : M("", !0)
      ], 2)
    ], 10, Cs));
  }
}), Bs = "dodo-navbarnew-root", Vs = "dodo-navbarnew-navbar", Is = "dodo-navbarnew-middle", zs = "dodo-navbarnew-footer", Es = "dodo-navbarnew-wrapmobile", Ls = "dodo-navbarnew-main", As = "dodo-navbarnew-backdrop", Ts = "dodo-navbarnew-menubutton", Ns = "dodo-navbarnew-mobilemenu", Fs = "dodo-navbarnew-mobiletoggle", Ds = "dodo-navbarnew-mobilenav", Rs = {
  root: Bs,
  NavBar: Vs,
  middle: Is,
  footer: zs,
  wrapMobile: Es,
  main: Ls,
  backdrop: As,
  menuButton: Ts,
  mobileMenu: Ns,
  mobileToggle: Fs,
  mobileNav: Ds
}, Hs = {
  $style: Rs
}, $a = /* @__PURE__ */ N(Ss, [["__cssModules", Hs]]), Os = ["href"], js = { key: 0 }, Ws = /* @__PURE__ */ E({
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
    const t = c, e = V(() => t.link ? p(t.link.isActive) : !1), o = V(() => t.text), { isExpanded: n, showAsActive: r, toggleExpand: u } = Ms({ text: o, active: e }), s = ce();
    async function $(i) {
      s.submenu && u(), t.link && (await t.link.navigate(), i.preventDefault());
    }
    return (i, d) => (l(), v("div", {
      class: m([i.$style.el])
    }, [
      z(p(pe), {
        text: i.tooltipText,
        side: "right"
      }, {
        default: w(() => {
          var _;
          return [
            h("a", {
              class: m([i.$style.link, p(r) && i.$style.active, i.important && i.$style.important]),
              href: p((_ = i.link) == null ? void 0 : _.href),
              onClick: $
            }, [
              h("div", {
                class: m(i.$style.icon)
              }, [
                b(i.$slots, "icon", {}, () => [
                  i.icon ? (l(), I(p(q), {
                    key: 0,
                    name: i.icon
                  }, null, 8, ["name"])) : M("", !0)
                ])
              ], 2),
              h("div", {
                class: m(i.$style.textwrap)
              }, [
                h("p", {
                  class: m([i.$style.text, "dodo-nowrap"])
                }, T(o.value), 3),
                i.textSecondary ? (l(), v("p", {
                  key: 0,
                  class: m([i.$style.secondary, "dodo-nowrap"])
                }, T(i.textSecondary), 3)) : M("", !0)
              ], 2),
              p(s).submenu ? (l(), v("div", js, [
                z(p(q), {
                  name: p(n) ? "expand_less" : "expand_more",
                  size: "s",
                  style: { margin: "0 -0.25em" }
                }, null, 8, ["name"])
              ])) : M("", !0)
            ], 10, Os)
          ];
        }),
        _: 3
      }, 8, ["text"]),
      i.$slots.submenu ? (l(), v("div", {
        key: 0,
        class: m([i.$style.submenu, p(n) && i.$style.expanded])
      }, [
        b(i.$slots, "submenu")
      ], 2)) : M("", !0)
    ], 2));
  }
}), qs = "dodo-navitem-el", Ps = "dodo-navitem-link", Us = "dodo-navitem-submenu", Gs = "dodo-navitem-expanded", Ks = "dodo-navitem-active", Xs = "dodo-navitem-important", Js = "dodo-navitem-textwrap", Zs = "dodo-navitem-icon", Qs = "dodo-navitem-text", Ys = "dodo-navitem-secondary", xs = {
  el: qs,
  link: Ps,
  submenu: Us,
  expanded: Gs,
  active: Ks,
  important: Xs,
  textwrap: Js,
  icon: Zs,
  text: Qs,
  secondary: Ys
}, en = {
  $style: xs
}, ha = /* @__PURE__ */ N(Ws, [["__cssModules", en]]), tn = /* @__PURE__ */ E({
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
    const t = Y();
    return (e, o) => (l(), v("div", {
      class: m([
        e.$style.el,
        p(t).gap(e.gap),
        p(t).padding(e.padding),
        p(t).align(e.align),
        p(t).justify(e.justify),
        p(t).wrap(e.wrap),
        p(t).grow(e.grow)
      ])
    }, [
      b(e.$slots, "default")
    ], 2));
  }
}), on = "dodo-row-el", sn = {
  el: on
}, nn = {
  $style: sn
}, te = /* @__PURE__ */ N(tn, [["__cssModules", nn]]), ln = /* @__PURE__ */ E({
  __name: "ScrollContainer",
  setup(c) {
    const t = V(() => "");
    return (e, o) => (l(), v("div", {
      class: m([e.$style.ScrollContainer]),
      style: X(t.value)
    }, [
      b(e.$slots, "default")
    ], 6));
  }
}), an = "dodo-scrollcontainer", rn = {
  ScrollContainer: an
}, dn = {
  $style: rn
}, cn = /* @__PURE__ */ N(ln, [["__cssModules", dn]]), un = {
  key: 0,
  class: "dodo-nowrap"
}, pn = {
  key: 1,
  class: "dodo-nowrap dodo-fade-secondary"
}, vn = ["disabled"], mn = 12, fn = /* @__PURE__ */ E({
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
  setup(c, { emit: t }) {
    const e = c, o = V(() => (e.multiple ? [e.modelValue].flat() : [e.modelValue]).filter(O)), n = k(!1), r = k(""), u = k(), s = k(), $ = k(), i = k();
    G(() => {
      n.value && u.value && (r.value = "", u.value.focus());
    }), G(() => {
      r.value && s.value && s.value.$el.querySelector("input").focus();
    }), G(() => {
      n.value && setTimeout(() => {
        var g;
        const C = (g = $.value) == null ? void 0 : g.$el, a = C == null ? void 0 : C.querySelector("[data-selectactive]");
        a == null || a.scrollIntoView({ block: "center" });
      }, 0);
    });
    const d = k(!1), _ = V(() => e.options.length > mn), f = V(() => _.value && !d.value ? 6 : e.options.length), F = V(() => r.value || e.options.length >= 10), S = V(() => {
      const C = r.value.toLowerCase(), a = e.options.filter((H) => `${H.value}|${H.label}`.toLowerCase().includes(C));
      if (!e.multiple)
        return a;
      const g = a.filter((H) => o.value.find((P) => A(H, P))), B = a.filter((H) => !g.includes(H));
      return g.concat(B);
    }), D = V(() => e.placeholder ? e.placeholder : e.multiple ? "Select one or more" : "Select one");
    function O(C) {
      return e.options.find((a) => A(a, C));
    }
    function y(C) {
      let a = C.value;
      e.multiple && (o.value.includes(a) ? a = o.value.filter((g) => !A(C, g)) : a = o.value.concat(C.value)), t("update:modelValue", a);
    }
    function A(C, a) {
      return C.value === a;
    }
    function L(C) {
      return C.label || `${C.value}`;
    }
    function j(C) {
      return o.value.some((a) => A(C, a));
    }
    function K(C) {
      var B, H;
      const a = (B = i.value) == null ? void 0 : B.$el.contains(C.target), g = (H = $.value) == null ? void 0 : H.$el.contains(C.target);
      n.value = a || g;
    }
    return ee(() => {
      document.addEventListener("focusin", K);
    }), x(() => {
      document.removeEventListener("focusin", K);
    }), (C, a) => C.variant === "buttons" ? (l(), I(p(te), {
      key: 0,
      gap: "1",
      wrap: ""
    }, {
      default: w(() => [
        (l(!0), v(W, null, Q(C.options.slice(0, f.value), (g, B) => (l(), I(p(Z), {
          key: L(g),
          color: j(g) ? "info" : void 0,
          active: j(g),
          variant: j(g) && !C.multiple ? "solid" : void 0,
          disabled: C.disabled,
          small: C.size === "s",
          rounded: "",
          onClick: (H) => y(g)
        }, {
          default: w(() => [
            C.multiple && j(g) ? (l(), I(p(q), {
              key: 0,
              name: "check",
              size: "s",
              style: { margin: "-2px" }
            })) : M("", !0),
            b(C.$slots, "default", {
              option: g,
              index: B
            }, () => [
              R(T(L(g)), 1)
            ])
          ]),
          _: 2
        }, 1032, ["color", "active", "variant", "disabled", "small", "onClick"]))), 128)),
        _.value ? (l(), v(W, { key: 0 }, [
          d.value ? (l(), I(p(Z), {
            key: 0,
            small: C.size === "s",
            variant: "text",
            rounded: "",
            onClick: a[0] || (a[0] = (g) => d.value = !d.value)
          }, {
            default: w(() => [
              R(" Less "),
              z(p(q), {
                name: "expand_less",
                size: "s",
                style: { margin: "-2px" }
              })
            ]),
            _: 1
          }, 8, ["small"])) : (l(), I(p(Z), {
            key: 1,
            small: C.size === "s",
            variant: "text",
            rounded: "",
            onClick: a[1] || (a[1] = (g) => d.value = !d.value)
          }, {
            default: w(() => [
              R(T(C.options.length - f.value) + " more ", 1),
              z(p(q), {
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
    })) : (l(), I(p(Ve), {
      key: 1,
      modelValue: n.value,
      "onUpdate:modelValue": a[5] || (a[5] = (g) => n.value = g),
      disabled: C.disabled
    }, {
      dropdown: w(() => [
        z(p(U), {
          ref_key: "dropdownEl",
          ref: $,
          style: { "min-height": "0" },
          gap: "0",
          onMousedown: a[4] || (a[4] = ne(() => {
          }, ["stop", "prevent"]))
        }, {
          default: w(() => [
            ye(z(p(te), {
              padding: "2",
              class: m(C.$style.searchbox)
            }, {
              default: w(() => [
                z(p(ql), {
                  ref_key: "searchEl",
                  ref: s,
                  modelValue: r.value,
                  "onUpdate:modelValue": a[3] || (a[3] = (g) => r.value = g),
                  type: "search",
                  placeholder: "Search",
                  tabindex: "0",
                  style: { "flex-grow": "1" }
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["class"]), [
              [De, F.value]
            ]),
            z(p(cn), null, {
              default: w(() => [
                (l(!0), v(W, null, Q(S.value, (g, B) => (l(), I(p(go), {
                  key: `${g.value}`,
                  "data-selectactive": o.value.includes(g.value) ? "true" : void 0,
                  active: o.value.includes(g.value),
                  onClick: (H) => y(g)
                }, {
                  default: w(() => [
                    b(C.$slots, "default", {
                      index: B,
                      option: g
                    }, () => [
                      R(T(L(g)), 1)
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
        z(p(Ie), {
          ref_key: "fieldEl",
          ref: i,
          button: "",
          disabled: C.disabled
        }, {
          after: w(() => [
            z(p(q), { name: "arrow_drop_down" })
          ]),
          default: w(() => [
            o.value.length ? (l(), v("p", un, [
              (l(!0), v(W, null, Q(o.value, (g, B) => (l(), v(W, null, [
                B ? (l(), v(W, { key: 0 }, [
                  R(", ")
                ], 64)) : M("", !0),
                O(g) ? b(C.$slots, "default", {
                  key: 1,
                  index: C.options.indexOf(O(g)),
                  option: O(g)
                }, () => [
                  R(T(L(O(g))), 1)
                ]) : (l(), v(W, { key: 2 }, [
                  R(T(g), 1)
                ], 64))
              ], 64))), 256))
            ])) : (l(), v("p", pn, T(D.value), 1)),
            ye(h("input", {
              ref_key: "hiddenInput",
              ref: u,
              "onUpdate:modelValue": a[2] || (a[2] = (g) => r.value = g),
              style: { position: "fixed", "pointer-events": "none", opacity: "0" },
              disabled: C.disabled
            }, null, 8, vn), [
              [Re, r.value]
            ])
          ]),
          _: 3
        }, 8, ["disabled"])
      ]),
      _: 3
    }, 8, ["modelValue", "disabled"]));
  }
}), yn = "dodo-select-searchbox", $n = {
  searchbox: yn
}, hn = {
  $style: $n
}, ga = /* @__PURE__ */ N(fn, [["__cssModules", hn]]), gn = /* @__PURE__ */ E({
  __name: "SelectButtons",
  props: {
    options: {},
    modelValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    small: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(c, { emit: t }) {
    const e = c, o = V(() => e.multiple ? [e.modelValue].flat() : [e.modelValue]);
    function n(s, $) {
      return s.value === $;
    }
    function r(s) {
      return o.value.some(($) => n(s, $));
    }
    function u(s) {
      let $ = s.value;
      r(s) && e.multiple ? $ = o.value.filter((d) => !n(s, d)) : e.multiple && ($ = [...o.value, s.value]), t("update:modelValue", $);
    }
    return (s, $) => (l(), v("div", {
      class: m([s.$style.Select, s.multiple && s.$style.multiple])
    }, [
      (l(!0), v(W, null, Q(s.options, (i, d) => (l(), I(p(Z), oe({
        key: i.label
      }, r(i) ? { active: !0, color: "info" } : {}, {
        disabled: s.disabled,
        small: s.small,
        rounded: "",
        onClick: (_) => u(i)
      }), {
        default: w(() => [
          b(s.$slots, "default", {
            option: i,
            index: d
          }, () => [
            R(T(i.label || i.value), 1)
          ])
        ]),
        _: 2
      }, 1040, ["disabled", "small", "onClick"]))), 128))
    ], 2));
  }
}), bn = "dodo-selectbuttons-select", wn = "dodo-selectbuttons-multiple", kn = {
  Select: bn,
  multiple: wn
}, _n = {
  $style: kn
}, ba = /* @__PURE__ */ N(gn, [["__cssModules", _n]]), Cn = {
  key: 0,
  viewBox: "0 0 48 48"
}, Mn = /* @__PURE__ */ ue('<clipPath id="g"><path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path></clipPath><g clip-path="url(#g)"><path fill="#FBBC05" d="M0 37V11l17 13z"></path><path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path><path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path><path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path></g>', 2), Sn = [
  Mn
], Bn = {
  key: 1,
  viewBox: "0 0 248 204"
}, Vn = /* @__PURE__ */ h("path", {
  id: "white_background",
  fill: "#1D9BF0",
  d: "M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
}, null, -1), In = [
  Vn
], zn = {
  key: 2,
  viewBox: "60 60 140 140"
}, En = /* @__PURE__ */ ue('<path fill="#E01E5A" d="M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"></path><path fill="#E01E5A" d="M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9V151.2z"></path><path fill="#36C5F0" d="M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"></path><path fill="#36C5F0" d="M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9H118.8z"></path><path fill="#2EB67D" d="M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"></path><path fill="#2EB67D" d="M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9V118.8z"></path><path fill="#ECB22E" d="M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"></path><path fill="#ECB22E" d="M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9H151.2z"></path>', 8), Ln = [
  En
], An = {
  key: 3,
  viewBox: "2 2 46 46"
}, Tn = /* @__PURE__ */ h("path", { d: "M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" }, null, -1), Nn = [
  Tn
], Fn = {
  key: 4,
  viewBox: "0 0 14222 14222"
}, Dn = /* @__PURE__ */ h("circle", {
  cx: "7111",
  cy: "7112",
  r: "7111",
  fill: "#1977f3"
}, null, -1), Rn = /* @__PURE__ */ h("path", {
  d: "M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z",
  fill: "#fff"
}, null, -1), Hn = [
  Dn,
  Rn
], On = {
  key: 5,
  viewBox: "0 0 24 24"
}, jn = /* @__PURE__ */ h("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }, null, -1), Wn = [
  jn
], qn = {
  key: 6,
  viewBox: "6 6 36 36"
}, Pn = /* @__PURE__ */ h("path", {
  fill: "#0288D1",
  d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
}, null, -1), Un = /* @__PURE__ */ h("path", {
  fill: "#FFF",
  d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
}, null, -1), Gn = [
  Pn,
  Un
], Kn = {
  key: 7,
  viewBox: "10 10 160 160"
}, Xn = /* @__PURE__ */ ue('<defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"></stop><stop offset="1" stop-color="#23b33a"></stop></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531"></feGaussianBlur></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"></path><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"></path><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"></path><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"></path><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"></path>', 6), Jn = [
  Xn
], Zn = /* @__PURE__ */ E({
  __name: "SocialIcon",
  props: {
    name: {},
    white: { type: Boolean },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(c) {
    return (t, e) => (l(), v("span", {
      class: m([t.$style.SocialIcon, t.small && t.$style.small, t.large && t.$style.large, t.white && t.$style.white])
    }, [
      t.name === "google" ? (l(), v("svg", Cn, Sn)) : t.name === "twitter" ? (l(), v("svg", Bn, In)) : t.name === "slack" ? (l(), v("svg", zn, Ln)) : t.white && t.name === "facebook" ? (l(), v("svg", An, Nn)) : t.name === "facebook" ? (l(), v("svg", Fn, Hn)) : t.white && t.name === "linkedin" ? (l(), v("svg", On, Wn)) : t.name === "linkedin" ? (l(), v("svg", qn, Gn)) : t.name === "whatsapp" ? (l(), v("svg", Kn, Jn)) : M("", !0)
    ], 2));
  }
}), Qn = "dodo-socialicon", Yn = "dodo-socialicon-white", xn = "dodo-socialicon-small", el = "dodo-socialicon-large", tl = {
  SocialIcon: Qn,
  white: Yn,
  small: xn,
  large: el
}, ol = {
  $style: tl
}, wa = /* @__PURE__ */ N(Zn, [["__cssModules", ol]]), sl = /* @__PURE__ */ h("path", {
  stroke: "currentColor",
  fill: "none",
  d: "M 9 1 A 8 8 0 0 1 17 9",
  "stroke-width": "2"
}, null, -1), nl = /* @__PURE__ */ h("path", {
  stroke: "currentColor",
  opacity: "0.33",
  fill: "none",
  d: "M 17 9 A 8 8 0 1 1 9 1",
  "stroke-width": "2"
}, null, -1), ll = [
  sl,
  nl
], al = /* @__PURE__ */ E({
  __name: "Spinner",
  props: {
    color: { default: void 0 },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(c) {
    const t = c, e = Y(), o = V(() => {
      let n = "";
      return t.color === "inherit" ? n += "color:inherit;" : t.color && (n += `color:${e.colorCss(t.color)};`), n;
    });
    return (n, r) => (l(), v("div", {
      class: m([n.$style.Spinner, n.small && n.$style.small, n.large && n.$style.large])
    }, [
      (l(), v("svg", {
        style: X(o.value),
        viewBox: "0 0 18 18"
      }, ll, 4))
    ], 2));
  }
}), rl = "dodo-spinner", il = "dodo-spinner-small", dl = "dodo-spinner-large", cl = {
  Spinner: rl,
  small: il,
  large: dl
}, ul = {
  $style: cl
}, pl = /* @__PURE__ */ N(al, [["__cssModules", ul]]), vl = { key: 1 }, ml = { key: 0 }, fl = {
  key: 1,
  class: "dodo-fade-secondary"
}, yl = {
  key: 0,
  class: "dodo-fade-secondary"
}, $l = /* @__PURE__ */ h("br", null, null, -1), hl = /* @__PURE__ */ E({
  __name: "Stepper",
  props: {
    stepIndex: {},
    steps: {},
    completed: { type: Function }
  },
  emits: ["update:stepIndex"],
  setup(c, { emit: t }) {
    const e = c, o = k(0), n = V(() => e.steps[o.value]);
    function r() {
      o.value--;
    }
    async function u() {
      const s = n.value;
      if (!s.incomplete && !(s.submitStep && !await s.submitStep())) {
        if (o.value === e.steps.length - 1) {
          await e.completed();
          return;
        }
        o.value++;
      }
    }
    return G(() => {
      e.stepIndex != null && (o.value = e.stepIndex);
    }), J(o, () => {
      t("update:stepIndex", o.value);
    }), (s, $) => (l(), I(p(U), {
      class: m(s.$style.stepper)
    }, {
      default: w(() => [
        (l(!0), v(W, null, Q(s.steps, (i, d) => (l(), I(p(te), {
          key: i.name,
          align: "stretch",
          gap: "4",
          class: m(d > o.value && s.$style.inactiveStep)
        }, {
          default: w(() => [
            z(p(U), { align: "center" }, {
              default: w(() => [
                h("div", {
                  class: m([s.$style.circle])
                }, [
                  o.value > d ? (l(), I(p(q), {
                    key: 0,
                    name: "check"
                  })) : (l(), v("h3", vl, T(d + 1), 1))
                ], 2),
                d < s.steps.length - 1 ? (l(), v("div", {
                  key: 0,
                  class: m(s.$style.line)
                }, null, 2)) : M("", !0)
              ]),
              _: 2
            }, 1024),
            z(p(U), { grow: "" }, {
              default: w(() => [
                z(p(U), { gap: "1" }, {
                  default: w(() => [
                    h("h3", null, [
                      i === n.value ? (l(), v("span", ml, T(i.name), 1)) : (l(), v("span", fl, T(i.name), 1))
                    ]),
                    i.hint ? (l(), v("p", yl, T(i.hint), 1)) : M("", !0)
                  ]),
                  _: 2
                }, 1024),
                i === n.value ? (l(), I(p(U), { key: 0 }, {
                  default: w(() => [
                    b(s.$slots, i.key),
                    z(p(te), null, {
                      default: w(() => [
                        o.value < s.steps.length - 1 ? (l(), I(p(Z), {
                          key: 0,
                          disabled: i.incomplete,
                          color: "primary",
                          variant: "solid",
                          onClick: u
                        }, {
                          default: w(() => [
                            R(T(i.submitText || "Continue"), 1)
                          ]),
                          _: 2
                        }, 1032, ["disabled"])) : (l(), I(p(Z), {
                          key: 1,
                          color: "primary",
                          variant: "solid",
                          onClick: u
                        }, {
                          default: w(() => [
                            R(T(i.submitText || "Complete"), 1)
                          ]),
                          _: 2
                        }, 1024)),
                        o.value > 0 ? (l(), I(p(Z), {
                          key: 2,
                          variant: "text",
                          onClick: r
                        }, {
                          default: w(() => [
                            R(" Back ")
                          ]),
                          _: 1
                        })) : M("", !0)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)) : M("", !0),
                $l
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
}), gl = "dodo-stepper", bl = "dodo-stepper-line", wl = "dodo-stepper-circle", kl = "dodo-stepper-inactivestep", _l = {
  stepper: gl,
  line: bl,
  circle: wl,
  inactiveStep: kl
}, Cl = {
  $style: _l
}, ka = /* @__PURE__ */ N(hl, [["__cssModules", Cl]]), Ml = ["onClick"], Sl = /* @__PURE__ */ h("hr", null, null, -1), Bl = /* @__PURE__ */ E({
  __name: "Tabs",
  props: {
    tabs: {},
    tabIndex: {}
  },
  emits: ["update:tabIndex"],
  setup(c, { emit: t }) {
    const e = c, o = He(), n = k(), r = k(""), u = V(() => e.tabs.find((y) => D(y) === r.value)), s = k(!1), $ = k(!1), i = V(() => s.value || $.value), d = k();
    it(n, S), ee(() => {
      const y = n.value;
      y.addEventListener("scroll", S, { passive: !0 }), y.addEventListener("mousedown", _), y.addEventListener("touchstart", _);
    }), x(() => {
      var y;
      (y = n.value) == null || y.removeEventListener("scroll", S);
    }), G(() => {
      !u.value && e.tabs.length && (r.value = D(e.tabs[0]));
    }), J(u, async () => {
      var A;
      await de();
      const y = (A = n.value) == null ? void 0 : A.querySelector("." + o.active);
      y == null || y.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }), J(
      () => e.tabIndex,
      () => {
        e.tabIndex != null && e.tabs[e.tabIndex] && (r.value = D(e.tabs[e.tabIndex]));
      },
      { immediate: !0 }
    ), J(
      () => u.value,
      () => {
        u.value && t("update:tabIndex", e.tabs.indexOf(u.value));
      },
      { immediate: !0 }
    );
    function _(y) {
      const A = n.value, L = y instanceof TouchEvent ? y.touches[0] : y;
      d.value = { startScroll: A.scrollLeft, startX: L.clientX }, document.addEventListener("mousemove", F), document.addEventListener("touchmove", F), document.addEventListener("mouseup", f), document.addEventListener("touchup", f);
    }
    function f() {
      d.value = void 0, document.removeEventListener("mousemove", F), document.removeEventListener("touchmove", F), document.removeEventListener("mouseup", f), document.removeEventListener("touchend", f);
    }
    function F(y) {
      const L = (y instanceof TouchEvent ? y.touches[0] : y).clientX - d.value.startX, j = n.value;
      j && (j.scrollLeft = d.value.startScroll - L);
    }
    function S() {
      var j;
      const y = n.value;
      if (!y)
        return;
      const A = ((j = y.parentElement) == null ? void 0 : j.clientWidth) ?? 0, L = y.scrollWidth ?? 0;
      s.value = y.scrollLeft > 0, $.value = y.scrollLeft + A < L;
    }
    function D(y) {
      return y.slot ?? y.name;
    }
    function O(y) {
      if (!n.value)
        return;
      const A = n.value.clientWidth * 0.75;
      n.value.scrollBy({ left: y * A, behavior: "smooth" });
    }
    return (y, A) => (l(), I(p(U), { gap: "4" }, {
      default: w(() => [
        z(p(U), { gap: "0" }, {
          default: w(() => [
            h("div", {
              class: m(y.$style.bar)
            }, [
              i.value ? (l(), v("button", {
                key: 0,
                class: m([y.$style.arrow, !s.value && y.$style.arrowOff]),
                onClick: A[0] || (A[0] = (L) => O(-1))
              }, [
                z(p(q), {
                  name: "navigate_before",
                  size: "l"
                })
              ], 2)) : M("", !0),
              h("div", {
                ref_key: "tabsDiv",
                ref: n,
                class: m([y.$style.tabs, d.value && y.$style.dragging])
              }, [
                (l(!0), v(W, null, Q(y.tabs, (L, j) => (l(), v("div", {
                  key: D(L),
                  class: m([y.$style.tab, r.value === D(L) && y.$style.active, L.disabled && y.$style.disabled]),
                  onClick: (K) => r.value = D(L)
                }, [
                  h("h5", {
                    class: m(y.$style.tabName)
                  }, [
                    b(y.$slots, "tab-title", {
                      i: j,
                      tab: L
                    }, () => [
                      R(T(L.name), 1)
                    ])
                  ], 2)
                ], 10, Ml))), 128))
              ], 2),
              i.value ? (l(), v("button", {
                key: 1,
                class: m([y.$style.arrow, !$.value && y.$style.arrowOff]),
                onClick: A[1] || (A[1] = (L) => O(1))
              }, [
                z(p(q), {
                  name: "navigate_next",
                  size: "l"
                })
              ], 2)) : M("", !0)
            ], 2),
            Sl
          ]),
          _: 3
        }),
        u.value ? b(y.$slots, u.value.slot ?? "default", {
          key: 0,
          tab: u.value
        }) : M("", !0)
      ]),
      _: 3
    }));
  }
}), Vl = "dodo-tabs-bar", Il = "dodo-tabs", zl = "dodo-tabs-dragging", El = "dodo-tabs-tab", Ll = "dodo-tabs-tabname", Al = "dodo-tabs-active", Tl = "dodo-tabs-disabled", Nl = "dodo-tabs-arrow", Fl = "dodo-tabs-arrowoff", Dl = {
  bar: Vl,
  tabs: Il,
  dragging: zl,
  tab: El,
  tabName: Ll,
  active: Al,
  disabled: Tl,
  arrow: Nl,
  arrowOff: Fl
}, Rl = {
  $style: Dl
}, _a = /* @__PURE__ */ N(Bl, [["__cssModules", Rl]]), Hl = /* @__PURE__ */ E({
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
  setup(c, { emit: t }) {
    const e = c, o = k();
    function n() {
      o.value.focus();
    }
    function r() {
      t("update:modelValue", o.value.value);
    }
    return G(() => {
      e.autofocus && o.value && o.value.focus();
    }), (u, s) => (l(), I(p(Ie), {
      class: m([u.$style.TextInput]),
      disabled: u.disabled,
      onClick: n
    }, {
      before: w(() => [
        b(u.$slots, "before")
      ]),
      after: w(() => [
        b(u.$slots, "after")
      ]),
      default: w(() => [
        (l(), I(re(u.rows && u.rows > 1 ? "textarea" : "input"), {
          id: u.id,
          ref_key: "el",
          ref: o,
          value: u.modelValue,
          class: m(u.$style.input),
          placeholder: u.placeholder,
          disabled: u.disabled,
          rows: u.rows,
          maxlength: u.maxlength,
          type: u.type,
          name: u.name,
          "tab-index": u.tabIndex,
          autofocus: u.autofocus,
          onInput: r
        }, null, 40, ["id", "value", "class", "placeholder", "disabled", "rows", "maxlength", "type", "name", "tab-index", "autofocus"]))
      ]),
      _: 3
    }, 8, ["class", "disabled"]));
  }
}), Ol = "dodo-textinput", jl = {
  TextInput: Ol
}, Wl = {
  $style: jl
}, ql = /* @__PURE__ */ N(Hl, [["__cssModules", Wl]]), Pl = /* @__PURE__ */ E({
  __name: "Tooltip",
  props: {
    text: {},
    disabled: { type: Boolean },
    side: {}
  },
  setup(c) {
    const t = c, e = k(!1), o = k(""), n = k(), r = k(), u = ce(), s = V(() => t.disabled || !(t.text || u["tooltip-text"]));
    x(i);
    async function $() {
      if (e.value || s.value)
        return;
      e.value = !0, await de();
      const d = n.value.getBoundingClientRect(), _ = r.value.getBoundingClientRect();
      t.side, d.bottom + _.height < window.innerHeight;
      let f = (d.right + d.left - _.width) / 2, F = d.bottom;
      t.side === "right" ? (f = d.right, F = (d.bottom + d.top - _.height) / 2) : t.side === "top" ? (f = (d.left + d.right - _.width) / 2, F = d.top - _.height) : t.side === "left" && (f = d.left - _.width, F = (d.bottom + d.top - _.height) / 2), F = Math.round(Math.max(Math.min(F, window.innerHeight - _.height), 0)), f = Math.round(Math.max(Math.min(f, window.innerWidth - _.width), 0)), o.value = `left:${f}px;top:${F}px`;
    }
    function i() {
      e.value = !1;
    }
    return (d, _) => (l(), v("div", {
      ref_key: "trigger",
      ref: n,
      class: m(d.$style.trigger),
      onMouseover: $,
      onMouseleave: i
    }, [
      b(d.$slots, "default"),
      e.value ? (l(), I(ie, {
        key: 0,
        to: "body"
      }, [
        h("div", {
          ref_key: "tooltip",
          ref: r,
          class: m(d.$style.Tooltip),
          style: X(o.value)
        }, [
          h("div", {
            class: m(d.$style.content)
          }, [
            h("small", {
              class: m(d.$style.text)
            }, [
              b(d.$slots, "tooltip-text", {}, () => [
                R(T(d.text), 1)
              ])
            ], 2)
          ], 2)
        ], 6)
      ])) : M("", !0)
    ], 34));
  }
}), Ul = "dodo-tooltip", Gl = "dodo-tooltip-content", Kl = "dodo-tooltip-text", Xl = "dodo-tooltip-trigger", Jl = {
  Tooltip: Ul,
  content: Gl,
  text: Kl,
  trigger: Xl
}, Zl = {
  $style: Jl
}, pe = /* @__PURE__ */ N(Pl, [["__cssModules", Zl]]);
export {
  ea as Animated,
  ta as Avatar,
  Z as Button,
  oa as Card,
  he as Checkbox,
  da as Chip,
  U as Column,
  ca as CrashDialog,
  ua as Datatable,
  to as Dialog,
  Ve as Dropdown,
  go as DropdownItem,
  Ie as Field,
  pa as FluidGrid,
  va as Grid,
  q as Icon,
  ma as Input,
  fa as Label,
  ya as NavBar,
  we as NavBarItem,
  $a as NavBarNew,
  ha as NavItem,
  te as Row,
  cn as ScrollContainer,
  ga as Select,
  ba as SelectButtons,
  wa as SocialIcon,
  pl as Spinner,
  ka as Stepper,
  _a as Tabs,
  ql as TextInput,
  pe as Tooltip,
  ra as ValidationError,
  la as crashPlugin,
  Se as crashServiceKey,
  Ce as dropdownServiceKey,
  _e as navBarServiceKey,
  na as parseColor,
  aa as useBaseFont,
  rt as useCrashService,
  sa as useElementSize,
  it as useResizeObserver,
  Me as useScreenSize,
  dt as useServiceFactory,
  lt as useSessionStoredRef,
  Y as useTheme,
  ia as useValidation,
  at as useWebFont
};
