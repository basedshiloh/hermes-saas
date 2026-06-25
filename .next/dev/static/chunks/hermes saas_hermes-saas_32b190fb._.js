(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/hermes saas/hermes-saas/node_modules/gsap/SplitText.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SplitText",
    ()=>SplitText,
    "default",
    ()=>SplitText
]);
/*!
 * SplitText 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2026, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */ let gsap, _fonts, _splitProp = typeof Symbol === "function" ? Symbol() : "_split", _coreInitted, _initIfNecessary = ()=>_coreInitted || SplitText.register(window.gsap), _charSegmenter = typeof Intl !== "undefined" && "Segmenter" in Intl ? new Intl.Segmenter() : 0, _toArray = (r)=>!r ? [] : typeof r === "string" ? _toArray(document.querySelectorAll(r)) : "length" in r ? Array.from(r).reduce((acc, cur)=>{
        typeof cur === "string" ? acc.push(..._toArray(cur)) : acc.push(cur);
        return acc;
    }, []) : [
        r
    ], _elements = (targets)=>_toArray(targets).filter((e)=>e && e.nodeType === 1), _emptyArray = [], _context = function() {}, _defaultContext = {
    add: (f)=>f()
}, _spacesRegEx = /\s+/g, _emojiSafeRegEx = new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"), _emptyBounds = {
    left: 0,
    top: 0,
    width: 0,
    height: 0
}, _findNextValidBounds = (allBounds, startIndex)=>{
    while(++startIndex < allBounds.length && allBounds[startIndex] === _emptyBounds){}
    return allBounds[startIndex] || _emptyBounds;
}, _revertOriginal = ({ element, html, ariaL, ariaH })=>{
    element.innerHTML = html;
    ariaL ? element.setAttribute("aria-label", ariaL) : element.removeAttribute("aria-label");
    ariaH ? element.setAttribute("aria-hidden", ariaH) : element.removeAttribute("aria-hidden");
}, _stretchToFitSpecialChars = (collection, specialCharsRegEx)=>{
    if (specialCharsRegEx) {
        let charsFound = new Set(collection.join("").match(specialCharsRegEx) || _emptyArray), i = collection.length, slots, word, char, combined;
        if (charsFound.size) {
            while(--i > -1){
                word = collection[i];
                for (char of charsFound){
                    if (char.startsWith(word) && char.length > word.length) {
                        slots = 0;
                        combined = word;
                        while(char.startsWith(combined += collection[i + ++slots]) && combined.length < char.length){}
                        if (slots && combined.length === char.length) {
                            collection[i] = char;
                            collection.splice(i + 1, slots);
                            break;
                        }
                    }
                }
            }
        }
    }
    return collection;
}, _disallowInline = (element)=>window.getComputedStyle(element).display === "inline" && (element.style.display = "inline-block"), _insertNodeBefore = (newChild, parent, existingChild)=>parent.insertBefore(typeof newChild === "string" ? document.createTextNode(newChild) : newChild, existingChild), _getWrapper = (type, config, collection)=>{
    let className = config[type + "sClass"] || "", { tag = "div", aria = "auto", propIndex = false } = config, display = type === "line" ? "block" : "inline-block", incrementClass = className.indexOf("++") > -1, wrapper = (text)=>{
        let el = document.createElement(tag), i = collection.length + 1;
        className && (el.className = className + (incrementClass ? " " + className + i : ""));
        propIndex && el.style.setProperty("--" + type, i + "");
        aria !== "none" && el.setAttribute("aria-hidden", "true");
        if (tag !== "span") {
            el.style.position = "relative";
            el.style.display = display;
        }
        el.textContent = text;
        collection.push(el);
        return el;
    };
    incrementClass && (className = className.replace("++", ""));
    wrapper.collection = collection;
    return wrapper;
}, _getLineWrapper = (element, nodes, config, collection)=>{
    let lineWrapper = _getWrapper("line", config, collection), textAlign = window.getComputedStyle(element).textAlign || "left";
    return (startIndex, endIndex)=>{
        let newLine = lineWrapper("");
        newLine.style.textAlign = textAlign;
        element.insertBefore(newLine, nodes[startIndex]);
        for(; startIndex < endIndex; startIndex++){
            newLine.appendChild(nodes[startIndex]);
        }
        newLine.normalize();
    };
}, _splitWordsAndCharsRecursively = (element, config, wordWrapper, charWrapper, prepForCharsOnly, deepSlice, ignore, charSplitRegEx, specialCharsRegEx, isNested)=>{
    var _a;
    let nodes = Array.from(element.childNodes), i = 0, { wordDelimiter, reduceWhiteSpace = true, prepareText } = config, elementBounds = element.getBoundingClientRect(), lastBounds = elementBounds, isPreformatted = !reduceWhiteSpace && window.getComputedStyle(element).whiteSpace.substring(0, 3) === "pre", ignoredPreviousSibling = 0, wordsCollection = wordWrapper.collection, wordDelimIsNotSpace, wordDelimString, wordDelimSplitter, curNode, words, curWordEl, startsWithSpace, endsWithSpace, j, bounds, curWordChars, clonedNode, curSubNode, tempSubNode, curTextContent, wordText, lastWordText, k;
    if (typeof wordDelimiter === "object") {
        wordDelimSplitter = wordDelimiter.delimiter || wordDelimiter;
        wordDelimString = wordDelimiter.replaceWith || "";
    } else {
        wordDelimString = wordDelimiter === "" ? "" : wordDelimiter || " ";
    }
    wordDelimIsNotSpace = wordDelimString !== " ";
    for(; i < nodes.length; i++){
        curNode = nodes[i];
        if (curNode.nodeType === 3) {
            curTextContent = curNode.textContent || "";
            if (reduceWhiteSpace) {
                curTextContent = curTextContent.replace(_spacesRegEx, " ");
            } else if (isPreformatted) {
                curTextContent = curTextContent.replace(/\n/g, wordDelimString + "\n");
            }
            prepareText && (curTextContent = prepareText(curTextContent, element));
            curNode.textContent = curTextContent;
            words = wordDelimString || wordDelimSplitter ? curTextContent.split(wordDelimSplitter || wordDelimString) : curTextContent.match(charSplitRegEx) || _emptyArray;
            lastWordText = words[words.length - 1];
            endsWithSpace = wordDelimIsNotSpace ? lastWordText.slice(-1) === " " : !lastWordText;
            lastWordText || words.pop();
            lastBounds = elementBounds;
            startsWithSpace = wordDelimIsNotSpace ? words[0].charAt(0) === " " : !words[0];
            startsWithSpace && _insertNodeBefore(" ", element, curNode);
            words[0] || words.shift();
            _stretchToFitSpecialChars(words, specialCharsRegEx);
            deepSlice && isNested || (curNode.textContent = "");
            for(j = 1; j <= words.length; j++){
                wordText = words[j - 1];
                if (!reduceWhiteSpace && isPreformatted && wordText.charAt(0) === "\n") {
                    (_a = curNode.previousSibling) == null ? void 0 : _a.remove();
                    _insertNodeBefore(document.createElement("br"), element, curNode);
                    wordText = wordText.slice(1);
                }
                if (!reduceWhiteSpace && wordText === "") {
                    _insertNodeBefore(wordDelimString, element, curNode);
                } else if (wordText === " ") {
                    element.insertBefore(document.createTextNode(" "), curNode);
                } else {
                    wordDelimIsNotSpace && wordText.charAt(0) === " " && _insertNodeBefore(" ", element, curNode);
                    if (ignoredPreviousSibling && j === 1 && !startsWithSpace && wordsCollection.indexOf(ignoredPreviousSibling.parentNode) > -1) {
                        curWordEl = wordsCollection[wordsCollection.length - 1];
                        curWordEl.appendChild(document.createTextNode(charWrapper ? "" : wordText));
                    } else {
                        curWordEl = wordWrapper(charWrapper ? "" : wordText);
                        _insertNodeBefore(curWordEl, element, curNode);
                        ignoredPreviousSibling && j === 1 && !startsWithSpace && curWordEl.insertBefore(ignoredPreviousSibling, curWordEl.firstChild);
                    }
                    if (charWrapper) {
                        curWordChars = _charSegmenter ? _stretchToFitSpecialChars([
                            ..._charSegmenter.segment(wordText)
                        ].map((s)=>s.segment), specialCharsRegEx) : wordText.match(charSplitRegEx) || _emptyArray;
                        for(k = 0; k < curWordChars.length; k++){
                            curWordEl.appendChild(curWordChars[k] === " " ? document.createTextNode(" ") : charWrapper(curWordChars[k]));
                        }
                    }
                    if (deepSlice && isNested) {
                        curTextContent = curNode.textContent = curTextContent.substring(wordText.length + 1, curTextContent.length);
                        bounds = curWordEl.getBoundingClientRect();
                        if (bounds.top > lastBounds.top && bounds.left <= lastBounds.left) {
                            clonedNode = element.cloneNode();
                            curSubNode = element.childNodes[0];
                            while(curSubNode && curSubNode !== curWordEl){
                                tempSubNode = curSubNode;
                                curSubNode = curSubNode.nextSibling;
                                clonedNode.appendChild(tempSubNode);
                            }
                            element.parentNode.insertBefore(clonedNode, element);
                            prepForCharsOnly && _disallowInline(clonedNode);
                        }
                        lastBounds = bounds;
                    }
                    if (j < words.length || endsWithSpace) {
                        _insertNodeBefore(j >= words.length ? " " : wordDelimIsNotSpace && wordText.slice(-1) === " " ? " " + wordDelimString : wordDelimString, element, curNode);
                    }
                }
            }
            element.removeChild(curNode);
            ignoredPreviousSibling = 0;
        } else if (curNode.nodeType === 1) {
            if (ignore && ignore.indexOf(curNode) > -1) {
                wordsCollection.indexOf(curNode.previousSibling) > -1 && wordsCollection[wordsCollection.length - 1].appendChild(curNode);
                ignoredPreviousSibling = curNode;
            } else {
                _splitWordsAndCharsRecursively(curNode, config, wordWrapper, charWrapper, prepForCharsOnly, deepSlice, ignore, charSplitRegEx, specialCharsRegEx, true);
                ignoredPreviousSibling = 0;
            }
            prepForCharsOnly && _disallowInline(curNode);
        }
    }
};
const _SplitText = class _SplitText {
    constructor(elements, config){
        this.isSplit = false;
        _initIfNecessary();
        this.elements = _elements(elements);
        this.chars = [];
        this.words = [];
        this.lines = [];
        this.masks = [];
        this.vars = config;
        this.elements.forEach((el)=>{
            var _a;
            config.overwrite !== false && ((_a = el[_splitProp]) == null ? void 0 : _a._data.orig.filter(({ element })=>element === el).forEach(_revertOriginal));
            el[_splitProp] = this;
        });
        this._split = ()=>this.isSplit && this.split(this.vars);
        let orig = [], timerId, checkWidths = ()=>{
            let i = orig.length, o;
            while(i--){
                o = orig[i];
                let w = o.element.offsetWidth;
                if (w !== o.width) {
                    o.width = w;
                    this._split();
                    return;
                }
            }
        };
        this._data = {
            orig,
            obs: typeof ResizeObserver !== "undefined" && new ResizeObserver(()=>{
                clearTimeout(timerId);
                timerId = setTimeout(checkWidths, 200);
            })
        };
        _context(this);
        this.split(config);
    }
    split(config) {
        (this._ctx || _defaultContext).add(()=>{
            this.isSplit && this.revert();
            this.vars = config = config || this.vars || {};
            let { type = "chars,words,lines", aria = "auto", deepSlice = true, smartWrap, onSplit, autoSplit = false, specialChars, mask } = this.vars, splitLines = type.indexOf("lines") > -1, splitCharacters = type.indexOf("chars") > -1, splitWords = type.indexOf("words") > -1, onlySplitCharacters = splitCharacters && !splitWords && !splitLines, specialCharsRegEx = specialChars && ("push" in specialChars ? new RegExp("(?:" + specialChars.join("|") + ")", "gu") : specialChars), finalCharSplitRegEx = specialCharsRegEx ? new RegExp(specialCharsRegEx.source + "|" + _emojiSafeRegEx.source, "gu") : _emojiSafeRegEx, ignore = !!config.ignore && _elements(config.ignore), { orig, animTime, obs } = this._data, onSplitResult;
            if (splitCharacters || splitWords || splitLines) {
                this.elements.forEach((element, index)=>{
                    orig[index] = {
                        element,
                        html: element.innerHTML,
                        ariaL: element.getAttribute("aria-label"),
                        ariaH: element.getAttribute("aria-hidden")
                    };
                    aria === "auto" ? element.setAttribute("aria-label", (element.textContent || "").trim()) : aria === "hidden" && element.setAttribute("aria-hidden", "true");
                    let chars = [], words = [], lines = [], charWrapper = splitCharacters ? _getWrapper("char", config, chars) : null, wordWrapper = _getWrapper("word", config, words), i, curWord, smartWrapSpan, nextSibling;
                    _splitWordsAndCharsRecursively(element, config, wordWrapper, charWrapper, onlySplitCharacters, deepSlice && (splitLines || onlySplitCharacters), ignore, finalCharSplitRegEx, specialCharsRegEx, false);
                    if (splitLines) {
                        let nodes = _toArray(element.childNodes), wrapLine = _getLineWrapper(element, nodes, config, lines), curNode, toRemove = [], lineStartIndex = 0, allBounds = nodes.map((n)=>n.nodeType === 1 ? n.getBoundingClientRect() : _emptyBounds), lastBounds = _emptyBounds, curBounds;
                        for(i = 0; i < nodes.length; i++){
                            curNode = nodes[i];
                            if (curNode.nodeType === 1) {
                                if (curNode.nodeName === "BR") {
                                    if (!i || nodes[i - 1].nodeName !== "BR") {
                                        toRemove.push(curNode);
                                        wrapLine(lineStartIndex, i + 1);
                                    }
                                    lineStartIndex = i + 1;
                                    lastBounds = _findNextValidBounds(allBounds, i);
                                } else {
                                    curBounds = allBounds[i];
                                    if (i && curBounds.top > lastBounds.top && curBounds.left < lastBounds.left + lastBounds.width - 1) {
                                        wrapLine(lineStartIndex, i);
                                        lineStartIndex = i;
                                    }
                                    lastBounds = curBounds;
                                }
                            }
                        }
                        lineStartIndex < i && wrapLine(lineStartIndex, i);
                        toRemove.forEach((el)=>{
                            var _a;
                            return (_a = el.parentNode) == null ? void 0 : _a.removeChild(el);
                        });
                    }
                    if (!splitWords) {
                        for(i = 0; i < words.length; i++){
                            curWord = words[i];
                            if (splitCharacters || !curWord.nextSibling || curWord.nextSibling.nodeType !== 3) {
                                if (smartWrap && !splitLines) {
                                    smartWrapSpan = document.createElement("span");
                                    smartWrapSpan.style.whiteSpace = "nowrap";
                                    while(curWord.firstChild){
                                        smartWrapSpan.appendChild(curWord.firstChild);
                                    }
                                    curWord.replaceWith(smartWrapSpan);
                                } else {
                                    curWord.replaceWith(...curWord.childNodes);
                                }
                            } else {
                                nextSibling = curWord.nextSibling;
                                if (nextSibling && nextSibling.nodeType === 3) {
                                    nextSibling.textContent = (curWord.textContent || "") + (nextSibling.textContent || "");
                                    curWord.remove();
                                }
                            }
                        }
                        words.length = 0;
                        element.normalize();
                    }
                    this.lines.push(...lines);
                    this.words.push(...words);
                    this.chars.push(...chars);
                });
                mask && this[mask] && this.masks.push(...this[mask].map((el)=>{
                    let maskEl = el.cloneNode();
                    el.replaceWith(maskEl);
                    maskEl.appendChild(el);
                    el.className && (maskEl.className = el.className.trim().split(" ").map((s)=>s + "-mask").join(" "));
                    maskEl.style.overflow = "clip";
                    return maskEl;
                }));
            }
            this.isSplit = true;
            _fonts && splitLines && autoSplit && _fonts.addEventListener("loadingdone", this._split);
            if ((onSplitResult = onSplit && onSplit(this)) && onSplitResult.totalTime) {
                this._data.anim = animTime ? onSplitResult.totalTime(animTime) : onSplitResult;
            }
            splitLines && autoSplit && this.elements.forEach((element, index)=>{
                orig[index].width = element.offsetWidth;
                obs && obs.observe(element);
            });
        });
        return this;
    }
    kill() {
        let { obs } = this._data;
        obs && obs.disconnect();
        _fonts == null ? void 0 : _fonts.removeEventListener("loadingdone", this._split);
    }
    revert() {
        var _a, _b;
        if (this.isSplit) {
            let { orig, anim } = this._data;
            this.kill();
            orig.forEach(_revertOriginal);
            this.chars.length = this.words.length = this.lines.length = orig.length = this.masks.length = 0;
            this.isSplit = false;
            if (anim) {
                this._data.animTime = anim.totalTime();
                anim.revert();
            }
            (_b = (_a = this.vars).onRevert) == null ? void 0 : _b.call(_a, this);
        }
        return this;
    }
    static create(elements, config) {
        return new _SplitText(elements, config);
    }
    static register(core) {
        gsap = gsap || core || window.gsap;
        if (gsap) {
            _toArray = gsap.utils.toArray;
            _context = gsap.core.context || _context;
        }
        if (!_coreInitted && window.innerWidth > 0) {
            _fonts = document.fonts;
            _coreInitted = true;
        }
    }
};
_SplitText.version = "3.15.0";
let SplitText = _SplitText;
;
}),
"[project]/hermes saas/hermes-saas/node_modules/esm-env/true.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = true;
}),
"[project]/hermes saas/hermes-saas/node_modules/esm-env/false.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = false;
}),
"[project]/hermes saas/hermes-saas/node_modules/esm-env/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$esm$2d$env$2f$true$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/esm-env/true.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$esm$2d$env$2f$false$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/esm-env/false.js [app-client] (ecmascript)");
;
;
;
}),
"[project]/hermes saas/hermes-saas/node_modules/esm-env/true.js [app-client] (ecmascript) <export default as BROWSER>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BROWSER",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$esm$2d$env$2f$true$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$esm$2d$env$2f$true$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/esm-env/true.js [app-client] (ecmascript)");
}),
"[project]/hermes saas/hermes-saas/node_modules/number-flow/dist/ssr-Cre0Q1Ju.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "S",
    ()=>M,
    "a",
    ()=>$,
    "b",
    ()=>x,
    "c",
    ()=>k,
    "d",
    ()=>v,
    "e",
    ()=>_,
    "f",
    ()=>c,
    "g",
    ()=>u,
    "o",
    ()=>d,
    "p",
    ()=>S,
    "r",
    ()=>V,
    "s",
    ()=>b,
    "w",
    ()=>g
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$esm$2d$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/esm-env/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$esm$2d$env$2f$true$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BROWSER$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/esm-env/true.js [app-client] (ecmascript) <export default as BROWSER>");
;
const h = String.raw, m = String.raw, v = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$esm$2d$env$2f$true$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BROWSER$3e$__["BROWSER"] && (()=>{
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        });
    } catch  {
        return !1;
    }
    return !0;
})(), k = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$esm$2d$env$2f$true$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BROWSER$3e$__["BROWSER"] && typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), S = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$esm$2d$env$2f$true$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BROWSER$3e$__["BROWSER"] && typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null, d = "--_number-flow-d-opacity", g = "--_number-flow-d-width", c = "--_number-flow-dx", u = "--_number-flow-d", _ = (()=>{
    try {
        return CSS.registerProperty({
            name: d,
            syntax: "<number>",
            inherits: !1,
            initialValue: "0"
        }), CSS.registerProperty({
            name: c,
            syntax: "<length>",
            inherits: !0,
            initialValue: "0px"
        }), CSS.registerProperty({
            name: g,
            syntax: "<number>",
            inherits: !1,
            initialValue: "0"
        }), CSS.registerProperty({
            name: u,
            syntax: "<number>",
            inherits: !0,
            initialValue: "0"
        }), !0;
    } catch  {
        return !1;
    }
})(), s = "round(nearest, calc(var(--number-flow-mask-height, 0.25em) / 2), 1px)", e = `calc(${s} * 2)`, p = "var(--number-flow-mask-width, 0.5em)", n = `calc(${p} / var(--scale-x))`, r = "#000 0, transparent 71%", x = m`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:1}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${g}) / var(--width));transform:translateX(var(${c})) scaleX(var(--scale-x));margin:0 calc(-1 * ${p});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${n},#000 calc(100% - ${n}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${e},#000 calc(100% - ${e}),transparent 100% ),radial-gradient(at bottom right,${r}),radial-gradient(at bottom left,${r}),radial-gradient(at top left,${r}),radial-gradient(at top right,${r});-webkit-mask-size:100% calc(100% - ${e} * 2),calc(100% - ${n} * 2) 100%,${n} ${e},${n} ${e},${n} ${e},${n} ${e};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${s} ${p};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${c})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${u})}.digit__num,.number .section::after{padding:${s} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${d}))}`, M = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$esm$2d$env$2f$true$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BROWSER$3e$__["BROWSER"] ? HTMLElement : class {
}, b = m`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:1}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${s} 0}.symbol{white-space:pre}`, y = (t)=>`<span class="${t.type === "integer" || t.type === "fraction" ? "digit" : "symbol"}" part="${t.type === "integer" || t.type === "fraction" ? `digit ${t.type}-digit` : `symbol ${t.type}`}">${t.value}</span>`, i = (t, a)=>`<span part="${a}">${t.reduce((l, f)=>l + y(f), "")}</span>`, $ = (t = "")=>m`:where(number-flow${t}){line-height:1}number-flow${t} > span{font-kerning:none;display:inline-block;padding:${e} 0}`, V = (t, { nonce: a, elementSuffix: l } = {})=>// shadowroot="open" non-standard attribute for old Chrome:
    h`<template shadowroot="open" shadowrootmode="open"
			><style${a ? ` nonce="${a}"` : ""}>${b}</style
			><span role="img" aria-label="${t.valueAsString}"
				>${i(t.pre, "left")}<span part="number" class="number"
					>${i(t.integer, "integer")}${i(t.fraction, "fraction")}</span
				>${i(t.post, "right")}</span
			></template
		><style${a ? ` nonce="${a}"` : ""}>${$(l)}</style
		><span>${t.valueAsString}</span>`;
;
}),
"[project]/hermes saas/hermes-saas/node_modules/number-flow/dist/plugins.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "continuous",
    ()=>l
]);
const f = (e, n)=>e == null ? n : n == null ? e : Math.max(e, n), i = /* @__PURE__ */ new WeakMap(), l = {
    onUpdate (e, n, o) {
        if (i.set(o, void 0), !o.computedTrend) return;
        const s = n.integer.concat(n.fraction).filter((t)=>t.type === "integer" || t.type === "fraction"), r = e.integer.concat(e.fraction).filter((t)=>t.type === "integer" || t.type === "fraction"), u = s.find((t)=>!r.find((c)=>c.pos === t.pos && c.value === t.value)), a = r.find((t)=>!s.find((c)=>t.pos === c.pos && t.value === c.value));
        i.set(o, f(u == null ? void 0 : u.pos, a == null ? void 0 : a.pos));
    },
    getDelta (e, n, o) {
        const s = e - n, r = i.get(o.flow);
        if (!s && r != null && r >= o.pos) return o.length * o.flow.computedTrend;
    }
};
;
}),
"[project]/hermes saas/hermes-saas/node_modules/number-flow/dist/lite.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Digit",
    ()=>x,
    "canAnimate",
    ()=>B,
    "default",
    ()=>D,
    "define",
    ()=>X,
    "formatToData",
    ()=>z
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$esm$2d$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/esm-env/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$esm$2d$env$2f$true$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BROWSER$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/esm-env/true.js [app-client] (ecmascript) <export default as BROWSER>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/number-flow/dist/ssr-Cre0Q1Ju.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$plugins$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/number-flow/dist/plugins.mjs [app-client] (ecmascript)");
;
;
;
;
const p = (n, t, e)=>{
    const i = document.createElement(n), [s, o] = Array.isArray(t) ? [
        void 0,
        t
    ] : [
        t,
        e
    ];
    return s && Object.assign(i, s), o == null || o.forEach((a)=>i.appendChild(a)), i;
}, V = (n, t)=>{
    var e;
    return t === "left" ? n.offsetLeft : (((e = n.offsetParent instanceof HTMLElement ? n.offsetParent : null) == null ? void 0 : e.offsetWidth) ?? 0) - n.offsetWidth - n.offsetLeft;
}, W = (n)=>n.offsetWidth > 0 && n.offsetHeight > 0, X = (n, t)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$esm$2d$env$2f$true$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BROWSER$3e$__["BROWSER"] && !customElements.get(n) && customElements.define(n, t);
};
function k(n, t, { reverse: e = !1 } = {}) {
    const i = n.length;
    for(let s = e ? i - 1 : 0; e ? s >= 0 : s < i; e ? s-- : s++)t(n[s], s);
}
function z(n, t, e, i) {
    const s = t.formatToParts(n);
    e && s.unshift({
        type: "prefix",
        value: e
    }), i && s.push({
        type: "suffix",
        value: i
    });
    const o = [], a = [], r = [], d = [], c = {}, f = (l)=>`${l}:${c[l] = (c[l] ?? -1) + 1}`;
    let u = "", m = !1, g = !1;
    for (const l of s){
        u += l.value;
        const h = l.type === "minusSign" || l.type === "plusSign" ? "sign" : l.type;
        h === "integer" ? (m = !0, a.push(...l.value.split("").map((_)=>({
                type: h,
                value: parseInt(_)
            })))) : h === "group" ? a.push({
            type: h,
            value: l.value
        }) : h === "decimal" ? (g = !0, r.push({
            type: h,
            value: l.value,
            key: f(h)
        })) : h === "fraction" ? r.push(...l.value.split("").map((_)=>({
                type: h,
                value: parseInt(_),
                key: f(h),
                pos: -1 - c[h]
            }))) : (m || g ? d : o).push({
            type: h,
            value: l.value,
            key: f(h)
        });
    }
    const v = [];
    for(let l = a.length - 1; l >= 0; l--){
        const h = a[l];
        v.unshift(h.type === "integer" ? {
            ...h,
            key: f(h.type),
            pos: c[h.type]
        } : {
            ...h,
            key: f(h.type)
        });
    }
    return {
        pre: o,
        integer: v,
        fraction: r,
        post: d,
        valueAsString: u,
        value: typeof n == "string" ? parseFloat(n) : n
    };
}
const B = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"] && __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"] && __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"];
class D extends __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["S"] {
    constructor(){
        super(), this.created = !1, this.batched = !1;
        const { animated: t, ...e } = this.constructor.defaultProps;
        this._animated = this.computedAnimated = t, Object.assign(this, e);
    }
    get animated() {
        return this._animated;
    }
    set animated(t) {
        var e;
        this.animated !== t && (this._animated = t, (e = this.shadowRoot) == null || e.getAnimations().forEach((i)=>i.finish()));
    }
    /**
   * @internal
   */ set data(t) {
        var r, d;
        if (t == null) return;
        const { pre: e, integer: i, fraction: s, post: o, value: a } = t;
        if (this.created) {
            const c = this._data;
            this._data = t, this.computedTrend = typeof this.trend == "function" ? this.trend(c.value, a) : this.trend, this.computedAnimated = B && this._animated && (!this.respectMotionPreference || !((r = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p"]) != null && r.matches)) && // https://github.com/barvian/number-flow/issues/9
            W(this) && // https://github.com/barvian/number-flow/issues/165
            this.ownerDocument.visibilityState === "visible", (d = this.plugins) == null || d.forEach((f)=>{
                var u;
                return (u = f.onUpdate) == null ? void 0 : u.call(f, t, c, this);
            }), this.batched || this.willUpdate(), this._pre.update(e), this._num.update({
                integer: i,
                fraction: s
            }), this._post.update(o), this.batched || this.didUpdate();
        } else {
            this._data = t, this.attachShadow({
                mode: "open"
            });
            try {
                this._internals ?? (this._internals = this.attachInternals()), this._internals.role = "img";
            } catch  {}
            const c = document.createElement("style");
            this.nonce && (c.nonce = this.nonce), c.textContent = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"], this.shadowRoot.appendChild(c), this._pre = new A(this, e, {
                justify: "right",
                part: "left"
            }), this.shadowRoot.appendChild(this._pre.el), this._num = new F(this, i, s), this.shadowRoot.appendChild(this._num.el), this._post = new A(this, o, {
                justify: "left",
                part: "right"
            }), this.shadowRoot.appendChild(this._post.el), this.created = !0;
        }
        try {
            this._internals.ariaLabel = t.valueAsString;
        } catch  {}
    }
    /**
   * @internal
   */ willUpdate() {
        this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate();
    }
    /**
   * @internal
   */ didUpdate() {
        if (!this.computedAnimated) return;
        this._abortAnimationsFinish ? this._abortAnimationsFinish.abort() : this.dispatchEvent(new Event("animationsstart")), this._pre.didUpdate(), this._num.didUpdate(), this._post.didUpdate();
        const t = new AbortController();
        Promise.all(this.shadowRoot.getAnimations().map((e)=>e.finished)).then(()=>{
            t.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), this._abortAnimationsFinish = void 0);
        }), this._abortAnimationsFinish = t;
    }
}
D.defaultProps = {
    transformTiming: {
        duration: 900,
        // Make sure to keep this minified:
        easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
    },
    spinTiming: void 0,
    opacityTiming: {
        duration: 450,
        easing: "ease-out"
    },
    animated: !0,
    trend: (n, t)=>Math.sign(t - n),
    respectMotionPreference: !0,
    plugins: void 0,
    digits: void 0
};
class F {
    constructor(t, e, i, { className: s, ...o } = {}){
        this.flow = t, this._integer = new b(t, e, {
            justify: "right",
            part: "integer"
        }), this._fraction = new b(t, i, {
            justify: "left",
            part: "fraction"
        }), this._inner = p("span", {
            className: "number__inner"
        }, [
            this._integer.el,
            this._fraction.el
        ]), this.el = p("span", {
            ...o,
            part: "number",
            className: `number ${s ?? ""}`
        }, [
            this._inner
        ]);
    }
    willUpdate() {
        this._prevWidth = this.el.offsetWidth, this._prevLeft = this.el.getBoundingClientRect().left, this._integer.willUpdate(), this._fraction.willUpdate();
    }
    update({ integer: t, fraction: e }) {
        this._integer.update(t), this._fraction.update(e);
    }
    didUpdate() {
        const t = this.el.getBoundingClientRect();
        this._integer.didUpdate(), this._fraction.didUpdate();
        const e = this._prevLeft - t.left, i = this.el.offsetWidth, s = this._prevWidth - i;
        this.el.style.setProperty("--width", String(i)), this.el.animate({
            [__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"]]: [
                `${e}px`,
                "0px"
            ],
            [__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"]]: [
                s,
                0
            ]
        }, {
            ...this.flow.transformTiming,
            composite: "accumulate"
        });
    }
}
class E {
    constructor(t, e, { justify: i, className: s, ...o }, a){
        this.flow = t, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (d)=>()=>{
                this.children.delete(d);
            }, this.justify = i;
        const r = e.map((d)=>this.addChar(d).el);
        this.el = p("span", {
            ...o,
            className: `section section--justify-${i} ${s ?? ""}`
        }, a ? a(r) : r);
    }
    addChar(t, { startDigitsAtZero: e = !1, ...i } = {}) {
        const s = t.type === "integer" || t.type === "fraction" ? new x(this, t.type, e ? 0 : t.value, t.pos, {
            ...i,
            onRemove: this.onCharRemove(t.key)
        }) : new I(this, t.type, t.value, {
            ...i,
            onRemove: this.onCharRemove(t.key)
        });
        return this.children.set(t.key, s), s;
    }
    unpop(t) {
        t.el.removeAttribute("inert"), t.el.style.top = "", t.el.style[this.justify] = "";
    }
    pop(t) {
        t.forEach((e)=>{
            e.el.style.top = `${e.el.offsetTop}px`, e.el.style[this.justify] = `${V(e.el, this.justify)}px`;
        }), t.forEach((e)=>{
            e.el.setAttribute("inert", ""), e.present = !1;
        });
    }
    addNewAndUpdateExisting(t) {
        const e = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = this.justify === "left", o = s ? "prepend" : "append";
        if (k(t, (a)=>{
            let r;
            this.children.has(a.key) ? (r = this.children.get(a.key), i.set(a, r), this.unpop(r), r.present = !0) : (r = this.addChar(a, {
                startDigitsAtZero: !0,
                animateIn: !0
            }), e.set(a, r)), this.el[o](r.el);
        }, {
            reverse: s
        }), this.flow.computedAnimated) {
            const a = this.el.getBoundingClientRect();
            e.forEach((r)=>{
                r.willUpdate(a);
            });
        }
        e.forEach((a, r)=>{
            a.update(r.value);
        }), i.forEach((a, r)=>{
            a.update(r.value);
        });
    }
    willUpdate() {
        const t = this.el.getBoundingClientRect();
        this._prevOffset = t[this.justify], this.children.forEach((e)=>e.willUpdate(t));
    }
    didUpdate() {
        const t = this.el.getBoundingClientRect();
        this.children.forEach((s)=>s.didUpdate(t));
        const e = t[this.justify], i = this._prevOffset - e;
        i && this.children.size && this.el.animate({
            transform: [
                `translateX(${i}px)`,
                "none"
            ]
        }, {
            ...this.flow.transformTiming,
            composite: "accumulate"
        });
    }
}
class b extends E {
    update(t) {
        const e = /* @__PURE__ */ new Map();
        this.children.forEach((i, s)=>{
            t.find((o)=>o.key === s) || e.set(s, i), this.unpop(i);
        }), this.addNewAndUpdateExisting(t), e.forEach((i)=>{
            i instanceof x && i.update(0);
        }), this.pop(e);
    }
}
class A extends E {
    update(t) {
        const e = /* @__PURE__ */ new Map();
        this.children.forEach((i, s)=>{
            t.find((o)=>o.key === s) || e.set(s, i);
        }), this.pop(e), this.addNewAndUpdateExisting(t);
    }
}
class y {
    constructor(t, e, { onRemove: i, animateIn: s = !1 } = {}){
        this.flow = t, this.el = e, this._present = !0, this._remove = ()=>{
            var o;
            this.el.remove(), (o = this._onRemove) == null || o.call(this);
        }, this.el.classList.add("animate-presence"), this.flow.computedAnimated && s && this.el.animate({
            [__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"]]: [
                -0.9999,
                0
            ]
        }, {
            ...this.flow.opacityTiming,
            composite: "accumulate"
        }), this._onRemove = i;
    }
    get present() {
        return this._present;
    }
    set present(t) {
        if (this._present !== t) {
            if (this._present = t, t ? this.el.removeAttribute("inert") : this.el.setAttribute("inert", ""), !this.flow.computedAnimated) {
                t || this._remove();
                return;
            }
            this.el.style.setProperty("--_number-flow-d-opacity", t ? "0" : "-.999"), this.el.animate({
                [__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"]]: t ? [
                    -0.9999,
                    0
                ] : [
                    0.999,
                    0
                ]
            }, {
                ...this.flow.opacityTiming,
                composite: "accumulate"
            }), t ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, {
                once: !0
            });
        }
    }
}
class R extends y {
    constructor(t, e, i, s){
        super(t.flow, i, s), this.section = t, this.value = e, this.el = i;
    }
}
class x extends R {
    constructor(t, e, i, s, o){
        var c, f;
        const a = (((f = (c = t.flow.digits) == null ? void 0 : c[s]) == null ? void 0 : f.max) ?? 9) + 1, r = Array.from({
            length: a
        }).map((u, m)=>{
            const g = p("span", {
                className: "digit__num"
            }, [
                document.createTextNode(String(m))
            ]);
            return m !== i && g.setAttribute("inert", ""), g.style.setProperty("--n", String(m)), g;
        }), d = p("span", {
            part: `digit ${e}-digit`,
            className: "digit"
        }, r);
        d.style.setProperty("--current", String(i)), d.style.setProperty("--length", String(a)), super(t, i, d, o), this.pos = s, this._onAnimationsFinish = ()=>{
            this.el.classList.remove("is-spinning");
        }, this._numbers = r, this.length = a;
    }
    willUpdate(t) {
        const e = this.el.getBoundingClientRect();
        this._prevValue = this.value;
        const i = e[this.section.justify] - t[this.section.justify], s = e.width / 2;
        this._prevCenter = this.section.justify === "left" ? i + s : i - s;
    }
    update(t) {
        this.el.style.setProperty("--current", String(t)), this._numbers.forEach((e, i)=>i === t ? e.removeAttribute("inert") : e.setAttribute("inert", "")), this.value = t;
    }
    didUpdate(t) {
        const e = this.el.getBoundingClientRect(), i = e[this.section.justify] - t[this.section.justify], s = e.width / 2, o = this.section.justify === "left" ? i + s : i - s, a = this._prevCenter - o;
        a && this.el.animate({
            transform: [
                `translateX(${a}px)`,
                "none"
            ]
        }, {
            ...this.flow.transformTiming,
            composite: "accumulate"
        });
        const r = this.getDelta();
        r && (this.el.classList.add("is-spinning"), this.el.animate({
            [__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"]]: [
                -r,
                0
            ]
        }, {
            ...this.flow.spinTiming ?? this.flow.transformTiming,
            composite: "accumulate"
        }), this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, {
            once: !0
        }));
    }
    getDelta() {
        var i;
        if (this.flow.plugins) for (const s of this.flow.plugins){
            const o = (i = s.getDelta) == null ? void 0 : i.call(s, this.value, this._prevValue, this);
            if (o != null) return o;
        }
        const t = this.value - this._prevValue, e = this.flow.computedTrend || Math.sign(t);
        return e < 0 && this.value > this._prevValue ? this.value - this.length - this._prevValue : e > 0 && this.value < this._prevValue ? this.length - this._prevValue + this.value : t;
    }
}
class I extends R {
    constructor(t, e, i, s){
        const o = p("span", {
            className: "symbol__value",
            textContent: i
        });
        super(t, i, p("span", {
            part: `symbol ${e}`,
            className: "symbol"
        }, [
            o
        ]), s), this.type = e, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (a)=>()=>{
                this._children.delete(a);
            }, this._children.set(i, new y(this.flow, o, {
            onRemove: this._onChildRemove(i)
        }));
    }
    willUpdate(t) {
        if (this.type === "decimal") return;
        const e = this.el.getBoundingClientRect();
        this._prevOffset = e[this.section.justify] - t[this.section.justify];
    }
    update(t) {
        if (this.value !== t) {
            const e = this._children.get(this.value);
            e && (e.present = !1);
            const i = this._children.get(t);
            if (i) i.present = !0;
            else {
                const s = p("span", {
                    className: "symbol__value",
                    textContent: t
                });
                this.el.appendChild(s), this._children.set(t, new y(this.flow, s, {
                    animateIn: !0,
                    onRemove: this._onChildRemove(t)
                }));
            }
        }
        this.value = t;
    }
    didUpdate(t) {
        if (this.type === "decimal") return;
        const i = this.el.getBoundingClientRect()[this.section.justify] - t[this.section.justify], s = this._prevOffset - i;
        s && this.el.animate({
            transform: [
                `translateX(${s}px)`,
                "none"
            ]
        }, {
            ...this.flow.transformTiming,
            composite: "accumulate"
        });
    }
}
;
}),
"[project]/hermes saas/hermes-saas/node_modules/number-flow/dist/ssr-Cre0Q1Ju.mjs [app-client] (ecmascript) <export p as prefersReducedMotion>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prefersReducedMotion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/number-flow/dist/ssr-Cre0Q1Ju.mjs [app-client] (ecmascript)");
}),
"[project]/hermes saas/hermes-saas/node_modules/number-flow/dist/csp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildStyles",
    ()=>r
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/number-flow/dist/ssr-Cre0Q1Ju.mjs [app-client] (ecmascript)");
;
const r = (s)=>[
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"],
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(s),
        __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]
    ];
;
}),
"[project]/hermes saas/hermes-saas/node_modules/number-flow/dist/ssr-Cre0Q1Ju.mjs [app-client] (ecmascript) <export r as renderInnerHTML>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderInnerHTML",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/number-flow/dist/ssr-Cre0Q1Ju.mjs [app-client] (ecmascript)");
}),
"[project]/hermes saas/hermes-saas/node_modules/@number-flow/react/dist/NumberFlow-client-BTpPLmzo.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "N",
    ()=>NumberFlow,
    "a",
    ()=>NumberFlowElement,
    "b",
    ()=>NumberFlowGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$lite$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/number-flow/dist/lite.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__renderInnerHTML$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/number-flow/dist/ssr-Cre0Q1Ju.mjs [app-client] (ecmascript) <export r as renderInnerHTML>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$esm$2d$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/esm-env/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$esm$2d$env$2f$true$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BROWSER$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/esm-env/true.js [app-client] (ecmascript) <export default as BROWSER>");
'use client';
;
;
;
const REACT_MAJOR = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"].match(/^(\d+)\./)?.[1]);
const isReact19 = REACT_MAJOR >= 19;
// Can't wait to not have to do this in React 19:
const OBSERVED_ATTRIBUTES = [
    'data',
    'digits'
];
class NumberFlowElement extends __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$lite$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"] {
    attributeChangedCallback(attr, _oldValue, newValue) {
        this[attr] = JSON.parse(newValue);
    }
}
NumberFlowElement.observedAttributes = isReact19 ? [] : OBSERVED_ATTRIBUTES;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$lite$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["define"])('number-flow-react', NumberFlowElement);
// You're supposed to cache these between uses:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
// Serialize to strings b/c React:
const formatters = {};
// Tiny workaround to support React 19 until it's released:
function identity(v) {
    return v;
}
const serialize = isReact19 ? identity : JSON.stringify;
function splitProps(props) {
    const { transformTiming, spinTiming, opacityTiming, animated, respectMotionPreference, trend, plugins, ...rest } = props;
    return [
        {
            transformTiming,
            spinTiming,
            opacityTiming,
            animated,
            respectMotionPreference,
            trend,
            plugins
        },
        rest
    ];
}
// We need a class component to use getSnapshotBeforeUpdate:
class NumberFlowImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    // Update the non-`data` props to avoid JSON serialization
    // Data needs to be set in render still:
    updateProperties(prevProps) {
        if (!this.el) return;
        this.el.batched = !this.props.isolate;
        const [nonData] = splitProps(this.props);
        Object.entries(nonData).forEach(([k, v])=>{
            // @ts-ignore
            this.el[k] = v ?? NumberFlowElement.defaultProps[k];
        });
        if (prevProps?.onAnimationsStart) this.el.removeEventListener('animationsstart', prevProps.onAnimationsStart);
        if (this.props.onAnimationsStart) this.el.addEventListener('animationsstart', this.props.onAnimationsStart);
        if (prevProps?.onAnimationsFinish) this.el.removeEventListener('animationsfinish', prevProps.onAnimationsFinish);
        if (this.props.onAnimationsFinish) this.el.addEventListener('animationsfinish', this.props.onAnimationsFinish);
    }
    componentDidMount() {
        this.updateProperties();
        if (isReact19 && this.el) {
            // React 19 needs this because the attributeChangedCallback isn't called:
            this.el.digits = this.props.digits;
            this.el.data = this.props.data;
        }
    }
    getSnapshotBeforeUpdate(prevProps) {
        this.updateProperties(prevProps);
        if (prevProps.data !== this.props.data) {
            if (this.props.group) {
                this.props.group.willUpdate();
                return ()=>this.props.group?.didUpdate();
            }
            if (!this.props.isolate) {
                this.el?.willUpdate();
                return ()=>this.el?.didUpdate();
            }
        }
        return null;
    }
    componentDidUpdate(_, __, didUpdate) {
        didUpdate?.();
    }
    handleRef(el) {
        if (this.props.innerRef) this.props.innerRef.current = el;
        this.el = el;
    }
    render() {
        const [_, { innerRef, className, data, nonce, willChange, isolate, group, digits, onAnimationsStart, onAnimationsFinish, ...rest }] = splitProps(this.props);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("number-flow-react", {
            ref: this.handleRef,
            "data-will-change": willChange ? '' : undefined,
            // Have to rename this:
            class: className,
            nonce: nonce,
            ...rest,
            dangerouslySetInnerHTML: {
                __html: __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$esm$2d$env$2f$true$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BROWSER$3e$__["BROWSER"] ? '' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__renderInnerHTML$3e$__["renderInnerHTML"])(data, {
                    nonce,
                    elementSuffix: '-react'
                })
            },
            suppressHydrationWarning: true,
            digits: serialize(digits),
            // Make sure data is set last, everything else is updated:
            data: serialize(data)
        });
    }
    constructor(props){
        super(props);
        this.handleRef = this.handleRef.bind(this);
    }
}
const NumberFlow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function NumberFlow({ value, locales, format, prefix, suffix, ...props }, _ref) {
    __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](_ref, {
        "NumberFlow.NumberFlow.useImperativeHandle": ()=>ref.current
    }["NumberFlow.NumberFlow.useImperativeHandle"], []);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const group = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](NumberFlowGroupContext);
    group?.useRegister(ref);
    const localesString = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "NumberFlow.NumberFlow.useMemo[localesString]": ()=>locales ? JSON.stringify(locales) : ''
    }["NumberFlow.NumberFlow.useMemo[localesString]"], [
        locales
    ]);
    const formatString = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "NumberFlow.NumberFlow.useMemo[formatString]": ()=>format ? JSON.stringify(format) : ''
    }["NumberFlow.NumberFlow.useMemo[formatString]"], [
        format
    ]);
    const data = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "NumberFlow.NumberFlow.useMemo[data]": ()=>{
            const formatter = formatters[`${localesString}:${formatString}`] ??= new Intl.NumberFormat(locales, format);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$lite$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatToData"])(value, formatter, prefix, suffix);
        }
    }["NumberFlow.NumberFlow.useMemo[data]"], [
        value,
        localesString,
        formatString,
        prefix,
        suffix
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](NumberFlowImpl, {
        ...props,
        group: group,
        data: data,
        innerRef: ref
    });
});
const NumberFlowGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
function NumberFlowGroup({ children }) {
    const flows = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](new Set());
    const updating = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const pending = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](new WeakMap());
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "NumberFlowGroup.useMemo[value]": ()=>({
                useRegister (ref) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
                        "NumberFlowGroup.useMemo[value]": ()=>{
                            flows.current.add(ref);
                            return ({
                                "NumberFlowGroup.useMemo[value]": ()=>{
                                    flows.current.delete(ref);
                                }
                            })["NumberFlowGroup.useMemo[value]"];
                        }
                    }["NumberFlowGroup.useMemo[value]"], []);
                },
                willUpdate () {
                    if (updating.current) return;
                    updating.current = true;
                    flows.current.forEach({
                        "NumberFlowGroup.useMemo[value]": (ref)=>{
                            const f = ref.current;
                            if (!f || !f.created) return;
                            f.willUpdate();
                            pending.current.set(f, true);
                        }
                    }["NumberFlowGroup.useMemo[value]"]);
                },
                didUpdate () {
                    flows.current.forEach({
                        "NumberFlowGroup.useMemo[value]": (ref)=>{
                            const f = ref.current;
                            if (!f || !pending.current.get(f)) return;
                            f.didUpdate();
                            pending.current.delete(f);
                        }
                    }["NumberFlowGroup.useMemo[value]"]);
                    updating.current = false;
                }
            })
    }["NumberFlowGroup.useMemo[value]"], []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](NumberFlowGroupContext.Provider, {
        value: value
    }, children);
}
;
}),
"[project]/hermes saas/hermes-saas/node_modules/@number-flow/react/dist/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styles",
    ()=>styles,
    "useCanAnimate",
    ()=>useCanAnimate,
    "useIsSupported",
    ()=>useIsSupported,
    "usePrefersReducedMotion",
    ()=>usePrefersReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$lite$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/number-flow/dist/lite.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__prefersReducedMotion$3e$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/number-flow/dist/ssr-Cre0Q1Ju.mjs [app-client] (ecmascript) <export p as prefersReducedMotion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$csp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/number-flow/dist/csp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$plugins$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/number-flow/dist/plugins.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$number$2d$flow$2f$react$2f$dist$2f$NumberFlow$2d$client$2d$BTpPLmzo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@number-flow/react/dist/NumberFlow-client-BTpPLmzo.mjs [app-client] (ecmascript)");
;
;
;
;
;
const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$csp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildStyles"])('-react');
const useIsSupported = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]({
        "useIsSupported.useSyncExternalStore": ()=>({
                "useIsSupported.useSyncExternalStore": ()=>{}
            })["useIsSupported.useSyncExternalStore"]
    }["useIsSupported.useSyncExternalStore"], {
        "useIsSupported.useSyncExternalStore": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$lite$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["canAnimate"]
    }["useIsSupported.useSyncExternalStore"], {
        "useIsSupported.useSyncExternalStore": ()=>false
    }["useIsSupported.useSyncExternalStore"]);
const usePrefersReducedMotion = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]({
        "usePrefersReducedMotion.useSyncExternalStore": (cb)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__prefersReducedMotion$3e$__["prefersReducedMotion"]?.addEventListener('change', cb);
            return ({
                "usePrefersReducedMotion.useSyncExternalStore": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__prefersReducedMotion$3e$__["prefersReducedMotion"]?.removeEventListener('change', cb)
            })["usePrefersReducedMotion.useSyncExternalStore"];
        }
    }["usePrefersReducedMotion.useSyncExternalStore"], {
        "usePrefersReducedMotion.useSyncExternalStore": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f$number$2d$flow$2f$dist$2f$ssr$2d$Cre0Q1Ju$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__prefersReducedMotion$3e$__["prefersReducedMotion"].matches
    }["usePrefersReducedMotion.useSyncExternalStore"], {
        "usePrefersReducedMotion.useSyncExternalStore": ()=>false
    }["usePrefersReducedMotion.useSyncExternalStore"]);
function useCanAnimate({ respectMotionPreference = true } = {}) {
    const isSupported = useIsSupported();
    const reducedMotion = usePrefersReducedMotion();
    return isSupported && (!respectMotionPreference || !reducedMotion);
}
;
}),
"[project]/hermes saas/hermes-saas/node_modules/@number-flow/react/dist/NumberFlow-client-BTpPLmzo.mjs [app-client] (ecmascript) <export N as default>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$number$2d$flow$2f$react$2f$dist$2f$NumberFlow$2d$client$2d$BTpPLmzo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["N"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hermes__saas$2f$hermes$2d$saas$2f$node_modules$2f40$number$2d$flow$2f$react$2f$dist$2f$NumberFlow$2d$client$2d$BTpPLmzo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hermes saas/hermes-saas/node_modules/@number-flow/react/dist/NumberFlow-client-BTpPLmzo.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=hermes%20saas_hermes-saas_32b190fb._.js.map