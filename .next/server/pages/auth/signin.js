"use strict";
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
exports.id = "pages/auth/signin";
exports.ids = ["pages/auth/signin"];
exports.modules = {

/***/ "./pages/auth/signin.tsx":
/*!*******************************!*\
  !*** ./pages/auth/signin.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//browser\nfunction signIn({ providers  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col bg-gradient-to-b to-green-400 from-purple-500 via-white items-center justify-center min-h-screen py-2 -mt-5 px-14 text-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" bg-gradient-to-bl to-green-200 from-purple-300 via-pink-200 rounded-lg \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"p-5 font-bold italic text-3xl\",\n                        children: \"TREASURE HUNT - THE GAME\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\t-hunt\\\\pages\\\\auth\\\\signin.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 12\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-xs italic \",\n                        children: 'This is \" TREASURE HUNT - THE GAME \" website  '\n                    }, void 0, false, {\n                        fileName: \"D:\\\\t-hunt\\\\pages\\\\auth\\\\signin.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-30 mb-30\",\n                        children: Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"p-3 bg-blue-700 mb-24 rounded-lg mt-14 text-white\",\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id, {\n                                            callbackUrl: \"/\"\n                                        })\n                                    ,\n                                    children: [\n                                        \"Sign in with \",\n                                        provider.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\t-hunt\\\\pages\\\\auth\\\\signin.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 16\n                                }, this)\n                            }, provider.name, false, {\n                                fileName: \"D:\\\\t-hunt\\\\pages\\\\auth\\\\signin.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 12\n                            }, this)\n                        )\n                    }, void 0, false, {\n                        fileName: \"D:\\\\t-hunt\\\\pages\\\\auth\\\\signin.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 8\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\t-hunt\\\\pages\\\\auth\\\\signin.tsx\",\n                lineNumber: 10,\n                columnNumber: 12\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\t-hunt\\\\pages\\\\auth\\\\signin.tsx\",\n            lineNumber: 9,\n            columnNumber: 8\n        }, this)\n    }, void 0, false);\n}\n// does server side rendering \nasync function getServerSideProps() {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)();\n    return {\n        props: {\n            providers\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signIn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ25pbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUEwRTtBQUNoRDtBQUUxQixTQUFTO0FBQ1QsU0FBU0MsTUFBTSxDQUFDLEVBQUNHLFNBQVMsR0FBQyxFQUFFO0lBQzNCLHFCQUNGO2tCQUVPLDRFQUFDQyxLQUFHO1lBQUNDLFNBQVMsRUFBQyw2SUFBNkk7c0JBQ3hKLDRFQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMEVBQTBFOztrQ0FDekYsOERBQUNDLElBQUU7d0JBQUNELFNBQVMsRUFBQywrQkFBK0I7a0NBQUMsMEJBQXdCOzs7Ozs0QkFBSztrQ0FHL0UsOERBQUNFLEdBQUM7d0JBQUNGLFNBQVMsRUFBQyxpQkFBaUI7a0NBQUUsZ0RBQ2tCOzs7Ozs0QkFBSTtrQ0FXdEQsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxhQUFhO2tDQUN6QkcsTUFBTSxDQUFDQyxNQUFNLENBQUNOLFNBQVMsQ0FBQyxDQUFDTyxHQUFHLENBQUMsQ0FBQ0MsUUFBUSxpQkFDckMsOERBQUNQLEtBQUc7MENBQ0EsNEVBQUNRLFFBQU07b0NBQUNQLFNBQVMsRUFBQyxtREFBbUQ7b0NBQ3BFUSxPQUFPLEVBQUUsSUFBTVosdURBQWlCLENBQUNVLFFBQVEsQ0FBQ0csRUFBRSxFQUFDOzRDQUFFQyxXQUFXLEVBQUUsR0FBRzt5Q0FBRSxDQUFDO29DQUFBOzt3Q0FDakUsZUFDZTt3Q0FBQ0osUUFBUSxDQUFDSyxJQUFJOzs7Ozs7d0NBQ3RCOytCQUxITCxRQUFRLENBQUNLLElBQUk7Ozs7b0NBT2pCO3dCQUNQLENBQUM7Ozs7OzRCQUNFOzs7Ozs7b0JBQ0E7Ozs7O2dCQUVBO3FCQUVILENBQUk7Q0FDYjtBQUdELDhCQUE4QjtBQUN2QixlQUFlQyxrQkFBa0IsR0FBRTtJQUN0QyxNQUFNZCxTQUFTLEdBQUcsTUFBTUosNkRBQVksRUFBRTtJQUV0QyxPQUFPO1FBQ0htQixLQUFLLEVBQUU7WUFDSGYsU0FBUztTQUNaO0tBQ0o7Q0FDSjtBQUNELGlFQUFlSCxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL3NpZ25pbi50c3g/ZTc2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldFByb3ZpZGVycyAsc2lnbkluIGFzIHNpZ25JbnRvUHJvdmlkZXJzfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vL2Jyb3dzZXJcclxuZnVuY3Rpb24gc2lnbkluKHtwcm92aWRlcnN9KSB7XHJcbiAgcmV0dXJuIChcclxuPD5cclxuICAgICAgIFxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJnLWdyYWRpZW50LXRvLWIgdG8tZ3JlZW4tNDAwIGZyb20tcHVycGxlLTUwMCB2aWEtd2hpdGUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBweS0yIC1tdC01IHB4LTE0IHRleHQtY2VudGVyXCIgPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJnLWdyYWRpZW50LXRvLWJsIHRvLWdyZWVuLTIwMCBmcm9tLXB1cnBsZS0zMDAgdmlhLXBpbmstMjAwIHJvdW5kZWQtbGcgXCI+XHJcbiAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInAtNSBmb250LWJvbGQgaXRhbGljIHRleHQtM3hsXCI+VFJFQVNVUkUgSFVOVCAtIFRIRSBHQU1FPC9oMT5cclxuICAgICAgICB7LyogICA8aW1nIGNsYXNzTmFtZT1cInctNjBcIiBcclxuICAgICAgICAgICBzcmM9XCJodHRwOi8vMi5icC5ibG9nc3BvdC5jb20vLTRwQmFFOXNEcWpnL1VZTnpsVF90TDlJL0FBQUFBQUFBWmNrL1BoenFQSngzbGU4L3MxNjAwL0luc3RyYWdyYW0rbG9nby5wbmdcIiBhbHQ9XCJcIiAvPiAgKi99XHJcbiAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXhzIGl0YWxpYyBcIiA+XHJcbiAgICAgICAgICAgVGhpcyBpcyBcIiBUUkVBU1VSRSBIVU5UIC0gVEhFIEdBTUUgXCIgd2Vic2l0ZSAgPC9wPlxyXG4gICAgIHsvKlxyXG4gICAgICAgICAgIDxkaXYgaWQ9XCJmaWVsZHNcIiA+XHJcbiAgICAgICA8aW5wdXQgcmVmPXtlbWFpbFJlZn0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgY2xhc3NOYW1lPVwiZmxleCBtdC01IG1iLTIgcm91bmRlZC1tZFwiLz5cclxuICAgICAgIDxpbnB1dCByZWY9e3Bhc3N3b3JkUmVmfSB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZmxleCBtdC0yIHJvdW5kZWQtbWRcIiAvPlxyXG4gICAgIDwvZGl2PlxyXG4gXHJcbiAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwicC0xIG10LTQgYmctYmx1ZS02MDAgcm91bmRlZC1sZyB0ZXh0LXdoaXRlXCIgb25DbGljaz17aGFuZGxlU2lnbklufT5TaWduIEluPC9idXR0b24+XHJcbiAgICAgPGgyIGNsYXNzTmFtZT1cIiBtdC01IG1iLTVcIj5PUjwvaDI+XHJcbiAgKi99XHJcbiAgICAgIHsvKkxvZ2luIHdpdGggR29vZ2xlICovfVxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zMCBtYi0zMFwiPlxyXG4gICAgICAgICB7T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpPT4gKFxyXG4gICAgICAgICAgIDxkaXYga2V5PXtwcm92aWRlci5uYW1lfT5cclxuICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTMgYmctYmx1ZS03MDAgbWItMjQgcm91bmRlZC1sZyBtdC0xNCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25JbnRvUHJvdmlkZXJzKHByb3ZpZGVyLmlkLHsgY2FsbGJhY2tVcmw6IFwiL1wiIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgU2lnbiBpbiB3aXRoIHtwcm92aWRlci5uYW1lfVxyXG4gICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuIFxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICApKX0gICBcclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICA8Lz4gICk7XHJcbn1cclxuXHJcbiBcclxuLy8gZG9lcyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKXtcclxuICAgIGNvbnN0IHByb3ZpZGVycyA9IGF3YWl0IGdldFByb3ZpZGVycygpO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBzaWduSW47Il0sIm5hbWVzIjpbImdldFByb3ZpZGVycyIsInNpZ25JbiIsInNpZ25JbnRvUHJvdmlkZXJzIiwiUmVhY3QiLCJwcm92aWRlcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsImNhbGxiYWNrVXJsIiwibmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signin.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signin.tsx"));
module.exports = __webpack_exports__;

})();