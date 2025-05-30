/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function Cs(e) {
    const t = Object.create(null);
    for (const n of e.split(","))
        t[n] = 1;
    return n => n in t
}
const te = {}
  , xt = []
  , Ue = () => {}
  , bo = () => !1
  , Yt = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , Es = e => e.startsWith("onUpdate:")
  , oe = Object.assign
  , Ts = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , wo = Object.prototype.hasOwnProperty
  , z = (e, t) => wo.call(e, t)
  , B = Array.isArray
  , St = e => Cn(e) === "[object Map]"
  , $r = e => Cn(e) === "[object Set]"
  , q = e => typeof e == "function"
  , re = e => typeof e == "string"
  , qe = e => typeof e == "symbol"
  , ne = e => e !== null && typeof e == "object"
  , Dr = e => (ne(e) || q(e)) && q(e.then) && q(e.catch)
  , jr = Object.prototype.toString
  , Cn = e => jr.call(e)
  , xo = e => Cn(e).slice(8, -1)
  , Vr = e => Cn(e) === "[object Object]"
  , As = e => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , Ct = Cs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , En = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
  , So = /-(\w)/g
  , Pe = En(e => e.replace(So, (t, n) => n ? n.toUpperCase() : ""))
  , Co = /\B([A-Z])/g
  , st = En(e => e.replace(Co, "-$1").toLowerCase())
  , Tn = En(e => e.charAt(0).toUpperCase() + e.slice(1))
  , un = En(e => e ? `on${Tn(e)}` : "")
  , et = (e, t) => !Object.is(e, t)
  , kn = (e, ...t) => {
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
  , Ur = (e, t, n, s=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: s,
        value: n
    })
}
  , Eo = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , To = e => {
    const t = re(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let Ys;
const An = () => Ys || (Ys = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rs(e) {
    if (B(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n]
              , r = re(s) ? Mo(s) : Rs(s);
            if (r)
                for (const i in r)
                    t[i] = r[i]
        }
        return t
    } else if (re(e) || ne(e))
        return e
}
const Ao = /;(?![^(]*\))/g
  , Ro = /:([^]+)/
  , Oo = /\/\*[^]*?\*\//g;
function Mo(e) {
    const t = {};
    return e.replace(Oo, "").split(Ao).forEach(n => {
        if (n) {
            const s = n.split(Ro);
            s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
    }
    ),
    t
}
function Os(e) {
    let t = "";
    if (re(e))
        t = e;
    else if (B(e))
        for (let n = 0; n < e.length; n++) {
            const s = Os(e[n]);
            s && (t += s + " ")
        }
    else if (ne(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const Io = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Po = Cs(Io);
function Br(e) {
    return !!e || e === ""
}
const kr = e => !!(e && e.__v_isRef === !0)
  , Lo = e => re(e) ? e : e == null ? "" : B(e) || ne(e) && (e.toString === jr || !q(e.toString)) ? kr(e) ? Lo(e.value) : JSON.stringify(e, Wr, 2) : String(e)
  , Wr = (e, t) => kr(t) ? Wr(e, t.value) : St(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (n, [s,r], i) => (n[Wn(s, i) + " =>"] = r,
    n), {})
} : $r(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => Wn(n))
} : qe(t) ? Wn(t) : ne(t) && !B(t) && !Vr(t) ? String(t) : t
  , Wn = (e, t="") => {
    var n;
    return qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let be;
class No {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this._isPaused = !1,
        this.parent = be,
        !t && be && (this.index = (be.scopes || (be.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].pause();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].resume();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = be;
            try {
                return be = this,
                t()
            } finally {
                be = n
            }
        }
    }
    on() {
        be = this
    }
    off() {
        be = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, s;
            for (n = 0,
            s = this.effects.length; n < s; n++)
                this.effects[n].stop();
            for (n = 0,
            s = this.cleanups.length; n < s; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                s = this.scopes.length; n < s; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r,
                r.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function Kr() {
    return be
}
function Fo(e, t=!1) {
    be && be.cleanups.push(e)
}
let ee;
const Kn = new WeakSet;
class qr {
    constructor(t) {
        this.fn = t,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 5,
        this.next = void 0,
        this.cleanup = void 0,
        this.scheduler = void 0,
        be && be.active && be.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
        Kn.has(this) && (Kn.delete(this),
        this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Yr(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
        Xs(this),
        Xr(this);
        const t = ee
          , n = Ne;
        ee = this,
        Ne = !0;
        try {
            return this.fn()
        } finally {
            Jr(this),
            ee = t,
            Ne = n,
            this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep)
                Ps(t);
            this.deps = this.depsTail = void 0,
            Xs(this),
            this.onStop && this.onStop(),
            this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? Kn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        fs(this) && this.run()
    }
    get dirty() {
        return fs(this)
    }
}
let Gr = 0, Ft, Ht;
function Yr(e, t=!1) {
    if (e.flags |= 8,
    t) {
        e.next = Ht,
        Ht = e;
        return
    }
    e.next = Ft,
    Ft = e
}
function Ms() {
    Gr++
}
function Is() {
    if (--Gr > 0)
        return;
    if (Ht) {
        let t = Ht;
        for (Ht = void 0; t; ) {
            const n = t.next;
            t.next = void 0,
            t.flags &= -9,
            t = n
        }
    }
    let e;
    for (; Ft; ) {
        let t = Ft;
        for (Ft = void 0; t; ) {
            const n = t.next;
            if (t.next = void 0,
            t.flags &= -9,
            t.flags & 1)
                try {
                    t.trigger()
                } catch (s) {
                    e || (e = s)
                }
            t = n
        }
    }
    if (e)
        throw e
}
function Xr(e) {
    for (let t = e.deps; t; t = t.nextDep)
        t.version = -1,
        t.prevActiveLink = t.dep.activeLink,
        t.dep.activeLink = t
}
function Jr(e) {
    let t, n = e.depsTail, s = n;
    for (; s; ) {
        const r = s.prevDep;
        s.version === -1 ? (s === n && (n = r),
        Ps(s),
        Ho(s)) : t = s,
        s.dep.activeLink = s.prevActiveLink,
        s.prevActiveLink = void 0,
        s = r
    }
    e.deps = t,
    e.depsTail = n
}
function fs(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (zr(t.dep.computed) || t.dep.version !== t.version))
            return !0;
    return !!e._dirty
}
function zr(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17,
    e.globalVersion === Vt))
        return;
    e.globalVersion = Vt;
    const t = e.dep;
    if (e.flags |= 2,
    t.version > 0 && !e.isSSR && e.deps && !fs(e)) {
        e.flags &= -3;
        return
    }
    const n = ee
      , s = Ne;
    ee = e,
    Ne = !0;
    try {
        Xr(e);
        const r = e.fn(e._value);
        (t.version === 0 || et(r, e._value)) && (e._value = r,
        t.version++)
    } catch (r) {
        throw t.version++,
        r
    } finally {
        ee = n,
        Ne = s,
        Jr(e),
        e.flags &= -3
    }
}
function Ps(e, t=!1) {
    const {dep: n, prevSub: s, nextSub: r} = e;
    if (s && (s.nextSub = r,
    e.prevSub = void 0),
    r && (r.prevSub = s,
    e.nextSub = void 0),
    n.subs === e && (n.subs = s,
    !s && n.computed)) {
        n.computed.flags &= -5;
        for (let i = n.computed.deps; i; i = i.nextDep)
            Ps(i, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Ho(e) {
    const {prevDep: t, nextDep: n} = e;
    t && (t.nextDep = n,
    e.prevDep = void 0),
    n && (n.prevDep = t,
    e.nextDep = void 0)
}
let Ne = !0;
const Qr = [];
function rt() {
    Qr.push(Ne),
    Ne = !1
}
function it() {
    const e = Qr.pop();
    Ne = e === void 0 ? !0 : e
}
function Xs(e) {
    const {cleanup: t} = e;
    if (e.cleanup = void 0,
    t) {
        const n = ee;
        ee = void 0;
        try {
            t()
        } finally {
            ee = n
        }
    }
}
let Vt = 0;
class $o {
    constructor(t, n) {
        this.sub = t,
        this.dep = n,
        this.version = n.version,
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class Rn {
    constructor(t) {
        this.computed = t,
        this.version = 0,
        this.activeLink = void 0,
        this.subs = void 0,
        this.map = void 0,
        this.key = void 0,
        this.sc = 0
    }
    track(t) {
        if (!ee || !Ne || ee === this.computed)
            return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== ee)
            n = this.activeLink = new $o(ee,this),
            ee.deps ? (n.prevDep = ee.depsTail,
            ee.depsTail.nextDep = n,
            ee.depsTail = n) : ee.deps = ee.depsTail = n,
            Zr(n);
        else if (n.version === -1 && (n.version = this.version,
        n.nextDep)) {
            const s = n.nextDep;
            s.prevDep = n.prevDep,
            n.prevDep && (n.prevDep.nextDep = s),
            n.prevDep = ee.depsTail,
            n.nextDep = void 0,
            ee.depsTail.nextDep = n,
            ee.depsTail = n,
            ee.deps === n && (ee.deps = s)
        }
        return n
    }
    trigger(t) {
        this.version++,
        Vt++,
        this.notify(t)
    }
    notify(t) {
        Ms();
        try {
            for (let n = this.subs; n; n = n.prevSub)
                n.sub.notify() && n.sub.dep.notify()
        } finally {
            Is()
        }
    }
}
function Zr(e) {
    if (e.dep.sc++,
    e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let s = t.deps; s; s = s.nextDep)
                Zr(s)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n,
        n && (n.nextSub = e)),
        e.dep.subs = e
    }
}
const mn = new WeakMap
  , dt = Symbol("")
  , us = Symbol("")
  , Ut = Symbol("");
function ge(e, t, n) {
    if (Ne && ee) {
        let s = mn.get(e);
        s || mn.set(e, s = new Map);
        let r = s.get(n);
        r || (s.set(n, r = new Rn),
        r.map = s,
        r.key = n),
        r.track()
    }
}
function We(e, t, n, s, r, i) {
    const o = mn.get(e);
    if (!o) {
        Vt++;
        return
    }
    const l = c => {
        c && c.trigger()
    }
    ;
    if (Ms(),
    t === "clear")
        o.forEach(l);
    else {
        const c = B(e)
          , u = c && As(n);
        if (c && n === "length") {
            const f = Number(s);
            o.forEach( (h, y) => {
                (y === "length" || y === Ut || !qe(y) && y >= f) && l(h)
            }
            )
        } else
            switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)),
            u && l(o.get(Ut)),
            t) {
            case "add":
                c ? u && l(o.get("length")) : (l(o.get(dt)),
                St(e) && l(o.get(us)));
                break;
            case "delete":
                c || (l(o.get(dt)),
                St(e) && l(o.get(us)));
                break;
            case "set":
                St(e) && l(o.get(dt));
                break
            }
    }
    Is()
}
function Do(e, t) {
    const n = mn.get(e);
    return n && n.get(t)
}
function _t(e) {
    const t = J(e);
    return t === e ? t : (ge(t, "iterate", Ut),
    Ie(e) ? t : t.map(me))
}
function On(e) {
    return ge(e = J(e), "iterate", Ut),
    e
}
const jo = {
    __proto__: null,
    [Symbol.iterator]() {
        return qn(this, Symbol.iterator, me)
    },
    concat(...e) {
        return _t(this).concat(...e.map(t => B(t) ? _t(t) : t))
    },
    entries() {
        return qn(this, "entries", e => (e[1] = me(e[1]),
        e))
    },
    every(e, t) {
        return Be(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return Be(this, "filter", e, t, n => n.map(me), arguments)
    },
    find(e, t) {
        return Be(this, "find", e, t, me, arguments)
    },
    findIndex(e, t) {
        return Be(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return Be(this, "findLast", e, t, me, arguments)
    },
    findLastIndex(e, t) {
        return Be(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return Be(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return Gn(this, "includes", e)
    },
    indexOf(...e) {
        return Gn(this, "indexOf", e)
    },
    join(e) {
        return _t(this).join(e)
    },
    lastIndexOf(...e) {
        return Gn(this, "lastIndexOf", e)
    },
    map(e, t) {
        return Be(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return Pt(this, "pop")
    },
    push(...e) {
        return Pt(this, "push", e)
    },
    reduce(e, ...t) {
        return Js(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return Js(this, "reduceRight", e, t)
    },
    shift() {
        return Pt(this, "shift")
    },
    some(e, t) {
        return Be(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return Pt(this, "splice", e)
    },
    toReversed() {
        return _t(this).toReversed()
    },
    toSorted(e) {
        return _t(this).toSorted(e)
    },
    toSpliced(...e) {
        return _t(this).toSpliced(...e)
    },
    unshift(...e) {
        return Pt(this, "unshift", e)
    },
    values() {
        return qn(this, "values", me)
    }
};
function qn(e, t, n) {
    const s = On(e)
      , r = s[t]();
    return s !== e && !Ie(e) && (r._next = r.next,
    r.next = () => {
        const i = r._next();
        return i.value && (i.value = n(i.value)),
        i
    }
    ),
    r
}
const Vo = Array.prototype;
function Be(e, t, n, s, r, i) {
    const o = On(e)
      , l = o !== e && !Ie(e)
      , c = o[t];
    if (c !== Vo[t]) {
        const h = c.apply(e, i);
        return l ? me(h) : h
    }
    let u = n;
    o !== e && (l ? u = function(h, y) {
        return n.call(this, me(h), y, e)
    }
    : n.length > 2 && (u = function(h, y) {
        return n.call(this, h, y, e)
    }
    ));
    const f = c.call(o, u, s);
    return l && r ? r(f) : f
}
function Js(e, t, n, s) {
    const r = On(e);
    let i = n;
    return r !== e && (Ie(e) ? n.length > 3 && (i = function(o, l, c) {
        return n.call(this, o, l, c, e)
    }
    ) : i = function(o, l, c) {
        return n.call(this, o, me(l), c, e)
    }
    ),
    r[t](i, ...s)
}
function Gn(e, t, n) {
    const s = J(e);
    ge(s, "iterate", Ut);
    const r = s[t](...n);
    return (r === -1 || r === !1) && Fs(n[0]) ? (n[0] = J(n[0]),
    s[t](...n)) : r
}
function Pt(e, t, n=[]) {
    rt(),
    Ms();
    const s = J(e)[t].apply(e, n);
    return Is(),
    it(),
    s
}
const Uo = Cs("__proto__,__v_isRef,__isVue")
  , ei = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(qe));
function Bo(e) {
    qe(e) || (e = String(e));
    const t = J(this);
    return ge(t, "has", e),
    t.hasOwnProperty(e)
}
class ti {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, s) {
        const r = this._isReadonly
          , i = this._isShallow;
        if (n === "__v_isReactive")
            return !r;
        if (n === "__v_isReadonly")
            return r;
        if (n === "__v_isShallow")
            return i;
        if (n === "__v_raw")
            return s === (r ? i ? Qo : ii : i ? ri : si).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
        const o = B(t);
        if (!r) {
            let c;
            if (o && (c = jo[n]))
                return c;
            if (n === "hasOwnProperty")
                return Bo
        }
        const l = Reflect.get(t, n, ce(t) ? t : s);
        return (qe(n) ? ei.has(n) : Uo(n)) || (r || ge(t, "get", n),
        i) ? l : ce(l) ? o && As(n) ? l : l.value : ne(l) ? r ? In(l) : Mn(l) : l
    }
}
class ni extends ti {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, s, r) {
        let i = t[n];
        if (!this._isShallow) {
            const c = yt(i);
            if (!Ie(s) && !yt(s) && (i = J(i),
            s = J(s)),
            !B(t) && ce(i) && !ce(s))
                return c ? !1 : (i.value = s,
                !0)
        }
        const o = B(t) && As(n) ? Number(n) < t.length : z(t, n)
          , l = Reflect.set(t, n, s, ce(t) ? t : r);
        return t === J(r) && (o ? et(s, i) && We(t, "set", n, s) : We(t, "add", n, s)),
        l
    }
    deleteProperty(t, n) {
        const s = z(t, n);
        t[n];
        const r = Reflect.deleteProperty(t, n);
        return r && s && We(t, "delete", n, void 0),
        r
    }
    has(t, n) {
        const s = Reflect.has(t, n);
        return (!qe(n) || !ei.has(n)) && ge(t, "has", n),
        s
    }
    ownKeys(t) {
        return ge(t, "iterate", B(t) ? "length" : dt),
        Reflect.ownKeys(t)
    }
}
class ko extends ti {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const Wo = new ni
  , Ko = new ko
  , qo = new ni(!0);
const ds = e => e
  , Zt = e => Reflect.getPrototypeOf(e);
function Go(e, t, n) {
    return function(...s) {
        const r = this.__v_raw
          , i = J(r)
          , o = St(i)
          , l = e === "entries" || e === Symbol.iterator && o
          , c = e === "keys" && o
          , u = r[e](...s)
          , f = n ? ds : t ? hs : me;
        return !t && ge(i, "iterate", c ? us : dt),
        {
            next() {
                const {value: h, done: y} = u.next();
                return y ? {
                    value: h,
                    done: y
                } : {
                    value: l ? [f(h[0]), f(h[1])] : f(h),
                    done: y
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function en(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function Yo(e, t) {
    const n = {
        get(r) {
            const i = this.__v_raw
              , o = J(i)
              , l = J(r);
            e || (et(r, l) && ge(o, "get", r),
            ge(o, "get", l));
            const {has: c} = Zt(o)
              , u = t ? ds : e ? hs : me;
            if (c.call(o, r))
                return u(i.get(r));
            if (c.call(o, l))
                return u(i.get(l));
            i !== o && i.get(r)
        },
        get size() {
            const r = this.__v_raw;
            return !e && ge(J(r), "iterate", dt),
            Reflect.get(r, "size", r)
        },
        has(r) {
            const i = this.__v_raw
              , o = J(i)
              , l = J(r);
            return e || (et(r, l) && ge(o, "has", r),
            ge(o, "has", l)),
            r === l ? i.has(r) : i.has(r) || i.has(l)
        },
        forEach(r, i) {
            const o = this
              , l = o.__v_raw
              , c = J(l)
              , u = t ? ds : e ? hs : me;
            return !e && ge(c, "iterate", dt),
            l.forEach( (f, h) => r.call(i, u(f), u(h), o))
        }
    };
    return oe(n, e ? {
        add: en("add"),
        set: en("set"),
        delete: en("delete"),
        clear: en("clear")
    } : {
        add(r) {
            !t && !Ie(r) && !yt(r) && (r = J(r));
            const i = J(this);
            return Zt(i).has.call(i, r) || (i.add(r),
            We(i, "add", r, r)),
            this
        },
        set(r, i) {
            !t && !Ie(i) && !yt(i) && (i = J(i));
            const o = J(this)
              , {has: l, get: c} = Zt(o);
            let u = l.call(o, r);
            u || (r = J(r),
            u = l.call(o, r));
            const f = c.call(o, r);
            return o.set(r, i),
            u ? et(i, f) && We(o, "set", r, i) : We(o, "add", r, i),
            this
        },
        delete(r) {
            const i = J(this)
              , {has: o, get: l} = Zt(i);
            let c = o.call(i, r);
            c || (r = J(r),
            c = o.call(i, r)),
            l && l.call(i, r);
            const u = i.delete(r);
            return c && We(i, "delete", r, void 0),
            u
        },
        clear() {
            const r = J(this)
              , i = r.size !== 0
              , o = r.clear();
            return i && We(r, "clear", void 0, void 0),
            o
        }
    }),
    ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        n[r] = Go(r, e, t)
    }
    ),
    n
}
function Ls(e, t) {
    const n = Yo(e, t);
    return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(z(n, r) && r in s ? n : s, r, i)
}
const Xo = {
    get: Ls(!1, !1)
}
  , Jo = {
    get: Ls(!1, !0)
}
  , zo = {
    get: Ls(!0, !1)
};
const si = new WeakMap
  , ri = new WeakMap
  , ii = new WeakMap
  , Qo = new WeakMap;
function Zo(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function el(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Zo(xo(e))
}
function Mn(e) {
    return yt(e) ? e : Ns(e, !1, Wo, Xo, si)
}
function tl(e) {
    return Ns(e, !1, qo, Jo, ri)
}
function In(e) {
    return Ns(e, !0, Ko, zo, ii)
}
function Ns(e, t, n, s, r) {
    if (!ne(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const i = r.get(e);
    if (i)
        return i;
    const o = el(e);
    if (o === 0)
        return e;
    const l = new Proxy(e,o === 2 ? s : n);
    return r.set(e, l),
    l
}
function ht(e) {
    return yt(e) ? ht(e.__v_raw) : !!(e && e.__v_isReactive)
}
function yt(e) {
    return !!(e && e.__v_isReadonly)
}
function Ie(e) {
    return !!(e && e.__v_isShallow)
}
function Fs(e) {
    return e ? !!e.__v_raw : !1
}
function J(e) {
    const t = e && e.__v_raw;
    return t ? J(t) : e
}
function dn(e) {
    return !z(e, "__v_skip") && Object.isExtensible(e) && Ur(e, "__v_skip", !0),
    e
}
const me = e => ne(e) ? Mn(e) : e
  , hs = e => ne(e) ? In(e) : e;
function ce(e) {
    return e ? e.__v_isRef === !0 : !1
}
function ue(e) {
    return li(e, !1)
}
function oi(e) {
    return li(e, !0)
}
function li(e, t) {
    return ce(e) ? e : new nl(e,t)
}
class nl {
    constructor(t, n) {
        this.dep = new Rn,
        this.__v_isRef = !0,
        this.__v_isShallow = !1,
        this._rawValue = n ? t : J(t),
        this._value = n ? t : me(t),
        this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(),
        this._value
    }
    set value(t) {
        const n = this._rawValue
          , s = this.__v_isShallow || Ie(t) || yt(t);
        t = s ? t : J(t),
        et(t, n) && (this._rawValue = t,
        this._value = s ? t : me(t),
        this.dep.trigger())
    }
}
function ci(e) {
    return ce(e) ? e.value : e
}
const sl = {
    get: (e, t, n) => t === "__v_raw" ? e : ci(Reflect.get(e, t, n)),
    set: (e, t, n, s) => {
        const r = e[t];
        return ce(r) && !ce(n) ? (r.value = n,
        !0) : Reflect.set(e, t, n, s)
    }
};
function ai(e) {
    return ht(e) ? e : new Proxy(e,sl)
}
class rl {
    constructor(t) {
        this.__v_isRef = !0,
        this._value = void 0;
        const n = this.dep = new Rn
          , {get: s, set: r} = t(n.track.bind(n), n.trigger.bind(n));
        this._get = s,
        this._set = r
    }
    get value() {
        return this._value = this._get()
    }
    set value(t) {
        this._set(t)
    }
}
function il(e) {
    return new rl(e)
}
class ol {
    constructor(t, n, s) {
        this._object = t,
        this._key = n,
        this._defaultValue = s,
        this.__v_isRef = !0,
        this._value = void 0
    }
    get value() {
        const t = this._object[this._key];
        return this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Do(J(this._object), this._key)
    }
}
class ll {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0,
        this._value = void 0
    }
    get value() {
        return this._value = this._getter()
    }
}
function cl(e, t, n) {
    return ce(e) ? e : q(e) ? new ll(e) : ne(e) && arguments.length > 1 ? al(e, t, n) : ue(e)
}
function al(e, t, n) {
    const s = e[t];
    return ce(s) ? s : new ol(e,t,n)
}
class fl {
    constructor(t, n, s) {
        this.fn = t,
        this.setter = n,
        this._value = void 0,
        this.dep = new Rn(this),
        this.__v_isRef = !0,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 16,
        this.globalVersion = Vt - 1,
        this.next = void 0,
        this.effect = this,
        this.__v_isReadonly = !n,
        this.isSSR = s
    }
    notify() {
        if (this.flags |= 16,
        !(this.flags & 8) && ee !== this)
            return Yr(this, !0),
            !0
    }
    get value() {
        const t = this.dep.track();
        return zr(this),
        t && (t.version = this.dep.version),
        this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}
function ul(e, t, n=!1) {
    let s, r;
    return q(e) ? s = e : (s = e.get,
    r = e.set),
    new fl(s,r,n)
}
const tn = {}
  , yn = new WeakMap;
let ft;
function dl(e, t=!1, n=ft) {
    if (n) {
        let s = yn.get(n);
        s || yn.set(n, s = []),
        s.push(e)
    }
}
function hl(e, t, n=te) {
    const {immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: c} = n
      , u = p => r ? p : Ie(p) || r === !1 || r === 0 ? Ze(p, 1) : Ze(p);
    let f, h, y, b, P = !1, O = !1;
    if (ce(e) ? (h = () => e.value,
    P = Ie(e)) : ht(e) ? (h = () => u(e),
    P = !0) : B(e) ? (O = !0,
    P = e.some(p => ht(p) || Ie(p)),
    h = () => e.map(p => {
        if (ce(p))
            return p.value;
        if (ht(p))
            return u(p);
        if (q(p))
            return c ? c(p, 2) : p()
    }
    )) : q(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
        if (y) {
            rt();
            try {
                y()
            } finally {
                it()
            }
        }
        const p = ft;
        ft = f;
        try {
            return c ? c(e, 3, [b]) : e(b)
        } finally {
            ft = p
        }
    }
    : h = Ue,
    t && r) {
        const p = h
          , R = r === !0 ? 1 / 0 : r;
        h = () => Ze(p(), R)
    }
    const G = Kr()
      , U = () => {
        f.stop(),
        G && Ts(G.effects, f)
    }
    ;
    if (i && t) {
        const p = t;
        t = (...R) => {
            p(...R),
            U()
        }
    }
    let W = O ? new Array(e.length).fill(tn) : tn;
    const g = p => {
        if (!(!(f.flags & 1) || !f.dirty && !p))
            if (t) {
                const R = f.run();
                if (r || P || (O ? R.some( (D, j) => et(D, W[j])) : et(R, W))) {
                    y && y();
                    const D = ft;
                    ft = f;
                    try {
                        const j = [R, W === tn ? void 0 : O && W[0] === tn ? [] : W, b];
                        c ? c(t, 3, j) : t(...j),
                        W = R
                    } finally {
                        ft = D
                    }
                }
            } else
                f.run()
    }
    ;
    return l && l(g),
    f = new qr(h),
    f.scheduler = o ? () => o(g, !1) : g,
    b = p => dl(p, !1, f),
    y = f.onStop = () => {
        const p = yn.get(f);
        if (p) {
            if (c)
                c(p, 4);
            else
                for (const R of p)
                    R();
            yn.delete(f)
        }
    }
    ,
    t ? s ? g(!0) : W = f.run() : o ? o(g.bind(null, !0), !0) : f.run(),
    U.pause = f.pause.bind(f),
    U.resume = f.resume.bind(f),
    U.stop = U,
    U
}
function Ze(e, t=1 / 0, n) {
    if (t <= 0 || !ne(e) || e.__v_skip || (n = n || new Set,
    n.has(e)))
        return e;
    if (n.add(e),
    t--,
    ce(e))
        Ze(e.value, t, n);
    else if (B(e))
        for (let s = 0; s < e.length; s++)
            Ze(e[s], t, n);
    else if ($r(e) || St(e))
        e.forEach(s => {
            Ze(s, t, n)
        }
        );
    else if (Vr(e)) {
        for (const s in e)
            Ze(e[s], t, n);
        for (const s of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, s) && Ze(e[s], t, n)
    }
    return e
}
/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Xt(e, t, n, s) {
    try {
        return s ? e(...s) : e()
    } catch (r) {
        Pn(r, t, n)
    }
}
function He(e, t, n, s) {
    if (q(e)) {
        const r = Xt(e, t, n, s);
        return r && Dr(r) && r.catch(i => {
            Pn(i, t, n)
        }
        ),
        r
    }
    if (B(e)) {
        const r = [];
        for (let i = 0; i < e.length; i++)
            r.push(He(e[i], t, n, s));
        return r
    }
}
function Pn(e, t, n, s=!0) {
    const r = t ? t.vnode : null
      , {errorHandler: i, throwUnhandledErrorInProduction: o} = t && t.appContext.config || te;
    if (t) {
        let l = t.parent;
        const c = t.proxy
          , u = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; l; ) {
            const f = l.ec;
            if (f) {
                for (let h = 0; h < f.length; h++)
                    if (f[h](e, c, u) === !1)
                        return
            }
            l = l.parent
        }
        if (i) {
            rt(),
            Xt(i, null, 10, [e, c, u]),
            it();
            return
        }
    }
    pl(e, n, r, s, o)
}
function pl(e, t, n, s=!0, r=!1) {
    if (r)
        throw e;
    console.error(e)
}
const we = [];
let je = -1;
const Et = [];
let Je = null
  , wt = 0;
const fi = Promise.resolve();
let vn = null;
function Ln(e) {
    const t = vn || fi;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function gl(e) {
    let t = je + 1
      , n = we.length;
    for (; t < n; ) {
        const s = t + n >>> 1
          , r = we[s]
          , i = Bt(r);
        i < e || i === e && r.flags & 2 ? t = s + 1 : n = s
    }
    return t
}
function Hs(e) {
    if (!(e.flags & 1)) {
        const t = Bt(e)
          , n = we[we.length - 1];
        !n || !(e.flags & 2) && t >= Bt(n) ? we.push(e) : we.splice(gl(t), 0, e),
        e.flags |= 1,
        ui()
    }
}
function ui() {
    vn || (vn = fi.then(di))
}
function ml(e) {
    B(e) ? Et.push(...e) : Je && e.id === -1 ? Je.splice(wt + 1, 0, e) : e.flags & 1 || (Et.push(e),
    e.flags |= 1),
    ui()
}
function zs(e, t, n=je + 1) {
    for (; n < we.length; n++) {
        const s = we[n];
        if (s && s.flags & 2) {
            if (e && s.id !== e.uid)
                continue;
            we.splice(n, 1),
            n--,
            s.flags & 4 && (s.flags &= -2),
            s(),
            s.flags & 4 || (s.flags &= -2)
        }
    }
}
function _n(e) {
    if (Et.length) {
        const t = [...new Set(Et)].sort( (n, s) => Bt(n) - Bt(s));
        if (Et.length = 0,
        Je) {
            Je.push(...t);
            return
        }
        for (Je = t,
        wt = 0; wt < Je.length; wt++) {
            const n = Je[wt];
            n.flags & 4 && (n.flags &= -2),
            n.flags & 8 || n(),
            n.flags &= -2
        }
        Je = null,
        wt = 0
    }
}
const Bt = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function di(e) {
    try {
        for (je = 0; je < we.length; je++) {
            const t = we[je];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2),
            Xt(t, t.i, t.i ? 15 : 14),
            t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; je < we.length; je++) {
            const t = we[je];
            t && (t.flags &= -2)
        }
        je = -1,
        we.length = 0,
        _n(),
        vn = null,
        (we.length || Et.length) && di()
    }
}
let ve = null
  , hi = null;
function bn(e) {
    const t = ve;
    return ve = e,
    hi = e && e.type.__scopeId || null,
    t
}
function yl(e, t=ve, n) {
    if (!t || e._n)
        return e;
    const s = (...r) => {
        s._d && ar(-1);
        const i = bn(t);
        let o;
        try {
            o = e(...r)
        } finally {
            bn(i),
            s._d && ar(1)
        }
        return o
    }
    ;
    return s._n = !0,
    s._c = !0,
    s._d = !0,
    s
}
function Ve(e, t, n, s) {
    const r = e.dirs
      , i = t && t.dirs;
    for (let o = 0; o < r.length; o++) {
        const l = r[o];
        i && (l.oldValue = i[o].value);
        let c = l.dir[s];
        c && (rt(),
        He(c, n, 8, [e.el, l, e, t]),
        it())
    }
}
const vl = Symbol("_vte")
  , pi = e => e.__isTeleport
  , ze = Symbol("_leaveCb")
  , nn = Symbol("_enterCb");
function _l() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Ot( () => {
        e.isMounted = !0
    }
    ),
    Si( () => {
        e.isUnmounting = !0
    }
    ),
    e
}
const Re = [Function, Array]
  , gi = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Re,
    onEnter: Re,
    onAfterEnter: Re,
    onEnterCancelled: Re,
    onBeforeLeave: Re,
    onLeave: Re,
    onAfterLeave: Re,
    onLeaveCancelled: Re,
    onBeforeAppear: Re,
    onAppear: Re,
    onAfterAppear: Re,
    onAppearCancelled: Re
}
  , mi = e => {
    const t = e.subTree;
    return t.component ? mi(t.component) : t
}
  , bl = {
    name: "BaseTransition",
    props: gi,
    setup(e, {slots: t}) {
        const n = jn()
          , s = _l();
        return () => {
            const r = t.default && _i(t.default(), !0);
            if (!r || !r.length)
                return;
            const i = yi(r)
              , o = J(e)
              , {mode: l} = o;
            if (s.isLeaving)
                return Yn(i);
            const c = Qs(i);
            if (!c)
                return Yn(i);
            let u = ps(c, o, s, n, y => u = y);
            c.type !== ye && kt(c, u);
            const f = n.subTree
              , h = f && Qs(f);
            if (h && h.type !== ye && !ut(c, h) && mi(n).type !== ye) {
                const y = ps(h, o, s, n);
                if (kt(h, y),
                l === "out-in" && c.type !== ye)
                    return s.isLeaving = !0,
                    y.afterLeave = () => {
                        s.isLeaving = !1,
                        n.job.flags & 8 || n.update(),
                        delete y.afterLeave
                    }
                    ,
                    Yn(i);
                l === "in-out" && c.type !== ye && (y.delayLeave = (b, P, O) => {
                    const G = vi(s, h);
                    G[String(h.key)] = h,
                    b[ze] = () => {
                        P(),
                        b[ze] = void 0,
                        delete u.delayedLeave
                    }
                    ,
                    u.delayedLeave = O
                }
                )
            }
            return i
        }
    }
};
function yi(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== ye) {
                t = n;
                break
            }
    }
    return t
}
const wl = bl;
function vi(e, t) {
    const {leavingVNodes: n} = e;
    let s = n.get(t.type);
    return s || (s = Object.create(null),
    n.set(t.type, s)),
    s
}
function ps(e, t, n, s, r) {
    const {appear: i, mode: o, persisted: l=!1, onBeforeEnter: c, onEnter: u, onAfterEnter: f, onEnterCancelled: h, onBeforeLeave: y, onLeave: b, onAfterLeave: P, onLeaveCancelled: O, onBeforeAppear: G, onAppear: U, onAfterAppear: W, onAppearCancelled: g} = t
      , p = String(e.key)
      , R = vi(n, e)
      , D = (I, _) => {
        I && He(I, s, 9, _)
    }
      , j = (I, _) => {
        const L = _[1];
        D(I, _),
        B(I) ? I.every(x => x.length <= 1) && L() : I.length <= 1 && L()
    }
      , K = {
        mode: o,
        persisted: l,
        beforeEnter(I) {
            let _ = c;
            if (!n.isMounted)
                if (i)
                    _ = G || c;
                else
                    return;
            I[ze] && I[ze](!0);
            const L = R[p];
            L && ut(e, L) && L.el[ze] && L.el[ze](),
            D(_, [I])
        },
        enter(I) {
            let _ = u
              , L = f
              , x = h;
            if (!n.isMounted)
                if (i)
                    _ = U || u,
                    L = W || f,
                    x = g || h;
                else
                    return;
            let V = !1;
            const se = I[nn] = le => {
                V || (V = !0,
                le ? D(x, [I]) : D(L, [I]),
                K.delayedLeave && K.delayedLeave(),
                I[nn] = void 0)
            }
            ;
            _ ? j(_, [I, se]) : se()
        },
        leave(I, _) {
            const L = String(e.key);
            if (I[nn] && I[nn](!0),
            n.isUnmounting)
                return _();
            D(y, [I]);
            let x = !1;
            const V = I[ze] = se => {
                x || (x = !0,
                _(),
                se ? D(O, [I]) : D(P, [I]),
                I[ze] = void 0,
                R[L] === e && delete R[L])
            }
            ;
            R[L] = e,
            b ? j(b, [I, V]) : V()
        },
        clone(I) {
            const _ = ps(I, t, n, s, r);
            return r && r(_),
            _
        }
    };
    return K
}
function Yn(e) {
    if (Nn(e))
        return e = nt(e),
        e.children = null,
        e
}
function Qs(e) {
    if (!Nn(e))
        return pi(e.type) && e.children ? yi(e.children) : e;
    const {shapeFlag: t, children: n} = e;
    if (n) {
        if (t & 16)
            return n[0];
        if (t & 32 && q(n.default))
            return n.default()
    }
}
function kt(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t,
    kt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function _i(e, t=!1, n) {
    let s = []
      , r = 0;
    for (let i = 0; i < e.length; i++) {
        let o = e[i];
        const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
        o.type === xe ? (o.patchFlag & 128 && r++,
        s = s.concat(_i(o.children, t, l))) : (t || o.type !== ye) && s.push(l != null ? nt(o, {
            key: l
        }) : o)
    }
    if (r > 1)
        for (let i = 0; i < s.length; i++)
            s[i].patchFlag = -2;
    return s
}
/*! #__NO_SIDE_EFFECTS__ */
function bi(e, t) {
    return q(e) ? oe({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
function wi(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
function wn(e, t, n, s, r=!1) {
    if (B(e)) {
        e.forEach( (P, O) => wn(P, t && (B(t) ? t[O] : t), n, s, r));
        return
    }
    if (pt(s) && !r)
        return;
    const i = s.shapeFlag & 4 ? Vs(s.component) : s.el
      , o = r ? null : i
      , {i: l, r: c} = e
      , u = t && t.r
      , f = l.refs === te ? l.refs = {} : l.refs
      , h = l.setupState
      , y = J(h)
      , b = h === te ? () => !1 : P => z(y, P);
    if (u != null && u !== c && (re(u) ? (f[u] = null,
    b(u) && (h[u] = null)) : ce(u) && (u.value = null)),
    q(c))
        Xt(c, l, 12, [o, f]);
    else {
        const P = re(c)
          , O = ce(c);
        if (P || O) {
            const G = () => {
                if (e.f) {
                    const U = P ? b(c) ? h[c] : f[c] : c.value;
                    r ? B(U) && Ts(U, i) : B(U) ? U.includes(i) || U.push(i) : P ? (f[c] = [i],
                    b(c) && (h[c] = f[c])) : (c.value = [i],
                    e.k && (f[e.k] = c.value))
                } else
                    P ? (f[c] = o,
                    b(c) && (h[c] = o)) : O && (c.value = o,
                    e.k && (f[e.k] = o))
            }
            ;
            o ? (G.id = -1,
            Te(G, n)) : G()
        }
    }
}
let Zs = !1;
const bt = () => {
    Zs || (console.error("Hydration completed but contains mismatches."),
    Zs = !0)
}
  , xl = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject"
  , Sl = e => e.namespaceURI.includes("MathML")
  , sn = e => {
    if (e.nodeType === 1) {
        if (xl(e))
            return "svg";
        if (Sl(e))
            return "mathml"
    }
}
  , rn = e => e.nodeType === 8;
function Cl(e) {
    const {mt: t, p: n, o: {patchProp: s, createText: r, nextSibling: i, parentNode: o, remove: l, insert: c, createComment: u}} = e
      , f = (g, p) => {
        if (!p.hasChildNodes()) {
            n(null, g, p),
            _n(),
            p._vnode = g;
            return
        }
        h(p.firstChild, g, null, null, null),
        _n(),
        p._vnode = g
    }
      , h = (g, p, R, D, j, K=!1) => {
        K = K || !!p.dynamicChildren;
        const I = rn(g) && g.data === "["
          , _ = () => O(g, p, R, D, j, I)
          , {type: L, ref: x, shapeFlag: V, patchFlag: se} = p;
        let le = g.nodeType;
        p.el = g,
        se === -2 && (K = !1,
        p.dynamicChildren = null);
        let H = null;
        switch (L) {
        case gt:
            le !== 3 ? p.children === "" ? (c(p.el = r(""), o(g), g),
            H = g) : H = _() : (g.data !== p.children && (bt(),
            g.data = p.children),
            H = i(g));
            break;
        case ye:
            W(g) ? (H = i(g),
            U(p.el = g.content.firstChild, g, R)) : le !== 8 || I ? H = _() : H = i(g);
            break;
        case Dt:
            if (I && (g = i(g),
            le = g.nodeType),
            le === 1 || le === 3) {
                H = g;
                const Y = !p.children.length;
                for (let F = 0; F < p.staticCount; F++)
                    Y && (p.children += H.nodeType === 1 ? H.outerHTML : H.data),
                    F === p.staticCount - 1 && (p.anchor = H),
                    H = i(H);
                return I ? i(H) : H
            } else
                _();
            break;
        case xe:
            I ? H = P(g, p, R, D, j, K) : H = _();
            break;
        default:
            if (V & 1)
                (le !== 1 || p.type.toLowerCase() !== g.tagName.toLowerCase()) && !W(g) ? H = _() : H = y(g, p, R, D, j, K);
            else if (V & 6) {
                p.slotScopeIds = j;
                const Y = o(g);
                if (I ? H = G(g) : rn(g) && g.data === "teleport start" ? H = G(g, g.data, "teleport end") : H = i(g),
                t(p, Y, null, R, D, sn(Y), K),
                pt(p)) {
                    let F;
                    I ? (F = de(xe),
                    F.anchor = H ? H.previousSibling : Y.lastChild) : F = g.nodeType === 3 ? Ji("") : de("div"),
                    F.el = g,
                    p.component.subTree = F
                }
            } else
                V & 64 ? le !== 8 ? H = _() : H = p.type.hydrate(g, p, R, D, j, K, e, b) : V & 128 && (H = p.type.hydrate(g, p, R, D, sn(o(g)), j, K, e, h))
        }
        return x != null && wn(x, null, D, p),
        H
    }
      , y = (g, p, R, D, j, K) => {
        K = K || !!p.dynamicChildren;
        const {type: I, props: _, patchFlag: L, shapeFlag: x, dirs: V, transition: se} = p
          , le = I === "input" || I === "option";
        if (le || L !== -1) {
            V && Ve(p, null, R, "created");
            let H = !1;
            if (W(g)) {
                H = ji(null, se) && R && R.vnode.props && R.vnode.props.appear;
                const F = g.content.firstChild;
                H && se.beforeEnter(F),
                U(F, g, R),
                p.el = g = F
            }
            if (x & 16 && !(_ && (_.innerHTML || _.textContent))) {
                let F = b(g.firstChild, p, g, R, D, j, K);
                for (; F; ) {
                    on(g, 1) || bt();
                    const ae = F;
                    F = F.nextSibling,
                    l(ae)
                }
            } else if (x & 8) {
                let F = p.children;
                F[0] === `
` && (g.tagName === "PRE" || g.tagName === "TEXTAREA") && (F = F.slice(1)),
                g.textContent !== F && (on(g, 0) || bt(),
                g.textContent = p.children)
            }
            if (_) {
                if (le || !K || L & 48) {
                    const F = g.tagName.includes("-");
                    for (const ae in _)
                        (le && (ae.endsWith("value") || ae === "indeterminate") || Yt(ae) && !Ct(ae) || ae[0] === "." || F) && s(g, ae, null, _[ae], void 0, R)
                } else if (_.onClick)
                    s(g, "onClick", null, _.onClick, void 0, R);
                else if (L & 4 && ht(_.style))
                    for (const F in _.style)
                        _.style[F]
            }
            let Y;
            (Y = _ && _.onVnodeBeforeMount) && Oe(Y, R, p),
            V && Ve(p, null, R, "beforeMount"),
            ((Y = _ && _.onVnodeMounted) || V || H) && qi( () => {
                Y && Oe(Y, R, p),
                H && se.enter(g),
                V && Ve(p, null, R, "mounted")
            }
            , D)
        }
        return g.nextSibling
    }
      , b = (g, p, R, D, j, K, I) => {
        I = I || !!p.dynamicChildren;
        const _ = p.children
          , L = _.length;
        for (let x = 0; x < L; x++) {
            const V = I ? _[x] : _[x] = Me(_[x])
              , se = V.type === gt;
            g ? (se && !I && x + 1 < L && Me(_[x + 1]).type === gt && (c(r(g.data.slice(V.children.length)), R, i(g)),
            g.data = V.children),
            g = h(g, V, D, j, K, I)) : se && !V.children ? c(V.el = r(""), R) : (on(R, 1) || bt(),
            n(null, V, R, null, D, j, sn(R), K))
        }
        return g
    }
      , P = (g, p, R, D, j, K) => {
        const {slotScopeIds: I} = p;
        I && (j = j ? j.concat(I) : I);
        const _ = o(g)
          , L = b(i(g), p, _, R, D, j, K);
        return L && rn(L) && L.data === "]" ? i(p.anchor = L) : (bt(),
        c(p.anchor = u("]"), _, L),
        L)
    }
      , O = (g, p, R, D, j, K) => {
        if (on(g.parentElement, 1) || bt(),
        p.el = null,
        K) {
            const L = G(g);
            for (; ; ) {
                const x = i(g);
                if (x && x !== L)
                    l(x);
                else
                    break
            }
        }
        const I = i(g)
          , _ = o(g);
        return l(g),
        n(null, p, _, I, R, D, sn(_), j),
        I
    }
      , G = (g, p="[", R="]") => {
        let D = 0;
        for (; g; )
            if (g = i(g),
            g && rn(g) && (g.data === p && D++,
            g.data === R)) {
                if (D === 0)
                    return i(g);
                D--
            }
        return g
    }
      , U = (g, p, R) => {
        const D = p.parentNode;
        D && D.replaceChild(g, p);
        let j = R;
        for (; j; )
            j.vnode.el === p && (j.vnode.el = j.subTree.el = g),
            j = j.parent
    }
      , W = g => g.nodeType === 1 && g.tagName === "TEMPLATE";
    return [f, h]
}
const er = "data-allow-mismatch"
  , El = {
    0: "text",
    1: "children",
    2: "class",
    3: "style",
    4: "attribute"
};
function on(e, t) {
    if (t === 0 || t === 1)
        for (; e && !e.hasAttribute(er); )
            e = e.parentElement;
    const n = e && e.getAttribute(er);
    if (n == null)
        return !1;
    if (n === "")
        return !0;
    {
        const s = n.split(",");
        return t === 0 && s.includes("children") ? !0 : n.split(",").includes(El[t])
    }
}
An().requestIdleCallback;
An().cancelIdleCallback;
const pt = e => !!e.type.__asyncLoader
  , Nn = e => e.type.__isKeepAlive;
function Tl(e, t) {
    xi(e, "a", t)
}
function Al(e, t) {
    xi(e, "da", t)
}
function xi(e, t, n=fe) {
    const s = e.__wdc || (e.__wdc = () => {
        let r = n;
        for (; r; ) {
            if (r.isDeactivated)
                return;
            r = r.parent
        }
        return e()
    }
    );
    if (Fn(t, s, n),
    n) {
        let r = n.parent;
        for (; r && r.parent; )
            Nn(r.parent.vnode) && Rl(s, t, n, r),
            r = r.parent
    }
}
function Rl(e, t, n, s) {
    const r = Fn(t, e, s, !0);
    Hn( () => {
        Ts(s[t], r)
    }
    , n)
}
function Fn(e, t, n=fe, s=!1) {
    if (n) {
        const r = n[e] || (n[e] = [])
          , i = t.__weh || (t.__weh = (...o) => {
            rt();
            const l = Jt(n)
              , c = He(t, n, e, o);
            return l(),
            it(),
            c
        }
        );
        return s ? r.unshift(i) : r.push(i),
        i
    }
}
const Ge = e => (t, n=fe) => {
    (!qt || e === "sp") && Fn(e, (...s) => t(...s), n)
}
  , Ol = Ge("bm")
  , Ot = Ge("m")
  , Ml = Ge("bu")
  , Il = Ge("u")
  , Si = Ge("bum")
  , Hn = Ge("um")
  , Pl = Ge("sp")
  , Ll = Ge("rtg")
  , Nl = Ge("rtc");
function Fl(e, t=fe) {
    Fn("ec", e, t)
}
const Ci = "components";
function Ja(e, t) {
    return Ti(Ci, e, !0, t) || e
}
const Ei = Symbol.for("v-ndc");
function za(e) {
    return re(e) ? Ti(Ci, e, !1) || e : e || Ei
}
function Ti(e, t, n=!0, s=!1) {
    const r = ve || fe;
    if (r) {
        const i = r.type;
        {
            const l = bc(i, !1);
            if (l && (l === t || l === Pe(t) || l === Tn(Pe(t))))
                return i
        }
        const o = tr(r[e] || i[e], t) || tr(r.appContext[e], t);
        return !o && s ? i : o
    }
}
function tr(e, t) {
    return e && (e[t] || e[Pe(t)] || e[Tn(Pe(t))])
}
function Qa(e, t, n, s) {
    let r;
    const i = n
      , o = B(e);
    if (o || re(e)) {
        const l = o && ht(e);
        let c = !1;
        l && (c = !Ie(e),
        e = On(e)),
        r = new Array(e.length);
        for (let u = 0, f = e.length; u < f; u++)
            r[u] = t(c ? me(e[u]) : e[u], u, void 0, i)
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let l = 0; l < e; l++)
            r[l] = t(l + 1, l, void 0, i)
    } else if (ne(e))
        if (e[Symbol.iterator])
            r = Array.from(e, (l, c) => t(l, c, void 0, i));
        else {
            const l = Object.keys(e);
            r = new Array(l.length);
            for (let c = 0, u = l.length; c < u; c++) {
                const f = l[c];
                r[c] = t(e[f], f, c, i)
            }
        }
    else
        r = [];
    return r
}
function Za(e, t, n={}, s, r) {
    if (ve.ce || ve.parent && pt(ve.parent) && ve.parent.ce)
        return t !== "default" && (n.name = t),
        _s(),
        bs(xe, null, [de("slot", n, s && s())], 64);
    let i = e[t];
    i && i._c && (i._d = !1),
    _s();
    const o = i && Ai(i(n))
      , l = n.key || o && o.key
      , c = bs(xe, {
        key: (l && !qe(l) ? l : `_${t}`) + (!o && s ? "_fb" : "")
    }, o || (s ? s() : []), o && e._ === 1 ? 64 : -2);
    return !r && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    c
}
function Ai(e) {
    return e.some(t => Kt(t) ? !(t.type === ye || t.type === xe && !Ai(t.children)) : !0) ? e : null
}
function ef(e, t) {
    const n = {};
    for (const s in e)
        n[/[A-Z]/.test(s) ? `on:${s}` : un(s)] = e[s];
    return n
}
const gs = e => e ? zi(e) ? Vs(e) : gs(e.parent) : null
  , $t = oe(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => gs(e.parent),
    $root: e => gs(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => $s(e),
    $forceUpdate: e => e.f || (e.f = () => {
        Hs(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = Ln.bind(e.proxy)),
    $watch: e => sc.bind(e)
})
  , Xn = (e, t) => e !== te && !e.__isScriptSetup && z(e, t)
  , Hl = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: c} = e;
        let u;
        if (t[0] !== "$") {
            const b = o[t];
            if (b !== void 0)
                switch (b) {
                case 1:
                    return s[t];
                case 2:
                    return r[t];
                case 4:
                    return n[t];
                case 3:
                    return i[t]
                }
            else {
                if (Xn(s, t))
                    return o[t] = 1,
                    s[t];
                if (r !== te && z(r, t))
                    return o[t] = 2,
                    r[t];
                if ((u = e.propsOptions[0]) && z(u, t))
                    return o[t] = 3,
                    i[t];
                if (n !== te && z(n, t))
                    return o[t] = 4,
                    n[t];
                ms && (o[t] = 0)
            }
        }
        const f = $t[t];
        let h, y;
        if (f)
            return t === "$attrs" && ge(e.attrs, "get", ""),
            f(e);
        if ((h = l.__cssModules) && (h = h[t]))
            return h;
        if (n !== te && z(n, t))
            return o[t] = 4,
            n[t];
        if (y = c.config.globalProperties,
        z(y, t))
            return y[t]
    },
    set({_: e}, t, n) {
        const {data: s, setupState: r, ctx: i} = e;
        return Xn(r, t) ? (r[t] = n,
        !0) : s !== te && z(s, t) ? (s[t] = n,
        !0) : z(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (i[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i}}, o) {
        let l;
        return !!n[o] || e !== te && z(e, o) || Xn(t, o) || (l = i[0]) && z(l, o) || z(s, o) || z($t, o) || z(r.config.globalProperties, o)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : z(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function tf() {
    return $l().slots
}
function $l() {
    const e = jn();
    return e.setupContext || (e.setupContext = Zi(e))
}
function nr(e) {
    return B(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
let ms = !0;
function Dl(e) {
    const t = $s(e)
      , n = e.proxy
      , s = e.ctx;
    ms = !1,
    t.beforeCreate && sr(t.beforeCreate, e, "bc");
    const {data: r, computed: i, methods: o, watch: l, provide: c, inject: u, created: f, beforeMount: h, mounted: y, beforeUpdate: b, updated: P, activated: O, deactivated: G, beforeDestroy: U, beforeUnmount: W, destroyed: g, unmounted: p, render: R, renderTracked: D, renderTriggered: j, errorCaptured: K, serverPrefetch: I, expose: _, inheritAttrs: L, components: x, directives: V, filters: se} = t;
    if (u && jl(u, s, null),
    o)
        for (const Y in o) {
            const F = o[Y];
            q(F) && (s[Y] = F.bind(n))
        }
    if (r) {
        const Y = r.call(n, n);
        ne(Y) && (e.data = Mn(Y))
    }
    if (ms = !0,
    i)
        for (const Y in i) {
            const F = i[Y]
              , ae = q(F) ? F.bind(n, n) : q(F.get) ? F.get.bind(n, n) : Ue
              , zt = !q(F) && q(F.set) ? F.set.bind(n) : Ue
              , ot = ie({
                get: ae,
                set: zt
            });
            Object.defineProperty(s, Y, {
                enumerable: !0,
                configurable: !0,
                get: () => ot.value,
                set: $e => ot.value = $e
            })
        }
    if (l)
        for (const Y in l)
            Ri(l[Y], s, n, Y);
    if (c) {
        const Y = q(c) ? c.call(n) : c;
        Reflect.ownKeys(Y).forEach(F => {
            Kl(F, Y[F])
        }
        )
    }
    f && sr(f, e, "c");
    function H(Y, F) {
        B(F) ? F.forEach(ae => Y(ae.bind(n))) : F && Y(F.bind(n))
    }
    if (H(Ol, h),
    H(Ot, y),
    H(Ml, b),
    H(Il, P),
    H(Tl, O),
    H(Al, G),
    H(Fl, K),
    H(Nl, D),
    H(Ll, j),
    H(Si, W),
    H(Hn, p),
    H(Pl, I),
    B(_))
        if (_.length) {
            const Y = e.exposed || (e.exposed = {});
            _.forEach(F => {
                Object.defineProperty(Y, F, {
                    get: () => n[F],
                    set: ae => n[F] = ae
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    R && e.render === Ue && (e.render = R),
    L != null && (e.inheritAttrs = L),
    x && (e.components = x),
    V && (e.directives = V),
    I && wi(e)
}
function jl(e, t, n=Ue) {
    B(e) && (e = ys(e));
    for (const s in e) {
        const r = e[s];
        let i;
        ne(r) ? "default"in r ? i = At(r.from || s, r.default, !0) : i = At(r.from || s) : i = At(r),
        ce(i) ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: o => i.value = o
        }) : t[s] = i
    }
}
function sr(e, t, n) {
    He(B(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Ri(e, t, n, s) {
    let r = s.includes(".") ? ki(n, s) : () => n[s];
    if (re(e)) {
        const i = t[e];
        q(i) && Fe(r, i)
    } else if (q(e))
        Fe(r, e.bind(n));
    else if (ne(e))
        if (B(e))
            e.forEach(i => Ri(i, t, n, s));
        else {
            const i = q(e.handler) ? e.handler.bind(n) : t[e.handler];
            q(i) && Fe(r, i, e)
        }
}
function $s(e) {
    const t = e.type
      , {mixins: n, extends: s} = t
      , {mixins: r, optionsCache: i, config: {optionMergeStrategies: o}} = e.appContext
      , l = i.get(t);
    let c;
    return l ? c = l : !r.length && !n && !s ? c = t : (c = {},
    r.length && r.forEach(u => xn(c, u, o, !0)),
    xn(c, t, o)),
    ne(t) && i.set(t, c),
    c
}
function xn(e, t, n, s=!1) {
    const {mixins: r, extends: i} = t;
    i && xn(e, i, n, !0),
    r && r.forEach(o => xn(e, o, n, !0));
    for (const o in t)
        if (!(s && o === "expose")) {
            const l = Vl[o] || n && n[o];
            e[o] = l ? l(e[o], t[o]) : t[o]
        }
    return e
}
const Vl = {
    data: rr,
    props: ir,
    emits: ir,
    methods: Nt,
    computed: Nt,
    beforeCreate: _e,
    created: _e,
    beforeMount: _e,
    mounted: _e,
    beforeUpdate: _e,
    updated: _e,
    beforeDestroy: _e,
    beforeUnmount: _e,
    destroyed: _e,
    unmounted: _e,
    activated: _e,
    deactivated: _e,
    errorCaptured: _e,
    serverPrefetch: _e,
    components: Nt,
    directives: Nt,
    watch: Bl,
    provide: rr,
    inject: Ul
};
function rr(e, t) {
    return t ? e ? function() {
        return oe(q(e) ? e.call(this, this) : e, q(t) ? t.call(this, this) : t)
    }
    : t : e
}
function Ul(e, t) {
    return Nt(ys(e), ys(t))
}
function ys(e) {
    if (B(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function _e(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Nt(e, t) {
    return e ? oe(Object.create(null), e, t) : t
}
function ir(e, t) {
    return e ? B(e) && B(t) ? [...new Set([...e, ...t])] : oe(Object.create(null), nr(e), nr(t ?? {})) : t
}
function Bl(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = oe(Object.create(null), e);
    for (const s in t)
        n[s] = _e(e[s], t[s]);
    return n
}
function Oi() {
    return {
        app: null,
        config: {
            isNativeTag: bo,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let kl = 0;
function Wl(e, t) {
    return function(s, r=null) {
        q(s) || (s = oe({}, s)),
        r != null && !ne(r) && (r = null);
        const i = Oi()
          , o = new WeakSet
          , l = [];
        let c = !1;
        const u = i.app = {
            _uid: kl++,
            _component: s,
            _props: r,
            _container: null,
            _context: i,
            _instance: null,
            version: xc,
            get config() {
                return i.config
            },
            set config(f) {},
            use(f, ...h) {
                return o.has(f) || (f && q(f.install) ? (o.add(f),
                f.install(u, ...h)) : q(f) && (o.add(f),
                f(u, ...h))),
                u
            },
            mixin(f) {
                return i.mixins.includes(f) || i.mixins.push(f),
                u
            },
            component(f, h) {
                return h ? (i.components[f] = h,
                u) : i.components[f]
            },
            directive(f, h) {
                return h ? (i.directives[f] = h,
                u) : i.directives[f]
            },
            mount(f, h, y) {
                if (!c) {
                    const b = u._ceVNode || de(s, r);
                    return b.appContext = i,
                    y === !0 ? y = "svg" : y === !1 && (y = void 0),
                    h && t ? t(b, f) : e(b, f, y),
                    c = !0,
                    u._container = f,
                    f.__vue_app__ = u,
                    Vs(b.component)
                }
            },
            onUnmount(f) {
                l.push(f)
            },
            unmount() {
                c && (He(l, u._instance, 16),
                e(null, u._container),
                delete u._container.__vue_app__)
            },
            provide(f, h) {
                return i.provides[f] = h,
                u
            },
            runWithContext(f) {
                const h = Tt;
                Tt = u;
                try {
                    return f()
                } finally {
                    Tt = h
                }
            }
        };
        return u
    }
}
let Tt = null;
function Kl(e, t) {
    if (fe) {
        let n = fe.provides;
        const s = fe.parent && fe.parent.provides;
        s === n && (n = fe.provides = Object.create(s)),
        n[e] = t
    }
}
function At(e, t, n=!1) {
    const s = fe || ve;
    if (s || Tt) {
        const r = Tt ? Tt._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
        if (r && e in r)
            return r[e];
        if (arguments.length > 1)
            return n && q(t) ? t.call(s && s.proxy) : t
    }
}
const Mi = {}
  , Ii = () => Object.create(Mi)
  , Pi = e => Object.getPrototypeOf(e) === Mi;
function ql(e, t, n, s=!1) {
    const r = {}
      , i = Ii();
    e.propsDefaults = Object.create(null),
    Li(e, t, r, i);
    for (const o in e.propsOptions[0])
        o in r || (r[o] = void 0);
    n ? e.props = s ? r : tl(r) : e.type.props ? e.props = r : e.props = i,
    e.attrs = i
}
function Gl(e, t, n, s) {
    const {props: r, attrs: i, vnode: {patchFlag: o}} = e
      , l = J(r)
      , [c] = e.propsOptions;
    let u = !1;
    if ((s || o > 0) && !(o & 16)) {
        if (o & 8) {
            const f = e.vnode.dynamicProps;
            for (let h = 0; h < f.length; h++) {
                let y = f[h];
                if (Dn(e.emitsOptions, y))
                    continue;
                const b = t[y];
                if (c)
                    if (z(i, y))
                        b !== i[y] && (i[y] = b,
                        u = !0);
                    else {
                        const P = Pe(y);
                        r[P] = vs(c, l, P, b, e, !1)
                    }
                else
                    b !== i[y] && (i[y] = b,
                    u = !0)
            }
        }
    } else {
        Li(e, t, r, i) && (u = !0);
        let f;
        for (const h in l)
            (!t || !z(t, h) && ((f = st(h)) === h || !z(t, f))) && (c ? n && (n[h] !== void 0 || n[f] !== void 0) && (r[h] = vs(c, l, h, void 0, e, !0)) : delete r[h]);
        if (i !== l)
            for (const h in i)
                (!t || !z(t, h)) && (delete i[h],
                u = !0)
    }
    u && We(e.attrs, "set", "")
}
function Li(e, t, n, s) {
    const [r,i] = e.propsOptions;
    let o = !1, l;
    if (t)
        for (let c in t) {
            if (Ct(c))
                continue;
            const u = t[c];
            let f;
            r && z(r, f = Pe(c)) ? !i || !i.includes(f) ? n[f] = u : (l || (l = {}))[f] = u : Dn(e.emitsOptions, c) || (!(c in s) || u !== s[c]) && (s[c] = u,
            o = !0)
        }
    if (i) {
        const c = J(n)
          , u = l || te;
        for (let f = 0; f < i.length; f++) {
            const h = i[f];
            n[h] = vs(r, c, h, u[h], e, !z(u, h))
        }
    }
    return o
}
function vs(e, t, n, s, r, i) {
    const o = e[n];
    if (o != null) {
        const l = z(o, "default");
        if (l && s === void 0) {
            const c = o.default;
            if (o.type !== Function && !o.skipFactory && q(c)) {
                const {propsDefaults: u} = r;
                if (n in u)
                    s = u[n];
                else {
                    const f = Jt(r);
                    s = u[n] = c.call(null, t),
                    f()
                }
            } else
                s = c;
            r.ce && r.ce._setProp(n, s)
        }
        o[0] && (i && !l ? s = !1 : o[1] && (s === "" || s === st(n)) && (s = !0))
    }
    return s
}
const Yl = new WeakMap;
function Ni(e, t, n=!1) {
    const s = n ? Yl : t.propsCache
      , r = s.get(e);
    if (r)
        return r;
    const i = e.props
      , o = {}
      , l = [];
    let c = !1;
    if (!q(e)) {
        const f = h => {
            c = !0;
            const [y,b] = Ni(h, t, !0);
            oe(o, y),
            b && l.push(...b)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(f),
        e.extends && f(e.extends),
        e.mixins && e.mixins.forEach(f)
    }
    if (!i && !c)
        return ne(e) && s.set(e, xt),
        xt;
    if (B(i))
        for (let f = 0; f < i.length; f++) {
            const h = Pe(i[f]);
            or(h) && (o[h] = te)
        }
    else if (i)
        for (const f in i) {
            const h = Pe(f);
            if (or(h)) {
                const y = i[f]
                  , b = o[h] = B(y) || q(y) ? {
                    type: y
                } : oe({}, y)
                  , P = b.type;
                let O = !1
                  , G = !0;
                if (B(P))
                    for (let U = 0; U < P.length; ++U) {
                        const W = P[U]
                          , g = q(W) && W.name;
                        if (g === "Boolean") {
                            O = !0;
                            break
                        } else
                            g === "String" && (G = !1)
                    }
                else
                    O = q(P) && P.name === "Boolean";
                b[0] = O,
                b[1] = G,
                (O || z(b, "default")) && l.push(h)
            }
        }
    const u = [o, l];
    return ne(e) && s.set(e, u),
    u
}
function or(e) {
    return e[0] !== "$" && !Ct(e)
}
const Fi = e => e[0] === "_" || e === "$stable"
  , Ds = e => B(e) ? e.map(Me) : [Me(e)]
  , Xl = (e, t, n) => {
    if (t._n)
        return t;
    const s = yl( (...r) => Ds(t(...r)), n);
    return s._c = !1,
    s
}
  , Hi = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
        if (Fi(r))
            continue;
        const i = e[r];
        if (q(i))
            t[r] = Xl(r, i, s);
        else if (i != null) {
            const o = Ds(i);
            t[r] = () => o
        }
    }
}
  , $i = (e, t) => {
    const n = Ds(t);
    e.slots.default = () => n
}
  , Di = (e, t, n) => {
    for (const s in t)
        (n || s !== "_") && (e[s] = t[s])
}
  , Jl = (e, t, n) => {
    const s = e.slots = Ii();
    if (e.vnode.shapeFlag & 32) {
        const r = t._;
        r ? (Di(s, t, n),
        n && Ur(s, "_", r, !0)) : Hi(t, s)
    } else
        t && $i(e, t)
}
  , zl = (e, t, n) => {
    const {vnode: s, slots: r} = e;
    let i = !0
      , o = te;
    if (s.shapeFlag & 32) {
        const l = t._;
        l ? n && l === 1 ? i = !1 : Di(r, t, n) : (i = !t.$stable,
        Hi(t, r)),
        o = t
    } else
        t && ($i(e, t),
        o = {
            default: 1
        });
    if (i)
        for (const l in r)
            !Fi(l) && o[l] == null && delete r[l]
}
  , Te = qi;
function Ql(e) {
    return Zl(e, Cl)
}
function Zl(e, t) {
    const n = An();
    n.__VUE__ = !0;
    const {insert: s, remove: r, patchProp: i, createElement: o, createText: l, createComment: c, setText: u, setElementText: f, parentNode: h, nextSibling: y, setScopeId: b=Ue, insertStaticContent: P} = e
      , O = (a, d, m, S=null, v=null, w=null, A=void 0, T=null, E=!!d.dynamicChildren) => {
        if (a === d)
            return;
        a && !ut(a, d) && (S = Qt(a),
        $e(a, v, w, !0),
        a = null),
        d.patchFlag === -2 && (E = !1,
        d.dynamicChildren = null);
        const {type: C, ref: $, shapeFlag: M} = d;
        switch (C) {
        case gt:
            G(a, d, m, S);
            break;
        case ye:
            U(a, d, m, S);
            break;
        case Dt:
            a == null && W(d, m, S, A);
            break;
        case xe:
            x(a, d, m, S, v, w, A, T, E);
            break;
        default:
            M & 1 ? R(a, d, m, S, v, w, A, T, E) : M & 6 ? V(a, d, m, S, v, w, A, T, E) : (M & 64 || M & 128) && C.process(a, d, m, S, v, w, A, T, E, vt)
        }
        $ != null && v && wn($, a && a.ref, w, d || a, !d)
    }
      , G = (a, d, m, S) => {
        if (a == null)
            s(d.el = l(d.children), m, S);
        else {
            const v = d.el = a.el;
            d.children !== a.children && u(v, d.children)
        }
    }
      , U = (a, d, m, S) => {
        a == null ? s(d.el = c(d.children || ""), m, S) : d.el = a.el
    }
      , W = (a, d, m, S) => {
        [a.el,a.anchor] = P(a.children, d, m, S, a.el, a.anchor)
    }
      , g = ({el: a, anchor: d}, m, S) => {
        let v;
        for (; a && a !== d; )
            v = y(a),
            s(a, m, S),
            a = v;
        s(d, m, S)
    }
      , p = ({el: a, anchor: d}) => {
        let m;
        for (; a && a !== d; )
            m = y(a),
            r(a),
            a = m;
        r(d)
    }
      , R = (a, d, m, S, v, w, A, T, E) => {
        d.type === "svg" ? A = "svg" : d.type === "math" && (A = "mathml"),
        a == null ? D(d, m, S, v, w, A, T, E) : I(a, d, v, w, A, T, E)
    }
      , D = (a, d, m, S, v, w, A, T) => {
        let E, C;
        const {props: $, shapeFlag: M, transition: N, dirs: k} = a;
        if (E = a.el = o(a.type, w, $ && $.is, $),
        M & 8 ? f(E, a.children) : M & 16 && K(a.children, E, null, S, v, Jn(a, w), A, T),
        k && Ve(a, null, S, "created"),
        j(E, a, a.scopeId, A, S),
        $) {
            for (const Z in $)
                Z !== "value" && !Ct(Z) && i(E, Z, null, $[Z], w, S);
            "value"in $ && i(E, "value", null, $.value, w),
            (C = $.onVnodeBeforeMount) && Oe(C, S, a)
        }
        k && Ve(a, null, S, "beforeMount");
        const X = ji(v, N);
        X && N.beforeEnter(E),
        s(E, d, m),
        ((C = $ && $.onVnodeMounted) || X || k) && Te( () => {
            C && Oe(C, S, a),
            X && N.enter(E),
            k && Ve(a, null, S, "mounted")
        }
        , v)
    }
      , j = (a, d, m, S, v) => {
        if (m && b(a, m),
        S)
            for (let w = 0; w < S.length; w++)
                b(a, S[w]);
        if (v) {
            let w = v.subTree;
            if (d === w || Ki(w.type) && (w.ssContent === d || w.ssFallback === d)) {
                const A = v.vnode;
                j(a, A, A.scopeId, A.slotScopeIds, v.parent)
            }
        }
    }
      , K = (a, d, m, S, v, w, A, T, E=0) => {
        for (let C = E; C < a.length; C++) {
            const $ = a[C] = T ? Qe(a[C]) : Me(a[C]);
            O(null, $, d, m, S, v, w, A, T)
        }
    }
      , I = (a, d, m, S, v, w, A) => {
        const T = d.el = a.el;
        let {patchFlag: E, dynamicChildren: C, dirs: $} = d;
        E |= a.patchFlag & 16;
        const M = a.props || te
          , N = d.props || te;
        let k;
        if (m && lt(m, !1),
        (k = N.onVnodeBeforeUpdate) && Oe(k, m, d, a),
        $ && Ve(d, a, m, "beforeUpdate"),
        m && lt(m, !0),
        (M.innerHTML && N.innerHTML == null || M.textContent && N.textContent == null) && f(T, ""),
        C ? _(a.dynamicChildren, C, T, m, S, Jn(d, v), w) : A || F(a, d, T, null, m, S, Jn(d, v), w, !1),
        E > 0) {
            if (E & 16)
                L(T, M, N, m, v);
            else if (E & 2 && M.class !== N.class && i(T, "class", null, N.class, v),
            E & 4 && i(T, "style", M.style, N.style, v),
            E & 8) {
                const X = d.dynamicProps;
                for (let Z = 0; Z < X.length; Z++) {
                    const Q = X[Z]
                      , Se = M[Q]
                      , he = N[Q];
                    (he !== Se || Q === "value") && i(T, Q, Se, he, v, m)
                }
            }
            E & 1 && a.children !== d.children && f(T, d.children)
        } else
            !A && C == null && L(T, M, N, m, v);
        ((k = N.onVnodeUpdated) || $) && Te( () => {
            k && Oe(k, m, d, a),
            $ && Ve(d, a, m, "updated")
        }
        , S)
    }
      , _ = (a, d, m, S, v, w, A) => {
        for (let T = 0; T < d.length; T++) {
            const E = a[T]
              , C = d[T]
              , $ = E.el && (E.type === xe || !ut(E, C) || E.shapeFlag & 70) ? h(E.el) : m;
            O(E, C, $, null, S, v, w, A, !0)
        }
    }
      , L = (a, d, m, S, v) => {
        if (d !== m) {
            if (d !== te)
                for (const w in d)
                    !Ct(w) && !(w in m) && i(a, w, d[w], null, v, S);
            for (const w in m) {
                if (Ct(w))
                    continue;
                const A = m[w]
                  , T = d[w];
                A !== T && w !== "value" && i(a, w, T, A, v, S)
            }
            "value"in m && i(a, "value", d.value, m.value, v)
        }
    }
      , x = (a, d, m, S, v, w, A, T, E) => {
        const C = d.el = a ? a.el : l("")
          , $ = d.anchor = a ? a.anchor : l("");
        let {patchFlag: M, dynamicChildren: N, slotScopeIds: k} = d;
        k && (T = T ? T.concat(k) : k),
        a == null ? (s(C, m, S),
        s($, m, S),
        K(d.children || [], m, $, v, w, A, T, E)) : M > 0 && M & 64 && N && a.dynamicChildren ? (_(a.dynamicChildren, N, m, v, w, A, T),
        (d.key != null || v && d === v.subTree) && Vi(a, d, !0)) : F(a, d, m, $, v, w, A, T, E)
    }
      , V = (a, d, m, S, v, w, A, T, E) => {
        d.slotScopeIds = T,
        a == null ? d.shapeFlag & 512 ? v.ctx.activate(d, m, S, A, E) : se(d, m, S, v, w, A, E) : le(a, d, E)
    }
      , se = (a, d, m, S, v, w, A) => {
        const T = a.component = mc(a, S, v);
        if (Nn(a) && (T.ctx.renderer = vt),
        yc(T, !1, A),
        T.asyncDep) {
            if (v && v.registerDep(T, H, A),
            !a.el) {
                const E = T.subTree = de(ye);
                U(null, E, d, m)
            }
        } else
            H(T, a, d, m, v, w, A)
    }
      , le = (a, d, m) => {
        const S = d.component = a.component;
        if (cc(a, d, m))
            if (S.asyncDep && !S.asyncResolved) {
                Y(S, d, m);
                return
            } else
                S.next = d,
                S.update();
        else
            d.el = a.el,
            S.vnode = d
    }
      , H = (a, d, m, S, v, w, A) => {
        const T = () => {
            if (a.isMounted) {
                let {next: M, bu: N, u: k, parent: X, vnode: Z} = a;
                {
                    const Ce = Ui(a);
                    if (Ce) {
                        M && (M.el = Z.el,
                        Y(a, M, A)),
                        Ce.asyncDep.then( () => {
                            a.isUnmounted || T()
                        }
                        );
                        return
                    }
                }
                let Q = M, Se;
                lt(a, !1),
                M ? (M.el = Z.el,
                Y(a, M, A)) : M = Z,
                N && kn(N),
                (Se = M.props && M.props.onVnodeBeforeUpdate) && Oe(Se, X, M, Z),
                lt(a, !0);
                const he = zn(a)
                  , Le = a.subTree;
                a.subTree = he,
                O(Le, he, h(Le.el), Qt(Le), a, v, w),
                M.el = he.el,
                Q === null && ac(a, he.el),
                k && Te(k, v),
                (Se = M.props && M.props.onVnodeUpdated) && Te( () => Oe(Se, X, M, Z), v)
            } else {
                let M;
                const {el: N, props: k} = d
                  , {bm: X, m: Z, parent: Q, root: Se, type: he} = a
                  , Le = pt(d);
                if (lt(a, !1),
                X && kn(X),
                !Le && (M = k && k.onVnodeBeforeMount) && Oe(M, Q, d),
                lt(a, !0),
                N && Bn) {
                    const Ce = () => {
                        a.subTree = zn(a),
                        Bn(N, a.subTree, a, v, null)
                    }
                    ;
                    Le && he.__asyncHydrate ? he.__asyncHydrate(N, a, Ce) : Ce()
                } else {
                    Se.ce && Se.ce._injectChildStyle(he);
                    const Ce = a.subTree = zn(a);
                    O(null, Ce, m, S, a, v, w),
                    d.el = Ce.el
                }
                if (Z && Te(Z, v),
                !Le && (M = k && k.onVnodeMounted)) {
                    const Ce = d;
                    Te( () => Oe(M, Q, Ce), v)
                }
                (d.shapeFlag & 256 || Q && pt(Q.vnode) && Q.vnode.shapeFlag & 256) && a.a && Te(a.a, v),
                a.isMounted = !0,
                d = m = S = null
            }
        }
        ;
        a.scope.on();
        const E = a.effect = new qr(T);
        a.scope.off();
        const C = a.update = E.run.bind(E)
          , $ = a.job = E.runIfDirty.bind(E);
        $.i = a,
        $.id = a.uid,
        E.scheduler = () => Hs($),
        lt(a, !0),
        C()
    }
      , Y = (a, d, m) => {
        d.component = a;
        const S = a.vnode.props;
        a.vnode = d,
        a.next = null,
        Gl(a, d.props, S, m),
        zl(a, d.children, m),
        rt(),
        zs(a),
        it()
    }
      , F = (a, d, m, S, v, w, A, T, E=!1) => {
        const C = a && a.children
          , $ = a ? a.shapeFlag : 0
          , M = d.children
          , {patchFlag: N, shapeFlag: k} = d;
        if (N > 0) {
            if (N & 128) {
                zt(C, M, m, S, v, w, A, T, E);
                return
            } else if (N & 256) {
                ae(C, M, m, S, v, w, A, T, E);
                return
            }
        }
        k & 8 ? ($ & 16 && Mt(C, v, w),
        M !== C && f(m, M)) : $ & 16 ? k & 16 ? zt(C, M, m, S, v, w, A, T, E) : Mt(C, v, w, !0) : ($ & 8 && f(m, ""),
        k & 16 && K(M, m, S, v, w, A, T, E))
    }
      , ae = (a, d, m, S, v, w, A, T, E) => {
        a = a || xt,
        d = d || xt;
        const C = a.length
          , $ = d.length
          , M = Math.min(C, $);
        let N;
        for (N = 0; N < M; N++) {
            const k = d[N] = E ? Qe(d[N]) : Me(d[N]);
            O(a[N], k, m, null, v, w, A, T, E)
        }
        C > $ ? Mt(a, v, w, !0, !1, M) : K(d, m, S, v, w, A, T, E, M)
    }
      , zt = (a, d, m, S, v, w, A, T, E) => {
        let C = 0;
        const $ = d.length;
        let M = a.length - 1
          , N = $ - 1;
        for (; C <= M && C <= N; ) {
            const k = a[C]
              , X = d[C] = E ? Qe(d[C]) : Me(d[C]);
            if (ut(k, X))
                O(k, X, m, null, v, w, A, T, E);
            else
                break;
            C++
        }
        for (; C <= M && C <= N; ) {
            const k = a[M]
              , X = d[N] = E ? Qe(d[N]) : Me(d[N]);
            if (ut(k, X))
                O(k, X, m, null, v, w, A, T, E);
            else
                break;
            M--,
            N--
        }
        if (C > M) {
            if (C <= N) {
                const k = N + 1
                  , X = k < $ ? d[k].el : S;
                for (; C <= N; )
                    O(null, d[C] = E ? Qe(d[C]) : Me(d[C]), m, X, v, w, A, T, E),
                    C++
            }
        } else if (C > N)
            for (; C <= M; )
                $e(a[C], v, w, !0),
                C++;
        else {
            const k = C
              , X = C
              , Z = new Map;
            for (C = X; C <= N; C++) {
                const Ee = d[C] = E ? Qe(d[C]) : Me(d[C]);
                Ee.key != null && Z.set(Ee.key, C)
            }
            let Q, Se = 0;
            const he = N - X + 1;
            let Le = !1
              , Ce = 0;
            const It = new Array(he);
            for (C = 0; C < he; C++)
                It[C] = 0;
            for (C = k; C <= M; C++) {
                const Ee = a[C];
                if (Se >= he) {
                    $e(Ee, v, w, !0);
                    continue
                }
                let De;
                if (Ee.key != null)
                    De = Z.get(Ee.key);
                else
                    for (Q = X; Q <= N; Q++)
                        if (It[Q - X] === 0 && ut(Ee, d[Q])) {
                            De = Q;
                            break
                        }
                De === void 0 ? $e(Ee, v, w, !0) : (It[De - X] = C + 1,
                De >= Ce ? Ce = De : Le = !0,
                O(Ee, d[De], m, null, v, w, A, T, E),
                Se++)
            }
            const qs = Le ? ec(It) : xt;
            for (Q = qs.length - 1,
            C = he - 1; C >= 0; C--) {
                const Ee = X + C
                  , De = d[Ee]
                  , Gs = Ee + 1 < $ ? d[Ee + 1].el : S;
                It[C] === 0 ? O(null, De, m, Gs, v, w, A, T, E) : Le && (Q < 0 || C !== qs[Q] ? ot(De, m, Gs, 2) : Q--)
            }
        }
    }
      , ot = (a, d, m, S, v=null) => {
        const {el: w, type: A, transition: T, children: E, shapeFlag: C} = a;
        if (C & 6) {
            ot(a.component.subTree, d, m, S);
            return
        }
        if (C & 128) {
            a.suspense.move(d, m, S);
            return
        }
        if (C & 64) {
            A.move(a, d, m, vt);
            return
        }
        if (A === xe) {
            s(w, d, m);
            for (let M = 0; M < E.length; M++)
                ot(E[M], d, m, S);
            s(a.anchor, d, m);
            return
        }
        if (A === Dt) {
            g(a, d, m);
            return
        }
        if (S !== 2 && C & 1 && T)
            if (S === 0)
                T.beforeEnter(w),
                s(w, d, m),
                Te( () => T.enter(w), v);
            else {
                const {leave: M, delayLeave: N, afterLeave: k} = T
                  , X = () => s(w, d, m)
                  , Z = () => {
                    M(w, () => {
                        X(),
                        k && k()
                    }
                    )
                }
                ;
                N ? N(w, X, Z) : Z()
            }
        else
            s(w, d, m)
    }
      , $e = (a, d, m, S=!1, v=!1) => {
        const {type: w, props: A, ref: T, children: E, dynamicChildren: C, shapeFlag: $, patchFlag: M, dirs: N, cacheIndex: k} = a;
        if (M === -2 && (v = !1),
        T != null && wn(T, null, m, a, !0),
        k != null && (d.renderCache[k] = void 0),
        $ & 256) {
            d.ctx.deactivate(a);
            return
        }
        const X = $ & 1 && N
          , Z = !pt(a);
        let Q;
        if (Z && (Q = A && A.onVnodeBeforeUnmount) && Oe(Q, d, a),
        $ & 6)
            _o(a.component, m, S);
        else {
            if ($ & 128) {
                a.suspense.unmount(m, S);
                return
            }
            X && Ve(a, null, d, "beforeUnmount"),
            $ & 64 ? a.type.remove(a, d, m, vt, S) : C && !C.hasOnce && (w !== xe || M > 0 && M & 64) ? Mt(C, d, m, !1, !0) : (w === xe && M & 384 || !v && $ & 16) && Mt(E, d, m),
            S && Ws(a)
        }
        (Z && (Q = A && A.onVnodeUnmounted) || X) && Te( () => {
            Q && Oe(Q, d, a),
            X && Ve(a, null, d, "unmounted")
        }
        , m)
    }
      , Ws = a => {
        const {type: d, el: m, anchor: S, transition: v} = a;
        if (d === xe) {
            vo(m, S);
            return
        }
        if (d === Dt) {
            p(a);
            return
        }
        const w = () => {
            r(m),
            v && !v.persisted && v.afterLeave && v.afterLeave()
        }
        ;
        if (a.shapeFlag & 1 && v && !v.persisted) {
            const {leave: A, delayLeave: T} = v
              , E = () => A(m, w);
            T ? T(a.el, w, E) : E()
        } else
            w()
    }
      , vo = (a, d) => {
        let m;
        for (; a !== d; )
            m = y(a),
            r(a),
            a = m;
        r(d)
    }
      , _o = (a, d, m) => {
        const {bum: S, scope: v, job: w, subTree: A, um: T, m: E, a: C} = a;
        lr(E),
        lr(C),
        S && kn(S),
        v.stop(),
        w && (w.flags |= 8,
        $e(A, a, d, m)),
        T && Te(T, d),
        Te( () => {
            a.isUnmounted = !0
        }
        , d),
        d && d.pendingBranch && !d.isUnmounted && a.asyncDep && !a.asyncResolved && a.suspenseId === d.pendingId && (d.deps--,
        d.deps === 0 && d.resolve())
    }
      , Mt = (a, d, m, S=!1, v=!1, w=0) => {
        for (let A = w; A < a.length; A++)
            $e(a[A], d, m, S, v)
    }
      , Qt = a => {
        if (a.shapeFlag & 6)
            return Qt(a.component.subTree);
        if (a.shapeFlag & 128)
            return a.suspense.next();
        const d = y(a.anchor || a.el)
          , m = d && d[vl];
        return m ? y(m) : d
    }
    ;
    let Vn = !1;
    const Ks = (a, d, m) => {
        a == null ? d._vnode && $e(d._vnode, null, null, !0) : O(d._vnode || null, a, d, null, null, null, m),
        d._vnode = a,
        Vn || (Vn = !0,
        zs(),
        _n(),
        Vn = !1)
    }
      , vt = {
        p: O,
        um: $e,
        m: ot,
        r: Ws,
        mt: se,
        mc: K,
        pc: F,
        pbc: _,
        n: Qt,
        o: e
    };
    let Un, Bn;
    return t && ([Un,Bn] = t(vt)),
    {
        render: Ks,
        hydrate: Un,
        createApp: Wl(Ks, Un)
    }
}
function Jn({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function lt({effect: e, job: t}, n) {
    n ? (e.flags |= 32,
    t.flags |= 4) : (e.flags &= -33,
    t.flags &= -5)
}
function ji(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function Vi(e, t, n=!1) {
    const s = e.children
      , r = t.children;
    if (B(s) && B(r))
        for (let i = 0; i < s.length; i++) {
            const o = s[i];
            let l = r[i];
            l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Qe(r[i]),
            l.el = o.el),
            !n && l.patchFlag !== -2 && Vi(o, l)),
            l.type === gt && (l.el = o.el)
        }
}
function ec(e) {
    const t = e.slice()
      , n = [0];
    let s, r, i, o, l;
    const c = e.length;
    for (s = 0; s < c; s++) {
        const u = e[s];
        if (u !== 0) {
            if (r = n[n.length - 1],
            e[r] < u) {
                t[s] = r,
                n.push(s);
                continue
            }
            for (i = 0,
            o = n.length - 1; i < o; )
                l = i + o >> 1,
                e[n[l]] < u ? i = l + 1 : o = l;
            u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]),
            n[i] = s)
        }
    }
    for (i = n.length,
    o = n[i - 1]; i-- > 0; )
        n[i] = o,
        o = t[o];
    return n
}
function Ui(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Ui(t)
}
function lr(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].flags |= 8
}
const tc = Symbol.for("v-scx")
  , nc = () => At(tc);
function Bi(e, t) {
    return $n(e, null, t)
}
function nf(e, t) {
    return $n(e, null, {
        flush: "post"
    })
}
function Fe(e, t, n) {
    return $n(e, t, n)
}
function $n(e, t, n=te) {
    const {immediate: s, deep: r, flush: i, once: o} = n
      , l = oe({}, n)
      , c = t && s || !t && i !== "post";
    let u;
    if (qt) {
        if (i === "sync") {
            const b = nc();
            u = b.__watcherHandles || (b.__watcherHandles = [])
        } else if (!c) {
            const b = () => {}
            ;
            return b.stop = Ue,
            b.resume = Ue,
            b.pause = Ue,
            b
        }
    }
    const f = fe;
    l.call = (b, P, O) => He(b, f, P, O);
    let h = !1;
    i === "post" ? l.scheduler = b => {
        Te(b, f && f.suspense)
    }
    : i !== "sync" && (h = !0,
    l.scheduler = (b, P) => {
        P ? b() : Hs(b)
    }
    ),
    l.augmentJob = b => {
        t && (b.flags |= 4),
        h && (b.flags |= 2,
        f && (b.id = f.uid,
        b.i = f))
    }
    ;
    const y = hl(e, t, l);
    return qt && (u ? u.push(y) : c && y()),
    y
}
function sc(e, t, n) {
    const s = this.proxy
      , r = re(e) ? e.includes(".") ? ki(s, e) : () => s[e] : e.bind(s, s);
    let i;
    q(t) ? i = t : (i = t.handler,
    n = t);
    const o = Jt(this)
      , l = $n(r, i.bind(s), n);
    return o(),
    l
}
function ki(e, t) {
    const n = t.split(".");
    return () => {
        let s = e;
        for (let r = 0; r < n.length && s; r++)
            s = s[n[r]];
        return s
    }
}
const rc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Pe(t)}Modifiers`] || e[`${st(t)}Modifiers`];
function ic(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const s = e.vnode.props || te;
    let r = n;
    const i = t.startsWith("update:")
      , o = i && rc(s, t.slice(7));
    o && (o.trim && (r = n.map(f => re(f) ? f.trim() : f)),
    o.number && (r = n.map(Eo)));
    let l, c = s[l = un(t)] || s[l = un(Pe(t))];
    !c && i && (c = s[l = un(st(t))]),
    c && He(c, e, 6, r);
    const u = s[l + "Once"];
    if (u) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[l])
            return;
        e.emitted[l] = !0,
        He(u, e, 6, r)
    }
}
function Wi(e, t, n=!1) {
    const s = t.emitsCache
      , r = s.get(e);
    if (r !== void 0)
        return r;
    const i = e.emits;
    let o = {}
      , l = !1;
    if (!q(e)) {
        const c = u => {
            const f = Wi(u, t, !0);
            f && (l = !0,
            oe(o, f))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    return !i && !l ? (ne(e) && s.set(e, null),
    null) : (B(i) ? i.forEach(c => o[c] = null) : oe(o, i),
    ne(e) && s.set(e, o),
    o)
}
function Dn(e, t) {
    return !e || !Yt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    z(e, t[0].toLowerCase() + t.slice(1)) || z(e, st(t)) || z(e, t))
}
function zn(e) {
    const {type: t, vnode: n, proxy: s, withProxy: r, propsOptions: [i], slots: o, attrs: l, emit: c, render: u, renderCache: f, props: h, data: y, setupState: b, ctx: P, inheritAttrs: O} = e
      , G = bn(e);
    let U, W;
    try {
        if (n.shapeFlag & 4) {
            const p = r || s
              , R = p;
            U = Me(u.call(R, p, f, h, b, y, P)),
            W = l
        } else {
            const p = t;
            U = Me(p.length > 1 ? p(h, {
                attrs: l,
                slots: o,
                emit: c
            }) : p(h, null)),
            W = t.props ? l : oc(l)
        }
    } catch (p) {
        jt.length = 0,
        Pn(p, e, 1),
        U = de(ye)
    }
    let g = U;
    if (W && O !== !1) {
        const p = Object.keys(W)
          , {shapeFlag: R} = g;
        p.length && R & 7 && (i && p.some(Es) && (W = lc(W, i)),
        g = nt(g, W, !1, !0))
    }
    return n.dirs && (g = nt(g, null, !1, !0),
    g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs),
    n.transition && kt(g, n.transition),
    U = g,
    bn(G),
    U
}
const oc = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Yt(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , lc = (e, t) => {
    const n = {};
    for (const s in e)
        (!Es(s) || !(s.slice(9)in t)) && (n[s] = e[s]);
    return n
}
;
function cc(e, t, n) {
    const {props: s, children: r, component: i} = e
      , {props: o, children: l, patchFlag: c} = t
      , u = i.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && c >= 0) {
        if (c & 1024)
            return !0;
        if (c & 16)
            return s ? cr(s, o, u) : !!o;
        if (c & 8) {
            const f = t.dynamicProps;
            for (let h = 0; h < f.length; h++) {
                const y = f[h];
                if (o[y] !== s[y] && !Dn(u, y))
                    return !0
            }
        }
    } else
        return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? cr(s, o, u) : !0 : !!o;
    return !1
}
function cr(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length)
        return !0;
    for (let r = 0; r < s.length; r++) {
        const i = s[r];
        if (t[i] !== e[i] && !Dn(n, i))
            return !0
    }
    return !1
}
function ac({vnode: e, parent: t}, n) {
    for (; t; ) {
        const s = t.subTree;
        if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el),
        s === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const Ki = e => e.__isSuspense;
function qi(e, t) {
    t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : ml(e)
}
const xe = Symbol.for("v-fgt")
  , gt = Symbol.for("v-txt")
  , ye = Symbol.for("v-cmt")
  , Dt = Symbol.for("v-stc")
  , jt = [];
let Ae = null;
function _s(e=!1) {
    jt.push(Ae = e ? null : [])
}
function fc() {
    jt.pop(),
    Ae = jt[jt.length - 1] || null
}
let Wt = 1;
function ar(e) {
    Wt += e,
    e < 0 && Ae && (Ae.hasOnce = !0)
}
function Gi(e) {
    return e.dynamicChildren = Wt > 0 ? Ae || xt : null,
    fc(),
    Wt > 0 && Ae && Ae.push(e),
    e
}
function sf(e, t, n, s, r, i) {
    return Gi(Xi(e, t, n, s, r, i, !0))
}
function bs(e, t, n, s, r) {
    return Gi(de(e, t, n, s, r, !0))
}
function Kt(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function ut(e, t) {
    return e.type === t.type && e.key === t.key
}
const Yi = ({key: e}) => e ?? null
  , hn = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? re(e) || ce(e) || q(e) ? {
    i: ve,
    r: e,
    k: t,
    f: !!n
} : e : null);
function Xi(e, t=null, n=null, s=0, r=null, i=e === xe ? 0 : 1, o=!1, l=!1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Yi(t),
        ref: t && hn(t),
        scopeId: hi,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: s,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: ve
    };
    return l ? (js(c, n),
    i & 128 && e.normalize(c)) : n && (c.shapeFlag |= re(n) ? 8 : 16),
    Wt > 0 && !o && Ae && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && Ae.push(c),
    c
}
const de = uc;
function uc(e, t=null, n=null, s=0, r=null, i=!1) {
    if ((!e || e === Ei) && (e = ye),
    Kt(e)) {
        const l = nt(e, t, !0);
        return n && js(l, n),
        Wt > 0 && !i && Ae && (l.shapeFlag & 6 ? Ae[Ae.indexOf(e)] = l : Ae.push(l)),
        l.patchFlag = -2,
        l
    }
    if (wc(e) && (e = e.__vccOpts),
    t) {
        t = dc(t);
        let {class: l, style: c} = t;
        l && !re(l) && (t.class = Os(l)),
        ne(c) && (Fs(c) && !B(c) && (c = oe({}, c)),
        t.style = Rs(c))
    }
    const o = re(e) ? 1 : Ki(e) ? 128 : pi(e) ? 64 : ne(e) ? 4 : q(e) ? 2 : 0;
    return Xi(e, t, n, s, r, o, i, !0)
}
function dc(e) {
    return e ? Fs(e) || Pi(e) ? oe({}, e) : e : null
}
function nt(e, t, n=!1, s=!1) {
    const {props: r, ref: i, patchFlag: o, children: l, transition: c} = e
      , u = t ? hc(r || {}, t) : r
      , f = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: u,
        key: u && Yi(u),
        ref: t && t.ref ? n && i ? B(i) ? i.concat(hn(t)) : [i, hn(t)] : hn(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== xe ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: c,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && nt(e.ssContent),
        ssFallback: e.ssFallback && nt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return c && s && kt(f, c.clone(f)),
    f
}
function Ji(e=" ", t=0) {
    return de(gt, null, e, t)
}
function rf(e, t) {
    const n = de(Dt, null, e);
    return n.staticCount = t,
    n
}
function of(e="", t=!1) {
    return t ? (_s(),
    bs(ye, null, e)) : de(ye, null, e)
}
function Me(e) {
    return e == null || typeof e == "boolean" ? de(ye) : B(e) ? de(xe, null, e.slice()) : Kt(e) ? Qe(e) : de(gt, null, String(e))
}
function Qe(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : nt(e)
}
function js(e, t) {
    let n = 0;
    const {shapeFlag: s} = e;
    if (t == null)
        t = null;
    else if (B(t))
        n = 16;
    else if (typeof t == "object")
        if (s & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1),
            js(e, r()),
            r._c && (r._d = !0));
            return
        } else {
            n = 32;
            const r = t._;
            !r && !Pi(t) ? t._ctx = ve : r === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        q(t) ? (t = {
            default: t,
            _ctx: ve
        },
        n = 32) : (t = String(t),
        s & 64 ? (n = 16,
        t = [Ji(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function hc(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const r in s)
            if (r === "class")
                t.class !== s.class && (t.class = Os([t.class, s.class]));
            else if (r === "style")
                t.style = Rs([t.style, s.style]);
            else if (Yt(r)) {
                const i = t[r]
                  , o = s[r];
                o && i !== o && !(B(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o)
            } else
                r !== "" && (t[r] = s[r])
    }
    return t
}
function Oe(e, t, n, s=null) {
    He(e, t, 7, [n, s])
}
const pc = Oi();
let gc = 0;
function mc(e, t, n) {
    const s = e.type
      , r = (t ? t.appContext : e.appContext) || pc
      , i = {
        uid: gc++,
        vnode: e,
        type: s,
        parent: t,
        appContext: r,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new No(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(r.provides),
        ids: t ? t.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Ni(s, r),
        emitsOptions: Wi(s, r),
        emit: null,
        emitted: null,
        propsDefaults: te,
        inheritAttrs: s.inheritAttrs,
        ctx: te,
        data: te,
        props: te,
        attrs: te,
        slots: te,
        refs: te,
        setupState: te,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return i.ctx = {
        _: i
    },
    i.root = t ? t.root : i,
    i.emit = ic.bind(null, i),
    e.ce && e.ce(i),
    i
}
let fe = null;
const jn = () => fe || ve;
let Sn, ws;
{
    const e = An()
      , t = (n, s) => {
        let r;
        return (r = e[n]) || (r = e[n] = []),
        r.push(s),
        i => {
            r.length > 1 ? r.forEach(o => o(i)) : r[0](i)
        }
    }
    ;
    Sn = t("__VUE_INSTANCE_SETTERS__", n => fe = n),
    ws = t("__VUE_SSR_SETTERS__", n => qt = n)
}
const Jt = e => {
    const t = fe;
    return Sn(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        Sn(t)
    }
}
  , fr = () => {
    fe && fe.scope.off(),
    Sn(null)
}
;
function zi(e) {
    return e.vnode.shapeFlag & 4
}
let qt = !1;
function yc(e, t=!1, n=!1) {
    t && ws(t);
    const {props: s, children: r} = e.vnode
      , i = zi(e);
    ql(e, s, i, t),
    Jl(e, r, n);
    const o = i ? vc(e, t) : void 0;
    return t && ws(!1),
    o
}
function vc(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,Hl);
    const {setup: s} = n;
    if (s) {
        rt();
        const r = e.setupContext = s.length > 1 ? Zi(e) : null
          , i = Jt(e)
          , o = Xt(s, e, 0, [e.props, r])
          , l = Dr(o);
        if (it(),
        i(),
        (l || e.sp) && !pt(e) && wi(e),
        l) {
            if (o.then(fr, fr),
            t)
                return o.then(c => {
                    ur(e, c, t)
                }
                ).catch(c => {
                    Pn(c, e, 0)
                }
                );
            e.asyncDep = o
        } else
            ur(e, o, t)
    } else
        Qi(e, t)
}
function ur(e, t, n) {
    q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ne(t) && (e.setupState = ai(t)),
    Qi(e, n)
}
let dr;
function Qi(e, t, n) {
    const s = e.type;
    if (!e.render) {
        if (!t && dr && !s.render) {
            const r = s.template || $s(e).template;
            if (r) {
                const {isCustomElement: i, compilerOptions: o} = e.appContext.config
                  , {delimiters: l, compilerOptions: c} = s
                  , u = oe(oe({
                    isCustomElement: i,
                    delimiters: l
                }, o), c);
                s.render = dr(r, u)
            }
        }
        e.render = s.render || Ue
    }
    {
        const r = Jt(e);
        rt();
        try {
            Dl(e)
        } finally {
            it(),
            r()
        }
    }
}
const _c = {
    get(e, t) {
        return ge(e, "get", ""),
        e[t]
    }
};
function Zi(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,_c),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function Vs(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ai(dn(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in $t)
                return $t[n](e)
        },
        has(t, n) {
            return n in t || n in $t
        }
    })) : e.proxy
}
function bc(e, t=!0) {
    return q(e) ? e.displayName || e.name : e.name || t && e.__name
}
function wc(e) {
    return q(e) && "__vccOpts"in e
}
const ie = (e, t) => ul(e, t, qt);
function xs(e, t, n) {
    const s = arguments.length;
    return s === 2 ? ne(t) && !B(t) ? Kt(t) ? de(e, null, [t]) : de(e, t) : de(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Kt(n) && (n = [n]),
    de(e, t, n))
}
const xc = "3.5.12";
/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ss;
const hr = typeof window < "u" && window.trustedTypes;
if (hr)
    try {
        Ss = hr.createPolicy("vue", {
            createHTML: e => e
        })
    } catch {}
const eo = Ss ? e => Ss.createHTML(e) : e => e
  , Sc = "http://www.w3.org/2000/svg"
  , Cc = "http://www.w3.org/1998/Math/MathML"
  , ke = typeof document < "u" ? document : null
  , pr = ke && ke.createElement("template")
  , Ec = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, s) => {
        const r = t === "svg" ? ke.createElementNS(Sc, e) : t === "mathml" ? ke.createElementNS(Cc, e) : n ? ke.createElement(e, {
            is: n
        }) : ke.createElement(e);
        return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple),
        r
    }
    ,
    createText: e => ke.createTextNode(e),
    createComment: e => ke.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => ke.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, s, r, i) {
        const o = n ? n.previousSibling : t.lastChild;
        if (r && (r === i || r.nextSibling))
            for (; t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling)); )
                ;
        else {
            pr.innerHTML = eo(s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e);
            const l = pr.content;
            if (s === "svg" || s === "mathml") {
                const c = l.firstChild;
                for (; c.firstChild; )
                    l.appendChild(c.firstChild);
                l.removeChild(c)
            }
            t.insertBefore(l, n)
        }
        return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , Ye = "transition"
  , Lt = "animation"
  , Gt = Symbol("_vtc")
  , to = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , Tc = oe({}, gi, to)
  , Ac = e => (e.displayName = "Transition",
e.props = Tc,
e)
  , lf = Ac( (e, {slots: t}) => xs(wl, Rc(e), t))
  , ct = (e, t=[]) => {
    B(e) ? e.forEach(n => n(...t)) : e && e(...t)
}
  , gr = e => e ? B(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;
function Rc(e) {
    const t = {};
    for (const x in e)
        x in to || (t[x] = e[x]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: s, duration: r, enterFromClass: i=`${n}-enter-from`, enterActiveClass: o=`${n}-enter-active`, enterToClass: l=`${n}-enter-to`, appearFromClass: c=i, appearActiveClass: u=o, appearToClass: f=l, leaveFromClass: h=`${n}-leave-from`, leaveActiveClass: y=`${n}-leave-active`, leaveToClass: b=`${n}-leave-to`} = e
      , P = Oc(r)
      , O = P && P[0]
      , G = P && P[1]
      , {onBeforeEnter: U, onEnter: W, onEnterCancelled: g, onLeave: p, onLeaveCancelled: R, onBeforeAppear: D=U, onAppear: j=W, onAppearCancelled: K=g} = t
      , I = (x, V, se) => {
        at(x, V ? f : l),
        at(x, V ? u : o),
        se && se()
    }
      , _ = (x, V) => {
        x._isLeaving = !1,
        at(x, h),
        at(x, b),
        at(x, y),
        V && V()
    }
      , L = x => (V, se) => {
        const le = x ? j : W
          , H = () => I(V, x, se);
        ct(le, [V, H]),
        mr( () => {
            at(V, x ? c : i),
            Xe(V, x ? f : l),
            gr(le) || yr(V, s, O, H)
        }
        )
    }
    ;
    return oe(t, {
        onBeforeEnter(x) {
            ct(U, [x]),
            Xe(x, i),
            Xe(x, o)
        },
        onBeforeAppear(x) {
            ct(D, [x]),
            Xe(x, c),
            Xe(x, u)
        },
        onEnter: L(!1),
        onAppear: L(!0),
        onLeave(x, V) {
            x._isLeaving = !0;
            const se = () => _(x, V);
            Xe(x, h),
            Xe(x, y),
            Pc(),
            mr( () => {
                x._isLeaving && (at(x, h),
                Xe(x, b),
                gr(p) || yr(x, s, G, se))
            }
            ),
            ct(p, [x, se])
        },
        onEnterCancelled(x) {
            I(x, !1),
            ct(g, [x])
        },
        onAppearCancelled(x) {
            I(x, !0),
            ct(K, [x])
        },
        onLeaveCancelled(x) {
            _(x),
            ct(R, [x])
        }
    })
}
function Oc(e) {
    if (e == null)
        return null;
    if (ne(e))
        return [Qn(e.enter), Qn(e.leave)];
    {
        const t = Qn(e);
        return [t, t]
    }
}
function Qn(e) {
    return To(e)
}
function Xe(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)),
    (e[Gt] || (e[Gt] = new Set)).add(t)
}
function at(e, t) {
    t.split(/\s+/).forEach(s => s && e.classList.remove(s));
    const n = e[Gt];
    n && (n.delete(t),
    n.size || (e[Gt] = void 0))
}
function mr(e) {
    requestAnimationFrame( () => {
        requestAnimationFrame(e)
    }
    )
}
let Mc = 0;
function yr(e, t, n, s) {
    const r = e._endId = ++Mc
      , i = () => {
        r === e._endId && s()
    }
    ;
    if (n != null)
        return setTimeout(i, n);
    const {type: o, timeout: l, propCount: c} = Ic(e, t);
    if (!o)
        return s();
    const u = o + "end";
    let f = 0;
    const h = () => {
        e.removeEventListener(u, y),
        i()
    }
      , y = b => {
        b.target === e && ++f >= c && h()
    }
    ;
    setTimeout( () => {
        f < c && h()
    }
    , l + 1),
    e.addEventListener(u, y)
}
function Ic(e, t) {
    const n = window.getComputedStyle(e)
      , s = P => (n[P] || "").split(", ")
      , r = s(`${Ye}Delay`)
      , i = s(`${Ye}Duration`)
      , o = vr(r, i)
      , l = s(`${Lt}Delay`)
      , c = s(`${Lt}Duration`)
      , u = vr(l, c);
    let f = null
      , h = 0
      , y = 0;
    t === Ye ? o > 0 && (f = Ye,
    h = o,
    y = i.length) : t === Lt ? u > 0 && (f = Lt,
    h = u,
    y = c.length) : (h = Math.max(o, u),
    f = h > 0 ? o > u ? Ye : Lt : null,
    y = f ? f === Ye ? i.length : c.length : 0);
    const b = f === Ye && /\b(transform|all)(,|$)/.test(s(`${Ye}Property`).toString());
    return {
        type: f,
        timeout: h,
        propCount: y,
        hasTransform: b
    }
}
function vr(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map( (n, s) => _r(n) + _r(e[s])))
}
function _r(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function Pc() {
    return document.body.offsetHeight
}
function Lc(e, t, n) {
    const s = e[Gt];
    s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const br = Symbol("_vod")
  , Nc = Symbol("_vsh")
  , Fc = Symbol("")
  , Hc = /(^|;)\s*display\s*:/;
function $c(e, t, n) {
    const s = e.style
      , r = re(n);
    let i = !1;
    if (n && !r) {
        if (t)
            if (re(t))
                for (const o of t.split(";")) {
                    const l = o.slice(0, o.indexOf(":")).trim();
                    n[l] == null && pn(s, l, "")
                }
            else
                for (const o in t)
                    n[o] == null && pn(s, o, "");
        for (const o in n)
            o === "display" && (i = !0),
            pn(s, o, n[o])
    } else if (r) {
        if (t !== n) {
            const o = s[Fc];
            o && (n += ";" + o),
            s.cssText = n,
            i = Hc.test(n)
        }
    } else
        t && e.removeAttribute("style");
    br in e && (e[br] = i ? s.display : "",
    e[Nc] && (s.display = "none"))
}
const wr = /\s*!important$/;
function pn(e, t, n) {
    if (B(n))
        n.forEach(s => pn(e, t, s));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const s = Dc(e, t);
        wr.test(n) ? e.setProperty(st(s), n.replace(wr, ""), "important") : e[s] = n
    }
}
const xr = ["Webkit", "Moz", "ms"]
  , Zn = {};
function Dc(e, t) {
    const n = Zn[t];
    if (n)
        return n;
    let s = Pe(t);
    if (s !== "filter" && s in e)
        return Zn[t] = s;
    s = Tn(s);
    for (let r = 0; r < xr.length; r++) {
        const i = xr[r] + s;
        if (i in e)
            return Zn[t] = i
    }
    return t
}
const Sr = "http://www.w3.org/1999/xlink";
function Cr(e, t, n, s, r, i=Po(t)) {
    s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Sr, t.slice(6, t.length)) : e.setAttributeNS(Sr, t, n) : n == null || i && !Br(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : qe(n) ? String(n) : n)
}
function Er(e, t, n, s, r) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? eo(n) : n);
        return
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
        const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value
          , c = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (l !== c || !("_value"in e)) && (e.value = c),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let o = !1;
    if (n === "" || n == null) {
        const l = typeof e[t];
        l === "boolean" ? n = Br(n) : n == null && l === "string" ? (n = "",
        o = !0) : l === "number" && (n = 0,
        o = !0)
    }
    try {
        e[t] = n
    } catch {}
    o && e.removeAttribute(r || t)
}
function jc(e, t, n, s) {
    e.addEventListener(t, n, s)
}
function Vc(e, t, n, s) {
    e.removeEventListener(t, n, s)
}
const Tr = Symbol("_vei");
function Uc(e, t, n, s, r=null) {
    const i = e[Tr] || (e[Tr] = {})
      , o = i[t];
    if (s && o)
        o.value = s;
    else {
        const [l,c] = Bc(t);
        if (s) {
            const u = i[t] = Kc(s, r);
            jc(e, l, u, c)
        } else
            o && (Vc(e, l, o, c),
            i[t] = void 0)
    }
}
const Ar = /(?:Once|Passive|Capture)$/;
function Bc(e) {
    let t;
    if (Ar.test(e)) {
        t = {};
        let s;
        for (; s = e.match(Ar); )
            e = e.slice(0, e.length - s[0].length),
            t[s[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : st(e.slice(2)), t]
}
let es = 0;
const kc = Promise.resolve()
  , Wc = () => es || (kc.then( () => es = 0),
es = Date.now());
function Kc(e, t) {
    const n = s => {
        if (!s._vts)
            s._vts = Date.now();
        else if (s._vts <= n.attached)
            return;
        He(qc(s, n.value), t, 5, [s])
    }
    ;
    return n.value = e,
    n.attached = Wc(),
    n
}
function qc(e, t) {
    if (B(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(s => r => !r._stopped && s && s(r))
    } else
        return t
}
const Rr = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , Gc = (e, t, n, s, r, i) => {
    const o = r === "svg";
    t === "class" ? Lc(e, s, o) : t === "style" ? $c(e, n, s) : Yt(t) ? Es(t) || Uc(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : Yc(e, t, s, o)) ? (Er(e, t, s),
    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Cr(e, t, s, o, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !re(s)) ? Er(e, Pe(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s),
    Cr(e, t, s, o))
}
;
function Yc(e, t, n, s) {
    if (s)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Rr(t) && q(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const r = e.tagName;
        if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
            return !1
    }
    return Rr(t) && re(n) ? !1 : t in e
}
const Xc = ["ctrl", "shift", "alt", "meta"]
  , Jc = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button"in e && e.button !== 0,
    middle: e => "button"in e && e.button !== 1,
    right: e => "button"in e && e.button !== 2,
    exact: (e, t) => Xc.some(n => e[`${n}Key`] && !t.includes(n))
}
  , cf = (e, t) => {
    const n = e._withMods || (e._withMods = {})
      , s = t.join(".");
    return n[s] || (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
            const l = Jc[t[o]];
            if (l && l(r, t))
                return
        }
        return e(r, ...i)
    }
    )
}
  , zc = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , af = (e, t) => {
    const n = e._withKeys || (e._withKeys = {})
      , s = t.join(".");
    return n[s] || (n[s] = r => {
        if (!("key"in r))
            return;
        const i = st(r.key);
        if (t.some(o => o === i || zc[o] === i))
            return e(r)
    }
    )
}
  , Qc = oe({
    patchProp: Gc
}, Ec);
let ts, Or = !1;
function Zc() {
    return ts = Or ? ts : Ql(Qc),
    Or = !0,
    ts
}
const ff = (...e) => {
    const t = Zc().createApp(...e)
      , {mount: n} = t;
    return t.mount = s => {
        const r = ta(s);
        if (r)
            return n(r, !0, ea(r))
    }
    ,
    t
}
;
function ea(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function ta(e) {
    return re(e) ? document.querySelector(e) : e
}
const uf = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s,r] of t)
        n[s] = r;
    return n
}
  , na = window.__VP_SITE_DATA__;
function Us(e) {
    return Kr() ? (Fo(e),
    !0) : !1
}
function tt(e) {
    return typeof e == "function" ? e() : ci(e)
}
const no = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const sa = Object.prototype.toString
  , ra = e => sa.call(e) === "[object Object]"
  , so = () => {}
  , Mr = ia();
function ia() {
    var e, t;
    return no && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent))
}
function oa(e, t) {
    function n(...s) {
        return new Promise( (r, i) => {
            Promise.resolve(e( () => t.apply(this, s), {
                fn: t,
                thisArg: this,
                args: s
            })).then(r).catch(i)
        }
        )
    }
    return n
}
const ro = e => e();
function la(e=ro) {
    const t = ue(!0);
    function n() {
        t.value = !1
    }
    function s() {
        t.value = !0
    }
    const r = (...i) => {
        t.value && e(...i)
    }
    ;
    return {
        isActive: In(t),
        pause: n,
        resume: s,
        eventFilter: r
    }
}
function ca(e) {
    return jn()
}
function io(...e) {
    if (e.length !== 1)
        return cl(...e);
    const t = e[0];
    return typeof t == "function" ? In(il( () => ({
        get: t,
        set: so
    }))) : ue(t)
}
function aa(e, t, n={}) {
    const {eventFilter: s=ro, ...r} = n;
    return Fe(e, oa(s, t), r)
}
function fa(e, t, n={}) {
    const {eventFilter: s, ...r} = n
      , {eventFilter: i, pause: o, resume: l, isActive: c} = la(s);
    return {
        stop: aa(e, t, {
            ...r,
            eventFilter: i
        }),
        pause: o,
        resume: l,
        isActive: c
    }
}
function Bs(e, t=!0, n) {
    ca() ? Ot(e, n) : t ? e() : Ln(e)
}
const Ke = no ? window : void 0;
function oo(e) {
    var t;
    const n = tt(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
function Rt(...e) {
    let t, n, s, r;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n,s,r] = e,
    t = Ke) : [t,n,s,r] = e,
    !t)
        return so;
    Array.isArray(n) || (n = [n]),
    Array.isArray(s) || (s = [s]);
    const i = []
      , o = () => {
        i.forEach(f => f()),
        i.length = 0
    }
      , l = (f, h, y, b) => (f.addEventListener(h, y, b),
    () => f.removeEventListener(h, y, b))
      , c = Fe( () => [oo(t), tt(r)], ([f,h]) => {
        if (o(),
        !f)
            return;
        const y = ra(h) ? {
            ...h
        } : h;
        i.push(...n.flatMap(b => s.map(P => l(f, b, P, y))))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , u = () => {
        c(),
        o()
    }
    ;
    return Us(u),
    u
}
function ua(e) {
    return typeof e == "function" ? e : typeof e == "string" ? t => t.key === e : Array.isArray(e) ? t => e.includes(t.key) : () => !0
}
function df(...e) {
    let t, n, s = {};
    e.length === 3 ? (t = e[0],
    n = e[1],
    s = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0,
    n = e[0],
    s = e[1]) : (t = e[0],
    n = e[1]) : (t = !0,
    n = e[0]);
    const {target: r=Ke, eventName: i="keydown", passive: o=!1, dedupe: l=!1} = s
      , c = ua(t);
    return Rt(r, i, f => {
        f.repeat && tt(l) || c(f) && n(f)
    }
    , o)
}
function da() {
    const e = ue(!1)
      , t = jn();
    return t && Ot( () => {
        e.value = !0
    }
    , t),
    e
}
function ha(e) {
    const t = da();
    return ie( () => (t.value,
    !!e()))
}
function lo(e, t={}) {
    const {window: n=Ke} = t
      , s = ha( () => n && "matchMedia"in n && typeof n.matchMedia == "function");
    let r;
    const i = ue(!1)
      , o = u => {
        i.value = u.matches
    }
      , l = () => {
        r && ("removeEventListener"in r ? r.removeEventListener("change", o) : r.removeListener(o))
    }
      , c = Bi( () => {
        s.value && (l(),
        r = n.matchMedia(tt(e)),
        "addEventListener"in r ? r.addEventListener("change", o) : r.addListener(o),
        i.value = r.matches)
    }
    );
    return Us( () => {
        c(),
        l(),
        r = void 0
    }
    ),
    i
}
const ln = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , cn = "__vueuse_ssr_handlers__"
  , pa = ga();
function ga() {
    return cn in ln || (ln[cn] = ln[cn] || {}),
    ln[cn]
}
function co(e, t) {
    return pa[e] || t
}
function ks(e) {
    return lo("(prefers-color-scheme: dark)", e)
}
function ma(e) {
    return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number"
}
const ya = {
    boolean: {
        read: e => e === "true",
        write: e => String(e)
    },
    object: {
        read: e => JSON.parse(e),
        write: e => JSON.stringify(e)
    },
    number: {
        read: e => Number.parseFloat(e),
        write: e => String(e)
    },
    any: {
        read: e => e,
        write: e => String(e)
    },
    string: {
        read: e => e,
        write: e => String(e)
    },
    map: {
        read: e => new Map(JSON.parse(e)),
        write: e => JSON.stringify(Array.from(e.entries()))
    },
    set: {
        read: e => new Set(JSON.parse(e)),
        write: e => JSON.stringify(Array.from(e))
    },
    date: {
        read: e => new Date(e),
        write: e => e.toISOString()
    }
}
  , Ir = "vueuse-storage";
function va(e, t, n, s={}) {
    var r;
    const {flush: i="pre", deep: o=!0, listenToStorageChanges: l=!0, writeDefaults: c=!0, mergeDefaults: u=!1, shallow: f, window: h=Ke, eventFilter: y, onError: b=_ => {
        console.error(_)
    }
    , initOnMounted: P} = s
      , O = (f ? oi : ue)(typeof t == "function" ? t() : t);
    if (!n)
        try {
            n = co("getDefaultStorage", () => {
                var _;
                return (_ = Ke) == null ? void 0 : _.localStorage
            }
            )()
        } catch (_) {
            b(_)
        }
    if (!n)
        return O;
    const G = tt(t)
      , U = ma(G)
      , W = (r = s.serializer) != null ? r : ya[U]
      , {pause: g, resume: p} = fa(O, () => D(O.value), {
        flush: i,
        deep: o,
        eventFilter: y
    });
    h && l && Bs( () => {
        n instanceof Storage ? Rt(h, "storage", K) : Rt(h, Ir, I),
        P && K()
    }
    ),
    P || K();
    function R(_, L) {
        if (h) {
            const x = {
                key: e,
                oldValue: _,
                newValue: L,
                storageArea: n
            };
            h.dispatchEvent(n instanceof Storage ? new StorageEvent("storage",x) : new CustomEvent(Ir,{
                detail: x
            }))
        }
    }
    function D(_) {
        try {
            const L = n.getItem(e);
            if (_ == null)
                R(L, null),
                n.removeItem(e);
            else {
                const x = W.write(_);
                L !== x && (n.setItem(e, x),
                R(L, x))
            }
        } catch (L) {
            b(L)
        }
    }
    function j(_) {
        const L = _ ? _.newValue : n.getItem(e);
        if (L == null)
            return c && G != null && n.setItem(e, W.write(G)),
            G;
        if (!_ && u) {
            const x = W.read(L);
            return typeof u == "function" ? u(x, G) : U === "object" && !Array.isArray(x) ? {
                ...G,
                ...x
            } : x
        } else
            return typeof L != "string" ? L : W.read(L)
    }
    function K(_) {
        if (!(_ && _.storageArea !== n)) {
            if (_ && _.key == null) {
                O.value = G;
                return
            }
            if (!(_ && _.key !== e)) {
                g();
                try {
                    (_ == null ? void 0 : _.newValue) !== W.write(O.value) && (O.value = j(_))
                } catch (L) {
                    b(L)
                } finally {
                    _ ? Ln(p) : p()
                }
            }
        }
    }
    function I(_) {
        K(_.detail)
    }
    return O
}
const _a = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function ba(e={}) {
    const {selector: t="html", attribute: n="class", initialValue: s="auto", window: r=Ke, storage: i, storageKey: o="vueuse-color-scheme", listenToStorageChanges: l=!0, storageRef: c, emitAuto: u, disableTransition: f=!0} = e
      , h = {
        auto: "",
        light: "light",
        dark: "dark",
        ...e.modes || {}
    }
      , y = ks({
        window: r
    })
      , b = ie( () => y.value ? "dark" : "light")
      , P = c || (o == null ? io(s) : va(o, s, i, {
        window: r,
        listenToStorageChanges: l
    }))
      , O = ie( () => P.value === "auto" ? b.value : P.value)
      , G = co("updateHTMLAttrs", (p, R, D) => {
        const j = typeof p == "string" ? r == null ? void 0 : r.document.querySelector(p) : oo(p);
        if (!j)
            return;
        const K = new Set
          , I = new Set;
        let _ = null;
        if (R === "class") {
            const x = D.split(/\s/g);
            Object.values(h).flatMap(V => (V || "").split(/\s/g)).filter(Boolean).forEach(V => {
                x.includes(V) ? K.add(V) : I.add(V)
            }
            )
        } else
            _ = {
                key: R,
                value: D
            };
        if (K.size === 0 && I.size === 0 && _ === null)
            return;
        let L;
        f && (L = r.document.createElement("style"),
        L.appendChild(document.createTextNode(_a)),
        r.document.head.appendChild(L));
        for (const x of K)
            j.classList.add(x);
        for (const x of I)
            j.classList.remove(x);
        _ && j.setAttribute(_.key, _.value),
        f && (r.getComputedStyle(L).opacity,
        document.head.removeChild(L))
    }
    );
    function U(p) {
        var R;
        G(t, n, (R = h[p]) != null ? R : p)
    }
    function W(p) {
        e.onChanged ? e.onChanged(p, U) : U(p)
    }
    Fe(O, W, {
        flush: "post",
        immediate: !0
    }),
    Bs( () => W(O.value));
    const g = ie({
        get() {
            return u ? P.value : O.value
        },
        set(p) {
            P.value = p
        }
    });
    try {
        return Object.assign(g, {
            store: P,
            system: b,
            state: O
        })
    } catch {
        return g
    }
}
function wa(e={}) {
    const {valueDark: t="dark", valueLight: n="", window: s=Ke} = e
      , r = ba({
        ...e,
        onChanged: (l, c) => {
            var u;
            e.onChanged ? (u = e.onChanged) == null || u.call(e, l === "dark", c, l) : c(l)
        }
        ,
        modes: {
            dark: t,
            light: n
        }
    })
      , i = ie( () => r.system ? r.system.value : ks({
        window: s
    }).value ? "dark" : "light");
    return ie({
        get() {
            return r.value === "dark"
        },
        set(l) {
            const c = l ? "dark" : "light";
            i.value === c ? r.value = "auto" : r.value = c
        }
    })
}
function ns(e) {
    return typeof Window < "u" && e instanceof Window ? e.document.documentElement : typeof Document < "u" && e instanceof Document ? e.documentElement : e
}
function ao(e) {
    const t = window.getComputedStyle(e);
    if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
        return !0;
    {
        const n = e.parentNode;
        return !n || n.tagName === "BODY" ? !1 : ao(n)
    }
}
function xa(e) {
    const t = e || window.event
      , n = t.target;
    return ao(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(),
    !1)
}
const ss = new WeakMap;
function hf(e, t=!1) {
    const n = ue(t);
    let s = null
      , r = "";
    Fe(io(e), l => {
        const c = ns(tt(l));
        if (c) {
            const u = c;
            if (ss.get(u) || ss.set(u, u.style.overflow),
            u.style.overflow !== "hidden" && (r = u.style.overflow),
            u.style.overflow === "hidden")
                return n.value = !0;
            if (n.value)
                return u.style.overflow = "hidden"
        }
    }
    , {
        immediate: !0
    });
    const i = () => {
        const l = ns(tt(e));
        !l || n.value || (Mr && (s = Rt(l, "touchmove", c => {
            xa(c)
        }
        , {
            passive: !1
        })),
        l.style.overflow = "hidden",
        n.value = !0)
    }
      , o = () => {
        const l = ns(tt(e));
        !l || !n.value || (Mr && (s == null || s()),
        l.style.overflow = r,
        ss.delete(l),
        n.value = !1)
    }
    ;
    return Us(o),
    ie({
        get() {
            return n.value
        },
        set(l) {
            l ? i() : o()
        }
    })
}
function pf(e={}) {
    const {window: t=Ke, behavior: n="auto"} = e;
    if (!t)
        return {
            x: ue(0),
            y: ue(0)
        };
    const s = ue(t.scrollX)
      , r = ue(t.scrollY)
      , i = ie({
        get() {
            return s.value
        },
        set(l) {
            scrollTo({
                left: l,
                behavior: n
            })
        }
    })
      , o = ie({
        get() {
            return r.value
        },
        set(l) {
            scrollTo({
                top: l,
                behavior: n
            })
        }
    });
    return Rt(t, "scroll", () => {
        s.value = t.scrollX,
        r.value = t.scrollY
    }
    , {
        capture: !1,
        passive: !0
    }),
    {
        x: i,
        y: o
    }
}
function gf(e={}) {
    const {window: t=Ke, initialWidth: n=Number.POSITIVE_INFINITY, initialHeight: s=Number.POSITIVE_INFINITY, listenOrientation: r=!0, includeScrollbar: i=!0, type: o="inner"} = e
      , l = ue(n)
      , c = ue(s)
      , u = () => {
        t && (o === "outer" ? (l.value = t.outerWidth,
        c.value = t.outerHeight) : i ? (l.value = t.innerWidth,
        c.value = t.innerHeight) : (l.value = t.document.documentElement.clientWidth,
        c.value = t.document.documentElement.clientHeight))
    }
    ;
    if (u(),
    Bs(u),
    Rt("resize", u, {
        passive: !0
    }),
    r) {
        const f = lo("(orientation: portrait)");
        Fe(f, () => u())
    }
    return {
        width: l,
        height: c
    }
}
const rs = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1
};
var is = {};
const fo = /^(?:[a-z]+:|\/\/)/i
  , Sa = "vitepress-theme-appearance"
  , Ca = /#.*$/
  , Ea = /[?#].*$/
  , Ta = /(?:(^|\/)index)?\.(?:md|html)$/
  , pe = typeof document < "u"
  , uo = {
    relativePath: "404.md",
    filePath: "",
    title: "404",
    description: "Not Found",
    headers: [],
    frontmatter: {
        sidebar: !1,
        layout: "page"
    },
    lastUpdated: 0,
    isNotFound: !0
};
function Aa(e, t, n=!1) {
    if (t === void 0)
        return !1;
    if (e = Pr(`/${e}`),
    n)
        return new RegExp(t).test(e);
    if (Pr(t) !== e)
        return !1;
    const s = t.match(Ca);
    return s ? (pe ? location.hash : "") === s[0] : !0
}
function Pr(e) {
    return decodeURI(e).replace(Ea, "").replace(Ta, "$1")
}
function Ra(e) {
    return fo.test(e)
}
function Oa(e, t) {
    return Object.keys((e == null ? void 0 : e.locales) || {}).find(n => n !== "root" && !Ra(n) && Aa(t, `/${n}/`, !0)) || "root"
}
function Ma(e, t) {
    var s, r, i, o, l, c, u;
    const n = Oa(e, t);
    return Object.assign({}, e, {
        localeIndex: n,
        lang: ((s = e.locales[n]) == null ? void 0 : s.lang) ?? e.lang,
        dir: ((r = e.locales[n]) == null ? void 0 : r.dir) ?? e.dir,
        title: ((i = e.locales[n]) == null ? void 0 : i.title) ?? e.title,
        titleTemplate: ((o = e.locales[n]) == null ? void 0 : o.titleTemplate) ?? e.titleTemplate,
        description: ((l = e.locales[n]) == null ? void 0 : l.description) ?? e.description,
        head: po(e.head, ((c = e.locales[n]) == null ? void 0 : c.head) ?? []),
        themeConfig: {
            ...e.themeConfig,
            ...(u = e.locales[n]) == null ? void 0 : u.themeConfig
        }
    })
}
function ho(e, t) {
    const n = t.title || e.title
      , s = t.titleTemplate ?? e.titleTemplate;
    if (typeof s == "string" && s.includes(":title"))
        return s.replace(/:title/g, n);
    const r = Ia(e.title, s);
    return n === r.slice(3) ? n : `${n}${r}`
}
function Ia(e, t) {
    return t === !1 ? "" : t === !0 || t === void 0 ? ` | ${e}` : e === t ? "" : ` | ${t}`
}
function Pa(e, t) {
    const [n,s] = t;
    if (n !== "meta")
        return !1;
    const r = Object.entries(s)[0];
    return r == null ? !1 : e.some( ([i,o]) => i === n && o[r[0]] === r[1])
}
function po(e, t) {
    return [...e.filter(n => !Pa(t, n)), ...t]
}
const La = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g
  , Na = /^[a-z]:/i;
function Lr(e) {
    const t = Na.exec(e)
      , n = t ? t[0] : "";
    return n + e.slice(n.length).replace(La, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1")
}
const os = new Set;
function Fa(e) {
    if (os.size === 0) {
        const n = typeof process == "object" && (is == null ? void 0 : is.VITE_EXTRA_EXTENSIONS) || (rs == null ? void 0 : rs.VITE_EXTRA_EXTENSIONS) || "";
        ("3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip" + (n && typeof n == "string" ? "," + n : "")).split(",").forEach(s => os.add(s))
    }
    const t = e.split(".").pop();
    return t == null || !os.has(t.toLowerCase())
}
const Ha = Symbol()
  , mt = oi(na);
function mf(e) {
    const t = ie( () => Ma(mt.value, e.data.relativePath))
      , n = t.value.appearance
      , s = n === "force-dark" ? ue(!0) : n === "force-auto" ? ks() : n ? wa({
        storageKey: Sa,
        initialValue: () => n === "dark" ? "dark" : "auto",
        ...typeof n == "object" ? n : {}
    }) : ue(!1)
      , r = ue(pe ? location.hash : "");
    return pe && window.addEventListener("hashchange", () => {
        r.value = location.hash
    }
    ),
    Fe( () => e.data, () => {
        r.value = pe ? location.hash : ""
    }
    ),
    {
        site: t,
        theme: ie( () => t.value.themeConfig),
        page: ie( () => e.data),
        frontmatter: ie( () => e.data.frontmatter),
        params: ie( () => e.data.params),
        lang: ie( () => t.value.lang),
        dir: ie( () => e.data.frontmatter.dir || t.value.dir),
        localeIndex: ie( () => t.value.localeIndex || "root"),
        title: ie( () => ho(t.value, e.data)),
        description: ie( () => e.data.description || t.value.description),
        isDark: s,
        hash: ie( () => r.value)
    }
}
function $a() {
    const e = At(Ha);
    if (!e)
        throw new Error("vitepress data not properly injected in app");
    return e
}
function Da(e, t) {
    return `${e}${t}`.replace(/\/+/g, "/")
}
function Nr(e) {
    return fo.test(e) || !e.startsWith("/") ? e : Da(mt.value.base, e)
}
function ja(e) {
    let t = e.replace(/\.html$/, "");
    if (t = decodeURIComponent(t),
    t = t.replace(/\/$/, "/index"),
    pe) {
        const n = "/";
        t = Lr(t.slice(n.length).replace(/\//g, "_") || "index") + ".md";
        let s = __VP_HASH_MAP__[t.toLowerCase()];
        if (s || (t = t.endsWith("_index.md") ? t.slice(0, -9) + ".md" : t.slice(0, -3) + "_index.md",
        s = __VP_HASH_MAP__[t.toLowerCase()]),
        !s)
            return null;
        t = `${n}assets/${t}.${s}.js`
    } else
        t = `./${Lr(t.slice(1).replace(/\//g, "_"))}.md.js`;
    return t
}
let gn = [];
function yf(e) {
    gn.push(e),
    Hn( () => {
        gn = gn.filter(t => t !== e)
    }
    )
}
function Va() {
    let e = mt.value.scrollOffset
      , t = 0
      , n = 24;
    if (typeof e == "object" && "padding"in e && (n = e.padding,
    e = e.selector),
    typeof e == "number")
        t = e;
    else if (typeof e == "string")
        t = Fr(e, n);
    else if (Array.isArray(e))
        for (const s of e) {
            const r = Fr(s, n);
            if (r) {
                t = r;
                break
            }
        }
    return t
}
function Fr(e, t) {
    const n = document.querySelector(e);
    if (!n)
        return 0;
    const s = n.getBoundingClientRect().bottom;
    return s < 0 ? 0 : s + t
}
const Ua = Symbol()
  , go = "http://a.com"
  , Ba = () => ({
    path: "/",
    component: null,
    data: uo
});
function vf(e, t) {
    const n = Mn(Ba())
      , s = {
        route: n,
        go: r
    };
    async function r(l=pe ? location.href : "/") {
        var c, u;
        l = ls(l),
        await ((c = s.onBeforeRouteChange) == null ? void 0 : c.call(s, l)) !== !1 && (pe && l !== ls(location.href) && (history.replaceState({
            scrollPosition: window.scrollY
        }, ""),
        history.pushState({}, "", l)),
        await o(l),
        await ((u = s.onAfterRouteChanged) == null ? void 0 : u.call(s, l)))
    }
    let i = null;
    async function o(l, c=0, u=!1) {
        var y, b;
        if (await ((y = s.onBeforePageLoad) == null ? void 0 : y.call(s, l)) === !1)
            return;
        const f = new URL(l,go)
          , h = i = f.pathname;
        try {
            let P = await e(h);
            if (!P)
                throw new Error(`Page not found: ${h}`);
            if (i === h) {
                i = null;
                const {default: O, __pageData: G} = P;
                if (!O)
                    throw new Error(`Invalid route component: ${O}`);
                await ((b = s.onAfterPageLoad) == null ? void 0 : b.call(s, l)),
                n.path = pe ? h : Nr(h),
                n.component = dn(O),
                n.data = dn(G),
                pe && Ln( () => {
                    let U = mt.value.base + G.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
                    if (!mt.value.cleanUrls && !U.endsWith("/") && (U += ".html"),
                    U !== f.pathname && (f.pathname = U,
                    l = U + f.search + f.hash,
                    history.replaceState({}, "", l)),
                    f.hash && !c) {
                        let W = null;
                        try {
                            W = document.getElementById(decodeURIComponent(f.hash).slice(1))
                        } catch (g) {
                            console.warn(g)
                        }
                        if (W) {
                            Hr(W, f.hash);
                            return
                        }
                    }
                    window.scrollTo(0, c)
                }
                )
            }
        } catch (P) {
            if (!/fetch|Page not found/.test(P.message) && !/^\/404(\.html|\/)?$/.test(l) && console.error(P),
            !u)
                try {
                    const O = await fetch(mt.value.base + "hashmap.json");
                    window.__VP_HASH_MAP__ = await O.json(),
                    await o(l, c, !0);
                    return
                } catch {}
            if (i === h) {
                i = null,
                n.path = pe ? h : Nr(h),
                n.component = t ? dn(t) : null;
                const O = pe ? h.replace(/(^|\/)$/, "$1index").replace(/(\.html)?$/, ".md").replace(/^\//, "") : "404.md";
                n.data = {
                    ...uo,
                    relativePath: O
                }
            }
        }
    }
    return pe && (history.state === null && history.replaceState({}, ""),
    window.addEventListener("click", l => {
        if (l.defaultPrevented || !(l.target instanceof Element) || l.target.closest("button") || l.button !== 0 || l.ctrlKey || l.shiftKey || l.altKey || l.metaKey)
            return;
        const c = l.target.closest("a");
        if (!c || c.closest(".vp-raw") || c.hasAttribute("download") || c.hasAttribute("target"))
            return;
        const u = c.getAttribute("href") ?? (c instanceof SVGAElement ? c.getAttribute("xlink:href") : null);
        if (u == null)
            return;
        const {href: f, origin: h, pathname: y, hash: b, search: P} = new URL(u,c.baseURI)
          , O = new URL(location.href);
        h === O.origin && Fa(y) && (l.preventDefault(),
        y === O.pathname && P === O.search ? (b !== O.hash && (history.pushState({}, "", f),
        window.dispatchEvent(new HashChangeEvent("hashchange",{
            oldURL: O.href,
            newURL: f
        }))),
        b ? Hr(c, b, c.classList.contains("header-anchor")) : window.scrollTo(0, 0)) : r(f))
    }
    , {
        capture: !0
    }),
    window.addEventListener("popstate", async l => {
        var c;
        l.state !== null && (await o(ls(location.href), l.state && l.state.scrollPosition || 0),
        (c = s.onAfterRouteChanged) == null || c.call(s, location.href))
    }
    ),
    window.addEventListener("hashchange", l => {
        l.preventDefault()
    }
    )),
    s
}
function ka() {
    const e = At(Ua);
    if (!e)
        throw new Error("useRouter() is called without provider.");
    return e
}
function mo() {
    return ka().route
}
function Hr(e, t, n=!1) {
    let s = null;
    try {
        s = e.classList.contains("header-anchor") ? e : document.getElementById(decodeURIComponent(t).slice(1))
    } catch (r) {
        console.warn(r)
    }
    if (s) {
        let r = function() {
            !n || Math.abs(o - window.scrollY) > window.innerHeight ? window.scrollTo(0, o) : window.scrollTo({
                left: 0,
                top: o,
                behavior: "smooth"
            })
        };
        const i = parseInt(window.getComputedStyle(s).paddingTop, 10)
          , o = window.scrollY + s.getBoundingClientRect().top - Va() + i;
        requestAnimationFrame(r)
    }
}
function ls(e) {
    const t = new URL(e,go);
    return t.pathname = t.pathname.replace(/(^|\/)index(\.html)?$/, "$1"),
    mt.value.cleanUrls ? t.pathname = t.pathname.replace(/\.html$/, "") : !t.pathname.endsWith("/") && !t.pathname.endsWith(".html") && (t.pathname += ".html"),
    t.pathname + t.search + t.hash
}
const an = () => gn.forEach(e => e())
  , _f = bi({
    name: "VitePressContent",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        }
    },
    setup(e) {
        const t = mo()
          , {frontmatter: n, site: s} = $a();
        return Fe(n, an, {
            deep: !0,
            flush: "post"
        }),
        () => xs(e.as, s.value.contentProps ?? {
            style: {
                position: "relative"
            }
        }, [t.component ? xs(t.component, {
            onVnodeMounted: an,
            onVnodeUpdated: an,
            onVnodeUnmounted: an
        }) : "404 Page Not Found"])
    }
})
  , bf = bi({
    setup(e, {slots: t}) {
        const n = ue(!1);
        return Ot( () => {
            n.value = !0
        }
        ),
        () => n.value && t.default ? t.default() : null
    }
});
function wf() {
    pe && window.addEventListener("click", e => {
        var n;
        const t = e.target;
        if (t.matches(".vp-code-group input")) {
            const s = (n = t.parentElement) == null ? void 0 : n.parentElement;
            if (!s)
                return;
            const r = Array.from(s.querySelectorAll("input")).indexOf(t);
            if (r < 0)
                return;
            const i = s.querySelector(".blocks");
            if (!i)
                return;
            const o = Array.from(i.children).find(u => u.classList.contains("active"));
            if (!o)
                return;
            const l = i.children[r];
            if (!l || o === l)
                return;
            o.classList.remove("active"),
            l.classList.add("active");
            const c = s == null ? void 0 : s.querySelector(`label[for="${t.id}"]`);
            c == null || c.scrollIntoView({
                block: "nearest"
            })
        }
    }
    )
}
function xf() {
    if (pe) {
        const e = new WeakMap;
        window.addEventListener("click", t => {
            var s;
            const n = t.target;
            if (n.matches('div[class*="language-"] > button.copy')) {
                const r = n.parentElement
                  , i = (s = n.nextElementSibling) == null ? void 0 : s.nextElementSibling;
                if (!r || !i)
                    return;
                const o = /language-(shellscript|shell|bash|sh|zsh)/.test(r.className)
                  , l = [".vp-copy-ignore", ".diff.remove"]
                  , c = i.cloneNode(!0);
                c.querySelectorAll(l.join(",")).forEach(f => f.remove());
                let u = c.textContent || "";
                o && (u = u.replace(/^ *(\$|>) /gm, "").trim()),
                Wa(u).then( () => {
                    n.classList.add("copied"),
                    clearTimeout(e.get(n));
                    const f = setTimeout( () => {
                        n.classList.remove("copied"),
                        n.blur(),
                        e.delete(n)
                    }
                    , 2e3);
                    e.set(n, f)
                }
                )
            }
        }
        )
    }
}
async function Wa(e) {
    try {
        return navigator.clipboard.writeText(e)
    } catch {
        const t = document.createElement("textarea")
          , n = document.activeElement;
        t.value = e,
        t.setAttribute("readonly", ""),
        t.style.contain = "strict",
        t.style.position = "absolute",
        t.style.left = "-9999px",
        t.style.fontSize = "12pt";
        const s = document.getSelection()
          , r = s ? s.rangeCount > 0 && s.getRangeAt(0) : null;
        document.body.appendChild(t),
        t.select(),
        t.selectionStart = 0,
        t.selectionEnd = e.length,
        document.execCommand("copy"),
        document.body.removeChild(t),
        r && (s.removeAllRanges(),
        s.addRange(r)),
        n && n.focus()
    }
}
function Sf(e, t) {
    let n = !0
      , s = [];
    const r = i => {
        if (n) {
            n = !1,
            i.forEach(l => {
                const c = cs(l);
                for (const u of document.head.children)
                    if (u.isEqualNode(c)) {
                        s.push(u);
                        return
                    }
            }
            );
            return
        }
        const o = i.map(cs);
        s.forEach( (l, c) => {
            const u = o.findIndex(f => f == null ? void 0 : f.isEqualNode(l ?? null));
            u !== -1 ? delete o[u] : (l == null || l.remove(),
            delete s[c])
        }
        ),
        o.forEach(l => l && document.head.appendChild(l)),
        s = [...s, ...o].filter(Boolean)
    }
    ;
    Bi( () => {
        const i = e.data
          , o = t.value
          , l = i && i.description
          , c = i && i.frontmatter.head || []
          , u = ho(o, i);
        u !== document.title && (document.title = u);
        const f = l || o.description;
        let h = document.querySelector("meta[name=description]");
        h ? h.getAttribute("content") !== f && h.setAttribute("content", f) : cs(["meta", {
            name: "description",
            content: f
        }]),
        r(po(o.head, qa(c)))
    }
    )
}
function cs([e,t,n]) {
    const s = document.createElement(e);
    for (const r in t)
        s.setAttribute(r, t[r]);
    return n && (s.innerHTML = n),
    e === "script" && t.async == null && (s.async = !1),
    s
}
function Ka(e) {
    return e[0] === "meta" && e[1] && e[1].name === "description"
}
function qa(e) {
    return e.filter(t => !Ka(t))
}
const as = new Set
  , yo = () => document.createElement("link")
  , Ga = e => {
    const t = yo();
    t.rel = "prefetch",
    t.href = e,
    document.head.appendChild(t)
}
  , Ya = e => {
    const t = new XMLHttpRequest;
    t.open("GET", e, t.withCredentials = !0),
    t.send()
}
;
let fn;
const Xa = pe && (fn = yo()) && fn.relList && fn.relList.supports && fn.relList.supports("prefetch") ? Ga : Ya;
function Cf() {
    if (!pe || !window.IntersectionObserver)
        return;
    let e;
    if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
        return;
    const t = window.requestIdleCallback || setTimeout;
    let n = null;
    const s = () => {
        n && n.disconnect(),
        n = new IntersectionObserver(i => {
            i.forEach(o => {
                if (o.isIntersecting) {
                    const l = o.target;
                    n.unobserve(l);
                    const {pathname: c} = l;
                    if (!as.has(c)) {
                        as.add(c);
                        const u = ja(c);
                        u && Xa(u)
                    }
                }
            }
            )
        }
        ),
        t( () => {
            document.querySelectorAll("#app a").forEach(i => {
                const {hostname: o, pathname: l} = new URL(i.href instanceof SVGAnimatedString ? i.href.animVal : i.href,i.baseURI)
                  , c = l.match(/\.\w+$/);
                c && c[0] !== ".html" || i.target !== "_blank" && o === location.hostname && (l !== location.pathname ? n.observe(i) : as.add(l))
            }
            )
        }
        )
    }
    ;
    Ot(s);
    const r = mo();
    Fe( () => r.path, s),
    Hn( () => {
        n && n.disconnect()
    }
    )
}
export {tf as $, Va as A, Ja as B, Qa as C, oi as D, yf as E, xe as F, de as G, za as H, fo as I, mo as J, hc as K, At as L, gf as M, Rs as N, df as O, Ln as P, pf as Q, pe as R, In as S, lf as T, hf as U, Kl as V, ef as W, af as X, Si as Y, cf as Z, uf as _, Ji as a, xs as a0, rf as a1, Sf as a2, Ua as a3, mf as a4, Ha as a5, _f as a6, bf as a7, mt as a8, ff as a9, vf as aa, ja as ab, Cf as ac, xf as ad, wf as ae, bs as b, sf as c, bi as d, of as e, Fa as f, Nr as g, ie as h, Ra as i, Xi as j, ci as k, Aa as l, lo as m, Os as n, _s as o, ue as p, Fe as q, Za as r, Bi as s, Lo as t, $a as u, Ot as v, yl as w, Hn as x, nf as y, Il as z};
