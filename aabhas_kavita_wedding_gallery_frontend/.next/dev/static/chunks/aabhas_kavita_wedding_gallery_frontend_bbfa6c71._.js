(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js [app-client] (ecmascript) <export default as XMarkIcon>");
"use client";
;
;
;
;
const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-4xl'
};
function Modal({ isOpen, onClose, title, children, size = 'md' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
        appear: true,
        show: isOpen,
        as: __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            as: "div",
            className: "relative z-50",
            onClose: onClose,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                    as: __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 backdrop-blur-md bg-white/10",
                        style: {
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/modal.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/modal.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-full items-center justify-center p-4 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                            as: __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"].Panel, {
                                className: `w-full ${sizeClasses[size]} transform overflow-hidden rounded-3xl text-left align-middle shadow-2xl transition-all`,
                                style: {
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(212, 175, 55, 0.3)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 sm:p-6 md:p-10",
                                    children: [
                                        title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"].Title, {
                                            as: "h3",
                                            className: "text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 pr-8",
                                            style: {
                                                fontFamily: 'var(--font-playfair)',
                                                background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text'
                                            },
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/modal.tsx",
                                            lineNumber: 69,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onClose,
                                            className: "absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-[#D4AF37] transition-colors z-10 p-1",
                                            "aria-label": "Close",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__["XMarkIcon"], {
                                                className: "h-5 w-5 sm:h-6 sm:w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/modal.tsx",
                                                lineNumber: 88,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/modal.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this),
                                        children
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/modal.tsx",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/modal.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/modal.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/modal.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/modal.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/modal.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/modal.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant = "default", size = "default", ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center rounded-md font-medium transition-colors", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2", "disabled:pointer-events-none disabled:opacity-50", {
            "bg-blue-600 text-white hover:bg-blue-700": variant === "default",
            "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50": variant === "outline",
            "text-gray-700 hover:bg-gray-100": variant === "ghost",
            "h-10 px-4 py-2": size === "default",
            "h-9 px-3 text-sm": size === "sm",
            "h-11 px-8": size === "lg"
        }, className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/button.tsx",
        lineNumber: 13,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/lib/video.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Video compression function - currently disabled
 * Videos are uploaded as-is to R2 storage which can handle large files.
 * Client-side video compression was causing issues with FFmpeg and Turbopack.
 * 
 * If server-side compression is needed in the future, it should be implemented
 * on the backend after upload.
 */ __turbopack_context__.s([
    "compressVideo",
    ()=>compressVideo
]);
async function compressVideo(file, onProgress) {
    // Skip compression - upload videos as-is
    // R2 can handle large files, and client-side compression is unreliable
    onProgress?.(100);
    return file;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/lib/translations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "functionNameTranslations",
    ()=>functionNameTranslations,
    "getTranslations",
    ()=>getTranslations,
    "translateFunctionName",
    ()=>translateFunctionName,
    "translations",
    ()=>translations
]);
const translations = {
    en: {
        couple: {
            firstName: 'Aabhas',
            secondName: 'Kavita',
            fullName: 'Aabhas & Kavita'
        },
        home: {
            title: 'Our Wedding Gallery',
            subtitle: 'Relive the beautiful moments from our special day',
            viewGallery: 'View Gallery',
            noFunctions: 'No functions available yet.'
        },
        login: {
            title: 'Wedding Gallery',
            subtitle: 'Enter your phone number to continue',
            phoneLabel: 'Phone Number',
            phonePlaceholder: '9413078947',
            enterGallery: 'Enter Gallery',
            loggingIn: 'Logging in...',
            loginFailed: 'Login failed',
            notAuthorized: 'You are not authorized'
        },
        common: {
            language: 'Language',
            english: 'English',
            hindi: 'हिंदी',
            downloadMultiple: 'Download Multiple',
            cancelSelection: 'Cancel Selection',
            howToDownload: 'How to Download',
            uploadYours: 'Upload Yours',
            noPhotosUploaded: 'No photos uploaded yet.',
            noVideosUploaded: 'No videos uploaded yet.'
        }
    },
    hi: {
        couple: {
            firstName: 'आभास',
            secondName: 'कविता',
            fullName: 'आभास और कविता'
        },
        home: {
            title: 'हमारी शादी की गैलरी',
            subtitle: 'हमारे खास दिन के खूबसूरत पलों को फिर से जीएं',
            viewGallery: 'गैलरी देखें',
            noFunctions: 'अभी तक कोई कार्यक्रम उपलब्ध नहीं है।'
        },
        login: {
            title: 'शादी की गैलरी',
            subtitle: 'जारी रखने के लिए अपना फोन नंबर दर्ज करें',
            phoneLabel: 'फोन नंबर',
            phonePlaceholder: '9413078947',
            enterGallery: 'गैलरी में प्रवेश करें',
            loggingIn: 'लॉग इन हो रहा है...',
            loginFailed: 'लॉगिन विफल',
            notAuthorized: 'आप अधिकृत नहीं हैं'
        },
        common: {
            language: 'भाषा',
            english: 'English',
            hindi: 'हिंदी',
            downloadMultiple: 'कई डाउनलोड करें',
            cancelSelection: 'चयन रद्द करें',
            howToDownload: 'कैसे डाउनलोड करें',
            uploadYours: 'अपना अपलोड करें',
            noPhotosUploaded: 'अभी तक कोई तस्वीरें अपलोड नहीं की गई हैं।',
            noVideosUploaded: 'अभी तक कोई वीडियो अपलोड नहीं किए गए हैं।'
        }
    }
};
const functionNameTranslations = {
    'Hath Daan': {
        en: 'Hath Daan',
        hi: 'हाथ दान'
    },
    'Vinayak Sthapna': {
        en: 'Vinayak Sthapna',
        hi: 'विनायक स्थापना'
    },
    'Haldi': {
        en: 'Haldi',
        hi: 'हल्दी'
    },
    'Engagenemt': {
        en: 'Engagenemt',
        hi: 'सगाई'
    },
    'Sangeet': {
        en: 'Sangeet',
        hi: 'संगीत'
    },
    'Mayra': {
        en: 'Mayra',
        hi: 'मायरा'
    },
    'Phere': {
        en: 'Phere',
        hi: 'फेरे'
    },
    'Reception': {
        en: 'Reception',
        hi: 'रिसेप्शन'
    },
    'Others': {
        en: 'Others',
        hi: 'अन्य'
    },
    'Other': {
        en: 'Other',
        hi: 'अन्य'
    },
    'DJ Night': {
        en: 'DJ Night',
        hi: 'डीजे नाइट'
    }
};
function getTranslations(lang) {
    return translations[lang];
}
function translateFunctionName(functionName, lang) {
    const translation = functionNameTranslations[functionName];
    if (!translation) return functionName;
    return lang === 'hi' ? translation.hi : translation.en;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UploadModal",
    ()=>UploadModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/browser-image-compression/dist/browser-image-compression.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$video$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/lib/video.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/lib/translations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function UploadModal({ isOpen, onClose, functions, onUploadComplete }) {
    _s();
    const [selectedFunctions, setSelectedFunctions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [overallProgress, setOverallProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UploadModal.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const savedLang = localStorage.getItem('wedding-gallery-language');
                if (savedLang === 'en' || savedLang === 'hi') {
                    setLanguage(savedLang);
                }
            }
            const handleLanguageChange = {
                "UploadModal.useEffect.handleLanguageChange": (e)=>{
                    setLanguage(e.detail);
                }
            }["UploadModal.useEffect.handleLanguageChange"];
            window.addEventListener('language-changed', handleLanguageChange);
            return ({
                "UploadModal.useEffect": ()=>{
                    window.removeEventListener('language-changed', handleLanguageChange);
                }
            })["UploadModal.useEffect"];
        }
    }["UploadModal.useEffect"], []);
    const toggleFunction = (functionId)=>{
        setSelectedFunctions((prev)=>prev.includes(functionId) ? [] : [
                functionId
            ]);
    };
    const convertHeicToJpeg = async (file)=>{
        // Only run in browser
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Check if file is already in a browser-readable format
        const browserReadableTypes = [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/gif',
            'image/webp'
        ];
        if (browserReadableTypes.includes(file.type.toLowerCase())) {
            // File is already browser-readable, return as-is
            return file;
        }
        try {
            // Dynamic import to avoid SSR issues
            const heic2any = (await __turbopack_context__.A("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/heic2any/dist/heic2any.js [app-client] (ecmascript, async loader)")).default;
            const convertedBlob = await heic2any({
                blob: file,
                toType: 'image/jpeg',
                quality: 0.92
            });
            // heic2any returns an array, get the first item
            const blob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
            // Create a new File object with JPEG extension
            const fileName = file.name.replace(/\.(heic|heif)$/i, '.jpg');
            return new File([
                blob
            ], fileName, {
                type: 'image/jpeg',
                lastModified: file.lastModified
            });
        } catch (error) {
            // If heic2any says the image is already browser-readable, return original file
            if (error?.message?.includes('already browser readable') || error?.code === 1) {
                return file;
            }
            console.error('HEIC conversion error:', error);
            // Return original file instead of throwing error
            return file;
        }
    };
    const compressImage = async (file)=>{
        // Check if file is HEIC by extension only (more reliable than MIME type)
        const isHeic = file.name.toLowerCase().endsWith('.heic') || file.name.toLowerCase().endsWith('.heif');
        let fileToCompress = file;
        if (isHeic) {
            fileToCompress = await convertHeicToJpeg(file);
        }
        const options = {
            maxSizeMB: 5,
            maxWidthOrHeight: 2560,
            useWebWorker: true,
            fileType: fileToCompress.type,
            initialQuality: 0.92
        };
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fileToCompress, options);
    };
    const compressVideo = async (file, onProgress)=>{
        try {
            const compressed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$video$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compressVideo"])(file, onProgress);
            return compressed;
        } catch (error) {
            console.error('Video compression error:', error);
            return file;
        }
    };
    const handleFilesChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadModal.useCallback[handleFilesChange]": async (selectedFiles)=>{
            if (!selectedFiles || selectedFiles.length === 0) return;
            setError(null);
            const newFiles = [];
            for(let i = 0; i < selectedFiles.length; i++){
                const file = selectedFiles[i];
                // Check for HEIC files by extension only (more reliable than MIME type)
                const isHeic = file.name.toLowerCase().endsWith('.heic') || file.name.toLowerCase().endsWith('.heif');
                const isImage = file.type.startsWith('image/') || isHeic;
                const isVideo = file.type.startsWith('video/');
                if (!isImage && !isVideo) continue;
                const fileWithPreview = {
                    file,
                    originalSize: file.size,
                    compressedSize: 0,
                    type: isImage ? 'image' : 'video',
                    progress: 0,
                    status: 'pending'
                };
                // Create preview for images and videos
                if (isImage) {
                    // Handle HEIC files - convert to JPEG for preview
                    if (isHeic) {
                        convertHeicToJpeg(file).then({
                            "UploadModal.useCallback[handleFilesChange]": (convertedFile)=>{
                                const reader = new FileReader();
                                reader.onload = ({
                                    "UploadModal.useCallback[handleFilesChange]": (e)=>{
                                        setFiles({
                                            "UploadModal.useCallback[handleFilesChange]": (prev)=>prev.map({
                                                    "UploadModal.useCallback[handleFilesChange]": (f)=>f.file === file ? {
                                                            ...f,
                                                            preview: e.target?.result
                                                        } : f
                                                }["UploadModal.useCallback[handleFilesChange]"])
                                        }["UploadModal.useCallback[handleFilesChange]"]);
                                    }
                                })["UploadModal.useCallback[handleFilesChange]"];
                                reader.readAsDataURL(convertedFile);
                            }
                        }["UploadModal.useCallback[handleFilesChange]"]).catch({
                            "UploadModal.useCallback[handleFilesChange]": ()=>{
                                // If conversion fails, try to read original file as data URL
                                const reader = new FileReader();
                                reader.onload = ({
                                    "UploadModal.useCallback[handleFilesChange]": (e)=>{
                                        setFiles({
                                            "UploadModal.useCallback[handleFilesChange]": (prev)=>prev.map({
                                                    "UploadModal.useCallback[handleFilesChange]": (f)=>f.file === file ? {
                                                            ...f,
                                                            preview: e.target?.result
                                                        } : f
                                                }["UploadModal.useCallback[handleFilesChange]"])
                                        }["UploadModal.useCallback[handleFilesChange]"]);
                                    }
                                })["UploadModal.useCallback[handleFilesChange]"];
                                reader.readAsDataURL(file);
                            }
                        }["UploadModal.useCallback[handleFilesChange]"]);
                    } else {
                        const reader = new FileReader();
                        reader.onload = ({
                            "UploadModal.useCallback[handleFilesChange]": (e)=>{
                                setFiles({
                                    "UploadModal.useCallback[handleFilesChange]": (prev)=>prev.map({
                                            "UploadModal.useCallback[handleFilesChange]": (f)=>f.file === file ? {
                                                    ...f,
                                                    preview: e.target?.result
                                                } : f
                                        }["UploadModal.useCallback[handleFilesChange]"])
                                }["UploadModal.useCallback[handleFilesChange]"]);
                            }
                        })["UploadModal.useCallback[handleFilesChange]"];
                        reader.readAsDataURL(file);
                    }
                } else if (isVideo) {
                    // Create video preview thumbnail
                    const video = document.createElement('video');
                    video.preload = 'metadata';
                    video.src = URL.createObjectURL(file);
                    video.onloadedmetadata = ({
                        "UploadModal.useCallback[handleFilesChange]": ()=>{
                            video.currentTime = 0.1; // Get frame at 0.1 seconds
                        }
                    })["UploadModal.useCallback[handleFilesChange]"];
                    video.onloadeddata = ({
                        "UploadModal.useCallback[handleFilesChange]": ()=>{
                            const canvas = document.createElement('canvas');
                            canvas.width = video.videoWidth;
                            canvas.height = video.videoHeight;
                            const ctx = canvas.getContext('2d');
                            if (ctx) {
                                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                                const thumbnail = canvas.toDataURL('image/jpeg', 0.8);
                                setFiles({
                                    "UploadModal.useCallback[handleFilesChange]": (prev)=>prev.map({
                                            "UploadModal.useCallback[handleFilesChange]": (f)=>f.file === file ? {
                                                    ...f,
                                                    preview: thumbnail
                                                } : f
                                        }["UploadModal.useCallback[handleFilesChange]"])
                                }["UploadModal.useCallback[handleFilesChange]"]);
                            }
                            URL.revokeObjectURL(video.src);
                        }
                    })["UploadModal.useCallback[handleFilesChange]"];
                }
                newFiles.push(fileWithPreview);
            }
            setFiles({
                "UploadModal.useCallback[handleFilesChange]": (prev)=>[
                        ...prev,
                        ...newFiles
                    ]
            }["UploadModal.useCallback[handleFilesChange]"]);
            // Auto-compress images and videos
            for (const fileWithPreview of newFiles){
                if (fileWithPreview.type === 'image') {
                    setFiles({
                        "UploadModal.useCallback[handleFilesChange]": (prev)=>prev.map({
                                "UploadModal.useCallback[handleFilesChange]": (f)=>f.file === fileWithPreview.file ? {
                                        ...f,
                                        status: 'compressing'
                                    } : f
                            }["UploadModal.useCallback[handleFilesChange]"])
                    }["UploadModal.useCallback[handleFilesChange]"]);
                    try {
                        const compressed = await compressImage(fileWithPreview.file);
                        setFiles({
                            "UploadModal.useCallback[handleFilesChange]": (prev)=>prev.map({
                                    "UploadModal.useCallback[handleFilesChange]": (f)=>f.file === fileWithPreview.file ? {
                                            ...f,
                                            compressed,
                                            compressedSize: compressed.size,
                                            status: 'ready'
                                        } : f
                                }["UploadModal.useCallback[handleFilesChange]"])
                        }["UploadModal.useCallback[handleFilesChange]"]);
                    } catch (err) {
                        setFiles({
                            "UploadModal.useCallback[handleFilesChange]": (prev)=>prev.map({
                                    "UploadModal.useCallback[handleFilesChange]": (f)=>f.file === fileWithPreview.file ? {
                                            ...f,
                                            status: 'error'
                                        } : f
                                }["UploadModal.useCallback[handleFilesChange]"])
                        }["UploadModal.useCallback[handleFilesChange]"]);
                    }
                } else if (fileWithPreview.type === 'video') {
                    // Videos are uploaded as-is (no compression)
                    // R2 can handle large files, and client-side compression is unreliable
                    setFiles({
                        "UploadModal.useCallback[handleFilesChange]": (prev)=>prev.map({
                                "UploadModal.useCallback[handleFilesChange]": (f)=>f.file === fileWithPreview.file ? {
                                        ...f,
                                        status: 'ready',
                                        compressedSize: fileWithPreview.originalSize,
                                        progress: 100
                                    } : f
                            }["UploadModal.useCallback[handleFilesChange]"])
                    }["UploadModal.useCallback[handleFilesChange]"]);
                }
            }
        }
    }["UploadModal.useCallback[handleFilesChange]"], []);
    const handleFileInputChange = (e)=>{
        handleFilesChange(e.target.files);
    };
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadModal.useCallback[handleDrop]": (e)=>{
            e.preventDefault();
            handleFilesChange(e.dataTransfer.files);
        }
    }["UploadModal.useCallback[handleDrop]"], [
        handleFilesChange
    ]);
    const handleDragOver = (e)=>{
        e.preventDefault();
    };
    const removeFile = (file)=>{
        setFiles((prev)=>prev.filter((f)=>f.file !== file));
    };
    const formatFileSize = (bytes)=>{
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = [
            'Bytes',
            'KB',
            'MB',
            'GB'
        ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    };
    const handleUpload = async ()=>{
        if (files.length === 0) {
            setError('Please select at least one file');
            return;
        }
        // Function selection is now optional - if none selected, will use "Other"
        // Validate that we have ready files
        const readyFiles = files.filter((f)=>f.status === 'ready' || f.status === 'uploading' || f.status === 'complete');
        if (readyFiles.length === 0) {
            setError('Please wait for files to be processed');
            return;
        }
        setUploading(true);
        setOverallProgress(0);
        setError(null);
        try {
            const readyFiles = files.filter((f)=>f.status === 'ready');
            const totalFiles = readyFiles.length;
            let completed = 0;
            for (const fileWithPreview of readyFiles){
                const fileToUpload = fileWithPreview.compressed || fileWithPreview.file;
                const isImage = fileWithPreview.type === 'image';
                setFiles((prev)=>prev.map((f)=>f.file === fileWithPreview.file ? {
                            ...f,
                            status: 'uploading'
                        } : f));
                const formData = new FormData();
                formData.append('file', fileToUpload, fileToUpload.name);
                // Send empty array if no function selected - API will use "Other"
                formData.append('functions', JSON.stringify(selectedFunctions.length > 0 ? selectedFunctions : []));
                formData.append('type', isImage ? 'photo' : 'video');
                formData.append('originalSize', fileWithPreview.originalSize.toString());
                // Use fetch API which handles FormData better with Next.js
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData
                });
                if (!response.ok) {
                    let errorMessage = 'Upload failed';
                    try {
                        const errorData = await response.json();
                        errorMessage = errorData.error || errorData.message || errorMessage;
                        console.error('Upload error response:', errorData);
                    } catch (e) {
                        errorMessage = await response.text() || errorMessage;
                        console.error('Failed to parse error response');
                    }
                    throw new Error(errorMessage);
                }
                const result = await response.json();
                completed++;
                setFiles((prev)=>prev.map((f)=>f.file === fileWithPreview.file ? {
                            ...f,
                            status: 'complete',
                            progress: 100
                        } : f));
                setOverallProgress(completed / totalFiles * 100);
            }
            setTimeout(()=>{
                setUploading(false);
                setFiles([]);
                setSelectedFunctions([]);
                setOverallProgress(0);
                onUploadComplete();
                onClose();
            }, 1000);
        } catch (err) {
            const errorMessage = err?.message || err?.error || 'Upload failed. Please try again.';
            console.error('Upload error caught:', err);
            setError(errorMessage);
            setUploading(false);
            setFiles((prev)=>prev.map((f)=>f.status === 'uploading' ? {
                        ...f,
                        status: 'error'
                    } : f));
        }
    };
    const readyFiles = files.filter((f)=>f.status === 'ready' || f.status === 'uploading' || f.status === 'complete');
    const canUpload = readyFiles.length > 0 && !uploading;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        isOpen: isOpen,
        onClose: onClose,
        title: "Upload Your Memories",
        size: "2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col max-h-[70vh] sm:max-h-[75vh]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 sm:space-y-6 overflow-y-auto flex-1 pb-4 scrollbar-hide",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-3 px-1",
                                    style: {
                                        fontFamily: 'var(--font-cormorant)',
                                        fontSize: '1rem',
                                        color: '#2C2C2C'
                                    },
                                    children: [
                                        "Select Function ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400 text-xs block sm:inline",
                                            children: '(Optional - will use "Other" if none selected)'
                                        }, void 0, false, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                            lineNumber: 390,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                    lineNumber: 386,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2 sm:gap-3 px-1 sm:pl-2",
                                    children: functions.map((func)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            onClick: ()=>toggleFunction(func.id),
                                            disabled: uploading,
                                            whileTap: {
                                                scale: 0.95
                                            },
                                            className: `px-3 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all flex items-center justify-center gap-1 sm:gap-2 ${selectedFunctions.includes(func.id) ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white shadow-lg' : 'bg-white/60 backdrop-blur-sm border border-[#D4AF37]/30 text-gray-700 hover:bg-[#D4AF37]/20 hover:border-[#B8941F]/50'} ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`,
                                            style: {
                                                fontFamily: 'var(--font-cormorant)',
                                                fontWeight: 600
                                            },
                                            children: [
                                                selectedFunctions.includes(func.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "inline h-3 w-3 sm:h-4 sm:w-4 sm:mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateFunctionName"])(func.name, language)
                                                }, void 0, false, {
                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, func.id, true, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                            lineNumber: 394,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                    lineNumber: 392,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                            lineNumber: 385,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-3 px-1",
                                    style: {
                                        fontFamily: 'var(--font-cormorant)',
                                        fontSize: '1rem',
                                        color: '#2C2C2C'
                                    },
                                    children: "Upload Photos or Videos (Multiple)"
                                }, void 0, false, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                    lineNumber: 417,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onDrop: handleDrop,
                                    onDragOver: handleDragOver,
                                    onClick: ()=>!uploading && fileInputRef.current?.click(),
                                    className: "mt-1 flex justify-center px-4 sm:px-6 pt-8 sm:pt-12 pb-8 sm:pb-12 border-2 border-dashed rounded-xl sm:rounded-2xl hover:border-[#D4AF37] transition-colors glass cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 sm:space-y-4 text-center w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        y: [
                                                            0,
                                                            -10,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 2,
                                                        repeat: Infinity
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        className: "mx-auto h-12 w-12 sm:h-16 sm:w-16 text-[#D4AF37]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                        lineNumber: 434,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex text-xs sm:text-sm text-gray-600 justify-center items-center gap-1 sm:gap-2 flex-wrap px-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-[#D4AF37]",
                                                            style: {
                                                                fontFamily: 'var(--font-cormorant)',
                                                                fontSize: '0.95rem'
                                                            },
                                                            children: "Upload files"
                                                        }, void 0, false, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                            lineNumber: 437,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: 'var(--font-cormorant)',
                                                                fontSize: '0.95rem'
                                                            },
                                                            children: "or drag and drop"
                                                        }, void 0, false, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 px-2",
                                                    style: {
                                                        fontFamily: 'var(--font-cormorant)'
                                                    },
                                                    children: "PNG, JPG, GIF, HEIC, MP4, MOV up to 100MB each"
                                                }, void 0, false, {
                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                            lineNumber: 429,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: fileInputRef,
                                            type: "file",
                                            className: "hidden",
                                            accept: "image/*,video/*,.heic,.heif",
                                            multiple: true,
                                            onChange: handleFileInputChange,
                                            disabled: uploading
                                        }, void 0, false, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                            lineNumber: 446,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                    lineNumber: 423,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                            lineNumber: 416,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    height: 0
                                },
                                animate: {
                                    opacity: 1,
                                    height: 'auto'
                                },
                                exit: {
                                    opacity: 0,
                                    height: 0
                                },
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-medium mb-3",
                                        style: {
                                            fontFamily: 'var(--font-cormorant)',
                                            color: '#2C2C2C'
                                        },
                                        children: [
                                            "Selected Files (",
                                            files.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                        lineNumber: 467,
                                        columnNumber: 15
                                    }, this),
                                    files.map((fileWithPreview, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: -20
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                x: 20
                                            },
                                            className: "glass rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 relative",
                                                    children: [
                                                        fileWithPreview.preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: fileWithPreview.preview,
                                                            alt: fileWithPreview.file.name,
                                                            className: "w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg"
                                                        }, void 0, false, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg flex items-center justify-center",
                                                            children: fileWithPreview.type === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                className: "h-6 w-6 sm:h-8 sm:w-8 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                                lineNumber: 492,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                                className: "h-6 w-6 sm:h-8 sm:w-8 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                                lineNumber: 494,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 23
                                                        }, this),
                                                        fileWithPreview.type === 'video' && fileWithPreview.preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                                className: "h-4 w-4 sm:h-6 sm:w-6 text-white drop-shadow-lg"
                                                            }, void 0, false, {
                                                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                                lineNumber: 500,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                            lineNumber: 499,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs sm:text-sm font-medium text-gray-900 truncate",
                                                            style: {
                                                                fontFamily: 'var(--font-cormorant)'
                                                            },
                                                            children: fileWithPreview.file.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1 text-xs text-gray-600",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Size: ",
                                                                    formatFileSize(fileWithPreview.originalSize)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                                lineNumber: 514,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                            lineNumber: 513,
                                                            columnNumber: 21
                                                        }, this),
                                                        fileWithPreview.status === 'compressing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mb-1 text-xs text-[#D4AF37]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                            className: "h-4 w-4 animate-pulse"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                                            lineNumber: 519,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: fileWithPreview.type === 'video' ? `Compressing video for best quality... ${Math.round(fileWithPreview.progress)}%` : 'Compressing for best quality...'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                                            lineNumber: 520,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                                    lineNumber: 518,
                                                                    columnNumber: 25
                                                                }, this),
                                                                fileWithPreview.type === 'video' && fileWithPreview.progress > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-full bg-gray-200 rounded-full h-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-full rounded-full transition-all duration-300",
                                                                        style: {
                                                                            width: `${fileWithPreview.progress}%`,
                                                                            background: 'linear-gradient(90deg, #D4AF37 0%, #B8941F 100%)'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                                        lineNumber: 528,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                                    lineNumber: 527,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                            lineNumber: 517,
                                                            columnNumber: 23
                                                        }, this),
                                                        fileWithPreview.status === 'uploading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full bg-gray-200 rounded-full h-1.5",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    className: "h-full rounded-full",
                                                                    style: {
                                                                        background: 'linear-gradient(90deg, #D4AF37 0%, #B8941F 100%)'
                                                                    },
                                                                    initial: {
                                                                        width: 0
                                                                    },
                                                                    animate: {
                                                                        width: `${fileWithPreview.progress}%`
                                                                    },
                                                                    transition: {
                                                                        duration: 0.3
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                                    lineNumber: 542,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                                lineNumber: 541,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                            lineNumber: 540,
                                                            columnNumber: 23
                                                        }, this),
                                                        fileWithPreview.status === 'complete' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mt-2 text-xs text-green-600",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                                    lineNumber: 556,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Uploaded successfully"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                                    lineNumber: 557,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                            lineNumber: 555,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 19
                                                }, this),
                                                fileWithPreview.status !== 'uploading' && fileWithPreview.status !== 'complete' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>removeFile(fileWithPreview.file),
                                                    disabled: uploading,
                                                    className: "flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                    lineNumber: 564,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, `${fileWithPreview.file.name}-${index}`, true, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                            lineNumber: 474,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                lineNumber: 461,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                            lineNumber: 459,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    height: 0
                                },
                                animate: {
                                    opacity: 1,
                                    height: 'auto'
                                },
                                exit: {
                                    opacity: 0,
                                    height: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm mb-2",
                                        style: {
                                            fontFamily: 'var(--font-cormorant)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700",
                                                children: [
                                                    "Uploading ",
                                                    readyFiles.filter((f)=>f.status === 'uploading' || f.status === 'complete').length,
                                                    " of ",
                                                    readyFiles.length,
                                                    " files..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                lineNumber: 587,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#D4AF37] font-semibold",
                                                children: [
                                                    Math.round(overallProgress),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                                lineNumber: 588,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                        lineNumber: 586,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-gray-200 rounded-full h-3 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "h-full rounded-full",
                                            style: {
                                                background: 'linear-gradient(90deg, #D4AF37 0%, #B8941F 100%)'
                                            },
                                            initial: {
                                                width: 0
                                            },
                                            animate: {
                                                width: `${overallProgress}%`
                                            },
                                            transition: {
                                                duration: 0.3
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                            lineNumber: 591,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                        lineNumber: 590,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                lineNumber: 581,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                            lineNumber: 579,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: -10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -10
                                },
                                className: "bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                                lineNumber: 608,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                            lineNumber: 606,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row justify-start gap-2 sm:gap-3 pt-4 mt-4 border-t border-gray-200 bg-white/70 backdrop-blur-sm -mx-4 sm:-mx-8 md:-mx-10 px-4 sm:px-8 md:px-10 pb-0 flex-shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: onClose,
                            disabled: uploading,
                            className: "rounded-xl w-full sm:w-auto",
                            style: {
                                fontFamily: 'var(--font-cormorant)'
                            },
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                            lineNumber: 622,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleUpload,
                            disabled: !canUpload,
                            className: "rounded-xl px-6 sm:px-8 transition-colors w-full sm:w-auto text-sm sm:text-base",
                            style: {
                                background: canUpload ? 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)' : '#ccc',
                                color: 'white',
                                border: 'none',
                                fontFamily: 'var(--font-cormorant)'
                            },
                            onMouseEnter: (e)=>{
                                if (canUpload) {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #B8941F 0%, #9A7A16 100%)';
                                }
                            },
                            onMouseLeave: (e)=>{
                                if (canUpload) {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)';
                                }
                            },
                            children: uploading ? `Uploading... ${Math.round(overallProgress)}%` : `Upload ${readyFiles.length} File${readyFiles.length !== 1 ? 's' : ''}`
                        }, void 0, false, {
                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                            lineNumber: 631,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
                    lineNumber: 621,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
            lineNumber: 382,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx",
        lineNumber: 381,
        columnNumber: 5
    }, this);
}
_s(UploadModal, "4Y9ozcvGypqZ5KIa/BaKd2zAtEg=");
_c = UploadModal;
var _c;
__turbopack_context__.k.register(_c, "UploadModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HowToDownloadModal",
    ()=>HowToDownloadModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HowToDownloadModal({ isOpen, onClose }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('android');
    const [globalLanguage, setGlobalLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('hi');
    // Convert global language (en/hi) to modal language (english/hindi)
    const language = globalLanguage === 'en' ? 'english' : 'hindi';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HowToDownloadModal.useEffect": ()=>{
            // Load language preference from localStorage
            if ("TURBOPACK compile-time truthy", 1) {
                const savedLang = localStorage.getItem('wedding-gallery-language');
                if (savedLang === 'en' || savedLang === 'hi') {
                    setGlobalLanguage(savedLang);
                }
            }
            // Listen for language changes from the global language switcher
            const handleLanguageChange = {
                "HowToDownloadModal.useEffect.handleLanguageChange": (e)=>{
                    setGlobalLanguage(e.detail);
                }
            }["HowToDownloadModal.useEffect.handleLanguageChange"];
            window.addEventListener('language-changed', handleLanguageChange);
            return ({
                "HowToDownloadModal.useEffect": ()=>{
                    window.removeEventListener('language-changed', handleLanguageChange);
                }
            })["HowToDownloadModal.useEffect"];
        }
    }["HowToDownloadModal.useEffect"], []);
    // Handle language change from modal buttons
    const handleLanguageChange = (newLang)=>{
        const globalLang = newLang === 'english' ? 'en' : 'hi';
        setGlobalLanguage(globalLang);
        // Update localStorage and dispatch event to sync with other components
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem('wedding-gallery-language', globalLang);
            window.dispatchEvent(new CustomEvent('language-changed', {
                detail: globalLang
            }));
        }
    };
    const instructions = {
        english: {
            android: [
                "Click the 'Download Photo' or 'Download Video' button",
                "The file will automatically download to your device",
                "Open your 'Files' or 'Downloads' app to find the file",
                "The file will be saved in your Downloads folder",
                "You can move it to your Gallery/Photos app if needed"
            ],
            ios: [
                "Click the 'Download Photo' or 'Download Video' button",
                "The file will open in a new browser tab",
                "Long-press (tap and hold) on the image or video",
                "Select 'Save to Photos' from the menu that appears",
                "The file will be saved to your Photos app",
                "Alternatively, tap the Share button and choose 'Save to Files'"
            ]
        },
        hindi: {
            android: [
                "'Download Photo' या 'Download Video' बटन पर क्लिक करें",
                "फ़ाइल आपके डिवाइस पर अपने आप डाउनलोड हो जाएगी",
                "फ़ाइल खोजने के लिए अपना 'Files' या 'Downloads' ऐप खोलें",
                "फ़ाइल आपके Downloads फ़ोल्डर में सेव हो जाएगी",
                "आप इसे अपने Gallery/Photos ऐप में ले जा सकते हैं यदि आवश्यक हो"
            ],
            ios: [
                "'Download Photo' या 'Download Video' बटन पर क्लिक करें",
                "फ़ाइल एक नए ब्राउज़र टैब में खुलेगी",
                "छवि या वीडियो पर लंबे समय तक दबाएं (long-press)",
                "दिखाई देने वाले मेनू से 'Save to Photos' चुनें",
                "फ़ाइल आपके Photos ऐप में सेव हो जाएगी",
                "वैकल्पिक रूप से, Share बटन पर टैप करें और 'Save to Files' चुनें"
            ]
        }
    };
    const titles = {
        english: {
            title: "How to Download Photos & Videos",
            videoTitle: "Video Tutorial",
            android: "Android",
            ios: "iPhone / iOS"
        },
        hindi: {
            title: "फ़ोटो और वीडियो कैसे डाउनलोड करें",
            videoTitle: "वीडियो ट्यूटोरियल",
            android: "Android",
            ios: "iPhone / iOS"
        }
    };
    // YouTube video ID - replace with your actual tutorial video ID
    // To get the video ID: from a YouTube URL like https://www.youtube.com/watch?v=VIDEO_ID
    // Use just the VIDEO_ID part (e.g., if URL is https://www.youtube.com/watch?v=abc123, use "abc123")
    const youtubeVideoId = "YOUR_VIDEO_ID_HERE" // TODO: Replace with actual video ID
    ;
    const currentInstructions = instructions[language][activeTab];
    const currentTitles = titles[language];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
        appear: true,
        show: isOpen,
        as: __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            as: "div",
            className: "relative z-50",
            onClose: onClose,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                    as: __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0",
                        style: {
                            background: 'rgba(0, 0, 0, 0.2)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-full items-center justify-center p-4 md:p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                            as: __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"].Panel, {
                                className: "w-full max-w-[720px] transform overflow-hidden rounded-[24px] text-left align-middle shadow-2xl transition-all",
                                style: {
                                    background: 'rgba(255, 255, 255, 0.75)',
                                    backdropFilter: 'blur(16px) brightness(1.15)',
                                    WebkitBackdropFilter: 'blur(16px) brightness(1.15)',
                                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 md:p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-6 pb-4 border-b border-gray-200/60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleLanguageChange('hindi'),
                                                            className: `px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${language === 'hindi' ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`,
                                                            style: {
                                                                fontFamily: 'var(--font-cormorant)'
                                                            },
                                                            children: "हिंदी"
                                                        }, void 0, false, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleLanguageChange('english'),
                                                            className: `px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${language === 'english' ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`,
                                                            style: {
                                                                fontFamily: 'var(--font-cormorant)'
                                                            },
                                                            children: "English"
                                                        }, void 0, false, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: onClose,
                                                    className: "text-gray-400 hover:text-gray-600 transition-colors",
                                                    "aria-label": "Close",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-5 w-5 md:h-6 md:w-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center gap-8 mb-8 border-b border-gray-200/60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveTab('android'),
                                                    className: `px-4 py-3 font-semibold transition-all relative ${activeTab === 'android' ? 'text-gray-900 font-bold' : 'text-gray-400 font-medium hover:text-gray-600'}`,
                                                    style: {
                                                        fontFamily: 'var(--font-cormorant)',
                                                        fontSize: '15px'
                                                    },
                                                    children: [
                                                        currentTitles.android,
                                                        activeTab === 'android' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            layoutId: "activeTab",
                                                            className: "absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900",
                                                            initial: false,
                                                            transition: {
                                                                type: "spring",
                                                                stiffness: 500,
                                                                damping: 30
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveTab('ios'),
                                                    className: `px-4 py-3 font-semibold transition-all relative ${activeTab === 'ios' ? 'text-gray-900 font-bold' : 'text-gray-400 font-medium hover:text-gray-600'}`,
                                                    style: {
                                                        fontFamily: 'var(--font-cormorant)',
                                                        fontSize: '15px'
                                                    },
                                                    children: [
                                                        currentTitles.ios,
                                                        activeTab === 'ios' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            layoutId: "activeTab",
                                                            className: "absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900",
                                                            initial: false,
                                                            transition: {
                                                                type: "spring",
                                                                stiffness: 500,
                                                                damping: 30
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                            lineNumber: 199,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6 md:space-y-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: `text-xl md:text-2xl mb-5 md:mb-6 ${language === 'english' ? 'font-bold' : 'font-semibold'}`,
                                                            style: {
                                                                fontFamily: 'var(--font-playfair)',
                                                                color: '#1a1a1a',
                                                                fontWeight: language === 'english' ? 700 : 600,
                                                                fontSize: '24px'
                                                            },
                                                            children: currentTitles.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3 md:space-y-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                                mode: "wait",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    initial: {
                                                                        opacity: 0,
                                                                        y: 10
                                                                    },
                                                                    animate: {
                                                                        opacity: 1,
                                                                        y: 0
                                                                    },
                                                                    exit: {
                                                                        opacity: 0,
                                                                        y: -10
                                                                    },
                                                                    transition: {
                                                                        duration: 0.2
                                                                    },
                                                                    children: currentInstructions.map((instruction, index)=>{
                                                                        // Function to render text with English words in bold
                                                                        const renderInstruction = (text)=>{
                                                                            if (language === 'english') {
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-bold",
                                                                                    children: text
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                                                    lineNumber: 268,
                                                                                    columnNumber: 42
                                                                                }, this);
                                                                            }
                                                                            // For Hindi, detect and bold English words/phrases
                                                                            // Match English words, phrases in quotes, or common English terms
                                                                            const parts = text.split(/(['"]?[A-Za-z][A-Za-z\s/]*['"]?)/g);
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: parts.map((part, i)=>{
                                                                                    // Check if part contains English letters
                                                                                    const hasEnglish = /[A-Za-z]/.test(part);
                                                                                    if (hasEnglish && part.trim().length > 0) {
                                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-bold",
                                                                                            children: part
                                                                                        }, i, false, {
                                                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                                                            lineNumber: 282,
                                                                                            columnNumber: 43
                                                                                        }, this);
                                                                                    }
                                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: part
                                                                                    }, i, false, {
                                                                                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                                                        lineNumber: 287,
                                                                                        columnNumber: 46
                                                                                    }, this);
                                                                                })
                                                                            }, void 0, false);
                                                                        };
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-start gap-3",
                                                                            style: {
                                                                                fontFamily: 'var(--font-cormorant)',
                                                                                fontSize: '17px',
                                                                                lineHeight: '1.6',
                                                                                paddingLeft: '12px'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[#D4AF37] font-semibold flex-shrink-0",
                                                                                    style: {
                                                                                        opacity: 0.6
                                                                                    },
                                                                                    children: [
                                                                                        index + 1,
                                                                                        "."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                                                    lineNumber: 304,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-700 flex-1",
                                                                                    children: renderInstruction(instruction)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                                                    lineNumber: 310,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, index, true, {
                                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                                            lineNumber: 294,
                                                                            columnNumber: 33
                                                                        }, this);
                                                                    })
                                                                }, `${activeTab}-${language}`, false, {
                                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: `text-xl md:text-2xl mb-4 md:mb-5 ${language === 'english' ? 'font-bold' : 'font-semibold'}`,
                                                            style: {
                                                                fontFamily: 'var(--font-playfair)',
                                                                color: '#1a1a1a',
                                                                fontWeight: language === 'english' ? 700 : 600,
                                                                fontSize: '24px'
                                                            },
                                                            children: currentTitles.videoTitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full rounded-2xl overflow-hidden",
                                                            style: {
                                                                aspectRatio: '16/9',
                                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                                className: "w-full h-full",
                                                                src: `https://www.youtube.com/embed/${youtubeVideoId}`,
                                                                title: "How to Download Photos and Videos",
                                                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                                                allowFullScreen: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                    lineNumber: 159,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                                lineNumber: 150,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
            lineNumber: 118,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(HowToDownloadModal, "9WzBT0Q2z2B9FOGan0YkhtDAlJk=");
_c = HowToDownloadModal;
var _c;
__turbopack_context__.k.register(_c, "HowToDownloadModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/components/floating-upload-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingUploadButton",
    ()=>FloatingUploadButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$upload$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/components/upload-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$how$2d$to$2d$download$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/components/how-to-download-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/lib/translations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function FloatingUploadButton({ functions, onUploadComplete }) {
    _s();
    const [isUploadModalOpen, setIsUploadModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloadModalOpen, setIsDownloadModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasSelectedPhotos, setHasSelectedPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false) // Start as false so buttons show by default
    ;
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingUploadButton.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const savedLang = localStorage.getItem('wedding-gallery-language');
                if (savedLang === 'en' || savedLang === 'hi') {
                    setLanguage(savedLang);
                }
            }
            const handleLanguageChange = {
                "FloatingUploadButton.useEffect.handleLanguageChange": (e)=>{
                    setLanguage(e.detail);
                }
            }["FloatingUploadButton.useEffect.handleLanguageChange"];
            window.addEventListener('language-changed', handleLanguageChange);
            return ({
                "FloatingUploadButton.useEffect": ()=>{
                    window.removeEventListener('language-changed', handleLanguageChange);
                }
            })["FloatingUploadButton.useEffect"];
        }
    }["FloatingUploadButton.useEffect"], []);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTranslations"])(language);
    // Clear selections when on function page or home page
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingUploadButton.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // On home page, function page, or gallery page, clear all selections
            const isHomePage = pathname === '/';
            const isFunctionPage = /^\/function\/\d+$/.test(pathname);
            const isGalleryPage = pathname === '/gallery' || pathname.startsWith('/gallery?');
            if (isHomePage || isFunctionPage || isGalleryPage) {
                // Clear all selected photos from localStorage
                try {
                    const keysToRemove = [];
                    for(let i = 0; i < localStorage.length; i++){
                        const key = localStorage.key(i);
                        if (key && key.startsWith('selected-photos-')) {
                            keysToRemove.push(key);
                        }
                    }
                    keysToRemove.forEach({
                        "FloatingUploadButton.useEffect": (key)=>localStorage.removeItem(key)
                    }["FloatingUploadButton.useEffect"]);
                    setHasSelectedPhotos(false);
                } catch (error) {
                    console.error('Error clearing selected photos:', error);
                    setHasSelectedPhotos(false);
                }
            }
        }
    }["FloatingUploadButton.useEffect"], [
        pathname
    ]);
    // Check for selected photos in localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingUploadButton.useEffect": ()=>{
            const checkSelectedPhotos = {
                "FloatingUploadButton.useEffect.checkSelectedPhotos": ()=>{
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    const currentPath = pathname || window.location.pathname;
                    // On home page, function page, or gallery page, always show buttons
                    const isHomePage = currentPath === '/' || currentPath === '';
                    const isFunctionPage = /^\/function\/\d+$/.test(currentPath);
                    const isGalleryPage = currentPath === '/gallery' || currentPath.startsWith('/gallery?');
                    if (isHomePage || isFunctionPage || isGalleryPage) {
                        setHasSelectedPhotos(false);
                        return;
                    }
                    try {
                        // Check all localStorage keys that match the pattern 'selected-photos-*'
                        let hasSelections = false;
                        for(let i = 0; i < localStorage.length; i++){
                            const key = localStorage.key(i);
                            if (key && key.startsWith('selected-photos-')) {
                                const value = localStorage.getItem(key);
                                if (value && value !== '[]' && value !== 'null') {
                                    try {
                                        const ids = JSON.parse(value);
                                        if (Array.isArray(ids) && ids.length > 0) {
                                            hasSelections = true;
                                            break;
                                        } else {
                                            // Clean up empty or invalid entries
                                            localStorage.removeItem(key);
                                        }
                                    } catch (e) {
                                        // Invalid JSON, remove it
                                        localStorage.removeItem(key);
                                    }
                                } else {
                                    // Empty array or null, remove it
                                    localStorage.removeItem(key);
                                }
                            }
                        }
                        setHasSelectedPhotos(hasSelections);
                    } catch (error) {
                        console.error('Error checking selected photos:', error);
                        // On error, default to showing buttons
                        setHasSelectedPhotos(false);
                    }
                }
            }["FloatingUploadButton.useEffect.checkSelectedPhotos"];
            // Check on mount
            checkSelectedPhotos();
            // Listen for custom event from PhotosGrid
            const handleSelectionChange = {
                "FloatingUploadButton.useEffect.handleSelectionChange": (event)=>{
                    if (event.detail && typeof event.detail.hasSelections === 'boolean') {
                        setHasSelectedPhotos(event.detail.hasSelections);
                    }
                }
            }["FloatingUploadButton.useEffect.handleSelectionChange"];
            // Listen for storage events (when localStorage changes in other tabs/windows)
            window.addEventListener('storage', checkSelectedPhotos);
            // Listen for custom photo selection events
            window.addEventListener('photoSelectionChanged', handleSelectionChange);
            // Also check periodically (in case changes happen in same tab)
            const interval = setInterval(checkSelectedPhotos, 500);
            return ({
                "FloatingUploadButton.useEffect": ()=>{
                    window.removeEventListener('storage', checkSelectedPhotos);
                    window.removeEventListener('photoSelectionChanged', handleSelectionChange);
                    clearInterval(interval);
                }
            })["FloatingUploadButton.useEffect"];
        }
    }["FloatingUploadButton.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !hasSelectedPhotos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-10 z-[100] flex gap-3",
                style: {
                    bottom: `calc(1.5rem + env(safe-area-inset-bottom))`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: ()=>setIsDownloadModalOpen(true),
                        className: "rounded-full sm:rounded-full px-4 py-3 shadow-xl bg-[#D4AF37] hover:bg-[#B8941F] text-white flex items-center gap-2 z-[100]",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "h-5 w-5 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/floating-upload-button.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold whitespace-nowrap text-sm sm:text-base",
                                style: {
                                    fontFamily: 'var(--font-cormorant)'
                                },
                                children: t.common.howToDownload
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/floating-upload-button.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/floating-upload-button.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: ()=>setIsUploadModalOpen(true),
                        className: "rounded-full sm:rounded-full px-4 py-3 shadow-xl bg-[#D4A017] hover:bg-[#caa113] text-white flex items-center gap-2 z-[100]",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "h-5 w-5 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/floating-upload-button.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold whitespace-nowrap text-sm sm:text-base",
                                style: {
                                    fontFamily: 'var(--font-cormorant)'
                                },
                                children: t.common.uploadYours
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/floating-upload-button.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                className: "h-5 w-5 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/floating-upload-button.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/floating-upload-button.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/floating-upload-button.tsx",
                lineNumber: 157,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isUploadModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$upload$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UploadModal"], {
                    isOpen: isUploadModalOpen,
                    onClose: ()=>setIsUploadModalOpen(false),
                    functions: functions,
                    onUploadComplete: onUploadComplete
                }, void 0, false, {
                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/floating-upload-button.tsx",
                    lineNumber: 192,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/floating-upload-button.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isDownloadModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$how$2d$to$2d$download$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HowToDownloadModal"], {
                    isOpen: isDownloadModalOpen,
                    onClose: ()=>setIsDownloadModalOpen(false)
                }, void 0, false, {
                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/floating-upload-button.tsx",
                    lineNumber: 203,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/floating-upload-button.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(FloatingUploadButton, "0KdC8cAH6VObqcjbVaMm+DO18gI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = FloatingUploadButton;
var _c;
__turbopack_context__.k.register(_c, "FloatingUploadButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/components/function-page-client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionPageClient",
    ()=>FunctionPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$floating$2d$upload$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/components/floating-upload-button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FunctionPageClient({ functions }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleUploadComplete = ()=>{
        router.refresh();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$floating$2d$upload$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingUploadButton"], {
        functions: functions,
        onUploadComplete: handleUploadComplete
    }, void 0, false, {
        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/function-page-client.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_s(FunctionPageClient, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = FunctionPageClient;
var _c;
__turbopack_context__.k.register(_c, "FunctionPageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/components/download-progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownloadProgress",
    ()=>DownloadProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
"use client";
;
;
;
function DownloadProgress({ isVisible, progress, currentFile, totalFiles, fileName }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: 20
            },
            className: "fixed left-1/2 -translate-x-1/2 z-[60] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#D4AF37]/20 p-6 min-w-[320px] max-w-md",
            style: {
                bottom: `calc(1.5rem + env(safe-area-inset-bottom))`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: progress === 100 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "h-6 w-6 text-green-600"
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/download-progress.tsx",
                                lineNumber: 36,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "h-6 w-6 text-[#D4AF37] animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/download-progress.tsx",
                                lineNumber: 38,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/download-progress.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-gray-900 truncate",
                                    children: progress === 100 ? 'Download Complete' : 'Downloading...'
                                }, void 0, false, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/download-progress.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                totalFiles > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: [
                                        currentFile,
                                        " of ",
                                        totalFiles,
                                        " files"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/download-progress.tsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this),
                                fileName && totalFiles === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 truncate",
                                    children: fileName
                                }, void 0, false, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/download-progress.tsx",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/download-progress.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-semibold text-[#D4AF37]",
                            children: [
                                Math.round(progress),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/download-progress.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/download-progress.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-gray-200 rounded-full h-2 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "h-full rounded-full",
                        style: {
                            background: 'linear-gradient(90deg, #D4AF37 0%, #B8941F 100%)'
                        },
                        initial: {
                            width: 0
                        },
                        animate: {
                            width: `${progress}%`
                        },
                        transition: {
                            duration: 0.3
                        }
                    }, void 0, false, {
                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/download-progress.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/download-progress.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/download-progress.tsx",
            lineNumber: 24,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/download-progress.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = DownloadProgress;
var _c;
__turbopack_context__.k.register(_c, "DownloadProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotosGrid",
    ()=>PhotosGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$download$2d$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/components/download-progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/lib/translations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function PhotosGrid({ functionId, photos, isSelectionMode = false, onSelectionModeChange }) {
    _s();
    const storageKey = `selected-photos-${functionId}`;
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    // Always start with empty Set to avoid hydration mismatch
    const [selectedPhotos, setSelectedPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotosGrid.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const savedLang = localStorage.getItem('wedding-gallery-language');
                if (savedLang === 'en' || savedLang === 'hi') {
                    setLanguage(savedLang);
                }
            }
            const handleLanguageChange = {
                "PhotosGrid.useEffect.handleLanguageChange": (e)=>{
                    setLanguage(e.detail);
                }
            }["PhotosGrid.useEffect.handleLanguageChange"];
            window.addEventListener('language-changed', handleLanguageChange);
            return ({
                "PhotosGrid.useEffect": ()=>{
                    window.removeEventListener('language-changed', handleLanguageChange);
                }
            })["PhotosGrid.useEffect"];
        }
    }["PhotosGrid.useEffect"], []);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTranslations"])(language);
    // Clear selections when selection mode is turned off
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotosGrid.useEffect": ()=>{
            if (!isSelectionMode && selectedPhotos.size > 0) {
                setSelectedPhotos(new Set());
            }
        }
    }["PhotosGrid.useEffect"], [
        isSelectionMode
    ]);
    // Load selections from localStorage only after mount (client-side only)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotosGrid.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const stored = localStorage.getItem(storageKey);
                if (stored) {
                    const ids = JSON.parse(stored);
                    // Filter to only include IDs that still exist in photos
                    const validIds = ids.filter({
                        "PhotosGrid.useEffect.validIds": (id)=>photos.some({
                                "PhotosGrid.useEffect.validIds": (p)=>p.id === id
                            }["PhotosGrid.useEffect.validIds"])
                    }["PhotosGrid.useEffect.validIds"]);
                    if (validIds.length > 0) {
                        setSelectedPhotos(new Set(validIds));
                    }
                }
            } catch (error) {
                console.error('Error loading selections from localStorage:', error);
            }
        }
    }["PhotosGrid.useEffect"], [
        storageKey,
        photos
    ]);
    // Save selections to localStorage whenever they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotosGrid.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                if (selectedPhotos.size > 0) {
                    localStorage.setItem(storageKey, JSON.stringify(Array.from(selectedPhotos)));
                } else {
                    localStorage.removeItem(storageKey);
                }
                // Dispatch custom event to notify other components
                window.dispatchEvent(new CustomEvent('photoSelectionChanged', {
                    detail: {
                        hasSelections: selectedPhotos.size > 0
                    }
                }));
            } catch (error) {
                console.error('Error saving selections to localStorage:', error);
            }
        }
    }["PhotosGrid.useEffect"], [
        selectedPhotos,
        storageKey
    ]);
    // Re-validate selections when photos array changes (e.g., after upload)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotosGrid.useEffect": ()=>{
            setSelectedPhotos({
                "PhotosGrid.useEffect": (prev)=>{
                    const validIds = Array.from(prev).filter({
                        "PhotosGrid.useEffect.validIds": (id)=>photos.some({
                                "PhotosGrid.useEffect.validIds": (p)=>p.id === id
                            }["PhotosGrid.useEffect.validIds"])
                    }["PhotosGrid.useEffect.validIds"]);
                    if (validIds.length !== prev.size) {
                        return new Set(validIds);
                    }
                    return prev;
                }
            }["PhotosGrid.useEffect"]);
        }
    }["PhotosGrid.useEffect"], [
        photos
    ]);
    const [downloading, setDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [downloadProgress, setDownloadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentDownloadFile, setCurrentDownloadFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentFileName, setCurrentFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const toggleSelection = (photoId)=>{
        setSelectedPhotos((prev)=>{
            const newSet = new Set(prev);
            if (newSet.has(photoId)) {
                newSet.delete(photoId);
            } else {
                if (newSet.size < 15) {
                    newSet.add(photoId);
                }
            }
            return newSet;
        });
    };
    const handleDownload = async ()=>{
        if (selectedPhotos.size === 0) return;
        const photosToDownload = photos.filter((p)=>selectedPhotos.has(p.id));
        if (photosToDownload.length === 0) return;
        setDownloading(true);
        setDownloadProgress(0);
        setCurrentDownloadFile(0);
        for(let i = 0; i < photosToDownload.length; i++){
            const photo = photosToDownload[i];
            setCurrentDownloadFile(i + 1);
            setCurrentFileName(photo.fileName);
            // Use proxy API route to avoid CORS issues
            const downloadUrl = `/api/download/${photo.id}`;
            // Simulate download progress over 3-4 seconds
            const duration = 3500 // 3.5 seconds
            ;
            const startTime = Date.now();
            // Fetch the file through proxy
            const response = await fetch(downloadUrl);
            if (!response.ok) {
                console.error('Download failed for photo', photo.id, response.statusText);
                continue;
            }
            const blob = await response.blob();
            // Simulate progress
            const progressInterval = setInterval(()=>{
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration * 100, 95);
                setDownloadProgress(progress);
            }, 50);
            // Wait for the duration
            await new Promise((resolve)=>setTimeout(resolve, duration));
            clearInterval(progressInterval);
            // Complete the download
            setDownloadProgress(100);
            // Get filename from Content-Disposition header or generate one
            let downloadFileName = photo.fileName;
            const contentDisposition = response.headers.get('Content-Disposition');
            if (contentDisposition) {
                const filenameMatch = contentDisposition.match(/filename="?(.+?)"?$/i);
                if (filenameMatch) {
                    downloadFileName = filenameMatch[1];
                }
            }
            // Fallback: Generate proper filename if it's "blob" or missing extension
            if (!downloadFileName || downloadFileName === 'blob' || !downloadFileName.includes('.')) {
                // Get file extension from blob type
                let extension = 'jpg';
                if (blob.type) {
                    if (blob.type.includes('jpeg') || blob.type.includes('jpg')) {
                        extension = 'jpg';
                    } else if (blob.type.includes('png')) {
                        extension = 'png';
                    } else if (blob.type.includes('gif')) {
                        extension = 'gif';
                    } else if (blob.type.includes('webp')) {
                        extension = 'webp';
                    }
                }
                downloadFileName = `photo-${photo.id}.${extension}`;
            }
            // Mobile-friendly download handling
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            if (isIOS) {
                // iOS: Open in new tab for user to save manually
                const url = window.URL.createObjectURL(blob);
                const newWindow = window.open(url, '_blank');
                if (newWindow) {
                    // Give user time to see the file, then revoke URL after a delay
                    setTimeout(()=>window.URL.revokeObjectURL(url), 1000);
                } else {
                    // Popup blocked, fallback to download
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = downloadFileName;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    setTimeout(()=>window.URL.revokeObjectURL(url), 1000);
                }
            } else {
                // Android and Desktop: Use standard download
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = downloadFileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }
            // Small delay between files
            if (i < photosToDownload.length - 1) {
                await new Promise((resolve)=>setTimeout(resolve, 200));
                setDownloadProgress(0);
            }
        }
        // Reset after a brief moment
        setTimeout(()=>{
            setDownloading(false);
            setDownloadProgress(0);
            setCurrentDownloadFile(0);
            setCurrentFileName('');
            setSelectedPhotos(new Set());
        }, 500);
    };
    const clearSelection = ()=>{
        setSelectedPhotos(new Set());
    };
    if (photos.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-xl",
                style: {
                    fontFamily: 'var(--font-cormorant)'
                },
                children: t.common.noPhotosUploaded
            }, void 0, false, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                lineNumber: 256,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
            lineNumber: 255,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$download$2d$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DownloadProgress"], {
                isVisible: downloading,
                progress: downloadProgress,
                currentFile: currentDownloadFile,
                totalFiles: selectedPhotos.size,
                fileName: currentFileName
            }, void 0, false, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isSelectionMode && selectedPhotos.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 20
                    },
                    className: "fixed left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#D4AF37]/20 px-5 py-3 flex items-center gap-5 max-w-[95vw]",
                    style: {
                        bottom: `calc(1.5rem + env(safe-area-inset-bottom))`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base font-semibold text-gray-900",
                                    style: {
                                        fontFamily: 'var(--font-cormorant)'
                                    },
                                    children: [
                                        selectedPhotos.size,
                                        " of ",
                                        Math.min(15, photos.length),
                                        " selected"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                                    lineNumber: 285,
                                    columnNumber: 22
                                }, this),
                                selectedPhotos.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: clearSelection,
                                    className: "text-[#D4AF37] hover:text-[#B8941F] text-sm font-medium transition-colors",
                                    style: {
                                        fontFamily: 'var(--font-cormorant)'
                                    },
                                    children: "Clear"
                                }, void 0, false, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                                    lineNumber: 289,
                                    columnNumber: 24
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                            lineNumber: 284,
                            columnNumber: 20
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleDownload,
                            disabled: downloading,
                            className: "bg-[#D4AF37] hover:bg-[#B8941F] text-white rounded-full px-5 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap",
                            style: {
                                fontFamily: 'var(--font-cormorant)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    className: "h-5 w-5 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                                    lineNumber: 303,
                                    columnNumber: 22
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold",
                                    children: downloading ? 'Downloading...' : `Download ${selectedPhotos.size} Photo${selectedPhotos.size > 1 ? 's' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                                    lineNumber: 304,
                                    columnNumber: 22
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                            lineNumber: 297,
                            columnNumber: 20
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                    lineNumber: 275,
                    columnNumber: 18
                }, this)
            }, void 0, false, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                lineNumber: 273,
                columnNumber: 14
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2",
                children: photos.map((photo, index)=>{
                    const isSelected = selectedPhotos.has(photo.id);
                    // First 6 images (above the fold) should load eagerly
                    const isAboveFold = index < 6;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-square overflow-hidden rounded-lg group",
                        children: [
                            isSelectionMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.preventDefault();
                                    e.stopPropagation();
                                    toggleSelection(photo.id);
                                },
                                className: `absolute top-2 left-2 z-10 rounded-full p-1.5 transition-all ${isSelected ? 'bg-[#D4AF37] text-white' : 'bg-white/90 text-gray-400 hover:bg-white'}`,
                                "aria-label": isSelected ? 'Deselect photo' : 'Select photo',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: `h-5 w-5 ${isSelected ? 'fill-current' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                                    lineNumber: 336,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                                lineNumber: 323,
                                columnNumber: 17
                            }, this),
                            isSelectionMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>toggleSelection(photo.id),
                                className: "block w-full h-full cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: photo.url,
                                    alt: photo.fileName,
                                    width: 600,
                                    height: 600,
                                    className: "w-full h-full object-cover",
                                    loading: isAboveFold ? "eager" : "lazy",
                                    unoptimized: true
                                }, void 0, false, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                                    lineNumber: 344,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                                lineNumber: 340,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/gallery?media=${photo.id}`,
                                className: "block w-full h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: photo.url,
                                    alt: photo.fileName,
                                    width: 600,
                                    height: 600,
                                    className: "w-full h-full object-cover",
                                    loading: isAboveFold ? "eager" : "lazy",
                                    unoptimized: true
                                }, void 0, false, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                                    lineNumber: 359,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                                lineNumber: 355,
                                columnNumber: 17
                            }, this)
                        ]
                    }, photo.id, true, {
                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                        lineNumber: 321,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(PhotosGrid, "3aj4/03b2Ua8YitzbUK2kC5L9do=");
_c = PhotosGrid;
var _c;
__turbopack_context__.k.register(_c, "PhotosGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotosPageClient",
    ()=>PhotosPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$photos$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-grid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/lib/translations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function PhotosPageClient({ functionId, photos }) {
    _s();
    const [isSelectionMode, setIsSelectionMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotosPageClient.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const savedLang = localStorage.getItem('wedding-gallery-language');
                if (savedLang === 'en' || savedLang === 'hi') {
                    setLanguage(savedLang);
                }
            }
            const handleLanguageChange = {
                "PhotosPageClient.useEffect.handleLanguageChange": (e)=>{
                    setLanguage(e.detail);
                }
            }["PhotosPageClient.useEffect.handleLanguageChange"];
            window.addEventListener('language-changed', handleLanguageChange);
            return ({
                "PhotosPageClient.useEffect": ()=>{
                    window.removeEventListener('language-changed', handleLanguageChange);
                }
            })["PhotosPageClient.useEffect"];
        }
    }["PhotosPageClient.useEffect"], []);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTranslations"])(language);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-client.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setIsSelectionMode(!isSelectionMode),
                        className: `rounded-full px-6 py-2.5 transition-all ${isSelectionMode ? 'bg-[#D4AF37] hover:bg-[#B8941F] text-white' : 'bg-white/90 hover:bg-white text-gray-700 border border-gray-200'}`,
                        style: {
                            fontFamily: 'var(--font-cormorant)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-client.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: isSelectionMode ? t.common.cancelSelection : t.common.downloadMultiple
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-client.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-client.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-client.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-12 md:mb-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$photos$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhotosGrid"], {
                    functionId: functionId,
                    photos: photos,
                    isSelectionMode: isSelectionMode,
                    onSelectionModeChange: setIsSelectionMode
                }, void 0, false, {
                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-client.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-client.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(PhotosPageClient, "K+IMSz1rykdtoigBawkZ+hwxyxw=");
_c = PhotosPageClient;
var _c;
__turbopack_context__.k.register(_c, "PhotosPageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotosPageHeader",
    ()=>PhotosPageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/lib/translations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PhotosPageHeader({ functionId, functionName, photosCount, videosCount, totalCount }) {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotosPageHeader.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const savedLang = localStorage.getItem('wedding-gallery-language');
                if (savedLang === 'en' || savedLang === 'hi') {
                    setLanguage(savedLang);
                }
            }
            const handleLanguageChange = {
                "PhotosPageHeader.useEffect.handleLanguageChange": (e)=>{
                    setLanguage(e.detail);
                }
            }["PhotosPageHeader.useEffect.handleLanguageChange"];
            window.addEventListener('language-changed', handleLanguageChange);
            return ({
                "PhotosPageHeader.useEffect": ()=>{
                    window.removeEventListener('language-changed', handleLanguageChange);
                }
            })["PhotosPageHeader.useEffect"];
        }
    }["PhotosPageHeader.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/function/${functionId}`,
                        className: "inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#B8941F] font-medium transition-colors group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "h-5 w-5 group-hover:-translate-x-1 transition-transform"
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'var(--font-cormorant)',
                                    fontSize: '1.1rem'
                                },
                                children: [
                                    language === 'hi' ? 'वापस' : 'Back to',
                                    " ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateFunctionName"])(functionName, language)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 container mx-auto px-4 pt-6 pb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24 h-24 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] shadow-lg flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                        className: "h-12 w-12 text-white",
                                        strokeWidth: 1.5
                                    }, void 0, false, {
                                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm uppercase tracking-widest text-gray-500",
                                            children: language === 'hi' ? 'शादी की गैलरी' : 'Wedding Gallery'
                                        }, void 0, false, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-5xl font-bold text-gray-900",
                                            children: language === 'hi' ? 'तस्वीरें' : 'Photos'
                                        }, void 0, false, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: language === 'hi' ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateFunctionName"])(functionName, language)} से सभी कैप्चर की गई तस्वीरें` : `All captured stills from ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateFunctionName"])(functionName, language)}`
                                        }, void 0, false, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold text-gray-900",
                                            children: photosCount
                                        }, void 0, false, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs tracking-wide uppercase text-gray-500",
                                            children: language === 'hi' ? 'तस्वीरें' : 'Photos'
                                        }, void 0, false, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold text-gray-900",
                                            children: videosCount
                                        }, void 0, false, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs tracking-wide uppercase text-gray-500",
                                            children: language === 'hi' ? 'वीडियो' : 'Videos'
                                        }, void 0, false, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold text-gray-900",
                                            children: totalCount
                                        }, void 0, false, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs tracking-wide uppercase text-gray-500",
                                            children: language === 'hi' ? 'अपलोड' : 'Uploads'
                                        }, void 0, false, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/components/photos-page-header.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(PhotosPageHeader, "W8orfgzKvvs5hVi8Wxnq8KXupyo=");
_c = PhotosPageHeader;
var _c;
__turbopack_context__.k.register(_c, "PhotosPageHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=aabhas_kavita_wedding_gallery_frontend_bbfa6c71._.js.map