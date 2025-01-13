"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [123],
  {
    15587: (e, t, r) => {
      r.d(t, { Eq: () => u });
      var n = new WeakMap(),
        i = new WeakMap(),
        o = {},
        l = 0,
        a = function (e) {
          return e && (e.host || a(e.parentNode));
        },
        s = function (e, t, r, s) {
          var u = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var r = a(e);
              return r && t.contains(r)
                ? r
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          o[r] || (o[r] = new WeakMap());
          var c = o[r],
            d = [],
            f = new Set(),
            p = new Set(u),
            h = function (e) {
              !e || f.has(e) || (f.add(e), h(e.parentNode));
            };
          u.forEach(h);
          var m = function (e) {
            !e ||
              p.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) m(e);
                else
                  try {
                    var t = e.getAttribute(s),
                      o = null !== t && "false" !== t,
                      l = (n.get(e) || 0) + 1,
                      a = (c.get(e) || 0) + 1;
                    n.set(e, l),
                      c.set(e, a),
                      d.push(e),
                      1 === l && o && i.set(e, !0),
                      1 === a && e.setAttribute(r, "true"),
                      o || e.setAttribute(s, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            m(t),
            f.clear(),
            l++,
            function () {
              d.forEach(function (e) {
                var t = n.get(e) - 1,
                  o = c.get(e) - 1;
                n.set(e, t),
                  c.set(e, o),
                  t || (i.has(e) || e.removeAttribute(s), i.delete(e)),
                  o || e.removeAttribute(r);
              }),
                --l ||
                  ((n = new WeakMap()),
                  (n = new WeakMap()),
                  (i = new WeakMap()),
                  (o = {}));
            }
          );
        },
        u = function (e, t, r) {
          void 0 === r && (r = "data-aria-hidden");
          var n,
            i = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ((n = e),
              "undefined" == typeof document
                ? null
                : (Array.isArray(n) ? n[0] : n).ownerDocument.body);
          return o
            ? (i.push.apply(i, Array.from(o.querySelectorAll("[aria-live]"))),
              s(i, o, r, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    77711: (e, t, r) => {
      r.d(t, { default: () => i.a });
      var n = r(21956),
        i = r.n(n);
    },
    5565: (e, t, r) => {
      r.d(t, { default: () => i.a });
      var n = r(4146),
        i = r.n(n);
    },
    21956: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(60306)._(r(30580));
      function i(e, t) {
        var r;
        let i = {};
        "function" == typeof e && (i.loader = e);
        let o = { ...i, ...t };
        return (0, n.default)({
          ...o,
          modules: null == (r = o.loadableGenerated) ? void 0 : r.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4146: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return s;
          },
          getImageProps: function () {
            return a;
          },
        });
      let n = r(60306),
        i = r(40666),
        o = r(87970),
        l = n._(r(65514));
      function a(e) {
        let { props: t } = (0, i.getImgProps)(e, {
          defaultLoader: l.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let s = o.Image;
    },
    39827: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(93719);
      function i(e) {
        let { reason: t, children: r } = e;
        if ("undefined" == typeof window) throw new n.BailoutToCSRError(t);
        return r;
      }
    },
    30580: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let n = r(95155),
        i = r(12115),
        o = r(39827),
        l = r(79214);
      function a(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let s = {
          loader: () => Promise.resolve(a(() => null)),
          loading: null,
          ssr: !0,
        },
        u = function (e) {
          let t = { ...s, ...e },
            r = (0, i.lazy)(() => t.loader().then(a)),
            u = t.loading;
          function c(e) {
            let a = u
                ? (0, n.jsx)(u, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              s = !t.ssr || !!t.loading,
              c = s ? i.Suspense : i.Fragment,
              d = t.ssr
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, n.jsx)(l.PreloadChunks, { moduleIds: t.modules })
                        : null,
                      (0, n.jsx)(r, { ...e }),
                    ],
                  })
                : (0, n.jsx)(o.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, n.jsx)(r, { ...e }),
                  });
            return (0, n.jsx)(c, {
              ...(s ? { fallback: a } : {}),
              children: d,
            });
          }
          return (c.displayName = "LoadableComponent"), c;
        };
    },
    79214: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadChunks", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(95155),
        i = r(47650),
        o = r(75861),
        l = r(18284);
      function a(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let r = o.workAsyncStorage.getStore();
        if (void 0 === r) return null;
        let a = [];
        if (r.reactLoadableManifest && t) {
          let e = r.reactLoadableManifest;
          for (let r of t) {
            if (!e[r]) continue;
            let t = e[r].files;
            a.push(...t);
          }
        }
        return 0 === a.length
          ? null
          : (0, n.jsx)(n.Fragment, {
              children: a.map((e) => {
                let t = r.assetPrefix + "/_next/" + (0, l.encodeURIPath)(e);
                return e.endsWith(".css")
                  ? (0, n.jsx)(
                      "link",
                      {
                        precedence: "dynamic",
                        href: t,
                        rel: "stylesheet",
                        as: "style",
                      },
                      e
                    )
                  : ((0, i.preload)(t, { as: "script", fetchPriority: "low" }),
                    null);
              }),
            });
      }
    },
    95714: (e, t, r) => {
      r.d(t, { E9: () => o, Mi: () => n, pN: () => i, xi: () => l });
      var n = "right-scroll-bar-position",
        i = "width-before-scroll-bar",
        o = "with-scroll-bars-hidden",
        l = "--removed-body-scroll-bar-size";
    },
    10101: (e, t, r) => {
      r.d(t, { jp: () => m });
      var n = r(12115),
        i = r(75219),
        o = r(95714),
        l = { left: 0, top: 0, right: 0, gap: 0 },
        a = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        s = function (e) {
          var t = window.getComputedStyle(document.body),
            r = t["padding" === e ? "paddingLeft" : "marginLeft"],
            n = t["padding" === e ? "paddingTop" : "marginTop"],
            i = t["padding" === e ? "paddingRight" : "marginRight"];
          return [a(r), a(n), a(i)];
        },
        u = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return l;
          var t = s(e),
            r = document.documentElement.clientWidth,
            n = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, n - r + t[2] - t[0]),
          };
        },
        c = (0, i.T0)(),
        d = "data-scroll-locked",
        f = function (e, t, r, n) {
          var i = e.left,
            l = e.top,
            a = e.right,
            s = e.gap;
          return (
            void 0 === r && (r = "margin"),
            "\n  ."
              .concat(o.E9, " {\n   overflow: hidden ")
              .concat(n, ";\n   padding-right: ")
              .concat(s, "px ")
              .concat(n, ";\n  }\n  body[")
              .concat(d, "] {\n    overflow: hidden ")
              .concat(n, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(n, ";"),
                  "margin" === r &&
                    "\n    padding-left: "
                      .concat(i, "px;\n    padding-top: ")
                      .concat(l, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(s, "px ")
                      .concat(n, ";\n    "),
                  "padding" === r &&
                    "padding-right: ".concat(s, "px ").concat(n, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(o.Mi, " {\n    right: ")
              .concat(s, "px ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(o.pN, " {\n    margin-right: ")
              .concat(s, "px ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(o.Mi, " .")
              .concat(o.Mi, " {\n    right: 0 ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(o.pN, " .")
              .concat(o.pN, " {\n    margin-right: 0 ")
              .concat(n, ";\n  }\n  \n  body[")
              .concat(d, "] {\n    ")
              .concat(o.xi, ": ")
              .concat(s, "px;\n  }\n")
          );
        },
        p = function () {
          var e = parseInt(document.body.getAttribute(d) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        h = function () {
          n.useEffect(function () {
            return (
              document.body.setAttribute(d, (p() + 1).toString()),
              function () {
                var e = p() - 1;
                e <= 0
                  ? document.body.removeAttribute(d)
                  : document.body.setAttribute(d, e.toString());
              }
            );
          }, []);
        },
        m = function (e) {
          var t = e.noRelative,
            r = e.noImportant,
            i = e.gapMode,
            o = void 0 === i ? "margin" : i;
          h();
          var l = n.useMemo(
            function () {
              return u(o);
            },
            [o]
          );
          return n.createElement(c, {
            styles: f(l, !t, o, r ? "" : "!important"),
          });
        };
    },
    75219: (e, t, r) => {
      r.d(t, { T0: () => a });
      var n,
        i = r(12115),
        o = function () {
          var e = 0,
            t = null;
          return {
            add: function (i) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = n || r.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var o, l;
                (o = t).styleSheet
                  ? (o.styleSheet.cssText = i)
                  : o.appendChild(document.createTextNode(i)),
                  (l = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(l);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        l = function () {
          var e = o();
          return function (t, r) {
            i.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && r]
            );
          };
        },
        a = function () {
          var e = l();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        };
    },
    42607: (e, t, r) => {
      r.d(t, { S: () => a });
      var n = r(12115);
      function i(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var o = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
        l = new WeakMap();
      function a(e, t) {
        var r,
          a,
          s,
          u =
            ((r = t || null),
            (a = function (t) {
              return e.forEach(function (e) {
                return i(e, t);
              });
            }),
            ((s = (0, n.useState)(function () {
              return {
                value: r,
                callback: a,
                facade: {
                  get current() {
                    return s.value;
                  },
                  set current(value) {
                    var e = s.value;
                    e !== value && ((s.value = value), s.callback(value, e));
                  },
                },
              };
            })[0]).callback = a),
            s.facade);
        return (
          o(
            function () {
              var t = l.get(u);
              if (t) {
                var r = new Set(t),
                  n = new Set(e),
                  o = u.current;
                r.forEach(function (e) {
                  n.has(e) || i(e, null);
                }),
                  n.forEach(function (e) {
                    r.has(e) || i(e, o);
                  });
              }
              l.set(u, e);
            },
            [e]
          ),
          u
        );
      }
    },
    66377: (e, t, r) => {
      r.d(t, { m: () => l });
      var n = r(6476),
        i = r(12115),
        o = function (e) {
          var t = e.sideCar,
            r = (0, n.Tt)(e, ["sideCar"]);
          if (!t)
            throw Error(
              "Sidecar: please provide `sideCar` property to import the right car"
            );
          var o = t.read();
          if (!o) throw Error("Sidecar medium not found");
          return i.createElement(o, (0, n.Cl)({}, r));
        };
      function l(e, t) {
        return e.useMedium(t), o;
      }
      o.isSideCarExport = !0;
    },
    44577: (e, t, r) => {
      r.d(t, { f: () => o });
      var n = r(6476);
      function i(e) {
        return e;
      }
      function o(e) {
        void 0 === e && (e = {});
        var t,
          r,
          o,
          l =
            (void 0 === t && (t = i),
            (r = []),
            (o = !1),
            {
              read: function () {
                if (o)
                  throw Error(
                    "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                  );
                return r.length ? r[r.length - 1] : null;
              },
              useMedium: function (e) {
                var n = t(e, o);
                return (
                  r.push(n),
                  function () {
                    r = r.filter(function (e) {
                      return e !== n;
                    });
                  }
                );
              },
              assignSyncMedium: function (e) {
                for (o = !0; r.length; ) {
                  var t = r;
                  (r = []), t.forEach(e);
                }
                r = {
                  push: function (t) {
                    return e(t);
                  },
                  filter: function () {
                    return r;
                  },
                };
              },
              assignMedium: function (e) {
                o = !0;
                var t = [];
                if (r.length) {
                  var n = r;
                  (r = []), n.forEach(e), (t = r);
                }
                var i = function () {
                    var r = t;
                    (t = []), r.forEach(e);
                  },
                  l = function () {
                    return Promise.resolve().then(i);
                  };
                l(),
                  (r = {
                    push: function (e) {
                      t.push(e), l();
                    },
                    filter: function (e) {
                      return (t = t.filter(e)), r;
                    },
                  });
              },
            });
        return (l.options = (0, n.Cl)({ async: !0, ssr: !1 }, e)), l;
      }
    },
    93610: (e, t, r) => {
      r.d(t, { m: () => n });
      function n(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((e?.(n), !1 === r || !n.defaultPrevented)) return t?.(n);
        };
      }
    },
    49741: (e, t, r) => {
      r.d(t, { N: () => s });
      var n = r(12115),
        i = r(18166),
        o = r(88068),
        l = r(12317),
        a = r(95155);
      function s(e) {
        let t = e + "CollectionProvider",
          [r, s] = (0, i.A)(t),
          [u, c] = r(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          d = (e) => {
            let { scope: t, children: r } = e,
              i = n.useRef(null),
              o = n.useRef(new Map()).current;
            return (0, a.jsx)(u, {
              scope: t,
              itemMap: o,
              collectionRef: i,
              children: r,
            });
          };
        d.displayName = t;
        let f = e + "CollectionSlot",
          p = n.forwardRef((e, t) => {
            let { scope: r, children: n } = e,
              i = c(f, r),
              s = (0, o.s)(t, i.collectionRef);
            return (0, a.jsx)(l.DX, { ref: s, children: n });
          });
        p.displayName = f;
        let h = e + "CollectionItemSlot",
          m = "data-radix-collection-item",
          v = n.forwardRef((e, t) => {
            let { scope: r, children: i, ...s } = e,
              u = n.useRef(null),
              d = (0, o.s)(t, u),
              f = c(h, r);
            return (
              n.useEffect(
                () => (
                  f.itemMap.set(u, { ref: u, ...s }),
                  () => void f.itemMap.delete(u)
                )
              ),
              (0, a.jsx)(l.DX, { [m]: "", ref: d, children: i })
            );
          });
        return (
          (v.displayName = h),
          [
            { Provider: d, Slot: p, ItemSlot: v },
            function (t) {
              let r = c(e + "CollectionConsumer", t);
              return n.useCallback(() => {
                let e = r.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll("[".concat(m, "]")));
                return Array.from(r.itemMap.values()).sort(
                  (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
                );
              }, [r.collectionRef, r.itemMap]);
            },
            s,
          ]
        );
      }
    },
    88068: (e, t, r) => {
      r.d(t, { s: () => l, t: () => o });
      var n = r(12115);
      function i(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function o(...e) {
        return (t) => {
          let r = !1,
            n = e.map((e) => {
              let n = i(e, t);
              return r || "function" != typeof n || (r = !0), n;
            });
          if (r)
            return () => {
              for (let t = 0; t < n.length; t++) {
                let r = n[t];
                "function" == typeof r ? r() : i(e[t], null);
              }
            };
        };
      }
      function l(...e) {
        return n.useCallback(o(...e), e);
      }
    },
    18166: (e, t, r) => {
      r.d(t, { A: () => o });
      var n = r(12115),
        i = r(95155);
      function o(e, t = []) {
        let r = [],
          l = () => {
            let t = r.map((e) => n.createContext(e));
            return function (r) {
              let i = r?.[e] || t;
              return n.useMemo(
                () => ({ [`__scope${e}`]: { ...r, [e]: i } }),
                [r, i]
              );
            };
          };
        return (
          (l.scopeName = e),
          [
            function (t, o) {
              let l = n.createContext(o),
                a = r.length;
              r = [...r, o];
              let s = (t) => {
                let { scope: r, children: o, ...s } = t,
                  u = r?.[e]?.[a] || l,
                  c = n.useMemo(() => s, Object.values(s));
                return (0, i.jsx)(u.Provider, { value: c, children: o });
              };
              return (
                (s.displayName = t + "Provider"),
                [
                  s,
                  function (r, i) {
                    let s = i?.[e]?.[a] || l,
                      u = n.useContext(s);
                    if (u) return u;
                    if (void 0 !== o) return o;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let i = r.reduce((t, { useScope: r, scopeName: n }) => {
                    let i = r(e)[`__scope${n}`];
                    return { ...t, ...i };
                  }, {});
                  return n.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: i }),
                    [i]
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(l, ...t),
          ]
        );
      }
    },
    4256: (e, t, r) => {
      r.d(t, { jH: () => o });
      var n = r(12115);
      r(95155);
      var i = n.createContext(void 0);
      function o(e) {
        let t = n.useContext(i);
        return e || t || "ltr";
      }
    },
    59674: (e, t, r) => {
      r.d(t, { qW: () => f });
      var n,
        i = r(12115),
        o = r(93610),
        l = r(23360),
        a = r(88068),
        s = r(41524),
        u = r(95155),
        c = "dismissableLayer.update",
        d = i.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        f = i.forwardRef((e, t) => {
          var r, f;
          let {
              disableOutsidePointerEvents: m = !1,
              onEscapeKeyDown: v,
              onPointerDownOutside: g,
              onFocusOutside: y,
              onInteractOutside: b,
              onDismiss: w,
              ...x
            } = e,
            E = i.useContext(d),
            [S, A] = i.useState(null),
            k =
              null !== (f = null == S ? void 0 : S.ownerDocument) &&
              void 0 !== f
                ? f
                : null === (r = globalThis) || void 0 === r
                ? void 0
                : r.document,
            [, P] = i.useState({}),
            C = (0, a.s)(t, (e) => A(e)),
            T = Array.from(E.layers),
            [M] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1),
            O = T.indexOf(M),
            R = S ? T.indexOf(S) : -1,
            j = E.layersWithOutsidePointerEventsDisabled.size > 0,
            L = R >= O,
            F = (function (e) {
              var t;
              let r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                n = (0, s.c)(e),
                o = i.useRef(!1),
                l = i.useRef(() => {});
              return (
                i.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !o.current) {
                        let t = function () {
                            h("dismissableLayer.pointerDownOutside", n, i, {
                              discrete: !0,
                            });
                          },
                          i = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (r.removeEventListener("click", l.current),
                            (l.current = t),
                            r.addEventListener("click", l.current, {
                              once: !0,
                            }))
                          : t();
                      } else r.removeEventListener("click", l.current);
                      o.current = !1;
                    },
                    t = window.setTimeout(() => {
                      r.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      r.removeEventListener("pointerdown", e),
                      r.removeEventListener("click", l.current);
                  };
                }, [r, n]),
                { onPointerDownCapture: () => (o.current = !0) }
              );
            })((e) => {
              let t = e.target,
                r = [...E.branches].some((e) => e.contains(t));
              !L ||
                r ||
                (null == g || g(e),
                null == b || b(e),
                e.defaultPrevented || null == w || w());
            }, k),
            N = (function (e) {
              var t;
              let r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                n = (0, s.c)(e),
                o = i.useRef(!1);
              return (
                i.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !o.current &&
                      h(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    r.addEventListener("focusin", e),
                    () => r.removeEventListener("focusin", e)
                  );
                }, [r, n]),
                {
                  onFocusCapture: () => (o.current = !0),
                  onBlurCapture: () => (o.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...E.branches].some((e) => e.contains(t)) ||
                (null == y || y(e),
                null == b || b(e),
                e.defaultPrevented || null == w || w());
            }, k);
          return (
            !(function (e, t = globalThis?.document) {
              let r = (0, s.c)(e);
              i.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && r(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [r, t]);
            })((e) => {
              R !== E.layers.size - 1 ||
                (null == v || v(e),
                !e.defaultPrevented && w && (e.preventDefault(), w()));
            }, k),
            i.useEffect(() => {
              if (S)
                return (
                  m &&
                    (0 === E.layersWithOutsidePointerEventsDisabled.size &&
                      ((n = k.body.style.pointerEvents),
                      (k.body.style.pointerEvents = "none")),
                    E.layersWithOutsidePointerEventsDisabled.add(S)),
                  E.layers.add(S),
                  p(),
                  () => {
                    m &&
                      1 === E.layersWithOutsidePointerEventsDisabled.size &&
                      (k.body.style.pointerEvents = n);
                  }
                );
            }, [S, k, m, E]),
            i.useEffect(
              () => () => {
                S &&
                  (E.layers.delete(S),
                  E.layersWithOutsidePointerEventsDisabled.delete(S),
                  p());
              },
              [S, E]
            ),
            i.useEffect(() => {
              let e = () => P({});
              return (
                document.addEventListener(c, e),
                () => document.removeEventListener(c, e)
              );
            }, []),
            (0, u.jsx)(l.sG.div, {
              ...x,
              ref: C,
              style: {
                pointerEvents: j ? (L ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, o.m)(e.onFocusCapture, N.onFocusCapture),
              onBlurCapture: (0, o.m)(e.onBlurCapture, N.onBlurCapture),
              onPointerDownCapture: (0, o.m)(
                e.onPointerDownCapture,
                F.onPointerDownCapture
              ),
            })
          );
        });
      function p() {
        let e = new CustomEvent(c);
        document.dispatchEvent(e);
      }
      function h(e, t, r, n) {
        let { discrete: i } = n,
          o = r.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
        t && o.addEventListener(e, t, { once: !0 }),
          i ? (0, l.hO)(o, a) : o.dispatchEvent(a);
      }
      (f.displayName = "DismissableLayer"),
        (i.forwardRef((e, t) => {
          let r = i.useContext(d),
            n = i.useRef(null),
            o = (0, a.s)(t, n);
          return (
            i.useEffect(() => {
              let e = n.current;
              if (e)
                return (
                  r.branches.add(e),
                  () => {
                    r.branches.delete(e);
                  }
                );
            }, [r.branches]),
            (0, u.jsx)(l.sG.div, { ...e, ref: o })
          );
        }).displayName = "DismissableLayerBranch");
    },
    62292: (e, t, r) => {
      r.d(t, { Oh: () => o });
      var n = r(12115),
        i = 0;
      function o() {
        n.useEffect(() => {
          var e, t;
          let r = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null !== (e = r[0]) && void 0 !== e ? e : l()
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null !== (t = r[1]) && void 0 !== t ? t : l()
            ),
            i++,
            () => {
              1 === i &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                i--;
            }
          );
        }, []);
      }
      function l() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
    },
    20196: (e, t, r) => {
      r.d(t, { n: () => d });
      var n = r(12115),
        i = r(88068),
        o = r(23360),
        l = r(41524),
        a = r(95155),
        s = "focusScope.autoFocusOnMount",
        u = "focusScope.autoFocusOnUnmount",
        c = { bubbles: !1, cancelable: !0 },
        d = n.forwardRef((e, t) => {
          let {
              loop: r = !1,
              trapped: d = !1,
              onMountAutoFocus: v,
              onUnmountAutoFocus: g,
              ...y
            } = e,
            [b, w] = n.useState(null),
            x = (0, l.c)(v),
            E = (0, l.c)(g),
            S = n.useRef(null),
            A = (0, i.s)(t, (e) => w(e)),
            k = n.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          n.useEffect(() => {
            if (d) {
              let e = function (e) {
                  if (k.paused || !b) return;
                  let t = e.target;
                  b.contains(t)
                    ? (S.current = t)
                    : h(S.current, { select: !0 });
                },
                t = function (e) {
                  if (k.paused || !b) return;
                  let t = e.relatedTarget;
                  null === t || b.contains(t) || h(S.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let r = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && h(b);
              });
              return (
                b && r.observe(b, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    r.disconnect();
                }
              );
            }
          }, [d, b, k.paused]),
            n.useEffect(() => {
              if (b) {
                m.add(k);
                let e = document.activeElement;
                if (!b.contains(e)) {
                  let t = new CustomEvent(s, c);
                  b.addEventListener(s, x),
                    b.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          r = document.activeElement;
                        for (let n of e)
                          if (
                            (h(n, { select: t }), document.activeElement !== r)
                          )
                            return;
                      })(
                        f(b).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && h(b));
                }
                return () => {
                  b.removeEventListener(s, x),
                    setTimeout(() => {
                      let t = new CustomEvent(u, c);
                      b.addEventListener(u, E),
                        b.dispatchEvent(t),
                        t.defaultPrevented ||
                          h(null != e ? e : document.body, { select: !0 }),
                        b.removeEventListener(u, E),
                        m.remove(k);
                    }, 0);
                };
              }
            }, [b, x, E, k]);
          let P = n.useCallback(
            (e) => {
              if ((!r && !d) || k.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                n = document.activeElement;
              if (t && n) {
                let t = e.currentTarget,
                  [i, o] = (function (e) {
                    let t = f(e);
                    return [p(t, e), p(t.reverse(), e)];
                  })(t);
                i && o
                  ? e.shiftKey || n !== o
                    ? e.shiftKey &&
                      n === i &&
                      (e.preventDefault(), r && h(o, { select: !0 }))
                    : (e.preventDefault(), r && h(i, { select: !0 }))
                  : n === t && e.preventDefault();
              }
            },
            [r, d, k.paused]
          );
          return (0, a.jsx)(o.sG.div, {
            tabIndex: -1,
            ...y,
            ref: A,
            onKeyDown: P,
          });
        });
      function f(e) {
        let t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; r.nextNode(); ) t.push(r.currentNode);
        return t;
      }
      function p(e, t) {
        for (let r of e)
          if (
            !(function (e, t) {
              let { upTo: r } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === r || e !== r); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(r, { upTo: t })
          )
            return r;
      }
      function h(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var r;
          let n = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== n &&
              (r = e) instanceof HTMLInputElement &&
              "select" in r &&
              t &&
              e.select();
        }
      }
      d.displayName = "FocusScope";
      var m = (function () {
        let e = [];
        return {
          add(t) {
            let r = e[0];
            t !== r && (null == r || r.pause()), (e = v(e, t)).unshift(t);
          },
          remove(t) {
            var r;
            null === (r = (e = v(e, t))[0]) || void 0 === r || r.resume();
          },
        };
      })();
      function v(e, t) {
        let r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r;
      }
    },
    67668: (e, t, r) => {
      r.d(t, { B: () => s });
      var n,
        i = r(12115),
        o = r(46611),
        l = (n || (n = r.t(i, 2)))["useId".toString()] || (() => void 0),
        a = 0;
      function s(e) {
        let [t, r] = i.useState(l());
        return (
          (0, o.N)(() => {
            e || r((e) => e ?? String(a++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    40905: (e, t, r) => {
      r.d(t, {
        Mz: () => eX,
        i3: () => eU,
        UC: () => eY,
        bL: () => eG,
        Bk: () => eR,
      });
      var n = r(12115);
      let i = ["top", "right", "bottom", "left"],
        o = Math.min,
        l = Math.max,
        a = Math.round,
        s = Math.floor,
        u = (e) => ({ x: e, y: e }),
        c = { left: "right", right: "left", bottom: "top", top: "bottom" },
        d = { start: "end", end: "start" };
      function f(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function p(e) {
        return e.split("-")[0];
      }
      function h(e) {
        return e.split("-")[1];
      }
      function m(e) {
        return "x" === e ? "y" : "x";
      }
      function v(e) {
        return "y" === e ? "height" : "width";
      }
      function g(e) {
        return ["top", "bottom"].includes(p(e)) ? "y" : "x";
      }
      function y(e) {
        return e.replace(/start|end/g, (e) => d[e]);
      }
      function b(e) {
        return e.replace(/left|right|bottom|top/g, (e) => c[e]);
      }
      function w(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function x(e) {
        let { x: t, y: r, width: n, height: i } = e;
        return {
          width: n,
          height: i,
          top: r,
          left: t,
          right: t + n,
          bottom: r + i,
          x: t,
          y: r,
        };
      }
      function E(e, t, r) {
        let n,
          { reference: i, floating: o } = e,
          l = g(t),
          a = m(g(t)),
          s = v(a),
          u = p(t),
          c = "y" === l,
          d = i.x + i.width / 2 - o.width / 2,
          f = i.y + i.height / 2 - o.height / 2,
          y = i[s] / 2 - o[s] / 2;
        switch (u) {
          case "top":
            n = { x: d, y: i.y - o.height };
            break;
          case "bottom":
            n = { x: d, y: i.y + i.height };
            break;
          case "right":
            n = { x: i.x + i.width, y: f };
            break;
          case "left":
            n = { x: i.x - o.width, y: f };
            break;
          default:
            n = { x: i.x, y: i.y };
        }
        switch (h(t)) {
          case "start":
            n[a] -= y * (r && c ? -1 : 1);
            break;
          case "end":
            n[a] += y * (r && c ? -1 : 1);
        }
        return n;
      }
      let S = async (e, t, r) => {
        let {
            placement: n = "bottom",
            strategy: i = "absolute",
            middleware: o = [],
            platform: l,
          } = r,
          a = o.filter(Boolean),
          s = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          u = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: i,
          }),
          { x: c, y: d } = E(u, n, s),
          f = n,
          p = {},
          h = 0;
        for (let r = 0; r < a.length; r++) {
          let { name: o, fn: m } = a[r],
            {
              x: v,
              y: g,
              data: y,
              reset: b,
            } = await m({
              x: c,
              y: d,
              initialPlacement: n,
              placement: f,
              strategy: i,
              middlewareData: p,
              rects: u,
              platform: l,
              elements: { reference: e, floating: t },
            });
          (c = null != v ? v : c),
            (d = null != g ? g : d),
            (p = { ...p, [o]: { ...p[o], ...y } }),
            b &&
              h <= 50 &&
              (h++,
              "object" == typeof b &&
                (b.placement && (f = b.placement),
                b.rects &&
                  (u =
                    !0 === b.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: i,
                        })
                      : b.rects),
                ({ x: c, y: d } = E(u, f, s))),
              (r = -1));
        }
        return { x: c, y: d, placement: f, strategy: i, middlewareData: p };
      };
      async function A(e, t) {
        var r;
        void 0 === t && (t = {});
        let { x: n, y: i, platform: o, rects: l, elements: a, strategy: s } = e,
          {
            boundary: u = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: d = "floating",
            altBoundary: p = !1,
            padding: h = 0,
          } = f(t, e),
          m = w(h),
          v = a[p ? ("floating" === d ? "reference" : "floating") : d],
          g = x(
            await o.getClippingRect({
              element:
                null ==
                  (r = await (null == o.isElement ? void 0 : o.isElement(v))) ||
                r
                  ? v
                  : v.contextElement ||
                    (await (null == o.getDocumentElement
                      ? void 0
                      : o.getDocumentElement(a.floating))),
              boundary: u,
              rootBoundary: c,
              strategy: s,
            })
          ),
          y =
            "floating" === d
              ? {
                  x: n,
                  y: i,
                  width: l.floating.width,
                  height: l.floating.height,
                }
              : l.reference,
          b = await (null == o.getOffsetParent
            ? void 0
            : o.getOffsetParent(a.floating)),
          E = ((await (null == o.isElement ? void 0 : o.isElement(b))) &&
            (await (null == o.getScale ? void 0 : o.getScale(b)))) || {
            x: 1,
            y: 1,
          },
          S = x(
            o.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: y,
                  offsetParent: b,
                  strategy: s,
                })
              : y
          );
        return {
          top: (g.top - S.top + m.top) / E.y,
          bottom: (S.bottom - g.bottom + m.bottom) / E.y,
          left: (g.left - S.left + m.left) / E.x,
          right: (S.right - g.right + m.right) / E.x,
        };
      }
      function k(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function P(e) {
        return i.some((t) => e[t] >= 0);
      }
      async function C(e, t) {
        let { placement: r, platform: n, elements: i } = e,
          o = await (null == n.isRTL ? void 0 : n.isRTL(i.floating)),
          l = p(r),
          a = h(r),
          s = "y" === g(r),
          u = ["left", "top"].includes(l) ? -1 : 1,
          c = o && s ? -1 : 1,
          d = f(t, e),
          {
            mainAxis: m,
            crossAxis: v,
            alignmentAxis: y,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis,
              };
        return (
          a && "number" == typeof y && (v = "end" === a ? -1 * y : y),
          s ? { x: v * c, y: m * u } : { x: m * u, y: v * c }
        );
      }
      function T() {
        return "undefined" != typeof window;
      }
      function M(e) {
        return j(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function O(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function R(e) {
        var t;
        return null ==
          (t = (j(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function j(e) {
        return !!T() && (e instanceof Node || e instanceof O(e).Node);
      }
      function L(e) {
        return !!T() && (e instanceof Element || e instanceof O(e).Element);
      }
      function F(e) {
        return (
          !!T() && (e instanceof HTMLElement || e instanceof O(e).HTMLElement)
        );
      }
      function N(e) {
        return (
          !!T() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof O(e).ShadowRoot)
        );
      }
      function D(e) {
        let { overflow: t, overflowX: r, overflowY: n, display: i } = $(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
          !["inline", "contents"].includes(i)
        );
      }
      function W(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function z(e) {
        let t = V(),
          r = L(e) ? $(e) : e;
        return (
          "none" !== r.transform ||
          "none" !== r.perspective ||
          (!!r.containerType && "normal" !== r.containerType) ||
          (!t && !!r.backdropFilter && "none" !== r.backdropFilter) ||
          (!t && !!r.filter && "none" !== r.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (r.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (r.contain || "").includes(e)
          )
        );
      }
      function V() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function I(e) {
        return ["html", "body", "#document"].includes(M(e));
      }
      function $(e) {
        return O(e).getComputedStyle(e);
      }
      function B(e) {
        return L(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function _(e) {
        if ("html" === M(e)) return e;
        let t = e.assignedSlot || e.parentNode || (N(e) && e.host) || R(e);
        return N(t) ? t.host : t;
      }
      function q(e, t, r) {
        var n;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        let i = (function e(t) {
            let r = _(t);
            return I(r)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : F(r) && D(r)
              ? r
              : e(r);
          })(e),
          o = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
          l = O(i);
        if (o) {
          let e = K(l);
          return t.concat(
            l,
            l.visualViewport || [],
            D(i) ? i : [],
            e && r ? q(e) : []
          );
        }
        return t.concat(i, q(i, [], r));
      }
      function K(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function H(e) {
        let t = $(e),
          r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0,
          i = F(e),
          o = i ? e.offsetWidth : r,
          l = i ? e.offsetHeight : n,
          s = a(r) !== o || a(n) !== l;
        return s && ((r = o), (n = l)), { width: r, height: n, $: s };
      }
      function G(e) {
        return L(e) ? e : e.contextElement;
      }
      function X(e) {
        let t = G(e);
        if (!F(t)) return u(1);
        let r = t.getBoundingClientRect(),
          { width: n, height: i, $: o } = H(t),
          l = (o ? a(r.width) : r.width) / n,
          s = (o ? a(r.height) : r.height) / i;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (s && Number.isFinite(s)) || (s = 1),
          { x: l, y: s }
        );
      }
      let Y = u(0);
      function U(e) {
        let t = O(e);
        return V() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : Y;
      }
      function Q(e, t, r, n) {
        var i;
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        let o = e.getBoundingClientRect(),
          l = G(e),
          a = u(1);
        t && (n ? L(n) && (a = X(n)) : (a = X(e)));
        let s = (void 0 === (i = r) && (i = !1), n && (!i || n === O(l)) && i)
            ? U(l)
            : u(0),
          c = (o.left + s.x) / a.x,
          d = (o.top + s.y) / a.y,
          f = o.width / a.x,
          p = o.height / a.y;
        if (l) {
          let e = O(l),
            t = n && L(n) ? O(n) : n,
            r = e,
            i = K(r);
          for (; i && n && t !== r; ) {
            let e = X(i),
              t = i.getBoundingClientRect(),
              n = $(i),
              o = t.left + (i.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              l = t.top + (i.clientTop + parseFloat(n.paddingTop)) * e.y;
            (c *= e.x),
              (d *= e.y),
              (f *= e.x),
              (p *= e.y),
              (c += o),
              (d += l),
              (i = K((r = O(i))));
          }
        }
        return x({ width: f, height: p, x: c, y: d });
      }
      function Z(e, t) {
        let r = B(e).scrollLeft;
        return t ? t.left + r : Q(R(e)).left + r;
      }
      function J(e, t, r) {
        void 0 === r && (r = !1);
        let n = e.getBoundingClientRect();
        return {
          x: n.left + t.scrollLeft - (r ? 0 : Z(e, n)),
          y: n.top + t.scrollTop,
        };
      }
      function ee(e, t, r) {
        let n;
        if ("viewport" === t)
          n = (function (e, t) {
            let r = O(e),
              n = R(e),
              i = r.visualViewport,
              o = n.clientWidth,
              l = n.clientHeight,
              a = 0,
              s = 0;
            if (i) {
              (o = i.width), (l = i.height);
              let e = V();
              (!e || (e && "fixed" === t)) &&
                ((a = i.offsetLeft), (s = i.offsetTop));
            }
            return { width: o, height: l, x: a, y: s };
          })(e, r);
        else if ("document" === t)
          n = (function (e) {
            let t = R(e),
              r = B(e),
              n = e.ownerDocument.body,
              i = l(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
              o = l(
                t.scrollHeight,
                t.clientHeight,
                n.scrollHeight,
                n.clientHeight
              ),
              a = -r.scrollLeft + Z(e),
              s = -r.scrollTop;
            return (
              "rtl" === $(n).direction &&
                (a += l(t.clientWidth, n.clientWidth) - i),
              { width: i, height: o, x: a, y: s }
            );
          })(R(e));
        else if (L(t))
          n = (function (e, t) {
            let r = Q(e, !0, "fixed" === t),
              n = r.top + e.clientTop,
              i = r.left + e.clientLeft,
              o = F(e) ? X(e) : u(1),
              l = e.clientWidth * o.x;
            return {
              width: l,
              height: e.clientHeight * o.y,
              x: i * o.x,
              y: n * o.y,
            };
          })(t, r);
        else {
          let r = U(e);
          n = { x: t.x - r.x, y: t.y - r.y, width: t.width, height: t.height };
        }
        return x(n);
      }
      function et(e) {
        return "static" === $(e).position;
      }
      function er(e, t) {
        if (!F(e) || "fixed" === $(e).position) return null;
        if (t) return t(e);
        let r = e.offsetParent;
        return R(e) === r && (r = r.ownerDocument.body), r;
      }
      function en(e, t) {
        let r = O(e);
        if (W(e)) return r;
        if (!F(e)) {
          let t = _(e);
          for (; t && !I(t); ) {
            if (L(t) && !et(t)) return t;
            t = _(t);
          }
          return r;
        }
        let n = er(e, t);
        for (; n && ["table", "td", "th"].includes(M(n)) && et(n); )
          n = er(n, t);
        return n && I(n) && et(n) && !z(n)
          ? r
          : n ||
              (function (e) {
                let t = _(e);
                for (; F(t) && !I(t); ) {
                  if (z(t)) return t;
                  if (W(t)) break;
                  t = _(t);
                }
                return null;
              })(e) ||
              r;
      }
      let ei = async function (e) {
          let t = this.getOffsetParent || en,
            r = this.getDimensions,
            n = await r(e.floating);
          return {
            reference: (function (e, t, r) {
              let n = F(t),
                i = R(t),
                o = "fixed" === r,
                l = Q(e, !0, o, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                s = u(0);
              if (n || (!n && !o)) {
                if ((("body" !== M(t) || D(i)) && (a = B(t)), n)) {
                  let e = Q(t, !0, o, t);
                  (s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop);
                } else i && (s.x = Z(i));
              }
              let c = !i || n || o ? u(0) : J(i, a);
              return {
                x: l.left + a.scrollLeft - s.x - c.x,
                y: l.top + a.scrollTop - s.y - c.y,
                width: l.width,
                height: l.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: n.width, height: n.height },
          };
        },
        eo = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: r, offsetParent: n, strategy: i } = e,
              o = "fixed" === i,
              l = R(n),
              a = !!t && W(t.floating);
            if (n === l || (a && o)) return r;
            let s = { scrollLeft: 0, scrollTop: 0 },
              c = u(1),
              d = u(0),
              f = F(n);
            if (
              (f || (!f && !o)) &&
              (("body" !== M(n) || D(l)) && (s = B(n)), F(n))
            ) {
              let e = Q(n);
              (c = X(n)), (d.x = e.x + n.clientLeft), (d.y = e.y + n.clientTop);
            }
            let p = !l || f || o ? u(0) : J(l, s, !0);
            return {
              width: r.width * c.x,
              height: r.height * c.y,
              x: r.x * c.x - s.scrollLeft * c.x + d.x + p.x,
              y: r.y * c.y - s.scrollTop * c.y + d.y + p.y,
            };
          },
          getDocumentElement: R,
          getClippingRect: function (e) {
            let { element: t, boundary: r, rootBoundary: n, strategy: i } = e,
              a = [
                ...("clippingAncestors" === r
                  ? W(t)
                    ? []
                    : (function (e, t) {
                        let r = t.get(e);
                        if (r) return r;
                        let n = q(e, [], !1).filter(
                            (e) => L(e) && "body" !== M(e)
                          ),
                          i = null,
                          o = "fixed" === $(e).position,
                          l = o ? _(e) : e;
                        for (; L(l) && !I(l); ) {
                          let t = $(l),
                            r = z(l);
                          r || "fixed" !== t.position || (i = null),
                            (
                              o
                                ? !r && !i
                                : (!r &&
                                    "static" === t.position &&
                                    !!i &&
                                    ["absolute", "fixed"].includes(
                                      i.position
                                    )) ||
                                  (D(l) &&
                                    !r &&
                                    (function e(t, r) {
                                      let n = _(t);
                                      return (
                                        !(n === r || !L(n) || I(n)) &&
                                        ("fixed" === $(n).position || e(n, r))
                                      );
                                    })(e, l))
                            )
                              ? (n = n.filter((e) => e !== l))
                              : (i = t),
                            (l = _(l));
                        }
                        return t.set(e, n), n;
                      })(t, this._c)
                  : [].concat(r)),
                n,
              ],
              s = a[0],
              u = a.reduce((e, r) => {
                let n = ee(t, r, i);
                return (
                  (e.top = l(n.top, e.top)),
                  (e.right = o(n.right, e.right)),
                  (e.bottom = o(n.bottom, e.bottom)),
                  (e.left = l(n.left, e.left)),
                  e
                );
              }, ee(t, s, i));
            return {
              width: u.right - u.left,
              height: u.bottom - u.top,
              x: u.left,
              y: u.top,
            };
          },
          getOffsetParent: en,
          getElementRects: ei,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: r } = H(e);
            return { width: t, height: r };
          },
          getScale: X,
          isElement: L,
          isRTL: function (e) {
            return "rtl" === $(e).direction;
          },
        },
        el = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: r,
                y: n,
                placement: i,
                rects: a,
                platform: s,
                elements: u,
                middlewareData: c,
              } = t,
              { element: d, padding: p = 0 } = f(e, t) || {};
            if (null == d) return {};
            let y = w(p),
              b = { x: r, y: n },
              x = m(g(i)),
              E = v(x),
              S = await s.getDimensions(d),
              A = "y" === x,
              k = A ? "clientHeight" : "clientWidth",
              P = a.reference[E] + a.reference[x] - b[x] - a.floating[E],
              C = b[x] - a.reference[x],
              T = await (null == s.getOffsetParent
                ? void 0
                : s.getOffsetParent(d)),
              M = T ? T[k] : 0;
            (M && (await (null == s.isElement ? void 0 : s.isElement(T)))) ||
              (M = u.floating[k] || a.floating[E]);
            let O = M / 2 - S[E] / 2 - 1,
              R = o(y[A ? "top" : "left"], O),
              j = o(y[A ? "bottom" : "right"], O),
              L = M - S[E] - j,
              F = M / 2 - S[E] / 2 + (P / 2 - C / 2),
              N = l(R, o(F, L)),
              D =
                !c.arrow &&
                null != h(i) &&
                F !== N &&
                a.reference[E] / 2 - (F < R ? R : j) - S[E] / 2 < 0,
              W = D ? (F < R ? F - R : F - L) : 0;
            return {
              [x]: b[x] + W,
              data: {
                [x]: N,
                centerOffset: F - N - W,
                ...(D && { alignmentOffset: W }),
              },
              reset: D,
            };
          },
        }),
        ea = (e, t, r) => {
          let n = new Map(),
            i = { platform: eo, ...r },
            o = { ...i.platform, _c: n };
          return S(e, t, { ...i, platform: o });
        };
      var es = r(47650),
        eu = "undefined" != typeof document ? n.useLayoutEffect : n.useEffect;
      function ec(e, t) {
        let r, n, i;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((r = e.length) !== t.length) return !1;
            for (n = r; 0 != n--; ) if (!ec(e[n], t[n])) return !1;
            return !0;
          }
          if ((r = (i = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (n = r; 0 != n--; )
            if (!{}.hasOwnProperty.call(t, i[n])) return !1;
          for (n = r; 0 != n--; ) {
            let r = i[n];
            if (("_owner" !== r || !e.$$typeof) && !ec(e[r], t[r])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function ed(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function ef(e, t) {
        let r = ed(e);
        return Math.round(t * r) / r;
      }
      function ep(e) {
        let t = n.useRef(e);
        return (
          eu(() => {
            t.current = e;
          }),
          t
        );
      }
      let eh = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: r, padding: n } = "function" == typeof e ? e(t) : e;
            return r && {}.hasOwnProperty.call(r, "current")
              ? null != r.current
                ? el({ element: r.current, padding: n }).fn(t)
                : {}
              : r
              ? el({ element: r, padding: n }).fn(t)
              : {};
          },
        }),
        em = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = 0),
              {
                name: "offset",
                options: e,
                async fn(t) {
                  var r, n;
                  let { x: i, y: o, placement: l, middlewareData: a } = t,
                    s = await C(t, e);
                  return l ===
                    (null == (r = a.offset) ? void 0 : r.placement) &&
                    null != (n = a.arrow) &&
                    n.alignmentOffset
                    ? {}
                    : { x: i + s.x, y: o + s.y, data: { ...s, placement: l } };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ev = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "shift",
                options: e,
                async fn(t) {
                  let { x: r, y: n, placement: i } = t,
                    {
                      mainAxis: a = !0,
                      crossAxis: s = !1,
                      limiter: u = {
                        fn: (e) => {
                          let { x: t, y: r } = e;
                          return { x: t, y: r };
                        },
                      },
                      ...c
                    } = f(e, t),
                    d = { x: r, y: n },
                    h = await A(t, c),
                    v = g(p(i)),
                    y = m(v),
                    b = d[y],
                    w = d[v];
                  if (a) {
                    let e = "y" === y ? "top" : "left",
                      t = "y" === y ? "bottom" : "right",
                      r = b + h[e],
                      n = b - h[t];
                    b = l(r, o(b, n));
                  }
                  if (s) {
                    let e = "y" === v ? "top" : "left",
                      t = "y" === v ? "bottom" : "right",
                      r = w + h[e],
                      n = w - h[t];
                    w = l(r, o(w, n));
                  }
                  let x = u.fn({ ...t, [y]: b, [v]: w });
                  return {
                    ...x,
                    data: {
                      x: x.x - r,
                      y: x.y - n,
                      enabled: { [y]: a, [v]: s },
                    },
                  };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eg = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                options: e,
                fn(t) {
                  let {
                      x: r,
                      y: n,
                      placement: i,
                      rects: o,
                      middlewareData: l,
                    } = t,
                    {
                      offset: a = 0,
                      mainAxis: s = !0,
                      crossAxis: u = !0,
                    } = f(e, t),
                    c = { x: r, y: n },
                    d = g(i),
                    h = m(d),
                    v = c[h],
                    y = c[d],
                    b = f(a, t),
                    w =
                      "number" == typeof b
                        ? { mainAxis: b, crossAxis: 0 }
                        : { mainAxis: 0, crossAxis: 0, ...b };
                  if (s) {
                    let e = "y" === h ? "height" : "width",
                      t = o.reference[h] - o.floating[e] + w.mainAxis,
                      r = o.reference[h] + o.reference[e] - w.mainAxis;
                    v < t ? (v = t) : v > r && (v = r);
                  }
                  if (u) {
                    var x, E;
                    let e = "y" === h ? "width" : "height",
                      t = ["top", "left"].includes(p(i)),
                      r =
                        o.reference[d] -
                        o.floating[e] +
                        ((t && (null == (x = l.offset) ? void 0 : x[d])) || 0) +
                        (t ? 0 : w.crossAxis),
                      n =
                        o.reference[d] +
                        o.reference[e] +
                        (t
                          ? 0
                          : (null == (E = l.offset) ? void 0 : E[d]) || 0) -
                        (t ? w.crossAxis : 0);
                    y < r ? (y = r) : y > n && (y = n);
                  }
                  return { [h]: v, [d]: y };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ey = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "flip",
                options: e,
                async fn(t) {
                  var r, n, i, o, l;
                  let {
                      placement: a,
                      middlewareData: s,
                      rects: u,
                      initialPlacement: c,
                      platform: d,
                      elements: w,
                    } = t,
                    {
                      mainAxis: x = !0,
                      crossAxis: E = !0,
                      fallbackPlacements: S,
                      fallbackStrategy: k = "bestFit",
                      fallbackAxisSideDirection: P = "none",
                      flipAlignment: C = !0,
                      ...T
                    } = f(e, t);
                  if (null != (r = s.arrow) && r.alignmentOffset) return {};
                  let M = p(a),
                    O = g(c),
                    R = p(c) === c,
                    j = await (null == d.isRTL ? void 0 : d.isRTL(w.floating)),
                    L =
                      S ||
                      (R || !C
                        ? [b(c)]
                        : (function (e) {
                            let t = b(e);
                            return [y(e), t, y(t)];
                          })(c)),
                    F = "none" !== P;
                  !S &&
                    F &&
                    L.push(
                      ...(function (e, t, r, n) {
                        let i = h(e),
                          o = (function (e, t, r) {
                            let n = ["left", "right"],
                              i = ["right", "left"];
                            switch (e) {
                              case "top":
                              case "bottom":
                                if (r) return t ? i : n;
                                return t ? n : i;
                              case "left":
                              case "right":
                                return t
                                  ? ["top", "bottom"]
                                  : ["bottom", "top"];
                              default:
                                return [];
                            }
                          })(p(e), "start" === r, n);
                        return (
                          i &&
                            ((o = o.map((e) => e + "-" + i)),
                            t && (o = o.concat(o.map(y)))),
                          o
                        );
                      })(c, C, P, j)
                    );
                  let N = [c, ...L],
                    D = await A(t, T),
                    W = [],
                    z = (null == (n = s.flip) ? void 0 : n.overflows) || [];
                  if ((x && W.push(D[M]), E)) {
                    let e = (function (e, t, r) {
                      void 0 === r && (r = !1);
                      let n = h(e),
                        i = m(g(e)),
                        o = v(i),
                        l =
                          "x" === i
                            ? n === (r ? "end" : "start")
                              ? "right"
                              : "left"
                            : "start" === n
                            ? "bottom"
                            : "top";
                      return (
                        t.reference[o] > t.floating[o] && (l = b(l)), [l, b(l)]
                      );
                    })(a, u, j);
                    W.push(D[e[0]], D[e[1]]);
                  }
                  if (
                    ((z = [...z, { placement: a, overflows: W }]),
                    !W.every((e) => e <= 0))
                  ) {
                    let e =
                        ((null == (i = s.flip) ? void 0 : i.index) || 0) + 1,
                      t = N[e];
                    if (t)
                      return {
                        data: { index: e, overflows: z },
                        reset: { placement: t },
                      };
                    let r =
                      null ==
                      (o = z
                        .filter((e) => e.overflows[0] <= 0)
                        .sort((e, t) => e.overflows[1] - t.overflows[1])[0])
                        ? void 0
                        : o.placement;
                    if (!r)
                      switch (k) {
                        case "bestFit": {
                          let e =
                            null ==
                            (l = z
                              .filter((e) => {
                                if (F) {
                                  let t = g(e.placement);
                                  return t === O || "y" === t;
                                }
                                return !0;
                              })
                              .map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ])
                              .sort((e, t) => e[1] - t[1])[0])
                              ? void 0
                              : l[0];
                          e && (r = e);
                          break;
                        }
                        case "initialPlacement":
                          r = c;
                      }
                    if (a !== r) return { reset: { placement: r } };
                  }
                  return {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eb = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "size",
                options: e,
                async fn(t) {
                  var r, n;
                  let i, a;
                  let { placement: s, rects: u, platform: c, elements: d } = t,
                    { apply: m = () => {}, ...v } = f(e, t),
                    y = await A(t, v),
                    b = p(s),
                    w = h(s),
                    x = "y" === g(s),
                    { width: E, height: S } = u.floating;
                  "top" === b || "bottom" === b
                    ? ((i = b),
                      (a =
                        w ===
                        ((await (null == c.isRTL
                          ? void 0
                          : c.isRTL(d.floating)))
                          ? "start"
                          : "end")
                          ? "left"
                          : "right"))
                    : ((a = b), (i = "end" === w ? "top" : "bottom"));
                  let k = S - y.top - y.bottom,
                    P = E - y.left - y.right,
                    C = o(S - y[i], k),
                    T = o(E - y[a], P),
                    M = !t.middlewareData.shift,
                    O = C,
                    R = T;
                  if (
                    (null != (r = t.middlewareData.shift) &&
                      r.enabled.x &&
                      (R = P),
                    null != (n = t.middlewareData.shift) &&
                      n.enabled.y &&
                      (O = k),
                    M && !w)
                  ) {
                    let e = l(y.left, 0),
                      t = l(y.right, 0),
                      r = l(y.top, 0),
                      n = l(y.bottom, 0);
                    x
                      ? (R =
                          E -
                          2 * (0 !== e || 0 !== t ? e + t : l(y.left, y.right)))
                      : (O =
                          S -
                          2 *
                            (0 !== r || 0 !== n ? r + n : l(y.top, y.bottom)));
                  }
                  await m({ ...t, availableWidth: R, availableHeight: O });
                  let j = await c.getDimensions(d.floating);
                  return E !== j.width || S !== j.height
                    ? { reset: { rects: !0 } }
                    : {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ew = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "hide",
                options: e,
                async fn(t) {
                  let { rects: r } = t,
                    { strategy: n = "referenceHidden", ...i } = f(e, t);
                  switch (n) {
                    case "referenceHidden": {
                      let e = k(
                        await A(t, { ...i, elementContext: "reference" }),
                        r.reference
                      );
                      return {
                        data: {
                          referenceHiddenOffsets: e,
                          referenceHidden: P(e),
                        },
                      };
                    }
                    case "escaped": {
                      let e = k(
                        await A(t, { ...i, altBoundary: !0 }),
                        r.floating
                      );
                      return { data: { escapedOffsets: e, escaped: P(e) } };
                    }
                    default:
                      return {};
                  }
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ex = (e, t) => ({ ...eh(e), options: [e, t] });
      var eE = r(23360),
        eS = r(95155),
        eA = n.forwardRef((e, t) => {
          let { children: r, width: n = 10, height: i = 5, ...o } = e;
          return (0, eS.jsx)(eE.sG.svg, {
            ...o,
            ref: t,
            width: n,
            height: i,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? r
              : (0, eS.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      eA.displayName = "Arrow";
      var ek = r(88068),
        eP = r(18166),
        eC = r(41524),
        eT = r(46611),
        eM = "Popper",
        [eO, eR] = (0, eP.A)(eM),
        [ej, eL] = eO(eM),
        eF = (e) => {
          let { __scopePopper: t, children: r } = e,
            [i, o] = n.useState(null);
          return (0, eS.jsx)(ej, {
            scope: t,
            anchor: i,
            onAnchorChange: o,
            children: r,
          });
        };
      eF.displayName = eM;
      var eN = "PopperAnchor",
        eD = n.forwardRef((e, t) => {
          let { __scopePopper: r, virtualRef: i, ...o } = e,
            l = eL(eN, r),
            a = n.useRef(null),
            s = (0, ek.s)(t, a);
          return (
            n.useEffect(() => {
              l.onAnchorChange((null == i ? void 0 : i.current) || a.current);
            }),
            i ? null : (0, eS.jsx)(eE.sG.div, { ...o, ref: s })
          );
        });
      eD.displayName = eN;
      var eW = "PopperContent",
        [ez, eV] = eO(eW),
        eI = n.forwardRef((e, t) => {
          var r, i, a, u, c, d, f, p;
          let {
              __scopePopper: h,
              side: m = "bottom",
              sideOffset: v = 0,
              align: g = "center",
              alignOffset: y = 0,
              arrowPadding: b = 0,
              avoidCollisions: w = !0,
              collisionBoundary: x = [],
              collisionPadding: E = 0,
              sticky: S = "partial",
              hideWhenDetached: A = !1,
              updatePositionStrategy: k = "optimized",
              onPlaced: P,
              ...C
            } = e,
            T = eL(eW, h),
            [M, O] = n.useState(null),
            j = (0, ek.s)(t, (e) => O(e)),
            [L, F] = n.useState(null),
            N = (function (e) {
              let [t, r] = n.useState(void 0);
              return (
                (0, eT.N)(() => {
                  if (e) {
                    r({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let n, i;
                      if (!Array.isArray(t) || !t.length) return;
                      let o = t[0];
                      if ("borderBoxSize" in o) {
                        let e = o.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (n = t.inlineSize), (i = t.blockSize);
                      } else (n = e.offsetWidth), (i = e.offsetHeight);
                      r({ width: n, height: i });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  r(void 0);
                }, [e]),
                t
              );
            })(L),
            D =
              null !== (f = null == N ? void 0 : N.width) && void 0 !== f
                ? f
                : 0,
            W =
              null !== (p = null == N ? void 0 : N.height) && void 0 !== p
                ? p
                : 0,
            z =
              "number" == typeof E
                ? E
                : { top: 0, right: 0, bottom: 0, left: 0, ...E },
            V = Array.isArray(x) ? x : [x],
            I = V.length > 0,
            $ = { padding: z, boundary: V.filter(eq), altBoundary: I },
            {
              refs: B,
              floatingStyles: _,
              placement: K,
              isPositioned: H,
              middlewareData: X,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: r = "absolute",
                  middleware: i = [],
                  platform: o,
                  elements: { reference: l, floating: a } = {},
                  transform: s = !0,
                  whileElementsMounted: u,
                  open: c,
                } = e,
                [d, f] = n.useState({
                  x: 0,
                  y: 0,
                  strategy: r,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, h] = n.useState(i);
              ec(p, i) || h(i);
              let [m, v] = n.useState(null),
                [g, y] = n.useState(null),
                b = n.useCallback((e) => {
                  e !== S.current && ((S.current = e), v(e));
                }, []),
                w = n.useCallback((e) => {
                  e !== A.current && ((A.current = e), y(e));
                }, []),
                x = l || m,
                E = a || g,
                S = n.useRef(null),
                A = n.useRef(null),
                k = n.useRef(d),
                P = null != u,
                C = ep(u),
                T = ep(o),
                M = ep(c),
                O = n.useCallback(() => {
                  if (!S.current || !A.current) return;
                  let e = { placement: t, strategy: r, middleware: p };
                  T.current && (e.platform = T.current),
                    ea(S.current, A.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== M.current };
                      R.current &&
                        !ec(k.current, t) &&
                        ((k.current = t),
                        es.flushSync(() => {
                          f(t);
                        }));
                    });
                }, [p, t, r, T, M]);
              eu(() => {
                !1 === c &&
                  k.current.isPositioned &&
                  ((k.current.isPositioned = !1),
                  f((e) => ({ ...e, isPositioned: !1 })));
              }, [c]);
              let R = n.useRef(!1);
              eu(
                () => (
                  (R.current = !0),
                  () => {
                    R.current = !1;
                  }
                ),
                []
              ),
                eu(() => {
                  if ((x && (S.current = x), E && (A.current = E), x && E)) {
                    if (C.current) return C.current(x, E, O);
                    O();
                  }
                }, [x, E, O, C, P]);
              let j = n.useMemo(
                  () => ({
                    reference: S,
                    floating: A,
                    setReference: b,
                    setFloating: w,
                  }),
                  [b, w]
                ),
                L = n.useMemo(() => ({ reference: x, floating: E }), [x, E]),
                F = n.useMemo(() => {
                  let e = { position: r, left: 0, top: 0 };
                  if (!L.floating) return e;
                  let t = ef(L.floating, d.x),
                    n = ef(L.floating, d.y);
                  return s
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + n + "px)",
                        ...(ed(L.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: r, left: t, top: n };
                }, [r, s, L.floating, d.x, d.y]);
              return n.useMemo(
                () => ({
                  ...d,
                  update: O,
                  refs: j,
                  elements: L,
                  floatingStyles: F,
                }),
                [d, O, j, L, F]
              );
            })({
              strategy: "fixed",
              placement: m + ("center" !== g ? "-" + g : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                  t[r] = arguments[r];
                return (function (e, t, r, n) {
                  let i;
                  void 0 === n && (n = {});
                  let {
                      ancestorScroll: a = !0,
                      ancestorResize: u = !0,
                      elementResize: c = "function" == typeof ResizeObserver,
                      layoutShift: d = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: f = !1,
                    } = n,
                    p = G(e),
                    h = a || u ? [...(p ? q(p) : []), ...q(t)] : [];
                  h.forEach((e) => {
                    a && e.addEventListener("scroll", r, { passive: !0 }),
                      u && e.addEventListener("resize", r);
                  });
                  let m =
                      p && d
                        ? (function (e, t) {
                            let r,
                              n = null,
                              i = R(e);
                            function a() {
                              var e;
                              clearTimeout(r),
                                null == (e = n) || e.disconnect(),
                                (n = null);
                            }
                            return (
                              !(function u(c, d) {
                                void 0 === c && (c = !1),
                                  void 0 === d && (d = 1),
                                  a();
                                let {
                                  left: f,
                                  top: p,
                                  width: h,
                                  height: m,
                                } = e.getBoundingClientRect();
                                if ((c || t(), !h || !m)) return;
                                let v = s(p),
                                  g = s(i.clientWidth - (f + h)),
                                  y = {
                                    rootMargin:
                                      -v +
                                      "px " +
                                      -g +
                                      "px " +
                                      -s(i.clientHeight - (p + m)) +
                                      "px " +
                                      -s(f) +
                                      "px",
                                    threshold: l(0, o(1, d)) || 1,
                                  },
                                  b = !0;
                                function w(e) {
                                  let t = e[0].intersectionRatio;
                                  if (t !== d) {
                                    if (!b) return u();
                                    t
                                      ? u(!1, t)
                                      : (r = setTimeout(() => {
                                          u(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  b = !1;
                                }
                                try {
                                  n = new IntersectionObserver(w, {
                                    ...y,
                                    root: i.ownerDocument,
                                  });
                                } catch (e) {
                                  n = new IntersectionObserver(w, y);
                                }
                                n.observe(e);
                              })(!0),
                              a
                            );
                          })(p, r)
                        : null,
                    v = -1,
                    g = null;
                  c &&
                    ((g = new ResizeObserver((e) => {
                      let [n] = e;
                      n &&
                        n.target === p &&
                        g &&
                        (g.unobserve(t),
                        cancelAnimationFrame(v),
                        (v = requestAnimationFrame(() => {
                          var e;
                          null == (e = g) || e.observe(t);
                        }))),
                        r();
                    })),
                    p && !f && g.observe(p),
                    g.observe(t));
                  let y = f ? Q(e) : null;
                  return (
                    f &&
                      (function t() {
                        let n = Q(e);
                        y &&
                          (n.x !== y.x ||
                            n.y !== y.y ||
                            n.width !== y.width ||
                            n.height !== y.height) &&
                          r(),
                          (y = n),
                          (i = requestAnimationFrame(t));
                      })(),
                    r(),
                    () => {
                      var e;
                      h.forEach((e) => {
                        a && e.removeEventListener("scroll", r),
                          u && e.removeEventListener("resize", r);
                      }),
                        null == m || m(),
                        null == (e = g) || e.disconnect(),
                        (g = null),
                        f && cancelAnimationFrame(i);
                    }
                  );
                })(...t, { animationFrame: "always" === k });
              },
              elements: { reference: T.anchor },
              middleware: [
                em({ mainAxis: v + W, alignmentAxis: y }),
                w &&
                  ev({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === S ? eg() : void 0,
                    ...$,
                  }),
                w && ey({ ...$ }),
                eb({
                  ...$,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: r,
                        availableWidth: n,
                        availableHeight: i,
                      } = e,
                      { width: o, height: l } = r.reference,
                      a = t.floating.style;
                    a.setProperty(
                      "--radix-popper-available-width",
                      "".concat(n, "px")
                    ),
                      a.setProperty(
                        "--radix-popper-available-height",
                        "".concat(i, "px")
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(o, "px")
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(l, "px")
                      );
                  },
                }),
                L && ex({ element: L, padding: b }),
                eK({ arrowWidth: D, arrowHeight: W }),
                A && ew({ strategy: "referenceHidden", ...$ }),
              ],
            }),
            [Y, U] = eH(K),
            Z = (0, eC.c)(P);
          (0, eT.N)(() => {
            H && (null == Z || Z());
          }, [H, Z]);
          let J = null === (r = X.arrow) || void 0 === r ? void 0 : r.x,
            ee = null === (i = X.arrow) || void 0 === i ? void 0 : i.y,
            et =
              (null === (a = X.arrow) || void 0 === a
                ? void 0
                : a.centerOffset) !== 0,
            [er, en] = n.useState();
          return (
            (0, eT.N)(() => {
              M && en(window.getComputedStyle(M).zIndex);
            }, [M]),
            (0, eS.jsx)("div", {
              ref: B.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ..._,
                transform: H ? _.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: er,
                "--radix-popper-transform-origin": [
                  null === (u = X.transformOrigin) || void 0 === u
                    ? void 0
                    : u.x,
                  null === (c = X.transformOrigin) || void 0 === c
                    ? void 0
                    : c.y,
                ].join(" "),
                ...((null === (d = X.hide) || void 0 === d
                  ? void 0
                  : d.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, eS.jsx)(ez, {
                scope: h,
                placedSide: Y,
                onArrowChange: F,
                arrowX: J,
                arrowY: ee,
                shouldHideArrow: et,
                children: (0, eS.jsx)(eE.sG.div, {
                  "data-side": Y,
                  "data-align": U,
                  ...C,
                  ref: j,
                  style: { ...C.style, animation: H ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      eI.displayName = eW;
      var e$ = "PopperArrow",
        eB = { top: "bottom", right: "left", bottom: "top", left: "right" },
        e_ = n.forwardRef(function (e, t) {
          let { __scopePopper: r, ...n } = e,
            i = eV(e$, r),
            o = eB[i.placedSide];
          return (0,
          eS.jsx)("span", { ref: i.onArrowChange, style: { position: "absolute", left: i.arrowX, top: i.arrowY, [o]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[i.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[i.placedSide], visibility: i.shouldHideArrow ? "hidden" : void 0 }, children: (0, eS.jsx)(eA, { ...n, ref: t, style: { ...n.style, display: "block" } }) });
        });
      function eq(e) {
        return null !== e;
      }
      e_.displayName = e$;
      var eK = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var r, n, i, o, l;
          let { placement: a, rects: s, middlewareData: u } = t,
            c =
              (null === (r = u.arrow) || void 0 === r
                ? void 0
                : r.centerOffset) !== 0,
            d = c ? 0 : e.arrowWidth,
            f = c ? 0 : e.arrowHeight,
            [p, h] = eH(a),
            m = { start: "0%", center: "50%", end: "100%" }[h],
            v =
              (null !==
                (o = null === (n = u.arrow) || void 0 === n ? void 0 : n.x) &&
              void 0 !== o
                ? o
                : 0) +
              d / 2,
            g =
              (null !==
                (l = null === (i = u.arrow) || void 0 === i ? void 0 : i.y) &&
              void 0 !== l
                ? l
                : 0) +
              f / 2,
            y = "",
            b = "";
          return (
            "bottom" === p
              ? ((y = c ? m : "".concat(v, "px")), (b = "".concat(-f, "px")))
              : "top" === p
              ? ((y = c ? m : "".concat(v, "px")),
                (b = "".concat(s.floating.height + f, "px")))
              : "right" === p
              ? ((y = "".concat(-f, "px")), (b = c ? m : "".concat(g, "px")))
              : "left" === p &&
                ((y = "".concat(s.floating.width + f, "px")),
                (b = c ? m : "".concat(g, "px"))),
            { data: { x: y, y: b } }
          );
        },
      });
      function eH(e) {
        let [t, r = "center"] = e.split("-");
        return [t, r];
      }
      var eG = eF,
        eX = eD,
        eY = eI,
        eU = e_;
    },
    17323: (e, t, r) => {
      r.d(t, { Z: () => s });
      var n = r(12115),
        i = r(47650),
        o = r(23360),
        l = r(46611),
        a = r(95155),
        s = n.forwardRef((e, t) => {
          var r, s;
          let { container: u, ...c } = e,
            [d, f] = n.useState(!1);
          (0, l.N)(() => f(!0), []);
          let p =
            u ||
            (d &&
              (null === (s = globalThis) || void 0 === s
                ? void 0
                : null === (r = s.document) || void 0 === r
                ? void 0
                : r.body));
          return p
            ? i.createPortal((0, a.jsx)(o.sG.div, { ...c, ref: t }), p)
            : null;
        });
      s.displayName = "Portal";
    },
    23360: (e, t, r) => {
      r.d(t, { hO: () => s, sG: () => a });
      var n = r(12115),
        i = r(47650),
        o = r(12317),
        l = r(95155),
        a = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = n.forwardRef((e, r) => {
            let { asChild: n, ...i } = e,
              a = n ? o.DX : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, l.jsx)(a, { ...i, ref: r })
            );
          });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {});
      function s(e, t) {
        e && i.flushSync(() => e.dispatchEvent(t));
      }
    },
    12317: (e, t, r) => {
      r.d(t, { DX: () => l });
      var n = r(12115),
        i = r(88068),
        o = r(95155),
        l = n.forwardRef((e, t) => {
          let { children: r, ...i } = e,
            l = n.Children.toArray(r),
            s = l.find(u);
          if (s) {
            let e = s.props.children,
              r = l.map((t) =>
                t !== s
                  ? t
                  : n.Children.count(e) > 1
                  ? n.Children.only(null)
                  : n.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, o.jsx)(a, {
              ...i,
              ref: t,
              children: n.isValidElement(e)
                ? n.cloneElement(e, void 0, r)
                : null,
            });
          }
          return (0, o.jsx)(a, { ...i, ref: t, children: r });
        });
      l.displayName = "Slot";
      var a = n.forwardRef((e, t) => {
        let { children: r, ...o } = e;
        if (n.isValidElement(r)) {
          let e = (function (e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              r = t && "isReactWarning" in t && t.isReactWarning;
            return r
              ? e.ref
              : (r =
                  (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                  "isReactWarning" in t &&
                  t.isReactWarning)
              ? e.props.ref
              : e.props.ref || e.ref;
          })(r);
          return n.cloneElement(r, {
            ...(function (e, t) {
              let r = { ...t };
              for (let n in t) {
                let i = e[n],
                  o = t[n];
                /^on[A-Z]/.test(n)
                  ? i && o
                    ? (r[n] = (...e) => {
                        o(...e), i(...e);
                      })
                    : i && (r[n] = i)
                  : "style" === n
                  ? (r[n] = { ...i, ...o })
                  : "className" === n &&
                    (r[n] = [i, o].filter(Boolean).join(" "));
              }
              return { ...e, ...r };
            })(o, r.props),
            ref: t ? (0, i.t)(t, e) : e,
          });
        }
        return n.Children.count(r) > 1 ? n.Children.only(null) : null;
      });
      a.displayName = "SlotClone";
      var s = ({ children: e }) => (0, o.jsx)(o.Fragment, { children: e });
      function u(e) {
        return n.isValidElement(e) && e.type === s;
      }
    },
    41524: (e, t, r) => {
      r.d(t, { c: () => i });
      var n = r(12115);
      function i(e) {
        let t = n.useRef(e);
        return (
          n.useEffect(() => {
            t.current = e;
          }),
          n.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    1488: (e, t, r) => {
      r.d(t, { i: () => o });
      var n = r(12115),
        i = r(41524);
      function o({ prop: e, defaultProp: t, onChange: r = () => {} }) {
        let [o, l] = (function ({ defaultProp: e, onChange: t }) {
            let r = n.useState(e),
              [o] = r,
              l = n.useRef(o),
              a = (0, i.c)(t);
            return (
              n.useEffect(() => {
                l.current !== o && (a(o), (l.current = o));
              }, [o, l, a]),
              r
            );
          })({ defaultProp: t, onChange: r }),
          a = void 0 !== e,
          s = a ? e : o,
          u = (0, i.c)(r);
        return [
          s,
          n.useCallback(
            (t) => {
              if (a) {
                let r = "function" == typeof t ? t(e) : t;
                r !== e && u(r);
              } else l(t);
            },
            [a, e, l, u]
          ),
        ];
      }
    },
    46611: (e, t, r) => {
      r.d(t, { N: () => i });
      var n = r(12115),
        i = globalThis?.document ? n.useLayoutEffect : () => {};
    },
    31027: (e, t, r) => {
      r.d(t, { F: () => l });
      var n = r(43463);
      let i = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        o = n.$,
        l = (e, t) => (r) => {
          var n;
          if ((null == t ? void 0 : t.variants) == null)
            return o(
              e,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className
            );
          let { variants: l, defaultVariants: a } = t,
            s = Object.keys(l).map((e) => {
              let t = null == r ? void 0 : r[e],
                n = null == a ? void 0 : a[e];
              if (null === t) return null;
              let o = i(t) || i(n);
              return l[e][o];
            }),
            u =
              r &&
              Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e;
              }, {});
          return o(
            e,
            s,
            null == t
              ? void 0
              : null === (n = t.compoundVariants) || void 0 === n
              ? void 0
              : n.reduce((e, t) => {
                  let { class: r, className: n, ...i } = t;
                  return Object.entries(i).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r)
                      ? r.includes({ ...a, ...u }[t])
                      : { ...a, ...u }[t] === r;
                  })
                    ? [...e, r, n]
                    : e;
                }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className
          );
        };
    },
    43463: (e, t, r) => {
      r.d(t, { $: () => n });
      function n() {
        for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                n,
                i = "";
              if ("string" == typeof t || "number" == typeof t) i += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var o = t.length;
                  for (r = 0; r < o; r++)
                    t[r] && (n = e(t[r])) && (i && (i += " "), (i += n));
                } else for (n in t) t[n] && (i && (i += " "), (i += n));
              }
              return i;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
    },
    89426: (e, t, r) => {
      r.d(t, { P: () => i });
      var n = r(75487);
      class i {
        constructor(e) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = e.filter(Boolean));
        }
        then(e, t) {
          return Promise.all(this.animations).then(e).catch(t);
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let r = 0; r < this.animations.length; r++)
            this.animations[r][e] = t;
        }
        attachTimeline(e, t) {
          let r = this.animations.map((r) =>
            (0, n.J)() && r.attachTimeline ? r.attachTimeline(e) : t(r)
          );
          return () => {
            r.forEach((e, t) => {
              e && e(), this.animations[t].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(e) {
          this.setAll("time", e);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(e) {
          this.setAll("speed", e);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let e = 0;
          for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
          return e;
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
    },
    27695: (e, t, r) => {
      r.d(t, { K: () => i });
      var n = r(3078);
      let i = (e, t, r = 10) => {
        let i = "",
          o = Math.max(Math.round(t / r), 2);
        for (let t = 0; t < o; t++) i += e((0, n.q)(0, o - 1, t)) + ", ";
        return `linear(${i.substring(0, i.length - 2)})`;
      };
    },
    60861: (e, t, r) => {
      r.d(t, { o: () => h });
      var n = r(27695),
        i = r(25995),
        o = r(11660),
        l = r(18818),
        a = r(15178);
      let s = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function u(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      var c = r(25273);
      let d = ["duration", "bounce"],
        f = ["stiffness", "damping", "mass"];
      function p(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function h(e = s.visualDuration, t = s.bounce) {
        let r;
        let m =
            "object" != typeof e
              ? { visualDuration: e, keyframes: [0, 1], bounce: t }
              : e,
          { restSpeed: v, restDelta: g } = m,
          y = m.keyframes[0],
          b = m.keyframes[m.keyframes.length - 1],
          w = { done: !1, value: y },
          {
            stiffness: x,
            damping: E,
            mass: S,
            duration: A,
            velocity: k,
            isResolvedFromDuration: P,
          } = (function (e) {
            let t = {
              velocity: s.velocity,
              stiffness: s.stiffness,
              damping: s.damping,
              mass: s.mass,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!p(e, f) && p(e, d)) {
              if (e.visualDuration) {
                let r = (2 * Math.PI) / (1.2 * e.visualDuration),
                  n = r * r,
                  i = 2 * (0, a.q)(0.05, 1, 1 - e.bounce) * Math.sqrt(n);
                t = { ...t, mass: s.mass, stiffness: n, damping: i };
              } else {
                let r = (function ({
                  duration: e = s.duration,
                  bounce: t = s.bounce,
                  velocity: r = s.velocity,
                  mass: n = s.mass,
                }) {
                  let o, c;
                  (0, l.$)(
                    e <= (0, i.f)(s.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let d = 1 - t;
                  (d = (0, a.q)(s.minDamping, s.maxDamping, d)),
                    (e = (0, a.q)(s.minDuration, s.maxDuration, (0, i.X)(e))),
                    d < 1
                      ? ((o = (t) => {
                          let n = t * d,
                            i = n * e;
                          return 0.001 - ((n - r) / u(t, d)) * Math.exp(-i);
                        }),
                        (c = (t) => {
                          let n = t * d * e,
                            i = Math.pow(d, 2) * Math.pow(t, 2) * e,
                            l = Math.exp(-n),
                            a = u(Math.pow(t, 2), d);
                          return (
                            ((n * r + r - i) *
                              l *
                              (-o(t) + 0.001 > 0 ? -1 : 1)) /
                            a
                          );
                        }))
                      : ((o = (t) =>
                          -0.001 + Math.exp(-t * e) * ((t - r) * e + 1)),
                        (c = (t) => e * e * (r - t) * Math.exp(-t * e)));
                  let f = (function (e, t, r) {
                    let n = r;
                    for (let r = 1; r < 12; r++) n -= e(n) / t(n);
                    return n;
                  })(o, c, 5 / e);
                  if (((e = (0, i.f)(e)), isNaN(f)))
                    return {
                      stiffness: s.stiffness,
                      damping: s.damping,
                      duration: e,
                    };
                  {
                    let t = Math.pow(f, 2) * n;
                    return {
                      stiffness: t,
                      damping: 2 * d * Math.sqrt(n * t),
                      duration: e,
                    };
                  }
                })(e);
                (t = { ...t, ...r, mass: s.mass }).isResolvedFromDuration = !0;
              }
            }
            return t;
          })({ ...m, velocity: -(0, i.X)(m.velocity || 0) }),
          C = k || 0,
          T = E / (2 * Math.sqrt(x * S)),
          M = b - y,
          O = (0, i.X)(Math.sqrt(x / S)),
          R = 5 > Math.abs(M);
        if (
          (v || (v = R ? s.restSpeed.granular : s.restSpeed.default),
          g || (g = R ? s.restDelta.granular : s.restDelta.default),
          T < 1)
        ) {
          let e = u(O, T);
          r = (t) =>
            b -
            Math.exp(-T * O * t) *
              (((C + T * O * M) / e) * Math.sin(e * t) + M * Math.cos(e * t));
        } else if (1 === T)
          r = (e) => b - Math.exp(-O * e) * (M + (C + O * M) * e);
        else {
          let e = O * Math.sqrt(T * T - 1);
          r = (t) => {
            let r = Math.exp(-T * O * t),
              n = Math.min(e * t, 300);
            return (
              b -
              (r * ((C + T * O * M) * Math.sinh(n) + e * M * Math.cosh(n))) / e
            );
          };
        }
        let j = {
          calculatedDuration: (P && A) || null,
          next: (e) => {
            let t = r(e);
            if (P) w.done = e >= A;
            else {
              let n = 0;
              T < 1 && (n = 0 === e ? (0, i.f)(C) : (0, o.Y)(r, e, t));
              let l = Math.abs(n) <= v,
                a = Math.abs(b - t) <= g;
              w.done = l && a;
            }
            return (w.value = w.done ? b : t), w;
          },
          toString: () => {
            let e = Math.min((0, c.t)(j), c.Y),
              t = (0, n.K)((t) => j.next(e * t).value, e, 30);
            return e + "ms " + t;
          },
        };
        return j;
      }
    },
    25273: (e, t, r) => {
      r.d(t, { Y: () => n, t: () => i });
      let n = 2e4;
      function i(e) {
        let t = 0,
          r = e.next(t);
        for (; !r.done && t < n; ) (t += 50), (r = e.next(t));
        return t >= n ? 1 / 0 : t;
      }
    },
    62189: (e, t, r) => {
      r.d(t, { W: () => n });
      function n(e) {
        return "function" == typeof e;
      }
    },
    11660: (e, t, r) => {
      r.d(t, { Y: () => i });
      var n = r(39575);
      function i(e, t, r) {
        let i = Math.max(t - 5, 0);
        return (0, n.f)(r - e(i), t - i);
      }
    },
    97947: (e, t, r) => {
      r.d(t, { f: () => em });
      var n = r(25995),
        i = r(86498);
      let o = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        l = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        a = { type: "keyframes", duration: 0.8 },
        s = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        u = (e, { keyframes: t }) =>
          t.length > 2
            ? a
            : i.f.has(e)
            ? e.startsWith("scale")
              ? l(t[1])
              : o
            : s;
      var c = r(38282),
        d = r(93976);
      let f = { current: !1 },
        p = (e) => null !== e;
      function h(e, { repeat: t, repeatType: r = "loop" }, n) {
        let i = e.filter(p),
          o = t && "loop" !== r && t % 2 == 1 ? 0 : i.length - 1;
        return o && void 0 !== n ? n : i[o];
      }
      var m = r(58206),
        v = r(90367);
      let g = (e, t, r) =>
        (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;
      function y(e, t, r, n) {
        if (e === t && r === n) return v.l;
        let i = (t) =>
          (function (e, t, r, n, i) {
            let o, l;
            let a = 0;
            do (o = g((l = t + (r - t) / 2), n, i) - e) > 0 ? (r = l) : (t = l);
            while (Math.abs(o) > 1e-7 && ++a < 12);
            return l;
          })(t, 0, 1, e, r);
        return (e) => (0 === e || 1 === e ? e : g(i(e), t, n));
      }
      let b = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        w = (e) => (t) => 1 - e(1 - t),
        x = y(0.33, 1.53, 0.69, 0.99),
        E = w(x),
        S = b(E),
        A = (e) =>
          (e *= 2) < 1 ? 0.5 * E(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        k = (e) => 1 - Math.sin(Math.acos(e)),
        P = w(k),
        C = b(k);
      var T = r(3639),
        M = r(62189),
        O = r(50672),
        R = r(12471),
        j = r(18818),
        L = r(11127);
      let F = (e, t) =>
        "zIndex" !== t &&
        !!(
          "number" == typeof e ||
          Array.isArray(e) ||
          ("string" == typeof e &&
            (L.f.test(e) || "0" === e) &&
            !e.startsWith("url("))
        );
      class N {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: r = "keyframes",
          repeat: n = 0,
          repeatDelay: i = 0,
          repeatType: o = "loop",
          ...l
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = O.k.now()),
            (this.options = {
              autoplay: e,
              delay: t,
              type: r,
              repeat: n,
              repeatDelay: i,
              repeatType: o,
              ...l,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, R.q)(),
            this._resolved
          );
        }
        onKeyframesResolved(e, t) {
          (this.resolvedAt = O.k.now()), (this.hasAttemptedResolve = !0);
          let {
            name: r,
            type: n,
            velocity: i,
            delay: o,
            onComplete: l,
            onUpdate: a,
            isGenerator: s,
          } = this.options;
          if (
            !s &&
            !(function (e, t, r, n) {
              let i = e[0];
              if (null === i) return !1;
              if ("display" === t || "visibility" === t) return !0;
              let o = e[e.length - 1],
                l = F(i, t),
                a = F(o, t);
              return (
                (0, j.$)(
                  l === a,
                  `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`
                ),
                !!l &&
                  !!a &&
                  ((function (e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let r = 0; r < e.length; r++)
                      if (e[r] !== t) return !0;
                  })(e) ||
                    (("spring" === r || (0, M.W)(r)) && n))
              );
            })(e, r, n, i)
          ) {
            if (f.current || !o) {
              null == a || a(h(e, this.options, t)),
                null == l || l(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(e, t);
          !1 !== u &&
            ((this._resolved = { keyframes: e, finalKeyframe: t, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(e, t) {
          return this.currentFinishedPromise.then(e, t);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((e) => {
            this.resolveFinishedPromise = e;
          });
        }
      }
      var D = r(60861),
        W = r(11660);
      function z({
        keyframes: e,
        velocity: t = 0,
        power: r = 0.8,
        timeConstant: n = 325,
        bounceDamping: i = 10,
        bounceStiffness: o = 500,
        modifyTarget: l,
        min: a,
        max: s,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let d, f;
        let p = e[0],
          h = { done: !1, value: p },
          m = (e) => (void 0 !== a && e < a) || (void 0 !== s && e > s),
          v = (e) =>
            void 0 === a
              ? s
              : void 0 === s
              ? a
              : Math.abs(a - e) < Math.abs(s - e)
              ? a
              : s,
          g = r * t,
          y = p + g,
          b = void 0 === l ? y : l(y);
        b !== y && (g = b - p);
        let w = (e) => -g * Math.exp(-e / n),
          x = (e) => b + w(e),
          E = (e) => {
            let t = w(e),
              r = x(e);
            (h.done = Math.abs(t) <= u), (h.value = h.done ? b : r);
          },
          S = (e) => {
            m(h.value) &&
              ((d = e),
              (f = (0, D.o)({
                keyframes: [h.value, v(h.value)],
                velocity: (0, W.Y)(x, e, h.value),
                damping: i,
                stiffness: o,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (f || void 0 !== d || ((t = !0), E(e), S(e)),
              void 0 !== d && e >= d)
                ? f.next(e - d)
                : (t || E(e), h);
            },
          }
        );
      }
      let V = y(0.42, 0, 1, 1),
        I = y(0, 0, 0.58, 1),
        $ = y(0.42, 0, 0.58, 1);
      var B = r(27983);
      let _ = (e) => Array.isArray(e) && "number" == typeof e[0],
        q = {
          linear: v.l,
          easeIn: V,
          easeInOut: $,
          easeOut: I,
          circIn: k,
          circInOut: C,
          circOut: P,
          backIn: E,
          backInOut: S,
          backOut: x,
          anticipate: A,
        },
        K = (e) => {
          if (_(e)) {
            (0, j.V)(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [t, r, n, i] = e;
            return y(t, r, n, i);
          }
          return "string" == typeof e
            ? ((0, j.V)(void 0 !== q[e], `Invalid easing type '${e}'`), q[e])
            : e;
        };
      var H = r(6578),
        G = r(45885);
      function X({
        duration: e = 300,
        keyframes: t,
        times: r,
        ease: n = "easeInOut",
      }) {
        let i = (0, B.h)(n) ? n.map(K) : K(n),
          o = { done: !1, value: t[0] },
          l = (r && r.length === t.length ? r : (0, G.Z)(t)).map((t) => t * e),
          a = (0, H.G)(l, t, {
            ease: Array.isArray(i)
              ? i
              : t.map(() => i || $).splice(0, t.length - 1),
          });
        return {
          calculatedDuration: e,
          next: (t) => ((o.value = a(t)), (o.done = t >= e), o),
        };
      }
      var Y = r(36515),
        U = r(3423),
        Q = r(25273),
        Z = r(15178);
      let J = (e) => {
          let t = ({ timestamp: t }) => e(t);
          return {
            start: () => m.Gt.update(t, !0),
            stop: () => (0, m.WG)(t),
            now: () => (m.uv.isProcessing ? m.uv.timestamp : O.k.now()),
          };
        },
        ee = { decay: z, inertia: z, tween: X, keyframes: X, spring: D.o },
        et = (e) => e / 100;
      class er extends N {
        constructor(e) {
          super(e),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: e } = this.options;
              e && e();
            });
          let {
              name: t,
              motionValue: r,
              element: n,
              keyframes: i,
            } = this.options,
            o = (null == n ? void 0 : n.KeyframeResolver) || R.h;
          (this.resolver = new o(
            i,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            r,
            n
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(e) {
          let t, r;
          let {
              type: n = "keyframes",
              repeat: i = 0,
              repeatDelay: o = 0,
              repeatType: l,
              velocity: a = 0,
            } = this.options,
            s = (0, M.W)(n) ? n : ee[n] || X;
          s !== X &&
            "number" != typeof e[0] &&
            ((t = (0, Y.F)(et, (0, U.j)(e[0], e[1]))), (e = [0, 100]));
          let u = s({ ...this.options, keyframes: e });
          "mirror" === l &&
            (r = s({
              ...this.options,
              keyframes: [...e].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (0, Q.t)(u));
          let { calculatedDuration: c } = u,
            d = c + o;
          return {
            generator: u,
            mirroredGenerator: r,
            mapPercentToKeyframes: t,
            calculatedDuration: c,
            resolvedDuration: d,
            totalDuration: d * (i + 1) - o,
          };
        }
        onPostResolved() {
          let { autoplay: e = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && e
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(e, t = !1) {
          let { resolved: r } = this;
          if (!r) {
            let { keyframes: e } = this.options;
            return { done: !0, value: e[e.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: i,
            mirroredGenerator: o,
            mapPercentToKeyframes: l,
            keyframes: a,
            calculatedDuration: s,
            totalDuration: u,
            resolvedDuration: c,
          } = r;
          if (null === this.startTime) return i.next(0);
          let {
            delay: d,
            repeat: f,
            repeatType: p,
            repeatDelay: m,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 &&
              (this.startTime = Math.min(e - u / this.speed, this.startTime)),
            t
              ? (this.currentTime = e)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(e - this.startTime) * this.speed);
          let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let b = this.currentTime,
            w = i;
          if (f) {
            let e = Math.min(this.currentTime, u) / c,
              t = Math.floor(e),
              r = e % 1;
            !r && e >= 1 && (r = 1),
              1 === r && t--,
              (t = Math.min(t, f + 1)) % 2 &&
                ("reverse" === p
                  ? ((r = 1 - r), m && (r -= m / c))
                  : "mirror" === p && (w = o)),
              (b = (0, Z.q)(0, 1, r) * c);
          }
          let x = y ? { done: !1, value: a[0] } : w.next(b);
          l && (x.value = l(x.value));
          let { done: E } = x;
          y ||
            null === s ||
            (E =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let S =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && E));
          return (
            S && void 0 !== n && (x.value = h(a, this.options, n)),
            v && v(x.value),
            S && this.finish(),
            x
          );
        }
        get duration() {
          let { resolved: e } = this;
          return e ? (0, n.X)(e.calculatedDuration) : 0;
        }
        get time() {
          return (0, n.X)(this.currentTime);
        }
        set time(e) {
          (e = (0, n.f)(e)),
            (this.currentTime = e),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = e)
              : this.driver &&
                (this.startTime = this.driver.now() - e / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          (this.playbackSpeed = e),
            t && (this.time = (0, n.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: e = J, onPlay: t, startTime: r } = this.options;
          this.driver || (this.driver = e((e) => this.tick(e))), t && t();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = n)
            : (this.startTime = null != r ? r : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var e;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (e = this.currentTime) && void 0 !== e ? e : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: e } = this.options;
          e && e();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(e) {
          return (this.startTime = 0), this.tick(e, !0);
        }
      }
      let en = new Set(["opacity", "clipPath", "filter", "transform"]);
      var ei = r(27695),
        eo = r(57937);
      let el = { linearEasing: void 0 },
        ea = (function (e, t) {
          let r = (0, eo.p)(e);
          return () => {
            var e;
            return null !== (e = el[t]) && void 0 !== e ? e : r();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (e) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        es = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
        eu = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: es([0, 0.65, 0.55, 1]),
          circOut: es([0.55, 0, 1, 0.45]),
          backIn: es([0.31, 0.01, 0.66, -0.59]),
          backOut: es([0.33, 1.53, 0.69, 0.99]),
        };
      function ec(e, t) {
        (e.timeline = t), (e.onfinish = null);
      }
      let ed = (0, eo.p)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        ef = { anticipate: A, backInOut: S, circInOut: C };
      class ep extends N {
        constructor(e) {
          super(e);
          let {
            name: t,
            motionValue: r,
            element: n,
            keyframes: i,
          } = this.options;
          (this.resolver = new T.K(
            i,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            r,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(e, t) {
          var r, n;
          let {
            duration: i = 300,
            times: o,
            ease: l,
            type: a,
            motionValue: s,
            name: u,
            startTime: c,
          } = this.options;
          if (!(null === (r = s.owner) || void 0 === r ? void 0 : r.current))
            return !1;
          if (
            ("string" == typeof l && ea() && l in ef && (l = ef[l]),
            (n = this.options),
            (0, M.W)(n.type) ||
              "spring" === n.type ||
              !(function e(t) {
                return !!(
                  ("function" == typeof t && ea()) ||
                  !t ||
                  ("string" == typeof t && (t in eu || ea())) ||
                  _(t) ||
                  (Array.isArray(t) && t.every(e))
                );
              })(n.ease))
          ) {
            let {
                onComplete: t,
                onUpdate: r,
                motionValue: n,
                element: s,
                ...u
              } = this.options,
              c = (function (e, t) {
                let r = new er({
                    ...t,
                    keyframes: e,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: e[0] },
                  i = [],
                  o = 0;
                for (; !n.done && o < 2e4; )
                  i.push((n = r.sample(o)).value), (o += 10);
                return {
                  times: void 0,
                  keyframes: i,
                  duration: o - 10,
                  ease: "linear",
                };
              })(e, u);
            1 === (e = c.keyframes).length && (e[1] = e[0]),
              (i = c.duration),
              (o = c.times),
              (l = c.ease),
              (a = "keyframes");
          }
          let d = (function (
            e,
            t,
            r,
            {
              delay: n = 0,
              duration: i = 300,
              repeat: o = 0,
              repeatType: l = "loop",
              ease: a = "easeInOut",
              times: s,
            } = {}
          ) {
            let u = { [t]: r };
            s && (u.offset = s);
            let c = (function e(t, r) {
              if (t)
                return "function" == typeof t && ea()
                  ? (0, ei.K)(t, r)
                  : _(t)
                  ? es(t)
                  : Array.isArray(t)
                  ? t.map((t) => e(t, r) || eu.easeOut)
                  : eu[t];
            })(a, i);
            return (
              Array.isArray(c) && (u.easing = c),
              e.animate(u, {
                delay: n,
                duration: i,
                easing: Array.isArray(c) ? "linear" : c,
                fill: "both",
                iterations: o + 1,
                direction: "reverse" === l ? "alternate" : "normal",
              })
            );
          })(s.owner.current, u, e, {
            ...this.options,
            duration: i,
            times: o,
            ease: l,
          });
          return (
            (d.startTime = null != c ? c : this.calcStartTime()),
            this.pendingTimeline
              ? (ec(d, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: r } = this.options;
                  s.set(h(e, this.options, t)),
                    r && r(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: i,
              times: o,
              type: a,
              ease: l,
              keyframes: e,
            }
          );
        }
        get duration() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { duration: t } = e;
          return (0, n.X)(t);
        }
        get time() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { animation: t } = e;
          return (0, n.X)(t.currentTime || 0);
        }
        set time(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: r } = t;
          r.currentTime = (0, n.f)(e);
        }
        get speed() {
          let { resolved: e } = this;
          if (!e) return 1;
          let { animation: t } = e;
          return t.playbackRate;
        }
        set speed(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: r } = t;
          r.playbackRate = e;
        }
        get state() {
          let { resolved: e } = this;
          if (!e) return "idle";
          let { animation: t } = e;
          return t.playState;
        }
        get startTime() {
          let { resolved: e } = this;
          if (!e) return null;
          let { animation: t } = e;
          return t.startTime;
        }
        attachTimeline(e) {
          if (this._resolved) {
            let { resolved: t } = this;
            if (!t) return v.l;
            let { animation: r } = t;
            ec(r, e);
          } else this.pendingTimeline = e;
          return v.l;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          "finished" === t.playState && this.updateFinishedPromise(), t.play();
        }
        pause() {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          t.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: e } = this;
          if (!e) return;
          let {
            animation: t,
            keyframes: r,
            duration: i,
            type: o,
            ease: l,
            times: a,
          } = e;
          if ("idle" === t.playState || "finished" === t.playState) return;
          if (this.time) {
            let {
                motionValue: e,
                onUpdate: t,
                onComplete: s,
                element: u,
                ...c
              } = this.options,
              d = new er({
                ...c,
                keyframes: r,
                duration: i,
                type: o,
                ease: l,
                times: a,
                isGenerator: !0,
              }),
              f = (0, n.f)(this.time);
            e.setWithVelocity(d.sample(f - 10).value, d.sample(f).value, 10);
          }
          let { onStop: s } = this.options;
          s && s(), this.cancel();
        }
        complete() {
          let { resolved: e } = this;
          e && e.animation.finish();
        }
        cancel() {
          let { resolved: e } = this;
          e && e.animation.cancel();
        }
        static supports(e) {
          let {
            motionValue: t,
            name: r,
            repeatDelay: n,
            repeatType: i,
            damping: o,
            type: l,
          } = e;
          return (
            ed() &&
            r &&
            en.has(r) &&
            t &&
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== i &&
            0 !== o &&
            "inertia" !== l
          );
        }
      }
      var eh = r(89426);
      let em =
        (e, t, r, i = {}, o, l) =>
        (a) => {
          let s = (0, c.r)(i, e) || {},
            p = s.delay || i.delay || 0,
            { elapsed: v = 0 } = i;
          v -= (0, n.f)(p);
          let g = {
            keyframes: Array.isArray(r) ? r : [null, r],
            ease: "easeOut",
            velocity: t.getVelocity(),
            ...s,
            delay: -v,
            onUpdate: (e) => {
              t.set(e), s.onUpdate && s.onUpdate(e);
            },
            onComplete: () => {
              a(), s.onComplete && s.onComplete();
            },
            name: e,
            motionValue: t,
            element: l ? void 0 : o,
          };
          !(function ({
            when: e,
            delay: t,
            delayChildren: r,
            staggerChildren: n,
            staggerDirection: i,
            repeat: o,
            repeatType: l,
            repeatDelay: a,
            from: s,
            elapsed: u,
            ...c
          }) {
            return !!Object.keys(c).length;
          })(s) && (g = { ...g, ...u(e, g) }),
            g.duration && (g.duration = (0, n.f)(g.duration)),
            g.repeatDelay && (g.repeatDelay = (0, n.f)(g.repeatDelay)),
            void 0 !== g.from && (g.keyframes[0] = g.from);
          let y = !1;
          if (
            ((!1 !== g.type && (0 !== g.duration || g.repeatDelay)) ||
              ((g.duration = 0), 0 !== g.delay || (y = !0)),
            (f.current || d.W.skipAnimations) &&
              ((y = !0), (g.duration = 0), (g.delay = 0)),
            y && !l && void 0 !== t.get())
          ) {
            let e = h(g.keyframes, s);
            if (void 0 !== e)
              return (
                m.Gt.update(() => {
                  g.onUpdate(e), g.onComplete();
                }),
                new eh.P([])
              );
          }
          return !l && ep.supports(g) ? new ep(g) : new er(g);
        };
    },
    80059: (e, t, r) => {
      r.d(t, { $: () => c });
      var n = r(86498),
        i = r(97947),
        o = r(86678),
        l = r(38282),
        a = r(80200),
        s = r(92910),
        u = r(58206);
      function c(e, t, { delay: r = 0, transitionOverride: d, type: f } = {}) {
        var p;
        let {
          transition: h = e.getDefaultTransition(),
          transitionEnd: m,
          ...v
        } = t;
        d && (h = d);
        let g = [],
          y = f && e.animationState && e.animationState.getState()[f];
        for (let t in v) {
          let o = e.getValue(
              t,
              null !== (p = e.latestValues[t]) && void 0 !== p ? p : null
            ),
            c = v[t];
          if (
            void 0 === c ||
            (y &&
              (function ({ protectedKeys: e, needsAnimating: t }, r) {
                let n = e.hasOwnProperty(r) && !0 !== t[r];
                return (t[r] = !1), n;
              })(y, t))
          )
            continue;
          let d = { delay: r, ...(0, l.r)(h || {}, t) },
            f = !1;
          if (window.MotionHandoffAnimation) {
            let r = e.props[a.n];
            if (r) {
              let e = window.MotionHandoffAnimation(r, t, u.Gt);
              null !== e && ((d.startTime = e), (f = !0));
            }
          }
          !(function (e, t) {
            let r = e.getValue("willChange");
            (0, s.S)(r) && r.add && r.add(t);
          })(e, t),
            o.start(
              (0, i.f)(
                t,
                o,
                c,
                e.shouldReduceMotion && n.f.has(t) ? { type: !1 } : d,
                e,
                f
              )
            );
          let m = o.animation;
          m && g.push(m);
        }
        return (
          m &&
            Promise.all(g).then(() => {
              u.Gt.update(() => {
                m && (0, o.U)(e, m);
              });
            }),
          g
        );
      }
    },
    12586: (e, t, r) => {
      r.d(t, { _: () => a });
      var n = r(51447),
        i = r(80059);
      function o(e, t, r = {}) {
        var a;
        let s = (0, n.K)(
            e,
            t,
            "exit" === r.type
              ? null === (a = e.presenceContext) || void 0 === a
                ? void 0
                : a.custom
              : void 0
          ),
          { transition: u = e.getDefaultTransition() || {} } = s || {};
        r.transitionOverride && (u = r.transitionOverride);
        let c = s
            ? () => Promise.all((0, i.$)(e, s, r))
            : () => Promise.resolve(),
          d =
            e.variantChildren && e.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: i = 0,
                    staggerChildren: a,
                    staggerDirection: s,
                  } = u;
                  return (function (e, t, r = 0, n = 0, i = 1, a) {
                    let s = [],
                      u = (e.variantChildren.size - 1) * n,
                      c = 1 === i ? (e = 0) => e * n : (e = 0) => u - e * n;
                    return (
                      Array.from(e.variantChildren)
                        .sort(l)
                        .forEach((e, n) => {
                          e.notify("AnimationStart", t),
                            s.push(
                              o(e, t, { ...a, delay: r + c(n) }).then(() =>
                                e.notify("AnimationComplete", t)
                              )
                            );
                        }),
                      Promise.all(s)
                    );
                  })(e, t, i + n, a, s, r);
                }
              : () => Promise.resolve(),
          { when: f } = u;
        if (!f) return Promise.all([c(), d(r.delay)]);
        {
          let [e, t] = "beforeChildren" === f ? [c, d] : [d, c];
          return e().then(() => t());
        }
      }
      function l(e, t) {
        return e.sortNodePosition(t);
      }
      function a(e, t, r = {}) {
        let l;
        if ((e.notify("AnimationStart", t), Array.isArray(t)))
          l = Promise.all(t.map((t) => o(e, t, r)));
        else if ("string" == typeof t) l = o(e, t, r);
        else {
          let o = "function" == typeof t ? (0, n.K)(e, t, r.custom) : t;
          l = Promise.all((0, i.$)(e, o, r));
        }
        return l.then(() => {
          e.notify("AnimationComplete", t);
        });
      }
    },
    80200: (e, t, r) => {
      r.d(t, { n: () => n });
      let n = "data-" + (0, r(4454).I)("framerAppearId");
    },
    38282: (e, t, r) => {
      r.d(t, { r: () => n });
      function n(e, t) {
        return e ? e[t] || e.default || e : void 0;
      }
    },
    6152: (e, t, r) => {
      r.d(t, { N: () => n });
      function n(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
    },
    89402: (e, t, r) => {
      r.d(t, { p: () => n });
      let n = (e) => Array.isArray(e);
    },
    66494: (e, t, r) => {
      r.d(t, { N: () => g });
      var n = r(95155),
        i = r(12115),
        o = r(98041),
        l = r(72321),
        a = r(44712);
      class s extends i.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function u(e) {
        let { children: t, isPresent: r } = e,
          o = (0, i.useId)(),
          l = (0, i.useRef)(null),
          u = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: c } = (0, i.useContext)(a.Q);
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: e, height: t, top: n, left: i } = u.current;
            if (r || !l.current || !e || !t) return;
            l.current.dataset.motionPopId = o;
            let a = document.createElement("style");
            return (
              c && (a.nonce = c),
              document.head.appendChild(a),
              a.sheet &&
                a.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      o,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            top: ")
                    .concat(n, "px !important;\n            left: ")
                    .concat(i, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(a);
              }
            );
          }, [r]),
          (0, n.jsx)(s, {
            isPresent: r,
            childRef: l,
            sizeRef: u,
            children: i.cloneElement(t, { ref: l }),
          })
        );
      }
      let c = (e) => {
        let {
            children: t,
            initial: r,
            isPresent: a,
            onExitComplete: s,
            custom: c,
            presenceAffectsLayout: f,
            mode: p,
          } = e,
          h = (0, l.M)(d),
          m = (0, i.useId)(),
          v = (0, i.useCallback)(
            (e) => {
              for (let t of (h.set(e, !0), h.values())) if (!t) return;
              s && s();
            },
            [h, s]
          ),
          g = (0, i.useMemo)(
            () => ({
              id: m,
              initial: r,
              isPresent: a,
              custom: c,
              onExitComplete: v,
              register: (e) => (h.set(e, !1), () => h.delete(e)),
            }),
            f ? [Math.random(), v] : [a, v]
          );
        return (
          (0, i.useMemo)(() => {
            h.forEach((e, t) => h.set(t, !1));
          }, [a]),
          i.useEffect(() => {
            a || h.size || !s || s();
          }, [a]),
          "popLayout" === p &&
            (t = (0, n.jsx)(u, { isPresent: a, children: t })),
          (0, n.jsx)(o.t.Provider, { value: g, children: t })
        );
      };
      function d() {
        return new Map();
      }
      var f = r(91921),
        p = r(18818);
      let h = (e) => e.key || "";
      function m(e) {
        let t = [];
        return (
          i.Children.forEach(e, (e) => {
            (0, i.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var v = r(17530);
      let g = (e) => {
        let {
          children: t,
          exitBeforeEnter: r,
          custom: o,
          initial: a = !0,
          onExitComplete: s,
          presenceAffectsLayout: u = !0,
          mode: d = "sync",
        } = e;
        (0, p.V)(!r, "Replace exitBeforeEnter with mode='wait'");
        let g = (0, i.useMemo)(() => m(t), [t]),
          y = g.map(h),
          b = (0, i.useRef)(!0),
          w = (0, i.useRef)(g),
          x = (0, l.M)(() => new Map()),
          [E, S] = (0, i.useState)(g),
          [A, k] = (0, i.useState)(g);
        (0, v.E)(() => {
          (b.current = !1), (w.current = g);
          for (let e = 0; e < A.length; e++) {
            let t = h(A[e]);
            y.includes(t) ? x.delete(t) : !0 !== x.get(t) && x.set(t, !1);
          }
        }, [A, y.length, y.join("-")]);
        let P = [];
        if (g !== E) {
          let e = [...g];
          for (let t = 0; t < A.length; t++) {
            let r = A[t],
              n = h(r);
            y.includes(n) || (e.splice(t, 0, r), P.push(r));
          }
          "wait" === d && P.length && (e = P), k(m(e)), S(g);
          return;
        }
        let { forceRender: C } = (0, i.useContext)(f.L);
        return (0, n.jsx)(n.Fragment, {
          children: A.map((e) => {
            let t = h(e),
              r = g === A || y.includes(t);
            return (0, n.jsx)(
              c,
              {
                isPresent: r,
                initial: (!b.current || !!a) && void 0,
                custom: r ? void 0 : o,
                presenceAffectsLayout: u,
                mode: d,
                onExitComplete: r
                  ? void 0
                  : () => {
                      if (!x.has(t)) return;
                      x.set(t, !0);
                      let e = !0;
                      x.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == C || C(), k(w.current), s && s());
                    },
                children: e,
              },
              t
            );
          }),
        });
      };
    },
    91921: (e, t, r) => {
      r.d(t, { L: () => n });
      let n = (0, r(12115).createContext)({});
    },
    21954: (e, t, r) => {
      r.d(t, { Y: () => n });
      let n = (0, r(12115).createContext)({ strict: !1 });
    },
    44712: (e, t, r) => {
      r.d(t, { Q: () => n });
      let n = (0, r(12115).createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    98041: (e, t, r) => {
      r.d(t, { t: () => n });
      let n = (0, r(12115).createContext)(null);
    },
    27983: (e, t, r) => {
      r.d(t, { h: () => n });
      let n = (e) => Array.isArray(e) && "number" != typeof e[0];
    },
    21456: (e, t, r) => {
      r.d(t, { I: () => o });
      var n = r(93976);
      let i = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function o(e, t) {
        let r = !1,
          o = !0,
          l = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (r = !0),
          s = i.reduce(
            (e, t) => (
              (e[t] = (function (e) {
                let t = new Set(),
                  r = new Set(),
                  n = !1,
                  i = !1,
                  o = new WeakSet(),
                  l = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(t) {
                  o.has(t) && (s.schedule(t), e()), t(l);
                }
                let s = {
                  schedule: (e, i = !1, l = !1) => {
                    let a = l && n ? t : r;
                    return i && o.add(e), a.has(e) || a.add(e), e;
                  },
                  cancel: (e) => {
                    r.delete(e), o.delete(e);
                  },
                  process: (e) => {
                    if (((l = e), n)) {
                      i = !0;
                      return;
                    }
                    (n = !0),
                      ([t, r] = [r, t]),
                      t.forEach(a),
                      t.clear(),
                      (n = !1),
                      i && ((i = !1), s.process(e));
                  },
                };
                return s;
              })(a)),
              e
            ),
            {}
          ),
          {
            read: u,
            resolveKeyframes: c,
            update: d,
            preRender: f,
            render: p,
            postRender: h,
          } = s,
          m = () => {
            let i = n.W.useManualTiming ? l.timestamp : performance.now();
            (r = !1),
              (l.delta = o
                ? 1e3 / 60
                : Math.max(Math.min(i - l.timestamp, 40), 1)),
              (l.timestamp = i),
              (l.isProcessing = !0),
              u.process(l),
              c.process(l),
              d.process(l),
              f.process(l),
              p.process(l),
              h.process(l),
              (l.isProcessing = !1),
              r && t && ((o = !1), e(m));
          },
          v = () => {
            (r = !0), (o = !0), l.isProcessing || e(m);
          };
        return {
          schedule: i.reduce((e, t) => {
            let n = s[t];
            return (
              (e[t] = (e, t = !1, i = !1) => (r || v(), n.schedule(e, t, i))), e
            );
          }, {}),
          cancel: (e) => {
            for (let t = 0; t < i.length; t++) s[i[t]].cancel(e);
          },
          state: l,
          steps: s,
        };
      }
    },
    58206: (e, t, r) => {
      r.d(t, { Gt: () => i, WG: () => o, uv: () => l });
      var n = r(90367);
      let {
        schedule: i,
        cancel: o,
        state: l,
        steps: a,
      } = (0, r(21456).I)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.l,
        !0
      );
    },
    50672: (e, t, r) => {
      let n;
      r.d(t, { k: () => a });
      var i = r(93976),
        o = r(58206);
      function l() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              o.uv.isProcessing || i.W.useManualTiming
                ? o.uv.timestamp
                : performance.now()
            ),
          n
        ),
        set: (e) => {
          (n = e), queueMicrotask(l);
        },
      };
    },
    74030: (e, t, r) => {
      r.d(t, { B: () => i });
      let n = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        i = {};
      for (let e in n) i[e] = { isEnabled: (t) => n[e].some((e) => !!t[e]) };
    },
    15060: (e, t, r) => {
      r.d(t, { Y: () => i });
      var n = r(74030);
      function i(e) {
        for (let t in e) n.B[t] = { ...n.B[t], ...e[t] };
      }
    },
    28620: (e, t, r) => {
      r.d(t, { z: () => o });
      let n = {};
      var i = r(86498);
      function o(e, { layout: t, layoutId: r }) {
        return (
          i.f.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== r) && (!!n[e] || "opacity" === e))
        );
      }
    },
    76992: (e, t, r) => {
      r.d(t, { d: () => K });
      var n = r(95155),
        i = r(12115),
        o = r(44712);
      let l = (0, i.createContext)({});
      var a = r(98041),
        s = r(17530),
        u = r(21954),
        c = r(80200);
      let { schedule: d, cancel: f } = (0, r(21456).I)(queueMicrotask, !1);
      function p(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      let h = (0, i.createContext)({});
      var m = r(30389),
        v = r(59505);
      function g(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var y = r(15060),
        b = r(42504),
        w = r(91921);
      let x = Symbol.for("motionComponentSymbol");
      var E = r(74030),
        S = r(50689),
        A = r(90369),
        k = r(40275),
        P = r(6152),
        C = r(23443),
        T = r(72321),
        M = r(63903),
        O = r(92910);
      let R = (e) => (t, r) => {
          let n = (0, i.useContext)(l),
            o = (0, i.useContext)(a.t),
            s = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: e,
                  createRenderState: t,
                  onMount: r,
                },
                n,
                i,
                o
              ) {
                let l = {
                  latestValues: (function (e, t, r, n) {
                    let i = {},
                      o = n(e, {});
                    for (let e in o)
                      i[e] = (function (e) {
                        let t = (0, O.S)(e) ? e.get() : e;
                        return (0, M.B)(t) ? t.toValue() : t;
                      })(o[e]);
                    let { initial: l, animate: a } = e,
                      s = (0, v.e)(e),
                      u = (0, v.O)(e);
                    t &&
                      u &&
                      !s &&
                      !1 !== e.inherit &&
                      (void 0 === l && (l = t.initial),
                      void 0 === a && (a = t.animate));
                    let c = !!r && !1 === r.initial,
                      d = (c = c || !1 === l) ? a : l;
                    if (d && "boolean" != typeof d && !(0, P.N)(d)) {
                      let t = Array.isArray(d) ? d : [d];
                      for (let r = 0; r < t.length; r++) {
                        let n = (0, C.a)(e, t[r]);
                        if (n) {
                          let { transitionEnd: e, transition: t, ...r } = n;
                          for (let e in r) {
                            let t = r[e];
                            if (Array.isArray(t)) {
                              let e = c ? t.length - 1 : 0;
                              t = t[e];
                            }
                            null !== t && (i[e] = t);
                          }
                          for (let t in e) i[t] = e[t];
                        }
                      }
                    }
                    return i;
                  })(n, i, o, e),
                  renderState: t(),
                };
                return r && (l.mount = (e) => r(n, e, l)), l;
              })(e, t, n, o);
          return r ? s() : (0, T.M)(s);
        },
        j = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
        L = () => ({ ...j(), attrs: {} });
      var F = r(40175),
        N = r(75915),
        D = r(58206);
      let W = {
          useVisualState: R({
            scrapeMotionValuesFromProps: k.x,
            createRenderState: L,
            onMount: (e, t, { renderState: r, latestValues: n }) => {
              D.Gt.read(() => {
                try {
                  r.dimensions =
                    "function" == typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (e) {
                  r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                D.Gt.render(() => {
                  (0, F.B)(r, n, (0, N.n)(t.tagName), e.transformTemplate),
                    (0, A.d)(t, r);
                });
            },
          }),
        },
        z = {
          useVisualState: R({
            scrapeMotionValuesFromProps: r(75538).x,
            createRenderState: j,
          }),
        };
      var V = r(28620),
        I = r(8994);
      function $(e, t, r) {
        for (let n in t) (0, O.S)(t[n]) || (0, V.z)(n, r) || (e[n] = t[n]);
      }
      let B = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function _(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          B.has(e)
        );
      }
      let q = (e) => !_(e);
      try {
        !(function (e) {
          e && (q = (t) => (t.startsWith("on") ? !_(t) : e(t)));
        })(require("@emotion/is-prop-valid").default);
      } catch (e) {}
      let K = function (
        e,
        { forwardMotionProps: t } = { forwardMotionProps: !1 }
      ) {
        return (function (e) {
          let {
            preloadedFeatures: t,
            createVisualElement: r,
            useRender: f,
            useVisualState: S,
            Component: A,
          } = e;
          t && (0, y.Y)(t);
          let k = (0, i.forwardRef)(function (e, t) {
            var y;
            let x;
            let k = {
                ...(0, i.useContext)(o.Q),
                ...e,
                layoutId: (function (e) {
                  let { layoutId: t } = e,
                    r = (0, i.useContext)(w.L).id;
                  return r && void 0 !== t ? r + "-" + t : t;
                })(e),
              },
              { isStatic: P } = k,
              C = (function (e) {
                let { initial: t, animate: r } = (function (e, t) {
                  if ((0, v.e)(e)) {
                    let { initial: t, animate: r } = e;
                    return {
                      initial: !1 === t || (0, m.w)(t) ? t : void 0,
                      animate: (0, m.w)(r) ? r : void 0,
                    };
                  }
                  return !1 !== e.inherit ? t : {};
                })(e, (0, i.useContext)(l));
                return (0, i.useMemo)(
                  () => ({ initial: t, animate: r }),
                  [g(t), g(r)]
                );
              })(e),
              T = S(e, P);
            if (!P && b.B) {
              (0, i.useContext)(u.Y).strict;
              let e = (function (e) {
                let { drag: t, layout: r } = E.B;
                if (!t && !r) return {};
                let n = { ...t, ...r };
                return {
                  MeasureLayout:
                    (null == t ? void 0 : t.isEnabled(e)) ||
                    (null == r ? void 0 : r.isEnabled(e))
                      ? n.MeasureLayout
                      : void 0,
                  ProjectionNode: n.ProjectionNode,
                };
              })(k);
              (x = e.MeasureLayout),
                (C.visualElement = (function (e, t, r, n, f) {
                  var m, v;
                  let { visualElement: g } = (0, i.useContext)(l),
                    y = (0, i.useContext)(u.Y),
                    b = (0, i.useContext)(a.t),
                    w = (0, i.useContext)(o.Q).reducedMotion,
                    x = (0, i.useRef)(null);
                  (n = n || y.renderer),
                    !x.current &&
                      n &&
                      (x.current = n(e, {
                        visualState: t,
                        parent: g,
                        props: r,
                        presenceContext: b,
                        blockInitialAnimation: !!b && !1 === b.initial,
                        reducedMotionConfig: w,
                      }));
                  let E = x.current,
                    S = (0, i.useContext)(h);
                  E &&
                    !E.projection &&
                    f &&
                    ("html" === E.type || "svg" === E.type) &&
                    (function (e, t, r, n) {
                      let {
                        layoutId: i,
                        layout: o,
                        drag: l,
                        dragConstraints: a,
                        layoutScroll: s,
                        layoutRoot: u,
                      } = t;
                      (e.projection = new r(
                        e.latestValues,
                        t["data-framer-portal-id"]
                          ? void 0
                          : (function e(t) {
                              if (t)
                                return !1 !== t.options.allowProjection
                                  ? t.projection
                                  : e(t.parent);
                            })(e.parent)
                      )),
                        e.projection.setOptions({
                          layoutId: i,
                          layout: o,
                          alwaysMeasureLayout: !!l || (a && p(a)),
                          visualElement: e,
                          animationType: "string" == typeof o ? o : "both",
                          initialPromotionConfig: n,
                          layoutScroll: s,
                          layoutRoot: u,
                        });
                    })(x.current, r, f, S);
                  let A = (0, i.useRef)(!1);
                  (0, i.useInsertionEffect)(() => {
                    E && A.current && E.update(r, b);
                  });
                  let k = r[c.n],
                    P = (0, i.useRef)(
                      !!k &&
                        !(null === (m = window.MotionHandoffIsComplete) ||
                        void 0 === m
                          ? void 0
                          : m.call(window, k)) &&
                        (null === (v = window.MotionHasOptimisedAnimation) ||
                        void 0 === v
                          ? void 0
                          : v.call(window, k))
                    );
                  return (
                    (0, s.E)(() => {
                      E &&
                        ((A.current = !0),
                        (window.MotionIsMounted = !0),
                        E.updateFeatures(),
                        d.render(E.render),
                        P.current &&
                          E.animationState &&
                          E.animationState.animateChanges());
                    }),
                    (0, i.useEffect)(() => {
                      E &&
                        (!P.current &&
                          E.animationState &&
                          E.animationState.animateChanges(),
                        P.current &&
                          (queueMicrotask(() => {
                            var e;
                            null === (e = window.MotionHandoffMarkAsComplete) ||
                              void 0 === e ||
                              e.call(window, k);
                          }),
                          (P.current = !1)));
                    }),
                    E
                  );
                })(A, T, k, r, e.ProjectionNode));
            }
            return (0, n.jsxs)(l.Provider, {
              value: C,
              children: [
                x && C.visualElement
                  ? (0, n.jsx)(x, { visualElement: C.visualElement, ...k })
                  : null,
                f(
                  A,
                  e,
                  ((y = C.visualElement),
                  (0, i.useCallback)(
                    (e) => {
                      e && T.mount && T.mount(e),
                        y && (e ? y.mount(e) : y.unmount()),
                        t &&
                          ("function" == typeof t
                            ? t(e)
                            : p(t) && (t.current = e));
                    },
                    [y]
                  )),
                  T,
                  P,
                  C.visualElement
                ),
              ],
            });
          });
          return (k[x] = A), k;
        })({
          ...((0, S.Q)(e) ? W : z),
          preloadedFeatures: void 0,
          useRender: (function (e = !1) {
            return (t, r, n, { latestValues: o }, l) => {
              let a = (
                  (0, S.Q)(t)
                    ? function (e, t, r, n) {
                        let o = (0, i.useMemo)(() => {
                          let r = L();
                          return (
                            (0, F.B)(r, t, (0, N.n)(n), e.transformTemplate),
                            { ...r.attrs, style: { ...r.style } }
                          );
                        }, [t]);
                        if (e.style) {
                          let t = {};
                          $(t, e.style, e), (o.style = { ...t, ...o.style });
                        }
                        return o;
                      }
                    : function (e, t) {
                        let r = {},
                          n = (function (e, t) {
                            let r = e.style || {},
                              n = {};
                            return (
                              $(n, r, e),
                              Object.assign(
                                n,
                                (function ({ transformTemplate: e }, t) {
                                  return (0, i.useMemo)(() => {
                                    let r = j();
                                    return (
                                      (0, I.O)(r, t, e),
                                      Object.assign({}, r.vars, r.style)
                                    );
                                  }, [t]);
                                })(e, t)
                              ),
                              n
                            );
                          })(e, t);
                        return (
                          e.drag &&
                            !1 !== e.dragListener &&
                            ((r.draggable = !1),
                            (n.userSelect =
                              n.WebkitUserSelect =
                              n.WebkitTouchCallout =
                                "none"),
                            (n.touchAction =
                              !0 === e.drag
                                ? "none"
                                : `pan-${"x" === e.drag ? "y" : "x"}`)),
                          void 0 === e.tabIndex &&
                            (e.onTap || e.onTapStart || e.whileTap) &&
                            (r.tabIndex = 0),
                          (r.style = n),
                          r
                        );
                      }
                )(r, o, l, t),
                s = (function (e, t, r) {
                  let n = {};
                  for (let i in e)
                    ("values" !== i || "object" != typeof e.values) &&
                      (q(i) ||
                        (!0 === r && _(i)) ||
                        (!t && !_(i)) ||
                        (e.draggable && i.startsWith("onDrag"))) &&
                      (n[i] = e[i]);
                  return n;
                })(r, "string" == typeof t, e),
                u = t !== i.Fragment ? { ...s, ...a, ref: n } : {},
                { children: c } = r,
                d = (0, i.useMemo)(() => ((0, O.S)(c) ? c.get() : c), [c]);
              return (0, i.createElement)(t, { ...u, children: d });
            };
          })(t),
          createVisualElement: void 0,
          Component: e,
        });
      };
    },
    58356: (e, t, r) => {
      r.d(t, {
        $h: () => o,
        Io: () => a,
        Uu: () => i,
        hJ: () => s,
        qp: () => l,
      });
      var n = r(76992);
      let i = (0, n.d)("div"),
        o = (0, n.d)("h1"),
        l = (0, n.d)("header"),
        a = (0, n.d)("section"),
        s = (0, n.d)("span");
    },
    3639: (e, t, r) => {
      r.d(t, { K: () => h });
      var n = r(53156),
        i = r(18818),
        o = r(54994),
        l = r(56920);
      let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var s = r(91732),
        u = r(99138),
        c = r(12471),
        d = r(11127),
        f = r(38616);
      let p = new Set(["auto", "none", "0"]);
      class h extends c.h {
        constructor(e, t, r, n, i) {
          super(e, t, r, n, i, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: r } = this;
          if (!t || !t.current) return;
          super.readKeyframes();
          for (let r = 0; r < e.length; r++) {
            let n = e[r];
            if ("string" == typeof n && ((n = n.trim()), (0, l.p)(n))) {
              let s = (function e(t, r, n = 1) {
                (0, i.V)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
                );
                let [s, u] = (function (e) {
                  let t = a.exec(e);
                  if (!t) return [,];
                  let [, r, n, i] = t;
                  return [`--${null != r ? r : n}`, i];
                })(t);
                if (!s) return;
                let c = window.getComputedStyle(r).getPropertyValue(s);
                if (c) {
                  let e = c.trim();
                  return (0, o.i)(e) ? parseFloat(e) : e;
                }
                return (0, l.p)(u) ? e(u, r, n + 1) : u;
              })(n, t.current);
              void 0 !== s && (e[r] = s),
                r === e.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !s.$y.has(r) || 2 !== e.length))
            return;
          let [n, c] = e,
            d = (0, u.n)(n),
            f = (0, u.n)(c);
          if (d !== f) {
            if ((0, s.E4)(d) && (0, s.E4)(f))
              for (let t = 0; t < e.length; t++) {
                let r = e[t];
                "string" == typeof r && (e[t] = parseFloat(r));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            r = [];
          for (let t = 0; t < e.length; t++) {
            var i;
            ("number" == typeof (i = e[t])
              ? 0 === i
              : null === i || "none" === i || "0" === i || (0, n.$)(i)) &&
              r.push(t);
          }
          r.length &&
            (function (e, t, r) {
              let n,
                i = 0;
              for (; i < e.length && !n; ) {
                let t = e[i];
                "string" == typeof t &&
                  !p.has(t) &&
                  (0, d.V)(t).values.length &&
                  (n = e[i]),
                  i++;
              }
              if (n && r) for (let i of t) e[i] = (0, f.J)(r, n);
            })(e, r, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: r } = this;
          if (!e || !e.current) return;
          "height" === r && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = s.Hr[r](
              e.measureViewportBox(),
              window.getComputedStyle(e.current)
            )),
            (t[0] = this.measuredOrigin);
          let n = t[t.length - 1];
          void 0 !== n && e.getValue(r, n).jump(n, !1);
        }
        measureEndState() {
          var e;
          let { element: t, name: r, unresolvedKeyframes: n } = this;
          if (!t || !t.current) return;
          let i = t.getValue(r);
          i && i.jump(this.measuredOrigin, !1);
          let o = n.length - 1,
            l = n[o];
          (n[o] = s.Hr[r](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== l &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = l),
            (null === (e = this.removedTransforms) || void 0 === e
              ? void 0
              : e.length) &&
              this.removedTransforms.forEach(([e, r]) => {
                t.getValue(e).set(r);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    75487: (e, t, r) => {
      r.d(t, { J: () => n });
      let n = (0, r(57937).p)(() => void 0 !== window.ScrollTimeline);
    },
    4454: (e, t, r) => {
      r.d(t, { I: () => n });
      let n = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    56920: (e, t, r) => {
      r.d(t, { j: () => i, p: () => l });
      let n = (e) => (t) => "string" == typeof t && t.startsWith(e),
        i = n("--"),
        o = n("var(--"),
        l = (e) => !!o(e) && a.test(e.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    50689: (e, t, r) => {
      r.d(t, { Q: () => i });
      let n = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function i(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (n.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
    },
    91732: (e, t, r) => {
      r.d(t, { $y: () => l, E4: () => a, Hr: () => p, W9: () => f });
      var n = r(86498),
        i = r(82510),
        o = r(62867);
      let l = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        a = (e) => e === i.ai || e === o.px,
        s = (e, t) => parseFloat(e.split(", ")[t]),
        u =
          (e, t) =>
          (r, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let i = n.match(/^matrix3d\((.+)\)$/u);
            if (i) return s(i[1], t);
            {
              let t = n.match(/^matrix\((.+)\)$/u);
              return t ? s(t[1], e) : 0;
            }
          },
        c = new Set(["x", "y", "z"]),
        d = n.U.filter((e) => !c.has(e));
      function f(e) {
        let t = [];
        return (
          d.forEach((r) => {
            let n = e.getValue(r);
            void 0 !== n &&
              (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
          }),
          t
        );
      }
      let p = {
        width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
          e.max - e.min - parseFloat(t) - parseFloat(r),
        height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
          e.max - e.min - parseFloat(t) - parseFloat(r),
        top: (e, { top: t }) => parseFloat(t),
        left: (e, { left: t }) => parseFloat(t),
        bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
        right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (p.translateX = p.x), (p.translateY = p.y);
    },
    38616: (e, t, r) => {
      r.d(t, { J: () => l });
      var n = r(11127),
        i = r(70520),
        o = r(33205);
      function l(e, t) {
        let r = (0, o.D)(e);
        return (
          r !== i.p && (r = n.f),
          r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
        );
      }
    },
    33205: (e, t, r) => {
      r.d(t, { D: () => l });
      var n = r(36973),
        i = r(70520);
      let o = {
          ...r(26395).W,
          color: n.y,
          backgroundColor: n.y,
          outlineColor: n.y,
          fill: n.y,
          stroke: n.y,
          borderColor: n.y,
          borderTopColor: n.y,
          borderRightColor: n.y,
          borderBottomColor: n.y,
          borderLeftColor: n.y,
          filter: i.p,
          WebkitFilter: i.p,
        },
        l = (e) => o[e];
    },
    99138: (e, t, r) => {
      r.d(t, { T: () => l, n: () => a });
      var n = r(82510),
        i = r(62867),
        o = r(57975);
      let l = [
          n.ai,
          i.px,
          i.KN,
          i.uj,
          i.vw,
          i.vh,
          { test: (e) => "auto" === e, parse: (e) => e },
        ],
        a = (e) => l.find((0, o.w)(e));
    },
    26395: (e, t, r) => {
      r.d(t, { W: () => s });
      var n = r(82510),
        i = r(62867);
      let o = {
          borderWidth: i.px,
          borderTopWidth: i.px,
          borderRightWidth: i.px,
          borderBottomWidth: i.px,
          borderLeftWidth: i.px,
          borderRadius: i.px,
          radius: i.px,
          borderTopLeftRadius: i.px,
          borderTopRightRadius: i.px,
          borderBottomRightRadius: i.px,
          borderBottomLeftRadius: i.px,
          width: i.px,
          maxWidth: i.px,
          height: i.px,
          maxHeight: i.px,
          top: i.px,
          right: i.px,
          bottom: i.px,
          left: i.px,
          padding: i.px,
          paddingTop: i.px,
          paddingRight: i.px,
          paddingBottom: i.px,
          paddingLeft: i.px,
          margin: i.px,
          marginTop: i.px,
          marginRight: i.px,
          marginBottom: i.px,
          marginLeft: i.px,
          backgroundPositionX: i.px,
          backgroundPositionY: i.px,
        },
        l = {
          rotate: i.uj,
          rotateX: i.uj,
          rotateY: i.uj,
          rotateZ: i.uj,
          scale: n.hs,
          scaleX: n.hs,
          scaleY: n.hs,
          scaleZ: n.hs,
          skew: i.uj,
          skewX: i.uj,
          skewY: i.uj,
          distance: i.px,
          translateX: i.px,
          translateY: i.px,
          translateZ: i.px,
          x: i.px,
          y: i.px,
          z: i.px,
          perspective: i.px,
          transformPerspective: i.px,
          opacity: n.X4,
          originX: i.gQ,
          originY: i.gQ,
          originZ: i.px,
        },
        a = { ...n.ai, transform: Math.round },
        s = {
          ...o,
          ...l,
          zIndex: a,
          size: i.px,
          fillOpacity: n.X4,
          strokeOpacity: n.X4,
          numOctaves: a,
        };
    },
    57975: (e, t, r) => {
      r.d(t, { w: () => n });
      let n = (e) => (t) => t.test(e);
    },
    8994: (e, t, r) => {
      r.d(t, { O: () => u });
      var n = r(86498);
      let i = (e, t) => (t && "number" == typeof e ? t.transform(e) : e);
      var o = r(26395);
      let l = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        a = n.U.length;
      var s = r(56920);
      function u(e, t, r) {
        let { style: u, vars: c, transformOrigin: d } = e,
          f = !1,
          p = !1;
        for (let e in t) {
          let r = t[e];
          if (n.f.has(e)) {
            f = !0;
            continue;
          }
          if ((0, s.j)(e)) {
            c[e] = r;
            continue;
          }
          {
            let t = i(r, o.W[e]);
            e.startsWith("origin") ? ((p = !0), (d[e] = t)) : (u[e] = t);
          }
        }
        if (
          (!t.transform &&
            (f || r
              ? (u.transform = (function (e, t, r) {
                  let s = "",
                    u = !0;
                  for (let c = 0; c < a; c++) {
                    let a = n.U[c],
                      d = e[a];
                    if (void 0 === d) continue;
                    let f = !0;
                    if (
                      !(f =
                        "number" == typeof d
                          ? d === (a.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(d)) ||
                      r
                    ) {
                      let e = i(d, o.W[a]);
                      if (!f) {
                        u = !1;
                        let t = l[a] || a;
                        s += `${t}(${e}) `;
                      }
                      r && (t[a] = e);
                    }
                  }
                  return (
                    (s = s.trim()),
                    r ? (s = r(t, u ? "" : s)) : u && (s = "none"),
                    s
                  );
                })(t, e.transform, r))
              : u.transform && (u.transform = "none")),
          p)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: r = 0 } = d;
          u.transformOrigin = `${e} ${t} ${r}`;
        }
      }
    },
    80956: (e, t, r) => {
      r.d(t, { e: () => n });
      function n(e, { style: t, vars: r }, n, i) {
        for (let o in (Object.assign(e.style, t, i && i.getProjectionStyles(n)),
        r))
          e.style.setProperty(o, r[o]);
      }
    },
    75538: (e, t, r) => {
      r.d(t, { x: () => o });
      var n = r(28620),
        i = r(92910);
      function o(e, t, r) {
        var o;
        let { style: l } = e,
          a = {};
        for (let s in l)
          ((0, i.S)(l[s]) ||
            (t.style && (0, i.S)(t.style[s])) ||
            (0, n.z)(s, e) ||
            (null === (o = null == r ? void 0 : r.getValue(s)) || void 0 === o
              ? void 0
              : o.liveStyle) !== void 0) &&
            (a[s] = l[s]);
        return a;
      }
    },
    86498: (e, t, r) => {
      r.d(t, { U: () => n, f: () => i });
      let n = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        i = new Set(n);
    },
    40175: (e, t, r) => {
      r.d(t, { B: () => s });
      var n = r(8994),
        i = r(62867);
      function o(e, t, r) {
        return "string" == typeof e ? e : i.px.transform(t + r * e);
      }
      let l = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        a = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function s(
        e,
        {
          attrX: t,
          attrY: r,
          attrScale: s,
          originX: u,
          originY: c,
          pathLength: d,
          pathSpacing: f = 1,
          pathOffset: p = 0,
          ...h
        },
        m,
        v
      ) {
        if (((0, n.O)(e, h, v), m)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: g, style: y, dimensions: b } = e;
        g.transform && (b && (y.transform = g.transform), delete g.transform),
          b &&
            (void 0 !== u || void 0 !== c || y.transform) &&
            (y.transformOrigin = (function (e, t, r) {
              let n = o(t, e.x, e.width),
                i = o(r, e.y, e.height);
              return `${n} ${i}`;
            })(b, void 0 !== u ? u : 0.5, void 0 !== c ? c : 0.5)),
          void 0 !== t && (g.x = t),
          void 0 !== r && (g.y = r),
          void 0 !== s && (g.scale = s),
          void 0 !== d &&
            (function (e, t, r = 1, n = 0, o = !0) {
              e.pathLength = 1;
              let s = o ? l : a;
              e[s.offset] = i.px.transform(-n);
              let u = i.px.transform(t),
                c = i.px.transform(r);
              e[s.array] = `${u} ${c}`;
            })(g, d, f, p, !1);
      }
    },
    47713: (e, t, r) => {
      r.d(t, { e: () => n });
      let n = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    75915: (e, t, r) => {
      r.d(t, { n: () => n });
      let n = (e) => "string" == typeof e && "svg" === e.toLowerCase();
    },
    90369: (e, t, r) => {
      r.d(t, { d: () => l });
      var n = r(4454),
        i = r(80956),
        o = r(47713);
      function l(e, t, r, l) {
        for (let r in ((0, i.e)(e, t, void 0, l), t.attrs))
          e.setAttribute(o.e.has(r) ? r : (0, n.I)(r), t.attrs[r]);
      }
    },
    40275: (e, t, r) => {
      r.d(t, { x: () => l });
      var n = r(92910),
        i = r(75538),
        o = r(86498);
      function l(e, t, r) {
        let l = (0, i.x)(e, t, r);
        for (let r in e)
          ((0, n.S)(e[r]) || (0, n.S)(t[r])) &&
            (l[
              -1 !== o.U.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = e[r]);
        return l;
      }
    },
    12471: (e, t, r) => {
      r.d(t, { h: () => d, q: () => c });
      var n = r(91732),
        i = r(58206);
      let o = new Set(),
        l = !1,
        a = !1;
      function s() {
        if (a) {
          let e = Array.from(o).filter((e) => e.needsMeasurement),
            t = new Set(e.map((e) => e.element)),
            r = new Map();
          t.forEach((e) => {
            let t = (0, n.W9)(e);
            t.length && (r.set(e, t), e.render());
          }),
            e.forEach((e) => e.measureInitialState()),
            t.forEach((e) => {
              e.render();
              let t = r.get(e);
              t &&
                t.forEach(([t, r]) => {
                  var n;
                  null === (n = e.getValue(t)) || void 0 === n || n.set(r);
                });
            }),
            e.forEach((e) => e.measureEndState()),
            e.forEach((e) => {
              void 0 !== e.suspendedScrollY &&
                window.scrollTo(0, e.suspendedScrollY);
            });
        }
        (a = !1), (l = !1), o.forEach((e) => e.complete()), o.clear();
      }
      function u() {
        o.forEach((e) => {
          e.readKeyframes(), e.needsMeasurement && (a = !0);
        });
      }
      function c() {
        u(), s();
      }
      class d {
        constructor(e, t, r, n, i, o = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = r),
            (this.motionValue = n),
            (this.element = i),
            (this.isAsync = o);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (o.add(this),
                l || ((l = !0), i.Gt.read(u), i.Gt.resolveKeyframes(s)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: e,
            name: t,
            element: r,
            motionValue: n,
          } = this;
          for (let i = 0; i < e.length; i++)
            if (null === e[i]) {
              if (0 === i) {
                let i = null == n ? void 0 : n.get(),
                  o = e[e.length - 1];
                if (void 0 !== i) e[0] = i;
                else if (r && t) {
                  let n = r.readValue(t, o);
                  null != n && (e[0] = n);
                }
                void 0 === e[0] && (e[0] = o), n && void 0 === i && n.set(e[0]);
              } else e[i] = e[i - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            o.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), o.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    59505: (e, t, r) => {
      r.d(t, { O: () => a, e: () => l });
      var n = r(6152),
        i = r(30389),
        o = r(95444);
      function l(e) {
        return (0, n.N)(e.animate) || o._.some((t) => (0, i.w)(e[t]));
      }
      function a(e) {
        return !!(l(e) || e.variants);
      }
    },
    30389: (e, t, r) => {
      r.d(t, { w: () => n });
      function n(e) {
        return "string" == typeof e || Array.isArray(e);
      }
    },
    51447: (e, t, r) => {
      r.d(t, { K: () => i });
      var n = r(23443);
      function i(e, t, r) {
        let i = e.getProps();
        return (0, n.a)(i, t, void 0 !== r ? r : i.custom, e);
      }
    },
    23443: (e, t, r) => {
      function n(e, t, r, n) {
        if (
          "function" == typeof t ||
          ("string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t)
        ) {
          let [i, o] = (function (e) {
            let t = [{}, {}];
            return (
              null == e ||
                e.values.forEach((e, r) => {
                  (t[0][r] = e.get()), (t[1][r] = e.getVelocity());
                }),
              t
            );
          })(n);
          t = t(void 0 !== r ? r : e.custom, i, o);
        }
        return t;
      }
      r.d(t, { a: () => n });
    },
    86678: (e, t, r) => {
      r.d(t, { U: () => l });
      var n = r(63903),
        i = r(40007),
        o = r(51447);
      function l(e, t) {
        let {
          transitionEnd: r = {},
          transition: l = {},
          ...a
        } = (0, o.K)(e, t) || {};
        for (let t in (a = { ...a, ...r })) {
          let r = (0, n.K)(a[t]);
          e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, (0, i.OQ)(r));
        }
      }
    },
    95444: (e, t, r) => {
      r.d(t, { U: () => n, _: () => i });
      let n = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        i = ["initial", ...n];
    },
    93976: (e, t, r) => {
      r.d(t, { W: () => n });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    97720: (e, t, r) => {
      function n(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function i(e, t) {
        let r = e.indexOf(t);
        r > -1 && e.splice(r, 1);
      }
      r.d(t, { Ai: () => i, Kq: () => n });
    },
    15178: (e, t, r) => {
      r.d(t, { q: () => n });
      let n = (e, t, r) => (r > t ? t : r < e ? e : r);
    },
    6578: (e, t, r) => {
      r.d(t, { G: () => u });
      var n = r(15178),
        i = r(36515),
        o = r(3078),
        l = r(18818),
        a = r(90367),
        s = r(3423);
      function u(e, t, { clamp: r = !0, ease: c, mixer: d } = {}) {
        let f = e.length;
        if (
          ((0, l.V)(
            f === t.length,
            "Both input and output ranges must be the same length"
          ),
          1 === f)
        )
          return () => t[0];
        if (2 === f && e[0] === e[1]) return () => t[1];
        e[0] > e[f - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
        let p = (function (e, t, r) {
            let n = [],
              o = r || s.j,
              l = e.length - 1;
            for (let r = 0; r < l; r++) {
              let l = o(e[r], e[r + 1]);
              if (t) {
                let e = Array.isArray(t) ? t[r] || a.l : t;
                l = (0, i.F)(e, l);
              }
              n.push(l);
            }
            return n;
          })(t, c, d),
          h = p.length,
          m = (t) => {
            let r = 0;
            if (h > 1) for (; r < e.length - 2 && !(t < e[r + 1]); r++);
            let n = (0, o.q)(e[r], e[r + 1], t);
            return p[r](n);
          };
        return r ? (t) => m((0, n.q)(e[0], e[f - 1], t)) : m;
      }
    },
    42504: (e, t, r) => {
      r.d(t, { B: () => n });
      let n = "undefined" != typeof window;
    },
    54994: (e, t, r) => {
      r.d(t, { i: () => n });
      let n = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
    },
    53156: (e, t, r) => {
      r.d(t, { $: () => n });
      let n = (e) => /^0[^.\s]+$/u.test(e);
    },
    57937: (e, t, r) => {
      r.d(t, { p: () => n });
      function n(e) {
        let t;
        return () => (void 0 === t && (t = e()), t);
      }
    },
    3423: (e, t, r) => {
      r.d(t, { j: () => k });
      var n = r(93233),
        i = r(18818);
      function o(e, t, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? e + (t - e) * 6 * r
          : r < 0.5
          ? t
          : r < 2 / 3
          ? e + (t - e) * (2 / 3 - r) * 6
          : e;
      }
      var l = r(68430),
        a = r(97643),
        s = r(89495);
      function u(e, t) {
        return (r) => (r > 0 ? t : e);
      }
      let c = (e, t, r) => {
          let n = e * e,
            i = r * (t * t - n) + n;
          return i < 0 ? 0 : Math.sqrt(i);
        },
        d = [l.u, a.B, s.V],
        f = (e) => d.find((t) => t.test(e));
      function p(e) {
        let t = f(e);
        if (
          ((0, i.$)(
            !!t,
            `'${e}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !t)
        )
          return !1;
        let r = t.parse(e);
        return (
          t === s.V &&
            (r = (function ({ hue: e, saturation: t, lightness: r, alpha: n }) {
              (e /= 360), (r /= 100);
              let i = 0,
                l = 0,
                a = 0;
              if ((t /= 100)) {
                let n = r < 0.5 ? r * (1 + t) : r + t - r * t,
                  s = 2 * r - n;
                (i = o(s, n, e + 1 / 3)),
                  (l = o(s, n, e)),
                  (a = o(s, n, e - 1 / 3));
              } else i = l = a = r;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * l),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(r)),
          r
        );
      }
      let h = (e, t) => {
        let r = p(e),
          i = p(t);
        if (!r || !i) return u(e, t);
        let o = { ...r };
        return (e) => (
          (o.red = c(r.red, i.red, e)),
          (o.green = c(r.green, i.green, e)),
          (o.blue = c(r.blue, i.blue, e)),
          (o.alpha = (0, n.k)(r.alpha, i.alpha, e)),
          a.B.transform(o)
        );
      };
      var m = r(36515),
        v = r(36973),
        g = r(11127),
        y = r(56920);
      let b = new Set(["none", "hidden"]);
      function w(e, t) {
        return (r) => (0, n.k)(e, t, r);
      }
      function x(e) {
        return "number" == typeof e
          ? w
          : "string" == typeof e
          ? (0, y.p)(e)
            ? u
            : v.y.test(e)
            ? h
            : A
          : Array.isArray(e)
          ? E
          : "object" == typeof e
          ? v.y.test(e)
            ? h
            : S
          : u;
      }
      function E(e, t) {
        let r = [...e],
          n = r.length,
          i = e.map((e, r) => x(e)(e, t[r]));
        return (e) => {
          for (let t = 0; t < n; t++) r[t] = i[t](e);
          return r;
        };
      }
      function S(e, t) {
        let r = { ...e, ...t },
          n = {};
        for (let i in r)
          void 0 !== e[i] && void 0 !== t[i] && (n[i] = x(e[i])(e[i], t[i]));
        return (e) => {
          for (let t in n) r[t] = n[t](e);
          return r;
        };
      }
      let A = (e, t) => {
        let r = g.f.createTransformer(t),
          n = (0, g.V)(e),
          o = (0, g.V)(t);
        return n.indexes.var.length === o.indexes.var.length &&
          n.indexes.color.length === o.indexes.color.length &&
          n.indexes.number.length >= o.indexes.number.length
          ? (b.has(e) && !o.values.length) || (b.has(t) && !n.values.length)
            ? (function (e, t) {
                return b.has(e)
                  ? (r) => (r <= 0 ? e : t)
                  : (r) => (r >= 1 ? t : e);
              })(e, t)
            : (0, m.F)(
                E(
                  (function (e, t) {
                    var r;
                    let n = [],
                      i = { color: 0, var: 0, number: 0 };
                    for (let o = 0; o < t.values.length; o++) {
                      let l = t.types[o],
                        a = e.indexes[l][i[l]],
                        s = null !== (r = e.values[a]) && void 0 !== r ? r : 0;
                      (n[o] = s), i[l]++;
                    }
                    return n;
                  })(n, o),
                  o.values
                ),
                r
              )
          : ((0, i.$)(
              !0,
              `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            u(e, t));
      };
      function k(e, t, r) {
        return "number" == typeof e &&
          "number" == typeof t &&
          "number" == typeof r
          ? (0, n.k)(e, t, r)
          : x(e)(e, t);
      }
    },
    93233: (e, t, r) => {
      r.d(t, { k: () => n });
      let n = (e, t, r) => e + (t - e) * r;
    },
    45885: (e, t, r) => {
      r.d(t, { Z: () => i });
      var n = r(44207);
      function i(e) {
        let t = [0];
        return (0, n.f)(t, e.length - 1), t;
      }
    },
    44207: (e, t, r) => {
      r.d(t, { f: () => o });
      var n = r(93233),
        i = r(3078);
      function o(e, t) {
        let r = e[e.length - 1];
        for (let o = 1; o <= t; o++) {
          let l = (0, i.q)(0, t, o);
          e.push((0, n.k)(r, 1, l));
        }
      }
    },
    36515: (e, t, r) => {
      r.d(t, { F: () => i });
      let n = (e, t) => (r) => t(e(r)),
        i = (...e) => e.reduce(n);
    },
    3078: (e, t, r) => {
      r.d(t, { q: () => n });
      let n = (e, t, r) => {
        let n = t - e;
        return 0 === n ? 1 : (r - e) / n;
      };
    },
    63903: (e, t, r) => {
      r.d(t, { B: () => i, K: () => o });
      var n = r(89402);
      let i = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        o = (e) => ((0, n.p)(e) ? e[e.length - 1] || 0 : e);
    },
    27318: (e, t, r) => {
      r.d(t, { v: () => i });
      var n = r(97720);
      class i {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (
            (0, n.Kq)(this.subscriptions, e),
            () => (0, n.Ai)(this.subscriptions, e)
          );
        }
        notify(e, t, r) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](e, t, r);
            else
              for (let i = 0; i < n; i++) {
                let n = this.subscriptions[i];
                n && n(e, t, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    25995: (e, t, r) => {
      r.d(t, { X: () => i, f: () => n });
      let n = (e) => 1e3 * e,
        i = (e) => e / 1e3;
    },
    72321: (e, t, r) => {
      r.d(t, { M: () => i });
      var n = r(12115);
      function i(e) {
        let t = (0, n.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
    },
    17530: (e, t, r) => {
      r.d(t, { E: () => i });
      var n = r(12115);
      let i = r(42504).B ? n.useLayoutEffect : n.useEffect;
    },
    39575: (e, t, r) => {
      r.d(t, { f: () => n });
      function n(e, t) {
        return t ? (1e3 / t) * e : 0;
      }
    },
    40007: (e, t, r) => {
      r.d(t, { OQ: () => c, bt: () => s });
      var n = r(27318),
        i = r(39575),
        o = r(50672),
        l = r(58206);
      let a = (e) => !isNaN(parseFloat(e)),
        s = { current: void 0 };
      class u {
        constructor(e, t = {}) {
          (this.version = "11.15.0"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              let r = o.k.now();
              this.updatedAt !== r && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner);
        }
        setCurrent(e) {
          (this.current = e),
            (this.updatedAt = o.k.now()),
            null === this.canTrackVelocity &&
              void 0 !== e &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(e = this.current) {
          (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new n.v());
          let r = this.events[e].add(t);
          return "change" === e
            ? () => {
                r(),
                  l.Gt.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, r) {
          this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - r);
        }
        jump(e, t = !0) {
          this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return s.current && s.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let e = o.k.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, i.f)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            t
          );
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function c(e, t) {
        return new u(e, t);
      }
    },
    68430: (e, t, r) => {
      r.d(t, { u: () => i });
      var n = r(97643);
      let i = {
        test: (0, r(93203).$)("#"),
        parse: function (e) {
          let t = "",
            r = "",
            n = "",
            i = "";
          return (
            e.length > 5
              ? ((t = e.substring(1, 3)),
                (r = e.substring(3, 5)),
                (n = e.substring(5, 7)),
                (i = e.substring(7, 9)))
              : ((t = e.substring(1, 2)),
                (r = e.substring(2, 3)),
                (n = e.substring(3, 4)),
                (i = e.substring(4, 5)),
                (t += t),
                (r += r),
                (n += n),
                (i += i)),
            {
              red: parseInt(t, 16),
              green: parseInt(r, 16),
              blue: parseInt(n, 16),
              alpha: i ? parseInt(i, 16) / 255 : 1,
            }
          );
        },
        transform: n.B.transform,
      };
    },
    89495: (e, t, r) => {
      r.d(t, { V: () => a });
      var n = r(82510),
        i = r(62867),
        o = r(3022),
        l = r(93203);
      let a = {
        test: (0, l.$)("hsl", "hue"),
        parse: (0, l.q)("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: r, alpha: l = 1 }) =>
          "hsla(" +
          Math.round(e) +
          ", " +
          i.KN.transform((0, o.a)(t)) +
          ", " +
          i.KN.transform((0, o.a)(r)) +
          ", " +
          (0, o.a)(n.X4.transform(l)) +
          ")",
      };
    },
    36973: (e, t, r) => {
      r.d(t, { y: () => l });
      var n = r(68430),
        i = r(89495),
        o = r(97643);
      let l = {
        test: (e) => o.B.test(e) || n.u.test(e) || i.V.test(e),
        parse: (e) =>
          o.B.test(e)
            ? o.B.parse(e)
            : i.V.test(e)
            ? i.V.parse(e)
            : n.u.parse(e),
        transform: (e) =>
          "string" == typeof e
            ? e
            : e.hasOwnProperty("red")
            ? o.B.transform(e)
            : i.V.transform(e),
      };
    },
    97643: (e, t, r) => {
      r.d(t, { B: () => u });
      var n = r(15178),
        i = r(82510),
        o = r(3022),
        l = r(93203);
      let a = (e) => (0, n.q)(0, 255, e),
        s = { ...i.ai, transform: (e) => Math.round(a(e)) },
        u = {
          test: (0, l.$)("rgb", "red"),
          parse: (0, l.q)("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
            "rgba(" +
            s.transform(e) +
            ", " +
            s.transform(t) +
            ", " +
            s.transform(r) +
            ", " +
            (0, o.a)(i.X4.transform(n)) +
            ")",
        };
    },
    93203: (e, t, r) => {
      r.d(t, { $: () => o, q: () => l });
      var n = r(46371);
      let i =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        o = (e, t) => (r) =>
          !!(
            ("string" == typeof r && i.test(r) && r.startsWith(e)) ||
            (t && null != r && Object.prototype.hasOwnProperty.call(r, t))
          ),
        l = (e, t, r) => (i) => {
          if ("string" != typeof i) return i;
          let [o, l, a, s] = i.match(n.S);
          return {
            [e]: parseFloat(o),
            [t]: parseFloat(l),
            [r]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1,
          };
        };
    },
    70520: (e, t, r) => {
      r.d(t, { p: () => s });
      var n = r(11127),
        i = r(46371);
      let o = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function l(e) {
        let [t, r] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [n] = r.match(i.S) || [];
        if (!n) return e;
        let l = r.replace(n, ""),
          a = o.has(t) ? 1 : 0;
        return n !== r && (a *= 100), t + "(" + a + l + ")";
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        s = {
          ...n.f,
          getAnimatableNone: (e) => {
            let t = e.match(a);
            return t ? t.map(l).join(" ") : e;
          },
        };
    },
    11127: (e, t, r) => {
      r.d(t, { V: () => c, f: () => h });
      var n = r(36973);
      let i =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var o = r(46371),
        l = r(3022);
      let a = "number",
        s = "color",
        u =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function c(e) {
        let t = e.toString(),
          r = [],
          i = { color: [], number: [], var: [] },
          o = [],
          l = 0,
          c = t
            .replace(
              u,
              (e) => (
                n.y.test(e)
                  ? (i.color.push(l), o.push(s), r.push(n.y.parse(e)))
                  : e.startsWith("var(")
                  ? (i.var.push(l), o.push("var"), r.push(e))
                  : (i.number.push(l), o.push(a), r.push(parseFloat(e))),
                ++l,
                "${}"
              )
            )
            .split("${}");
        return { values: r, split: c, indexes: i, types: o };
      }
      function d(e) {
        return c(e).values;
      }
      function f(e) {
        let { split: t, types: r } = c(e),
          i = t.length;
        return (e) => {
          let o = "";
          for (let u = 0; u < i; u++)
            if (((o += t[u]), void 0 !== e[u])) {
              let t = r[u];
              t === a
                ? (o += (0, l.a)(e[u]))
                : t === s
                ? (o += n.y.transform(e[u]))
                : (o += e[u]);
            }
          return o;
        };
      }
      let p = (e) => ("number" == typeof e ? 0 : e),
        h = {
          test: function (e) {
            var t, r;
            return (
              isNaN(e) &&
              "string" == typeof e &&
              ((null === (t = e.match(o.S)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (r = e.match(i)) || void 0 === r
                  ? void 0
                  : r.length) || 0) >
                0
            );
          },
          parse: d,
          createTransformer: f,
          getAnimatableNone: function (e) {
            let t = d(e);
            return f(e)(t.map(p));
          },
        };
    },
    82510: (e, t, r) => {
      r.d(t, { X4: () => o, ai: () => i, hs: () => l });
      var n = r(15178);
      let i = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        o = { ...i, transform: (e) => (0, n.q)(0, 1, e) },
        l = { ...i, default: 1 };
    },
    62867: (e, t, r) => {
      r.d(t, {
        KN: () => o,
        gQ: () => u,
        px: () => l,
        uj: () => i,
        vh: () => a,
        vw: () => s,
      });
      let n = (e) => ({
          test: (t) =>
            "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        i = n("deg"),
        o = n("%"),
        l = n("px"),
        a = n("vh"),
        s = n("vw"),
        u = {
          ...o,
          parse: (e) => o.parse(e) / 100,
          transform: (e) => o.transform(100 * e),
        };
    },
    46371: (e, t, r) => {
      r.d(t, { S: () => n });
      let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    3022: (e, t, r) => {
      r.d(t, { a: () => n });
      let n = (e) => Math.round(1e5 * e) / 1e5;
    },
    36807: (e, t, r) => {
      r.d(t, { j: () => l });
      var n = r(98679),
        i = r(17530),
        o = r(58206);
      function l(e, t) {
        let r = (0, n.d)(t()),
          l = () => r.set(t());
        return (
          l(),
          (0, i.E)(() => {
            let t = () => o.Gt.preRender(l, !1, !0),
              r = e.map((e) => e.on("change", t));
            return () => {
              r.forEach((e) => e()), (0, o.WG)(l);
            };
          }),
          r
        );
      }
    },
    98679: (e, t, r) => {
      r.d(t, { d: () => a });
      var n = r(12115),
        i = r(40007),
        o = r(44712),
        l = r(72321);
      function a(e) {
        let t = (0, l.M)(() => (0, i.OQ)(e)),
          { isStatic: r } = (0, n.useContext)(o.Q);
        if (r) {
          let [, r] = (0, n.useState)(e);
          (0, n.useEffect)(() => t.on("change", r), []);
        }
        return t;
      }
    },
    92910: (e, t, r) => {
      r.d(t, { S: () => n });
      let n = (e) => !!(e && e.getVelocity);
    },
    51506: (e, t, r) => {
      r.d(t, { K: () => n });
      function n(e, t, r) {
        var n;
        if (e instanceof Element) return [e];
        if ("string" == typeof e) {
          let i = document;
          t && (i = t.current);
          let o =
            null !== (n = null == r ? void 0 : r[e]) && void 0 !== n
              ? n
              : i.querySelectorAll(e);
          return o ? Array.from(o) : [];
        }
        return Array.from(e);
      }
    },
    18818: (e, t, r) => {
      r.d(t, { $: () => i, V: () => o });
      var n = r(90367);
      let i = n.l,
        o = n.l;
    },
    90367: (e, t, r) => {
      r.d(t, { l: () => n });
      let n = (e) => e;
    },
    69795: (e, t, r) => {
      r.d(t, { zu: () => et });
      let n = (e) => {
          let t = a(e),
            { conflictingClassGroups: r, conflictingClassGroupModifiers: n } =
              e;
          return {
            getClassGroupId: (e) => {
              let r = e.split("-");
              return (
                "" === r[0] && 1 !== r.length && r.shift(), i(r, t) || l(e)
              );
            },
            getConflictingClassGroupIds: (e, t) => {
              let i = r[e] || [];
              return t && n[e] ? [...i, ...n[e]] : i;
            },
          };
        },
        i = (e, t) => {
          if (0 === e.length) return t.classGroupId;
          let r = e[0],
            n = t.nextPart.get(r),
            o = n ? i(e.slice(1), n) : void 0;
          if (o) return o;
          if (0 === t.validators.length) return;
          let l = e.join("-");
          return t.validators.find(({ validator: e }) => e(l))?.classGroupId;
        },
        o = /^\[(.+)\]$/,
        l = (e) => {
          if (o.test(e)) {
            let t = o.exec(e)[1],
              r = t?.substring(0, t.indexOf(":"));
            if (r) return "arbitrary.." + r;
          }
        },
        a = (e) => {
          let { theme: t, prefix: r } = e,
            n = { nextPart: new Map(), validators: [] };
          return (
            d(Object.entries(e.classGroups), r).forEach(([e, r]) => {
              s(r, n, e, t);
            }),
            n
          );
        },
        s = (e, t, r, n) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              ("" === e ? t : u(t, e)).classGroupId = r;
              return;
            }
            if ("function" == typeof e) {
              if (c(e)) {
                s(e(n), t, r, n);
                return;
              }
              t.validators.push({ validator: e, classGroupId: r });
              return;
            }
            Object.entries(e).forEach(([e, i]) => {
              s(i, u(t, e), r, n);
            });
          });
        },
        u = (e, t) => {
          let r = e;
          return (
            t.split("-").forEach((e) => {
              r.nextPart.has(e) ||
                r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (r = r.nextPart.get(e));
            }),
            r
          );
        },
        c = (e) => e.isThemeGetter,
        d = (e, t) =>
          t
            ? e.map(([e, r]) => [
                e,
                r.map((e) =>
                  "string" == typeof e
                    ? t + e
                    : "object" == typeof e
                    ? Object.fromEntries(
                        Object.entries(e).map(([e, r]) => [t + e, r])
                      )
                    : e
                ),
              ])
            : e,
        f = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let t = 0,
            r = new Map(),
            n = new Map(),
            i = (i, o) => {
              r.set(i, o), ++t > e && ((t = 0), (n = r), (r = new Map()));
            };
          return {
            get(e) {
              let t = r.get(e);
              return void 0 !== t
                ? t
                : void 0 !== (t = n.get(e))
                ? (i(e, t), t)
                : void 0;
            },
            set(e, t) {
              r.has(e) ? r.set(e, t) : i(e, t);
            },
          };
        },
        p = (e) => {
          let { separator: t, experimentalParseClassName: r } = e,
            n = 1 === t.length,
            i = t[0],
            o = t.length,
            l = (e) => {
              let r;
              let l = [],
                a = 0,
                s = 0;
              for (let u = 0; u < e.length; u++) {
                let c = e[u];
                if (0 === a) {
                  if (c === i && (n || e.slice(u, u + o) === t)) {
                    l.push(e.slice(s, u)), (s = u + o);
                    continue;
                  }
                  if ("/" === c) {
                    r = u;
                    continue;
                  }
                }
                "[" === c ? a++ : "]" === c && a--;
              }
              let u = 0 === l.length ? e : e.substring(s),
                c = u.startsWith("!"),
                d = c ? u.substring(1) : u;
              return {
                modifiers: l,
                hasImportantModifier: c,
                baseClassName: d,
                maybePostfixModifierPosition: r && r > s ? r - s : void 0,
              };
            };
          return r ? (e) => r({ className: e, parseClassName: l }) : l;
        },
        h = (e) => {
          if (e.length <= 1) return e;
          let t = [],
            r = [];
          return (
            e.forEach((e) => {
              "[" === e[0] ? (t.push(...r.sort(), e), (r = [])) : r.push(e);
            }),
            t.push(...r.sort()),
            t
          );
        },
        m = (e) => ({ cache: f(e.cacheSize), parseClassName: p(e), ...n(e) }),
        v = /\s+/,
        g = (e, t) => {
          let {
              parseClassName: r,
              getClassGroupId: n,
              getConflictingClassGroupIds: i,
            } = t,
            o = [],
            l = e.trim().split(v),
            a = "";
          for (let e = l.length - 1; e >= 0; e -= 1) {
            let t = l[e],
              {
                modifiers: s,
                hasImportantModifier: u,
                baseClassName: c,
                maybePostfixModifierPosition: d,
              } = r(t),
              f = !!d,
              p = n(f ? c.substring(0, d) : c);
            if (!p) {
              if (!f || !(p = n(c))) {
                a = t + (a.length > 0 ? " " + a : a);
                continue;
              }
              f = !1;
            }
            let m = h(s).join(":"),
              v = u ? m + "!" : m,
              g = v + p;
            if (o.includes(g)) continue;
            o.push(g);
            let y = i(p, f);
            for (let e = 0; e < y.length; ++e) {
              let t = y[e];
              o.push(v + t);
            }
            a = t + (a.length > 0 ? " " + a : a);
          }
          return a;
        };
      function y() {
        let e,
          t,
          r = 0,
          n = "";
        for (; r < arguments.length; )
          (e = arguments[r++]) && (t = b(e)) && (n && (n += " "), (n += t));
        return n;
      }
      let b = (e) => {
        let t;
        if ("string" == typeof e) return e;
        let r = "";
        for (let n = 0; n < e.length; n++)
          e[n] && (t = b(e[n])) && (r && (r += " "), (r += t));
        return r;
      };
      function w(e, ...t) {
        let r, n, i;
        let o = function (a) {
          return (
            (n = (r = m(t.reduce((e, t) => t(e), e()))).cache.get),
            (i = r.cache.set),
            (o = l),
            l(a)
          );
        };
        function l(e) {
          let t = n(e);
          if (t) return t;
          let o = g(e, r);
          return i(e, o), o;
        }
        return function () {
          return o(y.apply(null, arguments));
        };
      }
      let x = (e) => {
          let t = (t) => t[e] || [];
          return (t.isThemeGetter = !0), t;
        },
        E = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        S = /^\d+\/\d+$/,
        A = new Set(["px", "full", "screen"]),
        k = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        P =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        C = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        T = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        M =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        O = (e) => j(e) || A.has(e) || S.test(e),
        R = (e) => K(e, "length", H),
        j = (e) => !!e && !Number.isNaN(Number(e)),
        L = (e) => K(e, "number", j),
        F = (e) => !!e && Number.isInteger(Number(e)),
        N = (e) => e.endsWith("%") && j(e.slice(0, -1)),
        D = (e) => E.test(e),
        W = (e) => k.test(e),
        z = new Set(["length", "size", "percentage"]),
        V = (e) => K(e, z, G),
        I = (e) => K(e, "position", G),
        $ = new Set(["image", "url"]),
        B = (e) => K(e, $, Y),
        _ = (e) => K(e, "", X),
        q = () => !0,
        K = (e, t, r) => {
          let n = E.exec(e);
          return (
            !!n &&
            (n[1] ? ("string" == typeof t ? n[1] === t : t.has(n[1])) : r(n[2]))
          );
        },
        H = (e) => P.test(e) && !C.test(e),
        G = () => !1,
        X = (e) => T.test(e),
        Y = (e) => M.test(e);
      Symbol.toStringTag;
      let U = () => {
          let e = x("colors"),
            t = x("spacing"),
            r = x("blur"),
            n = x("brightness"),
            i = x("borderColor"),
            o = x("borderRadius"),
            l = x("borderSpacing"),
            a = x("borderWidth"),
            s = x("contrast"),
            u = x("grayscale"),
            c = x("hueRotate"),
            d = x("invert"),
            f = x("gap"),
            p = x("gradientColorStops"),
            h = x("gradientColorStopPositions"),
            m = x("inset"),
            v = x("margin"),
            g = x("opacity"),
            y = x("padding"),
            b = x("saturate"),
            w = x("scale"),
            E = x("sepia"),
            S = x("skew"),
            A = x("space"),
            k = x("translate"),
            P = () => ["auto", "contain", "none"],
            C = () => ["auto", "hidden", "clip", "visible", "scroll"],
            T = () => ["auto", D, t],
            M = () => [D, t],
            z = () => ["", O, R],
            $ = () => ["auto", j, D],
            K = () => [
              "bottom",
              "center",
              "left",
              "left-bottom",
              "left-top",
              "right",
              "right-bottom",
              "right-top",
              "top",
            ],
            H = () => ["solid", "dashed", "dotted", "double", "none"],
            G = () => [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
            ],
            X = () => [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
            ],
            Y = () => ["", "0", D],
            U = () => [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ],
            Q = () => [j, D];
          return {
            cacheSize: 500,
            separator: ":",
            theme: {
              colors: [q],
              spacing: [O, R],
              blur: ["none", "", W, D],
              brightness: Q(),
              borderColor: [e],
              borderRadius: ["none", "", "full", W, D],
              borderSpacing: M(),
              borderWidth: z(),
              contrast: Q(),
              grayscale: Y(),
              hueRotate: Q(),
              invert: Y(),
              gap: M(),
              gradientColorStops: [e],
              gradientColorStopPositions: [N, R],
              inset: T(),
              margin: T(),
              opacity: Q(),
              padding: M(),
              saturate: Q(),
              scale: Q(),
              sepia: Y(),
              skew: Q(),
              space: M(),
              translate: M(),
            },
            classGroups: {
              aspect: [{ aspect: ["auto", "square", "video", D] }],
              container: ["container"],
              columns: [{ columns: [W] }],
              "break-after": [{ "break-after": U() }],
              "break-before": [{ "break-before": U() }],
              "break-inside": [
                {
                  "break-inside": [
                    "auto",
                    "avoid",
                    "avoid-page",
                    "avoid-column",
                  ],
                },
              ],
              "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
              box: [{ box: ["border", "content"] }],
              display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden",
              ],
              float: [{ float: ["right", "left", "none", "start", "end"] }],
              clear: [
                { clear: ["left", "right", "both", "none", "start", "end"] },
              ],
              isolation: ["isolate", "isolation-auto"],
              "object-fit": [
                { object: ["contain", "cover", "fill", "none", "scale-down"] },
              ],
              "object-position": [{ object: [...K(), D] }],
              overflow: [{ overflow: C() }],
              "overflow-x": [{ "overflow-x": C() }],
              "overflow-y": [{ "overflow-y": C() }],
              overscroll: [{ overscroll: P() }],
              "overscroll-x": [{ "overscroll-x": P() }],
              "overscroll-y": [{ "overscroll-y": P() }],
              position: ["static", "fixed", "absolute", "relative", "sticky"],
              inset: [{ inset: [m] }],
              "inset-x": [{ "inset-x": [m] }],
              "inset-y": [{ "inset-y": [m] }],
              start: [{ start: [m] }],
              end: [{ end: [m] }],
              top: [{ top: [m] }],
              right: [{ right: [m] }],
              bottom: [{ bottom: [m] }],
              left: [{ left: [m] }],
              visibility: ["visible", "invisible", "collapse"],
              z: [{ z: ["auto", F, D] }],
              basis: [{ basis: T() }],
              "flex-direction": [
                { flex: ["row", "row-reverse", "col", "col-reverse"] },
              ],
              "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
              flex: [{ flex: ["1", "auto", "initial", "none", D] }],
              grow: [{ grow: Y() }],
              shrink: [{ shrink: Y() }],
              order: [{ order: ["first", "last", "none", F, D] }],
              "grid-cols": [{ "grid-cols": [q] }],
              "col-start-end": [{ col: ["auto", { span: ["full", F, D] }, D] }],
              "col-start": [{ "col-start": $() }],
              "col-end": [{ "col-end": $() }],
              "grid-rows": [{ "grid-rows": [q] }],
              "row-start-end": [{ row: ["auto", { span: [F, D] }, D] }],
              "row-start": [{ "row-start": $() }],
              "row-end": [{ "row-end": $() }],
              "grid-flow": [
                {
                  "grid-flow": [
                    "row",
                    "col",
                    "dense",
                    "row-dense",
                    "col-dense",
                  ],
                },
              ],
              "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", D] }],
              "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", D] }],
              gap: [{ gap: [f] }],
              "gap-x": [{ "gap-x": [f] }],
              "gap-y": [{ "gap-y": [f] }],
              "justify-content": [{ justify: ["normal", ...X()] }],
              "justify-items": [
                { "justify-items": ["start", "end", "center", "stretch"] },
              ],
              "justify-self": [
                {
                  "justify-self": ["auto", "start", "end", "center", "stretch"],
                },
              ],
              "align-content": [{ content: ["normal", ...X(), "baseline"] }],
              "align-items": [
                { items: ["start", "end", "center", "baseline", "stretch"] },
              ],
              "align-self": [
                {
                  self: [
                    "auto",
                    "start",
                    "end",
                    "center",
                    "stretch",
                    "baseline",
                  ],
                },
              ],
              "place-content": [{ "place-content": [...X(), "baseline"] }],
              "place-items": [
                {
                  "place-items": [
                    "start",
                    "end",
                    "center",
                    "baseline",
                    "stretch",
                  ],
                },
              ],
              "place-self": [
                { "place-self": ["auto", "start", "end", "center", "stretch"] },
              ],
              p: [{ p: [y] }],
              px: [{ px: [y] }],
              py: [{ py: [y] }],
              ps: [{ ps: [y] }],
              pe: [{ pe: [y] }],
              pt: [{ pt: [y] }],
              pr: [{ pr: [y] }],
              pb: [{ pb: [y] }],
              pl: [{ pl: [y] }],
              m: [{ m: [v] }],
              mx: [{ mx: [v] }],
              my: [{ my: [v] }],
              ms: [{ ms: [v] }],
              me: [{ me: [v] }],
              mt: [{ mt: [v] }],
              mr: [{ mr: [v] }],
              mb: [{ mb: [v] }],
              ml: [{ ml: [v] }],
              "space-x": [{ "space-x": [A] }],
              "space-x-reverse": ["space-x-reverse"],
              "space-y": [{ "space-y": [A] }],
              "space-y-reverse": ["space-y-reverse"],
              w: [
                { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", D, t] },
              ],
              "min-w": [{ "min-w": [D, t, "min", "max", "fit"] }],
              "max-w": [
                {
                  "max-w": [
                    D,
                    t,
                    "none",
                    "full",
                    "min",
                    "max",
                    "fit",
                    "prose",
                    { screen: [W] },
                    W,
                  ],
                },
              ],
              h: [
                { h: [D, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              "min-h": [
                { "min-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              "max-h": [
                { "max-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              size: [{ size: [D, t, "auto", "min", "max", "fit"] }],
              "font-size": [{ text: ["base", W, R] }],
              "font-smoothing": ["antialiased", "subpixel-antialiased"],
              "font-style": ["italic", "not-italic"],
              "font-weight": [
                {
                  font: [
                    "thin",
                    "extralight",
                    "light",
                    "normal",
                    "medium",
                    "semibold",
                    "bold",
                    "extrabold",
                    "black",
                    L,
                  ],
                },
              ],
              "font-family": [{ font: [q] }],
              "fvn-normal": ["normal-nums"],
              "fvn-ordinal": ["ordinal"],
              "fvn-slashed-zero": ["slashed-zero"],
              "fvn-figure": ["lining-nums", "oldstyle-nums"],
              "fvn-spacing": ["proportional-nums", "tabular-nums"],
              "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
              tracking: [
                {
                  tracking: [
                    "tighter",
                    "tight",
                    "normal",
                    "wide",
                    "wider",
                    "widest",
                    D,
                  ],
                },
              ],
              "line-clamp": [{ "line-clamp": ["none", j, L] }],
              leading: [
                {
                  leading: [
                    "none",
                    "tight",
                    "snug",
                    "normal",
                    "relaxed",
                    "loose",
                    O,
                    D,
                  ],
                },
              ],
              "list-image": [{ "list-image": ["none", D] }],
              "list-style-type": [{ list: ["none", "disc", "decimal", D] }],
              "list-style-position": [{ list: ["inside", "outside"] }],
              "placeholder-color": [{ placeholder: [e] }],
              "placeholder-opacity": [{ "placeholder-opacity": [g] }],
              "text-alignment": [
                {
                  text: ["left", "center", "right", "justify", "start", "end"],
                },
              ],
              "text-color": [{ text: [e] }],
              "text-opacity": [{ "text-opacity": [g] }],
              "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline",
              ],
              "text-decoration-style": [{ decoration: [...H(), "wavy"] }],
              "text-decoration-thickness": [
                { decoration: ["auto", "from-font", O, R] },
              ],
              "underline-offset": [{ "underline-offset": ["auto", O, D] }],
              "text-decoration-color": [{ decoration: [e] }],
              "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case",
              ],
              "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
              "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
              indent: [{ indent: M() }],
              "vertical-align": [
                {
                  align: [
                    "baseline",
                    "top",
                    "middle",
                    "bottom",
                    "text-top",
                    "text-bottom",
                    "sub",
                    "super",
                    D,
                  ],
                },
              ],
              whitespace: [
                {
                  whitespace: [
                    "normal",
                    "nowrap",
                    "pre",
                    "pre-line",
                    "pre-wrap",
                    "break-spaces",
                  ],
                },
              ],
              break: [{ break: ["normal", "words", "all", "keep"] }],
              hyphens: [{ hyphens: ["none", "manual", "auto"] }],
              content: [{ content: ["none", D] }],
              "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
              "bg-clip": [
                { "bg-clip": ["border", "padding", "content", "text"] },
              ],
              "bg-opacity": [{ "bg-opacity": [g] }],
              "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
              "bg-position": [{ bg: [...K(), I] }],
              "bg-repeat": [
                {
                  bg: [
                    "no-repeat",
                    { repeat: ["", "x", "y", "round", "space"] },
                  ],
                },
              ],
              "bg-size": [{ bg: ["auto", "cover", "contain", V] }],
              "bg-image": [
                {
                  bg: [
                    "none",
                    {
                      "gradient-to": [
                        "t",
                        "tr",
                        "r",
                        "br",
                        "b",
                        "bl",
                        "l",
                        "tl",
                      ],
                    },
                    B,
                  ],
                },
              ],
              "bg-color": [{ bg: [e] }],
              "gradient-from-pos": [{ from: [h] }],
              "gradient-via-pos": [{ via: [h] }],
              "gradient-to-pos": [{ to: [h] }],
              "gradient-from": [{ from: [p] }],
              "gradient-via": [{ via: [p] }],
              "gradient-to": [{ to: [p] }],
              rounded: [{ rounded: [o] }],
              "rounded-s": [{ "rounded-s": [o] }],
              "rounded-e": [{ "rounded-e": [o] }],
              "rounded-t": [{ "rounded-t": [o] }],
              "rounded-r": [{ "rounded-r": [o] }],
              "rounded-b": [{ "rounded-b": [o] }],
              "rounded-l": [{ "rounded-l": [o] }],
              "rounded-ss": [{ "rounded-ss": [o] }],
              "rounded-se": [{ "rounded-se": [o] }],
              "rounded-ee": [{ "rounded-ee": [o] }],
              "rounded-es": [{ "rounded-es": [o] }],
              "rounded-tl": [{ "rounded-tl": [o] }],
              "rounded-tr": [{ "rounded-tr": [o] }],
              "rounded-br": [{ "rounded-br": [o] }],
              "rounded-bl": [{ "rounded-bl": [o] }],
              "border-w": [{ border: [a] }],
              "border-w-x": [{ "border-x": [a] }],
              "border-w-y": [{ "border-y": [a] }],
              "border-w-s": [{ "border-s": [a] }],
              "border-w-e": [{ "border-e": [a] }],
              "border-w-t": [{ "border-t": [a] }],
              "border-w-r": [{ "border-r": [a] }],
              "border-w-b": [{ "border-b": [a] }],
              "border-w-l": [{ "border-l": [a] }],
              "border-opacity": [{ "border-opacity": [g] }],
              "border-style": [{ border: [...H(), "hidden"] }],
              "divide-x": [{ "divide-x": [a] }],
              "divide-x-reverse": ["divide-x-reverse"],
              "divide-y": [{ "divide-y": [a] }],
              "divide-y-reverse": ["divide-y-reverse"],
              "divide-opacity": [{ "divide-opacity": [g] }],
              "divide-style": [{ divide: H() }],
              "border-color": [{ border: [i] }],
              "border-color-x": [{ "border-x": [i] }],
              "border-color-y": [{ "border-y": [i] }],
              "border-color-s": [{ "border-s": [i] }],
              "border-color-e": [{ "border-e": [i] }],
              "border-color-t": [{ "border-t": [i] }],
              "border-color-r": [{ "border-r": [i] }],
              "border-color-b": [{ "border-b": [i] }],
              "border-color-l": [{ "border-l": [i] }],
              "divide-color": [{ divide: [i] }],
              "outline-style": [{ outline: ["", ...H()] }],
              "outline-offset": [{ "outline-offset": [O, D] }],
              "outline-w": [{ outline: [O, R] }],
              "outline-color": [{ outline: [e] }],
              "ring-w": [{ ring: z() }],
              "ring-w-inset": ["ring-inset"],
              "ring-color": [{ ring: [e] }],
              "ring-opacity": [{ "ring-opacity": [g] }],
              "ring-offset-w": [{ "ring-offset": [O, R] }],
              "ring-offset-color": [{ "ring-offset": [e] }],
              shadow: [{ shadow: ["", "inner", "none", W, _] }],
              "shadow-color": [{ shadow: [q] }],
              opacity: [{ opacity: [g] }],
              "mix-blend": [
                { "mix-blend": [...G(), "plus-lighter", "plus-darker"] },
              ],
              "bg-blend": [{ "bg-blend": G() }],
              filter: [{ filter: ["", "none"] }],
              blur: [{ blur: [r] }],
              brightness: [{ brightness: [n] }],
              contrast: [{ contrast: [s] }],
              "drop-shadow": [{ "drop-shadow": ["", "none", W, D] }],
              grayscale: [{ grayscale: [u] }],
              "hue-rotate": [{ "hue-rotate": [c] }],
              invert: [{ invert: [d] }],
              saturate: [{ saturate: [b] }],
              sepia: [{ sepia: [E] }],
              "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
              "backdrop-blur": [{ "backdrop-blur": [r] }],
              "backdrop-brightness": [{ "backdrop-brightness": [n] }],
              "backdrop-contrast": [{ "backdrop-contrast": [s] }],
              "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
              "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
              "backdrop-invert": [{ "backdrop-invert": [d] }],
              "backdrop-opacity": [{ "backdrop-opacity": [g] }],
              "backdrop-saturate": [{ "backdrop-saturate": [b] }],
              "backdrop-sepia": [{ "backdrop-sepia": [E] }],
              "border-collapse": [{ border: ["collapse", "separate"] }],
              "border-spacing": [{ "border-spacing": [l] }],
              "border-spacing-x": [{ "border-spacing-x": [l] }],
              "border-spacing-y": [{ "border-spacing-y": [l] }],
              "table-layout": [{ table: ["auto", "fixed"] }],
              caption: [{ caption: ["top", "bottom"] }],
              transition: [
                {
                  transition: [
                    "none",
                    "all",
                    "",
                    "colors",
                    "opacity",
                    "shadow",
                    "transform",
                    D,
                  ],
                },
              ],
              duration: [{ duration: Q() }],
              ease: [{ ease: ["linear", "in", "out", "in-out", D] }],
              delay: [{ delay: Q() }],
              animate: [
                { animate: ["none", "spin", "ping", "pulse", "bounce", D] },
              ],
              transform: [{ transform: ["", "gpu", "none"] }],
              scale: [{ scale: [w] }],
              "scale-x": [{ "scale-x": [w] }],
              "scale-y": [{ "scale-y": [w] }],
              rotate: [{ rotate: [F, D] }],
              "translate-x": [{ "translate-x": [k] }],
              "translate-y": [{ "translate-y": [k] }],
              "skew-x": [{ "skew-x": [S] }],
              "skew-y": [{ "skew-y": [S] }],
              "transform-origin": [
                {
                  origin: [
                    "center",
                    "top",
                    "top-right",
                    "right",
                    "bottom-right",
                    "bottom",
                    "bottom-left",
                    "left",
                    "top-left",
                    D,
                  ],
                },
              ],
              accent: [{ accent: ["auto", e] }],
              appearance: [{ appearance: ["none", "auto"] }],
              cursor: [
                {
                  cursor: [
                    "auto",
                    "default",
                    "pointer",
                    "wait",
                    "text",
                    "move",
                    "help",
                    "not-allowed",
                    "none",
                    "context-menu",
                    "progress",
                    "cell",
                    "crosshair",
                    "vertical-text",
                    "alias",
                    "copy",
                    "no-drop",
                    "grab",
                    "grabbing",
                    "all-scroll",
                    "col-resize",
                    "row-resize",
                    "n-resize",
                    "e-resize",
                    "s-resize",
                    "w-resize",
                    "ne-resize",
                    "nw-resize",
                    "se-resize",
                    "sw-resize",
                    "ew-resize",
                    "ns-resize",
                    "nesw-resize",
                    "nwse-resize",
                    "zoom-in",
                    "zoom-out",
                    D,
                  ],
                },
              ],
              "caret-color": [{ caret: [e] }],
              "pointer-events": [{ "pointer-events": ["none", "auto"] }],
              resize: [{ resize: ["none", "y", "x", ""] }],
              "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
              "scroll-m": [{ "scroll-m": M() }],
              "scroll-mx": [{ "scroll-mx": M() }],
              "scroll-my": [{ "scroll-my": M() }],
              "scroll-ms": [{ "scroll-ms": M() }],
              "scroll-me": [{ "scroll-me": M() }],
              "scroll-mt": [{ "scroll-mt": M() }],
              "scroll-mr": [{ "scroll-mr": M() }],
              "scroll-mb": [{ "scroll-mb": M() }],
              "scroll-ml": [{ "scroll-ml": M() }],
              "scroll-p": [{ "scroll-p": M() }],
              "scroll-px": [{ "scroll-px": M() }],
              "scroll-py": [{ "scroll-py": M() }],
              "scroll-ps": [{ "scroll-ps": M() }],
              "scroll-pe": [{ "scroll-pe": M() }],
              "scroll-pt": [{ "scroll-pt": M() }],
              "scroll-pr": [{ "scroll-pr": M() }],
              "scroll-pb": [{ "scroll-pb": M() }],
              "scroll-pl": [{ "scroll-pl": M() }],
              "snap-align": [
                { snap: ["start", "end", "center", "align-none"] },
              ],
              "snap-stop": [{ snap: ["normal", "always"] }],
              "snap-type": [{ snap: ["none", "x", "y", "both"] }],
              "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
              touch: [{ touch: ["auto", "none", "manipulation"] }],
              "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
              "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
              "touch-pz": ["touch-pinch-zoom"],
              select: [{ select: ["none", "text", "all", "auto"] }],
              "will-change": [
                {
                  "will-change": ["auto", "scroll", "contents", "transform", D],
                },
              ],
              fill: [{ fill: [e, "none"] }],
              "stroke-w": [{ stroke: [O, R, L] }],
              stroke: [{ stroke: [e, "none"] }],
              sr: ["sr-only", "not-sr-only"],
              "forced-color-adjust": [
                { "forced-color-adjust": ["auto", "none"] },
              ],
            },
            conflictingClassGroups: {
              overflow: ["overflow-x", "overflow-y"],
              overscroll: ["overscroll-x", "overscroll-y"],
              inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left",
              ],
              "inset-x": ["right", "left"],
              "inset-y": ["top", "bottom"],
              flex: ["basis", "grow", "shrink"],
              gap: ["gap-x", "gap-y"],
              p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
              px: ["pr", "pl"],
              py: ["pt", "pb"],
              m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
              mx: ["mr", "ml"],
              my: ["mt", "mb"],
              size: ["w", "h"],
              "font-size": ["leading"],
              "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction",
              ],
              "fvn-ordinal": ["fvn-normal"],
              "fvn-slashed-zero": ["fvn-normal"],
              "fvn-figure": ["fvn-normal"],
              "fvn-spacing": ["fvn-normal"],
              "fvn-fraction": ["fvn-normal"],
              "line-clamp": ["display", "overflow"],
              rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl",
              ],
              "rounded-s": ["rounded-ss", "rounded-es"],
              "rounded-e": ["rounded-se", "rounded-ee"],
              "rounded-t": ["rounded-tl", "rounded-tr"],
              "rounded-r": ["rounded-tr", "rounded-br"],
              "rounded-b": ["rounded-br", "rounded-bl"],
              "rounded-l": ["rounded-tl", "rounded-bl"],
              "border-spacing": ["border-spacing-x", "border-spacing-y"],
              "border-w": [
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l",
              ],
              "border-w-x": ["border-w-r", "border-w-l"],
              "border-w-y": ["border-w-t", "border-w-b"],
              "border-color": [
                "border-color-s",
                "border-color-e",
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l",
              ],
              "border-color-x": ["border-color-r", "border-color-l"],
              "border-color-y": ["border-color-t", "border-color-b"],
              "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml",
              ],
              "scroll-mx": ["scroll-mr", "scroll-ml"],
              "scroll-my": ["scroll-mt", "scroll-mb"],
              "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl",
              ],
              "scroll-px": ["scroll-pr", "scroll-pl"],
              "scroll-py": ["scroll-pt", "scroll-pb"],
              touch: ["touch-x", "touch-y", "touch-pz"],
              "touch-x": ["touch"],
              "touch-y": ["touch"],
              "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
          };
        },
        Q = (
          e,
          {
            cacheSize: t,
            prefix: r,
            separator: n,
            experimentalParseClassName: i,
            extend: o = {},
            override: l = {},
          }
        ) => {
          for (let o in (Z(e, "cacheSize", t),
          Z(e, "prefix", r),
          Z(e, "separator", n),
          Z(e, "experimentalParseClassName", i),
          l))
            J(e[o], l[o]);
          for (let t in o) ee(e[t], o[t]);
          return e;
        },
        Z = (e, t, r) => {
          void 0 !== r && (e[t] = r);
        },
        J = (e, t) => {
          if (t) for (let r in t) Z(e, r, t[r]);
        },
        ee = (e, t) => {
          if (t)
            for (let r in t) {
              let n = t[r];
              void 0 !== n && (e[r] = (e[r] || []).concat(n));
            }
        },
        et = (e, ...t) =>
          "function" == typeof e ? w(U, e, ...t) : w(() => Q(U(), e), ...t);
    },
    6476: (e, t, r) => {
      r.d(t, { Cl: () => n, Tt: () => i, fX: () => o });
      var n = function () {
        return (n =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function i(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, n = Object.getOwnPropertySymbols(e);
            i < n.length;
            i++
          )
            0 > t.indexOf(n[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        return r;
      }
      function o(e, t, r) {
        if (r || 2 == arguments.length)
          for (var n, i = 0, o = t.length; i < o; i++)
            (!n && i in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      Object.create,
        Object.create,
        "function" == typeof SuppressedError && SuppressedError;
    },
  },
]);
//# sourceMappingURL=123-99b76eb5321725e0.js.map
