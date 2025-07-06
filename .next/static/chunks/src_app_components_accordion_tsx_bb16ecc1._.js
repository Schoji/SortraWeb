(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/accordion.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const Accordion = ({ header, content })=>{
    _s();
    // Prevent scroll-into-view on input focus/click
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Accordion.useEffect": ()=>{
            const input = inputRef.current;
            if (!input) return;
            // Prevent scrollIntoView on focus
            const handleMouseDown = {
                "Accordion.useEffect.handleMouseDown": (e)=>{
                    e.preventDefault();
                    input.checked = !input.checked;
                    // Manually trigger change event if needed
                    input.dispatchEvent(new Event('change', {
                        bubbles: true
                    }));
                }
            }["Accordion.useEffect.handleMouseDown"];
            input.addEventListener('mousedown', handleMouseDown);
            return ({
                "Accordion.useEffect": ()=>{
                    input.removeEventListener('mousedown', handleMouseDown);
                }
            })["Accordion.useEffect"];
        }
    }["Accordion.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "collapse bg-base-200 border border-base-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: inputRef,
                type: "radio",
                name: "accordion",
                tabIndex: -1
            }, void 0, false, {
                fileName: "[project]/src/app/components/accordion.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "collapse-title font-semibold",
                children: header
            }, void 0, false, {
                fileName: "[project]/src/app/components/accordion.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "collapse-content text-sm",
                children: content
            }, void 0, false, {
                fileName: "[project]/src/app/components/accordion.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/accordion.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
};
_s(Accordion, "cBQ6FQ+sf5H+lvNONLKqtm4aeQ8=");
_c = Accordion;
const __TURBOPACK__default__export__ = Accordion;
var _c;
__turbopack_context__.k.register(_c, "Accordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_accordion_tsx_bb16ecc1._.js.map