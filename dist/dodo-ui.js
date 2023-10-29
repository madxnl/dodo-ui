var Te = Object.defineProperty;
var Ee = (d, t, e) => t in d ? Te(d, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[t] = e;
var ve = (d, t, e) => (Ee(d, typeof t != "symbol" ? t + "" : t, e), e);
import { defineComponent as z, openBlock as l, createBlock as V, TransitionGroup as Ae, withCtx as b, renderSlot as $, Transition as we, computed as S, createElementBlock as m, normalizeClass as f, normalizeStyle as J, Fragment as R, createTextVNode as F, toDisplayString as T, createCommentVNode as M, useAttrs as Ne, ref as _, mergeProps as oe, unref as u, createElementVNode as h, onMounted as ee, watchEffect as U, onBeforeUnmount as x, watch as Q, inject as se, provide as re, reactive as me, withModifiers as ne, createVNode as I, resolveDynamicComponent as le, renderList as K, Teleport as ke, nextTick as _e, onUnmounted as Fe, useSlots as ie, getCurrentInstance as De, withDirectives as fe, vShow as Le, vModelText as Re, createStaticVNode as de } from "vue";
const ye = !1, Ql = /* @__PURE__ */ z({
  __name: "Animated",
  props: {
    list: { type: Boolean },
    appear: { type: Boolean }
  },
  setup(d) {
    return (t, e) => t.list ? (l(), V(Ae, {
      key: 0,
      name: "dodo",
      appear: t.appear,
      css: !ye
    }, {
      default: b(() => [
        $(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"])) : (l(), V(we, {
      key: 1,
      appear: t.appear,
      name: "dodo",
      css: !ye,
      mode: "out-in"
    }, {
      default: b(() => [
        $(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"]));
  }
});
const He = /* @__PURE__ */ z({
  __name: "Avatar",
  props: {
    text: {},
    image: {},
    round: { type: Boolean }
  },
  setup(d) {
    const t = d, e = ["info", "warn", "success", "danger"], o = X(), n = S(() => {
      let s = t.text.trim();
      const y = /\b\w|[A-Z]/g, i = t.text.match(y);
      return i != null && i.length && (s = i.join("")), s.slice(0, 2).toUpperCase();
    }), r = S(() => {
      const s = e.length, y = p(t.text), i = e[y % s];
      return o.colorCss(i);
    });
    function p(s) {
      let y = 0;
      for (let i = 0; i < s.length; ++i)
        y = 997 * (y % 1e6) + 11 * s.charCodeAt(i);
      return y;
    }
    return (s, y) => (l(), m("span", {
      class: f([s.$style.Avatar, s.round && s.$style.round]),
      style: J([`--color:${r.value}`, s.image ? `background-image:url(${s.image})` : ""])
    }, [
      s.image ? M("", !0) : (l(), m(R, { key: 0 }, [
        F(T(n.value), 1)
      ], 64))
    ], 6));
  }
}), Oe = "dodo-avatar", je = "dodo-avatar-round", Pe = {
  Avatar: Oe,
  round: je
}, E = (d, t) => {
  const e = d.__vccOpts || d;
  for (const [o, n] of t)
    e[o] = n;
  return e;
}, qe = {
  $style: Pe
}, Xl = /* @__PURE__ */ E(He, [["__cssModules", qe]]), We = ["disabled", "type"], Ue = /* @__PURE__ */ z({
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
    const t = d, { colorPropRgb: e } = X(), o = S(() => {
      let s = "";
      return t.color && (s += `--bnt-rgb:${e(t.color)};`), s;
    }), n = Ne(), r = _(!1);
    async function p(s) {
      if (!r.value && typeof n.onClick == "function") {
        const y = n.onClick(s);
        y instanceof Promise && (r.value = !0, await y.finally(() => {
          r.value = !1;
        }));
      }
    }
    return (s, y) => (l(), m("button", oe({
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
    }, { ...u(n), onClick: p }), [
      h("div", {
        class: f(s.$style.content)
      }, [
        $(s.$slots, "default")
      ], 2),
      r.value ? (l(), V(u(cl), {
        key: 0,
        small: s.small,
        class: f(s.$style.spinner),
        color: "inherit"
      }, null, 8, ["small", "class"])) : M("", !0)
    ], 16, We));
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
}, G = /* @__PURE__ */ E(Ue, [["__cssModules", st]]), Yl = /* @__PURE__ */ z({
  __name: "Card",
  props: {
    hoverable: { type: Boolean },
    active: { type: Boolean },
    gap: {},
    padding: {}
  },
  setup(d) {
    const t = X();
    return (e, o) => (l(), m("div", {
      class: f([
        "dodo-card",
        e.hoverable && "dodo-card--hoverable",
        e.active && "dodo-card--active",
        u(t).padding(e.padding),
        u(t).gap(e.gap)
      ])
    }, [
      $(e.$slots, "default")
    ], 2));
  }
});
const Ce = Symbol("NavBarService"), Me = Symbol("DropdownService");
function xl(d) {
  const t = _(0), e = _(0), o = new ResizeObserver(n);
  function n() {
    var r, p;
    t.value = ((r = d.value) == null ? void 0 : r.clientWidth) ?? 0, e.value = ((p = d.value) == null ? void 0 : p.clientHeight) ?? 0;
  }
  return ee(n), U(() => {
    o.disconnect(), d.value && o.observe(d.value), n();
  }), x(() => {
    o.disconnect();
  }), { width: t, height: e, observer: o };
}
function Se() {
  const e = _(window.innerWidth), o = _(window.innerHeight), n = S(() => e.value < 600), r = S(() => e.value >= 600 && e.value < 1200), p = S(() => e.value >= 1200);
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
    screenLarge: p
  };
}
function nt(d, t) {
  const e = _(t), o = sessionStorage.getItem(d);
  return o && (e.value = JSON.parse(o)), Q(e, (n) => {
    sessionStorage.setItem(d, JSON.stringify(n));
  }), e;
}
function lt(d) {
  const t = _(!1);
  return ee(async () => {
    const e = `font-${d.name}-${d.weight}`;
    let o = document.getElementById(e);
    o || (o = document.createElement("link"), o.setAttribute("href", d.href), o.setAttribute("rel", "stylesheet"), o.setAttribute("id", e), document.head.appendChild(o)), await document.fonts.ready, t.value = document.fonts.check(`${d.weight} 1em ${d.name}`);
  }), { isReady: t };
}
function ea(d) {
  if (!d.match(/^#\w{6}$/))
    throw new Error("Invalid hex color");
  return d.match(/(\w\w)/g).map((t) => parseInt(t, 16)).slice(0, 3);
}
const Be = Symbol(Ve.name);
function Ve(d) {
  const t = _(null), e = _(0), o = 1e3;
  function n() {
    t.value = null, e.value = Date.now() + o;
  }
  function r() {
    location.reload();
  }
  function p(s) {
    !t.value && e.value < Date.now() && (console.error(s), t.value = s);
  }
  return { ignoreError: n, reloadPage: r, currentError: t, handleCrash: p };
}
function ta(d) {
  return (t) => {
    var n;
    const e = Ve();
    t.provide(Be, e);
    const { errorHandler: o } = t.config;
    t.config.errorHandler = (r, p, s) => {
      if (e.handleCrash(r), o)
        return o(r, p, s);
    }, (n = d.router) == null || n.onError((r) => {
      e.handleCrash(r);
    }), window.addEventListener("unhandledrejection", (r) => {
      e.handleCrash(r.reason);
    }), window.addEventListener("error", (r) => {
      e.handleCrash(r.error ?? r.message);
    });
  };
}
function at() {
  return se(Be);
}
function oa(d, t) {
  if (typeof ResizeObserver > "u")
    return {};
  const e = new ResizeObserver(() => t(d.value));
  return U(() => {
    d.value && e.observe(d.value);
  }), x(() => {
    e.disconnect();
  }), { observer: e };
}
function rt(d) {
  const t = Symbol("ServiceKey");
  return { createAndProvide: () => {
    const n = d();
    return re(t, n), n;
  }, injectOptional: () => se(t, void 0) };
}
function X() {
  function d(v) {
    return typeof v == "string" ? `var(--dodo-rgb-${v})` : v.join(",");
  }
  function t(v) {
    return typeof v == "string" ? `var(--dodo-color-${v})` : `rgb(${v.join(",")})`;
  }
  function e(v) {
    if (v instanceof Array)
      return v;
    const A = getComputedStyle(document.body).getPropertyValue(`--dodo-rgb-${v}`);
    return A ? A.split(",").map(Number) : [0, 0, 0];
  }
  function o(v) {
    return "#" + e(v).map((k) => k.toString(16).padStart(2, "0")).join("");
  }
  function n(v) {
    return `var(--dodo-gap-${v})`;
  }
  function r(v) {
    return v ? `dodo-gap-${v}` : "";
  }
  function p(v) {
    return v ? `dodo-pad-${v}` : "";
  }
  function s(v) {
    return v ? `dodo-justify-${v}` : "";
  }
  function y(v) {
    return v ? `dodo-align-${v}` : "";
  }
  function i(v) {
    return v ? "dodo-wrap" : "";
  }
  function c(v) {
    return v ? "dodo-flex" : "";
  }
  function w(v) {
    return v ? "dodo-grow" : "";
  }
  return {
    colorCss: t,
    colorPropRgb: d,
    gapValue: n,
    colorHexStr: o,
    colorRgbValues: e,
    gap: r,
    padding: p,
    justify: s,
    align: y,
    wrap: i,
    flex: c,
    grow: w
  };
}
function sa() {
  return { fontClass: "dodo-fonts" };
}
class na extends Error {
  constructor(e, o) {
    super(o);
    ve(this, "name", "ValidationError");
    this.field = e;
  }
}
function la(d) {
  const t = me(d), e = me({});
  Q(t, () => r());
  async function o(i) {
    const c = t[i];
    if (c) {
      const w = c.value, v = await s(i, w);
      if (v)
        return e[i] = String(v), !1;
    }
    return delete e[i], !0;
  }
  async function n(...i) {
    const c = i.length ? i : Object.keys(t);
    return (await Promise.all(c.map((v) => o(v)))).every((v) => v);
  }
  async function r() {
    return (await Promise.all(Object.keys(e).map((c) => o(c)))).every((c) => c);
  }
  function p() {
    for (const i in e)
      delete e[i];
  }
  async function s(i, c) {
    const w = t[i], v = w.name ?? y(i);
    if (w.required && !c)
      return `${v} is required`;
    if (w.isEmail && c != null && (typeof c != "string" || !c.includes("@")))
      return `${v} is not valid`;
    if (typeof c == "string") {
      if (w.minLen != null && c.length < w.minLen)
        return `${v} must be at least ${w.minLen} characters`;
      if (w.maxLen != null && c.length > w.maxLen)
        return `${v} must be less than ${w.maxLen} characters`;
    }
    if (w.validators)
      for (const A of w.validators) {
        const k = await A(c, v);
        if (k)
          return k;
      }
  }
  function y(i) {
    return i.toString().replace(/_/g, " ").replace(/^./, (c) => c.toUpperCase()).replace(/[a-z][A-Z]/g, (c) => `${c[0]} ${c[1]}`);
  }
  return { errors: e, rules: t, validate: n, clearErrors: p };
}
const it = ["onClick"], dt = ["checked"], ct = /* @__PURE__ */ z({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean },
    indeterminate: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(d, { emit: t }) {
    const e = d;
    function o() {
      t("update:modelValue", e.indeterminate || !e.modelValue);
    }
    function n(r) {
      r.target.checked !== e.modelValue && o();
    }
    return (r, p) => (l(), m("span", {
      class: f([r.$style.Checkbox, r.modelValue && r.$style.checked]),
      onClick: ne(o, ["stop"])
    }, [
      I(u(W), {
        name: r.indeterminate ? "indeterminate_check_box" : r.modelValue ? "check_box" : "check_box_outline_blank"
      }, null, 8, ["name"]),
      $(r.$slots, "default"),
      h("input", {
        type: "checkbox",
        checked: r.modelValue,
        onChange: n
      }, null, 40, dt)
    ], 10, it));
  }
}), ut = "dodo-checkbox", pt = "dodo-checkbox-checked", vt = {
  Checkbox: ut,
  checked: pt
}, mt = {
  $style: vt
}, $e = /* @__PURE__ */ E(ct, [["__cssModules", mt]]), ft = /* @__PURE__ */ z({
  __name: "Chip",
  props: {
    color: {}
  },
  setup(d) {
    const t = d, e = X(), o = S(() => {
      let n = "";
      return t.color && (n += `--chip-rgb:${e.colorPropRgb(t.color)};`), n;
    });
    return (n, r) => (l(), V(le(n.$attrs.onClick ? "button" : "div"), {
      class: f(n.$style.Chip),
      style: J(o.value)
    }, {
      default: b(() => [
        $(n.$slots, "before"),
        h("div", {
          class: f(n.$style.text)
        }, [
          $(n.$slots, "default")
        ], 2),
        $(n.$slots, "after")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), yt = "dodo-chip", $t = "dodo-chip-text", ht = {
  Chip: yt,
  text: $t
}, gt = {
  $style: ht
}, aa = /* @__PURE__ */ E(ft, [["__cssModules", gt]]), bt = /* @__PURE__ */ z({
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
    const t = X();
    return (e, o) => (l(), V(le(e.tag ?? "div"), {
      class: f([
        e.$style.el,
        u(t).gap(e.gap),
        u(t).padding(e.padding),
        u(t).align(e.align),
        u(t).padding(e.padding),
        u(t).wrap(e.wrap),
        u(t).grow(e.grow)
      ])
    }, {
      default: b(() => [
        $(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), wt = "dodo-column-el", kt = {
  el: wt
}, _t = {
  $style: kt
}, q = /* @__PURE__ */ E(bt, [["__cssModules", _t]]), Ct = /* @__PURE__ */ h("h3", null, "Something went wrong", -1), he = `
  An unexpected error occurred and the application may not function correctly until the page is reloaded.
  Any unsaved changes will be lost if you choose to reload the page.
`, ra = /* @__PURE__ */ z({
  __name: "CrashDialog",
  setup(d) {
    const t = at(), e = S(() => t.currentError.value), o = _(!1);
    return U(() => {
      o.value = !!e.value;
    }), (n, r) => (l(), V(u(xt), { active: o.value }, {
      controls: b(() => [
        I(u(G), {
          variant: "text",
          onClick: u(t).ignoreError
        }, {
          default: b(() => [
            F("Ignore")
          ]),
          _: 1
        }, 8, ["onClick"]),
        I(u(G), {
          variant: "solid",
          color: "info",
          onClick: u(t).reloadPage
        }, {
          default: b(() => [
            F("Reload page")
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: b(() => [
        Ct,
        $(n.$slots, "body", {
          error: e.value,
          defaultText: he
        }, () => [
          h("p", null, T(he))
        ])
      ]),
      _: 3
    }, 8, ["active"]));
  }
}), Mt = {
  key: 0,
  style: { width: "0" },
  scope: "col"
}, St = ["onClick"], Bt = ["onClick"], Vt = { key: 0 }, It = /* @__PURE__ */ h("td", { colspan: "999" }, "No results", -1), zt = [
  It
], Tt = { colspan: "999" }, Et = { key: 0 }, At = /* @__PURE__ */ z({
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
    const e = d, o = _(), n = _([]), r = _(!1);
    U(() => {
      o.value = e.sortValue;
    }), U(() => {
      n.value = e.selection ?? [];
    }), Q(o, (a) => {
      t("update:sortValue", a);
    }), Q(n, (a) => {
      t("update:selection", a);
    });
    const p = S(() => {
      var a;
      return (a = o.value) == null ? void 0 : a.startsWith("-");
    }), s = S(() => e.columns.filter((a) => !a.disabled)), y = S(() => !!e.selection), i = S(() => {
      const a = s.value.find(w);
      return e.sortAsync || !a ? e.rows : e.rows.slice().sort((g, B) => {
        const L = O(a, g), P = O(a, B), pe = typeof L == "number" && typeof P == "number" ? P - L : `${P}`.localeCompare(`${L}`);
        return p.value ? pe : -pe;
      });
    });
    function c(a) {
      if (w(a))
        return p.value ? "arrow_drop_up" : "arrow_drop_down";
    }
    function w(a) {
      var g;
      return ((g = o.value) == null ? void 0 : g.replace("-", "")) === a.sort;
    }
    function v(a) {
      return a.slot || a.name.trim().replace(/\W/g, "");
    }
    function A(a) {
      return !!a.sort;
    }
    function k(a) {
      return a.align ? `text-align:${a.align}` : "";
    }
    function N(a) {
      return a.width ? `width:${a.width}` : "";
    }
    async function H(a) {
      A(a) && (w(a) ? o.value = p.value ? void 0 : "-" + a.sort : o.value = a.sort, e.sortAsync && (r.value = !0, await e.sortAsync(o.value).finally(() => {
        r.value = !1;
      })));
    }
    function D(a) {
      return e.selectBy ? a[e.selectBy] : a;
    }
    function j(a) {
      const g = D(a);
      n.value.includes(g) ? n.value = n.value.filter((B) => B !== g) : n.value = n.value.concat(g);
    }
    function O(a, g) {
      return typeof a.value == "function" ? a.value(g) : typeof a.value == "string" ? g[a.value] : "";
    }
    function Y(a) {
      if (!y.value)
        return !1;
      const g = D(a);
      return n.value.includes(g);
    }
    const Z = S(() => y.value ? e.rows.filter((a) => n.value.includes(D(a))) : []);
    function C() {
      const a = Z.value.length === e.rows.length;
      n.value = a ? [] : e.rows.map(D);
    }
    return (a, g) => (l(), m("div", {
      class: f([a.$style.Datatable, a.contentLoading && a.$style.loading])
    }, [
      h("table", null, [
        h("tbody", null, [
          h("tr", {
            class: f(a.stickyHeader && a.$style.stickyHeader)
          }, [
            y.value ? (l(), m("th", Mt, [
              I(u($e), {
                indeterminate: Z.value.length > 0 && Z.value.length < a.rows.length,
                "model-value": Z.value.length > 0 && Z.value.length === a.rows.length,
                "onUpdate:modelValue": C
              }, null, 8, ["indeterminate", "model-value"])
            ])) : M("", !0),
            (l(!0), m(R, null, K(s.value, (B) => (l(), m("th", {
              key: B.name,
              scope: "col",
              class: f([A(B) ? a.$style.sortable : "", w(B) && a.$style.sortActive]),
              style: J([k(B), N(B)]),
              onClick: (L) => H(B)
            }, [
              h("span", {
                class: f(a.$style.colName)
              }, [
                h("span", null, [
                  $(a.$slots, `${v(B)}-header`, { column: B }, () => [
                    F(T(B.name), 1)
                  ])
                ]),
                c(B) ? (l(), V(u(W), {
                  key: 0,
                  name: c(B),
                  class: f(a.$style.sortIcon)
                }, null, 8, ["name", "class"])) : M("", !0)
              ], 2)
            ], 14, St))), 128))
          ], 2),
          (l(!0), m(R, null, K(i.value, (B, L) => (l(), m("tr", {
            key: L,
            class: f([a.rowClick && a.$style.clickableRow, Y(B) && a.$style.rowSelected]),
            onClick: (P) => a.rowClick && a.rowClick(B)
          }, [
            y.value ? (l(), m("td", Vt, [
              I(u($e), {
                "model-value": Y(B),
                "onUpdate:modelValue": (P) => j(B)
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ])) : M("", !0),
            (l(!0), m(R, null, K(s.value, (P) => (l(), m("td", {
              key: P.name,
              class: f([]),
              style: J(k(P))
            }, [
              $(a.$slots, v(P), {
                row: B,
                column: P
              }, () => [
                F(T(O(P, B)), 1)
              ])
            ], 4))), 128))
          ], 10, Bt))), 128)),
          a.rows.length ? M("", !0) : (l(), m("tr", {
            key: 0,
            class: f(a.$style.noResults)
          }, zt, 2)),
          a.rows.length && a.showMore ? (l(), m("tr", {
            key: 1,
            class: f(a.$style.showMore)
          }, [
            h("td", Tt, [
              I(u(G), {
                variant: "text",
                color: "info",
                onClick: a.showMore
              }, {
                default: b(() => [
                  F("Show more results")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ], 2)) : M("", !0),
          a.showFooter ? (l(), m("tr", {
            key: 2,
            class: f([a.$style.footer, a.stickyHeader && a.$style.stickyFooter])
          }, [
            y.value ? (l(), m("td", Et)) : M("", !0),
            (l(!0), m(R, null, K(s.value, (B) => (l(), m("th", {
              key: B.name,
              style: J(k(B)),
              scope: "col"
            }, [
              $(a.$slots, `${v(B)}-footer`, { column: B })
            ], 4))), 128))
          ], 2)) : M("", !0)
        ])
      ])
    ], 2));
  }
}), Nt = "dodo-datatable", Ft = "dodo-datatable-colname", Dt = "dodo-datatable-sortable", Lt = "dodo-datatable-sorticon", Rt = "dodo-datatable-sortactive", Ht = "dodo-datatable-noresults", Ot = "dodo-datatable-showmore", jt = "dodo-datatable-clickablerow", Pt = "dodo-datatable-rowselected", qt = "dodo-datatable-stickyheader", Wt = "dodo-datatable-stickyfooter", Ut = "dodo-datatable-loading", Gt = {
  Datatable: Nt,
  colName: Ft,
  sortable: Dt,
  sortIcon: Lt,
  sortActive: Rt,
  noResults: Ht,
  showMore: Ot,
  clickableRow: jt,
  rowSelected: Pt,
  stickyHeader: qt,
  stickyFooter: Wt,
  loading: Ut
}, Kt = {
  $style: Gt
}, ia = /* @__PURE__ */ E(At, [["__cssModules", Kt]]), Jt = /* @__PURE__ */ z({
  __name: "Dialog",
  props: {
    active: { type: Boolean }
  },
  setup(d) {
    const t = d, e = _();
    return U(() => {
      t.active && e.value && e.value.parentNode.appendChild(e.value);
    }), (o, n) => (l(), V(ke, { to: "body" }, [
      I(we, { name: "Dialog" }, {
        default: b(() => [
          o.active ? (l(), m("div", {
            key: 0,
            ref_key: "el",
            ref: e,
            class: f([o.$style.Dialog, "dodo-fonts"])
          }, [
            h("div", {
              class: f(o.$style.window)
            }, [
              I(u(q), { padding: "4" }, {
                default: b(() => [
                  $(o.$slots, "default")
                ]),
                _: 3
              }),
              I(u(te), {
                padding: "4",
                justify: "end",
                gap: "2"
              }, {
                default: b(() => [
                  $(o.$slots, "controls")
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
}, xt = /* @__PURE__ */ E(Jt, [["__cssModules", Yt]]), eo = /* @__PURE__ */ z({
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
    const e = d, o = _(!1), n = _(""), r = _(), p = _();
    Q(
      () => e.modelValue,
      () => {
        s(!!e.modelValue);
      },
      { immediate: !0 }
    ), x(() => {
      s(!1);
    });
    function s(k) {
      o.value !== k && (e.disabled && k || (o.value = k, t("update:modelValue", k), k ? _e().then(() => {
        A(), window.addEventListener("click", w, { passive: !0, capture: !0 }), window.addEventListener("scroll", v, { passive: !0, capture: !0 }), window.addEventListener("resize", v);
      }) : (window.removeEventListener("click", w, { capture: !0 }), window.removeEventListener("scroll", v, { capture: !0 }), window.removeEventListener("resize", v))));
    }
    function y(k) {
      e.trigger !== "hover" && (s(!o.value), k.preventDefault());
    }
    function i() {
      e.trigger === "hover" && s(!0);
    }
    function c(k) {
      var j, O;
      if (!o.value || e.trigger !== "hover")
        return;
      const N = k.relatedTarget, H = (j = p.value) == null ? void 0 : j.contains(N), D = (O = r.value) == null ? void 0 : O.contains(N);
      H || D || s(!1);
    }
    function w(k) {
      var N, H;
      if (k.target) {
        const D = (N = p.value) == null ? void 0 : N.contains(k.target), j = (H = r.value) == null ? void 0 : H.contains(k.target);
        if (D || j)
          return;
      }
      s(!1);
    }
    function v() {
      s(!1);
    }
    function A() {
      const N = r.value;
      if (!N)
        return;
      const H = N.scrollWidth, D = p.value.getBoundingClientRect(), j = window.innerWidth, O = window.innerHeight, Y = D.bottom + 300 + 16 > O, Z = Math.max(16, Math.min(D.left, j - H - 16)), C = Math.min(600, j - 16 * 2);
      let a = `left: ${Z}px; max-width:${C}px;`;
      Y ? a += `bottom: ${O - D.top}px; max-height: ${D.top - 16}px;` : a += `top: ${D.bottom}px; max-height: ${O - D.bottom - 16}px;`, n.value = a, o.value && requestAnimationFrame(A);
    }
    return re(Me, { toggle: s }), (k, N) => (l(), m(R, null, [
      h("div", oe({
        ref_key: "el",
        ref: p,
        class: [k.$style.trigger, k.disabled && k.$style.disabled]
      }, k.$attrs, {
        onClick: y,
        onMouseover: i,
        onMouseleave: c
      }), [
        $(k.$slots, "default", { isActive: o.value })
      ], 16),
      o.value ? (l(), m("div", {
        key: 0,
        class: f([k.$style.container, "dodo-fonts"]),
        style: J(n.value)
      }, [
        h("div", {
          ref_key: "content",
          ref: r,
          class: f(k.$style.content),
          onMouseleave: c
        }, [
          I(u(q), {
            padding: k.padding ?? "2",
            gap: k.gap ?? "2"
          }, {
            default: b(() => [
              $(k.$slots, "dropdown", { toggle: s })
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
}, ce = /* @__PURE__ */ E(eo, [["__cssModules", ao]]), ro = {
  key: 0,
  class: "dodo-nowrap dodo-fade-secondary"
}, io = /* @__PURE__ */ z({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    emphasize: { type: Boolean },
    separator: { type: Boolean }
  },
  setup(d) {
    const t = se(Me);
    async function e() {
      await (t == null ? void 0 : t.toggle(!1));
    }
    return (o, n) => (l(), m(R, null, [
      o.separator ? (l(), m("hr", {
        key: 0,
        class: f(o.$style.separator)
      }, null, 2)) : M("", !0),
      h("div", oe(o.$attrs, {
        class: [o.$style.DropdownItem, o.active && o.$style.active, o.emphasize && o.$style.emphasize],
        onClick: e
      }), [
        $(o.$slots, "before"),
        I(u(q), {
          gap: "0",
          style: { flex: "1" }
        }, {
          default: b(() => [
            h("p", {
              class: f([o.$style.text, "dodo-nowrap"])
            }, [
              $(o.$slots, "default")
            ], 2),
            o.$slots["text-secondary"] ? (l(), m("p", ro, [
              $(o.$slots, "text-secondary")
            ])) : M("", !0)
          ]),
          _: 3
        }),
        $(o.$slots, "after")
      ], 16)
    ], 64));
  }
}), co = "dodo-dropdownitem", uo = "dodo-dropdownitem-active", po = "dodo-dropdownitem-emphasize", vo = "dodo-dropdownitem-text", mo = "dodo-dropdownitem-separator", fo = {
  DropdownItem: co,
  active: uo,
  emphasize: po,
  text: vo,
  separator: mo
}, yo = {
  $style: fo
}, $o = /* @__PURE__ */ E(io, [["__cssModules", yo]]), ho = /* @__PURE__ */ z({
  __name: "Field",
  props: {
    disabled: { type: Boolean },
    button: { type: Boolean }
  },
  setup(d) {
    return (t, e) => (l(), m("div", {
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
}), go = "dodo-field", bo = "dodo-field-button", wo = "dodo-field-inner", ko = "dodo-field-disabled", _o = {
  Field: go,
  button: bo,
  inner: wo,
  disabled: ko
}, Co = {
  $style: _o
}, Ie = /* @__PURE__ */ E(ho, [["__cssModules", Co]]), Mo = /* @__PURE__ */ z({
  __name: "FluidGrid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean },
    alignItems: {}
  },
  setup(d) {
    const t = d, e = X(), o = _(), n = _(99999);
    let r = null;
    const p = new ResizeObserver(() => {
      r && clearTimeout(r), r = setTimeout(() => {
        n.value = o.value.clientWidth;
      }, 50);
    });
    ee(() => {
      p.observe(o.value);
    }), Fe(() => {
      p.disconnect();
    });
    const s = S(() => t.columnSize >= n.value), y = S(() => {
      let i = `--fluidgrid-size:${t.columnSize}px;`;
      return t.autoFill && (i += "--fluidgrid-mode:auto-fill;"), t.gap && (i += `gap:${e.gapValue(t.gap)};`), t.padding && (i += `padding:${e.gapValue(t.padding)};`), i;
    });
    return (i, c) => (l(), m("div", {
      ref_key: "el",
      ref: o,
      class: f([i.$style.FluidGrid, s.value && i.$style.oneColumn]),
      style: J(y.value)
    }, [
      $(i.$slots, "default")
    ], 6));
  }
}), So = "dodo-fluidgrid", Bo = "dodo-fluidgrid-onecolumn", Vo = {
  FluidGrid: So,
  oneColumn: Bo
}, Io = {
  $style: Vo
}, da = /* @__PURE__ */ E(Mo, [["__cssModules", Io]]), zo = /* @__PURE__ */ z({
  __name: "Grid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean }
  },
  setup(d) {
    const t = X();
    return (e, o) => (l(), m("div", {
      class: f([
        e.$style.component,
        e.$style[`col-${e.columnSize}`],
        e.autoFill && e.$style.autoFill,
        u(t).gap(e.gap),
        u(t).padding(e.padding)
      ])
    }, [
      $(e.$slots, "default")
    ], 2));
  }
}), To = "dodo-grid-component", Eo = "dodo-grid-autofill", Ao = {
  component: To,
  autoFill: Eo,
  "col-xs": "dodo-grid-col-xs",
  "col-s": "dodo-grid-col-s",
  "col-m": "dodo-grid-col-m",
  "col-l": "dodo-grid-col-l"
}, No = {
  $style: Ao
}, ca = /* @__PURE__ */ E(zo, [["__cssModules", No]]), ae = "Outlined", ge = "300", Fo = /* @__PURE__ */ z({
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
    const t = d, e = X(), o = _(), n = lt({
      weight: ge,
      name: `Material Symbols ${ae}`,
      href: `https://fonts.googleapis.com/css2?family=Material+Symbols+${ae}:wght,FILL@${ge},0..1`
    });
    return (r, p) => (l(), m("span", {
      ref_key: "el",
      ref: o,
      style: J([r.color ? `color: ${u(e).colorCss(r.color)};` : "", u(n).isReady ? "" : "visibility:hidden"]),
      class: f([
        r.$style.icon,
        "material-symbols-" + ae.toLowerCase(),
        t.size && r.$style[t.size],
        t.fill && r.$style.fill
      ])
    }, T(r.name), 7));
  }
}), Do = "dodo-icon", Lo = "dodo-icon-fill", Ro = "dodo-icon-xs", Ho = "dodo-icon-s", Oo = "dodo-icon-l", jo = "dodo-icon-xl", Po = {
  icon: Do,
  fill: Lo,
  xs: Ro,
  s: Ho,
  l: Oo,
  xl: jo
}, qo = {
  $style: Po
}, W = /* @__PURE__ */ E(Fo, [["__cssModules", qo]]), Wo = ["id", "value", "placeholder", "disabled", "maxlength", "type", "name", "autofocus"], ua = /* @__PURE__ */ z({
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
    const e = _(null);
    function o() {
      t("update:modelValue", e.value.value);
    }
    return (n, r) => (l(), m("input", {
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
    }, null, 40, Wo));
  }
});
const Uo = ["for"], Go = { class: "dodo-label-text" }, Ko = {
  key: 0,
  class: "dodo-color-danger"
}, Jo = {
  key: 1,
  class: "dodo-fade-secondary"
}, pa = /* @__PURE__ */ z({
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
    return (e, o) => (l(), m("label", {
      class: f(["dodo-label", e.error && "dodo-label--error"]),
      for: t.for
    }, [
      h("span", Go, T(e.text), 1),
      $(e.$slots, "default"),
      e.error ? (l(), m("small", Ko, T(e.error), 1)) : e.hint ? (l(), m("small", Jo, T(e.hint), 1)) : M("", !0)
    ], 10, Uo));
  }
});
const Zo = /* @__PURE__ */ z({
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
    const t = d, e = ie(), o = _(), n = _(!1);
    ee(() => {
      n.value = !!o.value.closest("[data-mobile-nav]");
    });
    const r = se(Ce), p = S(() => r == null ? void 0 : r.collapsed.value), s = S(() => r == null ? void 0 : r.renderMobile.value), y = S(() => s.value || !p.value);
    async function i(c) {
      r && !e.submenu && (r.mobileToggle.value = !1), t.link && await t.link.navigate();
    }
    return (c, w) => (l(), V(u(ue), {
      text: c.text,
      disabled: y.value,
      side: "right"
    }, {
      default: b(() => [
        (l(), V(le(c.$slots.submenu ? u(ce) : "div"), null, {
          dropdown: b(() => [
            $(c.$slots, "submenu")
          ]),
          default: b(() => {
            var v;
            return [
              h("div", {
                ref_key: "el",
                ref: o,
                class: f([
                  c.$style.NavBarItem,
                  (c.active || ((v = c.link) == null ? void 0 : v.isActive.value)) && c.$style.active,
                  c.important && c.$style.important,
                  p.value && c.$style.collapsed
                ]),
                onClick: i
              }, [
                c.icon || c.$slots.icon ? (l(), m("div", {
                  key: 0,
                  class: f(c.$style.icon)
                }, [
                  $(c.$slots, "icon", {}, () => [
                    I(u(W), {
                      name: c.icon
                    }, null, 8, ["name"])
                  ])
                ], 2)) : M("", !0),
                h("div", {
                  class: f(c.$style.textwrap)
                }, [
                  h("p", {
                    class: f([c.$style.text, "dodo-nowrap"]),
                    color: "background"
                  }, T(c.text), 3),
                  c.textSecondary ? (l(), m("p", {
                    key: 0,
                    class: f([c.$style.secondary, "dodo-nowrap"]),
                    color: "background"
                  }, T(c.textSecondary), 3)) : M("", !0)
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
}, be = /* @__PURE__ */ E(Zo, [["__cssModules", ns]]), ls = ["onClick"], as = { style: { "margin-right": "8px" } }, rs = /* @__PURE__ */ z({
  __name: "NavBar",
  props: {
    mobile: { type: Boolean }
  },
  setup(d) {
    const t = d, { screenLarge: e } = Se(), o = nt("NavBar-collapse", null), n = _(!1), r = S(() => t.mobile || !e.value);
    re(Ce, { collapsed: o, renderMobile: r, mobileToggle: n });
    function p() {
      r.value && (n.value = !1);
    }
    return (s, y) => (l(), m("div", {
      class: f([
        s.$style.root,
        u(o) && s.$style.collapsed,
        n.value && s.$style.mobileToggle,
        r.value && s.$style.mobileMenu
      ]),
      onClick: ne(p, ["self"])
    }, [
      n.value ? (l(), m("div", {
        key: 0,
        class: f(s.$style.backdrop),
        onClick: y[0] || (y[0] = (i) => n.value = !1)
      }, null, 2)) : M("", !0),
      h("div", {
        class: f(s.$style.NavBar)
      }, [
        s.$slots["navbar-header"] ? (l(), m("div", {
          key: 0,
          class: f(s.$style.header)
        }, [
          h("div", null, [
            $(s.$slots, "navbar-header")
          ]),
          h("div", as, [
            r.value ? (l(), V(u(G), {
              key: 0,
              variant: "text",
              square: "",
              color: "background",
              onClick: y[1] || (y[1] = (i) => n.value = !1)
            }, {
              default: b(() => [
                I(u(W), { name: "close" })
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
        s.$slots["navbar-footer"] ? (l(), m("div", {
          key: 1,
          class: f(s.$style.footer)
        }, [
          $(s.$slots, "navbar-footer"),
          r.value ? M("", !0) : (l(), V(be, {
            key: 0,
            text: u(o) ? "Expand" : "Collapse",
            icon: u(o) ? "last_page" : "first_page",
            onClick: y[2] || (y[2] = (i) => o.value = !u(o))
          }, null, 8, ["text", "icon"]))
        ], 2)) : M("", !0)
      ], 2),
      h("div", {
        class: f(s.$style.wrapMobile)
      }, [
        s.$slots.main ? (l(), V(u(q), {
          key: 0,
          class: f(s.$style.main)
        }, {
          default: b(() => [
            $(s.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : M("", !0),
        r.value ? (l(), m("div", {
          key: 1,
          class: f(s.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          $(s.$slots, "default", { inMobileBar: !0 }),
          $(s.$slots, "navbar-footer", { inMobileBar: !0 }),
          I(be, {
            text: "Menu",
            icon: "menu",
            onClick: y[3] || (y[3] = (i) => n.value = !n.value)
          })
        ], 2)) : M("", !0)
      ], 2)
    ], 10, ls));
  }
}), is = "dodo-navbar-root", ds = "dodo-navbar", cs = "dodo-navbar-collapsed", us = "dodo-navbar-header", ps = "dodo-navbar-middle", vs = "dodo-navbar-footer", ms = "dodo-navbar-wrapmobile", fs = "dodo-navbar-main", ys = "dodo-navbar-backdrop", $s = "dodo-navbar-mobilemenu", hs = "dodo-navbar-mobiletoggle", gs = "dodo-navbar-mobilenav", bs = {
  root: is,
  NavBar: ds,
  collapsed: cs,
  header: us,
  middle: ps,
  footer: vs,
  wrapMobile: ms,
  main: fs,
  backdrop: ys,
  mobileMenu: $s,
  mobileToggle: hs,
  mobileNav: gs
}, ws = {
  $style: bs
}, va = /* @__PURE__ */ E(rs, [["__cssModules", ws]]), ks = ["onClick"], ze = rt(() => {
  const d = _([]), t = _(""), e = _([]), o = _(!1);
  return Q(d, () => {
    o.value = !1;
  }), { headerText: t, activeItems: d, expandedMenu: e, mobileToggle: o };
}), _s = (d) => {
  const t = ze.injectOptional(), e = De(), o = (i) => i ? [i.uid, ...o(i.parent)] : [], n = (i) => {
    !i || !t || (t.activeItems.value = o(e), t.headerText.value = d.text.value);
  }, r = S(() => t == null ? void 0 : t.headerText.value), p = () => {
    !e || !t || (t.expandedMenu.value.includes(e.uid) ? t.expandedMenu.value = [] : t.expandedMenu.value = o(e));
  }, s = S(() => !e || !t ? !1 : t.activeItems.value.includes(e.uid)), y = S(() => !e || !t ? !1 : t.expandedMenu.value.length ? t.expandedMenu.value.includes(e.uid) : t.activeItems.value.includes(e.uid));
  return Q(d.active, () => n(d.active.value), { immediate: !0 }), x(() => n(!1)), U(() => {
    r.value && (document.title = r.value);
  }), { showAsActive: s, isExpanded: y, toggleExpand: p, headerText: r };
}, Cs = /* @__PURE__ */ z({
  __name: "NavBarNew",
  setup(d) {
    const { headerText: t, mobileToggle: e } = ze.createAndProvide(), { screenLarge: o } = Se(), n = S(() => !o.value);
    function r() {
      e.value = !1;
    }
    return (p, s) => (l(), m("div", {
      class: f([p.$style.root, u(e) && p.$style.mobileToggle, n.value && p.$style.mobileMenu]),
      onClick: ne(r, ["self"])
    }, [
      u(e) ? (l(), m("div", {
        key: 0,
        class: f(p.$style.backdrop),
        onClick: s[0] || (s[0] = (y) => e.value = !1)
      }, null, 2)) : M("", !0),
      h("div", {
        class: f(p.$style.NavBar)
      }, [
        h("div", {
          class: f(p.$style.middle)
        }, [
          $(p.$slots, "default")
        ], 2),
        p.$slots["navbar-footer"] ? (l(), m("div", {
          key: 0,
          class: f(p.$style.footer)
        }, [
          $(p.$slots, "navbar-footer")
        ], 2)) : M("", !0)
      ], 2),
      h("div", {
        class: f(p.$style.wrapMobile)
      }, [
        n.value ? (l(), m("div", {
          key: 0,
          class: f(p.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          h("h5", null, T(u(t)), 1),
          I(u(ue), { text: "Toggle menu" }, {
            default: b(() => [
              h("div", {
                class: f(p.$style.menuButton)
              }, [
                I(u(W), {
                  name: "menu",
                  onClick: s[1] || (s[1] = (y) => e.value = !u(e))
                })
              ], 2)
            ]),
            _: 1
          })
        ], 2)) : M("", !0),
        p.$slots.main ? (l(), V(u(q), {
          key: 1,
          class: f(p.$style.main)
        }, {
          default: b(() => [
            $(p.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : M("", !0)
      ], 2)
    ], 10, ks));
  }
}), Ms = "dodo-navbarnew-root", Ss = "dodo-navbarnew-navbar", Bs = "dodo-navbarnew-middle", Vs = "dodo-navbarnew-footer", Is = "dodo-navbarnew-wrapmobile", zs = "dodo-navbarnew-main", Ts = "dodo-navbarnew-backdrop", Es = "dodo-navbarnew-menubutton", As = "dodo-navbarnew-mobilemenu", Ns = "dodo-navbarnew-mobiletoggle", Fs = "dodo-navbarnew-mobilenav", Ds = {
  root: Ms,
  NavBar: Ss,
  middle: Bs,
  footer: Vs,
  wrapMobile: Is,
  main: zs,
  backdrop: Ts,
  menuButton: Es,
  mobileMenu: As,
  mobileToggle: Ns,
  mobileNav: Fs
}, Ls = {
  $style: Ds
}, ma = /* @__PURE__ */ E(Cs, [["__cssModules", Ls]]), Rs = ["href"], Hs = { key: 0 }, Os = /* @__PURE__ */ z({
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
    const t = d, e = S(() => t.link ? u(t.link.isActive) : !1), o = S(() => t.text), { isExpanded: n, showAsActive: r, toggleExpand: p } = _s({ text: o, active: e }), s = ie();
    async function y(i) {
      s.submenu && p(), t.link && (await t.link.navigate(), i.preventDefault());
    }
    return (i, c) => (l(), m("div", {
      class: f([i.$style.el])
    }, [
      I(u(ue), {
        text: i.tooltipText,
        side: "right"
      }, {
        default: b(() => {
          var w;
          return [
            h("a", {
              class: f([i.$style.link, u(r) && i.$style.active, i.important && i.$style.important]),
              href: u((w = i.link) == null ? void 0 : w.href),
              onClick: y
            }, [
              h("div", {
                class: f(i.$style.icon)
              }, [
                $(i.$slots, "icon", {}, () => [
                  i.icon ? (l(), V(u(W), {
                    key: 0,
                    name: i.icon
                  }, null, 8, ["name"])) : M("", !0)
                ])
              ], 2),
              h("div", {
                class: f(i.$style.textwrap)
              }, [
                h("p", {
                  class: f([i.$style.text, "dodo-nowrap"])
                }, T(o.value), 3),
                i.textSecondary ? (l(), m("p", {
                  key: 0,
                  class: f([i.$style.secondary, "dodo-nowrap"])
                }, T(i.textSecondary), 3)) : M("", !0)
              ], 2),
              u(s).submenu ? (l(), m("div", Hs, [
                I(u(W), {
                  name: u(n) ? "expand_less" : "expand_more",
                  size: "s",
                  style: { margin: "0 -0.25em" }
                }, null, 8, ["name"])
              ])) : M("", !0)
            ], 10, Rs)
          ];
        }),
        _: 3
      }, 8, ["text"]),
      i.$slots.submenu ? (l(), m("div", {
        key: 0,
        class: f([i.$style.submenu, u(n) && i.$style.expanded])
      }, [
        $(i.$slots, "submenu")
      ], 2)) : M("", !0)
    ], 2));
  }
}), js = "dodo-navitem-el", Ps = "dodo-navitem-link", qs = "dodo-navitem-submenu", Ws = "dodo-navitem-expanded", Us = "dodo-navitem-active", Gs = "dodo-navitem-important", Ks = "dodo-navitem-textwrap", Js = "dodo-navitem-icon", Zs = "dodo-navitem-text", Qs = "dodo-navitem-secondary", Xs = {
  el: js,
  link: Ps,
  submenu: qs,
  expanded: Ws,
  active: Us,
  important: Gs,
  textwrap: Ks,
  icon: Js,
  text: Zs,
  secondary: Qs
}, Ys = {
  $style: Xs
}, fa = /* @__PURE__ */ E(Os, [["__cssModules", Ys]]), xs = /* @__PURE__ */ z({
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
    const t = X();
    return (e, o) => (l(), m("div", {
      class: f([
        e.$style.el,
        u(t).gap(e.gap),
        u(t).padding(e.padding),
        u(t).align(e.align),
        u(t).justify(e.justify),
        u(t).wrap(e.wrap),
        u(t).grow(e.grow)
      ])
    }, [
      $(e.$slots, "default")
    ], 2));
  }
}), en = "dodo-row-el", tn = {
  el: en
}, on = {
  $style: tn
}, te = /* @__PURE__ */ E(xs, [["__cssModules", on]]), sn = /* @__PURE__ */ z({
  __name: "ScrollContainer",
  setup(d) {
    const t = S(() => "");
    return (e, o) => (l(), m("div", {
      class: f([e.$style.ScrollContainer]),
      style: J(t.value)
    }, [
      $(e.$slots, "default")
    ], 6));
  }
}), nn = "dodo-scrollcontainer", ln = {
  ScrollContainer: nn
}, an = {
  $style: ln
}, rn = /* @__PURE__ */ E(sn, [["__cssModules", an]]), dn = {
  key: 0,
  class: "dodo-nowrap"
}, cn = {
  key: 1,
  class: "dodo-nowrap dodo-fade-secondary"
}, un = ["disabled"], pn = 12, vn = /* @__PURE__ */ z({
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
    const e = d, o = S(() => (e.multiple ? [e.modelValue].flat() : [e.modelValue]).filter(H)), n = _(!1), r = _(""), p = _(), s = _(), y = _(), i = _();
    U(() => {
      n.value && p.value && (r.value = "", p.value.focus());
    }), U(() => {
      r.value && s.value && s.value.$el.querySelector("input").focus();
    }), U(() => {
      n.value && setTimeout(() => {
        var g;
        const C = (g = y.value) == null ? void 0 : g.$el, a = C == null ? void 0 : C.querySelector("[data-selectactive]");
        a == null || a.scrollIntoView({ block: "center" });
      }, 0);
    });
    const c = _(!1), w = S(() => e.options.length > pn), v = S(() => w.value && !c.value ? 6 : e.options.length), A = S(() => r.value || e.options.length >= 10), k = S(() => {
      const C = r.value.toLowerCase(), a = e.options.filter((L) => `${L.value}|${L.label}`.toLowerCase().includes(C));
      if (!e.multiple)
        return a;
      const g = a.filter((L) => o.value.find((P) => j(L, P))), B = a.filter((L) => !g.includes(L));
      return g.concat(B);
    }), N = S(() => e.placeholder ? e.placeholder : e.multiple ? "Select one or more" : "Select one");
    function H(C) {
      return e.options.find((a) => j(a, C));
    }
    function D(C) {
      let a = C.value;
      e.multiple && (o.value.includes(a) ? a = o.value.filter((g) => !j(C, g)) : a = o.value.concat(C.value)), t("update:modelValue", a);
    }
    function j(C, a) {
      return C.value === a;
    }
    function O(C) {
      return C.label || `${C.value}`;
    }
    function Y(C) {
      return o.value.some((a) => j(C, a));
    }
    function Z(C) {
      var B, L;
      const a = (B = i.value) == null ? void 0 : B.$el.contains(C.target), g = (L = y.value) == null ? void 0 : L.$el.contains(C.target);
      n.value = a || g;
    }
    return ee(() => {
      document.addEventListener("focusin", Z);
    }), x(() => {
      document.removeEventListener("focusin", Z);
    }), (C, a) => C.variant === "buttons" ? (l(), V(u(te), {
      key: 0,
      gap: "1",
      wrap: ""
    }, {
      default: b(() => [
        (l(!0), m(R, null, K(C.options.slice(0, v.value), (g, B) => (l(), V(u(G), {
          key: O(g),
          color: Y(g) ? "info" : void 0,
          active: Y(g),
          variant: Y(g) && !C.multiple ? "solid" : void 0,
          disabled: C.disabled,
          small: C.size === "s",
          rounded: "",
          onClick: (L) => D(g)
        }, {
          default: b(() => [
            C.multiple && Y(g) ? (l(), V(u(W), {
              key: 0,
              name: "check",
              size: "s",
              style: { margin: "-2px" }
            })) : M("", !0),
            $(C.$slots, "default", {
              option: g,
              index: B
            }, () => [
              F(T(O(g)), 1)
            ])
          ]),
          _: 2
        }, 1032, ["color", "active", "variant", "disabled", "small", "onClick"]))), 128)),
        w.value ? (l(), m(R, { key: 0 }, [
          c.value ? (l(), V(u(G), {
            key: 0,
            small: C.size === "s",
            variant: "text",
            rounded: "",
            onClick: a[0] || (a[0] = (g) => c.value = !c.value)
          }, {
            default: b(() => [
              F(" Less "),
              I(u(W), {
                name: "expand_less",
                size: "s",
                style: { margin: "-2px" }
              })
            ]),
            _: 1
          }, 8, ["small"])) : (l(), V(u(G), {
            key: 1,
            small: C.size === "s",
            variant: "text",
            rounded: "",
            onClick: a[1] || (a[1] = (g) => c.value = !c.value)
          }, {
            default: b(() => [
              F(T(C.options.length - v.value) + " more ", 1),
              I(u(W), {
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
    })) : (l(), V(u(ce), {
      key: 1,
      modelValue: n.value,
      "onUpdate:modelValue": a[5] || (a[5] = (g) => n.value = g),
      disabled: C.disabled
    }, {
      dropdown: b(() => [
        I(u(q), {
          ref_key: "dropdownEl",
          ref: y,
          style: { "min-height": "0" },
          gap: "0",
          onMousedown: a[4] || (a[4] = ne(() => {
          }, ["stop", "prevent"]))
        }, {
          default: b(() => [
            fe(I(u(te), {
              padding: "2",
              class: f(C.$style.searchbox)
            }, {
              default: b(() => [
                I(u(Hl), {
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
              [Le, A.value]
            ]),
            I(u(rn), null, {
              default: b(() => [
                (l(!0), m(R, null, K(k.value, (g, B) => (l(), V(u($o), {
                  key: `${g.value}`,
                  "data-selectactive": o.value.includes(g.value) ? "true" : void 0,
                  active: o.value.includes(g.value),
                  onClick: (L) => D(g)
                }, {
                  default: b(() => [
                    $(C.$slots, "default", {
                      index: B,
                      option: g
                    }, () => [
                      F(T(O(g)), 1)
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
        I(u(Ie), {
          ref_key: "fieldEl",
          ref: i,
          button: "",
          disabled: C.disabled
        }, {
          after: b(() => [
            I(u(W), { name: "arrow_drop_down" })
          ]),
          default: b(() => [
            o.value.length ? (l(), m("p", dn, [
              (l(!0), m(R, null, K(o.value, (g, B) => (l(), m(R, null, [
                B ? (l(), m(R, { key: 0 }, [
                  F(", ")
                ], 64)) : M("", !0),
                H(g) ? $(C.$slots, "default", {
                  key: 1,
                  index: C.options.indexOf(H(g)),
                  option: H(g)
                }, () => [
                  F(T(O(H(g))), 1)
                ]) : (l(), m(R, { key: 2 }, [
                  F(T(g), 1)
                ], 64))
              ], 64))), 256))
            ])) : (l(), m("p", cn, T(N.value), 1)),
            fe(h("input", {
              ref_key: "hiddenInput",
              ref: p,
              "onUpdate:modelValue": a[2] || (a[2] = (g) => r.value = g),
              style: { position: "fixed", "pointer-events": "none", opacity: "0" },
              disabled: C.disabled
            }, null, 8, un), [
              [Re, r.value]
            ])
          ]),
          _: 3
        }, 8, ["disabled"])
      ]),
      _: 3
    }, 8, ["modelValue", "disabled"]));
  }
}), mn = "dodo-select-searchbox", fn = {
  searchbox: mn
}, yn = {
  $style: fn
}, ya = /* @__PURE__ */ E(vn, [["__cssModules", yn]]), $n = /* @__PURE__ */ z({
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
    const e = d, o = S(() => e.multiple ? [e.modelValue].flat() : [e.modelValue]);
    function n(s, y) {
      return s.value === y;
    }
    function r(s) {
      return o.value.some((y) => n(s, y));
    }
    function p(s) {
      let y = s.value;
      r(s) && e.multiple ? y = o.value.filter((c) => !n(s, c)) : e.multiple && (y = [...o.value, s.value]), t("update:modelValue", y);
    }
    return (s, y) => (l(), m("div", {
      class: f([s.$style.Select, s.multiple && s.$style.multiple])
    }, [
      (l(!0), m(R, null, K(s.options, (i, c) => (l(), V(u(G), oe({
        key: i.label
      }, r(i) ? { active: !0, color: "info" } : {}, {
        disabled: s.disabled,
        small: s.small,
        rounded: "",
        onClick: (w) => p(i)
      }), {
        default: b(() => [
          $(s.$slots, "default", {
            option: i,
            index: c
          }, () => [
            F(T(i.label || i.value), 1)
          ])
        ]),
        _: 2
      }, 1040, ["disabled", "small", "onClick"]))), 128))
    ], 2));
  }
}), hn = "dodo-selectbuttons-select", gn = "dodo-selectbuttons-multiple", bn = {
  Select: hn,
  multiple: gn
}, wn = {
  $style: bn
}, $a = /* @__PURE__ */ E($n, [["__cssModules", wn]]), kn = {
  key: 0,
  viewBox: "0 0 48 48"
}, _n = /* @__PURE__ */ de('<clipPath id="g"><path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path></clipPath><g clip-path="url(#g)"><path fill="#FBBC05" d="M0 37V11l17 13z"></path><path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path><path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path><path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path></g>', 2), Cn = [
  _n
], Mn = {
  key: 1,
  viewBox: "0 0 248 204"
}, Sn = /* @__PURE__ */ h("path", {
  id: "white_background",
  fill: "#1D9BF0",
  d: "M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
}, null, -1), Bn = [
  Sn
], Vn = {
  key: 2,
  viewBox: "60 60 140 140"
}, In = /* @__PURE__ */ de('<path fill="#E01E5A" d="M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"></path><path fill="#E01E5A" d="M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9V151.2z"></path><path fill="#36C5F0" d="M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"></path><path fill="#36C5F0" d="M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9H118.8z"></path><path fill="#2EB67D" d="M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"></path><path fill="#2EB67D" d="M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9V118.8z"></path><path fill="#ECB22E" d="M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"></path><path fill="#ECB22E" d="M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9H151.2z"></path>', 8), zn = [
  In
], Tn = {
  key: 3,
  viewBox: "2 2 46 46"
}, En = /* @__PURE__ */ h("path", { d: "M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" }, null, -1), An = [
  En
], Nn = {
  key: 4,
  viewBox: "0 0 14222 14222"
}, Fn = /* @__PURE__ */ h("circle", {
  cx: "7111",
  cy: "7112",
  r: "7111",
  fill: "#1977f3"
}, null, -1), Dn = /* @__PURE__ */ h("path", {
  d: "M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z",
  fill: "#fff"
}, null, -1), Ln = [
  Fn,
  Dn
], Rn = {
  key: 5,
  viewBox: "0 0 24 24"
}, Hn = /* @__PURE__ */ h("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }, null, -1), On = [
  Hn
], jn = {
  key: 6,
  viewBox: "6 6 36 36"
}, Pn = /* @__PURE__ */ h("path", {
  fill: "#0288D1",
  d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
}, null, -1), qn = /* @__PURE__ */ h("path", {
  fill: "#FFF",
  d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
}, null, -1), Wn = [
  Pn,
  qn
], Un = {
  key: 7,
  viewBox: "10 10 160 160"
}, Gn = /* @__PURE__ */ de('<defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"></stop><stop offset="1" stop-color="#23b33a"></stop></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531"></feGaussianBlur></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"></path><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"></path><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"></path><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"></path><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"></path>', 6), Kn = [
  Gn
], Jn = /* @__PURE__ */ z({
  __name: "SocialIcon",
  props: {
    name: {},
    white: { type: Boolean },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(d) {
    return (t, e) => (l(), m("span", {
      class: f([t.$style.SocialIcon, t.small && t.$style.small, t.large && t.$style.large, t.white && t.$style.white])
    }, [
      t.name === "google" ? (l(), m("svg", kn, Cn)) : t.name === "twitter" ? (l(), m("svg", Mn, Bn)) : t.name === "slack" ? (l(), m("svg", Vn, zn)) : t.white && t.name === "facebook" ? (l(), m("svg", Tn, An)) : t.name === "facebook" ? (l(), m("svg", Nn, Ln)) : t.white && t.name === "linkedin" ? (l(), m("svg", Rn, On)) : t.name === "linkedin" ? (l(), m("svg", jn, Wn)) : t.name === "whatsapp" ? (l(), m("svg", Un, Kn)) : M("", !0)
    ], 2));
  }
}), Zn = "dodo-socialicon", Qn = "dodo-socialicon-white", Xn = "dodo-socialicon-small", Yn = "dodo-socialicon-large", xn = {
  SocialIcon: Zn,
  white: Qn,
  small: Xn,
  large: Yn
}, el = {
  $style: xn
}, ha = /* @__PURE__ */ E(Jn, [["__cssModules", el]]), tl = /* @__PURE__ */ h("path", {
  stroke: "currentColor",
  fill: "none",
  d: "M 9 1 A 8 8 0 0 1 17 9",
  "stroke-width": "2"
}, null, -1), ol = /* @__PURE__ */ h("path", {
  stroke: "currentColor",
  opacity: "0.33",
  fill: "none",
  d: "M 17 9 A 8 8 0 1 1 9 1",
  "stroke-width": "2"
}, null, -1), sl = [
  tl,
  ol
], nl = /* @__PURE__ */ z({
  __name: "Spinner",
  props: {
    color: { default: void 0 },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(d) {
    const t = d, e = X(), o = S(() => {
      let n = "";
      return t.color === "inherit" ? n += "color:inherit;" : t.color && (n += `color:${e.colorCss(t.color)};`), n;
    });
    return (n, r) => (l(), m("div", {
      class: f([n.$style.Spinner, n.small && n.$style.small, n.large && n.$style.large])
    }, [
      (l(), m("svg", {
        style: J(o.value),
        viewBox: "0 0 18 18"
      }, sl, 4))
    ], 2));
  }
}), ll = "dodo-spinner", al = "dodo-spinner-small", rl = "dodo-spinner-large", il = {
  Spinner: ll,
  small: al,
  large: rl
}, dl = {
  $style: il
}, cl = /* @__PURE__ */ E(nl, [["__cssModules", dl]]), ul = { key: 1 }, pl = { key: 0 }, vl = {
  key: 1,
  class: "dodo-fade-secondary"
}, ml = {
  key: 0,
  class: "dodo-fade-secondary"
}, fl = /* @__PURE__ */ h("br", null, null, -1), yl = /* @__PURE__ */ z({
  __name: "Stepper",
  props: {
    stepIndex: {},
    steps: {},
    submit: { type: Function },
    completed: {}
  },
  emits: ["update:stepIndex", "submit"],
  setup(d, { emit: t }) {
    const e = d, o = _(0), n = S(() => e.steps[o.value]);
    function r() {
      o.value--;
    }
    async function p() {
      const s = n.value;
      if (s.filled !== !1 && !(s.validate && !await s.validate())) {
        if (o.value === e.steps.length - 1) {
          await e.submit();
          return;
        }
        o.value++;
      }
    }
    return U(() => {
      e.stepIndex != null && (o.value = e.stepIndex);
    }), Q(o, () => {
      t("update:stepIndex", o.value);
    }), (s, y) => (l(), V(u(q), {
      class: f(s.$style.stepper)
    }, {
      default: b(() => [
        (l(!0), m(R, null, K(s.steps, (i, c) => (l(), V(u(te), {
          key: i.key,
          align: "stretch",
          gap: "4",
          class: f(c > o.value && s.$style.inactiveStep)
        }, {
          default: b(() => [
            I(u(q), { align: "center" }, {
              default: b(() => [
                h("div", {
                  class: f([s.$style.circle])
                }, [
                  o.value > c ? (l(), V(u(W), {
                    key: 0,
                    name: "check"
                  })) : (l(), m("h3", ul, T(c + 1), 1))
                ], 2),
                c < s.steps.length - 1 ? (l(), m("div", {
                  key: 0,
                  class: f(s.$style.line)
                }, null, 2)) : M("", !0)
              ]),
              _: 2
            }, 1024),
            I(u(q), { grow: "" }, {
              default: b(() => [
                I(u(q), { gap: "1" }, {
                  default: b(() => [
                    h("h3", null, [
                      i === n.value ? (l(), m("span", pl, T(i.name), 1)) : (l(), m("span", vl, T(i.name), 1))
                    ]),
                    i.hint ? (l(), m("p", ml, T(i.hint), 1)) : M("", !0)
                  ]),
                  _: 2
                }, 1024),
                i === n.value ? (l(), V(u(q), { key: 0 }, {
                  default: b(() => [
                    $(s.$slots, i.slot),
                    I(u(te), null, {
                      default: b(() => [
                        o.value < s.steps.length - 1 ? (l(), V(u(G), {
                          key: 0,
                          disabled: i.filled === !1,
                          color: "primary",
                          variant: "solid",
                          onClick: p
                        }, {
                          default: b(() => [
                            $(s.$slots, "continue-button-text", {}, () => [
                              F("Continue")
                            ])
                          ]),
                          _: 2
                        }, 1032, ["disabled"])) : (l(), V(u(G), {
                          key: 1,
                          color: "primary",
                          variant: "solid",
                          onClick: p
                        }, {
                          default: b(() => [
                            $(s.$slots, "submit-button-text", {}, () => [
                              F("Submit")
                            ])
                          ]),
                          _: 3
                        })),
                        o.value > 0 ? (l(), V(u(G), {
                          key: 2,
                          variant: "text",
                          onClick: r
                        }, {
                          default: b(() => [
                            F(" Back ")
                          ]),
                          _: 1
                        })) : M("", !0)
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
}), $l = "dodo-stepper", hl = "dodo-stepper-line", gl = "dodo-stepper-circle", bl = "dodo-stepper-inactivestep", wl = {
  stepper: $l,
  line: hl,
  circle: gl,
  inactiveStep: bl
}, kl = {
  $style: wl
}, ga = /* @__PURE__ */ E(yl, [["__cssModules", kl]]), _l = ["onClick"], Cl = ["onClick"], Ml = /* @__PURE__ */ h("hr", null, null, -1), Sl = /* @__PURE__ */ z({
  __name: "Tabs",
  props: {
    tabs: {},
    tabIndex: {}
  },
  emits: ["update:tabIndex"],
  setup(d, { emit: t }) {
    const e = d, o = _(), n = _(""), r = S(() => e.tabs.find((v) => w(v) === n.value)), p = _(99), s = S(() => e.tabs.slice(0, p.value)), y = S(() => e.tabs.slice(p.value)), i = _();
    U(() => {
      !r.value && e.tabs.length && (n.value = w(e.tabs[0]));
    }), ee(() => {
      c(), i.value = setInterval(c, 100);
    }), x(() => {
      clearInterval(i.value);
    });
    function c() {
      var N;
      const A = ((N = o.value) == null ? void 0 : N.clientWidth) || 1e3, k = Math.max(1, Math.floor(A / 60));
      p.value = k;
    }
    Q(
      () => e.tabIndex,
      () => {
        e.tabIndex != null && e.tabs[e.tabIndex] && (n.value = w(e.tabs[e.tabIndex]));
      },
      { immediate: !0 }
    ), Q(
      () => r.value,
      () => {
        r.value && t("update:tabIndex", e.tabs.indexOf(r.value));
      },
      { immediate: !0 }
    );
    function w(v) {
      return v.slot ?? v.name;
    }
    return (v, A) => (l(), V(u(q), {
      gap: "4",
      style: { "min-width": "0" }
    }, {
      default: b(() => [
        I(u(q), { gap: "0" }, {
          default: b(() => [
            h("div", {
              class: f(v.$style.bar)
            }, [
              h("div", {
                ref_key: "tabsDiv",
                ref: o,
                class: f([v.$style.tabs])
              }, [
                (l(!0), m(R, null, K(s.value, (k, N) => (l(), m("div", {
                  key: w(k),
                  class: f([v.$style.tab, n.value === w(k) && v.$style.active, k.disabled && v.$style.disabled]),
                  onClick: (H) => n.value = w(k)
                }, [
                  h("h5", {
                    class: f(v.$style.tabName)
                  }, [
                    $(v.$slots, "tab-title", {
                      i: N,
                      tab: k
                    }, () => [
                      F(T(k.name), 1)
                    ])
                  ], 2)
                ], 10, _l))), 128))
              ], 2),
              I(u(ce), null, {
                default: b(() => [
                  y.value.length > 0 ? (l(), V(u(G), {
                    key: 0,
                    class: f([v.$style.arrow]),
                    variant: "text",
                    small: ""
                  }, {
                    default: b(() => [
                      I(u(W), {
                        name: "more_horiz",
                        size: "l"
                      })
                    ]),
                    _: 1
                  }, 8, ["class"])) : M("", !0)
                ]),
                dropdown: b(() => [
                  (l(!0), m(R, null, K(y.value, (k, N) => (l(), m("p", {
                    key: w(k),
                    onClick: (H) => n.value = w(k)
                  }, [
                    $(v.$slots, "tab-title", {
                      i: N,
                      tab: k
                    }, () => [
                      F(T(k.name), 1)
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
        r.value ? $(v.$slots, r.value.slot ?? "default", {
          key: 0,
          tab: r.value
        }) : M("", !0)
      ]),
      _: 3
    }));
  }
}), Bl = "dodo-tabs-bar", Vl = "dodo-tabs", Il = "dodo-tabs-tab", zl = "dodo-tabs-tabname", Tl = "dodo-tabs-active", El = "dodo-tabs-disabled", Al = {
  bar: Bl,
  tabs: Vl,
  tab: Il,
  tabName: zl,
  active: Tl,
  disabled: El
}, Nl = {
  $style: Al
}, ba = /* @__PURE__ */ E(Sl, [["__cssModules", Nl]]), Fl = /* @__PURE__ */ z({
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
    const e = d, o = _();
    function n() {
      o.value.focus();
    }
    function r() {
      t("update:modelValue", o.value.value);
    }
    return U(() => {
      e.autofocus && o.value && o.value.focus();
    }), (p, s) => (l(), V(u(Ie), {
      class: f([p.$style.TextInput]),
      disabled: p.disabled,
      onClick: n
    }, {
      before: b(() => [
        $(p.$slots, "before")
      ]),
      after: b(() => [
        $(p.$slots, "after")
      ]),
      default: b(() => [
        (l(), V(le(p.rows && p.rows > 1 ? "textarea" : "input"), {
          id: p.id,
          ref_key: "el",
          ref: o,
          value: p.modelValue,
          class: f(p.$style.input),
          placeholder: p.placeholder,
          disabled: p.disabled,
          rows: p.rows,
          maxlength: p.maxlength,
          type: p.type,
          name: p.name,
          "tab-index": p.tabIndex,
          autofocus: p.autofocus,
          onInput: r
        }, null, 40, ["id", "value", "class", "placeholder", "disabled", "rows", "maxlength", "type", "name", "tab-index", "autofocus"]))
      ]),
      _: 3
    }, 8, ["class", "disabled"]));
  }
}), Dl = "dodo-textinput", Ll = {
  TextInput: Dl
}, Rl = {
  $style: Ll
}, Hl = /* @__PURE__ */ E(Fl, [["__cssModules", Rl]]), Ol = /* @__PURE__ */ z({
  __name: "Tooltip",
  props: {
    text: {},
    disabled: { type: Boolean },
    side: {}
  },
  setup(d) {
    const t = d, e = _(!1), o = _(""), n = _(), r = _(), p = ie(), s = S(() => t.disabled || !(t.text || p["tooltip-text"]));
    x(i);
    async function y() {
      if (e.value || s.value)
        return;
      e.value = !0, await _e();
      const c = n.value.getBoundingClientRect(), w = r.value.getBoundingClientRect();
      t.side, c.bottom + w.height < window.innerHeight;
      let v = (c.right + c.left - w.width) / 2, A = c.bottom;
      t.side === "right" ? (v = c.right, A = (c.bottom + c.top - w.height) / 2) : t.side === "top" ? (v = (c.left + c.right - w.width) / 2, A = c.top - w.height) : t.side === "left" && (v = c.left - w.width, A = (c.bottom + c.top - w.height) / 2), A = Math.round(Math.max(Math.min(A, window.innerHeight - w.height), 0)), v = Math.round(Math.max(Math.min(v, window.innerWidth - w.width), 0)), o.value = `left:${v}px;top:${A}px`;
    }
    function i() {
      e.value = !1;
    }
    return (c, w) => (l(), m("div", {
      ref_key: "trigger",
      ref: n,
      class: f(c.$style.trigger),
      onMouseover: y,
      onMouseleave: i
    }, [
      $(c.$slots, "default"),
      e.value ? (l(), V(ke, {
        key: 0,
        to: "body"
      }, [
        h("div", {
          ref_key: "tooltip",
          ref: r,
          class: f(c.$style.Tooltip),
          style: J(o.value)
        }, [
          h("div", {
            class: f(c.$style.content)
          }, [
            h("small", {
              class: f(c.$style.text)
            }, [
              $(c.$slots, "tooltip-text", {}, () => [
                F(T(c.text), 1)
              ])
            ], 2)
          ], 2)
        ], 6)
      ])) : M("", !0)
    ], 34));
  }
}), jl = "dodo-tooltip", Pl = "dodo-tooltip-content", ql = "dodo-tooltip-text", Wl = "dodo-tooltip-trigger", Ul = {
  Tooltip: jl,
  content: Pl,
  text: ql,
  trigger: Wl
}, Gl = {
  $style: Ul
}, ue = /* @__PURE__ */ E(Ol, [["__cssModules", Gl]]);
export {
  Ql as Animated,
  Xl as Avatar,
  G as Button,
  Yl as Card,
  $e as Checkbox,
  aa as Chip,
  q as Column,
  ra as CrashDialog,
  ia as Datatable,
  xt as Dialog,
  ce as Dropdown,
  $o as DropdownItem,
  Ie as Field,
  da as FluidGrid,
  ca as Grid,
  W as Icon,
  ua as Input,
  pa as Label,
  va as NavBar,
  be as NavBarItem,
  ma as NavBarNew,
  fa as NavItem,
  te as Row,
  rn as ScrollContainer,
  ya as Select,
  $a as SelectButtons,
  ha as SocialIcon,
  cl as Spinner,
  ga as Stepper,
  ba as Tabs,
  Hl as TextInput,
  ue as Tooltip,
  na as ValidationError,
  ta as crashPlugin,
  Be as crashServiceKey,
  Me as dropdownServiceKey,
  Ce as navBarServiceKey,
  ea as parseColor,
  sa as useBaseFont,
  at as useCrashService,
  xl as useElementSize,
  oa as useResizeObserver,
  Se as useScreenSize,
  rt as useServiceFactory,
  nt as useSessionStoredRef,
  X as useTheme,
  la as useValidation,
  lt as useWebFont
};
