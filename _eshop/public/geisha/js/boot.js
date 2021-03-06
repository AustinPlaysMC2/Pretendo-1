(function(a, b) {
    function c(p) {
        var a = p.length,
            b = f.type(p);
        return f.isWindow(p) ? !1 : 1 === p.nodeType && a ? !0 : "array" === b || "function" !== b && (0 === a || "number" == typeof a && 0 < a && a - 1 in p)
    }

    function e(p, a, q, c) {
        if (f.acceptData(p)) {
            var F, g, d = f.expando,
                e = "string" == typeof a,
                j = p.nodeType,
                m = j ? f.cache : p,
                n = j ? p[d] : p[d] && d;
            if (n && m[n] && (c || m[n].data) || !e || q !== b) return n || (j ? p[d] = n = Aa.pop() || f.guid++ : n = d), m[n] || (m[n] = {}, j || (m[n].toJSON = f.noop)), ("object" == typeof a || "function" == typeof a) && (c ? m[n] = f.extend(m[n], a) : m[n].data = f.extend(m[n].data,
                a)), F = m[n], c || (F.data || (F.data = {}), F = F.data), q !== b && (F[f.camelCase(a)] = q), e ? (g = F[a], null == g && (g = F[f.camelCase(a)])) : g = F, g
        }
    }

    function d(p, a, b) {
        if (f.acceptData(p)) {
            var c, F, g, d = p.nodeType,
                e = d ? f.cache : p,
                j = d ? p[f.expando] : f.expando;
            if (e[j]) {
                if (a && (g = b ? e[j] : e[j].data)) {
                    f.isArray(a) ? a = a.concat(f.map(a, f.camelCase)) : a in g ? a = [a] : (a = f.camelCase(a), a = a in g ? [a] : a.split(" "));
                    c = 0;
                    for (F = a.length; F > c; c++) delete g[a[c]];
                    if (!(b ? v : f.isEmptyObject)(g)) return
                }(b || (delete e[j].data, v(e[j]))) && (d ? f.cleanData([p], !0) : f.support.deleteExpando ||
                    e != e.window ? delete e[j] : e[j] = null)
            }
        }
    }

    function k(p, a, q) {
        if (q === b && 1 === p.nodeType) {
            var c = "data-" + a.replace(xc, "-$1").toLowerCase();
            if (q = p.getAttribute(c), "string" == typeof q) {
                try {
                    q = "true" === q ? !0 : "false" === q ? !1 : "null" === q ? null : +q + "" === q ? +q : yc.test(q) ? f.parseJSON(q) : q
                } catch (F) {}
                f.data(p, a, q)
            } else q = b
        }
        return q
    }

    function v(p) {
        for (var a in p)
            if (("data" !== a || !f.isEmptyObject(p[a])) && "toJSON" !== a) return !1;
        return !0
    }

    function l() {
        return !0
    }

    function H() {
        return !1
    }

    function z(p, a) {
        do p = p[a]; while (p && 1 !== p.nodeType);
        return p
    }

    function P(p, a, b) {
        if (a = a || 0, f.isFunction(a)) return f.grep(p, function(p, c) {
            return !!a.call(p, c, p) === b
        });
        if (a.nodeType) return f.grep(p, function(p) {
            return p === a === b
        });
        if ("string" == typeof a) {
            var c = f.grep(p, function(p) {
                return 1 === p.nodeType
            });
            if (zc.test(a)) return f.filter(a, c, !b);
            a = f.filter(a, c)
        }
        return f.grep(p, function(p) {
            return 0 <= f.inArray(p, a) === b
        })
    }

    function G(p) {
        var a = Nb.split("|");
        p = p.createDocumentFragment();
        if (p.createElement)
            for (; a.length;) p.createElement(a.pop());
        return p
    }

    function C(p) {
        var a =
            p.getAttributeNode("type");
        return p.type = (a && a.specified) + "/" + p.type, p
    }

    function I(p) {
        var a = Ac.exec(p.type);
        return a ? p.type = a[1] : p.removeAttribute("type"), p
    }

    function t(p, a) {
        for (var b, c = 0; null != (b = p[c]); c++) f._data(b, "globalEval", !a || f._data(a[c], "globalEval"))
    }

    function A(p, a) {
        if (1 === a.nodeType && f.hasData(p)) {
            var b, c, F;
            c = f._data(p);
            var g = f._data(a, c),
                d = c.events;
            if (d)
                for (b in delete g.handle, g.events = {}, d) {
                    c = 0;
                    for (F = d[b].length; F > c; c++) f.event.add(a, b, d[b][c])
                }
            g.data && (g.data = f.extend({}, g.data))
        }
    }

    function u(p,
        a) {
        var q, c, F = 0,
            g = typeof p.getElementsByTagName !== M ? p.getElementsByTagName(a || "*") : typeof p.querySelectorAll !== M ? p.querySelectorAll(a || "*") : b;
        if (!g) {
            g = [];
            for (q = p.childNodes || p; null != (c = q[F]); F++) !a || f.nodeName(c, a) ? g.push(c) : f.merge(g, u(c, a))
        }
        return a === b || a && f.nodeName(p, a) ? f.merge([p], g) : g
    }

    function x(p) {
        jb.test(p.type) && (p.defaultChecked = p.checked)
    }

    function y(p, a) {
        if (a in p) return a;
        for (var b = a.charAt(0).toUpperCase() + a.slice(1), c = a, f = Ob.length; f--;)
            if (a = Ob[f] + b, a in p) return a;
        return c
    }

    function B(p,
        a) {
        return p = a || p, "none" === f.css(p, "display") || !f.contains(p.ownerDocument, p)
    }

    function V(p, a) {
        for (var b, c, F, g = [], d = 0, e = p.length; e > d; d++) c = p[d], c.style && (g[d] = f._data(c, "olddisplay"), b = c.style.display, a ? (g[d] || "none" !== b || (c.style.display = ""), "" === c.style.display && B(c) && (g[d] = f._data(c, "olddisplay", Q(c.nodeName)))) : g[d] || (F = B(c), (b && "none" !== b || !F) && f._data(c, "olddisplay", F ? b : f.css(c, "display"))));
        for (d = 0; e > d; d++) c = p[d], c.style && (a && "none" !== c.style.display && "" !== c.style.display || (c.style.display = a ?
            g[d] || "" : "none"));
        return p
    }

    function h(p, a, b) {
        return (p = Bc.exec(a)) ? Math.max(0, p[1] - (b || 0)) + (p[2] || "px") : a
    }

    function L(p, a, b, c, F) {
        a = b === (c ? "border" : "content") ? 4 : "width" === a ? 1 : 0;
        for (var g = 0; 4 > a; a += 2) "margin" === b && (g += f.css(p, b + ra[a], !0, F)), c ? ("content" === b && (g -= f.css(p, "padding" + ra[a], !0, F)), "margin" !== b && (g -= f.css(p, "border" + ra[a] + "Width", !0, F))) : (g += f.css(p, "padding" + ra[a], !0, F), "padding" !== b && (g += f.css(p, "border" + ra[a] + "Width", !0, F)));
        return g
    }

    function D(a, b, q) {
        var c = !0,
            F = "width" === b ? a.offsetWidth :
            a.offsetHeight,
            g = sa(a),
            d = f.support.boxSizing && "border-box" === f.css(a, "boxSizing", !1, g);
        if (0 >= F || null == F) {
            if (F = ta(a, b, g), (0 > F || null == F) && (F = a.style[b]), Ra.test(F)) return F;
            c = d && (f.support.boxSizingReliable || F === a.style[b]);
            F = parseFloat(F) || 0
        }
        return F + L(a, b, q || (d ? "border" : "content"), c, g) + "px"
    }

    function Q(a) {
        var b = E,
            q = Pb[a];
        return q || (q = N(a, b), "none" !== q && q || (Ka = (Ka || f("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (Ka[0].contentWindow ||
            Ka[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), q = N(a, b), Ka.detach()), Pb[a] = q), q
    }

    function N(a, b) {
        var q = f(b.createElement(a)).appendTo(b.body),
            c = f.css(q[0], "display");
        return q.remove(), c
    }

    function Y(a, b, q, c) {
        var F;
        if (f.isArray(b)) f.each(b, function(b, w) {
            q || Cc.test(a) ? c(a, w) : Y(a + "[" + ("object" == typeof w ? b : "") + "]", w, q, c)
        });
        else if (q || "object" !== f.type(b)) c(a, b);
        else
            for (F in b) Y(a + "[" + F + "]", b[F], q, c)
    }

    function ja(a) {
        return function(b, q) {
            "string" != typeof b && (q = b, b = "*");
            var c,
                F = 0,
                g = b.toLowerCase().match(ga) || [];
            if (f.isFunction(q))
                for (; c = g[F++];) "+" === c[0] ? (c = c.slice(1) || "*", (a[c] = a[c] || []).unshift(q)) : (a[c] = a[c] || []).push(q)
        }
    }

    function ka(a, w, q, c) {
        function g(j) {
            var m;
            return d[j] = !0, f.each(a[j] || [], function(a, p) {
                var f = p(w, q, c);
                return "string" != typeof f || e || d[f] ? e ? !(m = f) : b : (w.dataTypes.unshift(f), g(f), !1)
            }), m
        }
        var d = {},
            e = a === kb;
        return g(w.dataTypes[0]) || !d["*"] && g("*")
    }

    function Z(a, w) {
        var q, c, g = f.ajaxSettings.flatOptions || {};
        for (c in w) w[c] !== b && ((g[c] ? a : q || (q = {}))[c] = w[c]);
        return q && f.extend(!0, a, q), a
    }

    function ua() {
        try {
            return new a.XMLHttpRequest
        } catch (p) {}
    }

    function ha() {
        return setTimeout(function() {
            Ba = b
        }), Ba = f.now()
    }

    function j(a, b, q) {
        var c, g, d = 0,
            e = Sa.length,
            j = f.Deferred().always(function() {
                delete m.elem
            }),
            m = function() {
                if (g) return !1;
                for (var b = Ba || ha(), b = Math.max(0, n.startTime + n.duration - b), w = 1 - (b / n.duration || 0), q = 0, c = n.tweens.length; c > q; q++) n.tweens[q].run(w);
                return j.notifyWith(a, [n, w, b]), 1 > w && c ? b : (j.resolveWith(a, [n]), !1)
            },
            n = j.promise({
                elem: a,
                props: f.extend({}, b),
                opts: f.extend(!0, {
                    specialEasing: {}
                }, q),
                originalProperties: b,
                originalOptions: q,
                startTime: Ba || ha(),
                duration: q.duration,
                tweens: [],
                createTween: function(b, w) {
                    var q = f.Tween(a, n.opts, b, w, n.opts.specialEasing[b] || n.opts.easing);
                    return n.tweens.push(q), q
                },
                stop: function(b) {
                    var w = 0,
                        q = b ? n.tweens.length : 0;
                    if (g) return this;
                    for (g = !0; q > w; w++) n.tweens[w].run(1);
                    return b ? j.resolveWith(a, [n, b]) : j.rejectWith(a, [n, b]), this
                }
            });
        b = n.props;
        q = n.opts.specialEasing;
        var r, k, h, s;
        for (k in b)
            if (r = f.camelCase(k), h = q[r], c = b[k], f.isArray(c) &&
                (h = c[1], c = b[k] = c[0]), k !== r && (b[r] = c, delete b[k]), s = f.cssHooks[r], s && "expand" in s)
                for (k in c = s.expand(c), delete b[r], c) k in b || (b[k] = c[k], q[k] = h);
            else q[r] = h;
        for (; e > d; d++)
            if (c = Sa[d].call(n, a, b, n.opts)) return c;
        var l = n;
        f.each(b, function(a, p) {
            for (var b = (La[a] || []).concat(La["*"]), w = 0, q = b.length; q > w && !b[w].call(l, a, p); w++);
        });
        return f.isFunction(n.opts.start) && n.opts.start.call(a, n), f.fx.timer(f.extend(m, {
            elem: a,
            anim: n,
            queue: n.opts.queue
        })), n.progress(n.opts.progress).done(n.opts.done, n.opts.complete).fail(n.opts.fail).always(n.opts.always)
    }

    function n(a, b, q, c, f) {
        return new n.prototype.init(a, b, q, c, f)
    }

    function s(a, b) {
        var q, c = {
                height: a
            },
            f = 0;
        for (b = b ? 1 : 0; 4 > f; f += 2 - b) q = ra[f], c["margin" + q] = c["padding" + q] = a;
        return b && (c.opacity = c.width = a), c
    }

    function g(a) {
        return f.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var m, r, M = typeof b,
        E = a.document,
        Ma = a.location,
        ia = a.jQuery,
        Ec = a.$,
        Ta = {},
        Aa = [],
        Qb = Aa.concat,
        lb = Aa.push,
        va = Aa.slice,
        Rb = Aa.indexOf,
        Fc = Ta.toString,
        Na = Ta.hasOwnProperty,
        mb = "1.9.1".trim,
        f = function(a, b) {
            return new f.fn.init(a, b,
                r)
        },
        Ua = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ga = /\S+/g,
        Gc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Hc = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        Sb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Ic = /^[\],:{}\s]*$/,
        Jc = /(?:^|:|,)(?:\s*\[)+/g,
        Kc = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Lc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        Mc = /^-ms-/,
        Nc = /-([\da-z])/gi,
        Oc = function(a, b) {
            return b.toUpperCase()
        },
        la = function(a) {
            (E.addEventListener || "load" === a.type || "complete" === E.readyState) && (Tb(), f.ready())
        },
        Tb = function() {
            E.addEventListener ?
                (E.removeEventListener("DOMContentLoaded", la, !1), a.removeEventListener("load", la, !1)) : (E.detachEvent("onreadystatechange", la), a.detachEvent("onload", la))
        };
    f.fn = f.prototype = {
        jquery: "1.9.1",
        constructor: f,
        init: function(a, w, q) {
            var c, g;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : Hc.exec(a), !c || !c[1] && w) return !w || w.jquery ? (w || q).find(a) : this.constructor(w).find(a);
                if (c[1]) {
                    if (w = w instanceof f ? w[0] : w, f.merge(this, f.parseHTML(c[1],
                            w && w.nodeType ? w.ownerDocument || w : E, !0)), Sb.test(c[1]) && f.isPlainObject(w))
                        for (c in w) f.isFunction(this[c]) ? this[c](w[c]) : this.attr(c, w[c]);
                    return this
                }
                if (g = E.getElementById(c[2]), g && g.parentNode) {
                    if (g.id !== c[2]) return q.find(a);
                    this.length = 1;
                    this[0] = g
                }
                return this.context = E, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : f.isFunction(a) ? q.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), f.makeArray(a, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return va.call(this)
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function(a) {
            a = f.merge(this.constructor(), a);
            return a.prevObject = this, a.context = this.context, a
        },
        each: function(a, b) {
            return f.each(this, a, b)
        },
        ready: function(a) {
            return f.ready.promise().done(a), this
        },
        slice: function() {
            return this.pushStack(va.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a +
                (0 > a ? b : 0);
            return this.pushStack(0 <= a && b > a ? [this[a]] : [])
        },
        map: function(a) {
            return this.pushStack(f.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: lb,
        sort: [].sort,
        splice: [].splice
    };
    f.fn.init.prototype = f.fn;
    f.extend = f.fn.extend = function() {
        var a, w, c, T, g, d, e = arguments[0] || {},
            j = 1,
            m = arguments.length,
            n = !1;
        "boolean" == typeof e && (n = e, e = arguments[1] || {}, j = 2);
        "object" == typeof e || f.isFunction(e) || (e = {});
        for (m === j && (e = this, --j); m > j; j++)
            if (null !=
                (g = arguments[j]))
                for (T in g) a = e[T], c = g[T], e !== c && (n && c && (f.isPlainObject(c) || (w = f.isArray(c))) ? (w ? (w = !1, d = a && f.isArray(a) ? a : []) : d = a && f.isPlainObject(a) ? a : {}, e[T] = f.extend(n, d, c)) : c !== b && (e[T] = c));
        return e
    };
    f.extend({
        noConflict: function(p) {
            return a.$ === f && (a.$ = Ec), p && a.jQuery === f && (a.jQuery = ia), f
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? f.readyWait++ : f.ready(!0)
        },
        ready: function(a) {
            if (!0 === a ? !--f.readyWait : !f.isReady) {
                if (!E.body) return setTimeout(f.ready);
                f.isReady = !0;
                !0 !== a && 0 < --f.readyWait ||
                    (m.resolveWith(E, [f]), f.fn.trigger && f(E).trigger("ready").off("ready"))
            }
        },
        isFunction: function(a) {
            return "function" === f.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === f.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? Ta[Fc.call(a)] || "object" : typeof a
        },
        isPlainObject: function(a) {
            if (!a || "object" !== f.type(a) || a.nodeType || f.isWindow(a)) return !1;
            try {
                if (a.constructor && !Na.call(a, "constructor") && !Na.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (w) {
                return !1
            }
            for (var c in a);
            return c === b || Na.call(a, c)
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
        },
        error: function(a) {
            throw Error(a);
        },
        parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1);
            b = b || E;
            var T = Sb.exec(a);
            c = !c && [];
            return T ? [b.createElement(T[1])] : (T = f.buildFragment([a], b, c), c && f(c).remove(), f.merge([], T.childNodes))
        },
        parseJSON: function(p) {
            return a.JSON &&
                a.JSON.parse ? a.JSON.parse(p) : null === p ? p : "string" == typeof p && (p = f.trim(p), p && Ic.test(p.replace(Kc, "@").replace(Lc, "]").replace(Jc, ""))) ? Function("return " + p)() : (f.error("Invalid JSON: " + p), b)
        },
        parseXML: function(p) {
            var w, c;
            if (!p || "string" != typeof p) return null;
            try {
                a.DOMParser ? (c = new DOMParser, w = c.parseFromString(p, "text/xml")) : (w = new ActiveXObject("Microsoft.XMLDOM"), w.async = "false", w.loadXML(p))
            } catch (T) {
                w = b
            }
            return w && w.documentElement && !w.getElementsByTagName("parsererror").length || f.error("Invalid XML: " +
                p), w
        },
        noop: function() {},
        globalEval: function(p) {
            p && f.trim(p) && (a.execScript || function(p) {
                a.eval.call(a, p)
            })(p)
        },
        camelCase: function(a) {
            return a.replace(Mc, "ms-").replace(Nc, Oc)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, q) {
            var f, g = 0,
                d = a.length,
                e = c(a);
            if (q)
                if (e)
                    for (; d > g && !(f = b.apply(a[g], q), !1 === f); g++);
                else
                    for (g in a) {
                        if (f = b.apply(a[g], q), !1 === f) break
                    } else if (e)
                        for (; d > g && !(f = b.call(a[g], g, a[g]), !1 === f); g++);
                    else
                        for (g in a)
                            if (f = b.call(a[g],
                                    g, a[g]), !1 === f) break;
            return a
        },
        trim: mb && !mb.call("\ufeff\u00a0") ? function(a) {
            return null == a ? "" : mb.call(a)
        } : function(a) {
            return null == a ? "" : (a + "").replace(Gc, "")
        },
        makeArray: function(a, b) {
            var q = b || [];
            return null != a && (c(Object(a)) ? f.merge(q, "string" == typeof a ? [a] : a) : lb.call(q, a)), q
        },
        inArray: function(a, b, c) {
            var f;
            if (b) {
                if (Rb) return Rb.call(b, a, c);
                f = b.length;
                for (c = c ? 0 > c ? Math.max(0, f + c) : c : 0; f > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, w) {
            var c = w.length,
                f = a.length,
                g = 0;
            if ("number" == typeof c)
                for (; c >
                    g; g++) a[f++] = w[g];
            else
                for (; w[g] !== b;) a[f++] = w[g++];
            return a.length = f, a
        },
        grep: function(a, b, c) {
            var f, g = [],
                d = 0,
                e = a.length;
            for (c = !!c; e > d; d++) f = !!b(a[d], d), c !== f && g.push(a[d]);
            return g
        },
        map: function(a, b, q) {
            var f, g = 0,
                d = a.length,
                e = [];
            if (c(a))
                for (; d > g; g++) f = b(a[g], g, q), null != f && (e[e.length] = f);
            else
                for (g in a) f = b(a[g], g, q), null != f && (e[e.length] = f);
            return Qb.apply([], e)
        },
        guid: 1,
        proxy: function(a, w) {
            var c, g, d;
            return "string" == typeof w && (d = a[w], w = a, a = d), f.isFunction(a) ? (c = va.call(arguments, 2), g = function() {
                return a.apply(w ||
                    this, c.concat(va.call(arguments)))
            }, g.guid = a.guid = a.guid || f.guid++, g) : b
        },
        access: function(a, c, q, g, d, e, j) {
            var m = 0,
                n = a.length,
                r = null == q;
            if ("object" === f.type(q))
                for (m in d = !0, q) f.access(a, c, m, q[m], !0, e, j);
            else if (g !== b && (d = !0, f.isFunction(g) || (j = !0), r && (j ? (c.call(a, g), c = null) : (r = c, c = function(a, p, b) {
                    return r.call(f(a), b)
                })), c))
                for (; n > m; m++) c(a[m], q, j ? g : g.call(a[m], m, c(a[m], q)));
            return d ? a : r ? c.call(a) : n ? c(a[0], q) : e
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    f.ready.promise = function(p) {
        if (!m)
            if (m = f.Deferred(),
                "complete" === E.readyState) setTimeout(f.ready);
            else if (E.addEventListener) E.addEventListener("DOMContentLoaded", la, !1), a.addEventListener("load", la, !1);
        else {
            E.attachEvent("onreadystatechange", la);
            a.attachEvent("onload", la);
            var b = !1;
            try {
                b = null == a.frameElement && E.documentElement
            } catch (c) {}
            b && b.doScroll && function F() {
                if (!f.isReady) {
                    try {
                        b.doScroll("left")
                    } catch (a) {
                        return setTimeout(F, 50)
                    }
                    Tb();
                    f.ready()
                }
            }()
        }
        return m.promise(p)
    };
    f.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function(a, b) {
            Ta["[object " + b + "]"] = b.toLowerCase()
        });
    r = f(E);
    var Ub = {};
    f.Callbacks = function(a) {
        var c;
        if ("string" == typeof a) {
            if (!(c = Ub[a])) {
                c = a;
                var q = Ub[c] = {};
                c = (f.each(c.match(ga) || [], function(a, p) {
                    q[p] = !0
                }), q)
            }
        } else c = f.extend({}, a);
        a = c;
        var g, d, e, j, m, n, r = [],
            k = !a.once && [],
            h = function(b) {
                d = a.memory && b;
                e = !0;
                m = n || 0;
                n = 0;
                j = r.length;
                for (g = !0; r && j > m; m++)
                    if (!1 === r[m].apply(b[0], b[1]) && a.stopOnFalse) {
                        d = !1;
                        break
                    }
                g = !1;
                r && (k ? k.length && h(k.shift()) : d ? r = [] : s.disable())
            },
            s = {
                add: function() {
                    if (r) {
                        var b = r.length;
                        (function Dc(b) {
                            f.each(b,
                                function(b, c) {
                                    var w = f.type(c);
                                    "function" === w ? a.unique && s.has(c) || r.push(c) : c && c.length && "string" !== w && Dc(c)
                                })
                        })(arguments);
                        g ? j = r.length : d && (n = b, h(d))
                    }
                    return this
                },
                remove: function() {
                    return r && f.each(arguments, function(a, p) {
                        for (var b; - 1 < (b = f.inArray(p, r, b));) r.splice(b, 1), g && (j >= b && j--, m >= b && m--)
                    }), this
                },
                has: function(a) {
                    return a ? -1 < f.inArray(a, r) : !(!r || !r.length)
                },
                empty: function() {
                    return r = [], this
                },
                disable: function() {
                    return r = k = d = b, this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return k = b, d || s.disable(),
                        this
                },
                locked: function() {
                    return !k
                },
                fireWith: function(a, p) {
                    return p = p || [], p = [a, p.slice ? p.slice() : p], !r || e && !k || (g ? k.push(p) : h(p)), this
                },
                fire: function() {
                    return s.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!e
                }
            };
        return s
    };
    f.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", f.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", f.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", f.Callbacks("memory")]
                ],
                c = "pending",
                g = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return d.done(arguments).fail(arguments),
                            this
                    },
                    then: function() {
                        var a = arguments;
                        return f.Deferred(function(p) {
                            f.each(b, function(b, c) {
                                var w = c[0],
                                    q = f.isFunction(a[b]) && a[b];
                                d[c[1]](function() {
                                    var a = q && q.apply(this, arguments);
                                    a && f.isFunction(a.promise) ? a.promise().done(p.resolve).fail(p.reject).progress(p.notify) : p[w + "With"](this === g ? p.promise() : this, q ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? f.extend(a, g) : g
                    }
                },
                d = {};
            return g.pipe = g.then, f.each(b, function(a, p) {
                var f = p[2],
                    e = p[3];
                g[p[1]] = f.add;
                e && f.add(function() {
                    c =
                        e
                }, b[1 ^ a][2].disable, b[2][2].lock);
                d[p[0]] = function() {
                    return d[p[0] + "With"](this === d ? g : this, arguments), this
                };
                d[p[0] + "With"] = f.fireWith
            }), g.promise(d), a && a.call(d, d), d
        },
        when: function(a) {
            var b = 0,
                c = va.call(arguments),
                g = c.length,
                d = 1 !== g || a && f.isFunction(a.promise) ? g : 0,
                e = 1 === d ? a : f.Deferred(),
                j = function(a, p, b) {
                    return function(c) {
                        p[a] = this;
                        b[a] = 1 < arguments.length ? va.call(arguments) : c;
                        b === m ? e.notifyWith(p, b) : --d || e.resolveWith(p, b)
                    }
                },
                m, n, r;
            if (1 < g) {
                m = Array(g);
                n = Array(g);
                for (r = Array(g); g > b; b++) c[b] && f.isFunction(c[b].promise) ?
                    c[b].promise().done(j(b, r, c)).fail(e.reject).progress(j(b, n, m)) : --d
            }
            return d || e.resolveWith(r, c), e.promise()
        }
    });
    var Pc = f,
        nb;
    var S, Va, ma, W, Wa, Xa, Ya, ob, Vb, pb, J = E.createElement("div");
    if (J.setAttribute("className", "t"), J.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", Va = J.getElementsByTagName("*"), ma = J.getElementsByTagName("a")[0], !Va || !ma || !Va.length) nb = {};
    else {
        Wa = E.createElement("select");
        Ya = Wa.appendChild(E.createElement("option"));
        W = J.getElementsByTagName("input")[0];
        ma.style.cssText = "top:1px;float:left;opacity:.5";
        S = {
            getSetAttribute: "t" !== J.className,
            leadingWhitespace: 3 === J.firstChild.nodeType,
            tbody: !J.getElementsByTagName("tbody").length,
            htmlSerialize: !!J.getElementsByTagName("link").length,
            style: /top/.test(ma.getAttribute("style")),
            hrefNormalized: "/a" === ma.getAttribute("href"),
            opacity: /^0.5/.test(ma.style.opacity),
            cssFloat: !!ma.style.cssFloat,
            checkOn: !!W.value,
            optSelected: Ya.selected,
            enctype: !!E.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== E.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === E.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        W.checked = !0;
        S.noCloneChecked = W.cloneNode(!0).checked;
        Wa.disabled = !0;
        S.optDisabled = !Ya.disabled;
        try {
            delete J.test
        } catch (Fd) {
            S.deleteExpando = !1
        }
        W = E.createElement("input");
        W.setAttribute("value", "");
        S.input = "" === W.getAttribute("value");
        W.value = "t";
        W.setAttribute("type", "radio");
        S.radioValue = "t" === W.value;
        W.setAttribute("checked",
            "t");
        W.setAttribute("name", "t");
        Xa = E.createDocumentFragment();
        Xa.appendChild(W);
        S.appendChecked = W.checked;
        S.checkClone = Xa.cloneNode(!0).cloneNode(!0).lastChild.checked;
        J.attachEvent && (J.attachEvent("onclick", function() {
            S.noCloneEvent = !1
        }), J.cloneNode(!0).click());
        for (pb in {
                submit: !0,
                change: !0,
                focusin: !0
            }) J.setAttribute(ob = "on" + pb, "t"), S[pb + "Bubbles"] = ob in a || !1 === J.attributes[ob].expando;
        nb = (J.style.backgroundClip = "content-box", J.cloneNode(!0).style.backgroundClip = "", S.clearCloneStyle = "content-box" ===
            J.style.backgroundClip, f(function() {
                var p, b, c, f = E.getElementsByTagName("body")[0];
                f && (p = E.createElement("div"), p.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", f.appendChild(p).appendChild(J), J.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c = J.getElementsByTagName("td"), c[0].style.cssText = "padding:0;margin:0;border:0;display:none", Vb = 0 === c[0].offsetHeight, c[0].style.display = "", c[1].style.display = "none", S.reliableHiddenOffsets = Vb && 0 === c[0].offsetHeight,
                    J.innerHTML = "", J.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", S.boxSizing = 4 === J.offsetWidth, S.doesNotIncludeMarginInBodyOffset = 1 !== f.offsetTop, a.getComputedStyle && (S.pixelPosition = "1%" !== (a.getComputedStyle(J, null) || {}).top, S.boxSizingReliable = "4px" === (a.getComputedStyle(J, null) || {
                            width: "4px"
                        }).width, b = J.appendChild(E.createElement("div")), b.style.cssText = J.style.cssText =
                        "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", b.style.marginRight = b.style.width = "0", J.style.width = "1px", S.reliableMarginRight = !parseFloat((a.getComputedStyle(b, null) || {}).marginRight)), typeof J.style.zoom !== M && (J.innerHTML = "", J.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;width:1px;padding:1px;display:inline;zoom:1", S.inlineBlockNeedsLayout =
                        3 === J.offsetWidth, J.style.display = "block", J.innerHTML = "<div></div>", J.firstChild.style.width = "5px", S.shrinkWrapBlocks = 3 !== J.offsetWidth, S.inlineBlockNeedsLayout && (f.style.zoom = 1)), f.removeChild(p), J = null)
            }), Va = Wa = Xa = Ya = ma = W = null, S)
    }
    Pc.support = nb;
    var yc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        xc = /([A-Z])/g;
    f.extend({
        cache: {},
        expando: "jQuery" + ("1.9.1" + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return a = a.nodeType ? f.cache[a[f.expando]] :
                a[f.expando], !!a && !v(a)
        },
        data: function(a, b, c) {
            return e(a, b, c)
        },
        removeData: function(a, b) {
            return d(a, b)
        },
        _data: function(a, b, c) {
            return e(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return d(a, b, !0)
        },
        acceptData: function(a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
            var b = a.nodeName && f.noData[a.nodeName.toLowerCase()];
            return !b || !0 !== b && a.getAttribute("classid") === b
        }
    });
    f.fn.extend({
        data: function(a, c) {
            var q, g, d = this[0],
                e = 0,
                j = null;
            if (a === b) {
                if (this.length && (j = f.data(d), 1 === d.nodeType && !f._data(d, "parsedAttrs"))) {
                    for (q =
                        d.attributes; q.length > e; e++) g = q[e].name, g.indexOf("data-") || (g = f.camelCase(g.slice(5)), k(d, g, j[g]));
                    f._data(d, "parsedAttrs", !0)
                }
                return j
            }
            return "object" == typeof a ? this.each(function() {
                f.data(this, a)
            }) : f.access(this, function(c) {
                return c === b ? d ? k(d, a, f.data(d, a)) : null : (this.each(function() {
                    f.data(this, a, c)
                }), b)
            }, null, c, 1 < arguments.length, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                f.removeData(this, a)
            })
        }
    });
    f.extend({
        queue: function(a, c, q) {
            var g;
            return a ? (c = (c || "fx") + "queue", g = f._data(a,
                c), q && (!g || f.isArray(q) ? g = f._data(a, c, f.makeArray(q)) : g.push(q)), g || []) : b
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                g = c.length,
                d = c.shift(),
                e = f._queueHooks(a, b),
                j = function() {
                    f.dequeue(a, b)
                };
            "inprogress" === d && (d = c.shift(), g--);
            (e.cur = d) && ("fx" === b && c.unshift("inprogress"), delete e.stop, d.call(a, j, e));
            !g && e && e.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return f._data(a, c) || f._data(a, c, {
                empty: f.Callbacks("once memory").add(function() {
                    f._removeData(a, b + "queue");
                    f._removeData(a,
                        c)
                })
            })
        }
    });
    f.fn.extend({
        queue: function(a, c) {
            var q = 2;
            return "string" != typeof a && (c = a, a = "fx", q--), q > arguments.length ? f.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = f.queue(this, a, c);
                f._queueHooks(this, a);
                "fx" === a && "inprogress" !== b[0] && f.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                f.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var w = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(w)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a ||
                "fx", [])
        },
        promise: function(a, c) {
            var q, g = 1,
                d = f.Deferred(),
                e = this,
                j = this.length,
                m = function() {
                    --g || d.resolveWith(e, [e])
                };
            "string" != typeof a && (c = a, a = b);
            for (a = a || "fx"; j--;)(q = f._data(e[j], a + "queueHooks")) && q.empty && (g++, q.empty.add(m));
            return m(), d.promise(c)
        }
    });
    var Ca, Wb, qb = /[\t\r\n]/g,
        Qc = /\r/g,
        Rc = /^(?:input|select|textarea|button|object)$/i,
        Sc = /^(?:a|area)$/i,
        Xb = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        rb = /^(?:checked|selected)$/i,
        wa = f.support.getSetAttribute,
        sb = f.support.input;
    f.fn.extend({
        attr: function(a, b) {
            return f.access(this, f.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                f.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return f.access(this, f.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            return a = f.propFix[a] || a, this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, g, d, e, j = 0,
                m = this.length;
            b = "string" == typeof a && a;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).addClass(a.call(this,
                    b, this.className))
            });
            if (b)
                for (b = (a || "").match(ga) || []; m > j; j++)
                    if (c = this[j], g = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(qb, " ") : " ")) {
                        for (e = 0; d = b[e++];) 0 > g.indexOf(" " + d + " ") && (g += d + " ");
                        c.className = f.trim(g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, g, d, e, j = 0,
                m = this.length;
            b = 0 === arguments.length || "string" == typeof a && a;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (b)
                for (b = (a || "").match(ga) || []; m > j; j++)
                    if (c = this[j], g = 1 ===
                        c.nodeType && (c.className ? (" " + c.className + " ").replace(qb, " ") : "")) {
                        for (e = 0; d = b[e++];)
                            for (; 0 <= g.indexOf(" " + d + " ");) g = g.replace(" " + d + " ", " ");
                        c.className = a ? f.trim(g) : ""
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                g = "boolean" == typeof b;
            return f.isFunction(a) ? this.each(function(c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c)
                    for (var d, e = 0, j = f(this), m = b, n = a.match(ga) || []; d = n[e++];) m = g ? m : !j.hasClass(d), j[m ? "addClass" : "removeClass"](d);
                else(c ===
                    M || "boolean" === c) && (this.className && f._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : f._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var b = 0, c = this.length; c > b; b++)
                if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(qb, " ").indexOf(a)) return !0;
            return !1
        },
        val: function(a) {
            var c, q, g, d = this[0];
            if (arguments.length) return g = f.isFunction(a), this.each(function(c) {
                var w, d = f(this);
                1 === this.nodeType && (w = g ? a.call(this, c, d.val()) : a, null ==
                    w ? w = "" : "number" == typeof w ? w += "" : f.isArray(w) && (w = f.map(w, function(a) {
                        return null == a ? "" : a + ""
                    })), q = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], q && "set" in q && q.set(this, w, "value") !== b || (this.value = w))
            });
            if (d) return q = f.valHooks[d.type] || f.valHooks[d.nodeName.toLowerCase()], q && "get" in q && (c = q.get(d, "value")) !== b ? c : (c = d.value, "string" == typeof c ? c.replace(Qc, "") : null == c ? "" : c)
        }
    });
    f.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    for (var b, c = a.options, g = a.selectedIndex, d = "select-one" === a.type || 0 > g, e = d ? null : [], j = d ? g + 1 : c.length, m = 0 > g ? j : d ? g : 0; j > m; m++)
                        if (b = c[m], !(!b.selected && m !== g || (f.support.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && f.nodeName(b.parentNode, "optgroup"))) {
                            if (a = f(b).val(), d) return a;
                            e.push(a)
                        }
                    return e
                },
                set: function(a, b) {
                    var c = f.makeArray(b);
                    return f(a).find("option").each(function() {
                        this.selected = 0 <= f.inArray(f(this).val(), c)
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attr: function(a, c, q) {
            var g, d, e, j = a.nodeType;
            if (a && 3 !== j && 8 !== j && 2 !== j) return typeof a.getAttribute === M ? f.prop(a, c, q) : (d = 1 !== j || !f.isXMLDoc(a), d && (c = c.toLowerCase(), g = f.attrHooks[c] || (Xb.test(c) ? Wb : Ca)), q === b ? g && d && "get" in g && null !== (e = g.get(a, c)) ? e : (typeof a.getAttribute !== M && (e = a.getAttribute(c)), null == e ? b : e) : null !== q ? g && d && "set" in g && (e = g.set(a, q, c)) !== b ? e : (a.setAttribute(c, q + ""), q) : (f.removeAttr(a, c), b))
        },
        removeAttr: function(a, b) {
            var c, g, d = 0,
                e = b && b.match(ga);
            if (e && 1 === a.nodeType)
                for (; c =
                    e[d++];) g = f.propFix[c] || c, Xb.test(c) ? !wa && rb.test(c) ? a[f.camelCase("default-" + c)] = a[g] = !1 : a[g] = !1 : f.attr(a, c, ""), a.removeAttribute(wa ? c : g)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!f.support.radioValue && "radio" === b && f.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, q) {
            var g, d, e, j = a.nodeType;
            if (a && 3 !== j && 8 !== j && 2 !== j) return e = 1 !== j || !f.isXMLDoc(a), e && (c = f.propFix[c] || c, d = f.propHooks[c]), q !== b ? d && "set" in d && (g = d.set(a, q, c)) !== b ? g : a[c] = q : d && "get" in d && null !== (g = d.get(a, c)) ? g : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : Rc.test(a.nodeName) || Sc.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    });
    Wb = {
        get: function(a, c) {
            var q = f.prop(a,
                    c),
                g = "boolean" == typeof q && a.getAttribute(c);
            return (q = "boolean" == typeof q ? sb && wa ? null != g : rb.test(c) ? a[f.camelCase("default-" + c)] : !!g : a.getAttributeNode(c)) && !1 !== q.value ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            return !1 === b ? f.removeAttr(a, c) : sb && wa || !rb.test(c) ? a.setAttribute(!wa && f.propFix[c] || c, c) : a[f.camelCase("default-" + c)] = a[c] = !0, c
        }
    };
    sb && wa || (f.attrHooks.value = {
        get: function(a, c) {
            var q = a.getAttributeNode(c);
            return f.nodeName(a, "input") ? a.defaultValue : q && q.specified ? q.value : b
        },
        set: function(a, c, q) {
            return f.nodeName(a,
                "input") ? (a.defaultValue = c, b) : Ca && Ca.set(a, c, q)
        }
    });
    wa || (Ca = f.valHooks.button = {
        get: function(a, c) {
            var f = a.getAttributeNode(c);
            return f && ("id" === c || "name" === c || "coords" === c ? "" !== f.value : f.specified) ? f.value : b
        },
        set: function(a, c, f) {
            var g = a.getAttributeNode(f);
            return g || a.setAttributeNode(g = a.ownerDocument.createAttribute(f)), g.value = c += "", "value" === f || c === a.getAttribute(f) ? c : b
        }
    }, f.attrHooks.contenteditable = {
        get: Ca.get,
        set: function(a, b, c) {
            Ca.set(a, "" === b ? !1 : b, c)
        }
    }, f.each(["width", "height"], function(a, c) {
        f.attrHooks[c] =
            f.extend(f.attrHooks[c], {
                set: function(a, p) {
                    return "" === p ? (a.setAttribute(c, "auto"), p) : b
                }
            })
    }));
    f.support.hrefNormalized || (f.each(["href", "src", "width", "height"], function(a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function(a) {
                a = a.getAttribute(c, 2);
                return null == a ? b : a
            }
        })
    }), f.each(["href", "src"], function(a, b) {
        f.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }));
    f.support.style || (f.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || b
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(a) {
            a = a.parentNode;
            return a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex), null
        }
    }));
    f.support.enctype || (f.propFix.enctype = "encoding");
    f.support.checkOn || f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            get: function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
        }
    });
    f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function(a, c) {
                return f.isArray(c) ?
                    a.checked = 0 <= f.inArray(f(a).val(), c) : b
            }
        })
    });
    var tb = /^(?:input|select|textarea)$/i,
        Tc = /^key/,
        Uc = /^(?:mouse|contextmenu)|click/,
        Yb = /^(?:focusinfocus|focusoutblur)$/,
        Zb = /^([^.]*)(?:\.(.+)|)$/;
    f.event = {
        global: {},
        add: function(a, c, g, d, e) {
            var j, m, n, r, k, h, s, l, E;
            if (n = f._data(a)) {
                g.handler && (r = g, g = r.handler, e = r.selector);
                g.guid || (g.guid = f.guid++);
                (m = n.events) || (m = n.events = {});
                (k = n.handle) || (k = n.handle = function(a) {
                        return typeof f === M || a && f.event.triggered === a.type ? b : f.event.dispatch.apply(k.elem, arguments)
                    },
                    k.elem = a);
                c = (c || "").match(ga) || [""];
                for (n = c.length; n--;) j = Zb.exec(c[n]) || [], l = h = j[1], E = (j[2] || "").split(".").sort(), j = f.event.special[l] || {}, l = (e ? j.delegateType : j.bindType) || l, j = f.event.special[l] || {}, h = f.extend({
                    type: l,
                    origType: h,
                    data: d,
                    handler: g,
                    guid: g.guid,
                    selector: e,
                    needsContext: e && f.expr.match.needsContext.test(e),
                    namespace: E.join(".")
                }, r), (s = m[l]) || (s = m[l] = [], s.delegateCount = 0, j.setup && !1 !== j.setup.call(a, d, E, k) || (a.addEventListener ? a.addEventListener(l, k, !1) : a.attachEvent && a.attachEvent("on" +
                    l, k))), j.add && (j.add.call(a, h), h.handler.guid || (h.handler.guid = g.guid)), e ? s.splice(s.delegateCount++, 0, h) : s.push(h), f.event.global[l] = !0;
                a = null
            }
        },
        remove: function(a, b, c, g, d) {
            var e, j, m, n, r, k, h, s, l, M, E, v = f.hasData(a) && f._data(a);
            if (v && (k = v.events)) {
                b = (b || "").match(ga) || [""];
                for (r = b.length; r--;)
                    if (m = Zb.exec(b[r]) || [], l = E = m[1], M = (m[2] || "").split(".").sort(), l) {
                        h = f.event.special[l] || {};
                        l = (g ? h.delegateType : h.bindType) || l;
                        s = k[l] || [];
                        m = m[2] && RegExp("(^|\\.)" + M.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (n = e = s.length; e--;) j =
                            s[e], !d && E !== j.origType || c && c.guid !== j.guid || m && !m.test(j.namespace) || g && g !== j.selector && ("**" !== g || !j.selector) || (s.splice(e, 1), j.selector && s.delegateCount--, h.remove && h.remove.call(a, j));
                        n && !s.length && (h.teardown && !1 !== h.teardown.call(a, M, v.handle) || f.removeEvent(a, l, v.handle), delete k[l])
                    } else
                        for (l in k) f.event.remove(a, l + b[r], c, g, !0);
                f.isEmptyObject(k) && (delete v.handle, f._removeData(a, "events"))
            }
        },
        trigger: function(p, c, g, d) {
            var e, j, m, n, r, k, h = [g || E],
                s = Na.call(p, "type") ? p.type : p;
            k = Na.call(p, "namespace") ?
                p.namespace.split(".") : [];
            if (m = e = g = g || E, 3 !== g.nodeType && 8 !== g.nodeType && !Yb.test(s + f.event.triggered) && (0 <= s.indexOf(".") && (k = s.split("."), s = k.shift(), k.sort()), j = 0 > s.indexOf(":") && "on" + s, p = p[f.expando] ? p : new f.Event(s, "object" == typeof p && p), p.isTrigger = !0, p.namespace = k.join("."), p.namespace_re = p.namespace ? RegExp("(^|\\.)" + k.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, p.result = b, p.target || (p.target = g), c = null == c ? [p] : f.makeArray(c, [p]), r = f.event.special[s] || {}, d || !r.trigger || !1 !== r.trigger.apply(g, c))) {
                if (!d &&
                    !r.noBubble && !f.isWindow(g)) {
                    n = r.delegateType || s;
                    for (Yb.test(n + s) || (m = m.parentNode); m; m = m.parentNode) h.push(m), e = m;
                    e === (g.ownerDocument || E) && h.push(e.defaultView || e.parentWindow || a)
                }
                for (k = 0;
                    (m = h[k++]) && !p.isPropagationStopped();) p.type = 1 < k ? n : r.bindType || s, (e = (f._data(m, "events") || {})[p.type] && f._data(m, "handle")) && e.apply(m, c), (e = j && m[j]) && f.acceptData(m) && e.apply && !1 === e.apply(m, c) && p.preventDefault();
                if (p.type = s, !(d || p.isDefaultPrevented() || r._default && !1 !== r._default.apply(g.ownerDocument, c) ||
                        "click" === s && f.nodeName(g, "a") || !f.acceptData(g) || !j || !g[s] || f.isWindow(g))) {
                    (e = g[j]) && (g[j] = null);
                    f.event.triggered = s;
                    try {
                        g[s]()
                    } catch (l) {}
                    f.event.triggered = b;
                    e && (g[j] = e)
                }
                return p.result
            }
        },
        dispatch: function(a) {
            a = f.event.fix(a);
            var c, g, d, e, j, m = [],
                n = va.call(arguments);
            c = (f._data(this, "events") || {})[a.type] || [];
            var r = f.event.special[a.type] || {};
            if (n[0] = a, a.delegateTarget = this, !r.preDispatch || !1 !== r.preDispatch.call(this, a)) {
                m = f.event.handlers.call(this, a, c);
                for (c = 0;
                    (e = m[c++]) && !a.isPropagationStopped();) {
                    a.currentTarget =
                        e.elem;
                    for (j = 0;
                        (d = e.handlers[j++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, g = ((f.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, n), g !== b && !1 === (a.result = g) && (a.preventDefault(), a.stopPropagation()))
                }
                return r.postDispatch && r.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, c) {
            var g, d, e, j, m = [],
                n = c.delegateCount,
                r = a.target;
            if (n && r.nodeType && (!a.button || "click" !== a.type))
                for (; r != this; r = r.parentNode ||
                    this)
                    if (1 === r.nodeType && (!0 !== r.disabled || "click" !== a.type)) {
                        e = [];
                        for (j = 0; n > j; j++) d = c[j], g = d.selector + " ", e[g] === b && (e[g] = d.needsContext ? 0 <= f(g, this).index(r) : f.find(g, this, null, [r]).length), e[g] && e.push(d);
                        e.length && m.push({
                            elem: r,
                            handlers: e
                        })
                    }
            return c.length > n && m.push({
                elem: this,
                handlers: c.slice(n)
            }), m
        },
        fix: function(a) {
            if (a[f.expando]) return a;
            var b, c, g;
            b = a.type;
            var d = a,
                e = this.fixHooks[b];
            e || (this.fixHooks[b] = e = Uc.test(b) ? this.mouseHooks : Tc.test(b) ? this.keyHooks : {});
            g = e.props ? this.props.concat(e.props) :
                this.props;
            a = new f.Event(d);
            for (b = g.length; b--;) c = g[b], a[c] = d[c];
            return a.target || (a.target = d.srcElement || E), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, e.filter ? e.filter(a, d) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                    a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var f, g, d, e = c.button,
                    j = c.fromElement;
                return null == a.pageX && null != c.clientX && (g = a.target.ownerDocument || E, d = g.documentElement, f = g.body, a.pageX = c.clientX + (d && d.scrollLeft || f && f.scrollLeft || 0) - (d && d.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (d && d.scrollTop || f && f.scrollTop || 0) - (d && d.clientTop || f && f.clientTop || 0)), !a.relatedTarget && j && (a.relatedTarget =
                    j === a.target ? c.toElement : j), a.which || e === b || (a.which = 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    return f.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : b
                }
            },
            focus: {
                trigger: function() {
                    if (this !== E.activeElement && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === E.activeElement && this.blur ? (this.blur(), !1) : b
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !==
                        b && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, g) {
            a = f.extend(new f.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            g ? f.event.trigger(a, null, b) : f.event.dispatch.call(b, a);
            a.isDefaultPrevented() && c.preventDefault()
        }
    };
    f.removeEvent = E.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        b = "on" + b;
        a.detachEvent && (typeof a[b] === M && (a[b] = null), a.detachEvent(b, c))
    };
    f.Event = function(a, c) {
        return this instanceof f.Event ? (a && a.type ? (this.originalEvent =
            a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? l : H) : this.type = a, c && f.extend(this, c), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0, b) : new f.Event(a, c)
    };
    f.Event.prototype = {
        isDefaultPrevented: H,
        isPropagationStopped: H,
        isImmediatePropagationStopped: H,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = l;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a =
                this.originalEvent;
            this.isPropagationStopped = l;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l;
            this.stopPropagation()
        }
    };
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        f.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, p = a.relatedTarget,
                    g = a.handleObj;
                return (!p || p !== this && !f.contains(this, p)) && (a.type = g.origType, c = g.handler.apply(this, arguments), a.type = b), c
            }
        }
    });
    f.support.submitBubbles ||
        (f.event.special.submit = {
            setup: function() {
                return f.nodeName(this, "form") ? !1 : (f.event.add(this, "click._submit keypress._submit", function(a) {
                    a = a.target;
                    (a = f.nodeName(a, "input") || f.nodeName(a, "button") ? a.form : b) && !f._data(a, "submitBubbles") && (f.event.add(a, "submit._submit", function(a) {
                        a._submit_bubble = !0
                    }), f._data(a, "submitBubbles", !0))
                }), b)
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                return f.nodeName(this,
                    "form") ? !1 : (f.event.remove(this, "._submit"), b)
            }
        });
    f.support.changeBubbles || (f.event.special.change = {
        setup: function() {
            return tb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (f.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), f.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1);
                f.event.simulate("change", this, a, !0)
            })), !1) : (f.event.add(this, "beforeactivate._change",
                function(a) {
                    a = a.target;
                    tb.test(a.nodeName) && !f._data(a, "changeBubbles") && (f.event.add(a, "change._change", function(a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || f.event.simulate("change", this.parentNode, a, !0)
                    }), f._data(a, "changeBubbles", !0))
                }), b)
        },
        handle: function(a) {
            var c = a.target;
            return this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type ? a.handleObj.handler.apply(this, arguments) : b
        },
        teardown: function() {
            return f.event.remove(this, "._change"), !tb.test(this.nodeName)
        }
    });
    f.support.focusinBubbles ||
        f.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = 0,
                g = function(a) {
                    f.event.simulate(b, a.target, f.event.fix(a), !0)
                };
            f.event.special[b] = {
                setup: function() {
                    0 === c++ && E.addEventListener(a, g, !0)
                },
                teardown: function() {
                    0 === --c && E.removeEventListener(a, g, !0)
                }
            }
        });
    f.fn.extend({
        on: function(a, c, g, d, e) {
            var j, m;
            if ("object" == typeof a) {
                "string" != typeof c && (g = g || c, c = b);
                for (j in a) this.on(j, c, g, a[j], e);
                return this
            }
            if (null == g && null == d ? (d = c, g = c = b) : null == d && ("string" == typeof c ? (d = g, g = b) : (d = g, g = c, c = b)), !1 === d) d =
                H;
            else if (!d) return this;
            return 1 === e && (m = d, d = function(a) {
                return f().off(a), m.apply(this, arguments)
            }, d.guid = m.guid || (m.guid = f.guid++)), this.each(function() {
                f.event.add(this, a, d, g, c)
            })
        },
        one: function(a, b, c, f) {
            return this.on(a, b, c, f, 1)
        },
        off: function(a, c, g) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, f(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, c, a[e]);
                return this
            }
            return (!1 === c || "function" ==
                typeof c) && (g = c, c = b), !1 === g && (g = H), this.each(function() {
                f.event.remove(this, a, g, c)
            })
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, f) {
            return this.on(b, a, c, f)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        trigger: function(a, b) {
            return this.each(function() {
                f.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, c) {
            var g = this[0];
            return g ? f.event.trigger(a, c, g, !0) : b
        }
    });
    var ub = a,
        vb = function() {
            var a, b = [];
            return a = function(c, f) {
                return b.push(c += " ") > K.cacheLength && delete a[b.shift()], a[c] = f
            }
        },
        ca = function(a) {
            return a[R] = !0, a
        },
        na = function(a) {
            var b = X.createElement("div");
            try {
                return a(b)
            } catch (c) {
                return !1
            } finally {}
        },
        O = function(a, b, c, f) {
            var g, d, e, j, m;
            if ((b ? b.ownerDocument || b : xa) !== X && Da(b), b = b || X, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (j = b.nodeType) && 9 !== j) return [];
            if (!da && !f) {
                if (g = Vc.exec(a))
                    if (e = g[1])
                        if (9 === j) {
                            if (d = b.getElementById(e), !d || !d.parentNode) return c;
                            if (d.id ===
                                e) return c.push(d), c
                        } else {
                            if (b.ownerDocument && (d = b.ownerDocument.getElementById(e)) && Oa(b, d) && d.id === e) return c.push(d), c
                        }
                else {
                    if (g[2]) return Ea.apply(c, Fa.call(b.getElementsByTagName(a), 0)), c;
                    if ((e = g[3]) && U.getByClassName && b.getElementsByClassName) return Ea.apply(c, Fa.call(b.getElementsByClassName(e), 0)), c
                }
                if (U.qsa && !ea.test(a)) {
                    if (g = !0, d = R, e = b, m = 9 === j && a, 1 === j && "object" !== b.nodeName.toLowerCase()) {
                        j = Za(a);
                        (g = b.getAttribute("id")) ? d = g.replace(Wc, "\\$&"): b.setAttribute("id", d);
                        d = "[id='" + d + "'] ";
                        for (e =
                            j.length; e--;) j[e] = d + $a(j[e]);
                        e = wb.test(a) && b.parentNode || b;
                        m = j.join(",")
                    }
                    if (m) try {
                        return Ea.apply(c, Fa.call(e.querySelectorAll(m), 0)), c
                    } catch (n) {} finally {
                        g || b.removeAttribute("id")
                    }
                }
            }
            var r;
            a: {
                a = a.replace(ab, "$1");
                var k, h;d = Za(a);
                if (!f && 1 === d.length) {
                    if (r = d[0] = d[0].slice(0), 2 < r.length && "ID" === (k = r[0]).type && 9 === b.nodeType && !da && K.relative[r[1].type]) {
                        if (b = K.find.ID(k.matches[0].replace(oa, pa), b)[0], !b) {
                            r = c;
                            break a
                        }
                        a = a.slice(r.shift().value.length)
                    }
                    for (j = bb.needsContext.test(a) ? 0 : r.length; j-- && !(k =
                            r[j], K.relative[g = k.type]);)
                        if ((h = K.find[g]) && (f = h(k.matches[0].replace(oa, pa), wb.test(r[0].type) && b.parentNode || b))) {
                            if (r.splice(j, 1), a = f.length && $a(r), !a) {
                                r = (Ea.apply(c, Fa.call(f, 0)), c);
                                break a
                            }
                            break
                        }
                }
                r = (xb(a, d)(f, b, da, c, wb.test(a)), c)
            }
            return r
        },
        ac = function(a, b) {
            var c = b && a,
                f = c && (~b.sourceIndex || $b) - (~a.sourceIndex || $b);
            if (f) return f;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        },
        Xc = function(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        },
        Yc = function(a) {
            return function(b) {
                var c =
                    b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        },
        ya = function(a) {
            return ca(function(b) {
                return b = +b, ca(function(c, f) {
                    for (var g, d = a([], c.length, b), e = d.length; e--;) c[g = d[e]] && (c[g] = !(f[g] = c[g]))
                })
            })
        },
        Za = function(a, b) {
            var c, f, g, d, e, j, m;
            if (e = bc[a + " "]) return b ? 0 : e.slice(0);
            e = a;
            j = [];
            for (m = K.preFilter; e;) {
                (!c || (f = Zc.exec(e))) && (f && (e = e.slice(f[0].length) || e), j.push(g = []));
                c = !1;
                (f = $c.exec(e)) && (c = f.shift(), g.push({
                    value: c,
                    type: f[0].replace(ab, " ")
                }), e = e.slice(c.length));
                for (d in K.filter) !(f =
                    bb[d].exec(e)) || m[d] && !(f = m[d](f)) || (c = f.shift(), g.push({
                    value: c,
                    type: d,
                    matches: f
                }), e = e.slice(c.length));
                if (!c) break
            }
            return b ? e.length : e ? O.error(a) : bc(a, j).slice(0)
        },
        $a = function(a) {
            for (var b = 0, c = a.length, f = ""; c > b; b++) f += a[b].value;
            return f
        },
        yb = function(a, b, c) {
            var f = b.dir,
                g = c && "parentNode" === f,
                d = ad++;
            return b.first ? function(b, c, d) {
                for (; b = b[f];)
                    if (1 === b.nodeType || g) return a(b, c, d)
            } : function(b, c, e) {
                var q, w, j, m = fa + " " + d;
                if (e)
                    for (; b = b[f];) {
                        if ((1 === b.nodeType || g) && a(b, c, e)) return !0
                    } else
                        for (; b = b[f];)
                            if (1 ===
                                b.nodeType || g)
                                if (j = b[R] || (b[R] = {}), (w = j[f]) && w[0] === m) {
                                    if (!0 === (q = w[1]) || q === cb) return !0 === q
                                } else if (w = j[f] = [m], w[1] = a(b, c, e) || cb, !0 === w[1]) return !0
            }
        },
        zb = function(a) {
            return 1 < a.length ? function(b, c, f) {
                for (var g = a.length; g--;)
                    if (!a[g](b, c, f)) return !1;
                return !0
            } : a[0]
        },
        db = function(a, b, c, f, g) {
            for (var d, e = [], j = 0, m = a.length, n = null != b; m > j; j++)(d = a[j]) && (!c || c(d, f, g)) && (e.push(d), n && b.push(j));
            return e
        },
        Ab = function(a, b, c, f, g, d) {
            return f && !f[R] && (f = Ab(f)), g && !g[R] && (g = Ab(g, d)), ca(function(d, e, j, m) {
                var n, r, k = [],
                    h = [],
                    Qa = e.length,
                    s;
                if (!(s = d)) {
                    s = b || "*";
                    for (var l = j.nodeType ? [j] : j, M = [], E = 0, v = l.length; v > E; E++) O(s, l[E], M);
                    s = M
                }
                s = !a || !d && b ? s : db(s, k, a, j, m);
                l = c ? g || (d ? a : Qa || f) ? [] : e : s;
                if (c && c(s, l, j, m), f) {
                    n = db(l, h);
                    f(n, [], j, m);
                    for (j = n.length; j--;)(r = n[j]) && (l[h[j]] = !(s[h[j]] = r))
                }
                if (d) {
                    if (g || a) {
                        if (g) {
                            n = [];
                            for (j = l.length; j--;)(r = l[j]) && n.push(s[j] = r);
                            g(null, l = [], n, m)
                        }
                        for (j = l.length; j--;)(r = l[j]) && -1 < (n = g ? Bb.call(d, r) : k[j]) && (d[n] = !(e[n] = r))
                    }
                } else l = db(l === e ? l.splice(Qa, l.length) : l), g ? g(null, e, l, m) : Ea.apply(e, l)
            })
        },
        Cb =
        function(a) {
            var b, c, f, g = a.length,
                d = K.relative[a[0].type];
            c = d || K.relative[" "];
            for (var e = d ? 1 : 0, j = yb(function(a) {
                    return a === b
                }, c, !0), m = yb(function(a) {
                    return -1 < Bb.call(b, a)
                }, c, !0), n = [function(a, c, p) {
                    return !d && (p || c !== eb) || ((b = c).nodeType ? j(a, c, p) : m(a, c, p))
                }]; g > e; e++)
                if (c = K.relative[a[e].type]) n = [yb(zb(n), c)];
                else {
                    if (c = K.filter[a[e].type].apply(null, a[e].matches), c[R]) {
                        for (f = ++e; g > f && !K.relative[a[f].type]; f++);
                        return Ab(1 < e && zb(n), 1 < e && $a(a.slice(0, e - 1)).replace(ab, "$1"), c, f > e && Cb(a.slice(e, f)), g > f &&
                            Cb(a = a.slice(f)), g > f && $a(a))
                    }
                    n.push(c)
                }
            return zb(n)
        },
        cc = function() {},
        Ga, cb, K, fb, dc, xb, Ha, eb, Da, X, aa, da, ea, Ia, gb, Oa, Db, R = "sizzle" + -new Date,
        xa = ub.document,
        U = {},
        fa = 0,
        ad = 0,
        ec = vb(),
        bc = vb(),
        fc = vb(),
        $b = -2147483648,
        hb = [],
        bd = hb.pop,
        Ea = hb.push,
        Fa = hb.slice,
        Bb = hb.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] === a) return b;
            return -1
        },
        gc = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
        hc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
        gc + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        Eb = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + hc.replace(3, 8) + ")*)|.*)\\)|)",
        ab = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
        Zc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        $c = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        cd = RegExp(Eb),
        dd = RegExp("^" + gc + "$"),
        bb = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[\w-]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + hc),
            PSEUDO: RegExp("^" + Eb),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        wb = /[\x20\t\r\n\f]*[+~]/,
        Fb = /^[^{]+\{\s*\[native code/,
        Vc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ed = /^(?:input|select|textarea|button)$/i,
        fd = /^h\d$/i,
        Wc = /'|\\/g,
        gd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        oa = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        pa = function(a, b) {
            var c = "0x" + b - 65536;
            return c !== c ? b : 0 > c ? String.fromCharCode(c + 65536) : String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
        };
    try {
        Fa.call(xa.documentElement.childNodes, 0)[0].nodeType
    } catch (Gd) {
        Fa = function(a) {
            for (var b, c = []; b = this[a++];) c.push(b);
            return c
        }
    }
    dc = O.isXML = function(a) {
        return (a =
            a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
    };
    Da = O.setDocument = function(a) {
        var b = a ? a.ownerDocument || a : xa;
        if (b !== X && 9 === b.nodeType && b.documentElement) {
            X = b;
            aa = b.documentElement;
            da = dc(b);
            U.tagNameNoComments = na(function(a) {
                return a.appendChild(b.createComment("")), !a.getElementsByTagName("*").length
            });
            U.attributes = na(function(a) {
                a.innerHTML = "<select></select>";
                a = typeof a.lastChild.getAttribute("multiple");
                return "boolean" !== a && "string" !== a
            });
            U.getByClassName = na(function(a) {
                return a.innerHTML =
                    "<div class='hidden e'></div><div class='hidden'></div>", a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1
            });
            U.getByName = na(function(a) {
                a.id = R + 0;
                a.innerHTML = "<a name='" + R + "'></a><div name='" + R + "'></div>";
                aa.insertBefore(a, aa.firstChild);
                var c = b.getElementsByName && b.getElementsByName(R).length === 2 + b.getElementsByName(R + 0).length;
                return U.getIdNotName = !b.getElementById(R), aa.removeChild(a), c
            });
            K.attrHandle = na(function(a) {
                return a.innerHTML =
                    "<a href='#'></a>", a.firstChild && "undefined" !== typeof a.firstChild.getAttribute && "#" === a.firstChild.getAttribute("href")
            }) ? {} : {
                href: function(a) {
                    return a.getAttribute("href", 2)
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            };
            U.getIdNotName ? (K.find.ID = function(a, b) {
                if ("undefined" !== typeof b.getElementById && !da) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, K.filter.ID = function(a) {
                var b = a.replace(oa, pa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (K.find.ID = function(a, b) {
                if ("undefined" !==
                    typeof b.getElementById && !da) {
                    var c = b.getElementById(a);
                    return c ? c.id === a || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === a ? [c] : void 0 : []
                }
            }, K.filter.ID = function(a) {
                var b = a.replace(oa, pa);
                return function(a) {
                    return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                }
            });
            K.find.TAG = U.tagNameNoComments ? function(a, b) {
                return "undefined" !== typeof b.getElementsByTagName ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, p = [],
                    f = 0,
                    g = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = g[f++];) 1 === c.nodeType && p.push(c);
                    return p
                }
                return g
            };
            K.find.NAME = U.getByName && function(a, b) {
                return "undefined" !== typeof b.getElementsByName ? b.getElementsByName(name) : void 0
            };
            K.find.CLASS = U.getByClassName && function(a, b) {
                return "undefined" === typeof b.getElementsByClassName || da ? void 0 : b.getElementsByClassName(a)
            };
            Ia = [];
            ea = [":focus"];
            (U.qsa = Fb.test(b.querySelectorAll + "")) && (na(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>";
                a.querySelectorAll("[selected]").length ||
                    ea.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                a.querySelectorAll(":checked").length || ea.push(":checked")
            }), na(function(a) {
                a.innerHTML = "<input type='hidden' i=''/>";
                a.querySelectorAll("[i^='']").length && ea.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
                a.querySelectorAll(":enabled").length || ea.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                ea.push(",.*:")
            }));
            a = U;
            var c;
            c = gb = aa.matchesSelector || aa.mozMatchesSelector || aa.webkitMatchesSelector || aa.oMatchesSelector ||
                aa.msMatchesSelector;
            c = Fb.test(c + "");
            a = ((a.matchesSelector = c) && na(function(a) {
                U.disconnectedMatch = gb.call(a, "div");
                gb.call(a, "[s!='']:x");
                Ia.push("!=", Eb)
            }), ea = RegExp(ea.join("|")), Ia = RegExp(Ia.join("|")), Oa = Fb.test(aa.contains + "") || aa.compareDocumentPosition ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    p = b && b.parentNode;
                return a === p || !(!p || 1 !== p.nodeType || !(c.contains ? c.contains(p) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(p)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b ===
                            a) return !0;
                return !1
            }, Db = aa.compareDocumentPosition ? function(a, c) {
                var p;
                return a === c ? (Ha = !0, 0) : (p = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c)) ? 1 & p || a.parentNode && 11 === a.parentNode.nodeType ? a === b || Oa(xa, a) ? -1 : c === b || Oa(xa, c) ? 1 : 0 : 4 & p ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            } : function(a, c) {
                var p, f = 0;
                p = a.parentNode;
                var g = c.parentNode,
                    d = [a],
                    e = [c];
                if (a === c) return Ha = !0, 0;
                if (!p || !g) return a === b ? -1 : c === b ? 1 : p ? -1 : g ? 1 : 0;
                if (p === g) return ac(a, c);
                for (p = a; p = p.parentNode;) d.unshift(p);
                for (p = c; p = p.parentNode;) e.unshift(p);
                for (; d[f] === e[f];) f++;
                return f ? ac(d[f], e[f]) : d[f] === xa ? -1 : e[f] === xa ? 1 : 0
            }, Ha = !1, [0, 0].sort(Db), U.detectDuplicates = Ha, X)
        } else a = X;
        return a
    };
    O.matches = function(a, b) {
        return O(a, null, null, b)
    };
    O.matchesSelector = function(a, b) {
        if ((a.ownerDocument || a) !== X && Da(a), b = b.replace(gd, "='$1']"), !(!U.matchesSelector || da || Ia && Ia.test(b) || ea.test(b))) try {
            var c = gb.call(a, b);
            if (c || U.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c
        } catch (f) {}
        return 0 < O(b, X, null, [a]).length
    };
    O.contains = function(a, b) {
        return (a.ownerDocument || a) !== X && Da(a), Oa(a, b)
    };
    O.attr = function(a, b) {
        var c;
        return (a.ownerDocument || a) !== X && Da(a), da || (b = b.toLowerCase()), (c = K.attrHandle[b]) ? c(a) : da || U.attributes ? a.getAttribute(b) : ((c = a.getAttributeNode(b)) || a.getAttribute(b)) && !0 === a[b] ? b : c && c.specified ? c.value : null
    };
    O.error = function(a) {
        throw Error("Syntax error, unrecognized expression: " + a);
    };
    O.uniqueSort = function(a) {
        var b, c = [],
            f = 1,
            g = 0;
        if (Ha = !U.detectDuplicates, a.sort(Db), Ha) {
            for (; b = a[f]; f++) b === a[f - 1] &&
                (g = c.push(f));
            for (; g--;) a.splice(c[g], 1)
        }
        return a
    };
    fb = O.getText = function(a) {
        var b, c = "",
            f = 0;
        if (b = a.nodeType)
            if (1 === b || 9 === b || 11 === b) {
                if ("string" == typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += fb(a)
            } else {
                if (3 === b || 4 === b) return a.nodeValue
            }
        else
            for (; b = a[f]; f++) c += fb(b);
        return c
    };
    K = O.selectors = {
        cacheLength: 50,
        createPseudo: ca,
        match: bb,
        find: {},
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(a) {
                return a[1] = a[1].replace(oa, pa), a[3] = (a[4] || a[5] || "").replace(oa, pa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
            },
            CHILD: function(a) {
                return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || O.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && O.error(a[0]), a
            },
            PSEUDO: function(a) {
                var b, c = !a[5] && a[2];
                return bb.CHILD.test(a[0]) ? null : (a[4] ? a[2] = a[4] : c && cd.test(c) && (b = Za(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) &&
                    (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
            }
        },
        filter: {
            TAG: function(a) {
                return "*" === a ? function() {
                    return !0
                } : (a = a.replace(oa, pa).toLowerCase(), function(b) {
                    return b.nodeName && b.nodeName.toLowerCase() === a
                })
            },
            CLASS: function(a) {
                var b = ec[a + " "];
                return b || (b = RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && ec(a, function(a) {
                    return b.test(a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                })
            },
            ATTR: function(a, b, c) {
                return function(f) {
                    f = O.attr(f, a);
                    return null ==
                        f ? "!=" === b : b ? (f += "", "=" === b ? f === c : "!=" === b ? f !== c : "^=" === b ? c && 0 === f.indexOf(c) : "*=" === b ? c && -1 < f.indexOf(c) : "$=" === b ? c && f.slice(-c.length) === c : "~=" === b ? -1 < (" " + f + " ").indexOf(c) : "|=" === b ? f === c || f.slice(0, c.length + 1) === c + "-" : !1) : !0
                }
            },
            CHILD: function(a, b, c, f, g) {
                var d = "nth" !== a.slice(0, 3),
                    e = "last" !== a.slice(-4),
                    j = "of-type" === b;
                return 1 === f && 0 === g ? function(a) {
                    return !!a.parentNode
                } : function(b, c, m) {
                    var q, w, n, r, k;
                    c = d !== e ? "nextSibling" : "previousSibling";
                    var h = b.parentNode,
                        s = j && b.nodeName.toLowerCase();
                    m = !m &&
                        !j;
                    if (h) {
                        if (d) {
                            for (; c;) {
                                for (w = b; w = w[c];)
                                    if (j ? w.nodeName.toLowerCase() === s : 1 === w.nodeType) return !1;
                                k = c = "only" === a && !k && "nextSibling"
                            }
                            return !0
                        }
                        if (k = [e ? h.firstChild : h.lastChild], e && m) {
                            m = h[R] || (h[R] = {});
                            q = m[a] || [];
                            r = q[0] === fa && q[1];
                            n = q[0] === fa && q[2];
                            for (w = r && h.childNodes[r]; w = ++r && w && w[c] || (n = r = 0) || k.pop();)
                                if (1 === w.nodeType && ++n && w === b) {
                                    m[a] = [fa, r, n];
                                    break
                                }
                        } else if (m && (q = (b[R] || (b[R] = {}))[a]) && q[0] === fa) n = q[1];
                        else
                            for (;
                                (w = ++r && w && w[c] || (n = r = 0) || k.pop()) && (!(j ? w.nodeName.toLowerCase() === s : 1 === w.nodeType) ||
                                    !++n || !(m && ((w[R] || (w[R] = {}))[a] = [fa, n]), w === b)););
                        return n -= g, n === f || 0 === n % f && 0 <= n / f
                    }
                }
            },
            PSEUDO: function(a, b) {
                var c, f = K.pseudos[a] || K.setFilters[a.toLowerCase()] || O.error("unsupported pseudo: " + a);
                return f[R] ? f(b) : 1 < f.length ? (c = [a, a, "", b], K.setFilters.hasOwnProperty(a.toLowerCase()) ? ca(function(a, c) {
                    for (var g, p = f(a, b), d = p.length; d--;) g = Bb.call(a, p[d]), a[g] = !(c[g] = p[d])
                }) : function(a) {
                    return f(a, 0, c)
                }) : f
            }
        },
        pseudos: {
            not: ca(function(a) {
                var b = [],
                    c = [],
                    f = xb(a.replace(ab, "$1"));
                return f[R] ? ca(function(a,
                    b, c, g) {
                    var p;
                    c = f(a, null, g, []);
                    for (g = a.length; g--;)(p = c[g]) && (a[g] = !(b[g] = p))
                }) : function(a, g, p) {
                    return b[0] = a, f(b, null, p, c), !c.pop()
                }
            }),
            has: ca(function(a) {
                return function(b) {
                    return 0 < O(a, b).length
                }
            }),
            contains: ca(function(a) {
                return function(b) {
                    return -1 < (b.textContent || b.innerText || fb(b)).indexOf(a)
                }
            }),
            lang: ca(function(a) {
                return dd.test(a || "") || O.error("unsupported lang: " + a), a = a.replace(oa, pa).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = da ? b.getAttribute("xml:lang") || b.getAttribute("lang") : b.lang) return c =
                                c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
            }),
            target: function(a) {
                var b = ub.location && ub.location.hash;
                return b && b.slice(1) === a.id
            },
            root: function(a) {
                return a === aa
            },
            focus: function(a) {
                return a === X.activeElement && (!X.hasFocus || X.hasFocus()) && !(!a.type && !a.href && !~a.tabIndex)
            },
            enabled: function(a) {
                return !1 === a.disabled
            },
            disabled: function(a) {
                return !0 === a.disabled
            },
            checked: function(a) {
                var b = a.nodeName.toLowerCase();
                return "input" === b && !!a.checked || "option" ===
                    b && !!a.selected
            },
            selected: function(a) {
                return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
            },
            empty: function(a) {
                for (a = a.firstChild; a; a = a.nextSibling)
                    if ("@" < a.nodeName || 3 === a.nodeType || 4 === a.nodeType) return !1;
                return !0
            },
            parent: function(a) {
                return !K.pseudos.empty(a)
            },
            header: function(a) {
                return fd.test(a.nodeName)
            },
            input: function(a) {
                return ed.test(a.nodeName)
            },
            button: function(a) {
                var b = a.nodeName.toLowerCase();
                return "input" === b && "button" === a.type || "button" === b
            },
            text: function(a) {
                var b;
                return "input" ===
                    a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
            },
            first: ya(function() {
                return [0]
            }),
            last: ya(function(a, b) {
                return [b - 1]
            }),
            eq: ya(function(a, b, c) {
                return [0 > c ? c + b : c]
            }),
            even: ya(function(a, b) {
                for (var c = 0; b > c; c += 2) a.push(c);
                return a
            }),
            odd: ya(function(a, b) {
                for (var c = 1; b > c; c += 2) a.push(c);
                return a
            }),
            lt: ya(function(a, b, c) {
                for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
                return a
            }),
            gt: ya(function(a, b, c) {
                for (c = 0 > c ? c + b : c; b > ++c;) a.push(c);
                return a
            })
        }
    };
    for (Ga in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) K.pseudos[Ga] = Xc(Ga);
    for (Ga in {
            submit: !0,
            reset: !0
        }) K.pseudos[Ga] = Yc(Ga);
    xb = O.compile = function(a, b) {
        var c, f = [],
            g = [],
            d = fc[a + " "];
        if (!d) {
            b || (b = Za(a));
            for (c = b.length; c--;) d = Cb(b[c]), d[R] ? f.push(d) : g.push(d);
            var e = 0,
                j = 0 < f.length,
                m = 0 < g.length;
            c = function(a, b, c, p, d) {
                var q, w, n = [],
                    r = 0,
                    k = "0",
                    h = a && [],
                    s = null != d,
                    l = eb,
                    Qa = a || m && K.find.TAG("*", d && b.parentNode || b),
                    M = fa += null == l ? 1 : Math.random() || 0.1;
                for (s && (eb = b !== X && b, cb = e); null != (d = Qa[k]); k++) {
                    if (m && d) {
                        for (q = 0; w = g[q++];)
                            if (w(d, b, c)) {
                                p.push(d);
                                break
                            }
                        s && (fa = M, cb = ++e)
                    }
                    j && ((d = !w && d) && r--, a && h.push(d))
                }
                if (r += k, j && k !== r) {
                    for (q = 0; w = f[q++];) w(h, n, b, c);
                    if (a) {
                        if (0 < r)
                            for (; k--;) h[k] || n[k] || (n[k] = bd.call(p));
                        n = db(n)
                    }
                    Ea.apply(p, n);
                    s && !a && 0 < n.length && 1 < r + f.length && O.uniqueSort(p)
                }
                return s && (fa = M, eb = l), h
            };
            c = j ? ca(c) : c;
            d = fc(a, c)
        }
        return d
    };
    K.pseudos.nth = K.pseudos.eq;
    K.filters = cc.prototype = K.pseudos;
    K.setFilters = new cc;
    Da();
    O.attr = f.attr;
    f.find = O;
    f.expr = O.selectors;
    f.expr[":"] = f.expr.pseudos;
    f.unique = O.uniqueSort;
    f.text = O.getText;
    f.isXMLDoc = O.isXML;
    f.contains =
        O.contains;
    var hd = /Until$/,
        id = /^(?:parents|prev(?:Until|All))/,
        zc = /^.[^:#\[\.,]*$/,
        ic = f.expr.match.needsContext,
        jd = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function(a) {
            var b, c, g, d = this.length;
            if ("string" != typeof a) return g = this, this.pushStack(f(a).filter(function() {
                for (b = 0; d > b; b++)
                    if (f.contains(g[b], this)) return !0
            }));
            c = [];
            for (b = 0; d > b; b++) f.find(a, this[b], c);
            return c = this.pushStack(1 < d ? f.unique(c) : c), c.selector = (this.selector ? this.selector + " " : "") + a, c
        },
        has: function(a) {
            var b, c = f(a,
                    this),
                g = c.length;
            return this.filter(function() {
                for (b = 0; g > b; b++)
                    if (f.contains(this, c[b])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(P(this, a, !1))
        },
        filter: function(a) {
            return this.pushStack(P(this, a, !0))
        },
        is: function(a) {
            return !!a && ("string" == typeof a ? ic.test(a) ? 0 <= f(a, this.context).index(this[0]) : 0 < f.filter(a, this).length : 0 < this.filter(a).length)
        },
        closest: function(a, b) {
            for (var c, g = 0, d = this.length, e = [], j = ic.test(a) || "string" != typeof a ? f(a, b || this.context) : 0; d > g; g++)
                for (c = this[g]; c && c.ownerDocument &&
                    c !== b && 11 !== c.nodeType;) {
                    if (j ? -1 < j.index(c) : f.find.matchesSelector(c, a)) {
                        e.push(c);
                        break
                    }
                    c = c.parentNode
                }
            return this.pushStack(1 < e.length ? f.unique(e) : e)
        },
        index: function(a) {
            return a ? "string" == typeof a ? f.inArray(this[0], f(a)) : f.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                c = f.merge(this.get(), c);
            return this.pushStack(f.unique(c))
        },
        addBack: function(a) {
            return this.add(null ==
                a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    f.fn.andSelf = f.fn.addBack;
    f.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function(a) {
            return z(a, "nextSibling")
        },
        prev: function(a) {
            return z(a, "previousSibling")
        },
        nextAll: function(a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return f.dir(a, "nextSibling",
                c)
        },
        prevUntil: function(a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return f.sibling(a.firstChild)
        },
        contents: function(a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.merge([], a.childNodes)
        }
    }, function(a, b) {
        f.fn[a] = function(c, g) {
            var d = f.map(this, b, c);
            return hd.test(a) || (g = c), g && "string" == typeof g && (d = f.filter(g, d)), d = 1 < this.length && !jd[a] ? f.unique(d) : d, 1 < this.length && id.test(a) &&
                (d = d.reverse()), this.pushStack(d)
        }
    });
    f.extend({
        filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"), 1 === b.length ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function(a, c, g) {
            var d = [];
            for (a = a[c]; a && 9 !== a.nodeType && (g === b || 1 !== a.nodeType || !f(a).is(g));) 1 === a.nodeType && d.push(a), a = a[c];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Nb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        kd = / jQuery\d+="(?:null|\d+)"/g,
        jc = RegExp("<(?:" + Nb + ")[\\s/>]", "i"),
        Gb = /^\s+/,
        kc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        lc = /<([\w:]+)/,
        mc = /<tbody/i,
        ld = /<|&#?\w+;/,
        md = /<(?:script|style|link)/i,
        jb = /^(?:checkbox|radio)$/i,
        nd = /checked\s*(?:[^=]|=\s*.checked.)/i,
        nc = /^$|\/(?:java|ecma)script/i,
        Ac = /^true\/(.*)/,
        od = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ba = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: f.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Hb = G(E).appendChild(E.createElement("div"));
    ba.optgroup = ba.option;
    ba.tbody = ba.tfoot = ba.colgroup = ba.caption = ba.thead;
    ba.th = ba.td;
    f.fn.extend({
        text: function(a) {
            return f.access(this, function(a) {
                return a === b ? f.text(this) :
                    this.empty().append((this[0] && this[0].ownerDocument || E).createTextNode(a))
            }, null, a, arguments.length)
        },
        wrapAll: function(a) {
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return f.isFunction(a) ? this.each(function(b) {
                f(this).wrapInner(a.call(this,
                    b))
            }) : this.each(function() {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = f.isFunction(a);
            return this.each(function(c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, g = 0; null != (c = this[g]); g++)(!a || 0 < f.filter(a, [c]).length) && (b || 1 !== c.nodeType || f.cleanData(u(c)), c.parentNode &&
                (b && f.contains(c.ownerDocument, c) && t(u(c, "script")), c.parentNode.removeChild(c)));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && f.cleanData(u(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && f.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return f.clone(this, a, b)
            })
        },
        html: function(a) {
            return f.access(this, function(a) {
                var c = this[0] || {},
                    g = 0,
                    d = this.length;
                if (a === b) return 1 ===
                    c.nodeType ? c.innerHTML.replace(kd, "") : b;
                if (!("string" != typeof a || md.test(a) || !f.support.htmlSerialize && jc.test(a) || !f.support.leadingWhitespace && Gb.test(a) || ba[(lc.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(kc, "<$1></$2>");
                    try {
                        for (; d > g; g++) c = this[g] || {}, 1 === c.nodeType && (f.cleanData(u(c, !1)), c.innerHTML = a);
                        c = 0
                    } catch (e) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function(a) {
            return f.isFunction(a) || "string" == typeof a || (a = f(a).not(this).detach()), this.domManip([a], !0, function(a) {
                var b =
                    this.nextSibling,
                    c = this.parentNode;
                c && (f(this).remove(), c.insertBefore(a, b))
            })
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, g) {
            a = Qb.apply([], a);
            var d, e, j, m, n = 0,
                r = this.length,
                k = this,
                h = r - 1,
                s = a[0],
                l = f.isFunction(s);
            if (l || !(1 >= r || "string" != typeof s || f.support.checkClone) && nd.test(s)) return this.each(function(f) {
                var d = k.eq(f);
                l && (a[0] = s.call(this, f, c ? d.html() : b));
                d.domManip(a, c, g)
            });
            if (r && (m = f.buildFragment(a, this[0].ownerDocument, !1, this), d = m.firstChild, 1 === m.childNodes.length &&
                    (m = d), d)) {
                c = c && f.nodeName(d, "tr");
                j = f.map(u(m, "script"), C);
                for (e = j.length; r > n; n++) d = m, n !== h && (d = f.clone(d, !0, !0), e && f.merge(j, u(d, "script"))), g.call(c && f.nodeName(this[n], "table") ? this[n].getElementsByTagName("tbody")[0] || this[n].appendChild(this[n].ownerDocument.createElement("tbody")) : this[n], d, n);
                if (e) {
                    m = j[j.length - 1].ownerDocument;
                    f.map(j, I);
                    for (n = 0; e > n; n++) d = j[n], nc.test(d.type || "") && !f._data(d, "globalEval") && f.contains(m, d) && (d.src ? f.ajax({
                        url: d.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : f.globalEval((d.text || d.textContent || d.innerHTML || "").replace(od, "")))
                }
                m = d = null
            }
            return this
        }
    });
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        f.fn[a] = function(a) {
            for (var c = 0, g = [], d = f(a), e = d.length - 1; e >= c; c++) a = c === e ? this : this.clone(!0), f(d[c])[b](a), lb.apply(g, a.get());
            return this.pushStack(g)
        }
    });
    f.extend({
        clone: function(a, b, c) {
            var g, d, e, j, m, n = f.contains(a.ownerDocument, a);
            if (f.support.html5Clone || f.isXMLDoc(a) ||
                !jc.test("<" + a.nodeName + ">") ? e = a.cloneNode(!0) : (Hb.innerHTML = a.outerHTML, Hb.removeChild(e = Hb.firstChild)), !(f.support.noCloneEvent && f.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || f.isXMLDoc(a))) {
                g = u(e);
                m = u(a);
                for (j = 0; null != (d = m[j]); ++j)
                    if (g[j]) {
                        var r = g[j],
                            k = void 0,
                            h = void 0,
                            s = void 0;
                        if (1 === r.nodeType) {
                            if (k = r.nodeName.toLowerCase(), !f.support.noCloneEvent && r[f.expando]) {
                                s = f._data(r);
                                for (h in s.events) f.removeEvent(r, h, s.handle);
                                r.removeAttribute(f.expando)
                            }
                            "script" === k && r.text !== d.text ?
                                (C(r).text = d.text, I(r)) : "object" === k ? (r.parentNode && (r.outerHTML = d.outerHTML), f.support.html5Clone && d.innerHTML && !f.trim(r.innerHTML) && (r.innerHTML = d.innerHTML)) : "input" === k && jb.test(d.type) ? (r.defaultChecked = r.checked = d.checked, r.value !== d.value && (r.value = d.value)) : "option" === k ? r.defaultSelected = r.selected = d.defaultSelected : ("input" === k || "textarea" === k) && (r.defaultValue = d.defaultValue)
                        }
                    }
            }
            if (b)
                if (c) {
                    m = m || u(a);
                    g = g || u(e);
                    for (j = 0; null != (d = m[j]); j++) A(d, g[j])
                } else A(a, e);
            return g = u(e, "script"), 0 < g.length &&
                t(g, !n && u(a, "script")), e
        },
        buildFragment: function(a, b, c, g) {
            for (var d, e, j, m, n, r, k, h = a.length, s = G(b), l = [], M = 0; h > M; M++)
                if (e = a[M], e || 0 === e)
                    if ("object" === f.type(e)) f.merge(l, e.nodeType ? [e] : e);
                    else if (ld.test(e)) {
                m = m || s.appendChild(b.createElement("div"));
                n = (lc.exec(e) || ["", ""])[1].toLowerCase();
                k = ba[n] || ba._default;
                m.innerHTML = k[1] + e.replace(kc, "<$1></$2>") + k[2];
                for (d = k[0]; d--;) m = m.lastChild;
                if (!f.support.leadingWhitespace && Gb.test(e) && l.push(b.createTextNode(Gb.exec(e)[0])), !f.support.tbody)
                    for (d = (e = "table" !==
                            n || mc.test(e) ? "<table>" !== k[1] || mc.test(e) ? 0 : m : m.firstChild) && e.childNodes.length; d--;) f.nodeName(r = e.childNodes[d], "tbody") && !r.childNodes.length && e.removeChild(r);
                f.merge(l, m.childNodes);
                for (m.textContent = ""; m.firstChild;) m.removeChild(m.firstChild);
                m = s.lastChild
            } else l.push(b.createTextNode(e));
            m && s.removeChild(m);
            f.support.appendChecked || f.grep(u(l, "input"), x);
            for (M = 0; e = l[M++];)
                if ((!g || -1 === f.inArray(e, g)) && (j = f.contains(e.ownerDocument, e), m = u(s.appendChild(e), "script"), j && t(m), c))
                    for (d = 0; e = m[d++];) nc.test(e.type ||
                        "") && c.push(e);
            return s
        },
        cleanData: function(a, b) {
            for (var c, g, d, e, j = 0, m = f.expando, n = f.cache, r = f.support.deleteExpando, k = f.event.special; null != (c = a[j]); j++)
                if ((b || f.acceptData(c)) && (d = c[m], e = d && n[d])) {
                    if (e.events)
                        for (g in e.events) k[g] ? f.event.remove(c, g) : f.removeEvent(c, g, e.handle);
                    n[d] && (delete n[d], r ? delete c[m] : typeof c.removeAttribute !== M ? c.removeAttribute(m) : c[m] = null, Aa.push(d))
                }
        }
    });
    var Ka, sa, ta, Ib = /alpha\([^)]*\)/i,
        pd = /opacity\s*=\s*([^)]*)/,
        qd = /^(top|right|bottom|left)$/,
        rd = /^(none|table(?!-c[ea]).+)/,
        oc = /^margin/,
        Bc = RegExp("^(" + Ua + ")(.*)$", "i"),
        Ra = RegExp("^(" + Ua + ")(?!px)[a-z%]+$", "i"),
        sd = RegExp("^([+-])=(" + Ua + ")", "i"),
        Pb = {
            BODY: "block"
        },
        td = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        pc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ra = ["Top", "Right", "Bottom", "Left"],
        Ob = ["Webkit", "O", "Moz", "ms"];
    f.fn.extend({
        css: function(a, c) {
            return f.access(this, function(a, c, g) {
                var d, e = {},
                    j = 0;
                if (f.isArray(c)) {
                    d = sa(a);
                    for (g = c.length; g > j; j++) e[c[j]] = f.css(a, c[j], !1, d);
                    return e
                }
                return g !== b ? f.style(a, c, g) : f.css(a,
                    c)
            }, a, c, 1 < arguments.length)
        },
        show: function() {
            return V(this, !0)
        },
        hide: function() {
            return V(this)
        },
        toggle: function(a) {
            var b = "boolean" == typeof a;
            return this.each(function() {
                (b ? a : B(this)) ? f(this).show(): f(this).hide()
            })
        }
    });
    f.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = ta(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a,
            c, g, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, j, m, n = f.camelCase(c),
                    r = a.style;
                if (c = f.cssProps[n] || (f.cssProps[n] = y(r, n)), m = f.cssHooks[c] || f.cssHooks[n], g === b) return m && "get" in m && (e = m.get(a, !1, d)) !== b ? e : r[c];
                if (j = typeof g, "string" === j && (e = sd.exec(g)) && (g = (e[1] + 1) * e[2] + parseFloat(f.css(a, c)), j = "number"), !(null == g || "number" === j && isNaN(g) || ("number" !== j || f.cssNumber[n] || (g += "px"), f.support.clearCloneStyle || "" !== g || 0 !== c.indexOf("background") || (r[c] = "inherit"), m && "set" in m && (g = m.set(a, g,
                        d)) === b))) try {
                    r[c] = g
                } catch (k) {}
            }
        },
        css: function(a, c, g, d) {
            var e, j, m, n = f.camelCase(c);
            return c = f.cssProps[n] || (f.cssProps[n] = y(a.style, n)), m = f.cssHooks[c] || f.cssHooks[n], m && "get" in m && (j = m.get(a, !0, g)), j === b && (j = ta(a, c, d)), "normal" === j && c in pc && (j = pc[c]), "" === g || g ? (e = parseFloat(j), !0 === g || f.isNumeric(e) ? e || 0 : j) : j
        },
        swap: function(a, b, c, g) {
            var f, d = {};
            for (f in b) d[f] = a.style[f], a.style[f] = b[f];
            c = c.apply(a, g || []);
            for (f in b) a.style[f] = d[f];
            return c
        }
    });
    a.getComputedStyle ? (sa = function(b) {
        return a.getComputedStyle(b,
            null)
    }, ta = function(a, c, g) {
        var d, e, j, m = (g = g || sa(a)) ? g.getPropertyValue(c) || g[c] : b,
            n = a.style;
        return g && ("" !== m || f.contains(a.ownerDocument, a) || (m = f.style(a, c)), Ra.test(m) && oc.test(c) && (d = n.width, e = n.minWidth, j = n.maxWidth, n.minWidth = n.maxWidth = n.width = m, m = g.width, n.width = d, n.minWidth = e, n.maxWidth = j)), m
    }) : E.documentElement.currentStyle && (sa = function(a) {
        return a.currentStyle
    }, ta = function(a, c, g) {
        var f, d, e;
        g = (g = g || sa(a)) ? g[c] : b;
        var j = a.style;
        return null == g && j && j[c] && (g = j[c]), Ra.test(g) && !qd.test(c) && (f =
            j.left, d = a.runtimeStyle, e = d && d.left, e && (d.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : g, g = j.pixelLeft + "px", j.left = f, e && (d.left = e)), "" === g ? "auto" : g
    });
    f.each(["height", "width"], function(a, c) {
        f.cssHooks[c] = {
            get: function(a, g, d) {
                return g ? 0 === a.offsetWidth && rd.test(f.css(a, "display")) ? f.swap(a, td, function() {
                    return D(a, c, d)
                }) : D(a, c, d) : b
            },
            set: function(a, b, g) {
                var d = g && sa(a);
                return h(a, b, g ? L(a, c, g, f.support.boxSizing && "border-box" === f.css(a, "boxSizing", !1, d), d) : 0)
            }
        }
    });
    f.support.opacity || (f.cssHooks.opacity = {
        get: function(a, b) {
            return pd.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                g = a.currentStyle,
                d = f.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                e = g && g.filter || c.filter || "";
            c.zoom = 1;
            (1 <= b || "" === b) && "" === f.trim(e.replace(Ib, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || g && !g.filter) || (c.filter = Ib.test(e) ? e.replace(Ib, d) : e + " " + d)
        }
    });
    f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function(a, c) {
                return c ? f.swap(a, {
                    display: "inline-block"
                }, ta, [a, "marginRight"]) : b
            }
        });
        !f.support.pixelPosition && f.fn.position && f.each(["top", "left"], function(a, c) {
            f.cssHooks[c] = {
                get: function(a, g) {
                    return g ? (g = ta(a, c), Ra.test(g) ? f(a).position()[c] + "px" : g) : b
                }
            }
        })
    });
    f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !f.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || f.css(a, "display"))
    }, f.expr.filters.visible = function(a) {
        return !f.expr.filters.hidden(a)
    });
    f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        f.cssHooks[a + b] = {
            expand: function(c) {
                var g = 0,
                    f = {};
                for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > g; g++) f[a + ra[g] + b] = c[g] || c[g - 2] || c[0];
                return f
            }
        };
        oc.test(a) || (f.cssHooks[a + b].set = h)
    });
    var ud = /%20/g,
        Cc = /\[\]$/,
        qc = /\r?\n/g,
        vd = /^(?:submit|button|image|reset|file)$/i,
        wd = /^(?:input|select|textarea|keygen)/i;
    f.fn.extend({
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = f.prop(this,
                    "elements");
                return a ? f.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !f(this).is(":disabled") && wd.test(this.nodeName) && !vd.test(a) && (this.checked || !jb.test(a))
            }).map(function(a, b) {
                var c = f(this).val();
                return null == c ? null : f.isArray(c) ? f.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(qc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(qc, "\r\n")
                }
            }).get()
        }
    });
    f.param = function(a, c) {
        var g, d = [],
            e = function(a, b) {
                b = f.isFunction(b) ? b() : null == b ? "" : b;
                d[d.length] = encodeURIComponent(a) + "=" +
                    encodeURIComponent(b)
            };
        if (c === b && (c = f.ajaxSettings && f.ajaxSettings.traditional), f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (g in a) Y(g, a[g], c, e);
        return d.join("&").replace(ud, "+")
    };
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        f.fn[b] = function(a, c) {
            return 0 <
                arguments.length ? this.on(b, null, a, c) : this.trigger(b)
        }
    });
    f.fn.hover = function(a, b) {
        return this.mouseenter(a).mouseleave(b || a)
    };
    var za, qa, Jb = f.now(),
        Kb = /\?/,
        xd = /#.*$/,
        rc = /([?&])_=[^&]*/,
        yd = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        zd = /^(?:GET|HEAD)$/,
        Ad = /^\/\//,
        sc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        tc = f.fn.load,
        uc = {},
        kb = {},
        vc = "*/".concat("*");
    try {
        qa = Ma.href
    } catch (Hd) {
        qa = E.createElement("a"), qa.href = "", qa = qa.href
    }
    za = sc.exec(qa.toLowerCase()) || [];
    f.fn.load = function(a, c, g) {
        if ("string" != typeof a && tc) return tc.apply(this,
            arguments);
        var d, e, j, m = this,
            n = a.indexOf(" ");
        return 0 <= n && (d = a.slice(n, a.length), a = a.slice(0, n)), f.isFunction(c) ? (g = c, c = b) : c && "object" == typeof c && (j = "POST"), 0 < m.length && f.ajax({
            url: a,
            type: j,
            dataType: "html",
            data: c
        }).done(function(a) {
            e = arguments;
            m.html(d ? f("<div>").append(f.parseHTML(a)).find(d) : a)
        }).complete(g && function(a, b) {
            m.each(g, e || [a.responseText, b, a])
        }), this
    };
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        f.fn[b] = function(a) {
            return this.on(b,
                a)
        }
    });
    f.each(["get", "post"], function(a, c) {
        f[c] = function(a, g, d, e) {
            return f.isFunction(g) && (e = e || d, d = g, g = b), f.ajax({
                url: a,
                type: c,
                dataType: e,
                data: g,
                success: d
            })
        }
    });
    f.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qa,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(za[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": vc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Z(Z(a, f.ajaxSettings), b) : Z(f.ajaxSettings, a)
        },
        ajaxPrefilter: ja(uc),
        ajaxTransport: ja(kb),
        ajax: function(a, c) {
            function g(a, c, d, e) {
                var p, h, q, w, t, u = c;
                if (2 !== N) {
                    N = 2;
                    n && clearTimeout(n);
                    k = b;
                    m = e || "";
                    D.readyState = 0 < a ? 4 : 0;
                    if (d) {
                        w = s;
                        e = D;
                        var F, x, T, z, Ma = w.contents,
                            y = w.dataTypes,
                            A = w.responseFields;
                        for (z in A) z in d && (e[A[z]] = d[z]);
                        for (;
                            "*" === y[0];) y.shift(), x === b && (x = w.mimeType || e.getResponseHeader("Content-Type"));
                        if (x)
                            for (z in Ma)
                                if (Ma[z] && Ma[z].test(x)) {
                                    y.unshift(z);
                                    break
                                }
                        if (y[0] in d) T = y[0];
                        else {
                            for (z in d) {
                                if (!y[0] || w.converters[z + " " + y[0]]) {
                                    T = z;
                                    break
                                }
                                F || (F = z)
                            }
                            T = T || F
                        }
                        w = T ? (T !== y[0] && y.unshift(T), d[T]) : b
                    }
                    if (200 <= a && 300 > a || 304 === a)
                        if (s.ifModified && (t = D.getResponseHeader("Last-Modified"), t && (f.lastModified[j] = t), t = D.getResponseHeader("etag"), t && (f.etag[j] = t)),
                            204 === a) p = !0, u = "nocontent";
                        else if (304 === a) p = !0, u = "notmodified";
                    else {
                        var ia;
                        a: {
                            d = s;p = w;
                            var Q, B;q = {};t = 0;u = d.dataTypes.slice();F = u[0];
                            if (d.dataFilter && (p = d.dataFilter(p, d.dataType)), u[1])
                                for (Q in d.converters) q[Q.toLowerCase()] = d.converters[Q];
                            for (; h = u[++t];)
                                if ("*" !== h) {
                                    if ("*" !== F && F !== h) {
                                        if (Q = q[F + " " + h] || q["* " + h], !Q)
                                            for (ia in q)
                                                if (B = ia.split(" "), B[1] === h && (Q = q[F + " " + B[0]] || q["* " + B[0]])) {
                                                    !0 === Q ? Q = q[ia] : !0 !== q[ia] && (h = B[0], u.splice(t--, 0, h));
                                                    break
                                                }
                                        if (!0 !== Q)
                                            if (Q && d["throws"]) p = Q(p);
                                            else try {
                                                p = Q(p)
                                            } catch (Z) {
                                                ia = {
                                                    state: "parsererror",
                                                    error: Q ? Z : "No conversion from " + F + " to " + h
                                                };
                                                break a
                                            }
                                    }
                                    F = h
                                }
                            ia = {
                                state: "success",
                                data: p
                            }
                        }
                        p = ia;
                        u = p.state;
                        h = p.data;
                        q = p.error;
                        p = !q
                    } else q = u, (a || !u) && (u = "error", 0 > a && (a = 0));
                    D.status = a;
                    D.statusText = (c || u) + "";
                    p ? E.resolveWith(l, [h, u, D]) : E.rejectWith(l, [D, u, q]);
                    D.statusCode(Y);
                    Y = b;
                    r && M.trigger(p ? "ajaxSuccess" : "ajaxError", [D, s, p ? h : q]);
                    v.fireWith(l, [D, u]);
                    r && (M.trigger("ajaxComplete", [D, s]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (c = a, a = b);
            c = c || {};
            var d, e, j, m, n, r, k, h,
                s = f.ajaxSetup({}, c),
                l = s.context || s,
                M = s.context && (l.nodeType || l.jquery) ? f(l) : f.event,
                E = f.Deferred(),
                v = f.Callbacks("once memory"),
                Y = s.statusCode || {},
                t = {},
                u = {},
                N = 0,
                x = "canceled",
                D = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === N) {
                            if (!h)
                                for (h = {}; b = yd.exec(m);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === N ? m : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return N || (a = u[c] = u[c] || a, t[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return N ||
                            (s.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > N)
                                for (b in a) Y[b] = [Y[b], a[b]];
                            else D.always(a[D.status]);
                        return this
                    },
                    abort: function(a) {
                        a = a || x;
                        return k && k.abort(a), g(0, a), this
                    }
                };
            if (E.promise(D).complete = v.add, D.success = D.done, D.error = D.fail, s.url = ((a || s.url || qa) + "").replace(xd, "").replace(Ad, za[1] + "//"), s.type = c.method || c.type || s.method || s.type, s.dataTypes = f.trim(s.dataType || "*").toLowerCase().match(ga) || [""], (d = sc.exec(s.url.toLowerCase())), s.data && s.processData && "string" != typeof s.data && (s.data = f.param(s.data, s.traditional)), ka(uc, s, c, D), 2 === N) return D;
            (r = s.global) && 0 === f.active++ && f.event.trigger("ajaxStart");
            s.type = s.type.toUpperCase();
            s.hasContent = !zd.test(s.type);
            j = s.url;
            s.hasContent || (s.data && (j = s.url += (Kb.test(j) ? "&" : "?") + s.data, delete s.data), !1 === s.cache && (s.url = rc.test(j) ? j.replace(rc, "$1_=" + Jb++) : j + (Kb.test(j) ? "&" : "?") + "_=" + Jb++));
            s.ifModified &&
                (f.lastModified[j] && D.setRequestHeader("If-Modified-Since", f.lastModified[j]), f.etag[j] && D.setRequestHeader("If-None-Match", f.etag[j]));
            (s.data && s.hasContent && !1 !== s.contentType || c.contentType) && D.setRequestHeader("Content-Type", s.contentType);
            D.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + vc + "; q=0.01" : "") : s.accepts["*"]);
            for (e in s.headers) D.setRequestHeader(e, s.headers[e]);
            if (s.beforeSend && (!1 === s.beforeSend.call(l, D, s) ||
                    2 === N)) return D.abort();
            x = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) D[e](s[e]);
            if (k = ka(kb, s, c, D)) {
                D.readyState = 1;
                r && M.trigger("ajaxSend", [D, s]);
                s.async && 0 < s.timeout && (n = setTimeout(function() {
                    D.abort("timeout")
                }, s.timeout));
                try {
                    N = 1, k.send(t, g)
                } catch (z) {
                    if (!(2 > N)) throw z;
                    g(-1, z)
                }
            } else g(-1, "No Transport");
            return D
        },
        getScript: function(a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return f.get(a, b, c, "json")
        }
    });
    f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return f.globalEval(a), a
            }
        }
    });
    f.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1);
    });
    f.ajaxTransport("script", function(a) {
        var c, g = E.head || f("head")[0] || E.documentElement;
        return {
            send: function(b, f) {
                c = E.createElement("script");
                c.async = !0;
                a.scriptCharset && (c.charset = a.scriptCharset);
                c.src = a.url;
                c.onload = c.onreadystatechange = function(a, b) {
                    (b || !c.readyState ||
                        /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || f(200, "success"))
                };
                g.insertBefore(c, g.firstChild)
            },
            abort: function() {
                c && c.onload(b, !0)
            }
        }
    });
    var wc = [],
        Lb = /(=)\?(?=&|$)|\?\?/;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = wc.pop() || f.expando + "_" + Jb++;
            return this[a] = !0, a
        }
    });
    f.ajaxPrefilter("json jsonp", function(c, g, d) {
        var e, j, m, n = !1 !== c.jsonp && (Lb.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") &&
            Lb.test(c.data) && "data");
        return n || "jsonp" === c.dataTypes[0] ? (e = c.jsonpCallback = f.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, n ? c[n] = c[n].replace(Lb, "$1" + e) : !1 !== c.jsonp && (c.url += (Kb.test(c.url) ? "&" : "?") + c.jsonp + "=" + e), c.converters["script json"] = function() {
                return m || f.error(e + " was not called"), m[0]
            }, c.dataTypes[0] = "json", j = a[e], a[e] = function() {
                m = arguments
            }, d.always(function() {
                a[e] = j;
                c[e] && (c.jsonpCallback = g.jsonpCallback, wc.push(e));
                m && f.isFunction(j) && j(m[0]);
                m = j = b
            }), "script") :
            b
    });
    var Ja, Pa, Bd = 0,
        Mb = a.ActiveXObject && function() {
            for (var a in Ja) Ja[a](b, !0)
        };
    f.ajaxSettings.xhr = a.ActiveXObject ? function() {
        var b;
        if (!(b = !this.isLocal && ua())) a: {
            try {
                b = new a.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (c) {}
            b = void 0
        }
        return b
    } : ua;
    Pa = f.ajaxSettings.xhr();
    //f.support.cors = !!Pa && "withCredentials" in Pa;
    (Pa = f.support.ajax = !!Pa) && f.ajaxTransport(function(c) {
        var g;
        return {
            send: function(d, e) {
                var j, m, n = c.xhr();
                if (c.username ? n.open(c.type, c.url, c.async, c.username,
                        c.password) : n.open(c.type, c.url, c.async), c.xhrFields)
                    for (m in c.xhrFields) n[m] = c.xhrFields[m];
                c.mimeType && n.overrideMimeType && n.overrideMimeType(c.mimeType);
                try {
                    for (m in d) n.setRequestHeader(m, d[m])
                } catch (r) {}
                n.send(c.hasContent && c.data || null);
                g = function(a, d) {
                    var m, r, k, s;
                    try {
                        if (g && (d || 4 === n.readyState))
                            if (g = b, j && (n.onreadystatechange = f.noop, Mb && delete Ja[j]), d) 4 !== n.readyState && n.abort();
                            else {
                                s = {};
                                m = n.status;
                                r = n.getAllResponseHeaders();
                                "string" == typeof n.responseText && (s.text = n.responseText);
                                try {
                                    k = n.statusText
                                } catch (h) {
                                    k = ""
                                }
                            }
                    } catch (l) {
                        d || e(-1, l)
                    }
                    s && e(m, k, s, r)
                };
                c.async ? 4 === n.readyState ? setTimeout(g) : (j = ++Bd, Mb && (Ja || (Ja = {}, f(a).unload(Mb)), Ja[j] = g), n.onreadystatechange = g) : g()
            },
            abort: function() {
                g && g(b, !0)
            }
        }
    });
    var Ba, ib, Cd = /^(?:toggle|show|hide)$/,
        Dd = RegExp("^(?:([+-])=|)(" + Ua + ")([a-z%]*)$", "i"),
        Ed = /queueHooks$/,
        Sa = [function(a, b, c) {
            var g, d, e, j, m, n, r = this,
                k = a.style,
                s = {},
                h = [],
                l = a.nodeType && B(a);
            c.queue || (m = f._queueHooks(a, "fx"), null == m.unqueued && (m.unqueued = 0, n = m.empty.fire, m.empty.fire = function() {
                m.unqueued || n()
            }), m.unqueued++, r.always(function() {
                r.always(function() {
                    m.unqueued--;
                    f.queue(a, "fx").length || m.empty.fire()
                })
            }));
            1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [k.overflow, k.overflowX, k.overflowY], "inline" === f.css(a, "display") && "none" === f.css(a, "float") && (f.support.inlineBlockNeedsLayout && "inline" !== Q(a.nodeName) ? k.zoom = 1 : k.display = "inline-block"));
            c.overflow && (k.overflow = "hidden", f.support.shrinkWrapBlocks || r.always(function() {
                k.overflow = c.overflow[0];
                k.overflowX = c.overflow[1];
                k.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], Cd.exec(e))(delete b[d], g = g || "toggle" === e, e === (l ? "hide" : "show")) || h.push(d);
            if (b = h.length) {
                e = f._data(a, "fxshow") || f._data(a, "fxshow", {});
                "hidden" in e && (l = e.hidden);
                g && (e.hidden = !l);
                l ? f(a).show() : r.done(function() {
                    f(a).hide()
                });
                r.done(function() {
                    var b;
                    f._removeData(a, "fxshow");
                    for (b in s) f.style(a, b, s[b])
                });
                for (d = 0; b > d; d++) g =
                    h[d], j = r.createTween(g, l ? e[g] : 0), s[g] = e[g] || f.style(a, g), g in e || (e[g] = j.start, l && (j.end = j.start, j.start = "width" === g || "height" === g ? 1 : 0))
            }
        }],
        La = {
            "*": [function(a, b) {
                var c, g, d = this.createTween(a, b),
                    e = Dd.exec(b),
                    j = d.cur(),
                    m = +j || 0,
                    n = 1,
                    r = 20;
                if (e) {
                    if (c = +e[2], g = e[3] || (f.cssNumber[a] ? "" : "px"), "px" !== g && m) {
                        m = f.css(d.elem, a, !0) || c || 1;
                        do n = n || ".5", m /= n, f.style(d.elem, a, m + g); while (n !== (n = d.cur() / j) && 1 !== n && --r)
                    }
                    d.unit = g;
                    d.start = m;
                    d.end = e[1] ? m + (e[1] + 1) * c : c
                }
                return d
            }]
        };
    f.Animation = f.extend(j, {
        tweener: function(a,
            b) {
            f.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, g = 0, d = a.length; d > g; g++) c = a[g], La[c] = La[c] || [], La[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? Sa.unshift(a) : Sa.push(a)
        }
    });
    f.Tween = n;
    n.prototype = {
        constructor: n,
        init: function(a, b, c, g, d, e) {
            this.elem = a;
            this.prop = c;
            this.easing = d || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = g;
            this.unit = e || (f.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = n.propHooks[this.prop];
            return a && a.get ? a.get(this) : n.propHooks._default.get(this)
        },
        run: function(a) {
            var b,
                c = n.propHooks[this.prop];
            return this.pos = b = this.options.duration ? f.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : n.propHooks._default.set(this), this
        }
    };
    n.prototype.init.prototype = n.prototype;
    n.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = f.css(a.elem, a.prop, ""), b && "auto" !==
                    b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                f.fx.step[a.prop] ? f.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[f.cssProps[a.prop]] || f.cssHooks[a.prop]) ? f.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    n.propHooks.scrollTop = n.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    f.each(["toggle", "show", "hide"], function(a, b) {
        var c = f.fn[b];
        f.fn[b] = function(a, g, f) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(s(b, !0),
                a, g, f)
        }
    });
    f.fn.extend({
        fadeTo: function(a, b, c, g) {
            return this.filter(B).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, g)
        },
        animate: function(a, b, c, g) {
            var d = f.isEmptyObject(a),
                e = f.speed(b, c, g),
                m = function() {
                    var b = j(this, f.extend({}, a), e);
                    m.finish = function() {
                        b.stop(!0)
                    };
                    (d || f._data(this, "finish")) && b.stop(!0)
                };
            return m.finish = m, d || !1 === e.queue ? this.each(m) : this.queue(e.queue, m)
        },
        stop: function(a, c, g) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop;
                b(g)
            };
            return "string" != typeof a && (g = c, c = a, a = b), c && !1 !==
                a && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        c = null != a && a + "queueHooks",
                        e = f.timers,
                        j = f._data(this);
                    if (c) j[c] && j[c].stop && d(j[c]);
                    else
                        for (c in j) j[c] && j[c].stop && Ed.test(c) && d(j[c]);
                    for (c = e.length; c--;) e[c].elem !== this || null != a && e[c].queue !== a || (e[c].anim.stop(g), b = !1, e.splice(c, 1));
                    (b || !g) && f.dequeue(this, a)
                })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var b, c = f._data(this),
                    g = c[a + "queue"];
                b = c[a + "queueHooks"];
                var d = f.timers,
                    e = g ? g.length : 0;
                c.finish = !0;
                f.queue(this,
                    a, []);
                b && b.cur && b.cur.finish && b.cur.finish.call(this);
                for (b = d.length; b--;) d[b].elem === this && d[b].queue === a && (d[b].anim.stop(!0), d.splice(b, 1));
                for (b = 0; e > b; b++) g[b] && g[b].finish && g[b].finish.call(this);
                delete c.finish
            })
        }
    });
    f.each({
        slideDown: s("show"),
        slideUp: s("hide"),
        slideToggle: s("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        f.fn[a] = function(a, c, g) {
            return this.animate(b, a, c, g)
        }
    });
    f.speed = function(a, b, c) {
        var g = a && "object" == typeof a ? f.extend({},
            a) : {
            complete: c || !c && b || f.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !f.isFunction(b) && b
        };
        return g.duration = f.fx.off ? 0 : "number" == typeof g.duration ? g.duration : g.duration in f.fx.speeds ? f.fx.speeds[g.duration] : f.fx.speeds._default, (null == g.queue || !0 === g.queue) && (g.queue = "fx"), g.old = g.complete, g.complete = function() {
            f.isFunction(g.old) && g.old.call(this);
            g.queue && f.dequeue(this, g.queue)
        }, g
    };
    f.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }
    };
    f.timers = [];
    f.fx = n.prototype.init;
    f.fx.tick = function() {
        var a, c = f.timers,
            g = 0;
        for (Ba = f.now(); c.length > g; g++) a = c[g], a() || c[g] !== a || c.splice(g--, 1);
        c.length || f.fx.stop();
        Ba = b
    };
    f.fx.timer = function(a) {
        a() && f.timers.push(a) && f.fx.start()
    };
    f.fx.interval = 13;
    f.fx.start = function() {
        ib || (ib = setInterval(f.fx.tick, f.fx.interval))
    };
    f.fx.stop = function() {
        clearInterval(ib);
        ib = null
    };
    f.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    f.fx.step = {};
    f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
        return f.grep(f.timers, function(b) {
            return a === b.elem
        }).length
    });
    f.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            f.offset.setOffset(this, a, b)
        });
        var c, d, e = {
                top: 0,
                left: 0
            },
            j = this[0],
            m = j && j.ownerDocument;
        if (m) return c = m.documentElement, f.contains(c, j) ? (typeof j.getBoundingClientRect !== M && (e = j.getBoundingClientRect()), d = g(m), {
            top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
            left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
        }) : e
    };
    f.offset = {
        setOffset: function(a, b, c) {
            var g = f.css(a, "position");
            "static" === g && (a.style.position =
                "relative");
            var d = f(a),
                e = d.offset(),
                j = f.css(a, "top"),
                m = f.css(a, "left"),
                n = {},
                r = {},
                k, s;
            ("absolute" === g || "fixed" === g) && -1 < f.inArray("auto", [j, m]) ? (r = d.position(), k = r.top, s = r.left) : (k = parseFloat(j) || 0, s = parseFloat(m) || 0);
            f.isFunction(b) && (b = b.call(a, c, e));
            null != b.top && (n.top = b.top - e.top + k);
            null != b.left && (n.left = b.left - e.left + s);
            "using" in b ? b.using.call(a, n) : d.css(n)
        }
    };
    f.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    g = this[0];
                return "fixed" === f.css(g, "position") ? b = g.getBoundingClientRect() :
                    (a = this.offsetParent(), b = this.offset(), f.nodeName(a[0], "html") || (c = a.offset()), c.top += f.css(a[0], "borderTopWidth", !0), c.left += f.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - c.top - f.css(g, "marginTop", !0),
                        left: b.left - c.left - f.css(g, "marginLeft", !0)
                    }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || E.documentElement; a && !f.nodeName(a, "html") && "static" === f.css(a, "position");) a = a.offsetParent;
                return a || E.documentElement
            })
        }
    });
    f.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        },
        function(a, c) {
            var d = /Y/.test(c);
            f.fn[a] = function(e) {
                return f.access(this, function(a, e, j) {
                    var m = g(a);
                    return j === b ? m ? c in m ? m[c] : m.document.documentElement[e] : a[e] : (m ? m.scrollTo(d ? f(m).scrollLeft() : j, d ? j : f(m).scrollTop()) : a[e] = j, b)
                }, a, e, arguments.length, null)
            }
        });
    f.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        f.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(g, d) {
            f.fn[d] = function(d, e) {
                var j = arguments.length && (g || "boolean" != typeof d),
                    m = g || (!0 === d || !0 === e ? "margin" : "border");
                return f.access(this,
                    function(c, g, d) {
                        var e;
                        return f.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (e = c.documentElement, Math.max(c.body["scroll" + a], e["scroll" + a], c.body["offset" + a], e["offset" + a], e["client" + a])) : d === b ? f.css(c, g, m) : f.style(c, g, d, m)
                    }, c, j ? d : b, j, null)
            }
        })
    });
    a.jQuery = a.$ = f;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return f
    })
})(window);
(function(a) {
    function b(b, c, d, e) {
        e = {
            data: e || 0 === e || !1 === e ? e : c ? c.data : {},
            _wrap: c ? c._wrap : null,
            tmpl: null,
            parent: c || null,
            nodes: [],
            calls: H,
            nest: z,
            wrap: P,
            html: G,
            update: C
        };
        b && a.extend(e, b, {
            nodes: [],
            parent: c
        });
        d && (e.tmpl = d, e._ctnt = e._ctnt || e.tmpl(a, e), e.key = ++V, (L.length ? x : u)[V] = e);
        return e
    }

    function c(b, d, k) {
        var h;
        k = k ? a.map(k, function(a) {
            return "string" === typeof a ? b.key ? a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + t + '="' + b.key + '" $2') : a : c(a, b, a._ctnt)
        }) : b;
        if (d) return k;
        k = k.join("");
        k.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,
            function(b, c, d, k) {
                h = a(d).get();
                l(h);
                c && (h = e(c).concat(h));
                k && (h = h.concat(e(k)))
            });
        return h ? h : e(k)
    }

    function e(b) {
        var c = document.createElement("div");
        c.innerHTML = b;
        return a.makeArray(c.childNodes)
    }

    function d(b) {
        return new Function("jQuery", "$item", "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + a.trim(b).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
                function(b, c, d, e, k, h, l) {
                    b = a.tmpl.tag[d];
                    if (!b) throw "Unknown template tag: " + d;
                    d = b._default || [];
                    h && !/\w$/.test(k) && (k += h, h = "");
                    k ? (k = v(k), l = l ? "," + v(l) + ")" : h ? ")" : "", l = h ? -1 < k.indexOf(".") ? k + v(h) : "(" + k + ").call($item" + l : k, h = h ? l : "(typeof(" + k + ")==='function'?(" + k + ").call($item):(" + k + "))") : h = l = d.$1 || "null";
                    e = v(e);
                    return "');" + b[c ? "close" : "open"].split("$notnull_1").join(k ? "typeof(" + k + ")!=='undefined' && (" + k + ")!=null" : "true").split("$1a").join(h).split("$1").join(l).split("$2").join(e || d.$2 || "") + "__.push('"
                }) +
            "');}return __;")
    }

    function k(b, d) {
        b._wrap = c(b, !0, a.isArray(d) ? d : [A.test(d) ? d : a(d).html()]).join("")
    }

    function v(a) {
        return a ? a.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
    }

    function l(c) {
        function d(c) {
            function n(a) {
                a += e;
                m = v[a] = v[a] || b(m, u[m.parent.key + e] || m.parent)
            }
            var k, g = c,
                m, r;
            if (r = c.getAttribute(t)) {
                for (; g.parentNode && 1 === (g = g.parentNode).nodeType && !(k = g.getAttribute(t)););
                if (k !== r) {
                    g = g.parentNode ? 11 === g.nodeType ? 0 : g.getAttribute(t) || 0 : 0;
                    if (!(m = u[r])) m = x[r], m = b(m, u[g] || x[g]), m.key = ++V, u[V] = m;
                    h &&
                        n(r)
                }
                c.removeAttribute(t)
            } else if (h && (m = a.data(c, "tmplItem"))) n(m.key), u[m.key] = m, g = (g = a.data(c.parentNode, "tmplItem")) ? g.key : 0;
            if (m) {
                for (k = m; k && k.key != g;) k.nodes.push(c), k = k.parent;
                delete m._ctnt;
                delete m._wrap;
                a.data(c, "tmplItem", m)
            }
        }
        var e = "_" + h,
            k, l, v = {},
            z, y, A;
        z = 0;
        for (y = c.length; z < y; z++)
            if (1 === (k = c[z]).nodeType) {
                l = k.getElementsByTagName("*");
                for (A = l.length - 1; 0 <= A; A--) d(l[A]);
                d(k)
            }
    }

    function H(a, b, c, d) {
        if (!a) return L.pop();
        L.push({
            _: a,
            tmpl: b,
            item: this,
            data: c,
            options: d
        })
    }

    function z(b, c, d) {
        return a.tmpl(a.template(b),
            c, d, this)
    }

    function P(b, c) {
        var d = b.options || {};
        d.wrapped = c;
        return a.tmpl(a.template(b.tmpl), b.data, d, b.item)
    }

    function G(b, c) {
        var d = this._wrap;
        return a.map(a(a.isArray(d) ? d.join("") : d).filter(b || "*"), function(a) {
            if (c) a = a.innerText || a.textContent;
            else {
                var b;
                if (!(b = a.outerHTML)) b = document.createElement("div"), b.appendChild(a.cloneNode(!0)), b = b.innerHTML;
                a = b
            }
            return a
        })
    }

    function C() {
        var b = this.nodes;
        a.tmpl(null, null, null, this).insertBefore(b[0]);
        a(b).remove()
    }
    var I = a.fn.domManip,
        t = "_tmplitem",
        A = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
        u = {},
        x = {},
        y, B = {
            key: 0,
            data: {}
        },
        V = 0,
        h = 0,
        L = [];
    a.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        a.fn[b] = function(d) {
            var e = [];
            d = a(d);
            var k, l, v;
            k = 1 === this.length && this[0].parentNode;
            y = u || {};
            if (k && 11 === k.nodeType && 1 === k.childNodes.length && 1 === d.length) d[c](this[0]), e = this;
            else {
                l = 0;
                for (v = d.length; l < v; l++) h = l, k = (0 < l ? this.clone(!0) : this).get(), a(d[l])[c](k), e = e.concat(k);
                h = 0;
                e = this.pushStack(e, b, d.selector)
            }
            d = y;
            y = null;
            a.tmpl.complete(d);
            return e
        }
    });
    a.fn.extend({
        tmpl: function(b, c, d) {
            return a.tmpl(this[0], b, c, d)
        },
        tmplItem: function() {
            return a.tmplItem(this[0])
        },
        template: function(b) {
            return a.template(b, this[0])
        },
        domManip: function(b, c, d) {
            if (b[0] && a.isArray(b[0])) {
                for (var e = a.makeArray(arguments), k = b[0], l = k.length, v = 0, t; v < l && !(t = a.data(k[v++], "tmplItem")););
                t && h && (e[2] = function(b) {
                    a.tmpl.afterManip(this, b, d)
                });
                I.apply(this, e)
            } else I.apply(this, arguments);
            h = 0;
            !y && a.tmpl.complete(u);
            return this
        }
    });
    a.extend({
        tmpl: function(d, e, h, l) {
            var v = !l;
            if (v) l = B, d = a.template[d] || a.template(null, d), x = {};
            else if (!d) return d = l.tmpl, u[l.key] = l, l.nodes = [], l.wrapped && k(l, l.wrapped), a(c(l, null, l.tmpl(a, l)));
            if (!d) return [];
            "function" === typeof e && (e = e.call(l || {}));
            h && h.wrapped && k(h, h.wrapped);
            e = a.isArray(e) ? a.map(e, function(a) {
                return a ? b(h, l, d, a) : null
            }) : [b(h, l, d, e)];
            return v ? a(c(l, null, e)) : e
        },
        tmplItem: function(b) {
            var c;
            for (b instanceof a && (b = b[0]); b && 1 === b.nodeType && !(c = a.data(b, "tmplItem")) && (b = b.parentNode););
            return c || B
        },
        template: function(b, c) {
            return c ?
                ("string" === typeof c ? c = d(c) : c instanceof a && (c = c[0] || {}), c.nodeType && (c = a.data(c, "tmpl") || a.data(c, "tmpl", d(c.innerHTML))), "string" === typeof b ? a.template[b] = c : c) : b ? "string" !== typeof b ? a.template(null, b) : a.template[b] || a.template(null, A.test(b) ? b : a(b)) : null
        },
        encode: function(a) {
            return ("" + a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
        }
    });
    a.extend(a.tmpl, {
        tag: {
            tmpl: {
                _default: {
                    $2: "null"
                },
                open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"
            },
            wrap: {
                _default: {
                    $2: "null"
                },
                open: "$item.calls(__,$1,$2);__=[];",
                close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
            },
            each: {
                _default: {
                    $2: "$index, $value"
                },
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {
                open: "if(($notnull_1) && $1a){",
                close: "}"
            },
            "else": {
                _default: {
                    $1: "true"
                },
                open: "}else if(($notnull_1) && $1a){"
            },
            html: {
                open: "if($notnull_1){__.push($1a);}"
            },
            "=": {
                _default: {
                    $1: "$data"
                },
                open: "if($notnull_1){__.push($.encode($1a));}"
            },
            "!": {
                open: ""
            }
        },
        complete: function() {
            u = {}
        },
        afterManip: function(b,
            c, d) {
            var e = 11 === c.nodeType ? a.makeArray(c.childNodes) : 1 === c.nodeType ? [c] : [];
            d.call(b, c);
            l(e);
            h++
        }
    })
})(jQuery);
(function(a, b) {
    function c(a) {
        a = a.tagName;
        return a !== b ? e[a.toLowerCase()] : a
    }
    var e = {
            a: "href",
            img: "src",
            form: "action",
            base: "href",
            script: "src",
            iframe: "src",
            link: "href"
        },
        d = "source protocol authority userInfo user password host port relative path directory file query fragment".split(" "),
        k = {
            anchor: "fragment"
        },
        v = {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        },
        l = /(?:^|&|;)([^&=;]*)=?([^&;]*)/g,
        H = /(?:^|&|;)([^&=;]*)=?([^&;]*)/g;
    a.fn.url = function(b) {
        var d = "";
        this.length && (d = a(this).attr(c(this[0])) || "");
        return a.url({
            url: d,
            strict: b
        })
    };
    a.url = function(a) {
        var c = "",
            e = !1;
        "string" === typeof a ? c = a : (a = a || {}, e = a.strict || e, c = a.url === b ? window.location.toString() : a.url);
        a = e;
        var c = decodeURI(c),
            c = v[a ? "strict" : "loose"].exec(c),
            C = {
                attr: {},
                param: {},
                seg: {}
            };
        for (a = 14; a--;) C.attr[d[a]] = c[a] || "";
        C.param.query = {};
        C.param.fragment = {};
        C.attr.query.replace(l, function(a, b, c) {
            b && (C.param.query[b] =
                c)
        });
        C.attr.fragment.replace(H, function(a, b, c) {
            b && (C.param.fragment[b] = c)
        });
        C.seg.path = C.attr.path.replace(/^\/+|\/+$/g, "").split("/");
        C.seg.fragment = C.attr.fragment.replace(/^\/+|\/+$/g, "").split("/");
        C.attr.base = C.attr.host ? C.attr.protocol + "://" + C.attr.host + (C.attr.port ? ":" + C.attr.port : "") : "";
        return {
            data: C,
            attr: function(a) {
                a = k[a] || a;
                return a !== b ? this.data.attr[a] : this.data.attr
            },
            param: function(a) {
                return a !== b ? this.data.param.query[a] : this.data.param.query
            },
            fparam: function(a) {
                return a !== b ? this.data.param.fragment[a] :
                    this.data.param.fragment
            },
            segment: function(a) {
                if (a === b) return this.data.seg.path;
                a = 0 > a ? this.data.seg.path.length + a : a - 1;
                return this.data.seg.path[a]
            },
            fsegment: function(a) {
                if (a === b) return this.data.seg.fragment;
                a = 0 > a ? this.data.seg.fragment.length + a : a - 1;
                return this.data.seg.fragment[a]
            }
        }
    }
})(jQuery);
! function() {
    var a = this,
        b = a._,
        c = {},
        e = Array.prototype,
        d = Object.prototype,
        k = e.push,
        v = e.slice,
        l = e.concat,
        H = d.toString,
        z = d.hasOwnProperty,
        P = e.forEach,
        G = e.map,
        C = e.reduce,
        I = e.reduceRight,
        t = e.filter,
        A = e.every,
        u = e.some,
        x = e.indexOf,
        y = e.lastIndexOf,
        d = Array.isArray,
        B = Object.keys,
        V = Function.prototype.bind,
        h = function(a) {
            return a instanceof h ? a : this instanceof h ? (this._wrapped = a, void 0) : new h(a)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = h), exports._ = h) : a._ =
        h;
    h.VERSION = "1.5.1";
    var L = h.each = h.forEach = function(a, b, d) {
        if (null != a)
            if (P && a.forEach === P) a.forEach(b, d);
            else if (a.length === +a.length)
            for (var e = 0, j = a.length; j > e && b.call(d, a[e], e, a) !== c; e++);
        else
            for (e in a)
                if (h.has(a, e) && b.call(d, a[e], e, a) === c) break
    };
    h.map = h.collect = function(a, b, c) {
        var d = [];
        return null == a ? d : G && a.map === G ? a.map(b, c) : (L(a, function(a, g, e) {
            d.push(b.call(c, a, g, e))
        }), d)
    };
    h.reduce = h.foldl = h.inject = function(a, b, c, d) {
        var e = 2 < arguments.length;
        if (null == a && (a = []), C && a.reduce === C) return d && (b =
            h.bind(b, d)), e ? a.reduce(b, c) : a.reduce(b);
        if (L(a, function(a, g, j) {
                e ? c = b.call(d, c, a, g, j) : (c = a, e = !0)
            }), !e) throw new TypeError("Reduce of empty array with no initial value");
        return c
    };
    h.reduceRight = h.foldr = function(a, b, c, d) {
        var e = 2 < arguments.length;
        if (null == a && (a = []), I && a.reduceRight === I) return d && (b = h.bind(b, d)), e ? a.reduceRight(b, c) : a.reduceRight(b);
        var j = a.length;
        if (j !== +j) var n = h.keys(a),
            j = n.length;
        if (L(a, function(k, s, h) {
                s = n ? n[--j] : --j;
                e ? c = b.call(d, c, a[s], s, h) : (c = a[s], e = !0)
            }), !e) throw new TypeError("Reduce of empty array with no initial value");
        return c
    };
    h.find = h.detect = function(a, b, c) {
        var d;
        return D(a, function(a, g, e) {
            return b.call(c, a, g, e) ? (d = a, !0) : void 0
        }), d
    };
    h.filter = h.select = function(a, b, c) {
        var d = [];
        return null == a ? d : t && a.filter === t ? a.filter(b, c) : (L(a, function(a, g, e) {
            b.call(c, a, g, e) && d.push(a)
        }), d)
    };
    h.reject = function(a, b, c) {
        return h.filter(a, function(a, g, d) {
            return !b.call(c, a, g, d)
        }, c)
    };
    h.every = h.all = function(a, b, d) {
        b || (b = h.identity);
        var e = !0;
        return null == a ? e : A && a.every === A ? a.every(b, d) : (L(a, function(a, g, j) {
            return (e = e && b.call(d, a, g, j)) ?
                void 0 : c
        }), !!e)
    };
    var D = h.some = h.any = function(a, b, d) {
        b || (b = h.identity);
        var e = !1;
        return null == a ? e : u && a.some === u ? a.some(b, d) : (L(a, function(a, g, j) {
            return e || (e = b.call(d, a, g, j)) ? c : void 0
        }), !!e)
    };
    h.contains = h.include = function(a, b) {
        return null == a ? !1 : x && a.indexOf === x ? -1 != a.indexOf(b) : D(a, function(a) {
            return a === b
        })
    };
    h.invoke = function(a, b) {
        var c = v.call(arguments, 2),
            d = h.isFunction(b);
        return h.map(a, function(a) {
            return (d ? b : a[b]).apply(a, c)
        })
    };
    h.pluck = function(a, b) {
        return h.map(a, function(a) {
            return a[b]
        })
    };
    h.where =
        function(a, b, c) {
            return h.isEmpty(b) ? c ? void 0 : [] : h[c ? "find" : "filter"](a, function(a) {
                for (var c in b)
                    if (b[c] !== a[c]) return !1;
                return !0
            })
        };
    h.findWhere = function(a, b) {
        return h.where(a, b, !0)
    };
    h.max = function(a, b, c) {
        if (!b && h.isArray(a) && a[0] === +a[0] && 65535 > a.length) return Math.max.apply(Math, a);
        if (!b && h.isEmpty(a)) return -1 / 0;
        var d = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return L(a, function(a, g, e) {
            g = b ? b.call(c, a, g, e) : a;
            g > d.computed && (d = {
                value: a,
                computed: g
            })
        }), d.value
    };
    h.min = function(a, b, c) {
        if (!b && h.isArray(a) && a[0] === +a[0] &&
            65535 > a.length) return Math.min.apply(Math, a);
        if (!b && h.isEmpty(a)) return 1 / 0;
        var d = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return L(a, function(a, g, e) {
            g = b ? b.call(c, a, g, e) : a;
            g < d.computed && (d = {
                value: a,
                computed: g
            })
        }), d.value
    };
    h.shuffle = function(a) {
        var b, c = 0,
            d = [];
        return L(a, function(a) {
            b = h.random(c++);
            d[c - 1] = d[b];
            d[b] = a
        }), d
    };
    var Q = function(a) {
        return h.isFunction(a) ? a : function(b) {
            return b[a]
        }
    };
    h.sortBy = function(a, b, c) {
        var d = Q(b);
        return h.pluck(h.map(a, function(a, b, g) {
            return {
                value: a,
                index: b,
                criteria: d.call(c, a, b, g)
            }
        }).sort(function(a,
            b) {
            var c = a.criteria,
                d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (d > c || void 0 === d) return -1
            }
            return a.index < b.index ? -1 : 1
        }), "value")
    };
    var N = function(a, b, c, d) {
        var e = {},
            j = Q(null == b ? h.identity : b);
        return L(a, function(b, m) {
            var n = j.call(c, b, m, a);
            d(e, n, b)
        }), e
    };
    h.groupBy = function(a, b, c) {
        return N(a, b, c, function(a, b, c) {
            (h.has(a, b) ? a[b] : a[b] = []).push(c)
        })
    };
    h.countBy = function(a, b, c) {
        return N(a, b, c, function(a, b) {
            h.has(a, b) || (a[b] = 0);
            a[b]++
        })
    };
    h.sortedIndex = function(a, b, c, d) {
        c = null == c ? h.identity : Q(c);
        b = c.call(d,
            b);
        for (var e = 0, j = a.length; j > e;) {
            var n = e + j >>> 1;
            c.call(d, a[n]) < b ? e = n + 1 : j = n
        }
        return e
    };
    h.toArray = function(a) {
        return a ? h.isArray(a) ? v.call(a) : a.length === +a.length ? h.map(a, h.identity) : h.values(a) : []
    };
    h.size = function(a) {
        return null == a ? 0 : a.length === +a.length ? a.length : h.keys(a).length
    };
    h.first = h.head = h.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : v.call(a, 0, b)
    };
    h.initial = function(a, b, c) {
        return v.call(a, 0, a.length - (null == b || c ? 1 : b))
    };
    h.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length -
            1] : v.call(a, Math.max(a.length - b, 0))
    };
    h.rest = h.tail = h.drop = function(a, b, c) {
        return v.call(a, null == b || c ? 1 : b)
    };
    h.compact = function(a) {
        return h.filter(a, h.identity)
    };
    var Y = function(a, b, c) {
        return b && h.every(a, h.isArray) ? l.apply(c, a) : (L(a, function(a) {
            h.isArray(a) || h.isArguments(a) ? b ? k.apply(c, a) : Y(a, b, c) : c.push(a)
        }), c)
    };
    h.flatten = function(a, b) {
        return Y(a, b, [])
    };
    h.without = function(a) {
        return h.difference(a, v.call(arguments, 1))
    };
    h.uniq = h.unique = function(a, b, c, d) {
        h.isFunction(b) && (d = c, c = b, b = !1);
        c = c ? h.map(a, c,
            d) : a;
        var e = [],
            j = [];
        return L(c, function(c, d) {
            (b ? d && j[j.length - 1] === c : h.contains(j, c)) || (j.push(c), e.push(a[d]))
        }), e
    };
    h.union = function() {
        return h.uniq(h.flatten(arguments, !0))
    };
    h.intersection = function(a) {
        var b = v.call(arguments, 1);
        return h.filter(h.uniq(a), function(a) {
            return h.every(b, function(b) {
                return 0 <= h.indexOf(b, a)
            })
        })
    };
    h.difference = function(a) {
        var b = l.apply(e, v.call(arguments, 1));
        return h.filter(a, function(a) {
            return !h.contains(b, a)
        })
    };
    h.zip = function() {
        for (var a = h.max(h.pluck(arguments, "length").concat(0)),
                b = Array(a), c = 0; a > c; c++) b[c] = h.pluck(arguments, "" + c);
        return b
    };
    h.object = function(a, b) {
        if (null == a) return {};
        for (var c = {}, d = 0, e = a.length; e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    };
    h.indexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = 0,
            e = a.length;
        if (c) {
            if ("number" != typeof c) return d = h.sortedIndex(a, b), a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c
        }
        if (x && a.indexOf === x) return a.indexOf(b, c);
        for (; e > d; d++)
            if (a[d] === b) return d;
        return -1
    };
    h.lastIndexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = null != c;
        if (y && a.lastIndexOf ===
            y) return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (c = d ? c : a.length; c--;)
            if (a[c] === b) return c;
        return -1
    };
    h.range = function(a, b, c) {
        1 >= arguments.length && (b = a || 0, a = 0);
        c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, j = Array(d); d > e;) j[e++] = a, a += c;
        return j
    };
    var ja = function() {};
    h.bind = function(a, b) {
        var c, d;
        if (V && a.bind === V) return V.apply(a, v.call(arguments, 1));
        if (!h.isFunction(a)) throw new TypeError;
        return c = v.call(arguments, 2), d = function() {
            if (!(this instanceof d)) return a.apply(b, c.concat(v.call(arguments)));
            ja.prototype = a.prototype;
            var e = new ja;
            ja.prototype = null;
            var j = a.apply(e, c.concat(v.call(arguments)));
            return Object(j) === j ? j : e
        }
    };
    h.partial = function(a) {
        var b = v.call(arguments, 1);
        return function() {
            return a.apply(this, b.concat(v.call(arguments)))
        }
    };
    h.bindAll = function(a) {
        var b = v.call(arguments, 1);
        if (0 === b.length) throw Error("bindAll must be passed function names");
        return L(b, function(b) {
            a[b] = h.bind(a[b], a)
        }), a
    };
    h.memoize = function(a, b) {
        var c = {};
        return b || (b = h.identity),
            function() {
                var d = b.apply(this, arguments);
                return h.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
            }
    };
    h.delay = function(a, b) {
        var c = v.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c)
        }, b)
    };
    h.defer = function(a) {
        return h.delay.apply(h, [a, 1].concat(v.call(arguments, 1)))
    };
    h.throttle = function(a, b, c) {
        var d, e, j, n = null,
            k = 0;
        c || (c = {});
        var s = function() {
            k = !1 === c.leading ? 0 : new Date;
            n = null;
            j = a.apply(d, e)
        };
        return function() {
            var h = new Date;
            k || !1 !== c.leading || (k = h);
            var l = b - (h - k);
            return d = this, e = arguments, 0 >= l ? (clearTimeout(n), n = null, k = h, j = a.apply(d,
                e)) : n || !1 === c.trailing || (n = setTimeout(s, l)), j
        }
    };
    h.debounce = function(a, b, c) {
        var d, e = null;
        return function() {
            var j = this,
                n = arguments,
                k = c && !e;
            return clearTimeout(e), e = setTimeout(function() {
                e = null;
                c || (d = a.apply(j, n))
            }, b), k && (d = a.apply(j, n)), d
        }
    };
    h.once = function(a) {
        var b, c = !1;
        return function() {
            return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b)
        }
    };
    h.wrap = function(a, b) {
        return function() {
            var c = [a];
            return k.apply(c, arguments), b.apply(this, c)
        }
    };
    h.compose = function() {
        var a = arguments;
        return function() {
            for (var b =
                    arguments, c = a.length - 1; 0 <= c; c--) b = [a[c].apply(this, b)];
            return b[0]
        }
    };
    h.after = function(a, b) {
        return function() {
            return 1 > --a ? b.apply(this, arguments) : void 0
        }
    };
    h.keys = B || function(a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var b = [],
            c;
        for (c in a) h.has(a, c) && b.push(c);
        return b
    };
    h.values = function(a) {
        var b = [],
            c;
        for (c in a) h.has(a, c) && b.push(a[c]);
        return b
    };
    h.pairs = function(a) {
        var b = [],
            c;
        for (c in a) h.has(a, c) && b.push([c, a[c]]);
        return b
    };
    h.invert = function(a) {
        var b = {},
            c;
        for (c in a) h.has(a, c) && (b[a[c]] =
            c);
        return b
    };
    h.functions = h.methods = function(a) {
        var b = [],
            c;
        for (c in a) h.isFunction(a[c]) && b.push(c);
        return b.sort()
    };
    h.extend = function(a) {
        return L(v.call(arguments, 1), function(b) {
            if (b)
                for (var c in b) a[c] = b[c]
        }), a
    };
    h.pick = function(a) {
        var b = {},
            c = l.apply(e, v.call(arguments, 1));
        return L(c, function(c) {
            c in a && (b[c] = a[c])
        }), b
    };
    h.omit = function(a) {
        var b = {},
            c = l.apply(e, v.call(arguments, 1)),
            d;
        for (d in a) h.contains(c, d) || (b[d] = a[d]);
        return b
    };
    h.defaults = function(a) {
        return L(v.call(arguments, 1), function(b) {
            if (b)
                for (var c in b) void 0 ===
                    a[c] && (a[c] = b[c])
        }), a
    };
    h.clone = function(a) {
        return h.isObject(a) ? h.isArray(a) ? a.slice() : h.extend({}, a) : a
    };
    h.tap = function(a, b) {
        return b(a), a
    };
    var ka = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof h && (a = a._wrapped);
        b instanceof h && (b = b._wrapped);
        var e = H.call(a);
        if (e != H.call(b)) return !1;
        switch (e) {
            case "[object String]":
                return a == String(b);
            case "[object Number]":
                return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
            case "[object Date]":
            case "[object Boolean]":
                return +a ==
                    +b;
            case "[object RegExp]":
                return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        if ("object" != typeof a || "object" != typeof b) return !1;
        for (var j = c.length; j--;)
            if (c[j] == a) return d[j] == b;
        var j = a.constructor,
            n = b.constructor;
        if (j !== n && (!h.isFunction(j) || !(j instanceof j && h.isFunction(n) && n instanceof n))) return !1;
        c.push(a);
        d.push(b);
        j = 0;
        n = !0;
        if ("[object Array]" == e) {
            if (j = a.length, n = j == b.length)
                for (; j-- && (n = ka(a[j], b[j], c, d)););
        } else {
            for (var k in a)
                if (h.has(a, k) &&
                    (j++, !(n = h.has(b, k) && ka(a[k], b[k], c, d)))) break;
            if (n) {
                for (k in b)
                    if (h.has(b, k) && !j--) break;
                n = !j
            }
        }
        return c.pop(), d.pop(), n
    };
    h.isEqual = function(a, b) {
        return ka(a, b, [], [])
    };
    h.isEmpty = function(a) {
        if (null == a) return !0;
        if (h.isArray(a) || h.isString(a)) return 0 === a.length;
        for (var b in a)
            if (h.has(a, b)) return !1;
        return !0
    };
    h.isElement = function(a) {
        return !(!a || 1 !== a.nodeType)
    };
    h.isArray = d || function(a) {
        return "[object Array]" == H.call(a)
    };
    h.isObject = function(a) {
        return a === Object(a)
    };
    L("Arguments Function String Number Date RegExp".split(" "),
        function(a) {
            h["is" + a] = function(b) {
                return H.call(b) == "[object " + a + "]"
            }
        });
    h.isArguments(arguments) || (h.isArguments = function(a) {
        return !(!a || !h.has(a, "callee"))
    });
    "function" != typeof /./ && (h.isFunction = function(a) {
        return "function" == typeof a
    });
    h.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    };
    h.isNaN = function(a) {
        return h.isNumber(a) && a != +a
    };
    h.isBoolean = function(a) {
        return !0 === a || !1 === a || "[object Boolean]" == H.call(a)
    };
    h.isNull = function(a) {
        return null === a
    };
    h.isUndefined = function(a) {
        return void 0 ===
            a
    };
    h.has = function(a, b) {
        return z.call(a, b)
    };
    h.noConflict = function() {
        return a._ = b, this
    };
    h.identity = function(a) {
        return a
    };
    h.times = function(a, b, c) {
        for (var d = Array(Math.max(0, a)), e = 0; a > e; e++) d[e] = b.call(c, e);
        return d
    };
    h.random = function(a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
    };
    var Z = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    Z.unescape = h.invert(Z.escape);
    var ua = {
        escape: RegExp("[" + h.keys(Z.escape).join("") + "]", "g"),
        unescape: RegExp("(" + h.keys(Z.unescape).join("|") +
            ")", "g")
    };
    h.each(["escape", "unescape"], function(a) {
        h[a] = function(b) {
            return null == b ? "" : ("" + b).replace(ua[a], function(b) {
                return Z[a][b]
            })
        }
    });
    h.result = function(a, b) {
        if (null != a) {
            var c = a[b];
            return h.isFunction(c) ? c.call(a) : c
        }
    };
    h.mixin = function(a) {
        L(h.functions(a), function(b) {
            var c = h[b] = a[b];
            h.prototype[b] = function() {
                var a = [this._wrapped];
                k.apply(a, arguments);
                a = c.apply(h, a);
                return this._chain ? h(a).chain() : a
            }
        })
    };
    var ha = 0;
    h.uniqueId = function(a) {
        var b = ++ha + "";
        return a ? a + b : b
    };
    h.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var j = /(.)^/,
        n = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\t": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        s = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    h.template = function(a, b, c) {
        var d;
        c = h.defaults({}, c, h.templateSettings);
        var e = RegExp([(c.escape || j).source, (c.interpolate || j).source, (c.evaluate || j).source].join("|") + "|$", "g"),
            k = 0,
            l = "__p+='";
        a.replace(e, function(b, c, d, e, j) {
            return l += a.slice(k, j).replace(s, function(a) {
                    return "\\" + n[a]
                }), c && (l += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"),
                d && (l += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"), e && (l += "';\n" + e + "\n__p+='"), k = j + b.length, b
        });
        l += "';\n";
        c.variable || (l = "with(obj||{}){\n" + l + "}\n");
        l = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + l + "return __p;\n";
        try {
            d = new Function(c.variable || "obj", "_", l)
        } catch (v) {
            throw v.source = l, v;
        }
        if (b) return d(b, h);
        b = function(a) {
            return d.call(this, a, h)
        };
        return b.source = "function(" + (c.variable || "obj") + "){\n" + l + "}", b
    };
    h.chain = function(a) {
        return h(a).chain()
    };
    h.mixin(h);
    L("pop push reverse shift sort splice unshift".split(" "), function(a) {
        var b = e[a];
        h.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" != a && "splice" != a || 0 !== c.length || delete c[0], this._chain ? h(c).chain() : c
        }
    });
    L(["concat", "join", "slice"], function(a) {
        var b = e[a];
        h.prototype[a] = function() {
            var a = b.apply(this._wrapped, arguments);
            return this._chain ? h(a).chain() : a
        }
    });
    h.extend(h.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}.call(this);
(function() {
    var a = this,
        b = a.Backbone,
        c = [],
        e = c.push,
        d = c.slice,
        k = c.splice,
        v;
    v = "undefined" !== typeof exports ? exports : a.Backbone = {};
    v.VERSION = "1.0.0";
    var l = a._;
    !l && "undefined" !== typeof require && (l = require("underscore"));
    v.$ = a.jQuery || a.Zepto || a.ender || a.$;
    v.noConflict = function() {
        a.Backbone = b;
        return this
    };
    v.emulateHTTP = !1;
    v.emulateJSON = !1;
    var H = v.Events = {
            on: function(a, b, c) {
                if (!P(this, "on", a, [b, c]) || !b) return this;
                this._events || (this._events = {});
                (this._events[a] || (this._events[a] = [])).push({
                    callback: b,
                    context: c,
                    ctx: c || this
                });
                return this
            },
            once: function(a, b, c) {
                if (!P(this, "once", a, [b, c]) || !b) return this;
                var d = this,
                    e = l.once(function() {
                        d.off(a, e);
                        b.apply(this, arguments)
                    });
                e._callback = b;
                return this.on(a, e, c)
            },
            off: function(a, b, c) {
                var d, e, k, h, v, u, t, x;
                if (!this._events || !P(this, "off", a, [b, c])) return this;
                if (!a && !b && !c) return this._events = {}, this;
                h = a ? [a] : l.keys(this._events);
                v = 0;
                for (u = h.length; v < u; v++)
                    if (a = h[v], k = this._events[a]) {
                        this._events[a] = d = [];
                        if (b || c) {
                            t = 0;
                            for (x = k.length; t < x; t++) e = k[t], (b && b !== e.callback && b !==
                                e.callback._callback || c && c !== e.context) && d.push(e)
                        }
                        d.length || delete this._events[a]
                    }
                return this
            },
            trigger: function(a) {
                if (!this._events) return this;
                var b = d.call(arguments, 1);
                if (!P(this, "trigger", a, b)) return this;
                var c = this._events[a],
                    e = this._events.all;
                c && G(c, b);
                e && G(e, arguments);
                return this
            },
            stopListening: function(a, b, c) {
                var d = this._listeners;
                if (!d) return this;
                var e = !b && !c;
                "object" === typeof b && (c = this);
                a && ((d = {})[a._listenerId] = a);
                for (var k in d) d[k].off(b, c, this), e && delete this._listeners[k];
                return this
            }
        },
        z = /\s+/,
        P = function(a, b, c, d) {
            if (!c) return !0;
            if ("object" === typeof c) {
                for (var e in c) a[b].apply(a, [e, c[e]].concat(d));
                return !1
            }
            if (z.test(c)) {
                c = c.split(z);
                e = 0;
                for (var k = c.length; e < k; e++) a[b].apply(a, [c[e]].concat(d));
                return !1
            }
            return !0
        },
        G = function(a, b) {
            var c, d = -1,
                e = a.length,
                k = b[0],
                h = b[1],
                l = b[2];
            switch (b.length) {
                case 0:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx);
                    break;
                case 1:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx, k);
                    break;
                case 2:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx, k, h);
                    break;
                case 3:
                    for (; ++d < e;)(c =
                        a[d]).callback.call(c.ctx, k, h, l);
                    break;
                default:
                    for (; ++d < e;)(c = a[d]).callback.apply(c.ctx, b)
            }
        };
    l.each({
        listenTo: "on",
        listenToOnce: "once"
    }, function(a, b) {
        H[b] = function(b, c, d) {
            var e = this._listeners || (this._listeners = {}),
                n = b._listenerId || (b._listenerId = l.uniqueId("l"));
            e[n] = b;
            "object" === typeof c && (d = this);
            b[a](c, d, this);
            return this
        }
    });
    H.bind = H.on;
    H.unbind = H.off;
    l.extend(v, H);
    var C = v.Model = function(a, b) {
            var c, d = a || {};
            b || (b = {});
            this.cid = l.uniqueId("c");
            this.attributes = {};
            l.extend(this, l.pick(b, I));
            b.parse &&
                (d = this.parse(d, b) || {});
            if (c = l.result(this, "defaults")) d = l.defaults({}, d, c);
            this.set(d, b);
            this.changed = {};
            this.initialize.apply(this, arguments)
        },
        I = ["url", "urlRoot", "collection"];
    l.extend(C.prototype, H, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return l.clone(this.attributes)
        },
        sync: function() {
            return v.sync.apply(this, arguments)
        },
        get: function(a) {
            return this.attributes[a]
        },
        escape: function(a) {
            return l.escape(this.get(a))
        },
        has: function(a) {
            return null !=
                this.get(a)
        },
        set: function(a, b, c) {
            var d, e, k, h, v, u, t;
            if (null == a) return this;
            "object" === typeof a ? (e = a, c = b) : (e = {})[a] = b;
            c || (c = {});
            if (!this._validate(e, c)) return !1;
            k = c.unset;
            h = c.silent;
            a = [];
            v = this._changing;
            this._changing = !0;
            v || (this._previousAttributes = l.clone(this.attributes), this.changed = {});
            t = this.attributes;
            u = this._previousAttributes;
            this.idAttribute in e && (this.id = e[this.idAttribute]);
            for (d in e) b = e[d], l.isEqual(t[d], b) || a.push(d), l.isEqual(u[d], b) ? delete this.changed[d] : this.changed[d] = b, k ? delete t[d] :
                t[d] = b;
            if (!h) {
                a.length && (this._pending = !0);
                b = 0;
                for (d = a.length; b < d; b++) this.trigger("change:" + a[b], this, t[a[b]], c)
            }
            if (v) return this;
            if (!h)
                for (; this._pending;) this._pending = !1, this.trigger("change", this, c);
            this._changing = this._pending = !1;
            return this
        },
        unset: function(a, b) {
            return this.set(a, void 0, l.extend({}, b, {
                unset: !0
            }))
        },
        clear: function(a) {
            var b = {},
                c;
            for (c in this.attributes) b[c] = void 0;
            return this.set(b, l.extend({}, a, {
                unset: !0
            }))
        },
        hasChanged: function(a) {
            return null == a ? !l.isEmpty(this.changed) : l.has(this.changed,
                a)
        },
        changedAttributes: function(a) {
            if (!a) return this.hasChanged() ? l.clone(this.changed) : !1;
            var b, c = !1,
                d = this._changing ? this._previousAttributes : this.attributes,
                e;
            for (e in a)
                if (!l.isEqual(d[e], b = a[e]))(c || (c = {}))[e] = b;
            return c
        },
        previous: function(a) {
            return null == a || !this._previousAttributes ? null : this._previousAttributes[a]
        },
        previousAttributes: function() {
            return l.clone(this._previousAttributes)
        },
        fetch: function(a) {
            a = a ? l.clone(a) : {};
            void 0 === a.parse && (a.parse = !0);
            var b = this,
                c = a.success;
            a.success = function(d) {
                if (!b.set(b.parse(d,
                        a), a)) return !1;
                c && c(b, d, a);
                b.trigger("sync", b, d, a)
            };
            ha(this, a);
            return this.sync("read", this, a)
        },
        save: function(a, b, c) {
            var d, e = this.attributes;
            null == a || "object" === typeof a ? (d = a, c = b) : (d = {})[a] = b;
            if (d && (!c || !c.wait) && !this.set(d, c)) return !1;
            c = l.extend({
                validate: !0
            }, c);
            if (!this._validate(d, c)) return !1;
            d && c.wait && (this.attributes = l.extend({}, e, d));
            void 0 === c.parse && (c.parse = !0);
            var k = this,
                h = c.success;
            c.success = function(a) {
                k.attributes = e;
                var b = k.parse(a, c);
                c.wait && (b = l.extend(d || {}, b));
                if (l.isObject(b) &&
                    !k.set(b, c)) return !1;
                h && h(k, a, c);
                k.trigger("sync", k, a, c)
            };
            ha(this, c);
            a = this.isNew() ? "create" : c.patch ? "patch" : "update";
            "patch" === a && (c.attrs = d);
            a = this.sync(a, this, c);
            d && c.wait && (this.attributes = e);
            return a
        },
        destroy: function(a) {
            a = a ? l.clone(a) : {};
            var b = this,
                c = a.success,
                d = function() {
                    b.trigger("destroy", b, b.collection, a)
                };
            a.success = function(e) {
                (a.wait || b.isNew()) && d();
                c && c(b, e, a);
                b.isNew() || b.trigger("sync", b, e, a)
            };
            if (this.isNew()) return a.success(), !1;
            ha(this, a);
            var e = this.sync("delete", this, a);
            a.wait ||
                d();
            return e
        },
        url: function() {
            var a = l.result(this, "urlRoot") || l.result(this.collection, "url") || ua();
            return this.isNew() ? a : a + ("/" === a.charAt(a.length - 1) ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function(a) {
            return a
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return null == this.id
        },
        isValid: function(a) {
            return this._validate({}, l.extend(a || {}, {
                validate: !0
            }))
        },
        _validate: function(a, b) {
            if (!b.validate || !this.validate) return !0;
            a = l.extend({}, this.attributes, a);
            var c = this.validationError =
                this.validate(a, b) || null;
            if (!c) return !0;
            this.trigger("invalid", this, c, l.extend(b || {}, {
                validationError: c
            }));
            return !1
        }
    });
    l.each("keys values pairs invert pick omit".split(" "), function(a) {
        C.prototype[a] = function() {
            var b = d.call(arguments);
            b.unshift(this.attributes);
            return l[a].apply(l, b)
        }
    });
    var t = v.Collection = function(a, b) {
            b || (b = {});
            b.url && (this.url = b.url);
            b.model && (this.model = b.model);
            void 0 !== b.comparator && (this.comparator = b.comparator);
            this._reset();
            this.initialize.apply(this, arguments);
            a && this.reset(a,
                l.extend({
                    silent: !0
                }, b))
        },
        A = {
            add: !0,
            remove: !0,
            merge: !0
        },
        u = {
            add: !0,
            merge: !1,
            remove: !1
        };
    l.extend(t.prototype, H, {
        model: C,
        initialize: function() {},
        toJSON: function(a) {
            return this.map(function(b) {
                return b.toJSON(a)
            })
        },
        sync: function() {
            return v.sync.apply(this, arguments)
        },
        add: function(a, b) {
            return this.set(a, l.defaults(b || {}, u))
        },
        remove: function(a, b) {
            a = l.isArray(a) ? a.slice() : [a];
            b || (b = {});
            var c, d, e, k;
            c = 0;
            for (d = a.length; c < d; c++)
                if (k = this.get(a[c])) delete this._byId[k.id], delete this._byId[k.cid], e = this.indexOf(k),
                    this.models.splice(e, 1), this.length--, b.silent || (b.index = e, k.trigger("remove", k, this, b)), this._removeReference(k);
            return this
        },
        set: function(a, b) {
            b = l.defaults(b || {}, A);
            b.parse && (a = this.parse(a, b));
            l.isArray(a) || (a = a ? [a] : []);
            var c, d, h, v, t, u = b.at,
                x = this.comparator && null == u && !1 !== b.sort,
                y = l.isString(this.comparator) ? this.comparator : null,
                z = [],
                B = [],
                N = {};
            c = 0;
            for (d = a.length; c < d; c++)
                if (h = this._prepareModel(a[c], b))(v = this.get(h)) ? (b.remove && (N[v.cid] = !0), b.merge && (v.set(h.attributes, b), x && (!t && v.hasChanged(y)) &&
                    (t = !0))) : b.add && (z.push(h), h.on("all", this._onModelEvent, this), this._byId[h.cid] = h, null != h.id && (this._byId[h.id] = h));
            if (b.remove) {
                c = 0;
                for (d = this.length; c < d; ++c) N[(h = this.models[c]).cid] || B.push(h);
                B.length && this.remove(B, b)
            }
            z.length && (x && (t = !0), this.length += z.length, null != u ? k.apply(this.models, [u, 0].concat(z)) : e.apply(this.models, z));
            t && this.sort({
                silent: !0
            });
            if (b.silent) return this;
            c = 0;
            for (d = z.length; c < d; c++)(h = z[c]).trigger("add", h, this, b);
            t && this.trigger("sort", this, b);
            return this
        },
        reset: function(a,
            b) {
            b || (b = {});
            for (var c = 0, d = this.models.length; c < d; c++) this._removeReference(this.models[c]);
            b.previousModels = this.models;
            this._reset();
            this.add(a, l.extend({
                silent: !0
            }, b));
            b.silent || this.trigger("reset", this, b);
            return this
        },
        push: function(a, b) {
            a = this._prepareModel(a, b);
            this.add(a, l.extend({
                at: this.length
            }, b));
            return a
        },
        pop: function(a) {
            var b = this.at(this.length - 1);
            this.remove(b, a);
            return b
        },
        unshift: function(a, b) {
            a = this._prepareModel(a, b);
            this.add(a, l.extend({
                at: 0
            }, b));
            return a
        },
        shift: function(a) {
            var b =
                this.at(0);
            this.remove(b, a);
            return b
        },
        slice: function(a, b) {
            return this.models.slice(a, b)
        },
        get: function(a) {
            return null == a ? void 0 : this._byId[null != a.id ? a.id : a.cid || a]
        },
        at: function(a) {
            return this.models[a]
        },
        where: function(a, b) {
            return l.isEmpty(a) ? b ? void 0 : [] : this[b ? "find" : "filter"](function(b) {
                for (var c in a)
                    if (a[c] !== b.get(c)) return !1;
                return !0
            })
        },
        findWhere: function(a) {
            return this.where(a, !0)
        },
        sort: function(a) {
            if (!this.comparator) throw Error("Cannot sort a set without a comparator");
            a || (a = {});
            l.isString(this.comparator) ||
                1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(l.bind(this.comparator, this));
            a.silent || this.trigger("sort", this, a);
            return this
        },
        sortedIndex: function(a, b, c) {
            b || (b = this.comparator);
            var d = l.isFunction(b) ? b : function(a) {
                return a.get(b)
            };
            return l.sortedIndex(this.models, a, d, c)
        },
        pluck: function(a) {
            return l.invoke(this.models, "get", a)
        },
        fetch: function(a) {
            a = a ? l.clone(a) : {};
            void 0 === a.parse && (a.parse = !0);
            var b = a.success,
                c = this;
            a.success = function(d) {
                c[a.reset ? "reset" :
                    "set"](d, a);
                b && b(c, d, a);
                c.trigger("sync", c, d, a)
            };
            ha(this, a);
            return this.sync("read", this, a)
        },
        create: function(a, b) {
            b = b ? l.clone(b) : {};
            if (!(a = this._prepareModel(a, b))) return !1;
            b.wait || this.add(a, b);
            var c = this,
                d = b.success;
            b.success = function(e) {
                b.wait && c.add(a, b);
                d && d(a, e, b)
            };
            a.save(null, b);
            return a
        },
        parse: function(a) {
            return a
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0;
            this.models = [];
            this._byId = {}
        },
        _prepareModel: function(a, b) {
            if (a instanceof C) return a.collection ||
                (a.collection = this), a;
            b || (b = {});
            b.collection = this;
            var c = new this.model(a, b);
            return !c._validate(a, b) ? (this.trigger("invalid", this, a, b), !1) : c
        },
        _removeReference: function(a) {
            this === a.collection && delete a.collection;
            a.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(a, b, c, d) {
            ("add" === a || "remove" === a) && c !== this || ("destroy" === a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], null != b.id && (this._byId[b.id] = b)), this.trigger.apply(this, arguments))
        }
    });
    l.each("forEach each map collect reduce foldl inject reduceRight foldr find detect filter select reject every all some any include contains invoke max min toArray size first head take initial rest tail drop last without indexOf shuffle lastIndexOf isEmpty chain".split(" "), function(a) {
        t.prototype[a] = function() {
            var b = d.call(arguments);
            b.unshift(this.models);
            return l[a].apply(l, b)
        }
    });
    l.each(["groupBy", "countBy", "sortBy"], function(a) {
        t.prototype[a] = function(b, c) {
            var d = l.isFunction(b) ? b : function(a) {
                return a.get(b)
            };
            return l[a](this.models, d, c)
        }
    });
    var c = v.View = function(a) {
            this.cid = l.uniqueId("view");
            this._configure(a || {});
            this._ensureElement();
            this.initialize.apply(this, arguments);
            this.delegateEvents()
        },
        x = /^(\S+)\s*(.*)$/,
        y = "model collection el id attributes className tagName events".split(" ");
    l.extend(c.prototype, H, {
        tagName: "div",
        $: function(a) {
            return this.$el.find(a)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            this.$el.remove();
            this.stopListening();
            return this
        },
        setElement: function(a,
            b) {
            this.$el && this.undelegateEvents();
            this.$el = a instanceof v.$ ? a : v.$(a);
            this.el = this.$el[0];
            !1 !== b && this.delegateEvents();
            return this
        },
        delegateEvents: function(a) {
            if (!a && !(a = l.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var b in a) {
                var c = a[b];
                l.isFunction(c) || (c = this[a[b]]);
                if (c) {
                    var d = b.match(x),
                        e = d[1],
                        d = d[2],
                        c = l.bind(c, this),
                        e = e + (".delegateEvents" + this.cid);
                    if ("" === d) this.$el.on(e, c);
                    else this.$el.on(e, d, c)
                }
            }
            return this
        },
        undelegateEvents: function() {
            this.$el.off(".delegateEvents" +
                this.cid);
            return this
        },
        _configure: function(a) {
            this.options && (a = l.extend({}, l.result(this, "options"), a));
            l.extend(this, l.pick(a, y));
            this.options = a
        },
        _ensureElement: function() {
            if (this.el) this.setElement(l.result(this, "el"), !1);
            else {
                var a = l.extend({}, l.result(this, "attributes"));
                this.id && (a.id = l.result(this, "id"));
                this.className && (a["class"] = l.result(this, "className"));
                a = v.$("<" + l.result(this, "tagName") + ">").attr(a);
                this.setElement(a, !1)
            }
        }
    });
    v.sync = function(a, b, c) {
        var d = B[a];
        l.defaults(c || (c = {}), {
            emulateHTTP: v.emulateHTTP,
            emulateJSON: v.emulateJSON
        });
        var e = {
            type: d,
            dataType: "json"
        };
        c.url || (e.url = l.result(b, "url") || ua());
        if (null == c.data && b && ("create" === a || "update" === a || "patch" === a)) e.contentType = "application/json", e.data = JSON.stringify(c.attrs || b.toJSON(c));
        c.emulateJSON && (e.contentType = "application/x-www-form-urlencoded", e.data = e.data ? {
            model: e.data
        } : {});
        if (c.emulateHTTP && ("PUT" === d || "DELETE" === d || "PATCH" === d)) {
            e.type = "POST";
            c.emulateJSON && (e.data._method = d);
            var k = c.beforeSend;
            c.beforeSend = function(a) {
                a.setRequestHeader("X-HTTP-Method-Override",
                    d);
                if (k) return k.apply(this, arguments)
            }
        }
        "GET" !== e.type && !c.emulateJSON && (e.processData = !1);
        if ("PATCH" === e.type && window.ActiveXObject && (!window.external || !window.external.msActiveXFilteringEnabled)) e.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        };
        a = c.xhr = v.ajax(l.extend(e, c));
        b.trigger("request", b, a, c);
        return a
    };
    var B = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    v.ajax = function() {
        return v.$.ajax.apply(v.$, arguments)
    };
    var V = v.Router = function(a) {
            a || (a = {});
            a.routes &&
                (this.routes = a.routes);
            this._bindRoutes();
            this.initialize.apply(this, arguments)
        },
        h = /\((.*?)\)/g,
        L = /(\(\?)?:\w+/g,
        D = /\*\w+/g,
        Q = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    l.extend(V.prototype, H, {
        initialize: function() {},
        route: function(a, b, c) {
            l.isRegExp(a) || (a = this._routeToRegExp(a));
            l.isFunction(b) && (c = b, b = "");
            c || (c = this[b]);
            var d = this;
            v.history.route(a, function(e) {
                e = d._extractParameters(a, e);
                c && c.apply(d, e);
                d.trigger.apply(d, ["route:" + b].concat(e));
                d.trigger("route", b, e);
                v.history.trigger("route", d, b, e)
            });
            return this
        },
        navigate: function(a, b) {
            v.history.navigate(a, b);
            return this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = l.result(this, "routes");
                for (var a, b = l.keys(this.routes); null != (a = b.pop());) this.route(a, this.routes[a])
            }
        },
        _routeToRegExp: function(a) {
            a = a.replace(Q, "\\$&").replace(h, "(?:$1)?").replace(L, function(a, b) {
                return b ? a : "([^/]+)"
            }).replace(D, "(.*?)");
            return RegExp("^" + a + "$")
        },
        _extractParameters: function(a, b) {
            var c = a.exec(b).slice(1);
            return l.map(c, function(a) {
                return a ? decodeURIComponent(a) : null
            })
        }
    });
    var N = v.History = function() {
            this.handlers = [];
            l.bindAll(this, "checkUrl");
            "undefined" !== typeof window && (this.location = window.location, this.history = window.history)
        },
        Y = /^[#\/]|\s+$/g,
        ja = /^\/+|\/+$/g,
        ka = /msie [\w.]+/,
        Z = /\/$/;
    N.started = !1;
    l.extend(N.prototype, H, {
        interval: 50,
        getHash: function(a) {
            return (a = (a || this).location.href.match(/#(.*)$/)) ? a[1] : ""
        },
        getFragment: function(a, b) {
            if (null == a)
                if (this._hasPushState || !this._wantsHashChange || b) {
                    a = this.location.pathname;
                    var c = this.root.replace(Z, "");
                    a.indexOf(c) ||
                        (a = a.substr(c.length))
                } else a = this.getHash();
            return a.replace(Y, "")
        },
        start: function(a) {
            if (N.started) throw Error("Backbone.history has already been started");
            N.started = !0;
            this.options = l.extend({}, {
                root: "/"
            }, this.options, a);
            this.root = this.options.root;
            this._wantsHashChange = !1 !== this.options.hashChange;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !(!this.options.pushState || !this.history || !this.history.pushState);
            a = this.getFragment();
            var b = document.documentMode,
                b = ka.exec(navigator.userAgent.toLowerCase()) &&
                (!b || 7 >= b);
            this.root = ("/" + this.root + "/").replace(ja, "/");
            b && this._wantsHashChange && (this.iframe = v.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(a));
            if (this._hasPushState) v.$(window).on("popstate", this.checkUrl);
            else if (this._wantsHashChange && "onhashchange" in window && !b) v.$(window).on("hashchange", this.checkUrl);
            else this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval));
            this.fragment = a;
            a = this.location;
            b = a.pathname.replace(/[^\/]$/,
                "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !b) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
            this._wantsPushState && (this._hasPushState && b && a.hash) && (this.fragment = this.getHash().replace(Y, ""), this.history.replaceState({}, document.title, this.root + this.fragment + a.search));
            if (!this.options.silent) return this.loadUrl()
        },
        stop: function() {
            v.$(window).off("popstate", this.checkUrl).off("hashchange",
                this.checkUrl);
            clearInterval(this._checkUrlInterval);
            N.started = !1
        },
        route: function(a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            })
        },
        checkUrl: function() {
            var a = this.getFragment();
            a === this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe)));
            if (a === this.fragment) return !1;
            this.iframe && this.navigate(a);
            this.loadUrl() || this.loadUrl(this.getHash())
        },
        loadUrl: function(a) {
            var b = this.fragment = this.getFragment(a);
            return l.any(this.handlers, function(a) {
                if (a.route.test(b)) return a.callback(b), !0
            })
        },
        navigate: function(a, b) {
            if (!N.started) return !1;
            if (!b || !0 === b) b = {
                trigger: b
            };
            a = this.getFragment(a || "");
            if (this.fragment !== a) {
                this.fragment = a;
                var c = this.root + a;
                if (this._hasPushState) this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c);
                else if (this._wantsHashChange) this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, a, b.replace));
                else return this.location.assign(c);
                b.trigger && this.loadUrl(a)
            }
        },
        _updateHash: function(a, b, c) {
            c ? (c = a.href.replace(/(javascript:|#).*$/, ""), a.replace(c + "#" + b)) : a.hash = "#" + b
        }
    });
    v.history = new N;
    C.extend = t.extend = V.extend = c.extend = N.extend = function(a, b) {
        var c = this,
            d;
        d = a && l.has(a, "constructor") ? a.constructor : function() {
            return c.apply(this, arguments)
        };
        l.extend(d, c, b);
        var e = function() {
            this.constructor = d
        };
        e.prototype = c.prototype;
        d.prototype = new e;
        a && l.extend(d.prototype, a);
        d.__super__ = c.prototype;
        return d
    };
    var ua = function() {
            throw Error('A "url" property or function must be specified');
        },
        ha = function(a, b) {
            var c = b.error;
            b.error = function(d) {
                c && c(a, d, b);
                a.trigger("error", a, d, b)
            }
        }
}).call(this);
(function() {
    var a = function(a, b) {
            for (var d = b.exec(a), k = [], v; null != d;) v = d.index, 0 != v && (a.substring(0, v), k.push(a.substring(0, v)), a = a.slice(v)), k.push(d[0]), a = a.slice(d[0].length), d = b.exec(a);
            "" == !a && k.push(a);
            return k
        },
        b = function(a, b) {
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d])
        };
    EJS = function(a) {
        a = "string" == typeof a ? {
            view: a
        } : a;
        this.set_options(a);
        if (a.precompiled) this.template = {}, this.template.process = a.precompiled, EJS.update(this.name, this);
        else {
            if (a.element) {
                if ("string" == typeof a.element) {
                    var b =
                        a.element;
                    a.element = document.getElementById(a.element);
                    if (null == a.element) throw b + "does not exist!";
                }
                this.text = a.element.value ? a.element.value : a.element.innerHTML;
                this.name = a.element.id;
                this.type = "["
            } else if (a.url) {
                a.url = EJS.endExt(a.url, this.extMatch);
                this.name = this.name ? this.name : a.url;
                var b = a.url,
                    d = EJS.get(this.name, this.cache);
                if (d) return d;
                if (d == EJS.INVALID_PATH) return null;
                try {
                    this.text = EJS.request(b + (this.cache ? "" : "?" + Math.random()))
                } catch (k) {}
                if (null == this.text) throw {
                    type: "EJS",
                    message: "There is no template at " +
                        b
                };
            }
            d = new EJS.Compiler(this.text, this.type);
            d.compile(a, this.name);
            EJS.update(this.name, this);
            this.template = d
        }
    };
    EJS.prototype = {
        render: function(a, b) {
            a = a || {};
            this._extra_helpers = b;
            var d = new EJS.Helpers(a, b || {});
            return this.template.process.call(a, a, d)
        },
        update: function(a, b) {
            "string" == typeof a && (a = document.getElementById(a));
            if (null == b) return _template = this,
                function(b) {
                    EJS.prototype.update.call(_template, a, b)
                };
            "string" == typeof b ? (params = {}, params.url = b, _template = this, params.onComplete = function(b) {
                b = eval(b.responseText);
                EJS.prototype.update.call(_template, a, b)
            }, EJS.ajax_request(params)) : a.innerHTML = this.render(b)
        },
        out: function() {
            return this.template.out
        },
        set_options: function(a) {
            this.type = a.type || EJS.type;
            this.cache = null != a.cache ? a.cache : EJS.cache;
            this.text = a.text || null;
            this.name = a.name || null;
            this.ext = a.ext || EJS.ext;
            this.extMatch = RegExp(this.ext.replace(/\./, "."))
        }
    };
    EJS.endExt = function(a, b) {
        if (!a) return null;
        b.lastIndex = 0;
        return a + (b.test(a) ? "" : this.ext)
    };
    EJS.Scanner = function(a, e, d) {
        b(this, {
            left_delimiter: e + "%",
            right_delimiter: "%" +
                d,
            double_left: e + "%%",
            double_right: "%%" + d,
            left_equal: e + "%=",
            left_comment: e + "%#"
        });
        this.SplitRegexp = "[" == e ? /(\[%%)|(%%\])|(\[%=)|(\[%#)|(\[%)|(%\]\n)|(%\])|(\n)/ : RegExp("(" + this.double_left + ")|(%%" + this.double_right + ")|(" + this.left_equal + ")|(" + this.left_comment + ")|(" + this.left_delimiter + ")|(" + this.right_delimiter + "\n)|(" + this.right_delimiter + ")|(\n)");
        this.source = a;
        this.stag = null;
        this.lines = 0
    };
    EJS.Scanner.to_text = function(a) {
        return null == a || void 0 === a ? "" : a instanceof Date ? a.toDateString() : a.toString ?
            a.toString() : ""
    };
    EJS.Scanner.prototype = {
        scan: function(b) {
            scanline = this.scanline;
            regex = this.SplitRegexp;
            if ("" == !this.source)
                for (var e = a(this.source, /\n/), d = 0; d < e.length; d++) this.scanline(e[d], regex, b)
        },
        scanline: function(b, e, d) {
            this.lines++;
            b = a(b, e);
            for (e = 0; e < b.length; e++) {
                var k = b[e];
                if (null != k) try {
                    d(k, this)
                } catch (v) {
                    throw {
                        type: "EJS.Scanner",
                        line: this.lines
                    };
                }
            }
        }
    };
    EJS.Buffer = function(a, b) {
        this.line = [];
        this.script = "";
        this.pre_cmd = a;
        this.post_cmd = b;
        for (var d = 0; d < this.pre_cmd.length; d++) this.push(a[d])
    };
    EJS.Buffer.prototype = {
        push: function(a) {
            this.line.push(a)
        },
        cr: function() {
            this.script += this.line.join("; ");
            this.line = [];
            this.script += "\n"
        },
        close: function() {
            if (0 < this.line.length) {
                for (var a = 0; a < this.post_cmd.length; a++) this.push(pre_cmd[a]);
                this.script += this.line.join("; ");
                line = null
            }
        }
    };
    EJS.Compiler = function(a, b) {
        this.pre_cmd = ["var ___ViewO = [];"];
        this.post_cmd = [];
        this.source = " ";
        null != a && ("string" == typeof a ? (a = a.replace(/\r\n/g, "\n"), this.source = a = a.replace(/\r/g, "\n")) : a.innerHTML && (this.source =
            a.innerHTML), "string" != typeof this.source && (this.source = ""));
        b = b || "<";
        var d = ">";
        switch (b) {
            case "[":
                d = "]";
                break;
            case "<":
                break;
            default:
                throw b + " is not a supported deliminator";
        }
        this.scanner = new EJS.Scanner(this.source, b, d);
        this.out = ""
    };
    EJS.Compiler.prototype = {
        compile: function(a, b) {
            a = a || {};
            this.out = "";
            var d = new EJS.Buffer(this.pre_cmd, this.post_cmd),
                k = "",
                v = function(a) {
                    a = a.replace(/\\/g, "\\\\");
                    a = a.replace(/\n/g, "\\n");
                    return a = a.replace(/"/g, '\\"')
                };
            this.scanner.scan(function(a, b) {
                if (null == b.stag) switch (a) {
                    case "\n":
                        k +=
                            "\n";
                        d.push('___ViewO.push("' + v(k) + '");');
                        d.cr();
                        k = "";
                        break;
                    case b.left_delimiter:
                    case b.left_equal:
                    case b.left_comment:
                        b.stag = a;
                        0 < k.length && d.push('___ViewO.push("' + v(k) + '")');
                        k = "";
                        break;
                    case b.double_left:
                        k += b.left_delimiter;
                        break;
                    default:
                        k += a
                } else switch (a) {
                    case b.right_delimiter:
                        switch (b.stag) {
                            case b.left_delimiter:
                                "\n" == k[k.length - 1] ? (k = k.substr(0, k.length - 1), d.push(k), d.cr()) : d.push(k);
                                break;
                            case b.left_equal:
                                d.push("___ViewO.push((EJS.Scanner.to_text(" + k + ")))")
                        }
                        b.stag = null;
                        k = "";
                        break;
                    case b.double_right:
                        k +=
                            b.right_delimiter;
                        break;
                    default:
                        k += a
                }
            });
            0 < k.length && d.push('___ViewO.push("' + v(k) + '")');
            d.close();
            this.out = d.script + ";";
            var l = "/*" + b + "*/this.process = function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {" + this.out + " return ___ViewO.join('');}}}catch(e){e.lineNumber=null;throw e;}};";
            try {
                eval(l)
            } catch (H) {
                if ("undefined" != typeof JSLINT) {
                    JSLINT(this.out);
                    for (var z = 0; z < JSLINT.errors.length; z++)
                        if (l = JSLINT.errors[z], "Unnecessary semicolon." != l.reason) throw l.line++, z = Error(), z.lineNumber = l.line,
                            z.message = l.reason, a.view && (z.fileName = a.view), z;
                } else throw H;
            }
        }
    };
    EJS.config = function(a) {
        EJS.cache = null != a.cache ? a.cache : EJS.cache;
        EJS.type = null != a.type ? a.type : EJS.type;
        EJS.ext = null != a.ext ? a.ext : EJS.ext;
        var b = EJS.templates_directory || {};
        EJS.templates_directory = b;
        EJS.get = function(a, c) {
            return !1 == c ? null : b[a] ? b[a] : null
        };
        EJS.update = function(a, c) {
            null != a && (b[a] = c)
        };
        EJS.INVALID_PATH = -1
    };
    EJS.config({
        cache: !0,
        type: "<",
        ext: ".ejs"
    });
    EJS.Helpers = function(a, e) {
        this._data = a;
        this._extras = e;
        b(this, e)
    };
    EJS.Helpers.prototype = {
        view: function(a, b, d) {
            d || (d = this._extras);
            b || (b = this._data);
            return (new EJS(a)).render(b, d)
        },
        to_text: function(a, b) {
            return null == a || void 0 === a ? b || "" : a instanceof Date ? a.toDateString() : a.toString ? a.toString().replace(/\n/g, "<br />").replace(/''/g, "'") : ""
        }
    };
    EJS.newRequest = function() {
        for (var a = [function() {
                return new ActiveXObject("Msxml2.XMLHTTP")
            }, function() {
                return new XMLHttpRequest
            }, function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            }], b = 0; b < a.length; b++) try {
            var d = a[b]();
            if (null != d) return d
        } catch (k) {}
    };
    EJS.request = function(a) {
        var b = new EJS.newRequest;
        b.open("GET", a, !1);
        try {
            b.send(null)
        } catch (d) {
            return null
        }
        return 404 == b.status || 2 == b.status || 0 == b.status && "" == b.responseText ? null : b.responseText
    };
    EJS.ajax_request = function(a) {
        a.method = a.method ? a.method : "GET";
        var b = new EJS.newRequest;
        b.onreadystatechange = function() {
            if (4 == b.readyState) a.onComplete(b)
        };
        b.open(a.method, a.url);
        b.send(null)
    }
})();
if (!wood) var wood = {};
if (!Wood) {
    var Wood = {
            Model: {},
            Modules: {
                Client: {},
                Controller: {
                    Base: {},
                    Login: {}
                }
            },
            Controller: {},
            Collection: {},
            View: {
                Common: {},
                Nfc: {},
                Title: {},
                Ranking: {},
                Aoc: {
                    Check: {},
                    List: {}
                }
            },
            UrlPrefix: {},
            Debug: {},
            Test: {}
        },
        wood_client = {};
    Wood.isWiiU = "undefined" !== typeof wiiuSystemSetting;
    var NINJA_BASE = "https://ninja.wup.shop.nintendo.net/ninja/",
        SAMURAI_ORIGINBASE = "https://samurai.wup.shop.nintendo.net/samurai/";
    Wood.getHostName = function() {
        return location.hostname
    };
    Wood.setupUrlPrefix = function() {
        Wood.UrlPrefix.NINJA = NINJA_BASE;
        Wood.UrlPrefix.SAMURAI_ORIGIN = SAMURAI_ORIGINBASE;
        var a = Wood.getHostName();
        Wood.UrlPrefix.SAMURAI = 0 <= a.indexOf("geisha") ? "https://" + a.replace("geisha", "samurai") + "/samurai/" : SAMURAI_ORIGINBASE;
        if (!Wood.isWiiU) {
            if (a = localStorage.getItem("samurai_base")) Wood.UrlPrefix.SAMURAI_ORIGIN = a, Wood.UrlPrefix.SAMURAI = a;
            if (a = localStorage.getItem("ninja_base")) Wood.UrlPrefix.NINJA = a
        }
    };
    Wood.setupUrlPrefix();
    Wood.isSWLoaded = function() {
        return "StopWatch" in window
    };
    Wood.hasSW = function() {
        if (Wood.isSWLoaded()) return !!wood.stop_watch
    };
    Wood.initializeSW = function(a) {
        Wood.isSWLoaded() && (wood.stop_watch = new StopWatch(a), wood.stop_watch.start())
    };
    Wood.lap = function(a) {
        Wood.isSWLoaded() && (Wood.hasSW() || Wood.initializeSW("unknown"), wood.stop_watch.lap(a))
    };
    Wood.finalizeSW = function() {
        if (Wood.isSWLoaded()) {
            if (!Wood.hasSW()) throw "wood.stop_watch not initialized.";
            wood.stop_watch.finish();
            wood.stop_watch.reportText().split("\n").forEach(function(a) {
                Wood.log(a)
            });
            wood.stop_watch = null
        }
    };
    Wood.log = function(a) {
        if (Wood.isWiiU && "undefined" !== typeof wiiuDebug)
            for (; a;) wiiuDebug.print(a.substr(0,
                200)), a = a.substr(200);
        else console.log(a)
    }
}
window.jQuery && jQuery.extend({
    print: function(a) {
        "undefined" !== typeof wiiuDebug ? wiiuDebug.print(a) : "undefined" !== typeof console && console.log(a)
    }
});
(function() {
    Wood.Storage = function(a) {
        this.storage = a
    };
    Wood.Storage.Types = {
        string: {
            encode: function(a) {
                return a ? "" + a : ""
            },
            decode: function(a) {
                return a ? "" + a : a
            }
        },
        number: {
            encode: function(a) {
                if (!_.isNumber(a)) throw a + " is not number";
                return "" + a
            },
            decode: function(a) {
                return parseInt(a, 10)
            }
        },
        "boolean": {
            encode: function(a) {
                return a ? "true" : "false"
            },
            decode: function(a) {
                return "true" === a
            }
        },
        json: {
            encode: function(a) {
                return JSON.stringify(a)
            },
            decode: function(a) {
                return JSON.parse(a)
            }
        }
    };
    Wood.Storage.validateAccessorEntry =
        function(a) {
            return !_.isString(a.name) || !_.isString(a.key) || !_.include(_.keys(Wood.Storage.Types), a.type) ? !1 : !0
        };
    Wood.Storage.injectAccessors = function(a, b) {
        _.each(b, function(b) {
            if (!Wood.Storage.validateAccessorEntry(b)) throw "invalid accessor entry: " + JSON.stringify(b);
            var e = Wood.Storage.Types[b.type];
            a["set" + b.name] = function(a) {
                this.storage.setItem(b.key, e.encode(a))
            };
            a["get" + b.name] = function() {
                return e.decode(this.storage.getItem(b.key))
            };
            a["remove" + b.name] = function() {
                this.storage.removeItem(b.key)
            };
            "boolean" === b.type && (a["is" + b.name] = function() {
                return !!e.decode(this.storage.getItem(b.key))
            }, a["has" + b.name] = function() {
                return !!this.storage.getItem(b.key)
            })
        })
    };
    Wood.Storage.create = function(a) {
        if (!_.isArray(a.accessors)) throw "accessors not specified";
        if (!a.storage) throw "storage not specified";
        var b = new Wood.Storage(a.storage);
        _.isFunction(a.writer) && (b.storageWrite = a.writer);
        Wood.Storage.injectAccessors(b, a.accessors);
        return b
    }
})();
(function() {
    var a = [{
        name: "LangSelectable",
        key: "_lang_selectable_v1",
        type: "boolean"
    }, {
        name: "WishlistLastModified",
        key: "_wish_modified_v1",
        type: "number"
    }, {
        name: "MovieType",
        key: "movie_type",
        type: "string"
    }];
    Wood.LocalStorage = {
        getRawInstance: function() {
            return "undefined" !== typeof wiiuSystemSetting ? wiiuLocalStorage : window.localStorage
        },
        build: function(b) {
            return Wood.Storage.create({
                storage: b,
                accessors: a
            })
        }
    }
})();
(function() {
    var a = [];
    Wood.SessionStorage = {
        getRawInstance: function() {
            return "undefined" !== typeof wiiuSystemSetting ? wiiuSessionStorage : window.sessionStorage
        },
        build: function(b) {
            return Wood.Storage.create({
                storage: b,
                accessors: a
            })
        }
    }
})();
(function() {
    Wood.Util = {
        each: function(a, b) {
            if (!(void 0 === a || null === a))
                if ("array" === $.type(a) || "object" === $.type(a))
                    if ("object" === $.type(a) && isNaN(parseInt(Object.keys(a), 10))) b(0, a);
                    else
                        for (var c in a) a.hasOwnProperty(c) && b(c, a[c]);
            else b(0, a)
        },
        arrayDiff: function(a, b) {
            if (!a || !b) return !1;
            var c = [];
            a.forEach(function(a) {
                0 > $.inArray(a, b) && c.push(a)
            });
            b.forEach(function(b) {
                0 > $.inArray(b, a) && c.push(b)
            });
            return c
        },
        isUndefined: function(a) {
            return void 0 === a || null === a
        },
        isDefined: function(a) {
            return void 0 !==
                a && null !== a
        },
        encodeValues: function(a) {
            var b = a.split("?");
            a = b[0];
            b = b[1];
            if (!b) return a;
            var c = [];
            $.each(b.split("&"), function(a, b) {
                var k = b.split("=");
                c.push(k[0] + "=" + encodeURIComponent(k[1]))
            });
            return a + "?" + c.join("&")
        },
        convertSecondToFormat: function(a) {
            var b = [];
            b[0] = Math.floor(a / 3600);
            b[1] = Math.floor(a / 60 % 60);
            10 > b[1] && (b[1] = "0" + b[1]);
            b[2] = a % 60;
            10 > b[2] && (b[2] = "0" + b[2]);
            return b.join(":")
        },
        createPromise: function(a) {
            var b = jQuery.Deferred();
            _.defer(function() {
                a(b)
            });
            return b.promise()
        },
        isWupNsuid: function(a) {
            return a ?
                "5" === a.toString().charAt(0) ? !1 : !0 : !0
        },
        createPlaceHolderUrl: function(a) {
            return "image/placeholder/place_icon_" + (Wood.Util.isWupNsuid(a) ? "wii_u" : "3ds") + ".png"
        },
        createIconClass: function(a) {
            return "p-icon-" + (Wood.Util.isWupNsuid(a) ? "wup-M" : "ctr-M")
        },
        formatTime: function(a) {
            var b = [];
            a = parseInt(a, 10);
            b[0] = Math.floor(a / 3600);
            b[1] = Math.floor(a / 60 % 60);
            10 > b[1] && (b[1] = "0" + b[1]);
            b[2] = a % 60;
            10 > b[2] && (b[2] = "0" + b[2]);
            return b.join(":")
        }
    }
})();
(function() {
    Wood.DomUtil = {
        hookLabelSoundEffectEvent: function(a) {
            a.find('.se:not([data-sound-assigned="true"])').each(function() {
                var a = $(this).data("se-label");
                $(this).on("click", function() {
                    wood.client.playSound(a);
                    return !0
                }).on("touchstart", function() {
                    wood.client.playSound("SE_WAVE_DRC_TOUCH_TRG");
                    return !0
                }).attr("data-sound-assigned", !0)
            })
        },
        hookSoundEffectEvent: function(a) {
            this.hookLabelSoundEffectEvent(a);
            $([
                ['input[type="submit"]', "touchstart", ["SE_WAVE_DRC_TOUCH_TRG"]],
                ['input[type="submit"]',
                    "click", ["SE_WAVE_OK"]
                ],
                ['input[type="reset"]', "touchstart", ["SE_WAVE_DRC_TOUCH_TRG"]],
                ['input[type="reset"]', "click", ["SE_WAVE_RESET"]],
                ['input[type="checkbox"]', "click", ["SE_WAVE_CHECKBOX_CHECK", "SE_WAVE_CHECKBOX_UNCHECK"]],
                ['input[type="radio"]', "click", ["SE_WAVE_DRC_TOUCH_TRG", "SE_WAVE_RADIOBUTTON_CHECK"]]
            ]).each(function() {
                var b = this[1],
                    c = this[2];
                a.find(this[0]).each(function() {
                    var a = $(this);
                    a.data("sound-assigned") || a.on(b, function() {
                        if ("checkbox" === a.attr("type")) {
                            var b = a.prop("checked") ? 0 :
                                1;
                            wood.client.playSound(c[b])
                        } else c.forEach(function(a) {
                            wood.client.playSound(a)
                        })
                    }).attr("data-sound-assigned", !0)
                })
            })
        },
        applyLocalizedText: function(a, b) {
            $("entry", b).each(function() {
                var b = '[data-message="' + $(this).attr("key") + '"]';
                $(b, a).html($(this).text())
            })
        },
        localizeText: function(a) {
            a = a || this.$el;
            a.find("[data-message]").each(function() {
                var a = $(this);
                a.html(wood.client.getText(a.attr("data-message")))
            })
        },
        showBody: function() {
            $("body").removeClass("display_cover")
        },
        hideBody: function() {
            $("body").addClass("display_cover")
        },
        createSizeHTML: function(a, b, c) {
            var e = null;
            a = this.getSizeWithUnit(a);
            a.size = this.replaceRadixPoint(a.size, b, c);
            switch (a.unit) {
                case "GB":
                    e = $("#str_gb").html();
                    break;
                case "MB":
                    e = $("#str_mb").html();
                    break;
                case "KB":
                    e = $("#str_kb").html()
            }
            return a.size + " " + e
        },
        getSizeWithUnit: function(a) {
            var b = null;
            a = parseInt(a, 10);
            var c = 0;
            10239948 >= a ? (c = Math.floor(a / 10.24), b = "KB", 100 > c && (c = 100)) : 10485707571 >= a ? (c = Math.floor(a / 10485.76), b = "MB") : (c = Math.floor(a / 1.073741824E7), b = "GB");
            c += 5;
            999999 < c && (c = 999999);
            c /= 10;
            a = Math.floor(c /
                10) + "." + Math.floor(c % 10);
            return {
                size: a,
                unit: b
            }
        },
        replaceRadixPoint: function(a, b, c) {
            a = a.toString();
            _.contains(["JP_ja", "US_en", "US_es", "EU_en", "EU_pt"], {
                JPN: "JP_",
                USA: "US_",
                EUR: "EU_",
                AUS: "EU_"
            }[c] + b) || (a = a.replace(".", ","));
            return a
        },
        applyTextOverflow: function(a) {
            var b = a.html(),
                c = a.clone();
            c.css({
                display: "none",
                position: "absolute",
                overflow: "visible",
                width: a.width(),
                height: "auto"
            });
            for (a.after(c); 0 < b.length && c.height() > a.height();) b = b.substr(0, b.length - 1), c.html(b + "...");
            a.html(c.html());
            c.remove()
        },
        formatDate: function(a) {
            a = a.split("-");
            var b = null;
            return b = 3 === a.length ? $("#str_release_ymd").html().replace("%{yyyy}", a[0]).replace("%{mm}", a[1]).replace("%{dd}", a[2]) : 2 === a.length ? $("#str_release_ym").html().replace("%{yyyy}", a[0]).replace("%{mm}", a[1]) : $("#str_release_y").html().replace("%{yyyy}", a[0])
        },
        animateToTop: function(a) {
            a ? $("html,body").animate({
                scrollTop: a
            }, 0) : $("html,body").animate({
                scrollTop: $("html,body").offset().top
            }, 0)
        },
        lazyload: function(a) {
            $(a).on("error", function() {
                void 0 !== $(this).data("placeholder") &&
                    $(this).attr("src", $(this).data("placeholder"))
            });
            $(a).each(function() {
                if (void 0 === $(this).data("loaded") || "placeholder" === $(this).data("loaded")) {
                    var a = this;
                    setTimeout(function() {
                        var c = $(a).attr("src"),
                            e = "placeholder";
                        void 0 !== $(a).data("original") && "" !== $(a).data("original") && (e = $(a).data("original"), $(a).attr("src", e), $(a).data("placeholder", c));
                        $(a).data("loaded", e)
                    }, 0)
                }
            })
        },
        getTaxTextWithPriceObject: function(a) {
            var b = a.getAmount();
            return a.isFree() ? b : this.getTaxText(b)
        },
        getTaxText: function(a) {
            var b =
                a,
                c;
            if (c = a) a = a || "", a = (a = a.match(/\d/g)) ? !/[1-9]/.test(a.join("")) : !1, c = !a && wood.client.isTaxIncludedMessageRequired();
            c && (b = "AU" === wood.client.country ? b + (" " + $("#str_tax_included_au").html()) : b + (" " + $("#str_tax_included").html()));
            return b
        }
    }
})();
(function() {
    Wood.ErrorCode = {
        WISHLIST_FULL: 1073190,
        CLOSE_APPLICATION: 1119E3,
        RETRIABLE: 1119001,
        UNDER_MAINTENANCE: 1119002,
        SERVICE_FINISHED: 1119003,
        INVALID_TEMPLATE: 1119100,
        FOR_BROWSER_LOCKED: 1990503
    }
})();
(function() {
    Wood.ErrorViewer = {
        show: function(a, b) {
            Wood.log("[Wood.ErrorViewer] errorCode:" + a);
            Wood.log("[Wood.ErrorViewer] errorMessage:" + b);
            if (Wood.isWiiU) {
                var c;
                c = "string" === typeof a ? parseInt(a, 10) : a;
                Wood.Analytics.sendError(c);
                b ? wiiuErrorViewer.openByCodeAndMessage(c, b) : wiiuErrorViewer.openByCode(c)
            } else Wood.Analytics.sendError(a), b ? Wood.ErrorViewer.showAlert(a + "\n\n" + b) : Wood.ErrorViewer.showAlert(a)
        },
        showAlert: function(a) {
            window.alert(a)
        }
    }
})();
(function() {
    Wood.SystemConfig = {
        PREFIX_SAMURAI: 110,
        PREFIX_NINJA: 107,
        PREFIX_CCIF: 126,
        PREFIX_OTHER: 111,
        ERROR_CODE_CLOSE_APPLICATION: 1119E3,
        ERROR_CODE_RETRIABLE: 1119001,
        ERROR_CODE_UNDER_MAINTENANCE: 1119002,
        ERROR_CODE_SERVICE_FINISHED: 1119003,
        ERROR_CODE_BROWSWER_LOCKED: 1990503,
        EXCLUSION_PLATFORM_IDS: "20,21,22,23,24,25,26,43,63,83",
        SESSION_UPDATE_INTERVAL: 36E5
    };
    Wood.SystemConfig.getExclusionPlatformIds = function() {
        return _.map(Wood.SystemConfig.EXCLUSION_PLATFORM_IDS.split(","), function(a) {
            return parseInt(a,
                10)
        })
    }
})();
(function() {
    var a = Wood.Error = function(a, b, c, d) {
        this.type = b;
        this.displayable = a;
        this.dialog_type = c;
        this.handler = d
    };
    a.Type = {
        GENERIC: 1,
        SPECIFIC: 2
    };
    a.DialogType = {
        CONFIRM: 1,
        ALERT: 2
    };
    var b = function() {
            location.href = "index.html#top";
            throw Error("error top_redirector stopper");
        },
        c = new a(!0, a.Type.GENERIC, a.DialogType.ALERT),
        e = new a(!0, a.Type.GENERIC, a.DialogType.ALERT, b),
        d = new a(!0, a.Type.SPECIFIC, a.DialogType.ALERT),
        k = new a(!1, a.Type.SPECIFIC, a.DialogType.ALERT),
        v = {
            3011: c,
            3021: new a(!0, a.Type.SPECIFIC, a.DialogType.ALERT,
                b),
            3025: d,
            3026: d,
            3027: d,
            3028: new a(!0, a.Type.SPECIFIC, a.DialogType.ALERT, b),
            3051: e,
            3052: e,
            3053: e,
            3054: e,
            3055: e,
            3056: e,
            3057: e,
            3058: e,
            3100: d,
            3101: d,
            3102: d,
            3103: d,
            3104: d,
            3105: d,
            3106: d,
            3107: d,
            3108: d,
            3109: d,
            3110: d,
            3111: d,
            3112: d,
            3113: d,
            3114: d,
            3115: d,
            3116: d,
            3117: d,
            3118: d,
            3120: d,
            3121: k,
            3122: k,
            3123: new a(!1, a.Type.GENERIC, a.DialogType.ALERT),
            3124: new a(!1, a.Type.SPECIFIC, a.DialogType.CONFIRM),
            3125: c,
            3150: e,
            3151: e,
            3152: d,
            3153: d,
            3154: k,
            3155: k,
            3160: k,
            3161: new a(!0, a.Type.SPECIFIC, a.DialogType.ALERT, b),
            3162: k,
            3170: c,
            3171: k,
            3180: c,
            3190: new a(!1, a.Type.SPECIFIC, a.DialogType.CONFIRM),
            3191: e,
            3200: new a(!1, a.Type.GENERIC, a.DialogType.ALERT),
            3210: d,
            3230: d,
            3231: d,
            3232: d,
            3233: d,
            3234: d,
            3235: k,
            3236: k,
            3237: d,
            3238: d,
            3239: d,
            3240: d,
            3241: k,
            3242: d,
            3243: d,
            3250: d,
            3251: d,
            3252: d,
            3260: d,
            3261: d,
            3262: d,
            3263: d,
            3264: d,
            3265: d,
            3266: d,
            3267: new a(!0, a.Type.SPECIFIC, a.DialogType.ALERT, b),
            3268: new a(!0, a.Type.SPECIFIC, a.DialogType.ALERT, b),
            3271: d,
            3301: new a(!1, a.Type.SPECIFIC, a.DialogType.ALERT, b),
            5997: e,
            6542: d,
            6561: d,
            6568: d,
            6591: c,
            6635: new a(!0, a.Type.SPECIFIC, a.DialogType.ALERT, b),
            6644: new a(!0, a.Type.SPECIFIC, a.DialogType.ALERT, b),
            6804: d,
            6805: d,
            6810: c,
            6811: d,
            6812: d,
            6813: d,
            6814: c,
            6815: d,
            6830: c,
            6831: c,
            6834: d,
            6835: d,
            6836: d,
            6837: d,
            6838: d,
            6941: d,
            6942: d,
            6943: d,
            6989: d,
            7401: d,
            7402: c,
            7403: d,
            7499: d,
            7501: d,
            7503: d,
            7506: c,
            7507: d,
            7509: e,
            7510: e,
            7511: d,
            7514: d,
            7515: c,
            7516: d,
            7519: d,
            7530: k,
            7532: c,
            7534: c,
            7535: e,
            7536: d,
            7537: c,
            9001: d,
            9003: d,
            9006: c,
            9007: d,
            9009: e,
            9010: e,
            9011: d,
            9014: d,
            9015: c,
            9019: d,
            9030: d,
            9032: c,
            9034: c,
            9035: e,
            9036: d,
            9037: c,
            9600: c,
            9601: c,
            9610: c,
            9611: c,
            9612: c,
            9613: c,
            9614: c,
            9615: c,
            9620: c,
            9621: c,
            9630: c,
            9631: c,
            9632: c,
            9640: c,
            9641: c,
            9642: c
        };
    a.dispatch = function(a) {
        return v[a]
    };
    a.Result = {
        ERROR_NOT_PROCESSED: 0,
        ERROR_MESSAGE_SHOWN: 1
    }
})();
(function() {
    Wood.KeyMap = {
        BUTTON_A: 13,
        BUTTON_B: 27,
        BUTTON_X: 88,
        BUTTON_Y: 89,
        BUTTON_L: 76,
        BUTTON_R: 82,
        BUTTON_PLUS: 80,
        BUTTON_MINUS: 77
    }
})();
(function() {
    function a(a, c) {
        return function(e) {
            if (e.keyCode === a) return c.call(e, e)
        }
    }
    Wood.KeyEvent = {
        A: function(b) {
            return a(Wood.KeyMap.BUTTON_A, b)
        },
        B: function(b) {
            return a(Wood.KeyMap.BUTTON_B, b)
        },
        X: function(b) {
            return a(Wood.KeyMap.BUTTON_X, b)
        },
        Y: function(b) {
            return a(Wood.KeyMap.BUTTON_Y, b)
        },
        L: function(b) {
            return a(Wood.KeyMap.BUTTON_L, b)
        },
        R: function(b) {
            return a(Wood.KeyMap.BUTTON_R, b)
        },
        PLUS: function(b) {
            return a(Wood.KeyMap.BUTTON_PLUS, b)
        },
        MINUS: function(b) {
            return a(Wood.KeyMap.BUTTON_MINUS, b)
        }
    }
})();
(function() {
    Wood.Request = function(a) {
        this.location = a;
        this._param = this.parseParam()
    };
    Wood.Request.prototype = {
        param: function(a) {
            return this._param[a]
        },
        params: function() {
            return this._param
        },
        getPathname: function() {
            return this.location.pathname
        },
        getHash: function() {
            return this.location.hash
        },
        getSearch: function() {
            return this.location.search
        },
        getFilename: function() {
            return this.location.pathname.replace(/.*\//, "")
        },
        isAppJump: function() {
            return "appJump" === this.param("seq")
        },
        isFromPurchaseComplete: function() {
            return "privJump" ===
                this.param("seq")
        },
        parseParam: function() {
            var a = {},
                b = (this.location || location).href.split("?");
            if (1 < b.length)
                for (var b = b[b.length - 1].split("&"), c = 0, e = b.length; c < e; c++) {
                    var d = b[c].split("=");
                    a[decodeURIComponent(d[0])] = decodeURIComponent(d[1])
                } else return !1;
            return a
        }
    }
})();
(function() {
    Wood.StarRating = function(a, b) {
        this.number = a;
        this.path_prefix = b ? b : "image/shelf01_01/img_relating_"
    };
    Wood.StarRating.prototype = {
        getNumber: function() {
            return this.number
        },
        getImagePath: function() {
            var a = this.number;
            return 4.75 <= a ? this.path_prefix + "05.png" : 4.25 <= a ? this.path_prefix + "04h.png" : 3.75 <= a ? this.path_prefix + "04.png" : 3.25 <= a ? this.path_prefix + "03h.png" : 2.75 <= a ? this.path_prefix + "03.png" : 2.25 <= a ? this.path_prefix + "02h.png" : 1.75 <= a ? this.path_prefix + "02.png" : 1.25 <= a ? this.path_prefix + "01h.png" :
                this.path_prefix + "01.png"
        }
    };
    Wood.StarRating.PathPrefix = {
        DATA01_SMALL: "image/data01_01/img_data01_01_evaluation_small_",
        DATA01_LARGE: "image/data01_01/img_data01_01_evaluation_large_"
    };
    Wood.StarRating.NO_RATING_IMAGE_PATH = "image/shelf01_01/img_relating_00.png"
})();
(function() {
    Wood.URL = function(a, b, c) {
        this.base_url = a;
        this.setQueryStrings(b);
        this.fragment = c
    };
    Wood.URL.create = function(a, b, c) {
        return (new Wood.URL(a, b, c)).toString()
    };
    Wood.URL.prototype = {
        setQueryString: function(a, b) {
            this.query_strings[a] = b
        },
        setQueryStrings: function(a) {
            this.query_strings = a || {}
        },
        addQuery: function(a) {
            $.extend(this.query_strings, a)
        },
        toString: function() {
            return this.base_url + ($.isEmptyObject(this.query_strings) ? "" : "?") + $.map(this.query_strings, function(a, b) {
                return encodeURIComponent(b) +
                    "=" + encodeURIComponent(a)
            }).join("&") + (this.fragment ? "#" + this.fragment : "")
        }
    }
})();
(function() {
    Wood.UserAgent = function(a) {
        this.user_agent_string = "string" === typeof a ? a : navigator.userAgent
    };
    Wood.UserAgent.LATEST_VERSION = "1.5";
    Wood.UserAgent.parseUserAgentString = function(a) {
        return new Wood.UserAgent(a)
    };
    Wood.UserAgent.prototype = {
        getWoodVersion: function() {
            var a = this.user_agent_string.match(/wood\/([\d\.]+)\.[^\d]/);
            return null !== a && 2 === a.length ? a[1] : 0
        },
        isWood: function() {
            return /wood\//.test(this.user_agent_string)
        },
        isLatestVersion: function() {
            return this.getWoodVersion() === Wood.UserAgent.LATEST_VERSION
        },
        isLatestVersionOrLater: function() {
            var a = parseFloat(this.getWoodVersion()),
                b = parseFloat(Wood.UserAgent.LATEST_VERSION);
            return a >= b
        },
        toString: function() {
            return this.user_agent_string
        }
    }
})();
(function() {
    var a = {
        PARTNER: [0, 4],
        RESERVED: [4, 2],
        CATEGORY: [6, 2],
        PLATFORM: [8, 1],
        UNIQUE: [9, 5],
        VARIATION: [14, 2]
    };
    Wood.TitleId = function(a) {
        this.title_id = a;
        this.id = this.getStructuredId(a)
    };
    Wood.TitleId.prototype = {
        getStructuredId: function(b) {
            if (!_.isString(b) || 16 !== b.length) throw Error("\u30bf\u30a4\u30c8\u30ebID\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093: " + b);
            var c = {};
            _.each(a, function(a, d) {
                c[d.toLowerCase()] = b.substr(a[0], a[1])
            });
            return c
        },
        getPartnerID: function() {
            return this.id.partner
        },
        getCategoryID: function() {
            return this.id.category
        },
        getPlatformID: function() {
            return this.id.platform
        },
        getUniqueID: function() {
            return this.id.unique
        },
        getVariation: function() {
            return this.id.variation
        },
        getUniqueTitleName: function() {
            var a = this.id;
            return a.partner + a.reserved + a.category + a.platform + a.unique
        },
        isSameTitleAs: function(a) {
            a = a instanceof Wood.TitleId ? a : new Wood.TitleId(a);
            return this.getUniqueTitleName() === a.getUniqueTitleName()
        }
    }
})();
(function() {
    Wood.Pagenation = function(a, b, c) {
        this.total_count = a;
        this.per_page = b;
        this.current_page = c
    };
    Wood.Pagenation.prototype = {
        getTotalCount: function() {
            return this.total_count
        },
        setTotalCount: function(a) {
            this.total_count = a
        },
        getPerPage: function() {
            return this.per_page
        },
        getCurrentPage: function() {
            return this.current_page
        },
        getOffset: function() {
            return (this.current_page - 1) * this.per_page
        },
        setCurrentPage: function(a) {
            this.current_page = a
        },
        getTotalPage: function() {
            var a = this.getTotalCount(),
                b = this.getPerPage(),
                c = parseInt(a / b, 10);
            0 < a - b * c && c++;
            return c
        },
        getNextPage: function() {
            return this.getTotalPage() > this.getCurrentPage() ? this.getCurrentPage() + 1 : null
        },
        getPrevPage: function() {
            return 1 === this.getTotalPage() || 1 === this.getCurrentPage() ? null : this.getCurrentPage() - 1
        },
        getSlicedIndexes: function() {
            if (0 === this.getTotalCount()) return [];
            var a = [],
                b = (this.getCurrentPage() - 1) * this.getPerPage(),
                c = b + this.getPerPage() - 1,
                e = this.getTotalCount() - 1;
            for (c > e && (c = e); b <= c; b++) a.push(b);
            return a
        },
        getNaviPages: function() {
            var a = this.getTotalPage(),
                b = 5 > a ? a : 5,
                c = Math.floor(b / 2),
                e = this.getCurrentPage(),
                d = e - c,
                c = e + c;
            7 === a ? (d = 1, c = 7) : (0 >= d && (d = 1, c = b), c > a && (c = a, d = a - b + 1), 4 > e && 6 <= a && c++, e > a - 3 && 6 <= a && d--);
            return _.range(d, c + 1)
        }
    }
})();
(function() {
    Wood.Price = function(a, b, c, e, d, k) {
        this.id = parseInt(a, 10);
        this.raw_value = parseFloat(b, 10);
        this.amount = c;
        this.currency = e;
        this.discount_type = d;
        this.description = k;
        this.raw_value_text = b
    };
    Wood.Price.DiscountType = {
        NONE: 1,
        NORMAL: 2,
        CONDITIONAL: 3,
        COUPON: 4
    };
    Wood.Price.prototype = {
        getId: function() {
            return this.id
        },
        getRawValue: function() {
            return this.raw_value
        },
        getRawValueText: function() {
            return this.raw_value_text
        },
        getAmount: function() {
            return this.amount
        },
        getCurrency: function() {
            return this.currency
        },
        getDiscountType: function() {
            return this.discount_type
        },
        getDescription: function() {
            return this.description && "" !== this.description ? this.description : null
        },
        isNotAtDiscount: function() {
            return this.discount_type === Wood.Price.DiscountType.NONE
        },
        isAtNormalDiscount: function() {
            return this.discount_type === Wood.Price.DiscountType.NORMAL
        },
        isAtConditionalDiscount: function() {
            return this.discount_type === Wood.Price.DiscountType.CONDITIONAL
        },
        isAtCouponDiscount: function() {
            return this.discount_type === Wood.Price.DiscountType.COUPON
        },
        isFree: function() {
            return 0 === this.raw_value
        }
    };
    _.defaults(Wood.Price, {
        getDecimalPoint: function(a) {
            return 0 <= a.indexOf(".") ? a.length - 1 - a.indexOf(".") : 0
        },
        getPaddingInt: function(a, b) {
            for (var c = a.replace(".", ""), e = 0; e < b; e++) c += "0";
            return parseInt(c, 10)
        },
        addDot: function(a, b) {
            var c = this.priceAbs(a),
                e = c;
            if (0 < b)
                if (c.length <= b) {
                    for (var e = "0.", d = 0; d < b - c.length; d++) e += "0";
                    e += c
                } else e = c.length - b, e = c.substring(0, e) + "." + c.substring(e);
            this.isNegative(a) && (e = "-" + e);
            return e
        },
        isPositive: function(a) {
            return null !== a && null !== a.match(/^[0-9]+[\.]?[0-9]*$/) ? !0 : !1
        },
        isNegative: function(a) {
            return null !== a && null !== a.match(/^-[0-9]+[\.]?[0-9]*$/) && !this.isZero(a) ? !0 : !1
        },
        isZero: function(a) {
            return null !== a ? null !== a.match(/^[\-]?[0]+[\.]?[0]*$/) : !1
        },
        priceAbs: function(a) {
            return this.isZero(a) ? a : this.isPositive(a) ? a : this.isNegative(a) ? a.slice(1) : null
        },
        priceAdd: function(a, b) {
            var c = this.priceAbs(a),
                e = this.priceAbs(b);
            if (null === c || null === e) return null;
            var d = this.isNegative(a),
                k = this.isNegative(b),
                v = this.getDecimalPoint(c),
                l = this.getDecimalPoint(e),
                H = Math.max(v, l),
                c = this.getPaddingInt(c.replace(".",
                    ""), H - v),
                e = this.getPaddingInt(e.replace(".", ""), H - l),
                d = String((d ? -1 : 1) * c + (k ? -1 : 1) * e);
            return d = this.addDot(d, H)
        },
        priceSub: function(a, b) {
            var c;
            this.isNegative(b) ? c = b.slice(1) : this.isPositive(b) && (c = "-" + b);
            return void 0 !== c ? this.priceAdd(a, c) : null
        }
    })
})();
(function() {
    Wood.Rating = function(a, b) {
        this.system_id = parseInt(a, 10);
        this.rating_age = parseInt(b, 10)
    };
    Wood.Rating.ActionType = {
        DEFAULT: 1,
        PURCHACE: 2,
        REDOWNLOAD: 3,
        REDEEM: 4
    };
    Wood.Rating.System = {
        CERO: 201,
        ESRB: 202,
        COB: 208,
        IARC_OFLC_AGCB: 308,
        OFLC_NZ: 209,
        IARC_OFLC_NZ: 309
    };
    Wood.Rating.prototype = {
        isDisplayAllowed: function(a, b, c) {
            if (Wood.Util.isUndefined(this.rating_age)) return !0;
            var e = this.system_id === Wood.Rating.System.COB || this.system_id === Wood.Rating.System.IARC_OFLC_AGCB,
                d = this.system_id === Wood.Rating.System.OFLC_NZ ||
                this.system_id === Wood.Rating.System.IARC_OFLC_NZ;
            if (this.requiresAgeFilter(a, b)) {
                if (this.system_id === Wood.Rating.System.CERO && 18 === this.rating_age || this.system_id === Wood.Rating.System.ESRB && 17 === this.rating_age || this.system_id === Wood.Rating.System.ESRB && 18 === this.rating_age || e && 18 === this.rating_age) return c >= this.rating_age;
                if (d && 15 === this.rating_age) return 18 <= c
            }
            return !0
        },
        requiresAgeFilter: function(a, b) {
            var c = !1;
            switch (a) {
                case Wood.Rating.ActionType.DEFAULT:
                    c = _.contains(["JPN", "AUS", "USA"], b);
                    break;
                case Wood.Rating.ActionType.PURCHACE:
                    c = "USA" !== b && _.contains(["JPN", "AUS"], b);
                    break;
                case Wood.Rating.ActionType.REDOWNLOAD:
                case Wood.Rating.ActionType.REDEEM:
                    c = !_.contains(["JPN", "USA"], b) && "AUS" === b
            }
            return c
        }
    }
})();
(function() {
    _.templateSettings = {
        interpolate: /\{\{=(.+?)\}\}/g,
        evaluate: /\{\{(.+?)\}\}/g,
        escape: /\{\{-(.+?)\}\}/g
    };
    var a = function(a) {
            function b() {
                wood.client.showError(Wood.ErrorCode.INVALID_TEMPLATE);
                wood.client.errorShutdown()
            }
            var v;
            try {
                v = new EJS({
                    url: c + a + e,
                    ext: e
                })
            } catch (l) {
                Wood.log("<Wood.Template> load failed. :" + l.message), b()
            }
            /^<script/.test(v.text) || (Wood.log("<Wood.Template> invalid"), b());
            return v.text
        },
        b = function(a) {
            a = Wood.LocalStorage.getRawInstance().getItem(a);
            return JSON.parse(a)
        },
        c =
        "template/",
        e = ".html";
    Wood.Template = {
        get: function(c, e) {
            var v;
            a: {
                var l;l = b("tmpl_" + c);
                (l = _.isObject(l) ? l.template : null) || (l = a(c));
                if (e) {
                    var H = $(l).filter(e);
                    l = H.text();
                    if (/jquery/.test(H.attr("type"))) {
                        v = H;
                        break a
                    }
                }
                v = _.template(l)
            }
            return function(a) {
                return _.isFunction(v) ? v(a) : v.tmpl(a)
            }
        },
        set: function(c, e) {
            var v = "tmpl_" + c;
            e = e ? e.toString() : "1";
            var l = b(v);
            if (!_.isObject(l) || !(l.version === e && /^<script/.test(l.template)))
                if (l = a(c)) l = {
                        version: e,
                        template: l
                    }, wood.client.getLocalStorage().setItem(v, JSON.stringify(l)),
                    wood.client.setFSFlushRequired()
        }
    };
    Wood.Template.Version = {
        MYMENU: 10.5,
        SHELF: 2.4,
        TITLE: 2.6,
        COMMON: 1.1,
        REDEEM: 1.3,
        NEWS: 1.1
    }
})();
(function() {
    Wood.Modules.Client.ErrorHandler = function() {
        this.reload_at_ajax_incomplete = this.ajax_aborted = this.shutdown_on_ajax_failure = !1
    };
    Wood.Modules.Client.ErrorHandler.prototype = {
        setReloadAtAjaxIncomplete: function() {
            this.reload_at_ajax_incomplete = !0
        },
        _handleIncompleteError: function(a, b) {
            Wood.log("[handleAjaxError] before complete error: readyState=" + a.readyState + " url=" + b.url() + " text=" + a.responseText + " statusText=" + a.statusText);
            if (this.shutdown_on_ajax_failure) Wood.log("[handleAjaxError] shutdown_on_ajax_failure"),
                this.showError(Wood.ErrorCode.CLOSE_APPLICATION), this.errorShutdown();
            else throw this.ajax_aborted || this.showError(Wood.ErrorCode.RETRIABLE), this.isWiiU() && (this.enableHomeButton(), this.disableUserOperation()), Wood.log("[handleAjaxError] redirect to top"), this.ajax_aborted = !0, a.abort(), this.isFirstBoot() ? (Wood.log("[handleAjaxError] first boot error"), this.showError(Wood.ErrorCode.CLOSE_APPLICATION), this.errorShutdown()) : this.reload_at_ajax_incomplete ? (Wood.log("[handleAjaxError] reload"), this.enableUserOperation(),
                _.delay(function() {
                    location.reload()
                }, 3E3)) : (Wood.log("[handleAjaxError] redirectToTop"), _.defer(_.bind(this.redirectToTop, this))), Wood.log("[handleAjaxError] stopper exception thorown"), Error("Exception to stop the script in this page.");
        },
        _handleCompleteError: function(a, b) {
            if (!Wood.Util.isUndefined(a.responseText)) {
                var c = a.responseText ? JSON.parse(a.responseText) : null;
                if (Wood.Util.isUndefined(c) || Wood.Util.isUndefined(c.error)) Wood.log("cannot handle error:  url=" + b.url() + " statusText=" + a.statusText +
                    " text=" + a.responseText);
                else return this.enableUserOperation(), this.enableHomeButton(), this.showErrorDialog(b.getErrorPrefix(), c.error.code, c.error.message)
            }
        },
        handleAjaxError: function(a, b) {
            Wood.log("handleAjaxError(new) called:");
            Wood.log(" - xhr.readyState: " + a.readyState);
            Wood.log(" - xhr.statusText: " + a.statusText);
            Wood.log(" - model.url(): " + b.url());
            Wood.log(" - model.attributes: " + JSON.stringify(b.attributes));
            this.endStartUp();
            this.hideLoadingIcon();
            this.stopNfcSound();
            if (0 === a.readyState &&
                "abort" === a.statusText) Wood.log("request was aborted by user: url=" + b.url() + " statusText=" + a.statusText);
            else {
                if (4 > a.readyState) return this._handleIncompleteError(a, b);
                if (503 === a.status) this.showError(Wood.ErrorCode.UNDER_MAINTENANCE), this.errorShutdown();
                else return this._handleCompleteError(a, b)
            }
        },
        _showErrorMessage: function(a, b, c) {
            "" !== c && void 0 !== c ? this.showError(a + b, c) : this.showError(a + b)
        },
        _performCallback: function(a, b) {
            if (void 0 !== b) return b(Wood.Error.Result.ERROR_MESSAGE_SHOWN);
            if (a.handler) return a.handler.call(Wood.Error.Result.ERROR_MESSAGE_SHOWN)
        },
        _showDefinedError: function(a, b, c, e, d) {
            if (b.dialog_type === Wood.Error.CONFIRM) return d(Wood.Error.Result.ERROR_NOT_PROCESSED);
            if (b.displayable) {
                if ("" !== c && void 0 !== c) return this._showErrorMessage(a, c, e), this._performCallback(b, d);
                Wood.log("[ERROR] error code is not defined.");
                this.showError(Wood.ErrorCode.CLOSE_APPLICATION);
                this.isWiiU() && this.errorShutdown()
            } else if ("" !== e && void 0 !== e) {
                if (void 0 !== d) return d(Wood.Error.Result.ERROR_NOT_PROCESSED);
                if (b.handler) return b.handler.call()
            } else Wood.log("[ERROR] error message is not defined."),
                this.showError(Wood.ErrorCode.CLOSE_APPLICATION), this.isWiiU() && this.errorShutdown()
        },
        _showInvalidSessionError: function(a, b, c) {
            c = $("#dialog_msg_invalid_session").text();
            "" !== c ? this.showError(a + b, c) : this.showError(Wood.ErrorCode.RETRIABLE)
        },
        showErrorDialog: function(a, b, c, e) {
            Wood.log("[showErrorDialog] prefix=" + a + ", code=" + b + ", msg=" + c);
            a = Wood.Util.isDefined(a) ? a : Wood.SystemConfig.PREFIX_OTHER;
            Wood.Util.isDefined(b) && 7 === b.length && (a = "");
            var d = Wood.Error.dispatch(b);
            if (d) return this._showDefinedError(a,
                d, b, c, e);
            Wood.log("[ERROR] error code is not defined.(error code not display)");
            "3010" === b ? this._showInvalidSessionError(a, b, c) : "" !== b && void 0 !== b && "" !== c && void 0 !== c ? this.showError(a + b, c) : "" !== b && void 0 !== b && a !== Wood.SystemConfig.PREFIX_SAMURAI && a !== Wood.SystemConfig.PREFIX_NINJA ? this.showError(a + b) : this.showError(Wood.ErrorCode.CLOSE_APPLICATION);
            this.isWiiU() ? this.errorShutdown() : "3010" !== b && this.redirectToTop()
        },
        showError: function() {
            this.hideLoadingDialog();
            Wood.ErrorViewer.show.apply(null, arguments)
        },
        shutdownIfError: function(a) {
            /*if (void 0 !== a && this.isWiiU() && a.error) {
                var b = a.error.code;
                _.contains([1114701, 1114702], b) || (this.enableHomeButton(), this.enableUserOperation(), this.showError(a.error.code), _.contains([1050606, 1114640, 1114550, 1114641, 1114693], b) || (_.contains([1114692], b) ? this.historyBack() : this.errorShutdown()))
            }*/
        }
    }
})();
(function() {
    Wood.Modules.Client.PurchaseInfo = function() {};
    Wood.Modules.Client.PurchaseInfo.prototype = {
        setRedeemableCard: function(a) {
            this.getSessionStorage().setItem(Wood.Client.StorageKey.TEMP_REDEEMABLE_CARD, a.toJSON())
        },
        getRedeemableCard: function() {
            var a = this.getSessionStorage().getItem(Wood.Client.StorageKey.TEMP_REDEEMABLE_CARD);
            if (Wood.Util.isUndefined(a)) return null;
            var b = new Wood.Model.RedeemableCard;
            b.set(JSON.parse(a));
            return b
        },
        clearRedeemableCard: function() {
            this.getSessionStorage().removeItem(Wood.Client.StorageKey.TEMP_REDEEMABLE_CARD)
        },
        setRedeemNumber: function(a, b) {
            var c = this.getSessionStorage();
            c.setItem(Wood.Client.StorageKey.REDEEM_TITLE_ID, a);
            c.setItem(Wood.Client.StorageKey.REDEEM_NUMBER, b)
        },
        initCardInfo: function() {
            var a = this.getSessionStorage();
            _.each("addbal_cc addbal_cc_str ccard_registration cc_pass cc_type postal_code request_id application_id credit_card_update".split(" "), function(b) {
                a.removeItem(b)
            })
        },
        initPurchaseInfo: function() {
            var a = this.getSessionStorage(),
                b = "aoc_name_ aoc_size_unit_ aoc_size_str_ aoc_free_flg_ aoc!_price_ aoc_price_str_ aoc_tax_str_ aoc_taxin_price_str_ aoc_redl_flg_ _nsig_aoc_taxin_price_".split(" ");
            _.each("buying_title_id buying_type buying_section buying_coupon_instance_code buying_aoc buying_ticket buying_shortfall get_common_info get_title_info get_aoc_info get_ticket_info get_demo_info buying_seq_rating buying_seq_attention buying_seq_size buying_seq_balance buying_seq_purchase money_referrer addr_referrer title_name title_icon rating_flg rating_age rating_sys notes_flg title_size_unit title_size_str title_dl_media title_display_size_str title_release_date title_pre_order_flg title_in_app_purchase titile_owned_coupon_flg title_lowest_price title_display_size_unit title_free_flg size_over_flg title_dl_items title_redl_flg current_balance current_balance_str post_balance post_balance_str title_price_str title_discount_price_id title_regular_price_id title_tax title_tax_str title_taxin_price title_taxin_price_str pin_code_checked_money withdrawal_agreed auto_billing_contract_id auto_billing_title_id coupon_code".split(" "),
                function(b) {
                    a.removeItem(b)
                });
            if (null !== a.getItem("aoc_id_list")) {
                var c = a.getItem("aoc_id_list").split(",");
                _.each(c, function(c) {
                    _.each(b, function(b) {
                        a.removeItem(b + c)
                    })
                })
            }
            _.each("aoc_id_list aocs_free_flg aocs_dl_media aocs_total_size aocs_total_size_str aocs_total_size_unit aocs_price_str aocs_price_id aocs_tax aocs_tax_str aocs_taxin_price aocs_taxin_price_str aoc_dl_items aoc_same_variation_items aoc_update_flg aocs_all_redl_flg buying_aoc_id_list ticket_id ticket_name ticket_free_flg ticket_price_str ticket_price_id ticket_discount_price_id ticket_discount_price_id ticket_tax ticket_tax_str ticket_taxin_price ticket_taxin_price_str demo_id demo_name demo_icon demo_dl_items size_over_flg demo_dl_media demo_size_str demo_size_unit demo_display_size_str demo_display_size_unit aocs_discount_id".split(" "),
                function(b) {
                    a.removeItem(b)
                })
        }
    }
})();
(function() {
    Wood.Modules.Client.Boot = function() {
        this.need_flush_fs = this.is_in_boot = !1
    };
    Wood.Modules.Client.Boot.prototype = {
        endStartUp: function() {
            Wood.log("(wood.client) endStartUp(false)");
            this.isWiiU() && wiiuBrowser.endStartUp && wiiuBrowser.endStartUp(!1)
        },
        endStartUpWithBGM: function() {
            Wood.log("(wood.client) endStartUp(true)");
            this.isWiiU() && wiiuBrowser.endStartUp && wiiuBrowser.endStartUp(!0)
        },
        isInBoot: function() {
            return this.is_in_boot
        },
        setInBoot: function() {
            this.is_in_boot = !0
        },
        finishBoot: function() {
            this.is_in_boot = !1
        },
        setFSFlushRequired: function() {
            this.need_flush_fs = !0
        },
        cancelFSFlush: function() {
            this.need_flush_fs = !1
        },
        isFSFlushRequired: function() {
            return this.need_flush_fs
        },
        setNinjaSession: function(a) {
            this.getSessionStorage().setItem(Wood.Client.StorageKey.NINJA_SESSION, a.toJSON())
        },
        getNinjaSession: function() {
            var a = this.getSessionStorage().getItem(Wood.Client.StorageKey.NINJA_SESSION);
            if (!a) return null;
            var b = new Wood.Model.NinjaSession;
            b.loadJSON(a);
            return b
        },
        canSetEShopInitialized: function() {
            return this.isWiiU() &&
                wiiuSystemSetting.setEShopInitialized
        },
        setEShopInitialized: function(a) {
            a = wiiuSystemSetting.setEShopInitialized(a);
            this.shutdownIfError(a)
        },
        isFirstBoot: function() {
            if (this.isWiiU() && wiiuSystemSetting.getEShopInitialized) {
                var a = wiiuSystemSetting.getEShopInitialized();
                this.shutdownIfError(a);
                if (a.initialized) return Wood.log("(wood.client) isFirstBoot: res.initialized"), !1
            }(a = "true" === this.getLocalStorage().getItem(Wood.Client.StorageKey.FIRST_BOOT)) && this.canSetEShopInitialized() && this.setEShopInitialized(!0);
            return !a
        },
        finishFirstBoot: function() {
            this.canSetEShopInitialized() ? this.setEShopInitialized(!0) : (this.getLocalStorage().setItem(Wood.Client.StorageKey.FIRST_BOOT, "true"), this.writeLocalStorage())
        },
        updateParentalControls: function() {
            var a = this.getNinjaSession().getParentalControl(),
                b = {};
            _.each(a, function(a) {
                "WUP" === a.device && (b[a.type] = a.value)
            });
            var c;
            if (this.isWiiU()) {
                if (a = this.getParentalControlForGamePlay(), c = this.getParentalControlForEShop(), ("AU" === this.country || "NZ" === this.country) && "13" === a.age) a.age =
                    "14"
            } else a = {
                isLocked: !1,
                age: "18"
            }, c = !0;
            a.age = parseInt(a.age, 10);
            if (!b || !(b.game_rating_age === a.age && !!b.game_rating_lock === a.isLocked && !!b.shopping === c))(new Wood.Model.ParentalControlPut({
                game_rating_lock: a.isLocked ? 1 : 0,
                game_rating_age: a.age,
                shopping: c ? 1 : 0
            })).fetch()
        },
        redirectToStartPage: function(a) {
            a = Wood.StartPageDispatcher.dispatch(a);
            this.endStartUp();
            this.redirectReplaceTo(a)
        },
        redirectToInitialSequence: function(a) {
            var b = new Wood.URL("initial_sequence.html", {
                    country: this.country,
                    language: this.language
                }),
                c = $.url().param();
            _.each(c, function(a, c) {
                b.setQueryString(c, a)
            });
            a.isShopAccountInitialized() && b.setQueryString("shop_ac_init", 1);
            this.isFirstBoot() || b.setQueryString("lang_select_only", 1);
            this.redirectReplaceTo(b.toString())
        }
    }
})();
(function() {
    Wood.Modules.Client.AOC = function() {
        this.data_titles = {};
        this.installed_items = {};
        this.owned_contents_cache = {}
    };
    Wood.Modules.Client.AOC.prototype = {
        getAocPurchaseStatus: function(a, b, c) {
            var e = Wood.PurchaseStatus.STATUS,
                d = b.getContentIndexes();
            if (c.isOnSale()) {
                var k = this.getOwnedContents(a).getContentsByVariation(b.getVariation()),
                    k = _.chain(k).map(function(a) {
                        return a.content_indexes.content_index
                    }).flatten().uniq().value(),
                    k = _.filter(k, function(a) {
                        return _.contains(d, a)
                    }).length;
                a = k === d.length ?
                    this.hasDataTitle(a, b) ? e.PURCHASED : e.REDOWNLOADABLE : 0 < k ? b.allowedOverlap() ? c.isFree() ? e.DOWNLOADABLE : e.OK : e.DUPLICATED : c.isFree() ? e.DOWNLOADABLE : e.OK
            } else a = e.INVALID;
            return new Wood.PurchaseStatus(a)
        },
        hasDataTitle: function(a, b) {
            var c = this,
                e = b.getContentIndexes(),
                d = this.getDataTitleVersions(a).getVersions(),
                k = [];
            _.each(d, function(a) {
                a = c.getAocInstalledItem(a.title_id);
                a.variation === b.getVariation() && k.push(a.content_index)
            });
            k = _.chain(k).flatten().uniq().value();
            return _.filter(k, function(a) {
                return _.contains(e,
                    parseInt(a, 10))
            }).length === e.length
        },
        getOwnedContents: function(a) {
            var b = this.owned_contents_cache[a];
            b ? a = b : (a = new Wood.Model.OwnedContents({
                title_id: a
            }), a.fetch({
                async: !1
            }));
            return a
        },
        setOwnedContents: function(a, b) {
            this.owned_contents_cache[b] = a
        },
        getDataTitleVersions: function(a) {
            var b = this.data_titles[a];
            b || (b = new Wood.Model.DataTitleVersionList({
                country: this.country,
                language: this.language,
                aoc_ns_uid: a
            }), b.fetch(), this.data_titles[a] = b);
            return b
        },
        setDataTitleVersions: function(a, b) {
            this.data_titles[b] =
                a
        },
        getAocInstalledItem: function(a) {
            var b = {};
            if (this.isWiiU()) {
                var c = this.installed_items[a];
                if (c) b = c;
                else {
                    c = wiiuDevice.getAocContentIndexList(a);
                    this.shutdownIfError(c);
                    var e = a.slice(-2);
                    b.title_id = a;
                    b.variation = e;
                    b.content_index = c.indexes;
                    this.installed_items[a] = b
                }
            }
            return b
        }
    }
})();
(function() {
    Wood.Modules.Client.EC = function() {};
    var a = {
        downloadMedia: "USB",
        installSize: "65535",
        storageSize: "9493802"
    };
    Wood.Modules.Client.EC.prototype = {
        getTitleInstallInfo: function(b) {
            return this.isWiiU() ? (b = wiiuEC.getTitleInstallInfo(b.getId(), b.getVersion().toString()), this.shutdownIfError(b), b) : a
        }
    }
})();
(function() {
    var a = {
            NONE: 0,
            CANCEL_PROHIBIT: 1,
            NETWORK_ERROR: 2,
            UNDER_MAINTENANCE_ERROR: 3,
            DEVICE_POLLING_START: 10,
            DEVICE_DETECT_CARD: 11,
            DEVICE_TOUCH_AGAIN: 12,
            DEVICE_TOUCH_DIFF_CARD: 13,
            PAYMENT_RESPONSE: 20,
            BALANCE_INQUIRY_RESPONSE: 21,
            RESULT_CHECK_RESPONSE: 22,
            HISTORY_INQUIRY_RESPONSE: 23
        },
        b = _.invert(a);
    Wood.Modules.Client.Nfc = function() {
        this.nfc = _.extend({}, Backbone.Events)
    };
    Wood.Modules.Client.Nfc.prototype = {
        startNfcPolling: function(a, b) {
            Wood.log("wood.client#startNfcPolling request_type:" + a + ", request_info:" +
                b);
            var d = null;
            this.isWiiU() && (d = wiiuNfc.startPolling(a, b), this.shutdownIfError(d), this.watchProcess());
            return d
        },
        startPayment: function(a) {
            return this.startNfcPolling(1, a)
        },
        startBalanceInquiry: function(a) {
            return this.startNfcPolling(3, a)
        },
        startHistoryInquiry: function(a) {
            return this.startNfcPolling(5, a)
        },
        startResultCheck: function(a) {
            return this.startNfcPolling(9, a)
        },
        cancelNfc: function() {
            Wood.log("wood.client#cancelNfc");
            return this.isWiiU() ? wiiuNfc.cancel() : !0
        },
        watchProcess: function() {
            var b = this,
                e =
                function() {
                    var d = 50,
                        k = wiiuNfc.getMessage();
                    switch (k) {
                        case a.DEVICE_POLLING_START:
                        case a.DEVICE_DETECT_CARD:
                        case a.DEVICE_TOUCH_DIFF_CARD:
                        case a.CANCEL_PROHIBIT:
                            b.nfcTrigger(k);
                            break;
                        case a.DEVICE_TOUCH_AGAIN:
                            d = 1500;
                            b.nfcTrigger(k);
                            break;
                        case a.PAYMENT_RESPONSE:
                        case a.BALANCE_INQUIRY_RESPONSE:
                        case a.RESULT_CHECK_RESPONSE:
                        case a.HISTORY_INQUIRY_RESPONSE:
                            d = wiiuNfc.getResponse(k);
                            b.nfcTrigger(k, d);
                            return;
                        case a.UNDER_MAINTENANCE_ERROR:
                        case a.NETWORK_ERROR:
                            b.nfcTrigger(k);
                            return
                    }
                    _.delay(e, d)
                };
            e()
        },
        nfcTrigger: function(a,
            e) {
            var d = "update:" + b[a];
            Wood.log(d);
            Wood.log(e ? JSON.stringify(e, null, "    ") : "");
            this.nfc.trigger(d, e)
        },
        stopNfcSound: function() {
            Wood.log("wood.client#stopNfcSound");
            this.isWiiU() && wiiuSound.stopNfcSound(2)
        }
    }
})();
(function() {
    Wood.Modules.Client.NNA = function() {};
    Wood.Modules.Client.NNA.prototype = {
        isMailAddressValidated: function() {
            return this.isWiiU() ? wiiuNNA.isMailAddressValidated() : "true" === this.getLocalStorage().getItem("_isMailAddressValidated")
        }
    }
})();
(function() {
    Wood.Modules.Client.UI = function() {
        this.user_operation_enabled = this.power_button_enabled = this.home_button_enabled = !0
    };
    Wood.Modules.Client.UI.prototype = {
        enableHomeButton: function(a) {
            Wood.log("(wood.client) enableHomeButton");
            if (this.isWiiU() && (a || !this.home_button_enabled)) wiiuBrowser.lockHomeButtonMenu(!1), this.home_button_enabled = !0
        },
        disableHomeButton: function(a) {
            Wood.log("(wood.client) disableHomeButton");
            if (this.isWiiU() && (a || this.home_button_enabled)) wiiuBrowser.lockHomeButtonMenu(!0),
                this.home_button_enabled = !1
        },
        enablePowerButton: function(a) {
            Wood.log("(wood.client) enablePowerButton");
            if (this.isWiiU() && (a || !this.power_button_enabled)) wiiuBrowser.lockPowerButton(!1), this.power_button_enabled = !0
        },
        disablePowerButton: function(a) {
            Wood.log("(wood.client) disablePowerButton");
            if (this.isWiiU() && (a || this.power_button_enabled)) wiiuBrowser.lockPowerButton(!0), this.power_button_enabled = !1
        },
        enableUserOperation: function(a) {
            Wood.log("(wood.client) enableUserOperation");
            if (this.isWiiU() && (a ||
                    !this.user_operation_enabled)) wiiuBrowser.lockUserOperation(!1), this.user_operation_enabled = !0
        },
        disableUserOperation: function(a) {
            Wood.log("(wood.client) disableUserOperation");
            if (this.isWiiU() && (a || this.user_operation_enabled)) wiiuBrowser.lockUserOperation(!0), this.user_operation_enabled = !1
        },
        showLoadingIcon: function() {
            this.isWiiU() && wiiuBrowser.showLoadingIcon(!0)
        },
        hideLoadingIcon: function() {
            this.isWiiU() && wiiuBrowser.showLoadingIcon(!1)
        },
        prohibitLoadingIcon: function() {
            this.isWiiU() && wiiuBrowser.prohibitLoadingIcon(!0)
        },
        allowLoadingIcon: function() {
            this.isWiiU() && wiiuBrowser.prohibitLoadingIcon(!1)
        },
        showLoadingDialog: function(a) {
            this.isWiiU() && this.isDefinedShowLoadingDialog() && wiiuDialog.showLoading(a)
        },
        hideLoadingDialog: function() {
            this.isWiiU() && this.isDefinedHideLoadingDialog() && wiiuDialog.hideLoading()
        },
        isDefinedShowLoadingDialog: function() {
            return "undefined" !== typeof wiiuDialog && _.isFunction(wiiuDialog.showLoading)
        },
        isDefinedHideLoadingDialog: function() {
            return "undefined" !== typeof wiiuDialog && _.isFunction(wiiuDialog.hideLoading)
        },
        curtainClose: function() {
            this.isWiiU() && "undefined" !== typeof wiiuCurtain && wiiuCurtain.close()
        },
        alert: function(a, b) {
            this.hideLoadingDialog();
            if (this.isWiiU()) Wood.Util.isDefined(b) ? wiiuDialog.alert(a, b) : wiiuDialog.alert(a, "OK");
            else {
                var c = a;
                Wood.Util.isDefined(b) && (c = c + "\n\nButton: " + b);
                window.alert(c)
            }
        },
        confirm: function(a, b, c) {
            this.hideLoadingDialog();
            if (this.isWiiU()) return Wood.Util.isDefined(b) && Wood.Util.isDefined(c) ? wiiuDialog.confirm(a, b, c) : wiiuDialog.confirm(a, "Cancel", "OK");
            Wood.Util.isDefined(b) &&
                Wood.Util.isDefined(c) && (a = a + "\n\nLeft Button: " + b);
            return window.confirm(a)
        }
    }
})();
(function() {
    Wood.Modules.Client.RegionalInfo = function() {};
    Wood.Modules.Client.RegionalInfo.prototype = {
        hasCountryInfo: function() {
            var a = this.getSessionStorage();
            return "max_cash_str max_cash loyalty_system_available prepaid_card_available credit_card_available nfc_available coupon_available my_coupon_available legal_payment_message_required legal_business_message_required time_based_restrictions tax_excluded_country".split(" ").some(function(b) {
                return Wood.Util.isDefined(a.getItem(b))
            })
        },
        isLoyaltySystemAvailable: function() {
            var a =
                this.getSessionStorage().getItem("loyalty_system_available");
            return a && "true" === a
        },
        isInquiryAvailable: function() {
            return !_.contains(["EUR", "AUS"], this.getRegion())
        },
        isAddressAvailable: function() {
            return _.contains(["US", "CA"], this.country)
        },
        storeCountryInfo: function(a) {
            if (!this.hasCountryInfo()) {
                var b = null;
                a ? (Wood.log("<storeCountryInfo> country cache found"), b = a) : (Wood.log("<storeCountryInfo> country cache not found"), b = new Wood.Model.CountryInfo({
                    country: this.country,
                    language: this.language
                }), b.fetch());
                a = this.getSessionStorage();
                var c = b.getMaxCacheSpec();
                a.setItem("max_cash_str", c.amount.toString());
                a.setItem("max_cash", c.raw_value.toString());
                a.setItem("loyalty_system_available", b.isLoyaltySystemAvailable().toString());
                a.setItem("prepaid_card_available", b.isPrepaiedCardAvailable().toString());
                a.setItem("credit_card_available", b.isCreditCardAvailable().toString());
                a.setItem("nfc_available", b.isNfcAvailable().toString());
                a.setItem("coupon_available", b.isCouponAvailable().toString());
                a.setItem("my_coupon_available",
                    b.isMyCouponAvailable().toString());
                a.setItem("legal_payment_message_required", b.isLegalPaymentMessageRequired().toString());
                a.setItem("legal_business_message_required", b.isLegalBusinessMessageRequired().toString());
                a.setItem("tax_excluded_country", b.isTaxExcluded().toString());
                a.setItem("time_based_restrictions", JSON.stringify(b.getTimeBasedRestrictions()))
            }
        },
        isLegalPaymentMessageRequired: function() {
            return "true" === this.getSessionStorage().getItem("legal_payment_message_required")
        },
        isLegalBusinessMessageRequired: function() {
            return "true" ===
                this.getSessionStorage().getItem("legal_business_message_required")
        },
        isTaxIncludedMessageRequired: function() {
            var a = ["NZ", "RU", "TR"];
            return "false" === this.getSessionStorage().getItem("tax_excluded_country") && !_.contains(a, this.country) && "JP" !== this.country
        },
        isNfcAvailable: function() {
            return "true" === this.getSessionStorage().getItem("nfc_available")
        },
        isCouponAvailable: function() {
            return "true" === this.getSessionStorage().getItem("coupon_available")
        },
        isMyCouponAvailable: function() {
            return "true" === this.getSessionStorage().getItem("my_coupon_available")
        }
    }
})();
(function() {
    function a(a, c) {
        this.client = a;
        this.storage_key = c
    }
    Wood.Modules.Client.Read = function() {};
    Wood.Modules.Client.Read.prototype = {
        createReadStore: function(b) {
            return new a(this, b)
        }
    };
    a.prototype = {
        read: function(a) {
            var c = this.getReadItems();
            a = _.union(c, a);
            _.isEqual(c, a) || (this.client.getLocalStorage().setItem(this.storage_key, a.join(",")), this.client.writeLocalStorage())
        },
        isRead: function(a) {
            return -1 !== this.getReadItems().indexOf(a)
        },
        getReadItems: function() {
            var a = this.client.getLocalStorage().getItem(this.storage_key);
            return Wood.Util.isDefined(a) ? _.map(a.split(","), function(a) {
                return a.toString()
            }) : []
        },
        hasUnReadItems: function(a) {
            var c = this.getReadItems();
            return !_.every(_.map(a, function(a) {
                return _.contains(c, a)
            }))
        }
    }
})();
(function() {
    Wood.Modules.Client.News = function() {
        this.newsReadStore = this.createReadStore("news")
    };
    Wood.Modules.Client.News.prototype = {
        readNews: function(a) {
            this.newsReadStore.read(a)
        },
        isNewsRead: function(a) {
            return this.newsReadStore.isRead(a)
        },
        getReadNews: function() {
            return this.newsReadStore.getReadItems()
        },
        hasUnReadNews: function(a) {
            a = _.map(a, function(a) {
                return a.id.toString()
            });
            return this.newsReadStore.hasUnReadItems(a)
        }
    }
})();
(function() {
    Wood.Modules.Client.OwnedCoupon = function() {
        this.ownedCouponReadStore = this.createReadStore("read_owned_coupon")
    };
    Wood.Modules.Client.OwnedCoupon.prototype = {
        readOwnedCoupon: function(a) {
            this.ownedCouponReadStore.read(a);
            a = this.getSessionStorage().getItem("cache_owned_coupon") || "";
            this.storeUnreadOwnedCoupon(a.split(","))
        },
        isOwnedCouponRead: function(a) {
            return this.ownedCouponReadStore.isRead(a)
        },
        getReadOwnedCoupon: function() {
            return this.ownedCouponReadStore.getReadItems()
        },
        storeOwnedCoupon: function(a) {
            this.getSessionStorage().setItem("cache_owned_coupon",
                a.join(","))
        },
        storeUnreadOwnedCoupon: function(a) {
            a = this.ownedCouponReadStore.hasUnReadItems(a);
            this.getSessionStorage().setItem("has_unread_owned_coupon", a + "")
        },
        hasUnReadOwnedCoupon: function() {
            return "true" === this.getSessionStorage().getItem("has_unread_owned_coupon")
        }
    }
})();
(function() {
    Wood.Modules.Client.ParentalControl = function() {};
    Wood.Modules.Client.ParentalControl.prototype = {
        getParentalControlForEShop: function() {
            if (this.isWiiU()) {
                var a = wiiuSystemSetting.getParentalControlForEShop();
                this.shutdownIfError(a);
                return a.isLocked
            }
            return !0
        },
        getParentalControlForGamePlay: function() {
            if (this.isWiiU()) {
                var a = wiiuSystemSetting.getParentalControlForGamePlay();
                this.shutdownIfError(a);
                return a
            }
            return {
                isLocked: !0,
                age: "18"
            }
        },
        isPincodeCheckedForEshop: function() {
            return "true" === this.getSessionStorage().getItem("pin_code_checked_for_eshop")
        },
        isPincodeChecked: function() {
            return "true" === this.getSessionStorage().getItem("pin_code_checked")
        },
        getAge: function() {
            return parseInt(this.getSessionStorage().getItem("age"), 10)
        },
        isLockedForEShop: function() {
            var a = this.getParentalControlForEShop();
            return this.isPincodeCheckedForEshop() ? !1 : a
        },
        isLockedForGamePlay: function(a) {
            if (Wood.Util.isUndefined(a)) return !1;
            var b = this.getParentalControlForGamePlay(),
                c = b.isLocked,
                b = parseInt(b.age, 10);
            if (("AU" === this.country || "NZ" === this.country) && 13 === b) b = 14;
            parseInt(a,
                10) <= b && (c = !1);
            return this.isPincodeChecked() ? !1 : c
        },
        isRequiredNfcUnderCheck: function() {
            var a = "JP" === this.country,
                b = 18 <= this.getAge();
            return a && !b
        }
    }
})();
(function() {
    Wood.Modules.Client.Storage = function() {
        this.ls = Wood.LocalStorage.build(this.isWiiU() ? wiiuLocalStorage : window.localStorage);
        this.ss = Wood.SessionStorage.build(this.isWiiU() ? wiiuSessionStorage : window.sessionStorage)
    };
    Wood.Modules.Client.Storage.prototype = {
        getSessionStorage: function() {
            return Wood.SessionStorage.getRawInstance()
        },
        getLocalStorage: function() {
            return Wood.LocalStorage.getRawInstance()
        },
        writeLocalStorage: function(a) {
            !a && this.isInBoot() ? (Wood.log("writeLocalStorage in Boot, delayed"),
                this.setFSFlushRequired()) : this.isWiiU() && (Wood.log("writeLocalStorage performed"), this.criticalAction(function() {
                this.getLocalStorage().write();
                this.cancelFSFlush()
            }))
        }
    }
})();
(function() {
    Wood.Modules.Client.UserData = function() {};
    Wood.Modules.Client.UserData.prototype = {
        getDeviceOrderList: function() {
            var a = this.getLocalStorage(),
                b = a.getItem(Wood.Client.StorageKey.DEVICE_ORDER_LIST),
                a = a.getItem(Wood.Client.StorageKey.DEVICE_ORDER_LIST_RVC),
                c;
            Wood.Util.isDefined(b) && Wood.Util.isDefined(a) ? c = new Wood.Model.DeviceOrderList({
                title_ids: b,
                rvc_title_ids: a
            }) : (c = new Wood.Model.DeviceOrderList, c.fetch({
                async: !1,
                success: function() {
                    wood.client.updateDeviceOrderList(c);
                    Wood.log("getDeviceOrderList: DeviceOrderList updated")
                }
            }));
            return c
        },
        getDeviceOrderListModified: function() {
            return this.getLocalStorage().getItem(Wood.Client.StorageKey.DEVICE_ORDER_LIST_MODIFIED)
        },
        updateDeviceOrderList: function(a) {
            var b = this.getLocalStorage();
            b.setItem(Wood.Client.StorageKey.DEVICE_ORDER_LIST, a.getTitleIdString());
            b.setItem(Wood.Client.StorageKey.DEVICE_ORDER_LIST_RVC, a.getRVCTitleIdString());
            b.setItem(Wood.Client.StorageKey.DEVICE_ORDER_LIST_MODIFIED, (new Date).getTime().toString());
            this.writeLocalStorage()
        },
        storeBalance: function() {
            var a =
                this.getSessionStorage(),
                b = a.getItem(Wood.Client.StorageKey.BALANCE_AMOUNT),
                c = a.getItem(Wood.Client.StorageKey.BALANCE_RAW);
            if (Wood.Util.isDefined(b) || Wood.Util.isDefined(c)) return !1;
            b = new Wood.Model.Balance({
                country: this.country,
                language: this.language
            });
            b.fetch({
                async: !1
            });
            if (!b.getAmount()) return Wood.log("balance_info is empty. server error?"), !1;
            c = b.getAmount();
            "MX" === this.country && (c = c.replace("MX$", "MX$ "));
            a.setItem(Wood.Client.StorageKey.BALANCE_AMOUNT, c);
            a.setItem(Wood.Client.StorageKey.BALANCE_RAW,
                b.getRawValue());
            return !0
        },
        getBalanceAmount: function() {
            return this.getSessionStorage().getItem(Wood.Client.StorageKey.BALANCE_AMOUNT)
        }
    }
})();
(function() {
    Wood.Modules.Client.SystemSetting = function() {
        this.resourceKey = this.region = this.language = this.country = null
    };
    Wood.Modules.Client.SystemSetting.prototype = {
        verifyIVSSent: function() {
            var a = this.getUserAgent();
            if (this.isWiiU() && !a.isLatestVersionOrLater()) Wood.log("[ERROR] not latest version of wood:" + a.getWoodVersion());
            else {
                var a = this.getSessionStorage(),
                    b = a.getItem(Wood.Client.StorageKey.IVS_SENT);
                if (Wood.Util.isDefined(b)) return Wood.log("verifyIVSSent: IVS OK (sessionStorage cache)"), !0;
                if (Wood.isWiiU) {
                    b = wiiuEC.getSendIvsState();
                    if (b.status && "success" === b.status) return Wood.log("verifyIVSSent: IVS status success"), a.setItem(Wood.Client.StorageKey.IVS_SENT, "1"), !0;
                    if ((a = b.error) && a.code)
                        if (Wood.log("verifyIVSSent: IVS error:" + a.message), this.isWiiU()) this.showError(a.code, a.message), this.errorShutdown();
                        else return !1;
                    Wood.log("verifyIVSSent: maybe sending. " + b.status)
                }
            }
        },
        loadSystemSetting: function() {
            if (this.isWiiU()) {
                this.language = this.getLocalStorage().getItem("lang");
                var a = wiiuSystemSetting.getCountry();
                this.shutdownIfError(a);
                this.country = a.code
            } else a = this.getLocalStorage().getItem("lang"), this.language = Wood.Util.isUndefined(a) ? "ja" : a, a = this.getSessionStorage().getItem("country"), this.country = null === a || 0 === a.length ? "JP" : a;
            if (!this.country || !this.language) Wood.log("client has no country, language info.");
            else return this.region = this.getRegion(), this.resourceKey = this.getResourceKey(), this.getSessionStorage().setItem(Wood.Client.StorageKey.RESOURCE_KEY, this.resourceKey), !0
        },
        getRegion: function() {
            if ("AU" ===
                this.country || "NZ" === this.country) return "AUS";
            if (this.isWiiU()) {
                var a = wiiuSystemSetting.getRegion();
                this.shutdownIfError(a);
                return a.code
            }
            return "JP" === this.country ? "JPN" : "US" === this.country || "CA" === this.country || "MX" === this.country || "BR" === this.country ? "USA" : "EUR"
        },
        getResourceKey: function() {
            if (!this.region) throw Error("region not stored yet");
            switch (this.region) {
                case "USA":
                    return this.language + "_US";
                case "AUS":
                    return "en_AU";
                default:
                    return this.language
            }
        },
        saveSystemSetting: function() {
            this.getLocalStorage().setItem(Wood.Client.StorageKey.LANGUAGE,
                this.language);
            this.writeLocalStorage()
        }
    }
})();
(function() {
    Wood.Modules.Client.LocalizedText = function() {
        this.localized_message = null
    };
    Wood.Modules.Client.LocalizedText.prototype = {
        clearLocalizedText: function() {
            this.getSessionStorage().removeItem(Wood.Client.StorageKey.LOCALIZED_TEXT)
        },
        prepareLocalizedText: function(a) {
            var b = this.getSessionStorage(),
                c = new Wood.Model.LocalizedMessage({
                    resource_key: this.getResourceKey()
                }),
                e = b.getItem(Wood.Client.StorageKey.LOCALIZED_TEXT);
            !e || a && a.force ? (c.fetch(), b.setItem(Wood.Client.StorageKey.LOCALIZED_TEXT, c.toJSON())) :
                c.loadJSON(e);
            this.localized_message = c
        },
        getText: function(a) {
            if (!this.localized_message) throw Error("localized text not prepared");
            return this.localized_message.getText(a)
        }
    }
})();
(function() {
    Wood.Modules.Client.Dictionary = function() {};
    Wood.Modules.Client.Dictionary.prototype = {
        isDictionarySet: function() {
            var a = this.getSessionStorage().getItem(Wood.Client.StorageKey.DICTIONARY_FLAG);
            return a && "true" === a ? !0 : !1
        },
        setDictionaryFlag: function() {
            return this.getSessionStorage().setItem(Wood.Client.StorageKey.DICTIONARY_FLAG, "true")
        }
    }
})();
(function() {
    Wood.Modules.Client.Redirector = function() {};
    Wood.Modules.Client.Redirector.prototype = {
        redirectTo: function(a, b, c) {
            a = b || c ? Wood.URL.create(a, b, c) : a;
            Wood.log("redirect to " + a);
            location.href = a;
            throw Error("wooc.client#redirectTo stopper");
        },
        redirectToTop: function() {
            "#top" === this.getHash() ? (Wood.log("[redirectToTop] already on top"), this.enableUserOperation()) : (Wood.log("[redirectToTop] to index.html#top"), this.redirectTo("index.html#top"))
        },
        redirectReplaceTo: function(a, b, c) {
            a = b || c ? Wood.URL.create(a,
                b, c) : a;
            Wood.log("redirect replace to " + a);
            location.replace(a);
            throw Error("wooc.client#redirectReplaceTo stopper");
        }
    }
})();
(function() {
    Wood.Modules.Client.Session = function() {};
    Wood.Modules.Client.Session.prototype = {
        updateUserSession: function(a) {
            var b = this.isWiiU() ? parseInt(wiiuSystemSetting.getUTC().epochMilliSeconds, 10) : (new Date).getTime(),
                c = this.getSessionStorage(),
                e = Number(c.getItem(Wood.Client.StorageKey.SESSION_UPDATED));
            if ((e && 0 !== e ? b - e : b) < Wood.SystemConfig.SESSION_UPDATE_INTERVAL) return !1;
            e = !0;
            a && a.hasOwnProperty("async") && (e = a.async);
            (new Wood.Model.Balance({
                country: this.country,
                language: this.language
            })).fetch({
                async: e,
                success: function() {
                    c.setItem(Wood.Client.StorageKey.SESSION_UPDATED, b.toString())
                }
            });
            return !0
        }
    }
})();
(function() {
    function a(a) {
        if (a.isWiiU()) return !0;
        throw Error("this function is WiiU only");
    }
    Wood.Modules.Client.Jumper = function() {};
    Wood.Modules.Client.Jumper.prototype = {
        shutdown: function(b) {
            a(this);
            if ("1" === this.getSessionStorage().getItem(Wood.Client.StorageKey.FROM_OTHER_APP)) Wood.log("shutdown: returnToCaller"), wiiuBrowser.returnToCaller();
            else {
                if (b && b.back_to_home_menu) return this.jumpToHBM();
                Wood.log("shutdown: closeApplication");
                wiiuBrowser.closeApplication()
            }
        },
        errorShutdown: function() {
            this.shutdown({
                back_to_home_menu: !0
            })
        },
        jumpToHBM: function() {
            Wood.log("shutdown: jumpToHomeButtonMenu");
            wiiuBrowser.jumpToHomeButtonMenu ? wiiuBrowser.jumpToHomeButtonMenu() : wiiuBrowser.closeApplication()
        },
        jumpToUpdate: function() {
            a(this);
            Wood.log("wiiuBrowser.jumpToUpdate()");
            wiiuBrowser.jumpToUpdate()
        }
    }
})();
(function() {
    Wood.Client = function() {
        var a = this;
        _.each(Wood.Client.Modules, function(c) {
            c.call(a)
        })
    };
    Wood.Client.create = function() {
        return new Wood.Client
    };
    Wood.Client.prototype = {
        isWiiU: function() {
            return Wood.isWiiU
        },
        isDrc: function() {
            return this.isWiiU() ? wiiuDevice.isDrc() : !0
        },
        tryWiiU: function(a) {
            return this.isWiiU() ? a.call() : !1
        },
        getAB: function() {
            return this.isWiiU() ? ["A", "B"][wiiuNNA.principalId % 2] : ""
        },
        getHash: function() {
            return location.hash
        },
        debug_print: Wood.log,
        historyBack: function() {
            if (!this.isWiiU()) throw history.back(),
                Error("wooc.client#historyBack stopper");
            wiiuBrowser.canHistoryBack() ? history.back() : this.redirectToTop();
            throw Error("wooc.client#historyBack stopper");
        },
        getUserAgent: function(a) {
            return new Wood.UserAgent(a)
        },
        criticalAction: function(a) {
            if (!this.isWiiU()) return a.apply(this);
            wiiuBrowser.lockHomeButtonMenu(!0);
            wiiuBrowser.lockPowerButton(!0);
            a.apply(this);
            wiiuBrowser.lockHomeButtonMenu(!1);
            wiiuBrowser.lockPowerButton(!1)
        },
        playSound: function(a, c) {
            this.isWiiU() ? (c = c || Wood.Client.SoundDevice.DRC, wiiuSound.playSoundByName(a,
                c)) : Wood.log("(wood.client) playSound: " + a)
        }
    };
    Wood.Client.StorageKey = {
        SESSION_UPDATED: "keep_alive_modified",
        IVS_SENT: "ivs_sent",
        BALANCE_AMOUNT: "balance",
        BALANCE_RAW: "balance_raw",
        DEVICE_ORDER_LIST: "device_order_list",
        DEVICE_ORDER_LIST_RVC: "device_order_list_rvc",
        DEVICE_ORDER_LIST_MODIFIED: "device_order_list_modified",
        DICTIONARY_FLAG: "dictionary_flg",
        TEMP_REDEEMABLE_CARD: "temp_redeemable_card",
        LOCALIZED_TEXT: "localized_text",
        RESOURCE_KEY: "resource_key",
        REDEEM_TITLE_ID: "redeem_title_id",
        REDEEM_NUMBER: "redeem_num",
        NINJA_SESSION: "ninja_session",
        FIRST_BOOT: "first_boot",
        LANGUAGE: "lang",
        FROM_OTHER_APP: "from_other_app",
        VOTABLE_LIST: "votable_list",
        VOTABLE_DATA: "votable_data",
        AOC_EDITING: "aoc_editing"
    };
    Wood.Client.SoundDevice = {
        DRC: 1,
        TV: 2,
        BOTH: 3
    };
    var a = Wood.Modules.Client;
    Wood.Client.Modules = [a.ErrorHandler, a.PurchaseInfo, a.Boot, a.AOC, a.EC, a.Nfc, a.NNA, a.UI, a.RegionalInfo, a.Read, a.News, a.OwnedCoupon, a.ParentalControl, a.Storage, a.UserData, a.SystemSetting, a.LocalizedText, a.Dictionary, a.Redirector, a.Session, a.Jumper];
    _.each(Wood.Client.Modules, function(a) {
        _.extend(Wood.Client.prototype, a.prototype)
    })
})();
(function() {
    var a;
    Wood.ModelStore = function() {
        this.pool = [];
        this.size = 10
    };
    Wood.ModelStore.getInstance = function() {
        return a = a || new Wood.ModelStore
    };
    Wood.ModelStore.prototype = {
        add: function(a, c) {
            this.pool.push({
                key: a,
                attr: c
            });
            this.shift()
        },
        get: function(a) {
            var c = function(c) {
                    return c.key === a
                },
                e = _.find(this.pool, c),
                d = null;
            _.isObject(e) && (d = e.attr, this.pool = _.reject(this.pool, c), this.pool.push(e), this.shift());
            return d
        },
        shift: function() {
            if (this.pool.length > this.size) return this.pool.shift()
        }
    }
})();
(function() {
    Wood.PurchaseStatus = function(a) {
        this.status = a
    };
    var a = Wood.PurchaseStatus.STATUS = {
        PURCHASED: 1,
        REDOWNLOADABLE: 2,
        DUPLICATED: 3,
        OK: 4,
        INVALID: 5,
        DOWNLOADABLE: 6
    };
    Wood.PurchaseStatus.prototype = {
        getText: function() {
            switch (this.status) {
                case a.PURCHASED:
                    return $("#str_purchased").html();
                case a.REDOWNLOADABLE:
                    return $("#str_reDL").html();
                case a.DUPLICATED:
                    return $("#str_nobuy_d").html();
                case a.OK:
                    return $("#str_buy").html();
                case a.INVALID:
                    return $("#str_undefined").html();
                case a.DOWNLOADABLE:
                    return $("#str_DL").html()
            }
        },
        isOkOrDownloadable: function() {
            return _.contains([a.OK, a.DOWNLOADABLE, a.REDOWNLOADABLE], this.status)
        },
        isPurchased: function() {
            return this.status === a.PURCHASED
        },
        isDuplicated: function() {
            return this.status === a.DUPLICATED
        },
        isOk: function() {
            return this.status === a.OK
        },
        isInvalid: function() {
            return this.status === a.INVALID
        },
        isDownloadable: function() {
            return this.status === a.DOWNLOADABLE
        }
    }
})();
(function() {
    var a = ["title", "movie", "both"],
        b = {
            "0005000010185100": "0005000010101F00",
            "0005000010185200": "0005000010101C00",
            "0005000010185300": "000500001012BC00",
            "0005000010185400": "0005000010143400",
            "0005000010185500": "0005000010112D00",
            "0005000010185600": "0005000010116300"
        };
    Wood.StartPageDispatcher = {
        alertNoData: function() {
            wood.client.endStartUp();
            wood.client.alert($("#dialog_msg_nodata").text(), wood.client.getText("common01_01_006"))
        },
        isDemoNsUid: function(a) {
            return "3" === String(a).split("")[3]
        },
        convertToNormalTitleId: function(a) {
            a =
                String(a);
            0 === a.indexOf("00050002") && (a = "000500001" + a.substring(9, 14) + "00");
            0 === a.indexOf("00040002") && (a = "00040000" + a.substring(8, 14) + "00");
            return 0 !== a.indexOf("00050000") && 0 !== a.indexOf("00040000") ? null : a
        },
        convertToMainTitleId: function(a, e) {
            return "0005000010183A00" !== e && _.has(b, a) ? b[a] : a
        },
        getNsUid: function(a) {
            var b = null,
                d = null,
                d = null;
            if (void 0 !== a.dst_nsuid) d = new Wood.Model.TitlePublicStatus({
                country: wood.client.country,
                language: wood.client.language,
                id: a.dst_nsuid
            }), d.fetch(), b = d.getNsUid();
            else if (void 0 !==
                a.dst_title_id) {
                d = Wood.StartPageDispatcher.convertToNormalTitleId(a.dst_title_id);
                if (!d) {
                    Wood.log("systemapp title_id specified. exit script.");
                    return
                }
                d = Wood.StartPageDispatcher.convertToMainTitleId(d, a.src_title_id);
                d = new Wood.Model.TitlePublicStatus({
                    country: wood.client.country,
                    language: wood.client.language,
                    id: d
                });
                d.fetch();
                b = d.getNsUid()
            } else void 0 !== a.dst_unique_id && (d = "000500001" + a.dst_unique_id + "00", d = new Wood.Model.TitlePublicStatus({
                country: wood.client.country,
                language: wood.client.language,
                id: d
            }), d.fetch(), b = d.getNsUid());
            b && Wood.StartPageDispatcher.isDemoNsUid(b) && (Wood.StartPageDispatcher.alertNoData(), wood.client.redirectReplaceTo("./#top"));
            if (b && d && (a = "true" === a.allow_unsearchable, !d.isPublic() && (!d.isUnseachable() || !a))) b = null;
            return b
        },
        getNsUidFromItemCode: function(a) {
            a = new Wood.Model.AocItemNsuid({
                country: wood.client.country,
                item_code: a
            });
            a.fetch();
            return a.getNsuid()
        },
        createAocURL: function(a) {
            var b = Wood.StartPageDispatcher.getNsUid(a);
            if (!b) return Wood.StartPageDispatcher.alertNoData(),
                "./#top";
            var d = a.dst_aoc_nsuid;
            a = a.dst_item_code;
            return !d && !a ? (Wood.StartPageDispatcher.alertNoData(), "./#top") : !d && a && (d = this.getNsUidFromItemCode(a), !d) ? Wood.URL.create("./#title", {
                title: b
            }) : Wood.URL.create("./aoc_detail.html", {
                seq: "appJump",
                title_id: b,
                aoc_id: d
            })
        },
        createAocsURL: function(a) {
            var b = Wood.StartPageDispatcher.getNsUid(a);
            if (null === b) return Wood.StartPageDispatcher.alertNoData(), "./#top";
            var b = new Wood.URL("./data03_01.html", {
                    seq: "appJump",
                    title: b
                }),
                d = a.search_word;
            a = a.sort;
            d && b.setQueryString("search_word",
                d);
            a && b.setQueryString("sort", a);
            return b.toString()
        },
        createTicketsURL: function(a) {
            a = Wood.StartPageDispatcher.getNsUid(a);
            return _.isNull(a) ? (Wood.StartPageDispatcher.alertNoData(), "./#top") : _.isUndefined(a) ? "./#top" : Wood.URL.create("./data04_01.html", {
                seq: "appJump",
                title: a
            })
        },
        createRedeemURL: function(a) {
            return Wood.URL.create("./#redeem", {
                seq: "appJump",
                card_number: a.card_number || ""
            })
        },
        createTitleDetailURL: function(a) {
            a = Wood.StartPageDispatcher.getNsUid(a);
            return _.isNull(a) ? (Wood.StartPageDispatcher.alertNoData(),
                "./#top") : _.isUndefined(a) ? "./#top" : Wood.URL.create("./#title", {
                seq: "appJump",
                title: a
            })
        },
        createSearchURL: function(b) {
            var e = _.contains(a, b.type) ? b.type : _.first(a),
                d = null;
            _.isString(b.freeword) && (d = b.freeword);
            b = {
                seq: "appJump",
                searchType: e
            };
            d && (b.freeword = d);
            return Wood.URL.create("./#shelf", b)
        },
        createNfcRecoverURL: function() {
            return Wood.URL.create("./money07_01.html", {
                seq: "appJump"
            })
        },
        dispatch: function(a) {
            switch (a.scene) {
                case "top":
                    return "./#top";
                case "aoc":
                    return this.createAocURL(a);
                case "aocs":
                    return this.createAocsURL(a);
                case "tickets":
                    return this.createTicketsURL(a);
                case "redeem":
                    return this.createRedeemURL(a);
                case "detail":
                    return this.createTitleDetailURL(a);
                case "search":
                    return this.createSearchURL(a);
                case "recover_nfc":
                    return this.createNfcRecoverURL(a);
                default:
                    return "./#top"
            }
        }
    };
    Wood.StartPageDispatcher.URL_TOP = "./#top"
})();
(function() {
    Wood.IndexBeacon = {
        boot01_01: function() {
            Wood.Analytics.saveAppJumpAttr($.url().param())
        },
        boot01_02: function() {},
        boot01_03: function() {},
        boot01_04: function() {},
        boot01_05: function() {},
        boot01_06: function() {},
        boot01_07: function() {}
    }
})();
(function() {
    Wood.ScreenSwitcher = function(a) {
        this.ids = a ? a : []
    };
    Wood.ScreenSwitcher.prototype = {
        getIds: function() {
            return this.ids
        },
        change: function(a) {
            $.each(this.getIds(), function(b, c) {
                c === a ? $("#" + c).show() : $("#" + c).hide()
            })
        }
    }
})();
(function(a) {
    a.fn.crypt = function(b) {
        function c(a) {
            var b = "",
                c, d, e, k, h, j, l = 0;
            do c = a.source.charCodeAt(l++), d = a.source.charCodeAt(l++), e = a.source.charCodeAt(l++), k = c >> 2, c = (c & 3) << 4 | d >> 4, h = (d & 15) << 2 | e >> 6, j = e & 63, isNaN(d) ? h = j = 64 : isNaN(e) && (j = 64), b += a.b64Str.charAt(k) + a.b64Str.charAt(c) + a.b64Str.charAt(h) + a.b64Str.charAt(j); while (l < a.source.length);
            return b
        }

        function e(a) {
            var b = "",
                c, d, e, k, h, j = 0;
            k = RegExp("[^A-Za-z0-9" + a.b64Str.substr(-3) + "]", "g");
            a.source = a.source.replace(k, "");
            do c = a.b64Str.indexOf(a.source.charAt(j++)),
                d = a.b64Str.indexOf(a.source.charAt(j++)), k = a.b64Str.indexOf(a.source.charAt(j++)), h = a.b64Str.indexOf(a.source.charAt(j++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | k >> 2, e = (k & 3) << 6 | h, b += String.fromCharCode(c), 64 != k && (b += String.fromCharCode(d)), 64 != h && (b += String.fromCharCode(e)); while (j < a.source.length);
            return b
        }

        function d(a, b) {
            var c = (a & 65535) + (b & 65535);
            return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535
        }

        function k(a) {
            var b = Array(2),
                c = Array(4),
                d = "",
                e;
            a.source = escape(a.source);
            for (e = 0; 4 > e; e++) c[e] = l(a.strKey.slice(4 * e, 4 * (e + 1)));
            for (e = 0; e < a.source.length; e += 8) {
                b[0] = l(a.source.slice(e, e + 4));
                b[1] = l(a.source.slice(e + 4, e + 8));
                for (var k = b, h = k[0], j = k[1], n = 0; 84941944608 != n;) h += (j << 4 ^ j >>> 5) + j ^ n + c[n & 3], n += 2654435769, j += (h << 4 ^ h >>> 5) + h ^ n + c[n >>> 11 & 3];
                k[0] = h;
                k[1] = j;
                d += H(b[0]) + H(b[1])
            }
            return d.replace(/[\0\t\n\v\f\r\xa0'"!]/g, function(a) {
                return "!" + a.charCodeAt(0) + "!"
            })
        }

        function v(a) {
            var b = Array(2),
                c = Array(4),
                d = "",
                e;
            for (e = 0; 4 > e; e++) c[e] = l(a.strKey.slice(4 * e, 4 * (e + 1)));
            ciphertext = a.source.replace(/!\d\d?\d?!/g, function(a) {
                return String.fromCharCode(a.slice(1, -1))
            });
            for (e = 0; e < ciphertext.length; e += 8) {
                b[0] = l(ciphertext.slice(e, e + 4));
                b[1] = l(ciphertext.slice(e + 4, e + 8));
                a = b;
                for (var k = a[0], h = a[1], j = 84941944608; 0 != j;) h -= (k << 4 ^ k >>> 5) + k ^ j + c[j >>> 11 & 3], j -= 2654435769, k -= (h << 4 ^ h >>> 5) + h ^ j + c[j & 3];
                a[0] = k;
                a[1] = h;
                d += H(b[0]) + H(b[1])
            }
            d = d.replace(/\0+$/, "");
            return unescape(d)
        }

        function l(a) {
            for (var b = 0, c = 0; 4 > c; c++) b |= a.charCodeAt(c) << 8 * c;
            return isNaN(b) ? 0 : b
        }

        function H(a) {
            return String.fromCharCode(a & 255, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255)
        }
        var z = {
            b64Str: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            strKey: "123",
            method: "md5",
            source: "",
            chrsz: 8,
            hexcase: 0
        };
        "undefined" == typeof b.urlsafe ? (z.b64Str += "+/=", b.urlsafe = !1) : z.b64Str = b.urlsafe ? z.b64Str + "-_=" : z.b64Str + "+/=";
        b = a.extend(z, b);
        if (!b.source)
            if (z = a(this), z.html()) b.source = z.html();
            else if (z.val()) b.source = z.val();
        else return alert("Please provide source text"), !1;
        if ("md5" == b.method) {
            for (var P = function(a, b) {
                    return a << b | a >>> 32 - b
                }, z = function(a, b, c, e, k, h, l) {
                    return d(P(d(d(a, b & c | ~b & e), d(k, l)), h), b)
                }, G = function(a, b, c, e, k, h, l) {
                    return d(P(d(d(a, b & e | c &
                        ~e), d(k, l)), h), b)
                }, C = function(a, b, c, e, k, h, l) {
                    return d(P(d(d(a, b ^ c ^ e), d(k, l)), h), b)
                }, I = function(a, b, c, e, k, h, l) {
                    return d(P(d(d(a, c ^ (b | ~e)), d(k, l)), h), b)
                }, t = b.source, A = [], u = (1 << b.chrsz) - 1, x = 0; x < t.length * b.chrsz; x += b.chrsz) A[x >> 5] |= (t.charCodeAt(x / b.chrsz) & u) << x % 32;
            t = b.source.length * b.chrsz;
            A[t >> 5] |= 128 << t % 32;
            A[(t + 64 >>> 9 << 4) + 14] = t;
            for (var t = 1732584193, u = -271733879, x = -1732584194, y = 271733878, B = 0; B < A.length; B += 16) var V = t,
                h = u,
                L = x,
                D = y,
                t = z(t, u, x, y, A[B + 0], 7, -680876936),
                y = z(y, t, u, x, A[B + 1], 12, -389564586),
                x = z(x,
                    y, t, u, A[B + 2], 17, 606105819),
                u = z(u, x, y, t, A[B + 3], 22, -1044525330),
                t = z(t, u, x, y, A[B + 4], 7, -176418897),
                y = z(y, t, u, x, A[B + 5], 12, 1200080426),
                x = z(x, y, t, u, A[B + 6], 17, -1473231341),
                u = z(u, x, y, t, A[B + 7], 22, -45705983),
                t = z(t, u, x, y, A[B + 8], 7, 1770035416),
                y = z(y, t, u, x, A[B + 9], 12, -1958414417),
                x = z(x, y, t, u, A[B + 10], 17, -42063),
                u = z(u, x, y, t, A[B + 11], 22, -1990404162),
                t = z(t, u, x, y, A[B + 12], 7, 1804603682),
                y = z(y, t, u, x, A[B + 13], 12, -40341101),
                x = z(x, y, t, u, A[B + 14], 17, -1502002290),
                u = z(u, x, y, t, A[B + 15], 22, 1236535329),
                t = G(t, u, x, y, A[B + 1], 5, -165796510),
                y = G(y, t, u, x, A[B + 6], 9, -1069501632),
                x = G(x, y, t, u, A[B + 11], 14, 643717713),
                u = G(u, x, y, t, A[B + 0], 20, -373897302),
                t = G(t, u, x, y, A[B + 5], 5, -701558691),
                y = G(y, t, u, x, A[B + 10], 9, 38016083),
                x = G(x, y, t, u, A[B + 15], 14, -660478335),
                u = G(u, x, y, t, A[B + 4], 20, -405537848),
                t = G(t, u, x, y, A[B + 9], 5, 568446438),
                y = G(y, t, u, x, A[B + 14], 9, -1019803690),
                x = G(x, y, t, u, A[B + 3], 14, -187363961),
                u = G(u, x, y, t, A[B + 8], 20, 1163531501),
                t = G(t, u, x, y, A[B + 13], 5, -1444681467),
                y = G(y, t, u, x, A[B + 2], 9, -51403784),
                x = G(x, y, t, u, A[B + 7], 14, 1735328473),
                u = G(u, x, y, t, A[B + 12], 20, -1926607734),
                t = C(t, u, x, y, A[B + 5], 4, -378558),
                y = C(y, t, u, x, A[B + 8], 11, -2022574463),
                x = C(x, y, t, u, A[B + 11], 16, 1839030562),
                u = C(u, x, y, t, A[B + 14], 23, -35309556),
                t = C(t, u, x, y, A[B + 1], 4, -1530992060),
                y = C(y, t, u, x, A[B + 4], 11, 1272893353),
                x = C(x, y, t, u, A[B + 7], 16, -155497632),
                u = C(u, x, y, t, A[B + 10], 23, -1094730640),
                t = C(t, u, x, y, A[B + 13], 4, 681279174),
                y = C(y, t, u, x, A[B + 0], 11, -358537222),
                x = C(x, y, t, u, A[B + 3], 16, -722521979),
                u = C(u, x, y, t, A[B + 6], 23, 76029189),
                t = C(t, u, x, y, A[B + 9], 4, -640364487),
                y = C(y, t, u, x, A[B + 12], 11, -421815835),
                x = C(x, y, t, u, A[B + 15], 16, 530742520),
                u = C(u, x, y, t, A[B + 2], 23, -995338651),
                t = I(t, u, x, y, A[B + 0], 6, -198630844),
                y = I(y, t, u, x, A[B + 7], 10, 1126891415),
                x = I(x, y, t, u, A[B + 14], 15, -1416354905),
                u = I(u, x, y, t, A[B + 5], 21, -57434055),
                t = I(t, u, x, y, A[B + 12], 6, 1700485571),
                y = I(y, t, u, x, A[B + 3], 10, -1894986606),
                x = I(x, y, t, u, A[B + 10], 15, -1051523),
                u = I(u, x, y, t, A[B + 1], 21, -2054922799),
                t = I(t, u, x, y, A[B + 8], 6, 1873313359),
                y = I(y, t, u, x, A[B + 15], 10, -30611744),
                x = I(x, y, t, u, A[B + 6], 15, -1560198380),
                u = I(u, x, y, t, A[B + 13], 21, 1309151649),
                t = I(t, u, x, y, A[B + 4], 6, -145523070),
                y = I(y, t, u, x, A[B + 11], 10, -1120210379),
                x = I(x, y, t, u, A[B + 2], 15, 718787259),
                u = I(u, x, y, t, A[B + 9], 21, -343485551),
                t = d(t, V),
                u = d(u, h),
                x = d(x, L),
                y = d(y, D);
            z = [t, u, x, y];
            b = b.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
            G = "";
            for (C = 0; C < 4 * z.length; C++) G += b.charAt(z[C >> 2] >> 8 * (C % 4) + 4 & 15) + b.charAt(z[C >> 2] >> 8 * (C % 4) & 15);
            return G
        }
        if ("sha1" == b.method) {
            G = b.source;
            z = [];
            C = (1 << b.chrsz) - 1;
            for (I = 0; I < G.length * b.chrsz; I += b.chrsz) z[I >> 5] |= (G.charCodeAt(I / b.chrsz) & C) << 32 - b.chrsz - I % 32;
            G = b.source.length * b.chrsz;
            z[G >> 5] |= 128 << 24 - G % 32;
            z[(G + 64 >> 9 << 4) + 15] = G;
            G = Array(80);
            C = 1732584193;
            I = -271733879;
            A = -1732584194;
            t = 271733878;
            u = -1009589776;
            for (x = 0; x < z.length; x += 16) {
                y = C;
                B = I;
                V = A;
                h = t;
                L = u;
                for (D = 0; 80 > D; D++) {
                    G[D] = 16 > D ? z[x + D] : (G[D - 3] ^ G[D - 8] ^ G[D - 14] ^ G[D - 16]) << 1 | (G[D - 3] ^ G[D - 8] ^ G[D - 14] ^ G[D - 16]) >>> 31;
                    var Q = d(d(C << 5 | C >>> 27, 20 > D ? I & A | ~I & t : 40 > D ? I ^ A ^ t : 60 > D ? I & A | I & t | A & t : I ^ A ^ t), d(d(u, G[D]), 20 > D ? 1518500249 : 40 > D ? 1859775393 : 60 > D ? -1894007588 : -899497514)),
                        u = t,
                        t = A,
                        A = I << 30 | I >>> 2,
                        I = C,
                        C = Q
                }
                C = d(C, y);
                I = d(I, B);
                A = d(A, V);
                t = d(t, h);
                u = d(u, L)
            }
            z = [C, I, A, t, u];
            b = b.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
            G = "";
            for (C =
                0; C < 4 * z.length; C++) G += b.charAt(z[C >> 2] >> 8 * (3 - C % 4) + 4 & 15) + b.charAt(z[C >> 2] >> 8 * (3 - C % 4) & 15);
            return G
        }
        if ("b64enc" == b.method) return c(b);
        if ("b64dec" == b.method) return e(b);
        if ("xteaenc" == b.method) return k(b);
        if ("xteadec" == b.method) return v(b);
        if ("xteab64enc" == b.method) return z = k(b), b.method = "b64enc", b.source = z, c(b);
        if ("xteab64dec" == b.method) return z = e(b), b.method = "xteadec", b.source = z, v(b)
    }
})(jQuery);
(function(a) {
    var b = a.Wood || {};
    a.Wood = b;
    var c = "undefined" !== typeof wiiuSystemSetting ? !0 : !1,
        e = a.localStorage,
        d = a.sessionStorage;
    b.AnalyticsUtil = {
        isWiiU: c,
        isReferrerTop: function() {
            var a = !1,
                b = $.url(),
                c = b.fparam("beacon") || b.param("beacon"),
                c = c ? /directory/.test(c) : !1;
            "appJump" !== b.param("seq") && c && (a = !0);
            return a
        },
        getHashedPID: function() {
            if (!c) return e.getItem("pid") || "00000000000000000000000000000000";
            var a = parseInt(wiiuNNA.principalId, 10),
                a = isNaN(a) ? "0" : a.toString(16),
                a = ["00000000", a].join(""),
                a = a.substr(a.length -
                    8),
                a = [wiiuNNA.principalIdHashKey, a].join("");
            return jQuery().crypt({
                method: "md5",
                source: a
            })
        },
        getRegionType: function() {
            var a = this.getRegion();
            return "JPN" === a ? "jp" : "USA" === a ? "us" : "EUR" === a ? "eu" : "unknown"
        },
        getDefaultCurrency: function() {
            var a = this.getRegion();
            return "JPN" === a ? "JPY" : "USA" === a ? "USD" : "EUR" === a ? "EUR" : "JPY"
        },
        getGender: function() {
            return c ? wiiuNNA.gender : e.getItem("gender") || "unknown"
        },
        getAge: function() {
            if (!c) return parseInt(e.getItem("age"), 10) || 30;
            var a = new Date,
                a = 1E4 * a.getFullYear() + 100 * (a.getMonth() +
                    1) + a.getDate(),
                b = new Date(wiiuNNA.birthday),
                b = 1E4 * b.getFullYear() + 100 * (b.getMonth() + 1) + b.getDate();
            return Math.floor((a - b) / 1E4)
        },
        getRegion: function() {
            if (c) {
                var a = wiiuSystemSetting.getRegion();
                return a.error ? "unknown" : a.code
            }
            a = this.getCountry();
            return "JP" === a ? "JPN" : "US" === a || "CA" === a || "MX" === a || "BR" === a ? "USA" : "EUR"
        },
        getCountry: function() {
            if (c) {
                var a = wiiuSystemSetting.getCountry();
                return a.error ? "unknown" : a.code
            }
            return d.getItem("country") || "unknown"
        },
        getLanguage: function() {
            if (c) {
                var a = wiiuSystemSetting.getLanguage();
                return a.error ? "unknown" : a.code
            }
            return e.getItem("lang") || "unknown"
        }
    }
})(window);
(function(a) {
    function b() {
        this.dataLayer = a.dataLayer || [];
        a.dataLayer = this.dataLayer;
        this.sessionStorage = e.isWiiU ? wiiuSessionStorage : a.sessionStorage;
        this._isSent = null;
        this.setAccountInfo()
    }
    var c = a.Wood,
        e = c.AnalyticsUtil;
    b.prototype = {
        _send: function() {
            /*this._isSent || (setTimeout(function() {
                var a = window;
                a.dataLayer = a.dataLayer || [];
                a.dataLayer.push({
                    "gtm.start": (new Date).getTime(),
                    event: "gtm.js"
                });
                var a = document.getElementsByTagName("script")[0],
                    b = document.createElement("script");
                b.async = !0;
                b.src = "//www.googletagmanager.com/gtm.js?id=GTM-TNPGB6";
                a.parentNode.insertBefore(b, a)
            }, 1), this._isSent = !0)*/
        },
        _addAttr: function(a) {
            this.dataLayer.push(a)
        },
        _addEvent: function(a, b) {
            this._addAttr($.extend({
                event: a
            }, b))
        },
        _addEventOrAttr: function(a, b) {
            this._isSent ? this._addEvent(a, b) : this._addAttr(b)
        },
        setAccountInfo: function() {
            this._addAppJumpEvent();
            this._addEventOrAttr("login", {
                regionCd: e.getRegionType(),
                uId: e.getHashedPID(),
                upc01: e.getAge(),
                upc02: e.getGender(),
                uCountry: e.getCountry(),
                uLanguage: e.getLanguage()
            });
            this._send()
        },
        sendVirtualPV: function(a, b) {
            this._addEvent("virtualPV",
                $.extend({
                    virtualPage: a
                }, b))
        },
        addTitleViewAttr: function(a) {
            this._addAttr({
                ecommerce: {
                    detail: {
                        products: [{
                            id: a
                        }]
                    }
                }
            });
            return this
        },
        addFromAttr: function(a) {
            this._addAttr({
                from: a
            });
            return this
        },
        addDirectoryAttr: function(a) {
            a && this.addFromAttr("id_" + a.id);
            return this
        },
        addShelfAttr: function(a, b) {
            if (a) {
                var c = a.alias,
                    e = a.name;
                this._addAttr({
                    shelf: c ? "ALIAS:" + c : "NAME:" + e,
                    directory_index: a.index
                })
            }
            this.addFromAttr({
                OwnedCoupon: "owned_coupon",
                Search: "search"
            }[b] || (a ? "id_" + a.id : "feature"));
            return this
        },
        saveAppJumpAttr: function(a) {
            a =
                a || {};
            var b = a.scene,
                c = a.src_title_id;
            a = a.launcher_type;
            var e = null;
            b && (c && !a && (a = "(Not specified)"), "top" !== b && (e = "app_jump"));
            this.sessionStorage.setItem("analytics_appjump", JSON.stringify({
                from: e,
                srcTitleId: c,
                launcherType: a
            }))
        },
        _addAppJumpEvent: function() {
            var a = this.sessionStorage.getItem("analytics_appjump");
            if (!a) return this;
            this.sessionStorage.removeItem("analytics_appjump");
            a = JSON.parse(a);
            "caffeine_killer" === a.launcherType && this._addEvent("kntf", {
                launcher_type: "caffeine_killer",
                src_title_id: a.srcTitleId
            });
            return this
        },
        sendMoviePlay: function(a) {
            this._addEvent("play_movie", {
                playMovieID: a
            })
        },
        sendPurchaseAttr: function(a) {
            a = this._createEcommerceAttr("Purchase", a);
            this._addAttr(a);
            this.sendVirtualPV("VP_PurchaseCompletion")
        },
        sendPurchaseConfirmAttr: function(a) {
            var b = [{
                    id: a
                }],
                c = this;
            a = function(a) {
                var d = {
                    ecommerce: {}
                };
                d.ecommerce[a] = {
                    products: b
                };
                c._addAttr(d)
            };
            a("add");
            this.sendVirtualPV("VP_Purchase_AddCart");
            a("checkout");
            this.sendVirtualPV("VP_PurchaseConfirmation")
        },
        _createEcommerceAttr: function(a, b) {
            var c;
            c = b.couponCode ? "CODE_" + b.couponCode : b.couponInstanceCode ? "OWNED_COUPON_" + b.couponInstanceCode : "DID_NOT_USE_COUPON";
            var l = "eu" === e.getRegionType();
            return {
                currency: b.currency || null,
                ecommerce: {
                    purchase: {
                        actionField: {
                            id: "" + b.trans_id,
                            affiliation: a,
                            revenue: b.price
                        },
                        products: [{
                            id: b.id,
                            coupon: c,
                            dimension2: l && b.businessType || null,
                            price: b.price,
                            quantity: "1"
                        }]
                    }
                }
            }
        },
        sendError: function(a) {
            this._addEvent("event_error", {
                errorCode: a
            })
        }
    };
    c.Analytics = new b
})(window);
(function() {
    Wood.Model.Base = Backbone.Model.extend({
        defaults: function() {
            return this.constructor.DEFAULT_PARAM
        },
        initialize: function(a) {
            this.setParam(a);
            this.setup()
        },
        store: Wood.ModelStore.getInstance(),
        setup: function() {
            this.storageCache && this.storageCache.autosave && this.listenTo(this, "sync", this.saveStorageCache)
        },
        setParam: function(a) {
            _.extend(this, a)
        },
        initByProperty: function(a) {
            this.set(a)
        },
        initByPropertyOrQuery: function(a) {
            _.every(_.map(this.queryParamKeys, function(b) {
                    return _.has(a, b)
                })) ? this.setParam(a) :
                this.initByProperty(a)
        },
        getAttributes: function() {
            var a = $.extend({}, this.attributes),
                b = this.defaults();
            _.each(b, function(b, e) {
                delete a[e]
            });
            return a
        },
        storageCache: null,
        _assertCacheInfo: function() {
            if (!this.storageCache) throw Error("storageCache not defined");
            return this.storageCache
        },
        saveStorageCache: function() {
            var a = this._assertCacheInfo(),
                b = a.storage.getRawInstance();
            b.setItem(a.keyname, JSON.stringify(this.getAttributes()));
            a.flush_on_save && _.isFunction(b.write) && b.write()
        },
        hasStorageCache: function() {
            var a =
                this._assertCacheInfo();
            return !!a.storage.getRawInstance().getItem(a.keyname)
        },
        loadStorageCache: function() {
            var a = this._assertCacheInfo(),
                b = a.storage.getRawInstance(),
                a = JSON.parse(b.getItem(a.keyname));
            this.set(a);
            _.isFunction(this.afterLoad) && this.afterLoad()
        },
        removeStorageCache: function() {
            var a = this._assertCacheInfo();
            a.storage.getRawInstance().removeItem(a.keyname)
        },
        loadOrFetch: function(a) {
            this.storageCache && this.hasStorageCache() ? this.loadStorageCache() : this.fetch(a)
        },
        getBaseAjaxParam: function() {
            var a =
                this;
            return {
                beforeSend: function(b) {
                    $(window).on("beforeunload", function() {
                        4 !== b.readyState && (Wood.log("[Ajax Warning] request cancelled by user operation. text=" + b.statusText + " url=" + a.url()), b.abort())
                    })
                },
                error: function(b, c) {
                    var e, d, k = c.responseText ? JSON.parse(c.responseText) : null;
                    if (k && k.error) {
                        e = k.error.code;
                        d = k.error.message;
                        for (var v = b.getIgnoreErrors(), l = v.length, H = 0; H < l; H++)
                            if (v[H] === e) return b.hasDeferred() && b.getDeferred().resolve(), !1
                    }
                    wood.client.handleAjaxError(c, a);
                    k && k.error && (a.set("error_code",
                        e), a.set("error_message", d));
                    _.isFunction(a.afterError) && a.afterError.call(a)
                }
            }
        },
        ignoreError: function(a) {
            this.ignore_errors || (this.ignore_errors = []);
            this.ignore_errors.push(a)
        },
        getIgnoreErrors: function() {
            return this.ignore_errors || []
        },
        getErrorPrefix: function() {
            var a = this.url().split("://")[1].split(/(\.|\-|cdn)/)[0];
            return "samurai" === a ? Wood.SystemConfig.PREFIX_SAMURAI : "ninja" === a ? Wood.SystemConfig.PREFIX_NINJA : null
        },
        fetchJSON: function(a) {
            a.data || (a.data = {});
            a.data._type = "json";
            if (this.hasDeferred()) {
                var b =
                    function(a, b) {
                        return _.isFunction(a) ? _.compose(b, a) : b
                    };
                a.success = b(a.success, this.getDeferred().resolve);
                a.error = b(a.error, this.getDeferred().reject);
                a.async = !0
            }
            b = function() {};
            if (this.canUseStore()) {
                var c = this.getCacheKey(a),
                    b = this.store.get(c);
                if (null !== b) {
                    this.set(this.parse(b, a));
                    this.hasDeferred() && this.getDeferred().resolve();
                    return
                }
                var e = this,
                    b = function(a) {
                        e.store.add(c, a)
                    }
            }
            Backbone.Model.prototype.fetch.call(this, a).done(b)
        },
        getPromise: function(a) {
            this.set({
                deferred: $.Deferred()
            });
            this.storageCache &&
                this.hasStorageCache() ? (this.loadStorageCache(), this.getDeferred().resolve()) : this.fetch(a);
            return this.getDeferred().promise()
        },
        getSafe: function(a) {
            var b = null;
            a = a.split(".");
            for (var c = a.length, e = 0; e < c; e++) {
                null === b && (b = this.attributes);
                if (Wood.Util.isUndefined(b[a[e]])) {
                    b = null;
                    break
                }
                b = b[a[e]]
            }
            return b
        },
        isError: function() {
            return Wood.Util.isDefined(this.getErrorCode())
        },
        getErrorCode: function() {
            return this.get("error_code")
        },
        getErrorMessage: function() {
            return this.get("error_message")
        },
        getDeferred: function() {
            return this.get("deferred")
        },
        hasDeferred: function() {
            return Wood.Util.isDefined(this.getDeferred())
        },
        getCacheKey: function(a) {
            return this.url() + "@" + JSON.stringify(a)
        },
        canUseStore: function() {
            return !!this.use_store
        }
    }, {
        DEFAULT_PARAM: {
            error_code: null,
            error_message: null,
            deferred: null
        },
        createGetters: function(a, b) {
            _.each(b, function(b, e) {
                a.prototype[e] = function() {
                    return this.getSafe(b)
                }
            })
        }
    })
})();
(function() {
    Wood.Model.MoneyType = Wood.Model.Base.extend({
        getAmount: function() {
            return this.get("amount")
        },
        getCurrency: function() {
            return this.get("currency")
        },
        getRawValue: function() {
            return this.get("raw_value")
        },
        isFree: function() {
            return 0 === parseFloat(this.getRawValue(), 10)
        }
    })
})();
(function() {
    Wood.Model.IdArray = Wood.Model.Base.extend({
        initialize: function() {
            this.ids = [];
            this.setup()
        },
        getIds: function() {
            return this.ids
        },
        loadIds: function(a) {
            var b = [];
            if (Wood.Util.isUndefined(a) || !a.length) return a;
            a.forEach(function(a) {
                a && a.id && b.push(a.id.toString())
            });
            this.ids = b
        },
        addId: function(a) {
            this.ids.push(a.toString())
        },
        removeId: function(a) {
            this.ids = this.ids.filter(function(b) {
                return b !== a.toString()
            })
        },
        contains: function(a) {
            var b = this.ids.length;
            if (0 === b) return !1;
            for (var c = 0; c < b; c++)
                if (this.ids[c] ===
                    a) return !0;
            return !1
        },
        isEmpty: function() {
            return 0 === this.ids.length
        },
        toCSV: function() {
            return this.ids.join(",")
        },
        loadCSV: function(a) {
            this.ids = a.split(",")
        }
    })
})();
(function() {
    Wood.Model.CountryInfo = Wood.Model.Base.extend({
        url: function() {
            return Wood.UrlPrefix.NINJA + "ws/country/" + this.country
        },
        fetch: function(a) {
            var b = this.getBaseAjaxParam();
            $.extend(b, {
                type: "GET",
                data: {
                    lang: this.lang
                },
                async: !1,
                xhrFields: {
                    withCredentials: !0
                }
            });
            $.extend(b, a);
            this.fetchJSON(b)
        },
        parse: function(a) {
            return a.country_detail
        },
        getISOCode: function() {
            return this.get("iso_code")
        },
        getName: function() {
            return this.get("name")
        },
        getDefaultLanguageCode: function() {
            return this.get("default_language_code")
        },
        isLanguageSelectable: function() {
            return this.get("language_selectable")
        },
        getMaxCacheSpec: function() {
            return this.get("max_cash")
        },
        isLoyaltySystemAvailable: function() {
            return this.get("loyalty_system_available")
        },
        isLegalPaymentMessageRequired: function() {
            return this.get("legal_payment_message_required")
        },
        isLegalBusinessMessageRequired: function() {
            return this.get("legal_business_message_required")
        },
        isTaxExcluded: function() {
            return this.get("tax_excluded_country")
        },
        isPrepaiedCardAvailable: function() {
            return this.get("prepaid_card_available")
        },
        isCreditCardAvailable: function() {
            return this.get("credit_card_available")
        },
        isNfcAvailable: function() {
            return this.get("nfc_available")
        },
        isCouponAvailable: function() {
            return this.get("coupon_available")
        },
        isMyCouponAvailable: function() {
            return this.get("my_coupon_available")
        },
        getTimeBasedRestrictions: function() {
            var a = this.get("time_based_restrictions");
            return Wood.Util.isUndefined(a) ? [] : a.time_based_restriction
        }
    })
})();
(function() {
    Wood.Model.Balance = Wood.Model.MoneyType.extend({
        url: function() {
            return Wood.UrlPrefix.NINJA + "ws/my/balance/current"
        },
        fetch: function(a) {
            var b = this.getBaseAjaxParam();
            $.extend(b, {
                type: "GET",
                data: {
                    lang: this.language
                },
                async: !1,
                xhrFields: {
                    withCredentials: !0
                }
            });
            $.extend(b, a);
            this.fetchJSON(b)
        },
        parse: function(a) {
            return a.balance
        }
    })
})();
(function() {
    Wood.Model.OrderList = Wood.Model.IdArray.extend({
        url: function() {
            return Wood.UrlPrefix.NINJA + "ws/my/owned_titles"
        },
        fetch: function(a) {
            var b = this.getBaseAjaxParam();
            $.extend(b, {
                type: "GET",
                async: !1,
                xhrFields: {
                    withCredentials: !0
                }
            });
            $.extend(b, a);
            this.fetchJSON(b)
        },
        parse: function(a) {
            a = a.owned_titles.owned_title;
            this.loadIds(a);
            return a
        }
    })
})();
(function() {
    function a(a) {
        return !!a
    }

    function b(a) {
        return parseInt(a, 10)
    }
    Wood.Model.DeviceOrderList = Wood.Model.Base.extend({
        initialize: function(c) {
            c = c || {};
            _.isString(c.title_ids) && _.isString(c.rvc_title_ids) ? (this.title_ids = c.title_ids.split(",").filter(a).map(b), this.rvc_title_ids = c.rvc_title_ids.split(",").filter(a).map(b)) : (this.title_ids = c.title_ids, this.rvc_title_ids = c.rvc_title_ids);
            this.setup()
        },
        url: function() {
            return Wood.UrlPrefix.NINJA + "ws/my/shared_title_ids"
        },
        fetch: function(a) {
            var b = this.getBaseAjaxParam();
            $.extend(b, {
                type: "GET",
                async: !1,
                xhrFields: {
                    withCredentials: !0
                }
            });
            $.extend(b, a);
            this.fetchJSON(b)
        },
        parse: function(a) {
            var b = this;
            b.title_ids = [];
            b.rvc_title_ids = [];
            a.owned_titles && a.owned_titles.owned_title && Wood.Util.each(a.owned_titles.owned_title, function(a, c) {
                b.title_ids.push(c.id)
            });
            a.owned_wii_titles && a.owned_wii_titles.owned_title && Wood.Util.each(a.owned_wii_titles.owned_title, function(a, c) {
                b.rvc_title_ids.push(c.id)
            });
            return a
        },
        contains: function(a) {
            for (var b = this.title_ids.concat(this.rvc_title_ids),
                    d = b.length, k = 0; k < d; k++)
                if (b[k] === a) return !0;
            return !1
        },
        getTitleIds: function() {
            return this.title_ids
        },
        getRVCTitleIds: function() {
            return this.rvc_title_ids
        },
        getAllIds: function() {
            return this.title_ids.concat(this.rvc_title_ids)
        },
        getTitleIdString: function() {
            return this.title_ids.join(",")
        },
        getRVCTitleIdString: function() {
            return this.rvc_title_ids.join(",")
        }
    })
})();
(function() {
    var a = {
        BOTH: "4,5",
        CAFE: "5",
        CTR: "4"
    };
    Wood.Model.WishList = Wood.Model.IdArray.extend({
        defaults: function() {
            return _.defaults({
                device: a.BOTH
            }, Wood.Model.IdArray.prototype.defaults())
        },
        storageCache: {
            keyname: "_wishlist_v2",
            storage: Wood.LocalStorage,
            flush_on_save: !0,
            autosave: !1
        },
        url: function() {
            return Wood.UrlPrefix.NINJA + "ws/my/wishlist"
        },
        fetch: function(a) {
            var c = this.getBaseAjaxParam(),
                e = {
                    sort: "registered",
                    "device[]": this.getDevice()
                };
            $.extend(c, {
                type: "GET",
                async: !1,
                data: e,
                xhrFields: {
                    withCredentials: !0
                }
            });
            $.extend(c, a);
            this.fetchJSON(c)
        },
        add: function(a) {
            var c = this.getBaseAjaxParam();
            $.extend(c, {
                url: this.url() + "/!put",
                type: "POST",
                async: !1,
                xhrFields: {
                    withCredentials: !0
                },
                data: {
                    id: a
                }
            });
            Backbone.Model.prototype.fetch.call(this, c);
            this.addId(a);
            return this.isError() && parseInt(this.getErrorPrefix() + this.getErrorCode(), 10) === Wood.ErrorCode.WISHLIST_FULL ? !1 : !0
        },
        remove: function(a) {
            var c = this.getBaseAjaxParam();
            $.extend(c, {
                url: this.url() + "/" + a + "/!delete",
                type: "POST",
                async: !1,
                xhrFields: {
                    withCredentials: !0
                }
            });
            $.ajax(c);
            var e = this;
            _.each(this.attributes, function(c, d) {
                c && a === c.id && delete e.attributes[d]
            });
            this.removeId(a);
            var d = this.attributes;
            Wood.Util.each(this.getAttributes(), function(c, e) {
                if (e.id === a) return delete d[c], !1
            });
            this.attributes = d
        },
        parse: function(a) {
            var c;
            a.wishlist && (c = a.wishlist.wished_title, this.loadIds(c));
            return c
        },
        afterLoad: function() {
            this.loadIds(_.values(this.attributes))
        },
        isFull: function() {
            return 200 <= this.getIds().length
        },
        getTitlesData: function() {
            var a = [];
            if (0 === this.ids.length) return a;
            var c = this.getAttributes();
            Wood.Util.each(c, function(c, d) {
                a.push(d)
            });
            return a
        },
        getDevice: function() {
            return this.attributes.device
        }
    }, {
        DeviceCode: a
    })
})();
(function() {
    Wood.Model.Dictionary = Wood.Model.Base.extend({
        url: function() {
            return Wood.UrlPrefix.SAMURAI + "ws/" + this.country + "/dictionary"
        },
        fetch: function(a) {
            var b = this.getBaseAjaxParam();
            $.extend(b, {
                type: "GET",
                data: {
                    lang: this.language
                },
                async: !0,
                xhrFields: {
                    withCredentials: !1
                }
            });
            $.extend(b, a);
            this.fetchJSON(b)
        },
        getItems: function() {
            return this.get("items")
        }
    })
})();
(function() {
    Wood.Model.LocalizedMessage = Wood.Model.Base.extend({
        url: function() {
            return "./message/messages-" + this.resource_key + ".xml"
        },
        initialize: function(a) {
            _.extend(this, a);
            this.fetched = !1;
            this.parsed = {};
            this.setup()
        },
        fetch: function(a) {
            var b = this.getBaseAjaxParam();
            $.extend(b, {
                url: this.url(),
                type: "GET",
                contentType: "application/xml",
                dataType: "xml",
                async: !1
            });
            $.extend(b, a);
            Backbone.Model.prototype.fetch.call(this, b)
        },
        parse: function(a) {
            var b = {};
            $(a).find("entry").each(function() {
                var a = $(this).attr("key"),
                    e = $(this).text();
                b[a] = e
            });
            this.fetched = !0;
            return this.parsed = b
        },
        getText: function(a) {
            this.fetched || this.fetch();
            var b = this.get(a);
            return !b ? (Wood.log("[warn] text not found for label: " + a), "") : b
        },
        toJSON: function() {
            return JSON.stringify(this.parsed)
        },
        loadJSON: function(a) {
            this.set(JSON.parse(a));
            this.fetched = !0
        }
    })
})();
(function() {
    Wood.Model.NinjaSession = Wood.Model.Base.extend({
        url: function() {
            return Wood.UrlPrefix.NINJA + "ws/my/session/!open"
        },
        fetch: function(a) {
            var b = this.getBaseAjaxParam();
            $.extend(b, {
                type: "POST",
                data: {
                    lang: this.language,
                    country: this.country,
                    ver: 1
                },
                async: !1,
                xhrFields: {
                    withCredentials: !0
                },
                headers: {
                    "X-Nintendo-ServiceToken": this.service_token
                }
            });
            $.extend(b, a);
            this.fetchJSON(b)
        },
        parse: function(a) {
            return a.session_config
        },
        getPrincipalId: function() {
            return this.get("pid")
        },
        getAccountId: function() {
            return this.get("account_id")
        },
        getCountry: function() {
            return this.get("country")
        },
        getSavedLanguage: function() {
            return this.get("saved_lang")
        },
        isShopAccountInitialized: function() {
            return this.get("shop_account_initialized")
        },
        getOwnedTitlesModified: function() {
            return this.get("owned_titles_modified")
        },
        getSharedTitlesModified: function() {
            return this.get("shared_titles_last_modified")
        },
        getOwnedWiiTitlesLastModified: function() {
            return this.get("owned_wii_titles_last_modified")
        },
        getWishlistLastModified: function() {
            return this.get("wishlist_last_modified")
        },
        getParentalControl: function() {
            return this.getSafe("parental_controls.parental_control")
        },
        getAge: function() {
            return this.get("age")
        },
        getId: function() {
            return this.get("id")
        },
        getMii: function() {
            return this.get("mii")
        },
        toJSON: function() {
            return JSON.stringify(this.getAttributes())
        },
        loadJSON: function(a) {
            return this.set(JSON.parse(a))
        }
    })
})();
(function() {
    Wood.Model.PseudoNinjaSession = Wood.Model.Base.extend({
        url: function() {
            return Wood.UrlPrefix.NINJA + "debug/my/session/!open"
        },
        initialize: function(a) {
            _.extend(this, a);
            this.opened = !1;
            this.setup()
        },
        fetch: function(a) {
            var b = this.getBaseAjaxParam();
            $.extend(b, {
                type: "POST",
                async: !1,
                data: {
                    lang: this.language,
                    country: this.country,
                    pid: this.pid
                },
                xhrFields: {
                    withCredentials: !0
                }
            });
            $.extend(b, a);
            this.fetchJSON(b)
        },
        parse: function(a) {
            a && a.session_config && (this.opened = !0);
            return a.session_config
        },
        isOpened: function() {
            return this.opened
        },
        getPrincipalId: function() {
            return this.get("pid")
        },
        getAccountId: function() {
            return this.get("account_id")
        },
        getCountry: function() {
            return this.get("country")
        },
        getSavedLanguage: function() {
            return this.get("saved_lang")
        },
        isShopAccountInitialized: function() {
            return this.get("shop_account_initialized")
        },
        getOwnedTitlesModified: function() {
            return this.get("owned_titles_modified")
        },
        getSharedTitlesModified: function() {
            return this.get("shared_titles_last_modified")
        },
        getOwnedWiiTitlesLastModified: function() {
            return this.get("owned_wii_titles_last_modified")
        },
        getAge: function() {
            return this.get("age")
        },
        getId: function() {
            return this.get("id")
        },
        toJSON: function() {
            return JSON.stringify(this.getAttributes())
        },
        loadJSON: function(a) {
            return this.set(JSON.parse(a))
        }
    })
})();
(function() {
    Wood.Model.DebugServiceToken = Wood.Model.Base.extend({
        url: function() {
            return Wood.UrlPrefix.NINJA + "debug/api/service_token"
        },
        initialize: function(a) {
            this.param = a;
            this.token = null;
            this.setup()
        },
        fetch: function(a) {
            var b = this.getBaseAjaxParam();
            $.extend(b, {
                type: "GET",
                data: this.param,
                dataType: "text",
                async: !1
            });
            $.extend(b, a);
            this.fetchJSON(b)
        },
        parse: function(a) {
            return this.token = a
        },
        getToken: function() {
            return this.token
        }
    })
})();
(function() {
    Wood.Model.TitlePublicStatus = Wood.Model.Base.extend({
        url: function() {
            return Wood.UrlPrefix.NINJA + "ws/" + this.country + "/title/public_status"
        },
        fetch: function(a) {
            var b = this.getBaseAjaxParam(),
                c = {},
                c = this.id.toString(),
                c = 0 === c.indexOf("0005") || 0 === c.indexOf("0004") ? {
                    title_id: c
                } : {
                    ns_uid: c
                };
            this.language && (c.lang = this.language);
            $.extend(b, {
                type: "GET",
                data: c,
                async: !1,
                xhrFields: {
                    withCredentials: !0
                }
            });
            $.extend(b, a);
            this.fetchJSON(b)
        },
        parse: function(a) {
            return a.title_public_status
        },
        getPublicStatus: function() {
            return this.get("public_status")
        },
        isPublic: function() {
            return "PUBLIC" === this.getPublicStatus()
        },
        isUnseachable: function() {
            return "UNSEARCHABLE" === this.getPublicStatus()
        },
        getType: function() {
            return this.get("type")
        },
        getNsUid: function() {
            return this.get("ns_uid")
        },
        getTitleId: function() {
            return this.get("title_id")
        }
    })
})();
(function() {
    Wood.Model.AocItemNsuid = Wood.Model.Base.extend({
        url: function() {
            return Wood.UrlPrefix.NINJA + "ws/" + this.country + "/aoc/" + this.item_code + "/ns_uid"
        },
        fetch: function(a) {
            var b = this.getBaseAjaxParam();
            $.extend(b, {
                type: "GET",
                async: !1,
                xhrFields: {
                    withCredentials: !0
                }
            });
            $.extend(b, a);
            this.fetchJSON(b)
        },
        parse: function(a) {
            return a.aoc
        },
        getNsuid: function() {
            return this.get("id")
        }
    })
})();
(function() {
    Wood.Model.VotableList = Wood.Model.Base.extend({
        LIMIT: 25,
        OFFSET: 0,
        PLAY_TIME: "60",
        is_upload_agreed: !1,
        has_votable_titles: !1,
        url: function() {
            return this.is_upload_agreed ? Wood.UrlPrefix.NINJA + "ws/my/votable_titles" : Wood.UrlPrefix.NINJA + "ws/my/instant_votable_titles"
        },
        fetch: function(a) {
            var b = this.getBaseAjaxParam(),
                c = this.getRequestData();
            a && _.isNumber(a.offset) && (c.offset = a.offset);
            $.extend(b, {
                type: "GET",
                async: !1,
                data: c,
                xhrFields: {
                    withCredentials: !0
                }
            });
            $.extend(b, a);
            this.fetchJSON(b)
        },
        put: function(a) {
            var b =
                this.getBaseAjaxParam();
            $.extend(b, {
                url: this.url() + "/!put",
                type: "POST",
                async: !1,
                xhrFields: {
                    withCredentials: !0
                }
            });
            $.extend(b, a);
            this.fetchJSON(b)
        },
        isUploadAgreed: function() {
            if (wood.client.isWiiU()) {
                var a = wiiuSystemSetting.getSpotPassUploadConsoleInfoState();
                wood.client.shutdownIfError(a);
                return a.enable
            }
            return !0
        },
        hasVotableTitles: function() {
            return wood.client.isWiiU() ? (this.data || this.setupData(), this.has_votable_titles) : !0
        },
        getRequestData: function() {
            this.data || this.setupData();
            return this.data
        },
        setupData: function() {
            this.limit =
                this.limit || this.LIMIT;
            var a = {
                lang: this.language,
                offset: this.offset || this.OFFSET,
                limit: this.limit
            };
            if (this.is_upload_agreed = this.isUploadAgreed()) wood.client.isWiiU() && this.updateCandidates();
            else {
                var b = [],
                    c = this.getCandidates();
                c && (c.IDs && 0 < c.IDs.length) && (this.has_votable_titles = !0, b = c.IDs);
                a["titleIds[]"] = b.join(",")
            }
            this.data = a
        },
        getCandidates: function() {
            return wiiuPDM.getTitlesFilteredByPlayTime(this.PLAY_TIME)
        },
        updateCandidates: function() {
            var a = this.getCandidates().IDs;
            0 < a.length ? (this.has_votable_titles = !0, a = a.join(","), this.put({
                data: {
                    "titleIds[]": a
                },
                success: function() {
                    Wood.log("SUCCESS :played titles saved!")
                }
            })) : this.has_votable_titles = !1
        },
        getContents: function() {
            return this.get("contents")
        },
        saveList: function(a) {
            var b = this,
                c = this.getRequestData(),
                e = function(b) {
                    wood.client.getSessionStorage().setItem(Wood.Client.StorageKey.VOTABLE_DATA, JSON.stringify(b));
                    a(b)
                };
            !this.has_votable_titles || !this.is_upload_agreed && "" === c["titleIds[]"] ? e({
                content: null
            }) : this.fetch({
                async: !0,
                cache: !1,
                success: function() {
                    e(b.getContents())
                }
            })
        },
        loadList: function() {
            var a = wood.client.getSessionStorage().getItem(Wood.Client.StorageKey.VOTABLE_DATA);
            return JSON.parse(a)
        },
        getTotal: function() {
            var a = this.attributes.contents;
            return a && a.total ? parseInt(this.attributes.contents.total, 10) : 0
        }
    })
})();
(function() {
    Wood.View.Base = Backbone.View.extend({
        initialize: function() {
            this.setup()
        },
        setup: function() {
            _.defaults(this, this.options);
            this.assignedViews = {}
        },
        presenter: function() {
            return null
        },
        render: function() {
            _.isFunction(this.template) && this.$el.html(this.template(this.presenter()));
            _.each(this.assignedViews, function(a, b) {
                a.setElement(this.$(b)).render()
            }, this);
            this.afterRender();
            return this
        },
        afterRender: function() {
            this.localizeText();
            this.hookSE()
        },
        assign: function(a, b) {
            this.assignedViews[a] = b
        },
        localizeText: Wood.DomUtil.localizeText,
        hookSE: function(a) {
            a = a || this.$el;
            Wood.DomUtil.hookSoundEffectEvent(a)
        },
        getRatingStarInfo: function(a) {
            var b = !1,
                c = null,
                e = null;
            if (a.star_rating_info) {
                var d = a.star_rating_info.score;
                d && (b = !0, c = (new Wood.StarRating(d)).getImagePath(), a.star_rating_info.votes && (e = a.star_rating_info.votes))
            }
            return {
                has_rating: b,
                rating_img_path: c,
                rating_votes: e
            }
        }
    })
})();
(function() {
    var a = {
            DEFAULT: 1,
            TOP: 2,
            MENU: 3,
            BALANCE: 4,
            SEARCH: 5,
            PURCHASE: 6,
            PURCHASED: 7,
            CLOSE: 8,
            AOC_SEARCH: 9
        },
        b = {
            DEFAULT: "x,y,+,-",
            TOP: "y,+,-,exit",
            MENU: "x,+,-",
            BALANCE: "x,y",
            SEARCH: "x,y,+",
            PURCHASE: "x",
            PURCHASED: "x,exit",
            CLOSE: "",
            AOC_SEARCH: "x"
        },
        c = {
            x: ["X", "#top_link_01 > div"],
            y: ["Y", "#top_link_02:not(.off):not(.on) > div"],
            "+": ["PLUS", "#top_link_03 > div"],
            "-": ["MINUS", "#top_link_04 > div"],
            exit: ["A", "#top_link_06 > div"]
        },
        e = _.throttle(function(a, b, c) {
            return a.apply(c, b)
        }, 1E3, {
            trailing: !1
        });
    Wood.View.MenuBar =
        Backbone.View.extend({
            initialize: function() {
                this.$body = $("body");
                this.$el = this.options.$wrap.find("#sel_menu_bar");
                this.$window = $(window);
                this.initial_back_event = this.initial_type = this.top_event = this.mymenu_event = this.close_event = this.back_event = this.type = null
            },
            setup: function(a) {
                this.resetAllButtonEvent();
                this.render(a);
                var b = wood.client.getNinjaSession();
                (b = b ? b.getMii() : null) && b.icon_url && this.$("#top_link_02 img").attr("src", b.icon_url);
                this.setTouchEvents();
                this.setButtonEvents(a);
                Wood.DomUtil.hookLabelSoundEffectEvent(this.$el);
                wood.client.storeBalance();
                this.$("#balance").text(wood.client.getSessionStorage().getItem(Wood.Client.StorageKey.BALANCE_AMOUNT));
                b = this.$("#ft_navi .menu span");
                wood.client.hasUnReadOwnedCoupon() ? b.addClass("attention-mark") : b.removeClass("attention-mark");
                this.type = a;
                return this
            },
            template: _.template('{{ if (type === TYPE.CLOSE) { }}<ul id="ft_navi_popup"><li id="top_link_07" class="close"><div data-href="">{{= t7 }}</div></li></ul>{{ } else { }}<ul id="ft_navi"><li id="top_link_01"{{ if (type === TYPE.TOP) { }} class="top on"><div>{{ } else { }} class="top"><div data-href="{{= top_link }}" class="se" data-se-label="SE_WAVE_OK_SUB">{{ } }}<span>{{= t1 }}</span></div></li><li id="top_link_02"{{ if (type === TYPE.MENU) { }} class="menu on"><div>{{ } else if (_.contains([TYPE.BALANCE, TYPE.PURCHASE, TYPE.PURCHASED, TYPE.AOC_SEARCH], type)) { }} class="menu off"><div>{{ } else { }} class="menu"><div data-href="">{{ } }}<img src="image/img_unknown_MiiIcon.png" width="70" height="70"/><br/><span>{{= t2 }}</span></div></li><li id="top_link_03"{{ if (type === TYPE.BALANCE) { }} class="balance on"><div>{{ } else if (_.contains([TYPE.PURCHASE, TYPE.PURCHASED, TYPE.AOC_SEARCH], type)) { }} class="balance off"><div>{{ } else { }} class="balance"><div data-href="money01_01.html" class="se" data-se-label="SE_WAVE_OK_SUB">{{ } }}<span>{{= t3 }}</span><span id="balance"></span></div></li><li id="top_link_04"{{ if (type === TYPE.SEARCH) { }} class="search on"><div>{{ } else if (_.contains([TYPE.PURCHASE, TYPE.PURCHASED, TYPE.AOC_SEARCH, TYPE.BALANCE], type)) { }} class="search off"><div>{{ } else { }} class="search"><div data-href="always02_01.html" class="se" data-se-label="SE_WAVE_OK_SUB">{{ } }}<span>{{= t4 }}</span></div></li>{{ if (_.contains([TYPE.TOP, TYPE.PURCHASED], type)) { }}<li id="top_link_06" class="exit"><div data-href=""><span>{{= t6 }}</span></div></li>{{ } else { }}<li id="top_link_05" class="back"><div data-href=""><span>{{= t5 }}</span></div></li>{{ } }}</ul>{{ } }}'),
            isIndex: function() {
                return !!$(".js-top").length
            },
            render: function(b) {
                var c = this.top_link = this.isIndex() ? "#top" : "./#top";
                this.$el.html(this.template({
                    TYPE: a,
                    type: b,
                    top_link: c,
                    t1: wood.client.getText("common01_01_038"),
                    t2: wood.client.getText("common01_01_002"),
                    t3: wood.client.getText("common01_01_020"),
                    t4: wood.client.getText("common01_01_003"),
                    t5: wood.client.getText("common01_01_001"),
                    t6: wood.client.getText("common01_01_010"),
                    t7: wood.client.getText("common01_01_008")
                }))
            },
            setTouchEvents: function() {
                var a =
                    this.$el.find("[data-href]"),
                    b = this,
                    c = "#top" === location.hash;
                a.each(function(a, d) {
                    var z = $(d),
                        P = z.parent();
                    z.on("click", function(a) {
                        a.preventDefault();
                        !P.hasClass("back") && (!P.hasClass("menu") && !P.hasClass("close")) && e(function() {
                            P.addClass("on");
                            if (!P.hasClass("top") || !_.isFunction(b.top_event) || b.top_event()) {
                                var a = z.data("href");
                                a && _.delay(function() {
                                    b.isIndex() && (!c && a === b.top_link) && b.fixScrollTemporary();
                                    location.href = a
                                }, 30)
                            }
                        })
                    }).on("touchstart", function() {
                        P.addClass("on");
                        wood.client.playSound("SE_WAVE_HWKEY_MENU_TRG")
                    }).on("touchend",
                        function() {
                            P.removeClass("on")
                        })
                })
            },
            setButtonEvents: function(c) {
                var e = this;
                c = _.invert(a)[c];
                if (c = b[c]) c = c.split(","), _.each(c, function(a) {
                    e.hookButtonEvent(a)
                })
            },
            hookButtonEvent: function(a) {
                var b = c[a],
                    e = b[0],
                    l = this.$(b[1]);
                if ("exit" === a) b = function(a) {
                    wood.client.playSound("SE_WAVE_EXIT");
                    wood.client.isWiiU() && (a.preventDefault(), wood.client.shutdown())
                }, l.on("keydown", Wood.KeyEvent[e](b)).on("click", b);
                else {
                    var H = this,
                        z = this.initial_type === Wood.View.MenuBar.Type.TOP;
                    this.$body.on("keydown", Wood.KeyEvent[e](function() {
                        wood.client.playSound("SE_WAVE_HWKEY_MENU_TRG");
                        if (!("x" === a && _.isFunction(H.top_event)) || H.top_event())
                            if (z && "x" === a) wood.client.playSound("SE_WAVE_OK_SUB"), l.parent().addClass("on"), _.delay(function() {
                                H.back_event()
                            }, 30);
                            else {
                                var b = l.data("href");
                                b ? (b === H.top_link && H.fixScrollTemporary(), l.parent().addClass("on"), wood.client.playSound("SE_WAVE_OK_SUB"), _.defer(function() {
                                    wood.client.redirectTo(b)
                                })) : l.trigger("click")
                            }
                    }))
                }
            },
            unhookButtonEvent: function() {
                this.$body.off("keydown")
            },
            fixScrollTemporary: function() {
                this.options.$wrap.css({
                    position: "fixed",
                    top: "-" + this.$window.scrollTop() + "px"
                });
                var a = _.bind(this.allowScroll, this);
                _.delay(a, 1E3)
            },
            allowScroll: function() {
                this.options.$wrap.css({
                    position: "static",
                    top: 0
                })
            },
            triggerBack: function() {
                this.trigger("back", {
                    scroll_top: this.$window.scrollTop()
                })
            },
            removeClassBackButton: function() {
                this.$("#top_link_05, #top_link_07").removeClass("on")
            },
            hookBackEvent: function(a) {
                var b = this,
                    v = function(c) {
                        c.preventDefault();
                        wood.client.playSound("SE_WAVE_HWKEY_MENU_TRG");
                        wood.client.playSound("SE_WAVE_BACK");
                        var e = b.$("#top_link_05, #top_link_07").addClass("on");
                        _.delay(function() {
                            b.fixScrollTemporary();
                            b.triggerBack();
                            !1 === a() && e.removeClass("on")
                        }, 30)
                    };
                this.$body.on("keydown", Wood.KeyEvent.B(function(a) {
                    e(v, [a])
                }));
                this.$("#top_link_05 > div").on("click", function(c) {
                    c.preventDefault();
                    e(function() {
                        wood.client.playSound("SE_WAVE_BACK");
                        b.fixScrollTemporary();
                        b.triggerBack();
                        a()
                    })
                });
                this.$("#top_link_07 > div").on("click", function(b) {
                    b.preventDefault();
                    e(function() {
                        wood.client.playSound("SE_WAVE_BACK");
                        a()
                    })
                });
                if (this.initial_type === Wood.View.MenuBar.Type.TOP) this.$(c.x[1]).on("click",
                    function(b) {
                        b.preventDefault();
                        a()
                    });
                this.back_event = a;
                this.close_event = null
            },
            hookCloseEvent: function(a) {
                var b = this,
                    c = function(c) {
                        c.preventDefault();
                        wood.client.playSound("SE_WAVE_HWKEY_MENU_TRG");
                        wood.client.playSound("SE_WAVE_CANCEL");
                        b.$("#top_link_07").addClass("on");
                        _.delay(function() {
                            a()
                        }, 30)
                    };
                this.$body.on("keydown", Wood.KeyEvent.B(function(a) {
                    e(c, [a])
                }));
                this.$("#top_link_07 > div").on("click", function(b) {
                    b.preventDefault();
                    e(function() {
                        wood.client.playSound("SE_WAVE_CANCEL");
                        a()
                    })
                });
                this.close_event =
                    a;
                this.back_event = null
            },
            hookMymenuEvent: function(a) {
                var b = this.$(c.y[1]);
                b.on("click", function(c) {
                    c.preventDefault();
                    e(function() {
                        b.parent().addClass("on");
                        wood.client.playSound("SE_WAVE_OK_SUB");
                        _.delay(a, 30)
                    })
                });
                this.mymenu_event = a
            },
            hookTopEvent: function(a) {
                this.top_event = a
            },
            resetAllButtonEvent: function() {
                this.$body.off("keydown")
            },
            saveInitialState: function() {
                this.initial_type || (this.initial_type = this.type, this.initial_back_event = this.back_event)
            },
            selectMenu: function(a) {
                this.saveInitialState();
                this.type = Wood.View.MenuBar.Type.MENU;
                this.hookBackEvent(a);
                this.rebuild();
                this.$(c.y[1]).off()
            },
            rebuild: function() {
                this.setup(this.type);
                this.back_event && this.hookBackEvent(this.back_event);
                this.close_event && this.hookCloseEvent(this.close_event);
                this.mymenu_event && this.hookMymenuEvent(this.mymenu_event)
            },
            revert: function() {
                this.type = this.initial_type;
                this.hookBackEvent(this.initial_back_event);
                this.rebuild()
            }
        });
    Wood.View.MenuBar.Type = a
})();
(function() {
    Wood.View.Common.Pagination = Wood.View.Base.extend({
        per_page: 25,
        store_history: !0,
        events: {
            "click .evt_pager_num": "onClickPageNumber",
            "click .evt_pager_next, .evt_pager_prev": "onClickNext",
            "click a": "onClickAnchor"
        },
        initialize: function() {
            this.template = Wood.Template.get("common", "#pagination");
            this.setup();
            this.pagenation = new Wood.Pagenation(1, this.per_page, 1)
        },
        setTotalCount: function(a) {
            this.pagenation.setTotalCount(a)
        },
        presenter: function() {
            var a = this.pagenation,
                b = a.getCurrentPage(),
                c = a.getNaviPages();
            return {
                pages: _.map(c, function(a) {
                    return {
                        page: a,
                        is_self: a === b
                    }
                }),
                total_page: a.getTotalPage(),
                current_page: b,
                prev_page: a.getPrevPage(),
                next_page: a.getNextPage()
            }
        },
        onClickPageNumber: function(a) {
            $(".pagenation li[class=current]").removeClass("current").addClass("page");
            $(a.currentTarget).parent().removeClass("page").addClass("current")
        },
        onClickNext: function(a) {
            $(a.currentTarget).parent().removeClass("on").addClass("selected")
        },
        onClickAnchor: function(a) {
            this.store_history || (a.preventDefault(), wood.client.redirectReplaceTo(a.currentTarget.href))
        }
    })
})();
(function() {
    Wood.View.Common.PushToWishlist = Wood.View.Base.extend({
        className: "el-wish",
        options: {
            short_label: !1,
            selector_add: "#str_wishlist",
            selector_add_short: "#str_wishlist_short",
            selector_done: "#str_wishlist_done"
        },
        initialize: function() {
            this.template = Wood.Template.get("common", "#template_wishlist");
            var a = this.options;
            a.controller && a.controller.$wrap && (this.$el = a.controller.$wrap.find("." + this.className));
            this.is_single = _.isString(a.ns_uid);
            this.ids = a.ns_uid;
            this.text_add = $(a.short_label ? a.selector_add_short :
                a.selector_add).html();
            this.text_done = $(a.selector_done).html();
            this.render()
        },
        render: function() {
            var a = this;
            this.$el.children().remove();
            var b = new Wood.Model.WishList;
            b.loadOrFetch();
            if (a.is_single) {
                var c = b.contains(a.ids);
                a.appendTemplate(a.ids, c)
            } else _.each(a.ids, function(c) {
                var d = b.contains(c.toString());
                a.appendTemplate(c, d)
            });
            a.$el.find("a").on("click", function(b) {
                a.eventRegister(b, a)
            });
            return this
        },
        appendTemplate: function(a, b) {
            (this.is_single ? this.$el : $("#el-wish-" + a)).append(this.template({
                is_registered: b,
                str_wishlist: this.text_add,
                str_wishlist_done: this.text_done,
                data_title_id: a
            }))
        },
        confirmListOverflow: function() {
            var a = wood.client.confirm($("#dialog_msg_wish").text(), $("#dialog_later").text(), $("#dialog_watch").text());
            a && wood.client.redirectTo("wish01_01.html");
            return a
        },
        eventRegister: function(a, b) {
            a.preventDefault();
            var c = $(a.currentTarget);
            wood.client.playSound("SE_WAVE_CHECKBUTTON_CHECK");
            wood.client.disableUserOperation(!0);
            var e = new Wood.Model.WishList;
            e.fetch();
            if (e.isFull()) e.saveStorageCache(),
                this.confirmListOverflow(), wood.client.enableUserOperation();
            else {
                wood.client.disableHomeButton(!0);
                var d = c.data("title-id");
                e.add(d) ? (e.fetch(), e.saveStorageCache(), wood.client.enableUserOperation(!0), wood.client.enableHomeButton(!0), c.remove(), b.appendTemplate(d, !0), wood.client.playSound("SE_WAVE_OK"), Wood.log("RegisterWishList: status success")) : (this.confirmListOverflow(), wood.client.enableUserOperation(), wood.client.enableHomeButton())
            }
        }
    })
})();
(function() {
    Wood.View.Mymenu = Wood.View.Base.extend({
        id: "mymenu",
        max_icons: 5,
        initialize: function() {
            this.template = Wood.Template.get("mymenu", "#main");
            this.setup()
        },
        presenter: function() {
            var a = wood.client.getNinjaSession();
            return {
                data: {
                    mii: a ? a.getMii() || {} : {},
                    wish: this.getWishList(),
                    is_address_available: wood.client.isAddressAvailable(),
                    is_lang_selectable: wood.client.ls.isLangSelectable(),
                    is_owned_coupon_available: wood.client.isMyCouponAvailable(),
                    is_club_available: wood.client.isLoyaltySystemAvailable()
                }
            }
        },
        afterRender: function() {
            Wood.DomUtil.lazyload(this.$(".wishlist li img"));
            this.localizeText();
            this.hookSE();
            this.hookEvent();
            this.getVotableList();
            this.renderOwnedCoupon();
            this.$balance = this.$(".amount").text(wood.client.getBalanceAmount())
        },
        getWishList: function() {
            var a = this,
                b = this.options.controller,
                c = b.parseParam(),
                e = new Wood.Model.WishList;
            e.loadOrFetch();
            if (e.isEmpty()) return Wood.log("mymenu:getWishList: empty"), null;
            var d = [];
            _.some(e.getAttributes(), function(e) {
                var v = e.id;
                if (!v) return !1;
                var l =
                    e.platform.id;
                if (_.contains(Wood.SystemConfig.getExclusionPlatformIds(), l)) return !1;
                e = e.icon_url;
                /^title\?/.test(Backbone.history.fragment) && v.toString() === c.title ? l = "#closeMymenu" : (l = ($(".js-top").length ? "" : "./") + "#title", l = new Wood.URL(l, {
                    title: v
                }), b.appendDirectlinkBeaconParam(l, "mymenu", "wish01"), l = l.toString());
                if (d.length >= a.max_icons) return !0;
                d.push({
                    id: v,
                    icon: e,
                    url: l
                })
            });
            return d
        },
        hookEvent: function() {
            var a = this;
            if (!this.options.controller.isMymenuOpen) this.$("a:not(#evt_show_all, #js-help)").on("click",
                function(a) {
                    a.preventDefault();
                    wood.client.redirectTo($(a.currentTarget).attr("href"))
                });
            this.$("#evt_show_all").on("click", function(b) {
                b.preventDefault();
                $(this).hide();
                a.$(".setting > ul").show()
            });
            this.$(".help a").on("click", function(b) {
                b.preventDefault();
                a.openHelp()
            });
            this.$(".wishlist a[href=#closeMymenu]").on("click", function(b) {
                b.preventDefault();
                a.options.controller.closeMymenu()
            })
        },
        getVotableList: function() {
            var a = this,
                b = new Wood.Model.VotableList({
                    language: wood.client.language,
                    limit: this.max_icons
                });
            if (b.isUploadAgreed()) {
                var c = b.loadList();
                c ? this.renderVotableList(c.content) : b.saveList(function(b) {
                    a.renderVotableList(b.content)
                })
            } else this.renderVotableList(null)
        },
        renderOwnedCoupon: function() {
            var a = this.$(".show-owned-coupon-list");
            wood.client.hasUnReadOwnedCoupon() ? a.addClass("attention-mark") : a.removeClass("attention-mark")
        },
        renderVotableList: function(a) {
            a = new Wood.View.Mymenu.VotableList({
                list: a,
                controller: this.options.controller
            });
            this.$(".recommend").empty().append(a.render().$el.children())
        },
        openHelp: function() {
            var a = this;
            this.$el.hide();
            this.help ? this.help.$el.show() : (this.help = new Wood.View.Mymenu.Help, this.$el.parent().append(this.help.render().el));
            var b = a.options.controller.menuBar;
            b.setup(Wood.View.MenuBar.Type.CLOSE);
            b.hookCloseEvent(function() {
                a.closeHelp();
                a.sendMymenuBeacon()
            });
            this.sendHelpBeacon()
        },
        closeHelp: function() {
            var a = this;
            this.help.$el.hide();
            this.$el.show();
            var b = this.options.controller.menuBar;
            b.setup(Wood.View.MenuBar.Type.MENU);
            b.hookBackEvent(function() {
                a.options.controller.isMymenuOpen ?
                    a.options.controller.closeMymenu() : wood.client.historyBack()
            })
        },
        reset: function() {
            this.help && "block" === this.help.$el.css("display") && this.closeHelp();
            this.$el.off()
        },
        reopen: function() {
            this.$el.off();
            this.render();
            this.$el.show()
        },
        sendHelpBeacon: function() {},
        sendMymenuBeacon: function() {}
    })
})();
(function() {
    Wood.View.Mymenu.VotableList = Wood.View.Base.extend({
        max_icons: 5,
        initialize: function() {
            this.template = Wood.Template.get("mymenu", "#recommend");
            this.setup()
        },
        presenter: function() {
            var a = this.list,
                b = this.controller;
            _.each(a, function(a) {
                var e = new Wood.URL("reco01_02.html", {
                    title: a.title.id
                });
                b.appendDirectlinkBeaconParam(e, "mymenu", "reco01");
                a.url = e.toString()
            });
            return {
                data: {
                    votable: a
                }
            }
        },
        afterRender: function() {
            Wood.DomUtil.lazyload(this.$("li img"));
            this.localizeText();
            this.hookSE();
            this.hookEvent()
        },
        hookEvent: function() {
            this.$("li a").on("click", function(a) {
                a.preventDefault();
                a = $(this);
                var b = parseInt(a.data("age"), 10);
                wood.client.getAge() < b && "USA" !== wood.client.getRegion() ? wood.client.alert($("#mymenu_msg_age").text(), $("#mymenu_msg_ok").text()) : wood.client.redirectTo(a.attr("href"))
            })
        }
    })
})();
(function() {
    Wood.View.Mymenu.Help = Wood.View.Base.extend({
        initialize: function() {
            this.template = Wood.Template.get("mymenu", "#help");
            this.setup()
        },
        presenter: function() {
            return {
                is_inquiry_available: wood.client.isInquiryAvailable()
            }
        }
    })
})();
(function() {
    Wood.Modules.Controller.Base.Boot = function() {};
    Wood.Modules.Controller.Base.Boot.prototype = {
        handleBoot: function(a, b) {
            a && !a.isInBoot() ? this.lightBoot(a, b) : (this._prepareClient(), a = wood.client, this.boot(a, b))
        },
        boot: function(a, b) {
            var c = [a, b],
                e = a.getUserAgent();
            Wood.log("<boot> : getUserAgent = " + e.toString());
            if (a.isWiiU() && (!e.isWood() || !e.isLatestVersionOrLater())) a.showError(Wood.ErrorCode.CLOSE_APPLICATION), a.shutdown();
            a.isInBoot() || (Wood.log("<boot> : setBGM"), this.setBGM(a));
            $.ajaxSetup({
                timeout: 55E3
            });
            a.verifyIVSSent();
            Wood.DomUtil.hookSoundEffectEvent($("body"));
            a.storeBalance();
            $('<div style="display:none;"><span id="dialog_msg_invalid_session" data-message="error01_01"></span></div>').appendTo("body");
            a.prepareLocalizedText();
            this.localizeText();
            this.$wrap.show();
            this.storeUserData(a.isInBoot(), b.isAppJump());
            this.setDictionary();
            a.enableUserOperation(!0);
            a.isInBoot() ? a.endStartUpWithBGM() : a.endStartUp();
            this.setPageShowEvent(this, c)
        },
        setPageShowEvent: function(a, b) {
            var c = b[0];
            $(window).on("pageshow",
                function(e) {
                    c.isWiiU() && (window.wiiu.videoplayer.end(), wiiuBrowser.lockPowerButton(!1));
                    a.setBGM(c);
                    a.callOnPageShow(a, b);
                    e.originalEvent && e.originalEvent.persisted && (Wood.log("[pageshow] from back"), c.enableUserOperation(!0), c.enableHomeButton(!0), a.callOnPageShowCache(a, b))
                })
        },
        callOnPageShow: function(a, b) {
            _.isFunction(a.onPageShow) && a.onPageShow.apply(a, b)
        },
        callOnPageShowCache: function(a, b) {
            _.isFunction(a.onPageShowCacheDynamic) ? a.onPageShowCacheDynamic.apply(a, b) : (a.rebuildMenuBar(), a.mymenu &&
                (a.mymenu.reset(), a.mymenu.render()), _.isFunction(a.onPageShowCache) && a.onPageShowCache.apply(a, b))
        },
        lightBoot: function(a) {
            Wood.DomUtil.hookSoundEffectEvent($("body"));
            a.prepareLocalizedText();
            this.localizeText()
        }
    }
})();
(function() {
    Wood.Modules.Controller.Base.Beacon = function() {};
    Wood.Modules.Controller.Base.Beacon.prototype = {
        appendBeaconParam: function(a, b) {
            a.addQuery({
                beacon: JSON.stringify(b)
            })
        },
        getBeaconParam: function(a) {
            var b = this.parseParam().beacon;
            return b ? (b = b.replace(/^(.*)#([^}]*?)$/, "$1"), JSON.parse(b)[a]) : null
        },
        appendDirectoryBeaconParam: function(a, b, c, e, d) {
            this.appendBeaconParam(a, {
                directory: {
                    id: b,
                    index: c,
                    alias: e,
                    name: d
                }
            })
        },
        getDirectoryBeaconParam: function() {
            return this.getBeaconParam("directory")
        },
        appendDirectlinkBeaconParam: function(a,
            b, c) {
            this.appendBeaconParam(a, {
                directlink: {
                    scene: b,
                    from: c
                }
            })
        },
        getDirectlinkBeaconParam: function() {
            return this.getBeaconParam("directlink")
        }
    }
})();
(function() {
    Wood.Modules.Controller.Base.Client = function() {};
    Wood.Modules.Controller.Base.Client.prototype = {
        setCache: function(a) {
            this.cache = a
        },
        _prepareClient: function() {
            if (!wood.client || !wood.client.isWiiU) wood.client = new Wood.Client;
            wood.client.loadSystemSetting();
            var a = null;
            this.cache && (this.cache.country === wood.client.country && this.cache.language === wood.client.language) && (Wood.log("<_prepareClient> country cache hit"), a = this.cache.country_info);
            wood.client.storeCountryInfo(a);
            wood.client.updateUserSession()
        },
        setBGM: function(a) {
            switch (this.BGM || "main") {
                case "main":
                    a.playSound("BGM_WAVE_MAIN", 3);
                    break;
                case "setting":
                    a.playSound("BGM_WAVE_SETTING", 3);
                    break;
                case "boot":
                    a.playSound("BGM_WAVE_BOOT_0", 3);
                    break;
                default:
                    a.playSound("BGM_WAVE_MAIN", 3)
            }
        }
    }
})();
(function() {
    Wood.Modules.Controller.Base.Dictionary = function() {};
    Wood.Modules.Controller.Base.Dictionary.prototype = {
        setDictionary: function() {
            if (wood.client.isWiiU() && !wiiuKeyboard.setUserDictionary) Wood.log("setUserDictionary not supported");
            else if (wood.client.isDictionarySet()) Wood.log("user dictionary already set");
            else {
                var a = new Wood.Model.Dictionary({
                    country: wood.client.country,
                    language: wood.client.language
                });
                a.bind("change", function() {
                    if (wood.client.isWiiU()) {
                        var b = wiiuKeyboard.setUserDictionary(JSON.stringify({
                            items: a.getItems()
                        }));
                        b && !b.error ? Wood.log("fetch and store user dictionary") : Wood.log("setUserDictionary failed:" + b.error.code)
                    } else Wood.log("(PC) set dictionary flag true");
                    wood.client.setDictionaryFlag()
                }, a);
                a.fetch()
            }
        }
    }
})();
(function() {
    Wood.Modules.Controller.Base.UserData = function() {};
    Wood.Modules.Controller.Base.UserData.prototype = {
        storeUserData: function(a, b) {
            var c = !1;
            if (Wood.Util.isUndefined(wood.client.getDeviceOrderList())) {
                Wood.log("storeUserData: try to update DeviceOrderList...");
                var e = new Wood.Model.DeviceOrderList;
                e.fetch({
                    async: !b,
                    success: function() {
                        a ? setTimeout(function() {
                            wood.client.updateDeviceOrderList(e);
                            Wood.log("storeUserData: DeviceOrderList updated (delayed)")
                        }, 4E3) : (wood.client.updateDeviceOrderList(e),
                            Wood.log("storeUserData: DeviceOrderList updated"))
                    }
                })
            }
            var d = new Wood.Model.WishList;
            d.hasStorageCache() || (Wood.log("storeUserData: update WishList"), d.fetch(), d.saveStorageCache(), c = !0);
            wood.client.ls.hasLangSelectable() || (Wood.log("storeUserData: update LangSelectable"), c = new Wood.Model.CountryInfo({
                country: wood.client.country,
                language: wood.client.language
            }), c.fetch(), wood.client.ls.setLangSelectable(c.isLanguageSelectable()), c = !0);
            c && wood.client.isWiiU() && wood.client.criticalAction(function() {
                wood.client.getLocalStorage().write()
            })
        }
    }
})();
(function() {
    Wood.Modules.Controller.Base.MenuBar = function() {};
    Wood.Modules.Controller.Base.MenuBar.prototype = {
        setupMenu: function(a) {
            var b = this;
            this.menuBar = new Wood.View.MenuBar({
                $wrap: this.$wrap
            });
            this.menuBar.setup(a);
            this.menuBar.hookMymenuEvent(function() {
                b.openMymenu()
            })
        },
        rebuildMenuBar: function() {
            this.menuBar && this.menuBar.rebuild()
        },
        showMenuBar: function() {
            this.menuBar && this.menuBar.$el.show()
        },
        hideMenuBar: function() {
            this.menuBar && this.menuBar.$el.hide()
        }
    }
})();
(function() {
    Wood.Modules.Controller.Base.Mymenu = function() {};
    Wood.Modules.Controller.Base.Mymenu.prototype = {
        openMymenu: function() {
            var a = this,
                b = $("#wrap, #wrapper").filter(":visible");
            if (this.isMymenuOpen) {
                if (b.find("#mymenu").length) return
            } else this.last_scroll = this.$body.scrollTop(), this.isMymenuOpen = !0;
            "main" !== this.BGM && wood.client.playSound("BGM_WAVE_MAIN", 3);
            this.$content = b.find("#sb_cont");
            this.$content.length || (this.$content = b.children().first());
            this.$content.hide();
            this.mymenu = this.renderView(Wood.View.Mymenu);
            b.append(this.mymenu.render().el);
            Wood.DomUtil.animateToTop();
            this.menuBar.selectMenu(function() {
                a.closeMymenu()
            })
        },
        closeMymenu: function() {
            this.isMymenuOpen = !1;
            if (this.mymenu) "main" !== this.BGM && this.setBGM(wood.client), this.$content.show(), this.mymenu.$el.hide(), this.mymenu.remove(), this.menuBar.revert(), this.menuBar.allowScroll(), Wood.DomUtil.animateToTop(this.last_scroll);
            else {
                var a = this.$body.find("#mymenu");
                a.length && a.remove()
            }
        }
    }
})();
(function() {
    Wood.Modules.Controller.Base.Limit = function() {};
    Wood.Modules.Controller.Base.Limit.prototype = {
        limitAge: function(a, b) {
            if (a.hasRating() && !a.getRating(a.getRatingSystemId(), a.getRatingAge()).isDisplayAllowed(b, wood.client.getRegion(), wood.client.getAge())) throw wood.client.alert($("#dialog_msg_age").text(), $("#dialog_msg_ok").text()), wood.client.historyBack(), Error("limitAge redirect stopper");
        },
        limitParentalControl: function(a) {
            if (a.hasRating() && wood.client.isLockedForGamePlay(a.getRatingAge())) throw a =
                $.url(), wood.client.redirectReplaceTo("legal01_01.html?seq=" + encodeURIComponent(a.attr("file") + "?" + a.attr("query")) + "#gameplay"), Error("limitParentalControl redirect stopper");
        }
    }
})();
(function() {
    Wood.Modules.Controller.Base.Util = function() {};
    Wood.Modules.Controller.Base.Util.prototype = {
        parseParam: Wood.Request.prototype.parseParam,
        createAppJumpBackEvent: function(a, b) {
            var c = b.isAppJump();
            return function() {
                c ? a.redirectTo("data01_03.html", {
                    cancel: "historyback"
                }) : a.historyBack()
            }
        },
        updateRedeemNumSession: function(a, b) {
            var c = b.param("redeem_num"),
                e = b.param("redeem_title_id");
            c && e && a.setRedeemNumber(e, c)
        },
        reload: function() {
            location.reload()
        },
        reloadWithoutHash: function() {
            location.href =
                location.pathname + location.search
        }
    }
})();
(function() {
    Wood.Controller.ROUTES = {
        "": "runRoot"
    };
    Wood.Controller.Base = Backbone.Router.extend({
        routes: $.extend({}, Wood.Controller.ROUTES),
        models: {},
        called_runroot: !1,
        initialize: function() {
            var a = this;
            _.each(Wood.Controller.Base.Modules, function(c) {
                c.call(a)
            });
            this.$body = $("body");
            this.$wrap = $("#wrap, #wrapper")
        },
        runRoot: function() {
            this.called_runroot = !0;
            var a = wood.client,
                c = this.getRequest(),
                a = [a, c];
            this.handleBoot.apply(this, a);
            a = wood.client;
            a = [a, c];
            _.isFunction(this.preparePage) && this.preparePage.apply(this,
                a);
            _.isFunction(this.run) && this.run.apply(this, a);
            _.isFunction(this.afterRun) && this.afterRun.apply(this, a)
        },
        showPage: function() {
            this.$wrap.show();
            this.$body.removeClass("display_cover")
        },
        renderView: function(a, c) {
            var e = this.generateView(a, $.extend({
                controller: this
            }, c));
            Wood.DomUtil.hookSoundEffectEvent($(e.el));
            return e
        },
        localizeText: function() {
            $("[data-message]").each(function() {
                var a = $(this);
                a.html(wood.client.getText(a.attr("data-message")))
            })
        },
        generateModel: function(a, c) {
            return this.generateObject(Wood.Model,
                a, c)
        },
        generateView: function(a, c) {
            return _.isFunction(a) ? new a(c) : this.generateObject(Wood.View, a.toString(), c)
        },
        generateObject: function(a, c, e) {
            var d = a;
            _.each(c.split("."), function(a) {
                d = d[a];
                if (!d) throw Error("(Wood.Controller.Base#generateObject) Error:" + c + " does not exists.");
            });
            return new d(e)
        },
        getRequest: function() {
            return new Wood.Request(location)
        }
    });
    var a = Wood.Modules.Controller.Base;
    Wood.Controller.Base.Modules = [a.Boot, a.Beacon, a.Client, a.Dictionary, a.UserData, a.MenuBar, a.Mymenu, a.Limit, a.Util];
    _.each(Wood.Controller.Base.Modules, function(a) {
        _.extend(Wood.Controller.Base.prototype, a.prototype)
    })
})();
(function() {
    Wood.Model.Directory = Wood.Model.Base.extend({
        url: function() {
            return Wood.UrlPrefix.SAMURAI + "ws/" + wood.client.country + "/directories"
        },
        use_store: !0,
        fetch: function(a) {
            var b = this.getBaseAjaxParam();
            $.extend(b, a);
            b.type = "GET";
            b.data = {
                lang: wood.client.language,
                pattern: wood.client.getAB()
            };
            this.fetchJSON(b)
        },
        parse: function(a) {
            var b = [];
            return b = a.directories
        },
        getCatalogId: function() {
            return this.get("catalog_id")
        },
        getDirectories: function() {
            return this.get("directory")
        }
    })
})();
(function() {
    Wood.Model.News = Wood.Model.Base.extend({
        url: function() {
            return Wood.UrlPrefix.SAMURAI + "ws/" + wood.client.country + "/news"
        },
        use_store: !0,
        fetch: function(a) {
            var b = this.getBaseAjaxParam();
            $.extend(b, a);
            b.type = "GET";
            b.data = {
                lang: wood.client.language
            };
            this.fetchJSON(b)
        },
        parse: function(a) {
            var b = [];
            return b = a.news
        },
        getNews: function() {
            return this.get("news_entry")
        }
    })
})();
(function() {
    Wood.Model.CouponBase = Wood.Model.Base.extend({
        getDiscountPrice: function() {
            var a = this.getSafe("target_list.titles.title");
            return a && a[0]
        },
        parseDatetime: function(a) {
            if (!a) return null;
            var b = a.split("T");
            a = b[0].split("-");
            b = b[1].split(":");
            return {
                date: a,
                time: b
            }
        },
        getStartDateTime: function() {
            return this.parseDatetime(this.getSafe("start_datetime.localdatetime.datetime"))
        },
        getEndDateTime: function() {
            return this.parseDatetime(this.getSafe("end_datetime.localdatetime.datetime"))
        }
    })
})();
(function() {
    Wood.Model.OwnedCoupon = Wood.Model.CouponBase.extend({
        isTargetTypeAll: function() {
            return "AllTitle" === this.getTargetType()
        }
    });
    Wood.Model.Base.createGetters(Wood.Model.OwnedCoupon, {
        isUseAtOnce: "use_at_once_flag",
        getDiscountInfo: "discount_info.amount",
        getImage: "image",
        getId: "id",
        getInstanceCode: "instance_code",
        getDescription: "description",
        getTargetType: "target_type",
        getName: "name"
    })
})();
(function() {
    Wood.Model.OwnedCoupons = Wood.Model.Base.extend({
        url: function() {
            return Wood.UrlPrefix.NINJA + "ws/my/owned_coupons"
        },
        use_store: !0,
        fetch: function(a) {
            var b = this.getBaseAjaxParam(),
                c = {};
            this.ns_uid && (c.ns_uid = this.ns_uid);
            $.extend(b, {
                type: "GET",
                async: !1,
                data: c,
                xhrFields: {
                    withCredentials: !0
                }
            });
            $.extend(b, a);
            this.fetchJSON(b)
        },
        parse: function(a) {
            return a.coupons
        },
        getCoupons: function() {
            var a = this.get("coupons");
            return _.map(a, function(a) {
                return (new Wood.Model.OwnedCoupon).set(a)
            })
        },
        getInstanceCodes: function() {
            var a =
                this.get("coupons");
            return _.map(a, function(a) {
                return a.instance_code
            })
        },
        getLength: function() {
            var a = this.get("coupons");
            return a && a.length || 0
        },
        cacheCoupon: function() {
            var a = wood.client.getSessionStorage(),
                b = this.get("coupons");
            return _.each(b, function(b) {
                a.setItem("_owned_coupon_" + b.id, JSON.stringify(b))
            })
        },
        cacheCouponId: function() {
            var a = wood.client.getSessionStorage(),
                b = this.get("coupons");
            return _.each(b, function(b) {
                a.setItem("_coupon_id_" + b.instance_code, b.id + "")
            })
        }
    }, {
        getCachedCoupon: function(a) {
            a =
                wood.client.getSessionStorage().getItem("_owned_coupon_" + a);
            return !a ? null : (new Wood.Model.OwnedCoupon).set(JSON.parse(a))
        }
    })
})();
(function() {
    Wood.Model.ParentalControlPut = Wood.Model.Base.extend({
        url: function() {
            return Wood.UrlPrefix.NINJA + "ws/my/parental_control/!put"
        },
        fetch: function(a) {
            var b = this.getBaseAjaxParam();
            $.extend(b, {
                type: "POST",
                async: !1,
                data: {
                    game_rating_age: this.game_rating_age,
                    shopping: this.shopping,
                    game_rating_lock: this.game_rating_lock
                },
                xhrFields: {
                    withCredentials: !0
                }
            });
            $.extend(b, a);
            this.fetchJSON(b)
        },
        parse: function(a) {
            return a
        }
    })
})();
(function() {
    Wood.View.Directory = Backbone.View.extend({
        el: "#el-top",
        initialize: function() {
            var a = this,
                b = this.model;
            this.controller = this.options.controller;
            var c = [b.directory.getPromise()];
            b.owned_coupon && c.push(b.owned_coupon.getPromise());
            $.when.apply(null, c).done(function() {
                a.render()
            })
        },
        render: function() {
            var a = this;
            this.$el.empty();
            var b = this.model.owned_coupon;
            b && (0 < b.getLength() ? (this.renderOwnedCoupon(), b = this.model.owned_coupon.getInstanceCodes(), wood.client.storeOwnedCoupon(b), wood.client.storeUnreadOwnedCoupon(b)) :
                wood.client.storeUnreadOwnedCoupon([]), this.controller.menuBar.rebuild());
            Wood.Util.each(this.model.directory.getDirectories(), function(b, e) {
                if ("single" === e.type) a.renderSingle(e);
                else if ("partition" === e.type) a.renderPartition(e);
                else if ("reference" === e.type) switch (e.reference_type) {
                    case "aocs":
                        a.renderAocs(e);
                        break;
                    case "tickets":
                        a.renderTickets(e)
                } else a.renderDirectory(e)
            });
            Wood.DomUtil.lazyload("img.lazy");
            Wood.DomUtil.hookSoundEffectEvent(this.$el);
            this.$el.attr("data-isloaded", !0)
        },
        renderOwnedCoupon: function() {
            $("#template_owned_coupon").tmpl({}).appendTo(this.el);
            Wood.DomUtil.localizeText(this.$el)
        },
        renderSingle: function(a) {
            if (!Wood.Util.isUndefined(a)) {
                var b, c;
                if (Wood.Util.isDefined(a.contents.content[0].title)) b = new Wood.URL("#title", {
                    title: a.contents.content[0].title.id
                }), c = Wood.Util.isDefined(a.name) ? a.name : "";
                else if (Wood.Util.isDefined(a.contents.content[0].movie)) b = new Wood.URL("data02_01.html", {
                    movie: a.contents.content[0].movie.id
                }), c = Wood.Util.isDefined(a.name) ? a.name.replace(/<br>/ig, "") : "";
                else return;
                this.controller.appendDirectoryBeaconParam(b,
                    a.id, a.index, a.alias, a.name);
                $("#template_top_content").tmpl({
                    is_title: "" !== c,
                    str_title: c,
                    url_detail: b.toString(),
                    url_banner: a.banner_url,
                    param_banner_w: a.banner_width,
                    param_banner_h: a.banner_height
                }).appendTo(this.el)
            }
        },
        renderAocs: function(a) {
            if (a.contents && a.contents.content[0] && a.contents.content[0].title) {
                var b = new Wood.URL("data03_01.html", {
                    title: a.contents.content[0].title.id
                });
                this.controller.appendDirectoryBeaconParam(b, a.id, a.index, a.alias, a.name);
                $("#template_top_content").tmpl({
                    is_title: a.name &&
                        "" !== a.name,
                    str_title: a.name,
                    url_detail: b.toString(),
                    url_banner: a.banner_url,
                    param_banner_w: a.banner_width,
                    param_banner_h: a.banner_height
                }).appendTo(this.el)
            }
        },
        renderTickets: function(a) {
            if (a.contents && a.contents.content[0] && a.contents.content[0].title) {
                var b = new Wood.URL("data04_01.html", {
                    title: a.contents.content[0].title.id
                });
                this.controller.appendDirectoryBeaconParam(b, a.id, a.index, a.alias, a.name);
                $("#template_top_content").tmpl({
                    is_title: a.name && "" !== a.name,
                    str_title: a.name,
                    url_detail: b.toString(),
                    url_banner: a.banner_url,
                    param_banner_w: a.banner_width,
                    param_banner_h: a.banner_height
                }).appendTo(this.el)
            }
        },
        renderPartition: function(a) {
            Wood.Util.isUndefined(a) || $("#template_partition").tmpl({
                url_partition: a.banner_url,
                param_partitionr_w: a.banner_width,
                param_partition_h: a.banner_height
            }).appendTo(this.el)
        },
        renderDirectory: function(a) {
            if (!Wood.Util.isUndefined(a)) {
                var b = {};
                a.alias ? b.alias = a.alias : b.directory = a.id;
                b = new Wood.URL("#shelf", b);
                this.controller.appendDirectoryBeaconParam(b, a.id, a.index,
                    a.alias, a.name);
                $("#template_top_content").tmpl({
                    is_title: a.name && "" !== a.name,
                    str_title: a.name,
                    url_banner: a.banner_url,
                    param_banner_w: a.banner_width,
                    param_banner_h: a.banner_height,
                    url_detail: b.toString()
                }).appendTo(this.el)
            }
        }
    })
})();
(function() {
    Wood.View.NewsTop = Backbone.View.extend({
        el: "#top_unread_news",
        initialize: function() {
            this.model.bind("change", this.render, this);
            this.options.controller.cache_mode ? this.render() : this.model.fetch()
        },
        render: function() {
            wood.client.hasUnReadNews(this.model.getNews()) ? $(this.el).attr("class", "top-news-on") : $(this.el).attr("class", "top-news-off");
            return this
        }
    })
})();
(function() {
    Wood.View.KeywordSearch = Backbone.View.extend({
        el: "#sel_keyword",
        initialize: function() {
            this.render()
        },
        render: function() {
            null !== wood.client.getSessionStorage().getItem("freeword") && $(this.el).val(wood.client.getSessionStorage().getItem("freeword"));
            this.hookEvent()
        },
        enableKeyword: function() {
            $(this.el).prop("disabled", !1)
        },
        hookEvent: function() {
            var a = this;
            $(window).load(function() {
                a.enableKeyword()
            });
            $(a.el).change(function() {
                if ("" !== $(a.el).val()) {
                    var b = wood.client.getSessionStorage();
                    b.removeItem("searchType");
                    b.removeItem("platform[]");
                    b.removeItem("genre[]");
                    b.removeItem("publisher[]");
                    b.removeItem("price_min");
                    b.removeItem("price_max");
                    b.removeItem("device[]");
                    b.setItem("freeword", $(a.el).val());
                    b = encodeURIComponent($(a.el).val());
                    wood.client.redirectTo("#shelf?searchType=both&freeword=" + b)
                }
            })
        },
        setKeyword: function() {
            var a = wood.client.getSessionStorage().getItem("freeword");
            null !== a ? $(this.el).val(a) : $(this.el).val("")
        }
    })
})();
(function() {
    Wood.Controller.Top01_01 = Wood.Controller.Base.extend({
        run: function(a) {
            this.setupMenu(Wood.View.MenuBar.Type.TOP);
            this.models.news = null;
            this.cache_mode = !1;
            this.cache ? (this.models.news = this.cache.news, this.cache_mode = !0) : this.models.news = this.generateModel("News");
            this.models.directory = this.generateModel("Directory");
            a.isMyCouponAvailable() && (this.models.owned_coupons = this.generateModel("OwnedCoupons"));
            this.renderView("Directory", {
                model: {
                    directory: this.models.directory,
                    owned_coupon: this.models.owned_coupons
                }
            });
            this.news_view = this.renderView("NewsTop", {
                model: this.models.news
            });
            this.keyword_search_view = this.renderView("KeywordSearch");
            a.isInBoot() && (Wood.log("reset in-boot flag"), a.finishBoot())
        },
        afterRun: function() {},
        preparePage: function(a) {
            Wood.Analytics.addFromAttr("(top-page)").sendVirtualPV("VP_Top");
            a.initPurchaseInfo();
            a.initCardInfo();
            a.enableUserOperation()
        },
        isLoaded: function() {
            return $("#el-top").data("isloaded")
        },
        onPageShow: function(a) {
            a.curtainClose();
            a.hideLoadingIcon()
        },
        onPageShowCache: function(a) {
            this.isLoaded() ?
                (this.keyword_search_view.setKeyword(), $("#sel_keyword").blur(), this.news_view.render()) : (a.disableUserOperation(), Wood.DomUtil.hideBody(), this.reload())
        }
    })
})();
(function() {
    Wood.Modules.Controller.Login.Login = function() {
        this.in_redirect = !1
    };
    Wood.Modules.Controller.Login.Login.prototype = {
        pseudoLogin: function() {
            var a = new Wood.Model.PseudoNinjaSession({
                country: wood.client.country,
                language: wood.client.language,
                pid: this.getPrincipalId()
            });
            a.fetch();
            if (a.isOpened()) return Wood.log("[Login] PSEUDO login succeeded."), a;
            Wood.log("[Login] pseudo login failed.");
            return null
        },
        login: function() {
            var a = this,
                b = new Wood.Model.NinjaSession({
                    country: wood.client.country,
                    language: wood.client.language,
                    service_token: this.getServiceToken()
                });
            Wood.log("principal id:  " + this.getPrincipalId());
            Wood.log("service token: " + this.getServiceToken());
            var c = b.getPromise({
                    async: !0,
                    error: function(b, c) {
                        Wood.log("[Login] failed. ");
                        a.handleLoginError(c)
                    },
                    beforeSend: function() {},
                    success: function() {
                        Wood.log("[Login] server process succeeded.")
                    }
                }),
                e = new Wood.Model.News,
                d = Wood.Util.createPromise(function(b) {
                    wood.client.prepareLocalizedText();
                    a.localizeText();
                    b.resolve()
                }),
                k = new Wood.Model.CountryInfo({
                    country: wood.client.country,
                    language: wood.client.language
                }),
                v = Wood.Util.createPromise(function(a) {
                    Wood.IndexBeacon.boot01_01();
                    a.resolve()
                });
            $.when(c, d, v, k.getPromise({
                async: !0,
                beforeSend: function() {},
                success: function() {}
            }), e.getPromise({
                async: !0,
                beforeSend: function() {},
                success: function() {}
            })).done(function() {
                Wood.log("<login> all promises done");
                a.handleLoginSuccess(b);
                a.cache = {
                    news: e,
                    country: wood.client.country,
                    language: wood.client.language,
                    country_info: k
                };
                wood.client.updateParentalControls();
                var c = Wood.StartPageDispatcher.dispatch($.url().param());
                c === Wood.StartPageDispatcher.URL_TOP ? a.navigate("top", {
                    trigger: !0
                }) : (wood.client.endStartUp(), a.in_redirect = !0, wood.client.redirectReplaceTo(c))
            }).fail(function() {
                "resolved" !== v.state() && Wood.IndexBeacon.boot01_01();
                Wood.log("<login> some promises fail");
                a.in_redirect ? Wood.log("<login> igonore failure in initseq redirect.") : (wood.client.showError(Wood.ErrorCode.CLOSE_APPLICATION), wood.client.errorShutdown())
            })
        }
    }
})();
(function() {
    Wood.Modules.Controller.Login.LoginSuccess = function() {};
    Wood.Modules.Controller.Login.LoginSuccess.prototype = {
        handleLoginSuccess: function(a) {
            wood.client.setNinjaSession(a);
            this.verifyWishlistCache(a);
            if (a.isShopAccountInitialized() && wood.client.isWiiU()) {
                var b = wiiuNNA.refreshVirtualAccount();
                wood.client.shutdownIfError(b);
                Wood.log("SUCCESS :refreshACP")
            }
            this.storeAge(a);
            this.syncTicket();
            wood.client.isFirstBoot() && (this.in_redirect = !0, this.writeLocalStorage(), wood.client.redirectToInitialSequence(a));
            this.storeOrderList(a);
            a.getSavedLanguage() ? (this.updateLanguage(a), this.writeLocalStorage()) : (this.in_redirect = !0, this.writeLocalStorage(), wood.client.redirectToInitialSequence(a))
        },
        verifyWishlistCache: function(a) {
            Wood.log("wishlist last modified: " + a.getWishlistLastModified());
            if (a = a.getWishlistLastModified()) {
                var b = wood.client.ls.getWishlistLastModified();
                if (!b || b < a)(new Wood.Model.WishList).removeStorageCache(), wood.client.ls.setWishlistLastModified(a), wood.client.setFSFlushRequired(), Wood.log(" - wishlist last modified updated (cache cleared)")
            }
        },
        storeAge: function(a) {
            a = a.getAge();
            _.isNumber(a) ? wood.client.getSessionStorage().setItem("age", "" + a) : wood.client.isWiiU() && wood.client.errorShutdown()
        },
        syncTicket: function() {
            if (wood.client.isWiiU()) {
                Wood.log("start ticket sync (async)");
                var a = wiiuEC.startTicketSync();
                wood.client.shutdownIfError(a)
            }
        },
        storeOrderList: function(a) {
            var b = Number(a.getOwnedTitlesModified()),
                c = Number(a.getSharedTitlesModified());
            a = Number(a.getOwnedWiiTitlesLastModified());
            var e = wood.client.getLocalStorage();
            if (b || c || a) {
                var d =
                    Number(e.getItem("device_order_list_modified"));
                if (d < b || d < c || d < a) e.removeItem("order_list_modified"), e.removeItem("order_list"), e.removeItem("device_order_list_modified"), e.removeItem("device_order_list"), e.removeItem("device_order_list_rvc"), wood.client.writeLocalStorage(), Wood.log("order_list/device_order_list cleared (too old)")
            }
        },
        updateLanguage: function(a) {
            var b = a.getSavedLanguage(),
                c = wood.client.getLocalStorage();
            b ? (Wood.log("saved_lang: " + b), c.getItem("lang") !== b && (c.setItem("lang", b), wood.client.writeLocalStorage()),
                wood.client.language !== b && (wood.client.language = b, wood.client.region = wood.client.getRegion(), wood.client.prepareLocalizedText({
                    force: !0
                })), wood.client.isWiiU() && (wiiuKeyboard.setLanguage(b), wiiuBrowser.setMessageLanguage(b))) : (Wood.log("[Login] language has not been set yet, and wiiu's language is not availabe."), this.in_redirect = !0, wood.client.redirectToInitialSequence(a))
        },
        writeLocalStorage: function() {
            wood.client.isFSFlushRequired() && (Wood.log("FS flush required. writeLocalStorage."), wood.client.writeLocalStorage(!0))
        }
    }
})();
(function() {
    Wood.Modules.Controller.Login.LoginError = function() {};
    Wood.Modules.Controller.Login.LoginError.prototype = {
        handleLoginError: function(a) {
            if (!a || !a.status && !a.responseText) Wood.log("[Login] empty response"), wood.client.showError(Wood.ErrorCode.CLOSE_APPLICATION), wood.client.errorShutdown();
            410 === a.status && (Wood.log("[Login] server process FAILED.Service was closed. (HTTP 410)"), wood.client.showError(Wood.ErrorCode.SERVICE_FINISHED), wood.client.errorShutdown());
            4 > a.readyState && (Wood.log("[Login] disconnected."),
                wood.client.showError(Wood.ErrorCode.CLOSE_APPLICATION), wood.client.errorShutdown());
            Wood.log("error: " + a.responseText);
            a = JSON.parse(a.responseText);
            var b = a.error.code;
            a = a.error.message;
            if (!this.isReleaseRom() && this.isNNASError(b)) {
                Wood.log("NNAS ERROR: " + b);
                var c = this.pseudoLogin();
                if (c) return this.handleLoginSuccess(c)
            }
            Wood.log("[Login] server process FAILED.code=[" + b + "], message=[" + a + "]");
            wood.client.enableHomeButton();
            wood.client.showErrorDialog(Wood.SystemConfig.PREFIX_NINJA, b, a, function() {
                Wood.log("login error: " +
                    b);
                "3051" === b && wood.client.isWiiU() && wood.client.errorShutdown();
                wood.client.isWiiU() && wood.client.errorShutdown()
            })
        },
        isReleaseRom: function() {
            return "undefined" === typeof wiiuDebug && "undefined" !== typeof wiiuNNA
        },
        isNNASError: function(a) {
            a = parseInt(a, 10);
            return 3130 === a || 3057 === a || 3058 === a || 9500 <= a && 9599 >= a ? !0 : !1
        }
    }
})();
(function() {
    Wood.Modules.Controller.Login.SetupWUP = function() {
        var a = Wood.geishaSkipNup();
        Wood.log("skip_nup:" + a);
        this.skip_nup_assert = a
    };
    Wood.Modules.Controller.Login.SetupWUP.prototype = {
        setupWUP: function() {
            this.storePrincipalId();
            this.setCountryAndLanguage();
            this.skip_nup_assert || this.assertNUP();
            this.updateDeviceCountry();
            this.storeServiceToken();
            this.sendIVS();
            this.storeVinoFlag();
            this.saveTemplates()
        },
        storePrincipalId: function() {
            var a = wood.client.getLocalStorage();
            Wood.log("verify pid...");
            var b =
                String(wiiuNNA.principalId),
                c = a.getItem("pid");
            null === c ? a.setItem("pid", b) : c !== b && (Wood.log("[WARN] PID was changed. This NNA is different from the past one."), a.clear());
            this.setPrincipalId(b)
        },
        setCountryAndLanguage: function() {
            var a = wood.client.getLocalStorage().getItem("lang");
            a ? (wood.client.language = a, Wood.log("language (from local storage): " + wood.client.language)) : (a = wiiuSystemSetting.getLanguage(), wood.client.shutdownIfError(a), wood.client.language = a.code, Wood.log("language (from system setting): " +
                wood.client.language));
            a = wiiuSystemSetting.getCountry();
            wood.client.shutdownIfError(a);
            wood.client.country = a.code;
            Wood.log("country: " + wood.client.country);
            wood.client.region = wood.client.getRegion()
        },
        setSkipNUPFlag: function() {
            this.skip_nup_assert && wood.client.getSessionStorage().setItem("skip_nup_assert", "1")
        },
        assertNUP: function() {
            var a = wiiuEC.needsSystemUpdateUsingCache ? wiiuEC.needsSystemUpdateUsingCache() : wiiuEC.needsSystemUpdate();
            wood.client.shutdownIfError(a);
            a.update && (wood.client.prepareLocalizedText(),
                this.localizeText(), Wood.log("System Update is needed."), wood.client.confirm($("#dialog_msg_update").text(), $("#dialog_cancel").text(), $("#dialog_update").text()) ? wood.client.jumpToUpdate() : wood.client.shutdown())
        },
        updateDeviceCountry: function() {
            var a = wiiuEC.getDeviceCountry();
            wood.client.shutdownIfError(a);
            a.country !== wood.client.country && (Wood.log("DeviceAccount Country: " + a.country + ", NNA Country: " + wood.client.country), a = wiiuEC.setDeviceCountry(wood.client.country), wood.client.shutdownIfError(a))
        },
        storeServiceToken: function() {
            var a = wiiuNNA.getServiceToken();
            wood.client.shutdownIfError(a);
            this.setServiceToken(a.ServiceToken)
        },
        sendIVS: function() {
            var a = wiiuEC.sendIvsAsync();
            //wood.client.shutdownIfError(a);
            Wood.log("sendIvsAsync success")
        },
        storeVinoFlag: function() {
            var a = $.url().param("src_title_id");
            Wood.log("storeVinoFlag: " + a);
            a && _.any({
                jp: "000500301001300A",
                us: "000500301001310A",
                eu: "000500301001320A"
            }, function(b) {
                if ((new Wood.TitleId(b)).isSameTitleAs(a)) return wood.client.getSessionStorage().setItem(Wood.Client.StorageKey.FROM_OTHER_APP,
                    "1"), !0
            })
        }
    }
})();
(function() {
    Wood.Modules.Controller.Login.SetupPC = function() {};
    Wood.Modules.Controller.Login.SetupPC.prototype = {
        setupPC: function() {
            wood.client.language = $.url().param("__lang");
            wood.client.country = $.url().param("__country");
            wood.client.region = wood.client.getRegion();
            var a = $.url().param("__user_id"),
                b = $.url().param("__password"),
                c = $.url().param("__serial_number"),
                e = $.url().param("__device_id"),
                d = $.url().param("__nnas_env"),
                k = $.url().param("__nnas_ver");
            if (!_.isString(wood.client.language) || !_.isString(wood.client.country) ||
                !_.isString(a) || !_.isString(b) || !_.isString(c) || !_.isString(e) || !_.isString(d) || !_.isString(k)) wood.client.language = "ja", wood.client.country = "JP", a = "shoptest1jp", b = "password1234", e = c = "1234567890", d = "library-dev", k = "v1";
            wood.client.getSessionStorage().setItem("country", wood.client.country);
            a = new Wood.Model.DebugServiceToken({
                user_id: a,
                password: b,
                country: wood.client.country,
                env: d,
                ver: k,
                serial_number: c,
                device_id: e
            });
            a.fetch();
            (a = a.getToken()) ? this.setServiceToken(a): (wood.client.alert("\u30b5\u30fc\u30d3\u30b9\u30c8\u30fc\u30af\u30f3\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f"),
                Wood.log("failed to get service_token."));
            this.saveTemplates()
        }
    }
})();
(function() {
    Wood.Modules.Controller.Login.Util = function() {};
    Wood.Modules.Controller.Login.Util.prototype = {
        setServiceToken: function(a) {
            this.service_token = a
        },
        getServiceToken: function() {
            return this.service_token
        },
        setPrincipalId: function(a) {
            this.principal_id = a
        },
        getPrincipalId: function() {
            return this.principal_id
        },
        saveTemplates: function() {
            Wood.Template.set("mymenu", Wood.Template.Version.MYMENU);
            Wood.Template.set("shelf", Wood.Template.Version.SHELF);
            Wood.Template.set("title", Wood.Template.Version.TITLE);
            Wood.Template.set("common", Wood.Template.Version.COMMON);
            Wood.Template.set("redeem", Wood.Template.Version.REDEEM);
            Wood.Template.set("news", Wood.Template.Version.NEWS)
        }
    }
})();
(function() {
    Wood.Controller.Login = Wood.Controller.Base.extend({
        routes: _.defaults({
            "": "start"
        }, Wood.Controller.ROUTES),
        initialize: function() {
            this.constructor.__super__.initialize.call(this);
            var a = this;
            _.each(Wood.Controller.Login.Modules, function(c) {
                c.call(a)
            })
        },
        start: function() {
            wood.client = Wood.Client.create();
            wood.client.setInBoot();
            wood.client.getNinjaSession() ? (Wood.log("ninja session found: navigate to top"), this.navigate("top", {
                trigger: !0
            })) : (wood.client.isWiiU() ? (this.setSkipNUPFlag(), this.setupWUP()) :
                this.setupPC(), this.login())
        }
    });
    var a = Wood.Modules.Controller.Login;
    Wood.Controller.Login.Modules = [a.Login, a.LoginSuccess, a.LoginError, a.SetupWUP, a.SetupPC, a.Util];
    _.each(Wood.Controller.Login.Modules, function(a) {
        _.extend(Wood.Controller.Login.prototype, a.prototype)
    })
})();
(function() {
    Wood.Controller.Index = Wood.Controller.Base.extend({
        scenes: {},
        change_scene_count: 0,
        last_scene: null,
        current_scene: null,
        last_scroll: {
            top: 0,
            shelf: 0,
            title: 0,
            news: 0
        },
        routes: _.defaults({
            "": "login",
            top: "goToTop",
            "shelf?:param": "goToShelf",
            "title?:param": "goToTitle",
            "redeem(?:param)": "goToRedeem",
            "news(?:param)": "goToNews"
        }, Wood.Controller.ROUTES),
        login: function() {
            this.scenes.login = this.scenes.login || new Wood.Controller.Login;
            this.scenes.login.start()
        },
        goToTop: function() {
            var a = !this.scenes.top;
            this.changeScene({
                name: "top",
                controller: Wood.Controller.Top01_01,
                wrap: "#wrapper.js-top"
            });
            this.scenes.top.keyword_search_view.enableKeyword();
            a && this.scenes.top.setBGM(wood.client)
        },
        goToShelf: function() {
            this.changeScene({
                name: "shelf",
                controller: Wood.Controller.Shelf01_01,
                wrap: '<div id="wrapper" class="js-shelf">'
            })
        },
        goToTitle: function() {
            this.changeScene({
                name: "title",
                controller: Wood.Controller.Data01_01,
                wrap: '<div id="wrapper" class="js-title">'
            })
        },
        goToRedeem: function() {
            this.changeScene({
                name: "redeem",
                controller: Wood.Controller.Top03_01,
                wrap: '<div id="wrapper" class="js-redeem">'
            })
        },
        goToNews: function() {
            this.changeScene({
                name: "news",
                controller: Wood.Controller.Top02_01,
                wrap: '<div id="wrapper" class="js-news">'
            })
        },
        changeScene: function(a) {
            this.change_scene_count++;
            50 < this.change_scene_count && (Wood.DomUtil.hideBody(), this.change_scene_count = 0, this.reload());
            var b = "top" === a.name,
                c = this.scenes[a.name];
            if (c) c.$wrap.off().empty(), c.$wrap.html(c.template), this.localizeText();
            else {
                this.$topWrap = this.$topWrap ||
                    $("#wrapper.js-top");
                if (!b) {
                    var e = wood.client,
                        d = this.getRequest();
                    this.handleBoot(e, d)
                }
                c = new a.controller;
                this.scenes[a.name] = c;
                c.$wrap = $(a.wrap);
                b ? c.template = c.$wrap.html() : (b = Wood.Template.get(a.name, "#main"), c.template = b(), this.$topWrap.after(c.$wrap), c.$wrap.html(c.template), this.localizeText())
            }
            _.each(c.routes, function(a, b) {
                c.route(b, a)
            });
            this.$window = this.$window || $(window);
            b = this.$window.scrollTop();
            c.setCache(this.scenes.login ? this.scenes.login.cache : null);
            c.runRoot();
            this.current_scene ||
                this.rebindPageShowEvent();
            this.current_scene = c;
            this.showScene(c);
            this.restoreScroll(a.name, b)
        },
        showScene: function(a) {
            this.$topWrap.hide();
            _.each(this.scenes, function(a) {
                a.$wrap.hide()
            });
            a.$wrap.show()
        },
        rebindPageShowEvent: function() {
            var a = [wood.client, {}];
            this.$window.unbind("pageshow");
            this.setPageShowEvent(this, a)
        },
        onPageShow: function(a, b) {
            this.callOnPageShow(this.current_scene, [a, b])
        },
        onPageShowCacheDynamic: function(a, b) {
            this.callOnPageShowCache(this.current_scene, [a, b])
        },
        restoreScroll: function(a,
            b) {
            var c = this,
                e = this.last_scroll[a];
            this.is_history_back ? Wood.DomUtil.animateToTop(e) : this.last_scroll[this.last_scene] = b;
            this.last_scene = a;
            this.is_history_back = !1;
            this.scenes[a].menuBar.on("back", function(a) {
                c.is_history_back = !0;
                c.last_scroll[c.last_scene] = a.scroll_top
            })
        }
    })
})();