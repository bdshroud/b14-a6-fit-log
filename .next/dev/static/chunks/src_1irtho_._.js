(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/my-plan/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SaveCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SaveCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TodayCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/TodayCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$workoutContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/workoutContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const MyPlan = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "1041afd86ed1709f44ea56719756cddb3b2f9137135859218001ae3d610b97e5") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1041afd86ed1709f44ea56719756cddb3b2f9137135859218001ae3d610b97e5";
    }
    const { addWorkout, activeTab, setActiveTab, addSave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$workoutContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkoutContext"]);
    const totalExercises = addWorkout.length;
    let t0;
    if ($[1] !== addWorkout) {
        t0 = addWorkout.reduce(_temp, 0);
        $[1] = addWorkout;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const totalMinutes = t0;
    let t1;
    if ($[3] !== addWorkout) {
        t1 = addWorkout.reduce(_temp2, 0);
        $[3] = addWorkout;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const totalCalories = t1;
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "my-5 text-center md:text-left",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl md:text-4xl font-bold",
                    children: "MY PLAN"
                }, void 0, false, {
                    fileName: "[project]/src/app/my-plan/page.tsx",
                    lineNumber: 44,
                    columnNumber: 57
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: "Cap of five lifts for today. Finish them, then load more."
                }, void 0, false, {
                    fileName: "[project]/src/app/my-plan/page.tsx",
                    lineNumber: 44,
                    columnNumber: 116
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/my-plan/page.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Exercise"
        }, void 0, false, {
            fileName: "[project]/src/app/my-plan/page.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== totalExercises) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-[#C2F800]",
                    children: totalExercises
                }, void 0, false, {
                    fileName: "[project]/src/app/my-plan/page.tsx",
                    lineNumber: 58,
                    columnNumber: 60
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/my-plan/page.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = totalExercises;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Minutes"
        }, void 0, false, {
            fileName: "[project]/src/app/my-plan/page.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== totalMinutes) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold ",
                    children: totalMinutes
                }, void 0, false, {
                    fileName: "[project]/src/app/my-plan/page.tsx",
                    lineNumber: 73,
                    columnNumber: 60
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/my-plan/page.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = totalMinutes;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Calories"
        }, void 0, false, {
            fileName: "[project]/src/app/my-plan/page.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== totalCalories) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold ",
                    children: totalCalories
                }, void 0, false, {
                    fileName: "[project]/src/app/my-plan/page.tsx",
                    lineNumber: 88,
                    columnNumber: 60
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/my-plan/page.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = totalCalories;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t4 || $[16] !== t6 || $[17] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " bg-[#15171D] rounded-2xl my-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center px-3 py-4 max-w-220",
                children: [
                    t4,
                    t6,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/my-plan/page.tsx",
                lineNumber: 96,
                columnNumber: 58
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/my-plan/page.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t4;
        $[16] = t6;
        $[17] = t8;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    const t10 = activeTab === "today";
    let t11;
    if ($[19] !== setActiveTab) {
        t11 = ()=>setActiveTab("today");
        $[19] = setActiveTab;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t10 || $[22] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "radio",
            name: "my_tabs_2",
            className: "tab text-white/60 checked:text-white",
            "aria-label": "Today's Plan",
            checked: t10,
            onChange: t11
        }, void 0, false, {
            fileName: "[project]/src/app/my-plan/page.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t10;
        $[22] = t11;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== addWorkout) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tab-content p-6 md:p-10",
            children: addWorkout.length <= 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/15 bg-white/5 px-6 py-14 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-7 w-7",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 1.8,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M8 7V5a1 1 0 011-1h6a1 1 0 011 1v2m-9 0h10a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z"
                            }, void 0, false, {
                                fileName: "[project]/src/app/my-plan/page.tsx",
                                lineNumber: 124,
                                columnNumber: 458
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/my-plan/page.tsx",
                            lineNumber: 124,
                            columnNumber: 326
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/my-plan/page.tsx",
                        lineNumber: 124,
                        columnNumber: 226
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: "No workout planned today"
                            }, void 0, false, {
                                fileName: "[project]/src/app/my-plan/page.tsx",
                                lineNumber: 124,
                                columnNumber: 654
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto max-w-xs text-sm text-white/60",
                                children: "Pick a lift from the library to build today's session."
                            }, void 0, false, {
                                fileName: "[project]/src/app/my-plan/page.tsx",
                                lineNumber: 124,
                                columnNumber: 721
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/my-plan/page.tsx",
                        lineNumber: 124,
                        columnNumber: 627
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/#library",
                        className: "btn btn-primary bg-[#C2F10D] font-bold text-black rounded-full px-6",
                        children: "Go to workouts"
                    }, void 0, false, {
                        fileName: "[project]/src/app/my-plan/page.tsx",
                        lineNumber: 124,
                        columnNumber: 839
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/my-plan/page.tsx",
                lineNumber: 124,
                columnNumber: 78
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-dashed border-white/15 bg-white/5 px-6 py-14 space-y-3",
                children: addWorkout.map(_temp3)
            }, void 0, false, {
                fileName: "[project]/src/app/my-plan/page.tsx",
                lineNumber: 124,
                columnNumber: 972
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/my-plan/page.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = addWorkout;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    const t14 = activeTab === "saved";
    let t15;
    if ($[26] !== setActiveTab) {
        t15 = ()=>setActiveTab("saved");
        $[26] = setActiveTab;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== t14 || $[29] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "radio",
            name: "my_tabs_2",
            className: "tab text-white/60 checked:text-white",
            "aria-label": "Saved",
            checked: t14,
            onChange: t15
        }, void 0, false, {
            fileName: "[project]/src/app/my-plan/page.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t14;
        $[29] = t15;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[31] !== addSave) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tab-content p-6 md:p-10",
            children: addSave.length <= 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/15 bg-white/5 px-6 py-14 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-7 w-7",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 1.8,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            }, void 0, false, {
                                fileName: "[project]/src/app/my-plan/page.tsx",
                                lineNumber: 150,
                                columnNumber: 455
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/my-plan/page.tsx",
                            lineNumber: 150,
                            columnNumber: 323
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/my-plan/page.tsx",
                        lineNumber: 150,
                        columnNumber: 223
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: "Nothing saved yet"
                            }, void 0, false, {
                                fileName: "[project]/src/app/my-plan/page.tsx",
                                lineNumber: 150,
                                columnNumber: 601
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto max-w-xs text-sm text-white/60",
                                children: "Browse the library and save a lift to get today moving."
                            }, void 0, false, {
                                fileName: "[project]/src/app/my-plan/page.tsx",
                                lineNumber: 150,
                                columnNumber: 661
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/my-plan/page.tsx",
                        lineNumber: 150,
                        columnNumber: 574
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/#library",
                        className: "btn btn-primary rounded-full bg-[#C2F10D] font-bold text-black px-6",
                        children: "Go to workouts"
                    }, void 0, false, {
                        fileName: "[project]/src/app/my-plan/page.tsx",
                        lineNumber: 150,
                        columnNumber: 780
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/my-plan/page.tsx",
                lineNumber: 150,
                columnNumber: 75
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-dashed border-white/15 bg-white/5 px-6 py-14 space-y-3",
                children: addSave.map(_temp4)
            }, void 0, false, {
                fileName: "[project]/src/app/my-plan/page.tsx",
                lineNumber: 150,
                columnNumber: 913
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/my-plan/page.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = addSave;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tab tabs-border border border-gray-700 text-white absolute right-2 md:right-20 w-20 overflow-hidden shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: "bg-gray-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        className: "bg-gray-900",
                        value: "duration",
                        children: "Duration"
                    }, void 0, false, {
                        fileName: "[project]/src/app/my-plan/page.tsx",
                        lineNumber: 158,
                        columnNumber: 169
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        className: "bg-gray-900",
                        value: "calories",
                        children: "Calories"
                    }, void 0, false, {
                        fileName: "[project]/src/app/my-plan/page.tsx",
                        lineNumber: 158,
                        columnNumber: 235
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        className: "bg-gray-900",
                        value: "rating",
                        children: "Rating"
                    }, void 0, false, {
                        fileName: "[project]/src/app/my-plan/page.tsx",
                        lineNumber: 158,
                        columnNumber: 301
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/my-plan/page.tsx",
                lineNumber: 158,
                columnNumber: 137
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/my-plan/page.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t18;
    } else {
        t18 = $[33];
    }
    let t19;
    if ($[34] !== t12 || $[35] !== t13 || $[36] !== t16 || $[37] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tabs tabs-border text-white",
            children: [
                t12,
                t13,
                t16,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/my-plan/page.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t12;
        $[35] = t13;
        $[36] = t16;
        $[37] = t17;
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] !== t19 || $[40] !== t9) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto max-w-280 p-4 md:p-0",
            children: [
                t2,
                t9,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/my-plan/page.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t19;
        $[40] = t9;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    return t20;
};
_s(MyPlan, "WTw+o2REVmD+XSRWwKXqA8Qezas=");
_c = MyPlan;
const __TURBOPACK__default__export__ = MyPlan;
function _temp(sum, w) {
    return sum + w.duration;
}
function _temp2(sum_0, w_0) {
    return sum_0 + w_0.caloriesBurned;
}
function _temp3(workout, ind) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TodayCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        workout: workout
    }, ind, false, {
        fileName: "[project]/src/app/my-plan/page.tsx",
        lineNumber: 193,
        columnNumber: 10
    }, this);
}
function _temp4(workout_0, ind_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SaveCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        workout: workout_0
    }, ind_0, false, {
        fileName: "[project]/src/app/my-plan/page.tsx",
        lineNumber: 196,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "MyPlan");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DeleteButton/DeleteSaveButtonPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$workoutContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/workoutContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$rx$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/rx/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const DeleteSaveButtonPage = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "fdeace6bf994120d5115eae29159f9e8848cd81d4d9f43f322e13264afae06cd") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fdeace6bf994120d5115eae29159f9e8848cd81d4d9f43f322e13264afae06cd";
    }
    const { workout } = t0;
    const { removeFromSaved } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$workoutContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkoutContext"]);
    let t1;
    if ($[1] !== removeFromSaved || $[2] !== workout) {
        t1 = ()=>{
            removeFromSaved(workout);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Removed from saved");
        };
        $[1] = removeFromSaved;
        $[2] = workout;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleDelete = t1;
    const t2 = `Remove ${workout.name} from saved`;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$rx$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RxCross2"], {}, void 0, false, {
            fileName: "[project]/src/components/DeleteButton/DeleteSaveButtonPage.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== handleDelete || $[6] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleDelete,
            "aria-label": t2,
            className: "flex text-lg cursor-pointer",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/DeleteButton/DeleteSaveButtonPage.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = handleDelete;
        $[6] = t2;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
};
_s(DeleteSaveButtonPage, "GyaQo8o5AJiGFHpzSK61i9FUtUM=");
_c = DeleteSaveButtonPage;
const __TURBOPACK__default__export__ = DeleteSaveButtonPage;
var _c;
__turbopack_context__.k.register(_c, "DeleteSaveButtonPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DeleteButton/DeleteTodayButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$workoutContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/workoutContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$rx$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/rx/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const DeleteTodayButtonPage = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "6e353c79f59a8c3d53dd2ada3313653159c042a535b702232cdd077160c7ff0f") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6e353c79f59a8c3d53dd2ada3313653159c042a535b702232cdd077160c7ff0f";
    }
    const { workout } = t0;
    const { removeFromToday } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$workoutContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkoutContext"]);
    let t1;
    if ($[1] !== removeFromToday || $[2] !== workout) {
        t1 = ()=>{
            removeFromToday(workout);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Removed from today's plan");
        };
        $[1] = removeFromToday;
        $[2] = workout;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleDelete = t1;
    const t2 = `Remove ${workout.name} from today's plan`;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$rx$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RxCross2"], {}, void 0, false, {
            fileName: "[project]/src/components/DeleteButton/DeleteTodayButton.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== handleDelete || $[6] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleDelete,
            "aria-label": t2,
            className: "flex cursor-pointer text-lg",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/DeleteButton/DeleteTodayButton.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = handleDelete;
        $[6] = t2;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
};
_s(DeleteTodayButtonPage, "xDnE1aEdn3zpX2L6Jzdc+/hUY+0=");
_c = DeleteTodayButtonPage;
const __TURBOPACK__default__export__ = DeleteTodayButtonPage;
var _c;
__turbopack_context__.k.register(_c, "DeleteTodayButtonPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DeleteButton/MarkAsSavedToday.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$workoutContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/workoutContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const MarkAsSavedToday = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "249e777a667f8a57b841bd08b00fbc07726fd51ebbabf12343e6b416b4399722") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "249e777a667f8a57b841bd08b00fbc07726fd51ebbabf12343e6b416b4399722";
    }
    const { workout } = t0;
    const { markTodayAsDone } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$workoutContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkoutContext"]);
    let t1;
    if ($[1] !== markTodayAsDone || $[2] !== workout) {
        t1 = ()=>{
            markTodayAsDone(workout);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Marked as done");
        };
        $[1] = markTodayAsDone;
        $[2] = workout;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleDone = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {
            className: "flex text-lg"
        }, void 0, false, {
            fileName: "[project]/src/components/DeleteButton/MarkAsSavedToday.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== handleDone) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleDone,
            className: "flex items-center justify-center gap-1 w-full sm:w-auto rounded-4xl cursor-pointer bg-[#C2F800] px-4 py-2 text-xs md:text-sm font-bold text-black",
            children: [
                t2,
                " Mark as Done"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DeleteButton/MarkAsSavedToday.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = handleDone;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
};
_s(MarkAsSavedToday, "TNnDfRLwKCyRxwiDKOyLUyL+6LA=");
_c = MarkAsSavedToday;
const __TURBOPACK__default__export__ = MarkAsSavedToday;
var _c;
__turbopack_context__.k.register(_c, "MarkAsSavedToday");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/SaveCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeleteButton$2f$DeleteSaveButtonPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DeleteButton/DeleteSaveButtonPage.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
const SaveCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "265d30fa18248b5e58c4fbb58baa0321e29199e65248c849944e2137c08f2197") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "265d30fa18248b5e58c4fbb58baa0321e29199e65248c849944e2137c08f2197";
    }
    const { workout } = t0;
    let t1;
    if ($[1] !== workout.image) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "h-auto rounded-xl w-20 h-20 sm:w-[100px] sm:h-[100px] object-cover shrink-0",
            src: workout.image,
            height: 100,
            width: 100,
            loading: "eager",
            alt: "Workout"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SaveCard.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = workout.image;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== workout.name) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-lg sm:text-xl font-bold truncate max-w-[220px] sm:max-w-none",
            children: workout.name
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SaveCard.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = workout.name;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== workout.equipment) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-sm",
            children: workout.equipment
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SaveCard.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = workout.equipment;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRegClock"], {}, void 0, false, {
            fileName: "[project]/src/components/shared/SaveCard.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== workout.duration) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "flex items-center gap-1 font-semibold whitespace-nowrap",
            children: [
                t4,
                workout.duration,
                " min"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SaveCard.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = workout.duration;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "h-5 w-5 sm:h-6 sm:w-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12.5 3c.5 3-1.5 4.5-2.5 6\n               1.5-.5 3-1.5 3.5-3\n               2 2 4.5 4.5 4.5 8\n               0 3.87-2.91 7-6.5 7\n               S5 17.87 5 14\n               c0-3 1.5-5.5 4-7.5\n               -.5 2.5.5 3.5 1.5 4\n               .5-2 2-4.5 2-7.5Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/SaveCard.tsx",
                    lineNumber: 62,
                    columnNumber: 199
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 17.5c0-1.5 1-2.5 2-3.5 1 1 2 2 2 3.5a2 2 0 0 1-4 0Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/SaveCard.tsx",
                    lineNumber: 62,
                    columnNumber: 480
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SaveCard.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== workout.caloriesBurned) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "flex items-center font-semibold whitespace-nowrap",
            children: [
                t6,
                workout.caloriesBurned,
                " Kcal"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SaveCard.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = workout.caloriesBurned;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRegStar"], {}, void 0, false, {
            fileName: "[project]/src/components/shared/SaveCard.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== workout.rating) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "flex items-center gap-1 font-semibold whitespace-nowrap",
            children: [
                t8,
                workout.rating
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SaveCard.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = workout.rating;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t5 || $[17] !== t7 || $[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs space-x-2 text-[#C2F800] flex items-center flex-wrap justify-center sm:justify-start mt-1",
            children: [
                t5,
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SaveCard.tsx",
            lineNumber: 92,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t5;
        $[17] = t7;
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t10 || $[21] !== t2 || $[22] !== t3) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center items-center sm:items-start min-w-0",
            children: [
                t2,
                t3,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SaveCard.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t10;
        $[21] = t2;
        $[22] = t3;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t1 || $[25] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto text-center sm:text-left",
            children: [
                t1,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SaveCard.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t1;
        $[25] = t11;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    const t13 = `/exercise/${workout.id}`;
    let t14;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "w-full sm:w-auto rounded-4xl border border-gray-600 px-4 py-2 cursor-pointer text-xs md:text-sm font-semibold",
            children: "View Details"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SaveCard.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t13,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SaveCard.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t13;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== workout) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeleteButton$2f$DeleteSaveButtonPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            workout: workout
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SaveCard.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = workout;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== t15 || $[33] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-3 items-center w-full md:w-auto",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SaveCard.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t15;
        $[33] = t16;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== t12 || $[36] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:justify-between items-center md:items-center gap-4 p-4 border-gray-700 border-2 bg-[#14171E] rounded-2xl",
            children: [
                t12,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SaveCard.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t12;
        $[36] = t17;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    return t18;
};
_c = SaveCard;
const __TURBOPACK__default__export__ = SaveCard;
var _c;
__turbopack_context__.k.register(_c, "SaveCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/TodayCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeleteButton$2f$DeleteTodayButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DeleteButton/DeleteTodayButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeleteButton$2f$MarkAsSavedToday$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DeleteButton/MarkAsSavedToday.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
const TodayCardPage = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "eb2185635f7c0173983e4e4589fa2cac58983b544eeda06ef5482dd45af3faf4") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eb2185635f7c0173983e4e4589fa2cac58983b544eeda06ef5482dd45af3faf4";
    }
    const { workout } = t0;
    let t1;
    if ($[1] !== workout.image) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "h-auto rounded-xl w-20 sm:w-[100px] sm:h-[100px] object-cover shrink-0",
            src: workout.image,
            height: 100,
            width: 100,
            loading: "eager",
            alt: "Workout"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = workout.image;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== workout.name) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-lg sm:text-xl font-bold truncate max-w-[220px] sm:max-w-none",
            children: workout.name
        }, void 0, false, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = workout.name;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== workout.equipment) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-sm",
            children: workout.equipment
        }, void 0, false, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = workout.equipment;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRegClock"], {}, void 0, false, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== workout.duration) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "flex items-center gap-1 font-semibold whitespace-nowrap",
            children: [
                t4,
                workout.duration,
                " min"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = workout.duration;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "h-5 w-5 sm:h-6 sm:w-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12.5 3c.5 3-1.5 4.5-2.5 6\n               1.5-.5 3-1.5 3.5-3\n               2 2 4.5 4.5 4.5 8\n               0 3.87-2.91 7-6.5 7\n               S5 17.87 5 14\n               c0-3 1.5-5.5 4-7.5\n               -.5 2.5.5 3.5 1.5 4\n               .5-2 2-4.5 2-7.5Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/TodayCard.tsx",
                    lineNumber: 63,
                    columnNumber: 199
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 17.5c0-1.5 1-2.5 2-3.5 1 1 2 2 2 3.5a2 2 0 0 1-4 0Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/TodayCard.tsx",
                    lineNumber: 63,
                    columnNumber: 480
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== workout.caloriesBurned) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "flex items-center font-semibold whitespace-nowrap",
            children: [
                t6,
                workout.caloriesBurned,
                " Kcal"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = workout.caloriesBurned;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRegStar"], {}, void 0, false, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== workout.rating) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "flex items-center gap-1 font-semibold whitespace-nowrap",
            children: [
                t8,
                workout.rating
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = workout.rating;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t5 || $[17] !== t7 || $[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs space-x-2 text-[#C2F800] flex items-center flex-wrap justify-center sm:justify-start mt-1",
            children: [
                t5,
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 93,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t5;
        $[17] = t7;
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t10 || $[21] !== t2 || $[22] !== t3) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center items-center sm:items-start min-w-0",
            children: [
                t2,
                t3,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t10;
        $[21] = t2;
        $[22] = t3;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t1 || $[25] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto text-center sm:text-left",
            children: [
                t1,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t1;
        $[25] = t11;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    const t13 = `/exercise/${workout.id}`;
    let t14;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "w-full sm:w-auto rounded-4xl border border-gray-600 px-4 py-2 cursor-pointer text-xs md:text-sm font-semibold",
            children: "View Details"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t13,
            className: "w-full sm:w-auto",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t13;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    let t17;
    if ($[30] !== workout) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeleteButton$2f$MarkAsSavedToday$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            workout: workout
        }, void 0, false, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeleteButton$2f$DeleteTodayButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            workout: workout
        }, void 0, false, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = workout;
        $[31] = t16;
        $[32] = t17;
    } else {
        t16 = $[31];
        t17 = $[32];
    }
    let t18;
    if ($[33] !== t15 || $[34] !== t16 || $[35] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-3 items-center w-full md:w-auto",
            children: [
                t15,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t15;
        $[34] = t16;
        $[35] = t17;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== t12 || $[38] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:justify-between items-center md:items-center gap-4 p-4 border-gray-700 border-2 bg-[#14171E] rounded-2xl",
            children: [
                t12,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/TodayCard.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t12;
        $[38] = t18;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    return t19;
};
_c = TodayCardPage;
const __TURBOPACK__default__export__ = TodayCardPage;
var _c;
__turbopack_context__.k.register(_c, "TodayCardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1irtho_._.js.map