module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/components/hide-error-overlay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HideErrorOverlay",
    ()=>HideErrorOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function HideErrorOverlay() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function hideErrorOverlay() {
            const selectors = [
                '#__next-build-watcher',
                '#__next-dev-overlay',
                '[data-nextjs-dialog]',
                '[data-nextjs-dialog-overlay]',
                '.next-error-overlay',
                'iframe[src*="__nextjs"]',
                'div[id*="__nextjs"]',
                '[class*="error-overlay"]',
                '[class*="ErrorOverlay"]',
                '[data-error]',
                '[data-issue]',
                '[class*="issue"]',
                '[class*="Issue"]'
            ];
            selectors.forEach((selector)=>{
                try {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach((el)=>{
                        if (el instanceof HTMLElement) {
                            el.style.display = 'none';
                            el.style.visibility = 'hidden';
                            el.style.opacity = '0';
                            el.style.pointerEvents = 'none';
                            el.style.position = 'fixed';
                            el.style.zIndex = '-9999';
                        }
                    });
                } catch (e) {
                // Ignore errors
                }
            });
        }
        // Run immediately
        hideErrorOverlay();
        // Run after a short delay
        setTimeout(hideErrorOverlay, 100);
        // Run periodically to catch dynamically added overlays
        const interval = setInterval(hideErrorOverlay, 1000);
        // Observe DOM changes
        const observer = new MutationObserver(hideErrorOverlay);
        if (document.body) {
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
        return ()=>{
            clearInterval(interval);
            observer.disconnect();
        };
    }, []);
    return null;
}
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5953f098._.js.map