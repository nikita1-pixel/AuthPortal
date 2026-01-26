(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/typeof.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _typeof(o) {
    "@babel/helpers - typeof";
    return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/OverloadYield.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _OverloadYield(e, d) {
    this.v = e, this.k = d;
}
module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regeneratorDefine.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _regeneratorDefine(e, r, n, t) {
    var i = Object.defineProperty;
    try {
        i({}, "", {});
    } catch (e) {
        i = 0;
    }
    module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
        function o(r, n) {
            _regeneratorDefine(e, r, function(e) {
                return this._invoke(r, n, e);
            });
        }
        r ? i ? i(e, r, {
            value: n,
            enumerable: !t,
            configurable: !t,
            writable: !t
        }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e, r, n, t);
}
module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regenerator.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var regeneratorDefine = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regeneratorDefine.js [app-client] (ecmascript)");
function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
        var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype);
        return regeneratorDefine(u, "_invoke", function(r, n, o) {
            var i, c, u, f = 0, p = o || [], y = !1, G = {
                p: 0,
                n: 0,
                v: e,
                a: d,
                f: d.bind(e, 4),
                d: function d(t, r) {
                    return i = t, c = 0, u = e, G.n = r, a;
                }
            };
            function d(r, n) {
                for(c = r, u = n, t = 0; !y && f && !o && t < p.length; t++){
                    var o, i = p[t], d = G.p, l = i[2];
                    r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
                }
                if (o || r > 1) return a;
                throw y = !0, n;
            }
            return function(o, p, l) {
                if (f > 1) throw TypeError("Generator is already running");
                for(y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;){
                    i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
                    try {
                        if (f = 2, i) {
                            if (c || (o = "next"), t = i[o]) {
                                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                                if (!t.done) return t;
                                u = t.value, c < 2 && (c = 0);
                            } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                            i = e;
                        } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
                    } catch (t) {
                        i = e, c = 1, u = t;
                    } finally{
                        f = 1;
                    }
                }
                return {
                    value: t,
                    done: y
                };
            };
        }(r, o, i), !0), u;
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function() {
        return this;
    }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
    function f(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), regeneratorDefine(u), regeneratorDefine(u, o, "Generator"), regeneratorDefine(u, n, function() {
        return this;
    }), regeneratorDefine(u, "toString", function() {
        return "[object Generator]";
    }), (module.exports = _regenerator = function _regenerator() {
        return {
            w: i,
            m: f
        };
    }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var OverloadYield = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/OverloadYield.js [app-client] (ecmascript)");
var regeneratorDefine = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regeneratorDefine.js [app-client] (ecmascript)");
function AsyncIterator(t, e) {
    function n(r, o, i, f) {
        try {
            var c = t[r](o), u = c.value;
            return u instanceof OverloadYield ? e.resolve(u.v).then(function(t) {
                n("next", t, i, f);
            }, function(t) {
                n("throw", t, i, f);
            }) : e.resolve(u).then(function(t) {
                c.value = t, i(c);
            }, function(t) {
                return n("throw", t, i, f);
            });
        } catch (t) {
            f(t);
        }
    }
    var r;
    this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function() {
        return this;
    })), regeneratorDefine(this, "_invoke", function(t, o, i) {
        function f() {
            return new e(function(e, r) {
                n(t, i, e, r);
            });
        }
        return r = r ? r.then(f, f) : f();
    }, !0);
}
module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var regenerator = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regenerator.js [app-client] (ecmascript)");
var regeneratorAsyncIterator = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js [app-client] (ecmascript)");
function _regeneratorAsyncGen(r, e, t, o, n) {
    return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);
}
module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regeneratorAsync.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var regeneratorAsyncGen = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js [app-client] (ecmascript)");
function _regeneratorAsync(n, e, r, t, o) {
    var a = regeneratorAsyncGen(n, e, r, t, o);
    return a.next().then(function(n) {
        return n.done ? n.value : a.next();
    });
}
module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regeneratorKeys.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _regeneratorKeys(e) {
    var n = Object(e), r = [];
    for(var t in n)r.unshift(t);
    return function e() {
        for(; r.length;)if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;
        return e.done = !0, e;
    };
}
module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regeneratorValues.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var _typeof = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/typeof.js [app-client] (ecmascript)")["default"];
function _regeneratorValues(e) {
    if (null != e) {
        var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0;
        if (t) return t.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) return {
            next: function next() {
                return e && r >= e.length && (e = void 0), {
                    value: e && e[r++],
                    done: !e
                };
            }
        };
    }
    throw new TypeError(_typeof(e) + " is not iterable");
}
module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regeneratorRuntime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var OverloadYield = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/OverloadYield.js [app-client] (ecmascript)");
var regenerator = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regenerator.js [app-client] (ecmascript)");
var regeneratorAsync = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regeneratorAsync.js [app-client] (ecmascript)");
var regeneratorAsyncGen = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js [app-client] (ecmascript)");
var regeneratorAsyncIterator = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js [app-client] (ecmascript)");
var regeneratorKeys = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regeneratorKeys.js [app-client] (ecmascript)");
var regeneratorValues = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regeneratorValues.js [app-client] (ecmascript)");
function _regeneratorRuntime() {
    "use strict";
    var r = regenerator(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
    function n(r) {
        var e = "function" == typeof r && r.constructor;
        return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
    }
    var o = {
        "throw": 1,
        "return": 2,
        "break": 3,
        "continue": 3
    };
    function a(r) {
        var e, t;
        return function(n) {
            e || (e = {
                stop: function stop() {
                    return t(n.a, 2);
                },
                "catch": function _catch() {
                    return n.v;
                },
                abrupt: function abrupt(r, e) {
                    return t(n.a, o[r], e);
                },
                delegateYield: function delegateYield(r, o, a) {
                    return e.resultName = o, t(n.d, regeneratorValues(r), a);
                },
                finish: function finish(r) {
                    return t(n.f, r);
                }
            }, t = function t(r, _t, o) {
                n.p = e.prev, n.n = e.next;
                try {
                    return r(_t, o);
                } finally{
                    e.next = n.n;
                }
            }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
            try {
                return r.call(this, e);
            } finally{
                n.p = e.prev, n.n = e.next;
            }
        };
    }
    return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
        return {
            wrap: function wrap(e, t, n, o) {
                return r.w(a(e), t, n, o && o.reverse());
            },
            isGeneratorFunction: n,
            mark: r.m,
            awrap: function awrap(r, e) {
                return new OverloadYield(r, e);
            },
            AsyncIterator: regeneratorAsyncIterator,
            async: function async(r, e, t, o, u) {
                return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);
            },
            keys: regeneratorKeys,
            values: regeneratorValues
        };
    }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/regenerator/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

// TODO(Babel 8): Remove this file.
var runtime = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/regeneratorRuntime.js [app-client] (ecmascript)")();
module.exports = runtime;
// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
    } else {
        Function("r", "regeneratorRuntime = r")(runtime);
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/toPrimitive.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var _typeof = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/typeof.js [app-client] (ecmascript)")["default"];
function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/toPropertyKey.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var _typeof = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/typeof.js [app-client] (ecmascript)")["default"];
var toPrimitive = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/toPrimitive.js [app-client] (ecmascript)");
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/defineProperty.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var toPropertyKey = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/toPropertyKey.js [app-client] (ecmascript)");
function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/asyncToGenerator.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n) {
        return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
            }
            function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
            }
            _next(void 0);
        });
    };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/arrayWithHoles.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/arrayLikeToArray.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var arrayLikeToArray = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/arrayLikeToArray.js [app-client] (ecmascript)");
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
    }
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/nonIterableRest.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/slicedToArray.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var arrayWithHoles = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/arrayWithHoles.js [app-client] (ecmascript)");
var iterableToArrayLimit = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js [app-client] (ecmascript)");
var unsupportedIterableToArray = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js [app-client] (ecmascript)");
var nonIterableRest = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/nonIterableRest.js [app-client] (ecmascript)");
function _slicedToArray(r, e) {
    return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/classCallCheck.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/createClass.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var toPropertyKey = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/toPropertyKey.js [app-client] (ecmascript)");
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/assertThisInitialized.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var _typeof = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/typeof.js [app-client] (ecmascript)")["default"];
var assertThisInitialized = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/assertThisInitialized.js [app-client] (ecmascript)");
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return assertThisInitialized(t);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/getPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _getPrototypeOf(t) {
    return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf(t);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/setPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _setPrototypeOf(t, e) {
    return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/inherits.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var setPrototypeOf = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/setPrototypeOf.js [app-client] (ecmascript)");
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && setPrototypeOf(t, e);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/isNativeFunction.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _isNativeFunction(t) {
    try {
        return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
        return "function" == typeof t;
    }
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/construct.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var isNativeReflectConstruct = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js [app-client] (ecmascript)");
var setPrototypeOf = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/setPrototypeOf.js [app-client] (ecmascript)");
function _construct(t, e, r) {
    if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [
        null
    ];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && setPrototypeOf(p, r.prototype), p;
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/wrapNativeSuper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var getPrototypeOf = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/getPrototypeOf.js [app-client] (ecmascript)");
var setPrototypeOf = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/setPrototypeOf.js [app-client] (ecmascript)");
var isNativeFunction = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/isNativeFunction.js [app-client] (ecmascript)");
var construct = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/construct.js [app-client] (ecmascript)");
function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return module.exports = _wrapNativeSuper = function _wrapNativeSuper(t) {
        if (null === t || !isNativeFunction(t)) return t;
        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== r) {
            if (r.has(t)) return r.get(t);
            r.set(t, Wrapper);
        }
        function Wrapper() {
            return construct(t, arguments, getPrototypeOf(this).constructor);
        }
        return Wrapper.prototype = Object.create(t.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), setPrototypeOf(Wrapper, t);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _wrapNativeSuper(t);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next-auth/core/errors.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnsupportedStrategy = exports.UnknownError = exports.OAuthCallbackError = exports.MissingSecret = exports.MissingAuthorize = exports.MissingAdapterMethods = exports.MissingAdapter = exports.MissingAPIRoute = exports.InvalidCallbackUrl = exports.AccountNotLinkedError = void 0;
exports.adapterErrorHandler = adapterErrorHandler;
exports.capitalize = capitalize;
exports.eventsErrorHandler = eventsErrorHandler;
exports.upperSnake = upperSnake;
var _regenerator = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/regenerator/index.js [app-client] (ecmascript)"));
var _asyncToGenerator2 = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/asyncToGenerator.js [app-client] (ecmascript)"));
var _defineProperty2 = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/defineProperty.js [app-client] (ecmascript)"));
var _classCallCheck2 = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/classCallCheck.js [app-client] (ecmascript)"));
var _createClass2 = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/createClass.js [app-client] (ecmascript)"));
var _possibleConstructorReturn2 = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js [app-client] (ecmascript)"));
var _getPrototypeOf2 = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/getPrototypeOf.js [app-client] (ecmascript)"));
var _inherits2 = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/inherits.js [app-client] (ecmascript)"));
var _wrapNativeSuper2 = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/wrapNativeSuper.js [app-client] (ecmascript)"));
function _callSuper(t, o, e) {
    return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
var UnknownError = exports.UnknownError = function(_Error) {
    function UnknownError(error) {
        var _message;
        var _this;
        (0, _classCallCheck2.default)(this, UnknownError);
        _this = _callSuper(this, UnknownError, [
            (_message = error === null || error === void 0 ? void 0 : error.message) !== null && _message !== void 0 ? _message : error
        ]);
        _this.name = "UnknownError";
        _this.code = error.code;
        if (error instanceof Error) {
            _this.stack = error.stack;
        }
        return _this;
    }
    (0, _inherits2.default)(UnknownError, _Error);
    return (0, _createClass2.default)(UnknownError, [
        {
            key: "toJSON",
            value: function toJSON() {
                return {
                    name: this.name,
                    message: this.message,
                    stack: this.stack
                };
            }
        }
    ]);
}((0, _wrapNativeSuper2.default)(Error));
var OAuthCallbackError = exports.OAuthCallbackError = function(_UnknownError) {
    function OAuthCallbackError() {
        var _this2;
        (0, _classCallCheck2.default)(this, OAuthCallbackError);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this2 = _callSuper(this, OAuthCallbackError, [].concat(args));
        (0, _defineProperty2.default)(_this2, "name", "OAuthCallbackError");
        return _this2;
    }
    (0, _inherits2.default)(OAuthCallbackError, _UnknownError);
    return (0, _createClass2.default)(OAuthCallbackError);
}(UnknownError);
var AccountNotLinkedError = exports.AccountNotLinkedError = function(_UnknownError2) {
    function AccountNotLinkedError() {
        var _this3;
        (0, _classCallCheck2.default)(this, AccountNotLinkedError);
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
            args[_key2] = arguments[_key2];
        }
        _this3 = _callSuper(this, AccountNotLinkedError, [].concat(args));
        (0, _defineProperty2.default)(_this3, "name", "AccountNotLinkedError");
        return _this3;
    }
    (0, _inherits2.default)(AccountNotLinkedError, _UnknownError2);
    return (0, _createClass2.default)(AccountNotLinkedError);
}(UnknownError);
var MissingAPIRoute = exports.MissingAPIRoute = function(_UnknownError3) {
    function MissingAPIRoute() {
        var _this4;
        (0, _classCallCheck2.default)(this, MissingAPIRoute);
        for(var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++){
            args[_key3] = arguments[_key3];
        }
        _this4 = _callSuper(this, MissingAPIRoute, [].concat(args));
        (0, _defineProperty2.default)(_this4, "name", "MissingAPIRouteError");
        (0, _defineProperty2.default)(_this4, "code", "MISSING_NEXTAUTH_API_ROUTE_ERROR");
        return _this4;
    }
    (0, _inherits2.default)(MissingAPIRoute, _UnknownError3);
    return (0, _createClass2.default)(MissingAPIRoute);
}(UnknownError);
var MissingSecret = exports.MissingSecret = function(_UnknownError4) {
    function MissingSecret() {
        var _this5;
        (0, _classCallCheck2.default)(this, MissingSecret);
        for(var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++){
            args[_key4] = arguments[_key4];
        }
        _this5 = _callSuper(this, MissingSecret, [].concat(args));
        (0, _defineProperty2.default)(_this5, "name", "MissingSecretError");
        (0, _defineProperty2.default)(_this5, "code", "NO_SECRET");
        return _this5;
    }
    (0, _inherits2.default)(MissingSecret, _UnknownError4);
    return (0, _createClass2.default)(MissingSecret);
}(UnknownError);
var MissingAuthorize = exports.MissingAuthorize = function(_UnknownError5) {
    function MissingAuthorize() {
        var _this6;
        (0, _classCallCheck2.default)(this, MissingAuthorize);
        for(var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++){
            args[_key5] = arguments[_key5];
        }
        _this6 = _callSuper(this, MissingAuthorize, [].concat(args));
        (0, _defineProperty2.default)(_this6, "name", "MissingAuthorizeError");
        (0, _defineProperty2.default)(_this6, "code", "CALLBACK_CREDENTIALS_HANDLER_ERROR");
        return _this6;
    }
    (0, _inherits2.default)(MissingAuthorize, _UnknownError5);
    return (0, _createClass2.default)(MissingAuthorize);
}(UnknownError);
var MissingAdapter = exports.MissingAdapter = function(_UnknownError6) {
    function MissingAdapter() {
        var _this7;
        (0, _classCallCheck2.default)(this, MissingAdapter);
        for(var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++){
            args[_key6] = arguments[_key6];
        }
        _this7 = _callSuper(this, MissingAdapter, [].concat(args));
        (0, _defineProperty2.default)(_this7, "name", "MissingAdapterError");
        (0, _defineProperty2.default)(_this7, "code", "EMAIL_REQUIRES_ADAPTER_ERROR");
        return _this7;
    }
    (0, _inherits2.default)(MissingAdapter, _UnknownError6);
    return (0, _createClass2.default)(MissingAdapter);
}(UnknownError);
var MissingAdapterMethods = exports.MissingAdapterMethods = function(_UnknownError7) {
    function MissingAdapterMethods() {
        var _this8;
        (0, _classCallCheck2.default)(this, MissingAdapterMethods);
        for(var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++){
            args[_key7] = arguments[_key7];
        }
        _this8 = _callSuper(this, MissingAdapterMethods, [].concat(args));
        (0, _defineProperty2.default)(_this8, "name", "MissingAdapterMethodsError");
        (0, _defineProperty2.default)(_this8, "code", "MISSING_ADAPTER_METHODS_ERROR");
        return _this8;
    }
    (0, _inherits2.default)(MissingAdapterMethods, _UnknownError7);
    return (0, _createClass2.default)(MissingAdapterMethods);
}(UnknownError);
var UnsupportedStrategy = exports.UnsupportedStrategy = function(_UnknownError8) {
    function UnsupportedStrategy() {
        var _this9;
        (0, _classCallCheck2.default)(this, UnsupportedStrategy);
        for(var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++){
            args[_key8] = arguments[_key8];
        }
        _this9 = _callSuper(this, UnsupportedStrategy, [].concat(args));
        (0, _defineProperty2.default)(_this9, "name", "UnsupportedStrategyError");
        (0, _defineProperty2.default)(_this9, "code", "CALLBACK_CREDENTIALS_JWT_ERROR");
        return _this9;
    }
    (0, _inherits2.default)(UnsupportedStrategy, _UnknownError8);
    return (0, _createClass2.default)(UnsupportedStrategy);
}(UnknownError);
var InvalidCallbackUrl = exports.InvalidCallbackUrl = function(_UnknownError9) {
    function InvalidCallbackUrl() {
        var _this10;
        (0, _classCallCheck2.default)(this, InvalidCallbackUrl);
        for(var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++){
            args[_key9] = arguments[_key9];
        }
        _this10 = _callSuper(this, InvalidCallbackUrl, [].concat(args));
        (0, _defineProperty2.default)(_this10, "name", "InvalidCallbackUrl");
        (0, _defineProperty2.default)(_this10, "code", "INVALID_CALLBACK_URL_ERROR");
        return _this10;
    }
    (0, _inherits2.default)(InvalidCallbackUrl, _UnknownError9);
    return (0, _createClass2.default)(InvalidCallbackUrl);
}(UnknownError);
function upperSnake(s) {
    return s.replace(/([A-Z])/g, "_$1").toUpperCase();
}
function capitalize(s) {
    return "".concat(s[0].toUpperCase()).concat(s.slice(1));
}
function eventsErrorHandler(methods, logger) {
    return Object.keys(methods).reduce(function(acc, name) {
        acc[name] = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee() {
            var method, _args = arguments;
            return _regenerator.default.wrap(function _callee$(_context) {
                while(1)switch(_context.prev = _context.next){
                    case 0:
                        _context.prev = 0;
                        method = methods[name];
                        _context.next = 4;
                        return method.apply(void 0, _args);
                    case 4:
                        return _context.abrupt("return", _context.sent);
                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context["catch"](0);
                        logger.error("".concat(upperSnake(name), "_EVENT_ERROR"), _context.t0);
                    case 10:
                    case "end":
                        return _context.stop();
                }
            }, _callee, null, [
                [
                    0,
                    7
                ]
            ]);
        }));
        return acc;
    }, {});
}
function adapterErrorHandler(adapter, logger) {
    if (!adapter) return;
    return Object.keys(adapter).reduce(function(acc, name) {
        acc[name] = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee2() {
            var _len10, args, _key10, method, e, _args2 = arguments;
            return _regenerator.default.wrap(function _callee2$(_context2) {
                while(1)switch(_context2.prev = _context2.next){
                    case 0:
                        _context2.prev = 0;
                        for(_len10 = _args2.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++){
                            args[_key10] = _args2[_key10];
                        }
                        logger.debug("adapter_".concat(name), {
                            args: args
                        });
                        method = adapter[name];
                        _context2.next = 6;
                        return method.apply(void 0, args);
                    case 6:
                        return _context2.abrupt("return", _context2.sent);
                    case 9:
                        _context2.prev = 9;
                        _context2.t0 = _context2["catch"](0);
                        logger.error("adapter_error_".concat(name), _context2.t0);
                        e = new UnknownError(_context2.t0);
                        e.name = "".concat(capitalize(name), "Error");
                        throw e;
                    case 15:
                    case "end":
                        return _context2.stop();
                }
            }, _callee2, null, [
                [
                    0,
                    9
                ]
            ]);
        }));
        return acc;
    }, {});
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next-auth/utils/logger.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
exports.proxyLogger = proxyLogger;
exports.setLogger = setLogger;
var _regenerator = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/regenerator/index.js [app-client] (ecmascript)"));
var _defineProperty2 = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/defineProperty.js [app-client] (ecmascript)"));
var _asyncToGenerator2 = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/asyncToGenerator.js [app-client] (ecmascript)"));
var _errors = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next-auth/core/errors.js [app-client] (ecmascript)");
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            (0, _defineProperty2.default)(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function formatError(o) {
    if (o instanceof Error && !(o instanceof _errors.UnknownError)) {
        return {
            message: o.message,
            stack: o.stack,
            name: o.name
        };
    }
    if (hasErrorProperty(o)) {
        var _o$message;
        o.error = formatError(o.error);
        o.message = (_o$message = o.message) !== null && _o$message !== void 0 ? _o$message : o.error.message;
    }
    return o;
}
function hasErrorProperty(x) {
    return !!(x !== null && x !== void 0 && x.error);
}
var _logger = {
    error: function error(code, metadata) {
        metadata = formatError(metadata);
        console.error("[next-auth][error][".concat(code, "]"), "\nhttps://next-auth.js.org/errors#".concat(code.toLowerCase()), metadata.message, metadata);
    },
    warn: function warn(code) {
        console.warn("[next-auth][warn][".concat(code, "]"), "\nhttps://next-auth.js.org/warnings#".concat(code.toLowerCase()));
    },
    debug: function debug(code, metadata) {
        console.log("[next-auth][debug][".concat(code, "]"), metadata);
    }
};
function setLogger() {
    var newLogger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var debug = arguments.length > 1 ? arguments[1] : undefined;
    if (!debug) _logger.debug = function() {};
    if (newLogger.error) _logger.error = newLogger.error;
    if (newLogger.warn) _logger.warn = newLogger.warn;
    if (newLogger.debug) _logger.debug = newLogger.debug;
}
var _default = exports.default = _logger;
function proxyLogger() {
    var logger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _logger;
    var basePath = arguments.length > 1 ? arguments[1] : undefined;
    try {
        if (typeof window === "undefined") {
            return logger;
        }
        var clientLogger = {};
        var _loop = function _loop(level) {
            clientLogger[level] = function() {
                var _ref = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee(code, metadata) {
                    var url, body;
                    return _regenerator.default.wrap(function _callee$(_context) {
                        while(1)switch(_context.prev = _context.next){
                            case 0:
                                _logger[level](code, metadata);
                                if (level === "error") {
                                    metadata = formatError(metadata);
                                }
                                ;
                                metadata.client = true;
                                url = "".concat(basePath, "/_log");
                                body = new URLSearchParams(_objectSpread({
                                    level: level,
                                    code: code
                                }, metadata));
                                if (!navigator.sendBeacon) {
                                    _context.next = 8;
                                    break;
                                }
                                return _context.abrupt("return", navigator.sendBeacon(url, body));
                            case 8:
                                _context.next = 10;
                                return fetch(url, {
                                    method: "POST",
                                    body: body,
                                    keepalive: true
                                });
                            case 10:
                                return _context.abrupt("return", _context.sent);
                            case 11:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee);
                }));
                return function(_x, _x2) {
                    return _ref.apply(this, arguments);
                };
            }();
        };
        for(var level in logger){
            _loop(level);
        }
        return clientLogger;
    } catch (_unused) {
        return _logger;
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next-auth/utils/parse-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = parseUrl;
function parseUrl(url) {
    var _url2;
    const defaultUrl = new URL("http://localhost:3000/api/auth");
    if (url && !url.startsWith("http")) {
        url = `https://${url}`;
    }
    const _url = new URL((_url2 = url) !== null && _url2 !== void 0 ? _url2 : defaultUrl);
    const path = (_url.pathname === "/" ? defaultUrl.pathname : _url.pathname).replace(/\/$/, "");
    const base = `${_url.origin}${path}`;
    return {
        origin: _url.origin,
        host: _url.host,
        path,
        base,
        toString: ()=>base
    };
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next-auth/client/_utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BroadcastChannel = BroadcastChannel;
exports.apiBaseUrl = apiBaseUrl;
exports.fetchData = fetchData;
exports.now = now;
var _regenerator = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/regenerator/index.js [app-client] (ecmascript)"));
var _defineProperty2 = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/defineProperty.js [app-client] (ecmascript)"));
var _asyncToGenerator2 = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/asyncToGenerator.js [app-client] (ecmascript)"));
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            (0, _defineProperty2.default)(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function fetchData(_x, _x2, _x3) {
    return _fetchData.apply(this, arguments);
}
function _fetchData() {
    _fetchData = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee(path, __NEXTAUTH, logger) {
        var _ref, ctx, _ref$req, req, url, _req$headers, options, res, data, _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
            while(1)switch(_context.prev = _context.next){
                case 0:
                    _ref = _args.length > 3 && _args[3] !== undefined ? _args[3] : {}, ctx = _ref.ctx, _ref$req = _ref.req, req = _ref$req === void 0 ? ctx === null || ctx === void 0 ? void 0 : ctx.req : _ref$req;
                    url = "".concat(apiBaseUrl(__NEXTAUTH), "/").concat(path);
                    _context.prev = 2;
                    options = {
                        headers: _objectSpread({
                            "Content-Type": "application/json"
                        }, req !== null && req !== void 0 && (_req$headers = req.headers) !== null && _req$headers !== void 0 && _req$headers.cookie ? {
                            cookie: req.headers.cookie
                        } : {})
                    };
                    if (req !== null && req !== void 0 && req.body) {
                        options.body = JSON.stringify(req.body);
                        options.method = "POST";
                    }
                    _context.next = 7;
                    return fetch(url, options);
                case 7:
                    res = _context.sent;
                    _context.next = 10;
                    return res.json();
                case 10:
                    data = _context.sent;
                    if (res.ok) {
                        _context.next = 13;
                        break;
                    }
                    throw data;
                case 13:
                    return _context.abrupt("return", Object.keys(data).length > 0 ? data : null);
                case 16:
                    _context.prev = 16;
                    _context.t0 = _context["catch"](2);
                    logger.error("CLIENT_FETCH_ERROR", {
                        error: _context.t0,
                        url: url
                    });
                    return _context.abrupt("return", null);
                case 20:
                case "end":
                    return _context.stop();
            }
        }, _callee, null, [
            [
                2,
                16
            ]
        ]);
    }));
    return _fetchData.apply(this, arguments);
}
function apiBaseUrl(__NEXTAUTH) {
    if (typeof window === "undefined") {
        return "".concat(__NEXTAUTH.baseUrlServer).concat(__NEXTAUTH.basePathServer);
    }
    return __NEXTAUTH.basePath;
}
function now() {
    return Math.floor(Date.now() / 1000);
}
function BroadcastChannel() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "nextauth.message";
    return {
        receive: function receive(onReceive) {
            var handler = function handler(event) {
                var _event$newValue;
                if (event.key !== name) return;
                var message = JSON.parse((_event$newValue = event.newValue) !== null && _event$newValue !== void 0 ? _event$newValue : "{}");
                if ((message === null || message === void 0 ? void 0 : message.event) !== "session" || !(message !== null && message !== void 0 && message.data)) return;
                onReceive(message);
            };
            window.addEventListener("storage", handler);
            return function() {
                return window.removeEventListener("storage", handler);
            };
        },
        post: function post(message) {
            if (typeof window === "undefined") return;
            try {
                localStorage.setItem(name, JSON.stringify(_objectSpread(_objectSpread({}, message), {}, {
                    timestamp: now()
                })));
            } catch (_unused) {}
        }
    };
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next-auth/react/types.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next-auth/react/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _interopRequireDefault = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)");
var _typeof = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/typeof.js [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _exportNames = {
    SessionContext: true,
    useSession: true,
    getSession: true,
    getCsrfToken: true,
    getProviders: true,
    signIn: true,
    signOut: true,
    SessionProvider: true
};
exports.SessionContext = void 0;
exports.SessionProvider = SessionProvider;
exports.getCsrfToken = getCsrfToken;
exports.getProviders = getProviders;
exports.getSession = getSession;
exports.signIn = signIn;
exports.signOut = signOut;
exports.useSession = useSession;
var _regenerator = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/regenerator/index.js [app-client] (ecmascript)"));
var _defineProperty2 = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/defineProperty.js [app-client] (ecmascript)"));
var _asyncToGenerator2 = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/asyncToGenerator.js [app-client] (ecmascript)"));
var _slicedToArray2 = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@babel/runtime/helpers/slicedToArray.js [app-client] (ecmascript)"));
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _logger2 = _interopRequireWildcard(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next-auth/utils/logger.js [app-client] (ecmascript)"));
var _parseUrl = _interopRequireDefault(__turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next-auth/utils/parse-url.js [app-client] (ecmascript)"));
var _utils = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next-auth/client/_utils.js [app-client] (ecmascript)");
var _jsxRuntime = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _types = __turbopack_context__.r("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next-auth/react/types.js [app-client] (ecmascript)");
Object.keys(_types).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === _types[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _types[key];
        }
    });
});
var _process$env$NEXTAUTH, _ref, _process$env$NEXTAUTH2, _process$env$NEXTAUTH3, _React$createContext;
function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), t = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
        return e ? t : r;
    })(e);
}
function _interopRequireWildcard(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
    };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = {
        __proto__: null
    }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var u in e)if ("default" !== u && ({}).hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            (0, _defineProperty2.default)(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
var __NEXTAUTH = {
    baseUrl: (0, _parseUrl.default)((_process$env$NEXTAUTH = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_URL) !== null && _process$env$NEXTAUTH !== void 0 ? _process$env$NEXTAUTH : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.VERCEL_URL).origin,
    basePath: (0, _parseUrl.default)(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_URL).path,
    baseUrlServer: (0, _parseUrl.default)((_ref = (_process$env$NEXTAUTH2 = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_URL_INTERNAL) !== null && _process$env$NEXTAUTH2 !== void 0 ? _process$env$NEXTAUTH2 : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_URL) !== null && _ref !== void 0 ? _ref : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.VERCEL_URL).origin,
    basePathServer: (0, _parseUrl.default)((_process$env$NEXTAUTH3 = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_URL_INTERNAL) !== null && _process$env$NEXTAUTH3 !== void 0 ? _process$env$NEXTAUTH3 : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_URL).path,
    _lastSync: 0,
    _session: undefined,
    _getSession: function _getSession() {}
};
var broadcast = (0, _utils.BroadcastChannel)();
var logger = (0, _logger2.proxyLogger)(_logger2.default, __NEXTAUTH.basePath);
function useOnline() {
    var _React$useState = React.useState(typeof navigator !== "undefined" ? navigator.onLine : false), _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2), isOnline = _React$useState2[0], setIsOnline = _React$useState2[1];
    var setOnline = function setOnline() {
        return setIsOnline(true);
    };
    var setOffline = function setOffline() {
        return setIsOnline(false);
    };
    React.useEffect({
        "useOnline.useEffect": function() {
            window.addEventListener("online", setOnline);
            window.addEventListener("offline", setOffline);
            return ({
                "useOnline.useEffect": function() {
                    window.removeEventListener("online", setOnline);
                    window.removeEventListener("offline", setOffline);
                }
            })["useOnline.useEffect"];
        }
    }["useOnline.useEffect"], []);
    return isOnline;
}
var SessionContext = exports.SessionContext = (_React$createContext = React.createContext) === null || _React$createContext === void 0 ? void 0 : _React$createContext.call(React, undefined);
function useSession(options) {
    if (!SessionContext) {
        throw new Error("React Context is unavailable in Server Components");
    }
    var value = React.useContext(SessionContext);
    if (!value && ("TURBOPACK compile-time value", "development") !== "production") {
        throw new Error("[next-auth]: `useSession` must be wrapped in a <SessionProvider />");
    }
    var _ref2 = options !== null && options !== void 0 ? options : {}, required = _ref2.required, onUnauthenticated = _ref2.onUnauthenticated;
    var requiredAndNotLoading = required && value.status === "unauthenticated";
    React.useEffect({
        "useSession.useEffect": function() {
            if (requiredAndNotLoading) {
                var url = "/api/auth/signin?".concat(new URLSearchParams({
                    error: "SessionRequired",
                    callbackUrl: window.location.href
                }));
                if (onUnauthenticated) onUnauthenticated();
                else window.location.href = url;
            }
        }
    }["useSession.useEffect"], [
        requiredAndNotLoading,
        onUnauthenticated
    ]);
    if (requiredAndNotLoading) {
        return {
            data: value.data,
            update: value.update,
            status: "loading"
        };
    }
    return value;
}
function getSession(_x) {
    return _getSession2.apply(this, arguments);
}
function _getSession2() {
    _getSession2 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee3(params) {
        var _params$broadcast;
        var session;
        return _regenerator.default.wrap(function _callee3$(_context3) {
            while(1)switch(_context3.prev = _context3.next){
                case 0:
                    _context3.next = 2;
                    return (0, _utils.fetchData)("session", __NEXTAUTH, logger, params);
                case 2:
                    session = _context3.sent;
                    if ((_params$broadcast = params === null || params === void 0 ? void 0 : params.broadcast) !== null && _params$broadcast !== void 0 ? _params$broadcast : true) {
                        broadcast.post({
                            event: "session",
                            data: {
                                trigger: "getSession"
                            }
                        });
                    }
                    return _context3.abrupt("return", session);
                case 5:
                case "end":
                    return _context3.stop();
            }
        }, _callee3);
    }));
    return _getSession2.apply(this, arguments);
}
function getCsrfToken(_x2) {
    return _getCsrfToken.apply(this, arguments);
}
function _getCsrfToken() {
    _getCsrfToken = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee4(params) {
        var response;
        return _regenerator.default.wrap(function _callee4$(_context4) {
            while(1)switch(_context4.prev = _context4.next){
                case 0:
                    _context4.next = 2;
                    return (0, _utils.fetchData)("csrf", __NEXTAUTH, logger, params);
                case 2:
                    response = _context4.sent;
                    return _context4.abrupt("return", response === null || response === void 0 ? void 0 : response.csrfToken);
                case 4:
                case "end":
                    return _context4.stop();
            }
        }, _callee4);
    }));
    return _getCsrfToken.apply(this, arguments);
}
function getProviders() {
    return _getProviders.apply(this, arguments);
}
function _getProviders() {
    _getProviders = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee5() {
        return _regenerator.default.wrap(function _callee5$(_context5) {
            while(1)switch(_context5.prev = _context5.next){
                case 0:
                    _context5.next = 2;
                    return (0, _utils.fetchData)("providers", __NEXTAUTH, logger);
                case 2:
                    return _context5.abrupt("return", _context5.sent);
                case 3:
                case "end":
                    return _context5.stop();
            }
        }, _callee5);
    }));
    return _getProviders.apply(this, arguments);
}
function signIn(_x3, _x4, _x5) {
    return _signIn.apply(this, arguments);
}
function _signIn() {
    _signIn = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee6(provider, options, authorizationParams) {
        var _ref5, _ref5$callbackUrl, callbackUrl, _ref5$redirect, redirect, baseUrl, providers, isCredentials, isEmail, isSupportingReturn, signInUrl, _signInUrl, res, data, _data$url, url, error;
        return _regenerator.default.wrap(function _callee6$(_context6) {
            while(1)switch(_context6.prev = _context6.next){
                case 0:
                    _ref5 = options !== null && options !== void 0 ? options : {}, _ref5$callbackUrl = _ref5.callbackUrl, callbackUrl = _ref5$callbackUrl === void 0 ? window.location.href : _ref5$callbackUrl, _ref5$redirect = _ref5.redirect, redirect = _ref5$redirect === void 0 ? true : _ref5$redirect;
                    baseUrl = (0, _utils.apiBaseUrl)(__NEXTAUTH);
                    _context6.next = 4;
                    return getProviders();
                case 4:
                    providers = _context6.sent;
                    if (providers) {
                        _context6.next = 8;
                        break;
                    }
                    window.location.href = "".concat(baseUrl, "/error");
                    return _context6.abrupt("return");
                case 8:
                    if (!(!provider || !(provider in providers))) {
                        _context6.next = 11;
                        break;
                    }
                    window.location.href = "".concat(baseUrl, "/signin?").concat(new URLSearchParams({
                        callbackUrl: callbackUrl
                    }));
                    return _context6.abrupt("return");
                case 11:
                    isCredentials = providers[provider].type === "credentials";
                    isEmail = providers[provider].type === "email";
                    isSupportingReturn = isCredentials || isEmail;
                    signInUrl = "".concat(baseUrl, "/").concat(isCredentials ? "callback" : "signin", "/").concat(provider);
                    _signInUrl = "".concat(signInUrl).concat(authorizationParams ? "?".concat(new URLSearchParams(authorizationParams)) : "");
                    _context6.t0 = fetch;
                    _context6.t1 = _signInUrl;
                    _context6.t2 = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };
                    _context6.t3 = URLSearchParams;
                    _context6.t4 = _objectSpread;
                    _context6.t5 = _objectSpread({}, options);
                    _context6.t6 = {};
                    _context6.next = 25;
                    return getCsrfToken();
                case 25:
                    _context6.t7 = _context6.sent;
                    _context6.t8 = callbackUrl;
                    _context6.t9 = {
                        csrfToken: _context6.t7,
                        callbackUrl: _context6.t8,
                        json: true
                    };
                    _context6.t10 = (0, _context6.t4)(_context6.t5, _context6.t6, _context6.t9);
                    _context6.t11 = new _context6.t3(_context6.t10);
                    _context6.t12 = {
                        method: "post",
                        headers: _context6.t2,
                        body: _context6.t11
                    };
                    _context6.next = 33;
                    return (0, _context6.t0)(_context6.t1, _context6.t12);
                case 33:
                    res = _context6.sent;
                    _context6.next = 36;
                    return res.json();
                case 36:
                    data = _context6.sent;
                    if (!(redirect || !isSupportingReturn)) {
                        _context6.next = 42;
                        break;
                    }
                    url = (_data$url = data.url) !== null && _data$url !== void 0 ? _data$url : callbackUrl;
                    window.location.href = url;
                    if (url.includes("#")) window.location.reload();
                    return _context6.abrupt("return");
                case 42:
                    error = new URL(data.url).searchParams.get("error");
                    if (!res.ok) {
                        _context6.next = 46;
                        break;
                    }
                    _context6.next = 46;
                    return __NEXTAUTH._getSession({
                        event: "storage"
                    });
                case 46:
                    return _context6.abrupt("return", {
                        error: error,
                        status: res.status,
                        ok: res.ok,
                        url: error ? null : data.url
                    });
                case 47:
                case "end":
                    return _context6.stop();
            }
        }, _callee6);
    }));
    return _signIn.apply(this, arguments);
}
function signOut(_x6) {
    return _signOut.apply(this, arguments);
}
function _signOut() {
    _signOut = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee7(options) {
        var _options$redirect;
        var _ref6, _ref6$callbackUrl, callbackUrl, baseUrl, fetchOptions, res, data, _data$url2, url;
        return _regenerator.default.wrap(function _callee7$(_context7) {
            while(1)switch(_context7.prev = _context7.next){
                case 0:
                    _ref6 = options !== null && options !== void 0 ? options : {}, _ref6$callbackUrl = _ref6.callbackUrl, callbackUrl = _ref6$callbackUrl === void 0 ? window.location.href : _ref6$callbackUrl;
                    baseUrl = (0, _utils.apiBaseUrl)(__NEXTAUTH);
                    _context7.t0 = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };
                    _context7.t1 = URLSearchParams;
                    _context7.next = 6;
                    return getCsrfToken();
                case 6:
                    _context7.t2 = _context7.sent;
                    _context7.t3 = callbackUrl;
                    _context7.t4 = {
                        csrfToken: _context7.t2,
                        callbackUrl: _context7.t3,
                        json: true
                    };
                    _context7.t5 = new _context7.t1(_context7.t4);
                    fetchOptions = {
                        method: "post",
                        headers: _context7.t0,
                        body: _context7.t5
                    };
                    _context7.next = 13;
                    return fetch("".concat(baseUrl, "/signout"), fetchOptions);
                case 13:
                    res = _context7.sent;
                    _context7.next = 16;
                    return res.json();
                case 16:
                    data = _context7.sent;
                    broadcast.post({
                        event: "session",
                        data: {
                            trigger: "signout"
                        }
                    });
                    if (!((_options$redirect = options === null || options === void 0 ? void 0 : options.redirect) !== null && _options$redirect !== void 0 ? _options$redirect : true)) {
                        _context7.next = 23;
                        break;
                    }
                    url = (_data$url2 = data.url) !== null && _data$url2 !== void 0 ? _data$url2 : callbackUrl;
                    window.location.href = url;
                    if (url.includes("#")) window.location.reload();
                    return _context7.abrupt("return");
                case 23:
                    _context7.next = 25;
                    return __NEXTAUTH._getSession({
                        event: "storage"
                    });
                case 25:
                    return _context7.abrupt("return", data);
                case 26:
                case "end":
                    return _context7.stop();
            }
        }, _callee7);
    }));
    return _signOut.apply(this, arguments);
}
function SessionProvider(props) {
    if (!SessionContext) {
        throw new Error("React Context is unavailable in Server Components");
    }
    var children = props.children, basePath = props.basePath, refetchInterval = props.refetchInterval, refetchWhenOffline = props.refetchWhenOffline;
    if (basePath) __NEXTAUTH.basePath = basePath;
    var hasInitialSession = props.session !== undefined;
    __NEXTAUTH._lastSync = hasInitialSession ? (0, _utils.now)() : 0;
    var _React$useState3 = React.useState({
        "SessionProvider.useState[_React$useState3]": function() {
            if (hasInitialSession) __NEXTAUTH._session = props.session;
            return props.session;
        }
    }["SessionProvider.useState[_React$useState3]"]), _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2), session = _React$useState4[0], setSession = _React$useState4[1];
    var _React$useState5 = React.useState(!hasInitialSession), _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2), loading = _React$useState6[0], setLoading = _React$useState6[1];
    React.useEffect({
        "SessionProvider.useEffect": function() {
            __NEXTAUTH._getSession = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee() {
                var _ref4, event, storageEvent, _args = arguments;
                return _regenerator.default.wrap(function _callee$(_context) {
                    while(1)switch(_context.prev = _context.next){
                        case 0:
                            _ref4 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, event = _ref4.event;
                            _context.prev = 1;
                            storageEvent = event === "storage";
                            if (!(storageEvent || __NEXTAUTH._session === undefined)) {
                                _context.next = 10;
                                break;
                            }
                            __NEXTAUTH._lastSync = (0, _utils.now)();
                            _context.next = 7;
                            return getSession({
                                broadcast: !storageEvent
                            });
                        case 7:
                            __NEXTAUTH._session = _context.sent;
                            setSession(__NEXTAUTH._session);
                            return _context.abrupt("return");
                        case 10:
                            if (!(!event || __NEXTAUTH._session === null || (0, _utils.now)() < __NEXTAUTH._lastSync)) {
                                _context.next = 12;
                                break;
                            }
                            return _context.abrupt("return");
                        case 12:
                            __NEXTAUTH._lastSync = (0, _utils.now)();
                            _context.next = 15;
                            return getSession();
                        case 15:
                            __NEXTAUTH._session = _context.sent;
                            setSession(__NEXTAUTH._session);
                            _context.next = 22;
                            break;
                        case 19:
                            _context.prev = 19;
                            _context.t0 = _context["catch"](1);
                            logger.error("CLIENT_SESSION_ERROR", _context.t0);
                        case 22:
                            _context.prev = 22;
                            setLoading(false);
                            return _context.finish(22);
                        case 25:
                        case "end":
                            return _context.stop();
                    }
                }, _callee, null, [
                    [
                        1,
                        19,
                        22,
                        25
                    ]
                ]);
            }));
            __NEXTAUTH._getSession();
            return ({
                "SessionProvider.useEffect": function() {
                    __NEXTAUTH._lastSync = 0;
                    __NEXTAUTH._session = undefined;
                    __NEXTAUTH._getSession = ({
                        "SessionProvider.useEffect": function() {}
                    })["SessionProvider.useEffect"];
                }
            })["SessionProvider.useEffect"];
        }
    }["SessionProvider.useEffect"], []);
    React.useEffect({
        "SessionProvider.useEffect": function() {
            var unsubscribe = broadcast.receive({
                "SessionProvider.useEffect.unsubscribe": function() {
                    return __NEXTAUTH._getSession({
                        event: "storage"
                    });
                }
            }["SessionProvider.useEffect.unsubscribe"]);
            return ({
                "SessionProvider.useEffect": function() {
                    return unsubscribe();
                }
            })["SessionProvider.useEffect"];
        }
    }["SessionProvider.useEffect"], []);
    React.useEffect({
        "SessionProvider.useEffect": function() {
            var _props$refetchOnWindo = props.refetchOnWindowFocus, refetchOnWindowFocus = _props$refetchOnWindo === void 0 ? true : _props$refetchOnWindo;
            var visibilityHandler = function visibilityHandler() {
                if (refetchOnWindowFocus && document.visibilityState === "visible") __NEXTAUTH._getSession({
                    event: "visibilitychange"
                });
            };
            document.addEventListener("visibilitychange", visibilityHandler, false);
            return ({
                "SessionProvider.useEffect": function() {
                    return document.removeEventListener("visibilitychange", visibilityHandler, false);
                }
            })["SessionProvider.useEffect"];
        }
    }["SessionProvider.useEffect"], [
        props.refetchOnWindowFocus
    ]);
    var isOnline = useOnline();
    var shouldRefetch = refetchWhenOffline !== false || isOnline;
    React.useEffect({
        "SessionProvider.useEffect": function() {
            if (refetchInterval && shouldRefetch) {
                var refetchIntervalTimer = setInterval({
                    "SessionProvider.useEffect.refetchIntervalTimer": function() {
                        if (__NEXTAUTH._session) {
                            __NEXTAUTH._getSession({
                                event: "poll"
                            });
                        }
                    }
                }["SessionProvider.useEffect.refetchIntervalTimer"], refetchInterval * 1000);
                return ({
                    "SessionProvider.useEffect": function() {
                        return clearInterval(refetchIntervalTimer);
                    }
                })["SessionProvider.useEffect"];
            }
        }
    }["SessionProvider.useEffect"], [
        refetchInterval,
        shouldRefetch
    ]);
    var value = React.useMemo({
        "SessionProvider.useMemo[value]": function() {
            return {
                data: session,
                status: loading ? "loading" : session ? "authenticated" : "unauthenticated",
                update: function update(data) {
                    return (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee2() {
                        var newSession;
                        return _regenerator.default.wrap(function _callee2$(_context2) {
                            while(1)switch(_context2.prev = _context2.next){
                                case 0:
                                    if (!(loading || !session)) {
                                        _context2.next = 2;
                                        break;
                                    }
                                    return _context2.abrupt("return");
                                case 2:
                                    setLoading(true);
                                    _context2.t0 = _utils.fetchData;
                                    _context2.t1 = __NEXTAUTH;
                                    _context2.t2 = logger;
                                    _context2.next = 8;
                                    return getCsrfToken();
                                case 8:
                                    _context2.t3 = _context2.sent;
                                    _context2.t4 = data;
                                    _context2.t5 = {
                                        csrfToken: _context2.t3,
                                        data: _context2.t4
                                    };
                                    _context2.t6 = {
                                        body: _context2.t5
                                    };
                                    _context2.t7 = {
                                        req: _context2.t6
                                    };
                                    _context2.next = 15;
                                    return (0, _context2.t0)("session", _context2.t1, _context2.t2, _context2.t7);
                                case 15:
                                    newSession = _context2.sent;
                                    setLoading(false);
                                    if (newSession) {
                                        setSession(newSession);
                                        broadcast.post({
                                            event: "session",
                                            data: {
                                                trigger: "getSession"
                                            }
                                        });
                                    }
                                    return _context2.abrupt("return", newSession);
                                case 19:
                                case "end":
                                    return _context2.stop();
                            }
                        }, _callee2);
                    }))();
                }
            };
        }
    }["SessionProvider.useMemo[value]"], [
        session,
        loading
    ]);
    return (0, _jsxRuntime.jsx)(SessionContext.Provider, {
        value: value,
        children: children
    });
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>User
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
];
const User = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("user", __iconNode);
;
 //# sourceMappingURL=user.js.map
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "User",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>LogOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 17 5-5-5-5",
            key: "1bji2h"
        }
    ],
    [
        "path",
        {
            d: "M21 12H9",
            key: "dn1m92"
        }
    ],
    [
        "path",
        {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }
    ]
];
const LogOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("log-out", __iconNode);
;
 //# sourceMappingURL=log-out.js.map
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Shield
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ]
];
const Shield = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("shield", __iconNode);
;
 //# sourceMappingURL=shield.js.map
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shield",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Settings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
            key: "1i5ecw"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
];
const Settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("settings", __iconNode);
;
 //# sourceMappingURL=settings.js.map
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Settings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/react/dist/Particles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
;
;
;
const f = (t)=>{
    const i = t.id ?? "tsparticles";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let e;
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tsParticles"].load({
            id: i,
            url: t.url,
            options: t.options
        }).then((l)=>{
            var a;
            e = l, (a = t.particlesLoaded) == null || a.call(t, l);
        }), ()=>{
            e == null || e.destroy();
        };
    }, [
        i,
        t,
        t.url,
        t.options
    ]), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        id: i,
        className: t.className
    });
};
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/react/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initParticlesEngine",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$Particles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/react/dist/Particles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
async function n(t) {
    await t(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tsParticles"]);
}
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/move-base/browser/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyDistance",
    ()=>applyDistance,
    "applyPath",
    ()=>applyPath,
    "getProximitySpeedFactor",
    ()=>getProximitySpeedFactor,
    "initSpin",
    ()=>initSpin,
    "move",
    ()=>move,
    "spin",
    ()=>spin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$RotateDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Directions/RotateDirection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
const half = 0.5, double = 2, minVelocity = 0, identity = 1, moveSpeedFactor = 60, minSpinRadius = 0, spinFactor = 0.01, doublePI = Math.PI * double;
function applyDistance(particle) {
    const initialPosition = particle.initialPosition, { dx, dy } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistances"])(initialPosition, particle.position), dxFixed = Math.abs(dx), dyFixed = Math.abs(dy), { maxDistance } = particle.retina, hDistance = maxDistance.horizontal, vDistance = maxDistance.vertical;
    if (!hDistance && !vDistance) {
        return;
    }
    const hasHDistance = (hDistance && dxFixed >= hDistance) ?? false, hasVDistance = (vDistance && dyFixed >= vDistance) ?? false;
    if ((hasHDistance || hasVDistance) && !particle.misplaced) {
        particle.misplaced = !!hDistance && dxFixed > hDistance || !!vDistance && dyFixed > vDistance;
        if (hDistance) {
            particle.velocity.x = particle.velocity.y * half - particle.velocity.x;
        }
        if (vDistance) {
            particle.velocity.y = particle.velocity.x * half - particle.velocity.y;
        }
    } else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) {
        particle.misplaced = false;
    } else if (particle.misplaced) {
        const pos = particle.position, vel = particle.velocity;
        if (hDistance && (pos.x < initialPosition.x && vel.x < minVelocity || pos.x > initialPosition.x && vel.x > minVelocity)) {
            vel.x *= -(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])();
        }
        if (vDistance && (pos.y < initialPosition.y && vel.y < minVelocity || pos.y > initialPosition.y && vel.y > minVelocity)) {
            vel.y *= -(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])();
        }
    }
}
function move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, reduceFactor, delta) {
    applyPath(particle, delta);
    const gravityOptions = particle.gravity, gravityFactor = gravityOptions?.enable && gravityOptions.inverse ? -identity : identity;
    if (moveDrift && moveSpeed) {
        particle.velocity.x += moveDrift * delta.factor / (moveSpeedFactor * moveSpeed);
    }
    if (gravityOptions?.enable && moveSpeed) {
        particle.velocity.y += gravityFactor * (gravityOptions.acceleration * delta.factor) / (moveSpeedFactor * moveSpeed);
    }
    const decay = particle.moveDecay;
    particle.velocity.multTo(decay);
    const velocity = particle.velocity.mult(moveSpeed);
    if (gravityOptions?.enable && maxSpeed > minVelocity && (!gravityOptions.inverse && velocity.y >= minVelocity && velocity.y >= maxSpeed || gravityOptions.inverse && velocity.y <= minVelocity && velocity.y <= -maxSpeed)) {
        velocity.y = gravityFactor * maxSpeed;
        if (moveSpeed) {
            particle.velocity.y = velocity.y / moveSpeed;
        }
    }
    const zIndexOptions = particle.options.zIndex, zVelocityFactor = (identity - particle.zIndexFactor) ** zIndexOptions.velocityRate;
    velocity.multTo(zVelocityFactor);
    velocity.multTo(reduceFactor);
    const { position } = particle;
    position.addTo(velocity);
    if (moveOptions.vibrate) {
        position.x += Math.sin(position.x * Math.cos(position.y)) * reduceFactor;
        position.y += Math.cos(position.y * Math.sin(position.x)) * reduceFactor;
    }
}
function spin(particle, moveSpeed, reduceFactor) {
    const container = particle.container;
    if (!particle.spin) {
        return;
    }
    const spinClockwise = particle.spin.direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$RotateDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotateDirection"].clockwise, updateFunc = {
        x: spinClockwise ? Math.cos : Math.sin,
        y: spinClockwise ? Math.sin : Math.cos
    };
    particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle) * reduceFactor;
    particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle) * reduceFactor;
    particle.spin.radius += particle.spin.acceleration * reduceFactor;
    const maxCanvasSize = Math.max(container.canvas.size.width, container.canvas.size.height), halfMaxSize = maxCanvasSize * half;
    if (particle.spin.radius > halfMaxSize) {
        particle.spin.radius = halfMaxSize;
        particle.spin.acceleration *= -identity;
    } else if (particle.spin.radius < minSpinRadius) {
        particle.spin.radius = minSpinRadius;
        particle.spin.acceleration *= -identity;
    }
    particle.spin.angle += moveSpeed * spinFactor * (identity - particle.spin.radius / maxCanvasSize);
}
function applyPath(particle, delta) {
    const particlesOptions = particle.options, pathOptions = particlesOptions.move.path, pathEnabled = pathOptions.enable;
    if (!pathEnabled) {
        return;
    }
    if (particle.lastPathTime <= particle.pathDelay) {
        particle.lastPathTime += delta.value;
        return;
    }
    const path = particle.pathGenerator?.generate(particle, delta);
    if (path) {
        particle.velocity.addTo(path);
    }
    if (pathOptions.clamp) {
        particle.velocity.x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(particle.velocity.x, -identity, identity);
        particle.velocity.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(particle.velocity.y, -identity, identity);
    }
    particle.lastPathTime -= particle.pathDelay;
}
function getProximitySpeedFactor(particle) {
    return particle.slow.inRange ? particle.slow.factor : identity;
}
function initSpin(particle) {
    const container = particle.container, options = particle.options, spinOptions = options.move.spin;
    if (!spinOptions.enable) {
        return;
    }
    const spinPos = spinOptions.position ?? {
        x: 50,
        y: 50
    }, spinFactor = 0.01, spinCenter = {
        x: spinPos.x * spinFactor * container.canvas.size.width,
        y: spinPos.y * spinFactor * container.canvas.size.height
    }, pos = particle.getPosition(), distance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistance"])(pos, spinCenter), spinAcceleration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(spinOptions.acceleration);
    particle.retina.spinAcceleration = spinAcceleration * container.retina.pixelRatio;
    particle.spin = {
        center: spinCenter,
        direction: particle.velocity.x >= minVelocity ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$RotateDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotateDirection"].clockwise : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$RotateDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotateDirection"].counterClockwise,
        angle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])() * doublePI,
        radius: distance,
        acceleration: particle.retina.spinAcceleration
    };
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/move-base/browser/BaseMover.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseMover",
    ()=>BaseMover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$move$2d$base$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/move-base/browser/Utils.js [app-client] (ecmascript)");
;
;
const diffFactor = 2, defaultSizeFactor = 1, defaultDeltaFactor = 1;
class BaseMover {
    init(particle) {
        const options = particle.options, gravityOptions = options.move.gravity;
        particle.gravity = {
            enable: gravityOptions.enable,
            acceleration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(gravityOptions.acceleration),
            inverse: gravityOptions.inverse
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$move$2d$base$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSpin"])(particle);
    }
    isEnabled(particle) {
        return !particle.destroyed && particle.options.move.enable;
    }
    move(particle, delta) {
        const particleOptions = particle.options, moveOptions = particleOptions.move;
        if (!moveOptions.enable) {
            return;
        }
        const container = particle.container, pxRatio = container.retina.pixelRatio;
        particle.retina.moveSpeed ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(moveOptions.speed) * pxRatio;
        particle.retina.moveDrift ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(particle.options.move.drift) * pxRatio;
        const slowFactor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$move$2d$base$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProximitySpeedFactor"])(particle), reduceFactor = container.retina.reduceFactor, baseSpeed = particle.retina.moveSpeed, moveDrift = particle.retina.moveDrift, maxSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeMax"])(particleOptions.size.value) * pxRatio, sizeFactor = moveOptions.size ? particle.getRadius() / maxSize : defaultSizeFactor, deltaFactor = delta.factor || defaultDeltaFactor, moveSpeed = baseSpeed * sizeFactor * slowFactor * deltaFactor / diffFactor, maxSpeed = particle.retina.maxSpeed ?? container.retina.maxSpeed;
        if (moveOptions.spin.enable) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$move$2d$base$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spin"])(particle, moveSpeed, reduceFactor);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$move$2d$base$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["move"])(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, reduceFactor, delta);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$move$2d$base$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyDistance"])(particle);
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/move-base/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadBaseMover",
    ()=>loadBaseMover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$move$2d$base$2f$browser$2f$BaseMover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/move-base/browser/BaseMover.js [app-client] (ecmascript)");
;
async function loadBaseMover(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addMover("base", ()=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$move$2d$base$2f$browser$2f$BaseMover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseMover"]());
    }, refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-circle/browser/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drawCircle",
    ()=>drawCircle
]);
const double = 2, doublePI = Math.PI * double, minAngle = 0, origin = {
    x: 0,
    y: 0
};
function drawCircle(data) {
    const { context, particle, radius } = data;
    if (!particle.circleRange) {
        particle.circleRange = {
            min: minAngle,
            max: doublePI
        };
    }
    const circleRange = particle.circleRange;
    context.arc(origin.x, origin.y, radius, circleRange.min, circleRange.max, false);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-circle/browser/CircleDrawer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CircleDrawer",
    ()=>CircleDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$circle$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-circle/browser/Utils.js [app-client] (ecmascript)");
;
;
const sides = 12, maxAngle = 360, minAngle = 0;
class CircleDrawer {
    constructor(){
        this.validTypes = [
            "circle"
        ];
    }
    draw(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$circle$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawCircle"])(data);
    }
    getSidesCount() {
        return sides;
    }
    particleInit(container, particle) {
        const shapeData = particle.shapeData, angle = shapeData?.angle ?? {
            max: maxAngle,
            min: minAngle
        };
        particle.circleRange = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(angle) ? {
            min: minAngle,
            max: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degToRad"])(angle)
        } : {
            min: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degToRad"])(angle.min),
            max: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degToRad"])(angle.max)
        };
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-circle/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadCircleShape",
    ()=>loadCircleShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$circle$2f$browser$2f$CircleDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-circle/browser/CircleDrawer.js [app-client] (ecmascript)");
;
async function loadCircleShape(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addShape(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$circle$2f$browser$2f$CircleDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleDrawer"](), refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-color/browser/ColorUpdater.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorUpdater",
    ()=>ColorUpdater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js [app-client] (ecmascript)");
;
class ColorUpdater {
    constructor(container, engine){
        this._container = container;
        this._engine = engine;
    }
    init(particle) {
        const hslColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeColorToHsl"])(this._engine, particle.options.color, particle.id, particle.options.reduceDuplicates);
        if (hslColor) {
            particle.color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHslAnimationFromHsl"])(hslColor, particle.options.color.animation, this._container.retina.reduceFactor);
        }
    }
    isEnabled(particle) {
        const { h: hAnimation, s: sAnimation, l: lAnimation } = particle.options.color.animation, { color } = particle;
        return !particle.destroyed && !particle.spawning && (color?.h.value !== undefined && hAnimation.enable || color?.s.value !== undefined && sAnimation.enable || color?.l.value !== undefined && lAnimation.enable);
    }
    update(particle, delta) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateColor"])(particle.color, delta);
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-color/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadColorUpdater",
    ()=>loadColorUpdater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$color$2f$browser$2f$ColorUpdater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-color/browser/ColorUpdater.js [app-client] (ecmascript)");
;
async function loadColorUpdater(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addParticleUpdater("color", (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$color$2f$browser$2f$ColorUpdater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorUpdater"](container, engine));
    }, refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/plugin-hex-color/browser/HexColorManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexColorManager",
    ()=>HexColorManager
]);
var RgbIndexes;
(function(RgbIndexes) {
    RgbIndexes[RgbIndexes["r"] = 1] = "r";
    RgbIndexes[RgbIndexes["g"] = 2] = "g";
    RgbIndexes[RgbIndexes["b"] = 3] = "b";
    RgbIndexes[RgbIndexes["a"] = 4] = "a";
})(RgbIndexes || (RgbIndexes = {}));
const shorthandHexRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, hexRadix = 16, defaultAlpha = 1, alphaFactor = 0xff;
class HexColorManager {
    constructor(){
        this.key = "hex";
        this.stringPrefix = "#";
    }
    handleColor(color) {
        return this._parseString(color.value);
    }
    handleRangeColor(color) {
        return this._parseString(color.value);
    }
    parseString(input) {
        return this._parseString(input);
    }
    _parseString(hexColor) {
        if (typeof hexColor !== "string") {
            return;
        }
        if (!hexColor?.startsWith(this.stringPrefix)) {
            return;
        }
        const hexFixed = hexColor.replace(shorthandHexRegex, (_, r, g, b, a)=>{
            return r + r + g + g + b + b + (a !== undefined ? a + a : "");
        }), result = hexRegex.exec(hexFixed);
        return result ? {
            a: result[RgbIndexes.a] !== undefined ? parseInt(result[RgbIndexes.a], hexRadix) / alphaFactor : defaultAlpha,
            b: parseInt(result[RgbIndexes.b], hexRadix),
            g: parseInt(result[RgbIndexes.g], hexRadix),
            r: parseInt(result[RgbIndexes.r], hexRadix)
        } : undefined;
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/plugin-hex-color/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadHexColorPlugin",
    ()=>loadHexColorPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$plugin$2d$hex$2d$color$2f$browser$2f$HexColorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/plugin-hex-color/browser/HexColorManager.js [app-client] (ecmascript)");
;
async function loadHexColorPlugin(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addColorManager(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$plugin$2d$hex$2d$color$2f$browser$2f$HexColorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexColorManager"](), refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/plugin-hsl-color/browser/HslColorManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HslColorManager",
    ()=>HslColorManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js [app-client] (ecmascript)");
;
var HslIndexes;
(function(HslIndexes) {
    HslIndexes[HslIndexes["h"] = 1] = "h";
    HslIndexes[HslIndexes["s"] = 2] = "s";
    HslIndexes[HslIndexes["l"] = 3] = "l";
    HslIndexes[HslIndexes["a"] = 5] = "a";
})(HslIndexes || (HslIndexes = {}));
class HslColorManager {
    constructor(){
        this.key = "hsl";
        this.stringPrefix = "hsl";
    }
    handleColor(color) {
        const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
        if (hslColor.h !== undefined && hslColor.s !== undefined && hslColor.l !== undefined) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hslToRgb"])(hslColor);
        }
    }
    handleRangeColor(color) {
        const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
        if (hslColor.h !== undefined && hslColor.l !== undefined) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hslToRgb"])({
                h: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(hslColor.h),
                l: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(hslColor.l),
                s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(hslColor.s)
            });
        }
    }
    parseString(input) {
        if (!input.startsWith("hsl")) {
            return;
        }
        const regex = /hsla?\(\s*(\d+)\s*[\s,]\s*(\d+)%\s*[\s,]\s*(\d+)%\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i, result = regex.exec(input), minLength = 4, defaultAlpha = 1, radix = 10;
        return result ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hslaToRgba"])({
            a: result.length > minLength ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAlpha"])(result[HslIndexes.a]) : defaultAlpha,
            h: parseInt(result[HslIndexes.h], radix),
            l: parseInt(result[HslIndexes.l], radix),
            s: parseInt(result[HslIndexes.s], radix)
        }) : undefined;
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/plugin-hsl-color/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadHslColorPlugin",
    ()=>loadHslColorPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$plugin$2d$hsl$2d$color$2f$browser$2f$HslColorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/plugin-hsl-color/browser/HslColorManager.js [app-client] (ecmascript)");
;
async function loadHslColorPlugin(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addColorManager(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$plugin$2d$hsl$2d$color$2f$browser$2f$HslColorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HslColorManager"](), refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-opacity/browser/OpacityUpdater.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OpacityUpdater",
    ()=>OpacityUpdater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
;
class OpacityUpdater {
    constructor(container){
        this.container = container;
    }
    init(particle) {
        const opacityOptions = particle.options.opacity, pxRatio = 1;
        particle.opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initParticleNumericAnimationValue"])(opacityOptions, pxRatio);
        const opacityAnimation = opacityOptions.animation;
        if (opacityAnimation.enable) {
            particle.opacity.velocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(opacityAnimation.speed) / __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentDenominator"] * this.container.retina.reduceFactor;
            if (!opacityAnimation.sync) {
                particle.opacity.velocity *= (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])();
            }
        }
    }
    isEnabled(particle) {
        const none = 0;
        return !particle.destroyed && !particle.spawning && !!particle.opacity && particle.opacity.enable && ((particle.opacity.maxLoops ?? none) <= none || (particle.opacity.maxLoops ?? none) > none && (particle.opacity.loops ?? none) < (particle.opacity.maxLoops ?? none));
    }
    reset(particle) {
        if (particle.opacity) {
            particle.opacity.time = 0;
            particle.opacity.loops = 0;
        }
    }
    update(particle, delta) {
        if (!this.isEnabled(particle) || !particle.opacity) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAnimation"])(particle, particle.opacity, true, particle.options.opacity.animation.destroy, delta);
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-opacity/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadOpacityUpdater",
    ()=>loadOpacityUpdater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$opacity$2f$browser$2f$OpacityUpdater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-opacity/browser/OpacityUpdater.js [app-client] (ecmascript)");
;
async function loadOpacityUpdater(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addParticleUpdater("opacity", (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$opacity$2f$browser$2f$OpacityUpdater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpacityUpdater"](container));
    }, refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-out-modes/browser/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bounceHorizontal",
    ()=>bounceHorizontal,
    "bounceVertical",
    ()=>bounceVertical
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Modes/OutMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Directions/OutModeDirection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
const minVelocity = 0, boundsMin = 0;
function bounceHorizontal(data) {
    if (data.outMode !== __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].bounce && data.outMode !== __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].split || data.direction !== __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].left && data.direction !== __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].right) {
        return;
    }
    if (data.bounds.right < boundsMin && data.direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].left) {
        data.particle.position.x = data.size + data.offset.x;
    } else if (data.bounds.left > data.canvasSize.width && data.direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].right) {
        data.particle.position.x = data.canvasSize.width - data.size - data.offset.x;
    }
    const velocity = data.particle.velocity.x;
    let bounced = false;
    if (data.direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].right && data.bounds.right >= data.canvasSize.width && velocity > minVelocity || data.direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].left && data.bounds.left <= boundsMin && velocity < minVelocity) {
        const newVelocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(data.particle.options.bounce.horizontal.value);
        data.particle.velocity.x *= -newVelocity;
        bounced = true;
    }
    if (!bounced) {
        return;
    }
    const minPos = data.offset.x + data.size;
    if (data.bounds.right >= data.canvasSize.width && data.direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].right) {
        data.particle.position.x = data.canvasSize.width - minPos;
    } else if (data.bounds.left <= boundsMin && data.direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].left) {
        data.particle.position.x = minPos;
    }
    if (data.outMode === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].split) {
        data.particle.destroy();
    }
}
function bounceVertical(data) {
    if (data.outMode !== __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].bounce && data.outMode !== __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].split || data.direction !== __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].bottom && data.direction !== __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].top) {
        return;
    }
    if (data.bounds.bottom < boundsMin && data.direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].top) {
        data.particle.position.y = data.size + data.offset.y;
    } else if (data.bounds.top > data.canvasSize.height && data.direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].bottom) {
        data.particle.position.y = data.canvasSize.height - data.size - data.offset.y;
    }
    const velocity = data.particle.velocity.y;
    let bounced = false;
    if (data.direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].bottom && data.bounds.bottom >= data.canvasSize.height && velocity > minVelocity || data.direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].top && data.bounds.top <= boundsMin && velocity < minVelocity) {
        const newVelocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(data.particle.options.bounce.vertical.value);
        data.particle.velocity.y *= -newVelocity;
        bounced = true;
    }
    if (!bounced) {
        return;
    }
    const minPos = data.offset.y + data.size;
    if (data.bounds.bottom >= data.canvasSize.height && data.direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].bottom) {
        data.particle.position.y = data.canvasSize.height - minPos;
    } else if (data.bounds.top <= boundsMin && data.direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].top) {
        data.particle.position.y = minPos;
    }
    if (data.outMode === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].split) {
        data.particle.destroy();
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-out-modes/browser/BounceOutMode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BounceOutMode",
    ()=>BounceOutMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Modes/OutMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$out$2d$modes$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-out-modes/browser/Utils.js [app-client] (ecmascript)");
;
;
class BounceOutMode {
    constructor(container){
        this.container = container;
        this.modes = [
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].bounce,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].split
        ];
    }
    update(particle, direction, delta, outMode) {
        if (!this.modes.includes(outMode)) {
            return;
        }
        const container = this.container;
        let handled = false;
        for (const plugin of container.plugins.values()){
            if (plugin.particleBounce !== undefined) {
                handled = plugin.particleBounce(particle, delta, direction);
            }
            if (handled) {
                break;
            }
        }
        if (handled) {
            return;
        }
        const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateBounds"])(pos, size), canvasSize = container.canvas.size;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$out$2d$modes$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bounceHorizontal"])({
            particle,
            outMode,
            direction,
            bounds,
            canvasSize,
            offset,
            size
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$out$2d$modes$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bounceVertical"])({
            particle,
            outMode,
            direction,
            bounds,
            canvasSize,
            offset,
            size
        });
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-out-modes/browser/DestroyOutMode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DestroyOutMode",
    ()=>DestroyOutMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Modes/OutMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Types/ParticleOutType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
;
const minVelocity = 0;
class DestroyOutMode {
    constructor(container){
        this.container = container;
        this.modes = [
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].destroy
        ];
    }
    update(particle, direction, _delta, outMode) {
        if (!this.modes.includes(outMode)) {
            return;
        }
        const container = this.container;
        switch(particle.outType){
            case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleOutType"].normal:
            case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleOutType"].outside:
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPointInside"])(particle.position, container.canvas.size, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector"].origin, particle.getRadius(), direction)) {
                    return;
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleOutType"].inside:
                {
                    const { dx, dy } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistances"])(particle.position, particle.moveCenter), { x: vx, y: vy } = particle.velocity;
                    if (vx < minVelocity && dx > particle.moveCenter.radius || vy < minVelocity && dy > particle.moveCenter.radius || vx >= minVelocity && dx < -particle.moveCenter.radius || vy >= minVelocity && dy < -particle.moveCenter.radius) {
                        return;
                    }
                    break;
                }
        }
        container.particles.remove(particle, particle.group, true);
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-out-modes/browser/NoneOutMode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoneOutMode",
    ()=>NoneOutMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Modes/OutMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Directions/OutModeDirection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
;
const minVelocity = 0;
class NoneOutMode {
    constructor(container){
        this.container = container;
        this.modes = [
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].none
        ];
    }
    update(particle, direction, delta, outMode) {
        if (!this.modes.includes(outMode)) {
            return;
        }
        if ((particle.options.move.distance.horizontal && (direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].left || direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].right)) ?? (particle.options.move.distance.vertical && (direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].top || direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].bottom))) {
            return;
        }
        const gravityOptions = particle.options.move.gravity, container = this.container, canvasSize = container.canvas.size, pRadius = particle.getRadius();
        if (!gravityOptions.enable) {
            if (particle.velocity.y > minVelocity && particle.position.y <= canvasSize.height + pRadius || particle.velocity.y < minVelocity && particle.position.y >= -pRadius || particle.velocity.x > minVelocity && particle.position.x <= canvasSize.width + pRadius || particle.velocity.x < minVelocity && particle.position.x >= -pRadius) {
                return;
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPointInside"])(particle.position, container.canvas.size, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector"].origin, pRadius, direction)) {
                container.particles.remove(particle);
            }
        } else {
            const position = particle.position;
            if (!gravityOptions.inverse && position.y > canvasSize.height + pRadius && direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].bottom || gravityOptions.inverse && position.y < -pRadius && direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].top) {
                container.particles.remove(particle);
            }
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-out-modes/browser/OutOutMode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OutOutMode",
    ()=>OutOutMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Modes/OutMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Directions/OutModeDirection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Types/ParticleOutType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
const minVelocity = 0, minDistance = 0;
class OutOutMode {
    constructor(container){
        this.container = container;
        this.modes = [
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].out
        ];
    }
    update(particle, direction, delta, outMode) {
        if (!this.modes.includes(outMode)) {
            return;
        }
        const container = this.container;
        switch(particle.outType){
            case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleOutType"].inside:
                {
                    const { x: vx, y: vy } = particle.velocity;
                    const circVec = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector"].origin;
                    circVec.length = particle.moveCenter.radius;
                    circVec.angle = particle.velocity.angle + Math.PI;
                    circVec.addTo(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector"].create(particle.moveCenter));
                    const { dx, dy } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistances"])(particle.position, circVec);
                    if (vx <= minVelocity && dx >= minDistance || vy <= minVelocity && dy >= minDistance || vx >= minVelocity && dx <= minDistance || vy >= minVelocity && dy <= minDistance) {
                        return;
                    }
                    particle.position.x = Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomInRange"])({
                        min: 0,
                        max: container.canvas.size.width
                    }));
                    particle.position.y = Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomInRange"])({
                        min: 0,
                        max: container.canvas.size.height
                    }));
                    const { dx: newDx, dy: newDy } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistances"])(particle.position, particle.moveCenter);
                    particle.direction = Math.atan2(-newDy, -newDx);
                    particle.velocity.angle = particle.direction;
                    break;
                }
            default:
                {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPointInside"])(particle.position, container.canvas.size, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector"].origin, particle.getRadius(), direction)) {
                        return;
                    }
                    switch(particle.outType){
                        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleOutType"].outside:
                            {
                                particle.position.x = Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomInRange"])({
                                    min: -particle.moveCenter.radius,
                                    max: particle.moveCenter.radius
                                })) + particle.moveCenter.x;
                                particle.position.y = Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomInRange"])({
                                    min: -particle.moveCenter.radius,
                                    max: particle.moveCenter.radius
                                })) + particle.moveCenter.y;
                                const { dx, dy } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistances"])(particle.position, particle.moveCenter);
                                if (particle.moveCenter.radius) {
                                    particle.direction = Math.atan2(dy, dx);
                                    particle.velocity.angle = particle.direction;
                                }
                                break;
                            }
                        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleOutType"].normal:
                            {
                                const warp = particle.options.move.warp, canvasSize = container.canvas.size, newPos = {
                                    bottom: canvasSize.height + particle.getRadius() + particle.offset.y,
                                    left: -particle.getRadius() - particle.offset.x,
                                    right: canvasSize.width + particle.getRadius() + particle.offset.x,
                                    top: -particle.getRadius() - particle.offset.y
                                }, sizeValue = particle.getRadius(), nextBounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateBounds"])(particle.position, sizeValue);
                                if (direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].right && nextBounds.left > canvasSize.width + particle.offset.x) {
                                    particle.position.x = newPos.left;
                                    particle.initialPosition.x = particle.position.x;
                                    if (!warp) {
                                        particle.position.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])() * canvasSize.height;
                                        particle.initialPosition.y = particle.position.y;
                                    }
                                } else if (direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].left && nextBounds.right < -particle.offset.x) {
                                    particle.position.x = newPos.right;
                                    particle.initialPosition.x = particle.position.x;
                                    if (!warp) {
                                        particle.position.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])() * canvasSize.height;
                                        particle.initialPosition.y = particle.position.y;
                                    }
                                }
                                if (direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].bottom && nextBounds.top > canvasSize.height + particle.offset.y) {
                                    if (!warp) {
                                        particle.position.x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])() * canvasSize.width;
                                        particle.initialPosition.x = particle.position.x;
                                    }
                                    particle.position.y = newPos.top;
                                    particle.initialPosition.y = particle.position.y;
                                } else if (direction === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].top && nextBounds.bottom < -particle.offset.y) {
                                    if (!warp) {
                                        particle.position.x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])() * canvasSize.width;
                                        particle.initialPosition.x = particle.position.x;
                                    }
                                    particle.position.y = newPos.bottom;
                                    particle.initialPosition.y = particle.position.y;
                                }
                                break;
                            }
                    }
                    break;
                }
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-out-modes/browser/OutOfCanvasUpdater.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OutOfCanvasUpdater",
    ()=>OutOfCanvasUpdater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Modes/OutMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Directions/OutModeDirection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$out$2d$modes$2f$browser$2f$BounceOutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-out-modes/browser/BounceOutMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$out$2d$modes$2f$browser$2f$DestroyOutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-out-modes/browser/DestroyOutMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$out$2d$modes$2f$browser$2f$NoneOutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-out-modes/browser/NoneOutMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$out$2d$modes$2f$browser$2f$OutOutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-out-modes/browser/OutOutMode.js [app-client] (ecmascript)");
;
;
;
;
;
const checkOutMode = (outModes, outMode)=>{
    return outModes.default === outMode || outModes.bottom === outMode || outModes.left === outMode || outModes.right === outMode || outModes.top === outMode;
};
class OutOfCanvasUpdater {
    constructor(container){
        this._addUpdaterIfMissing = (particle, outMode, getUpdater)=>{
            const outModes = particle.options.move.outModes;
            if (!this.updaters.has(outMode) && checkOutMode(outModes, outMode)) {
                this.updaters.set(outMode, getUpdater(this.container));
            }
        };
        this._updateOutMode = (particle, delta, outMode, direction)=>{
            for (const updater of this.updaters.values()){
                updater.update(particle, direction, delta, outMode);
            }
        };
        this.container = container;
        this.updaters = new Map();
    }
    init(particle) {
        this._addUpdaterIfMissing(particle, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].bounce, (container)=>new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$out$2d$modes$2f$browser$2f$BounceOutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BounceOutMode"](container));
        this._addUpdaterIfMissing(particle, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].out, (container)=>new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$out$2d$modes$2f$browser$2f$OutOutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutOutMode"](container));
        this._addUpdaterIfMissing(particle, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].destroy, (container)=>new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$out$2d$modes$2f$browser$2f$DestroyOutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DestroyOutMode"](container));
        this._addUpdaterIfMissing(particle, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].none, (container)=>new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$out$2d$modes$2f$browser$2f$NoneOutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoneOutMode"](container));
    }
    isEnabled(particle) {
        return !particle.destroyed && !particle.spawning;
    }
    update(particle, delta) {
        const outModes = particle.options.move.outModes;
        this._updateOutMode(particle, delta, outModes.bottom ?? outModes.default, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].bottom);
        this._updateOutMode(particle, delta, outModes.left ?? outModes.default, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].left);
        this._updateOutMode(particle, delta, outModes.right ?? outModes.default, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].right);
        this._updateOutMode(particle, delta, outModes.top ?? outModes.default, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].top);
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-out-modes/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadOutModesUpdater",
    ()=>loadOutModesUpdater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$out$2d$modes$2f$browser$2f$OutOfCanvasUpdater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-out-modes/browser/OutOfCanvasUpdater.js [app-client] (ecmascript)");
;
async function loadOutModesUpdater(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addParticleUpdater("outModes", (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$out$2d$modes$2f$browser$2f$OutOfCanvasUpdater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutOfCanvasUpdater"](container));
    }, refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/plugin-rgb-color/browser/RgbColorManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RgbColorManager",
    ()=>RgbColorManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
var RgbIndexes;
(function(RgbIndexes) {
    RgbIndexes[RgbIndexes["r"] = 1] = "r";
    RgbIndexes[RgbIndexes["g"] = 2] = "g";
    RgbIndexes[RgbIndexes["b"] = 3] = "b";
    RgbIndexes[RgbIndexes["a"] = 5] = "a";
})(RgbIndexes || (RgbIndexes = {}));
class RgbColorManager {
    constructor(){
        this.key = "rgb";
        this.stringPrefix = "rgb";
    }
    handleColor(color) {
        const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
        if (rgbColor.r !== undefined) {
            return rgbColor;
        }
    }
    handleRangeColor(color) {
        const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
        if (rgbColor.r !== undefined) {
            return {
                r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(rgbColor.r),
                g: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(rgbColor.g),
                b: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(rgbColor.b)
            };
        }
    }
    parseString(input) {
        if (!input.startsWith(this.stringPrefix)) {
            return;
        }
        const regex = /rgba?\(\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i, result = regex.exec(input), radix = 10, minLength = 4, defaultAlpha = 1;
        return result ? {
            a: result.length > minLength ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAlpha"])(result[RgbIndexes.a]) : defaultAlpha,
            b: parseInt(result[RgbIndexes.b], radix),
            g: parseInt(result[RgbIndexes.g], radix),
            r: parseInt(result[RgbIndexes.r], radix)
        } : undefined;
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/plugin-rgb-color/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadRgbColorPlugin",
    ()=>loadRgbColorPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$plugin$2d$rgb$2d$color$2f$browser$2f$RgbColorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/plugin-rgb-color/browser/RgbColorManager.js [app-client] (ecmascript)");
;
async function loadRgbColorPlugin(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addColorManager(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$plugin$2d$rgb$2d$color$2f$browser$2f$RgbColorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RgbColorManager"](), refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-size/browser/SizeUpdater.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SizeUpdater",
    ()=>SizeUpdater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
;
const minLoops = 0;
class SizeUpdater {
    init(particle) {
        const container = particle.container, sizeOptions = particle.options.size, sizeAnimation = sizeOptions.animation;
        if (sizeAnimation.enable) {
            particle.size.velocity = (particle.retina.sizeAnimationSpeed ?? container.retina.sizeAnimationSpeed) / __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentDenominator"] * container.retina.reduceFactor;
            if (!sizeAnimation.sync) {
                particle.size.velocity *= (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])();
            }
        }
    }
    isEnabled(particle) {
        return !particle.destroyed && !particle.spawning && particle.size.enable && ((particle.size.maxLoops ?? minLoops) <= minLoops || (particle.size.maxLoops ?? minLoops) > minLoops && (particle.size.loops ?? minLoops) < (particle.size.maxLoops ?? minLoops));
    }
    reset(particle) {
        particle.size.loops = minLoops;
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAnimation"])(particle, particle.size, true, particle.options.size.animation.destroy, delta);
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-size/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadSizeUpdater",
    ()=>loadSizeUpdater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$size$2f$browser$2f$SizeUpdater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-size/browser/SizeUpdater.js [app-client] (ecmascript)");
;
async function loadSizeUpdater(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addParticleUpdater("size", ()=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$size$2f$browser$2f$SizeUpdater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SizeUpdater"]());
    }, refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/basic/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadBasic",
    ()=>loadBasic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$move$2d$base$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/move-base/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$circle$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-circle/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$color$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-color/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$plugin$2d$hex$2d$color$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/plugin-hex-color/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$plugin$2d$hsl$2d$color$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/plugin-hsl-color/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$opacity$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-opacity/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$out$2d$modes$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-out-modes/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$plugin$2d$rgb$2d$color$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/plugin-rgb-color/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$size$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-size/browser/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
async function loadBasic(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$plugin$2d$hex$2d$color$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadHexColorPlugin"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$plugin$2d$hsl$2d$color$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadHslColorPlugin"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$plugin$2d$rgb$2d$color$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadRgbColorPlugin"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$move$2d$base$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadBaseMover"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$circle$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadCircleShape"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$color$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadColorUpdater"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$opacity$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadOpacityUpdater"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$out$2d$modes$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadOutModesUpdater"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$size$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSizeUpdater"])(engine, false);
    await engine.refresh(refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/plugin-easing-quad/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadEasingQuadPlugin",
    ()=>loadEasingQuadPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EasingType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Types/EasingType.js [app-client] (ecmascript)");
;
async function loadEasingQuadPlugin(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addEasing(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EasingType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EasingType"].easeInQuad, (value)=>value ** 2, false);
    await engine.addEasing(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EasingType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EasingType"].easeOutQuad, (value)=>1 - (1 - value) ** 2, false);
    await engine.addEasing(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EasingType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EasingType"].easeInOutQuad, (value)=>value < 0.5 ? 2 * value ** 2 : 1 - (-2 * value + 2) ** 2 / 2, false);
    await engine.refresh(refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-emoji/browser/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drawEmoji",
    ()=>drawEmoji
]);
function drawEmoji(data, image) {
    const { context, opacity } = data, half = 0.5, previousAlpha = context.globalAlpha;
    if (!image) {
        return;
    }
    const diameter = image.width, radius = diameter * half;
    context.globalAlpha = opacity;
    context.drawImage(image, -radius, -radius, diameter, diameter);
    context.globalAlpha = previousAlpha;
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-emoji/browser/EmojiDrawer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmojiDrawer",
    ()=>EmojiDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$emoji$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-emoji/browser/Utils.js [app-client] (ecmascript)");
;
;
const defaultFont = '"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"', noPadding = 0;
class EmojiDrawer {
    constructor(){
        this.validTypes = [
            "emoji"
        ];
        this._emojiShapeDict = new Map();
    }
    destroy() {
        for (const [key, data] of this._emojiShapeDict){
            if (data instanceof ImageBitmap) {
                data?.close();
            }
            this._emojiShapeDict.delete(key);
        }
    }
    draw(data) {
        const key = data.particle.emojiDataKey;
        if (!key) {
            return;
        }
        const image = this._emojiShapeDict.get(key);
        if (!image) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$emoji$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawEmoji"])(data, image);
    }
    async init(container) {
        const options = container.actualOptions, { validTypes } = this;
        if (!validTypes.find((t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(t, options.particles.shape.type))) {
            return;
        }
        const promises = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadFont"])(defaultFont)
        ], shapeOptions = validTypes.map((t)=>options.particles.shape.options[t]).find((t)=>!!t);
        if (shapeOptions) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeOnSingleOrMultiple"])(shapeOptions, (shape)=>{
                if (shape.font) {
                    promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadFont"])(shape.font));
                }
            });
        }
        await Promise.all(promises);
    }
    particleDestroy(particle) {
        particle.emojiDataKey = undefined;
    }
    particleInit(_container, particle) {
        const double = 2, shapeData = particle.shapeData;
        if (!shapeData?.value) {
            return;
        }
        const emoji = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(shapeData.value, particle.randomIndexData);
        if (!emoji) {
            return;
        }
        const emojiOptions = typeof emoji === "string" ? {
            font: shapeData.font ?? defaultFont,
            padding: shapeData.padding ?? noPadding,
            value: emoji
        } : {
            font: defaultFont,
            padding: noPadding,
            ...shapeData,
            ...emoji
        }, font = emojiOptions.font, value = emojiOptions.value;
        const key = `${value}_${font}`;
        if (this._emojiShapeDict.has(key)) {
            particle.emojiDataKey = key;
            return;
        }
        const padding = emojiOptions.padding * double, maxSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeMax"])(particle.size.value), fullSize = maxSize + padding, canvasSize = fullSize * double;
        let image;
        if (typeof OffscreenCanvas !== "undefined") {
            const canvas = new OffscreenCanvas(canvasSize, canvasSize), context = canvas.getContext("2d");
            if (!context) {
                return;
            }
            context.font = `400 ${maxSize * double}px ${font}`;
            context.textBaseline = "middle";
            context.textAlign = "center";
            context.fillText(value, fullSize, fullSize);
            image = canvas.transferToImageBitmap();
        } else {
            const canvas = document.createElement("canvas");
            canvas.width = canvasSize;
            canvas.height = canvasSize;
            const context = canvas.getContext("2d");
            if (!context) {
                return;
            }
            context.font = `400 ${maxSize * double}px ${font}`;
            context.textBaseline = "middle";
            context.textAlign = "center";
            context.fillText(value, fullSize, fullSize);
            image = canvas;
        }
        this._emojiShapeDict.set(key, image);
        particle.emojiDataKey = key;
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-emoji/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadEmojiShape",
    ()=>loadEmojiShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$emoji$2f$browser$2f$EmojiDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-emoji/browser/EmojiDrawer.js [app-client] (ecmascript)");
;
async function loadEmojiShape(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addShape(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$emoji$2f$browser$2f$EmojiDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmojiDrawer"](), refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-attract/browser/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clickAttract",
    ()=>clickAttract,
    "hoverAttract",
    ()=>hoverAttract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Ranges.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
const minFactor = 1, identity = 1, minRadius = 0;
function processAttract(engine, container, position, attractRadius, area, queryCb) {
    const attractOptions = container.actualOptions.interactivity.modes.attract;
    if (!attractOptions) {
        return;
    }
    const query = container.particles.quadTree.query(area, queryCb);
    for (const particle of query){
        const { dx, dy, distance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistances"])(particle.position, position), velocity = attractOptions.speed * attractOptions.factor, attractFactor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(engine.getEasing(attractOptions.easing)(identity - distance / attractRadius) * velocity, minFactor, attractOptions.maxSpeed), normVec = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector"].create(!distance ? velocity : dx / distance * attractFactor, !distance ? velocity : dy / distance * attractFactor);
        particle.position.subFrom(normVec);
    }
}
function clickAttract(engine, container, enabledCb) {
    if (!container.attract) {
        container.attract = {
            particles: []
        };
    }
    const { attract } = container;
    if (!attract.finish) {
        if (!attract.count) {
            attract.count = 0;
        }
        attract.count++;
        if (attract.count === container.particles.count) {
            attract.finish = true;
        }
    }
    if (attract.clicking) {
        const mousePos = container.interactivity.mouse.clickPosition, attractRadius = container.retina.attractModeDistance;
        if (!attractRadius || attractRadius < minRadius || !mousePos) {
            return;
        }
        processAttract(engine, container, mousePos, attractRadius, new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"](mousePos.x, mousePos.y, attractRadius), (p)=>enabledCb(p));
    } else if (attract.clicking === false) {
        attract.particles = [];
    }
}
function hoverAttract(engine, container, enabledCb) {
    const mousePos = container.interactivity.mouse.position, attractRadius = container.retina.attractModeDistance;
    if (!attractRadius || attractRadius < minRadius || !mousePos) {
        return;
    }
    processAttract(engine, container, mousePos, attractRadius, new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"](mousePos.x, mousePos.y, attractRadius), (p)=>enabledCb(p));
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-attract/browser/Options/Classes/Attract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attract",
    ()=>Attract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EasingType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Types/EasingType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
class Attract {
    constructor(){
        this.distance = 200;
        this.duration = 0.4;
        this.easing = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EasingType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EasingType"].easeOutQuad;
        this.factor = 1;
        this.maxSpeed = 50;
        this.speed = 1;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.duration !== undefined) {
            this.duration = data.duration;
        }
        if (data.easing !== undefined) {
            this.easing = data.easing;
        }
        if (data.factor !== undefined) {
            this.factor = data.factor;
        }
        if (data.maxSpeed !== undefined) {
            this.maxSpeed = data.maxSpeed;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-attract/browser/Attractor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attractor",
    ()=>Attractor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/ExternalInteractorBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$attract$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-attract/browser/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$attract$2f$browser$2f$Options$2f$Classes$2f$Attract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-attract/browser/Options/Classes/Attract.js [app-client] (ecmascript)");
;
;
;
const attractMode = "attract";
class Attractor extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExternalInteractorBase"] {
    constructor(engine, container){
        super(container);
        this._engine = engine;
        if (!container.attract) {
            container.attract = {
                particles: []
            };
        }
        this.handleClickMode = (mode)=>{
            const options = this.container.actualOptions, attract = options.interactivity.modes.attract;
            if (!attract || mode !== attractMode) {
                return;
            }
            if (!container.attract) {
                container.attract = {
                    particles: []
                };
            }
            container.attract.clicking = true;
            container.attract.count = 0;
            for (const particle of container.attract.particles){
                if (!this.isEnabled(particle)) {
                    continue;
                }
                particle.velocity.setTo(particle.initialVelocity);
            }
            container.attract.particles = [];
            container.attract.finish = false;
            setTimeout(()=>{
                if (container.destroyed) {
                    return;
                }
                if (!container.attract) {
                    container.attract = {
                        particles: []
                    };
                }
                container.attract.clicking = false;
            }, attract.duration * __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"]);
        };
    }
    clear() {}
    init() {
        const container = this.container, attract = container.actualOptions.interactivity.modes.attract;
        if (!attract) {
            return;
        }
        container.retina.attractModeDistance = attract.distance * container.retina.pixelRatio;
    }
    interact() {
        const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mouseMoveEvent"], events = options.interactivity.events, { enable: hoverEnabled, mode: hoverMode } = events.onHover, { enable: clickEnabled, mode: clickMode } = events.onClick;
        if (mouseMoveStatus && hoverEnabled && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(attractMode, hoverMode)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$attract$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hoverAttract"])(this._engine, this.container, (p)=>this.isEnabled(p));
        } else if (clickEnabled && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(attractMode, clickMode)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$attract$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clickAttract"])(this._engine, this.container, (p)=>this.isEnabled(p));
        }
    }
    isEnabled(particle) {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? options.interactivity).events;
        if ((!mouse.position || !events.onHover.enable) && (!mouse.clickPosition || !events.onClick.enable)) {
            return false;
        }
        const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(attractMode, hoverMode) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(attractMode, clickMode);
    }
    loadModeOptions(options, ...sources) {
        if (!options.attract) {
            options.attract = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$attract$2f$browser$2f$Options$2f$Classes$2f$Attract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Attract"]();
        }
        for (const source of sources){
            options.attract.load(source?.attract);
        }
    }
    reset() {}
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-attract/browser/Options/Interfaces/IAttract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-attract/browser/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadExternalAttractInteraction",
    ()=>loadExternalAttractInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$attract$2f$browser$2f$Attractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-attract/browser/Attractor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$attract$2f$browser$2f$Options$2f$Classes$2f$Attract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-attract/browser/Options/Classes/Attract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$attract$2f$browser$2f$Options$2f$Interfaces$2f$IAttract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-attract/browser/Options/Interfaces/IAttract.js [app-client] (ecmascript)");
;
async function loadExternalAttractInteraction(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addInteractor("externalAttract", (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$attract$2f$browser$2f$Attractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Attractor"](engine, container));
    }, refresh);
}
;
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bounce/browser/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "divBounce",
    ()=>divBounce,
    "mouseBounce",
    ()=>mouseBounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Ranges.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DivType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Types/DivType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
;
const squareExp = 2, half = 0.5, halfPI = Math.PI * half, double = 2, toleranceFactor = 10, minRadius = 0;
function processBounce(container, position, radius, area, enabledCb) {
    const query = container.particles.quadTree.query(area, enabledCb);
    for (const particle of query){
        if (area instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circleBounce"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circleBounceDataFromParticle"])(particle), {
                position,
                radius,
                mass: radius ** squareExp * halfPI,
                velocity: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector"].origin,
                factor: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector"].origin
            });
        } else if (area instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectBounce"])(particle, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateBounds"])(position, radius));
        }
    }
}
function singleSelectorBounce(container, selector, div, bounceCb) {
    const query = document.querySelectorAll(selector);
    if (!query.length) {
        return;
    }
    query.forEach((item)=>{
        const elem = item, pxRatio = container.retina.pixelRatio, pos = {
            x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
            y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
        }, radius = elem.offsetWidth * half * pxRatio, tolerance = toleranceFactor * pxRatio, area = div.type === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DivType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DivType"].circle ? new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"](pos.x, pos.y, radius + tolerance) : new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"](elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * double, elem.offsetHeight * pxRatio + tolerance * double);
        bounceCb(pos, radius, area);
    });
}
function divBounce(container, divs, bounceMode, enabledCb) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["divModeExecute"])(bounceMode, divs, (selector, div)=>singleSelectorBounce(container, selector, div, (pos, radius, area)=>processBounce(container, pos, radius, area, enabledCb)));
}
function mouseBounce(container, enabledCb) {
    const pxRatio = container.retina.pixelRatio, tolerance = toleranceFactor * pxRatio, mousePos = container.interactivity.mouse.position, radius = container.retina.bounceModeDistance;
    if (!radius || radius < minRadius || !mousePos) {
        return;
    }
    processBounce(container, mousePos, radius, new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"](mousePos.x, mousePos.y, radius + tolerance), enabledCb);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bounce/browser/Options/Classes/Bounce.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bounce",
    ()=>Bounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
class Bounce {
    constructor(){
        this.distance = 200;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bounce/browser/Bouncer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bouncer",
    ()=>Bouncer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/ExternalInteractorBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bounce$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bounce/browser/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bounce$2f$browser$2f$Options$2f$Classes$2f$Bounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bounce/browser/Options/Classes/Bounce.js [app-client] (ecmascript)");
;
;
;
const bounceMode = "bounce";
class Bouncer extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExternalInteractorBase"] {
    constructor(container){
        super(container);
    }
    clear() {}
    init() {
        const container = this.container, bounce = container.actualOptions.interactivity.modes.bounce;
        if (!bounce) {
            return;
        }
        container.retina.bounceModeDistance = bounce.distance * container.retina.pixelRatio;
    }
    interact() {
        const container = this.container, options = container.actualOptions, events = options.interactivity.events, mouseMoveStatus = container.interactivity.status === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mouseMoveEvent"], hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;
        if (mouseMoveStatus && hoverEnabled && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(bounceMode, hoverMode)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bounce$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mouseBounce"])(this.container, (p)=>this.isEnabled(p));
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bounce$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["divBounce"])(this.container, divs, bounceMode, (p)=>this.isEnabled(p));
        }
    }
    isEnabled(particle) {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? options.interactivity).events, divs = events.onDiv;
        return !!mouse.position && events.onHover.enable && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(bounceMode, events.onHover.mode) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDivModeEnabled"])(bounceMode, divs);
    }
    loadModeOptions(options, ...sources) {
        if (!options.bounce) {
            options.bounce = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bounce$2f$browser$2f$Options$2f$Classes$2f$Bounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bounce"]();
        }
        for (const source of sources){
            options.bounce.load(source?.bounce);
        }
    }
    reset() {}
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bounce/browser/Options/Interfaces/IBounce.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bounce/browser/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadExternalBounceInteraction",
    ()=>loadExternalBounceInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bounce$2f$browser$2f$Bouncer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bounce/browser/Bouncer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bounce$2f$browser$2f$Options$2f$Classes$2f$Bounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bounce/browser/Options/Classes/Bounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bounce$2f$browser$2f$Options$2f$Interfaces$2f$IBounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bounce/browser/Options/Interfaces/IBounce.js [app-client] (ecmascript)");
;
async function loadExternalBounceInteraction(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addInteractor("externalBounce", (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bounce$2f$browser$2f$Bouncer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bouncer"](container));
    }, refresh);
}
;
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Options/Classes/BubbleBase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BubbleBase",
    ()=>BubbleBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
class BubbleBase {
    constructor(){
        this.distance = 200;
        this.duration = 0.4;
        this.mix = false;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.duration !== undefined) {
            this.duration = data.duration;
        }
        if (data.mix !== undefined) {
            this.mix = data.mix;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
        if (data.color !== undefined) {
            const sourceColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(this.color) ? undefined : this.color;
            this.color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeOnSingleOrMultiple"])(data.color, (color)=>{
                return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsColor"].create(sourceColor, color);
            });
        }
        if (data.size !== undefined) {
            this.size = data.size;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Options/Classes/BubbleDiv.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BubbleDiv",
    ()=>BubbleDiv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Options$2f$Classes$2f$BubbleBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Options/Classes/BubbleBase.js [app-client] (ecmascript)");
;
;
class BubbleDiv extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Options$2f$Classes$2f$BubbleBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BubbleBase"] {
    constructor(){
        super();
        this.selectors = [];
    }
    load(data) {
        super.load(data);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.selectors !== undefined) {
            this.selectors = data.selectors;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Options/Classes/Bubble.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bubble",
    ()=>Bubble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Options$2f$Classes$2f$BubbleBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Options/Classes/BubbleBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Options$2f$Classes$2f$BubbleDiv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Options/Classes/BubbleDiv.js [app-client] (ecmascript)");
;
;
;
class Bubble extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Options$2f$Classes$2f$BubbleBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BubbleBase"] {
    load(data) {
        super.load(data);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        this.divs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeOnSingleOrMultiple"])(data.divs, (div)=>{
            const tmp = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Options$2f$Classes$2f$BubbleDiv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BubbleDiv"]();
            tmp.load(div);
            return tmp;
        });
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Enums.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProcessBubbleType",
    ()=>ProcessBubbleType
]);
var ProcessBubbleType;
(function(ProcessBubbleType) {
    ProcessBubbleType["color"] = "color";
    ProcessBubbleType["opacity"] = "opacity";
    ProcessBubbleType["size"] = "size";
})(ProcessBubbleType || (ProcessBubbleType = {}));
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateBubbleValue",
    ()=>calculateBubbleValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
function calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
    if (modeValue >= optionsValue) {
        const value = particleValue + (modeValue - optionsValue) * ratio;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(value, particleValue, modeValue);
    } else if (modeValue < optionsValue) {
        const value = particleValue - (optionsValue - modeValue) * ratio;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(value, modeValue, particleValue);
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Bubbler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bubbler",
    ()=>Bubbler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Ranges.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DivType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Types/DivType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/ExternalInteractorBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Options$2f$Classes$2f$Bubble$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Options/Classes/Bubble.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Utils.js [app-client] (ecmascript)");
;
;
;
;
const bubbleMode = "bubble", minDistance = 0, defaultClickTime = 0, double = 2, defaultOpacity = 1, ratioOffset = 1, defaultBubbleValue = 0, minRatio = 0, half = 0.5, defaultRatio = 1;
class Bubbler extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExternalInteractorBase"] {
    constructor(container, engine){
        super(container);
        this._clickBubble = ()=>{
            const container = this.container, options = container.actualOptions, mouseClickPos = container.interactivity.mouse.clickPosition, bubbleOptions = options.interactivity.modes.bubble;
            if (!bubbleOptions || !mouseClickPos) {
                return;
            }
            if (!container.bubble) {
                container.bubble = {};
            }
            const distance = container.retina.bubbleModeDistance;
            if (!distance || distance < minDistance) {
                return;
            }
            const query = container.particles.quadTree.queryCircle(mouseClickPos, distance, (p)=>this.isEnabled(p)), { bubble } = container;
            for (const particle of query){
                if (!bubble.clicking) {
                    continue;
                }
                particle.bubble.inRange = !bubble.durationEnd;
                const pos = particle.getPosition(), distMouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistance"])(pos, mouseClickPos), timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime ?? defaultClickTime)) / __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"];
                if (timeSpent > bubbleOptions.duration) {
                    bubble.durationEnd = true;
                }
                if (timeSpent > bubbleOptions.duration * double) {
                    bubble.clicking = false;
                    bubble.durationEnd = false;
                }
                const sizeData = {
                    bubbleObj: {
                        optValue: container.retina.bubbleModeSize,
                        value: particle.bubble.radius
                    },
                    particlesObj: {
                        optValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeMax"])(particle.options.size.value) * container.retina.pixelRatio,
                        value: particle.size.value
                    },
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProcessBubbleType"].size
                };
                this._process(particle, distMouse, timeSpent, sizeData);
                const opacityData = {
                    bubbleObj: {
                        optValue: bubbleOptions.opacity,
                        value: particle.bubble.opacity
                    },
                    particlesObj: {
                        optValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeMax"])(particle.options.opacity.value),
                        value: particle.opacity?.value ?? defaultOpacity
                    },
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProcessBubbleType"].opacity
                };
                this._process(particle, distMouse, timeSpent, opacityData);
                if (!bubble.durationEnd && distMouse <= distance) {
                    this._hoverBubbleColor(particle, distMouse);
                } else {
                    delete particle.bubble.color;
                }
            }
        };
        this._hoverBubble = ()=>{
            const container = this.container, mousePos = container.interactivity.mouse.position, distance = container.retina.bubbleModeDistance;
            if (!distance || distance < minDistance || !mousePos) {
                return;
            }
            const query = container.particles.quadTree.queryCircle(mousePos, distance, (p)=>this.isEnabled(p));
            for (const particle of query){
                particle.bubble.inRange = true;
                const pos = particle.getPosition(), pointDistance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistance"])(pos, mousePos), ratio = ratioOffset - pointDistance / distance;
                if (pointDistance <= distance) {
                    if (ratio >= minRatio && container.interactivity.status === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mouseMoveEvent"]) {
                        this._hoverBubbleSize(particle, ratio);
                        this._hoverBubbleOpacity(particle, ratio);
                        this._hoverBubbleColor(particle, ratio);
                    }
                } else {
                    this.reset(particle);
                }
                if (container.interactivity.status === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mouseLeaveEvent"]) {
                    this.reset(particle);
                }
            }
        };
        this._hoverBubbleColor = (particle, ratio, divBubble)=>{
            const options = this.container.actualOptions, bubbleOptions = divBubble ?? options.interactivity.modes.bubble;
            if (!bubbleOptions) {
                return;
            }
            if (!particle.bubble.finalColor) {
                const modeColor = bubbleOptions.color;
                if (!modeColor) {
                    return;
                }
                const bubbleColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(modeColor);
                particle.bubble.finalColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeColorToHsl"])(this._engine, bubbleColor);
            }
            if (!particle.bubble.finalColor) {
                return;
            }
            if (bubbleOptions.mix) {
                particle.bubble.color = undefined;
                const pColor = particle.getFillColor();
                particle.bubble.color = pColor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbToHsl"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorMix"])(pColor, particle.bubble.finalColor, ratioOffset - ratio, ratio)) : particle.bubble.finalColor;
            } else {
                particle.bubble.color = particle.bubble.finalColor;
            }
        };
        this._hoverBubbleOpacity = (particle, ratio, divBubble)=>{
            const container = this.container, options = container.actualOptions, modeOpacity = divBubble?.opacity ?? options.interactivity.modes.bubble?.opacity;
            if (!modeOpacity) {
                return;
            }
            const optOpacity = particle.options.opacity.value, pOpacity = particle.opacity?.value ?? defaultOpacity, opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateBubbleValue"])(pOpacity, modeOpacity, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeMax"])(optOpacity), ratio);
            if (opacity !== undefined) {
                particle.bubble.opacity = opacity;
            }
        };
        this._hoverBubbleSize = (particle, ratio, divBubble)=>{
            const container = this.container, modeSize = divBubble?.size ? divBubble.size * container.retina.pixelRatio : container.retina.bubbleModeSize;
            if (modeSize === undefined) {
                return;
            }
            const optSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeMax"])(particle.options.size.value) * container.retina.pixelRatio, pSize = particle.size.value, size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateBubbleValue"])(pSize, modeSize, optSize, ratio);
            if (size !== undefined) {
                particle.bubble.radius = size;
            }
        };
        this._process = (particle, distMouse, timeSpent, data)=>{
            const container = this.container, bubbleParam = data.bubbleObj.optValue, options = container.actualOptions, bubbleOptions = options.interactivity.modes.bubble;
            if (!bubbleOptions || bubbleParam === undefined) {
                return;
            }
            const bubbleDuration = bubbleOptions.duration, bubbleDistance = container.retina.bubbleModeDistance, particlesParam = data.particlesObj.optValue, pObjBubble = data.bubbleObj.value, pObj = data.particlesObj.value ?? defaultBubbleValue, type = data.type;
            if (!bubbleDistance || bubbleDistance < minDistance || bubbleParam === particlesParam) {
                return;
            }
            if (!container.bubble) {
                container.bubble = {};
            }
            if (container.bubble.durationEnd) {
                if (pObjBubble) {
                    if (type === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProcessBubbleType"].size) {
                        delete particle.bubble.radius;
                    }
                    if (type === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProcessBubbleType"].opacity) {
                        delete particle.bubble.opacity;
                    }
                }
            } else {
                if (distMouse <= bubbleDistance) {
                    const obj = pObjBubble ?? pObj;
                    if (obj !== bubbleParam) {
                        const value = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;
                        if (type === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProcessBubbleType"].size) {
                            particle.bubble.radius = value;
                        }
                        if (type === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProcessBubbleType"].opacity) {
                            particle.bubble.opacity = value;
                        }
                    }
                } else {
                    if (type === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProcessBubbleType"].size) {
                        delete particle.bubble.radius;
                    }
                    if (type === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProcessBubbleType"].opacity) {
                        delete particle.bubble.opacity;
                    }
                }
            }
        };
        this._singleSelectorHover = (delta, selector, div)=>{
            const container = this.container, selectors = document.querySelectorAll(selector), bubble = container.actualOptions.interactivity.modes.bubble;
            if (!bubble || !selectors.length) {
                return;
            }
            selectors.forEach((item)=>{
                const elem = item, pxRatio = container.retina.pixelRatio, pos = {
                    x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
                    y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
                }, repulseRadius = elem.offsetWidth * half * pxRatio, area = div.type === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DivType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DivType"].circle ? new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"](pos.x, pos.y, repulseRadius) : new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"](elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), query = container.particles.quadTree.query(area, (p)=>this.isEnabled(p));
                for (const particle of query){
                    if (!area.contains(particle.getPosition())) {
                        continue;
                    }
                    particle.bubble.inRange = true;
                    const divs = bubble.divs, divBubble = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["divMode"])(divs, elem);
                    if (!particle.bubble.div || particle.bubble.div !== elem) {
                        this.clear(particle, delta, true);
                        particle.bubble.div = elem;
                    }
                    this._hoverBubbleSize(particle, defaultRatio, divBubble);
                    this._hoverBubbleOpacity(particle, defaultRatio, divBubble);
                    this._hoverBubbleColor(particle, defaultRatio, divBubble);
                }
            });
        };
        this._engine = engine;
        if (!container.bubble) {
            container.bubble = {};
        }
        this.handleClickMode = (mode)=>{
            if (mode !== bubbleMode) {
                return;
            }
            if (!container.bubble) {
                container.bubble = {};
            }
            container.bubble.clicking = true;
        };
    }
    clear(particle, delta, force) {
        if (particle.bubble.inRange && !force) {
            return;
        }
        delete particle.bubble.div;
        delete particle.bubble.opacity;
        delete particle.bubble.radius;
        delete particle.bubble.color;
    }
    init() {
        const container = this.container, bubble = container.actualOptions.interactivity.modes.bubble;
        if (!bubble) {
            return;
        }
        container.retina.bubbleModeDistance = bubble.distance * container.retina.pixelRatio;
        if (bubble.size !== undefined) {
            container.retina.bubbleModeSize = bubble.size * container.retina.pixelRatio;
        }
    }
    interact(delta) {
        const options = this.container.actualOptions, events = options.interactivity.events, onHover = events.onHover, onClick = events.onClick, hoverEnabled = onHover.enable, hoverMode = onHover.mode, clickEnabled = onClick.enable, clickMode = onClick.mode, divs = events.onDiv;
        if (hoverEnabled && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(bubbleMode, hoverMode)) {
            this._hoverBubble();
        } else if (clickEnabled && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(bubbleMode, clickMode)) {
            this._clickBubble();
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["divModeExecute"])(bubbleMode, divs, (selector, div)=>this._singleSelectorHover(delta, selector, div));
        }
    }
    isEnabled(particle) {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? options.interactivity).events, { onClick, onDiv, onHover } = events, divBubble = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDivModeEnabled"])(bubbleMode, onDiv);
        if (!(divBubble || onHover.enable && !!mouse.position || onClick.enable && mouse.clickPosition)) {
            return false;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(bubbleMode, onHover.mode) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(bubbleMode, onClick.mode) || divBubble;
    }
    loadModeOptions(options, ...sources) {
        if (!options.bubble) {
            options.bubble = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Options$2f$Classes$2f$Bubble$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bubble"]();
        }
        for (const source of sources){
            options.bubble.load(source?.bubble);
        }
    }
    reset(particle) {
        particle.bubble.inRange = false;
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Options/Interfaces/IBubbleBase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Options/Interfaces/IBubbleDiv.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Options/Interfaces/IBubble.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadExternalBubbleInteraction",
    ()=>loadExternalBubbleInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Bubbler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Bubbler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Options$2f$Classes$2f$BubbleBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Options/Classes/BubbleBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Options$2f$Classes$2f$BubbleDiv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Options/Classes/BubbleDiv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Options$2f$Classes$2f$Bubble$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Options/Classes/Bubble.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Options$2f$Interfaces$2f$IBubbleBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Options/Interfaces/IBubbleBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Options$2f$Interfaces$2f$IBubbleDiv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Options/Interfaces/IBubbleDiv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Options$2f$Interfaces$2f$IBubble$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/Options/Interfaces/IBubble.js [app-client] (ecmascript)");
;
async function loadExternalBubbleInteraction(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addInteractor("externalBubble", (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$Bubbler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bubbler"](container, engine));
    }, refresh);
}
;
;
;
;
;
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-connect/browser/Options/Classes/ConnectLinks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectLinks",
    ()=>ConnectLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
class ConnectLinks {
    constructor(){
        this.opacity = 0.5;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-connect/browser/Options/Classes/Connect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Connect",
    ()=>Connect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$connect$2f$browser$2f$Options$2f$Classes$2f$ConnectLinks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-connect/browser/Options/Classes/ConnectLinks.js [app-client] (ecmascript)");
;
;
class Connect {
    constructor(){
        this.distance = 80;
        this.links = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$connect$2f$browser$2f$Options$2f$Classes$2f$ConnectLinks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectLinks"]();
        this.radius = 60;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        this.links.load(data.links);
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-connect/browser/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drawConnectLine",
    ()=>drawConnectLine,
    "drawConnection",
    ()=>drawConnection,
    "gradient",
    ()=>gradient,
    "lineStyle",
    ()=>lineStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/CanvasUtils.js [app-client] (ecmascript)");
;
const gradientMin = 0, gradientMax = 1, defaultLinksWidth = 0;
function gradient(context, p1, p2, opacity) {
    const gradStop = Math.floor(p2.getRadius() / p1.getRadius()), color1 = p1.getFillColor(), color2 = p2.getFillColor();
    if (!color1 || !color2) {
        return;
    }
    const sourcePos = p1.getPosition(), destPos = p2.getPosition(), midRgb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorMix"])(color1, color2, p1.getRadius(), p2.getRadius()), grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
    grad.addColorStop(gradientMin, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleFromHsl"])(color1, opacity));
    grad.addColorStop((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(gradStop, gradientMin, gradientMax), (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleFromRgb"])(midRgb, opacity));
    grad.addColorStop(gradientMax, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleFromHsl"])(color2, opacity));
    return grad;
}
function drawConnectLine(context, width, lineStyle, begin, end) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawLine"])(context, begin, end);
    context.lineWidth = width;
    context.strokeStyle = lineStyle;
    context.stroke();
}
function lineStyle(container, ctx, p1, p2) {
    const options = container.actualOptions, connectOptions = options.interactivity.modes.connect;
    if (!connectOptions) {
        return;
    }
    return gradient(ctx, p1, p2, connectOptions.links.opacity);
}
function drawConnection(container, p1, p2) {
    container.canvas.draw((ctx)=>{
        const ls = lineStyle(container, ctx, p1, p2);
        if (!ls) {
            return;
        }
        const pos1 = p1.getPosition(), pos2 = p2.getPosition();
        drawConnectLine(ctx, p1.retina.linksWidth ?? defaultLinksWidth, ls, pos1, pos2);
    });
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-connect/browser/Connector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Connector",
    ()=>Connector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/ExternalInteractorBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$connect$2f$browser$2f$Options$2f$Classes$2f$Connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-connect/browser/Options/Classes/Connect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$connect$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-connect/browser/Utils.js [app-client] (ecmascript)");
;
;
;
const connectMode = "connect", minDistance = 0;
class Connector extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExternalInteractorBase"] {
    constructor(container){
        super(container);
    }
    clear() {}
    init() {
        const container = this.container, connect = container.actualOptions.interactivity.modes.connect;
        if (!connect) {
            return;
        }
        container.retina.connectModeDistance = connect.distance * container.retina.pixelRatio;
        container.retina.connectModeRadius = connect.radius * container.retina.pixelRatio;
    }
    interact() {
        const container = this.container, options = container.actualOptions;
        if (options.interactivity.events.onHover.enable && container.interactivity.status === "pointermove") {
            const mousePos = container.interactivity.mouse.position, { connectModeDistance, connectModeRadius } = container.retina;
            if (!connectModeDistance || connectModeDistance < minDistance || !connectModeRadius || connectModeRadius < minDistance || !mousePos) {
                return;
            }
            const distance = Math.abs(connectModeRadius), query = container.particles.quadTree.queryCircle(mousePos, distance, (p)=>this.isEnabled(p));
            query.forEach((p1, i)=>{
                const pos1 = p1.getPosition(), indexOffset = 1;
                for (const p2 of query.slice(i + indexOffset)){
                    const pos2 = p2.getPosition(), distMax = Math.abs(connectModeDistance), xDiff = Math.abs(pos1.x - pos2.x), yDiff = Math.abs(pos1.y - pos2.y);
                    if (xDiff < distMax && yDiff < distMax) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$connect$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawConnection"])(container, p1, p2);
                    }
                }
            });
        }
    }
    isEnabled(particle) {
        const container = this.container, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity).events;
        if (!(events.onHover.enable && mouse.position)) {
            return false;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(connectMode, events.onHover.mode);
    }
    loadModeOptions(options, ...sources) {
        if (!options.connect) {
            options.connect = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$connect$2f$browser$2f$Options$2f$Classes$2f$Connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Connect"]();
        }
        for (const source of sources){
            options.connect.load(source?.connect);
        }
    }
    reset() {}
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-connect/browser/Options/Interfaces/IConnect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-connect/browser/Options/Interfaces/IConnectLinks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-connect/browser/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadExternalConnectInteraction",
    ()=>loadExternalConnectInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$connect$2f$browser$2f$Connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-connect/browser/Connector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$connect$2f$browser$2f$Options$2f$Classes$2f$Connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-connect/browser/Options/Classes/Connect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$connect$2f$browser$2f$Options$2f$Classes$2f$ConnectLinks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-connect/browser/Options/Classes/ConnectLinks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$connect$2f$browser$2f$Options$2f$Interfaces$2f$IConnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-connect/browser/Options/Interfaces/IConnect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$connect$2f$browser$2f$Options$2f$Interfaces$2f$IConnectLinks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-connect/browser/Options/Interfaces/IConnectLinks.js [app-client] (ecmascript)");
;
async function loadExternalConnectInteraction(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addInteractor("externalConnect", (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$connect$2f$browser$2f$Connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Connector"](container));
    }, refresh);
}
;
;
;
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-grab/browser/Options/Classes/GrabLinks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GrabLinks",
    ()=>GrabLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
class GrabLinks {
    constructor(){
        this.blink = false;
        this.consent = false;
        this.opacity = 1;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.blink !== undefined) {
            this.blink = data.blink;
        }
        if (data.color !== undefined) {
            this.color = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsColor"].create(this.color, data.color);
        }
        if (data.consent !== undefined) {
            this.consent = data.consent;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-grab/browser/Options/Classes/Grab.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Grab",
    ()=>Grab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$grab$2f$browser$2f$Options$2f$Classes$2f$GrabLinks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-grab/browser/Options/Classes/GrabLinks.js [app-client] (ecmascript)");
;
;
class Grab {
    constructor(){
        this.distance = 100;
        this.links = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$grab$2f$browser$2f$Options$2f$Classes$2f$GrabLinks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrabLinks"]();
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        this.links.load(data.links);
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-grab/browser/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drawGrab",
    ()=>drawGrab,
    "drawGrabLine",
    ()=>drawGrabLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/CanvasUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js [app-client] (ecmascript)");
;
const defaultWidth = 0;
function drawGrabLine(context, width, begin, end, colorLine, opacity) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawLine"])(context, begin, end);
    context.strokeStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleFromRgb"])(colorLine, opacity);
    context.lineWidth = width;
    context.stroke();
}
function drawGrab(container, particle, lineColor, opacity, mousePos) {
    container.canvas.draw((ctx)=>{
        const beginPos = particle.getPosition();
        drawGrabLine(ctx, particle.retina.linksWidth ?? defaultWidth, beginPos, mousePos, lineColor, opacity);
    });
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-grab/browser/Grabber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Grabber",
    ()=>Grabber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/ExternalInteractorBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$grab$2f$browser$2f$Options$2f$Classes$2f$Grab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-grab/browser/Options/Classes/Grab.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$grab$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-grab/browser/Utils.js [app-client] (ecmascript)");
;
;
;
const grabMode = "grab", minDistance = 0, minOpacity = 0;
class Grabber extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExternalInteractorBase"] {
    constructor(container, engine){
        super(container);
        this._engine = engine;
    }
    clear() {}
    init() {
        const container = this.container, grab = container.actualOptions.interactivity.modes.grab;
        if (!grab) {
            return;
        }
        container.retina.grabModeDistance = grab.distance * container.retina.pixelRatio;
    }
    interact() {
        const container = this.container, options = container.actualOptions, interactivity = options.interactivity;
        if (!interactivity.modes.grab || !interactivity.events.onHover.enable || container.interactivity.status !== __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mouseMoveEvent"]) {
            return;
        }
        const mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        const distance = container.retina.grabModeDistance;
        if (!distance || distance < minDistance) {
            return;
        }
        const query = container.particles.quadTree.queryCircle(mousePos, distance, (p)=>this.isEnabled(p));
        for (const particle of query){
            const pos = particle.getPosition(), pointDistance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistance"])(pos, mousePos);
            if (pointDistance > distance) {
                continue;
            }
            const grabLineOptions = interactivity.modes.grab.links, lineOpacity = grabLineOptions.opacity, opacityLine = lineOpacity - pointDistance * lineOpacity / distance;
            if (opacityLine <= minOpacity) {
                continue;
            }
            const optColor = grabLineOptions.color ?? particle.options.links?.color;
            if (!container.particles.grabLineColor && optColor) {
                const linksOptions = interactivity.modes.grab.links;
                container.particles.grabLineColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLinkRandomColor"])(this._engine, optColor, linksOptions.blink, linksOptions.consent);
            }
            const colorLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLinkColor"])(particle, undefined, container.particles.grabLineColor);
            if (!colorLine) {
                continue;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$grab$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawGrab"])(container, particle, colorLine, opacityLine, mousePos);
        }
    }
    isEnabled(particle) {
        const container = this.container, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity).events;
        return events.onHover.enable && !!mouse.position && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(grabMode, events.onHover.mode);
    }
    loadModeOptions(options, ...sources) {
        if (!options.grab) {
            options.grab = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$grab$2f$browser$2f$Options$2f$Classes$2f$Grab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grab"]();
        }
        for (const source of sources){
            options.grab.load(source?.grab);
        }
    }
    reset() {}
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-grab/browser/Options/Interfaces/IGrab.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-grab/browser/Options/Interfaces/IGrabLinks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-grab/browser/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadExternalGrabInteraction",
    ()=>loadExternalGrabInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$grab$2f$browser$2f$Grabber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-grab/browser/Grabber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$grab$2f$browser$2f$Options$2f$Classes$2f$Grab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-grab/browser/Options/Classes/Grab.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$grab$2f$browser$2f$Options$2f$Classes$2f$GrabLinks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-grab/browser/Options/Classes/GrabLinks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$grab$2f$browser$2f$Options$2f$Interfaces$2f$IGrab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-grab/browser/Options/Interfaces/IGrab.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$grab$2f$browser$2f$Options$2f$Interfaces$2f$IGrabLinks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-grab/browser/Options/Interfaces/IGrabLinks.js [app-client] (ecmascript)");
;
async function loadExternalGrabInteraction(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addInteractor("externalGrab", (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$grab$2f$browser$2f$Grabber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grabber"](container, engine));
    }, refresh);
}
;
;
;
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-pause/browser/Pauser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pauser",
    ()=>Pauser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/ExternalInteractorBase.js [app-client] (ecmascript)");
;
const pauseMode = "pause";
class Pauser extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExternalInteractorBase"] {
    constructor(container){
        super(container);
        this.handleClickMode = (mode)=>{
            if (mode !== pauseMode) {
                return;
            }
            const container = this.container;
            if (container.animationStatus) {
                container.pause();
            } else {
                container.play();
            }
        };
    }
    clear() {}
    init() {}
    interact() {}
    isEnabled() {
        return true;
    }
    reset() {}
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-pause/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadExternalPauseInteraction",
    ()=>loadExternalPauseInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$pause$2f$browser$2f$Pauser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-pause/browser/Pauser.js [app-client] (ecmascript)");
;
async function loadExternalPauseInteraction(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addInteractor("externalPause", (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$pause$2f$browser$2f$Pauser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pauser"](container));
    }, refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-push/browser/Options/Classes/Push.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Push",
    ()=>Push
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
class Push {
    constructor(){
        this.default = true;
        this.groups = [];
        this.quantity = 4;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.default !== undefined) {
            this.default = data.default;
        }
        if (data.groups !== undefined) {
            this.groups = data.groups.map((t)=>t);
        }
        if (!this.groups.length) {
            this.default = true;
        }
        const quantity = data.quantity;
        if (quantity !== undefined) {
            this.quantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(quantity);
        }
        this.particles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeOnSingleOrMultiple"])(data.particles, (particles)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepExtend"])({}, particles);
        });
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-push/browser/Pusher.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pusher",
    ()=>Pusher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/ExternalInteractorBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$push$2f$browser$2f$Options$2f$Classes$2f$Push$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-push/browser/Options/Classes/Push.js [app-client] (ecmascript)");
;
;
const pushMode = "push", minQuantity = 0;
class Pusher extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExternalInteractorBase"] {
    constructor(container){
        super(container);
        this.handleClickMode = (mode)=>{
            if (mode !== pushMode) {
                return;
            }
            const container = this.container, options = container.actualOptions, pushOptions = options.interactivity.modes.push;
            if (!pushOptions) {
                return;
            }
            const quantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(pushOptions.quantity);
            if (quantity <= minQuantity) {
                return;
            }
            const group = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemFromArray"])([
                undefined,
                ...pushOptions.groups
            ]), groupOptions = group !== undefined ? container.actualOptions.particles.groups[group] : undefined, particlesOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(pushOptions.particles), overrideOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepExtend"])(groupOptions, particlesOptions);
            void container.particles.push(quantity, container.interactivity.mouse, overrideOptions, group);
        };
    }
    clear() {}
    init() {}
    interact() {}
    isEnabled() {
        return true;
    }
    loadModeOptions(options, ...sources) {
        if (!options.push) {
            options.push = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$push$2f$browser$2f$Options$2f$Classes$2f$Push$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Push"]();
        }
        for (const source of sources){
            options.push.load(source?.push);
        }
    }
    reset() {}
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-push/browser/Options/Interfaces/IPush.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-push/browser/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadExternalPushInteraction",
    ()=>loadExternalPushInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$push$2f$browser$2f$Pusher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-push/browser/Pusher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$push$2f$browser$2f$Options$2f$Classes$2f$Push$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-push/browser/Options/Classes/Push.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$push$2f$browser$2f$Options$2f$Interfaces$2f$IPush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-push/browser/Options/Interfaces/IPush.js [app-client] (ecmascript)");
;
async function loadExternalPushInteraction(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addInteractor("externalPush", (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$push$2f$browser$2f$Pusher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pusher"](container));
    }, refresh);
}
;
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-remove/browser/Options/Classes/Remove.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Remove",
    ()=>Remove
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
class Remove {
    constructor(){
        this.quantity = 2;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        const quantity = data.quantity;
        if (quantity !== undefined) {
            this.quantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(quantity);
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-remove/browser/Remover.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Remover",
    ()=>Remover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/ExternalInteractorBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$remove$2f$browser$2f$Options$2f$Classes$2f$Remove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-remove/browser/Options/Classes/Remove.js [app-client] (ecmascript)");
;
;
const removeMode = "remove";
class Remover extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExternalInteractorBase"] {
    constructor(container){
        super(container);
        this.handleClickMode = (mode)=>{
            const container = this.container, options = container.actualOptions;
            if (!options.interactivity.modes.remove || mode !== removeMode) {
                return;
            }
            const removeNb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(options.interactivity.modes.remove.quantity);
            container.particles.removeQuantity(removeNb);
        };
    }
    clear() {}
    init() {}
    interact() {}
    isEnabled() {
        return true;
    }
    loadModeOptions(options, ...sources) {
        if (!options.remove) {
            options.remove = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$remove$2f$browser$2f$Options$2f$Classes$2f$Remove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Remove"]();
        }
        for (const source of sources){
            options.remove.load(source?.remove);
        }
    }
    reset() {}
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-remove/browser/Options/Interfaces/IRemove.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-remove/browser/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadExternalRemoveInteraction",
    ()=>loadExternalRemoveInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$remove$2f$browser$2f$Remover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-remove/browser/Remover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$remove$2f$browser$2f$Options$2f$Classes$2f$Remove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-remove/browser/Options/Classes/Remove.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$remove$2f$browser$2f$Options$2f$Interfaces$2f$IRemove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-remove/browser/Options/Interfaces/IRemove.js [app-client] (ecmascript)");
;
async function loadExternalRemoveInteraction(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addInteractor("externalRemove", (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$remove$2f$browser$2f$Remover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Remover"](container));
    }, refresh);
}
;
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Options/Classes/RepulseBase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RepulseBase",
    ()=>RepulseBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EasingType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Types/EasingType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
class RepulseBase {
    constructor(){
        this.distance = 200;
        this.duration = 0.4;
        this.factor = 100;
        this.speed = 1;
        this.maxSpeed = 50;
        this.easing = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EasingType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EasingType"].easeOutQuad;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.duration !== undefined) {
            this.duration = data.duration;
        }
        if (data.easing !== undefined) {
            this.easing = data.easing;
        }
        if (data.factor !== undefined) {
            this.factor = data.factor;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
        if (data.maxSpeed !== undefined) {
            this.maxSpeed = data.maxSpeed;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Options/Classes/RepulseDiv.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RepulseDiv",
    ()=>RepulseDiv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$Options$2f$Classes$2f$RepulseBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Options/Classes/RepulseBase.js [app-client] (ecmascript)");
;
;
class RepulseDiv extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$Options$2f$Classes$2f$RepulseBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepulseBase"] {
    constructor(){
        super();
        this.selectors = [];
    }
    load(data) {
        super.load(data);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.selectors !== undefined) {
            this.selectors = data.selectors;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Options/Classes/Repulse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Repulse",
    ()=>Repulse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$Options$2f$Classes$2f$RepulseBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Options/Classes/RepulseBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$Options$2f$Classes$2f$RepulseDiv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Options/Classes/RepulseDiv.js [app-client] (ecmascript)");
;
;
;
class Repulse extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$Options$2f$Classes$2f$RepulseBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepulseBase"] {
    load(data) {
        super.load(data);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        this.divs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeOnSingleOrMultiple"])(data.divs, (div)=>{
            const tmp = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$Options$2f$Classes$2f$RepulseDiv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepulseDiv"]();
            tmp.load(div);
            return tmp;
        });
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Repulser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Repulser",
    ()=>Repulser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Ranges.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DivType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Types/DivType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/ExternalInteractorBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$Options$2f$Classes$2f$Repulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Options/Classes/Repulse.js [app-client] (ecmascript)");
;
;
const repulseMode = "repulse", minDistance = 0, repulseRadiusFactor = 6, repulseRadiusPower = 3, squarePower = 2, minRadius = 0, minSpeed = 0, easingOffset = 1, half = 0.5;
class Repulser extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExternalInteractorBase"] {
    constructor(engine, container){
        super(container);
        this._clickRepulse = ()=>{
            const container = this.container, repulseOptions = container.actualOptions.interactivity.modes.repulse;
            if (!repulseOptions) {
                return;
            }
            const repulse = container.repulse ?? {
                particles: []
            };
            if (!repulse.finish) {
                if (!repulse.count) {
                    repulse.count = 0;
                }
                repulse.count++;
                if (repulse.count === container.particles.count) {
                    repulse.finish = true;
                }
            }
            if (repulse.clicking) {
                const repulseDistance = container.retina.repulseModeDistance;
                if (!repulseDistance || repulseDistance < minDistance) {
                    return;
                }
                const repulseRadius = Math.pow(repulseDistance / repulseRadiusFactor, repulseRadiusPower), mouseClickPos = container.interactivity.mouse.clickPosition;
                if (mouseClickPos === undefined) {
                    return;
                }
                const range = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"](mouseClickPos.x, mouseClickPos.y, repulseRadius), query = container.particles.quadTree.query(range, (p)=>this.isEnabled(p));
                for (const particle of query){
                    const { dx, dy, distance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistances"])(mouseClickPos, particle.position), d = distance ** squarePower, velocity = repulseOptions.speed, force = -repulseRadius * velocity / d;
                    if (d <= repulseRadius) {
                        repulse.particles.push(particle);
                        const vect = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector"].create(dx, dy);
                        vect.length = force;
                        particle.velocity.setTo(vect);
                    }
                }
            } else if (repulse.clicking === false) {
                for (const particle of repulse.particles){
                    particle.velocity.setTo(particle.initialVelocity);
                }
                repulse.particles = [];
            }
        };
        this._hoverRepulse = ()=>{
            const container = this.container, mousePos = container.interactivity.mouse.position, repulseRadius = container.retina.repulseModeDistance;
            if (!repulseRadius || repulseRadius < minRadius || !mousePos) {
                return;
            }
            this._processRepulse(mousePos, repulseRadius, new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"](mousePos.x, mousePos.y, repulseRadius));
        };
        this._processRepulse = (position, repulseRadius, area, divRepulse)=>{
            const container = this.container, query = container.particles.quadTree.query(area, (p)=>this.isEnabled(p)), repulseOptions = container.actualOptions.interactivity.modes.repulse;
            if (!repulseOptions) {
                return;
            }
            const { easing, speed, factor, maxSpeed } = repulseOptions, easingFunc = this._engine.getEasing(easing), velocity = (divRepulse?.speed ?? speed) * factor;
            for (const particle of query){
                const { dx, dy, distance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistances"])(particle.position, position), repulseFactor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(easingFunc(easingOffset - distance / repulseRadius) * velocity, minSpeed, maxSpeed), normVec = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector"].create(!distance ? velocity : dx / distance * repulseFactor, !distance ? velocity : dy / distance * repulseFactor);
                particle.position.addTo(normVec);
            }
        };
        this._singleSelectorRepulse = (selector, div)=>{
            const container = this.container, repulse = container.actualOptions.interactivity.modes.repulse;
            if (!repulse) {
                return;
            }
            const query = document.querySelectorAll(selector);
            if (!query.length) {
                return;
            }
            query.forEach((item)=>{
                const elem = item, pxRatio = container.retina.pixelRatio, pos = {
                    x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
                    y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
                }, repulseRadius = elem.offsetWidth * half * pxRatio, area = div.type === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DivType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DivType"].circle ? new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"](pos.x, pos.y, repulseRadius) : new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"](elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), divs = repulse.divs, divRepulse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["divMode"])(divs, elem);
                this._processRepulse(pos, repulseRadius, area, divRepulse);
            });
        };
        this._engine = engine;
        if (!container.repulse) {
            container.repulse = {
                particles: []
            };
        }
        this.handleClickMode = (mode)=>{
            const options = this.container.actualOptions, repulseOpts = options.interactivity.modes.repulse;
            if (!repulseOpts || mode !== repulseMode) {
                return;
            }
            if (!container.repulse) {
                container.repulse = {
                    particles: []
                };
            }
            const repulse = container.repulse;
            repulse.clicking = true;
            repulse.count = 0;
            for (const particle of container.repulse.particles){
                if (!this.isEnabled(particle)) {
                    continue;
                }
                particle.velocity.setTo(particle.initialVelocity);
            }
            repulse.particles = [];
            repulse.finish = false;
            setTimeout(()=>{
                if (container.destroyed) {
                    return;
                }
                repulse.clicking = false;
            }, repulseOpts.duration * __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"]);
        };
    }
    clear() {}
    init() {
        const container = this.container, repulse = container.actualOptions.interactivity.modes.repulse;
        if (!repulse) {
            return;
        }
        container.retina.repulseModeDistance = repulse.distance * container.retina.pixelRatio;
    }
    interact() {
        const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mouseMoveEvent"], events = options.interactivity.events, hover = events.onHover, hoverEnabled = hover.enable, hoverMode = hover.mode, click = events.onClick, clickEnabled = click.enable, clickMode = click.mode, divs = events.onDiv;
        if (mouseMoveStatus && hoverEnabled && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(repulseMode, hoverMode)) {
            this._hoverRepulse();
        } else if (clickEnabled && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(repulseMode, clickMode)) {
            this._clickRepulse();
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["divModeExecute"])(repulseMode, divs, (selector, div)=>this._singleSelectorRepulse(selector, div));
        }
    }
    isEnabled(particle) {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? options.interactivity).events, divs = events.onDiv, hover = events.onHover, click = events.onClick, divRepulse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDivModeEnabled"])(repulseMode, divs);
        if (!(divRepulse || hover.enable && !!mouse.position || click.enable && mouse.clickPosition)) {
            return false;
        }
        const hoverMode = hover.mode, clickMode = click.mode;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(repulseMode, hoverMode) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(repulseMode, clickMode) || divRepulse;
    }
    loadModeOptions(options, ...sources) {
        if (!options.repulse) {
            options.repulse = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$Options$2f$Classes$2f$Repulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repulse"]();
        }
        for (const source of sources){
            options.repulse.load(source?.repulse);
        }
    }
    reset() {}
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Options/Interfaces/IRepulseBase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Options/Interfaces/IRepulseDiv.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Options/Interfaces/IRepulse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadExternalRepulseInteraction",
    ()=>loadExternalRepulseInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$Repulser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Repulser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$Options$2f$Classes$2f$RepulseBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Options/Classes/RepulseBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$Options$2f$Classes$2f$RepulseDiv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Options/Classes/RepulseDiv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$Options$2f$Classes$2f$Repulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Options/Classes/Repulse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$Options$2f$Interfaces$2f$IRepulseBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Options/Interfaces/IRepulseBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$Options$2f$Interfaces$2f$IRepulseDiv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Options/Interfaces/IRepulseDiv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$Options$2f$Interfaces$2f$IRepulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/Options/Interfaces/IRepulse.js [app-client] (ecmascript)");
;
async function loadExternalRepulseInteraction(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addInteractor("externalRepulse", (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$Repulser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repulser"](engine, container));
    }, refresh);
}
;
;
;
;
;
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-slow/browser/Options/Classes/Slow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slow",
    ()=>Slow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
class Slow {
    constructor(){
        this.factor = 3;
        this.radius = 200;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.factor !== undefined) {
            this.factor = data.factor;
        }
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-slow/browser/Slower.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slower",
    ()=>Slower
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/ExternalInteractorBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$slow$2f$browser$2f$Options$2f$Classes$2f$Slow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-slow/browser/Options/Classes/Slow.js [app-client] (ecmascript)");
;
;
const slowMode = "slow", minRadius = 0;
class Slower extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExternalInteractorBase"] {
    constructor(container){
        super(container);
    }
    clear(particle, delta, force) {
        if (particle.slow.inRange && !force) {
            return;
        }
        particle.slow.factor = 1;
    }
    init() {
        const container = this.container, slow = container.actualOptions.interactivity.modes.slow;
        if (!slow) {
            return;
        }
        container.retina.slowModeRadius = slow.radius * container.retina.pixelRatio;
    }
    interact() {}
    isEnabled(particle) {
        const container = this.container, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity).events;
        return events.onHover.enable && !!mouse.position && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(slowMode, events.onHover.mode);
    }
    loadModeOptions(options, ...sources) {
        if (!options.slow) {
            options.slow = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$slow$2f$browser$2f$Options$2f$Classes$2f$Slow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slow"]();
        }
        for (const source of sources){
            options.slow.load(source?.slow);
        }
    }
    reset(particle) {
        particle.slow.inRange = false;
        const container = this.container, options = container.actualOptions, mousePos = container.interactivity.mouse.position, radius = container.retina.slowModeRadius, slowOptions = options.interactivity.modes.slow;
        if (!slowOptions || !radius || radius < minRadius || !mousePos) {
            return;
        }
        const particlePos = particle.getPosition(), dist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistance"])(mousePos, particlePos), proximityFactor = dist / radius, slowFactor = slowOptions.factor, { slow } = particle;
        if (dist > radius) {
            return;
        }
        slow.inRange = true;
        slow.factor = proximityFactor / slowFactor;
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-slow/browser/Options/Interfaces/ISlow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-slow/browser/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadExternalSlowInteraction",
    ()=>loadExternalSlowInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$slow$2f$browser$2f$Slower$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-slow/browser/Slower.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$slow$2f$browser$2f$Options$2f$Classes$2f$Slow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-slow/browser/Options/Classes/Slow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$slow$2f$browser$2f$Options$2f$Interfaces$2f$ISlow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-slow/browser/Options/Interfaces/ISlow.js [app-client] (ecmascript)");
;
async function loadExternalSlowInteraction(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addInteractor("externalSlow", (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$slow$2f$browser$2f$Slower$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slower"](container));
    }, refresh);
}
;
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadSvgImage",
    ()=>downloadSvgImage,
    "loadImage",
    ()=>loadImage,
    "replaceImageColor",
    ()=>replaceImageColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js [app-client] (ecmascript)");
;
const stringStart = 0, defaultOpacity = 1;
const currentColorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
function replaceColorSvg(imageShape, color, opacity) {
    const { svgData } = imageShape;
    if (!svgData) {
        return "";
    }
    const colorStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleFromHsl"])(color, opacity);
    if (svgData.includes("fill")) {
        return svgData.replace(currentColorRegex, ()=>colorStyle);
    }
    const preFillIndex = svgData.indexOf(">");
    return `${svgData.substring(stringStart, preFillIndex)} fill="${colorStyle}"${svgData.substring(preFillIndex)}`;
}
async function loadImage(image) {
    return new Promise((resolve)=>{
        image.loading = true;
        const img = new Image();
        image.element = img;
        img.addEventListener("load", ()=>{
            image.loading = false;
            resolve();
        });
        img.addEventListener("error", ()=>{
            image.element = undefined;
            image.error = true;
            image.loading = false;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])().error(`${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorPrefix"]} loading image: ${image.source}`);
            resolve();
        });
        img.src = image.source;
    });
}
async function downloadSvgImage(image) {
    if (image.type !== "svg") {
        await loadImage(image);
        return;
    }
    image.loading = true;
    const response = await fetch(image.source);
    if (!response.ok) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])().error(`${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorPrefix"]} Image not found`);
        image.error = true;
    } else {
        image.svgData = await response.text();
    }
    image.loading = false;
}
function replaceImageColor(image, imageData, color, particle) {
    const svgColoredData = replaceColorSvg(image, color, particle.opacity?.value ?? defaultOpacity), imageRes = {
        color,
        gif: imageData.gif,
        data: {
            ...image,
            svgData: svgColoredData
        },
        loaded: false,
        ratio: imageData.width / imageData.height,
        replaceColor: imageData.replaceColor,
        source: imageData.src
    };
    return new Promise((resolve)=>{
        const svg = new Blob([
            svgColoredData
        ], {
            type: "image/svg+xml"
        }), domUrl = URL || window.URL || window.webkitURL || window, url = domUrl.createObjectURL(svg), img = new Image();
        img.addEventListener("load", ()=>{
            imageRes.loaded = true;
            imageRes.element = img;
            resolve(imageRes);
            domUrl.revokeObjectURL(url);
        });
        const errorHandler = async ()=>{
            domUrl.revokeObjectURL(url);
            const img2 = {
                ...image,
                error: false,
                loading: true
            };
            await loadImage(img2);
            imageRes.loaded = true;
            imageRes.element = img2.element;
            resolve(imageRes);
        };
        img.addEventListener("error", ()=>void errorHandler());
        img.src = url;
    });
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/GifUtils/Constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InterlaceOffsets",
    ()=>InterlaceOffsets,
    "InterlaceSteps",
    ()=>InterlaceSteps
]);
const InterlaceOffsets = [
    0,
    4,
    2,
    1
];
const InterlaceSteps = [
    8,
    8,
    4,
    2
];
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/GifUtils/ByteStream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ByteStream",
    ()=>ByteStream
]);
class ByteStream {
    constructor(bytes){
        this.pos = 0;
        this.data = new Uint8ClampedArray(bytes);
    }
    getString(count) {
        const slice = this.data.slice(this.pos, this.pos + count);
        this.pos += slice.length;
        return slice.reduce((acc, curr)=>acc + String.fromCharCode(curr), "");
    }
    nextByte() {
        return this.data[this.pos++];
    }
    nextTwoBytes() {
        const increment = 2, previous = 1, shift = 8;
        this.pos += increment;
        return this.data[this.pos - increment] + (this.data[this.pos - previous] << shift);
    }
    readSubBlocks() {
        let blockString = "", size = 0;
        const minCount = 0, emptySize = 0;
        do {
            size = this.data[this.pos++];
            for(let count = size; --count >= minCount; blockString += String.fromCharCode(this.data[this.pos++])){}
        }while (size !== emptySize)
        return blockString;
    }
    readSubBlocksBin() {
        let size = this.data[this.pos], len = 0;
        const emptySize = 0, increment = 1;
        for(let offset = 0; size !== emptySize; offset += size + increment, size = this.data[this.pos + offset]){
            len += size;
        }
        const blockData = new Uint8Array(len);
        size = this.data[this.pos++];
        for(let i = 0; size !== emptySize; size = this.data[this.pos++]){
            for(let count = size; --count >= emptySize; blockData[i++] = this.data[this.pos++]){}
        }
        return blockData;
    }
    skipSubBlocks() {
        for(const increment = 1, noData = 0; this.data[this.pos] !== noData; this.pos += this.data[this.pos] + increment){}
        this.pos++;
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/GifUtils/Enums/DisposalMethod.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DisposalMethod",
    ()=>DisposalMethod
]);
var DisposalMethod;
(function(DisposalMethod) {
    DisposalMethod[DisposalMethod["Replace"] = 0] = "Replace";
    DisposalMethod[DisposalMethod["Combine"] = 1] = "Combine";
    DisposalMethod[DisposalMethod["RestoreBackground"] = 2] = "RestoreBackground";
    DisposalMethod[DisposalMethod["RestorePrevious"] = 3] = "RestorePrevious";
    DisposalMethod[DisposalMethod["UndefinedA"] = 4] = "UndefinedA";
    DisposalMethod[DisposalMethod["UndefinedB"] = 5] = "UndefinedB";
    DisposalMethod[DisposalMethod["UndefinedC"] = 6] = "UndefinedC";
    DisposalMethod[DisposalMethod["UndefinedD"] = 7] = "UndefinedD";
})(DisposalMethod || (DisposalMethod = {}));
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/GifUtils/Types/GIFDataHeaders.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GIFDataHeaders",
    ()=>GIFDataHeaders
]);
var GIFDataHeaders;
(function(GIFDataHeaders) {
    GIFDataHeaders[GIFDataHeaders["Extension"] = 33] = "Extension";
    GIFDataHeaders[GIFDataHeaders["ApplicationExtension"] = 255] = "ApplicationExtension";
    GIFDataHeaders[GIFDataHeaders["GraphicsControlExtension"] = 249] = "GraphicsControlExtension";
    GIFDataHeaders[GIFDataHeaders["PlainTextExtension"] = 1] = "PlainTextExtension";
    GIFDataHeaders[GIFDataHeaders["CommentExtension"] = 254] = "CommentExtension";
    GIFDataHeaders[GIFDataHeaders["Image"] = 44] = "Image";
    GIFDataHeaders[GIFDataHeaders["EndOfFile"] = 59] = "EndOfFile";
})(GIFDataHeaders || (GIFDataHeaders = {}));
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/GifUtils/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeGIF",
    ()=>decodeGIF,
    "drawGif",
    ()=>drawGif,
    "getGIFLoopAmount",
    ()=>getGIFLoopAmount,
    "loadGifImage",
    ()=>loadGifImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/GifUtils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$ByteStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/GifUtils/ByteStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Enums$2f$DisposalMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/GifUtils/Enums/DisposalMethod.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Types$2f$GIFDataHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/GifUtils/Types/GIFDataHeaders.js [app-client] (ecmascript)");
;
;
;
;
;
const origin = {
    x: 0,
    y: 0
}, defaultFrame = 0, half = 0.5, initialTime = 0, firstIndex = 0, defaultLoopCount = 0;
function parseColorTable(byteStream, count) {
    const colors = [];
    for(let i = 0; i < count; i++){
        colors.push({
            r: byteStream.data[byteStream.pos],
            g: byteStream.data[byteStream.pos + 1],
            b: byteStream.data[byteStream.pos + 2]
        });
        byteStream.pos += 3;
    }
    return colors;
}
function parseExtensionBlock(byteStream, gif, getFrameIndex, getTransparencyIndex) {
    switch(byteStream.nextByte()){
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Types$2f$GIFDataHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GIFDataHeaders"].GraphicsControlExtension:
            {
                const frame = gif.frames[getFrameIndex(false)];
                byteStream.pos++;
                const packedByte = byteStream.nextByte();
                frame.GCreserved = (packedByte & 0xe0) >>> 5;
                frame.disposalMethod = (packedByte & 0x1c) >>> 2;
                frame.userInputDelayFlag = (packedByte & 2) === 2;
                const transparencyFlag = (packedByte & 1) === 1;
                frame.delayTime = byteStream.nextTwoBytes() * 0xa;
                const transparencyIndex = byteStream.nextByte();
                if (transparencyFlag) {
                    getTransparencyIndex(transparencyIndex);
                }
                byteStream.pos++;
                break;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Types$2f$GIFDataHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GIFDataHeaders"].ApplicationExtension:
            {
                byteStream.pos++;
                const applicationExtension = {
                    identifier: byteStream.getString(8),
                    authenticationCode: byteStream.getString(3),
                    data: byteStream.readSubBlocksBin()
                };
                gif.applicationExtensions.push(applicationExtension);
                break;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Types$2f$GIFDataHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GIFDataHeaders"].CommentExtension:
            {
                gif.comments.push([
                    getFrameIndex(false),
                    byteStream.readSubBlocks()
                ]);
                break;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Types$2f$GIFDataHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GIFDataHeaders"].PlainTextExtension:
            {
                if (gif.globalColorTable.length === 0) {
                    throw new EvalError("plain text extension without global color table");
                }
                byteStream.pos++;
                gif.frames[getFrameIndex(false)].plainTextData = {
                    left: byteStream.nextTwoBytes(),
                    top: byteStream.nextTwoBytes(),
                    width: byteStream.nextTwoBytes(),
                    height: byteStream.nextTwoBytes(),
                    charSize: {
                        width: byteStream.nextTwoBytes(),
                        height: byteStream.nextTwoBytes()
                    },
                    foregroundColor: byteStream.nextByte(),
                    backgroundColor: byteStream.nextByte(),
                    text: byteStream.readSubBlocks()
                };
                break;
            }
        default:
            byteStream.skipSubBlocks();
            break;
    }
}
async function parseImageBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback) {
    const frame = gif.frames[getFrameIndex(true)];
    frame.left = byteStream.nextTwoBytes();
    frame.top = byteStream.nextTwoBytes();
    frame.width = byteStream.nextTwoBytes();
    frame.height = byteStream.nextTwoBytes();
    const packedByte = byteStream.nextByte(), localColorTableFlag = (packedByte & 0x80) === 0x80, interlacedFlag = (packedByte & 0x40) === 0x40;
    frame.sortFlag = (packedByte & 0x20) === 0x20;
    frame.reserved = (packedByte & 0x18) >>> 3;
    const localColorCount = 1 << (packedByte & 7) + 1;
    if (localColorTableFlag) {
        frame.localColorTable = parseColorTable(byteStream, localColorCount);
    }
    const getColor = (index)=>{
        const { r, g, b } = (localColorTableFlag ? frame.localColorTable : gif.globalColorTable)[index];
        if (index !== getTransparencyIndex(null)) {
            return {
                r,
                g,
                b,
                a: 255
            };
        }
        return {
            r,
            g,
            b,
            a: avgAlpha ? ~~((r + g + b) / 3) : 0
        };
    };
    const image = (()=>{
        try {
            return new ImageData(frame.width, frame.height, {
                colorSpace: "srgb"
            });
        } catch (error) {
            if (error instanceof DOMException && error.name === "IndexSizeError") {
                return null;
            }
            throw error;
        }
    })();
    if (image == null) {
        throw new EvalError("GIF frame size is to large");
    }
    const minCodeSize = byteStream.nextByte(), imageData = byteStream.readSubBlocksBin(), clearCode = 1 << minCodeSize;
    const readBits = (pos, len)=>{
        const bytePos = pos >>> 3, bitPos = pos & 7;
        return (imageData[bytePos] + (imageData[bytePos + 1] << 8) + (imageData[bytePos + 2] << 16) & (1 << len) - 1 << bitPos) >>> bitPos;
    };
    if (interlacedFlag) {
        for(let code = 0, size = minCodeSize + 1, pos = 0, dic = [
            [
                0
            ]
        ], pass = 0; pass < 4; pass++){
            if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InterlaceOffsets"][pass] < frame.height) {
                let pixelPos = 0, lineIndex = 0, exit = false;
                while(!exit){
                    const last = code;
                    code = readBits(pos, size);
                    pos += size + 1;
                    if (code === clearCode) {
                        size = minCodeSize + 1;
                        dic.length = clearCode + 2;
                        for(let i = 0; i < dic.length; i++){
                            dic[i] = i < clearCode ? [
                                i
                            ] : [];
                        }
                    } else {
                        if (code >= dic.length) {
                            dic.push(dic[last].concat(dic[last][0]));
                        } else if (last !== clearCode) {
                            dic.push(dic[last].concat(dic[code][0]));
                        }
                        for (const item of dic[code]){
                            const { r, g, b, a } = getColor(item);
                            image.data.set([
                                r,
                                g,
                                b,
                                a
                            ], __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InterlaceOffsets"][pass] * frame.width + __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InterlaceSteps"][pass] * lineIndex + pixelPos % (frame.width * 4));
                            pixelPos += 4;
                        }
                        if (dic.length === 1 << size && size < 0xc) {
                            size++;
                        }
                    }
                    if (pixelPos === frame.width * 4 * (lineIndex + 1)) {
                        lineIndex++;
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InterlaceOffsets"][pass] + __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InterlaceSteps"][pass] * lineIndex >= frame.height) {
                            exit = true;
                        }
                    }
                }
            }
            progressCallback?.(byteStream.pos / (byteStream.data.length - 1), getFrameIndex(false) + 1, image, {
                x: frame.left,
                y: frame.top
            }, {
                width: gif.width,
                height: gif.height
            });
        }
        frame.image = image;
        frame.bitmap = await createImageBitmap(image);
    } else {
        let code = 0, size = minCodeSize + 1, pos = 0, pixelPos = -4, exit = false;
        const dic = [
            [
                0
            ]
        ];
        while(!exit){
            const last = code;
            code = readBits(pos, size);
            pos += size;
            if (code === clearCode) {
                size = minCodeSize + 1;
                dic.length = clearCode + 2;
                for(let i = 0; i < dic.length; i++){
                    dic[i] = i < clearCode ? [
                        i
                    ] : [];
                }
            } else {
                if (code === clearCode + 1) {
                    exit = true;
                    break;
                }
                if (code >= dic.length) {
                    dic.push(dic[last].concat(dic[last][0]));
                } else if (last !== clearCode) {
                    dic.push(dic[last].concat(dic[code][0]));
                }
                for (const item of dic[code]){
                    const { r, g, b, a } = getColor(item);
                    image.data.set([
                        r,
                        g,
                        b,
                        a
                    ], pixelPos += 4);
                }
                if (dic.length >= 1 << size && size < 0xc) {
                    size++;
                }
            }
        }
        frame.image = image;
        frame.bitmap = await createImageBitmap(image);
        progressCallback?.((byteStream.pos + 1) / byteStream.data.length, getFrameIndex(false) + 1, frame.image, {
            x: frame.left,
            y: frame.top
        }, {
            width: gif.width,
            height: gif.height
        });
    }
}
async function parseBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback) {
    switch(byteStream.nextByte()){
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Types$2f$GIFDataHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GIFDataHeaders"].EndOfFile:
            return true;
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Types$2f$GIFDataHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GIFDataHeaders"].Image:
            await parseImageBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback);
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Types$2f$GIFDataHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GIFDataHeaders"].Extension:
            parseExtensionBlock(byteStream, gif, getFrameIndex, getTransparencyIndex);
            break;
        default:
            throw new EvalError("undefined block found");
    }
    return false;
}
function getGIFLoopAmount(gif) {
    for (const extension of gif.applicationExtensions){
        if (extension.identifier + extension.authenticationCode !== "NETSCAPE2.0") {
            continue;
        }
        return extension.data[1] + (extension.data[2] << 8);
    }
    return NaN;
}
async function decodeGIF(gifURL, progressCallback, avgAlpha) {
    if (!avgAlpha) avgAlpha = false;
    const res = await fetch(gifURL);
    if (!res.ok && res.status === 404) {
        throw new EvalError("file not found");
    }
    const buffer = await res.arrayBuffer();
    const gif = {
        width: 0,
        height: 0,
        totalTime: 0,
        colorRes: 0,
        pixelAspectRatio: 0,
        frames: [],
        sortFlag: false,
        globalColorTable: [],
        backgroundImage: new ImageData(1, 1, {
            colorSpace: "srgb"
        }),
        comments: [],
        applicationExtensions: []
    }, byteStream = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$ByteStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ByteStream"](new Uint8ClampedArray(buffer));
    if (byteStream.getString(6) !== "GIF89a") {
        throw new Error("not a supported GIF file");
    }
    gif.width = byteStream.nextTwoBytes();
    gif.height = byteStream.nextTwoBytes();
    const packedByte = byteStream.nextByte(), globalColorTableFlag = (packedByte & 0x80) === 0x80;
    gif.colorRes = (packedByte & 0x70) >>> 4;
    gif.sortFlag = (packedByte & 8) === 8;
    const globalColorCount = 1 << (packedByte & 7) + 1, backgroundColorIndex = byteStream.nextByte();
    gif.pixelAspectRatio = byteStream.nextByte();
    if (gif.pixelAspectRatio !== 0) {
        gif.pixelAspectRatio = (gif.pixelAspectRatio + 0xf) / 0x40;
    }
    if (globalColorTableFlag) {
        gif.globalColorTable = parseColorTable(byteStream, globalColorCount);
    }
    const backgroundImage = (()=>{
        try {
            return new ImageData(gif.width, gif.height, {
                colorSpace: "srgb"
            });
        } catch (error) {
            if (error instanceof DOMException && error.name === "IndexSizeError") {
                return null;
            }
            throw error;
        }
    })();
    if (backgroundImage == null) {
        throw new Error("GIF frame size is to large");
    }
    const { r, g, b } = gif.globalColorTable[backgroundColorIndex];
    backgroundImage.data.set(globalColorTableFlag ? [
        r,
        g,
        b,
        255
    ] : [
        0,
        0,
        0,
        0
    ]);
    for(let i = 4; i < backgroundImage.data.length; i *= 2){
        backgroundImage.data.copyWithin(i, 0, i);
    }
    gif.backgroundImage = backgroundImage;
    let frameIndex = -1, incrementFrameIndex = true, transparencyIndex = -1;
    const getframeIndex = (increment)=>{
        if (increment) {
            incrementFrameIndex = true;
        }
        return frameIndex;
    };
    const getTransparencyIndex = (newValue)=>{
        if (newValue != null) {
            transparencyIndex = newValue;
        }
        return transparencyIndex;
    };
    try {
        do {
            if (incrementFrameIndex) {
                gif.frames.push({
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                    disposalMethod: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Enums$2f$DisposalMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposalMethod"].Replace,
                    image: new ImageData(1, 1, {
                        colorSpace: "srgb"
                    }),
                    plainTextData: null,
                    userInputDelayFlag: false,
                    delayTime: 0,
                    sortFlag: false,
                    localColorTable: [],
                    reserved: 0,
                    GCreserved: 0
                });
                frameIndex++;
                transparencyIndex = -1;
                incrementFrameIndex = false;
            }
        }while (!await parseBlock(byteStream, gif, avgAlpha, getframeIndex, getTransparencyIndex, progressCallback))
        gif.frames.length--;
        for (const frame of gif.frames){
            if (frame.userInputDelayFlag && frame.delayTime === 0) {
                gif.totalTime = Infinity;
                break;
            }
            gif.totalTime += frame.delayTime;
        }
        return gif;
    } catch (error) {
        if (error instanceof EvalError) {
            throw new Error(`error while parsing frame ${frameIndex} "${error.message}"`);
        }
        throw error;
    }
}
function drawGif(data) {
    const { context, radius, particle, delta } = data, image = particle.image;
    if (!image?.gifData || !image.gif) {
        return;
    }
    const offscreenCanvas = new OffscreenCanvas(image.gifData.width, image.gifData.height), offscreenContext = offscreenCanvas.getContext("2d");
    if (!offscreenContext) {
        throw new Error("could not create offscreen canvas context");
    }
    offscreenContext.imageSmoothingQuality = "low";
    offscreenContext.imageSmoothingEnabled = false;
    offscreenContext.clearRect(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
    if (particle.gifLoopCount === undefined) {
        particle.gifLoopCount = image.gifLoopCount ?? defaultLoopCount;
    }
    let frameIndex = particle.gifFrame ?? defaultFrame;
    const pos = {
        x: -image.gifData.width * half,
        y: -image.gifData.height * half
    }, frame = image.gifData.frames[frameIndex];
    if (particle.gifTime === undefined) {
        particle.gifTime = initialTime;
    }
    if (!frame.bitmap) {
        return;
    }
    context.scale(radius / image.gifData.width, radius / image.gifData.height);
    switch(frame.disposalMethod){
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Enums$2f$DisposalMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposalMethod"].UndefinedA:
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Enums$2f$DisposalMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposalMethod"].UndefinedB:
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Enums$2f$DisposalMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposalMethod"].UndefinedC:
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Enums$2f$DisposalMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposalMethod"].UndefinedD:
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Enums$2f$DisposalMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposalMethod"].Replace:
            offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
            context.drawImage(offscreenCanvas, pos.x, pos.y);
            offscreenContext.clearRect(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Enums$2f$DisposalMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposalMethod"].Combine:
            offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
            context.drawImage(offscreenCanvas, pos.x, pos.y);
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Enums$2f$DisposalMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposalMethod"].RestoreBackground:
            offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
            context.drawImage(offscreenCanvas, pos.x, pos.y);
            offscreenContext.clearRect(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
            if (!image.gifData.globalColorTable.length) {
                offscreenContext.putImageData(image.gifData.frames[firstIndex].image, pos.x + frame.left, pos.y + frame.top);
            } else {
                offscreenContext.putImageData(image.gifData.backgroundImage, pos.x, pos.y);
            }
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Enums$2f$DisposalMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposalMethod"].RestorePrevious:
            {
                const previousImageData = offscreenContext.getImageData(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
                offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
                context.drawImage(offscreenCanvas, pos.x, pos.y);
                offscreenContext.clearRect(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
                offscreenContext.putImageData(previousImageData, origin.x, origin.y);
            }
            break;
    }
    particle.gifTime += delta.value;
    if (particle.gifTime > frame.delayTime) {
        particle.gifTime -= frame.delayTime;
        if (++frameIndex >= image.gifData.frames.length) {
            if (--particle.gifLoopCount <= defaultLoopCount) {
                return;
            }
            frameIndex = firstIndex;
            offscreenContext.clearRect(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
        }
        particle.gifFrame = frameIndex;
    }
    context.scale(image.gifData.width / radius, image.gifData.height / radius);
}
async function loadGifImage(image) {
    if (image.type !== "gif") {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadImage"])(image);
        return;
    }
    image.loading = true;
    try {
        image.gifData = await decodeGIF(image.source);
        image.gifLoopCount = getGIFLoopAmount(image.gifData) ?? defaultLoopCount;
        if (!image.gifLoopCount) {
            image.gifLoopCount = Infinity;
        }
    } catch  {
        image.error = true;
    }
    image.loading = false;
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/ImageDrawer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageDrawer",
    ()=>ImageDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/GifUtils/Utils.js [app-client] (ecmascript)");
;
;
;
const double = 2, defaultAlpha = 1, sides = 12, defaultRatio = 1;
class ImageDrawer {
    constructor(engine){
        this.validTypes = [
            "image",
            "images"
        ];
        this.loadImageShape = async (imageShape)=>{
            if (!this._engine.loadImage) {
                throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorPrefix"]} image shape not initialized`);
            }
            await this._engine.loadImage({
                gif: imageShape.gif,
                name: imageShape.name,
                replaceColor: imageShape.replaceColor ?? false,
                src: imageShape.src
            });
        };
        this._engine = engine;
    }
    addImage(image) {
        if (!this._engine.images) {
            this._engine.images = [];
        }
        this._engine.images.push(image);
    }
    draw(data) {
        const { context, radius, particle, opacity } = data, image = particle.image, element = image?.element;
        if (!image) {
            return;
        }
        context.globalAlpha = opacity;
        if (image.gif && image.gifData) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawGif"])(data);
        } else if (element) {
            const ratio = image.ratio, pos = {
                x: -radius,
                y: -radius
            }, diameter = radius * double;
            context.drawImage(element, pos.x, pos.y, diameter, diameter / ratio);
        }
        context.globalAlpha = defaultAlpha;
    }
    getSidesCount() {
        return sides;
    }
    async init(container) {
        const options = container.actualOptions;
        if (!options.preload || !this._engine.loadImage) {
            return;
        }
        for (const imageData of options.preload){
            await this._engine.loadImage(imageData);
        }
    }
    loadShape(particle) {
        if (particle.shape !== "image" && particle.shape !== "images") {
            return;
        }
        if (!this._engine.images) {
            this._engine.images = [];
        }
        const imageData = particle.shapeData;
        if (!imageData) {
            return;
        }
        const image = this._engine.images.find((t)=>t.name === imageData.name || t.source === imageData.src);
        if (!image) {
            void this.loadImageShape(imageData).then(()=>{
                this.loadShape(particle);
            });
        }
    }
    particleInit(container, particle) {
        if (particle.shape !== "image" && particle.shape !== "images") {
            return;
        }
        if (!this._engine.images) {
            this._engine.images = [];
        }
        const images = this._engine.images, imageData = particle.shapeData;
        if (!imageData) {
            return;
        }
        const color = particle.getFillColor(), image = images.find((t)=>t.name === imageData.name || t.source === imageData.src);
        if (!image) {
            return;
        }
        const replaceColor = imageData.replaceColor ?? image.replaceColor;
        if (image.loading) {
            setTimeout(()=>{
                this.particleInit(container, particle);
            });
            return;
        }
        void (async ()=>{
            let imageRes;
            if (image.svgData && color) {
                imageRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceImageColor"])(image, imageData, color, particle);
            } else {
                imageRes = {
                    color,
                    data: image,
                    element: image.element,
                    gif: image.gif,
                    gifData: image.gifData,
                    gifLoopCount: image.gifLoopCount,
                    loaded: true,
                    ratio: imageData.width && imageData.height ? imageData.width / imageData.height : image.ratio ?? defaultRatio,
                    replaceColor: replaceColor,
                    source: imageData.src
                };
            }
            if (!imageRes.ratio) {
                imageRes.ratio = 1;
            }
            const fill = imageData.fill ?? particle.shapeFill, close = imageData.close ?? particle.shapeClose, imageShape = {
                image: imageRes,
                fill,
                close
            };
            particle.image = imageShape.image;
            particle.shapeFill = imageShape.fill;
            particle.shapeClose = imageShape.close;
        })();
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/Options/Classes/Preload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Preload",
    ()=>Preload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
class Preload {
    constructor(){
        this.src = "";
        this.gif = false;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.gif !== undefined) {
            this.gif = data.gif;
        }
        if (data.height !== undefined) {
            this.height = data.height;
        }
        if (data.name !== undefined) {
            this.name = data.name;
        }
        if (data.replaceColor !== undefined) {
            this.replaceColor = data.replaceColor;
        }
        if (data.src !== undefined) {
            this.src = data.src;
        }
        if (data.width !== undefined) {
            this.width = data.width;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/ImagePreloader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImagePreloaderPlugin",
    ()=>ImagePreloaderPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$Options$2f$Classes$2f$Preload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/Options/Classes/Preload.js [app-client] (ecmascript)");
;
class ImagePreloaderPlugin {
    constructor(engine){
        this.id = "imagePreloader";
        this._engine = engine;
    }
    async getPlugin() {
        await Promise.resolve();
        return {};
    }
    loadOptions(options, source) {
        if (!source?.preload) {
            return;
        }
        if (!options.preload) {
            options.preload = [];
        }
        const preloadOptions = options.preload;
        for (const item of source.preload){
            const existing = preloadOptions.find((t)=>t.name === item.name || t.src === item.src);
            if (existing) {
                existing.load(item);
            } else {
                const preload = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$Options$2f$Classes$2f$Preload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Preload"]();
                preload.load(item);
                preloadOptions.push(preload);
            }
        }
    }
    needsPlugin() {
        return true;
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadImageShape",
    ()=>loadImageShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$ImageDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/ImageDrawer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$ImagePreloader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/ImagePreloader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/GifUtils/Utils.js [app-client] (ecmascript)");
;
;
;
;
;
const extLength = 3;
function addLoadImageToEngine(engine) {
    if (engine.loadImage) {
        return;
    }
    engine.loadImage = async (data)=>{
        if (!data.name && !data.src) {
            throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorPrefix"]} no image source provided`);
        }
        if (!engine.images) {
            engine.images = [];
        }
        if (engine.images.find((t)=>t.name === data.name || t.source === data.src)) {
            return;
        }
        try {
            const image = {
                gif: data.gif ?? false,
                name: data.name ?? data.src,
                source: data.src,
                type: data.src.substring(data.src.length - extLength),
                error: false,
                loading: true,
                replaceColor: data.replaceColor,
                ratio: data.width && data.height ? data.width / data.height : undefined
            };
            engine.images.push(image);
            let imageFunc;
            if (data.gif) {
                imageFunc = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$GifUtils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadGifImage"];
            } else {
                imageFunc = data.replaceColor ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadSvgImage"] : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadImage"];
            }
            await imageFunc(image);
        } catch  {
            throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorPrefix"]} ${data.name ?? data.src} not found`);
        }
    };
}
async function loadImageShape(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    addLoadImageToEngine(engine);
    const preloader = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$ImagePreloader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImagePreloaderPlugin"](engine);
    await engine.addPlugin(preloader, refresh);
    await engine.addShape(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$ImageDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageDrawer"](engine), refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-life/browser/Options/Classes/LifeDelay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LifeDelay",
    ()=>LifeDelay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Options/Classes/ValueWithRandom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
class LifeDelay extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueWithRandom"] {
    constructor(){
        super();
        this.sync = false;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        super.load(data);
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-life/browser/Options/Classes/LifeDuration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LifeDuration",
    ()=>LifeDuration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Options/Classes/ValueWithRandom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
class LifeDuration extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueWithRandom"] {
    constructor(){
        super();
        this.sync = false;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        super.load(data);
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-life/browser/Options/Classes/Life.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Life",
    ()=>Life
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$life$2f$browser$2f$Options$2f$Classes$2f$LifeDelay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-life/browser/Options/Classes/LifeDelay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$life$2f$browser$2f$Options$2f$Classes$2f$LifeDuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-life/browser/Options/Classes/LifeDuration.js [app-client] (ecmascript)");
;
;
;
class Life {
    constructor(){
        this.count = 0;
        this.delay = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$life$2f$browser$2f$Options$2f$Classes$2f$LifeDelay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LifeDelay"]();
        this.duration = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$life$2f$browser$2f$Options$2f$Classes$2f$LifeDuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LifeDuration"]();
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.count !== undefined) {
            this.count = data.count;
        }
        this.delay.load(data.delay);
        this.duration.load(data.duration);
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-life/browser/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateLife",
    ()=>updateLife
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
;
const noTime = 0, infiniteValue = -1, noLife = 0, minCanvasSize = 0;
function updateLife(particle, delta, canvasSize) {
    if (!particle.life) {
        return;
    }
    const life = particle.life;
    let justSpawned = false;
    if (particle.spawning) {
        life.delayTime += delta.value;
        if (life.delayTime >= particle.life.delay) {
            justSpawned = true;
            particle.spawning = false;
            life.delayTime = noTime;
            life.time = noTime;
        } else {
            return;
        }
    }
    if (life.duration === infiniteValue) {
        return;
    }
    if (particle.spawning) {
        return;
    }
    if (justSpawned) {
        life.time = noTime;
    } else {
        life.time += delta.value;
    }
    if (life.time < life.duration) {
        return;
    }
    life.time = noTime;
    if (particle.life.count > noLife) {
        particle.life.count--;
    }
    if (particle.life.count === noLife) {
        particle.destroy();
        return;
    }
    const widthRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(minCanvasSize, canvasSize.width), heightRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(minCanvasSize, canvasSize.width);
    particle.position.x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomInRange"])(widthRange);
    particle.position.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomInRange"])(heightRange);
    particle.spawning = true;
    life.delayTime = noTime;
    life.time = noTime;
    particle.reset();
    const lifeOptions = particle.options.life;
    if (lifeOptions) {
        life.delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(lifeOptions.delay.value) * __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"];
        life.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(lifeOptions.duration.value) * __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"];
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-life/browser/LifeUpdater.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LifeUpdater",
    ()=>LifeUpdater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$life$2f$browser$2f$Options$2f$Classes$2f$Life$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-life/browser/Options/Classes/Life.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$life$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-life/browser/Utils.js [app-client] (ecmascript)");
;
;
;
const noTime = 0, identity = 1, infiniteValue = -1;
class LifeUpdater {
    constructor(container){
        this.container = container;
    }
    init(particle) {
        const container = this.container, particlesOptions = particle.options, lifeOptions = particlesOptions.life;
        if (!lifeOptions) {
            return;
        }
        particle.life = {
            delay: container.retina.reduceFactor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(lifeOptions.delay.value) * (lifeOptions.delay.sync ? identity : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])()) / container.retina.reduceFactor * __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"] : noTime,
            delayTime: noTime,
            duration: container.retina.reduceFactor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(lifeOptions.duration.value) * (lifeOptions.duration.sync ? identity : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])()) / container.retina.reduceFactor * __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"] : noTime,
            time: noTime,
            count: lifeOptions.count
        };
        if (particle.life.duration <= noTime) {
            particle.life.duration = infiniteValue;
        }
        if (particle.life.count <= noTime) {
            particle.life.count = infiniteValue;
        }
        if (particle.life) {
            particle.spawning = particle.life.delay > noTime;
        }
    }
    isEnabled(particle) {
        return !particle.destroyed;
    }
    loadOptions(options, ...sources) {
        if (!options.life) {
            options.life = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$life$2f$browser$2f$Options$2f$Classes$2f$Life$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Life"]();
        }
        for (const source of sources){
            options.life.load(source?.life);
        }
    }
    update(particle, delta) {
        if (!this.isEnabled(particle) || !particle.life) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$life$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLife"])(particle, delta, this.container.canvas.size);
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-life/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadLifeUpdater",
    ()=>loadLifeUpdater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$life$2f$browser$2f$LifeUpdater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-life/browser/LifeUpdater.js [app-client] (ecmascript)");
;
async function loadLifeUpdater(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addParticleUpdater("life", async (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$life$2f$browser$2f$LifeUpdater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LifeUpdater"](container));
    }, refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-line/browser/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drawLine",
    ()=>drawLine
]);
function drawLine(data) {
    const { context, particle, radius } = data, shapeData = particle.shapeData, centerY = 0;
    context.moveTo(-radius, centerY);
    context.lineTo(radius, centerY);
    context.lineCap = shapeData?.cap ?? "butt";
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-line/browser/LineDrawer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LineDrawer",
    ()=>LineDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$line$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-line/browser/Utils.js [app-client] (ecmascript)");
;
const sides = 1;
class LineDrawer {
    constructor(){
        this.validTypes = [
            "line"
        ];
    }
    draw(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$line$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawLine"])(data);
    }
    getSidesCount() {
        return sides;
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-line/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadLineShape",
    ()=>loadLineShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$line$2f$browser$2f$LineDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-line/browser/LineDrawer.js [app-client] (ecmascript)");
;
async function loadLineShape(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addShape(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$line$2f$browser$2f$LineDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineDrawer"](), refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/move-parallax/browser/ParallaxMover.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParallaxMover",
    ()=>ParallaxMover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
;
const half = 0.5;
class ParallaxMover {
    init() {}
    isEnabled(particle) {
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSsr"])() && !particle.destroyed && particle.container.actualOptions.interactivity.events.onHover.parallax.enable;
    }
    move(particle) {
        const container = particle.container, options = container.actualOptions, parallaxOptions = options.interactivity.events.onHover.parallax;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSsr"])() || !parallaxOptions.enable) {
            return;
        }
        const parallaxForce = parallaxOptions.force, mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        const canvasSize = container.canvas.size, canvasCenter = {
            x: canvasSize.width * half,
            y: canvasSize.height * half
        }, parallaxSmooth = parallaxOptions.smooth, factor = particle.getRadius() / parallaxForce, centerDistance = {
            x: (mousePos.x - canvasCenter.x) * factor,
            y: (mousePos.y - canvasCenter.y) * factor
        }, { offset } = particle;
        offset.x += (centerDistance.x - offset.x) / parallaxSmooth;
        offset.y += (centerDistance.y - offset.y) / parallaxSmooth;
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/move-parallax/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadParallaxMover",
    ()=>loadParallaxMover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$move$2d$parallax$2f$browser$2f$ParallaxMover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/move-parallax/browser/ParallaxMover.js [app-client] (ecmascript)");
;
async function loadParallaxMover(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addMover("parallax", ()=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$move$2d$parallax$2f$browser$2f$ParallaxMover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParallaxMover"]());
    }, refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-attract/browser/Attractor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attractor",
    ()=>Attractor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ParticlesInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/ParticlesInteractorBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
const attractFactor = 1000, identity = 1;
class Attractor extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ParticlesInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticlesInteractorBase"] {
    constructor(container){
        super(container);
    }
    clear() {}
    init() {}
    interact(p1) {
        const container = this.container;
        if (p1.attractDistance === undefined) {
            p1.attractDistance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(p1.options.move.attract.distance) * container.retina.pixelRatio;
        }
        const distance = p1.attractDistance, pos1 = p1.getPosition(), query = container.particles.quadTree.queryCircle(pos1, distance);
        for (const p2 of query){
            if (p1 === p2 || !p2.options.move.attract.enable || p2.destroyed || p2.spawning) {
                continue;
            }
            const pos2 = p2.getPosition(), { dx, dy } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistances"])(pos1, pos2), rotate = p1.options.move.attract.rotate, ax = dx / (rotate.x * attractFactor), ay = dy / (rotate.y * attractFactor), p1Factor = p2.size.value / p1.size.value, p2Factor = identity / p1Factor;
            p1.velocity.x -= ax * p1Factor;
            p1.velocity.y -= ay * p1Factor;
            p2.velocity.x += ax * p2Factor;
            p2.velocity.y += ay * p2Factor;
        }
    }
    isEnabled(particle) {
        return particle.options.move.attract.enable;
    }
    reset() {}
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-attract/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadParticlesAttractInteraction",
    ()=>loadParticlesAttractInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$attract$2f$browser$2f$Attractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-attract/browser/Attractor.js [app-client] (ecmascript)");
;
async function loadParticlesAttractInteraction(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addInteractor("particlesAttract", (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$attract$2f$browser$2f$Attractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Attractor"](container));
    }, refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-collisions/browser/Absorb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "absorb",
    ()=>absorb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
const half = 0.5, absorbFactor = 10, minAbsorbFactor = 0;
function updateAbsorb(p1, r1, p2, r2, delta, pixelRatio) {
    const factor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(p1.options.collisions.absorb.speed * delta.factor / absorbFactor, minAbsorbFactor, r2);
    p1.size.value += factor * half;
    p2.size.value -= factor;
    if (r2 <= pixelRatio) {
        p2.size.value = 0;
        p2.destroy();
    }
}
function absorb(p1, p2, delta, pixelRatio) {
    const r1 = p1.getRadius(), r2 = p2.getRadius();
    if (r1 === undefined && r2 !== undefined) {
        p1.destroy();
    } else if (r1 !== undefined && r2 === undefined) {
        p2.destroy();
    } else if (r1 !== undefined && r2 !== undefined) {
        if (r1 >= r2) {
            updateAbsorb(p1, r1, p2, r2, delta, pixelRatio);
        } else {
            updateAbsorb(p2, r2, p1, r1, delta, pixelRatio);
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-collisions/browser/Bounce.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bounce",
    ()=>bounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
const fixBounceSpeed = (p)=>{
    if (p.collisionMaxSpeed === undefined) {
        p.collisionMaxSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(p.options.collisions.maxSpeed);
    }
    if (p.velocity.length > p.collisionMaxSpeed) {
        p.velocity.length = p.collisionMaxSpeed;
    }
};
function bounce(p1, p2) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circleBounce"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circleBounceDataFromParticle"])(p1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circleBounceDataFromParticle"])(p2));
    fixBounceSpeed(p1);
    fixBounceSpeed(p2);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-collisions/browser/Destroy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "destroy",
    ()=>destroy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$collisions$2f$browser$2f$Bounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-collisions/browser/Bounce.js [app-client] (ecmascript)");
;
function destroy(p1, p2) {
    if (!p1.unbreakable && !p2.unbreakable) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$collisions$2f$browser$2f$Bounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bounce"])(p1, p2);
    }
    if (p1.getRadius() === undefined && p2.getRadius() !== undefined) {
        p1.destroy();
    } else if (p1.getRadius() !== undefined && p2.getRadius() === undefined) {
        p2.destroy();
    } else if (p1.getRadius() !== undefined && p2.getRadius() !== undefined) {
        const deleteP = p1.getRadius() >= p2.getRadius() ? p2 : p1;
        deleteP.destroy();
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-collisions/browser/ResolveCollision.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveCollision",
    ()=>resolveCollision
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$CollisionMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Modes/CollisionMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$collisions$2f$browser$2f$Absorb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-collisions/browser/Absorb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$collisions$2f$browser$2f$Bounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-collisions/browser/Bounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$collisions$2f$browser$2f$Destroy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-collisions/browser/Destroy.js [app-client] (ecmascript)");
;
;
;
;
function resolveCollision(p1, p2, delta, pixelRatio) {
    switch(p1.options.collisions.mode){
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$CollisionMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollisionMode"].absorb:
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$collisions$2f$browser$2f$Absorb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["absorb"])(p1, p2, delta, pixelRatio);
                break;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$CollisionMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollisionMode"].bounce:
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$collisions$2f$browser$2f$Bounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bounce"])(p1, p2);
                break;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$CollisionMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollisionMode"].destroy:
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$collisions$2f$browser$2f$Destroy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["destroy"])(p1, p2);
                break;
            }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-collisions/browser/Collider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Collider",
    ()=>Collider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ParticlesInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/ParticlesInteractorBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$collisions$2f$browser$2f$ResolveCollision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-collisions/browser/ResolveCollision.js [app-client] (ecmascript)");
;
;
const double = 2;
class Collider extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ParticlesInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticlesInteractorBase"] {
    constructor(container){
        super(container);
    }
    clear() {}
    init() {}
    interact(p1, delta) {
        if (p1.destroyed || p1.spawning) {
            return;
        }
        const container = this.container, pos1 = p1.getPosition(), radius1 = p1.getRadius(), query = container.particles.quadTree.queryCircle(pos1, radius1 * double);
        for (const p2 of query){
            if (p1 === p2 || !p2.options.collisions.enable || p1.options.collisions.mode !== p2.options.collisions.mode || p2.destroyed || p2.spawning) {
                continue;
            }
            const pos2 = p2.getPosition(), radius2 = p2.getRadius();
            if (Math.abs(Math.round(pos1.z) - Math.round(pos2.z)) > radius1 + radius2) {
                continue;
            }
            const dist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistance"])(pos1, pos2), distP = radius1 + radius2;
            if (dist > distP) {
                continue;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$collisions$2f$browser$2f$ResolveCollision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCollision"])(p1, p2, delta, container.retina.pixelRatio);
        }
    }
    isEnabled(particle) {
        return particle.options.collisions.enable;
    }
    reset() {}
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-collisions/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadParticlesCollisionsInteraction",
    ()=>loadParticlesCollisionsInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$collisions$2f$browser$2f$Collider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-collisions/browser/Collider.js [app-client] (ecmascript)");
;
async function loadParticlesCollisionsInteraction(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addInteractor("particlesCollisions", (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$collisions$2f$browser$2f$Collider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Collider"](container));
    }, refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/CircleWarp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CircleWarp",
    ()=>CircleWarp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Ranges.js [app-client] (ecmascript)");
;
const double = 2;
class CircleWarp extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"] {
    constructor(x, y, radius, canvasSize){
        super(x, y, radius);
        this.canvasSize = canvasSize;
        this.canvasSize = {
            ...canvasSize
        };
    }
    contains(point) {
        const { width, height } = this.canvasSize, { x, y } = point;
        return super.contains(point) || super.contains({
            x: x - width,
            y
        }) || super.contains({
            x: x - width,
            y: y - height
        }) || super.contains({
            x,
            y: y - height
        });
    }
    intersects(range) {
        if (super.intersects(range)) {
            return true;
        }
        const rect = range, circle = range, newPos = {
            x: range.position.x - this.canvasSize.width,
            y: range.position.y - this.canvasSize.height
        };
        if (circle.radius !== undefined) {
            const biggerCircle = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"](newPos.x, newPos.y, circle.radius * double);
            return super.intersects(biggerCircle);
        } else if (rect.size !== undefined) {
            const rectSW = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"](newPos.x, newPos.y, rect.size.width * double, rect.size.height * double);
            return super.intersects(rectSW);
        }
        return false;
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Options/Classes/LinksShadow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinksShadow",
    ()=>LinksShadow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
class LinksShadow {
    constructor(){
        this.blur = 5;
        this.color = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsColor"]();
        this.color.value = "#000";
        this.enable = false;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.blur !== undefined) {
            this.blur = data.blur;
        }
        this.color = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsColor"].create(this.color, data.color);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Options/Classes/LinksTriangle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinksTriangle",
    ()=>LinksTriangle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
class LinksTriangle {
    constructor(){
        this.enable = false;
        this.frequency = 1;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.color !== undefined) {
            this.color = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsColor"].create(this.color, data.color);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.frequency !== undefined) {
            this.frequency = data.frequency;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Options/Classes/Links.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Links",
    ()=>Links
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Options$2f$Classes$2f$LinksShadow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Options/Classes/LinksShadow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Options$2f$Classes$2f$LinksTriangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Options/Classes/LinksTriangle.js [app-client] (ecmascript)");
;
;
;
class Links {
    constructor(){
        this.blink = false;
        this.color = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsColor"]();
        this.color.value = "#fff";
        this.consent = false;
        this.distance = 100;
        this.enable = false;
        this.frequency = 1;
        this.opacity = 1;
        this.shadow = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Options$2f$Classes$2f$LinksShadow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinksShadow"]();
        this.triangles = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Options$2f$Classes$2f$LinksTriangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinksTriangle"]();
        this.width = 1;
        this.warp = false;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.id !== undefined) {
            this.id = data.id;
        }
        if (data.blink !== undefined) {
            this.blink = data.blink;
        }
        this.color = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsColor"].create(this.color, data.color);
        if (data.consent !== undefined) {
            this.consent = data.consent;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.frequency !== undefined) {
            this.frequency = data.frequency;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
        this.shadow.load(data.shadow);
        this.triangles.load(data.triangles);
        if (data.width !== undefined) {
            this.width = data.width;
        }
        if (data.warp !== undefined) {
            this.warp = data.warp;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Linker.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Linker",
    ()=>Linker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/Ranges.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ParticlesInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Core/Utils/ParticlesInteractorBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$CircleWarp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/CircleWarp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Options$2f$Classes$2f$Links$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Options/Classes/Links.js [app-client] (ecmascript)");
;
;
;
const squarePower = 2, opacityOffset = 1, origin = {
    x: 0,
    y: 0
}, minDistance = 0;
function getLinkDistance(pos1, pos2, optDistance, canvasSize, warp) {
    const { dx, dy, distance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistances"])(pos1, pos2);
    if (!warp || distance <= optDistance) {
        return distance;
    }
    const absDiffs = {
        x: Math.abs(dx),
        y: Math.abs(dy)
    }, warpDistances = {
        x: Math.min(absDiffs.x, canvasSize.width - absDiffs.x),
        y: Math.min(absDiffs.y, canvasSize.height - absDiffs.y)
    };
    return Math.sqrt(warpDistances.x ** squarePower + warpDistances.y ** squarePower);
}
class Linker extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ParticlesInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticlesInteractorBase"] {
    constructor(container, engine){
        super(container);
        this._setColor = (p1)=>{
            if (!p1.options.links) {
                return;
            }
            const container = this._linkContainer, linksOptions = p1.options.links;
            let linkColor = linksOptions.id === undefined ? container.particles.linksColor : container.particles.linksColors.get(linksOptions.id);
            if (linkColor) {
                return;
            }
            const optColor = linksOptions.color;
            linkColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLinkRandomColor"])(this._engine, optColor, linksOptions.blink, linksOptions.consent);
            if (linksOptions.id === undefined) {
                container.particles.linksColor = linkColor;
            } else {
                container.particles.linksColors.set(linksOptions.id, linkColor);
            }
        };
        this._linkContainer = container;
        this._engine = engine;
    }
    clear() {}
    init() {
        this._linkContainer.particles.linksColor = undefined;
        this._linkContainer.particles.linksColors = new Map();
    }
    interact(p1) {
        if (!p1.options.links) {
            return;
        }
        p1.links = [];
        const pos1 = p1.getPosition(), container = this.container, canvasSize = container.canvas.size;
        if (pos1.x < origin.x || pos1.y < origin.y || pos1.x > canvasSize.width || pos1.y > canvasSize.height) {
            return;
        }
        const linkOpt1 = p1.options.links, optOpacity = linkOpt1.opacity, optDistance = p1.retina.linksDistance ?? minDistance, warp = linkOpt1.warp;
        let range;
        if (warp) {
            range = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$CircleWarp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleWarp"](pos1.x, pos1.y, optDistance, canvasSize);
        } else {
            range = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"](pos1.x, pos1.y, optDistance);
        }
        const query = container.particles.quadTree.query(range);
        for (const p2 of query){
            const linkOpt2 = p2.options.links;
            if (p1 === p2 || !linkOpt2?.enable || linkOpt1.id !== linkOpt2.id || p2.spawning || p2.destroyed || !p2.links || p1.links.some((t)=>t.destination === p2) || p2.links.some((t)=>t.destination === p1)) {
                continue;
            }
            const pos2 = p2.getPosition();
            if (pos2.x < origin.x || pos2.y < origin.y || pos2.x > canvasSize.width || pos2.y > canvasSize.height) {
                continue;
            }
            const distance = getLinkDistance(pos1, pos2, optDistance, canvasSize, warp && linkOpt2.warp);
            if (distance > optDistance) {
                continue;
            }
            const opacityLine = (opacityOffset - distance / optDistance) * optOpacity;
            this._setColor(p1);
            p1.links.push({
                destination: p2,
                opacity: opacityLine
            });
        }
    }
    isEnabled(particle) {
        return !!particle.options.links?.enable;
    }
    loadParticlesOptions(options, ...sources) {
        if (!options.links) {
            options.links = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Options$2f$Classes$2f$Links$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Links"]();
        }
        for (const source of sources){
            options.links.load(source?.links);
        }
    }
    reset() {}
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/interaction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadLinksInteraction",
    ()=>loadLinksInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Linker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Linker.js [app-client] (ecmascript)");
;
async function loadLinksInteraction(engine, refresh = true) {
    await engine.addInteractor("particlesLinks", async (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Linker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Linker"](container, engine));
    }, refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drawLinkLine",
    ()=>drawLinkLine,
    "drawLinkTriangle",
    ()=>drawLinkTriangle,
    "drawTriangle",
    ()=>drawTriangle,
    "getLinkKey",
    ()=>getLinkKey,
    "setLinkFrequency",
    ()=>setLinkFrequency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/CanvasUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js [app-client] (ecmascript)");
;
function drawTriangle(context, p1, p2, p3) {
    context.beginPath();
    context.moveTo(p1.x, p1.y);
    context.lineTo(p2.x, p2.y);
    context.lineTo(p3.x, p3.y);
    context.closePath();
}
function drawLinkLine(params) {
    let drawn = false;
    const { begin, end, engine, maxDistance, context, canvasSize, width, backgroundMask, colorLine, opacity, links } = params;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistance"])(begin, end) <= maxDistance) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawLine"])(context, begin, end);
        drawn = true;
    } else if (links.warp) {
        let pi1;
        let pi2;
        const endNE = {
            x: end.x - canvasSize.width,
            y: end.y
        };
        const d1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistances"])(begin, endNE);
        if (d1.distance <= maxDistance) {
            const yi = begin.y - d1.dy / d1.dx * begin.x;
            pi1 = {
                x: 0,
                y: yi
            };
            pi2 = {
                x: canvasSize.width,
                y: yi
            };
        } else {
            const endSW = {
                x: end.x,
                y: end.y - canvasSize.height
            };
            const d2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistances"])(begin, endSW);
            if (d2.distance <= maxDistance) {
                const yi = begin.y - d2.dy / d2.dx * begin.x;
                const xi = -yi / (d2.dy / d2.dx);
                pi1 = {
                    x: xi,
                    y: 0
                };
                pi2 = {
                    x: xi,
                    y: canvasSize.height
                };
            } else {
                const endSE = {
                    x: end.x - canvasSize.width,
                    y: end.y - canvasSize.height
                };
                const d3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistances"])(begin, endSE);
                if (d3.distance <= maxDistance) {
                    const yi = begin.y - d3.dy / d3.dx * begin.x;
                    const xi = -yi / (d3.dy / d3.dx);
                    pi1 = {
                        x: xi,
                        y: yi
                    };
                    pi2 = {
                        x: pi1.x + canvasSize.width,
                        y: pi1.y + canvasSize.height
                    };
                }
            }
        }
        if (pi1 && pi2) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawLine"])(context, begin, pi1);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawLine"])(context, end, pi2);
            drawn = true;
        }
    }
    if (!drawn) {
        return;
    }
    context.lineWidth = width;
    if (backgroundMask.enable) {
        context.globalCompositeOperation = backgroundMask.composite;
    }
    context.strokeStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleFromRgb"])(colorLine, opacity);
    const { shadow } = links;
    if (shadow.enable) {
        const shadowColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeColorToRgb"])(engine, shadow.color);
        if (shadowColor) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleFromRgb"])(shadowColor);
        }
    }
    context.stroke();
}
function drawLinkTriangle(params) {
    const { context, pos1, pos2, pos3, backgroundMask, colorTriangle, opacityTriangle } = params;
    drawTriangle(context, pos1, pos2, pos3);
    if (backgroundMask.enable) {
        context.globalCompositeOperation = backgroundMask.composite;
    }
    context.fillStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleFromRgb"])(colorTriangle, opacityTriangle);
    context.fill();
}
function getLinkKey(ids) {
    ids.sort((a, b)=>a - b);
    return ids.join("_");
}
function setLinkFrequency(particles, dictionary) {
    const key = getLinkKey(particles.map((t)=>t.id));
    let res = dictionary.get(key);
    if (res === undefined) {
        res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])();
        dictionary.set(key, res);
    }
    return res;
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/LinkInstance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinkInstance",
    ()=>LinkInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Utils.js [app-client] (ecmascript)");
;
;
const minOpacity = 0, minWidth = 0, minDistance = 0, half = 0.5, maxFrequency = 1;
class LinkInstance {
    constructor(container, engine){
        this._drawLinkLine = (p1, link)=>{
            const p1LinksOptions = p1.options.links;
            if (!p1LinksOptions?.enable) {
                return;
            }
            const container = this._container, options = container.actualOptions, p2 = link.destination, pos1 = p1.getPosition(), pos2 = p2.getPosition();
            let opacity = link.opacity;
            container.canvas.draw((ctx)=>{
                let colorLine;
                const twinkle = p1.options.twinkle?.lines;
                if (twinkle?.enable) {
                    const twinkleFreq = twinkle.frequency, twinkleRgb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeColorToRgb"])(this._engine, twinkle.color), twinkling = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])() < twinkleFreq;
                    if (twinkling && twinkleRgb) {
                        colorLine = twinkleRgb;
                        opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(twinkle.opacity);
                    }
                }
                if (!colorLine) {
                    const linkColor = p1LinksOptions.id !== undefined ? container.particles.linksColors.get(p1LinksOptions.id) : container.particles.linksColor;
                    colorLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLinkColor"])(p1, p2, linkColor);
                }
                if (!colorLine) {
                    return;
                }
                const width = p1.retina.linksWidth ?? minWidth, maxDistance = p1.retina.linksDistance ?? minDistance, { backgroundMask } = options;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawLinkLine"])({
                    context: ctx,
                    width,
                    begin: pos1,
                    end: pos2,
                    engine: this._engine,
                    maxDistance,
                    canvasSize: container.canvas.size,
                    links: p1LinksOptions,
                    backgroundMask: backgroundMask,
                    colorLine,
                    opacity
                });
            });
        };
        this._drawLinkTriangle = (p1, link1, link2)=>{
            const linksOptions = p1.options.links;
            if (!linksOptions?.enable) {
                return;
            }
            const triangleOptions = linksOptions.triangles;
            if (!triangleOptions.enable) {
                return;
            }
            const container = this._container, options = container.actualOptions, p2 = link1.destination, p3 = link2.destination, opacityTriangle = triangleOptions.opacity ?? (link1.opacity + link2.opacity) * half;
            if (opacityTriangle <= minOpacity) {
                return;
            }
            container.canvas.draw((ctx)=>{
                const pos1 = p1.getPosition(), pos2 = p2.getPosition(), pos3 = p3.getPosition(), linksDistance = p1.retina.linksDistance ?? minDistance;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistance"])(pos1, pos2) > linksDistance || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistance"])(pos3, pos2) > linksDistance || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistance"])(pos3, pos1) > linksDistance) {
                    return;
                }
                let colorTriangle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeColorToRgb"])(this._engine, triangleOptions.color);
                if (!colorTriangle) {
                    const linkColor = linksOptions.id !== undefined ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;
                    colorTriangle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLinkColor"])(p1, p2, linkColor);
                }
                if (!colorTriangle) {
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawLinkTriangle"])({
                    context: ctx,
                    pos1,
                    pos2,
                    pos3,
                    backgroundMask: options.backgroundMask,
                    colorTriangle,
                    opacityTriangle
                });
            });
        };
        this._drawTriangles = (options, p1, link, p1Links)=>{
            const p2 = link.destination;
            if (!(options.links?.triangles.enable && p2.options.links?.triangles.enable)) {
                return;
            }
            const vertices = p2.links?.filter((t)=>{
                const linkFreq = this._getLinkFrequency(p2, t.destination), minCount = 0;
                return p2.options.links && linkFreq <= p2.options.links.frequency && p1Links.findIndex((l)=>l.destination === t.destination) >= minCount;
            });
            if (!vertices?.length) {
                return;
            }
            for (const vertex of vertices){
                const p3 = vertex.destination, triangleFreq = this._getTriangleFrequency(p1, p2, p3);
                if (triangleFreq > options.links.triangles.frequency) {
                    continue;
                }
                this._drawLinkTriangle(p1, link, vertex);
            }
        };
        this._getLinkFrequency = (p1, p2)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLinkFrequency"])([
                p1,
                p2
            ], this._freqs.links);
        };
        this._getTriangleFrequency = (p1, p2, p3)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLinkFrequency"])([
                p1,
                p2,
                p3
            ], this._freqs.triangles);
        };
        this._container = container;
        this._engine = engine;
        this._freqs = {
            links: new Map(),
            triangles: new Map()
        };
    }
    drawParticle(context, particle) {
        const { links, options } = particle;
        if (!links?.length) {
            return;
        }
        const p1Links = links.filter((l)=>options.links && (options.links.frequency >= maxFrequency || this._getLinkFrequency(particle, l.destination) <= options.links.frequency));
        for (const link of p1Links){
            this._drawTriangles(options, particle, link, p1Links);
            if (link.opacity > minOpacity && (particle.retina.linksWidth ?? minWidth) > minWidth) {
                this._drawLinkLine(particle, link);
            }
        }
    }
    async init() {
        this._freqs.links = new Map();
        this._freqs.triangles = new Map();
        await Promise.resolve();
    }
    particleCreated(particle) {
        particle.links = [];
        if (!particle.options.links) {
            return;
        }
        const ratio = this._container.retina.pixelRatio, { retina } = particle, { distance, width } = particle.options.links;
        retina.linksDistance = distance * ratio;
        retina.linksWidth = width * ratio;
    }
    particleDestroyed(particle) {
        particle.links = [];
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/LinksPlugin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinksPlugin",
    ()=>LinksPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$LinkInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/LinkInstance.js [app-client] (ecmascript)");
;
class LinksPlugin {
    constructor(engine){
        this.id = "links";
        this._engine = engine;
    }
    getPlugin(container) {
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$LinkInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkInstance"](container, this._engine));
    }
    loadOptions() {}
    needsPlugin() {
        return true;
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/plugin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadLinksPlugin",
    ()=>loadLinksPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$LinksPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/LinksPlugin.js [app-client] (ecmascript)");
;
async function loadLinksPlugin(engine, refresh = true) {
    const plugin = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$LinksPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinksPlugin"](engine);
    await engine.addPlugin(plugin, refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Options/Interfaces/ILinks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Options/Interfaces/ILinksShadow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Options/Interfaces/ILinksTriangle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadParticlesLinksInteraction",
    ()=>loadParticlesLinksInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$interaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/interaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/plugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Options$2f$Classes$2f$Links$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Options/Classes/Links.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Options$2f$Classes$2f$LinksShadow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Options/Classes/LinksShadow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Options$2f$Classes$2f$LinksTriangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Options/Classes/LinksTriangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Options$2f$Interfaces$2f$ILinks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Options/Interfaces/ILinks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Options$2f$Interfaces$2f$ILinksShadow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Options/Interfaces/ILinksShadow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$Options$2f$Interfaces$2f$ILinksTriangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/Options/Interfaces/ILinksTriangle.js [app-client] (ecmascript)");
;
;
async function loadParticlesLinksInteraction(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$interaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadLinksInteraction"])(engine, refresh);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadLinksPlugin"])(engine, refresh);
}
;
;
;
;
;
;
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-polygon/browser/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drawPolygon",
    ()=>drawPolygon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
const piDeg = 180, origin = {
    x: 0,
    y: 0
}, sidesOffset = 2;
function drawPolygon(data, start, side) {
    const { context } = data, sideCount = side.count.numerator * side.count.denominator, decimalSides = side.count.numerator / side.count.denominator, interiorAngleDegrees = piDeg * (decimalSides - sidesOffset) / decimalSides, interiorAngle = Math.PI - (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degToRad"])(interiorAngleDegrees);
    if (!context) {
        return;
    }
    context.beginPath();
    context.translate(start.x, start.y);
    context.moveTo(origin.x, origin.y);
    for(let i = 0; i < sideCount; i++){
        context.lineTo(side.length, origin.y);
        context.translate(side.length, origin.y);
        context.rotate(interiorAngle);
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-polygon/browser/PolygonDrawerBase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PolygonDrawerBase",
    ()=>PolygonDrawerBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$polygon$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-polygon/browser/Utils.js [app-client] (ecmascript)");
;
;
const defaultSides = 5;
class PolygonDrawerBase {
    draw(data) {
        const { particle, radius } = data, start = this.getCenter(particle, radius), side = this.getSidesData(particle, radius);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$polygon$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawPolygon"])(data, start, side);
    }
    getSidesCount(particle) {
        const polygon = particle.shapeData;
        return Math.round((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(polygon?.sides ?? defaultSides));
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-polygon/browser/PolygonDrawer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PolygonDrawer",
    ()=>PolygonDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$polygon$2f$browser$2f$PolygonDrawerBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-polygon/browser/PolygonDrawerBase.js [app-client] (ecmascript)");
;
const sidesCenterFactor = 3.5, yFactor = 2.66, sidesFactor = 3;
class PolygonDrawer extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$polygon$2f$browser$2f$PolygonDrawerBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolygonDrawerBase"] {
    constructor(){
        super(...arguments);
        this.validTypes = [
            "polygon"
        ];
    }
    getCenter(particle, radius) {
        return {
            x: -radius / (particle.sides / sidesCenterFactor),
            y: -radius / (yFactor / sidesCenterFactor)
        };
    }
    getSidesData(particle, radius) {
        const sides = particle.sides;
        return {
            count: {
                denominator: 1,
                numerator: sides
            },
            length: radius * yFactor / (sides / sidesFactor)
        };
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-polygon/browser/TriangleDrawer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TriangleDrawer",
    ()=>TriangleDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$polygon$2f$browser$2f$PolygonDrawerBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-polygon/browser/PolygonDrawerBase.js [app-client] (ecmascript)");
;
const yFactor = 1.66, sides = 3, double = 2;
class TriangleDrawer extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$polygon$2f$browser$2f$PolygonDrawerBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolygonDrawerBase"] {
    constructor(){
        super(...arguments);
        this.validTypes = [
            "triangle"
        ];
    }
    getCenter(particle, radius) {
        return {
            x: -radius,
            y: radius / yFactor
        };
    }
    getSidesCount() {
        return sides;
    }
    getSidesData(particle, radius) {
        const diameter = radius * double;
        return {
            count: {
                denominator: 2,
                numerator: 3
            },
            length: diameter
        };
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-polygon/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadGenericPolygonShape",
    ()=>loadGenericPolygonShape,
    "loadPolygonShape",
    ()=>loadPolygonShape,
    "loadTriangleShape",
    ()=>loadTriangleShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$polygon$2f$browser$2f$PolygonDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-polygon/browser/PolygonDrawer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$polygon$2f$browser$2f$TriangleDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-polygon/browser/TriangleDrawer.js [app-client] (ecmascript)");
;
;
async function loadGenericPolygonShape(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addShape(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$polygon$2f$browser$2f$PolygonDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolygonDrawer"](), refresh);
}
async function loadTriangleShape(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addShape(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$polygon$2f$browser$2f$TriangleDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TriangleDrawer"](), refresh);
}
async function loadPolygonShape(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await loadGenericPolygonShape(engine, refresh);
    await loadTriangleShape(engine, refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-rotate/browser/Options/Classes/RotateAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RotateAnimation",
    ()=>RotateAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
class RotateAnimation {
    constructor(){
        this.enable = false;
        this.speed = 0;
        this.decay = 0;
        this.sync = false;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.speed !== undefined) {
            this.speed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.speed);
        }
        if (data.decay !== undefined) {
            this.decay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.decay);
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-rotate/browser/Options/Classes/Rotate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Rotate",
    ()=>Rotate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$RotateDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Directions/RotateDirection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Options/Classes/ValueWithRandom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$rotate$2f$browser$2f$Options$2f$Classes$2f$RotateAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-rotate/browser/Options/Classes/RotateAnimation.js [app-client] (ecmascript)");
;
;
class Rotate extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueWithRandom"] {
    constructor(){
        super();
        this.animation = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$rotate$2f$browser$2f$Options$2f$Classes$2f$RotateAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotateAnimation"]();
        this.direction = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$RotateDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotateDirection"].clockwise;
        this.path = false;
        this.value = 0;
    }
    load(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
            return;
        }
        super.load(data);
        if (data.direction !== undefined) {
            this.direction = data.direction;
        }
        this.animation.load(data.animation);
        if (data.path !== undefined) {
            this.path = data.path;
        }
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-rotate/browser/RotateUpdater.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RotateUpdater",
    ()=>RotateUpdater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/AnimationStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Types/DestroyType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$RotateDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Enums/Directions/RotateDirection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$rotate$2f$browser$2f$Options$2f$Classes$2f$Rotate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-rotate/browser/Options/Classes/Rotate.js [app-client] (ecmascript)");
;
;
const double = 2, doublePI = Math.PI * double, identity = 1, doublePIDeg = 360;
class RotateUpdater {
    constructor(container){
        this.container = container;
    }
    init(particle) {
        const rotateOptions = particle.options.rotate;
        if (!rotateOptions) {
            return;
        }
        particle.rotate = {
            enable: rotateOptions.animation.enable,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degToRad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(rotateOptions.value)),
            min: 0,
            max: doublePI
        };
        particle.pathRotation = rotateOptions.path;
        let rotateDirection = rotateOptions.direction;
        if (rotateDirection === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$RotateDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotateDirection"].random) {
            const index = Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])() * double), minIndex = 0;
            rotateDirection = index > minIndex ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$RotateDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotateDirection"].counterClockwise : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$RotateDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotateDirection"].clockwise;
        }
        switch(rotateDirection){
            case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$RotateDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotateDirection"].counterClockwise:
            case "counterClockwise":
                particle.rotate.status = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].decreasing;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$RotateDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotateDirection"].clockwise:
                particle.rotate.status = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing;
                break;
        }
        const rotateAnimation = rotateOptions.animation;
        if (rotateAnimation.enable) {
            particle.rotate.decay = identity - (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(rotateAnimation.decay);
            particle.rotate.velocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(rotateAnimation.speed) / doublePIDeg * this.container.retina.reduceFactor;
            if (!rotateAnimation.sync) {
                particle.rotate.velocity *= (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])();
            }
        }
        particle.rotation = particle.rotate.value;
    }
    isEnabled(particle) {
        const rotate = particle.options.rotate;
        if (!rotate) {
            return false;
        }
        return !particle.destroyed && !particle.spawning && (!!rotate.value || rotate.animation.enable || rotate.path);
    }
    loadOptions(options, ...sources) {
        if (!options.rotate) {
            options.rotate = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$rotate$2f$browser$2f$Options$2f$Classes$2f$Rotate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rotate"]();
        }
        for (const source of sources){
            options.rotate.load(source?.rotate);
        }
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        particle.isRotating = !!particle.rotate;
        if (!particle.rotate) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAnimation"])(particle, particle.rotate, false, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DestroyType"].none, delta);
        particle.rotation = particle.rotate.value;
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-rotate/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadRotateUpdater",
    ()=>loadRotateUpdater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$rotate$2f$browser$2f$RotateUpdater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-rotate/browser/RotateUpdater.js [app-client] (ecmascript)");
;
async function loadRotateUpdater(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addParticleUpdater("rotate", (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$rotate$2f$browser$2f$RotateUpdater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotateUpdater"](container));
    }, refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-square/browser/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drawSquare",
    ()=>drawSquare
]);
const fixFactorSquared = 2, fixFactor = Math.sqrt(fixFactorSquared), double = 2;
function drawSquare(data) {
    const { context, radius } = data, fixedRadius = radius / fixFactor, fixedDiameter = fixedRadius * double;
    context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-square/browser/SquareDrawer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SquareDrawer",
    ()=>SquareDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$square$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-square/browser/Utils.js [app-client] (ecmascript)");
;
const sides = 4;
class SquareDrawer {
    constructor(){
        this.validTypes = [
            "edge",
            "square"
        ];
    }
    draw(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$square$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawSquare"])(data);
    }
    getSidesCount() {
        return sides;
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-square/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadSquareShape",
    ()=>loadSquareShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$square$2f$browser$2f$SquareDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-square/browser/SquareDrawer.js [app-client] (ecmascript)");
;
async function loadSquareShape(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addShape(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$square$2f$browser$2f$SquareDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SquareDrawer"](), refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-star/browser/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drawStar",
    ()=>drawStar
]);
const defaultInset = 2, origin = {
    x: 0,
    y: 0
};
function drawStar(data) {
    const { context, particle, radius } = data, sides = particle.sides, inset = particle.starInset ?? defaultInset;
    context.moveTo(origin.x, origin.y - radius);
    for(let i = 0; i < sides; i++){
        context.rotate(Math.PI / sides);
        context.lineTo(origin.x, origin.y - radius * inset);
        context.rotate(Math.PI / sides);
        context.lineTo(origin.x, origin.y - radius);
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-star/browser/StarDrawer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StarDrawer",
    ()=>StarDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$star$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-star/browser/Utils.js [app-client] (ecmascript)");
;
;
const defaultInset = 2, defaultSides = 5;
class StarDrawer {
    constructor(){
        this.validTypes = [
            "star"
        ];
    }
    draw(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$star$2f$browser$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawStar"])(data);
    }
    getSidesCount(particle) {
        const star = particle.shapeData;
        return Math.round((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(star?.sides ?? defaultSides));
    }
    particleInit(container, particle) {
        const star = particle.shapeData;
        particle.starInset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(star?.inset ?? defaultInset);
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-star/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadStarShape",
    ()=>loadStarShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$star$2f$browser$2f$StarDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-star/browser/StarDrawer.js [app-client] (ecmascript)");
;
async function loadStarShape(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addShape(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$star$2f$browser$2f$StarDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarDrawer"](), refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-stroke-color/browser/StrokeColorUpdater.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StrokeColorUpdater",
    ()=>StrokeColorUpdater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
;
const defaultOpacity = 1;
class StrokeColorUpdater {
    constructor(container, engine){
        this._container = container;
        this._engine = engine;
    }
    init(particle) {
        const container = this._container, options = particle.options;
        const stroke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(options.stroke, particle.id, options.reduceDuplicates);
        particle.strokeWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(stroke.width) * container.retina.pixelRatio;
        particle.strokeOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(stroke.opacity ?? defaultOpacity);
        particle.strokeAnimation = stroke.color?.animation;
        const strokeHslColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeColorToHsl"])(this._engine, stroke.color) ?? particle.getFillColor();
        if (strokeHslColor) {
            particle.strokeColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHslAnimationFromHsl"])(strokeHslColor, particle.strokeAnimation, container.retina.reduceFactor);
        }
    }
    isEnabled(particle) {
        const color = particle.strokeAnimation, { strokeColor } = particle;
        return !particle.destroyed && !particle.spawning && !!color && (strokeColor?.h.value !== undefined && strokeColor.h.enable || strokeColor?.s.value !== undefined && strokeColor.s.enable || strokeColor?.l.value !== undefined && strokeColor.l.enable);
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateColor"])(particle.strokeColor, delta);
    }
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-stroke-color/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadStrokeColorUpdater",
    ()=>loadStrokeColorUpdater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$stroke$2d$color$2f$browser$2f$StrokeColorUpdater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-stroke-color/browser/StrokeColorUpdater.js [app-client] (ecmascript)");
;
async function loadStrokeColorUpdater(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await engine.addParticleUpdater("strokeColor", (container)=>{
        return Promise.resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$stroke$2d$color$2f$browser$2f$StrokeColorUpdater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokeColorUpdater"](container, engine));
    }, refresh);
}
}),
"[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/slim/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadSlim",
    ()=>loadSlim
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$basic$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/basic/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$plugin$2d$easing$2d$quad$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/plugin-easing-quad/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$emoji$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-emoji/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$attract$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-attract/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bounce$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bounce/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-bubble/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$connect$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-connect/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$grab$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-grab/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$pause$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-pause/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$push$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-push/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$remove$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-remove/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-repulse/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$slow$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-external-slow/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-image/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$life$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-life/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$line$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-line/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$move$2d$parallax$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/move-parallax/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$attract$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-attract/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$collisions$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-collisions/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/interaction-particles-links/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$polygon$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-polygon/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$rotate$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-rotate/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$square$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-square/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$star$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/shape-star/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$stroke$2d$color$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/CODE/authport/Auth-Portal/node_modules/@tsparticles/updater-stroke-color/browser/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
async function loadSlim(engine, refresh = true) {
    engine.checkVersion("3.9.1");
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$move$2d$parallax$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadParallaxMover"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$attract$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadExternalAttractInteraction"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bounce$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadExternalBounceInteraction"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$bubble$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadExternalBubbleInteraction"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$connect$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadExternalConnectInteraction"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$grab$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadExternalGrabInteraction"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$pause$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadExternalPauseInteraction"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$push$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadExternalPushInteraction"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$remove$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadExternalRemoveInteraction"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$repulse$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadExternalRepulseInteraction"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$external$2d$slow$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadExternalSlowInteraction"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$attract$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadParticlesAttractInteraction"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$collisions$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadParticlesCollisionsInteraction"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$interaction$2d$particles$2d$links$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadParticlesLinksInteraction"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$plugin$2d$easing$2d$quad$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadEasingQuadPlugin"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$emoji$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadEmojiShape"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$image$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadImageShape"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$line$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadLineShape"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$polygon$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadPolygonShape"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$square$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSquareShape"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$shape$2d$star$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadStarShape"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$life$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadLifeUpdater"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$rotate$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadRotateUpdater"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$updater$2d$stroke$2d$color$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadStrokeColorUpdater"])(engine, false);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$CODE$2f$authport$2f$Auth$2d$Portal$2f$node_modules$2f40$tsparticles$2f$basic$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadBasic"])(engine, refresh);
}
}),
]);

//# sourceMappingURL=ad341_a8090631._.js.map