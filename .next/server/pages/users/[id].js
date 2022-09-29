/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/users/[id]";
exports.ids = ["pages/users/[id]"];
exports.modules = {

/***/ "./styles/users.module.scss":
/*!**********************************!*\
  !*** ./styles/users.module.scss ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"user\": \"users_user__193RC\",\n\t\"user__name\": \"users_user__name__H3ZUR\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvdXNlcnMubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9zdHlsZXMvdXNlcnMubW9kdWxlLnNjc3M/NDI1NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ1c2VyXCI6IFwidXNlcnNfdXNlcl9fMTkzUkNcIixcblx0XCJ1c2VyX19uYW1lXCI6IFwidXNlcnNfdXNlcl9fbmFtZV9fSDNaVVJcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/users.module.scss\n");

/***/ }),

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_users_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/users.module.scss */ \"./styles/users.module.scss\");\n/* harmony import */ var _styles_users_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_users_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ user  })=>{\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log(user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_users_module_scss__WEBPACK_IMPORTED_MODULE_2___default().user),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_users_module_scss__WEBPACK_IMPORTED_MODULE_2___default().user__name),\n                    children: [\n                        \"User \",\n                        query.id\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Frontend\\\\next\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_users_module_scss__WEBPACK_IMPORTED_MODULE_2___default().user__name),\n                    children: user.name\n                }, void 0, false, {\n                    fileName: \"D:\\\\Frontend\\\\next\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Frontend\\\\next\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Frontend\\\\next\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n});\nasync function getServerSideProps({ params  }) {\n    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);\n    const user = await response.json();\n    return {\n        props: {\n            user\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDWTtBQUVuRCxpRUFBZSxDQUFDLEVBQUVFLElBQUksR0FBRSxHQUFLO0lBQzNCLE1BQU0sRUFBRUMsS0FBSyxHQUFFLEdBQUdILHNEQUFTLEVBQUU7SUFDN0JJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUM7SUFDakIscUJBQ0UsOERBQUNJLEtBQUc7UUFBQ0MsU0FBUyxFQUFFTix1RUFBVztrQkFDekIsNEVBQUNLLEtBQUc7OzhCQUNGLDhEQUFDRSxJQUFFO29CQUFDRCxTQUFTLEVBQUVOLDZFQUFpQjs7d0JBQUUsT0FBSzt3QkFBQ0UsS0FBSyxDQUFDTyxFQUFFOzs7Ozs7NkJBQU07OEJBQ3RELDhEQUFDSixLQUFHO29CQUFDQyxTQUFTLEVBQUVOLDZFQUFpQjs4QkFBR0MsSUFBSSxDQUFDUyxJQUFJOzs7Ozs2QkFBTzs7Ozs7O3FCQUNoRDs7Ozs7aUJBQ0YsQ0FDUDtBQUNILENBQUM7QUFFTSxlQUFlQyxrQkFBa0IsQ0FBQyxFQUFFQyxNQUFNLEdBQUUsRUFBRTtJQUNuRCxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUMxQixDQUFDLDJDQUEyQyxFQUFFRixNQUFNLENBQUNILEVBQUUsQ0FBQyxDQUFDLENBQzFEO0lBQ0QsTUFBTVIsSUFBSSxHQUFHLE1BQU1ZLFFBQVEsQ0FBQ0UsSUFBSSxFQUFFO0lBRWxDLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQUVmLElBQUk7U0FBRTtLQUNoQjtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vcGFnZXMvdXNlcnMvW2lkXS5qcz8xNzg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy91c2Vycy5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IHVzZXIgfSkgPT4ge1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpXHJcbiAgY29uc29sZS5sb2codXNlcilcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9fbmFtZX0+VXNlciB7cXVlcnkuaWR9PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfX25hbWV9Pnt1c2VyLm5hbWV9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke3BhcmFtcy5pZH1gXHJcbiAgKVxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHVzZXIgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJ1c2VyIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ1c2VyX19uYW1lIiwiaWQiLCJuYW1lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicGFyYW1zIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/[id].js"));
module.exports = __webpack_exports__;

})();