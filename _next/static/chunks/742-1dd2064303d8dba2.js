"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [742],
  {
    48173: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return m;
          },
        });
      let n = r(60306),
        o = r(95155),
        i = n._(r(12115)),
        u = r(70180),
        l = r(71394),
        a = r(64116),
        s = r(4445),
        f = r(45353),
        c = r(12170),
        d = r(49544);
      function p(e, t, r) {
        "undefined" != typeof window &&
          (async () => e.prefetch(t, r))().catch((e) => {});
      }
      function g(e) {
        return "string" == typeof e ? e : (0, u.formatUrl)(e);
      }
      r(42363);
      let m = i.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: u,
          as: m,
          children: h,
          prefetch: y = null,
          passHref: b,
          replace: v,
          shallow: _,
          scroll: w,
          onClick: j,
          onMouseEnter: P,
          onTouchStart: C,
          legacyBehavior: x = !1,
          ...O
        } = e;
        (r = h),
          x &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, o.jsx)("a", { children: r }));
        let S = i.default.useContext(l.AppRouterContext),
          E = !1 !== y,
          M = null === y ? s.PrefetchKind.AUTO : s.PrefetchKind.FULL,
          { href: I, as: k } = i.default.useMemo(() => {
            let e = g(u);
            return { href: e, as: m ? g(m) : e };
          }, [u, m]),
          R = i.default.useRef(I),
          A = i.default.useRef(k);
        x && (n = i.default.Children.only(r));
        let z = x ? n && "object" == typeof n && n.ref : t,
          [T, N, U] = (0, a.useIntersection)({ rootMargin: "200px" }),
          D = i.default.useCallback(
            (e) => {
              (A.current !== k || R.current !== I) &&
                (U(), (A.current = k), (R.current = I)),
                T(e);
            },
            [k, I, U, T]
          ),
          F = (0, f.useMergedRef)(D, z);
        i.default.useEffect(() => {
          S && N && E && p(S, I, { kind: M });
        }, [k, I, N, E, S, M]);
        let L = {
          ref: F,
          onClick(e) {
            x || "function" != typeof j || j(e),
              x &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              S &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, u, l) {
                  let { nodeName: a } = e.currentTarget;
                  ("A" === a.toUpperCase() &&
                    (function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e)) ||
                    (e.preventDefault(),
                    i.default.startTransition(() => {
                      let e = null == l || l;
                      "beforePopState" in t
                        ? t[o ? "replace" : "push"](r, n, {
                            shallow: u,
                            scroll: e,
                          })
                        : t[o ? "replace" : "push"](n || r, { scroll: e });
                    }));
                })(e, S, I, k, v, _, w);
          },
          onMouseEnter(e) {
            x || "function" != typeof P || P(e),
              x &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              S && E && p(S, I, { kind: M });
          },
          onTouchStart: function (e) {
            x || "function" != typeof C || C(e),
              x &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              S && E && p(S, I, { kind: M });
          },
        };
        return (
          (0, c.isAbsoluteUrl)(k)
            ? (L.href = k)
            : (x && !b && ("a" !== n.type || "href" in n.props)) ||
              (L.href = (0, d.addBasePath)(k)),
          x
            ? i.default.cloneElement(n, L)
            : (0, o.jsx)("a", { ...O, ...L, children: r })
        );
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    87970: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return _;
          },
        });
      let n = r(60306),
        o = r(29955),
        i = r(95155),
        u = o._(r(12115)),
        l = n._(r(47650)),
        a = n._(r(36107)),
        s = r(40666),
        f = r(41159),
        c = r(83621);
      r(42363);
      let d = r(63576),
        p = n._(r(65514)),
        g = r(45353),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function h(e, t, r, n, o, i, u) {
        let l = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== l &&
          ((e["data-loaded-src"] = l),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let n = !1,
                    o = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(e);
              }
            }));
      }
      function y(e) {
        return u.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let b = (0, u.forwardRef)((e, t) => {
        let {
            src: r,
            srcSet: n,
            sizes: o,
            height: l,
            width: a,
            decoding: s,
            className: f,
            style: c,
            fetchPriority: d,
            placeholder: p,
            loading: m,
            unoptimized: b,
            fill: v,
            onLoadRef: _,
            onLoadingCompleteRef: w,
            setBlurComplete: j,
            setShowAltText: P,
            sizesInput: C,
            onLoad: x,
            onError: O,
            ...S
          } = e,
          E = (0, u.useCallback)(
            (e) => {
              e && (O && (e.src = e.src), e.complete && h(e, p, _, w, j, b, C));
            },
            [r, p, _, w, j, O, b, C]
          ),
          M = (0, g.useMergedRef)(t, E);
        return (0, i.jsx)("img", {
          ...S,
          ...y(d),
          loading: m,
          width: a,
          height: l,
          decoding: s,
          "data-nimg": v ? "fill" : "1",
          className: f,
          style: c,
          sizes: o,
          srcSet: n,
          src: r,
          ref: M,
          onLoad: (e) => {
            h(e.currentTarget, p, _, w, j, b, C);
          },
          onError: (e) => {
            P(!0), "empty" !== p && j(!0), O && O(e);
          },
        });
      });
      function v(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...y(r.fetchPriority),
          };
        return t && l.default.preload
          ? (l.default.preload(r.src, n), null)
          : (0, i.jsx)(a.default, {
              children: (0, i.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let _ = (0, u.forwardRef)((e, t) => {
        let r = (0, u.useContext)(d.RouterContext),
          n = (0, u.useContext)(c.ImageConfigContext),
          o = (0, u.useMemo)(() => {
            let e = m || n || f.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [n]),
          { onLoad: l, onLoadingComplete: a } = e,
          g = (0, u.useRef)(l);
        (0, u.useEffect)(() => {
          g.current = l;
        }, [l]);
        let h = (0, u.useRef)(a);
        (0, u.useEffect)(() => {
          h.current = a;
        }, [a]);
        let [y, _] = (0, u.useState)(!1),
          [w, j] = (0, u.useState)(!1),
          { props: P, meta: C } = (0, s.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: y,
            showAltText: w,
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(b, {
              ...P,
              unoptimized: C.unoptimized,
              placeholder: C.placeholder,
              fill: C.fill,
              onLoadRef: g,
              onLoadingCompleteRef: h,
              setBlurComplete: _,
              setShowAltText: j,
              sizesInput: e.sizes,
              ref: t,
            }),
            C.priority
              ? (0, i.jsx)(v, { isAppRouter: !r, imgAttributes: P })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    68571: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return r;
          },
        });
      let r =
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
        n =
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
    64116: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(12115),
        o = r(68571),
        i = "function" == typeof IntersectionObserver,
        u = new Map(),
        l = [];
      function a(e) {
        let { rootRef: t, rootMargin: r, disabled: a } = e,
          s = a || !i,
          [f, c] = (0, n.useState)(!1),
          d = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            d.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (i) {
              if (s || f) return;
              let e = d.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: i,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = l.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = u.get(n))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: o,
                      }),
                      l.push(r),
                      u.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    i.set(e, t),
                    o.observe(e),
                    function () {
                      if ((i.delete(e), o.unobserve(e), 0 === i.size)) {
                        o.disconnect(), u.delete(n);
                        let e = l.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && l.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && c(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!f) {
              let e = (0, o.requestIdleCallback)(() => c(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [s, r, t, f, d.current]),
          [
            p,
            f,
            (0, n.useCallback)(() => {
              c(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    45353: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(12115);
      function o(e, t) {
        let r = (0, n.useRef)(() => {}),
          o = (0, n.useRef)(() => {});
        return (0, n.useMemo)(
          () =>
            e && t
              ? (n) => {
                  null === n
                    ? (r.current(), o.current())
                    : ((r.current = i(e, n)), (o.current = i(t, n)));
                }
              : e || t,
          [e, t]
        );
      }
      function i(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return "function" == typeof r ? r : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    53003: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(60306)._(r(12115)).default.createContext({});
    },
    675: (e, t) => {
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: n = !1,
        } = void 0 === e ? {} : e;
        return t || (r && n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    40666: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        r(42363);
      let n = r(35859),
        o = r(41159);
      function i(e) {
        return void 0 !== e.default;
      }
      function u(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function l(e, t) {
        var r;
        let l,
          a,
          s,
          {
            src: f,
            sizes: c,
            unoptimized: d = !1,
            priority: p = !1,
            loading: g,
            className: m,
            quality: h,
            width: y,
            height: b,
            fill: v = !1,
            style: _,
            overrideSrc: w,
            onLoad: j,
            onLoadingComplete: P,
            placeholder: C = "empty",
            blurDataURL: x,
            fetchPriority: O,
            decoding: S = "async",
            layout: E,
            objectFit: M,
            objectPosition: I,
            lazyBoundary: k,
            lazyRoot: R,
            ...A
          } = e,
          { imgConf: z, showAltText: T, blurComplete: N, defaultLoader: U } = t,
          D = z || o.imageConfigDefault;
        if ("allSizes" in D) l = D;
        else {
          let e = [...D.deviceSizes, ...D.imageSizes].sort((e, t) => e - t),
            t = D.deviceSizes.sort((e, t) => e - t);
          l = { ...D, allSizes: e, deviceSizes: t };
        }
        if (void 0 === U)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let F = A.loader || U;
        delete A.loader, delete A.srcSet;
        let L = "__next_img_default" in F;
        if (L) {
          if ("custom" === l.loader)
            throw Error(
              'Image with src "' +
                f +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = F;
          F = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (E) {
          "fill" === E && (v = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[E];
          e && (_ = { ..._, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[E];
          t && !c && (c = t);
        }
        let B = "",
          W = u(y),
          q = u(b);
        if ((r = f) && "object" == typeof r && (i(r) || void 0 !== r.src)) {
          let e = i(f) ? f.default : f;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((a = e.blurWidth),
            (s = e.blurHeight),
            (x = x || e.blurDataURL),
            (B = e.src),
            !v)
          ) {
            if (W || q) {
              if (W && !q) {
                let t = W / e.width;
                q = Math.round(e.height * t);
              } else if (!W && q) {
                let t = q / e.height;
                W = Math.round(e.width * t);
              }
            } else (W = e.width), (q = e.height);
          }
        }
        let G = !p && ("lazy" === g || void 0 === g);
        (!(f = "string" == typeof f ? f : B) ||
          f.startsWith("data:") ||
          f.startsWith("blob:")) &&
          ((d = !0), (G = !1)),
          l.unoptimized && (d = !0),
          L &&
            !l.dangerouslyAllowSVG &&
            f.split("?", 1)[0].endsWith(".svg") &&
            (d = !0);
        let K = u(h),
          V = Object.assign(
            v
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: M,
                  objectPosition: I,
                }
              : {},
            T ? {} : { color: "transparent" },
            _
          ),
          H =
            N || "empty" === C
              ? null
              : "blur" === C
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: W,
                  heightInt: q,
                  blurWidth: a,
                  blurHeight: s,
                  blurDataURL: x || "",
                  objectFit: V.objectFit,
                }) +
                '")'
              : 'url("' + C + '")',
          J = H
            ? {
                backgroundSize: V.objectFit || "cover",
                backgroundPosition: V.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: H,
              }
            : {},
          Q = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: o,
              quality: i,
              sizes: u,
              loader: l,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: a, kind: s } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: o } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); n) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: o.filter((t) => t >= n[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => o.find((t) => t >= e) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, o, u),
              f = a.length - 1;
            return {
              sizes: u || "w" !== s ? u : "100vw",
              srcSet: a
                .map(
                  (e, n) =>
                    l({ config: t, src: r, quality: i, width: e }) +
                    " " +
                    ("w" === s ? e : n + 1) +
                    s
                )
                .join(", "),
              src: l({ config: t, src: r, quality: i, width: a[f] }),
            };
          })({
            config: l,
            src: f,
            unoptimized: d,
            width: W,
            quality: K,
            sizes: c,
            loader: F,
          });
        return {
          props: {
            ...A,
            loading: G ? "lazy" : g,
            fetchPriority: O,
            width: W,
            height: q,
            decoding: S,
            className: m,
            style: { ...V, ...J },
            sizes: Q.sizes,
            srcSet: Q.srcSet,
            src: w || Q.src,
          },
          meta: { unoptimized: d, priority: p, placeholder: C, fill: v },
        };
      }
    },
    36107: (e, t, r) => {
      var n = r(2818);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return h;
          },
          defaultHead: function () {
            return d;
          },
        });
      let o = r(60306),
        i = r(29955),
        u = r(95155),
        l = i._(r(12115)),
        a = o._(r(31172)),
        s = r(53003),
        f = r(81147),
        c = r(675);
      function d(e) {
        void 0 === e && (e = !1);
        let t = [(0, u.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          e ||
            t.push(
              (0, u.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          t
        );
      }
      function p(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === l.default.Fragment
          ? e.concat(
              l.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      r(42363);
      let g = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(p, [])
          .reverse()
          .concat(d(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return (o) => {
                let i = !0,
                  u = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  u = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (i = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (i = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = g.length; e < t; e++) {
                      let t = g[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) r.has(t) ? (i = !1) : r.add(t);
                        else {
                          let e = o.props[t],
                            r = n[t] || new Set();
                          ("name" !== t || !u) && r.has(e)
                            ? (i = !1)
                            : (r.add(e), (n[t] = r));
                        }
                      }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let o = e.key || t;
            if (
              n.env.__NEXT_OPTIMIZE_FONTS &&
              !r &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                l.default.cloneElement(e, t)
              );
            }
            return l.default.cloneElement(e, { key: o });
          });
      }
      let h = function (e) {
        let { children: t } = e,
          r = (0, l.useContext)(s.AmpStateContext),
          n = (0, l.useContext)(f.HeadManagerContext);
        return (0, u.jsx)(a.default, {
          reduceComponentsToState: m,
          headManager: n,
          inAmpMode: (0, c.isInAmpMode)(r),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    35859: (e, t) => {
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: o,
            blurDataURL: i,
            objectFit: u,
          } = e,
          l = n ? 40 * n : t,
          a = o ? 40 * o : r,
          s = l && a ? "viewBox='0 0 " + l + " " + a + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          s +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (s
            ? "none"
            : "contain" === u
            ? "xMidYMid"
            : "cover" === u
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          i +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    83621: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(60306)._(r(12115)),
        o = r(41159),
        i = n.default.createContext(o.imageConfigDefault);
    },
    41159: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    65514: (e, t) => {
      function r(e) {
        let { config: t, src: r, width: n, quality: o } = e;
        return r;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    63576: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(60306)._(r(12115)).default.createContext(null);
    },
    70180: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return i;
          },
          formatWithValidation: function () {
            return l;
          },
          urlObjectKeys: function () {
            return u;
          },
        });
      let n = r(29955)._(r(54156)),
        o = /https?|ftp|gopher|file/;
      function i(e) {
        let { auth: t, hostname: r } = e,
          i = e.protocol || "",
          u = e.pathname || "",
          l = e.hash || "",
          a = e.query || "",
          s = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (s = t + e.host)
            : r &&
              ((s = t + (~r.indexOf(":") ? "[" + r + "]" : r)),
              e.port && (s += ":" + e.port)),
          a &&
            "object" == typeof a &&
            (a = String(n.urlQueryToSearchParams(a)));
        let f = e.search || (a && "?" + a) || "";
        return (
          i && !i.endsWith(":") && (i += ":"),
          e.slashes || ((!i || o.test(i)) && !1 !== s)
            ? ((s = "//" + (s || "")), u && "/" !== u[0] && (u = "/" + u))
            : s || (s = ""),
          l && "#" !== l[0] && (l = "#" + l),
          f && "?" !== f[0] && (f = "?" + f),
          "" +
            i +
            s +
            (u = u.replace(/[?#]/g, encodeURIComponent)) +
            (f = f.replace("#", "%23")) +
            l
        );
      }
      let u = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function l(e) {
        return i(e);
      }
    },
    54156: (e, t) => {
      function r(e) {
        let t = {};
        return (
          e.forEach((e, r) => {
            void 0 === t[r]
              ? (t[r] = e)
              : Array.isArray(t[r])
              ? t[r].push(e)
              : (t[r] = [t[r], e]);
          }),
          t
        );
      }
      function n(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [r, o] = e;
            Array.isArray(o)
              ? o.forEach((e) => t.append(r, n(e)))
              : t.set(r, n(o));
          }),
          t
        );
      }
      function i(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return (
          r.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, r) => e.append(r, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          assign: function () {
            return i;
          },
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
        });
    },
    31172: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(12115),
        o = "undefined" == typeof window,
        i = o ? () => {} : n.useLayoutEffect,
        u = o ? () => {} : n.useEffect;
      function l(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function l() {
          if (t && t.mountedInstances) {
            let o = n.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(r(o, e));
          }
        }
        if (o) {
          var a;
          null == t || null == (a = t.mountedInstances) || a.add(e.children),
            l();
        }
        return (
          i(() => {
            var r;
            return (
              null == t ||
                null == (r = t.mountedInstances) ||
                r.add(e.children),
              () => {
                var r;
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.delete(e.children);
              }
            );
          }),
          i(
            () => (
              t && (t._pendingUpdate = l),
              () => {
                t && (t._pendingUpdate = l);
              }
            )
          ),
          u(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    12170: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DecodeError: function () {
            return g;
          },
          MiddlewareNotFoundError: function () {
            return b;
          },
          MissingStaticPage: function () {
            return y;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return h;
          },
          SP: function () {
            return d;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          getDisplayName: function () {
            return a;
          },
          getLocationOrigin: function () {
            return u;
          },
          getURL: function () {
            return l;
          },
          isAbsoluteUrl: function () {
            return i;
          },
          isResSent: function () {
            return s;
          },
          loadGetInitialProps: function () {
            return c;
          },
          normalizeRepeatedSlashes: function () {
            return f;
          },
          stringifyError: function () {
            return v;
          },
        });
      let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(e) {
        let t,
          r = !1;
        return function () {
          for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
          return r || ((r = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        i = (e) => o.test(e);
      function u() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + "//" + t + (r ? ":" + r : "");
      }
      function l() {
        let { href: e } = window.location,
          t = u();
        return e.substring(t.length);
      }
      function a(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function s(e) {
        return e.finished || e.headersSent;
      }
      function f(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function c(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await c(t.Component, t.ctx) }
            : {};
        let n = await e.getInitialProps(t);
        if (r && s(r)) return n;
        if (!n)
          throw Error(
            '"' +
              a(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.'
          );
        return n;
      }
      let d = "undefined" != typeof performance,
        p =
          d &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class g extends Error {}
      class m extends Error {}
      class h extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class y extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class b extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function v(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
  },
]);
//# sourceMappingURL=742-1dd2064303d8dba2.js.map
