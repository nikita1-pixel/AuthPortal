(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@prisma/client/runtime/index-browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var de = Object.defineProperty;
var We = Object.getOwnPropertyDescriptor;
var Ge = Object.getOwnPropertyNames;
var Je = Object.prototype.hasOwnProperty;
var Me = (e, n)=>{
    for(var i in n)de(e, i, {
        get: n[i],
        enumerable: !0
    });
}, Xe = (e, n, i, t)=>{
    if (n && typeof n == "object" || typeof n == "function") for (let r of Ge(n))!Je.call(e, r) && r !== i && de(e, r, {
        get: ()=>n[r],
        enumerable: !(t = We(n, r)) || t.enumerable
    });
    return e;
};
var Ke = (e)=>Xe(de({}, "__esModule", {
        value: !0
    }), e);
var Xn = {};
Me(Xn, {
    Decimal: ()=>je,
    Public: ()=>he,
    getRuntime: ()=>be,
    makeStrictEnum: ()=>Pe,
    objectEnumValues: ()=>Oe
});
module.exports = Ke(Xn);
var he = {};
Me(he, {
    validator: ()=>Ce
});
function Ce(...e) {
    return (n)=>n;
}
var ne = Symbol(), pe = new WeakMap, ge = class {
    constructor(n){
        n === ne ? pe.set(this, "Prisma.".concat(this._getName())) : pe.set(this, "new Prisma.".concat(this._getNamespace(), ".").concat(this._getName(), "()"));
    }
    _getName() {
        return this.constructor.name;
    }
    toString() {
        return pe.get(this);
    }
}, G = class extends ge {
    _getNamespace() {
        return "NullTypes";
    }
}, J = class extends G {
};
me(J, "DbNull");
var X = class extends G {
};
me(X, "JsonNull");
var K = class extends G {
};
me(K, "AnyNull");
var Oe = {
    classes: {
        DbNull: J,
        JsonNull: X,
        AnyNull: K
    },
    instances: {
        DbNull: new J(ne),
        JsonNull: new X(ne),
        AnyNull: new K(ne)
    }
};
function me(e, n) {
    Object.defineProperty(e, "name", {
        value: n,
        configurable: !0
    });
}
var xe = new Set([
    "toJSON",
    "$$typeof",
    "asymmetricMatch",
    Symbol.iterator,
    Symbol.toStringTag,
    Symbol.isConcatSpreadable,
    Symbol.toPrimitive
]);
function Pe(e) {
    return new Proxy(e, {
        get (n, i) {
            if (i in n) return n[i];
            if (!xe.has(i)) throw new TypeError("Invalid enum value: ".concat(String(i)));
        }
    });
}
var Qe = "Cloudflare-Workers", Ye = "node";
function Re() {
    var e, n, i;
    return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : ((e = globalThis.navigator) == null ? void 0 : e.userAgent) === Qe ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : ((i = (n = globalThis.process) == null ? void 0 : n.release) == null ? void 0 : i.name) === Ye ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
}
var ze = {
    node: "Node.js",
    workerd: "Cloudflare Workers",
    deno: "Deno and Deno Deploy",
    netlify: "Netlify Edge Functions",
    "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)"
};
function be() {
    let e = Re();
    return {
        id: e,
        prettyName: ze[e] || e,
        isEdge: [
            "workerd",
            "deno",
            "netlify",
            "edge-light"
        ].includes(e)
    };
}
var H = 9e15, $ = 1e9, we = "0123456789abcdef", te = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", re = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Ne = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -H,
    maxE: H,
    crypto: !1
}, Te, Z, w = !0, oe = "[DecimalError] ", V = oe + "Invalid argument: ", Le = oe + "Precision limit exceeded", De = oe + "crypto unavailable", Fe = "[object Decimal]", b = Math.floor, C = Math.pow, ye = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, en = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, nn = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Ie = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, D = 1e7, m = 7, tn = 9007199254740991, rn = te.length - 1, ve = re.length - 1, h = {
    toStringTag: Fe
};
h.absoluteValue = h.abs = function() {
    var e = new this.constructor(this);
    return e.s < 0 && (e.s = 1), p(e);
};
h.ceil = function() {
    return p(new this.constructor(this), this.e + 1, 2);
};
h.clampedTo = h.clamp = function(e, n) {
    var i, t = this, r = t.constructor;
    if (e = new r(e), n = new r(n), !e.s || !n.s) return new r(NaN);
    if (e.gt(n)) throw Error(V + n);
    return i = t.cmp(e), i < 0 ? e : t.cmp(n) > 0 ? n : new r(t);
};
h.comparedTo = h.cmp = function(e) {
    var n, i, t, r, s = this, o = s.d, u = (e = new s.constructor(e)).d, l = s.s, f = e.s;
    if (!o || !u) return !l || !f ? NaN : l !== f ? l : o === u ? 0 : !o ^ l < 0 ? 1 : -1;
    if (!o[0] || !u[0]) return o[0] ? l : u[0] ? -f : 0;
    if (l !== f) return l;
    if (s.e !== e.e) return s.e > e.e ^ l < 0 ? 1 : -1;
    for(t = o.length, r = u.length, n = 0, i = t < r ? t : r; n < i; ++n)if (o[n] !== u[n]) return o[n] > u[n] ^ l < 0 ? 1 : -1;
    return t === r ? 0 : t > r ^ l < 0 ? 1 : -1;
};
h.cosine = h.cos = function() {
    var e, n, i = this, t = i.constructor;
    return i.d ? i.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(i.e, i.sd()) + m, t.rounding = 1, i = sn(t, $e(t, i)), t.precision = e, t.rounding = n, p(Z == 2 || Z == 3 ? i.neg() : i, e, n, !0)) : new t(1) : new t(NaN);
};
h.cubeRoot = h.cbrt = function() {
    var e, n, i, t, r, s, o, u, l, f, c = this, a = c.constructor;
    if (!c.isFinite() || c.isZero()) return new a(c);
    for(w = !1, s = c.s * C(c.s * c, 1 / 3), !s || Math.abs(s) == 1 / 0 ? (i = O(c.d), e = c.e, (s = (e - i.length + 1) % 3) && (i += s == 1 || s == -2 ? "0" : "00"), s = C(i, 1 / 3), e = b((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), s == 1 / 0 ? i = "5e" + e : (i = s.toExponential(), i = i.slice(0, i.indexOf("e") + 1) + e), t = new a(i), t.s = c.s) : t = new a(s.toString()), o = (e = a.precision) + 3;;)if (u = t, l = u.times(u).times(u), f = l.plus(c), t = S(f.plus(c).times(u), f.plus(l), o + 2, 1), O(u.d).slice(0, o) === (i = O(t.d)).slice(0, o)) if (i = i.slice(o - 3, o + 1), i == "9999" || !r && i == "4999") {
        if (!r && (p(u, e + 1, 0), u.times(u).times(u).eq(c))) {
            t = u;
            break;
        }
        o += 4, r = 1;
    } else {
        (!+i || !+i.slice(1) && i.charAt(0) == "5") && (p(t, e + 1, 1), n = !t.times(t).times(t).eq(c));
        break;
    }
    return w = !0, p(t, e, a.rounding, n);
};
h.decimalPlaces = h.dp = function() {
    var e, n = this.d, i = NaN;
    if (n) {
        if (e = n.length - 1, i = (e - b(this.e / m)) * m, e = n[e], e) for(; e % 10 == 0; e /= 10)i--;
        i < 0 && (i = 0);
    }
    return i;
};
h.dividedBy = h.div = function(e) {
    return S(this, new this.constructor(e));
};
h.dividedToIntegerBy = h.divToInt = function(e) {
    var n = this, i = n.constructor;
    return p(S(n, new i(e), 0, 1, 1), i.precision, i.rounding);
};
h.equals = h.eq = function(e) {
    return this.cmp(e) === 0;
};
h.floor = function() {
    return p(new this.constructor(this), this.e + 1, 3);
};
h.greaterThan = h.gt = function(e) {
    return this.cmp(e) > 0;
};
h.greaterThanOrEqualTo = h.gte = function(e) {
    var n = this.cmp(e);
    return n == 1 || n === 0;
};
h.hyperbolicCosine = h.cosh = function() {
    var e, n, i, t, r, s = this, o = s.constructor, u = new o(1);
    if (!s.isFinite()) return new o(s.s ? 1 / 0 : NaN);
    if (s.isZero()) return u;
    i = o.precision, t = o.rounding, o.precision = i + Math.max(s.e, s.sd()) + 4, o.rounding = 1, r = s.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / fe(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), s = j(o, 1, s.times(n), new o(1), !0);
    for(var l, f = e, c = new o(8); f--;)l = s.times(s), s = u.minus(l.times(c.minus(l.times(c))));
    return p(s, o.precision = i, o.rounding = t, !0);
};
h.hyperbolicSine = h.sinh = function() {
    var e, n, i, t, r = this, s = r.constructor;
    if (!r.isFinite() || r.isZero()) return new s(r);
    if (n = s.precision, i = s.rounding, s.precision = n + Math.max(r.e, r.sd()) + 4, s.rounding = 1, t = r.d.length, t < 3) r = j(s, 2, r, r, !0);
    else {
        e = 1.4 * Math.sqrt(t), e = e > 16 ? 16 : e | 0, r = r.times(1 / fe(5, e)), r = j(s, 2, r, r, !0);
        for(var o, u = new s(5), l = new s(16), f = new s(20); e--;)o = r.times(r), r = r.times(u.plus(o.times(l.times(o).plus(f))));
    }
    return s.precision = n, s.rounding = i, p(r, n, i, !0);
};
h.hyperbolicTangent = h.tanh = function() {
    var e, n, i = this, t = i.constructor;
    return i.isFinite() ? i.isZero() ? new t(i) : (e = t.precision, n = t.rounding, t.precision = e + 7, t.rounding = 1, S(i.sinh(), i.cosh(), t.precision = e, t.rounding = n)) : new t(i.s);
};
h.inverseCosine = h.acos = function() {
    var e, n = this, i = n.constructor, t = n.abs().cmp(1), r = i.precision, s = i.rounding;
    return t !== -1 ? t === 0 ? n.isNeg() ? L(i, r, s) : new i(0) : new i(NaN) : n.isZero() ? L(i, r + 4, s).times(.5) : (i.precision = r + 6, i.rounding = 1, n = n.asin(), e = L(i, r + 4, s).times(.5), i.precision = r, i.rounding = s, e.minus(n));
};
h.inverseHyperbolicCosine = h.acosh = function() {
    var e, n, i = this, t = i.constructor;
    return i.lte(1) ? new t(i.eq(1) ? 0 : NaN) : i.isFinite() ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(Math.abs(i.e), i.sd()) + 4, t.rounding = 1, w = !1, i = i.times(i).minus(1).sqrt().plus(i), w = !0, t.precision = e, t.rounding = n, i.ln()) : new t(i);
};
h.inverseHyperbolicSine = h.asinh = function() {
    var e, n, i = this, t = i.constructor;
    return !i.isFinite() || i.isZero() ? new t(i) : (e = t.precision, n = t.rounding, t.precision = e + 2 * Math.max(Math.abs(i.e), i.sd()) + 6, t.rounding = 1, w = !1, i = i.times(i).plus(1).sqrt().plus(i), w = !0, t.precision = e, t.rounding = n, i.ln());
};
h.inverseHyperbolicTangent = h.atanh = function() {
    var e, n, i, t, r = this, s = r.constructor;
    return r.isFinite() ? r.e >= 0 ? new s(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = s.precision, n = s.rounding, t = r.sd(), Math.max(t, e) < 2 * -r.e - 1 ? p(new s(r), e, n, !0) : (s.precision = i = t - r.e, r = S(r.plus(1), new s(1).minus(r), i + e, 1), s.precision = e + 4, s.rounding = 1, r = r.ln(), s.precision = e, s.rounding = n, r.times(.5))) : new s(NaN);
};
h.inverseSine = h.asin = function() {
    var e, n, i, t, r = this, s = r.constructor;
    return r.isZero() ? new s(r) : (n = r.abs().cmp(1), i = s.precision, t = s.rounding, n !== -1 ? n === 0 ? (e = L(s, i + 4, t).times(.5), e.s = r.s, e) : new s(NaN) : (s.precision = i + 6, s.rounding = 1, r = r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(), s.precision = i, s.rounding = t, r.times(2)));
};
h.inverseTangent = h.atan = function() {
    var e, n, i, t, r, s, o, u, l, f = this, c = f.constructor, a = c.precision, d = c.rounding;
    if (f.isFinite()) {
        if (f.isZero()) return new c(f);
        if (f.abs().eq(1) && a + 4 <= ve) return o = L(c, a + 4, d).times(.25), o.s = f.s, o;
    } else {
        if (!f.s) return new c(NaN);
        if (a + 4 <= ve) return o = L(c, a + 4, d).times(.5), o.s = f.s, o;
    }
    for(c.precision = u = a + 10, c.rounding = 1, i = Math.min(28, u / m + 2 | 0), e = i; e; --e)f = f.div(f.times(f).plus(1).sqrt().plus(1));
    for(w = !1, n = Math.ceil(u / m), t = 1, l = f.times(f), o = new c(f), r = f; e !== -1;)if (r = r.times(l), s = o.minus(r.div(t += 2)), r = r.times(l), o = s.plus(r.div(t += 2)), o.d[n] !== void 0) for(e = n; o.d[e] === s.d[e] && e--;);
    return i && (o = o.times(2 << i - 1)), w = !0, p(o, c.precision = a, c.rounding = d, !0);
};
h.isFinite = function() {
    return !!this.d;
};
h.isInteger = h.isInt = function() {
    return !!this.d && b(this.e / m) > this.d.length - 2;
};
h.isNaN = function() {
    return !this.s;
};
h.isNegative = h.isNeg = function() {
    return this.s < 0;
};
h.isPositive = h.isPos = function() {
    return this.s > 0;
};
h.isZero = function() {
    return !!this.d && this.d[0] === 0;
};
h.lessThan = h.lt = function(e) {
    return this.cmp(e) < 0;
};
h.lessThanOrEqualTo = h.lte = function(e) {
    return this.cmp(e) < 1;
};
h.logarithm = h.log = function(e) {
    var n, i, t, r, s, o, u, l, f = this, c = f.constructor, a = c.precision, d = c.rounding, g = 5;
    if (e == null) e = new c(10), n = !0;
    else {
        if (e = new c(e), i = e.d, e.s < 0 || !i || !i[0] || e.eq(1)) return new c(NaN);
        n = e.eq(10);
    }
    if (i = f.d, f.s < 0 || !i || !i[0] || f.eq(1)) return new c(i && !i[0] ? -1 / 0 : f.s != 1 ? NaN : i ? 0 : 1 / 0);
    if (n) if (i.length > 1) s = !0;
    else {
        for(r = i[0]; r % 10 === 0;)r /= 10;
        s = r !== 1;
    }
    if (w = !1, u = a + g, o = B(f, u), t = n ? se(c, u + 10) : B(e, u), l = S(o, t, u, 1), x(l.d, r = a, d)) do if (u += 10, o = B(f, u), t = n ? se(c, u + 10) : B(e, u), l = S(o, t, u, 1), !s) {
        +O(l.d).slice(r + 1, r + 15) + 1 == 1e14 && (l = p(l, a + 1, 0));
        break;
    }
    while (x(l.d, r += 10, d))
    return w = !0, p(l, a, d);
};
h.minus = h.sub = function(e) {
    var n, i, t, r, s, o, u, l, f, c, a, d, g = this, v = g.constructor;
    if (e = new v(e), !g.d || !e.d) return !g.s || !e.s ? e = new v(NaN) : g.d ? e.s = -e.s : e = new v(e.d || g.s !== e.s ? g : NaN), e;
    if (g.s != e.s) return e.s = -e.s, g.plus(e);
    if (f = g.d, d = e.d, u = v.precision, l = v.rounding, !f[0] || !d[0]) {
        if (d[0]) e.s = -e.s;
        else if (f[0]) e = new v(g);
        else return new v(l === 3 ? -0 : 0);
        return w ? p(e, u, l) : e;
    }
    if (i = b(e.e / m), c = b(g.e / m), f = f.slice(), s = c - i, s) {
        for(a = s < 0, a ? (n = f, s = -s, o = d.length) : (n = d, i = c, o = f.length), t = Math.max(Math.ceil(u / m), o) + 2, s > t && (s = t, n.length = 1), n.reverse(), t = s; t--;)n.push(0);
        n.reverse();
    } else {
        for(t = f.length, o = d.length, a = t < o, a && (o = t), t = 0; t < o; t++)if (f[t] != d[t]) {
            a = f[t] < d[t];
            break;
        }
        s = 0;
    }
    for(a && (n = f, f = d, d = n, e.s = -e.s), o = f.length, t = d.length - o; t > 0; --t)f[o++] = 0;
    for(t = d.length; t > s;){
        if (f[--t] < d[t]) {
            for(r = t; r && f[--r] === 0;)f[r] = D - 1;
            --f[r], f[t] += D;
        }
        f[t] -= d[t];
    }
    for(; f[--o] === 0;)f.pop();
    for(; f[0] === 0; f.shift())--i;
    return f[0] ? (e.d = f, e.e = ue(f, i), w ? p(e, u, l) : e) : new v(l === 3 ? -0 : 0);
};
h.modulo = h.mod = function(e) {
    var n, i = this, t = i.constructor;
    return e = new t(e), !i.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || i.d && !i.d[0] ? p(new t(i), t.precision, t.rounding) : (w = !1, t.modulo == 9 ? (n = S(i, e.abs(), 0, 3, 1), n.s *= e.s) : n = S(i, e, 0, t.modulo, 1), n = n.times(e), w = !0, i.minus(n));
};
h.naturalExponential = h.exp = function() {
    return Ee(this);
};
h.naturalLogarithm = h.ln = function() {
    return B(this);
};
h.negated = h.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s, p(e);
};
h.plus = h.add = function(e) {
    var n, i, t, r, s, o, u, l, f, c, a = this, d = a.constructor;
    if (e = new d(e), !a.d || !e.d) return !a.s || !e.s ? e = new d(NaN) : a.d || (e = new d(e.d || a.s === e.s ? a : NaN)), e;
    if (a.s != e.s) return e.s = -e.s, a.minus(e);
    if (f = a.d, c = e.d, u = d.precision, l = d.rounding, !f[0] || !c[0]) return c[0] || (e = new d(a)), w ? p(e, u, l) : e;
    if (s = b(a.e / m), t = b(e.e / m), f = f.slice(), r = s - t, r) {
        for(r < 0 ? (i = f, r = -r, o = c.length) : (i = c, t = s, o = f.length), s = Math.ceil(u / m), o = s > o ? s + 1 : o + 1, r > o && (r = o, i.length = 1), i.reverse(); r--;)i.push(0);
        i.reverse();
    }
    for(o = f.length, r = c.length, o - r < 0 && (r = o, i = c, c = f, f = i), n = 0; r;)n = (f[--r] = f[r] + c[r] + n) / D | 0, f[r] %= D;
    for(n && (f.unshift(n), ++t), o = f.length; f[--o] == 0;)f.pop();
    return e.d = f, e.e = ue(f, t), w ? p(e, u, l) : e;
};
h.precision = h.sd = function(e) {
    var n, i = this;
    if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(V + e);
    return i.d ? (n = Ze(i.d), e && i.e + 1 > n && (n = i.e + 1)) : n = NaN, n;
};
h.round = function() {
    var e = this, n = e.constructor;
    return p(new n(e), e.e + 1, n.rounding);
};
h.sine = h.sin = function() {
    var e, n, i = this, t = i.constructor;
    return i.isFinite() ? i.isZero() ? new t(i) : (e = t.precision, n = t.rounding, t.precision = e + Math.max(i.e, i.sd()) + m, t.rounding = 1, i = un(t, $e(t, i)), t.precision = e, t.rounding = n, p(Z > 2 ? i.neg() : i, e, n, !0)) : new t(NaN);
};
h.squareRoot = h.sqrt = function() {
    var e, n, i, t, r, s, o = this, u = o.d, l = o.e, f = o.s, c = o.constructor;
    if (f !== 1 || !u || !u[0]) return new c(!f || f < 0 && (!u || u[0]) ? NaN : u ? o : 1 / 0);
    for(w = !1, f = Math.sqrt(+o), f == 0 || f == 1 / 0 ? (n = O(u), (n.length + l) % 2 == 0 && (n += "0"), f = Math.sqrt(n), l = b((l + 1) / 2) - (l < 0 || l % 2), f == 1 / 0 ? n = "5e" + l : (n = f.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + l), t = new c(n)) : t = new c(f.toString()), i = (l = c.precision) + 3;;)if (s = t, t = s.plus(S(o, s, i + 2, 1)).times(.5), O(s.d).slice(0, i) === (n = O(t.d)).slice(0, i)) if (n = n.slice(i - 3, i + 1), n == "9999" || !r && n == "4999") {
        if (!r && (p(s, l + 1, 0), s.times(s).eq(o))) {
            t = s;
            break;
        }
        i += 4, r = 1;
    } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (p(t, l + 1, 1), e = !t.times(t).eq(o));
        break;
    }
    return w = !0, p(t, l, c.rounding, e);
};
h.tangent = h.tan = function() {
    var e, n, i = this, t = i.constructor;
    return i.isFinite() ? i.isZero() ? new t(i) : (e = t.precision, n = t.rounding, t.precision = e + 10, t.rounding = 1, i = i.sin(), i.s = 1, i = S(i, new t(1).minus(i.times(i)).sqrt(), e + 10, 0), t.precision = e, t.rounding = n, p(Z == 2 || Z == 4 ? i.neg() : i, e, n, !0)) : new t(NaN);
};
h.times = h.mul = function(e) {
    var n, i, t, r, s, o, u, l, f, c = this, a = c.constructor, d = c.d, g = (e = new a(e)).d;
    if (e.s *= c.s, !d || !d[0] || !g || !g[0]) return new a(!e.s || d && !d[0] && !g || g && !g[0] && !d ? NaN : !d || !g ? e.s / 0 : e.s * 0);
    for(i = b(c.e / m) + b(e.e / m), l = d.length, f = g.length, l < f && (s = d, d = g, g = s, o = l, l = f, f = o), s = [], o = l + f, t = o; t--;)s.push(0);
    for(t = f; --t >= 0;){
        for(n = 0, r = l + t; r > t;)u = s[r] + g[t] * d[r - t - 1] + n, s[r--] = u % D | 0, n = u / D | 0;
        s[r] = (s[r] + n) % D | 0;
    }
    for(; !s[--o];)s.pop();
    return n ? ++i : s.shift(), e.d = s, e.e = ue(s, i), w ? p(e, a.precision, a.rounding) : e;
};
h.toBinary = function(e, n) {
    return ke(this, 2, e, n);
};
h.toDecimalPlaces = h.toDP = function(e, n) {
    var i = this, t = i.constructor;
    return i = new t(i), e === void 0 ? i : (_(e, 0, $), n === void 0 ? n = t.rounding : _(n, 0, 8), p(i, e + i.e + 1, n));
};
h.toExponential = function(e, n) {
    var i, t = this, r = t.constructor;
    return e === void 0 ? i = F(t, !0) : (_(e, 0, $), n === void 0 ? n = r.rounding : _(n, 0, 8), t = p(new r(t), e + 1, n), i = F(t, !0, e + 1)), t.isNeg() && !t.isZero() ? "-" + i : i;
};
h.toFixed = function(e, n) {
    var i, t, r = this, s = r.constructor;
    return e === void 0 ? i = F(r) : (_(e, 0, $), n === void 0 ? n = s.rounding : _(n, 0, 8), t = p(new s(r), e + r.e + 1, n), i = F(t, !1, e + t.e + 1)), r.isNeg() && !r.isZero() ? "-" + i : i;
};
h.toFraction = function(e) {
    var n, i, t, r, s, o, u, l, f, c, a, d, g = this, v = g.d, N = g.constructor;
    if (!v) return new N(g);
    if (f = i = new N(1), t = l = new N(0), n = new N(t), s = n.e = Ze(v) - g.e - 1, o = s % m, n.d[0] = C(10, o < 0 ? m + o : o), e == null) e = s > 0 ? n : f;
    else {
        if (u = new N(e), !u.isInt() || u.lt(f)) throw Error(V + u);
        e = u.gt(n) ? s > 0 ? n : f : u;
    }
    for(w = !1, u = new N(O(v)), c = N.precision, N.precision = s = v.length * m * 2; a = S(u, n, 0, 1, 1), r = i.plus(a.times(t)), r.cmp(e) != 1;)i = t, t = r, r = f, f = l.plus(a.times(r)), l = r, r = n, n = u.minus(a.times(r)), u = r;
    return r = S(e.minus(i), t, 0, 1, 1), l = l.plus(r.times(f)), i = i.plus(r.times(t)), l.s = f.s = g.s, d = S(f, t, s, 1).minus(g).abs().cmp(S(l, i, s, 1).minus(g).abs()) < 1 ? [
        f,
        t
    ] : [
        l,
        i
    ], N.precision = c, w = !0, d;
};
h.toHexadecimal = h.toHex = function(e, n) {
    return ke(this, 16, e, n);
};
h.toNearest = function(e, n) {
    var i = this, t = i.constructor;
    if (i = new t(i), e == null) {
        if (!i.d) return i;
        e = new t(1), n = t.rounding;
    } else {
        if (e = new t(e), n === void 0 ? n = t.rounding : _(n, 0, 8), !i.d) return e.s ? i : e;
        if (!e.d) return e.s && (e.s = i.s), e;
    }
    return e.d[0] ? (w = !1, i = S(i, e, 0, n, 1).times(e), w = !0, p(i)) : (e.s = i.s, i = e), i;
};
h.toNumber = function() {
    return +this;
};
h.toOctal = function(e, n) {
    return ke(this, 8, e, n);
};
h.toPower = h.pow = function(e) {
    var n, i, t, r, s, o, u = this, l = u.constructor, f = +(e = new l(e));
    if (!u.d || !e.d || !u.d[0] || !e.d[0]) return new l(C(+u, f));
    if (u = new l(u), u.eq(1)) return u;
    if (t = l.precision, s = l.rounding, e.eq(1)) return p(u, t, s);
    if (n = b(e.e / m), n >= e.d.length - 1 && (i = f < 0 ? -f : f) <= tn) return r = Ue(l, u, i, t), e.s < 0 ? new l(1).div(r) : p(r, t, s);
    if (o = u.s, o < 0) {
        if (n < e.d.length - 1) return new l(NaN);
        if (e.d[n] & 1 || (o = 1), u.e == 0 && u.d[0] == 1 && u.d.length == 1) return u.s = o, u;
    }
    return i = C(+u, f), n = i == 0 || !isFinite(i) ? b(f * (Math.log("0." + O(u.d)) / Math.LN10 + u.e + 1)) : new l(i + "").e, n > l.maxE + 1 || n < l.minE - 1 ? new l(n > 0 ? o / 0 : 0) : (w = !1, l.rounding = u.s = 1, i = Math.min(12, (n + "").length), r = Ee(e.times(B(u, t + i)), t), r.d && (r = p(r, t + 5, 1), x(r.d, t, s) && (n = t + 10, r = p(Ee(e.times(B(u, n + i)), n), n + 5, 1), +O(r.d).slice(t + 1, t + 15) + 1 == 1e14 && (r = p(r, t + 1, 0)))), r.s = o, w = !0, l.rounding = s, p(r, t, s));
};
h.toPrecision = function(e, n) {
    var i, t = this, r = t.constructor;
    return e === void 0 ? i = F(t, t.e <= r.toExpNeg || t.e >= r.toExpPos) : (_(e, 1, $), n === void 0 ? n = r.rounding : _(n, 0, 8), t = p(new r(t), e, n), i = F(t, e <= t.e || t.e <= r.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + i : i;
};
h.toSignificantDigits = h.toSD = function(e, n) {
    var i = this, t = i.constructor;
    return e === void 0 ? (e = t.precision, n = t.rounding) : (_(e, 1, $), n === void 0 ? n = t.rounding : _(n, 0, 8)), p(new t(i), e, n);
};
h.toString = function() {
    var e = this, n = e.constructor, i = F(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
    return e.isNeg() && !e.isZero() ? "-" + i : i;
};
h.truncated = h.trunc = function() {
    return p(new this.constructor(this), this.e + 1, 1);
};
h.valueOf = h.toJSON = function() {
    var e = this, n = e.constructor, i = F(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
    return e.isNeg() ? "-" + i : i;
};
function O(e) {
    var n, i, t, r = e.length - 1, s = "", o = e[0];
    if (r > 0) {
        for(s += o, n = 1; n < r; n++)t = e[n] + "", i = m - t.length, i && (s += U(i)), s += t;
        o = e[n], t = o + "", i = m - t.length, i && (s += U(i));
    } else if (o === 0) return "0";
    for(; o % 10 === 0;)o /= 10;
    return s + o;
}
function _(e, n, i) {
    if (e !== ~~e || e < n || e > i) throw Error(V + e);
}
function x(e, n, i, t) {
    var r, s, o, u;
    for(s = e[0]; s >= 10; s /= 10)--n;
    return --n < 0 ? (n += m, r = 0) : (r = Math.ceil((n + 1) / m), n %= m), s = C(10, m - n), u = e[r] % s | 0, t == null ? n < 3 ? (n == 0 ? u = u / 100 | 0 : n == 1 && (u = u / 10 | 0), o = i < 4 && u == 99999 || i > 3 && u == 49999 || u == 5e4 || u == 0) : o = (i < 4 && u + 1 == s || i > 3 && u + 1 == s / 2) && (e[r + 1] / s / 100 | 0) == C(10, n - 2) - 1 || (u == s / 2 || u == 0) && (e[r + 1] / s / 100 | 0) == 0 : n < 4 ? (n == 0 ? u = u / 1e3 | 0 : n == 1 ? u = u / 100 | 0 : n == 2 && (u = u / 10 | 0), o = (t || i < 4) && u == 9999 || !t && i > 3 && u == 4999) : o = ((t || i < 4) && u + 1 == s || !t && i > 3 && u + 1 == s / 2) && (e[r + 1] / s / 1e3 | 0) == C(10, n - 3) - 1, o;
}
function ie(e, n, i) {
    for(var t, r = [
        0
    ], s, o = 0, u = e.length; o < u;){
        for(s = r.length; s--;)r[s] *= n;
        for(r[0] += we.indexOf(e.charAt(o++)), t = 0; t < r.length; t++)r[t] > i - 1 && (r[t + 1] === void 0 && (r[t + 1] = 0), r[t + 1] += r[t] / i | 0, r[t] %= i);
    }
    return r.reverse();
}
function sn(e, n) {
    var i, t, r;
    if (n.isZero()) return n;
    t = n.d.length, t < 32 ? (i = Math.ceil(t / 3), r = (1 / fe(4, i)).toString()) : (i = 16, r = "2.3283064365386962890625e-10"), e.precision += i, n = j(e, 1, n.times(r), new e(1));
    for(var s = i; s--;){
        var o = n.times(n);
        n = o.times(o).minus(o).times(8).plus(1);
    }
    return e.precision -= i, n;
}
var S = function() {
    function e(t, r, s) {
        var o, u = 0, l = t.length;
        for(t = t.slice(); l--;)o = t[l] * r + u, t[l] = o % s | 0, u = o / s | 0;
        return u && t.unshift(u), t;
    }
    function n(t, r, s, o) {
        var u, l;
        if (s != o) l = s > o ? 1 : -1;
        else for(u = l = 0; u < s; u++)if (t[u] != r[u]) {
            l = t[u] > r[u] ? 1 : -1;
            break;
        }
        return l;
    }
    function i(t, r, s, o) {
        for(var u = 0; s--;)t[s] -= u, u = t[s] < r[s] ? 1 : 0, t[s] = u * o + t[s] - r[s];
        for(; !t[0] && t.length > 1;)t.shift();
    }
    return function(t, r, s, o, u, l) {
        var f, c, a, d, g, v, N, A, M, q, E, P, Y, I, le, z, W, ce, T, y, ee = t.constructor, ae = t.s == r.s ? 1 : -1, R = t.d, k = r.d;
        if (!R || !R[0] || !k || !k[0]) return new ee(!t.s || !r.s || (R ? k && R[0] == k[0] : !k) ? NaN : R && R[0] == 0 || !k ? ae * 0 : ae / 0);
        for(l ? (g = 1, c = t.e - r.e) : (l = D, g = m, c = b(t.e / g) - b(r.e / g)), T = k.length, W = R.length, M = new ee(ae), q = M.d = [], a = 0; k[a] == (R[a] || 0); a++);
        if (k[a] > (R[a] || 0) && c--, s == null ? (I = s = ee.precision, o = ee.rounding) : u ? I = s + (t.e - r.e) + 1 : I = s, I < 0) q.push(1), v = !0;
        else {
            if (I = I / g + 2 | 0, a = 0, T == 1) {
                for(d = 0, k = k[0], I++; (a < W || d) && I--; a++)le = d * l + (R[a] || 0), q[a] = le / k | 0, d = le % k | 0;
                v = d || a < W;
            } else {
                for(d = l / (k[0] + 1) | 0, d > 1 && (k = e(k, d, l), R = e(R, d, l), T = k.length, W = R.length), z = T, E = R.slice(0, T), P = E.length; P < T;)E[P++] = 0;
                y = k.slice(), y.unshift(0), ce = k[0], k[1] >= l / 2 && ++ce;
                do d = 0, f = n(k, E, T, P), f < 0 ? (Y = E[0], T != P && (Y = Y * l + (E[1] || 0)), d = Y / ce | 0, d > 1 ? (d >= l && (d = l - 1), N = e(k, d, l), A = N.length, P = E.length, f = n(N, E, A, P), f == 1 && (d--, i(N, T < A ? y : k, A, l))) : (d == 0 && (f = d = 1), N = k.slice()), A = N.length, A < P && N.unshift(0), i(E, N, P, l), f == -1 && (P = E.length, f = n(k, E, T, P), f < 1 && (d++, i(E, T < P ? y : k, P, l))), P = E.length) : f === 0 && (d++, E = [
                    0
                ]), q[a++] = d, f && E[0] ? E[P++] = R[z] || 0 : (E = [
                    R[z]
                ], P = 1);
                while ((z++ < W || E[0] !== void 0) && I--)
                v = E[0] !== void 0;
            }
            q[0] || q.shift();
        }
        if (g == 1) M.e = c, Te = v;
        else {
            for(a = 1, d = q[0]; d >= 10; d /= 10)a++;
            M.e = a + c * g - 1, p(M, u ? s + M.e + 1 : s, o, v);
        }
        return M;
    };
}();
function p(e, n, i, t) {
    var r, s, o, u, l, f, c, a, d, g = e.constructor;
    e: if (n != null) {
        if (a = e.d, !a) return e;
        for(r = 1, u = a[0]; u >= 10; u /= 10)r++;
        if (s = n - r, s < 0) s += m, o = n, c = a[d = 0], l = c / C(10, r - o - 1) % 10 | 0;
        else if (d = Math.ceil((s + 1) / m), u = a.length, d >= u) if (t) {
            for(; u++ <= d;)a.push(0);
            c = l = 0, r = 1, s %= m, o = s - m + 1;
        } else break e;
        else {
            for(c = u = a[d], r = 1; u >= 10; u /= 10)r++;
            s %= m, o = s - m + r, l = o < 0 ? 0 : c / C(10, r - o - 1) % 10 | 0;
        }
        if (t = t || n < 0 || a[d + 1] !== void 0 || (o < 0 ? c : c % C(10, r - o - 1)), f = i < 4 ? (l || t) && (i == 0 || i == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (i == 4 || t || i == 6 && (s > 0 ? o > 0 ? c / C(10, r - o) : 0 : a[d - 1]) % 10 & 1 || i == (e.s < 0 ? 8 : 7)), n < 1 || !a[0]) return a.length = 0, f ? (n -= e.e + 1, a[0] = C(10, (m - n % m) % m), e.e = -n || 0) : a[0] = e.e = 0, e;
        if (s == 0 ? (a.length = d, u = 1, d--) : (a.length = d + 1, u = C(10, m - s), a[d] = o > 0 ? (c / C(10, r - o) % C(10, o) | 0) * u : 0), f) for(;;)if (d == 0) {
            for(s = 1, o = a[0]; o >= 10; o /= 10)s++;
            for(o = a[0] += u, u = 1; o >= 10; o /= 10)u++;
            s != u && (e.e++, a[0] == D && (a[0] = 1));
            break;
        } else {
            if (a[d] += u, a[d] != D) break;
            a[d--] = 0, u = 1;
        }
        for(s = a.length; a[--s] === 0;)a.pop();
    }
    return w && (e.e > g.maxE ? (e.d = null, e.e = NaN) : e.e < g.minE && (e.e = 0, e.d = [
        0
    ])), e;
}
function F(e, n, i) {
    if (!e.isFinite()) return Ve(e);
    var t, r = e.e, s = O(e.d), o = s.length;
    return n ? (i && (t = i - o) > 0 ? s = s.charAt(0) + "." + s.slice(1) + U(t) : o > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (s = "0." + U(-r - 1) + s, i && (t = i - o) > 0 && (s += U(t))) : r >= o ? (s += U(r + 1 - o), i && (t = i - r - 1) > 0 && (s = s + "." + U(t))) : ((t = r + 1) < o && (s = s.slice(0, t) + "." + s.slice(t)), i && (t = i - o) > 0 && (r + 1 === o && (s += "."), s += U(t))), s;
}
function ue(e, n) {
    var i = e[0];
    for(n *= m; i >= 10; i /= 10)n++;
    return n;
}
function se(e, n, i) {
    if (n > rn) throw w = !0, i && (e.precision = i), Error(Le);
    return p(new e(te), n, 1, !0);
}
function L(e, n, i) {
    if (n > ve) throw Error(Le);
    return p(new e(re), n, i, !0);
}
function Ze(e) {
    var n = e.length - 1, i = n * m + 1;
    if (n = e[n], n) {
        for(; n % 10 == 0; n /= 10)i--;
        for(n = e[0]; n >= 10; n /= 10)i++;
    }
    return i;
}
function U(e) {
    for(var n = ""; e--;)n += "0";
    return n;
}
function Ue(e, n, i, t) {
    var r, s = new e(1), o = Math.ceil(t / m + 4);
    for(w = !1;;){
        if (i % 2 && (s = s.times(n), _e(s.d, o) && (r = !0)), i = b(i / 2), i === 0) {
            i = s.d.length - 1, r && s.d[i] === 0 && ++s.d[i];
            break;
        }
        n = n.times(n), _e(n.d, o);
    }
    return w = !0, s;
}
function Ae(e) {
    return e.d[e.d.length - 1] & 1;
}
function Be(e, n, i) {
    for(var t, r = new e(n[0]), s = 0; ++s < n.length;)if (t = new e(n[s]), t.s) r[i](t) && (r = t);
    else {
        r = t;
        break;
    }
    return r;
}
function Ee(e, n) {
    var i, t, r, s, o, u, l, f = 0, c = 0, a = 0, d = e.constructor, g = d.rounding, v = d.precision;
    if (!e.d || !e.d[0] || e.e > 17) return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
    for(n == null ? (w = !1, l = v) : l = n, u = new d(.03125); e.e > -2;)e = e.times(u), a += 5;
    for(t = Math.log(C(2, a)) / Math.LN10 * 2 + 5 | 0, l += t, i = s = o = new d(1), d.precision = l;;){
        if (s = p(s.times(e), l, 1), i = i.times(++c), u = o.plus(S(s, i, l, 1)), O(u.d).slice(0, l) === O(o.d).slice(0, l)) {
            for(r = a; r--;)o = p(o.times(o), l, 1);
            if (n == null) if (f < 3 && x(o.d, l - t, g, f)) d.precision = l += 10, i = s = u = new d(1), c = 0, f++;
            else return p(o, d.precision = v, g, w = !0);
            else return d.precision = v, o;
        }
        o = u;
    }
}
function B(e, n) {
    var i, t, r, s, o, u, l, f, c, a, d, g = 1, v = 10, N = e, A = N.d, M = N.constructor, q = M.rounding, E = M.precision;
    if (N.s < 0 || !A || !A[0] || !N.e && A[0] == 1 && A.length == 1) return new M(A && !A[0] ? -1 / 0 : N.s != 1 ? NaN : A ? 0 : N);
    if (n == null ? (w = !1, c = E) : c = n, M.precision = c += v, i = O(A), t = i.charAt(0), Math.abs(s = N.e) < 15e14) {
        for(; t < 7 && t != 1 || t == 1 && i.charAt(1) > 3;)N = N.times(e), i = O(N.d), t = i.charAt(0), g++;
        s = N.e, t > 1 ? (N = new M("0." + i), s++) : N = new M(t + "." + i.slice(1));
    } else return f = se(M, c + 2, E).times(s + ""), N = B(new M(t + "." + i.slice(1)), c - v).plus(f), M.precision = E, n == null ? p(N, E, q, w = !0) : N;
    for(a = N, l = o = N = S(N.minus(1), N.plus(1), c, 1), d = p(N.times(N), c, 1), r = 3;;){
        if (o = p(o.times(d), c, 1), f = l.plus(S(o, new M(r), c, 1)), O(f.d).slice(0, c) === O(l.d).slice(0, c)) if (l = l.times(2), s !== 0 && (l = l.plus(se(M, c + 2, E).times(s + ""))), l = S(l, new M(g), c, 1), n == null) if (x(l.d, c - v, q, u)) M.precision = c += v, f = o = N = S(a.minus(1), a.plus(1), c, 1), d = p(N.times(N), c, 1), r = u = 1;
        else return p(l, M.precision = E, q, w = !0);
        else return M.precision = E, l;
        l = f, r += 2;
    }
}
function Ve(e) {
    return String(e.s * e.s / 0);
}
function Se(e, n) {
    var i, t, r;
    for((i = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (t = n.search(/e/i)) > 0 ? (i < 0 && (i = t), i += +n.slice(t + 1), n = n.substring(0, t)) : i < 0 && (i = n.length), t = 0; n.charCodeAt(t) === 48; t++);
    for(r = n.length; n.charCodeAt(r - 1) === 48; --r);
    if (n = n.slice(t, r), n) {
        if (r -= t, e.e = i = i - t - 1, e.d = [], t = (i + 1) % m, i < 0 && (t += m), t < r) {
            for(t && e.d.push(+n.slice(0, t)), r -= m; t < r;)e.d.push(+n.slice(t, t += m));
            n = n.slice(t), t = m - n.length;
        } else t -= r;
        for(; t--;)n += "0";
        e.d.push(+n), w && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [
            0
        ]));
    } else e.e = 0, e.d = [
        0
    ];
    return e;
}
function on(e, n) {
    var i, t, r, s, o, u, l, f, c;
    if (n.indexOf("_") > -1) {
        if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Ie.test(n)) return Se(e, n);
    } else if (n === "Infinity" || n === "NaN") return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
    if (en.test(n)) i = 16, n = n.toLowerCase();
    else if (ye.test(n)) i = 2;
    else if (nn.test(n)) i = 8;
    else throw Error(V + n);
    for(s = n.search(/p/i), s > 0 ? (l = +n.slice(s + 1), n = n.substring(2, s)) : n = n.slice(2), s = n.indexOf("."), o = s >= 0, t = e.constructor, o && (n = n.replace(".", ""), u = n.length, s = u - s, r = Ue(t, new t(i), s, s * 2)), f = ie(n, i, D), c = f.length - 1, s = c; f[s] === 0; --s)f.pop();
    return s < 0 ? new t(e.s * 0) : (e.e = ue(f, c), e.d = f, w = !1, o && (e = S(e, r, u * 4)), l && (e = e.times(Math.abs(l) < 54 ? C(2, l) : Q.pow(2, l))), w = !0, e);
}
function un(e, n) {
    var i, t = n.d.length;
    if (t < 3) return n.isZero() ? n : j(e, 2, n, n);
    i = 1.4 * Math.sqrt(t), i = i > 16 ? 16 : i | 0, n = n.times(1 / fe(5, i)), n = j(e, 2, n, n);
    for(var r, s = new e(5), o = new e(16), u = new e(20); i--;)r = n.times(n), n = n.times(s.plus(r.times(o.times(r).minus(u))));
    return n;
}
function j(e, n, i, t, r) {
    var s, o, u, l, f = 1, c = e.precision, a = Math.ceil(c / m);
    for(w = !1, l = i.times(i), u = new e(t);;){
        if (o = S(u.times(l), new e(n++ * n++), c, 1), u = r ? t.plus(o) : t.minus(o), t = S(o.times(l), new e(n++ * n++), c, 1), o = u.plus(t), o.d[a] !== void 0) {
            for(s = a; o.d[s] === u.d[s] && s--;);
            if (s == -1) break;
        }
        s = u, u = t, t = o, o = s, f++;
    }
    return w = !0, o.d.length = a + 1, o;
}
function fe(e, n) {
    for(var i = e; --n;)i *= e;
    return i;
}
function $e(e, n) {
    var i, t = n.s < 0, r = L(e, e.precision, 1), s = r.times(.5);
    if (n = n.abs(), n.lte(s)) return Z = t ? 4 : 1, n;
    if (i = n.divToInt(r), i.isZero()) Z = t ? 3 : 2;
    else {
        if (n = n.minus(i.times(r)), n.lte(s)) return Z = Ae(i) ? t ? 2 : 3 : t ? 4 : 1, n;
        Z = Ae(i) ? t ? 1 : 4 : t ? 3 : 2;
    }
    return n.minus(r).abs();
}
function ke(e, n, i, t) {
    var r, s, o, u, l, f, c, a, d, g = e.constructor, v = i !== void 0;
    if (v ? (_(i, 1, $), t === void 0 ? t = g.rounding : _(t, 0, 8)) : (i = g.precision, t = g.rounding), !e.isFinite()) c = Ve(e);
    else {
        for(c = F(e), o = c.indexOf("."), v ? (r = 2, n == 16 ? i = i * 4 - 3 : n == 8 && (i = i * 3 - 2)) : r = n, o >= 0 && (c = c.replace(".", ""), d = new g(1), d.e = c.length - o, d.d = ie(F(d), 10, r), d.e = d.d.length), a = ie(c, 10, r), s = l = a.length; a[--l] == 0;)a.pop();
        if (!a[0]) c = v ? "0p+0" : "0";
        else {
            if (o < 0 ? s-- : (e = new g(e), e.d = a, e.e = s, e = S(e, d, i, t, 0, r), a = e.d, s = e.e, f = Te), o = a[i], u = r / 2, f = f || a[i + 1] !== void 0, f = t < 4 ? (o !== void 0 || f) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : o > u || o === u && (t === 4 || f || t === 6 && a[i - 1] & 1 || t === (e.s < 0 ? 8 : 7)), a.length = i, f) for(; ++a[--i] > r - 1;)a[i] = 0, i || (++s, a.unshift(1));
            for(l = a.length; !a[l - 1]; --l);
            for(o = 0, c = ""; o < l; o++)c += we.charAt(a[o]);
            if (v) {
                if (l > 1) if (n == 16 || n == 8) {
                    for(o = n == 16 ? 4 : 3, --l; l % o; l++)c += "0";
                    for(a = ie(c, r, n), l = a.length; !a[l - 1]; --l);
                    for(o = 1, c = "1."; o < l; o++)c += we.charAt(a[o]);
                } else c = c.charAt(0) + "." + c.slice(1);
                c = c + (s < 0 ? "p" : "p+") + s;
            } else if (s < 0) {
                for(; ++s;)c = "0" + c;
                c = "0." + c;
            } else if (++s > l) for(s -= l; s--;)c += "0";
            else s < l && (c = c.slice(0, s) + "." + c.slice(s));
        }
        c = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + c;
    }
    return e.s < 0 ? "-" + c : c;
}
function _e(e, n) {
    if (e.length > n) return e.length = n, !0;
}
function fn(e) {
    return new this(e).abs();
}
function ln(e) {
    return new this(e).acos();
}
function cn(e) {
    return new this(e).acosh();
}
function an(e, n) {
    return new this(e).plus(n);
}
function dn(e) {
    return new this(e).asin();
}
function hn(e) {
    return new this(e).asinh();
}
function pn(e) {
    return new this(e).atan();
}
function gn(e) {
    return new this(e).atanh();
}
function mn(e, n) {
    e = new this(e), n = new this(n);
    var i, t = this.precision, r = this.rounding, s = t + 4;
    return !e.s || !n.s ? i = new this(NaN) : !e.d && !n.d ? (i = L(this, s, 1).times(n.s > 0 ? .25 : .75), i.s = e.s) : !n.d || e.isZero() ? (i = n.s < 0 ? L(this, t, r) : new this(0), i.s = e.s) : !e.d || n.isZero() ? (i = L(this, s, 1).times(.5), i.s = e.s) : n.s < 0 ? (this.precision = s, this.rounding = 1, i = this.atan(S(e, n, s, 1)), n = L(this, s, 1), this.precision = t, this.rounding = r, i = e.s < 0 ? i.minus(n) : i.plus(n)) : i = this.atan(S(e, n, s, 1)), i;
}
function wn(e) {
    return new this(e).cbrt();
}
function Nn(e) {
    return p(e = new this(e), e.e + 1, 2);
}
function vn(e, n, i) {
    return new this(e).clamp(n, i);
}
function En(e) {
    if (!e || typeof e != "object") throw Error(oe + "Object expected");
    var n, i, t, r = e.defaults === !0, s = [
        "precision",
        1,
        $,
        "rounding",
        0,
        8,
        "toExpNeg",
        -H,
        0,
        "toExpPos",
        0,
        H,
        "maxE",
        0,
        H,
        "minE",
        -H,
        0,
        "modulo",
        0,
        9
    ];
    for(n = 0; n < s.length; n += 3)if (i = s[n], r && (this[i] = Ne[i]), (t = e[i]) !== void 0) if (b(t) === t && t >= s[n + 1] && t <= s[n + 2]) this[i] = t;
    else throw Error(V + i + ": " + t);
    if (i = "crypto", r && (this[i] = Ne[i]), (t = e[i]) !== void 0) if (t === !0 || t === !1 || t === 0 || t === 1) if (t) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[i] = !0;
    else throw Error(De);
    else this[i] = !1;
    else throw Error(V + i + ": " + t);
    return this;
}
function Sn(e) {
    return new this(e).cos();
}
function kn(e) {
    return new this(e).cosh();
}
function He(e) {
    var n, i, t;
    function r(s) {
        var o, u, l, f = this;
        if (!(f instanceof r)) return new r(s);
        if (f.constructor = r, qe(s)) {
            f.s = s.s, w ? !s.d || s.e > r.maxE ? (f.e = NaN, f.d = null) : s.e < r.minE ? (f.e = 0, f.d = [
                0
            ]) : (f.e = s.e, f.d = s.d.slice()) : (f.e = s.e, f.d = s.d ? s.d.slice() : s.d);
            return;
        }
        if (l = typeof s, l === "number") {
            if (s === 0) {
                f.s = 1 / s < 0 ? -1 : 1, f.e = 0, f.d = [
                    0
                ];
                return;
            }
            if (s < 0 ? (s = -s, f.s = -1) : f.s = 1, s === ~~s && s < 1e7) {
                for(o = 0, u = s; u >= 10; u /= 10)o++;
                w ? o > r.maxE ? (f.e = NaN, f.d = null) : o < r.minE ? (f.e = 0, f.d = [
                    0
                ]) : (f.e = o, f.d = [
                    s
                ]) : (f.e = o, f.d = [
                    s
                ]);
                return;
            } else if (s * 0 !== 0) {
                s || (f.s = NaN), f.e = NaN, f.d = null;
                return;
            }
            return Se(f, s.toString());
        } else if (l !== "string") throw Error(V + s);
        return (u = s.charCodeAt(0)) === 45 ? (s = s.slice(1), f.s = -1) : (u === 43 && (s = s.slice(1)), f.s = 1), Ie.test(s) ? Se(f, s) : on(f, s);
    }
    if (r.prototype = h, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = En, r.clone = He, r.isDecimal = qe, r.abs = fn, r.acos = ln, r.acosh = cn, r.add = an, r.asin = dn, r.asinh = hn, r.atan = pn, r.atanh = gn, r.atan2 = mn, r.cbrt = wn, r.ceil = Nn, r.clamp = vn, r.cos = Sn, r.cosh = kn, r.div = Mn, r.exp = Cn, r.floor = On, r.hypot = Pn, r.ln = Rn, r.log = bn, r.log10 = _n, r.log2 = An, r.max = qn, r.min = Tn, r.mod = Ln, r.mul = Dn, r.pow = Fn, r.random = In, r.round = Zn, r.sign = Un, r.sin = Bn, r.sinh = Vn, r.sqrt = $n, r.sub = Hn, r.sum = jn, r.tan = Wn, r.tanh = Gn, r.trunc = Jn, e === void 0 && (e = {}), e && e.defaults !== !0) for(t = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto"
    ], n = 0; n < t.length;)e.hasOwnProperty(i = t[n++]) || (e[i] = this[i]);
    return r.config(e), r;
}
function Mn(e, n) {
    return new this(e).div(n);
}
function Cn(e) {
    return new this(e).exp();
}
function On(e) {
    return p(e = new this(e), e.e + 1, 3);
}
function Pn() {
    var e, n, i = new this(0);
    for(w = !1, e = 0; e < arguments.length;)if (n = new this(arguments[e++]), n.d) i.d && (i = i.plus(n.times(n)));
    else {
        if (n.s) return w = !0, new this(1 / 0);
        i = n;
    }
    return w = !0, i.sqrt();
}
function qe(e) {
    return e instanceof Q || e && e.toStringTag === Fe || !1;
}
function Rn(e) {
    return new this(e).ln();
}
function bn(e, n) {
    return new this(e).log(n);
}
function An(e) {
    return new this(e).log(2);
}
function _n(e) {
    return new this(e).log(10);
}
function qn() {
    return Be(this, arguments, "lt");
}
function Tn() {
    return Be(this, arguments, "gt");
}
function Ln(e, n) {
    return new this(e).mod(n);
}
function Dn(e, n) {
    return new this(e).mul(n);
}
function Fn(e, n) {
    return new this(e).pow(n);
}
function In(e) {
    var n, i, t, r, s = 0, o = new this(1), u = [];
    if (e === void 0 ? e = this.precision : _(e, 1, $), t = Math.ceil(e / m), this.crypto) if (crypto.getRandomValues) for(n = crypto.getRandomValues(new Uint32Array(t)); s < t;)r = n[s], r >= 429e7 ? n[s] = crypto.getRandomValues(new Uint32Array(1))[0] : u[s++] = r % 1e7;
    else if (crypto.randomBytes) {
        for(n = crypto.randomBytes(t *= 4); s < t;)r = n[s] + (n[s + 1] << 8) + (n[s + 2] << 16) + ((n[s + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, s) : (u.push(r % 1e7), s += 4);
        s = t / 4;
    } else throw Error(De);
    else for(; s < t;)u[s++] = Math.random() * 1e7 | 0;
    for(t = u[--s], e %= m, t && e && (r = C(10, m - e), u[s] = (t / r | 0) * r); u[s] === 0; s--)u.pop();
    if (s < 0) i = 0, u = [
        0
    ];
    else {
        for(i = -1; u[0] === 0; i -= m)u.shift();
        for(t = 1, r = u[0]; r >= 10; r /= 10)t++;
        t < m && (i -= m - t);
    }
    return o.e = i, o.d = u, o;
}
function Zn(e) {
    return p(e = new this(e), e.e + 1, this.rounding);
}
function Un(e) {
    return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Bn(e) {
    return new this(e).sin();
}
function Vn(e) {
    return new this(e).sinh();
}
function $n(e) {
    return new this(e).sqrt();
}
function Hn(e, n) {
    return new this(e).sub(n);
}
function jn() {
    var e = 0, n = arguments, i = new this(n[e]);
    for(w = !1; i.s && ++e < n.length;)i = i.plus(n[e]);
    return w = !0, p(i, this.precision, this.rounding);
}
function Wn(e) {
    return new this(e).tan();
}
function Gn(e) {
    return new this(e).tanh();
}
function Jn(e) {
    return p(e = new this(e), e.e + 1, 1);
}
h[Symbol.for("nodejs.util.inspect.custom")] = h.toString;
h[Symbol.toStringTag] = "Decimal";
var Q = h.constructor = He(Ne);
te = new Q(te);
re = new Q(re);
var je = Q;
0 && (module.exports = {
    Decimal,
    Public,
    getRuntime,
    makeStrictEnum,
    objectEnumValues
}); /*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.4.3
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/  //# sourceMappingURL=index-browser.js.map
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@prisma/client/index-browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const prisma = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/.prisma/client/index-browser.js [app-client] (ecmascript)");
module.exports = prisma;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/.prisma/client/index-browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, "__esModule", {
    value: true
});
const { Decimal, objectEnumValues, makeStrictEnum, Public, getRuntime, skip } = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@prisma/client/runtime/index-browser.js [app-client] (ecmascript)");
const Prisma = {};
exports.Prisma = Prisma;
exports.$Enums = {};
/**
 * Prisma Client JS version: 6.2.1
 * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
 */ Prisma.prismaVersion = {
    client: "6.2.1",
    engine: "4123509d24aa4dede1e864b46351bf2790323b69"
};
Prisma.PrismaClientKnownRequestError = ()=>{
    const runtimeName = getRuntime().prettyName;
    throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientUnknownRequestError = ()=>{
    const runtimeName = getRuntime().prettyName;
    throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientRustPanicError = ()=>{
    const runtimeName = getRuntime().prettyName;
    throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientInitializationError = ()=>{
    const runtimeName = getRuntime().prettyName;
    throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientValidationError = ()=>{
    const runtimeName = getRuntime().prettyName;
    throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.Decimal = Decimal;
/**
 * Re-export of sql-template-tag
 */ Prisma.sql = ()=>{
    const runtimeName = getRuntime().prettyName;
    throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.empty = ()=>{
    const runtimeName = getRuntime().prettyName;
    throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.join = ()=>{
    const runtimeName = getRuntime().prettyName;
    throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.raw = ()=>{
    const runtimeName = getRuntime().prettyName;
    throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.validator = Public.validator;
/**
* Extensions
*/ Prisma.getExtensionContext = ()=>{
    const runtimeName = getRuntime().prettyName;
    throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.defineExtension = ()=>{
    const runtimeName = getRuntime().prettyName;
    throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
/**
 * Shorthand utilities for JSON filtering
 */ Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;
Prisma.NullTypes = {
    DbNull: objectEnumValues.classes.DbNull,
    JsonNull: objectEnumValues.classes.JsonNull,
    AnyNull: objectEnumValues.classes.AnyNull
};
/**
 * Enums
 */ exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Prisma.UserScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    password: 'password',
    image: 'image',
    role: 'role'
};
exports.Prisma.AccountScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
};
exports.Prisma.SessionScalarFieldEnum = {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
};
exports.Prisma.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.Prisma.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.Prisma.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.Prisma.ModelName = {
    User: 'User',
    Account: 'Account',
    Session: 'Session'
};
/**
 * This is a stub Prisma Client that will error at runtime if called.
 */ class PrismaClient {
    constructor(){
        return new Proxy(this, {
            get (target, prop) {
                let message;
                const runtime = getRuntime();
                if (runtime.isEdge) {
                    message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
                } else {
                    message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).';
                }
                message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`;
                throw new Error(message);
            }
        });
    }
}
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@prisma/debug/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Debug",
    ()=>Debug,
    "clearLogs",
    ()=>clearLogs,
    "default",
    ()=>index_default,
    "getLogs",
    ()=>getLogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
// ../../node_modules/.pnpm/kleur@4.1.5/node_modules/kleur/colors.mjs
var colors_exports = {};
__export(colors_exports, {
    $: ()=>$,
    bgBlack: ()=>bgBlack,
    bgBlue: ()=>bgBlue,
    bgCyan: ()=>bgCyan,
    bgGreen: ()=>bgGreen,
    bgMagenta: ()=>bgMagenta,
    bgRed: ()=>bgRed,
    bgWhite: ()=>bgWhite,
    bgYellow: ()=>bgYellow,
    black: ()=>black,
    blue: ()=>blue,
    bold: ()=>bold,
    cyan: ()=>cyan,
    dim: ()=>dim,
    gray: ()=>gray,
    green: ()=>green,
    grey: ()=>grey,
    hidden: ()=>hidden,
    inverse: ()=>inverse,
    italic: ()=>italic,
    magenta: ()=>magenta,
    red: ()=>red,
    reset: ()=>reset,
    strikethrough: ()=>strikethrough,
    underline: ()=>underline,
    white: ()=>white,
    yellow: ()=>yellow
});
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined") {
    ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env || {});
    isTTY = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stdout && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stdout.isTTY;
}
var $ = {
    enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
    let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
    let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
    return function(txt) {
        if (!$.enabled || txt == null) return txt;
        return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
    };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);
// src/index.ts
var MAX_ARGS_HISTORY = 100;
var COLORS = [
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "red"
];
var argsHistory = [];
var lastTimestamp = Date.now();
var lastColor = 0;
var processEnv = typeof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env : {};
globalThis.DEBUG ??= processEnv.DEBUG ?? "";
globalThis.DEBUG_COLORS ??= processEnv.DEBUG_COLORS ? processEnv.DEBUG_COLORS === "true" : true;
var topProps = {
    enable (namespace) {
        if (typeof namespace === "string") {
            globalThis.DEBUG = namespace;
        }
    },
    disable () {
        const prev = globalThis.DEBUG;
        globalThis.DEBUG = "";
        return prev;
    },
    // this is the core logic to check if logging should happen or not
    enabled (namespace) {
        const listenedNamespaces = globalThis.DEBUG.split(",").map((s)=>{
            return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
        });
        const isListened = listenedNamespaces.some((listenedNamespace)=>{
            if (listenedNamespace === "" || listenedNamespace[0] === "-") return false;
            return namespace.match(RegExp(listenedNamespace.split("*").join(".*") + "$"));
        });
        const isExcluded = listenedNamespaces.some((listenedNamespace)=>{
            if (listenedNamespace === "" || listenedNamespace[0] !== "-") return false;
            return namespace.match(RegExp(listenedNamespace.slice(1).split("*").join(".*") + "$"));
        });
        return isListened && !isExcluded;
    },
    log: (...args)=>{
        const [namespace, format, ...rest] = args;
        const logWithFormatting = console.warn ?? console.log;
        logWithFormatting(`${namespace} ${format}`, ...rest);
    },
    formatters: {}
};
function debugCreate(namespace) {
    const instanceProps = {
        color: COLORS[lastColor++ % COLORS.length],
        enabled: topProps.enabled(namespace),
        namespace,
        log: topProps.log,
        extend: ()=>{}
    };
    const debugCall = (...args)=>{
        const { enabled, namespace: namespace2, color, log } = instanceProps;
        if (args.length !== 0) {
            argsHistory.push([
                namespace2,
                ...args
            ]);
        }
        if (argsHistory.length > MAX_ARGS_HISTORY) {
            argsHistory.shift();
        }
        if (topProps.enabled(namespace2) || enabled) {
            const stringArgs = args.map((arg)=>{
                if (typeof arg === "string") {
                    return arg;
                }
                return safeStringify(arg);
            });
            const ms = `+${Date.now() - lastTimestamp}ms`;
            lastTimestamp = Date.now();
            if (globalThis.DEBUG_COLORS) {
                log(colors_exports[color](bold(namespace2)), ...stringArgs, colors_exports[color](ms));
            } else {
                log(namespace2, ...stringArgs, ms);
            }
        }
    };
    return new Proxy(debugCall, {
        get: (_, prop)=>instanceProps[prop],
        set: (_, prop, value)=>instanceProps[prop] = value
    });
}
var Debug = new Proxy(debugCreate, {
    get: (_, prop)=>topProps[prop],
    set: (_, prop, value)=>topProps[prop] = value
});
function safeStringify(value, indent = 2) {
    const cache = /* @__PURE__ */ new Set();
    return JSON.stringify(value, (key, value2)=>{
        if (typeof value2 === "object" && value2 !== null) {
            if (cache.has(value2)) {
                return `[Circular *]`;
            }
            cache.add(value2);
        } else if (typeof value2 === "bigint") {
            return value2.toString();
        }
        return value2;
    }, indent);
}
function getLogs(numChars = 7500) {
    const logs = argsHistory.map(([namespace, ...args])=>{
        return `${namespace} ${args.map((arg)=>{
            if (typeof arg === "string") {
                return arg;
            } else {
                return JSON.stringify(arg);
            }
        }).join(" ")}`;
    }).join("\n");
    if (logs.length < numChars) {
        return logs;
    }
    return logs.slice(-numChars);
}
function clearLogs() {
    argsHistory.length = 0;
}
var index_default = Debug;
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@prisma/driver-adapter-utils/dist/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// src/debug.ts
__turbopack_context__.s([
    "ColumnTypeEnum",
    ()=>ColumnTypeEnum,
    "DriverAdapterError",
    ()=>DriverAdapterError,
    "bindAdapter",
    ()=>bindAdapter,
    "bindMigrationAwareSqlAdapterFactory",
    ()=>bindMigrationAwareSqlAdapterFactory,
    "bindSqlAdapterFactory",
    ()=>bindSqlAdapterFactory,
    "err",
    ()=>err,
    "isDriverAdapterError",
    ()=>isDriverAdapterError,
    "mockAdapter",
    ()=>mockAdapter,
    "mockAdapterErrors",
    ()=>mockAdapterErrors,
    "mockAdapterFactory",
    ()=>mockAdapterFactory,
    "mockMigrationAwareAdapterFactory",
    ()=>mockMigrationAwareAdapterFactory,
    "ok",
    ()=>ok
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@prisma/debug/dist/index.mjs [app-client] (ecmascript)");
;
// src/error.ts
var DriverAdapterError = class extends Error {
    name = "DriverAdapterError";
    cause;
    constructor(payload){
        super(typeof payload["message"] === "string" ? payload["message"] : payload.kind);
        this.cause = payload;
    }
};
function isDriverAdapterError(error) {
    return error["name"] === "DriverAdapterError" && typeof error["cause"] === "object";
}
// src/result.ts
function ok(value) {
    return {
        ok: true,
        value,
        map (fn) {
            return ok(fn(value));
        },
        flatMap (fn) {
            return fn(value);
        }
    };
}
function err(error) {
    return {
        ok: false,
        error,
        map () {
            return err(error);
        },
        flatMap () {
            return err(error);
        }
    };
}
// src/binder.ts
var debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Debug"])("driver-adapter-utils");
var ErrorRegistryInternal = class {
    registeredErrors = [];
    consumeError(id) {
        return this.registeredErrors[id];
    }
    registerNewError(error) {
        let i = 0;
        while(this.registeredErrors[i] !== void 0){
            i++;
        }
        this.registeredErrors[i] = {
            error
        };
        return i;
    }
};
function copySymbolsFromSource(source, target) {
    const symbols = Object.getOwnPropertySymbols(source);
    const symbolObject = Object.fromEntries(symbols.map((symbol)=>[
            symbol,
            true
        ]));
    Object.assign(target, symbolObject);
}
var bindMigrationAwareSqlAdapterFactory = (adapterFactory)=>{
    const errorRegistry = new ErrorRegistryInternal();
    const boundFactory = {
        adapterName: adapterFactory.adapterName,
        provider: adapterFactory.provider,
        errorRegistry,
        connect: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connect.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        },
        connectToShadowDb: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connectToShadowDb.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        }
    };
    copySymbolsFromSource(adapterFactory, boundFactory);
    return boundFactory;
};
var bindSqlAdapterFactory = (adapterFactory)=>{
    const errorRegistry = new ErrorRegistryInternal();
    const boundFactory = {
        adapterName: adapterFactory.adapterName,
        provider: adapterFactory.provider,
        errorRegistry,
        connect: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connect.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        }
    };
    copySymbolsFromSource(adapterFactory, boundFactory);
    return boundFactory;
};
var bindAdapter = (adapter, errorRegistry = new ErrorRegistryInternal())=>{
    const boundAdapter = {
        adapterName: adapter.adapterName,
        errorRegistry,
        queryRaw: wrapAsync(errorRegistry, adapter.queryRaw.bind(adapter)),
        executeRaw: wrapAsync(errorRegistry, adapter.executeRaw.bind(adapter)),
        executeScript: wrapAsync(errorRegistry, adapter.executeScript.bind(adapter)),
        dispose: wrapAsync(errorRegistry, adapter.dispose.bind(adapter)),
        provider: adapter.provider,
        startTransaction: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapter.startTransaction.bind(adapter))(...args);
            return ctx.map((ctx2)=>bindTransaction(errorRegistry, ctx2));
        }
    };
    if (adapter.getConnectionInfo) {
        boundAdapter.getConnectionInfo = wrapSync(errorRegistry, adapter.getConnectionInfo.bind(adapter));
    }
    return boundAdapter;
};
var bindTransaction = (errorRegistry, transaction)=>{
    return {
        adapterName: transaction.adapterName,
        provider: transaction.provider,
        options: transaction.options,
        queryRaw: wrapAsync(errorRegistry, transaction.queryRaw.bind(transaction)),
        executeRaw: wrapAsync(errorRegistry, transaction.executeRaw.bind(transaction)),
        commit: wrapAsync(errorRegistry, transaction.commit.bind(transaction)),
        rollback: wrapAsync(errorRegistry, transaction.rollback.bind(transaction))
    };
};
function wrapAsync(registry, fn) {
    return async (...args)=>{
        try {
            return ok(await fn(...args));
        } catch (error) {
            debug("[error@wrapAsync]", error);
            if (isDriverAdapterError(error)) {
                return err(error.cause);
            }
            const id = registry.registerNewError(error);
            return err({
                kind: "GenericJs",
                id
            });
        }
    };
}
function wrapSync(registry, fn) {
    return (...args)=>{
        try {
            return ok(fn(...args));
        } catch (error) {
            debug("[error@wrapSync]", error);
            if (isDriverAdapterError(error)) {
                return err(error.cause);
            }
            const id = registry.registerNewError(error);
            return err({
                kind: "GenericJs",
                id
            });
        }
    };
}
// src/const.ts
var ColumnTypeEnum = {
    // Scalars
    Int32: 0,
    Int64: 1,
    Float: 2,
    Double: 3,
    Numeric: 4,
    Boolean: 5,
    Character: 6,
    Text: 7,
    Date: 8,
    Time: 9,
    DateTime: 10,
    Json: 11,
    Enum: 12,
    Bytes: 13,
    Set: 14,
    Uuid: 15,
    // Arrays
    Int32Array: 64,
    Int64Array: 65,
    FloatArray: 66,
    DoubleArray: 67,
    NumericArray: 68,
    BooleanArray: 69,
    CharacterArray: 70,
    TextArray: 71,
    DateArray: 72,
    TimeArray: 73,
    DateTimeArray: 74,
    JsonArray: 75,
    EnumArray: 76,
    BytesArray: 77,
    UuidArray: 78,
    // Custom
    UnknownNumber: 128
};
// src/mock.ts
var mockAdapterErrors = {
    queryRaw: new Error("Not implemented: queryRaw"),
    executeRaw: new Error("Not implemented: executeRaw"),
    startTransaction: new Error("Not implemented: startTransaction"),
    executeScript: new Error("Not implemented: executeScript"),
    dispose: new Error("Not implemented: dispose")
};
function mockAdapter(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        queryRaw: ()=>Promise.reject(mockAdapterErrors.queryRaw),
        executeRaw: ()=>Promise.reject(mockAdapterErrors.executeRaw),
        startTransaction: ()=>Promise.reject(mockAdapterErrors.startTransaction),
        executeScript: ()=>Promise.reject(mockAdapterErrors.executeScript),
        dispose: ()=>Promise.reject(mockAdapterErrors.dispose),
        [Symbol.for("adapter.mockAdapter")]: true
    };
}
function mockAdapterFactory(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        connect: ()=>Promise.resolve(mockAdapter(provider)),
        [Symbol.for("adapter.mockAdapterFactory")]: true
    };
}
function mockMigrationAwareAdapterFactory(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        connect: ()=>Promise.resolve(mockAdapter(provider)),
        connectToShadowDb: ()=>Promise.resolve(mockAdapter(provider)),
        [Symbol.for("adapter.mockMigrationAwareAdapterFactory")]: true
    };
}
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-types/node_modules/postgres-array/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.parse = function(source, transform) {
    return new ArrayParser(source, transform).parse();
};
class ArrayParser {
    constructor(source, transform){
        this.source = source;
        this.transform = transform || identity;
        this.position = 0;
        this.entries = [];
        this.recorded = [];
        this.dimension = 0;
    }
    isEof() {
        return this.position >= this.source.length;
    }
    nextCharacter() {
        var character = this.source[this.position++];
        if (character === '\\') {
            return {
                value: this.source[this.position++],
                escaped: true
            };
        }
        return {
            value: character,
            escaped: false
        };
    }
    record(character) {
        this.recorded.push(character);
    }
    newEntry(includeEmpty) {
        var entry;
        if (this.recorded.length > 0 || includeEmpty) {
            entry = this.recorded.join('');
            if (entry === 'NULL' && !includeEmpty) {
                entry = null;
            }
            if (entry !== null) entry = this.transform(entry);
            this.entries.push(entry);
            this.recorded = [];
        }
    }
    consumeDimensions() {
        if (this.source[0] === '[') {
            while(!this.isEof()){
                var char = this.nextCharacter();
                if (char.value === '=') break;
            }
        }
    }
    parse(nested) {
        var character, parser, quote;
        this.consumeDimensions();
        while(!this.isEof()){
            character = this.nextCharacter();
            if (character.value === '{' && !quote) {
                this.dimension++;
                if (this.dimension > 1) {
                    parser = new ArrayParser(this.source.substr(this.position - 1), this.transform);
                    this.entries.push(parser.parse(true));
                    this.position += parser.position - 2;
                }
            } else if (character.value === '}' && !quote) {
                this.dimension--;
                if (!this.dimension) {
                    this.newEntry();
                    if (nested) return this.entries;
                }
            } else if (character.value === '"' && !character.escaped) {
                if (quote) this.newEntry(true);
                quote = !quote;
            } else if (character.value === ',' && !quote) {
                this.newEntry();
            } else {
                this.record(character.value);
            }
        }
        if (this.dimension !== 0) {
            throw new Error('array dimension not balanced');
        }
        return this.entries;
    }
}
function identity(value) {
    return value;
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/postgres-array/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const BACKSLASH = '\\';
const DQUOT = '"';
const LBRACE = '{';
const RBRACE = '}';
const LBRACKET = '[';
const EQUALS = '=';
const COMMA = ',';
/** When the raw value is this, it means a literal `null` */ const NULL_STRING = 'NULL';
/**
 * Parses an array according to
 * https://www.postgresql.org/docs/17/arrays.html#ARRAYS-IO
 *
 * Trusts the data (mostly), so only hook up to trusted Postgres servers.
 */ function makeParseArrayWithTransform(transform) {
    const haveTransform = transform != null;
    return function parseArray(str) {
        const rbraceIndex = str.length - 1;
        if (rbraceIndex === 1) {
            return [];
        }
        if (str[rbraceIndex] !== RBRACE) {
            throw new Error('Invalid array text - must end with }');
        }
        // If starts with `[`, it is specifying the index boundas. Skip past first `=`.
        let position = 0;
        if (str[position] === LBRACKET) {
            position = str.indexOf(EQUALS) + 1;
        }
        if (str[position++] !== LBRACE) {
            throw new Error('Invalid array text - must start with {');
        }
        const output = [];
        let current = output;
        const stack = [];
        let currentStringStart = position;
        let currentString = '';
        let expectValue = true;
        for(; position < rbraceIndex; ++position){
            let char = str[position];
            // > The array output routine will put double quotes around element values if
            // > they are empty strings, contain curly braces, delimiter characters, double
            // > quotes, backslashes, or white space, or match the word NULL. Double quotes
            // > and backslashes embedded in element values will be backslash-escaped.
            if (char === DQUOT) {
                // It's escaped
                currentStringStart = ++position;
                let dquot = str.indexOf(DQUOT, currentStringStart);
                let backSlash = str.indexOf(BACKSLASH, currentStringStart);
                while(backSlash !== -1 && backSlash < dquot){
                    position = backSlash;
                    const part = str.slice(currentStringStart, position);
                    currentString += part;
                    currentStringStart = ++position;
                    if (dquot === position++) {
                        // This was an escaped doublequote; find the next one!
                        dquot = str.indexOf(DQUOT, position);
                    }
                    // Either way, find the next backslash
                    backSlash = str.indexOf(BACKSLASH, position);
                }
                position = dquot;
                const part = str.slice(currentStringStart, position);
                currentString += part;
                current.push(haveTransform ? transform(currentString) : currentString);
                currentString = '';
                expectValue = false;
            } else if (char === LBRACE) {
                const newArray = [];
                current.push(newArray);
                stack.push(current);
                current = newArray;
                currentStringStart = position + 1;
                expectValue = true;
            } else if (char === COMMA) {
                expectValue = true;
            } else if (char === RBRACE) {
                expectValue = false;
                const arr = stack.pop();
                if (arr === undefined) {
                    throw new Error("Invalid array text - too many '}'");
                }
                current = arr;
            } else if (expectValue) {
                currentStringStart = position;
                while((char = str[position]) !== COMMA && char !== RBRACE && position < rbraceIndex){
                    ++position;
                }
                const part = str.slice(currentStringStart, position--);
                current.push(part === NULL_STRING ? null : haveTransform ? transform(part) : part);
                expectValue = false;
            } else {
                throw new Error('Was expecting delimeter');
            }
        }
        return output;
    };
}
const parseArray = makeParseArrayWithTransform();
exports.parse = (source, transform)=>transform != null ? makeParseArrayWithTransform(transform)(source) : parseArray(source);
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-types/lib/arrayParser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var array = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-types/node_modules/postgres-array/index.js [app-client] (ecmascript)");
module.exports = {
    create: function(source, transform) {
        return {
            parse: function() {
                return array.parse(source, transform);
            }
        };
    }
};
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-types/lib/textParsers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var array = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-types/node_modules/postgres-array/index.js [app-client] (ecmascript)");
var arrayParser = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-types/lib/arrayParser.js [app-client] (ecmascript)");
var parseDate = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/postgres-date/index.js [app-client] (ecmascript)");
var parseInterval = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/postgres-interval/index.js [app-client] (ecmascript)");
var parseByteA = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/postgres-bytea/index.js [app-client] (ecmascript)");
function allowNull(fn) {
    return function nullAllowed(value) {
        if (value === null) return value;
        return fn(value);
    };
}
function parseBool(value) {
    if (value === null) return value;
    return value === 'TRUE' || value === 't' || value === 'true' || value === 'y' || value === 'yes' || value === 'on' || value === '1';
}
function parseBoolArray(value) {
    if (!value) return null;
    return array.parse(value, parseBool);
}
function parseBaseTenInt(string) {
    return parseInt(string, 10);
}
function parseIntegerArray(value) {
    if (!value) return null;
    return array.parse(value, allowNull(parseBaseTenInt));
}
function parseBigIntegerArray(value) {
    if (!value) return null;
    return array.parse(value, allowNull(function(entry) {
        return parseBigInteger(entry).trim();
    }));
}
var parsePointArray = function(value) {
    if (!value) {
        return null;
    }
    var p = arrayParser.create(value, function(entry) {
        if (entry !== null) {
            entry = parsePoint(entry);
        }
        return entry;
    });
    return p.parse();
};
var parseFloatArray = function(value) {
    if (!value) {
        return null;
    }
    var p = arrayParser.create(value, function(entry) {
        if (entry !== null) {
            entry = parseFloat(entry);
        }
        return entry;
    });
    return p.parse();
};
var parseStringArray = function(value) {
    if (!value) {
        return null;
    }
    var p = arrayParser.create(value);
    return p.parse();
};
var parseDateArray = function(value) {
    if (!value) {
        return null;
    }
    var p = arrayParser.create(value, function(entry) {
        if (entry !== null) {
            entry = parseDate(entry);
        }
        return entry;
    });
    return p.parse();
};
var parseIntervalArray = function(value) {
    if (!value) {
        return null;
    }
    var p = arrayParser.create(value, function(entry) {
        if (entry !== null) {
            entry = parseInterval(entry);
        }
        return entry;
    });
    return p.parse();
};
var parseByteAArray = function(value) {
    if (!value) {
        return null;
    }
    return array.parse(value, allowNull(parseByteA));
};
var parseInteger = function(value) {
    return parseInt(value, 10);
};
var parseBigInteger = function(value) {
    var valStr = String(value);
    if (/^\d+$/.test(valStr)) {
        return valStr;
    }
    return value;
};
var parseJsonArray = function(value) {
    if (!value) {
        return null;
    }
    return array.parse(value, allowNull(JSON.parse));
};
var parsePoint = function(value) {
    if (value[0] !== '(') {
        return null;
    }
    value = value.substring(1, value.length - 1).split(',');
    return {
        x: parseFloat(value[0]),
        y: parseFloat(value[1])
    };
};
var parseCircle = function(value) {
    if (value[0] !== '<' && value[1] !== '(') {
        return null;
    }
    var point = '(';
    var radius = '';
    var pointParsed = false;
    for(var i = 2; i < value.length - 1; i++){
        if (!pointParsed) {
            point += value[i];
        }
        if (value[i] === ')') {
            pointParsed = true;
            continue;
        } else if (!pointParsed) {
            continue;
        }
        if (value[i] === ',') {
            continue;
        }
        radius += value[i];
    }
    var result = parsePoint(point);
    result.radius = parseFloat(radius);
    return result;
};
var init = function(register) {
    register(20, parseBigInteger); // int8
    register(21, parseInteger); // int2
    register(23, parseInteger); // int4
    register(26, parseInteger); // oid
    register(700, parseFloat); // float4/real
    register(701, parseFloat); // float8/double
    register(16, parseBool);
    register(1082, parseDate); // date
    register(1114, parseDate); // timestamp without timezone
    register(1184, parseDate); // timestamp
    register(600, parsePoint); // point
    register(651, parseStringArray); // cidr[]
    register(718, parseCircle); // circle
    register(1000, parseBoolArray);
    register(1001, parseByteAArray);
    register(1005, parseIntegerArray); // _int2
    register(1007, parseIntegerArray); // _int4
    register(1028, parseIntegerArray); // oid[]
    register(1016, parseBigIntegerArray); // _int8
    register(1017, parsePointArray); // point[]
    register(1021, parseFloatArray); // _float4
    register(1022, parseFloatArray); // _float8
    register(1231, parseFloatArray); // _numeric
    register(1014, parseStringArray); //char
    register(1015, parseStringArray); //varchar
    register(1008, parseStringArray);
    register(1009, parseStringArray);
    register(1040, parseStringArray); // macaddr[]
    register(1041, parseStringArray); // inet[]
    register(1115, parseDateArray); // timestamp without time zone[]
    register(1182, parseDateArray); // _date
    register(1185, parseDateArray); // timestamp with time zone[]
    register(1186, parseInterval);
    register(1187, parseIntervalArray);
    register(17, parseByteA);
    register(114, JSON.parse.bind(JSON)); // json
    register(3802, JSON.parse.bind(JSON)); // jsonb
    register(199, parseJsonArray); // json[]
    register(3807, parseJsonArray); // jsonb[]
    register(3907, parseStringArray); // numrange[]
    register(2951, parseStringArray); // uuid[]
    register(791, parseStringArray); // money[]
    register(1183, parseStringArray); // time[]
    register(1270, parseStringArray); // timetz[]
};
module.exports = {
    init: init
};
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-types/lib/binaryParsers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var parseInt64 = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-int8/index.js [app-client] (ecmascript)");
var parseBits = function(data, bits, offset, invert, callback) {
    offset = offset || 0;
    invert = invert || false;
    callback = callback || function(lastValue, newValue, bits) {
        return lastValue * Math.pow(2, bits) + newValue;
    };
    var offsetBytes = offset >> 3;
    var inv = function(value) {
        if (invert) {
            return ~value & 0xff;
        }
        return value;
    };
    // read first (maybe partial) byte
    var mask = 0xff;
    var firstBits = 8 - offset % 8;
    if (bits < firstBits) {
        mask = 0xff << 8 - bits & 0xff;
        firstBits = bits;
    }
    if (offset) {
        mask = mask >> offset % 8;
    }
    var result = 0;
    if (offset % 8 + bits >= 8) {
        result = callback(0, inv(data[offsetBytes]) & mask, firstBits);
    }
    // read bytes
    var bytes = bits + offset >> 3;
    for(var i = offsetBytes + 1; i < bytes; i++){
        result = callback(result, inv(data[i]), 8);
    }
    // bits to read, that are not a complete byte
    var lastBits = (bits + offset) % 8;
    if (lastBits > 0) {
        result = callback(result, inv(data[bytes]) >> 8 - lastBits, lastBits);
    }
    return result;
};
var parseFloatFromBits = function(data, precisionBits, exponentBits) {
    var bias = Math.pow(2, exponentBits - 1) - 1;
    var sign = parseBits(data, 1);
    var exponent = parseBits(data, exponentBits, 1);
    if (exponent === 0) {
        return 0;
    }
    // parse mantissa
    var precisionBitsCounter = 1;
    var parsePrecisionBits = function(lastValue, newValue, bits) {
        if (lastValue === 0) {
            lastValue = 1;
        }
        for(var i = 1; i <= bits; i++){
            precisionBitsCounter /= 2;
            if ((newValue & 0x1 << bits - i) > 0) {
                lastValue += precisionBitsCounter;
            }
        }
        return lastValue;
    };
    var mantissa = parseBits(data, precisionBits, exponentBits + 1, false, parsePrecisionBits);
    // special cases
    if (exponent == Math.pow(2, exponentBits + 1) - 1) {
        if (mantissa === 0) {
            return sign === 0 ? Infinity : -Infinity;
        }
        return NaN;
    }
    // normale number
    return (sign === 0 ? 1 : -1) * Math.pow(2, exponent - bias) * mantissa;
};
var parseInt16 = function(value) {
    if (parseBits(value, 1) == 1) {
        return -1 * (parseBits(value, 15, 1, true) + 1);
    }
    return parseBits(value, 15, 1);
};
var parseInt32 = function(value) {
    if (parseBits(value, 1) == 1) {
        return -1 * (parseBits(value, 31, 1, true) + 1);
    }
    return parseBits(value, 31, 1);
};
var parseFloat32 = function(value) {
    return parseFloatFromBits(value, 23, 8);
};
var parseFloat64 = function(value) {
    return parseFloatFromBits(value, 52, 11);
};
var parseNumeric = function(value) {
    var sign = parseBits(value, 16, 32);
    if (sign == 0xc000) {
        return NaN;
    }
    var weight = Math.pow(10000, parseBits(value, 16, 16));
    var result = 0;
    var digits = [];
    var ndigits = parseBits(value, 16);
    for(var i = 0; i < ndigits; i++){
        result += parseBits(value, 16, 64 + 16 * i) * weight;
        weight /= 10000;
    }
    var scale = Math.pow(10, parseBits(value, 16, 48));
    return (sign === 0 ? 1 : -1) * Math.round(result * scale) / scale;
};
var parseDate = function(isUTC, value) {
    var sign = parseBits(value, 1);
    var rawValue = parseBits(value, 63, 1);
    // discard usecs and shift from 2000 to 1970
    var result = new Date((sign === 0 ? 1 : -1) * rawValue / 1000 + 946684800000);
    if (!isUTC) {
        result.setTime(result.getTime() + result.getTimezoneOffset() * 60000);
    }
    // add microseconds to the date
    result.usec = rawValue % 1000;
    result.getMicroSeconds = function() {
        return this.usec;
    };
    result.setMicroSeconds = function(value) {
        this.usec = value;
    };
    result.getUTCMicroSeconds = function() {
        return this.usec;
    };
    return result;
};
var parseArray = function(value) {
    var dim = parseBits(value, 32);
    var flags = parseBits(value, 32, 32);
    var elementType = parseBits(value, 32, 64);
    var offset = 96;
    var dims = [];
    for(var i = 0; i < dim; i++){
        // parse dimension
        dims[i] = parseBits(value, 32, offset);
        offset += 32;
        // ignore lower bounds
        offset += 32;
    }
    var parseElement = function(elementType) {
        // parse content length
        var length = parseBits(value, 32, offset);
        offset += 32;
        // parse null values
        if (length == 0xffffffff) {
            return null;
        }
        var result;
        if (elementType == 0x17 || elementType == 0x14) {
            // int/bigint
            result = parseBits(value, length * 8, offset);
            offset += length * 8;
            return result;
        } else if (elementType == 0x19) {
            // string
            result = value.toString(this.encoding, offset >> 3, (offset += length << 3) >> 3);
            return result;
        } else {
            console.log("ERROR: ElementType not implemented: " + elementType);
        }
    };
    var parse = function(dimension, elementType) {
        var array = [];
        var i;
        if (dimension.length > 1) {
            var count = dimension.shift();
            for(i = 0; i < count; i++){
                array[i] = parse(dimension, elementType);
            }
            dimension.unshift(count);
        } else {
            for(i = 0; i < dimension[0]; i++){
                array[i] = parseElement(elementType);
            }
        }
        return array;
    };
    return parse(dims, elementType);
};
var parseText = function(value) {
    return value.toString('utf8');
};
var parseBool = function(value) {
    if (value === null) return null;
    return parseBits(value, 8) > 0;
};
var init = function(register) {
    register(20, parseInt64);
    register(21, parseInt16);
    register(23, parseInt32);
    register(26, parseInt32);
    register(1700, parseNumeric);
    register(700, parseFloat32);
    register(701, parseFloat64);
    register(16, parseBool);
    register(1114, parseDate.bind(null, false));
    register(1184, parseDate.bind(null, true));
    register(1000, parseArray);
    register(1007, parseArray);
    register(1016, parseArray);
    register(1008, parseArray);
    register(1009, parseArray);
    register(25, parseText);
};
module.exports = {
    init: init
};
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-types/lib/builtins.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Following query was used to generate this file:

 SELECT json_object_agg(UPPER(PT.typname), PT.oid::int4 ORDER BY pt.oid)
 FROM pg_type PT
 WHERE typnamespace = (SELECT pgn.oid FROM pg_namespace pgn WHERE nspname = 'pg_catalog') -- Take only builting Postgres types with stable OID (extension types are not guaranted to be stable)
 AND typtype = 'b' -- Only basic types
 AND typelem = 0 -- Ignore aliases
 AND typisdefined -- Ignore undefined types
 */ module.exports = {
    BOOL: 16,
    BYTEA: 17,
    CHAR: 18,
    INT8: 20,
    INT2: 21,
    INT4: 23,
    REGPROC: 24,
    TEXT: 25,
    OID: 26,
    TID: 27,
    XID: 28,
    CID: 29,
    JSON: 114,
    XML: 142,
    PG_NODE_TREE: 194,
    SMGR: 210,
    PATH: 602,
    POLYGON: 604,
    CIDR: 650,
    FLOAT4: 700,
    FLOAT8: 701,
    ABSTIME: 702,
    RELTIME: 703,
    TINTERVAL: 704,
    CIRCLE: 718,
    MACADDR8: 774,
    MONEY: 790,
    MACADDR: 829,
    INET: 869,
    ACLITEM: 1033,
    BPCHAR: 1042,
    VARCHAR: 1043,
    DATE: 1082,
    TIME: 1083,
    TIMESTAMP: 1114,
    TIMESTAMPTZ: 1184,
    INTERVAL: 1186,
    TIMETZ: 1266,
    BIT: 1560,
    VARBIT: 1562,
    NUMERIC: 1700,
    REFCURSOR: 1790,
    REGPROCEDURE: 2202,
    REGOPER: 2203,
    REGOPERATOR: 2204,
    REGCLASS: 2205,
    REGTYPE: 2206,
    UUID: 2950,
    TXID_SNAPSHOT: 2970,
    PG_LSN: 3220,
    PG_NDISTINCT: 3361,
    PG_DEPENDENCIES: 3402,
    TSVECTOR: 3614,
    TSQUERY: 3615,
    GTSVECTOR: 3642,
    REGCONFIG: 3734,
    REGDICTIONARY: 3769,
    JSONB: 3802,
    REGNAMESPACE: 4089,
    REGROLE: 4096
};
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-types/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var textParsers = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-types/lib/textParsers.js [app-client] (ecmascript)");
var binaryParsers = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-types/lib/binaryParsers.js [app-client] (ecmascript)");
var arrayParser = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-types/lib/arrayParser.js [app-client] (ecmascript)");
var builtinTypes = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-types/lib/builtins.js [app-client] (ecmascript)");
exports.getTypeParser = getTypeParser;
exports.setTypeParser = setTypeParser;
exports.arrayParser = arrayParser;
exports.builtins = builtinTypes;
var typeParsers = {
    text: {},
    binary: {}
};
//the empty parse function
function noParse(val) {
    return String(val);
}
;
//returns a function used to convert a specific type (specified by
//oid) into a result javascript type
//note: the oid can be obtained via the following sql query:
//SELECT oid FROM pg_type WHERE typname = 'TYPE_NAME_HERE';
function getTypeParser(oid, format) {
    format = format || 'text';
    if (!typeParsers[format]) {
        return noParse;
    }
    return typeParsers[format][oid] || noParse;
}
;
function setTypeParser(oid, format, parseFn) {
    if (typeof format == 'function') {
        parseFn = format;
        format = 'text';
    }
    typeParsers[format][oid] = parseFn;
}
;
textParsers.init(function(oid, converter) {
    typeParsers.text[oid] = converter;
});
binaryParsers.init(function(oid, converter) {
    typeParsers.binary[oid] = converter;
});
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/postgres-date/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var DATE_TIME = /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/;
var DATE = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/;
var TIME_ZONE = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/;
var INFINITY = /^-?infinity$/;
module.exports = function parseDate(isoDate) {
    if (INFINITY.test(isoDate)) {
        // Capitalize to Infinity before passing to Number
        return Number(isoDate.replace('i', 'I'));
    }
    var matches = DATE_TIME.exec(isoDate);
    if (!matches) {
        // Force YYYY-MM-DD dates to be parsed as local time
        return getDate(isoDate) || null;
    }
    var isBC = !!matches[8];
    var year = parseInt(matches[1], 10);
    if (isBC) {
        year = bcYearToNegativeYear(year);
    }
    var month = parseInt(matches[2], 10) - 1;
    var day = matches[3];
    var hour = parseInt(matches[4], 10);
    var minute = parseInt(matches[5], 10);
    var second = parseInt(matches[6], 10);
    var ms = matches[7];
    ms = ms ? 1000 * parseFloat(ms) : 0;
    var date;
    var offset = timeZoneOffset(isoDate);
    if (offset != null) {
        date = new Date(Date.UTC(year, month, day, hour, minute, second, ms));
        // Account for years from 0 to 99 being interpreted as 1900-1999
        // by Date.UTC / the multi-argument form of the Date constructor
        if (is0To99(year)) {
            date.setUTCFullYear(year);
        }
        if (offset !== 0) {
            date.setTime(date.getTime() - offset);
        }
    } else {
        date = new Date(year, month, day, hour, minute, second, ms);
        if (is0To99(year)) {
            date.setFullYear(year);
        }
    }
    return date;
};
function getDate(isoDate) {
    var matches = DATE.exec(isoDate);
    if (!matches) {
        return;
    }
    var year = parseInt(matches[1], 10);
    var isBC = !!matches[4];
    if (isBC) {
        year = bcYearToNegativeYear(year);
    }
    var month = parseInt(matches[2], 10) - 1;
    var day = matches[3];
    // YYYY-MM-DD will be parsed as local time
    var date = new Date(year, month, day);
    if (is0To99(year)) {
        date.setFullYear(year);
    }
    return date;
}
// match timezones:
// Z (UTC)
// -05
// +06:30
function timeZoneOffset(isoDate) {
    if (isoDate.endsWith('+00')) {
        return 0;
    }
    var zone = TIME_ZONE.exec(isoDate.split(' ')[1]);
    if (!zone) return;
    var type = zone[1];
    if (type === 'Z') {
        return 0;
    }
    var sign = type === '-' ? -1 : 1;
    var offset = parseInt(zone[2], 10) * 3600 + parseInt(zone[3] || 0, 10) * 60 + parseInt(zone[4] || 0, 10);
    return offset * sign * 1000;
}
function bcYearToNegativeYear(year) {
    // Account for numerical difference between representations of BC years
    // See: https://github.com/bendrucker/postgres-date/issues/5
    return -(year - 1);
}
function is0To99(num) {
    return num >= 0 && num < 100;
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/xtend/mutable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function extend(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/postgres-interval/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var extend = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/xtend/mutable.js [app-client] (ecmascript)");
module.exports = PostgresInterval;
function PostgresInterval(raw) {
    if (!(this instanceof PostgresInterval)) {
        return new PostgresInterval(raw);
    }
    extend(this, parse(raw));
}
var properties = [
    'seconds',
    'minutes',
    'hours',
    'days',
    'months',
    'years'
];
PostgresInterval.prototype.toPostgres = function() {
    var filtered = properties.filter(this.hasOwnProperty, this);
    // In addition to `properties`, we need to account for fractions of seconds.
    if (this.milliseconds && filtered.indexOf('seconds') < 0) {
        filtered.push('seconds');
    }
    if (filtered.length === 0) return '0';
    return filtered.map(function(property) {
        var value = this[property] || 0;
        // Account for fractional part of seconds,
        // remove trailing zeroes.
        if (property === 'seconds' && this.milliseconds) {
            value = (value + this.milliseconds / 1000).toFixed(6).replace(/\.?0+$/, '');
        }
        return value + ' ' + property;
    }, this).join(' ');
};
var propertiesISOEquivalent = {
    years: 'Y',
    months: 'M',
    days: 'D',
    hours: 'H',
    minutes: 'M',
    seconds: 'S'
};
var dateProperties = [
    'years',
    'months',
    'days'
];
var timeProperties = [
    'hours',
    'minutes',
    'seconds'
];
// according to ISO 8601
PostgresInterval.prototype.toISOString = PostgresInterval.prototype.toISO = function() {
    var datePart = dateProperties.map(buildProperty, this).join('');
    var timePart = timeProperties.map(buildProperty, this).join('');
    return 'P' + datePart + 'T' + timePart;
    //TURBOPACK unreachable
    ;
    function buildProperty(property) {
        var value = this[property] || 0;
        // Account for fractional part of seconds,
        // remove trailing zeroes.
        if (property === 'seconds' && this.milliseconds) {
            value = (value + this.milliseconds / 1000).toFixed(6).replace(/0+$/, '');
        }
        return value + propertiesISOEquivalent[property];
    }
};
var NUMBER = '([+-]?\\d+)';
var YEAR = NUMBER + '\\s+years?';
var MONTH = NUMBER + '\\s+mons?';
var DAY = NUMBER + '\\s+days?';
var TIME = '([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?';
var INTERVAL = new RegExp([
    YEAR,
    MONTH,
    DAY,
    TIME
].map(function(regexString) {
    return '(' + regexString + ')?';
}).join('\\s*'));
// Positions of values in regex match
var positions = {
    years: 2,
    months: 4,
    days: 6,
    hours: 9,
    minutes: 10,
    seconds: 11,
    milliseconds: 12
};
// We can use negative time
var negatives = [
    'hours',
    'minutes',
    'seconds',
    'milliseconds'
];
function parseMilliseconds(fraction) {
    // add omitted zeroes
    var microseconds = fraction + '000000'.slice(fraction.length);
    return parseInt(microseconds, 10) / 1000;
}
function parse(interval) {
    if (!interval) return {};
    var matches = INTERVAL.exec(interval);
    var isNegative = matches[8] === '-';
    return Object.keys(positions).reduce(function(parsed, property) {
        var position = positions[property];
        var value = matches[position];
        // no empty string
        if (!value) return parsed;
        // milliseconds are actually microseconds (up to 6 digits)
        // with omitted trailing zeroes.
        value = property === 'milliseconds' ? parseMilliseconds(value) : parseInt(value, 10);
        // no zeros
        if (!value) return parsed;
        if (isNegative && ~negatives.indexOf(property)) {
            value *= -1;
        }
        parsed[property] = value;
        return parsed;
    }, {});
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/postgres-bytea/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
'use strict';
var bufferFrom = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"];
module.exports = function parseBytea(input) {
    if (/^\\x/.test(input)) {
        // new 'hex' style response (pg >9.0)
        return bufferFrom(input.substr(2), 'hex');
    }
    var output = '';
    var i = 0;
    while(i < input.length){
        if (input[i] !== '\\') {
            output += input[i];
            ++i;
        } else {
            if (/[0-7]{3}/.test(input.substr(i + 1, 3))) {
                output += String.fromCharCode(parseInt(input.substr(i + 1, 3), 8));
                i += 4;
            } else {
                var backslashes = 1;
                while(i + backslashes < input.length && input[i + backslashes] === '\\'){
                    backslashes++;
                }
                for(var k = 0; k < Math.floor(backslashes / 2); ++k){
                    output += '\\';
                }
                i += Math.floor(backslashes / 2) * 2;
            }
        }
    }
    return bufferFrom(output, 'binary');
};
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-int8/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// selected so (BASE - 1) * 0x100000000 + 0xffffffff is a safe integer
var BASE = 1000000;
function readInt8(buffer) {
    var high = buffer.readInt32BE(0);
    var low = buffer.readUInt32BE(4);
    var sign = '';
    if (high < 0) {
        high = ~high + (low === 0);
        low = ~low + 1 >>> 0;
        sign = '-';
    }
    var result = '';
    var carry;
    var t;
    var digits;
    var pad;
    var l;
    var i;
    {
        carry = high % BASE;
        high = high / BASE >>> 0;
        t = 0x100000000 * carry + low;
        low = t / BASE >>> 0;
        digits = '' + (t - BASE * low);
        if (low === 0 && high === 0) {
            return sign + digits + result;
        }
        pad = '';
        l = 6 - digits.length;
        for(i = 0; i < l; i++){
            pad += '0';
        }
        result = pad + digits + result;
    }
    {
        carry = high % BASE;
        high = high / BASE >>> 0;
        t = 0x100000000 * carry + low;
        low = t / BASE >>> 0;
        digits = '' + (t - BASE * low);
        if (low === 0 && high === 0) {
            return sign + digits + result;
        }
        pad = '';
        l = 6 - digits.length;
        for(i = 0; i < l; i++){
            pad += '0';
        }
        result = pad + digits + result;
    }
    {
        carry = high % BASE;
        high = high / BASE >>> 0;
        t = 0x100000000 * carry + low;
        low = t / BASE >>> 0;
        digits = '' + (t - BASE * low);
        if (low === 0 && high === 0) {
            return sign + digits + result;
        }
        pad = '';
        l = 6 - digits.length;
        for(i = 0; i < l; i++){
            pad += '0';
        }
        result = pad + digits + result;
    }
    {
        carry = high % BASE;
        t = 0x100000000 * carry + low;
        digits = '' + t % BASE;
        return sign + digits + result;
    }
}
module.exports = readInt8;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/defaults.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
let user;
try {
    user = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.USER;
} catch  {
// ignore, e.g., Deno without --allow-env
}
module.exports = {
    // database host. defaults to localhost
    host: 'localhost',
    // database user's name
    user,
    // name of database to connect
    database: undefined,
    // database user's password
    password: null,
    // a Postgres connection string to be used instead of setting individual connection items
    // NOTE:  Setting this value will cause it to override any other value (such as database or user) defined
    // in the defaults object.
    connectionString: undefined,
    // database port
    port: 5432,
    // number of rows to return at a time from a prepared statement's
    // portal. 0 will return all rows at once
    rows: 0,
    // binary result mode
    binary: false,
    // Connection pool options - see https://github.com/brianc/node-pg-pool
    // number of connections to use in connection pool
    // 0 will disable connection pooling
    max: 10,
    // max milliseconds a client can go unused before it is removed
    // from the pool and destroyed
    idleTimeoutMillis: 30000,
    client_encoding: '',
    ssl: false,
    application_name: undefined,
    fallback_application_name: undefined,
    options: undefined,
    parseInputDatesAsUTC: false,
    // max milliseconds any query using this connection will execute for before timing out in error.
    // false=unlimited
    statement_timeout: false,
    // Abort any statement that waits longer than the specified duration in milliseconds while attempting to acquire a lock.
    // false=unlimited
    lock_timeout: false,
    // Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds
    // false=unlimited
    idle_in_transaction_session_timeout: false,
    // max milliseconds to wait for query to complete (client side)
    query_timeout: false,
    connect_timeout: 0,
    keepalives: 1,
    keepalives_idle: 0
};
const pgTypes = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-types/index.js [app-client] (ecmascript)");
// save default parsers
const parseBigInteger = pgTypes.getTypeParser(20, 'text');
const parseBigIntegerArray = pgTypes.getTypeParser(1016, 'text');
// parse int8 so you can get your count values as actual numbers
module.exports.__defineSetter__('parseInt8', function(val) {
    pgTypes.setTypeParser(20, 'text', val ? pgTypes.getTypeParser(23, 'text') : parseBigInteger);
    pgTypes.setTypeParser(1016, 'text', val ? pgTypes.getTypeParser(1007, 'text') : parseBigIntegerArray);
});
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
'use strict';
const defaults = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/defaults.js [app-client] (ecmascript)");
const util = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)");
const { isDate } = util.types || util // Node 8 doesn't have `util.types`
;
function escapeElement(elementRepresentation) {
    const escaped = elementRepresentation.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return '"' + escaped + '"';
}
// convert a JS array to a postgres array literal
// uses comma separator so won't work for types like box that use
// a different array separator.
function arrayString(val) {
    let result = '{';
    for(let i = 0; i < val.length; i++){
        if (i > 0) {
            result = result + ',';
        }
        if (val[i] === null || typeof val[i] === 'undefined') {
            result = result + 'NULL';
        } else if (Array.isArray(val[i])) {
            result = result + arrayString(val[i]);
        } else if (ArrayBuffer.isView(val[i])) {
            let item = val[i];
            if (!(item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"])) {
                const buf = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(item.buffer, item.byteOffset, item.byteLength);
                if (buf.length === item.byteLength) {
                    item = buf;
                } else {
                    item = buf.slice(item.byteOffset, item.byteOffset + item.byteLength);
                }
            }
            result += '\\\\x' + item.toString('hex');
        } else {
            result += escapeElement(prepareValue(val[i]));
        }
    }
    result = result + '}';
    return result;
}
// converts values from javascript types
// to their 'raw' counterparts for use as a postgres parameter
// note: you can override this function to provide your own conversion mechanism
// for complex types, etc...
const prepareValue = function(val, seen) {
    // null and undefined are both null for postgres
    if (val == null) {
        return null;
    }
    if (typeof val === 'object') {
        if (val instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"]) {
            return val;
        }
        if (ArrayBuffer.isView(val)) {
            const buf = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(val.buffer, val.byteOffset, val.byteLength);
            if (buf.length === val.byteLength) {
                return buf;
            }
            return buf.slice(val.byteOffset, val.byteOffset + val.byteLength) // Node.js v4 does not support those Buffer.from params
            ;
        }
        if (isDate(val)) {
            if (defaults.parseInputDatesAsUTC) {
                return dateToStringUTC(val);
            } else {
                return dateToString(val);
            }
        }
        if (Array.isArray(val)) {
            return arrayString(val);
        }
        return prepareObject(val, seen);
    }
    return val.toString();
};
function prepareObject(val, seen) {
    if (val && typeof val.toPostgres === 'function') {
        seen = seen || [];
        if (seen.indexOf(val) !== -1) {
            throw new Error('circular reference detected while preparing "' + val + '" for query');
        }
        seen.push(val);
        return prepareValue(val.toPostgres(prepareValue), seen);
    }
    return JSON.stringify(val);
}
function dateToString(date) {
    let offset = -date.getTimezoneOffset();
    let year = date.getFullYear();
    const isBCYear = year < 1;
    if (isBCYear) year = Math.abs(year) + 1; // negative years are 1 off their BC representation
    let ret = String(year).padStart(4, '0') + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0') + 'T' + String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0') + ':' + String(date.getSeconds()).padStart(2, '0') + '.' + String(date.getMilliseconds()).padStart(3, '0');
    if (offset < 0) {
        ret += '-';
        offset *= -1;
    } else {
        ret += '+';
    }
    ret += String(Math.floor(offset / 60)).padStart(2, '0') + ':' + String(offset % 60).padStart(2, '0');
    if (isBCYear) ret += ' BC';
    return ret;
}
function dateToStringUTC(date) {
    let year = date.getUTCFullYear();
    const isBCYear = year < 1;
    if (isBCYear) year = Math.abs(year) + 1; // negative years are 1 off their BC representation
    let ret = String(year).padStart(4, '0') + '-' + String(date.getUTCMonth() + 1).padStart(2, '0') + '-' + String(date.getUTCDate()).padStart(2, '0') + 'T' + String(date.getUTCHours()).padStart(2, '0') + ':' + String(date.getUTCMinutes()).padStart(2, '0') + ':' + String(date.getUTCSeconds()).padStart(2, '0') + '.' + String(date.getUTCMilliseconds()).padStart(3, '0');
    ret += '+00:00';
    if (isBCYear) ret += ' BC';
    return ret;
}
function normalizeQueryConfig(config, values, callback) {
    // can take in strings or config objects
    config = typeof config === 'string' ? {
        text: config
    } : config;
    if (values) {
        if (typeof values === 'function') {
            config.callback = values;
        } else {
            config.values = values;
        }
    }
    if (callback) {
        config.callback = callback;
    }
    return config;
}
// Ported from PostgreSQL 9.2.4 source code in src/interfaces/libpq/fe-exec.c
const escapeIdentifier = function(str) {
    return '"' + str.replace(/"/g, '""') + '"';
};
const escapeLiteral = function(str) {
    let hasBackslash = false;
    let escaped = "'";
    if (str == null) {
        return "''";
    }
    if (typeof str !== 'string') {
        return "''";
    }
    for(let i = 0; i < str.length; i++){
        const c = str[i];
        if (c === "'") {
            escaped += c + c;
        } else if (c === '\\') {
            escaped += c + c;
            hasBackslash = true;
        } else {
            escaped += c;
        }
    }
    escaped += "'";
    if (hasBackslash === true) {
        escaped = ' E' + escaped;
    }
    return escaped;
};
module.exports = {
    prepareValue: function prepareValueWrapper(value) {
        // this ensures that extra arguments do not get passed into prepareValue
        // by accident, eg: from calling values.map(utils.prepareValue)
        return prepareValue(value);
    },
    normalizeQueryConfig,
    escapeIdentifier,
    escapeLiteral
};
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/crypto/utils-webcrypto.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
const nodeCrypto = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript)");
module.exports = {
    postgresMd5PasswordHash,
    randomBytes,
    deriveKey,
    sha256,
    hashByName,
    hmacSha256,
    md5
};
/**
 * The Web Crypto API - grabbed from the Node.js library or the global
 * @type Crypto
 */ // eslint-disable-next-line no-undef
const webCrypto = nodeCrypto.webcrypto || globalThis.crypto;
/**
 * The SubtleCrypto API for low level crypto operations.
 * @type SubtleCrypto
 */ const subtleCrypto = webCrypto.subtle;
const textEncoder = new TextEncoder();
/**
 *
 * @param {*} length
 * @returns
 */ function randomBytes(length) {
    return webCrypto.getRandomValues(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].alloc(length));
}
async function md5(string) {
    try {
        return nodeCrypto.createHash('md5').update(string, 'utf-8').digest('hex');
    } catch (e) {
        // `createHash()` failed so we are probably not in Node.js, use the WebCrypto API instead.
        // Note that the MD5 algorithm on WebCrypto is not available in Node.js.
        // This is why we cannot just use WebCrypto in all environments.
        const data = typeof string === 'string' ? textEncoder.encode(string) : string;
        const hash = await subtleCrypto.digest('MD5', data);
        return Array.from(new Uint8Array(hash)).map((b)=>b.toString(16).padStart(2, '0')).join('');
    }
}
// See AuthenticationMD5Password at https://www.postgresql.org/docs/current/static/protocol-flow.html
async function postgresMd5PasswordHash(user, password, salt) {
    const inner = await md5(password + user);
    const outer = await md5(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(inner),
        salt
    ]));
    return 'md5' + outer;
}
/**
 * Create a SHA-256 digest of the given data
 * @param {Buffer} data
 */ async function sha256(text) {
    return await subtleCrypto.digest('SHA-256', text);
}
async function hashByName(hashName, text) {
    return await subtleCrypto.digest(hashName, text);
}
/**
 * Sign the message with the given key
 * @param {ArrayBuffer} keyBuffer
 * @param {string} msg
 */ async function hmacSha256(keyBuffer, msg) {
    const key = await subtleCrypto.importKey('raw', keyBuffer, {
        name: 'HMAC',
        hash: 'SHA-256'
    }, false, [
        'sign'
    ]);
    return await subtleCrypto.sign('HMAC', key, textEncoder.encode(msg));
}
/**
 * Derive a key from the password and salt
 * @param {string} password
 * @param {Uint8Array} salt
 * @param {number} iterations
 */ async function deriveKey(password, salt, iterations) {
    const key = await subtleCrypto.importKey('raw', textEncoder.encode(password), 'PBKDF2', false, [
        'deriveBits'
    ]);
    const params = {
        name: 'PBKDF2',
        hash: 'SHA-256',
        salt: salt,
        iterations: iterations
    };
    return await subtleCrypto.deriveBits(params, key, 32 * 8, [
        'deriveBits'
    ]);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/crypto/utils-legacy.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
'use strict';
// This file contains crypto utility functions for versions of Node.js < 15.0.0,
// which does not support the WebCrypto.subtle API.
const nodeCrypto = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript)");
function md5(string) {
    return nodeCrypto.createHash('md5').update(string, 'utf-8').digest('hex');
}
// See AuthenticationMD5Password at https://www.postgresql.org/docs/current/static/protocol-flow.html
function postgresMd5PasswordHash(user, password, salt) {
    const inner = md5(password + user);
    const outer = md5(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(inner),
        salt
    ]));
    return 'md5' + outer;
}
function sha256(text) {
    return nodeCrypto.createHash('sha256').update(text).digest();
}
function hashByName(hashName, text) {
    hashName = hashName.replace(/(\D)-/, '$1'); // e.g. SHA-256 -> SHA256
    return nodeCrypto.createHash(hashName).update(text).digest();
}
function hmacSha256(key, msg) {
    return nodeCrypto.createHmac('sha256', key).update(msg).digest();
}
async function deriveKey(password, salt, iterations) {
    return nodeCrypto.pbkdf2Sync(password, salt, iterations, 32, 'sha256');
}
module.exports = {
    postgresMd5PasswordHash,
    randomBytes: nodeCrypto.randomBytes,
    deriveKey,
    sha256,
    hashByName,
    hmacSha256,
    md5
};
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/crypto/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
const useLegacyCrypto = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node.split('.')[0]) < 15;
if (useLegacyCrypto) {
    // We are on an old version of Node.js that requires legacy crypto utilities.
    module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/crypto/utils-legacy.js [app-client] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/crypto/utils-webcrypto.js [app-client] (ecmascript)");
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/crypto/cert-signatures.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function x509Error(msg, cert) {
    return new Error('SASL channel binding: ' + msg + ' when parsing public certificate ' + cert.toString('base64'));
}
function readASN1Length(data, index) {
    let length = data[index++];
    if (length < 0x80) return {
        length,
        index
    };
    const lengthBytes = length & 0x7f;
    if (lengthBytes > 4) throw x509Error('bad length', data);
    length = 0;
    for(let i = 0; i < lengthBytes; i++){
        length = length << 8 | data[index++];
    }
    return {
        length,
        index
    };
}
function readASN1OID(data, index) {
    if (data[index++] !== 0x6) throw x509Error('non-OID data', data) // 6 = OID
    ;
    const { length: OIDLength, index: indexAfterOIDLength } = readASN1Length(data, index);
    index = indexAfterOIDLength;
    const lastIndex = index + OIDLength;
    const byte1 = data[index++];
    let oid = (byte1 / 40 >> 0) + '.' + byte1 % 40;
    while(index < lastIndex){
        // loop over numbers in OID
        let value = 0;
        while(index < lastIndex){
            // loop over bytes in number
            const nextByte = data[index++];
            value = value << 7 | nextByte & 0x7f;
            if (nextByte < 0x80) break;
        }
        oid += '.' + value;
    }
    return {
        oid,
        index
    };
}
function expectASN1Seq(data, index) {
    if (data[index++] !== 0x30) throw x509Error('non-sequence data', data) // 30 = Sequence
    ;
    return readASN1Length(data, index);
}
function signatureAlgorithmHashFromCertificate(data, index) {
    // read this thread: https://www.postgresql.org/message-id/17760-b6c61e752ec07060%40postgresql.org
    if (index === undefined) index = 0;
    index = expectASN1Seq(data, index).index;
    const { length: certInfoLength, index: indexAfterCertInfoLength } = expectASN1Seq(data, index);
    index = indexAfterCertInfoLength + certInfoLength; // skip over certificate info
    index = expectASN1Seq(data, index).index; // skip over signature length field
    const { oid, index: indexAfterOID } = readASN1OID(data, index);
    switch(oid){
        // RSA
        case '1.2.840.113549.1.1.4':
            return 'MD5';
        case '1.2.840.113549.1.1.5':
            return 'SHA-1';
        case '1.2.840.113549.1.1.11':
            return 'SHA-256';
        case '1.2.840.113549.1.1.12':
            return 'SHA-384';
        case '1.2.840.113549.1.1.13':
            return 'SHA-512';
        case '1.2.840.113549.1.1.14':
            return 'SHA-224';
        case '1.2.840.113549.1.1.15':
            return 'SHA512-224';
        case '1.2.840.113549.1.1.16':
            return 'SHA512-256';
        // ECDSA
        case '1.2.840.10045.4.1':
            return 'SHA-1';
        case '1.2.840.10045.4.3.1':
            return 'SHA-224';
        case '1.2.840.10045.4.3.2':
            return 'SHA-256';
        case '1.2.840.10045.4.3.3':
            return 'SHA-384';
        case '1.2.840.10045.4.3.4':
            return 'SHA-512';
        // RSASSA-PSS: hash is indicated separately
        case '1.2.840.113549.1.1.10':
            {
                index = indexAfterOID;
                index = expectASN1Seq(data, index).index;
                if (data[index++] !== 0xa0) throw x509Error('non-tag data', data) // a0 = constructed tag 0
                ;
                index = readASN1Length(data, index).index; // skip over tag length field
                index = expectASN1Seq(data, index).index; // skip over sequence length field
                const { oid: hashOID } = readASN1OID(data, index);
                switch(hashOID){
                    // standalone hash OIDs
                    case '1.2.840.113549.2.5':
                        return 'MD5';
                    case '1.3.14.3.2.26':
                        return 'SHA-1';
                    case '2.16.840.1.101.3.4.2.1':
                        return 'SHA-256';
                    case '2.16.840.1.101.3.4.2.2':
                        return 'SHA-384';
                    case '2.16.840.1.101.3.4.2.3':
                        return 'SHA-512';
                }
                throw x509Error('unknown hash OID ' + hashOID, data);
            }
        // Ed25519 -- see https: return//github.com/openssl/openssl/issues/15477
        case '1.3.101.110':
        case '1.3.101.112':
            return 'SHA-512';
        // Ed448 -- still not in pg 17.2 (if supported, digest would be SHAKE256 x 64 bytes)
        case '1.3.101.111':
        case '1.3.101.113':
            throw x509Error('Ed448 certificate channel binding is not currently supported by Postgres');
    }
    throw x509Error('unknown OID ' + oid, data);
}
module.exports = {
    signatureAlgorithmHashFromCertificate
};
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/crypto/sasl.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
'use strict';
const crypto = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/crypto/utils.js [app-client] (ecmascript)");
const { signatureAlgorithmHashFromCertificate } = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/crypto/cert-signatures.js [app-client] (ecmascript)");
function startSession(mechanisms, stream) {
    const candidates = [
        'SCRAM-SHA-256'
    ];
    if (stream) candidates.unshift('SCRAM-SHA-256-PLUS'); // higher-priority, so placed first
    const mechanism = candidates.find((candidate)=>mechanisms.includes(candidate));
    if (!mechanism) {
        throw new Error('SASL: Only mechanism(s) ' + candidates.join(' and ') + ' are supported');
    }
    if (mechanism === 'SCRAM-SHA-256-PLUS' && typeof stream.getPeerCertificate !== 'function') {
        // this should never happen if we are really talking to a Postgres server
        throw new Error('SASL: Mechanism SCRAM-SHA-256-PLUS requires a certificate');
    }
    const clientNonce = crypto.randomBytes(18).toString('base64');
    const gs2Header = mechanism === 'SCRAM-SHA-256-PLUS' ? 'p=tls-server-end-point' : stream ? 'y' : 'n';
    return {
        mechanism,
        clientNonce,
        response: gs2Header + ',,n=*,r=' + clientNonce,
        message: 'SASLInitialResponse'
    };
}
async function continueSession(session, password, serverData, stream) {
    if (session.message !== 'SASLInitialResponse') {
        throw new Error('SASL: Last message was not SASLInitialResponse');
    }
    if (typeof password !== 'string') {
        throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string');
    }
    if (password === '') {
        throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a non-empty string');
    }
    if (typeof serverData !== 'string') {
        throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string');
    }
    const sv = parseServerFirstMessage(serverData);
    if (!sv.nonce.startsWith(session.clientNonce)) {
        throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce');
    } else if (sv.nonce.length === session.clientNonce.length) {
        throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short');
    }
    const clientFirstMessageBare = 'n=*,r=' + session.clientNonce;
    const serverFirstMessage = 'r=' + sv.nonce + ',s=' + sv.salt + ',i=' + sv.iteration;
    // without channel binding:
    let channelBinding = stream ? 'eSws' : 'biws' // 'y,,' or 'n,,', base64-encoded
    ;
    // override if channel binding is in use:
    if (session.mechanism === 'SCRAM-SHA-256-PLUS') {
        const peerCert = stream.getPeerCertificate().raw;
        let hashName = signatureAlgorithmHashFromCertificate(peerCert);
        if (hashName === 'MD5' || hashName === 'SHA-1') hashName = 'SHA-256';
        const certHash = await crypto.hashByName(hashName, peerCert);
        const bindingData = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from('p=tls-server-end-point,,'),
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(certHash)
        ]);
        channelBinding = bindingData.toString('base64');
    }
    const clientFinalMessageWithoutProof = 'c=' + channelBinding + ',r=' + sv.nonce;
    const authMessage = clientFirstMessageBare + ',' + serverFirstMessage + ',' + clientFinalMessageWithoutProof;
    const saltBytes = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(sv.salt, 'base64');
    const saltedPassword = await crypto.deriveKey(password, saltBytes, sv.iteration);
    const clientKey = await crypto.hmacSha256(saltedPassword, 'Client Key');
    const storedKey = await crypto.sha256(clientKey);
    const clientSignature = await crypto.hmacSha256(storedKey, authMessage);
    const clientProof = xorBuffers(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(clientKey), __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(clientSignature)).toString('base64');
    const serverKey = await crypto.hmacSha256(saltedPassword, 'Server Key');
    const serverSignatureBytes = await crypto.hmacSha256(serverKey, authMessage);
    session.message = 'SASLResponse';
    session.serverSignature = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(serverSignatureBytes).toString('base64');
    session.response = clientFinalMessageWithoutProof + ',p=' + clientProof;
}
function finalizeSession(session, serverData) {
    if (session.message !== 'SASLResponse') {
        throw new Error('SASL: Last message was not SASLResponse');
    }
    if (typeof serverData !== 'string') {
        throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string');
    }
    const { serverSignature } = parseServerFinalMessage(serverData);
    if (serverSignature !== session.serverSignature) {
        throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match');
    }
}
/**
 * printable       = %x21-2B / %x2D-7E
 *                   ;; Printable ASCII except ",".
 *                   ;; Note that any "printable" is also
 *                   ;; a valid "value".
 */ function isPrintableChars(text) {
    if (typeof text !== 'string') {
        throw new TypeError('SASL: text must be a string');
    }
    return text.split('').map((_, i)=>text.charCodeAt(i)).every((c)=>c >= 0x21 && c <= 0x2b || c >= 0x2d && c <= 0x7e);
}
/**
 * base64-char     = ALPHA / DIGIT / "/" / "+"
 *
 * base64-4        = 4base64-char
 *
 * base64-3        = 3base64-char "="
 *
 * base64-2        = 2base64-char "=="
 *
 * base64          = *base64-4 [base64-3 / base64-2]
 */ function isBase64(text) {
    return /^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(text);
}
function parseAttributePairs(text) {
    if (typeof text !== 'string') {
        throw new TypeError('SASL: attribute pairs text must be a string');
    }
    return new Map(text.split(',').map((attrValue)=>{
        if (!/^.=/.test(attrValue)) {
            throw new Error('SASL: Invalid attribute pair entry');
        }
        const name = attrValue[0];
        const value = attrValue.substring(2);
        return [
            name,
            value
        ];
    }));
}
function parseServerFirstMessage(data) {
    const attrPairs = parseAttributePairs(data);
    const nonce = attrPairs.get('r');
    if (!nonce) {
        throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing');
    } else if (!isPrintableChars(nonce)) {
        throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce must only contain printable characters');
    }
    const salt = attrPairs.get('s');
    if (!salt) {
        throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing');
    } else if (!isBase64(salt)) {
        throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64');
    }
    const iterationText = attrPairs.get('i');
    if (!iterationText) {
        throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing');
    } else if (!/^[1-9][0-9]*$/.test(iterationText)) {
        throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration count');
    }
    const iteration = parseInt(iterationText, 10);
    return {
        nonce,
        salt,
        iteration
    };
}
function parseServerFinalMessage(serverData) {
    const attrPairs = parseAttributePairs(serverData);
    const serverSignature = attrPairs.get('v');
    if (!serverSignature) {
        throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing');
    } else if (!isBase64(serverSignature)) {
        throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64');
    }
    return {
        serverSignature
    };
}
function xorBuffers(a, b) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(a)) {
        throw new TypeError('first argument must be a Buffer');
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(b)) {
        throw new TypeError('second argument must be a Buffer');
    }
    if (a.length !== b.length) {
        throw new Error('Buffer lengths must match');
    }
    if (a.length === 0) {
        throw new Error('Buffers cannot be empty');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(a.map((_, i)=>a[i] ^ b[i]));
}
module.exports = {
    startSession,
    continueSession,
    finalizeSession
};
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/type-overrides.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-types/index.js [app-client] (ecmascript)");
function TypeOverrides(userTypes) {
    this._types = userTypes || types;
    this.text = {};
    this.binary = {};
}
TypeOverrides.prototype.getOverrides = function(format) {
    switch(format){
        case 'text':
            return this.text;
        case 'binary':
            return this.binary;
        default:
            return {};
    }
};
TypeOverrides.prototype.setTypeParser = function(oid, format, parseFn) {
    if (typeof format === 'function') {
        parseFn = format;
        format = 'text';
    }
    this.getOverrides(format)[oid] = parseFn;
};
TypeOverrides.prototype.getTypeParser = function(oid, format) {
    format = format || 'text';
    return this.getOverrides(format)[oid] || this._types.getTypeParser(oid, format);
};
module.exports = TypeOverrides;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/connection-parameters.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
const dns = (()=>{
    const e = new Error("Cannot find module 'dns'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const defaults = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/defaults.js [app-client] (ecmascript)");
const parse = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-connection-string/index.js [app-client] (ecmascript)").parse // parses a connection string
;
const val = function(key, config, envVar) {
    if (config[key]) {
        return config[key];
    }
    if (envVar === undefined) {
        envVar = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['PG' + key.toUpperCase()];
    } else if (envVar === false) {
    // do nothing ... use false
    } else {
        envVar = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[envVar];
    }
    return envVar || defaults[key];
};
const readSSLConfigFromEnvironment = function() {
    switch(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.PGSSLMODE){
        case 'disable':
            return false;
        case 'prefer':
        case 'require':
        case 'verify-ca':
        case 'verify-full':
            return true;
        case 'no-verify':
            return {
                rejectUnauthorized: false
            };
    }
    return defaults.ssl;
};
// Convert arg to a string, surround in single quotes, and escape single quotes and backslashes
const quoteParamValue = function(value) {
    return "'" + ('' + value).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
};
const add = function(params, config, paramName) {
    const value = config[paramName];
    if (value !== undefined && value !== null) {
        params.push(paramName + '=' + quoteParamValue(value));
    }
};
class ConnectionParameters {
    constructor(config){
        // if a string is passed, it is a raw connection string so we parse it into a config
        config = typeof config === 'string' ? parse(config) : config || {};
        // if the config has a connectionString defined, parse IT into the config we use
        // this will override other default values with what is stored in connectionString
        if (config.connectionString) {
            config = Object.assign({}, config, parse(config.connectionString));
        }
        this.user = val('user', config);
        this.database = val('database', config);
        if (this.database === undefined) {
            this.database = this.user;
        }
        this.port = parseInt(val('port', config), 10);
        this.host = val('host', config);
        // "hiding" the password so it doesn't show up in stack traces
        // or if the client is console.logged
        Object.defineProperty(this, 'password', {
            configurable: true,
            enumerable: false,
            writable: true,
            value: val('password', config)
        });
        this.binary = val('binary', config);
        this.options = val('options', config);
        this.ssl = typeof config.ssl === 'undefined' ? readSSLConfigFromEnvironment() : config.ssl;
        if (typeof this.ssl === 'string') {
            if (this.ssl === 'true') {
                this.ssl = true;
            }
        }
        // support passing in ssl=no-verify via connection string
        if (this.ssl === 'no-verify') {
            this.ssl = {
                rejectUnauthorized: false
            };
        }
        if (this.ssl && this.ssl.key) {
            Object.defineProperty(this.ssl, 'key', {
                enumerable: false
            });
        }
        this.client_encoding = val('client_encoding', config);
        this.replication = val('replication', config);
        // a domain socket begins with '/'
        this.isDomainSocket = !(this.host || '').indexOf('/');
        this.application_name = val('application_name', config, 'PGAPPNAME');
        this.fallback_application_name = val('fallback_application_name', config, false);
        this.statement_timeout = val('statement_timeout', config, false);
        this.lock_timeout = val('lock_timeout', config, false);
        this.idle_in_transaction_session_timeout = val('idle_in_transaction_session_timeout', config, false);
        this.query_timeout = val('query_timeout', config, false);
        if (config.connectionTimeoutMillis === undefined) {
            this.connect_timeout = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.PGCONNECT_TIMEOUT || 0;
        } else {
            this.connect_timeout = Math.floor(config.connectionTimeoutMillis / 1000);
        }
        if (config.keepAlive === false) {
            this.keepalives = 0;
        } else if (config.keepAlive === true) {
            this.keepalives = 1;
        }
        if (typeof config.keepAliveInitialDelayMillis === 'number') {
            this.keepalives_idle = Math.floor(config.keepAliveInitialDelayMillis / 1000);
        }
    }
    getLibpqConnectionString(cb) {
        const params = [];
        add(params, this, 'user');
        add(params, this, 'password');
        add(params, this, 'port');
        add(params, this, 'application_name');
        add(params, this, 'fallback_application_name');
        add(params, this, 'connect_timeout');
        add(params, this, 'options');
        const ssl = typeof this.ssl === 'object' ? this.ssl : this.ssl ? {
            sslmode: this.ssl
        } : {};
        add(params, ssl, 'sslmode');
        add(params, ssl, 'sslca');
        add(params, ssl, 'sslkey');
        add(params, ssl, 'sslcert');
        add(params, ssl, 'sslrootcert');
        if (this.database) {
            params.push('dbname=' + quoteParamValue(this.database));
        }
        if (this.replication) {
            params.push('replication=' + quoteParamValue(this.replication));
        }
        if (this.host) {
            params.push('host=' + quoteParamValue(this.host));
        }
        if (this.isDomainSocket) {
            return cb(null, params.join(' '));
        }
        if (this.client_encoding) {
            params.push('client_encoding=' + quoteParamValue(this.client_encoding));
        }
        dns.lookup(this.host, function(err, address) {
            if (err) return cb(err, null);
            params.push('hostaddr=' + quoteParamValue(address));
            return cb(null, params.join(' '));
        });
    }
}
module.exports = ConnectionParameters;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/result.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
'use strict';
const types = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-types/index.js [app-client] (ecmascript)");
const matchRegexp = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/;
// result object returned from query
// in the 'end' event and also
// passed as second argument to provided callback
class Result {
    constructor(rowMode, types){
        this.command = null;
        this.rowCount = null;
        this.oid = null;
        this.rows = [];
        this.fields = [];
        this._parsers = undefined;
        this._types = types;
        this.RowCtor = null;
        this.rowAsArray = rowMode === 'array';
        if (this.rowAsArray) {
            this.parseRow = this._parseRowAsArray;
        }
        this._prebuiltEmptyResultObject = null;
    }
    // adds a command complete message
    addCommandComplete(msg) {
        let match;
        if (msg.text) {
            // pure javascript
            match = matchRegexp.exec(msg.text);
        } else {
            // native bindings
            match = matchRegexp.exec(msg.command);
        }
        if (match) {
            this.command = match[1];
            if (match[3]) {
                // COMMAND OID ROWS
                this.oid = parseInt(match[2], 10);
                this.rowCount = parseInt(match[3], 10);
            } else if (match[2]) {
                // COMMAND ROWS
                this.rowCount = parseInt(match[2], 10);
            }
        }
    }
    _parseRowAsArray(rowData) {
        const row = new Array(rowData.length);
        for(let i = 0, len = rowData.length; i < len; i++){
            const rawValue = rowData[i];
            if (rawValue !== null) {
                row[i] = this._parsers[i](rawValue);
            } else {
                row[i] = null;
            }
        }
        return row;
    }
    parseRow(rowData) {
        const row = {
            ...this._prebuiltEmptyResultObject
        };
        for(let i = 0, len = rowData.length; i < len; i++){
            const rawValue = rowData[i];
            const field = this.fields[i].name;
            if (rawValue !== null) {
                const v = this.fields[i].format === 'binary' ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(rawValue) : rawValue;
                row[field] = this._parsers[i](v);
            } else {
                row[field] = null;
            }
        }
        return row;
    }
    addRow(row) {
        this.rows.push(row);
    }
    addFields(fieldDescriptions) {
        // clears field definitions
        // multiple query statements in 1 action can result in multiple sets
        // of rowDescriptions...eg: 'select NOW(); select 1::int;'
        // you need to reset the fields
        this.fields = fieldDescriptions;
        if (this.fields.length) {
            this._parsers = new Array(fieldDescriptions.length);
        }
        const row = {};
        for(let i = 0; i < fieldDescriptions.length; i++){
            const desc = fieldDescriptions[i];
            row[desc.name] = null;
            if (this._types) {
                this._parsers[i] = this._types.getTypeParser(desc.dataTypeID, desc.format || 'text');
            } else {
                this._parsers[i] = types.getTypeParser(desc.dataTypeID, desc.format || 'text');
            }
        }
        this._prebuiltEmptyResultObject = {
            ...row
        };
    }
}
module.exports = Result;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/query.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
const { EventEmitter } = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/events/events.js [app-client] (ecmascript)");
const Result = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/result.js [app-client] (ecmascript)");
const utils = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/utils.js [app-client] (ecmascript)");
class Query extends EventEmitter {
    constructor(config, values, callback){
        super();
        config = utils.normalizeQueryConfig(config, values, callback);
        this.text = config.text;
        this.values = config.values;
        this.rows = config.rows;
        this.types = config.types;
        this.name = config.name;
        this.queryMode = config.queryMode;
        this.binary = config.binary;
        // use unique portal name each time
        this.portal = config.portal || '';
        this.callback = config.callback;
        this._rowMode = config.rowMode;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].domain && config.callback) {
            this.callback = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].domain.bind(config.callback);
        }
        this._result = new Result(this._rowMode, this.types);
        // potential for multiple results
        this._results = this._result;
        this._canceledDueToError = false;
    }
    requiresPreparation() {
        if (this.queryMode === 'extended') {
            return true;
        }
        // named queries must always be prepared
        if (this.name) {
            return true;
        }
        // always prepare if there are max number of rows expected per
        // portal execution
        if (this.rows) {
            return true;
        }
        // don't prepare empty text queries
        if (!this.text) {
            return false;
        }
        // prepare if there are values
        if (!this.values) {
            return false;
        }
        return this.values.length > 0;
    }
    _checkForMultirow() {
        // if we already have a result with a command property
        // then we've already executed one query in a multi-statement simple query
        // turn our results into an array of results
        if (this._result.command) {
            if (!Array.isArray(this._results)) {
                this._results = [
                    this._result
                ];
            }
            this._result = new Result(this._rowMode, this._result._types);
            this._results.push(this._result);
        }
    }
    // associates row metadata from the supplied
    // message with this query object
    // metadata used when parsing row results
    handleRowDescription(msg) {
        this._checkForMultirow();
        this._result.addFields(msg.fields);
        this._accumulateRows = this.callback || !this.listeners('row').length;
    }
    handleDataRow(msg) {
        let row;
        if (this._canceledDueToError) {
            return;
        }
        try {
            row = this._result.parseRow(msg.fields);
        } catch (err) {
            this._canceledDueToError = err;
            return;
        }
        this.emit('row', row, this._result);
        if (this._accumulateRows) {
            this._result.addRow(row);
        }
    }
    handleCommandComplete(msg, connection) {
        this._checkForMultirow();
        this._result.addCommandComplete(msg);
        // need to sync after each command complete of a prepared statement
        // if we were using a row count which results in multiple calls to _getRows
        if (this.rows) {
            connection.sync();
        }
    }
    // if a named prepared statement is created with empty query text
    // the backend will send an emptyQuery message but *not* a command complete message
    // since we pipeline sync immediately after execute we don't need to do anything here
    // unless we have rows specified, in which case we did not pipeline the initial sync call
    handleEmptyQuery(connection) {
        if (this.rows) {
            connection.sync();
        }
    }
    handleError(err, connection) {
        // need to sync after error during a prepared statement
        if (this._canceledDueToError) {
            err = this._canceledDueToError;
            this._canceledDueToError = false;
        }
        // if callback supplied do not emit error event as uncaught error
        // events will bubble up to node process
        if (this.callback) {
            return this.callback(err);
        }
        this.emit('error', err);
    }
    handleReadyForQuery(con) {
        if (this._canceledDueToError) {
            return this.handleError(this._canceledDueToError, con);
        }
        if (this.callback) {
            try {
                this.callback(null, this._results);
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(()=>{
                    throw err;
                });
            }
        }
        this.emit('end', this._results);
    }
    submit(connection) {
        if (typeof this.text !== 'string' && typeof this.name !== 'string') {
            return new Error('A query must have either text or a name. Supplying neither is unsupported.');
        }
        const previous = connection.parsedStatements[this.name];
        if (this.text && previous && this.text !== previous) {
            return new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
        }
        if (this.values && !Array.isArray(this.values)) {
            return new Error('Query values must be an array');
        }
        if (this.requiresPreparation()) {
            // If we're using the extended query protocol we fire off several separate commands
            // to the backend. On some versions of node & some operating system versions
            // the network stack writes each message separately instead of buffering them together
            // causing the client & network to send more slowly. Corking & uncorking the stream
            // allows node to buffer up the messages internally before sending them all off at once.
            // note: we're checking for existence of cork/uncork because some versions of streams
            // might not have this (cloudflare?)
            connection.stream.cork && connection.stream.cork();
            try {
                this.prepare(connection);
            } finally{
                // while unlikely for this.prepare to throw, if it does & we don't uncork this stream
                // this client becomes unresponsive, so put in finally block "just in case"
                connection.stream.uncork && connection.stream.uncork();
            }
        } else {
            connection.query(this.text);
        }
        return null;
    }
    hasBeenParsed(connection) {
        return this.name && connection.parsedStatements[this.name];
    }
    handlePortalSuspended(connection) {
        this._getRows(connection, this.rows);
    }
    _getRows(connection, rows) {
        connection.execute({
            portal: this.portal,
            rows: rows
        });
        // if we're not reading pages of rows send the sync command
        // to indicate the pipeline is finished
        if (!rows) {
            connection.sync();
        } else {
            // otherwise flush the call out to read more rows
            connection.flush();
        }
    }
    // http://developer.postgresql.org/pgdocs/postgres/protocol-flow.html#PROTOCOL-FLOW-EXT-QUERY
    prepare(connection) {
        // TODO refactor this poor encapsulation
        if (!this.hasBeenParsed(connection)) {
            connection.parse({
                text: this.text,
                name: this.name,
                types: this.types
            });
        }
        // because we're mapping user supplied values to
        // postgres wire protocol compatible values it could
        // throw an exception, so try/catch this section
        try {
            connection.bind({
                portal: this.portal,
                statement: this.name,
                values: this.values,
                binary: this.binary,
                valueMapper: utils.prepareValue
            });
        } catch (err) {
            this.handleError(err, connection);
            return;
        }
        connection.describe({
            type: 'P',
            name: this.portal || ''
        });
        this._getRows(connection, this.rows);
    }
    handleCopyInResponse(connection) {
        connection.sendCopyFail('No source stream defined');
    }
    handleCopyData(msg, connection) {
    // noop
    }
}
module.exports = Query;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/stream.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { getStream, getSecureStream } = getStreamFuncs();
module.exports = {
    /**
   * Get a socket stream compatible with the current runtime environment.
   * @returns {Duplex}
   */ getStream,
    /**
   * Get a TLS secured socket, compatible with the current environment,
   * using the socket and other settings given in `options`.
   * @returns {Duplex}
   */ getSecureStream
};
/**
 * The stream functions that work in Node.js
 */ function getNodejsStreamFuncs() {
    function getStream(ssl) {
        const net = (()=>{
            const e = new Error("Cannot find module 'net'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        return new net.Socket();
    }
    function getSecureStream(options) {
        const tls = (()=>{
            const e = new Error("Cannot find module 'tls'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        return tls.connect(options);
    }
    return {
        getStream,
        getSecureStream
    };
}
/**
 * The stream functions that work in Cloudflare Workers
 */ function getCloudflareStreamFuncs() {
    function getStream(ssl) {
        const { CloudflareSocket } = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-cloudflare/dist/empty.js [app-client] (ecmascript)");
        return new CloudflareSocket(ssl);
    }
    function getSecureStream(options) {
        options.socket.startTls(options);
        return options.socket;
    }
    return {
        getStream,
        getSecureStream
    };
}
/**
 * Are we running in a Cloudflare Worker?
 *
 * @returns true if the code is currently running inside a Cloudflare Worker.
 */ function isCloudflareRuntime() {
    // Since 2022-03-21 the `global_navigator` compatibility flag is on for Cloudflare Workers
    // which means that `navigator.userAgent` will be defined.
    // eslint-disable-next-line no-undef
    if (typeof navigator === 'object' && navigator !== null && typeof navigator.userAgent === 'string') {
        // eslint-disable-next-line no-undef
        return navigator.userAgent === 'Cloudflare-Workers';
    }
    // In case `navigator` or `navigator.userAgent` is not defined then try a more sneaky approach
    if (typeof Response === 'function') {
        const resp = new Response(null, {
            cf: {
                thing: true
            }
        });
        if (typeof resp.cf === 'object' && resp.cf !== null && resp.cf.thing) {
            return true;
        }
    }
    return false;
}
function getStreamFuncs() {
    if (isCloudflareRuntime()) {
        return getCloudflareStreamFuncs();
    }
    return getNodejsStreamFuncs();
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/connection.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const EventEmitter = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/events/events.js [app-client] (ecmascript)").EventEmitter;
const { parse, serialize } = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-protocol/dist/index.js [app-client] (ecmascript)");
const { getStream, getSecureStream } = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/stream.js [app-client] (ecmascript)");
const flushBuffer = serialize.flush();
const syncBuffer = serialize.sync();
const endBuffer = serialize.end();
// TODO(bmc) support binary mode at some point
class Connection extends EventEmitter {
    constructor(config){
        super();
        config = config || {};
        this.stream = config.stream || getStream(config.ssl);
        if (typeof this.stream === 'function') {
            this.stream = this.stream(config);
        }
        this._keepAlive = config.keepAlive;
        this._keepAliveInitialDelayMillis = config.keepAliveInitialDelayMillis;
        this.parsedStatements = {};
        this.ssl = config.ssl || false;
        this._ending = false;
        this._emitMessage = false;
        const self = this;
        this.on('newListener', function(eventName) {
            if (eventName === 'message') {
                self._emitMessage = true;
            }
        });
    }
    connect(port, host) {
        const self = this;
        this._connecting = true;
        this.stream.setNoDelay(true);
        this.stream.connect(port, host);
        this.stream.once('connect', function() {
            if (self._keepAlive) {
                self.stream.setKeepAlive(true, self._keepAliveInitialDelayMillis);
            }
            self.emit('connect');
        });
        const reportStreamError = function(error) {
            // errors about disconnections should be ignored during disconnect
            if (self._ending && (error.code === 'ECONNRESET' || error.code === 'EPIPE')) {
                return;
            }
            self.emit('error', error);
        };
        this.stream.on('error', reportStreamError);
        this.stream.on('close', function() {
            self.emit('end');
        });
        if (!this.ssl) {
            return this.attachListeners(this.stream);
        }
        this.stream.once('data', function(buffer) {
            const responseCode = buffer.toString('utf8');
            switch(responseCode){
                case 'S':
                    break;
                case 'N':
                    self.stream.end();
                    return self.emit('error', new Error('The server does not support SSL connections'));
                default:
                    // Any other response byte, including 'E' (ErrorResponse) indicating a server error
                    self.stream.end();
                    return self.emit('error', new Error('There was an error establishing an SSL connection'));
            }
            const options = {
                socket: self.stream
            };
            if (self.ssl !== true) {
                Object.assign(options, self.ssl);
                if ('key' in self.ssl) {
                    options.key = self.ssl.key;
                }
            }
            const net = (()=>{
                const e = new Error("Cannot find module 'net'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
            if (net.isIP && net.isIP(host) === 0) {
                options.servername = host;
            }
            try {
                self.stream = getSecureStream(options);
            } catch (err) {
                return self.emit('error', err);
            }
            self.attachListeners(self.stream);
            self.stream.on('error', reportStreamError);
            self.emit('sslconnect');
        });
    }
    attachListeners(stream) {
        parse(stream, (msg)=>{
            const eventName = msg.name === 'error' ? 'errorMessage' : msg.name;
            if (this._emitMessage) {
                this.emit('message', msg);
            }
            this.emit(eventName, msg);
        });
    }
    requestSsl() {
        this.stream.write(serialize.requestSsl());
    }
    startup(config) {
        this.stream.write(serialize.startup(config));
    }
    cancel(processID, secretKey) {
        this._send(serialize.cancel(processID, secretKey));
    }
    password(password) {
        this._send(serialize.password(password));
    }
    sendSASLInitialResponseMessage(mechanism, initialResponse) {
        this._send(serialize.sendSASLInitialResponseMessage(mechanism, initialResponse));
    }
    sendSCRAMClientFinalMessage(additionalData) {
        this._send(serialize.sendSCRAMClientFinalMessage(additionalData));
    }
    _send(buffer) {
        if (!this.stream.writable) {
            return false;
        }
        return this.stream.write(buffer);
    }
    query(text) {
        this._send(serialize.query(text));
    }
    // send parse message
    parse(query) {
        this._send(serialize.parse(query));
    }
    // send bind message
    bind(config) {
        this._send(serialize.bind(config));
    }
    // send execute message
    execute(config) {
        this._send(serialize.execute(config));
    }
    flush() {
        if (this.stream.writable) {
            this.stream.write(flushBuffer);
        }
    }
    sync() {
        this._ending = true;
        this._send(syncBuffer);
    }
    ref() {
        this.stream.ref();
    }
    unref() {
        this.stream.unref();
    }
    end() {
        // 0x58 = 'X'
        this._ending = true;
        if (!this._connecting || !this.stream.writable) {
            this.stream.end();
            return;
        }
        return this.stream.write(endBuffer, ()=>{
            this.stream.end();
        });
    }
    close(msg) {
        this._send(serialize.close(msg));
    }
    describe(msg) {
        this._send(serialize.describe(msg));
    }
    sendCopyFromChunk(chunk) {
        this._send(serialize.copyData(chunk));
    }
    endCopyFrom() {
        this._send(serialize.copyDone());
    }
    sendCopyFail(msg) {
        this._send(serialize.copyFail(msg));
    }
}
module.exports = Connection;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/client.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
const EventEmitter = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/events/events.js [app-client] (ecmascript)").EventEmitter;
const utils = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/utils.js [app-client] (ecmascript)");
const nodeUtils = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)");
const sasl = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/crypto/sasl.js [app-client] (ecmascript)");
const TypeOverrides = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/type-overrides.js [app-client] (ecmascript)");
const ConnectionParameters = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/connection-parameters.js [app-client] (ecmascript)");
const Query = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/query.js [app-client] (ecmascript)");
const defaults = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/defaults.js [app-client] (ecmascript)");
const Connection = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/connection.js [app-client] (ecmascript)");
const crypto = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/crypto/utils.js [app-client] (ecmascript)");
const activeQueryDeprecationNotice = nodeUtils.deprecate(()=>{}, 'Client.activeQuery is deprecated and will be removed in a future version.');
const queryQueueDeprecationNotice = nodeUtils.deprecate(()=>{}, 'Client.queryQueue is deprecated and will be removed in a future version.');
const pgPassDeprecationNotice = nodeUtils.deprecate(()=>{}, 'pgpass support is deprecated and will be removed in a future version. ' + 'You can provide an async function as the password property to the Client/Pool constructor that returns a password instead. Within this funciton you can call the pgpass module in your own code.');
const byoPromiseDeprecationNotice = nodeUtils.deprecate(()=>{}, 'Passing a custom Promise implementation to the Client/Pool constructor is deprecated and will be removed in a future version.');
class Client extends EventEmitter {
    constructor(config){
        super();
        this.connectionParameters = new ConnectionParameters(config);
        this.user = this.connectionParameters.user;
        this.database = this.connectionParameters.database;
        this.port = this.connectionParameters.port;
        this.host = this.connectionParameters.host;
        // "hiding" the password so it doesn't show up in stack traces
        // or if the client is console.logged
        Object.defineProperty(this, 'password', {
            configurable: true,
            enumerable: false,
            writable: true,
            value: this.connectionParameters.password
        });
        this.replication = this.connectionParameters.replication;
        const c = config || {};
        if (c.Promise) {
            byoPromiseDeprecationNotice();
        }
        this._Promise = c.Promise || /*TURBOPACK member replacement*/ __turbopack_context__.g.Promise;
        this._types = new TypeOverrides(c.types);
        this._ending = false;
        this._ended = false;
        this._connecting = false;
        this._connected = false;
        this._connectionError = false;
        this._queryable = true;
        this._activeQuery = null;
        this.enableChannelBinding = Boolean(c.enableChannelBinding); // set true to use SCRAM-SHA-256-PLUS when offered
        this.connection = c.connection || new Connection({
            stream: c.stream,
            ssl: this.connectionParameters.ssl,
            keepAlive: c.keepAlive || false,
            keepAliveInitialDelayMillis: c.keepAliveInitialDelayMillis || 0,
            encoding: this.connectionParameters.client_encoding || 'utf8'
        });
        this._queryQueue = [];
        this.binary = c.binary || defaults.binary;
        this.processID = null;
        this.secretKey = null;
        this.ssl = this.connectionParameters.ssl || false;
        // As with Password, make SSL->Key (the private key) non-enumerable.
        // It won't show up in stack traces
        // or if the client is console.logged
        if (this.ssl && this.ssl.key) {
            Object.defineProperty(this.ssl, 'key', {
                enumerable: false
            });
        }
        this._connectionTimeoutMillis = c.connectionTimeoutMillis || 0;
    }
    get activeQuery() {
        activeQueryDeprecationNotice();
        return this._activeQuery;
    }
    set activeQuery(val) {
        activeQueryDeprecationNotice();
        this._activeQuery = val;
    }
    _getActiveQuery() {
        return this._activeQuery;
    }
    _errorAllQueries(err) {
        const enqueueError = (query)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(()=>{
                query.handleError(err, this.connection);
            });
        };
        const activeQuery = this._getActiveQuery();
        if (activeQuery) {
            enqueueError(activeQuery);
            this._activeQuery = null;
        }
        this._queryQueue.forEach(enqueueError);
        this._queryQueue.length = 0;
    }
    _connect(callback) {
        const self = this;
        const con = this.connection;
        this._connectionCallback = callback;
        if (this._connecting || this._connected) {
            const err = new Error('Client has already been connected. You cannot reuse a client.');
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(()=>{
                callback(err);
            });
            return;
        }
        this._connecting = true;
        if (this._connectionTimeoutMillis > 0) {
            this.connectionTimeoutHandle = setTimeout(()=>{
                con._ending = true;
                con.stream.destroy(new Error('timeout expired'));
            }, this._connectionTimeoutMillis);
            if (this.connectionTimeoutHandle.unref) {
                this.connectionTimeoutHandle.unref();
            }
        }
        if (this.host && this.host.indexOf('/') === 0) {
            con.connect(this.host + '/.s.PGSQL.' + this.port);
        } else {
            con.connect(this.port, this.host);
        }
        // once connection is established send startup message
        con.on('connect', function() {
            if (self.ssl) {
                con.requestSsl();
            } else {
                con.startup(self.getStartupConf());
            }
        });
        con.on('sslconnect', function() {
            con.startup(self.getStartupConf());
        });
        this._attachListeners(con);
        con.once('end', ()=>{
            const error = this._ending ? new Error('Connection terminated') : new Error('Connection terminated unexpectedly');
            clearTimeout(this.connectionTimeoutHandle);
            this._errorAllQueries(error);
            this._ended = true;
            if (!this._ending) {
                // if the connection is ended without us calling .end()
                // on this client then we have an unexpected disconnection
                // treat this as an error unless we've already emitted an error
                // during connection.
                if (this._connecting && !this._connectionError) {
                    if (this._connectionCallback) {
                        this._connectionCallback(error);
                    } else {
                        this._handleErrorEvent(error);
                    }
                } else if (!this._connectionError) {
                    this._handleErrorEvent(error);
                }
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(()=>{
                this.emit('end');
            });
        });
    }
    connect(callback) {
        if (callback) {
            this._connect(callback);
            return;
        }
        return new this._Promise((resolve, reject)=>{
            this._connect((error)=>{
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }
    _attachListeners(con) {
        // password request handling
        con.on('authenticationCleartextPassword', this._handleAuthCleartextPassword.bind(this));
        // password request handling
        con.on('authenticationMD5Password', this._handleAuthMD5Password.bind(this));
        // password request handling (SASL)
        con.on('authenticationSASL', this._handleAuthSASL.bind(this));
        con.on('authenticationSASLContinue', this._handleAuthSASLContinue.bind(this));
        con.on('authenticationSASLFinal', this._handleAuthSASLFinal.bind(this));
        con.on('backendKeyData', this._handleBackendKeyData.bind(this));
        con.on('error', this._handleErrorEvent.bind(this));
        con.on('errorMessage', this._handleErrorMessage.bind(this));
        con.on('readyForQuery', this._handleReadyForQuery.bind(this));
        con.on('notice', this._handleNotice.bind(this));
        con.on('rowDescription', this._handleRowDescription.bind(this));
        con.on('dataRow', this._handleDataRow.bind(this));
        con.on('portalSuspended', this._handlePortalSuspended.bind(this));
        con.on('emptyQuery', this._handleEmptyQuery.bind(this));
        con.on('commandComplete', this._handleCommandComplete.bind(this));
        con.on('parseComplete', this._handleParseComplete.bind(this));
        con.on('copyInResponse', this._handleCopyInResponse.bind(this));
        con.on('copyData', this._handleCopyData.bind(this));
        con.on('notification', this._handleNotification.bind(this));
    }
    _getPassword(cb) {
        const con = this.connection;
        if (typeof this.password === 'function') {
            this._Promise.resolve().then(()=>this.password()).then((pass)=>{
                if (pass !== undefined) {
                    if (typeof pass !== 'string') {
                        con.emit('error', new TypeError('Password must be a string'));
                        return;
                    }
                    this.connectionParameters.password = this.password = pass;
                } else {
                    this.connectionParameters.password = this.password = null;
                }
                cb();
            }).catch((err)=>{
                con.emit('error', err);
            });
        } else if (this.password !== null) {
            cb();
        } else {
            try {
                const pgPass = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pgpass/lib/index.js [app-client] (ecmascript)");
                pgPass(this.connectionParameters, (pass)=>{
                    if (undefined !== pass) {
                        pgPassDeprecationNotice();
                        this.connectionParameters.password = this.password = pass;
                    }
                    cb();
                });
            } catch (e) {
                this.emit('error', e);
            }
        }
    }
    _handleAuthCleartextPassword(msg) {
        this._getPassword(()=>{
            this.connection.password(this.password);
        });
    }
    _handleAuthMD5Password(msg) {
        this._getPassword(async ()=>{
            try {
                const hashedPassword = await crypto.postgresMd5PasswordHash(this.user, this.password, msg.salt);
                this.connection.password(hashedPassword);
            } catch (e) {
                this.emit('error', e);
            }
        });
    }
    _handleAuthSASL(msg) {
        this._getPassword(()=>{
            try {
                this.saslSession = sasl.startSession(msg.mechanisms, this.enableChannelBinding && this.connection.stream);
                this.connection.sendSASLInitialResponseMessage(this.saslSession.mechanism, this.saslSession.response);
            } catch (err) {
                this.connection.emit('error', err);
            }
        });
    }
    async _handleAuthSASLContinue(msg) {
        try {
            await sasl.continueSession(this.saslSession, this.password, msg.data, this.enableChannelBinding && this.connection.stream);
            this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
        } catch (err) {
            this.connection.emit('error', err);
        }
    }
    _handleAuthSASLFinal(msg) {
        try {
            sasl.finalizeSession(this.saslSession, msg.data);
            this.saslSession = null;
        } catch (err) {
            this.connection.emit('error', err);
        }
    }
    _handleBackendKeyData(msg) {
        this.processID = msg.processID;
        this.secretKey = msg.secretKey;
    }
    _handleReadyForQuery(msg) {
        if (this._connecting) {
            this._connecting = false;
            this._connected = true;
            clearTimeout(this.connectionTimeoutHandle);
            // process possible callback argument to Client#connect
            if (this._connectionCallback) {
                this._connectionCallback(null, this);
                // remove callback for proper error handling
                // after the connect event
                this._connectionCallback = null;
            }
            this.emit('connect');
        }
        const activeQuery = this._getActiveQuery();
        this._activeQuery = null;
        this.readyForQuery = true;
        if (activeQuery) {
            activeQuery.handleReadyForQuery(this.connection);
        }
        this._pulseQueryQueue();
    }
    // if we receive an error event or error message
    // during the connection process we handle it here
    _handleErrorWhileConnecting(err) {
        if (this._connectionError) {
            // TODO(bmc): this is swallowing errors - we shouldn't do this
            return;
        }
        this._connectionError = true;
        clearTimeout(this.connectionTimeoutHandle);
        if (this._connectionCallback) {
            return this._connectionCallback(err);
        }
        this.emit('error', err);
    }
    // if we're connected and we receive an error event from the connection
    // this means the socket is dead - do a hard abort of all queries and emit
    // the socket error on the client as well
    _handleErrorEvent(err) {
        if (this._connecting) {
            return this._handleErrorWhileConnecting(err);
        }
        this._queryable = false;
        this._errorAllQueries(err);
        this.emit('error', err);
    }
    // handle error messages from the postgres backend
    _handleErrorMessage(msg) {
        if (this._connecting) {
            return this._handleErrorWhileConnecting(msg);
        }
        const activeQuery = this._getActiveQuery();
        if (!activeQuery) {
            this._handleErrorEvent(msg);
            return;
        }
        this._activeQuery = null;
        activeQuery.handleError(msg, this.connection);
    }
    _handleRowDescription(msg) {
        // delegate rowDescription to active query
        this._getActiveQuery().handleRowDescription(msg);
    }
    _handleDataRow(msg) {
        // delegate dataRow to active query
        this._getActiveQuery().handleDataRow(msg);
    }
    _handlePortalSuspended(msg) {
        // delegate portalSuspended to active query
        this._getActiveQuery().handlePortalSuspended(this.connection);
    }
    _handleEmptyQuery(msg) {
        // delegate emptyQuery to active query
        this._getActiveQuery().handleEmptyQuery(this.connection);
    }
    _handleCommandComplete(msg) {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
            const error = new Error('Received unexpected commandComplete message from backend.');
            this._handleErrorEvent(error);
            return;
        }
        // delegate commandComplete to active query
        activeQuery.handleCommandComplete(msg, this.connection);
    }
    _handleParseComplete() {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
            const error = new Error('Received unexpected parseComplete message from backend.');
            this._handleErrorEvent(error);
            return;
        }
        // if a prepared statement has a name and properly parses
        // we track that its already been executed so we don't parse
        // it again on the same client
        if (activeQuery.name) {
            this.connection.parsedStatements[activeQuery.name] = activeQuery.text;
        }
    }
    _handleCopyInResponse(msg) {
        this._getActiveQuery().handleCopyInResponse(this.connection);
    }
    _handleCopyData(msg) {
        this._getActiveQuery().handleCopyData(msg, this.connection);
    }
    _handleNotification(msg) {
        this.emit('notification', msg);
    }
    _handleNotice(msg) {
        this.emit('notice', msg);
    }
    getStartupConf() {
        const params = this.connectionParameters;
        const data = {
            user: params.user,
            database: params.database
        };
        const appName = params.application_name || params.fallback_application_name;
        if (appName) {
            data.application_name = appName;
        }
        if (params.replication) {
            data.replication = '' + params.replication;
        }
        if (params.statement_timeout) {
            data.statement_timeout = String(parseInt(params.statement_timeout, 10));
        }
        if (params.lock_timeout) {
            data.lock_timeout = String(parseInt(params.lock_timeout, 10));
        }
        if (params.idle_in_transaction_session_timeout) {
            data.idle_in_transaction_session_timeout = String(parseInt(params.idle_in_transaction_session_timeout, 10));
        }
        if (params.options) {
            data.options = params.options;
        }
        return data;
    }
    cancel(client, query) {
        if (client.activeQuery === query) {
            const con = this.connection;
            if (this.host && this.host.indexOf('/') === 0) {
                con.connect(this.host + '/.s.PGSQL.' + this.port);
            } else {
                con.connect(this.port, this.host);
            }
            // once connection is established send cancel message
            con.on('connect', function() {
                con.cancel(client.processID, client.secretKey);
            });
        } else if (client._queryQueue.indexOf(query) !== -1) {
            client._queryQueue.splice(client._queryQueue.indexOf(query), 1);
        }
    }
    setTypeParser(oid, format, parseFn) {
        return this._types.setTypeParser(oid, format, parseFn);
    }
    getTypeParser(oid, format) {
        return this._types.getTypeParser(oid, format);
    }
    // escapeIdentifier and escapeLiteral moved to utility functions & exported
    // on PG
    // re-exported here for backwards compatibility
    escapeIdentifier(str) {
        return utils.escapeIdentifier(str);
    }
    escapeLiteral(str) {
        return utils.escapeLiteral(str);
    }
    _pulseQueryQueue() {
        if (this.readyForQuery === true) {
            this._activeQuery = this._queryQueue.shift();
            const activeQuery = this._getActiveQuery();
            if (activeQuery) {
                this.readyForQuery = false;
                this.hasExecuted = true;
                const queryError = activeQuery.submit(this.connection);
                if (queryError) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(()=>{
                        activeQuery.handleError(queryError, this.connection);
                        this.readyForQuery = true;
                        this._pulseQueryQueue();
                    });
                }
            } else if (this.hasExecuted) {
                this._activeQuery = null;
                this.emit('drain');
            }
        }
    }
    query(config, values, callback) {
        // can take in strings, config object or query object
        let query;
        let result;
        let readTimeout;
        let readTimeoutTimer;
        let queryCallback;
        if (config === null || config === undefined) {
            throw new TypeError('Client was passed a null or undefined query');
        } else if (typeof config.submit === 'function') {
            readTimeout = config.query_timeout || this.connectionParameters.query_timeout;
            result = query = config;
            if (typeof values === 'function') {
                query.callback = query.callback || values;
            }
        } else {
            readTimeout = config.query_timeout || this.connectionParameters.query_timeout;
            query = new Query(config, values, callback);
            if (!query.callback) {
                result = new this._Promise((resolve, reject)=>{
                    query.callback = (err, res)=>err ? reject(err) : resolve(res);
                }).catch((err)=>{
                    // replace the stack trace that leads to `TCP.onStreamRead` with one that leads back to the
                    // application that created the query
                    Error.captureStackTrace(err);
                    throw err;
                });
            }
        }
        if (readTimeout) {
            queryCallback = query.callback;
            readTimeoutTimer = setTimeout(()=>{
                const error = new Error('Query read timeout');
                __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(()=>{
                    query.handleError(error, this.connection);
                });
                queryCallback(error);
                // we already returned an error,
                // just do nothing if query completes
                query.callback = ()=>{};
                // Remove from queue
                const index = this._queryQueue.indexOf(query);
                if (index > -1) {
                    this._queryQueue.splice(index, 1);
                }
                this._pulseQueryQueue();
            }, readTimeout);
            query.callback = (err, res)=>{
                clearTimeout(readTimeoutTimer);
                queryCallback(err, res);
            };
        }
        if (this.binary && !query.binary) {
            query.binary = true;
        }
        if (query._result && !query._result._types) {
            query._result._types = this._types;
        }
        if (!this._queryable) {
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(()=>{
                query.handleError(new Error('Client has encountered a connection error and is not queryable'), this.connection);
            });
            return result;
        }
        if (this._ending) {
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(()=>{
                query.handleError(new Error('Client was closed and is not queryable'), this.connection);
            });
            return result;
        }
        this._queryQueue.push(query);
        this._pulseQueryQueue();
        return result;
    }
    ref() {
        this.connection.ref();
    }
    unref() {
        this.connection.unref();
    }
    end(cb) {
        this._ending = true;
        // if we have never connected, then end is a noop, callback immediately
        if (!this.connection._connecting || this._ended) {
            if (cb) {
                cb();
            } else {
                return this._Promise.resolve();
            }
        }
        if (this._getActiveQuery() || !this._queryable) {
            // if we have an active query we need to force a disconnect
            // on the socket - otherwise a hung query could block end forever
            this.connection.stream.destroy();
        } else {
            this.connection.end();
        }
        if (cb) {
            this.connection.once('end', cb);
        } else {
            return new this._Promise((resolve)=>{
                this.connection.once('end', resolve);
            });
        }
    }
    get queryQueue() {
        queryQueueDeprecationNotice();
        return this._queryQueue;
    }
}
// expose a Query constructor
Client.Query = Query;
module.exports = Client;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/native/query.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
const EventEmitter = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/events/events.js [app-client] (ecmascript)").EventEmitter;
const util = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)");
const utils = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/utils.js [app-client] (ecmascript)");
const NativeQuery = module.exports = function(config, values, callback) {
    EventEmitter.call(this);
    config = utils.normalizeQueryConfig(config, values, callback);
    this.text = config.text;
    this.values = config.values;
    this.name = config.name;
    this.queryMode = config.queryMode;
    this.callback = config.callback;
    this.state = 'new';
    this._arrayMode = config.rowMode === 'array';
    // if the 'row' event is listened for
    // then emit them as they come in
    // without setting singleRowMode to true
    // this has almost no meaning because libpq
    // reads all rows into memory before returning any
    this._emitRowEvents = false;
    this.on('newListener', (function(event) {
        if (event === 'row') this._emitRowEvents = true;
    }).bind(this));
};
util.inherits(NativeQuery, EventEmitter);
const errorFieldMap = {
    sqlState: 'code',
    statementPosition: 'position',
    messagePrimary: 'message',
    context: 'where',
    schemaName: 'schema',
    tableName: 'table',
    columnName: 'column',
    dataTypeName: 'dataType',
    constraintName: 'constraint',
    sourceFile: 'file',
    sourceLine: 'line',
    sourceFunction: 'routine'
};
NativeQuery.prototype.handleError = function(err) {
    // copy pq error fields into the error object
    const fields = this.native.pq.resultErrorFields();
    if (fields) {
        for(const key in fields){
            const normalizedFieldName = errorFieldMap[key] || key;
            err[normalizedFieldName] = fields[key];
        }
    }
    if (this.callback) {
        this.callback(err);
    } else {
        this.emit('error', err);
    }
    this.state = 'error';
};
NativeQuery.prototype.then = function(onSuccess, onFailure) {
    return this._getPromise().then(onSuccess, onFailure);
};
NativeQuery.prototype.catch = function(callback) {
    return this._getPromise().catch(callback);
};
NativeQuery.prototype._getPromise = function() {
    if (this._promise) return this._promise;
    this._promise = new Promise((function(resolve, reject) {
        this._once('end', resolve);
        this._once('error', reject);
    }).bind(this));
    return this._promise;
};
NativeQuery.prototype.submit = function(client) {
    this.state = 'running';
    const self = this;
    this.native = client.native;
    client.native.arrayMode = this._arrayMode;
    let after = function(err, rows, results) {
        client.native.arrayMode = false;
        setImmediate(function() {
            self.emit('_done');
        });
        // handle possible query error
        if (err) {
            return self.handleError(err);
        }
        // emit row events for each row in the result
        if (self._emitRowEvents) {
            if (results.length > 1) {
                rows.forEach((rowOfRows, i)=>{
                    rowOfRows.forEach((row)=>{
                        self.emit('row', row, results[i]);
                    });
                });
            } else {
                rows.forEach(function(row) {
                    self.emit('row', row, results);
                });
            }
        }
        // handle successful result
        self.state = 'end';
        self.emit('end', results);
        if (self.callback) {
            self.callback(null, results);
        }
    };
    if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].domain) {
        after = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].domain.bind(after);
    }
    // named query
    if (this.name) {
        if (this.name.length > 63) {
            console.error('Warning! Postgres only supports 63 characters for query names.');
            console.error('You supplied %s (%s)', this.name, this.name.length);
            console.error('This can cause conflicts and silent errors executing queries');
        }
        const values = (this.values || []).map(utils.prepareValue);
        // check if the client has already executed this named query
        // if so...just execute it again - skip the planning phase
        if (client.namedQueries[this.name]) {
            if (this.text && client.namedQueries[this.name] !== this.text) {
                const err = new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
                return after(err);
            }
            return client.native.execute(this.name, values, after);
        }
        // plan the named query the first time, then execute it
        return client.native.prepare(this.name, this.text, values.length, function(err) {
            if (err) return after(err);
            client.namedQueries[self.name] = self.text;
            return self.native.execute(self.name, values, after);
        });
    } else if (this.values) {
        if (!Array.isArray(this.values)) {
            const err = new Error('Query values must be an array');
            return after(err);
        }
        const vals = this.values.map(utils.prepareValue);
        client.native.query(this.text, vals, after);
    } else if (this.queryMode === 'extended') {
        client.native.query(this.text, [], after);
    } else {
        client.native.query(this.text, after);
    }
};
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/native/client.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
// eslint-disable-next-line
var Native;
// eslint-disable-next-line no-useless-catch
try {
    // Wrap this `require()` in a try-catch to avoid upstream bundlers from complaining that this might not be available since it is an optional import
    Native = (()=>{
        const e = new Error("Cannot find module 'pg-native'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })();
} catch (e) {
    throw e;
}
const TypeOverrides = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/type-overrides.js [app-client] (ecmascript)");
const EventEmitter = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/events/events.js [app-client] (ecmascript)").EventEmitter;
const util = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)");
const ConnectionParameters = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/connection-parameters.js [app-client] (ecmascript)");
const NativeQuery = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/native/query.js [app-client] (ecmascript)");
const Client = module.exports = function(config) {
    EventEmitter.call(this);
    config = config || {};
    this._Promise = config.Promise || /*TURBOPACK member replacement*/ __turbopack_context__.g.Promise;
    this._types = new TypeOverrides(config.types);
    this.native = new Native({
        types: this._types
    });
    this._queryQueue = [];
    this._ending = false;
    this._connecting = false;
    this._connected = false;
    this._queryable = true;
    // keep these on the object for legacy reasons
    // for the time being. TODO: deprecate all this jazz
    const cp = this.connectionParameters = new ConnectionParameters(config);
    if (config.nativeConnectionString) cp.nativeConnectionString = config.nativeConnectionString;
    this.user = cp.user;
    // "hiding" the password so it doesn't show up in stack traces
    // or if the client is console.logged
    Object.defineProperty(this, 'password', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: cp.password
    });
    this.database = cp.database;
    this.host = cp.host;
    this.port = cp.port;
    // a hash to hold named queries
    this.namedQueries = {};
};
Client.Query = NativeQuery;
util.inherits(Client, EventEmitter);
Client.prototype._errorAllQueries = function(err) {
    const enqueueError = (query)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(()=>{
            query.native = this.native;
            query.handleError(err);
        });
    };
    if (this._hasActiveQuery()) {
        enqueueError(this._activeQuery);
        this._activeQuery = null;
    }
    this._queryQueue.forEach(enqueueError);
    this._queryQueue.length = 0;
};
// connect to the backend
// pass an optional callback to be called once connected
// or with an error if there was a connection error
Client.prototype._connect = function(cb) {
    const self = this;
    if (this._connecting) {
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(()=>cb(new Error('Client has already been connected. You cannot reuse a client.')));
        return;
    }
    this._connecting = true;
    this.connectionParameters.getLibpqConnectionString(function(err, conString) {
        if (self.connectionParameters.nativeConnectionString) conString = self.connectionParameters.nativeConnectionString;
        if (err) return cb(err);
        self.native.connect(conString, function(err) {
            if (err) {
                self.native.end();
                return cb(err);
            }
            // set internal states to connected
            self._connected = true;
            // handle connection errors from the native layer
            self.native.on('error', function(err) {
                self._queryable = false;
                self._errorAllQueries(err);
                self.emit('error', err);
            });
            self.native.on('notification', function(msg) {
                self.emit('notification', {
                    channel: msg.relname,
                    payload: msg.extra
                });
            });
            // signal we are connected now
            self.emit('connect');
            self._pulseQueryQueue(true);
            cb();
        });
    });
};
Client.prototype.connect = function(callback) {
    if (callback) {
        this._connect(callback);
        return;
    }
    return new this._Promise((resolve, reject)=>{
        this._connect((error)=>{
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
};
// send a query to the server
// this method is highly overloaded to take
// 1) string query, optional array of parameters, optional function callback
// 2) object query with {
//    string query
//    optional array values,
//    optional function callback instead of as a separate parameter
//    optional string name to name & cache the query plan
//    optional string rowMode = 'array' for an array of results
//  }
Client.prototype.query = function(config, values, callback) {
    let query;
    let result;
    let readTimeout;
    let readTimeoutTimer;
    let queryCallback;
    if (config === null || config === undefined) {
        throw new TypeError('Client was passed a null or undefined query');
    } else if (typeof config.submit === 'function') {
        readTimeout = config.query_timeout || this.connectionParameters.query_timeout;
        result = query = config;
        // accept query(new Query(...), (err, res) => { }) style
        if (typeof values === 'function') {
            config.callback = values;
        }
    } else {
        readTimeout = config.query_timeout || this.connectionParameters.query_timeout;
        query = new NativeQuery(config, values, callback);
        if (!query.callback) {
            let resolveOut, rejectOut;
            result = new this._Promise((resolve, reject)=>{
                resolveOut = resolve;
                rejectOut = reject;
            }).catch((err)=>{
                Error.captureStackTrace(err);
                throw err;
            });
            query.callback = (err, res)=>err ? rejectOut(err) : resolveOut(res);
        }
    }
    if (readTimeout) {
        queryCallback = query.callback;
        readTimeoutTimer = setTimeout(()=>{
            const error = new Error('Query read timeout');
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(()=>{
                query.handleError(error, this.connection);
            });
            queryCallback(error);
            // we already returned an error,
            // just do nothing if query completes
            query.callback = ()=>{};
            // Remove from queue
            const index = this._queryQueue.indexOf(query);
            if (index > -1) {
                this._queryQueue.splice(index, 1);
            }
            this._pulseQueryQueue();
        }, readTimeout);
        query.callback = (err, res)=>{
            clearTimeout(readTimeoutTimer);
            queryCallback(err, res);
        };
    }
    if (!this._queryable) {
        query.native = this.native;
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(()=>{
            query.handleError(new Error('Client has encountered a connection error and is not queryable'));
        });
        return result;
    }
    if (this._ending) {
        query.native = this.native;
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(()=>{
            query.handleError(new Error('Client was closed and is not queryable'));
        });
        return result;
    }
    this._queryQueue.push(query);
    this._pulseQueryQueue();
    return result;
};
// disconnect from the backend server
Client.prototype.end = function(cb) {
    const self = this;
    this._ending = true;
    if (!this._connected) {
        this.once('connect', this.end.bind(this, cb));
    }
    let result;
    if (!cb) {
        result = new this._Promise(function(resolve, reject) {
            cb = (err)=>err ? reject(err) : resolve();
        });
    }
    this.native.end(function() {
        self._errorAllQueries(new Error('Connection terminated'));
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(()=>{
            self.emit('end');
            if (cb) cb();
        });
    });
    return result;
};
Client.prototype._hasActiveQuery = function() {
    return this._activeQuery && this._activeQuery.state !== 'error' && this._activeQuery.state !== 'end';
};
Client.prototype._pulseQueryQueue = function(initialConnection) {
    if (!this._connected) {
        return;
    }
    if (this._hasActiveQuery()) {
        return;
    }
    const query = this._queryQueue.shift();
    if (!query) {
        if (!initialConnection) {
            this.emit('drain');
        }
        return;
    }
    this._activeQuery = query;
    query.submit(this);
    const self = this;
    query.once('_done', function() {
        self._pulseQueryQueue();
    });
};
// attempt to cancel an in-progress query
Client.prototype.cancel = function(query) {
    if (this._activeQuery === query) {
        this.native.cancel(function() {});
    } else if (this._queryQueue.indexOf(query) !== -1) {
        this._queryQueue.splice(this._queryQueue.indexOf(query), 1);
    }
};
Client.prototype.ref = function() {};
Client.prototype.unref = function() {};
Client.prototype.setTypeParser = function(oid, format, parseFn) {
    return this._types.setTypeParser(oid, format, parseFn);
};
Client.prototype.getTypeParser = function(oid, format) {
    return this._types.getTypeParser(oid, format);
};
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/native/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/native/client.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
const Client = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/client.js [app-client] (ecmascript)");
const defaults = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/defaults.js [app-client] (ecmascript)");
const Connection = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/connection.js [app-client] (ecmascript)");
const Result = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/result.js [app-client] (ecmascript)");
const utils = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/utils.js [app-client] (ecmascript)");
const Pool = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-pool/index.js [app-client] (ecmascript)");
const TypeOverrides = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/type-overrides.js [app-client] (ecmascript)");
const { DatabaseError } = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-protocol/dist/index.js [app-client] (ecmascript)");
const { escapeIdentifier, escapeLiteral } = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/utils.js [app-client] (ecmascript)");
const poolFactory = (Client)=>{
    return class BoundPool extends Pool {
        constructor(options){
            super(options, Client);
        }
    };
};
const PG = function(clientConstructor) {
    this.defaults = defaults;
    this.Client = clientConstructor;
    this.Query = this.Client.Query;
    this.Pool = poolFactory(this.Client);
    this._pools = [];
    this.Connection = Connection;
    this.types = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-types/index.js [app-client] (ecmascript)");
    this.DatabaseError = DatabaseError;
    this.TypeOverrides = TypeOverrides;
    this.escapeIdentifier = escapeIdentifier;
    this.escapeLiteral = escapeLiteral;
    this.Result = Result;
    this.utils = utils;
};
let clientConstructor = Client;
let forceNative = false;
try {
    forceNative = !!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NODE_PG_FORCE_NATIVE;
} catch  {
// ignore, e.g., Deno without --allow-env
}
if (forceNative) {
    clientConstructor = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/native/index.js [app-client] (ecmascript)");
}
module.exports = new PG(clientConstructor);
// lazy require native module...the native module may not have installed
Object.defineProperty(module.exports, 'native', {
    configurable: true,
    enumerable: false,
    get () {
        let native = null;
        try {
            native = new PG(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/native/index.js [app-client] (ecmascript)"));
        } catch (err) {
            if (err.code !== 'MODULE_NOT_FOUND') {
                throw err;
            }
        }
        // overwrite module.exports.native so that getter is never called again
        Object.defineProperty(module.exports, 'native', {
            value: native
        });
        return native;
    }
});
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/esm/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ESM wrapper for pg
__turbopack_context__.s([
    "Client",
    ()=>Client,
    "Connection",
    ()=>Connection,
    "DatabaseError",
    ()=>DatabaseError,
    "Pool",
    ()=>Pool,
    "Query",
    ()=>Query,
    "Result",
    ()=>Result,
    "TypeOverrides",
    ()=>TypeOverrides,
    "default",
    ()=>__TURBOPACK__default__export__,
    "defaults",
    ()=>defaults,
    "escapeIdentifier",
    ()=>escapeIdentifier,
    "escapeLiteral",
    ()=>escapeLiteral,
    "types",
    ()=>types
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/index.js [app-client] (ecmascript)");
;
const Client = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Client;
const Pool = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Pool;
const Connection = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Connection;
const types = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].types;
const Query = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Query;
const DatabaseError = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DatabaseError;
const escapeIdentifier = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].escapeIdentifier;
const escapeLiteral = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].escapeLiteral;
const Result = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Result;
const TypeOverrides = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].TypeOverrides;
const defaults = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-connection-string/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { emitWarning } = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
//Parse method copied from https://github.com/brianc/node-postgres
//Copyright (c) 2010-2014 Brian Carlson (brian.m.carlson@gmail.com)
//MIT License
//parses a connection string
function parse(str, options = {}) {
    //unix socket
    if (str.charAt(0) === '/') {
        const config = str.split(' ');
        return {
            host: config[0],
            database: config[1]
        };
    }
    // Check for empty host in URL
    const config = {};
    let result;
    let dummyHost = false;
    if (/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(str)) {
        // Ensure spaces are encoded as %20
        str = encodeURI(str).replace(/%25(\d\d)/g, '%$1');
    }
    try {
        try {
            result = new URL(str, 'postgres://base');
        } catch (e) {
            // The URL is invalid so try again with a dummy host
            result = new URL(str.replace('@/', '@___DUMMY___/'), 'postgres://base');
            dummyHost = true;
        }
    } catch (err) {
        // Remove the input from the error message to avoid leaking sensitive information
        err.input && (err.input = '*****REDACTED*****');
        throw err;
    }
    // We'd like to use Object.fromEntries() here but Node.js 10 does not support it
    for (const entry of result.searchParams.entries()){
        config[entry[0]] = entry[1];
    }
    config.user = config.user || decodeURIComponent(result.username);
    config.password = config.password || decodeURIComponent(result.password);
    if (result.protocol == 'socket:') {
        config.host = decodeURI(result.pathname);
        config.database = result.searchParams.get('db');
        config.client_encoding = result.searchParams.get('encoding');
        return config;
    }
    const hostname = dummyHost ? '' : result.hostname;
    if (!config.host) {
        // Only set the host if there is no equivalent query param.
        config.host = decodeURIComponent(hostname);
    } else if (hostname && /^%2f/i.test(hostname)) {
        // Only prepend the hostname to the pathname if it is not a URL encoded Unix socket host.
        result.pathname = hostname + result.pathname;
    }
    if (!config.port) {
        // Only set the port if there is no equivalent query param.
        config.port = result.port;
    }
    const pathname = result.pathname.slice(1) || null;
    config.database = pathname ? decodeURI(pathname) : null;
    if (config.ssl === 'true' || config.ssl === '1') {
        config.ssl = true;
    }
    if (config.ssl === '0') {
        config.ssl = false;
    }
    if (config.sslcert || config.sslkey || config.sslrootcert || config.sslmode) {
        config.ssl = {};
    }
    // Only try to load fs if we expect to read from the disk
    const fs = config.sslcert || config.sslkey || config.sslrootcert ? (()=>{
        const e = new Error("Cannot find module 'fs'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })() : null;
    if (config.sslcert) {
        config.ssl.cert = fs.readFileSync(config.sslcert).toString();
    }
    if (config.sslkey) {
        config.ssl.key = fs.readFileSync(config.sslkey).toString();
    }
    if (config.sslrootcert) {
        config.ssl.ca = fs.readFileSync(config.sslrootcert).toString();
    }
    if (options.useLibpqCompat && config.uselibpqcompat) {
        throw new Error('Both useLibpqCompat and uselibpqcompat are set. Please use only one of them.');
    }
    if (config.uselibpqcompat === 'true' || options.useLibpqCompat) {
        switch(config.sslmode){
            case 'disable':
                {
                    config.ssl = false;
                    break;
                }
            case 'prefer':
                {
                    config.ssl.rejectUnauthorized = false;
                    break;
                }
            case 'require':
                {
                    if (config.sslrootcert) {
                        // If a root CA is specified, behavior of `sslmode=require` will be the same as that of `verify-ca`
                        config.ssl.checkServerIdentity = function() {};
                    } else {
                        config.ssl.rejectUnauthorized = false;
                    }
                    break;
                }
            case 'verify-ca':
                {
                    if (!config.ssl.ca) {
                        throw new Error('SECURITY WARNING: Using sslmode=verify-ca requires specifying a CA with sslrootcert. If a public CA is used, verify-ca allows connections to a server that somebody else may have registered with the CA, making you vulnerable to Man-in-the-Middle attacks. Either specify a custom CA certificate with sslrootcert parameter or use sslmode=verify-full for proper security.');
                    }
                    config.ssl.checkServerIdentity = function() {};
                    break;
                }
            case 'verify-full':
                {
                    break;
                }
        }
    } else {
        switch(config.sslmode){
            case 'disable':
                {
                    config.ssl = false;
                    break;
                }
            case 'prefer':
            case 'require':
            case 'verify-ca':
            case 'verify-full':
                {
                    if (config.sslmode !== 'verify-full') {
                        deprecatedSslModeWarning(config.sslmode);
                    }
                    break;
                }
            case 'no-verify':
                {
                    config.ssl.rejectUnauthorized = false;
                    break;
                }
        }
    }
    return config;
}
// convert pg-connection-string ssl config to a ClientConfig.ConnectionOptions
function toConnectionOptions(sslConfig) {
    const connectionOptions = Object.entries(sslConfig).reduce((c, [key, value])=>{
        // we explicitly check for undefined and null instead of `if (value)` because some
        // options accept falsy values. Example: `ssl.rejectUnauthorized = false`
        if (value !== undefined && value !== null) {
            c[key] = value;
        }
        return c;
    }, {});
    return connectionOptions;
}
// convert pg-connection-string config to a ClientConfig
function toClientConfig(config) {
    const poolConfig = Object.entries(config).reduce((c, [key, value])=>{
        if (key === 'ssl') {
            const sslConfig = value;
            if (typeof sslConfig === 'boolean') {
                c[key] = sslConfig;
            }
            if (typeof sslConfig === 'object') {
                c[key] = toConnectionOptions(sslConfig);
            }
        } else if (value !== undefined && value !== null) {
            if (key === 'port') {
                // when port is not specified, it is converted into an empty string
                // we want to avoid NaN or empty string as a values in ClientConfig
                if (value !== '') {
                    const v = parseInt(value, 10);
                    if (isNaN(v)) {
                        throw new Error(`Invalid ${key}: ${value}`);
                    }
                    c[key] = v;
                }
            } else {
                c[key] = value;
            }
        }
        return c;
    }, {});
    return poolConfig;
}
// parses a connection string into ClientConfig
function parseIntoClientConfig(str) {
    return toClientConfig(parse(str));
}
function deprecatedSslModeWarning(sslmode) {
    if (!deprecatedSslModeWarning.warned) {
        deprecatedSslModeWarning.warned = true;
        emitWarning(`SECURITY WARNING: The SSL modes 'prefer', 'require', and 'verify-ca' are treated as aliases for 'verify-full'.
In the next major version (pg-connection-string v3.0.0 and pg v9.0.0), these modes will adopt standard libpq semantics, which have weaker security guarantees.

To prepare for this change:
- If you want the current behavior, explicitly use 'sslmode=verify-full'
- If you want libpq compatibility now, use 'uselibpqcompat=true&sslmode=${sslmode}'

See https://www.postgresql.org/docs/current/libpq-ssl.html for libpq SSL mode definitions.`);
    }
}
module.exports = parse;
parse.parse = parse;
parse.toClientConfig = toClientConfig;
parse.parseIntoClientConfig = parseIntoClientConfig;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-protocol/dist/messages.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NoticeMessage = exports.DataRowMessage = exports.CommandCompleteMessage = exports.ReadyForQueryMessage = exports.NotificationResponseMessage = exports.BackendKeyDataMessage = exports.AuthenticationMD5Password = exports.ParameterStatusMessage = exports.ParameterDescriptionMessage = exports.RowDescriptionMessage = exports.Field = exports.CopyResponse = exports.CopyDataMessage = exports.DatabaseError = exports.copyDone = exports.emptyQuery = exports.replicationStart = exports.portalSuspended = exports.noData = exports.closeComplete = exports.bindComplete = exports.parseComplete = void 0;
exports.parseComplete = {
    name: 'parseComplete',
    length: 5
};
exports.bindComplete = {
    name: 'bindComplete',
    length: 5
};
exports.closeComplete = {
    name: 'closeComplete',
    length: 5
};
exports.noData = {
    name: 'noData',
    length: 5
};
exports.portalSuspended = {
    name: 'portalSuspended',
    length: 5
};
exports.replicationStart = {
    name: 'replicationStart',
    length: 4
};
exports.emptyQuery = {
    name: 'emptyQuery',
    length: 4
};
exports.copyDone = {
    name: 'copyDone',
    length: 4
};
class DatabaseError extends Error {
    constructor(message, length, name){
        super(message);
        this.length = length;
        this.name = name;
    }
}
exports.DatabaseError = DatabaseError;
class CopyDataMessage {
    constructor(length, chunk){
        this.length = length;
        this.chunk = chunk;
        this.name = 'copyData';
    }
}
exports.CopyDataMessage = CopyDataMessage;
class CopyResponse {
    constructor(length, name, binary, columnCount){
        this.length = length;
        this.name = name;
        this.binary = binary;
        this.columnTypes = new Array(columnCount);
    }
}
exports.CopyResponse = CopyResponse;
class Field {
    constructor(name, tableID, columnID, dataTypeID, dataTypeSize, dataTypeModifier, format){
        this.name = name;
        this.tableID = tableID;
        this.columnID = columnID;
        this.dataTypeID = dataTypeID;
        this.dataTypeSize = dataTypeSize;
        this.dataTypeModifier = dataTypeModifier;
        this.format = format;
    }
}
exports.Field = Field;
class RowDescriptionMessage {
    constructor(length, fieldCount){
        this.length = length;
        this.fieldCount = fieldCount;
        this.name = 'rowDescription';
        this.fields = new Array(this.fieldCount);
    }
}
exports.RowDescriptionMessage = RowDescriptionMessage;
class ParameterDescriptionMessage {
    constructor(length, parameterCount){
        this.length = length;
        this.parameterCount = parameterCount;
        this.name = 'parameterDescription';
        this.dataTypeIDs = new Array(this.parameterCount);
    }
}
exports.ParameterDescriptionMessage = ParameterDescriptionMessage;
class ParameterStatusMessage {
    constructor(length, parameterName, parameterValue){
        this.length = length;
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
        this.name = 'parameterStatus';
    }
}
exports.ParameterStatusMessage = ParameterStatusMessage;
class AuthenticationMD5Password {
    constructor(length, salt){
        this.length = length;
        this.salt = salt;
        this.name = 'authenticationMD5Password';
    }
}
exports.AuthenticationMD5Password = AuthenticationMD5Password;
class BackendKeyDataMessage {
    constructor(length, processID, secretKey){
        this.length = length;
        this.processID = processID;
        this.secretKey = secretKey;
        this.name = 'backendKeyData';
    }
}
exports.BackendKeyDataMessage = BackendKeyDataMessage;
class NotificationResponseMessage {
    constructor(length, processId, channel, payload){
        this.length = length;
        this.processId = processId;
        this.channel = channel;
        this.payload = payload;
        this.name = 'notification';
    }
}
exports.NotificationResponseMessage = NotificationResponseMessage;
class ReadyForQueryMessage {
    constructor(length, status){
        this.length = length;
        this.status = status;
        this.name = 'readyForQuery';
    }
}
exports.ReadyForQueryMessage = ReadyForQueryMessage;
class CommandCompleteMessage {
    constructor(length, text){
        this.length = length;
        this.text = text;
        this.name = 'commandComplete';
    }
}
exports.CommandCompleteMessage = CommandCompleteMessage;
class DataRowMessage {
    constructor(length, fields){
        this.length = length;
        this.fields = fields;
        this.name = 'dataRow';
        this.fieldCount = fields.length;
    }
}
exports.DataRowMessage = DataRowMessage;
class NoticeMessage {
    constructor(length, message){
        this.length = length;
        this.message = message;
        this.name = 'notice';
    }
}
exports.NoticeMessage = NoticeMessage; //# sourceMappingURL=messages.js.map
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-protocol/dist/buffer-writer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
"use strict";
//binary data writer tuned for encoding binary specific to the postgres binary protocol
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Writer = void 0;
class Writer {
    constructor(size = 256){
        this.size = size;
        this.offset = 5;
        this.headerPosition = 0;
        this.buffer = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(size);
    }
    ensure(size) {
        const remaining = this.buffer.length - this.offset;
        if (remaining < size) {
            const oldBuffer = this.buffer;
            // exponential growth factor of around ~ 1.5
            // https://stackoverflow.com/questions/2269063/buffer-growth-strategy
            const newSize = oldBuffer.length + (oldBuffer.length >> 1) + size;
            this.buffer = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(newSize);
            oldBuffer.copy(this.buffer);
        }
    }
    addInt32(num) {
        this.ensure(4);
        this.buffer[this.offset++] = num >>> 24 & 0xff;
        this.buffer[this.offset++] = num >>> 16 & 0xff;
        this.buffer[this.offset++] = num >>> 8 & 0xff;
        this.buffer[this.offset++] = num >>> 0 & 0xff;
        return this;
    }
    addInt16(num) {
        this.ensure(2);
        this.buffer[this.offset++] = num >>> 8 & 0xff;
        this.buffer[this.offset++] = num >>> 0 & 0xff;
        return this;
    }
    addCString(string) {
        if (!string) {
            this.ensure(1);
        } else {
            const len = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].byteLength(string);
            this.ensure(len + 1); // +1 for null terminator
            this.buffer.write(string, this.offset, 'utf-8');
            this.offset += len;
        }
        this.buffer[this.offset++] = 0; // null terminator
        return this;
    }
    addString(string = '') {
        const len = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].byteLength(string);
        this.ensure(len);
        this.buffer.write(string, this.offset);
        this.offset += len;
        return this;
    }
    add(otherBuffer) {
        this.ensure(otherBuffer.length);
        otherBuffer.copy(this.buffer, this.offset);
        this.offset += otherBuffer.length;
        return this;
    }
    join(code) {
        if (code) {
            this.buffer[this.headerPosition] = code;
            //length is everything in this packet minus the code
            const length = this.offset - (this.headerPosition + 1);
            this.buffer.writeInt32BE(length, this.headerPosition + 1);
        }
        return this.buffer.slice(code ? 0 : 5, this.offset);
    }
    flush(code) {
        const result = this.join(code);
        this.offset = 5;
        this.headerPosition = 0;
        this.buffer = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(this.size);
        return result;
    }
}
exports.Writer = Writer; //# sourceMappingURL=buffer-writer.js.map
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-protocol/dist/serializer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serialize = void 0;
const buffer_writer_1 = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-protocol/dist/buffer-writer.js [app-client] (ecmascript)");
const writer = new buffer_writer_1.Writer();
const startup = (opts)=>{
    // protocol version
    writer.addInt16(3).addInt16(0);
    for (const key of Object.keys(opts)){
        writer.addCString(key).addCString(opts[key]);
    }
    writer.addCString('client_encoding').addCString('UTF8');
    const bodyBuffer = writer.addCString('').flush();
    // this message is sent without a code
    const length = bodyBuffer.length + 4;
    return new buffer_writer_1.Writer().addInt32(length).add(bodyBuffer).flush();
};
const requestSsl = ()=>{
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(8);
    response.writeInt32BE(8, 0);
    response.writeInt32BE(80877103, 4);
    return response;
};
const password = (password)=>{
    return writer.addCString(password).flush(112 /* code.startup */ );
};
const sendSASLInitialResponseMessage = function(mechanism, initialResponse) {
    // 0x70 = 'p'
    writer.addCString(mechanism).addInt32(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].byteLength(initialResponse)).addString(initialResponse);
    return writer.flush(112 /* code.startup */ );
};
const sendSCRAMClientFinalMessage = function(additionalData) {
    return writer.addString(additionalData).flush(112 /* code.startup */ );
};
const query = (text)=>{
    return writer.addCString(text).flush(81 /* code.query */ );
};
const emptyArray = [];
const parse = (query)=>{
    // expect something like this:
    // { name: 'queryName',
    //   text: 'select * from blah',
    //   types: ['int8', 'bool'] }
    // normalize missing query names to allow for null
    const name = query.name || '';
    if (name.length > 63) {
        console.error('Warning! Postgres only supports 63 characters for query names.');
        console.error('You supplied %s (%s)', name, name.length);
        console.error('This can cause conflicts and silent errors executing queries');
    }
    const types = query.types || emptyArray;
    const len = types.length;
    const buffer = writer.addCString(name) // name of query
    .addCString(query.text) // actual query text
    .addInt16(len);
    for(let i = 0; i < len; i++){
        buffer.addInt32(types[i]);
    }
    return writer.flush(80 /* code.parse */ );
};
const paramWriter = new buffer_writer_1.Writer();
const writeValues = function(values, valueMapper) {
    for(let i = 0; i < values.length; i++){
        const mappedVal = valueMapper ? valueMapper(values[i], i) : values[i];
        if (mappedVal == null) {
            // add the param type (string) to the writer
            writer.addInt16(0 /* ParamType.STRING */ );
            // write -1 to the param writer to indicate null
            paramWriter.addInt32(-1);
        } else if (mappedVal instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"]) {
            // add the param type (binary) to the writer
            writer.addInt16(1 /* ParamType.BINARY */ );
            // add the buffer to the param writer
            paramWriter.addInt32(mappedVal.length);
            paramWriter.add(mappedVal);
        } else {
            // add the param type (string) to the writer
            writer.addInt16(0 /* ParamType.STRING */ );
            paramWriter.addInt32(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].byteLength(mappedVal));
            paramWriter.addString(mappedVal);
        }
    }
};
const bind = (config = {})=>{
    // normalize config
    const portal = config.portal || '';
    const statement = config.statement || '';
    const binary = config.binary || false;
    const values = config.values || emptyArray;
    const len = values.length;
    writer.addCString(portal).addCString(statement);
    writer.addInt16(len);
    writeValues(values, config.valueMapper);
    writer.addInt16(len);
    writer.add(paramWriter.flush());
    // all results use the same format code
    writer.addInt16(1);
    // format code
    writer.addInt16(binary ? 1 /* ParamType.BINARY */  : 0 /* ParamType.STRING */ );
    return writer.flush(66 /* code.bind */ );
};
const emptyExecute = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from([
    69 /* code.execute */ ,
    0x00,
    0x00,
    0x00,
    0x09,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00
]);
const execute = (config)=>{
    // this is the happy path for most queries
    if (!config || !config.portal && !config.rows) {
        return emptyExecute;
    }
    const portal = config.portal || '';
    const rows = config.rows || 0;
    const portalLength = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].byteLength(portal);
    const len = 4 + portalLength + 1 + 4;
    // one extra bit for code
    const buff = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(1 + len);
    buff[0] = 69 /* code.execute */ ;
    buff.writeInt32BE(len, 1);
    buff.write(portal, 5, 'utf-8');
    buff[portalLength + 5] = 0; // null terminate portal cString
    buff.writeUInt32BE(rows, buff.length - 4);
    return buff;
};
const cancel = (processID, secretKey)=>{
    const buffer = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(16);
    buffer.writeInt32BE(16, 0);
    buffer.writeInt16BE(1234, 4);
    buffer.writeInt16BE(5678, 6);
    buffer.writeInt32BE(processID, 8);
    buffer.writeInt32BE(secretKey, 12);
    return buffer;
};
const cstringMessage = (code, string)=>{
    const stringLen = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].byteLength(string);
    const len = 4 + stringLen + 1;
    // one extra bit for code
    const buffer = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(1 + len);
    buffer[0] = code;
    buffer.writeInt32BE(len, 1);
    buffer.write(string, 5, 'utf-8');
    buffer[len] = 0; // null terminate cString
    return buffer;
};
const emptyDescribePortal = writer.addCString('P').flush(68 /* code.describe */ );
const emptyDescribeStatement = writer.addCString('S').flush(68 /* code.describe */ );
const describe = (msg)=>{
    return msg.name ? cstringMessage(68 /* code.describe */ , `${msg.type}${msg.name || ''}`) : msg.type === 'P' ? emptyDescribePortal : emptyDescribeStatement;
};
const close = (msg)=>{
    const text = `${msg.type}${msg.name || ''}`;
    return cstringMessage(67 /* code.close */ , text);
};
const copyData = (chunk)=>{
    return writer.add(chunk).flush(100 /* code.copyFromChunk */ );
};
const copyFail = (message)=>{
    return cstringMessage(102 /* code.copyFail */ , message);
};
const codeOnlyBuffer = (code)=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from([
        code,
        0x00,
        0x00,
        0x00,
        0x04
    ]);
const flushBuffer = codeOnlyBuffer(72 /* code.flush */ );
const syncBuffer = codeOnlyBuffer(83 /* code.sync */ );
const endBuffer = codeOnlyBuffer(88 /* code.end */ );
const copyDoneBuffer = codeOnlyBuffer(99 /* code.copyDone */ );
const serialize = {
    startup,
    password,
    requestSsl,
    sendSASLInitialResponseMessage,
    sendSCRAMClientFinalMessage,
    query,
    parse,
    bind,
    execute,
    describe,
    close,
    flush: ()=>flushBuffer,
    sync: ()=>syncBuffer,
    end: ()=>endBuffer,
    copyData,
    copyDone: ()=>copyDoneBuffer,
    copyFail,
    cancel
};
exports.serialize = serialize; //# sourceMappingURL=serializer.js.map
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-protocol/dist/buffer-reader.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BufferReader = void 0;
const emptyBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(0);
class BufferReader {
    constructor(offset = 0){
        this.offset = offset;
        this.buffer = emptyBuffer;
        // TODO(bmc): support non-utf8 encoding?
        this.encoding = 'utf-8';
    }
    setBuffer(offset, buffer) {
        this.offset = offset;
        this.buffer = buffer;
    }
    int16() {
        const result = this.buffer.readInt16BE(this.offset);
        this.offset += 2;
        return result;
    }
    byte() {
        const result = this.buffer[this.offset];
        this.offset++;
        return result;
    }
    int32() {
        const result = this.buffer.readInt32BE(this.offset);
        this.offset += 4;
        return result;
    }
    uint32() {
        const result = this.buffer.readUInt32BE(this.offset);
        this.offset += 4;
        return result;
    }
    string(length) {
        const result = this.buffer.toString(this.encoding, this.offset, this.offset + length);
        this.offset += length;
        return result;
    }
    cstring() {
        const start = this.offset;
        let end = start;
        // eslint-disable-next-line no-empty
        while(this.buffer[end++] !== 0){}
        this.offset = end;
        return this.buffer.toString(this.encoding, start, end - 1);
    }
    bytes(length) {
        const result = this.buffer.slice(this.offset, this.offset + length);
        this.offset += length;
        return result;
    }
}
exports.BufferReader = BufferReader; //# sourceMappingURL=buffer-reader.js.map
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-protocol/dist/parser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Parser = void 0;
const messages_1 = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-protocol/dist/messages.js [app-client] (ecmascript)");
const buffer_reader_1 = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-protocol/dist/buffer-reader.js [app-client] (ecmascript)");
// every message is prefixed with a single bye
const CODE_LENGTH = 1;
// every message has an int32 length which includes itself but does
// NOT include the code in the length
const LEN_LENGTH = 4;
const HEADER_LENGTH = CODE_LENGTH + LEN_LENGTH;
// A placeholder for a `BackendMessage`’s length value that will be set after construction.
const LATEINIT_LENGTH = -1;
const emptyBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(0);
class Parser {
    constructor(opts){
        this.buffer = emptyBuffer;
        this.bufferLength = 0;
        this.bufferOffset = 0;
        this.reader = new buffer_reader_1.BufferReader();
        if ((opts === null || opts === void 0 ? void 0 : opts.mode) === 'binary') {
            throw new Error('Binary mode not supported yet');
        }
        this.mode = (opts === null || opts === void 0 ? void 0 : opts.mode) || 'text';
    }
    parse(buffer, callback) {
        this.mergeBuffer(buffer);
        const bufferFullLength = this.bufferOffset + this.bufferLength;
        let offset = this.bufferOffset;
        while(offset + HEADER_LENGTH <= bufferFullLength){
            // code is 1 byte long - it identifies the message type
            const code = this.buffer[offset];
            // length is 1 Uint32BE - it is the length of the message EXCLUDING the code
            const length = this.buffer.readUInt32BE(offset + CODE_LENGTH);
            const fullMessageLength = CODE_LENGTH + length;
            if (fullMessageLength + offset <= bufferFullLength) {
                const message = this.handlePacket(offset + HEADER_LENGTH, code, length, this.buffer);
                callback(message);
                offset += fullMessageLength;
            } else {
                break;
            }
        }
        if (offset === bufferFullLength) {
            // No more use for the buffer
            this.buffer = emptyBuffer;
            this.bufferLength = 0;
            this.bufferOffset = 0;
        } else {
            // Adjust the cursors of remainingBuffer
            this.bufferLength = bufferFullLength - offset;
            this.bufferOffset = offset;
        }
    }
    mergeBuffer(buffer) {
        if (this.bufferLength > 0) {
            const newLength = this.bufferLength + buffer.byteLength;
            const newFullLength = newLength + this.bufferOffset;
            if (newFullLength > this.buffer.byteLength) {
                // We can't concat the new buffer with the remaining one
                let newBuffer;
                if (newLength <= this.buffer.byteLength && this.bufferOffset >= this.bufferLength) {
                    // We can move the relevant part to the beginning of the buffer instead of allocating a new buffer
                    newBuffer = this.buffer;
                } else {
                    // Allocate a new larger buffer
                    let newBufferLength = this.buffer.byteLength * 2;
                    while(newLength >= newBufferLength){
                        newBufferLength *= 2;
                    }
                    newBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(newBufferLength);
                }
                // Move the remaining buffer to the new one
                this.buffer.copy(newBuffer, 0, this.bufferOffset, this.bufferOffset + this.bufferLength);
                this.buffer = newBuffer;
                this.bufferOffset = 0;
            }
            // Concat the new buffer with the remaining one
            buffer.copy(this.buffer, this.bufferOffset + this.bufferLength);
            this.bufferLength = newLength;
        } else {
            this.buffer = buffer;
            this.bufferOffset = 0;
            this.bufferLength = buffer.byteLength;
        }
    }
    handlePacket(offset, code, length, bytes) {
        const { reader } = this;
        // NOTE: This undesirably retains the buffer in `this.reader` if the `parse*Message` calls below throw. However, those should only throw in the case of a protocol error, which normally results in the reader being discarded.
        reader.setBuffer(offset, bytes);
        let message;
        switch(code){
            case 50 /* MessageCodes.BindComplete */ :
                message = messages_1.bindComplete;
                break;
            case 49 /* MessageCodes.ParseComplete */ :
                message = messages_1.parseComplete;
                break;
            case 51 /* MessageCodes.CloseComplete */ :
                message = messages_1.closeComplete;
                break;
            case 110 /* MessageCodes.NoData */ :
                message = messages_1.noData;
                break;
            case 115 /* MessageCodes.PortalSuspended */ :
                message = messages_1.portalSuspended;
                break;
            case 99 /* MessageCodes.CopyDone */ :
                message = messages_1.copyDone;
                break;
            case 87 /* MessageCodes.ReplicationStart */ :
                message = messages_1.replicationStart;
                break;
            case 73 /* MessageCodes.EmptyQuery */ :
                message = messages_1.emptyQuery;
                break;
            case 68 /* MessageCodes.DataRow */ :
                message = parseDataRowMessage(reader);
                break;
            case 67 /* MessageCodes.CommandComplete */ :
                message = parseCommandCompleteMessage(reader);
                break;
            case 90 /* MessageCodes.ReadyForQuery */ :
                message = parseReadyForQueryMessage(reader);
                break;
            case 65 /* MessageCodes.NotificationResponse */ :
                message = parseNotificationMessage(reader);
                break;
            case 82 /* MessageCodes.AuthenticationResponse */ :
                message = parseAuthenticationResponse(reader, length);
                break;
            case 83 /* MessageCodes.ParameterStatus */ :
                message = parseParameterStatusMessage(reader);
                break;
            case 75 /* MessageCodes.BackendKeyData */ :
                message = parseBackendKeyData(reader);
                break;
            case 69 /* MessageCodes.ErrorMessage */ :
                message = parseErrorMessage(reader, 'error');
                break;
            case 78 /* MessageCodes.NoticeMessage */ :
                message = parseErrorMessage(reader, 'notice');
                break;
            case 84 /* MessageCodes.RowDescriptionMessage */ :
                message = parseRowDescriptionMessage(reader);
                break;
            case 116 /* MessageCodes.ParameterDescriptionMessage */ :
                message = parseParameterDescriptionMessage(reader);
                break;
            case 71 /* MessageCodes.CopyIn */ :
                message = parseCopyInMessage(reader);
                break;
            case 72 /* MessageCodes.CopyOut */ :
                message = parseCopyOutMessage(reader);
                break;
            case 100 /* MessageCodes.CopyData */ :
                message = parseCopyData(reader, length);
                break;
            default:
                return new messages_1.DatabaseError('received invalid response: ' + code.toString(16), length, 'error');
        }
        reader.setBuffer(0, emptyBuffer);
        message.length = length;
        return message;
    }
}
exports.Parser = Parser;
const parseReadyForQueryMessage = (reader)=>{
    const status = reader.string(1);
    return new messages_1.ReadyForQueryMessage(LATEINIT_LENGTH, status);
};
const parseCommandCompleteMessage = (reader)=>{
    const text = reader.cstring();
    return new messages_1.CommandCompleteMessage(LATEINIT_LENGTH, text);
};
const parseCopyData = (reader, length)=>{
    const chunk = reader.bytes(length - 4);
    return new messages_1.CopyDataMessage(LATEINIT_LENGTH, chunk);
};
const parseCopyInMessage = (reader)=>parseCopyMessage(reader, 'copyInResponse');
const parseCopyOutMessage = (reader)=>parseCopyMessage(reader, 'copyOutResponse');
const parseCopyMessage = (reader, messageName)=>{
    const isBinary = reader.byte() !== 0;
    const columnCount = reader.int16();
    const message = new messages_1.CopyResponse(LATEINIT_LENGTH, messageName, isBinary, columnCount);
    for(let i = 0; i < columnCount; i++){
        message.columnTypes[i] = reader.int16();
    }
    return message;
};
const parseNotificationMessage = (reader)=>{
    const processId = reader.int32();
    const channel = reader.cstring();
    const payload = reader.cstring();
    return new messages_1.NotificationResponseMessage(LATEINIT_LENGTH, processId, channel, payload);
};
const parseRowDescriptionMessage = (reader)=>{
    const fieldCount = reader.int16();
    const message = new messages_1.RowDescriptionMessage(LATEINIT_LENGTH, fieldCount);
    for(let i = 0; i < fieldCount; i++){
        message.fields[i] = parseField(reader);
    }
    return message;
};
const parseField = (reader)=>{
    const name = reader.cstring();
    const tableID = reader.uint32();
    const columnID = reader.int16();
    const dataTypeID = reader.uint32();
    const dataTypeSize = reader.int16();
    const dataTypeModifier = reader.int32();
    const mode = reader.int16() === 0 ? 'text' : 'binary';
    return new messages_1.Field(name, tableID, columnID, dataTypeID, dataTypeSize, dataTypeModifier, mode);
};
const parseParameterDescriptionMessage = (reader)=>{
    const parameterCount = reader.int16();
    const message = new messages_1.ParameterDescriptionMessage(LATEINIT_LENGTH, parameterCount);
    for(let i = 0; i < parameterCount; i++){
        message.dataTypeIDs[i] = reader.int32();
    }
    return message;
};
const parseDataRowMessage = (reader)=>{
    const fieldCount = reader.int16();
    const fields = new Array(fieldCount);
    for(let i = 0; i < fieldCount; i++){
        const len = reader.int32();
        // a -1 for length means the value of the field is null
        fields[i] = len === -1 ? null : reader.string(len);
    }
    return new messages_1.DataRowMessage(LATEINIT_LENGTH, fields);
};
const parseParameterStatusMessage = (reader)=>{
    const name = reader.cstring();
    const value = reader.cstring();
    return new messages_1.ParameterStatusMessage(LATEINIT_LENGTH, name, value);
};
const parseBackendKeyData = (reader)=>{
    const processID = reader.int32();
    const secretKey = reader.int32();
    return new messages_1.BackendKeyDataMessage(LATEINIT_LENGTH, processID, secretKey);
};
const parseAuthenticationResponse = (reader, length)=>{
    const code = reader.int32();
    // TODO(bmc): maybe better types here
    const message = {
        name: 'authenticationOk',
        length
    };
    switch(code){
        case 0:
            break;
        case 3:
            if (message.length === 8) {
                message.name = 'authenticationCleartextPassword';
            }
            break;
        case 5:
            if (message.length === 12) {
                message.name = 'authenticationMD5Password';
                const salt = reader.bytes(4);
                return new messages_1.AuthenticationMD5Password(LATEINIT_LENGTH, salt);
            }
            break;
        case 10:
            {
                message.name = 'authenticationSASL';
                message.mechanisms = [];
                let mechanism;
                do {
                    mechanism = reader.cstring();
                    if (mechanism) {
                        message.mechanisms.push(mechanism);
                    }
                }while (mechanism)
            }
            break;
        case 11:
            message.name = 'authenticationSASLContinue';
            message.data = reader.string(length - 8);
            break;
        case 12:
            message.name = 'authenticationSASLFinal';
            message.data = reader.string(length - 8);
            break;
        default:
            throw new Error('Unknown authenticationOk message type ' + code);
    }
    return message;
};
const parseErrorMessage = (reader, name)=>{
    const fields = {};
    let fieldType = reader.string(1);
    while(fieldType !== '\0'){
        fields[fieldType] = reader.cstring();
        fieldType = reader.string(1);
    }
    const messageValue = fields.M;
    const message = name === 'notice' ? new messages_1.NoticeMessage(LATEINIT_LENGTH, messageValue) : new messages_1.DatabaseError(messageValue, LATEINIT_LENGTH, name);
    message.severity = fields.S;
    message.code = fields.C;
    message.detail = fields.D;
    message.hint = fields.H;
    message.position = fields.P;
    message.internalPosition = fields.p;
    message.internalQuery = fields.q;
    message.where = fields.W;
    message.schema = fields.s;
    message.table = fields.t;
    message.column = fields.c;
    message.dataType = fields.d;
    message.constraint = fields.n;
    message.file = fields.F;
    message.line = fields.L;
    message.routine = fields.R;
    return message;
}; //# sourceMappingURL=parser.js.map
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-protocol/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DatabaseError = exports.serialize = exports.parse = void 0;
const messages_1 = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-protocol/dist/messages.js [app-client] (ecmascript)");
Object.defineProperty(exports, "DatabaseError", {
    enumerable: true,
    get: function() {
        return messages_1.DatabaseError;
    }
});
const serializer_1 = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-protocol/dist/serializer.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serialize", {
    enumerable: true,
    get: function() {
        return serializer_1.serialize;
    }
});
const parser_1 = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-protocol/dist/parser.js [app-client] (ecmascript)");
function parse(stream, callback) {
    const parser = new parser_1.Parser();
    stream.on('data', (buffer)=>parser.parse(buffer, callback));
    return new Promise((resolve)=>stream.on('end', ()=>resolve()));
}
exports.parse = parse; //# sourceMappingURL=index.js.map
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-cloudflare/dist/empty.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// This is an empty module that is served up when outside of a workerd environment
// See the `exports` field in package.json
exports.default = {}; //# sourceMappingURL=empty.js.map
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/split2/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
Copyright (c) 2014-2021, Matteo Collina <hello@matteocollina.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/ const { Transform } = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/stream-browserify/index.js [app-client] (ecmascript)");
const { StringDecoder } = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/string_decoder/string_decoder.js [app-client] (ecmascript)");
const kLast = Symbol('last');
const kDecoder = Symbol('decoder');
function transform(chunk, enc, cb) {
    let list;
    if (this.overflow) {
        const buf = this[kDecoder].write(chunk);
        list = buf.split(this.matcher);
        if (list.length === 1) return cb() // Line ending not found. Discard entire chunk.
        ;
        // Line ending found. Discard trailing fragment of previous line and reset overflow state.
        list.shift();
        this.overflow = false;
    } else {
        this[kLast] += this[kDecoder].write(chunk);
        list = this[kLast].split(this.matcher);
    }
    this[kLast] = list.pop();
    for(let i = 0; i < list.length; i++){
        try {
            push(this, this.mapper(list[i]));
        } catch (error) {
            return cb(error);
        }
    }
    this.overflow = this[kLast].length > this.maxLength;
    if (this.overflow && !this.skipOverflow) {
        cb(new Error('maximum buffer reached'));
        return;
    }
    cb();
}
function flush(cb) {
    // forward any gibberish left in there
    this[kLast] += this[kDecoder].end();
    if (this[kLast]) {
        try {
            push(this, this.mapper(this[kLast]));
        } catch (error) {
            return cb(error);
        }
    }
    cb();
}
function push(self, val) {
    if (val !== undefined) {
        self.push(val);
    }
}
function noop(incoming) {
    return incoming;
}
function split(matcher, mapper, options) {
    // Set defaults for any arguments not supplied.
    matcher = matcher || /\r?\n/;
    mapper = mapper || noop;
    options = options || {};
    // Test arguments explicitly.
    switch(arguments.length){
        case 1:
            // If mapper is only argument.
            if (typeof matcher === 'function') {
                mapper = matcher;
                matcher = /\r?\n/;
            // If options is only argument.
            } else if (typeof matcher === 'object' && !(matcher instanceof RegExp) && !matcher[Symbol.split]) {
                options = matcher;
                matcher = /\r?\n/;
            }
            break;
        case 2:
            // If mapper and options are arguments.
            if (typeof matcher === 'function') {
                options = mapper;
                mapper = matcher;
                matcher = /\r?\n/;
            // If matcher and options are arguments.
            } else if (typeof mapper === 'object') {
                options = mapper;
                mapper = noop;
            }
    }
    options = Object.assign({}, options);
    options.autoDestroy = true;
    options.transform = transform;
    options.flush = flush;
    options.readableObjectMode = true;
    const stream = new Transform(options);
    stream[kLast] = '';
    stream[kDecoder] = new StringDecoder('utf8');
    stream.matcher = matcher;
    stream.mapper = mapper;
    stream.maxLength = options.maxLength;
    stream.skipOverflow = options.skipOverflow || false;
    stream.overflow = false;
    stream._destroy = function(err, cb) {
        // Weird Node v12 bug that we need to work around
        this._writableState.errorEmitted = false;
        cb(err);
    };
    return stream;
}
module.exports = split;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pgpass/lib/helper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var path = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)"), Stream = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/stream-browserify/index.js [app-client] (ecmascript)").Stream, split = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/split2/index.js [app-client] (ecmascript)"), util = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)"), defaultPort = 5432, isWin = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform === 'win32', warnStream = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stderr;
var S_IRWXG = 56 //    00070(8)
, S_IRWXO = 7 //    00007(8)
, S_IFMT = 61440 // 00170000(8)
, S_IFREG = 32768 //  0100000(8)
;
function isRegFile(mode) {
    return (mode & S_IFMT) == S_IFREG;
}
var fieldNames = [
    'host',
    'port',
    'database',
    'user',
    'password'
];
var nrOfFields = fieldNames.length;
var passKey = fieldNames[nrOfFields - 1];
function warn() {
    var isWritable = warnStream instanceof Stream && true === warnStream.writable;
    if (isWritable) {
        var args = Array.prototype.slice.call(arguments).concat("\n");
        warnStream.write(util.format.apply(util, args));
    }
}
Object.defineProperty(module.exports, 'isWin', {
    get: function() {
        return isWin;
    },
    set: function(val) {
        isWin = val;
    }
});
module.exports.warnTo = function(stream) {
    var old = warnStream;
    warnStream = stream;
    return old;
};
module.exports.getFileName = function(rawEnv) {
    var env = rawEnv || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env;
    var file = env.PGPASSFILE || (isWin ? path.join(env.APPDATA || './', 'postgresql', 'pgpass.conf') : path.join(env.HOME || './', '.pgpass'));
    return file;
};
module.exports.usePgPass = function(stats, fname) {
    if (Object.prototype.hasOwnProperty.call(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env, 'PGPASSWORD')) {
        return false;
    }
    if (isWin) {
        return true;
    }
    fname = fname || '<unkn>';
    if (!isRegFile(stats.mode)) {
        warn('WARNING: password file "%s" is not a plain file', fname);
        return false;
    }
    if (stats.mode & (S_IRWXG | S_IRWXO)) {
        /* If password file is insecure, alert the user and ignore it. */ warn('WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less', fname);
        return false;
    }
    return true;
};
var matcher = module.exports.match = function(connInfo, entry) {
    return fieldNames.slice(0, -1).reduce(function(prev, field, idx) {
        if (idx == 1) {
            // the port
            if (Number(connInfo[field] || defaultPort) === Number(entry[field])) {
                return prev && true;
            }
        }
        return prev && (entry[field] === '*' || entry[field] === connInfo[field]);
    }, true);
};
module.exports.getPassword = function(connInfo, stream, cb) {
    var pass;
    var lineStream = stream.pipe(split());
    function onLine(line) {
        var entry = parseLine(line);
        if (entry && isValidEntry(entry) && matcher(connInfo, entry)) {
            pass = entry[passKey];
            lineStream.end(); // -> calls onEnd(), but pass is set now
        }
    }
    var onEnd = function() {
        stream.destroy();
        cb(pass);
    };
    var onErr = function(err) {
        stream.destroy();
        warn('WARNING: error on reading file: %s', err);
        cb(undefined);
    };
    stream.on('error', onErr);
    lineStream.on('data', onLine).on('end', onEnd).on('error', onErr);
};
var parseLine = module.exports.parseLine = function(line) {
    if (line.length < 11 || line.match(/^\s+#/)) {
        return null;
    }
    var curChar = '';
    var prevChar = '';
    var fieldIdx = 0;
    var startIdx = 0;
    var endIdx = 0;
    var obj = {};
    var isLastField = false;
    var addToObj = function(idx, i0, i1) {
        var field = line.substring(i0, i1);
        if (!Object.hasOwnProperty.call(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env, 'PGPASS_NO_DEESCAPE')) {
            field = field.replace(/\\([:\\])/g, '$1');
        }
        obj[fieldNames[idx]] = field;
    };
    for(var i = 0; i < line.length - 1; i += 1){
        curChar = line.charAt(i + 1);
        prevChar = line.charAt(i);
        isLastField = fieldIdx == nrOfFields - 1;
        if (isLastField) {
            addToObj(fieldIdx, startIdx);
            break;
        }
        if (i >= 0 && curChar == ':' && prevChar !== '\\') {
            addToObj(fieldIdx, startIdx, i + 1);
            startIdx = i + 2;
            fieldIdx += 1;
        }
    }
    obj = Object.keys(obj).length === nrOfFields ? obj : null;
    return obj;
};
var isValidEntry = module.exports.isValidEntry = function(entry) {
    var rules = {
        // host
        0: function(x) {
            return x.length > 0;
        },
        // port
        1: function(x) {
            if (x === '*') {
                return true;
            }
            x = Number(x);
            return isFinite(x) && x > 0 && x < 9007199254740992 && Math.floor(x) === x;
        },
        // database
        2: function(x) {
            return x.length > 0;
        },
        // username
        3: function(x) {
            return x.length > 0;
        },
        // password
        4: function(x) {
            return x.length > 0;
        }
    };
    for(var idx = 0; idx < fieldNames.length; idx += 1){
        var rule = rules[idx];
        var value = entry[fieldNames[idx]] || '';
        var res = rule(value);
        if (!res) {
            return false;
        }
    }
    return true;
};
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pgpass/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var path = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)"), fs = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})(), helper = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pgpass/lib/helper.js [app-client] (ecmascript)");
module.exports = function(connInfo, cb) {
    var file = helper.getFileName();
    fs.stat(file, function(err, stat) {
        if (err || !helper.usePgPass(stat, file)) {
            return cb(undefined);
        }
        var st = fs.createReadStream(file);
        helper.getPassword(connInfo, st, cb);
    });
};
module.exports.warnTo = helper.warnTo;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg-pool/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
const EventEmitter = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/events/events.js [app-client] (ecmascript)").EventEmitter;
const NOOP = function() {};
const removeWhere = (list, predicate)=>{
    const i = list.findIndex(predicate);
    return i === -1 ? undefined : list.splice(i, 1)[0];
};
class IdleItem {
    constructor(client, idleListener, timeoutId){
        this.client = client;
        this.idleListener = idleListener;
        this.timeoutId = timeoutId;
    }
}
class PendingItem {
    constructor(callback){
        this.callback = callback;
    }
}
function throwOnDoubleRelease() {
    throw new Error('Release called on client which has already been released to the pool.');
}
function promisify(Promise, callback) {
    if (callback) {
        return {
            callback: callback,
            result: undefined
        };
    }
    let rej;
    let res;
    const cb = function(err, client) {
        err ? rej(err) : res(client);
    };
    const result = new Promise(function(resolve, reject) {
        res = resolve;
        rej = reject;
    }).catch((err)=>{
        // replace the stack trace that leads to `TCP.onStreamRead` with one that leads back to the
        // application that created the query
        Error.captureStackTrace(err);
        throw err;
    });
    return {
        callback: cb,
        result: result
    };
}
function makeIdleListener(pool, client) {
    return function idleListener(err) {
        err.client = client;
        client.removeListener('error', idleListener);
        client.on('error', ()=>{
            pool.log('additional client error after disconnection due to error', err);
        });
        pool._remove(client);
        // TODO - document that once the pool emits an error
        // the client has already been closed & purged and is unusable
        pool.emit('error', err, client);
    };
}
class Pool extends EventEmitter {
    constructor(options, Client){
        super();
        this.options = Object.assign({}, options);
        if (options != null && 'password' in options) {
            // "hiding" the password so it doesn't show up in stack traces
            // or if the client is console.logged
            Object.defineProperty(this.options, 'password', {
                configurable: true,
                enumerable: false,
                writable: true,
                value: options.password
            });
        }
        if (options != null && options.ssl && options.ssl.key) {
            // "hiding" the ssl->key so it doesn't show up in stack traces
            // or if the client is console.logged
            Object.defineProperty(this.options.ssl, 'key', {
                enumerable: false
            });
        }
        this.options.max = this.options.max || this.options.poolSize || 10;
        this.options.min = this.options.min || 0;
        this.options.maxUses = this.options.maxUses || Infinity;
        this.options.allowExitOnIdle = this.options.allowExitOnIdle || false;
        this.options.maxLifetimeSeconds = this.options.maxLifetimeSeconds || 0;
        this.log = this.options.log || function() {};
        this.Client = this.options.Client || Client || __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/lib/index.js [app-client] (ecmascript)").Client;
        this.Promise = this.options.Promise || /*TURBOPACK member replacement*/ __turbopack_context__.g.Promise;
        if (typeof this.options.idleTimeoutMillis === 'undefined') {
            this.options.idleTimeoutMillis = 10000;
        }
        this._clients = [];
        this._idle = [];
        this._expired = new WeakSet();
        this._pendingQueue = [];
        this._endCallback = undefined;
        this.ending = false;
        this.ended = false;
    }
    _isFull() {
        return this._clients.length >= this.options.max;
    }
    _isAboveMin() {
        return this._clients.length > this.options.min;
    }
    _pulseQueue() {
        this.log('pulse queue');
        if (this.ended) {
            this.log('pulse queue ended');
            return;
        }
        if (this.ending) {
            this.log('pulse queue on ending');
            if (this._idle.length) {
                this._idle.slice().map((item)=>{
                    this._remove(item.client);
                });
            }
            if (!this._clients.length) {
                this.ended = true;
                this._endCallback();
            }
            return;
        }
        // if we don't have any waiting, do nothing
        if (!this._pendingQueue.length) {
            this.log('no queued requests');
            return;
        }
        // if we don't have any idle clients and we have no more room do nothing
        if (!this._idle.length && this._isFull()) {
            return;
        }
        const pendingItem = this._pendingQueue.shift();
        if (this._idle.length) {
            const idleItem = this._idle.pop();
            clearTimeout(idleItem.timeoutId);
            const client = idleItem.client;
            client.ref && client.ref();
            const idleListener = idleItem.idleListener;
            return this._acquireClient(client, pendingItem, idleListener, false);
        }
        if (!this._isFull()) {
            return this.newClient(pendingItem);
        }
        throw new Error('unexpected condition');
    }
    _remove(client, callback) {
        const removed = removeWhere(this._idle, (item)=>item.client === client);
        if (removed !== undefined) {
            clearTimeout(removed.timeoutId);
        }
        this._clients = this._clients.filter((c)=>c !== client);
        const context = this;
        client.end(()=>{
            context.emit('remove', client);
            if (typeof callback === 'function') {
                callback();
            }
        });
    }
    connect(cb) {
        if (this.ending) {
            const err = new Error('Cannot use a pool after calling end on the pool');
            return cb ? cb(err) : this.Promise.reject(err);
        }
        const response = promisify(this.Promise, cb);
        const result = response.result;
        // if we don't have to connect a new client, don't do so
        if (this._isFull() || this._idle.length) {
            // if we have idle clients schedule a pulse immediately
            if (this._idle.length) {
                __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(()=>this._pulseQueue());
            }
            if (!this.options.connectionTimeoutMillis) {
                this._pendingQueue.push(new PendingItem(response.callback));
                return result;
            }
            const queueCallback = (err, res, done)=>{
                clearTimeout(tid);
                response.callback(err, res, done);
            };
            const pendingItem = new PendingItem(queueCallback);
            // set connection timeout on checking out an existing client
            const tid = setTimeout(()=>{
                // remove the callback from pending waiters because
                // we're going to call it with a timeout error
                removeWhere(this._pendingQueue, (i)=>i.callback === queueCallback);
                pendingItem.timedOut = true;
                response.callback(new Error('timeout exceeded when trying to connect'));
            }, this.options.connectionTimeoutMillis);
            if (tid.unref) {
                tid.unref();
            }
            this._pendingQueue.push(pendingItem);
            return result;
        }
        this.newClient(new PendingItem(response.callback));
        return result;
    }
    newClient(pendingItem) {
        const client = new this.Client(this.options);
        this._clients.push(client);
        const idleListener = makeIdleListener(this, client);
        this.log('checking client timeout');
        // connection timeout logic
        let tid;
        let timeoutHit = false;
        if (this.options.connectionTimeoutMillis) {
            tid = setTimeout(()=>{
                this.log('ending client due to timeout');
                timeoutHit = true;
                // force kill the node driver, and let libpq do its teardown
                client.connection ? client.connection.stream.destroy() : client.end();
            }, this.options.connectionTimeoutMillis);
        }
        this.log('connecting new client');
        client.connect((err)=>{
            if (tid) {
                clearTimeout(tid);
            }
            client.on('error', idleListener);
            if (err) {
                this.log('client failed to connect', err);
                // remove the dead client from our list of clients
                this._clients = this._clients.filter((c)=>c !== client);
                if (timeoutHit) {
                    err = new Error('Connection terminated due to connection timeout', {
                        cause: err
                    });
                }
                // this client won’t be released, so move on immediately
                this._pulseQueue();
                if (!pendingItem.timedOut) {
                    pendingItem.callback(err, undefined, NOOP);
                }
            } else {
                this.log('new client connected');
                if (this.options.maxLifetimeSeconds !== 0) {
                    const maxLifetimeTimeout = setTimeout(()=>{
                        this.log('ending client due to expired lifetime');
                        this._expired.add(client);
                        const idleIndex = this._idle.findIndex((idleItem)=>idleItem.client === client);
                        if (idleIndex !== -1) {
                            this._acquireClient(client, new PendingItem((err, client, clientRelease)=>clientRelease()), idleListener, false);
                        }
                    }, this.options.maxLifetimeSeconds * 1000);
                    maxLifetimeTimeout.unref();
                    client.once('end', ()=>clearTimeout(maxLifetimeTimeout));
                }
                return this._acquireClient(client, pendingItem, idleListener, true);
            }
        });
    }
    // acquire a client for a pending work item
    _acquireClient(client, pendingItem, idleListener, isNew) {
        if (isNew) {
            this.emit('connect', client);
        }
        this.emit('acquire', client);
        client.release = this._releaseOnce(client, idleListener);
        client.removeListener('error', idleListener);
        if (!pendingItem.timedOut) {
            if (isNew && this.options.verify) {
                this.options.verify(client, (err)=>{
                    if (err) {
                        client.release(err);
                        return pendingItem.callback(err, undefined, NOOP);
                    }
                    pendingItem.callback(undefined, client, client.release);
                });
            } else {
                pendingItem.callback(undefined, client, client.release);
            }
        } else {
            if (isNew && this.options.verify) {
                this.options.verify(client, client.release);
            } else {
                client.release();
            }
        }
    }
    // returns a function that wraps _release and throws if called more than once
    _releaseOnce(client, idleListener) {
        let released = false;
        return (err)=>{
            if (released) {
                throwOnDoubleRelease();
            }
            released = true;
            this._release(client, idleListener, err);
        };
    }
    // release a client back to the poll, include an error
    // to remove it from the pool
    _release(client, idleListener, err) {
        client.on('error', idleListener);
        client._poolUseCount = (client._poolUseCount || 0) + 1;
        this.emit('release', err, client);
        // TODO(bmc): expose a proper, public interface _queryable and _ending
        if (err || this.ending || !client._queryable || client._ending || client._poolUseCount >= this.options.maxUses) {
            if (client._poolUseCount >= this.options.maxUses) {
                this.log('remove expended client');
            }
            return this._remove(client, this._pulseQueue.bind(this));
        }
        const isExpired = this._expired.has(client);
        if (isExpired) {
            this.log('remove expired client');
            this._expired.delete(client);
            return this._remove(client, this._pulseQueue.bind(this));
        }
        // idle timeout
        let tid;
        if (this.options.idleTimeoutMillis && this._isAboveMin()) {
            tid = setTimeout(()=>{
                if (this._isAboveMin()) {
                    this.log('remove idle client');
                    this._remove(client, this._pulseQueue.bind(this));
                }
            }, this.options.idleTimeoutMillis);
            if (this.options.allowExitOnIdle) {
                // allow Node to exit if this is all that's left
                tid.unref();
            }
        }
        if (this.options.allowExitOnIdle) {
            client.unref();
        }
        this._idle.push(new IdleItem(client, idleListener, tid));
        this._pulseQueue();
    }
    query(text, values, cb) {
        // guard clause against passing a function as the first parameter
        if (typeof text === 'function') {
            const response = promisify(this.Promise, text);
            setImmediate(function() {
                return response.callback(new Error('Passing a function as the first parameter to pool.query is not supported'));
            });
            return response.result;
        }
        // allow plain text query without values
        if (typeof values === 'function') {
            cb = values;
            values = undefined;
        }
        const response = promisify(this.Promise, cb);
        cb = response.callback;
        this.connect((err, client)=>{
            if (err) {
                return cb(err);
            }
            let clientReleased = false;
            const onError = (err)=>{
                if (clientReleased) {
                    return;
                }
                clientReleased = true;
                client.release(err);
                cb(err);
            };
            client.once('error', onError);
            this.log('dispatching query');
            try {
                client.query(text, values, (err, res)=>{
                    this.log('query dispatched');
                    client.removeListener('error', onError);
                    if (clientReleased) {
                        return;
                    }
                    clientReleased = true;
                    client.release(err);
                    if (err) {
                        return cb(err);
                    }
                    return cb(undefined, res);
                });
            } catch (err) {
                client.release(err);
                return cb(err);
            }
        });
        return response.result;
    }
    end(cb) {
        this.log('ending');
        if (this.ending) {
            const err = new Error('Called end on pool more than once');
            return cb ? cb(err) : this.Promise.reject(err);
        }
        this.ending = true;
        const promised = promisify(this.Promise, cb);
        this._endCallback = promised.callback;
        this._pulseQueue();
        return promised.result;
    }
    get waitingCount() {
        return this._pendingQueue.length;
    }
    get idleCount() {
        return this._idle.length;
    }
    get expiredCount() {
        return this._clients.reduce((acc, client)=>acc + (this._expired.has(client) ? 1 : 0), 0);
    }
    get totalCount() {
        return this._clients.length;
    }
}
module.exports = Pool;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@prisma/adapter-pg/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/pg.ts
__turbopack_context__.s([
    "PrismaPg",
    ()=>PrismaPgAdapterFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@prisma/debug/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@prisma/driver-adapter-utils/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/pg/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$postgres$2d$array$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/postgres-array/index.js [app-client] (ecmascript)");
;
;
// package.json
var name = "@prisma/adapter-pg";
// src/constants.ts
var FIRST_NORMAL_OBJECT_ID = 16384;
;
;
;
var { types } = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
var { builtins: ScalarColumnType, getTypeParser } = types;
var AdditionalScalarColumnType = {
    NAME: 19
};
var ArrayColumnType = {
    BIT_ARRAY: 1561,
    BOOL_ARRAY: 1e3,
    BYTEA_ARRAY: 1001,
    BPCHAR_ARRAY: 1014,
    CHAR_ARRAY: 1002,
    CIDR_ARRAY: 651,
    DATE_ARRAY: 1182,
    FLOAT4_ARRAY: 1021,
    FLOAT8_ARRAY: 1022,
    INET_ARRAY: 1041,
    INT2_ARRAY: 1005,
    INT4_ARRAY: 1007,
    INT8_ARRAY: 1016,
    JSONB_ARRAY: 3807,
    JSON_ARRAY: 199,
    MONEY_ARRAY: 791,
    NUMERIC_ARRAY: 1231,
    OID_ARRAY: 1028,
    TEXT_ARRAY: 1009,
    TIMESTAMP_ARRAY: 1115,
    TIMESTAMPTZ_ARRAY: 1185,
    TIME_ARRAY: 1183,
    UUID_ARRAY: 2951,
    VARBIT_ARRAY: 1563,
    VARCHAR_ARRAY: 1015,
    XML_ARRAY: 143
};
var UnsupportedNativeDataType = class _UnsupportedNativeDataType extends Error {
    // map of type codes to type names
    static typeNames = {
        16: "bool",
        17: "bytea",
        18: "char",
        19: "name",
        20: "int8",
        21: "int2",
        22: "int2vector",
        23: "int4",
        24: "regproc",
        25: "text",
        26: "oid",
        27: "tid",
        28: "xid",
        29: "cid",
        30: "oidvector",
        32: "pg_ddl_command",
        71: "pg_type",
        75: "pg_attribute",
        81: "pg_proc",
        83: "pg_class",
        114: "json",
        142: "xml",
        194: "pg_node_tree",
        269: "table_am_handler",
        325: "index_am_handler",
        600: "point",
        601: "lseg",
        602: "path",
        603: "box",
        604: "polygon",
        628: "line",
        650: "cidr",
        700: "float4",
        701: "float8",
        705: "unknown",
        718: "circle",
        774: "macaddr8",
        790: "money",
        829: "macaddr",
        869: "inet",
        1033: "aclitem",
        1042: "bpchar",
        1043: "varchar",
        1082: "date",
        1083: "time",
        1114: "timestamp",
        1184: "timestamptz",
        1186: "interval",
        1266: "timetz",
        1560: "bit",
        1562: "varbit",
        1700: "numeric",
        1790: "refcursor",
        2202: "regprocedure",
        2203: "regoper",
        2204: "regoperator",
        2205: "regclass",
        2206: "regtype",
        2249: "record",
        2275: "cstring",
        2276: "any",
        2277: "anyarray",
        2278: "void",
        2279: "trigger",
        2280: "language_handler",
        2281: "internal",
        2283: "anyelement",
        2287: "_record",
        2776: "anynonarray",
        2950: "uuid",
        2970: "txid_snapshot",
        3115: "fdw_handler",
        3220: "pg_lsn",
        3310: "tsm_handler",
        3361: "pg_ndistinct",
        3402: "pg_dependencies",
        3500: "anyenum",
        3614: "tsvector",
        3615: "tsquery",
        3642: "gtsvector",
        3734: "regconfig",
        3769: "regdictionary",
        3802: "jsonb",
        3831: "anyrange",
        3838: "event_trigger",
        3904: "int4range",
        3906: "numrange",
        3908: "tsrange",
        3910: "tstzrange",
        3912: "daterange",
        3926: "int8range",
        4072: "jsonpath",
        4089: "regnamespace",
        4096: "regrole",
        4191: "regcollation",
        4451: "int4multirange",
        4532: "nummultirange",
        4533: "tsmultirange",
        4534: "tstzmultirange",
        4535: "datemultirange",
        4536: "int8multirange",
        4537: "anymultirange",
        4538: "anycompatiblemultirange",
        4600: "pg_brin_bloom_summary",
        4601: "pg_brin_minmax_multi_summary",
        5017: "pg_mcv_list",
        5038: "pg_snapshot",
        5069: "xid8",
        5077: "anycompatible",
        5078: "anycompatiblearray",
        5079: "anycompatiblenonarray",
        5080: "anycompatiblerange"
    };
    type;
    constructor(code){
        super();
        this.type = _UnsupportedNativeDataType.typeNames[code] || "Unknown";
        this.message = `Unsupported column type ${this.type}`;
    }
};
function fieldToColumnType(fieldTypeId) {
    switch(fieldTypeId){
        case ScalarColumnType.INT2:
        case ScalarColumnType.INT4:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int32;
        case ScalarColumnType.INT8:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64;
        case ScalarColumnType.FLOAT4:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Float;
        case ScalarColumnType.FLOAT8:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Double;
        case ScalarColumnType.BOOL:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Boolean;
        case ScalarColumnType.DATE:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Date;
        case ScalarColumnType.TIME:
        case ScalarColumnType.TIMETZ:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Time;
        case ScalarColumnType.TIMESTAMP:
        case ScalarColumnType.TIMESTAMPTZ:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTime;
        case ScalarColumnType.NUMERIC:
        case ScalarColumnType.MONEY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Numeric;
        case ScalarColumnType.JSON:
        case ScalarColumnType.JSONB:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Json;
        case ScalarColumnType.UUID:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Uuid;
        case ScalarColumnType.OID:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64;
        case ScalarColumnType.BPCHAR:
        case ScalarColumnType.TEXT:
        case ScalarColumnType.VARCHAR:
        case ScalarColumnType.BIT:
        case ScalarColumnType.VARBIT:
        case ScalarColumnType.INET:
        case ScalarColumnType.CIDR:
        case ScalarColumnType.XML:
        case AdditionalScalarColumnType.NAME:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Text;
        case ScalarColumnType.BYTEA:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Bytes;
        case ArrayColumnType.INT2_ARRAY:
        case ArrayColumnType.INT4_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int32Array;
        case ArrayColumnType.FLOAT4_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].FloatArray;
        case ArrayColumnType.FLOAT8_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DoubleArray;
        case ArrayColumnType.NUMERIC_ARRAY:
        case ArrayColumnType.MONEY_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].NumericArray;
        case ArrayColumnType.BOOL_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].BooleanArray;
        case ArrayColumnType.CHAR_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].CharacterArray;
        case ArrayColumnType.BPCHAR_ARRAY:
        case ArrayColumnType.TEXT_ARRAY:
        case ArrayColumnType.VARCHAR_ARRAY:
        case ArrayColumnType.VARBIT_ARRAY:
        case ArrayColumnType.BIT_ARRAY:
        case ArrayColumnType.INET_ARRAY:
        case ArrayColumnType.CIDR_ARRAY:
        case ArrayColumnType.XML_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].TextArray;
        case ArrayColumnType.DATE_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateArray;
        case ArrayColumnType.TIME_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].TimeArray;
        case ArrayColumnType.TIMESTAMP_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTimeArray;
        case ArrayColumnType.TIMESTAMPTZ_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTimeArray;
        case ArrayColumnType.JSON_ARRAY:
        case ArrayColumnType.JSONB_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].JsonArray;
        case ArrayColumnType.BYTEA_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].BytesArray;
        case ArrayColumnType.UUID_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].UuidArray;
        case ArrayColumnType.INT8_ARRAY:
        case ArrayColumnType.OID_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64Array;
        default:
            if (fieldTypeId >= FIRST_NORMAL_OBJECT_ID) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Text;
            }
            throw new UnsupportedNativeDataType(fieldTypeId);
    }
}
function normalize_array(element_normalizer) {
    return (str)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$postgres$2d$array$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(str, element_normalizer);
}
function normalize_numeric(numeric) {
    return numeric;
}
function normalize_date(date) {
    return date;
}
function normalize_timestamp(time) {
    return `${time.replace(" ", "T")}+00:00`;
}
function normalize_timestamptz(time) {
    return time.replace(" ", "T").replace(/[+-]\d{2}(:\d{2})?$/, "+00:00");
}
function normalize_time(time) {
    return time;
}
function normalize_timez(time) {
    return time.replace(/[+-]\d{2}(:\d{2})?$/, "");
}
function normalize_money(money) {
    return money.slice(1);
}
function normalize_xml(xml) {
    return xml;
}
function toJson(json) {
    return json;
}
var parsePgBytes = getTypeParser(ScalarColumnType.BYTEA);
var normalizeByteaArray = getTypeParser(ArrayColumnType.BYTEA_ARRAY);
function convertBytes(serializedBytes) {
    return parsePgBytes(serializedBytes);
}
function normalizeBit(bit) {
    return bit;
}
var customParsers = {
    [ScalarColumnType.NUMERIC]: normalize_numeric,
    [ArrayColumnType.NUMERIC_ARRAY]: normalize_array(normalize_numeric),
    [ScalarColumnType.TIME]: normalize_time,
    [ArrayColumnType.TIME_ARRAY]: normalize_array(normalize_time),
    [ScalarColumnType.TIMETZ]: normalize_timez,
    [ScalarColumnType.DATE]: normalize_date,
    [ArrayColumnType.DATE_ARRAY]: normalize_array(normalize_date),
    [ScalarColumnType.TIMESTAMP]: normalize_timestamp,
    [ArrayColumnType.TIMESTAMP_ARRAY]: normalize_array(normalize_timestamp),
    [ScalarColumnType.TIMESTAMPTZ]: normalize_timestamptz,
    [ArrayColumnType.TIMESTAMPTZ_ARRAY]: normalize_array(normalize_timestamptz),
    [ScalarColumnType.MONEY]: normalize_money,
    [ArrayColumnType.MONEY_ARRAY]: normalize_array(normalize_money),
    [ScalarColumnType.JSON]: toJson,
    [ArrayColumnType.JSON_ARRAY]: normalize_array(toJson),
    [ScalarColumnType.JSONB]: toJson,
    [ArrayColumnType.JSONB_ARRAY]: normalize_array(toJson),
    [ScalarColumnType.BYTEA]: convertBytes,
    [ArrayColumnType.BYTEA_ARRAY]: normalizeByteaArray,
    [ArrayColumnType.BIT_ARRAY]: normalize_array(normalizeBit),
    [ArrayColumnType.VARBIT_ARRAY]: normalize_array(normalizeBit),
    [ArrayColumnType.XML_ARRAY]: normalize_array(normalize_xml)
};
function mapArg(arg, argType) {
    if (arg === null) {
        return null;
    }
    if (Array.isArray(arg) && argType.arity === "list") {
        return arg.map((value)=>mapArg(value, argType));
    }
    if (typeof arg === "string" && argType.scalarType === "datetime") {
        arg = new Date(arg);
    }
    if (arg instanceof Date) {
        switch(argType.dbType){
            case "TIME":
            case "TIMETZ":
                return formatTime(arg);
            case "DATE":
                return formatDate(arg);
            default:
                return formatDateTime(arg);
        }
    }
    if (typeof arg === "string" && argType.scalarType === "bytes") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(arg, "base64");
    }
    if (ArrayBuffer.isView(arg)) {
        return new Uint8Array(arg.buffer, arg.byteOffset, arg.byteLength);
    }
    return arg;
}
function formatDateTime(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    const ms = date.getUTCMilliseconds();
    return pad(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate()) + " " + pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + (ms ? "." + String(ms).padStart(3, "0") : "");
}
function formatDate(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    return pad(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate());
}
function formatTime(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    const ms = date.getUTCMilliseconds();
    return pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + (ms ? "." + String(ms).padStart(3, "0") : "");
}
// src/errors.ts
var TLS_ERRORS = /* @__PURE__ */ new Set([
    "UNABLE_TO_GET_ISSUER_CERT",
    "UNABLE_TO_GET_CRL",
    "UNABLE_TO_DECRYPT_CERT_SIGNATURE",
    "UNABLE_TO_DECRYPT_CRL_SIGNATURE",
    "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY",
    "CERT_SIGNATURE_FAILURE",
    "CRL_SIGNATURE_FAILURE",
    "CERT_NOT_YET_VALID",
    "CERT_HAS_EXPIRED",
    "CRL_NOT_YET_VALID",
    "CRL_HAS_EXPIRED",
    "ERROR_IN_CERT_NOT_BEFORE_FIELD",
    "ERROR_IN_CERT_NOT_AFTER_FIELD",
    "ERROR_IN_CRL_LAST_UPDATE_FIELD",
    "ERROR_IN_CRL_NEXT_UPDATE_FIELD",
    "DEPTH_ZERO_SELF_SIGNED_CERT",
    "SELF_SIGNED_CERT_IN_CHAIN",
    "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
    "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
    "CERT_CHAIN_TOO_LONG",
    "CERT_REVOKED",
    "INVALID_CA",
    "INVALID_PURPOSE",
    "CERT_UNTRUSTED",
    "CERT_REJECTED",
    "HOSTNAME_MISMATCH",
    "ERR_TLS_CERT_ALTNAME_FORMAT",
    "ERR_TLS_CERT_ALTNAME_INVALID"
]);
var SOCKET_ERRORS = /* @__PURE__ */ new Set([
    "ENOTFOUND",
    "ECONNREFUSED",
    "ECONNRESET",
    "ETIMEDOUT"
]);
function convertDriverError(error) {
    if (isSocketError(error)) {
        return mapSocketError(error);
    }
    if (isTlsError(error)) {
        return {
            kind: "TlsConnectionError",
            reason: error.message
        };
    }
    if (isDriverError(error)) {
        return {
            originalCode: error.code,
            originalMessage: error.message,
            ...mapDriverError(error)
        };
    }
    throw error;
}
function mapDriverError(error) {
    switch(error.code){
        case "22001":
            return {
                kind: "LengthMismatch",
                column: error.column
            };
        case "22003":
            return {
                kind: "ValueOutOfRange",
                cause: error.message
            };
        case "22P02":
            return {
                kind: "InvalidInputValue",
                message: error.message
            };
        case "23505":
            {
                const fields = error.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
                return {
                    kind: "UniqueConstraintViolation",
                    constraint: fields !== void 0 ? {
                        fields
                    } : void 0
                };
            }
        case "23502":
            {
                const fields = error.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
                return {
                    kind: "NullConstraintViolation",
                    constraint: fields !== void 0 ? {
                        fields
                    } : void 0
                };
            }
        case "23503":
            {
                let constraint;
                if (error.column) {
                    constraint = {
                        fields: [
                            error.column
                        ]
                    };
                } else if (error.constraint) {
                    constraint = {
                        index: error.constraint
                    };
                }
                return {
                    kind: "ForeignKeyConstraintViolation",
                    constraint
                };
            }
        case "3D000":
            return {
                kind: "DatabaseDoesNotExist",
                db: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "28000":
            return {
                kind: "DatabaseAccessDenied",
                db: error.message.split(",").find((s)=>s.startsWith(" database"))?.split('"').at(1)
            };
        case "28P01":
            return {
                kind: "AuthenticationFailed",
                user: error.message.split(" ").pop()?.split('"').at(1)
            };
        case "40001":
            return {
                kind: "TransactionWriteConflict"
            };
        case "42P01":
            return {
                kind: "TableDoesNotExist",
                table: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "42703":
            return {
                kind: "ColumnNotFound",
                column: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "42P04":
            return {
                kind: "DatabaseAlreadyExists",
                db: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "53300":
            return {
                kind: "TooManyConnections",
                cause: error.message
            };
        default:
            return {
                kind: "postgres",
                code: error.code ?? "N/A",
                severity: error.severity ?? "N/A",
                message: error.message,
                detail: error.detail,
                column: error.column,
                hint: error.hint
            };
    }
}
function isDriverError(error) {
    return typeof error.code === "string" && typeof error.message === "string" && typeof error.severity === "string" && (typeof error.detail === "string" || error.detail === void 0) && (typeof error.column === "string" || error.column === void 0) && (typeof error.hint === "string" || error.hint === void 0);
}
function mapSocketError(error) {
    switch(error.code){
        case "ENOTFOUND":
        case "ECONNREFUSED":
            return {
                kind: "DatabaseNotReachable",
                host: error.address ?? error.hostname,
                port: error.port
            };
        case "ECONNRESET":
            return {
                kind: "ConnectionClosed"
            };
        case "ETIMEDOUT":
            return {
                kind: "SocketTimeout"
            };
    }
}
function isSocketError(error) {
    return typeof error.code === "string" && typeof error.syscall === "string" && typeof error.errno === "number" && SOCKET_ERRORS.has(error.code);
}
function isTlsError(error) {
    if (typeof error.code === "string") {
        return TLS_ERRORS.has(error.code);
    }
    switch(error.message){
        case "The server does not support SSL connections":
        case "There was an error establishing an SSL connection":
            return true;
    }
    return false;
}
// src/pg.ts
var types2 = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].types;
var debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Debug"])("prisma:driver-adapter:pg");
var PgQueryable = class {
    constructor(client, pgOptions){
        this.client = client;
        this.pgOptions = pgOptions;
    }
    provider = "postgres";
    adapterName = name;
    /**
   * Execute a query given as SQL, interpolating the given parameters.
   */ async queryRaw(query) {
        const tag = "[js::query_raw]";
        debug(`${tag} %O`, query);
        const { fields, rows } = await this.performIO(query);
        const columnNames = fields.map((field)=>field.name);
        let columnTypes = [];
        try {
            columnTypes = fields.map((field)=>fieldToColumnType(field.dataTypeID));
        } catch (e) {
            if (e instanceof UnsupportedNativeDataType) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DriverAdapterError"]({
                    kind: "UnsupportedNativeDataType",
                    type: e.type
                });
            }
            throw e;
        }
        const udtParser = this.pgOptions?.userDefinedTypeParser;
        if (udtParser) {
            for(let i = 0; i < fields.length; i++){
                const field = fields[i];
                if (field.dataTypeID >= FIRST_NORMAL_OBJECT_ID && !Object.hasOwn(customParsers, field.dataTypeID)) {
                    for(let j = 0; j < rows.length; j++){
                        rows[j][i] = await udtParser(field.dataTypeID, rows[j][i], this);
                    }
                }
            }
        }
        return {
            columnNames,
            columnTypes,
            rows
        };
    }
    /**
   * Execute a query given as SQL, interpolating the given parameters and
   * returning the number of affected rows.
   * Note: Queryable expects a u64, but napi.rs only supports u32.
   */ async executeRaw(query) {
        const tag = "[js::execute_raw]";
        debug(`${tag} %O`, query);
        return (await this.performIO(query)).rowCount ?? 0;
    }
    /**
   * Run a query against the database, returning the result set.
   * Should the query fail due to a connection error, the connection is
   * marked as unhealthy.
   */ async performIO(query) {
        const { sql, args } = query;
        const values = args.map((arg, i)=>mapArg(arg, query.argTypes[i]));
        try {
            const result = await this.client.query({
                text: sql,
                values,
                rowMode: "array",
                types: {
                    // This is the error expected:
                    // No overload matches this call.
                    // The last overload gave the following error.
                    // Type '(oid: number, format?: any) => (json: string) => unknown' is not assignable to type '{ <T>(oid: number): TypeParser<string, string | T>; <T>(oid: number, format: "text"): TypeParser<string, string | T>; <T>(oid: number, format: "binary"): TypeParser<...>; }'.
                    //   Type '(json: string) => unknown' is not assignable to type 'TypeParser<Buffer, any>'.
                    //     Types of parameters 'json' and 'value' are incompatible.
                    //       Type 'Buffer' is not assignable to type 'string'.ts(2769)
                    //
                    // Because pg-types types expect us to handle both binary and text protocol versions,
                    // where as far we can see, pg will ever pass only text version.
                    //
                    // @ts-expect-error
                    getTypeParser: (oid, format)=>{
                        if (format === "text" && customParsers[oid]) {
                            return customParsers[oid];
                        }
                        return types2.getTypeParser(oid, format);
                    }
                }
            }, values);
            return result;
        } catch (e) {
            this.onError(e);
        }
    }
    onError(error) {
        debug("Error in performIO: %O", error);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DriverAdapterError"](convertDriverError(error));
    }
};
var PgTransaction = class extends PgQueryable {
    constructor(client, options, pgOptions, cleanup){
        super(client, pgOptions);
        this.options = options;
        this.pgOptions = pgOptions;
        this.cleanup = cleanup;
    }
    async commit() {
        debug(`[js::commit]`);
        this.cleanup?.();
        this.client.release();
    }
    async rollback() {
        debug(`[js::rollback]`);
        this.cleanup?.();
        this.client.release();
    }
};
var PrismaPgAdapter = class extends PgQueryable {
    constructor(client, pgOptions, release){
        super(client);
        this.pgOptions = pgOptions;
        this.release = release;
    }
    async startTransaction(isolationLevel) {
        const options = {
            usePhantomQuery: false
        };
        const tag = "[js::startTransaction]";
        debug("%s options: %O", tag, options);
        const conn = await this.client.connect().catch((error)=>this.onError(error));
        const onError = (err)=>{
            debug(`Error from pool connection: ${err.message} %O`, err);
            this.pgOptions?.onConnectionError?.(err);
        };
        conn.on("error", onError);
        const cleanup = ()=>{
            conn.removeListener("error", onError);
        };
        try {
            const tx = new PgTransaction(conn, options, this.pgOptions, cleanup);
            await tx.executeRaw({
                sql: "BEGIN",
                args: [],
                argTypes: []
            });
            if (isolationLevel) {
                await tx.executeRaw({
                    sql: `SET TRANSACTION ISOLATION LEVEL ${isolationLevel}`,
                    args: [],
                    argTypes: []
                });
            }
            return tx;
        } catch (error) {
            cleanup();
            conn.release(error);
            this.onError(error);
        }
    }
    async executeScript(script) {
        const statements = script.split(";").map((stmt)=>stmt.trim()).filter((stmt)=>stmt.length > 0);
        for (const stmt of statements){
            try {
                await this.client.query(stmt);
            } catch (error) {
                this.onError(error);
            }
        }
    }
    getConnectionInfo() {
        return {
            schemaName: this.pgOptions?.schema,
            supportsRelationJoins: true
        };
    }
    async dispose() {
        return this.release?.();
    }
    underlyingDriver() {
        return this.client;
    }
};
var PrismaPgAdapterFactory = class {
    constructor(poolOrConfig, options){
        this.options = options;
        if (poolOrConfig instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Pool) {
            this.externalPool = poolOrConfig;
            this.config = poolOrConfig.options;
        } else {
            this.externalPool = null;
            this.config = poolOrConfig;
        }
    }
    provider = "postgres";
    adapterName = name;
    config;
    externalPool;
    async connect() {
        const client = this.externalPool ?? new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Pool(this.config);
        const onIdleClientError = (err)=>{
            debug(`Error from idle pool client: ${err.message} %O`, err);
            this.options?.onPoolError?.(err);
        };
        client.on("error", onIdleClientError);
        return new PrismaPgAdapter(client, this.options, async ()=>{
            if (this.externalPool) {
                if (this.options?.disposeExternalPool) {
                    await this.externalPool.end();
                    this.externalPool = null;
                } else {
                    this.externalPool.removeListener("error", onIdleClientError);
                }
            } else {
                await client.end();
            }
        });
    }
    async connectToShadowDb() {
        const conn = await this.connect();
        const database = `prisma_migrate_shadow_db_${globalThis.crypto.randomUUID()}`;
        await conn.executeScript(`CREATE DATABASE "${database}"`);
        const client = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$pg$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Pool({
            ...this.config,
            database
        });
        return new PrismaPgAdapter(client, void 0, async ()=>{
            await conn.executeScript(`DROP DATABASE "${database}"`);
            await client.end();
        });
    }
};
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/bcryptjs/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 Copyright (c) 2012 Nevins Bartolomeo <nevins.bartolomeo@gmail.com>
 Copyright (c) 2012 Shane Girish <shaneGirish@gmail.com>
 Copyright (c) 2025 Daniel Wirtz <dcode@dcode.io>

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ // The Node.js crypto module is used as a fallback for the Web Crypto API. When
// building for the browser, inclusion of the crypto module should be disabled,
// which the package hints at in its package.json for bundlers that support it.
__turbopack_context__.s([
    "compare",
    ()=>compare,
    "compareSync",
    ()=>compareSync,
    "decodeBase64",
    ()=>decodeBase64,
    "default",
    ()=>__TURBOPACK__default__export__,
    "encodeBase64",
    ()=>encodeBase64,
    "genSalt",
    ()=>genSalt,
    "genSaltSync",
    ()=>genSaltSync,
    "getRounds",
    ()=>getRounds,
    "getSalt",
    ()=>getSalt,
    "hash",
    ()=>hash,
    "hashSync",
    ()=>hashSync,
    "setRandomFallback",
    ()=>setRandomFallback,
    "truncates",
    ()=>truncates
]);
;
/**
 * The random implementation to use as a fallback.
 * @type {?function(number):!Array.<number>}
 * @inner
 */ var randomFallback = null;
/**
 * Generates cryptographically secure random bytes.
 * @function
 * @param {number} len Bytes length
 * @returns {!Array.<number>} Random bytes
 * @throws {Error} If no random implementation is available
 * @inner
 */ function randomBytes(len) {
    // Web Crypto API. Globally available in the browser and in Node.js >=23.
    try {
        return crypto.getRandomValues(new Uint8Array(len));
    } catch  {}
    // Node.js crypto module for non-browser environments.
    try {
        return (void 0).randomBytes(len);
    } catch  {}
    // Custom fallback specified with `setRandomFallback`.
    if (!randomFallback) {
        throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");
    }
    return randomFallback(len);
}
function setRandomFallback(random) {
    randomFallback = random;
}
function genSaltSync(rounds, seed_length) {
    rounds = rounds || GENSALT_DEFAULT_LOG2_ROUNDS;
    if (typeof rounds !== "number") throw Error("Illegal arguments: " + typeof rounds + ", " + typeof seed_length);
    if (rounds < 4) rounds = 4;
    else if (rounds > 31) rounds = 31;
    var salt = [];
    salt.push("$2b$");
    if (rounds < 10) salt.push("0");
    salt.push(rounds.toString());
    salt.push("$");
    salt.push(base64_encode(randomBytes(BCRYPT_SALT_LEN), BCRYPT_SALT_LEN)); // May throw
    return salt.join("");
}
function genSalt(rounds, seed_length, callback) {
    if (typeof seed_length === "function") callback = seed_length, seed_length = undefined; // Not supported.
    if (typeof rounds === "function") callback = rounds, rounds = undefined;
    if (typeof rounds === "undefined") rounds = GENSALT_DEFAULT_LOG2_ROUNDS;
    else if (typeof rounds !== "number") throw Error("illegal arguments: " + typeof rounds);
    function _async(callback) {
        nextTick(function() {
            // Pretty thin, but salting is fast enough
            try {
                callback(null, genSaltSync(rounds));
            } catch (err) {
                callback(err);
            }
        });
    }
    if (callback) {
        if (typeof callback !== "function") throw Error("Illegal callback: " + typeof callback);
        _async(callback);
    } else return new Promise(function(resolve, reject) {
        _async(function(err, res) {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}
function hashSync(password, salt) {
    if (typeof salt === "undefined") salt = GENSALT_DEFAULT_LOG2_ROUNDS;
    if (typeof salt === "number") salt = genSaltSync(salt);
    if (typeof password !== "string" || typeof salt !== "string") throw Error("Illegal arguments: " + typeof password + ", " + typeof salt);
    return _hash(password, salt);
}
function hash(password, salt, callback, progressCallback) {
    function _async(callback) {
        if (typeof password === "string" && typeof salt === "number") genSalt(salt, function(err, salt) {
            _hash(password, salt, callback, progressCallback);
        });
        else if (typeof password === "string" && typeof salt === "string") _hash(password, salt, callback, progressCallback);
        else nextTick(callback.bind(this, Error("Illegal arguments: " + typeof password + ", " + typeof salt)));
    }
    if (callback) {
        if (typeof callback !== "function") throw Error("Illegal callback: " + typeof callback);
        _async(callback);
    } else return new Promise(function(resolve, reject) {
        _async(function(err, res) {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}
/**
 * Compares two strings of the same length in constant time.
 * @param {string} known Must be of the correct length
 * @param {string} unknown Must be the same length as `known`
 * @returns {boolean}
 * @inner
 */ function safeStringCompare(known, unknown) {
    var diff = known.length ^ unknown.length;
    for(var i = 0; i < known.length; ++i){
        diff |= known.charCodeAt(i) ^ unknown.charCodeAt(i);
    }
    return diff === 0;
}
function compareSync(password, hash) {
    if (typeof password !== "string" || typeof hash !== "string") throw Error("Illegal arguments: " + typeof password + ", " + typeof hash);
    if (hash.length !== 60) return false;
    return safeStringCompare(hashSync(password, hash.substring(0, hash.length - 31)), hash);
}
function compare(password, hashValue, callback, progressCallback) {
    function _async(callback) {
        if (typeof password !== "string" || typeof hashValue !== "string") {
            nextTick(callback.bind(this, Error("Illegal arguments: " + typeof password + ", " + typeof hashValue)));
            return;
        }
        if (hashValue.length !== 60) {
            nextTick(callback.bind(this, null, false));
            return;
        }
        hash(password, hashValue.substring(0, 29), function(err, comp) {
            if (err) callback(err);
            else callback(null, safeStringCompare(comp, hashValue));
        }, progressCallback);
    }
    if (callback) {
        if (typeof callback !== "function") throw Error("Illegal callback: " + typeof callback);
        _async(callback);
    } else return new Promise(function(resolve, reject) {
        _async(function(err, res) {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}
function getRounds(hash) {
    if (typeof hash !== "string") throw Error("Illegal arguments: " + typeof hash);
    return parseInt(hash.split("$")[2], 10);
}
function getSalt(hash) {
    if (typeof hash !== "string") throw Error("Illegal arguments: " + typeof hash);
    if (hash.length !== 60) throw Error("Illegal hash length: " + hash.length + " != 60");
    return hash.substring(0, 29);
}
function truncates(password) {
    if (typeof password !== "string") throw Error("Illegal arguments: " + typeof password);
    return utf8Length(password) > 72;
}
/**
 * Continues with the callback after yielding to the event loop.
 * @function
 * @param {function(...[*])} callback Callback to execute
 * @inner
 */ var nextTick = typeof setImmediate === "function" ? setImmediate : typeof scheduler === "object" && typeof scheduler.postTask === "function" ? scheduler.postTask.bind(scheduler) : setTimeout;
/** Calculates the byte length of a string encoded as UTF8. */ function utf8Length(string) {
    var len = 0, c = 0;
    for(var i = 0; i < string.length; ++i){
        c = string.charCodeAt(i);
        if (c < 128) len += 1;
        else if (c < 2048) len += 2;
        else if ((c & 0xfc00) === 0xd800 && (string.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            ++i;
            len += 4;
        } else len += 3;
    }
    return len;
}
/** Converts a string to an array of UTF8 bytes. */ function utf8Array(string) {
    var offset = 0, c1, c2;
    var buffer = new Array(utf8Length(string));
    for(var i = 0, k = string.length; i < k; ++i){
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6 | 192;
            buffer[offset++] = c1 & 63 | 128;
        } else if ((c1 & 0xfc00) === 0xd800 && ((c2 = string.charCodeAt(i + 1)) & 0xfc00) === 0xdc00) {
            c1 = 0x10000 + ((c1 & 0x03ff) << 10) + (c2 & 0x03ff);
            ++i;
            buffer[offset++] = c1 >> 18 | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12 | 224;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
        }
    }
    return buffer;
}
// A base64 implementation for the bcrypt algorithm. This is partly non-standard.
/**
 * bcrypt's own non-standard base64 dictionary.
 * @type {!Array.<string>}
 * @const
 * @inner
 **/ var BASE64_CODE = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
/**
 * @type {!Array.<number>}
 * @const
 * @inner
 **/ var BASE64_INDEX = [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    0,
    1,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    -1,
    -1,
    -1,
    -1,
    -1
];
/**
 * Encodes a byte array to base64 with up to len bytes of input.
 * @param {!Array.<number>} b Byte array
 * @param {number} len Maximum input length
 * @returns {string}
 * @inner
 */ function base64_encode(b, len) {
    var off = 0, rs = [], c1, c2;
    if (len <= 0 || len > b.length) throw Error("Illegal len: " + len);
    while(off < len){
        c1 = b[off++] & 0xff;
        rs.push(BASE64_CODE[c1 >> 2 & 0x3f]);
        c1 = (c1 & 0x03) << 4;
        if (off >= len) {
            rs.push(BASE64_CODE[c1 & 0x3f]);
            break;
        }
        c2 = b[off++] & 0xff;
        c1 |= c2 >> 4 & 0x0f;
        rs.push(BASE64_CODE[c1 & 0x3f]);
        c1 = (c2 & 0x0f) << 2;
        if (off >= len) {
            rs.push(BASE64_CODE[c1 & 0x3f]);
            break;
        }
        c2 = b[off++] & 0xff;
        c1 |= c2 >> 6 & 0x03;
        rs.push(BASE64_CODE[c1 & 0x3f]);
        rs.push(BASE64_CODE[c2 & 0x3f]);
    }
    return rs.join("");
}
/**
 * Decodes a base64 encoded string to up to len bytes of output.
 * @param {string} s String to decode
 * @param {number} len Maximum output length
 * @returns {!Array.<number>}
 * @inner
 */ function base64_decode(s, len) {
    var off = 0, slen = s.length, olen = 0, rs = [], c1, c2, c3, c4, o, code;
    if (len <= 0) throw Error("Illegal len: " + len);
    while(off < slen - 1 && olen < len){
        code = s.charCodeAt(off++);
        c1 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        code = s.charCodeAt(off++);
        c2 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        if (c1 == -1 || c2 == -1) break;
        o = c1 << 2 >>> 0;
        o |= (c2 & 0x30) >> 4;
        rs.push(String.fromCharCode(o));
        if (++olen >= len || off >= slen) break;
        code = s.charCodeAt(off++);
        c3 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        if (c3 == -1) break;
        o = (c2 & 0x0f) << 4 >>> 0;
        o |= (c3 & 0x3c) >> 2;
        rs.push(String.fromCharCode(o));
        if (++olen >= len || off >= slen) break;
        code = s.charCodeAt(off++);
        c4 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        o = (c3 & 0x03) << 6 >>> 0;
        o |= c4;
        rs.push(String.fromCharCode(o));
        ++olen;
    }
    var res = [];
    for(off = 0; off < olen; off++)res.push(rs[off].charCodeAt(0));
    return res;
}
/**
 * @type {number}
 * @const
 * @inner
 */ var BCRYPT_SALT_LEN = 16;
/**
 * @type {number}
 * @const
 * @inner
 */ var GENSALT_DEFAULT_LOG2_ROUNDS = 10;
/**
 * @type {number}
 * @const
 * @inner
 */ var BLOWFISH_NUM_ROUNDS = 16;
/**
 * @type {number}
 * @const
 * @inner
 */ var MAX_EXECUTION_TIME = 100;
/**
 * @type {Array.<number>}
 * @const
 * @inner
 */ var P_ORIG = [
    0x243f6a88,
    0x85a308d3,
    0x13198a2e,
    0x03707344,
    0xa4093822,
    0x299f31d0,
    0x082efa98,
    0xec4e6c89,
    0x452821e6,
    0x38d01377,
    0xbe5466cf,
    0x34e90c6c,
    0xc0ac29b7,
    0xc97c50dd,
    0x3f84d5b5,
    0xb5470917,
    0x9216d5d9,
    0x8979fb1b
];
/**
 * @type {Array.<number>}
 * @const
 * @inner
 */ var S_ORIG = [
    0xd1310ba6,
    0x98dfb5ac,
    0x2ffd72db,
    0xd01adfb7,
    0xb8e1afed,
    0x6a267e96,
    0xba7c9045,
    0xf12c7f99,
    0x24a19947,
    0xb3916cf7,
    0x0801f2e2,
    0x858efc16,
    0x636920d8,
    0x71574e69,
    0xa458fea3,
    0xf4933d7e,
    0x0d95748f,
    0x728eb658,
    0x718bcd58,
    0x82154aee,
    0x7b54a41d,
    0xc25a59b5,
    0x9c30d539,
    0x2af26013,
    0xc5d1b023,
    0x286085f0,
    0xca417918,
    0xb8db38ef,
    0x8e79dcb0,
    0x603a180e,
    0x6c9e0e8b,
    0xb01e8a3e,
    0xd71577c1,
    0xbd314b27,
    0x78af2fda,
    0x55605c60,
    0xe65525f3,
    0xaa55ab94,
    0x57489862,
    0x63e81440,
    0x55ca396a,
    0x2aab10b6,
    0xb4cc5c34,
    0x1141e8ce,
    0xa15486af,
    0x7c72e993,
    0xb3ee1411,
    0x636fbc2a,
    0x2ba9c55d,
    0x741831f6,
    0xce5c3e16,
    0x9b87931e,
    0xafd6ba33,
    0x6c24cf5c,
    0x7a325381,
    0x28958677,
    0x3b8f4898,
    0x6b4bb9af,
    0xc4bfe81b,
    0x66282193,
    0x61d809cc,
    0xfb21a991,
    0x487cac60,
    0x5dec8032,
    0xef845d5d,
    0xe98575b1,
    0xdc262302,
    0xeb651b88,
    0x23893e81,
    0xd396acc5,
    0x0f6d6ff3,
    0x83f44239,
    0x2e0b4482,
    0xa4842004,
    0x69c8f04a,
    0x9e1f9b5e,
    0x21c66842,
    0xf6e96c9a,
    0x670c9c61,
    0xabd388f0,
    0x6a51a0d2,
    0xd8542f68,
    0x960fa728,
    0xab5133a3,
    0x6eef0b6c,
    0x137a3be4,
    0xba3bf050,
    0x7efb2a98,
    0xa1f1651d,
    0x39af0176,
    0x66ca593e,
    0x82430e88,
    0x8cee8619,
    0x456f9fb4,
    0x7d84a5c3,
    0x3b8b5ebe,
    0xe06f75d8,
    0x85c12073,
    0x401a449f,
    0x56c16aa6,
    0x4ed3aa62,
    0x363f7706,
    0x1bfedf72,
    0x429b023d,
    0x37d0d724,
    0xd00a1248,
    0xdb0fead3,
    0x49f1c09b,
    0x075372c9,
    0x80991b7b,
    0x25d479d8,
    0xf6e8def7,
    0xe3fe501a,
    0xb6794c3b,
    0x976ce0bd,
    0x04c006ba,
    0xc1a94fb6,
    0x409f60c4,
    0x5e5c9ec2,
    0x196a2463,
    0x68fb6faf,
    0x3e6c53b5,
    0x1339b2eb,
    0x3b52ec6f,
    0x6dfc511f,
    0x9b30952c,
    0xcc814544,
    0xaf5ebd09,
    0xbee3d004,
    0xde334afd,
    0x660f2807,
    0x192e4bb3,
    0xc0cba857,
    0x45c8740f,
    0xd20b5f39,
    0xb9d3fbdb,
    0x5579c0bd,
    0x1a60320a,
    0xd6a100c6,
    0x402c7279,
    0x679f25fe,
    0xfb1fa3cc,
    0x8ea5e9f8,
    0xdb3222f8,
    0x3c7516df,
    0xfd616b15,
    0x2f501ec8,
    0xad0552ab,
    0x323db5fa,
    0xfd238760,
    0x53317b48,
    0x3e00df82,
    0x9e5c57bb,
    0xca6f8ca0,
    0x1a87562e,
    0xdf1769db,
    0xd542a8f6,
    0x287effc3,
    0xac6732c6,
    0x8c4f5573,
    0x695b27b0,
    0xbbca58c8,
    0xe1ffa35d,
    0xb8f011a0,
    0x10fa3d98,
    0xfd2183b8,
    0x4afcb56c,
    0x2dd1d35b,
    0x9a53e479,
    0xb6f84565,
    0xd28e49bc,
    0x4bfb9790,
    0xe1ddf2da,
    0xa4cb7e33,
    0x62fb1341,
    0xcee4c6e8,
    0xef20cada,
    0x36774c01,
    0xd07e9efe,
    0x2bf11fb4,
    0x95dbda4d,
    0xae909198,
    0xeaad8e71,
    0x6b93d5a0,
    0xd08ed1d0,
    0xafc725e0,
    0x8e3c5b2f,
    0x8e7594b7,
    0x8ff6e2fb,
    0xf2122b64,
    0x8888b812,
    0x900df01c,
    0x4fad5ea0,
    0x688fc31c,
    0xd1cff191,
    0xb3a8c1ad,
    0x2f2f2218,
    0xbe0e1777,
    0xea752dfe,
    0x8b021fa1,
    0xe5a0cc0f,
    0xb56f74e8,
    0x18acf3d6,
    0xce89e299,
    0xb4a84fe0,
    0xfd13e0b7,
    0x7cc43b81,
    0xd2ada8d9,
    0x165fa266,
    0x80957705,
    0x93cc7314,
    0x211a1477,
    0xe6ad2065,
    0x77b5fa86,
    0xc75442f5,
    0xfb9d35cf,
    0xebcdaf0c,
    0x7b3e89a0,
    0xd6411bd3,
    0xae1e7e49,
    0x00250e2d,
    0x2071b35e,
    0x226800bb,
    0x57b8e0af,
    0x2464369b,
    0xf009b91e,
    0x5563911d,
    0x59dfa6aa,
    0x78c14389,
    0xd95a537f,
    0x207d5ba2,
    0x02e5b9c5,
    0x83260376,
    0x6295cfa9,
    0x11c81968,
    0x4e734a41,
    0xb3472dca,
    0x7b14a94a,
    0x1b510052,
    0x9a532915,
    0xd60f573f,
    0xbc9bc6e4,
    0x2b60a476,
    0x81e67400,
    0x08ba6fb5,
    0x571be91f,
    0xf296ec6b,
    0x2a0dd915,
    0xb6636521,
    0xe7b9f9b6,
    0xff34052e,
    0xc5855664,
    0x53b02d5d,
    0xa99f8fa1,
    0x08ba4799,
    0x6e85076a,
    0x4b7a70e9,
    0xb5b32944,
    0xdb75092e,
    0xc4192623,
    0xad6ea6b0,
    0x49a7df7d,
    0x9cee60b8,
    0x8fedb266,
    0xecaa8c71,
    0x699a17ff,
    0x5664526c,
    0xc2b19ee1,
    0x193602a5,
    0x75094c29,
    0xa0591340,
    0xe4183a3e,
    0x3f54989a,
    0x5b429d65,
    0x6b8fe4d6,
    0x99f73fd6,
    0xa1d29c07,
    0xefe830f5,
    0x4d2d38e6,
    0xf0255dc1,
    0x4cdd2086,
    0x8470eb26,
    0x6382e9c6,
    0x021ecc5e,
    0x09686b3f,
    0x3ebaefc9,
    0x3c971814,
    0x6b6a70a1,
    0x687f3584,
    0x52a0e286,
    0xb79c5305,
    0xaa500737,
    0x3e07841c,
    0x7fdeae5c,
    0x8e7d44ec,
    0x5716f2b8,
    0xb03ada37,
    0xf0500c0d,
    0xf01c1f04,
    0x0200b3ff,
    0xae0cf51a,
    0x3cb574b2,
    0x25837a58,
    0xdc0921bd,
    0xd19113f9,
    0x7ca92ff6,
    0x94324773,
    0x22f54701,
    0x3ae5e581,
    0x37c2dadc,
    0xc8b57634,
    0x9af3dda7,
    0xa9446146,
    0x0fd0030e,
    0xecc8c73e,
    0xa4751e41,
    0xe238cd99,
    0x3bea0e2f,
    0x3280bba1,
    0x183eb331,
    0x4e548b38,
    0x4f6db908,
    0x6f420d03,
    0xf60a04bf,
    0x2cb81290,
    0x24977c79,
    0x5679b072,
    0xbcaf89af,
    0xde9a771f,
    0xd9930810,
    0xb38bae12,
    0xdccf3f2e,
    0x5512721f,
    0x2e6b7124,
    0x501adde6,
    0x9f84cd87,
    0x7a584718,
    0x7408da17,
    0xbc9f9abc,
    0xe94b7d8c,
    0xec7aec3a,
    0xdb851dfa,
    0x63094366,
    0xc464c3d2,
    0xef1c1847,
    0x3215d908,
    0xdd433b37,
    0x24c2ba16,
    0x12a14d43,
    0x2a65c451,
    0x50940002,
    0x133ae4dd,
    0x71dff89e,
    0x10314e55,
    0x81ac77d6,
    0x5f11199b,
    0x043556f1,
    0xd7a3c76b,
    0x3c11183b,
    0x5924a509,
    0xf28fe6ed,
    0x97f1fbfa,
    0x9ebabf2c,
    0x1e153c6e,
    0x86e34570,
    0xeae96fb1,
    0x860e5e0a,
    0x5a3e2ab3,
    0x771fe71c,
    0x4e3d06fa,
    0x2965dcb9,
    0x99e71d0f,
    0x803e89d6,
    0x5266c825,
    0x2e4cc978,
    0x9c10b36a,
    0xc6150eba,
    0x94e2ea78,
    0xa5fc3c53,
    0x1e0a2df4,
    0xf2f74ea7,
    0x361d2b3d,
    0x1939260f,
    0x19c27960,
    0x5223a708,
    0xf71312b6,
    0xebadfe6e,
    0xeac31f66,
    0xe3bc4595,
    0xa67bc883,
    0xb17f37d1,
    0x018cff28,
    0xc332ddef,
    0xbe6c5aa5,
    0x65582185,
    0x68ab9802,
    0xeecea50f,
    0xdb2f953b,
    0x2aef7dad,
    0x5b6e2f84,
    0x1521b628,
    0x29076170,
    0xecdd4775,
    0x619f1510,
    0x13cca830,
    0xeb61bd96,
    0x0334fe1e,
    0xaa0363cf,
    0xb5735c90,
    0x4c70a239,
    0xd59e9e0b,
    0xcbaade14,
    0xeecc86bc,
    0x60622ca7,
    0x9cab5cab,
    0xb2f3846e,
    0x648b1eaf,
    0x19bdf0ca,
    0xa02369b9,
    0x655abb50,
    0x40685a32,
    0x3c2ab4b3,
    0x319ee9d5,
    0xc021b8f7,
    0x9b540b19,
    0x875fa099,
    0x95f7997e,
    0x623d7da8,
    0xf837889a,
    0x97e32d77,
    0x11ed935f,
    0x16681281,
    0x0e358829,
    0xc7e61fd6,
    0x96dedfa1,
    0x7858ba99,
    0x57f584a5,
    0x1b227263,
    0x9b83c3ff,
    0x1ac24696,
    0xcdb30aeb,
    0x532e3054,
    0x8fd948e4,
    0x6dbc3128,
    0x58ebf2ef,
    0x34c6ffea,
    0xfe28ed61,
    0xee7c3c73,
    0x5d4a14d9,
    0xe864b7e3,
    0x42105d14,
    0x203e13e0,
    0x45eee2b6,
    0xa3aaabea,
    0xdb6c4f15,
    0xfacb4fd0,
    0xc742f442,
    0xef6abbb5,
    0x654f3b1d,
    0x41cd2105,
    0xd81e799e,
    0x86854dc7,
    0xe44b476a,
    0x3d816250,
    0xcf62a1f2,
    0x5b8d2646,
    0xfc8883a0,
    0xc1c7b6a3,
    0x7f1524c3,
    0x69cb7492,
    0x47848a0b,
    0x5692b285,
    0x095bbf00,
    0xad19489d,
    0x1462b174,
    0x23820e00,
    0x58428d2a,
    0x0c55f5ea,
    0x1dadf43e,
    0x233f7061,
    0x3372f092,
    0x8d937e41,
    0xd65fecf1,
    0x6c223bdb,
    0x7cde3759,
    0xcbee7460,
    0x4085f2a7,
    0xce77326e,
    0xa6078084,
    0x19f8509e,
    0xe8efd855,
    0x61d99735,
    0xa969a7aa,
    0xc50c06c2,
    0x5a04abfc,
    0x800bcadc,
    0x9e447a2e,
    0xc3453484,
    0xfdd56705,
    0x0e1e9ec9,
    0xdb73dbd3,
    0x105588cd,
    0x675fda79,
    0xe3674340,
    0xc5c43465,
    0x713e38d8,
    0x3d28f89e,
    0xf16dff20,
    0x153e21e7,
    0x8fb03d4a,
    0xe6e39f2b,
    0xdb83adf7,
    0xe93d5a68,
    0x948140f7,
    0xf64c261c,
    0x94692934,
    0x411520f7,
    0x7602d4f7,
    0xbcf46b2e,
    0xd4a20068,
    0xd4082471,
    0x3320f46a,
    0x43b7d4b7,
    0x500061af,
    0x1e39f62e,
    0x97244546,
    0x14214f74,
    0xbf8b8840,
    0x4d95fc1d,
    0x96b591af,
    0x70f4ddd3,
    0x66a02f45,
    0xbfbc09ec,
    0x03bd9785,
    0x7fac6dd0,
    0x31cb8504,
    0x96eb27b3,
    0x55fd3941,
    0xda2547e6,
    0xabca0a9a,
    0x28507825,
    0x530429f4,
    0x0a2c86da,
    0xe9b66dfb,
    0x68dc1462,
    0xd7486900,
    0x680ec0a4,
    0x27a18dee,
    0x4f3ffea2,
    0xe887ad8c,
    0xb58ce006,
    0x7af4d6b6,
    0xaace1e7c,
    0xd3375fec,
    0xce78a399,
    0x406b2a42,
    0x20fe9e35,
    0xd9f385b9,
    0xee39d7ab,
    0x3b124e8b,
    0x1dc9faf7,
    0x4b6d1856,
    0x26a36631,
    0xeae397b2,
    0x3a6efa74,
    0xdd5b4332,
    0x6841e7f7,
    0xca7820fb,
    0xfb0af54e,
    0xd8feb397,
    0x454056ac,
    0xba489527,
    0x55533a3a,
    0x20838d87,
    0xfe6ba9b7,
    0xd096954b,
    0x55a867bc,
    0xa1159a58,
    0xcca92963,
    0x99e1db33,
    0xa62a4a56,
    0x3f3125f9,
    0x5ef47e1c,
    0x9029317c,
    0xfdf8e802,
    0x04272f70,
    0x80bb155c,
    0x05282ce3,
    0x95c11548,
    0xe4c66d22,
    0x48c1133f,
    0xc70f86dc,
    0x07f9c9ee,
    0x41041f0f,
    0x404779a4,
    0x5d886e17,
    0x325f51eb,
    0xd59bc0d1,
    0xf2bcc18f,
    0x41113564,
    0x257b7834,
    0x602a9c60,
    0xdff8e8a3,
    0x1f636c1b,
    0x0e12b4c2,
    0x02e1329e,
    0xaf664fd1,
    0xcad18115,
    0x6b2395e0,
    0x333e92e1,
    0x3b240b62,
    0xeebeb922,
    0x85b2a20e,
    0xe6ba0d99,
    0xde720c8c,
    0x2da2f728,
    0xd0127845,
    0x95b794fd,
    0x647d0862,
    0xe7ccf5f0,
    0x5449a36f,
    0x877d48fa,
    0xc39dfd27,
    0xf33e8d1e,
    0x0a476341,
    0x992eff74,
    0x3a6f6eab,
    0xf4f8fd37,
    0xa812dc60,
    0xa1ebddf8,
    0x991be14c,
    0xdb6e6b0d,
    0xc67b5510,
    0x6d672c37,
    0x2765d43b,
    0xdcd0e804,
    0xf1290dc7,
    0xcc00ffa3,
    0xb5390f92,
    0x690fed0b,
    0x667b9ffb,
    0xcedb7d9c,
    0xa091cf0b,
    0xd9155ea3,
    0xbb132f88,
    0x515bad24,
    0x7b9479bf,
    0x763bd6eb,
    0x37392eb3,
    0xcc115979,
    0x8026e297,
    0xf42e312d,
    0x6842ada7,
    0xc66a2b3b,
    0x12754ccc,
    0x782ef11c,
    0x6a124237,
    0xb79251e7,
    0x06a1bbe6,
    0x4bfb6350,
    0x1a6b1018,
    0x11caedfa,
    0x3d25bdd8,
    0xe2e1c3c9,
    0x44421659,
    0x0a121386,
    0xd90cec6e,
    0xd5abea2a,
    0x64af674e,
    0xda86a85f,
    0xbebfe988,
    0x64e4c3fe,
    0x9dbc8057,
    0xf0f7c086,
    0x60787bf8,
    0x6003604d,
    0xd1fd8346,
    0xf6381fb0,
    0x7745ae04,
    0xd736fccc,
    0x83426b33,
    0xf01eab71,
    0xb0804187,
    0x3c005e5f,
    0x77a057be,
    0xbde8ae24,
    0x55464299,
    0xbf582e61,
    0x4e58f48f,
    0xf2ddfda2,
    0xf474ef38,
    0x8789bdc2,
    0x5366f9c3,
    0xc8b38e74,
    0xb475f255,
    0x46fcd9b9,
    0x7aeb2661,
    0x8b1ddf84,
    0x846a0e79,
    0x915f95e2,
    0x466e598e,
    0x20b45770,
    0x8cd55591,
    0xc902de4c,
    0xb90bace1,
    0xbb8205d0,
    0x11a86248,
    0x7574a99e,
    0xb77f19b6,
    0xe0a9dc09,
    0x662d09a1,
    0xc4324633,
    0xe85a1f02,
    0x09f0be8c,
    0x4a99a025,
    0x1d6efe10,
    0x1ab93d1d,
    0x0ba5a4df,
    0xa186f20f,
    0x2868f169,
    0xdcb7da83,
    0x573906fe,
    0xa1e2ce9b,
    0x4fcd7f52,
    0x50115e01,
    0xa70683fa,
    0xa002b5c4,
    0x0de6d027,
    0x9af88c27,
    0x773f8641,
    0xc3604c06,
    0x61a806b5,
    0xf0177a28,
    0xc0f586e0,
    0x006058aa,
    0x30dc7d62,
    0x11e69ed7,
    0x2338ea63,
    0x53c2dd94,
    0xc2c21634,
    0xbbcbee56,
    0x90bcb6de,
    0xebfc7da1,
    0xce591d76,
    0x6f05e409,
    0x4b7c0188,
    0x39720a3d,
    0x7c927c24,
    0x86e3725f,
    0x724d9db9,
    0x1ac15bb4,
    0xd39eb8fc,
    0xed545578,
    0x08fca5b5,
    0xd83d7cd3,
    0x4dad0fc4,
    0x1e50ef5e,
    0xb161e6f8,
    0xa28514d9,
    0x6c51133c,
    0x6fd5c7e7,
    0x56e14ec4,
    0x362abfce,
    0xddc6c837,
    0xd79a3234,
    0x92638212,
    0x670efa8e,
    0x406000e0,
    0x3a39ce37,
    0xd3faf5cf,
    0xabc27737,
    0x5ac52d1b,
    0x5cb0679e,
    0x4fa33742,
    0xd3822740,
    0x99bc9bbe,
    0xd5118e9d,
    0xbf0f7315,
    0xd62d1c7e,
    0xc700c47b,
    0xb78c1b6b,
    0x21a19045,
    0xb26eb1be,
    0x6a366eb4,
    0x5748ab2f,
    0xbc946e79,
    0xc6a376d2,
    0x6549c2c8,
    0x530ff8ee,
    0x468dde7d,
    0xd5730a1d,
    0x4cd04dc6,
    0x2939bbdb,
    0xa9ba4650,
    0xac9526e8,
    0xbe5ee304,
    0xa1fad5f0,
    0x6a2d519a,
    0x63ef8ce2,
    0x9a86ee22,
    0xc089c2b8,
    0x43242ef6,
    0xa51e03aa,
    0x9cf2d0a4,
    0x83c061ba,
    0x9be96a4d,
    0x8fe51550,
    0xba645bd6,
    0x2826a2f9,
    0xa73a3ae1,
    0x4ba99586,
    0xef5562e9,
    0xc72fefd3,
    0xf752f7da,
    0x3f046f69,
    0x77fa0a59,
    0x80e4a915,
    0x87b08601,
    0x9b09e6ad,
    0x3b3ee593,
    0xe990fd5a,
    0x9e34d797,
    0x2cf0b7d9,
    0x022b8b51,
    0x96d5ac3a,
    0x017da67d,
    0xd1cf3ed6,
    0x7c7d2d28,
    0x1f9f25cf,
    0xadf2b89b,
    0x5ad6b472,
    0x5a88f54c,
    0xe029ac71,
    0xe019a5e6,
    0x47b0acfd,
    0xed93fa9b,
    0xe8d3c48d,
    0x283b57cc,
    0xf8d56629,
    0x79132e28,
    0x785f0191,
    0xed756055,
    0xf7960e44,
    0xe3d35e8c,
    0x15056dd4,
    0x88f46dba,
    0x03a16125,
    0x0564f0bd,
    0xc3eb9e15,
    0x3c9057a2,
    0x97271aec,
    0xa93a072a,
    0x1b3f6d9b,
    0x1e6321f5,
    0xf59c66fb,
    0x26dcf319,
    0x7533d928,
    0xb155fdf5,
    0x03563482,
    0x8aba3cbb,
    0x28517711,
    0xc20ad9f8,
    0xabcc5167,
    0xccad925f,
    0x4de81751,
    0x3830dc8e,
    0x379d5862,
    0x9320f991,
    0xea7a90c2,
    0xfb3e7bce,
    0x5121ce64,
    0x774fbe32,
    0xa8b6e37e,
    0xc3293d46,
    0x48de5369,
    0x6413e680,
    0xa2ae0810,
    0xdd6db224,
    0x69852dfd,
    0x09072166,
    0xb39a460a,
    0x6445c0dd,
    0x586cdecf,
    0x1c20c8ae,
    0x5bbef7dd,
    0x1b588d40,
    0xccd2017f,
    0x6bb4e3bb,
    0xdda26a7e,
    0x3a59ff45,
    0x3e350a44,
    0xbcb4cdd5,
    0x72eacea8,
    0xfa6484bb,
    0x8d6612ae,
    0xbf3c6f47,
    0xd29be463,
    0x542f5d9e,
    0xaec2771b,
    0xf64e6370,
    0x740e0d8d,
    0xe75b1357,
    0xf8721671,
    0xaf537d5d,
    0x4040cb08,
    0x4eb4e2cc,
    0x34d2466a,
    0x0115af84,
    0xe1b00428,
    0x95983a1d,
    0x06b89fb4,
    0xce6ea048,
    0x6f3f3b82,
    0x3520ab82,
    0x011a1d4b,
    0x277227f8,
    0x611560b1,
    0xe7933fdc,
    0xbb3a792b,
    0x344525bd,
    0xa08839e1,
    0x51ce794b,
    0x2f32c9b7,
    0xa01fbac9,
    0xe01cc87e,
    0xbcc7d1f6,
    0xcf0111c3,
    0xa1e8aac7,
    0x1a908749,
    0xd44fbd9a,
    0xd0dadecb,
    0xd50ada38,
    0x0339c32a,
    0xc6913667,
    0x8df9317c,
    0xe0b12b4f,
    0xf79e59b7,
    0x43f5bb3a,
    0xf2d519ff,
    0x27d9459c,
    0xbf97222c,
    0x15e6fc2a,
    0x0f91fc71,
    0x9b941525,
    0xfae59361,
    0xceb69ceb,
    0xc2a86459,
    0x12baa8d1,
    0xb6c1075e,
    0xe3056a0c,
    0x10d25065,
    0xcb03a442,
    0xe0ec6e0e,
    0x1698db3b,
    0x4c98a0be,
    0x3278e964,
    0x9f1f9532,
    0xe0d392df,
    0xd3a0342b,
    0x8971f21e,
    0x1b0a7441,
    0x4ba3348c,
    0xc5be7120,
    0xc37632d8,
    0xdf359f8d,
    0x9b992f2e,
    0xe60b6f47,
    0x0fe3f11d,
    0xe54cda54,
    0x1edad891,
    0xce6279cf,
    0xcd3e7e6f,
    0x1618b166,
    0xfd2c1d05,
    0x848fd2c5,
    0xf6fb2299,
    0xf523f357,
    0xa6327623,
    0x93a83531,
    0x56cccd02,
    0xacf08162,
    0x5a75ebb5,
    0x6e163697,
    0x88d273cc,
    0xde966292,
    0x81b949d0,
    0x4c50901b,
    0x71c65614,
    0xe6c6c7bd,
    0x327a140a,
    0x45e1d006,
    0xc3f27b9a,
    0xc9aa53fd,
    0x62a80f00,
    0xbb25bfe2,
    0x35bdd2f6,
    0x71126905,
    0xb2040222,
    0xb6cbcf7c,
    0xcd769c2b,
    0x53113ec0,
    0x1640e3d3,
    0x38abbd60,
    0x2547adf0,
    0xba38209c,
    0xf746ce76,
    0x77afa1c5,
    0x20756060,
    0x85cbfe4e,
    0x8ae88dd8,
    0x7aaaf9b0,
    0x4cf9aa7e,
    0x1948c25c,
    0x02fb8a8c,
    0x01c36ae4,
    0xd6ebe1f9,
    0x90d4f869,
    0xa65cdea0,
    0x3f09252d,
    0xc208e69f,
    0xb74e6132,
    0xce77e25b,
    0x578fdfe3,
    0x3ac372e6
];
/**
 * @type {Array.<number>}
 * @const
 * @inner
 */ var C_ORIG = [
    0x4f727068,
    0x65616e42,
    0x65686f6c,
    0x64657253,
    0x63727944,
    0x6f756274
];
/**
 * @param {Array.<number>} lr
 * @param {number} off
 * @param {Array.<number>} P
 * @param {Array.<number>} S
 * @returns {Array.<number>}
 * @inner
 */ function _encipher(lr, off, P, S) {
    // This is our bottleneck: 1714/1905 ticks / 90% - see profile.txt
    var n, l = lr[off], r = lr[off + 1];
    l ^= P[0];
    /*
    for (var i=0, k=BLOWFISH_NUM_ROUNDS-2; i<=k;)
        // Feistel substitution on left word
        n  = S[l >>> 24],
        n += S[0x100 | ((l >> 16) & 0xff)],
        n ^= S[0x200 | ((l >> 8) & 0xff)],
        n += S[0x300 | (l & 0xff)],
        r ^= n ^ P[++i],
        // Feistel substitution on right word
        n  = S[r >>> 24],
        n += S[0x100 | ((r >> 16) & 0xff)],
        n ^= S[0x200 | ((r >> 8) & 0xff)],
        n += S[0x300 | (r & 0xff)],
        l ^= n ^ P[++i];
    */ //The following is an unrolled version of the above loop.
    //Iteration 0
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[1];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[2];
    //Iteration 1
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[3];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[4];
    //Iteration 2
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[5];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[6];
    //Iteration 3
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[7];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[8];
    //Iteration 4
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[9];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[10];
    //Iteration 5
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[11];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[12];
    //Iteration 6
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[13];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[14];
    //Iteration 7
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[15];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[16];
    lr[off] = r ^ P[BLOWFISH_NUM_ROUNDS + 1];
    lr[off + 1] = l;
    return lr;
}
/**
 * @param {Array.<number>} data
 * @param {number} offp
 * @returns {{key: number, offp: number}}
 * @inner
 */ function _streamtoword(data, offp) {
    for(var i = 0, word = 0; i < 4; ++i)word = word << 8 | data[offp] & 0xff, offp = (offp + 1) % data.length;
    return {
        key: word,
        offp: offp
    };
}
/**
 * @param {Array.<number>} key
 * @param {Array.<number>} P
 * @param {Array.<number>} S
 * @inner
 */ function _key(key, P, S) {
    var offset = 0, lr = [
        0,
        0
    ], plen = P.length, slen = S.length, sw;
    for(var i = 0; i < plen; i++)sw = _streamtoword(key, offset), offset = sw.offp, P[i] = P[i] ^ sw.key;
    for(i = 0; i < plen; i += 2)lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
    for(i = 0; i < slen; i += 2)lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
}
/**
 * Expensive key schedule Blowfish.
 * @param {Array.<number>} data
 * @param {Array.<number>} key
 * @param {Array.<number>} P
 * @param {Array.<number>} S
 * @inner
 */ function _ekskey(data, key, P, S) {
    var offp = 0, lr = [
        0,
        0
    ], plen = P.length, slen = S.length, sw;
    for(var i = 0; i < plen; i++)sw = _streamtoword(key, offp), offp = sw.offp, P[i] = P[i] ^ sw.key;
    offp = 0;
    for(i = 0; i < plen; i += 2)sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
    for(i = 0; i < slen; i += 2)sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
}
/**
 * Internaly crypts a string.
 * @param {Array.<number>} b Bytes to crypt
 * @param {Array.<number>} salt Salt bytes to use
 * @param {number} rounds Number of rounds
 * @param {function(Error, Array.<number>=)=} callback Callback receiving the error, if any, and the resulting bytes. If
 *  omitted, the operation will be performed synchronously.
 *  @param {function(number)=} progressCallback Callback called with the current progress
 * @returns {!Array.<number>|undefined} Resulting bytes if callback has been omitted, otherwise `undefined`
 * @inner
 */ function _crypt(b, salt, rounds, callback, progressCallback) {
    var cdata = C_ORIG.slice(), clen = cdata.length, err;
    // Validate
    if (rounds < 4 || rounds > 31) {
        err = Error("Illegal number of rounds (4-31): " + rounds);
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    if (salt.length !== BCRYPT_SALT_LEN) {
        err = Error("Illegal salt length: " + salt.length + " != " + BCRYPT_SALT_LEN);
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    rounds = 1 << rounds >>> 0;
    var P, S, i = 0, j;
    //Use typed arrays when available - huge speedup!
    if (typeof Int32Array === "function") {
        P = new Int32Array(P_ORIG);
        S = new Int32Array(S_ORIG);
    } else {
        P = P_ORIG.slice();
        S = S_ORIG.slice();
    }
    _ekskey(salt, b, P, S);
    /**
   * Calcualtes the next round.
   * @returns {Array.<number>|undefined} Resulting array if callback has been omitted, otherwise `undefined`
   * @inner
   */ function next() {
        if (progressCallback) progressCallback(i / rounds);
        if (i < rounds) {
            var start = Date.now();
            for(; i < rounds;){
                i = i + 1;
                _key(b, P, S);
                _key(salt, P, S);
                if (Date.now() - start > MAX_EXECUTION_TIME) break;
            }
        } else {
            for(i = 0; i < 64; i++)for(j = 0; j < clen >> 1; j++)_encipher(cdata, j << 1, P, S);
            var ret = [];
            for(i = 0; i < clen; i++)ret.push((cdata[i] >> 24 & 0xff) >>> 0), ret.push((cdata[i] >> 16 & 0xff) >>> 0), ret.push((cdata[i] >> 8 & 0xff) >>> 0), ret.push((cdata[i] & 0xff) >>> 0);
            if (callback) {
                callback(null, ret);
                return;
            } else return ret;
        }
        if (callback) nextTick(next);
    }
    // Async
    if (typeof callback !== "undefined") {
        next();
    // Sync
    } else {
        var res;
        while(true)if (typeof (res = next()) !== "undefined") return res || [];
    }
}
/**
 * Internally hashes a password.
 * @param {string} password Password to hash
 * @param {?string} salt Salt to use, actually never null
 * @param {function(Error, string=)=} callback Callback receiving the error, if any, and the resulting hash. If omitted,
 *  hashing is performed synchronously.
 *  @param {function(number)=} progressCallback Callback called with the current progress
 * @returns {string|undefined} Resulting hash if callback has been omitted, otherwise `undefined`
 * @inner
 */ function _hash(password, salt, callback, progressCallback) {
    var err;
    if (typeof password !== "string" || typeof salt !== "string") {
        err = Error("Invalid string / salt: Not a string");
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    // Validate the salt
    var minor, offset;
    if (salt.charAt(0) !== "$" || salt.charAt(1) !== "2") {
        err = Error("Invalid salt version: " + salt.substring(0, 2));
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    if (salt.charAt(2) === "$") minor = String.fromCharCode(0), offset = 3;
    else {
        minor = salt.charAt(2);
        if (minor !== "a" && minor !== "b" && minor !== "y" || salt.charAt(3) !== "$") {
            err = Error("Invalid salt revision: " + salt.substring(2, 4));
            if (callback) {
                nextTick(callback.bind(this, err));
                return;
            } else throw err;
        }
        offset = 4;
    }
    // Extract number of rounds
    if (salt.charAt(offset + 2) > "$") {
        err = Error("Missing salt rounds");
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    var r1 = parseInt(salt.substring(offset, offset + 1), 10) * 10, r2 = parseInt(salt.substring(offset + 1, offset + 2), 10), rounds = r1 + r2, real_salt = salt.substring(offset + 3, offset + 25);
    password += minor >= "a" ? "\x00" : "";
    var passwordb = utf8Array(password), saltb = base64_decode(real_salt, BCRYPT_SALT_LEN);
    /**
   * Finishes hashing.
   * @param {Array.<number>} bytes Byte array
   * @returns {string}
   * @inner
   */ function finish(bytes) {
        var res = [];
        res.push("$2");
        if (minor >= "a") res.push(minor);
        res.push("$");
        if (rounds < 10) res.push("0");
        res.push(rounds.toString());
        res.push("$");
        res.push(base64_encode(saltb, saltb.length));
        res.push(base64_encode(bytes, C_ORIG.length * 4 - 1));
        return res.join("");
    }
    // Sync
    if (typeof callback == "undefined") return finish(_crypt(passwordb, saltb, rounds));
    else {
        _crypt(passwordb, saltb, rounds, function(err, bytes) {
            if (err) callback(err, null);
            else callback(null, finish(bytes));
        }, progressCallback);
    }
}
function encodeBase64(bytes, length) {
    return base64_encode(bytes, length);
}
function decodeBase64(string, length) {
    return base64_decode(string, length);
}
const __TURBOPACK__default__export__ = {
    setRandomFallback,
    genSaltSync,
    genSalt,
    hashSync,
    hash,
    compareSync,
    compare,
    getRounds,
    getSalt,
    truncates,
    encodeBase64,
    decodeBase64
};
}),
]);

//# sourceMappingURL=ad341_08ca2f66._.js.map