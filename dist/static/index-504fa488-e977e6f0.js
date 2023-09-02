import {
  ar as ut,
  as as pt,
  at as ht,
  au as ft,
  r as u,
  av as de,
  aw as Te,
  ax as te,
  u as q,
  ay as Tn,
  s as B,
  az as mt,
  j as e,
  P as ue,
  z as pe,
  aA as ie,
  R as _e,
  aB as Me,
  aC as L,
  aD as xt,
  ag as se,
  aE as gt,
  aF as Mn,
  aG as ee,
  af as bt,
  l as Pe,
  aH as vt,
  C as Z,
  F as O,
  T as D,
  ao as kn,
  e as E,
  B as W,
  w as On,
  aI as we,
  ah as jt,
  aJ as yt,
  U as _t,
  aK as Pt,
  aL as wt,
  aM as St,
  x as It,
  t as zn,
  aN as Ct,
  aO as Et,
  aP as Dt,
  aQ as Rt,
  aR as oe,
  f as ke,
  b as Oe,
  A as Tt,
  aS as Mt,
  aT as kt,
  aU as Ot,
  aV as Q,
  aW as zt,
  aX as Lt,
  aY as ae,
  W as At,
  aZ as ze,
  a_ as $,
  v as H,
  a$ as Bt,
  b0 as he,
  h as Ln,
  S as An,
  b1 as Wt,
  b2 as Nt,
  D as $t,
  b3 as Ft,
  b4 as Ht,
  p as Le,
  b5 as Vt,
  b6 as Ut,
  b7 as Ve,
  b8 as fe,
  b9 as Bn,
  ba as Gt,
  bb as Wn,
  g as Kt,
  bc as Xt,
  bd as Se,
  be as Nn,
  bf as Yt,
  bg as Jt,
  d as qt,
  bh as Zt,
  bi as Qt,
  bj as $n,
  bk as es,
  J as U,
  O as V,
  a3 as G,
  q as ns,
  aa as Fn,
  bl as ts,
  bm as Hn,
  bn as Ie,
  bo as ss,
  bp as os,
  bq as Vn,
  br as Ue,
  bs as as,
  bt as Un,
  bu as rs,
  bv as is,
  bw as ls,
  bx as Ae,
  by as cs,
  bz as ds,
  bA as Ce,
  bB as us,
  bC as ps,
  bD as be,
  bE as hs,
  bF as fs,
  bG as ms,
  bH as xs,
  bI as gs,
  bJ as bs,
  K as vs,
  M as Ge,
  bK as Be,
  bL as js,
  bM as ys,
  bN as _s,
  bO as ve,
  H as Ps,
  bP as Ke,
  bQ as Ee,
  bR as Gn,
  a6 as ws,
  bS as Ss,
  bT as Is,
  bU as We,
  bV as Cs,
  bW as Es,
  bX as Ds,
  bY as Kn,
  bZ as Rs,
  b_ as Ts,
  b$ as De,
  c0 as Ms,
  c1 as ks,
  c2 as Os,
  c3 as zs,
  a as Ls,
  c4 as As,
  c5 as Bs,
  c6 as Ws,
  c7 as Ns,
  c8 as $s,
  c9 as Xe,
  X as Fs,
  Y as Hs,
  ca as Xn,
  cb as Yn,
  cc as Jn,
  cd as qn,
  ce as Vs,
  cf as Re,
  cg as Us,
  ch as Gs,
  ci as Ks,
  cj as je,
} from './sanity-bc09dbe8.js';
import { H as Xs, J as Ys } from './index-ffc1c3cc.js';
function Zn(t, n) {
  var s = typeof n == 'object';
  return new Promise(function (a, o) {
    var i = new ut({
      next: function (r) {
        a(r), i.unsubscribe();
      },
      error: o,
      complete: function () {
        s ? a(n.defaultValue) : o(new pt());
      },
    });
    t.subscribe(i);
  });
}
function Js() {
  return ht(function (t, n) {
    var s,
      a = !1;
    t.subscribe(
      ft(n, function (o) {
        var i = s;
        (s = o), a && n.next([i, o]), (a = !0);
      })
    );
  });
}
const Ne = (t) => {
    const { actions: n, children: s, actionProps: a, onActionComplete: o } = t;
    return e.jsx(Nn, { onReset: o, hooks: n, args: a, children: s });
  },
  qs = (t) => {
    const { badges: n, children: s, badgeProps: a, ...o } = t;
    return e.jsx(Nn, { ...o, hooks: n, args: a, children: s });
  },
  Zs = [];
function Qs(t) {
  const {
      children: n,
      flatIndex: s,
      index: a,
      params: o,
      payload: i,
      siblingIndex: r,
    } = t,
    { navigate: l, navigateIntent: c } = de(),
    d = Te(),
    { panes: h, expand: p } = Le(),
    f = u.useMemo(
      () => (d == null ? void 0 : d.panes) || Zs,
      [d == null ? void 0 : d.panes]
    ),
    g = u.useMemo(() => (h == null ? void 0 : h[h.length - 2]), [h]),
    m = a - 1,
    b = u.useCallback(
      (v) => {
        const j = f[m] || [],
          w = j[r],
          C = v(j, w),
          S = [...f.slice(0, m), C, ...f.slice(m + 1)],
          I = { ...(d || {}), panes: S };
        return setTimeout(() => l(I), 0), I;
      },
      [m, l, f, d, r]
    ),
    _ = u.useCallback(
      (v) => {
        b((j, w) => [
          ...j.slice(0, r),
          { ...w, payload: v },
          ...j.slice(r + 1),
        ]);
      },
      [b, r]
    ),
    y = u.useCallback(
      (v) => {
        b((j, w) => [...j.slice(0, r), { ...w, params: v }, ...j.slice(r + 1)]);
      },
      [b, r]
    ),
    x = u.useCallback(
      (v) => {
        let { id: j, parentRefPath: w, type: C, template: S } = v;
        l({
          panes: [
            ...f.slice(0, m + 1),
            [
              {
                id: j,
                params: { template: S.id, parentRefPath: Yt(w), type: C },
                payload: S.params,
              },
            ],
          ],
        });
      },
      [m, l, f]
    ),
    P = u.useMemo(
      () => ({
        index: s,
        groupIndex: m,
        siblingIndex: r,
        payload: i,
        params: o,
        hasGroupSiblings: f[m] ? f[m].length > 1 : !1,
        groupLength: f[m] ? f[m].length : 0,
        routerPanesState: f,
        ChildLink: Jt,
        BackLink: qt,
        ReferenceChildLink: Zt,
        handleEditReference: x,
        ParameterizedLink: Qt,
        replaceCurrent: function () {
          let v =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          b(() => [
            { id: v.id || '', payload: v.payload, params: v.params || {} },
          ]);
        },
        closeCurrent: () => {
          b((v, j) => (v.length > 1 ? v.filter((w) => w !== j) : v));
        },
        closeCurrentAndAfter: function () {
          (arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : !0) &&
            g &&
            p(g.element),
            l({ panes: [...f.slice(0, m)] }, { replace: !0 });
        },
        duplicateCurrent: (v) => {
          b((j, w) => {
            const C = {
              ...w,
              payload: (v == null ? void 0 : v.payload) || w.payload,
              params: (v == null ? void 0 : v.params) || w.params,
            };
            return [...j.slice(0, r), C, ...j.slice(r)];
          });
        },
        setView: (v) => {
          const j = $n(o, 'view');
          return y(v ? { ...j, view: v } : j);
        },
        setParams: y,
        setPayload: _,
        navigateIntent: c,
      }),
      [s, m, r, i, o, f, x, y, _, c, b, g, l, p]
    );
  return e.jsx(es.Provider, { value: P, children: n });
}
function eo(t, n, s, a) {
  var o, i;
  const r = {
      flex: t.left.flex + t.right.flex,
      width: t.left.width + t.right.width,
    },
    l = (o = n.minWidth) != null ? o : Re,
    c = (i = s.minWidth) != null ? i : Re,
    d = Math.min(n.maxWidth || 1 / 0, r.width - c),
    h = Math.min(s.maxWidth || 1 / 0, r.width - l);
  let p = l - t.left.width;
  const f = t.right.width - h;
  p < f && (p = f);
  let g = t.right.width - c;
  const m = d - t.left.width;
  g > m && (g = m);
  const b = Math.min(Math.max(a, p), g),
    _ = t.left.width + b,
    y = t.right.width - b,
    x = (_ / r.width) * r.flex,
    P = (y / r.width) * r.flex;
  return { leftFlex: x, leftW: _, rightFlex: P, rightW: y };
}
function no(t, n) {
  const s = [];
  let a = n;
  for (; a !== t; ) {
    const o = a.parentElement;
    if (!o) return s;
    const r = Array.from(o.childNodes).indexOf(a);
    if ((s.unshift(r), o === t)) return s;
    a = o;
  }
  return s;
}
const Ye = [];
function to(t, n) {
  const s = new WeakMap();
  for (const o of n) s.set(o, no(t, o));
  const a = (o, i) => {
    const r = s.get(o) || Ye,
      l = s.get(i) || Ye,
      c = Math.max(r.length, l.length);
    for (let d = 0; d < c; d += 1) {
      const h = r[d] || -1,
        p = l[d] || -1;
      if (h !== p) return h - p;
    }
    return 0;
  };
  n.sort(a);
}
function so() {
  const t = [],
    n = [],
    s = new WeakMap(),
    a = new Set(),
    o = {};
  let i = null,
    r = 0,
    l = null,
    c = new Map(),
    d = !1;
  function h(x) {
    a.add(x), l === x && (l = null), y();
  }
  function p(x) {
    a.delete(x), (l = x), y();
  }
  function f(x, P) {
    return (
      s.set(x, { ...P, original: P }),
      n.push(x),
      i && to(i, n),
      p(x),
      () => {
        const v = n.indexOf(x);
        v > -1 && n.splice(v, 1), s.delete(x), y();
      }
    );
  }
  function g(x, P, v) {
    var j, w, C, S;
    const I = n.indexOf(P),
      T = s.get(P);
    if (!T) return;
    const k = n[I + 1],
      M = s.get(k);
    if (M) {
      if (
        (x === 'start' &&
          ((d = !0),
          (o.left = { element: P, flex: T.flex || 1, width: P.offsetWidth }),
          (o.right = { element: k, flex: M.flex || 1, width: k.offsetWidth }),
          y()),
        x === 'move' && o.left && o.right)
      ) {
        c = new Map();
        const {
          leftW: R,
          rightW: z,
          leftFlex: N,
          rightFlex: A,
        } = eo(o, T, M, v);
        c.set(P, { flex: N, width: R }), c.set(k, { flex: A, width: z }), y();
      }
      if (x === 'end') {
        d = !1;
        const R = c.get(P),
          z = c.get(k);
        s.set(P, {
          ...T,
          currentMinWidth: 0,
          currentMaxWidth: (j = T.maxWidth) != null ? j : 1 / 0,
          flex: (w = R == null ? void 0 : R.flex) != null ? w : T.flex,
        }),
          s.set(k, {
            ...M,
            currentMinWidth: 0,
            currentMaxWidth: (C = T.maxWidth) != null ? C : 1 / 0,
            flex: (S = z == null ? void 0 : z.flex) != null ? S : M.flex,
          }),
          (c = new Map()),
          delete o.left,
          delete o.right,
          y();
      }
    }
  }
  function m(x) {
    i = x;
  }
  function b(x) {
    (r = x), y();
  }
  function _(x) {
    return (
      t.push(x),
      () => {
        const P = t.push(x);
        P > -1 && t.splice(P, 1);
      }
    );
  }
  return {
    collapse: h,
    expand: p,
    mount: f,
    resize: g,
    setRootElement: m,
    setRootWidth: b,
    subscribe: _,
  };
  function y() {
    var x, P, v, j;
    if (!r) return;
    const w = [];
    for (const R of n) R !== l && w.unshift(R);
    l && w.unshift(l);
    const C = new WeakMap(),
      S = w.length,
      I = w[0],
      T = (S - 1) * je;
    let k = r - T;
    for (const R of w) {
      const z = s.get(R);
      if (!z) continue;
      const N = z.currentMinWidth || z.minWidth || Re,
        A = R === I,
        K = a.has(R),
        xe = N > k,
        re = A ? !1 : K || xe,
        F = c.get(R);
      C.set(R, {
        element: R,
        collapsed: re,
        currentMinWidth:
          (x = F == null ? void 0 : F.width) != null ? x : z.currentMinWidth,
        currentMaxWidth:
          (P = F == null ? void 0 : F.width) != null ? P : z.currentMaxWidth,
        flex:
          (j = (v = F == null ? void 0 : F.flex) != null ? v : z.flex) != null
            ? j
            : 1,
      }),
        re ? (k -= je) : (k -= N - je);
    }
    const M = [];
    for (const R of n) {
      const z = C.get(R);
      z && M.push(z);
    }
    for (const R of t)
      R({
        expandedElement: l || n[n.length - 1] || null,
        panes: M,
        resizing: d,
      });
  }
}
function oo(t) {
  const { children: n, minWidth: s, onCollapse: a, onExpand: o, ...i } = t,
    r = u.useMemo(() => so(), []),
    [l, c] = u.useState(null),
    d = he(l),
    h = (d == null ? void 0 : d.width) || 0,
    p = h === void 0 || !s ? void 0 : h < s,
    [f, g] = u.useState({ expandedElement: null, panes: [], resizing: !1 });
  u.useEffect(() => r.setRootElement(l), [r, l]),
    u.useEffect(() => r.setRootWidth(h), [r, h]),
    u.useEffect(() => r.subscribe(g), [r]),
    u.useEffect(() => {
      p !== void 0 && (p && a && a(), !p && o && o());
    }, [p, a, o]);
  const m = u.useMemo(
    () => ({
      collapse: r.collapse,
      collapsed: p,
      expand: r.expand,
      expandedElement: f.expandedElement,
      mount: r.mount,
      panes: f.panes,
      resize: r.resize,
      resizing: f.resizing,
    }),
    [p, r, f.expandedElement, f.panes, f.resizing]
  );
  return e.jsx(ms.Provider, {
    value: m,
    children: e.jsx(xs, {
      'data-ui': 'PaneLayout',
      ...i,
      'data-collapsed': p ? '' : void 0,
      'data-resizing': f.resizing ? '' : void 0,
      'data-mounted': h ? '' : void 0,
      ref: c,
      children: n,
    }),
  });
}
function ao(t) {
  const { documentId: n, documentType: s, flex: a } = t,
    { collapsed: o } = ke(),
    { closeInspector: i, inspector: r } = L(),
    { features: l } = q(),
    c = u.useCallback(() => {
      r && i(r.name);
    }, [i, r]);
  if (o || !r) return null;
  const d = u.createElement(r.component, {
    onClose: c,
    documentId: n,
    documentType: s,
  });
  return l.resizablePanes
    ? e.jsx(gs, {
        as: 'aside',
        'data-ui': 'DocumentInspectorPanel',
        flex: a,
        maxWidth: bs,
        minWidth: Ce,
        children: d,
      })
    : e.jsx(E, {
        as: 'aside',
        'data-ui': 'DocumentInspectorPanel',
        flex: a,
        children: d,
      });
}
var ro = Object.defineProperty,
  io = (t, n, s) =>
    n in t
      ? ro(t, n, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[n] = s),
  ye = (t, n, s) => (io(t, typeof n != 'symbol' ? n + '' : n, s), s);
class J extends Error {
  constructor(n) {
    let { message: s, context: a, helpId: o, cause: i } = n;
    super(s),
      ye(this, 'cause'),
      ye(this, 'context'),
      ye(this, 'helpId'),
      (this.context = a),
      (this.helpId = o),
      (this.cause = i);
  }
}
const Je = new WeakMap();
function me(t) {
  const n = Je.get(t);
  if (n) return n;
  const s = Us();
  return Je.set(t, s), s;
}
const qe = new WeakMap();
function Qn(t, n) {
  const s = qe.get(t) || new Map();
  if (s) {
    const i = s.get(n);
    if (i) return i;
  }
  const a = t[n];
  if (typeof a != 'function')
    throw new Error(
      'Expected property `'
        .concat(n, '` to be a function but got ')
        .concat(typeof a, ' instead.')
    );
  const o = a.bind(t);
  return s.set(n, o), qe.set(t, s), o;
}
const lo = (t) => !!t && typeof (t == null ? void 0 : t.then) == 'function',
  co = (t) => (te(t) ? typeof t.serialize == 'function' : !1),
  uo = (t) => (n, s, a) => {
    try {
      return t(n, s, a);
    } catch (o) {
      throw o instanceof J
        ? o
        : new J({
            message:
              typeof (o == null ? void 0 : o.message) == 'string'
                ? o.message
                : '',
            context: s,
            cause: o,
          });
    }
  },
  po = (t) =>
    function () {
      return t(...arguments).pipe(Gs(1), Ks());
    };
function et(t) {
  const n = uo(
    po(
      t((s, a, o) => {
        if (!s)
          throw new J({
            message: 'Pane returned no child',
            context: a,
            helpId: 'structure-item-returned-no-child',
          });
        return lo(s) || Ws(s)
          ? Ns(s).pipe(Be((i) => n(i, a, o)))
          : co(s)
          ? n(s.serialize(a), a, o)
          : typeof s == 'function'
          ? n(s(a.id, a), a, o)
          : G(s);
      })
    )
  );
  return n;
}
async function ho(t) {
  const n = new Map(),
    a = et((c) => (d, h, p) => {
      const f = d && ''.concat(me(d), '-').concat(h.path.join('__')),
        g = f && n.get(f);
      if (g) return g;
      const m = c(d, h, p);
      return f && n.set(f, m), m;
    }),
    o = [
      [
        {
          id: '__edit__'.concat(t.params.id),
          params: { ...$n(t.params, ['id']), type: t.params.type },
          payload: t.payload,
        },
      ],
    ];
  async function i(c) {
    let {
      currentId: d,
      flatIndex: h,
      intent: p,
      params: f,
      parent: g,
      path: m,
      payload: b,
      unresolvedPane: _,
      levelIndex: y,
      structureContext: x,
    } = c;
    var P;
    if (!_) return [];
    const { id: v, type: j, ...w } = f,
      S = await Zn(
        a(
          _,
          {
            id: d,
            splitIndex: 0,
            parent: g,
            path: m,
            index: h,
            params: {},
            payload: void 0,
            structureContext: x,
          },
          h
        )
      );
    return S.type === 'document' && S.id === v
      ? [
          {
            panes: [
              ...m.slice(0, m.length - 1).map((I) => [{ id: I }]),
              [{ id: v, params: w, payload: b }],
            ],
            depthIndex: m.length,
            levelIndex: y,
          },
        ]
      : ((P = S.canHandleIntent) != null &&
          P.call(S, p, f, { pane: S, index: h })) ||
        (S.type === 'documentList' &&
          S.schemaTypeName === j &&
          S.options.filter === '_type == $type')
      ? [
          {
            panes: [
              ...m.map((I) => [{ id: I }]),
              [{ id: f.id, params: w, payload: b }],
            ],
            depthIndex: m.length,
            levelIndex: y,
          },
        ]
      : S.type === 'list' && S.child && S.items
      ? (
          await Promise.all(
            S.items.map((I, T) =>
              I.type === 'divider'
                ? Promise.resolve([])
                : i({
                    currentId: I._id || I.id,
                    flatIndex: h + 1,
                    intent: p,
                    params: f,
                    parent: S,
                    path: [...m, I.id],
                    payload: b,
                    unresolvedPane:
                      typeof S.child == 'function' ? Qn(S, 'child') : S.child,
                    levelIndex: T,
                    structureContext: x,
                  })
            )
          )
        ).flat()
      : [];
  }
  const l = (
    await i({
      currentId: 'root',
      flatIndex: 0,
      levelIndex: 0,
      intent: t.intent,
      params: t.params,
      parent: null,
      path: [],
      payload: t.payload,
      unresolvedPane: t.rootPaneNode,
      structureContext: t.structureContext,
    })
  ).sort((c, d) =>
    c.depthIndex === d.depthIndex
      ? c.levelIndex - d.levelIndex
      : c.depthIndex - d.depthIndex
  )[0];
  return l ? l.panes : o;
}
const fo = (t, n) => {
  const s = t.replace(/^__edit__/, ''),
    {
      params: a,
      payload: o,
      structureContext: { resolveDocumentNode: i },
    } = n,
    { type: r, template: l } = a;
  if (!r)
    throw new Error(
      'Document type for document with ID '.concat(
        s,
        ' was not provided in the router params.'
      )
    );
  let c = i({ schemaType: r, documentId: s }).id('editor');
  return l && (c = c.initialValueTemplate(l, o)), c.serialize();
};
function mo(t) {
  var n, s;
  return 'contextHash('.concat(
    JSON.stringify({
      id: t.id,
      parentId: parent && me(parent),
      path: t.path,
      index: t.index,
      splitIndex: t.splitIndex,
      serializeOptionsIndex:
        (n = t.serializeOptions) == null ? void 0 : n.index,
      serializeOptionsPath: (s = t.serializeOptions) == null ? void 0 : s.path,
    }),
    ')'
  );
}
const Ze = (t) => {
  const n = {
    type: t.type,
    id: t.routerPaneSibling.id,
    params: t.routerPaneSibling.params || {},
    payload: t.routerPaneSibling.payload || null,
    flatIndex: t.flatIndex,
    groupIndex: t.groupIndex,
    siblingIndex: t.siblingIndex,
    path: t.path,
    paneNode: t.type === 'resolvedMeta' ? me(t.paneNode) : null,
  };
  return 'metaHash('.concat(JSON.stringify(n), ')');
};
function le(t) {
  let {
    unresolvedPane: n,
    flattenedRouterPanes: s,
    parent: a,
    path: o,
    resolvePane: i,
    structureContext: r,
  } = t;
  const [l, ...c] = s,
    d = c[0],
    h = {
      id: l.routerPaneSibling.id,
      splitIndex: l.siblingIndex,
      parent: a,
      path: [...o, l.routerPaneSibling.id],
      index: l.flatIndex,
      params: l.routerPaneSibling.params || {},
      payload: l.routerPaneSibling.payload,
      structureContext: r,
    };
  try {
    return i(n, h, l.flatIndex).pipe(
      Be((p) => {
        const f = { type: 'resolvedMeta', ...l, paneNode: p, path: h.path },
          g = c.map((b, _) => ({
            type: 'loading',
            path: [
              ...h.path,
              ...c.slice(_).map((P, v) => '['.concat(b.flatIndex + v, ']')),
            ],
            paneNode: null,
            ...b,
          }));
        if (!c.length) return G([f]);
        let m;
        return (
          d != null && d.routerPaneSibling.id.startsWith('__edit__')
            ? (m = le({
                unresolvedPane: fo,
                flattenedRouterPanes: c,
                parent: a,
                path: h.path,
                resolvePane: i,
                structureContext: r,
              }))
            : l.groupIndex === (d == null ? void 0 : d.groupIndex)
            ? (m = le({
                unresolvedPane: n,
                flattenedRouterPanes: c,
                parent: a,
                path: o,
                resolvePane: i,
                structureContext: r,
              }))
            : (m = le({
                unresolvedPane:
                  typeof p.child == 'function' ? Qn(p, 'child') : p.child,
                flattenedRouterPanes: c,
                parent: p,
                path: h.path,
                resolvePane: i,
                structureContext: r,
              })),
          Fn(G([f, ...g]), m.pipe(U((b) => [f, ...b])))
        );
      })
    );
  } catch (p) {
    if (
      p instanceof J &&
      (p.context &&
        console.warn(
          'Pane resolution error at index '
            .concat(p.context.index)
            .concat(
              p.context.splitIndex > 0
                ? ' for split pane index '.concat(p.context.splitIndex)
                : '',
              ': '
            )
            .concat(p.message)
            .concat(p.helpId ? ' - see '.concat(Gn(p.helpId)) : ''),
          p
        ),
      p.helpId === 'structure-item-returned-no-child')
    )
      return G([]);
    throw p;
  }
}
function xo(t) {
  let {
    routerPanesStream: n,
    rootPaneNode: s,
    initialCacheState: a = {
      cacheKeysByFlatIndex: [],
      flattenedRouterPanes: [],
      resolvedPaneCache: new Map(),
      resolvePane: () => $s,
    },
    structureContext: o,
  } = t;
  return n
    .pipe(
      U((r) => [[{ id: 'root' }], ...r]),
      U((r) =>
        r
          .flatMap((c, d) =>
            c.map((h, p) => ({
              routerPaneSibling: h,
              groupIndex: d,
              siblingIndex: p,
            }))
          )
          .map((c, d) => ({ ...c, flatIndex: d }))
      ),
      vs([]),
      Js(),
      U((r) => {
        let [l, c] = r;
        for (let d = 0; d < c.length; d++) {
          const h = l[d],
            p = c[d];
          if (!_e(h, p)) return { flattenedRouterPanes: c, diffIndex: d };
        }
        return { flattenedRouterPanes: c, diffIndex: c.length };
      }),
      Ge((r, l) => {
        const { cacheKeysByFlatIndex: c, resolvedPaneCache: d } = r,
          { flattenedRouterPanes: h, diffIndex: p } = l,
          f = c.slice(0, p + 1),
          g = c.slice(p + 1),
          m = new Set(f.flatMap((y) => Array.from(y))),
          b = g.flatMap((y) => Array.from(y)).filter((y) => !m.has(y));
        for (const y of b) d.delete(y);
        return {
          flattenedRouterPanes: h,
          cacheKeysByFlatIndex: c,
          resolvedPaneCache: d,
          resolvePane: et((y) => (x, P, v) => {
            const j = x && ''.concat(me(x), '-').concat(mo(P)),
              w = j && d.get(j);
            if (w) return w;
            const C = y(x, P, v);
            if (!j) return C;
            const S = c[v] || new Set();
            return S.add(j), (c[v] = S), d.set(j, C), C;
          }),
        };
      }, a),
      Be((r) => {
        let { flattenedRouterPanes: l, resolvePane: c } = r;
        return le({
          unresolvedPane: s,
          flattenedRouterPanes: l,
          parent: null,
          path: [],
          resolvePane: c,
          structureContext: o,
        });
      })
    )
    .pipe(
      Ge(
        (r, l) =>
          l.map((c, d) => {
            const h = r[d];
            return !h || c.type !== 'loading'
              ? c
              : h.routerPaneSibling.id === c.routerPaneSibling.id
              ? h
              : c;
          }),
        []
      ),
      js((r, l) => {
        if (r.length !== l.length) return !1;
        for (let c = 0; c < l.length; c++) {
          const d = r[c],
            h = l[c];
          if (Ze(d) !== Ze(h)) return !1;
        }
        return !0;
      })
    );
}
function go() {
  const t = u.useMemo(() => new ys(1), []),
    n = u.useMemo(
      () =>
        t.asObservable().pipe(U((a) => (a == null ? void 0 : a.panes) || [])),
      [t]
    ),
    { state: s } = de();
  return (
    u.useEffect(() => {
      t.next(s);
    }, [s, t]),
    n
  );
}
function bo() {
  const [t, n] = u.useState();
  if (t) throw t;
  const { structureContext: s, rootPaneNode: a } = q(),
    [o, i] = u.useState({
      paneDataItems: [],
      resolvedPanes: [],
      routerPanes: [],
    }),
    r = go();
  return (
    u.useEffect(() => {
      const c = xo({
        rootPaneNode: a,
        routerPanesStream: r,
        structureContext: s,
      })
        .pipe(
          U((d) => {
            const h = d.reduce((g, m) => {
                const b = g[m.groupIndex] || [];
                return (
                  (b[m.siblingIndex] = m.routerPaneSibling),
                  (g[m.groupIndex] = b),
                  g
                );
              }, []),
              p = h.length,
              f = d.map((g) => {
                var m;
                const {
                    groupIndex: b,
                    flatIndex: _,
                    siblingIndex: y,
                    routerPaneSibling: x,
                    path: P,
                  } = g,
                  v = x.id,
                  j = h[b + 1];
                return {
                  active: b === p - 2,
                  childItemId:
                    (m = j == null ? void 0 : j[0].id) != null ? m : null,
                  index: _,
                  itemId: x.id,
                  groupIndex: b,
                  key: ''
                    .concat(
                      g.type === 'loading' ? 'unknown' : g.paneNode.id,
                      '-'
                    )
                    .concat(v, '-')
                    .concat(y),
                  pane: g.type === 'loading' ? Se : g.paneNode,
                  params: x.params || {},
                  path: P.join(';'),
                  payload: x.payload,
                  selected: _ === d.length - 1,
                  siblingIndex: y,
                };
              });
            return {
              paneDataItems: f,
              routerPanes: h,
              resolvedPanes: f.map((g) => g.pane),
            };
          })
        )
        .subscribe({ next: (d) => i(d), error: (d) => n(d) });
      return () => c.unsubscribe();
    }, [a, r, s]),
    o
  );
}
async function vo(t, n, s) {
  if (n && s) return { id: n, type: s };
  if (!n && s) return { id: _s(), type: s };
  if (n && !s) {
    const a = await Zn(t.resolveTypeForDocument(n));
    return { id: n, type: a };
  }
  throw new J({
    message:
      'Neither document `id` or `type` was provided when trying to resolve intent.',
  });
}
const jo = {},
  yo = u.memo(function () {
    const { navigate: n } = de(),
      s = Te(
        u.useCallback((c) => {
          const d = typeof c.intent == 'string' ? c.intent : void 0;
          return d
            ? {
                intent: d,
                params: te(c.params) ? c.params : jo,
                payload: c.payload,
              }
            : void 0;
        }, [])
      ),
      { rootPaneNode: a, structureContext: o } = q(),
      i = Tn(),
      [r, l] = u.useState(null);
    if (r) throw r;
    return (
      u.useEffect(() => {
        if (s) {
          const { intent: c, params: d, payload: h } = s;
          let p = !1;
          async function f() {
            const { id: g, type: m } = await vo(
              i,
              typeof d.id == 'string' ? d.id : void 0,
              typeof d.type == 'string' ? d.type : void 0
            );
            if (p) return;
            const b = await ho({
              intent: c,
              params: { ...d, id: g, type: m },
              payload: h,
              rootPaneNode: a,
              structureContext: o,
            });
            p || n({ panes: b }, { replace: !0 });
          }
          return (
            f().catch(l),
            () => {
              p = !0;
            }
          );
        }
      }, [i, s, n, a, o]),
      null
    );
  });
var Qe = Object.freeze,
  _o = Object.defineProperty,
  Po = (t, n) => Qe(_o(t, 'raw', { value: Qe(n || t.slice()) })),
  en;
const wo = B.span(
  en ||
    (en = Po([
      `
  &:not(:last-child)::after {
    content: ' ➝ ';
    opacity: 0.5;
  }
`,
    ]))
);
function So(t) {
  return t
    .replace(
      /\(\.\.\.\)\./g,
      `(...)
  .`
    )
    .replace(/__WEBPACK_IMPORTED_MODULE_\d+_+/g, '')
    .replace(/___default\./g, '.')
    .replace(
      new RegExp(' \\(https?:\\/\\/'.concat(window.location.host), 'g'),
      ' ('
    );
}
function Io(t) {
  let { error: n } = t;
  if (!(n instanceof J)) throw n;
  const { cause: s } = n,
    a = (s == null ? void 0 : s.stack) || n.stack,
    o = a && !(s instanceof ve) && !n.message.includes('Module build failed:'),
    i = s instanceof ve ? s.path : [],
    r = (s instanceof ve && s.helpId) || n.helpId,
    l = u.useCallback(() => {
      window.location.reload();
    }, []);
  return e.jsx(V, {
    height: 'fill',
    overflow: 'auto',
    padding: 4,
    sizing: 'border',
    tone: 'critical',
    children: e.jsxs(Z, {
      children: [
        e.jsx(Ps, {
          as: 'h2',
          children: 'Encountered an error while reading structure',
        }),
        e.jsxs(V, {
          marginTop: 4,
          padding: 4,
          radius: 2,
          overflow: 'auto',
          shadow: 1,
          tone: 'inherit',
          children: [
            i.length > 0 &&
              e.jsxs(H, {
                space: 2,
                children: [
                  e.jsx(Ke, { children: 'Structure path' }),
                  e.jsx(Ee, {
                    children: i
                      .slice(1)
                      .map((c, d) =>
                        e.jsx(wo, { children: c }, ''.concat(c, '-').concat(d))
                      ),
                  }),
                ],
              }),
            e.jsxs(H, {
              marginTop: 4,
              space: 2,
              children: [
                e.jsx(Ke, { children: 'Error' }),
                e.jsx(Ee, { children: o ? So(a) : n.message }),
              ],
            }),
            r &&
              e.jsx(E, {
                marginTop: 4,
                children: e.jsx(D, {
                  children: e.jsx('a', {
                    href: Gn(r),
                    rel: 'noopener noreferrer',
                    target: '_blank',
                    children: 'View documentation',
                  }),
                }),
              }),
            e.jsx(E, {
              marginTop: 4,
              children: e.jsx(W, {
                text: 'Reload',
                icon: On,
                tone: 'primary',
                onClick: l,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function Co(t) {
  const { isSelected: n, pane: s, paneKey: a } = t,
    o = (te(s) && s.type) || null;
  return e.jsxs(ue, {
    id: a,
    selected: n,
    children: [
      e.jsx(Oe, { title: 'Unknown pane type' }),
      e.jsx(pe, {
        children: e.jsx(E, {
          padding: 4,
          children:
            typeof o == 'string'
              ? e.jsxs(D, {
                  as: 'p',
                  muted: !0,
                  children: [
                    'Structure item of type ',
                    e.jsx('code', { children: o }),
                    ' is not a known entity.',
                  ],
                })
              : e.jsxs(D, {
                  as: 'p',
                  muted: !0,
                  children: [
                    'Structure item is missing required ',
                    e.jsx('code', { children: 'type' }),
                    ' property.',
                  ],
                }),
        }),
      }),
    ],
  });
}
function Eo(t) {
  const n = [
      { ms: 300, message: 'Loading…' },
      { ms: 5e3, message: 'Still loading…' },
    ],
    s = G(null);
  return ws(
    ...n.map((a) => {
      let { ms: o, message: i } = a;
      return s.pipe(Ss(i), Is(o));
    })
  );
}
var nn = Object.freeze,
  Do = Object.defineProperty,
  Ro = (t, n) => nn(Do(t, 'raw', { value: nn(n || t.slice()) })),
  tn;
const To = 'Loading…',
  Mo = B(O)(
    tn ||
      (tn = Ro([
        `
  opacity: 0;
  transition: opacity 200ms;

  &[data-mounted] {
    opacity: 1;
  }
`,
      ]))
  ),
  ne = u.memo((t) => {
    const {
        delay: n = 300,
        flex: s,
        message: a = Eo,
        minWidth: o,
        paneKey: i,
        path: r,
        selected: l,
        title: c,
        tone: d,
      } = t,
      h = u.useMemo(
        () => (typeof a == 'function' ? a(r ? r.split(';') : []) : a),
        [a, r]
      ),
      [p, f] = u.useState(() => (typeof h == 'string' ? h : To));
    u.useEffect(() => {
      if (typeof h != 'object' || typeof h.subscribe == 'function') return;
      const x = h.subscribe(f);
      return () => x.unsubscribe();
    }, [h]);
    const [g, m] = u.useState(null),
      [b, _] = u.useState(!1);
    u.useEffect(() => {
      if (g) return mt(() => _(!0));
    }, [g]);
    const y = e.jsxs(Mo, {
      align: 'center',
      'data-mounted': b ? '' : void 0,
      direction: 'column',
      height: 'fill',
      justify: 'center',
      ref: m,
      children: [
        e.jsx(zn, { muted: !0 }),
        (c || p) &&
          e.jsx(E, {
            marginTop: 3,
            children: e.jsx(D, {
              align: 'center',
              muted: !0,
              size: 1,
              children: c || p,
            }),
          }),
      ],
    });
    return e.jsx(ue, {
      flex: s,
      id: i,
      minWidth: o,
      selected: l,
      tone: d,
      children: e.jsx(pe, { children: y }),
    });
  });
ne.displayName = 'LoadingPane';
const ko = {
    component: u.lazy(() =>
      ie(
        () => import('./index-e4d880cb-a957b027.js'),
        ['static/index-e4d880cb-a957b027.js', 'static/sanity-bc09dbe8.js']
      )
    ),
    document: u.lazy(() =>
      ie(
        () => import('./index-1dce9e00-abadd703.js'),
        [
          'static/index-1dce9e00-abadd703.js',
          'static/sanity-bc09dbe8.js',
          'static/index-ffc1c3cc.js',
        ]
      )
    ),
    documentList: u.lazy(() =>
      ie(
        () => import('./index-cdcf967d-4057d188.js'),
        [
          'static/index-cdcf967d-4057d188.js',
          'static/sanity-bc09dbe8.js',
          'static/PaneItem-cc425889-7ee349fe.js',
          'static/index-ffc1c3cc.js',
        ]
      )
    ),
    list: u.lazy(() =>
      ie(
        () => import('./index-181eb65d-be6a7727.js'),
        [
          'static/index-181eb65d-be6a7727.js',
          'static/sanity-bc09dbe8.js',
          'static/PaneItem-cc425889-7ee349fe.js',
        ]
      )
    ),
  },
  Oo = u.memo(
    function (n) {
      const {
          active: s,
          childItemId: a,
          groupIndex: o,
          index: i,
          itemId: r,
          pane: l,
          paneKey: c,
          params: d,
          payload: h,
          path: p,
          selected: f,
          siblingIndex: g,
        } = n,
        m = ko[l.type] || Co;
      return e.jsx(Qs, {
        flatIndex: i,
        index: o,
        params: d,
        payload: h,
        siblingIndex: g,
        children: e.jsx(u.Suspense, {
          fallback: e.jsx(ne, { paneKey: c, path: p, selected: f }),
          children: e.jsx(m, {
            childItemId: a || '',
            index: i,
            itemId: r,
            isActive: s,
            isSelected: f,
            paneKey: c,
            pane: l,
          }),
        }),
      });
    },
    (t, n) => {
      let { params: s = {}, payload: a = null, ...o } = t,
        { params: i = {}, payload: r = null, ...l } = n;
      if (!_e(s, i) || !_e(a, r)) return !1;
      const c = new Set([...Object.keys(o), ...Object.keys(l)]);
      for (const d of c) if (o[d] !== l[d]) return !1;
      return !0;
    }
  );
function nt(t) {
  const {
    children: n,
    currentMinWidth: s,
    flex: a,
    minWidth: o,
    paneKey: i,
    title: r = 'Error',
    tone: l = 'critical',
  } = t;
  return e.jsxs(ue, {
    currentMinWidth: s,
    flex: a,
    id: i,
    minWidth: o,
    tone: l,
    children: [
      e.jsx(Oe, { title: r }),
      e.jsx(pe, {
        overflow: 'auto',
        children: e.jsx(E, { paddingX: 4, paddingY: 5, children: n }),
      }),
    ],
  });
}
function zo(t) {
  return t === 'delete'
    ? `An error occurred while attempting to delete this document.
      This usually means that there are other documents that refers to it.`
    : t === 'unpublish'
    ? `An error occurred while attempting to unpublish this document.
      This usually means that there are other documents that refers to it.`
    : 'An error occurred during '.concat(t);
}
function Lo(t) {
  return t === 'publish'
    ? 'The document was published'
    : t === 'unpublish'
    ? 'The document was unpublished. A draft has been created from the latest published version.'
    : t === 'discardChanges'
    ? 'All changes since last publish has now been discarded. The discarded draft can still be recovered from history'
    : t === 'delete'
    ? 'The document was successfully deleted'
    : 'Successfully performed '.concat(t, ' on document');
}
const Ao = ['patch', 'commit'],
  Bo = u.memo(function () {
    const { push: n } = Me(),
      { documentId: s, documentType: a } = L(),
      o = xt(s, a),
      i = u.useRef(o),
      r = se();
    return (
      u.useEffect(() => {
        if (!o || o === i.current) return;
        let l;
        return (
          o.type === 'error' &&
            n({
              closable: !0,
              duration: 3e4,
              status: 'error',
              title: zo(o.op),
              description: e.jsxs('details', {
                children: [
                  e.jsx('summary', { children: 'Details' }),
                  o.error.message,
                ],
              }),
            }),
          o.type === 'success' &&
            !Ao.includes(o.op) &&
            n({ closable: !0, status: 'success', title: Lo(o.op) }),
          o.type === 'success' &&
            o.op === 'delete' &&
            (l = setTimeout(() => r.closeCurrentAndAfter(), 0)),
          (i.current = o),
          () => clearTimeout(l)
        );
      }, [o, r, n]),
      null
    );
  });
function Wo(t, n, s) {
  const a = gt(),
    [o, i] = u.useState(s),
    r = u.useMemo(() => a.forNamespace('desk-tool'), [a]),
    l = u.useMemo(
      () => (t ? r.forNamespace(t).forKey(n) : r.forKey(n)),
      [r, t, n]
    );
  u.useEffect(() => {
    const d = l.listen(s).subscribe({ next: i });
    return () => (d == null ? void 0 : d.unsubscribe());
  }, [s, n, t, l]);
  const c = u.useCallback(
    (d) => {
      i(d), l.set(d);
    },
    [l]
  );
  return u.useMemo(() => [o, c], [c, o]);
}
const X = { id: 'parsed', title: 'Parsed' },
  Y = { id: 'raw', title: 'Raw JSON' },
  No = [X, Y],
  ce = Xs(1e3);
function tt(t, n) {
  const s = ce.get(t);
  return s === void 0 ? (ce.set(t, Array.isArray(n) || te(n)), tt(t, n)) : s;
}
function $o(t) {
  const { path: n } = t,
    s = ce.get(n);
  s !== void 0 && ce.set(n, !s);
}
function st(t) {
  const n = window.getSelection();
  if (n) {
    const s = document.createRange();
    n.removeAllRanges(), s.selectNodeContents(t), n.addRange(s);
  }
}
function sn(t) {
  st(t.currentTarget);
}
function Fo(t) {
  t.keyCode === 65 &&
    (t.metaKey || t.ctrlKey) &&
    (t.preventDefault(), st(t.currentTarget));
}
function Ho(t) {
  return te(t) && Xe(t._id) && Xe(t._type);
}
var on = Object.freeze,
  Vo = Object.defineProperty,
  Uo = (t, n) => on(Vo(t, 'raw', { value: on(n || t.slice()) })),
  an;
const Go = B.div((t) => {
  let { theme: n } = t;
  const { color: s, fonts: a, space: o } = n.sanity;
  return Mn(
    an ||
      (an = Uo([
        `
    & .json-inspector,
    & .json-inspector .json-inspector__selection {
      font-family: `,
        `;
      font-size: `,
        `px;
      line-height: `,
        `px;
      color: var(--card-code-fg-color);
    }

    & .json-inspector .json-inspector__leaf {
      padding-left: `,
        `;
    }

    & .json-inspector .json-inspector__leaf.json-inspector__leaf_root {
      padding-top: `,
        `;
      padding-left: 0;
    }

    & .json-inspector > .json-inspector__leaf_root > .json-inspector__line > .json-inspector__key {
      display: none;
    }

    & .json-inspector .json-inspector__line {
      display: block;
      position: relative;
      cursor: default;
    }

    & .json-inspector .json-inspector__line::after {
      content: '';
      position: absolute;
      top: 0;
      left: -200px;
      right: -50px;
      bottom: 0;
      z-index: -1;
      pointer-events: none;
    }

    & .json-inspector .json-inspector__line:hover::after {
      background: var(--card-code-bg-color);
    }

    & .json-inspector .json-inspector__leaf_composite > .json-inspector__line {
      cursor: pointer;
    }

    & .json-inspector .json-inspector__leaf_composite > .json-inspector__line::before {
      content: '▸ ';
      margin-left: calc(0 - `,
        ` + 3px);
      font-size: `,
        `px;
      line-height: `,
        `px;
    }

    &
      .json-inspector
      .json-inspector__leaf_expanded.json-inspector__leaf_composite
      > .json-inspector__line::before {
      content: '▾ ';
      font-size: `,
        `px;
      line-height: `,
        `px;
    }

    & .json-inspector .json-inspector__radio,
    & .json-inspector .json-inspector__flatpath {
      display: none;
    }

    & .json-inspector .json-inspector__value {
      margin-left: `,
        `;
    }

    &
      .json-inspector
      > .json-inspector__leaf_root
      > .json-inspector__line
      > .json-inspector__key
      + .json-inspector__value {
      margin: 0;
    }

    & .json-inspector .json-inspector__key {
      color: `,
        `;
    }

    & .json-inspector .json-inspector__value_helper,
    & .json-inspector .json-inspector__value_null {
      color: `,
        `;
    }

    & .json-inspector .json-inspector__not-found {
      padding-top: `,
        `;
    }

    & .json-inspector .json-inspector__value_string {
      color: `,
        `;
    }

    & .json-inspector .json-inspector__value_boolean {
      color: `,
        `;
    }

    & .json-inspector .json-inspector__value_number {
      color: `,
        `;
    }

    & .json-inspector .json-inspector__show-original {
      display: inline-block;
      padding: 0 6px;
      cursor: pointer;
    }

    & .json-inspector .json-inspector__show-original:hover {
      color: inherit;
    }

    & .json-inspector .json-inspector__show-original::before {
      content: '↔';
    }

    & .json-inspector .json-inspector__show-original:hover::after {
      content: ' expand';
    }
  `,
      ])),
    a.code.family,
    a.code.sizes[2].fontSize,
    a.code.sizes[2].lineHeight,
    ee(o[4]),
    ee(o[3]),
    ee(o[4]),
    a.code.sizes[2].fontSize,
    a.code.sizes[2].lineHeight,
    a.code.sizes[2].fontSize,
    a.code.sizes[2].lineHeight,
    ee(o[4] / 2),
    s.syntax.property,
    s.syntax.constant,
    ee(o[3]),
    s.syntax.string,
    s.syntax.boolean,
    s.syntax.number
  );
});
function Ko(t) {
  const { onChange: n, query: s } = t,
    a = u.useCallback((o) => n(o.target.value), [n]);
  return e.jsx(Fs, {
    icon: Hs,
    onChange: a,
    placeholder: 'Search',
    radius: 2,
    value: s || '',
  });
}
function Xo(t) {
  const { value: n } = t,
    { onInspectClose: s, paneKey: a } = L(),
    o = ''.concat(a, '_inspect_'),
    [i, r] = Wo(
      'desk-tool',
      'inspect-view-preferred-view-mode-'.concat(a),
      'parsed'
    ),
    l = No.find((h) => h.id === i),
    c = u.useCallback(() => {
      r(X.id);
    }, [r]),
    d = u.useCallback(() => {
      r(Y.id);
    }, [r]);
  return e.jsx(We, {
    id: ''.concat(o, 'dialog'),
    header: Ho(n)
      ? e.jsxs(e.Fragment, {
          children: [
            'Inspecting',
            ' ',
            e.jsx('em', { children: e.jsx(Cs, { document: n }) }),
          ],
        })
      : e.jsx('em', { children: 'No value' }),
    onClose: s,
    onClickOutside: s,
    width: 3,
    children: e.jsxs(O, {
      direction: 'column',
      height: 'fill',
      children: [
        e.jsx(V, {
          padding: 3,
          shadow: 1,
          style: { position: 'sticky', bottom: 0, zIndex: 3 },
          children: e.jsxs(Hn, {
            space: 1,
            children: [
              e.jsx(Ie, {
                'aria-controls': ''.concat(o, 'tabpanel'),
                fontSize: 1,
                id: ''.concat(o, 'tab-').concat(X.id),
                label: X.title,
                onClick: c,
                selected: l === X,
              }),
              e.jsx(Ie, {
                'aria-controls': ''.concat(o, 'tabpanel'),
                fontSize: 1,
                id: ''.concat(o, 'tab-').concat(Y.id),
                label: Y.title,
                onClick: d,
                selected: l === Y,
              }),
            ],
          }),
        }),
        e.jsxs(Es, {
          'aria-labelledby': ''.concat(o, 'tab-').concat(i),
          flex: 1,
          id: ''.concat(o, 'tabpanel'),
          overflow: 'auto',
          padding: 4,
          style: { outline: 'none' },
          children: [
            l === X &&
              e.jsx(Go, {
                children: e.jsx(Ys, {
                  data: n,
                  isExpanded: tt,
                  onClick: $o,
                  search: Ko,
                }),
              }),
            l === Y &&
              e.jsx(Ee, {
                language: 'json',
                tabIndex: 0,
                onKeyDown: Fo,
                onDoubleClick: sn,
                onFocus: sn,
                children: JSON.stringify(n, null, 2),
              }),
          ],
        }),
      ],
    }),
  });
}
var rn = Object.freeze,
  Yo = Object.defineProperty,
  Jo = (t, n) => rn(Yo(t, 'raw', { value: rn(n || t.slice()) })),
  ln;
const qo = B(V)(
  ln ||
    (ln = Jo([
      `
  position: relative;
  z-index: 50;
`,
    ]))
);
function Zo(t) {
  let { revisionId: n } = t;
  const { documentId: s, documentType: a } = L(),
    { restore: o } = Ds(s, a),
    { navigateIntent: i } = de(),
    r = u.useCallback(() => {
      n && (o.execute(n), i('edit', { id: s, type: a }));
    }, [s, a, i, o, n]);
  return e.jsx(qo, {
    'data-testid': 'deleted-document-banner',
    shadow: 1,
    tone: 'transparent',
    children: e.jsx(Z, {
      paddingX: 4,
      paddingY: n ? 2 : 3,
      sizing: 'border',
      width: 1,
      children: e.jsxs(O, {
        align: 'center',
        children: [
          e.jsx(D, { size: 1, children: e.jsx(Kn, {}) }),
          e.jsxs(O, {
            align: 'center',
            gap: 2,
            flex: 1,
            marginLeft: 3,
            children: [
              e.jsx(D, {
                size: 1,
                children: 'This document has been deleted.',
              }),
              n &&
                e.jsx(W, {
                  fontSize: 1,
                  padding: 2,
                  mode: 'bleed',
                  tone: 'primary',
                  onClick: r,
                  text: 'Restore most recent version',
                }),
            ],
          }),
        ],
      }),
    }),
  });
}
var cn = Object.freeze,
  Qo = Object.defineProperty,
  ot = (t, n) => cn(Qo(t, 'raw', { value: cn(n || t.slice()) })),
  dn,
  un;
const ea = B(V)(
    dn ||
      (dn = ot([
        `
  position: relative;
  z-index: 50;
`,
      ]))
  ),
  pn = B(D)(
    un ||
      (un = ot([
        `
  & > * {
    overflow: hidden;
    overflow: clip;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`,
      ]))
  ),
  at = u.memo(() => {
    var t, n, s, a, o, i;
    const r = bt(),
      {
        params: l,
        groupIndex: c,
        routerPanesState: d,
        replaceCurrent: h,
        BackLink: p,
      } = se(),
      f = (t = d[c]) == null ? void 0 : t[0].id,
      g = d[c - 1],
      m = g == null ? void 0 : g[0],
      b = m == null ? void 0 : m.id,
      _ = !!((n = m == null ? void 0 : m.params) != null && n.rev),
      y = u.useMemo(
        () =>
          ((l == null ? void 0 : l.parentRefPath) && Pe(l.parentRefPath)) ||
          null,
        [l == null ? void 0 : l.parentRefPath]
      ),
      x = vt(
        () => {
          const j = y == null ? void 0 : y[0];
          if (!b || !j || !y) return G({ loading: !1 });
          const w = ns(b),
            C = Pe(j),
            S = C.findIndex((I) => typeof I == 'object' && '_key' in I);
          return Fn(
            G({ loading: !0 }),
            r
              .unstable_observePathsDocumentPair(
                w,
                S === -1 ? C : C.slice(0, S)
              )
              .pipe(
                ts(750),
                U((I) => {
                  let { draft: T, published: k } = I;
                  var M;
                  return {
                    loading: !1,
                    result: {
                      availability: {
                        draft: T.availability,
                        published: k.availability,
                      },
                      refValue:
                        (M = Rs(T.snapshot || k.snapshot, y)) == null
                          ? void 0
                          : M._ref,
                    },
                  };
                })
              )
          );
        },
        [r, b, y],
        { loading: !0 }
      ),
      P = u.useCallback(() => {
        var j;
        x.loading ||
          ((j = x.result) != null &&
            j.refValue &&
            h({ id: x.result.refValue, params: l }));
      }, [x.loading, x.result, h, l]);
    return !b ||
      !y ||
      _ ||
      x.loading ||
      (!((s = x.result) != null && s.availability.draft.available) &&
        !((a = x.result) != null && a.availability.published.available)) ||
      ((o = x.result) == null ? void 0 : o.refValue) === f
      ? null
      : e.jsx(ea, {
          shadow: 1,
          tone: 'caution',
          'data-testid': 'reference-changed-banner',
          children: e.jsx(Z, {
            paddingX: 4,
            paddingY: 2,
            sizing: 'border',
            width: 1,
            children: e.jsxs(O, {
              align: 'center',
              children: [
                e.jsx(D, { size: 1, children: e.jsx(kn, {}) }),
                (i = x.result) != null && i.refValue
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(E, {
                          flex: 1,
                          marginLeft: 3,
                          children: e.jsx(pn, {
                            title:
                              'This reference has changed since you opened it.',
                            size: 1,
                            children:
                              'This reference has changed since you opened it.',
                          }),
                        }),
                        e.jsx(E, {
                          marginLeft: 3,
                          children: e.jsx(W, {
                            onClick: P,
                            icon: On,
                            fontSize: 1,
                            mode: 'ghost',
                            padding: 2,
                            space: 2,
                            text: 'Reload reference',
                          }),
                        }),
                      ],
                    })
                  : e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(E, {
                          flex: 1,
                          marginLeft: 3,
                          children: e.jsx(pn, {
                            title:
                              'This reference has been removed since you opened it.',
                            size: 1,
                            children:
                              'This reference has been removed since you opened it.',
                          }),
                        }),
                        e.jsx(E, {
                          marginLeft: 3,
                          children: e.jsx(W, {
                            as: p,
                            icon: we,
                            fontSize: 1,
                            mode: 'ghost',
                            padding: 2,
                            space: 2,
                            text: 'Close reference',
                          }),
                        }),
                      ],
                    }),
              ],
            }),
          }),
        });
  });
at.displayName = 'ReferenceChangedBanner';
var hn = Object.freeze,
  na = Object.defineProperty,
  ta = (t, n) => hn(na(t, 'raw', { value: hn(n || t.slice()) })),
  fn;
const sa = B(V)(
  fn ||
    (fn = ta([
      `
  position: relative;
  z-index: 50;
`,
    ]))
);
function oa(t) {
  let { granted: n, requiredPermission: s } = t;
  var a, o;
  const i = Ts(),
    r = ((a = i == null ? void 0 : i.roles) == null ? void 0 : a.length) !== 1,
    l = aa(
      ((o = i == null ? void 0 : i.roles) == null
        ? void 0
        : o.map((c) => e.jsx('code', { children: c.title }, c.name))) || [],
      ', '
    );
  return n
    ? null
    : e.jsx(sa, {
        'data-testid': 'permission-check-banner',
        shadow: 1,
        tone: 'transparent',
        children: e.jsx(Z, {
          paddingX: 4,
          paddingY: 3,
          sizing: 'border',
          width: 1,
          children: e.jsxs(O, {
            align: 'flex-start',
            children: [
              e.jsx(D, { size: 1, children: e.jsx(Kn, {}) }),
              e.jsx(E, {
                flex: 1,
                marginLeft: 3,
                children: e.jsxs(D, {
                  size: 1,
                  children: [
                    'Your role',
                    r && 's',
                    ' ',
                    l,
                    ' ',
                    r ? 'do' : 'does',
                    ' not have permissions to',
                    ' ',
                    s,
                    ' this document.',
                  ],
                }),
              }),
            ],
          }),
        }),
      });
}
function aa(t, n) {
  return t.reduce((s, a) => (s === null ? [a] : s.concat([n, a])), null);
}
function ra(t) {
  const n = u.useRef();
  return (
    u.useEffect(() => {
      n.current = t;
    }, [t]),
    n.current
  );
}
const ia = 1e3 * 60 * 60 * 24 * 24;
function la(t) {
  const n = Me(),
    s = ra(t.enabled);
  u.useEffect(() => {
    !s && t.enabled && n.push({ ...t, duration: ia }),
      s && !t.enabled && n.push({ ...t, duration: 0.01 });
  }, [t, n, s]);
}
const ca = (t) => t.preventDefault(),
  da = u.forwardRef(function (n, s) {
    var a;
    const { hidden: o, margins: i } = n,
      {
        collapsedFieldSets: r,
        collapsedPaths: l,
        displayed: c,
        editState: d,
        documentId: h,
        documentType: p,
        fieldActions: f,
        onChange: g,
        validation: m,
        ready: b,
        formState: _,
        onFocus: y,
        onBlur: x,
        onSetCollapsedPath: P,
        onPathOpen: v,
        onSetCollapsedFieldSet: j,
        onSetActiveFieldGroup: w,
      } = L(),
      C = Tn(),
      S = jt(h),
      I = u.useMemo(() => yt(), []),
      T =
        (a = d == null ? void 0 : d.transactionSyncLock) == null
          ? void 0
          : a.enabled;
    la({
      id: 'sync-lock-'.concat(h),
      status: 'warning',
      enabled: T,
      title: 'Syncing document…',
      description:
        "Please hold tight while the document is synced. This usually happens right after the document has been published, and it shouldn't take more than a few seconds",
    }),
      u.useEffect(() => {
        const N = C.pair
          .documentEvents(h, p)
          .pipe(
            _t((A) => {
              A.type === 'mutation' && I.publish(ua(A)),
                A.type === 'rebase' && I.publish(pa(A));
            })
          )
          .subscribe();
        return () => {
          N.unsubscribe();
        };
      }, [h, C, p, I]);
    const k = !!(c != null && c._rev);
    u.useEffect(() => {
      k && I.publish({ type: 'mutation', patches: [], snapshot: c });
    }, [k]);
    const [M, R] = u.useState(null);
    u.useEffect(() => {
      b && !(_ != null && _.focusPath.length) && M && Pt(M);
    }, [b]);
    const z = u.useCallback(
      (N) => {
        R(N), typeof s == 'function' ? s(N) : s && (s.current = N);
      },
      [s]
    );
    return e.jsx(Z, {
      hidden: o,
      paddingX: 4,
      paddingTop: 5,
      paddingBottom: 9,
      sizing: 'border',
      width: 1,
      children: e.jsx(wt, {
        margins: i,
        children: e.jsx(E, {
          as: 'form',
          onSubmit: ca,
          ref: z,
          children: b
            ? _ === null
              ? e.jsx(E, {
                  padding: 2,
                  children: e.jsx(D, { children: 'This form is hidden' }),
                })
              : e.jsx(St, {
                  __internal_fieldActions: f,
                  __internal_patchChannel: I,
                  collapsedFieldSets: r,
                  collapsedPaths: l,
                  focusPath: _.focusPath,
                  changed: _.changed,
                  focused: _.focused,
                  groups: _.groups,
                  id: 'root',
                  members: _.members,
                  onChange: g,
                  onFieldGroupSelect: w,
                  onPathBlur: x,
                  onPathFocus: y,
                  onPathOpen: v,
                  onSetFieldSetCollapsed: j,
                  onSetPathCollapsed: P,
                  presence: S,
                  readOnly: _.readOnly,
                  schemaType: _.schemaType,
                  validation: m,
                  value: _.value,
                })
            : e.jsx(It, {
                ms: 300,
                children: e.jsxs(O, {
                  align: 'center',
                  direction: 'column',
                  height: 'fill',
                  justify: 'center',
                  children: [
                    e.jsx(zn, { muted: !0 }),
                    e.jsx(E, {
                      marginTop: 3,
                      children: e.jsx(D, {
                        align: 'center',
                        muted: !0,
                        size: 1,
                        children: 'Loading document',
                      }),
                    }),
                  ],
                }),
              }),
        }),
      }),
    });
  });
function ua(t) {
  const n = t.mutations.map((s) => s.patch).filter(Boolean);
  return { type: 'mutation', snapshot: t.document, patches: De(t.origin, n) };
}
function pa(t) {
  const n = t.remoteMutations.map((a) => a.patch).filter(Boolean),
    s = t.localMutations.map((a) => a.patch).filter(Boolean);
  return {
    type: 'rebase',
    snapshot: t.document,
    patches: De('remote', n).concat(De('local', s)),
  };
}
function ha() {
  const { activeViewId: t, paneKey: n, views: s } = L(),
    a = ''.concat(n, 'tabpanel');
  return e.jsx(Hn, {
    space: 1,
    children: s.map((o, i) => {
      var r;
      return e.jsx(
        fa,
        {
          icon: o.icon,
          id: ''.concat(n, 'tab-').concat(o.id),
          isActive: t === o.id,
          label: e.jsx(e.Fragment, { children: o.title }),
          tabPanelId: a,
          viewId: i === 0 ? null : (r = o.id) != null ? r : null,
        },
        o.id
      );
    }),
  });
}
function fa(t) {
  const { isActive: n, tabPanelId: s, viewId: a } = t,
    { ready: o } = L(),
    { setView: i } = se(),
    r = u.useCallback(() => i(a), [i, a]);
  return e.jsx(Ie, {
    ...t,
    'aria-controls': s,
    disabled: !o,
    fontSize: 1,
    selected: n,
    onClick: r,
  });
}
function ma() {
  const { connectionState: t, schemaType: n, title: s, value: a } = L(),
    o = !!a && t === 'connected',
    { error: i, value: r } = ss({ enabled: o, schemaType: n, value: a });
  return t !== 'connected'
    ? e.jsx(e.Fragment, {})
    : s
    ? e.jsx(e.Fragment, { children: s })
    : a
    ? i
      ? e.jsxs(e.Fragment, { children: ['Error: ', i.message] })
      : e.jsx(e.Fragment, {
          children:
            (r == null ? void 0 : r.title) ||
            e.jsx('span', {
              style: { color: 'var(--card-muted-fg-color)' },
              children: 'Untitled',
            }),
        })
    : e.jsxs(e.Fragment, {
        children: [
          'New ',
          (n == null ? void 0 : n.title) || (n == null ? void 0 : n.name),
        ],
      });
}
const xa = u.memo(
  u.forwardRef(function (n, s) {
    const {
        onMenuAction: a,
        onPaneClose: o,
        onPaneSplit: i,
        menuItems: r,
        menuItemGroups: l,
        schemaType: c,
        timelineStore: d,
        ready: h,
        views: p,
        unstable_languageFilter: f,
      } = L(),
      { features: g } = q(),
      { index: m, BackLink: b, hasGroupSiblings: _ } = se(),
      { actions: y } = Ct(),
      x = u.useMemo(
        () =>
          Et({
            actionHandler: a,
            fieldActions: y,
            menuItems: r,
            menuItemGroups: l,
          }),
        [a, y, l, r]
      ),
      P = u.useMemo(() => x.filter(Dt), [x]),
      v = u.useMemo(() => x.filter(Rt), [x]),
      j = p.length > 1,
      w = oe(d, (R) => R.revTime),
      { collapsed: C, isLast: S } = ke(),
      I = S && !C ? -1 : 0,
      T = g.splitViews && i && p.length > 1,
      k = T && _,
      M = !k && !g.backButton;
    return e.jsx(Oe, {
      ref: s,
      loading: !h,
      title: e.jsx(ma, {}),
      tabs: j && e.jsx(ha, {}),
      tabIndex: I,
      backButton:
        g.backButton &&
        m > 0 &&
        e.jsx(W, {
          as: b,
          'data-as': 'a',
          icon: Tt,
          mode: 'bleed',
          padding: 2,
        }),
      subActions: e.jsx(Mt, { chunk: w, mode: 'rev', placement: 'bottom-end' }),
      actions: e.jsxs(O, {
        align: 'center',
        gap: 1,
        children: [
          f.length > 0 &&
            e.jsx(e.Fragment, {
              children: f.map((R, z) =>
                u.createElement(R, {
                  key: 'language-filter-'.concat(z),
                  schemaType: c,
                })
              ),
            }),
          P.map((R) => e.jsx(kt, { node: R }, R.key)),
          e.jsx(Ot, { nodes: v }, 'context-menu'),
          T &&
            e.jsx(Q, {
              content: e.jsx(D, {
                size: 1,
                style: { whiteSpace: 'nowrap' },
                children: 'Split pane right',
              }),
              padding: 2,
              placement: 'bottom',
              portal: !0,
              children: e.jsx(
                W,
                {
                  'aria-label': 'Split pane right',
                  icon: zt,
                  mode: 'bleed',
                  onClick: i,
                },
                'split-pane-button'
              ),
            }),
          k &&
            e.jsx(
              W,
              {
                icon: we,
                mode: 'bleed',
                onClick: o,
                title: 'Close split pane',
              },
              'close-view-button'
            ),
          M &&
            e.jsx(
              W,
              { icon: we, mode: 'bleed', title: 'Close pane group', as: b },
              'close-view-button'
            ),
        ],
      }),
    });
  })
);
var mn = Object.freeze,
  ga = Object.defineProperty,
  ba = (t, n) => mn(ga(t, 'raw', { value: mn(n || t.slice()) })),
  xn;
const va = B(E)({ position: 'relative' }),
  ja = B(os)((t) => {
    let { $disabled: n } = t;
    return n
      ? { height: '100%' }
      : Mn(
          xn ||
            (xn = ba([
              `
    height: 100%;
    overflow: auto;
    position: relative;
    scroll-behavior: smooth;
    outline: none;
  `,
            ]))
        );
  }),
  ya = function (n) {
    const {
        footerHeight: s,
        isInspectOpen: a,
        rootElement: o,
        setDocumentPanelPortalElement: i,
      } = n,
      {
        activeViewId: r,
        displayed: l,
        documentId: c,
        editState: d,
        inspector: h,
        value: p,
        views: f,
        ready: g,
        schemaType: m,
        permissions: b,
        isPermissionsLoading: _,
        isDeleting: y,
        isDeleted: x,
        timelineStore: P,
      } = L(),
      { collapsed: v } = Le(),
      { collapsed: j } = ke(),
      w = Vn(),
      { features: C } = q(),
      [S, I] = u.useState(null),
      T = he(S),
      k = u.useRef(null),
      [M, R] = u.useState(null),
      z = u.useRef(null),
      N = p._createdAt ? 'update' : 'create',
      A = u.useMemo(
        () => f.find((ge) => ge.id === r) || f[0] || { type: 'form' },
        [r, f]
      ),
      K = (C.splitPanes && k.current) || w.element,
      xe = u.useMemo(
        () =>
          v
            ? [(T == null ? void 0 : T.height) || 0, 0, s ? s + 2 : 2, 0]
            : [0, 0, 2, 0],
        [v, s, T]
      ),
      re = A.type !== 'form',
      F = u.useMemo(
        () =>
          A.type === 'component' &&
          A.component &&
          u.createElement(A.component, {
            document: {
              draft: (d == null ? void 0 : d.draft) || null,
              displayed: l || p,
              historical: l,
              published: (d == null ? void 0 : d.published) || null,
            },
            documentId: c,
            options: A.options,
            schemaType: m,
          }),
        [
          A,
          l,
          c,
          d == null ? void 0 : d.draft,
          d == null ? void 0 : d.published,
          m,
          p,
        ]
      ),
      ct = oe(P, (ge) => ge.lastNonDeletedRevId);
    u.useEffect(() => {
      M != null && M.scrollTo && M.scrollTo(0, 0);
    }, [c, M]),
      u.useEffect(() => {
        K && i(K);
      }, [K, i]);
    const dt = u.useMemo(
        () => (a ? e.jsx(Xo, { value: l || p }) : null),
        [a, l, p]
      ),
      He = !!(!j && h);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(xa, { ref: I }),
        e.jsx(pe, {
          children: e.jsxs(O, {
            height: 'fill',
            children: [
              (C.resizablePanes || !He) &&
                e.jsx(va, {
                  flex: 2,
                  overflow: 'hidden',
                  children: e.jsx(fe, {
                    element: K,
                    __unstable_elements: { documentScrollElement: M },
                    children: e.jsx(Ue, {
                      element: M,
                      children: e.jsxs(as, {
                        scrollElement: M,
                        containerElement: z,
                        children: [
                          A.type === 'form' &&
                            !_ &&
                            g &&
                            e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(oa, {
                                  granted: !!(b != null && b.granted),
                                  requiredPermission: N,
                                }),
                                !y && x && e.jsx(Zo, { revisionId: ct }),
                                e.jsx(at, {}),
                              ],
                            }),
                          e.jsxs(ja, {
                            $disabled: v || !1,
                            'data-testid': 'document-panel-scroller',
                            ref: R,
                            children: [
                              e.jsx(
                                da,
                                { hidden: re, margins: xe, ref: z },
                                c + (g ? '_ready' : '_pending')
                              ),
                              F,
                            ],
                          }),
                          dt,
                          e.jsx('div', {
                            'data-testid': 'document-panel-portal',
                            ref: k,
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              He &&
                e.jsx(Ue, {
                  element: o,
                  children: e.jsx(ao, {
                    documentId: c,
                    documentType: m.name,
                    flex: 1,
                  }),
                }),
            ],
          }),
        }),
      ],
    });
  },
  rt = ['left', 'bottom'],
  _a = { small: 0, medium: 1, large: 2, full: 'auto' };
function Pa(t) {
  const { dialog: n, referenceElement: s } = t;
  return e.jsx(Xn, {
    content: e.jsx(wa, { dialog: n }),
    fallbackPlacements: rt,
    open: !0,
    placement: 'top',
    portal: !0,
    preventOverflow: !0,
    referenceElement: s,
  });
}
function wa(t) {
  const { dialog: n } = t,
    {
      cancelButtonIcon: s,
      cancelButtonText: a,
      confirmButtonIcon: o,
      confirmButtonText: i,
      message: r,
      onCancel: l,
      onConfirm: c,
      tone: d,
    } = n,
    { isTopLayer: h } = Yn(),
    [p, f] = u.useState(null),
    g = u.useCallback(() => {
      h && l();
    }, [h, l]),
    m = u.useCallback(
      (b) => {
        b.key === 'Escape' && h && l();
      },
      [h, l]
    );
  return (
    Jn(g, [p]),
    qn(m),
    e.jsxs(O, {
      direction: 'column',
      ref: f,
      style: { minWidth: 320 - 16, maxWidth: 400 },
      children: [
        e.jsx(E, {
          flex: 1,
          overflow: 'auto',
          padding: 4,
          children: e.jsx(D, { children: r }),
        }),
        e.jsx(E, {
          paddingX: 4,
          paddingY: 3,
          style: { borderTop: '1px solid var(--card-border-color)' },
          children: e.jsxs(Vs, {
            columns: 2,
            gap: 2,
            children: [
              e.jsx(W, {
                icon: s,
                onClick: l,
                mode: 'ghost',
                text: a || 'Cancel',
              }),
              e.jsx(W, { icon: o, onClick: c, text: i || 'Confirm', tone: d }),
            ],
          }),
        }),
      ],
    })
  );
}
function Sa(t) {
  const { dialog: n } = t,
    s = u.useId(),
    a = n.footer && e.jsx(E, { paddingX: 4, paddingY: 3, children: n.footer });
  return e.jsx(Ae, {
    zOffset: 'fullscreen',
    children: e.jsx(We, {
      __unstable_hideCloseButton: n.showCloseButton === !1,
      footer: a,
      header: n.header,
      id: s,
      onClose: n.onClose,
      onClickOutside: n.onClose,
      width: n.width === void 0 ? 1 : _a[n.width],
      children: e.jsx(E, { padding: 4, children: n.content }),
    }),
  });
}
function Ia(t) {
  const { dialog: n, referenceElement: s } = t;
  return e.jsx(Xn, {
    content: e.jsx(Ca, { dialog: n }),
    fallbackPlacements: rt,
    open: !0,
    placement: 'top',
    portal: !0,
    preventOverflow: !0,
    referenceElement: s,
  });
}
function Ca(t) {
  const { dialog: n } = t,
    { content: s, onClose: a } = n,
    { isTopLayer: o } = Yn(),
    [i, r] = u.useState(null),
    l = u.useCallback(() => {
      o && a();
    }, [o, a]),
    c = u.useCallback(
      (d) => {
        d.key === 'Escape' && o && a();
      },
      [o, a]
    );
  return Jn(l, [i]), qn(c), e.jsx('div', { ref: r, children: s });
}
function gn(t) {
  const { children: n } = t,
    { element: s, elements: a } = Vn(),
    o = (a == null ? void 0 : a[Bn]) || s;
  return e.jsx(fe, { element: o, children: n });
}
function $e(t) {
  const { dialog: n, referenceElement: s = null } = t,
    a = u.useId();
  if (n.type === 'confirm')
    return e.jsx(Pa, { dialog: n, referenceElement: s });
  if (n.type === 'popover')
    return e.jsx(Ia, { dialog: n, referenceElement: s });
  if (n.type === 'dialog' || !n.type)
    return e.jsx(gn, { children: e.jsx(Sa, { dialog: n }) });
  if (n.type === 'custom')
    return e.jsx(gn, { children: n == null ? void 0 : n.component });
  const o = n;
  return (
    console.warn('Unsupported modal type '.concat(o.type)),
    e.jsx(We, {
      id: a,
      onClose: o.onClose,
      onClickOutside: o.onClose,
      width: 2,
      children: e.jsx(E, {
        padding: 4,
        children:
          o.content ||
          e.jsxs(e.Fragment, {
            children: [
              'Unexpected modal type (',
              e.jsx('code', { children: o.type }),
              ')',
            ],
          }),
      }),
    })
  );
}
function Ea(t) {
  const { actionStates: n, disabled: s } = t,
    a = u.useId(),
    o = u.useRef(null),
    [i, r] = u.useState(-1),
    [l, c] = u.useState(null),
    d = u.useCallback((f) => {
      r(f);
    }, []),
    h = u.useMemo(
      () => ({ placement: 'top-end', portal: !0, preventOverflow: !0 }),
      []
    ),
    p = n[i];
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(Ms, {
        id: ''.concat(a, '-action-menu'),
        button: e.jsx(W, {
          'data-testid': 'action-menu-button',
          'aria-label': 'Open document actions',
          disabled: s,
          icon: ks,
          mode: 'ghost',
          ref: o,
        }),
        menu: e.jsx(Os, {
          padding: 1,
          children: n.map((f, g) =>
            e.jsx(Da, { actionState: f, disabled: s, index: g, onAction: d }, g)
          ),
        }),
        popover: h,
        ref: c,
      }),
      p &&
        p.dialog &&
        e.jsx(Ae, {
          zOffset: 'paneFooter',
          children: e.jsx($e, { dialog: p.dialog, referenceElement: l }),
        }),
    ],
  });
}
function Da(t) {
  const { actionState: n, disabled: s, index: a, onAction: o } = t,
    { onHandle: i } = n,
    r = u.useCallback(() => {
      o(a), i && i();
    }, [a, o, i]),
    l =
      n.title &&
      e.jsx(E, {
        padding: 2,
        children: e.jsx(D, { size: 1, children: n.title }),
      });
  return e.jsx(zs, {
    'data-testid': 'action-'.concat(n.label.replace(' ', '')),
    disabled: s || !!n.disabled,
    onClick: r,
    padding: 0,
    tone: n.tone,
    children: e.jsx(Q, {
      content: l,
      disabled: !l,
      fallbackPlacements: ['left', 'bottom'],
      placement: 'top',
      portal: !0,
      children: e.jsxs(O, {
        align: 'center',
        paddingX: 3,
        children: [
          e.jsxs(O, {
            flex: 1,
            paddingY: 3,
            children: [
              n.icon &&
                e.jsx(E, {
                  marginRight: 3,
                  children: e.jsxs(D, {
                    children: [
                      u.isValidElement(n.icon) && n.icon,
                      Ls.isValidElementType(n.icon) && u.createElement(n.icon),
                    ],
                  }),
                }),
              e.jsx(D, { children: n.label }),
            ],
          }),
          n.shortcut &&
            e.jsx(E, {
              marginLeft: 3,
              children: e.jsx(Un, {
                keys: String(n.shortcut)
                  .split('+')
                  .map((c) => c.slice(0, 1).toUpperCase() + c.slice(1)),
              }),
            }),
        ],
      }),
    }),
  });
}
function it(t) {
  const { disabled: n, showMenu: s, states: a } = t,
    [o, ...i] = a,
    [r, l] = u.useState(null),
    c = u.useMemo(
      () =>
        !o || (!o.title && !o.shortcut)
          ? null
          : e.jsxs(O, {
              padding: 2,
              style: { maxWidth: 300 },
              align: 'center',
              children: [
                e.jsx(D, { size: 1, children: o.title }),
                o.shortcut &&
                  e.jsx(E, {
                    marginLeft: o.title ? 2 : 0,
                    children: e.jsx(Un, {
                      keys: String(o.shortcut)
                        .split('+')
                        .map(
                          (d) =>
                            d.slice(0, 1).toUpperCase() +
                            d.slice(1).toLowerCase()
                        ),
                    }),
                  }),
              ],
            }),
      [o]
    );
  return e.jsxs(O, {
    children: [
      o &&
        e.jsx(rs, {
          zOffset: 200,
          children: e.jsx(Q, {
            disabled: !c,
            content: c,
            portal: !0,
            placement: 'top',
            children: e.jsx(H, {
              flex: 1,
              children: e.jsx(W, {
                'data-testid': 'action-'.concat(o.label),
                disabled: n || !!o.disabled,
                icon: o.icon,
                onClick: o.onHandle,
                ref: l,
                text: o.label,
                tone: o.tone || 'primary',
              }),
            }),
          }),
        }),
      s &&
        i.length > 0 &&
        e.jsx(E, {
          marginLeft: 1,
          children: e.jsx(Ea, { actionStates: i, disabled: n }),
        }),
      o && o.dialog && e.jsx($e, { dialog: o.dialog, referenceElement: r }),
    ],
  });
}
const Ra = u.memo(function () {
    const { actions: n, connectionState: s, documentId: a, editState: o } = L();
    return !n || !o
      ? null
      : e.jsx(Ne, {
          actions: n,
          actionProps: o,
          children: (i) => {
            let { states: r } = i;
            return e.jsx(
              it,
              {
                disabled: s !== 'connected',
                showMenu: n.length > 1,
                states: r,
              },
              a
            );
          },
        });
  }),
  Ta = u.memo(function () {
    const { connectionState: n, editState: s, timelineStore: a } = L(),
      o = oe(a, (d) => d.revTime),
      i = (o == null ? void 0 : o.id) || '',
      r =
        (
          (s == null ? void 0 : s.draft) ||
          (s == null ? void 0 : s.published) ||
          {}
        )._rev === i,
      l = u.useMemo(() => ({ ...(s || {}), revision: i }), [s, i]),
      c = u.useMemo(() => [Lt], []);
    return e.jsx(Ne, {
      actions: c,
      actionProps: l,
      children: (d) => {
        let { states: h } = d;
        return e.jsx(it, {
          disabled: n !== 'connected' || !!r,
          showMenu: !1,
          states: h,
        });
      },
    });
  }),
  Ma = {
    primary: 'primary',
    success: 'positive',
    warning: 'caution',
    danger: 'critical',
  };
function ka(t) {
  let { states: n } = t;
  return e.jsx(As, {
    space: 1,
    children: n.map((s, a) =>
      e.jsx(
        Q,
        {
          content:
            s.title &&
            e.jsx(E, {
              padding: 2,
              children: e.jsx(D, { size: 1, children: s.title }),
            }),
          disabled: !s.title,
          placement: 'top',
          portal: !0,
          children: e.jsx(Bs, {
            fontSize: 1,
            mode: 'outline',
            paddingX: 2,
            paddingY: 1,
            radius: 4,
            tone: s.color ? Ma[s.color] : void 0,
            style: { whiteSpace: 'nowrap' },
            children: s.label,
          }),
        },
        String(a)
      )
    ),
  });
}
function Oa() {
  const { badges: t, editState: n } = L();
  return !n || !t
    ? null
    : e.jsx(qs, {
        badges: t,
        badgeProps: n,
        children: (s) => {
          let { states: a } = s;
          return e.jsx(ka, { states: a });
        },
      });
}
var bn = Object.freeze,
  za = Object.defineProperty,
  La = (t, n) => bn(za(t, 'raw', { value: bn(n || t.slice()) })),
  vn;
const Aa = B(O)(
  vn ||
    (vn = La([
      `
  cursor: default;
`,
    ]))
);
function Ba(t) {
  const {
      collapsed: n,
      disabled: s,
      lastPublished: a,
      lastUpdated: o,
      liveEdit: i,
    } = t,
    r = $(a || '', { minimal: !0, agoSuffix: !0 }),
    l = $(a || '', { minimal: !0 }),
    c = $(o || '', { minimal: !0, agoSuffix: !0 }),
    d = $(o || '', { minimal: !0 }),
    h = $(o || '', { minimal: !1, agoSuffix: !0 }),
    p = $(a || '', { minimal: !1, agoSuffix: !0 }),
    f = i ? 'Last updated '.concat(h) : 'Last published '.concat(p);
  return e.jsx(Aa, {
    align: 'center',
    'data-ui': 'SessionLayout',
    sizing: 'border',
    children: e.jsx(Q, {
      placement: 'top',
      portal: !0,
      content: e.jsx(H, {
        padding: 3,
        space: 3,
        children: e.jsx(D, {
          size: 1,
          children: i
            ? e.jsxs(e.Fragment, {
                children: [
                  'Last updated',
                  ' ',
                  e.jsx('abbr', {
                    'aria-label': o ? h : p,
                    children: o ? c : r,
                  }),
                ],
              })
            : e.jsxs(e.Fragment, {
                children: [
                  'Last published ',
                  e.jsx('abbr', { 'aria-label': p, children: r }),
                ],
              }),
        }),
      }),
      children: e.jsx(W, {
        mode: 'bleed',
        tone: i ? 'critical' : 'positive',
        tabIndex: -1,
        disabled: s,
        'aria-label': f,
        children: e.jsxs(O, {
          align: 'center',
          children: [
            e.jsx(E, {
              marginRight: n ? 0 : 3,
              children: e.jsx(D, {
                size: 2,
                'aria-hidden': 'true',
                children: i ? e.jsx(is, {}) : e.jsx(ls, {}),
              }),
            }),
            !n &&
              e.jsx(D, {
                size: 1,
                weight: 'medium',
                children: i
                  ? e.jsx('abbr', { 'aria-label': f, children: o ? d : l })
                  : e.jsx('abbr', { 'aria-label': f, children: l }),
              }),
          ],
        }),
      }),
    }),
  });
}
var jn = Object.freeze,
  Wa = Object.defineProperty,
  Fe = (t, n) => jn(Wa(t, 'raw', { value: jn(n || t.slice()) })),
  yn,
  _n,
  Pn;
const Na = B(ae.path)(
    yn ||
      (yn = Fe([
        `
  transform-origin: center;
`,
      ]))
  ),
  $a = (t) =>
    e.jsx(ae.circle, {
      fill: 'none',
      r: '8',
      cx: '12.5',
      cy: '12.5',
      strokeWidth: '1.2',
      ...t,
    }),
  Fa = (t) =>
    e.jsx(Na, {
      fill: 'none',
      d: 'M14 17.5619L11.5 20.5L14.5 23.0619M11 7.43811L13.5 4.50001L10.5 1.93811',
      ...t,
    }),
  Ha = (t) => e.jsx(ae.path, { d: 'M9.5 12.1316L11.7414 14.5L16 10', ...t }),
  Va = (t) =>
    e.jsx(ae.path, { d: 'M15 7L18 10M6 19L7 15L17 5L20 8L10 18L6 19Z', ...t }),
  Ua = At(
    _n ||
      (_n = Fe([
        `
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`,
      ]))
  ),
  Ga = B.g(
    Pn ||
      (Pn = Fe([
        `
  transform-origin: center;

  &[data-rotate] {
    animation: `,
        ` 1s ease-in-out infinite;
  }
`,
      ])),
    Ua
  ),
  Ka = {
    syncing: { scale: 1, transition: { duration: 0 } },
    saved: {
      scale: [1, 0.8, 1.2, 0.9, 1.1, 0.95, 1.05, 0.99, 1],
      transition: { duration: 0.5, delay: 0.2 },
    },
    changes: { transition: { duration: 0 } },
  },
  Xa = {
    syncing: {
      strokeDasharray: '0, 0, 23, 3, 23, 3',
      strokeDashoffset: 10,
      opacity: 1,
      transition: { duration: 0 },
    },
    saved: {
      strokeDasharray: '0, 0, 23, 0, 23, 0',
      strokeDashoffset: 10,
      opacity: 1,
      transition: { duration: 0.2 },
    },
    changes: {
      strokeDasharray: '0, 60, 23, 0, 23, 0',
      strokeDashoffset: 0,
      opacity: 0,
      transition: { duration: 0.5 },
    },
  },
  Ya = {
    syncing: { opacity: 1, transition: { duration: 0 } },
    saved: { opacity: 0, transition: { duration: 0.2 } },
    changes: { opacity: 0 },
  },
  Ja = {
    syncing: { pathLength: 0, transition: { duration: 0 } },
    saved: { pathLength: 1, transition: { delay: 0.4, duration: 0.3 } },
    changes: { pathLength: 0, transition: { duration: 0.2 } },
  },
  qa = {
    syncing: { pathLength: 0, transition: { duration: 0 } },
    saved: { pathLength: 0, transition: { duration: 0 } },
    changes: { pathLength: 1, transition: { duration: 0.4, delay: 0.5 } },
  };
function Za(t) {
  const { status: n } = t;
  return n
    ? e.jsx('svg', {
        width: '1em',
        height: '1em',
        viewBox: '0 0 25 25',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '1.2',
        'data-sanity-icon': '',
        children: e.jsxs(ae.g, {
          variants: Ka,
          initial: n,
          animate: n,
          children: [
            e.jsxs(Ga, {
              'data-rotate': n === 'changes' ? void 0 : '',
              children: [
                e.jsx(Fa, { variants: Ya, initial: n, animate: n }),
                e.jsx($a, { variants: Xa, initial: n, animate: n }),
              ],
            }),
            e.jsx(Ha, { variants: Ja, initial: n, animate: n }),
            e.jsx(Va, { variants: qa, initial: n, animate: n }),
          ],
        }),
      })
    : null;
}
const Qa = ze.forwardRef(function (n, s) {
    const { collapsed: a, status: o, lastUpdated: i, ...r } = n,
      l = $(i || '', { minimal: !0 }),
      c = $(i || '', { minimal: !0, agoSuffix: !0 }),
      d = $(i || '', { minimal: !1, agoSuffix: !0 }),
      h = u.useMemo(
        () =>
          o === 'syncing'
            ? { text: 'Saving...', tone: void 0 }
            : o === 'changes'
            ? { text: l, tone: 'caution' }
            : o === 'saved'
            ? { text: 'Saved!', tone: 'positive' }
            : {},
        [o, l]
      );
    return o
      ? e.jsx(Q, {
          placement: 'top',
          portal: !0,
          disabled: o !== 'changes',
          content: e.jsxs(H, {
            padding: 3,
            space: 3,
            children: [
              e.jsx(D, {
                size: 1,
                weight: 'semibold',
                children: 'Review changes',
              }),
              e.jsxs(D, {
                size: 1,
                muted: !0,
                children: [
                  'Changes saved ',
                  e.jsx('abbr', { 'aria-label': d, children: c }),
                ],
              }),
            ],
          }),
          children: e.jsx(W, {
            mode: 'bleed',
            justify: 'flex-start',
            tone: h == null ? void 0 : h.tone,
            ...r,
            'data-testid': 'review-changes-button',
            ref: s,
            'aria-label': 'Review changes',
            children: e.jsxs(O, {
              align: 'center',
              children: [
                e.jsx(E, {
                  marginRight: a ? 0 : 3,
                  'aria-hidden': 'true',
                  children: e.jsx(D, { children: e.jsx(Za, { status: o }) }),
                }),
                !a &&
                  e.jsx(D, {
                    size: 1,
                    weight: 'medium',
                    children: h == null ? void 0 : h.text,
                  }),
              ],
            }),
          }),
        })
      : null;
  }),
  er = ze.memo(Qa),
  nr = 1e3,
  tr = 3e3,
  sr = u.memo(function () {
    var n;
    const {
        changesOpen: s,
        documentId: a,
        documentType: o,
        editState: i,
        onHistoryClose: r,
        onHistoryOpen: l,
        timelineStore: c,
        value: d,
      } = L(),
      h = Bt(a, o),
      p = d == null ? void 0 : d._updatedAt,
      f =
        (n = i == null ? void 0 : i.published) == null ? void 0 : n._updatedAt,
      g = !!(i != null && i.liveEdit),
      m = !!(i != null && i.published),
      b = !!(i != null && i.draft),
      [_, y] = u.useState(null),
      x = he(_),
      P = !x || (x == null ? void 0 : x.width) < 300,
      [v, j] = u.useState(null),
      w = oe(c, (I) => I.onOlderRevision);
    u.useEffect(() => {
      if (v === 'syncing' && !h.isSyncing) {
        const I = setTimeout(() => j('saved'), nr);
        return () => clearTimeout(I);
      }
      if (v === 'saved') {
        const I = setTimeout(() => j(null), tr);
        return () => clearTimeout(I);
      }
    }, [v, p, h.isSyncing]),
      u.useLayoutEffect(() => {
        j(null);
      }, [a]),
      u.useLayoutEffect(() => {
        h.isSyncing && j('syncing');
      }, [h.isSyncing, p]);
    const C = u.useMemo(
        () =>
          e.jsx(er, {
            lastUpdated: p,
            status: v || (b ? 'changes' : void 0),
            onClick: s ? r : l,
            disabled: w,
            selected: s,
            collapsed: P,
          }),
        [b, s, r, l, p, w, v, P]
      ),
      S = u.useMemo(
        () =>
          (g || m) &&
          e.jsx(E, {
            marginRight: 1,
            children: e.jsx(Ba, {
              disabled: w,
              lastPublished: f,
              lastUpdated: p,
              liveEdit: g,
              collapsed: P,
            }),
          }),
        [P, f, p, g, m, w]
      );
    return e.jsxs(O, {
      align: 'center',
      'data-ui': 'DocumentSparkline',
      ref: y,
      children: [
        S,
        e.jsxs(O, {
          align: 'center',
          flex: 1,
          children: [
            C,
            !P && e.jsx(E, { marginLeft: 3, children: e.jsx(Oa, {}) }),
          ],
        }),
      ],
    });
  });
var wn = Object.freeze,
  or = Object.defineProperty,
  ar = (t, n) => wn(or(t, 'raw', { value: wn(n || t.slice()) })),
  Sn;
const rr = B(E)(
  Sn ||
    (Sn = ar([
      `
  min-width: 10em;
  max-width: 16em;
`,
    ]))
);
function ir(t) {
  const { actionsBoxRef: n } = t,
    { badges: s, timelineStore: a } = L(),
    o = oe(a, (i) => i.onOlderRevision);
  return u.useMemo(
    () =>
      e.jsx(E, {
        paddingLeft: 2,
        paddingRight: [2, 3],
        paddingY: 2,
        children: e.jsxs(O, {
          align: 'center',
          children: [
            e.jsx(E, { flex: [1, 2], children: s && e.jsx(sr, {}) }),
            e.jsx(rr, {
              flex: 1,
              marginLeft: [1, 3],
              ref: n,
              children: o ? e.jsx(Ta, {}) : e.jsx(Ra, {}),
            }),
          ],
        }),
      }),
    [n, s, o]
  );
}
function lr(t) {
  const {
      actionsBoxElement: n,
      activeIndex: s,
      as: a = 'div',
      children: o,
      id: i,
      onActionStart: r,
      onKeyDown: l,
      rootRef: c,
      states: d,
      ...h
    } = t,
    p = d[s],
    f = u.useCallback(
      (g) => {
        const m = d.filter((_) => _.shortcut && Wn(_.shortcut, g)),
          b = m[0];
        if (
          (m.length > 1 &&
            console.warn(
              'Keyboard shortcut conflict: More than one document action matches the shortcut "'.concat(
                b.shortcut,
                '"'
              )
            ),
          b && !b.disabled && b.onHandle)
        ) {
          g.preventDefault(), b.onHandle(), r(d.indexOf(b));
          return;
        }
        l && l(g);
      },
      [r, l, d]
    );
  return u.createElement(
    a,
    { id: i, onKeyDown: f, tabIndex: -1, ...h, ref: c },
    [
      o,
      p &&
        p.dialog &&
        e.jsx(Ae, {
          zOffset: 'paneFooter',
          children: e.jsx($e, { dialog: p.dialog, referenceElement: n }),
        }),
    ]
  );
}
const lt = ze.memo((t) => {
  const { actionsBoxElement: n, as: s = 'div', children: a, ...o } = t,
    { actions: i, editState: r } = L(),
    [l, c] = u.useState(-1),
    d = u.useCallback((p) => {
      c(p);
    }, []),
    h = u.useMemo(
      () => r && { ...r, onComplete: () => {}, revision: void 0 },
      [r]
    );
  return !h || !i
    ? null
    : e.jsx(Ne, {
        actionProps: h,
        actions: i,
        children: (p) => {
          let { states: f } = p;
          return e.jsx(lr, {
            ...o,
            activeIndex: l,
            actionsBoxElement: n,
            as: s,
            onActionStart: d,
            states: f,
            children: a,
          });
        },
      });
});
lt.displayName = 'DocumentActionShortcuts';
var In = Object.freeze,
  cr = Object.defineProperty,
  dr = (t, n) => In(cr(t, 'raw', { value: In(n || t.slice()) })),
  Cn;
const En = ['fixed', 'absolute'],
  ur = B(cs)(
    Cn ||
      (Cn = dr([
        `
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
`,
      ]))
  ),
  Sr = u.memo(function (n) {
    const { name: s } = Ln();
    return e.jsx(An, {
      name: n.pane.source || s,
      children: e.jsx(pr, { ...n }),
    });
  });
function pr(t) {
  var n;
  const { pane: s, paneKey: a } = t,
    { resolveNewDocumentOptions: o } = Ln().document,
    i = se(),
    r = hr(s.options, i.params),
    { documentType: l, isLoaded: c } = Wt(r.id, r.type),
    d = u.useMemo(
      () => o({ type: 'document', documentId: r.id, schemaType: r.type }),
      [r.id, r.type, o]
    ),
    [h, p] = Nt({ templateItems: d }),
    f = c && !p,
    g = u.useMemo(
      () => (f && l && r.type !== l ? fr(t, r, l) : t),
      [t, l, f, r]
    ),
    {
      ReferenceChildLink: m,
      handleEditReference: b,
      groupIndex: _,
      routerPanesState: y,
    } = i,
    x = ((n = y[_ + 1]) == null ? void 0 : n[0].params) || {},
    P = y.length,
    { parentRefPath: v } = x,
    j = u.useMemo(
      () =>
        v
          ? {
              path: Pe(v),
              state: _ >= P - 1 ? 'none' : _ >= P - 2 ? 'selected' : 'pressed',
            }
          : { path: [], state: 'none' },
      [v, _, P]
    );
  return r.type === '*' && !f
    ? e.jsx(ne, {
        flex: 2.5,
        minWidth: 320,
        paneKey: a,
        title: 'Loading document…',
      })
    : l
    ? e.jsx(
        $t,
        {
          ...g,
          children: e.jsx(Ft, {
            EditReferenceLinkComponent: m,
            onEditReference: b,
            initialValueTemplateItems: h,
            activePath: j,
            children: e.jsx(mr, {}),
          }),
        },
        ''.concat(l, '-').concat(r.id)
      )
    : e.jsx(nt, {
        flex: 2.5,
        minWidth: 320,
        paneKey: a,
        title: e.jsx(e.Fragment, { children: 'The document was not found' }),
        children: e.jsx(H, {
          space: 4,
          children: e.jsxs(D, {
            as: 'p',
            children: [
              'The document type is not defined, and a document with the ',
              e.jsx('code', { children: r.id }),
              ' ',
              'identifier could not be found.',
            ],
          }),
        }),
      });
}
function hr(t) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const s = Ht();
  return u.useMemo(() => {
    if (t.type && t.type !== '*') return t;
    const a = t.template || n.template,
      o = a ? s.find((r) => r.id === a) : void 0,
      i = o == null ? void 0 : o.schemaType;
    return i ? { ...t, type: i } : t;
  }, [t, n.template, s]);
}
function fr(t, n, s) {
  return { ...t, pane: { ...t.pane, options: { ...n, type: s } } };
}
function mr() {
  const {
      changesOpen: t,
      documentType: n,
      inspector: s,
      inspectOpen: a,
      onFocus: o,
      onPathOpen: i,
      onHistoryOpen: r,
      onKeyUp: l,
      paneKey: c,
      schemaType: d,
      value: h,
    } = L(),
    { collapsed: p } = Le(),
    f = Vt(),
    [g, m] = u.useState(null),
    [b, _] = u.useState(null),
    [y, x] = u.useState(null),
    [P, v] = u.useState(null),
    j = he(b),
    w = j == null ? void 0 : j.height,
    C = u.useCallback(
      (T) => {
        i(T), o(T);
      },
      [i, o]
    ),
    S = ds + (s ? Ce : 0),
    I = us + (s ? Ce : 0);
  return d
    ? e.jsxs(lt, {
        actionsBoxElement: y,
        as: ue,
        currentMinWidth: S,
        'data-testid': 'document-pane',
        flex: 2.5,
        id: c,
        minWidth: I,
        onKeyUp: l,
        rootRef: m,
        children: [
          e.jsx(Ve, {
            position: En,
            zOffset: f.portal,
            children: e.jsx(O, {
              direction: 'column',
              flex: 1,
              height: p ? void 0 : 'fill',
              children: e.jsx(ur, {
                'data-testid': 'change-connector-root',
                isReviewChangesOpen: t,
                onOpenReviewChanges: r,
                onSetFocus: C,
                children: e.jsx(ya, {
                  footerHeight: w || null,
                  isInspectOpen: a,
                  rootElement: g,
                  setDocumentPanelPortalElement: v,
                }),
              }),
            }),
          }),
          e.jsx(fe, {
            __unstable_elements: { [Bn]: P },
            children: e.jsx(Ve, {
              position: En,
              zOffset: f.portal,
              children: e.jsx(Gt, {
                ref: _,
                children: e.jsx(ir, { actionsBoxRef: x }),
              }),
            }),
          }),
          e.jsx(Bo, {}),
        ],
      })
    : e.jsx(nt, {
        currentMinWidth: S,
        flex: 2.5,
        minWidth: I,
        paneKey: c,
        title: e.jsxs(e.Fragment, {
          children: ['Unknown document type: ', e.jsx('code', { children: n })],
        }),
        tone: 'caution',
        children: e.jsxs(H, {
          space: 4,
          children: [
            n &&
              e.jsxs(D, {
                as: 'p',
                children: [
                  'This document has the schema type ',
                  e.jsx('code', { children: n }),
                  ', which is not defined as a type in the local content studio schema.',
                ],
              }),
            !n &&
              e.jsx(D, {
                as: 'p',
                children:
                  'This document does not exist, and no schema type was specified for it.',
              }),
            Ut,
          ],
        }),
      });
}
function xr() {
  return e.jsx(V, {
    height: 'fill',
    children: e.jsx(O, {
      align: 'center',
      height: 'fill',
      justify: 'center',
      padding: 4,
      sizing: 'border',
      children: e.jsx(Z, {
        width: 0,
        children: e.jsx(V, {
          padding: 4,
          radius: 2,
          shadow: 1,
          tone: 'caution',
          children: e.jsxs(O, {
            children: [
              e.jsx(E, {
                children: e.jsx(D, { size: 1, children: e.jsx(kn, {}) }),
              }),
              e.jsxs(H, {
                flex: 1,
                marginLeft: 3,
                space: 3,
                children: [
                  e.jsx(D, {
                    as: 'h1',
                    size: 1,
                    weight: 'bold',
                    children: 'No document types',
                  }),
                  e.jsx(D, {
                    as: 'p',
                    muted: !0,
                    size: 1,
                    children:
                      'Please define at least one document type in your schema.',
                  }),
                  e.jsx(D, {
                    as: 'p',
                    muted: !0,
                    size: 1,
                    children: e.jsx('a', {
                      href: 'https://www.sanity.io/docs/create-a-schema-and-configure-sanity-studio',
                      target: '_blank',
                      rel: 'noreferrer',
                      children: 'Learn how to add a document type →',
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  });
}
var Dn = Object.freeze,
  gr = Object.defineProperty,
  br = (t, n) => Dn(gr(t, 'raw', { value: Dn(n || t.slice()) })),
  Rn;
const vr = B(oo)(
    Rn ||
      (Rn = br([
        `
  min-height: 100%;
  min-width: 320px;
`,
      ]))
  ),
  jr = Wn('mod+s'),
  yr = u.memo(function (n) {
    let { onPaneChange: s } = n;
    var a;
    const { push: o } = Me(),
      i = Kt(),
      { layoutCollapsed: r, setLayoutCollapsed: l } = q(),
      { paneDataItems: c, resolvedPanes: d } = bo(),
      h = Te(u.useCallback((_) => typeof _.intent == 'string', [])),
      [p, f] = u.useState(null),
      g = u.useCallback(() => l(!0), [l]),
      m = u.useCallback(() => l(!1), [l]);
    return (
      u.useEffect(() => {
        d.length && s(d);
      }, [s, d]),
      u.useEffect(() => {
        const _ = (y) => {
          jr(y) &&
            (y.preventDefault(),
            o({
              closable: !0,
              id: 'auto-save-message',
              status: 'info',
              title: 'Your work is automatically saved!',
              duration: 4e3,
            }));
        };
        return (
          window.addEventListener('keydown', _),
          () => window.removeEventListener('keydown', _)
        );
      }, [o]),
      ((a = i._original) == null ? void 0 : a.types.some(Xt))
        ? e.jsxs(fe, {
            element: p || null,
            children: [
              e.jsxs(vr, {
                flex: 1,
                height: r ? void 0 : 'fill',
                minWidth: 512,
                onCollapse: g,
                onExpand: m,
                children: [
                  c.map((_) => {
                    let {
                      active: y,
                      childItemId: x,
                      groupIndex: P,
                      itemId: v,
                      key: j,
                      pane: w,
                      index: C,
                      params: S,
                      path: I,
                      payload: T,
                      siblingIndex: k,
                      selected: M,
                    } = _;
                    return e.jsx(
                      u.Fragment,
                      {
                        children:
                          w === Se
                            ? e.jsx(ne, { paneKey: j, path: I, selected: M })
                            : e.jsx(Oo, {
                                active: y,
                                groupIndex: P,
                                index: C,
                                pane: w,
                                childItemId: x,
                                itemId: v,
                                paneKey: j,
                                params: S,
                                payload: T,
                                path: I,
                                selected: M,
                                siblingIndex: k,
                              }),
                      },
                      ''.concat(w === Se ? 'loading' : w.type, '-').concat(C)
                    );
                  }),
                  c.length <= 1 &&
                    h &&
                    e.jsx(ne, { paneKey: 'intent-resolver' }),
                ],
              }),
              e.jsx('div', { 'data-portal': '', ref: f }),
            ],
          })
        : e.jsx(xr, {})
    );
  });
function _r(t) {
  let {
    tool: { options: n },
  } = t;
  const { unstable_sources: s } = ps(),
    [a] = s,
    { source: o, defaultDocumentNode: i, structure: r } = n || {};
  u.useEffect(() => (be([]), () => be([])), []);
  const [{ error: l }, c] = u.useState({ error: null });
  return l
    ? e.jsx(Io, { error: l })
    : e.jsx(hs, {
        onCatch: c,
        children: e.jsx(An, {
          name: o || a.name,
          children: e.jsxs(fs, {
            defaultDocumentNode: i,
            structure: r,
            children: [e.jsx(yr, { onPaneChange: be }), e.jsx(yo, {})],
          }),
        }),
      });
}
var Ir = Object.freeze({ __proto__: null, default: _r });
export { Sr as DocumentPane, Ir as index, Wo as useDeskToolSetting };
