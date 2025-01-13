"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [29],
  {
    87152: (e, t, n) => {
      let r;
      n.d(t, { Ay: () => V });
      var i,
        o = n(12115);
      let l = (e, t, n) => {
          let r = document.createElement(e),
            [i, o] = Array.isArray(t) ? [void 0, t] : [t, n];
          return (
            i && Object.assign(r, i),
            null == o || o.forEach((e) => r.appendChild(e)),
            r
          );
        },
        a = (e, t) => {
          var n;
          return "left" === t
            ? e.offsetLeft
            : ((null ==
              (n =
                e.offsetParent instanceof HTMLElement ? e.offsetParent : null)
                ? void 0
                : n.offsetWidth) ?? 0) -
                e.offsetWidth -
                e.offsetLeft;
        },
        s = (e) => e.offsetWidth > 0 && e.offsetHeight > 0,
        u = (String.raw, String.raw),
        c =
          "u" > typeof CSS &&
          CSS.supports &&
          CSS.supports("animation-timing-function", "linear(1,2)"),
        d =
          "u" > typeof CSS &&
          CSS.supports &&
          CSS.supports("line-height", "mod(1,1)"),
        f =
          "u" > typeof matchMedia
            ? matchMedia("(prefers-reduced-motion: reduce)")
            : null,
        p = "--_number-flow-d-opacity",
        h = "--_number-flow-d-width",
        m = "--_number-flow-dx",
        g = "--_number-flow-d",
        v = (() => {
          try {
            return (
              CSS.registerProperty({
                name: p,
                syntax: "<number>",
                inherits: !1,
                initialValue: "0",
              }),
              CSS.registerProperty({
                name: m,
                syntax: "<length>",
                inherits: !0,
                initialValue: "0px",
              }),
              CSS.registerProperty({
                name: h,
                syntax: "<number>",
                inherits: !1,
                initialValue: "0",
              }),
              CSS.registerProperty({
                name: g,
                syntax: "<number>",
                inherits: !0,
                initialValue: "0",
              }),
              !0
            );
          } catch {
            return !1;
          }
        })(),
        y = "var(--number-flow-char-height, 1em)",
        w = "var(--number-flow-mask-height, 0.25em)",
        b = `calc(${w} / 2)`,
        x = "var(--number-flow-mask-width, 0.5em)",
        S = `calc(${x} / var(--scale-x))`,
        E = "#000 0, transparent 71%",
        C = u`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${y} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${h}) / var(--width));transform:translateX(var(${m})) scaleX(var(--scale-x));margin:0 calc(-1 * ${x});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${S},#000 calc(100% - ${S}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${w},#000 calc(100% - ${w}),transparent 100% ),radial-gradient(at bottom right,${E}),radial-gradient(at bottom left,${E}),radial-gradient(at top left,${E}),radial-gradient(at top right,${E});-webkit-mask-size:100% calc(100% - ${w} * 2),calc(100% - ${S} * 2) 100%,${S} ${w},${S} ${w},${S} ${w},${S} ${w};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${b} ${x};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${m})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section__exiting,.symbol__exiting{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${g})}.digit__num,.number .section::after{padding:${b} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num:not(.is-current){position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num:not(.is-current){display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol__exiting{left:0}.section--justify-right .symbol__exiting{right:0}.animate-presence{opacity:calc(1 + var(${p}))}`,
        _ = HTMLElement,
        k =
          (u`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:${y} !important}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${b} 0}.symbol{white-space:pre}`,
          (e) =>
            `<span class="${
              "integer" === e.type || "fraction" === e.type ? "digit" : "symbol"
            }" part="${
              "integer" === e.type || "fraction" === e.type
                ? `digit ${e.type}-digit`
                : e.type
            }">${e.value}</span>`),
        L = (e, t) => (null == e ? t : null == t ? e : Math.max(e, t)),
        R = d && c && v;
      class T extends _ {
        constructor() {
          super(), (this.created = !1), (this.manual = !1);
          let { animated: e, ...t } = this.constructor.defaultProps;
          (this._animated = this.computedAnimated = e), Object.assign(this, t);
        }
        get animated() {
          return this._animated;
        }
        set animated(e) {
          var t;
          this.animated !== e &&
            ((this._animated = e),
            null == (t = this.shadowRoot) ||
              t.getAnimations().forEach((e) => e.finish()));
        }
        set data(e) {
          if (null == e) return;
          let { pre: t, integer: n, fraction: i, post: o, value: l } = e;
          if (this.created) {
            let r = this._data;
            if (
              ((this._data = e),
              (this.computedTrend =
                "function" == typeof this.trend
                  ? this.trend(r.value, l)
                  : this.trend),
              (this.startingPos = void 0),
              this.computedTrend && this.continuous)
            ) {
              let t = r.integer
                  .concat(r.fraction)
                  .filter((e) => "integer" === e.type || "fraction" === e.type),
                n = e.integer
                  .concat(e.fraction)
                  .filter((e) => "integer" === e.type || "fraction" === e.type),
                i = t.find(
                  (e) => !n.find((t) => t.pos === e.pos && t.value === e.value)
                ),
                o = n.find(
                  (e) => !t.find((t) => e.pos === t.pos && e.value === t.value)
                );
              this.startingPos = L(
                null == i ? void 0 : i.pos,
                null == o ? void 0 : o.pos
              );
            }
            (this.computedAnimated =
              R &&
              this._animated &&
              (!this.respectMotionPreference || !(null != f && f.matches)) &&
              s(this)),
              this.manual || this.willUpdate(),
              this._pre.update(t),
              this._num.update({ integer: n, fraction: i }),
              this._post.update(o),
              this.manual || this.didUpdate();
          } else {
            if (
              ((this._data = e),
              this.attachShadow({ mode: "open" }),
              "u" > typeof CSSStyleSheet && this.shadowRoot.adoptedStyleSheets)
            )
              r || (r = new CSSStyleSheet()).replaceSync(C),
                (this.shadowRoot.adoptedStyleSheets = [r]);
            else {
              let e = document.createElement("style");
              (e.textContent = C), this.shadowRoot.appendChild(e);
            }
            (this._pre = new P(this, t, { justify: "right", part: "left" })),
              this.shadowRoot.appendChild(this._pre.el),
              (this._num = new j(this, n, i)),
              this.shadowRoot.appendChild(this._num.el),
              (this._post = new P(this, o, { justify: "left", part: "right" })),
              this.shadowRoot.appendChild(this._post.el);
          }
          this.created = !0;
        }
        willUpdate() {
          this._pre.willUpdate(),
            this._num.willUpdate(),
            this._post.willUpdate();
        }
        didUpdate() {
          if (!this.computedAnimated) return;
          this._abortAnimationsFinish
            ? this._abortAnimationsFinish.abort()
            : this.dispatchEvent(new Event("animationsstart")),
            this._pre.didUpdate(),
            this._num.didUpdate(),
            this._post.didUpdate();
          let e = new AbortController();
          Promise.all(
            this.shadowRoot.getAnimations().map((e) => e.finished)
          ).then(() => {
            e.signal.aborted ||
              (this.dispatchEvent(new Event("animationsfinish")),
              (this._abortAnimationsFinish = void 0));
          }),
            (this._abortAnimationsFinish = e);
        }
      }
      T.defaultProps = {
        transformTiming: {
          duration: 900,
          easing:
            "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)",
        },
        spinTiming: void 0,
        opacityTiming: { duration: 450, easing: "ease-out" },
        animated: !0,
        trend: (e, t) => Math.sign(t - e),
        continuous: !1,
        respectMotionPreference: !0,
        digits: void 0,
      };
      class j {
        constructor(e, t, n, { className: r, ...i } = {}) {
          (this.flow = e),
            (this._integer = new M(e, t, {
              justify: "right",
              part: "integer",
            })),
            (this._fraction = new M(e, n, {
              justify: "left",
              part: "fraction",
            })),
            (this._inner = l("span", { className: "number__inner" }, [
              this._integer.el,
              this._fraction.el,
            ])),
            (this.el = l(
              "span",
              { ...i, part: "number", className: `number ${r ?? ""}` },
              [this._inner]
            ));
        }
        willUpdate() {
          (this._prevWidth = this.el.offsetWidth),
            (this._prevLeft = this.el.getBoundingClientRect().left),
            this._integer.willUpdate(),
            this._fraction.willUpdate();
        }
        update({ integer: e, fraction: t }) {
          this._integer.update(e), this._fraction.update(t);
        }
        didUpdate() {
          let e = this.el.getBoundingClientRect();
          this._integer.didUpdate(), this._fraction.didUpdate();
          let t = this._prevLeft - e.left,
            n = this.el.offsetWidth,
            r = this._prevWidth - n;
          this.el.style.setProperty("--width", String(n)),
            this.el.animate(
              { [m]: [`${t}px`, "0px"], [h]: [r, 0] },
              { ...this.flow.transformTiming, composite: "accumulate" }
            );
        }
      }
      class N {
        constructor(e, t, { justify: n, className: r, ...i }, o) {
          (this.flow = e),
            (this.children = new Map()),
            (this.onCharRemove = (e) => () => {
              this.children.delete(e);
            }),
            (this.justify = n);
          let a = t.map((e) => this.addChar(e).el);
          this.el = l(
            "span",
            { ...i, className: `section section--justify-${n} ${r ?? ""}` },
            o ? o(a) : a
          );
        }
        addChar(e, { startDigitsAtZero: t = !1, ...n } = {}) {
          let r =
            "integer" === e.type || "fraction" === e.type
              ? new O(this, e.type, t ? 0 : e.value, e.pos, {
                  ...n,
                  onRemove: this.onCharRemove(e.key),
                })
              : new D(this, e.type, e.value, {
                  ...n,
                  onRemove: this.onCharRemove(e.key),
                });
          return this.children.set(e.key, r), r;
        }
        unpop(e) {
          e.el.classList.remove("section__exiting"),
            (e.el.style.top = ""),
            (e.el.style[this.justify] = "");
        }
        pop(e) {
          e.forEach((e) => {
            (e.el.style.top = `${e.el.offsetTop}px`),
              (e.el.style[this.justify] = `${a(e.el, this.justify)}px`);
          }),
            e.forEach((e) => {
              e.el.classList.add("section__exiting"), (e.present = !1);
            });
        }
        addNewAndUpdateExisting(e) {
          let t = new Map(),
            n = new Map(),
            r = "left" === this.justify,
            i = r ? "prepend" : "append";
          if (
            ((function (e, t, { reverse: n = !1 } = {}) {
              let r = e.length;
              for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++)
                t(e[i], i);
            })(
              e,
              (e) => {
                let r;
                this.children.has(e.key)
                  ? ((r = this.children.get(e.key)),
                    n.set(e, r),
                    this.unpop(r),
                    (r.present = !0))
                  : ((r = this.addChar(e, {
                      startDigitsAtZero: !0,
                      animateIn: !0,
                    })),
                    t.set(e, r)),
                  this.el[i](r.el);
              },
              { reverse: r }
            ),
            this.flow.computedAnimated)
          ) {
            let e = this.el.getBoundingClientRect();
            t.forEach((t) => {
              t.willUpdate(e);
            });
          }
          t.forEach((e, t) => {
            e.update(t.value);
          }),
            n.forEach((e, t) => {
              e.update(t.value);
            });
        }
        willUpdate() {
          let e = this.el.getBoundingClientRect();
          (this._prevOffset = e[this.justify]),
            this.children.forEach((t) => t.willUpdate(e));
        }
        didUpdate() {
          let e = this.el.getBoundingClientRect();
          this.children.forEach((t) => t.didUpdate(e));
          let t = e[this.justify],
            n = this._prevOffset - t;
          n &&
            this.children.size &&
            this.el.animate(
              { transform: [`translateX(${n}px)`, "none"] },
              { ...this.flow.transformTiming, composite: "accumulate" }
            );
        }
      }
      class M extends N {
        update(e) {
          let t = new Map();
          this.children.forEach((n, r) => {
            e.find((e) => e.key === r) || t.set(r, n), this.unpop(n);
          }),
            this.addNewAndUpdateExisting(e),
            t.forEach((e) => {
              e instanceof O && e.update(0);
            }),
            this.pop(t);
        }
      }
      class P extends N {
        update(e) {
          let t = new Map();
          this.children.forEach((n, r) => {
            e.find((e) => e.key === r) || t.set(r, n);
          }),
            this.pop(t),
            this.addNewAndUpdateExisting(e);
        }
      }
      class A {
        constructor(e, t, { onRemove: n, animateIn: r = !1 } = {}) {
          (this.flow = e),
            (this.el = t),
            (this._present = !0),
            (this._remove = () => {
              var e;
              this.el.remove(), null == (e = this._onRemove) || e.call(this);
            }),
            this.el.classList.add("animate-presence"),
            this.flow.computedAnimated &&
              r &&
              this.el.animate(
                { [p]: [-0.9999, 0] },
                { ...this.flow.opacityTiming, composite: "accumulate" }
              ),
            (this._onRemove = n);
        }
        get present() {
          return this._present;
        }
        set present(e) {
          if (this._present !== e) {
            if (((this._present = e), !this.flow.computedAnimated)) {
              e || this._remove();
              return;
            }
            this.el.style.setProperty(
              "--_number-flow-d-opacity",
              e ? "0" : "-.999"
            ),
              this.el.animate(
                { [p]: e ? [-0.9999, 0] : [0.999, 0] },
                { ...this.flow.opacityTiming, composite: "accumulate" }
              ),
              e
                ? this.flow.removeEventListener(
                    "animationsfinish",
                    this._remove
                  )
                : this.flow.addEventListener("animationsfinish", this._remove, {
                    once: !0,
                  });
          }
        }
      }
      class I extends A {
        constructor(e, t, n, r) {
          super(e.flow, n, r),
            (this.section = e),
            (this.value = t),
            (this.el = n);
        }
      }
      class O extends I {
        constructor(e, t, n, r, i) {
          var o, a;
          let s =
              ((null == (a = null == (o = e.flow.digits) ? void 0 : o[r])
                ? void 0
                : a.max) ?? 9) + 1,
            u = Array.from({ length: s }).map((e, t) => {
              let r = l(
                "span",
                { className: `digit__num${t === n ? " is-current" : ""}` },
                [document.createTextNode(String(t))]
              );
              return r.style.setProperty("--n", String(t)), r;
            }),
            c = l("span", { part: `digit ${t}-digit`, className: "digit" }, u);
          c.style.setProperty("--current", String(n)),
            c.style.setProperty("--length", String(s)),
            super(e, n, c, i),
            (this.pos = r),
            (this._onAnimationsFinish = () => {
              this.el.classList.remove("is-spinning");
            }),
            (this._numbers = u),
            (this._length = s);
        }
        willUpdate(e) {
          let t = this.el.getBoundingClientRect();
          this._prevValue = this.value;
          let n = t[this.section.justify] - e[this.section.justify],
            r = t.width / 2;
          this._prevCenter = "left" === this.section.justify ? n + r : n - r;
        }
        update(e) {
          var t, n;
          null == (t = this._numbers[this.value]) ||
            t.classList.remove("is-current"),
            this.el.style.setProperty("--current", String(e)),
            null == (n = this._numbers[e]) || n.classList.add("is-current"),
            (this.value = e);
        }
        didUpdate(e) {
          let t = this.el.getBoundingClientRect(),
            n = t[this.section.justify] - e[this.section.justify],
            r = t.width / 2,
            i = "left" === this.section.justify ? n + r : n - r,
            o = this._prevCenter - i;
          o &&
            this.el.animate(
              { transform: [`translateX(${o}px)`, "none"] },
              { ...this.flow.transformTiming, composite: "accumulate" }
            );
          let l = this.diff;
          l &&
            (this.el.classList.add("is-spinning"),
            this.el.animate(
              { [g]: [-l, 0] },
              {
                ...(this.flow.spinTiming ?? this.flow.transformTiming),
                composite: "accumulate",
              }
            ),
            this.flow.addEventListener(
              "animationsfinish",
              this._onAnimationsFinish,
              { once: !0 }
            ));
        }
        get diff() {
          let e = this.flow.computedTrend,
            t = this.value - this._prevValue;
          return !t &&
            null != this.flow.startingPos &&
            this.flow.startingPos >= this.pos
            ? this._length * e
            : (e || (e = Math.sign(t)),
              e < 0 && this.value > this._prevValue
                ? this.value - this._length - this._prevValue
                : e > 0 && this.value < this._prevValue
                ? this._length - this._prevValue + this.value
                : t);
        }
      }
      class D extends I {
        constructor(e, t, n, r) {
          let i = l("span", { className: "symbol__value", textContent: n });
          super(
            e,
            n,
            l("span", { part: `symbol ${t}`, className: "symbol" }, [i]),
            r
          ),
            (this.type = t),
            (this._children = new Map()),
            (this._onChildRemove = (e) => () => {
              this._children.delete(e);
            }),
            this._children.set(
              n,
              new A(this.flow, i, { onRemove: this._onChildRemove(n) })
            );
        }
        willUpdate(e) {
          if ("decimal" === this.type) return;
          let t = this.el.getBoundingClientRect();
          this._prevOffset = t[this.section.justify] - e[this.section.justify];
        }
        update(e) {
          if (this.value !== e) {
            let t = this._children.get(this.value);
            if (
              ((t.present = !1),
              t.el.classList.add("symbol__exiting"),
              this._children.has(e))
            ) {
              let t = this._children.get(e);
              (t.present = !0), t.el.classList.remove("symbol__exiting");
            } else {
              let t = l("span", { className: "symbol__value", textContent: e });
              this.el.appendChild(t),
                this._children.set(
                  e,
                  new A(this.flow, t, {
                    animateIn: !0,
                    onRemove: this._onChildRemove(e),
                  })
                );
            }
          }
          this.value = e;
        }
        didUpdate(e) {
          if ("decimal" === this.type) return;
          let t =
              this.el.getBoundingClientRect()[this.section.justify] -
              e[this.section.justify],
            n = this._prevOffset - t;
          n &&
            this.el.animate(
              { transform: [`translateX(${n}px)`, "none"] },
              { ...this.flow.transformTiming, composite: "accumulate" }
            );
        }
      }
      var $ =
          parseInt(
            null === (i = o.version.match(/^(\d+)\./)) || void 0 === i
              ? void 0
              : i[1]
          ) >= 19,
        B = class extends T {
          attributeChangedCallback(e, t, n) {
            this[e] = JSON.parse(n);
          }
        };
      (B.observedAttributes = $ ? [] : ["data", "digits"]),
        ((e, t) => {
          customElements.get(e) === t || customElements.define(e, t);
        })("number-flow-react", B);
      var U = {},
        H = $ ? (e) => e : JSON.stringify;
      function F(e) {
        let {
          transformTiming: t,
          spinTiming: n,
          opacityTiming: r,
          animated: i,
          respectMotionPreference: o,
          trend: l,
          continuous: a,
          ...s
        } = e;
        return [
          {
            transformTiming: t,
            spinTiming: n,
            opacityTiming: r,
            animated: i,
            respectMotionPreference: o,
            trend: l,
            continuous: a,
          },
          s,
        ];
      }
      var W = class extends o.Component {
          updateProperties(e) {
            if (!this.el) return;
            this.el.manual = !this.props.isolate;
            let [t] = F(this.props);
            Object.entries(t).forEach((e) => {
              let [t, n] = e;
              this.el[t] = null != n ? n : B.defaultProps[t];
            }),
              (null == e ? void 0 : e.onAnimationsStart) &&
                this.el.removeEventListener(
                  "animationsstart",
                  e.onAnimationsStart
                ),
              this.props.onAnimationsStart &&
                this.el.addEventListener(
                  "animationsstart",
                  this.props.onAnimationsStart
                ),
              (null == e ? void 0 : e.onAnimationsFinish) &&
                this.el.removeEventListener(
                  "animationsfinish",
                  e.onAnimationsFinish
                ),
              this.props.onAnimationsFinish &&
                this.el.addEventListener(
                  "animationsfinish",
                  this.props.onAnimationsFinish
                );
          }
          componentDidMount() {
            this.updateProperties(),
              $ &&
                this.el &&
                ((this.el.digits = this.props.digits),
                (this.el.data = this.props.data));
          }
          getSnapshotBeforeUpdate(e) {
            if ((this.updateProperties(e), e.data !== this.props.data)) {
              if (this.props.group)
                return (
                  this.props.group.willUpdate(),
                  () => {
                    var e;
                    return null === (e = this.props.group) || void 0 === e
                      ? void 0
                      : e.didUpdate();
                  }
                );
              if (!this.props.isolate) {
                var t;
                return (
                  null === (t = this.el) || void 0 === t || t.willUpdate(),
                  () => {
                    var e;
                    return null === (e = this.el) || void 0 === e
                      ? void 0
                      : e.didUpdate();
                  }
                );
              }
            }
            return null;
          }
          componentDidUpdate(e, t, n) {
            null == n || n();
          }
          handleRef(e) {
            this.props.innerRef && (this.props.innerRef.current = e),
              (this.el = e);
          }
          render() {
            let [
              e,
              {
                innerRef: t,
                className: n,
                data: r,
                willChange: i,
                isolate: l,
                group: a,
                digits: s,
                onAnimationsStart: u,
                onAnimationsFinish: c,
                ...d
              },
            ] = F(this.props);
            return o.createElement("number-flow-react", {
              ref: this.handleRef,
              "data-will-change": i ? "" : void 0,
              class: n,
              "aria-label": r.valueAsString,
              ...d,
              role: "img",
              dangerouslySetInnerHTML: { __html: "" },
              suppressHydrationWarning: !0,
              digits: H(s),
              data: H(r),
            });
          }
          constructor(e) {
            super(e), (this.handleRef = this.handleRef.bind(this));
          }
        },
        V = o.forwardRef(function (e, t) {
          let {
            value: n,
            locales: r,
            format: i,
            prefix: l,
            suffix: a,
            ...s
          } = e;
          o.useImperativeHandle(t, () => u.current, []);
          let u = o.useRef(),
            c = o.useContext(z);
          null == c || c.useRegister(u);
          let d = o.useMemo(() => (r ? JSON.stringify(r) : ""), [r]),
            f = o.useMemo(() => (i ? JSON.stringify(i) : ""), [i]),
            p = o.useMemo(() => {
              var e, t;
              return (function (e, t, n, r) {
                let i = t.formatToParts(e);
                n && i.unshift({ type: "prefix", value: n }),
                  r && i.push({ type: "suffix", value: r });
                let o = [],
                  l = [],
                  a = [],
                  s = [],
                  u = {},
                  c = (e) => `${e}:${(u[e] = (u[e] ?? -1) + 1)}`,
                  d = "",
                  f = !1,
                  p = !1;
                for (let e of i) {
                  d += e.value;
                  let t =
                    "minusSign" === e.type || "plusSign" === e.type
                      ? "sign"
                      : e.type;
                  "integer" === t
                    ? ((f = !0),
                      l.push(
                        ...e.value
                          .split("")
                          .map((e) => ({ type: t, value: parseInt(e) }))
                      ))
                    : "group" === t
                    ? l.push({ type: t, value: e.value })
                    : "decimal" === t
                    ? ((p = !0), a.push({ type: t, value: e.value, key: c(t) }))
                    : "fraction" === t
                    ? a.push(
                        ...e.value
                          .split("")
                          .map((e) => ({
                            type: t,
                            value: parseInt(e),
                            key: c(t),
                            pos: -1 - u[t],
                          }))
                      )
                    : (f || p ? s : o).push({
                        type: t,
                        value: e.value,
                        key: c(t),
                      });
                }
                let h = [];
                for (let e = l.length - 1; e >= 0; e--) {
                  let t = l[e];
                  h.unshift(
                    "integer" === t.type
                      ? { ...t, key: c(t.type), pos: u[t.type] }
                      : { ...t, key: c(t.type) }
                  );
                }
                return {
                  pre: o,
                  integer: h,
                  fraction: a,
                  post: s,
                  valueAsString: d,
                  value: "string" == typeof e ? parseFloat(e) : e,
                };
              })(
                n,
                null !== (t = U[(e = "".concat(d, ":").concat(f))]) &&
                  void 0 !== t
                  ? t
                  : (U[e] = new Intl.NumberFormat(r, i)),
                l,
                a
              );
            }, [n, d, f, l, a]);
          return o.createElement(W, { ...s, group: c, data: p, innerRef: u });
        }),
        z = o.createContext(void 0);
    },
    53871: (e, t, n) => {
      n.d(t, {
        UC: () => ez,
        q7: () => eX,
        ZL: () => eV,
        bL: () => eF,
        l9: () => eW,
        LM: () => eG,
      });
      var r = n(12115),
        i = n(47650);
      function o(e, [t, n]) {
        return Math.min(n, Math.max(t, e));
      }
      var l = n(93610),
        a = n(49741),
        s = n(88068),
        u = n(18166),
        c = n(4256),
        d = n(59674),
        f = n(62292),
        p = n(20196),
        h = n(67668),
        m = n(40905),
        g = n(17323),
        v = n(23360),
        y = n(12317),
        w = n(41524),
        b = n(1488),
        x = n(46611),
        S = n(95155),
        E = r.forwardRef((e, t) =>
          (0, S.jsx)(v.sG.span, {
            ...e,
            ref: t,
            style: {
              position: "absolute",
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              wordWrap: "normal",
              ...e.style,
            },
          })
        );
      E.displayName = "VisuallyHidden";
      var C = n(15587),
        _ = n(6476),
        k = n(95714),
        L = n(42607),
        R = (0, n(44577).f)(),
        T = function () {},
        j = r.forwardRef(function (e, t) {
          var n = r.useRef(null),
            i = r.useState({
              onScrollCapture: T,
              onWheelCapture: T,
              onTouchMoveCapture: T,
            }),
            o = i[0],
            l = i[1],
            a = e.forwardProps,
            s = e.children,
            u = e.className,
            c = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            h = e.noIsolation,
            m = e.inert,
            g = e.allowPinchZoom,
            v = e.as,
            y = e.gapMode,
            w = (0, _.Tt)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            b = (0, L.S)([n, t]),
            x = (0, _.Cl)((0, _.Cl)({}, w), o);
          return r.createElement(
            r.Fragment,
            null,
            d &&
              r.createElement(p, {
                sideCar: R,
                removeScrollBar: c,
                shards: f,
                noIsolation: h,
                inert: m,
                setCallbacks: l,
                allowPinchZoom: !!g,
                lockRef: n,
                gapMode: y,
              }),
            a
              ? r.cloneElement(
                  r.Children.only(s),
                  (0, _.Cl)((0, _.Cl)({}, x), { ref: b })
                )
              : r.createElement(
                  void 0 === v ? "div" : v,
                  (0, _.Cl)({}, x, { className: u, ref: b }),
                  s
                )
          );
        });
      (j.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (j.classNames = { fullWidth: k.pN, zeroRight: k.Mi });
      var N = n(66377),
        M = n(10101),
        P = n(75219),
        A = !1;
      if ("undefined" != typeof window)
        try {
          var I = Object.defineProperty({}, "passive", {
            get: function () {
              return (A = !0), !0;
            },
          });
          window.addEventListener("test", I, I),
            window.removeEventListener("test", I, I);
        } catch (e) {
          A = !1;
        }
      var O = !!A && { passive: !1 },
        D = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        $ = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              B(e, r))
            ) {
              var i = U(e, r);
              if (i[1] > i[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        B = function (e, t) {
          return "v" === e ? D(t, "overflowY") : D(t, "overflowX");
        },
        U = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        H = function (e, t, n, r, i) {
          var o,
            l =
              ((o = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === o ? -1 : 1),
            a = l * r,
            s = n.target,
            u = t.contains(s),
            c = !1,
            d = a > 0,
            f = 0,
            p = 0;
          do {
            var h = U(e, s),
              m = h[0],
              g = h[1] - h[2] - l * m;
            (m || g) && B(e, s) && ((f += g), (p += m)),
              s instanceof ShadowRoot ? (s = s.host) : (s = s.parentNode);
          } while (
            (!u && s !== document.body) ||
            (u && (t.contains(s) || t === s))
          );
          return (
            d && ((i && 1 > Math.abs(f)) || (!i && a > f))
              ? (c = !0)
              : !d && ((i && 1 > Math.abs(p)) || (!i && -a > p)) && (c = !0),
            c
          );
        },
        F = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        W = function (e) {
          return [e.deltaX, e.deltaY];
        },
        V = function (e) {
          return e && "current" in e ? e.current : e;
        },
        z = 0,
        G = [];
      let X = (0, N.m)(R, function (e) {
        var t = r.useRef([]),
          n = r.useRef([0, 0]),
          i = r.useRef(),
          o = r.useState(z++)[0],
          l = r.useState(P.T0)[0],
          a = r.useRef(e);
        r.useEffect(
          function () {
            a.current = e;
          },
          [e]
        ),
          r.useEffect(
            function () {
              if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(o));
                var t = (0, _.fX)(
                  [e.lockRef.current],
                  (e.shards || []).map(V),
                  !0
                ).filter(Boolean);
                return (
                  t.forEach(function (e) {
                    return e.classList.add("allow-interactivity-".concat(o));
                  }),
                  function () {
                    document.body.classList.remove(
                      "block-interactivity-".concat(o)
                    ),
                      t.forEach(function (e) {
                        return e.classList.remove(
                          "allow-interactivity-".concat(o)
                        );
                      });
                  }
                );
              }
            },
            [e.inert, e.lockRef.current, e.shards]
          );
        var s = r.useCallback(function (e, t) {
            if (
              ("touches" in e && 2 === e.touches.length) ||
              ("wheel" === e.type && e.ctrlKey)
            )
              return !a.current.allowPinchZoom;
            var r,
              o = F(e),
              l = n.current,
              s = "deltaX" in e ? e.deltaX : l[0] - o[0],
              u = "deltaY" in e ? e.deltaY : l[1] - o[1],
              c = e.target,
              d = Math.abs(s) > Math.abs(u) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === c.type) return !1;
            var f = $(d, c);
            if (!f) return !0;
            if (
              (f ? (r = d) : ((r = "v" === d ? "h" : "v"), (f = $(d, c))), !f)
            )
              return !1;
            if (
              (!i.current &&
                "changedTouches" in e &&
                (s || u) &&
                (i.current = r),
              !r)
            )
              return !0;
            var p = i.current || r;
            return H(p, t, e, "h" === p ? s : u, !0);
          }, []),
          u = r.useCallback(function (e) {
            if (G.length && G[G.length - 1] === l) {
              var n = "deltaY" in e ? W(e) : F(e),
                r = t.current.filter(function (t) {
                  var r;
                  return (
                    t.name === e.type &&
                    (t.target === e.target || e.target === t.shadowParent) &&
                    (r = t.delta)[0] === n[0] &&
                    r[1] === n[1]
                  );
                })[0];
              if (r && r.should) {
                e.cancelable && e.preventDefault();
                return;
              }
              if (!r) {
                var i = (a.current.shards || [])
                  .map(V)
                  .filter(Boolean)
                  .filter(function (t) {
                    return t.contains(e.target);
                  });
                (i.length > 0 ? s(e, i[0]) : !a.current.noIsolation) &&
                  e.cancelable &&
                  e.preventDefault();
              }
            }
          }, []),
          c = r.useCallback(function (e, n, r, i) {
            var o = {
              name: e,
              delta: n,
              target: r,
              should: i,
              shadowParent: (function (e) {
                for (var t = null; null !== e; )
                  e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                    (e = e.parentNode);
                return t;
              })(r),
            };
            t.current.push(o),
              setTimeout(function () {
                t.current = t.current.filter(function (e) {
                  return e !== o;
                });
              }, 1);
          }, []),
          d = r.useCallback(function (e) {
            (n.current = F(e)), (i.current = void 0);
          }, []),
          f = r.useCallback(function (t) {
            c(t.type, W(t), t.target, s(t, e.lockRef.current));
          }, []),
          p = r.useCallback(function (t) {
            c(t.type, F(t), t.target, s(t, e.lockRef.current));
          }, []);
        r.useEffect(function () {
          return (
            G.push(l),
            e.setCallbacks({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: p,
            }),
            document.addEventListener("wheel", u, O),
            document.addEventListener("touchmove", u, O),
            document.addEventListener("touchstart", d, O),
            function () {
              (G = G.filter(function (e) {
                return e !== l;
              })),
                document.removeEventListener("wheel", u, O),
                document.removeEventListener("touchmove", u, O),
                document.removeEventListener("touchstart", d, O);
            }
          );
        }, []);
        var h = e.removeScrollBar,
          m = e.inert;
        return r.createElement(
          r.Fragment,
          null,
          m
            ? r.createElement(l, {
                styles: "\n  .block-interactivity-"
                  .concat(
                    o,
                    " {pointer-events: none;}\n  .allow-interactivity-"
                  )
                  .concat(o, " {pointer-events: all;}\n"),
              })
            : null,
          h ? r.createElement(M.jp, { gapMode: e.gapMode }) : null
        );
      });
      var Y = r.forwardRef(function (e, t) {
        return r.createElement(j, (0, _.Cl)({}, e, { ref: t, sideCar: X }));
      });
      Y.classNames = j.classNames;
      var K = [" ", "Enter", "ArrowUp", "ArrowDown"],
        q = [" ", "Enter"],
        Z = "Select",
        [J, Q, ee] = (0, a.N)(Z),
        [et, en] = (0, u.A)(Z, [ee, m.Bk]),
        er = (0, m.Bk)(),
        [ei, eo] = et(Z),
        [el, ea] = et(Z),
        es = (e) => {
          let {
              __scopeSelect: t,
              children: n,
              open: i,
              defaultOpen: o,
              onOpenChange: l,
              value: a,
              defaultValue: s,
              onValueChange: u,
              dir: d,
              name: f,
              autoComplete: p,
              disabled: g,
              required: v,
              form: y,
            } = e,
            w = er(t),
            [x, E] = r.useState(null),
            [C, _] = r.useState(null),
            [k, L] = r.useState(!1),
            R = (0, c.jH)(d),
            [T = !1, j] = (0, b.i)({ prop: i, defaultProp: o, onChange: l }),
            [N, M] = (0, b.i)({ prop: a, defaultProp: s, onChange: u }),
            P = r.useRef(null),
            A = !x || y || !!x.closest("form"),
            [I, O] = r.useState(new Set()),
            D = Array.from(I)
              .map((e) => e.props.value)
              .join(";");
          return (0, S.jsx)(m.bL, {
            ...w,
            children: (0, S.jsxs)(ei, {
              required: v,
              scope: t,
              trigger: x,
              onTriggerChange: E,
              valueNode: C,
              onValueNodeChange: _,
              valueNodeHasChildren: k,
              onValueNodeHasChildrenChange: L,
              contentId: (0, h.B)(),
              value: N,
              onValueChange: M,
              open: T,
              onOpenChange: j,
              dir: R,
              triggerPointerDownPosRef: P,
              disabled: g,
              children: [
                (0, S.jsx)(J.Provider, {
                  scope: t,
                  children: (0, S.jsx)(el, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: r.useCallback((e) => {
                      O((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: r.useCallback((e) => {
                      O((t) => {
                        let n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, []),
                    children: n,
                  }),
                }),
                A
                  ? (0, S.jsxs)(
                      eB,
                      {
                        "aria-hidden": !0,
                        required: v,
                        tabIndex: -1,
                        name: f,
                        autoComplete: p,
                        value: N,
                        onChange: (e) => M(e.target.value),
                        disabled: g,
                        form: y,
                        children: [
                          void 0 === N
                            ? (0, S.jsx)("option", { value: "" })
                            : null,
                          Array.from(I),
                        ],
                      },
                      D
                    )
                  : null,
              ],
            }),
          });
        };
      es.displayName = Z;
      var eu = "SelectTrigger",
        ec = r.forwardRef((e, t) => {
          let { __scopeSelect: n, disabled: i = !1, ...o } = e,
            a = er(n),
            u = eo(eu, n),
            c = u.disabled || i,
            d = (0, s.s)(t, u.onTriggerChange),
            f = Q(n),
            p = r.useRef("touch"),
            [h, g, y] = eU((e) => {
              let t = f().filter((e) => !e.disabled),
                n = t.find((e) => e.value === u.value),
                r = eH(t, e, n);
              void 0 !== r && u.onValueChange(r.value);
            }),
            w = (e) => {
              c || (u.onOpenChange(!0), y()),
                e &&
                  (u.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  });
            };
          return (0, S.jsx)(m.Mz, {
            asChild: !0,
            ...a,
            children: (0, S.jsx)(v.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": u.contentId,
              "aria-expanded": u.open,
              "aria-required": u.required,
              "aria-autocomplete": "none",
              dir: u.dir,
              "data-state": u.open ? "open" : "closed",
              disabled: c,
              "data-disabled": c ? "" : void 0,
              "data-placeholder": e$(u.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, l.m)(o.onClick, (e) => {
                e.currentTarget.focus(), "mouse" !== p.current && w(e);
              }),
              onPointerDown: (0, l.m)(o.onPointerDown, (e) => {
                p.current = e.pointerType;
                let t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    "mouse" === e.pointerType &&
                    (w(e), e.preventDefault());
              }),
              onKeyDown: (0, l.m)(o.onKeyDown, (e) => {
                let t = "" !== h.current;
                e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  g(e.key),
                  (!t || " " !== e.key) &&
                    K.includes(e.key) &&
                    (w(), e.preventDefault());
              }),
            }),
          });
        });
      ec.displayName = eu;
      var ed = "SelectValue";
      (r.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            className: r,
            style: i,
            children: o,
            placeholder: l = "",
            ...a
          } = e,
          u = eo(ed, n),
          { onValueNodeHasChildrenChange: c } = u,
          d = void 0 !== o,
          f = (0, s.s)(t, u.onValueNodeChange);
        return (
          (0, x.N)(() => {
            c(d);
          }, [c, d]),
          (0, S.jsx)(v.sG.span, {
            ...a,
            ref: f,
            style: { pointerEvents: "none" },
            children: e$(u.value) ? (0, S.jsx)(S.Fragment, { children: l }) : o,
          })
        );
      }).displayName = ed),
        (r.forwardRef((e, t) => {
          let { __scopeSelect: n, children: r, ...i } = e;
          return (0, S.jsx)(v.sG.span, {
            "aria-hidden": !0,
            ...i,
            ref: t,
            children: r || "▼",
          });
        }).displayName = "SelectIcon");
      var ef = (e) => (0, S.jsx)(g.Z, { asChild: !0, ...e });
      ef.displayName = "SelectPortal";
      var ep = "SelectContent",
        eh = r.forwardRef((e, t) => {
          let n = eo(ep, e.__scopeSelect),
            [o, l] = r.useState();
          return ((0, x.N)(() => {
            l(new DocumentFragment());
          }, []),
          n.open)
            ? (0, S.jsx)(ev, { ...e, ref: t })
            : o
            ? i.createPortal(
                (0, S.jsx)(em, {
                  scope: e.__scopeSelect,
                  children: (0, S.jsx)(J.Slot, {
                    scope: e.__scopeSelect,
                    children: (0, S.jsx)("div", { children: e.children }),
                  }),
                }),
                o
              )
            : null;
        });
      eh.displayName = ep;
      var [em, eg] = et(ep),
        ev = r.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              position: i = "item-aligned",
              onCloseAutoFocus: o,
              onEscapeKeyDown: a,
              onPointerDownOutside: u,
              side: c,
              sideOffset: h,
              align: m,
              alignOffset: g,
              arrowPadding: v,
              collisionBoundary: w,
              collisionPadding: b,
              sticky: x,
              hideWhenDetached: E,
              avoidCollisions: _,
              ...k
            } = e,
            L = eo(ep, n),
            [R, T] = r.useState(null),
            [j, N] = r.useState(null),
            M = (0, s.s)(t, (e) => T(e)),
            [P, A] = r.useState(null),
            [I, O] = r.useState(null),
            D = Q(n),
            [$, B] = r.useState(!1),
            U = r.useRef(!1);
          r.useEffect(() => {
            if (R) return (0, C.Eq)(R);
          }, [R]),
            (0, f.Oh)();
          let H = r.useCallback(
              (e) => {
                let [t, ...n] = D().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  i = document.activeElement;
                for (let n of e)
                  if (
                    n === i ||
                    (null == n || n.scrollIntoView({ block: "nearest" }),
                    n === t && j && (j.scrollTop = 0),
                    n === r && j && (j.scrollTop = j.scrollHeight),
                    null == n || n.focus(),
                    document.activeElement !== i)
                  )
                    return;
              },
              [D, j]
            ),
            F = r.useCallback(() => H([P, R]), [H, P, R]);
          r.useEffect(() => {
            $ && F();
          }, [$, F]);
          let { onOpenChange: W, triggerPointerDownPosRef: V } = L;
          r.useEffect(() => {
            if (R) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var n, r, i, o;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null !==
                          (i =
                            null === (n = V.current) || void 0 === n
                              ? void 0
                              : n.x) && void 0 !== i
                          ? i
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null !==
                          (o =
                            null === (r = V.current) || void 0 === r
                              ? void 0
                              : r.y) && void 0 !== o
                          ? o
                          : 0)
                    ),
                  };
                },
                n = (n) => {
                  e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : R.contains(n.target) || W(!1),
                    document.removeEventListener("pointermove", t),
                    (V.current = null);
                };
              return (
                null !== V.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", n, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", n, {
                      capture: !0,
                    });
                }
              );
            }
          }, [R, W, V]),
            r.useEffect(() => {
              let e = () => W(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [W]);
          let [z, G] = eU((e) => {
              let t = D().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = eH(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            X = r.useCallback(
              (e, t, n) => {
                let r = !U.current && !n;
                ((void 0 !== L.value && L.value === t) || r) &&
                  (A(e), r && (U.current = !0));
              },
              [L.value]
            ),
            K = r.useCallback(() => (null == R ? void 0 : R.focus()), [R]),
            q = r.useCallback(
              (e, t, n) => {
                let r = !U.current && !n;
                ((void 0 !== L.value && L.value === t) || r) && O(e);
              },
              [L.value]
            ),
            Z = "popper" === i ? ew : ey,
            J =
              Z === ew
                ? {
                    side: c,
                    sideOffset: h,
                    align: m,
                    alignOffset: g,
                    arrowPadding: v,
                    collisionBoundary: w,
                    collisionPadding: b,
                    sticky: x,
                    hideWhenDetached: E,
                    avoidCollisions: _,
                  }
                : {};
          return (0, S.jsx)(em, {
            scope: n,
            content: R,
            viewport: j,
            onViewportChange: N,
            itemRefCallback: X,
            selectedItem: P,
            onItemLeave: K,
            itemTextRefCallback: q,
            focusSelectedItem: F,
            selectedItemText: I,
            position: i,
            isPositioned: $,
            searchRef: z,
            children: (0, S.jsx)(Y, {
              as: y.DX,
              allowPinchZoom: !0,
              children: (0, S.jsx)(p.n, {
                asChild: !0,
                trapped: L.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: (0, l.m)(o, (e) => {
                  var t;
                  null === (t = L.trigger) ||
                    void 0 === t ||
                    t.focus({ preventScroll: !0 }),
                    e.preventDefault();
                }),
                children: (0, S.jsx)(d.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: u,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => L.onOpenChange(!1),
                  children: (0, S.jsx)(Z, {
                    role: "listbox",
                    id: L.contentId,
                    "data-state": L.open ? "open" : "closed",
                    dir: L.dir,
                    onContextMenu: (e) => e.preventDefault(),
                    ...k,
                    ...J,
                    onPlaced: () => B(!0),
                    ref: M,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...k.style,
                    },
                    onKeyDown: (0, l.m)(k.onKeyDown, (e) => {
                      let t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ("Tab" === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || G(e.key),
                        ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                      ) {
                        let t = D()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        if (
                          (["ArrowUp", "End"].includes(e.key) &&
                            (t = t.slice().reverse()),
                          ["ArrowUp", "ArrowDown"].includes(e.key))
                        ) {
                          let n = e.target,
                            r = t.indexOf(n);
                          t = t.slice(r + 1);
                        }
                        setTimeout(() => H(t)), e.preventDefault();
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      ev.displayName = "SelectContentImpl";
      var ey = r.forwardRef((e, t) => {
        let { __scopeSelect: n, onPlaced: i, ...l } = e,
          a = eo(ep, n),
          u = eg(ep, n),
          [c, d] = r.useState(null),
          [f, p] = r.useState(null),
          h = (0, s.s)(t, (e) => p(e)),
          m = Q(n),
          g = r.useRef(!1),
          y = r.useRef(!0),
          {
            viewport: w,
            selectedItem: b,
            selectedItemText: E,
            focusSelectedItem: C,
          } = u,
          _ = r.useCallback(() => {
            if (a.trigger && a.valueNode && c && f && w && b && E) {
              let e = a.trigger.getBoundingClientRect(),
                t = f.getBoundingClientRect(),
                n = a.valueNode.getBoundingClientRect(),
                r = E.getBoundingClientRect();
              if ("rtl" !== a.dir) {
                let i = r.left - t.left,
                  l = n.left - i,
                  a = e.left - l,
                  s = e.width + a,
                  u = Math.max(s, t.width),
                  d = o(l, [10, Math.max(10, window.innerWidth - 10 - u)]);
                (c.style.minWidth = s + "px"), (c.style.left = d + "px");
              } else {
                let i = t.right - r.right,
                  l = window.innerWidth - n.right - i,
                  a = window.innerWidth - e.right - l,
                  s = e.width + a,
                  u = Math.max(s, t.width),
                  d = o(l, [10, Math.max(10, window.innerWidth - 10 - u)]);
                (c.style.minWidth = s + "px"), (c.style.right = d + "px");
              }
              let l = m(),
                s = window.innerHeight - 20,
                u = w.scrollHeight,
                d = window.getComputedStyle(f),
                p = parseInt(d.borderTopWidth, 10),
                h = parseInt(d.paddingTop, 10),
                v = parseInt(d.borderBottomWidth, 10),
                y = p + h + u + parseInt(d.paddingBottom, 10) + v,
                x = Math.min(5 * b.offsetHeight, y),
                S = window.getComputedStyle(w),
                C = parseInt(S.paddingTop, 10),
                _ = parseInt(S.paddingBottom, 10),
                k = e.top + e.height / 2 - 10,
                L = b.offsetHeight / 2,
                R = p + h + (b.offsetTop + L);
              if (R <= k) {
                let e = l.length > 0 && b === l[l.length - 1].ref.current;
                c.style.bottom = "0px";
                let t = Math.max(
                  s - k,
                  L +
                    (e ? _ : 0) +
                    (f.clientHeight - w.offsetTop - w.offsetHeight) +
                    v
                );
                c.style.height = R + t + "px";
              } else {
                let e = l.length > 0 && b === l[0].ref.current;
                c.style.top = "0px";
                let t = Math.max(k, p + w.offsetTop + (e ? C : 0) + L);
                (c.style.height = t + (y - R) + "px"),
                  (w.scrollTop = R - k + w.offsetTop);
              }
              (c.style.margin = "".concat(10, "px 0")),
                (c.style.minHeight = x + "px"),
                (c.style.maxHeight = s + "px"),
                null == i || i(),
                requestAnimationFrame(() => (g.current = !0));
            }
          }, [m, a.trigger, a.valueNode, c, f, w, b, E, a.dir, i]);
        (0, x.N)(() => _(), [_]);
        let [k, L] = r.useState();
        (0, x.N)(() => {
          f && L(window.getComputedStyle(f).zIndex);
        }, [f]);
        let R = r.useCallback(
          (e) => {
            e && !0 === y.current && (_(), null == C || C(), (y.current = !1));
          },
          [_, C]
        );
        return (0, S.jsx)(eb, {
          scope: n,
          contentWrapper: c,
          shouldExpandOnScrollRef: g,
          onScrollButtonChange: R,
          children: (0, S.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: k,
            },
            children: (0, S.jsx)(v.sG.div, {
              ...l,
              ref: h,
              style: { boxSizing: "border-box", maxHeight: "100%", ...l.style },
            }),
          }),
        });
      });
      ey.displayName = "SelectItemAlignedPosition";
      var ew = r.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            align: r = "start",
            collisionPadding: i = 10,
            ...o
          } = e,
          l = er(n);
        return (0, S.jsx)(m.UC, {
          ...l,
          ...o,
          ref: t,
          align: r,
          collisionPadding: i,
          style: {
            boxSizing: "border-box",
            ...o.style,
            "--radix-select-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-select-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      ew.displayName = "SelectPopperPosition";
      var [eb, ex] = et(ep, {}),
        eS = "SelectViewport",
        eE = r.forwardRef((e, t) => {
          let { __scopeSelect: n, nonce: i, ...o } = e,
            a = eg(eS, n),
            u = ex(eS, n),
            c = (0, s.s)(t, a.onViewportChange),
            d = r.useRef(0);
          return (0, S.jsxs)(S.Fragment, {
            children: [
              (0, S.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: i,
              }),
              (0, S.jsx)(J.Slot, {
                scope: n,
                children: (0, S.jsx)(v.sG.div, {
                  "data-radix-select-viewport": "",
                  role: "presentation",
                  ...o,
                  ref: c,
                  style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...o.style,
                  },
                  onScroll: (0, l.m)(o.onScroll, (e) => {
                    let t = e.currentTarget,
                      { contentWrapper: n, shouldExpandOnScrollRef: r } = u;
                    if ((null == r ? void 0 : r.current) && n) {
                      let e = Math.abs(d.current - t.scrollTop);
                      if (e > 0) {
                        let r = window.innerHeight - 20,
                          i = Math.max(
                            parseFloat(n.style.minHeight),
                            parseFloat(n.style.height)
                          );
                        if (i < r) {
                          let o = i + e,
                            l = Math.min(r, o),
                            a = o - l;
                          (n.style.height = l + "px"),
                            "0px" === n.style.bottom &&
                              ((t.scrollTop = a > 0 ? a : 0),
                              (n.style.justifyContent = "flex-end"));
                        }
                      }
                    }
                    d.current = t.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      eE.displayName = eS;
      var eC = "SelectGroup",
        [e_, ek] = et(eC);
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          i = (0, h.B)();
        return (0, S.jsx)(e_, {
          scope: n,
          id: i,
          children: (0, S.jsx)(v.sG.div, {
            role: "group",
            "aria-labelledby": i,
            ...r,
            ref: t,
          }),
        });
      }).displayName = eC;
      var eL = "SelectLabel";
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          i = ek(eL, n);
        return (0, S.jsx)(v.sG.div, { id: i.id, ...r, ref: t });
      }).displayName = eL;
      var eR = "SelectItem",
        [eT, ej] = et(eR),
        eN = r.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              value: i,
              disabled: o = !1,
              textValue: a,
              ...u
            } = e,
            c = eo(eR, n),
            d = eg(eR, n),
            f = c.value === i,
            [p, m] = r.useState(null != a ? a : ""),
            [g, y] = r.useState(!1),
            w = (0, s.s)(t, (e) => {
              var t;
              return null === (t = d.itemRefCallback) || void 0 === t
                ? void 0
                : t.call(d, e, i, o);
            }),
            b = (0, h.B)(),
            x = r.useRef("touch"),
            E = () => {
              o || (c.onValueChange(i), c.onOpenChange(!1));
            };
          if ("" === i)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, S.jsx)(eT, {
            scope: n,
            value: i,
            disabled: o,
            textId: b,
            isSelected: f,
            onItemTextChange: r.useCallback((e) => {
              m((t) => {
                var n;
                return (
                  t ||
                  (null !== (n = null == e ? void 0 : e.textContent) &&
                  void 0 !== n
                    ? n
                    : ""
                  ).trim()
                );
              });
            }, []),
            children: (0, S.jsx)(J.ItemSlot, {
              scope: n,
              value: i,
              disabled: o,
              textValue: p,
              children: (0, S.jsx)(v.sG.div, {
                role: "option",
                "aria-labelledby": b,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": f && g,
                "data-state": f ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...u,
                ref: w,
                onFocus: (0, l.m)(u.onFocus, () => y(!0)),
                onBlur: (0, l.m)(u.onBlur, () => y(!1)),
                onClick: (0, l.m)(u.onClick, () => {
                  "mouse" !== x.current && E();
                }),
                onPointerUp: (0, l.m)(u.onPointerUp, () => {
                  "mouse" === x.current && E();
                }),
                onPointerDown: (0, l.m)(u.onPointerDown, (e) => {
                  x.current = e.pointerType;
                }),
                onPointerMove: (0, l.m)(u.onPointerMove, (e) => {
                  if (((x.current = e.pointerType), o)) {
                    var t;
                    null === (t = d.onItemLeave) || void 0 === t || t.call(d);
                  } else
                    "mouse" === x.current &&
                      e.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: (0, l.m)(u.onPointerLeave, (e) => {
                  if (e.currentTarget === document.activeElement) {
                    var t;
                    null === (t = d.onItemLeave) || void 0 === t || t.call(d);
                  }
                }),
                onKeyDown: (0, l.m)(u.onKeyDown, (e) => {
                  var t;
                  ((null === (t = d.searchRef) || void 0 === t
                    ? void 0
                    : t.current) !== "" &&
                    " " === e.key) ||
                    (q.includes(e.key) && E(),
                    " " === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      eN.displayName = eR;
      var eM = "SelectItemText";
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, className: o, style: l, ...a } = e,
          u = eo(eM, n),
          c = eg(eM, n),
          d = ej(eM, n),
          f = ea(eM, n),
          [p, h] = r.useState(null),
          m = (0, s.s)(
            t,
            (e) => h(e),
            d.onItemTextChange,
            (e) => {
              var t;
              return null === (t = c.itemTextRefCallback) || void 0 === t
                ? void 0
                : t.call(c, e, d.value, d.disabled);
            }
          ),
          g = null == p ? void 0 : p.textContent,
          y = r.useMemo(
            () =>
              (0, S.jsx)(
                "option",
                { value: d.value, disabled: d.disabled, children: g },
                d.value
              ),
            [d.disabled, d.value, g]
          ),
          { onNativeOptionAdd: w, onNativeOptionRemove: b } = f;
        return (
          (0, x.N)(() => (w(y), () => b(y)), [w, b, y]),
          (0, S.jsxs)(S.Fragment, {
            children: [
              (0, S.jsx)(v.sG.span, { id: d.textId, ...a, ref: m }),
              d.isSelected && u.valueNode && !u.valueNodeHasChildren
                ? i.createPortal(a.children, u.valueNode)
                : null,
            ],
          })
        );
      }).displayName = eM;
      var eP = "SelectItemIndicator";
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e;
        return ej(eP, n).isSelected
          ? (0, S.jsx)(v.sG.span, { "aria-hidden": !0, ...r, ref: t })
          : null;
      }).displayName = eP;
      var eA = "SelectScrollUpButton";
      r.forwardRef((e, t) => {
        let n = eg(eA, e.__scopeSelect),
          i = ex(eA, e.__scopeSelect),
          [o, l] = r.useState(!1),
          a = (0, s.s)(t, i.onScrollButtonChange);
        return (
          (0, x.N)(() => {
            if (n.viewport && n.isPositioned) {
              let e = function () {
                  l(t.scrollTop > 0);
                },
                t = n.viewport;
              return (
                e(),
                t.addEventListener("scroll", e),
                () => t.removeEventListener("scroll", e)
              );
            }
          }, [n.viewport, n.isPositioned]),
          o
            ? (0, S.jsx)(eO, {
                ...e,
                ref: a,
                onAutoScroll: () => {
                  let { viewport: e, selectedItem: t } = n;
                  e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                },
              })
            : null
        );
      }).displayName = eA;
      var eI = "SelectScrollDownButton";
      r.forwardRef((e, t) => {
        let n = eg(eI, e.__scopeSelect),
          i = ex(eI, e.__scopeSelect),
          [o, l] = r.useState(!1),
          a = (0, s.s)(t, i.onScrollButtonChange);
        return (
          (0, x.N)(() => {
            if (n.viewport && n.isPositioned) {
              let e = function () {
                  let e = t.scrollHeight - t.clientHeight;
                  l(Math.ceil(t.scrollTop) < e);
                },
                t = n.viewport;
              return (
                e(),
                t.addEventListener("scroll", e),
                () => t.removeEventListener("scroll", e)
              );
            }
          }, [n.viewport, n.isPositioned]),
          o
            ? (0, S.jsx)(eO, {
                ...e,
                ref: a,
                onAutoScroll: () => {
                  let { viewport: e, selectedItem: t } = n;
                  e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                },
              })
            : null
        );
      }).displayName = eI;
      var eO = r.forwardRef((e, t) => {
        let { __scopeSelect: n, onAutoScroll: i, ...o } = e,
          a = eg("SelectScrollButton", n),
          s = r.useRef(null),
          u = Q(n),
          c = r.useCallback(() => {
            null !== s.current &&
              (window.clearInterval(s.current), (s.current = null));
          }, []);
        return (
          r.useEffect(() => () => c(), [c]),
          (0, x.N)(() => {
            var e;
            let t = u().find((e) => e.ref.current === document.activeElement);
            null == t ||
              null === (e = t.ref.current) ||
              void 0 === e ||
              e.scrollIntoView({ block: "nearest" });
          }, [u]),
          (0, S.jsx)(v.sG.div, {
            "aria-hidden": !0,
            ...o,
            ref: t,
            style: { flexShrink: 0, ...o.style },
            onPointerDown: (0, l.m)(o.onPointerDown, () => {
              null === s.current && (s.current = window.setInterval(i, 50));
            }),
            onPointerMove: (0, l.m)(o.onPointerMove, () => {
              var e;
              null === (e = a.onItemLeave) || void 0 === e || e.call(a),
                null === s.current && (s.current = window.setInterval(i, 50));
            }),
            onPointerLeave: (0, l.m)(o.onPointerLeave, () => {
              c();
            }),
          })
        );
      });
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e;
        return (0, S.jsx)(v.sG.div, { "aria-hidden": !0, ...r, ref: t });
      }).displayName = "SelectSeparator";
      var eD = "SelectArrow";
      function e$(e) {
        return "" === e || void 0 === e;
      }
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          i = er(n),
          o = eo(eD, n),
          l = eg(eD, n);
        return o.open && "popper" === l.position
          ? (0, S.jsx)(m.i3, { ...i, ...r, ref: t })
          : null;
      }).displayName = eD;
      var eB = r.forwardRef((e, t) => {
        let { value: n, ...i } = e,
          o = r.useRef(null),
          l = (0, s.s)(t, o),
          a = (function (e) {
            let t = r.useRef({ value: e, previous: e });
            return r.useMemo(
              () => (
                t.current.value !== e &&
                  ((t.current.previous = t.current.value),
                  (t.current.value = e)),
                t.current.previous
              ),
              [e]
            );
          })(n);
        return (
          r.useEffect(() => {
            let e = o.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLSelectElement.prototype,
                "value"
              ).set;
            if (a !== n && t) {
              let r = new Event("change", { bubbles: !0 });
              t.call(e, n), e.dispatchEvent(r);
            }
          }, [a, n]),
          (0, S.jsx)(E, {
            asChild: !0,
            children: (0, S.jsx)("select", { ...i, ref: l, defaultValue: n }),
          })
        );
      });
      function eU(e) {
        let t = (0, w.c)(e),
          n = r.useRef(""),
          i = r.useRef(0),
          o = r.useCallback(
            (e) => {
              let r = n.current + e;
              t(r),
                (function e(t) {
                  (n.current = t),
                    window.clearTimeout(i.current),
                    "" !== t &&
                      (i.current = window.setTimeout(() => e(""), 1e3));
                })(r);
            },
            [t]
          ),
          l = r.useCallback(() => {
            (n.current = ""), window.clearTimeout(i.current);
          }, []);
        return (
          r.useEffect(() => () => window.clearTimeout(i.current), []), [n, o, l]
        );
      }
      function eH(e, t, n) {
        var r;
        let i =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          o =
            ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
            e.map((t, n) => e[(r + n) % e.length]));
        1 === i.length && (o = o.filter((e) => e !== n));
        let l = o.find((e) =>
          e.textValue.toLowerCase().startsWith(i.toLowerCase())
        );
        return l !== n ? l : void 0;
      }
      eB.displayName = "BubbleSelect";
      var eF = es,
        eW = ec,
        eV = ef,
        ez = eh,
        eG = eE,
        eX = eN;
    },
    22750: (e, t, n) => {
      n.d(t, { A: () => i });
      let r = {
        active: !0,
        breakpoints: {},
        delay: 4e3,
        jump: !1,
        playOnInit: !0,
        stopOnFocusIn: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        stopOnLastSnap: !1,
        rootNode: null,
      };
      function i(e = {}) {
        let t, n, o, l;
        let a = null,
          s = 0,
          u = !1,
          c = !1,
          d = !1,
          f = !1;
        function p() {
          o ||
            (u || n.emit("autoplay:play"),
            (function () {
              let { ownerWindow: e } = n.internalEngine();
              e.clearTimeout(s),
                (s = e.setTimeout(x, l[n.selectedScrollSnap()])),
                (a = new Date().getTime()),
                n.emit("autoplay:timerset");
            })(),
            (u = !0));
        }
        function h() {
          o ||
            (u && n.emit("autoplay:stop"),
            (function () {
              let { ownerWindow: e } = n.internalEngine();
              e.clearTimeout(s),
                (s = 0),
                (a = null),
                n.emit("autoplay:timerstopped");
            })(),
            (u = !1));
        }
        function m() {
          if (g()) return (d = u), h();
          d && p();
        }
        function g() {
          let { ownerDocument: e } = n.internalEngine();
          return "hidden" === e.visibilityState;
        }
        function v() {
          c || h();
        }
        function y() {
          c || p();
        }
        function w() {
          (c = !0), h();
        }
        function b() {
          (c = !1), p();
        }
        function x() {
          let { index: e } = n.internalEngine(),
            r = e.clone().add(1).get(),
            i = n.scrollSnapList().length - 1,
            o = t.stopOnLastSnap && r === i;
          if (
            (n.canScrollNext() ? n.scrollNext(f) : n.scrollTo(0, f),
            n.emit("autoplay:select"),
            o)
          )
            return h();
          p();
        }
        return {
          name: "autoplay",
          options: e,
          init: function (a, s) {
            n = a;
            let { mergeOptions: u, optionsAtMedia: c } = s,
              d = u(r, i.globalOptions);
            if (((t = c(u(d, e))), n.scrollSnapList().length <= 1)) return;
            (f = t.jump),
              (o = !1),
              (l = (function (e, t) {
                let n = e.scrollSnapList();
                return "number" == typeof t ? n.map(() => t) : t(n, e);
              })(n, t.delay));
            let { eventStore: x, ownerDocument: S } = n.internalEngine(),
              E = !!n.internalEngine().options.watchDrag,
              C = (function (e, t) {
                let n = e.rootNode();
                return (t && t(n)) || n;
              })(n, t.rootNode);
            x.add(S, "visibilitychange", m),
              E && n.on("pointerDown", v),
              E && !t.stopOnInteraction && n.on("pointerUp", y),
              t.stopOnMouseEnter && x.add(C, "mouseenter", w),
              t.stopOnMouseEnter &&
                !t.stopOnInteraction &&
                x.add(C, "mouseleave", b),
              t.stopOnFocusIn && n.on("slideFocusStart", h),
              t.stopOnFocusIn &&
                !t.stopOnInteraction &&
                x.add(n.containerNode(), "focusout", p),
              t.playOnInit && !g() && p();
          },
          destroy: function () {
            n
              .off("pointerDown", v)
              .off("pointerUp", y)
              .off("slideFocusStart", h),
              h(),
              (o = !0),
              (u = !1);
          },
          play: function (e) {
            void 0 !== e && (f = e), p();
          },
          stop: function () {
            u && h();
          },
          reset: function () {
            u && p();
          },
          isPlaying: function () {
            return u;
          },
          timeUntilNext: function () {
            return a
              ? l[n.selectedScrollSnap()] - (new Date().getTime() - a)
              : null;
          },
        };
      }
      i.globalOptions = void 0;
    },
    42576: (e, t, n) => {
      n.d(t, { A: () => _ });
      var r = n(12115);
      function i(e) {
        return (
          "[object Object]" === Object.prototype.toString.call(e) ||
          Array.isArray(e)
        );
      }
      function o(e, t) {
        let n = Object.keys(e),
          r = Object.keys(t);
        return (
          n.length === r.length &&
          JSON.stringify(Object.keys(e.breakpoints || {})) ===
            JSON.stringify(Object.keys(t.breakpoints || {})) &&
          n.every((n) => {
            let r = e[n],
              l = t[n];
            return "function" == typeof r
              ? `${r}` == `${l}`
              : i(r) && i(l)
              ? o(r, l)
              : r === l;
          })
        );
      }
      function l(e) {
        return e
          .concat()
          .sort((e, t) => (e.name > t.name ? 1 : -1))
          .map((e) => e.options);
      }
      function a(e) {
        return "number" == typeof e;
      }
      function s(e) {
        return "string" == typeof e;
      }
      function u(e) {
        return "boolean" == typeof e;
      }
      function c(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function d(e) {
        return Math.abs(e);
      }
      function f(e) {
        return Math.sign(e);
      }
      function p(e) {
        return v(e).map(Number);
      }
      function h(e) {
        return e[m(e)];
      }
      function m(e) {
        return Math.max(0, e.length - 1);
      }
      function g(e, t = 0) {
        return Array.from(Array(e), (e, n) => t + n);
      }
      function v(e) {
        return Object.keys(e);
      }
      function y(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent;
      }
      function w() {
        let e = [],
          t = {
            add: function (n, r, i, o = { passive: !0 }) {
              let l;
              return (
                "addEventListener" in n
                  ? (n.addEventListener(r, i, o),
                    (l = () => n.removeEventListener(r, i, o)))
                  : (n.addListener(i), (l = () => n.removeListener(i))),
                e.push(l),
                t
              );
            },
            clear: function () {
              e = e.filter((e) => e());
            },
          };
        return t;
      }
      function b(e = 0, t = 0) {
        let n = d(e - t);
        function r(n) {
          return n < e || n > t;
        }
        return {
          length: n,
          max: t,
          min: e,
          constrain: function (n) {
            return r(n) ? (n < e ? e : t) : n;
          },
          reachedAny: r,
          reachedMax: function (e) {
            return e > t;
          },
          reachedMin: function (t) {
            return t < e;
          },
          removeOffset: function (e) {
            return n ? e - n * Math.ceil((e - t) / n) : e;
          },
        };
      }
      function x(e) {
        let t = e;
        function n(e) {
          return a(e) ? e : e.get();
        }
        return {
          get: function () {
            return t;
          },
          set: function (e) {
            t = n(e);
          },
          add: function (e) {
            t += n(e);
          },
          subtract: function (e) {
            t -= n(e);
          },
        };
      }
      function S(e, t) {
        let n =
            "x" === e.scroll
              ? function (e) {
                  return `translate3d(${e}px,0px,0px)`;
                }
              : function (e) {
                  return `translate3d(0px,${e}px,0px)`;
                },
          r = t.style,
          i = null,
          o = !1;
        return {
          clear: function () {
            o ||
              ((r.transform = ""),
              t.getAttribute("style") || t.removeAttribute("style"));
          },
          to: function (t) {
            if (o) return;
            let l = Math.round(100 * e.direction(t)) / 100;
            l !== i && ((r.transform = n(l)), (i = l));
          },
          toggleActive: function (e) {
            o = !e;
          },
        };
      }
      let E = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
        watchFocus: !0,
      };
      function C(e, t, n) {
        let r, i, o, l, _;
        let k = e.ownerDocument,
          L = k.defaultView,
          R = (function (e) {
            function t(e, t) {
              return (function e(t, n) {
                return [t, n].reduce(
                  (t, n) => (
                    v(n).forEach((r) => {
                      let i = t[r],
                        o = n[r],
                        l = c(i) && c(o);
                      t[r] = l ? e(i, o) : o;
                    }),
                    t
                  ),
                  {}
                );
              })(e, t || {});
            }
            return {
              mergeOptions: t,
              optionsAtMedia: function (n) {
                let r = n.breakpoints || {},
                  i = v(r)
                    .filter((t) => e.matchMedia(t).matches)
                    .map((e) => r[e])
                    .reduce((e, n) => t(e, n), {});
                return t(n, i);
              },
              optionsMediaQueries: function (t) {
                return t
                  .map((e) => v(e.breakpoints || {}))
                  .reduce((e, t) => e.concat(t), [])
                  .map(e.matchMedia);
              },
            };
          })(L),
          T =
            ((_ = []),
            {
              init: function (e, t) {
                return (
                  (_ = t.filter(
                    ({ options: e }) => !1 !== R.optionsAtMedia(e).active
                  )).forEach((t) => t.init(e, R)),
                  t.reduce((e, t) => Object.assign(e, { [t.name]: t }), {})
                );
              },
              destroy: function () {
                _ = _.filter((e) => e.destroy());
              },
            }),
          j = w(),
          N = (function () {
            let e,
              t = {},
              n = {
                init: function (t) {
                  e = t;
                },
                emit: function (r) {
                  return (t[r] || []).forEach((t) => t(e, r)), n;
                },
                off: function (e, r) {
                  return (t[e] = (t[e] || []).filter((e) => e !== r)), n;
                },
                on: function (e, r) {
                  return (t[e] = (t[e] || []).concat([r])), n;
                },
                clear: function () {
                  t = {};
                },
              };
            return n;
          })(),
          { mergeOptions: M, optionsAtMedia: P, optionsMediaQueries: A } = R,
          { on: I, off: O, emit: D } = N,
          $ = !1,
          B = M(E, C.globalOptions),
          U = M(B),
          H = [];
        function F(t, n) {
          !$ &&
            ((U = P((B = M(B, t)))),
            (H = n || H),
            (function () {
              let { container: t, slides: n } = U;
              o = (s(t) ? e.querySelector(t) : t) || e.children[0];
              let r = s(n) ? o.querySelectorAll(n) : n;
              l = [].slice.call(r || o.children);
            })(),
            (r = (function t(n) {
              let r = (function (e, t, n, r, i, o, l) {
                let c, E;
                let {
                    align: C,
                    axis: _,
                    direction: k,
                    startIndex: L,
                    loop: R,
                    duration: T,
                    dragFree: j,
                    dragThreshold: N,
                    inViewThreshold: M,
                    slidesToScroll: P,
                    skipSnaps: A,
                    containScroll: I,
                    watchResize: O,
                    watchSlides: D,
                    watchDrag: $,
                    watchFocus: B,
                  } = o,
                  U = {
                    measure: function (e) {
                      let {
                        offsetTop: t,
                        offsetLeft: n,
                        offsetWidth: r,
                        offsetHeight: i,
                      } = e;
                      return {
                        top: t,
                        right: n + r,
                        bottom: t + i,
                        left: n,
                        width: r,
                        height: i,
                      };
                    },
                  },
                  H = U.measure(t),
                  F = n.map(U.measure),
                  W = (function (e, t) {
                    let n = "rtl" === t,
                      r = "y" === e,
                      i = !r && n ? -1 : 1;
                    return {
                      scroll: r ? "y" : "x",
                      cross: r ? "x" : "y",
                      startEdge: r ? "top" : n ? "right" : "left",
                      endEdge: r ? "bottom" : n ? "left" : "right",
                      measureSize: function (e) {
                        let { height: t, width: n } = e;
                        return r ? t : n;
                      },
                      direction: function (e) {
                        return e * i;
                      },
                    };
                  })(_, k),
                  V = W.measureSize(H),
                  z = {
                    measure: function (e) {
                      return (e / 100) * V;
                    },
                  },
                  G = (function (e, t) {
                    let n = {
                      start: function () {
                        return 0;
                      },
                      center: function (e) {
                        return (t - e) / 2;
                      },
                      end: function (e) {
                        return t - e;
                      },
                    };
                    return {
                      measure: function (r, i) {
                        return s(e) ? n[e](r) : e(t, r, i);
                      },
                    };
                  })(C, V),
                  X = !R && !!I,
                  {
                    slideSizes: Y,
                    slideSizesWithGaps: K,
                    startGap: q,
                    endGap: Z,
                  } = (function (e, t, n, r, i, o) {
                    let { measureSize: l, startEdge: a, endEdge: s } = e,
                      u = n[0] && i,
                      c = (function () {
                        if (!u) return 0;
                        let e = n[0];
                        return d(t[a] - e[a]);
                      })(),
                      f = u
                        ? parseFloat(
                            o
                              .getComputedStyle(h(r))
                              .getPropertyValue(`margin-${s}`)
                          )
                        : 0,
                      p = n.map(l),
                      g = n
                        .map((e, t, n) => {
                          let r = t === m(n);
                          return t
                            ? r
                              ? p[t] + f
                              : n[t + 1][a] - e[a]
                            : p[t] + c;
                        })
                        .map(d);
                    return {
                      slideSizes: p,
                      slideSizesWithGaps: g,
                      startGap: c,
                      endGap: f,
                    };
                  })(W, H, F, n, R || !!I, i),
                  J = (function (e, t, n, r, i, o, l, s, u) {
                    let { startEdge: c, endEdge: f, direction: g } = e,
                      v = a(n);
                    return {
                      groupSlides: function (e) {
                        return v
                          ? p(e)
                              .filter((e) => e % n == 0)
                              .map((t) => e.slice(t, t + n))
                          : e.length
                          ? p(e)
                              .reduce((n, a, u) => {
                                let p = h(n) || 0,
                                  v = a === m(e),
                                  y = i[c] - o[p][c],
                                  w = i[c] - o[a][f],
                                  b = r || 0 !== p ? 0 : g(l),
                                  x = d(w - (!r && v ? g(s) : 0) - (y + b));
                                return (
                                  u && x > t + 2 && n.push(a),
                                  v && n.push(e.length),
                                  n
                                );
                              }, [])
                              .map((t, n, r) => {
                                let i = Math.max(r[n - 1] || 0);
                                return e.slice(i, t);
                              })
                          : [];
                      },
                    };
                  })(W, V, P, R, H, F, q, Z, 0),
                  { snaps: Q, snapsAligned: ee } = (function (e, t, n, r, i) {
                    let { startEdge: o, endEdge: l } = e,
                      { groupSlides: a } = i,
                      s = a(r)
                        .map((e) => h(e)[l] - e[0][o])
                        .map(d)
                        .map(t.measure),
                      u = r.map((e) => n[o] - e[o]).map((e) => -d(e)),
                      c = a(u)
                        .map((e) => e[0])
                        .map((e, t) => e + s[t]);
                    return { snaps: u, snapsAligned: c };
                  })(W, G, H, F, J),
                  et = -h(Q) + h(K),
                  { snapsContained: en, scrollContainLimit: er } = (function (
                    e,
                    t,
                    n,
                    r,
                    i
                  ) {
                    let o = b(-t + e, 0),
                      l = n
                        .map((e, t) => {
                          let { min: r, max: i } = o,
                            l = o.constrain(e),
                            a = t === m(n);
                          return t
                            ? a || 1 > d(r - l)
                              ? r
                              : 1 > d(i - l)
                              ? i
                              : l
                            : i;
                        })
                        .map((e) => parseFloat(e.toFixed(3))),
                      a = (function () {
                        let e = l[0],
                          t = h(l);
                        return b(l.lastIndexOf(e), l.indexOf(t) + 1);
                      })();
                    return {
                      snapsContained: (function () {
                        if (t <= e + 2) return [o.max];
                        if ("keepSnaps" === r) return l;
                        let { min: n, max: i } = a;
                        return l.slice(n, i);
                      })(),
                      scrollContainLimit: a,
                    };
                  })(V, et, ee, I, 0),
                  ei = X ? en : ee,
                  { limit: eo } = (function (e, t, n) {
                    let r = t[0];
                    return { limit: b(n ? r - e : h(t), r) };
                  })(et, ei, R),
                  el = (function e(t, n, r) {
                    let { constrain: i } = b(0, t),
                      o = t + 1,
                      l = a(n);
                    function a(e) {
                      return r ? d((o + e) % o) : i(e);
                    }
                    function s() {
                      return e(t, l, r);
                    }
                    let u = {
                      get: function () {
                        return l;
                      },
                      set: function (e) {
                        return (l = a(e)), u;
                      },
                      add: function (e) {
                        return s().set(l + e);
                      },
                      clone: s,
                    };
                    return u;
                  })(m(ei), L, R),
                  ea = el.clone(),
                  es = p(n),
                  eu = ({
                    dragHandler: e,
                    scrollBody: t,
                    scrollBounds: n,
                    options: { loop: r },
                  }) => {
                    r || n.constrain(e.pointerDown()), t.seek();
                  },
                  ec = (
                    {
                      scrollBody: e,
                      translate: t,
                      location: n,
                      offsetLocation: r,
                      previousLocation: i,
                      scrollLooper: o,
                      slideLooper: l,
                      dragHandler: a,
                      animation: s,
                      eventHandler: u,
                      scrollBounds: c,
                      options: { loop: d },
                    },
                    f
                  ) => {
                    let p = e.settled(),
                      h = !c.shouldConstrain(),
                      m = d ? p : p && h;
                    m && !a.pointerDown() && (s.stop(), u.emit("settle")),
                      m || u.emit("scroll");
                    let g = n.get() * f + i.get() * (1 - f);
                    r.set(g),
                      d && (o.loop(e.direction()), l.loop()),
                      t.to(r.get());
                  },
                  ed = (function (e, t, n, r) {
                    let i = w(),
                      o = 1e3 / 60,
                      l = null,
                      a = 0,
                      s = 0;
                    function u(e) {
                      if (!s) return;
                      l || (l = e);
                      let i = e - l;
                      for (l = e, a += i; a >= o; ) n(), (a -= o);
                      r(a / o), s && (s = t.requestAnimationFrame(u));
                    }
                    function c() {
                      t.cancelAnimationFrame(s), (l = null), (a = 0), (s = 0);
                    }
                    return {
                      init: function () {
                        i.add(e, "visibilitychange", () => {
                          e.hidden && ((l = null), (a = 0));
                        });
                      },
                      destroy: function () {
                        c(), i.clear();
                      },
                      start: function () {
                        s || (s = t.requestAnimationFrame(u));
                      },
                      stop: c,
                      update: n,
                      render: r,
                    };
                  })(
                    r,
                    i,
                    () => eu(e_),
                    (e) => ec(e_, e)
                  ),
                  ef = ei[el.get()],
                  ep = x(ef),
                  eh = x(ef),
                  em = x(ef),
                  eg = x(ef),
                  ev = (function (e, t, n, r, i, o) {
                    let l = 0,
                      a = 0,
                      s = i,
                      u = 0.68,
                      c = e.get(),
                      p = 0;
                    function h(e) {
                      return (s = e), g;
                    }
                    function m(e) {
                      return (u = e), g;
                    }
                    let g = {
                      direction: function () {
                        return a;
                      },
                      duration: function () {
                        return s;
                      },
                      velocity: function () {
                        return l;
                      },
                      seek: function () {
                        let t = r.get() - e.get(),
                          i = 0;
                        return (
                          s
                            ? (n.set(e),
                              (l += t / s),
                              (l *= u),
                              (c += l),
                              e.add(l),
                              (i = c - p))
                            : ((l = 0), n.set(r), e.set(r), (i = t)),
                          (a = f(i)),
                          (p = c),
                          g
                        );
                      },
                      settled: function () {
                        return 0.001 > d(r.get() - t.get());
                      },
                      useBaseFriction: function () {
                        return m(0.68);
                      },
                      useBaseDuration: function () {
                        return h(i);
                      },
                      useFriction: m,
                      useDuration: h,
                    };
                    return g;
                  })(ep, em, eh, eg, T, 0),
                  ey = (function (e, t, n, r, i) {
                    let { reachedAny: o, removeOffset: l, constrain: a } = r;
                    function s(e) {
                      return e.concat().sort((e, t) => d(e) - d(t))[0];
                    }
                    function u(t, r) {
                      let i = [t, t + n, t - n];
                      if (!e) return t;
                      if (!r) return s(i);
                      let o = i.filter((e) => f(e) === r);
                      return o.length ? s(o) : h(i) - n;
                    }
                    return {
                      byDistance: function (n, r) {
                        let s = i.get() + n,
                          { index: c, distance: f } = (function (n) {
                            let r = e ? l(n) : a(n),
                              { index: i } = t
                                .map((e, t) => ({
                                  diff: u(e - r, 0),
                                  index: t,
                                }))
                                .sort((e, t) => d(e.diff) - d(t.diff))[0];
                            return { index: i, distance: r };
                          })(s),
                          p = !e && o(s);
                        if (!r || p) return { index: c, distance: n };
                        let h = n + u(t[c] - f, 0);
                        return { index: c, distance: h };
                      },
                      byIndex: function (e, n) {
                        let r = u(t[e] - i.get(), n);
                        return { index: e, distance: r };
                      },
                      shortcut: u,
                    };
                  })(R, ei, et, eo, eg),
                  ew = (function (e, t, n, r, i, o, l) {
                    function a(i) {
                      let a = i.distance,
                        s = i.index !== t.get();
                      o.add(a),
                        a &&
                          (r.duration()
                            ? e.start()
                            : (e.update(), e.render(1), e.update())),
                        s && (n.set(t.get()), t.set(i.index), l.emit("select"));
                    }
                    return {
                      distance: function (e, t) {
                        a(i.byDistance(e, t));
                      },
                      index: function (e, n) {
                        let r = t.clone().set(e);
                        a(i.byIndex(r.get(), n));
                      },
                    };
                  })(ed, el, ea, ev, ey, eg, l),
                  eb = (function (e) {
                    let { max: t, length: n } = e;
                    return {
                      get: function (e) {
                        return n ? -((e - t) / n) : 0;
                      },
                    };
                  })(eo),
                  ex = w(),
                  eS = (function (e, t, n, r) {
                    let i;
                    let o = {},
                      l = null,
                      a = null,
                      s = !1;
                    return {
                      init: function () {
                        (i = new IntersectionObserver(
                          (e) => {
                            s ||
                              (e.forEach((e) => {
                                o[t.indexOf(e.target)] = e;
                              }),
                              (l = null),
                              (a = null),
                              n.emit("slidesInView"));
                          },
                          { root: e.parentElement, threshold: r }
                        )),
                          t.forEach((e) => i.observe(e));
                      },
                      destroy: function () {
                        i && i.disconnect(), (s = !0);
                      },
                      get: function (e = !0) {
                        if (e && l) return l;
                        if (!e && a) return a;
                        let t = v(o).reduce((t, n) => {
                          let r = parseInt(n),
                            { isIntersecting: i } = o[r];
                          return ((e && i) || (!e && !i)) && t.push(r), t;
                        }, []);
                        return e && (l = t), e || (a = t), t;
                      },
                    };
                  })(t, n, l, M),
                  { slideRegistry: eE } = (function (e, t, n, r, i, o) {
                    let { groupSlides: l } = i,
                      { min: a, max: s } = r;
                    return {
                      slideRegistry: (function () {
                        let r = l(o);
                        return 1 === n.length
                          ? [o]
                          : e && "keepSnaps" !== t
                          ? r.slice(a, s).map((e, t, n) => {
                              let r = t === m(n);
                              return t
                                ? r
                                  ? g(m(o) - h(n)[0] + 1, h(n)[0])
                                  : e
                                : g(h(n[0]) + 1);
                            })
                          : r;
                      })(),
                    };
                  })(X, I, ei, er, J, es),
                  eC = (function (e, t, n, r, i, o, l, s) {
                    let c = { passive: !0, capture: !0 },
                      d = 0;
                    function f(e) {
                      "Tab" === e.code && (d = new Date().getTime());
                    }
                    return {
                      init: function (p) {
                        s &&
                          (o.add(document, "keydown", f, !1),
                          t.forEach((t, f) => {
                            o.add(
                              t,
                              "focus",
                              (t) => {
                                (u(s) || s(p, t)) &&
                                  (function (t) {
                                    if (new Date().getTime() - d > 10) return;
                                    l.emit("slideFocusStart"),
                                      (e.scrollLeft = 0);
                                    let o = n.findIndex((e) => e.includes(t));
                                    a(o) &&
                                      (i.useDuration(0),
                                      r.index(o, 0),
                                      l.emit("slideFocus"));
                                  })(f);
                              },
                              c
                            );
                          }));
                      },
                    };
                  })(e, n, eE, ew, ev, ex, l, B),
                  e_ = {
                    ownerDocument: r,
                    ownerWindow: i,
                    eventHandler: l,
                    containerRect: H,
                    slideRects: F,
                    animation: ed,
                    axis: W,
                    dragHandler: (function (
                      e,
                      t,
                      n,
                      r,
                      i,
                      o,
                      l,
                      a,
                      s,
                      c,
                      p,
                      h,
                      m,
                      g,
                      v,
                      x,
                      S,
                      E,
                      C
                    ) {
                      let { cross: _, direction: k } = e,
                        L = ["INPUT", "SELECT", "TEXTAREA"],
                        R = { passive: !1 },
                        T = w(),
                        j = w(),
                        N = b(50, 225).constrain(g.measure(20)),
                        M = { mouse: 300, touch: 400 },
                        P = { mouse: 500, touch: 600 },
                        A = v ? 43 : 25,
                        I = !1,
                        O = 0,
                        D = 0,
                        $ = !1,
                        B = !1,
                        U = !1,
                        H = !1;
                      function F(e) {
                        if (!y(e, r) && e.touches.length >= 2) return W(e);
                        let t = o.readPoint(e),
                          n = o.readPoint(e, _),
                          l = d(t - O),
                          s = d(n - D);
                        if (!B && !H && (!e.cancelable || !(B = l > s)))
                          return W(e);
                        let u = o.pointerMove(e);
                        l > x && (U = !0),
                          c.useFriction(0.3).useDuration(0.75),
                          a.start(),
                          i.add(k(u)),
                          e.preventDefault();
                      }
                      function W(e) {
                        let t = p.byDistance(0, !1).index !== h.get(),
                          n =
                            o.pointerUp(e) * (v ? P : M)[H ? "mouse" : "touch"],
                          r = (function (e, t) {
                            let n = h.add(-1 * f(e)),
                              r = p.byDistance(e, !v).distance;
                            return v || d(e) < N
                              ? r
                              : S && t
                              ? 0.5 * r
                              : p.byIndex(n.get(), 0).distance;
                          })(k(n), t),
                          i = (function (e, t) {
                            var n, r;
                            if (0 === e || 0 === t || d(e) <= d(t)) return 0;
                            let i = ((n = d(e)), (r = d(t)), d(n - r));
                            return d(i / e);
                          })(n, r);
                        (B = !1),
                          ($ = !1),
                          j.clear(),
                          c.useDuration(A - 10 * i).useFriction(0.68 + i / 50),
                          s.distance(r, !v),
                          (H = !1),
                          m.emit("pointerUp");
                      }
                      function V(e) {
                        U &&
                          (e.stopPropagation(), e.preventDefault(), (U = !1));
                      }
                      return {
                        init: function (e) {
                          C &&
                            T.add(t, "dragstart", (e) => e.preventDefault(), R)
                              .add(t, "touchmove", () => void 0, R)
                              .add(t, "touchend", () => void 0)
                              .add(t, "touchstart", a)
                              .add(t, "mousedown", a)
                              .add(t, "touchcancel", W)
                              .add(t, "contextmenu", W)
                              .add(t, "click", V, !0);
                          function a(a) {
                            (u(C) || C(e, a)) &&
                              (function (e) {
                                let a = y(e, r);
                                (H = a),
                                  (U = v && a && !e.buttons && I),
                                  (I = d(i.get() - l.get()) >= 2),
                                  (a && 0 !== e.button) ||
                                    (function (e) {
                                      let t = e.nodeName || "";
                                      return L.includes(t);
                                    })(e.target) ||
                                    (($ = !0),
                                    o.pointerDown(e),
                                    c.useFriction(0).useDuration(0),
                                    i.set(l),
                                    (function () {
                                      let e = H ? n : t;
                                      j.add(e, "touchmove", F, R)
                                        .add(e, "touchend", W)
                                        .add(e, "mousemove", F, R)
                                        .add(e, "mouseup", W);
                                    })(),
                                    (O = o.readPoint(e)),
                                    (D = o.readPoint(e, _)),
                                    m.emit("pointerDown"));
                              })(a);
                          }
                        },
                        destroy: function () {
                          T.clear(), j.clear();
                        },
                        pointerDown: function () {
                          return $;
                        },
                      };
                    })(
                      W,
                      e,
                      r,
                      i,
                      eg,
                      (function (e, t) {
                        let n, r;
                        function i(e) {
                          return e.timeStamp;
                        }
                        function o(n, r) {
                          let i = r || e.scroll,
                            o = `client${"x" === i ? "X" : "Y"}`;
                          return (y(n, t) ? n : n.touches[0])[o];
                        }
                        return {
                          pointerDown: function (e) {
                            return (n = e), (r = e), o(e);
                          },
                          pointerMove: function (e) {
                            let t = o(e) - o(r),
                              l = i(e) - i(n) > 170;
                            return (r = e), l && (n = e), t;
                          },
                          pointerUp: function (e) {
                            if (!n || !r) return 0;
                            let t = o(r) - o(n),
                              l = i(e) - i(n),
                              a = i(e) - i(r) > 170,
                              s = t / l;
                            return l && !a && d(s) > 0.1 ? s : 0;
                          },
                          readPoint: o,
                        };
                      })(W, i),
                      ep,
                      ed,
                      ew,
                      ev,
                      ey,
                      el,
                      l,
                      z,
                      j,
                      N,
                      A,
                      0,
                      $
                    ),
                    eventStore: ex,
                    percentOfView: z,
                    index: el,
                    indexPrevious: ea,
                    limit: eo,
                    location: ep,
                    offsetLocation: em,
                    previousLocation: eh,
                    options: o,
                    resizeHandler: (function (e, t, n, r, i, o, l) {
                      let a, s;
                      let c = [e].concat(r),
                        f = [],
                        p = !1;
                      function h(e) {
                        return i.measureSize(l.measure(e));
                      }
                      return {
                        init: function (i) {
                          o &&
                            ((s = h(e)),
                            (f = r.map(h)),
                            (a = new ResizeObserver((n) => {
                              (u(o) || o(i, n)) &&
                                (function (n) {
                                  for (let o of n) {
                                    if (p) return;
                                    let n = o.target === e,
                                      l = r.indexOf(o.target),
                                      a = n ? s : f[l];
                                    if (d(h(n ? e : r[l]) - a) >= 0.5) {
                                      i.reInit(), t.emit("resize");
                                      break;
                                    }
                                  }
                                })(n);
                            })),
                            n.requestAnimationFrame(() => {
                              c.forEach((e) => a.observe(e));
                            }));
                        },
                        destroy: function () {
                          (p = !0), a && a.disconnect();
                        },
                      };
                    })(t, l, i, n, W, O, U),
                    scrollBody: ev,
                    scrollBounds: (function (e, t, n, r, i) {
                      let o = i.measure(10),
                        l = i.measure(50),
                        a = b(0.1, 0.99),
                        s = !1;
                      function u() {
                        return !!(
                          !s &&
                          e.reachedAny(n.get()) &&
                          e.reachedAny(t.get())
                        );
                      }
                      return {
                        shouldConstrain: u,
                        constrain: function (i) {
                          if (!u()) return;
                          let s = e.reachedMin(t.get()) ? "min" : "max",
                            c = d(e[s] - t.get()),
                            f = n.get() - t.get(),
                            p = a.constrain(c / l);
                          n.subtract(f * p),
                            !i &&
                              d(f) < o &&
                              (n.set(e.constrain(n.get())),
                              r.useDuration(25).useBaseFriction());
                        },
                        toggleActive: function (e) {
                          s = !e;
                        },
                      };
                    })(eo, em, eg, ev, z),
                    scrollLooper: (function (e, t, n, r) {
                      let { reachedMin: i, reachedMax: o } = b(
                        t.min + 0.1,
                        t.max + 0.1
                      );
                      return {
                        loop: function (t) {
                          if (!(1 === t ? o(n.get()) : -1 === t && i(n.get())))
                            return;
                          let l = -1 * t * e;
                          r.forEach((e) => e.add(l));
                        },
                      };
                    })(et, eo, em, [ep, em, eh, eg]),
                    scrollProgress: eb,
                    scrollSnapList: ei.map(eb.get),
                    scrollSnaps: ei,
                    scrollTarget: ey,
                    scrollTo: ew,
                    slideLooper: (function (e, t, n, r, i, o, l, a, s) {
                      let u = p(i),
                        c = h(f(p(i).reverse(), l[0]), n, !1).concat(
                          h(f(u, t - l[0] - 1), -n, !0)
                        );
                      function d(e, t) {
                        return e.reduce((e, t) => e - i[t], t);
                      }
                      function f(e, t) {
                        return e.reduce(
                          (e, n) => (d(e, t) > 0 ? e.concat([n]) : e),
                          []
                        );
                      }
                      function h(i, l, u) {
                        let c = o.map((e, n) => ({
                          start: e - r[n] + 0.5 + l,
                          end: e + t - 0.5 + l,
                        }));
                        return i.map((t) => {
                          let r = u ? 0 : -n,
                            i = u ? n : 0,
                            o = c[t][u ? "end" : "start"];
                          return {
                            index: t,
                            loopPoint: o,
                            slideLocation: x(-1),
                            translate: S(e, s[t]),
                            target: () => (a.get() > o ? r : i),
                          };
                        });
                      }
                      return {
                        canLoop: function () {
                          return c.every(
                            ({ index: e }) =>
                              0.1 >=
                              d(
                                u.filter((t) => t !== e),
                                t
                              )
                          );
                        },
                        clear: function () {
                          c.forEach((e) => e.translate.clear());
                        },
                        loop: function () {
                          c.forEach((e) => {
                            let {
                                target: t,
                                translate: n,
                                slideLocation: r,
                              } = e,
                              i = t();
                            i !== r.get() && (n.to(i), r.set(i));
                          });
                        },
                        loopPoints: c,
                      };
                    })(W, V, et, Y, K, Q, ei, em, n),
                    slideFocus: eC,
                    slidesHandler:
                      ((E = !1),
                      {
                        init: function (e) {
                          D &&
                            (c = new MutationObserver((t) => {
                              !E &&
                                (u(D) || D(e, t)) &&
                                (function (t) {
                                  for (let n of t)
                                    if ("childList" === n.type) {
                                      e.reInit(), l.emit("slidesChanged");
                                      break;
                                    }
                                })(t);
                            })).observe(t, { childList: !0 });
                        },
                        destroy: function () {
                          c && c.disconnect(), (E = !0);
                        },
                      }),
                    slidesInView: eS,
                    slideIndexes: es,
                    slideRegistry: eE,
                    slidesToScroll: J,
                    target: eg,
                    translate: S(W, t),
                  };
                return e_;
              })(e, o, l, k, L, n, N);
              return n.loop && !r.slideLooper.canLoop()
                ? t(Object.assign({}, n, { loop: !1 }))
                : r;
            })(U)),
            A([B, ...H.map(({ options: e }) => e)]).forEach((e) =>
              j.add(e, "change", W)
            ),
            U.active &&
              (r.translate.to(r.location.get()),
              r.animation.init(),
              r.slidesInView.init(),
              r.slideFocus.init(X),
              r.eventHandler.init(X),
              r.resizeHandler.init(X),
              r.slidesHandler.init(X),
              r.options.loop && r.slideLooper.loop(),
              o.offsetParent && l.length && r.dragHandler.init(X),
              (i = T.init(X, H))));
        }
        function W(e, t) {
          let n = G();
          V(), F(M({ startIndex: n }, e), t), N.emit("reInit");
        }
        function V() {
          r.dragHandler.destroy(),
            r.eventStore.clear(),
            r.translate.clear(),
            r.slideLooper.clear(),
            r.resizeHandler.destroy(),
            r.slidesHandler.destroy(),
            r.slidesInView.destroy(),
            r.animation.destroy(),
            T.destroy(),
            j.clear();
        }
        function z(e, t, n) {
          U.active &&
            !$ &&
            (r.scrollBody
              .useBaseFriction()
              .useDuration(!0 === t ? 0 : U.duration),
            r.scrollTo.index(e, n || 0));
        }
        function G() {
          return r.index.get();
        }
        let X = {
          canScrollNext: function () {
            return r.index.add(1).get() !== G();
          },
          canScrollPrev: function () {
            return r.index.add(-1).get() !== G();
          },
          containerNode: function () {
            return o;
          },
          internalEngine: function () {
            return r;
          },
          destroy: function () {
            $ || (($ = !0), j.clear(), V(), N.emit("destroy"), N.clear());
          },
          off: O,
          on: I,
          emit: D,
          plugins: function () {
            return i;
          },
          previousScrollSnap: function () {
            return r.indexPrevious.get();
          },
          reInit: W,
          rootNode: function () {
            return e;
          },
          scrollNext: function (e) {
            z(r.index.add(1).get(), e, -1);
          },
          scrollPrev: function (e) {
            z(r.index.add(-1).get(), e, 1);
          },
          scrollProgress: function () {
            return r.scrollProgress.get(r.location.get());
          },
          scrollSnapList: function () {
            return r.scrollSnapList;
          },
          scrollTo: z,
          selectedScrollSnap: G,
          slideNodes: function () {
            return l;
          },
          slidesInView: function () {
            return r.slidesInView.get();
          },
          slidesNotInView: function () {
            return r.slidesInView.get(!1);
          },
        };
        return F(t, n), setTimeout(() => N.emit("init"), 0), X;
      }
      function _(e = {}, t = []) {
        let n = (0, r.useRef)(e),
          i = (0, r.useRef)(t),
          [a, s] = (0, r.useState)(),
          [u, c] = (0, r.useState)(),
          d = (0, r.useCallback)(() => {
            a && a.reInit(n.current, i.current);
          }, [a]);
        return (
          (0, r.useEffect)(() => {
            o(n.current, e) || ((n.current = e), d());
          }, [e, d]),
          (0, r.useEffect)(() => {
            !(function (e, t) {
              if (e.length !== t.length) return !1;
              let n = l(e),
                r = l(t);
              return n.every((e, t) => o(e, r[t]));
            })(i.current, t) && ((i.current = t), d());
          }, [t, d]),
          (0, r.useEffect)(() => {
            if (
              "undefined" != typeof window &&
              window.document &&
              window.document.createElement &&
              u
            ) {
              C.globalOptions = _.globalOptions;
              let e = C(u, n.current, i.current);
              return s(e), () => e.destroy();
            }
            s(void 0);
          }, [u, s]),
          [c, a]
        );
      }
      (C.globalOptions = void 0), (_.globalOptions = void 0);
    },
    39445: (e, t, n) => {
      n.d(t, { s: () => c });
      var r = n(18818),
        i = n(86678),
        o = n(12586);
      function l(e, t) {
        [...t].reverse().forEach((n) => {
          let r = e.getVariant(n);
          r && (0, i.U)(e, r),
            e.variantChildren &&
              e.variantChildren.forEach((e) => {
                l(e, t);
              });
        });
      }
      function a() {
        let e = !1,
          t = new Set(),
          n = {
            subscribe: (e) => (t.add(e), () => void t.delete(e)),
            start(n, i) {
              (0, r.V)(
                e,
                "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
              );
              let l = [];
              return (
                t.forEach((e) => {
                  l.push((0, o._)(e, n, { transitionOverride: i }));
                }),
                Promise.all(l)
              );
            },
            set: (n) => (
              (0, r.V)(
                e,
                "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
              ),
              t.forEach((e) => {
                Array.isArray(n)
                  ? l(e, n)
                  : "string" == typeof n
                  ? l(e, [n])
                  : (0, i.U)(e, n);
              })
            ),
            stop() {
              t.forEach((e) => {
                !(function (e) {
                  e.values.forEach((e) => e.stop());
                })(e);
              });
            },
            mount: () => (
              (e = !0),
              () => {
                (e = !1), n.stop();
              }
            ),
          };
        return n;
      }
      var s = n(72321),
        u = n(17530);
      let c = function () {
        let e = (0, s.M)(a);
        return (0, u.E)(e.mount, []), e;
      };
    },
    85423: (e, t, n) => {
      n.d(t, { W: () => l });
      var r = n(12115),
        i = n(51506);
      let o = { some: 0, all: 1 };
      function l(e, { root: t, margin: n, amount: a, once: s = !1 } = {}) {
        let [u, c] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (!e.current || (s && u)) return;
            let r = { root: (t && t.current) || void 0, margin: n, amount: a };
            return (function (
              e,
              t,
              { root: n, margin: r, amount: l = "some" } = {}
            ) {
              let a = (0, i.K)(e),
                s = new WeakMap(),
                u = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let n = s.get(e.target);
                      if (!!n !== e.isIntersecting) {
                        if (e.isIntersecting) {
                          let n = t(e);
                          "function" == typeof n
                            ? s.set(e.target, n)
                            : u.unobserve(e.target);
                        } else n && (n(e), s.delete(e.target));
                      }
                    });
                  },
                  {
                    root: n,
                    rootMargin: r,
                    threshold: "number" == typeof l ? l : o[l],
                  }
                );
              return a.forEach((e) => u.observe(e)), () => u.disconnect();
            })(e.current, () => (c(!0), s ? void 0 : () => c(!1)), r);
          }, [t, e, n, s, a]),
          u
        );
      }
    },
    4251: (e, t, n) => {
      let r, i;
      n.d(t, { L: () => F });
      var o = n(40007),
        l = n(72321),
        a = n(12115),
        s = n(18818),
        u = n(51506);
      let c = new WeakMap();
      function d({ target: e, contentRect: t, borderBoxSize: n }) {
        var r;
        null === (r = c.get(e)) ||
          void 0 === r ||
          r.forEach((r) => {
            r({
              target: e,
              contentSize: t,
              get size() {
                return (function (e, t) {
                  if (t) {
                    let { inlineSize: e, blockSize: n } = t[0];
                    return { width: e, height: n };
                  }
                  return e instanceof SVGElement && "getBBox" in e
                    ? e.getBBox()
                    : { width: e.offsetWidth, height: e.offsetHeight };
                })(e, n);
              },
            });
          });
      }
      function f(e) {
        e.forEach(d);
      }
      let p = new Set();
      var h = n(3078),
        m = n(39575);
      let g = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        v = () => ({ time: 0, x: g(), y: g() }),
        y = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function w(e, t, n, r) {
        let i = n[t],
          { length: o, position: l } = y[t],
          a = i.current,
          s = n.time;
        (i.current = e[`scroll${l}`]),
          (i.scrollLength = e[`scroll${o}`] - e[`client${o}`]),
          (i.offset.length = 0),
          (i.offset[0] = 0),
          (i.offset[1] = i.scrollLength),
          (i.progress = (0, h.q)(0, i.scrollLength, i.current));
        let u = r - s;
        i.velocity = u > 50 ? 0 : (0, m.f)(i.current - a, u);
      }
      let b = {
          All: [
            [0, 0],
            [1, 1],
          ],
        },
        x = { start: 0, center: 0.5, end: 1 };
      function S(e, t, n = 0) {
        let r = 0;
        if ((e in x && (e = x[e]), "string" == typeof e)) {
          let t = parseFloat(e);
          e.endsWith("px")
            ? (r = t)
            : e.endsWith("%")
            ? (e = t / 100)
            : e.endsWith("vw")
            ? (r = (t / 100) * document.documentElement.clientWidth)
            : e.endsWith("vh")
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
        }
        return "number" == typeof e && (r = t * e), n + r;
      }
      let E = [0, 0];
      var C = n(6578),
        _ = n(45885);
      let k = { x: 0, y: 0 };
      var L = n(58206);
      let R = new WeakMap(),
        T = new WeakMap(),
        j = new WeakMap(),
        N = (e) => (e === document.documentElement ? window : e);
      function M(e, { container: t = document.documentElement, ...n } = {}) {
        let o = j.get(t);
        o || ((o = new Set()), j.set(t, o));
        let l = (function (e, t, n, r = {}) {
          return {
            measure: () =>
              (function (e, t = e, n) {
                if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
                  let r = t;
                  for (; r && r !== e; )
                    (n.x.targetOffset += r.offsetLeft),
                      (n.y.targetOffset += r.offsetTop),
                      (r = r.offsetParent);
                }
                (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
                  (n.y.targetLength =
                    t === e ? t.scrollHeight : t.clientHeight),
                  (n.x.containerLength = e.clientWidth),
                  (n.y.containerLength = e.clientHeight);
              })(e, r.target, n),
            update: (t) => {
              w(e, "x", n, t),
                w(e, "y", n, t),
                (n.time = t),
                (r.offset || r.target) &&
                  (function (e, t, n) {
                    let { offset: r = b.All } = n,
                      { target: i = e, axis: o = "y" } = n,
                      l = "y" === o ? "height" : "width",
                      a =
                        i !== e
                          ? (function (e, t) {
                              let n = { x: 0, y: 0 },
                                r = e;
                              for (; r && r !== t; )
                                if (r instanceof HTMLElement)
                                  (n.x += r.offsetLeft),
                                    (n.y += r.offsetTop),
                                    (r = r.offsetParent);
                                else if ("svg" === r.tagName) {
                                  let e = r.getBoundingClientRect(),
                                    t = (r =
                                      r.parentElement).getBoundingClientRect();
                                  (n.x += e.left - t.left),
                                    (n.y += e.top - t.top);
                                } else if (r instanceof SVGGraphicsElement) {
                                  let { x: e, y: t } = r.getBBox();
                                  (n.x += e), (n.y += t);
                                  let i = null,
                                    o = r.parentNode;
                                  for (; !i; )
                                    "svg" === o.tagName && (i = o),
                                      (o = r.parentNode);
                                  r = i;
                                } else break;
                              return n;
                            })(i, e)
                          : k,
                      s =
                        i === e
                          ? { width: e.scrollWidth, height: e.scrollHeight }
                          : "getBBox" in i && "svg" !== i.tagName
                          ? i.getBBox()
                          : { width: i.clientWidth, height: i.clientHeight },
                      u = { width: e.clientWidth, height: e.clientHeight };
                    t[o].offset.length = 0;
                    let c = !t[o].interpolate,
                      d = r.length;
                    for (let e = 0; e < d; e++) {
                      let n = (function (e, t, n, r) {
                        let i = Array.isArray(e) ? e : E,
                          o = 0;
                        return (
                          "number" == typeof e
                            ? (i = [e, e])
                            : "string" == typeof e &&
                              (i = (e = e.trim()).includes(" ")
                                ? e.split(" ")
                                : [e, x[e] ? e : "0"]),
                          S(i[0], n, r) - S(i[1], t)
                        );
                      })(r[e], u[l], s[l], a[o]);
                      c || n === t[o].interpolatorOffsets[e] || (c = !0),
                        (t[o].offset[e] = n);
                    }
                    c &&
                      ((t[o].interpolate = (0, C.G)(t[o].offset, (0, _.Z)(r))),
                      (t[o].interpolatorOffsets = [...t[o].offset])),
                      (t[o].progress = t[o].interpolate(t[o].current));
                  })(e, n, r);
            },
            notify: () => t(n),
          };
        })(t, e, v(), n);
        if ((o.add(l), !R.has(t))) {
          let e = () => {
              for (let e of o) e.measure();
            },
            n = () => {
              for (let e of o) e.update(L.uv.timestamp);
            },
            l = () => {
              for (let e of o) e.notify();
            },
            a = () => {
              L.Gt.read(e, !1, !0),
                L.Gt.read(n, !1, !0),
                L.Gt.update(l, !1, !0);
            };
          R.set(t, a);
          let s = N(t);
          window.addEventListener("resize", a, { passive: !0 }),
            t !== document.documentElement &&
              T.set(
                t,
                "function" == typeof t
                  ? (p.add(t),
                    i ||
                      ((i = () => {
                        let e = {
                            width: window.innerWidth,
                            height: window.innerHeight,
                          },
                          t = { target: window, size: e, contentSize: e };
                        p.forEach((e) => e(t));
                      }),
                      window.addEventListener("resize", i)),
                    () => {
                      p.delete(t), !p.size && i && (i = void 0);
                    })
                  : (function (e, t) {
                      r ||
                        "undefined" == typeof ResizeObserver ||
                        (r = new ResizeObserver(f));
                      let n = (0, u.K)(e);
                      return (
                        n.forEach((e) => {
                          let n = c.get(e);
                          n || ((n = new Set()), c.set(e, n)),
                            n.add(t),
                            null == r || r.observe(e);
                        }),
                        () => {
                          n.forEach((e) => {
                            let n = c.get(e);
                            null == n || n.delete(t),
                              (null == n ? void 0 : n.size) ||
                                null == r ||
                                r.unobserve(e);
                          });
                        }
                      );
                    })(t, a)
              ),
            s.addEventListener("scroll", a, { passive: !0 });
        }
        let a = R.get(t);
        return (
          L.Gt.read(a, !1, !0),
          () => {
            var e;
            (0, L.WG)(a);
            let n = j.get(t);
            if (!n || (n.delete(l), n.size)) return;
            let r = R.get(t);
            R.delete(t),
              r &&
                (N(t).removeEventListener("scroll", r),
                null === (e = T.get(t)) || void 0 === e || e(),
                window.removeEventListener("resize", r));
          }
        );
      }
      function P(e, t) {
        let n;
        let r = () => {
          let { currentTime: r } = t,
            i = (null === r ? 0 : r.value) / 100;
          n !== i && e(i), (n = i);
        };
        return L.Gt.update(r, !0), () => (0, L.WG)(r);
      }
      var A = n(75487),
        I = n(90367);
      let O = new Map();
      function D({
        source: e,
        container: t = document.documentElement,
        axis: n = "y",
      } = {}) {
        e && (t = e), O.has(t) || O.set(t, {});
        let r = O.get(t);
        return (
          r[n] ||
            (r[n] = (0, A.J)()
              ? new ScrollTimeline({ source: t, axis: n })
              : (function ({ source: e, container: t, axis: n = "y" }) {
                  e && (t = e);
                  let r = { value: 0 },
                    i = M(
                      (e) => {
                        r.value = 100 * e[n].progress;
                      },
                      { container: t, axis: n }
                    );
                  return { currentTime: r, cancel: i };
                })({ source: t, axis: n })),
          r[n]
        );
      }
      function $(e) {
        return e && (e.target || e.offset);
      }
      var B = n(17530);
      function U(e, t) {
        (0, s.$)(
          !!(!t || t.current),
          `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
        );
      }
      let H = () => ({
        scrollX: (0, o.OQ)(0),
        scrollY: (0, o.OQ)(0),
        scrollXProgress: (0, o.OQ)(0),
        scrollYProgress: (0, o.OQ)(0),
      });
      function F({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
        let i = (0, l.M)(H);
        return (
          (n ? B.E : a.useEffect)(
            () => (
              U("target", t),
              U("container", e),
              (function (e, { axis: t = "y", ...n } = {}) {
                let r = { axis: t, ...n };
                return "function" == typeof e
                  ? 2 === e.length || $(r)
                    ? M((t) => {
                        e(t[r.axis].progress, t);
                      }, r)
                    : P(e, D(r))
                  : (function (e, t) {
                      if ((e.flatten(), $(t)))
                        return (
                          e.pause(),
                          M((n) => {
                            e.time = e.duration * n[t.axis].progress;
                          }, t)
                        );
                      {
                        let n = D(t);
                        return e.attachTimeline
                          ? e.attachTimeline(
                              n,
                              (e) => (
                                e.pause(),
                                P((t) => {
                                  e.time = e.duration * t;
                                }, n)
                              )
                            )
                          : I.l;
                      }
                    })(e, r);
              })(
                (e, { x: t, y: n }) => {
                  i.scrollX.set(t.current),
                    i.scrollXProgress.set(t.progress),
                    i.scrollY.set(n.current),
                    i.scrollYProgress.set(n.progress);
                },
                {
                  ...r,
                  container: (null == e ? void 0 : e.current) || void 0,
                  target: (null == t ? void 0 : t.current) || void 0,
                }
              )
            ),
            [e, t, JSON.stringify(r.offset)]
          ),
          i
        );
      }
    },
    60374: (e, t, n) => {
      n.d(t, { G: () => u });
      var r = n(6578);
      let i = (e) => e && "object" == typeof e && e.mix,
        o = (e) => (i(e) ? e.mix : void 0);
      var l = n(36807),
        a = n(72321),
        s = n(40007);
      function u(e, t, n, i) {
        if ("function" == typeof e)
          return (function (e) {
            (s.bt.current = []), e();
            let t = (0, l.j)(s.bt.current, e);
            return (s.bt.current = void 0), t;
          })(e);
        let a =
          "function" == typeof t
            ? t
            : (function (...e) {
                let t = !Array.isArray(e[0]),
                  n = t ? 0 : -1,
                  i = e[0 + n],
                  l = e[1 + n],
                  a = e[2 + n],
                  s = e[3 + n],
                  u = (0, r.G)(l, a, { mixer: o(a[0]), ...s });
                return t ? u(i) : u;
              })(t, n, i);
        return Array.isArray(e) ? c(e, a) : c([e], ([e]) => a(e));
      }
      function c(e, t) {
        let n = (0, a.M)(() => []);
        return (0, l.j)(e, () => {
          n.length = 0;
          let r = e.length;
          for (let t = 0; t < r; t++) n[t] = e[t].get();
          return t(n);
        });
      }
    },
  },
]);
//# sourceMappingURL=29-b06bab28820bd658.js.map
