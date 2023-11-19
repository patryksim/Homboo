/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if (function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = "length"in t && t.length, n = K.type(t);
        return"function" === n || K.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }
    function r(t, e, n) {
        if (K.isFunction(e))
            return K.grep(t, function(t, r) {
                return!!e.call(t, r, t) !== n
            });
        if (e.nodeType)
            return K.grep(t, function(t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (se.test(e))
                return K.filter(e, t, n);
            e = K.filter(e, t)
        }
        return K.grep(t, function(t) {
            return W.call(e, t) >= 0 !== n
        })
    }
    function i(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; )
            ;
        return t
    }
    function o(t) {
        var e = he[t] = {};
        return K.each(t.match(pe) || [], function(t, n) {
            e[n] = !0
        }), e
    }
    function a() {
        J.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1), K.ready()
    }
    function s() {
        Object.defineProperty(this.cache = {}, 0, {get: function() {
                return{}
            }}), this.expando = K.expando + s.uid++
    }
    function u(t, e, n) {
        var r;
        if (void 0 === n && 1 === t.nodeType)
            if (r = "data-" + e.replace(be, "-$1").toLowerCase(), n = t.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ye.test(n) ? K.parseJSON(n) : n
                } catch (i) {
                }
                $e.set(t, e, n)
            } else
                n = void 0;
        return n
    }
    function l() {
        return!0
    }
    function c() {
        return!1
    }
    function f() {
        try {
            return J.activeElement
        } catch (t) {
        }
    }
    function d(t, e) {
        return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function p(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }
    function h(t) {
        var e = Ie.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }
    function m(t, e) {
        for (var n = 0, r = t.length; r > n; n++)
            ve.set(t[n], "globalEval", !e || ve.get(e[n], "globalEval"))
    }
    function g(t, e) {
        var n, r, i, o, a, s, u, l;
        if (1 === e.nodeType) {
            if (ve.hasData(t) && (o = ve.access(t), a = ve.set(e, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; r > n; n++)
                        K.event.add(e, i, l[i][n])
            }
            $e.hasData(t) && (s = $e.access(t), u = K.extend({}, s), $e.set(e, u))
        }
    }
    function v(t, e) {
        var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && K.nodeName(t, e) ? K.merge([t], n) : n
    }
    function $(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Ce.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }
    function y(e, n) {
        var r, i = K(n.createElement(e)).appendTo(n.body), o = t.getDefaultComputedStyle && (r = t.getDefaultComputedStyle(i[0])) ? r.display : K.css(i[0], "display");
        return i.detach(), o
    }
    function b(t) {
        var e = J, n = He[t];
        return n || (n = y(t, e), "none" !== n && n || (Re = (Re || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Re[0].contentDocument, e.write(), e.close(), n = y(t, e), Re.detach()), He[t] = n), n
    }
    function w(t, e, n) {
        var r, i, o, a, s = t.style;
        return n = n || Ve(t), n && (a = n.getPropertyValue(e) || n[e]), n && ("" !== a || K.contains(t.ownerDocument, t) || (a = K.style(t, e)), Ue.test(a) && Le.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }
    function x(t, e) {
        return{get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }}
    }
    function k(t, e) {
        if (e in t)
            return e;
        for (var n = e[0].toUpperCase() + e.slice(1), r = e, i = Xe.length; i--; )
            if (e = Xe[i] + n, e in t)
                return e;
        return r
    }
    function C(t, e, n) {
        var r = Be.exec(e);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
    }
    function T(t, e, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2)
            "margin" === n && (a += K.css(t, n + xe[o], !0, i)), r ? ("content" === n && (a -= K.css(t, "padding" + xe[o], !0, i)), "margin" !== n && (a -= K.css(t, "border" + xe[o] + "Width", !0, i))) : (a += K.css(t, "padding" + xe[o], !0, i), "padding" !== n && (a += K.css(t, "border" + xe[o] + "Width", !0, i)));
        return a
    }
    function S(t, e, n) {
        var r = !0, i = "width" === e ? t.offsetWidth : t.offsetHeight, o = Ve(t), a = "border-box" === K.css(t, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = w(t, e, o), (0 > i || null == i) && (i = t.style[e]), Ue.test(i))
                return i;
            r = a && (Z.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
        }
        return i + T(t, e, n || (a ? "border" : "content"), r, o) + "px"
    }
    function D(t, e) {
        for (var n, r, i, o = [], a = 0, s = t.length; s > a; a++)
            r = t[a], r.style && (o[a] = ve.get(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && ke(r) && (o[a] = ve.access(r, "olddisplay", b(r.nodeName)))) : (i = ke(r), "none" === n && i || ve.set(r, "olddisplay", i ? n : K.css(r, "display"))));
        for (a = 0; s > a; a++)
            r = t[a], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "" : "none"));
        return t
    }
    function E(t, e, n, r, i) {
        return new E.prototype.init(t, e, n, r, i)
    }
    function _() {
        return setTimeout(function() {
            Ze = void 0
        }), Ze = K.now()
    }
    function M(t, e) {
        var n, r = 0, i = {height: t};
        for (e = e?1:0; 4 > r; r += 2 - e)
            n = xe[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }
    function A(t, e, n) {
        for (var r, i = (nn[e] || []).concat(nn["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, e, t))
                return r
    }
    function O(t, e, n) {
        var r, i, o, a, s, u, l, c, f = this, d = {}, p = t.style, h = t.nodeType && ke(t), m = ve.get(t, "fxshow");
        n.queue || (s = K._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, f.always(function() {
            f.always(function() {
                s.unqueued--, K.queue(t, "fx").length || s.empty.fire()
            })
        })), 1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = K.css(t, "display"), c = "none" === l ? ve.get(t, "olddisplay") || b(t.nodeName) : l, "inline" === c && "none" === K.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in e)
            if (i = e[r], Qe.exec(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r])
                        continue;
                    h = !0
                }
                d[r] = m && m[r] || K.style(t, r)
            } else
                l = void 0;
        if (K.isEmptyObject(d))
            "inline" === ("none" === l ? b(t.nodeName) : l) && (p.display = l);
        else {
            m ? "hidden"in m && (h = m.hidden) : m = ve.access(t, "fxshow", {}), o && (m.hidden = !h), h ? K(t).show() : f.done(function() {
                K(t).hide()
            }), f.done(function() {
                var e;
                ve.remove(t, "fxshow");
                for (e in d)
                    K.style(t, e, d[e])
            });
            for (r in d)
                a = A(h ? m[r] : 0, r, f), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function N(t, e) {
        var n, r, i, o, a;
        for (n in t)
            if (r = K.camelCase(n), i = e[r], o = t[n], K.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = K.cssHooks[r], a && "expand"in a) {
                o = a.expand(o), delete t[r];
                for (n in o)
                    n in t || (t[n] = o[n], e[n] = i)
            } else
                e[r] = i
    }
    function j(t, e, n) {
        var r, i, o = 0, a = en.length, s = K.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return!1;
            for (var e = Ze || _(), n = Math.max(0, l.startTime + l.duration - e), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++)
                l.tweens[a].run(o);
            return s.notifyWith(t, [l, o, n]), 1 > o && u ? n : (s.resolveWith(t, [l]), !1)
        }, l = s.promise({elem: t, props: K.extend({}, e), opts: K.extend(!0, {specialEasing: {}}, n), originalProperties: e, originalOptions: n, startTime: Ze || _(), duration: n.duration, tweens: [], createTween: function(e, n) {
                var r = K.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(r), r
            }, stop: function(e) {
                var n = 0, r = e ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    l.tweens[n].run(1);
                return e ? s.resolveWith(t, [l, e]) : s.rejectWith(t, [l, e]), this
            }}), c = l.props;
        for (N(c, l.opts.specialEasing); a > o; o++)
            if (r = en[o].call(l, t, c, l.opts))
                return r;
        return K.map(c, A, l), K.isFunction(l.opts.start) && l.opts.start.call(t, l), K.fx.timer(K.extend(u, {elem: t, anim: l, queue: l.opts.queue})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function P(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var r, i = 0, o = e.toLowerCase().match(pe) || [];
            if (K.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
        }
    }
    function I(t, e, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, K.each(t[s] || [], function(t, s) {
                var l = s(e, n, r);
                return"string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (e.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {}, a = t === bn;
        return i(e.dataTypes[0]) || !o["*"] && i("*")
    }
    function F(t, e) {
        var n, r, i = K.ajaxSettings.flatOptions || {};
        for (n in e)
            void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
        return r && K.extend(!0, t, r), t
    }
    function q(t, e, n) {
        for (var r, i, o, a, s = t.contents, u = t.dataTypes; "*" === u[0]; )
            u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || t.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }
    function R(t, e, n, r) {
        var i, o, a, s, u, l = {}, c = t.dataTypes.slice();
        if (c[1])
            for (a in t.converters)
                l[a.toLowerCase()] = t.converters[a];
        for (o = c.shift(); o; )
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (a = l[u + " " + o] || l["* " + o], !a)
                        for (i in l)
                            if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && t["throws"])
                            e = a(e);
                        else
                            try {
                                e = a(e)
                            } catch (f) {
                                return{state: "parsererror", error: a ? f : "No conversion from " + u + " to " + o}
                            }
                }
        return{state: "success", data: e}
    }
    function H(t, e, n, r) {
        var i;
        if (K.isArray(e))
            K.each(e, function(e, i) {
                n || Tn.test(t) ? r(t, i) : H(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r)
            });
        else if (n || "object" !== K.type(e))
            r(t, e);
        else
            for (i in e)
                H(t + "[" + i + "]", e[i], n, r)
    }
    function L(t) {
        return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var U = [], V = U.slice, Y = U.concat, B = U.push, W = U.indexOf, z = {}, G = z.toString, X = z.hasOwnProperty, Z = {}, J = t.document, Q = "2.1.4", K = function(t, e) {
        return new K.fn.init(t, e)
    }, te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ee = /^-ms-/, ne = /-([\da-z])/gi, re = function(t, e) {
        return e.toUpperCase()
    };
    K.fn = K.prototype = {jquery: Q, constructor: K, selector: "", length: 0, toArray: function() {
            return V.call(this)
        }, get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : V.call(this)
        }, pushStack: function(t) {
            var e = K.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        }, each: function(t, e) {
            return K.each(this, t, e)
        }, map: function(t) {
            return this.pushStack(K.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        }, slice: function() {
            return this.pushStack(V.apply(this, arguments))
        }, first: function() {
            return this.eq(0)
        }, last: function() {
            return this.eq(-1)
        }, eq: function(t) {
            var e = this.length, n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        }, end: function() {
            return this.prevObject || this.constructor(null)
        }, push: B, sort: U.sort, splice: U.splice}, K.extend = K.fn.extend = function() {
        var t, e, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || K.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (t = arguments[s]))
                for (e in t)
                    n = a[e], r = t[e], a !== r && (l && r && (K.isPlainObject(r) || (i = K.isArray(r))) ? (i ? (i = !1, o = n && K.isArray(n) ? n : []) : o = n && K.isPlainObject(n) ? n : {}, a[e] = K.extend(l, o, r)) : void 0 !== r && (a[e] = r));
        return a
    }, K.extend({expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(t) {
            throw new Error(t)
        }, noop: function() {
        }, isFunction: function(t) {
            return"function" === K.type(t)
        }, isArray: Array.isArray, isWindow: function(t) {
            return null != t && t === t.window
        }, isNumeric: function(t) {
            return!K.isArray(t) && t - parseFloat(t) + 1 >= 0
        }, isPlainObject: function(t) {
            return"object" !== K.type(t) || t.nodeType || K.isWindow(t) ? !1 : t.constructor && !X.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function(t) {
            var e;
            for (e in t)
                return!1;
            return!0
        }, type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? z[G.call(t)] || "object" : typeof t
        }, globalEval: function(t) {
            var e, n = eval;
            t = K.trim(t), t && (1 === t.indexOf("use strict") ? (e = J.createElement("script"), e.text = t, J.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        }, camelCase: function(t) {
            return t.replace(ee, "ms-").replace(ne, re)
        }, nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function(t, e, r) {
            var i, o = 0, a = t.length, s = n(t);
            if (r) {
                if (s)
                    for (; a > o && (i = e.apply(t[o], r), i !== !1); o++)
                        ;
                else
                    for (o in t)
                        if (i = e.apply(t[o], r), i === !1)
                            break
            } else if (s)
                for (; a > o && (i = e.call(t[o], o, t[o]), i !== !1); o++)
                    ;
            else
                for (o in t)
                    if (i = e.call(t[o], o, t[o]), i === !1)
                        break;
            return t
        }, trim: function(t) {
            return null == t ? "" : (t + "").replace(te, "")
        }, makeArray: function(t, e) {
            var r = e || [];
            return null != t && (n(Object(t)) ? K.merge(r, "string" == typeof t ? [t] : t) : B.call(r, t)), r
        }, inArray: function(t, e, n) {
            return null == e ? -1 : W.call(e, t, n)
        }, merge: function(t, e) {
            for (var n = +e.length, r = 0, i = t.length; n > r; r++)
                t[i++] = e[r];
            return t.length = i, t
        }, grep: function(t, e, n) {
            for (var r, i = [], o = 0, a = t.length, s = !n; a > o; o++)
                r = !e(t[o], o), r !== s && i.push(t[o]);
            return i
        }, map: function(t, e, r) {
            var i, o = 0, a = t.length, s = n(t), u = [];
            if (s)
                for (; a > o; o++)
                    i = e(t[o], o, r), null != i && u.push(i);
            else
                for (o in t)
                    i = e(t[o], o, r), null != i && u.push(i);
            return Y.apply([], u)
        }, guid: 1, proxy: function(t, e) {
            var n, r, i;
            return"string" == typeof e && (n = t[e], e = t, t = n), K.isFunction(t) ? (r = V.call(arguments, 2), i = function() {
                return t.apply(e || this, r.concat(V.call(arguments)))
            }, i.guid = t.guid = t.guid || K.guid++, i) : void 0
        }, now: Date.now, support: Z}), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        z["[object " + e + "]"] = e.toLowerCase()
    });
    var ie = /*!
     * Sizzle CSS Selector Engine v2.2.0-pre
     * http://sizzlejs.com/
     *
     * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2014-12-16
     */
            function(t) {
                function e(t, e, n, r) {
                    var i, o, a, s, u, l, f, p, h, m;
                    if ((e ? e.ownerDocument || e : H) !== O && A(e), e = e || O, n = n || [], s = e.nodeType, "string" != typeof t || !t || 1 !== s && 9 !== s && 11 !== s)
                        return n;
                    if (!r && j) {
                        if (11 !== s && (i = $e.exec(t)))
                            if (a = i[1]) {
                                if (9 === s) {
                                    if (o = e.getElementById(a), !o || !o.parentNode)
                                        return n;
                                    if (o.id === a)
                                        return n.push(o), n
                                } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && q(e, o) && o.id === a)
                                    return n.push(o), n
                            } else {
                                if (i[2])
                                    return Q.apply(n, e.getElementsByTagName(t)), n;
                                if ((a = i[3]) && w.getElementsByClassName)
                                    return Q.apply(n, e.getElementsByClassName(a)), n
                            }
                        if (w.qsa && (!P || !P.test(t))) {
                            if (p = f = R, h = e, m = 1 !== s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                                for (l = T(t), (f = e.getAttribute("id"))?p = f.replace(be, "\\$&"):e.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--; )
                                    l[u] = p + d(l[u]);
                                h = ye.test(t) && c(e.parentNode) || e, m = l.join(",")
                            }
                            if (m)
                                try {
                                    return Q.apply(n, h.querySelectorAll(m)), n
                                } catch (g) {
                                } finally {
                                    f || e.removeAttribute("id")
                                }
                        }
                    }
                    return D(t.replace(ue, "$1"), e, n, r)
                }
                function n() {
                    function t(n, r) {
                        return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = r
                    }
                    var e = [];
                    return t
                }
                function r(t) {
                    return t[R] = !0, t
                }
                function i(t) {
                    var e = O.createElement("div");
                    try {
                        return!!t(e)
                    } catch (n) {
                        return!1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }
                function o(t, e) {
                    for (var n = t.split("|"), r = t.length; r--; )
                        x.attrHandle[n[r]] = e
                }
                function a(t, e) {
                    var n = e && t, r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || z) - (~t.sourceIndex || z);
                    if (r)
                        return r;
                    if (n)
                        for (; n = n.nextSibling; )
                            if (n === e)
                                return-1;
                    return t ? 1 : -1
                }
                function s(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return"input" === n && e.type === t
                    }
                }
                function u(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return("input" === n || "button" === n) && e.type === t
                    }
                }
                function l(t) {
                    return r(function(e) {
                        return e = +e, r(function(n, r) {
                            for (var i, o = t([], n.length, e), a = o.length; a--; )
                                n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }
                function c(t) {
                    return t && "undefined" != typeof t.getElementsByTagName && t
                }
                function f() {
                }
                function d(t) {
                    for (var e = 0, n = t.length, r = ""; n > e; e++)
                        r += t[e].value;
                    return r
                }
                function p(t, e, n) {
                    var r = e.dir, i = n && "parentNode" === r, o = U++;
                    return e.first ? function(e, n, o) {
                        for (; e = e[r]; )
                            if (1 === e.nodeType || i)
                                return t(e, n, o)
                    } : function(e, n, a) {
                        var s, u, l = [L, o];
                        if (a) {
                            for (; e = e[r]; )
                                if ((1 === e.nodeType || i) && t(e, n, a))
                                    return!0
                        } else
                            for (; e = e[r]; )
                                if (1 === e.nodeType || i) {
                                    if (u = e[R] || (e[R] = {}), (s = u[r]) && s[0] === L && s[1] === o)
                                        return l[2] = s[2];
                                    if (u[r] = l, l[2] = t(e, n, a))
                                        return!0
                                }
                    }
                }
                function h(t) {
                    return t.length > 1 ? function(e, n, r) {
                        for (var i = t.length; i--; )
                            if (!t[i](e, n, r))
                                return!1;
                        return!0
                    } : t[0]
                }
                function m(t, n, r) {
                    for (var i = 0, o = n.length; o > i; i++)
                        e(t, n[i], r);
                    return r
                }
                function g(t, e, n, r, i) {
                    for (var o, a = [], s = 0, u = t.length, l = null != e; u > s; s++)
                        (o = t[s]) && (!n || n(o, r, i)) && (a.push(o), l && e.push(s));
                    return a
                }
                function v(t, e, n, i, o, a) {
                    return i && !i[R] && (i = v(i)), o && !o[R] && (o = v(o, a)), r(function(r, a, s, u) {
                        var l, c, f, d = [], p = [], h = a.length, v = r || m(e || "*", s.nodeType ? [s] : s, []), $ = !t || !r && e ? v : g(v, d, t, s, u), y = n ? o || (r ? t : h || i) ? [] : a : $;
                        if (n && n($, y, s, u), i)
                            for (l = g(y, p), i(l, [], s, u), c = l.length; c--; )
                                (f = l[c]) && (y[p[c]] = !($[p[c]] = f));
                        if (r) {
                            if (o || t) {
                                if (o) {
                                    for (l = [], c = y.length; c--; )
                                        (f = y[c]) && l.push($[c] = f);
                                    o(null, y = [], l, u)
                                }
                                for (c = y.length; c--; )
                                    (f = y[c]) && (l = o ? te(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
                            }
                        } else
                            y = g(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, u) : Q.apply(a, y)
                    })
                }
                function $(t) {
                    for (var e, n, r, i = t.length, o = x.relative[t[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = p(function(t) {
                        return t === e
                    }, a, !0), l = p(function(t) {
                        return te(e, t) > -1
                    }, a, !0), c = [function(t, n, r) {
                            var i = !o && (r || n !== E) || ((e = n).nodeType ? u(t, n, r) : l(t, n, r));
                            return e = null, i
                        }]; i > s; s++)
                        if (n = x.relative[t[s].type])
                            c = [p(h(c), n)];
                        else {
                            if (n = x.filter[t[s].type].apply(null, t[s].matches), n[R]) {
                                for (r = ++s; i > r && !x.relative[t[r].type]; r++)
                                    ;
                                return v(s > 1 && h(c), s > 1 && d(t.slice(0, s - 1).concat({value: " " === t[s - 2].type ? "*" : ""})).replace(ue, "$1"), n, r > s && $(t.slice(s, r)), i > r && $(t = t.slice(r)), i > r && d(t))
                            }
                            c.push(n)
                        }
                    return h(c)
                }
                function y(t, n) {
                    var i = n.length > 0, o = t.length > 0, a = function(r, a, s, u, l) {
                        var c, f, d, p = 0, h = "0", m = r && [], v = [], $ = E, y = r || o && x.find.TAG("*", l), b = L += null == $ ? 1 : Math.random() || .1, w = y.length;
                        for (l && (E = a !== O && a); h !== w && null != (c = y[h]); h++) {
                            if (o && c) {
                                for (f = 0; d = t[f++]; )
                                    if (d(c, a, s)) {
                                        u.push(c);
                                        break
                                    }
                                l && (L = b)
                            }
                            i && ((c = !d && c) && p--, r && m.push(c))
                        }
                        if (p += h, i && h !== p) {
                            for (f = 0; d = n[f++]; )
                                d(m, v, a, s);
                            if (r) {
                                if (p > 0)
                                    for (; h--; )
                                        m[h] || v[h] || (v[h] = Z.call(u));
                                v = g(v)
                            }
                            Q.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && e.uniqueSort(u)
                        }
                        return l && (L = b, E = $), m
                    };
                    return i ? r(a) : a
                }
                var b, w, x, k, C, T, S, D, E, _, M, A, O, N, j, P, I, F, q, R = "sizzle" + 1 * new Date, H = t.document, L = 0, U = 0, V = n(), Y = n(), B = n(), W = function(t, e) {
                    return t === e && (M = !0), 0
                }, z = 1 << 31, G = {}.hasOwnProperty, X = [], Z = X.pop, J = X.push, Q = X.push, K = X.slice, te = function(t, e) {
                    for (var n = 0, r = t.length; r > n; n++)
                        if (t[n] === e)
                            return n;
                    return-1
                }, ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = re.replace("w", "w#"), oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", se = new RegExp(ne + "+", "g"), ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), le = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(ae), pe = new RegExp("^" + ie + "$"), he = {ID: new RegExp("^#(" + re + ")"), CLASS: new RegExp("^\\.(" + re + ")"), TAG: new RegExp("^(" + re.replace("w", "w*") + ")"), ATTR: new RegExp("^" + oe), PSEUDO: new RegExp("^" + ae), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + ee + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")}, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, $e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), xe = function(t, e, n) {
                    var r = "0x" + e - 65536;
                    return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                }, ke = function() {
                    A()
                };
                try {
                    Q.apply(X = K.call(H.childNodes), H.childNodes), X[H.childNodes.length].nodeType
                } catch (Ce) {
                    Q = {apply: X.length ? function(t, e) {
                            J.apply(t, K.call(e))
                        } : function(t, e) {
                            for (var n = t.length, r = 0; t[n++] = e[r++]; )
                                ;
                            t.length = n - 1
                        }}
                }
                w = e.support = {}, C = e.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return e ? "HTML" !== e.nodeName : !1
                }, A = e.setDocument = function(t) {
                    var e, n, r = t ? t.ownerDocument || t : H;
                    return r !== O && 9 === r.nodeType && r.documentElement ? (O = r, N = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), j = !C(r), w.attributes = i(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), w.getElementsByTagName = i(function(t) {
                        return t.appendChild(r.createComment("")), !t.getElementsByTagName("*").length
                    }), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = i(function(t) {
                        return N.appendChild(t).id = R, !r.getElementsByName || !r.getElementsByName(R).length
                    }), w.getById ? (x.find.ID = function(t, e) {
                        if ("undefined" != typeof e.getElementById && j) {
                            var n = e.getElementById(t);
                            return n && n.parentNode ? [n] : []
                        }
                    }, x.filter.ID = function(t) {
                        var e = t.replace(we, xe);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete x.find.ID, x.filter.ID = function(t) {
                        var e = t.replace(we, xe);
                        return function(t) {
                            var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), x.find.TAG = w.getElementsByTagName ? function(t, e) {
                        return"undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var n, r = [], i = 0, o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[i++]; )
                                1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, x.find.CLASS = w.getElementsByClassName && function(t, e) {
                        return j ? e.getElementsByClassName(t) : void 0
                    }, I = [], P = [], (w.qsa = ve.test(r.querySelectorAll)) && (i(function(t) {
                        N.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + R + "-]").length || P.push("~="), t.querySelectorAll(":checked").length || P.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || P.push(".#.+[+~]")
                    }), i(function(t) {
                        var e = r.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), P.push(",.*:")
                    })), (w.matchesSelector = ve.test(F = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && i(function(t) {
                        w.disconnectedMatch = F.call(t, "div"), F.call(t, "[s!='']:x"), I.push("!=", ae)
                    }), P = P.length && new RegExp(P.join("|")), I = I.length && new RegExp(I.join("|")), e = ve.test(N.compareDocumentPosition), q = e || ve.test(N.contains) ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t, r = e && e.parentNode;
                        return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode; )
                                if (e === t)
                                    return!0;
                        return!1
                    }, W = e ? function(t, e) {
                        if (t === e)
                            return M = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === r || t.ownerDocument === H && q(H, t) ? -1 : e === r || e.ownerDocument === H && q(H, e) ? 1 : _ ? te(_, t) - te(_, e) : 0 : 4 & n ? -1 : 1)
                    } : function(t, e) {
                        if (t === e)
                            return M = !0, 0;
                        var n, i = 0, o = t.parentNode, s = e.parentNode, u = [t], l = [e];
                        if (!o || !s)
                            return t === r ? -1 : e === r ? 1 : o ? -1 : s ? 1 : _ ? te(_, t) - te(_, e) : 0;
                        if (o === s)
                            return a(t, e);
                        for (n = t; n = n.parentNode; )
                            u.unshift(n);
                        for (n = e; n = n.parentNode; )
                            l.unshift(n);
                        for (; u[i] === l[i]; )
                            i++;
                        return i ? a(u[i], l[i]) : u[i] === H ? -1 : l[i] === H ? 1 : 0
                    }, r) : O
                }, e.matches = function(t, n) {
                    return e(t, null, null, n)
                }, e.matchesSelector = function(t, n) {
                    if ((t.ownerDocument || t) !== O && A(t), n = n.replace(fe, "='$1']"), !(!w.matchesSelector || !j || I && I.test(n) || P && P.test(n)))
                        try {
                            var r = F.call(t, n);
                            if (r || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                                return r
                        } catch (i) {
                        }
                    return e(n, O, null, [t]).length > 0
                }, e.contains = function(t, e) {
                    return(t.ownerDocument || t) !== O && A(t), q(t, e)
                }, e.attr = function(t, e) {
                    (t.ownerDocument || t) !== O && A(t);
                    var n = x.attrHandle[e.toLowerCase()], r = n && G.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !j) : void 0;
                    return void 0 !== r ? r : w.attributes || !j ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }, e.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function(t) {
                    var e, n = [], r = 0, i = 0;
                    if (M = !w.detectDuplicates, _ = !w.sortStable && t.slice(0), t.sort(W), M) {
                        for (; e = t[i++]; )
                            e === t[i] && (r = n.push(i));
                        for (; r--; )
                            t.splice(n[r], 1)
                    }
                    return _ = null, t
                }, k = e.getText = function(t) {
                    var e, n = "", r = 0, i = t.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof t.textContent)
                                return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling)
                                n += k(t)
                        } else if (3 === i || 4 === i)
                            return t.nodeValue
                    } else
                        for (; e = t[r++]; )
                            n += k(e);
                    return n
                }, x = e.selectors = {cacheLength: 50, createPseudo: r, match: he, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function(t) {
                            return t[1] = t[1].replace(we, xe), t[3] = (t[3] || t[4] || t[5] || "").replace(we, xe), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        }, CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        }, PSEUDO: function(t) {
                            var e, n = !t[6] && t[2];
                            return he.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && de.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }}, filter: {TAG: function(t) {
                            var e = t.replace(we, xe).toLowerCase();
                            return"*" === t ? function() {
                                return!0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        }, CLASS: function(t) {
                            var e = V[t + " "];
                            return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && V(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                        }, ATTR: function(t, n, r) {
                            return function(i) {
                                var o = e.attr(i, t);
                                return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                            }
                        }, CHILD: function(t, e, n, r, i) {
                            var o = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
                            return 1 === r && 0 === i ? function(t) {
                                return!!t.parentNode
                            } : function(e, n, u) {
                                var l, c, f, d, p, h, m = o !== a ? "nextSibling" : "previousSibling", g = e.parentNode, v = s && e.nodeName.toLowerCase(), $ = !u && !s;
                                if (g) {
                                    if (o) {
                                        for (; m; ) {
                                            for (f = e; f = f[m]; )
                                                if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                                    return!1;
                                            h = m = "only" === t && !h && "nextSibling"
                                        }
                                        return!0
                                    }
                                    if (h = [a ? g.firstChild : g.lastChild], a && $) {
                                        for (c = g[R] || (g[R] = {}), l = c[t] || [], p = l[0] === L && l[1], d = l[0] === L && l[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (d = p = 0) || h.pop(); )
                                            if (1 === f.nodeType && ++d && f === e) {
                                                c[t] = [L, p, d];
                                                break
                                            }
                                    } else if ($ && (l = (e[R] || (e[R] = {}))[t]) && l[0] === L)
                                        d = l[1];
                                    else
                                        for (; (f = ++p && f && f[m] || (d = p = 0) || h.pop()) && ((s?f.nodeName.toLowerCase() !== v:1 !== f.nodeType) || !++d || ($ && ((f[R] || (f[R] = {}))[t] = [L, d]), f !== e)); )
                                            ;
                                    return d -= i, d === r || d % r === 0 && d / r >= 0
                                }
                            }
                        }, PSEUDO: function(t, n) {
                            var i, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return o[R] ? o(n) : o.length > 1 ? (i = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                                for (var r, i = o(t, n), a = i.length; a--; )
                                    r = te(t, i[a]), t[r] = !(e[r] = i[a])
                            }) : function(t) {
                                return o(t, 0, i)
                            }) : o
                        }}, pseudos: {not: r(function(t) {
                            var e = [], n = [], i = S(t.replace(ue, "$1"));
                            return i[R] ? r(function(t, e, n, r) {
                                for (var o, a = i(t, null, r, []), s = t.length; s--; )
                                    (o = a[s]) && (t[s] = !(e[s] = o))
                            }) : function(t, r, o) {
                                return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                            }
                        }), has: r(function(t) {
                            return function(n) {
                                return e(t, n).length > 0
                            }
                        }), contains: r(function(t) {
                            return t = t.replace(we, xe), function(e) {
                                return(e.textContent || e.innerText || k(e)).indexOf(t) > -1
                            }
                        }), lang: r(function(t) {
                            return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, xe).toLowerCase(), function(e) {
                                var n;
                                do
                                    if (n = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                        return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return!1
                            }
                        }), target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        }, root: function(t) {
                            return t === N
                        }, focus: function(t) {
                            return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        }, enabled: function(t) {
                            return t.disabled === !1
                        }, disabled: function(t) {
                            return t.disabled === !0
                        }, checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return"input" === e && !!t.checked || "option" === e && !!t.selected
                        }, selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        }, empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6)
                                    return!1;
                            return!0
                        }, parent: function(t) {
                            return!x.pseudos.empty(t)
                        }, header: function(t) {
                            return ge.test(t.nodeName)
                        }, input: function(t) {
                            return me.test(t.nodeName)
                        }, button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return"input" === e && "button" === t.type || "button" === e
                        }, text: function(t) {
                            var e;
                            return"input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        }, first: l(function() {
                            return[0]
                        }), last: l(function(t, e) {
                            return[e - 1]
                        }), eq: l(function(t, e, n) {
                            return[0 > n ? n + e : n]
                        }), even: l(function(t, e) {
                            for (var n = 0; e > n; n += 2)
                                t.push(n);
                            return t
                        }), odd: l(function(t, e) {
                            for (var n = 1; e > n; n += 2)
                                t.push(n);
                            return t
                        }), lt: l(function(t, e, n) {
                            for (var r = 0 > n ? n + e : n; --r >= 0; )
                                t.push(r);
                            return t
                        }), gt: l(function(t, e, n) {
                            for (var r = 0 > n ? n + e : n; ++r < e; )
                                t.push(r);
                            return t
                        })}}, x.pseudos.nth = x.pseudos.eq;
                for (b in{radio:!0, checkbox:!0, file:!0, password:!0, image:!0})
                    x.pseudos[b] = s(b);
                for (b in{submit:!0, reset:!0})
                    x.pseudos[b] = u(b);
                return f.prototype = x.filters = x.pseudos, x.setFilters = new f, T = e.tokenize = function(t, n) {
                    var r, i, o, a, s, u, l, c = Y[t + " "];
                    if (c)
                        return n ? 0 : c.slice(0);
                    for (s = t, u = [], l = x.preFilter; s; ) {
                        (!r || (i = le.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({value: r, type: i[0].replace(ue, " ")}), s = s.slice(r.length));
                        for (a in x.filter)
                            !(i = he[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({value: r, type: a, matches: i}), s = s.slice(r.length));
                        if (!r)
                            break
                    }
                    return n ? s.length : s ? e.error(t) : Y(t, u).slice(0)
                }, S = e.compile = function(t, e) {
                    var n, r = [], i = [], o = B[t + " "];
                    if (!o) {
                        for (e || (e = T(t)), n = e.length; n--; )
                            o = $(e[n]), o[R] ? r.push(o) : i.push(o);
                        o = B(t, y(i, r)), o.selector = t
                    }
                    return o
                }, D = e.select = function(t, e, n, r) {
                    var i, o, a, s, u, l = "function" == typeof t && t, f = !r && T(t = l.selector || t);
                    if (n = n || [], 1 === f.length) {
                        if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === e.nodeType && j && x.relative[o[1].type]) {
                            if (e = (x.find.ID(a.matches[0].replace(we, xe), e) || [])[0], !e)
                                return n;
                            l && (e = e.parentNode), t = t.slice(o.shift().value.length)
                        }
                        for (i = he.needsContext.test(t)?0:o.length; i-- && (a = o[i], !x.relative[s = a.type]); )
                            if ((u = x.find[s]) && (r = u(a.matches[0].replace(we, xe), ye.test(o[0].type) && c(e.parentNode) || e))) {
                                if (o.splice(i, 1), t = r.length && d(o), !t)
                                    return Q.apply(n, r), n;
                                break
                            }
                    }
                    return(l || S(t, f))(r, e, !j, n, ye.test(t) && c(e.parentNode) || e), n
                }, w.sortStable = R.split("").sort(W).join("") === R, w.detectDuplicates = !!M, A(), w.sortDetached = i(function(t) {
                    return 1 & t.compareDocumentPosition(O.createElement("div"))
                }), i(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function(t, e, n) {
                    return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), w.attributes && i(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || o("value", function(t, e, n) {
                    return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                }), i(function(t) {
                    return null == t.getAttribute("disabled")
                }) || o(ee, function(t, e, n) {
                    var r;
                    return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }), e
            }(t);
    K.find = ie, K.expr = ie.selectors, K.expr[":"] = K.expr.pseudos, K.unique = ie.uniqueSort, K.text = ie.getText, K.isXMLDoc = ie.isXML, K.contains = ie.contains;
    var oe = K.expr.match.needsContext, ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, se = /^.[^:#\[\.,]*$/;
    K.filter = function(t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? K.find.matchesSelector(r, t) ? [r] : [] : K.find.matches(t, K.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, K.fn.extend({find: function(t) {
            var e, n = this.length, r = [], i = this;
            if ("string" != typeof t)
                return this.pushStack(K(t).filter(function() {
                    for (e = 0; n > e; e++)
                        if (K.contains(i[e], this))
                            return!0
                }));
            for (e = 0; n > e; e++)
                K.find(t, i[e], r);
            return r = this.pushStack(n > 1 ? K.unique(r) : r), r.selector = this.selector ? this.selector + " " + t : t, r
        }, filter: function(t) {
            return this.pushStack(r(this, t || [], !1))
        }, not: function(t) {
            return this.pushStack(r(this, t || [], !0))
        }, is: function(t) {
            return!!r(this, "string" == typeof t && oe.test(t) ? K(t) : t || [], !1).length
        }});
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ce = K.fn.init = function(t, e) {
        var n, r;
        if (!t)
            return this;
        if ("string" == typeof t) {
            if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : le.exec(t), !n || !n[1] && e)
                return!e || e.jquery ? (e || ue).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof K ? e[0] : e, K.merge(this, K.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : J, !0)), ae.test(n[1]) && K.isPlainObject(e))
                    for (n in e)
                        K.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : K.isFunction(t) ? "undefined" != typeof ue.ready ? ue.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), K.makeArray(t, this))
    };
    ce.prototype = K.fn, ue = K(J);
    var fe = /^(?:parents|prev(?:Until|All))/, de = {children: !0, contents: !0, next: !0, prev: !0};
    K.extend({dir: function(t, e, n) {
            for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (i && K(t).is(n))
                        break;
                    r.push(t)
                }
            return r
        }, sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        }}), K.fn.extend({has: function(t) {
            var e = K(t, this), n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++)
                    if (K.contains(this, e[t]))
                        return!0
            })
        }, closest: function(t, e) {
            for (var n, r = 0, i = this.length, o = [], a = oe.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && K.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? K.unique(o) : o)
        }, index: function(t) {
            return t ? "string" == typeof t ? W.call(K(t), this[0]) : W.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function(t, e) {
            return this.pushStack(K.unique(K.merge(this.get(), K(t, e))))
        }, addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }}), K.each({parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function(t) {
            return K.dir(t, "parentNode")
        }, parentsUntil: function(t, e, n) {
            return K.dir(t, "parentNode", n)
        }, next: function(t) {
            return i(t, "nextSibling")
        }, prev: function(t) {
            return i(t, "previousSibling")
        }, nextAll: function(t) {
            return K.dir(t, "nextSibling")
        }, prevAll: function(t) {
            return K.dir(t, "previousSibling")
        }, nextUntil: function(t, e, n) {
            return K.dir(t, "nextSibling", n)
        }, prevUntil: function(t, e, n) {
            return K.dir(t, "previousSibling", n)
        }, siblings: function(t) {
            return K.sibling((t.parentNode || {}).firstChild, t)
        }, children: function(t) {
            return K.sibling(t.firstChild)
        }, contents: function(t) {
            return t.contentDocument || K.merge([], t.childNodes)
        }}, function(t, e) {
        K.fn[t] = function(n, r) {
            var i = K.map(this, e, n);
            return"Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = K.filter(r, i)), this.length > 1 && (de[t] || K.unique(i), fe.test(t) && i.reverse()), this.pushStack(i)
        }
    });
    var pe = /\S+/g, he = {};
    K.Callbacks = function(t) {
        t = "string" == typeof t ? he[t] || o(t) : K.extend({}, t);
        var e, n, r, i, a, s, u = [], l = !t.once && [], c = function(o) {
            for (e = t.memory && o, n = !0, s = i || 0, i = 0, a = u.length, r = !0; u && a > s; s++)
                if (u[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                    e = !1;
                    break
                }
            r = !1, u && (l ? l.length && c(l.shift()) : e ? u = [] : f.disable())
        }, f = {add: function() {
                if (u) {
                    var n = u.length;
                    !function o(e) {
                        K.each(e, function(e, n) {
                            var r = K.type(n);
                            "function" === r ? t.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                        })
                    }(arguments), r ? a = u.length : e && (i = n, c(e))
                }
                return this
            }, remove: function() {
                return u && K.each(arguments, function(t, e) {
                    for (var n; (n = K.inArray(e, u, n)) > - 1; )
                        u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
                }), this
            }, has: function(t) {
                return t ? K.inArray(t, u) > -1 : !(!u || !u.length)
            }, empty: function() {
                return u = [], a = 0, this
            }, disable: function() {
                return u = l = e = void 0, this
            }, disabled: function() {
                return!u
            }, lock: function() {
                return l = void 0, e || f.disable(), this
            }, locked: function() {
                return!l
            }, fireWith: function(t, e) {
                return!u || n && !l || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? l.push(e) : c(e)), this
            }, fire: function() {
                return f.fireWith(this, arguments), this
            }, fired: function() {
                return!!n
            }};
        return f
    }, K.extend({Deferred: function(t) {
            var e = [["resolve", "done", K.Callbacks("once memory"), "resolved"], ["reject", "fail", K.Callbacks("once memory"), "rejected"], ["notify", "progress", K.Callbacks("memory")]], n = "pending", r = {state: function() {
                    return n
                }, always: function() {
                    return i.done(arguments).fail(arguments), this
                }, then: function() {
                    var t = arguments;
                    return K.Deferred(function(n) {
                        K.each(e, function(e, o) {
                            var a = K.isFunction(t[e]) && t[e];
                            i[o[1]](function() {
                                var t = a && a.apply(this, arguments);
                                t && K.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                }, promise: function(t) {
                    return null != t ? K.extend(t, r) : r
                }}, i = {};
            return r.pipe = r.then, K.each(e, function(t, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), t && t.call(i, i), i
        }, when: function(t) {
            var e, n, r, i = 0, o = V.call(arguments), a = o.length, s = 1 !== a || t && K.isFunction(t.promise) ? a : 0, u = 1 === s ? t : K.Deferred(), l = function(t, n, r) {
                return function(i) {
                    n[t] = this, r[t] = arguments.length > 1 ? V.call(arguments) : i, r === e ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (a > 1)
                for (e = new Array(a), n = new Array(a), r = new Array(a); a > i; i++)
                    o[i] && K.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, e)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }});
    var me;
    K.fn.ready = function(t) {
        return K.ready.promise().done(t), this
    }, K.extend({isReady: !1, readyWait: 1, holdReady: function(t) {
            t ? K.readyWait++ : K.ready(!0)
        }, ready: function(t) {
            (t === !0 ? --K.readyWait : K.isReady) || (K.isReady = !0, t !== !0 && --K.readyWait > 0 || (me.resolveWith(J, [K]), K.fn.triggerHandler && (K(J).triggerHandler("ready"), K(J).off("ready"))))
        }}), K.ready.promise = function(e) {
        return me || (me = K.Deferred(), "complete" === J.readyState ? setTimeout(K.ready) : (J.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1))), me.promise(e)
    }, K.ready.promise();
    var ge = K.access = function(t, e, n, r, i, o, a) {
        var s = 0, u = t.length, l = null == n;
        if ("object" === K.type(n)) {
            i = !0;
            for (s in n)
                K.access(t, e, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, K.isFunction(r) || (a = !0), l && (a ? (e.call(t, r), e = null) : (l = e, e = function(t, e, n) {
            return l.call(K(t), n)
        })), e))
            for (; u > s; s++)
                e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
        return i ? t : l ? e.call(t) : u ? e(t[0], n) : o
    };
    K.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, s.uid = 1, s.accepts = K.acceptData, s.prototype = {key: function(t) {
            if (!s.accepts(t))
                return 0;
            var e = {}, n = t[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    e[this.expando] = {value: n}, Object.defineProperties(t, e)
                } catch (r) {
                    e[this.expando] = n, K.extend(t, e)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        }, set: function(t, e, n) {
            var r, i = this.key(t), o = this.cache[i];
            if ("string" == typeof e)
                o[e] = n;
            else if (K.isEmptyObject(o))
                K.extend(this.cache[i], e);
            else
                for (r in e)
                    o[r] = e[r];
            return o
        }, get: function(t, e) {
            var n = this.cache[this.key(t)];
            return void 0 === e ? n : n[e]
        }, access: function(t, e, n) {
            var r;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (r = this.get(t, e), void 0 !== r ? r : this.get(t, K.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        }, remove: function(t, e) {
            var n, r, i, o = this.key(t), a = this.cache[o];
            if (void 0 === e)
                this.cache[o] = {};
            else {
                K.isArray(e) ? r = e.concat(e.map(K.camelCase)) : (i = K.camelCase(e), e in a ? r = [e, i] : (r = i, r = r in a ? [r] : r.match(pe) || [])), n = r.length;
                for (; n--; )
                    delete a[r[n]]
            }
        }, hasData: function(t) {
            return!K.isEmptyObject(this.cache[t[this.expando]] || {})
        }, discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }};
    var ve = new s, $e = new s, ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, be = /([A-Z])/g;
    K.extend({hasData: function(t) {
            return $e.hasData(t) || ve.hasData(t)
        }, data: function(t, e, n) {
            return $e.access(t, e, n)
        }, removeData: function(t, e) {
            $e.remove(t, e)
        }, _data: function(t, e, n) {
            return ve.access(t, e, n)
        }, _removeData: function(t, e) {
            ve.remove(t, e)
        }}), K.fn.extend({data: function(t, e) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (i = $e.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = K.camelCase(r.slice(5)), u(o, r, i[r])));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return"object" == typeof t ? this.each(function() {
                $e.set(this, t)
            }) : ge(this, function(e) {
                var n, r = K.camelCase(t);
                if (o && void 0 === e) {
                    if (n = $e.get(o, t), void 0 !== n)
                        return n;
                    if (n = $e.get(o, r), void 0 !== n)
                        return n;
                    if (n = u(o, r, void 0), void 0 !== n)
                        return n
                } else
                    this.each(function() {
                        var n = $e.get(this, r);
                        $e.set(this, r, e), -1 !== t.indexOf("-") && void 0 !== n && $e.set(this, t, e)
                    })
            }, null, e, arguments.length > 1, null, !0)
        }, removeData: function(t) {
            return this.each(function() {
                $e.remove(this, t)
            })
        }}), K.extend({queue: function(t, e, n) {
            var r;
            return t ? (e = (e || "fx") + "queue", r = ve.get(t, e), n && (!r || K.isArray(n) ? r = ve.access(t, e, K.makeArray(n)) : r.push(n)), r || []) : void 0
        }, dequeue: function(t, e) {
            e = e || "fx";
            var n = K.queue(t, e), r = n.length, i = n.shift(), o = K._queueHooks(t, e), a = function() {
                K.dequeue(t, e)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return ve.get(t, n) || ve.access(t, n, {empty: K.Callbacks("once memory").add(function() {
                    ve.remove(t, [e + "queue", n])
                })})
        }}), K.fn.extend({queue: function(t, e) {
            var n = 2;
            return"string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? K.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = K.queue(this, t, e);
                K._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && K.dequeue(this, t)
            })
        }, dequeue: function(t) {
            return this.each(function() {
                K.dequeue(this, t)
            })
        }, clearQueue: function(t) {
            return this.queue(t || "fx", [])
        }, promise: function(t, e) {
            var n, r = 1, i = K.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--; )
                n = ve.get(o[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(e)
        }});
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, xe = ["Top", "Right", "Bottom", "Left"], ke = function(t, e) {
        return t = e || t, "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t)
    }, Ce = /^(?:checkbox|radio)$/i;
    !function() {
        var t = J.createDocumentFragment(), e = t.appendChild(J.createElement("div")), n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), Z.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Z.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Te = "undefined";
    Z.focusinBubbles = "onfocusin"in t;
    var Se = /^key/, De = /^(?:mouse|pointer|contextmenu)|click/, Ee = /^(?:focusinfocus|focusoutblur)$/, _e = /^([^.]*)(?:\.(.+)|)$/;
    K.event = {global: {}, add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, m, g = ve.get(t);
            if (g)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = K.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function(e) {
                    return typeof K !== Te && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
                }), e = (e || "").match(pe) || [""], l = e.length; l--; )
                    s = _e.exec(e[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (f = K.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = K.event.special[p] || {}, c = K.extend({type: p, origType: m, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && K.expr.match.needsContext.test(i), namespace: h.join(".")}, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && f.setup.call(t, r, h, a) !== !1 || t.addEventListener && t.addEventListener(p, a, !1)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), K.event.global[p] = !0)
        }, remove: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, m, g = ve.hasData(t) && ve.get(t);
            if (g && (u = g.events)) {
                for (e = (e || "").match(pe) || [""], l = e.length; l--; )
                    if (s = _e.exec(e[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = K.event.special[p] || {}, p = (r?f.delegateType:f.bindType) || p, d = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--; )
                            c = d[o], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(t, c));
                        a && !d.length && (f.teardown && f.teardown.call(t, h, g.handle) !== !1 || K.removeEvent(t, p, g.handle), delete u[p])
                    } else
                        for (p in u)
                            K.event.remove(t, p + e[l], n, r, !0);
                K.isEmptyObject(u) && (delete g.handle, ve.remove(t, "events"))
            }
        }, trigger: function(e, n, r, i) {
            var o, a, s, u, l, c, f, d = [r || J], p = X.call(e, "type") ? e.type : e, h = X.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = s = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !Ee.test(p + K.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, e = e[K.expando] ? e : new K.Event(p, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : K.makeArray(n, [e]), f = K.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !K.isWindow(r)) {
                    for (u = f.delegateType || p, Ee.test(u + p) || (a = a.parentNode); a; a = a.parentNode)
                        d.push(a), s = a;
                    s === (r.ownerDocument || J) && d.push(s.defaultView || s.parentWindow || t)
                }
                for (o = 0; (a = d[o++]) && !e.isPropagationStopped(); )
                    e.type = o > 1 ? u : f.bindType || p, c = (ve.get(a, "events") || {})[e.type] && ve.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && K.acceptData(a) && (e.result = c.apply(a, n), e.result === !1 && e.preventDefault());
                return e.type = p, i || e.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !K.acceptData(r) || l && K.isFunction(r[p]) && !K.isWindow(r) && (s = r[l], s && (r[l] = null), K.event.triggered = p, r[p](), K.event.triggered = void 0, s && (r[l] = s)), e.result
            }
        }, dispatch: function(t) {
            t = K.event.fix(t);
            var e, n, r, i, o, a = [], s = V.call(arguments), u = (ve.get(this, "events") || {})[t.type] || [], l = K.event.special[t.type] || {};
            if (s[0] = t, t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
                for (a = K.event.handlers.call(this, t, u), e = 0; (i = a[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !t.isImmediatePropagationStopped(); )
                        (!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, r = ((K.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t), t.result
            }
        }, handlers: function(t, e) {
            var n, r, i, o, a = [], s = e.delegateCount, u = t.target;
            if (s && u.nodeType && (!t.button || "click" !== t.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== t.type) {
                        for (r = [], n = 0; s > n; n++)
                            o = e[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? K(i, this).index(u) >= 0 : K.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({elem: u, handlers: r})
                    }
            return s < e.length && a.push({elem: this, handlers: e.slice(s)}), a
        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }}, mouseHooks: {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(t, e) {
                var n, r, i, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || J, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }}, fix: function(t) {
            if (t[K.expando])
                return t;
            var e, n, r, i = t.type, o = t, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = De.test(i)?this.mouseHooks:Se.test(i)?this.keyHooks:{}), r = a.props?this.props.concat(a.props):this.props, t = new K.Event(o), e = r.length; e--; )
                n = r[e], t[n] = o[n];
            return t.target || (t.target = J), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
        }, special: {load: {noBubble: !0}, focus: {trigger: function() {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"}, blur: {trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"}, click: {trigger: function() {
                    return"checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function(t) {
                    return K.nodeName(t.target, "a")
                }}, beforeunload: {postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }}}, simulate: function(t, e, n, r) {
            var i = K.extend(new K.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
            r ? K.event.trigger(i, null, e) : K.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
        }}, K.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }, K.Event = function(t, e) {
        return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? l : c) : this.type = t, e && K.extend(this, e), this.timeStamp = t && t.timeStamp || K.now(), void(this[K.expando] = !0)) : new K.Event(t, e)
    }, K.Event.prototype = {isDefaultPrevented: c, isPropagationStopped: c, isImmediatePropagationStopped: c, preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = l, t && t.preventDefault && t.preventDefault()
        }, stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = l, t && t.stopPropagation && t.stopPropagation()
        }, stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = l, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }}, K.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function(t, e) {
        K.event.special[t] = {delegateType: e, bindType: e, handle: function(t) {
                var n, r = this, i = t.relatedTarget, o = t.handleObj;
                return(!i || i !== r && !K.contains(r, i)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }}
    }), Z.focusinBubbles || K.each({focus: "focusin", blur: "focusout"}, function(t, e) {
        var n = function(t) {
            K.event.simulate(e, t.target, K.event.fix(t), !0)
        };
        K.event.special[e] = {setup: function() {
                var r = this.ownerDocument || this, i = ve.access(r, e);
                i || r.addEventListener(t, n, !0), ve.access(r, e, (i || 0) + 1)
            }, teardown: function() {
                var r = this.ownerDocument || this, i = ve.access(r, e) - 1;
                i ? ve.access(r, e, i) : (r.removeEventListener(t, n, !0), ve.remove(r, e))
            }}
    }), K.fn.extend({on: function(t, e, n, r, i) {
            var o, a;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (a in t)
                    this.on(a, e, n, t[a], i);
                return this
            }
            if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ("string" == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), r === !1)
                r = c;
            else if (!r)
                return this;
            return 1 === i && (o = r, r = function(t) {
                return K().off(t), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = K.guid++)), this.each(function() {
                K.event.add(this, t, r, n, e)
            })
        }, one: function(t, e, n, r) {
            return this.on(t, e, n, r, 1)
        }, off: function(t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj)
                return r = t.handleObj, K(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof t) {
                for (i in t)
                    this.off(i, e, t[i]);
                return this
            }
            return(e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = c), this.each(function() {
                K.event.remove(this, t, n, e)
            })
        }, trigger: function(t, e) {
            return this.each(function() {
                K.event.trigger(t, e, this)
            })
        }, triggerHandler: function(t, e) {
            var n = this[0];
            return n ? K.event.trigger(t, e, n, !0) : void 0
        }});
    var Me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ae = /<([\w:]+)/, Oe = /<|&#?\w+;/, Ne = /<(?:script|style|link)/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i, Pe = /^$|\/(?:java|ecma)script/i, Ie = /^true\/(.*)/, Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, qe = {option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
    qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, qe.th = qe.td, K.extend({clone: function(t, e, n) {
            var r, i, o, a, s = t.cloneNode(!0), u = K.contains(t.ownerDocument, t);
            if (!(Z.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t)))
                for (a = v(s), o = v(t), r = 0, i = o.length; i > r; r++)
                    $(o[r], a[r]);
            if (e)
                if (n)
                    for (o = o || v(t), a = a || v(s), r = 0, i = o.length; i > r; r++)
                        g(o[r], a[r]);
                else
                    g(t, s);
            return a = v(s, "script"), a.length > 0 && m(a, !u && v(t, "script")), s
        }, buildFragment: function(t, e, n, r) {
            for (var i, o, a, s, u, l, c = e.createDocumentFragment(), f = [], d = 0, p = t.length; p > d; d++)
                if (i = t[d], i || 0 === i)
                    if ("object" === K.type(i))
                        K.merge(f, i.nodeType ? [i] : i);
                    else if (Oe.test(i)) {
                        for (o = o || c.appendChild(e.createElement("div")), a = (Ae.exec(i) || ["", ""])[1].toLowerCase(), s = qe[a] || qe._default, o.innerHTML = s[1] + i.replace(Me, "<$1></$2>") + s[2], l = s[0]; l--; )
                            o = o.lastChild;
                        K.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
                    } else
                        f.push(e.createTextNode(i));
            for (c.textContent = "", d = 0; i = f[d++]; )
                if ((!r || -1 === K.inArray(i, r)) && (u = K.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && m(o), n))
                    for (l = 0; i = o[l++]; )
                        Pe.test(i.type || "") && n.push(i);
            return c
        }, cleanData: function(t) {
            for (var e, n, r, i, o = K.event.special, a = 0; void 0 !== (n = t[a]); a++) {
                if (K.acceptData(n) && (i = n[ve.expando], i && (e = ve.cache[i]))) {
                    if (e.events)
                        for (r in e.events)
                            o[r] ? K.event.remove(n, r) : K.removeEvent(n, r, e.handle);
                    ve.cache[i] && delete ve.cache[i]
                }
                delete $e.cache[n[$e.expando]]
            }
        }}), K.fn.extend({text: function(t) {
            return ge(this, function(t) {
                return void 0 === t ? K.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = d(this, t);
                    e.appendChild(t)
                }
            })
        }, prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = d(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, remove: function(t, e) {
            for (var n, r = t ? K.filter(t, this) : this, i = 0; null != (n = r[i]); i++)
                e || 1 !== n.nodeType || K.cleanData(v(n)), n.parentNode && (e && K.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (K.cleanData(v(t, !1)), t.textContent = "");
            return this
        }, clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return K.clone(this, t, e)
            })
        }, html: function(t) {
            return ge(this, function(t) {
                var e = this[0] || {}, n = 0, r = this.length;
                if (void 0 === t && 1 === e.nodeType)
                    return e.innerHTML;
                if ("string" == typeof t && !Ne.test(t) && !qe[(Ae.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Me, "<$1></$2>");
                    try {
                        for (; r > n; n++)
                            e = this[n] || {}, 1 === e.nodeType && (K.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (i) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, K.cleanData(v(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        }, detach: function(t) {
            return this.remove(t, !0)
        }, domManip: function(t, e) {
            t = Y.apply([], t);
            var n, r, i, o, a, s, u = 0, l = this.length, c = this, f = l - 1, d = t[0], m = K.isFunction(d);
            if (m || l > 1 && "string" == typeof d && !Z.checkClone && je.test(d))
                return this.each(function(n) {
                    var r = c.eq(n);
                    m && (t[0] = d.call(this, n, r.html())), r.domManip(t, e)
                });
            if (l && (n = K.buildFragment(t, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = K.map(v(n, "script"), p), o = i.length; l > u; u++)
                    a = n, u !== f && (a = K.clone(a, !0, !0), o && K.merge(i, v(a, "script"))), e.call(this[u], a, u);
                if (o)
                    for (s = i[i.length - 1].ownerDocument, K.map(i, h), u = 0; o > u; u++)
                        a = i[u], Pe.test(a.type || "") && !ve.access(a, "globalEval") && K.contains(s, a) && (a.src ? K._evalUrl && K._evalUrl(a.src) : K.globalEval(a.textContent.replace(Fe, "")))
            }
            return this
        }}), K.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function(t, e) {
        K.fn[t] = function(t) {
            for (var n, r = [], i = K(t), o = i.length - 1, a = 0; o >= a; a++)
                n = a === o ? this : this.clone(!0), K(i[a])[e](n), B.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Re, He = {}, Le = /^margin/, Ue = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"), Ve = function(e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
    };
    !function() {
        function e() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
            var e = t.getComputedStyle(a, null);
            n = "1%" !== e.top, r = "4px" === e.width, i.removeChild(o)
        }
        var n, r, i = J.documentElement, o = J.createElement("div"), a = J.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), t.getComputedStyle && K.extend(Z, {pixelPosition: function() {
                return e(), n
            }, boxSizingReliable: function() {
                return null == r && e(), r
            }, reliableMarginRight: function() {
                var e, n = a.appendChild(J.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", i.appendChild(o), e = !parseFloat(t.getComputedStyle(n, null).marginRight), i.removeChild(o), a.removeChild(n), e
            }}))
    }(), K.swap = function(t, e, n, r) {
        var i, o, a = {};
        for (o in e)
            a[o] = t.style[o], t.style[o] = e[o];
        i = n.apply(t, r || []);
        for (o in e)
            t.style[o] = a[o];
        return i
    };
    var Ye = /^(none|table(?!-c[ea]).+)/, Be = new RegExp("^(" + we + ")(.*)$", "i"), We = new RegExp("^([+-])=(" + we + ")", "i"), ze = {position: "absolute", visibility: "hidden", display: "block"}, Ge = {letterSpacing: "0", fontWeight: "400"}, Xe = ["Webkit", "O", "Moz", "ms"];
    K.extend({cssHooks: {opacity: {get: function(t, e) {
                    if (e) {
                        var n = w(t, "opacity");
                        return"" === n ? "1" : n
                    }
                }}}, cssNumber: {columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": "cssFloat"}, style: function(t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, o, a, s = K.camelCase(e), u = t.style;
                return e = K.cssProps[s] || (K.cssProps[s] = k(u, s)), a = K.cssHooks[e] || K.cssHooks[s], void 0 === n ? a && "get"in a && void 0 !== (i = a.get(t, !1, r)) ? i : u[e] : (o = typeof n, "string" === o && (i = We.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(K.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || K.cssNumber[s] || (n += "px"), Z.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), a && "set"in a && void 0 === (n = a.set(t, n, r)) || (u[e] = n)), void 0)
            }
        }, css: function(t, e, n, r) {
            var i, o, a, s = K.camelCase(e);
            return e = K.cssProps[s] || (K.cssProps[s] = k(t.style, s)), a = K.cssHooks[e] || K.cssHooks[s], a && "get"in a && (i = a.get(t, !0, n)), void 0 === i && (i = w(t, e, r)), "normal" === i && e in Ge && (i = Ge[e]), "" === n || n ? (o = parseFloat(i), n === !0 || K.isNumeric(o) ? o || 0 : i) : i
        }}), K.each(["height", "width"], function(t, e) {
        K.cssHooks[e] = {get: function(t, n, r) {
                return n ? Ye.test(K.css(t, "display")) && 0 === t.offsetWidth ? K.swap(t, ze, function() {
                    return S(t, e, r)
                }) : S(t, e, r) : void 0
            }, set: function(t, n, r) {
                var i = r && Ve(t);
                return C(t, n, r ? T(t, e, r, "border-box" === K.css(t, "boxSizing", !1, i), i) : 0)
            }}
    }), K.cssHooks.marginRight = x(Z.reliableMarginRight, function(t, e) {
        return e ? K.swap(t, {display: "inline-block"}, w, [t, "marginRight"]) : void 0
    }), K.each({margin: "", padding: "", border: "Width"}, function(t, e) {
        K.cssHooks[t + e] = {expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                    i[t + xe[r] + e] = o[r] || o[r - 2] || o[0];
                return i
            }}, Le.test(t) || (K.cssHooks[t + e].set = C)
    }), K.fn.extend({css: function(t, e) {
            return ge(this, function(t, e, n) {
                var r, i, o = {}, a = 0;
                if (K.isArray(e)) {
                    for (r = Ve(t), i = e.length; i > a; a++)
                        o[e[a]] = K.css(t, e[a], !1, r);
                    return o
                }
                return void 0 !== n ? K.style(t, e, n) : K.css(t, e)
            }, t, e, arguments.length > 1)
        }, show: function() {
            return D(this, !0)
        }, hide: function() {
            return D(this)
        }, toggle: function(t) {
            return"boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                ke(this) ? K(this).show() : K(this).hide()
            })
        }}), K.Tween = E, E.prototype = {constructor: E, init: function(t, e, n, r, i, o) {
            this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (K.cssNumber[n] ? "" : "px")
        }, cur: function() {
            var t = E.propHooks[this.prop];
            return t && t.get ? t.get(this) : E.propHooks._default.get(this)
        }, run: function(t) {
            var e, n = E.propHooks[this.prop];
            return this.pos = e = this.options.duration ? K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : E.propHooks._default.set(this), this
        }}, E.prototype.init.prototype = E.prototype, E.propHooks = {_default: {get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            }, set: function(t) {
                K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }}}, E.propHooks.scrollTop = E.propHooks.scrollLeft = {set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }}, K.easing = {linear: function(t) {
            return t
        }, swing: function(t) {
            return.5 - Math.cos(t * Math.PI) / 2
        }}, K.fx = E.prototype.init, K.fx.step = {};
    var Ze, Je, Qe = /^(?:toggle|show|hide)$/, Ke = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"), tn = /queueHooks$/, en = [O], nn = {"*": [function(t, e) {
                var n = this.createTween(t, e), r = n.cur(), i = Ke.exec(e), o = i && i[3] || (K.cssNumber[t] ? "" : "px"), a = (K.cssNumber[t] || "px" !== o && +r) && Ke.exec(K.css(n.elem, t)), s = 1, u = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do
                        s = s || ".5", a /= s, K.style(n.elem, t, a + o);
                    while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]};
    K.Animation = K.extend(j, {tweener: function(t, e) {
            K.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, r = 0, i = t.length; i > r; r++)
                n = t[r], nn[n] = nn[n] || [], nn[n].unshift(e)
        }, prefilter: function(t, e) {
            e ? en.unshift(t) : en.push(t)
        }}), K.speed = function(t, e, n) {
        var r = t && "object" == typeof t ? K.extend({}, t) : {complete: n || !n && e || K.isFunction(t) && t, duration: t, easing: n && e || e && !K.isFunction(e) && e};
        return r.duration = K.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in K.fx.speeds ? K.fx.speeds[r.duration] : K.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            K.isFunction(r.old) && r.old.call(this), r.queue && K.dequeue(this, r.queue)
        }, r
    }, K.fn.extend({fadeTo: function(t, e, n, r) {
            return this.filter(ke).css("opacity", 0).show().end().animate({opacity: e}, t, n, r)
        }, animate: function(t, e, n, r) {
            var i = K.isEmptyObject(t), o = K.speed(e, n, r), a = function() {
                var e = j(this, K.extend({}, t), o);
                (i || ve.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function(t, e, n) {
            var r = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return"string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0, i = null != t && t + "queueHooks", o = K.timers, a = ve.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && tn.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                (e || !n) && K.dequeue(this, t)
            })
        }, finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e, n = ve.get(this), r = n[t + "queue"], i = n[t + "queueHooks"], o = K.timers, a = r ? r.length : 0;
                for (n.finish = !0, K.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--; )
                    o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; a > e; e++)
                    r[e] && r[e].finish && r[e].finish.call(this);
                delete n.finish
            })
        }}), K.each(["toggle", "show", "hide"], function(t, e) {
        var n = K.fn[e];
        K.fn[e] = function(t, r, i) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(M(e, !0), t, r, i)
        }
    }), K.each({slideDown: M("show"), slideUp: M("hide"), slideToggle: M("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function(t, e) {
        K.fn[t] = function(t, n, r) {
            return this.animate(e, t, n, r)
        }
    }), K.timers = [], K.fx.tick = function() {
        var t, e = 0, n = K.timers;
        for (Ze = K.now(); e < n.length; e++)
            t = n[e], t() || n[e] !== t || n.splice(e--, 1);
        n.length || K.fx.stop(), Ze = void 0
    }, K.fx.timer = function(t) {
        K.timers.push(t), t() ? K.fx.start() : K.timers.pop()
    }, K.fx.interval = 13, K.fx.start = function() {
        Je || (Je = setInterval(K.fx.tick, K.fx.interval))
    }, K.fx.stop = function() {
        clearInterval(Je), Je = null
    }, K.fx.speeds = {slow: 600, fast: 200, _default: 400}, K.fn.delay = function(t, e) {
        return t = K.fx ? K.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
            var r = setTimeout(e, t);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    }, function() {
        var t = J.createElement("input"), e = J.createElement("select"), n = e.appendChild(J.createElement("option"));
        t.type = "checkbox", Z.checkOn = "" !== t.value, Z.optSelected = n.selected, e.disabled = !0, Z.optDisabled = !n.disabled, t = J.createElement("input"), t.value = "t", t.type = "radio", Z.radioValue = "t" === t.value
    }();
    var rn, on, an = K.expr.attrHandle;
    K.fn.extend({attr: function(t, e) {
            return ge(this, K.attr, t, e, arguments.length > 1)
        }, removeAttr: function(t) {
            return this.each(function() {
                K.removeAttr(this, t)
            })
        }}), K.extend({attr: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o)
                return typeof t.getAttribute === Te ? K.prop(t, e, n) : (1 === o && K.isXMLDoc(t) || (e = e.toLowerCase(), r = K.attrHooks[e] || (K.expr.match.bool.test(e) ? on : rn)), void 0 === n ? r && "get"in r && null !== (i = r.get(t, e)) ? i : (i = K.find.attr(t, e), null == i ? void 0 : i) : null !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : void K.removeAttr(t, e))
        }, removeAttr: function(t, e) {
            var n, r, i = 0, o = e && e.match(pe);
            if (o && 1 === t.nodeType)
                for (; n = o[i++]; )
                    r = K.propFix[n] || n, K.expr.match.bool.test(n) && (t[r] = !1), t.removeAttribute(n)
        }, attrHooks: {type: {set: function(t, e) {
                    if (!Z.radioValue && "radio" === e && K.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }}}}), on = {set: function(t, e, n) {
            return e === !1 ? K.removeAttr(t, n) : t.setAttribute(n, n), n
        }}, K.each(K.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = an[e] || K.find.attr;
        an[e] = function(t, e, r) {
            var i, o;
            return r || (o = an[e], an[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, an[e] = o), i
        }
    });
    var sn = /^(?:input|select|textarea|button)$/i;
    K.fn.extend({prop: function(t, e) {
            return ge(this, K.prop, t, e, arguments.length > 1)
        }, removeProp: function(t) {
            return this.each(function() {
                delete this[K.propFix[t] || t]
            })
        }}), K.extend({propFix: {"for": "htmlFor", "class": "className"}, prop: function(t, e, n) {
            var r, i, o, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a)
                return o = 1 !== a || !K.isXMLDoc(t), o && (e = K.propFix[e] || e, i = K.propHooks[e]), void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get"in i && null !== (r = i.get(t, e)) ? r : t[e]
        }, propHooks: {tabIndex: {get: function(t) {
                    return t.hasAttribute("tabindex") || sn.test(t.nodeName) || t.href ? t.tabIndex : -1
                }}}}), Z.optSelected || (K.propHooks.selected = {get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }}), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        K.propFix[this.toLowerCase()] = this
    });
    var un = /[\t\r\n\f]/g;
    K.fn.extend({addClass: function(t) {
            var e, n, r, i, o, a, s = "string" == typeof t && t, u = 0, l = this.length;
            if (K.isFunction(t))
                return this.each(function(e) {
                    K(this).addClass(t.call(this, e, this.className))
                });
            if (s)
                for (e = (t || "").match(pe) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
                        for (o = 0; i = e[o++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = K.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        }, removeClass: function(t) {
            var e, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof t && t, u = 0, l = this.length;
            if (K.isFunction(t))
                return this.each(function(e) {
                    K(this).removeClass(t.call(this, e, this.className))
                });
            if (s)
                for (e = (t || "").match(pe) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
                        for (o = 0; i = e[o++]; )
                            for (; r.indexOf(" " + i + " ") >= 0; )
                                r = r.replace(" " + i + " ", " ");
                        a = t ? K.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        }, toggleClass: function(t, e) {
            var n = typeof t;
            return"boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(K.isFunction(t) ? function(n) {
                K(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function() {
                if ("string" === n)
                    for (var e, r = 0, i = K(this), o = t.match(pe) || []; e = o[r++]; )
                        i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else
                    (n === Te || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ve.get(this, "__className__") || "")
            })
        }, hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(e) >= 0)
                    return!0;
            return!1
        }});
    var ln = /\r/g;
    K.fn.extend({val: function(t) {
            var e, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = K.isFunction(t), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? t.call(this, n, K(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : K.isArray(i) && (i = K.map(i, function(t) {
                            return null == t ? "" : t + ""
                        })), e = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], e && "set"in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                    });
                if (i)
                    return e = K.valHooks[i.type] || K.valHooks[i.nodeName.toLowerCase()], e && "get"in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ln, "") : null == n ? "" : n)
            }
        }}), K.extend({valHooks: {option: {get: function(t) {
                    var e = K.find.attr(t, "value");
                    return null != e ? e : K.trim(K.text(t))
                }}, select: {get: function(t) {
                    for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (Z.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && K.nodeName(n.parentNode, "optgroup"))) {
                            if (e = K(n).val(), o)
                                return e;
                            a.push(e)
                        }
                    return a
                }, set: function(t, e) {
                    for (var n, r, i = t.options, o = K.makeArray(e), a = i.length; a--; )
                        r = i[a], (r.selected = K.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }}}}), K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = {set: function(t, e) {
                return K.isArray(e) ? t.checked = K.inArray(K(t).val(), e) >= 0 : void 0
            }}, Z.checkOn || (K.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        K.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), K.fn.extend({hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }, bind: function(t, e, n) {
            return this.on(t, null, e, n)
        }, unbind: function(t, e) {
            return this.off(t, null, e)
        }, delegate: function(t, e, n, r) {
            return this.on(e, t, n, r)
        }, undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }});
    var cn = K.now(), fn = /\?/;
    K.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, K.parseXML = function(t) {
        var e, n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = new DOMParser, e = n.parseFromString(t, "text/xml")
        } catch (r) {
            e = void 0
        }
        return(!e || e.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + t), e
    };
    var dn = /#.*$/, pn = /([?&])_=[^&]*/, hn = /^(.*?):[ \t]*([^\r\n]*)$/gm, mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, gn = /^(?:GET|HEAD)$/, vn = /^\/\//, $n = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, yn = {}, bn = {}, wn = "*/".concat("*"), xn = t.location.href, kn = $n.exec(xn.toLowerCase()) || [];
    K.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: xn, type: "GET", isLocal: mn.test(kn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": wn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": K.parseJSON, "text xml": K.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function(t, e) {
            return e ? F(F(t, K.ajaxSettings), e) : F(K.ajaxSettings, t)
        }, ajaxPrefilter: P(yn), ajaxTransport: P(bn), ajax: function(t, e) {
            function n(t, e, n, a) {
                var u, c, v, $, b, x = e;
                2 !== y && (y = 2, s && clearTimeout(s), r = void 0, o = a || "", w.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, n && ($ = q(f, w, n)), $ = R(f, $, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (K.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (K.etag[i] = b)), 204 === t || "HEAD" === f.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = $.state, c = $.data, v = $.error, u = !v)) : (v = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", u ? h.resolveWith(d, [c, x, w]) : h.rejectWith(d, [w, x, v]), w.statusCode(g), g = void 0, l && p.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), m.fireWith(d, [w, x]), l && (p.trigger("ajaxComplete", [w, f]), --K.active || K.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var r, i, o, a, s, u, l, c, f = K.ajaxSetup({}, e), d = f.context || f, p = f.context && (d.nodeType || d.jquery) ? K(d) : K.event, h = K.Deferred(), m = K.Callbacks("once memory"), g = f.statusCode || {}, v = {}, $ = {}, y = 0, b = "canceled", w = {readyState: 0, getResponseHeader: function(t) {
                    var e;
                    if (2 === y) {
                        if (!a)
                            for (a = {}; e = hn.exec(o); )
                                a[e[1].toLowerCase()] = e[2];
                        e = a[t.toLowerCase()]
                    }
                    return null == e ? null : e
                }, getAllResponseHeaders: function() {
                    return 2 === y ? o : null
                }, setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return y || (t = $[n] = $[n] || t, v[t] = e), this
                }, overrideMimeType: function(t) {
                    return y || (f.mimeType = t), this
                }, statusCode: function(t) {
                    var e;
                    if (t)
                        if (2 > y)
                            for (e in t)
                                g[e] = [g[e], t[e]];
                        else
                            w.always(t[w.status]);
                    return this
                }, abort: function(t) {
                    var e = t || b;
                    return r && r.abort(e), n(0, e), this
                }};
            if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, f.url = ((t || f.url || xn) + "").replace(dn, "").replace(vn, kn[1] + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = K.trim(f.dataType || "*").toLowerCase().match(pe) || [""], null == f.crossDomain && (u = $n.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === kn[1] && u[2] === kn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (kn[3] || ("http:" === kn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = K.param(f.data, f.traditional)), I(yn, f, e, w), 2 === y)
                return w;
            l = K.event && f.global, l && 0 === K.active++ && K.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !gn.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (fn.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = pn.test(i) ? i.replace(pn, "$1_=" + cn++) : i + (fn.test(i) ? "&" : "?") + "_=" + cn++)), f.ifModified && (K.lastModified[i] && w.setRequestHeader("If-Modified-Since", K.lastModified[i]), K.etag[i] && w.setRequestHeader("If-None-Match", K.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + wn + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers)
                w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(d, w, f) === !1 || 2 === y))
                return w.abort();
            b = "abort";
            for (c in{success:1, error:1, complete:1})
                w[c](f[c]);
            if (r = I(bn, f, e, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    y = 1, r.send(v, n)
                } catch (x) {
                    if (!(2 > y))
                        throw x;
                    n(-1, x)
                }
            } else
                n(-1, "No Transport");
            return w
        }, getJSON: function(t, e, n) {
            return K.get(t, e, n, "json")
        }, getScript: function(t, e) {
            return K.get(t, void 0, e, "script")
        }}), K.each(["get", "post"], function(t, e) {
        K[e] = function(t, n, r, i) {
            return K.isFunction(n) && (i = i || r, r = n, n = void 0), K.ajax({url: t, type: e, dataType: i, data: n, success: r})
        }
    }), K._evalUrl = function(t) {
        return K.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, K.fn.extend({wrapAll: function(t) {
            var e;
            return K.isFunction(t) ? this.each(function(e) {
                K(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = K(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                return t
            }).append(this)), this)
        }, wrapInner: function(t) {
            return this.each(K.isFunction(t) ? function(e) {
                K(this).wrapInner(t.call(this, e))
            } : function() {
                var e = K(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        }, wrap: function(t) {
            var e = K.isFunction(t);
            return this.each(function(n) {
                K(this).wrapAll(e ? t.call(this, n) : t)
            })
        }, unwrap: function() {
            return this.parent().each(function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }).end()
        }}), K.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, K.expr.filters.visible = function(t) {
        return!K.expr.filters.hidden(t)
    };
    var Cn = /%20/g, Tn = /\[\]$/, Sn = /\r?\n/g, Dn = /^(?:submit|button|image|reset|file)$/i, En = /^(?:input|select|textarea|keygen)/i;
    K.param = function(t, e) {
        var n, r = [], i = function(t, e) {
            e = K.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(t) || t.jquery && !K.isPlainObject(t))
            K.each(t, function() {
                i(this.name, this.value)
            });
        else
            for (n in t)
                H(n, t[n], e, i);
        return r.join("&").replace(Cn, "+")
    }, K.fn.extend({serialize: function() {
            return K.param(this.serializeArray())
        }, serializeArray: function() {
            return this.map(function() {
                var t = K.prop(this, "elements");
                return t ? K.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !K(this).is(":disabled") && En.test(this.nodeName) && !Dn.test(t) && (this.checked || !Ce.test(t))
            }).map(function(t, e) {
                var n = K(this).val();
                return null == n ? null : K.isArray(n) ? K.map(n, function(t) {
                    return{name: e.name, value: t.replace(Sn, "\r\n")}
                }) : {name: e.name, value: n.replace(Sn, "\r\n")}
            }).get()
        }}), K.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {
        }
    };
    var _n = 0, Mn = {}, An = {0: 200, 1223: 204}, On = K.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Mn)
            Mn[t]()
    }), Z.cors = !!On && "withCredentials"in On, Z.ajax = On = !!On, K.ajaxTransport(function(t) {
        var e;
        return Z.cors || On && !t.crossDomain ? {send: function(n, r) {
                var i, o = t.xhr(), a = ++_n;
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (i in t.xhrFields)
                        o[i] = t.xhrFields[i];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n)
                    o.setRequestHeader(i, n[i]);
                e = function(t) {
                    return function() {
                        e && (delete Mn[a], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? r(o.status, o.statusText) : r(An[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = e(), o.onerror = e("error"), e = Mn[a] = e("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (s) {
                    if (e)
                        throw s
                }
            }, abort: function() {
                e && e()
            }} : void 0
    }), K.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function(t) {
                return K.globalEval(t), t
            }}}), K.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), K.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return{send: function(r, i) {
                    e = K("<script>").prop({async: !0, charset: t.scriptCharset, src: t.url}).on("load error", n = function(t) {
                        e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
                    }), J.head.appendChild(e[0])
                }, abort: function() {
                    n && n()
                }}
        }
    });
    var Nn = [], jn = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({jsonp: "callback", jsonpCallback: function() {
            var t = Nn.pop() || K.expando + "_" + cn++;
            return this[t] = !0, t
        }}), K.ajaxPrefilter("json jsonp", function(e, n, r) {
        var i, o, a, s = e.jsonp !== !1 && (jn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && jn.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(jn, "$1" + i) : e.jsonp !== !1 && (e.url += (fn.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return a || K.error(i + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[i], t[i] = function() {
            a = arguments
        }, r.always(function() {
            t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, Nn.push(i)), a && K.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), K.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || J;
        var r = ae.exec(t), i = !n && [];
        return r ? [e.createElement(r[1])] : (r = K.buildFragment([t], e, i), i && i.length && K(i).remove(), K.merge([], r.childNodes))
    };
    var Pn = K.fn.load;
    K.fn.load = function(t, e, n) {
        if ("string" != typeof t && Pn)
            return Pn.apply(this, arguments);
        var r, i, o, a = this, s = t.indexOf(" ");
        return s >= 0 && (r = K.trim(t.slice(s)), t = t.slice(0, s)), K.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), a.length > 0 && K.ajax({url: t, type: i, dataType: "html", data: e}).done(function(t) {
            o = arguments, a.html(r ? K("<div>").append(K.parseHTML(t)).find(r) : t)
        }).complete(n && function(t, e) {
            a.each(n, o || [t.responseText, e, t])
        }), this
    }, K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        K.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), K.expr.filters.animated = function(t) {
        return K.grep(K.timers, function(e) {
            return t === e.elem
        }).length
    };
    var In = t.document.documentElement;
    K.offset = {setOffset: function(t, e, n) {
            var r, i, o, a, s, u, l, c = K.css(t, "position"), f = K(t), d = {};
            "static" === c && (t.style.position = "relative"), s = f.offset(), o = K.css(t, "top"), u = K.css(t, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), K.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (d.top = e.top - s.top + a), null != e.left && (d.left = e.left - s.left + i), "using"in e ? e.using.call(t, d) : f.css(d)
        }}, K.fn.extend({offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    K.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0], i = {top: 0, left: 0}, o = r && r.ownerDocument;
            if (o)
                return e = o.documentElement, K.contains(e, r) ? (typeof r.getBoundingClientRect !== Te && (i = r.getBoundingClientRect()), n = L(o), {top: i.top + n.pageYOffset - e.clientTop, left: i.left + n.pageXOffset - e.clientLeft}) : i
        }, position: function() {
            if (this[0]) {
                var t, e, n = this[0], r = {top: 0, left: 0};
                return"fixed" === K.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), K.nodeName(t[0], "html") || (r = t.offset()), r.top += K.css(t[0], "borderTopWidth", !0), r.left += K.css(t[0], "borderLeftWidth", !0)), {top: e.top - r.top - K.css(n, "marginTop", !0), left: e.left - r.left - K.css(n, "marginLeft", !0)}
            }
        }, offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || In; t && !K.nodeName(t, "html") && "static" === K.css(t, "position"); )
                    t = t.offsetParent;
                return t || In
            })
        }}), K.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function(e, n) {
        var r = "pageYOffset" === n;
        K.fn[e] = function(i) {
            return ge(this, function(e, i, o) {
                var a = L(e);
                return void 0 === o ? a ? a[n] : e[i] : void(a ? a.scrollTo(r ? t.pageXOffset : o, r ? o : t.pageYOffset) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), K.each(["top", "left"], function(t, e) {
        K.cssHooks[e] = x(Z.pixelPosition, function(t, n) {
            return n ? (n = w(t, e), Ue.test(n) ? K(t).position()[e] + "px" : n) : void 0
        })
    }), K.each({Height: "height", Width: "width"}, function(t, e) {
        K.each({padding: "inner" + t, content: e, "": "outer" + t}, function(n, r) {
            K.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r), a = n || (r === !0 || i === !0 ? "margin" : "border");
                return ge(this, function(e, n, r) {
                    var i;
                    return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? K.css(e, n, a) : K.style(e, n, r, a)
                }, e, o ? r : void 0, o, null)
            }
        })
    }), K.fn.size = function() {
        return this.length
    }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return K
    });
    var Fn = t.jQuery, qn = t.$;
    return K.noConflict = function(e) {
        return t.$ === K && (t.$ = qn), e && t.jQuery === K && (t.jQuery = Fn), K
    }, typeof e === Te && (t.jQuery = t.$ = K), K
}), /**
 * @license AngularJS v1.3.15
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
        function(t, e, n) {
            "use strict";
            function r(t, e) {
                return e = e || Error, function() {
                    var n, r, i = arguments[0], o = "[" + (t ? t + ":" : "") + i + "] ", a = arguments[1], s = arguments;
                    for (n = o + a.replace(/\{\d+\}/g, function(t) {
                        var e = +t.slice(1, -1);
                        return e + 2 < s.length ? de(s[e + 2]) : t
                    }), n = n + "\nhttp://errors.angularjs.org/1.3.15/" + (t?t + "/":"") + i, r = 2; r < arguments.length; r++)
                        n = n + (2 == r ? "?" : "&") + "p" + (r - 2) + "=" + encodeURIComponent(de(arguments[r]));
                    return new e(n)
                }
            }
            function i(t) {
                if (null == t || T(t))
                    return!1;
                var e = t.length;
                return t.nodeType === yi && e ? !0 : b(t) || di(t) || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
            }
            function o(t, e, n) {
                var r, a;
                if (t)
                    if (k(t))
                        for (r in t)
                            "prototype" == r || "length" == r || "name" == r || t.hasOwnProperty && !t.hasOwnProperty(r) || e.call(n, t[r], r, t);
                    else if (di(t) || i(t)) {
                        var s = "object" != typeof t;
                        for (r = 0, a = t.length; a > r; r++)
                            (s || r in t) && e.call(n, t[r], r, t)
                    } else if (t.forEach && t.forEach !== o)
                        t.forEach(e, n, t);
                    else
                        for (r in t)
                            t.hasOwnProperty(r) && e.call(n, t[r], r, t);
                return t
            }
            function a(t) {
                return Object.keys(t).sort()
            }
            function s(t, e, n) {
                for (var r = a(t), i = 0; i < r.length; i++)
                    e.call(n, t[r[i]], r[i]);
                return r
            }
            function u(t) {
                return function(e, n) {
                    t(n, e)
                }
            }
            function l() {
                return++ci
            }
            function c(t, e) {
                e ? t.$$hashKey = e : delete t.$$hashKey
            }
            function f(t) {
                for (var e = t.$$hashKey, n = 1, r = arguments.length; r > n; n++) {
                    var i = arguments[n];
                    if (i)
                        for (var o = Object.keys(i), a = 0, s = o.length; s > a; a++) {
                            var u = o[a];
                            t[u] = i[u]
                        }
                }
                return c(t, e), t
            }
            function d(t) {
                return parseInt(t, 10)
            }
            function p(t, e) {
                return f(Object.create(t), e)
            }
            function h() {
            }
            function m(t) {
                return t
            }
            function g(t) {
                return function() {
                    return t
                }
            }
            function v(t) {
                return"undefined" == typeof t
            }
            function $(t) {
                return"undefined" != typeof t
            }
            function y(t) {
                return null !== t && "object" == typeof t
            }
            function b(t) {
                return"string" == typeof t
            }
            function w(t) {
                return"number" == typeof t
            }
            function x(t) {
                return"[object Date]" === si.call(t)
            }
            function k(t) {
                return"function" == typeof t
            }
            function C(t) {
                return"[object RegExp]" === si.call(t)
            }
            function T(t) {
                return t && t.window === t
            }
            function S(t) {
                return t && t.$evalAsync && t.$watch
            }
            function D(t) {
                return"[object File]" === si.call(t)
            }
            function E(t) {
                return"[object FormData]" === si.call(t)
            }
            function _(t) {
                return"[object Blob]" === si.call(t)
            }
            function M(t) {
                return"boolean" == typeof t
            }
            function A(t) {
                return t && k(t.then)
            }
            function O(t) {
                return!(!t || !(t.nodeName || t.prop && t.attr && t.find))
            }
            function N(t) {
                var e, n = {}, r = t.split(",");
                for (e = 0; e < r.length; e++)
                    n[r[e]] = !0;
                return n
            }
            function j(t) {
                return Xr(t.nodeName || t[0] && t[0].nodeName)
            }
            function P(t, e) {
                var n = t.indexOf(e);
                return n >= 0 && t.splice(n, 1), e
            }
            function I(t, e, n, r) {
                if (T(t) || S(t))
                    throw ui("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
                if (e) {
                    if (t === e)
                        throw ui("cpi", "Can't copy! Source and destination are identical.");
                    if (n = n || [], r = r || [], y(t)) {
                        var i = n.indexOf(t);
                        if (-1 !== i)
                            return r[i];
                        n.push(t), r.push(e)
                    }
                    var a;
                    if (di(t)) {
                        e.length = 0;
                        for (var s = 0; s < t.length; s++)
                            a = I(t[s], null, n, r), y(t[s]) && (n.push(t[s]), r.push(a)), e.push(a)
                    } else {
                        var u = e.$$hashKey;
                        di(e) ? e.length = 0 : o(e, function(t, n) {
                            delete e[n]
                        });
                        for (var l in t)
                            t.hasOwnProperty(l) && (a = I(t[l], null, n, r), y(t[l]) && (n.push(t[l]), r.push(a)), e[l] = a);
                        c(e, u)
                    }
                } else if (e = t, t)
                    if (di(t))
                        e = I(t, [], n, r);
                    else if (x(t))
                        e = new Date(t.getTime());
                    else if (C(t))
                        e = new RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), e.lastIndex = t.lastIndex;
                    else if (y(t)) {
                        var f = Object.create(Object.getPrototypeOf(t));
                        e = I(t, f, n, r)
                    }
                return e
            }
            function F(t, e) {
                if (di(t)) {
                    e = e || [];
                    for (var n = 0, r = t.length; r > n; n++)
                        e[n] = t[n]
                } else if (y(t)) {
                    e = e || {};
                    for (var i in t)
                        ("$" !== i.charAt(0) || "$" !== i.charAt(1)) && (e[i] = t[i])
                }
                return e || t
            }
            function q(t, e) {
                if (t === e)
                    return!0;
                if (null === t || null === e)
                    return!1;
                if (t !== t && e !== e)
                    return!0;
                var r, i, o, a = typeof t, s = typeof e;
                if (a == s && "object" == a) {
                    if (!di(t)) {
                        if (x(t))
                            return x(e) ? q(t.getTime(), e.getTime()) : !1;
                        if (C(t))
                            return C(e) ? t.toString() == e.toString() : !1;
                        if (S(t) || S(e) || T(t) || T(e) || di(e) || x(e) || C(e))
                            return!1;
                        o = {};
                        for (i in t)
                            if ("$" !== i.charAt(0) && !k(t[i])) {
                                if (!q(t[i], e[i]))
                                    return!1;
                                o[i] = !0
                            }
                        for (i in e)
                            if (!o.hasOwnProperty(i) && "$" !== i.charAt(0) && e[i] !== n && !k(e[i]))
                                return!1;
                        return!0
                    }
                    if (!di(e))
                        return!1;
                    if ((r = t.length) == e.length) {
                        for (i = 0; r > i; i++)
                            if (!q(t[i], e[i]))
                                return!1;
                        return!0
                    }
                }
                return!1
            }
            function R(t, e, n) {
                return t.concat(ii.call(e, n))
            }
            function H(t, e) {
                return ii.call(t, e || 0)
            }
            function L(t, e) {
                var n = arguments.length > 2 ? H(arguments, 2) : [];
                return!k(e) || e instanceof RegExp ? e : n.length ? function() {
                    return arguments.length ? e.apply(t, R(n, arguments, 0)) : e.apply(t, n)
                } : function() {
                    return arguments.length ? e.apply(t, arguments) : e.call(t)
                }
            }
            function U(t, r) {
                var i = r;
                return"string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? i = n : T(r) ? i = "$WINDOW" : r && e === r ? i = "$DOCUMENT" : S(r) && (i = "$SCOPE"), i
            }
            function V(t, e) {
                return"undefined" == typeof t ? n : (w(e) || (e = e ? 2 : null), JSON.stringify(t, U, e))
            }
            function Y(t) {
                return b(t) ? JSON.parse(t) : t
            }
            function B(t) {
                t = ei(t).clone();
                try {
                    t.empty()
                } catch (e) {
                }
                var n = ei("<div>").append(t).html();
                try {
                    return t[0].nodeType === bi ? Xr(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(t, e) {
                        return"<" + Xr(e)
                    })
                } catch (e) {
                    return Xr(n)
                }
            }
            function W(t) {
                try {
                    return decodeURIComponent(t)
                } catch (e) {
                }
            }
            function z(t) {
                var e, n, r = {};
                return o((t || "").split("&"), function(t) {
                    if (t && (e = t.replace(/\+/g, "%20").split("="), n = W(e[0]), $(n))) {
                        var i = $(e[1]) ? W(e[1]) : !0;
                        Zr.call(r, n) ? di(r[n]) ? r[n].push(i) : r[n] = [r[n], i] : r[n] = i
                    }
                }), r
            }
            function G(t) {
                var e = [];
                return o(t, function(t, n) {
                    di(t) ? o(t, function(t) {
                        e.push(Z(n, !0) + (t === !0 ? "" : "=" + Z(t, !0)))
                    }) : e.push(Z(n, !0) + (t === !0 ? "" : "=" + Z(t, !0)))
                }), e.length ? e.join("&") : ""
            }
            function X(t) {
                return Z(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
            }
            function Z(t, e) {
                return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+")
            }
            function J(t, e) {
                var n, r, i = gi.length;
                for (t = ei(t), r = 0; i > r; ++r)
                    if (n = gi[r] + e, b(n = t.attr(n)))
                        return n;
                return null
            }
            function Q(t, e) {
                var n, r, i = {};
                o(gi, function(e) {
                    var i = e + "app";
                    !n && t.hasAttribute && t.hasAttribute(i) && (n = t, r = t.getAttribute(i))
                }), o(gi, function(e) {
                    var i, o = e + "app";
                    !n && (i = t.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(o))
                }), n && (i.strictDi = null !== J(n, "strict-di"), e(n, r ? [r] : [], i))
            }
            function K(n, r, i) {
                y(i) || (i = {});
                var a = {strictDi: !1};
                i = f(a, i);
                var s = function() {
                    if (n = ei(n), n.injector()) {
                        var t = n[0] === e ? "document" : B(n);
                        throw ui("btstrpd", "App Already Bootstrapped with this Element '{0}'", t.replace(/</, "&lt;").replace(/>/, "&gt;"))
                    }
                    r = r || [], r.unshift(["$provide", function(t) {
                            t.value("$rootElement", n)
                        }]), i.debugInfoEnabled && r.push(["$compileProvider", function(t) {
                            t.debugInfoEnabled(!0)
                        }]), r.unshift("ng");
                    var o = Ye(r, i.strictDi);
                    return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(t, e, n, r) {
                            t.$apply(function() {
                                e.data("$injector", r), n(e)(t)
                            })
                        }]), o
                }, u = /^NG_ENABLE_DEBUG_INFO!/, l = /^NG_DEFER_BOOTSTRAP!/;
                return t && u.test(t.name) && (i.debugInfoEnabled = !0, t.name = t.name.replace(u, "")), t && !l.test(t.name) ? s() : (t.name = t.name.replace(l, ""), li.resumeBootstrap = function(t) {
                    return o(t, function(t) {
                        r.push(t)
                    }), s()
                }, void(k(li.resumeDeferredBootstrap) && li.resumeDeferredBootstrap()))
            }
            function te() {
                t.name = "NG_ENABLE_DEBUG_INFO!" + t.name, t.location.reload()
            }
            function ee(t) {
                var e = li.element(t).injector();
                if (!e)
                    throw ui("test", "no injector found for element argument to getTestability");
                return e.get("$$testability")
            }
            function ne(t, e) {
                return e = e || "_", t.replace(vi, function(t, n) {
                    return(n ? e : "") + t.toLowerCase()
                })
            }
            function re() {
                var e;
                $i || (ni = t.jQuery, ni && ni.fn.on ? (ei = ni, f(ni.fn, {scope: qi.scope, isolateScope: qi.isolateScope, controller: qi.controller, injector: qi.injector, inheritedData: qi.inheritedData}), e = ni.cleanData, ni.cleanData = function(t) {
                    var n;
                    if (fi)
                        fi = !1;
                    else
                        for (var r, i = 0; null != (r = t[i]); i++)
                            n = ni._data(r, "events"), n && n.$destroy && ni(r).triggerHandler("$destroy");
                    e(t)
                }) : ei = be, li.element = ei, $i = !0)
            }
            function ie(t, e, n) {
                if (!t)
                    throw ui("areq", "Argument '{0}' is {1}", e || "?", n || "required");
                return t
            }
            function oe(t, e, n) {
                return n && di(t) && (t = t[t.length - 1]), ie(k(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
            }
            function ae(t, e) {
                if ("hasOwnProperty" === t)
                    throw ui("badname", "hasOwnProperty is not a valid {0} name", e)
            }
            function se(t, e, n) {
                if (!e)
                    return t;
                for (var r, i = e.split("."), o = t, a = i.length, s = 0; a > s; s++)
                    r = i[s], t && (t = (o = t)[r]);
                return!n && k(t) ? L(o, t) : t
            }
            function ue(t) {
                var e = t[0], n = t[t.length - 1], r = [e];
                do {
                    if (e = e.nextSibling, !e)
                        break;
                    r.push(e)
                } while (e !== n);
                return ei(r)
            }
            function le() {
                return Object.create(null)
            }
            function ce(t) {
                function e(t, e, n) {
                    return t[e] || (t[e] = n())
                }
                var n = r("$injector"), i = r("ng"), o = e(t, "angular", Object);
                return o.$$minErr = o.$$minErr || r, e(o, "module", function() {
                    var t = {};
                    return function(r, o, a) {
                        var s = function(t, e) {
                            if ("hasOwnProperty" === t)
                                throw i("badname", "hasOwnProperty is not a valid {0} name", e)
                        };
                        return s(r, "module"), o && t.hasOwnProperty(r) && (t[r] = null), e(t, r, function() {
                            function t(t, n, r, i) {
                                return i || (i = e), function() {
                                    return i[r || "push"]([t, n, arguments]), l
                                }
                            }
                            if (!o)
                                throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
                            var e = [], i = [], s = [], u = t("$injector", "invoke", "push", i), l = {_invokeQueue: e, _configBlocks: i, _runBlocks: s, requires: o, name: r, provider: t("$provide", "provider"), factory: t("$provide", "factory"), service: t("$provide", "service"), value: t("$provide", "value"), constant: t("$provide", "constant", "unshift"), animation: t("$animateProvider", "register"), filter: t("$filterProvider", "register"), controller: t("$controllerProvider", "register"), directive: t("$compileProvider", "directive"), config: u, run: function(t) {
                                    return s.push(t), this
                                }};
                            return a && u(a), l
                        })
                    }
                })
            }
            function fe(t) {
                var e = [];
                return JSON.stringify(t, function(t, n) {
                    if (n = U(t, n), y(n)) {
                        if (e.indexOf(n) >= 0)
                            return"<<already seen>>";
                        e.push(n)
                    }
                    return n
                })
            }
            function de(t) {
                return"function" == typeof t ? t.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof t ? "undefined" : "string" != typeof t ? fe(t) : t
            }
            function pe(e) {
                f(e, {bootstrap: K, copy: I, extend: f, equals: q, element: ei, forEach: o, injector: Ye, noop: h, bind: L, toJson: V, fromJson: Y, identity: m, isUndefined: v, isDefined: $, isString: b, isFunction: k, isObject: y, isNumber: w, isElement: O, isArray: di, version: Ci, isDate: x, lowercase: Xr, uppercase: Jr, callbacks: {counter: 0}, getTestability: ee, $$minErr: r, $$csp: mi, reloadWithDebugInfo: te}), ri = ce(t);
                try {
                    ri("ngLocale")
                } catch (n) {
                    ri("ngLocale", []).provider("$locale", vn)
                }
                ri("ng", ["ngLocale"], ["$provide", function(t) {
                        t.provider({$$sanitizeUri: Xn}), t.provider("$compile", Je).directive({a: Ao, input: Go, textarea: Go, form: Io, script: Fa, select: Ha, style: Ua, option: La, ngBind: Jo, ngBindHtml: Ko, ngBindTemplate: Qo, ngClass: ea, ngClassEven: ra, ngClassOdd: na, ngCloak: ia, ngController: oa, ngForm: Fo, ngHide: Aa, ngIf: ua, ngInclude: la, ngInit: fa, ngNonBindable: Ta, ngPluralize: Sa, ngRepeat: Da, ngShow: Ma, ngStyle: Oa, ngSwitch: Na, ngSwitchWhen: ja, ngSwitchDefault: Pa, ngOptions: Ra, ngTransclude: Ia, ngModel: xa, ngList: da, ngChange: ta, pattern: Ya, ngPattern: Ya, required: Va, ngRequired: Va, minlength: Wa, ngMinlength: Wa, maxlength: Ba, ngMaxlength: Ba, ngValue: Zo, ngModelOptions: Ca}).directive({ngInclude: ca}).directive(Oo).directive(aa), t.provider({$anchorScroll: Be, $animate: Gi, $browser: Ge, $cacheFactory: Xe, $controller: en, $document: nn, $exceptionHandler: rn, $filter: sr, $interpolate: mn, $interval: gn, $http: fn, $httpBackend: pn, $location: An, $log: On, $parse: Vn, $rootScope: Gn, $q: Yn, $$q: Bn, $sce: Kn, $sceDelegate: Qn, $sniffer: tr, $templateCache: Ze, $templateRequest: er, $$testability: nr, $timeout: rr, $window: ar, $$rAF: zn, $$asyncCallback: We, $$jqLite: Re})
                    }])
            }
            function he() {
                return++Si
            }
            function me(t) {
                return t.replace(_i, function(t, e, n, r) {
                    return r ? n.toUpperCase() : n
                }).replace(Mi, "Moz$1")
            }
            function ge(t) {
                return!ji.test(t)
            }
            function ve(t) {
                var e = t.nodeType;
                return e === yi || !e || e === xi
            }
            function $e(t, e) {
                var n, r, i, a, s = e.createDocumentFragment(), u = [];
                if (ge(t))
                    u.push(e.createTextNode(t));
                else {
                    for (n = n || s.appendChild(e.createElement("div")), r = (Pi.exec(t) || ["", ""])[1].toLowerCase(), i = Fi[r] || Fi._default, n.innerHTML = i[1] + t.replace(Ii, "<$1></$2>") + i[2], a = i[0]; a--; )
                        n = n.lastChild;
                    u = R(u, n.childNodes), n = s.firstChild, n.textContent = ""
                }
                return s.textContent = "", s.innerHTML = "", o(u, function(t) {
                    s.appendChild(t)
                }), s
            }
            function ye(t, n) {
                n = n || e;
                var r;
                return(r = Ni.exec(t)) ? [n.createElement(r[1])] : (r = $e(t, n)) ? r.childNodes : []
            }
            function be(t) {
                if (t instanceof be)
                    return t;
                var e;
                if (b(t) && (t = pi(t), e = !0), !(this instanceof be)) {
                    if (e && "<" != t.charAt(0))
                        throw Oi("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
                    return new be(t)
                }
                e ? Me(this, ye(t)) : Me(this, t)
            }
            function we(t) {
                return t.cloneNode(!0)
            }
            function xe(t, e) {
                if (e || Ce(t), t.querySelectorAll)
                    for (var n = t.querySelectorAll("*"), r = 0, i = n.length; i > r; r++)
                        Ce(n[r])
            }
            function ke(t, e, n, r) {
                if ($(r))
                    throw Oi("offargs", "jqLite#off() does not support the `selector` argument");
                var i = Te(t), a = i && i.events, s = i && i.handle;
                if (s)
                    if (e)
                        o(e.split(" "), function(e) {
                            if ($(n)) {
                                var r = a[e];
                                if (P(r || [], n), r && r.length > 0)
                                    return
                            }
                            Ei(t, e, s), delete a[e]
                        });
                    else
                        for (e in a)
                            "$destroy" !== e && Ei(t, e, s), delete a[e]
            }
            function Ce(t, e) {
                var r = t.ng339, i = r && Ti[r];
                if (i) {
                    if (e)
                        return void delete i.data[e];
                    i.handle && (i.events.$destroy && i.handle({}, "$destroy"), ke(t)), delete Ti[r], t.ng339 = n
                }
            }
            function Te(t, e) {
                var r = t.ng339, i = r && Ti[r];
                return e && !i && (t.ng339 = r = he(), i = Ti[r] = {events: {}, data: {}, handle: n}), i
            }
            function Se(t, e, n) {
                if (ve(t)) {
                    var r = $(n), i = !r && e && !y(e), o = !e, a = Te(t, !i), s = a && a.data;
                    if (r)
                        s[e] = n;
                    else {
                        if (o)
                            return s;
                        if (i)
                            return s && s[e];
                        f(s, e)
                    }
                }
            }
            function De(t, e) {
                return t.getAttribute ? (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") > -1 : !1
            }
            function Ee(t, e) {
                e && t.setAttribute && o(e.split(" "), function(e) {
                    t.setAttribute("class", pi((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + pi(e) + " ", " ")))
                })
            }
            function _e(t, e) {
                if (e && t.setAttribute) {
                    var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                    o(e.split(" "), function(t) {
                        t = pi(t), -1 === n.indexOf(" " + t + " ") && (n += t + " ")
                    }), t.setAttribute("class", pi(n))
                }
            }
            function Me(t, e) {
                if (e)
                    if (e.nodeType)
                        t[t.length++] = e;
                    else {
                        var n = e.length;
                        if ("number" == typeof n && e.window !== e) {
                            if (n)
                                for (var r = 0; n > r; r++)
                                    t[t.length++] = e[r]
                        } else
                            t[t.length++] = e
                    }
            }
            function Ae(t, e) {
                return Oe(t, "$" + (e || "ngController") + "Controller")
            }
            function Oe(t, e, r) {
                t.nodeType == xi && (t = t.documentElement);
                for (var i = di(e) ? e : [e]; t; ) {
                    for (var o = 0, a = i.length; a > o; o++)
                        if ((r = ei.data(t, i[o])) !== n)
                            return r;
                    t = t.parentNode || t.nodeType === ki && t.host
                }
            }
            function Ne(t) {
                for (xe(t, !0); t.firstChild; )
                    t.removeChild(t.firstChild)
            }
            function je(t, e) {
                e || xe(t);
                var n = t.parentNode;
                n && n.removeChild(t)
            }
            function Pe(e, n) {
                n = n || t, "complete" === n.document.readyState ? n.setTimeout(e) : ei(n).on("load", e)
            }
            function Ie(t, e) {
                var n = Ri[e.toLowerCase()];
                return n && Hi[j(t)] && n
            }
            function Fe(t, e) {
                var n = t.nodeName;
                return("INPUT" === n || "TEXTAREA" === n) && Li[e]
            }
            function qe(t, e) {
                var n = function(n, r) {
                    n.isDefaultPrevented = function() {
                        return n.defaultPrevented
                    };
                    var i = e[r || n.type], o = i ? i.length : 0;
                    if (o) {
                        if (v(n.immediatePropagationStopped)) {
                            var a = n.stopImmediatePropagation;
                            n.stopImmediatePropagation = function() {
                                n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
                            }
                        }
                        n.isImmediatePropagationStopped = function() {
                            return n.immediatePropagationStopped === !0
                        }, o > 1 && (i = F(i));
                        for (var s = 0; o > s; s++)
                            n.isImmediatePropagationStopped() || i[s].call(t, n)
                    }
                };
                return n.elem = t, n
            }
            function Re() {
                this.$get = function() {
                    return f(be, {hasClass: function(t, e) {
                            return t.attr && (t = t[0]), De(t, e)
                        }, addClass: function(t, e) {
                            return t.attr && (t = t[0]), _e(t, e)
                        }, removeClass: function(t, e) {
                            return t.attr && (t = t[0]), Ee(t, e)
                        }})
                }
            }
            function He(t, e) {
                var n = t && t.$$hashKey;
                if (n)
                    return"function" == typeof n && (n = t.$$hashKey()), n;
                var r = typeof t;
                return n = "function" == r || "object" == r && null !== t ? t.$$hashKey = r + ":" + (e || l)() : r + ":" + t
            }
            function Le(t, e) {
                if (e) {
                    var n = 0;
                    this.nextUid = function() {
                        return++n
                    }
                }
                o(t, this.put, this)
            }
            function Ue(t) {
                var e = t.toString().replace(Bi, ""), n = e.match(Ui);
                return n ? "function(" + (n[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
            }
            function Ve(t, e, n) {
                var r, i, a, s;
                if ("function" == typeof t) {
                    if (!(r = t.$inject)) {
                        if (r = [], t.length) {
                            if (e)
                                throw b(n) && n || (n = t.name || Ue(t)), Wi("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                            i = t.toString().replace(Bi, ""), a = i.match(Ui), o(a[1].split(Vi), function(t) {
                                t.replace(Yi, function(t, e, n) {
                                    r.push(n)
                                })
                            })
                        }
                        t.$inject = r
                    }
                } else
                    di(t) ? (s = t.length - 1, oe(t[s], "fn"), r = t.slice(0, s)) : oe(t, "fn", !0);
                return r
            }
            function Ye(t, e) {
                function r(t) {
                    return function(e, n) {
                        return y(e) ? void o(e, u(t)) : t(e, n)
                    }
                }
                function i(t, e) {
                    if (ae(t, "service"), (k(e) || di(e)) && (e = S.instantiate(e)), !e.$get)
                        throw Wi("pget", "Provider '{0}' must define $get factory method.", t);
                    return T[t + w] = e
                }
                function a(t, e) {
                    return function() {
                        var n = E.invoke(e, this);
                        if (v(n))
                            throw Wi("undef", "Provider '{0}' must return a value from $get factory method.", t);
                        return n
                    }
                }
                function s(t, e, n) {
                    return i(t, {$get: n !== !1 ? a(t, e) : e})
                }
                function l(t, e) {
                    return s(t, ["$injector", function(t) {
                            return t.instantiate(e)
                        }])
                }
                function c(t, e) {
                    return s(t, g(e), !1)
                }
                function f(t, e) {
                    ae(t, "constant"), T[t] = e, D[t] = e
                }
                function d(t, e) {
                    var n = S.get(t + w), r = n.$get;
                    n.$get = function() {
                        var t = E.invoke(r, n);
                        return E.invoke(e, null, {$delegate: t})
                    }
                }
                function p(t) {
                    var e, n = [];
                    return o(t, function(t) {
                        function r(t) {
                            var e, n;
                            for (e = 0, n = t.length; n > e; e++) {
                                var r = t[e], i = S.get(r[0]);
                                i[r[1]].apply(i, r[2])
                            }
                        }
                        if (!C.get(t)) {
                            C.put(t, !0);
                            try {
                                b(t) ? (e = ri(t), n = n.concat(p(e.requires)).concat(e._runBlocks), r(e._invokeQueue), r(e._configBlocks)) : k(t) ? n.push(S.invoke(t)) : di(t) ? n.push(S.invoke(t)) : oe(t, "module")
                            } catch (i) {
                                throw di(t) && (t = t[t.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), Wi("modulerr", "Failed to instantiate module {0} due to:\n{1}", t, i.stack || i.message || i)
                            }
                        }
                    }), n
                }
                function m(t, n) {
                    function r(e, r) {
                        if (t.hasOwnProperty(e)) {
                            if (t[e] === $)
                                throw Wi("cdep", "Circular dependency found: {0}", e + " <- " + x.join(" <- "));
                            return t[e]
                        }
                        try {
                            return x.unshift(e), t[e] = $, t[e] = n(e, r)
                        } catch (i) {
                            throw t[e] === $ && delete t[e], i
                        } finally {
                            x.shift()
                        }
                    }
                    function i(t, n, i, o) {
                        "string" == typeof i && (o = i, i = null);
                        var a, s, u, l = [], c = Ye.$$annotate(t, e, o);
                        for (s = 0, a = c.length; a > s; s++) {
                            if (u = c[s], "string" != typeof u)
                                throw Wi("itkn", "Incorrect injection token! Expected service name as string, got {0}", u);
                            l.push(i && i.hasOwnProperty(u) ? i[u] : r(u, o))
                        }
                        return di(t) && (t = t[a]), t.apply(n, l)
                    }
                    function o(t, e, n) {
                        var r = Object.create((di(t) ? t[t.length - 1] : t).prototype || null), o = i(t, r, e, n);
                        return y(o) || k(o) ? o : r
                    }
                    return{invoke: i, instantiate: o, get: r, annotate: Ye.$$annotate, has: function(e) {
                            return T.hasOwnProperty(e + w) || t.hasOwnProperty(e)
                        }}
                }
                e = e === !0;
                var $ = {}, w = "Provider", x = [], C = new Le([], !0), T = {$provide: {provider: r(i), factory: r(s), service: r(l), value: r(c), constant: r(f), decorator: d}}, S = T.$injector = m(T, function(t, e) {
                    throw li.isString(e) && x.push(e), Wi("unpr", "Unknown provider: {0}", x.join(" <- "))
                }), D = {}, E = D.$injector = m(D, function(t, e) {
                    var r = S.get(t + w, e);
                    return E.invoke(r.$get, r, n, t)
                });
                return o(p(t), function(t) {
                    E.invoke(t || h)
                }), E
            }
            function Be() {
                var t = !0;
                this.disableAutoScrolling = function() {
                    t = !1
                }, this.$get = ["$window", "$location", "$rootScope", function(e, n, r) {
                        function i(t) {
                            var e = null;
                            return Array.prototype.some.call(t, function(t) {
                                return"a" === j(t) ? (e = t, !0) : void 0
                            }), e
                        }
                        function o() {
                            var t = s.yOffset;
                            if (k(t))
                                t = t();
                            else if (O(t)) {
                                var n = t[0], r = e.getComputedStyle(n);
                                t = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
                            } else
                                w(t) || (t = 0);
                            return t
                        }
                        function a(t) {
                            if (t) {
                                t.scrollIntoView();
                                var n = o();
                                if (n) {
                                    var r = t.getBoundingClientRect().top;
                                    e.scrollBy(0, r - n)
                                }
                            } else
                                e.scrollTo(0, 0)
                        }
                        function s() {
                            var t, e = n.hash();
                            e ? (t = u.getElementById(e)) ? a(t) : (t = i(u.getElementsByName(e))) ? a(t) : "top" === e && a(null) : a(null)
                        }
                        var u = e.document;
                        return t && r.$watch(function() {
                            return n.hash()
                        }, function(t, e) {
                            (t !== e || "" !== t) && Pe(function() {
                                r.$evalAsync(s)
                            })
                        }), s
                    }]
            }
            function We() {
                this.$get = ["$$rAF", "$timeout", function(t, e) {
                        return t.supported ? function(e) {
                            return t(e)
                        } : function(t) {
                            return e(t, 0, !1)
                        }
                    }]
            }
            function ze(t, e, r, i) {
                function a(t) {
                    try {
                        t.apply(null, H(arguments, 1))
                    } finally {
                        if (C--, 0 === C)
                            for (; T.length; )
                                try {
                                    T.pop()()
                                } catch (e) {
                                    r.error(e)
                                }
                    }
                }
                function s(t) {
                    var e = t.indexOf("#");
                    return-1 === e ? "" : t.substr(e + 1)
                }
                function u(t, e) {
                    !function n() {
                        o(D, function(t) {
                            t()
                        }), S = e(n, t)
                    }()
                }
                function l() {
                    f(), d()
                }
                function c() {
                    try {
                        return y.state
                    } catch (t) {
                    }
                }
                function f() {
                    E = c(), E = v(E) ? null : E, q(E, P) && (E = P), P = E
                }
                function d() {
                    (M !== m.url() || _ !== E) && (M = m.url(), _ = E, o(N, function(t) {
                        t(m.url(), E)
                    }))
                }
                function p(t) {
                    try {
                        return decodeURIComponent(t)
                    } catch (e) {
                        return t
                    }
                }
                var m = this, g = e[0], $ = t.location, y = t.history, w = t.setTimeout, x = t.clearTimeout, k = {};
                m.isMock = !1;
                var C = 0, T = [];
                m.$$completeOutstandingRequest = a, m.$$incOutstandingRequestCount = function() {
                    C++
                }, m.notifyWhenNoOutstandingRequests = function(t) {
                    o(D, function(t) {
                        t()
                    }), 0 === C ? t() : T.push(t)
                };
                var S, D = [];
                m.addPollFn = function(t) {
                    return v(S) && u(100, w), D.push(t), t
                };
                var E, _, M = $.href, A = e.find("base"), O = null;
                f(), _ = E, m.url = function(e, n, r) {
                    if (v(r) && (r = null), $ !== t.location && ($ = t.location), y !== t.history && (y = t.history), e) {
                        var o = _ === r;
                        if (M === e && (!i.history || o))
                            return m;
                        var a = M && xn(M) === xn(e);
                        return M = e, _ = r, !i.history || a && o ? (a || (O = e), n ? $.replace(e) : a ? $.hash = s(e) : $.href = e) : (y[n ? "replaceState" : "pushState"](r, "", e), f(), _ = E), m
                    }
                    return O || $.href.replace(/%27/g, "'")
                }, m.state = function() {
                    return E
                };
                var N = [], j = !1, P = null;
                m.onUrlChange = function(e) {
                    return j || (i.history && ei(t).on("popstate", l), ei(t).on("hashchange", l), j = !0), N.push(e), e
                }, m.$$checkUrlChange = d, m.baseHref = function() {
                    var t = A.attr("href");
                    return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
                };
                var I = {}, F = "", R = m.baseHref();
                m.cookies = function(t, e) {
                    var i, o, a, s, u;
                    if (!t) {
                        if (g.cookie !== F)
                            for (F = g.cookie, o = F.split("; "), I = {}, s = 0; s < o.length; s++)
                                a = o[s], u = a.indexOf("="), u > 0 && (t = p(a.substring(0, u)), I[t] === n && (I[t] = p(a.substring(u + 1))));
                        return I
                    }
                    e === n ? g.cookie = encodeURIComponent(t) + "=;path=" + R + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : b(e) && (i = (g.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + ";path=" + R).length + 1, i > 4096 && r.warn("Cookie '" + t + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!"))
                }, m.defer = function(t, e) {
                    var n;
                    return C++, n = w(function() {
                        delete k[n], a(t)
                    }, e || 0), k[n] = !0, n
                }, m.defer.cancel = function(t) {
                    return k[t] ? (delete k[t], x(t), a(h), !0) : !1
                }
            }
            function Ge() {
                this.$get = ["$window", "$log", "$sniffer", "$document", function(t, e, n, r) {
                        return new ze(t, r, e, n)
                    }]
            }
            function Xe() {
                this.$get = function() {
                    function t(t, n) {
                        function i(t) {
                            t != d && (p ? p == t && (p = t.n) : p = t, o(t.n, t.p), o(t, d), d = t, d.n = null)
                        }
                        function o(t, e) {
                            t != e && (t && (t.p = e), e && (e.n = t))
                        }
                        if (t in e)
                            throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
                        var a = 0, s = f({}, n, {id: t}), u = {}, l = n && n.capacity || Number.MAX_VALUE, c = {}, d = null, p = null;
                        return e[t] = {put: function(t, e) {
                                if (l < Number.MAX_VALUE) {
                                    var n = c[t] || (c[t] = {key: t});
                                    i(n)
                                }
                                if (!v(e))
                                    return t in u || a++, u[t] = e, a > l && this.remove(p.key), e
                            }, get: function(t) {
                                if (l < Number.MAX_VALUE) {
                                    var e = c[t];
                                    if (!e)
                                        return;
                                    i(e)
                                }
                                return u[t]
                            }, remove: function(t) {
                                if (l < Number.MAX_VALUE) {
                                    var e = c[t];
                                    if (!e)
                                        return;
                                    e == d && (d = e.p), e == p && (p = e.n), o(e.n, e.p), delete c[t]
                                }
                                delete u[t], a--
                            }, removeAll: function() {
                                u = {}, a = 0, c = {}, d = p = null
                            }, destroy: function() {
                                u = null, s = null, c = null, delete e[t]
                            }, info: function() {
                                return f({}, s, {size: a})
                            }}
                    }
                    var e = {};
                    return t.info = function() {
                        var t = {};
                        return o(e, function(e, n) {
                            t[n] = e.info()
                        }), t
                    }, t.get = function(t) {
                        return e[t]
                    }, t
                }
            }
            function Ze() {
                this.$get = ["$cacheFactory", function(t) {
                        return t("templates")
                    }]
            }
            function Je(t, r) {
                function i(t, e) {
                    var n = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, r = {};
                    return o(t, function(t, i) {
                        var o = t.match(n);
                        if (!o)
                            throw Xi("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", e, i, t);
                        r[i] = {mode: o[1][0], collection: "*" === o[2], optional: "?" === o[3], attrName: o[4] || i}
                    }), r
                }
                var a = {}, s = "Directive", l = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, c = /(([\w\-]+)(?:\:([^;]+))?;?)/, d = N("ngSrc,ngSrcset,src,srcset"), v = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, w = /^(on[a-z]+|formaction)$/;
                this.directive = function C(e, n) {
                    return ae(e, "directive"), b(e) ? (ie(n, "directiveFactory"), a.hasOwnProperty(e) || (a[e] = [], t.factory(e + s, ["$injector", "$exceptionHandler", function(t, n) {
                            var r = [];
                            return o(a[e], function(o, a) {
                                try {
                                    var s = t.invoke(o);
                                    k(s) ? s = {compile: g(s)} : !s.compile && s.link && (s.compile = g(s.link)), s.priority = s.priority || 0, s.index = a, s.name = s.name || e, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "EA", y(s.scope) && (s.$$isolateBindings = i(s.scope, s.name)), r.push(s)
                                } catch (u) {
                                    n(u)
                                }
                            }), r
                        }])), a[e].push(n)) : o(e, u(C)), this
                }, this.aHrefSanitizationWhitelist = function(t) {
                    return $(t) ? (r.aHrefSanitizationWhitelist(t), this) : r.aHrefSanitizationWhitelist()
                }, this.imgSrcSanitizationWhitelist = function(t) {
                    return $(t) ? (r.imgSrcSanitizationWhitelist(t), this) : r.imgSrcSanitizationWhitelist()
                };
                var x = !0;
                this.debugInfoEnabled = function(t) {
                    return $(t) ? (x = t, this) : x
                }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(t, r, i, u, g, $, C, T, D, E, _) {
                        function M(t, e) {
                            try {
                                t.addClass(e)
                            } catch (n) {
                            }
                        }
                        function A(t, e, n, r, i) {
                            t instanceof ei || (t = ei(t)), o(t, function(e, n) {
                                e.nodeType == bi && e.nodeValue.match(/\S+/) && (t[n] = ei(e).wrap("<span></span>").parent()[0])
                            });
                            var a = N(t, e, t, n, r, i);
                            A.$$addScopeClass(t);
                            var s = null;
                            return function(e, n, r) {
                                ie(e, "scope"), r = r || {};
                                var i = r.parentBoundTranscludeFn, o = r.transcludeControllers, u = r.futureParentElement;
                                i && i.$$boundTransclude && (i = i.$$boundTransclude), s || (s = O(u));
                                var l;
                                if (l = "html" !== s ? ei(Q(s, ei("<div>").append(t).html())) : n ? qi.clone.call(t) : t, o)
                                    for (var c in o)
                                        l.data("$" + c + "Controller", o[c].instance);
                                return A.$$addScopeInfo(l, e), n && n(l, e), a && a(e, l, l, i), l
                            }
                        }
                        function O(t) {
                            var e = t && t[0];
                            return e && "foreignobject" !== j(e) && e.toString().match(/SVG/) ? "svg" : "html"
                        }
                        function N(t, e, r, i, o, a) {
                            function s(t, r, i, o) {
                                var a, s, u, l, c, f, d, p, g;
                                if (h) {
                                    var v = r.length;
                                    for (g = new Array(v), c = 0; c < m.length; c += 3)
                                        d = m[c], g[d] = r[d]
                                } else
                                    g = r;
                                for (c = 0, f = m.length; f > c; )
                                    u = g[m[c++]], a = m[c++], s = m[c++], a ? (a.scope ? (l = t.$new(), A.$$addScopeInfo(ei(u), l)) : l = t, p = a.transcludeOnThisElement ? I(t, a.transclude, o, a.elementTranscludeOnThisElement) : !a.templateOnThisElement && o ? o : !o && e ? I(t, e) : null, a(s, l, u, i, p)) : s && s(t, u.childNodes, n, o)
                            }
                            for (var u, l, c, f, d, p, h, m = [], g = 0; g < t.length; g++)
                                u = new ae, l = F(t[g], [], u, 0 === g ? i : n, o), c = l.length ? U(l, t[g], u, e, r, null, [], [], a) : null, c && c.scope && A.$$addScopeClass(u.$$element), d = c && c.terminal || !(f = t[g].childNodes) || !f.length ? null : N(f, c ? (c.transcludeOnThisElement || !c.templateOnThisElement) && c.transclude : e), (c || d) && (m.push(g, c, d), p = !0, h = h || c), a = null;
                            return p ? s : null
                        }
                        function I(t, e, n) {
                            var r = function(r, i, o, a, s) {
                                return r || (r = t.$new(!1, s), r.$$transcluded = !0), e(r, i, {parentBoundTranscludeFn: n, transcludeControllers: o, futureParentElement: a})
                            };
                            return r
                        }
                        function F(t, e, n, r, i) {
                            var o, a, s = t.nodeType, u = n.$attr;
                            switch (s) {
                                case yi:
                                    Y(e, Qe(j(t)), "E", r, i);
                                    for (var f, d, p, h, m, g, v = t.attributes, $ = 0, w = v && v.length; w > $; $++) {
                                        var x = !1, k = !1;
                                        f = v[$], d = f.name, m = pi(f.value), h = Qe(d), (g = fe.test(h)) && (d = d.replace(Zi, "").substr(8).replace(/_(.)/g, function(t, e) {
                                            return e.toUpperCase()
                                        }));
                                        var C = h.replace(/(Start|End)$/, "");
                                        W(C) && h === C + "Start" && (x = d, k = d.substr(0, d.length - 5) + "end", d = d.substr(0, d.length - 6)), p = Qe(d.toLowerCase()), u[p] = d, (g || !n.hasOwnProperty(p)) && (n[p] = m, Ie(t, p) && (n[p] = !0)), te(t, e, m, p, g), Y(e, p, "A", r, i, x, k)
                                    }
                                    if (a = t.className, y(a) && (a = a.animVal), b(a) && "" !== a)
                                        for (; o = c.exec(a); )
                                            p = Qe(o[2]), Y(e, p, "C", r, i) && (n[p] = pi(o[3])), a = a.substr(o.index + o[0].length);
                                    break;
                                case bi:
                                    J(e, t.nodeValue);
                                    break;
                                case wi:
                                    try {
                                        o = l.exec(t.nodeValue), o && (p = Qe(o[1]), Y(e, p, "M", r, i) && (n[p] = pi(o[2])))
                                    } catch (T) {
                                    }
                            }
                            return e.sort(X), e
                        }
                        function R(t, e, n) {
                            var r = [], i = 0;
                            if (e && t.hasAttribute && t.hasAttribute(e)) {
                                do {
                                    if (!t)
                                        throw Xi("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", e, n);
                                    t.nodeType == yi && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling
                                } while (i > 0)
                            } else
                                r.push(t);
                            return ei(r)
                        }
                        function L(t, e, n) {
                            return function(r, i, o, a, s) {
                                return i = R(i[0], e, n), t(r, i, o, a, s)
                            }
                        }
                        function U(t, a, s, u, l, c, f, d, p) {
                            function h(t, e, n, r) {
                                t && (n && (t = L(t, n, r)), t.require = T.require, t.directiveName = D, (j === T || T.$$isolateScope) && (t = re(t, {isolateScope: !0})), f.push(t)), e && (n && (e = L(e, n, r)), e.require = T.require, e.directiveName = D, (j === T || T.$$isolateScope) && (e = re(e, {isolateScope: !0})), d.push(e))
                            }
                            function m(t, e, n, r) {
                                var i, a, s = "data", u = !1, l = n;
                                if (b(e)) {
                                    if (a = e.match(v), e = e.substring(a[0].length), a[3] && (a[1] ? a[3] = null : a[1] = a[3]), "^" === a[1] ? s = "inheritedData" : "^^" === a[1] && (s = "inheritedData", l = n.parent()), "?" === a[2] && (u = !0), i = null, r && "data" === s && (i = r[e]) && (i = i.instance), i = i || l[s]("$" + e + "Controller"), !i && !u)
                                        throw Xi("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", e, t);
                                    return i || null
                                }
                                return di(e) && (i = [], o(e, function(e) {
                                    i.push(m(t, e, n, r))
                                })), i
                            }
                            function w(t, e, i, u, l) {
                                function c(t, e, r) {
                                    var i;
                                    return S(t) || (r = e, e = t, t = n), W && (i = w), r || (r = W ? k.parent() : k), l(t, e, i, r, _)
                                }
                                var p, h, v, y, b, w, x, k, T;
                                if (a === i ? (T = s, k = s.$$element) : (k = ei(i), T = new ae(k, s)), j && (b = e.$new(!0)), l && (x = c, x.$$boundTransclude = l), N && (C = {}, w = {}, o(N, function(t) {
                                    var n, r = {$scope: t === j || t.$$isolateScope ? b : e, $element: k, $attrs: T, $transclude: x};
                                    y = t.controller, "@" == y && (y = T[t.name]), n = $(y, r, !0, t.controllerAs), w[t.name] = n, W || k.data("$" + t.name + "Controller", n.instance), C[t.name] = n
                                })), j) {
                                    A.$$addScopeInfo(k, b, !0, !(P && (P === j || P === j.$$originalDirective))), A.$$addScopeClass(k, !0);
                                    var D = C && C[j.name], E = b;
                                    D && D.identifier && j.bindToController === !0 && (E = D.instance), o(b.$$isolateBindings = j.$$isolateBindings, function(t, n) {
                                        var i, o, a, s, u = t.attrName, l = t.optional, c = t.mode;
                                        switch (c) {
                                            case"@":
                                                T.$observe(u, function(t) {
                                                    E[n] = t
                                                }), T.$$observers[u].$$scope = e, T[u] && (E[n] = r(T[u])(e));
                                                break;
                                            case"=":
                                                if (l && !T[u])
                                                    return;
                                                o = g(T[u]), s = o.literal ? q : function(t, e) {
                                                    return t === e || t !== t && e !== e
                                                }, a = o.assign || function() {
                                                    throw i = E[n] = o(e), Xi("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", T[u], j.name)
                                                }, i = E[n] = o(e);
                                                var f = function(t) {
                                                    return s(t, E[n]) || (s(t, i) ? a(e, t = E[n]) : E[n] = t), i = t
                                                };
                                                f.$stateful = !0;
                                                var d;
                                                d = t.collection ? e.$watchCollection(T[u], f) : e.$watch(g(T[u], f), null, o.literal), b.$on("$destroy", d);
                                                break;
                                            case"&":
                                                o = g(T[u]), E[n] = function(t) {
                                                    return o(e, t)
                                                }
                                            }
                                    })
                                }
                                for (C && (o(C, function(t) {
                                    t()
                                }), C = null), p = 0, h = f.length; h > p; p++)
                                    v = f[p], oe(v, v.isolateScope ? b : e, k, T, v.require && m(v.directiveName, v.require, k, w), x);
                                var _ = e;
                                for (j && (j.template || null === j.templateUrl) && (_ = b), t && t(_, i.childNodes, n, l), p = d.length - 1; p >= 0; p--)
                                    v = d[p], oe(v, v.isolateScope ? b : e, k, T, v.require && m(v.directiveName, v.require, k, w), x)
                            }
                            p = p || {};
                            for (var x, C, T, D, E, _, M, O = -Number.MAX_VALUE, N = p.controllerDirectives, j = p.newIsolateScopeDirective, P = p.templateDirective, I = p.nonTlbTranscludeDirective, U = !1, Y = !1, W = p.hasElementTranscludeDirective, X = s.$$element = ei(a), J = c, K = u, te = 0, ne = t.length; ne > te; te++) {
                                T = t[te];
                                var ie = T.$$start, se = T.$$end;
                                if (ie && (X = R(a, ie, se)), E = n, O > T.priority)
                                    break;
                                if ((M = T.scope) && (T.templateUrl || (y(M) ? (Z("new/isolated scope", j || x, T, X), j = T) : Z("new/isolated scope", j, T, X)), x = x || T), D = T.name, !T.templateUrl && T.controller && (M = T.controller, N = N || {}, Z("'" + D + "' controller", N[D], T, X), N[D] = T), (M = T.transclude) && (U = !0, T.$$tlb || (Z("transclusion", I, T, X), I = T), "element" == M ? (W = !0, O = T.priority, E = X, X = s.$$element = ei(e.createComment(" " + D + ": " + s[D] + " ")), a = X[0], ee(l, H(E), a), K = A(E, u, O, J && J.name, {nonTlbTranscludeDirective: I})) : (E = ei(we(a)).contents(), X.empty(), K = A(E, u))), T.template)
                                    if (Y = !0, Z("template", P, T, X), P = T, M = k(T.template) ? T.template(X, s) : T.template, M = ce(M), T.replace) {
                                        if (J = T, E = ge(M) ? [] : tn(Q(T.templateNamespace, pi(M))), a = E[0], 1 != E.length || a.nodeType !== yi)
                                            throw Xi("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", D, "");
                                        ee(l, X, a);
                                        var ue = {$attr: {}}, le = F(a, [], ue), fe = t.splice(te + 1, t.length - (te + 1));
                                        j && V(le), t = t.concat(le).concat(fe), z(s, ue), ne = t.length
                                    } else
                                        X.html(M);
                                if (T.templateUrl)
                                    Y = !0, Z("template", P, T, X), P = T, T.replace && (J = T), w = G(t.splice(te, t.length - te), X, s, l, U && K, f, d, {controllerDirectives: N, newIsolateScopeDirective: j, templateDirective: P, nonTlbTranscludeDirective: I}), ne = t.length;
                                else if (T.compile)
                                    try {
                                        _ = T.compile(X, s, K), k(_) ? h(null, _, ie, se) : _ && h(_.pre, _.post, ie, se)
                                    } catch (de) {
                                        i(de, B(X))
                                    }
                                T.terminal && (w.terminal = !0, O = Math.max(O, T.priority))
                            }
                            return w.scope = x && x.scope === !0, w.transcludeOnThisElement = U, w.elementTranscludeOnThisElement = W, w.templateOnThisElement = Y, w.transclude = K, p.hasElementTranscludeDirective = W, w
                        }
                        function V(t) {
                            for (var e = 0, n = t.length; n > e; e++)
                                t[e] = p(t[e], {$$isolateScope: !0})
                        }
                        function Y(e, r, o, u, l, c, f) {
                            if (r === l)
                                return null;
                            var d = null;
                            if (a.hasOwnProperty(r))
                                for (var h, m = t.get(r + s), g = 0, v = m.length; v > g; g++)
                                    try {
                                        h = m[g], (u === n || u > h.priority) && -1 != h.restrict.indexOf(o) && (c && (h = p(h, {$$start: c, $$end: f})), e.push(h), d = h)
                                    } catch ($) {
                                        i($)
                                    }
                            return d
                        }
                        function W(e) {
                            if (a.hasOwnProperty(e))
                                for (var n, r = t.get(e + s), i = 0, o = r.length; o > i; i++)
                                    if (n = r[i], n.multiElement)
                                        return!0;
                            return!1
                        }
                        function z(t, e) {
                            var n = e.$attr, r = t.$attr, i = t.$$element;
                            o(t, function(r, i) {
                                "$" != i.charAt(0) && (e[i] && e[i] !== r && (r += ("style" === i ? ";" : " ") + e[i]), t.$set(i, r, !0, n[i]))
                            }), o(e, function(e, o) {
                                "class" == o ? (M(i, e), t["class"] = (t["class"] ? t["class"] + " " : "") + e) : "style" == o ? (i.attr("style", i.attr("style") + ";" + e), t.style = (t.style ? t.style + ";" : "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, r[o] = n[o])
                            })
                        }
                        function G(t, e, n, r, i, a, s, l) {
                            var c, f, d = [], h = e[0], m = t.shift(), g = p(m, {templateUrl: null, transclude: null, replace: null, $$originalDirective: m}), v = k(m.templateUrl) ? m.templateUrl(e, n) : m.templateUrl, $ = m.templateNamespace;
                            return e.empty(), u(D.getTrustedResourceUrl(v)).then(function(u) {
                                var p, b, w, x;
                                if (u = ce(u), m.replace) {
                                    if (w = ge(u) ? [] : tn(Q($, pi(u))), p = w[0], 1 != w.length || p.nodeType !== yi)
                                        throw Xi("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", m.name, v);
                                    b = {$attr: {}}, ee(r, e, p);
                                    var k = F(p, [], b);
                                    y(m.scope) && V(k), t = k.concat(t), z(n, b)
                                } else
                                    p = h, e.html(u);
                                for (t.unshift(g), c = U(t, p, n, i, e, m, a, s, l), o(r, function(t, n) {
                                    t == p && (r[n] = e[0])
                                }), f = N(e[0].childNodes, i); d.length; ) {
                                    var C = d.shift(), T = d.shift(), S = d.shift(), D = d.shift(), E = e[0];
                                    if (!C.$$destroyed) {
                                        if (T !== h) {
                                            var _ = T.className;
                                            l.hasElementTranscludeDirective && m.replace || (E = we(p)), ee(S, ei(T), E), M(ei(E), _)
                                        }
                                        x = c.transcludeOnThisElement ? I(C, c.transclude, D) : D, c(f, C, E, r, x)
                                    }
                                }
                                d = null
                            }), function(t, e, n, r, i) {
                                var o = i;
                                e.$$destroyed || (d ? d.push(e, n, r, o) : (c.transcludeOnThisElement && (o = I(e, c.transclude, i)), c(f, e, n, r, o)))
                            }
                        }
                        function X(t, e) {
                            var n = e.priority - t.priority;
                            return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
                        }
                        function Z(t, e, n, r) {
                            if (e)
                                throw Xi("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", e.name, n.name, t, B(r))
                        }
                        function J(t, e) {
                            var n = r(e, !0);
                            n && t.push({priority: 0, compile: function(t) {
                                    var e = t.parent(), r = !!e.length;
                                    return r && A.$$addBindingClass(e), function(t, e) {
                                        var i = e.parent();
                                        r || A.$$addBindingClass(i), A.$$addBindingInfo(i, n.expressions), t.$watch(n, function(t) {
                                            e[0].nodeValue = t
                                        })
                                    }
                                }})
                        }
                        function Q(t, n) {
                            switch (t = Xr(t || "html")) {
                                case"svg":
                                case"math":
                                    var r = e.createElement("div");
                                    return r.innerHTML = "<" + t + ">" + n + "</" + t + ">", r.childNodes[0].childNodes;
                                default:
                                    return n
                                }
                        }
                        function K(t, e) {
                            if ("srcdoc" == e)
                                return D.HTML;
                            var n = j(t);
                            return"xlinkHref" == e || "form" == n && "action" == e || "img" != n && ("src" == e || "ngSrc" == e) ? D.RESOURCE_URL : void 0
                        }
                        function te(t, e, n, i, o) {
                            var a = K(t, i);
                            o = d[i] || o;
                            var s = r(n, !0, a, o);
                            if (s) {
                                if ("multiple" === i && "select" === j(t))
                                    throw Xi("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", B(t));
                                e.push({priority: 100, compile: function() {
                                        return{pre: function(t, e, u) {
                                                var l = u.$$observers || (u.$$observers = {});
                                                if (w.test(i))
                                                    throw Xi("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                                var c = u[i];
                                                c !== n && (s = c && r(c, !0, a, o), n = c), s && (u[i] = s(t), (l[i] || (l[i] = [])).$$inter = !0, (u.$$observers && u.$$observers[i].$$scope || t).$watch(s, function(t, e) {
                                                    "class" === i && t != e ? u.$updateClass(t, e) : u.$set(i, t)
                                                }))
                                            }}
                                    }})
                            }
                        }
                        function ee(t, n, r) {
                            var i, o, a = n[0], s = n.length, u = a.parentNode;
                            if (t)
                                for (i = 0, o = t.length; o > i; i++)
                                    if (t[i] == a) {
                                        t[i++] = r;
                                        for (var l = i, c = l + s - 1, f = t.length; f > l; l++, c++)
                                            f > c ? t[l] = t[c] : delete t[l];
                                        t.length -= s - 1, t.context === a && (t.context = r);
                                        break
                                    }
                            u && u.replaceChild(r, a);
                            var d = e.createDocumentFragment();
                            d.appendChild(a), ei(r).data(ei(a).data()), ni ? (fi = !0, ni.cleanData([a])) : delete ei.cache[a[ei.expando]];
                            for (var p = 1, h = n.length; h > p; p++) {
                                var m = n[p];
                                ei(m).remove(), d.appendChild(m), delete n[p]
                            }
                            n[0] = r, n.length = 1
                        }
                        function re(t, e) {
                            return f(function() {
                                return t.apply(null, arguments)
                            }, t, e)
                        }
                        function oe(t, e, n, r, o, a) {
                            try {
                                t(e, n, r, o, a)
                            } catch (s) {
                                i(s, B(n))
                            }
                        }
                        var ae = function(t, e) {
                            if (e) {
                                var n, r, i, o = Object.keys(e);
                                for (n = 0, r = o.length; r > n; n++)
                                    i = o[n], this[i] = e[i]
                            } else
                                this.$attr = {};
                            this.$$element = t
                        };
                        ae.prototype = {$normalize: Qe, $addClass: function(t) {
                                t && t.length > 0 && E.addClass(this.$$element, t)
                            }, $removeClass: function(t) {
                                t && t.length > 0 && E.removeClass(this.$$element, t)
                            }, $updateClass: function(t, e) {
                                var n = Ke(t, e);
                                n && n.length && E.addClass(this.$$element, n);
                                var r = Ke(e, t);
                                r && r.length && E.removeClass(this.$$element, r)
                            }, $set: function(t, e, r, a) {
                                var s, u = this.$$element[0], l = Ie(u, t), c = Fe(u, t), f = t;
                                if (l ? (this.$$element.prop(t, e), a = l) : c && (this[c] = e, f = c), this[t] = e, a ? this.$attr[t] = a : (a = this.$attr[t], a || (this.$attr[t] = a = ne(t, "-"))), s = j(this.$$element), "a" === s && "href" === t || "img" === s && "src" === t)
                                    this[t] = e = _(e, "src" === t);
                                else if ("img" === s && "srcset" === t) {
                                    for (var d = "", p = pi(e), h = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, m = /\s/.test(p) ? h : /(,)/, g = p.split(m), v = Math.floor(g.length / 2), $ = 0; v > $; $++) {
                                        var y = 2 * $;
                                        d += _(pi(g[y]), !0), d += " " + pi(g[y + 1])
                                    }
                                    var b = pi(g[2 * $]).split(/\s/);
                                    d += _(pi(b[0]), !0), 2 === b.length && (d += " " + pi(b[1])), this[t] = e = d
                                }
                                r !== !1 && (null === e || e === n ? this.$$element.removeAttr(a) : this.$$element.attr(a, e));
                                var w = this.$$observers;
                                w && o(w[f], function(t) {
                                    try {
                                        t(e)
                                    } catch (n) {
                                        i(n)
                                    }
                                })
                            }, $observe: function(t, e) {
                                var n = this, r = n.$$observers || (n.$$observers = le()), i = r[t] || (r[t] = []);
                                return i.push(e), C.$evalAsync(function() {
                                    !i.$$inter && n.hasOwnProperty(t) && e(n[t])
                                }), function() {
                                    P(i, e)
                                }
                            }};
                        var se = r.startSymbol(), ue = r.endSymbol(), ce = "{{" == se || "}}" == ue ? m : function(t) {
                            return t.replace(/\{\{/g, se).replace(/}}/g, ue)
                        }, fe = /^ngAttr[A-Z]/;
                        return A.$$addBindingInfo = x ? function(t, e) {
                            var n = t.data("$binding") || [];
                            di(e) ? n = n.concat(e) : n.push(e), t.data("$binding", n)
                        } : h, A.$$addBindingClass = x ? function(t) {
                            M(t, "ng-binding")
                        } : h, A.$$addScopeInfo = x ? function(t, e, n, r) {
                            var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                            t.data(i, e)
                        } : h, A.$$addScopeClass = x ? function(t, e) {
                            M(t, e ? "ng-isolate-scope" : "ng-scope")
                        } : h, A
                    }]
            }
            function Qe(t) {
                return me(t.replace(Zi, ""))
            }
            function Ke(t, e) {
                var n = "", r = t.split(/\s+/), i = e.split(/\s+/);
                t:for (var o = 0; o < r.length; o++) {
                    for (var a = r[o], s = 0; s < i.length; s++)
                        if (a == i[s])
                            continue t;
                    n += (n.length > 0 ? " " : "") + a
                }
                return n
            }
            function tn(t) {
                t = ei(t);
                var e = t.length;
                if (1 >= e)
                    return t;
                for (; e--; ) {
                    var n = t[e];
                    n.nodeType === wi && oi.call(t, e, 1)
                }
                return t
            }
            function en() {
                var t = {}, e = !1, i = /^(\S+)(\s+as\s+(\w+))?$/;
                this.register = function(e, n) {
                    ae(e, "controller"), y(e) ? f(t, e) : t[e] = n
                }, this.allowGlobals = function() {
                    e = !0
                }, this.$get = ["$injector", "$window", function(o, a) {
                        function s(t, e, n, i) {
                            if (!t || !y(t.$scope))
                                throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, e);
                            t.$scope[e] = n
                        }
                        return function(r, u, l, c) {
                            var d, p, h, m;
                            if (l = l === !0, c && b(c) && (m = c), b(r)) {
                                if (p = r.match(i), !p)
                                    throw Ji("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
                                h = p[1], m = m || p[3], r = t.hasOwnProperty(h) ? t[h] : se(u.$scope, h, !0) || (e ? se(a, h, !0) : n), oe(r, h, !0)
                            }
                            if (l) {
                                var g = (di(r) ? r[r.length - 1] : r).prototype;
                                return d = Object.create(g || null), m && s(u, m, d, h || r.name), f(function() {
                                    return o.invoke(r, d, u, h), d
                                }, {instance: d, identifier: m})
                            }
                            return d = o.instantiate(r, u, h), m && s(u, m, d, h || r.name), d
                        }
                    }]
            }
            function nn() {
                this.$get = ["$window", function(t) {
                        return ei(t.document)
                    }]
            }
            function rn() {
                this.$get = ["$log", function(t) {
                        return function() {
                            t.error.apply(t, arguments)
                        }
                    }]
            }
            function on(t, e) {
                if (b(t)) {
                    var n = t.replace(no, "").trim();
                    if (n) {
                        var r = e("Content-Type");
                        (r && 0 === r.indexOf(Qi) || an(n)) && (t = Y(n))
                    }
                }
                return t
            }
            function an(t) {
                var e = t.match(to);
                return e && eo[e[0]].test(t)
            }
            function sn(t) {
                var e, n, r, i = le();
                return t ? (o(t.split("\n"), function(t) {
                    r = t.indexOf(":"), e = Xr(pi(t.substr(0, r))), n = pi(t.substr(r + 1)), e && (i[e] = i[e] ? i[e] + ", " + n : n)
                }), i) : i
            }
            function un(t) {
                var e = y(t) ? t : n;
                return function(n) {
                    if (e || (e = sn(t)), n) {
                        var r = e[Xr(n)];
                        return void 0 === r && (r = null), r
                    }
                    return e
                }
            }
            function ln(t, e, n, r) {
                return k(r) ? r(t, e, n) : (o(r, function(r) {
                    t = r(t, e, n)
                }), t)
            }
            function cn(t) {
                return t >= 200 && 300 > t
            }
            function fn() {
                var t = this.defaults = {transformResponse: [on], transformRequest: [function(t) {
                            return!y(t) || D(t) || _(t) || E(t) ? t : V(t)
                        }], headers: {common: {Accept: "application/json, text/plain, */*"}, post: F(Ki), put: F(Ki), patch: F(Ki)}, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN"}, e = !1;
                this.useApplyAsync = function(t) {
                    return $(t) ? (e = !!t, this) : e
                };
                var i = this.interceptors = [];
                this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, u, l, c, d, p) {
                        function h(e) {
                            function i(t) {
                                var e = f({}, t);
                                return e.data = t.data ? ln(t.data, t.headers, t.status, u.transformResponse) : t.data, cn(t.status) ? e : d.reject(e)
                            }
                            function a(t) {
                                var e, n = {};
                                return o(t, function(t, r) {
                                    k(t) ? (e = t(), null != e && (n[r] = e)) : n[r] = t
                                }), n
                            }
                            function s(e) {
                                var n, r, i, o = t.headers, s = f({}, e.headers);
                                o = f({}, o.common, o[Xr(e.method)]);
                                t:for (n in o) {
                                    r = Xr(n);
                                    for (i in s)
                                        if (Xr(i) === r)
                                            continue t;
                                    s[n] = o[n]
                                }
                                return a(s)
                            }
                            if (!li.isObject(e))
                                throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", e);
                            var u = f({method: "get", transformRequest: t.transformRequest, transformResponse: t.transformResponse}, e);
                            u.headers = s(e), u.method = Jr(u.method);
                            var l = function(e) {
                                var r = e.headers, a = ln(e.data, un(r), n, e.transformRequest);
                                return v(a) && o(r, function(t, e) {
                                    "content-type" === Xr(e) && delete r[e]
                                }), v(e.withCredentials) && !v(t.withCredentials) && (e.withCredentials = t.withCredentials), w(e, a).then(i, i)
                            }, c = [l, n], p = d.when(u);
                            for (o(S, function(t) {
                                (t.request || t.requestError) && c.unshift(t.request, t.requestError), (t.response || t.responseError) && c.push(t.response, t.responseError)
                            }); c.length; ) {
                                var h = c.shift(), m = c.shift();
                                p = p.then(h, m)
                            }
                            return p.success = function(t) {
                                return p.then(function(e) {
                                    t(e.data, e.status, e.headers, u)
                                }), p
                            }, p.error = function(t) {
                                return p.then(null, function(e) {
                                    t(e.data, e.status, e.headers, u)
                                }), p
                            }, p
                        }
                        function m() {
                            o(arguments, function(t) {
                                h[t] = function(e, n) {
                                    return h(f(n || {}, {method: t, url: e}))
                                }
                            })
                        }
                        function g() {
                            o(arguments, function(t) {
                                h[t] = function(e, n, r) {
                                    return h(f(r || {}, {method: t, url: e, data: n}))
                                }
                            })
                        }
                        function w(r, i) {
                            function o(t, n, r, i) {
                                function o() {
                                    s(n, t, r, i)
                                }
                                p && (cn(t) ? p.put(x, [t, n, sn(r), i]) : p.remove(x)), e ? c.$applyAsync(o) : (o(), c.$$phase || c.$apply())
                            }
                            function s(t, e, n, i) {
                                e = Math.max(e, 0), (cn(e) ? g.resolve : g.reject)({data: t, status: e, headers: un(n), config: r, statusText: i})
                            }
                            function l(t) {
                                s(t.data, t.status, F(t.headers()), t.statusText)
                            }
                            function f() {
                                var t = h.pendingRequests.indexOf(r);
                                -1 !== t && h.pendingRequests.splice(t, 1)
                            }
                            var p, m, g = d.defer(), b = g.promise, w = r.headers, x = C(r.url, r.params);
                            if (h.pendingRequests.push(r), b.then(f, f), !r.cache && !t.cache || r.cache === !1 || "GET" !== r.method && "JSONP" !== r.method || (p = y(r.cache) ? r.cache : y(t.cache) ? t.cache : T), p && (m = p.get(x), $(m) ? A(m) ? m.then(l, l) : di(m) ? s(m[1], m[0], F(m[2]), m[3]) : s(m, 200, {}, "OK") : p.put(x, b)), v(m)) {
                                var k = or(r.url) ? u.cookies()[r.xsrfCookieName || t.xsrfCookieName] : n;
                                k && (w[r.xsrfHeaderName || t.xsrfHeaderName] = k), a(r.method, x, i, o, w, r.timeout, r.withCredentials, r.responseType)
                            }
                            return b
                        }
                        function C(t, e) {
                            if (!e)
                                return t;
                            var n = [];
                            return s(e, function(t, e) {
                                null === t || v(t) || (di(t) || (t = [t]), o(t, function(t) {
                                    y(t) && (t = x(t) ? t.toISOString() : V(t)), n.push(Z(e) + "=" + Z(t))
                                }))
                            }), n.length > 0 && (t += (-1 == t.indexOf("?") ? "?" : "&") + n.join("&")), t
                        }
                        var T = l("$http"), S = [];
                        return o(i, function(t) {
                            S.unshift(b(t) ? p.get(t) : p.invoke(t))
                        }), h.pendingRequests = [], m("get", "delete", "head", "jsonp"), g("post", "put", "patch"), h.defaults = t, h
                    }]
            }
            function dn() {
                return new t.XMLHttpRequest
            }
            function pn() {
                this.$get = ["$browser", "$window", "$document", function(t, e, n) {
                        return hn(t, dn, t.defer, e.angular.callbacks, n[0])
                    }]
            }
            function hn(t, e, r, i, a) {
                function s(t, e, n) {
                    var r = a.createElement("script"), o = null;
                    return r.type = "text/javascript", r.src = t, r.async = !0, o = function(t) {
                        Ei(r, "load", o), Ei(r, "error", o), a.body.removeChild(r), r = null;
                        var s = -1, u = "unknown";
                        t && ("load" !== t.type || i[e].called || (t = {type: "error"}), u = t.type, s = "error" === t.type ? 404 : 200), n && n(s, u)
                    }, Di(r, "load", o), Di(r, "error", o), a.body.appendChild(r), o
                }
                return function(a, u, l, c, f, d, p, m) {
                    function g() {
                        b && b(), w && w.abort()
                    }
                    function v(e, i, o, a, s) {
                        C !== n && r.cancel(C), b = w = null, e(i, o, a, s), t.$$completeOutstandingRequest(h)
                    }
                    if (t.$$incOutstandingRequestCount(), u = u || t.url(), "jsonp" == Xr(a)) {
                        var y = "_" + (i.counter++).toString(36);
                        i[y] = function(t) {
                            i[y].data = t, i[y].called = !0
                        };
                        var b = s(u.replace("JSON_CALLBACK", "angular.callbacks." + y), y, function(t, e) {
                            v(c, t, i[y].data, "", e), i[y] = h
                        })
                    } else {
                        var w = e();
                        w.open(a, u, !0), o(f, function(t, e) {
                            $(t) && w.setRequestHeader(e, t)
                        }), w.onload = function() {
                            var t = w.statusText || "", e = "response"in w ? w.response : w.responseText, n = 1223 === w.status ? 204 : w.status;
                            0 === n && (n = e ? 200 : "file" == ir(u).protocol ? 404 : 0), v(c, n, e, w.getAllResponseHeaders(), t)
                        };
                        var x = function() {
                            v(c, -1, null, null, "")
                        };
                        if (w.onerror = x, w.onabort = x, p && (w.withCredentials = !0), m)
                            try {
                                w.responseType = m
                            } catch (k) {
                                if ("json" !== m)
                                    throw k
                            }
                        w.send(l || null)
                    }
                    if (d > 0)
                        var C = r(g, d);
                    else
                        A(d) && d.then(g)
                }
            }
            function mn() {
                var t = "{{", e = "}}";
                this.startSymbol = function(e) {
                    return e ? (t = e, this) : t
                }, this.endSymbol = function(t) {
                    return t ? (e = t, this) : e
                }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
                        function o(t) {
                            return"\\\\\\" + t
                        }
                        function a(o, a, d, p) {
                            function h(n) {
                                return n.replace(l, t).replace(c, e)
                            }
                            function m(t) {
                                try {
                                    return t = _(t), p && !$(t) ? t : M(t)
                                } catch (e) {
                                    var n = ro("interr", "Can't interpolate: {0}\n{1}", o, e.toString());
                                    r(n)
                                }
                            }
                            p = !!p;
                            for (var g, y, b, w = 0, x = [], C = [], T = o.length, S = [], D = []; T > w; ) {
                                if (-1 == (g = o.indexOf(t, w)) || -1 == (y = o.indexOf(e, g + s))) {
                                    w !== T && S.push(h(o.substring(w)));
                                    break
                                }
                                w !== g && S.push(h(o.substring(w, g))), b = o.substring(g + s, y), x.push(b), C.push(n(b, m)), w = y + u, D.push(S.length), S.push("")
                            }
                            if (d && S.length > 1)
                                throw ro("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", o);
                            if (!a || x.length) {
                                var E = function(t) {
                                    for (var e = 0, n = x.length; n > e; e++) {
                                        if (p && v(t[e]))
                                            return;
                                        S[D[e]] = t[e]
                                    }
                                    return S.join("")
                                }, _ = function(t) {
                                    return d ? i.getTrusted(d, t) : i.valueOf(t)
                                }, M = function(t) {
                                    if (null == t)
                                        return"";
                                    switch (typeof t) {
                                        case"string":
                                            break;
                                        case"number":
                                            t = "" + t;
                                            break;
                                        default:
                                            t = V(t)
                                    }
                                    return t
                                };
                                return f(function(t) {
                                    var e = 0, n = x.length, i = new Array(n);
                                    try {
                                        for (; n > e; e++)
                                            i[e] = C[e](t);
                                        return E(i)
                                    } catch (a) {
                                        var s = ro("interr", "Can't interpolate: {0}\n{1}", o, a.toString());
                                        r(s)
                                    }
                                }, {exp: o, expressions: x, $$watchDelegate: function(t, e, n) {
                                        var r;
                                        return t.$watchGroup(C, function(n, i) {
                                            var o = E(n);
                                            k(e) && e.call(this, o, n !== i ? r : o, t), r = o
                                        }, n)
                                    }})
                            }
                        }
                        var s = t.length, u = e.length, l = new RegExp(t.replace(/./g, o), "g"), c = new RegExp(e.replace(/./g, o), "g");
                        return a.startSymbol = function() {
                            return t
                        }, a.endSymbol = function() {
                            return e
                        }, a
                    }]
            }
            function gn() {
                this.$get = ["$rootScope", "$window", "$q", "$$q", function(t, e, n, r) {
                        function i(i, a, s, u) {
                            var l = e.setInterval, c = e.clearInterval, f = 0, d = $(u) && !u, p = (d ? r : n).defer(), h = p.promise;
                            return s = $(s) ? s : 0, h.then(null, null, i), h.$$intervalId = l(function() {
                                p.notify(f++), s > 0 && f >= s && (p.resolve(f), c(h.$$intervalId), delete o[h.$$intervalId]), d || t.$apply()
                            }, a), o[h.$$intervalId] = p, h
                        }
                        var o = {};
                        return i.cancel = function(t) {
                            return t && t.$$intervalId in o ? (o[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), delete o[t.$$intervalId], !0) : !1
                        }, i
                    }]
            }
            function vn() {
                this.$get = function() {
                    return{id: "en-us", NUMBER_FORMATS: {DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{minInt: 1, minFrac: 0, maxFrac: 3, posPre: "", posSuf: "", negPre: "-", negSuf: "", gSize: 3, lgSize: 3}, {minInt: 1, minFrac: 2, maxFrac: 2, posPre: "¤", posSuf: "", negPre: "(¤", negSuf: ")", gSize: 3, lgSize: 3}], CURRENCY_SYM: "$"}, DATETIME_FORMATS: {MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","), SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), AMPMS: ["AM", "PM"], medium: "MMM d, y h:mm:ss a", "short": "M/d/yy h:mm a", fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", mediumDate: "MMM d, y", shortDate: "M/d/yy", mediumTime: "h:mm:ss a", shortTime: "h:mm a", ERANAMES: ["Before Christ", "Anno Domini"], ERAS: ["BC", "AD"]}, pluralCat: function(t) {
                            return 1 === t ? "one" : "other"
                        }}
                }
            }
            function $n(t) {
                for (var e = t.split("/"), n = e.length; n--; )
                    e[n] = X(e[n]);
                return e.join("/")
            }
            function yn(t, e) {
                var n = ir(t);
                e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = d(n.port) || oo[n.protocol] || null
            }
            function bn(t, e) {
                var n = "/" !== t.charAt(0);
                n && (t = "/" + t);
                var r = ir(t);
                e.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), e.$$search = z(r.search), e.$$hash = decodeURIComponent(r.hash), e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
            }
            function wn(t, e) {
                return 0 === e.indexOf(t) ? e.substr(t.length) : void 0
            }
            function xn(t) {
                var e = t.indexOf("#");
                return-1 == e ? t : t.substr(0, e)
            }
            function kn(t) {
                return t.replace(/(#.+)|#$/, "$1")
            }
            function Cn(t) {
                return t.substr(0, xn(t).lastIndexOf("/") + 1)
            }
            function Tn(t) {
                return t.substring(0, t.indexOf("/", t.indexOf("//") + 2))
            }
            function Sn(t, e) {
                this.$$html5 = !0, e = e || "";
                var r = Cn(t);
                yn(t, this), this.$$parse = function(t) {
                    var e = wn(r, t);
                    if (!b(e))
                        throw ao("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', t, r);
                    bn(e, this), this.$$path || (this.$$path = "/"), this.$$compose()
                }, this.$$compose = function() {
                    var t = G(this.$$search), e = this.$$hash ? "#" + X(this.$$hash) : "";
                    this.$$url = $n(this.$$path) + (t ? "?" + t : "") + e, this.$$absUrl = r + this.$$url.substr(1)
                }, this.$$parseLinkUrl = function(i, o) {
                    if (o && "#" === o[0])
                        return this.hash(o.slice(1)), !0;
                    var a, s, u;
                    return(a = wn(t, i)) !== n ? (s = a, u = (a = wn(e, a)) !== n ? r + (wn("/", a) || a) : t + s) : (a = wn(r, i)) !== n ? u = r + a : r == i + "/" && (u = r), u && this.$$parse(u), !!u
                }
            }
            function Dn(t, e) {
                var n = Cn(t);
                yn(t, this), this.$$parse = function(r) {
                    function i(t, e, n) {
                        var r, i = /^\/[A-Z]:(\/.*)/;
                        return 0 === e.indexOf(n) && (e = e.replace(n, "")), i.exec(e) ? t : (r = i.exec(t), r ? r[1] : t)
                    }
                    var o, a = wn(t, r) || wn(n, r);
                    "#" === a.charAt(0) ? (o = wn(e, a), v(o) && (o = a)) : o = this.$$html5 ? a : "", bn(o, this), this.$$path = i(this.$$path, o, t), this.$$compose()
                }, this.$$compose = function() {
                    var n = G(this.$$search), r = this.$$hash ? "#" + X(this.$$hash) : "";
                    this.$$url = $n(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = t + (this.$$url ? e + this.$$url : "")
                }, this.$$parseLinkUrl = function(e) {
                    return xn(t) == xn(e) ? (this.$$parse(e), !0) : !1
                }
            }
            function En(t, e) {
                this.$$html5 = !0, Dn.apply(this, arguments);
                var n = Cn(t);
                this.$$parseLinkUrl = function(r, i) {
                    if (i && "#" === i[0])
                        return this.hash(i.slice(1)), !0;
                    var o, a;
                    return t == xn(r) ? o = r : (a = wn(n, r)) ? o = t + e + a : n === r + "/" && (o = n), o && this.$$parse(o), !!o
                }, this.$$compose = function() {
                    var n = G(this.$$search), r = this.$$hash ? "#" + X(this.$$hash) : "";
                    this.$$url = $n(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = t + e + this.$$url
                }
            }
            function _n(t) {
                return function() {
                    return this[t]
                }
            }
            function Mn(t, e) {
                return function(n) {
                    return v(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
                }
            }
            function An() {
                var t = "", e = {enabled: !1, requireBase: !0, rewriteLinks: !0};
                this.hashPrefix = function(e) {
                    return $(e) ? (t = e, this) : t
                }, this.html5Mode = function(t) {
                    return M(t) ? (e.enabled = t, this) : y(t) ? (M(t.enabled) && (e.enabled = t.enabled), M(t.requireBase) && (e.requireBase = t.requireBase), M(t.rewriteLinks) && (e.rewriteLinks = t.rewriteLinks), this) : e
                }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, i, o, a) {
                        function s(t, e, n) {
                            var i = l.url(), o = l.$$state;
                            try {
                                r.url(t, e, n), l.$$state = r.state()
                            } catch (a) {
                                throw l.url(i), l.$$state = o, a
                            }
                        }
                        function u(t, e) {
                            n.$broadcast("$locationChangeSuccess", l.absUrl(), t, l.$$state, e)
                        }
                        var l, c, f, d = r.baseHref(), p = r.url();
                        if (e.enabled) {
                            if (!d && e.requireBase)
                                throw ao("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                            f = Tn(p) + (d || "/"), c = i.history ? Sn : En
                        } else
                            f = xn(p), c = Dn;
                        l = new c(f, "#" + t), l.$$parseLinkUrl(p, p), l.$$state = r.state();
                        var h = /^\s*(javascript|mailto):/i;
                        o.on("click", function(t) {
                            if (e.rewriteLinks && !t.ctrlKey && !t.metaKey && !t.shiftKey && 2 != t.which && 2 != t.button) {
                                for (var i = ei(t.target); "a" !== j(i[0]); )
                                    if (i[0] === o[0] || !(i = i.parent())[0])
                                        return;
                                var s = i.prop("href"), u = i.attr("href") || i.attr("xlink:href");
                                y(s) && "[object SVGAnimatedString]" === s.toString() && (s = ir(s.animVal).href), h.test(s) || !s || i.attr("target") || t.isDefaultPrevented() || l.$$parseLinkUrl(s, u) && (t.preventDefault(), l.absUrl() != r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                            }
                        }), kn(l.absUrl()) != kn(p) && r.url(l.absUrl(), !0);
                        var m = !0;
                        return r.onUrlChange(function(t, e) {
                            n.$evalAsync(function() {
                                var r, i = l.absUrl(), o = l.$$state;
                                l.$$parse(t), l.$$state = e, r = n.$broadcast("$locationChangeStart", t, i, e, o).defaultPrevented, l.absUrl() === t && (r ? (l.$$parse(i), l.$$state = o, s(i, !1, o)) : (m = !1, u(i, o)))
                            }), n.$$phase || n.$digest()
                        }), n.$watch(function() {
                            var t = kn(r.url()), e = kn(l.absUrl()), o = r.state(), a = l.$$replace, c = t !== e || l.$$html5 && i.history && o !== l.$$state;
                            (m || c) && (m = !1, n.$evalAsync(function() {
                                var e = l.absUrl(), r = n.$broadcast("$locationChangeStart", e, t, l.$$state, o).defaultPrevented;
                                l.absUrl() === e && (r ? (l.$$parse(t), l.$$state = o) : (c && s(e, a, o === l.$$state ? null : l.$$state), u(t, o)))
                            })), l.$$replace = !1
                        }), l
                    }]
            }
            function On() {
                var t = !0, e = this;
                this.debugEnabled = function(e) {
                    return $(e) ? (t = e, this) : t
                }, this.$get = ["$window", function(n) {
                        function r(t) {
                            return t instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
                        }
                        function i(t) {
                            var e = n.console || {}, i = e[t] || e.log || h, a = !1;
                            try {
                                a = !!i.apply
                            } catch (s) {
                            }
                            return a ? function() {
                                var t = [];
                                return o(arguments, function(e) {
                                    t.push(r(e))
                                }), i.apply(e, t)
                            } : function(t, e) {
                                i(t, null == e ? "" : e)
                            }
                        }
                        return{log: i("log"), info: i("info"), warn: i("warn"), error: i("error"), debug: function() {
                                var n = i("debug");
                                return function() {
                                    t && n.apply(e, arguments)
                                }
                            }()}
                    }]
            }
            function Nn(t, e) {
                if ("__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t)
                    throw uo("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", e);
                return t
            }
            function jn(t, e) {
                if (t) {
                    if (t.constructor === t)
                        throw uo("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
                    if (t.window === t)
                        throw uo("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", e);
                    if (t.children && (t.nodeName || t.prop && t.attr && t.find))
                        throw uo("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", e);
                    if (t === Object)
                        throw uo("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", e)
                }
                return t
            }
            function Pn(t, e) {
                if (t) {
                    if (t.constructor === t)
                        throw uo("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
                    if (t === lo || t === co || t === fo)
                        throw uo("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", e)
                }
            }
            function In(t) {
                return t.constant
            }
            function Fn(t, e, n, r, i) {
                jn(t, i), jn(e, i);
                for (var o, a = n.split("."), s = 0; a.length > 1; s++) {
                    o = Nn(a.shift(), i);
                    var u = 0 === s && e && e[o] || t[o];
                    u || (u = {}, t[o] = u), t = jn(u, i)
                }
                return o = Nn(a.shift(), i), jn(t[o], i), t[o] = r, r
            }
            function qn(t) {
                return"constructor" == t
            }
            function Rn(t, e, r, i, o, a, s) {
                Nn(t, a), Nn(e, a), Nn(r, a), Nn(i, a), Nn(o, a);
                var u = function(t) {
                    return jn(t, a)
                }, l = s || qn(t) ? u : m, c = s || qn(e) ? u : m, f = s || qn(r) ? u : m, d = s || qn(i) ? u : m, p = s || qn(o) ? u : m;
                return function(a, s) {
                    var u = s && s.hasOwnProperty(t) ? s : a;
                    return null == u ? u : (u = l(u[t]), e ? null == u ? n : (u = c(u[e]), r ? null == u ? n : (u = f(u[r]), i ? null == u ? n : (u = d(u[i]), o ? null == u ? n : u = p(u[o]) : u) : u) : u) : u)
                }
            }
            function Hn(t, e) {
                return function(n, r) {
                    return t(n, r, jn, e)
                }
            }
            function Ln(t, e, r) {
                var i = e.expensiveChecks, a = i ? yo : $o, s = a[t];
                if (s)
                    return s;
                var u = t.split("."), l = u.length;
                if (e.csp)
                    s = 6 > l ? Rn(u[0], u[1], u[2], u[3], u[4], r, i) : function(t, e) {
                        var o, a = 0;
                        do
                            o = Rn(u[a++], u[a++], u[a++], u[a++], u[a++], r, i)(t, e), e = n, t = o;
                        while (l > a);
                        return o
                    };
                else {
                    var c = "";
                    i && (c += "s = eso(s, fe);\nl = eso(l, fe);\n");
                    var f = i;
                    o(u, function(t, e) {
                        Nn(t, r);
                        var n = (e ? "s" : '((l&&l.hasOwnProperty("' + t + '"))?l:s)') + "." + t;
                        (i || qn(t)) && (n = "eso(" + n + ", fe)", f = !0), c += "if(s == null) return undefined;\ns=" + n + ";\n"
                    }), c += "return s;";
                    var d = new Function("s", "l", "eso", "fe", c);
                    d.toString = g(c), f && (d = Hn(d, r)), s = d
                }
                return s.sharedGetter = !0, s.assign = function(e, n, r) {
                    return Fn(e, r, t, n, t)
                }, a[t] = s, s
            }
            function Un(t) {
                return k(t.valueOf) ? t.valueOf() : bo.call(t)
            }
            function Vn() {
                var t = le(), e = le();
                this.$get = ["$filter", "$sniffer", function(n, r) {
                        function i(t) {
                            var e = t;
                            return t.sharedGetter && (e = function(e, n) {
                                return t(e, n)
                            }, e.literal = t.literal, e.constant = t.constant, e.assign = t.assign), e
                        }
                        function a(t, e) {
                            for (var n = 0, r = t.length; r > n; n++) {
                                var i = t[n];
                                i.constant || (i.inputs ? a(i.inputs, e) : -1 === e.indexOf(i) && e.push(i))
                            }
                            return e
                        }
                        function s(t, e) {
                            return null == t || null == e ? t === e : "object" == typeof t && (t = Un(t), "object" == typeof t) ? !1 : t === e || t !== t && e !== e
                        }
                        function u(t, e, n, r) {
                            var i, o = r.$$inputs || (r.$$inputs = a(r.inputs, []));
                            if (1 === o.length) {
                                var u = s;
                                return o = o[0], t.$watch(function(t) {
                                    var e = o(t);
                                    return s(e, u) || (i = r(t), u = e && Un(e)), i
                                }, e, n)
                            }
                            for (var l = [], c = 0, f = o.length; f > c; c++)
                                l[c] = s;
                            return t.$watch(function(t) {
                                for (var e = !1, n = 0, a = o.length; a > n; n++) {
                                    var u = o[n](t);
                                    (e || (e = !s(u, l[n]))) && (l[n] = u && Un(u))
                                }
                                return e && (i = r(t)), i
                            }, e, n)
                        }
                        function l(t, e, n, r) {
                            var i, o;
                            return i = t.$watch(function(t) {
                                return r(t)
                            }, function(t, n, r) {
                                o = t, k(e) && e.apply(this, arguments), $(t) && r.$$postDigest(function() {
                                    $(o) && i()
                                })
                            }, n)
                        }
                        function c(t, e, n, r) {
                            function i(t) {
                                var e = !0;
                                return o(t, function(t) {
                                    $(t) || (e = !1)
                                }), e
                            }
                            var a, s;
                            return a = t.$watch(function(t) {
                                return r(t)
                            }, function(t, n, r) {
                                s = t, k(e) && e.call(this, t, n, r), i(t) && r.$$postDigest(function() {
                                    i(s) && a()
                                })
                            }, n)
                        }
                        function f(t, e, n, r) {
                            var i;
                            return i = t.$watch(function(t) {
                                return r(t)
                            }, function() {
                                k(e) && e.apply(this, arguments), i()
                            }, n)
                        }
                        function d(t, e) {
                            if (!e)
                                return t;
                            var n = t.$$watchDelegate, r = n !== c && n !== l, i = r ? function(n, r) {
                                var i = t(n, r);
                                return e(i, n, r)
                            } : function(n, r) {
                                var i = t(n, r), o = e(i, n, r);
                                return $(i) ? o : i
                            };
                            return t.$$watchDelegate && t.$$watchDelegate !== u ? i.$$watchDelegate = t.$$watchDelegate : e.$stateful || (i.$$watchDelegate = u, i.inputs = [t]), i
                        }
                        var p = {csp: r.csp, expensiveChecks: !1}, m = {csp: r.csp, expensiveChecks: !0};
                        return function(r, o, a) {
                            var s, g, v;
                            switch (typeof r) {
                                case"string":
                                    v = r = r.trim();
                                    var $ = a ? e : t;
                                    if (s = $[v], !s) {
                                        ":" === r.charAt(0) && ":" === r.charAt(1) && (g = !0, r = r.substring(2));
                                        var y = a ? m : p, b = new go(y), w = new vo(b, n, y);
                                        s = w.parse(r), s.constant ? s.$$watchDelegate = f : g ? (s = i(s), s.$$watchDelegate = s.literal ? c : l) : s.inputs && (s.$$watchDelegate = u), $[v] = s
                                    }
                                    return d(s, o);
                                case"function":
                                    return d(r, o);
                                default:
                                    return d(h, o)
                                }
                        }
                    }]
            }
            function Yn() {
                this.$get = ["$rootScope", "$exceptionHandler", function(t, e) {
                        return Wn(function(e) {
                            t.$evalAsync(e)
                        }, e)
                    }]
            }
            function Bn() {
                this.$get = ["$browser", "$exceptionHandler", function(t, e) {
                        return Wn(function(e) {
                            t.defer(e)
                        }, e)
                    }]
            }
            function Wn(t, e) {
                function i(t, e, n) {
                    function r(e) {
                        return function(n) {
                            i || (i = !0, e.call(t, n))
                        }
                    }
                    var i = !1;
                    return[r(e), r(n)]
                }
                function a() {
                    this.$$state = {status: 0}
                }
                function s(t, e) {
                    return function(n) {
                        e.call(t, n)
                    }
                }
                function u(t) {
                    var r, i, o;
                    o = t.pending, t.processScheduled = !1, t.pending = n;
                    for (var a = 0, s = o.length; s > a; ++a) {
                        i = o[a][0], r = o[a][t.status];
                        try {
                            k(r) ? i.resolve(r(t.value)) : 1 === t.status ? i.resolve(t.value) : i.reject(t.value)
                        } catch (u) {
                            i.reject(u), e(u)
                        }
                    }
                }
                function l(e) {
                    !e.processScheduled && e.pending && (e.processScheduled = !0, t(function() {
                        u(e)
                    }))
                }
                function c() {
                    this.promise = new a, this.resolve = s(this, this.resolve), this.reject = s(this, this.reject), this.notify = s(this, this.notify)
                }
                function f(t) {
                    var e = new c, n = 0, r = di(t) ? [] : {};
                    return o(t, function(t, i) {
                        n++, v(t).then(function(t) {
                            r.hasOwnProperty(i) || (r[i] = t, --n || e.resolve(r))
                        }, function(t) {
                            r.hasOwnProperty(i) || e.reject(t)
                        })
                    }), 0 === n && e.resolve(r), e.promise
                }
                var d = r("$q", TypeError), p = function() {
                    return new c
                };
                a.prototype = {then: function(t, e, n) {
                        var r = new c;
                        return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, t, e, n]), this.$$state.status > 0 && l(this.$$state), r.promise
                    }, "catch": function(t) {
                        return this.then(null, t)
                    }, "finally": function(t, e) {
                        return this.then(function(e) {
                            return g(e, !0, t)
                        }, function(e) {
                            return g(e, !1, t)
                        }, e)
                    }}, c.prototype = {resolve: function(t) {
                        this.promise.$$state.status || (t === this.promise ? this.$$reject(d("qcycle", "Expected promise to be resolved with value other than itself '{0}'", t)) : this.$$resolve(t))
                    }, $$resolve: function(t) {
                        var n, r;
                        r = i(this, this.$$resolve, this.$$reject);
                        try {
                            (y(t) || k(t)) && (n = t && t.then), k(n) ? (this.promise.$$state.status = -1, n.call(t, r[0], r[1], this.notify)) : (this.promise.$$state.value = t, this.promise.$$state.status = 1, l(this.promise.$$state))
                        } catch (o) {
                            r[1](o), e(o)
                        }
                    }, reject: function(t) {
                        this.promise.$$state.status || this.$$reject(t)
                    }, $$reject: function(t) {
                        this.promise.$$state.value = t, this.promise.$$state.status = 2, l(this.promise.$$state)
                    }, notify: function(n) {
                        var r = this.promise.$$state.pending;
                        this.promise.$$state.status <= 0 && r && r.length && t(function() {
                            for (var t, i, o = 0, a = r.length; a > o; o++) {
                                i = r[o][0], t = r[o][3];
                                try {
                                    i.notify(k(t) ? t(n) : n)
                                } catch (s) {
                                    e(s)
                                }
                            }
                        })
                    }};
                var h = function(t) {
                    var e = new c;
                    return e.reject(t), e.promise
                }, m = function(t, e) {
                    var n = new c;
                    return e ? n.resolve(t) : n.reject(t), n.promise
                }, g = function(t, e, n) {
                    var r = null;
                    try {
                        k(n) && (r = n())
                    } catch (i) {
                        return m(i, !1)
                    }
                    return A(r) ? r.then(function() {
                        return m(t, e)
                    }, function(t) {
                        return m(t, !1)
                    }) : m(t, e)
                }, v = function(t, e, n, r) {
                    var i = new c;
                    return i.resolve(t), i.promise.then(e, n, r)
                }, $ = function b(t) {
                    function e(t) {
                        r.resolve(t)
                    }
                    function n(t) {
                        r.reject(t)
                    }
                    if (!k(t))
                        throw d("norslvr", "Expected resolverFn, got '{0}'", t);
                    if (!(this instanceof b))
                        return new b(t);
                    var r = new c;
                    return t(e, n), r.promise
                };
                return $.defer = p, $.reject = h, $.when = v, $.all = f, $
            }
            function zn() {
                this.$get = ["$window", "$timeout", function(t, e) {
                        var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame, r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame, i = !!n, o = i ? function(t) {
                            var e = n(t);
                            return function() {
                                r(e)
                            }
                        } : function(t) {
                            var n = e(t, 16.66, !1);
                            return function() {
                                e.cancel(n)
                            }
                        };
                        return o.supported = i, o
                    }]
            }
            function Gn() {
                function t(t) {
                    function e() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = l(), this.$$ChildScope = null
                    }
                    return e.prototype = t, e
                }
                var e = 10, n = r("$rootScope"), a = null, s = null;
                this.digestTtl = function(t) {
                    return arguments.length && (e = t), e
                }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(r, u, c, f) {
                        function d(t) {
                            t.currentScope.$$destroyed = !0
                        }
                        function p() {
                            this.$id = l(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = null
                        }
                        function m(t) {
                            if (C.$$phase)
                                throw n("inprog", "{0} already in progress", C.$$phase);
                            C.$$phase = t
                        }
                        function g() {
                            C.$$phase = null
                        }
                        function $(t, e, n) {
                            do
                                t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n];
                            while (t = t.$parent)
                        }
                        function b() {
                        }
                        function w() {
                            for (; D.length; )
                                try {
                                    D.shift()()
                                } catch (t) {
                                    u(t)
                                }
                            s = null
                        }
                        function x() {
                            null === s && (s = f.defer(function() {
                                C.$apply(w)
                            }))
                        }
                        p.prototype = {constructor: p, $new: function(e, n) {
                                var r;
                                return n = n || this, e ? (r = new p, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = t(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (e || n != this) && r.$on("$destroy", d), r
                            }, $watch: function(t, e, n) {
                                var r = c(t);
                                if (r.$$watchDelegate)
                                    return r.$$watchDelegate(this, e, n, r);
                                var i = this, o = i.$$watchers, s = {fn: e, last: b, get: r, exp: t, eq: !!n};
                                return a = null, k(e) || (s.fn = h), o || (o = i.$$watchers = []), o.unshift(s), function() {
                                    P(o, s), a = null
                                }
                            }, $watchGroup: function(t, e) {
                                function n() {
                                    u = !1, l ? (l = !1, e(i, i, s)) : e(i, r, s)
                                }
                                var r = new Array(t.length), i = new Array(t.length), a = [], s = this, u = !1, l = !0;
                                if (!t.length) {
                                    var c = !0;
                                    return s.$evalAsync(function() {
                                        c && e(i, i, s)
                                    }), function() {
                                        c = !1
                                    }
                                }
                                return 1 === t.length ? this.$watch(t[0], function(t, n, o) {
                                    i[0] = t, r[0] = n, e(i, t === n ? i : r, o)
                                }) : (o(t, function(t, e) {
                                    var o = s.$watch(t, function(t, o) {
                                        i[e] = t, r[e] = o, u || (u = !0, s.$evalAsync(n))
                                    });
                                    a.push(o)
                                }), function() {
                                    for (; a.length; )
                                        a.shift()()
                                })
                            }, $watchCollection: function(t, e) {
                                function n(t) {
                                    o = t;
                                    var e, n, r, s, u;
                                    if (!v(o)) {
                                        if (y(o))
                                            if (i(o)) {
                                                a !== p && (a = p, g = a.length = 0, f++), e = o.length, g !== e && (f++, a.length = g = e);
                                                for (var l = 0; e > l; l++)
                                                    u = a[l], s = o[l], r = u !== u && s !== s, r || u === s || (f++, a[l] = s)
                                            } else {
                                                a !== h && (a = h = {}, g = 0, f++), e = 0;
                                                for (n in o)
                                                    o.hasOwnProperty(n) && (e++, s = o[n], u = a[n], n in a ? (r = u !== u && s !== s, r || u === s || (f++, a[n] = s)) : (g++, a[n] = s, f++));
                                                if (g > e) {
                                                    f++;
                                                    for (n in a)
                                                        o.hasOwnProperty(n) || (g--, delete a[n])
                                                }
                                            }
                                        else
                                            a !== o && (a = o, f++);
                                        return f
                                    }
                                }
                                function r() {
                                    if (m ? (m = !1, e(o, o, u)) : e(o, s, u), l)
                                        if (y(o))
                                            if (i(o)) {
                                                s = new Array(o.length);
                                                for (var t = 0; t < o.length; t++)
                                                    s[t] = o[t]
                                            } else {
                                                s = {};
                                                for (var n in o)
                                                    Zr.call(o, n) && (s[n] = o[n])
                                            }
                                        else
                                            s = o
                                }
                                n.$stateful = !0;
                                var o, a, s, u = this, l = e.length > 1, f = 0, d = c(t, n), p = [], h = {}, m = !0, g = 0;
                                return this.$watch(d, r)
                            }, $digest: function() {
                                var t, r, i, o, l, c, d, p, h, v, $ = e, y = this, x = [];
                                m("$digest"), f.$$checkUrlChange(), this === C && null !== s && (f.defer.cancel(s), w()), a = null;
                                do {
                                    for (c = !1, p = y; T.length; ) {
                                        try {
                                            v = T.shift(), v.scope.$eval(v.expression, v.locals)
                                        } catch (D) {
                                            u(D)
                                        }
                                        a = null
                                    }
                                    t:do {
                                        if (o = p.$$watchers)
                                            for (l = o.length; l--; )
                                                try {
                                                    if (t = o[l])
                                                        if ((r = t.get(p)) === (i = t.last) || (t.eq ? q(r, i) : "number" == typeof r && "number" == typeof i && isNaN(r) && isNaN(i))) {
                                                            if (t === a) {
                                                                c = !1;
                                                                break t
                                                            }
                                                        } else
                                                            c = !0, a = t, t.last = t.eq ? I(r, null) : r, t.fn(r, i === b ? r : i, p), 5 > $ && (h = 4 - $, x[h] || (x[h] = []), x[h].push({msg: k(t.exp) ? "fn: " + (t.exp.name || t.exp.toString()) : t.exp, newVal: r, oldVal: i}))
                                                } catch (D) {
                                                    u(D)
                                                }
                                        if (!(d = p.$$childHead || p !== y && p.$$nextSibling))
                                            for (; p !== y && !(d = p.$$nextSibling); )
                                                p = p.$parent
                                    } while (p = d);
                                    if ((c || T.length) && !$--)
                                        throw g(), n("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, x)
                                } while (c || T.length);
                                for (g(); S.length; )
                                    try {
                                        S.shift()()
                                    } catch (D) {
                                        u(D)
                                    }
                            }, $destroy: function() {
                                if (!this.$$destroyed) {
                                    var t = this.$parent;
                                    if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== C) {
                                        for (var e in this.$$listenerCount)
                                            $(this, this.$$listenerCount[e], e);
                                        t.$$childHead == this && (t.$$childHead = this.$$nextSibling), t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = h, this.$on = this.$watch = this.$watchGroup = function() {
                                            return h
                                        }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                                    }
                                }
                            }, $eval: function(t, e) {
                                return c(t)(this, e)
                            }, $evalAsync: function(t, e) {
                                C.$$phase || T.length || f.defer(function() {
                                    T.length && C.$digest()
                                }), T.push({scope: this, expression: t, locals: e})
                            }, $$postDigest: function(t) {
                                S.push(t)
                            }, $apply: function(t) {
                                try {
                                    return m("$apply"), this.$eval(t)
                                } catch (e) {
                                    u(e)
                                } finally {
                                    g();
                                    try {
                                        C.$digest()
                                    } catch (e) {
                                        throw u(e), e
                                    }
                                }
                            }, $applyAsync: function(t) {
                                function e() {
                                    n.$eval(t)
                                }
                                var n = this;
                                t && D.push(e), x()
                            }, $on: function(t, e) {
                                var n = this.$$listeners[t];
                                n || (this.$$listeners[t] = n = []), n.push(e);
                                var r = this;
                                do
                                    r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++;
                                while (r = r.$parent);
                                var i = this;
                                return function() {
                                    var r = n.indexOf(e);
                                    -1 !== r && (n[r] = null, $(i, 1, t))
                                }
                            }, $emit: function(t) {
                                var e, n, r, i = [], o = this, a = !1, s = {name: t, targetScope: o, stopPropagation: function() {
                                        a = !0
                                    }, preventDefault: function() {
                                        s.defaultPrevented = !0
                                    }, defaultPrevented: !1}, l = R([s], arguments, 1);
                                do {
                                    for (e = o.$$listeners[t] || i, s.currentScope = o, n = 0, r = e.length; r > n; n++)
                                        if (e[n])
                                            try {
                                                e[n].apply(null, l)
                                            } catch (c) {
                                                u(c)
                                            }
                                        else
                                            e.splice(n, 1), n--, r--;
                                    if (a)
                                        return s.currentScope = null, s;
                                    o = o.$parent
                                } while (o);
                                return s.currentScope = null, s
                            }, $broadcast: function(t) {
                                var e = this, n = e, r = e, i = {name: t, targetScope: e, preventDefault: function() {
                                        i.defaultPrevented = !0
                                    }, defaultPrevented: !1};
                                if (!e.$$listenerCount[t])
                                    return i;
                                for (var o, a, s, l = R([i], arguments, 1); n = r; ) {
                                    for (i.currentScope = n, o = n.$$listeners[t] || [], a = 0, s = o.length; s > a; a++)
                                        if (o[a])
                                            try {
                                                o[a].apply(null, l)
                                            } catch (c) {
                                                u(c)
                                            }
                                        else
                                            o.splice(a, 1), a--, s--;
                                    if (!(r = n.$$listenerCount[t] && n.$$childHead || n !== e && n.$$nextSibling))
                                        for (; n !== e && !(r = n.$$nextSibling); )
                                            n = n.$parent
                                }
                                return i.currentScope = null, i
                            }};
                        var C = new p, T = C.$$asyncQueue = [], S = C.$$postDigestQueue = [], D = C.$$applyAsyncQueue = [];
                        return C
                    }]
            }
            function Xn() {
                var t = /^\s*(https?|ftp|mailto|tel|file):/, e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
                this.aHrefSanitizationWhitelist = function(e) {
                    return $(e) ? (t = e, this) : t
                }, this.imgSrcSanitizationWhitelist = function(t) {
                    return $(t) ? (e = t, this) : e
                }, this.$get = function() {
                    return function(n, r) {
                        var i, o = r ? e : t;
                        return i = ir(n).href, "" === i || i.match(o) ? n : "unsafe:" + i
                    }
                }
            }
            function Zn(t) {
                if ("self" === t)
                    return t;
                if (b(t)) {
                    if (t.indexOf("***") > -1)
                        throw wo("iwcard", "Illegal sequence *** in string matcher.  String: {0}", t);
                    return t = hi(t).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + t + "$")
                }
                if (C(t))
                    return new RegExp("^" + t.source + "$");
                throw wo("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
            }
            function Jn(t) {
                var e = [];
                return $(t) && o(t, function(t) {
                    e.push(Zn(t))
                }), e
            }
            function Qn() {
                this.SCE_CONTEXTS = xo;
                var t = ["self"], e = [];
                this.resourceUrlWhitelist = function(e) {
                    return arguments.length && (t = Jn(e)), t
                }, this.resourceUrlBlacklist = function(t) {
                    return arguments.length && (e = Jn(t)), e
                }, this.$get = ["$injector", function(r) {
                        function i(t, e) {
                            return"self" === t ? or(e) : !!t.exec(e.href)
                        }
                        function o(n) {
                            var r, o, a = ir(n.toString()), s = !1;
                            for (r = 0, o = t.length; o > r; r++)
                                if (i(t[r], a)) {
                                    s = !0;
                                    break
                                }
                            if (s)
                                for (r = 0, o = e.length; o > r; r++)
                                    if (i(e[r], a)) {
                                        s = !1;
                                        break
                                    }
                            return s
                        }
                        function a(t) {
                            var e = function(t) {
                                this.$$unwrapTrustedValue = function() {
                                    return t
                                }
                            };
                            return t && (e.prototype = new t), e.prototype.valueOf = function() {
                                return this.$$unwrapTrustedValue()
                            }, e.prototype.toString = function() {
                                return this.$$unwrapTrustedValue().toString()
                            }, e
                        }
                        function s(t, e) {
                            var r = d.hasOwnProperty(t) ? d[t] : null;
                            if (!r)
                                throw wo("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", t, e);
                            if (null === e || e === n || "" === e)
                                return e;
                            if ("string" != typeof e)
                                throw wo("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", t);
                            return new r(e)
                        }
                        function u(t) {
                            return t instanceof f ? t.$$unwrapTrustedValue() : t
                        }
                        function l(t, e) {
                            if (null === e || e === n || "" === e)
                                return e;
                            var r = d.hasOwnProperty(t) ? d[t] : null;
                            if (r && e instanceof r)
                                return e.$$unwrapTrustedValue();
                            if (t === xo.RESOURCE_URL) {
                                if (o(e))
                                    return e;
                                throw wo("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", e.toString())
                            }
                            if (t === xo.HTML)
                                return c(e);
                            throw wo("unsafe", "Attempting to use an unsafe value in a safe context.")
                        }
                        var c = function() {
                            throw wo("unsafe", "Attempting to use an unsafe value in a safe context.")
                        };
                        r.has("$sanitize") && (c = r.get("$sanitize"));
                        var f = a(), d = {};
                        return d[xo.HTML] = a(f), d[xo.CSS] = a(f), d[xo.URL] = a(f), d[xo.JS] = a(f), d[xo.RESOURCE_URL] = a(d[xo.URL]), {trustAs: s, getTrusted: l, valueOf: u}
                    }]
            }
            function Kn() {
                var t = !0;
                this.enabled = function(e) {
                    return arguments.length && (t = !!e), t
                }, this.$get = ["$parse", "$sceDelegate", function(e, n) {
                        if (t && 8 > ti)
                            throw wo("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                        var r = F(xo);
                        r.isEnabled = function() {
                            return t
                        }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, t || (r.trustAs = r.getTrusted = function(t, e) {
                            return e
                        }, r.valueOf = m), r.parseAs = function(t, n) {
                            var i = e(n);
                            return i.literal && i.constant ? i : e(n, function(e) {
                                return r.getTrusted(t, e)
                            })
                        };
                        var i = r.parseAs, a = r.getTrusted, s = r.trustAs;
                        return o(xo, function(t, e) {
                            var n = Xr(e);
                            r[me("parse_as_" + n)] = function(e) {
                                return i(t, e)
                            }, r[me("get_trusted_" + n)] = function(e) {
                                return a(t, e)
                            }, r[me("trust_as_" + n)] = function(e) {
                                return s(t, e)
                            }
                        }), r
                    }]
            }
            function tr() {
                this.$get = ["$window", "$document", function(t, e) {
                        var n, r, i = {}, o = d((/android (\d+)/.exec(Xr((t.navigator || {}).userAgent)) || [])[1]), a = /Boxee/i.test((t.navigator || {}).userAgent), s = e[0] || {}, u = /^(Moz|webkit|ms)(?=[A-Z])/, l = s.body && s.body.style, c = !1, f = !1;
                        if (l) {
                            for (var p in l)
                                if (r = u.exec(p)) {
                                    n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                                    break
                                }
                            n || (n = "WebkitOpacity"in l && "webkit"), c = !!("transition"in l || n + "Transition"in l), f = !!("animation"in l || n + "Animation"in l), !o || c && f || (c = b(s.body.style.webkitTransition), f = b(s.body.style.webkitAnimation))
                        }
                        return{history: !(!t.history || !t.history.pushState || 4 > o || a), hasEvent: function(t) {
                                if ("input" === t && 11 >= ti)
                                    return!1;
                                if (v(i[t])) {
                                    var e = s.createElement("div");
                                    i[t] = "on" + t in e
                                }
                                return i[t]
                            }, csp: mi(), vendorPrefix: n, transitions: c, animations: f, android: o}
                    }]
            }
            function er() {
                this.$get = ["$templateCache", "$http", "$q", function(t, e, n) {
                        function r(i, o) {
                            function a(t) {
                                if (!o)
                                    throw Xi("tpload", "Failed to load template: {0}", i);
                                return n.reject(t)
                            }
                            r.totalPendingRequests++;
                            var s = e.defaults && e.defaults.transformResponse;
                            di(s) ? s = s.filter(function(t) {
                                return t !== on
                            }) : s === on && (s = null);
                            var u = {cache: t, transformResponse: s};
                            return e.get(i, u)["finally"](function() {
                                r.totalPendingRequests--
                            }).then(function(t) {
                                return t.data
                            }, a)
                        }
                        return r.totalPendingRequests = 0, r
                    }]
            }
            function nr() {
                this.$get = ["$rootScope", "$browser", "$location", function(t, e, n) {
                        var r = {};
                        return r.findBindings = function(t, e, n) {
                            var r = t.getElementsByClassName("ng-binding"), i = [];
                            return o(r, function(t) {
                                var r = li.element(t).data("$binding");
                                r && o(r, function(r) {
                                    if (n) {
                                        var o = new RegExp("(^|\\s)" + hi(e) + "(\\s|\\||$)");
                                        o.test(r) && i.push(t)
                                    } else
                                        -1 != r.indexOf(e) && i.push(t)
                                })
                            }), i
                        }, r.findModels = function(t, e, n) {
                            for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                                var o = n ? "=" : "*=", a = "[" + r[i] + "model" + o + '"' + e + '"]', s = t.querySelectorAll(a);
                                if (s.length)
                                    return s
                            }
                        }, r.getLocation = function() {
                            return n.url()
                        }, r.setLocation = function(e) {
                            e !== n.url() && (n.url(e), t.$digest())
                        }, r.whenStable = function(t) {
                            e.notifyWhenNoOutstandingRequests(t)
                        }, r
                    }]
            }
            function rr() {
                this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(t, e, n, r, i) {
                        function o(o, s, u) {
                            var l, c = $(u) && !u, f = (c ? r : n).defer(), d = f.promise;
                            return l = e.defer(function() {
                                try {
                                    f.resolve(o())
                                } catch (e) {
                                    f.reject(e), i(e)
                                } finally {
                                    delete a[d.$$timeoutId]
                                }
                                c || t.$apply()
                            }, s), d.$$timeoutId = l, a[l] = f, d
                        }
                        var a = {};
                        return o.cancel = function(t) {
                            return t && t.$$timeoutId in a ? (a[t.$$timeoutId].reject("canceled"), delete a[t.$$timeoutId], e.defer.cancel(t.$$timeoutId)) : !1
                        }, o
                    }]
            }
            function ir(t) {
                var e = t;
                return ti && (ko.setAttribute("href", e), e = ko.href), ko.setAttribute("href", e), {href: ko.href, protocol: ko.protocol ? ko.protocol.replace(/:$/, "") : "", host: ko.host, search: ko.search ? ko.search.replace(/^\?/, "") : "", hash: ko.hash ? ko.hash.replace(/^#/, "") : "", hostname: ko.hostname, port: ko.port, pathname: "/" === ko.pathname.charAt(0) ? ko.pathname : "/" + ko.pathname}
            }
            function or(t) {
                var e = b(t) ? ir(t) : t;
                return e.protocol === Co.protocol && e.host === Co.host
            }
            function ar() {
                this.$get = g(t)
            }
            function sr(t) {
                function e(r, i) {
                    if (y(r)) {
                        var a = {};
                        return o(r, function(t, n) {
                            a[n] = e(n, t)
                        }), a
                    }
                    return t.factory(r + n, i)
                }
                var n = "Filter";
                this.register = e, this.$get = ["$injector", function(t) {
                        return function(e) {
                            return t.get(e + n)
                        }
                    }], e("currency", fr), e("date", Cr), e("filter", ur), e("json", Tr), e("limitTo", Sr), e("lowercase", _o), e("number", dr), e("orderBy", Dr), e("uppercase", Mo)
            }
            function ur() {
                return function(t, e, n) {
                    if (!di(t))
                        return t;
                    var r, i;
                    switch (typeof e) {
                        case"function":
                            r = e;
                            break;
                        case"boolean":
                        case"number":
                        case"string":
                            i = !0;
                        case"object":
                            r = lr(e, n, i);
                            break;
                        default:
                            return t
                    }
                    return t.filter(r)
                }
            }
            function lr(t, e, n) {
                var r, i = y(t) && "$"in t;
                return e === !0 ? e = q : k(e) || (e = function(t, e) {
                    return y(t) || y(e) ? !1 : (t = Xr("" + t), e = Xr("" + e), -1 !== t.indexOf(e))
                }), r = function(r) {
                    return i && !y(r) ? cr(r, t.$, e, !1) : cr(r, t, e, n)
                }
            }
            function cr(t, e, n, r, i) {
                var o = null !== t ? typeof t : "null", a = null !== e ? typeof e : "null";
                if ("string" === a && "!" === e.charAt(0))
                    return!cr(t, e.substring(1), n, r);
                if (di(t))
                    return t.some(function(t) {
                        return cr(t, e, n, r)
                    });
                switch (o) {
                    case"object":
                        var s;
                        if (r) {
                            for (s in t)
                                if ("$" !== s.charAt(0) && cr(t[s], e, n, !0))
                                    return!0;
                            return i ? !1 : cr(t, e, n, !1)
                        }
                        if ("object" === a) {
                            for (s in e) {
                                var u = e[s];
                                if (!k(u) && !v(u)) {
                                    var l = "$" === s, c = l ? t : t[s];
                                    if (!cr(c, u, n, l, l))
                                        return!1
                                }
                            }
                            return!0
                        }
                        return n(t, e);
                    case"function":
                        return!1;
                    default:
                        return n(t, e)
                    }
            }
            function fr(t) {
                var e = t.NUMBER_FORMATS;
                return function(t, n, r) {
                    return v(n) && (n = e.CURRENCY_SYM), v(r) && (r = e.PATTERNS[1].maxFrac), null == t ? t : pr(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, r).replace(/\u00A4/g, n)
                }
            }
            function dr(t) {
                var e = t.NUMBER_FORMATS;
                return function(t, n) {
                    return null == t ? t : pr(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
                }
            }
            function pr(t, e, n, r, i) {
                if (!isFinite(t) || y(t))
                    return"";
                var o = 0 > t;
                t = Math.abs(t);
                var a = t + "", s = "", u = [], l = !1;
                if (-1 !== a.indexOf("e")) {
                    var c = a.match(/([\d\.]+)e(-?)(\d+)/);
                    c && "-" == c[2] && c[3] > i + 1 ? t = 0 : (s = a, l = !0)
                }
                if (l)
                    i > 0 && 1 > t && (s = t.toFixed(i), t = parseFloat(s));
                else {
                    var f = (a.split(To)[1] || "").length;
                    v(i) && (i = Math.min(Math.max(e.minFrac, f), e.maxFrac)), t = +(Math.round(+(t.toString() + "e" + i)).toString() + "e" + -i);
                    var d = ("" + t).split(To), p = d[0];
                    d = d[1] || "";
                    var h, m = 0, g = e.lgSize, $ = e.gSize;
                    if (p.length >= g + $)
                        for (m = p.length - g, h = 0; m > h; h++)
                            (m - h) % $ === 0 && 0 !== h && (s += n), s += p.charAt(h);
                    for (h = m; h < p.length; h++)
                        (p.length - h) % g === 0 && 0 !== h && (s += n), s += p.charAt(h);
                    for (; d.length < i; )
                        d += "0";
                    i && "0" !== i && (s += r + d.substr(0, i))
                }
                return 0 === t && (o = !1), u.push(o ? e.negPre : e.posPre, s, o ? e.negSuf : e.posSuf), u.join("")
            }
            function hr(t, e, n) {
                var r = "";
                for (0 > t && (r = "-", t = - t), t = "" + t; t.length < e; )
                    t = "0" + t;
                return n && (t = t.substr(t.length - e)), r + t
            }
            function mr(t, e, n, r) {
                return n = n || 0, function(i) {
                    var o = i["get" + t]();
                    return(n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), hr(o, e, r)
                }
            }
            function gr(t, e) {
                return function(n, r) {
                    var i = n["get" + t](), o = Jr(e ? "SHORT" + t : t);
                    return r[o][i]
                }
            }
            function vr(t) {
                var e = -1 * t.getTimezoneOffset(), n = e >= 0 ? "+" : "";
                return n += hr(Math[e > 0 ? "floor" : "ceil"](e / 60), 2) + hr(Math.abs(e % 60), 2)
            }
            function $r(t) {
                var e = new Date(t, 0, 1).getDay();
                return new Date(t, 0, (4 >= e ? 5 : 12) - e)
            }
            function yr(t) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay()))
            }
            function br(t) {
                return function(e) {
                    var n = $r(e.getFullYear()), r = yr(e), i = +r - +n, o = 1 + Math.round(i / 6048e5);
                    return hr(o, t)
                }
            }
            function wr(t, e) {
                return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1]
            }
            function xr(t, e) {
                return t.getFullYear() <= 0 ? e.ERAS[0] : e.ERAS[1]
            }
            function kr(t, e) {
                return t.getFullYear() <= 0 ? e.ERANAMES[0] : e.ERANAMES[1]
            }
            function Cr(t) {
                function e(t) {
                    var e;
                    if (e = t.match(n)) {
                        var r = new Date(0), i = 0, o = 0, a = e[8] ? r.setUTCFullYear : r.setFullYear, s = e[8] ? r.setUTCHours : r.setHours;
                        e[9] && (i = d(e[9] + e[10]), o = d(e[9] + e[11])), a.call(r, d(e[1]), d(e[2]) - 1, d(e[3]));
                        var u = d(e[4] || 0) - i, l = d(e[5] || 0) - o, c = d(e[6] || 0), f = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
                        return s.call(r, u, l, c, f), r
                    }
                    return t
                }
                var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
                return function(n, r, i) {
                    var a, s, u = "", l = [];
                    if (r = r || "mediumDate", r = t.DATETIME_FORMATS[r] || r, b(n) && (n = Eo.test(n) ? d(n) : e(n)), w(n) && (n = new Date(n)), !x(n))
                        return n;
                    for (; r; )
                        s = Do.exec(r), s ? (l = R(l, s, 1), r = l.pop()) : (l.push(r), r = null);
                    return i && "UTC" === i && (n = new Date(n.getTime()), n.setMinutes(n.getMinutes() + n.getTimezoneOffset())), o(l, function(e) {
                        a = So[e], u += a ? a(n, t.DATETIME_FORMATS) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                    }), u
                }
            }
            function Tr() {
                return function(t, e) {
                    return v(e) && (e = 2), V(t, e)
                }
            }
            function Sr() {
                return function(t, e) {
                    return w(t) && (t = t.toString()), di(t) || b(t) ? (e = 1 / 0 === Math.abs(Number(e)) ? Number(e) : d(e), e ? e > 0 ? t.slice(0, e) : t.slice(e) : b(t) ? "" : []) : t
                }
            }
            function Dr(t) {
                return function(e, n, r) {
                    function o(t, e) {
                        for (var r = 0; r < n.length; r++) {
                            var i = n[r](t, e);
                            if (0 !== i)
                                return i
                        }
                        return 0
                    }
                    function a(t, e) {
                        return e ? function(e, n) {
                            return t(n, e)
                        } : t
                    }
                    function s(t) {
                        switch (typeof t) {
                            case"number":
                            case"boolean":
                            case"string":
                                return!0;
                            default:
                                return!1
                            }
                    }
                    function u(t) {
                        return null === t ? "null" : "function" == typeof t.valueOf && (t = t.valueOf(), s(t)) ? t : "function" == typeof t.toString && (t = t.toString(), s(t)) ? t : ""
                    }
                    function l(t, e) {
                        var n = typeof t, r = typeof e;
                        return n === r && "object" === n && (t = u(t), e = u(e)), n === r ? ("string" === n && (t = t.toLowerCase(), e = e.toLowerCase()), t === e ? 0 : e > t ? -1 : 1) : r > n ? -1 : 1
                    }
                    return i(e) ? (n = di(n) ? n : [n], 0 === n.length && (n = ["+"]), n = n.map(function(e) {
                        var n = !1, r = e || m;
                        if (b(e)) {
                            if (("+" == e.charAt(0) || "-" == e.charAt(0)) && (n = "-" == e.charAt(0), e = e.substring(1)), "" === e)
                                return a(l, n);
                            if (r = t(e), r.constant) {
                                var i = r();
                                return a(function(t, e) {
                                    return l(t[i], e[i])
                                }, n)
                            }
                        }
                        return a(function(t, e) {
                            return l(r(t), r(e))
                        }, n)
                    }), ii.call(e).sort(a(o, r))) : e
                }
            }
            function Er(t) {
                return k(t) && (t = {link: t}), t.restrict = t.restrict || "AC", g(t)
            }
            function _r(t, e) {
                t.$name = e
            }
            function Mr(t, e, r, i, a) {
                var s = this, u = [], l = s.$$parentForm = t.parent().controller("form") || No;
                s.$error = {}, s.$$success = {}, s.$pending = n, s.$name = a(e.name || e.ngForm || "")(r), s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, s.$submitted = !1, l.$addControl(s), s.$rollbackViewValue = function() {
                    o(u, function(t) {
                        t.$rollbackViewValue()
                    })
                }, s.$commitViewValue = function() {
                    o(u, function(t) {
                        t.$commitViewValue()
                    })
                }, s.$addControl = function(t) {
                    ae(t.$name, "input"), u.push(t), t.$name && (s[t.$name] = t)
                }, s.$$renameControl = function(t, e) {
                    var n = t.$name;
                    s[n] === t && delete s[n], s[e] = t, t.$name = e
                }, s.$removeControl = function(t) {
                    t.$name && s[t.$name] === t && delete s[t.$name], o(s.$pending, function(e, n) {
                        s.$setValidity(n, null, t)
                    }), o(s.$error, function(e, n) {
                        s.$setValidity(n, null, t)
                    }), o(s.$$success, function(e, n) {
                        s.$setValidity(n, null, t)
                    }), P(u, t)
                }, Br({ctrl: this, $element: t, set: function(t, e, n) {
                        var r = t[e];
                        if (r) {
                            var i = r.indexOf(n);
                            -1 === i && r.push(n)
                        } else
                            t[e] = [n]
                    }, unset: function(t, e, n) {
                        var r = t[e];
                        r && (P(r, n), 0 === r.length && delete t[e])
                    }, parentForm: l, $animate: i}), s.$setDirty = function() {
                    i.removeClass(t, ma), i.addClass(t, ga), s.$dirty = !0, s.$pristine = !1, l.$setDirty()
                }, s.$setPristine = function() {
                    i.setClass(t, ma, ga + " " + jo), s.$dirty = !1, s.$pristine = !0, s.$submitted = !1, o(u, function(t) {
                        t.$setPristine()
                    })
                }, s.$setUntouched = function() {
                    o(u, function(t) {
                        t.$setUntouched()
                    })
                }, s.$setSubmitted = function() {
                    i.addClass(t, jo), s.$submitted = !0, l.$setSubmitted()
                }
            }
            function Ar(t) {
                t.$formatters.push(function(e) {
                    return t.$isEmpty(e) ? e : e.toString()
                })
            }
            function Or(t, e, n, r, i, o) {
                Nr(t, e, n, r, i, o), Ar(r)
            }
            function Nr(t, e, n, r, i, o) {
                var a = Xr(e[0].type);
                if (!i.android) {
                    var s = !1;
                    e.on("compositionstart", function() {
                        s = !0
                    }), e.on("compositionend", function() {
                        s = !1, u()
                    })
                }
                var u = function(t) {
                    if (l && (o.defer.cancel(l), l = null), !s) {
                        var i = e.val(), u = t && t.type;
                        "password" === a || n.ngTrim && "false" === n.ngTrim || (i = pi(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, u)
                    }
                };
                if (i.hasEvent("input"))
                    e.on("input", u);
                else {
                    var l, c = function(t, e, n) {
                        l || (l = o.defer(function() {
                            l = null, e && e.value === n || u(t)
                        }))
                    };
                    e.on("keydown", function(t) {
                        var e = t.keyCode;
                        91 === e || e > 15 && 19 > e || e >= 37 && 40 >= e || c(t, this, this.value)
                    }), i.hasEvent("paste") && e.on("paste cut", c)
                }
                e.on("change", u), r.$render = function() {
                    e.val(r.$isEmpty(r.$viewValue) ? "" : r.$viewValue)
                }
            }
            function jr(t, e) {
                if (x(t))
                    return t;
                if (b(t)) {
                    Yo.lastIndex = 0;
                    var n = Yo.exec(t);
                    if (n) {
                        var r = +n[1], i = +n[2], o = 0, a = 0, s = 0, u = 0, l = $r(r), c = 7 * (i - 1);
                        return e && (o = e.getHours(), a = e.getMinutes(), s = e.getSeconds(), u = e.getMilliseconds()), new Date(r, 0, l.getDate() + c, o, a, s, u)
                    }
                }
                return 0 / 0
            }
            function Pr(t, e) {
                return function(n, r) {
                    var i, a;
                    if (x(n))
                        return n;
                    if (b(n)) {
                        if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), qo.test(n))
                            return new Date(n);
                        if (t.lastIndex = 0, i = t.exec(n))
                            return i.shift(), a = r ? {yyyy: r.getFullYear(), MM: r.getMonth() + 1, dd: r.getDate(), HH: r.getHours(), mm: r.getMinutes(), ss: r.getSeconds(), sss: r.getMilliseconds() / 1e3} : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, o(i, function(t, n) {
                                n < e.length && (a[e[n]] = +t)
                            }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
                    }
                    return 0 / 0
                }
            }
            function Ir(t, e, r, i) {
                return function(o, a, s, u, l, c, f) {
                    function d(t) {
                        return t && !(t.getTime && t.getTime() !== t.getTime())
                    }
                    function p(t) {
                        return $(t) ? x(t) ? t : r(t) : n
                    }
                    Fr(o, a, s, u), Nr(o, a, s, u, l, c);
                    var h, m = u && u.$options && u.$options.timezone;
                    if (u.$$parserName = t, u.$parsers.push(function(t) {
                        if (u.$isEmpty(t))
                            return null;
                        if (e.test(t)) {
                            var i = r(t, h);
                            return"UTC" === m && i.setMinutes(i.getMinutes() - i.getTimezoneOffset()), i
                        }
                        return n
                    }), u.$formatters.push(function(t) {
                        if (t && !x(t))
                            throw ba("datefmt", "Expected `{0}` to be a date", t);
                        if (d(t)) {
                            if (h = t, h && "UTC" === m) {
                                var e = 6e4 * h.getTimezoneOffset();
                                h = new Date(h.getTime() + e)
                            }
                            return f("date")(t, i, m)
                        }
                        return h = null, ""
                    }), $(s.min) || s.ngMin) {
                        var g;
                        u.$validators.min = function(t) {
                            return!d(t) || v(g) || r(t) >= g
                        }, s.$observe("min", function(t) {
                            g = p(t), u.$validate()
                        })
                    }
                    if ($(s.max) || s.ngMax) {
                        var y;
                        u.$validators.max = function(t) {
                            return!d(t) || v(y) || r(t) <= y
                        }, s.$observe("max", function(t) {
                            y = p(t), u.$validate()
                        })
                    }
                }
            }
            function Fr(t, e, r, i) {
                var o = e[0], a = i.$$hasNativeValidators = y(o.validity);
                a && i.$parsers.push(function(t) {
                    var r = e.prop(Gr) || {};
                    return r.badInput && !r.typeMismatch ? n : t
                })
            }
            function qr(t, e, r, i, o, a) {
                if (Fr(t, e, r, i), Nr(t, e, r, i, o, a), i.$$parserName = "number", i.$parsers.push(function(t) {
                    return i.$isEmpty(t) ? null : Lo.test(t) ? parseFloat(t) : n
                }), i.$formatters.push(function(t) {
                    if (!i.$isEmpty(t)) {
                        if (!w(t))
                            throw ba("numfmt", "Expected `{0}` to be a number", t);
                        t = t.toString()
                    }
                    return t
                }), $(r.min) || r.ngMin) {
                    var s;
                    i.$validators.min = function(t) {
                        return i.$isEmpty(t) || v(s) || t >= s
                    }, r.$observe("min", function(t) {
                        $(t) && !w(t) && (t = parseFloat(t, 10)), s = w(t) && !isNaN(t) ? t : n, i.$validate()
                    })
                }
                if ($(r.max) || r.ngMax) {
                    var u;
                    i.$validators.max = function(t) {
                        return i.$isEmpty(t) || v(u) || u >= t
                    }, r.$observe("max", function(t) {
                        $(t) && !w(t) && (t = parseFloat(t, 10)), u = w(t) && !isNaN(t) ? t : n, i.$validate()
                    })
                }
            }
            function Rr(t, e, n, r, i, o) {
                Nr(t, e, n, r, i, o), Ar(r), r.$$parserName = "url", r.$validators.url = function(t, e) {
                    var n = t || e;
                    return r.$isEmpty(n) || Ro.test(n)
                }
            }
            function Hr(t, e, n, r, i, o) {
                Nr(t, e, n, r, i, o), Ar(r), r.$$parserName = "email", r.$validators.email = function(t, e) {
                    var n = t || e;
                    return r.$isEmpty(n) || Ho.test(n)
                }
            }
            function Lr(t, e, n, r) {
                v(n.name) && e.attr("name", l());
                var i = function(t) {
                    e[0].checked && r.$setViewValue(n.value, t && t.type)
                };
                e.on("click", i), r.$render = function() {
                    var t = n.value;
                    e[0].checked = t == r.$viewValue
                }, n.$observe("value", r.$render)
            }
            function Ur(t, e, n, i, o) {
                var a;
                if ($(i)) {
                    if (a = t(i), !a.constant)
                        throw r("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, i);
                    return a(e)
                }
                return o
            }
            function Vr(t, e, n, r, i, o, a, s) {
                var u = Ur(s, t, "ngTrueValue", n.ngTrueValue, !0), l = Ur(s, t, "ngFalseValue", n.ngFalseValue, !1), c = function(t) {
                    r.$setViewValue(e[0].checked, t && t.type)
                };
                e.on("click", c), r.$render = function() {
                    e[0].checked = r.$viewValue
                }, r.$isEmpty = function(t) {
                    return t === !1
                }, r.$formatters.push(function(t) {
                    return q(t, u)
                }), r.$parsers.push(function(t) {
                    return t ? u : l
                })
            }
            function Yr(t, e) {
                return t = "ngClass" + t, ["$animate", function(n) {
                        function r(t, e) {
                            var n = [];
                            t:for (var r = 0; r < t.length; r++) {
                                for (var i = t[r], o = 0; o < e.length; o++)
                                    if (i == e[o])
                                        continue t;
                                n.push(i)
                            }
                            return n
                        }
                        function i(t) {
                            if (di(t))
                                return t;
                            if (b(t))
                                return t.split(" ");
                            if (y(t)) {
                                var e = [];
                                return o(t, function(t, n) {
                                    t && (e = e.concat(n.split(" ")))
                                }), e
                            }
                            return t
                        }
                        return{restrict: "AC", link: function(a, s, u) {
                                function l(t) {
                                    var e = f(t, 1);
                                    u.$addClass(e)
                                }
                                function c(t) {
                                    var e = f(t, -1);
                                    u.$removeClass(e)
                                }
                                function f(t, e) {
                                    var n = s.data("$classCounts") || {}, r = [];
                                    return o(t, function(t) {
                                        (e > 0 || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === +(e > 0) && r.push(t))
                                    }), s.data("$classCounts", n), r.join(" ")
                                }
                                function d(t, e) {
                                    var i = r(e, t), o = r(t, e);
                                    i = f(i, 1), o = f(o, -1), i && i.length && n.addClass(s, i), o && o.length && n.removeClass(s, o)
                                }
                                function p(t) {
                                    if (e === !0 || a.$index % 2 === e) {
                                        var n = i(t || []);
                                        if (h) {
                                            if (!q(t, h)) {
                                                var r = i(h);
                                                d(r, n)
                                            }
                                        } else
                                            l(n)
                                    }
                                    h = F(t)
                                }
                                var h;
                                a.$watch(u[t], p, !0), u.$observe("class", function() {
                                    p(a.$eval(u[t]))
                                }), "ngClass" !== t && a.$watch("$index", function(n, r) {
                                    var o = 1 & n;
                                    if (o !== (1 & r)) {
                                        var s = i(a.$eval(u[t]));
                                        o === e ? l(s) : c(s)
                                    }
                                })
                            }}
                    }]
            }
            function Br(t) {
                function e(t, e, u) {
                    e === n ? r("$pending", t, u) : i("$pending", t, u), M(e) ? e ? (f(s.$error, t, u), c(s.$$success, t, u)) : (c(s.$error, t, u), f(s.$$success, t, u)) : (f(s.$error, t, u), f(s.$$success, t, u)), s.$pending ? (o(ya, !0), s.$valid = s.$invalid = n, a("", null)) : (o(ya, !1), s.$valid = Wr(s.$error), s.$invalid = !s.$valid, a("", s.$valid));
                    var l;
                    l = s.$pending && s.$pending[t] ? n : s.$error[t] ? !1 : s.$$success[t] ? !0 : null, a(t, l), d.$setValidity(t, l, s)
                }
                function r(t, e, n) {
                    s[t] || (s[t] = {}), c(s[t], e, n)
                }
                function i(t, e, r) {
                    s[t] && f(s[t], e, r), Wr(s[t]) && (s[t] = n)
                }
                function o(t, e) {
                    e && !l[t] ? (p.addClass(u, t), l[t] = !0) : !e && l[t] && (p.removeClass(u, t), l[t] = !1)
                }
                function a(t, e) {
                    t = t ? "-" + ne(t, "-") : "", o(pa + t, e === !0), o(ha + t, e === !1)
                }
                var s = t.ctrl, u = t.$element, l = {}, c = t.set, f = t.unset, d = t.parentForm, p = t.$animate;
                l[ha] = !(l[pa] = u.hasClass(pa)), s.$setValidity = e
            }
            function Wr(t) {
                if (t)
                    for (var e in t)
                        return!1;
                return!0
            }
            var zr = /^\/(.+)\/([a-z]*)$/, Gr = "validity", Xr = function(t) {
                return b(t) ? t.toLowerCase() : t
            }, Zr = Object.prototype.hasOwnProperty, Jr = function(t) {
                return b(t) ? t.toUpperCase() : t
            }, Qr = function(t) {
                return b(t) ? t.replace(/[A-Z]/g, function(t) {
                    return String.fromCharCode(32 | t.charCodeAt(0))
                }) : t
            }, Kr = function(t) {
                return b(t) ? t.replace(/[a-z]/g, function(t) {
                    return String.fromCharCode(-33 & t.charCodeAt(0))
                }) : t
            };
            "i" !== "I".toLowerCase() && (Xr = Qr, Jr = Kr);
            var ti, ei, ni, ri, ii = [].slice, oi = [].splice, ai = [].push, si = Object.prototype.toString, ui = r("ng"), li = t.angular || (t.angular = {}), ci = 0;
            ti = e.documentMode, h.$inject = [], m.$inject = [];
            var fi, di = Array.isArray, pi = function(t) {
                return b(t) ? t.trim() : t
            }, hi = function(t) {
                return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
            }, mi = function() {
                if ($(mi.isActive_))
                    return mi.isActive_;
                var t = !(!e.querySelector("[ng-csp]") && !e.querySelector("[data-ng-csp]"));
                if (!t)
                    try {
                        new Function("")
                    } catch (n) {
                        t = !0
                    }
                return mi.isActive_ = t
            }, gi = ["ng-", "data-ng-", "ng:", "x-ng-"], vi = /[A-Z]/g, $i = !1, yi = 1, bi = 3, wi = 8, xi = 9, ki = 11, Ci = {full: "1.3.15", major: 1, minor: 3, dot: 15, codeName: "locality-filtration"};
            be.expando = "ng339";
            var Ti = be.cache = {}, Si = 1, Di = function(t, e, n) {
                t.addEventListener(e, n, !1)
            }, Ei = function(t, e, n) {
                t.removeEventListener(e, n, !1)
            };
            be._data = function(t) {
                return this.cache[t[this.expando]] || {}
            };
            var _i = /([\:\-\_]+(.))/g, Mi = /^moz([A-Z])/, Ai = {mouseleave: "mouseout", mouseenter: "mouseover"}, Oi = r("jqLite"), Ni = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ji = /<|&#?\w+;/, Pi = /<([\w:]+)/, Ii = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fi = {option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
            Fi.optgroup = Fi.option, Fi.tbody = Fi.tfoot = Fi.colgroup = Fi.caption = Fi.thead, Fi.th = Fi.td;
            var qi = be.prototype = {ready: function(n) {
                    function r() {
                        i || (i = !0, n())
                    }
                    var i = !1;
                    "complete" === e.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), be(t).on("load", r))
                }, toString: function() {
                    var t = [];
                    return o(this, function(e) {
                        t.push("" + e)
                    }), "[" + t.join(", ") + "]"
                }, eq: function(t) {
                    return ei(t >= 0 ? this[t] : this[this.length + t])
                }, length: 0, push: ai, sort: [].sort, splice: [].splice}, Ri = {};
            o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(t) {
                Ri[Xr(t)] = t
            });
            var Hi = {};
            o("input,select,option,textarea,button,form,details".split(","), function(t) {
                Hi[t] = !0
            });
            var Li = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
            o({data: Se, removeData: Ce}, function(t, e) {
                be[e] = t
            }), o({data: Se, inheritedData: Oe, scope: function(t) {
                    return ei.data(t, "$scope") || Oe(t.parentNode || t, ["$isolateScope", "$scope"])
                }, isolateScope: function(t) {
                    return ei.data(t, "$isolateScope") || ei.data(t, "$isolateScopeNoTemplate")
                }, controller: Ae, injector: function(t) {
                    return Oe(t, "$injector")
                }, removeAttr: function(t, e) {
                    t.removeAttribute(e)
                }, hasClass: De, css: function(t, e, n) {
                    return e = me(e), $(n) ? void(t.style[e] = n) : t.style[e]
                }, attr: function(t, e, r) {
                    var i = Xr(e);
                    if (Ri[i]) {
                        if (!$(r))
                            return t[e] || (t.attributes.getNamedItem(e) || h).specified ? i : n;
                        r ? (t[e] = !0, t.setAttribute(e, i)) : (t[e] = !1, t.removeAttribute(i))
                    } else if ($(r))
                        t.setAttribute(e, r);
                    else if (t.getAttribute) {
                        var o = t.getAttribute(e, 2);
                        return null === o ? n : o
                    }
                }, prop: function(t, e, n) {
                    return $(n) ? void(t[e] = n) : t[e]
                }, text: function() {
                    function t(t, e) {
                        if (v(e)) {
                            var n = t.nodeType;
                            return n === yi || n === bi ? t.textContent : ""
                        }
                        t.textContent = e
                    }
                    return t.$dv = "", t
                }(), val: function(t, e) {
                    if (v(e)) {
                        if (t.multiple && "select" === j(t)) {
                            var n = [];
                            return o(t.options, function(t) {
                                t.selected && n.push(t.value || t.text)
                            }), 0 === n.length ? null : n
                        }
                        return t.value
                    }
                    t.value = e
                }, html: function(t, e) {
                    return v(e) ? t.innerHTML : (xe(t, !0), void(t.innerHTML = e))
                }, empty: Ne}, function(t, e) {
                be.prototype[e] = function(e, r) {
                    var i, o, a = this.length;
                    if (t !== Ne && (2 == t.length && t !== De && t !== Ae ? e : r) === n) {
                        if (y(e)) {
                            for (i = 0; a > i; i++)
                                if (t === Se)
                                    t(this[i], e);
                                else
                                    for (o in e)
                                        t(this[i], o, e[o]);
                            return this
                        }
                        for (var s = t.$dv, u = s === n ? Math.min(a, 1) : a, l = 0; u > l; l++) {
                            var c = t(this[l], e, r);
                            s = s ? s + c : c
                        }
                        return s
                    }
                    for (i = 0; a > i; i++)
                        t(this[i], e, r);
                    return this
                }
            }), o({removeData: Ce, on: function za(t, e, n, r) {
                    if ($(r))
                        throw Oi("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                    if (ve(t)) {
                        var i = Te(t, !0), o = i.events, a = i.handle;
                        a || (a = i.handle = qe(t, o));
                        for (var s = e.indexOf(" ") >= 0 ? e.split(" ") : [e], u = s.length; u--; ) {
                            e = s[u];
                            var l = o[e];
                            l || (o[e] = [], "mouseenter" === e || "mouseleave" === e ? za(t, Ai[e], function(t) {
                                var n = this, r = t.relatedTarget;
                                (!r || r !== n && !n.contains(r)) && a(t, e)
                            }) : "$destroy" !== e && Di(t, e, a), l = o[e]), l.push(n)
                        }
                    }
                }, off: ke, one: function(t, e, n) {
                    t = ei(t), t.on(e, function r() {
                        t.off(e, n), t.off(e, r)
                    }), t.on(e, n)
                }, replaceWith: function(t, e) {
                    var n, r = t.parentNode;
                    xe(t), o(new be(e), function(e) {
                        n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), n = e
                    })
                }, children: function(t) {
                    var e = [];
                    return o(t.childNodes, function(t) {
                        t.nodeType === yi && e.push(t)
                    }), e
                }, contents: function(t) {
                    return t.contentDocument || t.childNodes || []
                }, append: function(t, e) {
                    var n = t.nodeType;
                    if (n === yi || n === ki) {
                        e = new be(e);
                        for (var r = 0, i = e.length; i > r; r++) {
                            var o = e[r];
                            t.appendChild(o)
                        }
                    }
                }, prepend: function(t, e) {
                    if (t.nodeType === yi) {
                        var n = t.firstChild;
                        o(new be(e), function(e) {
                            t.insertBefore(e, n)
                        })
                    }
                }, wrap: function(t, e) {
                    e = ei(e).eq(0).clone()[0];
                    var n = t.parentNode;
                    n && n.replaceChild(e, t), e.appendChild(t)
                }, remove: je, detach: function(t) {
                    je(t, !0)
                }, after: function(t, e) {
                    var n = t, r = t.parentNode;
                    e = new be(e);
                    for (var i = 0, o = e.length; o > i; i++) {
                        var a = e[i];
                        r.insertBefore(a, n.nextSibling), n = a
                    }
                }, addClass: _e, removeClass: Ee, toggleClass: function(t, e, n) {
                    e && o(e.split(" "), function(e) {
                        var r = n;
                        v(r) && (r = !De(t, e)), (r ? _e : Ee)(t, e)
                    })
                }, parent: function(t) {
                    var e = t.parentNode;
                    return e && e.nodeType !== ki ? e : null
                }, next: function(t) {
                    return t.nextElementSibling
                }, find: function(t, e) {
                    return t.getElementsByTagName ? t.getElementsByTagName(e) : []
                }, clone: we, triggerHandler: function(t, e, n) {
                    var r, i, a, s = e.type || e, u = Te(t), l = u && u.events, c = l && l[s];
                    c && (r = {preventDefault: function() {
                            this.defaultPrevented = !0
                        }, isDefaultPrevented: function() {
                            return this.defaultPrevented === !0
                        }, stopImmediatePropagation: function() {
                            this.immediatePropagationStopped = !0
                        }, isImmediatePropagationStopped: function() {
                            return this.immediatePropagationStopped === !0
                        }, stopPropagation: h, type: s, target: t}, e.type && (r = f(r, e)), i = F(c), a = n ? [r].concat(n) : [r], o(i, function(e) {
                        r.isImmediatePropagationStopped() || e.apply(t, a)
                    }))
                }}, function(t, e) {
                be.prototype[e] = function(e, n, r) {
                    for (var i, o = 0, a = this.length; a > o; o++)
                        v(i) ? (i = t(this[o], e, n, r), $(i) && (i = ei(i))) : Me(i, t(this[o], e, n, r));
                    return $(i) ? i : this
                }, be.prototype.bind = be.prototype.on, be.prototype.unbind = be.prototype.off
            }), Le.prototype = {put: function(t, e) {
                    this[He(t, this.nextUid)] = e
                }, get: function(t) {
                    return this[He(t, this.nextUid)]
                }, remove: function(t) {
                    var e = this[t = He(t, this.nextUid)];
                    return delete this[t], e
                }};
            var Ui = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Vi = /,/, Yi = /^\s*(_?)(\S+?)\1\s*$/, Bi = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Wi = r("$injector");
            Ye.$$annotate = Ve;
            var zi = r("$animate"), Gi = ["$provide", function(t) {
                    this.$$selectors = {}, this.register = function(e, n) {
                        var r = e + "-animation";
                        if (e && "." != e.charAt(0))
                            throw zi("notcsel", "Expecting class selector starting with '.' got '{0}'.", e);
                        this.$$selectors[e.substr(1)] = r, t.factory(r, n)
                    }, this.classNameFilter = function(t) {
                        return 1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null), this.$$classNameFilter
                    }, this.$get = ["$$q", "$$asyncCallback", "$rootScope", function(t, e, n) {
                            function r(e) {
                                var r, i = t.defer();
                                return i.promise.$$cancelFn = function() {
                                    r && r()
                                }, n.$$postDigest(function() {
                                    r = e(function() {
                                        i.resolve()
                                    })
                                }), i.promise
                            }
                            function i(t, e) {
                                var n = [], r = [], i = le();
                                return o((t.attr("class") || "").split(/\s+/), function(t) {
                                    i[t] = !0
                                }), o(e, function(t, e) {
                                    var o = i[e];
                                    t === !1 && o ? r.push(e) : t !== !0 || o || n.push(e)
                                }), n.length + r.length > 0 && [n.length ? n : null, r.length ? r : null]
                            }
                            function a(t, e, n) {
                                for (var r = 0, i = e.length; i > r; ++r) {
                                    var o = e[r];
                                    t[o] = n
                                }
                            }
                            function s() {
                                return l || (l = t.defer(), e(function() {
                                    l.resolve(), l = null
                                })), l.promise
                            }
                            function u(t, e) {
                                if (li.isObject(e)) {
                                    var n = f(e.from || {}, e.to || {});
                                    t.css(n)
                                }
                            }
                            var l;
                            return{animate: function(t, e, n) {
                                    return u(t, {from: e, to: n}), s()
                                }, enter: function(t, e, n, r) {
                                    return u(t, r), n ? n.after(t) : e.prepend(t), s()
                                }, leave: function(t, e) {
                                    return u(t, e), t.remove(), s()
                                }, move: function(t, e, n, r) {
                                    return this.enter(t, e, n, r)
                                }, addClass: function(t, e, n) {
                                    return this.setClass(t, e, [], n)
                                }, $$addClassImmediately: function(t, e, n) {
                                    return t = ei(t), e = b(e) ? e : di(e) ? e.join(" ") : "", o(t, function(t) {
                                        _e(t, e)
                                    }), u(t, n), s()
                                }, removeClass: function(t, e, n) {
                                    return this.setClass(t, [], e, n)
                                }, $$removeClassImmediately: function(t, e, n) {
                                    return t = ei(t), e = b(e) ? e : di(e) ? e.join(" ") : "", o(t, function(t) {
                                        Ee(t, e)
                                    }), u(t, n), s()
                                }, setClass: function(t, e, n, o) {
                                    var s = this, u = "$$animateClasses", l = !1;
                                    t = ei(t);
                                    var c = t.data(u);
                                    c ? o && c.options && (c.options = li.extend(c.options || {}, o)) : (c = {classes: {}, options: o}, l = !0);
                                    var f = c.classes;
                                    return e = di(e) ? e : e.split(" "), n = di(n) ? n : n.split(" "), a(f, e, !0), a(f, n, !1), l && (c.promise = r(function(e) {
                                        var n = t.data(u);
                                        if (t.removeData(u), n) {
                                            var r = i(t, n.classes);
                                            r && s.$$setClassImmediately(t, r[0], r[1], n.options)
                                        }
                                        e()
                                    }), t.data(u, c)), c.promise
                                }, $$setClassImmediately: function(t, e, n, r) {
                                    return e && this.$$addClassImmediately(t, e), n && this.$$removeClassImmediately(t, n), u(t, r), s()
                                }, enabled: h, cancel: h}
                        }]
                }], Xi = r("$compile");
            Je.$inject = ["$provide", "$$sanitizeUriProvider"];
            var Zi = /^((?:x|data)[\:\-_])/i, Ji = r("$controller"), Qi = "application/json", Ki = {"Content-Type": Qi + ";charset=utf-8"}, to = /^\[|^\{(?!\{)/, eo = {"[": /]$/, "{": /}$/}, no = /^\)\]\}',?\n/, ro = r("$interpolate"), io = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, oo = {http: 80, https: 443, ftp: 21}, ao = r("$location"), so = {$$html5: !1, $$replace: !1, absUrl: _n("$$absUrl"), url: function(t) {
                    if (v(t))
                        return this.$$url;
                    var e = io.exec(t);
                    return(e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), this.hash(e[5] || ""), this
                }, protocol: _n("$$protocol"), host: _n("$$host"), port: _n("$$port"), path: Mn("$$path", function(t) {
                    return t = null !== t ? t.toString() : "", "/" == t.charAt(0) ? t : "/" + t
                }), search: function(t, e) {
                    switch (arguments.length) {
                        case 0:
                            return this.$$search;
                        case 1:
                            if (b(t) || w(t))
                                t = t.toString(), this.$$search = z(t);
                            else {
                                if (!y(t))
                                    throw ao("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                                t = I(t, {}), o(t, function(e, n) {
                                    null == e && delete t[n]
                                }), this.$$search = t
                            }
                            break;
                        default:
                            v(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
                    }
                    return this.$$compose(), this
                }, hash: Mn("$$hash", function(t) {
                    return null !== t ? t.toString() : ""
                }), replace: function() {
                    return this.$$replace = !0, this
                }};
            o([En, Dn, Sn], function(t) {
                t.prototype = Object.create(so), t.prototype.state = function(e) {
                    if (!arguments.length)
                        return this.$$state;
                    if (t !== Sn || !this.$$html5)
                        throw ao("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
                    return this.$$state = v(e) ? null : e, this
                }
            });
            var uo = r("$parse"), lo = Function.prototype.call, co = Function.prototype.apply, fo = Function.prototype.bind, po = le();
            o({"null": function() {
                    return null
                }, "true": function() {
                    return!0
                }, "false": function() {
                    return!1
                }, undefined: function() {
                }}, function(t, e) {
                t.constant = t.literal = t.sharedGetter = !0, po[e] = t
            }), po["this"] = function(t) {
                return t
            }, po["this"].sharedGetter = !0;
            var ho = f(le(), {"+": function(t, e, r, i) {
                    return r = r(t, e), i = i(t, e), $(r) ? $(i) ? r + i : r : $(i) ? i : n
                }, "-": function(t, e, n, r) {
                    return n = n(t, e), r = r(t, e), ($(n) ? n : 0) - ($(r) ? r : 0)
                }, "*": function(t, e, n, r) {
                    return n(t, e) * r(t, e)
                }, "/": function(t, e, n, r) {
                    return n(t, e) / r(t, e)
                }, "%": function(t, e, n, r) {
                    return n(t, e) % r(t, e)
                }, "===": function(t, e, n, r) {
                    return n(t, e) === r(t, e)
                }, "!==": function(t, e, n, r) {
                    return n(t, e) !== r(t, e)
                }, "==": function(t, e, n, r) {
                    return n(t, e) == r(t, e)
                }, "!=": function(t, e, n, r) {
                    return n(t, e) != r(t, e)
                }, "<": function(t, e, n, r) {
                    return n(t, e) < r(t, e)
                }, ">": function(t, e, n, r) {
                    return n(t, e) > r(t, e)
                }, "<=": function(t, e, n, r) {
                    return n(t, e) <= r(t, e)
                }, ">=": function(t, e, n, r) {
                    return n(t, e) >= r(t, e)
                }, "&&": function(t, e, n, r) {
                    return n(t, e) && r(t, e)
                }, "||": function(t, e, n, r) {
                    return n(t, e) || r(t, e)
                }, "!": function(t, e, n) {
                    return!n(t, e)
                }, "=": !0, "|": !0}), mo = {n: "\n", f: "\f", r: "\r", t: "	", v: "", "'": "'", '"': '"'}, go = function(t) {
                this.options = t
            };
            go.prototype = {constructor: go, lex: function(t) {
                    for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length; ) {
                        var e = this.text.charAt(this.index);
                        if ('"' === e || "'" === e)
                            this.readString(e);
                        else if (this.isNumber(e) || "." === e && this.isNumber(this.peek()))
                            this.readNumber();
                        else if (this.isIdent(e))
                            this.readIdent();
                        else if (this.is(e, "(){}[].,;:?"))
                            this.tokens.push({index: this.index, text: e}), this.index++;
                        else if (this.isWhitespace(e))
                            this.index++;
                        else {
                            var n = e + this.peek(), r = n + this.peek(2), i = ho[e], o = ho[n], a = ho[r];
                            if (i || o || a) {
                                var s = a ? r : o ? n : e;
                                this.tokens.push({index: this.index, text: s, operator: !0}), this.index += s.length
                            } else
                                this.throwError("Unexpected next character ", this.index, this.index + 1)
                        }
                    }
                    return this.tokens
                }, is: function(t, e) {
                    return-1 !== e.indexOf(t)
                }, peek: function(t) {
                    var e = t || 1;
                    return this.index + e < this.text.length ? this.text.charAt(this.index + e) : !1
                }, isNumber: function(t) {
                    return t >= "0" && "9" >= t && "string" == typeof t
                }, isWhitespace: function(t) {
                    return" " === t || "\r" === t || "	" === t || "\n" === t || "" === t || " " === t
                }, isIdent: function(t) {
                    return t >= "a" && "z" >= t || t >= "A" && "Z" >= t || "_" === t || "$" === t
                }, isExpOperator: function(t) {
                    return"-" === t || "+" === t || this.isNumber(t)
                }, throwError: function(t, e, n) {
                    n = n || this.index;
                    var r = $(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n;
                    throw uo("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, r, this.text)
                }, readNumber: function() {
                    for (var t = "", e = this.index; this.index < this.text.length; ) {
                        var n = Xr(this.text.charAt(this.index));
                        if ("." == n || this.isNumber(n))
                            t += n;
                        else {
                            var r = this.peek();
                            if ("e" == n && this.isExpOperator(r))
                                t += n;
                            else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == t.charAt(t.length - 1))
                                t += n;
                            else {
                                if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != t.charAt(t.length - 1))
                                    break;
                                this.throwError("Invalid exponent")
                            }
                        }
                        this.index++
                    }
                    this.tokens.push({index: e, text: t, constant: !0, value: Number(t)})
                }, readIdent: function() {
                    for (var t = this.index; this.index < this.text.length; ) {
                        var e = this.text.charAt(this.index);
                        if (!this.isIdent(e) && !this.isNumber(e))
                            break;
                        this.index++
                    }
                    this.tokens.push({index: t, text: this.text.slice(t, this.index), identifier: !0})
                }, readString: function(t) {
                    var e = this.index;
                    this.index++;
                    for (var n = "", r = t, i = !1; this.index < this.text.length; ) {
                        var o = this.text.charAt(this.index);
                        if (r += o, i) {
                            if ("u" === o) {
                                var a = this.text.substring(this.index + 1, this.index + 5);
                                a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
                            } else {
                                var s = mo[o];
                                n += s || o
                            }
                            i = !1
                        } else if ("\\" === o)
                            i = !0;
                        else {
                            if (o === t)
                                return this.index++, void this.tokens.push({index: e, text: r, constant: !0, value: n});
                            n += o
                        }
                        this.index++
                    }
                    this.throwError("Unterminated quote", e)
                }};
            var vo = function(t, e, n) {
                this.lexer = t, this.$filter = e, this.options = n
            };
            vo.ZERO = f(function() {
                return 0
            }, {sharedGetter: !0, constant: !0}), vo.prototype = {constructor: vo, parse: function(t) {
                    this.text = t, this.tokens = this.lexer.lex(t);
                    var e = this.statements();
                    return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e.literal = !!e.literal, e.constant = !!e.constant, e
                }, primary: function() {
                    var t;
                    this.expect("(") ? (t = this.filterChain(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.peek().identifier && this.peek().text in po ? t = po[this.consume().text] : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek());
                    for (var e, n; e = this.expect("(", "[", "."); )
                        "(" === e.text ? (t = this.functionCall(t, n), n = null) : "[" === e.text ? (n = t, t = this.objectIndex(t)) : "." === e.text ? (n = t, t = this.fieldAccess(t)) : this.throwError("IMPOSSIBLE");
                    return t
                }, throwError: function(t, e) {
                    throw uo("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
                }, peekToken: function() {
                    if (0 === this.tokens.length)
                        throw uo("ueoe", "Unexpected end of expression: {0}", this.text);
                    return this.tokens[0]
                }, peek: function(t, e, n, r) {
                    return this.peekAhead(0, t, e, n, r)
                }, peekAhead: function(t, e, n, r, i) {
                    if (this.tokens.length > t) {
                        var o = this.tokens[t], a = o.text;
                        if (a === e || a === n || a === r || a === i || !e && !n && !r && !i)
                            return o
                    }
                    return!1
                }, expect: function(t, e, n, r) {
                    var i = this.peek(t, e, n, r);
                    return i ? (this.tokens.shift(), i) : !1
                }, consume: function(t) {
                    if (0 === this.tokens.length)
                        throw uo("ueoe", "Unexpected end of expression: {0}", this.text);
                    var e = this.expect(t);
                    return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), e
                }, unaryFn: function(t, e) {
                    var n = ho[t];
                    return f(function(t, r) {
                        return n(t, r, e)
                    }, {constant: e.constant, inputs: [e]})
                }, binaryFn: function(t, e, n, r) {
                    var i = ho[e];
                    return f(function(e, r) {
                        return i(e, r, t, n)
                    }, {constant: t.constant && n.constant, inputs: !r && [t, n]})
                }, identifier: function() {
                    for (var t = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "("); )
                        t += this.consume().text + this.consume().text;
                    return Ln(t, this.options, this.text)
                }, constant: function() {
                    var t = this.consume().value;
                    return f(function() {
                        return t
                    }, {constant: !0, literal: !0})
                }, statements: function() {
                    for (var t = []; ; )
                        if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && t.push(this.filterChain()), !this.expect(";"))
                            return 1 === t.length ? t[0] : function(e, n) {
                                for (var r, i = 0, o = t.length; o > i; i++)
                                    r = t[i](e, n);
                                return r
                            }
                }, filterChain: function() {
                    for (var t, e = this.expression(); t = this.expect("|"); )
                        e = this.filter(e);
                    return e
                }, filter: function(t) {
                    var e, r, i = this.$filter(this.consume().text);
                    if (this.peek(":"))
                        for (e = [], r = []; this.expect(":"); )
                            e.push(this.expression());
                    var o = [t].concat(e || []);
                    return f(function(o, a) {
                        var s = t(o, a);
                        if (r) {
                            r[0] = s;
                            for (var u = e.length; u--; )
                                r[u + 1] = e[u](o, a);
                            return i.apply(n, r)
                        }
                        return i(s)
                    }, {constant: !i.$stateful && o.every(In), inputs: !i.$stateful && o})
                }, expression: function() {
                    return this.assignment()
                }, assignment: function() {
                    var t, e, n = this.ternary();
                    return(e = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, e.index) + "] can not be assigned to", e), t = this.ternary(), f(function(e, r) {
                        return n.assign(e, t(e, r), r)
                    }, {inputs: [n, t]})) : n
                }, ternary: function() {
                    var t, e, n = this.logicalOR();
                    if ((e = this.expect("?")) && (t = this.assignment(), this.consume(":"))) {
                        var r = this.assignment();
                        return f(function(e, i) {
                            return n(e, i) ? t(e, i) : r(e, i)
                        }, {constant: n.constant && t.constant && r.constant})
                    }
                    return n
                }, logicalOR: function() {
                    for (var t, e = this.logicalAND(); t = this.expect("||"); )
                        e = this.binaryFn(e, t.text, this.logicalAND(), !0);
                    return e
                }, logicalAND: function() {
                    for (var t, e = this.equality(); t = this.expect("&&"); )
                        e = this.binaryFn(e, t.text, this.equality(), !0);
                    return e
                }, equality: function() {
                    for (var t, e = this.relational(); t = this.expect("==", "!=", "===", "!=="); )
                        e = this.binaryFn(e, t.text, this.relational());
                    return e
                }, relational: function() {
                    for (var t, e = this.additive(); t = this.expect("<", ">", "<=", ">="); )
                        e = this.binaryFn(e, t.text, this.additive());
                    return e
                }, additive: function() {
                    for (var t, e = this.multiplicative(); t = this.expect("+", "-"); )
                        e = this.binaryFn(e, t.text, this.multiplicative());
                    return e
                }, multiplicative: function() {
                    for (var t, e = this.unary(); t = this.expect("*", "/", "%"); )
                        e = this.binaryFn(e, t.text, this.unary());
                    return e
                }, unary: function() {
                    var t;
                    return this.expect("+") ? this.primary() : (t = this.expect("-")) ? this.binaryFn(vo.ZERO, t.text, this.unary()) : (t = this.expect("!")) ? this.unaryFn(t.text, this.unary()) : this.primary()
                }, fieldAccess: function(t) {
                    var e = this.identifier();
                    return f(function(r, i, o) {
                        var a = o || t(r, i);
                        return null == a ? n : e(a)
                    }, {assign: function(n, r, i) {
                            var o = t(n, i);
                            return o || t.assign(n, o = {}, i), e.assign(o, r)
                        }})
                }, objectIndex: function(t) {
                    var e = this.text, r = this.expression();
                    return this.consume("]"), f(function(i, o) {
                        var a, s = t(i, o), u = r(i, o);
                        return Nn(u, e), s ? a = jn(s[u], e) : n
                    }, {assign: function(n, i, o) {
                            var a = Nn(r(n, o), e), s = jn(t(n, o), e);
                            return s || t.assign(n, s = {}, o), s[a] = i
                        }})
                }, functionCall: function(t, e) {
                    var r = [];
                    if (")" !== this.peekToken().text)
                        do
                            r.push(this.expression());
                        while (this.expect(","));
                    this.consume(")");
                    var i = this.text, o = r.length ? [] : null;
                    return function(a, s) {
                        var u = e ? e(a, s) : $(e) ? n : a, l = t(a, s, u) || h;
                        if (o)
                            for (var c = r.length; c--; )
                                o[c] = jn(r[c](a, s), i);
                        jn(u, i), Pn(l, i);
                        var f = l.apply ? l.apply(u, o) : l(o[0], o[1], o[2], o[3], o[4]);
                        return o && (o.length = 0), jn(f, i)
                    }
                }, arrayDeclaration: function() {
                    var t = [];
                    if ("]" !== this.peekToken().text)
                        do {
                            if (this.peek("]"))
                                break;
                            t.push(this.expression())
                        } while (this.expect(","));
                    return this.consume("]"), f(function(e, n) {
                        for (var r = [], i = 0, o = t.length; o > i; i++)
                            r.push(t[i](e, n));
                        return r
                    }, {literal: !0, constant: t.every(In), inputs: t})
                }, object: function() {
                    var t = [], e = [];
                    if ("}" !== this.peekToken().text)
                        do {
                            if (this.peek("}"))
                                break;
                            var n = this.consume();
                            n.constant ? t.push(n.value) : n.identifier ? t.push(n.text) : this.throwError("invalid key", n), this.consume(":"), e.push(this.expression())
                        } while (this.expect(","));
                    return this.consume("}"), f(function(n, r) {
                        for (var i = {}, o = 0, a = e.length; a > o; o++)
                            i[t[o]] = e[o](n, r);
                        return i
                    }, {literal: !0, constant: e.every(In), inputs: e})
                }};
            var $o = le(), yo = le(), bo = Object.prototype.valueOf, wo = r("$sce"), xo = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"}, Xi = r("$compile"), ko = e.createElement("a"), Co = ir(t.location.href);
            sr.$inject = ["$provide"], fr.$inject = ["$locale"], dr.$inject = ["$locale"];
            var To = ".", So = {yyyy: mr("FullYear", 4), yy: mr("FullYear", 2, 0, !0), y: mr("FullYear", 1), MMMM: gr("Month"), MMM: gr("Month", !0), MM: mr("Month", 2, 1), M: mr("Month", 1, 1), dd: mr("Date", 2), d: mr("Date", 1), HH: mr("Hours", 2), H: mr("Hours", 1), hh: mr("Hours", 2, -12), h: mr("Hours", 1, -12), mm: mr("Minutes", 2), m: mr("Minutes", 1), ss: mr("Seconds", 2), s: mr("Seconds", 1), sss: mr("Milliseconds", 3), EEEE: gr("Day"), EEE: gr("Day", !0), a: wr, Z: vr, ww: br(2), w: br(1), G: xr, GG: xr, GGG: xr, GGGG: kr}, Do = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, Eo = /^\-?\d+$/;
            Cr.$inject = ["$locale"];
            var _o = g(Xr), Mo = g(Jr);
            Dr.$inject = ["$parse"];
            var Ao = g({restrict: "E", compile: function(t, e) {
                    return e.href || e.xlinkHref || e.name ? void 0 : function(t, e) {
                        if ("a" === e[0].nodeName.toLowerCase()) {
                            var n = "[object SVGAnimatedString]" === si.call(e.prop("href")) ? "xlink:href" : "href";
                            e.on("click", function(t) {
                                e.attr(n) || t.preventDefault()
                            })
                        }
                    }
                }}), Oo = {};
            o(Ri, function(t, e) {
                if ("multiple" != t) {
                    var n = Qe("ng-" + e);
                    Oo[n] = function() {
                        return{restrict: "A", priority: 100, link: function(t, r, i) {
                                t.$watch(i[n], function(t) {
                                    i.$set(e, !!t)
                                })
                            }}
                    }
                }
            }), o(Li, function(t, e) {
                Oo[e] = function() {
                    return{priority: 100, link: function(t, n, r) {
                            if ("ngPattern" === e && "/" == r.ngPattern.charAt(0)) {
                                var i = r.ngPattern.match(zr);
                                if (i)
                                    return void r.$set("ngPattern", new RegExp(i[1], i[2]))
                            }
                            t.$watch(r[e], function(t) {
                                r.$set(e, t)
                            })
                        }}
                }
            }), o(["src", "srcset", "href"], function(t) {
                var e = Qe("ng-" + t);
                Oo[e] = function() {
                    return{priority: 99, link: function(n, r, i) {
                            var o = t, a = t;
                            "href" === t && "[object SVGAnimatedString]" === si.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(e, function(e) {
                                return e ? (i.$set(a, e), void(ti && o && r.prop(o, i[a]))) : void("href" === t && i.$set(a, null))
                            })
                        }}
                }
            });
            var No = {$addControl: h, $$renameControl: _r, $removeControl: h, $setValidity: h, $setDirty: h, $setPristine: h, $setSubmitted: h}, jo = "ng-submitted";
            Mr.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
            var Po = function(t) {
                return["$timeout", function(e) {
                        var r = {name: "form", restrict: t ? "EAC" : "E", controller: Mr, compile: function(r, i) {
                                r.addClass(ma).addClass(pa);
                                var o = i.name ? "name" : t && i.ngForm ? "ngForm" : !1;
                                return{pre: function(t, r, i, a) {
                                        if (!("action"in i)) {
                                            var s = function(e) {
                                                t.$apply(function() {
                                                    a.$commitViewValue(), a.$setSubmitted()
                                                }), e.preventDefault()
                                            };
                                            Di(r[0], "submit", s), r.on("$destroy", function() {
                                                e(function() {
                                                    Ei(r[0], "submit", s)
                                                }, 0, !1)
                                            })
                                        }
                                        var u = a.$$parentForm;
                                        o && (Fn(t, null, a.$name, a, a.$name), i.$observe(o, function(e) {
                                            a.$name !== e && (Fn(t, null, a.$name, n, a.$name), u.$$renameControl(a, e), Fn(t, null, a.$name, a, a.$name))
                                        })), r.on("$destroy", function() {
                                            u.$removeControl(a), o && Fn(t, null, i[o], n, a.$name), f(a, No)
                                        })
                                    }}
                            }};
                        return r
                    }]
            }, Io = Po(), Fo = Po(!0), qo = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Ro = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Ho = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Lo = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Uo = /^(\d{4})-(\d{2})-(\d{2})$/, Vo = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Yo = /^(\d{4})-W(\d\d)$/, Bo = /^(\d{4})-(\d\d)$/, Wo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, zo = {text: Or, date: Ir("date", Uo, Pr(Uo, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": Ir("datetimelocal", Vo, Pr(Vo, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"), time: Ir("time", Wo, Pr(Wo, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: Ir("week", Yo, jr, "yyyy-Www"), month: Ir("month", Bo, Pr(Bo, ["yyyy", "MM"]), "yyyy-MM"), number: qr, url: Rr, email: Hr, radio: Lr, checkbox: Vr, hidden: h, button: h, submit: h, reset: h, file: h}, Go = ["$browser", "$sniffer", "$filter", "$parse", function(t, e, n, r) {
                    return{restrict: "E", require: ["?ngModel"], link: {pre: function(i, o, a, s) {
                                s[0] && (zo[Xr(a.type)] || zo.text)(i, o, a, s[0], e, t, n, r)
                            }}}
                }], Xo = /^(true|false|\d+)$/, Zo = function() {
                return{restrict: "A", priority: 100, compile: function(t, e) {
                        return Xo.test(e.ngValue) ? function(t, e, n) {
                            n.$set("value", t.$eval(n.ngValue))
                        } : function(t, e, n) {
                            t.$watch(n.ngValue, function(t) {
                                n.$set("value", t)
                            })
                        }
                    }}
            }, Jo = ["$compile", function(t) {
                    return{restrict: "AC", compile: function(e) {
                            return t.$$addBindingClass(e), function(e, r, i) {
                                t.$$addBindingInfo(r, i.ngBind), r = r[0], e.$watch(i.ngBind, function(t) {
                                    r.textContent = t === n ? "" : t
                                })
                            }
                        }}
                }], Qo = ["$interpolate", "$compile", function(t, e) {
                    return{compile: function(r) {
                            return e.$$addBindingClass(r), function(r, i, o) {
                                var a = t(i.attr(o.$attr.ngBindTemplate));
                                e.$$addBindingInfo(i, a.expressions), i = i[0], o.$observe("ngBindTemplate", function(t) {
                                    i.textContent = t === n ? "" : t
                                })
                            }
                        }}
                }], Ko = ["$sce", "$parse", "$compile", function(t, e, n) {
                    return{restrict: "A", compile: function(r, i) {
                            var o = e(i.ngBindHtml), a = e(i.ngBindHtml, function(t) {
                                return(t || "").toString()
                            });
                            return n.$$addBindingClass(r), function(e, r, i) {
                                n.$$addBindingInfo(r, i.ngBindHtml), e.$watch(a, function() {
                                    r.html(t.getTrustedHtml(o(e)) || "")
                                })
                            }
                        }}
                }], ta = g({restrict: "A", require: "ngModel", link: function(t, e, n, r) {
                    r.$viewChangeListeners.push(function() {
                        t.$eval(n.ngChange)
                    })
                }}), ea = Yr("", !0), na = Yr("Odd", 0), ra = Yr("Even", 1), ia = Er({compile: function(t, e) {
                    e.$set("ngCloak", n), t.removeClass("ng-cloak")
                }}), oa = [function() {
                    return{restrict: "A", scope: !0, controller: "@", priority: 500}
                }], aa = {}, sa = {blur: !0, focus: !0};
            o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(t) {
                var e = Qe("ng-" + t);
                aa[e] = ["$parse", "$rootScope", function(n, r) {
                        return{restrict: "A", compile: function(i, o) {
                                var a = n(o[e], null, !0);
                                return function(e, n) {
                                    n.on(t, function(n) {
                                        var i = function() {
                                            a(e, {$event: n})
                                        };
                                        sa[t] && r.$$phase ? e.$evalAsync(i) : e.$apply(i)
                                    })
                                }
                            }}
                    }]
            });
            var ua = ["$animate", function(t) {
                    return{multiElement: !0, transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function(n, r, i, o, a) {
                            var s, u, l;
                            n.$watch(i.ngIf, function(n) {
                                n ? u || a(function(n, o) {
                                    u = o, n[n.length++] = e.createComment(" end ngIf: " + i.ngIf + " "), s = {clone: n}, t.enter(n, r.parent(), r)
                                }) : (l && (l.remove(), l = null), u && (u.$destroy(), u = null), s && (l = ue(s.clone), t.leave(l).then(function() {
                                    l = null
                                }), s = null))
                            })
                        }}
                }], la = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function(t, e, n, r) {
                    return{restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: li.noop, compile: function(i, o) {
                            var a = o.ngInclude || o.src, s = o.onload || "", u = o.autoscroll;
                            return function(i, o, l, c, f) {
                                var d, p, h, m = 0, g = function() {
                                    p && (p.remove(), p = null), d && (d.$destroy(), d = null), h && (n.leave(h).then(function() {
                                        p = null
                                    }), p = h, h = null)
                                };
                                i.$watch(r.parseAsResourceUrl(a), function(r) {
                                    var a = function() {
                                        !$(u) || u && !i.$eval(u) || e()
                                    }, l = ++m;
                                    r ? (t(r, !0).then(function(t) {
                                        if (l === m) {
                                            var e = i.$new();
                                            c.template = t;
                                            var u = f(e, function(t) {
                                                g(), n.enter(t, null, o).then(a)
                                            });
                                            d = e, h = u, d.$emit("$includeContentLoaded", r), i.$eval(s)
                                        }
                                    }, function() {
                                        l === m && (g(), i.$emit("$includeContentError", r))
                                    }), i.$emit("$includeContentRequested", r)) : (g(), c.template = null)
                                })
                            }
                        }}
                }], ca = ["$compile", function(t) {
                    return{restrict: "ECA", priority: -400, require: "ngInclude", link: function(n, r, i, o) {
                            return/SVG/.test(r[0].toString()) ? (r.empty(), void t($e(o.template, e).childNodes)(n, function(t) {
                                r.append(t)
                            }, {futureParentElement: r})) : (r.html(o.template), void t(r.contents())(n))
                        }}
                }], fa = Er({priority: 450, compile: function() {
                    return{pre: function(t, e, n) {
                            t.$eval(n.ngInit)
                        }}
                }}), da = function() {
                return{restrict: "A", priority: 100, require: "ngModel", link: function(t, e, r, i) {
                        var a = e.attr(r.$attr.ngList) || ", ", s = "false" !== r.ngTrim, u = s ? pi(a) : a, l = function(t) {
                            if (!v(t)) {
                                var e = [];
                                return t && o(t.split(u), function(t) {
                                    t && e.push(s ? pi(t) : t)
                                }), e
                            }
                        };
                        i.$parsers.push(l), i.$formatters.push(function(t) {
                            return di(t) ? t.join(a) : n
                        }), i.$isEmpty = function(t) {
                            return!t || !t.length
                        }
                    }}
            }, pa = "ng-valid", ha = "ng-invalid", ma = "ng-pristine", ga = "ng-dirty", va = "ng-untouched", $a = "ng-touched", ya = "ng-pending", ba = new r("ngModel"), wa = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(t, e, r, i, a, s, u, l, c, f) {
                    this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = f(r.name || "", !1)(t);
                    var d, p = a(r.ngModel), m = p.assign, g = p, y = m, b = null, x = this;
                    this.$$setOptions = function(t) {
                        if (x.$options = t, t && t.getterSetter) {
                            var e = a(r.ngModel + "()"), n = a(r.ngModel + "($$$p)");
                            g = function(t) {
                                var n = p(t);
                                return k(n) && (n = e(t)), n
                            }, y = function(t) {
                                k(p(t)) ? n(t, {$$$p: x.$modelValue}) : m(t, x.$modelValue)
                            }
                        } else if (!p.assign)
                            throw ba("nonassign", "Expression '{0}' is non-assignable. Element: {1}", r.ngModel, B(i))
                    }, this.$render = h, this.$isEmpty = function(t) {
                        return v(t) || "" === t || null === t || t !== t
                    };
                    var C = i.inheritedData("$formController") || No, T = 0;
                    Br({ctrl: this, $element: i, set: function(t, e) {
                            t[e] = !0
                        }, unset: function(t, e) {
                            delete t[e]
                        }, parentForm: C, $animate: s}), this.$setPristine = function() {
                        x.$dirty = !1, x.$pristine = !0, s.removeClass(i, ga), s.addClass(i, ma)
                    }, this.$setDirty = function() {
                        x.$dirty = !0, x.$pristine = !1, s.removeClass(i, ma), s.addClass(i, ga), C.$setDirty()
                    }, this.$setUntouched = function() {
                        x.$touched = !1, x.$untouched = !0, s.setClass(i, va, $a)
                    }, this.$setTouched = function() {
                        x.$touched = !0, x.$untouched = !1, s.setClass(i, $a, va)
                    }, this.$rollbackViewValue = function() {
                        u.cancel(b), x.$viewValue = x.$$lastCommittedViewValue, x.$render()
                    }, this.$validate = function() {
                        if (!w(x.$modelValue) || !isNaN(x.$modelValue)) {
                            var t = x.$$lastCommittedViewValue, e = x.$$rawModelValue, r = x.$valid, i = x.$modelValue, o = x.$options && x.$options.allowInvalid;
                            x.$$runValidators(e, t, function(t) {
                                o || r === t || (x.$modelValue = t ? e : n, x.$modelValue !== i && x.$$writeModelToScope())
                            })
                        }
                    }, this.$$runValidators = function(t, e, r) {
                        function i() {
                            var t = x.$$parserName || "parse";
                            return d !== n ? (d || (o(x.$validators, function(t, e) {
                                u(e, null)
                            }), o(x.$asyncValidators, function(t, e) {
                                u(e, null)
                            })), u(t, d), d) : (u(t, null), !0)
                        }
                        function a() {
                            var n = !0;
                            return o(x.$validators, function(r, i) {
                                var o = r(t, e);
                                n = n && o, u(i, o)
                            }), n ? !0 : (o(x.$asyncValidators, function(t, e) {
                                u(e, null)
                            }), !1)
                        }
                        function s() {
                            var r = [], i = !0;
                            o(x.$asyncValidators, function(o, a) {
                                var s = o(t, e);
                                if (!A(s))
                                    throw ba("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", s);
                                u(a, n), r.push(s.then(function() {
                                    u(a, !0)
                                }, function() {
                                    i = !1, u(a, !1)
                                }))
                            }), r.length ? c.all(r).then(function() {
                                l(i)
                            }, h) : l(!0)
                        }
                        function u(t, e) {
                            f === T && x.$setValidity(t, e)
                        }
                        function l(t) {
                            f === T && r(t)
                        }
                        T++;
                        var f = T;
                        return i() && a() ? void s() : void l(!1)
                    }, this.$commitViewValue = function() {
                        var t = x.$viewValue;
                        u.cancel(b), (x.$$lastCommittedViewValue !== t || "" === t && x.$$hasNativeValidators) && (x.$$lastCommittedViewValue = t, x.$pristine && this.$setDirty(), this.$$parseAndValidate())
                    }, this.$$parseAndValidate = function() {
                        function e() {
                            x.$modelValue !== a && x.$$writeModelToScope()
                        }
                        var r = x.$$lastCommittedViewValue, i = r;
                        if (d = v(i) ? n : !0)
                            for (var o = 0; o < x.$parsers.length; o++)
                                if (i = x.$parsers[o](i), v(i)) {
                                    d = !1;
                                    break
                                }
                        w(x.$modelValue) && isNaN(x.$modelValue) && (x.$modelValue = g(t));
                        var a = x.$modelValue, s = x.$options && x.$options.allowInvalid;
                        x.$$rawModelValue = i, s && (x.$modelValue = i, e()), x.$$runValidators(i, x.$$lastCommittedViewValue, function(t) {
                            s || (x.$modelValue = t ? i : n, e())
                        })
                    }, this.$$writeModelToScope = function() {
                        y(t, x.$modelValue), o(x.$viewChangeListeners, function(t) {
                            try {
                                t()
                            } catch (n) {
                                e(n)
                            }
                        })
                    }, this.$setViewValue = function(t, e) {
                        x.$viewValue = t, (!x.$options || x.$options.updateOnDefault) && x.$$debounceViewValueCommit(e)
                    }, this.$$debounceViewValueCommit = function(e) {
                        var n, r = 0, i = x.$options;
                        i && $(i.debounce) && (n = i.debounce, w(n) ? r = n : w(n[e]) ? r = n[e] : w(n["default"]) && (r = n["default"])), u.cancel(b), r ? b = u(function() {
                            x.$commitViewValue()
                        }, r) : l.$$phase ? x.$commitViewValue() : t.$apply(function() {
                            x.$commitViewValue()
                        })
                    }, t.$watch(function() {
                        var e = g(t);
                        if (e !== x.$modelValue) {
                            x.$modelValue = x.$$rawModelValue = e, d = n;
                            for (var r = x.$formatters, i = r.length, o = e; i--; )
                                o = r[i](o);
                            x.$viewValue !== o && (x.$viewValue = x.$$lastCommittedViewValue = o, x.$render(), x.$$runValidators(e, o, h))
                        }
                        return e
                    })
                }], xa = ["$rootScope", function(t) {
                    return{restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: wa, priority: 1, compile: function(e) {
                            return e.addClass(ma).addClass(va).addClass(pa), {pre: function(t, e, n, r) {
                                    var i = r[0], o = r[1] || No;
                                    i.$$setOptions(r[2] && r[2].$options), o.$addControl(i), n.$observe("name", function(t) {
                                        i.$name !== t && o.$$renameControl(i, t)
                                    }), t.$on("$destroy", function() {
                                        o.$removeControl(i)
                                    })
                                }, post: function(e, n, r, i) {
                                    var o = i[0];
                                    o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function(t) {
                                        o.$$debounceViewValueCommit(t && t.type)
                                    }), n.on("blur", function() {
                                        o.$touched || (t.$$phase ? e.$evalAsync(o.$setTouched) : e.$apply(o.$setTouched))
                                    })
                                }}
                        }}
                }], ka = /(\s+|^)default(\s+|$)/, Ca = function() {
                return{restrict: "A", controller: ["$scope", "$attrs", function(t, e) {
                            var r = this;
                            this.$options = t.$eval(e.ngModelOptions), this.$options.updateOn !== n ? (this.$options.updateOnDefault = !1, this.$options.updateOn = pi(this.$options.updateOn.replace(ka, function() {
                                return r.$options.updateOnDefault = !0, " "
                            }))) : this.$options.updateOnDefault = !0
                        }]}
            }, Ta = Er({terminal: !0, priority: 1e3}), Sa = ["$locale", "$interpolate", function(t, e) {
                    var n = /{}/g, r = /^when(Minus)?(.+)$/;
                    return{restrict: "EA", link: function(i, a, s) {
                            function u(t) {
                                a.text(t || "")
                            }
                            var l, c = s.count, f = s.$attr.when && a.attr(s.$attr.when), d = s.offset || 0, p = i.$eval(f) || {}, h = {}, m = e.startSymbol(), g = e.endSymbol(), v = m + c + "-" + d + g, $ = li.noop;
                            o(s, function(t, e) {
                                var n = r.exec(e);
                                if (n) {
                                    var i = (n[1] ? "-" : "") + Xr(n[2]);
                                    p[i] = a.attr(s.$attr[e])
                                }
                            }), o(p, function(t, r) {
                                h[r] = e(t.replace(n, v))
                            }), i.$watch(c, function(e) {
                                var n = parseFloat(e), r = isNaN(n);
                                r || n in p || (n = t.pluralCat(n - d)), n === l || r && isNaN(l) || ($(), $ = i.$watch(h[n], u), l = n)
                            })
                        }}
                }], Da = ["$parse", "$animate", function(t, a) {
                    var s = "$$NG_REMOVED", u = r("ngRepeat"), l = function(t, e, n, r, i, o, a) {
                        t[n] = r, i && (t[i] = o), t.$index = e, t.$first = 0 === e, t.$last = e === a - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & e))
                    }, c = function(t) {
                        return t.clone[0]
                    }, f = function(t) {
                        return t.clone[t.clone.length - 1]
                    };
                    return{restrict: "A", multiElement: !0, transclude: "element", priority: 1e3, terminal: !0, $$tlb: !0, compile: function(r, d) {
                            var p = d.ngRepeat, h = e.createComment(" end ngRepeat: " + p + " "), m = p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                            if (!m)
                                throw u("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", p);
                            var g = m[1], v = m[2], $ = m[3], y = m[4];
                            if (m = g.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !m)
                                throw u("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", g);
                            var b = m[3] || m[1], w = m[2];
                            if ($ && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test($) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test($)))
                                throw u("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", $);
                            var x, k, C, T, S = {$id: He};
                            return y ? x = t(y) : (C = function(t, e) {
                                return He(e)
                            }, T = function(t) {
                                return t
                            }), function(t, e, r, d, m) {
                                x && (k = function(e, n, r) {
                                    return w && (S[w] = e), S[b] = n, S.$index = r, x(t, S)
                                });
                                var g = le();
                                t.$watchCollection(v, function(r) {
                                    var d, v, y, x, S, D, E, _, M, A, O, N, j = e[0], P = le();
                                    if ($ && (t[$] = r), i(r))
                                        M = r, _ = k || C;
                                    else {
                                        _ = k || T, M = [];
                                        for (var I in r)
                                            r.hasOwnProperty(I) && "$" != I.charAt(0) && M.push(I);
                                        M.sort()
                                    }
                                    for (x = M.length, O = new Array(x), d = 0; x > d; d++)
                                        if (S = r === M ? d : M[d], D = r[S], E = _(S, D, d), g[E])
                                            A = g[E], delete g[E], P[E] = A, O[d] = A;
                                        else {
                                            if (P[E])
                                                throw o(O, function(t) {
                                                    t && t.scope && (g[t.id] = t)
                                                }), u("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", p, E, D);
                                            O[d] = {id: E, scope: n, clone: n}, P[E] = !0
                                        }
                                    for (var F in g) {
                                        if (A = g[F], N = ue(A.clone), a.leave(N), N[0].parentNode)
                                            for (d = 0, v = N.length; v > d; d++)
                                                N[d][s] = !0;
                                        A.scope.$destroy()
                                    }
                                    for (d = 0; x > d; d++)
                                        if (S = r === M ? d : M[d], D = r[S], A = O[d], A.scope) {
                                            y = j;
                                            do
                                                y = y.nextSibling;
                                            while (y && y[s]);
                                            c(A) != y && a.move(ue(A.clone), null, ei(j)), j = f(A), l(A.scope, d, b, D, w, S, x)
                                        } else
                                            m(function(t, e) {
                                                A.scope = e;
                                                var n = h.cloneNode(!1);
                                                t[t.length++] = n, a.enter(t, null, ei(j)), j = n, A.clone = t, P[A.id] = A, l(A.scope, d, b, D, w, S, x)
                                            });
                                    g = P
                                })
                            }
                        }}
                }], Ea = "ng-hide", _a = "ng-hide-animate", Ma = ["$animate", function(t) {
                    return{restrict: "A", multiElement: !0, link: function(e, n, r) {
                            e.$watch(r.ngShow, function(e) {
                                t[e ? "removeClass" : "addClass"](n, Ea, {tempClasses: _a})
                            })
                        }}
                }], Aa = ["$animate", function(t) {
                    return{restrict: "A", multiElement: !0, link: function(e, n, r) {
                            e.$watch(r.ngHide, function(e) {
                                t[e ? "addClass" : "removeClass"](n, Ea, {tempClasses: _a})
                            })
                        }}
                }], Oa = Er(function(t, e, n) {
                t.$watchCollection(n.ngStyle, function(t, n) {
                    n && t !== n && o(n, function(t, n) {
                        e.css(n, "")
                    }), t && e.css(t)
                })
            }), Na = ["$animate", function(t) {
                    return{restrict: "EA", require: "ngSwitch", controller: ["$scope", function() {
                                this.cases = {}
                            }], link: function(n, r, i, a) {
                            var s = i.ngSwitch || i.on, u = [], l = [], c = [], f = [], d = function(t, e) {
                                return function() {
                                    t.splice(e, 1)
                                }
                            };
                            n.$watch(s, function(n) {
                                var r, i;
                                for (r = 0, i = c.length; i > r; ++r)
                                    t.cancel(c[r]);
                                for (c.length = 0, r = 0, i = f.length; i > r; ++r) {
                                    var s = ue(l[r].clone);
                                    f[r].$destroy();
                                    var p = c[r] = t.leave(s);
                                    p.then(d(c, r))
                                }
                                l.length = 0, f.length = 0, (u = a.cases["!" + n] || a.cases["?"]) && o(u, function(n) {
                                    n.transclude(function(r, i) {
                                        f.push(i);
                                        var o = n.element;
                                        r[r.length++] = e.createComment(" end ngSwitchWhen: ");
                                        var a = {clone: r};
                                        l.push(a), t.enter(r, o.parent(), o)
                                    })
                                })
                            })
                        }}
                }], ja = Er({transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function(t, e, n, r, i) {
                    r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({transclude: i, element: e})
                }}), Pa = Er({transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function(t, e, n, r, i) {
                    r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({transclude: i, element: e})
                }}), Ia = Er({restrict: "EAC", link: function(t, e, n, i, o) {
                    if (!o)
                        throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", B(e));
                    o(function(t) {
                        e.empty(), e.append(t)
                    })
                }}), Fa = ["$templateCache", function(t) {
                    return{restrict: "E", terminal: !0, compile: function(e, n) {
                            if ("text/ng-template" == n.type) {
                                var r = n.id, i = e[0].text;
                                t.put(r, i)
                            }
                        }}
                }], qa = r("ngOptions"), Ra = g({restrict: "A", terminal: !0}), Ha = ["$compile", "$parse", function(t, r) {
                    var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, s = {$setViewValue: h};
                    return{restrict: "E", require: ["select", "?ngModel"], controller: ["$element", "$scope", "$attrs", function(t, e, n) {
                                var r, i, o = this, a = {}, u = s;
                                o.databound = n.ngModel, o.init = function(t, e, n) {
                                    u = t, r = e, i = n
                                }, o.addOption = function(e, n) {
                                    ae(e, '"option value"'), a[e] = !0, u.$viewValue == e && (t.val(e), i.parent() && i.remove()), n && n[0].hasAttribute("selected") && (n[0].selected = !0)
                                }, o.removeOption = function(t) {
                                    this.hasOption(t) && (delete a[t], u.$viewValue === t && this.renderUnknownOption(t))
                                }, o.renderUnknownOption = function(e) {
                                    var n = "? " + He(e) + " ?";
                                    i.val(n), t.prepend(i), t.val(n), i.prop("selected", !0)
                                }, o.hasOption = function(t) {
                                    return a.hasOwnProperty(t)
                                }, e.$on("$destroy", function() {
                                    o.renderUnknownOption = h
                                })
                            }], link: function(s, u, l, c) {
                            function f(t, e, n, r) {
                                n.$render = function() {
                                    var t = n.$viewValue;
                                    r.hasOption(t) ? (T.parent() && T.remove(), e.val(t), "" === t && h.prop("selected", !0)) : v(t) && h ? e.val("") : r.renderUnknownOption(t)
                                }, e.on("change", function() {
                                    t.$apply(function() {
                                        T.parent() && T.remove(), n.$setViewValue(e.val())
                                    })
                                })
                            }
                            function d(t, e, n) {
                                var r;
                                n.$render = function() {
                                    var t = new Le(n.$viewValue);
                                    o(e.find("option"), function(e) {
                                        e.selected = $(t.get(e.value))
                                    })
                                }, t.$watch(function() {
                                    q(r, n.$viewValue) || (r = F(n.$viewValue), n.$render())
                                }), e.on("change", function() {
                                    t.$apply(function() {
                                        var t = [];
                                        o(e.find("option"), function(e) {
                                            e.selected && t.push(e.value)
                                        }), n.$setViewValue(t)
                                    })
                                })
                            }
                            function p(e, s, u) {
                                function l(t, n, r) {
                                    return q[D] = r, M && (q[M] = n), t(e, q)
                                }
                                function c() {
                                    e.$apply(function() {
                                        var t, n = N(e) || [];
                                        if (y)
                                            t = [], o(s.val(), function(e) {
                                                e = P ? I[e] : e, t.push(f(e, n[e]))
                                            });
                                        else {
                                            var r = P ? I[s.val()] : s.val();
                                            t = f(r, n[r])
                                        }
                                        u.$setViewValue(t), v()
                                    })
                                }
                                function f(t, e) {
                                    if ("?" === t)
                                        return n;
                                    if ("" === t)
                                        return null;
                                    var r = _ ? _ : O;
                                    return l(r, t, e)
                                }
                                function d() {
                                    var t, n = N(e);
                                    if (n && di(n)) {
                                        t = new Array(n.length);
                                        for (var r = 0, i = n.length; i > r; r++)
                                            t[r] = l(S, r, n[r]);
                                        return t
                                    }
                                    if (n) {
                                        t = {};
                                        for (var o in n)
                                            n.hasOwnProperty(o) && (t[o] = l(S, o, n[o]))
                                    }
                                    return t
                                }
                                function p(t) {
                                    var e;
                                    if (y)
                                        if (P && di(t)) {
                                            e = new Le([]);
                                            for (var n = 0; n < t.length; n++)
                                                e.put(l(P, null, t[n]), !0)
                                        } else
                                            e = new Le(t);
                                    else
                                        P && (t = l(P, null, t));
                                    return function(n, r) {
                                        var i;
                                        return i = P ? P : _ ? _ : O, y ? $(e.remove(l(i, n, r))) : t === l(i, n, r)
                                    }
                                }
                                function h() {
                                    x || (e.$$postDigest(v), x = !0)
                                }
                                function g(t, e, n) {
                                    t[e] = t[e] || 0, t[e] += n ? 1 : -1
                                }
                                function v() {
                                    x = !1;
                                    var t, n, r, i, c, f, d, h, v, b, T, D, E, _, O, j, R, H = {"": []}, L = [""], U = u.$viewValue, V = N(e) || [], Y = M ? a(V) : V, B = {}, W = p(U), z = !1;
                                    for (I = {}, D = 0; b = Y.length, b > D; D++)
                                        d = D, M && (d = Y[D], "$" === d.charAt(0)) || (h = V[d], t = l(A, d, h) || "", (n = H[t]) || (n = H[t] = [], L.push(t)), E = W(d, h), z = z || E, j = l(S, d, h), j = $(j) ? j : "", R = P ? P(e, q) : M ? Y[D] : D, P && (I[R] = d), n.push({id: R, label: j, selected: E}));
                                    for (y || (w || null === U ? H[""].unshift({id: "", label: "", selected: !z}) : z || H[""].unshift({id: "?", label: "", selected: !0})), T = 0, v = L.length; v > T; T++) {
                                        for (t = L[T], n = H[t], F.length <= T?(i = {element:C.clone().attr("label", t), label:n.label}, c = [i], F.push(c), s.append(i.element)):(c = F[T], i = c[0], i.label != t && i.element.attr("label", i.label = t)), _ = null, D = 0, b = n.length; b > D; D++)
                                            r = n[D], (f = c[D + 1]) ? (_ = f.element, f.label !== r.label && (g(B, f.label, !1), g(B, r.label, !0), _.text(f.label = r.label), _.prop("label", f.label)), f.id !== r.id && _.val(f.id = r.id), _[0].selected !== r.selected && (_.prop("selected", f.selected = r.selected), ti && _.prop("selected", f.selected))) : ("" === r.id && w ? O = w : (O = k.clone()).val(r.id).prop("selected", r.selected).attr("selected", r.selected).prop("label", r.label).text(r.label), c.push(f = {element: O, label: r.label, id: r.id, selected: r.selected}), g(B, r.label, !0), _ ? _.after(O) : i.element.append(O), _ = O);
                                        for (D++; c.length > D; )
                                            r = c.pop(), g(B, r.label, !1), r.element.remove()
                                    }
                                    for (; F.length > T; ) {
                                        for (n = F.pop(), D = 1; D < n.length; ++D)
                                            g(B, n[D].label, !1);
                                        n[0].element.remove()
                                    }
                                    o(B, function(t, e) {
                                        t > 0 ? m.addOption(e) : 0 > t && m.removeOption(e)
                                    })
                                }
                                var T;
                                if (!(T = b.match(i)))
                                    throw qa("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", b, B(s));
                                var S = r(T[2] || T[1]), D = T[4] || T[6], E = / as /.test(T[0]) && T[1], _ = E ? r(E) : null, M = T[5], A = r(T[3] || ""), O = r(T[2] ? T[1] : D), N = r(T[7]), j = T[8], P = j ? r(T[8]) : null, I = {}, F = [[{element: s, label: ""}]], q = {};
                                w && (t(w)(e), w.removeClass("ng-scope"), w.remove()), s.empty(), s.on("change", c), u.$render = v, e.$watchCollection(N, h), e.$watchCollection(d, h), y && e.$watchCollection(function() {
                                    return u.$modelValue
                                }, h)
                            }
                            if (c[1]) {
                                for (var h, m = c[0], g = c[1], y = l.multiple, b = l.ngOptions, w = !1, x = !1, k = ei(e.createElement("option")), C = ei(e.createElement("optgroup")), T = k.clone(), S = 0, D = u.children(), E = D.length; E > S; S++)
                                    if ("" === D[S].value) {
                                        h = w = D.eq(S);
                                        break
                                    }
                                m.init(g, w, T), y && (g.$isEmpty = function(t) {
                                    return!t || 0 === t.length
                                }), b ? p(s, u, g) : y ? d(s, u, g) : f(s, u, g, m)
                            }
                        }}
                }], La = ["$interpolate", function(t) {
                    var e = {addOption: h, removeOption: h};
                    return{restrict: "E", priority: 100, compile: function(n, r) {
                            if (v(r.value)) {
                                var i = t(n.text(), !0);
                                i || r.$set("value", n.text())
                            }
                            return function(t, n, r) {
                                var o = "$selectController", a = n.parent(), s = a.data(o) || a.parent().data(o);
                                s && s.databound || (s = e), i ? t.$watch(i, function(t, e) {
                                    r.$set("value", t), e !== t && s.removeOption(e), s.addOption(t, n)
                                }) : s.addOption(r.value, n), n.on("$destroy", function() {
                                    s.removeOption(r.value)
                                })
                            }
                        }}
                }], Ua = g({restrict: "E", terminal: !1}), Va = function() {
                return{restrict: "A", require: "?ngModel", link: function(t, e, n, r) {
                        r && (n.required = !0, r.$validators.required = function(t, e) {
                            return!n.required || !r.$isEmpty(e)
                        }, n.$observe("required", function() {
                            r.$validate()
                        }))
                    }}
            }, Ya = function() {
                return{restrict: "A", require: "?ngModel", link: function(t, e, i, o) {
                        if (o) {
                            var a, s = i.ngPattern || i.pattern;
                            i.$observe("pattern", function(t) {
                                if (b(t) && t.length > 0 && (t = new RegExp("^" + t + "$")), t && !t.test)
                                    throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, t, B(e));
                                a = t || n, o.$validate()
                            }), o.$validators.pattern = function(t) {
                                return o.$isEmpty(t) || v(a) || a.test(t)
                            }
                        }
                    }}
            }, Ba = function() {
                return{restrict: "A", require: "?ngModel", link: function(t, e, n, r) {
                        if (r) {
                            var i = -1;
                            n.$observe("maxlength", function(t) {
                                var e = d(t);
                                i = isNaN(e) ? -1 : e, r.$validate()
                            }), r.$validators.maxlength = function(t, e) {
                                return 0 > i || r.$isEmpty(e) || e.length <= i
                            }
                        }
                    }}
            }, Wa = function() {
                return{restrict: "A", require: "?ngModel", link: function(t, e, n, r) {
                        if (r) {
                            var i = 0;
                            n.$observe("minlength", function(t) {
                                i = d(t) || 0, r.$validate()
                            }), r.$validators.minlength = function(t, e) {
                                return r.$isEmpty(e) || e.length >= i
                            }
                        }
                    }}
            };
            return t.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (re(), pe(li), void ei(e).ready(function() {
                Q(e, K)
            }))
        }(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'), "undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function(t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend"};
        for (var n in e)
            if (void 0 !== t.style[n])
                return{end: e[n]};
        return!1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1, r = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var i = function() {
            n || t(r).trigger(t.support.transition.end)
        };
        return setTimeout(i, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }})
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this), i = n.data("bs.alert");
            i || n.data("bs.alert", i = new r(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]', r = function(e) {
        t(e).on("click", n, this.close)
    };
    r.VERSION = "3.3.4", r.TRANSITION_DURATION = 150, r.prototype.close = function(e) {
        function n() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var i = t(this), o = i.attr("data-target");
        o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(o);
        e && e.preventDefault(), a.length || (a = i.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(r.TRANSITION_DURATION) : n())
    };
    var i = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = r, t.fn.alert.noConflict = function() {
        return t.fn.alert = i, this
    }, t(document).on("click.bs.alert.data-api", n, r.prototype.close)
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var r = t(this), i = r.data("bs.button"), o = "object" == typeof e && e;
            i || r.data("bs.button", i = new n(this, o)), "toggle" == e ? i.toggle() : e && i.setState(e)
        })
    }
    var n = function(e, r) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, r), this.isLoading = !1
    };
    n.VERSION = "3.3.4", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function(e) {
        var n = "disabled", r = this.$element, i = r.is("input") ? "val" : "html", o = r.data();
        e += "Text", null == o.resetText && r.data("resetText", r[i]()), setTimeout(t.proxy(function() {
            r[i](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, r.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active")
    };
    var r = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = r, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var r = t(n.target);
        r.hasClass("btn") || (r = r.closest(".btn")), e.call(r, "toggle"), n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var r = t(this), i = r.data("bs.carousel"), o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e), a = "string" == typeof e ? e : o.slide;
            i || r.data("bs.carousel", i = new n(this, o)), "number" == typeof e ? i.to(e) : a ? i[a]() : o.interval && i.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 600, n.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0, keyboard: !0}, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e), r = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (r && !this.options.wrap)
            return e;
        var i = "prev" == t ? -1 : 1, o = (n + i) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function(t) {
        var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(e, r) {
        var i = this.$element.find(".item.active"), o = r || this.getItemForDirection(e, i), a = this.interval, s = "next" == e ? "left" : "right", u = this;
        if (o.hasClass("active"))
            return this.sliding = !1;
        var l = o[0], c = t.Event("slide.bs.carousel", {relatedTarget: l, direction: s});
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var f = t(this.$indicators.children()[this.getItemIndex(o)]);
                f && f.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {relatedTarget: l, direction: s});
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function() {
                o.removeClass([e, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), u.sliding = !1, setTimeout(function() {
                    u.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), a && this.cycle(), this
        }
    };
    var r = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = r, this
    };
    var i = function(n) {
        var r, i = t(this), o = t(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var a = t.extend({}, o.data(), i.data()), s = i.attr("data-slide-to");
            s && (a.interval = !1), e.call(o, a), s && o.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        var n, r = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(r)
    }
    function n(e) {
        return this.each(function() {
            var n = t(this), i = n.data("bs.collapse"), o = t.extend({}, r.DEFAULTS, n.data(), "object" == typeof e && e);
            !i && o.toggle && /show|hide/.test(e) && (o.toggle = !1), i || n.data("bs.collapse", i = new r(this, o)), "string" == typeof e && i[e]()
        })
    }
    var r = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, r.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    r.VERSION = "3.3.4", r.TRANSITION_DURATION = 350, r.DEFAULTS = {toggle: !0}, r.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, r.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(i && i.length && (e = i.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    i && i.length && (n.call(i, "hide"), e || i.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)
                        return s.call(this);
                    var u = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[a](this.$element[0][u])
                }
            }
        }
    }, r.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : i.call(this)
            }
        }
    }, r.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, r.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, r) {
            var i = t(r);
            this.addAriaAndCollapsedClass(e(i), i)
        }, this)).end()
    }, r.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var i = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = r, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = i, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(r) {
        var i = t(this);
        i.attr("data-target") || r.preventDefault();
        var o = e(i), a = o.data("bs.collapse"), s = a ? "toggle" : i.data();
        n.call(o, s)
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        e && 3 === e.which || (t(i).remove(), t(o).each(function() {
            var r = t(this), i = n(r), o = {relatedTarget: this};
            i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", o)), e.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger("hidden.bs.dropdown", o)))
        }))
    }
    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && t(n);
        return r && r.length ? r : e.parent()
    }
    function r(e) {
        return this.each(function() {
            var n = t(this), r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new a(this)), "string" == typeof e && r[e].call(n)
        })
    }
    var i = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', a = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    a.VERSION = "3.3.4", a.prototype.toggle = function(r) {
        var i = t(this);
        if (!i.is(".disabled, :disabled")) {
            var o = n(i), a = o.hasClass("open");
            if (e(), !a) {
                "ontouchstart"in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var s = {relatedTarget: this};
                if (o.trigger(r = t.Event("show.bs.dropdown", s)), r.isDefaultPrevented())
                    return;
                i.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", s)
            }
            return!1
        }
    }, a.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var r = t(this);
            if (e.preventDefault(), e.stopPropagation(), !r.is(".disabled, :disabled")) {
                var i = n(r), a = i.hasClass("open");
                if (!a && 27 != e.which || a && 27 == e.which)
                    return 27 == e.which && i.find(o).trigger("focus"), r.trigger("click");
                var s = " li:not(.disabled):visible a", u = i.find('[role="menu"]' + s + ', [role="listbox"]' + s);
                if (u.length) {
                    var l = u.index(e.target);
                    38 == e.which && l > 0 && l--, 40 == e.which && l < u.length - 1 && l++, ~l || (l = 0), u.eq(l).trigger("focus")
                }
            }
        }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = r, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = s, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o, a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', a.prototype.keydown)
}(jQuery), +function(t) {
    "use strict";
    function e(e, r) {
        return this.each(function() {
            var i = t(this), o = i.data("bs.modal"), a = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            o || i.data("bs.modal", o = new n(this, a)), "string" == typeof e ? o[e](r) : a.show && o.show(r)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0}, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var r = this, i = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            r.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var i = t.support.transition && r.$element.hasClass("fade");
            r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), i && r.$element[0].offsetWidth, r.$element.addClass("in").attr("aria-hidden", !1), r.enforceFocus();
            var o = t.Event("shown.bs.modal", {relatedTarget: e});
            i ? r.$dialog.one("bsTransitionEnd", function() {
                r.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var r = this, i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && i;
            if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)
                return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                r.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
        } else
            e && e()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""})
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var r = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = r, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var r = t(this), i = r.attr("href"), o = t(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")), a = o.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(i) && i}, o.data(), r.data());
        r.is("a") && n.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        }), e.call(o, a, this)
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var r = t(this), i = r.data("bs.tooltip"), o = "object" == typeof e && e;
            (i || !/destroy|hide/.test(e)) && (i || r.data("bs.tooltip", i = new n(this, o)), "string" == typeof e && i[e]())
        })
    }
    var n = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.DEFAULTS = {animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: {selector: "body", padding: 0}}, n.prototype.init = function(e, n, r) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport), this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), o = i.length; o--; ) {
            var a = i[o];
            if ("click" == a)
                this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin", u = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(u + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {trigger: "manual", selector: ""}) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {show: e.delay, hide: e.delay}), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {}, n = this.getDefaults();
        return this._options && t.each(this._options, function(t, r) {
            n[t] != r && (e[t] = r)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n && n.$tip && n.$tip.is(":visible") ? void(n.hoverState = "in") : (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var r = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !r)
                return;
            var i = this, o = this.tip(), a = this.getUID(this.type);
            this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement, u = /\s?auto?\s?/i, l = u.test(s);
            l && (s = s.replace(u, "") || "top"), o.detach().css({top: 0, left: 0, display: "block"}).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            var c = this.getPosition(), f = o[0].offsetWidth, d = o[0].offsetHeight;
            if (l) {
                var p = s, h = this.options.container ? t(this.options.container) : this.$element.parent(), m = this.getPosition(h);
                s = "bottom" == s && c.bottom + d > m.bottom ? "top" : "top" == s && c.top - d < m.top ? "bottom" : "right" == s && c.right + f > m.width ? "left" : "left" == s && c.left - f < m.left ? "right" : s, o.removeClass(p).addClass(s)
            }
            var g = this.getCalculatedOffset(s, c, f, d);
            this.applyPlacement(g, s);
            var v = function() {
                var t = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var r = this.tip(), i = r[0].offsetWidth, o = r[0].offsetHeight, a = parseInt(r.css("margin-top"), 10), s = parseInt(r.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top = e.top + a, e.left = e.left + s, t.offset.setOffset(r[0], t.extend({using: function(t) {
                r.css({top: Math.round(t.top), left: Math.round(t.left)})
            }}, e), 0), r.addClass("in");
        var u = r[0].offsetWidth, l = r[0].offsetHeight;
        "top" == n && l != o && (e.top = e.top + o - l);
        var c = this.getViewportAdjustedDelta(n, e, u, l);
        c.left ? e.left += c.left : e.top += c.top;
        var f = /top|bottom/.test(n), d = f ? 2 * c.left - i + u : 2 * c.top - o + l, p = f ? "offsetWidth" : "offsetHeight";
        r.offset(e), this.replaceArrow(d, r[0][p], f)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(e) {
        function r() {
            "in" != i.hoverState && o.detach(), i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), e && e()
        }
        var i = this, o = t(this.$tip), a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0], r = "BODY" == n.tagName, i = n.getBoundingClientRect();
        null == i.width && (i = t.extend({}, i, {width: i.right - i.left, height: i.bottom - i.top}));
        var o = r ? {top: 0, left: 0} : e.offset(), a = {scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()}, s = r ? {width: t(window).width(), height: t(window).height()} : null;
        return t.extend({}, i, a, s, o)
    }, n.prototype.getCalculatedOffset = function(t, e, n, r) {
        return"bottom" == t ? {top: e.top + e.height, left: e.left + e.width / 2 - n / 2} : "top" == t ? {top: e.top - r, left: e.left + e.width / 2 - n / 2} : "left" == t ? {top: e.top + e.height / 2 - r / 2, left: e.left - n} : {top: e.top + e.height / 2 - r / 2, left: e.left + e.width}
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, r) {
        var i = {top: 0, left: 0};
        if (!this.$viewport)
            return i;
        var o = this.options.viewport && this.options.viewport.padding || 0, a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - o - a.scroll, u = e.top + o - a.scroll + r;
            s < a.top ? i.top = a.top - s : u > a.top + a.height && (i.top = a.top + a.height - u)
        } else {
            var l = e.left - o, c = e.left + o + n;
            l < a.left ? i.left = a.left - l : c > a.width && (i.left = a.left + a.width - c)
        }
        return i
    }, n.prototype.getTitle = function() {
        var t, e = this.$element, n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do
            t += ~~(1e6 * Math.random());
        while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type)
        })
    };
    var r = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = r, this
    }
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var r = t(this), i = r.data("bs.popover"), o = "object" == typeof e && e;
            (i || !/destroy|hide/.test(e)) && (i || r.data("bs.popover", i = new n(this, o)), "string" == typeof e && i[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.4", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(), e = this.getTitle(), n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var r = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = r, this
    }
}(jQuery), +function(t) {
    "use strict";
    function e(n, r) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }
    function n(n) {
        return this.each(function() {
            var r = t(this), i = r.data("bs.scrollspy"), o = "object" == typeof n && n;
            i || r.data("bs.scrollspy", i = new e(this, o)), "string" == typeof n && i[n]()
        })
    }
    e.VERSION = "3.3.4", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this, n = "offset", r = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", r = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this), i = e.data("target") || e.attr("href"), o = /^#./.test(i) && t(i);
            return o && o.length && o.is(":visible") && [[o[n]().top + r, i]] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), r = this.options.offset + n - this.$scrollElement.height(), i = this.offsets, o = this.targets, a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= r)
            return a != (t = o[o.length - 1]) && this.activate(t);
        if (a && e < i[0])
            return this.activeTarget = null, this.clear();
        for (t = i.length; t--; )
            a != o[t] && e >= i[t] && (void 0 === i[t + 1] || e < i[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', r = t(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = r, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var r = t(this), i = r.data("bs.tab");
            i || r.data("bs.tab", i = new n(this)), "string" == typeof e && i[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), r = e.data("target");
        if (r || (r = e.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var i = n.find(".active:last a"), o = t.Event("hide.bs.tab", {relatedTarget: e[0]}), a = t.Event("show.bs.tab", {relatedTarget: i[0]});
            if (i.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var s = t(r);
                this.activate(e.closest("li"), n), this.activate(s, s.parent(), function() {
                    i.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({type: "shown.bs.tab", relatedTarget: i[0]})
                })
            }
        }
    }, n.prototype.activate = function(e, r, i) {
        function o() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }
        var a = r.find("> .active"), s = i && t.support.transition && (a.length && a.hasClass("fade") || !!r.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), a.removeClass("in")
    };
    var r = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = r, this
    };
    var i = function(n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var r = t(this), i = r.data("bs.affix"), o = "object" == typeof e && e;
            i || r.data("bs.affix", i = new n(this, o)), "string" == typeof e && i[e]()
        })
    }
    var n = function(e, r) {
        this.options = t.extend({}, n.DEFAULTS, r), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.4", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {offset: 0, target: window}, n.prototype.getState = function(t, e, n, r) {
        var i = this.$target.scrollTop(), o = this.$element.offset(), a = this.$target.height();
        if (null != n && "top" == this.affixed)
            return n > i ? "top" : !1;
        if ("bottom" == this.affixed)
            return null != n ? i + this.unpin <= o.top ? !1 : "bottom" : t - r >= i + a ? !1 : "bottom";
        var s = null == this.affixed, u = s ? i : o.top, l = s ? a : e;
        return null != n && n >= i ? "top" : null != r && u + l >= t - r ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), r = this.options.offset, i = r.top, o = r.bottom, a = t(document.body).height();
            "object" != typeof r && (o = i = r), "function" == typeof i && (i = r.top(this.$element)), "function" == typeof o && (o = r.bottom(this.$element));
            var s = this.getState(a, e, i, o);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var u = "affix" + (s ? "-" + s : ""), l = t.Event(u + ".bs.affix");
                if (this.$element.trigger(l), l.isDefaultPrevented())
                    return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(u).trigger(u.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({top: a - e - o})
        }
    };
    var r = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = r, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this), r = n.data();
            r.offset = r.offset || {}, null != r.offsetBottom && (r.offset.bottom = r.offsetBottom), null != r.offsetTop && (r.offset.top = r.offsetTop), e.call(n, r)
        })
    })
}(jQuery), /**
 * State-based routing for AngularJS
 * @version v0.2.14
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
        "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function(t, e, n) {
    "use strict";
    function r(t, e) {
        return q(new (q(function() {
        }, {prototype: t})), e)
    }
    function i(t) {
        return F(arguments, function(e) {
            e !== t && F(e, function(e, n) {
                t.hasOwnProperty(n) || (t[n] = e)
            })
        }), t
    }
    function o(t, e) {
        var n = [];
        for (var r in t.path) {
            if (t.path[r] !== e.path[r])
                break;
            n.push(t.path[r])
        }
        return n
    }
    function a(t) {
        if (Object.keys)
            return Object.keys(t);
        var e = [];
        return F(t, function(t, n) {
            e.push(n)
        }), e
    }
    function s(t, e) {
        if (Array.prototype.indexOf)
            return t.indexOf(e, Number(arguments[2]) || 0);
        var n = t.length >>> 0, r = Number(arguments[2]) || 0;
        for (r = 0 > r?Math.ceil(r):Math.floor(r), 0 > r && (r += n); n > r; r++)
            if (r in t && t[r] === e)
                return r;
        return-1
    }
    function u(t, e, n, r) {
        var i, u = o(n, r), l = {}, c = [];
        for (var f in u)
            if (u[f].params && (i = a(u[f].params), i.length))
                for (var d in i)
                    s(c, i[d]) >= 0 || (c.push(i[d]), l[i[d]] = t[i[d]]);
        return q({}, l, e)
    }
    function l(t, e, n) {
        if (!n) {
            n = [];
            for (var r in t)
                n.push(r)
        }
        for (var i = 0; i < n.length; i++) {
            var o = n[i];
            if (t[o] != e[o])
                return!1
        }
        return!0
    }
    function c(t, e) {
        var n = {};
        return F(t, function(t) {
            n[t] = e[t]
        }), n
    }
    function f(t) {
        var e = {}, n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        for (var r in t)
            -1 == s(n, r) && (e[r] = t[r]);
        return e
    }
    function d(t, e) {
        var n = I(t), r = n ? [] : {};
        return F(t, function(t, i) {
            e(t, i) && (r[n ? r.length : i] = t)
        }), r
    }
    function p(t, e) {
        var n = I(t) ? [] : {};
        return F(t, function(t, r) {
            n[r] = e(t, r)
        }), n
    }
    function h(t, e) {
        var r = 1, o = 2, u = {}, l = [], c = u, d = q(t.when(u), {$$promises: u, $$values: u});
        this.study = function(u) {
            function p(t, n) {
                if ($[n] !== o) {
                    if (v.push(n), $[n] === r)
                        throw v.splice(0, s(v, n)), new Error("Cyclic dependency: " + v.join(" -> "));
                    if ($[n] = r, j(t))
                        g.push(n, [function() {
                                return e.get(t)
                            }], l);
                    else {
                        var i = e.annotate(t);
                        F(i, function(t) {
                            t !== n && u.hasOwnProperty(t) && p(u[t], t)
                        }), g.push(n, t, i)
                    }
                    v.pop(), $[n] = o
                }
            }
            function h(t) {
                return P(t) && t.then && t.$$promises
            }
            if (!P(u))
                throw new Error("'invocables' must be an object");
            var m = a(u || {}), g = [], v = [], $ = {};
            return F(u, p), u = v = $ = null, function(r, o, a) {
                function s() {
                    --b || (w || i(y, o.$$values), v.$$values = y, v.$$promises = v.$$promises || !0, delete v.$$inheritedValues, p.resolve(y))
                }
                function u(t) {
                    v.$$failure = t, p.reject(t)
                }
                function l(n, i, o) {
                    function l(t) {
                        f.reject(t), u(t)
                    }
                    function c() {
                        if (!O(v.$$failure))
                            try {
                                f.resolve(e.invoke(i, a, y)), f.promise.then(function(t) {
                                    y[n] = t, s()
                                }, l)
                            } catch (t) {
                                l(t)
                            }
                    }
                    var f = t.defer(), d = 0;
                    F(o, function(t) {
                        $.hasOwnProperty(t) && !r.hasOwnProperty(t) && (d++, $[t].then(function(e) {
                            y[t] = e, --d || c()
                        }, l))
                    }), d || c(), $[n] = f.promise
                }
                if (h(r) && a === n && (a = o, o = r, r = null), r) {
                    if (!P(r))
                        throw new Error("'locals' must be an object")
                } else
                    r = c;
                if (o) {
                    if (!h(o))
                        throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                } else
                    o = d;
                var p = t.defer(), v = p.promise, $ = v.$$promises = {}, y = q({}, r), b = 1 + g.length / 3, w = !1;
                if (O(o.$$failure))
                    return u(o.$$failure), v;
                o.$$inheritedValues && i(y, f(o.$$inheritedValues, m)), q($, o.$$promises), o.$$values ? (w = i(y, f(o.$$values, m)), v.$$inheritedValues = f(o.$$values, m), s()) : (o.$$inheritedValues && (v.$$inheritedValues = f(o.$$inheritedValues, m)), o.then(s, u));
                for (var x = 0, k = g.length; k > x; x += 3)
                    r.hasOwnProperty(g[x]) ? s() : l(g[x], g[x + 1], g[x + 2]);
                return v
            }
        }, this.resolve = function(t, e, n, r) {
            return this.study(t)(e, n, r)
        }
    }
    function m(t, e, n) {
        this.fromConfig = function(t, e, n) {
            return O(t.template) ? this.fromString(t.template, e) : O(t.templateUrl) ? this.fromUrl(t.templateUrl, e) : O(t.templateProvider) ? this.fromProvider(t.templateProvider, e, n) : null
        }, this.fromString = function(t, e) {
            return N(t) ? t(e) : t
        }, this.fromUrl = function(n, r) {
            return N(n) && (n = n(r)), null == n ? null : t.get(n, {cache: e, headers: {Accept: "text/html"}}).then(function(t) {
                return t.data
            })
        }, this.fromProvider = function(t, e, r) {
            return n.invoke(t, null, r || {params: e})
        }
    }
    function g(t, e, i) {
        function o(e, n, r, i) {
            if (g.push(e), h[e])
                return h[e];
            if (!/^\w+(-+\w+)*(?:\[\])?$/.test(e))
                throw new Error("Invalid parameter name '" + e + "' in pattern '" + t + "'");
            if (m[e])
                throw new Error("Duplicate parameter name '" + e + "' in pattern '" + t + "'");
            return m[e] = new H.Param(e, n, r, i), m[e]
        }
        function a(t, e, n, r) {
            var i = ["", ""], o = t.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
            if (!e)
                return o;
            switch (n) {
                case!1:
                    i = ["(", ")" + (r ? "?" : "")];
                    break;
                case!0:
                    i = ["?(", ")?"];
                    break;
                default:
                    i = ["(" + n + "|", ")?"]
            }
            return o + i[0] + e + i[1]
        }
        function s(i, o) {
            var a, s, u, l, c;
            return a = i[2] || i[3], c = e.params[a], u = t.substring(d, i.index), s = o ? i[4] : i[4] || ("*" == i[1] ? ".*" : null), l = H.type(s || "string") || r(H.type("string"), {pattern: new RegExp(s, e.caseInsensitive ? "i" : n)}), {id: a, regexp: s, segment: u, type: l, cfg: c}
        }
        e = q({params: {}}, P(e) ? e : {});
        var u, l = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, c = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, f = "^", d = 0, p = this.segments = [], h = i ? i.params : {}, m = this.params = i ? i.params.$$new() : new H.ParamSet, g = [];
        this.source = t;
        for (var v, $, y; (u = l.exec(t)) && (v = s(u, !1), !(v.segment.indexOf("?") >= 0)); )
            $ = o(v.id, v.type, v.cfg, "path"), f += a(v.segment, $.type.pattern.source, $.squash, $.isOptional), p.push(v.segment), d = l.lastIndex;
        y = t.substring(d);
        var b = y.indexOf("?");
        if (b >= 0) {
            var w = this.sourceSearch = y.substring(b);
            if (y = y.substring(0, b), this.sourcePath = t.substring(0, d + b), w.length > 0)
                for (d = 0; u = c.exec(w); )
                    v = s(u, !0), $ = o(v.id, v.type, v.cfg, "search"), d = l.lastIndex
        } else
            this.sourcePath = t, this.sourceSearch = "";
        f += a(y) + (e.strict === !1 ? "/?" : "") + "$", p.push(y), this.regexp = new RegExp(f, e.caseInsensitive ? "i" : n), this.prefix = p[0], this.$$paramNames = g
    }
    function v(t) {
        q(this, t)
    }
    function $() {
        function t(t) {
            return null != t ? t.toString().replace(/\//g, "%2F") : t
        }
        function i(t) {
            return null != t ? t.toString().replace(/%2F/g, "/") : t
        }
        function o() {
            return{strict: m, caseInsensitive: h}
        }
        function u(t) {
            return N(t) || I(t) && N(t[t.length - 1])
        }
        function l() {
            for (; x.length; ) {
                var t = x.shift();
                if (t.pattern)
                    throw new Error("You cannot override a type's .pattern at runtime.");
                e.extend(b[t.name], f.invoke(t.def))
            }
        }
        function c(t) {
            q(this, t || {})
        }
        H = this;
        var f, h = !1, m = !0, y = !1, b = {}, w = !0, x = [], k = {string: {encode: t, decode: i, is: function(t) {
                    return"string" == typeof t
                }, pattern: /[^/]*/}, "int": {encode: t, decode: function(t) {
                    return parseInt(t, 10)
                }, is: function(t) {
                    return O(t) && this.decode(t.toString()) === t
                }, pattern: /\d+/}, bool: {encode: function(t) {
                    return t ? 1 : 0
                }, decode: function(t) {
                    return 0 !== parseInt(t, 10)
                }, is: function(t) {
                    return t === !0 || t === !1
                }, pattern: /0|1/}, date: {encode: function(t) {
                    return this.is(t) ? [t.getFullYear(), ("0" + (t.getMonth() + 1)).slice(-2), ("0" + t.getDate()).slice(-2)].join("-") : n
                }, decode: function(t) {
                    if (this.is(t))
                        return t;
                    var e = this.capture.exec(t);
                    return e ? new Date(e[1], e[2] - 1, e[3]) : n
                }, is: function(t) {
                    return t instanceof Date && !isNaN(t.valueOf())
                }, equals: function(t, e) {
                    return this.is(t) && this.is(e) && t.toISOString() === e.toISOString()
                }, pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/, capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/}, json: {encode: e.toJson, decode: e.fromJson, is: e.isObject, equals: e.equals, pattern: /[^/]*/}, any: {encode: e.identity, decode: e.identity, is: e.identity, equals: e.equals, pattern: /.*/}};
        $.$$getDefaultValue = function(t) {
            if (!u(t.value))
                return t.value;
            if (!f)
                throw new Error("Injectable functions cannot be called at configuration time");
            return f.invoke(t.value)
        }, this.caseInsensitive = function(t) {
            return O(t) && (h = t), h
        }, this.strictMode = function(t) {
            return O(t) && (m = t), m
        }, this.defaultSquashPolicy = function(t) {
            if (!O(t))
                return y;
            if (t !== !0 && t !== !1 && !j(t))
                throw new Error("Invalid squash policy: " + t + ". Valid policies: false, true, arbitrary-string");
            return y = t, t
        }, this.compile = function(t, e) {
            return new g(t, q(o(), e))
        }, this.isMatcher = function(t) {
            if (!P(t))
                return!1;
            var e = !0;
            return F(g.prototype, function(n, r) {
                N(n) && (e = e && O(t[r]) && N(t[r]))
            }), e
        }, this.type = function(t, e, n) {
            if (!O(e))
                return b[t];
            if (b.hasOwnProperty(t))
                throw new Error("A type named '" + t + "' has already been defined.");
            return b[t] = new v(q({name: t}, e)), n && (x.push({name: t, def: n}), w || l()), this
        }, F(k, function(t, e) {
            b[e] = new v(q({name: e}, t))
        }), b = r(b, {}), this.$get = ["$injector", function(t) {
                return f = t, w = !1, l(), F(k, function(t, e) {
                    b[e] || (b[e] = new v(t))
                }), this
            }], this.Param = function(t, e, r, i) {
            function o(t) {
                var e = P(t) ? a(t) : [], n = -1 === s(e, "value") && -1 === s(e, "type") && -1 === s(e, "squash") && -1 === s(e, "array");
                return n && (t = {value: t}), t.$$fn = u(t.value) ? t.value : function() {
                    return t.value
                }, t
            }
            function l(e, n, r) {
                if (e.type && n)
                    throw new Error("Param '" + t + "' has two type configurations.");
                return n ? n : e.type ? e.type instanceof v ? e.type : new v(e.type) : "config" === r ? b.any : b.string
            }
            function c() {
                var e = {array: "search" === i ? "auto" : !1}, n = t.match(/\[\]$/) ? {array: !0} : {};
                return q(e, n, r).array
            }
            function h(t, e) {
                var n = t.squash;
                if (!e || n === !1)
                    return!1;
                if (!O(n) || null == n)
                    return y;
                if (n === !0 || j(n))
                    return n;
                throw new Error("Invalid squash policy: '" + n + "'. Valid policies: false, true, or arbitrary string")
            }
            function m(t, e, r, i) {
                var o, a, u = [{from: "", to: r || e ? n : ""}, {from: null, to: r || e ? n : ""}];
                return o = I(t.replace) ? t.replace : [], j(i) && o.push({from: i, to: n}), a = p(o, function(t) {
                    return t.from
                }), d(u, function(t) {
                    return-1 === s(a, t.from)
                }).concat(o)
            }
            function g() {
                if (!f)
                    throw new Error("Injectable functions cannot be called at configuration time");
                var t = f.invoke(r.$$fn);
                if (null !== t && t !== n && !x.type.is(t))
                    throw new Error("Default value (" + t + ") for parameter '" + x.id + "' is not an instance of Type (" + x.type.name + ")");
                return t
            }
            function $(t) {
                function e(t) {
                    return function(e) {
                        return e.from === t
                    }
                }
                function n(t) {
                    var n = p(d(x.replace, e(t)), function(t) {
                        return t.to
                    });
                    return n.length ? n[0] : t
                }
                return t = n(t), O(t) ? x.type.$normalize(t) : g()
            }
            function w() {
                return"{Param:" + t + " " + e + " squash: '" + T + "' optional: " + C + "}"
            }
            var x = this;
            r = o(r), e = l(r, e, i);
            var k = c();
            e = k ? e.$asArray(k, "search" === i) : e, "string" !== e.name || k || "path" !== i || r.value !== n || (r.value = "");
            var C = r.value !== n, T = h(r, C), S = m(r, k, C, T);
            q(this, {id: t, type: e, location: i, array: k, squash: T, replace: S, isOptional: C, value: $, dynamic: n, config: r, toString: w})
        }, c.prototype = {$$new: function() {
                return r(this, q(new c, {$$parent: this}))
            }, $$keys: function() {
                for (var t = [], e = [], n = this, r = a(c.prototype); n; )
                    e.push(n), n = n.$$parent;
                return e.reverse(), F(e, function(e) {
                    F(a(e), function(e) {
                        -1 === s(t, e) && -1 === s(r, e) && t.push(e)
                    })
                }), t
            }, $$values: function(t) {
                var e = {}, n = this;
                return F(n.$$keys(), function(r) {
                    e[r] = n[r].value(t && t[r])
                }), e
            }, $$equals: function(t, e) {
                var n = !0, r = this;
                return F(r.$$keys(), function(i) {
                    var o = t && t[i], a = e && e[i];
                    r[i].type.equals(o, a) || (n = !1)
                }), n
            }, $$validates: function(t) {
                var r, i, o, a, s, u = this.$$keys();
                for (r = 0; r < u.length && (i = this[u[r]], o = t[u[r]], o !== n && null !== o || !i.isOptional); r++) {
                    if (a = i.type.$normalize(o), !i.type.is(a))
                        return!1;
                    if (s = i.type.encode(a), e.isString(s) && !i.type.pattern.exec(s))
                        return!1
                }
                return!0
            }, $$parent: n}, this.ParamSet = c
    }
    function y(t, r) {
        function i(t) {
            var e = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(t.source);
            return null != e ? e[1].replace(/\\(.)/g, "$1") : ""
        }
        function o(t, e) {
            return t.replace(/\$(\$|\d{1,2})/, function(t, n) {
                return e["$" === n ? 0 : Number(n)]
            })
        }
        function a(t, e, n) {
            if (!n)
                return!1;
            var r = t.invoke(e, e, {$match: n});
            return O(r) ? r : !0
        }
        function s(r, i, o, a) {
            function s(t, e, n) {
                return"/" === m ? t : e ? m.slice(0, -1) + t : n ? m.slice(1) + t : t
            }
            function d(t) {
                function e(t) {
                    var e = t(o, r);
                    return e ? (j(e) && r.replace().url(e), !0) : !1
                }
                if (!t || !t.defaultPrevented) {
                    var i = h && r.url() === h;
                    if (h = n, i)
                        return!0;
                    var a, s = l.length;
                    for (a = 0; s > a; a++)
                        if (e(l[a]))
                            return;
                    c && e(c)
                }
            }
            function p() {
                return u = u || i.$on("$locationChangeSuccess", d)
            }
            var h, m = a.baseHref(), g = r.url();
            return f || p(), {sync: function() {
                    d()
                }, listen: function() {
                    return p()
                }, update: function(t) {
                    return t ? void(g = r.url()) : void(r.url() !== g && (r.url(g), r.replace()))
                }, push: function(t, e, i) {
                    var o = t.format(e || {});
                    null !== o && e && e["#"] && (o += "#" + e["#"]), r.url(o), h = i && i.$$avoidResync ? r.url() : n, i && i.replace && r.replace()
                }, href: function(n, i, o) {
                    if (!n.validates(i))
                        return null;
                    var a = t.html5Mode();
                    e.isObject(a) && (a = a.enabled);
                    var u = n.format(i);
                    if (o = o || {}, a || null === u || (u = "#" + t.hashPrefix() + u), null !== u && i && i["#"] && (u += "#" + i["#"]), u = s(u, a, o.absolute), !o.absolute || !u)
                        return u;
                    var l = !a && u ? "/" : "", c = r.port();
                    return c = 80 === c || 443 === c ? "" : ":" + c, [r.protocol(), "://", r.host(), c, l, u].join("")
                }}
        }
        var u, l = [], c = null, f = !1;
        this.rule = function(t) {
            if (!N(t))
                throw new Error("'rule' must be a function");
            return l.push(t), this
        }, this.otherwise = function(t) {
            if (j(t)) {
                var e = t;
                t = function() {
                    return e
                }
            } else if (!N(t))
                throw new Error("'rule' must be a function");
            return c = t, this
        }, this.when = function(t, e) {
            var n, s = j(e);
            if (j(t) && (t = r.compile(t)), !s && !N(e) && !I(e))
                throw new Error("invalid 'handler' in when()");
            var u = {matcher: function(t, e) {
                    return s && (n = r.compile(e), e = ["$match", function(t) {
                            return n.format(t)
                        }]), q(function(n, r) {
                        return a(n, e, t.exec(r.path(), r.search()))
                    }, {prefix: j(t.prefix) ? t.prefix : ""})
                }, regex: function(t, e) {
                    if (t.global || t.sticky)
                        throw new Error("when() RegExp must not be global or sticky");
                    return s && (n = e, e = ["$match", function(t) {
                            return o(n, t)
                        }]), q(function(n, r) {
                        return a(n, e, t.exec(r.path()))
                    }, {prefix: i(t)})
                }}, l = {matcher: r.isMatcher(t), regex: t instanceof RegExp};
            for (var c in l)
                if (l[c])
                    return this.rule(u[c](t, e));
            throw new Error("invalid 'what' in when()")
        }, this.deferIntercept = function(t) {
            t === n && (t = !0), f = t
        }, this.$get = s, s.$inject = ["$location", "$rootScope", "$injector", "$browser"]
    }
    function b(t, i) {
        function o(t) {
            return 0 === t.indexOf(".") || 0 === t.indexOf("^")
        }
        function f(t, e) {
            if (!t)
                return n;
            var r = j(t), i = r ? t : t.name, a = o(i);
            if (a) {
                if (!e)
                    throw new Error("No reference point given for path '" + i + "'");
                e = f(e);
                for (var s = i.split("."), u = 0, l = s.length, c = e; l > u; u++)
                    if ("" !== s[u] || 0 !== u) {
                        if ("^" !== s[u])
                            break;
                        if (!c.parent)
                            throw new Error("Path '" + i + "' not valid for state '" + e.name + "'");
                        c = c.parent
                    } else
                        c = e;
                s = s.slice(u).join("."), i = c.name + (c.name && s ? "." : "") + s
            }
            var d = C[i];
            return!d || !r && (r || d !== t && d.self !== t) ? n : d
        }
        function d(t, e) {
            T[t] || (T[t] = []), T[t].push(e)
        }
        function h(t) {
            for (var e = T[t] || []; e.length; )
                m(e.shift())
        }
        function m(e) {
            e = r(e, {self: e, resolve: e.resolve || {}, toString: function() {
                    return this.name
                }});
            var n = e.name;
            if (!j(n) || n.indexOf("@") >= 0)
                throw new Error("State must have a valid name");
            if (C.hasOwnProperty(n))
                throw new Error("State '" + n + "'' is already defined");
            var i = -1 !== n.indexOf(".") ? n.substring(0, n.lastIndexOf(".")) : j(e.parent) ? e.parent : P(e.parent) && j(e.parent.name) ? e.parent.name : "";
            if (i && !C[i])
                return d(i, e.self);
            for (var o in D)
                N(D[o]) && (e[o] = D[o](e, D.$delegates[o]));
            return C[n] = e, !e[S] && e.url && t.when(e.url, ["$match", "$stateParams", function(t, n) {
                    k.$current.navigable == e && l(t, n) || k.transitionTo(e, t, {inherit: !0, location: !1})
                }]), h(n), e
        }
        function g(t) {
            return t.indexOf("*") > -1
        }
        function v(t) {
            for (var e = t.split("."), n = k.$current.name.split("."), r = 0, i = e.length; i > r; r++)
                "*" === e[r] && (n[r] = "*");
            return"**" === e[0] && (n = n.slice(s(n, e[1])), n.unshift("**")), "**" === e[e.length - 1] && (n.splice(s(n, e[e.length - 2]) + 1, Number.MAX_VALUE), n.push("**")), e.length != n.length ? !1 : n.join("") === e.join("")
        }
        function $(t, e) {
            return j(t) && !O(e) ? D[t] : N(e) && j(t) ? (D[t] && !D.$delegates[t] && (D.$delegates[t] = D[t]), D[t] = e, this) : this
        }
        function y(t, e) {
            return P(t) ? e = t : e.name = t, m(e), this
        }
        function b(t, i, o, s, d, h, m) {
            function $(e, n, r, o) {
                var a = t.$broadcast("$stateNotFound", e, n, r);
                if (a.defaultPrevented)
                    return m.update(), D;
                if (!a.retry)
                    return null;
                if (o.$retry)
                    return m.update(), E;
                var s = k.transition = i.when(a.retry);
                return s.then(function() {
                    return s !== k.transition ? b : (e.options.$retry = !0, k.transitionTo(e.to, e.toParams, e.options))
                }, function() {
                    return D
                }), m.update(), s
            }
            function y(t, n, r, a, u, l) {
                var f = r ? n : c(t.params.$$keys(), n), p = {$stateParams: f};
                u.resolve = d.resolve(t.resolve, p, u.resolve, t);
                var h = [u.resolve.then(function(t) {
                        u.globals = t
                    })];
                return a && h.push(a), F(t.views, function(n, r) {
                    var i = n.resolve && n.resolve !== t.resolve ? n.resolve : {};
                    i.$template = [function() {
                            return o.load(r, {view: n, locals: p, params: f, notify: l.notify}) || ""
                        }], h.push(d.resolve(i, p, u.resolve, t).then(function(o) {
                        if (N(n.controllerProvider) || I(n.controllerProvider)) {
                            var a = e.extend({}, i, p, o);
                            o.$$controller = s.invoke(n.controllerProvider, null, a)
                        } else
                            o.$$controller = n.controller;
                        o.$$state = t, o.$$controllerAs = n.controllerAs, u[r] = o
                    }))
                }), i.all(h).then(function() {
                    return u
                })
            }
            var b = i.reject(new Error("transition superseded")), T = i.reject(new Error("transition prevented")), D = i.reject(new Error("transition aborted")), E = i.reject(new Error("transition failed"));
            return x.locals = {resolve: null, globals: {$stateParams: {}}}, k = {params: {}, current: x.self, $current: x, transition: null}, k.reload = function(t) {
                return k.transitionTo(k.current, h, {reload: t || !0, inherit: !1, notify: !0})
            }, k.go = function(t, e, n) {
                return k.transitionTo(t, e, q({inherit: !0, relative: k.$current}, n))
            }, k.transitionTo = function(e, n, o) {
                n = n || {}, o = q({location: !0, inherit: !1, relative: null, notify: !0, reload: !1, $retry: !1}, o || {});
                var a, l = k.$current, d = k.params, p = l.path, g = f(e, o.relative), v = n["#"];
                if (!O(g)) {
                    var C = {to: e, toParams: n, options: o}, D = $(C, l.self, d, o);
                    if (D)
                        return D;
                    if (e = C.to, n = C.toParams, o = C.options, g = f(e, o.relative), !O(g)) {
                        if (!o.relative)
                            throw new Error("No such state '" + e + "'");
                        throw new Error("Could not resolve '" + e + "' from state '" + o.relative + "'")
                    }
                }
                if (g[S])
                    throw new Error("Cannot transition to abstract state '" + e + "'");
                if (o.inherit && (n = u(h, n || {}, k.$current, g)), !g.params.$$validates(n))
                    return E;
                n = g.params.$$values(n), e = g;
                var _ = e.path, M = 0, A = _[M], N = x.locals, I = [], F = !1;
                if (o.reload) {
                    if (j(o.reload) || P(o.reload)) {
                        if (P(o.reload) && !o.reload.name)
                            throw new Error("Invalid reload state object");
                        var H = o.reload === !0 ? p[0] : f(o.reload);
                        if (o.reload && !H)
                            throw new Error("No such reload state '" + (j(o.reload) ? o.reload : o.reload.name) + "'");
                        for (F = !0; A && A === p[M] && A !== H; )
                            N = I[M] = A.locals, M++, A = _[M]
                    }
                } else
                    for (; A && A === p[M] && A.ownParams.$$equals(n, d); )
                        N = I[M] = A.locals, M++, A = _[M];
                if (!F && w(e, l, N, o))
                    return e.self.reloadOnSearch !== !1 && m.update(), k.transition = null, i.when(k.current);
                if (n = c(e.params.$$keys(), n || {}), o.notify && t.$broadcast("$stateChangeStart", e.self, n, l.self, d).defaultPrevented)
                    return t.$broadcast("$stateChangeCancel", e.self, n, l.self, d), m.update(), T;
                for (var L = i.when(N), U = M; U < _.length; U++, A = _[U])
                    N = I[U] = r(N), L = y(A, n, A === e, L, N, o);
                var V = k.transition = L.then(function() {
                    var r, i, a;
                    if (k.transition !== V)
                        return b;
                    for (r = p.length - 1; r >= M; r--)
                        a = p[r], a.self.onExit && s.invoke(a.self.onExit, a.self, a.locals.globals), a.locals = null;
                    for (r = M; r < _.length; r++)
                        i = _[r], i.locals = I[r], i.self.onEnter && s.invoke(i.self.onEnter, i.self, i.locals.globals);
                    return v && (n["#"] = v), k.transition !== V ? b : (k.$current = e, k.current = e.self, k.params = n, R(k.params, h), k.transition = null, o.location && e.navigable && m.push(e.navigable.url, e.navigable.locals.globals.$stateParams, {$$avoidResync: !0, replace: "replace" === o.location}), o.notify && t.$broadcast("$stateChangeSuccess", e.self, n, l.self, d), m.update(!0), k.current)
                }, function(r) {
                    return k.transition !== V ? b : (k.transition = null, a = t.$broadcast("$stateChangeError", e.self, n, l.self, d, r), a.defaultPrevented || m.update(), i.reject(r))
                });
                return V
            }, k.is = function(t, e, r) {
                r = q({relative: k.$current}, r || {});
                var i = f(t, r.relative);
                return O(i) ? k.$current !== i ? !1 : e ? l(i.params.$$values(e), h) : !0 : n
            }, k.includes = function(t, e, r) {
                if (r = q({relative: k.$current}, r || {}), j(t) && g(t)) {
                    if (!v(t))
                        return!1;
                    t = k.$current.name
                }
                var i = f(t, r.relative);
                return O(i) ? O(k.$current.includes[i.name]) ? e ? l(i.params.$$values(e), h, a(e)) : !0 : !1 : n
            }, k.href = function(t, e, r) {
                r = q({lossy: !0, inherit: !0, absolute: !1, relative: k.$current}, r || {});
                var i = f(t, r.relative);
                if (!O(i))
                    return null;
                r.inherit && (e = u(h, e || {}, k.$current, i));
                var o = i && r.lossy ? i.navigable : i;
                return o && o.url !== n && null !== o.url ? m.href(o.url, c(i.params.$$keys().concat("#"), e || {}), {absolute: r.absolute}) : null
            }, k.get = function(t, e) {
                if (0 === arguments.length)
                    return p(a(C), function(t) {
                        return C[t].self
                    });
                var n = f(t, e || k.$current);
                return n && n.self ? n.self : null
            }, k
        }
        function w(t, e, n, r) {
            return t !== e || (n !== e.locals || r.reload) && t.self.reloadOnSearch !== !1 ? void 0 : !0
        }
        var x, k, C = {}, T = {}, S = "abstract", D = {parent: function(t) {
                if (O(t.parent) && t.parent)
                    return f(t.parent);
                var e = /^(.+)\.[^.]+$/.exec(t.name);
                return e ? f(e[1]) : x
            }, data: function(t) {
                return t.parent && t.parent.data && (t.data = t.self.data = q({}, t.parent.data, t.data)), t.data
            }, url: function(t) {
                var e = t.url, n = {params: t.params || {}};
                if (j(e))
                    return"^" == e.charAt(0) ? i.compile(e.substring(1), n) : (t.parent.navigable || x).url.concat(e, n);
                if (!e || i.isMatcher(e))
                    return e;
                throw new Error("Invalid url '" + e + "' in state '" + t + "'")
            }, navigable: function(t) {
                return t.url ? t : t.parent ? t.parent.navigable : null
            }, ownParams: function(t) {
                var e = t.url && t.url.params || new H.ParamSet;
                return F(t.params || {}, function(t, n) {
                    e[n] || (e[n] = new H.Param(n, null, t, "config"))
                }), e
            }, params: function(t) {
                return t.parent && t.parent.params ? q(t.parent.params.$$new(), t.ownParams) : new H.ParamSet
            }, views: function(t) {
                var e = {};
                return F(O(t.views) ? t.views : {"": t}, function(n, r) {
                    r.indexOf("@") < 0 && (r += "@" + t.parent.name), e[r] = n
                }), e
            }, path: function(t) {
                return t.parent ? t.parent.path.concat(t) : []
            }, includes: function(t) {
                var e = t.parent ? q({}, t.parent.includes) : {};
                return e[t.name] = !0, e
            }, $delegates: {}};
        x = m({name: "", url: "^", views: null, "abstract": !0}), x.navigable = null, this.decorator = $, this.state = y, this.$get = b, b.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
    }
    function w() {
        function t(t, e) {
            return{load: function(n, r) {
                    var i, o = {template: null, controller: null, view: null, locals: null, notify: !0, async: !0, params: {}};
                    return r = q(o, r), r.view && (i = e.fromConfig(r.view, r.params, r.locals)), i && r.notify && t.$broadcast("$viewContentLoading", r), i
                }}
        }
        this.$get = t, t.$inject = ["$rootScope", "$templateFactory"]
    }
    function x() {
        var t = !1;
        this.useAnchorScroll = function() {
            t = !0
        }, this.$get = ["$anchorScroll", "$timeout", function(e, n) {
                return t ? e : function(t) {
                    return n(function() {
                        t[0].scrollIntoView()
                    }, 0, !1)
                }
            }]
    }
    function k(t, n, r, i) {
        function o() {
            return n.has ? function(t) {
                return n.has(t) ? n.get(t) : null
            } : function(t) {
                try {
                    return n.get(t)
                } catch (e) {
                    return null
                }
            }
        }
        function a(t, e) {
            var n = function() {
                return{enter: function(t, e, n) {
                        e.after(t), n()
                    }, leave: function(t, e) {
                        t.remove(), e()
                    }}
            };
            if (l)
                return{enter: function(t, e, n) {
                        var r = l.enter(t, null, e, n);
                        r && r.then && r.then(n)
                    }, leave: function(t, e) {
                        var n = l.leave(t, e);
                        n && n.then && n.then(e)
                    }};
            if (u) {
                var r = u && u(e, t);
                return{enter: function(t, e, n) {
                        r.enter(t, null, e), n()
                    }, leave: function(t, e) {
                        r.leave(t), e()
                    }}
            }
            return n()
        }
        var s = o(), u = s("$animator"), l = s("$animate"), c = {restrict: "ECA", terminal: !0, priority: 400, transclude: "element", compile: function(n, o, s) {
                return function(n, o, u) {
                    function l() {
                        f && (f.remove(), f = null), p && (p.$destroy(), p = null), d && (v.leave(d, function() {
                            f = null
                        }), f = d, d = null)
                    }
                    function c(a) {
                        var c, f = T(n, u, o, i), $ = f && t.$current && t.$current.locals[f];
                        if (a || $ !== h) {
                            c = n.$new(), h = t.$current.locals[f];
                            var y = s(c, function(t) {
                                v.enter(t, o, function() {
                                    p && p.$emit("$viewContentAnimationEnded"), (e.isDefined(g) && !g || n.$eval(g)) && r(t)
                                }), l()
                            });
                            d = y, p = c, p.$emit("$viewContentLoaded"), p.$eval(m)
                        }
                    }
                    var f, d, p, h, m = u.onload || "", g = u.autoscroll, v = a(u, n);
                    n.$on("$stateChangeSuccess", function() {
                        c(!1)
                    }), n.$on("$viewContentLoading", function() {
                        c(!1)
                    }), c(!0)
                }
            }};
        return c
    }
    function C(t, e, n, r) {
        return{restrict: "ECA", priority: -400, compile: function(i) {
                var o = i.html();
                return function(i, a, s) {
                    var u = n.$current, l = T(i, s, a, r), c = u && u.locals[l];
                    if (c) {
                        a.data("$uiView", {name: l, state: c.$$state}), a.html(c.$template ? c.$template : o);
                        var f = t(a.contents());
                        if (c.$$controller) {
                            c.$scope = i, c.$element = a;
                            var d = e(c.$$controller, c);
                            c.$$controllerAs && (i[c.$$controllerAs] = d), a.data("$ngControllerController", d), a.children().data("$ngControllerController", d)
                        }
                        f(i)
                    }
                }
            }}
    }
    function T(t, e, n, r) {
        var i = r(e.uiView || e.name || "")(t), o = n.inheritedData("$uiView");
        return i.indexOf("@") >= 0 ? i : i + "@" + (o ? o.state.name : "")
    }
    function S(t, e) {
        var n, r = t.match(/^\s*({[^}]*})\s*$/);
        if (r && (t = e + "(" + r[1] + ")"), n = t.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !n || 4 !== n.length)
            throw new Error("Invalid state ref '" + t + "'");
        return{state: n[1], paramExpr: n[3] || null}
    }
    function D(t) {
        var e = t.parent().inheritedData("$uiView");
        return e && e.state && e.state.name ? e.state : void 0
    }
    function E(t, n) {
        var r = ["location", "inherit", "reload", "absolute"];
        return{restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function(i, o, a, s) {
                var u = S(a.uiSref, t.current.name), l = null, c = D(o) || t.$current, f = "[object SVGAnimatedString]" === Object.prototype.toString.call(o.prop("href")) ? "xlink:href" : "href", d = null, p = "A" === o.prop("tagName").toUpperCase(), h = "FORM" === o[0].nodeName, m = h ? "action" : f, g = !0, v = {relative: c, inherit: !0}, $ = i.$eval(a.uiSrefOpts) || {};
                e.forEach(r, function(t) {
                    t in $ && (v[t] = $[t])
                });
                var y = function(n) {
                    if (n && (l = e.copy(n)), g) {
                        d = t.href(u.state, l, v);
                        var r = s[1] || s[0];
                        return r && r.$$addStateInfo(u.state, l), null === d ? (g = !1, !1) : void a.$set(m, d)
                    }
                };
                u.paramExpr && (i.$watch(u.paramExpr, function(t) {
                    t !== l && y(t)
                }, !0), l = e.copy(i.$eval(u.paramExpr))), y(), h || o.bind("click", function(e) {
                    var r = e.which || e.button;
                    if (!(r > 1 || e.ctrlKey || e.metaKey || e.shiftKey || o.attr("target"))) {
                        var i = n(function() {
                            t.go(u.state, l, v)
                        });
                        e.preventDefault();
                        var a = p && !d ? 1 : 0;
                        e.preventDefault = function() {
                            a-- <= 0 && n.cancel(i)
                        }
                    }
                })
            }}
    }
    function _(t, e, n) {
        return{restrict: "A", controller: ["$scope", "$element", "$attrs", function(e, r, i) {
                    function o() {
                        a() ? r.addClass(u) : r.removeClass(u)
                    }
                    function a() {
                        for (var t = 0; t < l.length; t++)
                            if (s(l[t].state, l[t].params))
                                return!0;
                        return!1
                    }
                    function s(e, n) {
                        return"undefined" != typeof i.uiSrefActiveEq ? t.is(e.name, n) : t.includes(e.name, n)
                    }
                    var u, l = [];
                    u = n(i.uiSrefActiveEq || i.uiSrefActive || "", !1)(e), this.$$addStateInfo = function(e, n) {
                        var i = t.get(e, D(r));
                        l.push({state: i || {name: e}, params: n}), o()
                    }, e.$on("$stateChangeSuccess", o)
                }]}
    }
    function M(t) {
        var e = function(e) {
            return t.is(e)
        };
        return e.$stateful = !0, e
    }
    function A(t) {
        var e = function(e) {
            return t.includes(e)
        };
        return e.$stateful = !0, e
    }
    var O = e.isDefined, N = e.isFunction, j = e.isString, P = e.isObject, I = e.isArray, F = e.forEach, q = e.extend, R = e.copy;
    e.module("ui.router.util", ["ng"]), e.module("ui.router.router", ["ui.router.util"]), e.module("ui.router.state", ["ui.router.router", "ui.router.util"]), e.module("ui.router", ["ui.router.state"]), e.module("ui.router.compat", ["ui.router"]), h.$inject = ["$q", "$injector"], e.module("ui.router.util").service("$resolve", h), m.$inject = ["$http", "$templateCache", "$injector"], e.module("ui.router.util").service("$templateFactory", m);
    var H;
    g.prototype.concat = function(t, e) {
        var n = {caseInsensitive: H.caseInsensitive(), strict: H.strictMode(), squash: H.defaultSquashPolicy()};
        return new g(this.sourcePath + t + this.sourceSearch, q(n, e), this)
    }, g.prototype.toString = function() {
        return this.source
    }, g.prototype.exec = function(t, e) {
        function n(t) {
            function e(t) {
                return t.split("").reverse().join("")
            }
            function n(t) {
                return t.replace(/\\-/g, "-")
            }
            var r = e(t).split(/-(?!\\)/), i = p(r, e);
            return p(i, n).reverse()
        }
        var r = this.regexp.exec(t);
        if (!r)
            return null;
        e = e || {};
        var i, o, a, s = this.parameters(), u = s.length, l = this.segments.length - 1, c = {};
        if (l !== r.length - 1)
            throw new Error("Unbalanced capture group in route '" + this.source + "'");
        for (i = 0; l > i; i++) {
            a = s[i];
            var f = this.params[a], d = r[i + 1];
            for (o = 0; o < f.replace; o++)
                f.replace[o].from === d && (d = f.replace[o].to);
            d && f.array === !0 && (d = n(d)), c[a] = f.value(d)
        }
        for (; u > i; i++)
            a = s[i], c[a] = this.params[a].value(e[a]);
        return c
    }, g.prototype.parameters = function(t) {
        return O(t) ? this.params[t] || null : this.$$paramNames
    }, g.prototype.validates = function(t) {
        return this.params.$$validates(t)
    }, g.prototype.format = function(t) {
        function e(t) {
            return encodeURIComponent(t).replace(/-/g, function(t) {
                return"%5C%" + t.charCodeAt(0).toString(16).toUpperCase()
            })
        }
        t = t || {};
        var n = this.segments, r = this.parameters(), i = this.params;
        if (!this.validates(t))
            return null;
        var o, a = !1, s = n.length - 1, u = r.length, l = n[0];
        for (o = 0; u > o; o++) {
            var c = s > o, f = r[o], d = i[f], h = d.value(t[f]), m = d.isOptional && d.type.equals(d.value(), h), g = m ? d.squash : !1, v = d.type.encode(h);
            if (c) {
                var $ = n[o + 1];
                if (g === !1)
                    null != v && (l += I(v) ? p(v, e).join("-") : encodeURIComponent(v)), l += $;
                else if (g === !0) {
                    var y = l.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                    l += $.match(y)[1]
                } else
                    j(g) && (l += g + $)
            } else {
                if (null == v || m && g !== !1)
                    continue;
                I(v) || (v = [v]), v = p(v, encodeURIComponent).join("&" + f + "="), l += (a ? "&" : "?") + (f + "=" + v), a = !0
            }
        }
        return l
    }, v.prototype.is = function() {
        return!0
    }, v.prototype.encode = function(t) {
        return t
    }, v.prototype.decode = function(t) {
        return t
    }, v.prototype.equals = function(t, e) {
        return t == e
    }, v.prototype.$subPattern = function() {
        var t = this.pattern.toString();
        return t.substr(1, t.length - 2)
    }, v.prototype.pattern = /.*/, v.prototype.toString = function() {
        return"{Type:" + this.name + "}"
    }, v.prototype.$normalize = function(t) {
        return this.is(t) ? t : this.decode(t)
    }, v.prototype.$asArray = function(t, e) {
        function r(t, e) {
            function r(t, e) {
                return function() {
                    return t[e].apply(t, arguments)
                }
            }
            function i(t) {
                return I(t) ? t : O(t) ? [t] : []
            }
            function o(t) {
                switch (t.length) {
                    case 0:
                        return n;
                    case 1:
                        return"auto" === e ? t[0] : t;
                    default:
                        return t
                    }
            }
            function a(t) {
                return!t
            }
            function s(t, e) {
                return function(n) {
                    n = i(n);
                    var r = p(n, t);
                    return e === !0 ? 0 === d(r, a).length : o(r)
                }
            }
            function u(t) {
                return function(e, n) {
                    var r = i(e), o = i(n);
                    if (r.length !== o.length)
                        return!1;
                    for (var a = 0; a < r.length; a++)
                        if (!t(r[a], o[a]))
                            return!1;
                    return!0
                }
            }
            this.encode = s(r(t, "encode")), this.decode = s(r(t, "decode")), this.is = s(r(t, "is"), !0), this.equals = u(r(t, "equals")), this.pattern = t.pattern, this.$normalize = s(r(t, "$normalize")), this.name = t.name, this.$arrayMode = e
        }
        if (!t)
            return this;
        if ("auto" === t && !e)
            throw new Error("'auto' array mode is for query parameters only");
        return new r(this, t)
    }, e.module("ui.router.util").provider("$urlMatcherFactory", $), e.module("ui.router.util").run(["$urlMatcherFactory", function() {
        }]), y.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], e.module("ui.router.router").provider("$urlRouter", y), b.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], e.module("ui.router.state").value("$stateParams", {}).provider("$state", b), w.$inject = [], e.module("ui.router.state").provider("$view", w), e.module("ui.router.state").provider("$uiViewScroll", x), k.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], C.$inject = ["$compile", "$controller", "$state", "$interpolate"], e.module("ui.router.state").directive("uiView", k), e.module("ui.router.state").directive("uiView", C), E.$inject = ["$state", "$timeout"], _.$inject = ["$state", "$stateParams", "$interpolate"], e.module("ui.router.state").directive("uiSref", E).directive("uiSrefActive", _).directive("uiSrefActiveEq", _), M.$inject = ["$state"], A.$inject = ["$state"], e.module("ui.router.state").filter("isState", M).filter("includedByState", A)
}(window, window.angular), //! moment.js
//! version : 2.8.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
        function(t) {
            function e(t, e, n) {
                switch (arguments.length) {
                    case 2:
                        return null != t ? t : e;
                    case 3:
                        return null != t ? t : null != e ? e : n;
                    default:
                        throw new Error("Implement me")
                    }
            }
            function n(t, e) {
                return Te.call(t, e)
            }
            function r() {
                return{empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1}
            }
            function i(t) {
                ye.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
            }
            function o(t, e) {
                var n = !0;
                return d(function() {
                    return n && (i(t), n = !1), e.apply(this, arguments)
                }, e)
            }
            function a(t, e) {
                vn[t] || (i(e), vn[t] = !0)
            }
            function s(t, e) {
                return function(n) {
                    return m(t.call(this, n), e)
                }
            }
            function u(t, e) {
                return function(n) {
                    return this.localeData().ordinal(t.call(this, n), e)
                }
            }
            function l() {
            }
            function c(t, e) {
                e !== !1 && A(t), p(this, t), this._d = new Date(+t._d)
            }
            function f(t) {
                var e = C(t), n = e.year || 0, r = e.quarter || 0, i = e.month || 0, o = e.week || 0, a = e.day || 0, s = e.hour || 0, u = e.minute || 0, l = e.second || 0, c = e.millisecond || 0;
                this._milliseconds = +c + 1e3 * l + 6e4 * u + 36e5 * s, this._days = +a + 7 * o, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = ye.localeData(), this._bubble()
            }
            function d(t, e) {
                for (var r in e)
                    n(e, r) && (t[r] = e[r]);
                return n(e, "toString") && (t.toString = e.toString), n(e, "valueOf") && (t.valueOf = e.valueOf), t
            }
            function p(t, e) {
                var n, r, i;
                if ("undefined" != typeof e._isAMomentObject && (t._isAMomentObject = e._isAMomentObject), "undefined" != typeof e._i && (t._i = e._i), "undefined" != typeof e._f && (t._f = e._f), "undefined" != typeof e._l && (t._l = e._l), "undefined" != typeof e._strict && (t._strict = e._strict), "undefined" != typeof e._tzm && (t._tzm = e._tzm), "undefined" != typeof e._isUTC && (t._isUTC = e._isUTC), "undefined" != typeof e._offset && (t._offset = e._offset), "undefined" != typeof e._pf && (t._pf = e._pf), "undefined" != typeof e._locale && (t._locale = e._locale), je.length > 0)
                    for (n in je)
                        r = je[n], i = e[r], "undefined" != typeof i && (t[r] = i);
                return t
            }
            function h(t) {
                return 0 > t ? Math.ceil(t) : Math.floor(t)
            }
            function m(t, e, n) {
                for (var r = "" + Math.abs(t), i = t >= 0; r.length < e; )
                    r = "0" + r;
                return(i ? n ? "+" : "" : "-") + r
            }
            function g(t, e) {
                var n = {milliseconds: 0, months: 0};
                return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
            }
            function v(t, e) {
                var n;
                return e = I(e, t), t.isBefore(e) ? n = g(t, e) : (n = g(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n
            }
            function $(t, e) {
                return function(n, r) {
                    var i, o;
                    return null === r || isNaN(+r) || (a(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), o = n, n = r, r = o), n = "string" == typeof n ? +n : n, i = ye.duration(n, r), y(this, i, t), this
                }
            }
            function y(t, e, n, r) {
                var i = e._milliseconds, o = e._days, a = e._months;
                r = null == r ? !0 : r, i && t._d.setTime(+t._d + i * n), o && pe(t, "Date", de(t, "Date") + o * n), a && fe(t, de(t, "Month") + a * n), r && ye.updateOffset(t, o || a)
            }
            function b(t) {
                return"[object Array]" === Object.prototype.toString.call(t)
            }
            function w(t) {
                return"[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
            }
            function x(t, e, n) {
                var r, i = Math.min(t.length, e.length), o = Math.abs(t.length - e.length), a = 0;
                for (r = 0; i > r; r++)
                    (n && t[r] !== e[r] || !n && S(t[r]) !== S(e[r])) && a++;
                return a + o
            }
            function k(t) {
                if (t) {
                    var e = t.toLowerCase().replace(/(.)s$/, "$1");
                    t = cn[t] || fn[e] || e
                }
                return t
            }
            function C(t) {
                var e, r, i = {};
                for (r in t)
                    n(t, r) && (e = k(r), e && (i[e] = t[r]));
                return i
            }
            function T(e) {
                var n, r;
                if (0 === e.indexOf("week"))
                    n = 7, r = "day";
                else {
                    if (0 !== e.indexOf("month"))
                        return;
                    n = 12, r = "month"
                }
                ye[e] = function(i, o) {
                    var a, s, u = ye._locale[e], l = [];
                    if ("number" == typeof i && (o = i, i = t), s = function(t) {
                        var e = ye().utc().set(r, t);
                        return u.call(ye._locale, e, i || "")
                    }, null != o)
                        return s(o);
                    for (a = 0; n > a; a++)
                        l.push(s(a));
                    return l
                }
            }
            function S(t) {
                var e = +t, n = 0;
                return 0 !== e && isFinite(e) && (n = e >= 0 ? Math.floor(e) : Math.ceil(e)), n
            }
            function D(t, e) {
                return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
            }
            function E(t, e, n) {
                return se(ye([t, 11, 31 + e - n]), e, n).week
            }
            function _(t) {
                return M(t) ? 366 : 365
            }
            function M(t) {
                return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
            }
            function A(t) {
                var e;
                t._a && -2 === t._pf.overflow && (e = t._a[De] < 0 || t._a[De] > 11 ? De : t._a[Ee] < 1 || t._a[Ee] > D(t._a[Se], t._a[De]) ? Ee : t._a[_e] < 0 || t._a[_e] > 24 || 24 === t._a[_e] && (0 !== t._a[Me] || 0 !== t._a[Ae] || 0 !== t._a[Oe]) ? _e : t._a[Me] < 0 || t._a[Me] > 59 ? Me : t._a[Ae] < 0 || t._a[Ae] > 59 ? Ae : t._a[Oe] < 0 || t._a[Oe] > 999 ? Oe : -1, t._pf._overflowDayOfYear && (Se > e || e > Ee) && (e = Ee), t._pf.overflow = e)
            }
            function O(e) {
                return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length && e._pf.bigHour === t)), e._isValid
            }
            function N(t) {
                return t ? t.toLowerCase().replace("_", "-") : t
            }
            function j(t) {
                for (var e, n, r, i, o = 0; o < t.length; ) {
                    for (i = N(t[o]).split("-"), e = i.length, n = N(t[o + 1]), n = n ? n.split("-") : null; e > 0; ) {
                        if (r = P(i.slice(0, e).join("-")))
                            return r;
                        if (n && n.length >= e && x(i, n, !0) >= e - 1)
                            break;
                        e--
                    }
                    o++
                }
                return null
            }
            function P(t) {
                var e = null;
                if (!Ne[t] && Pe)
                    try {
                        e = ye.locale(), require("./locale/" + t), ye.locale(e)
                    } catch (n) {
                    }
                return Ne[t]
            }
            function I(t, e) {
                var n, r;
                return e._isUTC ? (n = e.clone(), r = (ye.isMoment(t) || w(t) ? +t : +ye(t)) - +n, n._d.setTime(+n._d + r), ye.updateOffset(n, !1), n) : ye(t).local()
            }
            function F(t) {
                return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
            }
            function q(t) {
                var e, n, r = t.match(Re);
                for (e = 0, n = r.length; n > e; e++)
                    r[e] = gn[r[e]] ? gn[r[e]] : F(r[e]);
                return function(i) {
                    var o = "";
                    for (e = 0; n > e; e++)
                        o += r[e]instanceof Function ? r[e].call(i, t) : r[e];
                    return o
                }
            }
            function R(t, e) {
                return t.isValid() ? (e = H(e, t.localeData()), dn[e] || (dn[e] = q(e)), dn[e](t)) : t.localeData().invalidDate()
            }
            function H(t, e) {
                function n(t) {
                    return e.longDateFormat(t) || t
                }
                var r = 5;
                for (He.lastIndex = 0; r >= 0 && He.test(t); )
                    t = t.replace(He, n), He.lastIndex = 0, r -= 1;
                return t
            }
            function L(t, e) {
                var n, r = e._strict;
                switch (t) {
                    case"Q":
                        return Je;
                    case"DDDD":
                        return Ke;
                    case"YYYY":
                    case"GGGG":
                    case"gggg":
                        return r ? tn : Ve;
                    case"Y":
                    case"G":
                    case"g":
                        return nn;
                    case"YYYYYY":
                    case"YYYYY":
                    case"GGGGG":
                    case"ggggg":
                        return r ? en : Ye;
                    case"S":
                        if (r)
                            return Je;
                    case"SS":
                        if (r)
                            return Qe;
                    case"SSS":
                        if (r)
                            return Ke;
                    case"DDD":
                        return Ue;
                    case"MMM":
                    case"MMMM":
                    case"dd":
                    case"ddd":
                    case"dddd":
                        return We;
                    case"a":
                    case"A":
                        return e._locale._meridiemParse;
                    case"x":
                        return Xe;
                    case"X":
                        return Ze;
                    case"Z":
                    case"ZZ":
                        return ze;
                    case"T":
                        return Ge;
                    case"SSSS":
                        return Be;
                    case"MM":
                    case"DD":
                    case"YY":
                    case"GG":
                    case"gg":
                    case"HH":
                    case"hh":
                    case"mm":
                    case"ss":
                    case"ww":
                    case"WW":
                        return r ? Qe : Le;
                    case"M":
                    case"D":
                    case"d":
                    case"H":
                    case"h":
                    case"m":
                    case"s":
                    case"w":
                    case"W":
                    case"e":
                    case"E":
                        return Le;
                    case"Do":
                        return r ? e._locale._ordinalParse : e._locale._ordinalParseLenient;
                    default:
                        return n = new RegExp(Z(X(t.replace("\\", "")), "i"))
                    }
            }
            function U(t) {
                t = t || "";
                var e = t.match(ze) || [], n = e[e.length - 1] || [], r = (n + "").match(un) || ["-", 0, 0], i = +(60 * r[1]) + S(r[2]);
                return"+" === r[0] ? -i : i
            }
            function V(t, e, n) {
                var r, i = n._a;
                switch (t) {
                    case"Q":
                        null != e && (i[De] = 3 * (S(e) - 1));
                        break;
                    case"M":
                    case"MM":
                        null != e && (i[De] = S(e) - 1);
                        break;
                    case"MMM":
                    case"MMMM":
                        r = n._locale.monthsParse(e, t, n._strict), null != r ? i[De] = r : n._pf.invalidMonth = e;
                        break;
                    case"D":
                    case"DD":
                        null != e && (i[Ee] = S(e));
                        break;
                    case"Do":
                        null != e && (i[Ee] = S(parseInt(e.match(/\d{1,2}/)[0], 10)));
                        break;
                    case"DDD":
                    case"DDDD":
                        null != e && (n._dayOfYear = S(e));
                        break;
                    case"YY":
                        i[Se] = ye.parseTwoDigitYear(e);
                        break;
                    case"YYYY":
                    case"YYYYY":
                    case"YYYYYY":
                        i[Se] = S(e);
                        break;
                    case"a":
                    case"A":
                        n._isPm = n._locale.isPM(e);
                        break;
                    case"h":
                    case"hh":
                        n._pf.bigHour = !0;
                    case"H":
                    case"HH":
                        i[_e] = S(e);
                        break;
                    case"m":
                    case"mm":
                        i[Me] = S(e);
                        break;
                    case"s":
                    case"ss":
                        i[Ae] = S(e);
                        break;
                    case"S":
                    case"SS":
                    case"SSS":
                    case"SSSS":
                        i[Oe] = S(1e3 * ("0." + e));
                        break;
                    case"x":
                        n._d = new Date(S(e));
                        break;
                    case"X":
                        n._d = new Date(1e3 * parseFloat(e));
                        break;
                    case"Z":
                    case"ZZ":
                        n._useUTC = !0, n._tzm = U(e);
                        break;
                    case"dd":
                    case"ddd":
                    case"dddd":
                        r = n._locale.weekdaysParse(e), null != r ? (n._w = n._w || {}, n._w.d = r) : n._pf.invalidWeekday = e;
                        break;
                    case"w":
                    case"ww":
                    case"W":
                    case"WW":
                    case"d":
                    case"e":
                    case"E":
                        t = t.substr(0, 1);
                    case"gggg":
                    case"GGGG":
                    case"GGGGG":
                        t = t.substr(0, 2), e && (n._w = n._w || {}, n._w[t] = S(e));
                        break;
                    case"gg":
                    case"GG":
                        n._w = n._w || {}, n._w[t] = ye.parseTwoDigitYear(e)
                    }
            }
            function Y(t) {
                var n, r, i, o, a, s, u;
                n = t._w, null != n.GG || null != n.W || null != n.E ? (a = 1, s = 4, r = e(n.GG, t._a[Se], se(ye(), 1, 4).year), i = e(n.W, 1), o = e(n.E, 1)) : (a = t._locale._week.dow, s = t._locale._week.doy, r = e(n.gg, t._a[Se], se(ye(), a, s).year), i = e(n.w, 1), null != n.d ? (o = n.d, a > o && ++i) : o = null != n.e ? n.e + a : a), u = ue(r, i, o, s, a), t._a[Se] = u.year, t._dayOfYear = u.dayOfYear
            }
            function B(t) {
                var n, r, i, o, a = [];
                if (!t._d) {
                    for (i = z(t), t._w && null == t._a[Ee] && null == t._a[De] && Y(t), t._dayOfYear && (o = e(t._a[Se], i[Se]), t._dayOfYear > _(o) && (t._pf._overflowDayOfYear = !0), r = re(o, 0, t._dayOfYear), t._a[De] = r.getUTCMonth(), t._a[Ee] = r.getUTCDate()), n = 0; 3 > n && null == t._a[n]; ++n)
                        t._a[n] = a[n] = i[n];
                    for (; 7 > n; n++)
                        t._a[n] = a[n] = null == t._a[n] ? 2 === n ? 1 : 0 : t._a[n];
                    24 === t._a[_e] && 0 === t._a[Me] && 0 === t._a[Ae] && 0 === t._a[Oe] && (t._nextDay = !0, t._a[_e] = 0), t._d = (t._useUTC ? re : ne).apply(null, a), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() + t._tzm), t._nextDay && (t._a[_e] = 24)
                }
            }
            function W(t) {
                var e;
                t._d || (e = C(t._i), t._a = [e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], B(t))
            }
            function z(t) {
                var e = new Date;
                return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
            }
            function G(e) {
                if (e._f === ye.ISO_8601)
                    return void Q(e);
                e._a = [], e._pf.empty = !0;
                var n, r, i, o, a, s = "" + e._i, u = s.length, l = 0;
                for (i = H(e._f, e._locale).match(Re) || [], n = 0; n < i.length; n++)
                    o = i[n], r = (s.match(L(o, e)) || [])[0], r && (a = s.substr(0, s.indexOf(r)), a.length > 0 && e._pf.unusedInput.push(a), s = s.slice(s.indexOf(r) + r.length), l += r.length), gn[o] ? (r ? e._pf.empty = !1 : e._pf.unusedTokens.push(o), V(o, r, e)) : e._strict && !r && e._pf.unusedTokens.push(o);
                e._pf.charsLeftOver = u - l, s.length > 0 && e._pf.unusedInput.push(s), e._pf.bigHour === !0 && e._a[_e] <= 12 && (e._pf.bigHour = t), e._isPm && e._a[_e] < 12 && (e._a[_e] += 12), e._isPm === !1 && 12 === e._a[_e] && (e._a[_e] = 0), B(e), A(e)
            }
            function X(t) {
                return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, r, i) {
                    return e || n || r || i
                })
            }
            function Z(t) {
                return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            function J(t) {
                var e, n, i, o, a;
                if (0 === t._f.length)
                    return t._pf.invalidFormat = !0, void(t._d = new Date(0 / 0));
                for (o = 0; o < t._f.length; o++)
                    a = 0, e = p({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._pf = r(), e._f = t._f[o], G(e), O(e) && (a += e._pf.charsLeftOver, a += 10 * e._pf.unusedTokens.length, e._pf.score = a, (null == i || i > a) && (i = a, n = e));
                d(t, n || e)
            }
            function Q(t) {
                var e, n, r = t._i, i = rn.exec(r);
                if (i) {
                    for (t._pf.iso = !0, e = 0, n = an.length; n > e; e++)
                        if (an[e][1].exec(r)) {
                            t._f = an[e][0] + (i[6] || " ");
                            break
                        }
                    for (e = 0, n = sn.length; n > e; e++)
                        if (sn[e][1].exec(r)) {
                            t._f += sn[e][0];
                            break
                        }
                    r.match(ze) && (t._f += "Z"), G(t)
                } else
                    t._isValid = !1
            }
            function K(t) {
                Q(t), t._isValid === !1 && (delete t._isValid, ye.createFromInputFallback(t))
            }
            function te(t, e) {
                var n, r = [];
                for (n = 0; n < t.length; ++n)
                    r.push(e(t[n], n));
                return r
            }
            function ee(e) {
                var n, r = e._i;
                r === t ? e._d = new Date : w(r) ? e._d = new Date(+r) : null !== (n = Ie.exec(r)) ? e._d = new Date(+n[1]) : "string" == typeof r ? K(e) : b(r) ? (e._a = te(r.slice(0), function(t) {
                    return parseInt(t, 10)
                }), B(e)) : "object" == typeof r ? W(e) : "number" == typeof r ? e._d = new Date(r) : ye.createFromInputFallback(e)
            }
            function ne(t, e, n, r, i, o, a) {
                var s = new Date(t, e, n, r, i, o, a);
                return 1970 > t && s.setFullYear(t), s
            }
            function re(t) {
                var e = new Date(Date.UTC.apply(null, arguments));
                return 1970 > t && e.setUTCFullYear(t), e
            }
            function ie(t, e) {
                if ("string" == typeof t)
                    if (isNaN(t)) {
                        if (t = e.weekdaysParse(t), "number" != typeof t)
                            return null
                    } else
                        t = parseInt(t, 10);
                return t
            }
            function oe(t, e, n, r, i) {
                return i.relativeTime(e || 1, !!n, t, r)
            }
            function ae(t, e, n) {
                var r = ye.duration(t).abs(), i = Ce(r.as("s")), o = Ce(r.as("m")), a = Ce(r.as("h")), s = Ce(r.as("d")), u = Ce(r.as("M")), l = Ce(r.as("y")), c = i < pn.s && ["s", i] || 1 === o && ["m"] || o < pn.m && ["mm", o] || 1 === a && ["h"] || a < pn.h && ["hh", a] || 1 === s && ["d"] || s < pn.d && ["dd", s] || 1 === u && ["M"] || u < pn.M && ["MM", u] || 1 === l && ["y"] || ["yy", l];
                return c[2] = e, c[3] = +t > 0, c[4] = n, oe.apply({}, c)
            }
            function se(t, e, n) {
                var r, i = n - e, o = n - t.day();
                return o > i && (o -= 7), i - 7 > o && (o += 7), r = ye(t).add(o, "d"), {week: Math.ceil(r.dayOfYear() / 7), year: r.year()}
            }
            function ue(t, e, n, r, i) {
                var o, a, s = re(t, 0, 1).getUTCDay();
                return s = 0 === s ? 7 : s, n = null != n ? n : i, o = i - s + (s > r ? 7 : 0) - (i > s ? 7 : 0), a = 7 * (e - 1) + (n - i) + o + 1, {year: a > 0 ? t : t - 1, dayOfYear: a > 0 ? a : _(t - 1) + a}
            }
            function le(e) {
                var n, r = e._i, i = e._f;
                return e._locale = e._locale || ye.localeData(e._l), null === r || i === t && "" === r ? ye.invalid({nullInput: !0}) : ("string" == typeof r && (e._i = r = e._locale.preparse(r)), ye.isMoment(r) ? new c(r, !0) : (i ? b(i) ? J(e) : G(e) : ee(e), n = new c(e), n._nextDay && (n.add(1, "d"), n._nextDay = t), n))
            }
            function ce(t, e) {
                var n, r;
                if (1 === e.length && b(e[0]) && (e = e[0]), !e.length)
                    return ye();
                for (n = e[0], r = 1; r < e.length; ++r)
                    e[r][t](n) && (n = e[r]);
                return n
            }
            function fe(t, e) {
                var n;
                return"string" == typeof e && (e = t.localeData().monthsParse(e), "number" != typeof e) ? t : (n = Math.min(t.date(), D(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t)
            }
            function de(t, e) {
                return t._d["get" + (t._isUTC ? "UTC" : "") + e]()
            }
            function pe(t, e, n) {
                return"Month" === e ? fe(t, n) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
            }
            function he(t, e) {
                return function(n) {
                    return null != n ? (pe(this, t, n), ye.updateOffset(this, e), this) : de(this, t)
                }
            }
            function me(t) {
                return 400 * t / 146097
            }
            function ge(t) {
                return 146097 * t / 400
            }
            function ve(t) {
                ye.duration.fn[t] = function() {
                    return this._data[t]
                }
            }
            function $e(t) {
                "undefined" == typeof ender && (be = ke.moment, ke.moment = t ? o("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", ye) : ye)
            }
            for (var ye, be, we, xe = "2.8.4", ke = "undefined" != typeof global ? global : this, Ce = Math.round, Te = Object.prototype.hasOwnProperty, Se = 0, De = 1, Ee = 2, _e = 3, Me = 4, Ae = 5, Oe = 6, Ne = {}, je = [], Pe = "undefined" != typeof module && module && module.exports, Ie = /^\/?Date\((\-?\d+)/i, Fe = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, qe = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Re = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, He = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Le = /\d\d?/, Ue = /\d{1,3}/, Ve = /\d{1,4}/, Ye = /[+\-]?\d{1,6}/, Be = /\d+/, We = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, ze = /Z|[\+\-]\d\d:?\d\d/gi, Ge = /T/i, Xe = /[\+\-]?\d+/, Ze = /[\+\-]?\d+(\.\d{1,3})?/, Je = /\d/, Qe = /\d\d/, Ke = /\d{3}/, tn = /\d{4}/, en = /[+-]?\d{6}/, nn = /[+-]?\d+/, rn = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, on = "YYYY-MM-DDTHH:mm:ssZ", an = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], sn = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], un = /([\+\-]|\d\d)/gi, ln = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6}), cn = {ms: "millisecond", s: "second", m: "minute", h: "hour", d: "day", D: "date", w: "week", W: "isoWeek", M: "month", Q: "quarter", y: "year", DDD: "dayOfYear", e: "weekday", E: "isoWeekday", gg: "weekYear", GG: "isoWeekYear"}, fn = {dayofyear: "dayOfYear", isoweekday: "isoWeekday", isoweek: "isoWeek", weekyear: "weekYear", isoweekyear: "isoWeekYear"}, dn = {}, pn = {s: 45, m: 45, h: 22, d: 26, M: 11}, hn = "DDD w W M D d".split(" "), mn = "M D H h m s w W".split(" "), gn = {M: function() {
                    return this.month() + 1
                }, MMM: function(t) {
                    return this.localeData().monthsShort(this, t)
                }, MMMM: function(t) {
                    return this.localeData().months(this, t)
                }, D: function() {
                    return this.date()
                }, DDD: function() {
                    return this.dayOfYear()
                }, d: function() {
                    return this.day()
                }, dd: function(t) {
                    return this.localeData().weekdaysMin(this, t)
                }, ddd: function(t) {
                    return this.localeData().weekdaysShort(this, t)
                }, dddd: function(t) {
                    return this.localeData().weekdays(this, t)
                }, w: function() {
                    return this.week()
                }, W: function() {
                    return this.isoWeek()
                }, YY: function() {
                    return m(this.year() % 100, 2)
                }, YYYY: function() {
                    return m(this.year(), 4)
                }, YYYYY: function() {
                    return m(this.year(), 5)
                }, YYYYYY: function() {
                    var t = this.year(), e = t >= 0 ? "+" : "-";
                    return e + m(Math.abs(t), 6)
                }, gg: function() {
                    return m(this.weekYear() % 100, 2)
                }, gggg: function() {
                    return m(this.weekYear(), 4)
                }, ggggg: function() {
                    return m(this.weekYear(), 5)
                }, GG: function() {
                    return m(this.isoWeekYear() % 100, 2)
                }, GGGG: function() {
                    return m(this.isoWeekYear(), 4)
                }, GGGGG: function() {
                    return m(this.isoWeekYear(), 5)
                }, e: function() {
                    return this.weekday()
                }, E: function() {
                    return this.isoWeekday()
                }, a: function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), !0)
                }, A: function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), !1)
                }, H: function() {
                    return this.hours()
                }, h: function() {
                    return this.hours() % 12 || 12
                }, m: function() {
                    return this.minutes()
                }, s: function() {
                    return this.seconds()
                }, S: function() {
                    return S(this.milliseconds() / 100)
                }, SS: function() {
                    return m(S(this.milliseconds() / 10), 2)
                }, SSS: function() {
                    return m(this.milliseconds(), 3)
                }, SSSS: function() {
                    return m(this.milliseconds(), 3)
                }, Z: function() {
                    var t = -this.zone(), e = "+";
                    return 0 > t && (t = -t, e = "-"), e + m(S(t / 60), 2) + ":" + m(S(t) % 60, 2)
                }, ZZ: function() {
                    var t = -this.zone(), e = "+";
                    return 0 > t && (t = -t, e = "-"), e + m(S(t / 60), 2) + m(S(t) % 60, 2)
                }, z: function() {
                    return this.zoneAbbr()
                }, zz: function() {
                    return this.zoneName()
                }, x: function() {
                    return this.valueOf()
                }, X: function() {
                    return this.unix()
                }, Q: function() {
                    return this.quarter()
                }}, vn = {}, $n = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; hn.length; )
                we = hn.pop(), gn[we + "o"] = u(gn[we], we);
            for (; mn.length; )
                we = mn.pop(), gn[we + we] = s(gn[we], 2);
            gn.DDDD = s(gn.DDD, 3), d(l.prototype, {set: function(t) {
                    var e, n;
                    for (n in t)
                        e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e;
                    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
                }, _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), months: function(t) {
                    return this._months[t.month()]
                }, _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), monthsShort: function(t) {
                    return this._monthsShort[t.month()]
                }, monthsParse: function(t, e, n) {
                    var r, i, o;
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; 12 > r; r++) {
                        if (i = ye.utc([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[r].test(t))
                            return r;
                        if (n && "MMM" === e && this._shortMonthsParse[r].test(t))
                            return r;
                        if (!n && this._monthsParse[r].test(t))
                            return r
                    }
                }, _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdays: function(t) {
                    return this._weekdays[t.day()]
                }, _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysShort: function(t) {
                    return this._weekdaysShort[t.day()]
                }, _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), weekdaysMin: function(t) {
                    return this._weekdaysMin[t.day()]
                }, weekdaysParse: function(t) {
                    var e, n, r;
                    for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++)
                        if (this._weekdaysParse[e] || (n = ye([2e3, 1]).day(e), r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(r.replace(".", ""), "i")), this._weekdaysParse[e].test(t))
                            return e
                }, _longDateFormat: {LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY LT", LLLL: "dddd, MMMM D, YYYY LT"}, longDateFormat: function(t) {
                    var e = this._longDateFormat[t];
                    return!e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(t) {
                        return t.slice(1)
                    }), this._longDateFormat[t] = e), e
                }, isPM: function(t) {
                    return"p" === (t + "").toLowerCase().charAt(0)
                }, _meridiemParse: /[ap]\.?m?\.?/i, meridiem: function(t, e, n) {
                    return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                }, _calendar: {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L"}, calendar: function(t, e, n) {
                    var r = this._calendar[t];
                    return"function" == typeof r ? r.apply(e, [n]) : r
                }, _relativeTime: {future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"}, relativeTime: function(t, e, n, r) {
                    var i = this._relativeTime[n];
                    return"function" == typeof i ? i(t, e, n, r) : i.replace(/%d/i, t)
                }, pastFuture: function(t, e) {
                    var n = this._relativeTime[t > 0 ? "future" : "past"];
                    return"function" == typeof n ? n(e) : n.replace(/%s/i, e)
                }, ordinal: function(t) {
                    return this._ordinal.replace("%d", t)
                }, _ordinal: "%d", _ordinalParse: /\d{1,2}/, preparse: function(t) {
                    return t
                }, postformat: function(t) {
                    return t
                }, week: function(t) {
                    return se(t, this._week.dow, this._week.doy).week
                }, _week: {dow: 0, doy: 6}, _invalidDate: "Invalid date", invalidDate: function() {
                    return this._invalidDate
                }}), ye = function(e, n, i, o) {
                var a;
                return"boolean" == typeof i && (o = i, i = t), a = {}, a._isAMomentObject = !0, a._i = e, a._f = n, a._l = i, a._strict = o, a._isUTC = !1, a._pf = r(), le(a)
            }, ye.suppressDeprecationWarnings = !1, ye.createFromInputFallback = o("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(t) {
                t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
            }), ye.min = function() {
                var t = [].slice.call(arguments, 0);
                return ce("isBefore", t)
            }, ye.max = function() {
                var t = [].slice.call(arguments, 0);
                return ce("isAfter", t)
            }, ye.utc = function(e, n, i, o) {
                var a;
                return"boolean" == typeof i && (o = i, i = t), a = {}, a._isAMomentObject = !0, a._useUTC = !0, a._isUTC = !0, a._l = i, a._i = e, a._f = n, a._strict = o, a._pf = r(), le(a).utc()
            }, ye.unix = function(t) {
                return ye(1e3 * t)
            }, ye.duration = function(t, e) {
                var r, i, o, a, s = t, u = null;
                return ye.isDuration(t) ? s = {ms: t._milliseconds, d: t._days, M: t._months} : "number" == typeof t ? (s = {}, e ? s[e] = t : s.milliseconds = t) : (u = Fe.exec(t)) ? (r = "-" === u[1] ? -1 : 1, s = {y: 0, d: S(u[Ee]) * r, h: S(u[_e]) * r, m: S(u[Me]) * r, s: S(u[Ae]) * r, ms: S(u[Oe]) * r}) : (u = qe.exec(t)) ? (r = "-" === u[1] ? -1 : 1, o = function(t) {
                    var e = t && parseFloat(t.replace(",", "."));
                    return(isNaN(e) ? 0 : e) * r
                }, s = {y: o(u[2]), M: o(u[3]), d: o(u[4]), h: o(u[5]), m: o(u[6]), s: o(u[7]), w: o(u[8])}) : "object" == typeof s && ("from"in s || "to"in s) && (a = v(ye(s.from), ye(s.to)), s = {}, s.ms = a.milliseconds, s.M = a.months), i = new f(s), ye.isDuration(t) && n(t, "_locale") && (i._locale = t._locale), i
            }, ye.version = xe, ye.defaultFormat = on, ye.ISO_8601 = function() {
            }, ye.momentProperties = je, ye.updateOffset = function() {
            }, ye.relativeTimeThreshold = function(e, n) {
                return pn[e] === t ? !1 : n === t ? pn[e] : (pn[e] = n, !0)
            }, ye.lang = o("moment.lang is deprecated. Use moment.locale instead.", function(t, e) {
                return ye.locale(t, e)
            }), ye.locale = function(t, e) {
                var n;
                return t && (n = "undefined" != typeof e ? ye.defineLocale(t, e) : ye.localeData(t), n && (ye.duration._locale = ye._locale = n)), ye._locale._abbr
            }, ye.defineLocale = function(t, e) {
                return null !== e ? (e.abbr = t, Ne[t] || (Ne[t] = new l), Ne[t].set(e), ye.locale(t), Ne[t]) : (delete Ne[t], null)
            }, ye.langData = o("moment.langData is deprecated. Use moment.localeData instead.", function(t) {
                return ye.localeData(t)
            }), ye.localeData = function(t) {
                var e;
                if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)
                    return ye._locale;
                if (!b(t)) {
                    if (e = P(t))
                        return e;
                    t = [t]
                }
                return j(t)
            }, ye.isMoment = function(t) {
                return t instanceof c || null != t && n(t, "_isAMomentObject")
            }, ye.isDuration = function(t) {
                return t instanceof f
            };
            for (we = $n.length - 1; we >= 0; --we)
                T($n[we]);
            ye.normalizeUnits = function(t) {
                return k(t)
            }, ye.invalid = function(t) {
                var e = ye.utc(0 / 0);
                return null != t ? d(e._pf, t) : e._pf.userInvalidated = !0, e
            }, ye.parseZone = function() {
                return ye.apply(null, arguments).parseZone()
            }, ye.parseTwoDigitYear = function(t) {
                return S(t) + (S(t) > 68 ? 1900 : 2e3)
            }, d(ye.fn = c.prototype, {clone: function() {
                    return ye(this)
                }, valueOf: function() {
                    return+this._d + 6e4 * (this._offset || 0)
                }, unix: function() {
                    return Math.floor(+this / 1e3)
                }, toString: function() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }, toDate: function() {
                    return this._offset ? new Date(+this) : this._d
                }, toISOString: function() {
                    var t = ye(this).utc();
                    return 0 < t.year() && t.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : R(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : R(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                }, toArray: function() {
                    var t = this;
                    return[t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
                }, isValid: function() {
                    return O(this)
                }, isDSTShifted: function() {
                    return this._a ? this.isValid() && x(this._a, (this._isUTC ? ye.utc(this._a) : ye(this._a)).toArray()) > 0 : !1
                }, parsingFlags: function() {
                    return d({}, this._pf)
                }, invalidAt: function() {
                    return this._pf.overflow
                }, utc: function(t) {
                    return this.zone(0, t)
                }, local: function(t) {
                    return this._isUTC && (this.zone(0, t), this._isUTC = !1, t && this.add(this._dateTzOffset(), "m")), this
                }, format: function(t) {
                    var e = R(this, t || ye.defaultFormat);
                    return this.localeData().postformat(e)
                }, add: $(1, "add"), subtract: $(-1, "subtract"), diff: function(t, e, n) {
                    var r, i, o, a = I(t, this), s = 6e4 * (this.zone() - a.zone());
                    return e = k(e), "year" === e || "month" === e ? (r = 432e5 * (this.daysInMonth() + a.daysInMonth()), i = 12 * (this.year() - a.year()) + (this.month() - a.month()), o = this - ye(this).startOf("month") - (a - ye(a).startOf("month")), o -= 6e4 * (this.zone() - ye(this).startOf("month").zone() - (a.zone() - ye(a).startOf("month").zone())), i += o / r, "year" === e && (i /= 12)) : (r = this - a, i = "second" === e ? r / 1e3 : "minute" === e ? r / 6e4 : "hour" === e ? r / 36e5 : "day" === e ? (r - s) / 864e5 : "week" === e ? (r - s) / 6048e5 : r), n ? i : h(i)
                }, from: function(t, e) {
                    return ye.duration({to: this, from: t}).locale(this.locale()).humanize(!e)
                }, fromNow: function(t) {
                    return this.from(ye(), t)
                }, calendar: function(t) {
                    var e = t || ye(), n = I(e, this).startOf("day"), r = this.diff(n, "days", !0), i = -6 > r ? "sameElse" : -1 > r ? "lastWeek" : 0 > r ? "lastDay" : 1 > r ? "sameDay" : 2 > r ? "nextDay" : 7 > r ? "nextWeek" : "sameElse";
                    return this.format(this.localeData().calendar(i, this, ye(e)))
                }, isLeapYear: function() {
                    return M(this.year())
                }, isDST: function() {
                    return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
                }, day: function(t) {
                    var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != t ? (t = ie(t, this.localeData()), this.add(t - e, "d")) : e
                }, month: he("Month", !0), startOf: function(t) {
                    switch (t = k(t)) {
                        case"year":
                            this.month(0);
                        case"quarter":
                        case"month":
                            this.date(1);
                        case"week":
                        case"isoWeek":
                        case"day":
                            this.hours(0);
                        case"hour":
                            this.minutes(0);
                        case"minute":
                            this.seconds(0);
                        case"second":
                            this.milliseconds(0)
                    }
                    return"week" === t ? this.weekday(0) : "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
                }, endOf: function(e) {
                    return e = k(e), e === t || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
                }, isAfter: function(t, e) {
                    var n;
                    return e = k("undefined" != typeof e ? e : "millisecond"), "millisecond" === e ? (t = ye.isMoment(t) ? t : ye(t), +this > +t) : (n = ye.isMoment(t) ? +t : +ye(t), n < +this.clone().startOf(e))
                }, isBefore: function(t, e) {
                    var n;
                    return e = k("undefined" != typeof e ? e : "millisecond"), "millisecond" === e ? (t = ye.isMoment(t) ? t : ye(t), +t > +this) : (n = ye.isMoment(t) ? +t : +ye(t), +this.clone().endOf(e) < n)
                }, isSame: function(t, e) {
                    var n;
                    return e = k(e || "millisecond"), "millisecond" === e ? (t = ye.isMoment(t) ? t : ye(t), +this === +t) : (n = +ye(t), +this.clone().startOf(e) <= n && n <= +this.clone().endOf(e))
                }, min: o("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(t) {
                    return t = ye.apply(null, arguments), this > t ? this : t
                }), max: o("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(t) {
                    return t = ye.apply(null, arguments), t > this ? this : t
                }), zone: function(t, e) {
                    var n, r = this._offset || 0;
                    return null == t ? this._isUTC ? r : this._dateTzOffset() : ("string" == typeof t && (t = U(t)), Math.abs(t) < 16 && (t = 60 * t), !this._isUTC && e && (n = this._dateTzOffset()), this._offset = t, this._isUTC = !0, null != n && this.subtract(n, "m"), r !== t && (!e || this._changeInProgress ? y(this, ye.duration(r - t, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, ye.updateOffset(this, !0), this._changeInProgress = null)), this)
                }, zoneAbbr: function() {
                    return this._isUTC ? "UTC" : ""
                }, zoneName: function() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }, parseZone: function() {
                    return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
                }, hasAlignedHourOffset: function(t) {
                    return t = t ? ye(t).zone() : 0, (this.zone() - t) % 60 === 0
                }, daysInMonth: function() {
                    return D(this.year(), this.month())
                }, dayOfYear: function(t) {
                    var e = Ce((ye(this).startOf("day") - ye(this).startOf("year")) / 864e5) + 1;
                    return null == t ? e : this.add(t - e, "d")
                }, quarter: function(t) {
                    return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
                }, weekYear: function(t) {
                    var e = se(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                    return null == t ? e : this.add(t - e, "y")
                }, isoWeekYear: function(t) {
                    var e = se(this, 1, 4).year;
                    return null == t ? e : this.add(t - e, "y")
                }, week: function(t) {
                    var e = this.localeData().week(this);
                    return null == t ? e : this.add(7 * (t - e), "d")
                }, isoWeek: function(t) {
                    var e = se(this, 1, 4).week;
                    return null == t ? e : this.add(7 * (t - e), "d")
                }, weekday: function(t) {
                    var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == t ? e : this.add(t - e, "d")
                }, isoWeekday: function(t) {
                    return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
                }, isoWeeksInYear: function() {
                    return E(this.year(), 1, 4)
                }, weeksInYear: function() {
                    var t = this.localeData()._week;
                    return E(this.year(), t.dow, t.doy)
                }, get: function(t) {
                    return t = k(t), this[t]()
                }, set: function(t, e) {
                    return t = k(t), "function" == typeof this[t] && this[t](e), this
                }, locale: function(e) {
                    var n;
                    return e === t ? this._locale._abbr : (n = ye.localeData(e), null != n && (this._locale = n), this)
                }, lang: o("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                    return e === t ? this.localeData() : this.locale(e)
                }), localeData: function() {
                    return this._locale
                }, _dateTzOffset: function() {
                    return 15 * Math.round(this._d.getTimezoneOffset() / 15)
                }}), ye.fn.millisecond = ye.fn.milliseconds = he("Milliseconds", !1), ye.fn.second = ye.fn.seconds = he("Seconds", !1), ye.fn.minute = ye.fn.minutes = he("Minutes", !1), ye.fn.hour = ye.fn.hours = he("Hours", !0), ye.fn.date = he("Date", !0), ye.fn.dates = o("dates accessor is deprecated. Use date instead.", he("Date", !0)), ye.fn.year = he("FullYear", !0), ye.fn.years = o("years accessor is deprecated. Use year instead.", he("FullYear", !0)), ye.fn.days = ye.fn.day, ye.fn.months = ye.fn.month, ye.fn.weeks = ye.fn.week, ye.fn.isoWeeks = ye.fn.isoWeek, ye.fn.quarters = ye.fn.quarter, ye.fn.toJSON = ye.fn.toISOString, d(ye.duration.fn = f.prototype, {_bubble: function() {
                    var t, e, n, r = this._milliseconds, i = this._days, o = this._months, a = this._data, s = 0;
                    a.milliseconds = r % 1e3, t = h(r / 1e3), a.seconds = t % 60, e = h(t / 60), a.minutes = e % 60, n = h(e / 60), a.hours = n % 24, i += h(n / 24), s = h(me(i)), i -= h(ge(s)), o += h(i / 30), i %= 30, s += h(o / 12), o %= 12, a.days = i, a.months = o, a.years = s
                }, abs: function() {
                    return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
                }, weeks: function() {
                    return h(this.days() / 7)
                }, valueOf: function() {
                    return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * S(this._months / 12)
                }, humanize: function(t) {
                    var e = ae(this, !t, this.localeData());
                    return t && (e = this.localeData().pastFuture(+this, e)), this.localeData().postformat(e)
                }, add: function(t, e) {
                    var n = ye.duration(t, e);
                    return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
                }, subtract: function(t, e) {
                    var n = ye.duration(t, e);
                    return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
                }, get: function(t) {
                    return t = k(t), this[t.toLowerCase() + "s"]()
                }, as: function(t) {
                    var e, n;
                    if (t = k(t), "month" === t || "year" === t)
                        return e = this._days + this._milliseconds / 864e5, n = this._months + 12 * me(e), "month" === t ? n : n / 12;
                    switch (e = this._days + Math.round(ge(this._months / 12)), t) {
                        case"week":
                            return e / 7 + this._milliseconds / 6048e5;
                        case"day":
                            return e + this._milliseconds / 864e5;
                        case"hour":
                            return 24 * e + this._milliseconds / 36e5;
                        case"minute":
                            return 24 * e * 60 + this._milliseconds / 6e4;
                        case"second":
                            return 24 * e * 60 * 60 + this._milliseconds / 1e3;
                        case"millisecond":
                            return Math.floor(24 * e * 60 * 60 * 1e3) + this._milliseconds;
                        default:
                            throw new Error("Unknown unit " + t)
                        }
                }, lang: ye.fn.lang, locale: ye.fn.locale, toIsoString: o("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
                    return this.toISOString()
                }), toISOString: function() {
                    var t = Math.abs(this.years()), e = Math.abs(this.months()), n = Math.abs(this.days()), r = Math.abs(this.hours()), i = Math.abs(this.minutes()), o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                    return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (t ? t + "Y" : "") + (e ? e + "M" : "") + (n ? n + "D" : "") + (r || i || o ? "T" : "") + (r ? r + "H" : "") + (i ? i + "M" : "") + (o ? o + "S" : "") : "P0D"
                }, localeData: function() {
                    return this._locale
                }}), ye.duration.fn.toString = ye.duration.fn.toISOString;
            for (we in ln)
                n(ln, we) && ve(we.toLowerCase());
            ye.duration.fn.asMilliseconds = function() {
                return this.as("ms")
            }, ye.duration.fn.asSeconds = function() {
                return this.as("s")
            }, ye.duration.fn.asMinutes = function() {
                return this.as("m")
            }, ye.duration.fn.asHours = function() {
                return this.as("h")
            }, ye.duration.fn.asDays = function() {
                return this.as("d")
            }, ye.duration.fn.asWeeks = function() {
                return this.as("weeks")
            }, ye.duration.fn.asMonths = function() {
                return this.as("M")
            }, ye.duration.fn.asYears = function() {
                return this.as("y")
            }, ye.locale("en", {ordinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(t) {
                    var e = t % 10, n = 1 === S(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                    return t + n
                }}), Pe ? module.exports = ye : "function" == typeof define && define.amd ? (define("moment", function(t, e, n) {
                return n.config && n.config() && n.config().noGlobal === !0 && (ke.moment = be), ye
            }), $e(!0)) : $e()
        }.call(this), function() {
    var t = this, e = t._, n = Array.prototype, r = Object.prototype, i = Function.prototype, o = n.push, a = n.slice, s = n.concat, u = r.toString, l = r.hasOwnProperty, c = Array.isArray, f = Object.keys, d = i.bind, p = function(t) {
        return t instanceof p ? t : this instanceof p ? void(this._wrapped = t) : new p(t)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = p), exports._ = p) : t._ = p, p.VERSION = "1.7.0";
    var h = function(t, e, n) {
        if (void 0 === e)
            return t;
        switch (null == n ? 3 : n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return t.call(e, n, r, i)
                };
            case 4:
                return function(n, r, i, o) {
                    return t.call(e, n, r, i, o)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    };
    p.iteratee = function(t, e, n) {
        return null == t ? p.identity : p.isFunction(t) ? h(t, e, n) : p.isObject(t) ? p.matches(t) : p.property(t)
    }, p.each = p.forEach = function(t, e, n) {
        if (null == t)
            return t;
        e = h(e, n);
        var r, i = t.length;
        if (i === +i)
            for (r = 0; i > r; r++)
                e(t[r], r, t);
        else {
            var o = p.keys(t);
            for (r = 0, i = o.length; i > r; r++)
                e(t[o[r]], o[r], t)
        }
        return t
    }, p.map = p.collect = function(t, e, n) {
        if (null == t)
            return[];
        e = p.iteratee(e, n);
        for (var r, i = t.length !== +t.length && p.keys(t), o = (i || t).length, a = Array(o), s = 0; o > s; s++)
            r = i ? i[s] : s, a[s] = e(t[r], r, t);
        return a
    };
    var m = "Reduce of empty array with no initial value";
    p.reduce = p.foldl = p.inject = function(t, e, n, r) {
        null == t && (t = []), e = h(e, r, 4);
        var i, o = t.length !== +t.length && p.keys(t), a = (o || t).length, s = 0;
        if (arguments.length < 3) {
            if (!a)
                throw new TypeError(m);
            n = t[o ? o[s++] : s++]
        }
        for (; a > s; s++)
            i = o ? o[s] : s, n = e(n, t[i], i, t);
        return n
    }, p.reduceRight = p.foldr = function(t, e, n, r) {
        null == t && (t = []), e = h(e, r, 4);
        var i, o = t.length !== +t.length && p.keys(t), a = (o || t).length;
        if (arguments.length < 3) {
            if (!a)
                throw new TypeError(m);
            n = t[o ? o[--a] : --a]
        }
        for (; a--; )
            i = o ? o[a] : a, n = e(n, t[i], i, t);
        return n
    }, p.find = p.detect = function(t, e, n) {
        var r;
        return e = p.iteratee(e, n), p.some(t, function(t, n, i) {
            return e(t, n, i) ? (r = t, !0) : void 0
        }), r
    }, p.filter = p.select = function(t, e, n) {
        var r = [];
        return null == t ? r : (e = p.iteratee(e, n), p.each(t, function(t, n, i) {
            e(t, n, i) && r.push(t)
        }), r)
    }, p.reject = function(t, e, n) {
        return p.filter(t, p.negate(p.iteratee(e)), n)
    }, p.every = p.all = function(t, e, n) {
        if (null == t)
            return!0;
        e = p.iteratee(e, n);
        var r, i, o = t.length !== +t.length && p.keys(t), a = (o || t).length;
        for (r = 0; a > r; r++)
            if (i = o ? o[r] : r, !e(t[i], i, t))
                return!1;
        return!0
    }, p.some = p.any = function(t, e, n) {
        if (null == t)
            return!1;
        e = p.iteratee(e, n);
        var r, i, o = t.length !== +t.length && p.keys(t), a = (o || t).length;
        for (r = 0; a > r; r++)
            if (i = o ? o[r] : r, e(t[i], i, t))
                return!0;
        return!1
    }, p.contains = p.include = function(t, e) {
        return null == t ? !1 : (t.length !== +t.length && (t = p.values(t)), p.indexOf(t, e) >= 0)
    }, p.invoke = function(t, e) {
        var n = a.call(arguments, 2), r = p.isFunction(e);
        return p.map(t, function(t) {
            return(r ? e : t[e]).apply(t, n)
        })
    }, p.pluck = function(t, e) {
        return p.map(t, p.property(e))
    }, p.where = function(t, e) {
        return p.filter(t, p.matches(e))
    }, p.findWhere = function(t, e) {
        return p.find(t, p.matches(e))
    }, p.max = function(t, e, n) {
        var r, i, o = -1 / 0, a = -1 / 0;
        if (null == e && null != t) {
            t = t.length === +t.length ? t : p.values(t);
            for (var s = 0, u = t.length; u > s; s++)
                r = t[s], r > o && (o = r)
        } else
            e = p.iteratee(e, n), p.each(t, function(t, n, r) {
                i = e(t, n, r), (i > a || i === -1 / 0 && o === -1 / 0) && (o = t, a = i)
            });
        return o
    }, p.min = function(t, e, n) {
        var r, i, o = 1 / 0, a = 1 / 0;
        if (null == e && null != t) {
            t = t.length === +t.length ? t : p.values(t);
            for (var s = 0, u = t.length; u > s; s++)
                r = t[s], o > r && (o = r)
        } else
            e = p.iteratee(e, n), p.each(t, function(t, n, r) {
                i = e(t, n, r), (a > i || 1 / 0 === i && 1 / 0 === o) && (o = t, a = i)
            });
        return o
    }, p.shuffle = function(t) {
        for (var e, n = t && t.length === +t.length ? t : p.values(t), r = n.length, i = Array(r), o = 0; r > o; o++)
            e = p.random(0, o), e !== o && (i[o] = i[e]), i[e] = n[o];
        return i
    }, p.sample = function(t, e, n) {
        return null == e || n ? (t.length !== +t.length && (t = p.values(t)), t[p.random(t.length - 1)]) : p.shuffle(t).slice(0, Math.max(0, e))
    }, p.sortBy = function(t, e, n) {
        return e = p.iteratee(e, n), p.pluck(p.map(t, function(t, n, r) {
            return{value: t, index: n, criteria: e(t, n, r)}
        }).sort(function(t, e) {
            var n = t.criteria, r = e.criteria;
            if (n !== r) {
                if (n > r || void 0 === n)
                    return 1;
                if (r > n || void 0 === r)
                    return-1
            }
            return t.index - e.index
        }), "value")
    };
    var g = function(t) {
        return function(e, n, r) {
            var i = {};
            return n = p.iteratee(n, r), p.each(e, function(r, o) {
                var a = n(r, o, e);
                t(i, r, a)
            }), i
        }
    };
    p.groupBy = g(function(t, e, n) {
        p.has(t, n) ? t[n].push(e) : t[n] = [e]
    }), p.indexBy = g(function(t, e, n) {
        t[n] = e
    }), p.countBy = g(function(t, e, n) {
        p.has(t, n) ? t[n]++ : t[n] = 1
    }), p.sortedIndex = function(t, e, n, r) {
        n = p.iteratee(n, r, 1);
        for (var i = n(e), o = 0, a = t.length; a > o; ) {
            var s = o + a >>> 1;
            n(t[s]) < i ? o = s + 1 : a = s
        }
        return o
    }, p.toArray = function(t) {
        return t ? p.isArray(t) ? a.call(t) : t.length === +t.length ? p.map(t, p.identity) : p.values(t) : []
    }, p.size = function(t) {
        return null == t ? 0 : t.length === +t.length ? t.length : p.keys(t).length
    }, p.partition = function(t, e, n) {
        e = p.iteratee(e, n);
        var r = [], i = [];
        return p.each(t, function(t, n, o) {
            (e(t, n, o) ? r : i).push(t)
        }), [r, i]
    }, p.first = p.head = p.take = function(t, e, n) {
        return null == t ? void 0 : null == e || n ? t[0] : 0 > e ? [] : a.call(t, 0, e)
    }, p.initial = function(t, e, n) {
        return a.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
    }, p.last = function(t, e, n) {
        return null == t ? void 0 : null == e || n ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
    }, p.rest = p.tail = p.drop = function(t, e, n) {
        return a.call(t, null == e || n ? 1 : e)
    }, p.compact = function(t) {
        return p.filter(t, p.identity)
    };
    var v = function(t, e, n, r) {
        if (e && p.every(t, p.isArray))
            return s.apply(r, t);
        for (var i = 0, a = t.length; a > i; i++) {
            var u = t[i];
            p.isArray(u) || p.isArguments(u) ? e ? o.apply(r, u) : v(u, e, n, r) : n || r.push(u)
        }
        return r
    };
    p.flatten = function(t, e) {
        return v(t, e, !1, [])
    }, p.without = function(t) {
        return p.difference(t, a.call(arguments, 1))
    }, p.uniq = p.unique = function(t, e, n, r) {
        if (null == t)
            return[];
        p.isBoolean(e) || (r = n, n = e, e = !1), null != n && (n = p.iteratee(n, r));
        for (var i = [], o = [], a = 0, s = t.length; s > a; a++) {
            var u = t[a];
            if (e)
                a && o === u || i.push(u), o = u;
            else if (n) {
                var l = n(u, a, t);
                p.indexOf(o, l) < 0 && (o.push(l), i.push(u))
            } else
                p.indexOf(i, u) < 0 && i.push(u)
        }
        return i
    }, p.union = function() {
        return p.uniq(v(arguments, !0, !0, []))
    }, p.intersection = function(t) {
        if (null == t)
            return[];
        for (var e = [], n = arguments.length, r = 0, i = t.length; i > r; r++) {
            var o = t[r];
            if (!p.contains(e, o)) {
                for (var a = 1; n > a && p.contains(arguments[a], o); a++)
                    ;
                a === n && e.push(o)
            }
        }
        return e
    }, p.difference = function(t) {
        var e = v(a.call(arguments, 1), !0, !0, []);
        return p.filter(t, function(t) {
            return!p.contains(e, t)
        })
    }, p.zip = function(t) {
        if (null == t)
            return[];
        for (var e = p.max(arguments, "length").length, n = Array(e), r = 0; e > r; r++)
            n[r] = p.pluck(arguments, r);
        return n
    }, p.object = function(t, e) {
        if (null == t)
            return{};
        for (var n = {}, r = 0, i = t.length; i > r; r++)
            e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
        return n
    }, p.indexOf = function(t, e, n) {
        if (null == t)
            return-1;
        var r = 0, i = t.length;
        if (n) {
            if ("number" != typeof n)
                return r = p.sortedIndex(t, e), t[r] === e ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n
        }
        for (; i > r; r++)
            if (t[r] === e)
                return r;
        return-1
    }, p.lastIndexOf = function(t, e, n) {
        if (null == t)
            return-1;
        var r = t.length;
        for ("number" == typeof n && (r = 0 > n?r + n + 1:Math.min(r, n + 1)); --r >= 0; )
            if (t[r] === e)
                return r;
        return-1
    }, p.range = function(t, e, n) {
        arguments.length <= 1 && (e = t || 0, t = 0), n = n || 1;
        for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), o = 0; r > o; o++, t += n)
            i[o] = t;
        return i
    };
    var $ = function() {
    };
    p.bind = function(t, e) {
        var n, r;
        if (d && t.bind === d)
            return d.apply(t, a.call(arguments, 1));
        if (!p.isFunction(t))
            throw new TypeError("Bind must be called on a function");
        return n = a.call(arguments, 2), r = function() {
            if (!(this instanceof r))
                return t.apply(e, n.concat(a.call(arguments)));
            $.prototype = t.prototype;
            var i = new $;
            $.prototype = null;
            var o = t.apply(i, n.concat(a.call(arguments)));
            return p.isObject(o) ? o : i
        }
    }, p.partial = function(t) {
        var e = a.call(arguments, 1);
        return function() {
            for (var n = 0, r = e.slice(), i = 0, o = r.length; o > i; i++)
                r[i] === p && (r[i] = arguments[n++]);
            for (; n < arguments.length; )
                r.push(arguments[n++]);
            return t.apply(this, r)
        }
    }, p.bindAll = function(t) {
        var e, n, r = arguments.length;
        if (1 >= r)
            throw new Error("bindAll must be passed function names");
        for (e = 1; r > e; e++)
            n = arguments[e], t[n] = p.bind(t[n], t);
        return t
    }, p.memoize = function(t, e) {
        var n = function(r) {
            var i = n.cache, o = e ? e.apply(this, arguments) : r;
            return p.has(i, o) || (i[o] = t.apply(this, arguments)), i[o]
        };
        return n.cache = {}, n
    }, p.delay = function(t, e) {
        var n = a.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, n)
        }, e)
    }, p.defer = function(t) {
        return p.delay.apply(p, [t, 1].concat(a.call(arguments, 1)))
    }, p.throttle = function(t, e, n) {
        var r, i, o, a = null, s = 0;
        n || (n = {});
        var u = function() {
            s = n.leading === !1 ? 0 : p.now(), a = null, o = t.apply(r, i), a || (r = i = null)
        };
        return function() {
            var l = p.now();
            s || n.leading !== !1 || (s = l);
            var c = e - (l - s);
            return r = this, i = arguments, 0 >= c || c > e ? (clearTimeout(a), a = null, s = l, o = t.apply(r, i), a || (r = i = null)) : a || n.trailing === !1 || (a = setTimeout(u, c)), o
        }
    }, p.debounce = function(t, e, n) {
        var r, i, o, a, s, u = function() {
            var l = p.now() - a;
            e > l && l > 0 ? r = setTimeout(u, e - l) : (r = null, n || (s = t.apply(o, i), r || (o = i = null)))
        };
        return function() {
            o = this, i = arguments, a = p.now();
            var l = n && !r;
            return r || (r = setTimeout(u, e)), l && (s = t.apply(o, i), o = i = null), s
        }
    }, p.wrap = function(t, e) {
        return p.partial(e, t)
    }, p.negate = function(t) {
        return function() {
            return!t.apply(this, arguments)
        }
    }, p.compose = function() {
        var t = arguments, e = t.length - 1;
        return function() {
            for (var n = e, r = t[e].apply(this, arguments); n--; )
                r = t[n].call(this, r);
            return r
        }
    }, p.after = function(t, e) {
        return function() {
            return--t < 1 ? e.apply(this, arguments) : void 0
        }
    }, p.before = function(t, e) {
        var n;
        return function() {
            return--t > 0 ? n = e.apply(this, arguments) : e = null, n
        }
    }, p.once = p.partial(p.before, 2), p.keys = function(t) {
        if (!p.isObject(t))
            return[];
        if (f)
            return f(t);
        var e = [];
        for (var n in t)
            p.has(t, n) && e.push(n);
        return e
    }, p.values = function(t) {
        for (var e = p.keys(t), n = e.length, r = Array(n), i = 0; n > i; i++)
            r[i] = t[e[i]];
        return r
    }, p.pairs = function(t) {
        for (var e = p.keys(t), n = e.length, r = Array(n), i = 0; n > i; i++)
            r[i] = [e[i], t[e[i]]];
        return r
    }, p.invert = function(t) {
        for (var e = {}, n = p.keys(t), r = 0, i = n.length; i > r; r++)
            e[t[n[r]]] = n[r];
        return e
    }, p.functions = p.methods = function(t) {
        var e = [];
        for (var n in t)
            p.isFunction(t[n]) && e.push(n);
        return e.sort()
    }, p.extend = function(t) {
        if (!p.isObject(t))
            return t;
        for (var e, n, r = 1, i = arguments.length; i > r; r++) {
            e = arguments[r];
            for (n in e)
                l.call(e, n) && (t[n] = e[n])
        }
        return t
    }, p.pick = function(t, e, n) {
        var r, i = {};
        if (null == t)
            return i;
        if (p.isFunction(e)) {
            e = h(e, n);
            for (r in t) {
                var o = t[r];
                e(o, r, t) && (i[r] = o)
            }
        } else {
            var u = s.apply([], a.call(arguments, 1));
            t = new Object(t);
            for (var l = 0, c = u.length; c > l; l++)
                r = u[l], r in t && (i[r] = t[r])
        }
        return i
    }, p.omit = function(t, e, n) {
        if (p.isFunction(e))
            e = p.negate(e);
        else {
            var r = p.map(s.apply([], a.call(arguments, 1)), String);
            e = function(t, e) {
                return!p.contains(r, e)
            }
        }
        return p.pick(t, e, n)
    }, p.defaults = function(t) {
        if (!p.isObject(t))
            return t;
        for (var e = 1, n = arguments.length; n > e; e++) {
            var r = arguments[e];
            for (var i in r)
                void 0 === t[i] && (t[i] = r[i])
        }
        return t
    }, p.clone = function(t) {
        return p.isObject(t) ? p.isArray(t) ? t.slice() : p.extend({}, t) : t
    }, p.tap = function(t, e) {
        return e(t), t
    };
    var y = function(t, e, n, r) {
        if (t === e)
            return 0 !== t || 1 / t === 1 / e;
        if (null == t || null == e)
            return t === e;
        t instanceof p && (t = t._wrapped), e instanceof p && (e = e._wrapped);
        var i = u.call(t);
        if (i !== u.call(e))
            return!1;
        switch (i) {
            case"[object RegExp]":
            case"[object String]":
                return"" + t == "" + e;
            case"[object Number]":
                return+t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
            case"[object Date]":
            case"[object Boolean]":
                return+t === +e
        }
        if ("object" != typeof t || "object" != typeof e)
            return!1;
        for (var o = n.length; o--; )
            if (n[o] === t)
                return r[o] === e;
        var a = t.constructor, s = e.constructor;
        if (a !== s && "constructor"in t && "constructor"in e && !(p.isFunction(a) && a instanceof a && p.isFunction(s) && s instanceof s))
            return!1;
        n.push(t), r.push(e);
        var l, c;
        if ("[object Array]" === i) {
            if (l = t.length, c = l === e.length)
                for (; l-- && (c = y(t[l], e[l], n, r)); )
                    ;
        } else {
            var f, d = p.keys(t);
            if (l = d.length, c = p.keys(e).length === l)
                for (; l-- && (f = d[l], c = p.has(e, f) && y(t[f], e[f], n, r)); )
                    ;
        }
        return n.pop(), r.pop(), c
    };
    p.isEqual = function(t, e) {
        return y(t, e, [], [])
    }, p.isEmpty = function(t) {
        if (null == t)
            return!0;
        if (p.isArray(t) || p.isString(t) || p.isArguments(t))
            return 0 === t.length;
        for (var e in t)
            if (p.has(t, e))
                return!1;
        return!0
    }, p.isElement = function(t) {
        return!(!t || 1 !== t.nodeType)
    }, p.isArray = c || function(t) {
        return"[object Array]" === u.call(t)
    }, p.isObject = function(t) {
        var e = typeof t;
        return"function" === e || "object" === e && !!t
    }, p.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
        p["is" + t] = function(e) {
            return u.call(e) === "[object " + t + "]"
        }
    }), p.isArguments(arguments) || (p.isArguments = function(t) {
        return p.has(t, "callee")
    }), "function" != typeof /./ && (p.isFunction = function(t) {
        return"function" == typeof t || !1
    }), p.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, p.isNaN = function(t) {
        return p.isNumber(t) && t !== +t
    }, p.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" === u.call(t)
    }, p.isNull = function(t) {
        return null === t
    }, p.isUndefined = function(t) {
        return void 0 === t
    }, p.has = function(t, e) {
        return null != t && l.call(t, e)
    }, p.noConflict = function() {
        return t._ = e, this
    }, p.identity = function(t) {
        return t
    }, p.constant = function(t) {
        return function() {
            return t
        }
    }, p.noop = function() {
    }, p.property = function(t) {
        return function(e) {
            return e[t]
        }
    }, p.matches = function(t) {
        var e = p.pairs(t), n = e.length;
        return function(t) {
            if (null == t)
                return!n;
            t = new Object(t);
            for (var r = 0; n > r; r++) {
                var i = e[r], o = i[0];
                if (i[1] !== t[o] || !(o in t))
                    return!1
            }
            return!0
        }
    }, p.times = function(t, e, n) {
        var r = Array(Math.max(0, t));
        e = h(e, n, 1);
        for (var i = 0; t > i; i++)
            r[i] = e(i);
        return r
    }, p.random = function(t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    }, p.now = Date.now || function() {
        return(new Date).getTime()
    };
    var b = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"}, w = p.invert(b), x = function(t) {
        var e = function(e) {
            return t[e]
        }, n = "(?:" + p.keys(t).join("|") + ")", r = RegExp(n), i = RegExp(n, "g");
        return function(t) {
            return t = null == t ? "" : "" + t, r.test(t) ? t.replace(i, e) : t
        }
    };
    p.escape = x(b), p.unescape = x(w), p.result = function(t, e) {
        if (null == t)
            return void 0;
        var n = t[e];
        return p.isFunction(n) ? t[e]() : n
    };
    var k = 0;
    p.uniqueId = function(t) {
        var e = ++k + "";
        return t ? t + e : e
    }, p.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var C = /(.)^/, T = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"}, S = /\\|'|\r|\n|\u2028|\u2029/g, D = function(t) {
        return"\\" + T[t]
    };
    p.template = function(t, e, n) {
        !e && n && (e = n), e = p.defaults({}, e, p.templateSettings);
        var r = RegExp([(e.escape || C).source, (e.interpolate || C).source, (e.evaluate || C).source].join("|") + "|$", "g"), i = 0, o = "__p+='";
        t.replace(r, function(e, n, r, a, s) {
            return o += t.slice(i, s).replace(S, D), i = s + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), e
        }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var a = new Function(e.variable || "obj", "_", o)
        } catch (s) {
            throw s.source = o, s
        }
        var u = function(t) {
            return a.call(this, t, p)
        }, l = e.variable || "obj";
        return u.source = "function(" + l + "){\n" + o + "}", u
    }, p.chain = function(t) {
        var e = p(t);
        return e._chain = !0, e
    };
    var E = function(t) {
        return this._chain ? p(t).chain() : t
    };
    p.mixin = function(t) {
        p.each(p.functions(t), function(e) {
            var n = p[e] = t[e];
            p.prototype[e] = function() {
                var t = [this._wrapped];
                return o.apply(t, arguments), E.call(this, n.apply(p, t))
            }
        })
    }, p.mixin(p), p.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var e = n[t];
        p.prototype[t] = function() {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], E.call(this, n)
        }
    }), p.each(["concat", "join", "slice"], function(t) {
        var e = n[t];
        p.prototype[t] = function() {
            return E.call(this, e.apply(this._wrapped, arguments))
        }
    }), p.prototype.value = function() {
        return this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return p
    })
}.call(this), !function(t, e) {
    "use strict";
    function n(t, e) {
        var n, r, i = t.toLowerCase();
        for (e = [].concat(e), n = 0; n < e.length; n += 1)
            if (r = e[n]) {
                if (r.test && r.test(t))
                    return!0;
                if (r.toLowerCase() === i)
                    return!0
            }
    }
    var r = e.prototype.trim, i = e.prototype.trimRight, o = e.prototype.trimLeft, a = function(t) {
        return 1 * t || 0
    }, s = function(t, e) {
        if (1 > e)
            return"";
        for (var n = ""; e > 0; )
            1 & e && (n += t), e >>= 1, t += t;
        return n
    }, u = [].slice, l = function(t) {
        return null == t ? "\\s" : t.source ? t.source : "[" + h.escapeRegExp(t) + "]"
    }, c = {lt: "<", gt: ">", quot: '"', amp: "&", apos: "'"}, f = {};
    for (var d in c)
        f[c[d]] = d;
    f["'"] = "#39";
    var p = function() {
        function t(t) {
            return Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
        }
        var n = s, r = function() {
            return r.cache.hasOwnProperty(arguments[0]) || (r.cache[arguments[0]] = r.parse(arguments[0])), r.format.call(null, r.cache[arguments[0]], arguments)
        };
        return r.format = function(r, i) {
            var o, a, s, u, l, c, f, d = 1, h = r.length, m = "", g = [];
            for (a = 0; h > a; a++)
                if (m = t(r[a]), "string" === m)
                    g.push(r[a]);
                else if ("array" === m) {
                    if (u = r[a], u[2])
                        for (o = i[d], s = 0; s < u[2].length; s++) {
                            if (!o.hasOwnProperty(u[2][s]))
                                throw new Error(p('[_.sprintf] property "%s" does not exist', u[2][s]));
                            o = o[u[2][s]]
                        }
                    else
                        o = u[1] ? i[u[1]] : i[d++];
                    if (/[^s]/.test(u[8]) && "number" != t(o))
                        throw new Error(p("[_.sprintf] expecting number but found %s", t(o)));
                    switch (u[8]) {
                        case"b":
                            o = o.toString(2);
                            break;
                        case"c":
                            o = e.fromCharCode(o);
                            break;
                        case"d":
                            o = parseInt(o, 10);
                            break;
                        case"e":
                            o = u[7] ? o.toExponential(u[7]) : o.toExponential();
                            break;
                        case"f":
                            o = u[7] ? parseFloat(o).toFixed(u[7]) : parseFloat(o);
                            break;
                        case"o":
                            o = o.toString(8);
                            break;
                        case"s":
                            o = (o = e(o)) && u[7] ? o.substring(0, u[7]) : o;
                            break;
                        case"u":
                            o = Math.abs(o);
                            break;
                        case"x":
                            o = o.toString(16);
                            break;
                        case"X":
                            o = o.toString(16).toUpperCase()
                    }
                    o = /[def]/.test(u[8]) && u[3] && o >= 0 ? "+" + o : o, c = u[4] ? "0" == u[4] ? "0" : u[4].charAt(1) : " ", f = u[6] - e(o).length, l = u[6] ? n(c, f) : "", g.push(u[5] ? o + l : l + o)
                }
            return g.join("")
        }, r.cache = {}, r.parse = function(t) {
            for (var e = t, n = [], r = [], i = 0; e; ) {
                if (null !== (n = /^[^\x25]+/.exec(e)))
                    r.push(n[0]);
                else if (null !== (n = /^\x25{2}/.exec(e)))
                    r.push("%");
                else {
                    if (null === (n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(e)))
                        throw new Error("[_.sprintf] huh?");
                    if (n[2]) {
                        i |= 1;
                        var o = [], a = n[2], s = [];
                        if (null === (s = /^([a-z_][a-z_\d]*)/i.exec(a)))
                            throw new Error("[_.sprintf] huh?");
                        for (o.push(s[1]); "" !== (a = a.substring(s[0].length)); )
                            if (null !== (s = /^\.([a-z_][a-z_\d]*)/i.exec(a)))
                                o.push(s[1]);
                            else {
                                if (null === (s = /^\[(\d+)\]/.exec(a)))
                                    throw new Error("[_.sprintf] huh?");
                                o.push(s[1])
                            }
                        n[2] = o
                    } else
                        i |= 2;
                    if (3 === i)
                        throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
                    r.push(n)
                }
                e = e.substring(n[0].length)
            }
            return r
        }, r
    }(), h = {VERSION: "2.4.0", isBlank: function(t) {
            return null == t && (t = ""), /^\s*$/.test(t)
        }, stripTags: function(t) {
            return null == t ? "" : e(t).replace(/<\/?[^>]+>/g, "")
        }, capitalize: function(t) {
            return t = null == t ? "" : e(t), t.charAt(0).toUpperCase() + t.slice(1)
        }, chop: function(t, n) {
            return null == t ? [] : (t = e(t), n = ~~n, n > 0 ? t.match(new RegExp(".{1," + n + "}", "g")) : [t])
        }, clean: function(t) {
            return h.strip(t).replace(/\s+/g, " ")
        }, count: function(t, n) {
            if (null == t || null == n)
                return 0;
            t = e(t), n = e(n);
            for (var r = 0, i = 0, o = n.length; ; ) {
                if (i = t.indexOf(n, i), -1 === i)
                    break;
                r++, i += o
            }
            return r
        }, chars: function(t) {
            return null == t ? [] : e(t).split("")
        }, swapCase: function(t) {
            return null == t ? "" : e(t).replace(/\S/g, function(t) {
                return t === t.toUpperCase() ? t.toLowerCase() : t.toUpperCase()
            })
        }, escapeHTML: function(t) {
            return null == t ? "" : e(t).replace(/[&<>"']/g, function(t) {
                return"&" + f[t] + ";"
            })
        }, unescapeHTML: function(t) {
            return null == t ? "" : e(t).replace(/\&([^;]+);/g, function(t, n) {
                var r;
                return n in c ? c[n] : (r = n.match(/^#x([\da-fA-F]+)$/)) ? e.fromCharCode(parseInt(r[1], 16)) : (r = n.match(/^#(\d+)$/)) ? e.fromCharCode(~~r[1]) : t
            })
        }, escapeRegExp: function(t) {
            return null == t ? "" : e(t).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
        }, splice: function(t, e, n, r) {
            var i = h.chars(t);
            return i.splice(~~e, ~~n, r), i.join("")
        }, insert: function(t, e, n) {
            return h.splice(t, e, 0, n)
        }, include: function(t, n) {
            return"" === n ? !0 : null == t ? !1 : -1 !== e(t).indexOf(n)
        }, join: function() {
            var t = u.call(arguments), e = t.shift();
            return null == e && (e = ""), t.join(e)
        }, lines: function(t) {
            return null == t ? [] : e(t).split("\n")
        }, reverse: function(t) {
            return h.chars(t).reverse().join("")
        }, startsWith: function(t, n) {
            return"" === n ? !0 : null == t || null == n ? !1 : (t = e(t), n = e(n), t.length >= n.length && t.slice(0, n.length) === n)
        }, endsWith: function(t, n) {
            return"" === n ? !0 : null == t || null == n ? !1 : (t = e(t), n = e(n), t.length >= n.length && t.slice(t.length - n.length) === n)
        }, succ: function(t) {
            return null == t ? "" : (t = e(t), t.slice(0, -1) + e.fromCharCode(t.charCodeAt(t.length - 1) + 1))
        }, titleize: function(t) {
            return null == t ? "" : (t = e(t).toLowerCase(), t.replace(/(?:^|\s|-)\S/g, function(t) {
                return t.toUpperCase()
            }))
        }, camelize: function(t) {
            return h.trim(t).replace(/[-_\s]+(.)?/g, function(t, e) {
                return e ? e.toUpperCase() : ""
            })
        }, underscored: function(t) {
            return h.trim(t).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase()
        }, dasherize: function(t) {
            return h.trim(t).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase()
        }, classify: function(t) {
            return h.capitalize(h.camelize(e(t).replace(/[\W_]/g, " ")).replace(/\s/g, ""))
        }, humanize: function(t) {
            return h.capitalize(h.underscored(t).replace(/_id$/, "").replace(/_/g, " "))
        }, trim: function(t, n) {
            return null == t ? "" : !n && r ? r.call(t) : (n = l(n), e(t).replace(new RegExp("^" + n + "+|" + n + "+$", "g"), ""))
        }, ltrim: function(t, n) {
            return null == t ? "" : !n && o ? o.call(t) : (n = l(n), e(t).replace(new RegExp("^" + n + "+"), ""))
        }, rtrim: function(t, n) {
            return null == t ? "" : !n && i ? i.call(t) : (n = l(n), e(t).replace(new RegExp(n + "+$"), ""))
        }, truncate: function(t, n, r) {
            return null == t ? "" : (t = e(t), r = r || "...", n = ~~n, t.length > n ? t.slice(0, n) + r : t)
        }, prune: function(t, n, r) {
            if (null == t)
                return"";
            if (t = e(t), n = ~~n, r = null != r ? e(r) : "...", t.length <= n)
                return t;
            var i = function(t) {
                return t.toUpperCase() !== t.toLowerCase() ? "A" : " "
            }, o = t.slice(0, n + 1).replace(/.(?=\W*\w*$)/g, i);
            return o = o.slice(o.length - 2).match(/\w\w/) ? o.replace(/\s*\S+$/, "") : h.rtrim(o.slice(0, o.length - 1)), (o + r).length > t.length ? t : t.slice(0, o.length) + r
        }, words: function(t, e) {
            return h.isBlank(t) ? [] : h.trim(t, e).split(e || /\s+/)
        }, pad: function(t, n, r, i) {
            t = null == t ? "" : e(t), n = ~~n;
            var o = 0;
            switch (r ? r.length > 1 && (r = r.charAt(0)) : r = " ", i) {
                case"right":
                    return o = n - t.length, t + s(r, o);
                case"both":
                    return o = n - t.length, s(r, Math.ceil(o / 2)) + t + s(r, Math.floor(o / 2));
                default:
                    return o = n - t.length, s(r, o) + t
                }
        }, lpad: function(t, e, n) {
            return h.pad(t, e, n)
        }, rpad: function(t, e, n) {
            return h.pad(t, e, n, "right")
        }, lrpad: function(t, e, n) {
            return h.pad(t, e, n, "both")
        }, sprintf: p, vsprintf: function(t, e) {
            return e.unshift(t), p.apply(null, e)
        }, toNumber: function(t, e) {
            return t ? (t = h.trim(t), t.match(/^-?\d+(?:\.\d+)?$/) ? a(a(t).toFixed(~~e)) : 0 / 0) : 0
        }, numberFormat: function(t, e, n, r) {
            if (isNaN(t) || null == t)
                return"";
            t = t.toFixed(~~e), r = "string" == typeof r ? r : ",";
            var i = t.split("."), o = i[0], a = i[1] ? (n || ".") + i[1] : "";
            return o.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + r) + a
        }, strRight: function(t, n) {
            if (null == t)
                return"";
            t = e(t), n = null != n ? e(n) : n;
            var r = n ? t.indexOf(n) : -1;
            return~r ? t.slice(r + n.length, t.length) : t
        }, strRightBack: function(t, n) {
            if (null == t)
                return"";
            t = e(t), n = null != n ? e(n) : n;
            var r = n ? t.lastIndexOf(n) : -1;
            return~r ? t.slice(r + n.length, t.length) : t
        }, strLeft: function(t, n) {
            if (null == t)
                return"";
            t = e(t), n = null != n ? e(n) : n;
            var r = n ? t.indexOf(n) : -1;
            return~r ? t.slice(0, r) : t
        }, strLeftBack: function(t, e) {
            if (null == t)
                return"";
            t += "", e = null != e ? "" + e : e;
            var n = t.lastIndexOf(e);
            return~n ? t.slice(0, n) : t
        }, toSentence: function(t, e, n, r) {
            e = e || ", ", n = n || " and ";
            var i = t.slice(), o = i.pop();
            return t.length > 2 && r && (n = h.rtrim(e) + n), i.length ? i.join(e) + n + o : o
        }, toSentenceSerial: function() {
            var t = u.call(arguments);
            return t[3] = !0, h.toSentence.apply(h, t)
        }, slugify: function(t) {
            if (null == t)
                return"";
            var n = "ąàáäâãåæăćęèéëêìíïîłńòóöôõøśșțùúüûñçżź", r = "aaaaaaaaaceeeeeiiiilnoooooosstuuuunczz", i = new RegExp(l(n), "g");
            return t = e(t).toLowerCase().replace(i, function(t) {
                var e = n.indexOf(t);
                return r.charAt(e) || "-"
            }), h.dasherize(t.replace(/[^\w\s-]/g, ""))
        }, surround: function(t, e) {
            return[e, t, e].join("")
        }, quote: function(t, e) {
            return h.surround(t, e || '"')
        }, unquote: function(t, e) {
            return e = e || '"', t[0] === e && t[t.length - 1] === e ? t.slice(1, t.length - 1) : t
        }, exports: function() {
            var t = {};
            for (var e in this)
                this.hasOwnProperty(e) && !e.match(/^(?:include|contains|reverse)$/) && (t[e] = this[e]);
            return t
        }, repeat: function(t, n, r) {
            if (null == t)
                return"";
            if (n = ~~n, null == r)
                return s(e(t), n);
            for (var i = []; n > 0; i[--n] = t)
                ;
            return i.join(r)
        }, naturalCmp: function(t, n) {
            if (t == n)
                return 0;
            if (!t)
                return-1;
            if (!n)
                return 1;
            for (var r = /(\.\d+)|(\d+)|(\D+)/g, i = e(t).toLowerCase().match(r), o = e(n).toLowerCase().match(r), a = Math.min(i.length, o.length), s = 0; a > s; s++) {
                var u = i[s], l = o[s];
                if (u !== l) {
                    var c = parseInt(u, 10);
                    if (!isNaN(c)) {
                        var f = parseInt(l, 10);
                        if (!isNaN(f) && c - f)
                            return c - f
                    }
                    return l > u ? -1 : 1
                }
            }
            return i.length === o.length ? i.length - o.length : n > t ? -1 : 1
        }, levenshtein: function(t, n) {
            if (null == t && null == n)
                return 0;
            if (null == t)
                return e(n).length;
            if (null == n)
                return e(t).length;
            t = e(t), n = e(n);
            for (var r, i, o = [], a = 0; a <= n.length; a++)
                for (var s = 0; s <= t.length; s++)
                    i = a && s ? t.charAt(s - 1) === n.charAt(a - 1) ? r : Math.min(o[s], o[s - 1], r) + 1 : a + s, r = o[s], o[s] = i;
            return o.pop()
        }, toBoolean: function(t, e, r) {
            return"number" == typeof t && (t = "" + t), "string" != typeof t ? !!t : (t = h.trim(t), n(t, e || ["true", "1"]) ? !0 : n(t, r || ["false", "0"]) ? !1 : void 0)
        }};
    h.strip = h.trim, h.lstrip = h.ltrim, h.rstrip = h.rtrim, h.center = h.lrpad, h.rjust = h.lpad, h.ljust = h.rpad, h.contains = h.include, h.q = h.quote, h.toBool = h.toBoolean, "undefined" != typeof exports && ("undefined" != typeof module && module.exports && (module.exports = h), exports._s = h), "function" == typeof define && define.amd && define("underscore.string", [], function() {
        return h
    }), t._ = t._ || {}, t._.string = t._.str = h
}(this, String), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function(t, e, n) {
        function r(t) {
            for (var e in t)
                if (void 0 !== o.style[e])
                    return t[e]
        }
        var i = function(r, o, a) {
            a = a || {};
            var s = t.defer(), u = i[a.animation ? "animationEndEventName" : "transitionEndEventName"], l = function() {
                n.$apply(function() {
                    r.unbind(u, l), s.resolve(r)
                })
            };
            return u && r.bind(u, l), e(function() {
                angular.isString(o) ? r.addClass(o) : angular.isFunction(o) ? o(r) : angular.isObject(o) && r.css(o), u || s.resolve(r)
            }), s.promise.cancel = function() {
                u && r.unbind(u, l), s.reject("Transition cancelled")
            }, s.promise
        }, o = document.createElement("trans"), a = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend"}, s = {WebkitTransition: "webkitAnimationEnd", MozTransition: "animationend", OTransition: "oAnimationEnd", transition: "animationend"};
        return i.transitionEndEventName = r(a), i.animationEndEventName = r(s), i
    }]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition", function(t) {
        return{link: function(e, n, r) {
                function i(e) {
                    function r() {
                        l === i && (l = void 0)
                    }
                    var i = t(n, e);
                    return l && l.cancel(), l = i, i.then(r, r), i
                }
                function o() {
                    c ? (c = !1, a()) : (n.removeClass("collapse").addClass("collapsing"), i({height: n[0].scrollHeight + "px"}).then(a))
                }
                function a() {
                    n.removeClass("collapsing"), n.addClass("collapse in"), n.css({height: "auto"})
                }
                function s() {
                    if (c)
                        c = !1, u(), n.css({height: 0});
                    else {
                        n.css({height: n[0].scrollHeight + "px"});
                        {
                            n[0].offsetWidth
                        }
                        n.removeClass("collapse in").addClass("collapsing"), i({height: 0}).then(u)
                    }
                }
                function u() {
                    n.removeClass("collapsing"), n.addClass("collapse")
                }
                var l, c = !0;
                e.$watch(r.collapse, function(t) {
                    t ? s() : o()
                })
            }}
    }]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {closeOthers: !0}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function(t, e, n) {
        this.groups = [], this.closeOthers = function(r) {
            var i = angular.isDefined(e.closeOthers) ? t.$eval(e.closeOthers) : n.closeOthers;
            i && angular.forEach(this.groups, function(t) {
                t !== r && (t.isOpen = !1)
            })
        }, this.addGroup = function(t) {
            var e = this;
            this.groups.push(t), t.$on("$destroy", function() {
                e.removeGroup(t)
            })
        }, this.removeGroup = function(t) {
            var e = this.groups.indexOf(t);
            -1 !== e && this.groups.splice(e, 1)
        }
    }]).directive("accordion", function() {
    return{restrict: "EA", controller: "AccordionController", transclude: !0, replace: !1, templateUrl: "template/accordion/accordion.html"}
}).directive("accordionGroup", function() {
    return{require: "^accordion", restrict: "EA", transclude: !0, replace: !0, templateUrl: "template/accordion/accordion-group.html", scope: {heading: "@", isOpen: "=?", isDisabled: "=?"}, controller: function() {
            this.setHeading = function(t) {
                this.heading = t
            }
        }, link: function(t, e, n, r) {
            r.addGroup(t), t.$watch("isOpen", function(e) {
                e && r.closeOthers(t)
            }), t.toggleOpen = function() {
                t.isDisabled || (t.isOpen = !t.isOpen)
            }
        }}
}).directive("accordionHeading", function() {
    return{restrict: "EA", transclude: !0, template: "", replace: !0, require: "^accordionGroup", link: function(t, e, n, r, i) {
            r.setHeading(i(t, function() {
            }))
        }}
}).directive("accordionTransclude", function() {
    return{require: "^accordionGroup", link: function(t, e, n, r) {
            t.$watch(function() {
                return r[n.accordionTransclude]
            }, function(t) {
                t && (e.html(""), e.append(t))
            })
        }}
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function(t, e) {
        t.closeable = "close"in e, this.close = t.close
    }]).directive("alert", function() {
    return{restrict: "EA", controller: "AlertController", templateUrl: "template/alert/alert.html", transclude: !0, replace: !0, scope: {type: "@", close: "&"}}
}).directive("dismissOnTimeout", ["$timeout", function(t) {
        return{require: "alert", link: function(e, n, r, i) {
                t(function() {
                    i.close()
                }, parseInt(r.dismissOnTimeout, 10))
            }}
    }]), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function() {
    return function(t, e, n) {
        e.addClass("ng-binding").data("$binding", n.bindHtmlUnsafe), t.$watch(n.bindHtmlUnsafe, function(t) {
            e.html(t || "")
        })
    }
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {activeClass: "active", toggleEvent: "click"}).controller("ButtonsController", ["buttonConfig", function(t) {
        this.activeClass = t.activeClass || "active", this.toggleEvent = t.toggleEvent || "click"
    }]).directive("btnRadio", function() {
    return{require: ["btnRadio", "ngModel"], controller: "ButtonsController", link: function(t, e, n, r) {
            var i = r[0], o = r[1];
            o.$render = function() {
                e.toggleClass(i.activeClass, angular.equals(o.$modelValue, t.$eval(n.btnRadio)))
            }, e.bind(i.toggleEvent, function() {
                var r = e.hasClass(i.activeClass);
                (!r || angular.isDefined(n.uncheckable)) && t.$apply(function() {
                    o.$setViewValue(r ? null : t.$eval(n.btnRadio)), o.$render()
                })
            })
        }}
}).directive("btnCheckbox", function() {
    return{require: ["btnCheckbox", "ngModel"], controller: "ButtonsController", link: function(t, e, n, r) {
            function i() {
                return a(n.btnCheckboxTrue, !0)
            }
            function o() {
                return a(n.btnCheckboxFalse, !1)
            }
            function a(e, n) {
                var r = t.$eval(e);
                return angular.isDefined(r) ? r : n
            }
            var s = r[0], u = r[1];
            u.$render = function() {
                e.toggleClass(s.activeClass, angular.equals(u.$modelValue, i()))
            }, e.bind(s.toggleEvent, function() {
                t.$apply(function() {
                    u.$setViewValue(e.hasClass(s.activeClass) ? o() : i()), u.$render()
                })
            })
        }}
}), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$interval", "$transition", function(t, e, n, r) {
        function i() {
            o();
            var e = +t.interval;
            !isNaN(e) && e > 0 && (s = n(a, e))
        }
        function o() {
            s && (n.cancel(s), s = null)
        }
        function a() {
            var e = +t.interval;
            u && !isNaN(e) && e > 0 ? t.next() : t.pause()
        }
        var s, u, l = this, c = l.slides = t.slides = [], f = -1;
        l.currentSlide = null;
        var d = !1;
        l.select = t.select = function(n, o) {
            function a() {
                if (!d) {
                    if (l.currentSlide && angular.isString(o) && !t.noTransition && n.$element) {
                        n.$element.addClass(o);
                        {
                            n.$element[0].offsetWidth
                        }
                        angular.forEach(c, function(t) {
                            angular.extend(t, {direction: "", entering: !1, leaving: !1, active: !1})
                        }), angular.extend(n, {direction: o, active: !0, entering: !0}), angular.extend(l.currentSlide || {}, {direction: o, leaving: !0}), t.$currentTransition = r(n.$element, {}), function(e, n) {
                            t.$currentTransition.then(function() {
                                s(e, n)
                            }, function() {
                                s(e, n)
                            })
                        }(n, l.currentSlide)
                    } else
                        s(n, l.currentSlide);
                    l.currentSlide = n, f = u, i()
                }
            }
            function s(e, n) {
                angular.extend(e, {direction: "", active: !0, leaving: !1, entering: !1}), angular.extend(n || {}, {direction: "", active: !1, leaving: !1, entering: !1}), t.$currentTransition = null
            }
            var u = c.indexOf(n);
            void 0 === o && (o = u > f ? "next" : "prev"), n && n !== l.currentSlide && (t.$currentTransition ? (t.$currentTransition.cancel(), e(a)) : a())
        }, t.$on("$destroy", function() {
            d = !0
        }), l.indexOfSlide = function(t) {
            return c.indexOf(t)
        }, t.next = function() {
            var e = (f + 1) % c.length;
            return t.$currentTransition ? void 0 : l.select(c[e], "next")
        }, t.prev = function() {
            var e = 0 > f - 1 ? c.length - 1 : f - 1;
            return t.$currentTransition ? void 0 : l.select(c[e], "prev")
        }, t.isActive = function(t) {
            return l.currentSlide === t
        }, t.$watch("interval", i), t.$on("$destroy", o), t.play = function() {
            u || (u = !0, i())
        }, t.pause = function() {
            t.noPause || (u = !1, o())
        }, l.addSlide = function(e, n) {
            e.$element = n, c.push(e), 1 === c.length || e.active ? (l.select(c[c.length - 1]), 1 == c.length && t.play()) : e.active = !1
        }, l.removeSlide = function(t) {
            var e = c.indexOf(t);
            c.splice(e, 1), c.length > 0 && t.active ? l.select(e >= c.length ? c[e - 1] : c[e]) : f > e && f--
        }
    }]).directive("carousel", [function() {
        return{restrict: "EA", transclude: !0, replace: !0, controller: "CarouselController", require: "carousel", templateUrl: "template/carousel/carousel.html", scope: {interval: "=", noTransition: "=", noPause: "="}}
    }]).directive("slide", function() {
    return{require: "^carousel", restrict: "EA", transclude: !0, replace: !0, templateUrl: "template/carousel/slide.html", scope: {active: "=?"}, link: function(t, e, n, r) {
            r.addSlide(t, e), t.$on("$destroy", function() {
                r.removeSlide(t)
            }), t.$watch("active", function(e) {
                e && r.select(t)
            })
        }}
}), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter", function(t, e) {
        function n(t) {
            var n = [], r = t.split("");
            return angular.forEach(i, function(e, i) {
                var o = t.indexOf(i);
                if (o > -1) {
                    t = t.split(""), r[o] = "(" + e.regex + ")", t[o] = "$";
                    for (var a = o + 1, s = o + i.length; s > a; a++)
                        r[a] = "", t[a] = "$";
                    t = t.join(""), n.push({index: o, apply: e.apply})
                }
            }), {regex: new RegExp("^" + r.join("") + "$"), map: e(n, "index")}
        }
        function r(t, e, n) {
            return 1 === e && n > 28 ? 29 === n && (t % 4 === 0 && t % 100 !== 0 || t % 400 === 0) : 3 === e || 5 === e || 8 === e || 10 === e ? 31 > n : !0
        }
        this.parsers = {};
        var i = {yyyy: {regex: "\\d{4}", apply: function(t) {
                    this.year = +t
                }}, yy: {regex: "\\d{2}", apply: function(t) {
                    this.year = +t + 2e3
                }}, y: {regex: "\\d{1,4}", apply: function(t) {
                    this.year = +t
                }}, MMMM: {regex: t.DATETIME_FORMATS.MONTH.join("|"), apply: function(e) {
                    this.month = t.DATETIME_FORMATS.MONTH.indexOf(e)
                }}, MMM: {regex: t.DATETIME_FORMATS.SHORTMONTH.join("|"), apply: function(e) {
                    this.month = t.DATETIME_FORMATS.SHORTMONTH.indexOf(e)
                }}, MM: {regex: "0[1-9]|1[0-2]", apply: function(t) {
                    this.month = t - 1
                }}, M: {regex: "[1-9]|1[0-2]", apply: function(t) {
                    this.month = t - 1
                }}, dd: {regex: "[0-2][0-9]{1}|3[0-1]{1}", apply: function(t) {
                    this.date = +t
                }}, d: {regex: "[1-2]?[0-9]{1}|3[0-1]{1}", apply: function(t) {
                    this.date = +t
                }}, EEEE: {regex: t.DATETIME_FORMATS.DAY.join("|")}, EEE: {regex: t.DATETIME_FORMATS.SHORTDAY.join("|")}};
        this.parse = function(e, i) {
            if (!angular.isString(e) || !i)
                return e;
            i = t.DATETIME_FORMATS[i] || i, this.parsers[i] || (this.parsers[i] = n(i));
            var o = this.parsers[i], a = o.regex, s = o.map, u = e.match(a);
            if (u && u.length) {
                for (var l, c = {year: 1900, month: 0, date: 1, hours: 0}, f = 1, d = u.length; d > f; f++) {
                    var p = s[f - 1];
                    p.apply && p.apply.call(c, u[f])
                }
                return r(c.year, c.month, c.date) && (l = new Date(c.year, c.month, c.date, c.hours)), l
            }
        }
    }]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function(t, e) {
        function n(t, n) {
            return t.currentStyle ? t.currentStyle[n] : e.getComputedStyle ? e.getComputedStyle(t)[n] : t.style[n]
        }
        function r(t) {
            return"static" === (n(t, "position") || "static")
        }
        var i = function(e) {
            for (var n = t[0], i = e.offsetParent || n; i && i !== n && r(i); )
                i = i.offsetParent;
            return i || n
        };
        return{position: function(e) {
                var n = this.offset(e), r = {top: 0, left: 0}, o = i(e[0]);
                o != t[0] && (r = this.offset(angular.element(o)), r.top += o.clientTop - o.scrollTop, r.left += o.clientLeft - o.scrollLeft);
                var a = e[0].getBoundingClientRect();
                return{width: a.width || e.prop("offsetWidth"), height: a.height || e.prop("offsetHeight"), top: n.top - r.top, left: n.left - r.left}
            }, offset: function(n) {
                var r = n[0].getBoundingClientRect();
                return{width: r.width || n.prop("offsetWidth"), height: r.height || n.prop("offsetHeight"), top: r.top + (e.pageYOffset || t[0].documentElement.scrollTop), left: r.left + (e.pageXOffset || t[0].documentElement.scrollLeft)}
            }, positionElements: function(t, e, n, r) {
                var i, o, a, s, u = n.split("-"), l = u[0], c = u[1] || "center";
                i = r ? this.offset(t) : this.position(t), o = e.prop("offsetWidth"), a = e.prop("offsetHeight");
                var f = {center: function() {
                        return i.left + i.width / 2 - o / 2
                    }, left: function() {
                        return i.left
                    }, right: function() {
                        return i.left + i.width
                    }}, d = {center: function() {
                        return i.top + i.height / 2 - a / 2
                    }, top: function() {
                        return i.top
                    }, bottom: function() {
                        return i.top + i.height
                    }};
                switch (l) {
                    case"right":
                        s = {top: d[c](), left: f[l]()};
                        break;
                    case"left":
                        s = {top: d[c](), left: i.left - o};
                        break;
                    case"bottom":
                        s = {top: d[l](), left: f[c]()};
                        break;
                    default:
                        s = {top: i.top - a, left: f[c]()}
                }
                return s
            }}
    }]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {formatDay: "dd", formatMonth: "MMMM", formatYear: "yyyy", formatDayHeader: "EEE", formatDayTitle: "MMMM yyyy", formatMonthTitle: "yyyy", datepickerMode: "day", minMode: "day", maxMode: "year", showWeeks: !0, startingDay: 0, yearRange: 20, minDate: null, maxDate: null}).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig", function(t, e, n, r, i, o, a, s) {
        var u = this, l = {$setViewValue: angular.noop};
        this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange"], function(n, i) {
            u[n] = angular.isDefined(e[n]) ? 8 > i ? r(e[n])(t.$parent) : t.$parent.$eval(e[n]) : s[n]
        }), angular.forEach(["minDate", "maxDate"], function(r) {
            e[r] ? t.$parent.$watch(n(e[r]), function(t) {
                u[r] = t ? new Date(t) : null, u.refreshView()
            }) : u[r] = s[r] ? new Date(s[r]) : null
        }), t.datepickerMode = t.datepickerMode || s.datepickerMode, t.uniqueId = "datepicker-" + t.$id + "-" + Math.floor(1e4 * Math.random()), this.activeDate = angular.isDefined(e.initDate) ? t.$parent.$eval(e.initDate) : new Date, t.isActive = function(e) {
            return 0 === u.compare(e.date, u.activeDate) ? (t.activeDateId = e.uid, !0) : !1
        }, this.init = function(t) {
            l = t, l.$render = function() {
                u.render()
            }
        }, this.render = function() {
            if (l.$modelValue) {
                var t = new Date(l.$modelValue), e = !isNaN(t);
                e ? this.activeDate = t : o.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), l.$setValidity("date", e)
            }
            this.refreshView()
        }, this.refreshView = function() {
            if (this.element) {
                this._refreshView();
                var t = l.$modelValue ? new Date(l.$modelValue) : null;
                l.$setValidity("date-disabled", !t || this.element && !this.isDisabled(t))
            }
        }, this.createDateObject = function(t, e) {
            var n = l.$modelValue ? new Date(l.$modelValue) : null;
            return{date: t, label: a(t, e), selected: n && 0 === this.compare(t, n), disabled: this.isDisabled(t), current: 0 === this.compare(t, new Date)}
        }, this.isDisabled = function(n) {
            return this.minDate && this.compare(n, this.minDate) < 0 || this.maxDate && this.compare(n, this.maxDate) > 0 || e.dateDisabled && t.dateDisabled({date: n, mode: t.datepickerMode})
        }, this.split = function(t, e) {
            for (var n = []; t.length > 0; )
                n.push(t.splice(0, e));
            return n
        }, t.select = function(e) {
            if (t.datepickerMode === u.minMode) {
                var n = l.$modelValue ? new Date(l.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
                n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), l.$setViewValue(n), l.$render()
            } else
                u.activeDate = e, t.datepickerMode = u.modes[u.modes.indexOf(t.datepickerMode) - 1]
        }, t.move = function(t) {
            var e = u.activeDate.getFullYear() + t * (u.step.years || 0), n = u.activeDate.getMonth() + t * (u.step.months || 0);
            u.activeDate.setFullYear(e, n, 1), u.refreshView()
        }, t.toggleMode = function(e) {
            e = e || 1, t.datepickerMode === u.maxMode && 1 === e || t.datepickerMode === u.minMode && -1 === e || (t.datepickerMode = u.modes[u.modes.indexOf(t.datepickerMode) + e])
        }, t.keys = {13: "enter", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down"};
        var c = function() {
            i(function() {
                u.element[0].focus()
            }, 0, !1)
        };
        t.$on("datepicker.focus", c), t.keydown = function(e) {
            var n = t.keys[e.which];
            if (n && !e.shiftKey && !e.altKey)
                if (e.preventDefault(), e.stopPropagation(), "enter" === n || "space" === n) {
                    if (u.isDisabled(u.activeDate))
                        return;
                    t.select(u.activeDate), c()
                } else
                    !e.ctrlKey || "up" !== n && "down" !== n ? (u.handleKeyDown(n, e), u.refreshView()) : (t.toggleMode("up" === n ? 1 : -1), c())
        }
    }]).directive("datepicker", function() {
    return{restrict: "EA", replace: !0, templateUrl: "template/datepicker/datepicker.html", scope: {datepickerMode: "=?", dateDisabled: "&"}, require: ["datepicker", "?^ngModel"], controller: "DatepickerController", link: function(t, e, n, r) {
            var i = r[0], o = r[1];
            o && i.init(o)
        }}
}).directive("daypicker", ["dateFilter", function(t) {
        return{restrict: "EA", replace: !0, templateUrl: "template/datepicker/day.html", require: "^datepicker", link: function(e, n, r, i) {
                function o(t, e) {
                    return 1 !== e || t % 4 !== 0 || t % 100 === 0 && t % 400 !== 0 ? u[e] : 29
                }
                function a(t, e) {
                    var n = new Array(e), r = new Date(t), i = 0;
                    for (r.setHours(12); e > i; )
                        n[i++] = new Date(r), r.setDate(r.getDate() + 1);
                    return n
                }
                function s(t) {
                    var e = new Date(t);
                    e.setDate(e.getDate() + 4 - (e.getDay() || 7));
                    var n = e.getTime();
                    return e.setMonth(0), e.setDate(1), Math.floor(Math.round((n - e) / 864e5) / 7) + 1
                }
                e.showWeeks = i.showWeeks, i.step = {months: 1}, i.element = n;
                var u = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                i._refreshView = function() {
                    var n = i.activeDate.getFullYear(), r = i.activeDate.getMonth(), o = new Date(n, r, 1), u = i.startingDay - o.getDay(), l = u > 0 ? 7 - u : -u, c = new Date(o);
                    l > 0 && c.setDate(-l + 1);
                    for (var f = a(c, 42), d = 0; 42 > d; d++)
                        f[d] = angular.extend(i.createDateObject(f[d], i.formatDay), {secondary: f[d].getMonth() !== r, uid: e.uniqueId + "-" + d});
                    e.labels = new Array(7);
                    for (var p = 0; 7 > p; p++)
                        e.labels[p] = {abbr: t(f[p].date, i.formatDayHeader), full: t(f[p].date, "EEEE")};
                    if (e.title = t(i.activeDate, i.formatDayTitle), e.rows = i.split(f, 7), e.showWeeks) {
                        e.weekNumbers = [];
                        for (var h = s(e.rows[0][0].date), m = e.rows.length; e.weekNumbers.push(h++) < m; )
                            ;
                    }
                }, i.compare = function(t, e) {
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate()) - new Date(e.getFullYear(), e.getMonth(), e.getDate())
                }, i.handleKeyDown = function(t) {
                    var e = i.activeDate.getDate();
                    if ("left" === t)
                        e -= 1;
                    else if ("up" === t)
                        e -= 7;
                    else if ("right" === t)
                        e += 1;
                    else if ("down" === t)
                        e += 7;
                    else if ("pageup" === t || "pagedown" === t) {
                        var n = i.activeDate.getMonth() + ("pageup" === t ? -1 : 1);
                        i.activeDate.setMonth(n, 1), e = Math.min(o(i.activeDate.getFullYear(), i.activeDate.getMonth()), e)
                    } else
                        "home" === t ? e = 1 : "end" === t && (e = o(i.activeDate.getFullYear(), i.activeDate.getMonth()));
                    i.activeDate.setDate(e)
                }, i.refreshView()
            }}
    }]).directive("monthpicker", ["dateFilter", function(t) {
        return{restrict: "EA", replace: !0, templateUrl: "template/datepicker/month.html", require: "^datepicker", link: function(e, n, r, i) {
                i.step = {years: 1}, i.element = n, i._refreshView = function() {
                    for (var n = new Array(12), r = i.activeDate.getFullYear(), o = 0; 12 > o; o++)
                        n[o] = angular.extend(i.createDateObject(new Date(r, o, 1), i.formatMonth), {uid: e.uniqueId + "-" + o});
                    e.title = t(i.activeDate, i.formatMonthTitle), e.rows = i.split(n, 3)
                }, i.compare = function(t, e) {
                    return new Date(t.getFullYear(), t.getMonth()) - new Date(e.getFullYear(), e.getMonth())
                }, i.handleKeyDown = function(t) {
                    var e = i.activeDate.getMonth();
                    if ("left" === t)
                        e -= 1;
                    else if ("up" === t)
                        e -= 3;
                    else if ("right" === t)
                        e += 1;
                    else if ("down" === t)
                        e += 3;
                    else if ("pageup" === t || "pagedown" === t) {
                        var n = i.activeDate.getFullYear() + ("pageup" === t ? -1 : 1);
                        i.activeDate.setFullYear(n)
                    } else
                        "home" === t ? e = 0 : "end" === t && (e = 11);
                    i.activeDate.setMonth(e)
                }, i.refreshView()
            }}
    }]).directive("yearpicker", ["dateFilter", function() {
        return{restrict: "EA", replace: !0, templateUrl: "template/datepicker/year.html", require: "^datepicker", link: function(t, e, n, r) {
                function i(t) {
                    return parseInt((t - 1) / o, 10) * o + 1
                }
                var o = r.yearRange;
                r.step = {years: o}, r.element = e, r._refreshView = function() {
                    for (var e = new Array(o), n = 0, a = i(r.activeDate.getFullYear()); o > n; n++)
                        e[n] = angular.extend(r.createDateObject(new Date(a + n, 0, 1), r.formatYear), {uid: t.uniqueId + "-" + n});
                    t.title = [e[0].label, e[o - 1].label].join(" - "), t.rows = r.split(e, 5)
                }, r.compare = function(t, e) {
                    return t.getFullYear() - e.getFullYear()
                }, r.handleKeyDown = function(t) {
                    var e = r.activeDate.getFullYear();
                    "left" === t ? e -= 1 : "up" === t ? e -= 5 : "right" === t ? e += 1 : "down" === t ? e += 5 : "pageup" === t || "pagedown" === t ? e += ("pageup" === t ? -1 : 1) * r.step.years : "home" === t ? e = i(r.activeDate.getFullYear()) : "end" === t && (e = i(r.activeDate.getFullYear()) + o - 1), r.activeDate.setFullYear(e)
                }, r.refreshView()
            }}
    }]).constant("datepickerPopupConfig", {datepickerPopup: "yyyy-MM-dd", currentText: "Today", clearText: "Clear", closeText: "Done", closeOnDateSelection: !0, appendToBody: !1, showButtonBar: !0}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", function(t, e, n, r, i, o, a) {
        return{restrict: "EA", require: "ngModel", scope: {isOpen: "=?", currentText: "@", clearText: "@", closeText: "@", dateDisabled: "&"}, link: function(s, u, l, c) {
                function f(t) {
                    return t.replace(/([A-Z])/g, function(t) {
                        return"-" + t.toLowerCase()
                    })
                }
                function d(t) {
                    if (t) {
                        if (angular.isDate(t) && !isNaN(t))
                            return c.$setValidity("date", !0), t;
                        if (angular.isString(t)) {
                            var e = o.parse(t, p) || new Date(t);
                            return isNaN(e) ? void c.$setValidity("date", !1) : (c.$setValidity("date", !0), e)
                        }
                        return void c.$setValidity("date", !1)
                    }
                    return c.$setValidity("date", !0), null
                }
                var p, h = angular.isDefined(l.closeOnDateSelection) ? s.$parent.$eval(l.closeOnDateSelection) : a.closeOnDateSelection, m = angular.isDefined(l.datepickerAppendToBody) ? s.$parent.$eval(l.datepickerAppendToBody) : a.appendToBody;
                s.showButtonBar = angular.isDefined(l.showButtonBar) ? s.$parent.$eval(l.showButtonBar) : a.showButtonBar, s.getText = function(t) {
                    return s[t + "Text"] || a[t + "Text"]
                }, l.$observe("datepickerPopup", function(t) {
                    p = t || a.datepickerPopup, c.$render()
                });
                var g = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
                g.attr({"ng-model": "date", "ng-change": "dateSelection()"});
                var v = angular.element(g.children()[0]);
                l.datepickerOptions && angular.forEach(s.$parent.$eval(l.datepickerOptions), function(t, e) {
                    v.attr(f(e), t)
                }), s.watchData = {}, angular.forEach(["minDate", "maxDate", "datepickerMode"], function(t) {
                    if (l[t]) {
                        var n = e(l[t]);
                        if (s.$parent.$watch(n, function(e) {
                            s.watchData[t] = e
                        }), v.attr(f(t), "watchData." + t), "datepickerMode" === t) {
                            var r = n.assign;
                            s.$watch("watchData." + t, function(t, e) {
                                t !== e && r(s.$parent, t)
                            })
                        }
                    }
                }), l.dateDisabled && v.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), c.$parsers.unshift(d), s.dateSelection = function(t) {
                    angular.isDefined(t) && (s.date = t), c.$setViewValue(s.date), c.$render(), h && (s.isOpen = !1, u[0].focus())
                }, u.bind("input change keyup", function() {
                    s.$apply(function() {
                        s.date = c.$modelValue
                    })
                }), c.$render = function() {
                    var t = c.$viewValue ? i(c.$viewValue, p) : "";
                    u.val(t), s.date = d(c.$modelValue)
                };
                var $ = function(t) {
                    s.isOpen && t.target !== u[0] && s.$apply(function() {
                        s.isOpen = !1
                    })
                }, y = function(t) {
                    s.keydown(t)
                };
                u.bind("keydown", y), s.keydown = function(t) {
                    27 === t.which ? (t.preventDefault(), t.stopPropagation(), s.close()) : 40 !== t.which || s.isOpen || (s.isOpen = !0)
                }, s.$watch("isOpen", function(t) {
                    t ? (s.$broadcast("datepicker.focus"), s.position = m ? r.offset(u) : r.position(u), s.position.top = s.position.top + u.prop("offsetHeight"), n.bind("click", $)) : n.unbind("click", $)
                }), s.select = function(t) {
                    if ("today" === t) {
                        var e = new Date;
                        angular.isDate(c.$modelValue) ? (t = new Date(c.$modelValue), t.setFullYear(e.getFullYear(), e.getMonth(), e.getDate())) : t = new Date(e.setHours(0, 0, 0, 0))
                    }
                    s.dateSelection(t)
                }, s.close = function() {
                    s.isOpen = !1, u[0].focus()
                };
                var b = t(g)(s);
                g.remove(), m ? n.find("body").append(b) : u.after(b), s.$on("$destroy", function() {
                    b.remove(), u.unbind("keydown", y), n.unbind("click", $)
                })
            }}
    }]).directive("datepickerPopupWrap", function() {
    return{restrict: "EA", replace: !0, transclude: !0, templateUrl: "template/datepicker/popup.html", link: function(t, e) {
            e.bind("click", function(t) {
                t.preventDefault(), t.stopPropagation()
            })
        }}
}), angular.module("ui.bootstrap.dropdown", []).constant("dropdownConfig", {openClass: "open"}).service("dropdownService", ["$document", function(t) {
        var e = null;
        this.open = function(i) {
            e || (t.bind("click", n), t.bind("keydown", r)), e && e !== i && (e.isOpen = !1), e = i
        }, this.close = function(i) {
            e === i && (e = null, t.unbind("click", n), t.unbind("keydown", r))
        };
        var n = function(t) {
            if (e) {
                var n = e.getToggleElement();
                t && n && n[0].contains(t.target) || e.$apply(function() {
                    e.isOpen = !1
                })
            }
        }, r = function(t) {
            27 === t.which && (e.focusToggleElement(), n())
        }
    }]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", function(t, e, n, r, i, o) {
        var a, s = this, u = t.$new(), l = r.openClass, c = angular.noop, f = e.onToggle ? n(e.onToggle) : angular.noop;
        this.init = function(r) {
            s.$element = r, e.isOpen && (a = n(e.isOpen), c = a.assign, t.$watch(a, function(t) {
                u.isOpen = !!t
            }))
        }, this.toggle = function(t) {
            return u.isOpen = arguments.length ? !!t : !u.isOpen
        }, this.isOpen = function() {
            return u.isOpen
        }, u.getToggleElement = function() {
            return s.toggleElement
        }, u.focusToggleElement = function() {
            s.toggleElement && s.toggleElement[0].focus()
        }, u.$watch("isOpen", function(e, n) {
            o[e ? "addClass" : "removeClass"](s.$element, l), e ? (u.focusToggleElement(), i.open(u)) : i.close(u), c(t, e), angular.isDefined(e) && e !== n && f(t, {open: !!e})
        }), t.$on("$locationChangeSuccess", function() {
            u.isOpen = !1
        }), t.$on("$destroy", function() {
            u.$destroy()
        })
    }]).directive("dropdown", function() {
    return{controller: "DropdownController", link: function(t, e, n, r) {
            r.init(e)
        }}
}).directive("dropdownToggle", function() {
    return{require: "?^dropdown", link: function(t, e, n, r) {
            if (r) {
                r.toggleElement = e;
                var i = function(i) {
                    i.preventDefault(), e.hasClass("disabled") || n.disabled || t.$apply(function() {
                        r.toggle()
                    })
                };
                e.bind("click", i), e.attr({"aria-haspopup": !0, "aria-expanded": !1}), t.$watch(r.isOpen, function(t) {
                    e.attr("aria-expanded", !!t)
                }), t.$on("$destroy", function() {
                    e.unbind("click", i)
                })
            }
        }}
}), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function() {
    return{createNew: function() {
            var t = [];
            return{add: function(e, n) {
                    t.push({key: e, value: n})
                }, get: function(e) {
                    for (var n = 0; n < t.length; n++)
                        if (e == t[n].key)
                            return t[n]
                }, keys: function() {
                    for (var e = [], n = 0; n < t.length; n++)
                        e.push(t[n].key);
                    return e
                }, top: function() {
                    return t[t.length - 1]
                }, remove: function(e) {
                    for (var n = -1, r = 0; r < t.length; r++)
                        if (e == t[r].key) {
                            n = r;
                            break
                        }
                    return t.splice(n, 1)[0]
                }, removeTop: function() {
                    return t.splice(t.length - 1, 1)[0]
                }, length: function() {
                    return t.length
                }}
        }}
}).directive("modalBackdrop", ["$timeout", function(t) {
        return{restrict: "EA", replace: !0, templateUrl: "template/modal/backdrop.html", link: function(e, n, r) {
                e.backdropClass = r.backdropClass || "", e.animate = !1, t(function() {
                    e.animate = !0
                })
            }}
    }]).directive("modalWindow", ["$modalStack", "$timeout", function(t, e) {
        return{restrict: "EA", scope: {index: "@", animate: "="}, replace: !0, transclude: !0, templateUrl: function(t, e) {
                return e.templateUrl || "template/modal/window.html"
            }, link: function(n, r, i) {
                r.addClass(i.windowClass || ""), n.size = i.size, e(function() {
                    n.animate = !0, r[0].querySelectorAll("[autofocus]").length || r[0].focus()
                }), n.close = function(e) {
                    var n = t.getTop();
                    n && n.value.backdrop && "static" != n.value.backdrop && e.target === e.currentTarget && (e.preventDefault(), e.stopPropagation(), t.dismiss(n.key, "backdrop click"))
                }
            }}
    }]).directive("modalTransclude", function() {
    return{link: function(t, e, n, r, i) {
            i(t.$parent, function(t) {
                e.empty(), e.append(t)
            })
        }}
}).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function(t, e, n, r, i, o) {
        function a() {
            for (var t = -1, e = p.keys(), n = 0; n < e.length; n++)
                p.get(e[n]).value.backdrop && (t = n);
            return t
        }
        function s(t) {
            var e = n.find("body").eq(0), r = p.get(t).value;
            p.remove(t), l(r.modalDomEl, r.modalScope, 300, function() {
                r.modalScope.$destroy(), e.toggleClass(d, p.length() > 0), u()
            })
        }
        function u() {
            if (c && -1 == a()) {
                var t = f;
                l(c, f, 150, function() {
                    t.$destroy(), t = null
                }), c = void 0, f = void 0
            }
        }
        function l(n, r, i, o) {
            function a() {
                a.done || (a.done = !0, n.remove(), o && o())
            }
            r.animate = !1;
            var s = t.transitionEndEventName;
            if (s) {
                var u = e(a, i);
                n.bind(s, function() {
                    e.cancel(u), a(), r.$apply()
                })
            } else
                e(a)
        }
        var c, f, d = "modal-open", p = o.createNew(), h = {};
        return i.$watch(a, function(t) {
            f && (f.index = t)
        }), n.bind("keydown", function(t) {
            var e;
            27 === t.which && (e = p.top(), e && e.value.keyboard && (t.preventDefault(), i.$apply(function() {
                h.dismiss(e.key, "escape key press")
            })))
        }), h.open = function(t, e) {
            p.add(t, {deferred: e.deferred, modalScope: e.scope, backdrop: e.backdrop, keyboard: e.keyboard});
            var o = n.find("body").eq(0), s = a();
            if (s >= 0 && !c) {
                f = i.$new(!0), f.index = s;
                var u = angular.element("<div modal-backdrop></div>");
                u.attr("backdrop-class", e.backdropClass), c = r(u)(f), o.append(c)
            }
            var l = angular.element("<div modal-window></div>");
            l.attr({"template-url": e.windowTemplateUrl, "window-class": e.windowClass, size: e.size, index: p.length() - 1, animate: "animate"}).html(e.content);
            var h = r(l)(e.scope);
            p.top().value.modalDomEl = h, o.append(h), o.addClass(d)
        }, h.close = function(t, e) {
            var n = p.get(t);
            n && (n.value.deferred.resolve(e), s(t))
        }, h.dismiss = function(t, e) {
            var n = p.get(t);
            n && (n.value.deferred.reject(e), s(t))
        }, h.dismissAll = function(t) {
            for (var e = this.getTop(); e; )
                this.dismiss(e.key, t), e = this.getTop()
        }, h.getTop = function() {
            return p.top()
        }, h
    }]).provider("$modal", function() {
    var t = {options: {backdrop: !0, keyboard: !0}, $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function(e, n, r, i, o, a, s) {
                function u(t) {
                    return t.template ? r.when(t.template) : i.get(angular.isFunction(t.templateUrl) ? t.templateUrl() : t.templateUrl, {cache: o}).then(function(t) {
                        return t.data
                    })
                }
                function l(t) {
                    var n = [];
                    return angular.forEach(t, function(t) {
                        (angular.isFunction(t) || angular.isArray(t)) && n.push(r.when(e.invoke(t)))
                    }), n
                }
                var c = {};
                return c.open = function(e) {
                    var i = r.defer(), o = r.defer(), c = {result: i.promise, opened: o.promise, close: function(t) {
                            s.close(c, t)
                        }, dismiss: function(t) {
                            s.dismiss(c, t)
                        }};
                    if (e = angular.extend({}, t.options, e), e.resolve = e.resolve || {}, !e.template && !e.templateUrl)
                        throw new Error("One of template or templateUrl options is required.");
                    var f = r.all([u(e)].concat(l(e.resolve)));
                    return f.then(function(t) {
                        var r = (e.scope || n).$new();
                        r.$close = c.close, r.$dismiss = c.dismiss;
                        var o, u = {}, l = 1;
                        e.controller && (u.$scope = r, u.$modalInstance = c, angular.forEach(e.resolve, function(e, n) {
                            u[n] = t[l++]
                        }), o = a(e.controller, u), e.controllerAs && (r[e.controllerAs] = o)), s.open(c, {scope: r, deferred: i, content: t[0], backdrop: e.backdrop, keyboard: e.keyboard, backdropClass: e.backdropClass, windowClass: e.windowClass, windowTemplateUrl: e.windowTemplateUrl, size: e.size})
                    }, function(t) {
                        i.reject(t)
                    }), f.then(function() {
                        o.resolve(!0)
                    }, function() {
                        o.reject(!1)
                    }), c
                }, c
            }]};
    return t
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function(t, e, n) {
        var r = this, i = {$setViewValue: angular.noop}, o = e.numPages ? n(e.numPages).assign : angular.noop;
        this.init = function(o, a) {
            i = o, this.config = a, i.$render = function() {
                r.render()
            }, e.itemsPerPage ? t.$parent.$watch(n(e.itemsPerPage), function(e) {
                r.itemsPerPage = parseInt(e, 10), t.totalPages = r.calculateTotalPages()
            }) : this.itemsPerPage = a.itemsPerPage
        }, this.calculateTotalPages = function() {
            var e = this.itemsPerPage < 1 ? 1 : Math.ceil(t.totalItems / this.itemsPerPage);
            return Math.max(e || 0, 1)
        }, this.render = function() {
            t.page = parseInt(i.$viewValue, 10) || 1
        }, t.selectPage = function(e) {
            t.page !== e && e > 0 && e <= t.totalPages && (i.$setViewValue(e), i.$render())
        }, t.getText = function(e) {
            return t[e + "Text"] || r.config[e + "Text"]
        }, t.noPrevious = function() {
            return 1 === t.page
        }, t.noNext = function() {
            return t.page === t.totalPages
        }, t.$watch("totalItems", function() {
            t.totalPages = r.calculateTotalPages()
        }), t.$watch("totalPages", function(e) {
            o(t.$parent, e), t.page > e ? t.selectPage(e) : i.$render()
        })
    }]).constant("paginationConfig", {itemsPerPage: 10, boundaryLinks: !1, directionLinks: !0, firstText: "First", previousText: "Previous", nextText: "Next", lastText: "Last", rotate: !0}).directive("pagination", ["$parse", "paginationConfig", function(t, e) {
        return{restrict: "EA", scope: {totalItems: "=", firstText: "@", previousText: "@", nextText: "@", lastText: "@"}, require: ["pagination", "?ngModel"], controller: "PaginationController", templateUrl: "template/pagination/pagination.html", replace: !0, link: function(n, r, i, o) {
                function a(t, e, n) {
                    return{number: t, text: e, active: n}
                }
                function s(t, e) {
                    var n = [], r = 1, i = e, o = angular.isDefined(c) && e > c;
                    o && (f ? (r = Math.max(t - Math.floor(c / 2), 1), i = r + c - 1, i > e && (i = e, r = i - c + 1)) : (r = (Math.ceil(t / c) - 1) * c + 1, i = Math.min(r + c - 1, e)));
                    for (var s = r; i >= s; s++) {
                        var u = a(s, s, s === t);
                        n.push(u)
                    }
                    if (o && !f) {
                        if (r > 1) {
                            var l = a(r - 1, "...", !1);
                            n.unshift(l)
                        }
                        if (e > i) {
                            var d = a(i + 1, "...", !1);
                            n.push(d)
                        }
                    }
                    return n
                }
                var u = o[0], l = o[1];
                if (l) {
                    var c = angular.isDefined(i.maxSize) ? n.$parent.$eval(i.maxSize) : e.maxSize, f = angular.isDefined(i.rotate) ? n.$parent.$eval(i.rotate) : e.rotate;
                    n.boundaryLinks = angular.isDefined(i.boundaryLinks) ? n.$parent.$eval(i.boundaryLinks) : e.boundaryLinks, n.directionLinks = angular.isDefined(i.directionLinks) ? n.$parent.$eval(i.directionLinks) : e.directionLinks, u.init(l, e), i.maxSize && n.$parent.$watch(t(i.maxSize), function(t) {
                        c = parseInt(t, 10), u.render()
                    });
                    var d = u.render;
                    u.render = function() {
                        d(), n.page > 0 && n.page <= n.totalPages && (n.pages = s(n.page, n.totalPages))
                    }
                }
            }}
    }]).constant("pagerConfig", {itemsPerPage: 10, previousText: "« Previous", nextText: "Next »", align: !0}).directive("pager", ["pagerConfig", function(t) {
        return{restrict: "EA", scope: {totalItems: "=", previousText: "@", nextText: "@"}, require: ["pager", "?ngModel"], controller: "PaginationController", templateUrl: "template/pagination/pager.html", replace: !0, link: function(e, n, r, i) {
                var o = i[0], a = i[1];
                a && (e.align = angular.isDefined(r.align) ? e.$parent.$eval(r.align) : t.align, o.init(a, t))
            }}
    }]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function() {
    function t(t) {
        var e = /[A-Z]/g, n = "-";
        return t.replace(e, function(t, e) {
            return(e ? n : "") + t.toLowerCase()
        })
    }
    var e = {placement: "top", animation: !0, popupDelay: 0}, n = {mouseenter: "mouseleave", click: "click", focus: "blur"}, r = {};
    this.options = function(t) {
        angular.extend(r, t)
    }, this.setTriggers = function(t) {
        angular.extend(n, t)
    }, this.$get = ["$window", "$compile", "$timeout", "$document", "$position", "$interpolate", function(i, o, a, s, u, l) {
            return function(i, c, f) {
                function d(t) {
                    var e = t || p.trigger || f, r = n[e] || e;
                    return{show: e, hide: r}
                }
                var p = angular.extend({}, e, r), h = t(i), m = l.startSymbol(), g = l.endSymbol(), v = "<div " + h + '-popup title="' + m + "title" + g + '" content="' + m + "content" + g + '" placement="' + m + "placement" + g + '" animation="animation" is-open="isOpen"></div>';
                return{restrict: "EA", compile: function() {
                        var t = o(v);
                        return function(e, n, r) {
                            function o() {
                                _.isOpen ? f() : l()
                            }
                            function l() {
                                (!E || e.$eval(r[c + "Enable"])) && ($(), _.popupDelay ? T || (T = a(h, _.popupDelay, !1), T.then(function(t) {
                                    t()
                                })) : h()())
                            }
                            function f() {
                                e.$apply(function() {
                                    m()
                                })
                            }
                            function h() {
                                return T = null, C && (a.cancel(C), C = null), _.content ? (g(), x.css({top: 0, left: 0, display: "block"}), _.$digest(), M(), _.isOpen = !0, _.$digest(), M) : angular.noop
                            }
                            function m() {
                                _.isOpen = !1, a.cancel(T), T = null, _.animation ? C || (C = a(v, 500)) : v()
                            }
                            function g() {
                                x && v(), k = _.$new(), x = t(k, function(t) {
                                    S ? s.find("body").append(t) : n.after(t)
                                })
                            }
                            function v() {
                                C = null, x && (x.remove(), x = null), k && (k.$destroy(), k = null)
                            }
                            function $() {
                                y(), b()
                            }
                            function y() {
                                var t = r[c + "Placement"];
                                _.placement = angular.isDefined(t) ? t : p.placement
                            }
                            function b() {
                                var t = r[c + "PopupDelay"], e = parseInt(t, 10);
                                _.popupDelay = isNaN(e) ? p.popupDelay : e
                            }
                            function w() {
                                var t = r[c + "Trigger"];
                                A(), D = d(t), D.show === D.hide ? n.bind(D.show, o) : (n.bind(D.show, l), n.bind(D.hide, f))
                            }
                            var x, k, C, T, S = angular.isDefined(p.appendToBody) ? p.appendToBody : !1, D = d(void 0), E = angular.isDefined(r[c + "Enable"]), _ = e.$new(!0), M = function() {
                                var t = u.positionElements(n, x, _.placement, S);
                                t.top += "px", t.left += "px", x.css(t)
                            };
                            _.isOpen = !1, r.$observe(i, function(t) {
                                _.content = t, !t && _.isOpen && m()
                            }), r.$observe(c + "Title", function(t) {
                                _.title = t
                            });
                            var A = function() {
                                n.unbind(D.show, l), n.unbind(D.hide, f)
                            };
                            w();
                            var O = e.$eval(r[c + "Animation"]);
                            _.animation = angular.isDefined(O) ? !!O : p.animation;
                            var N = e.$eval(r[c + "AppendToBody"]);
                            S = angular.isDefined(N) ? N : S, S && e.$on("$locationChangeSuccess", function() {
                                _.isOpen && m()
                            }), e.$on("$destroy", function() {
                                a.cancel(C), a.cancel(T), A(), v(), _ = null
                            })
                        }
                    }}
            }
        }]
}).directive("tooltipPopup", function() {
    return{restrict: "EA", replace: !0, scope: {content: "@", placement: "@", animation: "&", isOpen: "&"}, templateUrl: "template/tooltip/tooltip-popup.html"}
}).directive("tooltip", ["$tooltip", function(t) {
        return t("tooltip", "tooltip", "mouseenter")
    }]).directive("tooltipHtmlUnsafePopup", function() {
    return{restrict: "EA", replace: !0, scope: {content: "@", placement: "@", animation: "&", isOpen: "&"}, templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"}
}).directive("tooltipHtmlUnsafe", ["$tooltip", function(t) {
        return t("tooltipHtmlUnsafe", "tooltip", "mouseenter")
    }]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function() {
    return{restrict: "EA", replace: !0, scope: {title: "@", content: "@", placement: "@", animation: "&", isOpen: "&"}, templateUrl: "template/popover/popover.html"}
}).directive("popover", ["$tooltip", function(t) {
        return t("popover", "popover", "click")
    }]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {animate: !0, max: 100}).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function(t, e, n) {
        var r = this, i = angular.isDefined(e.animate) ? t.$parent.$eval(e.animate) : n.animate;
        this.bars = [], t.max = angular.isDefined(e.max) ? t.$parent.$eval(e.max) : n.max, this.addBar = function(e, n) {
            i || n.css({transition: "none"}), this.bars.push(e), e.$watch("value", function(n) {
                e.percent = +(100 * n / t.max).toFixed(2)
            }), e.$on("$destroy", function() {
                n = null, r.removeBar(e)
            })
        }, this.removeBar = function(t) {
            this.bars.splice(this.bars.indexOf(t), 1)
        }
    }]).directive("progress", function() {
    return{restrict: "EA", replace: !0, transclude: !0, controller: "ProgressController", require: "progress", scope: {}, templateUrl: "template/progressbar/progress.html"}
}).directive("bar", function() {
    return{restrict: "EA", replace: !0, transclude: !0, require: "^progress", scope: {value: "=", type: "@"}, templateUrl: "template/progressbar/bar.html", link: function(t, e, n, r) {
            r.addBar(t, e)
        }}
}).directive("progressbar", function() {
    return{restrict: "EA", replace: !0, transclude: !0, controller: "ProgressController", scope: {value: "=", type: "@"}, templateUrl: "template/progressbar/progressbar.html", link: function(t, e, n, r) {
            r.addBar(t, angular.element(e.children()[0]))
        }}
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {max: 5, stateOn: null, stateOff: null}).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function(t, e, n) {
        var r = {$setViewValue: angular.noop};
        this.init = function(i) {
            r = i, r.$render = this.render, this.stateOn = angular.isDefined(e.stateOn) ? t.$parent.$eval(e.stateOn) : n.stateOn, this.stateOff = angular.isDefined(e.stateOff) ? t.$parent.$eval(e.stateOff) : n.stateOff;
            var o = angular.isDefined(e.ratingStates) ? t.$parent.$eval(e.ratingStates) : new Array(angular.isDefined(e.max) ? t.$parent.$eval(e.max) : n.max);
            t.range = this.buildTemplateObjects(o)
        }, this.buildTemplateObjects = function(t) {
            for (var e = 0, n = t.length; n > e; e++)
                t[e] = angular.extend({index: e}, {stateOn: this.stateOn, stateOff: this.stateOff}, t[e]);
            return t
        }, t.rate = function(e) {
            !t.readonly && e >= 0 && e <= t.range.length && (r.$setViewValue(e), r.$render())
        }, t.enter = function(e) {
            t.readonly || (t.value = e), t.onHover({value: e})
        }, t.reset = function() {
            t.value = r.$viewValue, t.onLeave()
        }, t.onKeydown = function(e) {
            /(37|38|39|40)/.test(e.which) && (e.preventDefault(), e.stopPropagation(), t.rate(t.value + (38 === e.which || 39 === e.which ? 1 : -1)))
        }, this.render = function() {
            t.value = r.$viewValue
        }
    }]).directive("rating", function() {
    return{restrict: "EA", require: ["rating", "ngModel"], scope: {readonly: "=?", onHover: "&", onLeave: "&"}, controller: "RatingController", templateUrl: "template/rating/rating.html", replace: !0, link: function(t, e, n, r) {
            var i = r[0], o = r[1];
            o && i.init(o)
        }}
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function(t) {
        var e = this, n = e.tabs = t.tabs = [];
        e.select = function(t) {
            angular.forEach(n, function(e) {
                e.active && e !== t && (e.active = !1, e.onDeselect())
            }), t.active = !0, t.onSelect()
        }, e.addTab = function(t) {
            n.push(t), 1 === n.length ? t.active = !0 : t.active && e.select(t)
        }, e.removeTab = function(t) {
            var i = n.indexOf(t);
            if (t.active && n.length > 1 && !r) {
                var o = i == n.length - 1 ? i - 1 : i + 1;
                e.select(n[o])
            }
            n.splice(i, 1)
        };
        var r;
        t.$on("$destroy", function() {
            r = !0
        })
    }]).directive("tabset", function() {
    return{restrict: "EA", transclude: !0, replace: !0, scope: {type: "@"}, controller: "TabsetController", templateUrl: "template/tabs/tabset.html", link: function(t, e, n) {
            t.vertical = angular.isDefined(n.vertical) ? t.$parent.$eval(n.vertical) : !1, t.justified = angular.isDefined(n.justified) ? t.$parent.$eval(n.justified) : !1
        }}
}).directive("tab", ["$parse", function(t) {
        return{require: "^tabset", restrict: "EA", replace: !0, templateUrl: "template/tabs/tab.html", transclude: !0, scope: {active: "=?", heading: "@", onSelect: "&select", onDeselect: "&deselect"}, controller: function() {
            }, compile: function(e, n, r) {
                return function(e, n, i, o) {
                    e.$watch("active", function(t) {
                        t && o.select(e)
                    }), e.disabled = !1, i.disabled && e.$parent.$watch(t(i.disabled), function(t) {
                        e.disabled = !!t
                    }), e.select = function() {
                        e.disabled || (e.active = !0)
                    }, o.addTab(e), e.$on("$destroy", function() {
                        o.removeTab(e)
                    }), e.$transcludeFn = r
                }
            }}
    }]).directive("tabHeadingTransclude", [function() {
        return{restrict: "A", require: "^tab", link: function(t, e) {
                t.$watch("headingElement", function(t) {
                    t && (e.html(""), e.append(t))
                })
            }}
    }]).directive("tabContentTransclude", function() {
    function t(t) {
        return t.tagName && (t.hasAttribute("tab-heading") || t.hasAttribute("data-tab-heading") || "tab-heading" === t.tagName.toLowerCase() || "data-tab-heading" === t.tagName.toLowerCase())
    }
    return{restrict: "A", require: "^tabset", link: function(e, n, r) {
            var i = e.$eval(r.tabContentTransclude);
            i.$transcludeFn(i.$parent, function(e) {
                angular.forEach(e, function(e) {
                    t(e) ? i.headingElement = e : n.append(e)
                })
            })
        }}
}), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {hourStep: 1, minuteStep: 1, showMeridian: !0, meridians: null, readonlyInput: !1, mousewheel: !0}).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function(t, e, n, r, i, o) {
        function a() {
            var e = parseInt(t.hours, 10), n = t.showMeridian ? e > 0 && 13 > e : e >= 0 && 24 > e;
            return n ? (t.showMeridian && (12 === e && (e = 0), t.meridian === m[1] && (e += 12)), e) : void 0
        }
        function s() {
            var e = parseInt(t.minutes, 10);
            return e >= 0 && 60 > e ? e : void 0
        }
        function u(t) {
            return angular.isDefined(t) && t.toString().length < 2 ? "0" + t : t
        }
        function l(t) {
            c(), h.$setViewValue(new Date(p)), f(t)
        }
        function c() {
            h.$setValidity("time", !0), t.invalidHours = !1, t.invalidMinutes = !1
        }
        function f(e) {
            var n = p.getHours(), r = p.getMinutes();
            t.showMeridian && (n = 0 === n || 12 === n ? 12 : n % 12), t.hours = "h" === e ? n : u(n), t.minutes = "m" === e ? r : u(r), t.meridian = p.getHours() < 12 ? m[0] : m[1]
        }
        function d(t) {
            var e = new Date(p.getTime() + 6e4 * t);
            p.setHours(e.getHours(), e.getMinutes()), l()
        }
        var p = new Date, h = {$setViewValue: angular.noop}, m = angular.isDefined(e.meridians) ? t.$parent.$eval(e.meridians) : o.meridians || i.DATETIME_FORMATS.AMPMS;
        this.init = function(n, r) {
            h = n, h.$render = this.render;
            var i = r.eq(0), a = r.eq(1), s = angular.isDefined(e.mousewheel) ? t.$parent.$eval(e.mousewheel) : o.mousewheel;
            s && this.setupMousewheelEvents(i, a), t.readonlyInput = angular.isDefined(e.readonlyInput) ? t.$parent.$eval(e.readonlyInput) : o.readonlyInput, this.setupInputEvents(i, a)
        };
        var g = o.hourStep;
        e.hourStep && t.$parent.$watch(n(e.hourStep), function(t) {
            g = parseInt(t, 10)
        });
        var v = o.minuteStep;
        e.minuteStep && t.$parent.$watch(n(e.minuteStep), function(t) {
            v = parseInt(t, 10)
        }), t.showMeridian = o.showMeridian, e.showMeridian && t.$parent.$watch(n(e.showMeridian), function(e) {
            if (t.showMeridian = !!e, h.$error.time) {
                var n = a(), r = s();
                angular.isDefined(n) && angular.isDefined(r) && (p.setHours(n), l())
            } else
                f()
        }), this.setupMousewheelEvents = function(e, n) {
            var r = function(t) {
                t.originalEvent && (t = t.originalEvent);
                var e = t.wheelDelta ? t.wheelDelta : -t.deltaY;
                return t.detail || e > 0
            };
            e.bind("mousewheel wheel", function(e) {
                t.$apply(r(e) ? t.incrementHours() : t.decrementHours()), e.preventDefault()
            }), n.bind("mousewheel wheel", function(e) {
                t.$apply(r(e) ? t.incrementMinutes() : t.decrementMinutes()), e.preventDefault()
            })
        }, this.setupInputEvents = function(e, n) {
            if (t.readonlyInput)
                return t.updateHours = angular.noop, void(t.updateMinutes = angular.noop);
            var r = function(e, n) {
                h.$setViewValue(null), h.$setValidity("time", !1), angular.isDefined(e) && (t.invalidHours = e), angular.isDefined(n) && (t.invalidMinutes = n)
            };
            t.updateHours = function() {
                var t = a();
                angular.isDefined(t) ? (p.setHours(t), l("h")) : r(!0)
            }, e.bind("blur", function() {
                !t.invalidHours && t.hours < 10 && t.$apply(function() {
                    t.hours = u(t.hours)
                })
            }), t.updateMinutes = function() {
                var t = s();
                angular.isDefined(t) ? (p.setMinutes(t), l("m")) : r(void 0, !0)
            }, n.bind("blur", function() {
                !t.invalidMinutes && t.minutes < 10 && t.$apply(function() {
                    t.minutes = u(t.minutes)
                })
            })
        }, this.render = function() {
            var t = h.$modelValue ? new Date(h.$modelValue) : null;
            isNaN(t) ? (h.$setValidity("time", !1), r.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (t && (p = t), c(), f())
        }, t.incrementHours = function() {
            d(60 * g)
        }, t.decrementHours = function() {
            d(60 * -g)
        }, t.incrementMinutes = function() {
            d(v)
        }, t.decrementMinutes = function() {
            d(-v)
        }, t.toggleMeridian = function() {
            d(720 * (p.getHours() < 12 ? 1 : -1))
        }
    }]).directive("timepicker", function() {
    return{restrict: "EA", require: ["timepicker", "?^ngModel"], controller: "TimepickerController", replace: !0, scope: {}, templateUrl: "template/timepicker/timepicker.html", link: function(t, e, n, r) {
            var i = r[0], o = r[1];
            o && i.init(o, e.find("input"))
        }}
}), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function(t) {
        var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
        return{parse: function(n) {
                var r = n.match(e);
                if (!r)
                    throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + n + '".');
                return{itemName: r[3], source: t(r[4]), viewMapper: t(r[2] || r[1]), modelMapper: t(r[1])}
            }}
    }]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function(t, e, n, r, i, o, a) {
        var s = [9, 13, 27, 38, 40];
        return{require: "ngModel", link: function(u, l, c, f) {
                var d, p = u.$eval(c.typeaheadMinLength) || 1, h = u.$eval(c.typeaheadWaitMs) || 0, m = u.$eval(c.typeaheadEditable) !== !1, g = e(c.typeaheadLoading).assign || angular.noop, v = e(c.typeaheadOnSelect), $ = c.typeaheadInputFormatter ? e(c.typeaheadInputFormatter) : void 0, y = c.typeaheadAppendToBody ? u.$eval(c.typeaheadAppendToBody) : !1, b = u.$eval(c.typeaheadFocusFirst) !== !1, w = e(c.ngModel).assign, x = a.parse(c.typeahead), k = u.$new();
                u.$on("$destroy", function() {
                    k.$destroy()
                });
                var C = "typeahead-" + k.$id + "-" + Math.floor(1e4 * Math.random());
                l.attr({"aria-autocomplete": "list", "aria-expanded": !1, "aria-owns": C});
                var T = angular.element("<div typeahead-popup></div>");
                T.attr({id: C, matches: "matches", active: "activeIdx", select: "select(activeIdx)", query: "query", position: "position"}), angular.isDefined(c.typeaheadTemplateUrl) && T.attr("template-url", c.typeaheadTemplateUrl);
                var S = function() {
                    k.matches = [], k.activeIdx = -1, l.attr("aria-expanded", !1)
                }, D = function(t) {
                    return C + "-option-" + t
                };
                k.$watch("activeIdx", function(t) {
                    0 > t ? l.removeAttr("aria-activedescendant") : l.attr("aria-activedescendant", D(t))
                });
                var E = function(t) {
                    var e = {$viewValue: t};
                    g(u, !0), n.when(x.source(u, e)).then(function(n) {
                        var r = t === f.$viewValue;
                        if (r && d)
                            if (n.length > 0) {
                                k.activeIdx = b ? 0 : -1, k.matches.length = 0;
                                for (var i = 0; i < n.length; i++)
                                    e[x.itemName] = n[i], k.matches.push({id: D(i), label: x.viewMapper(k, e), model: n[i]});
                                k.query = t, k.position = y ? o.offset(l) : o.position(l), k.position.top = k.position.top + l.prop("offsetHeight"), l.attr("aria-expanded", !0)
                            } else
                                S();
                        r && g(u, !1)
                    }, function() {
                        S(), g(u, !1)
                    })
                };
                S(), k.query = void 0;
                var _, M = function(t) {
                    _ = r(function() {
                        E(t)
                    }, h)
                }, A = function() {
                    _ && r.cancel(_)
                };
                f.$parsers.unshift(function(t) {
                    return d = !0, t && t.length >= p ? h > 0 ? (A(), M(t)) : E(t) : (g(u, !1), A(), S()), m ? t : t ? void f.$setValidity("editable", !1) : (f.$setValidity("editable", !0), t)
                }), f.$formatters.push(function(t) {
                    var e, n, r = {};
                    return $ ? (r.$model = t, $(u, r)) : (r[x.itemName] = t, e = x.viewMapper(u, r), r[x.itemName] = void 0, n = x.viewMapper(u, r), e !== n ? e : t)
                }), k.select = function(t) {
                    var e, n, i = {};
                    i[x.itemName] = n = k.matches[t].model, e = x.modelMapper(u, i), w(u, e), f.$setValidity("editable", !0), v(u, {$item: n, $model: e, $label: x.viewMapper(u, i)}), S(), r(function() {
                        l[0].focus()
                    }, 0, !1)
                }, l.bind("keydown", function(t) {
                    0 !== k.matches.length && -1 !== s.indexOf(t.which) && (-1 != k.activeIdx || 13 !== t.which && 9 !== t.which) && (t.preventDefault(), 40 === t.which ? (k.activeIdx = (k.activeIdx + 1) % k.matches.length, k.$digest()) : 38 === t.which ? (k.activeIdx = (k.activeIdx > 0 ? k.activeIdx : k.matches.length) - 1, k.$digest()) : 13 === t.which || 9 === t.which ? k.$apply(function() {
                        k.select(k.activeIdx)
                    }) : 27 === t.which && (t.stopPropagation(), S(), k.$digest()))
                }), l.bind("blur", function() {
                    d = !1
                });
                var O = function(t) {
                    l[0] !== t.target && (S(), k.$digest())
                };
                i.bind("click", O), u.$on("$destroy", function() {
                    i.unbind("click", O), y && N.remove()
                });
                var N = t(T)(k);
                y ? i.find("body").append(N) : l.after(N)
            }}
    }]).directive("typeaheadPopup", function() {
    return{restrict: "EA", scope: {matches: "=", query: "=", active: "=", position: "=", select: "&"}, replace: !0, templateUrl: "template/typeahead/typeahead-popup.html", link: function(t, e, n) {
            t.templateUrl = n.templateUrl, t.isOpen = function() {
                return t.matches.length > 0
            }, t.isActive = function(e) {
                return t.active == e
            }, t.selectActive = function(e) {
                t.active = e
            }, t.selectMatch = function(e) {
                t.select({activeIdx: e})
            }
        }}
}).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function(t, e, n, r) {
        return{restrict: "EA", scope: {index: "=", match: "=", query: "="}, link: function(i, o, a) {
                var s = r(a.templateUrl)(i.$parent) || "template/typeahead/typeahead-match.html";
                t.get(s, {cache: e}).success(function(t) {
                    o.replaceWith(n(t.trim())(i))
                })
            }}
    }]).filter("typeaheadHighlight", function() {
    function t(t) {
        return t.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }
    return function(e, n) {
        return n ? ("" + e).replace(new RegExp(t(n), "gi"), "<strong>$&</strong>") : e
    }
}), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function(t) {
        t.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')
    }]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function(t) {
        t.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
    }]), angular.module("template/alert/alert.html", []).run(["$templateCache", function(t) {
        t.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
    }]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function(t) {
        t.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
    }]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function(t) {
        t.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")
    }]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function(t) {
        t.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
    }]), angular.module("template/datepicker/day.html", []).run(["$templateCache", function(t) {
        t.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/datepicker/month.html", []).run(["$templateCache", function(t) {
        t.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function(t) {
        t.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')
    }]), angular.module("template/datepicker/year.html", []).run(["$templateCache", function(t) {
        t.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function(t) {
        t.put("template/modal/backdrop.html", '<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
    }]), angular.module("template/modal/window.html", []).run(["$templateCache", function(t) {
        t.put("template/modal/window.html", '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')
    }]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function(t) {
        t.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')
    }]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function(t) {
        t.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')
    }]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function(t) {
        t.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
    }]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function(t) {
        t.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
    }]), angular.module("template/popover/popover.html", []).run(["$templateCache", function(t) {
        t.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
    }]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function(t) {
        t.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')
    }]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function(t) {
        t.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
    }]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function(t) {
        t.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')
    }]), angular.module("template/rating/rating.html", []).run(["$templateCache", function(t) {
        t.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')
    }]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function(t) {
        t.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
    }]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function(t) {
        t.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
    }]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function(t) {
        t.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
    }]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function(t) {
        t.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
    }]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function(t) {
        t.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
    }]);