var De = Object.defineProperty;
var Le = (i, o, e) => o in i ? De(i, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[o] = e;
var he = (i, o, e) => (Le(i, typeof o != "symbol" ? o + "" : o, e), e);
import { defineComponent as _, openBlock as a, createBlock as V, TransitionGroup as He, withCtx as b, renderSlot as h, Transition as de, computed as B, createElementBlock as v, normalizeClass as m, normalizeStyle as G, Fragment as D, createTextVNode as T, toDisplayString as A, createCommentVNode as M, useAttrs as Oe, ref as w, mergeProps as ae, unref as f, createElementVNode as $, onMounted as ee, watchEffect as O, onBeforeUnmount as oe, watch as J, inject as ce, provide as ue, reactive as ge, withModifiers as le, createVNode as I, resolveDynamicComponent as pe, renderList as P, Teleport as Be, nextTick as Se, onUnmounted as qe, useSlots as re, getCurrentInstance as _e, withDirectives as te, vShow as je, vModelText as Ve, vModelSelect as Ue, createStaticVNode as me, mergeModels as ze, useModel as Ie, vModelDynamic as We } from "vue";
const be = !1, Ua = /* @__PURE__ */ _({
  __name: "Animated",
  props: {
    list: { type: Boolean },
    appear: { type: Boolean }
  },
  setup(i) {
    return (o, e) => o.list ? (a(), V(He, {
      key: 0,
      name: "dodo",
      appear: o.appear,
      css: !be
    }, {
      default: b(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["appear", "css"])) : (a(), V(de, {
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
}), Pe = /* @__PURE__ */ _({
  __name: "Avatar",
  props: {
    text: {},
    image: {},
    round: { type: Boolean }
  },
  setup(i) {
    const o = ["info", "warning", "success", "danger"], e = i, r = Z(), s = B(() => {
      let n = e.text.trim();
      const u = /\b\w|[A-Z]/g, t = e.text.match(u);
      return t != null && t.length && (n = t.join("")), n.slice(0, 2).toUpperCase();
    }), l = B(() => {
      const n = o.length, u = p(e.text), t = o[u % n];
      return r.colorCss(t);
    });
    function p(n) {
      let u = 0;
      for (let t = 0; t < n.length; ++t)
        u = 997 * (u % 1e6) + 11 * n.charCodeAt(t);
      return u;
    }
    return (n, u) => (a(), v("span", {
      class: m([n.$style.Avatar, n.round && n.$style.round]),
      style: G([`--color:${l.value}`, n.image ? `background-image:url(${n.image})` : ""])
    }, [
      n.image ? M("", !0) : (a(), v(D, { key: 0 }, [
        T(A(s.value), 1)
      ], 64))
    ], 6));
  }
}), Ge = "dodo-avatar", Ke = "dodo-avatar-round", Je = {
  Avatar: Ge,
  round: Ke
}, E = (i, o) => {
  const e = i.__vccOpts || i;
  for (const [r, s] of o)
    e[r] = s;
  return e;
}, Ze = {
  $style: Je
}, Wa = /* @__PURE__ */ E(Pe, [["__cssModules", Ze]]), Qe = ["disabled", "type"], Xe = /* @__PURE__ */ _({
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
    const o = i, { colorCss: e } = Z(), r = B(() => {
      let n = "";
      return o.color && (n += `--button-color:${e(o.color)};`), n;
    }), s = Oe(), l = w(!1);
    async function p(n) {
      if (!l.value && typeof s.onClick == "function") {
        const u = s.onClick(n);
        u instanceof Promise && (l.value = !0, await u.finally(() => {
          l.value = !1;
        }));
      }
    }
    return (n, u) => (a(), v("button", ae({
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
    }, { ...f(s), onClick: p }), [
      $("div", {
        class: m(n.$style.content)
      }, [
        h(n.$slots, "default")
      ], 2),
      l.value ? (a(), V(f(Qn), {
        key: 0,
        small: n.small,
        class: m(n.$style.spinner),
        color: "inherit"
      }, null, 8, ["small", "class"])) : M("", !0)
    ], 16, Qe));
  }
}), Ye = "dodo-button", xe = "dodo-button-content", eo = "dodo-button-solid", oo = "dodo-button-rounded", to = "dodo-button-text", so = "dodo-button-loading", lo = "dodo-button-spinner", no = "dodo-button-active", ao = "dodo-button-small", ro = "dodo-button-square", io = {
  Button: Ye,
  content: xe,
  solid: eo,
  default: "dodo-button-default",
  rounded: oo,
  text: to,
  loading: so,
  spinner: lo,
  active: no,
  small: ao,
  square: ro
}, co = {
  $style: io
}, K = /* @__PURE__ */ E(Xe, [["__cssModules", co]]), uo = /* @__PURE__ */ _({
  __name: "Card",
  props: {
    hoverable: { type: Boolean },
    active: { type: Boolean },
    gap: {},
    padding: {}
  },
  setup(i) {
    const o = Z();
    return (e, r) => (a(), v("div", {
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
}), Ee = Symbol("NavBarService"), po = Symbol("DropdownService");
function Pa(i) {
  const o = w(0), e = w(0), r = new ResizeObserver(s);
  function s() {
    var l, p;
    o.value = ((l = i.value) == null ? void 0 : l.clientWidth) ?? 0, e.value = ((p = i.value) == null ? void 0 : p.clientHeight) ?? 0;
  }
  return ee(s), O(() => {
    r.disconnect(), i.value && r.observe(i.value), s();
  }), oe(() => {
    r.disconnect();
  }), { width: o, height: e, observer: r };
}
function Ae() {
  const e = w(window.innerWidth), r = w(window.innerHeight), s = B(() => e.value < 600), l = B(() => e.value >= 600 && e.value < 1200), p = B(() => e.value >= 1200);
  function n() {
    e.value = window.innerWidth, r.value = window.innerHeight;
  }
  return ee(() => {
    window.addEventListener("resize", n, { passive: !0 });
  }), oe(() => {
    window.removeEventListener("resize", n);
  }), {
    screenSmall: s,
    screenMedium: l,
    screenLarge: p
  };
}
function mo(i, o) {
  const e = w(o), r = sessionStorage.getItem(i);
  return r && (e.value = JSON.parse(r)), J(e, (s) => {
    sessionStorage.setItem(i, JSON.stringify(s));
  }), e;
}
function vo(i) {
  const o = w(!1);
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
function Ga(i) {
  if (!i.match(/^#\w{6}$/))
    throw new Error("Invalid hex color");
  return i.match(/(\w\w)/g).map((o) => parseInt(o, 16)).slice(0, 3);
}
const Fe = Symbol(Te.name);
function Te(i) {
  const o = w(null), e = w(0), r = 1e3;
  function s() {
    o.value = null, e.value = Date.now() + r;
  }
  function l() {
    location.reload();
  }
  function p(n) {
    i.onError && i.onError(n) === !1 || !o.value && e.value < Date.now() && (console.error(n), o.value = n);
  }
  return { ignoreError: s, reloadPage: l, currentError: o, handleCrash: p };
}
function Ka(i) {
  return (o) => {
    var s;
    const e = Te(i);
    o.provide(Fe, e);
    const { errorHandler: r } = o.config;
    o.config.errorHandler = (l, p, n) => {
      if (e.handleCrash(l), r)
        return r(l, p, n);
    }, (s = i.router) == null || s.onError((l) => {
      e.handleCrash(l);
    }), window.addEventListener("unhandledrejection", (l) => {
      e.handleCrash(l.reason);
    }), window.addEventListener("error", (l) => {
      e.handleCrash(l.error ?? l.message);
    });
  };
}
function fo() {
  return ce(Fe);
}
function Ja(i, o) {
  if (typeof ResizeObserver > "u")
    return {};
  const e = new ResizeObserver(() => o(i.value));
  return O(() => {
    i.value && e.observe(i.value);
  }), oe(() => {
    e.disconnect();
  }), { observer: e };
}
function yo(i) {
  const o = Symbol("ServiceKey");
  return { createAndProvide: () => {
    const s = i();
    return ue(o, s), s;
  }, injectOptional: () => ce(o, void 0) };
}
function Z() {
  function i(t) {
    return typeof t == "string" ? `var(--dodo-color-${t})` : `rgb(${t.join(",")})`;
  }
  function o(t) {
    return `var(--dodo-gap-${t})`;
  }
  function e(t) {
    return t ? `dodo-gap-${t}` : "";
  }
  function r(t) {
    return t ? `dodo-pad-${t}` : "";
  }
  function s(t) {
    return t ? `dodo-justify-${t}` : "";
  }
  function l(t) {
    return t ? `dodo-align-${t}` : "";
  }
  function p(t) {
    return t ? "dodo-wrap" : "";
  }
  function n(t) {
    return t ? "dodo-flex" : "";
  }
  function u(t) {
    return t ? "dodo-grow" : "";
  }
  return {
    colorCss: i,
    gapValue: o,
    gap: e,
    padding: r,
    justify: s,
    align: l,
    wrap: p,
    flex: n,
    grow: u
  };
}
const ve = window.matchMedia("(prefers-color-scheme: dark)"), $o = localStorage.getItem("dodotheme"), ho = ve.matches ? "dark" : "light", ne = w($o || ho);
ve.addEventListener("change", go);
function go() {
  ne.value = ve.matches ? "dark" : "light";
}
O(() => {
  localStorage.setItem("dodotheme", ne.value ?? ""), document.body.setAttribute("data-dodotheme", ne.value ?? "");
});
function Za() {
  return { theme: ne };
}
class Qa extends Error {
  constructor(e, r) {
    super(r);
    he(this, "name", "ValidationError");
    this.field = e;
  }
}
function Xa(i) {
  const o = ge(i), e = ge({});
  J(o, () => l());
  async function r(t) {
    const c = o[t];
    if (c) {
      const y = c.value, C = await n(t, y);
      if (C)
        return e[t] = String(C), !1;
    }
    return delete e[t], !0;
  }
  async function s(...t) {
    const c = t.length ? t : Object.keys(o);
    return (await Promise.all(c.map((C) => r(C)))).every((C) => C);
  }
  async function l() {
    return (await Promise.all(Object.keys(e).map((c) => r(c)))).every((c) => c);
  }
  function p() {
    for (const t in e)
      delete e[t];
  }
  async function n(t, c) {
    const y = o[t], C = y.name ?? u(t);
    if (y.required && !c)
      return `${C} is required`;
    if (y.isEmail && c != null && (typeof c != "string" || !c.includes("@")))
      return `${C} is not valid`;
    if (typeof c == "string") {
      if (y.minLen != null && c.length < y.minLen)
        return `${C} must be at least ${y.minLen} characters`;
      if (y.maxLen != null && c.length > y.maxLen)
        return `${C} must be less than ${y.maxLen} characters`;
    }
    if (y.validators)
      for (const F of y.validators) {
        const z = await F(c, C);
        if (z)
          return z;
      }
  }
  function u(t) {
    return t.toString().replace(/_/g, " ").replace(/^./, (c) => c.toUpperCase()).replace(/[a-z][A-Z]/g, (c) => `${c[0]} ${c[1]}`);
  }
  return { errors: e, rules: o, validate: s, clearErrors: p };
}
const bo = ["checked"], wo = /* @__PURE__ */ _({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean },
    indeterminate: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(i, { emit: o }) {
    const e = i, r = o;
    function s() {
      r("update:modelValue", e.indeterminate || !e.modelValue);
    }
    function l(p) {
      p.target.checked !== e.modelValue && s();
    }
    return (p, n) => (a(), v("span", {
      class: m([p.$style.Checkbox, p.modelValue && p.$style.checked]),
      onClick: le(s, ["stop"])
    }, [
      I(f(W), {
        name: p.indeterminate ? "indeterminate_check_box" : p.modelValue ? "check_box" : "check_box_outline_blank"
      }, null, 8, ["name"]),
      h(p.$slots, "default"),
      $("input", {
        type: "checkbox",
        checked: p.modelValue,
        onChange: l
      }, null, 40, bo)
    ], 2));
  }
}), ko = "dodo-checkbox", Mo = "dodo-checkbox-checked", Co = {
  Checkbox: ko,
  checked: Mo
}, Bo = {
  $style: Co
}, we = /* @__PURE__ */ E(wo, [["__cssModules", Bo]]), So = /* @__PURE__ */ _({
  __name: "Chip",
  props: {
    color: {}
  },
  setup(i) {
    const o = i, e = Z(), r = B(() => {
      let s = "";
      return o.color && (s += `--chip-color:${e.colorCss(o.color)};`), s;
    });
    return (s, l) => (a(), V(pe(s.$attrs.onClick ? "button" : "div"), {
      class: m(s.$style.Chip),
      style: G(r.value)
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
}), _o = "dodo-chip", Vo = "dodo-chip-text", zo = {
  Chip: _o,
  text: Vo
}, Io = {
  $style: zo
}, Ya = /* @__PURE__ */ E(So, [["__cssModules", Io]]), Eo = /* @__PURE__ */ _({
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
    return (e, r) => (a(), V(pe(e.tag ?? "div"), {
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
}), Ao = "dodo-column-el", Fo = {
  el: Ao
}, To = {
  $style: Fo
}, U = /* @__PURE__ */ E(Eo, [["__cssModules", To]]), No = /* @__PURE__ */ $("h3", null, "Something went wrong", -1), ke = `
  An unexpected error occurred and the application may not function correctly until the page is reloaded.
  Any unsaved changes will be lost if you choose to reload the page.
`, xa = /* @__PURE__ */ _({
  __name: "CrashDialog",
  setup(i) {
    const o = fo(), e = B(() => o.currentError.value), r = w(!1);
    return O(() => {
      r.value = !!e.value;
    }), (s, l) => (a(), V(f(ct), { active: r.value }, {
      controls: b(() => [
        I(f(K), {
          variant: "text",
          onClick: f(o).ignoreError
        }, {
          default: b(() => [
            T("Ignore")
          ]),
          _: 1
        }, 8, ["onClick"]),
        I(f(K), {
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
        No,
        h(s.$slots, "body", {
          error: e.value,
          defaultText: ke
        }, () => [
          $("p", null, A(ke))
        ])
      ]),
      _: 3
    }, 8, ["active"]));
  }
}), Ro = {
  key: 0,
  style: { width: "0" },
  scope: "col"
}, Do = ["onClick"], Lo = ["onClick"], Ho = { key: 0 }, Oo = /* @__PURE__ */ $("td", { colspan: "999" }, "No results", -1), qo = [
  Oo
], jo = { colspan: "999" }, Uo = { key: 0 }, Wo = /* @__PURE__ */ _({
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
    const e = i, r = o, s = w(), l = w([]), p = w(!1);
    O(() => {
      s.value = e.sortValue;
    }), O(() => {
      l.value = e.selection ?? [];
    }), J(s, (d) => {
      r("update:sortValue", d);
    }), J(l, (d) => {
      r("update:selection", d);
    });
    const n = B(() => {
      var d;
      return (d = s.value) == null ? void 0 : d.startsWith("-");
    }), u = B(() => e.columns.filter((d) => !d.disabled)), t = B(() => !!e.selection), c = B(() => {
      const d = u.value.find(C);
      return e.sortAsync || !d ? e.rows : e.rows.slice().sort((g, S) => {
        const R = X(d, g), j = X(d, S), $e = typeof R == "number" && typeof j == "number" ? j - R : `${j}`.localeCompare(`${R}`);
        return n.value ? $e : -$e;
      });
    });
    function y(d) {
      if (C(d))
        return n.value ? "arrow_drop_up" : "arrow_drop_down";
    }
    function C(d) {
      var g;
      return ((g = s.value) == null ? void 0 : g.replace("-", "")) === d.sort;
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
    async function N(d) {
      z(d) && (C(d) ? s.value = n.value ? void 0 : "-" + d.sort : s.value = d.sort, e.sortAsync && (p.value = !0, await e.sortAsync(s.value).finally(() => {
        p.value = !1;
      })));
    }
    function H(d) {
      return e.selectBy ? d[e.selectBy] : d;
    }
    function q(d) {
      const g = H(d);
      l.value.includes(g) ? l.value = l.value.filter((S) => S !== g) : l.value = l.value.concat(g);
    }
    function X(d, g) {
      return typeof d.value == "function" ? d.value(g) : typeof d.value == "string" ? g[d.value] : "";
    }
    function x(d) {
      if (!t.value)
        return !1;
      const g = H(d);
      return l.value.includes(g);
    }
    const Y = B(() => t.value ? e.rows.filter((d) => l.value.includes(H(d))) : []);
    function k() {
      const d = Y.value.length === e.rows.length;
      l.value = d ? [] : e.rows.map(H);
    }
    return (d, g) => (a(), v("div", {
      class: m([d.$style.Datatable, d.contentLoading && d.$style.loading])
    }, [
      $("table", null, [
        $("tbody", null, [
          $("tr", {
            class: m(d.stickyHeader && d.$style.stickyHeader)
          }, [
            t.value ? (a(), v("th", Ro, [
              I(f(we), {
                indeterminate: Y.value.length > 0 && Y.value.length < d.rows.length,
                "model-value": Y.value.length > 0 && Y.value.length === d.rows.length,
                "onUpdate:modelValue": k
              }, null, 8, ["indeterminate", "model-value"])
            ])) : M("", !0),
            (a(!0), v(D, null, P(u.value, (S) => (a(), v("th", {
              key: S.name,
              scope: "col",
              class: m([z(S) ? d.$style.sortable : "", C(S) && d.$style.sortActive]),
              style: G([L(S), Q(S)]),
              onClick: (R) => N(S)
            }, [
              $("span", {
                class: m(d.$style.colName)
              }, [
                $("span", null, [
                  h(d.$slots, `${F(S)}-header`, { column: S }, () => [
                    T(A(S.name), 1)
                  ])
                ]),
                y(S) ? (a(), V(f(W), {
                  key: 0,
                  name: y(S),
                  class: m(d.$style.sortIcon)
                }, null, 8, ["name", "class"])) : M("", !0)
              ], 2)
            ], 14, Do))), 128))
          ], 2),
          (a(!0), v(D, null, P(c.value, (S, R) => (a(), v("tr", {
            key: R,
            class: m([d.rowClick && d.$style.clickableRow, x(S) && d.$style.rowSelected]),
            onClick: (j) => d.rowClick && d.rowClick(S)
          }, [
            t.value ? (a(), v("td", Ho, [
              I(f(we), {
                "model-value": x(S),
                "onUpdate:modelValue": (j) => q(S)
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ])) : M("", !0),
            (a(!0), v(D, null, P(u.value, (j) => (a(), v("td", {
              key: j.name,
              class: m([]),
              style: G(L(j))
            }, [
              h(d.$slots, F(j), {
                row: S,
                column: j
              }, () => [
                T(A(X(j, S)), 1)
              ])
            ], 4))), 128))
          ], 10, Lo))), 128)),
          d.rows.length ? M("", !0) : (a(), v("tr", {
            key: 0,
            class: m(d.$style.noResults)
          }, qo, 2)),
          d.rows.length && d.showMore ? (a(), v("tr", {
            key: 1,
            class: m(d.$style.showMore)
          }, [
            $("td", jo, [
              I(f(K), {
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
          d.showFooter ? (a(), v("tr", {
            key: 2,
            class: m([d.$style.footer, d.stickyHeader && d.$style.stickyFooter])
          }, [
            t.value ? (a(), v("td", Uo)) : M("", !0),
            (a(!0), v(D, null, P(u.value, (S) => (a(), v("th", {
              key: S.name,
              style: G(L(S)),
              scope: "col"
            }, [
              h(d.$slots, `${F(S)}-footer`, { column: S })
            ], 4))), 128))
          ], 2)) : M("", !0)
        ])
      ])
    ], 2));
  }
}), Po = "dodo-datatable", Go = "dodo-datatable-colname", Ko = "dodo-datatable-sortable", Jo = "dodo-datatable-sorticon", Zo = "dodo-datatable-sortactive", Qo = "dodo-datatable-noresults", Xo = "dodo-datatable-showmore", Yo = "dodo-datatable-clickablerow", xo = "dodo-datatable-rowselected", et = "dodo-datatable-stickyheader", ot = "dodo-datatable-stickyfooter", tt = "dodo-datatable-loading", st = {
  Datatable: Po,
  colName: Go,
  sortable: Ko,
  sortIcon: Jo,
  sortActive: Zo,
  noResults: Qo,
  showMore: Xo,
  clickableRow: Yo,
  rowSelected: xo,
  stickyHeader: et,
  stickyFooter: ot,
  loading: tt
}, lt = {
  $style: st
}, er = /* @__PURE__ */ E(Wo, [["__cssModules", lt]]), nt = /* @__PURE__ */ _({
  __name: "Dialog",
  props: {
    active: { type: Boolean }
  },
  setup(i) {
    const o = i, e = w();
    return O(() => {
      o.active && e.value && e.value.parentNode.appendChild(e.value);
    }), (r, s) => (a(), V(Be, { to: "body" }, [
      I(de, { name: "Dialog" }, {
        default: b(() => [
          r.active ? (a(), v("div", {
            key: 0,
            ref_key: "el",
            ref: e,
            class: m([r.$style.Dialog])
          }, [
            $("div", {
              class: m(r.$style.window)
            }, [
              I(f(U), { padding: "4" }, {
                default: b(() => [
                  h(r.$slots, "default")
                ]),
                _: 3
              }),
              I(f(se), {
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
          ], 2)) : M("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), at = "dodo-dialog", rt = "dodo-dialog-window", it = {
  Dialog: at,
  window: rt,
  "Dialog-enter-active": "dodo-dialog-dialog-enter-active",
  "Dialog-leave-active": "dodo-dialog-dialog-leave-active",
  "Dialog-enter-from": "dodo-dialog-dialog-enter-from",
  "Dialog-leave-to": "dodo-dialog-dialog-leave-to"
}, dt = {
  $style: it
}, ct = /* @__PURE__ */ E(nt, [["__cssModules", dt]]), ut = /* @__PURE__ */ _({
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
    const e = i, r = o, s = w(!1), l = w(""), p = w(), n = w();
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
      s.value !== z && (e.disabled && z || (s.value = z, r("update:modelValue", z), z ? Se().then(() => {
        F(), window.addEventListener("click", C, { passive: !0, capture: !0 });
      }) : window.removeEventListener("click", C, { capture: !0 })));
    }
    function t(z) {
      e.trigger !== "hover" && (u(!s.value), z.preventDefault());
    }
    function c() {
      e.trigger === "hover" && u(!0);
    }
    function y(z) {
      var H, q;
      if (!s.value || e.trigger !== "hover")
        return;
      const L = z.relatedTarget, Q = (H = n.value) == null ? void 0 : H.contains(L), N = (q = p.value) == null ? void 0 : q.contains(L);
      Q || N || u(!1);
    }
    function C(z) {
      var L, Q;
      if (z.target) {
        const N = (L = n.value) == null ? void 0 : L.contains(z.target), H = (Q = p.value) == null ? void 0 : Q.contains(z.target);
        if (N || H)
          return;
      }
      u(!1);
    }
    function F() {
      const L = p.value;
      if (!L)
        return;
      const Q = L.scrollWidth, N = n.value.getBoundingClientRect(), H = window.innerWidth, q = window.innerHeight, X = N.bottom + 300 + 16 > q, x = Math.max(16, Math.min(N.left, H - Q - 16)), Y = Math.min(600, H - 16 * 2);
      let k = `left: ${x}px; max-width:${Y}px;`;
      X ? k += `bottom: ${q - N.top}px; max-height: ${N.top - 16}px;` : k += `top: ${N.bottom}px; max-height: ${q - N.bottom - 16}px;`, l.value = k, s.value && requestAnimationFrame(F);
    }
    return ue(po, { toggle: u }), (z, L) => (a(), v(D, null, [
      $("div", ae({
        ref_key: "el",
        ref: n,
        class: [z.$style.trigger, z.disabled && z.$style.disabled]
      }, z.$attrs, {
        onClick: t,
        onMouseover: c,
        onMouseleave: y
      }), [
        h(z.$slots, "default", { isActive: s.value })
      ], 16),
      s.value ? (a(), v("div", {
        key: 0,
        class: m([z.$style.container]),
        style: G(l.value)
      }, [
        $("div", {
          ref_key: "content",
          ref: p,
          class: m(z.$style.content),
          onMouseleave: y
        }, [
          I(f(U), {
            padding: z.padding ?? "2",
            gap: z.gap ?? "2"
          }, {
            default: b(() => [
              h(z.$slots, "dropdown", { toggle: u })
            ]),
            _: 3
          }, 8, ["padding", "gap"])
        ], 34)
      ], 6)) : M("", !0)
    ], 64));
  }
}), pt = "dodo-dropdown-trigger", mt = "dodo-dropdown-disabled", vt = "dodo-dropdown-container", ft = "dodo-dropdown-content", yt = {
  trigger: pt,
  disabled: mt,
  container: vt,
  content: ft
}, $t = {
  $style: yt
}, Ne = /* @__PURE__ */ E(ut, [["__cssModules", $t]]), ht = /* @__PURE__ */ _({
  __name: "Field",
  props: {
    disabled: { type: Boolean },
    button: { type: Boolean }
  },
  setup(i) {
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
}), gt = "dodo-field", bt = "dodo-field-button", wt = "dodo-field-inner", kt = "dodo-field-disabled", Mt = {
  Field: gt,
  button: bt,
  inner: wt,
  disabled: kt
}, Ct = {
  $style: Mt
}, Bt = /* @__PURE__ */ E(ht, [["__cssModules", Ct]]), St = /* @__PURE__ */ _({
  __name: "FluidGrid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean },
    alignItems: {}
  },
  setup(i) {
    const o = i, e = Z(), r = w(), s = w(99999);
    let l = null;
    const p = new ResizeObserver(() => {
      l && clearTimeout(l), l = setTimeout(() => {
        s.value = r.value.clientWidth;
      }, 50);
    });
    ee(() => {
      p.observe(r.value);
    }), qe(() => {
      p.disconnect();
    });
    const n = B(() => o.columnSize >= s.value), u = B(() => {
      let t = `--fluidgrid-size:${o.columnSize}px;`;
      return o.autoFill && (t += "--fluidgrid-mode:auto-fill;"), o.gap && (t += `gap:${e.gapValue(o.gap)};`), o.padding && (t += `padding:${e.gapValue(o.padding)};`), t;
    });
    return (t, c) => (a(), v("div", {
      ref_key: "el",
      ref: r,
      class: m([t.$style.FluidGrid, n.value && t.$style.oneColumn]),
      style: G(u.value)
    }, [
      h(t.$slots, "default")
    ], 6));
  }
}), _t = "dodo-fluidgrid", Vt = "dodo-fluidgrid-onecolumn", zt = {
  FluidGrid: _t,
  oneColumn: Vt
}, It = {
  $style: zt
}, or = /* @__PURE__ */ E(St, [["__cssModules", It]]), Et = /* @__PURE__ */ _({
  __name: "Form",
  props: {
    gap: {}
  },
  emits: ["submit"],
  setup(i, { emit: o }) {
    const e = o, r = Z();
    function s() {
      e("submit");
    }
    return (l, p) => (a(), v("form", {
      class: m([l.$style.form, f(r).gap(l.gap)]),
      onSubmit: le(s, ["prevent"])
    }, [
      h(l.$slots, "default")
    ], 34));
  }
}), At = "dodo-form", Ft = {
  form: At
}, Tt = {
  $style: Ft
}, tr = /* @__PURE__ */ E(Et, [["__cssModules", Tt]]), Nt = ["for"], Rt = /* @__PURE__ */ _({
  __name: "FormItem",
  props: {
    label: {},
    error: {},
    description: {},
    for: {},
    optional: { type: Boolean }
  },
  setup(i) {
    const o = i, e = re(), r = _e();
    return ee(() => {
      if (!e.default)
        throw new Error("FormEntry requires a default slot");
    }), (s, l) => {
      var p;
      return a(), v("div", {
        class: m([s.$style.FormEntry, s.error && s.$style.hasError])
      }, [
        s.label ? (a(), v("div", {
          key: 0,
          class: m(s.$style.labelRow)
        }, [
          $("label", {
            class: m(s.$style.label),
            for: o.for
          }, A(s.label), 11, Nt),
          s.optional ? (a(), v("span", {
            key: 0,
            class: m(s.$style.optional)
          }, "Optional", 2)) : M("", !0)
        ], 2)) : M("", !0),
        h(s.$slots, "default", {
          error: s.error,
          entryId: o.for ? o.for : `form-item-${(p = f(r)) == null ? void 0 : p.uid}`
        }),
        s.error ? (a(), v("div", {
          key: 1,
          class: m(s.$style.error)
        }, [
          $("span", null, A(s.error), 1)
        ], 2)) : M("", !0),
        s.description ? (a(), v("div", {
          key: 2,
          class: m(s.$style.description)
        }, A(s.description), 3)) : M("", !0)
      ], 2);
    };
  }
}), Dt = "dodo-formitem-formentry", Lt = "dodo-formitem-label", Ht = "dodo-formitem-optional", Ot = "dodo-formitem-labelrow", qt = "dodo-formitem-description", jt = "dodo-formitem-haserror", Ut = "dodo-formitem-error", Wt = {
  FormEntry: Dt,
  label: Lt,
  optional: Ht,
  labelRow: Ot,
  description: qt,
  hasError: jt,
  error: Ut
}, Pt = {
  $style: Wt
}, fe = /* @__PURE__ */ E(Rt, [["__cssModules", Pt]]), Gt = /* @__PURE__ */ _({
  __name: "Grid",
  props: {
    columnSize: {},
    gap: {},
    padding: {},
    autoFill: { type: Boolean }
  },
  setup(i) {
    const o = Z();
    return (e, r) => (a(), v("div", {
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
}), Kt = "dodo-grid-component", Jt = "dodo-grid-autofill", Zt = {
  component: Kt,
  autoFill: Jt,
  "col-xs": "dodo-grid-col-xs",
  "col-s": "dodo-grid-col-s",
  "col-m": "dodo-grid-col-m",
  "col-l": "dodo-grid-col-l"
}, Qt = {
  $style: Zt
}, sr = /* @__PURE__ */ E(Gt, [["__cssModules", Qt]]), ie = "Outlined", Me = "300", Xt = /* @__PURE__ */ _({
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
    const o = i, e = Z(), r = w(), s = vo({
      weight: Me,
      name: `Material Symbols ${ie}`,
      href: `https://fonts.googleapis.com/css2?family=Material+Symbols+${ie}:wght,FILL@${Me},0..1`
    });
    return (l, p) => (a(), v("span", {
      ref_key: "el",
      ref: r,
      style: G([l.color ? `color: ${f(e).colorCss(l.color)};` : "", f(s).isReady ? "" : "visibility:hidden"]),
      class: m([
        l.$style.icon,
        "material-symbols-" + ie.toLowerCase(),
        o.size && l.$style[o.size],
        o.fill && l.$style.fill
      ])
    }, A(l.name), 7));
  }
}), Yt = "dodo-icon", xt = "dodo-icon-fill", es = "dodo-icon-xs", os = "dodo-icon-s", ts = "dodo-icon-l", ss = "dodo-icon-xl", ls = {
  icon: Yt,
  fill: xt,
  xs: es,
  s: os,
  l: ts,
  xl: ss
}, ns = {
  $style: ls
}, W = /* @__PURE__ */ E(Xt, [["__cssModules", ns]]), as = ["id", "value", "placeholder", "disabled", "maxlength", "type", "name", "autofocus"], lr = /* @__PURE__ */ _({
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
    const e = w(null), r = o;
    function s() {
      r("update:modelValue", e.value.value);
    }
    return (l, p) => (a(), v("input", {
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
      onInput: s
    }, null, 40, as));
  }
}), rs = ["for"], is = { class: "dodo-label-text" }, ds = {
  key: 0,
  class: "dodo-color-danger"
}, cs = {
  key: 1,
  class: "dodo-fade-secondary"
}, nr = /* @__PURE__ */ _({
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
    return (e, r) => (a(), v("label", {
      class: m(["dodo-label", e.error && "dodo-label--error"]),
      for: o.for
    }, [
      $("span", is, A(e.text), 1),
      h(e.$slots, "default"),
      e.error ? (a(), v("small", ds, A(e.error), 1)) : e.hint ? (a(), v("small", cs, A(e.hint), 1)) : M("", !0)
    ], 10, rs));
  }
}), us = {
  key: 0,
  class: "dodo-nowrap dodo-fade-secondary"
}, ps = /* @__PURE__ */ _({
  __name: "MenuItem",
  props: {
    active: { type: Boolean },
    emphasize: { type: Boolean },
    separator: { type: Boolean }
  },
  setup(i) {
    return (o, e) => (a(), v(D, null, [
      o.separator ? (a(), v("hr", {
        key: 0,
        class: m(o.$style.separator)
      }, null, 2)) : M("", !0),
      $("div", ae(o.$attrs, {
        class: [o.$style.DropdownItem, o.active && o.$style.active, o.emphasize && o.$style.emphasize]
      }), [
        h(o.$slots, "before"),
        I(f(U), {
          gap: "0",
          style: { flex: "1" }
        }, {
          default: b(() => [
            $("p", {
              class: m([o.$style.text, "dodo-nowrap"])
            }, [
              h(o.$slots, "default")
            ], 2),
            o.$slots["text-secondary"] ? (a(), v("p", us, [
              h(o.$slots, "text-secondary")
            ])) : M("", !0)
          ]),
          _: 3
        }),
        h(o.$slots, "after")
      ], 16)
    ], 64));
  }
}), ms = "dodo-menuitem-dropdownitem", vs = "dodo-menuitem-active", fs = "dodo-menuitem-emphasize", ys = "dodo-menuitem-text", $s = "dodo-menuitem-separator", hs = {
  DropdownItem: ms,
  active: vs,
  emphasize: fs,
  text: ys,
  separator: $s
}, gs = {
  $style: hs
}, bs = /* @__PURE__ */ E(ps, [["__cssModules", gs]]), ws = /* @__PURE__ */ _({
  __name: "Modal",
  props: {
    open: { type: Boolean },
    size: {},
    padding: {},
    gap: {}
  },
  emits: ["close"],
  setup(i, { emit: o }) {
    const e = i, r = o, s = w();
    O(() => {
      var t;
      (t = s.value) == null || t.showModal();
    });
    const l = B(() => e.open);
    J(l, (t) => {
      if (t) {
        const c = window.innerWidth - document.body.clientWidth;
        document.body.style.setProperty("padding-right", `${c}px`), document.body.style.setProperty("overflow", "hidden");
      }
    });
    function p(t) {
      const c = s.value;
      t.target === c && n();
    }
    function n() {
      r("close");
    }
    async function u() {
      document.body.style.removeProperty("padding-right"), document.body.style.removeProperty("overflow");
    }
    return (t, c) => (a(), V(de, {
      appear: "",
      "enter-from-class": t.$style.enter,
      "leave-to-class": t.$style.enter,
      onAfterLeave: u
    }, {
      default: b(() => [
        l.value ? (a(), v("dialog", {
          key: 0,
          ref_key: "dialogElem",
          ref: s,
          class: m(t.$style.background),
          onClick: p
        }, [
          I(uo, {
            class: m([t.$style.modal, t.size && t.$style[t.size]]),
            padding: t.padding,
            gap: t.gap
          }, {
            default: b(() => [
              h(t.$slots, "default", { close: n }, () => [
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
}), ks = "dodo-modal-background", Ms = "dodo-modal-enter", Cs = "dodo-modal", Bs = "dodo-modal-s", Ss = "dodo-modal-l", _s = {
  background: ks,
  enter: Ms,
  modal: Cs,
  S: Bs,
  L: Ss
}, Vs = {
  $style: _s
}, ar = /* @__PURE__ */ E(ws, [["__cssModules", Vs]]), zs = /* @__PURE__ */ _({
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
    const o = i, e = re(), r = w(), s = w(!1);
    ee(() => {
      s.value = !!r.value.closest("[data-mobile-nav]");
    });
    const l = ce(Ee), p = B(() => l == null ? void 0 : l.collapsed.value), n = B(() => l == null ? void 0 : l.renderMobile.value), u = B(() => n.value || !p.value);
    async function t(c) {
      l && !e.submenu && (l.mobileToggle.value = !1), o.link && await o.link.navigate();
    }
    return (c, y) => (a(), V(f(ye), {
      text: c.text,
      disabled: u.value,
      side: "right"
    }, {
      default: b(() => [
        (a(), V(pe(c.$slots.submenu ? f(Ne) : "div"), null, {
          dropdown: b(() => [
            h(c.$slots, "submenu")
          ]),
          default: b(() => {
            var C;
            return [
              $("div", {
                ref_key: "el",
                ref: r,
                class: m([
                  c.$style.NavBarItem,
                  (c.active || ((C = c.link) == null ? void 0 : C.isActive.value)) && c.$style.active,
                  c.important && c.$style.important,
                  p.value && c.$style.collapsed
                ]),
                onClick: t
              }, [
                c.icon || c.$slots.icon ? (a(), v("div", {
                  key: 0,
                  class: m(c.$style.icon)
                }, [
                  h(c.$slots, "icon", {}, () => [
                    I(f(W), {
                      name: c.icon
                    }, null, 8, ["name"])
                  ])
                ], 2)) : M("", !0),
                $("div", {
                  class: m(c.$style.textwrap)
                }, [
                  $("p", {
                    class: m([c.$style.text, "dodo-nowrap"]),
                    color: "background"
                  }, A(c.text), 3),
                  c.textSecondary ? (a(), v("p", {
                    key: 0,
                    class: m([c.$style.secondary, "dodo-nowrap"]),
                    color: "background"
                  }, A(c.textSecondary), 3)) : M("", !0)
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
}), Is = "dodo-navbaritem", Es = "dodo-navbaritem-active", As = "dodo-navbaritem-important", Fs = "dodo-navbaritem-textwrap", Ts = "dodo-navbaritem-icon", Ns = "dodo-navbaritem-text", Rs = "dodo-navbaritem-secondary", Ds = {
  NavBarItem: Is,
  active: Es,
  important: As,
  textwrap: Fs,
  icon: Ts,
  text: Ns,
  secondary: Rs
}, Ls = {
  $style: Ds
}, Ce = /* @__PURE__ */ E(zs, [["__cssModules", Ls]]), Hs = { style: { "margin-right": "8px" } }, Os = /* @__PURE__ */ _({
  __name: "NavBar",
  props: {
    mobile: { type: Boolean }
  },
  setup(i) {
    const o = i, { screenLarge: e } = Ae(), r = mo("NavBar-collapse", null), s = w(!1), l = B(() => o.mobile || !e.value);
    ue(Ee, { collapsed: r, renderMobile: l, mobileToggle: s });
    function p() {
      l.value && (s.value = !1);
    }
    return (n, u) => (a(), v("div", {
      class: m([
        n.$style.root,
        f(r) && n.$style.collapsed,
        s.value && n.$style.mobileToggle,
        l.value && n.$style.mobileMenu
      ]),
      onClick: le(p, ["self"])
    }, [
      s.value ? (a(), v("div", {
        key: 0,
        class: m(n.$style.backdrop),
        onClick: u[0] || (u[0] = (t) => s.value = !1)
      }, null, 2)) : M("", !0),
      $("div", {
        class: m(n.$style.NavBar)
      }, [
        n.$slots["navbar-header"] ? (a(), v("div", {
          key: 0,
          class: m(n.$style.header)
        }, [
          $("div", null, [
            h(n.$slots, "navbar-header")
          ]),
          $("div", Hs, [
            l.value ? (a(), V(f(K), {
              key: 0,
              variant: "text",
              square: "",
              color: "background",
              onClick: u[1] || (u[1] = (t) => s.value = !1)
            }, {
              default: b(() => [
                I(f(W), { name: "close" })
              ]),
              _: 1
            })) : M("", !0)
          ])
        ], 2)) : M("", !0),
        $("div", {
          class: m(n.$style.middle)
        }, [
          h(n.$slots, "default")
        ], 2),
        n.$slots["navbar-footer"] ? (a(), v("div", {
          key: 1,
          class: m(n.$style.footer)
        }, [
          h(n.$slots, "navbar-footer"),
          l.value ? M("", !0) : (a(), V(Ce, {
            key: 0,
            text: f(r) ? "Expand" : "Collapse",
            icon: f(r) ? "last_page" : "first_page",
            onClick: u[2] || (u[2] = (t) => r.value = !f(r))
          }, null, 8, ["text", "icon"]))
        ], 2)) : M("", !0)
      ], 2),
      $("div", {
        class: m(n.$style.wrapMobile)
      }, [
        n.$slots.main ? (a(), V(f(U), {
          key: 0,
          class: m(n.$style.main)
        }, {
          default: b(() => [
            h(n.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : M("", !0),
        l.value ? (a(), v("div", {
          key: 1,
          class: m(n.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          h(n.$slots, "default", { inMobileBar: !0 }),
          h(n.$slots, "navbar-footer", { inMobileBar: !0 }),
          I(Ce, {
            text: "Menu",
            icon: "menu",
            onClick: u[3] || (u[3] = (t) => s.value = !s.value)
          })
        ], 2)) : M("", !0)
      ], 2)
    ], 2));
  }
}), qs = "dodo-navbar-root", js = "dodo-navbar", Us = "dodo-navbar-collapsed", Ws = "dodo-navbar-header", Ps = "dodo-navbar-middle", Gs = "dodo-navbar-footer", Ks = "dodo-navbar-wrapmobile", Js = "dodo-navbar-main", Zs = "dodo-navbar-backdrop", Qs = "dodo-navbar-mobilemenu", Xs = "dodo-navbar-mobiletoggle", Ys = "dodo-navbar-mobilenav", xs = {
  root: qs,
  NavBar: js,
  collapsed: Us,
  header: Ws,
  middle: Ps,
  footer: Gs,
  wrapMobile: Ks,
  main: Js,
  backdrop: Zs,
  mobileMenu: Qs,
  mobileToggle: Xs,
  mobileNav: Ys
}, el = {
  $style: xs
}, rr = /* @__PURE__ */ E(Os, [["__cssModules", el]]), Re = yo(() => {
  const i = w([]), o = w(""), e = w([]), r = w(!1);
  return J(i, () => {
    r.value = !1;
  }), { headerText: o, activeItems: i, expandedMenu: e, mobileToggle: r };
}), ol = (i) => {
  const o = Re.injectOptional(), e = _e(), r = (t) => t ? [t.uid, ...r(t.parent)] : [], s = (t) => {
    !t || !o || (o.activeItems.value = r(e), o.headerText.value = i.text.value);
  }, l = B(() => o == null ? void 0 : o.headerText.value), p = () => {
    !e || !o || (o.expandedMenu.value.includes(e.uid) ? o.expandedMenu.value = [] : o.expandedMenu.value = r(e));
  }, n = B(() => !e || !o ? !1 : o.activeItems.value.includes(e.uid)), u = B(() => !e || !o ? !1 : o.expandedMenu.value.length ? o.expandedMenu.value.includes(e.uid) : o.activeItems.value.includes(e.uid));
  return J(i.active, () => s(i.active.value), { immediate: !0 }), oe(() => s(!1)), O(() => {
    l.value && (document.title = l.value);
  }), { showAsActive: n, isExpanded: u, toggleExpand: p, headerText: l };
}, tl = /* @__PURE__ */ _({
  __name: "NavBarNew",
  setup(i) {
    const { headerText: o, mobileToggle: e } = Re.createAndProvide(), { screenLarge: r } = Ae(), s = B(() => !r.value);
    function l() {
      e.value = !1;
    }
    return (p, n) => (a(), v("div", {
      class: m([p.$style.root, f(e) && p.$style.mobileToggle, s.value && p.$style.mobileMenu]),
      onClick: le(l, ["self"])
    }, [
      f(e) ? (a(), v("div", {
        key: 0,
        class: m(p.$style.backdrop),
        onClick: n[0] || (n[0] = (u) => e.value = !1)
      }, null, 2)) : M("", !0),
      $("div", {
        class: m(p.$style.NavBar)
      }, [
        $("div", {
          class: m(p.$style.middle)
        }, [
          h(p.$slots, "default")
        ], 2),
        p.$slots["navbar-footer"] ? (a(), v("div", {
          key: 0,
          class: m(p.$style.footer)
        }, [
          h(p.$slots, "navbar-footer")
        ], 2)) : M("", !0)
      ], 2),
      $("div", {
        class: m(p.$style.wrapMobile)
      }, [
        s.value ? (a(), v("div", {
          key: 0,
          class: m(p.$style.mobileNav),
          "data-mobile-nav": ""
        }, [
          $("h5", null, A(f(o)), 1),
          I(f(ye), { text: "Toggle menu" }, {
            default: b(() => [
              $("div", {
                class: m(p.$style.menuButton)
              }, [
                I(f(W), {
                  name: "menu",
                  onClick: n[1] || (n[1] = (u) => e.value = !f(e))
                })
              ], 2)
            ]),
            _: 1
          })
        ], 2)) : M("", !0),
        p.$slots.main ? (a(), V(f(U), {
          key: 1,
          class: m(p.$style.main)
        }, {
          default: b(() => [
            h(p.$slots, "main")
          ]),
          _: 3
        }, 8, ["class"])) : M("", !0)
      ], 2)
    ], 2));
  }
}), sl = "dodo-navbarnew-root", ll = "dodo-navbarnew-navbar", nl = "dodo-navbarnew-middle", al = "dodo-navbarnew-footer", rl = "dodo-navbarnew-wrapmobile", il = "dodo-navbarnew-main", dl = "dodo-navbarnew-backdrop", cl = "dodo-navbarnew-menubutton", ul = "dodo-navbarnew-mobilemenu", pl = "dodo-navbarnew-mobiletoggle", ml = "dodo-navbarnew-mobilenav", vl = {
  root: sl,
  NavBar: ll,
  middle: nl,
  footer: al,
  wrapMobile: rl,
  main: il,
  backdrop: dl,
  menuButton: cl,
  mobileMenu: ul,
  mobileToggle: pl,
  mobileNav: ml
}, fl = {
  $style: vl
}, ir = /* @__PURE__ */ E(tl, [["__cssModules", fl]]), yl = ["href"], $l = { key: 0 }, hl = /* @__PURE__ */ _({
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
    const o = i, e = B(() => o.link ? f(o.link.isActive) : !1), r = B(() => o.text), { isExpanded: s, showAsActive: l, toggleExpand: p } = ol({ text: r, active: e }), n = re();
    async function u(t) {
      n.submenu && p(), o.link && (await o.link.navigate(), t.preventDefault());
    }
    return (t, c) => (a(), v("div", {
      class: m([t.$style.el])
    }, [
      I(f(ye), {
        text: t.tooltipText,
        side: "right"
      }, {
        default: b(() => {
          var y;
          return [
            $("a", {
              class: m([t.$style.link, f(l) && t.$style.active, t.important && t.$style.important]),
              href: f((y = t.link) == null ? void 0 : y.href),
              onClick: u
            }, [
              $("div", {
                class: m(t.$style.icon)
              }, [
                h(t.$slots, "icon", {}, () => [
                  t.icon ? (a(), V(f(W), {
                    key: 0,
                    name: t.icon
                  }, null, 8, ["name"])) : M("", !0)
                ])
              ], 2),
              $("div", {
                class: m(t.$style.textwrap)
              }, [
                $("p", {
                  class: m([t.$style.text, "dodo-nowrap"])
                }, A(r.value), 3),
                t.textSecondary ? (a(), v("p", {
                  key: 0,
                  class: m([t.$style.secondary, "dodo-nowrap"])
                }, A(t.textSecondary), 3)) : M("", !0)
              ], 2),
              f(n).submenu ? (a(), v("div", $l, [
                I(f(W), {
                  name: f(s) ? "expand_less" : "expand_more",
                  size: "s",
                  style: { margin: "0 -0.25em" }
                }, null, 8, ["name"])
              ])) : M("", !0)
            ], 10, yl)
          ];
        }),
        _: 3
      }, 8, ["text"]),
      t.$slots.submenu ? (a(), v("div", {
        key: 0,
        class: m([t.$style.submenu, f(s) && t.$style.expanded])
      }, [
        h(t.$slots, "submenu")
      ], 2)) : M("", !0)
    ], 2));
  }
}), gl = "dodo-navitem-el", bl = "dodo-navitem-link", wl = "dodo-navitem-submenu", kl = "dodo-navitem-expanded", Ml = "dodo-navitem-active", Cl = "dodo-navitem-important", Bl = "dodo-navitem-textwrap", Sl = "dodo-navitem-icon", _l = "dodo-navitem-text", Vl = "dodo-navitem-secondary", zl = {
  el: gl,
  link: bl,
  submenu: wl,
  expanded: kl,
  active: Ml,
  important: Cl,
  textwrap: Bl,
  icon: Sl,
  text: _l,
  secondary: Vl
}, Il = {
  $style: zl
}, dr = /* @__PURE__ */ E(hl, [["__cssModules", Il]]), El = /* @__PURE__ */ _({
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
    return (e, r) => (a(), v("div", {
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
}), Al = "dodo-row-el", Fl = {
  el: Al
}, Tl = {
  $style: Fl
}, se = /* @__PURE__ */ E(El, [["__cssModules", Tl]]), Nl = /* @__PURE__ */ _({
  __name: "ScrollContainer",
  setup(i) {
    const o = B(() => "");
    return (e, r) => (a(), v("div", {
      class: m([e.$style.ScrollContainer]),
      style: G(o.value)
    }, [
      h(e.$slots, "default")
    ], 6));
  }
}), Rl = "dodo-scrollcontainer", Dl = {
  ScrollContainer: Rl
}, Ll = {
  $style: Dl
}, Hl = /* @__PURE__ */ E(Nl, [["__cssModules", Ll]]), Ol = {
  key: 0,
  class: "dodo-nowrap"
}, ql = {
  key: 1,
  class: "dodo-nowrap dodo-fade-secondary"
}, jl = ["disabled"], Ul = 12, Wl = /* @__PURE__ */ _({
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
    const e = i, r = o, s = B(() => (e.multiple ? [e.modelValue].flat() : [e.modelValue]).filter(N)), l = w(!1), p = w(""), n = w(), u = w(), t = w(), c = w();
    O(() => {
      l.value && n.value && (p.value = "", n.value.focus());
    }), O(() => {
      p.value && u.value && u.value.$el.querySelector("input").focus();
    }), O(() => {
      l.value && setTimeout(() => {
        var g;
        const k = (g = t.value) == null ? void 0 : g.$el, d = k == null ? void 0 : k.querySelector("[data-selectactive]");
        d == null || d.scrollIntoView({ block: "center" });
      }, 0);
    });
    const y = w(!1), C = B(() => e.options.length > Ul), F = B(() => C.value && !y.value ? 6 : e.options.length), z = B(() => p.value || e.options.length >= 10), L = B(() => {
      const k = p.value.toLowerCase(), d = e.options.filter((R) => `${R.value}|${R.label}`.toLowerCase().includes(k));
      if (!e.multiple)
        return d;
      const g = d.filter((R) => s.value.find((j) => q(R, j))), S = d.filter((R) => !g.includes(R));
      return g.concat(S);
    }), Q = B(() => e.placeholder ? e.placeholder : e.multiple ? "Select one or more" : "Select one");
    function N(k) {
      return e.options.find((d) => q(d, k));
    }
    function H(k) {
      let d = k.value;
      e.multiple ? s.value.includes(d) ? d = s.value.filter((g) => !q(k, g)) : d = s.value.concat(k.value) : l.value = !1, r("update:modelValue", d);
    }
    function q(k, d) {
      return k.value === d;
    }
    function X(k) {
      return k.label || `${k.value}`;
    }
    function x(k) {
      return s.value.some((d) => q(k, d));
    }
    function Y(k) {
      var S, R;
      const d = (S = c.value) == null ? void 0 : S.$el.contains(k.target), g = (R = t.value) == null ? void 0 : R.$el.contains(k.target);
      l.value = d || g;
    }
    return ee(() => {
      document.addEventListener("focusin", Y);
    }), oe(() => {
      document.removeEventListener("focusin", Y);
    }), (k, d) => k.variant === "buttons" ? (a(), V(f(se), {
      key: 0,
      gap: "1",
      wrap: ""
    }, {
      default: b(() => [
        (a(!0), v(D, null, P(k.options.slice(0, F.value), (g, S) => (a(), V(f(K), {
          key: X(g),
          color: x(g) ? "info" : void 0,
          active: x(g),
          variant: x(g) && !k.multiple ? "solid" : void 0,
          disabled: k.disabled,
          small: k.size === "s",
          rounded: "",
          onClick: (R) => H(g)
        }, {
          default: b(() => [
            k.multiple && x(g) ? (a(), V(f(W), {
              key: 0,
              name: "check",
              size: "s",
              style: { margin: "-2px" }
            })) : M("", !0),
            h(k.$slots, "default", {
              option: g,
              index: S
            }, () => [
              T(A(X(g)), 1)
            ])
          ]),
          _: 2
        }, 1032, ["color", "active", "variant", "disabled", "small", "onClick"]))), 128)),
        C.value ? (a(), v(D, { key: 0 }, [
          y.value ? (a(), V(f(K), {
            key: 0,
            small: k.size === "s",
            variant: "text",
            rounded: "",
            onClick: d[0] || (d[0] = (g) => y.value = !y.value)
          }, {
            default: b(() => [
              T(" Less "),
              I(f(W), {
                name: "expand_less",
                size: "s",
                style: { margin: "-2px" }
              })
            ]),
            _: 1
          }, 8, ["small"])) : (a(), V(f(K), {
            key: 1,
            small: k.size === "s",
            variant: "text",
            rounded: "",
            onClick: d[1] || (d[1] = (g) => y.value = !y.value)
          }, {
            default: b(() => [
              T(A(k.options.length - F.value) + " more ", 1),
              I(f(W), {
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
    })) : (a(), V(f(Ne), {
      key: 1,
      modelValue: l.value,
      "onUpdate:modelValue": d[5] || (d[5] = (g) => l.value = g),
      disabled: k.disabled
    }, {
      dropdown: b(() => [
        I(f(U), {
          ref_key: "dropdownEl",
          ref: t,
          style: { "min-height": "0" },
          gap: "0",
          onMousedown: d[4] || (d[4] = le(() => {
          }, ["stop", "prevent"]))
        }, {
          default: b(() => [
            te(I(f(se), {
              padding: "2",
              class: m(k.$style.searchbox)
            }, {
              default: b(() => [
                I(f(Sa), {
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
              [je, z.value]
            ]),
            I(f(Hl), null, {
              default: b(() => [
                (a(!0), v(D, null, P(L.value, (g, S) => (a(), V(f(bs), {
                  key: `${g.value}`,
                  "data-selectactive": s.value.includes(g.value) ? "true" : void 0,
                  active: s.value.includes(g.value),
                  onClick: (R) => H(g)
                }, {
                  default: b(() => [
                    h(k.$slots, "default", {
                      index: S,
                      option: g
                    }, () => [
                      T(A(X(g)), 1)
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
        I(f(Bt), {
          ref_key: "fieldEl",
          ref: c,
          button: "",
          disabled: k.disabled
        }, {
          after: b(() => [
            I(f(W), { name: "arrow_drop_down" })
          ]),
          default: b(() => [
            s.value.length ? (a(), v("p", Ol, [
              (a(!0), v(D, null, P(s.value, (g, S) => (a(), v(D, null, [
                S ? (a(), v(D, { key: 0 }, [
                  T(", ")
                ], 64)) : M("", !0),
                N(g) ? h(k.$slots, "default", {
                  key: 1,
                  index: k.options.indexOf(N(g)),
                  option: N(g)
                }, () => [
                  T(A(X(N(g))), 1)
                ]) : (a(), v(D, { key: 2 }, [
                  T(A(g), 1)
                ], 64))
              ], 64))), 256))
            ])) : (a(), v("p", ql, A(Q.value), 1)),
            te($("input", {
              ref_key: "hiddenInput",
              ref: n,
              "onUpdate:modelValue": d[2] || (d[2] = (g) => p.value = g),
              style: { position: "fixed", "pointer-events": "none", opacity: "0" },
              disabled: k.disabled
            }, null, 8, jl), [
              [Ve, p.value]
            ])
          ]),
          _: 3
        }, 8, ["disabled"])
      ]),
      _: 3
    }, 8, ["modelValue", "disabled"]));
  }
}), Pl = "dodo-select-searchbox", Gl = {
  searchbox: Pl
}, Kl = {
  $style: Gl
}, cr = /* @__PURE__ */ E(Wl, [["__cssModules", Kl]]), Jl = /* @__PURE__ */ _({
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
    const e = i, r = o, s = B(() => e.multiple ? [e.modelValue].flat() : [e.modelValue]);
    function l(u, t) {
      return u.value === t;
    }
    function p(u) {
      return s.value.some((t) => l(u, t));
    }
    function n(u) {
      let t = u.value;
      p(u) && e.multiple ? t = s.value.filter((y) => !l(u, y)) : e.multiple && (t = [...s.value, u.value]), r("update:modelValue", t);
    }
    return (u, t) => (a(), v("div", {
      class: m([u.$style.Select, u.multiple && u.$style.multiple])
    }, [
      (a(!0), v(D, null, P(u.options, (c, y) => (a(), V(f(K), ae({
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
            index: y
          }, () => [
            T(A(c.label || c.value), 1)
          ])
        ]),
        _: 2
      }, 1040, ["disabled", "small", "onClick"]))), 128))
    ], 2));
  }
}), Zl = "dodo-selectbuttons-select", Ql = "dodo-selectbuttons-multiple", Xl = {
  Select: Zl,
  multiple: Ql
}, Yl = {
  $style: Xl
}, ur = /* @__PURE__ */ E(Jl, [["__cssModules", Yl]]), xl = ["id", "disabled"], en = ["value"], on = /* @__PURE__ */ _({
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
    const e = i, r = o, s = B({
      get: () => e.modelValue,
      set: (l) => r("update:modelValue", l)
    });
    return (l, p) => (a(), V(fe, {
      class: m(l.error && l.$style.error),
      label: l.label,
      error: l.error,
      description: l.description,
      optional: l.optional,
      for: l.id ?? void 0
    }, {
      default: b(({ entryId: n }) => [
        $("div", {
          class: m(l.$style.select)
        }, [
          te($("select", {
            id: l.id ?? n,
            "onUpdate:modelValue": p[0] || (p[0] = (u) => s.value = u),
            disabled: l.disabled,
            class: m(["dodo-formfield"])
          }, [
            (a(!0), v(D, null, P(l.options, (u) => (a(), v("option", {
              key: u.label,
              value: u.value
            }, A(u.label), 9, en))), 128))
          ], 8, xl), [
            [Ue, s.value]
          ]),
          $("span", {
            class: m(l.$style.icon)
          }, [
            I(W, { name: "unfold_more" })
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["class", "label", "error", "description", "optional", "for"]));
  }
}), tn = "dodo-simpleselect-select", sn = "dodo-simpleselect-icon", ln = "dodo-simpleselect-error", nn = {
  select: tn,
  icon: sn,
  error: ln
}, an = {
  $style: nn
}, pr = /* @__PURE__ */ E(on, [["__cssModules", an]]), rn = {
  key: 0,
  viewBox: "0 0 48 48"
}, dn = /* @__PURE__ */ me('<clipPath id="g"><path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path></clipPath><g clip-path="url(#g)"><path fill="#FBBC05" d="M0 37V11l17 13z"></path><path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path><path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path><path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path></g>', 2), cn = [
  dn
], un = {
  key: 1,
  viewBox: "0 0 248 204"
}, pn = /* @__PURE__ */ $("path", {
  id: "white_background",
  fill: "#1D9BF0",
  d: "M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
}, null, -1), mn = [
  pn
], vn = {
  key: 2,
  viewBox: "60 60 140 140"
}, fn = /* @__PURE__ */ me('<path fill="#E01E5A" d="M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"></path><path fill="#E01E5A" d="M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9V151.2z"></path><path fill="#36C5F0" d="M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"></path><path fill="#36C5F0" d="M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9H118.8z"></path><path fill="#2EB67D" d="M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"></path><path fill="#2EB67D" d="M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9V118.8z"></path><path fill="#ECB22E" d="M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"></path><path fill="#ECB22E" d="M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9H151.2z"></path>', 8), yn = [
  fn
], $n = {
  key: 3,
  viewBox: "2 2 46 46"
}, hn = /* @__PURE__ */ $("path", { d: "M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" }, null, -1), gn = [
  hn
], bn = {
  key: 4,
  viewBox: "0 0 14222 14222"
}, wn = /* @__PURE__ */ $("circle", {
  cx: "7111",
  cy: "7112",
  r: "7111",
  fill: "#1977f3"
}, null, -1), kn = /* @__PURE__ */ $("path", {
  d: "M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z",
  fill: "#fff"
}, null, -1), Mn = [
  wn,
  kn
], Cn = {
  key: 5,
  viewBox: "0 0 24 24"
}, Bn = /* @__PURE__ */ $("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }, null, -1), Sn = [
  Bn
], _n = {
  key: 6,
  viewBox: "6 6 36 36"
}, Vn = /* @__PURE__ */ $("path", {
  fill: "#0288D1",
  d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
}, null, -1), zn = /* @__PURE__ */ $("path", {
  fill: "#FFF",
  d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
}, null, -1), In = [
  Vn,
  zn
], En = {
  key: 7,
  viewBox: "10 10 160 160"
}, An = /* @__PURE__ */ me('<defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"></stop><stop offset="1" stop-color="#23b33a"></stop></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531"></feGaussianBlur></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"></path><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"></path><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"></path><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"></path><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"></path>', 6), Fn = [
  An
], Tn = /* @__PURE__ */ _({
  __name: "SocialIcon",
  props: {
    name: {},
    white: { type: Boolean },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(i) {
    return (o, e) => (a(), v("span", {
      class: m([o.$style.SocialIcon, o.small && o.$style.small, o.large && o.$style.large, o.white && o.$style.white])
    }, [
      o.name === "google" ? (a(), v("svg", rn, cn)) : o.name === "twitter" ? (a(), v("svg", un, mn)) : o.name === "slack" ? (a(), v("svg", vn, yn)) : o.white && o.name === "facebook" ? (a(), v("svg", $n, gn)) : o.name === "facebook" ? (a(), v("svg", bn, Mn)) : o.white && o.name === "linkedin" ? (a(), v("svg", Cn, Sn)) : o.name === "linkedin" ? (a(), v("svg", _n, In)) : o.name === "whatsapp" ? (a(), v("svg", En, Fn)) : M("", !0)
    ], 2));
  }
}), Nn = "dodo-socialicon", Rn = "dodo-socialicon-white", Dn = "dodo-socialicon-small", Ln = "dodo-socialicon-large", Hn = {
  SocialIcon: Nn,
  white: Rn,
  small: Dn,
  large: Ln
}, On = {
  $style: Hn
}, mr = /* @__PURE__ */ E(Tn, [["__cssModules", On]]), qn = /* @__PURE__ */ $("path", {
  stroke: "currentColor",
  fill: "none",
  d: "M 9 1 A 8 8 0 0 1 17 9",
  "stroke-width": "2"
}, null, -1), jn = /* @__PURE__ */ $("path", {
  stroke: "currentColor",
  opacity: "0.33",
  fill: "none",
  d: "M 17 9 A 8 8 0 1 1 9 1",
  "stroke-width": "2"
}, null, -1), Un = [
  qn,
  jn
], Wn = /* @__PURE__ */ _({
  __name: "Spinner",
  props: {
    color: { default: void 0 },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(i) {
    const o = Z(), e = i, r = B(() => {
      let s = "";
      return e.color === "inherit" ? s += "color:inherit;" : e.color && (s += `color:${o.colorCss(e.color)};`), s;
    });
    return (s, l) => (a(), v("div", {
      class: m([s.$style.Spinner, s.small && s.$style.small, s.large && s.$style.large])
    }, [
      (a(), v("svg", {
        style: G(r.value),
        viewBox: "0 0 18 18"
      }, Un, 4))
    ], 2));
  }
}), Pn = "dodo-spinner", Gn = "dodo-spinner-small", Kn = "dodo-spinner-large", Jn = {
  Spinner: Pn,
  small: Gn,
  large: Kn
}, Zn = {
  $style: Jn
}, Qn = /* @__PURE__ */ E(Wn, [["__cssModules", Zn]]), Xn = ["onClick"], Yn = {
  key: 1,
  class: "dodo-color-background"
}, xn = { style: {} }, ea = { key: 0 }, oa = {
  key: 1,
  class: "dodo-fade-secondary"
}, ta = {
  key: 0,
  class: "dodo-fade-secondary"
}, sa = /* @__PURE__ */ $("br", null, null, -1), la = /* @__PURE__ */ _({
  __name: "Stepper",
  props: {
    stepIndex: {},
    steps: {},
    submit: { type: Function },
    completed: {}
  },
  emits: ["update:stepIndex", "submit"],
  setup(i, { emit: o }) {
    const e = i, r = o, s = w(0), l = B(() => e.steps[s.value]);
    function p() {
      s.value--;
    }
    async function n() {
      const t = l.value;
      if (t.filled !== !1 && !(t.validate && !await t.validate())) {
        if (s.value === e.steps.length - 1) {
          await e.submit();
          return;
        }
        s.value++;
      }
    }
    function u(t) {
      t > s.value || (s.value = t);
    }
    return O(() => {
      e.stepIndex != null && (s.value = e.stepIndex);
    }), J(s, () => {
      r("update:stepIndex", s.value);
    }), (t, c) => (a(), V(f(U), {
      class: m(t.$style.stepper)
    }, {
      default: b(() => [
        (a(!0), v(D, null, P(t.steps, (y, C) => (a(), V(f(se), {
          key: y.key,
          align: "stretch",
          gap: "4",
          class: m(C > s.value && t.$style.inactiveStep)
        }, {
          default: b(() => [
            I(f(U), { align: "center" }, {
              default: b(() => [
                $("div", {
                  class: m([t.$style.circle]),
                  onClick: (F) => u(C)
                }, [
                  s.value > C ? (a(), V(f(W), {
                    key: 0,
                    name: "check"
                  })) : (a(), v("h3", Yn, A(C + 1), 1))
                ], 10, Xn),
                C < t.steps.length - 1 ? (a(), v("div", {
                  key: 0,
                  class: m(t.$style.line)
                }, null, 2)) : M("", !0)
              ]),
              _: 2
            }, 1024),
            I(f(U), { grow: "" }, {
              default: b(() => [
                I(f(U), {
                  gap: "1",
                  onClick: (F) => u(C)
                }, {
                  default: b(() => [
                    $("h3", xn, [
                      y === l.value ? (a(), v("span", ea, A(y.name), 1)) : (a(), v("span", oa, A(y.name), 1))
                    ]),
                    y.hint ? (a(), v("p", ta, A(y.hint), 1)) : M("", !0)
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                y === l.value ? (a(), V(f(U), { key: 0 }, {
                  default: b(() => [
                    h(t.$slots, y.slot),
                    I(f(se), null, {
                      default: b(() => [
                        s.value > 0 ? (a(), V(f(K), {
                          key: 0,
                          variant: "text",
                          onClick: p
                        }, {
                          default: b(() => [
                            T(" Back ")
                          ]),
                          _: 1
                        })) : M("", !0),
                        s.value < t.steps.length - 1 ? (a(), V(f(K), {
                          key: 1,
                          disabled: y.filled === !1,
                          color: "primary",
                          variant: "solid",
                          onClick: n
                        }, {
                          default: b(() => [
                            h(t.$slots, "continue-button-text", {}, () => [
                              T("Continue")
                            ])
                          ]),
                          _: 2
                        }, 1032, ["disabled"])) : (a(), V(f(K), {
                          key: 2,
                          color: "primary",
                          variant: "solid",
                          onClick: n
                        }, {
                          default: b(() => [
                            h(t.$slots, "submit-button-text", {}, () => [
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
                sa
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
}), na = "dodo-stepper-line", aa = "dodo-stepper-circle", ra = "dodo-stepper-inactivestep", ia = {
  line: na,
  circle: aa,
  inactiveStep: ra
}, da = {
  $style: ia
}, vr = /* @__PURE__ */ E(la, [["__cssModules", da]]), ca = ["onClick"], ua = /* @__PURE__ */ $("hr", null, null, -1), pa = /* @__PURE__ */ _({
  __name: "Tabs",
  props: {
    tabs: {},
    tabIndex: {}
  },
  emits: ["update:tabIndex"],
  setup(i, { emit: o }) {
    const e = i, r = o, s = w(""), l = B(() => e.tabs.find((n) => p(n) === s.value));
    O(() => {
      !l.value && e.tabs.length && (s.value = p(e.tabs[0]));
    }), J(
      () => e.tabIndex,
      () => {
        e.tabIndex != null && e.tabs[e.tabIndex] && (s.value = p(e.tabs[e.tabIndex]));
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
    return (n, u) => (a(), V(f(U), {
      gap: "4",
      style: { "min-width": "0" }
    }, {
      default: b(() => [
        I(f(U), { gap: "0" }, {
          default: b(() => [
            $("div", {
              class: m(n.$style.bar)
            }, [
              (a(!0), v(D, null, P(n.tabs, (t, c) => (a(), v("div", {
                key: p(t),
                class: m([n.$style.tab, s.value === p(t) && n.$style.active, t.disabled && n.$style.disabled]),
                onClick: (y) => s.value = p(t)
              }, [
                $("h5", {
                  class: m(n.$style.tabName)
                }, [
                  h(n.$slots, "tab-title", {
                    i: c,
                    tab: t
                  }, () => [
                    T(A(t.name), 1)
                  ])
                ], 2)
              ], 10, ca))), 128))
            ], 2),
            ua
          ]),
          _: 3
        }),
        l.value ? h(n.$slots, l.value.slot ?? "default", {
          key: 0,
          tab: l.value
        }) : M("", !0)
      ]),
      _: 3
    }));
  }
}), ma = "dodo-tabs-bar", va = "dodo-tabs-tab", fa = "dodo-tabs-tabname", ya = "dodo-tabs-active", $a = "dodo-tabs-disabled", ha = {
  bar: ma,
  tab: va,
  tabName: fa,
  active: ya,
  disabled: $a
}, ga = {
  $style: ha
}, fr = /* @__PURE__ */ E(pa, [["__cssModules", ga]]), ba = ["id", "placeholder", "disabled", "maxlength", "type", "name", "autofocus", "autocomplete"], wa = /* @__PURE__ */ _({
  __name: "TextInput",
  props: /* @__PURE__ */ ze({
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
    const o = Ie(i, "modelValue");
    return (e, r) => (a(), V(fe, {
      label: e.label,
      error: e.error,
      description: e.description,
      class: m(e.error && e.$style.error),
      optional: e.optional,
      for: e.id ?? void 0
    }, {
      default: b(({ entryId: s }) => [
        te($("input", {
          id: e.id ?? s,
          "onUpdate:modelValue": r[0] || (r[0] = (l) => o.value = l),
          class: m(["dodo-formfield", e.$style.input]),
          placeholder: e.placeholder,
          disabled: e.disabled,
          maxlength: e.maxlength,
          type: e.type || "text",
          name: e.name,
          autofocus: e.autofocus,
          autocomplete: e.autocomplete
        }, null, 10, ba), [
          [We, o.value]
        ])
      ]),
      _: 1
    }, 8, ["label", "error", "description", "class", "optional", "for"]));
  }
}), ka = "dodo-textinput-error", Ma = "dodo-textinput-input", Ca = {
  error: ka,
  input: Ma
}, Ba = {
  $style: Ca
}, Sa = /* @__PURE__ */ E(wa, [["__cssModules", Ba]]), _a = ["id", "placeholder", "disabled", "name", "autofocus", "rows", "autocomplete"], Va = /* @__PURE__ */ _({
  __name: "Textarea",
  props: /* @__PURE__ */ ze({
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
    const o = i, e = Ie(i, "modelValue"), r = w(null), s = w(o.minRows);
    function l() {
      const u = o.maxRows && o.maxRows > 0 ? o.maxRows : 12, t = o.minRows && o.minRows > 0 ? o.minRows : 4, c = r.value;
      if (!c)
        return t;
      let y = t;
      for (c.style.overflow = "hidden", c.setAttribute("rows", `${y}`); c.scrollHeight > c.offsetHeight && y < u; )
        c.setAttribute("rows", `${++y}`);
      return c.style.overflow = "", y;
    }
    function p() {
      s.value = l(), n.value || window.requestAnimationFrame(p);
    }
    const n = w(!1);
    return ee(p), oe(() => {
      n.value = !0;
    }), (u, t) => (a(), V(fe, {
      label: u.label,
      error: u.error,
      description: u.description,
      class: m(u.error && u.$style.error),
      optional: u.optional,
      for: u.id ?? void 0
    }, {
      default: b(({ entryId: c }) => [
        te($("textarea", {
          id: u.id ?? c,
          ref_key: "textarea",
          ref: r,
          "onUpdate:modelValue": t[0] || (t[0] = (y) => e.value = y),
          class: m(["dodo-formfield", u.$style.textarea]),
          placeholder: u.placeholder,
          disabled: u.disabled,
          name: u.name,
          autofocus: u.autofocus,
          rows: s.value,
          autocomplete: u.autocomplete,
          resize: "false"
        }, null, 10, _a), [
          [Ve, e.value]
        ])
      ]),
      _: 1
    }, 8, ["label", "error", "description", "class", "optional", "for"]));
  }
}), za = "dodo-textarea", Ia = "dodo-textarea-error", Ea = {
  textarea: za,
  error: Ia
}, Aa = {
  $style: Ea
}, yr = /* @__PURE__ */ E(Va, [["__cssModules", Aa]]), Fa = /* @__PURE__ */ _({
  __name: "Tooltip",
  props: {
    text: {},
    disabled: { type: Boolean },
    side: {}
  },
  setup(i) {
    const o = i, e = w(!1), r = w(""), s = w(), l = w(), p = re(), n = B(() => o.disabled || !(o.text || p["tooltip-text"]));
    oe(t);
    async function u() {
      if (e.value || n.value)
        return;
      e.value = !0, await Se();
      const c = s.value.getBoundingClientRect(), y = l.value.getBoundingClientRect();
      o.side, c.bottom + y.height < window.innerHeight;
      let C = (c.right + c.left - y.width) / 2, F = c.bottom;
      o.side === "right" ? (C = c.right, F = (c.bottom + c.top - y.height) / 2) : o.side === "top" ? (C = (c.left + c.right - y.width) / 2, F = c.top - y.height) : o.side === "left" && (C = c.left - y.width, F = (c.bottom + c.top - y.height) / 2), F = Math.round(Math.max(Math.min(F, window.innerHeight - y.height), 0)), C = Math.round(Math.max(Math.min(C, window.innerWidth - y.width), 0)), r.value = `left:${C}px;top:${F}px`;
    }
    function t() {
      e.value = !1;
    }
    return (c, y) => (a(), v("div", {
      ref_key: "trigger",
      ref: s,
      class: m(c.$style.trigger),
      onMouseover: u,
      onMouseleave: t
    }, [
      h(c.$slots, "default"),
      e.value ? (a(), V(Be, {
        key: 0,
        to: "body"
      }, [
        $("div", {
          ref_key: "tooltip",
          ref: l,
          class: m(c.$style.Tooltip),
          style: G(r.value)
        }, [
          $("div", {
            class: m(c.$style.content)
          }, [
            $("small", {
              class: m(c.$style.text)
            }, [
              h(c.$slots, "tooltip-text", {}, () => [
                T(A(c.text), 1)
              ])
            ], 2)
          ], 2)
        ], 6)
      ])) : M("", !0)
    ], 34));
  }
}), Ta = "dodo-tooltip", Na = "dodo-tooltip-content", Ra = "dodo-tooltip-text", Da = "dodo-tooltip-trigger", La = {
  Tooltip: Ta,
  content: Na,
  text: Ra,
  trigger: Da
}, Ha = {
  $style: La
}, ye = /* @__PURE__ */ E(Fa, [["__cssModules", Ha]]);
export {
  Ua as Animated,
  Wa as Avatar,
  K as Button,
  uo as Card,
  we as Checkbox,
  Ya as Chip,
  U as Column,
  xa as CrashDialog,
  er as Datatable,
  ct as Dialog,
  Ne as Dropdown,
  Bt as Field,
  or as FluidGrid,
  tr as Form,
  fe as FormItem,
  sr as Grid,
  W as Icon,
  lr as Input,
  nr as Label,
  bs as MenuItem,
  ar as Modal,
  rr as NavBar,
  Ce as NavBarItem,
  ir as NavBarNew,
  dr as NavItem,
  se as Row,
  Hl as ScrollContainer,
  cr as Select,
  ur as SelectButtons,
  pr as SimpleSelect,
  mr as SocialIcon,
  Qn as Spinner,
  vr as Stepper,
  fr as Tabs,
  Sa as TextInput,
  yr as Textarea,
  ye as Tooltip,
  Qa as ValidationError,
  Ka as crashPlugin,
  Fe as crashServiceKey,
  po as dropdownServiceKey,
  Ee as navBarServiceKey,
  Ga as parseColor,
  fo as useCrashService,
  Za as useCurrentTheme,
  Pa as useElementSize,
  Ja as useResizeObserver,
  Ae as useScreenSize,
  yo as useServiceFactory,
  mo as useSessionStoredRef,
  Z as useTheme,
  Xa as useValidation,
  vo as useWebFont
};
