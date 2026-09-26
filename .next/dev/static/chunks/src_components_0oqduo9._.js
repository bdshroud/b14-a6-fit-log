(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/SaveButton/SaveButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$workoutContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/workoutContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const SaveButton = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "b9d38914c7b6c267d8c949010c62b51378001c0a0deb798643d6225112037dce") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b9d38914c7b6c267d8c949010c62b51378001c0a0deb798643d6225112037dce";
    }
    const { workout } = t0;
    const { addSave, saveForLater } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$workoutContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkoutContext"]);
    let t1;
    if ($[1] !== addSave || $[2] !== workout) {
        let t2;
        if ($[4] !== workout) {
            t2 = (item)=>item.id === workout.id;
            $[4] = workout;
            $[5] = t2;
        } else {
            t2 = $[5];
        }
        t1 = addSave.some(t2);
        $[1] = addSave;
        $[2] = workout;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const alreadySaved = t1;
    let t2;
    if ($[6] !== alreadySaved || $[7] !== saveForLater || $[8] !== workout) {
        t2 = ()=>{
            if (alreadySaved) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("This workout is already saved.");
                return;
            }
            const success = saveForLater(workout);
            if (success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Saved for later");
            }
        };
        $[6] = alreadySaved;
        $[7] = saveForLater;
        $[8] = workout;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    const handleSave = t2;
    const t3 = alreadySaved ? "Saved" : "Save for later";
    let t4;
    if ($[10] !== alreadySaved || $[11] !== handleSave || $[12] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleSave,
            disabled: alreadySaved,
            className: "w-full rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/SaveButton/SaveButton.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = alreadySaved;
        $[11] = handleSave;
        $[12] = t3;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    return t4;
};
_s(SaveButton, "kldEkwp4u/7wzNbwJa556NlOwVE=");
_c = SaveButton;
const __TURBOPACK__default__export__ = SaveButton;
var _c;
__turbopack_context__.k.register(_c, "SaveButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TodayButton/TodayButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$workoutContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/workoutContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const TodayButton = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "4e0a10264274947974e5764242392eb62109088fd63ebf0585f9b7aed4f3bd38") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4e0a10264274947974e5764242392eb62109088fd63ebf0585f9b7aed4f3bd38";
    }
    const { workout } = t0;
    const { addWorkout, addToToday } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$workoutContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkoutContext"]);
    let t1;
    if ($[1] !== addWorkout || $[2] !== workout) {
        let t2;
        if ($[4] !== workout) {
            t2 = (item)=>item.id === workout.id;
            $[4] = workout;
            $[5] = t2;
        } else {
            t2 = $[5];
        }
        t1 = addWorkout.some(t2);
        $[1] = addWorkout;
        $[2] = workout;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const alreadyAdded = t1;
    const planFull = addWorkout.length >= 5;
    let t2;
    if ($[6] !== addToToday || $[7] !== alreadyAdded || $[8] !== planFull || $[9] !== workout) {
        t2 = ()=>{
            if (alreadyAdded) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("This workout is already in today's plan.");
                return;
            }
            if (planFull) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Today's plan is full. Maximum 5 workouts.");
                return;
            }
            const success = addToToday(workout);
            if (success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Added to today's plan");
            }
        };
        $[6] = addToToday;
        $[7] = alreadyAdded;
        $[8] = planFull;
        $[9] = workout;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    const handleAddToday = t2;
    const t3 = alreadyAdded || planFull;
    const t4 = alreadyAdded ? "Added to today's plan" : planFull ? "Plan is full" : "Add to today's plan";
    let t5;
    if ($[11] !== handleAddToday || $[12] !== t3 || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleAddToday,
            disabled: t3,
            className: "w-full rounded-lg bg-[#C2F800] px-6 py-3 text-sm font-bold text-black disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/TodayButton/TodayButton.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = handleAddToday;
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
};
_s(TodayButton, "CceszpVGYltwUZbA4sHZgHIZokE=");
_c = TodayButton;
const __TURBOPACK__default__export__ = TodayButton;
var _c;
__turbopack_context__.k.register(_c, "TodayButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_0oqduo9._.js.map