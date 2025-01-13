(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [584],
  {
    57749: (t, e, n) => {
      "use strict";
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  ({}.hasOwnProperty.call(n, r) && (t[r] = n[r]));
              }
              return t;
            }).apply(null, arguments);
      }
      n.d(e, { N: () => b });
      var i = n(26994),
        o = n(12115),
        a = n(27274),
        l = Object.defineProperty,
        s = (t, e, n) =>
          e in t
            ? l(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n),
        u = (t, e, n) => (s(t, "symbol" != typeof e ? e + "" : e, n), n);
      class c {
        constructor() {
          u(this, "_listeners");
        }
        addEventListener(t, e) {
          void 0 === this._listeners && (this._listeners = {});
          let n = this._listeners;
          void 0 === n[t] && (n[t] = []),
            -1 === n[t].indexOf(e) && n[t].push(e);
        }
        hasEventListener(t, e) {
          if (void 0 === this._listeners) return !1;
          let n = this._listeners;
          return void 0 !== n[t] && -1 !== n[t].indexOf(e);
        }
        removeEventListener(t, e) {
          if (void 0 === this._listeners) return;
          let n = this._listeners[t];
          if (void 0 !== n) {
            let t = n.indexOf(e);
            -1 !== t && n.splice(t, 1);
          }
        }
        dispatchEvent(t) {
          if (void 0 === this._listeners) return;
          let e = this._listeners[t.type];
          if (void 0 !== e) {
            t.target = this;
            let n = e.slice(0);
            for (let e = 0, r = n.length; e < r; e++) n[e].call(this, t);
            t.target = null;
          }
        }
      }
      var f = Object.defineProperty,
        h = (t, e, n) =>
          e in t
            ? f(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n),
        d = (t, e, n) => (h(t, "symbol" != typeof e ? e + "" : e, n), n);
      let p = new a.Ray(),
        m = new a.Plane(),
        g = Math.cos((Math.PI / 180) * 70),
        v = (t, e) => ((t % e) + e) % e;
      class y extends c {
        constructor(t, e) {
          super(),
            d(this, "object"),
            d(this, "domElement"),
            d(this, "enabled", !0),
            d(this, "target", new a.Vector3()),
            d(this, "minDistance", 0),
            d(this, "maxDistance", 1 / 0),
            d(this, "minZoom", 0),
            d(this, "maxZoom", 1 / 0),
            d(this, "minPolarAngle", 0),
            d(this, "maxPolarAngle", Math.PI),
            d(this, "minAzimuthAngle", -1 / 0),
            d(this, "maxAzimuthAngle", 1 / 0),
            d(this, "enableDamping", !1),
            d(this, "dampingFactor", 0.05),
            d(this, "enableZoom", !0),
            d(this, "zoomSpeed", 1),
            d(this, "enableRotate", !0),
            d(this, "rotateSpeed", 1),
            d(this, "enablePan", !0),
            d(this, "panSpeed", 1),
            d(this, "screenSpacePanning", !0),
            d(this, "keyPanSpeed", 7),
            d(this, "zoomToCursor", !1),
            d(this, "autoRotate", !1),
            d(this, "autoRotateSpeed", 2),
            d(this, "reverseOrbit", !1),
            d(this, "reverseHorizontalOrbit", !1),
            d(this, "reverseVerticalOrbit", !1),
            d(this, "keys", {
              LEFT: "ArrowLeft",
              UP: "ArrowUp",
              RIGHT: "ArrowRight",
              BOTTOM: "ArrowDown",
            }),
            d(this, "mouseButtons", {
              LEFT: a.MOUSE.ROTATE,
              MIDDLE: a.MOUSE.DOLLY,
              RIGHT: a.MOUSE.PAN,
            }),
            d(this, "touches", { ONE: a.TOUCH.ROTATE, TWO: a.TOUCH.DOLLY_PAN }),
            d(this, "target0"),
            d(this, "position0"),
            d(this, "zoom0"),
            d(this, "_domElementKeyEvents", null),
            d(this, "getPolarAngle"),
            d(this, "getAzimuthalAngle"),
            d(this, "setPolarAngle"),
            d(this, "setAzimuthalAngle"),
            d(this, "getDistance"),
            d(this, "getZoomScale"),
            d(this, "listenToKeyEvents"),
            d(this, "stopListenToKeyEvents"),
            d(this, "saveState"),
            d(this, "reset"),
            d(this, "update"),
            d(this, "connect"),
            d(this, "dispose"),
            d(this, "dollyIn"),
            d(this, "dollyOut"),
            d(this, "getScale"),
            d(this, "setScale"),
            (this.object = t),
            (this.domElement = e),
            (this.target0 = this.target.clone()),
            (this.position0 = this.object.position.clone()),
            (this.zoom0 = this.object.zoom),
            (this.getPolarAngle = () => c.phi),
            (this.getAzimuthalAngle = () => c.theta),
            (this.setPolarAngle = (t) => {
              let e = v(t, 2 * Math.PI),
                r = c.phi;
              r < 0 && (r += 2 * Math.PI), e < 0 && (e += 2 * Math.PI);
              let i = Math.abs(e - r);
              2 * Math.PI - i < i &&
                (e < r ? (e += 2 * Math.PI) : (r += 2 * Math.PI)),
                (f.phi = e - r),
                n.update();
            }),
            (this.setAzimuthalAngle = (t) => {
              let e = v(t, 2 * Math.PI),
                r = c.theta;
              r < 0 && (r += 2 * Math.PI), e < 0 && (e += 2 * Math.PI);
              let i = Math.abs(e - r);
              2 * Math.PI - i < i &&
                (e < r ? (e += 2 * Math.PI) : (r += 2 * Math.PI)),
                (f.theta = e - r),
                n.update();
            }),
            (this.getDistance = () => n.object.position.distanceTo(n.target)),
            (this.listenToKeyEvents = (t) => {
              t.addEventListener("keydown", tt),
                (this._domElementKeyEvents = t);
            }),
            (this.stopListenToKeyEvents = () => {
              this._domElementKeyEvents.removeEventListener("keydown", tt),
                (this._domElementKeyEvents = null);
            }),
            (this.saveState = () => {
              n.target0.copy(n.target),
                n.position0.copy(n.object.position),
                (n.zoom0 = n.object.zoom);
            }),
            (this.reset = () => {
              n.target.copy(n.target0),
                n.object.position.copy(n.position0),
                (n.object.zoom = n.zoom0),
                n.object.updateProjectionMatrix(),
                n.dispatchEvent(r),
                n.update(),
                (s = l.NONE);
            }),
            (this.update = (() => {
              let e = new a.Vector3(),
                i = new a.Vector3(0, 1, 0),
                o = new a.Quaternion().setFromUnitVectors(t.up, i),
                d = o.clone().invert(),
                v = new a.Vector3(),
                b = new a.Quaternion(),
                x = 2 * Math.PI;
              return function () {
                let w = n.object.position;
                o.setFromUnitVectors(t.up, i),
                  d.copy(o).invert(),
                  e.copy(w).sub(n.target),
                  e.applyQuaternion(o),
                  c.setFromVector3(e),
                  n.autoRotate &&
                    s === l.NONE &&
                    C(((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed),
                  n.enableDamping
                    ? ((c.theta += f.theta * n.dampingFactor),
                      (c.phi += f.phi * n.dampingFactor))
                    : ((c.theta += f.theta), (c.phi += f.phi));
                let _ = n.minAzimuthAngle,
                  S = n.maxAzimuthAngle;
                isFinite(_) &&
                  isFinite(S) &&
                  (_ < -Math.PI ? (_ += x) : _ > Math.PI && (_ -= x),
                  S < -Math.PI ? (S += x) : S > Math.PI && (S -= x),
                  _ <= S
                    ? (c.theta = Math.max(_, Math.min(S, c.theta)))
                    : (c.theta =
                        c.theta > (_ + S) / 2
                          ? Math.max(_, c.theta)
                          : Math.min(S, c.theta))),
                  (c.phi = Math.max(
                    n.minPolarAngle,
                    Math.min(n.maxPolarAngle, c.phi)
                  )),
                  c.makeSafe(),
                  !0 === n.enableDamping
                    ? n.target.addScaledVector(y, n.dampingFactor)
                    : n.target.add(y),
                  (n.zoomToCursor && O) || n.object.isOrthographicCamera
                    ? (c.radius = D(c.radius))
                    : (c.radius = D(c.radius * h)),
                  e.setFromSpherical(c),
                  e.applyQuaternion(d),
                  w.copy(n.target).add(e),
                  n.object.matrixAutoUpdate || n.object.updateMatrix(),
                  n.object.lookAt(n.target),
                  !0 === n.enableDamping
                    ? ((f.theta *= 1 - n.dampingFactor),
                      (f.phi *= 1 - n.dampingFactor),
                      y.multiplyScalar(1 - n.dampingFactor))
                    : (f.set(0, 0, 0), y.set(0, 0, 0));
                let M = !1;
                if (n.zoomToCursor && O) {
                  let r = null;
                  if (
                    n.object instanceof a.PerspectiveCamera &&
                    n.object.isPerspectiveCamera
                  ) {
                    let t = e.length();
                    r = D(t * h);
                    let i = t - r;
                    n.object.position.addScaledVector(P, i),
                      n.object.updateMatrixWorld();
                  } else if (n.object.isOrthographicCamera) {
                    let t = new a.Vector3(T.x, T.y, 0);
                    t.unproject(n.object),
                      (n.object.zoom = Math.max(
                        n.minZoom,
                        Math.min(n.maxZoom, n.object.zoom / h)
                      )),
                      n.object.updateProjectionMatrix(),
                      (M = !0);
                    let i = new a.Vector3(T.x, T.y, 0);
                    i.unproject(n.object),
                      n.object.position.sub(i).add(t),
                      n.object.updateMatrixWorld(),
                      (r = e.length());
                  } else
                    console.warn(
                      "WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."
                    ),
                      (n.zoomToCursor = !1);
                  null !== r &&
                    (n.screenSpacePanning
                      ? n.target
                          .set(0, 0, -1)
                          .transformDirection(n.object.matrix)
                          .multiplyScalar(r)
                          .add(n.object.position)
                      : (p.origin.copy(n.object.position),
                        p.direction
                          .set(0, 0, -1)
                          .transformDirection(n.object.matrix),
                        Math.abs(n.object.up.dot(p.direction)) < g
                          ? t.lookAt(n.target)
                          : (m.setFromNormalAndCoplanarPoint(
                              n.object.up,
                              n.target
                            ),
                            p.intersectPlane(m, n.target))));
                } else
                  n.object instanceof a.OrthographicCamera &&
                    n.object.isOrthographicCamera &&
                    (M = 1 !== h) &&
                    ((n.object.zoom = Math.max(
                      n.minZoom,
                      Math.min(n.maxZoom, n.object.zoom / h)
                    )),
                    n.object.updateProjectionMatrix());
                return (
                  (h = 1),
                  (O = !1),
                  !!(
                    M ||
                    v.distanceToSquared(n.object.position) > u ||
                    8 * (1 - b.dot(n.object.quaternion)) > u
                  ) &&
                    (n.dispatchEvent(r),
                    v.copy(n.object.position),
                    b.copy(n.object.quaternion),
                    (M = !1),
                    !0)
                );
              };
            })()),
            (this.connect = (t) => {
              (n.domElement = t),
                (n.domElement.style.touchAction = "none"),
                n.domElement.addEventListener("contextmenu", te),
                n.domElement.addEventListener("pointerdown", X),
                n.domElement.addEventListener("pointercancel", Q),
                n.domElement.addEventListener("wheel", J);
            }),
            (this.dispose = () => {
              var t, e, r, i, o, a;
              n.domElement && (n.domElement.style.touchAction = "auto"),
                null == (t = n.domElement) ||
                  t.removeEventListener("contextmenu", te),
                null == (e = n.domElement) ||
                  e.removeEventListener("pointerdown", X),
                null == (r = n.domElement) ||
                  r.removeEventListener("pointercancel", Q),
                null == (i = n.domElement) || i.removeEventListener("wheel", J),
                null == (o = n.domElement) ||
                  o.ownerDocument.removeEventListener("pointermove", K),
                null == (a = n.domElement) ||
                  a.ownerDocument.removeEventListener("pointerup", Q),
                null !== n._domElementKeyEvents &&
                  n._domElementKeyEvents.removeEventListener("keydown", tt);
            });
          let n = this,
            r = { type: "change" },
            i = { type: "start" },
            o = { type: "end" },
            l = {
              NONE: -1,
              ROTATE: 0,
              DOLLY: 1,
              PAN: 2,
              TOUCH_ROTATE: 3,
              TOUCH_PAN: 4,
              TOUCH_DOLLY_PAN: 5,
              TOUCH_DOLLY_ROTATE: 6,
            },
            s = l.NONE,
            u = 1e-6,
            c = new a.Spherical(),
            f = new a.Spherical(),
            h = 1,
            y = new a.Vector3(),
            b = new a.Vector2(),
            x = new a.Vector2(),
            w = new a.Vector2(),
            _ = new a.Vector2(),
            S = new a.Vector2(),
            M = new a.Vector2(),
            A = new a.Vector2(),
            E = new a.Vector2(),
            j = new a.Vector2(),
            P = new a.Vector3(),
            T = new a.Vector2(),
            O = !1,
            k = [],
            F = {};
          function I() {
            return Math.pow(0.95, n.zoomSpeed);
          }
          function C(t) {
            n.reverseOrbit || n.reverseHorizontalOrbit
              ? (f.theta += t)
              : (f.theta -= t);
          }
          function N(t) {
            n.reverseOrbit || n.reverseVerticalOrbit
              ? (f.phi += t)
              : (f.phi -= t);
          }
          let z = (() => {
              let t = new a.Vector3();
              return function (e, n) {
                t.setFromMatrixColumn(n, 0), t.multiplyScalar(-e), y.add(t);
              };
            })(),
            R = (() => {
              let t = new a.Vector3();
              return function (e, r) {
                !0 === n.screenSpacePanning
                  ? t.setFromMatrixColumn(r, 1)
                  : (t.setFromMatrixColumn(r, 0),
                    t.crossVectors(n.object.up, t)),
                  t.multiplyScalar(e),
                  y.add(t);
              };
            })(),
            L = (() => {
              let t = new a.Vector3();
              return function (e, r) {
                let i = n.domElement;
                if (
                  i &&
                  n.object instanceof a.PerspectiveCamera &&
                  n.object.isPerspectiveCamera
                ) {
                  let o = n.object.position;
                  t.copy(o).sub(n.target);
                  let a = t.length();
                  z(
                    (2 *
                      e *
                      (a *= Math.tan(((n.object.fov / 2) * Math.PI) / 180))) /
                      i.clientHeight,
                    n.object.matrix
                  ),
                    R((2 * r * a) / i.clientHeight, n.object.matrix);
                } else
                  i &&
                  n.object instanceof a.OrthographicCamera &&
                  n.object.isOrthographicCamera
                    ? (z(
                        (e * (n.object.right - n.object.left)) /
                          n.object.zoom /
                          i.clientWidth,
                        n.object.matrix
                      ),
                      R(
                        (r * (n.object.top - n.object.bottom)) /
                          n.object.zoom /
                          i.clientHeight,
                        n.object.matrix
                      ))
                    : (console.warn(
                        "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                      ),
                      (n.enablePan = !1));
              };
            })();
          function U(t) {
            (n.object instanceof a.PerspectiveCamera &&
              n.object.isPerspectiveCamera) ||
            (n.object instanceof a.OrthographicCamera &&
              n.object.isOrthographicCamera)
              ? (h = t)
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
                ),
                (n.enableZoom = !1));
          }
          function B(t) {
            if (!n.zoomToCursor || !n.domElement) return;
            O = !0;
            let e = n.domElement.getBoundingClientRect(),
              r = t.clientX - e.left,
              i = t.clientY - e.top,
              o = e.width,
              a = e.height;
            (T.x = (r / o) * 2 - 1),
              (T.y = -((i / a) * 2) + 1),
              P.set(T.x, T.y, 1)
                .unproject(n.object)
                .sub(n.object.position)
                .normalize();
          }
          function D(t) {
            return Math.max(n.minDistance, Math.min(n.maxDistance, t));
          }
          function H(t) {
            b.set(t.clientX, t.clientY);
          }
          function q(t) {
            _.set(t.clientX, t.clientY);
          }
          function V() {
            if (1 == k.length) b.set(k[0].pageX, k[0].pageY);
            else {
              let t = 0.5 * (k[0].pageX + k[1].pageX),
                e = 0.5 * (k[0].pageY + k[1].pageY);
              b.set(t, e);
            }
          }
          function $() {
            if (1 == k.length) _.set(k[0].pageX, k[0].pageY);
            else {
              let t = 0.5 * (k[0].pageX + k[1].pageX),
                e = 0.5 * (k[0].pageY + k[1].pageY);
              _.set(t, e);
            }
          }
          function G() {
            let t = k[0].pageX - k[1].pageX,
              e = k[0].pageY - k[1].pageY,
              n = Math.sqrt(t * t + e * e);
            A.set(0, n);
          }
          function Y(t) {
            if (1 == k.length) x.set(t.pageX, t.pageY);
            else {
              let e = tr(t),
                n = 0.5 * (t.pageX + e.x),
                r = 0.5 * (t.pageY + e.y);
              x.set(n, r);
            }
            w.subVectors(x, b).multiplyScalar(n.rotateSpeed);
            let e = n.domElement;
            e &&
              (C((2 * Math.PI * w.x) / e.clientHeight),
              N((2 * Math.PI * w.y) / e.clientHeight)),
              b.copy(x);
          }
          function Z(t) {
            if (1 == k.length) S.set(t.pageX, t.pageY);
            else {
              let e = tr(t),
                n = 0.5 * (t.pageX + e.x),
                r = 0.5 * (t.pageY + e.y);
              S.set(n, r);
            }
            M.subVectors(S, _).multiplyScalar(n.panSpeed),
              L(M.x, M.y),
              _.copy(S);
          }
          function W(t) {
            var e;
            let r = tr(t),
              i = t.pageX - r.x,
              o = t.pageY - r.y,
              a = Math.sqrt(i * i + o * o);
            E.set(0, a),
              j.set(0, Math.pow(E.y / A.y, n.zoomSpeed)),
              (e = j.y),
              U(h / e),
              A.copy(E);
          }
          function X(t) {
            var e, r;
            !1 !== n.enabled &&
              (0 === k.length &&
                (null == (e = n.domElement) ||
                  e.ownerDocument.addEventListener("pointermove", K),
                null == (r = n.domElement) ||
                  r.ownerDocument.addEventListener("pointerup", Q)),
              k.push(t),
              "touch" === t.pointerType
                ? (function (t) {
                    switch ((tn(t), k.length)) {
                      case 1:
                        switch (n.touches.ONE) {
                          case a.TOUCH.ROTATE:
                            if (!1 === n.enableRotate) return;
                            V(), (s = l.TOUCH_ROTATE);
                            break;
                          case a.TOUCH.PAN:
                            if (!1 === n.enablePan) return;
                            $(), (s = l.TOUCH_PAN);
                            break;
                          default:
                            s = l.NONE;
                        }
                        break;
                      case 2:
                        switch (n.touches.TWO) {
                          case a.TOUCH.DOLLY_PAN:
                            if (!1 === n.enableZoom && !1 === n.enablePan)
                              return;
                            n.enableZoom && G(),
                              n.enablePan && $(),
                              (s = l.TOUCH_DOLLY_PAN);
                            break;
                          case a.TOUCH.DOLLY_ROTATE:
                            if (!1 === n.enableZoom && !1 === n.enableRotate)
                              return;
                            n.enableZoom && G(),
                              n.enableRotate && V(),
                              (s = l.TOUCH_DOLLY_ROTATE);
                            break;
                          default:
                            s = l.NONE;
                        }
                        break;
                      default:
                        s = l.NONE;
                    }
                    s !== l.NONE && n.dispatchEvent(i);
                  })(t)
                : (function (t) {
                    let e;
                    switch (t.button) {
                      case 0:
                        e = n.mouseButtons.LEFT;
                        break;
                      case 1:
                        e = n.mouseButtons.MIDDLE;
                        break;
                      case 2:
                        e = n.mouseButtons.RIGHT;
                        break;
                      default:
                        e = -1;
                    }
                    switch (e) {
                      case a.MOUSE.DOLLY:
                        if (!1 === n.enableZoom) return;
                        B(t), A.set(t.clientX, t.clientY), (s = l.DOLLY);
                        break;
                      case a.MOUSE.ROTATE:
                        if (t.ctrlKey || t.metaKey || t.shiftKey) {
                          if (!1 === n.enablePan) return;
                          q(t), (s = l.PAN);
                        } else {
                          if (!1 === n.enableRotate) return;
                          H(t), (s = l.ROTATE);
                        }
                        break;
                      case a.MOUSE.PAN:
                        if (t.ctrlKey || t.metaKey || t.shiftKey) {
                          if (!1 === n.enableRotate) return;
                          H(t), (s = l.ROTATE);
                        } else {
                          if (!1 === n.enablePan) return;
                          q(t), (s = l.PAN);
                        }
                        break;
                      default:
                        s = l.NONE;
                    }
                    s !== l.NONE && n.dispatchEvent(i);
                  })(t));
          }
          function K(t) {
            !1 !== n.enabled &&
              ("touch" === t.pointerType
                ? (function (t) {
                    switch ((tn(t), s)) {
                      case l.TOUCH_ROTATE:
                        if (!1 === n.enableRotate) return;
                        Y(t), n.update();
                        break;
                      case l.TOUCH_PAN:
                        if (!1 === n.enablePan) return;
                        Z(t), n.update();
                        break;
                      case l.TOUCH_DOLLY_PAN:
                        if (!1 === n.enableZoom && !1 === n.enablePan) return;
                        n.enableZoom && W(t), n.enablePan && Z(t), n.update();
                        break;
                      case l.TOUCH_DOLLY_ROTATE:
                        if (!1 === n.enableZoom && !1 === n.enableRotate)
                          return;
                        n.enableZoom && W(t),
                          n.enableRotate && Y(t),
                          n.update();
                        break;
                      default:
                        s = l.NONE;
                    }
                  })(t)
                : (function (t) {
                    if (!1 !== n.enabled)
                      switch (s) {
                        case l.ROTATE:
                          if (!1 === n.enableRotate) return;
                          !(function (t) {
                            x.set(t.clientX, t.clientY),
                              w.subVectors(x, b).multiplyScalar(n.rotateSpeed);
                            let e = n.domElement;
                            e &&
                              (C((2 * Math.PI * w.x) / e.clientHeight),
                              N((2 * Math.PI * w.y) / e.clientHeight)),
                              b.copy(x),
                              n.update();
                          })(t);
                          break;
                        case l.DOLLY:
                          var e, r;
                          if (!1 === n.enableZoom) return;
                          (E.set(t.clientX, t.clientY),
                          j.subVectors(E, A),
                          j.y > 0)
                            ? ((e = I()), U(h / e))
                            : j.y < 0 && ((r = I()), U(h * r)),
                            A.copy(E),
                            n.update();
                          break;
                        case l.PAN:
                          if (!1 === n.enablePan) return;
                          S.set(t.clientX, t.clientY),
                            M.subVectors(S, _).multiplyScalar(n.panSpeed),
                            L(M.x, M.y),
                            _.copy(S),
                            n.update();
                      }
                  })(t));
          }
          function Q(t) {
            var e, r, i;
            (function (t) {
              delete F[t.pointerId];
              for (let e = 0; e < k.length; e++)
                if (k[e].pointerId == t.pointerId) {
                  k.splice(e, 1);
                  return;
                }
            })(t),
              0 === k.length &&
                (null == (e = n.domElement) ||
                  e.releasePointerCapture(t.pointerId),
                null == (r = n.domElement) ||
                  r.ownerDocument.removeEventListener("pointermove", K),
                null == (i = n.domElement) ||
                  i.ownerDocument.removeEventListener("pointerup", Q)),
              n.dispatchEvent(o),
              (s = l.NONE);
          }
          function J(t) {
            if (
              !1 !== n.enabled &&
              !1 !== n.enableZoom &&
              (s === l.NONE || s === l.ROTATE)
            ) {
              var e, r;
              t.preventDefault(),
                n.dispatchEvent(i),
                (B(t), t.deltaY < 0)
                  ? ((e = I()), U(h * e))
                  : t.deltaY > 0 && ((r = I()), U(h / r)),
                n.update(),
                n.dispatchEvent(o);
            }
          }
          function tt(t) {
            !1 !== n.enabled &&
              !1 !== n.enablePan &&
              (function (t) {
                let e = !1;
                switch (t.code) {
                  case n.keys.UP:
                    L(0, n.keyPanSpeed), (e = !0);
                    break;
                  case n.keys.BOTTOM:
                    L(0, -n.keyPanSpeed), (e = !0);
                    break;
                  case n.keys.LEFT:
                    L(n.keyPanSpeed, 0), (e = !0);
                    break;
                  case n.keys.RIGHT:
                    L(-n.keyPanSpeed, 0), (e = !0);
                }
                e && (t.preventDefault(), n.update());
              })(t);
          }
          function te(t) {
            !1 !== n.enabled && t.preventDefault();
          }
          function tn(t) {
            let e = F[t.pointerId];
            void 0 === e && ((e = new a.Vector2()), (F[t.pointerId] = e)),
              e.set(t.pageX, t.pageY);
          }
          function tr(t) {
            return F[(t.pointerId === k[0].pointerId ? k[1] : k[0]).pointerId];
          }
          (this.dollyIn = (t = I()) => {
            U(h * t), n.update();
          }),
            (this.dollyOut = (t = I()) => {
              U(h / t), n.update();
            }),
            (this.getScale = () => h),
            (this.setScale = (t) => {
              U(t), n.update();
            }),
            (this.getZoomScale = () => I()),
            void 0 !== e && this.connect(e),
            this.update();
        }
      }
      let b = o.forwardRef((t, e) => {
        let {
            makeDefault: n,
            camera: a,
            regress: l,
            domElement: s,
            enableDamping: u = !0,
            keyEvents: c = !1,
            onChange: f,
            onStart: h,
            onEnd: d,
            ...p
          } = t,
          m = (0, i.C)((t) => t.invalidate),
          g = (0, i.C)((t) => t.camera),
          v = (0, i.C)((t) => t.gl),
          b = (0, i.C)((t) => t.events),
          x = (0, i.C)((t) => t.setEvents),
          w = (0, i.C)((t) => t.set),
          _ = (0, i.C)((t) => t.get),
          S = (0, i.C)((t) => t.performance),
          M = a || g,
          A = s || b.connected || v.domElement,
          E = o.useMemo(() => new y(M), [M]);
        return (
          (0, i.D)(() => {
            E.enabled && E.update();
          }, -1),
          o.useEffect(
            () => (
              c && E.connect(!0 === c ? A : c),
              E.connect(A),
              () => void E.dispose()
            ),
            [c, A, l, E, m]
          ),
          o.useEffect(() => {
            let t = (t) => {
                m(), l && S.regress(), f && f(t);
              },
              e = (t) => {
                h && h(t);
              },
              n = (t) => {
                d && d(t);
              };
            return (
              E.addEventListener("change", t),
              E.addEventListener("start", e),
              E.addEventListener("end", n),
              () => {
                E.removeEventListener("start", e),
                  E.removeEventListener("end", n),
                  E.removeEventListener("change", t);
              }
            );
          }, [f, h, d, E, m, x]),
          o.useEffect(() => {
            if (n) {
              let t = _().controls;
              return w({ controls: E }), () => w({ controls: t });
            }
          }, [n, E]),
          o.createElement(
            "primitive",
            r({ ref: e, object: E, enableDamping: u }, p)
          )
        );
      });
    },
    26994: (t, e, n) => {
      "use strict";
      let r, i, o, a, l;
      n.d(e, {
        B: () => ti,
        C: () => tO,
        D: () => tk,
        E: () => to,
        a: () => tn,
        b: () => te,
        c: () => tU,
        d: () => tD,
        e: () => R,
        f: () => t0,
        i: () => tt,
        u: () => tr,
      });
      var s,
        u,
        c = n(27274),
        f = n(12115),
        h = n(26188),
        d = n(18010);
      let p = (t) => {
          let e;
          let n = new Set(),
            r = (t, r) => {
              let i = "function" == typeof t ? t(e) : t;
              if (!Object.is(i, e)) {
                let t = e;
                (e = (null != r ? r : "object" != typeof i || null === i)
                  ? i
                  : Object.assign({}, e, i)),
                  n.forEach((n) => n(e, t));
              }
            },
            i = () => e,
            o = {
              setState: r,
              getState: i,
              getInitialState: () => a,
              subscribe: (t) => (n.add(t), () => n.delete(t)),
              destroy: () => {
                console.warn(
                  "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
                ),
                  n.clear();
              },
            },
            a = (e = t(r, i, o));
          return o;
        },
        m = (t) => (t ? p(t) : p),
        { useDebugValue: g } = f,
        { useSyncExternalStoreWithSelector: v } = d,
        y = (t) => t,
        b = (t, e) => {
          let n = m(t),
            r = (t, r = e) =>
              (function (t, e = y, n) {
                let r = v(
                  t.subscribe,
                  t.getState,
                  t.getServerState || t.getInitialState,
                  e,
                  n
                );
                return g(r), r;
              })(n, t, r);
          return Object.assign(r, n), r;
        },
        x = (t, e) => (t ? b(t, e) : b),
        w = (t) => "object" == typeof t && "function" == typeof t.then,
        _ = [];
      function S(t, e, n = (t, e) => t === e) {
        if (t === e) return !0;
        if (!t || !e) return !1;
        let r = t.length;
        if (e.length !== r) return !1;
        for (let i = 0; i < r; i++) if (!n(t[i], e[i])) return !1;
        return !0;
      }
      function M(t, e = null, n = !1, r = {}) {
        for (let i of (null === e && (e = [t]), _))
          if (S(e, i.keys, i.equal)) {
            if (n) return;
            if (Object.prototype.hasOwnProperty.call(i, "error")) throw i.error;
            if (Object.prototype.hasOwnProperty.call(i, "response"))
              return (
                r.lifespan &&
                  r.lifespan > 0 &&
                  (i.timeout && clearTimeout(i.timeout),
                  (i.timeout = setTimeout(i.remove, r.lifespan))),
                i.response
              );
            if (!n) throw i.promise;
          }
        let i = {
          keys: e,
          equal: r.equal,
          remove: () => {
            let t = _.indexOf(i);
            -1 !== t && _.splice(t, 1);
          },
          promise: (w(t) ? t : t(...e))
            .then((t) => {
              (i.response = t),
                r.lifespan &&
                  r.lifespan > 0 &&
                  (i.timeout = setTimeout(i.remove, r.lifespan));
            })
            .catch((t) => (i.error = t)),
        };
        if ((_.push(i), !n)) throw i.promise;
      }
      let A = (t, e, n) => M(t, e, !1, n),
        E = (t, e, n) => void M(t, e, !0, n),
        j = (t) => {
          if (void 0 === t || 0 === t.length) _.splice(0, _.length);
          else {
            let e = _.find((e) => S(t, e.keys, e.equal));
            e && e.remove();
          }
        };
      var P = n(95155),
        T = n(42353),
        O = n(5193),
        k = n.n(O),
        F = n(39084);
      n(2818);
      let I = k(),
        C = {},
        N = 0,
        z = (t) => "function" == typeof t;
      function R(t) {
        if (z(t)) {
          let e = "".concat(N++);
          return (C[e] = t), e;
        }
        Object.assign(C, t);
      }
      function L(t, e) {
        let n = "".concat(t[0].toUpperCase()).concat(t.slice(1)),
          r = C[n];
        if ("primitive" !== t && !r)
          throw Error(
            "R3F: ".concat(
              n,
              " is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively"
            )
          );
        if ("primitive" === t && !e.object)
          throw Error("R3F: Primitives without 'object' are invalid!");
        if (void 0 !== e.args && !Array.isArray(e.args))
          throw Error("R3F: The args prop must be an array!");
      }
      function U(t) {
        if (t.isHidden) {
          var e;
          t.props.attach && null != (e = t.parent) && e.object
            ? td(t.parent, t)
            : tS(t.object) && !1 !== t.props.visible && (t.object.visible = !0),
            (t.isHidden = !1),
            t_(t);
        }
      }
      function B(t, e, n) {
        let r = e.root.getState();
        if (t.parent || t.object === r.scene) {
          if (!e.object) {
            var i, o;
            let t =
              C["".concat(e.type[0].toUpperCase()).concat(e.type.slice(1))];
            (e.object =
              null != (i = e.props.object)
                ? i
                : new t(...(null != (o = e.props.args) ? o : []))),
              (e.object.__r3f = e),
              tw(e.object, e.props);
          }
          if (e.props.attach) td(t, e);
          else if (tS(e.object) && tS(t.object)) {
            let r = t.object.children.indexOf(null == n ? void 0 : n.object);
            n && -1 !== r
              ? ((e.object.parent = t.object),
                t.object.children.splice(r, 0, e.object),
                e.object.dispatchEvent({ type: "added" }),
                t.object.dispatchEvent({ type: "childadded", child: e.object }))
              : t.object.add(e.object);
          }
          for (let t of e.children) B(e, t);
          t_(e);
        }
      }
      function D(t, e) {
        e && ((e.parent = t), t.children.push(e), B(t, e));
      }
      function H(t, e, n) {
        if (!e || !n) return;
        e.parent = t;
        let r = t.children.indexOf(n);
        -1 !== r ? t.children.splice(r, 0, e) : t.children.push(e), B(t, e, n);
      }
      function q(t) {
        if ("function" == typeof t.dispose) {
          let e = () => {
            try {
              t.dispose();
            } catch (t) {}
          };
          "undefined" != typeof IS_REACT_ACT_ENVIRONMENT
            ? e()
            : (0, F.unstable_scheduleCallback)(F.unstable_IdlePriority, e);
        }
      }
      function V(t, e, n) {
        if (!e) return;
        e.parent = null;
        let r = t.children.indexOf(e);
        -1 !== r && t.children.splice(r, 1),
          e.props.attach
            ? tp(t, e)
            : tS(e.object) &&
              tS(t.object) &&
              (t.object.remove(e.object),
              (function (t, e) {
                let { internal: n } = t.getState();
                (n.interaction = n.interaction.filter((t) => t !== e)),
                  (n.initialHits = n.initialHits.filter((t) => t !== e)),
                  n.hovered.forEach((t, r) => {
                    (t.eventObject === e || t.object === e) &&
                      n.hovered.delete(r);
                  }),
                  n.capturedMap.forEach((t, r) => {
                    tA(n.capturedMap, e, t, r);
                  });
              })(X(e), e.object));
        let i = null !== e.props.dispose && !1 !== n;
        for (let t = e.children.length - 1; t >= 0; t--) {
          let n = e.children[t];
          V(e, n, i);
        }
        (e.children.length = 0),
          delete e.object.__r3f,
          i &&
            "primitive" !== e.type &&
            "Scene" !== e.object.type &&
            q(e.object),
          void 0 === n && t_(e);
      }
      let $ = [],
        G = () => {},
        Y = {},
        Z = h.NoEventPriority,
        W = I({
          isPrimaryRenderer: !1,
          warnsIfNotActing: !1,
          supportsMutation: !0,
          supportsPersistence: !1,
          supportsHydration: !1,
          createInstance: function (t, e, n) {
            var r;
            return (
              L(t, e),
              "primitive" === t &&
                null != (r = e.object) &&
                r.__r3f &&
                delete e.object.__r3f,
              tc(e.object, n, t, e)
            );
          },
          removeChild: V,
          appendChild: D,
          appendInitialChild: D,
          insertBefore: H,
          appendChildToContainer(t, e) {
            let n = t.getState().scene.__r3f;
            e && n && D(n, e);
          },
          removeChildFromContainer(t, e) {
            let n = t.getState().scene.__r3f;
            e && n && V(n, e);
          },
          insertInContainerBefore(t, e, n) {
            let r = t.getState().scene.__r3f;
            e && n && r && H(r, e, n);
          },
          getRootHostContext: () => Y,
          getChildHostContext: () => Y,
          commitUpdate(t, e, n, r, i) {
            var o, a, l;
            L(e, r);
            let s = !1;
            if (
              ("primitive" === t.type && n.object !== r.object
                ? (s = !0)
                : (null == (o = r.args) ? void 0 : o.length) !==
                  (null == (a = n.args) ? void 0 : a.length)
                ? (s = !0)
                : null != (l = r.args) &&
                  l.some((t, e) => {
                    var r;
                    return t !== (null == (r = n.args) ? void 0 : r[e]);
                  }) &&
                  (s = !0),
              s)
            )
              $.push([t, { ...r }, i]);
            else {
              let e = (function (t, e) {
                let n = {};
                for (let r in e)
                  if (!tm.includes(r) && !ts.equ(e[r], t.props[r]))
                    for (let t in ((n[r] = e[r]), e))
                      t.startsWith("".concat(r, "-")) && (n[t] = e[t]);
                for (let r in t.props) {
                  if (tm.includes(r) || e.hasOwnProperty(r)) continue;
                  let { root: i, key: o } = tf(t.object, r);
                  if (i.constructor && 0 === i.constructor.length) {
                    let t = tg.get(i.constructor);
                    t || ((t = new i.constructor()), tg.set(i.constructor, t)),
                      (n[o] = t[o]);
                  } else n[o] = 0;
                }
                return n;
              })(t, r);
              Object.keys(e).length &&
                (Object.assign(t.props, e), tw(t.object, e));
            }
            (null === i.sibling || (4 & i.flags) == 0) &&
              (function () {
                for (let [t] of $) {
                  let e = t.parent;
                  if (e)
                    for (let n of (t.props.attach
                      ? tp(e, t)
                      : tS(t.object) &&
                        tS(e.object) &&
                        e.object.remove(t.object),
                    t.children))
                      n.props.attach
                        ? tp(t, n)
                        : tS(n.object) &&
                          tS(t.object) &&
                          t.object.remove(n.object);
                  t.isHidden && U(t),
                    t.object.__r3f && delete t.object.__r3f,
                    "primitive" !== t.type && q(t.object);
                }
                for (let [n, r, i] of $) {
                  n.props = r;
                  let o = n.parent;
                  if (o) {
                    var t, e;
                    let r =
                      C[
                        ""
                          .concat(n.type[0].toUpperCase())
                          .concat(n.type.slice(1))
                      ];
                    for (let a of ((n.object =
                      null != (t = n.props.object)
                        ? t
                        : new r(...(null != (e = n.props.args) ? e : []))),
                    (n.object.__r3f = n),
                    !(function (t, e) {
                      for (let n of [t, t.alternate])
                        if (null !== n) {
                          if ("function" == typeof n.ref) {
                            null == n.refCleanup || n.refCleanup();
                            let t = n.ref(e);
                            "function" == typeof t && (n.refCleanup = t);
                          } else n.ref && (n.ref.current = e);
                        }
                    })(i, n.object),
                    tw(n.object, n.props),
                    n.props.attach
                      ? td(o, n)
                      : tS(n.object) && tS(o.object) && o.object.add(n.object),
                    n.children))
                      a.props.attach
                        ? td(n, a)
                        : tS(a.object) &&
                          tS(n.object) &&
                          n.object.add(a.object);
                    t_(n);
                  }
                }
                $.length = 0;
              })();
          },
          finalizeInitialChildren: () => !1,
          commitMount() {},
          getPublicInstance: (t) => (null == t ? void 0 : t.object),
          prepareForCommit: () => null,
          preparePortalMount: (t) => tc(t.getState().scene, t, "", {}),
          resetAfterCommit: () => {},
          shouldSetTextContent: () => !1,
          clearContainer: () => !1,
          hideInstance: function (t) {
            if (!t.isHidden) {
              var e;
              t.props.attach && null != (e = t.parent) && e.object
                ? tp(t.parent, t)
                : tS(t.object) && (t.object.visible = !1),
                (t.isHidden = !0),
                t_(t);
            }
          },
          unhideInstance: U,
          createTextInstance: G,
          hideTextInstance: G,
          unhideTextInstance: G,
          scheduleTimeout:
            "function" == typeof setTimeout ? setTimeout : void 0,
          cancelTimeout:
            "function" == typeof clearTimeout ? clearTimeout : void 0,
          noTimeout: -1,
          getInstanceFromNode: () => null,
          beforeActiveInstanceBlur() {},
          afterActiveInstanceBlur() {},
          detachDeletedInstance() {},
          prepareScopeUpdate() {},
          getInstanceFromScope: () => null,
          shouldAttemptEagerTransition: () => !1,
          trackSchedulerEvent: () => {},
          resolveEventType: () => null,
          resolveEventTimeStamp: () => -1.1,
          requestPostPaintCallback() {},
          maySuspendCommit: () => !1,
          preloadInstance: () => !0,
          startSuspendingCommit() {},
          suspendInstance() {},
          waitForCommitToBeReady: () => null,
          NotPendingTransition: null,
          setCurrentUpdatePriority(t) {
            Z = t;
          },
          getCurrentUpdatePriority: () => Z,
          resolveUpdatePriority() {
            var t;
            if (Z !== h.NoEventPriority) return Z;
            switch (
              "undefined" != typeof window &&
              (null == (t = window.event) ? void 0 : t.type)
            ) {
              case "click":
              case "contextmenu":
              case "dblclick":
              case "pointercancel":
              case "pointerdown":
              case "pointerup":
                return h.DiscreteEventPriority;
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerenter":
              case "pointerleave":
              case "wheel":
                return h.ContinuousEventPriority;
              default:
                return h.DefaultEventPriority;
            }
          },
          resetFormInstance() {},
        });
      function X(t) {
        let e = t.root;
        for (; e.getState().previousRoot; ) e = e.getState().previousRoot;
        return e;
      }
      let K = (t) => "colorSpace" in t || "outputColorSpace" in t,
        Q = () => {
          var t;
          return null != (t = C.ColorManagement) ? t : null;
        };
      f.act;
      let J = (t) => t && t.isOrthographicCamera,
        tt = (t) => t && t.hasOwnProperty("current"),
        te =
          "undefined" != typeof window &&
          ((null != (s = window.document) && s.createElement) ||
            (null == (u = window.navigator) ? void 0 : u.product) ===
              "ReactNative")
            ? f.useLayoutEffect
            : f.useEffect;
      function tn(t) {
        let e = f.useRef(t);
        return te(() => void (e.current = t), [t]), e;
      }
      function tr() {
        let t = (0, T.u5)(),
          e = (0, T.y3)();
        return f.useMemo(
          () => (n) => {
            let { children: r } = n,
              i = (0, T.Nz)(t, !0, (t) => t.type === f.StrictMode)
                ? f.StrictMode
                : f.Fragment;
            return (0, P.jsx)(i, { children: (0, P.jsx)(e, { children: r }) });
          },
          [t, e]
        );
      }
      function ti(t) {
        let { set: e } = t;
        return te(() => (e(new Promise(() => null)), () => e(!1)), [e]), null;
      }
      class to extends f.Component {
        componentDidCatch(t) {
          this.props.set(t);
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
        constructor(...t) {
          super(...t), (this.state = { error: !1 });
        }
      }
      function ta(t) {
        var e;
        let n =
          "undefined" != typeof window
            ? null != (e = window.devicePixelRatio)
              ? e
              : 2
            : 1;
        return Array.isArray(t) ? Math.min(Math.max(t[0], n), t[1]) : t;
      }
      function tl(t) {
        var e;
        return null == (e = t.__r3f) ? void 0 : e.root.getState();
      }
      to.getDerivedStateFromError = () => ({ error: !0 });
      let ts = {
          obj: (t) => t === Object(t) && !ts.arr(t) && "function" != typeof t,
          fun: (t) => "function" == typeof t,
          str: (t) => "string" == typeof t,
          num: (t) => "number" == typeof t,
          boo: (t) => "boolean" == typeof t,
          und: (t) => void 0 === t,
          arr: (t) => Array.isArray(t),
          equ(t, e) {
            let n,
              {
                arrays: r = "shallow",
                objects: i = "reference",
                strict: o = !0,
              } = arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            if (typeof t != typeof e || !!t != !!e) return !1;
            if (ts.str(t) || ts.num(t) || ts.boo(t)) return t === e;
            let a = ts.obj(t);
            if (a && "reference" === i) return t === e;
            let l = ts.arr(t);
            if (l && "reference" === r) return t === e;
            if ((l || a) && t === e) return !0;
            for (n in t) if (!(n in e)) return !1;
            if (a && "shallow" === r && "shallow" === i) {
              for (n in o ? e : t)
                if (!ts.equ(t[n], e[n], { strict: o, objects: "reference" }))
                  return !1;
            } else for (n in o ? e : t) if (t[n] !== e[n]) return !1;
            if (ts.und(n)) {
              if (
                (l && 0 === t.length && 0 === e.length) ||
                (a &&
                  0 === Object.keys(t).length &&
                  0 === Object.keys(e).length)
              )
                return !0;
              if (t !== e) return !1;
            }
            return !0;
          },
        },
        tu = ["children", "key", "ref"];
      function tc(t, e, n, r) {
        let i = null == t ? void 0 : t.__r3f;
        return (
          !i &&
            ((i = {
              root: e,
              type: n,
              parent: null,
              children: [],
              props: (function (t) {
                let e = {};
                for (let n in t) tu.includes(n) || (e[n] = t[n]);
                return e;
              })(r),
              object: t,
              eventCount: 0,
              handlers: {},
              isHidden: !1,
            }),
            t && ((t.__r3f = i), n && tw(t, i.props))),
          i
        );
      }
      function tf(t, e) {
        var n;
        let r = t[e];
        if (!e.includes("-")) return { root: t, key: e, target: r };
        let i = e.split("-");
        return (
          (r = i.reduce((t, e) => t[e], t)),
          (e = i.pop()),
          (null != (n = r) && n.set) || (t = i.reduce((t, e) => t[e], t)),
          { root: t, key: e, target: r }
        );
      }
      let th = /-\d+$/;
      function td(t, e) {
        if (ts.str(e.props.attach)) {
          if (th.test(e.props.attach)) {
            let n = e.props.attach.replace(th, ""),
              { root: r, key: i } = tf(t.object, n);
            Array.isArray(r[i]) || (r[i] = []);
          }
          let { root: n, key: r } = tf(t.object, e.props.attach);
          (e.previousAttach = n[r]), (n[r] = e.object);
        } else
          ts.fun(e.props.attach) &&
            (e.previousAttach = e.props.attach(t.object, e.object));
      }
      function tp(t, e) {
        if (ts.str(e.props.attach)) {
          let { root: n, key: r } = tf(t.object, e.props.attach),
            i = e.previousAttach;
          void 0 === i ? delete n[r] : (n[r] = i);
        } else null == e.previousAttach || e.previousAttach(t.object, e.object);
        delete e.previousAttach;
      }
      let tm = [
          ...tu,
          "args",
          "dispose",
          "attach",
          "object",
          "onUpdate",
          "dispose",
        ],
        tg = new Map(),
        tv = "srgb",
        ty = "srgb-linear",
        tb = [
          "map",
          "emissiveMap",
          "sheenTintMap",
          "sheenColorMap",
          "specularTintMap",
          "specularColorMap",
          "envMap",
        ],
        tx = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
      function tw(t, e) {
        let n = t.__r3f,
          r = n && X(n).getState(),
          i = null == n ? void 0 : n.eventCount;
        for (let i in e) {
          let o = e[i];
          if (
            tm.includes(i) ||
            (n &&
              tx.test(i) &&
              ("function" == typeof o
                ? (n.handlers[i] = o)
                : delete n.handlers[i],
              (n.eventCount = Object.keys(n.handlers).length)),
            void 0 === o)
          )
            continue;
          let { root: a, key: l, target: s } = tf(t, i);
          if (
            (K(a) &&
              ("encoding" === l
                ? ((l = "colorSpace"), (o = 3001 === o ? tv : ty))
                : "outputEncoding" === l &&
                  ((l = "outputColorSpace"), (o = 3001 === o ? tv : ty))),
            "function" == typeof (null == s ? void 0 : s.copy) &&
              s.copy === o.copy)
          )
            s.copy(o);
          else if (s instanceof c.Layers && o instanceof c.Layers)
            s.mask = o.mask;
          else if (null != s && s.set && Array.isArray(o))
            s.fromArray ? s.fromArray(o) : s.set(...o);
          else if (null != s && s.set && "object" != typeof o) {
            let t = s instanceof c.Color;
            !t && s.setScalar && "number" == typeof o
              ? s.setScalar(o)
              : s.set(o),
              Q() || (null != r && r.linear) || !t || s.convertSRGBToLinear();
          } else
            (a[l] = o),
              r &&
                !r.linear &&
                tb.includes(l) &&
                a[l] instanceof c.Texture &&
                a[l].format === c.RGBAFormat &&
                a[l].type === c.UnsignedByteType &&
                (K(a[l]) ? (a[l].colorSpace = "srgb") : (a[l].encoding = 3001));
        }
        if (
          null != n &&
          n.parent &&
          null != r &&
          r.internal &&
          n.object instanceof c.Object3D &&
          i !== n.eventCount
        ) {
          let t = r.internal.interaction.indexOf(n.object);
          t > -1 && r.internal.interaction.splice(t, 1),
            n.eventCount &&
              null !== n.object.raycast &&
              n.object instanceof c.Object3D &&
              r.internal.interaction.push(n.object);
        }
        return (
          n &&
            void 0 === n.props.attach &&
            (n.object instanceof c.BufferGeometry
              ? (n.props.attach = "geometry")
              : n.object instanceof c.Material &&
                (n.props.attach = "material")),
          n && t_(n),
          t
        );
      }
      function t_(t) {
        var e;
        if (!t.parent) return;
        null == t.props.onUpdate || t.props.onUpdate(t.object);
        let n =
          null == (e = t.root)
            ? void 0
            : null == e.getState
            ? void 0
            : e.getState();
        n && 0 === n.internal.frames && n.invalidate();
      }
      let tS = (t) => (null == t ? void 0 : t.isObject3D);
      function tM(t) {
        return (t.eventObject || t.object).uuid + "/" + t.index + t.instanceId;
      }
      function tA(t, e, n, r) {
        let i = n.get(e);
        i &&
          (n.delete(e),
          0 === n.size && (t.delete(r), i.target.releasePointerCapture(r)));
      }
      let tE = (t) => !!(null != t && t.render),
        tj = f.createContext(null),
        tP = (t, e) => {
          let n = x((n, r) => {
              let i;
              let o = new c.Vector3(),
                a = new c.Vector3(),
                l = new c.Vector3();
              function s() {
                let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : r().camera,
                  e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : a,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : r().size,
                  { width: i, height: s, top: u, left: f } = n,
                  h = i / s;
                e instanceof c.Vector3 ? l.copy(e) : l.set(...e);
                let d = t.getWorldPosition(o).distanceTo(l);
                if (J(t))
                  return {
                    width: i / t.zoom,
                    height: s / t.zoom,
                    top: u,
                    left: f,
                    factor: 1,
                    distance: d,
                    aspect: h,
                  };
                {
                  let e = 2 * Math.tan((t.fov * Math.PI) / 180 / 2) * d,
                    n = (i / s) * e;
                  return {
                    width: n,
                    height: e,
                    top: u,
                    left: f,
                    factor: i / n,
                    distance: d,
                    aspect: h,
                  };
                }
              }
              let u = (t) =>
                  n((e) => ({ performance: { ...e.performance, current: t } })),
                h = new c.Vector2();
              return {
                set: n,
                get: r,
                gl: null,
                camera: null,
                raycaster: null,
                events: { priority: 1, enabled: !0, connected: !1 },
                scene: null,
                xr: null,
                invalidate: function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1;
                  return t(r(), e);
                },
                advance: (t, n) => e(t, n, r()),
                legacy: !1,
                linear: !1,
                flat: !1,
                controls: null,
                clock: new c.Clock(),
                pointer: h,
                mouse: h,
                frameloop: "always",
                onPointerMissed: void 0,
                performance: {
                  current: 1,
                  min: 0.5,
                  max: 1,
                  debounce: 200,
                  regress: () => {
                    let t = r();
                    i && clearTimeout(i),
                      t.performance.current !== t.performance.min &&
                        u(t.performance.min),
                      (i = setTimeout(
                        () => u(r().performance.max),
                        t.performance.debounce
                      ));
                  },
                },
                size: { width: 0, height: 0, top: 0, left: 0 },
                viewport: {
                  initialDpr: 0,
                  dpr: 0,
                  width: 0,
                  height: 0,
                  top: 0,
                  left: 0,
                  aspect: 0,
                  distance: 0,
                  factor: 0,
                  getCurrentViewport: s,
                },
                setEvents: (t) =>
                  n((e) => ({ ...e, events: { ...e.events, ...t } })),
                setSize: function (t, e) {
                  let i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0,
                    o =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : 0,
                    l = r().camera,
                    u = { width: t, height: e, top: i, left: o };
                  n((t) => ({
                    size: u,
                    viewport: { ...t.viewport, ...s(l, a, u) },
                  }));
                },
                setDpr: (t) =>
                  n((e) => {
                    let n = ta(t);
                    return {
                      viewport: {
                        ...e.viewport,
                        dpr: n,
                        initialDpr: e.viewport.initialDpr || n,
                      },
                    };
                  }),
                setFrameloop: function () {
                  let t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "always",
                    e = r().clock;
                  e.stop(),
                    (e.elapsedTime = 0),
                    "never" !== t && (e.start(), (e.elapsedTime = 0)),
                    n(() => ({ frameloop: t }));
                },
                previousRoot: void 0,
                internal: {
                  interaction: [],
                  hovered: new Map(),
                  subscribers: [],
                  initialClick: [0, 0],
                  initialHits: [],
                  capturedMap: new Map(),
                  lastEvent: f.createRef(),
                  active: !1,
                  frames: 0,
                  priority: 0,
                  subscribe: (t, e, n) => {
                    let i = r().internal;
                    return (
                      (i.priority = i.priority + (e > 0 ? 1 : 0)),
                      i.subscribers.push({ ref: t, priority: e, store: n }),
                      (i.subscribers = i.subscribers.sort(
                        (t, e) => t.priority - e.priority
                      )),
                      () => {
                        let n = r().internal;
                        null != n &&
                          n.subscribers &&
                          ((n.priority = n.priority - (e > 0 ? 1 : 0)),
                          (n.subscribers = n.subscribers.filter(
                            (e) => e.ref !== t
                          )));
                      }
                    );
                  },
                },
              };
            }),
            r = n.getState(),
            i = r.size,
            o = r.viewport.dpr,
            a = r.camera;
          return (
            n.subscribe(() => {
              let {
                camera: t,
                size: e,
                viewport: r,
                gl: l,
                set: s,
              } = n.getState();
              if (e.width !== i.width || e.height !== i.height || r.dpr !== o) {
                (i = e),
                  (o = r.dpr),
                  (function (t, e) {
                    t.manual ||
                      (J(t)
                        ? ((t.left = -(e.width / 2)),
                          (t.right = e.width / 2),
                          (t.top = e.height / 2),
                          (t.bottom = -(e.height / 2)))
                        : (t.aspect = e.width / e.height),
                      t.updateProjectionMatrix());
                  })(t, e),
                  l.setPixelRatio(r.dpr);
                let n =
                  "undefined" != typeof HTMLCanvasElement &&
                  l.domElement instanceof HTMLCanvasElement;
                l.setSize(e.width, e.height, n);
              }
              t !== a &&
                ((a = t),
                s((e) => ({
                  viewport: {
                    ...e.viewport,
                    ...e.viewport.getCurrentViewport(t),
                  },
                })));
            }),
            n.subscribe((e) => t(e)),
            n
          );
        };
      function tT() {
        let t = f.useContext(tj);
        if (!t)
          throw Error(
            "R3F: Hooks can only be used within the Canvas component!"
          );
        return t;
      }
      function tO() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : (t) => t,
          e = arguments.length > 1 ? arguments[1] : void 0;
        return tT()(t, e);
      }
      function tk(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = tT(),
          r = n.getState().internal.subscribe,
          i = tn(t);
        return te(() => r(i, e, n), [e, r, n]), null;
      }
      let tF = new WeakMap(),
        tI = (t) => {
          var e;
          return (
            "function" == typeof t &&
            (null == t
              ? void 0
              : null == (e = t.prototype)
              ? void 0
              : e.constructor) === t
          );
        };
      function tC(t, e) {
        return async function (n) {
          let r;
          for (
            var i = arguments.length, o = Array(i > 1 ? i - 1 : 0), a = 1;
            a < i;
            a++
          )
            o[a - 1] = arguments[a];
          return (
            tI(n) ? (r = tF.get(n)) || ((r = new n()), tF.set(n, r)) : (r = n),
            t && t(r),
            Promise.all(
              o.map(
                (t) =>
                  new Promise((n, i) =>
                    r.load(
                      t,
                      (t) =>
                        n(
                          tS(null == t ? void 0 : t.scene)
                            ? Object.assign(
                                t,
                                (function (t) {
                                  let e = { nodes: {}, materials: {} };
                                  return (
                                    t &&
                                      t.traverse((t) => {
                                        t.name && (e.nodes[t.name] = t),
                                          t.material &&
                                            !e.materials[t.material.name] &&
                                            (e.materials[t.material.name] =
                                              t.material);
                                      }),
                                    e
                                  );
                                })(t.scene)
                              )
                            : t
                        ),
                      e,
                      (e) =>
                        i(
                          Error(
                            "Could not load "
                              .concat(t, ": ")
                              .concat(null == e ? void 0 : e.message)
                          )
                        )
                    )
                  )
              )
            )
          );
        };
      }
      function tN(t, e, n, r) {
        let i = Array.isArray(e) ? e : [e],
          o = A(tC(n, r), [t, ...i], { equal: ts.equ });
        return Array.isArray(e) ? o : o[0];
      }
      (tN.preload = function (t, e, n) {
        let r = Array.isArray(e) ? e : [e];
        return E(tC(n), [t, ...r]);
      }),
        (tN.clear = function (t, e) {
          return j([t, ...(Array.isArray(e) ? e : [e])]);
        });
      let tz = new Map(),
        tR = { objects: "shallow", strict: !1 },
        tL = (t, e) => {
          let n = "function" == typeof t ? t(e) : t;
          return tE(n)
            ? n
            : new c.WebGLRenderer({
                powerPreference: "high-performance",
                canvas: e,
                antialias: !0,
                alpha: !0,
                ...t,
              });
        };
      function tU(t) {
        let e, n;
        let r = tz.get(t),
          i = null == r ? void 0 : r.fiber,
          o = null == r ? void 0 : r.store;
        r && console.warn("R3F.createRoot should only be called once!");
        let a = "function" == typeof reportError ? reportError : console.error,
          l = o || tP(tK, tQ),
          s =
            i ||
            W.createContainer(
              l,
              h.ConcurrentRoot,
              null,
              !1,
              null,
              "",
              a,
              a,
              a,
              null
            );
        r || tz.set(t, { fiber: s, store: l });
        let u = !1;
        return {
          configure() {
            let r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              {
                gl: i,
                size: o,
                scene: a,
                events: s,
                onCreated: f,
                shadows: h = !1,
                linear: d = !1,
                flat: p = !1,
                legacy: m = !1,
                orthographic: g = !1,
                frameloop: v = "always",
                dpr: y = [1, 2],
                performance: b,
                raycaster: x,
                camera: w,
                onPointerMissed: _,
              } = r,
              S = l.getState(),
              M = S.gl;
            S.gl || S.set({ gl: (M = tL(i, t)) });
            let A = S.raycaster;
            A || S.set({ raycaster: (A = new c.Raycaster()) });
            let { params: E, ...j } = x || {};
            if (
              (ts.equ(j, A, tR) || tw(A, { ...j }),
              ts.equ(E, A.params, tR) ||
                tw(A, { params: { ...A.params, ...E } }),
              !S.camera || (S.camera === n && !ts.equ(n, w, tR)))
            ) {
              n = w;
              let t = w instanceof c.Camera,
                e = t
                  ? w
                  : g
                  ? new c.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3)
                  : new c.PerspectiveCamera(75, 0, 0.1, 1e3);
              t ||
                ((e.position.z = 5),
                w &&
                  (tw(e, w),
                  !e.manual &&
                    ("aspect" in w ||
                      "left" in w ||
                      "right" in w ||
                      "bottom" in w ||
                      "top" in w) &&
                    ((e.manual = !0), e.updateProjectionMatrix())),
                S.camera || (null != w && w.rotation) || e.lookAt(0, 0, 0)),
                S.set({ camera: e }),
                (A.camera = e);
            }
            if (!S.scene) {
              let t;
              a instanceof c.Scene
                ? tc((t = a), l, "", {})
                : (tc((t = new c.Scene()), l, "", {}), a && tw(t, a)),
                S.set({ scene: t });
            }
            if (!S.xr) {
              let t = (t, e) => {
                  let n = l.getState();
                  "never" !== n.frameloop && tQ(t, !0, n, e);
                },
                e = () => {
                  let e = l.getState();
                  (e.gl.xr.enabled = e.gl.xr.isPresenting),
                    e.gl.xr.setAnimationLoop(e.gl.xr.isPresenting ? t : null),
                    e.gl.xr.isPresenting || tK(e);
                },
                n = {
                  connect() {
                    let t = l.getState().gl;
                    t.xr.addEventListener("sessionstart", e),
                      t.xr.addEventListener("sessionend", e);
                  },
                  disconnect() {
                    let t = l.getState().gl;
                    t.xr.removeEventListener("sessionstart", e),
                      t.xr.removeEventListener("sessionend", e);
                  },
                };
              M.xr && n.connect(), S.set({ xr: n });
            }
            if (M.shadowMap) {
              let t = M.shadowMap.enabled,
                e = M.shadowMap.type;
              if (((M.shadowMap.enabled = !!h), ts.boo(h)))
                M.shadowMap.type = c.PCFSoftShadowMap;
              else if (ts.str(h)) {
                var P;
                let t = {
                  basic: c.BasicShadowMap,
                  percentage: c.PCFShadowMap,
                  soft: c.PCFSoftShadowMap,
                  variance: c.VSMShadowMap,
                };
                M.shadowMap.type = null != (P = t[h]) ? P : c.PCFSoftShadowMap;
              } else ts.obj(h) && Object.assign(M.shadowMap, h);
              (t !== M.shadowMap.enabled || e !== M.shadowMap.type) &&
                (M.shadowMap.needsUpdate = !0);
            }
            let T = Q();
            T &&
              ("enabled" in T
                ? (T.enabled = !m)
                : "legacyMode" in T && (T.legacyMode = m)),
              u ||
                tw(M, {
                  outputEncoding: d ? 3e3 : 3001,
                  toneMapping: p ? c.NoToneMapping : c.ACESFilmicToneMapping,
                }),
              S.legacy !== m && S.set(() => ({ legacy: m })),
              S.linear !== d && S.set(() => ({ linear: d })),
              S.flat !== p && S.set(() => ({ flat: p })),
              !i || ts.fun(i) || tE(i) || ts.equ(i, M, tR) || tw(M, i),
              s && !S.events.handlers && S.set({ events: s(l) });
            let O = (function (t, e) {
              if (!e && t instanceof HTMLCanvasElement && t.parentElement) {
                let {
                  width: e,
                  height: n,
                  top: r,
                  left: i,
                } = t.parentElement.getBoundingClientRect();
                return { width: e, height: n, top: r, left: i };
              }
              return !e &&
                "undefined" != typeof OffscreenCanvas &&
                t instanceof OffscreenCanvas
                ? { width: t.width, height: t.height, top: 0, left: 0 }
                : { width: 0, height: 0, top: 0, left: 0, ...e };
            })(t, o);
            return (
              ts.equ(O, S.size, tR) ||
                S.setSize(O.width, O.height, O.top, O.left),
              y && S.viewport.dpr !== ta(y) && S.setDpr(y),
              S.frameloop !== v && S.setFrameloop(v),
              S.onPointerMissed || S.set({ onPointerMissed: _ }),
              b &&
                !ts.equ(b, S.performance, tR) &&
                S.set((t) => ({ performance: { ...t.performance, ...b } })),
              (e = f),
              (u = !0),
              this
            );
          },
          render(n) {
            return (
              u || this.configure(),
              W.updateContainer(
                (0, P.jsx)(tB, {
                  store: l,
                  children: n,
                  onCreated: e,
                  rootElement: t,
                }),
                s,
                null,
                () => void 0
              ),
              l
            );
          },
          unmount() {
            tD(t);
          },
        };
      }
      function tB(t) {
        let { store: e, children: n, onCreated: r, rootElement: i } = t;
        return (
          te(() => {
            let t = e.getState();
            t.set((t) => ({ internal: { ...t.internal, active: !0 } })),
              r && r(t),
              e.getState().events.connected ||
                null == t.events.connect ||
                t.events.connect(i);
          }, []),
          (0, P.jsx)(tj.Provider, { value: e, children: n })
        );
      }
      function tD(t, e) {
        let n = tz.get(t),
          r = null == n ? void 0 : n.fiber;
        if (r) {
          let i = null == n ? void 0 : n.store.getState();
          i && (i.internal.active = !1),
            W.updateContainer(null, r, null, () => {
              i &&
                setTimeout(() => {
                  try {
                    var n, r, o, a;
                    null == i.events.disconnect || i.events.disconnect(),
                      null == (n = i.gl) ||
                        null == (r = n.renderLists) ||
                        null == r.dispose ||
                        r.dispose(),
                      null == (o = i.gl) ||
                        null == o.forceContextLoss ||
                        o.forceContextLoss(),
                      null != (a = i.gl) && a.xr && i.xr.disconnect(),
                      (function (t) {
                        for (let e in ("Scene" !== t.type &&
                          (null == t.dispose || t.dispose()),
                        t)) {
                          let n = t[e];
                          (null == n ? void 0 : n.type) !== "Scene" &&
                            (null == n || null == n.dispose || n.dispose());
                        }
                      })(i.scene),
                      tz.delete(t),
                      e && e(t);
                  } catch (t) {}
                }, 500);
            });
        }
      }
      W.injectIntoDevTools({
        bundleType: 0,
        rendererPackageName: "@react-three/fiber",
        version: f.version,
      });
      let tH = new Set(),
        tq = new Set(),
        tV = new Set();
      function t$(t, e) {
        if (t.size) for (let { callback: n } of t.values()) n(e);
      }
      function tG(t, e) {
        switch (t) {
          case "before":
            return t$(tH, e);
          case "after":
            return t$(tq, e);
          case "tail":
            return t$(tV, e);
        }
      }
      function tY(t, e, n) {
        let o = e.clock.getDelta();
        "never" === e.frameloop &&
          "number" == typeof t &&
          ((o = t - e.clock.elapsedTime),
          (e.clock.oldTime = e.clock.elapsedTime),
          (e.clock.elapsedTime = t)),
          (r = e.internal.subscribers);
        for (let t = 0; t < r.length; t++)
          (i = r[t]).ref.current(i.store.getState(), o, n);
        return (
          !e.internal.priority && e.gl.render && e.gl.render(e.scene, e.camera),
          (e.internal.frames = Math.max(0, e.internal.frames - 1)),
          "always" === e.frameloop ? 1 : e.internal.frames
        );
      }
      let tZ = !1,
        tW = !1;
      function tX(t) {
        for (let n of ((a = requestAnimationFrame(tX)),
        (tZ = !0),
        (o = 0),
        tG("before", t),
        (tW = !0),
        tz.values())) {
          var e;
          (l = n.store.getState()).internal.active &&
            ("always" === l.frameloop || l.internal.frames > 0) &&
            !(null != (e = l.gl.xr) && e.isPresenting) &&
            (o += tY(t, l));
        }
        if (((tW = !0), tG("after", t), 0 === o))
          return tG("tail", t), (tZ = !1), cancelAnimationFrame(a);
      }
      function tK(t) {
        var e;
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (!t) return tz.forEach((t) => tK(t.store.getState(), n));
        (null != (e = t.gl.xr) && e.isPresenting) ||
          !t.internal.active ||
          "never" === t.frameloop ||
          (n > 1
            ? (t.internal.frames = Math.min(60, t.internal.frames + n))
            : tW
            ? (t.internal.frames = 2)
            : (t.internal.frames = 1),
          tZ || ((tZ = !0), requestAnimationFrame(tX)));
      }
      function tQ(t) {
        let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0;
        if ((e && tG("before", t), n)) tY(t, n, r);
        else for (let e of tz.values()) tY(t, e.store.getState());
        e && tG("after", t);
      }
      let tJ = {
        onClick: ["click", !1],
        onContextMenu: ["contextmenu", !1],
        onDoubleClick: ["dblclick", !1],
        onWheel: ["wheel", !0],
        onPointerDown: ["pointerdown", !0],
        onPointerUp: ["pointerup", !0],
        onPointerLeave: ["pointerleave", !0],
        onPointerMove: ["pointermove", !0],
        onPointerCancel: ["pointercancel", !0],
        onLostPointerCapture: ["lostpointercapture", !0],
      };
      function t0(t) {
        let { handlePointer: e } = (function (t) {
          function e(t) {
            return t.filter((t) =>
              ["Move", "Over", "Enter", "Out", "Leave"].some((e) => {
                var n;
                return null == (n = t.__r3f)
                  ? void 0
                  : n.handlers["onPointer" + e];
              })
            );
          }
          function n(e) {
            let { internal: n } = t.getState();
            for (let t of n.hovered.values())
              if (
                !e.length ||
                !e.find(
                  (e) =>
                    e.object === t.object &&
                    e.index === t.index &&
                    e.instanceId === t.instanceId
                )
              ) {
                let r = t.eventObject.__r3f;
                if ((n.hovered.delete(tM(t)), null != r && r.eventCount)) {
                  let n = r.handlers,
                    i = { ...t, intersections: e };
                  null == n.onPointerOut || n.onPointerOut(i),
                    null == n.onPointerLeave || n.onPointerLeave(i);
                }
              }
          }
          function r(t, e) {
            for (let n = 0; n < e.length; n++) {
              let r = e[n].__r3f;
              null == r ||
                null == r.handlers.onPointerMissed ||
                r.handlers.onPointerMissed(t);
            }
          }
          return {
            handlePointer: function (i) {
              switch (i) {
                case "onPointerLeave":
                case "onPointerCancel":
                  return () => n([]);
                case "onLostPointerCapture":
                  return (e) => {
                    let { internal: r } = t.getState();
                    "pointerId" in e &&
                      r.capturedMap.has(e.pointerId) &&
                      requestAnimationFrame(() => {
                        r.capturedMap.has(e.pointerId) &&
                          (r.capturedMap.delete(e.pointerId), n([]));
                      });
                  };
              }
              return function (o) {
                let { onPointerMissed: a, internal: l } = t.getState();
                l.lastEvent.current = o;
                let s = "onPointerMove" === i,
                  u =
                    "onClick" === i ||
                    "onContextMenu" === i ||
                    "onDoubleClick" === i,
                  f = (function (e, n) {
                    let r = t.getState(),
                      i = new Set(),
                      o = [],
                      a = n
                        ? n(r.internal.interaction)
                        : r.internal.interaction;
                    for (let t = 0; t < a.length; t++) {
                      let e = tl(a[t]);
                      e && (e.raycaster.camera = void 0);
                    }
                    r.previousRoot ||
                      null == r.events.compute ||
                      r.events.compute(e, r);
                    let l = a
                      .flatMap(function (t) {
                        let n = tl(t);
                        if (
                          !n ||
                          !n.events.enabled ||
                          null === n.raycaster.camera
                        )
                          return [];
                        if (void 0 === n.raycaster.camera) {
                          var r;
                          null == n.events.compute ||
                            n.events.compute(
                              e,
                              n,
                              null == (r = n.previousRoot)
                                ? void 0
                                : r.getState()
                            ),
                            void 0 === n.raycaster.camera &&
                              (n.raycaster.camera = null);
                        }
                        return n.raycaster.camera
                          ? n.raycaster.intersectObject(t, !0)
                          : [];
                      })
                      .sort((t, e) => {
                        let n = tl(t.object),
                          r = tl(e.object);
                        return (
                          (n && r && r.events.priority - n.events.priority) ||
                          t.distance - e.distance
                        );
                      })
                      .filter((t) => {
                        let e = tM(t);
                        return !i.has(e) && (i.add(e), !0);
                      });
                    for (let t of (r.events.filter &&
                      (l = r.events.filter(l, r)),
                    l)) {
                      let e = t.object;
                      for (; e; ) {
                        var s;
                        null != (s = e.__r3f) &&
                          s.eventCount &&
                          o.push({ ...t, eventObject: e }),
                          (e = e.parent);
                      }
                    }
                    if (
                      "pointerId" in e &&
                      r.internal.capturedMap.has(e.pointerId)
                    )
                      for (let t of r.internal.capturedMap
                        .get(e.pointerId)
                        .values())
                        i.has(tM(t.intersection)) || o.push(t.intersection);
                    return o;
                  })(o, s ? e : void 0),
                  h = u
                    ? (function (e) {
                        let { internal: n } = t.getState(),
                          r = e.offsetX - n.initialClick[0],
                          i = e.offsetY - n.initialClick[1];
                        return Math.round(Math.sqrt(r * r + i * i));
                      })(o)
                    : 0;
                "onPointerDown" === i &&
                  ((l.initialClick = [o.offsetX, o.offsetY]),
                  (l.initialHits = f.map((t) => t.eventObject))),
                  u && !f.length && h <= 2 && (r(o, l.interaction), a && a(o)),
                  s && n(f),
                  (function (t, e, r, i) {
                    if (t.length) {
                      let o = { stopped: !1 };
                      for (let a of t) {
                        let l = tl(a.object);
                        if (l) {
                          let {
                              raycaster: s,
                              pointer: u,
                              camera: f,
                              internal: h,
                            } = l,
                            d = new c.Vector3(u.x, u.y, 0).unproject(f),
                            p = (t) => {
                              var e, n;
                              return (
                                null !=
                                  (e =
                                    null == (n = h.capturedMap.get(t))
                                      ? void 0
                                      : n.has(a.eventObject)) && e
                              );
                            },
                            m = (t) => {
                              let n = { intersection: a, target: e.target };
                              h.capturedMap.has(t)
                                ? h.capturedMap.get(t).set(a.eventObject, n)
                                : h.capturedMap.set(
                                    t,
                                    new Map([[a.eventObject, n]])
                                  ),
                                e.target.setPointerCapture(t);
                            },
                            g = (t) => {
                              let e = h.capturedMap.get(t);
                              e && tA(h.capturedMap, a.eventObject, e, t);
                            },
                            v = {};
                          for (let t in e) {
                            let n = e[t];
                            "function" != typeof n && (v[t] = n);
                          }
                          let y = {
                            ...a,
                            ...v,
                            pointer: u,
                            intersections: t,
                            stopped: o.stopped,
                            delta: r,
                            unprojectedPoint: d,
                            ray: s.ray,
                            camera: f,
                            stopPropagation() {
                              let r =
                                "pointerId" in e &&
                                h.capturedMap.get(e.pointerId);
                              (!r || r.has(a.eventObject)) &&
                                ((y.stopped = o.stopped = !0),
                                h.hovered.size &&
                                  Array.from(h.hovered.values()).find(
                                    (t) => t.eventObject === a.eventObject
                                  ) &&
                                  n([...t.slice(0, t.indexOf(a)), a]));
                            },
                            target: {
                              hasPointerCapture: p,
                              setPointerCapture: m,
                              releasePointerCapture: g,
                            },
                            currentTarget: {
                              hasPointerCapture: p,
                              setPointerCapture: m,
                              releasePointerCapture: g,
                            },
                            nativeEvent: e,
                          };
                          if ((i(y), !0 === o.stopped)) break;
                        }
                      }
                    }
                  })(f, o, h, function (t) {
                    let e = t.eventObject,
                      n = e.__r3f;
                    if (!(null != n && n.eventCount)) return;
                    let a = n.handlers;
                    if (s) {
                      if (
                        a.onPointerOver ||
                        a.onPointerEnter ||
                        a.onPointerOut ||
                        a.onPointerLeave
                      ) {
                        let e = tM(t),
                          n = l.hovered.get(e);
                        n
                          ? n.stopped && t.stopPropagation()
                          : (l.hovered.set(e, t),
                            null == a.onPointerOver || a.onPointerOver(t),
                            null == a.onPointerEnter || a.onPointerEnter(t));
                      }
                      null == a.onPointerMove || a.onPointerMove(t);
                    } else {
                      let n = a[i];
                      n
                        ? (!u || l.initialHits.includes(e)) &&
                          (r(
                            o,
                            l.interaction.filter(
                              (t) => !l.initialHits.includes(t)
                            )
                          ),
                          n(t))
                        : u &&
                          l.initialHits.includes(e) &&
                          r(
                            o,
                            l.interaction.filter(
                              (t) => !l.initialHits.includes(t)
                            )
                          );
                    }
                  });
              };
            },
          };
        })(t);
        return {
          priority: 1,
          enabled: !0,
          compute(t, e, n) {
            e.pointer.set(
              (t.offsetX / e.size.width) * 2 - 1,
              -(2 * (t.offsetY / e.size.height)) + 1
            ),
              e.raycaster.setFromCamera(e.pointer, e.camera);
          },
          connected: void 0,
          handlers: Object.keys(tJ).reduce((t, n) => ({ ...t, [n]: e(n) }), {}),
          update: () => {
            var e;
            let { events: n, internal: r } = t.getState();
            null != (e = r.lastEvent) &&
              e.current &&
              n.handlers &&
              n.handlers.onPointerMove(r.lastEvent.current);
          },
          connect: (e) => {
            let { set: n, events: r } = t.getState();
            if (
              (null == r.disconnect || r.disconnect(),
              n((t) => ({ events: { ...t.events, connected: e } })),
              r.handlers)
            )
              for (let t in r.handlers) {
                let n = r.handlers[t],
                  [i, o] = tJ[t];
                e.addEventListener(i, n, { passive: o });
              }
          },
          disconnect: () => {
            let { set: e, events: n } = t.getState();
            if (n.connected) {
              if (n.handlers)
                for (let t in n.handlers) {
                  let e = n.handlers[t],
                    [r] = tJ[t];
                  n.connected.removeEventListener(r, e);
                }
              e((t) => ({ events: { ...t.events, connected: void 0 } }));
            }
          },
        };
      }
    },
    93721: (t, e, n) => {
      "use strict";
      n.d(e, { Hl: () => d });
      var r = n(26994),
        i = n(12115),
        o = n(27274),
        a = n(13758),
        l = n.n(a),
        s = n(42353),
        u = n(95155);
      n(26188), n(5193), n(39084);
      let c = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
        f = (t, e) => c.every((n) => t[n] === e[n]),
        h = i.forwardRef(function (t, e) {
          let {
            children: n,
            fallback: a,
            resize: s,
            style: c,
            gl: h,
            events: d = r.f,
            eventSource: p,
            eventPrefix: m,
            shadows: g,
            linear: v,
            flat: y,
            legacy: b,
            orthographic: x,
            frameloop: w,
            dpr: _,
            performance: S,
            raycaster: M,
            camera: A,
            scene: E,
            onPointerMissed: j,
            onCreated: P,
            ...T
          } = t;
          i.useMemo(() => (0, r.e)(o), []);
          let O = (0, r.u)(),
            [k, F] = (function () {
              var t;
              let {
                  debounce: e,
                  scroll: n,
                  polyfill: r,
                  offsetSize: o,
                } = arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { debounce: 0, scroll: !1, offsetSize: !1 },
                a =
                  r || ("undefined" != typeof window && window.ResizeObserver),
                [s, u] = (0, i.useState)({
                  left: 0,
                  top: 0,
                  width: 0,
                  height: 0,
                  bottom: 0,
                  right: 0,
                  x: 0,
                  y: 0,
                });
              if (!a)
                return (
                  (s.width = 1280), (s.height = 800), [() => {}, s, () => {}]
                );
              let c = (0, i.useRef)({
                  element: null,
                  scrollContainers: null,
                  resizeObserver: null,
                  lastBounds: s,
                  orientationHandler: null,
                }),
                h = e ? ("number" == typeof e ? e : e.scroll) : null,
                d = e ? ("number" == typeof e ? e : e.resize) : null,
                p = (0, i.useRef)(!1);
              (0, i.useEffect)(
                () => ((p.current = !0), () => void (p.current = !1))
              );
              let [m, g, v] = (0, i.useMemo)(() => {
                let t = () => {
                  if (!c.current.element) return;
                  let {
                      left: t,
                      top: e,
                      width: n,
                      height: r,
                      bottom: i,
                      right: a,
                      x: l,
                      y: s,
                    } = c.current.element.getBoundingClientRect(),
                    h = {
                      left: t,
                      top: e,
                      width: n,
                      height: r,
                      bottom: i,
                      right: a,
                      x: l,
                      y: s,
                    };
                  c.current.element instanceof HTMLElement &&
                    o &&
                    ((h.height = c.current.element.offsetHeight),
                    (h.width = c.current.element.offsetWidth)),
                    Object.freeze(h),
                    p.current &&
                      !f(c.current.lastBounds, h) &&
                      u((c.current.lastBounds = h));
                };
                return [t, d ? l()(t, d) : t, h ? l()(t, h) : t];
              }, [u, o, h, d]);
              function y() {
                c.current.scrollContainers &&
                  (c.current.scrollContainers.forEach((t) =>
                    t.removeEventListener("scroll", v, !0)
                  ),
                  (c.current.scrollContainers = null)),
                  c.current.resizeObserver &&
                    (c.current.resizeObserver.disconnect(),
                    (c.current.resizeObserver = null)),
                  c.current.orientationHandler &&
                    ("orientation" in screen &&
                    "removeEventListener" in screen.orientation
                      ? screen.orientation.removeEventListener(
                          "change",
                          c.current.orientationHandler
                        )
                      : "onorientationchange" in window &&
                        window.removeEventListener(
                          "orientationchange",
                          c.current.orientationHandler
                        ));
              }
              function b() {
                var t;
                c.current.element &&
                  ((c.current.resizeObserver = new a(g)),
                  null == (t = c.current.resizeObserver) ||
                    t.observe(c.current.element),
                  n &&
                    c.current.scrollContainers &&
                    c.current.scrollContainers.forEach((t) =>
                      t.addEventListener("scroll", v, {
                        capture: !0,
                        passive: !0,
                      })
                    ),
                  (c.current.orientationHandler = () => {
                    v();
                  }),
                  "orientation" in screen &&
                  "addEventListener" in screen.orientation
                    ? screen.orientation.addEventListener(
                        "change",
                        c.current.orientationHandler
                      )
                    : "onorientationchange" in window &&
                      window.addEventListener(
                        "orientationchange",
                        c.current.orientationHandler
                      ));
              }
              return (
                (t = !!n),
                (0, i.useEffect)(() => {
                  if (t)
                    return (
                      window.addEventListener("scroll", v, {
                        capture: !0,
                        passive: !0,
                      }),
                      () => void window.removeEventListener("scroll", v, !0)
                    );
                }, [v, t]),
                (0, i.useEffect)(
                  () => (
                    window.addEventListener("resize", g),
                    () => void window.removeEventListener("resize", g)
                  ),
                  [g]
                ),
                (0, i.useEffect)(() => {
                  y(), b();
                }, [n, v, g]),
                (0, i.useEffect)(() => y, []),
                [
                  (t) => {
                    t &&
                      t !== c.current.element &&
                      (y(),
                      (c.current.element = t),
                      (c.current.scrollContainers = (function t(e) {
                        let n = [];
                        if (!e || e === document.body) return n;
                        let {
                          overflow: r,
                          overflowX: i,
                          overflowY: o,
                        } = window.getComputedStyle(e);
                        return (
                          [r, i, o].some(
                            (t) => "auto" === t || "scroll" === t
                          ) && n.push(e),
                          [...n, ...t(e.parentElement)]
                        );
                      })(t)),
                      b());
                  },
                  s,
                  m,
                ]
              );
            })({ scroll: !0, debounce: { scroll: 50, resize: 0 }, ...s }),
            I = i.useRef(null),
            C = i.useRef(null);
          i.useImperativeHandle(e, () => I.current);
          let N = (0, r.a)(j),
            [z, R] = i.useState(!1),
            [L, U] = i.useState(!1);
          if (z) throw z;
          if (L) throw L;
          let B = i.useRef(null);
          (0, r.b)(() => {
            let t = I.current;
            F.width > 0 &&
              F.height > 0 &&
              t &&
              (B.current || (B.current = (0, r.c)(t)),
              B.current.configure({
                gl: h,
                scene: E,
                events: d,
                shadows: g,
                linear: v,
                flat: y,
                legacy: b,
                orthographic: x,
                frameloop: w,
                dpr: _,
                performance: S,
                raycaster: M,
                camera: A,
                size: F,
                onPointerMissed: function () {
                  for (
                    var t = arguments.length, e = Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  return null == N.current ? void 0 : N.current(...e);
                },
                onCreated: (t) => {
                  null == t.events.connect ||
                    t.events.connect(
                      p ? ((0, r.i)(p) ? p.current : p) : C.current
                    ),
                    m &&
                      t.setEvents({
                        compute: (t, e) => {
                          let n = t[m + "X"],
                            r = t[m + "Y"];
                          e.pointer.set(
                            (n / e.size.width) * 2 - 1,
                            -(2 * (r / e.size.height)) + 1
                          ),
                            e.raycaster.setFromCamera(e.pointer, e.camera);
                        },
                      }),
                    null == P || P(t);
                },
              }),
              B.current.render(
                (0, u.jsx)(O, {
                  children: (0, u.jsx)(r.E, {
                    set: U,
                    children: (0, u.jsx)(i.Suspense, {
                      fallback: (0, u.jsx)(r.B, { set: R }),
                      children: n,
                    }),
                  }),
                })
              ));
          }),
            i.useEffect(() => {
              let t = I.current;
              if (t) return () => (0, r.d)(t);
            }, []);
          let D = p ? "none" : "auto";
          return (0,
          u.jsx)("div", { ref: C, style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", pointerEvents: D, ...c }, ...T, children: (0, u.jsx)("div", { ref: k, style: { width: "100%", height: "100%" }, children: (0, u.jsx)("canvas", { ref: I, style: { display: "block" }, children: a }) }) });
        }),
        d = i.forwardRef(function (t, e) {
          return (0,
          u.jsx)(s.Af, { children: (0, u.jsx)(h, { ...t, ref: e }) });
        });
    },
    13758: (t) => {
      function e(t, e, n) {
        function r() {
          var u = Date.now() - l;
          u < e && u >= 0
            ? (i = setTimeout(r, e - u))
            : ((i = null), n || ((s = t.apply(a, o)), (a = o = null)));
        }
        null == e && (e = 100);
        var i,
          o,
          a,
          l,
          s,
          u = function () {
            (a = this), (o = arguments), (l = Date.now());
            var u = n && !i;
            return (
              i || (i = setTimeout(r, e)),
              u && ((s = t.apply(a, o)), (a = o = null)),
              s
            );
          };
        return (
          (u.clear = function () {
            i && (clearTimeout(i), (i = null));
          }),
          (u.flush = function () {
            i &&
              ((s = t.apply(a, o)),
              (a = o = null),
              clearTimeout(i),
              (i = null));
          }),
          u
        );
      }
      (e.debounce = e), (t.exports = e);
    },
    10093: function (t) {
      var e;
      (e = function () {
        return (function (t) {
          function e(r) {
            if (n[r]) return n[r].exports;
            var i = (n[r] = { exports: {}, id: r, loaded: !1 });
            return (
              t[r].call(i.exports, i, i.exports, e), (i.loaded = !0), i.exports
            );
          }
          var n = {};
          return (e.m = t), (e.c = n), (e.p = ""), e(0);
        })([
          function (t, e, n) {
            "use strict";
            var r = n(1),
              i = (function () {
                function t(t, e, n) {
                  void 0 === t && (t = NaN),
                    void 0 === e && (e = NaN),
                    void 0 === n && (n = !1),
                    (this._minFPS = e),
                    (this._maxFPS = t),
                    (this._timeScale = 1),
                    (this._currentTick = 0),
                    (this._currentTime = 0),
                    (this._tickDeltaTime = 0),
                    (this._isRunning = !1),
                    (this._maxInterval = isNaN(this._minFPS)
                      ? NaN
                      : 1e3 / this._minFPS),
                    (this._minInterval = isNaN(this._maxFPS)
                      ? NaN
                      : 1e3 / this._maxFPS),
                    (this._onResume = new r.default()),
                    (this._onPause = new r.default()),
                    (this._onTick = new r.default()),
                    (this._onTickOncePerFrame = new r.default()),
                    n || this.resume();
                }
                return (
                  (t.prototype.updateOnce = function (t) {
                    t(
                      this.currentTimeSeconds,
                      this.tickDeltaTimeSeconds,
                      this.currentTick
                    );
                  }),
                  (t.prototype.resume = function () {
                    this._isRunning ||
                      ((this._isRunning = !0),
                      (this._lastTimeUpdated = this.getTimer()),
                      this._onResume.dispatch(),
                      this.animateOnce());
                  }),
                  (t.prototype.pause = function () {
                    this._isRunning &&
                      ((this._isRunning = !1),
                      this._onPause.dispatch(),
                      window.cancelAnimationFrame(this._animationFrameHandle));
                  }),
                  (t.prototype.dispose = function () {
                    this.pause(),
                      this._onResume.removeAll(),
                      this._onPause.removeAll(),
                      this._onTick.removeAll();
                  }),
                  Object.defineProperty(t.prototype, "currentTick", {
                    get: function () {
                      return this._currentTick;
                    },
                    enumerable: !0,
                    configurable: !0,
                  }),
                  Object.defineProperty(t.prototype, "currentTimeSeconds", {
                    get: function () {
                      return this._currentTime / 1e3;
                    },
                    enumerable: !0,
                    configurable: !0,
                  }),
                  Object.defineProperty(t.prototype, "tickDeltaTimeSeconds", {
                    get: function () {
                      return this._tickDeltaTime / 1e3;
                    },
                    enumerable: !0,
                    configurable: !0,
                  }),
                  Object.defineProperty(t.prototype, "timeScale", {
                    get: function () {
                      return this._timeScale;
                    },
                    set: function (t) {
                      this._timeScale !== t && (this._timeScale = t);
                    },
                    enumerable: !0,
                    configurable: !0,
                  }),
                  Object.defineProperty(t.prototype, "onResume", {
                    get: function () {
                      return this._onResume;
                    },
                    enumerable: !0,
                    configurable: !0,
                  }),
                  Object.defineProperty(t.prototype, "onPause", {
                    get: function () {
                      return this._onPause;
                    },
                    enumerable: !0,
                    configurable: !0,
                  }),
                  Object.defineProperty(t.prototype, "onTick", {
                    get: function () {
                      return this._onTick;
                    },
                    enumerable: !0,
                    configurable: !0,
                  }),
                  Object.defineProperty(t.prototype, "onTickOncePerFrame", {
                    get: function () {
                      return this._onTickOncePerFrame;
                    },
                    enumerable: !0,
                    configurable: !0,
                  }),
                  Object.defineProperty(t.prototype, "isRunning", {
                    get: function () {
                      return this._isRunning;
                    },
                    enumerable: !0,
                    configurable: !0,
                  }),
                  (t.prototype.animateOnce = function () {
                    var t = this;
                    this._animationFrameHandle = window.requestAnimationFrame(
                      function () {
                        return t.onFrame();
                      }
                    );
                  }),
                  (t.prototype.onFrame = function () {
                    if (
                      ((this._now = this.getTimer()),
                      (this._frameDeltaTime =
                        this._now - this._lastTimeUpdated),
                      isNaN(this._minInterval) ||
                        this._frameDeltaTime >= this._minInterval)
                    ) {
                      if (isNaN(this._maxInterval))
                        this.update(this._frameDeltaTime * this._timeScale, !0),
                          (this._lastTimeUpdated = this._now);
                      else
                        for (
                          this._interval = Math.min(
                            this._frameDeltaTime,
                            this._maxInterval
                          );
                          this._now >= this._lastTimeUpdated + this._interval;

                        )
                          this.update(
                            this._interval * this._timeScale,
                            this._now <=
                              this._lastTimeUpdated + 2 * this._maxInterval
                          ),
                            (this._lastTimeUpdated += this._interval);
                    }
                    this._isRunning && this.animateOnce();
                  }),
                  (t.prototype.update = function (t, e) {
                    void 0 === e && (e = !0),
                      this._currentTick++,
                      (this._currentTime += t),
                      (this._tickDeltaTime = t),
                      this._onTick.dispatch(
                        this.currentTimeSeconds,
                        this.tickDeltaTimeSeconds,
                        this.currentTick
                      ),
                      e &&
                        this._onTickOncePerFrame.dispatch(
                          this.currentTimeSeconds,
                          this.tickDeltaTimeSeconds,
                          this.currentTick
                        );
                  }),
                  (t.prototype.getTimer = function () {
                    return Date.now();
                  }),
                  t
                );
              })();
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.default = i);
          },
          function (t, e, n) {
            var r;
            (r = function () {
              return (function (t) {
                function e(r) {
                  if (n[r]) return n[r].exports;
                  var i = (n[r] = { exports: {}, id: r, loaded: !1 });
                  return (
                    t[r].call(i.exports, i, i.exports, e),
                    (i.loaded = !0),
                    i.exports
                  );
                }
                var n = {};
                return (e.m = t), (e.c = n), (e.p = ""), e(0);
              })([
                function (t, e) {
                  "use strict";
                  var n = (function () {
                    function t() {
                      this.functions = [];
                    }
                    return (
                      (t.prototype.add = function (t) {
                        return (
                          -1 === this.functions.indexOf(t) &&
                          (this.functions.push(t), !0)
                        );
                      }),
                      (t.prototype.remove = function (t) {
                        var e = this.functions.indexOf(t);
                        return e > -1 && (this.functions.splice(e, 1), !0);
                      }),
                      (t.prototype.removeAll = function () {
                        return (
                          this.functions.length > 0 &&
                          ((this.functions.length = 0), !0)
                        );
                      }),
                      (t.prototype.dispatch = function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                          t[e] = arguments[e];
                        this.functions.concat().forEach(function (e) {
                          e.apply(void 0, t);
                        });
                      }),
                      Object.defineProperty(t.prototype, "numItems", {
                        get: function () {
                          return this.functions.length;
                        },
                        enumerable: !0,
                        configurable: !0,
                      }),
                      t
                    );
                  })();
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.default = n);
                },
              ]);
            }),
              (t.exports = r());
          },
        ]);
      }),
        (t.exports = e());
    },
    60473: (t) => {
      t.exports = function (t, e, n, r) {
        var i = 0,
          o = 0,
          a = (r = r || {}).step || 1,
          l = r.maxTimeMS || 8,
          s = r.probeElements || 5e3;
        setTimeout(function r() {
          var u = Math.min(t.length, i + s),
            c = i,
            f = new Date();
          for (c = i; c < u; c += a) e(t[c], c, t);
          c < t.length
            ? ((o += new Date() - f),
              (s = Math.round(((i = c) * l) / o)),
              setTimeout(r, 0))
            : n(t);
        }, 0);
      };
    },
    47077: (t, e) => {
      "use strict";
      (e.ConcurrentRoot = 1),
        (e.ContinuousEventPriority = 8),
        (e.DefaultEventPriority = 32),
        (e.DiscreteEventPriority = 2),
        (e.NoEventPriority = 0);
    },
    26188: (t, e, n) => {
      "use strict";
      t.exports = n(47077);
    },
    5193: (t, e, n) => {
      "use strict";
      t.exports = n(22733);
    },
    53177: (t, e) => {
      "use strict";
      function n(t, e) {
        var n = t.length;
        for (t.push(e); 0 < n; ) {
          var r = (n - 1) >>> 1,
            i = t[r];
          if (0 < o(i, e)) (t[r] = e), (t[n] = i), (n = r);
          else break;
        }
      }
      function r(t) {
        return 0 === t.length ? null : t[0];
      }
      function i(t) {
        if (0 === t.length) return null;
        var e = t[0],
          n = t.pop();
        if (n !== e) {
          t[0] = n;
          for (var r = 0, i = t.length, a = i >>> 1; r < a; ) {
            var l = 2 * (r + 1) - 1,
              s = t[l],
              u = l + 1,
              c = t[u];
            if (0 > o(s, n))
              u < i && 0 > o(c, s)
                ? ((t[r] = c), (t[u] = n), (r = u))
                : ((t[r] = s), (t[l] = n), (r = l));
            else if (u < i && 0 > o(c, n)) (t[r] = c), (t[u] = n), (r = u);
            else break;
          }
        }
        return e;
      }
      function o(t, e) {
        var n = t.sortIndex - e.sortIndex;
        return 0 !== n ? n : t.id - e.id;
      }
      if (
        ((e.unstable_now = void 0),
        "object" == typeof performance && "function" == typeof performance.now)
      ) {
        var a,
          l = performance;
        e.unstable_now = function () {
          return l.now();
        };
      } else {
        var s = Date,
          u = s.now();
        e.unstable_now = function () {
          return s.now() - u;
        };
      }
      var c = [],
        f = [],
        h = 1,
        d = null,
        p = 3,
        m = !1,
        g = !1,
        v = !1,
        y = "function" == typeof setTimeout ? setTimeout : null,
        b = "function" == typeof clearTimeout ? clearTimeout : null,
        x = "undefined" != typeof setImmediate ? setImmediate : null;
      function w(t) {
        for (var e = r(f); null !== e; ) {
          if (null === e.callback) i(f);
          else if (e.startTime <= t)
            i(f), (e.sortIndex = e.expirationTime), n(c, e);
          else break;
          e = r(f);
        }
      }
      function _(t) {
        if (((v = !1), w(t), !g)) {
          if (null !== r(c)) (g = !0), k();
          else {
            var e = r(f);
            null !== e && F(_, e.startTime - t);
          }
        }
      }
      var S = !1,
        M = -1,
        A = 5,
        E = -1;
      function j() {
        return !(e.unstable_now() - E < A);
      }
      function P() {
        if (S) {
          var t = e.unstable_now();
          E = t;
          var n = !0;
          try {
            t: {
              (g = !1), v && ((v = !1), b(M), (M = -1)), (m = !0);
              var o = p;
              try {
                e: {
                  for (
                    w(t), d = r(c);
                    null !== d && !(d.expirationTime > t && j());

                  ) {
                    var l = d.callback;
                    if ("function" == typeof l) {
                      (d.callback = null), (p = d.priorityLevel);
                      var s = l(d.expirationTime <= t);
                      if (((t = e.unstable_now()), "function" == typeof s)) {
                        (d.callback = s), w(t), (n = !0);
                        break e;
                      }
                      d === r(c) && i(c), w(t);
                    } else i(c);
                    d = r(c);
                  }
                  if (null !== d) n = !0;
                  else {
                    var u = r(f);
                    null !== u && F(_, u.startTime - t), (n = !1);
                  }
                }
                break t;
              } finally {
                (d = null), (p = o), (m = !1);
              }
              n = void 0;
            }
          } finally {
            n ? a() : (S = !1);
          }
        }
      }
      if ("function" == typeof x)
        a = function () {
          x(P);
        };
      else if ("undefined" != typeof MessageChannel) {
        var T = new MessageChannel(),
          O = T.port2;
        (T.port1.onmessage = P),
          (a = function () {
            O.postMessage(null);
          });
      } else
        a = function () {
          y(P, 0);
        };
      function k() {
        S || ((S = !0), a());
      }
      function F(t, n) {
        M = y(function () {
          t(e.unstable_now());
        }, n);
      }
      (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (t) {
          t.callback = null;
        }),
        (e.unstable_continueExecution = function () {
          g || m || ((g = !0), k());
        }),
        (e.unstable_forceFrameRate = function (t) {
          0 > t || 125 < t
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (A = 0 < t ? Math.floor(1e3 / t) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
          return p;
        }),
        (e.unstable_getFirstCallbackNode = function () {
          return r(c);
        }),
        (e.unstable_next = function (t) {
          switch (p) {
            case 1:
            case 2:
            case 3:
              var e = 3;
              break;
            default:
              e = p;
          }
          var n = p;
          p = e;
          try {
            return t();
          } finally {
            p = n;
          }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (t, e) {
          switch (t) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              t = 3;
          }
          var n = p;
          p = t;
          try {
            return e();
          } finally {
            p = n;
          }
        }),
        (e.unstable_scheduleCallback = function (t, i, o) {
          var a = e.unstable_now();
          switch (
            ((o =
              "object" == typeof o &&
              null !== o &&
              "number" == typeof (o = o.delay) &&
              0 < o
                ? a + o
                : a),
            t)
          ) {
            case 1:
              var l = -1;
              break;
            case 2:
              l = 250;
              break;
            case 5:
              l = 0x3fffffff;
              break;
            case 4:
              l = 1e4;
              break;
            default:
              l = 5e3;
          }
          return (
            (l = o + l),
            (t = {
              id: h++,
              callback: i,
              priorityLevel: t,
              startTime: o,
              expirationTime: l,
              sortIndex: -1,
            }),
            o > a
              ? ((t.sortIndex = o),
                n(f, t),
                null === r(c) &&
                  t === r(f) &&
                  (v ? (b(M), (M = -1)) : (v = !0), F(_, o - a)))
              : ((t.sortIndex = l), n(c, t), g || m || ((g = !0), k())),
            t
          );
        }),
        (e.unstable_shouldYield = j),
        (e.unstable_wrapCallback = function (t) {
          var e = p;
          return function () {
            var n = p;
            p = e;
            try {
              return t.apply(this, arguments);
            } finally {
              p = n;
            }
          };
        });
    },
    39084: (t, e, n) => {
      "use strict";
      t.exports = n(53177);
    },
    19125: (t, e, n) => {
      "use strict";
      var r = n(12115),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        o = r.useState,
        a = r.useEffect,
        l = r.useLayoutEffect,
        s = r.useDebugValue;
      function u(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
          var n = e();
          return !i(t, n);
        } catch (t) {
          return !0;
        }
      }
      var c =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (t, e) {
              return e();
            }
          : function (t, e) {
              var n = e(),
                r = o({ inst: { value: n, getSnapshot: e } }),
                i = r[0].inst,
                c = r[1];
              return (
                l(
                  function () {
                    (i.value = n), (i.getSnapshot = e), u(i) && c({ inst: i });
                  },
                  [t, n, e]
                ),
                a(
                  function () {
                    return (
                      u(i) && c({ inst: i }),
                      t(function () {
                        u(i) && c({ inst: i });
                      })
                    );
                  },
                  [t]
                ),
                s(n),
                n
              );
            };
      e.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c;
    },
    96854: (t, e, n) => {
      "use strict";
      var r = n(12115),
        i = n(94236),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        a = i.useSyncExternalStore,
        l = r.useRef,
        s = r.useEffect,
        u = r.useMemo,
        c = r.useDebugValue;
      e.useSyncExternalStoreWithSelector = function (t, e, n, r, i) {
        var f = l(null);
        if (null === f.current) {
          var h = { hasValue: !1, value: null };
          f.current = h;
        } else h = f.current;
        var d = a(
          t,
          (f = u(
            function () {
              function t(t) {
                if (!s) {
                  if (
                    ((s = !0), (a = t), (t = r(t)), void 0 !== i && h.hasValue)
                  ) {
                    var e = h.value;
                    if (i(e, t)) return (l = e);
                  }
                  return (l = t);
                }
                if (((e = l), o(a, t))) return e;
                var n = r(t);
                return void 0 !== i && i(e, n) ? e : ((a = t), (l = n));
              }
              var a,
                l,
                s = !1,
                u = void 0 === n ? null : n;
              return [
                function () {
                  return t(e());
                },
                null === u
                  ? void 0
                  : function () {
                      return t(u());
                    },
              ];
            },
            [e, n, r, i]
          ))[0],
          f[1]
        );
        return (
          s(
            function () {
              (h.hasValue = !0), (h.value = d);
            },
            [d]
          ),
          c(d),
          d
        );
      };
    },
    94236: (t, e, n) => {
      "use strict";
      t.exports = n(19125);
    },
    18010: (t, e, n) => {
      "use strict";
      t.exports = n(96854);
    },
    95268: (t, e, n) => {
      var r = n(65730),
        i = n(26848),
        o = new r(),
        a = n(60473);
      t.exports = function (t) {
        t = t || {};
        var e,
          n,
          l = [],
          s = {
            initAsync: function (t, r) {
              u(t);
              var i = c(t);
              a(
                t,
                function (e, n) {
                  i.insert(n, t, 0);
                },
                function () {
                  (n = t), (e = i), "function" == typeof r && r(s);
                },
                { step: 3 }
              );
            },
            init: function (t) {
              u(t), (n = t), (e = c(t));
              for (var r = 0; r < t.length; r += 3) e.insert(r, n, 0);
            },
            bounds: function () {
              return e ? e.bounds : o;
            },
            intersectRay: function (t, r, i, o) {
              if (!e) return l;
              void 0 === i && (i = 0),
                void 0 === o && (o = Number.POSITIVE_INFINITY),
                (i *= i),
                (o *= o);
              var a = [];
              return (
                e.query(
                  a,
                  n,
                  function (e) {
                    var n,
                      i = e.half,
                      a = (e.x - i - t.x) / r.x,
                      l = (e.x + i - t.x) / r.x,
                      s = (e.y + i - t.y) / r.y,
                      u = (e.y - i - t.y) / r.y,
                      c = (e.z - i - t.z) / r.z,
                      f = (e.z + i - t.z) / r.z,
                      h = Math.min(
                        Math.min(Math.max(a, l), Math.max(s, u)),
                        Math.max(c, f)
                      );
                    return (
                      !(h < 0) &&
                      (n = Math.max(
                        Math.max(Math.min(a, l), Math.min(s, u)),
                        Math.min(c, f)
                      )) <= h &&
                      n <= o
                    );
                  },
                  function (e, n, r) {
                    var a =
                      (e - t.x) * (e - t.x) +
                      (n - t.y) * (n - t.y) +
                      (r - t.z) * (r - t.z);
                    return i <= a && a <= o;
                  }
                ),
                a.sort(function (e, n) {
                  var r = t[e],
                    i = t[e + 1],
                    o = t[e + 2],
                    a =
                      (r - t.x) * (r - t.x) +
                      (i - t.y) * (i - t.y) +
                      (o - t.z) * (o - t.z),
                    l = t[n],
                    s = t[n + 1],
                    u = t[n + 2];
                  return (
                    a -
                    ((l - t.x) * (l - t.x) +
                      (s - t.y) * (s - t.y) +
                      (u - t.z) * (u - t.z))
                  );
                })
              );
            },
            intersectSphere: function (t, r, i, o) {
              if (!e) return l;
              var a = [],
                s = o * o;
              return (
                e.query(
                  a,
                  n,
                  function (e) {
                    var n,
                      o,
                      a,
                      l,
                      u,
                      c,
                      f = s,
                      h = e.half;
                    return (
                      t < e.x - h
                        ? (f -= (n = t - (e.x - h)) * n)
                        : t > e.x + h && (f -= (o = t - (e.x + h)) * o),
                      r < e.y - h
                        ? (f -= (a = r - (e.y - h)) * a)
                        : r > e.y + h && (f -= (l = r - (e.y + h)) * l),
                      i < e.z - h
                        ? (f -= (u = i - (e.z - h)) * u)
                        : i > e.z + h && (f -= (c = i - (e.z + h)) * c),
                      f > 0
                    );
                  },
                  function (e, n, o) {
                    var a, l, u;
                    return (
                      (a = e - t) * a + (l = n - r) * l + (u = o - i) * u < s
                    );
                  }
                ),
                a
              );
            },
            getRoot: function () {
              return e;
            },
          };
        return s;
        function u(t) {
          if (!t) throw Error("Points array is required for quadtree to work");
          if ("number" != typeof t.length)
            throw Error("Points should be array-like object");
          if (t.length % 3 != 0)
            throw Error(
              "Points array should consist of series of x,y,z coordinates and be multiple of 3"
            );
        }
        function c(t) {
          if (0 === t.length) return new i(new r());
          for (
            var e = Number.POSITIVE_INFINITY,
              n = Number.POSITIVE_INFINITY,
              o = Number.POSITIVE_INFINITY,
              a = Number.NEGATIVE_INFINITY,
              l = Number.NEGATIVE_INFINITY,
              s = Number.NEGATIVE_INFINITY,
              u = 0;
            u < t.length;
            u += 3
          ) {
            var c = t[u],
              f = t[u + 1],
              h = t[u + 2];
            c < e && (e = c),
              c > a && (a = c),
              f < n && (n = f),
              f > l && (l = f),
              h < o && (o = h),
              h > s && (s = h);
          }
          var d = Math.max(Math.max(a - e, l - n), s - o),
            p = (d += 2) / 2;
          return new i(new r((e -= 1) + p, (n -= 1) + p, (o -= 1) + p, p));
        }
      };
    },
    65730: (t) => {
      function e(t, e, n, r) {
        (this.x = "number" == typeof t ? t : 0),
          (this.y = "number" == typeof e ? e : 0),
          (this.z = "number" == typeof n ? n : 0),
          (this.half = "number" == typeof r ? r : 0);
      }
      (t.exports = e),
        (e.prototype.contains = function (t, e, n) {
          var r = this.half;
          return (
            this.x - r <= t &&
            t < this.x + r &&
            this.y - r <= e &&
            e < this.y + r &&
            this.z - r <= n &&
            n < this.z + r
          );
        });
    },
    26848: (t, e, n) => {
      var r = n(65730);
      function i(t) {
        (this.bounds = t),
          (this.q0 = null),
          (this.q1 = null),
          (this.q2 = null),
          (this.q3 = null),
          (this.q4 = null),
          (this.q5 = null),
          (this.q6 = null),
          (this.q7 = null),
          (this.items = null);
      }
      (t.exports = i),
        (i.prototype.subdivide = function () {
          var t = this.bounds,
            e = t.half / 2;
          (this.q0 = new i(new r(t.x - e, t.y - e, t.z - e, e))),
            (this.q1 = new i(new r(t.x + e, t.y - e, t.z - e, e))),
            (this.q2 = new i(new r(t.x - e, t.y + e, t.z - e, e))),
            (this.q3 = new i(new r(t.x + e, t.y + e, t.z - e, e))),
            (this.q4 = new i(new r(t.x - e, t.y - e, t.z + e, e))),
            (this.q5 = new i(new r(t.x + e, t.y - e, t.z + e, e))),
            (this.q6 = new i(new r(t.x - e, t.y + e, t.z + e, e))),
            (this.q7 = new i(new r(t.x + e, t.y + e, t.z + e, e)));
        }),
        (i.prototype.insert = function (t, e, n) {
          if (null === this.q0) {
            if (
              (null === this.items ? (this.items = [t]) : this.items.push(t),
              this.items.length >= 4 && n < 16)
            ) {
              this.subdivide();
              for (var r = 0; r < this.items.length; ++r)
                this.insert(this.items[r], e, n + 1);
              this.items = null;
            }
          } else {
            var i,
              o = e[t],
              a = e[t + 1],
              l = e[t + 2],
              s = this.bounds,
              u = 0;
            o > s.x && (u += 1),
              a > s.y && (u += 2),
              l > s.z && (u += 4),
              (0 === (i = u)
                ? this.q0
                : 1 === i
                ? this.q1
                : 2 === i
                ? this.q2
                : 3 === i
                ? this.q3
                : 4 === i
                ? this.q4
                : 5 === i
                ? this.q5
                : 6 === i
                ? this.q6
                : 7 === i
                ? this.q7
                : void 0
              ).insert(t, e, n + 1);
          }
        }),
        (i.prototype.query = function (t, e, n, r) {
          if (n(this.bounds)) {
            var i = this.items,
              o = "function" == typeof r;
            if (i)
              for (var a = 0; a < i.length; ++a) {
                var l = i[a];
                o ? r(e[l], e[l + 1], e[l + 2]) && t.push(l) : t.push(l);
              }
            this.q0 &&
              (this.q0.query(t, e, n, r),
              this.q1.query(t, e, n, r),
              this.q2.query(t, e, n, r),
              this.q3.query(t, e, n, r),
              this.q4.query(t, e, n, r),
              this.q5.query(t, e, n, r),
              this.q6.query(t, e, n, r),
              this.q7.query(t, e, n, r));
          }
        });
    },
    74695: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => r });
      var r = function (t) {
        return "function" == typeof t
          ? t
          : "string" == typeof t
          ? function (e) {
              return e[t];
            }
          : function (e) {
              return t;
            };
      };
    },
    14380: (t, e, n) => {
      "use strict";
      function r(t, e) {
        return null == t || null == e
          ? NaN
          : t < e
          ? -1
          : t > e
          ? 1
          : t >= e
          ? 0
          : NaN;
      }
      function i(t, e) {
        return null == t || null == e
          ? NaN
          : e < t
          ? -1
          : e > t
          ? 1
          : e >= t
          ? 0
          : NaN;
      }
      function o(t) {
        let e, n, o;
        function l(t, r, i = 0, o = t.length) {
          if (i < o) {
            if (0 !== e(r, r)) return o;
            do {
              let e = (i + o) >>> 1;
              0 > n(t[e], r) ? (i = e + 1) : (o = e);
            } while (i < o);
          }
          return i;
        }
        return (
          2 !== t.length
            ? ((e = r), (n = (e, n) => r(t(e), n)), (o = (e, n) => t(e) - n))
            : ((e = t === r || t === i ? t : a), (n = t), (o = t)),
          {
            left: l,
            center: function (t, e, n = 0, r = t.length) {
              let i = l(t, e, n, r - 1);
              return i > n && o(t[i - 1], e) > -o(t[i], e) ? i - 1 : i;
            },
            right: function (t, r, i = 0, o = t.length) {
              if (i < o) {
                if (0 !== e(r, r)) return o;
                do {
                  let e = (i + o) >>> 1;
                  0 >= n(t[e], r) ? (i = e + 1) : (o = e);
                } while (i < o);
              }
              return i;
            },
          }
        );
      }
      function a() {
        return 0;
      }
      n.d(e, { Ay: () => u });
      let l = o(r),
        s = l.right;
      l.left,
        o(function (t) {
          return null === t ? NaN : +t;
        }).center;
      let u = s;
    },
    18132: (t, e, n) => {
      "use strict";
      n.d(e, { ph: () => r });
      class r {
        constructor() {
          (this._partials = new Float64Array(32)), (this._n = 0);
        }
        add(t) {
          let e = this._partials,
            n = 0;
          for (let r = 0; r < this._n && r < 32; r++) {
            let i = e[r],
              o = t + i,
              a = Math.abs(t) < Math.abs(i) ? t - (o - i) : i - (o - t);
            a && (e[n++] = a), (t = o);
          }
          return (e[n] = t), (this._n = n + 1), this;
        }
        valueOf() {
          let t = this._partials,
            e = this._n,
            n,
            r,
            i,
            o = 0;
          if (e > 0) {
            for (
              o = t[--e];
              e > 0 && ((o = (n = o) + (r = t[--e])), !(i = r - (o - n)));

            );
            e > 0 &&
              ((i < 0 && t[e - 1] < 0) || (i > 0 && t[e - 1] > 0)) &&
              ((n = o + (r = 2 * i)), r == n - o && (o = n));
          }
          return o;
        }
      }
    },
    60297: (t, e, n) => {
      "use strict";
      function r(t, e) {
        let n;
        if (void 0 === e)
          for (let e of t)
            null != e && (n < e || (void 0 === n && e >= e)) && (n = e);
        else {
          let r = -1;
          for (let i of t)
            null != (i = e(i, ++r, t)) &&
              (n < i || (void 0 === n && i >= i)) &&
              (n = i);
        }
        return n;
      }
      n.d(e, { A: () => r });
    },
    22392: (t, e, n) => {
      "use strict";
      function r(t, e) {
        let n = 0;
        if (void 0 === e) for (let e of t) (e = +e) && (n += e);
        else {
          let r = -1;
          for (let i of t) (i = +e(i, ++r, t)) && (n += i);
        }
        return n;
      }
      n.d(e, { A: () => r });
    },
    30082: (t, e, n) => {
      "use strict";
      function r(t, e, n) {
        (t.prototype = e.prototype = n), (n.constructor = t);
      }
      function i(t, e) {
        var n = Object.create(t.prototype);
        for (var r in e) n[r] = e[r];
        return n;
      }
      function o() {}
      n.d(e, { Ay: () => b, Qh: () => _ });
      var a = "\\s*([+-]?\\d+)\\s*",
        l = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        s = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        u = /^#([0-9a-f]{3,8})$/,
        c = RegExp(`^rgb\\(${a},${a},${a}\\)$`),
        f = RegExp(`^rgb\\(${s},${s},${s}\\)$`),
        h = RegExp(`^rgba\\(${a},${a},${a},${l}\\)$`),
        d = RegExp(`^rgba\\(${s},${s},${s},${l}\\)$`),
        p = RegExp(`^hsl\\(${l},${s},${s}\\)$`),
        m = RegExp(`^hsla\\(${l},${s},${s},${l}\\)$`),
        g = {
          aliceblue: 0xf0f8ff,
          antiquewhite: 0xfaebd7,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 0xf0ffff,
          beige: 0xf5f5dc,
          bisque: 0xffe4c4,
          black: 0,
          blanchedalmond: 0xffebcd,
          blue: 255,
          blueviolet: 9055202,
          brown: 0xa52a2a,
          burlywood: 0xdeb887,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 0xd2691e,
          coral: 0xff7f50,
          cornflowerblue: 6591981,
          cornsilk: 0xfff8dc,
          crimson: 0xdc143c,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 0xb8860b,
          darkgray: 0xa9a9a9,
          darkgreen: 25600,
          darkgrey: 0xa9a9a9,
          darkkhaki: 0xbdb76b,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 0xff8c00,
          darkorchid: 0x9932cc,
          darkred: 9109504,
          darksalmon: 0xe9967a,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 0xff1493,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 0xb22222,
          floralwhite: 0xfffaf0,
          forestgreen: 2263842,
          fuchsia: 0xff00ff,
          gainsboro: 0xdcdcdc,
          ghostwhite: 0xf8f8ff,
          gold: 0xffd700,
          goldenrod: 0xdaa520,
          gray: 8421504,
          green: 32768,
          greenyellow: 0xadff2f,
          grey: 8421504,
          honeydew: 0xf0fff0,
          hotpink: 0xff69b4,
          indianred: 0xcd5c5c,
          indigo: 4915330,
          ivory: 0xfffff0,
          khaki: 0xf0e68c,
          lavender: 0xe6e6fa,
          lavenderblush: 0xfff0f5,
          lawngreen: 8190976,
          lemonchiffon: 0xfffacd,
          lightblue: 0xadd8e6,
          lightcoral: 0xf08080,
          lightcyan: 0xe0ffff,
          lightgoldenrodyellow: 0xfafad2,
          lightgray: 0xd3d3d3,
          lightgreen: 9498256,
          lightgrey: 0xd3d3d3,
          lightpink: 0xffb6c1,
          lightsalmon: 0xffa07a,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 0xb0c4de,
          lightyellow: 0xffffe0,
          lime: 65280,
          limegreen: 3329330,
          linen: 0xfaf0e6,
          magenta: 0xff00ff,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 0xba55d3,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 0xc71585,
          midnightblue: 1644912,
          mintcream: 0xf5fffa,
          mistyrose: 0xffe4e1,
          moccasin: 0xffe4b5,
          navajowhite: 0xffdead,
          navy: 128,
          oldlace: 0xfdf5e6,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 0xffa500,
          orangered: 0xff4500,
          orchid: 0xda70d6,
          palegoldenrod: 0xeee8aa,
          palegreen: 0x98fb98,
          paleturquoise: 0xafeeee,
          palevioletred: 0xdb7093,
          papayawhip: 0xffefd5,
          peachpuff: 0xffdab9,
          peru: 0xcd853f,
          pink: 0xffc0cb,
          plum: 0xdda0dd,
          powderblue: 0xb0e0e6,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 0xff0000,
          rosybrown: 0xbc8f8f,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 0xfa8072,
          sandybrown: 0xf4a460,
          seagreen: 3050327,
          seashell: 0xfff5ee,
          sienna: 0xa0522d,
          silver: 0xc0c0c0,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 0xfffafa,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 0xd2b48c,
          teal: 32896,
          thistle: 0xd8bfd8,
          tomato: 0xff6347,
          turquoise: 4251856,
          violet: 0xee82ee,
          wheat: 0xf5deb3,
          white: 0xffffff,
          whitesmoke: 0xf5f5f5,
          yellow: 0xffff00,
          yellowgreen: 0x9acd32,
        };
      function v() {
        return this.rgb().formatHex();
      }
      function y() {
        return this.rgb().formatRgb();
      }
      function b(t) {
        var e, n;
        return (
          (t = (t + "").trim().toLowerCase()),
          (e = u.exec(t))
            ? ((n = e[1].length),
              (e = parseInt(e[1], 16)),
              6 === n
                ? x(e)
                : 3 === n
                ? new S(
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    ((15 & e) << 4) | (15 & e),
                    1
                  )
                : 8 === n
                ? w(
                    (e >> 24) & 255,
                    (e >> 16) & 255,
                    (e >> 8) & 255,
                    (255 & e) / 255
                  )
                : 4 === n
                ? w(
                    ((e >> 12) & 15) | ((e >> 8) & 240),
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    (((15 & e) << 4) | (15 & e)) / 255
                  )
                : null)
            : (e = c.exec(t))
            ? new S(e[1], e[2], e[3], 1)
            : (e = f.exec(t))
            ? new S(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                1
              )
            : (e = h.exec(t))
            ? w(e[1], e[2], e[3], e[4])
            : (e = d.exec(t))
            ? w(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                e[4]
              )
            : (e = p.exec(t))
            ? T(e[1], e[2] / 100, e[3] / 100, 1)
            : (e = m.exec(t))
            ? T(e[1], e[2] / 100, e[3] / 100, e[4])
            : g.hasOwnProperty(t)
            ? x(g[t])
            : "transparent" === t
            ? new S(NaN, NaN, NaN, 0)
            : null
        );
      }
      function x(t) {
        return new S((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function w(t, e, n, r) {
        return r <= 0 && (t = e = n = NaN), new S(t, e, n, r);
      }
      function _(t, e, n, r) {
        var i;
        return 1 == arguments.length
          ? ((i = t) instanceof o || (i = b(i)), i)
            ? new S((i = i.rgb()).r, i.g, i.b, i.opacity)
            : new S()
          : new S(t, e, n, null == r ? 1 : r);
      }
      function S(t, e, n, r) {
        (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
      }
      function M() {
        return `#${P(this.r)}${P(this.g)}${P(this.b)}`;
      }
      function A() {
        let t = E(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${j(this.r)}, ${j(this.g)}, ${j(
          this.b
        )}${1 === t ? ")" : `, ${t})`}`;
      }
      function E(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function j(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function P(t) {
        return ((t = j(t)) < 16 ? "0" : "") + t.toString(16);
      }
      function T(t, e, n, r) {
        return (
          r <= 0
            ? (t = e = n = NaN)
            : n <= 0 || n >= 1
            ? (t = e = NaN)
            : e <= 0 && (t = NaN),
          new k(t, e, n, r)
        );
      }
      function O(t) {
        if (t instanceof k) return new k(t.h, t.s, t.l, t.opacity);
        if ((t instanceof o || (t = b(t)), !t)) return new k();
        if (t instanceof k) return t;
        var e = (t = t.rgb()).r / 255,
          n = t.g / 255,
          r = t.b / 255,
          i = Math.min(e, n, r),
          a = Math.max(e, n, r),
          l = NaN,
          s = a - i,
          u = (a + i) / 2;
        return (
          s
            ? ((l =
                e === a
                  ? (n - r) / s + (n < r) * 6
                  : n === a
                  ? (r - e) / s + 2
                  : (e - n) / s + 4),
              (s /= u < 0.5 ? a + i : 2 - a - i),
              (l *= 60))
            : (s = u > 0 && u < 1 ? 0 : l),
          new k(l, s, u, t.opacity)
        );
      }
      function k(t, e, n, r) {
        (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
      }
      function F(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function I(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function C(t, e, n) {
        return (
          (t < 60
            ? e + ((n - e) * t) / 60
            : t < 180
            ? n
            : t < 240
            ? e + ((n - e) * (240 - t)) / 60
            : e) * 255
        );
      }
      r(o, b, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: v,
        formatHex: v,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return O(this).formatHsl();
        },
        formatRgb: y,
        toString: y,
      }),
        r(
          S,
          _,
          i(o, {
            brighter(t) {
              return (
                (t =
                  null == t
                    ? 1.4285714285714286
                    : Math.pow(1.4285714285714286, t)),
                new S(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new S(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new S(j(this.r), j(this.g), j(this.b), E(this.opacity));
            },
            displayable() {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: M,
            formatHex: M,
            formatHex8: function () {
              return `#${P(this.r)}${P(this.g)}${P(this.b)}${P(
                (isNaN(this.opacity) ? 1 : this.opacity) * 255
              )}`;
            },
            formatRgb: A,
            toString: A,
          })
        ),
        r(
          k,
          function (t, e, n, r) {
            return 1 == arguments.length
              ? O(t)
              : new k(t, e, n, null == r ? 1 : r);
          },
          i(o, {
            brighter(t) {
              return (
                (t =
                  null == t
                    ? 1.4285714285714286
                    : Math.pow(1.4285714285714286, t)),
                new k(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new k(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + (this.h < 0) * 360,
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < 0.5 ? n : 1 - n) * e,
                i = 2 * n - r;
              return new S(
                C(t >= 240 ? t - 240 : t + 120, i, r),
                C(t, i, r),
                C(t < 120 ? t + 240 : t - 120, i, r),
                this.opacity
              );
            },
            clamp() {
              return new k(F(this.h), I(this.s), I(this.l), E(this.opacity));
            },
            displayable() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl() {
              let t = E(this.opacity);
              return `${1 === t ? "hsl(" : "hsla("}${F(this.h)}, ${
                100 * I(this.s)
              }%, ${100 * I(this.l)}%${1 === t ? ")" : `, ${t})`}`;
            },
          })
        );
    },
    11863: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => v });
      var r,
        i,
        o,
        a,
        l = n(18132),
        s = n(18183),
        u = n(55933),
        c = n(39665),
        f = {
          sphere: u.A,
          point: u.A,
          lineStart: function () {
            (f.point = d), (f.lineEnd = h);
          },
          lineEnd: u.A,
          polygonStart: u.A,
          polygonEnd: u.A,
        };
      function h() {
        f.point = f.lineEnd = u.A;
      }
      function d(t, e) {
        (t *= s.F2),
          (e *= s.F2),
          (i = t),
          (o = (0, s.F8)(e)),
          (a = (0, s.gn)(e)),
          (f.point = p);
      }
      function p(t, e) {
        (t *= s.F2), (e *= s.F2);
        var n = (0, s.F8)(e),
          l = (0, s.gn)(e),
          u = (0, s.tn)(t - i),
          c = (0, s.gn)(u),
          f = l * (0, s.F8)(u),
          h = a * n - o * l * c,
          d = o * n + a * l * c;
        r.add((0, s.FP)((0, s.RZ)(f * f + h * h), d)),
          (i = t),
          (o = n),
          (a = l);
      }
      var m = [null, null],
        g = { type: "LineString", coordinates: m };
      function v(t, e) {
        return (m[0] = t), (m[1] = e), (r = new l.ph()), (0, c.A)(g, f), +r;
      }
    },
    77720: (t, e, n) => {
      "use strict";
      function r(t, e, n) {
        (t = +t),
          (e = +e),
          (n =
            (i = arguments.length) < 2
              ? ((e = t), (t = 0), 1)
              : i < 3
              ? 1
              : +n);
        for (
          var r = -1, i = 0 | Math.max(0, Math.ceil((e - t) / n)), o = Array(i);
          ++r < i;

        )
          o[r] = t + r * n;
        return o;
      }
      n.d(e, { q: () => l });
      var i = n(18183);
      function o(t, e, n) {
        var o = r(t, e - i.Ni, n).concat(e);
        return function (t) {
          return o.map(function (e) {
            return [t, e];
          });
        };
      }
      function a(t, e, n) {
        var o = r(t, e - i.Ni, n).concat(e);
        return function (t) {
          return o.map(function (e) {
            return [e, t];
          });
        };
      }
      function l() {
        return (function () {
          var t,
            e,
            n,
            l,
            s,
            u,
            c,
            f,
            h,
            d,
            p,
            m,
            g = 10,
            v = 10,
            y = 90,
            b = 360,
            x = 2.5;
          function w() {
            return { type: "MultiLineString", coordinates: _() };
          }
          function _() {
            return r((0, i.mk)(l / y) * y, n, y)
              .map(p)
              .concat(r((0, i.mk)(f / b) * b, c, b).map(m))
              .concat(
                r((0, i.mk)(e / g) * g, t, g)
                  .filter(function (t) {
                    return (0, i.tn)(t % y) > i.Ni;
                  })
                  .map(h)
              )
              .concat(
                r((0, i.mk)(u / v) * v, s, v)
                  .filter(function (t) {
                    return (0, i.tn)(t % b) > i.Ni;
                  })
                  .map(d)
              );
          }
          return (
            (w.lines = function () {
              return _().map(function (t) {
                return { type: "LineString", coordinates: t };
              });
            }),
            (w.outline = function () {
              return {
                type: "Polygon",
                coordinates: [
                  p(l).concat(
                    m(c).slice(1),
                    p(n).reverse().slice(1),
                    m(f).reverse().slice(1)
                  ),
                ],
              };
            }),
            (w.extent = function (t) {
              return arguments.length
                ? w.extentMajor(t).extentMinor(t)
                : w.extentMinor();
            }),
            (w.extentMajor = function (t) {
              return arguments.length
                ? ((l = +t[0][0]),
                  (n = +t[1][0]),
                  (f = +t[0][1]),
                  (c = +t[1][1]),
                  l > n && ((t = l), (l = n), (n = t)),
                  f > c && ((t = f), (f = c), (c = t)),
                  w.precision(x))
                : [
                    [l, f],
                    [n, c],
                  ];
            }),
            (w.extentMinor = function (n) {
              return arguments.length
                ? ((e = +n[0][0]),
                  (t = +n[1][0]),
                  (u = +n[0][1]),
                  (s = +n[1][1]),
                  e > t && ((n = e), (e = t), (t = n)),
                  u > s && ((n = u), (u = s), (s = n)),
                  w.precision(x))
                : [
                    [e, u],
                    [t, s],
                  ];
            }),
            (w.step = function (t) {
              return arguments.length
                ? w.stepMajor(t).stepMinor(t)
                : w.stepMinor();
            }),
            (w.stepMajor = function (t) {
              return arguments.length ? ((y = +t[0]), (b = +t[1]), w) : [y, b];
            }),
            (w.stepMinor = function (t) {
              return arguments.length ? ((g = +t[0]), (v = +t[1]), w) : [g, v];
            }),
            (w.precision = function (r) {
              return arguments.length
                ? ((x = +r),
                  (h = o(u, s, 90)),
                  (d = a(e, t, x)),
                  (p = o(f, c, 90)),
                  (m = a(l, n, x)),
                  w)
                : x;
            }),
            w
              .extentMajor([
                [-180, -90 + i.Ni],
                [180, 90 - i.Ni],
              ])
              .extentMinor([
                [-180, -80 - i.Ni],
                [180, 80 + i.Ni],
              ])
          );
        })()();
      }
    },
    13968: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => i });
      var r = n(18183);
      function i(t, e) {
        var n = t[0] * r.F2,
          i = t[1] * r.F2,
          o = e[0] * r.F2,
          a = e[1] * r.F2,
          l = (0, r.gn)(i),
          s = (0, r.F8)(i),
          u = (0, r.gn)(a),
          c = (0, r.F8)(a),
          f = l * (0, r.gn)(n),
          h = l * (0, r.F8)(n),
          d = u * (0, r.gn)(o),
          p = u * (0, r.F8)(o),
          m =
            2 *
            (0, r.qR)((0, r.RZ)((0, r.bo)(a - i) + l * u * (0, r.bo)(o - n))),
          g = (0, r.F8)(m),
          v = m
            ? function (t) {
                var e = (0, r.F8)((t *= m)) / g,
                  n = (0, r.F8)(m - t) / g,
                  i = n * f + e * d,
                  o = n * h + e * p;
                return [
                  (0, r.FP)(o, i) * r.uj,
                  (0, r.FP)(n * s + e * c, (0, r.RZ)(i * i + o * o)) * r.uj,
                ];
              }
            : function () {
                return [n * r.uj, i * r.uj];
              };
        return (v.distance = m), v;
      }
    },
    18183: (t, e, n) => {
      "use strict";
      n.d(e, {
        $t: () => i,
        F2: () => c,
        F8: () => v,
        FA: () => s,
        FP: () => d,
        HQ: () => x,
        Ni: () => r,
        RZ: () => b,
        TW: () => a,
        _S: () => y,
        bo: () => _,
        dY: () => g,
        gn: () => p,
        gz: () => l,
        mk: () => m,
        pi: () => o,
        qR: () => w,
        rY: () => h,
        tn: () => f,
        uj: () => u,
      });
      var r = 1e-6,
        i = 1e-12,
        o = Math.PI,
        a = o / 2,
        l = o / 4,
        s = 2 * o,
        u = 180 / o,
        c = o / 180,
        f = Math.abs,
        h = Math.atan,
        d = Math.atan2,
        p = Math.cos,
        m = Math.ceil,
        g = Math.hypot,
        v = Math.sin,
        y =
          Math.sign ||
          function (t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
          },
        b = Math.sqrt;
      function x(t) {
        return t > 1 ? 0 : t < -1 ? o : Math.acos(t);
      }
      function w(t) {
        return t > 1 ? a : t < -1 ? -a : Math.asin(t);
      }
      function _(t) {
        return (t = v(t / 2)) * t;
      }
    },
    55933: (t, e, n) => {
      "use strict";
      function r() {}
      n.d(e, { A: () => r });
    },
    39665: (t, e, n) => {
      "use strict";
      function r(t, e) {
        t && o.hasOwnProperty(t.type) && o[t.type](t, e);
      }
      n.d(e, { A: () => s });
      var i = {
          Feature: function (t, e) {
            r(t.geometry, e);
          },
          FeatureCollection: function (t, e) {
            for (var n = t.features, i = -1, o = n.length; ++i < o; )
              r(n[i].geometry, e);
          },
        },
        o = {
          Sphere: function (t, e) {
            e.sphere();
          },
          Point: function (t, e) {
            (t = t.coordinates), e.point(t[0], t[1], t[2]);
          },
          MultiPoint: function (t, e) {
            for (var n = t.coordinates, r = -1, i = n.length; ++r < i; )
              (t = n[r]), e.point(t[0], t[1], t[2]);
          },
          LineString: function (t, e) {
            a(t.coordinates, e, 0);
          },
          MultiLineString: function (t, e) {
            for (var n = t.coordinates, r = -1, i = n.length; ++r < i; )
              a(n[r], e, 0);
          },
          Polygon: function (t, e) {
            l(t.coordinates, e);
          },
          MultiPolygon: function (t, e) {
            for (var n = t.coordinates, r = -1, i = n.length; ++r < i; )
              l(n[r], e);
          },
          GeometryCollection: function (t, e) {
            for (var n = t.geometries, i = -1, o = n.length; ++i < o; )
              r(n[i], e);
          },
        };
      function a(t, e, n) {
        var r,
          i = -1,
          o = t.length - n;
        for (e.lineStart(); ++i < o; ) (r = t[i]), e.point(r[0], r[1], r[2]);
        e.lineEnd();
      }
      function l(t, e) {
        var n = -1,
          r = t.length;
        for (e.polygonStart(); ++n < r; ) a(t[n], e, 1);
        e.polygonEnd();
      }
      function s(t, e) {
        t && i.hasOwnProperty(t.type) ? i[t.type](t, e) : r(t, e);
      }
    },
    14860: (t, e, n) => {
      "use strict";
      n.d(e, { $: () => a, A: () => o });
      var r = n(70335),
        i = n(16219);
      function o(t, e) {
        return ((0, i.p)(e) ? i.A : a)(t, e);
      }
      function a(t, e) {
        var n,
          i = e ? e.length : 0,
          o = t ? Math.min(i, t.length) : 0,
          a = Array(o),
          l = Array(i);
        for (n = 0; n < o; ++n) a[n] = (0, r.A)(t[n], e[n]);
        for (; n < i; ++n) l[n] = e[n];
        return function (t) {
          for (n = 0; n < o; ++n) l[n] = a[n](t);
          return l;
        };
      }
    },
    50402: (t, e, n) => {
      "use strict";
      function r(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return t * (1 - n) + e * n;
          }
        );
      }
      n.d(e, { A: () => r });
    },
    16219: (t, e, n) => {
      "use strict";
      function r(t, e) {
        e || (e = []);
        var n,
          r = t ? Math.min(e.length, t.length) : 0,
          i = e.slice();
        return function (o) {
          for (n = 0; n < r; ++n) i[n] = t[n] * (1 - o) + e[n] * o;
          return i;
        };
      }
      function i(t) {
        return ArrayBuffer.isView(t) && !(t instanceof DataView);
      }
      n.d(e, { A: () => r, p: () => i });
    },
    70335: (t, e, n) => {
      "use strict";
      n.d(e, {
        A: () =>
          function t(e, n) {
            var i,
              a = typeof n;
            return null == n || "boolean" === a
              ? o(n)
              : ("number" === a
                  ? c.A
                  : "string" === a
                  ? (i = (0, r.Ay)(n))
                    ? ((n = i), l)
                    : function (t, e) {
                        var n,
                          r,
                          i,
                          o,
                          a,
                          l = (f.lastIndex = h.lastIndex = 0),
                          s = -1,
                          u = [],
                          d = [];
                        for (
                          t += "", e += "";
                          (i = f.exec(t)) && (o = h.exec(e));

                        )
                          (a = o.index) > l &&
                            ((a = e.slice(l, a)),
                            u[s] ? (u[s] += a) : (u[++s] = a)),
                            (i = i[0]) === (o = o[0])
                              ? u[s]
                                ? (u[s] += o)
                                : (u[++s] = o)
                              : ((u[++s] = null),
                                d.push({ i: s, x: (0, c.A)(i, o) })),
                            (l = h.lastIndex);
                        return (
                          l < e.length &&
                            ((a = e.slice(l)),
                            u[s] ? (u[s] += a) : (u[++s] = a)),
                          u.length < 2
                            ? d[0]
                              ? ((n = d[0].x),
                                function (t) {
                                  return n(t) + "";
                                })
                              : ((r = e),
                                function () {
                                  return r;
                                })
                            : ((e = d.length),
                              function (t) {
                                for (var n, r = 0; r < e; ++r)
                                  u[(n = d[r]).i] = n.x(t);
                                return u.join("");
                              })
                        );
                      }
                  : n instanceof r.Ay
                  ? l
                  : n instanceof Date
                  ? function (t, e) {
                      var n = new Date();
                      return (
                        (t = +t),
                        (e = +e),
                        function (r) {
                          return n.setTime(t * (1 - r) + e * r), n;
                        }
                      );
                    }
                  : (0, d.p)(n)
                  ? d.A
                  : Array.isArray(n)
                  ? u.$
                  : ("function" != typeof n.valueOf &&
                      "function" != typeof n.toString) ||
                    isNaN(n)
                  ? function (e, n) {
                      var r,
                        i = {},
                        o = {};
                      for (r in ((null === e || "object" != typeof e) &&
                        (e = {}),
                      (null === n || "object" != typeof n) && (n = {}),
                      n))
                        r in e ? (i[r] = t(e[r], n[r])) : (o[r] = n[r]);
                      return function (t) {
                        for (r in i) o[r] = i[r](t);
                        return o;
                      };
                    }
                  : c.A)(e, n);
          },
      });
      var r = n(30082);
      function i(t, e, n, r, i) {
        var o = t * t,
          a = o * t;
        return (
          ((1 - 3 * t + 3 * o - a) * e +
            (4 - 6 * o + 3 * a) * n +
            (1 + 3 * t + 3 * o - 3 * a) * r +
            a * i) /
          6
        );
      }
      let o = (t) => () => t;
      function a(t, e) {
        var n = e - t;
        return n
          ? function (e) {
              return t + e * n;
            }
          : o(isNaN(t) ? e : t);
      }
      let l = (function t(e) {
        var n,
          i =
            1 == (n = +(n = e))
              ? a
              : function (t, e) {
                  var r, i, a;
                  return e - t
                    ? ((r = t),
                      (i = e),
                      (r = Math.pow(r, (a = n))),
                      (i = Math.pow(i, a) - r),
                      (a = 1 / a),
                      function (t) {
                        return Math.pow(r + t * i, a);
                      })
                    : o(isNaN(t) ? e : t);
                };
        function l(t, e) {
          var n = i((t = (0, r.Qh)(t)).r, (e = (0, r.Qh)(e)).r),
            o = i(t.g, e.g),
            l = i(t.b, e.b),
            s = a(t.opacity, e.opacity);
          return function (e) {
            return (
              (t.r = n(e)),
              (t.g = o(e)),
              (t.b = l(e)),
              (t.opacity = s(e)),
              t + ""
            );
          };
        }
        return (l.gamma = t), l;
      })(1);
      function s(t) {
        return function (e) {
          var n,
            i,
            o = e.length,
            a = Array(o),
            l = Array(o),
            s = Array(o);
          for (n = 0; n < o; ++n)
            (i = (0, r.Qh)(e[n])),
              (a[n] = i.r || 0),
              (l[n] = i.g || 0),
              (s[n] = i.b || 0);
          return (
            (a = t(a)),
            (l = t(l)),
            (s = t(s)),
            (i.opacity = 1),
            function (t) {
              return (i.r = a(t)), (i.g = l(t)), (i.b = s(t)), i + "";
            }
          );
        };
      }
      s(function (t) {
        var e = t.length - 1;
        return function (n) {
          var r =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e),
            o = t[r],
            a = t[r + 1],
            l = r > 0 ? t[r - 1] : 2 * o - a,
            s = r < e - 1 ? t[r + 2] : 2 * a - o;
          return i((n - r / e) * e, l, o, a, s);
        };
      }),
        s(function (t) {
          var e = t.length;
          return function (n) {
            var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
              o = t[(r + e - 1) % e],
              a = t[r % e],
              l = t[(r + 1) % e],
              s = t[(r + 2) % e];
            return i((n - r / e) * e, o, a, l, s);
          };
        });
      var u = n(14860),
        c = n(50402),
        f = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        h = RegExp(f.source, "g"),
        d = n(16219);
    },
    64121: (t, e, n) => {
      "use strict";
      function r(t) {
        return (
          "rgb(" +
          Math.max(
            0,
            Math.min(
              255,
              Math.round(
                34.61 +
                  (t = Math.max(0, Math.min(1, t))) *
                    (1172.33 -
                      t *
                        (10793.56 -
                          t * (33300.12 - t * (38394.49 - 14825.05 * t))))
              )
            )
          ) +
          ", " +
          Math.max(
            0,
            Math.min(
              255,
              Math.round(
                23.31 +
                  t *
                    (557.33 +
                      t *
                        (1225.33 - t * (3574.96 - t * (1073.77 + 707.56 * t))))
              )
            )
          ) +
          ", " +
          Math.max(
            0,
            Math.min(
              255,
              Math.round(
                27.2 +
                  t *
                    (3211.1 -
                      t *
                        (15327.97 - t * (27814 - t * (22569.18 - 6838.66 * t))))
              )
            )
          ) +
          ")"
        );
      }
      n.d(e, { A: () => r });
    },
    88258: (t, e, n) => {
      "use strict";
      function r(t, e) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t);
            break;
          default:
            this.range(e).domain(t);
        }
        return this;
      }
      n.d(e, { C: () => r });
    },
    59819: (t, e, n) => {
      "use strict";
      n.d(e, {
        A: () =>
          function t() {
            var e = (function () {
              var t,
                e,
                n,
                r,
                i,
                o,
                a = v,
                l = v,
                s = d.A,
                u = y;
              function c() {
                var t,
                  e,
                  n,
                  s = Math.min(a.length, l.length);
                return (
                  u !== y &&
                    ((t = a[0]),
                    (e = a[s - 1]),
                    t > e && ((n = t), (t = e), (e = n)),
                    (u = function (n) {
                      return Math.max(t, Math.min(e, n));
                    })),
                  (r = s > 2 ? w : x),
                  (i = o = null),
                  f
                );
              }
              function f(e) {
                return null == e || isNaN((e = +e))
                  ? n
                  : (i || (i = r(a.map(t), l, s)))(t(u(e)));
              }
              return (
                (f.invert = function (n) {
                  return u(e((o || (o = r(l, a.map(t), p.A)))(n)));
                }),
                (f.domain = function (t) {
                  return arguments.length
                    ? ((a = Array.from(t, g)), c())
                    : a.slice();
                }),
                (f.range = function (t) {
                  return arguments.length
                    ? ((l = Array.from(t)), c())
                    : l.slice();
                }),
                (f.rangeRound = function (t) {
                  return (l = Array.from(t)), (s = m), c();
                }),
                (f.clamp = function (t) {
                  return arguments.length ? ((u = !!t || y), c()) : u !== y;
                }),
                (f.interpolate = function (t) {
                  return arguments.length ? ((s = t), c()) : s;
                }),
                (f.unknown = function (t) {
                  return arguments.length ? ((n = t), f) : n;
                }),
                function (n, r) {
                  return (t = n), (e = r), c();
                }
              );
            })()(y, y);
            return (
              (e.copy = function () {
                return t()
                  .domain(e.domain())
                  .range(e.range())
                  .interpolate(e.interpolate())
                  .clamp(e.clamp())
                  .unknown(e.unknown());
              }),
              _.C.apply(e, arguments),
              I(e)
            );
          },
        C: () => I,
      });
      let r = Math.sqrt(50),
        i = Math.sqrt(10),
        o = Math.sqrt(2);
      function a(t, e, n) {
        let l, s, u;
        let c = (e - t) / Math.max(0, n),
          f = Math.floor(Math.log10(c)),
          h = c / Math.pow(10, f),
          d = h >= r ? 10 : h >= i ? 5 : h >= o ? 2 : 1;
        return (f < 0
          ? ((l = Math.round(t * (u = Math.pow(10, -f) / d))),
            (s = Math.round(e * u)),
            l / u < t && ++l,
            s / u > e && --s,
            (u = -u))
          : ((l = Math.round(t / (u = Math.pow(10, f) * d))),
            (s = Math.round(e / u)),
            l * u < t && ++l,
            s * u > e && --s),
        s < l && 0.5 <= n && n < 2)
          ? a(t, e, 2 * n)
          : [l, s, u];
      }
      function l(t, e, n) {
        return a((t = +t), (e = +e), (n = +n))[2];
      }
      var s,
        u,
        c,
        f,
        h = n(14380),
        d = n(70335),
        p = n(50402);
      function m(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return Math.round(t * (1 - n) + e * n);
          }
        );
      }
      function g(t) {
        return +t;
      }
      var v = [0, 1];
      function y(t) {
        return t;
      }
      function b(t, e) {
        var n;
        return (e -= t = +t)
          ? function (n) {
              return (n - t) / e;
            }
          : ((n = isNaN(e) ? NaN : 0.5),
            function () {
              return n;
            });
      }
      function x(t, e, n) {
        var r = t[0],
          i = t[1],
          o = e[0],
          a = e[1];
        return (
          i < r
            ? ((r = b(i, r)), (o = n(a, o)))
            : ((r = b(r, i)), (o = n(o, a))),
          function (t) {
            return o(r(t));
          }
        );
      }
      function w(t, e, n) {
        var r = Math.min(t.length, e.length) - 1,
          i = Array(r),
          o = Array(r),
          a = -1;
        for (
          t[r] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
          ++a < r;

        )
          (i[a] = b(t[a], t[a + 1])), (o[a] = n(e[a], e[a + 1]));
        return function (e) {
          var n = (0, h.Ay)(t, e, 1, r) - 1;
          return o[n](i[n](e));
        };
      }
      var _ = n(88258),
        S =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function M(t) {
        var e;
        if (!(e = S.exec(t))) throw Error("invalid format: " + t);
        return new A({
          fill: e[1],
          align: e[2],
          sign: e[3],
          symbol: e[4],
          zero: e[5],
          width: e[6],
          comma: e[7],
          precision: e[8] && e[8].slice(1),
          trim: e[9],
          type: e[10],
        });
      }
      function A(t) {
        (this.fill = void 0 === t.fill ? " " : t.fill + ""),
          (this.align = void 0 === t.align ? ">" : t.align + ""),
          (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
          (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
          (this.zero = !!t.zero),
          (this.width = void 0 === t.width ? void 0 : +t.width),
          (this.comma = !!t.comma),
          (this.precision = void 0 === t.precision ? void 0 : +t.precision),
          (this.trim = !!t.trim),
          (this.type = void 0 === t.type ? "" : t.type + "");
      }
      function E(t, e) {
        if (
          (n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
            "e"
          )) < 0
        )
          return null;
        var n,
          r = t.slice(0, n);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)];
      }
      function j(t) {
        return (t = E(Math.abs(t))) ? t[1] : NaN;
      }
      function P(t, e) {
        var n = E(t, e);
        if (!n) return t + "";
        var r = n[0],
          i = n[1];
        return i < 0
          ? "0." + Array(-i).join("0") + r
          : r.length > i + 1
          ? r.slice(0, i + 1) + "." + r.slice(i + 1)
          : r + Array(i - r.length + 2).join("0");
      }
      (M.prototype = A.prototype),
        (A.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        });
      let T = {
        "%": (t, e) => (100 * t).toFixed(e),
        b: (t) => Math.round(t).toString(2),
        c: (t) => t + "",
        d: function (t) {
          return Math.abs((t = Math.round(t))) >= 1e21
            ? t.toLocaleString("en").replace(/,/g, "")
            : t.toString(10);
        },
        e: (t, e) => t.toExponential(e),
        f: (t, e) => t.toFixed(e),
        g: (t, e) => t.toPrecision(e),
        o: (t) => Math.round(t).toString(8),
        p: (t, e) => P(100 * t, e),
        r: P,
        s: function (t, e) {
          var n = E(t, e);
          if (!n) return t + "";
          var r = n[0],
            i = n[1],
            o = i - (s = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
            a = r.length;
          return o === a
            ? r
            : o > a
            ? r + Array(o - a + 1).join("0")
            : o > 0
            ? r.slice(0, o) + "." + r.slice(o)
            : "0." + Array(1 - o).join("0") + E(t, Math.max(0, e + o - 1))[0];
        },
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16),
      };
      function O(t) {
        return t;
      }
      var k = Array.prototype.map,
        F = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "\xb5",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ];
      function I(t) {
        var e = t.domain;
        return (
          (t.ticks = function (t) {
            var n = e();
            return (function (t, e, n) {
              if (((e = +e), (t = +t), !((n = +n) > 0))) return [];
              if (t === e) return [t];
              let r = e < t,
                [i, o, l] = r ? a(e, t, n) : a(t, e, n);
              if (!(o >= i)) return [];
              let s = o - i + 1,
                u = Array(s);
              if (r) {
                if (l < 0) for (let t = 0; t < s; ++t) u[t] = -((o - t) / l);
                else for (let t = 0; t < s; ++t) u[t] = (o - t) * l;
              } else if (l < 0)
                for (let t = 0; t < s; ++t) u[t] = -((i + t) / l);
              else for (let t = 0; t < s; ++t) u[t] = (i + t) * l;
              return u;
            })(n[0], n[n.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, n) {
            var r = e();
            return (function (t, e, n, r) {
              var i,
                o,
                a = (function (t, e, n) {
                  (e = +e), (t = +t), (n = +n);
                  let r = e < t,
                    i = r ? l(e, t, n) : l(t, e, n);
                  return (r ? -1 : 1) * (i < 0 ? -(1 / i) : i);
                })(t, e, n);
              switch ((r = M(null == r ? ",f" : r)).type) {
                case "s":
                  var s = Math.max(Math.abs(t), Math.abs(e));
                  return (
                    null != r.precision ||
                      isNaN(
                        (o = Math.max(
                          0,
                          3 * Math.max(-8, Math.min(8, Math.floor(j(s) / 3))) -
                            j(Math.abs(a))
                        ))
                      ) ||
                      (r.precision = o),
                    f(r, s)
                  );
                case "":
                case "e":
                case "g":
                case "p":
                case "r":
                  null != r.precision ||
                    isNaN(
                      (o =
                        Math.max(
                          0,
                          j(
                            Math.abs(Math.max(Math.abs(t), Math.abs(e))) -
                              (i = Math.abs((i = a)))
                          ) - j(i)
                        ) + 1)
                    ) ||
                    (r.precision = o - ("e" === r.type));
                  break;
                case "f":
                case "%":
                  null != r.precision ||
                    isNaN((o = Math.max(0, -j(Math.abs(a))))) ||
                    (r.precision = o - ("%" === r.type) * 2);
              }
              return c(r);
            })(r[0], r[r.length - 1], null == t ? 10 : t, n);
          }),
          (t.nice = function (n) {
            null == n && (n = 10);
            var r,
              i,
              o = e(),
              a = 0,
              s = o.length - 1,
              u = o[a],
              c = o[s],
              f = 10;
            for (
              c < u && ((i = u), (u = c), (c = i), (i = a), (a = s), (s = i));
              f-- > 0;

            ) {
              if ((i = l(u, c, n)) === r) return (o[a] = u), (o[s] = c), e(o);
              if (i > 0)
                (u = Math.floor(u / i) * i), (c = Math.ceil(c / i) * i);
              else if (i < 0)
                (u = Math.ceil(u * i) / i), (c = Math.floor(c * i) / i);
              else break;
              r = i;
            }
            return t;
          }),
          t
        );
      }
      (c = (u = (function (t) {
        var e,
          n,
          r,
          i =
            void 0 === t.grouping || void 0 === t.thousands
              ? O
              : ((e = k.call(t.grouping, Number)),
                (n = t.thousands + ""),
                function (t, r) {
                  for (
                    var i = t.length, o = [], a = 0, l = e[0], s = 0;
                    i > 0 &&
                    l > 0 &&
                    (s + l + 1 > r && (l = Math.max(1, r - s)),
                    o.push(t.substring((i -= l), i + l)),
                    !((s += l + 1) > r));

                  )
                    l = e[(a = (a + 1) % e.length)];
                  return o.reverse().join(n);
                }),
          o = void 0 === t.currency ? "" : t.currency[0] + "",
          a = void 0 === t.currency ? "" : t.currency[1] + "",
          l = void 0 === t.decimal ? "." : t.decimal + "",
          u =
            void 0 === t.numerals
              ? O
              : ((r = k.call(t.numerals, String)),
                function (t) {
                  return t.replace(/[0-9]/g, function (t) {
                    return r[+t];
                  });
                }),
          c = void 0 === t.percent ? "%" : t.percent + "",
          f = void 0 === t.minus ? "−" : t.minus + "",
          h = void 0 === t.nan ? "NaN" : t.nan + "";
        function d(t) {
          var e = (t = M(t)).fill,
            n = t.align,
            r = t.sign,
            d = t.symbol,
            p = t.zero,
            m = t.width,
            g = t.comma,
            v = t.precision,
            y = t.trim,
            b = t.type;
          "n" === b
            ? ((g = !0), (b = "g"))
            : T[b] || (void 0 === v && (v = 12), (y = !0), (b = "g")),
            (p || ("0" === e && "=" === n)) && ((p = !0), (e = "0"), (n = "="));
          var x =
              "$" === d
                ? o
                : "#" === d && /[boxX]/.test(b)
                ? "0" + b.toLowerCase()
                : "",
            w = "$" === d ? a : /[%p]/.test(b) ? c : "",
            _ = T[b],
            S = /[defgprs%]/.test(b);
          function A(t) {
            var o,
              a,
              c,
              d = x,
              M = w;
            if ("c" === b) (M = _(t) + M), (t = "");
            else {
              var A = (t = +t) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? h : _(Math.abs(t), v)),
                y &&
                  (t = (function (t) {
                    n: for (var e, n = t.length, r = 1, i = -1; r < n; ++r)
                      switch (t[r]) {
                        case ".":
                          i = e = r;
                          break;
                        case "0":
                          0 === i && (i = r), (e = r);
                          break;
                        default:
                          if (!+t[r]) break n;
                          i > 0 && (i = 0);
                      }
                    return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t;
                  })(t)),
                A && 0 == +t && "+" !== r && (A = !1),
                (d =
                  (A ? ("(" === r ? r : f) : "-" === r || "(" === r ? "" : r) +
                  d),
                (M =
                  ("s" === b ? F[8 + s / 3] : "") +
                  M +
                  (A && "(" === r ? ")" : "")),
                S)
              ) {
                for (o = -1, a = t.length; ++o < a; )
                  if (48 > (c = t.charCodeAt(o)) || c > 57) {
                    (M = (46 === c ? l + t.slice(o + 1) : t.slice(o)) + M),
                      (t = t.slice(0, o));
                    break;
                  }
              }
            }
            g && !p && (t = i(t, 1 / 0));
            var E = d.length + t.length + M.length,
              j = E < m ? Array(m - E + 1).join(e) : "";
            switch (
              (g &&
                p &&
                ((t = i(j + t, j.length ? m - M.length : 1 / 0)), (j = "")),
              n)
            ) {
              case "<":
                t = d + t + M + j;
                break;
              case "=":
                t = d + j + t + M;
                break;
              case "^":
                t = j.slice(0, (E = j.length >> 1)) + d + t + M + j.slice(E);
                break;
              default:
                t = j + d + t + M;
            }
            return u(t);
          }
          return (
            (v =
              void 0 === v
                ? 6
                : /[gprs]/.test(b)
                ? Math.max(1, Math.min(21, v))
                : Math.max(0, Math.min(20, v))),
            (A.toString = function () {
              return t + "";
            }),
            A
          );
        }
        return {
          format: d,
          formatPrefix: function (t, e) {
            var n = d((((t = M(t)).type = "f"), t)),
              r = 3 * Math.max(-8, Math.min(8, Math.floor(j(e) / 3))),
              i = Math.pow(10, -r),
              o = F[8 + r / 3];
            return function (t) {
              return n(i * t) + o;
            };
          },
        };
      })({ thousands: ",", grouping: [3], currency: ["$", ""] })).format),
        (f = u.formatPrefix);
    },
    859: (t, e, n) => {
      "use strict";
      n.d(e, {
        A: () =>
          function t() {
            var e,
              n = 0,
              a = 1,
              l = 1,
              s = [0.5],
              u = [0, 1];
            function c(t) {
              return null != t && t <= t ? u[(0, r.Ay)(s, t, 0, l)] : e;
            }
            function f() {
              var t = -1;
              for (s = Array(l); ++t < l; )
                s[t] = ((t + 1) * a - (t - l) * n) / (l + 1);
              return c;
            }
            return (
              (c.domain = function (t) {
                return arguments.length
                  ? (([n, a] = t), (n = +n), (a = +a), f())
                  : [n, a];
              }),
              (c.range = function (t) {
                return arguments.length
                  ? ((l = (u = Array.from(t)).length - 1), f())
                  : u.slice();
              }),
              (c.invertExtent = function (t) {
                var e = u.indexOf(t);
                return e < 0
                  ? [NaN, NaN]
                  : e < 1
                  ? [n, s[0]]
                  : e >= l
                  ? [s[l - 1], a]
                  : [s[e - 1], s[e]];
              }),
              (c.unknown = function (t) {
                return arguments.length && (e = t), c;
              }),
              (c.thresholds = function () {
                return s.slice();
              }),
              (c.copy = function () {
                return t().domain([n, a]).range(u).unknown(e);
              }),
              o.C.apply((0, i.C)(c), arguments)
            );
          },
      });
      var r = n(14380),
        i = n(59819),
        o = n(88258);
    },
    35919: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => v });
      var r = n(74695);
      function i(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function o(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : n;
        throw TypeError("Private element is not present on this object");
      }
      function a(t, e) {
        return t.get(o(t, e));
      }
      function l(t, e, n) {
        (function (t, e) {
          if (e.has(t))
            throw TypeError(
              "Cannot initialize the same private elements twice on an object"
            );
        })(t, e),
          e.set(t, n);
      }
      function s(t, e, n) {
        return t.set(o(t, e), n), n;
      }
      function u(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                l = [],
                s = !0,
                u = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e));
                else
                  for (
                    ;
                    !(s = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== e);
                    s = !0
                  );
              } catch (t) {
                (u = !0), (i = t);
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          })(t, e) ||
          c(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(t, e) {
        if (t) {
          if ("string" == typeof t) return i(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? i(t, e)
              : void 0
          );
        }
      }
      var f = new WeakMap(),
        h = new WeakMap(),
        d = new WeakMap(),
        p = new WeakMap(),
        m = new WeakMap(),
        g = new WeakMap(),
        v = (function () {
          var t, e;
          return (
            (t = function t() {
              (function (t, e) {
                if (!(t instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, t),
                l(this, f, new Map()),
                l(this, h, new Map()),
                l(this, d, function (t) {
                  return t;
                }),
                l(this, p, function () {
                  return {};
                }),
                l(this, m, function () {}),
                l(this, g, function () {});
            }),
            (e = [
              {
                key: "getObj",
                value: function (t) {
                  return a(f, this).get(a(d, this).call(this, t));
                },
              },
              {
                key: "getData",
                value: function (t) {
                  return a(h, this).get(t);
                },
              },
              {
                key: "entries",
                value: function () {
                  var t;
                  return (
                    (function (t) {
                      if (Array.isArray(t)) return i(t);
                    })((t = a(h, this).entries())) ||
                    (function (t) {
                      if (
                        ("undefined" != typeof Symbol &&
                          null != t[Symbol.iterator]) ||
                        null != t["@@iterator"]
                      )
                        return Array.from(t);
                    })(t) ||
                    c(t) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                  ).map(function (t) {
                    var e = u(t, 2),
                      n = e[0];
                    return [e[1], n];
                  });
                },
              },
              {
                key: "id",
                value: function (t) {
                  return s(d, this, (0, r.A)(t)), this;
                },
              },
              {
                key: "onCreateObj",
                value: function (t) {
                  return s(p, this, t), this;
                },
              },
              {
                key: "onUpdateObj",
                value: function (t) {
                  return s(m, this, t), this;
                },
              },
              {
                key: "onRemoveObj",
                value: function (t) {
                  return s(g, this, t), this;
                },
              },
              {
                key: "digest",
                value: function (t) {
                  var e = this;
                  t.filter(function (t) {
                    return !a(f, e).has(a(d, e).call(e, t));
                  }).forEach(function (t) {
                    var n = a(p, e).call(e, t);
                    a(f, e).set(a(d, e).call(e, t), n), a(h, e).set(n, t);
                  });
                  var n = new Map(
                    t.map(function (t) {
                      return [a(d, e).call(e, t), t];
                    })
                  );
                  return (
                    a(f, this)
                      .entries()
                      .forEach(function (t) {
                        var r = u(t, 2),
                          i = r[0],
                          o = r[1];
                        n.has(i)
                          ? a(m, e).call(e, o, n.get(i))
                          : (a(g, e).call(e, o, i),
                            a(f, e).delete(i),
                            a(h, e).delete(o));
                      }),
                    this
                  );
                },
              },
              {
                key: "clear",
                value: function () {
                  return this.digest([]), this;
                },
              },
            ]),
            (function (t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(
                    t,
                    (function (t) {
                      var e = (function (t, e) {
                        if ("object" != typeof t || !t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(t, e);
                          if ("object" != typeof r) return r;
                          throw TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(t);
                      })(t, "string");
                      return "symbol" == typeof e ? e : e + "";
                    })(r.key),
                    r
                  );
              }
            })(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        })();
    },
    34734: (t, e, n) => {
      "use strict";
      function r(t, e, n = 2) {
        let h, d, g;
        let y = e && e.length,
          b = y ? e[0] * n : t.length,
          x = i(t, 0, b, n, !0),
          w = [];
        if (!x || x.next === x.prev) return w;
        if (
          (y &&
            (x = (function (t, e, n, r) {
              let l = [];
              for (let n = 0, o = e.length; n < o; n++) {
                let a = e[n] * r,
                  s = n < o - 1 ? e[n + 1] * r : t.length,
                  u = i(t, a, s, r, !1);
                u === u.next && (u.steiner = !0),
                  l.push(
                    (function (t) {
                      let e = t,
                        n = t;
                      do
                        (e.x < n.x || (e.x === n.x && e.y < n.y)) && (n = e),
                          (e = e.next);
                      while (e !== t);
                      return n;
                    })(u)
                  );
              }
              l.sort(a);
              for (let t = 0; t < l.length; t++)
                n = (function (t, e) {
                  let n = (function (t, e) {
                    let n,
                      r = e,
                      i = t.x,
                      o = t.y,
                      a = -1 / 0;
                    do {
                      if (o <= r.y && o >= r.next.y && r.next.y !== r.y) {
                        let t =
                          r.x +
                          ((o - r.y) * (r.next.x - r.x)) / (r.next.y - r.y);
                        if (
                          t <= i &&
                          t > a &&
                          ((a = t), (n = r.x < r.next.x ? r : r.next), t === i)
                        )
                          return n;
                      }
                      r = r.next;
                    } while (r !== e);
                    if (!n) return null;
                    let l = n,
                      c = n.x,
                      f = n.y,
                      h = 1 / 0;
                    r = n;
                    do {
                      if (
                        i >= r.x &&
                        r.x >= c &&
                        i !== r.x &&
                        s(o < f ? i : a, o, c, f, o < f ? a : i, o, r.x, r.y)
                      ) {
                        var d, m;
                        let e = Math.abs(o - r.y) / (i - r.x);
                        p(r, t) &&
                          (e < h ||
                            (e === h &&
                              (r.x > n.x ||
                                (r.x === n.x &&
                                  ((d = n),
                                  (m = r),
                                  0 > u(d.prev, d, m.prev) &&
                                    0 > u(m.next, d, d.next)))))) &&
                          ((n = r), (h = e));
                      }
                      r = r.next;
                    } while (r !== l);
                    return n;
                  })(t, e);
                  if (!n) return e;
                  let r = m(n, t);
                  return o(r, r.next), o(n, n.next);
                })(l[t], n);
              return n;
            })(t, e, x, n)),
          t.length > 80 * n)
        ) {
          (h = 1 / 0), (d = 1 / 0);
          let e = -1 / 0,
            r = -1 / 0;
          for (let i = n; i < b; i += n) {
            let n = t[i],
              o = t[i + 1];
            n < h && (h = n),
              o < d && (d = o),
              n > e && (e = n),
              o > r && (r = o);
          }
          g = 0 !== (g = Math.max(e - h, r - d)) ? 32767 / g : 0;
        }
        return (
          (function t(e, n, r, i, a, h, d) {
            if (!e) return;
            !d &&
              h &&
              (function (t, e, n, r) {
                let i = t;
                do
                  0 === i.z && (i.z = l(i.x, i.y, e, n, r)),
                    (i.prevZ = i.prev),
                    (i.nextZ = i.next),
                    (i = i.next);
                while (i !== t);
                (i.prevZ.nextZ = null),
                  (i.prevZ = null),
                  (function (t) {
                    let e;
                    let n = 1;
                    do {
                      let r,
                        i = t;
                      t = null;
                      let o = null;
                      for (e = 0; i; ) {
                        e++;
                        let a = i,
                          l = 0;
                        for (let t = 0; t < n && (l++, (a = a.nextZ)); t++);
                        let s = n;
                        for (; l > 0 || (s > 0 && a); )
                          0 !== l && (0 === s || !a || i.z <= a.z)
                            ? ((r = i), (i = i.nextZ), l--)
                            : ((r = a), (a = a.nextZ), s--),
                            o ? (o.nextZ = r) : (t = r),
                            (r.prevZ = o),
                            (o = r);
                        i = a;
                      }
                      (o.nextZ = null), (n *= 2);
                    } while (e > 1);
                  })(i);
              })(e, i, a, h);
            let g = e;
            for (; e.prev !== e.next; ) {
              let y = e.prev,
                b = e.next;
              if (
                h
                  ? (function (t, e, n, r) {
                      let i = t.prev,
                        o = t.next;
                      if (u(i, t, o) >= 0) return !1;
                      let a = i.x,
                        c = t.x,
                        f = o.x,
                        h = i.y,
                        d = t.y,
                        p = o.y,
                        m = a < c ? (a < f ? a : f) : c < f ? c : f,
                        g = h < d ? (h < p ? h : p) : d < p ? d : p,
                        v = a > c ? (a > f ? a : f) : c > f ? c : f,
                        y = h > d ? (h > p ? h : p) : d > p ? d : p,
                        b = l(m, g, e, n, r),
                        x = l(v, y, e, n, r),
                        w = t.prevZ,
                        _ = t.nextZ;
                      for (; w && w.z >= b && _ && _.z <= x; ) {
                        if (
                          (w.x >= m &&
                            w.x <= v &&
                            w.y >= g &&
                            w.y <= y &&
                            w !== i &&
                            w !== o &&
                            s(a, h, c, d, f, p, w.x, w.y) &&
                            u(w.prev, w, w.next) >= 0) ||
                          ((w = w.prevZ),
                          _.x >= m &&
                            _.x <= v &&
                            _.y >= g &&
                            _.y <= y &&
                            _ !== i &&
                            _ !== o &&
                            s(a, h, c, d, f, p, _.x, _.y) &&
                            u(_.prev, _, _.next) >= 0)
                        )
                          return !1;
                        _ = _.nextZ;
                      }
                      for (; w && w.z >= b; ) {
                        if (
                          w.x >= m &&
                          w.x <= v &&
                          w.y >= g &&
                          w.y <= y &&
                          w !== i &&
                          w !== o &&
                          s(a, h, c, d, f, p, w.x, w.y) &&
                          u(w.prev, w, w.next) >= 0
                        )
                          return !1;
                        w = w.prevZ;
                      }
                      for (; _ && _.z <= x; ) {
                        if (
                          _.x >= m &&
                          _.x <= v &&
                          _.y >= g &&
                          _.y <= y &&
                          _ !== i &&
                          _ !== o &&
                          s(a, h, c, d, f, p, _.x, _.y) &&
                          u(_.prev, _, _.next) >= 0
                        )
                          return !1;
                        _ = _.nextZ;
                      }
                      return !0;
                    })(e, i, a, h)
                  : (function (t) {
                      let e = t.prev,
                        n = t.next;
                      if (u(e, t, n) >= 0) return !1;
                      let r = e.x,
                        i = t.x,
                        o = n.x,
                        a = e.y,
                        l = t.y,
                        c = n.y,
                        f = r < i ? (r < o ? r : o) : i < o ? i : o,
                        h = a < l ? (a < c ? a : c) : l < c ? l : c,
                        d = r > i ? (r > o ? r : o) : i > o ? i : o,
                        p = a > l ? (a > c ? a : c) : l > c ? l : c,
                        m = n.next;
                      for (; m !== e; ) {
                        if (
                          m.x >= f &&
                          m.x <= d &&
                          m.y >= h &&
                          m.y <= p &&
                          s(r, a, i, l, o, c, m.x, m.y) &&
                          u(m.prev, m, m.next) >= 0
                        )
                          return !1;
                        m = m.next;
                      }
                      return !0;
                    })(e)
              ) {
                n.push(y.i, e.i, b.i), v(e), (e = b.next), (g = b.next);
                continue;
              }
              if ((e = b) === g) {
                d
                  ? 1 === d
                    ? t(
                        (e = (function (t, e) {
                          let n = t;
                          do {
                            let r = n.prev,
                              i = n.next.next;
                            !c(r, i) &&
                              f(r, n, n.next, i) &&
                              p(r, i) &&
                              p(i, r) &&
                              (e.push(r.i, n.i, i.i),
                              v(n),
                              v(n.next),
                              (n = t = i)),
                              (n = n.next);
                          } while (n !== t);
                          return o(n);
                        })(o(e), n)),
                        n,
                        r,
                        i,
                        a,
                        h,
                        2
                      )
                    : 2 === d &&
                      (function (e, n, r, i, a, l) {
                        let s = e;
                        do {
                          let e = s.next.next;
                          for (; e !== s.prev; ) {
                            var h, d;
                            if (
                              s.i !== e.i &&
                              ((h = s),
                              (d = e),
                              h.next.i !== d.i &&
                                h.prev.i !== d.i &&
                                !(function (t, e) {
                                  let n = t;
                                  do {
                                    if (
                                      n.i !== t.i &&
                                      n.next.i !== t.i &&
                                      n.i !== e.i &&
                                      n.next.i !== e.i &&
                                      f(n, n.next, t, e)
                                    )
                                      return !0;
                                    n = n.next;
                                  } while (n !== t);
                                  return !1;
                                })(h, d) &&
                                ((p(h, d) &&
                                  p(d, h) &&
                                  (function (t, e) {
                                    let n = t,
                                      r = !1,
                                      i = (t.x + e.x) / 2,
                                      o = (t.y + e.y) / 2;
                                    do
                                      n.y > o != n.next.y > o &&
                                        n.next.y !== n.y &&
                                        i <
                                          ((n.next.x - n.x) * (o - n.y)) /
                                            (n.next.y - n.y) +
                                            n.x &&
                                        (r = !r),
                                        (n = n.next);
                                    while (n !== t);
                                    return r;
                                  })(h, d) &&
                                  (u(h.prev, h, d.prev) || u(h, d.prev, d))) ||
                                  (c(h, d) &&
                                    u(h.prev, h, h.next) > 0 &&
                                    u(d.prev, d, d.next) > 0)))
                            ) {
                              let u = m(s, e);
                              (s = o(s, s.next)),
                                (u = o(u, u.next)),
                                t(s, n, r, i, a, l, 0),
                                t(u, n, r, i, a, l, 0);
                              return;
                            }
                            e = e.next;
                          }
                          s = s.next;
                        } while (s !== e);
                      })(e, n, r, i, a, h)
                  : t(o(e), n, r, i, a, h, 1);
                break;
              }
            }
          })(x, w, n, h, d, g, 0),
          w
        );
      }
      function i(t, e, n, r, i) {
        let o;
        if (
          i ===
          (function (t, e, n, r) {
            let i = 0;
            for (let o = e, a = n - r; o < n; o += r)
              (i += (t[a] - t[o]) * (t[o + 1] + t[a + 1])), (a = o);
            return i;
          })(t, e, n, r) >
            0
        )
          for (let i = e; i < n; i += r) o = g((i / r) | 0, t[i], t[i + 1], o);
        else
          for (let i = n - r; i >= e; i -= r)
            o = g((i / r) | 0, t[i], t[i + 1], o);
        return o && c(o, o.next) && (v(o), (o = o.next)), o;
      }
      function o(t, e) {
        if (!t) return t;
        e || (e = t);
        let n = t,
          r;
        do
          if (
            ((r = !1),
            !n.steiner && (c(n, n.next) || 0 === u(n.prev, n, n.next)))
          ) {
            if ((v(n), (n = e = n.prev) === n.next)) break;
            r = !0;
          } else n = n.next;
        while (r || n !== e);
        return e;
      }
      function a(t, e) {
        return t.x - e.x;
      }
      function l(t, e, n, r, i) {
        return (
          (t =
            ((t =
              ((t =
                ((t = ((t = ((t - n) * i) | 0) | (t << 8)) & 0xff00ff) |
                  (t << 4)) &
                0xf0f0f0f) |
                (t << 2)) &
              0x33333333) |
              (t << 1)) &
            0x55555555) |
          ((e =
            ((e =
              ((e =
                ((e = ((e = ((e - r) * i) | 0) | (e << 8)) & 0xff00ff) |
                  (e << 4)) &
                0xf0f0f0f) |
                (e << 2)) &
              0x33333333) |
              (e << 1)) &
            0x55555555) <<
            1)
        );
      }
      function s(t, e, n, r, i, o, a, l) {
        return (
          (i - a) * (e - l) >= (t - a) * (o - l) &&
          (t - a) * (r - l) >= (n - a) * (e - l) &&
          (n - a) * (o - l) >= (i - a) * (r - l)
        );
      }
      function u(t, e, n) {
        return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
      }
      function c(t, e) {
        return t.x === e.x && t.y === e.y;
      }
      function f(t, e, n, r) {
        let i = d(u(t, e, n)),
          o = d(u(t, e, r)),
          a = d(u(n, r, t)),
          l = d(u(n, r, e));
        return !!(
          (i !== o && a !== l) ||
          (0 === i && h(t, n, e)) ||
          (0 === o && h(t, r, e)) ||
          (0 === a && h(n, t, r)) ||
          (0 === l && h(n, e, r))
        );
      }
      function h(t, e, n) {
        return (
          e.x <= Math.max(t.x, n.x) &&
          e.x >= Math.min(t.x, n.x) &&
          e.y <= Math.max(t.y, n.y) &&
          e.y >= Math.min(t.y, n.y)
        );
      }
      function d(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0;
      }
      function p(t, e) {
        return 0 > u(t.prev, t, t.next)
          ? u(t, e, t.next) >= 0 && u(t, t.prev, e) >= 0
          : 0 > u(t, e, t.prev) || 0 > u(t, t.next, e);
      }
      function m(t, e) {
        let n = y(t.i, t.x, t.y),
          r = y(e.i, e.x, e.y),
          i = t.next,
          o = e.prev;
        return (
          (t.next = e),
          (e.prev = t),
          (n.next = i),
          (i.prev = n),
          (r.next = n),
          (n.prev = r),
          (o.next = r),
          (r.prev = o),
          r
        );
      }
      function g(t, e, n, r) {
        let i = y(t, e, n);
        return (
          r
            ? ((i.next = r.next), (i.prev = r), (r.next.prev = i), (r.next = i))
            : ((i.prev = i), (i.next = i)),
          i
        );
      }
      function v(t) {
        (t.next.prev = t.prev),
          (t.prev.next = t.next),
          t.prevZ && (t.prevZ.nextZ = t.nextZ),
          t.nextZ && (t.nextZ.prevZ = t.prevZ);
      }
      function y(t, e, n) {
        return {
          i: t,
          x: e,
          y: n,
          prev: null,
          next: null,
          z: 0,
          prevZ: null,
          nextZ: null,
          steiner: !1,
        };
      }
      function b(t) {
        let e = [],
          n = [],
          r = t[0][0].length,
          i = 0,
          o = 0;
        for (let a of t) {
          for (let t of a) for (let n = 0; n < r; n++) e.push(t[n]);
          o && ((i += o), n.push(i)), (o = a.length);
        }
        return { vertices: e, holes: n, dimensions: r };
      }
      n.d(e, { Ay: () => r, Bq: () => b });
    },
    24919: (t, e, n) => {
      "use strict";
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function i(t) {
        var e = (function (t, e) {
          if ("object" != typeof t || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e);
            if ("object" != typeof r) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t, "string");
        return "symbol" == typeof e ? e : e + "";
      }
      function o(t, e) {
        if (t) {
          if ("string" == typeof t) return r(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(t, e)
              : void 0
          );
        }
      }
      n.d(e, { A: () => a });
      var a = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          l = (e instanceof Array ? (e.length ? e : [void 0]) : [e]).map(
            function (t) {
              return { keyAccessor: t, isProp: !(t instanceof Function) };
            }
          ),
          s = t.reduce(function (t, e) {
            var r = t,
              o = e;
            return (
              l.forEach(function (t, e) {
                var a,
                  s = t.keyAccessor;
                if (t.isProp) {
                  var u = o,
                    c = u[s],
                    f = (function (t, e) {
                      if (null == t) return {};
                      var n,
                        r,
                        i = (function (t, e) {
                          if (null == t) return {};
                          var n = {};
                          for (var r in t)
                            if ({}.hasOwnProperty.call(t, r)) {
                              if (e.includes(r)) continue;
                              n[r] = t[r];
                            }
                          return n;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        for (r = 0; r < o.length; r++)
                          (n = o[r]),
                            e.includes(n) ||
                              ({}.propertyIsEnumerable.call(t, n) &&
                                (i[n] = t[n]));
                      }
                      return i;
                    })(u, [s].map(i));
                  (a = c), (o = f);
                } else a = s(o, e);
                e + 1 < l.length
                  ? (r.hasOwnProperty(a) || (r[a] = {}), (r = r[a]))
                  : n
                  ? (r.hasOwnProperty(a) || (r[a] = []), r[a].push(o))
                  : (r[a] = o);
              }),
              t
            );
          }, {});
        n instanceof Function &&
          (function t(e) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
            r === l.length
              ? Object.keys(e).forEach(function (t) {
                  return (e[t] = n(e[t]));
                })
              : Object.values(e).forEach(function (e) {
                  return t(e, r + 1);
                });
          })(s);
        var u = s;
        return (
          a &&
            ((u = []),
            (function t(e) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [];
              n.length === l.length
                ? u.push({ keys: n, vals: e })
                : Object.entries(e).forEach(function (e) {
                    var i =
                        (function (t) {
                          if (Array.isArray(t)) return t;
                        })(e) ||
                        (function (t, e) {
                          var n =
                            null == t
                              ? null
                              : ("undefined" != typeof Symbol &&
                                  t[Symbol.iterator]) ||
                                t["@@iterator"];
                          if (null != n) {
                            var r,
                              i,
                              o,
                              a,
                              l = [],
                              s = !0,
                              u = !1;
                            try {
                              for (
                                o = (n = n.call(t)).next;
                                !(s = (r = o.call(n)).done) &&
                                (l.push(r.value), 2 !== l.length);
                                s = !0
                              );
                            } catch (t) {
                              (u = !0), (i = t);
                            } finally {
                              try {
                                if (
                                  !s &&
                                  null != n.return &&
                                  ((a = n.return()), Object(a) !== a)
                                )
                                  return;
                              } finally {
                                if (u) throw i;
                              }
                            }
                            return l;
                          }
                        })(e, 2) ||
                        o(e, 2) ||
                        (function () {
                          throw TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })(),
                      a = i[0];
                    return t(
                      i[1],
                      [].concat(
                        (function (t) {
                          if (Array.isArray(t)) return r(t);
                        })(n) ||
                          (function (t) {
                            if (
                              ("undefined" != typeof Symbol &&
                                null != t[Symbol.iterator]) ||
                              null != t["@@iterator"]
                            )
                              return Array.from(t);
                          })(n) ||
                          o(n) ||
                          (function () {
                            throw TypeError(
                              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                          })(),
                        [a]
                      )
                    );
                  });
            })(s),
            e instanceof Array &&
              0 === e.length &&
              1 === u.length &&
              (u[0].keys = [])),
          u
        );
      };
    },
    42353: (t, e, n) => {
      "use strict";
      n.d(e, { Af: () => b, Nz: () => m, u5: () => x, y3: () => w });
      var r,
        i,
        o = n(12115),
        a = Object.defineProperty,
        l = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        c = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        h = (t, e, n) =>
          e in t
            ? a(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n),
        d = (t, e) => {
          for (var n in e || (e = {})) c.call(e, n) && h(t, n, e[n]);
          if (u) for (var n of u(e)) f.call(e, n) && h(t, n, e[n]);
          return t;
        },
        p = (t, e) => l(t, s(e));
      function m(t, e, n) {
        if (!t) return;
        if (!0 === n(t)) return t;
        let r = e ? t.return : t.child;
        for (; r; ) {
          let t = m(r, e, n);
          if (t) return t;
          r = e ? null : r.sibling;
        }
      }
      function g(t) {
        try {
          return Object.defineProperties(t, {
            _currentRenderer: { get: () => null, set() {} },
            _currentRenderer2: { get: () => null, set() {} },
          });
        } catch (e) {
          return t;
        }
      }
      "undefined" != typeof window &&
      ((null == (r = window.document) ? void 0 : r.createElement) ||
        (null == (i = window.navigator) ? void 0 : i.product) === "ReactNative")
        ? o.useLayoutEffect
        : o.useEffect;
      let v = console.error;
      console.error = function () {
        let t = [...arguments].join("");
        if (
          (null == t ? void 0 : t.startsWith("Warning:")) &&
          t.includes("useContext")
        ) {
          console.error = v;
          return;
        }
        return v.apply(this, arguments);
      };
      let y = g(o.createContext(null));
      class b extends o.Component {
        render() {
          return o.createElement(
            y.Provider,
            { value: this._reactInternals },
            this.props.children
          );
        }
      }
      function x() {
        let t = o.useContext(y);
        if (null === t)
          throw Error(
            "its-fine: useFiber must be called within a <FiberProvider />!"
          );
        let e = o.useId();
        return o.useMemo(() => {
          for (let n of [t, null == t ? void 0 : t.alternate]) {
            if (!n) continue;
            let t = m(n, !1, (t) => {
              let n = t.memoizedState;
              for (; n; ) {
                if (n.memoizedState === e) return !0;
                n = n.next;
              }
            });
            if (t) return t;
          }
        }, [t, e]);
      }
      function w() {
        let t = (function () {
          let t = x(),
            [e] = o.useState(() => new Map());
          e.clear();
          let n = t;
          for (; n; ) {
            if (n.type && "object" == typeof n.type) {
              let t =
                void 0 === n.type._context && n.type.Provider === n.type
                  ? n.type
                  : n.type._context;
              t && t !== y && !e.has(t) && e.set(t, o.useContext(g(t)));
            }
            n = n.return;
          }
          return e;
        })();
        return o.useMemo(
          () =>
            Array.from(t.keys()).reduce(
              (e, n) => (r) =>
                o.createElement(
                  e,
                  null,
                  o.createElement(n.Provider, p(d({}, r), { value: t.get(n) }))
                ),
              (t) => o.createElement(b, d({}, t))
            ),
          [t]
        );
      }
    },
    18771: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => k });
      let r = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
      var i =
          "object" == typeof global &&
          global &&
          global.Object === Object &&
          global,
        o = "object" == typeof self && self && self.Object === Object && self,
        a = i || o || Function("return this")();
      let l = function () {
        return a.Date.now();
      };
      var s = /\s/;
      let u = function (t) {
        for (var e = t.length; e-- && s.test(t.charAt(e)); );
        return e;
      };
      var c = /^\s+/,
        f = a.Symbol,
        h = Object.prototype,
        d = h.hasOwnProperty,
        p = h.toString,
        m = f ? f.toStringTag : void 0;
      let g = function (t) {
        var e = d.call(t, m),
          n = t[m];
        try {
          t[m] = void 0;
          var r = !0;
        } catch (t) {}
        var i = p.call(t);
        return r && (e ? (t[m] = n) : delete t[m]), i;
      };
      var v = Object.prototype.toString,
        y = f ? f.toStringTag : void 0;
      let b = function (t) {
        var e;
        return (
          "symbol" == typeof t ||
          (null != t &&
            "object" == typeof t &&
            "[object Symbol]" ==
              (null == (e = t)
                ? void 0 === e
                  ? "[object Undefined]"
                  : "[object Null]"
                : y && y in Object(e)
                ? g(e)
                : v.call(e)))
        );
      };
      var x = 0 / 0,
        w = /^[-+]0x[0-9a-f]+$/i,
        _ = /^0b[01]+$/i,
        S = /^0o[0-7]+$/i,
        M = parseInt;
      let A = function (t) {
        if ("number" == typeof t) return t;
        if (b(t)) return x;
        if (r(t)) {
          var e,
            n = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = r(n) ? n + "" : n;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = (e = t) ? e.slice(0, u(e) + 1).replace(c, "") : e;
        var i = _.test(t);
        return i || S.test(t) ? M(t.slice(2), i ? 2 : 8) : w.test(t) ? x : +t;
      };
      var E = Math.max,
        j = Math.min;
      let P = function (t, e, n) {
        var i,
          o,
          a,
          s,
          u,
          c,
          f = 0,
          h = !1,
          d = !1,
          p = !0;
        if ("function" != typeof t) throw TypeError("Expected a function");
        function m(e) {
          var n = i,
            r = o;
          return (i = o = void 0), (f = e), (s = t.apply(r, n));
        }
        function g(t) {
          var n = t - c,
            r = t - f;
          return void 0 === c || n >= e || n < 0 || (d && r >= a);
        }
        function v() {
          var t,
            n,
            r,
            i = l();
          if (g(i)) return y(i);
          u = setTimeout(
            v,
            ((t = i - c), (n = i - f), (r = e - t), d ? j(r, a - n) : r)
          );
        }
        function y(t) {
          return ((u = void 0), p && i) ? m(t) : ((i = o = void 0), s);
        }
        function b() {
          var t,
            n = l(),
            r = g(n);
          if (((i = arguments), (o = this), (c = n), r)) {
            if (void 0 === u)
              return (f = t = c), (u = setTimeout(v, e)), h ? m(t) : s;
            if (d) return clearTimeout(u), (u = setTimeout(v, e)), m(c);
          }
          return void 0 === u && (u = setTimeout(v, e)), s;
        }
        return (
          (e = A(e) || 0),
          r(n) &&
            ((h = !!n.leading),
            (a = (d = "maxWait" in n) ? E(A(n.maxWait) || 0, e) : a),
            (p = "trailing" in n ? !!n.trailing : p)),
          (b.cancel = function () {
            void 0 !== u && clearTimeout(u), (f = 0), (i = c = o = u = void 0);
          }),
          (b.flush = function () {
            return void 0 === u ? s : y(l());
          }),
          b
        );
      };
      function T(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var O = (function (t, e, n) {
        return Object.defineProperty(t, "prototype", { writable: !1 }), t;
      })(function t(e, n) {
        var r = n.default,
          i = n.triggerUpdate,
          o = n.onChange;
        !(function (t, e) {
          if (!(t instanceof e))
            throw TypeError("Cannot call a class as a function");
        })(this, t),
          (this.name = e),
          (this.defaultVal = void 0 === r ? null : r),
          (this.triggerUpdate = void 0 === i || i),
          (this.onChange = void 0 === o ? function (t, e) {} : o);
      });
      function k(t) {
        var e = t.stateInit,
          n =
            void 0 === e
              ? function () {
                  return {};
                }
              : e,
          r = t.props,
          i = void 0 === r ? {} : r,
          o = t.methods,
          a = void 0 === o ? {} : o,
          l = t.aliases,
          s = void 0 === l ? {} : l,
          u = t.init,
          c = void 0 === u ? function () {} : u,
          f = t.update,
          h = void 0 === f ? function () {} : f,
          d = Object.keys(i).map(function (t) {
            return new O(t, i[t]);
          });
        return function t() {
          for (var e = arguments.length, r = Array(e), i = 0; i < e; i++)
            r[i] = arguments[i];
          var o = !!(this instanceof t ? this.constructor : void 0),
            l = o ? r.shift() : void 0,
            u = r[0],
            f = void 0 === u ? {} : u,
            p = Object.assign({}, n instanceof Function ? n(f) : n, {
              initialised: !1,
            }),
            m = {};
          function g(t) {
            return v(t, f), y(), g;
          }
          var v = function (t, e) {
              c.call(g, t, p, e), (p.initialised = !0);
            },
            y = P(function () {
              p.initialised && (h.call(g, p, m), (m = {}));
            }, 1);
          return (
            d.forEach(function (t) {
              var e, n, r, i, o, a, l;
              g[t.name] =
                ((e = t.name),
                (r = void 0 !== (n = t.triggerUpdate) && n),
                (o = void 0 === (i = t.onChange) ? function (t, e) {} : i),
                (l = void 0 === (a = t.defaultVal) ? null : a),
                function (t) {
                  var n = p[e];
                  if (!arguments.length) return n;
                  var i = void 0 === t ? l : t;
                  return (
                    (p[e] = i),
                    o.call(g, i, p, n),
                    m.hasOwnProperty(e) || (m[e] = n),
                    r && y(),
                    g
                  );
                });
            }),
            Object.keys(a).forEach(function (t) {
              g[t] = function () {
                for (
                  var e, n = arguments.length, r = Array(n), i = 0;
                  i < n;
                  i++
                )
                  r[i] = arguments[i];
                return (e = a[t]).call.apply(e, [g, p].concat(r));
              };
            }),
            Object.entries(s).forEach(function (t) {
              var e =
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })(t) ||
                  (function (t, e) {
                    var n =
                      null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                    if (null != n) {
                      var r,
                        i,
                        o,
                        a,
                        l = [],
                        s = !0,
                        u = !1;
                      try {
                        for (
                          o = (n = n.call(t)).next;
                          !(s = (r = o.call(n)).done) &&
                          (l.push(r.value), 2 !== l.length);
                          s = !0
                        );
                      } catch (t) {
                        (u = !0), (i = t);
                      } finally {
                        try {
                          if (
                            !s &&
                            null != n.return &&
                            ((a = n.return()), Object(a) !== a)
                          )
                            return;
                        } finally {
                          if (u) throw i;
                        }
                      }
                      return l;
                    }
                  })(t, 2) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return T(t, 2);
                      var n = {}.toString.call(t).slice(8, -1);
                      return (
                        "Object" === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        "Map" === n || "Set" === n
                          ? Array.from(t)
                          : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? T(t, 2)
                          : void 0
                      );
                    }
                  })(t, 2) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })(),
                n = e[0],
                r = e[1];
              return (g[n] = g[r]);
            }),
            (g.resetProps = function () {
              return (
                d.forEach(function (t) {
                  g[t.name](t.defaultVal);
                }),
                g
              );
            }),
            g.resetProps(),
            (p._rerender = y),
            o && l && g(l),
            g
          );
        };
      }
    },
    39210: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => nr });
      var r,
        i,
        o,
        a,
        l,
        s,
        u,
        c,
        f,
        h,
        d,
        p,
        m,
        g,
        v,
        y,
        b,
        x,
        w,
        _,
        S,
        M,
        A,
        E,
        j,
        P,
        T,
        O,
        k = n(27274);
      function F(t) {
        return Array.from(
          (function* (t) {
            for (let e of t) yield* e;
          })(t)
        );
      }
      function I(t, e) {
        let n, r;
        if (void 0 === e)
          for (let e of t)
            null != e &&
              (void 0 === n
                ? e >= e && (n = r = e)
                : (n > e && (n = e), r < e && (r = e)));
        else {
          let i = -1;
          for (let o of t)
            null != (o = e(o, ++i, t)) &&
              (void 0 === n
                ? o >= o && (n = r = o)
                : (n > o && (n = o), r < o && (r = o)));
        }
        return [n, r];
      }
      var C = n(34734);
      let N = (3 + 8881784197001252e-31) * 11102230246251565e-32;
      function z(t, e, n, r, i) {
        let o, a, l, s;
        let u = e[0],
          c = r[0],
          f = 0,
          h = 0;
        c > u == c > -u ? ((o = u), (u = e[++f])) : ((o = c), (c = r[++h]));
        let d = 0;
        if (f < t && h < n)
          for (
            c > u == c > -u
              ? ((a = u + o), (l = o - (a - u)), (u = e[++f]))
              : ((a = c + o), (l = o - (a - c)), (c = r[++h])),
              o = a,
              0 !== l && (i[d++] = l);
            f < t && h < n;

          )
            c > u == c > -u
              ? ((s = (a = o + u) - o),
                (l = o - (a - s) + (u - s)),
                (u = e[++f]))
              : ((s = (a = o + c) - o),
                (l = o - (a - s) + (c - s)),
                (c = r[++h])),
              (o = a),
              0 !== l && (i[d++] = l);
        for (; f < t; )
          (s = (a = o + u) - o),
            (l = o - (a - s) + (u - s)),
            (u = e[++f]),
            (o = a),
            0 !== l && (i[d++] = l);
        for (; h < n; )
          (s = (a = o + c) - o),
            (l = o - (a - s) + (c - s)),
            (c = r[++h]),
            (o = a),
            0 !== l && (i[d++] = l);
        return (0 !== o || 0 === d) && (i[d++] = o), d;
      }
      function R(t) {
        return new Float64Array(t);
      }
      let L = (3 + 17763568394002505e-31) * 11102230246251565e-32,
        U = (2 + 13322676295501878e-31) * 11102230246251565e-32,
        B =
          (9 + 7105427357601002e-30) *
          11102230246251565e-32 *
          11102230246251565e-32,
        D = R(4),
        H = R(8),
        q = R(12),
        V = R(16),
        $ = R(4);
      function G(t, e, n, r, i, o) {
        let a = (e - o) * (n - i),
          l = (t - i) * (r - o),
          s = a - l,
          u = Math.abs(a + l);
        return Math.abs(s) >= L * u
          ? s
          : -(function (t, e, n, r, i, o, a) {
              let l, s, u, c, f, h, d, p, m, g, v, y, b, x, w, _, S, M;
              let A = t - i,
                E = n - i,
                j = e - o,
                P = r - o;
              (x = A * P),
                (d = (h = 0x8000001 * A) - (h - A)),
                (p = A - d),
                (m = (h = 0x8000001 * P) - (h - P)),
                (w = p * (g = P - m) - (x - d * m - p * m - d * g)),
                (_ = j * E),
                (d = (h = 0x8000001 * j) - (h - j)),
                (p = j - d),
                (m = (h = 0x8000001 * E) - (h - E)),
                (v = w - (S = p * (g = E - m) - (_ - d * m - p * m - d * g))),
                (f = w - v),
                (D[0] = w - (v + f) + (f - S)),
                (f = (y = x + v) - x),
                (v = (b = x - (y - f) + (v - f)) - _),
                (f = b - v),
                (D[1] = b - (v + f) + (f - _)),
                (f = (M = y + v) - y),
                (D[2] = y - (M - f) + (v - f)),
                (D[3] = M);
              let T = (function (t, e) {
                  let n = e[0];
                  for (let t = 1; t < 4; t++) n += e[t];
                  return n;
                })(0, D),
                O = U * a;
              if (
                T >= O ||
                -T >= O ||
                ((f = t - A),
                (l = t - (A + f) + (f - i)),
                (f = n - E),
                (u = n - (E + f) + (f - i)),
                (f = e - j),
                (s = e - (j + f) + (f - o)),
                (f = r - P),
                (c = r - (P + f) + (f - o)),
                0 === l && 0 === s && 0 === u && 0 === c) ||
                ((O = B * a + N * Math.abs(T)),
                (T += A * c + P * l - (j * u + E * s)) >= O || -T >= O)
              )
                return T;
              (x = l * P),
                (d = (h = 0x8000001 * l) - (h - l)),
                (p = l - d),
                (m = (h = 0x8000001 * P) - (h - P)),
                (w = p * (g = P - m) - (x - d * m - p * m - d * g)),
                (_ = s * E),
                (d = (h = 0x8000001 * s) - (h - s)),
                (p = s - d),
                (m = (h = 0x8000001 * E) - (h - E)),
                (v = w - (S = p * (g = E - m) - (_ - d * m - p * m - d * g))),
                (f = w - v),
                ($[0] = w - (v + f) + (f - S)),
                (f = (y = x + v) - x),
                (v = (b = x - (y - f) + (v - f)) - _),
                (f = b - v),
                ($[1] = b - (v + f) + (f - _)),
                (f = (M = y + v) - y),
                ($[2] = y - (M - f) + (v - f)),
                ($[3] = M);
              let k = z(4, D, 4, $, H);
              (x = A * c),
                (d = (h = 0x8000001 * A) - (h - A)),
                (p = A - d),
                (m = (h = 0x8000001 * c) - (h - c)),
                (w = p * (g = c - m) - (x - d * m - p * m - d * g)),
                (_ = j * u),
                (d = (h = 0x8000001 * j) - (h - j)),
                (p = j - d),
                (m = (h = 0x8000001 * u) - (h - u)),
                (v = w - (S = p * (g = u - m) - (_ - d * m - p * m - d * g))),
                (f = w - v),
                ($[0] = w - (v + f) + (f - S)),
                (f = (y = x + v) - x),
                (v = (b = x - (y - f) + (v - f)) - _),
                (f = b - v),
                ($[1] = b - (v + f) + (f - _)),
                (f = (M = y + v) - y),
                ($[2] = y - (M - f) + (v - f)),
                ($[3] = M);
              let F = z(k, H, 4, $, q);
              (x = l * c),
                (d = (h = 0x8000001 * l) - (h - l)),
                (p = l - d),
                (m = (h = 0x8000001 * c) - (h - c)),
                (w = p * (g = c - m) - (x - d * m - p * m - d * g)),
                (_ = s * u),
                (d = (h = 0x8000001 * s) - (h - s)),
                (p = s - d),
                (m = (h = 0x8000001 * u) - (h - u)),
                (v = w - (S = p * (g = u - m) - (_ - d * m - p * m - d * g))),
                (f = w - v),
                ($[0] = w - (v + f) + (f - S)),
                (f = (y = x + v) - x),
                (v = (b = x - (y - f) + (v - f)) - _),
                (f = b - v),
                ($[1] = b - (v + f) + (f - _)),
                (f = (M = y + v) - y),
                ($[2] = y - (M - f) + (v - f)),
                ($[3] = M);
              let I = z(F, q, 4, $, V);
              return V[I - 1];
            })(t, e, n, r, i, o, u);
      }
      R(4),
        R(4),
        R(4),
        R(4),
        R(4),
        R(4),
        R(4),
        R(4),
        R(4),
        R(8),
        R(8),
        R(8),
        R(4),
        R(8),
        R(8),
        R(8),
        R(12);
      let Y = R(192),
        Z = R(192);
      R(4),
        R(4),
        R(4),
        R(4),
        R(4),
        R(4),
        R(4),
        R(4),
        R(8),
        R(8),
        R(8),
        R(8),
        R(8),
        R(8),
        R(8),
        R(8),
        R(8),
        R(4),
        R(4),
        R(4),
        R(8),
        R(16),
        R(16),
        R(16),
        R(32),
        R(32),
        R(48),
        R(64),
        R(1152),
        R(1152),
        R(4),
        R(4),
        R(4),
        R(4),
        R(4),
        R(4),
        R(4),
        R(4),
        R(4),
        R(4),
        R(24),
        R(24),
        R(24),
        R(24),
        R(24),
        R(24),
        R(24),
        R(24),
        R(24),
        R(24),
        R(1152),
        R(1152),
        R(1152),
        R(1152),
        R(1152),
        R(2304),
        R(2304),
        R(3456),
        R(5760),
        R(8),
        R(8),
        R(8),
        R(16),
        R(24),
        R(48),
        R(48),
        R(96),
        R(192),
        R(384),
        R(384),
        R(384),
        R(768),
        R(96),
        R(96),
        R(96),
        R(1152);
      let W = new Uint32Array(512);
      class X {
        static from(t, e = tt, n = te) {
          let r = t.length,
            i = new Float64Array(2 * r);
          for (let o = 0; o < r; o++) {
            let r = t[o];
            (i[2 * o] = e(r)), (i[2 * o + 1] = n(r));
          }
          return new X(i);
        }
        constructor(t) {
          let e = t.length >> 1;
          if (e > 0 && "number" != typeof t[0])
            throw Error("Expected coords to contain numbers.");
          this.coords = t;
          let n = Math.max(2 * e - 5, 0);
          (this._triangles = new Uint32Array(3 * n)),
            (this._halfedges = new Int32Array(3 * n)),
            (this._hashSize = Math.ceil(Math.sqrt(e))),
            (this._hullPrev = new Uint32Array(e)),
            (this._hullNext = new Uint32Array(e)),
            (this._hullTri = new Uint32Array(e)),
            (this._hullHash = new Int32Array(this._hashSize)),
            (this._ids = new Uint32Array(e)),
            (this._dists = new Float64Array(e)),
            this.update();
        }
        update() {
          let t, e, n;
          let {
              coords: r,
              _hullPrev: i,
              _hullNext: o,
              _hullTri: a,
              _hullHash: l,
            } = this,
            s = r.length >> 1,
            u = 1 / 0,
            c = 1 / 0,
            f = -1 / 0,
            h = -1 / 0;
          for (let t = 0; t < s; t++) {
            let e = r[2 * t],
              n = r[2 * t + 1];
            e < u && (u = e),
              n < c && (c = n),
              e > f && (f = e),
              n > h && (h = n),
              (this._ids[t] = t);
          }
          let d = (u + f) / 2,
            p = (c + h) / 2;
          for (let e = 0, n = 1 / 0; e < s; e++) {
            let i = K(d, p, r[2 * e], r[2 * e + 1]);
            i < n && ((t = e), (n = i));
          }
          let m = r[2 * t],
            g = r[2 * t + 1];
          for (let n = 0, i = 1 / 0; n < s; n++) {
            if (n === t) continue;
            let o = K(m, g, r[2 * n], r[2 * n + 1]);
            o < i && o > 0 && ((e = n), (i = o));
          }
          let v = r[2 * e],
            y = r[2 * e + 1],
            b = 1 / 0;
          for (let i = 0; i < s; i++) {
            if (i === t || i === e) continue;
            let o = (function (t, e, n, r, i, o) {
              let a = n - t,
                l = r - e,
                s = i - t,
                u = o - e,
                c = a * a + l * l,
                f = s * s + u * u,
                h = 0.5 / (a * u - l * s),
                d = (u * c - l * f) * h,
                p = (a * f - s * c) * h;
              return d * d + p * p;
            })(m, g, v, y, r[2 * i], r[2 * i + 1]);
            o < b && ((n = i), (b = o));
          }
          let x = r[2 * n],
            w = r[2 * n + 1];
          if (b === 1 / 0) {
            for (let t = 0; t < s; t++)
              this._dists[t] = r[2 * t] - r[0] || r[2 * t + 1] - r[1];
            Q(this._ids, this._dists, 0, s - 1);
            let t = new Uint32Array(s),
              e = 0;
            for (let n = 0, r = -1 / 0; n < s; n++) {
              let i = this._ids[n],
                o = this._dists[i];
              o > r && ((t[e++] = i), (r = o));
            }
            (this.hull = t.subarray(0, e)),
              (this.triangles = new Uint32Array(0)),
              (this.halfedges = new Uint32Array(0));
            return;
          }
          if (0 > G(m, g, v, y, x, w)) {
            let t = e,
              r = v,
              i = y;
            (e = n), (v = x), (y = w), (n = t), (x = r), (w = i);
          }
          let _ = (function (t, e, n, r, i, o) {
            let a = n - t,
              l = r - e,
              s = i - t,
              u = o - e,
              c = a * a + l * l,
              f = s * s + u * u,
              h = 0.5 / (a * u - l * s);
            return { x: t + (u * c - l * f) * h, y: e + (a * f - s * c) * h };
          })(m, g, v, y, x, w);
          (this._cx = _.x), (this._cy = _.y);
          for (let t = 0; t < s; t++)
            this._dists[t] = K(r[2 * t], r[2 * t + 1], _.x, _.y);
          Q(this._ids, this._dists, 0, s - 1), (this._hullStart = t);
          let S = 3;
          (o[t] = i[n] = e),
            (o[e] = i[t] = n),
            (o[n] = i[e] = t),
            (a[t] = 0),
            (a[e] = 1),
            (a[n] = 2),
            l.fill(-1),
            (l[this._hashKey(m, g)] = t),
            (l[this._hashKey(v, y)] = e),
            (l[this._hashKey(x, w)] = n),
            (this.trianglesLen = 0),
            this._addTriangle(t, e, n, -1, -1, -1);
          for (let s = 0, u, c; s < this._ids.length; s++) {
            let f = this._ids[s],
              h = r[2 * f],
              d = r[2 * f + 1];
            if (
              (s > 0 &&
                2220446049250313e-31 >= Math.abs(h - u) &&
                2220446049250313e-31 >= Math.abs(d - c)) ||
              ((u = h), (c = d), f === t || f === e || f === n)
            )
              continue;
            let p = 0;
            for (
              let t = 0, e = this._hashKey(h, d);
              t < this._hashSize &&
              (-1 === (p = l[(e + t) % this._hashSize]) || p === o[p]);
              t++
            );
            let m = (p = i[p]),
              g;
            for (
              ;
              (g = o[m]),
                G(h, d, r[2 * m], r[2 * m + 1], r[2 * g], r[2 * g + 1]) >= 0;

            )
              if ((m = g) === p) {
                m = -1;
                break;
              }
            if (-1 === m) continue;
            let v = this._addTriangle(m, f, o[m], -1, -1, a[m]);
            (a[f] = this._legalize(v + 2)), (a[m] = v), S++;
            let y = o[m];
            for (
              ;
              (g = o[y]),
                0 > G(h, d, r[2 * y], r[2 * y + 1], r[2 * g], r[2 * g + 1]);

            )
              (v = this._addTriangle(y, f, g, a[f], -1, a[y])),
                (a[f] = this._legalize(v + 2)),
                (o[y] = y),
                S--,
                (y = g);
            if (m === p)
              for (
                ;
                0 >
                G(
                  h,
                  d,
                  r[2 * (g = i[m])],
                  r[2 * g + 1],
                  r[2 * m],
                  r[2 * m + 1]
                );

              )
                (v = this._addTriangle(g, f, m, -1, a[m], a[g])),
                  this._legalize(v + 2),
                  (a[g] = v),
                  (o[m] = m),
                  S--,
                  (m = g);
            (this._hullStart = i[f] = m),
              (o[m] = i[y] = f),
              (o[f] = y),
              (l[this._hashKey(h, d)] = f),
              (l[this._hashKey(r[2 * m], r[2 * m + 1])] = m);
          }
          this.hull = new Uint32Array(S);
          for (let t = 0, e = this._hullStart; t < S; t++)
            (this.hull[t] = e), (e = o[e]);
          (this.triangles = this._triangles.subarray(0, this.trianglesLen)),
            (this.halfedges = this._halfedges.subarray(0, this.trianglesLen));
        }
        _hashKey(t, e) {
          return (
            Math.floor(
              (function (t, e) {
                let n = t / (Math.abs(t) + Math.abs(e));
                return (e > 0 ? 3 - n : 1 + n) / 4;
              })(t - this._cx, e - this._cy) * this._hashSize
            ) % this._hashSize
          );
        }
        _legalize(t) {
          let { _triangles: e, _halfedges: n, coords: r } = this,
            i = 0,
            o = 0;
          for (;;) {
            let a = n[t],
              l = t - (t % 3);
            if (((o = l + ((t + 2) % 3)), -1 === a)) {
              if (0 === i) break;
              t = W[--i];
              continue;
            }
            let s = a - (a % 3),
              u = l + ((t + 1) % 3),
              c = s + ((a + 2) % 3),
              f = e[o],
              h = e[t],
              d = e[u],
              p = e[c];
            if (
              (function (t, e, n, r, i, o, a, l) {
                let s = t - a,
                  u = e - l,
                  c = n - a,
                  f = r - l,
                  h = i - a,
                  d = o - l,
                  p = c * c + f * f,
                  m = h * h + d * d;
                return (
                  s * (f * m - p * d) -
                    u * (c * m - p * h) +
                    (s * s + u * u) * (c * d - f * h) <
                  0
                );
              })(
                r[2 * f],
                r[2 * f + 1],
                r[2 * h],
                r[2 * h + 1],
                r[2 * d],
                r[2 * d + 1],
                r[2 * p],
                r[2 * p + 1]
              )
            ) {
              (e[t] = p), (e[a] = f);
              let r = n[c];
              if (-1 === r) {
                let e = this._hullStart;
                do {
                  if (this._hullTri[e] === c) {
                    this._hullTri[e] = t;
                    break;
                  }
                  e = this._hullPrev[e];
                } while (e !== this._hullStart);
              }
              this._link(t, r), this._link(a, n[o]), this._link(o, c);
              let l = s + ((a + 1) % 3);
              i < W.length && (W[i++] = l);
            } else {
              if (0 === i) break;
              t = W[--i];
            }
          }
          return o;
        }
        _link(t, e) {
          (this._halfedges[t] = e), -1 !== e && (this._halfedges[e] = t);
        }
        _addTriangle(t, e, n, r, i, o) {
          let a = this.trianglesLen;
          return (
            (this._triangles[a] = t),
            (this._triangles[a + 1] = e),
            (this._triangles[a + 2] = n),
            this._link(a, r),
            this._link(a + 1, i),
            this._link(a + 2, o),
            (this.trianglesLen += 3),
            a
          );
        }
      }
      function K(t, e, n, r) {
        let i = t - n,
          o = e - r;
        return i * i + o * o;
      }
      function Q(t, e, n, r) {
        if (r - n <= 20)
          for (let i = n + 1; i <= r; i++) {
            let r = t[i],
              o = e[r],
              a = i - 1;
            for (; a >= n && e[t[a]] > o; ) t[a + 1] = t[a--];
            t[a + 1] = r;
          }
        else {
          let i = (n + r) >> 1,
            o = n + 1,
            a = r;
          J(t, i, o),
            e[t[n]] > e[t[r]] && J(t, n, r),
            e[t[o]] > e[t[r]] && J(t, o, r),
            e[t[n]] > e[t[o]] && J(t, n, o);
          let l = t[o],
            s = e[l];
          for (;;) {
            do o++;
            while (e[t[o]] < s);
            do a--;
            while (e[t[a]] > s);
            if (a < o) break;
            J(t, o, a);
          }
          (t[n + 1] = t[a]),
            (t[a] = l),
            r - o + 1 >= a - n
              ? (Q(t, e, o, r), Q(t, e, n, a - 1))
              : (Q(t, e, n, a - 1), Q(t, e, o, r));
        }
      }
      function J(t, e, n) {
        let r = t[e];
        (t[e] = t[n]), (t[n] = r);
      }
      function tt(t) {
        return t[0];
      }
      function te(t) {
        return t[1];
      }
      var tn,
        tr,
        ti,
        to,
        ta,
        tl = function (t, e, n = {}) {
          if (!t) throw Error("point is required");
          if (!e) throw Error("polygon is required");
          let r = (function (t) {
              if (!t) throw Error("coord is required");
              if (!Array.isArray(t)) {
                if (
                  "Feature" === t.type &&
                  null !== t.geometry &&
                  "Point" === t.geometry.type
                )
                  return [...t.geometry.coordinates];
                if ("Point" === t.type) return [...t.coordinates];
              }
              if (
                Array.isArray(t) &&
                t.length >= 2 &&
                !Array.isArray(t[0]) &&
                !Array.isArray(t[1])
              )
                return [...t];
              throw Error("coord must be GeoJSON Point or an Array of numbers");
            })(t),
            i = "Feature" === e.type ? e.geometry : e,
            o = i.type,
            a = e.bbox,
            l = i.coordinates;
          if (
            a &&
            !1 == (a[0] <= r[0] && a[1] <= r[1] && a[2] >= r[0] && a[3] >= r[1])
          )
            return !1;
          "Polygon" === o && (l = [l]);
          let s = !1;
          for (var u = 0; u < l.length; ++u) {
            let t = (function (t, e) {
              var n,
                r,
                i,
                o,
                a,
                l,
                s,
                u,
                c,
                f = 0,
                h = t[0],
                d = t[1],
                p = e.length;
              for (n = 0; n < p; n++) {
                r = 0;
                var m = e[n],
                  g = m.length - 1;
                if ((u = m[0])[0] !== m[g][0] && u[1] !== m[g][1])
                  throw Error(
                    "First and last coordinates in a ring must be the same"
                  );
                for (o = u[0] - h, a = u[1] - d; r < g; r++) {
                  if (
                    ((l = (c = m[r + 1])[0] - h),
                    (s = c[1] - d),
                    0 === a && 0 === s)
                  ) {
                    if ((l <= 0 && o >= 0) || (o <= 0 && l >= 0)) return 0;
                  } else if ((s >= 0 && a < 0) || (s < 0 && a >= 0)) {
                    if (0 === (i = G(o, l, a, s, 0, 0))) return 0;
                    ((i > 0 && s > 0 && a <= 0) ||
                      (i < 0 && s <= 0 && a > 0)) &&
                      f++;
                  }
                  (u = c), (a = s), (o = l);
                }
              }
              return f % 2 != 0;
            })(r, l[u]);
            if (0 === t) return !n.ignoreBoundary;
            t && (s = !0);
          }
          return s;
        },
        ts = n(18132),
        tu = n(18183),
        tc = n(55933),
        tf = new ts.ph(),
        th = new ts.ph(),
        td = {
          point: tc.A,
          lineStart: tc.A,
          lineEnd: tc.A,
          polygonStart: function () {
            (tf = new ts.ph()), (td.lineStart = tp), (td.lineEnd = tm);
          },
          polygonEnd: function () {
            var t = +tf;
            th.add(t < 0 ? tu.FA + t : t),
              (this.lineStart = this.lineEnd = this.point = tc.A);
          },
          sphere: function () {
            th.add(tu.FA);
          },
        };
      function tp() {
        td.point = tg;
      }
      function tm() {
        tv(tn, tr);
      }
      function tg(t, e) {
        (td.point = tv),
          (tn = t),
          (tr = e),
          (t *= tu.F2),
          (e *= tu.F2),
          (ti = t),
          (to = (0, tu.gn)((e = e / 2 + tu.gz))),
          (ta = (0, tu.F8)(e));
      }
      function tv(t, e) {
        (t *= tu.F2), (e *= tu.F2), (e = e / 2 + tu.gz);
        var n = t - ti,
          r = n >= 0 ? 1 : -1,
          i = r * n,
          o = (0, tu.gn)(e),
          a = (0, tu.F8)(e),
          l = ta * a,
          s = to * o + l * (0, tu.gn)(i),
          u = l * r * (0, tu.F8)(i);
        tf.add((0, tu.FP)(u, s)), (ti = t), (to = o), (ta = a);
      }
      function ty(t) {
        return [(0, tu.FP)(t[1], t[0]), (0, tu.qR)(t[2])];
      }
      function tb(t) {
        var e = t[0],
          n = t[1],
          r = (0, tu.gn)(n);
        return [r * (0, tu.gn)(e), r * (0, tu.F8)(e), (0, tu.F8)(n)];
      }
      function tx(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
      }
      function tw(t, e) {
        return [
          t[1] * e[2] - t[2] * e[1],
          t[2] * e[0] - t[0] * e[2],
          t[0] * e[1] - t[1] * e[0],
        ];
      }
      function t_(t, e) {
        (t[0] += e[0]), (t[1] += e[1]), (t[2] += e[2]);
      }
      function tS(t, e) {
        return [t[0] * e, t[1] * e, t[2] * e];
      }
      function tM(t) {
        var e = (0, tu.RZ)(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        (t[0] /= e), (t[1] /= e), (t[2] /= e);
      }
      var tA = n(39665),
        tE = {
          point: tj,
          lineStart: tT,
          lineEnd: tO,
          polygonStart: function () {
            (tE.point = tk),
              (tE.lineStart = tF),
              (tE.lineEnd = tI),
              (h = new ts.ph()),
              td.polygonStart();
          },
          polygonEnd: function () {
            td.polygonEnd(),
              (tE.point = tj),
              (tE.lineStart = tT),
              (tE.lineEnd = tO),
              tf < 0
                ? ((i = -(a = 180)), (o = -(l = 90)))
                : h > tu.Ni
                ? (l = 90)
                : h < -tu.Ni && (o = -90),
              (p[0] = i),
              (p[1] = a);
          },
          sphere: function () {
            (i = -(a = 180)), (o = -(l = 90));
          },
        };
      function tj(t, e) {
        d.push((p = [(i = t), (a = t)])), e < o && (o = e), e > l && (l = e);
      }
      function tP(t, e) {
        var n = tb([t * tu.F2, e * tu.F2]);
        if (f) {
          var r = tw(f, n),
            u = tw([r[1], -r[0], 0], r);
          tM(u), (u = ty(u));
          var c,
            h = t - s,
            m = h > 0 ? 1 : -1,
            g = u[0] * tu.uj * m,
            v = (0, tu.tn)(h) > 180;
          v ^ (m * s < g && g < m * t)
            ? (c = u[1] * tu.uj) > l && (l = c)
            : v ^ (m * s < (g = ((g + 360) % 360) - 180) && g < m * t)
            ? (c = -u[1] * tu.uj) < o && (o = c)
            : (e < o && (o = e), e > l && (l = e)),
            v
              ? t < s
                ? tC(i, t) > tC(i, a) && (a = t)
                : tC(t, a) > tC(i, a) && (i = t)
              : a >= i
              ? (t < i && (i = t), t > a && (a = t))
              : t > s
              ? tC(i, t) > tC(i, a) && (a = t)
              : tC(t, a) > tC(i, a) && (i = t);
        } else d.push((p = [(i = t), (a = t)]));
        e < o && (o = e), e > l && (l = e), (f = n), (s = t);
      }
      function tT() {
        tE.point = tP;
      }
      function tO() {
        (p[0] = i), (p[1] = a), (tE.point = tj), (f = null);
      }
      function tk(t, e) {
        if (f) {
          var n = t - s;
          h.add((0, tu.tn)(n) > 180 ? n + (n > 0 ? 360 : -360) : n);
        } else (u = t), (c = e);
        td.point(t, e), tP(t, e);
      }
      function tF() {
        td.lineStart();
      }
      function tI() {
        tk(u, c),
          td.lineEnd(),
          (0, tu.tn)(h) > tu.Ni && (i = -(a = 180)),
          (p[0] = i),
          (p[1] = a),
          (f = null);
      }
      function tC(t, e) {
        return (e -= t) < 0 ? e + 360 : e;
      }
      function tN(t, e) {
        return t[0] - e[0];
      }
      function tz(t, e) {
        return t[0] <= t[1] ? t[0] <= e && e <= t[1] : e < t[0] || t[1] < e;
      }
      function tR(t) {
        var e, n, r, s, u, c, f;
        if (
          ((l = a = -(i = o = 1 / 0)),
          (d = []),
          (0, tA.A)(t, tE),
          (n = d.length))
        ) {
          for (d.sort(tN), e = 1, u = [(r = d[0])]; e < n; ++e)
            tz(r, (s = d[e])[0]) || tz(r, s[1])
              ? (tC(r[0], s[1]) > tC(r[0], r[1]) && (r[1] = s[1]),
                tC(s[0], r[1]) > tC(r[0], r[1]) && (r[0] = s[0]))
              : u.push((r = s));
          for (
            c = -1 / 0, n = u.length - 1, e = 0, r = u[n];
            e <= n;
            r = s, ++e
          )
            (s = u[e]),
              (f = tC(r[1], s[0])) > c && ((c = f), (i = s[0]), (a = r[1]));
        }
        return (
          (d = p = null),
          i === 1 / 0 || o === 1 / 0
            ? [
                [NaN, NaN],
                [NaN, NaN],
              ]
            : [
                [i, o],
                [a, l],
              ]
        );
      }
      var tL = n(11863),
        tU = n(13968);
      function tB(t) {
        return (0, tu.tn)(t[0]) <= tu.pi
          ? t[0]
          : (0, tu._S)(t[0]) * ((((0, tu.tn)(t[0]) + tu.pi) % tu.FA) - tu.pi);
      }
      function tD(t, e) {
        var n = tB(e),
          r = e[1],
          i = (0, tu.F8)(r),
          o = [(0, tu.F8)(n), -(0, tu.gn)(n), 0],
          a = 0,
          l = 0,
          s = new ts.ph();
        1 === i ? (r = tu.TW + tu.Ni) : -1 === i && (r = -tu.TW - tu.Ni);
        for (var u = 0, c = t.length; u < c; ++u)
          if ((h = (f = t[u]).length))
            for (
              var f,
                h,
                d = f[h - 1],
                p = tB(d),
                m = d[1] / 2 + tu.gz,
                g = (0, tu.F8)(m),
                v = (0, tu.gn)(m),
                y = 0;
              y < h;
              ++y, p = x, g = _, v = S, d = b
            ) {
              var b = f[y],
                x = tB(b),
                w = b[1] / 2 + tu.gz,
                _ = (0, tu.F8)(w),
                S = (0, tu.gn)(w),
                M = x - p,
                A = M >= 0 ? 1 : -1,
                E = A * M,
                j = E > tu.pi,
                P = g * _;
              if (
                (s.add(
                  (0, tu.FP)(P * A * (0, tu.F8)(E), v * S + P * (0, tu.gn)(E))
                ),
                (a += j ? M + A * tu.FA : M),
                j ^ (p >= n) ^ (x >= n))
              ) {
                var T = tw(tb(d), tb(b));
                tM(T);
                var O = tw(o, T);
                tM(O);
                var k = (j ^ (M >= 0) ? -1 : 1) * (0, tu.qR)(O[2]);
                (r > k || (r === k && (T[0] || T[1]))) &&
                  (l += j ^ (M >= 0) ? 1 : -1);
              }
            }
        return (a < -tu.Ni || (a < tu.Ni && s < -tu.$t)) ^ (1 & l);
      }
      var tH = {
          Feature: function (t, e) {
            return tV(t.geometry, e);
          },
          FeatureCollection: function (t, e) {
            for (var n = t.features, r = -1, i = n.length; ++r < i; )
              if (tV(n[r].geometry, e)) return !0;
            return !1;
          },
        },
        tq = {
          Sphere: function () {
            return !0;
          },
          Point: function (t, e) {
            return t$(t.coordinates, e);
          },
          MultiPoint: function (t, e) {
            for (var n = t.coordinates, r = -1, i = n.length; ++r < i; )
              if (t$(n[r], e)) return !0;
            return !1;
          },
          LineString: function (t, e) {
            return tG(t.coordinates, e);
          },
          MultiLineString: function (t, e) {
            for (var n = t.coordinates, r = -1, i = n.length; ++r < i; )
              if (tG(n[r], e)) return !0;
            return !1;
          },
          Polygon: function (t, e) {
            return tY(t.coordinates, e);
          },
          MultiPolygon: function (t, e) {
            for (var n = t.coordinates, r = -1, i = n.length; ++r < i; )
              if (tY(n[r], e)) return !0;
            return !1;
          },
          GeometryCollection: function (t, e) {
            for (var n = t.geometries, r = -1, i = n.length; ++r < i; )
              if (tV(n[r], e)) return !0;
            return !1;
          },
        };
      function tV(t, e) {
        return !!(t && tq.hasOwnProperty(t.type)) && tq[t.type](t, e);
      }
      function t$(t, e) {
        return 0 === (0, tL.A)(t, e);
      }
      function tG(t, e) {
        for (var n, r, i, o = 0, a = t.length; o < a; o++) {
          if (
            0 === (r = (0, tL.A)(t[o], e)) ||
            (o > 0 &&
              (i = (0, tL.A)(t[o], t[o - 1])) > 0 &&
              n <= i &&
              r <= i &&
              (n + r - i) * (1 - Math.pow((n - r) / i, 2)) < tu.$t * i)
          )
            return !0;
          n = r;
        }
        return !1;
      }
      function tY(t, e) {
        return !!tD(t.map(tZ), tW(e));
      }
      function tZ(t) {
        return (t = t.map(tW)).pop(), t;
      }
      function tW(t) {
        return [t[0] * tu.F2, t[1] * tu.F2];
      }
      var tX = {
        sphere: tc.A,
        point: tK,
        lineStart: tJ,
        lineEnd: t2,
        polygonStart: function () {
          (tX.lineStart = t3), (tX.lineEnd = t5);
        },
        polygonEnd: function () {
          (tX.lineStart = tJ), (tX.lineEnd = t2);
        },
      };
      function tK(t, e) {
        (t *= tu.F2), (e *= tu.F2);
        var n = (0, tu.gn)(e);
        tQ(n * (0, tu.gn)(t), n * (0, tu.F8)(t), (0, tu.F8)(e));
      }
      function tQ(t, e, n) {
        ++m, (v += (t - v) / m), (y += (e - y) / m), (b += (n - b) / m);
      }
      function tJ() {
        tX.point = t0;
      }
      function t0(t, e) {
        (t *= tu.F2), (e *= tu.F2);
        var n = (0, tu.gn)(e);
        (P = n * (0, tu.gn)(t)),
          (T = n * (0, tu.F8)(t)),
          (O = (0, tu.F8)(e)),
          (tX.point = t1),
          tQ(P, T, O);
      }
      function t1(t, e) {
        (t *= tu.F2), (e *= tu.F2);
        var n = (0, tu.gn)(e),
          r = n * (0, tu.gn)(t),
          i = n * (0, tu.F8)(t),
          o = (0, tu.F8)(e),
          a = (0, tu.FP)(
            (0, tu.RZ)(
              (a = T * o - O * i) * a +
                (a = O * r - P * o) * a +
                (a = P * i - T * r) * a
            ),
            P * r + T * i + O * o
          );
        (g += a),
          (x += a * (P + (P = r))),
          (w += a * (T + (T = i))),
          (_ += a * (O + (O = o))),
          tQ(P, T, O);
      }
      function t2() {
        tX.point = tK;
      }
      function t3() {
        tX.point = t8;
      }
      function t5() {
        t4(E, j), (tX.point = tK);
      }
      function t8(t, e) {
        (E = t), (j = e), (t *= tu.F2), (e *= tu.F2), (tX.point = t4);
        var n = (0, tu.gn)(e);
        (P = n * (0, tu.gn)(t)),
          (T = n * (0, tu.F8)(t)),
          (O = (0, tu.F8)(e)),
          tQ(P, T, O);
      }
      function t4(t, e) {
        (t *= tu.F2), (e *= tu.F2);
        var n = (0, tu.gn)(e),
          r = n * (0, tu.gn)(t),
          i = n * (0, tu.F8)(t),
          o = (0, tu.F8)(e),
          a = T * o - O * i,
          l = O * r - P * o,
          s = P * i - T * r,
          u = (0, tu.dY)(a, l, s),
          c = (0, tu.qR)(u),
          f = u && -c / u;
        S.add(f * a),
          M.add(f * l),
          A.add(f * s),
          (g += c),
          (x += c * (P + (P = r))),
          (w += c * (T + (T = i))),
          (_ += c * (O + (O = o))),
          tQ(P, T, O);
      }
      function t6(t) {
        (m = g = v = y = b = x = w = _ = 0),
          (S = new ts.ph()),
          (M = new ts.ph()),
          (A = new ts.ph()),
          (0, tA.A)(t, tX);
        var e = +S,
          n = +M,
          r = +A,
          i = (0, tu.dY)(e, n, r);
        return i < tu.$t &&
          ((e = x),
          (n = w),
          (r = _),
          g < tu.Ni && ((e = v), (n = y), (r = b)),
          (i = (0, tu.dY)(e, n, r)) < tu.$t)
          ? [NaN, NaN]
          : [(0, tu.FP)(n, e) * tu.uj, (0, tu.qR)(r / i) * tu.uj];
      }
      class t9 {
        constructor() {
          (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
        }
        moveTo(t, e) {
          this._ += `M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +e)}`;
        }
        closePath() {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
        }
        lineTo(t, e) {
          this._ += `L${(this._x1 = +t)},${(this._y1 = +e)}`;
        }
        arc(t, e, n) {
          (t = +t), (e = +e);
          let r = t + (n = +n),
            i = e;
          if (n < 0) throw Error("negative radius");
          null === this._x1
            ? (this._ += `M${r},${i}`)
            : (Math.abs(this._x1 - r) > 1e-6 ||
                Math.abs(this._y1 - i) > 1e-6) &&
              (this._ += "L" + r + "," + i),
            n &&
              (this._ += `A${n},${n},0,1,1,${
                t - n
              },${e}A${n},${n},0,1,1,${(this._x1 = r)},${(this._y1 = i)}`);
        }
        rect(t, e, n, r) {
          this._ += `M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +e)}h${+n}v${+r}h${-n}Z`;
        }
        value() {
          return this._ || null;
        }
      }
      class t7 {
        constructor() {
          this._ = [];
        }
        moveTo(t, e) {
          this._.push([t, e]);
        }
        closePath() {
          this._.push(this._[0].slice());
        }
        lineTo(t, e) {
          this._.push([t, e]);
        }
        value() {
          return this._.length ? this._ : null;
        }
      }
      class et {
        constructor(t, [e, n, r, i] = [0, 0, 960, 500]) {
          if (!((r = +r) >= (e = +e)) || !((i = +i) >= (n = +n)))
            throw Error("invalid bounds");
          (this.delaunay = t),
            (this._circumcenters = new Float64Array(2 * t.points.length)),
            (this.vectors = new Float64Array(2 * t.points.length)),
            (this.xmax = r),
            (this.xmin = e),
            (this.ymax = i),
            (this.ymin = n),
            this._init();
        }
        update() {
          return this.delaunay.update(), this._init(), this;
        }
        _init() {
          let t, e;
          let {
              delaunay: { points: n, hull: r, triangles: i },
              vectors: o,
            } = this,
            a = (this.circumcenters = this._circumcenters.subarray(
              0,
              (i.length / 3) * 2
            ));
          for (let o = 0, l = 0, s = i.length, u, c; o < s; o += 3, l += 2) {
            let s = 2 * i[o],
              f = 2 * i[o + 1],
              h = 2 * i[o + 2],
              d = n[s],
              p = n[s + 1],
              m = n[f],
              g = n[f + 1],
              v = n[h],
              y = n[h + 1],
              b = m - d,
              x = g - p,
              w = v - d,
              _ = y - p,
              S = (b * _ - x * w) * 2;
            if (1e-9 > Math.abs(S)) {
              if (void 0 === t) {
                for (let i of ((t = e = 0), r))
                  (t += n[2 * i]), (e += n[2 * i + 1]);
                (t /= r.length), (e /= r.length);
              }
              let i = 1e9 * Math.sign((t - d) * _ - (e - p) * w);
              (u = (d + v) / 2 - i * _), (c = (p + y) / 2 + i * w);
            } else {
              let t = 1 / S,
                e = b * b + x * x,
                n = w * w + _ * _;
              (u = d + (_ * e - x * n) * t), (c = p + (b * n - w * e) * t);
            }
            (a[l] = u), (a[l + 1] = c);
          }
          let l = r[r.length - 1],
            s,
            u = 4 * l,
            c,
            f = n[2 * l],
            h,
            d = n[2 * l + 1];
          o.fill(0);
          for (let t = 0; t < r.length; ++t)
            (l = r[t]),
              (s = u),
              (c = f),
              (h = d),
              (u = 4 * l),
              (f = n[2 * l]),
              (d = n[2 * l + 1]),
              (o[s + 2] = o[u] = h - d),
              (o[s + 3] = o[u + 1] = f - c);
        }
        render(t) {
          let e = null == t ? (t = new t9()) : void 0,
            {
              delaunay: { halfedges: n, inedges: r, hull: i },
              circumcenters: o,
              vectors: a,
            } = this;
          if (i.length <= 1) return null;
          for (let e = 0, r = n.length; e < r; ++e) {
            let r = n[e];
            if (r < e) continue;
            let i = 2 * Math.floor(e / 3),
              a = 2 * Math.floor(r / 3),
              l = o[i],
              s = o[i + 1],
              u = o[a],
              c = o[a + 1];
            this._renderSegment(l, s, u, c, t);
          }
          let l,
            s = i[i.length - 1];
          for (let e = 0; e < i.length; ++e) {
            l = s;
            let n = 2 * Math.floor(r[(s = i[e])] / 3),
              u = o[n],
              c = o[n + 1],
              f = 4 * l,
              h = this._project(u, c, a[f + 2], a[f + 3]);
            h && this._renderSegment(u, c, h[0], h[1], t);
          }
          return e && e.value();
        }
        renderBounds(t) {
          let e = null == t ? (t = new t9()) : void 0;
          return (
            t.rect(
              this.xmin,
              this.ymin,
              this.xmax - this.xmin,
              this.ymax - this.ymin
            ),
            e && e.value()
          );
        }
        renderCell(t, e) {
          let n = null == e ? (e = new t9()) : void 0,
            r = this._clip(t);
          if (null === r || !r.length) return;
          e.moveTo(r[0], r[1]);
          let i = r.length;
          for (; r[0] === r[i - 2] && r[1] === r[i - 1] && i > 1; ) i -= 2;
          for (let t = 2; t < i; t += 2)
            (r[t] !== r[t - 2] || r[t + 1] !== r[t - 1]) &&
              e.lineTo(r[t], r[t + 1]);
          return e.closePath(), n && n.value();
        }
        *cellPolygons() {
          let {
            delaunay: { points: t },
          } = this;
          for (let e = 0, n = t.length / 2; e < n; ++e) {
            let t = this.cellPolygon(e);
            t && ((t.index = e), yield t);
          }
        }
        cellPolygon(t) {
          let e = new t7();
          return this.renderCell(t, e), e.value();
        }
        _renderSegment(t, e, n, r, i) {
          let o;
          let a = this._regioncode(t, e),
            l = this._regioncode(n, r);
          0 === a && 0 === l
            ? (i.moveTo(t, e), i.lineTo(n, r))
            : (o = this._clipSegment(t, e, n, r, a, l)) &&
              (i.moveTo(o[0], o[1]), i.lineTo(o[2], o[3]));
        }
        contains(t, e, n) {
          return (
            (e = +e) == e && (n = +n) == n && this.delaunay._step(t, e, n) === t
          );
        }
        *neighbors(t) {
          let e = this._clip(t);
          if (e)
            for (let n of this.delaunay.neighbors(t)) {
              let t = this._clip(n);
              if (t) {
                r: for (let r = 0, i = e.length; r < i; r += 2)
                  for (let o = 0, a = t.length; o < a; o += 2)
                    if (
                      e[r] === t[o] &&
                      e[r + 1] === t[o + 1] &&
                      e[(r + 2) % i] === t[(o + a - 2) % a] &&
                      e[(r + 3) % i] === t[(o + a - 1) % a]
                    ) {
                      yield n;
                      break r;
                    }
              }
            }
        }
        _cell(t) {
          let {
              circumcenters: e,
              delaunay: { inedges: n, halfedges: r, triangles: i },
            } = this,
            o = n[t];
          if (-1 === o) return null;
          let a = [],
            l = o;
          do {
            let n = Math.floor(l / 3);
            if (
              (a.push(e[2 * n], e[2 * n + 1]),
              i[(l = l % 3 == 2 ? l - 2 : l + 1)] !== t)
            )
              break;
            l = r[l];
          } while (l !== o && -1 !== l);
          return a;
        }
        _clip(t) {
          if (0 === t && 1 === this.delaunay.hull.length)
            return [
              this.xmax,
              this.ymin,
              this.xmax,
              this.ymax,
              this.xmin,
              this.ymax,
              this.xmin,
              this.ymin,
            ];
          let e = this._cell(t);
          if (null === e) return null;
          let { vectors: n } = this,
            r = 4 * t;
          return this._simplify(
            n[r] || n[r + 1]
              ? this._clipInfinite(t, e, n[r], n[r + 1], n[r + 2], n[r + 3])
              : this._clipFinite(t, e)
          );
        }
        _clipFinite(t, e) {
          let n = e.length,
            r = null,
            i,
            o,
            a = e[n - 2],
            l = e[n - 1],
            s,
            u = this._regioncode(a, l),
            c,
            f = 0;
          for (let h = 0; h < n; h += 2)
            if (
              ((i = a),
              (o = l),
              (a = e[h]),
              (l = e[h + 1]),
              (s = u),
              (u = this._regioncode(a, l)),
              0 === s && 0 === u)
            )
              (c = f), (f = 0), r ? r.push(a, l) : (r = [a, l]);
            else {
              let e, n, h, d, p;
              if (0 === s) {
                if (null === (e = this._clipSegment(i, o, a, l, s, u)))
                  continue;
                [n, h, d, p] = e;
              } else {
                if (null === (e = this._clipSegment(a, l, i, o, u, s)))
                  continue;
                ([d, p, n, h] = e),
                  (c = f),
                  (f = this._edgecode(n, h)),
                  c && f && this._edge(t, c, f, r, r.length),
                  r ? r.push(n, h) : (r = [n, h]);
              }
              (c = f),
                (f = this._edgecode(d, p)),
                c && f && this._edge(t, c, f, r, r.length),
                r ? r.push(d, p) : (r = [d, p]);
            }
          if (r)
            (c = f),
              (f = this._edgecode(r[0], r[1])),
              c && f && this._edge(t, c, f, r, r.length);
          else if (
            this.contains(
              t,
              (this.xmin + this.xmax) / 2,
              (this.ymin + this.ymax) / 2
            )
          )
            return [
              this.xmax,
              this.ymin,
              this.xmax,
              this.ymax,
              this.xmin,
              this.ymax,
              this.xmin,
              this.ymin,
            ];
          return r;
        }
        _clipSegment(t, e, n, r, i, o) {
          let a = i < o;
          for (a && ([t, e, n, r, i, o] = [n, r, t, e, o, i]); ; ) {
            if (0 === i && 0 === o) return a ? [n, r, t, e] : [t, e, n, r];
            if (i & o) return null;
            let l,
              s,
              u = i || o;
            8 & u
              ? ((l = t + ((n - t) * (this.ymax - e)) / (r - e)),
                (s = this.ymax))
              : 4 & u
              ? ((l = t + ((n - t) * (this.ymin - e)) / (r - e)),
                (s = this.ymin))
              : 2 & u
              ? ((s = e + ((r - e) * (this.xmax - t)) / (n - t)),
                (l = this.xmax))
              : ((s = e + ((r - e) * (this.xmin - t)) / (n - t)),
                (l = this.xmin)),
              i
                ? ((t = l), (e = s), (i = this._regioncode(t, e)))
                : ((n = l), (r = s), (o = this._regioncode(n, r)));
          }
        }
        _clipInfinite(t, e, n, r, i, o) {
          let a = Array.from(e),
            l;
          if (
            ((l = this._project(a[0], a[1], n, r)) && a.unshift(l[0], l[1]),
            (l = this._project(a[a.length - 2], a[a.length - 1], i, o)) &&
              a.push(l[0], l[1]),
            (a = this._clipFinite(t, a)))
          )
            for (
              let e = 0,
                n = a.length,
                r,
                i = this._edgecode(a[n - 2], a[n - 1]);
              e < n;
              e += 2
            )
              (r = i),
                (i = this._edgecode(a[e], a[e + 1])),
                r && i && ((e = this._edge(t, r, i, a, e)), (n = a.length));
          else
            this.contains(
              t,
              (this.xmin + this.xmax) / 2,
              (this.ymin + this.ymax) / 2
            ) &&
              (a = [
                this.xmin,
                this.ymin,
                this.xmax,
                this.ymin,
                this.xmax,
                this.ymax,
                this.xmin,
                this.ymax,
              ]);
          return a;
        }
        _edge(t, e, n, r, i) {
          for (; e !== n; ) {
            let n, o;
            switch (e) {
              case 5:
                e = 4;
                continue;
              case 4:
                (e = 6), (n = this.xmax), (o = this.ymin);
                break;
              case 6:
                e = 2;
                continue;
              case 2:
                (e = 10), (n = this.xmax), (o = this.ymax);
                break;
              case 10:
                e = 8;
                continue;
              case 8:
                (e = 9), (n = this.xmin), (o = this.ymax);
                break;
              case 9:
                e = 1;
                continue;
              case 1:
                (e = 5), (n = this.xmin), (o = this.ymin);
            }
            (r[i] !== n || r[i + 1] !== o) &&
              this.contains(t, n, o) &&
              (r.splice(i, 0, n, o), (i += 2));
          }
          return i;
        }
        _project(t, e, n, r) {
          let i = 1 / 0,
            o,
            a,
            l;
          if (r < 0) {
            if (e <= this.ymin) return null;
            (o = (this.ymin - e) / r) < i &&
              ((l = this.ymin), (a = t + (i = o) * n));
          } else if (r > 0) {
            if (e >= this.ymax) return null;
            (o = (this.ymax - e) / r) < i &&
              ((l = this.ymax), (a = t + (i = o) * n));
          }
          if (n > 0) {
            if (t >= this.xmax) return null;
            (o = (this.xmax - t) / n) < i &&
              ((a = this.xmax), (l = e + (i = o) * r));
          } else if (n < 0) {
            if (t <= this.xmin) return null;
            (o = (this.xmin - t) / n) < i &&
              ((a = this.xmin), (l = e + (i = o) * r));
          }
          return [a, l];
        }
        _edgecode(t, e) {
          return (
            (t === this.xmin ? 1 : t === this.xmax ? 2 : 0) |
            (e === this.ymin ? 4 : e === this.ymax ? 8 : 0)
          );
        }
        _regioncode(t, e) {
          return (
            (t < this.xmin ? 1 : t > this.xmax ? 2 : 0) |
            (e < this.ymin ? 4 : e > this.ymax ? 8 : 0)
          );
        }
        _simplify(t) {
          if (t && t.length > 4) {
            for (let e = 0; e < t.length; e += 2) {
              let n = (e + 2) % t.length,
                r = (e + 4) % t.length;
              ((t[e] === t[n] && t[n] === t[r]) ||
                (t[e + 1] === t[n + 1] && t[n + 1] === t[r + 1])) &&
                (t.splice(n, 2), (e -= 2));
            }
            t.length || (t = null);
          }
          return t;
        }
      }
      let ee = 2 * Math.PI,
        en = Math.pow;
      function er(t) {
        return t[0];
      }
      function ei(t) {
        return t[1];
      }
      class eo {
        static from(t, e = er, n = ei, r) {
          return new eo(
            "length" in t
              ? (function (t, e, n, r) {
                  let i = t.length,
                    o = new Float64Array(2 * i);
                  for (let a = 0; a < i; ++a) {
                    let i = t[a];
                    (o[2 * a] = e.call(r, i, a, t)),
                      (o[2 * a + 1] = n.call(r, i, a, t));
                  }
                  return o;
                })(t, e, n, r)
              : Float64Array.from(
                  (function* (t, e, n, r) {
                    let i = 0;
                    for (let o of t)
                      yield e.call(r, o, i, t), yield n.call(r, o, i, t), ++i;
                  })(t, e, n, r)
                )
          );
        }
        constructor(t) {
          (this._delaunator = new X(t)),
            (this.inedges = new Int32Array(t.length / 2)),
            (this._hullIndex = new Int32Array(t.length / 2)),
            (this.points = this._delaunator.coords),
            this._init();
        }
        update() {
          return this._delaunator.update(), this._init(), this;
        }
        _init() {
          let t = this._delaunator,
            e = this.points;
          if (
            t.hull &&
            t.hull.length > 2 &&
            (function (t) {
              let { triangles: e, coords: n } = t;
              for (let t = 0; t < e.length; t += 3) {
                let r = 2 * e[t],
                  i = 2 * e[t + 1],
                  o = 2 * e[t + 2];
                if (
                  (n[o] - n[r]) * (n[i + 1] - n[r + 1]) -
                    (n[i] - n[r]) * (n[o + 1] - n[r + 1]) >
                  1e-10
                )
                  return !1;
              }
              return !0;
            })(t)
          ) {
            this.collinear = Int32Array.from(
              { length: e.length / 2 },
              (t, e) => e
            ).sort(
              (t, n) => e[2 * t] - e[2 * n] || e[2 * t + 1] - e[2 * n + 1]
            );
            let t = this.collinear[0],
              i = this.collinear[this.collinear.length - 1],
              o = [e[2 * t], e[2 * t + 1], e[2 * i], e[2 * i + 1]],
              a = 1e-8 * Math.hypot(o[3] - o[1], o[2] - o[0]);
            for (let t = 0, i = e.length / 2; t < i; ++t) {
              var n, r;
              let i = [
                (n = e[2 * t]) + Math.sin(n + (r = e[2 * t + 1])) * a,
                r + Math.cos(n - r) * a,
              ];
              (e[2 * t] = i[0]), (e[2 * t + 1] = i[1]);
            }
            this._delaunator = new X(e);
          } else delete this.collinear;
          let i = (this.halfedges = this._delaunator.halfedges),
            o = (this.hull = this._delaunator.hull),
            a = (this.triangles = this._delaunator.triangles),
            l = this.inedges.fill(-1),
            s = this._hullIndex.fill(-1);
          for (let t = 0, e = i.length; t < e; ++t) {
            let e = a[t % 3 == 2 ? t - 2 : t + 1];
            (-1 === i[t] || -1 === l[e]) && (l[e] = t);
          }
          for (let t = 0, e = o.length; t < e; ++t) s[o[t]] = t;
          o.length <= 2 &&
            o.length > 0 &&
            ((this.triangles = new Int32Array(3).fill(-1)),
            (this.halfedges = new Int32Array(3).fill(-1)),
            (this.triangles[0] = o[0]),
            (l[o[0]] = 1),
            2 === o.length &&
              ((l[o[1]] = 0),
              (this.triangles[1] = o[1]),
              (this.triangles[2] = o[1])));
        }
        voronoi(t) {
          return new et(this, t);
        }
        *neighbors(t) {
          let {
            inedges: e,
            hull: n,
            _hullIndex: r,
            halfedges: i,
            triangles: o,
            collinear: a,
          } = this;
          if (a) {
            let e = a.indexOf(t);
            e > 0 && (yield a[e - 1]), e < a.length - 1 && (yield a[e + 1]);
            return;
          }
          let l = e[t];
          if (-1 === l) return;
          let s = l,
            u = -1;
          do {
            if ((yield (u = o[s]), o[(s = s % 3 == 2 ? s - 2 : s + 1)] !== t))
              return;
            if (-1 === (s = i[s])) {
              let e = n[(r[t] + 1) % n.length];
              e !== u && (yield e);
              return;
            }
          } while (s !== l);
        }
        find(t, e, n = 0) {
          let r;
          if ((t = +t) != t || (e = +e) != e) return -1;
          let i = n;
          for (; (r = this._step(n, t, e)) >= 0 && r !== n && r !== i; ) n = r;
          return r;
        }
        _step(t, e, n) {
          let {
            inedges: r,
            hull: i,
            _hullIndex: o,
            halfedges: a,
            triangles: l,
            points: s,
          } = this;
          if (-1 === r[t] || !s.length) return (t + 1) % (s.length >> 1);
          let u = t,
            c = en(e - s[2 * t], 2) + en(n - s[2 * t + 1], 2),
            f = r[t],
            h = f;
          do {
            let r = l[h],
              f = en(e - s[2 * r], 2) + en(n - s[2 * r + 1], 2);
            if (
              (f < c && ((c = f), (u = r)),
              l[(h = h % 3 == 2 ? h - 2 : h + 1)] !== t)
            )
              break;
            if (-1 === (h = a[h])) {
              if (
                (h = i[(o[t] + 1) % i.length]) !== r &&
                en(e - s[2 * h], 2) + en(n - s[2 * h + 1], 2) < c
              )
                return h;
              break;
            }
          } while (h !== f);
          return u;
        }
        render(t) {
          let e = null == t ? (t = new t9()) : void 0,
            { points: n, halfedges: r, triangles: i } = this;
          for (let e = 0, o = r.length; e < o; ++e) {
            let o = r[e];
            if (o < e) continue;
            let a = 2 * i[e],
              l = 2 * i[o];
            t.moveTo(n[a], n[a + 1]), t.lineTo(n[l], n[l + 1]);
          }
          return this.renderHull(t), e && e.value();
        }
        renderPoints(t, e) {
          void 0 !== e ||
            (t && "function" == typeof t.moveTo) ||
            ((e = t), (t = null)),
            (e = void 0 == e ? 2 : +e);
          let n = null == t ? (t = new t9()) : void 0,
            { points: r } = this;
          for (let n = 0, i = r.length; n < i; n += 2) {
            let i = r[n],
              o = r[n + 1];
            t.moveTo(i + e, o), t.arc(i, o, e, 0, ee);
          }
          return n && n.value();
        }
        renderHull(t) {
          let e = null == t ? (t = new t9()) : void 0,
            { hull: n, points: r } = this,
            i = 2 * n[0],
            o = n.length;
          t.moveTo(r[i], r[i + 1]);
          for (let e = 1; e < o; ++e) {
            let i = 2 * n[e];
            t.lineTo(r[i], r[i + 1]);
          }
          return t.closePath(), e && e.value();
        }
        hullPolygon() {
          let t = new t7();
          return this.renderHull(t), t.value();
        }
        renderTriangle(t, e) {
          let n = null == e ? (e = new t9()) : void 0,
            { points: r, triangles: i } = this,
            o = 2 * i[(t *= 3)],
            a = 2 * i[t + 1],
            l = 2 * i[t + 2];
          return (
            e.moveTo(r[o], r[o + 1]),
            e.lineTo(r[a], r[a + 1]),
            e.lineTo(r[l], r[l + 1]),
            e.closePath(),
            n && n.value()
          );
        }
        *trianglePolygons() {
          let { triangles: t } = this;
          for (let e = 0, n = t.length / 3; e < n; ++e)
            yield this.trianglePolygon(e);
        }
        trianglePolygon(t) {
          let e = new t7();
          return this.renderTriangle(t, e), e.value();
        }
      }
      function ea(t, e) {
        function n(n, r) {
          return e((n = t(n, r))[0], n[1]);
        }
        return (
          t.invert &&
            e.invert &&
            (n.invert = function (n, r) {
              return (n = e.invert(n, r)) && t.invert(n[0], n[1]);
            }),
          n
        );
      }
      function el(t, e) {
        return (
          (0, tu.tn)(t) > tu.pi && (t -= Math.round(t / tu.FA) * tu.FA), [t, e]
        );
      }
      function es(t, e, n) {
        return (t %= tu.FA)
          ? e || n
            ? ea(ec(t), ef(e, n))
            : ec(t)
          : e || n
          ? ef(e, n)
          : el;
      }
      function eu(t) {
        return function (e, n) {
          return (
            (e += t),
            (0, tu.tn)(e) > tu.pi && (e -= Math.round(e / tu.FA) * tu.FA),
            [e, n]
          );
        };
      }
      function ec(t) {
        var e = eu(t);
        return (e.invert = eu(-t)), e;
      }
      function ef(t, e) {
        var n = (0, tu.gn)(t),
          r = (0, tu.F8)(t),
          i = (0, tu.gn)(e),
          o = (0, tu.F8)(e);
        function a(t, e) {
          var a = (0, tu.gn)(e),
            l = (0, tu.gn)(t) * a,
            s = (0, tu.F8)(t) * a,
            u = (0, tu.F8)(e),
            c = u * n + l * r;
          return [
            (0, tu.FP)(s * i - c * o, l * n - u * r),
            (0, tu.qR)(c * i + s * o),
          ];
        }
        return (
          (a.invert = function (t, e) {
            var a = (0, tu.gn)(e),
              l = (0, tu.gn)(t) * a,
              s = (0, tu.F8)(t) * a,
              u = (0, tu.F8)(e),
              c = u * i - s * o;
            return [
              (0, tu.FP)(s * i + u * o, l * n + c * r),
              (0, tu.qR)(c * n - l * r),
            ];
          }),
          a
        );
      }
      function eh() {
        var t,
          e = [];
        return {
          point: function (e, n, r) {
            t.push([e, n, r]);
          },
          lineStart: function () {
            e.push((t = []));
          },
          lineEnd: tc.A,
          rejoin: function () {
            e.length > 1 && e.push(e.pop().concat(e.shift()));
          },
          result: function () {
            var n = e;
            return (e = []), (t = null), n;
          },
        };
      }
      function ed(t, e) {
        return (
          (0, tu.tn)(t[0] - e[0]) < tu.Ni && (0, tu.tn)(t[1] - e[1]) < tu.Ni
        );
      }
      function ep(t, e, n, r) {
        (this.x = t),
          (this.z = e),
          (this.o = n),
          (this.e = r),
          (this.v = !1),
          (this.n = this.p = null);
      }
      function em(t, e, n, r, i) {
        var o,
          a,
          l = [],
          s = [];
        if (
          (t.forEach(function (t) {
            if (!((e = t.length - 1) <= 0)) {
              var e,
                n,
                r = t[0],
                a = t[e];
              if (ed(r, a)) {
                if (!r[2] && !a[2]) {
                  for (i.lineStart(), o = 0; o < e; ++o)
                    i.point((r = t[o])[0], r[1]);
                  i.lineEnd();
                  return;
                }
                a[0] += 2 * tu.Ni;
              }
              l.push((n = new ep(r, t, null, !0))),
                s.push((n.o = new ep(r, null, n, !1))),
                l.push((n = new ep(a, t, null, !1))),
                s.push((n.o = new ep(a, null, n, !0)));
            }
          }),
          l.length)
        ) {
          for (s.sort(e), eg(l), eg(s), o = 0, a = s.length; o < a; ++o)
            s[o].e = n = !n;
          for (var u, c, f = l[0]; ; ) {
            for (var h = f, d = !0; h.v; ) if ((h = h.n) === f) return;
            (u = h.z), i.lineStart();
            do {
              if (((h.v = h.o.v = !0), h.e)) {
                if (d)
                  for (o = 0, a = u.length; o < a; ++o)
                    i.point((c = u[o])[0], c[1]);
                else r(h.x, h.n.x, 1, i);
                h = h.n;
              } else {
                if (d)
                  for (o = (u = h.p.z).length - 1; o >= 0; --o)
                    i.point((c = u[o])[0], c[1]);
                else r(h.x, h.p.x, -1, i);
                h = h.p;
              }
              (u = (h = h.o).z), (d = !d);
            } while (!h.v);
            i.lineEnd();
          }
        }
      }
      function eg(t) {
        if ((e = t.length)) {
          for (var e, n, r = 0, i = t[0]; ++r < e; )
            (i.n = n = t[r]), (n.p = i), (i = n);
          (i.n = n = t[0]), (n.p = i);
        }
      }
      function ev(t, e, n, r) {
        return function (i) {
          var o,
            a,
            l,
            s = e(i),
            u = eh(),
            c = e(u),
            f = !1,
            h = {
              point: d,
              lineStart: m,
              lineEnd: g,
              polygonStart: function () {
                (h.point = v),
                  (h.lineStart = y),
                  (h.lineEnd = b),
                  (a = []),
                  (o = []);
              },
              polygonEnd: function () {
                (h.point = d), (h.lineStart = m), (h.lineEnd = g), (a = F(a));
                var t = tD(o, r);
                a.length
                  ? (f || (i.polygonStart(), (f = !0)), em(a, eb, t, n, i))
                  : t &&
                    (f || (i.polygonStart(), (f = !0)),
                    i.lineStart(),
                    n(null, null, 1, i),
                    i.lineEnd()),
                  f && (i.polygonEnd(), (f = !1)),
                  (a = o = null);
              },
              sphere: function () {
                i.polygonStart(),
                  i.lineStart(),
                  n(null, null, 1, i),
                  i.lineEnd(),
                  i.polygonEnd();
              },
            };
          function d(e, n) {
            t(e, n) && i.point(e, n);
          }
          function p(t, e) {
            s.point(t, e);
          }
          function m() {
            (h.point = p), s.lineStart();
          }
          function g() {
            (h.point = d), s.lineEnd();
          }
          function v(t, e) {
            l.push([t, e]), c.point(t, e);
          }
          function y() {
            c.lineStart(), (l = []);
          }
          function b() {
            v(l[0][0], l[0][1]), c.lineEnd();
            var t,
              e,
              n,
              r,
              s = c.clean(),
              h = u.result(),
              d = h.length;
            if ((l.pop(), o.push(l), (l = null), d)) {
              if (1 & s) {
                if ((e = (n = h[0]).length - 1) > 0) {
                  for (
                    f || (i.polygonStart(), (f = !0)), i.lineStart(), t = 0;
                    t < e;
                    ++t
                  )
                    i.point((r = n[t])[0], r[1]);
                  i.lineEnd();
                }
                return;
              }
              d > 1 && 2 & s && h.push(h.pop().concat(h.shift())),
                a.push(h.filter(ey));
            }
          }
          return h;
        };
      }
      function ey(t) {
        return t.length > 1;
      }
      function eb(t, e) {
        return (
          ((t = t.x)[0] < 0 ? t[1] - tu.TW - tu.Ni : tu.TW - t[1]) -
          ((e = e.x)[0] < 0 ? e[1] - tu.TW - tu.Ni : tu.TW - e[1])
        );
      }
      el.invert = el;
      let ex = ev(
        function () {
          return !0;
        },
        function (t) {
          var e,
            n = NaN,
            r = NaN,
            i = NaN;
          return {
            lineStart: function () {
              t.lineStart(), (e = 1);
            },
            point: function (o, a) {
              var l,
                s,
                u,
                c,
                f,
                h,
                d = o > 0 ? tu.pi : -tu.pi,
                p = (0, tu.tn)(o - n);
              (0, tu.tn)(p - tu.pi) < tu.Ni
                ? (t.point(n, (r = (r + a) / 2 > 0 ? tu.TW : -tu.TW)),
                  t.point(i, r),
                  t.lineEnd(),
                  t.lineStart(),
                  t.point(d, r),
                  t.point(o, r),
                  (e = 0))
                : i !== d &&
                  p >= tu.pi &&
                  ((0, tu.tn)(n - i) < tu.Ni && (n -= i * tu.Ni),
                  (0, tu.tn)(o - d) < tu.Ni && (o -= d * tu.Ni),
                  (l = n),
                  (s = r),
                  (u = o),
                  (h = (0, tu.F8)(l - u)),
                  (r =
                    (0, tu.tn)(h) > tu.Ni
                      ? (0, tu.rY)(
                          ((0, tu.F8)(s) * (f = (0, tu.gn)(a)) * (0, tu.F8)(u) -
                            (0, tu.F8)(a) *
                              (c = (0, tu.gn)(s)) *
                              (0, tu.F8)(l)) /
                            (c * f * h)
                        )
                      : (s + a) / 2),
                  t.point(i, r),
                  t.lineEnd(),
                  t.lineStart(),
                  t.point(d, r),
                  (e = 0)),
                t.point((n = o), (r = a)),
                (i = d);
            },
            lineEnd: function () {
              t.lineEnd(), (n = r = NaN);
            },
            clean: function () {
              return 2 - e;
            },
          };
        },
        function (t, e, n, r) {
          var i;
          if (null == t)
            (i = n * tu.TW),
              r.point(-tu.pi, i),
              r.point(0, i),
              r.point(tu.pi, i),
              r.point(tu.pi, 0),
              r.point(tu.pi, -i),
              r.point(0, -i),
              r.point(-tu.pi, -i),
              r.point(-tu.pi, 0),
              r.point(-tu.pi, i);
          else if ((0, tu.tn)(t[0] - e[0]) > tu.Ni) {
            var o = t[0] < e[0] ? tu.pi : -tu.pi;
            (i = (n * o) / 2), r.point(-o, i), r.point(0, i), r.point(o, i);
          } else r.point(e[0], e[1]);
        },
        [-tu.pi, -tu.TW]
      );
      function ew(t, e) {
        (e = tb(e)), (e[0] -= t), tM(e);
        var n = (0, tu.HQ)(-e[1]);
        return ((0 > -e[2] ? -n : n) + tu.FA - tu.Ni) % tu.FA;
      }
      let e_ = (t) => t;
      function eS(t) {
        return function (e) {
          var n = new eM();
          for (var r in t) n[r] = t[r];
          return (n.stream = e), n;
        };
      }
      function eM() {}
      eM.prototype = {
        constructor: eM,
        point: function (t, e) {
          this.stream.point(t, e);
        },
        sphere: function () {
          this.stream.sphere();
        },
        lineStart: function () {
          this.stream.lineStart();
        },
        lineEnd: function () {
          this.stream.lineEnd();
        },
        polygonStart: function () {
          this.stream.polygonStart();
        },
        polygonEnd: function () {
          this.stream.polygonEnd();
        },
      };
      var eA = 1 / 0,
        eE = 1 / 0,
        ej = -1 / 0,
        eP = ej,
        eT = {
          point: function (t, e) {
            t < eA && (eA = t),
              t > ej && (ej = t),
              e < eE && (eE = e),
              e > eP && (eP = e);
          },
          lineStart: tc.A,
          lineEnd: tc.A,
          polygonStart: tc.A,
          polygonEnd: tc.A,
          result: function () {
            var t = [
              [eA, eE],
              [ej, eP],
            ];
            return (ej = eP = -(eE = eA = 1 / 0)), t;
          },
        };
      function eO(t, e, n) {
        var r = t.clipExtent && t.clipExtent();
        return (
          t.scale(150).translate([0, 0]),
          null != r && t.clipExtent(null),
          (0, tA.A)(n, t.stream(eT)),
          e(eT.result()),
          null != r && t.clipExtent(r),
          t
        );
      }
      function ek(t, e, n) {
        return eO(
          t,
          function (n) {
            var r = e[1][0] - e[0][0],
              i = e[1][1] - e[0][1],
              o = Math.min(r / (n[1][0] - n[0][0]), i / (n[1][1] - n[0][1])),
              a = +e[0][0] + (r - o * (n[1][0] + n[0][0])) / 2,
              l = +e[0][1] + (i - o * (n[1][1] + n[0][1])) / 2;
            t.scale(150 * o).translate([a, l]);
          },
          n
        );
      }
      var eF = (0, tu.gn)(30 * tu.F2);
      function eI(t, e) {
        return +e
          ? (function (t, e) {
              function n(r, i, o, a, l, s, u, c, f, h, d, p, m, g) {
                var v = u - r,
                  y = c - i,
                  b = v * v + y * y;
                if (b > 4 * e && m--) {
                  var x = a + h,
                    w = l + d,
                    _ = s + p,
                    S = (0, tu.RZ)(x * x + w * w + _ * _),
                    M = (0, tu.qR)((_ /= S)),
                    A =
                      (0, tu.tn)((0, tu.tn)(_) - 1) < tu.Ni ||
                      (0, tu.tn)(o - f) < tu.Ni
                        ? (o + f) / 2
                        : (0, tu.FP)(w, x),
                    E = t(A, M),
                    j = E[0],
                    P = E[1],
                    T = j - r,
                    O = P - i,
                    k = y * T - v * O;
                  ((k * k) / b > e ||
                    (0, tu.tn)((v * T + y * O) / b - 0.5) > 0.3 ||
                    a * h + l * d + s * p < eF) &&
                    (n(r, i, o, a, l, s, j, P, A, (x /= S), (w /= S), _, m, g),
                    g.point(j, P),
                    n(j, P, A, x, w, _, u, c, f, h, d, p, m, g));
                }
              }
              return function (e) {
                var r,
                  i,
                  o,
                  a,
                  l,
                  s,
                  u,
                  c,
                  f,
                  h,
                  d,
                  p,
                  m = {
                    point: g,
                    lineStart: v,
                    lineEnd: b,
                    polygonStart: function () {
                      e.polygonStart(), (m.lineStart = x);
                    },
                    polygonEnd: function () {
                      e.polygonEnd(), (m.lineStart = v);
                    },
                  };
                function g(n, r) {
                  (n = t(n, r)), e.point(n[0], n[1]);
                }
                function v() {
                  (c = NaN), (m.point = y), e.lineStart();
                }
                function y(r, i) {
                  var o = tb([r, i]),
                    a = t(r, i);
                  n(
                    c,
                    f,
                    u,
                    h,
                    d,
                    p,
                    (c = a[0]),
                    (f = a[1]),
                    (u = r),
                    (h = o[0]),
                    (d = o[1]),
                    (p = o[2]),
                    16,
                    e
                  ),
                    e.point(c, f);
                }
                function b() {
                  (m.point = g), e.lineEnd();
                }
                function x() {
                  v(), (m.point = w), (m.lineEnd = _);
                }
                function w(t, e) {
                  y((r = t), e),
                    (i = c),
                    (o = f),
                    (a = h),
                    (l = d),
                    (s = p),
                    (m.point = y);
                }
                function _() {
                  n(c, f, u, h, d, p, i, o, r, a, l, s, 16, e),
                    (m.lineEnd = b),
                    b();
                }
                return m;
              };
            })(t, e)
          : eS({
              point: function (e, n) {
                (e = t(e, n)), this.stream.point(e[0], e[1]);
              },
            });
      }
      var eC = eS({
        point: function (t, e) {
          this.stream.point(t * tu.F2, e * tu.F2);
        },
      });
      function eN(t, e, n, r, i, o) {
        if (!o)
          return (function (t, e, n, r, i) {
            function o(o, a) {
              return [e + t * (o *= r), n - t * (a *= i)];
            }
            return (
              (o.invert = function (o, a) {
                return [((o - e) / t) * r, ((n - a) / t) * i];
              }),
              o
            );
          })(t, e, n, r, i);
        var a = (0, tu.gn)(o),
          l = (0, tu.F8)(o),
          s = a * t,
          u = l * t,
          c = a / t,
          f = l / t,
          h = (l * n - a * e) / t,
          d = (l * e + a * n) / t;
        function p(t, o) {
          return [s * (t *= r) - u * (o *= i) + e, n - u * t - s * o];
        }
        return (
          (p.invert = function (t, e) {
            return [r * (c * t - f * e + h), i * (d - f * t - c * e)];
          }),
          p
        );
      }
      function ez(t, e) {
        var n = (0, tu.gn)(e),
          r = 1 + (0, tu.gn)(t) * n;
        return [(n * (0, tu.F8)(t)) / r, (0, tu.F8)(e) / r];
      }
      ez.invert =
        ((r = function (t) {
          return 2 * (0, tu.rY)(t);
        }),
        function (t, e) {
          var n = (0, tu.RZ)(t * t + e * e),
            i = r(n),
            o = (0, tu.F8)(i),
            a = (0, tu.gn)(i);
          return [(0, tu.FP)(t * o, n * a), (0, tu.qR)(n && (e * o) / n)];
        });
      let eR = Math.PI,
        eL = eR / 2,
        eU = 180 / eR,
        eB = eR / 180,
        eD = Math.atan2,
        eH = Math.cos,
        eq = Math.max,
        eV = Math.min,
        e$ = Math.sin,
        eG =
          Math.sign ||
          function (t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
          },
        eY = Math.sqrt;
      function eZ(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
      }
      function eW(t, e) {
        return [
          t[1] * e[2] - t[2] * e[1],
          t[2] * e[0] - t[0] * e[2],
          t[0] * e[1] - t[1] * e[0],
        ];
      }
      function eX(t, e) {
        return [t[0] + e[0], t[1] + e[1], t[2] + e[2]];
      }
      function eK(t) {
        var e = eY(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        return [t[0] / e, t[1] / e, t[2] / e];
      }
      function eQ(t) {
        var e;
        return [
          eD(t[1], t[0]) * eU,
          ((e = eq(-1, eV(1, t[2]))) > 1 ? eL : e < -1 ? -eL : Math.asin(e)) *
            eU,
        ];
      }
      function eJ(t) {
        let e = t[0] * eB,
          n = t[1] * eB,
          r = eH(n);
        return [r * eH(e), r * e$(e), e$(n)];
      }
      function e0(t) {
        return eZ((t = t.map((t) => eJ(t)))[0], eW(t[2], t[1]));
      }
      function e1(t, e, n) {
        (t = eJ(t)), (e = eJ(e)), (n = eJ(n));
        let r = eG(eZ(eW(e, t), n));
        return eQ(eK(eX(t, e)).map((t) => r * t));
      }
      var e2 = n(59819);
      function e3(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function e5(t) {
        return (e5 = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function e8() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (e8 = function () {
          return !!t;
        })();
      }
      function e4(t, e) {
        return (e4 = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function e6(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                l = [],
                s = !0,
                u = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e));
                else
                  for (
                    ;
                    !(s = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== e);
                    s = !0
                  );
              } catch (t) {
                (u = !0), (i = t);
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          })(t, e) ||
          e7(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function e9(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return e3(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          e7(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function e7(t, e) {
        if (t) {
          if ("string" == typeof t) return e3(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? e3(t, e)
              : void 0
          );
        }
      }
      function nt(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return n
          ? (e && tH.hasOwnProperty(e.type) ? tH[e.type] : tV)(e, t)
          : tl(t, e);
      }
      var ne = window.THREE
          ? window.THREE
          : {
              BufferGeometry: k.BufferGeometry,
              Float32BufferAttribute: k.Float32BufferAttribute,
            },
        nn = new ne.BufferGeometry().setAttribute
          ? "setAttribute"
          : "addAttribute",
        nr = (function (t) {
          function e(t, n, r, i, o, a, l) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, e),
              (s = e5((s = e))),
              ((u = (function (t, e) {
                if (e && ("object" == typeof e || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(t);
              })(
                this,
                e8()
                  ? Reflect.construct(s, [], e5(this).constructor)
                  : s.apply(this, void 0)
              )).type = "ConicPolygonGeometry"),
              (u.parameters = {
                polygonGeoJson: t,
                startHeight: n,
                endHeight: r,
                closedBottom: i,
                closedTop: o,
                includeSides: a,
                curvatureResolution: l,
              }),
              (n = n || 0),
              (r = r || 1),
              (i = void 0 === i || i),
              (o = void 0 === o || o),
              (a = void 0 === a || a);
            var s,
              u,
              c = (function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = e.resolution,
                  r = void 0 === n ? 1 / 0 : n,
                  i = t.map(function (t) {
                    var e,
                      n = [];
                    return (
                      t.forEach(function (t) {
                        if (e) {
                          var i = (180 * (0, tL.A)(t, e)) / Math.PI;
                          if (i > r)
                            for (
                              var o = (0, tU.A)(e, t),
                                a = 1 / Math.ceil(i / r),
                                l = a;
                              l < 1;

                            )
                              n.push(o(l)), (l += a);
                        }
                        n.push((e = t));
                      }),
                      n
                    );
                  }),
                  o = F(i),
                  a = (function (t, e) {
                    var n = { type: "Polygon", coordinates: t },
                      r = e6(tR(n), 2),
                      i = e6(r[0], 2),
                      o = i[0],
                      a = i[1],
                      l = e6(r[1], 2),
                      s = l[0],
                      u = l[1];
                    if (Math.min(Math.abs(s - o), Math.abs(u - a)) < e)
                      return [];
                    var c = o > s || u >= 89 || a <= -89;
                    return (function (t) {
                      for (
                        var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = e.minLng,
                          r = e.maxLng,
                          i = e.minLat,
                          o = e.maxLat,
                          a = Math.round(Math.pow(360 / t, 2) / Math.PI),
                          l = (1 + Math.sqrt(5)) / 2,
                          s = function (t) {
                            return (
                              (a * (Math.cos(((t + 90) * Math.PI) / 180) + 1)) /
                              2
                            );
                          },
                          u = [
                            void 0 !== o ? Math.ceil(s(o)) : 0,
                            void 0 !== i ? Math.floor(s(i)) : a - 1,
                          ],
                          c =
                            void 0 === n && void 0 === r
                              ? function () {
                                  return !0;
                                }
                              : void 0 === n
                              ? function (t) {
                                  return t <= r;
                                }
                              : void 0 === r
                              ? function (t) {
                                  return t >= n;
                                }
                              : r >= n
                              ? function (t) {
                                  return t >= n && t <= r;
                                }
                              : function (t) {
                                  return t >= n || t <= r;
                                },
                          f = [],
                          h = u[0];
                        h <= u[1];
                        h++
                      ) {
                        var d = (((h / l) * 360) % 360) - 180;
                        c(d) &&
                          f.push([
                            d,
                            (Math.acos((2 * h) / a - 1) / Math.PI) * 180 - 90,
                          ]);
                      }
                      return f;
                    })(e, {
                      minLng: o,
                      maxLng: s,
                      minLat: a,
                      maxLat: u,
                    }).filter(function (t) {
                      return nt(t, n, c);
                    });
                  })(t, r),
                  l = [].concat(e9(o), e9(a)),
                  s = { type: "Polygon", coordinates: t },
                  u = e6(tR(s), 2),
                  c = e6(u[0], 2),
                  f = c[0],
                  h = c[1],
                  d = e6(u[1], 2),
                  p = d[0],
                  m = d[1],
                  g = f > p || m >= 89 || h <= -89,
                  v = [];
                if (g) {
                  var y = (function (t) {
                      let e = function (t) {
                        if (
                          ((e.delaunay = null),
                          (e._data = t),
                          "object" == typeof e._data &&
                            "FeatureCollection" === e._data.type &&
                            (e._data = e._data.features),
                          "object" == typeof e._data)
                        ) {
                          let t = e._data
                            .map((t) => [e._vx(t), e._vy(t), t])
                            .filter((t) => isFinite(t[0] + t[1]));
                          (e.points = t.map((t) => [t[0], t[1]])),
                            (e.valid = t.map((t) => t[2])),
                            (e.delaunay = (function (t) {
                              let e = (function (t) {
                                  if (t.length < 2) return {};
                                  let e = 0;
                                  for (
                                    ;
                                    isNaN(t[e][0] + t[e][1]) && e++ < t.length;

                                  );
                                  let n = (function (t) {
                                      function e(e) {
                                        return (
                                          (e = t(e[0] * tu.F2, e[1] * tu.F2)),
                                          (e[0] *= tu.uj),
                                          (e[1] *= tu.uj),
                                          e
                                        );
                                      }
                                      return (
                                        (t = es(
                                          t[0] * tu.F2,
                                          t[1] * tu.F2,
                                          t.length > 2 ? t[2] * tu.F2 : 0
                                        )),
                                        (e.invert = function (e) {
                                          return (
                                            (e = t.invert(
                                              e[0] * tu.F2,
                                              e[1] * tu.F2
                                            )),
                                            (e[0] *= tu.uj),
                                            (e[1] *= tu.uj),
                                            e
                                          );
                                        }),
                                        e
                                      );
                                    })(t[e]),
                                    r = (function (t) {
                                      var e,
                                        n,
                                        r,
                                        i,
                                        o,
                                        a,
                                        l,
                                        s,
                                        u,
                                        c,
                                        f = 150,
                                        h = 480,
                                        d = 250,
                                        p = 0,
                                        m = 0,
                                        g = 0,
                                        v = 0,
                                        y = 0,
                                        b = 0,
                                        x = 1,
                                        w = 1,
                                        _ = null,
                                        S = ex,
                                        M = null,
                                        A = e_,
                                        E = 0.5;
                                      function j(t) {
                                        return s(t[0] * tu.F2, t[1] * tu.F2);
                                      }
                                      function P(t) {
                                        return (
                                          (t = s.invert(t[0], t[1])) && [
                                            t[0] * tu.uj,
                                            t[1] * tu.uj,
                                          ]
                                        );
                                      }
                                      function T() {
                                        var t = eN(f, 0, 0, x, w, b).apply(
                                            null,
                                            e(p, m)
                                          ),
                                          r = eN(
                                            f,
                                            h - t[0],
                                            d - t[1],
                                            x,
                                            w,
                                            b
                                          );
                                        return (
                                          (n = es(g, v, y)),
                                          (l = ea(e, r)),
                                          (s = ea(n, l)),
                                          (a = eI(l, E)),
                                          O()
                                        );
                                      }
                                      function O() {
                                        return (u = c = null), j;
                                      }
                                      return (
                                        (j.stream = function (t) {
                                          var e;
                                          return u && c === t
                                            ? u
                                            : (u = eC(
                                                ((e = n),
                                                eS({
                                                  point: function (t, n) {
                                                    var r = e(t, n);
                                                    return this.stream.point(
                                                      r[0],
                                                      r[1]
                                                    );
                                                  },
                                                }))(S(a(A((c = t)))))
                                              ));
                                        }),
                                        (j.preclip = function (t) {
                                          return arguments.length
                                            ? ((S = t), (_ = void 0), O())
                                            : S;
                                        }),
                                        (j.postclip = function (t) {
                                          return arguments.length
                                            ? ((A = t),
                                              (M = r = i = o = null),
                                              O())
                                            : A;
                                        }),
                                        (j.clipAngle = function (t) {
                                          return arguments.length
                                            ? ((S = +t
                                                ? (function (t) {
                                                    var e = (0, tu.gn)(t),
                                                      n = 2 * tu.F2,
                                                      r = e > 0,
                                                      i = (0, tu.tn)(e) > tu.Ni;
                                                    function o(t, n) {
                                                      return (
                                                        (0, tu.gn)(t) *
                                                          (0, tu.gn)(n) >
                                                        e
                                                      );
                                                    }
                                                    function a(t, n, r) {
                                                      var i = tb(t),
                                                        o = tb(n),
                                                        a = [1, 0, 0],
                                                        l = tw(i, o),
                                                        s = tx(l, l),
                                                        u = l[0],
                                                        c = s - u * u;
                                                      if (!c) return !r && t;
                                                      var f = tw(a, l),
                                                        h = tS(a, (e * s) / c);
                                                      t_(
                                                        h,
                                                        tS(l, (-e * u) / c)
                                                      );
                                                      var d = tx(h, f),
                                                        p = tx(f, f),
                                                        m =
                                                          d * d -
                                                          p * (tx(h, h) - 1);
                                                      if (!(m < 0)) {
                                                        var g = (0, tu.RZ)(m),
                                                          v = tS(
                                                            f,
                                                            (-d - g) / p
                                                          );
                                                        if (
                                                          (t_(v, h),
                                                          (v = ty(v)),
                                                          !r)
                                                        )
                                                          return v;
                                                        var y,
                                                          b = t[0],
                                                          x = n[0],
                                                          w = t[1],
                                                          _ = n[1];
                                                        x < b &&
                                                          ((y = b),
                                                          (b = x),
                                                          (x = y));
                                                        var S = x - b,
                                                          M =
                                                            (0, tu.tn)(
                                                              S - tu.pi
                                                            ) < tu.Ni,
                                                          A = M || S < tu.Ni;
                                                        if (
                                                          (!M &&
                                                            _ < w &&
                                                            ((y = w),
                                                            (w = _),
                                                            (_ = y)),
                                                          A
                                                            ? M
                                                              ? (w + _ > 0) ^
                                                                (v[1] <
                                                                  ((0, tu.tn)(
                                                                    v[0] - b
                                                                  ) < tu.Ni
                                                                    ? w
                                                                    : _))
                                                              : w <= v[1] &&
                                                                v[1] <= _
                                                            : (S > tu.pi) ^
                                                              (b <= v[0] &&
                                                                v[0] <= x))
                                                        ) {
                                                          var E = tS(
                                                            f,
                                                            (-d + g) / p
                                                          );
                                                          return (
                                                            t_(E, h), [v, ty(E)]
                                                          );
                                                        }
                                                      }
                                                    }
                                                    function l(e, n) {
                                                      var i = r ? t : tu.pi - t,
                                                        o = 0;
                                                      return (
                                                        e < -i
                                                          ? (o |= 1)
                                                          : e > i && (o |= 2),
                                                        n < -i
                                                          ? (o |= 4)
                                                          : n > i && (o |= 8),
                                                        o
                                                      );
                                                    }
                                                    return ev(
                                                      o,
                                                      function (t) {
                                                        var e, n, s, u, c;
                                                        return {
                                                          lineStart:
                                                            function () {
                                                              (u = s = !1),
                                                                (c = 1);
                                                            },
                                                          point: function (
                                                            f,
                                                            h
                                                          ) {
                                                            var d,
                                                              p,
                                                              m = [f, h],
                                                              g = o(f, h),
                                                              v = r
                                                                ? g
                                                                  ? 0
                                                                  : l(f, h)
                                                                : g
                                                                ? l(
                                                                    f +
                                                                      (f < 0
                                                                        ? tu.pi
                                                                        : -tu.pi),
                                                                    h
                                                                  )
                                                                : 0;
                                                            !e &&
                                                              (u = s = g) &&
                                                              t.lineStart(),
                                                              g !== s &&
                                                                (!(p = a(
                                                                  e,
                                                                  m
                                                                )) ||
                                                                  ed(e, p) ||
                                                                  ed(m, p)) &&
                                                                (m[2] = 1),
                                                              g !== s
                                                                ? ((c = 0),
                                                                  g
                                                                    ? (t.lineStart(),
                                                                      (p = a(
                                                                        m,
                                                                        e
                                                                      )),
                                                                      t.point(
                                                                        p[0],
                                                                        p[1]
                                                                      ))
                                                                    : ((p = a(
                                                                        e,
                                                                        m
                                                                      )),
                                                                      t.point(
                                                                        p[0],
                                                                        p[1],
                                                                        2
                                                                      ),
                                                                      t.lineEnd()),
                                                                  (e = p))
                                                                : i &&
                                                                  e &&
                                                                  r ^ g &&
                                                                  !(v & n) &&
                                                                  (d = a(
                                                                    m,
                                                                    e,
                                                                    !0
                                                                  )) &&
                                                                  ((c = 0),
                                                                  r
                                                                    ? (t.lineStart(),
                                                                      t.point(
                                                                        d[0][0],
                                                                        d[0][1]
                                                                      ),
                                                                      t.point(
                                                                        d[1][0],
                                                                        d[1][1]
                                                                      ),
                                                                      t.lineEnd())
                                                                    : (t.point(
                                                                        d[1][0],
                                                                        d[1][1]
                                                                      ),
                                                                      t.lineEnd(),
                                                                      t.lineStart(),
                                                                      t.point(
                                                                        d[0][0],
                                                                        d[0][1],
                                                                        3
                                                                      ))),
                                                              !g ||
                                                                (e &&
                                                                  ed(e, m)) ||
                                                                t.point(
                                                                  m[0],
                                                                  m[1]
                                                                ),
                                                              (e = m),
                                                              (s = g),
                                                              (n = v);
                                                          },
                                                          lineEnd: function () {
                                                            s && t.lineEnd(),
                                                              (e = null);
                                                          },
                                                          clean: function () {
                                                            return (
                                                              c |
                                                              ((u && s) << 1)
                                                            );
                                                          },
                                                        };
                                                      },
                                                      function (e, r, i, o) {
                                                        (function (
                                                          t,
                                                          e,
                                                          n,
                                                          r,
                                                          i,
                                                          o
                                                        ) {
                                                          if (n) {
                                                            var a = (0, tu.gn)(
                                                                e
                                                              ),
                                                              l = (0, tu.F8)(e),
                                                              s = r * n;
                                                            null == i
                                                              ? ((i =
                                                                  e +
                                                                  r * tu.FA),
                                                                (o = e - s / 2))
                                                              : ((i = ew(a, i)),
                                                                (o = ew(a, o)),
                                                                (r > 0
                                                                  ? i < o
                                                                  : i > o) &&
                                                                  (i +=
                                                                    r * tu.FA));
                                                            for (
                                                              var u, c = i;
                                                              r > 0
                                                                ? c > o
                                                                : c < o;
                                                              c -= s
                                                            )
                                                              (u = ty([
                                                                a,
                                                                -l *
                                                                  (0, tu.gn)(c),
                                                                -l *
                                                                  (0, tu.F8)(c),
                                                              ])),
                                                                t.point(
                                                                  u[0],
                                                                  u[1]
                                                                );
                                                          }
                                                        })(o, t, n, i, e, r);
                                                      },
                                                      r
                                                        ? [0, -t]
                                                        : [-tu.pi, t - tu.pi]
                                                    );
                                                  })((_ = t * tu.F2))
                                                : ((_ = null), ex)),
                                              O())
                                            : _ * tu.uj;
                                        }),
                                        (j.clipExtent = function (t) {
                                          return arguments.length
                                            ? ((A =
                                                null == t
                                                  ? ((M = r = i = o = null), e_)
                                                  : (function (t, e, n, r) {
                                                      function i(i, o) {
                                                        return (
                                                          t <= i &&
                                                          i <= n &&
                                                          e <= o &&
                                                          o <= r
                                                        );
                                                      }
                                                      function o(i, o, l, u) {
                                                        var c = 0,
                                                          f = 0;
                                                        if (
                                                          null == i ||
                                                          (c = a(i, l)) !==
                                                            (f = a(o, l)) ||
                                                          (0 > s(i, o)) ^
                                                            (l > 0)
                                                        )
                                                          do
                                                            u.point(
                                                              0 === c || 3 === c
                                                                ? t
                                                                : n,
                                                              c > 1 ? r : e
                                                            );
                                                          while (
                                                            (c =
                                                              (c + l + 4) %
                                                              4) !== f
                                                          );
                                                        else
                                                          u.point(o[0], o[1]);
                                                      }
                                                      function a(r, i) {
                                                        return (0, tu.tn)(
                                                          r[0] - t
                                                        ) < tu.Ni
                                                          ? i > 0
                                                            ? 0
                                                            : 3
                                                          : (0, tu.tn)(
                                                              r[0] - n
                                                            ) < tu.Ni
                                                          ? i > 0
                                                            ? 2
                                                            : 1
                                                          : (0, tu.tn)(
                                                              r[1] - e
                                                            ) < tu.Ni
                                                          ? i > 0
                                                            ? 1
                                                            : 0
                                                          : i > 0
                                                          ? 3
                                                          : 2;
                                                      }
                                                      function l(t, e) {
                                                        return s(t.x, e.x);
                                                      }
                                                      function s(t, e) {
                                                        var n = a(t, 1),
                                                          r = a(e, 1);
                                                        return n !== r
                                                          ? n - r
                                                          : 0 === n
                                                          ? e[1] - t[1]
                                                          : 1 === n
                                                          ? t[0] - e[0]
                                                          : 2 === n
                                                          ? t[1] - e[1]
                                                          : e[0] - t[0];
                                                      }
                                                      return function (a) {
                                                        var s,
                                                          u,
                                                          c,
                                                          f,
                                                          h,
                                                          d,
                                                          p,
                                                          m,
                                                          g,
                                                          v,
                                                          y,
                                                          b = a,
                                                          x = eh(),
                                                          w = {
                                                            point: _,
                                                            lineStart:
                                                              function () {
                                                                (w.point = S),
                                                                  u &&
                                                                    u.push(
                                                                      (c = [])
                                                                    ),
                                                                  (v = !0),
                                                                  (g = !1),
                                                                  (p = m = NaN);
                                                              },
                                                            lineEnd:
                                                              function () {
                                                                s &&
                                                                  (S(f, h),
                                                                  d &&
                                                                    g &&
                                                                    x.rejoin(),
                                                                  s.push(
                                                                    x.result()
                                                                  )),
                                                                  (w.point = _),
                                                                  g &&
                                                                    b.lineEnd();
                                                              },
                                                            polygonStart:
                                                              function () {
                                                                (b = x),
                                                                  (s = []),
                                                                  (u = []),
                                                                  (y = !0);
                                                              },
                                                            polygonEnd:
                                                              function () {
                                                                var e =
                                                                    (function () {
                                                                      for (
                                                                        var e = 0,
                                                                          n = 0,
                                                                          i =
                                                                            u.length;
                                                                        n < i;
                                                                        ++n
                                                                      )
                                                                        for (
                                                                          var o,
                                                                            a,
                                                                            l =
                                                                              u[
                                                                                n
                                                                              ],
                                                                            s = 1,
                                                                            c =
                                                                              l.length,
                                                                            f =
                                                                              l[0],
                                                                            h =
                                                                              f[0],
                                                                            d =
                                                                              f[1];
                                                                          s < c;
                                                                          ++s
                                                                        )
                                                                          (o =
                                                                            h),
                                                                            (a =
                                                                              d),
                                                                            (h =
                                                                              (f =
                                                                                l[
                                                                                  s
                                                                                ])[0]),
                                                                            (d =
                                                                              f[1]),
                                                                            a <=
                                                                            r
                                                                              ? d >
                                                                                  r &&
                                                                                (h -
                                                                                  o) *
                                                                                  (r -
                                                                                    a) >
                                                                                  (d -
                                                                                    a) *
                                                                                    (t -
                                                                                      o) &&
                                                                                ++e
                                                                              : d <=
                                                                                  r &&
                                                                                (h -
                                                                                  o) *
                                                                                  (r -
                                                                                    a) <
                                                                                  (d -
                                                                                    a) *
                                                                                    (t -
                                                                                      o) &&
                                                                                --e;
                                                                      return e;
                                                                    })(),
                                                                  n = y && e,
                                                                  i = (s = F(s))
                                                                    .length;
                                                                (n || i) &&
                                                                  (a.polygonStart(),
                                                                  n &&
                                                                    (a.lineStart(),
                                                                    o(
                                                                      null,
                                                                      null,
                                                                      1,
                                                                      a
                                                                    ),
                                                                    a.lineEnd()),
                                                                  i &&
                                                                    em(
                                                                      s,
                                                                      l,
                                                                      e,
                                                                      o,
                                                                      a
                                                                    ),
                                                                  a.polygonEnd()),
                                                                  (b = a),
                                                                  (s =
                                                                    u =
                                                                    c =
                                                                      null);
                                                              },
                                                          };
                                                        function _(t, e) {
                                                          i(t, e) &&
                                                            b.point(t, e);
                                                        }
                                                        function S(o, a) {
                                                          var l = i(o, a);
                                                          if (
                                                            (u &&
                                                              c.push([o, a]),
                                                            v)
                                                          )
                                                            (f = o),
                                                              (h = a),
                                                              (d = l),
                                                              (v = !1),
                                                              l &&
                                                                (b.lineStart(),
                                                                b.point(o, a));
                                                          else if (l && g)
                                                            b.point(o, a);
                                                          else {
                                                            var s = [
                                                                (p = Math.max(
                                                                  -1e9,
                                                                  Math.min(
                                                                    1e9,
                                                                    p
                                                                  )
                                                                )),
                                                                (m = Math.max(
                                                                  -1e9,
                                                                  Math.min(
                                                                    1e9,
                                                                    m
                                                                  )
                                                                )),
                                                              ],
                                                              x = [
                                                                (o = Math.max(
                                                                  -1e9,
                                                                  Math.min(
                                                                    1e9,
                                                                    o
                                                                  )
                                                                )),
                                                                (a = Math.max(
                                                                  -1e9,
                                                                  Math.min(
                                                                    1e9,
                                                                    a
                                                                  )
                                                                )),
                                                              ];
                                                            (function (
                                                              t,
                                                              e,
                                                              n,
                                                              r,
                                                              i,
                                                              o
                                                            ) {
                                                              var a,
                                                                l = t[0],
                                                                s = t[1],
                                                                u = e[0],
                                                                c = e[1],
                                                                f = 0,
                                                                h = 1,
                                                                d = u - l,
                                                                p = c - s;
                                                              if (
                                                                ((a = n - l),
                                                                d || !(a > 0))
                                                              ) {
                                                                if (
                                                                  ((a /= d),
                                                                  d < 0)
                                                                ) {
                                                                  if (a < f)
                                                                    return;
                                                                  a < h &&
                                                                    (h = a);
                                                                } else if (
                                                                  d > 0
                                                                ) {
                                                                  if (a > h)
                                                                    return;
                                                                  a > f &&
                                                                    (f = a);
                                                                }
                                                                if (
                                                                  ((a = i - l),
                                                                  d || !(a < 0))
                                                                ) {
                                                                  if (
                                                                    ((a /= d),
                                                                    d < 0)
                                                                  ) {
                                                                    if (a > h)
                                                                      return;
                                                                    a > f &&
                                                                      (f = a);
                                                                  } else if (
                                                                    d > 0
                                                                  ) {
                                                                    if (a < f)
                                                                      return;
                                                                    a < h &&
                                                                      (h = a);
                                                                  }
                                                                  if (
                                                                    ((a =
                                                                      r - s),
                                                                    p ||
                                                                      !(a > 0))
                                                                  ) {
                                                                    if (
                                                                      ((a /= p),
                                                                      p < 0)
                                                                    ) {
                                                                      if (a < f)
                                                                        return;
                                                                      a < h &&
                                                                        (h = a);
                                                                    } else if (
                                                                      p > 0
                                                                    ) {
                                                                      if (a > h)
                                                                        return;
                                                                      a > f &&
                                                                        (f = a);
                                                                    }
                                                                    if (
                                                                      ((a =
                                                                        o - s),
                                                                      p ||
                                                                        !(
                                                                          a < 0
                                                                        ))
                                                                    ) {
                                                                      if (
                                                                        ((a /=
                                                                          p),
                                                                        p < 0)
                                                                      ) {
                                                                        if (
                                                                          a > h
                                                                        )
                                                                          return;
                                                                        a > f &&
                                                                          (f =
                                                                            a);
                                                                      } else if (
                                                                        p > 0
                                                                      ) {
                                                                        if (
                                                                          a < f
                                                                        )
                                                                          return;
                                                                        a < h &&
                                                                          (h =
                                                                            a);
                                                                      }
                                                                      return (
                                                                        f > 0 &&
                                                                          ((t[0] =
                                                                            l +
                                                                            f *
                                                                              d),
                                                                          (t[1] =
                                                                            s +
                                                                            f *
                                                                              p)),
                                                                        h < 1 &&
                                                                          ((e[0] =
                                                                            l +
                                                                            h *
                                                                              d),
                                                                          (e[1] =
                                                                            s +
                                                                            h *
                                                                              p)),
                                                                        !0
                                                                      );
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            })(s, x, t, e, n, r)
                                                              ? (g ||
                                                                  (b.lineStart(),
                                                                  b.point(
                                                                    s[0],
                                                                    s[1]
                                                                  )),
                                                                b.point(
                                                                  x[0],
                                                                  x[1]
                                                                ),
                                                                l ||
                                                                  b.lineEnd(),
                                                                (y = !1))
                                                              : l &&
                                                                (b.lineStart(),
                                                                b.point(o, a),
                                                                (y = !1));
                                                          }
                                                          (p = o),
                                                            (m = a),
                                                            (g = l);
                                                        }
                                                        return w;
                                                      };
                                                    })(
                                                      (M = +t[0][0]),
                                                      (r = +t[0][1]),
                                                      (i = +t[1][0]),
                                                      (o = +t[1][1])
                                                    )),
                                              O())
                                            : null == M
                                            ? null
                                            : [
                                                [M, r],
                                                [i, o],
                                              ];
                                        }),
                                        (j.scale = function (t) {
                                          return arguments.length
                                            ? ((f = +t), T())
                                            : f;
                                        }),
                                        (j.translate = function (t) {
                                          return arguments.length
                                            ? ((h = +t[0]), (d = +t[1]), T())
                                            : [h, d];
                                        }),
                                        (j.center = function (t) {
                                          return arguments.length
                                            ? ((p = (t[0] % 360) * tu.F2),
                                              (m = (t[1] % 360) * tu.F2),
                                              T())
                                            : [p * tu.uj, m * tu.uj];
                                        }),
                                        (j.rotate = function (t) {
                                          return arguments.length
                                            ? ((g = (t[0] % 360) * tu.F2),
                                              (v = (t[1] % 360) * tu.F2),
                                              (y =
                                                t.length > 2
                                                  ? (t[2] % 360) * tu.F2
                                                  : 0),
                                              T())
                                            : [g * tu.uj, v * tu.uj, y * tu.uj];
                                        }),
                                        (j.angle = function (t) {
                                          return arguments.length
                                            ? ((b = (t % 360) * tu.F2), T())
                                            : b * tu.uj;
                                        }),
                                        (j.reflectX = function (t) {
                                          return arguments.length
                                            ? ((x = t ? -1 : 1), T())
                                            : x < 0;
                                        }),
                                        (j.reflectY = function (t) {
                                          return arguments.length
                                            ? ((w = t ? -1 : 1), T())
                                            : w < 0;
                                        }),
                                        (j.precision = function (t) {
                                          return arguments.length
                                            ? ((a = eI(l, (E = t * t))), O())
                                            : (0, tu.RZ)(E);
                                        }),
                                        (j.fitExtent = function (t, e) {
                                          return ek(j, t, e);
                                        }),
                                        (j.fitSize = function (t, e) {
                                          return ek(j, [[0, 0], t], e);
                                        }),
                                        (j.fitWidth = function (t, e) {
                                          return eO(
                                            j,
                                            function (e) {
                                              var n = +t,
                                                r = n / (e[1][0] - e[0][0]),
                                                i =
                                                  (n -
                                                    r * (e[1][0] + e[0][0])) /
                                                  2,
                                                o = -r * e[0][1];
                                              j.scale(150 * r).translate([
                                                i,
                                                o,
                                              ]);
                                            },
                                            e
                                          );
                                        }),
                                        (j.fitHeight = function (t, e) {
                                          return eO(
                                            j,
                                            function (e) {
                                              var n = +t,
                                                r = n / (e[1][1] - e[0][1]),
                                                i = -r * e[0][0],
                                                o =
                                                  (n -
                                                    r * (e[1][1] + e[0][1])) /
                                                  2;
                                              j.scale(150 * r).translate([
                                                i,
                                                o,
                                              ]);
                                            },
                                            e
                                          );
                                        }),
                                        function () {
                                          return (
                                            (e = t.apply(this, arguments)),
                                            (j.invert = e.invert && P),
                                            T()
                                          );
                                        }
                                      );
                                    })(function () {
                                      return ez;
                                    })()
                                      .scale(250)
                                      .clipAngle(142)
                                      .translate([0, 0])
                                      .scale(1)
                                      .rotate(n.invert([180, 0]));
                                  t = t.map(r);
                                  let i = [],
                                    o = 1;
                                  for (let e = 0, n = t.length; e < n; e++) {
                                    let n = t[e][0] ** 2 + t[e][1] ** 2;
                                    !isFinite(n) || n > 1e32
                                      ? i.push(e)
                                      : n > o && (o = n);
                                  }
                                  let a = 1e6 * eY(o);
                                  i.forEach((e) => (t[e] = [a, 0])),
                                    t.push([0, a]),
                                    t.push([-a, 0]),
                                    t.push([0, -a]);
                                  let l = eo.from(t);
                                  l.projection = r;
                                  let {
                                      triangles: s,
                                      halfedges: u,
                                      inedges: c,
                                    } = l,
                                    f = [];
                                  for (let n = 0, r = u.length; n < r; n++)
                                    if (u[n] < 0) {
                                      let t = n % 3 == 2 ? n - 2 : n + 1,
                                        r = n % 3 == 0 ? n + 2 : n - 1,
                                        i = u[t],
                                        o = u[r];
                                      (u[i] = o),
                                        (u[o] = i),
                                        (u[t] = u[r] = -1),
                                        (s[n] = s[t] = s[r] = e),
                                        (c[s[i]] = i % 3 == 0 ? i + 2 : i - 1),
                                        (c[s[o]] = o % 3 == 0 ? o + 2 : o - 1),
                                        f.push(Math.min(n, t, r)),
                                        (n += 2 - (n % 3));
                                    } else
                                      s[n] > t.length - 3 - 1 && (s[n] = e);
                                  return l;
                                })(t),
                                n = (function (t) {
                                  let { triangles: e } = t;
                                  if (!e) return [];
                                  let n = [];
                                  for (
                                    let t = 0, r = e.length / 3;
                                    t < r;
                                    t++
                                  ) {
                                    let r = e[3 * t],
                                      i = e[3 * t + 1],
                                      o = e[3 * t + 2];
                                    r !== i && i !== o && n.push([r, o, i]);
                                  }
                                  return n;
                                })(e),
                                r = (function (t, e) {
                                  let n = new Set();
                                  return 2 === e.length
                                    ? [[0, 1]]
                                    : (t.forEach((t) => {
                                        if (
                                          t[0] !== t[1] &&
                                          !(0 > e0(t.map((t) => e[t])))
                                        )
                                          for (let e = 0, r; e < 3; e++)
                                            (r = (e + 1) % 3),
                                              n.add(I([t[e], t[r]]).join("-"));
                                      }),
                                      Array.from(n, (t) =>
                                        t.split("-").map(Number)
                                      ));
                                })(n, t),
                                i = (function (t, e) {
                                  let n = [];
                                  return (
                                    t.forEach((t) => {
                                      for (let e = 0; e < 3; e++) {
                                        let r = t[e],
                                          i = t[(e + 1) % 3];
                                        (n[r] = n[r] || []), n[r].push(i);
                                      }
                                    }),
                                    0 === t.length &&
                                      (2 === e
                                        ? ((n[0] = [1]), (n[1] = [0]))
                                        : 1 === e && (n[0] = [])),
                                    n
                                  );
                                })(n, t.length),
                                o = (function (t, e) {
                                  function n(t, e) {
                                    let n = t[0] - e[0],
                                      r = t[1] - e[1],
                                      i = t[2] - e[2];
                                    return n * n + r * r + i * i;
                                  }
                                  return function (r, i, o) {
                                    void 0 === o && (o = 0);
                                    let a,
                                      l,
                                      s = o,
                                      u = eJ([r, i]);
                                    do
                                      (a = o),
                                        (o = null),
                                        (l = n(u, eJ(e[a]))),
                                        t[a].forEach((t) => {
                                          let r = n(u, eJ(e[t]));
                                          if (r < l) {
                                            (l = r), (o = t), (s = t);
                                            return;
                                          }
                                        });
                                    while (null !== o);
                                    return s;
                                  };
                                })(i, t),
                                { polygons: a, centers: l } = (function (
                                  t,
                                  e,
                                  n
                                ) {
                                  let r = [],
                                    i = t.slice();
                                  if (0 === e.length) {
                                    if (n.length < 2)
                                      return { polygons: r, centers: i };
                                    if (2 === n.length) {
                                      let t = eJ(n[0]),
                                        e = eJ(n[1]),
                                        a = eK(eX(t, e)),
                                        l = eK(eW(t, e)),
                                        s = eW(a, l),
                                        u = [
                                          a,
                                          eW(a, s),
                                          eW(eW(a, s), s),
                                          eW(eW(eW(a, s), s), s),
                                        ]
                                          .map(eQ)
                                          .map(o);
                                      return (
                                        r.push(u),
                                        r.push(u.slice().reverse()),
                                        { polygons: r, centers: i }
                                      );
                                    }
                                  }
                                  function o(t) {
                                    let n = -1;
                                    return (
                                      i
                                        .slice(e.length, 1 / 0)
                                        .forEach((r, i) => {
                                          r[0] === t[0] &&
                                            r[1] === t[1] &&
                                            (n = i + e.length);
                                        }),
                                      n < 0 && ((n = i.length), i.push(t)),
                                      n
                                    );
                                  }
                                  return (
                                    e.forEach((t, e) => {
                                      for (let n = 0; n < 3; n++) {
                                        let i = t[n],
                                          o = t[(n + 1) % 3],
                                          a = t[(n + 2) % 3];
                                        (r[i] = r[i] || []),
                                          r[i].push([o, a, e, [i, o, a]]);
                                      }
                                    }),
                                    {
                                      polygons: r.map((t) => {
                                        let e = [t[0][2]],
                                          r = t[0][1];
                                        for (let n = 1; n < t.length; n++)
                                          for (let n = 0; n < t.length; n++)
                                            if (t[n][0] == r) {
                                              (r = t[n][1]), e.push(t[n][2]);
                                              break;
                                            }
                                        if (e.length > 2) return e;
                                        if (2 == e.length) {
                                          let r = e1(
                                              n[t[0][3][0]],
                                              n[t[0][3][1]],
                                              i[e[0]]
                                            ),
                                            a = e1(
                                              n[t[0][3][2]],
                                              n[t[0][3][0]],
                                              i[e[0]]
                                            ),
                                            l = o(r),
                                            s = o(a);
                                          return [e[0], s, e[1], l];
                                        }
                                      }),
                                      centers: i,
                                    }
                                  );
                                })(
                                  n.map((e) => {
                                    let n = e.map((e) => t[e]).map(eJ);
                                    return eQ(
                                      eK(
                                        eX(
                                          eX(eW(n[1], n[0]), eW(n[2], n[1])),
                                          eW(n[0], n[2])
                                        )
                                      )
                                    );
                                  }),
                                  n,
                                  t
                                ),
                                s = (function (t) {
                                  let e = [];
                                  return (
                                    t.forEach((t) => {
                                      if (!t) return;
                                      let n = t[t.length - 1];
                                      for (let r of t)
                                        r > n && e.push([n, r]), (n = r);
                                    }),
                                    e
                                  );
                                })(a),
                                u = (function (t, e) {
                                  let n;
                                  let r = new Set(),
                                    i = [];
                                  t.map((t) => {
                                    if (
                                      !(
                                        e0(
                                          t.map((t) => e[t > e.length ? 0 : t])
                                        ) > 1e-12
                                      )
                                    )
                                      for (let e = 0; e < 3; e++) {
                                        let n = [t[e], t[(e + 1) % 3]],
                                          i = `${n[0]}-${n[1]}`;
                                        r.has(i)
                                          ? r.delete(i)
                                          : r.add(`${n[1]}-${n[0]}`);
                                      }
                                  });
                                  let o = new Map();
                                  if (
                                    (r.forEach((t) => {
                                      (t = t.split("-").map(Number)),
                                        o.set(t[0], t[1]),
                                        (n = t[0]);
                                    }),
                                    void 0 === n)
                                  )
                                    return i;
                                  let a = n;
                                  do {
                                    i.push(a);
                                    let t = o.get(a);
                                    o.set(a, -1), (a = t);
                                  } while (a > -1 && a !== n);
                                  return i;
                                })(n, t);
                              return {
                                delaunay: e,
                                edges: r,
                                triangles: n,
                                centers: l,
                                neighbors: i,
                                polygons: a,
                                mesh: s,
                                hull: u,
                                urquhart: function (t) {
                                  let e = new Map(),
                                    i = new Map();
                                  return (
                                    r.forEach((n, r) => {
                                      let o = n.join("-");
                                      e.set(o, t[r]), i.set(o, !0);
                                    }),
                                    n.forEach((t) => {
                                      let n = 0,
                                        r = -1;
                                      for (let i = 0; i < 3; i++) {
                                        let o = I([t[i], t[(i + 1) % 3]]).join(
                                          "-"
                                        );
                                        e.get(o) > n &&
                                          ((n = e.get(o)), (r = o));
                                      }
                                      i.set(r, !1);
                                    }),
                                    r.map((t) => i.get(t.join("-")))
                                  );
                                },
                                find: o,
                              };
                            })(e.points));
                        }
                        return e;
                      };
                      return (
                        (e._vx = function (t) {
                          return "object" == typeof t && "type" in t
                            ? t6(t)[0]
                            : 0 in t
                            ? t[0]
                            : void 0;
                        }),
                        (e._vy = function (t) {
                          return "object" == typeof t && "type" in t
                            ? t6(t)[1]
                            : 1 in t
                            ? t[1]
                            : void 0;
                        }),
                        (e.x = function (t) {
                          return t ? ((e._vx = t), e) : e._vx;
                        }),
                        (e.y = function (t) {
                          return t ? ((e._vy = t), e) : e._vy;
                        }),
                        (e.polygons = function (t) {
                          if ((void 0 !== t && e(t), !e.delaunay)) return !1;
                          let n = { type: "FeatureCollection", features: [] };
                          return (
                            0 === e.valid.length ||
                              (e.delaunay.polygons.forEach((t, r) =>
                                n.features.push({
                                  type: "Feature",
                                  geometry: t
                                    ? {
                                        type: "Polygon",
                                        coordinates: [
                                          [...t, t[0]].map(
                                            (t) => e.delaunay.centers[t]
                                          ),
                                        ],
                                      }
                                    : null,
                                  properties: {
                                    site: e.valid[r],
                                    sitecoordinates: e.points[r],
                                    neighbours: e.delaunay.neighbors[r],
                                  },
                                })
                              ),
                              1 === e.valid.length &&
                                n.features.push({
                                  type: "Feature",
                                  geometry: { type: "Sphere" },
                                  properties: {
                                    site: e.valid[0],
                                    sitecoordinates: e.points[0],
                                    neighbours: [],
                                  },
                                })),
                            n
                          );
                        }),
                        (e.triangles = function (t) {
                          return (
                            void 0 !== t && e(t),
                            !!e.delaunay && {
                              type: "FeatureCollection",
                              features: e.delaunay.triangles
                                .map(
                                  (t, n) => (
                                    ((t = t.map((t) => e.points[t])).center =
                                      e.delaunay.centers[n]),
                                    t
                                  )
                                )
                                .filter((t) => e0(t) > 0)
                                .map((t) => ({
                                  type: "Feature",
                                  properties: { circumcenter: t.center },
                                  geometry: {
                                    type: "Polygon",
                                    coordinates: [[...t, t[0]]],
                                  },
                                })),
                            }
                          );
                        }),
                        (e.links = function (t) {
                          if ((void 0 !== t && e(t), !e.delaunay)) return !1;
                          let n = e.delaunay.edges.map((t) =>
                              (0, tL.A)(e.points[t[0]], e.points[t[1]])
                            ),
                            r = e.delaunay.urquhart(n);
                          return {
                            type: "FeatureCollection",
                            features: e.delaunay.edges.map((t, i) => ({
                              type: "Feature",
                              properties: {
                                source: e.valid[t[0]],
                                target: e.valid[t[1]],
                                length: n[i],
                                urquhart: !!r[i],
                              },
                              geometry: {
                                type: "LineString",
                                coordinates: [e.points[t[0]], e.points[t[1]]],
                              },
                            })),
                          };
                        }),
                        (e.mesh = function (t) {
                          return (
                            void 0 !== t && e(t),
                            !!e.delaunay && {
                              type: "MultiLineString",
                              coordinates: e.delaunay.edges.map((t) => [
                                e.points[t[0]],
                                e.points[t[1]],
                              ]),
                            }
                          );
                        }),
                        (e.cellMesh = function (t) {
                          if ((void 0 !== t && e(t), !e.delaunay)) return !1;
                          let { centers: n, polygons: r } = e.delaunay,
                            i = [];
                          for (let t of r)
                            if (t)
                              for (
                                let e = t.length, r = t[e - 1], o = t[0], a = 0;
                                a < e;
                                r = o, o = t[++a]
                              )
                                o > r && i.push([n[r], n[o]]);
                          return { type: "MultiLineString", coordinates: i };
                        }),
                        (e._found = void 0),
                        (e.find = function (t, n, r) {
                          if (
                            ((e._found = e.delaunay.find(t, n, e._found)),
                            !r || (0, tL.A)([t, n], e.points[e._found]) < r)
                          )
                            return e._found;
                        }),
                        (e.hull = function (t) {
                          void 0 !== t && e(t);
                          let n = e.delaunay.hull,
                            r = e.points;
                          return 0 === n.length
                            ? null
                            : {
                                type: "Polygon",
                                coordinates: [[...n.map((t) => r[t]), r[n[0]]]],
                              };
                        }),
                        t ? e(t) : e
                      );
                    })(l).triangles(),
                    b = new Map(
                      l.map(function (t, e) {
                        var n = e6(t, 2),
                          r = n[0],
                          i = n[1];
                        return ["".concat(r, "-").concat(i), e];
                      })
                    );
                  y.features.forEach(function (t) {
                    var e,
                      n = t.geometry.coordinates[0].slice(0, 3).reverse(),
                      r = [];
                    if (
                      (n.forEach(function (t) {
                        var e = e6(t, 2),
                          n = e[0],
                          i = e[1],
                          o = "".concat(n, "-").concat(i);
                        b.has(o) && r.push(b.get(o));
                      }),
                      3 === r.length)
                    ) {
                      if (
                        r.some(function (t) {
                          return t < o.length;
                        }) &&
                        !nt(t.properties.circumcenter, s, g)
                      )
                        return;
                      (e = v).push.apply(e, r);
                    }
                  });
                } else if (a.length) {
                  for (
                    var x = X.from(l),
                      w = function (t) {
                        var e,
                          n = [2, 1, 0].map(function (e) {
                            return x.triangles[t + e];
                          }),
                          r = n.map(function (t) {
                            return l[t];
                          });
                        if (
                          n.some(function (t) {
                            return t < o.length;
                          }) &&
                          !nt(
                            [0, 1].map(function (t) {
                              return (function (t, e) {
                                let n = 0,
                                  r = 0;
                                if (void 0 === e)
                                  for (let e of t)
                                    null != e &&
                                      (e = +e) >= e &&
                                      (++n, (r += e));
                                else {
                                  let i = -1;
                                  for (let o of t)
                                    null != (o = e(o, ++i, t)) &&
                                      (o = +o) >= o &&
                                      (++n, (r += o));
                                }
                                if (n) return r / n;
                              })(r, function (e) {
                                return e[t];
                              });
                            }),
                            s,
                            g
                          )
                        )
                          return 1;
                        (e = v).push.apply(e, e9(n));
                      },
                      _ = 0,
                      S = x.triangles.length;
                    _ < S;
                    _ += 3
                  )
                    if (w(_)) continue;
                } else {
                  var M = (0, C.Bq)(i),
                    A = M.vertices,
                    E = M.holes;
                  v = (0, C.Ay)(A, void 0 === E ? [] : E, 2);
                }
                var j = (0, e2.A)(
                    I(l, function (t) {
                      return t[0];
                    }),
                    [0, 1]
                  ),
                  P = (0, e2.A)(
                    I(l, function (t) {
                      return t[1];
                    }),
                    [0, 1]
                  ),
                  T = l.map(function (t) {
                    var e = e6(t, 2),
                      n = e[0],
                      r = e[1];
                    return [j(n), P(r)];
                  });
                return {
                  contour: i,
                  triangles: { points: l, indices: v, uvs: T },
                };
              })(t, { resolution: (l = l || 5) }),
              f = c.contour,
              h = c.triangles,
              d = F(h.uvs),
              p = [],
              m = [],
              g = [],
              v = 0,
              y = function (t) {
                var e = Math.round(p.length / 3),
                  n = g.length;
                (p = p.concat(t.vertices)),
                  (m = m.concat(t.uvs)),
                  (g = g.concat(
                    e
                      ? t.indices.map(function (t) {
                          return t + e;
                        })
                      : t.indices
                  )),
                  u.addGroup(n, g.length - n, v++);
              };
            function b(t, e) {
              var n = t.map(function (t) {
                return t.map(function (t) {
                  var n = e6(t, 2),
                    r = n[0];
                  return (function (t, e) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      r = ((90 - t) * Math.PI) / 180,
                      i = ((90 - e) * Math.PI) / 180;
                    return [
                      n * Math.sin(r) * Math.cos(i),
                      n * Math.cos(r),
                      n * Math.sin(r) * Math.sin(i),
                    ];
                  })(n[1], r, e);
                });
              });
              return (0, C.Bq)(n);
            }
            function x(t) {
              var e =
                !(arguments.length > 1) ||
                void 0 === arguments[1] ||
                arguments[1];
              return {
                indices: e ? h.indices : h.indices.slice().reverse(),
                vertices: b([h.points], t).vertices,
                uvs: d,
              };
            }
            return (
              a &&
                y(
                  (function () {
                    for (
                      var t = b(f, n),
                        e = t.vertices,
                        i = t.holes,
                        o = b(f, r).vertices,
                        a = F([o, e]),
                        l = Math.round(o.length / 3),
                        s = new Set(i),
                        u = 0,
                        c = [],
                        h = 0;
                      h < l;
                      h++
                    ) {
                      var d = h + 1;
                      if (d === l) d = u;
                      else if (s.has(d)) {
                        var p = d;
                        (d = u), (u = p);
                      }
                      c.push(h, h + l, d + l), c.push(d + l, d, h);
                    }
                    for (var m = [], g = 1; g >= 0; g--)
                      for (var v = 0; v < l; v += 1) m.push(v / (l - 1), g);
                    return { indices: c, vertices: a, uvs: m };
                  })()
                ),
              i && y(x(n, !1)),
              o && y(x(r, !0)),
              u.setIndex(g),
              u[nn]("position", new ne.Float32BufferAttribute(p, 3)),
              u[nn]("uv", new ne.Float32BufferAttribute(m, 2)),
              u.computeVertexNormals(),
              u
            );
          }
          return (
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && e4(t, e);
            })(e, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        })(ne.BufferGeometry);
    },
    9271: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => g });
      var r = n(27274),
        i = n(34734),
        o = n(11863),
        a = n(13968);
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function s(t) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function u() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (u = function () {
          return !!t;
        })();
      }
      function c(t, e) {
        return (c = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function f(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                l = [],
                s = !0,
                u = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== e);
                    s = !0
                  );
              } catch (t) {
                (u = !0), (i = t);
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          })(t, e) ||
          h(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function h(t, e) {
        if (t) {
          if ("string" == typeof t) return l(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(t, e)
              : void 0
          );
        }
      }
      var d = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
            n = [],
            r = null;
          return (
            t.forEach(function (t) {
              if (r) {
                var i = (180 * (0, o.A)(t, r)) / Math.PI;
                if (i > e)
                  for (
                    var l = (0, a.A)(r, t), s = 1 / Math.ceil(i / e), u = s;
                    u < 1;

                  )
                    n.push(l(u)), (u += s);
              }
              n.push((r = t));
            }),
            n
          );
        },
        p =
          "undefined" != typeof window && window.THREE
            ? window.THREE
            : {
                BufferGeometry: r.BufferGeometry,
                Float32BufferAttribute: r.Float32BufferAttribute,
              },
        m = new p.BufferGeometry().setAttribute
          ? "setAttribute"
          : "addAttribute",
        g = (function (t) {
          function e(t) {
            var n,
              r,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1,
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 5;
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, e),
              (n = s((n = e))),
              ((r = (function (t, e) {
                if (e && ("object" == typeof e || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(t);
              })(
                this,
                u()
                  ? Reflect.construct(n, [], s(this).constructor)
                  : n.apply(this, void 0)
              )).type = "GeoJsonGeometry"),
              (r.parameters = { geoJson: t, radius: o, resolution: a });
            var l = (
                {
                  Point: y,
                  MultiPoint: function (t, e) {
                    var n = { vertices: [], indices: [] };
                    return (
                      t
                        .map(function (t) {
                          return y(t, e);
                        })
                        .forEach(function (t) {
                          v(n, f(t, 1)[0]);
                        }),
                      [n]
                    );
                  },
                  LineString: x,
                  MultiLineString: function (t, e) {
                    var n = { vertices: [], indices: [] };
                    return (
                      t
                        .map(function (t) {
                          return x(t, e);
                        })
                        .forEach(function (t) {
                          v(n, f(t, 1)[0]);
                        }),
                      [n]
                    );
                  },
                  Polygon: w,
                  MultiPolygon: function (t, e) {
                    var n = { vertices: [], indices: [] },
                      r = { vertices: [], indices: [] };
                    t.map(function (t) {
                      return w(t, e);
                    }).forEach(function (t) {
                      var e = f(t, 2),
                        i = e[0],
                        o = e[1];
                      v(n, i), o && v(r, o);
                    });
                    var i = [n];
                    return r.vertices.length && i.push(r), i;
                  },
                }[t.type] ||
                function () {
                  return [];
                }
              )(t.coordinates, o),
              c = [],
              h = [],
              g = 0;
            function y(t, e) {
              return [{ vertices: b(t[1], t[0], e), indices: [] }];
            }
            function x(t, e) {
              for (
                var n = d(t, a).map(function (t) {
                    var n = f(t, 2),
                      r = n[0];
                    return b(n[1], r, e);
                  }),
                  r = (0, i.Bq)([n]).vertices,
                  o = Math.round(r.length / 3),
                  l = [],
                  s = 1;
                s < o;
                s++
              )
                l.push(s - 1, s);
              return [{ vertices: r, indices: l }];
            }
            function w(t, e) {
              for (
                var n = t.map(function (t) {
                    return d(t, a).map(function (t) {
                      var n = f(t, 2),
                        r = n[0];
                      return b(n[1], r, e);
                    });
                  }),
                  r = (0, i.Bq)(n),
                  o = r.vertices,
                  l = r.holes,
                  s = l[0] || 1 / 0,
                  u = o.slice(0, 3 * s),
                  c = o.slice(3 * s),
                  h = new Set(l),
                  p = Math.round(o.length / 3),
                  m = [],
                  g = [],
                  v = 1;
                v < p;
                v++
              )
                h.has(v) ||
                  (v < s ? m.push(v - 1, v) : g.push(v - 1 - s, v - s));
              var y = [{ indices: m, vertices: u }];
              return l.length && y.push({ indices: g, vertices: c }), y;
            }
            return (
              l.forEach(function (t) {
                var e = c.length;
                v({ indices: c, vertices: h }, t),
                  r.addGroup(e, c.length - e, g++);
              }),
              c.length && r.setIndex(c),
              h.length && r[m]("position", new p.Float32BufferAttribute(h, 3)),
              r
            );
          }
          return (
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && c(t, e);
            })(e, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        })(p.BufferGeometry);
      function v(t, e) {
        var n = Math.round(t.vertices.length / 3);
        y(t.vertices, e.vertices),
          y(
            t.indices,
            e.indices.map(function (t) {
              return t + n;
            })
          );
      }
      function y(t, e) {
        var n,
          r = (function (t, e) {
            var n =
              ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
            if (!n) {
              if (Array.isArray(t) || (n = h(t))) {
                n && (t = n);
                var r = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return r >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[r++] };
                  },
                  e: function (t) {
                    throw t;
                  },
                  f: i,
                };
              }
              throw TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              a = !0,
              l = !1;
            return {
              s: function () {
                n = n.call(t);
              },
              n: function () {
                var t = n.next();
                return (a = t.done), t;
              },
              e: function (t) {
                (l = !0), (o = t);
              },
              f: function () {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (l) throw o;
                }
              },
            };
          })(e);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var i = n.value;
            t.push(i);
          }
        } catch (t) {
          r.e(t);
        } finally {
          r.f();
        }
      }
      function b(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = ((90 - t) * Math.PI) / 180,
          i = ((90 - e) * Math.PI) / 180;
        return [
          n * Math.sin(r) * Math.cos(i),
          n * Math.cos(r),
          n * Math.sin(r) * Math.sin(i),
        ];
      }
    },
    92511: (t, e, n) => {
      "use strict";
      n.d(e, { GS: () => r, K: () => u, YJ: () => o });
      var r = Object.freeze({
          Linear: Object.freeze({
            None: function (t) {
              return t;
            },
            In: function (t) {
              return t;
            },
            Out: function (t) {
              return t;
            },
            InOut: function (t) {
              return t;
            },
          }),
          Quadratic: Object.freeze({
            In: function (t) {
              return t * t;
            },
            Out: function (t) {
              return t * (2 - t);
            },
            InOut: function (t) {
              return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
            },
          }),
          Cubic: Object.freeze({
            In: function (t) {
              return t * t * t;
            },
            Out: function (t) {
              return --t * t * t + 1;
            },
            InOut: function (t) {
              return (t *= 2) < 1
                ? 0.5 * t * t * t
                : 0.5 * ((t -= 2) * t * t + 2);
            },
          }),
          Quartic: Object.freeze({
            In: function (t) {
              return t * t * t * t;
            },
            Out: function (t) {
              return 1 - --t * t * t * t;
            },
            InOut: function (t) {
              return (t *= 2) < 1
                ? 0.5 * t * t * t * t
                : -0.5 * ((t -= 2) * t * t * t - 2);
            },
          }),
          Quintic: Object.freeze({
            In: function (t) {
              return t * t * t * t * t;
            },
            Out: function (t) {
              return --t * t * t * t * t + 1;
            },
            InOut: function (t) {
              return (t *= 2) < 1
                ? 0.5 * t * t * t * t * t
                : 0.5 * ((t -= 2) * t * t * t * t + 2);
            },
          }),
          Sinusoidal: Object.freeze({
            In: function (t) {
              return 1 - Math.sin(((1 - t) * Math.PI) / 2);
            },
            Out: function (t) {
              return Math.sin((t * Math.PI) / 2);
            },
            InOut: function (t) {
              return 0.5 * (1 - Math.sin(Math.PI * (0.5 - t)));
            },
          }),
          Exponential: Object.freeze({
            In: function (t) {
              return 0 === t ? 0 : Math.pow(1024, t - 1);
            },
            Out: function (t) {
              return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
            },
            InOut: function (t) {
              return 0 === t
                ? 0
                : 1 === t
                ? 1
                : (t *= 2) < 1
                ? 0.5 * Math.pow(1024, t - 1)
                : 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2);
            },
          }),
          Circular: Object.freeze({
            In: function (t) {
              return 1 - Math.sqrt(1 - t * t);
            },
            Out: function (t) {
              return Math.sqrt(1 - --t * t);
            },
            InOut: function (t) {
              return (t *= 2) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            },
          }),
          Elastic: Object.freeze({
            In: function (t) {
              return 0 === t
                ? 0
                : 1 === t
                ? 1
                : -Math.pow(2, 10 * (t - 1)) *
                  Math.sin((t - 1.1) * 5 * Math.PI);
            },
            Out: function (t) {
              return 0 === t
                ? 0
                : 1 === t
                ? 1
                : Math.pow(2, -10 * t) * Math.sin((t - 0.1) * 5 * Math.PI) + 1;
            },
            InOut: function (t) {
              return 0 === t
                ? 0
                : 1 === t
                ? 1
                : (t *= 2) < 1
                ? -0.5 *
                  Math.pow(2, 10 * (t - 1)) *
                  Math.sin((t - 1.1) * 5 * Math.PI)
                : 0.5 *
                    Math.pow(2, -10 * (t - 1)) *
                    Math.sin((t - 1.1) * 5 * Math.PI) +
                  1;
            },
          }),
          Back: Object.freeze({
            In: function (t) {
              return 1 === t ? 1 : t * t * (2.70158 * t - 1.70158);
            },
            Out: function (t) {
              return 0 === t ? 0 : --t * t * (2.70158 * t + 1.70158) + 1;
            },
            InOut: function (t) {
              return (t *= 2) < 1
                ? t * t * (3.5949095 * t - 2.5949095) * 0.5
                : 0.5 * ((t -= 2) * t * (3.5949095 * t + 2.5949095) + 2);
            },
          }),
          Bounce: Object.freeze({
            In: function (t) {
              return 1 - r.Bounce.Out(1 - t);
            },
            Out: function (t) {
              return t < 1 / 2.75
                ? 7.5625 * t * t
                : t < 2 / 2.75
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : t < 2.5 / 2.75
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            },
            InOut: function (t) {
              return t < 0.5
                ? 0.5 * r.Bounce.In(2 * t)
                : 0.5 * r.Bounce.Out(2 * t - 1) + 0.5;
            },
          }),
          generatePow: function (t) {
            return (
              void 0 === t && (t = 4),
              (t =
                (t = t < Number.EPSILON ? Number.EPSILON : t) > 1e4 ? 1e4 : t),
              {
                In: function (e) {
                  return Math.pow(e, t);
                },
                Out: function (e) {
                  return 1 - Math.pow(1 - e, t);
                },
                InOut: function (e) {
                  return e < 0.5
                    ? Math.pow(2 * e, t) / 2
                    : (1 - Math.pow(2 - 2 * e, t)) / 2 + 0.5;
                },
              }
            );
          },
        }),
        i = function () {
          return performance.now();
        },
        o = (function () {
          function t() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            (this._tweens = {}),
              (this._tweensAddedDuringUpdate = {}),
              this.add.apply(this, t);
          }
          return (
            (t.prototype.getAll = function () {
              var t = this;
              return Object.keys(this._tweens).map(function (e) {
                return t._tweens[e];
              });
            }),
            (t.prototype.removeAll = function () {
              this._tweens = {};
            }),
            (t.prototype.add = function () {
              for (var t, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              for (var r = 0; r < e.length; r++) {
                var i = e[r];
                null === (t = i._group) || void 0 === t || t.remove(i),
                  (i._group = this),
                  (this._tweens[i.getId()] = i),
                  (this._tweensAddedDuringUpdate[i.getId()] = i);
              }
            }),
            (t.prototype.remove = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r._group = void 0),
                  delete this._tweens[r.getId()],
                  delete this._tweensAddedDuringUpdate[r.getId()];
              }
            }),
            (t.prototype.allStopped = function () {
              return this.getAll().every(function (t) {
                return !t.isPlaying();
              });
            }),
            (t.prototype.update = function (t, e) {
              void 0 === t && (t = i()), void 0 === e && (e = !0);
              var n = Object.keys(this._tweens);
              if (0 !== n.length)
                for (; n.length > 0; ) {
                  this._tweensAddedDuringUpdate = {};
                  for (var r = 0; r < n.length; r++) {
                    var o = this._tweens[n[r]],
                      a = !e;
                    o && !1 === o.update(t, a) && !e && this.remove(o);
                  }
                  n = Object.keys(this._tweensAddedDuringUpdate);
                }
            }),
            t
          );
        })(),
        a = {
          Linear: function (t, e) {
            var n = t.length - 1,
              r = n * e,
              i = Math.floor(r),
              o = a.Utils.Linear;
            return e < 0
              ? o(t[0], t[1], r)
              : e > 1
              ? o(t[n], t[n - 1], n - r)
              : o(t[i], t[i + 1 > n ? n : i + 1], r - i);
          },
          Bezier: function (t, e) {
            for (
              var n = 0,
                r = t.length - 1,
                i = Math.pow,
                o = a.Utils.Bernstein,
                l = 0;
              l <= r;
              l++
            )
              n += i(1 - e, r - l) * i(e, l) * t[l] * o(r, l);
            return n;
          },
          CatmullRom: function (t, e) {
            var n = t.length - 1,
              r = n * e,
              i = Math.floor(r),
              o = a.Utils.CatmullRom;
            return t[0] === t[n]
              ? (e < 0 && (i = Math.floor((r = n * (1 + e)))),
                o(
                  t[(i - 1 + n) % n],
                  t[i],
                  t[(i + 1) % n],
                  t[(i + 2) % n],
                  r - i
                ))
              : e < 0
              ? t[0] - (o(t[0], t[0], t[1], t[1], -r) - t[0])
              : e > 1
              ? t[n] - (o(t[n], t[n], t[n - 1], t[n - 1], r - n) - t[n])
              : o(
                  t[i ? i - 1 : 0],
                  t[i],
                  t[n < i + 1 ? n : i + 1],
                  t[n < i + 2 ? n : i + 2],
                  r - i
                );
          },
          Utils: {
            Linear: function (t, e, n) {
              return (e - t) * n + t;
            },
            Bernstein: function (t, e) {
              var n = a.Utils.Factorial;
              return n(t) / n(e) / n(t - e);
            },
            Factorial: (function () {
              var t = [1];
              return function (e) {
                var n = 1;
                if (t[e]) return t[e];
                for (var r = e; r > 1; r--) n *= r;
                return (t[e] = n), n;
              };
            })(),
            CatmullRom: function (t, e, n, r, i) {
              var o = (n - t) * 0.5,
                a = (r - e) * 0.5,
                l = i * i;
              return (
                i * l * (2 * e - 2 * n + o + a) +
                (-3 * e + 3 * n - 2 * o - a) * l +
                o * i +
                e
              );
            },
          },
        },
        l = (function () {
          function t() {}
          return (
            (t.nextId = function () {
              return t._nextId++;
            }),
            (t._nextId = 0),
            t
          );
        })(),
        s = new o(),
        u = (function () {
          function t(t, e) {
            (this._isPaused = !1),
              (this._pauseStart = 0),
              (this._valuesStart = {}),
              (this._valuesEnd = {}),
              (this._valuesStartRepeat = {}),
              (this._duration = 1e3),
              (this._isDynamic = !1),
              (this._initialRepeat = 0),
              (this._repeat = 0),
              (this._yoyo = !1),
              (this._isPlaying = !1),
              (this._reversed = !1),
              (this._delayTime = 0),
              (this._startTime = 0),
              (this._easingFunction = r.Linear.None),
              (this._interpolationFunction = a.Linear),
              (this._chainedTweens = []),
              (this._onStartCallbackFired = !1),
              (this._onEveryStartCallbackFired = !1),
              (this._id = l.nextId()),
              (this._isChainStopped = !1),
              (this._propertiesAreSetUp = !1),
              (this._goToEnd = !1),
              (this._object = t),
              "object" == typeof e
                ? ((this._group = e), e.add(this))
                : !0 === e && ((this._group = s), s.add(this));
          }
          return (
            (t.prototype.getId = function () {
              return this._id;
            }),
            (t.prototype.isPlaying = function () {
              return this._isPlaying;
            }),
            (t.prototype.isPaused = function () {
              return this._isPaused;
            }),
            (t.prototype.getDuration = function () {
              return this._duration;
            }),
            (t.prototype.to = function (t, e) {
              if ((void 0 === e && (e = 1e3), this._isPlaying))
                throw Error(
                  "Can not call Tween.to() while Tween is already started or paused. Stop the Tween first."
                );
              return (
                (this._valuesEnd = t),
                (this._propertiesAreSetUp = !1),
                (this._duration = e < 0 ? 0 : e),
                this
              );
            }),
            (t.prototype.duration = function (t) {
              return (
                void 0 === t && (t = 1e3),
                (this._duration = t < 0 ? 0 : t),
                this
              );
            }),
            (t.prototype.dynamic = function (t) {
              return void 0 === t && (t = !1), (this._isDynamic = t), this;
            }),
            (t.prototype.start = function (t, e) {
              if (
                (void 0 === t && (t = i()),
                void 0 === e && (e = !1),
                this._isPlaying)
              )
                return this;
              if (((this._repeat = this._initialRepeat), this._reversed))
                for (var n in ((this._reversed = !1), this._valuesStartRepeat))
                  this._swapEndStartRepeatValues(n),
                    (this._valuesStart[n] = this._valuesStartRepeat[n]);
              if (
                ((this._isPlaying = !0),
                (this._isPaused = !1),
                (this._onStartCallbackFired = !1),
                (this._onEveryStartCallbackFired = !1),
                (this._isChainStopped = !1),
                (this._startTime = t),
                (this._startTime += this._delayTime),
                !this._propertiesAreSetUp || e)
              ) {
                if (((this._propertiesAreSetUp = !0), !this._isDynamic)) {
                  var r = {};
                  for (var o in this._valuesEnd) r[o] = this._valuesEnd[o];
                  this._valuesEnd = r;
                }
                this._setupProperties(
                  this._object,
                  this._valuesStart,
                  this._valuesEnd,
                  this._valuesStartRepeat,
                  e
                );
              }
              return this;
            }),
            (t.prototype.startFromCurrentValues = function (t) {
              return this.start(t, !0);
            }),
            (t.prototype._setupProperties = function (t, e, n, r, i) {
              for (var o in n) {
                var a = t[o],
                  l = Array.isArray(a),
                  s = l ? "array" : typeof a,
                  u = !l && Array.isArray(n[o]);
                if ("undefined" !== s && "function" !== s) {
                  if (u) {
                    var c = n[o];
                    if (0 === c.length) continue;
                    for (var f = [a], h = 0, d = c.length; h < d; h += 1) {
                      var p = this._handleRelativeValue(a, c[h]);
                      if (isNaN(p)) {
                        (u = !1),
                          console.warn(
                            "Found invalid interpolation list. Skipping."
                          );
                        break;
                      }
                      f.push(p);
                    }
                    u && (n[o] = f);
                  }
                  if (("object" === s || l) && a && !u) {
                    for (var m in ((e[o] = l ? [] : {}), a)) e[o][m] = a[m];
                    r[o] = l ? [] : {};
                    var c = n[o];
                    if (!this._isDynamic) {
                      var g = {};
                      for (var m in c) g[m] = c[m];
                      n[o] = c = g;
                    }
                    this._setupProperties(a, e[o], c, r[o], i);
                  } else
                    (void 0 === e[o] || i) && (e[o] = a),
                      l || (e[o] *= 1),
                      u ? (r[o] = n[o].slice().reverse()) : (r[o] = e[o] || 0);
                }
              }
            }),
            (t.prototype.stop = function () {
              return (
                this._isChainStopped ||
                  ((this._isChainStopped = !0), this.stopChainedTweens()),
                this._isPlaying &&
                  ((this._isPlaying = !1),
                  (this._isPaused = !1),
                  this._onStopCallback && this._onStopCallback(this._object)),
                this
              );
            }),
            (t.prototype.end = function () {
              return (
                (this._goToEnd = !0),
                this.update(this._startTime + this._duration),
                this
              );
            }),
            (t.prototype.pause = function (t) {
              return (
                void 0 === t && (t = i()),
                this._isPaused ||
                  !this._isPlaying ||
                  ((this._isPaused = !0), (this._pauseStart = t)),
                this
              );
            }),
            (t.prototype.resume = function (t) {
              return (
                void 0 === t && (t = i()),
                this._isPaused &&
                  this._isPlaying &&
                  ((this._isPaused = !1),
                  (this._startTime += t - this._pauseStart),
                  (this._pauseStart = 0)),
                this
              );
            }),
            (t.prototype.stopChainedTweens = function () {
              for (var t = 0, e = this._chainedTweens.length; t < e; t++)
                this._chainedTweens[t].stop();
              return this;
            }),
            (t.prototype.group = function (t) {
              return (
                t
                  ? t.add(this)
                  : console.warn(
                      "tween.group() without args has been removed, use group.add(tween) instead."
                    ),
                this
              );
            }),
            (t.prototype.remove = function () {
              var t;
              return (
                null === (t = this._group) || void 0 === t || t.remove(this),
                this
              );
            }),
            (t.prototype.delay = function (t) {
              return void 0 === t && (t = 0), (this._delayTime = t), this;
            }),
            (t.prototype.repeat = function (t) {
              return (
                void 0 === t && (t = 0),
                (this._initialRepeat = t),
                (this._repeat = t),
                this
              );
            }),
            (t.prototype.repeatDelay = function (t) {
              return (this._repeatDelayTime = t), this;
            }),
            (t.prototype.yoyo = function (t) {
              return void 0 === t && (t = !1), (this._yoyo = t), this;
            }),
            (t.prototype.easing = function (t) {
              return (
                void 0 === t && (t = r.Linear.None),
                (this._easingFunction = t),
                this
              );
            }),
            (t.prototype.interpolation = function (t) {
              return (
                void 0 === t && (t = a.Linear),
                (this._interpolationFunction = t),
                this
              );
            }),
            (t.prototype.chain = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return (this._chainedTweens = t), this;
            }),
            (t.prototype.onStart = function (t) {
              return (this._onStartCallback = t), this;
            }),
            (t.prototype.onEveryStart = function (t) {
              return (this._onEveryStartCallback = t), this;
            }),
            (t.prototype.onUpdate = function (t) {
              return (this._onUpdateCallback = t), this;
            }),
            (t.prototype.onRepeat = function (t) {
              return (this._onRepeatCallback = t), this;
            }),
            (t.prototype.onComplete = function (t) {
              return (this._onCompleteCallback = t), this;
            }),
            (t.prototype.onStop = function (t) {
              return (this._onStopCallback = t), this;
            }),
            (t.prototype.update = function (e, n) {
              var r,
                o,
                a = this;
              if (
                (void 0 === e && (e = i()),
                void 0 === n && (n = t.autoStartOnUpdate),
                this._isPaused)
              )
                return !0;
              if (!this._goToEnd && !this._isPlaying) {
                if (!n) return !1;
                this.start(e, !0);
              }
              if (((this._goToEnd = !1), e < this._startTime)) return !0;
              !1 === this._onStartCallbackFired &&
                (this._onStartCallback && this._onStartCallback(this._object),
                (this._onStartCallbackFired = !0)),
                !1 === this._onEveryStartCallbackFired &&
                  (this._onEveryStartCallback &&
                    this._onEveryStartCallback(this._object),
                  (this._onEveryStartCallbackFired = !0));
              var l = e - this._startTime,
                s =
                  this._duration +
                  (null !== (r = this._repeatDelayTime) && void 0 !== r
                    ? r
                    : this._delayTime),
                u = this._duration + this._repeat * s,
                c = (function () {
                  if (0 === a._duration || l > u) return 1;
                  var t = Math.trunc(l / s),
                    e = Math.min((l - t * s) / a._duration, 1);
                  return 0 === e && l === a._duration ? 1 : e;
                })(),
                f = this._easingFunction(c);
              if (
                (this._updateProperties(
                  this._object,
                  this._valuesStart,
                  this._valuesEnd,
                  f
                ),
                this._onUpdateCallback &&
                  this._onUpdateCallback(this._object, c),
                0 === this._duration || l >= this._duration)
              ) {
                if (this._repeat > 0) {
                  var h = Math.min(
                    Math.trunc((l - this._duration) / s) + 1,
                    this._repeat
                  );
                  for (o in (isFinite(this._repeat) && (this._repeat -= h),
                  this._valuesStartRepeat))
                    this._yoyo ||
                      "string" != typeof this._valuesEnd[o] ||
                      (this._valuesStartRepeat[o] =
                        this._valuesStartRepeat[o] +
                        parseFloat(this._valuesEnd[o])),
                      this._yoyo && this._swapEndStartRepeatValues(o),
                      (this._valuesStart[o] = this._valuesStartRepeat[o]);
                  this._yoyo && (this._reversed = !this._reversed),
                    (this._startTime += s * h),
                    this._onRepeatCallback &&
                      this._onRepeatCallback(this._object),
                    (this._onEveryStartCallbackFired = !1);
                } else {
                  this._onCompleteCallback &&
                    this._onCompleteCallback(this._object);
                  for (var d = 0, p = this._chainedTweens.length; d < p; d++)
                    this._chainedTweens[d].start(
                      this._startTime + this._duration,
                      !1
                    );
                  return (this._isPlaying = !1), !1;
                }
              }
              return !0;
            }),
            (t.prototype._updateProperties = function (t, e, n, r) {
              for (var i in n)
                if (void 0 !== e[i]) {
                  var o = e[i] || 0,
                    a = n[i],
                    l = Array.isArray(t[i]),
                    s = Array.isArray(a);
                  !l && s
                    ? (t[i] = this._interpolationFunction(a, r))
                    : "object" == typeof a && a
                    ? this._updateProperties(t[i], o, a, r)
                    : "number" ==
                        typeof (a = this._handleRelativeValue(o, a)) &&
                      (t[i] = o + (a - o) * r);
                }
            }),
            (t.prototype._handleRelativeValue = function (t, e) {
              return "string" != typeof e
                ? e
                : "+" === e.charAt(0) || "-" === e.charAt(0)
                ? t + parseFloat(e)
                : parseFloat(e);
            }),
            (t.prototype._swapEndStartRepeatValues = function (t) {
              var e = this._valuesStartRepeat[t],
                n = this._valuesEnd[t];
              "string" == typeof n
                ? (this._valuesStartRepeat[t] =
                    this._valuesStartRepeat[t] + parseFloat(n))
                : (this._valuesStartRepeat[t] = this._valuesEnd[t]),
                (this._valuesEnd[t] = e);
            }),
            (t.autoStartOnUpdate = !1),
            t
          );
        })();
      l.nextId,
        s.getAll.bind(s),
        s.removeAll.bind(s),
        s.add.bind(s),
        s.remove.bind(s),
        s.update.bind(s);
    },
    25502: (t, e, n) => {
      "use strict";
      n.d(e, { _: () => i });
      var r = n(27274);
      class i extends r.ExtrudeGeometry {
        constructor(t, e = {}) {
          let n = e.font;
          if (void 0 === n) super();
          else {
            let r = n.generateShapes(t, e.size);
            void 0 === e.depth &&
              void 0 !== e.height &&
              console.warn(
                "THREE.TextGeometry: .height is now depreciated. Please use .depth instead"
              ),
              (e.depth =
                void 0 !== e.depth
                  ? e.depth
                  : void 0 !== e.height
                  ? e.height
                  : 50),
              void 0 === e.bevelThickness && (e.bevelThickness = 10),
              void 0 === e.bevelSize && (e.bevelSize = 8),
              void 0 === e.bevelEnabled && (e.bevelEnabled = !1),
              super(r, e);
          }
          this.type = "TextGeometry";
        }
      }
    },
    75895: (t, e, n) => {
      "use strict";
      let r, i;
      n.d(e, { X: () => M });
      var o = n(27274),
        a = n(24760),
        l = n(40975);
      let s = new o.Vector4(),
        u = new o.Vector3(),
        c = new o.Vector3(),
        f = new o.Vector4(),
        h = new o.Vector4(),
        d = new o.Vector4(),
        p = new o.Vector3(),
        m = new o.Matrix4(),
        g = new o.Line3(),
        v = new o.Vector3(),
        y = new o.Box3(),
        b = new o.Sphere(),
        x = new o.Vector4();
      function w(t, e, n) {
        return (
          x.set(0, 0, -e, 1).applyMatrix4(t.projectionMatrix),
          x.multiplyScalar(1 / x.w),
          (x.x = i / n.width),
          (x.y = i / n.height),
          x.applyMatrix4(t.projectionMatrixInverse),
          x.multiplyScalar(1 / x.w),
          Math.abs(Math.max(x.x, x.y))
        );
      }
      class _ extends o.Mesh {
        constructor(
          t = new a.n(),
          e = new l.G({ color: 0xffffff * Math.random() })
        ) {
          super(t, e),
            (this.isLineSegments2 = !0),
            (this.type = "LineSegments2");
        }
        computeLineDistances() {
          let t = this.geometry,
            e = t.attributes.instanceStart,
            n = t.attributes.instanceEnd,
            r = new Float32Array(2 * e.count);
          for (let t = 0, i = 0, o = e.count; t < o; t++, i += 2)
            u.fromBufferAttribute(e, t),
              c.fromBufferAttribute(n, t),
              (r[i] = 0 === i ? 0 : r[i - 1]),
              (r[i + 1] = r[i] + u.distanceTo(c));
          let i = new o.InstancedInterleavedBuffer(r, 2, 1);
          return (
            t.setAttribute(
              "instanceDistanceStart",
              new o.InterleavedBufferAttribute(i, 1, 0)
            ),
            t.setAttribute(
              "instanceDistanceEnd",
              new o.InterleavedBufferAttribute(i, 1, 1)
            ),
            this
          );
        }
        raycast(t, e) {
          let n, a;
          let l = this.material.worldUnits,
            s = t.camera;
          null !== s ||
            l ||
            console.error(
              'LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'
            );
          let u = (void 0 !== t.params.Line2 && t.params.Line2.threshold) || 0;
          r = t.ray;
          let c = this.matrixWorld,
            x = this.geometry,
            _ = this.material;
          if (
            ((i = _.linewidth + u),
            null === x.boundingSphere && x.computeBoundingSphere(),
            b.copy(x.boundingSphere).applyMatrix4(c),
            l)
          )
            n = 0.5 * i;
          else {
            let t = Math.max(s.near, b.distanceToPoint(r.origin));
            n = w(s, t, _.resolution);
          }
          if (((b.radius += n), !1 !== r.intersectsSphere(b))) {
            if (
              (null === x.boundingBox && x.computeBoundingBox(),
              y.copy(x.boundingBox).applyMatrix4(c),
              l)
            )
              a = 0.5 * i;
            else {
              let t = Math.max(s.near, y.distanceToPoint(r.origin));
              a = w(s, t, _.resolution);
            }
            y.expandByScalar(a),
              !1 !== r.intersectsBox(y) &&
                (l
                  ? (function (t, e) {
                      let n = t.matrixWorld,
                        a = t.geometry,
                        l = a.attributes.instanceStart,
                        s = a.attributes.instanceEnd,
                        u = Math.min(a.instanceCount, l.count);
                      for (let a = 0; a < u; a++) {
                        g.start.fromBufferAttribute(l, a),
                          g.end.fromBufferAttribute(s, a),
                          g.applyMatrix4(n);
                        let u = new o.Vector3(),
                          c = new o.Vector3();
                        r.distanceSqToSegment(g.start, g.end, c, u),
                          c.distanceTo(u) < 0.5 * i &&
                            e.push({
                              point: c,
                              pointOnLine: u,
                              distance: r.origin.distanceTo(c),
                              object: t,
                              face: null,
                              faceIndex: a,
                              uv: null,
                              uv1: null,
                            });
                      }
                    })(this, e)
                  : (function (t, e, n) {
                      let a = e.projectionMatrix,
                        l = t.material.resolution,
                        s = t.matrixWorld,
                        u = t.geometry,
                        c = u.attributes.instanceStart,
                        y = u.attributes.instanceEnd,
                        b = Math.min(u.instanceCount, c.count),
                        x = -e.near;
                      r.at(1, d),
                        (d.w = 1),
                        d.applyMatrix4(e.matrixWorldInverse),
                        d.applyMatrix4(a),
                        d.multiplyScalar(1 / d.w),
                        (d.x *= l.x / 2),
                        (d.y *= l.y / 2),
                        (d.z = 0),
                        p.copy(d),
                        m.multiplyMatrices(e.matrixWorldInverse, s);
                      for (let e = 0; e < b; e++) {
                        if (
                          (f.fromBufferAttribute(c, e),
                          h.fromBufferAttribute(y, e),
                          (f.w = 1),
                          (h.w = 1),
                          f.applyMatrix4(m),
                          h.applyMatrix4(m),
                          f.z > x && h.z > x)
                        )
                          continue;
                        if (f.z > x) {
                          let t = f.z - h.z,
                            e = (f.z - x) / t;
                          f.lerp(h, e);
                        } else if (h.z > x) {
                          let t = h.z - f.z,
                            e = (h.z - x) / t;
                          h.lerp(f, e);
                        }
                        f.applyMatrix4(a),
                          h.applyMatrix4(a),
                          f.multiplyScalar(1 / f.w),
                          h.multiplyScalar(1 / h.w),
                          (f.x *= l.x / 2),
                          (f.y *= l.y / 2),
                          (h.x *= l.x / 2),
                          (h.y *= l.y / 2),
                          g.start.copy(f),
                          (g.start.z = 0),
                          g.end.copy(h),
                          (g.end.z = 0);
                        let u = g.closestPointToPointParameter(p, !0);
                        g.at(u, v);
                        let d = o.MathUtils.lerp(f.z, h.z, u),
                          b = d >= -1 && d <= 1,
                          w = p.distanceTo(v) < 0.5 * i;
                        if (b && w) {
                          g.start.fromBufferAttribute(c, e),
                            g.end.fromBufferAttribute(y, e),
                            g.start.applyMatrix4(s),
                            g.end.applyMatrix4(s);
                          let i = new o.Vector3(),
                            a = new o.Vector3();
                          r.distanceSqToSegment(g.start, g.end, a, i),
                            n.push({
                              point: a,
                              pointOnLine: i,
                              distance: r.origin.distanceTo(a),
                              object: t,
                              face: null,
                              faceIndex: e,
                              uv: null,
                              uv1: null,
                            });
                        }
                      }
                    })(this, s, e));
          }
        }
        onBeforeRender(t) {
          let e = this.material.uniforms;
          e &&
            e.resolution &&
            (t.getViewport(s),
            this.material.uniforms.resolution.value.set(s.z, s.w));
        }
      }
      var S = n(91130);
      class M extends _ {
        constructor(
          t = new S.v(),
          e = new l.G({ color: 0xffffff * Math.random() })
        ) {
          super(t, e), (this.isLine2 = !0), (this.type = "Line2");
        }
      }
    },
    91130: (t, e, n) => {
      "use strict";
      n.d(e, { v: () => i });
      var r = n(24760);
      class i extends r.n {
        constructor() {
          super(), (this.isLineGeometry = !0), (this.type = "LineGeometry");
        }
        setPositions(t) {
          let e = t.length - 3,
            n = new Float32Array(2 * e);
          for (let r = 0; r < e; r += 3)
            (n[2 * r] = t[r]),
              (n[2 * r + 1] = t[r + 1]),
              (n[2 * r + 2] = t[r + 2]),
              (n[2 * r + 3] = t[r + 3]),
              (n[2 * r + 4] = t[r + 4]),
              (n[2 * r + 5] = t[r + 5]);
          return super.setPositions(n), this;
        }
        setColors(t) {
          let e = t.length - 3,
            n = new Float32Array(2 * e);
          for (let r = 0; r < e; r += 3)
            (n[2 * r] = t[r]),
              (n[2 * r + 1] = t[r + 1]),
              (n[2 * r + 2] = t[r + 2]),
              (n[2 * r + 3] = t[r + 3]),
              (n[2 * r + 4] = t[r + 4]),
              (n[2 * r + 5] = t[r + 5]);
          return super.setColors(n), this;
        }
        fromLine(t) {
          let e = t.geometry;
          return this.setPositions(e.attributes.position.array), this;
        }
      }
    },
    40975: (t, e, n) => {
      "use strict";
      n.d(e, { G: () => i });
      var r = n(27274);
      (r.UniformsLib.line = {
        worldUnits: { value: 1 },
        linewidth: { value: 1 },
        resolution: { value: new r.Vector2(1, 1) },
        dashOffset: { value: 0 },
        dashScale: { value: 1 },
        dashSize: { value: 1 },
        gapSize: { value: 1 },
      }),
        (r.ShaderLib.line = {
          uniforms: r.UniformsUtils.merge([
            r.UniformsLib.common,
            r.UniformsLib.fog,
            r.UniformsLib.line,
          ]),
          vertexShader: `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,
          fragmentShader: `
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`,
        });
      class i extends r.ShaderMaterial {
        static get type() {
          return "LineMaterial";
        }
        constructor(t) {
          super({
            uniforms: r.UniformsUtils.clone(r.ShaderLib.line.uniforms),
            vertexShader: r.ShaderLib.line.vertexShader,
            fragmentShader: r.ShaderLib.line.fragmentShader,
            clipping: !0,
          }),
            (this.isLineMaterial = !0),
            this.setValues(t);
        }
        get color() {
          return this.uniforms.diffuse.value;
        }
        set color(t) {
          this.uniforms.diffuse.value = t;
        }
        get worldUnits() {
          return "WORLD_UNITS" in this.defines;
        }
        set worldUnits(t) {
          !0 === t
            ? (this.defines.WORLD_UNITS = "")
            : delete this.defines.WORLD_UNITS;
        }
        get linewidth() {
          return this.uniforms.linewidth.value;
        }
        set linewidth(t) {
          this.uniforms.linewidth && (this.uniforms.linewidth.value = t);
        }
        get dashed() {
          return "USE_DASH" in this.defines;
        }
        set dashed(t) {
          (!0 === t) !== this.dashed && (this.needsUpdate = !0),
            !0 === t
              ? (this.defines.USE_DASH = "")
              : delete this.defines.USE_DASH;
        }
        get dashScale() {
          return this.uniforms.dashScale.value;
        }
        set dashScale(t) {
          this.uniforms.dashScale.value = t;
        }
        get dashSize() {
          return this.uniforms.dashSize.value;
        }
        set dashSize(t) {
          this.uniforms.dashSize.value = t;
        }
        get dashOffset() {
          return this.uniforms.dashOffset.value;
        }
        set dashOffset(t) {
          this.uniforms.dashOffset.value = t;
        }
        get gapSize() {
          return this.uniforms.gapSize.value;
        }
        set gapSize(t) {
          this.uniforms.gapSize.value = t;
        }
        get opacity() {
          return this.uniforms.opacity.value;
        }
        set opacity(t) {
          this.uniforms && (this.uniforms.opacity.value = t);
        }
        get resolution() {
          return this.uniforms.resolution.value;
        }
        set resolution(t) {
          this.uniforms.resolution.value.copy(t);
        }
        get alphaToCoverage() {
          return "USE_ALPHA_TO_COVERAGE" in this.defines;
        }
        set alphaToCoverage(t) {
          this.defines &&
            ((!0 === t) !== this.alphaToCoverage && (this.needsUpdate = !0),
            !0 === t
              ? (this.defines.USE_ALPHA_TO_COVERAGE = "")
              : delete this.defines.USE_ALPHA_TO_COVERAGE);
        }
      }
    },
    24760: (t, e, n) => {
      "use strict";
      n.d(e, { n: () => a });
      var r = n(27274);
      let i = new r.Box3(),
        o = new r.Vector3();
      class a extends r.InstancedBufferGeometry {
        constructor() {
          super(),
            (this.isLineSegmentsGeometry = !0),
            (this.type = "LineSegmentsGeometry"),
            this.setIndex([
              0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5,
            ]),
            this.setAttribute(
              "position",
              new r.Float32BufferAttribute(
                [
                  -1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1,
                  -1, 0, 1, -1, 0,
                ],
                3
              )
            ),
            this.setAttribute(
              "uv",
              new r.Float32BufferAttribute(
                [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2],
                2
              )
            );
        }
        applyMatrix4(t) {
          let e = this.attributes.instanceStart,
            n = this.attributes.instanceEnd;
          return (
            void 0 !== e &&
              (e.applyMatrix4(t), n.applyMatrix4(t), (e.needsUpdate = !0)),
            null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this
          );
        }
        setPositions(t) {
          let e;
          t instanceof Float32Array
            ? (e = t)
            : Array.isArray(t) && (e = new Float32Array(t));
          let n = new r.InstancedInterleavedBuffer(e, 6, 1);
          return (
            this.setAttribute(
              "instanceStart",
              new r.InterleavedBufferAttribute(n, 3, 0)
            ),
            this.setAttribute(
              "instanceEnd",
              new r.InterleavedBufferAttribute(n, 3, 3)
            ),
            (this.instanceCount = this.attributes.instanceStart.count),
            this.computeBoundingBox(),
            this.computeBoundingSphere(),
            this
          );
        }
        setColors(t) {
          let e;
          t instanceof Float32Array
            ? (e = t)
            : Array.isArray(t) && (e = new Float32Array(t));
          let n = new r.InstancedInterleavedBuffer(e, 6, 1);
          return (
            this.setAttribute(
              "instanceColorStart",
              new r.InterleavedBufferAttribute(n, 3, 0)
            ),
            this.setAttribute(
              "instanceColorEnd",
              new r.InterleavedBufferAttribute(n, 3, 3)
            ),
            this
          );
        }
        fromWireframeGeometry(t) {
          return this.setPositions(t.attributes.position.array), this;
        }
        fromEdgesGeometry(t) {
          return this.setPositions(t.attributes.position.array), this;
        }
        fromMesh(t) {
          return (
            this.fromWireframeGeometry(new r.WireframeGeometry(t.geometry)),
            this
          );
        }
        fromLineSegments(t) {
          let e = t.geometry;
          return this.setPositions(e.attributes.position.array), this;
        }
        computeBoundingBox() {
          null === this.boundingBox && (this.boundingBox = new r.Box3());
          let t = this.attributes.instanceStart,
            e = this.attributes.instanceEnd;
          void 0 !== t &&
            void 0 !== e &&
            (this.boundingBox.setFromBufferAttribute(t),
            i.setFromBufferAttribute(e),
            this.boundingBox.union(i));
        }
        computeBoundingSphere() {
          null === this.boundingSphere &&
            (this.boundingSphere = new r.Sphere()),
            null === this.boundingBox && this.computeBoundingBox();
          let t = this.attributes.instanceStart,
            e = this.attributes.instanceEnd;
          if (void 0 !== t && void 0 !== e) {
            let n = this.boundingSphere.center;
            this.boundingBox.getCenter(n);
            let r = 0;
            for (let i = 0, a = t.count; i < a; i++)
              o.fromBufferAttribute(t, i),
                (r = Math.max(r, n.distanceToSquared(o))),
                o.fromBufferAttribute(e, i),
                (r = Math.max(r, n.distanceToSquared(o)));
            (this.boundingSphere.radius = Math.sqrt(r)),
              isNaN(this.boundingSphere.radius) &&
                console.error(
                  "THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",
                  this
                );
          }
        }
        toJSON() {}
        applyMatrix(t) {
          return (
            console.warn(
              "THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."
            ),
            this.applyMatrix4(t)
          );
        }
      }
    },
    44215: (t, e, n) => {
      "use strict";
      n.d(e, { K: () => i });
      var r = n(27274);
      class i {
        constructor(t) {
          (this.isFont = !0), (this.type = "Font"), (this.data = t);
        }
        generateShapes(t, e = 100) {
          let n = [],
            i = (function (t, e, n) {
              let i = Array.from(t),
                o = e / n.resolution,
                a =
                  (n.boundingBox.yMax -
                    n.boundingBox.yMin +
                    n.underlineThickness) *
                  o,
                l = [],
                s = 0,
                u = 0;
              for (let t = 0; t < i.length; t++) {
                let e = i[t];
                if ("\n" === e) (s = 0), (u -= a);
                else {
                  let t = (function (t, e, n, i, o) {
                    let a, l, s, u, c, f, h, d;
                    let p = o.glyphs[t] || o.glyphs["?"];
                    if (!p) {
                      console.error(
                        'THREE.Font: character "' +
                          t +
                          '" does not exists in font family ' +
                          o.familyName +
                          "."
                      );
                      return;
                    }
                    let m = new r.ShapePath();
                    if (p.o) {
                      let t =
                        p._cachedOutline || (p._cachedOutline = p.o.split(" "));
                      for (let r = 0, o = t.length; r < o; )
                        switch (t[r++]) {
                          case "m":
                            (a = t[r++] * e + n),
                              (l = t[r++] * e + i),
                              m.moveTo(a, l);
                            break;
                          case "l":
                            (a = t[r++] * e + n),
                              (l = t[r++] * e + i),
                              m.lineTo(a, l);
                            break;
                          case "q":
                            (s = t[r++] * e + n),
                              (u = t[r++] * e + i),
                              (c = t[r++] * e + n),
                              (f = t[r++] * e + i),
                              m.quadraticCurveTo(c, f, s, u);
                            break;
                          case "b":
                            (s = t[r++] * e + n),
                              (u = t[r++] * e + i),
                              (c = t[r++] * e + n),
                              (f = t[r++] * e + i),
                              (h = t[r++] * e + n),
                              (d = t[r++] * e + i),
                              m.bezierCurveTo(c, f, h, d, s, u);
                        }
                    }
                    return { offsetX: p.ha * e, path: m };
                  })(e, o, s, u, n);
                  (s += t.offsetX), l.push(t.path);
                }
              }
              return l;
            })(t, e, this.data);
          for (let t = 0, e = i.length; t < e; t++) n.push(...i[t].toShapes());
          return n;
        }
      }
    },
    79609: (t, e, n) => {
      "use strict";
      n.d(e, { v: () => i });
      var r = n(27274);
      class i extends r.Object3D {
        constructor(t = document.createElement("div")) {
          super(),
            (this.isCSS2DObject = !0),
            (this.element = t),
            (this.element.style.position = "absolute"),
            (this.element.style.userSelect = "none"),
            this.element.setAttribute("draggable", !1),
            (this.center = new r.Vector2(0.5, 0.5)),
            this.addEventListener("removed", function () {
              this.traverse(function (t) {
                t.element instanceof
                  t.element.ownerDocument.defaultView.Element &&
                  null !== t.element.parentNode &&
                  t.element.remove();
              });
            });
        }
        copy(t, e) {
          return (
            super.copy(t, e),
            (this.element = t.element.cloneNode(!0)),
            (this.center = t.center),
            this
          );
        }
      }
      new r.Vector3(),
        new r.Matrix4(),
        new r.Matrix4(),
        new r.Vector3(),
        new r.Vector3();
    },
    23301: (t, e, n) => {
      "use strict";
      n.r(e),
        n.d(e, {
          computeMikkTSpaceTangents: () => i,
          computeMorphedAttributes: () => p,
          deepCloneAttribute: () => l,
          deinterleaveAttribute: () => u,
          deinterleaveGeometry: () => c,
          estimateBytesUsed: () => f,
          interleaveAttributes: () => s,
          mergeAttributes: () => a,
          mergeGeometries: () => o,
          mergeGroups: () => m,
          mergeVertices: () => h,
          toCreasedNormals: () => g,
          toTrianglesDrawMode: () => d,
        });
      var r = n(27274);
      function i(t, e, n = !0) {
        if (!e || !e.isReady)
          throw Error(
            "BufferGeometryUtils: Initialized MikkTSpace library required."
          );
        if (
          !t.hasAttribute("position") ||
          !t.hasAttribute("normal") ||
          !t.hasAttribute("uv")
        )
          throw Error(
            'BufferGeometryUtils: Tangents require "position", "normal", and "uv" attributes.'
          );
        function o(t) {
          if (t.normalized || t.isInterleavedBufferAttribute) {
            let e = new Float32Array(t.count * t.itemSize);
            for (let n = 0, r = 0; n < t.count; n++)
              (e[r++] = t.getX(n)),
                (e[r++] = t.getY(n)),
                t.itemSize > 2 && (e[r++] = t.getZ(n));
            return e;
          }
          return t.array instanceof Float32Array
            ? t.array
            : new Float32Array(t.array);
        }
        let a = t.index ? t.toNonIndexed() : t,
          l = e.generateTangents(
            o(a.attributes.position),
            o(a.attributes.normal),
            o(a.attributes.uv)
          );
        if (n) for (let t = 3; t < l.length; t += 4) l[t] *= -1;
        return (
          a.setAttribute("tangent", new r.BufferAttribute(l, 4)),
          t !== a && t.copy(a),
          t
        );
      }
      function o(t, e = !1) {
        let n = null !== t[0].index,
          i = new Set(Object.keys(t[0].attributes)),
          l = new Set(Object.keys(t[0].morphAttributes)),
          s = {},
          u = {},
          c = t[0].morphTargetsRelative,
          f = new r.BufferGeometry(),
          h = 0;
        for (let r = 0; r < t.length; ++r) {
          let o = t[r],
            a = 0;
          if (n !== (null !== o.index))
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
                  r +
                  ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."
              ),
              null
            );
          for (let t in o.attributes) {
            if (!i.has(t))
              return (
                console.error(
                  "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
                    r +
                    '. All geometries must have compatible attributes; make sure "' +
                    t +
                    '" attribute exists among all geometries, or in none of them.'
                ),
                null
              );
            void 0 === s[t] && (s[t] = []), s[t].push(o.attributes[t]), a++;
          }
          if (a !== i.size)
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
                  r +
                  ". Make sure all geometries have the same number of attributes."
              ),
              null
            );
          if (c !== o.morphTargetsRelative)
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
                  r +
                  ". .morphTargetsRelative must be consistent throughout all geometries."
              ),
              null
            );
          for (let t in o.morphAttributes) {
            if (!l.has(t))
              return (
                console.error(
                  "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
                    r +
                    ".  .morphAttributes must be consistent throughout all geometries."
                ),
                null
              );
            void 0 === u[t] && (u[t] = []), u[t].push(o.morphAttributes[t]);
          }
          if (e) {
            let t;
            if (n) t = o.index.count;
            else {
              if (void 0 === o.attributes.position)
                return (
                  console.error(
                    "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
                      r +
                      ". The geometry must have either an index or a position attribute"
                  ),
                  null
                );
              t = o.attributes.position.count;
            }
            f.addGroup(h, t, r), (h += t);
          }
        }
        if (n) {
          let e = 0,
            n = [];
          for (let r = 0; r < t.length; ++r) {
            let i = t[r].index;
            for (let t = 0; t < i.count; ++t) n.push(i.getX(t) + e);
            e += t[r].attributes.position.count;
          }
          f.setIndex(n);
        }
        for (let t in s) {
          let e = a(s[t]);
          if (!e)
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " +
                  t +
                  " attribute."
              ),
              null
            );
          f.setAttribute(t, e);
        }
        for (let t in u) {
          let e = u[t][0].length;
          if (0 === e) break;
          (f.morphAttributes = f.morphAttributes || {}),
            (f.morphAttributes[t] = []);
          for (let n = 0; n < e; ++n) {
            let e = [];
            for (let r = 0; r < u[t].length; ++r) e.push(u[t][r][n]);
            let r = a(e);
            if (!r)
              return (
                console.error(
                  "THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " +
                    t +
                    " morphAttribute."
                ),
                null
              );
            f.morphAttributes[t].push(r);
          }
        }
        return f;
      }
      function a(t) {
        let e, n, i;
        let o = -1,
          a = 0;
        for (let r = 0; r < t.length; ++r) {
          let l = t[r];
          if (
            (void 0 === e && (e = l.array.constructor),
            e !== l.array.constructor)
          )
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."
              ),
              null
            );
          if ((void 0 === n && (n = l.itemSize), n !== l.itemSize))
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."
              ),
              null
            );
          if ((void 0 === i && (i = l.normalized), i !== l.normalized))
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."
              ),
              null
            );
          if ((-1 === o && (o = l.gpuType), o !== l.gpuType))
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."
              ),
              null
            );
          a += l.count * n;
        }
        let l = new e(a),
          s = new r.BufferAttribute(l, n, i),
          u = 0;
        for (let e = 0; e < t.length; ++e) {
          let r = t[e];
          if (r.isInterleavedBufferAttribute) {
            let t = u / n;
            for (let e = 0, i = r.count; e < i; e++)
              for (let i = 0; i < n; i++) {
                let n = r.getComponent(e, i);
                s.setComponent(e + t, i, n);
              }
          } else l.set(r.array, u);
          u += r.count * n;
        }
        return void 0 !== o && (s.gpuType = o), s;
      }
      function l(t) {
        return t.isInstancedInterleavedBufferAttribute ||
          t.isInterleavedBufferAttribute
          ? u(t)
          : t.isInstancedBufferAttribute
          ? new r.InstancedBufferAttribute().copy(t)
          : new r.BufferAttribute().copy(t);
      }
      function s(t) {
        let e;
        let n = 0,
          i = 0;
        for (let r = 0, o = t.length; r < o; ++r) {
          let o = t[r];
          if (
            (void 0 === e && (e = o.array.constructor),
            e !== o.array.constructor)
          )
            return (
              console.error(
                "AttributeBuffers of different types cannot be interleaved"
              ),
              null
            );
          (n += o.array.length), (i += o.itemSize);
        }
        let o = new r.InterleavedBuffer(new e(n), i),
          a = 0,
          l = [],
          s = ["getX", "getY", "getZ", "getW"],
          u = ["setX", "setY", "setZ", "setW"];
        for (let e = 0, n = t.length; e < n; e++) {
          let n = t[e],
            i = n.itemSize,
            c = n.count,
            f = new r.InterleavedBufferAttribute(o, i, a, n.normalized);
          l.push(f), (a += i);
          for (let t = 0; t < c; t++)
            for (let e = 0; e < i; e++) f[u[e]](t, n[s[e]](t));
        }
        return l;
      }
      function u(t) {
        let e;
        let n = t.data.array.constructor,
          i = t.count,
          o = t.itemSize,
          a = t.normalized,
          l = new n(i * o);
        e = t.isInstancedInterleavedBufferAttribute
          ? new r.InstancedBufferAttribute(l, o, a, t.meshPerAttribute)
          : new r.BufferAttribute(l, o, a);
        for (let n = 0; n < i; n++)
          e.setX(n, t.getX(n)),
            o >= 2 && e.setY(n, t.getY(n)),
            o >= 3 && e.setZ(n, t.getZ(n)),
            o >= 4 && e.setW(n, t.getW(n));
        return e;
      }
      function c(t) {
        let e = t.attributes,
          n = t.morphTargets,
          r = new Map();
        for (let t in e) {
          let n = e[t];
          n.isInterleavedBufferAttribute &&
            (r.has(n) || r.set(n, u(n)), (e[t] = r.get(n)));
        }
        for (let t in n) {
          let e = n[t];
          e.isInterleavedBufferAttribute &&
            (r.has(e) || r.set(e, u(e)), (n[t] = r.get(e)));
        }
      }
      function f(t) {
        let e = 0;
        for (let n in t.attributes) {
          let r = t.getAttribute(n);
          e += r.count * r.itemSize * r.array.BYTES_PER_ELEMENT;
        }
        let n = t.getIndex();
        return e + (n ? n.count * n.itemSize * n.array.BYTES_PER_ELEMENT : 0);
      }
      function h(t, e = 1e-4) {
        e = Math.max(e, Number.EPSILON);
        let n = {},
          r = t.getIndex(),
          i = t.getAttribute("position"),
          o = r ? r.count : i.count,
          a = 0,
          l = Object.keys(t.attributes),
          s = {},
          u = {},
          c = [],
          f = ["getX", "getY", "getZ", "getW"],
          d = ["setX", "setY", "setZ", "setW"];
        for (let e = 0, n = l.length; e < n; e++) {
          let n = l[e],
            r = t.attributes[n];
          s[n] = new r.constructor(
            new r.array.constructor(r.count * r.itemSize),
            r.itemSize,
            r.normalized
          );
          let i = t.morphAttributes[n];
          i &&
            (u[n] || (u[n] = []),
            i.forEach((t, e) => {
              let r = new t.array.constructor(t.count * t.itemSize);
              u[n][e] = new t.constructor(r, t.itemSize, t.normalized);
            }));
        }
        let p = 0.5 * e,
          m = Math.pow(10, Math.log10(1 / e)),
          g = p * m;
        for (let e = 0; e < o; e++) {
          let i = r ? r.getX(e) : e,
            o = "";
          for (let e = 0, n = l.length; e < n; e++) {
            let n = l[e],
              r = t.getAttribute(n),
              a = r.itemSize;
            for (let t = 0; t < a; t++) o += `${~~(r[f[t]](i) * m + g)},`;
          }
          if (o in n) c.push(n[o]);
          else {
            for (let e = 0, n = l.length; e < n; e++) {
              let n = l[e],
                r = t.getAttribute(n),
                o = t.morphAttributes[n],
                c = r.itemSize,
                h = s[n],
                p = u[n];
              for (let t = 0; t < c; t++) {
                let e = f[t],
                  n = d[t];
                if ((h[n](a, r[e](i)), o))
                  for (let t = 0, r = o.length; t < r; t++)
                    p[t][n](a, o[t][e](i));
              }
            }
            (n[o] = a), c.push(a), a++;
          }
        }
        let v = t.clone();
        for (let e in t.attributes) {
          let t = s[e];
          if (
            (v.setAttribute(
              e,
              new t.constructor(
                t.array.slice(0, a * t.itemSize),
                t.itemSize,
                t.normalized
              )
            ),
            e in u)
          )
            for (let t = 0; t < u[e].length; t++) {
              let n = u[e][t];
              v.morphAttributes[e][t] = new n.constructor(
                n.array.slice(0, a * n.itemSize),
                n.itemSize,
                n.normalized
              );
            }
        }
        return v.setIndex(c), v;
      }
      function d(t, e) {
        if (e === r.TrianglesDrawMode)
          return (
            console.warn(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
            ),
            t
          );
        if (e !== r.TriangleFanDrawMode && e !== r.TriangleStripDrawMode)
          return (
            console.error(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
              e
            ),
            t
          );
        {
          let n = t.getIndex();
          if (null === n) {
            let e = [],
              r = t.getAttribute("position");
            if (void 0 === r)
              return (
                console.error(
                  "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
                ),
                t
              );
            for (let t = 0; t < r.count; t++) e.push(t);
            t.setIndex(e), (n = t.getIndex());
          }
          let i = n.count - 2,
            o = [];
          if (e === r.TriangleFanDrawMode)
            for (let t = 1; t <= i; t++)
              o.push(n.getX(0)), o.push(n.getX(t)), o.push(n.getX(t + 1));
          else
            for (let t = 0; t < i; t++)
              t % 2 == 0
                ? (o.push(n.getX(t)),
                  o.push(n.getX(t + 1)),
                  o.push(n.getX(t + 2)))
                : (o.push(n.getX(t + 2)),
                  o.push(n.getX(t + 1)),
                  o.push(n.getX(t)));
          o.length / 3 !== i &&
            console.error(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
            );
          let a = t.clone();
          return a.setIndex(o), a.clearGroups(), a;
        }
      }
      function p(t) {
        let e, n, i, o, a, l, s, u, c, f;
        let h = new r.Vector3(),
          d = new r.Vector3(),
          p = new r.Vector3(),
          m = new r.Vector3(),
          g = new r.Vector3(),
          v = new r.Vector3(),
          y = new r.Vector3(),
          b = new r.Vector3(),
          x = new r.Vector3();
        function w(t, e, n, r, i, o, a, l) {
          h.fromBufferAttribute(e, i),
            d.fromBufferAttribute(e, o),
            p.fromBufferAttribute(e, a);
          let s = t.morphTargetInfluences;
          if (n && s) {
            y.set(0, 0, 0), b.set(0, 0, 0), x.set(0, 0, 0);
            for (let t = 0, e = n.length; t < e; t++) {
              let e = s[t],
                l = n[t];
              0 !== e &&
                (m.fromBufferAttribute(l, i),
                g.fromBufferAttribute(l, o),
                v.fromBufferAttribute(l, a),
                r
                  ? (y.addScaledVector(m, e),
                    b.addScaledVector(g, e),
                    x.addScaledVector(v, e))
                  : (y.addScaledVector(m.sub(h), e),
                    b.addScaledVector(g.sub(d), e),
                    x.addScaledVector(v.sub(p), e)));
            }
            h.add(y), d.add(b), p.add(x);
          }
          t.isSkinnedMesh &&
            (t.applyBoneTransform(i, h),
            t.applyBoneTransform(o, d),
            t.applyBoneTransform(a, p)),
            (l[3 * i + 0] = h.x),
            (l[3 * i + 1] = h.y),
            (l[3 * i + 2] = h.z),
            (l[3 * o + 0] = d.x),
            (l[3 * o + 1] = d.y),
            (l[3 * o + 2] = d.z),
            (l[3 * a + 0] = p.x),
            (l[3 * a + 1] = p.y),
            (l[3 * a + 2] = p.z);
        }
        let _ = t.geometry,
          S = t.material,
          M = _.index,
          A = _.attributes.position,
          E = _.morphAttributes.position,
          j = _.morphTargetsRelative,
          P = _.attributes.normal,
          T = _.morphAttributes.position,
          O = _.groups,
          k = _.drawRange,
          F = new Float32Array(A.count * A.itemSize),
          I = new Float32Array(P.count * P.itemSize);
        if (null !== M) {
          if (Array.isArray(S))
            for (o = 0, l = O.length; o < l; o++)
              for (
                c = Math.max((u = O[o]).start, k.start),
                  f = Math.min(u.start + u.count, k.start + k.count),
                  a = c,
                  s = f;
                a < s;
                a += 3
              )
                w(
                  t,
                  A,
                  E,
                  j,
                  (e = M.getX(a)),
                  (n = M.getX(a + 1)),
                  (i = M.getX(a + 2)),
                  F
                ),
                  w(t, P, T, j, e, n, i, I);
          else
            for (
              c = Math.max(0, k.start),
                f = Math.min(M.count, k.start + k.count),
                o = c,
                l = f;
              o < l;
              o += 3
            )
              w(
                t,
                A,
                E,
                j,
                (e = M.getX(o)),
                (n = M.getX(o + 1)),
                (i = M.getX(o + 2)),
                F
              ),
                w(t, P, T, j, e, n, i, I);
        } else if (Array.isArray(S))
          for (o = 0, l = O.length; o < l; o++)
            for (
              c = Math.max((u = O[o]).start, k.start),
                f = Math.min(u.start + u.count, k.start + k.count),
                a = c,
                s = f;
              a < s;
              a += 3
            )
              w(t, A, E, j, (e = a), (n = a + 1), (i = a + 2), F),
                w(t, P, T, j, e, n, i, I);
        else
          for (
            c = Math.max(0, k.start),
              f = Math.min(A.count, k.start + k.count),
              o = c,
              l = f;
            o < l;
            o += 3
          )
            w(t, A, E, j, (e = o), (n = o + 1), (i = o + 2), F),
              w(t, P, T, j, e, n, i, I);
        return {
          positionAttribute: A,
          normalAttribute: P,
          morphedPositionAttribute: new r.Float32BufferAttribute(F, 3),
          morphedNormalAttribute: new r.Float32BufferAttribute(I, 3),
        };
      }
      function m(t) {
        if (0 === t.groups.length)
          return (
            console.warn(
              "THREE.BufferGeometryUtils.mergeGroups(): No groups are defined. Nothing to merge."
            ),
            t
          );
        let e = t.groups;
        if (
          ((e = e.sort((t, e) =>
            t.materialIndex !== e.materialIndex
              ? t.materialIndex - e.materialIndex
              : t.start - e.start
          )),
          null === t.getIndex())
        ) {
          let e = t.getAttribute("position"),
            n = [];
          for (let t = 0; t < e.count; t += 3) n.push(t, t + 1, t + 2);
          t.setIndex(n);
        }
        let n = t.getIndex(),
          r = [];
        for (let t = 0; t < e.length; t++) {
          let i = e[t],
            o = i.start,
            a = o + i.count;
          for (let t = o; t < a; t++) r.push(n.getX(t));
        }
        t.dispose(), t.setIndex(r);
        let i = 0;
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          (n.start = i), (i += n.count);
        }
        let o = e[0];
        t.groups = [o];
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          o.materialIndex === r.materialIndex
            ? (o.count += r.count)
            : ((o = r), t.groups.push(o));
        }
        return t;
      }
      function g(t, e = Math.PI / 3) {
        let n = Math.cos(e),
          i = (1 + 1e-10) * 100,
          o = [new r.Vector3(), new r.Vector3(), new r.Vector3()],
          a = new r.Vector3(),
          l = new r.Vector3(),
          s = new r.Vector3(),
          u = new r.Vector3();
        function c(t) {
          let e = ~~(t.x * i),
            n = ~~(t.y * i),
            r = ~~(t.z * i);
          return `${e},${n},${r}`;
        }
        let f = t.index ? t.toNonIndexed() : t,
          h = f.attributes.position,
          d = {};
        for (let t = 0, e = h.count / 3; t < e; t++) {
          let e = 3 * t,
            n = o[0].fromBufferAttribute(h, e + 0),
            i = o[1].fromBufferAttribute(h, e + 1),
            s = o[2].fromBufferAttribute(h, e + 2);
          a.subVectors(s, i), l.subVectors(n, i);
          let u = new r.Vector3().crossVectors(a, l).normalize();
          for (let t = 0; t < 3; t++) {
            let e = c(o[t]);
            e in d || (d[e] = []), d[e].push(u);
          }
        }
        let p = new Float32Array(3 * h.count),
          m = new r.BufferAttribute(p, 3, !1);
        for (let t = 0, e = h.count / 3; t < e; t++) {
          let e = 3 * t,
            r = o[0].fromBufferAttribute(h, e + 0),
            i = o[1].fromBufferAttribute(h, e + 1),
            f = o[2].fromBufferAttribute(h, e + 2);
          a.subVectors(f, i),
            l.subVectors(r, i),
            s.crossVectors(a, l).normalize();
          for (let t = 0; t < 3; t++) {
            let r = d[c(o[t])];
            u.set(0, 0, 0);
            for (let t = 0, e = r.length; t < e; t++) {
              let e = r[t];
              s.dot(e) > n && u.add(e);
            }
            u.normalize(), m.setXYZ(e + t, u.x, u.y, u.z);
          }
        }
        return f.setAttribute("normal", m), f;
      }
    },
    68943: (t, e, n) => {
      "use strict";
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      n.d(e, { A: () => a });
      var i = /^\s+/,
        o = /\s+$/;
      function a(t, e) {
        if (((e = e || {}), (t = t || "") instanceof a)) return t;
        if (!(this instanceof a)) return new a(t, e);
        var n,
          l,
          s,
          u,
          c,
          f,
          h,
          d,
          p,
          m,
          g,
          v,
          y,
          b,
          x,
          w,
          _,
          M,
          j,
          T,
          k =
            ((l = { r: 0, g: 0, b: 0 }),
            (s = 1),
            (u = null),
            (c = null),
            (f = null),
            (h = !1),
            (d = !1),
            "string" == typeof (n = t) &&
              (n = (function (t) {
                t = t.replace(i, "").replace(o, "").toLowerCase();
                var e,
                  n = !1;
                if (S[t]) (t = S[t]), (n = !0);
                else if ("transparent" == t)
                  return { r: 0, g: 0, b: 0, a: 0, format: "name" };
                return (e = F.rgb.exec(t))
                  ? { r: e[1], g: e[2], b: e[3] }
                  : (e = F.rgba.exec(t))
                  ? { r: e[1], g: e[2], b: e[3], a: e[4] }
                  : (e = F.hsl.exec(t))
                  ? { h: e[1], s: e[2], l: e[3] }
                  : (e = F.hsla.exec(t))
                  ? { h: e[1], s: e[2], l: e[3], a: e[4] }
                  : (e = F.hsv.exec(t))
                  ? { h: e[1], s: e[2], v: e[3] }
                  : (e = F.hsva.exec(t))
                  ? { h: e[1], s: e[2], v: e[3], a: e[4] }
                  : (e = F.hex8.exec(t))
                  ? {
                      r: P(e[1]),
                      g: P(e[2]),
                      b: P(e[3]),
                      a: P(e[4]) / 255,
                      format: n ? "name" : "hex8",
                    }
                  : (e = F.hex6.exec(t))
                  ? {
                      r: P(e[1]),
                      g: P(e[2]),
                      b: P(e[3]),
                      format: n ? "name" : "hex",
                    }
                  : (e = F.hex4.exec(t))
                  ? {
                      r: P(e[1] + "" + e[1]),
                      g: P(e[2] + "" + e[2]),
                      b: P(e[3] + "" + e[3]),
                      a: P(e[4] + "" + e[4]) / 255,
                      format: n ? "name" : "hex8",
                    }
                  : !!(e = F.hex3.exec(t)) && {
                      r: P(e[1] + "" + e[1]),
                      g: P(e[2] + "" + e[2]),
                      b: P(e[3] + "" + e[3]),
                      format: n ? "name" : "hex",
                    };
              })(n)),
            "object" == r(n) &&
              (I(n.r) && I(n.g) && I(n.b)
                ? ((p = n.r),
                  (m = n.g),
                  (g = n.b),
                  (l = {
                    r: 255 * E(p, 255),
                    g: 255 * E(m, 255),
                    b: 255 * E(g, 255),
                  }),
                  (h = !0),
                  (d = "%" === String(n.r).substr(-1) ? "prgb" : "rgb"))
                : I(n.h) && I(n.s) && I(n.v)
                ? ((u = O(n.s)),
                  (c = O(n.v)),
                  (v = n.h),
                  (y = u),
                  (b = c),
                  (v = 6 * E(v, 360)),
                  (y = E(y, 100)),
                  (b = E(b, 100)),
                  (x = Math.floor(v)),
                  (w = v - x),
                  (_ = b * (1 - y)),
                  (M = b * (1 - w * y)),
                  (j = b * (1 - (1 - w) * y)),
                  (l = {
                    r: 255 * [b, M, _, _, j, b][(T = x % 6)],
                    g: 255 * [j, b, b, M, _, _][T],
                    b: 255 * [_, _, j, b, b, M][T],
                  }),
                  (h = !0),
                  (d = "hsv"))
                : I(n.h) &&
                  I(n.s) &&
                  I(n.l) &&
                  ((u = O(n.s)),
                  (f = O(n.l)),
                  (l = (function (t, e, n) {
                    var r, i, o;
                    function a(t, e, n) {
                      return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
                        ? t + (e - t) * 6 * n
                        : n < 0.5
                        ? e
                        : n < 2 / 3
                        ? t + (e - t) * (2 / 3 - n) * 6
                        : t;
                    }
                    if (
                      ((t = E(t, 360)),
                      (e = E(e, 100)),
                      (n = E(n, 100)),
                      0 === e)
                    )
                      r = i = o = n;
                    else {
                      var l = n < 0.5 ? n * (1 + e) : n + e - n * e,
                        s = 2 * n - l;
                      (r = a(s, l, t + 1 / 3)),
                        (i = a(s, l, t)),
                        (o = a(s, l, t - 1 / 3));
                    }
                    return { r: 255 * r, g: 255 * i, b: 255 * o };
                  })(n.h, u, f)),
                  (h = !0),
                  (d = "hsl")),
              n.hasOwnProperty("a") && (s = n.a)),
            (s = A(s)),
            {
              ok: h,
              format: n.format || d,
              r: Math.min(255, Math.max(l.r, 0)),
              g: Math.min(255, Math.max(l.g, 0)),
              b: Math.min(255, Math.max(l.b, 0)),
              a: s,
            });
        (this._originalInput = t),
          (this._r = k.r),
          (this._g = k.g),
          (this._b = k.b),
          (this._a = k.a),
          (this._roundA = Math.round(100 * this._a) / 100),
          (this._format = e.format || k.format),
          (this._gradientType = e.gradientType),
          this._r < 1 && (this._r = Math.round(this._r)),
          this._g < 1 && (this._g = Math.round(this._g)),
          this._b < 1 && (this._b = Math.round(this._b)),
          (this._ok = k.ok);
      }
      function l(t, e, n) {
        var r,
          i,
          o = Math.max((t = E(t, 255)), (e = E(e, 255)), (n = E(n, 255))),
          a = Math.min(t, e, n),
          l = (o + a) / 2;
        if (o == a) r = i = 0;
        else {
          var s = o - a;
          switch (((i = l > 0.5 ? s / (2 - o - a) : s / (o + a)), o)) {
            case t:
              r = (e - n) / s + (e < n ? 6 : 0);
              break;
            case e:
              r = (n - t) / s + 2;
              break;
            case n:
              r = (t - e) / s + 4;
          }
          r /= 6;
        }
        return { h: r, s: i, l: l };
      }
      function s(t, e, n) {
        var r,
          i,
          o = Math.max((t = E(t, 255)), (e = E(e, 255)), (n = E(n, 255))),
          a = Math.min(t, e, n),
          l = o - a;
        if (((i = 0 === o ? 0 : l / o), o == a)) r = 0;
        else {
          switch (o) {
            case t:
              r = (e - n) / l + (e < n ? 6 : 0);
              break;
            case e:
              r = (n - t) / l + 2;
              break;
            case n:
              r = (t - e) / l + 4;
          }
          r /= 6;
        }
        return { h: r, s: i, v: o };
      }
      function u(t, e, n, r) {
        var i = [
          T(Math.round(t).toString(16)),
          T(Math.round(e).toString(16)),
          T(Math.round(n).toString(16)),
        ];
        return r &&
          i[0].charAt(0) == i[0].charAt(1) &&
          i[1].charAt(0) == i[1].charAt(1) &&
          i[2].charAt(0) == i[2].charAt(1)
          ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
          : i.join("");
      }
      function c(t, e, n, r) {
        return [
          T(k(r)),
          T(Math.round(t).toString(16)),
          T(Math.round(e).toString(16)),
          T(Math.round(n).toString(16)),
        ].join("");
      }
      function f(t, e) {
        e = 0 === e ? 0 : e || 10;
        var n = a(t).toHsl();
        return (n.s -= e / 100), (n.s = j(n.s)), a(n);
      }
      function h(t, e) {
        e = 0 === e ? 0 : e || 10;
        var n = a(t).toHsl();
        return (n.s += e / 100), (n.s = j(n.s)), a(n);
      }
      function d(t) {
        return a(t).desaturate(100);
      }
      function p(t, e) {
        e = 0 === e ? 0 : e || 10;
        var n = a(t).toHsl();
        return (n.l += e / 100), (n.l = j(n.l)), a(n);
      }
      function m(t, e) {
        e = 0 === e ? 0 : e || 10;
        var n = a(t).toRgb();
        return (
          (n.r = Math.max(
            0,
            Math.min(255, n.r - Math.round(-((e / 100) * 255)))
          )),
          (n.g = Math.max(
            0,
            Math.min(255, n.g - Math.round(-((e / 100) * 255)))
          )),
          (n.b = Math.max(
            0,
            Math.min(255, n.b - Math.round(-((e / 100) * 255)))
          )),
          a(n)
        );
      }
      function g(t, e) {
        e = 0 === e ? 0 : e || 10;
        var n = a(t).toHsl();
        return (n.l -= e / 100), (n.l = j(n.l)), a(n);
      }
      function v(t, e) {
        var n = a(t).toHsl(),
          r = (n.h + e) % 360;
        return (n.h = r < 0 ? 360 + r : r), a(n);
      }
      function y(t) {
        var e = a(t).toHsl();
        return (e.h = (e.h + 180) % 360), a(e);
      }
      function b(t, e) {
        if (isNaN(e) || e <= 0)
          throw Error("Argument to polyad must be a positive number");
        for (var n = a(t).toHsl(), r = [a(t)], i = 360 / e, o = 1; o < e; o++)
          r.push(a({ h: (n.h + o * i) % 360, s: n.s, l: n.l }));
        return r;
      }
      function x(t) {
        var e = a(t).toHsl(),
          n = e.h;
        return [
          a(t),
          a({ h: (n + 72) % 360, s: e.s, l: e.l }),
          a({ h: (n + 216) % 360, s: e.s, l: e.l }),
        ];
      }
      function w(t, e, n) {
        (e = e || 6), (n = n || 30);
        var r = a(t).toHsl(),
          i = 360 / n,
          o = [a(t)];
        for (r.h = (r.h - ((i * e) >> 1) + 720) % 360; --e; )
          (r.h = (r.h + i) % 360), o.push(a(r));
        return o;
      }
      function _(t, e) {
        e = e || 6;
        for (
          var n = a(t).toHsv(), r = n.h, i = n.s, o = n.v, l = [], s = 1 / e;
          e--;

        )
          l.push(a({ h: r, s: i, v: o })), (o = (o + s) % 1);
        return l;
      }
      (a.prototype = {
        isDark: function () {
          return 128 > this.getBrightness();
        },
        isLight: function () {
          return !this.isDark();
        },
        isValid: function () {
          return this._ok;
        },
        getOriginalInput: function () {
          return this._originalInput;
        },
        getFormat: function () {
          return this._format;
        },
        getAlpha: function () {
          return this._a;
        },
        getBrightness: function () {
          var t = this.toRgb();
          return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
        },
        getLuminance: function () {
          var t,
            e,
            n,
            r = this.toRgb();
          return (
            (t = r.r / 255),
            0.2126 *
              (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) +
              0.7152 *
                ((e = r.g / 255) <= 0.03928
                  ? e / 12.92
                  : Math.pow((e + 0.055) / 1.055, 2.4)) +
              0.0722 *
                ((n = r.b / 255) <= 0.03928
                  ? n / 12.92
                  : Math.pow((n + 0.055) / 1.055, 2.4))
          );
        },
        setAlpha: function (t) {
          return (
            (this._a = A(t)),
            (this._roundA = Math.round(100 * this._a) / 100),
            this
          );
        },
        toHsv: function () {
          var t = s(this._r, this._g, this._b);
          return { h: 360 * t.h, s: t.s, v: t.v, a: this._a };
        },
        toHsvString: function () {
          var t = s(this._r, this._g, this._b),
            e = Math.round(360 * t.h),
            n = Math.round(100 * t.s),
            r = Math.round(100 * t.v);
          return 1 == this._a
            ? "hsv(" + e + ", " + n + "%, " + r + "%)"
            : "hsva(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")";
        },
        toHsl: function () {
          var t = l(this._r, this._g, this._b);
          return { h: 360 * t.h, s: t.s, l: t.l, a: this._a };
        },
        toHslString: function () {
          var t = l(this._r, this._g, this._b),
            e = Math.round(360 * t.h),
            n = Math.round(100 * t.s),
            r = Math.round(100 * t.l);
          return 1 == this._a
            ? "hsl(" + e + ", " + n + "%, " + r + "%)"
            : "hsla(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")";
        },
        toHex: function (t) {
          return u(this._r, this._g, this._b, t);
        },
        toHexString: function (t) {
          return "#" + this.toHex(t);
        },
        toHex8: function (t) {
          var e, n, r, i, o;
          return (
            (e = this._r),
            (n = this._g),
            (r = this._b),
            (i = this._a),
            (o = [
              T(Math.round(e).toString(16)),
              T(Math.round(n).toString(16)),
              T(Math.round(r).toString(16)),
              T(k(i)),
            ]),
            t &&
            o[0].charAt(0) == o[0].charAt(1) &&
            o[1].charAt(0) == o[1].charAt(1) &&
            o[2].charAt(0) == o[2].charAt(1) &&
            o[3].charAt(0) == o[3].charAt(1)
              ? o[0].charAt(0) +
                o[1].charAt(0) +
                o[2].charAt(0) +
                o[3].charAt(0)
              : o.join("")
          );
        },
        toHex8String: function (t) {
          return "#" + this.toHex8(t);
        },
        toRgb: function () {
          return {
            r: Math.round(this._r),
            g: Math.round(this._g),
            b: Math.round(this._b),
            a: this._a,
          };
        },
        toRgbString: function () {
          return 1 == this._a
            ? "rgb(" +
                Math.round(this._r) +
                ", " +
                Math.round(this._g) +
                ", " +
                Math.round(this._b) +
                ")"
            : "rgba(" +
                Math.round(this._r) +
                ", " +
                Math.round(this._g) +
                ", " +
                Math.round(this._b) +
                ", " +
                this._roundA +
                ")";
        },
        toPercentageRgb: function () {
          return {
            r: Math.round(100 * E(this._r, 255)) + "%",
            g: Math.round(100 * E(this._g, 255)) + "%",
            b: Math.round(100 * E(this._b, 255)) + "%",
            a: this._a,
          };
        },
        toPercentageRgbString: function () {
          return 1 == this._a
            ? "rgb(" +
                Math.round(100 * E(this._r, 255)) +
                "%, " +
                Math.round(100 * E(this._g, 255)) +
                "%, " +
                Math.round(100 * E(this._b, 255)) +
                "%)"
            : "rgba(" +
                Math.round(100 * E(this._r, 255)) +
                "%, " +
                Math.round(100 * E(this._g, 255)) +
                "%, " +
                Math.round(100 * E(this._b, 255)) +
                "%, " +
                this._roundA +
                ")";
        },
        toName: function () {
          return 0 === this._a
            ? "transparent"
            : !(this._a < 1) && (M[u(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function (t) {
          var e = "#" + c(this._r, this._g, this._b, this._a),
            n = e,
            r = this._gradientType ? "GradientType = 1, " : "";
          if (t) {
            var i = a(t);
            n = "#" + c(i._r, i._g, i._b, i._a);
          }
          return (
            "progid:DXImageTransform.Microsoft.gradient(" +
            r +
            "startColorstr=" +
            e +
            ",endColorstr=" +
            n +
            ")"
          );
        },
        toString: function (t) {
          var e = !!t;
          t = t || this._format;
          var n = !1,
            r = this._a < 1 && this._a >= 0;
          return !e &&
            r &&
            ("hex" === t ||
              "hex6" === t ||
              "hex3" === t ||
              "hex4" === t ||
              "hex8" === t ||
              "name" === t)
            ? "name" === t && 0 === this._a
              ? this.toName()
              : this.toRgbString()
            : ("rgb" === t && (n = this.toRgbString()),
              "prgb" === t && (n = this.toPercentageRgbString()),
              ("hex" === t || "hex6" === t) && (n = this.toHexString()),
              "hex3" === t && (n = this.toHexString(!0)),
              "hex4" === t && (n = this.toHex8String(!0)),
              "hex8" === t && (n = this.toHex8String()),
              "name" === t && (n = this.toName()),
              "hsl" === t && (n = this.toHslString()),
              "hsv" === t && (n = this.toHsvString()),
              n || this.toHexString());
        },
        clone: function () {
          return a(this.toString());
        },
        _applyModification: function (t, e) {
          var n = t.apply(null, [this].concat([].slice.call(e)));
          return (
            (this._r = n._r),
            (this._g = n._g),
            (this._b = n._b),
            this.setAlpha(n._a),
            this
          );
        },
        lighten: function () {
          return this._applyModification(p, arguments);
        },
        brighten: function () {
          return this._applyModification(m, arguments);
        },
        darken: function () {
          return this._applyModification(g, arguments);
        },
        desaturate: function () {
          return this._applyModification(f, arguments);
        },
        saturate: function () {
          return this._applyModification(h, arguments);
        },
        greyscale: function () {
          return this._applyModification(d, arguments);
        },
        spin: function () {
          return this._applyModification(v, arguments);
        },
        _applyCombination: function (t, e) {
          return t.apply(null, [this].concat([].slice.call(e)));
        },
        analogous: function () {
          return this._applyCombination(w, arguments);
        },
        complement: function () {
          return this._applyCombination(y, arguments);
        },
        monochromatic: function () {
          return this._applyCombination(_, arguments);
        },
        splitcomplement: function () {
          return this._applyCombination(x, arguments);
        },
        triad: function () {
          return this._applyCombination(b, [3]);
        },
        tetrad: function () {
          return this._applyCombination(b, [4]);
        },
      }),
        (a.fromRatio = function (t, e) {
          if ("object" == r(t)) {
            var n = {};
            for (var i in t)
              t.hasOwnProperty(i) &&
                ("a" === i ? (n[i] = t[i]) : (n[i] = O(t[i])));
            t = n;
          }
          return a(t, e);
        }),
        (a.equals = function (t, e) {
          return !!t && !!e && a(t).toRgbString() == a(e).toRgbString();
        }),
        (a.random = function () {
          return a.fromRatio({
            r: Math.random(),
            g: Math.random(),
            b: Math.random(),
          });
        }),
        (a.mix = function (t, e, n) {
          n = 0 === n ? 0 : n || 50;
          var r = a(t).toRgb(),
            i = a(e).toRgb(),
            o = n / 100;
          return a({
            r: (i.r - r.r) * o + r.r,
            g: (i.g - r.g) * o + r.g,
            b: (i.b - r.b) * o + r.b,
            a: (i.a - r.a) * o + r.a,
          });
        }),
        (a.readability = function (t, e) {
          var n = a(t),
            r = a(e);
          return (
            (Math.max(n.getLuminance(), r.getLuminance()) + 0.05) /
            (Math.min(n.getLuminance(), r.getLuminance()) + 0.05)
          );
        }),
        (a.isReadable = function (t, e, n) {
          var r,
            i,
            o,
            l,
            s,
            u = a.readability(t, e);
          switch (
            ((s = !1),
            ((i = (
              (r = (r = n) || { level: "AA", size: "small" }).level || "AA"
            ).toUpperCase()),
            (o = (r.size || "small").toLowerCase()),
            "AA" !== i && "AAA" !== i && (i = "AA"),
            "small" !== o && "large" !== o && (o = "small"),
            (l = { level: i, size: o })).level + l.size)
          ) {
            case "AAsmall":
            case "AAAlarge":
              s = u >= 4.5;
              break;
            case "AAlarge":
              s = u >= 3;
              break;
            case "AAAsmall":
              s = u >= 7;
          }
          return s;
        }),
        (a.mostReadable = function (t, e, n) {
          var r,
            i,
            o,
            l,
            s = null,
            u = 0;
          (i = (n = n || {}).includeFallbackColors),
            (o = n.level),
            (l = n.size);
          for (var c = 0; c < e.length; c++)
            (r = a.readability(t, e[c])) > u && ((u = r), (s = a(e[c])));
          return a.isReadable(t, s, { level: o, size: l }) || !i
            ? s
            : ((n.includeFallbackColors = !1),
              a.mostReadable(t, ["#fff", "#000"], n));
        });
      var S = (a.names = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "0ff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000",
          blanchedalmond: "ffebcd",
          blue: "00f",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          burntsienna: "ea7e5d",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "0ff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkgrey: "a9a9a9",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkslategrey: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dimgrey: "696969",
          dodgerblue: "1e90ff",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "f0f",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          grey: "808080",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgray: "d3d3d3",
          lightgreen: "90ee90",
          lightgrey: "d3d3d3",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslategray: "789",
          lightslategrey: "789",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "0f0",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "f0f",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370db",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "db7093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          rebeccapurple: "663399",
          red: "f00",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          slategrey: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          wheat: "f5deb3",
          white: "fff",
          whitesmoke: "f5f5f5",
          yellow: "ff0",
          yellowgreen: "9acd32",
        }),
        M = (a.hexNames = (function (t) {
          var e = {};
          for (var n in t) t.hasOwnProperty(n) && (e[t[n]] = n);
          return e;
        })(S));
      function A(t) {
        return (isNaN((t = parseFloat(t))) || t < 0 || t > 1) && (t = 1), t;
      }
      function E(t, e) {
        "string" == typeof (n = t) &&
          -1 != n.indexOf(".") &&
          1 === parseFloat(n) &&
          (t = "100%");
        var n,
          r,
          i = "string" == typeof (r = t) && -1 != r.indexOf("%");
        return ((t = Math.min(e, Math.max(0, parseFloat(t)))),
        i && (t = parseInt(t * e, 10) / 100),
        1e-6 > Math.abs(t - e))
          ? 1
          : (t % e) / parseFloat(e);
      }
      function j(t) {
        return Math.min(1, Math.max(0, t));
      }
      function P(t) {
        return parseInt(t, 16);
      }
      function T(t) {
        return 1 == t.length ? "0" + t : "" + t;
      }
      function O(t) {
        return t <= 1 && (t = 100 * t + "%"), t;
      }
      function k(t) {
        return Math.round(255 * parseFloat(t)).toString(16);
      }
      var F = (function () {
        var t = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
          e =
            "[\\s|\\(]+(" +
            t +
            ")[,|\\s]+(" +
            t +
            ")[,|\\s]+(" +
            t +
            ")\\s*\\)?",
          n =
            "[\\s|\\(]+(" +
            t +
            ")[,|\\s]+(" +
            t +
            ")[,|\\s]+(" +
            t +
            ")[,|\\s]+(" +
            t +
            ")\\s*\\)?";
        return {
          CSS_UNIT: new RegExp(t),
          rgb: RegExp("rgb" + e),
          rgba: RegExp("rgba" + n),
          hsl: RegExp("hsl" + e),
          hsla: RegExp("hsla" + n),
          hsv: RegExp("hsv" + e),
          hsva: RegExp("hsva" + n),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        };
      })();
      function I(t) {
        return !!F.CSS_UNIT.exec(t);
      }
    },
  },
]);
//# sourceMappingURL=584.109a0ec8c6c8a1f6.js.map
