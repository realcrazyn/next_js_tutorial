"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Users = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            id: 1,\n            name: \"Ivan\"\n        },\n        {\n            id: 2,\n            name: \"Alex\"\n        }, \n    ]), users = ref[0], setUsers = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(/*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n        var response;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(\"https://jsonplaceholder.typicode.com/users\")\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2\n                    ];\n            }\n        });\n    }), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Users list\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Frontend\\\\next\\\\pages\\\\users.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: users.map(function(user) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"users/\".concat(user.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: user.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Frontend\\\\next\\\\pages\\\\users.js\",\n                                lineNumber: 21,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Frontend\\\\next\\\\pages\\\\users.js\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, _this)\n                    }, user.id, false, {\n                        fileName: \"D:\\\\Frontend\\\\next\\\\pages\\\\users.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Frontend\\\\next\\\\pages\\\\users.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Frontend\\\\next\\\\pages\\\\users.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this);\n};\n_s(Users, \"s5X5MnhDiNgMoQXsn4MtkZFQpl0=\");\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7QUFBNEI7QUFDZTtBQUUzQyxJQUFNRyxLQUFLLEdBQUcsV0FBTTs7SUFDbEIsSUFBMEJELEdBR3hCLEdBSHdCQSwrQ0FBUSxDQUFDO1FBQ2pDO1lBQUVFLEVBQUUsRUFBRSxDQUFDO1lBQUVDLElBQUksRUFBRSxNQUFNO1NBQUU7UUFDdkI7WUFBRUQsRUFBRSxFQUFFLENBQUM7WUFBRUMsSUFBSSxFQUFFLE1BQU07U0FBRTtLQUN4QixDQUFDLEVBSEtDLEtBQUssR0FBY0osR0FHeEIsR0FIVSxFQUFFSyxRQUFRLEdBQUlMLEdBR3hCLEdBSG9CO0lBS3RCRCxnREFBUyxlQUFDLCtGQUFZO1lBQ2RPLFFBQVE7Ozs7b0JBQUc7O3dCQUFNQyxLQUFLLENBQUMsNENBQTRDLENBQUM7c0JBQUE7O29CQUFwRUQsUUFBUSxHQUFHLGFBQXlEOzs7Ozs7SUFDNUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQztJQUVOLHFCQUNFLDhEQUFDRSxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxZQUFVOzs7OztxQkFBSzswQkFDbkIsOERBQUNDLElBQUU7MEJBQ0FOLEtBQUssQ0FBQ08sR0FBRyxDQUFDLFNBQUNDLElBQUk7eUNBQ2QsOERBQUNDLElBQUU7a0NBQ0QsNEVBQUNmLGtEQUFJOzRCQUFDZ0IsSUFBSSxFQUFFLFFBQU8sQ0FBVSxPQUFSRixJQUFJLENBQUNWLEVBQUUsQ0FBRTtzQ0FDNUIsNEVBQUNhLEdBQUM7MENBQUVILElBQUksQ0FBQ1QsSUFBSTs7Ozs7cUNBQUs7Ozs7O2lDQUNiO3VCQUhBUyxJQUFJLENBQUNWLEVBQUU7Ozs7NkJBSVg7aUJBQ04sQ0FBQzs7Ozs7cUJBQ0M7Ozs7OzthQUNELENBQ1A7QUFDSCxDQUFDO0dBeEJLRCxLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUEwQlgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMuanM/MDA2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFVzZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBpZDogMSwgbmFtZTogJ0l2YW4nIH0sXHJcbiAgICB7IGlkOiAyLCBuYW1lOiAnQWxleCcgfSxcclxuICBdKVxyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5Vc2VycyBsaXN0PC9oMT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHt1c2Vycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgdXNlcnMvJHt1c2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgIDxhPnt1c2VyLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2Vyc1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXNlcnMiLCJpZCIsIm5hbWUiLCJ1c2VycyIsInNldFVzZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRpdiIsImgxIiwidWwiLCJtYXAiLCJ1c2VyIiwibGkiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users.js\n"));

/***/ })

});