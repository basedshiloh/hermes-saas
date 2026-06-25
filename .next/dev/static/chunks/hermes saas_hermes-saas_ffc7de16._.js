(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hermes saas/hermes-saas/src/components/animation/counter-number-on-scroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CounterNumberOnScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$number$2d$flow$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@number-flow/react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$number$2d$flow$2f$react$2f$dist$2f$NumberFlow$2d$client$2d$BTpPLmzo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__N__as__default$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@number-flow/react/dist/NumberFlow-client-BTpPLmzo.mjs [app-client] (ecmascript) <export N as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const DEFAULT_DURATION = 1.8;
function CounterNumberOnScroll({ value, delay = 0, duration = DEFAULT_DURATION, asChild = true, format, ...props }) {
    _s();
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'div';
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [displayValue, setDisplayValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const setRef = (node)=>{
        elementRef.current = node;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "CounterNumberOnScroll.useGSAP": ()=>{
            if (!elementRef.current) return;
            let startTween = null;
            const trigger = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: elementRef.current,
                start: 'top 90%',
                once: true,
                onEnter: {
                    "CounterNumberOnScroll.useGSAP.trigger": ()=>{
                        startTween = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].delayedCall(delay, {
                            "CounterNumberOnScroll.useGSAP.trigger": ()=>{
                                setDisplayValue(value);
                            }
                        }["CounterNumberOnScroll.useGSAP.trigger"]);
                    }
                }["CounterNumberOnScroll.useGSAP.trigger"]
            });
            return ({
                "CounterNumberOnScroll.useGSAP": ()=>{
                    startTween?.kill();
                    trigger.kill();
                }
            })["CounterNumberOnScroll.useGSAP"];
        }
    }["CounterNumberOnScroll.useGSAP"], {
        scope: elementRef,
        dependencies: [
            value,
            delay
        ]
    });
    const durationMs = duration * 1000;
    const numberFlowTimings = {
        transformTiming: {
            duration: durationMs,
            easing: 'ease-out'
        },
        spinTiming: {
            duration: durationMs,
            easing: 'ease-out'
        },
        opacityTiming: {
            duration: Math.max(250, duration * 450),
            easing: 'ease-out'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: setRef,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$number$2d$flow$2f$react$2f$dist$2f$NumberFlow$2d$client$2d$BTpPLmzo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__N__as__default$3e$__["default"], {
            value: displayValue,
            format: {
                useGrouping: true,
                ...format
            },
            trend: 0,
            ...numberFlowTimings
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/animation/counter-number-on-scroll.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/counter-number-on-scroll.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(CounterNumberOnScroll, "045J1s7iWDKcotGo2xrV+0T6vP0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = CounterNumberOnScroll;
var _c;
__turbopack_context__.k.register(_c, "CounterNumberOnScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/text-reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextReveal",
    ()=>TextReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function TextReveal({ asChild = true, children, delay = 0, ...props }) {
    _s();
    const Component = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'div';
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "TextReveal.useLayoutEffect": ()=>{
            if (!ref.current) return;
            const split = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create(ref.current, {
                type: 'lines',
                mask: 'lines',
                linesClass: 'text-reveal-line'
            });
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "TextReveal.useLayoutEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(split.lines, {
                        yPercent: 110,
                        opacity: 0
                    }, {
                        yPercent: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.08,
                        ease: 'power3.out',
                        delay,
                        scrollTrigger: {
                            trigger: ref.current,
                            start: 'top 90%'
                        },
                        onStart: {
                            "TextReveal.useLayoutEffect.ctx": ()=>{
                                if (ref.current) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(ref.current, {
                                        opacity: 1
                                    });
                                }
                            }
                        }["TextReveal.useLayoutEffect.ctx"]
                    });
                }
            }["TextReveal.useLayoutEffect.ctx"], ref);
            return ({
                "TextReveal.useLayoutEffect": ()=>{
                    split.revert();
                    ctx.revert();
                }
            })["TextReveal.useLayoutEffect"];
        }
    }["TextReveal.useLayoutEffect"], [
        delay
    ]);
    const setRef = (node)=>{
        ref.current = node;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        ref: setRef,
        "data-text-reveal": true,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/text-reveal.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(TextReveal, "JkctLsMDw5W2MbVlMaFRM76c/8g=");
_c = TextReveal;
var _c;
__turbopack_context__.k.register(_c, "TextReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/public/images/ns-img-23.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ns-img-23.6dc02e7b.jpg");}),
"[project]/hermes saas/hermes-saas/public/images/ns-img-23.jpg.mjs { IMAGE => \"[project]/hermes saas/hermes-saas/public/images/ns-img-23.jpg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$23$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/public/images/ns-img-23.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$23$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 649,
    height: 1100,
    blurWidth: 5,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAUDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1Ebu+KoR//9k="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowDotLeftIcon",
    ()=>ArrowDotLeftIcon,
    "ArrowDotRightIcon",
    ()=>ArrowDotRightIcon,
    "ArrowRightIcon",
    ()=>ArrowRightIcon,
    "ArrowUpIcon",
    ()=>ArrowUpIcon,
    "CheckIcon",
    ()=>CheckIcon,
    "FacebookIcon",
    ()=>FacebookIcon,
    "GradientCircleIcon",
    ()=>GradientCircleIcon,
    "InstagramIcon",
    ()=>InstagramIcon,
    "LinkedInIcon",
    ()=>LinkedInIcon,
    "LocationIcon",
    ()=>LocationIcon,
    "StarIcon",
    ()=>StarIcon,
    "XIcon",
    ()=>XIcon,
    "YouTubeIcon",
    ()=>YouTubeIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
;
;
const FacebookIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-5 fill-none stroke-[#F8F9FA]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.75 6.25H12.25C11.6533 6.25 11.081 6.48705 10.659 6.90901C10.2371 7.33097 10 7.90326 10 8.5V19",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 11.5H13",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = FacebookIcon;
const InstagramIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-5 fill-none stroke-[#CED7DE]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z",
                strokeMiterlimit: "10"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.125 1.375H5.875C3.38972 1.375 1.375 3.38972 1.375 5.875V14.125C1.375 16.6103 3.38972 18.625 5.875 18.625H14.125C16.6103 18.625 18.625 16.6103 18.625 14.125V5.875C18.625 3.38972 16.6103 1.375 14.125 1.375Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.875 6.25C15.4963 6.25 16 5.74632 16 5.125C16 4.50368 15.4963 4 14.875 4C14.2537 4 13.75 4.50368 13.75 5.125C13.75 5.74632 14.2537 6.25 14.875 6.25Z"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = InstagramIcon;
const XIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 17 17",
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-[17px] fill-none stroke-[#CED7DE]', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M15.2955 1L9.19287 7.29329M7.11364 9.4375L0.75 16M0.75 1L12.1136 16H15.75L4.38636 1H0.75Z",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
            lineNumber: 56,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = XIcon;
const LinkedInIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 18 18",
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-[18px] fill-none stroke-[#CED7DE]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.5 0.75H1.5C1.08579 0.75 0.75 1.08579 0.75 1.5V16.5C0.75 16.9142 1.08579 17.25 1.5 17.25H16.5C16.9142 17.25 17.25 16.9142 17.25 16.5V1.5C17.25 1.08579 16.9142 0.75 16.5 0.75Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 71,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.25 7.5V13.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 76,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.25 7.5V13.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 77,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.25 10.125C8.25 9.42881 8.52656 8.76113 9.01884 8.26884C9.51113 7.77656 10.1788 7.5 10.875 7.5C11.5712 7.5 12.2389 7.77656 12.7312 8.26884C13.2234 8.76113 13.5 9.42881 13.5 10.125V13.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 78,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.25 5.625C5.87132 5.625 6.375 5.12132 6.375 4.5C6.375 3.87868 5.87132 3.375 5.25 3.375C4.62868 3.375 4.125 3.87868 4.125 4.5C4.125 5.12132 4.62868 5.625 5.25 5.625Z"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 83,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
        lineNumber: 65,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = LinkedInIcon;
const YouTubeIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-[24px] fill-none stroke-[#CED7DE]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22.5406 6.42C22.4218 5.94541 22.1799 5.51057 21.8392 5.15941C21.4986 4.80824 21.0713 4.55318 20.6006 4.42C18.8806 4 12.0006 4 12.0006 4C12.0006 4 5.12057 4 3.40057 4.46C2.92982 4.59318 2.50255 4.84824 2.16192 5.19941C1.82129 5.55057 1.57936 5.98541 1.46057 6.46C1.14579 8.20556 0.991808 9.97631 1.00057 11.75C0.989351 13.537 1.14334 15.3213 1.46057 17.08C1.59153 17.5398 1.83888 17.9581 2.17872 18.2945C2.51855 18.6308 2.93939 18.8738 3.40057 19C5.12057 19.46 12.0006 19.46 12.0006 19.46C12.0006 19.46 18.8806 19.46 20.6006 19C21.0713 18.8668 21.4986 18.6118 21.8392 18.2606C22.1799 17.9094 22.4218 17.4746 22.5406 17C22.8529 15.2676 23.0069 13.5103 23.0006 11.75C23.0118 9.96295 22.8578 8.1787 22.5406 6.42V6.42Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 94,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.75 15.0166L15.5 11.7466L9.75 8.47656V15.0166Z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 99,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = YouTubeIcon;
const StarIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 11 11",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fill-opai-purple size-[11px] shrink-0', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
            lineNumber: 114,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
        lineNumber: 108,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = StarIcon;
const ArrowRightIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fill-none stroke-current', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.33301 8H12.6663",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 3.33325L12.6667 7.99992L8 12.6666",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 127,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
        lineNumber: 119,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = ArrowRightIcon;
const CheckIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fill-none stroke-current', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M13.3337 4L6.00033 11.3333L2.66699 8",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
            lineNumber: 139,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
        lineNumber: 132,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = CheckIcon;
const ArrowUpIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 12 18",
        fill: "none",
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fill-current', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M0.17521 5.2682C-0.0908608 5.58565 -0.0492032 6.0587 0.268254 6.32477C0.585712 6.59084 1.05876 6.54918 1.32483 6.23172L5.00002 1.84673L5.00002 16.75C5.00002 17.1642 5.3358 17.5 5.75002 17.5C6.16423 17.5 6.50002 17.1642 6.50002 16.75L6.50002 1.84803L10.1753 6.23181C10.4414 6.54922 10.9144 6.59081 11.2319 6.3247C11.5493 6.05858 11.5909 5.58553 11.3248 5.26811L7.64149 0.874796C6.66384 -0.291572 4.83506 -0.291625 3.85744 0.874796L0.17521 5.2682Z"
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
            lineNumber: 155,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
        lineNumber: 148,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = ArrowUpIcon;
const GradientCircleIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 10 10",
        fill: "none",
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-2.5 shrink-0', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "5",
                cy: "5",
                r: "5",
                fill: "url(#gradient_circle_icon_paint)"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 167,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "gradient_circle_icon_paint",
                    x1: "5",
                    y1: "0",
                    x2: "5",
                    y2: "10",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            stopColor: "#A585FF"
                        }, void 0, false, {
                            fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                            lineNumber: 177,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "#FFC2AD"
                        }, void 0, false, {
                            fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                            lineNumber: 178,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                    lineNumber: 169,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 168,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
        lineNumber: 160,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c9 = GradientCircleIcon;
const ArrowDotLeftIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fill-current', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 5H14V7H16V5Z"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 192,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13 8H11V10H13V8Z"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 193,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 11H8V13H10V11Z"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 194,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13 14H11V16H13V14Z"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 195,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 17H14V19H16V17Z"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 196,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
        lineNumber: 185,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c10 = ArrowDotLeftIcon;
const LocationIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fill-current', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 6C11.2583 6 10.5333 6.21993 9.91661 6.63199C9.29993 7.04404 8.81928 7.62971 8.53545 8.31494C8.25162 9.00016 8.17736 9.75416 8.32205 10.4816C8.46675 11.209 8.8239 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6ZM12 12C11.555 12 11.12 11.868 10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75097 10.1999 9.70642 9.7475 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.25 10.3467 14.0129 10.919 13.591 11.341C13.169 11.7629 12.5967 12 12 12ZM12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 12.6937 5.11031 15.8138 7.6875 18.7734C8.84552 20.1108 10.1489 21.3151 11.5734 22.3641C11.6995 22.4524 11.8498 22.4998 12.0037 22.4998C12.1577 22.4998 12.308 22.4524 12.4341 22.3641C13.856 21.3147 15.1568 20.1104 16.3125 18.7734C18.8859 15.8138 20.25 12.6937 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5ZM12 20.8125C10.4503 19.5938 5.25 15.1172 5.25 9.75C5.25 7.95979 5.96116 6.2429 7.22703 4.97703C8.4929 3.71116 10.2098 3 12 3C13.7902 3 15.5071 3.71116 16.773 4.97703C18.0388 6.2429 18.75 7.95979 18.75 9.75C18.75 15.1153 13.5497 19.5938 12 20.8125Z"
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
            lineNumber: 208,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
        lineNumber: 201,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c11 = LocationIcon;
const ArrowDotRightIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fill-current', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 5H10V7H8V5Z"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 220,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 8H13V10H11V8Z"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 221,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 11H16V13H14V11Z"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 222,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 14H13V16H11V14Z"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 223,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 17H10V19H8V17Z"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
                lineNumber: 224,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx",
        lineNumber: 213,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c12 = ArrowDotRightIcon;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "FacebookIcon");
__turbopack_context__.k.register(_c1, "InstagramIcon");
__turbopack_context__.k.register(_c2, "XIcon");
__turbopack_context__.k.register(_c3, "LinkedInIcon");
__turbopack_context__.k.register(_c4, "YouTubeIcon");
__turbopack_context__.k.register(_c5, "StarIcon");
__turbopack_context__.k.register(_c6, "ArrowRightIcon");
__turbopack_context__.k.register(_c7, "CheckIcon");
__turbopack_context__.k.register(_c8, "ArrowUpIcon");
__turbopack_context__.k.register(_c9, "GradientCircleIcon");
__turbopack_context__.k.register(_c10, "ArrowDotLeftIcon");
__turbopack_context__.k.register(_c11, "LocationIcon");
__turbopack_context__.k.register(_c12, "ArrowDotRightIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/card/benefit-roi-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BenefitRoiCard",
    ()=>BenefitRoiCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$23$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$23$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/hermes saas/hermes-saas/public/images/ns-img-23.jpg.mjs { IMAGE => "[project]/hermes saas/hermes-saas/public/images/ns-img-23.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$counter$2d$number$2d$on$2d$scroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/counter-number-on-scroll.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const BenefitRoiCard = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative flex h-[350px] flex-col items-center justify-end overflow-hidden rounded-[20px] p-6 md:h-[550px]', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$23$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$23$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                alt: "average-roi",
                fill: true,
                className: "object-cover object-center",
                sizes: "(max-width: 768px) 100vw, 25vw"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/card/benefit-roi-card.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-accent/5 relative z-10 w-full space-y-6 rounded-2xl p-6 backdrop-blur-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-heading-5 text-accent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$counter$2d$number$2d$on$2d$scroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 9.2,
                                format: {
                                    minimumFractionDigits: 1,
                                    maximumFractionDigits: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/card/benefit-roi-card.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "% Average ROI"
                            }, void 0, false, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/card/benefit-roi-card.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/card/benefit-roi-card.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-inter-tight text-tagline-3 text-accent font-normal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/card/benefit-roi-card.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$counter$2d$number$2d$on$2d$scroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: 224
                                    }, void 0, false, {
                                        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/card/benefit-roi-card.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/card/benefit-roi-card.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-primary-500 flex h-[37px] w-7 items-center justify-center rounded-[24px] px-2 py-2.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowUpIcon"], {
                                    className: "h-[18px] w-4 fill-white"
                                }, void 0, false, {
                                    fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/card/benefit-roi-card.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/card/benefit-roi-card.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-inter-tight text-tagline-3 text-accent font-normal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$counter$2d$number$2d$on$2d$scroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: 88
                                    }, void 0, false, {
                                        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/card/benefit-roi-card.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "%"
                                    }, void 0, false, {
                                        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/card/benefit-roi-card.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/card/benefit-roi-card.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/card/benefit-roi-card.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/card/benefit-roi-card.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/card/benefit-roi-card.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BenefitRoiCard;
var _c;
__turbopack_context__.k.register(_c, "BenefitRoiCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccordionItemValueContext",
    ()=>AccordionItemValueContext,
    "AccordionProvider",
    ()=>AccordionProvider,
    "accordionDataState",
    ()=>accordionDataState,
    "useAccordion",
    ()=>useAccordion,
    "useAccordionItemValue",
    ()=>useAccordionItemValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
function accordionDataState(open) {
    return open ? 'open' : 'closed';
}
const AccordionContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function parseDefaultOpen(defaultOpen, type) {
    if (defaultOpen == null || defaultOpen === '') {
        return type === 'multiple' ? [] : null;
    }
    if (Array.isArray(defaultOpen)) {
        return type === 'single' ? defaultOpen[0] ?? null : defaultOpen;
    }
    return type === 'single' ? defaultOpen : [
        defaultOpen
    ];
}
const AccordionProvider = ({ children, defaultOpen, type = 'single' })=>{
    _s();
    const [openValue, setOpenValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AccordionProvider.useState": ()=>parseDefaultOpen(defaultOpen, type)
    }["AccordionProvider.useState"]);
    const isOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AccordionProvider.useCallback[isOpen]": (value)=>{
            if (type === 'single') {
                return openValue === value;
            }
            return openValue.includes(value);
        }
    }["AccordionProvider.useCallback[isOpen]"], [
        type,
        openValue
    ]);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AccordionProvider.useCallback[toggle]": (value)=>{
            setOpenValue({
                "AccordionProvider.useCallback[toggle]": (prev)=>{
                    if (type === 'single') {
                        const current = prev;
                        return current === value ? null : value;
                    }
                    const current = prev ?? [];
                    return current.includes(value) ? current.filter({
                        "AccordionProvider.useCallback[toggle]": (v)=>v !== value
                    }["AccordionProvider.useCallback[toggle]"]) : [
                        ...current,
                        value
                    ];
                }
            }["AccordionProvider.useCallback[toggle]"]);
        }
    }["AccordionProvider.useCallback[toggle]"], [
        type
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AccordionProvider.useMemo[value]": ()=>({
                type,
                openValue,
                toggle,
                isOpen
            })
    }["AccordionProvider.useMemo[value]"], [
        type,
        openValue,
        toggle,
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-context.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AccordionProvider, "DvKPWXAa3UV8nFLvkYIm4MH0n8M=");
_c = AccordionProvider;
function useAccordion() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AccordionContext);
    if (!ctx) {
        throw new Error('Accordion components must be used within an <Accordion>');
    }
    return ctx;
}
_s1(useAccordion, "/dMy7t63NXD4eYACoT93CePwGrg=");
const AccordionItemValueContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useAccordionItemValue() {
    _s2();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AccordionItemValueContext);
    if (value == null) {
        throw new Error('AccordionAction/AccordionContent must be used inside AccordionItem');
    }
    return value;
}
_s2(useAccordionItemValue, "ksutO2/Ix3UeCrGnhyM+QEP505Y=");
var _c;
__turbopack_context__.k.register(_c, "AccordionProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const AccordionRoot = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_s(function AccordionRoot({ className, children, role, 'aria-label': ariaLabel }, ref) {
    _s();
    const { type, openValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"])();
    const hasOpen = type === 'single' ? openValue != null : Array.isArray(openValue) && openValue.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('accordion w-full space-y-3', className),
        "data-state": (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accordionDataState"])(hasOpen),
        role: role,
        "aria-label": ariaLabel ?? 'Accordion',
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion.tsx",
        lineNumber: 34,
        columnNumber: 7
    }, this);
}, "dmkD7lYaYFDJO6eLN2hARzIQA+g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"]
    ];
}));
_c = AccordionRoot;
AccordionRoot.displayName = 'AccordionRoot';
const Accordion = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = function Accordion({ children, defaultOpen, type = 'single', className, role, 'aria-label': ariaLabel }, ref) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionProvider"], {
        defaultOpen: defaultOpen,
        type: type,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionRoot, {
            ref: ref,
            className: className,
            role: role,
            "aria-label": ariaLabel,
            children: children
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
});
_c2 = Accordion;
Accordion.displayName = 'Accordion';
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AccordionRoot");
__turbopack_context__.k.register(_c1, "Accordion$forwardRef");
__turbopack_context__.k.register(_c2, "Accordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-item.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccordionItem",
    ()=>AccordionItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const AccordionItem = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function AccordionItem({ children, value, className }, ref) {
    _s();
    const { isOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"])();
    const open = isOpen(value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItemValueContext"].Provider, {
        value: value,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
            "data-state": (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accordionDataState"])(open),
            children: children
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-item.tsx",
            lineNumber: 20,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-item.tsx",
        lineNumber: 19,
        columnNumber: 7
    }, this);
}, "DVY2qh11b/0mQwmWXJnO7juWjxU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"]
    ];
})), "DVY2qh11b/0mQwmWXJnO7juWjxU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"]
    ];
});
_c1 = AccordionItem;
AccordionItem.displayName = 'AccordionItem';
var _c, _c1;
__turbopack_context__.k.register(_c, "AccordionItem$forwardRef");
__turbopack_context__.k.register(_c1, "AccordionItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-plus-icon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccordionPlusIcon",
    ()=>AccordionPlusIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
'use client';
;
;
;
const AccordionPlusIcon = ({ open })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-state": (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accordionDataState"])(open),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('border-background-6 relative size-5 rounded-full border px-[8.5px] duration-300 ease-in-out', open && 'border-white/50', 'before:bg-background-6 before:absolute before:top-1/2 before:left-1/2 before:h-[8.5px] before:w-px before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:transition-transform before:duration-300 before:content-[""]', open && 'before:rotate-90 before:bg-white/90', 'after:bg-background-6 after:absolute after:top-1/2 after:left-1/2 after:h-[8.5px] after:w-px after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-90 after:rounded-full after:transition-transform after:duration-300 after:content-[""]', open && 'after:bg-white/90'),
        "aria-hidden": true
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-plus-icon.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = AccordionPlusIcon;
var _c;
__turbopack_context__.k.register(_c, "AccordionPlusIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-action.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccordionAction",
    ()=>AccordionAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$plus$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-plus-icon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const AccordionAction = ({ children, className, showIcon = true })=>{
    _s();
    const { toggle, isOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"])();
    const itemValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordionItemValue"])();
    const open = isOpen(itemValue);
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accordionDataState"])(open);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: "text-heading-6",
        "data-state": state,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-heading-6 relative flex w-full cursor-pointer items-center justify-between text-left transition-all duration-300 ease-in-out', 'font-inter-tight text-tagline-2 text-white focus:outline-none', className),
            onClick: ()=>toggle(itemValue),
            "aria-expanded": open,
            "aria-controls": `accordion-content-${itemValue}`,
            id: `accordion-action-${itemValue}`,
            "data-state": state,
            children: [
                children,
                showIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$plus$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionPlusIcon"], {
                    open: open
                }, void 0, false, {
                    fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-action.tsx",
                    lineNumber: 36,
                    columnNumber: 22
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-action.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-action.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AccordionAction, "DAAUfkrRJHpLEXlDKOFa6MjddEA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordionItemValue"]
    ];
});
_c = AccordionAction;
var _c;
__turbopack_context__.k.register(_c, "AccordionAction");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/accordion-text-reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccordionTextReveal",
    ()=>AccordionTextReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
function AccordionTextReveal({ children, open }) {
    _s();
    const scopeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const splitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "AccordionTextReveal.useGSAP": ()=>{
            const paragraph = scopeRef.current?.querySelector('p');
            if (!paragraph?.textContent?.trim()) return;
            const revertSplit = {
                "AccordionTextReveal.useGSAP.revertSplit": ()=>{
                    splitRef.current?.revert();
                    splitRef.current = null;
                }
            }["AccordionTextReveal.useGSAP.revertSplit"];
            if (!open) {
                revertSplit();
                return;
            }
            revertSplit();
            splitRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create(paragraph, {
                type: 'lines',
                mask: 'lines',
                linesClass: 'text-reveal-line'
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(splitRef.current.lines, {
                yPercent: 110,
                opacity: 0
            }, {
                yPercent: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.08,
                ease: 'power3.out'
            });
            return revertSplit;
        }
    }["AccordionTextReveal.useGSAP"], {
        scope: scopeRef,
        dependencies: [
            open
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: scopeRef,
        className: "w-full transform-gpu [&_.text-reveal-line]:transform-gpu [&_.text-reveal-line]:backface-hidden [&_p]:transform-gpu",
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/accordion-text-reveal.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(AccordionTextReveal, "lXgtj7lQsalCOwQuexIeNZsAXN8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = AccordionTextReveal;
var _c;
__turbopack_context__.k.register(_c, "AccordionTextReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccordionContent",
    ()=>AccordionContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$accordion$2d$text$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/accordion-text-reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const AccordionContent = ({ children, className, contentClassName, animateLines = true })=>{
    _s();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordionItemValue"])();
    const { isOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"])();
    const open = isOpen(value);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeRafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AccordionContent.useEffect": ()=>{
            const el = contentRef.current;
            if (!el) return;
            if (open) {
                const targetHeight = el.scrollHeight;
                setHeight(targetHeight);
                const onTransitionEnd = {
                    "AccordionContent.useEffect.onTransitionEnd": (e)=>{
                        if (e.propertyName === 'height') {
                            setHeight('auto');
                        }
                    }
                }["AccordionContent.useEffect.onTransitionEnd"];
                el.addEventListener('transitionend', onTransitionEnd);
                return ({
                    "AccordionContent.useEffect": ()=>el.removeEventListener('transitionend', onTransitionEnd)
                })["AccordionContent.useEffect"];
            } else {
                // Match reference accordion.js closeItem: set current height, then after 80ms collapse (height 300ms ease-in-out)
                const current = el.scrollHeight;
                setHeight(current);
                closeTimeoutRef.current = setTimeout({
                    "AccordionContent.useEffect": ()=>{
                        closeRafRef.current = requestAnimationFrame({
                            "AccordionContent.useEffect": ()=>setHeight(0)
                        }["AccordionContent.useEffect"]);
                    }
                }["AccordionContent.useEffect"], 80);
                return ({
                    "AccordionContent.useEffect": ()=>{
                        if (closeTimeoutRef.current !== null) {
                            clearTimeout(closeTimeoutRef.current);
                            closeTimeoutRef.current = null;
                        }
                        if (closeRafRef.current !== null) {
                            cancelAnimationFrame(closeRafRef.current);
                            closeRafRef.current = null;
                        }
                    }
                })["AccordionContent.useEffect"];
            }
        }
    }["AccordionContent.useEffect"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: contentRef,
        id: `accordion-content-${value}`,
        "aria-labelledby": `accordion-action-${value}`,
        "aria-hidden": !open,
        "data-state": (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accordionDataState"])(open),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('accordion-content w-full overflow-hidden transition-[height,opacity] duration-300 ease-in-out', !open && 'opacity-0', open && 'opacity-100', className),
        style: {
            height: typeof height === 'number' ? `${height}px` : height
        },
        children: animateLines ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$accordion$2d$text$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTextReveal"], {
            open: open,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: contentClassName,
                children: children
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-content.tsx",
                lineNumber: 84,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-content.tsx",
            lineNumber: 83,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: contentClassName,
                children: children
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-content.tsx",
                lineNumber: 88,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-content.tsx",
            lineNumber: 87,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-content.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AccordionContent, "dOC0y+iKbHexp2JFB8ycRWRtbJM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordionItemValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"]
    ];
});
_c = AccordionContent;
var _c;
__turbopack_context__.k.register(_c, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-icon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccordionIcon",
    ()=>AccordionIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const AccordionIcon = ({ className })=>{
    _s();
    const { isOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"])();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordionItemValue"])();
    const open = isOpen(value);
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accordionDataState"])(open);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-state": state,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('accordion-icon group flex size-6 items-center justify-center transition-transform duration-400 ease-in-out data-[state=open]:rotate-180', className),
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 28 28",
            fill: "none",
            className: "stroke-secondary size-7",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4.375 14H23.625",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-icon.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 4.375V23.625",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "transition-all duration-400 ease-in-out group-data-[state=open]:opacity-0"
                }, void 0, false, {
                    fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-icon.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-icon.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-icon.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AccordionIcon, "VVHrRoALUyiUrapCito9sQ/ORqk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$accordion$2f$accordion$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordionItemValue"]
    ];
});
_c = AccordionIcon;
AccordionIcon.displayName = 'AccordionIcon';
var _c;
__turbopack_context__.k.register(_c, "AccordionIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-title.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccordionTitle",
    ()=>AccordionTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
'use client';
;
;
const AccordionTitle = ({ children, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-heading-6! font-inter-tight text-secondary', className),
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/accordion/accordion-title.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = AccordionTitle;
AccordionTitle.displayName = 'AccordionTitle';
var _c;
__turbopack_context__.k.register(_c, "AccordionTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/public/images/bottom-gradient.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/bottom-gradient.b73a7412.svg");}),
"[project]/hermes saas/hermes-saas/public/images/bottom-gradient.svg.mjs { IMAGE => \"[project]/hermes saas/hermes-saas/public/images/bottom-gradient.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$bottom$2d$gradient$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/public/images/bottom-gradient.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$bottom$2d$gradient$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1920,
    height: 789,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/public/images/ns-avatar-11.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ns-avatar-11.851bd77b.jpg");}),
"[project]/hermes saas/hermes-saas/public/images/ns-avatar-11.jpg.mjs { IMAGE => \"[project]/hermes saas/hermes-saas/public/images/ns-avatar-11.jpg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$11$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/public/images/ns-avatar-11.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$11$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 784,
    height: 784,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1D95v/h2/rVCP/9k="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/public/images/ns-avatar-13.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ns-avatar-13.851bd77b.jpg");}),
"[project]/hermes saas/hermes-saas/public/images/ns-avatar-13.jpg.mjs { IMAGE => \"[project]/hermes saas/hermes-saas/public/images/ns-avatar-13.jpg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$13$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/public/images/ns-avatar-13.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$13$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 784,
    height: 784,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1D95v/h2/rVCP/9k="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/public/images/ns-avatar-14.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ns-avatar-14.851bd77b.jpg");}),
"[project]/hermes saas/hermes-saas/public/images/ns-avatar-14.jpg.mjs { IMAGE => \"[project]/hermes saas/hermes-saas/public/images/ns-avatar-14.jpg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$14$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/public/images/ns-avatar-14.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$14$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 784,
    height: 784,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1D95v/h2/rVCP/9k="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/public/images/ns-img-27.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ns-img-27.53e56693.svg");}),
"[project]/hermes saas/hermes-saas/public/images/ns-img-27.svg.mjs { IMAGE => \"[project]/hermes saas/hermes-saas/public/images/ns-img-27.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$27$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/public/images/ns-img-27.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$27$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 113,
    height: 51,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/public/images/ns-img-28.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ns-img-28.797b2734.svg");}),
"[project]/hermes saas/hermes-saas/public/images/ns-img-28.svg.mjs { IMAGE => \"[project]/hermes saas/hermes-saas/public/images/ns-img-28.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$28$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/public/images/ns-img-28.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$28$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 106,
    height: 52,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/public/images/ns-img-3.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ns-img-3.02a88627.png");}),
"[project]/hermes saas/hermes-saas/public/images/ns-img-3.png.mjs { IMAGE => \"[project]/hermes saas/hermes-saas/public/images/ns-img-3.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/public/images/ns-img-3.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 2580,
    height: 1594,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAcUlEQVR42l2Kuw3CYBCD/3HoKGAlRqMIYzAANRIToDR5SvE94zyUIif5zmd/Raa8q+oTEKgazHwVJkXzj750XX8bhvElIkkgzT3NjF6Tg0JzBVAtwVL4GeC6MKyChXvs2qCIQPl9P4+2qd98GGRu9xBmexqXhSiIH8QAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/avatar-reveal/avatar-reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useRevealRegister",
    ()=>useRevealRegister
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const RevealContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(_c = ()=>{});
_c1 = RevealContext;
const useRevealRegister = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(RevealContext);
};
_s(useRevealRegister, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const AvatarReveal = ({ children, className, direction = 'left', offset = 40, scale = 0, stagger = 0.1, markers = true })=>{
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const itemsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [readyTick, setReadyTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // register items (called by RevealItem callback-ref)
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AvatarReveal.useMemo[register]": ()=>{
            return ({
                "AvatarReveal.useMemo[register]": (el)=>{
                    if (!el) return;
                    // avoid duplicates
                    if (!itemsRef.current.includes(el)) {
                        itemsRef.current.push(el);
                        // trigger useGSAP to run after items exist
                        setReadyTick({
                            "AvatarReveal.useMemo[register]": (v)=>v + 1
                        }["AvatarReveal.useMemo[register]"]);
                    }
                }
            })["AvatarReveal.useMemo[register]"];
        }
    }["AvatarReveal.useMemo[register]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "AvatarReveal.useGSAP": ()=>{
            if (!itemsRef.current.length) return;
            // kill any existing triggers inside this scope (important in dev/strict mode)
            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                "AvatarReveal.useGSAP": (t)=>{
                    const triggerEl = t.vars.trigger;
                    if (triggerEl && containerRef.current?.contains(triggerEl)) t.kill();
                }
            }["AvatarReveal.useGSAP"]);
            itemsRef.current.forEach({
                "AvatarReveal.useGSAP": (el, index)=>{
                    const fromVars = {
                        opacity: 0,
                        scale,
                        filter: 'blur(5px)'
                    };
                    switch(direction){
                        case 'left':
                            fromVars.x = -offset;
                            break;
                        case 'right':
                            fromVars.x = offset;
                            break;
                        case 'down':
                            fromVars.y = offset;
                            break;
                        case 'up':
                        default:
                            fromVars.y = -offset;
                            break;
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(el, fromVars, {
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        filter: 'blur(0px)',
                        duration: 1.5,
                        delay: index * stagger,
                        ease: 'elastic.out(1,0.7)',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                            end: 'bottom 20%'
                        }
                    });
                }
            }["AvatarReveal.useGSAP"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
        }
    }["AvatarReveal.useGSAP"], {
        scope: containerRef,
        dependencies: [
            readyTick,
            direction,
            offset,
            scale,
            stagger,
            markers
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealContext.Provider, {
        value: register,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/avatar-reveal/avatar-reveal.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/avatar-reveal/avatar-reveal.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(AvatarReveal, "Xz2tonCQsKJPlRXpWu4jSWivILQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c2 = AvatarReveal;
const __TURBOPACK__default__export__ = AvatarReveal;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "RevealContext$createContext");
__turbopack_context__.k.register(_c1, "RevealContext");
__turbopack_context__.k.register(_c2, "AvatarReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/avatar-reveal/avatar-item.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$avatar$2d$reveal$2f$avatar$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/avatar-reveal/avatar-reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const AvatarItem = ({ children, className, ...rest })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$avatar$2d$reveal$2f$avatar$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRevealRegister"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AvatarItem.useEffect": ()=>{
            register(ref.current);
        }
    }["AvatarItem.useEffect"], [
        register
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        "data-ns-avatar": true,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/avatar-reveal/avatar-item.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AvatarItem, "2BHc6Z9NwIP2kntW7WqzEaU9P9U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$avatar$2d$reveal$2f$avatar$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRevealRegister"]
    ];
});
_c = AvatarItem;
const __TURBOPACK__default__export__ = AvatarItem;
var _c;
__turbopack_context__.k.register(_c, "AvatarItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/public/images/icons/email-auth.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/email-auth.f72d59d4.svg");}),
"[project]/hermes saas/hermes-saas/public/images/icons/email-auth.svg.mjs { IMAGE => \"[project]/hermes saas/hermes-saas/public/images/icons/email-auth.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$email$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/public/images/icons/email-auth.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$email$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/email-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmailForm",
    ()=>EmailForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$email$2d$auth$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$email$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/hermes saas/hermes-saas/public/images/icons/email-auth.svg.mjs { IMAGE => "[project]/hermes saas/hermes-saas/public/images/icons/email-auth.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$button$2f$button$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/button/button-icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function EmailForm({ ref }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        ref: ref,
        className: "space-y-4",
        onSubmit: (event)=>event.preventDefault(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$email$2d$auth$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$email$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "",
                    width: 20,
                    height: 20,
                    className: "pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2"
                }, void 0, false, {
                    fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/email-form.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    required: true,
                    placeholder: "name@example.com",
                    className: "text-tagline-3 h-11 w-full rounded-full border border-secondary/10 bg-white pr-12 pl-10 text-secondary outline-secondary placeholder:text-secondary/60 focus-visible:outline-1"
                }, void 0, false, {
                    fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/email-form.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "group absolute top-1/2 right-1 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-secondary/20 bg-secondary transition-transform duration-300",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$button$2f$button$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonIcon"], {
                        wrapperClassName: "flex size-full items-center justify-center overflow-hidden rounded-full bg-transparent",
                        iconClassName: "size-5 fill-white"
                    }, void 0, false, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/email-form.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/email-form.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/email-form.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/email-form.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = EmailForm;
var _c;
__turbopack_context__.k.register(_c, "EmailForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/public/images/icons/apple-auth.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/apple-auth.296bf61b.svg");}),
"[project]/hermes saas/hermes-saas/public/images/icons/apple-auth.svg.mjs { IMAGE => \"[project]/hermes saas/hermes-saas/public/images/icons/apple-auth.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$apple$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/public/images/icons/apple-auth.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$apple$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/public/images/icons/github-auth.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/github-auth.9ddce46d.svg");}),
"[project]/hermes saas/hermes-saas/public/images/icons/github-auth.svg.mjs { IMAGE => \"[project]/hermes saas/hermes-saas/public/images/icons/github-auth.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$github$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/public/images/icons/github-auth.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$github$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/public/images/icons/google-auth.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/google-auth.61edba55.svg");}),
"[project]/hermes saas/hermes-saas/public/images/icons/google-auth.svg.mjs { IMAGE => \"[project]/hermes saas/hermes-saas/public/images/icons/google-auth.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$google$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/public/images/icons/google-auth.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$google$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/public/images/icons/microsoft-auth.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/microsoft-auth.1bef7fe4.svg");}),
"[project]/hermes saas/hermes-saas/public/images/icons/microsoft-auth.svg.mjs { IMAGE => \"[project]/hermes saas/hermes-saas/public/images/icons/microsoft-auth.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$microsoft$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/public/images/icons/microsoft-auth.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$microsoft$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 18,
    height: 18,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/public/images/icons/twitter-auth.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/twitter-auth.f275edd8.svg");}),
"[project]/hermes saas/hermes-saas/public/images/icons/twitter-auth.svg.mjs { IMAGE => \"[project]/hermes saas/hermes-saas/public/images/icons/twitter-auth.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$twitter$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/public/images/icons/twitter-auth.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$twitter$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$apple$2d$auth$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$apple$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/hermes saas/hermes-saas/public/images/icons/apple-auth.svg.mjs { IMAGE => "[project]/hermes saas/hermes-saas/public/images/icons/apple-auth.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$github$2d$auth$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$github$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/hermes saas/hermes-saas/public/images/icons/github-auth.svg.mjs { IMAGE => "[project]/hermes saas/hermes-saas/public/images/icons/github-auth.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$google$2d$auth$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$google$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/hermes saas/hermes-saas/public/images/icons/google-auth.svg.mjs { IMAGE => "[project]/hermes saas/hermes-saas/public/images/icons/google-auth.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$microsoft$2d$auth$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$microsoft$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/hermes saas/hermes-saas/public/images/icons/microsoft-auth.svg.mjs { IMAGE => "[project]/hermes saas/hermes-saas/public/images/icons/microsoft-auth.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$twitter$2d$auth$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$twitter$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/hermes saas/hermes-saas/public/images/icons/twitter-auth.svg.mjs { IMAGE => "[project]/hermes saas/hermes-saas/public/images/icons/twitter-auth.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const providers = [
    {
        id: 'google',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$google$2d$auth$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$google$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        className: 'size-5'
    },
    {
        id: 'apple',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$apple$2d$auth$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$apple$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        className: 'size-5'
    },
    {
        id: 'microsoft',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$microsoft$2d$auth$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$microsoft$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        className: 'size-4.5'
    },
    {
        id: 'github',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$github$2d$auth$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$github$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        className: 'size-5'
    },
    {
        id: 'twitter',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$twitter$2d$auth$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$icons$2f$twitter$2d$auth$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        className: 'size-5'
    }
];
function Providers({ ref }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "mb-7 grid grid-cols-5 gap-2.5",
        children: providers.map(({ id, icon, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "text-tagline-3 flex h-10 w-full items-center justify-center rounded-2xl bg-secondary/10 text-secondary/80 transition-transform duration-300 hover:scale-95",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: icon,
                    alt: "",
                    width: 20,
                    height: 20,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('shrink-0', className)
                }, void 0, false, {
                    fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/providers.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this)
            }, id, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/providers.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/providers.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Panel",
    ()=>Panel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$modal$2f$auth$2f$email$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/email-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$modal$2f$auth$2f$providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/providers.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function Panel({ panelRef, registerItem, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: panelRef,
        className: "relative z-20 w-full max-w-[360px] rounded-3xl border border-stroke-3 bg-white p-6",
        onClick: (event)=>event.stopPropagation(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                ref: registerItem(0),
                onClick: onClose,
                className: "absolute top-4 right-4 z-30 flex size-8 cursor-pointer items-center justify-center rounded-full bg-secondary/10 text-secondary transition-colors duration-300 hover:text-secondary/80",
                "aria-label": "Close auth modal",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    className: "size-4 fill-none stroke-current",
                    "aria-hidden": true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 6L6 18M6 6l12 12",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/panel.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/panel.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/panel.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: registerItem(1),
                className: "mb-7 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-heading-5 text-secondary",
                        children: "Welcome back"
                    }, void 0, false, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/panel.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-tagline-3 mt-2 text-secondary/60",
                        children: "Sign in to your account to continue"
                    }, void 0, false, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/panel.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/panel.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$modal$2f$auth$2f$providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Providers"], {
                ref: registerItem(2)
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/panel.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: registerItem(3),
                className: "mb-6 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-px w-full bg-secondary/10"
                    }, void 0, false, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/panel.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-tagline-4 shrink-0 text-secondary/50",
                        children: "Or continue with email"
                    }, void 0, false, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/panel.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-px w-full bg-secondary/10"
                    }, void 0, false, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/panel.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/panel.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$modal$2f$auth$2f$email$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailForm"], {
                ref: registerItem(4)
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/panel.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                ref: registerItem(5),
                className: "text-tagline-3 mt-6 text-center text-secondary/40",
                children: "By clicking continue, you agree to our Terms of Service and Privacy Policy."
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/panel.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/panel.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Panel;
var _c;
__turbopack_context__.k.register(_c, "Panel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/use-animation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnimation",
    ()=>useAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useAnimation({ open, onClose }) {
    _s();
    const backdropRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const itemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const registerItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnimation.useCallback[registerItem]": (index)=>({
                "useAnimation.useCallback[registerItem]": (node)=>{
                    itemRefs.current[index] = node;
                }
            })["useAnimation.useCallback[registerItem]"]
    }["useAnimation.useCallback[registerItem]"], []);
    const getTargets = ()=>{
        const backdrop = backdropRef.current;
        const panel = panelRef.current;
        const items = itemRefs.current.filter(Boolean);
        return {
            backdrop,
            panel,
            items
        };
    };
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnimation.useCallback[close]": ()=>{
            const { backdrop, panel, items } = getTargets();
            if (!backdrop || !panel) {
                onClose();
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf([
                backdrop,
                panel,
                ...items
            ]);
            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                onComplete: onClose
            }).to(items, {
                opacity: 0,
                y: 8,
                duration: 0.12,
                stagger: 0.02,
                ease: 'power1.in'
            }).to(panel, {
                opacity: 0,
                y: 16,
                scale: 0.96,
                duration: 0.18,
                ease: 'power2.in'
            }, '-=0.06').to(backdrop, {
                opacity: 0,
                duration: 0.16,
                ease: 'power2.in'
            }, '-=0.1');
        }
    }["useAnimation.useCallback[close]"], [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "useAnimation.useGSAP": ()=>{
            if (!open) return;
            const { backdrop, panel, items } = getTargets();
            if (!backdrop || !panel) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf([
                backdrop,
                panel,
                ...items
            ]);
            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(backdrop, {
                opacity: 0
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(panel, {
                opacity: 0,
                y: 28,
                scale: 0.94
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(items, {
                opacity: 0,
                y: 16
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline().to(backdrop, {
                opacity: 1,
                duration: 0.22,
                ease: 'power2.out'
            }).to(panel, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.32,
                ease: 'power3.out'
            }, '-=0.08').to(items, {
                opacity: 1,
                y: 0,
                duration: 0.28,
                stagger: 0.045,
                ease: 'power2.out'
            }, '-=0.18');
        }
    }["useAnimation.useGSAP"], {
        dependencies: [
            open
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAnimation.useEffect": ()=>{
            if (!open) return;
            document.body.style.overflow = 'hidden';
            const onKeyDown = {
                "useAnimation.useEffect.onKeyDown": (event)=>{
                    if (event.key === 'Escape') close();
                }
            }["useAnimation.useEffect.onKeyDown"];
            globalThis.addEventListener('keydown', onKeyDown);
            return ({
                "useAnimation.useEffect": ()=>{
                    document.body.style.overflow = '';
                    globalThis.removeEventListener('keydown', onKeyDown);
                }
            })["useAnimation.useEffect"];
        }
    }["useAnimation.useEffect"], [
        open,
        close
    ]);
    return {
        backdropRef,
        panelRef,
        registerItem,
        close
    };
}
_s(useAnimation, "uA6pB3P6B9zceWoDGdnMt58n2Xc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthModal",
    ()=>AuthModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$modal$2f$auth$2f$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$modal$2f$auth$2f$use$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/use-animation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AuthModal({ open, onClose }) {
    _s();
    const { backdropRef, panelRef, registerItem, close } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$modal$2f$auth$2f$use$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])({
        open,
        onClose
    });
    if (!open || typeof document === 'undefined') return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-9999 flex items-center justify-center p-4",
        "aria-hidden": false,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: backdropRef,
                className: "absolute inset-0 z-0 bg-secondary/35 backdrop-blur-[14px]",
                onClick: close
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/modal.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$modal$2f$auth$2f$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
                panelRef: panelRef,
                registerItem: registerItem,
                onClose: close
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/modal.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/modal.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this), document.body);
}
_s(AuthModal, "PObiXIaRxMjePTpvxBi24lLHEe8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$modal$2f$auth$2f$use$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
    ];
});
_c = AuthModal;
var _c;
__turbopack_context__.k.register(_c, "AuthModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$modal$2f$auth$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/modal.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$modal$2f$auth$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/index.ts [app-client] (ecmascript) <locals>");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/hooks/use-slightly-move-on-mouse-move.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSlightlyMoveOnMouseMove",
    ()=>useSlightlyMoveOnMouseMove
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const moveAxisMap = new WeakMap();
function throttled(delay, fn) {
    let lastCall = 0;
    return (event)=>{
        const now = Date.now();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        fn(event);
    };
}
const useSlightlyMoveOnMouseMove = (rootRef, elements, { throttle = 200, duration = 0.6 } = {})=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "useSlightlyMoveOnMouseMove.useGSAP": ()=>{
            const wrapper = rootRef.current;
            if (!wrapper) {
                return;
            }
            const mouseMoveHandler = {
                "useSlightlyMoveOnMouseMove.useGSAP.mouseMoveHandler": (event)=>{
                    elements.forEach({
                        "useSlightlyMoveOnMouseMove.useGSAP.mouseMoveHandler": ({ ref, shift = 0 })=>{
                            const el = ref.current;
                            if (!el) {
                                return;
                            }
                            if (!moveAxisMap.has(el)) {
                                moveAxisMap.set(el, {
                                    x: Math.random() * 2 - 1,
                                    y: Math.random() * 2 - 1
                                });
                            }
                            const { x: axisX, y: axisY } = moveAxisMap.get(el) ?? {
                                x: 1,
                                y: 1
                            };
                            const moveX = event.clientX * shift / 150 * axisX;
                            const moveY = event.clientY * shift / 150 * axisY;
                            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(el, {
                                x: moveX,
                                y: moveY,
                                duration
                            });
                        }
                    }["useSlightlyMoveOnMouseMove.useGSAP.mouseMoveHandler"]);
                }
            }["useSlightlyMoveOnMouseMove.useGSAP.mouseMoveHandler"];
            const throttledHandler = throttled(throttle, mouseMoveHandler);
            wrapper.addEventListener('mousemove', throttledHandler);
            return ({
                "useSlightlyMoveOnMouseMove.useGSAP": ()=>{
                    wrapper.removeEventListener('mousemove', throttledHandler);
                }
            })["useSlightlyMoveOnMouseMove.useGSAP"];
        }
    }["useSlightlyMoveOnMouseMove.useGSAP"], {
        scope: rootRef,
        dependencies: [
            throttle,
            duration
        ]
    });
};
_s(useSlightlyMoveOnMouseMove, "VFzjMmoc5axVjyj8E2Q2cQd9phs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/home/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$bottom$2d$gradient$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$bottom$2d$gradient$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/hermes saas/hermes-saas/public/images/bottom-gradient.svg.mjs { IMAGE => "[project]/hermes saas/hermes-saas/public/images/bottom-gradient.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$11$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$11$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/hermes saas/hermes-saas/public/images/ns-avatar-11.jpg.mjs { IMAGE => "[project]/hermes saas/hermes-saas/public/images/ns-avatar-11.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$13$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$13$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/hermes saas/hermes-saas/public/images/ns-avatar-13.jpg.mjs { IMAGE => "[project]/hermes saas/hermes-saas/public/images/ns-avatar-13.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$14$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$14$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/hermes saas/hermes-saas/public/images/ns-avatar-14.jpg.mjs { IMAGE => "[project]/hermes saas/hermes-saas/public/images/ns-avatar-14.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$27$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$27$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/hermes saas/hermes-saas/public/images/ns-img-27.svg.mjs { IMAGE => "[project]/hermes saas/hermes-saas/public/images/ns-img-27.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$28$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$28$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/hermes saas/hermes-saas/public/images/ns-img-28.svg.mjs { IMAGE => "[project]/hermes saas/hermes-saas/public/images/ns-img-28.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/hermes saas/hermes-saas/public/images/ns-img-3.png.mjs { IMAGE => "[project]/hermes saas/hermes-saas/public/images/ns-img-3.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$counter$2d$number$2d$on$2d$scroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/counter-number-on-scroll.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$reveal$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/reveal-animation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$text$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/text-reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$avatar$2d$reveal$2f$avatar$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/avatar-reveal/avatar-item.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$avatar$2d$reveal$2f$avatar$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/avatar-reveal/avatar-reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$button$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/button/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$button$2f$button$2d$primary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/button/button-primary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$button$2f$button$2d$secondary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/button/button-secondary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$modal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$modal$2f$auth$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/modal/auth/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$hooks$2f$use$2d$slightly$2d$move$2d$on$2d$mouse$2d$move$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/hooks/use-slightly-move-on-mouse-move.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
const Hero = ()=>{
    _s();
    const [authModalOpen, setAuthModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$hooks$2f$use$2d$slightly$2d$move$2d$on$2d$mouse$2d$move$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlightlyMoveOnMouseMove"])(rootRef, [
        {
            ref: leftRef,
            shift: 12
        },
        {
            ref: rightRef,
            shift: 10
        }
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: rootRef,
        className: "relative isolate overflow-hidden pt-[190px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                className: "2k:h-[104%] absolute inset-0 z-0 size-full object-cover",
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: "/videos/hero-video.mp4",
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main-container relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-9 text-center md:space-y-18",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8 md:space-y-[70px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto flex max-w-[254px] items-center justify-center gap-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$avatar$2d$reveal$2f$avatar$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "flex items-center justify-center -space-x-3.5",
                                                        direction: "left",
                                                        offset: 50,
                                                        stagger: 0.1,
                                                        markers: false,
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$11$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$11$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$13$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$13$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$14$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$avatar$2d$14$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                                                        ].map((avatar, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$avatar$2d$reveal$2f$avatar$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "outline-background-2 size-11 overflow-hidden rounded-full outline-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: avatar,
                                                                    alt: `avatar-${index + 1}`,
                                                                    className: "size-full rounded-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                                                    lineNumber: 62,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, avatar.src, false, {
                                                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                                                lineNumber: 58,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$reveal$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        delay: 0.2,
                                                        direction: "right",
                                                        offset: 50,
                                                        instant: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-tagline-2 text-background-14/80 mx-auto max-w-[142px] shrink-0 text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$counter$2d$number$2d$on$2d$scroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    value: 2000,
                                                                    delay: 0.4
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                                                    lineNumber: 72,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "+ agents deployed this month."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                                lineNumber: 49,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$text$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextReveal"], {
                                                        delay: 0.3,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "mx-auto max-w-[950px]",
                                                            children: "Your own AI agent, deployed in one click."
                                                        }, void 0, false, {
                                                            fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$text$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextReveal"], {
                                                        delay: 0.4,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mx-auto max-w-[500px]",
                                                            children: "Pick a Pack for your profession, deploy a managed Hermes Agent, and start chatting — no servers, no terminal, no setup."
                                                        }, void 0, false, {
                                                            fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$reveal$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        delay: 0.3,
                                        instant: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center gap-y-3 md:flex-row md:gap-x-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/pricing",
                                                    className: "w-[70%] md:w-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$button$2f$button$2d$primary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonPrimary"], {
                                                        className: "w-full md:w-auto",
                                                        textClassName: "text-center text-nowrap max-sm:flex-1 max-sm:pr-8!",
                                                        children: "Deploy your agent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$button$2f$button$2d$secondary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonSecondary"], {
                                                    className: "w-[70%] outline-0! md:w-auto",
                                                    textClassName: "text-center text-nowrap max-sm:flex-1 max-sm:pr-8!",
                                                    onClick: ()=>setAuthModalOpen(true),
                                                    children: "See how it works"
                                                }, void 0, false, {
                                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$reveal$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: 0.4,
                                instant: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                    className: "h-[350px] w-full overflow-hidden rounded-[20px] backdrop-blur-[20px] md:h-[650px] xl:h-[825px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "hero-banner-img",
                                        className: "size-full",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        ref: leftRef,
                        className: "absolute top-[57%] left-[2%] z-30 hidden h-14 will-change-transform md:block xl:top-[50%] xl:left-[-5%] 2xl:left-[-8%]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$reveal$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: 0.5,
                            direction: "left",
                            offset: 50,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "size-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$27$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$27$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "left-elements",
                                    className: "size-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        ref: rightRef,
                        className: "absolute top-[59%] right-[8%] z-30 hidden h-14 will-change-transform md:block xl:top-[42%] xl:right-[-3%] 2xl:right-[-5%]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$reveal$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: 0.6,
                            direction: "right",
                            offset: 50,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "size-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$28$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$28$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "right-elements",
                                    className: "size-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$reveal$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                delay: 0.5,
                instant: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                    className: "absolute -bottom-1 left-0 z-20 h-[500px] w-full md:h-[600px] xl:h-[700px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$bottom$2d$gradient$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$bottom$2d$gradient$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "bottom-gradient",
                        className: "size-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$modal$2f$auth$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthModal"], {
                open: authModalOpen,
                onClose: ()=>setAuthModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/home/hero.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Hero, "YwR5/FzYji+JgQQsqiopy65xDhk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$hooks$2f$use$2d$slightly$2d$move$2d$on$2d$mouse$2d$move$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlightlyMoveOnMouseMove"]
    ];
});
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/orbit-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrbitProvider",
    ()=>OrbitProvider,
    "useOrbitContext",
    ()=>useOrbitContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const OrbitContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useOrbitContext = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OrbitContext);
    if (!context) {
        throw new Error('Orbit components must be used within LogoOrbit');
    }
    return context;
};
_s(useOrbitContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const OrbitProvider = ({ children, speed = 0.3, orbitSize })=>{
    _s1();
    const orbitRingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const orbitHubRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const orbitItemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [itemVersion, setItemVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const registerItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OrbitProvider.useCallback[registerItem]": (orbitPivotRef, orbitItemRef)=>{
            const entry = {
                orbitPivotRef,
                orbitItemRef
            };
            orbitItemRefs.current = [
                ...orbitItemRefs.current,
                entry
            ];
            setItemVersion({
                "OrbitProvider.useCallback[registerItem]": (version)=>version + 1
            }["OrbitProvider.useCallback[registerItem]"]);
            return entry;
        }
    }["OrbitProvider.useCallback[registerItem]"], []);
    const unregisterItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OrbitProvider.useCallback[unregisterItem]": (entry)=>{
            orbitItemRefs.current = orbitItemRefs.current.filter({
                "OrbitProvider.useCallback[unregisterItem]": (item)=>item !== entry
            }["OrbitProvider.useCallback[unregisterItem]"]);
            setItemVersion({
                "OrbitProvider.useCallback[unregisterItem]": (version)=>version + 1
            }["OrbitProvider.useCallback[unregisterItem]"]);
        }
    }["OrbitProvider.useCallback[unregisterItem]"], []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OrbitProvider.useMemo[value]": ()=>({
                orbitRingRef,
                orbitHubRef,
                orbitItemRefs,
                registerItem,
                unregisterItem,
                itemVersion,
                speed,
                orbitSize
            })
    }["OrbitProvider.useMemo[value]"], [
        registerItem,
        unregisterItem,
        itemVersion,
        speed,
        orbitSize
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrbitContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/orbit-context.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(OrbitProvider, "4H2lSM8mOKix2yGQ+8wpZQx6Up4=");
_c = OrbitProvider;
var _c;
__turbopack_context__.k.register(_c, "OrbitProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/orbit-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ORBIT_SIZE_DEFAULT",
    ()=>ORBIT_SIZE_DEFAULT,
    "ORBIT_SIZE_MAX",
    ()=>ORBIT_SIZE_MAX,
    "ORBIT_SIZE_MIN",
    ()=>ORBIT_SIZE_MIN,
    "ORBIT_SPEED_DEFAULT",
    ()=>ORBIT_SPEED_DEFAULT,
    "ORBIT_SPEED_MAX",
    ()=>ORBIT_SPEED_MAX,
    "ORBIT_SPEED_MIN",
    ()=>ORBIT_SPEED_MIN,
    "clampOrbitSize",
    ()=>clampOrbitSize,
    "clampOrbitSpeed",
    ()=>clampOrbitSpeed,
    "readOrbitSizePx",
    ()=>readOrbitSizePx
]);
const ORBIT_SIZE_DEFAULT = 400;
const ORBIT_SIZE_MIN = 200;
const ORBIT_SIZE_MAX = 1290;
const ORBIT_SPEED_DEFAULT = 1;
const ORBIT_SPEED_MIN = 0.01;
const ORBIT_SPEED_MAX = 20;
const clampOrbitSize = (px)=>{
    if (!Number.isFinite(px)) return ORBIT_SIZE_DEFAULT;
    return Math.min(ORBIT_SIZE_MAX, Math.max(ORBIT_SIZE_MIN, Math.round(px)));
};
const readOrbitSizePx = (el, fallbackSize)=>{
    const rect = el.getBoundingClientRect();
    const fromBox = Math.max(rect.width, rect.height);
    if (fromBox >= ORBIT_SIZE_MIN) return clampOrbitSize(fromBox);
    if (fallbackSize !== undefined && Number.isFinite(fallbackSize)) {
        return clampOrbitSize(fallbackSize);
    }
    return ORBIT_SIZE_DEFAULT;
};
const clampOrbitSpeed = (value)=>{
    if (!Number.isFinite(value)) return ORBIT_SPEED_DEFAULT;
    return Math.min(ORBIT_SPEED_MAX, Math.max(ORBIT_SPEED_MIN, value));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/use-orbit-animation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOrbitAnimation",
    ()=>useOrbitAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$orbit$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/orbit-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$orbit$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/orbit-utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const getMountedItems = (entries)=>entries.map(({ orbitPivotRef, orbitItemRef })=>({
            pivot: orbitPivotRef.current,
            item: orbitItemRef.current
        })).filter((entry)=>entry.pivot !== null && entry.item !== null);
const useOrbitAnimation = ()=>{
    _s();
    const { orbitRingRef, orbitHubRef, orbitItemRefs, itemVersion, speed, orbitSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$orbit$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrbitContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "useOrbitAnimation.useGSAP": ()=>{
            const ring = orbitRingRef.current;
            const hub = orbitHubRef.current;
            if (!ring || !hub) return;
            const clampedSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$orbit$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clampOrbitSpeed"])(speed);
            let timeline = null;
            const killTimeline = {
                "useOrbitAnimation.useGSAP.killTimeline": ()=>{
                    timeline?.kill();
                    timeline = null;
                }
            }["useOrbitAnimation.useGSAP.killTimeline"];
            const buildTimeline = {
                "useOrbitAnimation.useGSAP.buildTimeline": (itemElements)=>{
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                        repeat: -1
                    });
                    tl.to(hub, {
                        rotation: 360,
                        duration: 20,
                        ease: 'none'
                    });
                    tl.to(itemElements, {
                        rotation: '-=360',
                        duration: 20,
                        ease: 'none'
                    }, 0);
                    tl.timeScale(clampedSpeed);
                    tl.play();
                    return tl;
                }
            }["useOrbitAnimation.useGSAP.buildTimeline"];
            const applyOrbitGeometry = {
                "useOrbitAnimation.useGSAP.applyOrbitGeometry": (sizePx)=>{
                    const sizeStr = `${sizePx}px`;
                    ring.style.setProperty('--orbit-size', sizeStr);
                    const hubSize = hub.offsetWidth || 20;
                    const hubOffset = (sizePx - hubSize) / 2;
                    __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(hub, {
                        x: hubOffset,
                        y: hubOffset,
                        rotation: 0
                    });
                    const pivotOriginY = sizePx / 2 + 10;
                    const items = getMountedItems(orbitItemRefs.current);
                    const count = items.length;
                    if (count === 0) return null;
                    const space = 360 / count;
                    items.forEach({
                        "useOrbitAnimation.useGSAP.applyOrbitGeometry": ({ pivot, item }, i)=>{
                            const pivotHalf = pivot.offsetWidth / 2 || 10;
                            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(pivot, {
                                rotation: i * space,
                                transformOrigin: `${pivotHalf}px ${pivotOriginY}px`
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(item, {
                                rotation: -i * space,
                                transformOrigin: 'center center'
                            });
                        }
                    }["useOrbitAnimation.useGSAP.applyOrbitGeometry"]);
                    return items.map({
                        "useOrbitAnimation.useGSAP.applyOrbitGeometry": ({ item })=>item
                    }["useOrbitAnimation.useGSAP.applyOrbitGeometry"]);
                }
            }["useOrbitAnimation.useGSAP.applyOrbitGeometry"];
            const runLayout = {
                "useOrbitAnimation.useGSAP.runLayout": ()=>{
                    const sizePx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$orbit$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readOrbitSizePx"])(ring, orbitSize);
                    killTimeline();
                    const itemElements = applyOrbitGeometry(sizePx);
                    if (!itemElements || itemElements.length === 0) return;
                    timeline = buildTimeline(itemElements);
                }
            }["useOrbitAnimation.useGSAP.runLayout"];
            const scheduleLayout = {
                "useOrbitAnimation.useGSAP.scheduleLayout": ()=>{
                    requestAnimationFrame({
                        "useOrbitAnimation.useGSAP.scheduleLayout": ()=>{
                            requestAnimationFrame(runLayout);
                        }
                    }["useOrbitAnimation.useGSAP.scheduleLayout"]);
                }
            }["useOrbitAnimation.useGSAP.scheduleLayout"];
            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(ring, {
                autoAlpha: 1
            });
            scheduleLayout();
            let resizeTimeout;
            const resizeObserver = new ResizeObserver({
                "useOrbitAnimation.useGSAP": ()=>{
                    clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(scheduleLayout, 80);
                }
            }["useOrbitAnimation.useGSAP"]);
            resizeObserver.observe(ring);
            return ({
                "useOrbitAnimation.useGSAP": ()=>{
                    clearTimeout(resizeTimeout);
                    resizeObserver.disconnect();
                    killTimeline();
                }
            })["useOrbitAnimation.useGSAP"];
        }
    }["useOrbitAnimation.useGSAP"], {
        dependencies: [
            speed,
            orbitSize,
            itemVersion
        ],
        scope: orbitRingRef
    });
};
_s(useOrbitAnimation, "BPWWie373SPvZamjbs7sL6R1AGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$orbit$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrbitContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/logo-orbit-layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$use$2d$orbit$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/use-orbit-animation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const LogoOrbitLayout = ({ children, className, ...props })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$use$2d$orbit$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrbitAnimation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mx-auto w-fit', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/logo-orbit-layout.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LogoOrbitLayout, "O+IEqnptPRhnihMrMnqgU4y4Kx4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$use$2d$orbit$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrbitAnimation"]
    ];
});
_c = LogoOrbitLayout;
const __TURBOPACK__default__export__ = LogoOrbitLayout;
var _c;
__turbopack_context__.k.register(_c, "LogoOrbitLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/logo-orbit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$logo$2d$orbit$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/logo-orbit-layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$orbit$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/orbit-context.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const LogoOrbit = ({ children, speed = 0.3, orbitSize, className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$orbit$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitProvider"], {
        speed: speed,
        orbitSize: orbitSize,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$logo$2d$orbit$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: className,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/logo-orbit.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/logo-orbit.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LogoOrbit;
const __TURBOPACK__default__export__ = LogoOrbit;
var _c;
__turbopack_context__.k.register(_c, "LogoOrbit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/orbit-hub.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$orbit$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/orbit-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const OrbitHub = ({ children, className, ...props })=>{
    _s();
    const { orbitHubRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$orbit$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrbitContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: orbitHubRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute size-5', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/orbit-hub.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(OrbitHub, "6TtozY+670h+3V6KQ1D2/Yb1mWs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$orbit$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrbitContext"]
    ];
});
_c = OrbitHub;
const __TURBOPACK__default__export__ = OrbitHub;
var _c;
__turbopack_context__.k.register(_c, "OrbitHub");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/orbit-item.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$orbit$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/orbit-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const OrbitItem = ({ src, alt, className, ...props })=>{
    _s();
    const orbitPivotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const orbitItemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { registerItem, unregisterItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$orbit$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrbitContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "OrbitItem.useLayoutEffect": ()=>{
            const entry = registerItem(orbitPivotRef, orbitItemRef);
            return ({
                "OrbitItem.useLayoutEffect": ()=>unregisterItem(entry)
            })["OrbitItem.useLayoutEffect"];
        }
    }["OrbitItem.useLayoutEffect"], [
        registerItem,
        unregisterItem
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: orbitPivotRef,
        className: "absolute top-[calc(var(--orbit-size)*-0.5)]",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: orbitItemRef,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute top-[-20px] size-16 rounded-full', className),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: src,
                alt: alt,
                className: "size-full object-cover"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/orbit-item.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/orbit-item.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/orbit-item.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(OrbitItem, "kW3xGYaO+GWQj6J+RLb62WrUKhA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$orbit$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrbitContext"]
    ];
});
_c = OrbitItem;
const __TURBOPACK__default__export__ = OrbitItem;
var _c;
__turbopack_context__.k.register(_c, "OrbitItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/orbit-ring.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$orbit$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/orbit-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const OrbitRing = ({ children, className, ...props })=>{
    _s();
    const { orbitRingRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$orbit$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrbitContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: orbitRingRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('border-stroke-3 relative mx-auto aspect-square size-[min(calc(100vw-1.5rem),1100px)] rounded-full border-2 md:size-[min(90vw,960px)] lg:size-[min(88vw,1100px)]', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/logo-orbit/orbit-ring.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(OrbitRing, "hkMt+a7LA2JpSVB27LHy9FEKk20=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$logo$2d$orbit$2f$orbit$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrbitContext"]
    ];
});
_c = OrbitRing;
const __TURBOPACK__default__export__ = OrbitRing;
var _c;
__turbopack_context__.k.register(_c, "OrbitRing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/public/images/ns-img-25.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ns-img-25.8c96faf2.png");}),
"[project]/hermes saas/hermes-saas/public/images/ns-img-25.png.mjs { IMAGE => \"[project]/hermes saas/hermes-saas/public/images/ns-img-25.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$25$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/public/images/ns-img-25.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$25$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 336,
    height: 88,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/AAcJCSQGBwccBQYHGgQFBhMbEDItIhQ/OCATPDYjFUI7AAgRFE4JExdXExYZYggNED4GBQgTBwYJFgcHCRcHBgkWySwGBaQmb2oAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/badge/badge-primary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BadgePrimary",
    ()=>BadgePrimary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const BadgePrimary = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = function BadgePrimary({ className, children, ...props }, ref) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('border-stroke-3 text-tagline-3 text-secondary inline-block rounded-full border bg-white py-[3px] pr-4 pl-[3px] font-inter-tight font-normal', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-x-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-secondary flex h-6 w-8 shrink-0 items-center justify-center rounded-full",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        className: "fill-accent size-5",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6.66602 4.16675H8.33268V5.83341H6.66602V4.16675Z"
                            }, void 0, false, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/badge/badge-primary.tsx",
                                lineNumber: 29,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9.16602 6.66675H10.8327V8.33342H9.16602V6.66675Z"
                            }, void 0, false, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/badge/badge-primary.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M11.666 9.16675H13.3327V10.8334H11.666V9.16675Z"
                            }, void 0, false, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/badge/badge-primary.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9.16602 11.6667H10.8327V13.3334H9.16602V11.6667Z"
                            }, void 0, false, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/badge/badge-primary.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6.66602 14.1667H8.33268V15.8334H6.66602V14.1667Z"
                            }, void 0, false, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/badge/badge-primary.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/badge/badge-primary.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/badge/badge-primary.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/badge/badge-primary.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/badge/badge-primary.tsx",
            lineNumber: 17,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/shared/ui/badge/badge-primary.tsx",
        lineNumber: 9,
        columnNumber: 7
    }, this);
});
_c1 = BadgePrimary;
BadgePrimary.displayName = 'BadgePrimary';
var _c, _c1;
__turbopack_context__.k.register(_c, "BadgePrimary$forwardRef");
__turbopack_context__.k.register(_c1, "BadgePrimary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/shared/ui/badge/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$badge$2f$badge$2d$primary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/badge/badge-primary.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$25$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$25$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/hermes saas/hermes-saas/public/images/ns-img-25.png.mjs { IMAGE => "[project]/hermes saas/hermes-saas/public/images/ns-img-25.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$reveal$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/reveal-animation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$text$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/text-reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/icon/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$badge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/badge/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$badge$2f$badge$2d$primary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/badge/badge-primary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$button$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/button/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$button$2f$button$2d$primary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/shared/ui/button/button-primary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$number$2d$flow$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@number-flow/react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$number$2d$flow$2f$react$2f$dist$2f$NumberFlow$2d$client$2d$BTpPLmzo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__N__as__default$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@number-flow/react/dist/NumberFlow-client-BTpPLmzo.mjs [app-client] (ecmascript) <export N as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const pricingPlans = [
    {
        id: 'starter',
        name: 'Starter',
        subtitle: 'For early-stage teams'
    },
    {
        id: 'pro',
        name: 'Pro',
        subtitle: 'For growing teams'
    },
    {
        id: 'business',
        name: 'Business',
        subtitle: 'For established businesses'
    }
];
const pricingPlanData = {
    starter: {
        monthly: 29,
        yearly: 290,
        activeCount: 5,
        description: 'Your own managed Hermes agent with BYOK model access, 1 use-case pack, and auto-sleep to keep costs low.'
    },
    pro: {
        monthly: 69,
        yearly: 690,
        activeCount: 7,
        description: 'Everything in Starter plus all use-case packs, priority provisioning, longer idle timeouts, and advanced agent configuration.'
    },
    business: {
        monthly: 149,
        yearly: 1490,
        activeCount: 9,
        description: 'Dedicated VM isolation, all packs, custom Hermes skills, priority support, and the highest resource limits for demanding workloads.'
    }
};
const includedItems = [
    'Managed Hermes agent',
    'BYOK model access',
    'Auto-sleep & wake-on-demand',
    'Chat dashboard',
    'All use-case packs',
    'Custom Hermes skills',
    'Priority provisioning',
    'Dedicated VM isolation',
    'Priority support'
];
const Pricing = ()=>{
    _s();
    const [selectedPlan, setSelectedPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('starter');
    const [isYearly, setIsYearly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pricingCardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const badgeWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevPlanRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('starter');
    const badgeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const descriptionsRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const currentPlan = pricingPlanData[selectedPlan];
    const price = isYearly ? currentPlan.yearly : currentPlan.monthly;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Pricing.useGSAP": ()=>{
            const wrapper = badgeWrapperRef.current;
            const defaultBadge = badgeRefs.current[pricingPlans[0].id];
            if (!wrapper) return;
            pricingPlans.forEach({
                "Pricing.useGSAP": (plan, index)=>{
                    const badge = badgeRefs.current[plan.id];
                    if (!badge) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(badge, {
                        opacity: index === 0 ? 1 : 0,
                        y: 0
                    });
                }
            }["Pricing.useGSAP"]);
            if (defaultBadge) {
                wrapper.style.width = `${defaultBadge.offsetWidth}px`;
                wrapper.style.height = `${defaultBadge.offsetHeight}px`;
            }
        }
    }["Pricing.useGSAP"], {
        scope: pricingCardRef
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Pricing.useGSAP": ()=>{
            const prev = prevPlanRef.current;
            const next = selectedPlan;
            if (prev === next) return;
            const fromBadge = badgeRefs.current[prev];
            const toBadge = badgeRefs.current[next];
            const fromDescription = descriptionsRefs.current[prev];
            const toDescription = descriptionsRefs.current[next];
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                defaults: {
                    ease: 'power3.out'
                }
            });
            if (fromBadge && toBadge) {
                const wrapper = badgeWrapperRef.current;
                const fromWidth = wrapper?.offsetWidth ?? fromBadge.offsetWidth;
                const toWidth = toBadge.offsetWidth;
                tl.set(toBadge, {
                    y: 12,
                    opacity: 0
                }, 0);
                tl.to(fromBadge, {
                    y: -12,
                    opacity: 0,
                    duration: 0.22
                }, 0);
                tl.to(toBadge, {
                    y: 0,
                    opacity: 1,
                    duration: 0.28
                }, 0.12);
                tl.set(fromBadge, {
                    y: 0
                }, 0.3);
                if (wrapper) {
                    tl.to(wrapper, {
                        width: toWidth,
                        duration: 0.28,
                        ease: 'power3.out'
                    }, toWidth > fromWidth ? 0 : 0.12);
                }
            }
            if (fromDescription && toDescription) {
                tl.set(toDescription, {
                    y: 12,
                    opacity: 0
                }, 0);
                tl.to(fromDescription, {
                    y: -12,
                    opacity: 0,
                    duration: 0.22
                }, 0);
                tl.to(toDescription, {
                    y: 0,
                    opacity: 1,
                    duration: 0.28
                }, 0.12);
                tl.set(fromDescription, {
                    y: 0
                }, 0.3);
            }
            prevPlanRef.current = next;
        }
    }["Pricing.useGSAP"], {
        scope: pricingCardRef,
        dependencies: [
            selectedPlan
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pt-20 md:pt-25 lg:pt-39",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "main-container overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-10 lg:space-y-18",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$reveal$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        delay: 0.1,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$badge$2f$badge$2d$primary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BadgePrimary"], {
                                            children: "Pricing"
                                        }, void 0, false, {
                                            fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$text$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextReveal"], {
                                                delay: 0.2,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: "Simple pricing that scales with you"
                                                }, void 0, false, {
                                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$text$2d$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextReveal"], {
                                                delay: 0.3,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-background-14/60 mx-auto max-w-[600px]",
                                                    children: "Upgrade anytime as your needs evolve, and stay focused on what matters most building and expanding your product with confidence."
                                                }, void 0, false, {
                                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$reveal$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: 0.4,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "inline-flex cursor-pointer items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-tagline-2 text-secondary me-2.5 font-normal select-none",
                                                children: "Monthly"
                                            }, void 0, false, {
                                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: isYearly,
                                                onChange: (e)=>setIsYearly(e.target.checked),
                                                className: "peer sr-only",
                                                "aria-label": "Toggle yearly billing"
                                            }, void 0, false, {
                                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-secondary peer peer-checked:after:border-buffer after:shadow-16 relative h-6 w-11.5 rounded-full peer-focus:outline-0 after:absolute after:inset-s-[2px] after:top-1/2 after:size-5 after:-translate-y-1/2 after:rounded-full after:bg-(image:--color-gradient-14) after:transition-all after:content-[''] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full"
                                            }, void 0, false, {
                                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-tagline-2 text-secondary ms-2.5 font-normal select-none",
                                                children: "Yearly"
                                            }, void 0, false, {
                                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto grid max-w-[980px] grid-cols-12 items-start justify-center gap-y-6 md:gap-x-8 lg:gap-x-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$reveal$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                asChild: false,
                                delay: 0.5,
                                direction: "left",
                                offset: 50,
                                className: "col-span-12 space-y-8 md:col-span-5 md:space-y-14",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-background-4 space-y-2 rounded-[20px] p-2",
                                                children: pricingPlans.map((plan)=>{
                                                    const isActive = selectedPlan === plan.id;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setSelectedPlan(plan.id),
                                                        "data-active": isActive ? 'true' : 'false',
                                                        className: "group flex w-full cursor-pointer items-center justify-between gap-x-6 rounded-xl px-5 py-3 transition-colors hover:bg-white data-[active=true]:bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-tagline-1 text-left",
                                                                        children: plan.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                                        lineNumber: 218,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-tagline-3 text-background-14/60",
                                                                        children: plan.subtitle
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                                        lineNumber: 219,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-secondary flex size-8 items-center justify-center rounded-full transition-all duration-500 ease-in-out', isActive ? 'scale-100' : 'scale-0'),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {
                                                                    className: "size-4 stroke-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, plan.id, true, {
                                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center gap-x-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-x-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GradientCircleIcon"], {}, void 0, false, {
                                                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-tagline-2 text-secondary font-inter-tight font-normal italic",
                                                                children: "Free trial"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-x-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GradientCircleIcon"], {}, void 0, false, {
                                                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                                lineNumber: 243,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-tagline-2 text-secondary font-inter-tight font-normal italic",
                                                                children: "Cancel anytime"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                        className: "mx-auto flex h-11 w-full max-w-[168px] items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$25$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$public$2f$images$2f$ns$2d$img$2d$25$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "clutch-img"
                                        }, void 0, false, {
                                            fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$reveal$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                asChild: false,
                                delay: 0.6,
                                direction: "right",
                                offset: 50,
                                className: "col-span-12 md:col-span-7",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: pricingCardRef,
                                    className: "space-y-14 rounded-xl bg-white px-6 py-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    ref: badgeWrapperRef,
                                                    className: "relative block h-8 w-full overflow-hidden",
                                                    children: pricingPlans.map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            ref: (el)=>{
                                                                badgeRefs.current[plan.id] = el ?? undefined;
                                                            },
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('border-stroke-3 text-tagline-2 text-secondary font-inter-tight rounded-full border px-3 py-1 font-normal whitespace-nowrap', 'absolute top-0 left-0 h-8 w-fit'),
                                                            children: plan.name
                                                        }, plan.id, false, {
                                                            fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-heading-6",
                                                                    children: "Subscription"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                                    lineNumber: 284,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-heading-4 font-medium",
                                                                    children: [
                                                                        "€",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$number$2d$flow$2f$react$2f$dist$2f$NumberFlow$2d$client$2d$BTpPLmzo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__N__as__default$3e$__["default"], {
                                                                            value: price,
                                                                            format: {
                                                                                useGrouping: true,
                                                                                minimumIntegerDigits: 2,
                                                                                maximumFractionDigits: 0,
                                                                                minimumFractionDigits: 0
                                                                            },
                                                                            transformTiming: {
                                                                                duration: 700,
                                                                                easing: 'ease-out'
                                                                            },
                                                                            spinTiming: {
                                                                                duration: 700,
                                                                                easing: 'ease-out'
                                                                            },
                                                                            opacityTiming: {
                                                                                duration: 315,
                                                                                easing: 'ease-out'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                                            lineNumber: 287,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-tagline-2 text-secondary/60 font-inter-tight font-normal",
                                                                            children: isYearly ? '/year' : '/month'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                                            lineNumber: 299,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                                    lineNumber: 285,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "relative grid overflow-hidden",
                                                            children: pricingPlans.map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    ref: (el)=>{
                                                                        descriptionsRefs.current[plan.id] = el ?? undefined;
                                                                    },
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-1 row-start-1', plan.id !== 'starter' && 'opacity-0'),
                                                                    children: pricingPlanData[plan.id]?.description
                                                                }, plan.id, false, {
                                                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/signup",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$ui$2f$button$2f$button$2d$primary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonPrimary"], {
                                                        className: "w-full",
                                                        textClassName: "text-center flex-1 px-0! pr-8!",
                                                        children: "Get started"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-heading-6",
                                                    children: "What's included:"
                                                }, void 0, false, {
                                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-5",
                                                    children: includedItems.map((item, index)=>{
                                                        const isActive = index < currentPlan.activeCount;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            "data-active": isActive ? 'true' : 'false',
                                                            className: "group flex items-center gap-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "border-stroke-3 flex size-6 shrink-0 items-center justify-center rounded-full border p-1 transition-colors duration-500 ease-in-out",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$shared$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckIcon"], {
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4 transition-colors duration-500 ease-in-out', isActive ? 'stroke-secondary' : 'stroke-secondary/40')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                                        lineNumber: 345,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                                    lineNumber: 344,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-tagline-1 font-inter-tight font-normal transition-colors duration-500 ease-in-out', isActive ? 'text-secondary' : 'text-secondary/40'),
                                                                    children: item
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                                    lineNumber: 352,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, item, true, {
                                                            fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                            lineNumber: 332,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                    lineNumber: 263,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/home/pricing.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Pricing, "9/8gVxYPwaSsh2mpWuIM5Jasb28=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = Pricing;
const __TURBOPACK__default__export__ = Pricing;
var _c;
__turbopack_context__.k.register(_c, "Pricing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-animation-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROCESS_ANIMATION",
    ()=>PROCESS_ANIMATION,
    "PROCESS_REVEAL_DUR",
    ()=>PROCESS_REVEAL_DUR
]);
const PROCESS_ANIMATION = {
    STEP_WAIT: 1.2,
    LINE_DURATION: 1,
    OPEN_DUR: 1,
    CLOSE_DUR: 0.8,
    EASE: 'cubic-bezier(0.22, 1, 0.36, 1)',
    TEXT_STAGGER: 0.3,
    BLUR_IN: 'blur(3px)',
    BLUR_OUT: 'blur(0px)'
};
const PROCESS_REVEAL_DUR = Math.max(PROCESS_ANIMATION.CLOSE_DUR, PROCESS_ANIMATION.OPEN_DUR + PROCESS_ANIMATION.TEXT_STAGGER);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-line-animation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateTimelineLine",
    ()=>animateTimelineLine,
    "initTimelineLines",
    ()=>initTimelineLines,
    "isLineHorizontal",
    ()=>isLineHorizontal,
    "setTimelineLineProgress",
    ()=>setTimelineLineProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$animation$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-animation-config.ts [app-client] (ecmascript)");
;
;
const isLineHorizontal = (el)=>{
    const axis = el.dataset.lineAxis;
    if (axis === 'horizontal') return true;
    if (axis === 'vertical') return false;
    return el.offsetWidth > el.offsetHeight;
};
const initTimelineLines = (timelines)=>{
    timelines.forEach(({ lines })=>{
        lines.forEach((line)=>{
            if (isLineHorizontal(line)) __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(line, {
                transformOrigin: 'left center',
                scaleX: 0
            });
            else __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(line, {
                transformOrigin: 'top center',
                scaleY: 0
            });
        });
    });
};
const setTimelineLineProgress = (timelines, index)=>{
    timelines.forEach(({ lines })=>{
        lines.forEach((line, i)=>{
            if (isLineHorizontal(line)) __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(line, {
                scaleX: i < index ? 1 : 0
            });
            else __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(line, {
                scaleY: i < index ? 1 : 0
            });
        });
    });
};
const animateTimelineLine = (timelines, lineIndex, timeline)=>{
    timelines.forEach(({ lines })=>{
        const line = lines[lineIndex];
        if (!line) return;
        if (isLineHorizontal(line)) timeline.to(line, {
            scaleX: 1,
            duration: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$animation$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROCESS_ANIMATION"].LINE_DURATION,
            ease: 'sine.inOut'
        }, 0);
        else timeline.to(line, {
            scaleY: 1,
            duration: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$animation$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROCESS_ANIMATION"].LINE_DURATION,
            ease: 'sine.inOut'
        }, 0);
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-slide-animation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "slideToCard",
    ()=>slideToCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$animation$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-animation-config.ts [app-client] (ecmascript)");
;
;
const slideToCard = ({ nextIndex, reverse = false, cards, images, contents, activeIndex, busyRef, onIndexChange, onLineProgress })=>{
    if (busyRef.current || nextIndex === activeIndex) return;
    const current = cards.get(activeIndex);
    const next = cards.get(nextIndex);
    if (!current || !next) return;
    busyRef.current = true;
    const currentImage = images.get(activeIndex);
    const currentText = contents.get(activeIndex);
    const nextImage = images.get(nextIndex);
    const nextText = contents.get(nextIndex);
    const { CLOSE_DUR, OPEN_DUR, EASE, TEXT_STAGGER, BLUR_IN, BLUR_OUT } = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$animation$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROCESS_ANIMATION"];
    __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf([
        current,
        next,
        currentImage,
        currentText,
        nextImage,
        nextText
    ]);
    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
    tl.set(next, {
        pointerEvents: 'auto',
        zIndex: 2,
        backgroundColor: 'transparent'
    }, 0);
    tl.set(current, {
        zIndex: 3,
        backgroundColor: 'transparent'
    }, 0);
    if (nextImage) tl.set(nextImage, {
        yPercent: reverse ? -100 : 100,
        opacity: 0,
        filter: BLUR_IN
    }, 0);
    if (nextText) tl.set(nextText, {
        yPercent: reverse ? 100 : -100,
        opacity: 0,
        filter: BLUR_IN
    }, 0);
    if (currentImage) tl.to(currentImage, {
        yPercent: reverse ? 100 : -100,
        opacity: 0,
        filter: BLUR_IN,
        duration: CLOSE_DUR,
        force3D: true,
        ease: EASE
    }, 0);
    if (nextImage) tl.to(nextImage, {
        yPercent: 0,
        opacity: 1,
        filter: BLUR_OUT,
        duration: OPEN_DUR,
        force3D: true,
        ease: EASE
    }, 0);
    if (currentText) tl.to(currentText, {
        yPercent: reverse ? -100 : 100,
        opacity: 0,
        filter: BLUR_IN,
        duration: CLOSE_DUR,
        force3D: true,
        ease: EASE
    }, 0);
    if (nextText) tl.to(nextText, {
        yPercent: 0,
        opacity: 1,
        filter: BLUR_OUT,
        duration: OPEN_DUR,
        force3D: true,
        ease: EASE
    }, TEXT_STAGGER);
    tl.set(current, {
        pointerEvents: 'none',
        zIndex: 0,
        backgroundColor: ''
    }, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$animation$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROCESS_REVEAL_DUR"]);
    tl.set(next, {
        backgroundColor: ''
    }, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$animation$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROCESS_REVEAL_DUR"]);
    if (currentImage) tl.set(currentImage, {
        yPercent: 0,
        opacity: 0,
        filter: BLUR_OUT
    }, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$animation$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROCESS_REVEAL_DUR"]);
    if (currentText) tl.set(currentText, {
        yPercent: 0,
        opacity: 0,
        filter: BLUR_OUT
    }, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$animation$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROCESS_REVEAL_DUR"]);
    tl.call(()=>{
        busyRef.current = false;
    }, [], __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$animation$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROCESS_REVEAL_DUR"]);
    onIndexChange(nextIndex);
    onLineProgress(nextIndex);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/use-process-controller.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProcessController",
    ()=>useProcessController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$animation$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-animation-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$line$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-line-animation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$slide$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-slide-animation.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const useProcessController = (cardCount)=>{
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const imagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const contentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const timelinesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const activeIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const busyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isPausedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lineTlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const loopDelayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const runLoopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "useProcessController.useRef[runLoopRef]": ()=>{}
    }["useProcessController.useRef[runLoopRef]"]);
    const getStepState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessController.useCallback[getStepState]": (index)=>{
            if (index === activeIndex) return 'active';
            if (index < activeIndex) return 'completed';
            return 'inactive';
        }
    }["useProcessController.useCallback[getStepState]"], [
        activeIndex
    ]);
    const setLineProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessController.useCallback[setLineProgress]": (index)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$line$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTimelineLineProgress"])(timelinesRef.current, index);
        }
    }["useProcessController.useCallback[setLineProgress]"], []);
    const tryMarkReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessController.useCallback[tryMarkReady]": ()=>{
            const ready = cardsRef.current.size === cardCount && imagesRef.current.size === cardCount && contentsRef.current.size === cardCount && timelinesRef.current.length === 2;
            if (ready && !isReady) {
                setIsReady(true);
                setLineProgress(0);
            }
        }
    }["useProcessController.useCallback[tryMarkReady]"], [
        cardCount,
        isReady,
        setLineProgress
    ]);
    const registerCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessController.useCallback[registerCard]": (index, el)=>{
            if (el) cardsRef.current.set(index, el);
            else cardsRef.current.delete(index);
            tryMarkReady();
        }
    }["useProcessController.useCallback[registerCard]"], [
        tryMarkReady
    ]);
    const registerImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessController.useCallback[registerImage]": (index, el)=>{
            if (el) imagesRef.current.set(index, el);
            else imagesRef.current.delete(index);
            tryMarkReady();
        }
    }["useProcessController.useCallback[registerImage]"], [
        tryMarkReady
    ]);
    const registerContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessController.useCallback[registerContent]": (index, el)=>{
            if (el) contentsRef.current.set(index, el);
            else contentsRef.current.delete(index);
            tryMarkReady();
        }
    }["useProcessController.useCallback[registerContent]"], [
        tryMarkReady
    ]);
    const registerTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessController.useCallback[registerTimeline]": (registration)=>{
            timelinesRef.current.push(registration);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$line$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initTimelineLines"])(timelinesRef.current);
            tryMarkReady();
            return ({
                "useProcessController.useCallback[registerTimeline]": ()=>{
                    timelinesRef.current = timelinesRef.current.filter({
                        "useProcessController.useCallback[registerTimeline]": (item)=>item !== registration
                    }["useProcessController.useCallback[registerTimeline]"]);
                }
            })["useProcessController.useCallback[registerTimeline]"];
        }
    }["useProcessController.useCallback[registerTimeline]"], [
        tryMarkReady
    ]);
    const slideTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessController.useCallback[slideTo]": (nextIndex, reverse = false)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$slide$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideToCard"])({
                nextIndex,
                reverse,
                cards: cardsRef.current,
                images: imagesRef.current,
                contents: contentsRef.current,
                activeIndex: activeIndexRef.current,
                busyRef,
                onIndexChange: {
                    "useProcessController.useCallback[slideTo]": (index)=>{
                        activeIndexRef.current = index;
                        setActiveIndex(index);
                    }
                }["useProcessController.useCallback[slideTo]"],
                onLineProgress: setLineProgress
            });
        }
    }["useProcessController.useCallback[slideTo]"], [
        setLineProgress
    ]);
    const scheduleLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessController.useCallback[scheduleLoop]": ()=>{
            if (isPausedRef.current) return;
            loopDelayRef.current?.kill();
            loopDelayRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].delayedCall(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$animation$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROCESS_ANIMATION"].STEP_WAIT, {
                "useProcessController.useCallback[scheduleLoop]": ()=>runLoopRef.current()
            }["useProcessController.useCallback[scheduleLoop]"]);
        }
    }["useProcessController.useCallback[scheduleLoop]"], []);
    const runLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessController.useCallback[runLoop]": ()=>{
            if (isPausedRef.current || busyRef.current) {
                scheduleLoop();
                return;
            }
            const currentIndex = activeIndexRef.current;
            const nextIndex = (currentIndex + 1) % cardCount;
            const lineIndex = currentIndex % Math.max(cardCount - 1, 1);
            lineTlRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                onComplete: {
                    "useProcessController.useCallback[runLoop]": ()=>{
                        slideTo(nextIndex);
                        scheduleLoop();
                    }
                }["useProcessController.useCallback[runLoop]"]
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$line$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateTimelineLine"])(timelinesRef.current, lineIndex, lineTlRef.current);
        }
    }["useProcessController.useCallback[runLoop]"], [
        cardCount,
        scheduleLoop,
        slideTo
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProcessController.useEffect": ()=>{
            runLoopRef.current = runLoop;
        }
    }["useProcessController.useEffect"], [
        runLoop
    ]);
    const goToStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessController.useCallback[goToStep]": (index)=>{
            if (index === activeIndexRef.current || busyRef.current) return;
            lineTlRef.current?.kill();
            loopDelayRef.current?.kill();
            slideTo(index, index < activeIndexRef.current);
            scheduleLoop();
        }
    }["useProcessController.useCallback[goToStep]"], [
        scheduleLoop,
        slideTo
    ]);
    const setPaused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessController.useCallback[setPaused]": (paused)=>{
            isPausedRef.current = paused;
        }
    }["useProcessController.useCallback[setPaused]"], []);
    const pauseLineTween = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessController.useCallback[pauseLineTween]": ()=>{
            lineTlRef.current?.pause();
            loopDelayRef.current?.pause();
        }
    }["useProcessController.useCallback[pauseLineTween]"], []);
    const resumeLineTween = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessController.useCallback[resumeLineTween]": ()=>{
            if (lineTlRef.current?.isActive()) lineTlRef.current.resume();
        }
    }["useProcessController.useCallback[resumeLineTween]"], []);
    const killLineTween = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessController.useCallback[killLineTween]": ()=>{
            lineTlRef.current?.kill();
        }
    }["useProcessController.useCallback[killLineTween]"], []);
    const killLoopDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessController.useCallback[killLoopDelay]": ()=>{
            loopDelayRef.current?.kill();
        }
    }["useProcessController.useCallback[killLoopDelay]"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useProcessController.useMemo": ()=>({
                cardCount,
                activeIndex,
                getStepState,
                registerCard,
                registerImage,
                registerContent,
                registerTimeline,
                goToStep,
                setPaused,
                pauseLineTween,
                resumeLineTween,
                killLineTween,
                killLoopDelay,
                scheduleLoop,
                runLoop,
                isReady
            })
    }["useProcessController.useMemo"], [
        cardCount,
        activeIndex,
        getStepState,
        registerCard,
        registerImage,
        registerContent,
        registerTimeline,
        goToStep,
        setPaused,
        pauseLineTween,
        resumeLineTween,
        killLineTween,
        killLoopDelay,
        scheduleLoop,
        runLoop,
        isReady
    ]);
};
_s(useProcessController, "iDcG5YxFAjTIKWptWjTzGBwOARs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProcessProvider",
    ()=>ProcessProvider,
    "useProcessContext",
    ()=>useProcessContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$use$2d$process$2d$controller$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/use-process-controller.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const ProcessContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useProcessContext = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ProcessContext);
    if (!context) {
        throw new Error('useProcessContext must be used within ProcessProvider');
    }
    return context;
};
_s(useProcessContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const ProcessProvider = ({ cardCount, children })=>{
    _s1();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$use$2d$process$2d$controller$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProcessController"])(cardCount);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProcessContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-context.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ProcessProvider, "Cqo/IdBzh8VvSAWqoqc24h4JPzs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$use$2d$process$2d$controller$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProcessController"]
    ];
});
_c = ProcessProvider;
var _c;
__turbopack_context__.k.register(_c, "ProcessProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/card-reveal-with-process.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const CardRevealWithProcessRoot = ({ children, className, ...props })=>{
    _s();
    const { isReady, scheduleLoop, setPaused, pauseLineTween, resumeLineTween, killLoopDelay, runLoop } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProcessContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardRevealWithProcessRoot.useEffect": ()=>{
            if (!isReady) return;
            scheduleLoop();
        }
    }["CardRevealWithProcessRoot.useEffect"], [
        isReady,
        scheduleLoop
    ]);
    const onMouseEnter = ()=>{
        setPaused(true);
        pauseLineTween();
    };
    const onMouseLeave = ()=>{
        setPaused(false);
        resumeLineTween();
        killLoopDelay();
        runLoop();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative flex flex-col items-center justify-center gap-y-5 md:flex-row md:gap-x-8', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/card-reveal-with-process.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CardRevealWithProcessRoot, "5idA45253gtkQ8vct2er2REvbKI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProcessContext"]
    ];
});
_c = CardRevealWithProcessRoot;
const CardRevealWithProcess = ({ children, cardCount, className, ...props })=>{
    const resolvedCount = cardCount > 0 ? cardCount : __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProcessProvider"], {
        cardCount: resolvedCount,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardRevealWithProcessRoot, {
            className: className,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/card-reveal-with-process.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/card-reveal-with-process.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = CardRevealWithProcess;
const __TURBOPACK__default__export__ = CardRevealWithProcess;
var _c, _c1;
__turbopack_context__.k.register(_c, "CardRevealWithProcessRoot");
__turbopack_context__.k.register(_c1, "CardRevealWithProcess");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/card-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
;
;
const CardContent = ({ className, children, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex w-full flex-col items-center justify-center gap-y-5 md:flex-row md:gap-x-8', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/card-content.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CardContent;
const __TURBOPACK__default__export__ = CardContent;
var _c;
__turbopack_context__.k.register(_c, "CardContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$card$2d$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/card-content.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const ProcessCard = ({ index, children, className, ...props })=>{
    _s();
    const { registerCard } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProcessContext"])();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProcessCard.useEffect": ()=>{
            registerCard(index, cardRef.current);
            return ({
                "ProcessCard.useEffect": ()=>registerCard(index, null)
            })["ProcessCard.useEffect"];
        }
    }["ProcessCard.useEffect"], [
        index,
        registerCard
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "ProcessCard.useGSAP": ()=>{
            const card = cardRef.current;
            if (!card) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(card, {
                pointerEvents: index === 0 ? 'auto' : 'none',
                zIndex: index === 0 ? 2 : 0,
                overflow: 'hidden'
            });
        }
    }["ProcessCard.useGSAP"], {
        dependencies: [
            index
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute inset-0 rounded-[20px] bg-white p-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$card$2d$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-card.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-card.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProcessCard, "r+BRfUuLsPPYvLuk/C3wb8W07k0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProcessContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = ProcessCard;
const __TURBOPACK__default__export__ = ProcessCard;
var _c;
__turbopack_context__.k.register(_c, "ProcessCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$animation$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-animation-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const ProcessContent = ({ index, title, description, details, className, ...props })=>{
    _s();
    const { registerContent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProcessContext"])();
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProcessContent.useEffect": ()=>{
            registerContent(index, contentRef.current);
            return ({
                "ProcessContent.useEffect": ()=>registerContent(index, null)
            })["ProcessContent.useEffect"];
        }
    }["ProcessContent.useEffect"], [
        index,
        registerContent
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "ProcessContent.useGSAP": ()=>{
            const el = contentRef.current;
            if (!el) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(el, {
                yPercent: 0,
                opacity: index === 0 ? 1 : 0,
                filter: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$animation$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROCESS_ANIMATION"].BLUR_OUT,
                willChange: 'transform, opacity, filter'
            });
        }
    }["ProcessContent.useGSAP"], {
        dependencies: [
            index
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative w-full overflow-hidden py-5 md:w-1/2', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: contentRef,
            className: "h-fit w-full space-y-8 max-md:p-5 md:h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-inter-tight text-heading-4 text-secondary font-normal",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-content.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-tagline-2 max-w-[400px] text-left",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-content.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-content.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden space-y-6 md:block",
                    children: details.map((detail)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-tagline-new",
                                    children: detail.title
                                }, void 0, false, {
                                    fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-content.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-tagline-2 max-w-[400px] text-left",
                                    children: detail.description
                                }, void 0, false, {
                                    fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-content.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, detail.title, true, {
                            fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-content.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-content.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-content.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-content.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProcessContent, "MUZ4T1QaaGfChVY3RsUR7uHCECw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProcessContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = ProcessContent;
const __TURBOPACK__default__export__ = ProcessContent;
var _c;
__turbopack_context__.k.register(_c, "ProcessContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-img.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$animation$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-animation-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const overlayFigureStyle = {
    boxShadow: '0 1px 0 0 rgba(255, 255, 255, 0.4) inset'
};
const ProcessImg = ({ index, image, imageAlt, overlay, overlayAlt, className, ...props })=>{
    _s();
    const { registerImage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProcessContext"])();
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProcessImg.useEffect": ()=>{
            registerImage(index, imageRef.current);
            return ({
                "ProcessImg.useEffect": ()=>registerImage(index, null)
            })["ProcessImg.useEffect"];
        }
    }["ProcessImg.useEffect"], [
        index,
        registerImage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "ProcessImg.useGSAP": ()=>{
            const el = imageRef.current;
            if (!el) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(el, {
                yPercent: 0,
                opacity: index === 0 ? 1 : 0,
                filter: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$animation$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROCESS_ANIMATION"].BLUR_OUT,
                willChange: 'transform, opacity, filter'
            });
        }
    }["ProcessImg.useGSAP"], {
        dependencies: [
            index
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        ref: imageRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative h-fit w-full overflow-hidden rounded-2xl md:h-[464px]', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: image,
                alt: imageAlt,
                className: "size-full rounded-2xl object-cover"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-img.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                className: "absolute bottom-7 left-1/2 z-20 w-[calc(100%-48px)] -translate-x-1/2 overflow-hidden rounded-2xl bg-white/15 backdrop-blur-[20px]",
                style: overlayFigureStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: overlay,
                    alt: overlayAlt
                }, void 0, false, {
                    fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-img.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-img.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-img.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProcessImg, "PQr4C2Qt4owZBBYmkrZEsbgcLdI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProcessContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = ProcessImg;
const __TURBOPACK__default__export__ = ProcessImg;
var _c;
__turbopack_context__.k.register(_c, "ProcessImg");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-step.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ProcessStep = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function ProcessStep({ index, label, className, ...props }, ref) {
    _s();
    const { getStepState, goToStep } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProcessContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        type: "button",
        "data-item": getStepState(index),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-background-14/60 data-[item=active]:text-accent data-[item=completed]:text-accent text-tagline-3 border-stroke-3 flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all duration-400 ease-in-out data-[item=active]:border-transparent data-[item=active]:bg-primary-500 data-[item=completed]:border-transparent data-[item=completed]:bg-primary-500', className),
        onClick: ()=>goToStep(index),
        ...props,
        children: label
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-step.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}, "eDyJvoZbwJZhiKoiqCvlaH919u8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProcessContext"]
    ];
})), "eDyJvoZbwJZhiKoiqCvlaH919u8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProcessContext"]
    ];
});
_c1 = ProcessStep;
ProcessStep.displayName = 'ProcessStep';
const __TURBOPACK__default__export__ = ProcessStep;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProcessStep$forwardRef");
__turbopack_context__.k.register(_c1, "ProcessStep");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-timeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$step$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-step.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const isProcessStepElement = (child)=>{
    if (!/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(child)) return false;
    const props = child.props;
    return typeof props.index === 'number' && typeof props.label === 'string';
};
const isHorizontalTimeline = (className)=>/\bflex-row\b/.test(className ?? '');
const ProcessTimeline = ({ children, className, ...props })=>{
    _s();
    const { registerTimeline } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProcessContext"])();
    const timelineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stepsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const linesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const isHorizontal = isHorizontalTimeline(className);
    const steps = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children).filter(isProcessStepElement);
    const stepCount = steps.length;
    const lineCount = Math.max(stepCount - 1, 0);
    const stepKey = steps.map((step)=>step.props.index).join(',');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "ProcessTimeline.useLayoutEffect": ()=>{
            let cleanup;
            let frame = 0;
            const tryRegister = {
                "ProcessTimeline.useLayoutEffect.tryRegister": ()=>{
                    const registeredSteps = stepsRef.current.filter({
                        "ProcessTimeline.useLayoutEffect.tryRegister.registeredSteps": (step)=>step !== undefined
                    }["ProcessTimeline.useLayoutEffect.tryRegister.registeredSteps"]);
                    const registeredLines = linesRef.current.filter({
                        "ProcessTimeline.useLayoutEffect.tryRegister.registeredLines": (line)=>line !== undefined
                    }["ProcessTimeline.useLayoutEffect.tryRegister.registeredLines"]);
                    if (registeredSteps.length !== stepCount || registeredLines.length !== lineCount) {
                        return false;
                    }
                    cleanup = registerTimeline({
                        steps: registeredSteps,
                        lines: registeredLines
                    });
                    return true;
                }
            }["ProcessTimeline.useLayoutEffect.tryRegister"];
            if (!tryRegister()) {
                frame = requestAnimationFrame({
                    "ProcessTimeline.useLayoutEffect": ()=>{
                        tryRegister();
                    }
                }["ProcessTimeline.useLayoutEffect"]);
            }
            return ({
                "ProcessTimeline.useLayoutEffect": ()=>{
                    cancelAnimationFrame(frame);
                    cleanup?.();
                }
            })["ProcessTimeline.useLayoutEffect"];
        }
    }["ProcessTimeline.useLayoutEffect"], [
        stepCount,
        lineCount,
        stepKey,
        isHorizontal,
        registerTimeline
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: timelineRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props,
        children: steps.map((step, trackIndex)=>{
            const { index, label, className: stepClassName, ...stepProps } = step.props;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$step$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...stepProps,
                        index: index,
                        label: label,
                        className: stepClassName,
                        ref: (el)=>{
                            stepsRef.current[index] = el ?? undefined;
                        }
                    }, void 0, false, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-timeline.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    trackIndex < stepCount - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-stroke-3 relative shrink-0', isHorizontal ? 'mx-1 inline-block h-px w-14' : 'mx-auto inline-block h-[114px] w-px'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: (el)=>{
                                linesRef.current[index] = el ?? undefined;
                            },
                            "data-line-axis": isHorizontal ? 'horizontal' : 'vertical',
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute inset-0', isHorizontal ? 'rounded-r-full bg-linear-to-r from-[#F2F5FA00] to-[#864FFE]' : 'rounded-b-full bg-linear-to-b from-[#F2F5FA00] to-[#864FFE]')
                        }, void 0, false, {
                            fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-timeline.tsx",
                            lineNumber: 100,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-timeline.tsx",
                        lineNumber: 94,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-timeline.tsx",
                lineNumber: 83,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/card-reveal-with-process/process-timeline.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProcessTimeline, "Gcg9yZzEjtZF2gjGuwJenKHHtk4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$card$2d$reveal$2d$with$2d$process$2f$process$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProcessContext"]
    ];
});
_c = ProcessTimeline;
const __TURBOPACK__default__export__ = ProcessTimeline;
var _c;
__turbopack_context__.k.register(_c, "ProcessTimeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-item-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SlideItemActivationProvider",
    ()=>SlideItemActivationProvider,
    "SlideItemProvider",
    ()=>SlideItemProvider,
    "useSlideItemActivation",
    ()=>useSlideItemActivation,
    "useSlideItemContext",
    ()=>useSlideItemContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const SlideItemActivationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const SlideItemActivationProvider = ({ value, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SlideItemActivationContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-item-context.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SlideItemActivationProvider;
const useSlideItemActivation = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SlideItemActivationContext);
};
_s(useSlideItemActivation, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const SlideItemContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const SlideItemProvider = ({ value, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SlideItemContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-item-context.tsx",
        lineNumber: 45,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = SlideItemProvider;
const useSlideItemContext = ()=>{
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SlideItemContext);
    if (!ctx) throw new Error('Use inside SlideItem');
    return ctx;
};
_s1(useSlideItemContext, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c, _c1;
__turbopack_context__.k.register(_c, "SlideItemActivationProvider");
__turbopack_context__.k.register(_c1, "SlideItemProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/split-slide/split-slide-animation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "showSlideVisual",
    ()=>showSlideVisual
]);
const showSlideVisual = ({ tiles, content }, instant = false)=>{
    tiles.forEach((tile, i)=>{
        const delay = instant ? 0 : (tiles.length - 1 - i) * 0.08;
        tile.style.transition = 'none';
        tile.style.opacity = '0';
        tile.style.transform = 'translate3d(26px, 0, 0)';
        tile.getBoundingClientRect();
        requestAnimationFrame(()=>{
            tile.style.transition = `transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, opacity 0.6s ease ${delay}s`;
            tile.style.opacity = '1';
            tile.style.transform = 'translate3d(0, 0, 0)';
        });
    });
    if (content) {
        content.style.transition = 'none';
        content.style.opacity = instant ? '1' : '0';
        content.style.transform = instant ? 'translate3d(0, 0, 0)' : 'translate3d(16px, 0, 0)';
        content.getBoundingClientRect();
        requestAnimationFrame(()=>{
            content.style.transition = 'opacity 0.55s ease 0.15s, transform 0.55s ease 0.15s';
            content.style.opacity = '1';
            content.style.transform = 'translate3d(0, 0, 0)';
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-item.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SlideItem",
    ()=>SlideItem,
    "SlideItemActivator",
    ()=>SlideItemActivator,
    "hasSlideImg",
    ()=>hasSlideImg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$slide$2d$item$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-item-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$split$2d$slide$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/split-slide/split-slide-animation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const SlideItemActivator = ({ asChild = true, isActive, instant, children })=>{
    const activation = {
        isActive,
        instant
    };
    if (!asChild) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$slide$2d$item$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlideItemActivationProvider"], {
            value: activation,
            children: children
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-item.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$slide$2d$item$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlideItemActivationProvider"], {
        value: activation,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-item.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-item.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SlideItemActivator;
const hasSlideImg = (child)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(child.props.children).some((c)=>{
        if (!/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(c)) return false;
        return Boolean(c.props.src && c.props.alt);
    });
};
const SlideItem = ({ children, className, isActive: isActiveProp = false, instant: instantProp = false })=>{
    _s();
    const activation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$slide$2d$item$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlideItemActivation"])();
    const isActive = activation?.isActive ?? isActiveProp;
    const instant = activation?.instant ?? instantProp;
    const animationTargets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        tiles: [],
        content: null
    });
    const [targetsVersion, setTargetsVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SlideItem.useMemo[contextValue]": ()=>({
                registerTiles: ({
                    "SlideItem.useMemo[contextValue]": (els)=>{
                        animationTargets.current.tiles = els;
                        setTargetsVersion({
                            "SlideItem.useMemo[contextValue]": (version)=>version + 1
                        }["SlideItem.useMemo[contextValue]"]);
                    }
                })["SlideItem.useMemo[contextValue]"],
                registerContent: ({
                    "SlideItem.useMemo[contextValue]": (el)=>{
                        animationTargets.current.content = el;
                        setTargetsVersion({
                            "SlideItem.useMemo[contextValue]": (version)=>version + 1
                        }["SlideItem.useMemo[contextValue]"]);
                    }
                })["SlideItem.useMemo[contextValue]"]
            })
    }["SlideItem.useMemo[contextValue]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideItem.useEffect": ()=>{
            if (!isActive) return;
            const { tiles, content } = animationTargets.current;
            if (!tiles.length) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$split$2d$slide$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showSlideVisual"])({
                tiles,
                content
            }, instant);
        }
    }["SlideItem.useEffect"], [
        isActive,
        instant,
        targetsVersion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$slide$2d$item$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlideItemProvider"], {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex! flex-col items-start justify-center overflow-hidden rounded-[20px] border border-stroke-3 bg-white p-1 md:flex-row', className),
            children: children
        }, void 0, false, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-item.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-item.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SlideItem, "qI553JzyZa+WkH9DZz++QUAT5e4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$slide$2d$item$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlideItemActivation"]
    ];
});
_c1 = SlideItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "SlideItemActivator");
__turbopack_context__.k.register(_c1, "SlideItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/split-slide/split-slide-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SlideContext",
    ()=>SlideContext,
    "useSlideContext",
    ()=>useSlideContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const SlideContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useSlideContext = ()=>{
    _s();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SlideContext);
    if (!ctx) throw new Error('Use inside SplitSlide');
    return ctx;
};
_s(useSlideContext, "/dMy7t63NXD4eYACoT93CePwGrg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/split-slide/split-slide.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$slide$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-item.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$split$2d$slide$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/split-slide/split-slide-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
/** Split mixed children: SlideItems → Swiper slides; SlideNavigation → outside Swiper. */ const partitionChildren = (children)=>{
    const slides = [];
    const navigationButtons = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].forEach(children, (child)=>{
        if (!/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(child)) return;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$slide$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSlideImg"])(child)) {
            slides.push(child);
        } else {
            navigationButtons.push(child);
        }
    });
    return {
        slides,
        navigationButtons
    };
};
const SplitSlide = ({ children, className, autoplayDelay = 4800 })=>{
    _s();
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isInitial, setIsInitial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { slides, navigationButtons } = partitionChildren(children);
    const goPrev = ()=>{
        swiperRef.current?.slidePrev();
        swiperRef.current?.autoplay?.start();
    };
    const goNext = ()=>{
        swiperRef.current?.slideNext();
        swiperRef.current?.autoplay?.start();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$split$2d$slide$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlideContext"].Provider, {
        value: {
            activeIndex,
            slideCount: slides.length,
            goPrev,
            goNext
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative flex flex-col md:h-[357px]', className),
            onMouseEnter: ()=>swiperRef.current?.autoplay?.pause(),
            onMouseLeave: ()=>swiperRef.current?.autoplay?.resume(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                    className: "relative h-[500px] w-full shrink-0 overflow-hidden md:h-full",
                    modules: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                    ],
                    slidesPerView: 1,
                    speed: 650,
                    loop: true,
                    autoplay: {
                        delay: autoplayDelay,
                        disableOnInteraction: false
                    },
                    onSwiper: (swiper)=>{
                        swiperRef.current = swiper;
                        setActiveIndex(swiper.realIndex);
                    },
                    onSlideChangeTransitionStart: (swiper)=>{
                        setActiveIndex(swiper.realIndex);
                        setIsInitial(false);
                    },
                    children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$slide$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlideItemActivator"], {
                                isActive: activeIndex === index,
                                instant: activeIndex === index && isInitial,
                                children: slide
                            }, void 0, false, {
                                fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/split-slide.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, index, false, {
                            fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/split-slide.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/split-slide.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                navigationButtons
            ]
        }, void 0, true, {
            fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/split-slide.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/split-slide.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SplitSlide, "dHJpJbzTw/a2wSqon9TY4L/ZeAY=");
_c = SplitSlide;
const __TURBOPACK__default__export__ = SplitSlide;
var _c;
__turbopack_context__.k.register(_c, "SplitSlide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SlideContent",
    ()=>SlideContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$slide$2d$item$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-item-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const SlideContent = ({ children, className })=>{
    _s();
    const { registerContent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$slide$2d$item$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlideItemContext"])();
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideContent.useEffect": ()=>{
            registerContent(contentRef.current);
        }
    }["SlideContent.useEffect"], [
        registerContent
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: contentRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full p-6 md:w-[58%]', className),
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-content.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SlideContent, "KiS2uOHEcIjpu5FjXQasoQPsfcE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$slide$2d$item$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlideItemContext"]
    ];
});
_c = SlideContent;
var _c;
__turbopack_context__.k.register(_c, "SlideContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-img.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SlideImg",
    ()=>SlideImg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$slide$2d$item$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-item-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const TILE_COUNT = 10;
const getImageSrc = (src)=>{
    return typeof src === 'string' ? src : src.src;
};
const SlideImg = ({ src, alt, className })=>{
    _s();
    const { registerTiles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$slide$2d$item$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlideItemContext"])();
    const tileRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const imageSrc = getImageSrc(src);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideImg.useEffect": ()=>{
            registerTiles(tileRefs.current.filter({
                "SlideImg.useEffect": (tile)=>tile !== null
            }["SlideImg.useEffect"]));
        }
    }["SlideImg.useEffect"], [
        registerTiles,
        imageSrc
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative h-[280px] w-full shrink-0 overflow-hidden rounded-2xl md:h-[347px] md:w-[42%]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: src,
                alt: alt,
                fill: true,
                sizes: "(max-width: 768px) 100vw, 42vw",
                className: "object-cover opacity-0"
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-img.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                children: Array.from({
                    length: TILE_COUNT
                }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: (el)=>{
                            tileRefs.current[i] = el;
                        },
                        className: "absolute inset-y-0 bg-no-repeat opacity-0 will-change-[transform,opacity] backface-hidden",
                        style: {
                            left: `${i * 10}%`,
                            width: '10%',
                            backgroundImage: `url("${imageSrc}")`,
                            backgroundSize: `${TILE_COUNT * 100}% 100%`,
                            backgroundPosition: `${i / (TILE_COUNT - 1) * 100}% 50%`
                        }
                    }, i, false, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-img.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-img.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-img.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SlideImg, "GMo1Ay4PC+bCszTMg2JAxIsCc+4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$slide$2d$item$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlideItemContext"]
    ];
});
_c = SlideImg;
var _c;
__turbopack_context__.k.register(_c, "SlideImg");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SlideNavigation",
    ()=>SlideNavigation,
    "SlideNext",
    ()=>SlideNext,
    "SlidePrev",
    ()=>SlidePrev
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$number$2d$flow$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@number-flow/react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$number$2d$flow$2f$react$2f$dist$2f$NumberFlow$2d$client$2d$BTpPLmzo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__N__as__default$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@number-flow/react/dist/NumberFlow-client-BTpPLmzo.mjs [app-client] (ecmascript) <export N as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$split$2d$slide$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/src/components/animation/split-slide/split-slide-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const SlideControl = ({ asChild = true, onClick, children })=>{
    if (!asChild) return children;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"], {
        onClick: onClick,
        className: "group border-stroke-3 hover:bg-secondary flex h-10 w-13 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-colors duration-500 hover:border-transparent max-[376px]:h-8 max-[376px]:w-10",
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-navigation.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SlideControl;
const SlidePrev = ({ asChild = true, children })=>{
    _s();
    const { goPrev } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$split$2d$slide$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlideContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SlideControl, {
        asChild: asChild,
        onClick: goPrev,
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-navigation.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SlidePrev, "BgnmwSEDxDLAc4uAl8eb0loE0yk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$split$2d$slide$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlideContext"]
    ];
});
_c1 = SlidePrev;
const SlideNext = ({ asChild = true, children })=>{
    _s1();
    const { goNext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$split$2d$slide$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlideContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SlideControl, {
        asChild: asChild,
        onClick: goNext,
        children: children
    }, void 0, false, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-navigation.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(SlideNext, "7t4PzS/g4Cmf6Q2Qjk8N7YAkTOk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$split$2d$slide$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlideContext"]
    ];
});
_c2 = SlideNext;
const SlideNavigation = ({ children, className })=>{
    _s2();
    const { activeIndex, slideCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$split$2d$slide$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlideContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex w-full items-center justify-between', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-x-3",
                children: children
            }, void 0, false, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-navigation.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$number$2d$flow$2f$react$2f$dist$2f$NumberFlow$2d$client$2d$BTpPLmzo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__N__as__default$3e$__["default"], {
                        value: activeIndex + 1,
                        format: {
                            useGrouping: false,
                            maximumFractionDigits: 0
                        },
                        transformTiming: {
                            duration: 650,
                            easing: 'ease-out'
                        },
                        spinTiming: {
                            duration: 650,
                            easing: 'ease-out'
                        },
                        opacityTiming: {
                            duration: 300,
                            easing: 'ease-out'
                        },
                        className: "text-secondary font-inter-tight max-[376px]:text-tagline-2 text-[20px] leading-[150%] font-normal"
                    }, void 0, false, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-navigation.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-secondary/40 font-inter-tight max-[376px]:text-tagline-3 text-tagline-1 -ml-0.5 font-normal",
                        children: [
                            "/",
                            slideCount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-navigation.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-navigation.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/hermes saas/hermes-saas/src/components/animation/split-slide/slide-navigation.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(SlideNavigation, "tvqIZjnOmMjnI+YzAXIf9RsFtKg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$src$2f$components$2f$animation$2f$split$2d$slide$2f$split$2d$slide$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlideContext"]
    ];
});
_c3 = SlideNavigation;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "SlideControl");
__turbopack_context__.k.register(_c1, "SlidePrev");
__turbopack_context__.k.register(_c2, "SlideNext");
__turbopack_context__.k.register(_c3, "SlideNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=hermes%20saas_hermes-saas_ffc7de16._.js.map