"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4719], {
        33368: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return j
                }
            });
            var o = n(65559),
                i = n(58253),
                r = n(61630);
            let a = r.ZP.button.withConfig({
                    componentId: "sc-8e67a4cd-0"
                })(["color:#0c0b0c;box-shadow:", " 0px 0 40px -15px;display:flex;font-weight:800;background-color:", ";padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;border-radius:20px;border:1px solid ", ";font-size:14pt;text-align:center;cursor:pointer;svg{font-size:20pt;margin-right:0.5em;", "}@media (max-width:768px){width:100%;text-align:center;justify-content:center;align-items:center;justify-items:center;}@keyframes spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"], t => {
                    let {
                        theme: e
                    } = t;
                    return e.colors.cyan
                }, t => {
                    let {
                        theme: e
                    } = t;
                    return e.colors.cyan
                }, t => {
                    let {
                        theme: e
                    } = t;
                    return e.colors.cyan
                }, t => {
                    let {
                        $isloading: e
                    } = t;
                    return e ? "animation: spin 1s linear infinite;" : ""
                }),
                s = r.ZP.button.withConfig({
                    componentId: "sc-8e67a4cd-1"
                })(["transition:all 0.1s ease;border:none;margin-left:0.5em;padding:5px;border-radius:5px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;justify-items:center;background-color:transparent;color:#555555;font-size:14pt;cursor:pointer;transition:all 0.1s ease-out;", " @keyframes spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"], t => {
                    let {
                        $isloading: e
                    } = t;
                    return e ? "animation: spin 1s linear infinite;" : "&:hover {\n    color: #ff5b5b;\n    text-decoration: underline;\n    background-color: #55555532;\n  }"
                }),
                l = r.ZP.div.withConfig({
                    componentId: "sc-8e67a4cd-2"
                })(["display:flex;flex-direction:row;margin-top:1em;gap:0.5em;"]),
                c = r.ZP.div.withConfig({
                    componentId: "sc-8e67a4cd-3"
                })(["transition:all 0.1s ease;display:flex;justify-content:space-between;align-items:center;align-content:center;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;border-radius:20px;border:1px solid #31312f;border-bottom:2px solid #31312f;border-right:2px solid #31312f;cursor:pointer;z-index:4;", " & img{", " border:1px solid #31312f;width:30px;height:30px;border-radius:50%;object-fit:cover;margin-right:10px;}& span{transition:all 0.1s ease;margin-left:0.2em;max-width:9em;text-align:start;font-weight:600;color:#ffffff;font-size:10pt;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:flex;flex-direction:column;& span:nth-child(2){transition:all 0.1s ease;margin-left:auto;margin-right:auto;width:fit-content;text-align:center;font-weight:600;color:#d9d6d6;font-size:8pt;text-overflow:ellipsis;white-space:nowrap;text-shadow:0px 0px 3px #b5b5b5d4 !important;background:transparent url(https://i.imgur.com/FZiQC.gif);}}&:hover{background-color:#31312f;}", " & svg{", "}@keyframes spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}@media (max-width:768px){text-align:center;align-items:center;}"], t => {
                    let {
                        $compact: e
                    } = t;
                    return e ? "width: 1.5em;" : "min-width: 5em;"
                }, t => {
                    let {
                        $compact: e
                    } = t;
                    return e ? "margin-left: -0.2em;" : "margin-left: 0.1em;"
                }, t => {
                    let {
                        $isloading: e
                    } = t;
                    return e ? "font-size: 10pt;" : ""
                }, t => {
                    let {
                        $isloading: e
                    } = t;
                    return e ? "animation: spin 1s linear infinite; margin-right: .5em" : ""
                });
            var d = n(35906),
                p = n(27124),
                x = n(56763),
                u = n(98564),
                f = n(42814),
                g = n(61061),
                m = n(21650);

            function h(t) {
                let {
                    provider: e,
                    ...n
                } = t, [r, s] = (0, x.useState)(!1);
                return (0, o.jsx)(a, { ...n,
                    $isloading: r,
                    onClick: () => {
                        s(!0), (0, i.zB)(e).finally(() => {
                            s(!1)
                        })
                    },
                    children: r ? (0, o.jsx)(u.xz6, {}) : (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(d.j2d, {}), " Login"]
                    })
                })
            }

            function b(t) {
                let [e, n] = (0, x.useState)(!1), [r, a] = (0, x.useState)(!1), c = () => a(!0), d = () => a(!1);
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(s, { ...t,
                        $isloading: e,
                        onClick: () => {
                            c()
                        },
                        children: e ? (0, o.jsx)(u.xz6, {}) : (0, o.jsx)(o.Fragment, {
                            children: (0, o.jsx)(p.VUx, {})
                        })
                    }), (0, o.jsxs)(f.Z, {
                        isOpen: r,
                        onClose: d,
                        children: [(0, o.jsx)("h2", {
                            children: "Confirmar sa\xedda"
                        }), (0, o.jsx)("p", {
                            children: "Deseja mesmo sair?"
                        }), (0, o.jsxs)(l, {
                            children: [(0, o.jsx)(g.Z, {
                                theme: "filled",
                                disabled: e,
                                bgColor: "#ff3d40",
                                onClick: async () => {
                                    n(!0), await (0, i.w7)(), (0, m.deleteCookie)("authjs.session-token"), (0, m.deleteCookie)("__Secure-authjs.session-token"), n(!1), d()
                                },
                                children: e ? (0, o.jsx)(o.Fragment, {
                                    children: (0, o.jsx)(u.xz6, {})
                                }) : (0, o.jsx)(o.Fragment, {
                                    children: "Sair"
                                })
                            }), (0, o.jsx)(g.Z, {
                                theme: "outline",
                                disabled: e,
                                bgColor: "#3b3939",
                                onClick: () => {
                                    d()
                                },
                                children: e ? (0, o.jsx)(o.Fragment, {
                                    children: (0, o.jsx)(u.xz6, {})
                                }) : (0, o.jsx)(o.Fragment, {
                                    children: "Cancelar"
                                })
                            })]
                        })]
                    })]
                })
            }
            var w = n(45687);

            function j(t) {
                var e;
                let {
                    data: n,
                    update: r,
                    status: a
                } = (0, i.kP)();
                return "loading" == a ? (0, o.jsx)(c, {
                    $isloading: !0,
                    $compact: t.$tocompact,
                    children: (0, o.jsx)(u.xz6, {})
                }) : (null == n ? void 0 : n.user) ? (0, o.jsxs)(c, {
                    $compact: t.$tocompact,
                    children: [(0, o.jsx)(w.default, {
                        src: (null === (e = n.user) || void 0 === e ? void 0 : e.image) || "/user-default.png",
                        alt: "User photo",
                        width: 50,
                        height: 50
                    }), t.$tocompact ? (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)(b, {})
                    }) : (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsxs)("span", {
                            children: [(0, o.jsx)("span", {
                                className: "title",
                                children: n.user.name
                            }), (0, o.jsx)("span", {
                                children: "Cliente"
                            })]
                        }), (0, o.jsx)(b, {})]
                    })]
                }) : (0, o.jsx)(h, {})
            }
        },
        61061: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return l
                }
            });
            var o = n(65559),
                i = n(61630),
                r = n(48205);
            let a = (t, e, n, o) => {
                    let i = n || e.colors.cyan;
                    switch (t) {
                        case "filled":
                            return "\n        background-color: ".concat(i, ";\n        color: ").concat(r.uu(i, e), ";\n      ");
                        case "outline":
                            return "\n        background-color: transparent;\n        border: 1px solid ".concat(i, ";\n      ");
                        case "light":
                            return "\n        background-color: ".concat(r.a7(i, .4), ";\n        color: ").concat(r.uu(i, e), ";\n      ");
                        case "subtle":
                            return "\n        background-color: transparent;\n\n        &:hover {\n            color: ".concat(r.uu(i, e), ";\n            background-color: ").concat(r.a7(i, .4), ";\n        }\n      ")
                    }
                },
                s = i.ZP.button.withConfig({
                    componentId: "sc-a1d84608-0"
                })(["color:", ";font-weight:500;font-size:16px;text-wrap:nowrap;display:flex;text-align:center;padding:15px;padding-top:13px;padding-bottom:10px;border-radius:5px;transition:all 0.1s cubic-bezier(0.19,1,0.22,1);&:hover{opacity:0.8;transform:scaleX(1.02);}", " cursor:pointer;&:disabled{opacity:0.3;cursor:not-allowed;}"], t => {
                    let {
                        $color: e,
                        theme: {
                            colors: n
                        }
                    } = t;
                    return null != e ? e : n.text
                }, t => {
                    let {
                        $theme: e,
                        theme: n,
                        $backgroundColor: o,
                        $color: i
                    } = t;
                    return a(e, n, o, i)
                });

            function l(t) {
                let {
                    children: e,
                    theme: n,
                    bgColor: i,
                    color: r,
                    ...a
                } = t;
                return (0, o.jsx)(s, {
                    $theme: n || "filled",
                    ...a,
                    $backgroundColor: i,
                    $color: r,
                    children: e
                })
            }
        },
        14850: function(t, e, n) {
            n.d(e, {
                DiscordIcon: function() {
                    return x
                },
                FooterContainer: function() {
                    return s
                },
                FooterLogo: function() {
                    return l
                },
                FooterLogoImage: function() {
                    return c
                },
                InstagramIcon: function() {
                    return f
                },
                Links: function() {
                    return p
                },
                Section: function() {
                    return d
                },
                YoutubeIcon: function() {
                    return u
                }
            });
            var o = n(61630),
                i = n(45687),
                r = n(35906),
                a = n(98564);
            let s = o.ZP.footer.withConfig({
                    componentId: "sc-5608a959-0"
                })(["background-color:", ";font-weight:500;color:", ";padding:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;"], t => {
                    let {
                        $bg: e
                    } = t;
                    return null != e ? e : "transparent"
                }, t => {
                    let {
                        theme: e
                    } = t;
                    return e.colors.text
                }),
                l = o.ZP.div.withConfig({
                    componentId: "sc-5608a959-1"
                })(["display:flex;flex-direction:row;justify-content:space-between;width:6em;"]),
                c = (0, o.ZP)(i.default).withConfig({
                    componentId: "sc-5608a959-2"
                })(["display:flex;flex-direction:row;justify-content:space-between;height:100%;width:100%;"]),
                d = o.ZP.div.withConfig({
                    componentId: "sc-5608a959-3"
                })(["flex:1;margin:10px;&.logo{font-size:12px;color:", ";font-weight:500;gap:0.5em;span{color:", ";}}&.social-media{display:flex;flex-direction:column;justify-content:space-around;align-items:center;div{margin-top:1em;display:flex;flex-direction:row;gap:0.5em;svg{transition:all 0.5s ease-in-out;&:hover{fill:", ";}}}}"], t => {
                    let {
                        theme: e
                    } = t;
                    return e.colors.text
                }, t => {
                    let {
                        theme: e
                    } = t;
                    return e.colors.opacityText
                }, t => {
                    let {
                        theme: e
                    } = t;
                    return e.colors.text
                }),
                p = o.ZP.div.withConfig({
                    componentId: "sc-5608a959-4"
                })(["display:flex;flex-direction:column;gap:5px;"]),
                x = (0, o.ZP)(r.j2d).withConfig({
                    componentId: "sc-5608a959-5"
                })(["color:", ";font-size:27px;font-weight:bolder;padding-right:5px;"], t => {
                    let {
                        theme: e
                    } = t;
                    return e.colors.opacityText
                }),
                u = (0, o.ZP)(r.V2E).withConfig({
                    componentId: "sc-5608a959-6"
                })(["color:", ";font-size:27px;font-weight:bolder;padding-right:5px;"], t => {
                    let {
                        theme: e
                    } = t;
                    return e.colors.opacityText
                }),
                f = (0, o.ZP)(a.t0C).withConfig({
                    componentId: "sc-5608a959-7"
                })(["color:", ";font-size:27px;font-weight:bolder;padding-right:5px;"], t => {
                    let {
                        theme: e
                    } = t;
                    return e.colors.opacityText
                })
        },
        22130: function(t, e, n) {
            n.d(e, {
                default: function() {
                    return Z
                }
            });
            var o = n(65559),
                i = n(56763),
                r = n(34114),
                a = n(68566),
                s = n(61630),
                l = n(96898),
                c = n(45687);
            let d = s.ZP.div.withConfig({
                    componentId: "sc-51532d62-0"
                })(["display:flex;justify-content:center;align-items:baseline;align-content:center;transition:all 0.2s ease-in-out;position:fixed;width:100%;top:0;right:0;left:0;z-index:10;background-color:", ";backdrop-filter:blur(3px);border-bottom:1px solid rgba(33,37,32,0.574);box-shadow:0 0 50px 0 rgba(0,0,0,0.737);&.initial-position{position:relative;box-shadow:0 0 0 0 rgba(0,0,0,0);border-bottom:none;background-color:", ";backdrop-filter:blur(0px);}"], t => {
                    let {
                        $bg: e
                    } = t;
                    return null != e ? e : "rgba(19, 18, 18, 0.352)"
                }, t => {
                    let {
                        $bg: e
                    } = t;
                    return null != e ? e : "rgba(19, 18, 18, 0)"
                }),
                p = s.ZP.div.withConfig({
                    componentId: "sc-51532d62-1"
                })(["z-index:1;padding-top:0.5em;padding-bottom:1em;gap:3rem;display:flex;justify-content:space-around;align-items:center;align-content:space-around;width:100%;max-width:1200px;@media (max-width:769px){justify-content:space-around;}"]),
                x = s.ZP.div.withConfig({
                    componentId: "sc-51532d62-2"
                })(["display:flex;flex-direction:row;justify-content:space-between;width:8em;"]),
                u = (0, s.ZP)(c.default).withConfig({
                    componentId: "sc-51532d62-3"
                })(["display:flex;flex-direction:row;justify-content:space-between;font-size:5pt;"]),
                f = (0, s.ZP)(l.default).withConfig({
                    componentId: "sc-51532d62-4"
                })(["color:", ";font-size:18px;font-weight:500;text-decoration:none;"], t => {
                    let {
                        theme: e
                    } = t;
                    return e.colors.text
                }),
                g = (0, s.ZP)(r.w75).withConfig({
                    componentId: "sc-51532d62-5"
                })(["border:none;color:#ffffff6a;font-size:27px;font-weight:bolder;padding-right:5px;"]),
                m = (0, s.ZP)(a.jRj).withConfig({
                    componentId: "sc-51532d62-6"
                })(["color:", ";font-size:30px;cursor:pointer;margin-right:1rem;@media (min-width:769px){display:none;}"], t => {
                    let {
                        theme: e
                    } = t;
                    return e.colors.text
                }),
                h = s.ZP.form.withConfig({
                    componentId: "sc-51532d62-7"
                })(["min-width:20em;display:flex;flex-direction:row;background-color:rgba(255,255,255,0.063);border-radius:30px;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;button{background-color:rgba(255,255,255,0);}@media (max-width:768px){display:none;}"]),
                b = s.ZP.input.withConfig({
                    componentId: "sc-51532d62-8"
                })(["font-weight:600;border:none !important;width:100%;background-color:transparent;display:flex;flex-direction:row;color:", ";justify-content:space-between;"], t => {
                    let {
                        theme: e
                    } = t;
                    return e.colors.text
                });
            s.ZP.button.withConfig({
                componentId: "sc-51532d62-9"
            })(["color:black;box-shadow:", " 0px 0 40px -15px;display:flex;font-weight:800;background-color:", ";padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;border-radius:20px;border:1px solid ", ";font-size:14pt;text-align:center;svg{font-size:20pt;margin-right:0.5em;}@media (max-width:768px){width:100%;text-align:center;justify-content:center;align-items:center;justify-items:center;}"], t => {
                let {
                    theme: e
                } = t;
                return e.colors.cyan
            }, t => {
                let {
                    theme: e
                } = t;
                return e.colors.cyan
            }, t => {
                let {
                    theme: e
                } = t;
                return e.colors.cyan
            });
            let w = s.ZP.div.withConfig({
                    componentId: "sc-51532d62-10"
                })(["display:flex;flex-direction:row;gap:2rem;align-items:center;@media (max-width:768px){display:flex;flex-direction:column;justify-content:space-around;align-content:space-around;background-color:rgba(19,18,18,0.852);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);border-bottom:1px solid rgba(9,9,9,0.473);box-shadow:0 20px 50px rgba(0,0,0,0.737);position:absolute;top:100%;left:0;right:0;display:", ";padding:0.5em;}"], t => {
                    let {
                        $ismobilemenuopen: e
                    } = t;
                    return e ? "flex" : "none"
                }),
                j = s.ZP.div.withConfig({
                    componentId: "sc-51532d62-11"
                })(["display:none;@media (max-width:768px){display:flex;align-items:center;}"]),
                y = s.ZP.div.withConfig({
                    componentId: "sc-51532d62-12"
                })(["display:none;font-size:30px;position:relative;top:3px;cursor:pointer;color:", ";@media (max-width:768px){display:block;}"], t => {
                    let {
                        theme: e
                    } = t;
                    return e.colors.text
                });
            var C = n(74861),
                k = n(33368),
                v = n(29854);

            function I(t) {
                let {
                    href: e,
                    name: n
                } = t;
                return (0, o.jsx)(f, {
                    href: e,
                    children: n
                })
            }

            function Z(t) {
                let [e, n] = (0, i.useState)(!1), [r, s] = (0, i.useState)(""), l = (0, C.useRouter)();
                return (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)(d, {
                        $bg: t.backgroundColor,
                        className: "initial-position",
                        children: (0, o.jsxs)(p, {
                            children: [(0, o.jsx)(x, {
                                onClick: () => {
                                    window.location.href = "/"
                                },
                                children: (0, o.jsx)(u, {
                                    alt: "logo",
                                    src: "/ease.svg",
                                    width: 70,
                                    height: 70
                                })
                            }), (0, o.jsxs)(w, {
                                $ismobilemenuopen: e,
                                children: [(0, o.jsx)(I, {
                                    href: "/#",
                                    name: "Inicio"
                                }), (0, o.jsx)(I, {
                                    href: "/plans",
                                    name: "Planos"
                                }), !(null == t ? void 0 : t.removeSearch) && (0, o.jsxs)(h, {
                                    onSubmit: function(t) {
                                        t.preventDefault(), l.push("/search?q=".concat(encodeURIComponent(r)))
                                    },
                                    children: [(0, o.jsx)("button", {
                                        type: "submit",
                                        children: (0, o.jsx)(g, {})
                                    }), (0, o.jsx)(b, {
                                        type: "text",
                                        name: "search",
                                        placeholder: "Pesquisar produto ou loja...",
                                        onChange: t => s(t.target.value)
                                    })]
                                }), (0, o.jsx)(I, {
                                    href: "/dashboard",
                                    name: "Dashboard"
                                }), (0, o.jsx)(k.Z, {
                                    $tocompact: !1
                                })]
                            }), (0, o.jsxs)(j, {
                                children: [(0, o.jsx)(m, {
                                    onClick: () => window.location.href = "/search"
                                }), (0, o.jsx)(y, {
                                    onClick: () => {
                                        n(!e)
                                    },
                                    children: e ? (0, o.jsx)(v.bjh, {}) : (0, o.jsx)(a.cur, {})
                                })]
                            })]
                        })
                    })
                })
            }
        },
        42814: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return d
                }
            });
            var o = n(65559);
            n(56763);
            var i = n(61630),
                r = n(10304);
            let a = (0, i.F4)(["from{opacity:0;}to{opacity:1;}"]),
                s = (0, i.F4)(["from{transform:translate(-50%,-60%);}to{transform:translate(-50%,-50%);}"]),
                l = i.ZP.div.withConfig({
                    componentId: "sc-ae522310-0"
                })(["position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,0.5);display:", ";animation:", " 0.1s ease-in;transition:all 0.1s ease;z-index:9998;"], t => {
                    let {
                        $isopen: e
                    } = t;
                    return e ? "block" : "none"
                }, a),
                c = i.ZP.div.withConfig({
                    componentId: "sc-ae522310-1"
                })(["position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#100e0e;padding:20px;border-radius:8px;max-width:90%;width:500px;border:1px solid #181817;box-shadow:0 5px 15px rgb(0,0,0);animation:", " 0.1s ease-in,", " 0.1s ease-in;transition:all 0.1s ease;z-index:99999;cursor:default;"], a, s);

            function d(t) {
                let {
                    isOpen: e,
                    onClose: n,
                    children: i
                } = t;
                return e ? (0, r.createPortal)((0, o.jsx)(l, {
                    $isopen: e,
                    onClick: t => {
                        t.stopPropagation(), n()
                    },
                    children: (0, o.jsx)(c, {
                        onClick: t => {
                            t.stopPropagation()
                        },
                        children: i
                    })
                }), document.body) : null
            }
        },
        48205: function(t, e, n) {
            n.d(e, {
                a7: function() {
                    return o
                },
                uu: function() {
                    return r
                }
            });
            let o = (t, e) => {
                    let n = parseInt((t = t.replace("#", "")).substring(0, 2), 16),
                        o = parseInt(t.substring(2, 4), 16),
                        i = parseInt(t.substring(4, 6), 16);
                    return "rgba(".concat(n, ", ").concat(o, ", ").concat(i, ", ").concat(e, ")")
                },
                i = (t, e, n) => {
                    let o = [t, e, n].map(t => (t /= 255) <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4));
                    return .2126 * o[0] + .7152 * o[1] + .0722 * o[2]
                },
                r = (t, e) => i(parseInt((t = t.replace("#", "")).substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16)) > .5 ? e.colors.textBlack : e.colors.text
        }
    }
]);