module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupItem.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ \"./components/ui/Card.js\");\n/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupItem.module.css */ \"./components/meetups/MeetupItem.module.css\");\n/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/anthonyhadwan/code/AnthonyHad/udemy-react/14-NextJs/next-project/components/meetups/MeetupItem.js\";\n\n\n\n\nfunction MeetupItem(props) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  function showDetailsHandler() {\n    router.push('/' + props.id);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.image,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: props.image,\n          alt: props.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: props.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n          children: props.address\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: showDetailsHandler,\n          children: \"Show Details\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5qcz85MGI5Il0sIm5hbWVzIjpbIk1lZXR1cEl0ZW0iLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3dEZXRhaWxzSGFuZGxlciIsInB1c2giLCJpZCIsImNsYXNzZXMiLCJpdGVtIiwiaW1hZ2UiLCJ0aXRsZSIsImNvbnRlbnQiLCJhZGRyZXNzIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUN6QixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLFdBQVNDLGtCQUFULEdBQThCO0FBQzVCRixVQUFNLENBQUNHLElBQVAsQ0FBWSxNQUFNSixLQUFLLENBQUNLLEVBQXhCO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSSxhQUFTLEVBQUVDLDZEQUFPLENBQUNDLElBQXZCO0FBQUEsMkJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVELDZEQUFPLENBQUNFLEtBQXhCO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUVSLEtBQUssQ0FBQ1EsS0FBaEI7QUFBdUIsYUFBRyxFQUFFUixLQUFLLENBQUNTO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUVILDZEQUFPLENBQUNJLE9BQXhCO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS1YsS0FBSyxDQUFDUztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLG9CQUFVVCxLQUFLLENBQUNXO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFRRTtBQUFLLGlCQUFTLEVBQUVMLDZEQUFPLENBQUNNLE9BQXhCO0FBQUEsK0JBQ0U7QUFBUSxpQkFBTyxFQUFFVCxrQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEOztBQUVjSix5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBJdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi91aS9DYXJkJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTWVldHVwSXRlbS5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gTWVldHVwSXRlbShwcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBmdW5jdGlvbiBzaG93RGV0YWlsc0hhbmRsZXIoKSB7XG4gICAgcm91dGVyLnB1c2goJy8nICsgcHJvcHMuaWQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfT5cbiAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IGFsdD17cHJvcHMudGl0bGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICA8aDM+e3Byb3BzLnRpdGxlfTwvaDM+XG4gICAgICAgICAgPGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93RGV0YWlsc0hhbmRsZXJ9PlNob3cgRGV0YWlsczwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L2xpPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBJdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupItem.js\n");

/***/ }),

/***/ "./components/meetups/MeetupItem.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupItem.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"item\": \"MeetupItem_item__3siMU\",\n\t\"image\": \"MeetupItem_image__13rAP\",\n\t\"content\": \"MeetupItem_content__3uEkT\",\n\t\"actions\": \"MeetupItem_actions__LvT9B\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5tb2R1bGUuY3NzPzFiMzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaXRlbVwiOiBcIk1lZXR1cEl0ZW1faXRlbV9fM3NpTVVcIixcblx0XCJpbWFnZVwiOiBcIk1lZXR1cEl0ZW1faW1hZ2VfXzEzckFQXCIsXG5cdFwiY29udGVudFwiOiBcIk1lZXR1cEl0ZW1fY29udGVudF9fM3VFa1RcIixcblx0XCJhY3Rpb25zXCI6IFwiTWVldHVwSXRlbV9hY3Rpb25zX19MdlQ5QlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupItem.module.css\n");

/***/ }),

/***/ "./components/meetups/MeetupList.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MeetupItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupItem */ \"./components/meetups/MeetupItem.js\");\n/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupList.module.css */ \"./components/meetups/MeetupList.module.css\");\n/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/anthonyhadwan/code/AnthonyHad/udemy-react/14-NextJs/next-project/components/meetups/MeetupList.js\";\n\n\n\nfunction MeetupList(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    className: _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,\n    children: props.meetups.map(meetup => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MeetupItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      id: meetup.id,\n      image: meetup.image,\n      title: meetup.title,\n      address: meetup.address\n    }, meetup.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5qcz82OTFiIl0sIm5hbWVzIjpbIk1lZXR1cExpc3QiLCJwcm9wcyIsImNsYXNzZXMiLCJsaXN0IiwibWVldHVwcyIsIm1hcCIsIm1lZXR1cCIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUN6QixzQkFDRTtBQUFJLGFBQVMsRUFBRUMsNkRBQU8sQ0FBQ0MsSUFBdkI7QUFBQSxjQUNHRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsR0FBZCxDQUFtQkMsTUFBRCxpQkFDakIscUVBQUMsbURBQUQ7QUFFRSxRQUFFLEVBQUVBLE1BQU0sQ0FBQ0MsRUFGYjtBQUdFLFdBQUssRUFBRUQsTUFBTSxDQUFDRSxLQUhoQjtBQUlFLFdBQUssRUFBRUYsTUFBTSxDQUFDRyxLQUpoQjtBQUtFLGFBQU8sRUFBRUgsTUFBTSxDQUFDSTtBQUxsQixPQUNPSixNQUFNLENBQUNDLEVBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0FBRWNQLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVldHVwSXRlbSBmcm9tICcuL01lZXR1cEl0ZW0nO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9NZWV0dXBMaXN0Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBNZWV0dXBMaXN0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgIHtwcm9wcy5tZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoXG4gICAgICAgIDxNZWV0dXBJdGVtXG4gICAgICAgICAga2V5PXttZWV0dXAuaWR9XG4gICAgICAgICAgaWQ9e21lZXR1cC5pZH1cbiAgICAgICAgICBpbWFnZT17bWVldHVwLmltYWdlfVxuICAgICAgICAgIHRpdGxlPXttZWV0dXAudGl0bGV9XG4gICAgICAgICAgYWRkcmVzcz17bWVldHVwLmFkZHJlc3N9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupList.js\n");

/***/ }),

/***/ "./components/meetups/MeetupList.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupList.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"list\": \"MeetupList_list__1iafn\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5tb2R1bGUuY3NzPzlhMzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlzdFwiOiBcIk1lZXR1cExpc3RfbGlzdF9fMWlhZm5cIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupList.module.css\n");

/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ \"./components/ui/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/anthonyhadwan/code/AnthonyHad/udemy-react/14-NextJs/next-project/components/ui/Card.js\";\n\n\nfunction Card(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQuanM/OTVlYSJdLCJuYW1lcyI6WyJDYXJkIiwicHJvcHMiLCJjbGFzc2VzIiwiY2FyZCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ25CLHNCQUFPO0FBQUssYUFBUyxFQUFFQyx1REFBTyxDQUFDQyxJQUF4QjtBQUFBLGNBQStCRixLQUFLLENBQUNHO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVjSixtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdWkvQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/Card.js\n");

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"Card_card__3KSLO\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcz8yNGQwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91aS9DYXJkLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX18zS1NMT1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/Card.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\nvar _jsxFileName = \"/Users/anthonyhadwan/code/AnthonyHad/udemy-react/14-NextJs/next-project/pages/index.js\";\n\n // const DUMMY_MEETUPS = [\n//   {\n//     id: 'm1',\n//     title: 'A First Meetup',\n//     image:\n//       'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',\n//     address: 'Rue de la Bourse, 75001, Paris',\n//     description: 'our first french BTC meetup',\n//   },\n//   {\n//     id: 'm2',\n//     title: 'A Second Meetup',\n//     image:\n//       'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',\n//     address: 'Rue de la Liberté, 75001, Paris',\n//     description: 'our second french BTC meetup',\n//   },\n// ];\n\nfunction HomePage(props) {\n  // const [loadedMeetups, setLoadedMeetups] = useState([]);\n  // useEffect(() => {\n  //   //send http request and fetch\n  //   setLoadedMeetups(DUMMY_MEETUPS);\n  // }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    meetups: props.meetups\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 10\n  }, this);\n} // export async function getServerSideProps(context) {\n//   // similar to Node JS we have access to req and response objects\n//   //can be a disadvantage if we want to wait for every request\n//   const req = context.req;\n//   const res = context.res;\n//   //code will always run on the server\n//   // we can run operation on credentials\n//   return {\n//     props: {\n//       meetups: DUMMY_MEETUPS,\n//     },\n//   };\n// }\n//only works in page component files\n//gets called before calling the component function\n//next Js would wait for the data to be loaded and with that we'd load data with the required data\n//can run code which is run on a server, it will never end up on the client side, it's executed during the\n//build process\n\n\nasync function getStaticProps() {\n  //fetch data from API, file system\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__[\"MongoClient\"].connect('mongodb+srv://antho:QUDf7pd7u6jM@cluster0.zqmklxs.mongodb.net/meetups?retryWrites=true&w=majority');\n  const db = client.db();\n  const meetupsCollection = db.collection('meetups');\n  const meetups = await meetupsCollection.find().toArray();\n  client.close(); //awlays need to return an object\n  //issue that we can have here is that if the data changes we would see outdated data unless we rebuild/redeploy\n  //good use case for personal blog for example unless we add the revalidate property unlocking Incremental Static Generation\n\n  return {\n    props: {\n      meetups: meetups.map(meetup => ({\n        title: meetup.title,\n        address: meetup.address,\n        image: meetup.image,\n        id: meetup._id.toString()\n      }))\n    },\n    revalidate: 1 // will regenerate the page every 10 seconds (but sometimes it's not enough we want to regenerate every request)\n\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIiwiZ2V0U3RhdGljUHJvcHMiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5IiwiY2xvc2UiLCJtYXAiLCJtZWV0dXAiLCJ0aXRsZSIsImFkZHJlc3MiLCJpbWFnZSIsImlkIiwiX2lkIiwidG9TdHJpbmciLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsc0JBQU8scUVBQUMsc0VBQUQ7QUFBWSxXQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sZUFBZUMsY0FBZixHQUFnQztBQUNyQztBQUNBLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQ25CLG1HQURtQixDQUFyQjtBQUdBLFFBQU1DLEVBQUUsR0FBR0gsTUFBTSxDQUFDRyxFQUFQLEVBQVg7QUFDQSxRQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsU0FBZCxDQUExQjtBQUVBLFFBQU1QLE9BQU8sR0FBRyxNQUFNTSxpQkFBaUIsQ0FBQ0UsSUFBbEIsR0FBeUJDLE9BQXpCLEVBQXRCO0FBRUFQLFFBQU0sQ0FBQ1EsS0FBUCxHQVZxQyxDQVlyQztBQUNBO0FBQ0E7O0FBQ0EsU0FBTztBQUNMWCxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFQSxPQUFPLENBQUNXLEdBQVIsQ0FBYUMsTUFBRCxLQUFhO0FBQ2hDQyxhQUFLLEVBQUVELE1BQU0sQ0FBQ0MsS0FEa0I7QUFFaENDLGVBQU8sRUFBRUYsTUFBTSxDQUFDRSxPQUZnQjtBQUdoQ0MsYUFBSyxFQUFFSCxNQUFNLENBQUNHLEtBSGtCO0FBSWhDQyxVQUFFLEVBQUVKLE1BQU0sQ0FBQ0ssR0FBUCxDQUFXQyxRQUFYO0FBSjRCLE9BQWIsQ0FBWjtBQURKLEtBREY7QUFTTEMsY0FBVSxFQUFFLENBVFAsQ0FTVTs7QUFUVixHQUFQO0FBV0Q7QUFFY3JCLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XG5cbi8vIGNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXG4vLyAgIHtcbi8vICAgICBpZDogJ20xJyxcbi8vICAgICB0aXRsZTogJ0EgRmlyc3QgTWVldHVwJyxcbi8vICAgICBpbWFnZTpcbi8vICAgICAgICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzQvNGIvTGFfVG91cl9FaWZmZWxfdnVlX2RlX2xhX1RvdXJfU2FpbnQtSmFjcXVlcyUyQ19QYXJpc19hbyVDMyVCQnRfMjAxNF8lMjgyJTI5LmpwZycsXG4vLyAgICAgYWRkcmVzczogJ1J1ZSBkZSBsYSBCb3Vyc2UsIDc1MDAxLCBQYXJpcycsXG4vLyAgICAgZGVzY3JpcHRpb246ICdvdXIgZmlyc3QgZnJlbmNoIEJUQyBtZWV0dXAnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdtMicsXG4vLyAgICAgdGl0bGU6ICdBIFNlY29uZCBNZWV0dXAnLFxuLy8gICAgIGltYWdlOlxuLy8gICAgICAgJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvNC80Yi9MYV9Ub3VyX0VpZmZlbF92dWVfZGVfbGFfVG91cl9TYWludC1KYWNxdWVzJTJDX1BhcmlzX2FvJUMzJUJCdF8yMDE0XyUyODIlMjkuanBnJyxcbi8vICAgICBhZGRyZXNzOiAnUnVlIGRlIGxhIExpYmVydMOpLCA3NTAwMSwgUGFyaXMnLFxuLy8gICAgIGRlc2NyaXB0aW9uOiAnb3VyIHNlY29uZCBmcmVuY2ggQlRDIG1lZXR1cCcsXG4vLyAgIH0sXG4vLyBdO1xuXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xuICAvLyBjb25zdCBbbG9hZGVkTWVldHVwcywgc2V0TG9hZGVkTWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgLy9zZW5kIGh0dHAgcmVxdWVzdCBhbmQgZmV0Y2hcbiAgLy8gICBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpO1xuICAvLyB9LCBbXSk7XG5cbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+O1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbi8vICAgLy8gc2ltaWxhciB0byBOb2RlIEpTIHdlIGhhdmUgYWNjZXNzIHRvIHJlcSBhbmQgcmVzcG9uc2Ugb2JqZWN0c1xuLy8gICAvL2NhbiBiZSBhIGRpc2FkdmFudGFnZSBpZiB3ZSB3YW50IHRvIHdhaXQgZm9yIGV2ZXJ5IHJlcXVlc3Rcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xuLy8gICAvL2NvZGUgd2lsbCBhbHdheXMgcnVuIG9uIHRoZSBzZXJ2ZXJcbi8vICAgLy8gd2UgY2FuIHJ1biBvcGVyYXRpb24gb24gY3JlZGVudGlhbHNcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG5cbi8vb25seSB3b3JrcyBpbiBwYWdlIGNvbXBvbmVudCBmaWxlc1xuLy9nZXRzIGNhbGxlZCBiZWZvcmUgY2FsbGluZyB0aGUgY29tcG9uZW50IGZ1bmN0aW9uXG4vL25leHQgSnMgd291bGQgd2FpdCBmb3IgdGhlIGRhdGEgdG8gYmUgbG9hZGVkIGFuZCB3aXRoIHRoYXQgd2UnZCBsb2FkIGRhdGEgd2l0aCB0aGUgcmVxdWlyZWQgZGF0YVxuLy9jYW4gcnVuIGNvZGUgd2hpY2ggaXMgcnVuIG9uIGEgc2VydmVyLCBpdCB3aWxsIG5ldmVyIGVuZCB1cCBvbiB0aGUgY2xpZW50IHNpZGUsIGl0J3MgZXhlY3V0ZWQgZHVyaW5nIHRoZVxuLy9idWlsZCBwcm9jZXNzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vZmV0Y2ggZGF0YSBmcm9tIEFQSSwgZmlsZSBzeXN0ZW1cbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICAnbW9uZ29kYitzcnY6Ly9hbnRobzpRVURmN3BkN3U2ak1AY2x1c3RlcjAuenFta2x4cy5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcbiAgKTtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG5cbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG5cbiAgLy9hd2xheXMgbmVlZCB0byByZXR1cm4gYW4gb2JqZWN0XG4gIC8vaXNzdWUgdGhhdCB3ZSBjYW4gaGF2ZSBoZXJlIGlzIHRoYXQgaWYgdGhlIGRhdGEgY2hhbmdlcyB3ZSB3b3VsZCBzZWUgb3V0ZGF0ZWQgZGF0YSB1bmxlc3Mgd2UgcmVidWlsZC9yZWRlcGxveVxuICAvL2dvb2QgdXNlIGNhc2UgZm9yIHBlcnNvbmFsIGJsb2cgZm9yIGV4YW1wbGUgdW5sZXNzIHdlIGFkZCB0aGUgcmV2YWxpZGF0ZSBwcm9wZXJ0eSB1bmxvY2tpbmcgSW5jcmVtZW50YWwgU3RhdGljIEdlbmVyYXRpb25cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcbiAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXG4gICAgICB9KSksXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLCAvLyB3aWxsIHJlZ2VuZXJhdGUgdGhlIHBhZ2UgZXZlcnkgMTAgc2Vjb25kcyAoYnV0IHNvbWV0aW1lcyBpdCdzIG5vdCBlbm91Z2ggd2Ugd2FudCB0byByZWdlbmVyYXRlIGV2ZXJ5IHJlcXVlc3QpXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });