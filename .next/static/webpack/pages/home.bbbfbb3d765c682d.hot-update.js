"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./components/layouts/carousel.jsx":
/*!*****************************************!*\
  !*** ./components/layouts/carousel.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomeCarouselComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__);\n\n\n// Import Swiper React components\n\n\n// Import Swiper styles\n\n\n\n\n// import required modules\n\nfunction HomeCarouselComponent() {\n    const carouselImagesContainer = [\n        {\n            url: \"./assets/images/carousel/b1.jpg\",\n            title: \"Vision and Mission \",\n            description: \" Kamuzu Academy is a selective, co-educational boarding school for pupils in the 11 to 18 age range. It occupies a large, purpose-built campus close to the village of Mtunthama, 150 km from Lilongwe City. \"\n        },\n        {\n            url: \"./assets/images/carousel/b2.jpg\",\n            title: \"Our Curriculum\",\n            description: \"The Academy offers courses leading to the IGCSE examinations of the University of Cambridge and other UK examining bodies at the end of Form 5, and to GCE AS and A levels\"\n        },\n        {\n            url: \"./assets/images/carousel/b3.jpg\",\n            title: \"Team of Excellency\",\n            description: \" ALL WORK AND NO PLAY MAKES JACK A DULL BOY, Kamuzu Academy encourage creativity.\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white relative sm:pb-32 py-2 lg:py-2\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                spaceBetween: 30,\n                centeredSlides: true,\n                speed: 1200,\n                autoplay: {\n                    delay: 5000,\n                    disableOnInteraction: false\n                },\n                pagination: {\n                    clickable: true\n                },\n                loop: true,\n                navigation: false,\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay,\n                    swiper__WEBPACK_IMPORTED_MODULE_3__.EffectCoverflow,\n                    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,\n                    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation\n                ],\n                effect: \"coverflow\",\n                className: \"relative bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: carouselImagesContainer.map((carousel, key)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 opacity-90\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: \"h-full w-full object-cover object-center\",\n                                            src: carousel.url,\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/hisp-malawi/Documents/hisp/projects/kamuzu/components/layouts/carousel.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 41\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute inset-0 bg-primary opacity-20 mix-blend-multiply\",\n                                            \"aria-hidden\": \"true\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/hisp-malawi/Documents/hisp/projects/kamuzu/components/layouts/carousel.jsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 41\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/hisp-malawi/Documents/hisp/projects/kamuzu/components/layouts/carousel.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 37\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative mx-auto max-w-7xl py-32 px-6 sm:py-56 lg:px-8 text-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-2xl font-bold tracking-tight text-white sm:text-2xl lg:text-6xl shadow-sm\",\n                                            children: carousel.title\n                                        }, void 0, false, {\n                                            fileName: \"/home/hisp-malawi/Documents/hisp/projects/kamuzu/components/layouts/carousel.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 41\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm tracking-tight text-white sm:text-xl lg:text-2xl\",\n                                            children: carousel.description\n                                        }, void 0, false, {\n                                            fileName: \"/home/hisp-malawi/Documents/hisp/projects/kamuzu/components/layouts/carousel.jsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 41\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/hisp-malawi/Documents/hisp/projects/kamuzu/components/layouts/carousel.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 37\n                                }, this)\n                            ]\n                        }, key, true, {\n                            fileName: \"/home/hisp-malawi/Documents/hisp/projects/kamuzu/components/layouts/carousel.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 40\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/hisp-malawi/Documents/hisp/projects/kamuzu/components/layouts/carousel.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/hisp-malawi/Documents/hisp/projects/kamuzu/components/layouts/carousel.jsx\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/hisp-malawi/Documents/hisp/projects/kamuzu/components/layouts/carousel.jsx\",\n            lineNumber: 37,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = HomeCarouselComponent;\nvar _c;\n$RefreshReg$(_c, \"HomeCarouselComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvY2Fyb3VzZWwuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzFCLGlDQUFpQztBQUNrQjtBQUM4QjtBQUNqRix1QkFBdUI7QUFDSDtBQUNXO0FBQ0E7QUFDUTtBQUV2QywwQkFBMEI7QUFDZ0M7QUFFM0MsU0FBU1csd0JBQXdCO0lBRTVDLE1BQU1DLDBCQUEwQjtRQUU1QjtZQUNJQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsYUFBYTtRQUNqQjtRQUNBO1lBQ0lGLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxhQUFhO1FBQ2pCO1FBRUE7WUFDSUYsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLGFBQWE7UUFDakI7S0FDSDtJQUNELHFCQUNJO2tCQUNJLDRFQUFDQztZQUFJQyxXQUFVO3NCQUVYLDRFQUFDaEIsZ0RBQU1BO2dCQUNIaUIsY0FBYztnQkFDZEMsZ0JBQWdCLElBQUk7Z0JBQ3BCQyxPQUFPO2dCQUNQQyxVQUFVO29CQUNOQyxPQUFPO29CQUNQQyxzQkFBc0IsS0FBSztnQkFDL0I7Z0JBQ0FDLFlBQVk7b0JBQ1JDLFdBQVcsSUFBSTtnQkFDbkI7Z0JBQ0FDLE1BQU0sSUFBSTtnQkFDVkMsWUFBWSxLQUFLO2dCQUNqQkMsU0FBUztvQkFBQ3BCLDRDQUFRQTtvQkFBRUYsbURBQWVBO29CQUFFRyw4Q0FBVUE7b0JBQUVDLDhDQUFVQTtpQkFBQztnQkFDNURtQixRQUFPO2dCQUNQWixXQUFVOzBCQUVWLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFFUEwsd0JBQXdCa0IsR0FBRyxDQUFDLENBQUNDLFVBQVVDLE1BQVE7d0JBRTNDLHFCQUFPLDhEQUFDOUIscURBQVdBOzs4Q0FHZiw4REFBQ2M7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDZ0I7NENBQ0doQixXQUFVOzRDQUNWaUIsS0FBS0gsU0FBU2xCLEdBQUc7NENBQ2pCc0IsS0FBSTs7Ozs7O3NEQUVSLDhEQUFDbkI7NENBQUlDLFdBQVU7NENBQTREbUIsZUFBWTs7Ozs7Ozs7Ozs7OzhDQUUzRiw4REFBQ3BCO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ29COzRDQUFHcEIsV0FBVTtzREFBa0ZjLFNBQVNqQixLQUFLOzs7Ozs7c0RBQzlHLDhEQUFDd0I7NENBQUVyQixXQUFVO3NEQUE0RGMsU0FBU2hCLFdBQVc7Ozs7Ozs7Ozs7Ozs7MkJBYjVFaUI7Ozs7O29CQWtCN0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTVCLENBQUM7S0F4RXVCckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL2Nhcm91c2VsLmpzeD9kY2E2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIEltcG9ydCBTd2lwZXIgUmVhY3QgY29tcG9uZW50c1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcbmltcG9ydCB7IEVmZmVjdEZhZGUsIEVmZmVjdENyZWF0aXZlLCBFZmZlY3RDYXJkcywgRWZmZWN0Q292ZXJmbG93IH0gZnJvbSAnc3dpcGVyJ1xuLy8gSW1wb3J0IFN3aXBlciBzdHlsZXNcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLy8gaW1wb3J0IHJlcXVpcmVkIG1vZHVsZXNcbmltcG9ydCB7IEF1dG9wbGF5LCBQYWdpbmF0aW9uLCBOYXZpZ2F0aW9uIH0gZnJvbSBcInN3aXBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lQ2Fyb3VzZWxDb21wb25lbnQoKSB7XG5cbiAgICBjb25zdCBjYXJvdXNlbEltYWdlc0NvbnRhaW5lciA9IFtcblxuICAgICAgICB7XG4gICAgICAgICAgICB1cmw6IFwiLi9hc3NldHMvaW1hZ2VzL2Nhcm91c2VsL2IxLmpwZ1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiVmlzaW9uIGFuZCBNaXNzaW9uIFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiIEthbXV6dSBBY2FkZW15IGlzIGEgc2VsZWN0aXZlLCBjby1lZHVjYXRpb25hbCBib2FyZGluZyBzY2hvb2wgZm9yIHB1cGlscyBpbiB0aGUgMTEgdG8gMTggYWdlIHJhbmdlLiBJdCBvY2N1cGllcyBhIGxhcmdlLCBwdXJwb3NlLWJ1aWx0IGNhbXB1cyBjbG9zZSB0byB0aGUgdmlsbGFnZSBvZiBNdHVudGhhbWEsIDE1MCBrbSBmcm9tIExpbG9uZ3dlIENpdHkuIFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybDogXCIuL2Fzc2V0cy9pbWFnZXMvY2Fyb3VzZWwvYjIuanBnXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJPdXIgQ3VycmljdWx1bVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIEFjYWRlbXkgb2ZmZXJzIGNvdXJzZXMgbGVhZGluZyB0byB0aGUgSUdDU0UgZXhhbWluYXRpb25zIG9mIHRoZSBVbml2ZXJzaXR5IG9mIENhbWJyaWRnZSBhbmQgb3RoZXIgVUsgZXhhbWluaW5nIGJvZGllcyBhdCB0aGUgZW5kIG9mIEZvcm0gNSwgYW5kIHRvIEdDRSBBUyBhbmQgQSBsZXZlbHNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybDogXCIuL2Fzc2V0cy9pbWFnZXMvY2Fyb3VzZWwvYjMuanBnXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJUZWFtIG9mIEV4Y2VsbGVuY3lcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIiBBTEwgV09SSyBBTkQgTk8gUExBWSBNQUtFUyBKQUNLIEEgRFVMTCBCT1ksIEthbXV6dSBBY2FkZW15IGVuY291cmFnZSBjcmVhdGl2aXR5LlwiXG4gICAgICAgIH0sXG4gICAgXVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJlbGF0aXZlIHNtOnBiLTMyIHB5LTIgbGc6cHktMlwiPlxuXG4gICAgICAgICAgICAgICAgPFN3aXBlclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW49ezMwfVxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJlZFNsaWRlcz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgc3BlZWQ9ezEyMDB9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBsb29wPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlcz17W0F1dG9wbGF5LCBFZmZlY3RDb3ZlcmZsb3csIFBhZ2luYXRpb24sIE5hdmlnYXRpb25dfVxuICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJjb3ZlcmZsb3dcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcm91c2VsSW1hZ2VzQ29udGFpbmVyLm1hcCgoY2Fyb3VzZWwsIGtleSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8U3dpcGVyU2xpZGUga2V5PXtrZXl9PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LTkwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjYXJvdXNlbC51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctcHJpbWFyeSBvcGFjaXR5LTIwIG1peC1ibGVuZC1tdWx0aXBseVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgIG14LWF1dG8gbWF4LXctN3hsIHB5LTMyIHB4LTYgc206cHktNTYgbGc6cHgtOCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC13aGl0ZSBzbTp0ZXh0LTJ4bCBsZzp0ZXh0LTZ4bCBzaGFkb3ctc21cIj57Y2Fyb3VzZWwudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRyYWNraW5nLXRpZ2h0IHRleHQtd2hpdGUgc206dGV4dC14bCBsZzp0ZXh0LTJ4bFwiPntjYXJvdXNlbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvU3dpcGVyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJFZmZlY3RGYWRlIiwiRWZmZWN0Q3JlYXRpdmUiLCJFZmZlY3RDYXJkcyIsIkVmZmVjdENvdmVyZmxvdyIsIm1vdGlvbiIsIkF1dG9wbGF5IiwiUGFnaW5hdGlvbiIsIk5hdmlnYXRpb24iLCJIb21lQ2Fyb3VzZWxDb21wb25lbnQiLCJjYXJvdXNlbEltYWdlc0NvbnRhaW5lciIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFjZUJldHdlZW4iLCJjZW50ZXJlZFNsaWRlcyIsInNwZWVkIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsImxvb3AiLCJuYXZpZ2F0aW9uIiwibW9kdWxlcyIsImVmZmVjdCIsIm1hcCIsImNhcm91c2VsIiwia2V5IiwiaW1nIiwic3JjIiwiYWx0IiwiYXJpYS1oaWRkZW4iLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layouts/carousel.jsx\n"));

/***/ })

});