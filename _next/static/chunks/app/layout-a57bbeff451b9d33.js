(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    51957: (e, t, n) => {
      Promise.resolve().then(n.t.bind(n, 53704, 23)),
        Promise.resolve().then(n.t.bind(n, 11126, 23)),
        Promise.resolve().then(n.t.bind(n, 42296, 23));
    },
    68571: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    53704: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return g;
          },
          handleClientScriptLoad: function () {
            return _;
          },
          initScriptLoader: function () {
            return b;
          },
        });
      let r = n(60306),
        a = n(29955),
        l = n(95155),
        i = r._(n(47650)),
        o = a._(n(12115)),
        s = n(81147),
        u = n(22815),
        d = n(68571),
        c = new Map(),
        f = new Set(),
        p = (e) => {
          if (i.default.preinit) {
            e.forEach((e) => {
              i.default.preinit(e, { as: "style" });
            });
            return;
          }
          if ("undefined" != typeof window) {
            let t = document.head;
            e.forEach((e) => {
              let n = document.createElement("link");
              (n.type = "text/css"),
                (n.rel = "stylesheet"),
                (n.href = e),
                t.appendChild(n);
            });
          }
        },
        y = (e) => {
          let {
              src: t,
              id: n,
              onLoad: r = () => {},
              onReady: a = null,
              dangerouslySetInnerHTML: l,
              children: i = "",
              strategy: o = "afterInteractive",
              onError: s,
              stylesheets: d,
            } = e,
            y = n || t;
          if (y && f.has(y)) return;
          if (c.has(t)) {
            f.add(y), c.get(t).then(r, s);
            return;
          }
          let _ = () => {
              a && a(), f.add(y);
            },
            b = document.createElement("script"),
            h = new Promise((e, t) => {
              b.addEventListener("load", function (t) {
                e(), r && r.call(this, t), _();
              }),
                b.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              s && s(e);
            });
          l
            ? ((b.innerHTML = l.__html || ""), _())
            : i
            ? ((b.textContent =
                "string" == typeof i ? i : Array.isArray(i) ? i.join("") : ""),
              _())
            : t && ((b.src = t), c.set(t, h)),
            (0, u.setAttributesFromProps)(b, e),
            "worker" === o && b.setAttribute("type", "text/partytown"),
            b.setAttribute("data-nscript", o),
            d && p(d),
            document.body.appendChild(b);
        };
      function _(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, d.requestIdleCallback)(() => y(e));
            })
          : y(e);
      }
      function b(e) {
        e.forEach(_),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            f.add(t);
          });
      }
      function h(e) {
        let {
            id: t,
            src: n = "",
            onLoad: r = () => {},
            onReady: a = null,
            strategy: u = "afterInteractive",
            onError: c,
            stylesheets: p,
            ..._
          } = e,
          {
            updateScripts: b,
            scripts: h,
            getIsSsr: g,
            appDir: m,
            nonce: v,
          } = (0, o.useContext)(s.HeadManagerContext),
          O = (0, o.useRef)(!1);
        (0, o.useEffect)(() => {
          let e = t || n;
          O.current || (a && e && f.has(e) && a(), (O.current = !0));
        }, [a, t, n]);
        let I = (0, o.useRef)(!1);
        if (
          ((0, o.useEffect)(() => {
            !I.current &&
              ("afterInteractive" === u
                ? y(e)
                : "lazyOnload" === u &&
                  ("complete" === document.readyState
                    ? (0, d.requestIdleCallback)(() => y(e))
                    : window.addEventListener("load", () => {
                        (0, d.requestIdleCallback)(() => y(e));
                      })),
              (I.current = !0));
          }, [e, u]),
          ("beforeInteractive" === u || "worker" === u) &&
            (b
              ? ((h[u] = (h[u] || []).concat([
                  { id: t, src: n, onLoad: r, onReady: a, onError: c, ..._ },
                ])),
                b(h))
              : g && g()
              ? f.add(t || n)
              : g && !g() && y(e)),
          m)
        ) {
          if (
            (p &&
              p.forEach((e) => {
                i.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === u)
          )
            return n
              ? (i.default.preload(
                  n,
                  _.integrity
                    ? {
                        as: "script",
                        integrity: _.integrity,
                        nonce: v,
                        crossOrigin: _.crossOrigin,
                      }
                    : { as: "script", nonce: v, crossOrigin: _.crossOrigin }
                ),
                (0, l.jsx)("script", {
                  nonce: v,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([n, { ..._, id: t }]) +
                      ")",
                  },
                }))
              : (_.dangerouslySetInnerHTML &&
                  ((_.children = _.dangerouslySetInnerHTML.__html),
                  delete _.dangerouslySetInnerHTML),
                (0, l.jsx)("script", {
                  nonce: v,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ..._, id: t }]) +
                      ")",
                  },
                }));
          "afterInteractive" === u &&
            n &&
            i.default.preload(
              n,
              _.integrity
                ? {
                    as: "script",
                    integrity: _.integrity,
                    nonce: v,
                    crossOrigin: _.crossOrigin,
                  }
                : { as: "script", nonce: v, crossOrigin: _.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(h, "__nextScript", { value: !0 });
      let g = h;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    22815: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "setAttributesFromProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
          noModule: "noModule",
        },
        r = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ];
      function a(e) {
        return ["async", "defer", "noModule"].includes(e);
      }
      function l(e, t) {
        for (let [l, i] of Object.entries(t)) {
          if (!t.hasOwnProperty(l) || r.includes(l) || void 0 === i) continue;
          let o = n[l] || l.toLowerCase();
          "SCRIPT" === e.tagName && a(o)
            ? (e[o] = !!i)
            : e.setAttribute(o, String(i)),
            (!1 === i ||
              ("SCRIPT" === e.tagName && a(o) && (!i || "false" === i))) &&
              (e.setAttribute(o, ""), e.removeAttribute(o));
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    11126: () => {},
    42296: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Sans Fallback'",
          fontStyle: "normal",
        },
        className: "__className_4a8659",
        variable: "__variable_4a8659",
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [861, 441, 517, 358], () => t(51957)), (_N_E = e.O());
  },
]);
//# sourceMappingURL=layout-a57bbeff451b9d33.js.map
