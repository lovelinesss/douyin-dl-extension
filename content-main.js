"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e3) {
      throw err = [e3], e3;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/preact/dist/preact.module.js
  function m(n2, l3) {
    for (var u4 in l3) n2[u4] = l3[u4];
    return n2;
  }
  function b(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function k(l3, u4, t3) {
    var i3, r3, o3, e3 = {};
    for (o3 in u4) "key" == o3 ? i3 = u4[o3] : "ref" == o3 ? r3 = u4[o3] : e3[o3] = u4[o3];
    if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (o3 in l3.defaultProps) void 0 === e3[o3] && (e3[o3] = l3.defaultProps[o3]);
    return x(l3, e3, i3, r3, null);
  }
  function x(n2, t3, i3, r3, o3) {
    var e3 = { type: n2, props: t3, key: i3, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u : o3, __i: -1, __u: 0 };
    return null == o3 && null != l.vnode && l.vnode(e3), e3;
  }
  function S(n2) {
    return n2.children;
  }
  function C(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function $(n2, l3) {
    if (null == l3) return n2.__ ? $(n2.__, n2.__i + 1) : null;
    for (var u4; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) return u4.__e;
    return "function" == typeof n2.type ? $(n2) : null;
  }
  function I(n2) {
    if (n2.__P && n2.__d) {
      var u4 = n2.__v, t3 = u4.__e, i3 = [], r3 = [], o3 = m({}, u4);
      o3.__v = u4.__v + 1, l.vnode && l.vnode(o3), q(n2.__P, o3, u4, n2.__n, n2.__P.namespaceURI, 32 & u4.__u ? [t3] : null, i3, null == t3 ? $(u4) : t3, !!(32 & u4.__u), r3), o3.__v = u4.__v, o3.__.__k[o3.__i] = o3, D(i3, o3, r3), u4.__e = u4.__ = null, o3.__e != t3 && P(o3);
    }
  }
  function P(n2) {
    if (null != (n2 = n2.__) && null != n2.__c) return n2.__e = n2.__c.base = null, n2.__k.some(function(l3) {
      if (null != l3 && null != l3.__e) return n2.__e = n2.__c.base = l3.__e;
    }), P(n2);
  }
  function A(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !H.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(H);
  }
  function H() {
    try {
      for (var n2, l3 = 1; i.length; ) i.length > l3 && i.sort(e), n2 = i.shift(), l3 = i.length, I(n2);
    } finally {
      i.length = H.__r = 0;
    }
  }
  function L(n2, l3, u4, t3, i3, r3, o3, e3, f4, c4, a3) {
    var s5, h3, p3, v3, y3, _2, g2 = t3 && t3.__k || w, m3 = l3.length;
    for (f4 = T(u4, l3, g2, f4, m3), s5 = 0; s5 < m3; s5++) null != (p3 = u4.__k[s5]) && (h3 = -1 != p3.__i && g2[p3.__i] || d, p3.__i = s5, _2 = q(n2, p3, h3, i3, r3, o3, e3, f4, c4, a3), v3 = p3.__e, p3.ref && h3.ref != p3.ref && (h3.ref && J(h3.ref, null, p3), a3.push(p3.ref, p3.__c || v3, p3)), null == y3 && null != v3 && (y3 = v3), 4 & p3.__u ? (f4 = j(p3, f4, n2), h3.__e && (h3.__e = null)) : "function" == typeof p3.type && void 0 !== _2 ? f4 = _2 : v3 && (f4 = v3.nextSibling), p3.__u &= -7);
    return u4.__e = y3, f4;
  }
  function T(n2, l3, u4, t3, i3) {
    var r3, o3, e3, f4, c4, a3 = u4.length, s5 = a3, h3 = 0;
    for (n2.__k = new Array(i3), r3 = 0; r3 < i3; r3++) null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3 ? ("string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? o3 = n2.__k[r3] = x(null, o3, null, null, null) : g(o3) ? o3 = n2.__k[r3] = x(S, { children: o3 }, null, null, null) : void 0 === o3.constructor && o3.__b > 0 ? o3 = n2.__k[r3] = x(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : n2.__k[r3] = o3, f4 = r3 + h3, o3.__ = n2, o3.__b = n2.__b + 1, e3 = null, -1 != (c4 = o3.__i = O(o3, u4, f4, s5)) && (s5--, (e3 = u4[c4]) && (e3.__u |= 2)), null == e3 || null == e3.__v ? (-1 == c4 && (i3 > a3 ? h3-- : i3 < a3 && h3++), "function" != typeof o3.type && (o3.__u |= 4)) : c4 != f4 && (c4 == f4 - 1 ? h3-- : c4 == f4 + 1 ? h3++ : (c4 > f4 ? h3-- : h3++, o3.__u |= 4))) : n2.__k[r3] = null;
    if (s5) for (r3 = 0; r3 < a3; r3++) null != (e3 = u4[r3]) && 0 == (2 & e3.__u) && (e3.__e == t3 && (t3 = $(e3)), K(e3, e3));
    return t3;
  }
  function j(n2, l3, u4) {
    var t3, i3;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i3 = 0; t3 && i3 < t3.length; i3++) t3[i3] && (t3[i3].__ = n2, l3 = j(t3[i3], l3, u4));
      return l3;
    }
    n2.__e != l3 && (l3 && n2.type && !l3.parentNode && (l3 = $(n2)), l3 = u4.insertBefore(n2.__e, l3 || null));
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 == l3.nodeType);
    return l3;
  }
  function O(n2, l3, u4, t3) {
    var i3, r3, o3, e3 = n2.key, f4 = n2.type, c4 = l3[u4], a3 = null != c4 && 0 == (2 & c4.__u);
    if (null === c4 && null == e3 || a3 && e3 == c4.key && f4 == c4.type) return u4;
    if (t3 > (a3 ? 1 : 0)) {
      for (i3 = u4 - 1, r3 = u4 + 1; i3 >= 0 || r3 < l3.length; ) if (null != (c4 = l3[o3 = i3 >= 0 ? i3-- : r3++]) && 0 == (2 & c4.__u) && e3 == c4.key && f4 == c4.type) return o3;
    }
    return -1;
  }
  function z(n2, l3, u4) {
    "-" == l3[0] ? n2.setProperty(l3, null == u4 ? "" : u4) : n2[l3] = null == u4 ? "" : "number" != typeof u4 || _.test(l3) ? u4 : u4 + "px";
  }
  function N(n2, l3, u4, t3, i3) {
    var r3, o3;
    n: if ("style" == l3) if ("string" == typeof u4) n2.style.cssText = u4;
    else {
      if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u4 && l3 in u4 || z(n2.style, l3, "");
      if (u4) for (l3 in u4) t3 && u4[l3] == t3[l3] || z(n2.style, l3, u4[l3]);
    }
    else if ("o" == l3[0] && "n" == l3[1]) r3 = l3 != (l3 = l3.replace(s, "$1")), o3 = l3.toLowerCase(), l3 = o3 in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? o3.slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u4, u4 ? t3 ? u4[a] = t3[a] : (u4[a] = h, n2.addEventListener(l3, r3 ? v : p, r3)) : n2.removeEventListener(l3, r3 ? v : p, r3);
    else {
      if ("http://www.w3.org/2000/svg" == i3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
        n2[l3] = null == u4 ? "" : u4;
        break n;
      } catch (n3) {
      }
      "function" == typeof u4 || (null == u4 || false === u4 && "-" != l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u4 ? "" : u4));
    }
  }
  function V(n2) {
    return function(u4) {
      if (this.l) {
        var t3 = this.l[u4.type + n2];
        if (null == u4[c]) u4[c] = h++;
        else if (u4[c] < t3[a]) return;
        return t3(l.event ? l.event(u4) : u4);
      }
    };
  }
  function q(n2, u4, t3, i3, r3, o3, e3, f4, c4, a3) {
    var s5, h3, p3, v3, y3, d3, _2, k3, x2, M, I2, P2, A3, H2, T3, j3, F = u4.type;
    if (void 0 !== u4.constructor) return null;
    128 & t3.__u && (c4 = !!(32 & t3.__u), o3 = [f4 = u4.__e = t3.__e]), (s5 = l.__b) && s5(u4);
    n: if ("function" == typeof F) {
      h3 = e3.length;
      try {
        if (x2 = u4.props, M = F.prototype && F.prototype.render, I2 = (s5 = F.contextType) && i3[s5.__c], P2 = s5 ? I2 ? I2.props.value : s5.__ : i3, t3.__c ? k3 = (p3 = u4.__c = t3.__c).__ = p3.__E : (M ? u4.__c = p3 = new F(x2, P2) : (u4.__c = p3 = new C(x2, P2), p3.constructor = F, p3.render = Q), I2 && I2.sub(p3), p3.state || (p3.state = {}), p3.__n = i3, v3 = p3.__d = true, p3.__h = [], p3._sb = []), M && null == p3.__s && (p3.__s = p3.state), M && null != F.getDerivedStateFromProps && (p3.__s == p3.state && (p3.__s = m({}, p3.__s)), m(p3.__s, F.getDerivedStateFromProps(x2, p3.__s))), y3 = p3.props, d3 = p3.state, p3.__v = u4, v3) M && null == F.getDerivedStateFromProps && null != p3.componentWillMount && p3.componentWillMount(), M && null != p3.componentDidMount && p3.__h.push(p3.componentDidMount);
        else {
          if (M && null == F.getDerivedStateFromProps && x2 !== y3 && null != p3.componentWillReceiveProps && p3.componentWillReceiveProps(x2, P2), u4.__v == t3.__v || !p3.__e && null != p3.shouldComponentUpdate && false === p3.shouldComponentUpdate(x2, p3.__s, P2)) {
            u4.__v != t3.__v && (p3.props = x2, p3.state = p3.__s, p3.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.some(function(n3) {
              n3 && (n3.__ = u4);
            }), w.push.apply(p3.__h, p3._sb), p3._sb = [], p3.__h.length && e3.push(p3), f4 = $(t3);
            break n;
          }
          null != p3.componentWillUpdate && p3.componentWillUpdate(x2, p3.__s, P2), M && null != p3.componentDidUpdate && p3.__h.push(function() {
            p3.componentDidUpdate(y3, d3, _2);
          });
        }
        if (p3.context = P2, p3.props = x2, p3.__P = n2, p3.__e = false, A3 = l.__r, H2 = 0, M) p3.state = p3.__s, p3.__d = false, A3 && A3(u4), s5 = p3.render(p3.props, p3.state, p3.context), w.push.apply(p3.__h, p3._sb), p3._sb = [];
        else do {
          p3.__d = false, A3 && A3(u4), s5 = p3.render(p3.props, p3.state, p3.context), p3.state = p3.__s;
        } while (p3.__d && ++H2 < 25);
        p3.state = p3.__s, null != p3.getChildContext && (i3 = m(m({}, i3), p3.getChildContext())), M && !v3 && null != p3.getSnapshotBeforeUpdate && (_2 = p3.getSnapshotBeforeUpdate(y3, d3)), T3 = null != s5 && s5.type === S && null == s5.key ? E(s5.props.children) : s5, f4 = L(n2, g(T3) ? T3 : [T3], u4, t3, i3, r3, o3, e3, f4, c4, a3), p3.base = u4.__e, u4.__u &= -161, p3.__h.length && e3.push(p3), k3 && (p3.__E = p3.__ = null);
      } catch (n3) {
        if (e3.length = h3, u4.__v = null, c4 || null != o3) {
          if (n3.then) {
            for (u4.__u |= c4 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
            null != o3 && (o3[o3.indexOf(f4)] = null), u4.__e = f4;
          } else if (null != o3) for (j3 = o3.length; j3--; ) b(o3[j3]);
        } else u4.__e = t3.__e;
        null == u4.__k && (u4.__k = t3.__k || []), n3.then || B(u4), l.__e(n3, u4, t3);
      }
    } else null == o3 && u4.__v == t3.__v ? (u4.__k = t3.__k, u4.__e = t3.__e) : f4 = u4.__e = G(t3.__e, u4, t3, i3, r3, o3, e3, c4, a3);
    return (s5 = l.diffed) && s5(u4), 128 & u4.__u ? void 0 : f4;
  }
  function B(n2) {
    n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(B));
  }
  function D(n2, u4, t3) {
    for (var i3 = 0; i3 < t3.length; i3++) J(t3[i3], t3[++i3], t3[++i3]);
    l.__c && l.__c(u4, n2), n2.some(function(u5) {
      try {
        n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
          n3.call(u5);
        });
      } catch (n3) {
        l.__e(n3, u5.__v);
      }
    });
  }
  function E(n2) {
    return "object" != typeof n2 || null == n2 || n2.__b > 0 ? n2 : g(n2) ? n2.map(E) : void 0 !== n2.constructor ? null : m({}, n2);
  }
  function G(u4, t3, i3, r3, o3, e3, f4, c4, a3) {
    var s5, h3, p3, v3, y3, w3, _2, m3 = i3.props || d, k3 = t3.props, x2 = t3.type;
    if ("svg" == x2 ? o3 = "http://www.w3.org/2000/svg" : "math" == x2 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e3) {
      for (s5 = 0; s5 < e3.length; s5++) if ((y3 = e3[s5]) && "setAttribute" in y3 == !!x2 && (x2 ? y3.localName == x2 : 3 == y3.nodeType)) {
        u4 = y3, e3[s5] = null;
        break;
      }
    }
    if (null == u4) {
      if (null == x2) return document.createTextNode(k3);
      u4 = document.createElementNS(o3, x2, k3.is && k3), c4 && (l.__m && l.__m(t3, e3), c4 = false), e3 = null;
    }
    if (null == x2) m3 === k3 || c4 && u4.data == k3 || (u4.data = k3);
    else {
      if (e3 = "textarea" == x2 && null != k3.defaultValue ? null : e3 && n.call(u4.childNodes), !c4 && null != e3) for (m3 = {}, s5 = 0; s5 < u4.attributes.length; s5++) m3[(y3 = u4.attributes[s5]).name] = y3.value;
      for (s5 in m3) y3 = m3[s5], "dangerouslySetInnerHTML" == s5 ? p3 = y3 : "children" == s5 || s5 in k3 || "value" == s5 && "defaultValue" in k3 || "checked" == s5 && "defaultChecked" in k3 || N(u4, s5, null, y3, o3);
      for (s5 in k3) y3 = k3[s5], "children" == s5 ? v3 = y3 : "dangerouslySetInnerHTML" == s5 ? h3 = y3 : "value" == s5 ? w3 = y3 : "checked" == s5 ? _2 = y3 : c4 && "function" != typeof y3 || m3[s5] === y3 || N(u4, s5, y3, m3[s5], o3);
      if (h3) c4 || p3 && (h3.__html == p3.__html || h3.__html == u4.innerHTML) || (u4.innerHTML = h3.__html), t3.__k = [];
      else if (p3 && (u4.innerHTML = ""), L("template" == t3.type ? u4.content : u4, g(v3) ? v3 : [v3], t3, i3, r3, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o3, e3, f4, e3 ? e3[0] : i3.__k && $(i3, 0), c4, a3), null != e3) for (s5 = e3.length; s5--; ) b(e3[s5]);
      c4 && "textarea" != x2 || (s5 = "value", "progress" == x2 && null == w3 ? u4.removeAttribute("value") : null != w3 && (w3 !== u4[s5] || "progress" == x2 && !w3 || "option" == x2 && w3 != m3[s5]) && N(u4, s5, w3, m3[s5], o3), s5 = "checked", null != _2 && _2 != u4[s5] && N(u4, s5, _2, m3[s5], o3));
    }
    return u4;
  }
  function J(n2, u4, t3) {
    try {
      if ("function" == typeof n2) {
        var i3 = "function" == typeof n2.__u;
        i3 && n2.__u(), i3 && null == u4 || (n2.__u = n2(u4));
      } else n2.current = u4;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function K(n2, u4, t3) {
    var i3, r3;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current != n2.__e || J(i3, null, u4)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount) try {
        i3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u4);
      }
      i3.base = i3.__P = i3.__n = null;
    }
    if (i3 = n2.__k) for (r3 = 0; r3 < i3.length; r3++) i3[r3] && K(i3[r3], u4, t3 || "function" != typeof n2.type);
    t3 || b(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
  }
  function Q(n2, l3, u4) {
    return this.constructor(n2, u4);
  }
  function R(u4, t3, i3) {
    var r3, o3, e3, f4;
    t3 == document && (t3 = document.documentElement), l.__ && l.__(u4, t3), o3 = (r3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, e3 = [], f4 = [], q(t3, u4 = (!r3 && i3 || t3).__k = k(S, null, [u4]), o3 || d, d, t3.namespaceURI, !r3 && i3 ? [i3] : o3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, e3, !r3 && i3 ? i3 : o3 ? o3.__e : t3.firstChild, r3, f4), D(e3, u4, f4), u4.props.children = null;
  }
  var n, l, u, t, i, r, o, e, f, c, a, s, h, p, v, y, d, w, _, g;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      d = {};
      w = [];
      _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      g = Array.isArray;
      __name(m, "m");
      __name(b, "b");
      __name(k, "k");
      __name(x, "x");
      __name(S, "S");
      __name(C, "C");
      __name($, "$");
      __name(I, "I");
      __name(P, "P");
      __name(A, "A");
      __name(H, "H");
      __name(L, "L");
      __name(T, "T");
      __name(j, "j");
      __name(O, "O");
      __name(z, "z");
      __name(N, "N");
      __name(V, "V");
      __name(q, "q");
      __name(B, "B");
      __name(D, "D");
      __name(E, "E");
      __name(G, "G");
      __name(J, "J");
      __name(K, "K");
      __name(Q, "Q");
      __name(R, "R");
      n = w.slice, l = { __e: /* @__PURE__ */ __name(function(n2, l3, u4, t3) {
        for (var i3, r3, o3; l3 = l3.__; ) if ((i3 = l3.__c) && !i3.__) try {
          if ((r3 = i3.constructor) && null != r3.getDerivedStateFromError && (i3.setState(r3.getDerivedStateFromError(n2)), o3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), o3 = i3.__d), o3) return i3.__E = i3;
        } catch (l4) {
          n2 = l4;
        }
        throw n2;
      }, "__e") }, u = 0, t = /* @__PURE__ */ __name(function(n2) {
        return null != n2 && void 0 === n2.constructor;
      }, "t"), C.prototype.setState = function(n2, l3) {
        var u4;
        u4 = null != this.__s && this.__s != this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof n2 && (n2 = n2(m({}, u4), this.props)), n2 && m(u4, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), A(this));
      }, C.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), A(this));
      }, C.prototype.render = S, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = /* @__PURE__ */ __name(function(n2, l3) {
        return n2.__v.__b - l3.__v.__b;
      }, "e"), H.__r = 0, f = Math.random().toString(8), c = "__d" + f, a = "__a" + f, s = /(PointerCapture)$|Capture$/i, h = 0, p = V(false), v = V(true), y = 0;
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function s2(n2, t3) {
    c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
    var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u4.__.length && u4.__.push({}), u4.__[n2];
  }
  function d2(n2) {
    return o2 = 1, y2(D2, n2);
  }
  function y2(n2, u4, i3) {
    var o3 = s2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u4) : D2(void 0, u4), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.__f)) {
      var f4 = /* @__PURE__ */ __name(function(n3, t3, r3) {
        if (!o3.__c.__H) return true;
        var u5 = false, i4 = o3.__c.props !== n3;
        if (o3.__c.__H.__.some(function(n4) {
          if (n4.__N) {
            u5 = true;
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), c4) {
          var f5 = c4.call(this, n3, t3, r3);
          return u5 ? f5 || i4 : f5;
        }
        return !u5 || i4;
      }, "f");
      r2.__f = true;
      var c4 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u5 = c4;
          c4 = void 0, f4(n3, t3, r3), c4 = u5;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f4;
    }
    return o3.__N || o3.__;
  }
  function h2(n2, u4) {
    var i3 = s2(t2++, 3);
    !c2.__s && C2(i3.__H, u4) && (i3.__ = n2, i3.u = u4, r2.__H.__h.push(i3));
  }
  function A2(n2) {
    return o2 = 5, T2(function() {
      return { current: n2 };
    }, []);
  }
  function T2(n2, r3) {
    var u4 = s2(t2++, 7);
    return C2(u4.__H, r3) && (u4.__ = n2(), u4.__H = r3, u4.__h = n2), u4.__;
  }
  function q2(n2, t3) {
    return o2 = 8, T2(function() {
      return n2;
    }, t3);
  }
  function j2() {
    for (var n2; n2 = f2.shift(); ) {
      var t3 = n2.__H;
      if (n2.__P && t3) try {
        t3.__h.some(z2), t3.__h.some(B2), t3.__h = [];
      } catch (r3) {
        t3.__h = [], c2.__e(r3, n2.__v);
      }
    }
  }
  function w2(n2) {
    var t3, r3 = /* @__PURE__ */ __name(function() {
      clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, "r"), u4 = setTimeout(r3, 35);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u4 = n2.__c;
    "function" == typeof u4 && (n2.__c = void 0, u4()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function D2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, p2, k2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = l;
      e2 = c2.__b;
      a2 = c2.__r;
      v2 = c2.diffed;
      l2 = c2.__c;
      m2 = c2.unmount;
      p2 = c2.__;
      __name(s2, "s");
      __name(d2, "d");
      __name(y2, "y");
      __name(h2, "h");
      __name(A2, "A");
      __name(T2, "T");
      __name(q2, "q");
      __name(j2, "j");
      c2.__b = function(n2) {
        r2 = null, e2 && e2(n2);
      }, c2.__ = function(n2, t3) {
        n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), p2 && p2(n2, t3);
      }, c2.__r = function(n2) {
        a2 && a2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.some(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
        })) : (i3.__h.some(z2), i3.__h.some(B2), i3.__h = [], t2 = 0)), u2 = r2;
      }, c2.diffed = function(n2) {
        v2 && v2(n2);
        var t3 = n2.__c;
        t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.some(function(n3) {
          n3.u && (n3.__H = n3.u, n3.u = void 0);
        })), u2 = r2 = null;
      }, c2.__c = function(n2, t3) {
        t3.some(function(n3) {
          try {
            n3.__h.some(z2), n3.__h = n3.__h.filter(function(n4) {
              return !n4.__ || B2(n4);
            });
          } catch (r3) {
            t3.some(function(n4) {
              n4.__h && (n4.__h = []);
            }), t3 = [], c2.__e(r3, n3.__v);
          }
        }), l2 && l2(n2, t3);
      }, c2.unmount = function(n2) {
        m2 && m2(n2);
        var t3, r3 = n2.__c;
        r3 && r3.__H && (r3.__H.__.some(function(n3) {
          try {
            z2(n3);
          } catch (n4) {
            t3 = n4;
          }
        }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
      };
      k2 = "function" == typeof requestAnimationFrame;
      __name(w2, "w");
      __name(z2, "z");
      __name(B2, "B");
      __name(C2, "C");
      __name(D2, "D");
    }
  });

  // src/core/Emitter.ts
  var _Emitter, Emitter;
  var init_Emitter = __esm({
    "src/core/Emitter.ts"() {
      "use strict";
      init_hooks_module();
      _Emitter = class _Emitter {
        constructor() {
          this.events = /* @__PURE__ */ new Map();
        }
        on(event, handler) {
          let set = this.events.get(event);
          if (!set) {
            set = /* @__PURE__ */ new Set();
            this.events.set(event, set);
          }
          set.add(handler);
          return () => this.off(event, handler);
        }
        off(event, handler) {
          const set = this.events.get(event);
          if (!set) return;
          set.delete(handler);
          if (set.size === 0) {
            this.events.delete(event);
          }
        }
        emit(event, ...args) {
          const set = this.events.get(event);
          if (!set) return;
          for (const fn of [...set]) {
            fn(...args);
          }
        }
        once(event, handler) {
          const wrap = /* @__PURE__ */ __name((...args) => {
            handler(...args);
            this.off(event, wrap);
          }, "wrap");
          return this.on(event, wrap);
        }
        /**
         * 清空某个事件或全部
         */
        clear(event) {
          if (event) {
            this.events.delete(event);
          } else {
            this.events.clear();
          }
        }
        useEvent(event, getter) {
          const [state, setState] = d2(null);
          h2(() => {
            const off = this.on(event, (...args) => {
              setState(getter ? getter(...args) : args[0]);
            });
            return () => off();
          }, []);
          return state;
        }
      };
      __name(_Emitter, "Emitter");
      Emitter = _Emitter;
    }
  });

  // src/core/Config.ts
  var _Config, Config;
  var init_Config = __esm({
    "src/core/Config.ts"() {
      "use strict";
      init_Emitter();
      _Config = class _Config {
        constructor(load = true) {
          this.events = new Emitter();
          this.features = {
            /**
             * 是否开启图片转码
             *
             * @deprecated 已经废弃使用 image_convert_codecs 代替
             */
            convert_webp_to_png: true,
            /**
             * 下载视频分辨率策略
             * 可以选默认，最高清晰度，最小清晰度，和一些其他预设分辨率
             */
            download_video_mode: "default",
            /**
             * 文件名模板
             */
            filename_template: _Config.defaults.filename_template,
            /**
             * 最大文件名长度
             */
            filename_max_length: 100,
            /**
             * 视频下载编码偏好
             *
             * 1. 默认，无偏好 "default"
             * 2. 只下载 h264 "h264"
             * 3. 只下载 h265 "h265"
             * 4. 优先 h264 "h264_prefer"
             * 5. 优先 h265 "h265_prefer"
             */
            video_download_codecs: "default",
            /**
             * 图片转码编码偏好
             *
             * 仅浏览器下载流程生效；外部下载器不会执行图片转码。
             *
             * 1. 默认，无偏好 "default"
             * 2. 转码为 png "png"
             * 3. 转码为 jpg "jpg"
             * 4. 转码为 webp "webp"
             */
            image_convert_codecs: "default",
            /**
             * 图片尺寸压缩偏好
             *
             * 仅浏览器下载流程生效；外部下载器不会执行图片压缩。
             *
             * 1. 默认，无偏好 "default"
             * 2. 最大边小于 2k "2k_max"
             * 3. 最大边小于 1k "1k_max"
             * 4. 最大边小于 960 "960_max"
             * 5. 最大边小于 640 "640_max"
             * 5. 最大边小于 512 "512_max"
             */
            image_resize_codecs: "default",
            /**
             * 图片压缩率 必须开启转码或者尺寸压缩才有用
             *
             * 仅浏览器下载流程生效；外部下载器不会执行图片压缩。
             *
             * 默认 80
             * 推荐 60 以上
             */
            image_quality: 80,
            /**
             * 使用什么下载器 默认为使用浏览器下载，可以配置其他下载
             */
            using_downloader: "chrome",
            /**
             * 下载器配置
             *
             * 不同下载器有不同的配置
             */
            downloader_config: {
              browser: {
                // 没有配置
              },
              chrome: {
                // 保存到下载目录下的子目录，留空则直接存到下载目录
                dir: "douyin",
                // 同时进行的下载任务数
                concurrency: 3
              },
              idm: { id: "1" },
              aria2: {
                // 不同类型的下载地址
                dir: { video: "`./douyin/${user_dir}/videos`", image: "`./douyin/${user_dir}/images`", other: "`./douyin/${user_dir}/others`" },
                domain: "http://localhost",
                port: "6800",
                path: "/jsonrpc",
                token: ""
              },
              bc: {
                dir: { video: "`./douyin/${user_dir}/videos`", image: "`./douyin/${user_dir}/images`", other: "`./douyin/${user_dir}/others`" },
                domain: "http://localhost",
                port: "8080",
                path: "/panel/task_add_httpftp_result",
                authName: "",
                authPass: ""
              },
              abdm: {
                // 不同类型的下载地址
                dir: { video: "`./douyin/${user_dir}/videos`", image: "`./douyin/${user_dir}/images`", other: "`./douyin/${user_dir}/others`" },
                domain: "http://localhost",
                port: "15151"
              }
            },
            /**
             * 是否开启作者页面下载器
             *
             * 默认关闭
             */
            enable_profile_downloader: false
          };
          this._key = "__douyin-dl-user-js__";
          if (!load) return;
          try {
            this.load();
          } catch (error) {
            console.error(error);
          }
        }
        static default_features() {
          return new _Config(false).clone_features();
        }
        toJSON() {
          return { features: this.features };
        }
        load() {
          const raw = localStorage.getItem(this._key);
          if (raw) {
            const data = JSON.parse(raw);
            this.features = { ...this.features, ...data.features };
          }
        }
        save() {
          localStorage.setItem(this._key, JSON.stringify(this.toJSON()));
          this.events.emit("config_change");
        }
        clone_features() {
          return JSON.parse(JSON.stringify(this.features));
        }
      };
      __name(_Config, "Config");
      _Config.defaults = {
        filename_template: "`${nickname}_${create_date_YYYYMMDD.slice(2)}_赞${digg_count}_评${comment_count}_收${collect_count}_${desc}`"
      };
      _Config.global = new _Config();
      Config = _Config;
    }
  });

  // src/utils/format.ts
  function runInContext(context, code) {
    const keys = Object.keys(context);
    const head = `const {${keys.join(", ")}} = __CTX__; `;
    let body = code.trim();
    if (!body.startsWith("`")) {
      body = "`" + body.replace(/\\/g, "\\\\").replace(/`/g, "\\`") + "`";
    }
    const fn = new Function("__CTX__", `${head}
return (${body})`);
    return fn(context);
  }
  function formatDate(date, format = "YYYY-MM-DD HH:mm:ss") {
    const o3 = {
      YYYY: date.getFullYear().toString(),
      MM: ("0" + (date.getMonth() + 1)).slice(-2),
      DD: ("0" + date.getDate()).slice(-2),
      HH: ("0" + date.getHours()).slice(-2),
      mm: ("0" + date.getMinutes()).slice(-2),
      ss: ("0" + date.getSeconds()).slice(-2)
    };
    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (m3) => o3[m3]);
  }
  var init_format = __esm({
    "src/utils/format.ts"() {
      "use strict";
      __name(runInContext, "runInContext");
      __name(formatDate, "formatDate");
    }
  });

  // src/core/download/DownloaderLauncher.ts
  var _DownloaderLauncher, DownloaderLauncher;
  var init_DownloaderLauncher = __esm({
    "src/core/download/DownloaderLauncher.ts"() {
      "use strict";
      init_format();
      _DownloaderLauncher = class _DownloaderLauncher {
        constructor(config = {}) {
          this._idmSeq = 1;
          this.config = {
            idmList: config.idmList || [{ id: "1" }],
            aria2List: config.aria2List || [{ domain: "http://localhost", port: "6800", path: "/jsonrpc", token: "", dir: "" }],
            bitcometList: config.bitcometList || [{ domain: "http://localhost", port: "8080", path: "/panel/task_add_httpftp_result", authName: "", authPass: "", dir: "" }],
            abdmList: config.abdmList || [{ domain: "http://localhost", port: "15151", dir: "" }],
            curlTerminal: config.curlTerminal || "wc"
          };
        }
        // ==================== Dir Template ====================
        /**
         * 简化入口：解析下载目录模板
         */
        _resolveDirTemplate(input, context, fallback = "") {
          if (typeof input !== "string" || !input.trim()) return fallback;
          try {
            const resolved = runInContext(context, input);
            return typeof resolved === "string" && resolved.trim() ? resolved : fallback;
          } catch {
            return fallback;
          }
        }
        // ==================== invoke_download ====================
        /**
         * 简化入口：调用下载器下载
         */
        async invoke_download(url, dl_name = "abdm", dir_config, options = {}) {
          const input_filename = options.filename_input || (options.media ? "media_" + Date.now() : "download");
          const media = options.media;
          const filename = input_filename;
          const isVideo = filename.endsWith(".mp4") || filename.endsWith(".webm") || filename.endsWith(".ts");
          const isImage = filename.endsWith(".jpg") || filename.endsWith(".jpeg") || filename.endsWith(".png") || filename.endsWith(".webp");
          const authorInfo = media?.authorInfo || {};
          const userId = authorInfo.uid || media?.authorUserId || authorInfo.secUid || "unknown";
          const nickname = authorInfo.nickname || "unknown";
          const userDir = /* @__PURE__ */ __name((filename2) => filename2.replace(/[\\/:*?"<>|\x00-\x1f\x7f]/g, "_"), "userDir");
          const safeUserDir = userDir(`${userId}_${nickname}`);
          const mediaType = isVideo ? "video" : isImage ? "image" : "other";
          const defaultDir = isVideo ? `./douyin/${safeUserDir}/videos` : isImage ? `./douyin/${safeUserDir}/images` : `./douyin/${safeUserDir}/others`;
          const dirContext = {
            media,
            filename,
            filename_base: input_filename,
            user_dir: safeUserDir,
            author_info: authorInfo,
            uid: userId,
            nickname,
            aweme_id: media?.awemeId || "",
            desc: media?.desc || ""
          };
          const resolvedDir = this._resolveDirTemplate(dir_config?.[mediaType], dirContext, defaultDir);
          switch (dl_name) {
            case "idm":
              return this.launchIDM(url, filename, 0, {}, null);
            case "aria2":
              return this.launchAria2(url, filename, {}, { dir: resolvedDir });
            case "bc":
              return this.launchBitComet(url, filename, {}, null);
            case "abdm":
              return this.launchABDM(url, filename, {}, { dir: resolvedDir });
            default:
              throw new Error(`Unknown download name: ${dl_name}`);
          }
        }
        // ==================== Config helpers ====================
        /**
         * 获取默认配置项
         */
        getDefaultConfig(type) {
          const listMap = {
            idm: this.config.idmList,
            aria2: this.config.aria2List,
            bitcomet: this.config.bitcometList,
            abdm: this.config.abdmList
          };
          const list = listMap[type];
          if (!list) throw new Error(`Unknown type: ${type}`);
          return list.find((item) => item.default) || list[0];
        }
        // ==================== Static utilities ====================
        /**
         * 标准化请求头：转换为对象，添加常用默认头
         */
        static normalizeHeaders(headers = {}, addDefault = false) {
          if (typeof headers === "string") {
            const raw = {};
            headers.split(/[\r\n]+/).forEach((line) => {
              if (!line.trim() || !line.includes(":")) return;
              const [key, ...parts] = line.split(":");
              raw[key.trim().toLowerCase()] = parts.join(":").trim();
            });
            headers = raw;
          }
          const newHeaders = {};
          for (const key in headers) {
            let value = headers[key];
            if (typeof value === "object") value = JSON.stringify(value);
            else value = String(value);
            const normalizedKey = key.toLowerCase().split("-").map((w3) => w3.charAt(0).toUpperCase() + w3.slice(1)).join("-");
            newHeaders[normalizedKey] = value;
          }
          if (addDefault) return newHeaders;
          return {
            Dnt: "",
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "0",
            Cookie: document.cookie,
            "User-Agent": navigator.userAgent,
            Origin: location.origin,
            Referer: `${location.origin}/`,
            ...newHeaders
          };
        }
        /**
         * 可跨域 xmlhttpRequest 请求
         * 封装 GreaseMonkey-Compatible xmlhttpRequest 实现的跨域请求，支持回调和 await 两种用法
         */
        static xmlHttpRequest(option) {
          const xhr = typeof GM_xmlhttpRequest === "function" ? GM_xmlhttpRequest : typeof GM?.xmlHttpRequest === "function" ? GM.xmlHttpRequest : null;
          if (!xhr || typeof xhr !== "function") throw new Error("GreaseMonkey 兼容 XMLHttpRequest 不可用。");
          return xhr({ withCredentials: true, ...option });
        }
        /**
         * 发送HTTP请求，使用 gm-xmlhttpRequest 发起跨域请求
         */
        static request_cors(url, options = {}) {
          return new Promise((resolve, reject) => {
            const { method = "GET", headers = {}, body, timeout = 3e4, responseType } = options;
            _DownloaderLauncher.xmlHttpRequest({
              method,
              url,
              headers,
              data: body,
              timeout,
              responseType,
              onload: /* @__PURE__ */ __name((res) => {
                let data = res.response;
                if (!responseType) {
                  const ct = res.responseHeaders || "";
                  if (ct.includes("application/json")) {
                    try {
                      data = JSON.parse(res.responseText);
                    } catch {
                      data = res.responseText;
                    }
                  } else data = res.responseText;
                }
                resolve({ status: res.status, data, headers: res.responseHeaders });
              }, "onload"),
              onerror: /* @__PURE__ */ __name((err) => reject(err), "onerror"),
              ontimeout: /* @__PURE__ */ __name(() => reject(new Error("Request timeout")), "ontimeout")
            });
          });
        }
        /**
         * 发送HTTP请求，默认用这个请求，不需要权限
         */
        static async request(url, options = {}) {
          const response = await fetch(url, options);
          let data;
          const ct = response.headers.get("content-type");
          if (ct && ct.includes("application/json")) data = await response.json();
          else data = await response.text();
          return { status: response.status, data };
        }
        /**
         * 格式化文件大小（用于调试）
         */
        static formatSize(bytes) {
          if (bytes === 0) return "0 B";
          const k3 = 1024;
          const sizes = ["B", "KB", "MB", "GB", "TB"];
          const i3 = Math.floor(Math.log(bytes) / Math.log(k3));
          return parseFloat((bytes / Math.pow(k3, i3)).toFixed(2)) + " " + sizes[i3];
        }
        /**
         * 生成cURL命令
         */
        static toCurlCommand(link, filename, headers = {}, terminal = "wc") {
          const curlCmd = terminal !== "wp" ? "curl" : "curl.exe";
          const headerArgs = Object.entries(headers).map(([k3, v3]) => `-H "${k3}: ${v3}"`).join(" ");
          const safeFilename = filename.replace(/[!?&|`"'*/:<>\\]/g, "_");
          return `${curlCmd} -L -C - "${link}" -o "${safeFilename}" ${headerArgs}`.trim();
        }
        /**
         * 生成BC链接（比特彗星专用）
         */
        static toBitCometLink(link, filename, headers = {}) {
          const safeFilename = filename.replace(/[!?&|`"'*/:<>\\]/g, "_");
          const query = new URLSearchParams();
          query.append("url", link);
          for (const [k3, v3] of Object.entries(headers)) query.append(k3, v3);
          const bcData = `AA/${encodeURIComponent(safeFilename)}/?${query.toString()}ZZ`;
          const base64Data = btoa(unescape(encodeURIComponent(bcData)));
          return `bc://http/${base64Data}`;
        }
        // ==================== Launchers ====================
        /**
         * 发送到 IDM
         */
        async launchIDM(link, filename, filesize, headers = {}, idmConfig = null) {
          const config = { ...this.getDefaultConfig("idm"), ...idmConfig };
          const clientId = config.id;
          if (!clientId) throw new Error("IDM client id missing");
          const seq = ++this._idmSeq;
          const time = Date.now();
          const url = `http://127.0.0.1:1001/client/${clientId}?seq=${seq}`;
          const ext = filename.split(".").pop()?.toUpperCase() || "";
          const normHeaders = _DownloaderLauncher.normalizeHeaders(headers);
          const headersText = Object.entries(normHeaders).map(([k3, v3]) => `${k3}: ${v3}`).join("\n") + "\n";
          const fmt2 = /* @__PURE__ */ __name((key, val) => {
            const s5 = String(val ?? "");
            return `${key}=${new Blob([s5]).size}:${s5}`;
          }, "fmt");
          const fields = [fmt2(4, ext), fmt2(6, link), fmt2(7, location.origin), fmt2(11, headersText), fmt2(100, filename), fmt2(122, 4)];
          const data = `MSG#${seq}#13#1#10241:${seq + 1e3}:0:${time}:0:1:2:${filesize}:0,${fields.join(",")};`;
          try {
            const res = await _DownloaderLauncher.request(url, { method: "POST", headers: { "Content-Type": "text/plain" }, body: data });
            return res.data === `${seq}:3;`;
          } catch (e3) {
            console.error("IDM launch failed", e3);
            return false;
          }
        }
        /**
         * 发送到 Aria2
         */
        async launchAria2(link, filename, headers = {}, aria2Config = null) {
          const config = { ...this.getDefaultConfig("aria2"), ...aria2Config };
          const url = `${config.domain}:${config.port}${config.path}`;
          const headerList = Object.entries(_DownloaderLauncher.normalizeHeaders(headers)).map(([k3, v3]) => `${k3}: ${v3}`);
          const params = [`token:${config.token}`, [link], { dir: config.dir || void 0, out: filename, header: headerList }];
          const rpcData = { id: Date.now(), jsonrpc: "2.0", method: "aria2.addUri", params };
          try {
            const res = await _DownloaderLauncher.request_cors(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(rpcData) });
            return !!res.data?.result;
          } catch (e3) {
            console.error("Aria2 launch failed", e3);
            return false;
          }
        }
        /**
         * 发送到比特彗星 (BitComet)
         */
        async launchBitComet(link, filename, headers = {}, bitcometConfig = null) {
          const config = { ...this.getDefaultConfig("bitcomet"), ...bitcometConfig };
          const url = `${config.domain}:${config.port}${config.path}`;
          const formData = new URLSearchParams();
          formData.append("url", link);
          if (config.dir) formData.append("save_path", config.dir);
          formData.append("file_name", filename);
          formData.append("connection", "200");
          const normHeaders = _DownloaderLauncher.normalizeHeaders(headers);
          for (const [k3, v3] of Object.entries(normHeaders)) formData.append(k3, v3);
          const auth = btoa(`${config.authName}:${config.authPass}`);
          try {
            const res = await _DownloaderLauncher.request(url, {
              method: "POST",
              headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/x-www-form-urlencoded" },
              body: formData
            });
            return !res.data.includes("Add task failed!");
          } catch (e3) {
            console.warn("BitComet launch may have succeeded despite error", e3);
            return true;
          }
        }
        /**
         * 发送到 AB Download Manager
         */
        async launchABDM(link, filename, headers = {}, abdmConfig = null) {
          const config = { ...this.getDefaultConfig("abdm"), ...abdmConfig };
          const url = `${config.domain}:${config.port}/start-headless-download`;
          const normHeaders = _DownloaderLauncher.normalizeHeaders(headers);
          const payload = { downloadSource: { link, headers: normHeaders, downloadPage: normHeaders["Referer"] || location.href }, name: filename };
          if (config.dir) payload.folder = config.dir;
          try {
            const res = await _DownloaderLauncher.request_cors(url, { method: "POST", headers: { "Content-Type": "text/plain;charset=UTF-8" }, body: JSON.stringify(payload) });
            return res.data === "OK";
          } catch (e3) {
            console.error("ABDM launch failed", e3);
            return false;
          }
        }
        // ==================== 以下是同步命令生成方法（不实际唤醒）====================
        getCurlCommand(link, filename, headers = {}) {
          return _DownloaderLauncher.toCurlCommand(link, filename, headers, this.config.curlTerminal);
        }
        getBitCometLink(link, filename, headers = {}) {
          return _DownloaderLauncher.toBitCometLink(link, filename, headers);
        }
        getAria2Command(link, filename, headers = {}) {
          const headerArgs = Object.entries(headers).map(([k3, v3]) => `--header "${k3}: ${v3}"`).join(" ");
          const safeFilename = filename.replace(/[!?&|`"'*/:<>\\]/g, "_");
          return `aria2c "${link}" --out "${safeFilename}" ${headerArgs}`.trim();
        }
      };
      __name(_DownloaderLauncher, "DownloaderLauncher");
      DownloaderLauncher = _DownloaderLauncher;
    }
  });

  // src/core/download/DownloadHistory.ts
  var _DownloadHistory, DownloadHistory;
  var init_DownloadHistory = __esm({
    "src/core/download/DownloadHistory.ts"() {
      "use strict";
      _DownloadHistory = class _DownloadHistory {
        // 最多保存50条记录
        static get() {
          try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : [];
          } catch {
            return [];
          }
        }
        static add(media, downloadTime = Date.now()) {
          const history = this.get();
          const record = {
            id: media.awemeId || `hist_${Date.now()}_${Math.random()}`,
            desc: media.desc || "(无描述)",
            shareUrl: media.shareInfo?.shareUrl || "",
            downloadTime,
            media: {
              // 只保存必要字段，避免存储过大
              awemeId: media.awemeId,
              desc: media.desc,
              shareUrl: media.shareInfo?.shareUrl,
              authorNickname: media.authorInfo?.nickname
              // 可额外保存封面等，但注意localStorage容量限制
            }
          };
          history.unshift(record);
          if (history.length > this.MAX_ITEMS) history.pop();
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
          return record;
        }
        static clear() {
          localStorage.removeItem(this.STORAGE_KEY);
        }
      };
      __name(_DownloadHistory, "DownloadHistory");
      _DownloadHistory.STORAGE_KEY = "__douyin-dl-history__";
      _DownloadHistory.MAX_ITEMS = 50;
      DownloadHistory = _DownloadHistory;
    }
  });

  // src/handlers/douyin/getBestCoverUrl.ts
  function isRootCoverContainer(obj) {
    if (!obj || typeof obj !== "object") return false;
    const candidate = obj;
    return !!(typeof candidate.cover === "string" || Array.isArray(candidate.coverUrlList) || Array.isArray(candidate.originCoverUrlList) || typeof candidate.dynamicCover === "string" || typeof candidate.rawCover === "string");
  }
  function extractFromContainer(container) {
    if (!container) return null;
    if (container.dynamicCover && container.dynamicCover.includes("_large")) {
      return container.dynamicCover;
    }
    if (container.rawCover) {
      return container.rawCover;
    }
    const candidates = [...container.originCoverUrlList || [], ...container.coverUrlList || []];
    const cleanCandidates = candidates.filter(
      (url) => typeof url === "string" && !url.includes("cropcenter") && !url.includes("sh=") && !url.includes("360p") && !url.includes("720p")
    );
    if (cleanCandidates.length > 0) {
      return cleanCandidates[0];
    }
    return container.originCover || container.cover || null;
  }
  function getBestCoverUrl(media) {
    if (media.video) {
      const fromVideo = extractFromContainer(media.video);
      if (fromVideo) return fromVideo;
    }
    if (isRootCoverContainer(media)) {
      const fromRoot = extractFromContainer(media);
      if (fromRoot) return fromRoot;
    }
    return null;
  }
  var init_getBestCoverUrl = __esm({
    "src/handlers/douyin/getBestCoverUrl.ts"() {
      "use strict";
      __name(isRootCoverContainer, "isRootCoverContainer");
      __name(extractFromContainer, "extractFromContainer");
      __name(getBestCoverUrl, "getBestCoverUrl");
    }
  });

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  function u3(e3, t3, n2, o3, i3, u4) {
    t3 || (t3 = {});
    var a3, c4, p3 = t3;
    if ("ref" in p3) for (c4 in p3 = {}, t3) "ref" == c4 ? a3 = t3[c4] : p3[c4] = t3[c4];
    var l3 = { type: e3, props: p3, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f3, __i: -1, __u: 0, __source: i3, __self: u4 };
    if ("function" == typeof e3 && (a3 = e3.defaultProps)) for (c4 in a3) void 0 === p3[c4] && (p3[c4] = a3[c4]);
    return l.vnode && l.vnode(l3), l3;
  }
  var f3;
  var init_jsxRuntime_module = __esm({
    "node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"() {
      init_preact_module();
      init_preact_module();
      f3 = 0;
      __name(u3, "u");
    }
  });

  // src/utils/css-in-js.ts
  function createCSS() {
    const style = document.createElement("style");
    (document.head || document.documentElement).appendChild(style);
    const sheet = style.sheet;
    const cache = /* @__PURE__ */ new Map();
    const kebab = /* @__PURE__ */ __name((s5) => s5.replace(/[A-Z]/g, (m3) => "-" + m3.toLowerCase()), "kebab");
    const hash = /* @__PURE__ */ __name((s5) => {
      let h3 = 0, i3 = s5.length;
      while (i3) h3 = h3 * 31 + s5.charCodeAt(--i3) | 0;
      return "c" + (h3 >>> 0).toString(36);
    }, "hash");
    const merge = /* @__PURE__ */ __name((input) => Array.isArray(input) ? input.filter(Boolean).reduce((a3, b2) => {
      return Object.assign(a3, merge(b2));
    }, {}) : input || {}, "merge");
    function build(selector, obj) {
      let body = "";
      for (const k3 in obj) {
        const v3 = obj[k3];
        if (v3 == null || v3 === false) continue;
        if (typeof v3 === "object") {
          const sel = k3.includes("&") ? k3.replace(/&/g, selector) : `${selector} ${k3}`;
          build(sel, v3);
        } else {
          body += `${kebab(k3)}:${v3};`;
        }
      }
      if (body) {
        sheet.insertRule(`${selector}{${body}}`, sheet.cssRules.length);
      }
    }
    __name(build, "build");
    return /* @__PURE__ */ __name(function css4(input) {
      const obj = merge(input);
      const key = JSON.stringify(obj);
      if (cache.has(key)) return cache.get(key);
      const className = hash(key);
      build(`.${className}`, obj);
      cache.set(key, className);
      return className;
    }, "css");
  }
  var init_css_in_js = __esm({
    "src/utils/css-in-js.ts"() {
      "use strict";
      __name(createCSS, "createCSS");
    }
  });

  // src/utils/theme.ts
  var theme;
  var init_theme = __esm({
    "src/utils/theme.ts"() {
      "use strict";
      theme = {
        colors: {
          primary: "#fe2c55",
          primaryLight: "#ff8a80",
          bgOverlay: "rgba(18, 18, 20, 0.94)",
          bgNav: "rgba(0,0,0,0.2)",
          bgFieldset: "rgba(0,0,0,0.2)",
          borderLight: "rgba(255,255,255,0.1)",
          borderMedium: "rgba(255,255,255,0.15)",
          borderInput: "rgba(255,255,255,0.2)",
          textPrimary: "#fff",
          textSecondary: "rgba(255,255,255,0.8)",
          textMuted: "rgba(255,255,255,0.6)",
          textDim: "#999"
        },
        spacing: {
          xs: "4px",
          sm: "8px",
          md: "12px",
          lg: "16px",
          xl: "20px"
        },
        borderRadius: {
          sm: "8px",
          md: "12px",
          lg: "16px",
          full: "20px"
        },
        fontSize: {
          xs: "12px",
          sm: "13px"
        },
        backdropBlur: "blur(10px)"
      };
    }
  });

  // src/ui/modals/MediaDetailModal.tsx
  var MediaDetailModal_exports = {};
  __export(MediaDetailModal_exports, {
    MediaDetailModalApp: () => MediaDetailModalApp
  });
  var css, styles, navBtnClass, fmt, msToAssTime, KeyValue, Copyable, Table, launchers, LaunchButtons, VideoSection, ImageSection, MusicSection, MediaTab, AuthorTab, PostTab, JsonTab, DanmakuTab, tabs, MediaDetailModalApp;
  var init_MediaDetailModal = __esm({
    "src/ui/modals/MediaDetailModal.tsx"() {
      "use strict";
      init_hooks_module();
      init_css_in_js();
      init_theme();
      init_DownloaderLauncher();
      init_getBestCoverUrl();
      init_jsxRuntime_module();
      css = createCSS();
      styles = {
        container: css({
          display: "flex",
          flexDirection: "column",
          height: "80vh",
          overflow: "hidden",
          background: theme.colors.bgOverlay,
          backdropFilter: theme.backdropBlur,
          borderRadius: theme.borderRadius.lg,
          color: theme.colors.textPrimary
        }),
        nav: css({ display: "flex", borderBottom: "1px solid " + theme.colors.borderLight, background: theme.colors.bgNav, flexShrink: 0 }),
        navBtnBase: css({
          padding: theme.spacing.md + " " + theme.spacing.xl,
          border: "none",
          background: "transparent",
          cursor: "pointer",
          borderBottom: "2px solid transparent",
          fontWeight: "normal",
          color: theme.colors.textSecondary,
          transition: "0.2s"
        }),
        navBtnActive: css({ background: "rgba(255,255,255,0.08)", borderBottomColor: theme.colors.primary, fontWeight: "bold", color: theme.colors.primary }),
        content: css({ flexGrow: 1, overflowY: "auto", padding: theme.spacing.xl }),
        fieldset: css({
          border: "1px solid " + theme.colors.borderMedium,
          borderRadius: theme.borderRadius.md,
          marginBottom: theme.spacing.xl,
          padding: theme.spacing.lg,
          background: theme.colors.bgFieldset
        }),
        legend: css({
          fontWeight: "bold",
          padding: "0 " + theme.spacing.sm,
          color: "rgba(255,255,255,0.9)",
          background: "rgba(18,18,20,0.8)",
          borderRadius: theme.borderRadius.full,
          fontSize: theme.fontSize.sm
        }),
        row: css({ display: "flex", padding: theme.spacing.sm + " 0", fontSize: theme.fontSize.sm, borderBottom: "1px solid rgba(255,255,255,0.08)", alignItems: "center" }),
        label: css({ width: "100px", flexShrink: 0, color: theme.colors.textMuted, fontWeight: 600 }),
        value: css({ flexGrow: 1, color: theme.colors.textSecondary, wordBreak: "break-all" }),
        btn: css({
          padding: theme.spacing.xs + " " + theme.spacing.md,
          fontSize: theme.fontSize.xs,
          cursor: "pointer",
          border: "1px solid rgba(255,255,255,0.3)",
          background: "rgba(255,255,255,0.08)",
          color: theme.colors.textPrimary,
          borderRadius: theme.borderRadius.full,
          marginLeft: theme.spacing.sm,
          transition: "0.2s"
        }),
        img: css({ maxWidth: "100px", maxHeight: "80px", objectFit: "cover", borderRadius: theme.borderRadius.sm, border: "1px solid " + theme.colors.borderInput }),
        table: css({ width: "100%", fontSize: theme.fontSize.xs, borderCollapse: "collapse", background: "rgba(0,0,0,0.2)", borderRadius: theme.borderRadius.sm, overflow: "hidden" }),
        th: css({ border: "1px solid " + theme.colors.borderLight, padding: theme.spacing.sm, background: "rgba(0,0,0,0.4)", textAlign: "left", color: "rgba(255,255,255,0.9)" }),
        td: css({ border: "1px solid " + theme.colors.borderLight, padding: theme.spacing.sm, color: theme.colors.textSecondary }),
        flexRow: css({ display: "flex", gap: "15px", alignItems: "center" }),
        flexWrap: css({ display: "flex", gap: "6px", flexWrap: "wrap" }),
        imgCover: css({ width: "120px", borderRadius: "4px" }),
        authorHeader: css({ display: "flex", gap: "15px", marginBottom: "20px", alignItems: "center" }),
        jsonPre: css({
          background: "rgba(0,0,0,0.3)",
          padding: "10px",
          overflow: "auto",
          maxHeight: "100%",
          fontSize: "12px",
          wordBreak: "break-all",
          whiteSpace: "pre-wrap",
          border: "1px solid " + theme.colors.borderInput,
          borderRadius: theme.borderRadius.sm,
          cursor: "text",
          color: "#ddd"
        }),
        danmakuContainer: css({ display: "flex", flexDirection: "column", gap: theme.spacing.md }),
        danmakuHeader: css({ display: "flex", justifyContent: "space-between", alignItems: "center" }),
        danmakuTitle: css({ margin: 0 }),
        danmakuButtonGroup: css({ display: "flex", gap: theme.spacing.sm }),
        danmakuEmpty: css({ textAlign: "center", padding: theme.spacing.xl, color: theme.colors.textDim }),
        danmakuTableWrapper: css({ maxHeight: "500px", overflowY: "auto", border: "1px solid #ddd", borderRadius: "4px" })
      };
      navBtnClass = /* @__PURE__ */ __name((active) => active ? styles.navBtnBase + " " + styles.navBtnActive : styles.navBtnBase, "navBtnClass");
      fmt = {
        ts: /* @__PURE__ */ __name((ts) => ts ? new Date(ts * 1e3).toLocaleString() : "N/A", "ts"),
        num: /* @__PURE__ */ __name((n2) => n2 ? n2 > 1e4 ? (n2 / 1e4).toFixed(1) + " 万" : n2 : 0, "num"),
        size: /* @__PURE__ */ __name((s5) => s5 ? (s5 / 1024 / 1024).toFixed(2) + " MB" : "-", "size")
      };
      msToAssTime = /* @__PURE__ */ __name((ms) => {
        const h3 = Math.floor(ms / 36e5);
        const m3 = Math.floor(ms % 36e5 / 6e4);
        const s5 = Math.floor(ms % 6e4 / 1e3);
        const cs = Math.floor(ms % 1e3 / 10);
        return h3.toString().padStart(2, "0") + ":" + m3.toString().padStart(2, "0") + ":" + s5.toString().padStart(2, "0") + "." + cs.toString().padStart(2, "0");
      }, "msToAssTime");
      KeyValue = /* @__PURE__ */ __name(({ label, children }) => /* @__PURE__ */ u3("div", { className: styles.row, children: [
        /* @__PURE__ */ u3("strong", { className: styles.label, children: label }),
        /* @__PURE__ */ u3("span", { className: styles.value, children: children ?? "-" })
      ] }), "KeyValue");
      Copyable = /* @__PURE__ */ __name(({ label, value }) => {
        const [c4, sc] = d2(false);
        const h3 = /* @__PURE__ */ __name(() => {
          navigator.clipboard.writeText(value || "").then(() => {
            sc(true);
            setTimeout(() => sc(false), 2e3);
          });
        }, "h");
        if (!value) return /* @__PURE__ */ u3(KeyValue, { label });
        return /* @__PURE__ */ u3("div", { className: styles.row, children: [
          /* @__PURE__ */ u3("strong", { className: styles.label, children: label }),
          /* @__PURE__ */ u3("span", { className: styles.value, children: value }),
          /* @__PURE__ */ u3("button", { className: styles.btn, onClick: h3, children: c4 ? "已复制" : "复制" })
        ] });
      }, "Copyable");
      Table = /* @__PURE__ */ __name(({ headers, rows }) => /* @__PURE__ */ u3("table", { className: styles.table, children: [
        /* @__PURE__ */ u3("thead", { children: /* @__PURE__ */ u3("tr", { children: headers.map((h3, i3) => /* @__PURE__ */ u3("th", { className: styles.th, children: h3 }, i3)) }) }),
        /* @__PURE__ */ u3("tbody", { children: rows.map((row, i3) => /* @__PURE__ */ u3("tr", { children: row.map((cell, j3) => /* @__PURE__ */ u3("td", { className: styles.td, children: cell }, j3)) }, i3)) })
      ] }), "Table");
      launchers = [
        { key: "browser", label: "打开", buildUrl: /* @__PURE__ */ __name((u4) => u4, "buildUrl") },
        {
          key: "copy",
          label: "复制",
          buildUrl: /* @__PURE__ */ __name(() => null, "buildUrl"),
          action: /* @__PURE__ */ __name((u4) => {
            navigator.clipboard.writeText(u4);
            alert("复制成功");
          }, "action")
        },
        { key: "potplayer", label: "PotPlayer", buildUrl: /* @__PURE__ */ __name((u4) => "potplayer://" + u4, "buildUrl") },
        {
          key: "abdm",
          label: "abdm",
          buildUrl: /* @__PURE__ */ __name(() => null, "buildUrl"),
          action: /* @__PURE__ */ __name(async (u4) => {
            const l3 = new DownloaderLauncher();
            await l3.invoke_download(u4, "abdm");
          }, "action")
        },
        {
          key: "aria2",
          label: "aria2",
          buildUrl: /* @__PURE__ */ __name(() => null, "buildUrl"),
          action: /* @__PURE__ */ __name(async (u4) => {
            const l3 = new DownloaderLauncher();
            await l3.invoke_download(u4, "aria2");
          }, "action")
        }
      ];
      LaunchButtons = /* @__PURE__ */ __name(({ url }) => /* @__PURE__ */ u3("div", { className: styles.flexWrap, children: launchers.map((l3) => {
        const h3 = l3.buildUrl?.(url);
        if (l3.action)
          return /* @__PURE__ */ u3("button", { className: styles.btn, onClick: () => l3.action(url), children: l3.label }, l3.key);
        if (h3)
          return /* @__PURE__ */ u3("a", { href: h3, target: "_blank", children: /* @__PURE__ */ u3("button", { className: styles.btn, children: l3.label }) }, l3.key);
        return null;
      }) }), "LaunchButtons");
      VideoSection = /* @__PURE__ */ __name(({ video, media, filenameBase }) => {
        if (!video?.bitRateList?.length) return null;
        const cu = getBestCoverUrl(media) || "#";
        return /* @__PURE__ */ u3(S, { children: [
          /* @__PURE__ */ u3("fieldset", { className: styles.fieldset, children: [
            /* @__PURE__ */ u3("legend", { className: styles.legend, children: "视频封面" }),
            /* @__PURE__ */ u3("div", { className: styles.flexRow, children: [
              /* @__PURE__ */ u3("img", { src: cu, className: styles.imgCover }),
              /* @__PURE__ */ u3("div", { children: [
                /* @__PURE__ */ u3("p", { children: [
                  /* @__PURE__ */ u3("strong", { children: "分辨率:" }),
                  " ",
                  video.width,
                  "x",
                  video.height
                ] }),
                /* @__PURE__ */ u3("div", { style: { marginTop: 10 }, children: [
                  /* @__PURE__ */ u3("a", { href: cu, target: "_blank", className: styles.btn, children: "新标签打开" }),
                  /* @__PURE__ */ u3("a", { href: cu, download: "cover_" + filenameBase + ".jpeg", className: styles.btn, children: "下载封面" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ u3("fieldset", { className: styles.fieldset, children: [
            /* @__PURE__ */ u3("legend", { className: styles.legend, children: "视频源" }),
            /* @__PURE__ */ u3(
              Table,
              {
                headers: ["清晰度", "分辨率", "编码", "FPS", "码率", "大小", "操作"],
                rows: video.bitRateList.map((v3) => [
                  v3.gearName,
                  v3.width + "x" + v3.height,
                  (v3.isH265 ? "H.265" : "H.264") + (v3.format === "dash" ? " dash" : ""),
                  v3.fps,
                  (v3.bitRate / 1e3).toFixed(0),
                  fmt.size(v3.dataSize),
                  v3.playApi ? /* @__PURE__ */ u3(LaunchButtons, { url: v3.playApi }) : "-"
                ])
              }
            )
          ] })
        ] });
      }, "VideoSection");
      ImageSection = /* @__PURE__ */ __name(({ images }) => {
        if (!images?.length) return null;
        return /* @__PURE__ */ u3("fieldset", { className: styles.fieldset, children: [
          /* @__PURE__ */ u3("legend", { className: styles.legend, children: [
            "图集 (",
            images.length,
            "P)"
          ] }),
          /* @__PURE__ */ u3(
            Table,
            {
              headers: ["#", "类型", "预览", "分辨率", "大小", "下载"],
              rows: images.map((img, i3) => {
                const iv = !!img.video;
                const th = iv ? img.video.originCoverUrlList?.[0] : img.urlList?.[0];
                const dl = iv ? img.video.playAddr?.[0]?.src : img.urlList?.[0];
                return [
                  i3 + 1,
                  iv ? "视频" : "图片",
                  /* @__PURE__ */ u3("img", { src: th, className: styles.img, loading: "lazy" }),
                  iv ? img.video.width + "x" + img.video.height : img.width + "x" + img.height,
                  iv ? fmt.size(img.video.dataSize) : "-",
                  dl ? /* @__PURE__ */ u3("a", { href: dl, target: "_blank", children: "链接" }) : "-"
                ];
              })
            }
          )
        ] });
      }, "ImageSection");
      MusicSection = /* @__PURE__ */ __name(({ music }) => {
        if (!music) return null;
        const du = music.playUrl?.urlList?.[0] || "";
        return /* @__PURE__ */ u3("fieldset", { className: styles.fieldset, children: [
          /* @__PURE__ */ u3("legend", { className: styles.legend, children: "背景音乐" }),
          /* @__PURE__ */ u3("div", { className: styles.flexRow, children: [
            /* @__PURE__ */ u3("img", { src: music.coverThumb?.urlList?.[0], style: { width: 60, height: 60, borderRadius: 4 }, loading: "lazy" }),
            /* @__PURE__ */ u3("div", { style: { flex: 1 }, children: [
              /* @__PURE__ */ u3(KeyValue, { label: "标题", children: music.title }),
              /* @__PURE__ */ u3(KeyValue, { label: "作者", children: music.author }),
              /* @__PURE__ */ u3(KeyValue, { label: "时长", children: [
                music.duration,
                "秒"
              ] }),
              du && /* @__PURE__ */ u3("a", { href: du, target: "_blank", className: styles.btn, children: "下载" }),
              du && /* @__PURE__ */ u3("audio", { controls: true, preload: "metadata", style: { width: "100%" }, children: /* @__PURE__ */ u3("source", { src: du }) })
            ] })
          ] })
        ] });
      }, "MusicSection");
      MediaTab = /* @__PURE__ */ __name(({ media, filenameBase }) => {
        if (!media) return /* @__PURE__ */ u3("div", { children: "无媒体信息" });
        return /* @__PURE__ */ u3("div", { children: [
          /* @__PURE__ */ u3(VideoSection, { media, video: media.video, filenameBase }),
          /* @__PURE__ */ u3(ImageSection, { images: media.images }),
          /* @__PURE__ */ u3(MusicSection, { music: media.music })
        ] });
      }, "MediaTab");
      AuthorTab = /* @__PURE__ */ __name(({ author }) => {
        if (!author) return /* @__PURE__ */ u3("div", { children: "无作者信息" });
        return /* @__PURE__ */ u3(S, { children: [
          /* @__PURE__ */ u3("div", { className: styles.authorHeader, children: [
            /* @__PURE__ */ u3("img", { src: author.avatarThumb?.urlList?.[0], style: { width: 80, height: 80, borderRadius: "50%" } }),
            /* @__PURE__ */ u3("div", { children: [
              /* @__PURE__ */ u3("h3", { children: author.nickname }),
              /* @__PURE__ */ u3("a", { href: "https://www.douyin.com/user/" + author.secUid, target: "_blank", className: styles.btn, children: "访问主页" })
            ] })
          ] }),
          /* @__PURE__ */ u3(KeyValue, { label: "认证", children: author.customVerify || author.enterpriseVerifyReason }),
          /* @__PURE__ */ u3(Copyable, { label: "UID", value: author.uid }),
          /* @__PURE__ */ u3(Copyable, { label: "SecUID", value: author.secUid }),
          /* @__PURE__ */ u3(KeyValue, { label: "粉丝数", children: fmt.num(author.followerCount) }),
          /* @__PURE__ */ u3(KeyValue, { label: "获赞数", children: fmt.num(author.totalFavorited) })
        ] });
      }, "AuthorTab");
      PostTab = /* @__PURE__ */ __name(({ media }) => /* @__PURE__ */ u3(S, { children: [
        /* @__PURE__ */ u3("fieldset", { className: styles.fieldset, children: [
          /* @__PURE__ */ u3("legend", { className: styles.legend, children: "描述" }),
          /* @__PURE__ */ u3("div", { style: { whiteSpace: "pre-wrap", lineHeight: 1.5 }, children: media.desc || "无描述" })
        ] }),
        /* @__PURE__ */ u3("fieldset", { className: styles.fieldset, children: [
          /* @__PURE__ */ u3("legend", { className: styles.legend, children: "数据统计" }),
          /* @__PURE__ */ u3(KeyValue, { label: "发布时间", children: fmt.ts(media.createTime) }),
          /* @__PURE__ */ u3(Copyable, { label: "分享链接", value: media.shareInfo?.shareUrl }),
          /* @__PURE__ */ u3(KeyValue, { label: "点赞", children: fmt.num(media.stats?.diggCount) }),
          /* @__PURE__ */ u3(KeyValue, { label: "评论", children: fmt.num(media.stats?.commentCount) }),
          /* @__PURE__ */ u3(KeyValue, { label: "收藏", children: fmt.num(media.stats?.collectCount) }),
          /* @__PURE__ */ u3(KeyValue, { label: "分享", children: fmt.num(media.stats?.shareCount) })
        ] }),
        /* @__PURE__ */ u3("fieldset", { className: styles.fieldset, children: [
          /* @__PURE__ */ u3("legend", { className: styles.legend, children: "ID信息" }),
          /* @__PURE__ */ u3(Copyable, { label: "Aweme ID", value: media.awemeId }),
          /* @__PURE__ */ u3(Copyable, { label: "Group ID", value: media.groupId })
        ] }),
        /* @__PURE__ */ u3("fieldset", { className: styles.fieldset, children: [
          /* @__PURE__ */ u3("legend", { className: styles.legend, children: "权限/状态" }),
          /* @__PURE__ */ u3(KeyValue, { label: "允许评论", children: media.awemeControl?.canComment ? "是" : "否" }),
          /* @__PURE__ */ u3(KeyValue, { label: "允许分享", children: media.awemeControl?.canShare ? "是" : "否" }),
          /* @__PURE__ */ u3(KeyValue, { label: "允许下载", children: media.download?.allowDownload ? "是" : "否" }),
          /* @__PURE__ */ u3(KeyValue, { label: "私密视频", children: media.isPrivate ? "是" : "否" })
        ] })
      ] }), "PostTab");
      JsonTab = /* @__PURE__ */ __name(({ data }) => {
        const ref = A2(null);
        const sel = /* @__PURE__ */ __name(() => {
          const r3 = document.createRange();
          r3.selectNodeContents(ref.current);
          const s5 = window.getSelection();
          s5.removeAllRanges();
          s5.addRange(r3);
        }, "sel");
        return /* @__PURE__ */ u3("fieldset", { style: { overflow: "hidden", border: "1px solid #ddd", borderRadius: "4px", padding: 10, maxHeight: "100%" }, children: [
          /* @__PURE__ */ u3("legend", { className: styles.legend, children: [
            "原始数据",
            /* @__PURE__ */ u3("button", { onClick: sel, className: styles.btn, children: "全选" }),
            /* @__PURE__ */ u3("button", { onClick: () => console.log(data), className: styles.btn, children: "Console Log" })
          ] }),
          /* @__PURE__ */ u3("pre", { className: styles.jsonPre, children: /* @__PURE__ */ u3("code", { ref, children: JSON.stringify(data, null, 2) }) })
        ] });
      }, "JsonTab");
      DanmakuTab = /* @__PURE__ */ __name(() => {
        const [list, setList] = d2([]);
        const [loading, setLoading] = d2(false);
        const fetchDm = /* @__PURE__ */ __name(() => {
          try {
            setLoading(true);
            const p3 = window.player;
            if (!p3?.danmaku?.main) {
              setList([]);
              return;
            }
            const raw = p3.danmaku.main.data || [];
            const f4 = raw.map((item, i3) => ({ index: i3 + 1, startTimeStr: msToAssTime(item.start), text: item.text || "", uid: item.user_id || 0, score: item.score || 0 }));
            setList(f4);
          } catch (e3) {
            console.error(e3);
            setList([]);
          } finally {
            setLoading(false);
          }
        }, "fetchDm");
        h2(() => {
          fetchDm();
        }, []);
        const copyAll = /* @__PURE__ */ __name(() => {
          navigator.clipboard.writeText(list.map((i3) => i3.text).join("\n"));
          alert("已复制" + list.length + "条");
        }, "copyAll");
        return /* @__PURE__ */ u3("div", { className: styles.danmakuContainer, children: [
          /* @__PURE__ */ u3("div", { className: styles.danmakuHeader, children: [
            /* @__PURE__ */ u3("h4", { className: styles.danmakuTitle, children: [
              "弹幕列表(",
              list.length,
              "条)"
            ] }),
            /* @__PURE__ */ u3("div", { className: styles.danmakuButtonGroup, children: [
              /* @__PURE__ */ u3("button", { className: styles.btn, onClick: fetchDm, disabled: loading, children: "刷新" }),
              /* @__PURE__ */ u3("button", { className: styles.btn, onClick: copyAll, disabled: list.length === 0, children: "复制全部" })
            ] })
          ] }),
          loading && /* @__PURE__ */ u3("div", { className: styles.danmakuEmpty, children: "加载中..." }),
          !loading && list.length === 0 && /* @__PURE__ */ u3("div", { className: styles.danmakuEmpty, children: "暂无弹幕" }),
          !loading && list.length > 0 && /* @__PURE__ */ u3("div", { className: styles.danmakuTableWrapper, children: /* @__PURE__ */ u3("table", { className: styles.table, children: [
            /* @__PURE__ */ u3("thead", { children: /* @__PURE__ */ u3("tr", { children: [
              /* @__PURE__ */ u3("th", { className: styles.th, children: "#" }),
              /* @__PURE__ */ u3("th", { className: styles.th, children: "时间" }),
              /* @__PURE__ */ u3("th", { className: styles.th, children: "UID" }),
              /* @__PURE__ */ u3("th", { className: styles.th, children: "内容" }),
              /* @__PURE__ */ u3("th", { className: styles.th, children: "评分" }),
              /* @__PURE__ */ u3("th", { className: styles.th, children: "操作" })
            ] }) }),
            /* @__PURE__ */ u3("tbody", { children: list.map((item) => /* @__PURE__ */ u3("tr", { children: [
              /* @__PURE__ */ u3("td", { className: styles.td, children: item.index }),
              /* @__PURE__ */ u3("td", { className: styles.td, children: item.startTimeStr }),
              /* @__PURE__ */ u3("td", { className: styles.td, children: item.uid }),
              /* @__PURE__ */ u3("td", { className: styles.td, children: item.text }),
              /* @__PURE__ */ u3("td", { className: styles.td, children: item.score.toFixed(2) }),
              /* @__PURE__ */ u3("td", { className: styles.td, children: /* @__PURE__ */ u3("button", { className: styles.btn, onClick: () => navigator.clipboard.writeText(item.text), children: "复制" }) })
            ] }, item.index)) })
          ] }) })
        ] });
      }, "DanmakuTab");
      tabs = [
        { id: "media", title: "媒体资源", Comp: MediaTab },
        { id: "author", title: "作者信息", Comp: AuthorTab },
        { id: "post", title: "作品信息", Comp: PostTab },
        { id: "danmaku", title: "弹幕列表", Comp: DanmakuTab },
        { id: "json", title: "JSON", Comp: JsonTab }
      ];
      MediaDetailModalApp = /* @__PURE__ */ __name(({ media, filenameBase }) => {
        const [tab, setTab] = d2("media");
        const t3 = tabs.find((t4) => t4.id === tab);
        const props = /* @__PURE__ */ __name((id) => {
          switch (id) {
            case "author":
              return { author: media.authorInfo };
            case "json":
              return { data: media };
            default:
              return { media, filenameBase };
          }
        }, "props");
        const Comp = t3.Comp;
        return /* @__PURE__ */ u3("div", { className: styles.container, children: [
          /* @__PURE__ */ u3("nav", { className: styles.nav, children: tabs.map((t4) => /* @__PURE__ */ u3("button", { onClick: () => setTab(t4.id), className: navBtnClass(tab === t4.id), children: t4.title }, t4.id)) }),
          /* @__PURE__ */ u3("div", { className: styles.content, children: /* @__PURE__ */ u3(Comp, { ...props(tab) }) })
        ] });
      }, "MediaDetailModalApp");
    }
  });

  // src/ui/modals/ConfigModal.tsx
  var ConfigModal_exports = {};
  __export(ConfigModal_exports, {
    ConfigModalApp: () => ConfigModalApp
  });
  var cssFn, c3, navCls, toShortId, mockMedia, previewFilename, previewDirPath, SettingsTab, DownloaderConfigTab, HistoryTab, tabs2, ConfigModalApp;
  var init_ConfigModal = __esm({
    "src/ui/modals/ConfigModal.tsx"() {
      "use strict";
      init_hooks_module();
      init_css_in_js();
      init_theme();
      init_DownloadHistory();
      init_format();
      init_Config();
      init_jsxRuntime_module();
      cssFn = createCSS();
      c3 = {
        container: cssFn({
          display: "flex",
          flexDirection: "column",
          height: "70vh",
          width: "600px",
          overflow: "hidden",
          background: theme.colors.bgOverlay,
          backdropFilter: theme.backdropBlur,
          color: theme.colors.textPrimary,
          borderRadius: theme.borderRadius.lg
        }),
        header: cssFn({
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          borderBottom: "1px solid " + theme.colors.borderLight,
          background: theme.colors.bgNav,
          flexShrink: 0
        }),
        nav: cssFn({ display: "flex", flexShrink: 0 }),
        actions: cssFn({ display: "flex", alignItems: "center", gap: theme.spacing.sm, padding: theme.spacing.sm + " " + theme.spacing.md }),
        navBtnBase: cssFn({
          padding: theme.spacing.md + " " + theme.spacing.xl,
          border: "none",
          background: "transparent",
          cursor: "pointer",
          borderBottom: "2px solid transparent",
          fontWeight: "normal",
          color: theme.colors.textSecondary,
          transition: "0.2s",
          "&:hover": { background: "rgba(255,255,255,0.05)" }
        }),
        navBtnActive: cssFn({ background: "rgba(255,255,255,0.08)", borderBottomColor: theme.colors.primary, fontWeight: "bold", color: theme.colors.primary }),
        content: cssFn({ flexGrow: 1, overflowY: "auto", padding: theme.spacing.xl }),
        fieldset: cssFn({
          border: "1px solid " + theme.colors.borderMedium,
          borderRadius: theme.borderRadius.md,
          marginBottom: theme.spacing.xl,
          padding: theme.spacing.lg,
          background: theme.colors.bgFieldset
        }),
        legend: cssFn({
          fontWeight: "bold",
          padding: "0 " + theme.spacing.sm,
          color: "rgba(255,255,255,0.9)",
          background: "rgba(18,18,20,0.8)",
          borderRadius: theme.borderRadius.full,
          fontSize: theme.fontSize.sm
        }),
        row: cssFn({ display: "flex", padding: theme.spacing.sm + " 0", fontSize: theme.fontSize.sm, borderBottom: "1px solid rgba(255,255,255,0.08)", alignItems: "center" }),
        label: cssFn({ width: "120px", flexShrink: 0, color: theme.colors.textMuted, fontWeight: 600 }),
        value: cssFn({ flexGrow: 1, color: theme.colors.textSecondary, wordBreak: "break-all" }),
        btn: cssFn({
          padding: theme.spacing.xs + " " + theme.spacing.md,
          fontSize: theme.fontSize.xs,
          cursor: "pointer",
          border: "1px solid rgba(255,255,255,0.3)",
          background: "rgba(255,255,255,0.08)",
          color: theme.colors.textPrimary,
          borderRadius: theme.borderRadius.full,
          marginLeft: theme.spacing.sm,
          transition: "0.2s",
          whiteSpace: "nowrap"
        }),
        btnDanger: cssFn({
          padding: theme.spacing.xs + " " + theme.spacing.md,
          fontSize: theme.fontSize.xs,
          cursor: "pointer",
          border: "1px solid #ff4d4f",
          background: "rgba(255,77,79,0.15)",
          color: "#ff4d4f",
          borderRadius: theme.borderRadius.full,
          transition: "0.2s"
        }),
        select: cssFn({
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: theme.colors.textPrimary,
          borderRadius: theme.borderRadius.sm,
          padding: theme.spacing.xs + " " + theme.spacing.sm,
          fontSize: theme.fontSize.xs,
          "& option": {
            background: "#2c2c2e",
            color: theme.colors.textPrimary,
            padding: theme.spacing.sm
          }
        }),
        input: cssFn({
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          color: theme.colors.textPrimary,
          borderRadius: theme.borderRadius.sm,
          padding: theme.spacing.sm + " " + theme.spacing.md,
          fontSize: theme.fontSize.sm,
          lineHeight: "20px",
          flexGrow: 1,
          minWidth: 0,
          "&:focus": { borderColor: theme.colors.primary }
        }),
        table: cssFn({ width: "100%", borderCollapse: "collapse", fontSize: theme.fontSize.xs }),
        th: cssFn({ textAlign: "left", padding: theme.spacing.sm, borderBottom: "1px solid " + theme.colors.borderMedium, color: theme.colors.textMuted, fontWeight: 600 }),
        td: cssFn({ padding: theme.spacing.sm, borderBottom: "1px solid " + theme.colors.borderLight, verticalAlign: "top" }),
        range: cssFn({ flexGrow: 1, accentColor: theme.colors.primary, cursor: "pointer" }),
        rangeValue: cssFn({ minWidth: "32px", textAlign: "right", fontSize: theme.fontSize.xs, color: theme.colors.textSecondary }),
        flexBetween: cssFn({ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: theme.spacing.sm }),
        hintText: cssFn({ fontSize: "11px", color: theme.colors.textDim, marginTop: theme.spacing.xs, padding: theme.spacing.xs + " 0", lineHeight: 1.5 }),
        codeBlock: cssFn({
          background: "rgba(0,0,0,0.3)",
          borderRadius: theme.borderRadius.sm,
          padding: "4px " + theme.spacing.sm,
          fontSize: "11px",
          color: theme.colors.textSecondary,
          fontFamily: "monospace",
          wordBreak: "break-all"
        }),
        hr: cssFn({ border: "none", borderTop: "1px solid " + theme.colors.borderLight, margin: theme.spacing.sm + " 0" }),
        btnSave: cssFn({
          padding: theme.spacing.xs + " " + theme.spacing.md,
          fontSize: theme.fontSize.xs,
          cursor: "pointer",
          border: "1px solid rgba(255,255,255,0.3)",
          background: "rgba(255,255,255,0.08)",
          color: theme.colors.textPrimary,
          borderRadius: theme.borderRadius.full,
          marginLeft: theme.spacing.sm,
          transition: "0.2s",
          whiteSpace: "nowrap"
        }),
        btnSaveDirty: cssFn({
          padding: theme.spacing.xs + " " + theme.spacing.md,
          fontSize: theme.fontSize.xs,
          cursor: "pointer",
          border: "2px solid " + theme.colors.primary,
          background: "rgba(64,150,255,0.2)",
          color: theme.colors.primary,
          borderRadius: theme.borderRadius.full,
          marginLeft: theme.spacing.sm,
          transition: "0.2s",
          whiteSpace: "nowrap",
          fontWeight: "bold"
        })
      };
      navCls = /* @__PURE__ */ __name((a3) => a3 ? c3.navBtnBase + " " + c3.navBtnActive : c3.navBtnBase, "navCls");
      toShortId = /* @__PURE__ */ __name((bigintStr) => {
        try {
          return BigInt(bigintStr).toString(36);
        } catch {
          return bigintStr;
        }
      }, "toShortId");
      mockMedia = {
        authorInfo: { nickname: "示例用户" },
        awemeId: "1234567890123456789",
        desc: "这是一个示例视频描述 #tag1 #tag2",
        textExtra: [{ hashtagName: "tag1" }, { hashtagName: "tag2" }],
        authorUserId: "12345",
        createTime: Date.now() / 1e3
      };
      previewFilename = /* @__PURE__ */ __name((template, maxLen) => {
        const {
          authorInfo: { nickname },
          awemeId,
          desc,
          textExtra
        } = mockMedia;
        const short_id = toShortId(awemeId);
        const tag_list = textExtra?.map((x2) => x2.hashtagName).filter(Boolean) || [];
        const tags = tag_list.map((x2) => "#" + x2).join("_");
        let rawDesc = desc || "";
        tag_list.forEach((t3) => {
          rawDesc = rawDesc.replace(new RegExp("#" + t3 + "\\s*", "g"), "");
        });
        rawDesc = rawDesc.trim().replace(/[#/?<>\\:*|":]/g, "");
        const now_date = /* @__PURE__ */ new Date();
        const create_date = new Date(Number(mockMedia.createTime) * 1e3);
        const ctx = {
          nickname,
          short_id,
          tags,
          desc: rawDesc,
          aweme_id: awemeId,
          media: mockMedia,
          author_info: mockMedia.authorInfo,
          uid: mockMedia.authorUserId,
          music_name: "",
          now_date,
          create_date,
          now_YYYYMMDD: formatDate(now_date, "YYYYMMDD"),
          now_YYYYMMDD_HHmmss: formatDate(now_date, "YYYYMMDD_HHmmss"),
          create_date_YYYYMMDD: formatDate(create_date, "YYYYMMDD"),
          create_date_YYYYMMDD_HHmmss: formatDate(create_date, "YYYYMMDD_HHmmss")
        };
        let base;
        try {
          base = runInContext(ctx, template);
        } catch {
          base = runInContext(ctx, "`${nickname}_${short_id}_${tags}_${desc}`");
        }
        if (base.length > maxLen) base = base.slice(0, maxLen);
        return base.replace(/\./g, "_");
      }, "previewFilename");
      previewDirPath = /* @__PURE__ */ __name((template) => {
        if (!template) return "";
        const {
          authorInfo: { nickname },
          awemeId,
          desc,
          authorUserId
        } = mockMedia;
        const uid = authorUserId;
        const userDir = `${uid}_${nickname}`.replace(/[\\/:*?"<>|\x00-\x1f\x7f]/g, "_");
        const ctx = {
          user_dir: userDir,
          nickname,
          uid,
          aweme_id: awemeId,
          desc,
          filename: "example.mp4",
          filename_base: "example",
          media: mockMedia
        };
        let resolved;
        try {
          resolved = runInContext(ctx, template);
        } catch {
          resolved = "(无法解析)";
        }
        return typeof resolved === "string" ? resolved : String(resolved);
      }, "previewDirPath");
      SettingsTab = /* @__PURE__ */ __name(({ cfg, onChange, onResetDefaults }) => {
        const filenamePreview = T2(() => previewFilename(cfg.filename_template, cfg.filename_max_length), [cfg.filename_template, cfg.filename_max_length]);
        const update = /* @__PURE__ */ __name((mutate) => {
          mutate();
          onChange();
        }, "update");
        return /* @__PURE__ */ u3("div", { children: [
          /* @__PURE__ */ u3("fieldset", { className: c3.fieldset, children: [
            /* @__PURE__ */ u3("legend", { className: c3.legend, children: "文件命名" }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "文件名模板" }),
              /* @__PURE__ */ u3("input", { className: c3.input, value: cfg.filename_template, onChange: (e3) => update(() => cfg.filename_template = e3.target.value) })
            ] }),
            /* @__PURE__ */ u3("div", { className: c3.hintText, children: [
              "可用变量：",
              /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: "nickname" }),
              " ",
              /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: "short_id" }),
              " ",
              /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: "tags" }),
              " ",
              /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: "desc" }),
              " ",
              /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: "aweme_id" }),
              " ",
              /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: "create_date_YYYYMMDD" }),
              " ",
              /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: "now_YYYYMMDD_HHmmss" })
            ] }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "文件名长度" }),
              /* @__PURE__ */ u3(
                "input",
                {
                  className: c3.input,
                  type: "number",
                  value: cfg.filename_max_length,
                  onChange: (e3) => update(() => cfg.filename_max_length = Number(e3.target.value))
                }
              )
            ] }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "预览" }),
              /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: filenamePreview || "(无法预览)" })
            ] })
          ] }),
          /* @__PURE__ */ u3("fieldset", { className: c3.fieldset, children: [
            /* @__PURE__ */ u3("legend", { className: c3.legend, children: "视频下载设置" }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "分辨率策略" }),
              /* @__PURE__ */ u3("select", { className: c3.select, value: cfg.download_video_mode, onChange: (e3) => update(() => cfg.download_video_mode = e3.target.value), children: [
                /* @__PURE__ */ u3("option", { value: "default", children: "默认" }),
                /* @__PURE__ */ u3("option", { value: "max", children: "最高清晰度" }),
                /* @__PURE__ */ u3("option", { value: "min", children: "最低清晰度" }),
                /* @__PURE__ */ u3("option", { value: "1080P", children: "1080P" }),
                /* @__PURE__ */ u3("option", { value: "720P", children: "720P" }),
                /* @__PURE__ */ u3("option", { value: "540P", children: "540P" }),
                /* @__PURE__ */ u3("option", { value: "360P", children: "360P" }),
                /* @__PURE__ */ u3("option", { value: "2K", children: "2K" }),
                /* @__PURE__ */ u3("option", { value: "4K", children: "4K" }),
                /* @__PURE__ */ u3("option", { value: "max_file", children: "最大文件" }),
                /* @__PURE__ */ u3("option", { value: "min_file", children: "最小文件" })
              ] })
            ] }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "编码偏好" }),
              /* @__PURE__ */ u3("select", { className: c3.select, value: cfg.video_download_codecs, onChange: (e3) => update(() => cfg.video_download_codecs = e3.target.value), children: [
                /* @__PURE__ */ u3("option", { value: "default", children: "默认" }),
                /* @__PURE__ */ u3("option", { value: "h264", children: "H.264" }),
                /* @__PURE__ */ u3("option", { value: "h265", children: "H.265" }),
                /* @__PURE__ */ u3("option", { value: "h264_prefer", children: "优先H.264" }),
                /* @__PURE__ */ u3("option", { value: "h265_prefer", children: "优先H.265" })
              ] })
            ] }),
            /* @__PURE__ */ u3("div", { className: c3.hintText, children: "注意：实际下载时根据可用地址匹配，并非所有视频都提供所有编码。" })
          ] }),
          /* @__PURE__ */ u3("fieldset", { className: c3.fieldset, children: [
            /* @__PURE__ */ u3("legend", { className: c3.legend, children: "重置配置" }),
            /* @__PURE__ */ u3("div", { className: c3.hintText, children: "重置会将当前表单所有配置恢复为默认值，保存后覆盖现有全部配置。" }),
            /* @__PURE__ */ u3("button", { className: c3.btnDanger, onClick: onResetDefaults, children: "重置配置为默认" })
          ] })
        ] });
      }, "SettingsTab");
      DownloaderConfigTab = /* @__PURE__ */ __name(({ cfg, onChange }) => {
        const [dlType, setDlType] = d2(cfg.using_downloader);
        const [, forceRender] = d2(0);
        h2(() => {
          setDlType(cfg.using_downloader);
        }, [cfg.using_downloader]);
        const dc = cfg.downloader_config || {};
        const notify = /* @__PURE__ */ __name(() => {
          forceRender((v3) => v3 + 1);
          onChange();
        }, "notify");
        const setField = /* @__PURE__ */ __name((path, val) => {
          val = val.replace(/\\/g, "/");
          const parts = path.split(".");
          let obj = dc[dlType];
          if (!obj) {
            obj = {};
            dc[dlType] = obj;
          }
          for (let i3 = 0; i3 < parts.length - 1; i3++) {
            if (typeof obj[parts[i3]] !== "object") obj[parts[i3]] = {};
            obj = obj[parts[i3]];
          }
          obj[parts[parts.length - 1]] = val;
          cfg.downloader_config = { ...dc };
          notify();
        }, "setField");
        const dcfg = dc[dlType] || {};
        const renderBrowserImageFields = /* @__PURE__ */ __name(() => /* @__PURE__ */ u3(S, { children: [
          /* @__PURE__ */ u3("div", { className: c3.hintText, children: "以下图片转码/压缩配置仅在“浏览器下载”时生效。使用外部下载器时，脚本只能把原图地址交给下载器，无法自动转码或压缩。" }),
          /* @__PURE__ */ u3("div", { className: c3.row, children: [
            /* @__PURE__ */ u3("span", { className: c3.label, children: "转码格式" }),
            /* @__PURE__ */ u3(
              "select",
              {
                className: c3.select,
                value: cfg.image_convert_codecs,
                onChange: (e3) => {
                  cfg.image_convert_codecs = e3.target.value;
                  notify();
                },
                children: [
                  /* @__PURE__ */ u3("option", { value: "default", children: "默认" }),
                  /* @__PURE__ */ u3("option", { value: "png", children: "PNG" }),
                  /* @__PURE__ */ u3("option", { value: "jpg", children: "JPG" }),
                  /* @__PURE__ */ u3("option", { value: "webp", children: "WebP" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ u3("div", { className: c3.row, children: [
            /* @__PURE__ */ u3("span", { className: c3.label, children: "尺寸限制" }),
            /* @__PURE__ */ u3(
              "select",
              {
                className: c3.select,
                value: cfg.image_resize_codecs,
                onChange: (e3) => {
                  cfg.image_resize_codecs = e3.target.value;
                  notify();
                },
                children: [
                  /* @__PURE__ */ u3("option", { value: "default", children: "默认" }),
                  /* @__PURE__ */ u3("option", { value: "2k_max", children: "2K(2048px)" }),
                  /* @__PURE__ */ u3("option", { value: "1k_max", children: "1K(1024px)" }),
                  /* @__PURE__ */ u3("option", { value: "960_max", children: "960px" }),
                  /* @__PURE__ */ u3("option", { value: "640_max", children: "640px" }),
                  /* @__PURE__ */ u3("option", { value: "512_max", children: "512px" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ u3("div", { className: c3.flexBetween, children: [
            /* @__PURE__ */ u3("span", { className: c3.label, children: "图片质量" }),
            /* @__PURE__ */ u3("span", { className: c3.rangeValue, children: [
              cfg.image_quality,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ u3(
            "input",
            {
              className: c3.range,
              type: "range",
              min: "1",
              max: "100",
              value: cfg.image_quality,
              onChange: (e3) => {
                cfg.image_quality = Number(e3.target.value);
                notify();
              }
            }
          ),
          /* @__PURE__ */ u3("div", { className: c3.hintText, children: "压缩率仅当转码或尺寸压缩开启时生效，推荐 60% 以上。" })
        ] }), "renderBrowserImageFields");
        const renderDirFields = /* @__PURE__ */ __name(() => /* @__PURE__ */ u3(S, { children: [
          /* @__PURE__ */ u3("div", { className: c3.row, children: [
            /* @__PURE__ */ u3("span", { className: c3.label, children: "视频目录" }),
            /* @__PURE__ */ u3("input", { className: c3.input, value: dcfg.dir?.video || "", onChange: (e3) => setField("dir.video", e3.target.value) })
          ] }),
          /* @__PURE__ */ u3("div", { className: c3.row, children: [
            /* @__PURE__ */ u3("span", { className: c3.label, children: "图片目录" }),
            /* @__PURE__ */ u3("input", { className: c3.input, value: dcfg.dir?.image || "", onChange: (e3) => setField("dir.image", e3.target.value) })
          ] }),
          /* @__PURE__ */ u3("div", { className: c3.row, children: [
            /* @__PURE__ */ u3("span", { className: c3.label, children: "其他目录" }),
            /* @__PURE__ */ u3("input", { className: c3.input, value: dcfg.dir?.other || "", onChange: (e3) => setField("dir.other", e3.target.value) })
          ] }),
          /* @__PURE__ */ u3("div", { className: c3.hintText, children: [
            "可用变量：",
            /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: "${user_dir}" }),
            " ",
            /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: "${nickname}" }),
            " ",
            /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: "${uid}" }),
            " ",
            /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: "${aweme_id}" }),
            " ",
            /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: "${desc}" }),
            " ",
            /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: "${filename}" }),
            " ",
            /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: "${filename_base}" }),
            /* @__PURE__ */ u3("br", {}),
            "使用模板字符串语法，如：",
            /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: "`./douyin/${user_dir}/videos`" })
          ] }),
          /* @__PURE__ */ u3("div", { className: c3.hintText, children: [
            "预览视频目录：",
            /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: previewDirPath(dcfg.dir?.video || "") }),
            /* @__PURE__ */ u3("br", {}),
            "预览图片目录：",
            /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: previewDirPath(dcfg.dir?.image || "") }),
            /* @__PURE__ */ u3("br", {}),
            "预览其他目录：",
            /* @__PURE__ */ u3("span", { className: c3.codeBlock, children: previewDirPath(dcfg.dir?.other || "") })
          ] })
        ] }), "renderDirFields");
        return /* @__PURE__ */ u3("div", { children: [
          /* @__PURE__ */ u3("fieldset", { className: c3.fieldset, children: [
            /* @__PURE__ */ u3("legend", { className: c3.legend, children: "下载器" }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "类型" }),
              /* @__PURE__ */ u3(
                "select",
                {
                  className: c3.select,
                  value: dlType,
                  onChange: (e3) => {
                    const next = e3.target.value;
                    setDlType(next);
                    cfg.using_downloader = next;
                    notify();
                  },
                  children: [
                    /* @__PURE__ */ u3("option", { value: "chrome", children: "下载管理器（推荐）" }),
                    /* @__PURE__ */ u3("option", { value: "browser", children: "浏览器（可转码）" }),
                    /* @__PURE__ */ u3("option", { value: "idm", children: "IDM" }),
                    /* @__PURE__ */ u3("option", { value: "aria2", children: "Aria2" }),
                    /* @__PURE__ */ u3("option", { value: "bc", children: "BitComet" }),
                    /* @__PURE__ */ u3("option", { value: "abdm", children: "AB Download Manager" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ u3("div", { className: c3.hintText, children: "切换下载器会立即显示对应配置，保存后才会用于实际下载。使用外部下载器时，图片压缩转码不可用。" })
          ] }),
          dlType === "chrome" && /* @__PURE__ */ u3("fieldset", { className: c3.fieldset, children: [
            /* @__PURE__ */ u3("legend", { className: c3.legend, children: "下载管理器" }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "保存子目录" }),
              /* @__PURE__ */ u3("input", { className: c3.input, value: dcfg.dir ?? "", onChange: (e3) => setField("dir", e3.target.value) })
            ] }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "同时下载" }),
              /* @__PURE__ */ u3(
                "input",
                {
                  className: c3.input,
                  type: "number",
                  min: "1",
                  max: "10",
                  value: dcfg.concurrency ?? 3,
                  onChange: (e3) => setField("concurrency", e3.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ u3("div", { className: c3.hintText, children: [
              "下载交给浏览器下载管理器接管，不占内存、支持断点续传，可以保存到下载目录下的指定子目录。",
              /* @__PURE__ */ u3("br", {}),
              "开启图片转码或压缩时会自动改用“浏览器”流程。"
            ] })
          ] }),
          dlType === "browser" && /* @__PURE__ */ u3("fieldset", { className: c3.fieldset, children: [
            /* @__PURE__ */ u3("legend", { className: c3.legend, children: "浏览器下载（图片转码压缩）" }),
            renderBrowserImageFields()
          ] }),
          dlType === "abdm" && /* @__PURE__ */ u3("fieldset", { className: c3.fieldset, children: [
            /* @__PURE__ */ u3("legend", { className: c3.legend, children: "AB Download Manager" }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "Domain" }),
              /* @__PURE__ */ u3("input", { className: c3.input, value: dcfg.domain || "", onChange: (e3) => setField("domain", e3.target.value) })
            ] }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "Port" }),
              /* @__PURE__ */ u3("input", { className: c3.input, value: dcfg.port || "", onChange: (e3) => setField("port", e3.target.value) })
            ] }),
            renderDirFields()
          ] }),
          dlType === "aria2" && /* @__PURE__ */ u3("fieldset", { className: c3.fieldset, children: [
            /* @__PURE__ */ u3("legend", { className: c3.legend, children: "Aria2" }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "Domain" }),
              /* @__PURE__ */ u3("input", { className: c3.input, value: dcfg.domain || "", onChange: (e3) => setField("domain", e3.target.value) })
            ] }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "Port" }),
              /* @__PURE__ */ u3("input", { className: c3.input, value: dcfg.port || "", onChange: (e3) => setField("port", e3.target.value) })
            ] }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "Path" }),
              /* @__PURE__ */ u3("input", { className: c3.input, value: dcfg.path || "", onChange: (e3) => setField("path", e3.target.value) })
            ] }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "Token" }),
              /* @__PURE__ */ u3("input", { className: c3.input, value: dcfg.token || "", onChange: (e3) => setField("token", e3.target.value) })
            ] }),
            renderDirFields()
          ] }),
          dlType === "idm" && /* @__PURE__ */ u3("fieldset", { className: c3.fieldset, children: [
            /* @__PURE__ */ u3("legend", { className: c3.legend, children: "IDM" }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "ID" }),
              /* @__PURE__ */ u3("input", { className: c3.input, value: dcfg.id || "", onChange: (e3) => setField("id", e3.target.value) })
            ] })
          ] }),
          dlType === "bc" && /* @__PURE__ */ u3("fieldset", { className: c3.fieldset, children: [
            /* @__PURE__ */ u3("legend", { className: c3.legend, children: "BitComet" }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "Domain" }),
              /* @__PURE__ */ u3("input", { className: c3.input, value: dcfg.domain || "", onChange: (e3) => setField("domain", e3.target.value) })
            ] }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "Port" }),
              /* @__PURE__ */ u3("input", { className: c3.input, value: dcfg.port || "", onChange: (e3) => setField("port", e3.target.value) })
            ] }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "Path" }),
              /* @__PURE__ */ u3("input", { className: c3.input, value: dcfg.path || "", onChange: (e3) => setField("path", e3.target.value) })
            ] }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "Auth Name" }),
              /* @__PURE__ */ u3("input", { className: c3.input, value: dcfg.authName || "", onChange: (e3) => setField("authName", e3.target.value) })
            ] }),
            /* @__PURE__ */ u3("div", { className: c3.row, children: [
              /* @__PURE__ */ u3("span", { className: c3.label, children: "Auth Pass" }),
              /* @__PURE__ */ u3("input", { className: c3.input, type: "password", value: dcfg.authPass || "", onChange: (e3) => setField("authPass", e3.target.value) })
            ] }),
            renderDirFields()
          ] }),
          /* @__PURE__ */ u3("div", { className: c3.hintText, children: "选择下载器后填写对应配置；浏览器下载不需要额外连接配置，但可使用上面的图片转码/压缩设置。" })
        ] });
      }, "DownloaderConfigTab");
      HistoryTab = /* @__PURE__ */ __name(() => {
        const [hist, setHist] = d2([]);
        h2(() => {
          setHist(DownloadHistory.get());
        }, []);
        const clearHist = /* @__PURE__ */ __name(() => {
          if (!confirm("确认清空所有下载记录？")) return;
          DownloadHistory.clear();
          setHist([]);
        }, "clearHist");
        return /* @__PURE__ */ u3("div", { children: [
          /* @__PURE__ */ u3("div", { className: c3.flexBetween, style: { marginBottom: theme.spacing.md }, children: [
            /* @__PURE__ */ u3("span", { style: { fontWeight: "bold", fontSize: theme.fontSize.sm }, children: "下载记录（最多50条）" }),
            hist.length > 0 && /* @__PURE__ */ u3("button", { className: c3.btnDanger, onClick: clearHist, children: "清空" })
          ] }),
          hist.length === 0 ? /* @__PURE__ */ u3("div", { style: { textAlign: "center", padding: theme.spacing.xl, color: theme.colors.textDim }, children: "暂无下载记录" }) : /* @__PURE__ */ u3("table", { className: c3.table, children: [
            /* @__PURE__ */ u3("thead", { children: /* @__PURE__ */ u3("tr", { children: [
              /* @__PURE__ */ u3("th", { className: c3.th, children: "描述" }),
              /* @__PURE__ */ u3("th", { className: c3.th, children: "分享链接" }),
              /* @__PURE__ */ u3("th", { className: c3.th, children: "下载时间" })
            ] }) }),
            /* @__PURE__ */ u3("tbody", { children: hist.map((h3, i3) => /* @__PURE__ */ u3("tr", { children: [
              /* @__PURE__ */ u3("td", { className: c3.td, children: h3.desc || "(无描述)" }),
              /* @__PURE__ */ u3("td", { className: c3.td, children: h3.shareUrl ? /* @__PURE__ */ u3("a", { href: h3.shareUrl, target: "_blank", rel: "noopener noreferrer", style: { color: theme.colors.primary }, children: "链接" }) : "-" }),
              /* @__PURE__ */ u3("td", { className: c3.td, children: h3.downloadTime ? new Date(h3.downloadTime).toLocaleString() : "-" })
            ] }, i3)) })
          ] })
        ] });
      }, "HistoryTab");
      tabs2 = [
        { id: "settings", title: "基本设置", Comp: SettingsTab },
        { id: "downloader", title: "下载器配置", Comp: DownloaderConfigTab },
        { id: "history", title: "下载历史", Comp: HistoryTab }
      ];
      ConfigModalApp = /* @__PURE__ */ __name(({ config, modal }) => {
        const [tab, setTab] = d2("settings");
        const [cfg, setCfg] = d2(() => config.clone_features());
        const [saveVersion, setSaveVersion] = d2(0);
        const originalRef = T2(() => JSON.stringify(config.clone_features()), [config, saveVersion]);
        h2(() => {
          const cloned = config.clone_features();
          setCfg(cloned);
        }, [config]);
        const dirty = T2(() => JSON.stringify(cfg) !== originalRef, [cfg, originalRef]);
        h2(() => {
          if (modal) {
            modal.onBeforeClose = dirty ? () => confirm("有未保存的修改，确定放弃？") : void 0;
          }
        }, [dirty, modal]);
        const onSave = /* @__PURE__ */ __name(() => {
          config.features = cfg;
          config.save();
          setSaveVersion((v3) => v3 + 1);
          alert("配置已保存");
        }, "onSave");
        const onEdit = /* @__PURE__ */ __name(() => setCfg({ ...cfg }), "onEdit");
        const onCancel = /* @__PURE__ */ __name(() => setCfg(config.clone_features()), "onCancel");
        const onResetDefaults = /* @__PURE__ */ __name(() => {
          if (!confirm("确定重置为默认配置？此操作会覆盖当前所有配置，包括下载器、图片、文件命名等。")) return;
          setCfg(Config.default_features());
        }, "onResetDefaults");
        const t3 = tabs2.find((t4) => t4.id === tab);
        const props = /* @__PURE__ */ __name((id) => {
          if (id === "settings") return { cfg, onChange: onEdit, onResetDefaults };
          if (id === "downloader") return { cfg, onChange: onEdit };
          return {};
        }, "props");
        const Comp = t3.Comp;
        return /* @__PURE__ */ u3("div", { className: c3.container, children: [
          /* @__PURE__ */ u3("div", { className: c3.header, children: [
            /* @__PURE__ */ u3("nav", { className: c3.nav, children: tabs2.map((t4) => /* @__PURE__ */ u3("button", { onClick: () => setTab(t4.id), className: navCls(tab === t4.id), children: t4.title }, t4.id)) }),
            dirty && /* @__PURE__ */ u3("div", { className: c3.actions, children: [
              /* @__PURE__ */ u3("button", { className: c3.btnDanger, onClick: onCancel, children: "取消" }),
              /* @__PURE__ */ u3("button", { className: c3.btnSaveDirty, onClick: onSave, children: "保存" })
            ] })
          ] }),
          /* @__PURE__ */ u3("div", { className: c3.content, children: /* @__PURE__ */ u3(Comp, { ...props(tab) }) })
        ] });
      }, "ConfigModalApp");
    }
  });

  // src/core/download/ImageProcessor.ts
  var _ImageProcessor = class _ImageProcessor {
    constructor(config = {}) {
      this.resizeMap = {
        "2k_max": 2048,
        "1k_max": 1024,
        "960_max": 960,
        "640_max": 640,
        "512_max": 512
      };
      this.config = {
        image_convert_codecs: "default",
        image_resize_codecs: "default",
        image_quality: 80,
        ...config
      };
    }
    /**
     * 根据配置判断是否需要压缩转码
     */
    is_need_convert(width, height) {
      const { image_convert_codecs, image_resize_codecs } = this.config;
      const need_format = image_convert_codecs !== "default";
      const resize_target = this.resizeMap[image_resize_codecs] ?? Infinity;
      const need_resize = width > resize_target || height > resize_target;
      return need_format || need_resize;
    }
    /**
     * 主入口
     */
    async process(file) {
      const bitmap = await createImageBitmap(file);
      let { width, height } = bitmap;
      if (!this.is_need_convert(width, height)) {
        return { blob: file };
      }
      ;
      ({ width, height } = this._resize(width, height));
      const canvas = this._createCanvas(width, height);
      const ctx = canvas.getContext("2d");
      const outputType = this._getOutputType(file.type);
      if (outputType === "image/jpeg") {
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, width, height);
      }
      ctx.drawImage(bitmap, 0, 0, width, height);
      const blob = await this._toBlob(canvas, outputType);
      return { blob, outputType };
    }
    /**
     * resize 逻辑
     * @private
     */
    _resize(width, height) {
      const mode = this.config.image_resize_codecs;
      const maxEdge = this.resizeMap[mode];
      if (!maxEdge) return { width, height };
      const scale = Math.min(1, maxEdge / Math.max(width, height));
      return {
        width: Math.round(width * scale),
        height: Math.round(height * scale)
      };
    }
    /**
     * canvas 创建（兼容 fallback）
     * @private
     */
    _createCanvas(width, height) {
      if (typeof OffscreenCanvas !== "undefined") {
        return new OffscreenCanvas(width, height);
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      return canvas;
    }
    /**
     * 输出格式决策
     * @private
     */
    _getOutputType(inputType) {
      const codec = this.config.image_convert_codecs;
      if (codec === "png") return "image/png";
      if (codec === "jpg") return "image/jpeg";
      if (codec === "webp") return "image/webp";
      if (inputType === "image/png") return "image/png";
      if (inputType === "image/webp") return "image/webp";
      return "image/jpeg";
    }
    /**
     * 质量归一化
     * @private
     */
    _normalizeQuality() {
      const q3 = this.config.image_quality;
      if (!q3) return 0.8;
      return Math.min(1, Math.max(0.1, q3 / 100));
    }
    /**
     * toBlob 封装（兼容 HTMLCanvas）
     * @private
     */
    _toBlob(canvas, type) {
      const quality = this._normalizeQuality();
      if (canvas.convertToBlob) {
        return canvas.convertToBlob({ type, quality });
      }
      return new Promise((resolve) => {
        ;
        canvas.toBlob((b2) => resolve(b2), type, quality);
      });
    }
  };
  __name(_ImageProcessor, "ImageProcessor");
  var ImageProcessor = _ImageProcessor;

  // src/core/download/Downloader.ts
  init_Config();
  init_DownloaderLauncher();

  // src/platform/ExtensionBridge.ts
  var CHANNEL_REQ = "dy-dl:req";
  var CHANNEL_RES = "dy-dl:res";
  var CHANNEL_EVT = "dy-dl:evt";
  var CHANNEL_PING = "dy-dl:ping";
  var CHANNEL_PONG = "dy-dl:pong";
  var DEFAULT_TIMEOUT = 1e4;
  var _ExtensionBridgeImpl = class _ExtensionBridgeImpl {
    constructor() {
      this.pending = /* @__PURE__ */ new Map();
      this.eventHandlers = [];
      this.seq = 0;
      this.available = null;
      window.addEventListener("message", (e3) => {
        const d3 = e3.data;
        if (!d3 || typeof d3 !== "object") return;
        if (d3.channel === CHANNEL_RES) {
          const item = this.pending.get(d3.id);
          if (!item) return;
          this.pending.delete(d3.id);
          clearTimeout(item.timer);
          if (d3.ok) item.resolve(d3.result);
          else item.reject(new Error(d3.error || "扩展调用失败"));
          return;
        }
        if (d3.channel === CHANNEL_EVT) {
          this.eventHandlers.forEach((fn) => fn(d3.event));
          return;
        }
        if (d3.channel === CHANNEL_PONG) {
          this.available = true;
        }
      });
    }
    /**
     * 探测扩展环境是否可用（带缓存，只探测一次）
     */
    async isAvailable() {
      if (this.available === true) return true;
      return new Promise((resolve) => {
        setTimeout(() => resolve(this.available === true), 500);
        window.postMessage({ channel: CHANNEL_PING }, "*");
      });
    }
    markAvailable() {
      this.available = true;
    }
    /**
     * 发起一次扩展调用
     */
    request(action, payload = {}, timeout = DEFAULT_TIMEOUT) {
      const id = "req_" + ++this.seq + "_" + Date.now();
      return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          this.pending.delete(id);
          reject(new Error("扩展调用超时: " + action));
        }, timeout);
        this.pending.set(id, { resolve, reject, timer });
        window.postMessage({ channel: CHANNEL_REQ, id, action, payload }, "*");
      });
    }
    /**
     * 监听扩展侧推送的事件（下载进度等）
     */
    onEvent(handler) {
      this.eventHandlers.push(handler);
      return () => {
        const i3 = this.eventHandlers.indexOf(handler);
        if (i3 >= 0) this.eventHandlers.splice(i3, 1);
      };
    }
  };
  __name(_ExtensionBridgeImpl, "ExtensionBridgeImpl");
  var ExtensionBridgeImpl = _ExtensionBridgeImpl;
  var ExtensionBridge = new ExtensionBridgeImpl();
  async function extDownload(url, filename, subdir = "", concurrency) {
    try {
      const ok = await ExtensionBridge.isAvailable();
      if (!ok) return null;
      const res = await ExtensionBridge.request("download", { url, filename, subdir, concurrency });
      return res;
    } catch (e3) {
      console.warn("[dy-dl]扩展下载失败，降级为浏览器下载", e3);
      return null;
    }
  }
  __name(extDownload, "extDownload");
  async function extDownloadState(id) {
    try {
      const res = await ExtensionBridge.request("getTask", { id }, 15e3);
      return res?.task || null;
    } catch (e3) {
      return null;
    }
  }
  __name(extDownloadState, "extDownloadState");
  function extXhr(options) {
    return ExtensionBridge.request("xhr", options, 3e4);
  }
  __name(extXhr, "extXhr");
  function installGMShim() {
    const w3 = window;
    if (typeof w3.GM_xmlhttpRequest === "function") return;
    w3.GM_xmlhttpRequest = function(details) {
      let aborted = false;
      const done = /* @__PURE__ */ __name((fn, payload) => {
        if (!aborted && typeof fn === "function") fn(payload);
      }, "done");
      extXhr({
        url: details.url,
        method: details.method || "GET",
        headers: details.headers,
        data: details.data,
        responseType: details.responseType,
        timeout: details.timeout
      }).then((res) => {
        done(details.onload, {
          status: res.status,
          response: res.response,
          responseText: typeof res.response === "string" ? res.response : JSON.stringify(res.response),
          responseHeaders: res.responseHeaders || ""
        });
      }).catch((err) => {
        done(details.onerror, { error: err });
      });
      return {
        abort() {
          aborted = true;
        }
      };
    };
  }
  __name(installGMShim, "installGMShim");

  // src/core/download/Downloader.ts
  var _Downloader = class _Downloader {
    /**
     * 将 WebP 图片转换为 PNG 格式
     */
    async convertWebPToPNG(blob) {
      const img = new Image();
      img.src = URL.createObjectURL(blob);
      await new Promise((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = reject;
      });
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(img.src);
      return new Promise((resolve) => {
        canvas.toBlob((b2) => resolve(b2), "image/png");
      });
    }
    /**
     * 获取请求头
     */
    async get_headers(url) {
      const response = await fetch(url, { method: "HEAD" });
      return response.headers;
    }
    /**
     * 根据请求头猜测完整文件名
     */
    async prepare_filename(dl_url, filename_input = "") {
      let url = dl_url;
      if (url.startsWith("//")) {
        url = window.location.protocol + url;
      }
      const headers = await this.get_headers(url);
      const content_disposition = headers.get("content-disposition") || "";
      const content_type = headers.get("content-type") || "";
      const content_length = headers.get("content-length") || "";
      const imagex_fmt = headers.get("Imagex-Fmt") || "";
      const isImage = !!imagex_fmt || content_type.startsWith("image/");
      const isWebP = imagex_fmt.includes("2webp") || url.includes(".webp") || content_type.includes("webp");
      const isVideo = content_type.startsWith("video/");
      let fileExtGuess = content_type.split("/")[1]?.toLowerCase();
      if (!fileExtGuess && isImage) fileExtGuess = "jpg";
      else if (!fileExtGuess) fileExtGuess = "bin";
      let determinedFileExt = fileExtGuess;
      if (content_disposition) {
        const m3 = content_disposition.match(/filename="(.+)"$/i);
        if (m3) {
          const fe = m3[1].split(".").pop()?.toLowerCase();
          if (fe) determinedFileExt = fe;
        }
      }
      let filename = filename_input || new URL(url).pathname.split("/").pop() || "download";
      if (filename.endsWith(".image")) filename = filename.slice(0, -".image".length);
      const filename_base = filename.replace(/\.[^/.]+$/, "");
      const re = new RegExp("\\." + determinedFileExt + "$", "i");
      if (!re.test(filename)) filename = filename_base + "." + determinedFileExt;
      return { filename, ext: determinedFileExt, isImage, isVideo, isWebP, headers, content_length, content_type, filename_base };
    }
    /**
     * 预下载文件
     *
     * PS: 这一步其实没有下载，而是通过浏览器的缓存读取了
     * PSS: 并且如果浏览器没有缓存，似乎会报错，因为server那边会校验cookie，我们没带上
     */
    async prepare_download_file(dl_url, filename_input = "") {
      const meta = await this.prepare_filename(dl_url, filename_input);
      const response = await fetch(dl_url);
      if (!response.ok) {
        return { ok: false, error_msg: "Failed to fetch the file: " + response.status };
      }
      const blob = await response.blob();
      return {
        blob,
        filename: meta.filename,
        filename_base: meta.filename_base,
        isImage: meta.isImage,
        isWebP: meta.isWebP,
        content_type: meta.content_type,
        fileExt: meta.ext,
        ok: true
      };
    }
    /**
     * 使用浏览器下载 Blob
     */
    async download_blob(blob, filename) {
      const link = document.createElement("a");
      link.style.display = "none";
      link.download = filename;
      link.href = URL.createObjectURL(blob);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }
    /**
     * 下载后处理：转码、压缩图片
     */
    async download_postprocess(blob, content_type) {
      if (content_type.startsWith("image/")) {
        const processor = new ImageProcessor(Config.global.clone_features());
        return processor.process(blob);
      }
      return { blob };
    }
    /**
     * 使用浏览器下载数据
     *
     * 下载文件流程:
     * 1. 预下载为 blob，读取元信息
     * 2. 如果是 webp 图片，尝试转为 png 图片
     * 3. 下载 blob
     */
    async download_using_browser(url, filename_input) {
      let blob;
      let filename;
      try {
        const result = await this.prepare_download_file(url, filename_input);
        if (!result.ok) return { ok: false, error_msg: result.error_msg || "预下载失败" };
        filename = result.filename;
        blob = result.blob;
        const { blob: new_blob, output_type } = await this.download_postprocess(blob, result.content_type ?? "");
        blob = new_blob;
        if (output_type === "image/png") filename = result.filename_base + ".png";
        else if (output_type === "image/jpeg") filename = result.filename_base + ".jpeg";
        else if (output_type === "image/webp") filename = result.filename_base + ".webp";
      } catch (error) {
        console.error("[dy-dl]预下载异常", error);
        return { ok: false, error_msg: "预下载异常" };
      }
      if (blob && filename) {
        try {
          await this.download_blob(blob, filename);
          return { ok: true, error_msg: "" };
        } catch (error) {
          console.error("[dy-dl]下载blob失败", error);
          return { ok: false, error_msg: "下载失败" };
        }
      }
      return { ok: false, error_msg: "下载失败" };
    }
    /**
     * 使用扩展的 chrome.downloads 下载
     *
     * 相比 blob 流程的优势：
     * 1. 不预先把文件读进内存，大视频也不占内存
     * 2. 由浏览器下载管理器接管，支持断点续传和失败重试
     * 3. 可以保存到指定子目录，自动处理重名
     * 4. 请求由浏览器发起，自动带上抖音的 cookie
     *
     * 需要图片转码/压缩时无法使用（那两步依赖 blob），会自动回退到 blob 流程。
     */
    async download_using_chrome(url, filename_input, options = {}) {
      const needPostprocess = Config.global.features.image_convert_codecs !== "default" || Config.global.features.image_resize_codecs !== "default";
      if (needPostprocess) {
        return this.download_using_browser(url, filename_input);
      }
      let filename = filename_input;
      try {
        const meta = await this.prepare_filename(url, filename_input);
        filename = meta.filename;
      } catch (e3) {
        console.warn("[dy-dl] 获取文件元信息失败，使用传入文件名", e3);
      }
      const chromeCfg = Config.global.features.downloader_config.chrome || {};
      const res = await extDownload(url, filename, chromeCfg.dir || "", chromeCfg.concurrency);
      if (res === null) {
        return this.download_using_browser(url, filename_input);
      }
      if (!res.ok) return { ok: false, error_msg: res.error || "扩展下载失败" };
      return this.waitDownload(res.id, options);
    }
    /**
     * 轮询下载任务直到落盘或失败
     *
     * 用 chrome.downloads 的真实状态判定，不靠后台事件缓存。
     */
    async waitDownload(id, options = {}) {
      if (id === null || id === void 0) return { ok: true, error_msg: "" };
      const sleep = /* @__PURE__ */ __name((ms) => new Promise((r3) => setTimeout(r3, ms)), "sleep");
      const timeoutMs = 10 * 60 * 1e3;
      const start = Date.now();
      let miss = 0;
      while (Date.now() - start < timeoutMs) {
        const st = await extDownloadState(id);
        if (!st) {
          if (++miss > 10) return { ok: false, error_msg: "查不到下载任务" };
          await sleep(1e3);
          continue;
        }
        miss = 0;
        try {
          options.onProgress?.(st.received || 0, st.total || 0);
        } catch (e3) {
        }
        if (st.state === "done") {
          if (st.fullPath) {
            try {
              options.onSaved?.(st.fullPath);
            } catch (e3) {
            }
          }
          return { ok: true, error_msg: "" };
        }
        if (st.state === "failed") return { ok: false, error_msg: st.error || "下载中断" };
        await sleep(500);
      }
      return { ok: false, error_msg: "下载超时" };
    }
    /**
     * 根据配置使用不同的下载器
     */
    async download_one_url(url, filename_input, options = {}) {
      const { using_downloader, downloader_config } = Config.global.features;
      switch (using_downloader) {
        case "browser":
          return this.download_using_browser(url, filename_input);
        case "chrome":
          return this.download_using_chrome(url, filename_input, options);
        case "idm":
        case "aria2":
        case "bc":
        case "abdm": {
          let resolvedFilename = filename_input;
          try {
            const meta = await this.prepare_filename(url, filename_input);
            resolvedFilename = meta.filename;
          } catch (e3) {
            console.warn("[dy-dl] prepare_filename failed, using input filename", e3);
          }
          const launcher = new DownloaderLauncher({
            idmList: [{ id: downloader_config.idm?.id ?? "1" }],
            aria2List: [
              {
                domain: downloader_config.aria2?.domain ?? "http://localhost",
                port: downloader_config.aria2?.port ?? "6800",
                path: downloader_config.aria2?.path ?? "/jsonrpc",
                token: downloader_config.aria2?.token ?? "",
                dir: ""
              }
            ],
            bitcometList: [
              {
                domain: downloader_config.bc?.domain ?? "http://localhost",
                port: downloader_config.bc?.port ?? "8080",
                path: downloader_config.bc?.path ?? "/panel/task_add_httpftp_result",
                authName: downloader_config.bc?.authName ?? "",
                authPass: downloader_config.bc?.authPass ?? "",
                dir: ""
              }
            ],
            abdmList: [{ domain: downloader_config.abdm?.domain ?? "http://localhost", port: downloader_config.abdm?.port ?? "15151", dir: "" }]
          });
          const ok = await launcher.invoke_download(url, using_downloader, downloader_config[using_downloader]?.dir, {
            filename_input: resolvedFilename,
            media: options.media
          });
          return { ok: !!ok, error_msg: "" };
        }
        default:
          return { ok: false, error_msg: "未知下载器" };
      }
    }
    /**
     * 下载文件，根据所有 url 逐一尝试下载
     */
    async download_file(source, filename_input = "", fallback_src = [], options = {}) {
      let url_sources = [source, ...fallback_src].filter((x2) => typeof x2 === "string" && x2.length > 0);
      url_sources = Array.from(new Set(url_sources));
      let error_msg = "";
      for (const url of url_sources) {
        const r3 = await this.download_one_url(url, filename_input, options);
        error_msg = error_msg || r3.error_msg;
        if (r3.ok) return true;
      }
      if (!options.silent) {
        alert(error_msg && url_sources.length === 1 ? error_msg : "[dy-dl]所有尝试下载都失败，请刷新重试");
      }
      return false;
    }
  };
  __name(_Downloader, "Downloader");
  var Downloader = _Downloader;

  // src/core/DOMPatcher.ts
  init_Config();

  // src/ui/TooltipsButton.ts
  function renderHtml(html) {
    const div = document.createElement("div");
    div.innerHTML = html.trim();
    return div.children[0];
  }
  __name(renderHtml, "renderHtml");
  var _TooltipsButton = class _TooltipsButton {
    constructor(label, items, onclick) {
      this.label = label;
      this.items = items;
      this.onclick = onclick;
    }
    render() {
      const htmlStr = '<xg-icon  class="xgplayer-playclarity-setting dy-dl-video-btn"  data-state="normal"  data-index="11">  <div class="gear isSmoothSwitchClarityLogin">    <div class="virtual"></div>    <div class="btn" tabindex="0">' + this.label + "</div>  </div></xg-icon>";
      const root = renderHtml(htmlStr);
      const $gear = root.querySelector(".gear");
      const $items_list = root.querySelector(".virtual");
      const $btn = root.querySelector(".btn");
      $gear.addEventListener("mouseenter", () => $gear.classList.add("hover"));
      $gear.addEventListener("mouseleave", () => $gear.classList.remove("hover"));
      for (const item of this.items) {
        if (item.html) {
          $items_list.appendChild(renderHtml(item.html));
          continue;
        }
        if (item.render) {
          $items_list.appendChild(item.render());
          continue;
        }
        const $item = renderHtml('<div class="item">' + item.label + "</div>");
        $item.addEventListener("click", item.callback);
        $items_list.appendChild($item);
      }
      $btn.addEventListener("click", this.onclick);
      return root;
    }
  };
  __name(_TooltipsButton, "TooltipsButton");
  var TooltipsButton = _TooltipsButton;

  // src/utils/string.ts
  function isProfilePagePath(pathname = location.pathname) {
    return pathname.startsWith("/user/");
  }
  __name(isProfilePagePath, "isProfilePagePath");

  // src/handlers/profile/ProfileDataService.ts
  var _ProfileDataService = class _ProfileDataService {
    constructor() {
      this.feedMediaCache = /* @__PURE__ */ new Map();
    }
    static findReactFiber(node) {
      let current = node;
      while (current) {
        const fiberKey = Object.keys(current).find((key) => key.startsWith("__reactFiber$"));
        if (fiberKey) return current[fiberKey];
        current = current.parentElement;
      }
      return null;
    }
    static getAwemeIdFromHref(href = "") {
      const match = href.match(/\/(?:video|note)\/(\d+)/);
      return match?.[1] || "";
    }
    _extractFeedMedia(card) {
      let fiber = _ProfileDataService.findReactFiber(card);
      while (fiber) {
        const props = fiber.memoizedProps;
        const candidate = props?.awemeInfo || props?.itemInfo?.awemeInfo || (props?.itemInfo?.awemeId ? props.itemInfo : null);
        if (candidate?.awemeId) {
          this.feedMediaCache.set(candidate.awemeId, candidate);
          return candidate;
        }
        fiber = fiber.return;
      }
      const awemeId = _ProfileDataService.getAwemeIdFromHref(card.getAttribute("href") || "");
      return awemeId ? this.feedMediaCache.get(awemeId) || null : null;
    }
    collectCurrentFeedMedia() {
      const medias = [];
      const seen = /* @__PURE__ */ new Set();
      document.querySelectorAll(_ProfileDataService.FEED_CARD_SELECTOR).forEach((card) => {
        const media = this._extractFeedMedia(card);
        if (!media?.awemeId || seen.has(media.awemeId)) return;
        seen.add(media.awemeId);
        this.feedMediaCache.set(media.awemeId, media);
        medias.push(media);
      });
      return medias;
    }
    isProfilePage() {
      return isProfilePagePath();
    }
    getProfileContext() {
      if (!this.isProfilePage()) return null;
      const pathSecUid = location.pathname.replace(/^\/user\//, "").trim();
      const scannedMedia = this.collectCurrentFeedMedia().find((m3) => m3?.authorInfo?.secUid);
      const secUid = pathSecUid && pathSecUid !== "self" ? pathSecUid : scannedMedia?.authorInfo?.secUid || pathSecUid || "";
      const titleName = document.title.split("的抖音")[0]?.trim() || "";
      const profileName = scannedMedia?.authorInfo?.nickname || titleName;
      const activeTab = new URLSearchParams(location.search).get("showTab") || "post";
      const profileKey = secUid || "self:" + activeTab;
      return { secUid, profileName, tabKey: activeTab, profileKey };
    }
    _findScrollContainer() {
      const firstCard = document.querySelector(_ProfileDataService.FEED_CARD_SELECTOR);
      let current = firstCard instanceof HTMLElement ? firstCard.parentElement : null;
      while (current instanceof HTMLElement) {
        const style = window.getComputedStyle(current);
        const isScrollable = ["auto", "scroll", "overlay"].includes(style.overflowY) && current.scrollHeight > current.clientHeight + 100;
        if (isScrollable) return current;
        current = current.parentElement;
      }
      return document.querySelector(".route-scroll-container") || document.querySelector(".parent-route-container") || document.scrollingElement || document.documentElement;
    }
    async scrollPageOnce() {
      const container = this._findScrollContainer();
      if (!container) return false;
      const isDoc = container === document.body || container === document.documentElement || container === document.scrollingElement;
      const beforeTop = isDoc ? window.scrollY : container.scrollTop;
      const clientHeight = isDoc ? window.innerHeight : container.clientHeight;
      const scrollHeight = container.scrollHeight;
      const maxTop = Math.max(0, scrollHeight - clientHeight);
      const nextTop = Math.min(beforeTop + Math.max(clientHeight * 0.85, 480), maxTop);
      if (nextTop <= beforeTop + 4) return false;
      if (isDoc) window.scrollTo({ top: nextTop, behavior: "smooth" });
      else container.scrollTo({ top: nextTop, behavior: "smooth" });
      await new Promise((r3) => setTimeout(r3, 1200));
      return true;
    }
  };
  __name(_ProfileDataService, "ProfileDataService");
  _ProfileDataService.FEED_CARD_SELECTOR = '.waterfall-videoCardContainer[href], [href*="/video/"][target="_blank"], [href*="/note/"][target="_blank"]';
  var ProfileDataService = _ProfileDataService;

  // src/core/DOMPatcher.ts
  var _DOMPatcher = class _DOMPatcher {
    /**
     * @param options - 包含各处理器实例的配置对象
     */
    constructor(options) {
      this.feed_card_selector_cls = "dy-dl-feed-selector";
      this.downloader = options.downloader;
      this.mediaHandler = options.mediaHandler;
      this.videoHandler = options.videoHandler;
      this.danmakuHandler = options.danmakuHandler;
      this.profilePageHandler = options.profilePageHandler;
      this.observer = new MutationObserver(this._handleMutations.bind(this));
      Config.global.events.on("config_change", this._on_config_change.bind(this));
    }
    /**
     * 渲染 HTML 字符串为 DOM 元素
     */
    static render_html(html) {
      const div = document.createElement("div");
      div.innerHTML = html.trim();
      return div.children[0];
    }
    /** 从节点向上遍历 DOM 树查找 img 元素 */
    static findImage(node) {
      let img;
      let current = node;
      while (current) {
        img = current.querySelector("img");
        if (img) return img;
        current = current.parentElement instanceof HTMLElement ? current.parentElement : null;
      }
      return null;
    }
    /** 配置变更时同步卡片选择器 */
    _on_config_change() {
      this._sync_feed_cards();
    }
    /** 同步所有 feed 卡片的选择器状态 */
    _sync_feed_cards() {
      document.body.querySelectorAll(ProfileDataService.FEED_CARD_SELECTOR).forEach((card) => this._handleProfileCard(card));
    }
    /** 处理 DOM 变更 */
    _handleMutations(mutations) {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          const el = node;
          if (el.classList.contains("semi-portal")) {
            const tn = el.querySelector(".semi-tooltip-wrapper");
            if (tn) {
              setTimeout(() => this._handleTooltip(tn));
              return;
            }
          }
          if (el.parentElement === document.body && el.classList.length === 0) {
            setTimeout(() => this._handleModal(el));
            return;
          }
          if (el.localName === "xg-controls" || el.querySelector("xg-controls")) {
            this._handleXgControl(el);
            return;
          }
          if (el.matches(ProfileDataService.FEED_CARD_SELECTOR)) {
            this._handleProfileCard(el);
            return;
          }
          if (el.localName === "li") {
            Array.from(el.querySelectorAll(ProfileDataService.FEED_CARD_SELECTOR)).forEach((dom) => this._handleProfileCard(dom));
          }
        });
      });
    }
    /** 处理模态框，注入图片下载按钮 */
    _handleModal(modalNode) {
      const close_icon = modalNode.querySelector("#svg_icon_ic_close");
      const img = modalNode.querySelector("img");
      const container = img?.closest(`div[style*="transform: scale(1)"] > div`) || img?.parentElement;
      if (!close_icon || !img || !container) return;
      if (container.querySelector(".dy-dl-modal-btn")) return;
      const btn = document.createElement("div");
      btn.textContent = "下载图片";
      btn.className = "LV01TNDE dy-dl-modal-btn";
      btn.addEventListener("click", (e3) => {
        e3.stopPropagation();
        this.downloader.download_file(img.src, "douyin_image");
      });
      Object.assign(btn.style, {
        position: "absolute",
        bottom: "35px",
        right: "35px",
        color: "#fff",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "16px",
        zIndex: "999999",
        cursor: "pointer"
      });
      container.appendChild(btn);
    }
    /** 处理 Tooltip，注入表情下载按钮 */
    _handleTooltip(tooltipNode) {
      const tc = tooltipNode.querySelector(".semi-tooltip-content");
      if (!tc || !tc.textContent?.includes("添加到表情")) return;
      const imgNode = _DOMPatcher.findImage(tooltipNode);
      if (!imgNode?.src) return;
      const existing = tc.querySelector(".download-button");
      if (existing) return;
      const btn = document.createElement("div");
      btn.textContent = "下载表情包";
      btn.className = "LV01TNDE download-button";
      btn.style.cssText = "cursor: pointer; padding-top: 4px;";
      btn.addEventListener("click", (e3) => {
        e3.stopPropagation();
        this.downloader.download_file(imgNode.src, "douyin_emoticon");
      });
      tc.appendChild(btn);
    }
    /** 处理播放器控件，注入插件菜单 */
    _handleXgControl(xgNode) {
      const right_grid = xgNode.querySelector(".xg-right-grid");
      if (!right_grid) return;
      if (right_grid.querySelector(".dy-dl-video-btn")) return;
      const btn = new TooltipsButton(
        "插件",
        [
          { html: `<div class="xgTips item"><span>快捷键：</span><span class="shortcutKey">M</span>` },
          { label: "需求/反馈", callback: /* @__PURE__ */ __name(() => window.open("https://github.com/zhzLuke96/douyin-dl-user-js/issues", "_blank", "noopener,noreferrer"), "callback") },
          { label: "设置", callback: /* @__PURE__ */ __name(() => this.mediaHandler.open_config_modal(), "callback") },
          { label: "媒体详情", callback: /* @__PURE__ */ __name(() => this.mediaHandler.show_media_details(), "callback") },
          {
            label: "下载弹幕",
            callback: /* @__PURE__ */ __name(() => {
              if (!this.mediaHandler.player) {
                alert("当前没有播放器实例");
                return;
              }
              if (!this.mediaHandler.current_media) {
                alert("当前没有媒体实例");
                return;
              }
              const content = this.danmakuHandler.getDanmakuAssFileContent(this.mediaHandler.player);
              if (content) {
                const fn = this.mediaHandler._build_filename(this.mediaHandler.current_media);
                this.downloader.download_blob(new Blob([content], { type: "text/plain" }), fn + ".ass");
              }
            }, "callback")
          },
          { label: "复制视频帧", callback: /* @__PURE__ */ __name(() => this.videoHandler.copy_current_frame(), "callback") },
          { label: "下载视频帧", callback: /* @__PURE__ */ __name(() => this.videoHandler.download_current_frame(), "callback") },
          { label: "下载", callback: /* @__PURE__ */ __name(() => this.mediaHandler.download_current_media(), "callback") }
        ],
        () => {
        }
      );
      const db = btn.render();
      const qs = right_grid.querySelector(".xgplayer-quality-setting");
      const vc = right_grid.querySelector(".xgplayer-volume");
      if (qs) right_grid.insertBefore(db, qs);
      else if (vc) right_grid.insertBefore(db, vc);
      else right_grid.appendChild(db);
    }
    /** 处理个人主页卡片，注入选择器 */
    _handleProfileCard(card) {
      const dom = card.querySelector("." + this.feed_card_selector_cls);
      if (!Config.global.features.enable_profile_downloader) {
        dom?.remove();
        return;
      } else if (dom) return;
      const media = this.profilePageHandler.dataService._extractFeedMedia(card);
      const { awemeId } = media || {};
      if (!awemeId) return;
      const pos = window.getComputedStyle(card).position;
      if (!pos || pos === "static") card.style.position = "relative";
      const mask = document.createElement("div");
      mask.className = this.feed_card_selector_cls;
      mask.setAttribute("role", "button");
      mask.setAttribute("aria-label", "切换视频选择");
      Object.assign(mask.style, {
        position: "absolute",
        inset: "0",
        zIndex: "10",
        cursor: "pointer",
        background: "transparent",
        userSelect: "none",
        touchAction: "manipulation"
      });
      const badge = document.createElement("div");
      Object.assign(badge.style, {
        position: "absolute",
        top: "10px",
        left: "10px",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 10px",
        borderRadius: "999px",
        background: "rgba(0,0,0,0.55)",
        border: "1px solid rgba(255,255,255,0.25)",
        color: "#fff",
        fontSize: "12px",
        fontFamily: "sans-serif",
        pointerEvents: "none",
        userSelect: "none"
      });
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.className = "dy-dl-feed-checkbox";
      cb.style.cssText = "margin: 0; pointer-events: none;";
      const label = document.createElement("span");
      label.className = "dy-dl-feed-select-label";
      label.textContent = "选择";
      badge.append(cb, label);
      mask.append(badge);
      card.appendChild(mask);
      const renderState = /* @__PURE__ */ __name((selected) => {
        cb.checked = selected;
        mask.setAttribute("aria-pressed", selected ? "true" : "false");
        mask.style.boxShadow = selected ? "inset 0 0 0 2px rgba(64,150,255,0.75)" : "none";
      }, "renderState");
      const toggle = /* @__PURE__ */ __name((ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        const selected = !this.profilePageHandler.downloadManager._isFeedSelected(awemeId);
        this.profilePageHandler.downloadManager.markSelect(awemeId, selected);
      }, "toggle");
      mask.addEventListener("click", toggle);
      mask.addEventListener("mousedown", (ev) => ev.stopPropagation());
      renderState(this.profilePageHandler.downloadManager._isFeedSelected(awemeId));
      const off = this.profilePageHandler.downloadManager.on("countsUpdated", () => {
        if (!mask.parentElement) {
          off();
          return;
        }
        renderState(this.profilePageHandler.downloadManager._isFeedSelected(awemeId));
      });
    }
    /** 启动 DOM 观察 */
    startObserving() {
      this.observer.observe(document.body, { childList: true, subtree: true });
      document.querySelectorAll("xg-controls").forEach((c4) => this._handleXgControl(c4));
    }
  };
  __name(_DOMPatcher, "DOMPatcher");
  var DOMPatcher = _DOMPatcher;

  // src/core/HotkeyManager.ts
  var _HotkeyManager = class _HotkeyManager {
    /**
     * 注册快捷键
     */
    addHotkey(key, fn) {
      const callback = /* @__PURE__ */ __name((ev) => {
        if (ev.key.toLowerCase() !== key.toLowerCase()) return;
        const activeElement = document.activeElement;
        if (activeElement) {
          const tagName = activeElement.tagName;
          const isInputElement = tagName === "INPUT" || tagName === "TEXTAREA" || activeElement.isContentEditable;
          if (isInputElement) return;
        }
        ev.preventDefault();
        fn();
      }, "callback");
      document.addEventListener("keydown", callback);
      const dispose = /* @__PURE__ */ __name(() => document.removeEventListener("keydown", callback), "dispose");
      return { dispose };
    }
  };
  __name(_HotkeyManager, "HotkeyManager");
  var HotkeyManager = _HotkeyManager;

  // src/handlers/MediaHandler.tsx
  init_preact_module();
  init_Config();
  init_DownloadHistory();

  // src/ui/modals/Modal.ts
  var _Modal = class _Modal {
    constructor(callback, onBeforeClose) {
      this.onBeforeClose = onBeforeClose;
      this.overlay = document.createElement("div");
      Object.assign(this.overlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "1000"
      });
      this.root = document.createElement("div");
      Object.assign(this.root.style, {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        minWidth: "300px",
        minHeight: "150px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
      });
      this.root.addEventListener("click", (e3) => e3.stopPropagation());
      this.overlay.addEventListener("click", () => {
        if (this.onBeforeClose && !this.onBeforeClose()) return;
        this.close();
      });
      this.overlay.appendChild(this.root);
      document.body.appendChild(this.overlay);
      if (typeof callback === "function") {
        callback(this.root, this.overlay);
      }
    }
    close() {
      if (this.onBeforeClose && !this.onBeforeClose()) return;
      this.overlay.remove();
    }
  };
  __name(_Modal, "Modal");
  var Modal = _Modal;

  // src/utils/dom.ts
  function createToast(target, defaultDuration = 2e3) {
    let toastEl = null;
    let timeoutId = null;
    const getTargetElement = /* @__PURE__ */ __name(() => {
      if (!target) return null;
      if (typeof target === "string") return document.querySelector(target);
      return target.nodeType === Node.ELEMENT_NODE ? target : null;
    }, "getTargetElement");
    const updatePosition = /* @__PURE__ */ __name(() => {
      if (!toastEl) return;
      const targetEl = getTargetElement();
      if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        const top = rect.top - toastEl.offsetHeight - 5;
        const left = rect.left + (rect.width - toastEl.offsetWidth) / 2;
        toastEl.style.top = `${top}px`;
        toastEl.style.left = `${left}px`;
        toastEl.style.right = "auto";
        toastEl.style.bottom = "auto";
      } else {
        toastEl.style.bottom = "20px";
        toastEl.style.right = "20px";
        toastEl.style.top = "auto";
        toastEl.style.left = "auto";
      }
    }, "updatePosition");
    const close = /* @__PURE__ */ __name(() => {
      if (toastEl) {
        toastEl.remove();
        toastEl = null;
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    }, "close");
    const update = /* @__PURE__ */ __name((message, duration = defaultDuration) => {
      if (!toastEl) {
        toastEl = document.createElement("div");
        toastEl.className = "dy-dl-toast";
        Object.assign(toastEl.style, {
          position: "fixed",
          background: "rgba(0,0,0,0.7)",
          color: "#fff",
          padding: "6px 12px",
          borderRadius: "20px",
          fontSize: "12px",
          zIndex: "999999",
          pointerEvents: "none",
          transition: "opacity 0.3s",
          fontFamily: "sans-serif",
          whiteSpace: "nowrap"
        });
        document.body.appendChild(toastEl);
      }
      toastEl.textContent = message;
      updatePosition();
      if (timeoutId) clearTimeout(timeoutId);
      if (duration > 0) {
        timeoutId = setTimeout(close, duration);
      }
    }, "update");
    return { update, close };
  }
  __name(createToast, "createToast");

  // src/handlers/MediaHandler.tsx
  init_format();
  init_getBestCoverUrl();
  init_jsxRuntime_module();
  var _MediaHandler = class _MediaHandler {
    constructor(downloader2) {
      this.player = null;
      this.current_media = null;
      this.downloading = false;
      this.downloader = downloader2;
      this.download_current_media = this._lock_download(this._download_current_media_logic.bind(this));
    }
    static toShortId(bigintStr) {
      try {
        return BigInt(bigintStr).toString(36);
      } catch {
        return bigintStr;
      }
    }
    /** 文件名
     *
     * [nickname] + [short_id] + [tags] + [desc]
     * max length: 64
     */
    _build_filename(media = this.current_media, filename_template = Config.global.features.filename_template || Config.defaults.filename_template, filename_max_length = Config.global.features.filename_max_length || 64, throw_err = false) {
      if (!media) {
        throw new Error("缺少 media");
      }
      const {
        authorInfo: { nickname },
        awemeId,
        desc,
        textExtra
      } = media;
      const short_id = _MediaHandler.toShortId(awemeId);
      const tag_list = textExtra?.map((x2) => x2.hashtagName).filter(Boolean) || [];
      const tags = tag_list.map((x2) => "#" + x2).join("_");
      let rawDesc = desc || "";
      tag_list.forEach((t3) => {
        rawDesc = rawDesc.replace(new RegExp("#" + t3 + "\\s*", "g"), "");
      });
      rawDesc = rawDesc.trim().replace(/[#/?<>\\:*|":]/g, "");
      const context = {
        nickname: String(nickname || "").replace(/[#/?<>\\:*|"]/g, "").trim(),
        short_id,
        tags,
        desc: rawDesc,
        aweme_id: awemeId,
        media,
        author_info: media.authorInfo,
        uid: media.authorUserId,
        music_name: media.music?.musicName || "",
        now_date: /* @__PURE__ */ new Date(),
        create_date: new Date(media.createTime * 1e3)
      };
      const stats = media.stats || media.statistics || {};
      context.digg_count = stats.diggCount || 0;
      context.comment_count = stats.commentCount || 0;
      context.collect_count = stats.collectCount || 0;
      context.share_count = stats.shareCount || 0;
      context.now_YYYYMMDD = formatDate(context.now_date, "YYYYMMDD");
      context.now_YYYYMMDD_HHmmss = formatDate(context.now_date, "YYYYMMDD_HHmmss");
      context.create_date_YYYYMMDD = formatDate(context.create_date, "YYYYMMDD");
      context.create_date_YYYYMMDD_HHmmss = formatDate(context.create_date, "YYYYMMDD_HHmmss");
      let baseName;
      try {
        baseName = runInContext(context, filename_template);
      } catch (error) {
        if (throw_err) throw error;
        console.error("[dy-dl] Error rendering filename template:", error);
        baseName = runInContext(context, Config.defaults.filename_template);
      }
      if (baseName.length > filename_max_length) baseName = baseName.slice(0, filename_max_length);
      baseName = baseName.replace(/\./g, "_");
      return baseName;
    }
    _bind_player_events() {
      if (!this.player) return;
      const update = /* @__PURE__ */ __name(() => {
        if (this.player?.config?.awemeInfo) this.current_media = this.player.config.awemeInfo;
      }, "update");
      update();
      this.player.on("play", update);
      this.player.on("seeked", update);
    }
    /**
     * !!!
     * 此为核心逻辑
     * !!!
     *
     * NOTE: 有可能在某次抖音更新之后就不可用，依赖于 xg-video 对全局状态注入
     */
    async _start_detect_player_change() {
      while (true) {
        const cp = window.player || typeof unsafeWindow !== "undefined" && unsafeWindow.player;
        if (this.player !== cp) {
          this.player = cp;
          if (this.player) this._bind_player_events();
        }
        await new Promise((r3) => setTimeout(r3, 1e3));
      }
    }
    _flag_start_download() {
      this.downloading = true;
      return () => {
        this.downloading = false;
      };
    }
    _lock_download(fn) {
      return async (...args) => {
        if (this.downloading) {
          alert("[dy-dl]正在下载中...请稍等或刷新页面");
          return;
        }
        const release = this._flag_start_download();
        try {
          await fn(...args);
        } finally {
          await new Promise((r3) => setTimeout(r3, 300));
          release();
        }
      };
    }
    /**
     * 从 video 对象上取得所有 url，支持分辨率策略 + 编码偏好
     * 先按 codec 筛选，再按分辨率模式筛选
     */
    _get_video_urls(video_obj) {
      if (!video_obj) return [];
      const mode = Config.global.features.download_video_mode || "default";
      const codecPref = Config.global.features.video_download_codecs || "default";
      const isH265 = /* @__PURE__ */ __name((br) => br.isH265 === 1 || (br.gearName || "").toLowerCase().includes("h265") || (br.format || "").toLowerCase().includes("h265"), "isH265");
      const extractUrls = /* @__PURE__ */ __name((br) => {
        const urls = [];
        if (br.playApi) urls.push(br.playApi);
        if (Array.isArray(br.playAddr)) urls.push(...br.playAddr.map((a3) => a3.src));
        return urls.filter(Boolean);
      }, "extractUrls");
      if (!video_obj.bitRateList || video_obj.bitRateList.length === 0) return this._get_video_urls_default(video_obj);
      const bitRateList = video_obj.bitRateList.filter((x2) => x2.format !== "dash");
      let candidates = [...bitRateList];
      if (codecPref !== "default") {
        const isPrefer = codecPref.endsWith("_prefer");
        const wantH265 = codecPref.includes("h265");
        const matched = candidates.filter((br) => isH265(br) === wantH265);
        if (matched.length > 0) candidates = matched;
        else if (!isPrefer) return this._get_video_urls_default(video_obj);
      }
      if (mode !== "default" && candidates.length > 1) {
        const vsizeof = /* @__PURE__ */ __name((a3) => (a3?.width || 0) * (a3?.height || 0), "vsizeof");
        const fsizeof = /* @__PURE__ */ __name((a3) => a3.dataSize || 0, "fsizeof");
        if (mode === "max") candidates.sort((a3, b2) => vsizeof(b2) - vsizeof(a3));
        else if (mode === "min") candidates.sort((a3, b2) => vsizeof(a3) - vsizeof(b2));
        else if (mode === "max_file") candidates.sort((a3, b2) => fsizeof(b2) - fsizeof(a3));
        else if (mode === "min_file") candidates.sort((a3, b2) => fsizeof(a3) - fsizeof(b2));
        if (["1080P", "720P", "540P", "360P", "2K", "4K"].includes(mode)) {
          const kwMap = { "1080P": ["1080"], "720P": ["720"], "540P": ["540"], "360P": ["360"], "2K": ["2k", "2048"], "4K": ["4K", "4096"] };
          const kws = kwMap[mode] || [];
          const matched = candidates.filter((br) => kws.some((kw) => (br.gearName || "").toLowerCase().includes(kw.toLowerCase())));
          if (matched.length > 0) candidates = matched;
        }
      }
      const allUrls = [];
      candidates.forEach((br) => allUrls.push(...extractUrls(br)));
      if (codecPref === "default" || codecPref.includes("h264")) {
        if (video_obj.playApi) allUrls.push(video_obj.playApi);
      }
      if (codecPref === "default" || codecPref.includes("h265")) {
        if (video_obj.playApiH265) allUrls.push(video_obj.playApiH265);
      }
      const result = Array.from(new Set(allUrls.filter(Boolean)));
      if (result.length === 0) return this._get_video_urls_default(video_obj);
      return result;
    }
    /** 默认的 URL 提取逻辑 */
    _get_video_urls_default(video_obj) {
      const sources = [];
      if (video_obj.playApi) sources.push(video_obj.playApi);
      if (Array.isArray(video_obj.playAddr)) sources.push(...video_obj.playAddr.map((x2) => x2.src));
      if (video_obj.bitRateList)
        video_obj.bitRateList.filter((x2) => x2.format !== "dash").forEach((x2) => {
          if (x2.playApi) sources.push(x2.playApi);
        });
      if (video_obj.playApiH265) sources.push(video_obj.playApiH265);
      return Array.from(new Set(sources.filter(Boolean)));
    }
    /**
     * 抖音作品有两种形式：
     * 1. 单图、单视频
     * 2. 图集
     *
     * 如果是图集形式，必须从 images 这个数组里面取字段，其他字段都有可能是 fallback 值
     */
    async _download_media_logic(media, options = {}) {
      const { toastTarget = null, toast = null, toastPrefix = "", alertOnFail = true, addHistory = true } = options;
      if (!media) {
        if (alertOnFail) alert("[dy-dl]无当前媒体信息");
        return { ok: false, reason: "missing_media" };
      }
      const { video, images } = media;
      const filename_base = this._build_filename(media);
      const isAlbum = Array.isArray(images) && images.length > 0;
      const total = isAlbum ? images.length : 1;
      const scopedToast = toast || createToast(toastTarget, 5e3);
      const toastUpdate = /* @__PURE__ */ __name((msg, dur = 5e3) => {
        const p3 = toastPrefix ? toastPrefix + " " + msg : msg;
        scopedToast.update(p3, dur);
      }, "toastUpdate");
      if (isAlbum) {
        let downloadedCount = 0;
        for (let idx = 0; idx < images.length; idx++) {
          toastUpdate("下载图集 (" + (idx + 1) + "/" + total + ")");
          const item = images[idx];
          const fn = filename_base + "_" + (idx + 1);
          if (item.video) {
            const urls = this._get_video_urls(item.video);
            if (urls.length > 0) {
              const ok = await this.downloader.download_file(urls[0], fn, urls, { silent: !alertOnFail, media });
              if (ok) downloadedCount++;
            }
            continue;
          }
          const img_urls = item.urlList?.filter(Boolean) || item.downloadUrlList?.filter(Boolean);
          if (img_urls?.length > 0) {
            const ok = await this.downloader.download_file(img_urls[0], fn, img_urls, { silent: !alertOnFail, media });
            if (ok) downloadedCount++;
          }
        }
        toastUpdate("图集下载完成");
        if (downloadedCount === 0 && images.length > 0) {
          if (alertOnFail) alert("[dy-dl]图集下载失败");
          return { ok: false, reason: "no_valid_media" };
        }
        if (downloadedCount && addHistory) DownloadHistory.add(media);
        return { ok: downloadedCount > 0 };
      }
      toastUpdate("正在下载...");
      const video_urls = this._get_video_urls(video);
      if (video_urls.length > 0) {
        const ok = await this.downloader.download_file(video_urls[0], filename_base, video_urls, { silent: !alertOnFail, media });
        if (ok && addHistory) DownloadHistory.add(media);
        if (ok) {
          toastUpdate("下载完成");
          return { ok: true };
        }
      }
      if (alertOnFail) alert("[dy-dl]无法下载当前媒体");
      return { ok: false, reason: "no_valid_media" };
    }
    async _download_cover_logic(media, options = {}) {
      const { alertOnFail = true } = options;
      if (!media) {
        if (alertOnFail) alert("[dy-dl]无当前媒体信息");
        return { ok: false, reason: "missing_media" };
      }
      const coverUrl = getBestCoverUrl(media);
      if (!coverUrl) return { ok: false, reason: "no_cover" };
      const ok = await this.downloader.download_file(coverUrl, "thumb_" + this._build_filename(media), [], { silent: !alertOnFail, media });
      if (!ok) return { ok: false, reason: "cover_download_failed" };
      return { ok: true };
    }
    async _download_current_media_logic() {
      return this._download_media_logic(this.current_media, { toastTarget: document.querySelector(".dy-dl-video-btn"), alertOnFail: true, addHistory: true });
    }
    // 下载封面
    async download_thumb() {
      if (!this.current_media) {
        alert("[dy-dl] 无当前媒体信息");
        return;
      }
      const bestThumb = getBestCoverUrl(this.current_media);
      if (!bestThumb) {
        alert("[dy-dl] 未找到任何可用的封面图");
        return;
      }
      this.downloader.download_file(bestThumb, "thumb_" + this._build_filename(this.current_media), [], { media: this.current_media });
    }
    // 显示媒体详情
    async show_media_details() {
      if (!this.current_media) {
        alert("[dy-dl]无当前媒体信息");
        return;
      }
      const modal = new Modal((_root, overlay) => {
        overlay.style.zIndex = "999999";
        if (document.fullscreenElement) document.fullscreenElement.appendChild(overlay);
      });
      modal.root.style.cssText = "width:800px;max-width:90vw;background:transparent;box-shadow:none;border-radius:8px;overflow:hidden";
      const filenameBase = this._build_filename(this.current_media);
      try {
        const { MediaDetailModalApp: MediaDetailModalApp2 } = await Promise.resolve().then(() => (init_MediaDetailModal(), MediaDetailModal_exports));
        R(/* @__PURE__ */ u3(MediaDetailModalApp2, { media: this.current_media, filenameBase }), modal.root);
      } catch (e3) {
        console.error("[dy-dl] 媒体详情组件加载失败", e3);
        modal.root.textContent = "组件加载失败，请刷新重试";
      }
    }
    async open_config_modal() {
      const modal = new Modal((_root, overlay) => {
        overlay.style.zIndex = "999999";
        if (document.fullscreenElement) document.fullscreenElement.appendChild(overlay);
      });
      modal.root.style.cssText = "width:650px;max-width:90vw;background:transparent;box-shadow:none;border-radius:8px;overflow:hidden";
      try {
        const { ConfigModalApp: ConfigModalApp2 } = await Promise.resolve().then(() => (init_ConfigModal(), ConfigModal_exports));
        R(/* @__PURE__ */ u3(ConfigModalApp2, { config: Config.global, modal }), modal.root);
      } catch (e3) {
        console.error("[dy-dl] 配置组件加载失败", e3);
        modal.root.textContent = "组件加载失败";
      }
    }
    init() {
      this._start_detect_player_change();
    }
  };
  __name(_MediaHandler, "MediaHandler");
  var MediaHandler = _MediaHandler;

  // src/handlers/VideoHandler.ts
  var _VideoHandler = class _VideoHandler {
    constructor() {
      this._frameBlob = null;
    }
    /** 获取当前可见的视频元素 */
    getVideoElement() {
      const player = window.player || typeof unsafeWindow !== "undefined" && unsafeWindow.player;
      return player?.video || document.querySelector("video");
    }
    /** 截取当前视频帧，返回 Blob 和 DataURL */
    getCurrentFrame() {
      const video = this.getVideoElement();
      if (!video) return null;
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0);
      const url = canvas.toDataURL("image/png");
      canvas.toBlob((blob) => {
        if (blob) this._frameBlob = blob;
      });
      return { blob: this._frameBlob, url };
    }
    /** 复制当前视频帧到剪贴板 */
    async copy_current_frame() {
      const video = this.getVideoElement();
      if (!video) {
        alert("未找到视频元素");
        return;
      }
      try {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0);
        const blob = await new Promise((r3) => canvas.toBlob((b2) => r3(b2), "image/png"));
        await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
      } catch (e3) {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0);
        const url = canvas.toDataURL("image/png");
        const img = new Image();
        img.src = url;
        document.body.appendChild(img);
        Object.assign(img.style, { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 999999, maxWidth: "90vw", maxHeight: "90vh" });
        img.onclick = () => img.remove();
        console.error("复制帧失败(已显示图像):", e3);
      }
    }
    /** 下载当前视频帧 */
    async download_current_frame() {
      const video = this.getVideoElement();
      if (!video) {
        alert("未找到视频元素");
        return;
      }
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0);
      const blob = await new Promise((r3) => canvas.toBlob((b2) => r3(b2), "image/png"));
      const link = document.createElement("a");
      link.download = "frame_" + Date.now() + ".png";
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);
    }
  };
  __name(_VideoHandler, "VideoHandler");
  var VideoHandler = _VideoHandler;

  // src/handlers/DanmakuHandler.ts
  var _DanmakuHandler = class _DanmakuHandler {
    /** 获取弹幕列表 */
    getDanmakuList(player) {
      return player?.danmaku?.main?.data || [];
    }
    /** 获取视频宽高 */
    getMediaSize(player) {
      return { width: player?.sizeInfo?.width || 1920, height: player?.sizeInfo?.height || 1080 };
    }
    /** 毫秒转 ASS 时间格式 */
    msToAssTime(ms) {
      const totalSec = ms / 1e3;
      const h3 = Math.floor(totalSec / 3600);
      const m3 = Math.floor(totalSec % 3600 / 60);
      const s5 = totalSec % 60;
      return `${h3}:${String(m3).padStart(2, "0")}:${s5.toFixed(2).padStart(5, "0")}`.replace(/^0:/, "");
    }
    /** 十六进制颜色转 ASS 颜色格式 */
    hexToAssColor(hex) {
      if (!hex || hex === "transparent") return "&H00FFFFFF";
      const c4 = hex.replace("#", "");
      if (c4.length === 6) return "&H00" + c4.slice(4, 6) + c4.slice(2, 4) + c4.slice(0, 2);
      return "&H00FFFFFF";
    }
    /**
     * 将弹幕数据转换为 ASS 文件内容
     */
    convertDanmakuToAss(list, options = {}) {
      const { title = "", playResX = 1920, playResY = 1080 } = options;
      const header = `[Script Info]
ScriptType: v4.00+
PlayResX: ${playResX}
PlayResY: ${playResY}
Title: ${title}
Collisions: Normal

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,Arial,20,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,2,0,2,10,10,10,0

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text`;
      const events = list.map((d3) => {
        const time = d3.time ?? 0;
        const content = d3.content ?? "";
        const start = this.msToAssTime(time);
        const end = this.msToAssTime(time + 3e3);
        return `Dialogue: 0,${start},${end},Default,,0,0,0,,${content}`;
      }).join("\n");
      return header + "\n" + events;
    }
    /**
     * 获取弹幕 ASS 文件内容
     */
    getDanmakuAssFileContent(player) {
      const list = this.getDanmakuList(player);
      if (!list || list.length === 0) {
        alert("当前视频弹幕为空，或者未加载完成");
        return;
      }
      const size = this.getMediaSize(player);
      return this.convertDanmakuToAss(list, {
        title: "download from https://github.com/zhzLuke96/douyin-dl-user-js",
        playResX: size.width,
        playResY: size.height
      });
    }
  };
  __name(_DanmakuHandler, "DanmakuHandler");
  var DanmakuHandler = _DanmakuHandler;

  // src/ui/FloatingPanel.tsx
  init_preact_module();

  // src/ui/FloatingPanelUI.tsx
  init_hooks_module();
  init_css_in_js();
  init_Config();
  init_theme();

  // src/ui/modals/ProfileJobModal.tsx
  init_hooks_module();
  init_css_in_js();
  init_theme();
  init_getBestCoverUrl();
  init_jsxRuntime_module();
  var css2 = createCSS();
  var s3 = {
    overlay: css2({
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 999999
    }),
    modal: css2({
      display: "flex",
      flexDirection: "column",
      height: "75vh",
      width: "850px",
      maxWidth: "95vw",
      overflow: "hidden",
      fontFamily: "sans-serif",
      background: theme.colors.bgOverlay,
      backdropFilter: theme.backdropBlur,
      borderRadius: theme.borderRadius.lg,
      color: theme.colors.textPrimary,
      boxShadow: "0 10px 30px rgba(0,0,0,0.22)"
    }),
    header: css2({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: theme.spacing.lg,
      borderBottom: "1px solid " + theme.colors.borderLight
    }),
    title: css2({ margin: 0, fontSize: "16px", fontWeight: 600 }),
    closeBtn: css2({ background: "none", border: "none", color: theme.colors.textSecondary, fontSize: "20px", cursor: "pointer" }),
    statsBar: css2({
      display: "flex",
      gap: "24px",
      padding: "0 " + theme.spacing.xl + " " + theme.spacing.md,
      fontSize: "13px",
      color: theme.colors.textMuted,
      borderBottom: "1px solid " + theme.colors.borderLight
    }),
    filterBar: css2({
      display: "flex",
      alignItems: "center",
      gap: theme.spacing.md,
      padding: theme.spacing.md + " " + theme.spacing.xl,
      borderBottom: "1px solid " + theme.colors.borderLight,
      background: theme.colors.bgNav
    }),
    searchInput: css2({
      flex: 1,
      padding: "6px 14px",
      borderRadius: theme.borderRadius.full,
      border: "1px solid " + theme.colors.borderInput,
      background: "rgba(255,255,255,0.08)",
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.sm,
      outline: "none",
      "&:focus": { borderColor: theme.colors.primary }
    }),
    typeFilterSelect: css2({
      padding: "4px 10px",
      borderRadius: theme.borderRadius.full,
      border: "1px solid " + theme.colors.borderInput,
      background: "rgba(255,255,255,0.08)",
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.sm,
      outline: "none",
      cursor: "pointer",
      "& option": { background: "#2c2c2e", color: theme.colors.textPrimary }
    }),
    tableContainer: css2({
      flexGrow: 1,
      overflowY: "auto",
      padding: "0 " + theme.spacing.xl + " 20px",
      scrollbarWidth: "thin",
      scrollbarColor: "rgba(255,255,255,0.3) rgba(0,0,0,0.2)"
    }),
    table: css2({
      width: "100%",
      fontSize: "12px",
      borderCollapse: "collapse",
      color: theme.colors.textPrimary
    }),
    th: css2({
      position: "sticky",
      top: 0,
      background: "rgba(18,18,20,0.98)",
      backdropFilter: "blur(5px)",
      padding: "10px 8px",
      textAlign: "left",
      borderBottom: "1px solid " + theme.colors.borderMedium,
      fontWeight: 600,
      color: theme.colors.textSecondary,
      whiteSpace: "nowrap"
    }),
    td: css2({
      padding: "10px 8px",
      borderBottom: "1px solid " + theme.colors.borderLight,
      verticalAlign: "middle"
    }),
    checkbox: css2({
      width: "18px",
      height: "18px",
      cursor: "pointer",
      accentColor: theme.colors.primary
    }),
    cover: css2({
      width: "48px",
      height: "64px",
      objectFit: "cover",
      borderRadius: theme.borderRadius.sm,
      background: "rgba(255,255,255,0.05)",
      display: "block"
    }),
    desc: css2({
      maxWidth: "180px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }),
    typeBadge: css2({
      display: "inline-block",
      padding: "2px 8px",
      borderRadius: theme.borderRadius.full,
      fontSize: "11px",
      background: "rgba(255,255,255,0.1)",
      color: theme.colors.textPrimary
    }),
    statusBadge: css2({
      display: "inline-block",
      padding: "2px 8px",
      borderRadius: theme.borderRadius.full,
      fontSize: "11px"
    }),
    statusGroup: css2({
      display: "flex",
      gap: "4px",
      flexWrap: "wrap"
    }),
    statusDownloaded: css2({
      background: "rgba(46,125,50,0.25)",
      color: "#81c784",
      border: "1px solid rgba(46,125,50,0.5)"
    }),
    statusFailed: css2({
      background: "rgba(198,40,40,0.25)",
      color: "#ef9a9a",
      border: "1px solid rgba(198,40,40,0.5)"
    }),
    statusPending: css2({
      background: "rgba(254,44,85,0.15)",
      color: "#ff8a80",
      border: "1px solid rgba(254,44,85,0.4)"
    }),
    actionBar: css2({
      display: "flex",
      gap: "10px",
      padding: theme.spacing.md + " " + theme.spacing.xl,
      borderTop: "1px solid " + theme.colors.borderLight,
      flexWrap: "wrap"
    }),
    btn: css2({
      padding: "7px 18px",
      borderRadius: theme.borderRadius.full,
      border: "1px solid " + theme.colors.borderInput,
      background: "transparent",
      color: "rgba(255,255,255,0.9)",
      fontSize: "12px",
      cursor: "pointer",
      transition: "0.2s",
      "&:disabled": { opacity: 0.5, cursor: "not-allowed" }
    }),
    btnPrimary: css2({
      padding: "7px 18px",
      borderRadius: theme.borderRadius.full,
      border: "none",
      background: theme.colors.primary,
      color: "#fff",
      fontSize: "12px",
      cursor: "pointer",
      transition: "0.2s",
      fontWeight: 500,
      "&:disabled": { opacity: 0.5, cursor: "not-allowed" }
    }),
    failSection: css2({ marginTop: theme.spacing.lg }),
    failTitle: css2({ margin: "0 0 8px", fontSize: "14px", color: "#ff6b6b" }),
    statRow: css2({
      display: "flex",
      justifyContent: "space-between",
      padding: "6px 0",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      fontSize: "13px"
    }),
    statLabel: css2({ color: theme.colors.textMuted }),
    statValue: css2({ color: theme.colors.textPrimary, fontWeight: 500 }),
    failTable: css2({ width: "100%", fontSize: "12px", borderCollapse: "collapse", borderRadius: theme.borderRadius.sm, overflow: "hidden" }),
    failTh: css2({ padding: theme.spacing.sm, background: "rgba(255,255,255,0.06)", textAlign: "left", color: theme.colors.textMuted, fontWeight: 600 }),
    failTd: css2({ padding: theme.spacing.sm, borderBottom: "1px solid " + theme.colors.borderLight, color: theme.colors.textSecondary }),
    progressBarContainer: css2({
      height: "6px",
      background: "rgba(255,255,255,0.1)",
      borderRadius: "3px",
      overflow: "hidden"
    }),
    progressBarFill: css2({
      height: "100%",
      background: theme.colors.primary,
      borderRadius: "3px",
      transition: "width 0.3s"
    }),
    footer: css2({
      padding: "8px 32px",
      fontSize: "11px",
      color: theme.colors.textDim,
      borderTop: "1px solid " + theme.colors.borderLight
    }),
    statusText: css2({
      fontSize: "12px",
      color: theme.colors.textMuted,
      margin: "0 32px 6px"
    }),
    jobContent: css2({
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
      overflow: "hidden"
    }),
    jobSummary: css2({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: theme.spacing.md,
      padding: theme.spacing.md + " " + theme.spacing.xl,
      borderBottom: "1px solid " + theme.colors.borderLight,
      fontSize: "13px",
      color: theme.colors.textMuted,
      flexWrap: "wrap"
    }),
    progressSection: css2({
      padding: theme.spacing.md + " " + theme.spacing.xl + " 0"
    }),
    progressLabel: css2({
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "6px",
      fontSize: "12px",
      color: theme.colors.textMuted
    }),
    logContainer: css2({
      flexGrow: 1,
      minHeight: 0,
      overflowY: "auto",
      margin: theme.spacing.md + " " + theme.spacing.xl,
      padding: theme.spacing.sm,
      background: "rgba(0,0,0,0.28)",
      border: "1px solid " + theme.colors.borderLight,
      borderRadius: theme.borderRadius.sm,
      scrollbarWidth: "thin",
      scrollbarColor: "rgba(255,255,255,0.3) rgba(0,0,0,0.2)"
    }),
    logList: css2({ margin: 0, padding: 0, listStyle: "none" }),
    logItem: css2({
      display: "flex",
      gap: "8px",
      padding: "4px 8px",
      fontSize: "12px",
      lineHeight: 1.5,
      borderBottom: "1px solid rgba(255,255,255,0.04)",
      alignItems: "baseline"
    }),
    logTime: css2({ color: theme.colors.textDim, whiteSpace: "nowrap", fontFamily: "monospace" }),
    logType: css2({ color: theme.colors.textSecondary, whiteSpace: "nowrap" }),
    logDesc: css2({
      flex: 1,
      minWidth: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }),
    logStatusInfo: css2({ color: theme.colors.textMuted, whiteSpace: "nowrap" }),
    logStatusRunning: css2({ color: "#ffb74d", whiteSpace: "nowrap" }),
    logStatusSuccess: css2({ color: "#81c784", whiteSpace: "nowrap" }),
    logStatusFailed: css2({ color: "#ef9a9a", whiteSpace: "nowrap" }),
    emptyLog: css2({ padding: "24px", textAlign: "center", color: theme.colors.textDim, fontSize: "12px" })
  };
  var ProfileJobModalApp = /* @__PURE__ */ __name(({ downloadManager, onClose }) => {
    const [snap, setSnap] = d2(() => downloadManager.getSnapshot());
    const [searchText, setSearchText] = d2("");
    const [typeFilter, setTypeFilter] = d2("all");
    const logRef = A2(null);
    const buildMediaList = q2(() => {
      const knownIds = downloadManager.jobState?.knownIds || [];
      return knownIds.map((id) => {
        const media = downloadManager.dataService.feedMediaCache.get(id);
        if (!media) return null;
        const downloaded = downloadManager.jobState?.downloadedIds?.includes(id) || false;
        const failed = downloadManager.jobState?.failedItems?.[id];
        const coverDownloaded = downloadManager.jobState?.coverDownloadedIds?.includes(id) || false;
        const coverFailed = downloadManager.jobState?.coverFailedItems?.[id];
        return {
          awemeId: id,
          media,
          downloaded,
          failed,
          coverDownloaded,
          coverFailed,
          selected: downloadManager.selectedIds.has(id),
          type: media.images && media.images.length > 0 ? "album" : "video"
        };
      }).filter(Boolean).sort((a3, b2) => (b2.media.createTime || 0) - (a3.media.createTime || 0));
    }, [downloadManager]);
    const refresh = q2(() => {
      setSnap(downloadManager.getSnapshot());
      setRawMediaList(buildMediaList());
    }, [buildMediaList, downloadManager]);
    const [rawMediaList, setRawMediaList] = d2([]);
    h2(() => {
      refresh();
      const off1 = downloadManager.on("stateChanged", refresh);
      const off2 = downloadManager.on("countsUpdated", refresh);
      const off3 = downloadManager.on("jobLog", refresh);
      const timer = setInterval(refresh, 2e3);
      return () => {
        off1();
        off2();
        off3();
        clearInterval(timer);
      };
    }, [refresh]);
    h2(() => {
      const el = logRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    }, [snap.jobLog.length]);
    const filteredList = T2(() => {
      let list = rawMediaList;
      if (typeFilter !== "all") list = list.filter((item) => item.type === typeFilter);
      if (searchText.trim()) {
        const q3 = searchText.toLowerCase().trim();
        list = list.filter((item) => {
          const desc = (item.media.desc || "").toLowerCase();
          const shortId = MediaHandler.toShortId(item.awemeId).toLowerCase();
          return desc.includes(q3) || item.awemeId.toLowerCase().includes(q3) || shortId.includes(q3);
        });
      }
      return list;
    }, [rawMediaList, searchText, typeFilter]);
    const isFilteredAllSelected = filteredList.length > 0 && filteredList.every((item) => item.selected);
    const handleSelectAll = /* @__PURE__ */ __name((checked) => {
      filteredList.forEach((item) => downloadManager.markSelect(item.awemeId, checked));
    }, "handleSelectAll");
    const handleSelectRow = /* @__PURE__ */ __name((awemeId, checked) => {
      downloadManager.markSelect(awemeId, checked);
    }, "handleSelectRow");
    const startJob = /* @__PURE__ */ __name(async (downloadType2 = "content") => {
      try {
        await downloadManager.startJob(downloadType2);
      } catch (e3) {
        alert(e3.message || e3);
      }
    }, "startJob");
    const resumeJob = /* @__PURE__ */ __name(async () => {
      try {
        await downloadManager.resumeJob();
      } catch (e3) {
        alert(e3.message || e3);
      }
    }, "resumeJob");
    const isJobView = snap.jobRunning || snap.jobStatus === "running" || snap.jobStatus === "paused" || snap.jobStatus === "completed";
    const downloadType = snap.downloadType;
    const progressCount = downloadType === "cover" ? snap.counts.coverDownloaded : snap.counts.downloaded;
    const progressTotal = Math.max(snap.counts.selected, 1);
    const failedSections = [
      { title: "内容失败详情", count: snap.counts.failed, items: downloadManager.jobState?.failedItems },
      { title: "封面失败详情", count: snap.counts.coverFailed, items: downloadManager.jobState?.coverFailedItems }
    ].filter((section) => section.count > 0);
    const logStatusClass = /* @__PURE__ */ __name((status) => {
      if (status === "running") return s3.logStatusRunning;
      if (status === "success") return s3.logStatusSuccess;
      if (status === "failed") return s3.logStatusFailed;
      return s3.logStatusInfo;
    }, "logStatusClass");
    const logStatusLabel = /* @__PURE__ */ __name((status) => {
      if (status === "running") return "下载中";
      if (status === "success") return "成功";
      if (status === "failed") return "失败";
      return "信息";
    }, "logStatusLabel");
    return /* @__PURE__ */ u3("div", { className: s3.overlay, onClick: onClose, children: /* @__PURE__ */ u3("div", { className: s3.modal, onClick: (e3) => e3.stopPropagation(), children: [
      /* @__PURE__ */ u3("div", { className: s3.header, children: [
        /* @__PURE__ */ u3("h3", { className: s3.title, children: [
          "批量下载 - ",
          snap.profileName
        ] }),
        /* @__PURE__ */ u3("div", { className: s3.statusText, children: [
          "状态: ",
          snap.statusLabel || "待命"
        ] }),
        /* @__PURE__ */ u3("button", { className: s3.closeBtn, onClick: onClose, children: "x" })
      ] }),
      isJobView ? /* @__PURE__ */ u3("div", { className: s3.jobContent, children: [
        /* @__PURE__ */ u3("div", { className: s3.jobSummary, children: [
          /* @__PURE__ */ u3("span", { children: [
            "下载类型: ",
            downloadType === "cover" ? "封面" : "内容"
          ] }),
          /* @__PURE__ */ u3("span", { children: [
            "已选: ",
            snap.counts.selected
          ] }),
          /* @__PURE__ */ u3("span", { children: [
            "成功: ",
            progressCount
          ] }),
          /* @__PURE__ */ u3("span", { children: [
            "失败: ",
            downloadType === "cover" ? snap.counts.coverFailed : snap.counts.failed
          ] })
        ] }),
        /* @__PURE__ */ u3("div", { className: s3.progressSection, children: [
          /* @__PURE__ */ u3("div", { className: s3.progressLabel, children: [
            /* @__PURE__ */ u3("span", { children: "下载进度" }),
            /* @__PURE__ */ u3("span", { children: [
              progressCount,
              "/",
              progressTotal
            ] })
          ] }),
          /* @__PURE__ */ u3("div", { className: s3.progressBarContainer, children: /* @__PURE__ */ u3("div", { className: s3.progressBarFill, style: { width: progressCount / progressTotal * 100 + "%" } }) })
        ] }),
        /* @__PURE__ */ u3("div", { className: s3.logContainer, ref: logRef, children: snap.jobLog.length === 0 ? /* @__PURE__ */ u3("div", { className: s3.emptyLog, children: "暂无日志" }) : /* @__PURE__ */ u3("ul", { className: s3.logList, children: snap.jobLog.map((log, index) => /* @__PURE__ */ u3("li", { className: s3.logItem, children: [
          /* @__PURE__ */ u3("span", { className: s3.logTime, children: new Date(log.time).toLocaleTimeString() }),
          /* @__PURE__ */ u3("span", { className: s3.logType, children: log.type === "cover" ? "封面" : "内容" }),
          /* @__PURE__ */ u3("span", { className: s3.logDesc, children: log.desc || log.awemeId || log.message }),
          /* @__PURE__ */ u3("span", { className: logStatusClass(log.status), children: logStatusLabel(log.status) })
        ] }, index)) }) }),
        /* @__PURE__ */ u3("div", { className: s3.actionBar, children: snap.jobRunning ? /* @__PURE__ */ u3(S, { children: [
          /* @__PURE__ */ u3("button", { className: s3.btn, onClick: () => downloadManager.pauseJob(), disabled: snap.jobStopRequested, children: "暂停" }),
          /* @__PURE__ */ u3("button", { className: s3.btn, onClick: () => downloadManager.endJob(), children: "结束" })
        ] }) : snap.jobStatus === "paused" ? /* @__PURE__ */ u3(S, { children: [
          /* @__PURE__ */ u3("button", { className: s3.btnPrimary, onClick: resumeJob, children: "继续" }),
          /* @__PURE__ */ u3("button", { className: s3.btn, onClick: () => downloadManager.endJob(), children: "结束" })
        ] }) : /* @__PURE__ */ u3(S, { children: [
          /* @__PURE__ */ u3("button", { className: s3.btn, onClick: () => downloadManager.endJob(), children: "结束" }),
          /* @__PURE__ */ u3("button", { className: s3.btn, onClick: onClose, children: "关闭" })
        ] }) }),
        /* @__PURE__ */ u3("div", { className: s3.footer, children: "关闭弹窗不会中断后台下载；结束后可回到选择阶段。" })
      ] }) : /* @__PURE__ */ u3(S, { children: [
        /* @__PURE__ */ u3("div", { className: s3.statsBar, children: [
          /* @__PURE__ */ u3("span", { children: [
            "已发现: ",
            snap.counts.known
          ] }),
          /* @__PURE__ */ u3("span", { children: [
            "内容已下载: ",
            snap.counts.downloaded
          ] }),
          /* @__PURE__ */ u3("span", { children: [
            "内容失败: ",
            snap.counts.failed
          ] }),
          /* @__PURE__ */ u3("span", { children: [
            "封面已下载: ",
            snap.counts.coverDownloaded
          ] }),
          /* @__PURE__ */ u3("span", { children: [
            "封面失败: ",
            snap.counts.coverFailed
          ] }),
          /* @__PURE__ */ u3("span", { children: [
            "已选: ",
            snap.counts.selected
          ] })
        ] }),
        /* @__PURE__ */ u3("div", { className: s3.filterBar, children: [
          /* @__PURE__ */ u3("input", { type: "text", placeholder: "搜索描述...", className: s3.searchInput, value: searchText, onInput: (e3) => setSearchText(e3.target.value) }),
          /* @__PURE__ */ u3("select", { className: s3.typeFilterSelect, value: typeFilter, onChange: (e3) => setTypeFilter(e3.target.value), children: [
            /* @__PURE__ */ u3("option", { value: "all", children: "全部" }),
            /* @__PURE__ */ u3("option", { value: "video", children: "视频" }),
            /* @__PURE__ */ u3("option", { value: "album", children: "图集" })
          ] })
        ] }),
        /* @__PURE__ */ u3("div", { className: s3.tableContainer, children: [
          /* @__PURE__ */ u3("table", { className: s3.table, children: [
            /* @__PURE__ */ u3("thead", { children: /* @__PURE__ */ u3("tr", { children: [
              /* @__PURE__ */ u3("th", { className: s3.th, style: { width: "40px" }, children: /* @__PURE__ */ u3("input", { type: "checkbox", className: s3.checkbox, checked: isFilteredAllSelected, onChange: (e3) => handleSelectAll(e3.target.checked) }) }),
              /* @__PURE__ */ u3("th", { className: s3.th, style: { width: "60px" }, children: "封面" }),
              /* @__PURE__ */ u3("th", { className: s3.th, children: "描述" }),
              /* @__PURE__ */ u3("th", { className: s3.th, style: { width: "90px" }, children: "类型" }),
              /* @__PURE__ */ u3("th", { className: s3.th, style: { width: "170px" }, children: "状态" }),
              /* @__PURE__ */ u3("th", { className: s3.th, style: { width: "110px" }, children: "发布时间" })
            ] }) }),
            /* @__PURE__ */ u3("tbody", { children: filteredList.map((item) => {
              const media = item.media;
              const coverUrl = getBestCoverUrl(media) || "";
              const desc = media.desc || "(无描述)";
              const createDate = media.createTime ? new Date(media.createTime * 1e3).toLocaleDateString() : "-";
              const typeLabel = item.type === "album" ? "图集" : "视频";
              let contentStatusCls = s3.statusPending;
              let contentStatusText = "内容 待下载";
              if (item.downloaded) {
                contentStatusCls = s3.statusDownloaded;
                contentStatusText = "内容 已下载";
              } else if (item.failed) {
                contentStatusCls = s3.statusFailed;
                contentStatusText = "内容 失败(" + item.failed.count + ")";
              }
              let coverStatusCls = s3.statusPending;
              let coverStatusText = "封面 待下载";
              if (item.coverDownloaded) {
                coverStatusCls = s3.statusDownloaded;
                coverStatusText = "封面 已下载";
              } else if (item.coverFailed) {
                coverStatusCls = s3.statusFailed;
                coverStatusText = "封面 失败(" + item.coverFailed.count + ")";
              }
              return /* @__PURE__ */ u3("tr", { children: [
                /* @__PURE__ */ u3("td", { className: s3.td, children: /* @__PURE__ */ u3(
                  "input",
                  {
                    type: "checkbox",
                    className: s3.checkbox,
                    checked: item.selected,
                    onChange: (e3) => handleSelectRow(item.awemeId, e3.target.checked)
                  }
                ) }),
                /* @__PURE__ */ u3("td", { className: s3.td, children: coverUrl && /* @__PURE__ */ u3("img", { src: coverUrl, className: s3.cover, alt: "" }) }),
                /* @__PURE__ */ u3("td", { className: s3.td, children: [
                  /* @__PURE__ */ u3("div", { className: s3.desc, title: desc, children: desc }),
                  /* @__PURE__ */ u3("div", { style: "font-size:11px;color:rgba(255,255,255,0.5);", children: [
                    "ID: ",
                    MediaHandler.toShortId ? "…" + MediaHandler.toShortId(item.awemeId).slice(-6) : item.awemeId.slice(0, 8) + "…"
                  ] })
                ] }),
                /* @__PURE__ */ u3("td", { className: s3.td, children: /* @__PURE__ */ u3("span", { className: s3.typeBadge, children: typeLabel }) }),
                /* @__PURE__ */ u3("td", { className: s3.td, children: /* @__PURE__ */ u3("div", { className: s3.statusGroup, children: [
                  /* @__PURE__ */ u3("span", { className: s3.statusBadge + " " + contentStatusCls, children: contentStatusText }),
                  /* @__PURE__ */ u3("span", { className: s3.statusBadge + " " + coverStatusCls, children: coverStatusText })
                ] }) }),
                /* @__PURE__ */ u3("td", { className: s3.td, children: createDate })
              ] }, item.awemeId);
            }) })
          ] }),
          filteredList.length === 0 && /* @__PURE__ */ u3("div", { style: "text-align:center;padding:40px;color:rgba(255,255,255,0.5);", children: rawMediaList.length === 0 ? "暂无作品数据，请先滚动主页加载作品。" : "没有匹配的搜索结果。" }),
          failedSections.map((section) => /* @__PURE__ */ u3("div", { className: s3.failSection, children: [
            /* @__PURE__ */ u3("h4", { className: s3.failTitle, children: section.title }),
            /* @__PURE__ */ u3("table", { className: s3.failTable, children: [
              /* @__PURE__ */ u3("thead", { children: /* @__PURE__ */ u3("tr", { children: [
                /* @__PURE__ */ u3("th", { className: s3.failTh, children: "ID" }),
                /* @__PURE__ */ u3("th", { className: s3.failTh, children: "原因" }),
                /* @__PURE__ */ u3("th", { className: s3.failTh, children: "时间" })
              ] }) }),
              /* @__PURE__ */ u3("tbody", { children: Object.entries(section.items || {}).slice(0, 50).map(([id, info]) => /* @__PURE__ */ u3("tr", { children: [
                /* @__PURE__ */ u3("td", { className: s3.failTd, children: [
                  id.slice(0, 12),
                  "..."
                ] }),
                /* @__PURE__ */ u3("td", { className: s3.failTd, children: info.reason || "" }),
                /* @__PURE__ */ u3("td", { className: s3.failTd, children: info.updatedAt ? new Date(info.updatedAt).toLocaleTimeString() : "" })
              ] }, id)) })
            ] })
          ] }, section.title))
        ] }),
        /* @__PURE__ */ u3("div", { className: s3.footer, children: "提示：勾选作品后点击“开始下载”下载内容，点击“下载封面”下载封面。使用类型筛选快速定位内容。" }),
        /* @__PURE__ */ u3("div", { className: s3.actionBar, children: [
          /* @__PURE__ */ u3("button", { className: s3.btn, onClick: () => handleSelectAll(!isFilteredAllSelected), disabled: filteredList.length === 0, children: isFilteredAllSelected ? "取消全选" : "全选" }),
          /* @__PURE__ */ u3("button", { className: s3.btnPrimary, onClick: () => startJob("content"), disabled: snap.counts.selected === 0, children: "开始下载" }),
          /* @__PURE__ */ u3("button", { className: s3.btn, onClick: () => startJob("cover"), disabled: snap.counts.selected === 0, children: "下载封面" }),
          /* @__PURE__ */ u3(
            "button",
            {
              className: s3.btn,
              onClick: () => {
                if (confirm("确定重置当前作者的下载记录吗？这将清除已下载和失败记录。")) downloadManager.resetState();
              },
              children: "重置"
            }
          ),
          /* @__PURE__ */ u3("button", { className: s3.btn, onClick: () => downloadManager.mediaHandler.open_config_modal(), children: "设置" }),
          /* @__PURE__ */ u3("button", { className: s3.btn, onClick: onClose, children: "关闭" })
        ] })
      ] })
    ] }) });
  }, "ProfileJobModalApp");

  // src/ui/FloatingPanelUI.tsx
  init_jsxRuntime_module();
  var css3 = createCSS();
  var s4 = {
    panelClosed: css3({ position: "fixed", right: "24px", bottom: "80px", zIndex: 999999, display: "flex", flexDirection: "column", gap: theme.spacing.md }),
    panelOpen: css3({ position: "fixed", right: "24px", bottom: "80px", zIndex: 999999, display: "flex", flexDirection: "column", gap: theme.spacing.md, minWidth: "240px" }),
    fab: css3({
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      border: "none",
      background: theme.colors.primary,
      color: "#fff",
      fontSize: "12px",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(254,44,85,0.4)",
      alignSelf: "flex-end",
      transition: "0.2s"
    }),
    card: css3({
      background: "rgba(18,18,20,0.94)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "16px",
      padding: "16px",
      color: "#fff",
      fontSize: "13px",
      fontFamily: "sans-serif",
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      maxWidth: "300px"
    }),
    title: css3({ margin: "0 0 12px", fontSize: "15px", fontWeight: 600 }),
    row: css3({ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }),
    label: css3({ color: "rgba(255,255,255,0.6)" }),
    value: css3({ color: "#fff", fontWeight: 500 }),
    btnGroup: css3({ display: "flex", gap: "8px", marginTop: "12px", flexWrap: "wrap" }),
    btn: css3({
      flex: 1,
      padding: "8px 12px",
      border: "1px solid rgba(255,255,255,0.2)",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.08)",
      color: "#fff",
      cursor: "pointer",
      fontSize: "12px",
      textAlign: "center",
      transition: "0.2s",
      minWidth: "60px",
      wordBreak: "keep-all",
      whiteSpace: "nowrap"
    }),
    btnPrimary: css3({
      flex: 1,
      padding: "8px 12px",
      border: "none",
      borderRadius: "20px",
      background: theme.colors.primary,
      color: "#fff",
      cursor: "pointer",
      fontSize: "12px",
      textAlign: "center",
      transition: "0.2s",
      minWidth: "60px",
      wordBreak: "keep-all",
      whiteSpace: "nowrap"
    }),
    btnDanger: css3({
      flex: 1,
      padding: "8px 12px",
      border: "1px solid rgba(255,77,79,0.5)",
      borderRadius: "20px",
      background: "rgba(255,77,79,0.15)",
      color: "#ff6b6b",
      cursor: "pointer",
      fontSize: "12px",
      textAlign: "center",
      transition: "0.2s",
      minWidth: "60px",
      wordBreak: "keep-all",
      whiteSpace: "nowrap"
    }),
    summary: css3({ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "8px", lineHeight: 1.4, whiteSpace: "pre-line" })
  };
  var FloatingPanelApp = /* @__PURE__ */ __name(({
    dataService,
    downloadManager,
    onOpenSettings
  }) => {
    const [exp, setExp] = d2(() => Config.global.features.enable_profile_downloader);
    const [snap, setSnap] = d2(() => downloadManager.getSnapshot());
    const [showJob, setShowJob] = d2(false);
    h2(() => {
      const off = downloadManager.on("stateChanged", () => setSnap(downloadManager.getSnapshot()));
      const off2 = downloadManager.on("countsUpdated", () => setSnap(downloadManager.getSnapshot()));
      return () => {
        off();
        off2();
      };
    }, []);
    if (!dataService.isProfilePage()) return null;
    const startJob = /* @__PURE__ */ __name(async () => {
      try {
        await downloadManager.startJob();
      } catch (e3) {
        alert(e3.message || e3);
      }
    }, "startJob");
    return /* @__PURE__ */ u3("div", { className: exp ? s4.panelOpen : s4.panelClosed, children: [
      /* @__PURE__ */ u3(
        "button",
        {
          className: s4.fab,
          onClick: () => {
            const next = !exp;
            setExp(next);
            Config.global.features.enable_profile_downloader = next;
            Config.global.save();
          },
          children: exp ? "❌" : "插件"
        }
      ),
      exp && /* @__PURE__ */ u3("div", { className: s4.card, children: [
        /* @__PURE__ */ u3("h4", { className: s4.title, children: snap.profileName || "作者主页" }),
        /* @__PURE__ */ u3("div", { className: s4.row, children: [
          /* @__PURE__ */ u3("span", { className: s4.label, children: "状态" }),
          /* @__PURE__ */ u3("span", { className: s4.value, children: snap.statusLabel })
        ] }),
        /* @__PURE__ */ u3("div", { className: s4.row, children: [
          /* @__PURE__ */ u3("span", { className: s4.label, children: "已发现" }),
          /* @__PURE__ */ u3("span", { className: s4.value, children: snap.counts.known })
        ] }),
        /* @__PURE__ */ u3("div", { className: s4.row, children: [
          /* @__PURE__ */ u3("span", { className: s4.label, children: "已选中" }),
          /* @__PURE__ */ u3("span", { className: s4.value, children: snap.counts.selected })
        ] }),
        /* @__PURE__ */ u3("div", { className: s4.row, children: [
          /* @__PURE__ */ u3("span", { className: s4.label, children: "已下载" }),
          /* @__PURE__ */ u3("span", { className: s4.value, children: snap.counts.downloaded })
        ] }),
        /* @__PURE__ */ u3("div", { className: s4.row, children: [
          /* @__PURE__ */ u3("span", { className: s4.label, children: "失败" }),
          /* @__PURE__ */ u3("span", { className: s4.value, children: snap.counts.failed })
        ] }),
        /* @__PURE__ */ u3("div", { className: s4.btnGroup, children: [
          /* @__PURE__ */ u3("button", { className: s4.btn, onClick: () => downloadManager.markSelectAll(!downloadManager.isSelectAll()), children: downloadManager.isSelectAll() ? "取消全选" : "全选" }),
          /* @__PURE__ */ u3("button", { className: s4.btn, onClick: () => onOpenSettings?.(), children: "设置" }),
          /* @__PURE__ */ u3("button", { className: s4.btn, onClick: () => setShowJob(true), children: "查看详情" }),
          /* @__PURE__ */ u3("br", {}),
          !snap.jobRunning ? /* @__PURE__ */ u3("button", { className: s4.btnPrimary, onClick: startJob, disabled: snap.counts.selected === 0, children: "开始下载" }) : /* @__PURE__ */ u3("button", { className: s4.btnDanger, onClick: () => downloadManager.pauseJob(), children: "暂停" })
        ] }),
        /* @__PURE__ */ u3("div", { className: s4.summary, children: snap.summary })
      ] }),
      showJob && /* @__PURE__ */ u3(ProfileJobModalApp, { downloadManager, onClose: () => setShowJob(false) })
    ] });
  }, "FloatingPanelApp");

  // src/ui/FloatingPanel.tsx
  init_jsxRuntime_module();
  var _FloatingPanel = class _FloatingPanel {
    constructor() {
      this.root = null;
      this.mounted = false;
    }
    // 挂载浮动面板到 DOM
    mount({ dataService, downloadManager, onOpenSettings }) {
      this.root = document.createElement("div");
      this.root.id = "dy-dl-floating-panel";
      document.body.appendChild(this.root);
      this.mounted = true;
      try {
        R(/* @__PURE__ */ u3(FloatingPanelApp, { dataService, downloadManager, onOpenSettings }), this.root);
      } catch (e3) {
        console.error("[dy-dl] FloatingPanelUI 加载失败", e3);
      }
    }
    // 卸载浮动面板
    unmount() {
      if (this.root && this.mounted) {
        R(null, this.root);
        this.root.remove();
        this.root = null;
        this.mounted = false;
      }
    }
  };
  __name(_FloatingPanel, "FloatingPanel");
  var FloatingPanel = _FloatingPanel;

  // src/handlers/profile/ProfileDownloadManager.ts
  init_Emitter();

  // src/core/download/ProfileDownloadState.ts
  var _ProfileDownloadState = class _ProfileDownloadState {
    static _storage_key(profileKey) {
      return `${this.STORAGE_PREFIX}${profileKey}`;
    }
    static create_default(profile = {}) {
      return {
        version: 1,
        profileKey: profile.profileKey || "",
        secUid: profile.secUid || "",
        profileName: profile.profileName || "",
        tabKey: profile.tabKey || "post",
        status: "idle",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        lastRunAt: 0,
        completedAt: 0,
        knownIds: [],
        downloadedIds: [],
        failedItems: {},
        coverDownloadedIds: [],
        coverFailedItems: {}
      };
    }
    static load(profileKey, profile = {}) {
      try {
        const raw = localStorage.getItem(this._storage_key(profileKey));
        if (!raw) {
          return this.create_default({ ...profile, profileKey });
        }
        const parsed = JSON.parse(raw);
        return {
          ...this.create_default({ ...profile, profileKey }),
          ...parsed,
          profileKey,
          secUid: profile.secUid || parsed.secUid || "",
          profileName: profile.profileName || parsed.profileName || "",
          tabKey: profile.tabKey || parsed.tabKey || "post",
          knownIds: Array.isArray(parsed.knownIds) ? parsed.knownIds : [],
          downloadedIds: Array.isArray(parsed.downloadedIds) ? parsed.downloadedIds : [],
          failedItems: parsed.failedItems && typeof parsed.failedItems === "object" ? parsed.failedItems : {},
          coverDownloadedIds: Array.isArray(parsed.coverDownloadedIds) ? parsed.coverDownloadedIds : [],
          coverFailedItems: parsed.coverFailedItems && typeof parsed.coverFailedItems === "object" ? parsed.coverFailedItems : {}
        };
      } catch (error) {
        console.error("[dy-dl]加载作者下载状态失败", error);
        return this.create_default({ ...profile, profileKey });
      }
    }
    static save(profileKey, state) {
      const nextState = { ...state, updatedAt: Date.now() };
      localStorage.setItem(this._storage_key(profileKey), JSON.stringify(nextState));
      return nextState;
    }
    static reset(profileKey) {
      localStorage.removeItem(this._storage_key(profileKey));
    }
  };
  __name(_ProfileDownloadState, "ProfileDownloadState");
  _ProfileDownloadState.STORAGE_PREFIX = "__douyin-dl-profile-state__:";
  var ProfileDownloadState = _ProfileDownloadState;

  // src/utils/performance.ts
  function throttle(func, limit) {
    let inThrottle = false;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  __name(throttle, "throttle");

  // src/handlers/profile/ProfileDownloadManager.ts
  var _ProfileDownloadManager = class _ProfileDownloadManager extends Emitter {
    constructor({ mediaHandler, dataService }) {
      super();
      this.jobState = null;
      this.jobRunning = false;
      this.jobStopRequested = false;
      this.jobEndRequested = false;
      this.jobLog = [];
      this.currentDownloadType = "content";
      /** 选中的媒体 */
      this.selectedIds = /* @__PURE__ */ new Set();
      this.collect_timer = null;
      this.mediaHandler = mediaHandler;
      this.dataService = dataService;
      const collect = throttle(this.collect.bind(this), 1e3);
      this.collect_timer = setInterval(collect, 5 * 1e3);
      window.addEventListener("wheel", collect, { passive: false });
    }
    collect() {
      if (!this.dataService.isProfilePage()) return;
      this._ensureJobState();
      const prev = this.jobState?.knownIds.length || 0;
      const mediaList = this.dataService.collectCurrentFeedMedia();
      this.mergeMediaIntoState(mediaList);
      const changed = (this.jobState?.knownIds.length || 0) - prev;
      if (changed) {
        this.emit("stateChanged", this);
        this.emit("countsUpdated", this.getCounts());
      }
    }
    // 确保 jobState 与当前页面 profile 匹配
    _ensureJobState(profile) {
      if (!profile) {
        profile = this.dataService.getProfileContext();
      }
      if (!profile) {
        this.jobState = null;
        return null;
      }
      if (!this.jobState || !this.jobRunning && this.jobState.profileKey !== profile.profileKey) {
        this.jobState = ProfileDownloadState.load(profile.profileKey, profile);
      }
      return this.jobState;
    }
    _saveJobState() {
      if (!this.jobState?.profileKey) return this.jobState;
      this.jobState = ProfileDownloadState.save(this.jobState.profileKey, this.jobState);
      return this.jobState;
    }
    _push_log(status, message, media, type = this.currentDownloadType) {
      this.jobLog.push({
        time: Date.now(),
        type,
        awemeId: media?.awemeId || "",
        desc: media?.desc || "",
        status,
        message
      });
      if (this.jobLog.length > 200) this.jobLog.splice(0, this.jobLog.length - 200);
      this.emit("jobLog", this.jobLog.slice());
    }
    mergeMediaIntoState(mediaList) {
      if (!this.jobState) return;
      const knownIds = new Set(this.jobState.knownIds || []);
      mediaList.forEach((media) => {
        if (media?.awemeId) knownIds.add(media.awemeId);
      });
      this.jobState.knownIds = Array.from(knownIds);
    }
    markDownloaded(media, downloadType = "content") {
      if (!this.jobState || !media?.awemeId) return;
      if (downloadType === "cover") {
        const downloadedIds = new Set(this.jobState.coverDownloadedIds || []);
        downloadedIds.add(media.awemeId);
        this.jobState.coverDownloadedIds = Array.from(downloadedIds);
        if (this.jobState.coverFailedItems?.[media.awemeId]) delete this.jobState.coverFailedItems[media.awemeId];
      } else {
        const downloadedIds = new Set(this.jobState.downloadedIds || []);
        downloadedIds.add(media.awemeId);
        this.jobState.downloadedIds = Array.from(downloadedIds);
        if (this.jobState.failedItems?.[media.awemeId]) delete this.jobState.failedItems[media.awemeId];
      }
    }
    markFailed(media, reason = "unknown", downloadType = "content") {
      if (!this.jobState || !media?.awemeId) return;
      if (downloadType === "cover") {
        const prev = this.jobState.coverFailedItems?.[media.awemeId] || {};
        this.jobState.coverFailedItems = this.jobState.coverFailedItems || {};
        this.jobState.coverFailedItems[media.awemeId] = { count: Number(prev.count || 0) + 1, reason, updatedAt: Date.now(), desc: media.desc || prev.desc || "" };
      } else {
        const prev = this.jobState.failedItems?.[media.awemeId] || {};
        this.jobState.failedItems = this.jobState.failedItems || {};
        this.jobState.failedItems[media.awemeId] = { count: Number(prev.count || 0) + 1, reason, updatedAt: Date.now(), desc: media.desc || prev.desc || "" };
      }
    }
    markSelect(awemeId, selected) {
      const changed = selected ? !this.selectedIds.has(awemeId) : this.selectedIds.has(awemeId);
      if (selected) this.selectedIds.add(awemeId);
      else this.selectedIds.delete(awemeId);
      if (changed) {
        this.emit("stateChanged", this);
        this.emit("countsUpdated", this.getCounts());
      }
    }
    markSelectAll(selected) {
      if (!selected) this.selectedIds.clear();
      else this.jobState?.knownIds?.forEach((id) => this.selectedIds.add(id));
      this.emit("stateChanged", this);
      this.emit("countsUpdated", this.getCounts());
    }
    isSelectAll() {
      return this.selectedIds.size === this.jobState?.knownIds?.length;
    }
    _isFeedSelected(awemeId) {
      return this.selectedIds.has(awemeId);
    }
    getCounts() {
      return {
        known: this.jobState?.knownIds?.length || 0,
        downloaded: this.jobState?.downloadedIds?.length || 0,
        failed: Object.keys(this.jobState?.failedItems || {}).length,
        coverDownloaded: this.jobState?.coverDownloadedIds?.length || 0,
        coverFailed: Object.keys(this.jobState?.coverFailedItems || {}).length,
        selected: this.selectedIds.size,
        is_selected_all: this.isSelectAll()
      };
    }
    getSnapshot(profileNameFallback = "当前作者主页") {
      if (!this.jobState) this._ensureJobState();
      const isProfilePage = this.dataService.isProfilePage();
      const profile = !this.jobRunning && isProfilePage ? this.dataService.getProfileContext() : null;
      const profileName = this.jobState?.profileName || profile?.profileName || profileNameFallback;
      const statusLabel = this.jobRunning ? this.jobStopRequested ? this.jobEndRequested ? "结束中..." : "暂停中..." : "进行中" : this.jobState?.status === "completed" ? "已完成" : this.jobState?.status === "paused" ? "已暂停" : this.jobState?.status === "idle" ? "已结束" : "待开始";
      const counts = this.getCounts();
      return {
        jobRunning: this.jobRunning,
        jobStopRequested: this.jobStopRequested,
        jobStatus: this.jobState?.status || "idle",
        profileName,
        statusLabel,
        counts,
        jobLog: this.jobLog.slice(),
        downloadType: this.currentDownloadType,
        summary: `${statusLabel} 选择/发现: ${this.selectedIds.size}/${this.jobState?.knownIds?.length || 0}
内容已下载: ${counts.downloaded} 失败: ${counts.failed}
封面已下载: ${counts.coverDownloaded} 失败: ${counts.coverFailed}`
      };
    }
    // 重置状态
    resetState() {
      const profile = this.dataService.getProfileContext();
      if (!profile) return false;
      if (this.jobRunning) this.endJob();
      this.jobLog = [];
      ProfileDownloadState.reset(profile.profileKey);
      this.currentDownloadType = "content";
      this.jobState = ProfileDownloadState.create_default(profile);
      this.collect();
      this.emit("stateChanged", this);
      return true;
    }
    // 暂停当前下载，循环会在当前项结束后停止
    pauseJob() {
      if (!this.jobRunning || this.jobStopRequested) return;
      this.jobStopRequested = true;
      if (this.jobState?.profileKey) {
        this.jobState.status = "paused";
        this._saveJobState();
      }
      this._push_log("info", "已暂停");
      this.emit("jobPaused");
      this.emit("stateChanged", this);
    }
    // 继续上次暂停的下载
    resumeJob() {
      if (this.jobRunning) return;
      if (this.jobState?.status !== "paused") return;
      return this.startJob(this.currentDownloadType);
    }
    // 结束当前下载阶段，回到选择阶段
    endJob() {
      if (this.jobRunning) this.jobStopRequested = true;
      this.jobEndRequested = true;
      if (this.jobState?.profileKey) {
        this.jobState.status = "idle";
        this._saveJobState();
      }
      this._push_log("info", "已结束");
      this.emit("jobEnded");
      this.emit("stateChanged", this);
    }
    // 启动下载循环（由外部调用，这里只做前置准备）
    async startJob(downloadType = this.currentDownloadType) {
      if (!this.dataService.isProfilePage()) throw new Error("请在作者主页中使用全量下载。");
      if (this.jobRunning) return;
      if (this.mediaHandler.downloading) throw new Error("当前已有下载任务在进行中。");
      const releaseLock = this.mediaHandler._flag_start_download();
      const resuming = this.jobState?.status === "paused" && downloadType === this.currentDownloadType;
      if (!resuming) this.jobLog = [];
      this.currentDownloadType = downloadType;
      this.jobRunning = true;
      this.jobStopRequested = false;
      this.jobEndRequested = false;
      this.emit("jobStarted");
      this._push_log("info", resuming ? "继续下载" : "开始下载");
      if (resuming) this.emit("jobResumed");
      this.emit("stateChanged", this);
      try {
        await this._runDownloadLoop();
      } finally {
        this.jobRunning = false;
        this.jobStopRequested = false;
        this.jobEndRequested = false;
        releaseLock();
        this.emit("stateChanged", this);
      }
    }
    async _runDownloadLoop() {
      const profile = this.dataService.getProfileContext();
      if (!profile) throw new Error("无法获取作者信息。");
      this._ensureJobState(profile);
      if (!this.jobState) return;
      this.jobState.status = "running";
      this.jobState.lastRunAt = Date.now();
      this.jobState.completedAt = 0;
      this._saveJobState();
      this.emit("stateChanged", this);
      const downloadType = this.currentDownloadType;
      const downloadedIds = downloadType === "cover" ? this.jobState.coverDownloadedIds || [] : this.jobState.downloadedIds || [];
      const failedItems = downloadType === "cover" ? this.jobState.coverFailedItems || {} : this.jobState.failedItems || {};
      const downloadedSet = new Set(downloadedIds);
      const failedSet = new Set(Object.keys(failedItems));
      const selectedIdsArray = Array.from(this.selectedIds);
      const pendingIds = selectedIdsArray.filter((id) => !downloadedSet.has(id) || failedSet.has(id));
      if (pendingIds.length === 0) {
        this.jobState.status = this.jobEndRequested ? "idle" : "completed";
        if (this.jobState.status === "completed") this.jobState.completedAt = Date.now();
        this._saveJobState();
        if (this.jobState.status === "completed") {
          this._push_log("info", "没有待下载项，任务完成");
          this.emit("jobCompleted");
        }
        this.emit("stateChanged", this);
        return;
      }
      for (const awemeId of pendingIds) {
        if (this.jobStopRequested) {
          this.jobState.status = this.jobEndRequested ? "idle" : "paused";
          this._saveJobState();
          this.emit("stateChanged", this);
          return;
        }
        const media = this.dataService.feedMediaCache.get(awemeId);
        if (!media) {
          const fakeMedia = { awemeId, desc: "未缓存" };
          console.warn("[dy-dl] 缓存中未找到作品", awemeId);
          this._push_log("failed", "缓存中未找到作品，已标记失败", fakeMedia);
          this.markFailed(fakeMedia, "cache_miss", downloadType);
          this._saveJobState();
          this.emit("countsUpdated", this.getCounts());
          continue;
        }
        this._push_log("running", "开始下载", media);
        const result = downloadType === "cover" ? await this.mediaHandler._download_cover_logic(media, { alertOnFail: false }) : await this.mediaHandler._download_media_logic(media, {
          toastTarget: null,
          toast: { update: /* @__PURE__ */ __name(() => {
          }, "update") },
          toastPrefix: "批量下载",
          alertOnFail: false,
          addHistory: true
        });
        const reason = result?.reason || (downloadType === "cover" ? "cover_download_failed" : "download_failed");
        if (result?.ok) {
          this.markDownloaded(media, downloadType);
          this._push_log("success", "下载成功", media);
        } else {
          this.markFailed(media, reason, downloadType);
          this._push_log("failed", "下载失败：" + reason, media);
        }
        this._saveJobState();
        this.emit("countsUpdated", this.getCounts());
        await new Promise((r3) => setTimeout(r3, 500));
      }
      if (!this.jobState) return;
      this.jobState.status = this.jobEndRequested ? "idle" : "completed";
      if (this.jobState.status === "completed") this.jobState.completedAt = Date.now();
      this._saveJobState();
      if (this.jobState.status === "completed") {
        this._push_log("info", "下载完成");
        this.emit("jobCompleted");
      }
      this.emit("stateChanged", this);
    }
  };
  __name(_ProfileDownloadManager, "ProfileDownloadManager");
  var ProfileDownloadManager = _ProfileDownloadManager;

  // src/handlers/profile/ProfilePageHandler.ts
  var _ProfilePageHandler = class _ProfilePageHandler {
    constructor({ mediaHandler }) {
      this.panel = null;
      this.mediaHandler = mediaHandler;
      this.dataService = new ProfileDataService();
      this.downloadManager = new ProfileDownloadManager({ mediaHandler, dataService: this.dataService });
    }
    mount_ui() {
      if (this.panel) return;
      this.panel = new FloatingPanel();
      this.panel.mount({ dataService: this.dataService, downloadManager: this.downloadManager, onOpenSettings: /* @__PURE__ */ __name(() => this.mediaHandler.open_config_modal(), "onOpenSettings") });
    }
  };
  __name(_ProfilePageHandler, "ProfilePageHandler");
  var ProfilePageHandler = _ProfilePageHandler;

  // src/handlers/xhs/XHSNoteService.ts
  init_Config();

  // src/utils/index.ts
  init_format();
  init_css_in_js();
  init_theme();

  // src/handlers/xhs/XHSNoteService.ts
  function isNotePage() {
    return /^\/(explore|discovery\/item)\/[a-z0-9]+/i.test(location.pathname);
  }
  __name(isNotePage, "isNotePage");
  function getCurrentNote() {
    if (!isNotePage()) return null;
    const urlId = location.pathname.split("/").pop() || "";
    const map = window.__INITIAL_STATE__?.note?.noteDetailMap;
    if (map) {
      const id = map[urlId]?.note?.noteId ? urlId : Object.keys(map).find((k3) => k3 !== "undefined" && map[k3] && map[k3].note && map[k3].note.noteId);
      if (id) {
        const note = normalize(map[id].note, id);
        if (note.noteId && (note.images.length > 0 || note.video_no_wm || note.video_wm)) return note;
      }
    }
    return fromDOM();
  }
  __name(getCurrentNote, "getCurrentNote");
  var XHS_CI_HOST = "https://ci.xiaohongshu.com/";
  function toHttps(u4) {
    return typeof u4 === "string" && u4 ? u4.replace(/^http:\/\//i, "https://") : "";
  }
  __name(toHttps, "toHttps");
  function imageToken(item, rawUrl) {
    const id = item?.fileId;
    if (typeof id === "string" && id.length > 8) return id;
    const m3 = String(rawUrl || "").match(/\/([A-Za-z0-9_-]{16,})(?:![^/]*)?$/);
    return m3 ? m3[1] : "";
  }
  __name(imageToken, "imageToken");
  function cdnToCi(u4) {
    if (!u4) return "";
    const token = imageToken({}, u4);
    return token ? XHS_CI_HOST + token : toHttps(u4);
  }
  __name(cdnToCi, "cdnToCi");
  function toImageUrl(item) {
    const raw = item?.urlDefault || item?.url || item?.urlPre || item?.infoList?.[1]?.url || item?.infoList?.[0]?.url || "";
    if (!raw || typeof raw !== "string") return "";
    const token = imageToken(item, raw);
    return token ? XHS_CI_HOST + token : toHttps(raw);
  }
  __name(toImageUrl, "toImageUrl");
  function toImageList(items) {
    return Array.from(new Set(items.map(toImageUrl).filter(Boolean)));
  }
  __name(toImageList, "toImageList");
  function isRealVideoUrl(u4) {
    return typeof u4 === "string" && /^https?:\/\//i.test(u4) && !u4.startsWith("blob:");
  }
  __name(isRealVideoUrl, "isRealVideoUrl");
  var WM_STREAM_TYPES = [259];
  function isWmCand(c4) {
    return WM_STREAM_TYPES.indexOf(c4.type) >= 0;
  }
  __name(isWmCand, "isWmCand");
  function collectStreams(video) {
    const out = [];
    const seen = {};
    const push = /* @__PURE__ */ __name((s5) => {
      if (!s5 || typeof s5 !== "object") return;
      const u4 = toHttps(s5.masterUrl) || toHttps(s5.backupUrls?.[0]);
      if (!isRealVideoUrl(u4) || seen[u4]) return;
      seen[u4] = true;
      out.push({
        type: Number(s5.streamType) || 0,
        desc: String(s5.streamDesc || ""),
        w: Number(s5.width) || 0,
        h: Number(s5.height) || 0,
        size: Number(s5.size) || 0,
        url: u4,
        mp4: /\.mp4(\?|$)/i.test(u4)
      });
    }, "push");
    const stream = video?.media?.stream;
    if (stream && typeof stream === "object") {
      for (const key of Object.keys(stream)) {
        const arr = stream[key];
        if (Array.isArray(arr)) arr.forEach(push);
      }
    }
    if (Array.isArray(video?.media?.video)) video.media.video.forEach(push);
    return out;
  }
  __name(collectStreams, "collectStreams");
  function rankClean(a3, b2) {
    if (a3.mp4 !== b2.mp4) return a3.mp4 ? -1 : 1;
    const ra = a3.w * a3.h;
    const rb = b2.w * b2.h;
    if (ra !== rb) return rb - ra;
    return b2.size - a3.size;
  }
  __name(rankClean, "rankClean");
  function collectVideoUrls(obj, out, depth = 0) {
    if (depth > 8 || !obj) return;
    if (typeof obj === "string") {
      const ok = /^https?:\/\//i.test(obj) && (/\.(mp4|m4s|m3u8)(\?|$)/i.test(obj) || /xhscdn\.com\/.*\/(video|spectrum|stream)\//i.test(obj));
      if (ok) out.push(toHttps(obj));
      return;
    }
    if (typeof obj !== "object") return;
    for (const k3 of Object.keys(obj)) collectVideoUrls(obj[k3], out, depth + 1);
  }
  __name(collectVideoUrls, "collectVideoUrls");
  function normalize(raw, fallbackId) {
    const images = toImageList(raw.imageList || []);
    let all = collectStreams(raw.video);
    if (all.length === 0) {
      const urls = [];
      collectVideoUrls(raw.video, urls);
      if (urls.length === 0) collectVideoUrls(raw, urls);
      all = Array.from(new Set(urls)).map((u4) => ({
        type: 0,
        desc: "",
        w: 0,
        h: 0,
        size: 0,
        url: u4,
        mp4: /\.mp4(\?|$)/i.test(u4)
      }));
    }
    if (all.length === 0) {
      const v3 = document.querySelector("video");
      const src = v3 ? toHttps(v3.src || (v3.querySelector("source") || {}).src) : "";
      if (isRealVideoUrl(src)) {
        all = [{ type: 0, desc: "", w: 0, h: 0, size: 0, url: src, mp4: false }];
      }
    }
    const clean = all.filter((c4) => !isWmCand(c4)).sort(rankClean);
    const watermarked = all.filter(isWmCand).sort(rankClean);
    const noWm = clean[0]?.url || null;
    const wm = watermarked[0]?.url || null;
    const it = raw.interactInfo || {};
    const safeFallback = fallbackId && fallbackId !== "undefined" ? fallbackId : "";
    return {
      noteId: raw.noteId || safeFallback || "",
      title: raw.title || "",
      desc: raw.desc || "",
      // 标了 video、或者确实有视频档位，就按视频算，避免把封面当图集下载
      type: raw.type === "video" || all.length > 0 ? "video" : "normal",
      nickname: raw.user?.nickname || "",
      time: raw.time || Date.now(),
      images,
      video: noWm || wm,
      video_no_wm: noWm,
      video_no_wm_backups: clean.slice(1, 4).map((c4) => c4.url),
      video_wm: wm,
      interact: {
        digg: toNumber(it.likedCount),
        collect: toNumber(it.collectedCount),
        comment: toNumber(it.commentCount),
        share: toNumber(it.shareCount)
      }
    };
  }
  __name(normalize, "normalize");
  function toNumber(v3) {
    if (typeof v3 === "number") return isNaN(v3) ? 0 : v3;
    if (v3 === null || v3 === void 0) return 0;
    const s5 = String(v3).trim();
    if (!s5) return 0;
    if (s5.includes("万")) return Math.round(parseFloat(s5) * 1e4);
    if (s5.includes("亿")) return Math.round(parseFloat(s5) * 1e8);
    const n2 = parseInt(s5.replace(/[^\d]/g, ""), 10);
    return isNaN(n2) ? 0 : n2;
  }
  __name(toNumber, "toNumber");
  function textOf(selectors) {
    for (const s5 of selectors) {
      const el = document.querySelector(s5);
      const t3 = el?.textContent?.trim();
      if (t3) return t3;
    }
    return "";
  }
  __name(textOf, "textOf");
  function fromDOM() {
    let raw = [];
    for (const sel of [".note-slider-img", "#noteContainer img", ".media-container img", ".swiper-slide img"]) {
      const found = [...document.querySelectorAll(sel)];
      if (found.length > 0) {
        raw = found.map((i3) => i3.src || i3.getAttribute("data-src") || i3.getAttribute("data-origin-src") || "").filter(Boolean);
        break;
      }
    }
    if (raw.length === 0) {
      raw = [...document.querySelectorAll("img")].map((i3) => i3.src).filter((s5) => s5 && s5.includes("xhscdn") && !/\.svg|static|avatar|userprofile/i.test(s5));
    }
    const images = Array.from(new Set(raw.map(cdnToCi).filter(Boolean)));
    const v3 = document.querySelector(".media-container video, xg-video video, video");
    let videoSrc = null;
    if (v3) {
      const src = v3.src || v3.querySelector("source")?.src || "";
      if (isRealVideoUrl(src)) videoSrc = src;
    }
    const isVideoNote = !!v3;
    if (images.length === 0 && !isVideoNote) return null;
    const title = textOf(["#detail-title", ".title", "h1"]) || document.title.replace(/ - 小红书.*$/, "");
    const nickname = textOf([".author-container .username", ".info .name", ".username", '[class*="author"] [class*="name"]']);
    return {
      noteId: location.pathname.split("/").pop() || "",
      title,
      desc: title,
      type: isVideoNote ? "video" : "normal",
      nickname,
      time: Date.now(),
      images,
      // DOM 兜底只拿得到播放地址，分不出水印档位，统一当带水印处理
      video: videoSrc,
      video_no_wm: null,
      video_no_wm_backups: [],
      video_wm: videoSrc,
      interact: {
        digg: toNumber(textOf([".like-wrapper .count", '[class*="like"] [class*="count"]'])),
        collect: toNumber(textOf([".collect-wrapper .count", '[class*="collect"] [class*="count"]'])),
        comment: toNumber(textOf([".comments-wrapper .count", '[class*="comment"] [class*="count"]', '[class*="chat"] [class*="count"]'])),
        share: toNumber(textOf([".share-wrapper .count", '[class*="share"] [class*="count"]']))
      }
    };
  }
  __name(fromDOM, "fromDOM");
  function buildXHSFilename(note) {
    const tpl = Config.global.features.filename_template || Config.defaults.filename_template;
    const maxLen = Config.global.features.filename_max_length || 64;
    const createDate = new Date(note.time);
    const now = /* @__PURE__ */ new Date();
    const clean = /* @__PURE__ */ __name((s5) => String(s5 || "").replace(/\s+/g, " ").replace(/\[话题\]/g, "").replace(/[#/?<>\\:*|":]/g, "").trim(), "clean");
    const rawDesc = clean(note.title || note.desc) || note.noteId;
    const nickname = clean(note.nickname) || "小红书";
    const context = {
      title: rawDesc,
      desc: rawDesc,
      nickname,
      short_id: note.noteId.slice(-6),
      note_id: note.noteId,
      aweme_id: note.noteId,
      tags: "",
      media: note,
      create_date: createDate,
      now_date: now,
      create_date_YYYYMMDD: formatDate(createDate, "YYYYMMDD"),
      create_date_YYYYMMDD_HHmmss: formatDate(createDate, "YYYYMMDD_HHmmss"),
      now_YYYYMMDD: formatDate(now, "YYYYMMDD"),
      now_YYYYMMDD_HHmmss: formatDate(now, "YYYYMMDD_HHmmss"),
      digg_count: note.interact.digg,
      comment_count: note.interact.comment,
      collect_count: note.interact.collect,
      share_count: note.interact.share
    };
    let name;
    try {
      name = runInContext(context, tpl);
    } catch (e3) {
      console.warn("[dy-dl] 小红书文件名模板执行失败，回落默认", e3);
      name = `${context.create_date_YYYYMMDD.slice(2)}_${rawDesc}`;
    }
    name = String(name).trim() || "xiaohongshu";
    return name.slice(0, maxLen);
  }
  __name(buildXHSFilename, "buildXHSFilename");

  // src/handlers/xhs/XHSHandler.ts
  var _XHSHandler = class _XHSHandler {
    constructor(downloader2) {
      this.current = null;
      this.lastId = null;
      this.btn = null;
      this.busy = false;
      this.warned = false;
      this._toastTimer = null;
      this._savedShown = false;
      this._resetTimer = null;
      this.downloader = downloader2;
    }
    init() {
      this._showReadyTip();
      this._tick();
      setInterval(() => this._tick(), 1e3);
      document.addEventListener("keydown", (ev) => {
        if (ev.key.toLowerCase() !== "m") return;
        const ae = document.activeElement;
        if (ae && (ae.tagName === "INPUT" || ae.tagName === "TEXTAREA" || ae.isContentEditable)) return;
        ev.preventDefault();
        this.download();
      });
    }
    /**
     * 就绪提示
     *
     * 用来确认脚本确实跑起来了：看到这行字说明扩展生效，
     * 看不到就是扩展没重载或没匹配上。
     */
    _showReadyTip() {
      const el = document.createElement("div");
      el.textContent = "下载助手已就绪 · 笔记左上角按钮或按 M";
      el.style.cssText = [
        "position:fixed",
        "left:24px",
        "bottom:84px",
        "z-index:2147483000",
        "padding:10px 16px",
        "background:#1f1f1f",
        "color:#fff",
        "border-radius:8px",
        "font-size:13px",
        "font-family:inherit",
        "opacity:0.95"
      ].join(";");
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 5e3);
    }
    _tick() {
      const note = getCurrentNote();
      if (!note || !note.noteId) {
        if (isNotePage() && !this.warned) {
          this.warned = true;
          console.warn("[dy-dl]当前是笔记页但没取到数据，可能未登录或页面结构有变动");
        }
        return;
      }
      const changed = note.noteId !== this.lastId;
      this.lastId = note.noteId;
      this.current = note;
      if (changed) {
        console.log(
          "[dy-dl]识别到笔记",
          note.noteId,
          "文件名",
          buildXHSFilename(note),
          "图片",
          note.images.length,
          "无水印源",
          note.video_no_wm || "无",
          "带水印兜底",
          note.video_wm || "无"
        );
      }
      this._mountButton();
    }
    _mountButton() {
      if (this.btn && this.btn.isConnected) return;
      const btn = document.createElement("button");
      btn.textContent = "下载笔记";
      const base = [
        "z-index:2147483000",
        "padding:12px 22px",
        "border:2px solid #fff",
        "border-radius:24px",
        "background:#ff2442",
        "color:#fff",
        "font-size:15px",
        "font-weight:700",
        "font-family:inherit",
        "cursor:pointer",
        "box-shadow:0 4px 16px rgba(0,0,0,.35)"
      ];
      btn.addEventListener("click", (e3) => {
        e3.preventDefault();
        e3.stopPropagation();
        this.download();
      });
      const container = document.querySelector("#noteContainer, .note-container, .media-container");
      if (container) {
        if (getComputedStyle(container).position === "static") container.style.position = "relative";
        btn.style.cssText = ["position:absolute", "left:16px", "top:16px", ...base].join(";");
        container.appendChild(btn);
      } else {
        btn.style.cssText = ["position:fixed", "left:24px", "top:96px", ...base].join(";");
        document.body.appendChild(btn);
      }
      this.btn = btn;
    }
    _status(text, color = "#ff2442") {
      if (this.btn) {
        this.btn.textContent = text;
        this.btn.style.background = color;
      }
      this._toast(text, color);
    }
    /**
     * 右下角常驻提示
     *
     * 按钮在笔记左上角、还被页面元素挡过，光靠按钮判断到底下没下来太费劲，
     * 这里再给一个不被页面遮挡的浮窗，把每一步都写出来。
     */
    _toast(text, color = "#ff2442") {
      let el = document.getElementById("dydl-toast");
      if (!el) {
        el = document.createElement("div");
        el.id = "dydl-toast";
        el.style.cssText = [
          "position:fixed",
          "right:20px",
          "top:80px",
          "z-index:2147483647",
          "max-width:360px",
          "padding:12px 16px",
          "border-radius:10px",
          "color:#fff",
          "font-size:14px",
          "line-height:1.5",
          "font-family:inherit",
          "box-shadow:0 6px 20px rgba(0,0,0,.4)",
          "white-space:pre-wrap",
          "word-break:break-all"
        ].join(";");
        document.body.appendChild(el);
      }
      el.style.background = color;
      el.textContent = text;
      clearTimeout(this._toastTimer);
      this._toastTimer = setTimeout(() => el && el.remove(), 12e3);
    }
    async download() {
      if (this.busy) return;
      const note = this.current;
      if (!note) {
        this._status("未识别到笔记，刷新页面再试", "#c0392b");
        this._resetLater(4e3);
        return;
      }
      this.busy = true;
      try {
        const base = buildXHSFilename(note);
        if (note.type === "video") {
          const noWm = note.video_no_wm;
          const wm = note.video_wm;
          if (!noWm && !wm) {
            this._status("视频未加载");
            alert("[下载助手]没拿到视频地址。请先点一下播放让视频加载，再点下载。");
            return;
          }
          const mb = /* @__PURE__ */ __name((n2) => (n2 / 1048576).toFixed(1) + "MB", "mb");
          if (noWm) {
            this._status("准备下载无水印…");
            const ok = await this.downloader.download_file(noWm, base, note.video_no_wm_backups, {
              silent: true,
              onProgress: /* @__PURE__ */ __name((rec, total) => {
                const pct = total ? Math.floor(rec / total * 100) : 0;
                this._status(`下载无水印 ${pct}%
${mb(rec)} / ${mb(total)}`);
              }, "onProgress"),
              onSaved: /* @__PURE__ */ __name((p3) => {
                this._savedShown = true;
                this._status(`下载完成 · 无水印
已保存到：
${p3}`, "#1a9e4b");
              }, "onSaved")
            });
            if (ok) {
              if (!this._savedShown) this._status(`下载完成 · 无水印`, "#1a9e4b");
              return;
            }
            console.warn("[dy-dl]无水印源下载失败", noWm);
            this._status("无水印源失败，换带水印档", "#b8860b");
          }
          if (wm) {
            this._status("准备下载(带水印)…", "#b8860b");
            const ok = await this.downloader.download_file(wm, base, [], {
              onProgress: /* @__PURE__ */ __name((rec, total) => {
                const pct = total ? Math.floor(rec / total * 100) : 0;
                this._status(`下载(带水印) ${pct}%
${mb(rec)} / ${mb(total)}`, "#b8860b");
              }, "onProgress")
            });
            if (ok) {
              this._status("下载完成 · 带水印", "#b8860b");
              return;
            }
          }
          this._status("下载失败", "#c0392b");
        } else if (note.images.length > 0) {
          const mb = /* @__PURE__ */ __name((n2) => (n2 / 1048576).toFixed(1) + "MB", "mb");
          let failed = 0;
          for (let i3 = 0; i3 < note.images.length; i3++) {
            const ok = await this.downloader.download_file(note.images[i3], `${base}_${i3 + 1}`, [], {
              silent: true,
              onProgress: /* @__PURE__ */ __name((rec, total) => {
                this._status(`下载图片 ${i3 + 1}/${note.images.length}  ${total ? mb(total) : mb(rec)}`);
              }, "onProgress")
            });
            if (!ok) failed++;
            this._status(`已完成 ${i3 + 1}/${note.images.length}`);
          }
          if (failed > 0) this._status(`图片下载完成 · ${failed} 张失败`, "#b8860b");
          else this._status(`图片下载完成 · 共 ${note.images.length} 张`, "#1a9e4b");
        } else {
          this._status("无可下载内容", "#c0392b");
        }
      } catch (e3) {
        console.error("[dy-dl] 小红书下载失败", e3);
        this._status("下载出错：" + (e3 instanceof Error ? e3.message : String(e3)), "#c0392b");
      } finally {
        this.busy = false;
        this._resetLater(8e3);
      }
    }
    /** 延迟把按钮还原，别把结果文案秒清掉 */
    _resetLater(ms) {
      clearTimeout(this._resetTimer);
      this._resetTimer = setTimeout(() => {
        if (!this.btn) return;
        this.btn.textContent = "下载笔记";
        this.btn.style.background = "#ff2442";
      }, ms);
    }
  };
  __name(_XHSHandler, "XHSHandler");
  var XHSHandler = _XHSHandler;

  // src/index.ts
  installGMShim();
  console.log("[dy-dl]脚本已注入");
  function whenDomReady(fn) {
    if (document.body) {
      fn();
      return;
    }
    document.addEventListener("DOMContentLoaded", () => fn(), { once: true });
  }
  __name(whenDomReady, "whenDomReady");
  function isTopWindow() {
    try {
      return window.top === window.self;
    } catch (e3) {
      return false;
    }
  }
  __name(isTopWindow, "isTopWindow");
  var downloader = new Downloader();
  var alreadyInited = window.__DY_DL_INITED__ === true;
  window.__DY_DL_INITED__ = true;
  if (alreadyInited || !isTopWindow()) {
    console.log("[dy-dl]跳过重复注入");
  } else if (location.hostname.includes("xiaohongshu")) {
    whenDomReady(() => {
      new XHSHandler(downloader).init();
      console.log("[dy-dl]小红书模式已启动");
    });
  } else {
    const mediaHandler = new MediaHandler(downloader);
    const videoHandler = new VideoHandler();
    const danmakuHandler = new DanmakuHandler();
    const profilePageHandler = new ProfilePageHandler({ mediaHandler });
    const domPatcher = new DOMPatcher({
      downloader,
      mediaHandler,
      videoHandler,
      danmakuHandler,
      profilePageHandler
    });
    const hotkeyManager = new HotkeyManager();
    mediaHandler.init();
    whenDomReady(() => {
      domPatcher.startObserving();
      profilePageHandler.mount_ui();
      hotkeyManager.addHotkey("m", () => mediaHandler.download_current_media());
      console.log("[dy-dl]已启动");
    });
  }
})();
