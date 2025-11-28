(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/aabhas_kavita_wedding_gallery_frontend/components/hide-error-overlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HideErrorOverlay",
    ()=>HideErrorOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function HideErrorOverlay() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HideErrorOverlay.useEffect": ()=>{
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
                selectors.forEach({
                    "HideErrorOverlay.useEffect.hideErrorOverlay": (selector)=>{
                        try {
                            const elements = document.querySelectorAll(selector);
                            elements.forEach({
                                "HideErrorOverlay.useEffect.hideErrorOverlay": (el)=>{
                                    if (el instanceof HTMLElement) {
                                        el.style.display = 'none';
                                        el.style.visibility = 'hidden';
                                        el.style.opacity = '0';
                                        el.style.pointerEvents = 'none';
                                        el.style.position = 'fixed';
                                        el.style.zIndex = '-9999';
                                    }
                                }
                            }["HideErrorOverlay.useEffect.hideErrorOverlay"]);
                        } catch (e) {
                        // Ignore errors
                        }
                    }
                }["HideErrorOverlay.useEffect.hideErrorOverlay"]);
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
            return ({
                "HideErrorOverlay.useEffect": ()=>{
                    clearInterval(interval);
                    observer.disconnect();
                }
            })["HideErrorOverlay.useEffect"];
        }
    }["HideErrorOverlay.useEffect"], []);
    return null;
}
_s(HideErrorOverlay, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = HideErrorOverlay;
var _c;
__turbopack_context__.k.register(_c, "HideErrorOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=01422_kavita_wedding_gallery_frontend_components_hide-error-overlay_tsx_68b92c2d._.js.map