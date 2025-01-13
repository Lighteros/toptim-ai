(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [37],
  {
    10402: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 85127));
    },
    85127: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => Y });
      var i = a(95155),
        l = a(26256),
        s = a(5908),
        r = a(91063),
        n = a(43329);
      let o = () =>
        (0, i.jsxs)("div", {
          className:
            "2x:px-10 flex flex-col items-center gap-5 px-4 pb-8 lg:flex-row lg:justify-between lg:py-7 xl:px-8",
          children: [
            (0, i.jsxs)("div", {
              className:
                "relative flex h-7 items-center justify-center px-5 py-1.5 xl:py-2",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "absolute left-0 top-0 h-full w-2 border-y-2 border-l-2 border-white/5",
                }),
                (0, i.jsx)("p", {
                  className: "text-12 font-semibold text-white/50 lg:text-16",
                  children: "\xa9 ToptimAI Network 2025",
                }),
                (0, i.jsx)("div", {
                  className:
                    "absolute right-0 top-0 h-full w-2 border-y-2 border-r-2 border-white/5",
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "flex items-center justify-center gap-5 lg:gap-7",
              children: [
                

              ],
            }),
          ],
        });
      var c = a(19708),
        d = a(5565);
      let x = () =>
        (0, i.jsx)("div", {
          className: "hidden size-full xl:block",
          children: (0, i.jsx)("div", {
            className: "flex w-full items-center justify-center px-10 py-15",
            children: (0, i.jsx)(d.default, {
              className: "w-4/5 max-w-[454px]",
              src: c.T.logo.footer,
              alt: "logo",
              width: 496,
              height: 438,
            }),
          }),
        });
      var h = a(48173),
        m = a.n(h);
      let p = () =>
        (0, i.jsx)("div", {});
      var u = a(85879),
        f = a(57580);
      let k = () => {
          let e = [
            {
              title: "Telegram",
              href: "https://t.me/ToptimAI_Erc20",
              icon: u.A.Telegram,
            },
            {
              title: "Twitter",
              href: "https://x.com/ToptimAI_Erc20",
              icon: u.A.X,
            },
          ];
          return (0, i.jsx)("div", {
            className: "h-full w-full xl:border-l xl:border-white/8",
            children: (0, i.jsxs)("div", {
              className:
                "flex flex-col gap-4 px-4 py-7 md:px-8 xl:px-10 xl:pt-15",
              children: [
                (0, i.jsx)("p", {
                  className:
                    "whitespace-nowrap text-start text-18 font-bold leading-normal text-white xl:text-24",
                  children: "Social Media",
                }),
                (0, i.jsx)("ul", {
                  className: "flex flex-col gap-2 xl:gap-3",
                  children: e.map((e) =>
                    (0, i.jsx)(
                      "li",
                      {
                        children: (0, i.jsxs)("a", {
                          className:
                            "flex flex-1 items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-white transition-colors hover:bg-white hover:text-black xl:py-3",
                          href: e.href,
                          target: "_blank",
                          children: [
                            (0, i.jsx)(f.A, {
                              className: "size-4.5",
                              icon: e.icon,
                            }),
                            (0, i.jsx)("span", {
                              className:
                                "text-12 font-medium leading-normal xl:text-16",
                              children: e.title,
                            }),
                            (0, i.jsx)(f.A, {
                              className: "ml-auto size-4.5 xl:size-6",
                              icon: u.A.CircleArrowRightUp,
                            }),
                          ],
                        }),
                      },
                      e.title
                    )
                  ),
                }),
              ],
            }),
          });
        },
        g = () =>
          (0, i.jsxs)("footer", {
            className: "bg-[#0A0A0A]",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "grid grid-cols-1 xl:grid-cols-3 xl:border-b xl:border-white/8",
                children: [
                  (0, i.jsx)(p, {}),
                  (0, i.jsx)(x, {}),
                  (0, i.jsx)(k, {}),
                ],
              }),
              (0, i.jsx)(o, {}),
            ],
          });
      var b = a(58356),
        y = a(28408),
        w = a(27050),
        j = a(12115);
      let v = w.bL,
        A = w.l9;
      w.YJ, w.ZL;
      let N = (e) => {
        let { ref: t, className: a, sideOffset: s = 4, ...r } = e;
        return (0, i.jsx)(w.ZL, {
          children: (0, i.jsx)(w.UC, {
            ref: t,
            sideOffset: s,
            onCloseAutoFocus: (e) => e.preventDefault(),
            className: (0, l.cn)(
              "z-50 min-w-[8rem] overflow-hidden rounded-md bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
              a
            ),
            ...r,
          }),
        });
      };
      var E = a(76035);
      let D = [
          { label: "Home", href: "/#home" },
          { label: "Features", href: "/#features" },
          { label: "Network", href: "/#workflow" },
          { label: "Ecosystem", href: "/#ecosystem" },
          { label: "GenAI Agents", href: "/#agents" },
        ],
        B = (e) => {
          let { className: t, onItemClick: a, ...l } = e;
          return (0, i.jsx)("nav", {
            className: t,
            ...l,
            children: (0, i.jsx)("ul", {
              className:
                "flex flex-col gap-8 xlu:container xl:flex-row xl:items-center xl:gap-10 2xl:gap-12",
              children: D.map((e) =>
                (0, i.jsx)(
                  "li",
                  {
                    children: (0, i.jsx)(m(), {
                      href: e.href,
                      className:
                        "text-20 font-light text-white transition-opacity hover:opacity-30 lg:text-16",
                      onClick: a,
                      children: e.label,
                    }),
                  },
                  e.href
                )
              ),
            }),
          });
        },
        G = () => {
          let [e, t] = (0, j.useState)(!1),
            a = (0, E.GM)();
          return (
            (0, j.useEffect)(() => {
              a && t(!1);
            }, [a]),
            (0, i.jsxs)(v, {
              open: e,
              onOpenChange: t,
              children: [
                (0, i.jsx)(A, {
                  asChild: !0,
                  children: (0, i.jsxs)("button", {
                    className: "relative size-6 text-white xl:hidden",
                    "aria-label": "Toggle Menu",
                    children: [
                      (0, i.jsx)(b.hJ, {
                        initial: "initial",
                        animate: e ? "animate" : "initial",
                        variants: {
                          initial: { right: 0, rotate: 0, width: 24 },
                          animate: { right: 4, rotate: -45, width: 20 },
                        },
                        transition: { bounce: 0 },
                        className:
                          "absolute right-0 top-1 block h-0.5 w-6 origin-[100%_50%] rounded-sm bg-current",
                      }),
                      (0, i.jsx)(b.hJ, {
                        initial: "initial",
                        animate: e ? "animate" : "initial",
                        variants: {
                          initial: { opacity: 1 },
                          animate: { opacity: 0 },
                        },
                        transition: { bounce: 0 },
                        className:
                          "absolute right-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-sm bg-current",
                      }),
                      (0, i.jsx)(b.hJ, {
                        initial: "initial",
                        animate: e ? "animate" : "initial",
                        variants: {
                          initial: { right: 0, rotate: 0, width: 12 },
                          animate: { right: 4, rotate: 45, width: 20 },
                        },
                        transition: { bounce: 0 },
                        className:
                          "absolute right-0 top-4.5 block h-0.5 w-3 origin-[100%_50%] rounded-sm bg-current",
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(N, {
                  className:
                    "w-screen bg-background/60 px-0 pb-8 pt-12 backdrop-blur-2xl",
                  side: "top",
                  children: (0, i.jsx)("div", {
                    className: "container sm:max-w-none",
                    children: (0, i.jsx)(B, { onItemClick: () => t(!1) }),
                  }),
                }),
              ],
            })
          );
        },
        V = () =>
          (0, i.jsxs)("div", {
            className: "flex items-center gap-5",
            children: [
              (0, i.jsxs)(m(), {
                className: (0, l.cn)(
                  (0, y.U)(),
                  "lgu:min-h-9 lgu:w-auto lgu:min-w-min lgu:px-2 lgu:text-14 lgu:leading-20"
                ),
                href: "https://toptim-ai-app-cs.vercel.app/",
                children: [
                  (0, i.jsx)("span", { children: "Launch" }),
                  (0, i.jsx)("span", {
                    className: "hidden lg:block",
                    children: "\xa0App",
                  }),
                ],
              }),
              (0, i.jsx)(G, {}),
            ],
          }),
        F = () =>
          (0, i.jsx)(m(), {
            href: "/",
            "aria-label": "Home",
            onClick: (e) => {
              "/" === window.location.pathname &&
                (e.preventDefault(),
                window.scrollTo({ top: 0, behavior: "smooth" }));
            },
            children: (0, i.jsx)(d.default, {
              className: "h-auto w-[7.875rem] lg:w-[9.5rem]",
              src: c.T.logo.header,
              width: 126,
              height: 32,
              alt: "Logo",
            }),
          }),
        S = (e) => {
          let { shouldLoading: t } = e;
          return (0, i.jsx)(b.qp, {
            className:
              "fixed top-0 z-60 h-20 w-full bg-background/60 pr-[var(--removed-body-scroll-bar-size,0px)] backdrop-blur-2xl",
            animate: { top: t ? "-20px" : "0px", opacity: t ? 0 : 1 },
            children: (0, i.jsxs)("div", {
              className: "container flex h-full items-center justify-between",
              children: [
                (0, i.jsx)(F, {}),
                (0, i.jsx)(B, { className: "hidden xl:block" }),
                (0, i.jsx)(V, {}),
              ],
            }),
          });
        };
      var z = a(20698);
      let T = JSON.parse(
        '{"v":"5.12.2","fr":30,"ip":0,"op":75,"w":721,"h":250,"nm":"Frame 1171275976","ddd":0,"assets":[],"fonts":{"list":[{"fName":"ActualRegular","fFamily":"Actual","fStyle":"Regular","ascent":72.7996826171875}]},"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Union 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":15,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":25,"s":[360,125,0],"to":[0,0,0],"ti":[0,0,0]},{"t":40,"s":[140,125,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.855,5.369],[0,0],[0,0],[-4.857,-5.37],[0,0],[0,0],[0,0],[7.312,-1.571],[0,0],[0,0],[0,0],[0,0],[0,0],[7.312,-1.571],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[7.241,-0.003],[0,0],[0,0],[0,0],[-2.348,5.777],[0,0],[0,0],[0,0],[0,0],[0,0],[-2.348,5.777],[0,0],[0,0],[0,0],[0,0],[-7.238,0]],"v":[[-86.068,-51.024],[-114,-81.914],[66.979,-82],[85.981,-73.571],[114,-42.592],[69.815,-42.592],[23.314,72.326],[11.794,82],[-23.166,82],[-23.139,81.974],[27.382,-42.592],[-3.386,-42.592],[-49.887,72.326],[-61.407,82],[-96.367,82],[-96.34,81.974],[-45.819,-42.592],[-67.076,-42.592]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Union","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"▨ Rectangle 40123","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":32,"s":[0.5,125,0],"to":[0,0,0],"ti":[0,0,0]},{"t":47,"s":[468.5,125,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[505,250],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.850980401039,0.850980401039,0.850980401039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 40122","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":0,"op":150,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":3,"ty":5,"nm":"TOPTIMAI","tt":1,"tp":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[481.5,114.826,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[447,113.5],"ps":[-212.5,-56.5],"s":104,"f":"ActualRegular","t":"TOPTIMAI","ca":0,"j":0,"tr":0,"lh":113.326187133789,"ls":0,"fc":[1,1,1]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":0,"op":150,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Network 2","tt":1,"tp":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[419.751,177.606,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[91.258,91.258,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-154.43,-22.35],[-154.43,22.35],[-150.53,22.35],[-150.53,-16.71],[-151.91,-16.71],[-124.73,22.35],[-121.43,22.35],[-121.43,-22.35],[-125.33,-22.35],[-125.33,16.47],[-124.07,16.47],[-151.13,-22.35]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-2.4,-1.48],[-3,0],[-1.72,0.68],[-1.32,1.16],[-0.72,1.48],[0,0],[1.72,-1.12],[2.32,0],[1.88,1.12],[1.08,2],[-0.08,2.6],[-1.04,1.96],[-1.8,1.12],[-2.16,0],[-1.68,-1.12],[-0.92,-1.88],[0.24,-2.32],[0,0],[0,0],[0,0],[0,0],[-0.04,0.44],[0,0.4],[0.72,1.8],[1.32,1.4],[1.8,0.8],[2.2,0],[2.32,-1.44],[1.36,-2.52],[0,-3.16],[-1.4,-2.56]],"o":[[2.4,1.44],[2.04,0],[1.76,-0.68],[1.32,-1.2],[0,0],[-1.08,1.84],[-1.72,1.08],[-2.28,0],[-1.88,-1.16],[-1.08,-2],[-0.08,-2.6],[1.04,-2],[1.8,-1.16],[2.16,0],[1.72,1.08],[0.92,1.84],[0,0],[0,0],[0,0],[0,0],[0.08,-0.48],[0.04,-0.44],[0,-2],[-0.68,-1.84],[-1.28,-1.44],[-1.76,-0.8],[-2.88,0],[-2.32,1.44],[-1.36,2.48],[0,3.16],[1.4,2.52]],"v":[[-92.372,20.91],[-84.272,23.07],[-78.632,22.05],[-74.012,19.29],[-70.952,15.27],[-74.012,13.65],[-78.212,18.09],[-84.272,19.71],[-90.512,18.03],[-94.952,13.29],[-96.452,6.39],[-95.012,-0.45],[-90.752,-5.13],[-84.812,-6.87],[-79.052,-5.19],[-75.092,-0.75],[-74.072,5.49],[-72.452,4.23],[-98.072,4.23],[-98.072,7.53],[-70.412,7.53],[-70.232,6.15],[-70.172,4.89],[-71.252,-0.81],[-74.252,-5.67],[-78.872,-9.03],[-84.812,-10.23],[-92.612,-8.07],[-98.132,-2.13],[-100.172,6.33],[-98.072,14.91]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[-1.44,-1.52],[-2.64,0],[-0.56,0.08],[-0.44,0.12],[0,0],[0.48,-0.04],[0.32,0],[0.76,0.52],[0.28,0.84],[0,0.88],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.64,-0.72],[1.2,0],[0,0],[0,0],[0,0],[0,0]],"o":[[1.44,1.48],[0.32,0],[0.56,-0.04],[0,0],[-0.28,0.04],[-0.44,0.04],[-1.44,0],[-0.76,-0.52],[-0.24,-0.84],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,1.24],[-0.64,0.72],[0,0],[0,0],[0,0],[0,0],[0,2.88]],"v":[[-44.126,20.49],[-38.006,22.71],[-36.686,22.59],[-35.186,22.35],[-35.186,19.11],[-36.326,19.23],[-37.466,19.29],[-40.766,18.51],[-42.326,16.47],[-42.686,13.89],[-42.686,-6.09],[-35.726,-6.09],[-35.726,-9.51],[-42.686,-9.51],[-42.686,-16.95],[-46.286,-16.95],[-46.286,-13.53],[-47.246,-10.59],[-50.006,-9.51],[-52.286,-9.51],[-52.286,-6.09],[-46.286,-6.09],[-46.286,13.89]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-18.519,-9.51],[-7.599,22.35],[-3.939,22.35],[4.401,-5.49],[3.501,-5.49],[11.841,22.35],[15.501,22.35],[26.481,-9.51],[22.461,-9.51],[12.861,19.35],[14.421,19.35],[5.781,-9.51],[2.121,-9.51],[-6.519,19.35],[-4.959,19.35],[-14.499,-9.51]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[-2.44,-1.44],[-3.04,0],[-2.4,1.44],[-1.44,2.52],[0,3.2],[1.4,2.48],[2.44,1.44],[3.04,0],[2.44,-1.44],[1.44,-2.52],[0,-3.16],[-1.4,-2.56]],"o":[[2.44,1.44],[3,0],[2.44,-1.44],[1.44,-2.52],[0,-3.2],[-1.4,-2.52],[-2.44,-1.44],[-3.08,0],[-2.4,1.44],[-1.4,2.52],[0,3.16],[1.44,2.52]],"v":[[50.447,20.91],[58.667,23.07],[66.767,20.91],[72.587,14.97],[74.747,6.39],[72.647,-2.13],[66.887,-8.07],[58.667,-10.23],[50.387,-8.07],[44.627,-2.13],[42.527,6.39],[44.627,14.97]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[1.88,-1.16],[2.28,0],[1.84,1.12],[1.12,2],[0,2.48],[-1.08,1.96],[-1.84,1.12],[-2.32,0],[-1.84,-1.16],[-1.08,-1.96],[0,-2.48],[1.08,-2]],"o":[[-1.84,1.12],[-2.32,0],[-1.84,-1.16],[-1.08,-2],[0,-2.48],[1.08,-2],[1.88,-1.16],[2.32,0],[1.84,1.16],[1.08,1.96],[0,2.48],[-1.08,2]],"v":[[64.847,17.85],[58.667,19.53],[52.427,17.85],[47.987,13.11],[46.367,6.39],[47.987,-0.27],[52.367,-4.95],[58.667,-6.69],[64.907,-4.95],[69.287,-0.27],[70.907,6.39],[69.287,13.11]],"c":true},"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ind":6,"ty":"sh","ix":7,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-1.48,1.64],[-2.6,0],[0,0],[0,0],[0,0],[1.68,-1.04],[0.68,-1.8],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,-2.8],[1.48,-1.68],[0,0],[0,0],[0,0],[-2.28,0],[-1.64,1.04],[0,0],[0,0],[0,0]],"v":[[95.398,-9.51],[95.398,22.35],[98.998,22.35],[98.998,2.85],[101.218,-3.81],[107.338,-6.33],[109.798,-6.33],[109.798,-9.93],[107.758,-9.93],[101.818,-8.37],[98.338,-4.11],[98.998,-3.57],[98.998,-9.51]],"c":true},"ix":2},"nm":"Path 7","mn":"ADBE Vector Shape - Group","hd":false},{"ind":7,"ty":"sh","ix":8,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[127.73,-23.07],[127.73,22.35],[131.33,22.35],[131.33,10.95],[130.37,13.41],[139.01,4.53],[136.61,4.47],[149.93,22.35],[154.43,22.35],[140.39,3.33],[153.23,-9.51],[148.31,-9.51],[129.47,9.21],[131.33,9.39],[131.33,-23.07]],"c":true},"ix":2},"nm":"Path 8","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Network","np":10,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"ct":1,"bm":0}],"markers":[],"props":{},"chars":[{"ch":"O","size":104,"style":"Regular","w":74.6,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-21.652,0],[0,19.94],[21.652,0],[0,-19.94]],"o":[[21.652,0],[0,-19.94],[-21.652,0],[0,19.94]],"v":[[37.564,0.906],[72.006,-35.248],[37.564,-71.301],[3.122,-35.248]],"c":true},"ix":2},"nm":"O","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-12.186,0],[0,-11.884],[12.085,0],[0,11.984]],"o":[[12.085,0],[0,11.984],[-12.186,0],[0,-11.884]],"v":[[37.564,-56.195],[56.195,-35.248],[37.564,-14.2],[18.933,-35.248]],"c":true},"ix":2},"nm":"O","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"O","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"Actual"},{"ch":"P","size":104,"style":"Regular","w":63,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[28.601,0],[0,0],[0,0],[0,0]],"o":[[0,0],[28.601,0],[0,0],[0,0],[0,0],[0,0]],"v":[[21.35,-22.861],[39.578,-22.861],[39.578,-70.496],[6.042,-70.496],[6.042,0],[21.35,0]],"c":true},"ix":2},"nm":"P","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[11.481,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[11.481,0]],"v":[[36.456,-36.154],[21.35,-36.154],[21.35,-57.303],[36.456,-57.303]],"c":true},"ix":2},"nm":"P","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"P","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"Actual"},{"ch":"T","size":104,"style":"Regular","w":58.5,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[21.753,0],[37.061,0],[37.061,-57.404],[58.109,-57.404],[58.109,-70.496],[0.705,-70.496],[0.705,-57.404],[21.753,-57.404]],"c":true},"ix":2},"nm":"T","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"T","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"Actual"},{"ch":"I","size":104,"style":"Regular","w":27.2,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[21.35,0.101],[21.35,-70.496],[6.042,-70.496],[6.042,0.101]],"c":true},"ix":2},"nm":"I","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"I","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"Actual"},{"ch":"M","size":104,"style":"Regular","w":87.8,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[21.35,-39.478],[40.485,0],[40.485,0.101],[47.937,0.101],[67.072,-39.478],[67.072,0.101],[82.379,0.101],[82.379,-70.496],[67.072,-70.496],[67.072,-70.294],[66.769,-70.496],[44.211,-24.673],[21.552,-70.496],[21.35,-70.294],[21.35,-70.496],[6.042,-70.496],[6.042,0.101],[21.35,0.101]],"c":true},"ix":2},"nm":"M","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"M","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"Actual"},{"ch":"A","size":104,"style":"Regular","w":74.7,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-5.841,0],[-5.841,-3.928],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[5.942,-3.928],[5.841,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[19.336,-7.15],[36.96,-12.991],[54.584,-7.15],[57.303,0],[73.718,0],[45.822,-70.496],[28.098,-70.496],[0.201,0],[16.718,0]],"c":true},"ix":2},"nm":"A","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[3.928,0],[3.928,-1.712]],"o":[[0,0],[-3.928,-1.712],[-3.928,0],[0,0]],"v":[[36.96,-54.584],[48.843,-22.76],[36.96,-25.278],[25.177,-22.76]],"c":true},"ix":2},"nm":"A","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"A","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"Actual"}]}'
      );
      var P = a(20093),
        R = a(66494),
        O = a(98679),
        C = a(50036),
        I = a(17254),
        U = a(74073),
        M = a(47844);
      function _() {
        let e = (0, z._)(["blur(", "px)"]);
        return (
          (_ = function () {
            return e;
          }),
          e
        );
      }
      let L = () => {
          let e = (0, j.useRef)(null),
            t = (0, j.useRef)(null),
            a = (0, j.useRef)(null),
            l = (0, O.d)(20),
            s = (0, O.d)(0),
            r = (0, O.d)(0),
            n = (0, O.d)(8),
            o = (0, j.useRef)(null),
            c = (0, C.E)(_(), l),
            { finishLoading: d } = (0, M.BD)();
          return (
            (0, j.useEffect)(() => {
              var i;
              let c = e.current,
                x = t.current,
                h = a.current;
              if (!c || !x || !h) return;
              null === (i = o.current) || void 0 === i || i.stop();
              let m = setTimeout(() => {
                  var e;
                  null === (e = o.current) || void 0 === e || e.play();
                }, 250),
                p = setTimeout(d, 3e3),
                u = [
                  [x, { backgroundColor: ["#0A0A0A", "#121614E5"] }],
                  [
                    h,
                    {
                      height: [200, 0.4 * window.innerHeight + 180],
                      width: [0, window.innerWidth],
                    },
                    { at: 0 },
                  ],
                  [l, [20, 100], { at: 0 }],
                  [s, 1, { at: 2 }],
                  [r, 0.8, { at: 2 }],
                  [n, 32, { at: 2 }],
                  [c, { opacity: [1, 0] }, { at: 2.5, duration: 0.3 }],
                ],
                f = (0, I.i)(u);
              return () => {
                f.stop(), clearTimeout(m), clearTimeout(p);
              };
            }, []),
            (0, i.jsx)("div", {
              className: "fixed inset-0 z-60 overflow-hidden bg-[#0A0A0A]",
              children: (0, i.jsxs)("div", {
                ref: e,
                className: "absolute inset-0 overflow-hidden",
                children: [
                  (0, i.jsx)("div", {
                    ref: t,
                    className: "absolute inset-0 bg-[#0A0A0A]",
                  }),
                  (0, i.jsx)(b.Uu, {
                    id: "top",
                    className:
                      "absolute bottom-[50dvh] left-1/2 h-dvh w-[90dvw] -translate-x-1/2 blur-2xl",
                    style: {
                      mask: "linear-gradient(180deg, #000 28%, rgba(17, 21, 19, 0.00) 90%)",
                      maskType: "alpha",
                      opacity: s,
                    },
                    children: (0, i.jsx)("div", {
                      className: "absolute inset-10 opacity-5",
                      style: {
                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                        background:
                          "linear-gradient(90deg, #F6F655 0%, #5EED87 100%)",
                      },
                    }),
                  }),
                  (0, i.jsxs)(b.Uu, {
                    id: "left",
                    className:
                      "absolute left-0 top-1/2 h-px w-[28dvw] -translate-y-1/2 xl:w-[32dvw]",
                    style: { opacity: r },
                    children: [
                      (0, i.jsx)("div", {
                        className: "h-full w-full opacity-10",
                        style: {
                          background:
                            "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
                        },
                      }),
                      (0, i.jsx)(b.Uu, {
                        className:
                          "absolute left-4 top-1/2 size-1 -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-sm xl:size-1.5",
                        style: { left: n },
                      }),
                    ],
                  }),
                  (0, i.jsxs)(b.Uu, {
                    id: "right",
                    className:
                      "absolute right-0 top-1/2 h-px w-[28dvw] -translate-y-1/2 xl:w-[32dvw]",
                    style: { opacity: r },
                    children: [
                      (0, i.jsx)("div", {
                        className: "h-full w-full opacity-10",
                        style: {
                          background:
                            "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
                        },
                      }),
                      (0, i.jsx)(b.Uu, {
                        className:
                          "absolute top-1/2 size-1 -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-sm xl:size-1.5",
                        style: { right: n },
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    ref: a,
                    className:
                      "absolute -bottom-70 left-1/2 w-[80dvw] -translate-x-1/2 rounded-full",
                    children: (0, i.jsx)(b.Uu, {
                      className:
                        "absolute left-1/2 top-0 h-[100dvh] w-20 -translate-x-1/2 rounded-full opacity-30",
                      style: {
                        background:
                          "linear-gradient(212deg, #5EED87 -106.87%, #F6F655 178.07%)",
                        filter: c,
                      },
                    }),
                  }),
                  (0, i.jsx)(P.A, {
                    ref: o,
                    className:
                      "absolute left-1/2 top-1/2 h-auto w-[40dvw] -translate-x-1/2 -translate-y-1/2 xl:w-[24dvw]",
                    "aria-hidden": !0,
                    animationData: T,
                    loop: !1,
                  }),
                ],
              }),
            })
          );
        },
        J = () => {
          let e = (0, M.nk)();
          return (0, i.jsx)(R.N, {
            children: e && (0, i.jsx)(U.A, { children: (0, i.jsx)(L, {}) }),
          });
        };
      a(31453);
      let H = (e) => {
          let { children: t } = e,
            a = (0, M.nk)();
          return (0, i.jsx)("div", {
            className: (0, l.cn)(
              a &&
                "h-dvh overflow-hidden opacity-0 transition-opacity duration-300"
            ),
            children: t,
          });
        },
        Y = (e) => {
          let { children: t } = e;
          return (0, i.jsx)(s.FH, {
            root: !0,
            children: (0, i.jsx)(r.F, {
              features: n.l,
              children: (0, i.jsxs)(M.oo, {
                children: [
                  (0, i.jsxs)(H, {
                    children: [
                      (0, i.jsx)(S, {}),
                      (0, i.jsx)("main", { children: t }),
                      (0, i.jsx)(g, {}),
                    ],
                  }),
                  (0, i.jsx)(J, {}),
                ],
              }),
            }),
          });
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [588, 742, 123, 250, 565, 441, 517, 358], () => t(10402)),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=layout-1a33aa256ad4422a.js.map
