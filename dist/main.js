/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/faq.js":
/*!*******************!*\
  !*** ./js/faq.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_faq_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/faq.css */ \"./css/faq.css\");\n/* harmony import */ var _css_aboutus_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/aboutus.css */ \"./css/aboutus.css\");\n\r\n\r\n\r\nfunction whenReady() {\r\n    let btns = document.getElementsByClassName('collapsible');\r\n    for (let i = 0; i < btns.length; i++) {\r\n        btns[i].addEventListener('click', () => {\r\n            let answer = document.getElementById(`faq${i + 1}_desc`)\r\n            answer.classList.toggle('hidden');\r\n            if (btns[i].getAttribute('aria-expanded')==='true') {btns[i].setAttribute('aria-expanded', \"false\")}\r\n            else btns[i].setAttribute('aria-expanded', \"true\")\r\n        });\r\n\r\n    }\r\n}\r\ndocument.addEventListener(\"DOMContentLoaded\", whenReady)\n\n//# sourceURL=webpack://sf-drive_homework/./js/faq.js?");

/***/ }),

/***/ "./css/aboutus.css":
/*!*************************!*\
  !*** ./css/aboutus.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sf-drive_homework/./css/aboutus.css?");

/***/ }),

/***/ "./css/faq.css":
/*!*********************!*\
  !*** ./css/faq.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sf-drive_homework/./css/faq.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/faq.js");
/******/ 	
/******/ })()
;