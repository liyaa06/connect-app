(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/admin/help/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronDown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronDown.mjs [app-client] (ecmascript) <export default as IconChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMail$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconMail.mjs [app-client] (ecmascript) <export default as IconMail>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// Data for FAQs
const faqData = [
    {
        question: "Apa fungsi utama dari Dasbor?",
        answer: "Dasbor adalah halaman utama Anda setelah login. Halaman ini memberikan ringkasan statistik penting secara real-time, seperti jumlah total pengguna terdaftar, total artikel berita yang telah dipublikasikan, dan menampilkan judul berita terbaru. Ini membantu Anda memantau aktivitas aplikasi secara sekilas."
    },
    {
        question: "Bagaimana cara mengelola pengguna?",
        answer: "Anda dapat mengelola pengguna melalui halaman 'User'. Di sana, Anda bisa melihat daftar semua pengguna, menambahkan pengguna baru dengan mengklik tombol 'Tambah Pengguna', mengedit informasi pengguna yang ada, atau menghapusnya dari sistem."
    },
    {
        question: "Apa itu 'Hak Akses' dan bagaimana cara kerjanya?",
        answer: "Halaman 'Hak Akses' (Roles) memungkinkan Anda membuat dan mengelola peran pengguna. Setiap peran dapat memiliki izin yang berbeda. Contohnya, peran 'Admin' memiliki akses penuh, sementara peran 'Editor' mungkin hanya bisa membuat dan mengedit berita. Ini penting untuk mendelegasikan tugas tanpa memberikan akses ke semua fitur."
    },
    {
        question: "Bagaimana cara mempublikasikan artikel berita baru?",
        answer: "Navigasikan ke halaman 'Berita' dari menu. Klik tombol 'Tambah Berita', lalu isi judul dan konten artikel pada form yang tersedia. Setelah selesai, klik 'Simpan' atau 'Publikasikan' untuk menayangkannya."
    },
    {
        question: "Apakah saya bisa mengedit artikel yang sudah dipublikasikan?",
        answer: "Ya, Anda bisa. Di halaman 'Berita', cari artikel yang ingin Anda ubah, lalu klik tombol 'Edit' atau ikon pensil di sebelahnya. Anda akan diarahkan kembali ke form editor di mana Anda dapat membuat perubahan dan menyimpannya kembali."
    },
    {
        question: "Bagaimana cara keluar (logout) dari aplikasi dengan aman?",
        answer: "Untuk keluar dari sesi Anda, cukup klik tombol 'Logout' yang berada di bagian bawah menu navigasi di sisi kiri layar. Ini akan memastikan sesi Anda berakhir dengan aman."
    }
];
const FaqItem = ({ faq, isOpen, onToggle })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-gray-200 py-4 last:border-b-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onToggle,
                className: "w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 focus:outline-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex-1 pr-2",
                        children: faq.question
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/help/page.jsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronDown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronDown$3e$__["IconChevronDown"], {
                        className: `transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`,
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/help/page.jsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/help/page.jsx",
                lineNumber: 36,
                columnNumber: 9
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-gray-600 leading-relaxed",
                children: faq.answer
            }, void 0, false, {
                fileName: "[project]/src/app/admin/help/page.jsx",
                lineNumber: 43,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/help/page.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
_c = FaqItem;
const Help = ()=>{
    _s();
    const [openFaqIndex, setOpenFaqIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleFaqToggle = (index)=>{
        setOpenFaqIndex(openFaqIndex === index ? null : index); // Toggle FAQ item open/close state
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10 text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-left  mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold mb-2",
                        children: "Pusat Bantuan Connect App"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/help/page.jsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600",
                        children: "Selamat datang! Kami di sini untuk membantu Anda memaksimalkan penggunaan aplikasi."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/help/page.jsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/help/page.jsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-6",
                        children: "Pertanyaan yang Sering Diajukan (FAQ)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/help/page.jsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-lg shadow-md border",
                        children: faqData.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqItem, {
                                faq: faq,
                                isOpen: openFaqIndex === index,
                                onToggle: ()=>handleFaqToggle(index)
                            }, index, false, {
                                fileName: "[project]/src/app/admin/help/page.jsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/help/page.jsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 bg-gray-50 p-8 rounded-lg text-center shadow-sm border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold mb-4",
                                children: "Masih Butuh Bantuan?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/help/page.jsx",
                                lineNumber: 75,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 mb-6",
                                children: "Jika Anda tidak menemukan jawaban yang Anda cari di atas, jangan ragu untuk menghubungi tim dukungan kami. Kami siap membantu Anda."
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/help/page.jsx",
                                lineNumber: 76,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:support@connectapp.com",
                                className: "inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMail$3e$__["IconMail"], {
                                        className: "mr-2",
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/help/page.jsx",
                                        lineNumber: 80,
                                        columnNumber: 25
                                    }, this),
                                    "Hubungi Dukungan"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/help/page.jsx",
                                lineNumber: 79,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/help/page.jsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/help/page.jsx",
                lineNumber: 61,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/help/page.jsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
};
_s(Help, "KN+QOqvnd9kIhwc3e3706tRR9bA=");
_c1 = Help;
const __TURBOPACK__default__export__ = Help;
var _c, _c1;
__turbopack_context__.k.register(_c, "FaqItem");
__turbopack_context__.k.register(_c1, "Help");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronDown.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>IconChevronDown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
var IconChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "chevron-down", "IconChevronDown", [
    [
        "path",
        {
            "d": "M6 9l6 6l6 -6",
            "key": "svg-0"
        }
    ]
]);
;
 //# sourceMappingURL=IconChevronDown.mjs.map
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronDown.mjs [app-client] (ecmascript) <export default as IconChevronDown>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconChevronDown": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronDown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronDown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronDown.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconMail.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>IconMail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
var IconMail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "mail", "IconMail", [
    [
        "path",
        {
            "d": "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M3 7l9 6l9 -6",
            "key": "svg-1"
        }
    ]
]);
;
 //# sourceMappingURL=IconMail.mjs.map
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconMail.mjs [app-client] (ecmascript) <export default as IconMail>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconMail": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconMail.mjs [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_af5c15cc._.js.map