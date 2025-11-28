module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/lib/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSession",
    ()=>createSession,
    "decrypt",
    ()=>decrypt,
    "deleteSession",
    ()=>deleteSession,
    "encrypt",
    ()=>encrypt,
    "getSession",
    ()=>getSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/jose/dist/webapi/jwt/sign.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/jose/dist/webapi/jwt/verify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
const secretKey = process.env.JWT_SECRET || 'default-secret-key';
const key = new TextEncoder().encode(secretKey);
async function encrypt(payload) {
    return await new __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: 'HS256'
    }).setIssuedAt().setExpirationTime('7d').sign(key);
}
async function decrypt(input) {
    const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jwtVerify"])(input, key, {
        algorithms: [
            'HS256'
        ]
    });
    return payload;
}
async function createSession(userId, phone) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
    ;
    const session = await encrypt({
        userId,
        phone,
        expiresAt
    });
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set('session', session, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === 'production',
        sameSite: 'lax',
        expires: expiresAt,
        path: '/'
    });
}
async function getSession() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const session = cookieStore.get('session')?.value;
    if (!session) return null;
    try {
        return await decrypt(session);
    } catch  {
        return null;
    }
}
async function deleteSession() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete('session');
}
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/components/function-page-client.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "FunctionPageClient",
    ()=>FunctionPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FunctionPageClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FunctionPageClient() from the server but FunctionPageClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/aabhas_kavita_wedding_gallery_frontend/components/function-page-client.tsx <module evaluation>", "FunctionPageClient");
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/components/function-page-client.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "FunctionPageClient",
    ()=>FunctionPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FunctionPageClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FunctionPageClient() from the server but FunctionPageClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/aabhas_kavita_wedding_gallery_frontend/components/function-page-client.tsx", "FunctionPageClient");
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/components/function-page-client.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$function$2d$page$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/components/function-page-client.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$function$2d$page$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/components/function-page-client.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$function$2d$page$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FunctionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$function$2d$page$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/components/function-page-client.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/folder.js [app-rsc] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/camera.js [app-rsc] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/video.js [app-rsc] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
;
;
;
;
;
;
;
async function FunctionPage({ params }) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSession"])();
    if (!session) (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/login');
    const { id } = await params;
    const functionId = parseInt(id);
    if (isNaN(functionId)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/');
    const [functionData, allFunctions] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].function.findUnique({
            where: {
                id: functionId
            },
            include: {
                media: {
                    select: {
                        type: true
                    }
                }
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].function.findMany({
            orderBy: {
                createdAt: 'asc'
            },
            select: {
                id: true,
                name: true
            }
        })
    ]);
    if (!functionData) (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/');
    const photoCount = functionData.media.filter((m)=>m.type === 'photo').length;
    const videoCount = functionData.media.filter((m)=>m.type === 'video').length;
    const folderCards = [
        {
            title: 'Photos',
            description: 'All captured moments from this celebration.',
            href: `/function/${functionId}/photos`,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                className: "h-8 w-8"
            }, void 0, false, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            count: photoCount,
            gradient: 'from-[#D4AF37] to-[#B8941F]'
        },
        {
            title: 'Videos',
            description: 'Watch the highlights and heartfelt clips.',
            href: `/function/${functionId}/videos`,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                className: "h-8 w-8"
            }, void 0, false, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            count: videoCount,
            gradient: 'from-[#E8C5B8] to-[#D4A5A5]'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[100dvh] relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 pointer-events-none",
                style: {
                    backgroundImage: 'url("/Ankita and Sahil wedding logo.png")',
                    backgroundSize: '50% auto',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    opacity: '0.08',
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 gradient-wedding pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#B8941F] font-medium transition-colors group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "h-5 w-5 group-hover:-translate-x-1 transition-transform"
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'var(--font-cormorant)',
                                    fontSize: '1.1rem'
                                },
                                children: "Back to Home"
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 container mx-auto px-4 pt-6 pb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-6xl font-bold mb-4 pb-4",
                                style: {
                                    fontFamily: 'var(--font-playfair)',
                                    background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 50%, #D4A5A5 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                },
                                children: functionData.name
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            functionData.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-gray-700 max-w-3xl",
                                style: {
                                    fontFamily: 'var(--font-cormorant)'
                                },
                                children: functionData.description
                            }, void 0, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: folderCards.map((folder, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: folder.href,
                                className: `group ${folder.title === 'Videos' ? 'mb-12 md:mb-0' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-3xl p-8 h-full bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl transition-all duration-300 group-hover:-translate-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-16 h-16 rounded-2xl bg-gradient-to-br ${folder.gradient} text-white flex items-center justify-center flex-shrink-0`,
                                                    children: folder.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-baseline gap-3 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-3xl font-semibold",
                                                            style: {
                                                                fontFamily: 'var(--font-playfair)'
                                                            },
                                                            children: folder.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-500",
                                                            style: {
                                                                fontFamily: 'var(--font-cormorant)'
                                                            },
                                                            children: [
                                                                folder.count,
                                                                " items"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-4",
                                            style: {
                                                fontFamily: 'var(--font-cormorant)'
                                            },
                                            children: folder.description
                                        }, void 0, false, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 text-[#D4AF37] font-medium",
                                            style: {
                                                fontFamily: 'var(--font-cormorant)'
                                            },
                                            children: [
                                                "View ",
                                                folder.title,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            }, folder.title, false, {
                                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aabhas_kavita_wedding_gallery_frontend$2f$components$2f$function$2d$page$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FunctionPageClient"], {
                functions: allFunctions
            }, void 0, false, {
                fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/aabhas_kavita_wedding_gallery_frontend/app/function/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7c1383c8._.js.map