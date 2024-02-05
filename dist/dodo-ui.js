var ze = Object.defineProperty;
var Te = (i, t, e) => t in i ? ze(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var ve = (i, t, e) => (Te(i, typeof t != "symbol" ? t + "" : t, e), e);
import { defineComponent as T, openBlock as l, createBlock as V, TransitionGroup as Ee, withCtx as w, renderSlot as $, Transition as we, computed as S, createElementBlock as m, normalizeClass as f, normalizeStyle as K, Fragment as L, createTextVNode as F, toDisplayString as E, createCommentVNode as M, useAttrs as Ae, ref as _, mergeProps as se, unref as u, createElementVNode as h, onMounted as ee, watchEffect as P, onBeforeUnmount as x, watch as Q, inject as ae, provide as re, reactive as me, withModifiers as oe, createVNode as I, resolveDynamicComponent as ne, renderList as G, Teleport as ke, nextTick as _e, onUnmounted as Ne, useSlots as ie, getCurrentInstance as Fe, withDirectives as fe, vShow as De, vModelText as Le, createStaticVNode as de } from "vue";
const ye = !1, Yl = /* @__PURE__ */ T({
  __name: "Animated",
  props: {
    list: { type: Boolean },
    appear: { type: Boolean }
  },
  setup(i) {
    return (t, e) => t.list ? (l(), V(Ee, {
      key: 0,
      name: "dodo",
      appear: t.appear,
      css: !ye
    }, {
      default: w(() => [
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
      default: w(() => [
        $(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"]));
  }
});
const Re = /* @__PURE__ */ T({
  __name: "Avatar",
  props: {
    text: {},
    image: {},
    round: { type: Boolean }
  },
  setup(i) {
    const t = i, e = ["info", "warn", "success", "danger"], o = X(), n = S(() => {
      let s = t.text.trim();
      const y = /\b\w|[A-Z]/g, c = t.text.match(y);
      return c != null && c.length && (s = c.join("")), s.slice(0, 2).toUpperCase();
    }), a = S(() => {
      const s = e.length, y = p(t.text), c = e[y % s];
      return o.colorCss(c);
    });
    function p(s) {
      let y = 0;
      for (let c = 0; c < s.length; ++c)
        y = 997 * (y % 1e6) + 11 * s.charCodeAt(c);
      return y;
    }
    return (s, y) => (l(), m("span", {
      class: f([s.$style.Avatar, s.round && s.$style.round]),
      style: K([`--color:${a.value}`, s.image ? `background-image:url(${s.image})` : ""])
    }, [
      s.image ? M("", !0) : (l(), m(L, { key: 0 }, [
        F(E(n.value), 1)
      ], 64))
    ], 6));
  }
}), He = "dodo-avatar", Oe = "dodo-avatar-round", je = {
  Avatar: He,
  round: Oe
}, A = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [o, n] of t)
    e[o] = n;
  return e;
}, qe = {
  $style: je
}, xl = /* @__PURE__ */ A(Re, [["__cssModules", qe]]), We = ["disabled", "type"], Pe = /* @__PURE__ */ T({
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
    const t = i, { colorCss: e } = X(), o = S(() => {
      let s = "";
      return t.color && (s += `--button-color:${e(t.color)};`), s;
    }), n = Ae(), a = _(!1);
    async function p(s) {
      if (!a.value && typeof n.onClick == "function") {
        const y = n.onClick(s);
        y instanceof Promise && (a.value = !0, await y.finally(() => {
          a.value = !1;
        }));
      }
    }
    return (s, y) => (l(), m("button", se({
      style: o.value,
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
    }, { ...u(n), onClick: p }), [
      h("div", {
        class: f(s.$style.content)
      }, [
        $(s.$slots, "default")
      ], 2),
      a.value ? (l(), V(u(cl), {
        key: 0,
        small: s.small,
        class: f(s.$style.spinner),
        color: "inherit"
      }, null, 8, ["small", "class"])) : M("", !0)
    ], 16, We));
  }
}), Ue = "dodo-button", Ge = "dodo-button-content", Ke = "dodo-button-solid", Je = "dodo-button-rounded", Ze = "dodo-button-text", Qe = "dodo-button-loading", Xe = "dodo-button-spinner", Ye = "dodo-button-active", xe = "dodo-button-small", et = "dodo-button-square", tt = {
  Button: Ue,
  content: Ge,
  solid: Ke,
  default: "dodo-button-default",
  rounded: Je,
  text: Ze,
  loading: Qe,
  spinner: Xe,
  active: Ye,
  small: xe,
  square: et
}, ot = {
  $style: tt
}, U = /* @__PURE__ */ A(Pe, [["__cssModules", ot]]), ea = /* @__PURE__ */ T({
  __name: "Card",
  props: {
    hoverable: { type: Boolean },
    active: { type: Boolean },
    gap: {},
    padding: {}
  },
  setup(i) {
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
const Ce = Symbol("NavBarService"), st = Symbol("DropdownService");
function ta(i) {
  const t = _(0), e = _(0), o = new ResizeObserver(n);
  function n() {
    var a, p;
    t.value = ((a = i.value) == null ? void 0 : a.clientWidth) ?? 0, e.value = ((p = i.value) == null ? void 0 : p.clientHeight) ?? 0;
  }
  return ee(n), P(() => {
    o.disconnect(), i.value && o.observe(i.value), n();
  }), x(() => {
    o.disconnect();
  }), { width: t, height: e, observer: o };
}
function Me() {
  const e = _(window.innerWidth), o = _(window.innerHeight), n = S(() => e.value < 600), a = S(() => e.value >= 600 && e.value < 1200), p = S(() => e.value >= 1200);
  function s() {
    e.value = window.innerWidth, o.value = window.innerHeight;
  }
  return ee(() => {
    window.addEventListener("resize", s, { passive: !0 });
  }), x(() => {
    window.removeEventListener("resize", s);
  }), {
    screenSmall: n,
    screenMedium: a,
    screenLarge: p
  };
}
function nt(i, t) {
  const e = _(t), o = sessionStorage.getItem(i);
  return o && (e.value = JSON.parse(o)), Q(e, (n) => {
    sessionStorage.setItem(i, JSON.stringify(n));
  }), e;
}
function lt(i) {
  const t = _(!1);
  return ee(async () => {
    const e = `font-${i.name}-${i.weight}`;
    let o = document.getElementById(e);
    o || (o = document.createElement("link"), o.setAttribute("href", i.href), o.setAttribute("rel", "stylesheet"), o.setAttribute("id", e), document.head.appendChild(o)), await document.fonts.ready, t.value = document.fonts.check(`${i.weight} 1em ${i.name}`);
  }), { isReady: t };
}
function oa(i) {
  if (!i.match(/^#\w{6}$/))
    throw new Error("Invalid hex color");
  return i.match(/(\w\w)/g).map((t) => parseInt(t, 16)).slice(0, 3);
}
const Se = Symbol(Be.name);
function Be(i) {
  const t = _(null), e = _(0), o = 1e3;
  function n() {
    t.value = null, e.value = Date.now() + o;
  }
  function a() {
    location.reload();
  }
  function p(s) {
    i.onError && i.onError(s) === !1 || !t.value && e.value < Date.now() && (console.error(s), t.value = s);
  }
  return { ignoreError: n, reloadPage: a, currentError: t, handleCrash: p };
}
function sa(i) {
  return (t) => {
    var n;
    const e = Be(i);
    t.provide(Se, e);
    const { errorHandler: o } = t.config;
    t.config.errorHandler = (a, p, s) => {
      if (e.handleCrash(a), o)
        return o(a, p, s);
    }, (n = i.router) == null || n.onError((a) => {
      e.handleCrash(a);
    }), window.addEventListener("unhandledrejection", (a) => {
      e.handleCrash(a.reason);
    }), window.addEventListener("error", (a) => {
      e.handleCrash(a.error ?? a.message);
    });
  };
}
function at() {
  return ae(Se);
}
function na(i, t) {
  if (typeof ResizeObserver > "u")
    return {};
  const e = new ResizeObserver(() => t(i.value));
  return P(() => {
    i.value && e.observe(i.value);
  }), x(() => {
    e.disconnect();
  }), { observer: e };
}
function rt(i) {
  const t = Symbol("ServiceKey");
  return { createAndProvide: () => {
    const n = i();
    return re(t, n), n;
  }, injectOptional: () => ae(t, void 0) };
}
function X() {
  function i(v) {
    return typeof v == "string" ? `var(--dodo-color-${v})` : `rgb(${v.join(",")})`;
  }
  function t(v) {
    if (v instanceof Array)
      return v;
    const g = getComputedStyle(document.body).getPropertyValue(`--dodo-rgb-${v}`);
    return g ? g.split(",").map(Number) : [0, 0, 0];
  }
  function e(v) {
    return "#" + t(v).map((C) => C.toString(16).padStart(2, "0")).join("");
  }
  function o(v) {
    return `var(--dodo-gap-${v})`;
  }
  function n(v) {
    return v ? `dodo-gap-${v}` : "";
  }
  function a(v) {
    return v ? `dodo-pad-${v}` : "";
  }
  function p(v) {
    return v ? `dodo-justify-${v}` : "";
  }
  function s(v) {
    return v ? `dodo-align-${v}` : "";
  }
  function y(v) {
    return v ? "dodo-wrap" : "";
  }
  function c(v) {
    return v ? "dodo-flex" : "";
  }
  function d(v) {
    return v ? "dodo-grow" : "";
  }
  return {
    colorCss: i,
    gapValue: o,
    colorHexStr: e,
    colorRgbValues: t,
    gap: n,
    padding: a,
    justify: p,
    align: s,
    wrap: y,
    flex: c,
    grow: d
  };
}
class la extends Error {
  constructor(e, o) {
    super(o);
    ve(this, "name", "ValidationError");
    this.field = e;
  }
}
function aa(i) {
  const t = me(i), e = me({});
  Q(t, () => a());
  async function o(c) {
    const d = t[c];
    if (d) {
      const v = d.value, g = await s(c, v);
      if (g)
        return e[c] = String(g), !1;
    }
    return delete e[c], !0;
  }
  async function n(...c) {
    const d = c.length ? c : Object.keys(t);
    return (await Promise.all(d.map((g) => o(g)))).every((g) => g);
  }
  async function a() {
    return (await Promise.all(Object.keys(e).map((d) => o(d)))).every((d) => d);
  }
  function p() {
    for (const c in e)
      delete e[c];
  }
  async function s(c, d) {
    const v = t[c], g = v.name ?? y(c);
    if (v.required && !d)
      return `${g} is required`;
    if (v.isEmail && d != null && (typeof d != "string" || !d.includes("@")))
      return `${g} is not valid`;
    if (typeof d == "string") {
      if (v.minLen != null && d.length < v.minLen)
        return `${g} must be at least ${v.minLen} characters`;
      if (v.maxLen != null && d.length > v.maxLen)
        return `${g} must be less than ${v.maxLen} characters`;
    }
    if (v.validators)
      for (const C of v.validators) {
        const z = await C(d, g);
        if (z)
          return z;
      }
  }
  function y(c) {
    return c.toString().replace(/_/g, " ").replace(/^./, (d) => d.toUpperCase()).replace(/[a-z][A-Z]/g, (d) => `${d[0]} ${d[1]}`);
  }
  return { errors: e, rules: t, validate: n, clearErrors: p };
}
const it = ["onClick"], dt = ["checked"], ct = /* @__PURE__ */ T({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean },
    indeterminate: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(i, { emit: t }) {
    const e = i;
    function o() {
      t("update:modelValue", e.indeterminate || !e.modelValue);
    }
    function n(a) {
      a.target.checked !== e.modelValue && o();
    }
    return (a, p) => (l(), m("span", {
      class: f([a.$style.Checkbox, a.modelValue && a.$style.checked]),
      onClick: oe(o, ["stop"])
    }, [
      I(u(W), {
        name: a.indeterminate ? "indeterminate_check_box" : a.modelValue ? "check_box" : "check_box_outline_blank"
      }, null, 8, ["name"]),
      $(a.$slots, "default"),
      h("input", {
        type: "checkbox",
        checked: a.modelValue,
        onChange: n
      }, null, 40, dt)
    ], 10, it));
  }
}), ut = "dodo-checkbox", pt = "dodo-checkbox-checked", vt = {
  Checkbox: ut,
  checked: pt
}, mt = {
  $style: vt
}, $e = /* @__PURE__ */ A(ct, [["__cssModules", mt]]), ft = /* @__PURE__ */ T({
  __name: "Chip",
  props: {
    color: {}
  },
  setup(i) {
    const t = i, e = X(), o = S(() => {
      let n = "";
      return t.color && (n += `--chip-color:${e.colorCss(t.color)};`), n;
    });
    return (n, a) => (l(), V(ne(n.$attrs.onClick ? "button" : "div"), {
      class: f(n.$style.Chip),
      style: K(o.value)
    }, {
      default: w(() => [
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
}, ra = /* @__PURE__ */ A(ft, [["__cssModules", gt]]), bt = /* @__PURE__ */ T({
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
    const t = X();
    return (e, o) => (l(), V(ne(e.tag ?? "div"), {
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
      default: w(() => [
        $(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), wt = "dodo-column-el", kt = {
  el: wt
}, _t = {
  $style: kt
}, q = /* @__PURE__ */ A(bt, [["__cssModules", _t]]), Ct = /* @__PURE__ */ h("h3", null, "Something went wrong", -1), he = `
  An unexpected error occurred and the application may not function correctly until the page is reloaded.
  Any unsaved changes will be lost if you choose to reload the page.
`, ia = /* @__PURE__ */ T({
  __name: "CrashDialog",
  setup(i) {
    const t = at(), e = S(() => t.currentError.value), o = _(!1);
    return P(() => {
      o.value = !!e.value;
    }), (n, a) => (l(), V(u(xt), { active: o.value }, {
      controls: w(() => [
        I(u(U), {
          variant: "text",
          onClick: u(t).ignoreError
        }, {
          default: w(() => [
            F("Ignore")
          ]),
          _: 1
        }, 8, ["onClick"]),
        I(u(U), {
          variant: "solid",
          color: "info",
          onClick: u(t).reloadPage
        }, {
          default: w(() => [
            F("Reload page")
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: w(() => [
        Ct,
        $(n.$slots, "body", {
          error: e.value,
          defaultText: he
        }, () => [
          h("p", null, E(he))
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
], Tt = { colspan: "999" }, Et = { key: 0 }, At = /* @__PURE__ */ T({
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
  setup(i, { emit: t }) {
    const e = i, o = _(), n = _([]), a = _(!1);
    P(() => {
      o.value = e.sortValue;
    }), P(() => {
      n.value = e.selection ?? [];
    }), Q(o, (r) => {
      t("update:sortValue", r);
    }), Q(n, (r) => {
      t("update:selection", r);
    });
    const p = S(() => {
      var r;
      return (r = o.value) == null ? void 0 : r.startsWith("-");
    }), s = S(() => e.columns.filter((r) => !r.disabled)), y = S(() => !!e.selection), c = S(() => {
      const r = s.value.find(v);
      return e.sortAsync || !r ? e.rows : e.rows.slice().sort((b, B) => {
        const D = J(r, b), j = J(r, B), pe = typeof D == "number" && typeof j == "number" ? j - D : `${j}`.localeCompare(`${D}`);
        return p.value ? pe : -pe;
      });
    });
    function d(r) {
      if (v(r))
        return p.value ? "arrow_drop_up" : "arrow_drop_down";
    }
    function v(r) {
      var b;
      return ((b = o.value) == null ? void 0 : b.replace("-", "")) === r.sort;
    }
    function g(r) {
      return r.slot || r.name.trim().replace(/\W/g, "");
    }
    function C(r) {
      return !!r.sort;
    }
    function z(r) {
      return r.align ? `text-align:${r.align}` : "";
    }
    function R(r) {
      return r.width ? `width:${r.width}` : "";
    }
    async function N(r) {
      C(r) && (v(r) ? o.value = p.value ? void 0 : "-" + r.sort : o.value = r.sort, e.sortAsync && (a.value = !0, await e.sortAsync(o.value).finally(() => {
        a.value = !1;
      })));
    }
    function H(r) {
      return e.selectBy ? r[e.selectBy] : r;
    }
    function O(r) {
      const b = H(r);
      n.value.includes(b) ? n.value = n.value.filter((B) => B !== b) : n.value = n.value.concat(b);
    }
    function J(r, b) {
      return typeof r.value == "function" ? r.value(b) : typeof r.value == "string" ? b[r.value] : "";
    }
    function Y(r) {
      if (!y.value)
        return !1;
      const b = H(r);
      return n.value.includes(b);
    }
    const Z = S(() => y.value ? e.rows.filter((r) => n.value.includes(H(r))) : []);
    function k() {
      const r = Z.value.length === e.rows.length;
      n.value = r ? [] : e.rows.map(H);
    }
    return (r, b) => (l(), m("div", {
      class: f([r.$style.Datatable, r.contentLoading && r.$style.loading])
    }, [
      h("table", null, [
        h("tbody", null, [
          h("tr", {
            class: f(r.stickyHeader && r.$style.stickyHeader)
          }, [
            y.value ? (l(), m("th", Mt, [
              I(u($e), {
                indeterminate: Z.value.length > 0 && Z.value.length < r.rows.length,
                "model-value": Z.value.length > 0 && Z.value.length === r.rows.length,
                "onUpdate:modelValue": k
              }, null, 8, ["indeterminate", "model-value"])
            ])) : M("", !0),
            (l(!0), m(L, null, G(s.value, (B) => (l(), m("th", {
              key: B.name,
              scope: "col",
              class: f([C(B) ? r.$style.sortable : "", v(B) && r.$style.sortActive]),
              style: K([z(B), R(B)]),
              onClick: (D) => N(B)
            }, [
              h("span", {
                class: f(r.$style.colName)
              }, [
                h("span", null, [
                  $(r.$slots, `${g(B)}-header`, { column: B }, () => [
                    F(E(B.name), 1)
                  ])
                ]),
                d(B) ? (l(), V(u(W), {
                  key: 0,
                  name: d(B),
                  class: f(r.$style.sortIcon)
                }, null, 8, ["name", "class"])) : M("", !0)
              ], 2)
            ], 14, St))), 128))
          ], 2),
          (l(!0), m(L, null, G(c.value, (B, D) => (l(), m("tr", {
            key: D,
            class: f([r.rowClick && r.$style.clickableRow, Y(B) && r.$style.rowSelected]),
            onClick: (j) => r.rowClick && r.rowClick(B)
          }, [
            y.value ? (l(), m("td", Vt, [
              I(u($e), {
                "model-value": Y(B),
                "onUpdate:modelValue": (j) => O(B)
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ])) : M("", !0),
            (l(!0), m(L, null, G(s.value, (j) => (l(), m("td", {
              key: j.name,
              class: f([]),
              style: K(z(j))
            }, [
              $(r.$slots, g(j), {
                row: B,
                column: j
              }, () => [
                F(E(J(j, B)), 1)
              ])
            ], 4))), 128))
          ], 10, Bt))), 128)),
          r.rows.length ? M("", !0) : (l(), m("tr", {
            key: 0,
            class: f(r.$style.noResults)
          }, zt, 2)),
          r.rows.length && r.showMore ? (l(), m("tr", {
            key: 1,
            class: f(r.$style.showMore)
          }, [
            h("td", Tt, [
              I(u(U), {
                variant: "text",
                color: "info",
                onClick: r.showMore
              }, {
                default: w(() => [
                  F("Show more results")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ], 2)) : M("", !0),
          r.showFooter ? (l(), m("tr", {
            key: 2,
            class: f([r.$style.footer, r.stickyHeader && r.$style.stickyFooter])
          }, [
            y.value ? (l(), m("td", Et)) : M("", !0),
            (l(!0), m(L, null, G(s.value, (B) => (l(), m("th", {
              key: B.name,
              style: K(z(B)),
              scope: "col"
            }, [
              $(r.$slots, `${g(B)}-footer`, { column: B })
            ], 4))), 128))
          ], 2)) : M("", !0)
        ])
      ])
    ], 2));
  }
}), Nt = "dodo-datatable", Ft = "dodo-datatable-colname", Dt = "dodo-datatable-sortable", Lt = "dodo-datatable-sorticon", Rt = "dodo-datatable-sortactive", Ht = "dodo-datatable-noresults", Ot = "dodo-datatable-showmore", jt = "dodo-datatable-clickablerow", qt = "dodo-datatable-rowselected", Wt = "dodo-datatable-stickyheader", Pt = "dodo-datatable-stickyfooter", Ut = "dodo-datatable-loading", Gt = {
  Datatable: Nt,
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
}, da = /* @__PURE__ */ A(At, [["__cssModules", Kt]]), Jt = /* @__PURE__ */ T({
  __name: "Dialog",
  props: {
    active: { type: Boolean }
  },
  setup(i) {
    const t = i, e = _();
    return P(() => {
      t.active && e.value && e.value.parentNode.appendChild(e.value);
    }), (o, n) => (l(), V(ke, { to: "body" }, [
      I(we, { name: "Dialog" }, {
        default: w(() => [
          o.active ? (l(), m("div", {
            key: 0,
            ref_key: "el",
            ref: e,
            class: f([o.$style.Dialog])
          }, [
            h("div", {
              class: f(o.$style.window)
            }, [
              I(u(q), { padding: "4" }, {
                default: w(() => [
                  $(o.$slots, "default")
                ]),
                _: 3
              }),
              I(u(te), {
                padding: "4",
                justify: "end",
                gap: "2"
              }, {
                default: w(() => [
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
  setup(i, { emit: t }) {
    const e = i, o = _(!1), n = _(""), a = _(), p = _();
    Q(
      () => e.modelValue,
      () => {
        s(!!e.modelValue);
      },
      { immediate: !0 }
    ), x(() => {
      s(!1);
    });
    function s(C) {
      o.value !== C && (e.disabled && C || (o.value = C, t("update:modelValue", C), C ? _e().then(() => {
        g(), window.addEventListener("click", v, { passive: !0, capture: !0 });
      }) : window.removeEventListener("click", v, { capture: !0 })));
    }
    function y(C) {
      e.trigger !== "hover" && (s(!o.value), C.preventDefault());
    }
    function c() {
      e.trigger === "hover" && s(!0);
    }
    function d(C) {
      var H, O;
      if (!o.value || e.trigger !== "hover")
        return;
      const z = C.relatedTarget, R = (H = p.value) == null ? void 0 : H.contains(z), N = (O = a.value) == null ? void 0 : O.contains(z);
      R || N || s(!1);
    }
    function v(C) {
      var z, R;
      if (C.target) {
        const N = (z = p.value) == null ? void 0 : z.contains(C.target), H = (R = a.value) == null ? void 0 : R.contains(C.target);
        if (N || H)
          return;
      }
      s(!1);
    }
    function g() {
      const z = a.value;
      if (!z)
        return;
      const R = z.scrollWidth, N = p.value.getBoundingClientRect(), H = window.innerWidth, O = window.innerHeight, J = N.bottom + 300 + 16 > O, Y = Math.max(16, Math.min(N.left, H - R - 16)), Z = Math.min(600, H - 16 * 2);
      let k = `left: ${Y}px; max-width:${Z}px;`;
      J ? k += `bottom: ${O - N.top}px; max-height: ${N.top - 16}px;` : k += `top: ${N.bottom}px; max-height: ${O - N.bottom - 16}px;`, n.value = k, o.value && requestAnimationFrame(g);
    }
    return re(st, { toggle: s }), (C, z) => (l(), m(L, null, [
      h("div", se({
        ref_key: "el",
        ref: p,
        class: [C.$style.trigger, C.disabled && C.$style.disabled]
      }, C.$attrs, {
        onClick: y,
        onMouseover: c,
        onMouseleave: d
      }), [
        $(C.$slots, "default", { isActive: o.value })
      ], 16),
      o.value ? (l(), m("div", {
        key: 0,
        class: f([C.$style.container]),
        style: K(n.value)
      }, [
        h("div", {
          ref_key: "content",
          ref: a,
          class: f(C.$style.content),
          onMouseleave: d
        }, [
          I(u(q), {
            padding: C.padding ?? "2",
            gap: C.gap ?? "2"
          }, {
            default: w(() => [
              $(C.$slots, "dropdown", { toggle: s })
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
}, ce = /* @__PURE__ */ A(eo, [["__cssModules", ao]]), ro = /* @__PURE__ */ T({
  __name: "Field",
  props: {
    disabled: { type: Boolean },
    button: { type: Boolean }
  },
  setup(i) {
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
}), io = "dodo-field", co = "dodo-field-button", uo = "dodo-field-inner", po = "dodo-field-disabled", vo = {
  Field: io,
  button: co,
  inner: uo,
  disabled: po
}, mo = {
  $style: vo
}, Ve = /* @__PURE__ */ A(ro, [["__cssModules", mo]]), fo = /* @__PURE__ */ T({
  __name: "FluidGrid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean },
    alignItems: {}
  },
  setup(i) {
    const t = i, e = X(), o = _(), n = _(99999);
    let a = null;
    const p = new ResizeObserver(() => {
      a && clearTimeout(a), a = setTimeout(() => {
        n.value = o.value.clientWidth;
      }, 50);
    });
    ee(() => {
      p.observe(o.value);
    }), Ne(() => {
      p.disconnect();
    });
    const s = S(() => t.columnSize >= n.value), y = S(() => {
      let c = `--fluidgrid-size:${t.columnSize}px;`;
      return t.autoFill && (c += "--fluidgrid-mode:auto-fill;"), t.gap && (c += `gap:${e.gapValue(t.gap)};`), t.padding && (c += `padding:${e.gapValue(t.padding)};`), c;
    });
    return (c, d) => (l(), m("div", {
      ref_key: "el",
      ref: o,
      class: f([c.$style.FluidGrid, s.value && c.$style.oneColumn]),
      style: K(y.value)
    }, [
      $(c.$slots, "default")
    ], 6));
  }
}), yo = "dodo-fluidgrid", $o = "dodo-fluidgrid-onecolumn", ho = {
  FluidGrid: yo,
  oneColumn: $o
}, go = {
  $style: ho
}, ca = /* @__PURE__ */ A(fo, [["__cssModules", go]]), bo = /* @__PURE__ */ T({
  __name: "Grid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean }
  },
  setup(i) {
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
}), wo = "dodo-grid-component", ko = "dodo-grid-autofill", _o = {
  component: wo,
  autoFill: ko,
  "col-xs": "dodo-grid-col-xs",
  "col-s": "dodo-grid-col-s",
  "col-m": "dodo-grid-col-m",
  "col-l": "dodo-grid-col-l"
}, Co = {
  $style: _o
}, ua = /* @__PURE__ */ A(bo, [["__cssModules", Co]]), le = "Outlined", ge = "300", Mo = /* @__PURE__ */ T({
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
    const t = i, e = X(), o = _(), n = lt({
      weight: ge,
      name: `Material Symbols ${le}`,
      href: `https://fonts.googleapis.com/css2?family=Material+Symbols+${le}:wght,FILL@${ge},0..1`
    });
    return (a, p) => (l(), m("span", {
      ref_key: "el",
      ref: o,
      style: K([a.color ? `color: ${u(e).colorCss(a.color)};` : "", u(n).isReady ? "" : "visibility:hidden"]),
      class: f([
        a.$style.icon,
        "material-symbols-" + le.toLowerCase(),
        t.size && a.$style[t.size],
        t.fill && a.$style.fill
      ])
    }, E(a.name), 7));
  }
}), So = "dodo-icon", Bo = "dodo-icon-fill", Vo = "dodo-icon-xs", Io = "dodo-icon-s", zo = "dodo-icon-l", To = "dodo-icon-xl", Eo = {
  icon: So,
  fill: Bo,
  xs: Vo,
  s: Io,
  l: zo,
  xl: To
}, Ao = {
  $style: Eo
}, W = /* @__PURE__ */ A(Mo, [["__cssModules", Ao]]), No = ["id", "value", "placeholder", "disabled", "maxlength", "type", "name", "autofocus"], pa = /* @__PURE__ */ T({
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
  setup(i, { emit: t }) {
    const e = _(null);
    function o() {
      t("update:modelValue", e.value.value);
    }
    return (n, a) => (l(), m("input", {
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
    }, null, 40, No));
  }
});
const Fo = ["for"], Do = { class: "dodo-label-text" }, Lo = {
  key: 0,
  class: "dodo-color-danger"
}, Ro = {
  key: 1,
  class: "dodo-fade-secondary"
}, va = /* @__PURE__ */ T({
  __name: "Label",
  props: {
    text: {},
    for: {},
    error: {},
    hint: {},
    required: { type: Boolean }
  },
  setup(i) {
    const t = i;
    return (e, o) => (l(), m("label", {
      class: f(["dodo-label", e.error && "dodo-label--error"]),
      for: t.for
    }, [
      h("span", Do, E(e.text), 1),
      $(e.$slots, "default"),
      e.error ? (l(), m("small", Lo, E(e.error), 1)) : e.hint ? (l(), m("small", Ro, E(e.hint), 1)) : M("", !0)
    ], 10, Fo));
  }
});
const Ho = {
  key: 0,
  class: "dodo-nowrap dodo-fade-secondary"
}, Oo = /* @__PURE__ */ T({
  __name: "MenuItem",
  props: {
    active: { type: Boolean },
    emphasize: { type: Boolean },
    separator: { type: Boolean }
  },
  setup(i) {
    return (t, e) => (l(), m(L, null, [
      t.separator ? (l(), m("hr", {
        key: 0,
        class: f(t.$style.separator)
      }, null, 2)) : M("", !0),
      h("div", se(t.$attrs, {
        class: [t.$style.DropdownItem, t.active && t.$style.active, t.emphasize && t.$style.emphasize]
      }), [
        $(t.$slots, "before"),
        I(u(q), {
          gap: "0",
          style: { flex: "1" }
        }, {
          default: w(() => [
            h("p", {
              class: f([t.$style.text, "dodo-nowrap"])
            }, [
              $(t.$slots, "default")
            ], 2),
            t.$slots["text-secondary"] ? (l(), m("p", Ho, [
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
  setup(i) {
    const t = i, e = ie(), o = _(), n = _(!1);
    ee(() => {
      n.value = !!o.value.closest("[data-mobile-nav]");
    });
    const a = ae(Ce), p = S(() => a == null ? void 0 : a.collapsed.value), s = S(() => a == null ? void 0 : a.renderMobile.value), y = S(() => s.value || !p.value);
    async function c(d) {
      a && !e.submenu && (a.mobileToggle.value = !1), t.link && await t.link.navigate();
    }
    return (d, v) => (l(), V(u(ue), {
      text: d.text,
      disabled: y.value,
      side: "right"
    }, {
      default: w(() => [
        (l(), V(ne(d.$slots.submenu ? u(ce) : "div"), null, {
          dropdown: w(() => [
            $(d.$slots, "submenu")
          ]),
          default: w(() => {
            var g;
            return [
              h("div", {
                ref_key: "el",
                ref: o,
                class: f([
                  d.$style.NavBarItem,
                  (d.active || ((g = d.link) == null ? void 0 : g.isActive.value)) && d.$style.active,
                  d.important && d.$style.important,
                  p.value && d.$style.collapsed
                ]),
                onClick: c
              }, [
                d.icon || d.$slots.icon ? (l(), m("div", {
                  key: 0,
                  class: f(d.$style.icon)
                }, [
                  $(d.$slots, "icon", {}, () => [
                    I(u(W), {
                      name: d.icon
                    }, null, 8, ["name"])
                  ])
                ], 2)) : M("", !0),
                h("div", {
                  class: f(d.$style.textwrap)
                }, [
                  h("p", {
                    class: f([d.$style.text, "dodo-nowrap"]),
                    color: "background"
                  }, E(d.text), 3),
                  d.textSecondary ? (l(), m("p", {
                    key: 0,
                    class: f([d.$style.secondary, "dodo-nowrap"]),
                    color: "background"
                  }, E(d.textSecondary), 3)) : M("", !0)
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
}, be = /* @__PURE__ */ A(Zo, [["__cssModules", ns]]), ls = ["onClick"], as = { style: { "margin-right": "8px" } }, rs = /* @__PURE__ */ T({
  __name: "NavBar",
  props: {
    mobile: { type: Boolean }
  },
  setup(i) {
    const t = i, { screenLarge: e } = Me(), o = nt("NavBar-collapse", null), n = _(!1), a = S(() => t.mobile || !e.value);
    re(Ce, { collapsed: o, renderMobile: a, mobileToggle: n });
    function p() {
      a.value && (n.value = !1);
    }
    return (s, y) => (l(), m("div", {
      class: f([
        s.$style.root,
        u(o) && s.$style.collapsed,
        n.value && s.$style.mobileToggle,
        a.value && s.$style.mobileMenu
      ]),
      onClick: oe(p, ["self"])
    }, [
      n.value ? (l(), m("div", {
        key: 0,
        class: f(s.$style.backdrop),
        onClick: y[0] || (y[0] = (c) => n.value = !1)
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
            a.value ? (l(), V(u(U), {
              key: 0,
              variant: "text",
              square: "",
              color: "background",
              onClick: y[1] || (y[1] = (c) => n.value = !1)
            }, {
              default: w(() => [
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
          a.value ? M("", !0) : (l(), V(be, {
            key: 0,
            text: u(o) ? "Expand" : "Collapse",
            icon: u(o) ? "last_page" : "first_page",
            onClick: y[2] || (y[2] = (c) => o.value = !u(o))
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
          default: w(() => [
            $(s.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : M("", !0),
        a.value ? (l(), m("div", {
          key: 1,
          class: f(s.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          $(s.$slots, "default", { inMobileBar: !0 }),
          $(s.$slots, "navbar-footer", { inMobileBar: !0 }),
          I(be, {
            text: "Menu",
            icon: "menu",
            onClick: y[3] || (y[3] = (c) => n.value = !n.value)
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
}, ma = /* @__PURE__ */ A(rs, [["__cssModules", ws]]), ks = ["onClick"], Ie = rt(() => {
  const i = _([]), t = _(""), e = _([]), o = _(!1);
  return Q(i, () => {
    o.value = !1;
  }), { headerText: t, activeItems: i, expandedMenu: e, mobileToggle: o };
}), _s = (i) => {
  const t = Ie.injectOptional(), e = Fe(), o = (c) => c ? [c.uid, ...o(c.parent)] : [], n = (c) => {
    !c || !t || (t.activeItems.value = o(e), t.headerText.value = i.text.value);
  }, a = S(() => t == null ? void 0 : t.headerText.value), p = () => {
    !e || !t || (t.expandedMenu.value.includes(e.uid) ? t.expandedMenu.value = [] : t.expandedMenu.value = o(e));
  }, s = S(() => !e || !t ? !1 : t.activeItems.value.includes(e.uid)), y = S(() => !e || !t ? !1 : t.expandedMenu.value.length ? t.expandedMenu.value.includes(e.uid) : t.activeItems.value.includes(e.uid));
  return Q(i.active, () => n(i.active.value), { immediate: !0 }), x(() => n(!1)), P(() => {
    a.value && (document.title = a.value);
  }), { showAsActive: s, isExpanded: y, toggleExpand: p, headerText: a };
}, Cs = /* @__PURE__ */ T({
  __name: "NavBarNew",
  setup(i) {
    const { headerText: t, mobileToggle: e } = Ie.createAndProvide(), { screenLarge: o } = Me(), n = S(() => !o.value);
    function a() {
      e.value = !1;
    }
    return (p, s) => (l(), m("div", {
      class: f([p.$style.root, u(e) && p.$style.mobileToggle, n.value && p.$style.mobileMenu]),
      onClick: oe(a, ["self"])
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
          h("h5", null, E(u(t)), 1),
          I(u(ue), { text: "Toggle menu" }, {
            default: w(() => [
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
          default: w(() => [
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
}, fa = /* @__PURE__ */ A(Cs, [["__cssModules", Ls]]), Rs = ["href"], Hs = { key: 0 }, Os = /* @__PURE__ */ T({
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
    const t = i, e = S(() => t.link ? u(t.link.isActive) : !1), o = S(() => t.text), { isExpanded: n, showAsActive: a, toggleExpand: p } = _s({ text: o, active: e }), s = ie();
    async function y(c) {
      s.submenu && p(), t.link && (await t.link.navigate(), c.preventDefault());
    }
    return (c, d) => (l(), m("div", {
      class: f([c.$style.el])
    }, [
      I(u(ue), {
        text: c.tooltipText,
        side: "right"
      }, {
        default: w(() => {
          var v;
          return [
            h("a", {
              class: f([c.$style.link, u(a) && c.$style.active, c.important && c.$style.important]),
              href: u((v = c.link) == null ? void 0 : v.href),
              onClick: y
            }, [
              h("div", {
                class: f(c.$style.icon)
              }, [
                $(c.$slots, "icon", {}, () => [
                  c.icon ? (l(), V(u(W), {
                    key: 0,
                    name: c.icon
                  }, null, 8, ["name"])) : M("", !0)
                ])
              ], 2),
              h("div", {
                class: f(c.$style.textwrap)
              }, [
                h("p", {
                  class: f([c.$style.text, "dodo-nowrap"])
                }, E(o.value), 3),
                c.textSecondary ? (l(), m("p", {
                  key: 0,
                  class: f([c.$style.secondary, "dodo-nowrap"])
                }, E(c.textSecondary), 3)) : M("", !0)
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
      c.$slots.submenu ? (l(), m("div", {
        key: 0,
        class: f([c.$style.submenu, u(n) && c.$style.expanded])
      }, [
        $(c.$slots, "submenu")
      ], 2)) : M("", !0)
    ], 2));
  }
}), js = "dodo-navitem-el", qs = "dodo-navitem-link", Ws = "dodo-navitem-submenu", Ps = "dodo-navitem-expanded", Us = "dodo-navitem-active", Gs = "dodo-navitem-important", Ks = "dodo-navitem-textwrap", Js = "dodo-navitem-icon", Zs = "dodo-navitem-text", Qs = "dodo-navitem-secondary", Xs = {
  el: js,
  link: qs,
  submenu: Ws,
  expanded: Ps,
  active: Us,
  important: Gs,
  textwrap: Ks,
  icon: Js,
  text: Zs,
  secondary: Qs
}, Ys = {
  $style: Xs
}, ya = /* @__PURE__ */ A(Os, [["__cssModules", Ys]]), xs = /* @__PURE__ */ T({
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
}, te = /* @__PURE__ */ A(xs, [["__cssModules", on]]), sn = /* @__PURE__ */ T({
  __name: "ScrollContainer",
  setup(i) {
    const t = S(() => "");
    return (e, o) => (l(), m("div", {
      class: f([e.$style.ScrollContainer]),
      style: K(t.value)
    }, [
      $(e.$slots, "default")
    ], 6));
  }
}), nn = "dodo-scrollcontainer", ln = {
  ScrollContainer: nn
}, an = {
  $style: ln
}, rn = /* @__PURE__ */ A(sn, [["__cssModules", an]]), dn = {
  key: 0,
  class: "dodo-nowrap"
}, cn = {
  key: 1,
  class: "dodo-nowrap dodo-fade-secondary"
}, un = ["disabled"], pn = 12, vn = /* @__PURE__ */ T({
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
  setup(i, { emit: t }) {
    const e = i, o = S(() => (e.multiple ? [e.modelValue].flat() : [e.modelValue]).filter(N)), n = _(!1), a = _(""), p = _(), s = _(), y = _(), c = _();
    P(() => {
      n.value && p.value && (a.value = "", p.value.focus());
    }), P(() => {
      a.value && s.value && s.value.$el.querySelector("input").focus();
    }), P(() => {
      n.value && setTimeout(() => {
        var b;
        const k = (b = y.value) == null ? void 0 : b.$el, r = k == null ? void 0 : k.querySelector("[data-selectactive]");
        r == null || r.scrollIntoView({ block: "center" });
      }, 0);
    });
    const d = _(!1), v = S(() => e.options.length > pn), g = S(() => v.value && !d.value ? 6 : e.options.length), C = S(() => a.value || e.options.length >= 10), z = S(() => {
      const k = a.value.toLowerCase(), r = e.options.filter((D) => `${D.value}|${D.label}`.toLowerCase().includes(k));
      if (!e.multiple)
        return r;
      const b = r.filter((D) => o.value.find((j) => O(D, j))), B = r.filter((D) => !b.includes(D));
      return b.concat(B);
    }), R = S(() => e.placeholder ? e.placeholder : e.multiple ? "Select one or more" : "Select one");
    function N(k) {
      return e.options.find((r) => O(r, k));
    }
    function H(k) {
      let r = k.value;
      e.multiple ? o.value.includes(r) ? r = o.value.filter((b) => !O(k, b)) : r = o.value.concat(k.value) : n.value = !1, t("update:modelValue", r);
    }
    function O(k, r) {
      return k.value === r;
    }
    function J(k) {
      return k.label || `${k.value}`;
    }
    function Y(k) {
      return o.value.some((r) => O(k, r));
    }
    function Z(k) {
      var B, D;
      const r = (B = c.value) == null ? void 0 : B.$el.contains(k.target), b = (D = y.value) == null ? void 0 : D.$el.contains(k.target);
      n.value = r || b;
    }
    return ee(() => {
      document.addEventListener("focusin", Z);
    }), x(() => {
      document.removeEventListener("focusin", Z);
    }), (k, r) => k.variant === "buttons" ? (l(), V(u(te), {
      key: 0,
      gap: "1",
      wrap: ""
    }, {
      default: w(() => [
        (l(!0), m(L, null, G(k.options.slice(0, g.value), (b, B) => (l(), V(u(U), {
          key: J(b),
          color: Y(b) ? "info" : void 0,
          active: Y(b),
          variant: Y(b) && !k.multiple ? "solid" : void 0,
          disabled: k.disabled,
          small: k.size === "s",
          rounded: "",
          onClick: (D) => H(b)
        }, {
          default: w(() => [
            k.multiple && Y(b) ? (l(), V(u(W), {
              key: 0,
              name: "check",
              size: "s",
              style: { margin: "-2px" }
            })) : M("", !0),
            $(k.$slots, "default", {
              option: b,
              index: B
            }, () => [
              F(E(J(b)), 1)
            ])
          ]),
          _: 2
        }, 1032, ["color", "active", "variant", "disabled", "small", "onClick"]))), 128)),
        v.value ? (l(), m(L, { key: 0 }, [
          d.value ? (l(), V(u(U), {
            key: 0,
            small: k.size === "s",
            variant: "text",
            rounded: "",
            onClick: r[0] || (r[0] = (b) => d.value = !d.value)
          }, {
            default: w(() => [
              F(" Less "),
              I(u(W), {
                name: "expand_less",
                size: "s",
                style: { margin: "-2px" }
              })
            ]),
            _: 1
          }, 8, ["small"])) : (l(), V(u(U), {
            key: 1,
            small: k.size === "s",
            variant: "text",
            rounded: "",
            onClick: r[1] || (r[1] = (b) => d.value = !d.value)
          }, {
            default: w(() => [
              F(E(k.options.length - g.value) + " more ", 1),
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
      "onUpdate:modelValue": r[5] || (r[5] = (b) => n.value = b),
      disabled: k.disabled
    }, {
      dropdown: w(() => [
        I(u(q), {
          ref_key: "dropdownEl",
          ref: y,
          style: { "min-height": "0" },
          gap: "0",
          onMousedown: r[4] || (r[4] = oe(() => {
          }, ["stop", "prevent"]))
        }, {
          default: w(() => [
            fe(I(u(te), {
              padding: "2",
              class: f(k.$style.searchbox)
            }, {
              default: w(() => [
                I(u(jl), {
                  ref_key: "searchEl",
                  ref: s,
                  modelValue: a.value,
                  "onUpdate:modelValue": r[3] || (r[3] = (b) => a.value = b),
                  type: "search",
                  placeholder: "Search",
                  tabindex: "0",
                  style: { "flex-grow": "1" }
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["class"]), [
              [De, C.value]
            ]),
            I(u(rn), null, {
              default: w(() => [
                (l(!0), m(L, null, G(z.value, (b, B) => (l(), V(u(Jo), {
                  key: `${b.value}`,
                  "data-selectactive": o.value.includes(b.value) ? "true" : void 0,
                  active: o.value.includes(b.value),
                  onClick: (D) => H(b)
                }, {
                  default: w(() => [
                    $(k.$slots, "default", {
                      index: B,
                      option: b
                    }, () => [
                      F(E(J(b)), 1)
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
        I(u(Ve), {
          ref_key: "fieldEl",
          ref: c,
          button: "",
          disabled: k.disabled
        }, {
          after: w(() => [
            I(u(W), { name: "arrow_drop_down" })
          ]),
          default: w(() => [
            o.value.length ? (l(), m("p", dn, [
              (l(!0), m(L, null, G(o.value, (b, B) => (l(), m(L, null, [
                B ? (l(), m(L, { key: 0 }, [
                  F(", ")
                ], 64)) : M("", !0),
                N(b) ? $(k.$slots, "default", {
                  key: 1,
                  index: k.options.indexOf(N(b)),
                  option: N(b)
                }, () => [
                  F(E(J(N(b))), 1)
                ]) : (l(), m(L, { key: 2 }, [
                  F(E(b), 1)
                ], 64))
              ], 64))), 256))
            ])) : (l(), m("p", cn, E(R.value), 1)),
            fe(h("input", {
              ref_key: "hiddenInput",
              ref: p,
              "onUpdate:modelValue": r[2] || (r[2] = (b) => a.value = b),
              style: { position: "fixed", "pointer-events": "none", opacity: "0" },
              disabled: k.disabled
            }, null, 8, un), [
              [Le, a.value]
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
}, $a = /* @__PURE__ */ A(vn, [["__cssModules", yn]]), $n = /* @__PURE__ */ T({
  __name: "SelectButtons",
  props: {
    options: {},
    modelValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    small: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(i, { emit: t }) {
    const e = i, o = S(() => e.multiple ? [e.modelValue].flat() : [e.modelValue]);
    function n(s, y) {
      return s.value === y;
    }
    function a(s) {
      return o.value.some((y) => n(s, y));
    }
    function p(s) {
      let y = s.value;
      a(s) && e.multiple ? y = o.value.filter((d) => !n(s, d)) : e.multiple && (y = [...o.value, s.value]), t("update:modelValue", y);
    }
    return (s, y) => (l(), m("div", {
      class: f([s.$style.Select, s.multiple && s.$style.multiple])
    }, [
      (l(!0), m(L, null, G(s.options, (c, d) => (l(), V(u(U), se({
        key: c.label
      }, a(c) ? { active: !0, color: "info" } : {}, {
        disabled: s.disabled,
        small: s.small,
        rounded: "",
        onClick: (v) => p(c)
      }), {
        default: w(() => [
          $(s.$slots, "default", {
            option: c,
            index: d
          }, () => [
            F(E(c.label || c.value), 1)
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
}, ha = /* @__PURE__ */ A($n, [["__cssModules", wn]]), kn = {
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
}, qn = /* @__PURE__ */ h("path", {
  fill: "#0288D1",
  d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
}, null, -1), Wn = /* @__PURE__ */ h("path", {
  fill: "#FFF",
  d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
}, null, -1), Pn = [
  qn,
  Wn
], Un = {
  key: 7,
  viewBox: "10 10 160 160"
}, Gn = /* @__PURE__ */ de('<defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"></stop><stop offset="1" stop-color="#23b33a"></stop></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531"></feGaussianBlur></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"></path><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"></path><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"></path><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"></path><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"></path>', 6), Kn = [
  Gn
], Jn = /* @__PURE__ */ T({
  __name: "SocialIcon",
  props: {
    name: {},
    white: { type: Boolean },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(i) {
    return (t, e) => (l(), m("span", {
      class: f([t.$style.SocialIcon, t.small && t.$style.small, t.large && t.$style.large, t.white && t.$style.white])
    }, [
      t.name === "google" ? (l(), m("svg", kn, Cn)) : t.name === "twitter" ? (l(), m("svg", Mn, Bn)) : t.name === "slack" ? (l(), m("svg", Vn, zn)) : t.white && t.name === "facebook" ? (l(), m("svg", Tn, An)) : t.name === "facebook" ? (l(), m("svg", Nn, Ln)) : t.white && t.name === "linkedin" ? (l(), m("svg", Rn, On)) : t.name === "linkedin" ? (l(), m("svg", jn, Pn)) : t.name === "whatsapp" ? (l(), m("svg", Un, Kn)) : M("", !0)
    ], 2));
  }
}), Zn = "dodo-socialicon", Qn = "dodo-socialicon-white", Xn = "dodo-socialicon-small", Yn = "dodo-socialicon-large", xn = {
  SocialIcon: Zn,
  white: Qn,
  small: Xn,
  large: Yn
}, el = {
  $style: xn
}, ga = /* @__PURE__ */ A(Jn, [["__cssModules", el]]), tl = /* @__PURE__ */ h("path", {
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
], nl = /* @__PURE__ */ T({
  __name: "Spinner",
  props: {
    color: { default: void 0 },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(i) {
    const t = i, e = X(), o = S(() => {
      let n = "";
      return t.color === "inherit" ? n += "color:inherit;" : t.color && (n += `color:${e.colorCss(t.color)};`), n;
    });
    return (n, a) => (l(), m("div", {
      class: f([n.$style.Spinner, n.small && n.$style.small, n.large && n.$style.large])
    }, [
      (l(), m("svg", {
        style: K(o.value),
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
}, cl = /* @__PURE__ */ A(nl, [["__cssModules", dl]]), ul = ["onClick"], pl = {
  key: 1,
  class: "dodo-color-background"
}, vl = { style: {} }, ml = { key: 0 }, fl = {
  key: 1,
  class: "dodo-fade-secondary"
}, yl = {
  key: 0,
  class: "dodo-fade-secondary"
}, $l = /* @__PURE__ */ h("br", null, null, -1), hl = /* @__PURE__ */ T({
  __name: "Stepper",
  props: {
    stepIndex: {},
    steps: {},
    submit: { type: Function },
    completed: {}
  },
  emits: ["update:stepIndex", "submit"],
  setup(i, { emit: t }) {
    const e = i, o = _(0), n = S(() => e.steps[o.value]);
    function a() {
      o.value--;
    }
    async function p() {
      const y = n.value;
      if (y.filled !== !1 && !(y.validate && !await y.validate())) {
        if (o.value === e.steps.length - 1) {
          await e.submit();
          return;
        }
        o.value++;
      }
    }
    function s(y) {
      y > o.value || (o.value = y);
    }
    return P(() => {
      e.stepIndex != null && (o.value = e.stepIndex);
    }), Q(o, () => {
      t("update:stepIndex", o.value);
    }), (y, c) => (l(), V(u(q), {
      class: f(y.$style.stepper)
    }, {
      default: w(() => [
        (l(!0), m(L, null, G(y.steps, (d, v) => (l(), V(u(te), {
          key: d.key,
          align: "stretch",
          gap: "4",
          class: f(v > o.value && y.$style.inactiveStep)
        }, {
          default: w(() => [
            I(u(q), { align: "center" }, {
              default: w(() => [
                h("div", {
                  class: f([y.$style.circle]),
                  onClick: (g) => s(v)
                }, [
                  o.value > v ? (l(), V(u(W), {
                    key: 0,
                    name: "check"
                  })) : (l(), m("h3", pl, E(v + 1), 1))
                ], 10, ul),
                v < y.steps.length - 1 ? (l(), m("div", {
                  key: 0,
                  class: f(y.$style.line)
                }, null, 2)) : M("", !0)
              ]),
              _: 2
            }, 1024),
            I(u(q), { grow: "" }, {
              default: w(() => [
                I(u(q), {
                  gap: "1",
                  onClick: (g) => s(v)
                }, {
                  default: w(() => [
                    h("h3", vl, [
                      d === n.value ? (l(), m("span", ml, E(d.name), 1)) : (l(), m("span", fl, E(d.name), 1))
                    ]),
                    d.hint ? (l(), m("p", yl, E(d.hint), 1)) : M("", !0)
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                d === n.value ? (l(), V(u(q), { key: 0 }, {
                  default: w(() => [
                    $(y.$slots, d.slot),
                    I(u(te), null, {
                      default: w(() => [
                        o.value > 0 ? (l(), V(u(U), {
                          key: 0,
                          variant: "text",
                          onClick: a
                        }, {
                          default: w(() => [
                            F(" Back ")
                          ]),
                          _: 1
                        })) : M("", !0),
                        o.value < y.steps.length - 1 ? (l(), V(u(U), {
                          key: 1,
                          disabled: d.filled === !1,
                          color: "primary",
                          variant: "solid",
                          onClick: p
                        }, {
                          default: w(() => [
                            $(y.$slots, "continue-button-text", {}, () => [
                              F("Continue")
                            ])
                          ]),
                          _: 2
                        }, 1032, ["disabled"])) : (l(), V(u(U), {
                          key: 2,
                          color: "primary",
                          variant: "solid",
                          onClick: p
                        }, {
                          default: w(() => [
                            $(y.$slots, "submit-button-text", {}, () => [
                              F("Submit")
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
}, ba = /* @__PURE__ */ A(hl, [["__cssModules", Cl]]), Ml = ["onClick"], Sl = ["onClick"], Bl = /* @__PURE__ */ h("hr", null, null, -1), Vl = /* @__PURE__ */ T({
  __name: "Tabs",
  props: {
    tabs: {},
    tabIndex: {}
  },
  emits: ["update:tabIndex"],
  setup(i, { emit: t }) {
    const e = i, o = _(), n = _(""), a = S(() => e.tabs.find((g) => v(g) === n.value)), p = _(99), s = S(() => e.tabs.slice(0, p.value)), y = S(() => e.tabs.slice(p.value)), c = _();
    P(() => {
      !a.value && e.tabs.length && (n.value = v(e.tabs[0]));
    }), ee(() => {
      d(), c.value = setInterval(d, 100);
    }), x(() => {
      clearInterval(c.value);
    });
    function d() {
      var R;
      const C = ((R = o.value) == null ? void 0 : R.clientWidth) || 1e3, z = Math.max(1, Math.floor(C / 60));
      p.value = z;
    }
    Q(
      () => e.tabIndex,
      () => {
        e.tabIndex != null && e.tabs[e.tabIndex] && (n.value = v(e.tabs[e.tabIndex]));
      },
      { immediate: !0 }
    ), Q(
      () => a.value,
      () => {
        a.value && t("update:tabIndex", e.tabs.indexOf(a.value));
      },
      { immediate: !0 }
    );
    function v(g) {
      return g.slot ?? g.name;
    }
    return (g, C) => (l(), V(u(q), {
      gap: "4",
      style: { "min-width": "0" }
    }, {
      default: w(() => [
        I(u(q), { gap: "0" }, {
          default: w(() => [
            h("div", {
              class: f(g.$style.bar)
            }, [
              h("div", {
                ref_key: "tabsDiv",
                ref: o,
                class: f([g.$style.tabs])
              }, [
                (l(!0), m(L, null, G(s.value, (z, R) => (l(), m("div", {
                  key: v(z),
                  class: f([g.$style.tab, n.value === v(z) && g.$style.active, z.disabled && g.$style.disabled]),
                  onClick: (N) => n.value = v(z)
                }, [
                  h("h5", {
                    class: f(g.$style.tabName)
                  }, [
                    $(g.$slots, "tab-title", {
                      i: R,
                      tab: z
                    }, () => [
                      F(E(z.name), 1)
                    ])
                  ], 2)
                ], 10, Ml))), 128))
              ], 2),
              I(u(ce), null, {
                default: w(() => [
                  y.value.length > 0 ? (l(), V(u(U), {
                    key: 0,
                    class: f([g.$style.arrow]),
                    variant: "text",
                    small: ""
                  }, {
                    default: w(() => [
                      I(u(W), {
                        name: "more_horiz",
                        size: "l"
                      })
                    ]),
                    _: 1
                  }, 8, ["class"])) : M("", !0)
                ]),
                dropdown: w(() => [
                  (l(!0), m(L, null, G(y.value, (z, R) => (l(), m("p", {
                    key: v(z),
                    onClick: (N) => n.value = v(z)
                  }, [
                    $(g.$slots, "tab-title", {
                      i: R,
                      tab: z
                    }, () => [
                      F(E(z.name), 1)
                    ])
                  ], 8, Sl))), 128))
                ]),
                _: 3
              })
            ], 2),
            Bl
          ]),
          _: 3
        }),
        a.value ? $(g.$slots, a.value.slot ?? "default", {
          key: 0,
          tab: a.value
        }) : M("", !0)
      ]),
      _: 3
    }));
  }
}), Il = "dodo-tabs-bar", zl = "dodo-tabs", Tl = "dodo-tabs-tab", El = "dodo-tabs-tabname", Al = "dodo-tabs-active", Nl = "dodo-tabs-disabled", Fl = {
  bar: Il,
  tabs: zl,
  tab: Tl,
  tabName: El,
  active: Al,
  disabled: Nl
}, Dl = {
  $style: Fl
}, wa = /* @__PURE__ */ A(Vl, [["__cssModules", Dl]]), Ll = /* @__PURE__ */ T({
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
  setup(i, { emit: t }) {
    const e = i, o = _();
    function n() {
      o.value.focus();
    }
    function a() {
      t("update:modelValue", o.value.value);
    }
    return P(() => {
      e.autofocus && o.value && o.value.focus();
    }), (p, s) => (l(), V(u(Ve), {
      class: f([p.$style.TextInput]),
      disabled: p.disabled,
      onClick: oe(n, ["self"])
    }, {
      before: w(() => [
        $(p.$slots, "before")
      ]),
      after: w(() => [
        $(p.$slots, "after")
      ]),
      default: w(() => [
        (l(), V(ne(p.rows && p.rows > 1 ? "textarea" : "input"), {
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
          onInput: a
        }, null, 40, ["id", "value", "class", "placeholder", "disabled", "rows", "maxlength", "type", "name", "tab-index", "autofocus"]))
      ]),
      _: 3
    }, 8, ["class", "disabled", "onClick"]));
  }
}), Rl = "dodo-textinput", Hl = {
  TextInput: Rl
}, Ol = {
  $style: Hl
}, jl = /* @__PURE__ */ A(Ll, [["__cssModules", Ol]]), ql = /* @__PURE__ */ T({
  __name: "Tooltip",
  props: {
    text: {},
    disabled: { type: Boolean },
    side: {}
  },
  setup(i) {
    const t = i, e = _(!1), o = _(""), n = _(), a = _(), p = ie(), s = S(() => t.disabled || !(t.text || p["tooltip-text"]));
    x(c);
    async function y() {
      if (e.value || s.value)
        return;
      e.value = !0, await _e();
      const d = n.value.getBoundingClientRect(), v = a.value.getBoundingClientRect();
      t.side, d.bottom + v.height < window.innerHeight;
      let g = (d.right + d.left - v.width) / 2, C = d.bottom;
      t.side === "right" ? (g = d.right, C = (d.bottom + d.top - v.height) / 2) : t.side === "top" ? (g = (d.left + d.right - v.width) / 2, C = d.top - v.height) : t.side === "left" && (g = d.left - v.width, C = (d.bottom + d.top - v.height) / 2), C = Math.round(Math.max(Math.min(C, window.innerHeight - v.height), 0)), g = Math.round(Math.max(Math.min(g, window.innerWidth - v.width), 0)), o.value = `left:${g}px;top:${C}px`;
    }
    function c() {
      e.value = !1;
    }
    return (d, v) => (l(), m("div", {
      ref_key: "trigger",
      ref: n,
      class: f(d.$style.trigger),
      onMouseover: y,
      onMouseleave: c
    }, [
      $(d.$slots, "default"),
      e.value ? (l(), V(ke, {
        key: 0,
        to: "body"
      }, [
        h("div", {
          ref_key: "tooltip",
          ref: a,
          class: f(d.$style.Tooltip),
          style: K(o.value)
        }, [
          h("div", {
            class: f(d.$style.content)
          }, [
            h("small", {
              class: f(d.$style.text)
            }, [
              $(d.$slots, "tooltip-text", {}, () => [
                F(E(d.text), 1)
              ])
            ], 2)
          ], 2)
        ], 6)
      ])) : M("", !0)
    ], 34));
  }
}), Wl = "dodo-tooltip", Pl = "dodo-tooltip-content", Ul = "dodo-tooltip-text", Gl = "dodo-tooltip-trigger", Kl = {
  Tooltip: Wl,
  content: Pl,
  text: Ul,
  trigger: Gl
}, Jl = {
  $style: Kl
}, ue = /* @__PURE__ */ A(ql, [["__cssModules", Jl]]);
export {
  Yl as Animated,
  xl as Avatar,
  U as Button,
  ea as Card,
  $e as Checkbox,
  ra as Chip,
  q as Column,
  ia as CrashDialog,
  da as Datatable,
  xt as Dialog,
  ce as Dropdown,
  Ve as Field,
  ca as FluidGrid,
  ua as Grid,
  W as Icon,
  pa as Input,
  va as Label,
  Jo as MenuItem,
  ma as NavBar,
  be as NavBarItem,
  fa as NavBarNew,
  ya as NavItem,
  te as Row,
  rn as ScrollContainer,
  $a as Select,
  ha as SelectButtons,
  ga as SocialIcon,
  cl as Spinner,
  ba as Stepper,
  wa as Tabs,
  jl as TextInput,
  ue as Tooltip,
  la as ValidationError,
  sa as crashPlugin,
  Se as crashServiceKey,
  st as dropdownServiceKey,
  Ce as navBarServiceKey,
  oa as parseColor,
  at as useCrashService,
  ta as useElementSize,
  na as useResizeObserver,
  Me as useScreenSize,
  rt as useServiceFactory,
  nt as useSessionStoredRef,
  X as useTheme,
  aa as useValidation,
  lt as useWebFont
};
