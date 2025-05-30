import {d as m, o as a, c as u, r as c, n as M, a as j, t as N, b as k, w as p, e as h, T as ce, _ as b, u as Be, i as He, f as Ce, g as ue, h as $, j as v, k as r, l as z, m as ae, p as T, q as D, s as Q, v as q, x as de, y as ve, z as Ee, A as Fe, B as W, F as w, C as H, D as $e, E as X, G as _, H as E, I as ye, J as Z, K as U, L as x, M as De, N as Pe, O as Oe, P as Ge, Q as Le, R as ee, S as Ue, U as Ve, V as Se, W as je, X as ze, Y as qe, Z as We, $ as Ke, a0 as Re} from "./framework.BE3BSss6.js";
const Je = m({
    __name: "VPBadge",
    props: {
        text: {},
        type: {
            default: "tip"
        }
    },
    setup(s) {
        return (e, t) => (a(),
        u("span", {
            class: M(["VPBadge", e.type])
        }, [c(e.$slots, "default", {}, () => [j(N(e.text), 1)])], 2))
    }
})
  , Ye = {
    key: 0,
    class: "VPBackdrop"
}
  , Qe = m({
    __name: "VPBackdrop",
    props: {
        show: {
            type: Boolean
        }
    },
    setup(s) {
        return (e, t) => (a(),
        k(ce, {
            name: "fade"
        }, {
            default: p( () => [e.show ? (a(),
            u("div", Ye)) : h("", !0)]),
            _: 1
        }))
    }
})
  , Xe = b(Qe, [["__scopeId", "data-v-54a304ca"]])
  , P = Be;
function Ze(s, e) {
    let t, o = !1;
    return () => {
        t && clearTimeout(t),
        o ? t = setTimeout(s, e) : (s(),
        (o = !0) && setTimeout( () => o = !1, e))
    }
}
function re(s) {
    return /^\//.test(s) ? s : `/${s}`
}
function pe(s) {
    const {pathname: e, search: t, hash: o, protocol: n} = new URL(s,"http://a.com");
    if (He(s) || s.startsWith("#") || !n.startsWith("http") || !Ce(e))
        return s;
    const {site: i} = P()
      , l = e.endsWith("/") || e.endsWith(".html") ? s : s.replace(/(?:(^\.+)\/)?.*$/, `$1${e.replace(/(\.md)?$/, i.value.cleanUrls ? "" : ".html")}${t}${o}`);
    return ue(l)
}
function R({correspondingLink: s=!1}={}) {
    const {site: e, localeIndex: t, page: o, theme: n, hash: i} = P()
      , l = $( () => {
        var d, y;
        return {
            label: (d = e.value.locales[t.value]) == null ? void 0 : d.label,
            link: ((y = e.value.locales[t.value]) == null ? void 0 : y.link) || (t.value === "root" ? "/" : `/${t.value}/`)
        }
    }
    );
    return {
        localeLinks: $( () => Object.entries(e.value.locales).flatMap( ([d,y]) => l.value.label === y.label ? [] : {
            text: y.label,
            link: xe(y.link || (d === "root" ? "/" : `/${d}/`), n.value.i18nRouting !== !1 && s, o.value.relativePath.slice(l.value.link.length - 1), !e.value.cleanUrls) + i.value
        })),
        currentLang: l
    }
}
function xe(s, e, t, o) {
    return e ? s.replace(/\/$/, "") + re(t.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, o ? ".html" : "")) : s
}
const et = {
    class: "NotFound"
}
  , tt = {
    class: "code"
}
  , nt = {
    class: "title"
}
  , ot = {
    class: "quote"
}
  , st = {
    class: "action"
}
  , at = ["href", "aria-label"]
  , rt = m({
    __name: "NotFound",
    setup(s) {
        const {theme: e} = P()
          , {currentLang: t} = R();
        return (o, n) => {
            var i, l, f, d, y;
            return a(),
            u("div", et, [v("p", tt, N(((i = r(e).notFound) == null ? void 0 : i.code) ?? "404"), 1), v("h1", nt, N(((l = r(e).notFound) == null ? void 0 : l.title) ?? "PAGE NOT FOUND"), 1), n[0] || (n[0] = v("div", {
                class: "divider"
            }, null, -1)), v("blockquote", ot, N(((f = r(e).notFound) == null ? void 0 : f.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading."), 1), v("div", st, [v("a", {
                class: "link",
                href: r(ue)(r(t).link),
                "aria-label": ((d = r(e).notFound) == null ? void 0 : d.linkLabel) ?? "go to home"
            }, N(((y = r(e).notFound) == null ? void 0 : y.linkText) ?? "Take me home"), 9, at)])])
        }
    }
})
  , it = b(rt, [["__scopeId", "data-v-6ff51ddd"]]);
function Te(s, e) {
    if (Array.isArray(s))
        return J(s);
    if (s == null)
        return [];
    e = re(e);
    const t = Object.keys(s).sort( (n, i) => i.split("/").length - n.split("/").length).find(n => e.startsWith(re(n)))
      , o = t ? s[t] : [];
    return Array.isArray(o) ? J(o) : J(o.items, o.base)
}
function lt(s) {
    const e = [];
    let t = 0;
    for (const o in s) {
        const n = s[o];
        if (n.items) {
            t = e.push(n);
            continue
        }
        e[t] || e.push({
            items: []
        }),
        e[t].items.push(n)
    }
    return e
}
function ct(s) {
    const e = [];
    function t(o) {
        for (const n of o)
            n.text && n.link && e.push({
                text: n.text,
                link: n.link,
                docFooterText: n.docFooterText
            }),
            n.items && t(n.items)
    }
    return t(s),
    e
}
function ie(s, e) {
    return Array.isArray(e) ? e.some(t => ie(s, t)) : z(s, e.link) ? !0 : e.items ? ie(s, e.items) : !1
}
function J(s, e) {
    return [...s].map(t => {
        const o = {
            ...t
        }
          , n = o.base || e;
        return n && o.link && (o.link = n + o.link),
        o.items && (o.items = J(o.items, n)),
        o
    }
    )
}
function O() {
    const {frontmatter: s, page: e, theme: t} = P()
      , o = ae("(min-width: 960px)")
      , n = T(!1)
      , i = $( () => {
        const B = t.value.sidebar
          , S = e.value.relativePath;
        return B ? Te(B, S) : []
    }
    )
      , l = T(i.value);
    D(i, (B, S) => {
        JSON.stringify(B) !== JSON.stringify(S) && (l.value = i.value)
    }
    );
    const f = $( () => s.value.sidebar !== !1 && l.value.length > 0 && s.value.layout !== "home")
      , d = $( () => y ? s.value.aside == null ? t.value.aside === "left" : s.value.aside === "left" : !1)
      , y = $( () => s.value.layout === "home" ? !1 : s.value.aside != null ? !!s.value.aside : t.value.aside !== !1)
      , L = $( () => f.value && o.value)
      , g = $( () => f.value ? lt(l.value) : []);
    function V() {
        n.value = !0
    }
    function I() {
        n.value = !1
    }
    function A() {
        n.value ? I() : V()
    }
    return {
        isOpen: n,
        sidebar: l,
        sidebarGroups: g,
        hasSidebar: f,
        hasAside: y,
        leftAside: d,
        isSidebarEnabled: L,
        open: V,
        close: I,
        toggle: A
    }
}
function ut(s, e) {
    let t;
    Q( () => {
        t = s.value ? document.activeElement : void 0
    }
    ),
    q( () => {
        window.addEventListener("keyup", o)
    }
    ),
    de( () => {
        window.removeEventListener("keyup", o)
    }
    );
    function o(n) {
        n.key === "Escape" && s.value && (e(),
        t == null || t.focus())
    }
}
function dt(s) {
    const {page: e, hash: t} = P()
      , o = T(!1)
      , n = $( () => s.value.collapsed != null)
      , i = $( () => !!s.value.link)
      , l = T(!1)
      , f = () => {
        l.value = z(e.value.relativePath, s.value.link)
    }
    ;
    D([e, s, t], f),
    q(f);
    const d = $( () => l.value ? !0 : s.value.items ? ie(e.value.relativePath, s.value.items) : !1)
      , y = $( () => !!(s.value.items && s.value.items.length));
    Q( () => {
        o.value = !!(n.value && s.value.collapsed)
    }
    ),
    ve( () => {
        (l.value || d.value) && (o.value = !1)
    }
    );
    function L() {
        n.value && (o.value = !o.value)
    }
    return {
        collapsed: o,
        collapsible: n,
        isLink: i,
        isActiveLink: l,
        hasActiveLink: d,
        hasChildren: y,
        toggle: L
    }
}
function vt() {
    const {hasSidebar: s} = O()
      , e = ae("(min-width: 960px)")
      , t = ae("(min-width: 1280px)");
    return {
        isAsideEnabled: $( () => !t.value && !e.value ? !1 : s.value ? t.value : e.value)
    }
}
const le = [];
function Ne(s) {
    return typeof s.outline == "object" && !Array.isArray(s.outline) && s.outline.label || s.outlineTitle || "On this page"
}
function fe(s) {
    const e = [...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t => t.id && t.hasChildNodes()).map(t => {
        const o = Number(t.tagName[1]);
        return {
            element: t,
            title: pt(t),
            link: "#" + t.id,
            level: o
        }
    }
    );
    return ft(e, s)
}
function pt(s) {
    let e = "";
    for (const t of s.childNodes)
        if (t.nodeType === 1) {
            if (t.classList.contains("VPBadge") || t.classList.contains("header-anchor") || t.classList.contains("ignore-header"))
                continue;
            e += t.textContent
        } else
            t.nodeType === 3 && (e += t.textContent);
    return e.trim()
}
function ft(s, e) {
    if (e === !1)
        return [];
    const t = (typeof e == "object" && !Array.isArray(e) ? e.level : e) || 2
      , [o,n] = typeof t == "number" ? [t, t] : t === "deep" ? [2, 6] : t;
    return _t(s, o, n)
}
function ht(s, e) {
    const {isAsideEnabled: t} = vt()
      , o = Ze(i, 100);
    let n = null;
    q( () => {
        requestAnimationFrame(i),
        window.addEventListener("scroll", o)
    }
    ),
    Ee( () => {
        l(location.hash)
    }
    ),
    de( () => {
        window.removeEventListener("scroll", o)
    }
    );
    function i() {
        if (!t.value)
            return;
        const f = window.scrollY
          , d = window.innerHeight
          , y = document.body.offsetHeight
          , L = Math.abs(f + d - y) < 1
          , g = le.map( ({element: I, link: A}) => ({
            link: A,
            top: mt(I)
        })).filter( ({top: I}) => !Number.isNaN(I)).sort( (I, A) => I.top - A.top);
        if (!g.length) {
            l(null);
            return
        }
        if (f < 1) {
            l(null);
            return
        }
        if (L) {
            l(g[g.length - 1].link);
            return
        }
        let V = null;
        for (const {link: I, top: A} of g) {
            if (A > f + Fe() + 4)
                break;
            V = I
        }
        l(V)
    }
    function l(f) {
        n && n.classList.remove("active"),
        f == null ? n = null : n = s.value.querySelector(`a[href="${decodeURIComponent(f)}"]`);
        const d = n;
        d ? (d.classList.add("active"),
        e.value.style.top = d.offsetTop + 39 + "px",
        e.value.style.opacity = "1") : (e.value.style.top = "33px",
        e.value.style.opacity = "0")
    }
}
function mt(s) {
    let e = 0;
    for (; s !== document.body; ) {
        if (s === null)
            return NaN;
        e += s.offsetTop,
        s = s.offsetParent
    }
    return e
}
function _t(s, e, t) {
    le.length = 0;
    const o = []
      , n = [];
    return s.forEach(i => {
        const l = {
            ...i,
            children: []
        };
        let f = n[n.length - 1];
        for (; f && f.level >= l.level; )
            n.pop(),
            f = n[n.length - 1];
        if (l.element.classList.contains("ignore-header") || f && "shouldIgnore"in f) {
            n.push({
                level: l.level,
                shouldIgnore: !0
            });
            return
        }
        l.level > t || l.level < e || (le.push({
            element: l.element,
            link: l.link
        }),
        f ? f.children.push(l) : o.push(l),
        n.push(l))
    }
    ),
    o
}
const kt = ["href", "title"]
  , bt = m({
    __name: "VPDocOutlineItem",
    props: {
        headers: {},
        root: {
            type: Boolean
        }
    },
    setup(s) {
        function e({target: t}) {
            const o = t.href.split("#")[1]
              , n = document.getElementById(decodeURIComponent(o));
            n == null || n.focus({
                preventScroll: !0
            })
        }
        return (t, o) => {
            const n = W("VPDocOutlineItem", !0);
            return a(),
            u("ul", {
                class: M(["VPDocOutlineItem", t.root ? "root" : "nested"])
            }, [(a(!0),
            u(w, null, H(t.headers, ({children: i, link: l, title: f}) => (a(),
            u("li", null, [v("a", {
                class: "outline-link",
                href: l,
                onClick: e,
                title: f
            }, N(f), 9, kt), i != null && i.length ? (a(),
            k(n, {
                key: 0,
                headers: i
            }, null, 8, ["headers"])) : h("", !0)]))), 256))], 2)
        }
    }
})
  , Me = b(bt, [["__scopeId", "data-v-53c99d69"]])
  , gt = {
    class: "content"
}
  , $t = {
    "aria-level": "2",
    class: "outline-title",
    id: "doc-outline-aria-label",
    role: "heading"
}
  , yt = m({
    __name: "VPDocAsideOutline",
    setup(s) {
        const {frontmatter: e, theme: t} = P()
          , o = $e([]);
        X( () => {
            o.value = fe(e.value.outline ?? t.value.outline)
        }
        );
        const n = T()
          , i = T();
        return ht(n, i),
        (l, f) => (a(),
        u("nav", {
            "aria-labelledby": "doc-outline-aria-label",
            class: M(["VPDocAsideOutline", {
                "has-outline": o.value.length > 0
            }]),
            ref_key: "container",
            ref: n
        }, [v("div", gt, [v("div", {
            class: "outline-marker",
            ref_key: "marker",
            ref: i
        }, null, 512), v("div", $t, N(r(Ne)(r(t))), 1), _(Me, {
            headers: o.value,
            root: !0
        }, null, 8, ["headers"])])], 2))
    }
})
  , Pt = b(yt, [["__scopeId", "data-v-f610f197"]])
  , Lt = {
    class: "VPDocAsideCarbonAds"
}
  , Vt = m({
    __name: "VPDocAsideCarbonAds",
    props: {
        carbonAds: {}
    },
    setup(s) {
        const e = () => null;
        return (t, o) => (a(),
        u("div", Lt, [_(r(e), {
            "carbon-ads": t.carbonAds
        }, null, 8, ["carbon-ads"])]))
    }
})
  , St = {
    class: "VPDocAside"
}
  , Tt = m({
    __name: "VPDocAside",
    setup(s) {
        const {theme: e} = P();
        return (t, o) => (a(),
        u("div", St, [c(t.$slots, "aside-top", {}, void 0, !0), c(t.$slots, "aside-outline-before", {}, void 0, !0), _(Pt), c(t.$slots, "aside-outline-after", {}, void 0, !0), o[0] || (o[0] = v("div", {
            class: "spacer"
        }, null, -1)), c(t.$slots, "aside-ads-before", {}, void 0, !0), r(e).carbonAds ? (a(),
        k(Vt, {
            key: 0,
            "carbon-ads": r(e).carbonAds
        }, null, 8, ["carbon-ads"])) : h("", !0), c(t.$slots, "aside-ads-after", {}, void 0, !0), c(t.$slots, "aside-bottom", {}, void 0, !0)]))
    }
})
  , Nt = b(Tt, [["__scopeId", "data-v-cb998dce"]]);
function Mt() {
    const {theme: s, page: e} = P();
    return $( () => {
        const {text: t="Edit this page", pattern: o=""} = s.value.editLink || {};
        let n;
        return typeof o == "function" ? n = o(e.value) : n = o.replace(/:path/g, e.value.filePath),
        {
            url: n,
            text: t
        }
    }
    )
}
function It() {
    const {page: s, theme: e, frontmatter: t} = P();
    return $( () => {
        var y, L, g, V, I, A, B, S;
        const o = Te(e.value.sidebar, s.value.relativePath)
          , n = ct(o)
          , i = wt(n, C => C.link.replace(/[?#].*$/, ""))
          , l = i.findIndex(C => z(s.value.relativePath, C.link))
          , f = ((y = e.value.docFooter) == null ? void 0 : y.prev) === !1 && !t.value.prev || t.value.prev === !1
          , d = ((L = e.value.docFooter) == null ? void 0 : L.next) === !1 && !t.value.next || t.value.next === !1;
        return {
            prev: f ? void 0 : {
                text: (typeof t.value.prev == "string" ? t.value.prev : typeof t.value.prev == "object" ? t.value.prev.text : void 0) ?? ((g = i[l - 1]) == null ? void 0 : g.docFooterText) ?? ((V = i[l - 1]) == null ? void 0 : V.text),
                link: (typeof t.value.prev == "object" ? t.value.prev.link : void 0) ?? ((I = i[l - 1]) == null ? void 0 : I.link)
            },
            next: d ? void 0 : {
                text: (typeof t.value.next == "string" ? t.value.next : typeof t.value.next == "object" ? t.value.next.text : void 0) ?? ((A = i[l + 1]) == null ? void 0 : A.docFooterText) ?? ((B = i[l + 1]) == null ? void 0 : B.text),
                link: (typeof t.value.next == "object" ? t.value.next.link : void 0) ?? ((S = i[l + 1]) == null ? void 0 : S.link)
            }
        }
    }
    )
}
function wt(s, e) {
    const t = new Set;
    return s.filter(o => {
        const n = e(o);
        return t.has(n) ? !1 : t.add(n)
    }
    )
}
const F = m({
    __name: "VPLink",
    props: {
        tag: {},
        href: {},
        noIcon: {
            type: Boolean
        },
        target: {},
        rel: {}
    },
    setup(s) {
        const e = s
          , t = $( () => e.tag ?? (e.href ? "a" : "span"))
          , o = $( () => e.href && ye.test(e.href) || e.target === "_blank");
        return (n, i) => (a(),
        k(E(t.value), {
            class: M(["VPLink", {
                link: n.href,
                "vp-external-link-icon": o.value,
                "no-icon": n.noIcon
            }]),
            href: n.href ? r(pe)(n.href) : void 0,
            target: n.target ?? (o.value ? "_blank" : void 0),
            rel: n.rel ?? (o.value ? "noreferrer" : void 0)
        }, {
            default: p( () => [c(n.$slots, "default")]),
            _: 3
        }, 8, ["class", "href", "target", "rel"]))
    }
})
  , At = {
    class: "VPLastUpdated"
}
  , Bt = ["datetime"]
  , Ht = m({
    __name: "VPDocFooterLastUpdated",
    setup(s) {
        const {theme: e, page: t, lang: o} = P()
          , n = $( () => new Date(t.value.lastUpdated))
          , i = $( () => n.value.toISOString())
          , l = T("");
        return q( () => {
            Q( () => {
                var f, d, y;
                l.value = new Intl.DateTimeFormat((d = (f = e.value.lastUpdated) == null ? void 0 : f.formatOptions) != null && d.forceLocale ? o.value : void 0,((y = e.value.lastUpdated) == null ? void 0 : y.formatOptions) ?? {
                    dateStyle: "short",
                    timeStyle: "short"
                }).format(n.value)
            }
            )
        }
        ),
        (f, d) => {
            var y;
            return a(),
            u("p", At, [j(N(((y = r(e).lastUpdated) == null ? void 0 : y.text) || r(e).lastUpdatedText || "Last updated") + ": ", 1), v("time", {
                datetime: i.value
            }, N(l.value), 9, Bt)])
        }
    }
})
  , Ct = b(Ht, [["__scopeId", "data-v-1bb0c8a8"]])
  , Et = {
    key: 0,
    class: "VPDocFooter"
}
  , Ft = {
    key: 0,
    class: "edit-info"
}
  , Dt = {
    key: 0,
    class: "edit-link"
}
  , Ot = {
    key: 1,
    class: "last-updated"
}
  , Gt = {
    key: 1,
    class: "prev-next",
    "aria-labelledby": "doc-footer-aria-label"
}
  , Ut = {
    class: "pager"
}
  , jt = ["innerHTML"]
  , zt = ["innerHTML"]
  , qt = {
    class: "pager"
}
  , Wt = ["innerHTML"]
  , Kt = ["innerHTML"]
  , Rt = m({
    __name: "VPDocFooter",
    setup(s) {
        const {theme: e, page: t, frontmatter: o} = P()
          , n = Mt()
          , i = It()
          , l = $( () => e.value.editLink && o.value.editLink !== !1)
          , f = $( () => t.value.lastUpdated)
          , d = $( () => l.value || f.value || i.value.prev || i.value.next);
        return (y, L) => {
            var g, V, I, A;
            return d.value ? (a(),
            u("footer", Et, [c(y.$slots, "doc-footer-before", {}, void 0, !0), l.value || f.value ? (a(),
            u("div", Ft, [l.value ? (a(),
            u("div", Dt, [_(F, {
                class: "edit-link-button",
                href: r(n).url,
                "no-icon": !0
            }, {
                default: p( () => [L[0] || (L[0] = v("span", {
                    class: "vpi-square-pen edit-link-icon"
                }, null, -1)), j(" " + N(r(n).text), 1)]),
                _: 1
            }, 8, ["href"])])) : h("", !0), f.value ? (a(),
            u("div", Ot, [_(Ct)])) : h("", !0)])) : h("", !0), (g = r(i).prev) != null && g.link || (V = r(i).next) != null && V.link ? (a(),
            u("nav", Gt, [L[1] || (L[1] = v("span", {
                class: "visually-hidden",
                id: "doc-footer-aria-label"
            }, "Pager", -1)), v("div", Ut, [(I = r(i).prev) != null && I.link ? (a(),
            k(F, {
                key: 0,
                class: "pager-link prev",
                href: r(i).prev.link
            }, {
                default: p( () => {
                    var B;
                    return [v("span", {
                        class: "desc",
                        innerHTML: ((B = r(e).docFooter) == null ? void 0 : B.prev) || "Previous page"
                    }, null, 8, jt), v("span", {
                        class: "title",
                        innerHTML: r(i).prev.text
                    }, null, 8, zt)]
                }
                ),
                _: 1
            }, 8, ["href"])) : h("", !0)]), v("div", qt, [(A = r(i).next) != null && A.link ? (a(),
            k(F, {
                key: 0,
                class: "pager-link next",
                href: r(i).next.link
            }, {
                default: p( () => {
                    var B;
                    return [v("span", {
                        class: "desc",
                        innerHTML: ((B = r(e).docFooter) == null ? void 0 : B.next) || "Next page"
                    }, null, 8, Wt), v("span", {
                        class: "title",
                        innerHTML: r(i).next.text
                    }, null, 8, Kt)]
                }
                ),
                _: 1
            }, 8, ["href"])) : h("", !0)])])) : h("", !0)])) : h("", !0)
        }
    }
})
  , Jt = b(Rt, [["__scopeId", "data-v-1bcd8184"]])
  , Yt = {
    class: "container"
}
  , Qt = {
    class: "aside-container"
}
  , Xt = {
    class: "aside-content"
}
  , Zt = {
    class: "content"
}
  , xt = {
    class: "content-container"
}
  , en = {
    class: "main"
}
  , tn = m({
    __name: "VPDoc",
    setup(s) {
        const {theme: e} = P()
          , t = Z()
          , {hasSidebar: o, hasAside: n, leftAside: i} = O()
          , l = $( () => t.path.replace(/[./]+/g, "_").replace(/_html$/, ""));
        return (f, d) => {
            const y = W("Content");
            return a(),
            u("div", {
                class: M(["VPDoc", {
                    "has-sidebar": r(o),
                    "has-aside": r(n)
                }])
            }, [c(f.$slots, "doc-top", {}, void 0, !0), v("div", Yt, [r(n) ? (a(),
            u("div", {
                key: 0,
                class: M(["aside", {
                    "left-aside": r(i)
                }])
            }, [d[0] || (d[0] = v("div", {
                class: "aside-curtain"
            }, null, -1)), v("div", Qt, [v("div", Xt, [_(Nt, null, {
                "aside-top": p( () => [c(f.$slots, "aside-top", {}, void 0, !0)]),
                "aside-bottom": p( () => [c(f.$slots, "aside-bottom", {}, void 0, !0)]),
                "aside-outline-before": p( () => [c(f.$slots, "aside-outline-before", {}, void 0, !0)]),
                "aside-outline-after": p( () => [c(f.$slots, "aside-outline-after", {}, void 0, !0)]),
                "aside-ads-before": p( () => [c(f.$slots, "aside-ads-before", {}, void 0, !0)]),
                "aside-ads-after": p( () => [c(f.$slots, "aside-ads-after", {}, void 0, !0)]),
                _: 3
            })])])], 2)) : h("", !0), v("div", Zt, [v("div", xt, [c(f.$slots, "doc-before", {}, void 0, !0), v("main", en, [_(y, {
                class: M(["vp-doc", [l.value, r(e).externalLinkIcon && "external-link-icon-enabled"]])
            }, null, 8, ["class"])]), _(Jt, null, {
                "doc-footer-before": p( () => [c(f.$slots, "doc-footer-before", {}, void 0, !0)]),
                _: 3
            }), c(f.$slots, "doc-after", {}, void 0, !0)])])]), c(f.$slots, "doc-bottom", {}, void 0, !0)], 2)
        }
    }
})
  , nn = b(tn, [["__scopeId", "data-v-e6f2a212"]])
  , on = m({
    __name: "VPButton",
    props: {
        tag: {},
        size: {
            default: "medium"
        },
        theme: {
            default: "brand"
        },
        text: {},
        href: {},
        target: {},
        rel: {}
    },
    setup(s) {
        const e = s
          , t = $( () => e.href && ye.test(e.href))
          , o = $( () => e.tag || (e.href ? "a" : "button"));
        return (n, i) => (a(),
        k(E(o.value), {
            class: M(["VPButton", [n.size, n.theme]]),
            href: n.href ? r(pe)(n.href) : void 0,
            target: e.target ?? (t.value ? "_blank" : void 0),
            rel: e.rel ?? (t.value ? "noreferrer" : void 0)
        }, {
            default: p( () => [j(N(n.text), 1)]),
            _: 1
        }, 8, ["class", "href", "target", "rel"]))
    }
})
  , sn = b(on, [["__scopeId", "data-v-93dc4167"]])
  , an = ["src", "alt"]
  , rn = m({
    inheritAttrs: !1,
    __name: "VPImage",
    props: {
        image: {},
        alt: {}
    },
    setup(s) {
        return (e, t) => {
            const o = W("VPImage", !0);
            return e.image ? (a(),
            u(w, {
                key: 0
            }, [typeof e.image == "string" || "src"in e.image ? (a(),
            u("img", U({
                key: 0,
                class: "VPImage"
            }, typeof e.image == "string" ? e.$attrs : {
                ...e.image,
                ...e.$attrs
            }, {
                src: r(ue)(typeof e.image == "string" ? e.image : e.image.src),
                alt: e.alt ?? (typeof e.image == "string" ? "" : e.image.alt || "")
            }), null, 16, an)) : (a(),
            u(w, {
                key: 1
            }, [_(o, U({
                class: "dark",
                image: e.image.dark,
                alt: e.image.alt
            }, e.$attrs), null, 16, ["image", "alt"]), _(o, U({
                class: "light",
                image: e.image.light,
                alt: e.image.alt
            }, e.$attrs), null, 16, ["image", "alt"])], 64))], 64)) : h("", !0)
        }
    }
})
  , Y = b(rn, [["__scopeId", "data-v-ab19afbb"]])
  , ln = {
    class: "container"
}
  , cn = {
    class: "main"
}
  , un = {
    key: 0,
    class: "name"
}
  , dn = ["innerHTML"]
  , vn = ["innerHTML"]
  , pn = ["innerHTML"]
  , fn = {
    key: 0,
    class: "actions"
}
  , hn = {
    key: 0,
    class: "image"
}
  , mn = {
    class: "image-container"
}
  , _n = m({
    __name: "VPHero",
    props: {
        name: {},
        text: {},
        tagline: {},
        image: {},
        actions: {}
    },
    setup(s) {
        const e = x("hero-image-slot-exists");
        return (t, o) => (a(),
        u("div", {
            class: M(["VPHero", {
                "has-image": t.image || r(e)
            }])
        }, [v("div", ln, [v("div", cn, [c(t.$slots, "home-hero-info-before", {}, void 0, !0), c(t.$slots, "home-hero-info", {}, () => [t.name ? (a(),
        u("h1", un, [v("span", {
            innerHTML: t.name,
            class: "clip"
        }, null, 8, dn)])) : h("", !0), t.text ? (a(),
        u("p", {
            key: 1,
            innerHTML: t.text,
            class: "text"
        }, null, 8, vn)) : h("", !0), t.tagline ? (a(),
        u("p", {
            key: 2,
            innerHTML: t.tagline,
            class: "tagline"
        }, null, 8, pn)) : h("", !0)], !0), c(t.$slots, "home-hero-info-after", {}, void 0, !0), t.actions ? (a(),
        u("div", fn, [(a(!0),
        u(w, null, H(t.actions, n => (a(),
        u("div", {
            key: n.link,
            class: "action"
        }, [_(sn, {
            tag: "a",
            size: "medium",
            theme: n.theme,
            text: n.text,
            href: n.link,
            target: n.target,
            rel: n.rel
        }, null, 8, ["theme", "text", "href", "target", "rel"])]))), 128))])) : h("", !0), c(t.$slots, "home-hero-actions-after", {}, void 0, !0)]), t.image || r(e) ? (a(),
        u("div", hn, [v("div", mn, [o[0] || (o[0] = v("div", {
            class: "image-bg"
        }, null, -1)), c(t.$slots, "home-hero-image", {}, () => [t.image ? (a(),
        k(Y, {
            key: 0,
            class: "image-src",
            image: t.image
        }, null, 8, ["image"])) : h("", !0)], !0)])])) : h("", !0)])], 2))
    }
})
  , kn = b(_n, [["__scopeId", "data-v-b10c5094"]])
  , bn = m({
    __name: "VPHomeHero",
    setup(s) {
        const {frontmatter: e} = P();
        return (t, o) => r(e).hero ? (a(),
        k(kn, {
            key: 0,
            class: "VPHomeHero",
            name: r(e).hero.name,
            text: r(e).hero.text,
            tagline: r(e).hero.tagline,
            image: r(e).hero.image,
            actions: r(e).hero.actions
        }, {
            "home-hero-info-before": p( () => [c(t.$slots, "home-hero-info-before")]),
            "home-hero-info": p( () => [c(t.$slots, "home-hero-info")]),
            "home-hero-info-after": p( () => [c(t.$slots, "home-hero-info-after")]),
            "home-hero-actions-after": p( () => [c(t.$slots, "home-hero-actions-after")]),
            "home-hero-image": p( () => [c(t.$slots, "home-hero-image")]),
            _: 3
        }, 8, ["name", "text", "tagline", "image", "actions"])) : h("", !0)
    }
})
  , gn = {
    class: "box"
}
  , $n = {
    key: 0,
    class: "icon"
}
  , yn = ["innerHTML"]
  , Pn = ["innerHTML"]
  , Ln = ["innerHTML"]
  , Vn = {
    key: 4,
    class: "link-text"
}
  , Sn = {
    class: "link-text-value"
}
  , Tn = m({
    __name: "VPFeature",
    props: {
        icon: {},
        title: {},
        details: {},
        link: {},
        linkText: {},
        rel: {},
        target: {}
    },
    setup(s) {
        return (e, t) => (a(),
        k(F, {
            class: "VPFeature",
            href: e.link,
            rel: e.rel,
            target: e.target,
            "no-icon": !0,
            tag: e.link ? "a" : "div"
        }, {
            default: p( () => [v("article", gn, [typeof e.icon == "object" && e.icon.wrap ? (a(),
            u("div", $n, [_(Y, {
                image: e.icon,
                alt: e.icon.alt,
                height: e.icon.height || 48,
                width: e.icon.width || 48
            }, null, 8, ["image", "alt", "height", "width"])])) : typeof e.icon == "object" ? (a(),
            k(Y, {
                key: 1,
                image: e.icon,
                alt: e.icon.alt,
                height: e.icon.height || 48,
                width: e.icon.width || 48
            }, null, 8, ["image", "alt", "height", "width"])) : e.icon ? (a(),
            u("div", {
                key: 2,
                class: "icon",
                innerHTML: e.icon
            }, null, 8, yn)) : h("", !0), v("h2", {
                class: "title",
                innerHTML: e.title
            }, null, 8, Pn), e.details ? (a(),
            u("p", {
                key: 3,
                class: "details",
                innerHTML: e.details
            }, null, 8, Ln)) : h("", !0), e.linkText ? (a(),
            u("div", Vn, [v("p", Sn, [j(N(e.linkText) + " ", 1), t[0] || (t[0] = v("span", {
                class: "vpi-arrow-right link-text-icon"
            }, null, -1))])])) : h("", !0)])]),
            _: 1
        }, 8, ["href", "rel", "target", "tag"]))
    }
})
  , Nn = b(Tn, [["__scopeId", "data-v-bd37d1a2"]])
  , Mn = {
    key: 0,
    class: "VPFeatures"
}
  , In = {
    class: "container"
}
  , wn = {
    class: "items"
}
  , An = m({
    __name: "VPFeatures",
    props: {
        features: {}
    },
    setup(s) {
        const e = s
          , t = $( () => {
            const o = e.features.length;
            if (o) {
                if (o === 2)
                    return "grid-2";
                if (o === 3)
                    return "grid-3";
                if (o % 3 === 0)
                    return "grid-6";
                if (o > 3)
                    return "grid-4"
            } else
                return
        }
        );
        return (o, n) => o.features ? (a(),
        u("div", Mn, [v("div", In, [v("div", wn, [(a(!0),
        u(w, null, H(o.features, i => (a(),
        u("div", {
            key: i.title,
            class: M(["item", [t.value]])
        }, [_(Nn, {
            icon: i.icon,
            title: i.title,
            details: i.details,
            link: i.link,
            "link-text": i.linkText,
            rel: i.rel,
            target: i.target
        }, null, 8, ["icon", "title", "details", "link", "link-text", "rel", "target"])], 2))), 128))])])])) : h("", !0)
    }
})
  , Bn = b(An, [["__scopeId", "data-v-b1eea84a"]])
  , Hn = m({
    __name: "VPHomeFeatures",
    setup(s) {
        const {frontmatter: e} = P();
        return (t, o) => r(e).features ? (a(),
        k(Bn, {
            key: 0,
            class: "VPHomeFeatures",
            features: r(e).features
        }, null, 8, ["features"])) : h("", !0)
    }
})
  , Cn = m({
    __name: "VPHomeContent",
    setup(s) {
        const {width: e} = De({
            initialWidth: 0,
            includeScrollbar: !1
        });
        return (t, o) => (a(),
        u("div", {
            class: "vp-doc container",
            style: Pe(r(e) ? {
                "--vp-offset": `calc(50% - ${r(e) / 2}px)`
            } : {})
        }, [c(t.$slots, "default", {}, void 0, !0)], 4))
    }
})
  , En = b(Cn, [["__scopeId", "data-v-c141a4bd"]])
  , Fn = {
    class: "VPHome"
}
  , Dn = m({
    __name: "VPHome",
    setup(s) {
        const {frontmatter: e} = P();
        return (t, o) => {
            const n = W("Content");
            return a(),
            u("div", Fn, [c(t.$slots, "home-hero-before", {}, void 0, !0), _(bn, null, {
                "home-hero-info-before": p( () => [c(t.$slots, "home-hero-info-before", {}, void 0, !0)]),
                "home-hero-info": p( () => [c(t.$slots, "home-hero-info", {}, void 0, !0)]),
                "home-hero-info-after": p( () => [c(t.$slots, "home-hero-info-after", {}, void 0, !0)]),
                "home-hero-actions-after": p( () => [c(t.$slots, "home-hero-actions-after", {}, void 0, !0)]),
                "home-hero-image": p( () => [c(t.$slots, "home-hero-image", {}, void 0, !0)]),
                _: 3
            }), c(t.$slots, "home-hero-after", {}, void 0, !0), c(t.$slots, "home-features-before", {}, void 0, !0), _(Hn), c(t.$slots, "home-features-after", {}, void 0, !0), r(e).markdownStyles !== !1 ? (a(),
            k(En, {
                key: 0
            }, {
                default: p( () => [_(n)]),
                _: 1
            })) : (a(),
            k(n, {
                key: 1
            }))])
        }
    }
})
  , On = b(Dn, [["__scopeId", "data-v-07b1ad08"]])
  , Gn = {}
  , Un = {
    class: "VPPage"
};
function jn(s, e) {
    const t = W("Content");
    return a(),
    u("div", Un, [c(s.$slots, "page-top"), _(t), c(s.$slots, "page-bottom")])
}
const zn = b(Gn, [["render", jn]])
  , qn = m({
    __name: "VPContent",
    setup(s) {
        const {page: e, frontmatter: t} = P()
          , {hasSidebar: o} = O();
        return (n, i) => (a(),
        u("div", {
            class: M(["VPContent", {
                "has-sidebar": r(o),
                "is-home": r(t).layout === "home"
            }]),
            id: "VPContent"
        }, [r(e).isNotFound ? c(n.$slots, "not-found", {
            key: 0
        }, () => [_(it)], !0) : r(t).layout === "page" ? (a(),
        k(zn, {
            key: 1
        }, {
            "page-top": p( () => [c(n.$slots, "page-top", {}, void 0, !0)]),
            "page-bottom": p( () => [c(n.$slots, "page-bottom", {}, void 0, !0)]),
            _: 3
        })) : r(t).layout === "home" ? (a(),
        k(On, {
            key: 2
        }, {
            "home-hero-before": p( () => [c(n.$slots, "home-hero-before", {}, void 0, !0)]),
            "home-hero-info-before": p( () => [c(n.$slots, "home-hero-info-before", {}, void 0, !0)]),
            "home-hero-info": p( () => [c(n.$slots, "home-hero-info", {}, void 0, !0)]),
            "home-hero-info-after": p( () => [c(n.$slots, "home-hero-info-after", {}, void 0, !0)]),
            "home-hero-actions-after": p( () => [c(n.$slots, "home-hero-actions-after", {}, void 0, !0)]),
            "home-hero-image": p( () => [c(n.$slots, "home-hero-image", {}, void 0, !0)]),
            "home-hero-after": p( () => [c(n.$slots, "home-hero-after", {}, void 0, !0)]),
            "home-features-before": p( () => [c(n.$slots, "home-features-before", {}, void 0, !0)]),
            "home-features-after": p( () => [c(n.$slots, "home-features-after", {}, void 0, !0)]),
            _: 3
        })) : r(t).layout && r(t).layout !== "doc" ? (a(),
        k(E(r(t).layout), {
            key: 3
        })) : (a(),
        k(nn, {
            key: 4
        }, {
            "doc-top": p( () => [c(n.$slots, "doc-top", {}, void 0, !0)]),
            "doc-bottom": p( () => [c(n.$slots, "doc-bottom", {}, void 0, !0)]),
            "doc-footer-before": p( () => [c(n.$slots, "doc-footer-before", {}, void 0, !0)]),
            "doc-before": p( () => [c(n.$slots, "doc-before", {}, void 0, !0)]),
            "doc-after": p( () => [c(n.$slots, "doc-after", {}, void 0, !0)]),
            "aside-top": p( () => [c(n.$slots, "aside-top", {}, void 0, !0)]),
            "aside-outline-before": p( () => [c(n.$slots, "aside-outline-before", {}, void 0, !0)]),
            "aside-outline-after": p( () => [c(n.$slots, "aside-outline-after", {}, void 0, !0)]),
            "aside-ads-before": p( () => [c(n.$slots, "aside-ads-before", {}, void 0, !0)]),
            "aside-ads-after": p( () => [c(n.$slots, "aside-ads-after", {}, void 0, !0)]),
            "aside-bottom": p( () => [c(n.$slots, "aside-bottom", {}, void 0, !0)]),
            _: 3
        }))], 2))
    }
})
  , Wn = b(qn, [["__scopeId", "data-v-9a6c75ad"]])
  , Kn = {
    class: "container"
}
  , Rn = ["innerHTML"]
  , Jn = ["innerHTML"]
  , Yn = m({
    __name: "VPFooter",
    setup(s) {
        const {theme: e, frontmatter: t} = P()
          , {hasSidebar: o} = O();
        return (n, i) => r(e).footer && r(t).footer !== !1 ? (a(),
        u("footer", {
            key: 0,
            class: M(["VPFooter", {
                "has-sidebar": r(o)
            }])
        }, [v("div", Kn, [r(e).footer.message ? (a(),
        u("p", {
            key: 0,
            class: "message",
            innerHTML: r(e).footer.message
        }, null, 8, Rn)) : h("", !0), r(e).footer.copyright ? (a(),
        u("p", {
            key: 1,
            class: "copyright",
            innerHTML: r(e).footer.copyright
        }, null, 8, Jn)) : h("", !0)])], 2)) : h("", !0)
    }
})
  , Qn = b(Yn, [["__scopeId", "data-v-566314d4"]]);
function Xn() {
    const {theme: s, frontmatter: e} = P()
      , t = $e([])
      , o = $( () => t.value.length > 0);
    return X( () => {
        t.value = fe(e.value.outline ?? s.value.outline)
    }
    ),
    {
        headers: t,
        hasLocalNav: o
    }
}
const Zn = {
    class: "menu-text"
}
  , xn = {
    class: "header"
}
  , eo = {
    class: "outline"
}
  , to = m({
    __name: "VPLocalNavOutlineDropdown",
    props: {
        headers: {},
        navHeight: {}
    },
    setup(s) {
        const e = s
          , {theme: t} = P()
          , o = T(!1)
          , n = T(0)
          , i = T()
          , l = T();
        function f(g) {
            var V;
            (V = i.value) != null && V.contains(g.target) || (o.value = !1)
        }
        D(o, g => {
            if (g) {
                document.addEventListener("click", f);
                return
            }
            document.removeEventListener("click", f)
        }
        ),
        Oe("Escape", () => {
            o.value = !1
        }
        ),
        X( () => {
            o.value = !1
        }
        );
        function d() {
            o.value = !o.value,
            n.value = window.innerHeight + Math.min(window.scrollY - e.navHeight, 0)
        }
        function y(g) {
            g.target.classList.contains("outline-link") && (l.value && (l.value.style.transition = "none"),
            Ge( () => {
                o.value = !1
            }
            ))
        }
        function L() {
            o.value = !1,
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }
        return (g, V) => (a(),
        u("div", {
            class: "VPLocalNavOutlineDropdown",
            style: Pe({
                "--vp-vh": n.value + "px"
            }),
            ref_key: "main",
            ref: i
        }, [g.headers.length > 0 ? (a(),
        u("button", {
            key: 0,
            onClick: d,
            class: M({
                open: o.value
            })
        }, [v("span", Zn, N(r(Ne)(r(t))), 1), V[0] || (V[0] = v("span", {
            class: "vpi-chevron-right icon"
        }, null, -1))], 2)) : (a(),
        u("button", {
            key: 1,
            onClick: L
        }, N(r(t).returnToTopLabel || "Return to top"), 1)), _(ce, {
            name: "flyout"
        }, {
            default: p( () => [o.value ? (a(),
            u("div", {
                key: 0,
                ref_key: "items",
                ref: l,
                class: "items",
                onClick: y
            }, [v("div", xn, [v("a", {
                class: "top-link",
                href: "#",
                onClick: L
            }, N(r(t).returnToTopLabel || "Return to top"), 1)]), v("div", eo, [_(Me, {
                headers: g.headers
            }, null, 8, ["headers"])])], 512)) : h("", !0)]),
            _: 1
        })], 4))
    }
})
  , no = b(to, [["__scopeId", "data-v-883964e0"]])
  , oo = {
    class: "container"
}
  , so = ["aria-expanded"]
  , ao = {
    class: "menu-text"
}
  , ro = m({
    __name: "VPLocalNav",
    props: {
        open: {
            type: Boolean
        }
    },
    emits: ["open-menu"],
    setup(s) {
        const {theme: e, frontmatter: t} = P()
          , {hasSidebar: o} = O()
          , {headers: n} = Xn()
          , {y: i} = Le()
          , l = T(0);
        q( () => {
            l.value = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))
        }
        ),
        X( () => {
            n.value = fe(t.value.outline ?? e.value.outline)
        }
        );
        const f = $( () => n.value.length === 0)
          , d = $( () => f.value && !o.value)
          , y = $( () => ({
            VPLocalNav: !0,
            "has-sidebar": o.value,
            empty: f.value,
            fixed: d.value
        }));
        return (L, g) => r(t).layout !== "home" && (!d.value || r(i) >= l.value) ? (a(),
        u("div", {
            key: 0,
            class: M(y.value)
        }, [v("div", oo, [r(o) ? (a(),
        u("button", {
            key: 0,
            class: "menu",
            "aria-expanded": L.open,
            "aria-controls": "VPSidebarNav",
            onClick: g[0] || (g[0] = V => L.$emit("open-menu"))
        }, [g[1] || (g[1] = v("span", {
            class: "vpi-align-left menu-icon"
        }, null, -1)), v("span", ao, N(r(e).sidebarMenuLabel || "Menu"), 1)], 8, so)) : h("", !0), _(no, {
            headers: r(n),
            navHeight: l.value
        }, null, 8, ["headers", "navHeight"])])], 2)) : h("", !0)
    }
})
  , io = b(ro, [["__scopeId", "data-v-2488c25a"]]);
function lo() {
    const s = T(!1);
    function e() {
        s.value = !0,
        window.addEventListener("resize", n)
    }
    function t() {
        s.value = !1,
        window.removeEventListener("resize", n)
    }
    function o() {
        s.value ? t() : e()
    }
    function n() {
        window.outerWidth >= 768 && t()
    }
    const i = Z();
    return D( () => i.path, t),
    {
        isScreenOpen: s,
        openScreen: e,
        closeScreen: t,
        toggleScreen: o
    }
}
const co = {}
  , uo = {
    class: "VPSwitch",
    type: "button",
    role: "switch"
}
  , vo = {
    class: "check"
}
  , po = {
    key: 0,
    class: "icon"
};
function fo(s, e) {
    return a(),
    u("button", uo, [v("span", vo, [s.$slots.default ? (a(),
    u("span", po, [c(s.$slots, "default", {}, void 0, !0)])) : h("", !0)])])
}
const ho = b(co, [["render", fo], ["__scopeId", "data-v-b4ccac88"]])
  , mo = m({
    __name: "VPSwitchAppearance",
    setup(s) {
        const {isDark: e, theme: t} = P()
          , o = x("toggle-appearance", () => {
            e.value = !e.value
        }
        )
          , n = T("");
        return ve( () => {
            n.value = e.value ? t.value.lightModeSwitchTitle || "Switch to light theme" : t.value.darkModeSwitchTitle || "Switch to dark theme"
        }
        ),
        (i, l) => (a(),
        k(ho, {
            title: n.value,
            class: "VPSwitchAppearance",
            "aria-checked": r(e),
            onClick: r(o)
        }, {
            default: p( () => l[0] || (l[0] = [v("span", {
                class: "vpi-sun sun"
            }, null, -1), v("span", {
                class: "vpi-moon moon"
            }, null, -1)])),
            _: 1
        }, 8, ["title", "aria-checked", "onClick"]))
    }
})
  , he = b(mo, [["__scopeId", "data-v-be9742d9"]])
  , _o = {
    key: 0,
    class: "VPNavBarAppearance"
}
  , ko = m({
    __name: "VPNavBarAppearance",
    setup(s) {
        const {site: e} = P();
        return (t, o) => r(e).appearance && r(e).appearance !== "force-dark" && r(e).appearance !== "force-auto" ? (a(),
        u("div", _o, [_(he)])) : h("", !0)
    }
})
  , bo = b(ko, [["__scopeId", "data-v-3f90c1a5"]])
  , me = T();
let Ie = !1
  , se = 0;
function go(s) {
    const e = T(!1);
    if (ee) {
        !Ie && $o(),
        se++;
        const t = D(me, o => {
            var n, i, l;
            o === s.el.value || (n = s.el.value) != null && n.contains(o) ? (e.value = !0,
            (i = s.onFocus) == null || i.call(s)) : (e.value = !1,
            (l = s.onBlur) == null || l.call(s))
        }
        );
        de( () => {
            t(),
            se--,
            se || yo()
        }
        )
    }
    return Ue(e)
}
function $o() {
    document.addEventListener("focusin", we),
    Ie = !0,
    me.value = document.activeElement
}
function yo() {
    document.removeEventListener("focusin", we)
}
function we() {
    me.value = document.activeElement
}
const Po = {
    class: "VPMenuLink"
}
  , Lo = ["innerHTML"]
  , Vo = m({
    __name: "VPMenuLink",
    props: {
        item: {}
    },
    setup(s) {
        const {page: e} = P();
        return (t, o) => (a(),
        u("div", Po, [_(F, {
            class: M({
                active: r(z)(r(e).relativePath, t.item.activeMatch || t.item.link, !!t.item.activeMatch)
            }),
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            "no-icon": t.item.noIcon
        }, {
            default: p( () => [v("span", {
                innerHTML: t.item.text
            }, null, 8, Lo)]),
            _: 1
        }, 8, ["class", "href", "target", "rel", "no-icon"])]))
    }
})
  , te = b(Vo, [["__scopeId", "data-v-7eeeb2dc"]])
  , So = {
    class: "VPMenuGroup"
}
  , To = {
    key: 0,
    class: "title"
}
  , No = m({
    __name: "VPMenuGroup",
    props: {
        text: {},
        items: {}
    },
    setup(s) {
        return (e, t) => (a(),
        u("div", So, [e.text ? (a(),
        u("p", To, N(e.text), 1)) : h("", !0), (a(!0),
        u(w, null, H(e.items, o => (a(),
        u(w, null, ["link"in o ? (a(),
        k(te, {
            key: 0,
            item: o
        }, null, 8, ["item"])) : h("", !0)], 64))), 256))]))
    }
})
  , Mo = b(No, [["__scopeId", "data-v-a6b0397c"]])
  , Io = {
    class: "VPMenu"
}
  , wo = {
    key: 0,
    class: "items"
}
  , Ao = m({
    __name: "VPMenu",
    props: {
        items: {}
    },
    setup(s) {
        return (e, t) => (a(),
        u("div", Io, [e.items ? (a(),
        u("div", wo, [(a(!0),
        u(w, null, H(e.items, o => (a(),
        u(w, {
            key: JSON.stringify(o)
        }, ["link"in o ? (a(),
        k(te, {
            key: 0,
            item: o
        }, null, 8, ["item"])) : "component"in o ? (a(),
        k(E(o.component), U({
            key: 1,
            ref_for: !0
        }, o.props), null, 16)) : (a(),
        k(Mo, {
            key: 2,
            text: o.text,
            items: o.items
        }, null, 8, ["text", "items"]))], 64))), 128))])) : h("", !0), c(e.$slots, "default", {}, void 0, !0)]))
    }
})
  , Bo = b(Ao, [["__scopeId", "data-v-20ed86d6"]])
  , Ho = ["aria-expanded", "aria-label"]
  , Co = {
    key: 0,
    class: "text"
}
  , Eo = ["innerHTML"]
  , Fo = {
    key: 1,
    class: "vpi-more-horizontal icon"
}
  , Do = {
    class: "menu"
}
  , Oo = m({
    __name: "VPFlyout",
    props: {
        icon: {},
        button: {},
        label: {},
        items: {}
    },
    setup(s) {
        const e = T(!1)
          , t = T();
        go({
            el: t,
            onBlur: o
        });
        function o() {
            e.value = !1
        }
        return (n, i) => (a(),
        u("div", {
            class: "VPFlyout",
            ref_key: "el",
            ref: t,
            onMouseenter: i[1] || (i[1] = l => e.value = !0),
            onMouseleave: i[2] || (i[2] = l => e.value = !1)
        }, [v("button", {
            type: "button",
            class: "button",
            "aria-haspopup": "true",
            "aria-expanded": e.value,
            "aria-label": n.label,
            onClick: i[0] || (i[0] = l => e.value = !e.value)
        }, [n.button || n.icon ? (a(),
        u("span", Co, [n.icon ? (a(),
        u("span", {
            key: 0,
            class: M([n.icon, "option-icon"])
        }, null, 2)) : h("", !0), n.button ? (a(),
        u("span", {
            key: 1,
            innerHTML: n.button
        }, null, 8, Eo)) : h("", !0), i[3] || (i[3] = v("span", {
            class: "vpi-chevron-down text-icon"
        }, null, -1))])) : (a(),
        u("span", Fo))], 8, Ho), v("div", Do, [_(Bo, {
            items: n.items
        }, {
            default: p( () => [c(n.$slots, "default", {}, void 0, !0)]),
            _: 3
        }, 8, ["items"])])], 544))
    }
})
  , _e = b(Oo, [["__scopeId", "data-v-bfe7971f"]])
  , Go = ["href", "aria-label", "innerHTML"]
  , Uo = m({
    __name: "VPSocialLink",
    props: {
        icon: {},
        link: {},
        ariaLabel: {}
    },
    setup(s) {
        const e = s
          , t = $( () => typeof e.icon == "object" ? e.icon.svg : `<span class="vpi-social-${e.icon}" />`);
        return (o, n) => (a(),
        u("a", {
            class: "VPSocialLink no-icon",
            href: o.link,
            "aria-label": o.ariaLabel ?? (typeof o.icon == "string" ? o.icon : ""),
            target: "_blank",
            rel: "noopener",
            innerHTML: t.value
        }, null, 8, Go))
    }
})
  , jo = b(Uo, [["__scopeId", "data-v-358b6670"]])
  , zo = {
    class: "VPSocialLinks"
}
  , qo = m({
    __name: "VPSocialLinks",
    props: {
        links: {}
    },
    setup(s) {
        return (e, t) => (a(),
        u("div", zo, [(a(!0),
        u(w, null, H(e.links, ({link: o, icon: n, ariaLabel: i}) => (a(),
        k(jo, {
            key: o,
            icon: n,
            link: o,
            ariaLabel: i
        }, null, 8, ["icon", "link", "ariaLabel"]))), 128))]))
    }
})
  , ke = b(qo, [["__scopeId", "data-v-e71e869c"]])
  , Wo = {
    key: 0,
    class: "group translations"
}
  , Ko = {
    class: "trans-title"
}
  , Ro = {
    key: 1,
    class: "group"
}
  , Jo = {
    class: "item appearance"
}
  , Yo = {
    class: "label"
}
  , Qo = {
    class: "appearance-action"
}
  , Xo = {
    key: 2,
    class: "group"
}
  , Zo = {
    class: "item social-links"
}
  , xo = m({
    __name: "VPNavBarExtra",
    setup(s) {
        const {site: e, theme: t} = P()
          , {localeLinks: o, currentLang: n} = R({
            correspondingLink: !0
        })
          , i = $( () => o.value.length && n.value.label || e.value.appearance || t.value.socialLinks);
        return (l, f) => i.value ? (a(),
        k(_e, {
            key: 0,
            class: "VPNavBarExtra",
            label: "extra navigation"
        }, {
            default: p( () => [r(o).length && r(n).label ? (a(),
            u("div", Wo, [v("p", Ko, N(r(n).label), 1), (a(!0),
            u(w, null, H(r(o), d => (a(),
            k(te, {
                key: d.link,
                item: d
            }, null, 8, ["item"]))), 128))])) : h("", !0), r(e).appearance && r(e).appearance !== "force-dark" && r(e).appearance !== "force-auto" ? (a(),
            u("div", Ro, [v("div", Jo, [v("p", Yo, N(r(t).darkModeSwitchLabel || "Appearance"), 1), v("div", Qo, [_(he)])])])) : h("", !0), r(t).socialLinks ? (a(),
            u("div", Xo, [v("div", Zo, [_(ke, {
                class: "social-links-list",
                links: r(t).socialLinks
            }, null, 8, ["links"])])])) : h("", !0)]),
            _: 1
        })) : h("", !0)
    }
})
  , es = b(xo, [["__scopeId", "data-v-f953d92f"]])
  , ts = ["aria-expanded"]
  , ns = m({
    __name: "VPNavBarHamburger",
    props: {
        active: {
            type: Boolean
        }
    },
    emits: ["click"],
    setup(s) {
        return (e, t) => (a(),
        u("button", {
            type: "button",
            class: M(["VPNavBarHamburger", {
                active: e.active
            }]),
            "aria-label": "mobile navigation",
            "aria-expanded": e.active,
            "aria-controls": "VPNavScreen",
            onClick: t[0] || (t[0] = o => e.$emit("click"))
        }, t[1] || (t[1] = [v("span", {
            class: "container"
        }, [v("span", {
            class: "top"
        }), v("span", {
            class: "middle"
        }), v("span", {
            class: "bottom"
        })], -1)]), 10, ts))
    }
})
  , os = b(ns, [["__scopeId", "data-v-6bee1efd"]])
  , ss = ["innerHTML"]
  , as = m({
    __name: "VPNavBarMenuLink",
    props: {
        item: {}
    },
    setup(s) {
        const {page: e} = P();
        return (t, o) => (a(),
        k(F, {
            class: M({
                VPNavBarMenuLink: !0,
                active: r(z)(r(e).relativePath, t.item.activeMatch || t.item.link, !!t.item.activeMatch)
            }),
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            "no-icon": t.item.noIcon,
            tabindex: "0"
        }, {
            default: p( () => [v("span", {
                innerHTML: t.item.text
            }, null, 8, ss)]),
            _: 1
        }, 8, ["class", "href", "target", "rel", "no-icon"]))
    }
})
  , rs = b(as, [["__scopeId", "data-v-815115f5"]])
  , is = m({
    __name: "VPNavBarMenuGroup",
    props: {
        item: {}
    },
    setup(s) {
        const e = s
          , {page: t} = P()
          , o = i => "component"in i ? !1 : "link"in i ? z(t.value.relativePath, i.link, !!e.item.activeMatch) : i.items.some(o)
          , n = $( () => o(e.item));
        return (i, l) => (a(),
        k(_e, {
            class: M({
                VPNavBarMenuGroup: !0,
                active: r(z)(r(t).relativePath, i.item.activeMatch, !!i.item.activeMatch) || n.value
            }),
            button: i.item.text,
            items: i.item.items
        }, null, 8, ["class", "button", "items"]))
    }
})
  , ls = {
    key: 0,
    "aria-labelledby": "main-nav-aria-label",
    class: "VPNavBarMenu"
}
  , cs = m({
    __name: "VPNavBarMenu",
    setup(s) {
        const {theme: e} = P();
        return (t, o) => r(e).nav ? (a(),
        u("nav", ls, [o[0] || (o[0] = v("span", {
            id: "main-nav-aria-label",
            class: "visually-hidden"
        }, " Main Navigation ", -1)), (a(!0),
        u(w, null, H(r(e).nav, n => (a(),
        u(w, {
            key: JSON.stringify(n)
        }, ["link"in n ? (a(),
        k(rs, {
            key: 0,
            item: n
        }, null, 8, ["item"])) : "component"in n ? (a(),
        k(E(n.component), U({
            key: 1,
            ref_for: !0
        }, n.props), null, 16)) : (a(),
        k(is, {
            key: 2,
            item: n
        }, null, 8, ["item"]))], 64))), 128))])) : h("", !0)
    }
})
  , us = b(cs, [["__scopeId", "data-v-afb2845e"]]);
function ds(s) {
    const {localeIndex: e, theme: t} = P();
    function o(n) {
        var A, B, S;
        const i = n.split(".")
          , l = (A = t.value.search) == null ? void 0 : A.options
          , f = l && typeof l == "object"
          , d = f && ((S = (B = l.locales) == null ? void 0 : B[e.value]) == null ? void 0 : S.translations) || null
          , y = f && l.translations || null;
        let L = d
          , g = y
          , V = s;
        const I = i.pop();
        for (const C of i) {
            let G = null;
            const K = V == null ? void 0 : V[C];
            K && (G = V = K);
            const ne = g == null ? void 0 : g[C];
            ne && (G = g = ne);
            const oe = L == null ? void 0 : L[C];
            oe && (G = L = oe),
            K || (V = G),
            ne || (g = G),
            oe || (L = G)
        }
        return (L == null ? void 0 : L[I]) ?? (g == null ? void 0 : g[I]) ?? (V == null ? void 0 : V[I]) ?? ""
    }
    return o
}
const vs = ["aria-label"]
  , ps = {
    class: "DocSearch-Button-Container"
}
  , fs = {
    class: "DocSearch-Button-Placeholder"
}
  , be = m({
    __name: "VPNavBarSearchButton",
    setup(s) {
        const t = ds({
            button: {
                buttonText: "Search",
                buttonAriaLabel: "Search"
            }
        });
        return (o, n) => (a(),
        u("button", {
            type: "button",
            class: "DocSearch DocSearch-Button",
            "aria-label": r(t)("button.buttonAriaLabel")
        }, [v("span", ps, [n[0] || (n[0] = v("span", {
            class: "vp-icon DocSearch-Search-Icon"
        }, null, -1)), v("span", fs, N(r(t)("button.buttonText")), 1)]), n[1] || (n[1] = v("span", {
            class: "DocSearch-Button-Keys"
        }, [v("kbd", {
            class: "DocSearch-Button-Key"
        }), v("kbd", {
            class: "DocSearch-Button-Key"
        }, "K")], -1))], 8, vs))
    }
})
  , hs = {
    class: "VPNavBarSearch"
}
  , ms = {
    id: "local-search"
}
  , _s = {
    key: 1,
    id: "docsearch"
}
  , ks = m({
    __name: "VPNavBarSearch",
    setup(s) {
        const e = () => null
          , t = () => null
          , {theme: o} = P()
          , n = T(!1)
          , i = T(!1);
        q( () => {}
        );
        function l() {
            n.value || (n.value = !0,
            setTimeout(f, 16))
        }
        function f() {
            const L = new Event("keydown");
            L.key = "k",
            L.metaKey = !0,
            window.dispatchEvent(L),
            setTimeout( () => {
                document.querySelector(".DocSearch-Modal") || f()
            }
            , 16)
        }
        const d = T(!1)
          , y = "";
        return (L, g) => {
            var V;
            return a(),
            u("div", hs, [r(y) === "local" ? (a(),
            u(w, {
                key: 0
            }, [d.value ? (a(),
            k(r(e), {
                key: 0,
                onClose: g[0] || (g[0] = I => d.value = !1)
            })) : h("", !0), v("div", ms, [_(be, {
                onClick: g[1] || (g[1] = I => d.value = !0)
            })])], 64)) : r(y) === "algolia" ? (a(),
            u(w, {
                key: 1
            }, [n.value ? (a(),
            k(r(t), {
                key: 0,
                algolia: ((V = r(o).search) == null ? void 0 : V.options) ?? r(o).algolia,
                onVnodeBeforeMount: g[2] || (g[2] = I => i.value = !0)
            }, null, 8, ["algolia"])) : h("", !0), i.value ? h("", !0) : (a(),
            u("div", _s, [_(be, {
                onClick: l
            })]))], 64)) : h("", !0)])
        }
    }
})
  , bs = m({
    __name: "VPNavBarSocialLinks",
    setup(s) {
        const {theme: e} = P();
        return (t, o) => r(e).socialLinks ? (a(),
        k(ke, {
            key: 0,
            class: "VPNavBarSocialLinks",
            links: r(e).socialLinks
        }, null, 8, ["links"])) : h("", !0)
    }
})
  , gs = b(bs, [["__scopeId", "data-v-ef6192dc"]])
  , $s = ["href", "rel", "target"]
  , ys = {
    key: 1
}
  , Ps = {
    key: 2
}
  , Ls = m({
    __name: "VPNavBarTitle",
    setup(s) {
        const {site: e, theme: t} = P()
          , {hasSidebar: o} = O()
          , {currentLang: n} = R()
          , i = $( () => {
            var d;
            return typeof t.value.logoLink == "string" ? t.value.logoLink : (d = t.value.logoLink) == null ? void 0 : d.link
        }
        )
          , l = $( () => {
            var d;
            return typeof t.value.logoLink == "string" || (d = t.value.logoLink) == null ? void 0 : d.rel
        }
        )
          , f = $( () => {
            var d;
            return typeof t.value.logoLink == "string" || (d = t.value.logoLink) == null ? void 0 : d.target
        }
        );
        return (d, y) => (a(),
        u("div", {
            class: M(["VPNavBarTitle", {
                "has-sidebar": r(o)
            }])
        }, [v("a", {
            class: "title",
            href: i.value ?? r(pe)(r(n).link),
            rel: l.value,
            target: f.value
        }, [c(d.$slots, "nav-bar-title-before", {}, void 0, !0), r(t).logo ? (a(),
        k(Y, {
            key: 0,
            class: "logo",
            image: r(t).logo
        }, null, 8, ["image"])) : h("", !0), r(t).siteTitle ? (a(),
        u("span", ys, N(r(t).siteTitle), 1)) : r(t).siteTitle === void 0 ? (a(),
        u("span", Ps, N(r(e).title), 1)) : h("", !0), c(d.$slots, "nav-bar-title-after", {}, void 0, !0)], 8, $s)], 2))
    }
})
  , Vs = b(Ls, [["__scopeId", "data-v-0ad69264"]])
  , Ss = {
    class: "items"
}
  , Ts = {
    class: "title"
}
  , Ns = m({
    __name: "VPNavBarTranslations",
    setup(s) {
        const {theme: e} = P()
          , {localeLinks: t, currentLang: o} = R({
            correspondingLink: !0
        });
        return (n, i) => r(t).length && r(o).label ? (a(),
        k(_e, {
            key: 0,
            class: "VPNavBarTranslations",
            icon: "vpi-languages",
            label: r(e).langMenuLabel || "Change language"
        }, {
            default: p( () => [v("div", Ss, [v("p", Ts, N(r(o).label), 1), (a(!0),
            u(w, null, H(r(t), l => (a(),
            k(te, {
                key: l.link,
                item: l
            }, null, 8, ["item"]))), 128))])]),
            _: 1
        }, 8, ["label"])) : h("", !0)
    }
})
  , Ms = b(Ns, [["__scopeId", "data-v-acee064b"]])
  , Is = {
    class: "wrapper"
}
  , ws = {
    class: "container"
}
  , As = {
    class: "title"
}
  , Bs = {
    class: "content"
}
  , Hs = {
    class: "content-body"
}
  , Cs = m({
    __name: "VPNavBar",
    props: {
        isScreenOpen: {
            type: Boolean
        }
    },
    emits: ["toggle-screen"],
    setup(s) {
        const e = s
          , {y: t} = Le()
          , {hasSidebar: o} = O()
          , {frontmatter: n} = P()
          , i = T({});
        return ve( () => {
            i.value = {
                "has-sidebar": o.value,
                home: n.value.layout === "home",
                top: t.value === 0,
                "screen-open": e.isScreenOpen
            }
        }
        ),
        (l, f) => (a(),
        u("div", {
            class: M(["VPNavBar", i.value])
        }, [v("div", Is, [v("div", ws, [v("div", As, [_(Vs, null, {
            "nav-bar-title-before": p( () => [c(l.$slots, "nav-bar-title-before", {}, void 0, !0)]),
            "nav-bar-title-after": p( () => [c(l.$slots, "nav-bar-title-after", {}, void 0, !0)]),
            _: 3
        })]), v("div", Bs, [v("div", Hs, [c(l.$slots, "nav-bar-content-before", {}, void 0, !0), _(ks, {
            class: "search"
        }), _(us, {
            class: "menu"
        }), _(Ms, {
            class: "translations"
        }), _(bo, {
            class: "appearance"
        }), _(gs, {
            class: "social-links"
        }), _(es, {
            class: "extra"
        }), c(l.$slots, "nav-bar-content-after", {}, void 0, !0), _(os, {
            class: "hamburger",
            active: l.isScreenOpen,
            onClick: f[0] || (f[0] = d => l.$emit("toggle-screen"))
        }, null, 8, ["active"])])])])]), f[1] || (f[1] = v("div", {
            class: "divider"
        }, [v("div", {
            class: "divider-line"
        })], -1))], 2))
    }
})
  , Es = b(Cs, [["__scopeId", "data-v-9fd4d1dd"]])
  , Fs = {
    key: 0,
    class: "VPNavScreenAppearance"
}
  , Ds = {
    class: "text"
}
  , Os = m({
    __name: "VPNavScreenAppearance",
    setup(s) {
        const {site: e, theme: t} = P();
        return (o, n) => r(e).appearance && r(e).appearance !== "force-dark" && r(e).appearance !== "force-auto" ? (a(),
        u("div", Fs, [v("p", Ds, N(r(t).darkModeSwitchLabel || "Appearance"), 1), _(he)])) : h("", !0)
    }
})
  , Gs = b(Os, [["__scopeId", "data-v-a3e2920d"]])
  , Us = ["innerHTML"]
  , js = m({
    __name: "VPNavScreenMenuLink",
    props: {
        item: {}
    },
    setup(s) {
        const e = x("close-screen");
        return (t, o) => (a(),
        k(F, {
            class: "VPNavScreenMenuLink",
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            "no-icon": t.item.noIcon,
            onClick: r(e)
        }, {
            default: p( () => [v("span", {
                innerHTML: t.item.text
            }, null, 8, Us)]),
            _: 1
        }, 8, ["href", "target", "rel", "no-icon", "onClick"]))
    }
})
  , zs = b(js, [["__scopeId", "data-v-fa963d97"]])
  , qs = ["innerHTML"]
  , Ws = m({
    __name: "VPNavScreenMenuGroupLink",
    props: {
        item: {}
    },
    setup(s) {
        const e = x("close-screen");
        return (t, o) => (a(),
        k(F, {
            class: "VPNavScreenMenuGroupLink",
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            "no-icon": t.item.noIcon,
            onClick: r(e)
        }, {
            default: p( () => [v("span", {
                innerHTML: t.item.text
            }, null, 8, qs)]),
            _: 1
        }, 8, ["href", "target", "rel", "no-icon", "onClick"]))
    }
})
  , Ae = b(Ws, [["__scopeId", "data-v-e04f3e85"]])
  , Ks = {
    class: "VPNavScreenMenuGroupSection"
}
  , Rs = {
    key: 0,
    class: "title"
}
  , Js = m({
    __name: "VPNavScreenMenuGroupSection",
    props: {
        text: {},
        items: {}
    },
    setup(s) {
        return (e, t) => (a(),
        u("div", Ks, [e.text ? (a(),
        u("p", Rs, N(e.text), 1)) : h("", !0), (a(!0),
        u(w, null, H(e.items, o => (a(),
        k(Ae, {
            key: o.text,
            item: o
        }, null, 8, ["item"]))), 128))]))
    }
})
  , Ys = b(Js, [["__scopeId", "data-v-f60dbfa7"]])
  , Qs = ["aria-controls", "aria-expanded"]
  , Xs = ["innerHTML"]
  , Zs = ["id"]
  , xs = {
    key: 0,
    class: "item"
}
  , ea = {
    key: 1,
    class: "item"
}
  , ta = {
    key: 2,
    class: "group"
}
  , na = m({
    __name: "VPNavScreenMenuGroup",
    props: {
        text: {},
        items: {}
    },
    setup(s) {
        const e = s
          , t = T(!1)
          , o = $( () => `NavScreenGroup-${e.text.replace(" ", "-").toLowerCase()}`);
        function n() {
            t.value = !t.value
        }
        return (i, l) => (a(),
        u("div", {
            class: M(["VPNavScreenMenuGroup", {
                open: t.value
            }])
        }, [v("button", {
            class: "button",
            "aria-controls": o.value,
            "aria-expanded": t.value,
            onClick: n
        }, [v("span", {
            class: "button-text",
            innerHTML: i.text
        }, null, 8, Xs), l[0] || (l[0] = v("span", {
            class: "vpi-plus button-icon"
        }, null, -1))], 8, Qs), v("div", {
            id: o.value,
            class: "items"
        }, [(a(!0),
        u(w, null, H(i.items, f => (a(),
        u(w, {
            key: JSON.stringify(f)
        }, ["link"in f ? (a(),
        u("div", xs, [_(Ae, {
            item: f
        }, null, 8, ["item"])])) : "component"in f ? (a(),
        u("div", ea, [(a(),
        k(E(f.component), U({
            ref_for: !0
        }, f.props, {
            "screen-menu": ""
        }), null, 16))])) : (a(),
        u("div", ta, [_(Ys, {
            text: f.text,
            items: f.items
        }, null, 8, ["text", "items"])]))], 64))), 128))], 8, Zs)], 2))
    }
})
  , oa = b(na, [["__scopeId", "data-v-d99bfeec"]])
  , sa = {
    key: 0,
    class: "VPNavScreenMenu"
}
  , aa = m({
    __name: "VPNavScreenMenu",
    setup(s) {
        const {theme: e} = P();
        return (t, o) => r(e).nav ? (a(),
        u("nav", sa, [(a(!0),
        u(w, null, H(r(e).nav, n => (a(),
        u(w, {
            key: JSON.stringify(n)
        }, ["link"in n ? (a(),
        k(zs, {
            key: 0,
            item: n
        }, null, 8, ["item"])) : "component"in n ? (a(),
        k(E(n.component), U({
            key: 1,
            ref_for: !0
        }, n.props, {
            "screen-menu": ""
        }), null, 16)) : (a(),
        k(oa, {
            key: 2,
            text: n.text || "",
            items: n.items
        }, null, 8, ["text", "items"]))], 64))), 128))])) : h("", !0)
    }
})
  , ra = m({
    __name: "VPNavScreenSocialLinks",
    setup(s) {
        const {theme: e} = P();
        return (t, o) => r(e).socialLinks ? (a(),
        k(ke, {
            key: 0,
            class: "VPNavScreenSocialLinks",
            links: r(e).socialLinks
        }, null, 8, ["links"])) : h("", !0)
    }
})
  , ia = {
    class: "list"
}
  , la = m({
    __name: "VPNavScreenTranslations",
    setup(s) {
        const {localeLinks: e, currentLang: t} = R({
            correspondingLink: !0
        })
          , o = T(!1);
        function n() {
            o.value = !o.value
        }
        return (i, l) => r(e).length && r(t).label ? (a(),
        u("div", {
            key: 0,
            class: M(["VPNavScreenTranslations", {
                open: o.value
            }])
        }, [v("button", {
            class: "title",
            onClick: n
        }, [l[0] || (l[0] = v("span", {
            class: "vpi-languages icon lang"
        }, null, -1)), j(" " + N(r(t).label) + " ", 1), l[1] || (l[1] = v("span", {
            class: "vpi-chevron-down icon chevron"
        }, null, -1))]), v("ul", ia, [(a(!0),
        u(w, null, H(r(e), f => (a(),
        u("li", {
            key: f.link,
            class: "item"
        }, [_(F, {
            class: "link",
            href: f.link
        }, {
            default: p( () => [j(N(f.text), 1)]),
            _: 2
        }, 1032, ["href"])]))), 128))])], 2)) : h("", !0)
    }
})
  , ca = b(la, [["__scopeId", "data-v-516e4bc3"]])
  , ua = {
    class: "container"
}
  , da = m({
    __name: "VPNavScreen",
    props: {
        open: {
            type: Boolean
        }
    },
    setup(s) {
        const e = T(null)
          , t = Ve(ee ? document.body : null);
        return (o, n) => (a(),
        k(ce, {
            name: "fade",
            onEnter: n[0] || (n[0] = i => t.value = !0),
            onAfterLeave: n[1] || (n[1] = i => t.value = !1)
        }, {
            default: p( () => [o.open ? (a(),
            u("div", {
                key: 0,
                class: "VPNavScreen",
                ref_key: "screen",
                ref: e,
                id: "VPNavScreen"
            }, [v("div", ua, [c(o.$slots, "nav-screen-content-before", {}, void 0, !0), _(aa, {
                class: "menu"
            }), _(ca, {
                class: "translations"
            }), _(Gs, {
                class: "appearance"
            }), _(ra, {
                class: "social-links"
            }), c(o.$slots, "nav-screen-content-after", {}, void 0, !0)])], 512)) : h("", !0)]),
            _: 3
        }))
    }
})
  , va = b(da, [["__scopeId", "data-v-2dd6d0c7"]])
  , pa = {
    key: 0,
    class: "VPNav"
}
  , fa = m({
    __name: "VPNav",
    setup(s) {
        const {isScreenOpen: e, closeScreen: t, toggleScreen: o} = lo()
          , {frontmatter: n} = P()
          , i = $( () => n.value.navbar !== !1);
        return Se("close-screen", t),
        Q( () => {
            ee && document.documentElement.classList.toggle("hide-nav", !i.value)
        }
        ),
        (l, f) => i.value ? (a(),
        u("header", pa, [_(Es, {
            "is-screen-open": r(e),
            onToggleScreen: r(o)
        }, {
            "nav-bar-title-before": p( () => [c(l.$slots, "nav-bar-title-before", {}, void 0, !0)]),
            "nav-bar-title-after": p( () => [c(l.$slots, "nav-bar-title-after", {}, void 0, !0)]),
            "nav-bar-content-before": p( () => [c(l.$slots, "nav-bar-content-before", {}, void 0, !0)]),
            "nav-bar-content-after": p( () => [c(l.$slots, "nav-bar-content-after", {}, void 0, !0)]),
            _: 3
        }, 8, ["is-screen-open", "onToggleScreen"]), _(va, {
            open: r(e)
        }, {
            "nav-screen-content-before": p( () => [c(l.$slots, "nav-screen-content-before", {}, void 0, !0)]),
            "nav-screen-content-after": p( () => [c(l.$slots, "nav-screen-content-after", {}, void 0, !0)]),
            _: 3
        }, 8, ["open"])])) : h("", !0)
    }
})
  , ha = b(fa, [["__scopeId", "data-v-7ad780c2"]])
  , ma = ["role", "tabindex"]
  , _a = {
    key: 1,
    class: "items"
}
  , ka = m({
    __name: "VPSidebarItem",
    props: {
        item: {},
        depth: {}
    },
    setup(s) {
        const e = s
          , {collapsed: t, collapsible: o, isLink: n, isActiveLink: i, hasActiveLink: l, hasChildren: f, toggle: d} = dt($( () => e.item))
          , y = $( () => f.value ? "section" : "div")
          , L = $( () => n.value ? "a" : "div")
          , g = $( () => f.value ? e.depth + 2 === 7 ? "p" : `h${e.depth + 2}` : "p")
          , V = $( () => n.value ? void 0 : "button")
          , I = $( () => [[`level-${e.depth}`], {
            collapsible: o.value
        }, {
            collapsed: t.value
        }, {
            "is-link": n.value
        }, {
            "is-active": i.value
        }, {
            "has-active": l.value
        }]);
        function A(S) {
            "key"in S && S.key !== "Enter" || !e.item.link && d()
        }
        function B() {
            e.item.link && d()
        }
        return (S, C) => {
            const G = W("VPSidebarItem", !0);
            return a(),
            k(E(y.value), {
                class: M(["VPSidebarItem", I.value])
            }, {
                default: p( () => [S.item.text ? (a(),
                u("div", U({
                    key: 0,
                    class: "item",
                    role: V.value
                }, je(S.item.items ? {
                    click: A,
                    keydown: A
                } : {}, !0), {
                    tabindex: S.item.items && 0
                }), [C[1] || (C[1] = v("div", {
                    class: "indicator"
                }, null, -1)), S.item.link ? (a(),
                k(F, {
                    key: 0,
                    tag: L.value,
                    class: "link",
                    href: S.item.link,
                    rel: S.item.rel,
                    target: S.item.target
                }, {
                    default: p( () => [(a(),
                    k(E(g.value), {
                        class: "text",
                        innerHTML: S.item.text
                    }, null, 8, ["innerHTML"]))]),
                    _: 1
                }, 8, ["tag", "href", "rel", "target"])) : (a(),
                k(E(g.value), {
                    key: 1,
                    class: "text",
                    innerHTML: S.item.text
                }, null, 8, ["innerHTML"])), S.item.collapsed != null && S.item.items && S.item.items.length ? (a(),
                u("div", {
                    key: 2,
                    class: "caret",
                    role: "button",
                    "aria-label": "toggle section",
                    onClick: B,
                    onKeydown: ze(B, ["enter"]),
                    tabindex: "0"
                }, C[0] || (C[0] = [v("span", {
                    class: "vpi-chevron-right caret-icon"
                }, null, -1)]), 32)) : h("", !0)], 16, ma)) : h("", !0), S.item.items && S.item.items.length ? (a(),
                u("div", _a, [S.depth < 5 ? (a(!0),
                u(w, {
                    key: 0
                }, H(S.item.items, K => (a(),
                k(G, {
                    key: K.text,
                    item: K,
                    depth: S.depth + 1
                }, null, 8, ["item", "depth"]))), 128)) : h("", !0)])) : h("", !0)]),
                _: 1
            }, 8, ["class"])
        }
    }
})
  , ba = b(ka, [["__scopeId", "data-v-edd2eed8"]])
  , ga = m({
    __name: "VPSidebarGroup",
    props: {
        items: {}
    },
    setup(s) {
        const e = T(!0);
        let t = null;
        return q( () => {
            t = setTimeout( () => {
                t = null,
                e.value = !1
            }
            , 300)
        }
        ),
        qe( () => {
            t != null && (clearTimeout(t),
            t = null)
        }
        ),
        (o, n) => (a(!0),
        u(w, null, H(o.items, i => (a(),
        u("div", {
            key: i.text,
            class: M(["group", {
                "no-transition": e.value
            }])
        }, [_(ba, {
            item: i,
            depth: 0
        }, null, 8, ["item"])], 2))), 128))
    }
})
  , $a = b(ga, [["__scopeId", "data-v-51288d80"]])
  , ya = {
    class: "nav",
    id: "VPSidebarNav",
    "aria-labelledby": "sidebar-aria-label",
    tabindex: "-1"
}
  , Pa = m({
    __name: "VPSidebar",
    props: {
        open: {
            type: Boolean
        }
    },
    setup(s) {
        const {sidebarGroups: e, hasSidebar: t} = O()
          , o = s
          , n = T(null)
          , i = Ve(ee ? document.body : null);
        D([o, n], () => {
            var f;
            o.open ? (i.value = !0,
            (f = n.value) == null || f.focus()) : i.value = !1
        }
        , {
            immediate: !0,
            flush: "post"
        });
        const l = T(0);
        return D(e, () => {
            l.value += 1
        }
        , {
            deep: !0
        }),
        (f, d) => r(t) ? (a(),
        u("aside", {
            key: 0,
            class: M(["VPSidebar", {
                open: f.open
            }]),
            ref_key: "navEl",
            ref: n,
            onClick: d[0] || (d[0] = We( () => {}
            , ["stop"]))
        }, [d[2] || (d[2] = v("div", {
            class: "curtain"
        }, null, -1)), v("nav", ya, [d[1] || (d[1] = v("span", {
            class: "visually-hidden",
            id: "sidebar-aria-label"
        }, " Sidebar Navigation ", -1)), c(f.$slots, "sidebar-nav-before", {}, void 0, !0), (a(),
        k($a, {
            items: r(e),
            key: l.value
        }, null, 8, ["items"])), c(f.$slots, "sidebar-nav-after", {}, void 0, !0)])], 2)) : h("", !0)
    }
})
  , La = b(Pa, [["__scopeId", "data-v-42c4c606"]])
  , Va = m({
    __name: "VPSkipLink",
    setup(s) {
        const e = Z()
          , t = T();
        D( () => e.path, () => t.value.focus());
        function o({target: n}) {
            const i = document.getElementById(decodeURIComponent(n.hash).slice(1));
            if (i) {
                const l = () => {
                    i.removeAttribute("tabindex"),
                    i.removeEventListener("blur", l)
                }
                ;
                i.setAttribute("tabindex", "-1"),
                i.addEventListener("blur", l),
                i.focus(),
                window.scrollTo(0, 0)
            }
        }
        return (n, i) => (a(),
        u(w, null, [v("span", {
            ref_key: "backToTop",
            ref: t,
            tabindex: "-1"
        }, null, 512), v("a", {
            href: "#VPContent",
            class: "VPSkipLink visually-hidden",
            onClick: o
        }, " Skip to content ")], 64))
    }
})
  , Sa = b(Va, [["__scopeId", "data-v-c8291ffa"]])
  , Ta = m({
    __name: "Layout",
    setup(s) {
        const {isOpen: e, open: t, close: o} = O()
          , n = Z();
        D( () => n.path, o),
        ut(e, o);
        const {frontmatter: i} = P()
          , l = Ke()
          , f = $( () => !!l["home-hero-image"]);
        return Se("hero-image-slot-exists", f),
        (d, y) => {
            const L = W("Content");
            return r(i).layout !== !1 ? (a(),
            u("div", {
                key: 0,
                class: M(["Layout", r(i).pageClass])
            }, [c(d.$slots, "layout-top", {}, void 0, !0), _(Sa), _(Xe, {
                class: "backdrop",
                show: r(e),
                onClick: r(o)
            }, null, 8, ["show", "onClick"]), _(ha, null, {
                "nav-bar-title-before": p( () => [c(d.$slots, "nav-bar-title-before", {}, void 0, !0)]),
                "nav-bar-title-after": p( () => [c(d.$slots, "nav-bar-title-after", {}, void 0, !0)]),
                "nav-bar-content-before": p( () => [c(d.$slots, "nav-bar-content-before", {}, void 0, !0)]),
                "nav-bar-content-after": p( () => [c(d.$slots, "nav-bar-content-after", {}, void 0, !0)]),
                "nav-screen-content-before": p( () => [c(d.$slots, "nav-screen-content-before", {}, void 0, !0)]),
                "nav-screen-content-after": p( () => [c(d.$slots, "nav-screen-content-after", {}, void 0, !0)]),
                _: 3
            }), _(io, {
                open: r(e),
                onOpenMenu: r(t)
            }, null, 8, ["open", "onOpenMenu"]), _(La, {
                open: r(e)
            }, {
                "sidebar-nav-before": p( () => [c(d.$slots, "sidebar-nav-before", {}, void 0, !0)]),
                "sidebar-nav-after": p( () => [c(d.$slots, "sidebar-nav-after", {}, void 0, !0)]),
                _: 3
            }, 8, ["open"]), _(Wn, null, {
                "page-top": p( () => [c(d.$slots, "page-top", {}, void 0, !0)]),
                "page-bottom": p( () => [c(d.$slots, "page-bottom", {}, void 0, !0)]),
                "not-found": p( () => [c(d.$slots, "not-found", {}, void 0, !0)]),
                "home-hero-before": p( () => [c(d.$slots, "home-hero-before", {}, void 0, !0)]),
                "home-hero-info-before": p( () => [c(d.$slots, "home-hero-info-before", {}, void 0, !0)]),
                "home-hero-info": p( () => [c(d.$slots, "home-hero-info", {}, void 0, !0)]),
                "home-hero-info-after": p( () => [c(d.$slots, "home-hero-info-after", {}, void 0, !0)]),
                "home-hero-actions-after": p( () => [c(d.$slots, "home-hero-actions-after", {}, void 0, !0)]),
                "home-hero-image": p( () => [c(d.$slots, "home-hero-image", {}, void 0, !0)]),
                "home-hero-after": p( () => [c(d.$slots, "home-hero-after", {}, void 0, !0)]),
                "home-features-before": p( () => [c(d.$slots, "home-features-before", {}, void 0, !0)]),
                "home-features-after": p( () => [c(d.$slots, "home-features-after", {}, void 0, !0)]),
                "doc-footer-before": p( () => [c(d.$slots, "doc-footer-before", {}, void 0, !0)]),
                "doc-before": p( () => [c(d.$slots, "doc-before", {}, void 0, !0)]),
                "doc-after": p( () => [c(d.$slots, "doc-after", {}, void 0, !0)]),
                "doc-top": p( () => [c(d.$slots, "doc-top", {}, void 0, !0)]),
                "doc-bottom": p( () => [c(d.$slots, "doc-bottom", {}, void 0, !0)]),
                "aside-top": p( () => [c(d.$slots, "aside-top", {}, void 0, !0)]),
                "aside-bottom": p( () => [c(d.$slots, "aside-bottom", {}, void 0, !0)]),
                "aside-outline-before": p( () => [c(d.$slots, "aside-outline-before", {}, void 0, !0)]),
                "aside-outline-after": p( () => [c(d.$slots, "aside-outline-after", {}, void 0, !0)]),
                "aside-ads-before": p( () => [c(d.$slots, "aside-ads-before", {}, void 0, !0)]),
                "aside-ads-after": p( () => [c(d.$slots, "aside-ads-after", {}, void 0, !0)]),
                _: 3
            }), _(Qn), c(d.$slots, "layout-bottom", {}, void 0, !0)], 2)) : (a(),
            k(L, {
                key: 1
            }))
        }
    }
})
  , Na = b(Ta, [["__scopeId", "data-v-d8b57b2d"]])
  , ge = {
    Layout: Na,
    enhanceApp: ({app: s}) => {
        s.component("Badge", Je)
    }
}
  , Ia = {
    extends: ge,
    Layout: () => Re(ge.Layout, null, {}),
    enhanceApp({app: s, router: e, siteData: t}) {}
};
export {Ia as R};
