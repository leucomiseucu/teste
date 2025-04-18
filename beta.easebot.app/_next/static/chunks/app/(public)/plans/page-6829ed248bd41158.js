(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8485], {
        8135: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 59324)), Promise.resolve().then(n.bind(n, 32958)), Promise.resolve().then(n.bind(n, 57729)), Promise.resolve().then(n.bind(n, 14850)), Promise.resolve().then(n.bind(n, 22130)), Promise.resolve().then(n.bind(n, 28989))
        },
        59324: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return u
                },
                default: function() {
                    return p
                }
            });
            var o = n(65559),
                i = n(32958),
                r = n(29854),
                a = n(27124),
                s = n(35906),
                l = n(73625),
                c = n(74861),
                d = n(34114),
                f = n(3613),
                m = n(87649);
            let u = [{
                name: "pix",
                icon: (0, o.jsx)(f.M7G, {})
            }, {
                name: "litecoin",
                icon: (0, o.jsx)(f.eP1, {})
            }, {
                name: "stripe",
                icon: (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(f.l99, {}), (0, o.jsx)(m.yT$, {})]
                })
            }];

            function p(e) {
                let {
                    data: t
                } = e, n = t.name.split(" ")[1].toLowerCase(), f = (0, c.useRouter)();
                return (0, o.jsxs)(i._b, {
                    className: t.top ? "pro" : "",
                    children: [(0, o.jsxs)(i.rn, {
                        children: [t.name, " ", t.name.includes("Basic") ? (0, o.jsx)(a.oU6, {}) : t.name.includes("Pro") ? (0, o.jsx)(s.FB8, {}) : (0, o.jsx)(l.Yjn, {})]
                    }), (0, o.jsx)(i.Hu, {
                        children: [...t.features.map((e, n) => {
                            let i = Number((++n * t.price).toFixed(0));
                            return console.log(i), (0, o.jsx)("li", {
                                className: e.isIncluded ? "" : "not-included",
                                children: e.text
                            }, i)
                        })]
                    }), (0, o.jsxs)("div", {
                        children: [(0, o.jsxs)(i.ws, {
                            $erased: !t.available || !t.in_stock,
                            children: [t.price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            }), (0, o.jsxs)("span", {
                                children: [(0, o.jsx)("span", {
                                    children: "/"
                                }), "mensal"]
                            })]
                        }), (0, o.jsx)(i.ak, {
                            $erased: !t.available || !t.in_stock,
                            onClick: e => {
                                console.log("Clicked"), console.log(n), t.available && t.in_stock && f.push("/checkout/".concat(n))
                            },
                            children: t.available ? t.in_stock ? (0, o.jsxs)(o.Fragment, {
                                children: ["Adquira agora ", (0, o.jsx)(r.$sw, {})]
                            }) : (0, o.jsxs)(o.Fragment, {
                                children: ["Sem estoque ", (0, o.jsx)(d.t8M, {})]
                            }) : (0, o.jsxs)(o.Fragment, {
                                children: ["Indispon\xedvel ", (0, o.jsx)(d.t8M, {})]
                            })
                        }), (0, o.jsx)(i.A6, {
                            children: [...u.map((e, n) => t.payment_methods_available.find(t => t.payment_method_id == e.name && t.available) ? (0, o.jsx)(o.Fragment, {
                                children: e.icon
                            }) : (0, o.jsx)(o.Fragment, {}))]
                        })]
                    })]
                })
            }
        },
        32958: function(e, t, n) {
            "use strict";
            n.d(t, {
                A6: function() {
                    return f
                },
                Center: function() {
                    return m
                },
                Hu: function() {
                    return c
                },
                PlansContainer: function() {
                    return r
                },
                Section: function() {
                    return i
                },
                _b: function() {
                    return a
                },
                ak: function() {
                    return d
                },
                rn: function() {
                    return s
                },
                ws: function() {
                    return l
                }
            });
            var o = n(61630);
            let i = o.ZP.div.withConfig({
                    componentId: "sc-aaf8fe4f-0"
                })(["top:0;display:flex;min-height:100vh;position:relative;flex-direction:column;align-items:center;align-content:center;&.border-top{height:fit-content;border-top:1px solid #1f1e1e7d;}@media (max-width:769px){position:relative;overflow:hidden;display:flex;&.border-top{flex-direction:column;}}"]),
                r = o.ZP.div.withConfig({
                    componentId: "sc-aaf8fe4f-1"
                })(["margin:1em;display:flex;justify-content:center;flex-wrap:wrap;"]),
                a = o.ZP.div.withConfig({
                    componentId: "sc-aaf8fe4f-2"
                })(["padding:2em;border:solid 1px #1c1d1f;position:relative;display:flex;flex-direction:column;justify-content:space-between;height:25em;&.pro{background-color:#1c1d1f36;}&::before{content:'';position:absolute;width:100vw;height:29em;border-top:dashed 1px #1c1d1f;border-bottom:dashed 1px #1c1d1f;margin-top:-2.05em;left:50%;transform:translateX(-50%);z-index:-1;}"]),
                s = o.ZP.h2.withConfig({
                    componentId: "sc-aaf8fe4f-3"
                })(["color:#fffffff0;flex:1;display:flex;justify-content:space-between;"]),
                l = o.ZP.p.withConfig({
                    componentId: "sc-aaf8fe4f-4"
                })(["color:#ffffff;font-weight:normal;font-size:18px;font-family:monospace;margin-bottom:0.5em;", " ", " & span{font-size:16px;color:#5c5656;margin-left:", ";font-family:'JetBrainsMono';& span{font-weight:700;margin-right:", ";}}"], e => {
                    let {
                        $erased: t
                    } = e;
                    return t ? "text-decoration: line-through;" : ""
                }, e => {
                    let {
                        $erased: t
                    } = e;
                    return t ? "opacity: .5;" : ""
                }, e => {
                    let {
                        $erased: t
                    } = e;
                    return t ? "0em" : "0.1em"
                }, e => {
                    let {
                        $erased: t
                    } = e;
                    return t ? "0em" : "0.2em"
                }),
                c = o.ZP.ul.withConfig({
                    componentId: "sc-aaf8fe4f-5"
                })(["list-style-type:square;padding:0;margin:0;margin-top:2em;color:#ffffff;font-size:12px;line-height:1.5;display:flex;flex-direction:column;align-items:flex-start;height:100%;li{margin-bottom:0.5em;color:#cccccc;font-weight:normal;font-family:'JetBrainsMono';&.not-included{color:#8c8b8b;opacity:0.8;text-decoration:line-through;}}@media (max-width:769px){font-size:12px;}@media (max-width:480px){font-size:10px;}"]),
                d = o.ZP.button.withConfig({
                    componentId: "sc-aaf8fe4f-6"
                })(["line-height:1.5;padding:0.5em 1.5em;background-color:#131415;color:#ffffff;font-weight:500;border:none;cursor:", ";transition:background-color 0.3s ease;border-radius:30px;font-size:12pt;border:solid 1px #1c1d1f;border-bottom:solid 2px #1c1d1f;border-right:solid 2px #1c1d1f;&:hover{background-color:#1c1d1f;}svg{font-size:12pt;position:relative;top:2px;left:0.5em;}"], e => {
                    let {
                        $erased: t
                    } = e;
                    return t ? "not-allowed" : "pointer"
                }),
                f = o.ZP.div.withConfig({
                    componentId: "sc-aaf8fe4f-7"
                })(["display:flex;flex-direction:row;gap:0.3em;margin-top:0.5em;margin-left:0.2em;& svg{position:relative;margin-left:5px;color:#cacac7;font-size:12pt;}"]),
                m = o.ZP.div.withConfig({
                    componentId: "sc-aaf8fe4f-8"
                })(["position:relative;height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;align-content:center;text-align:center;@media (max-width:768px){width:85%;}"])
        },
        57729: function(e, t, n) {
            "use strict";
            n.d(t, {
                default: function() {
                    return f
                }
            });
            var o = n(65559),
                i = n(21650),
                r = n(56763),
                a = n(61630);
            let s = a.ZP.div.withConfig({
                    componentId: "sc-201d2501-0"
                })(["margin-top:1rem;margin-bottom:1rem;position:relative;width:100%;overflow:hidden;"]),
                l = a.ZP.div.withConfig({
                    componentId: "sc-201d2501-1"
                })(["position:relative;width:100%;max-width:600px;margin:0 auto;overflow:hidden;display:flex;"]),
                c = a.ZP.div.withConfig({
                    componentId: "sc-201d2501-2"
                })(["position:relative;flex:0 0 100%;width:100%;cursor:pointer;transition:all 0.2s ease;img{width:100%;height:auto;display:block;transition:filter 0.3s ease;object-fit:cover;", "}.title-overlay{position:absolute;top:0;left:0;padding:0.3rem;font-size:8pt;background-color:rgba(0,0,0,0.6);color:#fff;}&.slide-in{animation:slideIn 0.5s forwards;}&.slide-out{animation:slideOut 0.5s forwards;}@keyframes slideIn{from{transform:translateX(100%);}to{transform:translateX(0);}}@keyframes slideOut{from{transform:translateX(0);}to{transform:translateX(-100%);}}"], e => {
                    let {
                        $loading: t
                    } = e;
                    return t && "\n        filter: blur(5px);\n      "
                }),
                d = e => {
                    let {
                        $bgImage: t,
                        $title: n,
                        adId: i,
                        auth: a,
                        className: s
                    } = e, [l, d] = (0, r.useState)(!1), f = async () => {
                        d(!0);
                        try {
                            let e = await fetch("https://api.easebot.app/ads/".concat(i), {
                                method: "POST",
                                cache: "no-cache",
                                headers: {
                                    "Content-Type": "application/json",
                                    ...a ? {
                                        authorization: a
                                    } : {}
                                }
                            });
                            if (!e.ok) throw Error("Erro na requisi\xe7\xe3o do an\xfancio");
                            let t = await e.json();
                            t.callback_url ? window.open(t.callback_url, "_blank") : console.error("callback_url n\xe3o encontrado na resposta")
                        } catch (e) {
                            console.error("Erro ao processar o clique no an\xfancio:", e)
                        } finally {
                            d(!1)
                        }
                    };
                    return (0, o.jsxs)(c, {
                        onClick: f,
                        $loading: l,
                        className: s,
                        children: [(0, o.jsx)("img", {
                            src: t,
                            alt: n
                        }), (0, o.jsx)("div", {
                            className: "title-overlay",
                            children: n
                        })]
                    }, i)
                };

            function f() {
                var e;
                let t = e => (0, i.getCookie)(e),
                    n = null !== (e = t("authjs.session-token")) && void 0 !== e ? e : t("__Secure-authjs.session-token"),
                    [a, c] = (0, r.useState)([]),
                    [f, m] = (0, r.useState)(0),
                    [u, p] = (0, r.useState)(null);
                return (0, r.useEffect)(() => {
                    try {
                        fetch("https://api.easebot.app/ads", {
                            cache: "no-cache",
                            headers: { ...n ? {
                                    authorization: n
                                } : {}
                            }
                        }).then(e => e.json()).then(e => {
                            c(e.adsense_list)
                        })
                    } catch (e) {
                        return
                    }
                }, []), (0, r.useEffect)(() => {
                    if (a.length > 0) {
                        let e = setInterval(() => {
                            p(f), m(e => (e + 1) % a.length)
                        }, 15e3);
                        return () => clearInterval(e)
                    }
                }, [f, a]), (0, r.useEffect)(() => {
                    let e;
                    return null !== u && (e = setTimeout(() => {
                        p(null)
                    }, 500)), () => {
                        e && clearTimeout(e)
                    }
                }, [u]), (0, o.jsx)(s, {
                    children: (0, o.jsx)(l, {
                        children: a && a.length > 0 && (0, o.jsxs)(o.Fragment, {
                            children: [null !== u && (0, o.jsx)(d, {
                                $bgImage: a[u].banner_url,
                                $title: a[u].name,
                                adId: a[u].id,
                                auth: n,
                                className: "slide-out"
                            }, "".concat(a[u].id, "-out")), (0, o.jsx)(d, {
                                $bgImage: a[f].banner_url,
                                $title: a[f].name,
                                adId: a[f].id,
                                auth: n,
                                className: "slide-in"
                            }, "".concat(a[f].id, "-in"))]
                        })
                    })
                })
            }
        },
        28989: function(e, t, n) {
            "use strict";
            n.d(t, {
                default: function() {
                    return f
                }
            });
            var o = n(65559),
                i = n(56763),
                r = n(35906),
                a = n(61630);
            let s = (0, a.F4)(["0%{margin-bottom:2em;opacity:0;}100%{margin-bottom:.5em;opacity:1;}"]),
                l = (0, a.F4)(["0%{margin-bottom:.5em;opacity:1;}100%{margin-bottom:2em;opacity:0;}"]),
                c = (0, a.F4)(["0%{margin-bottom:.5em;}10%{margin-bottom:.8em;}20%{margin-bottom:.1em;}25%{margin-bottom:.7em;}30%{margin-bottom:.5em;}100%{margin-bottom:.5em;}"]),
                d = a.ZP.div.withConfig({
                    componentId: "sc-74b4590-0"
                })(["position:fixed;bottom:0;left:50%;transform:translateX(-50%);margin-bottom:", ";opacity:", ";animation:", " 200ms ease;transition:all 200ms ease;overflow:hidden;z-index:0;animation:", " 2s infinite;&::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom,#0a0a0a,rgba(0,0,0,0));pointer-events:none;z-index:99;}& > *{position:relative;z-index:2;}"], e => {
                    let {
                        $ontop: t
                    } = e;
                    return t ? "0.5em" : "2em"
                }, e => {
                    let {
                        $ontop: t
                    } = e;
                    return t ? "1" : "0"
                }, e => {
                    let {
                        $ontop: t
                    } = e;
                    return t ? s : l
                }, c);

            function f() {
                let [e, t] = (0, i.useState)(!0), [n, a] = (0, i.useState)(!1);
                return (0, i.useEffect)(() => {
                    let e = () => {
                        t(0 === window.scrollY), console.log(window.scrollY)
                    };
                    e(), window.addEventListener("scroll", e);
                    try {
                        window.innerWidth < 768 && a(!0)
                    } catch (e) {}
                }, [e]), (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)(d, {
                        $ontop: e,
                        children: (0, o.jsx)(r.iUH, {
                            size: 28
                        })
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [6790, 4885, 6367, 6582, 9720, 6825, 773, 8583, 5308, 1630, 9203, 6898, 4719, 9192, 5221, 1744], function() {
            return e(e.s = 8135)
        }), _N_E = e.O()
    }
]);