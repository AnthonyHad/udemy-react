webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\nvar _jsxFileName = \"/Users/anthonyhadwan/code/AnthonyHad/udemy-react/14-NextJs/next-project/pages/index.js\";\n // const DUMMY_MEETUPS = [\n//   {\n//     id: 'm1',\n//     title: 'A First Meetup',\n//     image:\n//       'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',\n//     address: 'Rue de la Bourse, 75001, Paris',\n//     description: 'our first french BTC meetup',\n//   },\n//   {\n//     id: 'm2',\n//     title: 'A Second Meetup',\n//     image:\n//       'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',\n//     address: 'Rue de la Liberté, 75001, Paris',\n//     description: 'our second french BTC meetup',\n//   },\n// ];\n\nfunction HomePage(props) {\n  // const [loadedMeetups, setLoadedMeetups] = useState([]);\n  // useEffect(() => {\n  //   //send http request and fetch\n  //   setLoadedMeetups(DUMMY_MEETUPS);\n  // }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    meetups: props.meetups\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 10\n  }, this);\n} // export async function getServerSideProps(context) {\n//   // similar to Node JS we have access to req and response objects\n//   //can be a disadvantage if we want to wait for every request\n//   const req = context.req;\n//   const res = context.res;\n//   //code will always run on the server\n//   // we can run operation on credentials\n//   return {\n//     props: {\n//       meetups: DUMMY_MEETUPS,\n//     },\n//   };\n// }\n//only works in page component files\n//gets called before calling the component function\n//next Js would wait for the data to be loaded and with that we'd load data with the required data\n//can run code which is run on a server, it will never end up on the client side, it's executed during the\n//build process\n\n\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsc0JBQU8scUVBQUMsc0VBQUQ7QUFBWSxXQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0tBN0JTRixROztBQTBETUEsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcblxuLy8gY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcbi8vICAge1xuLy8gICAgIGlkOiAnbTEnLFxuLy8gICAgIHRpdGxlOiAnQSBGaXJzdCBNZWV0dXAnLFxuLy8gICAgIGltYWdlOlxuLy8gICAgICAgJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvNC80Yi9MYV9Ub3VyX0VpZmZlbF92dWVfZGVfbGFfVG91cl9TYWludC1KYWNxdWVzJTJDX1BhcmlzX2FvJUMzJUJCdF8yMDE0XyUyODIlMjkuanBnJyxcbi8vICAgICBhZGRyZXNzOiAnUnVlIGRlIGxhIEJvdXJzZSwgNzUwMDEsIFBhcmlzJyxcbi8vICAgICBkZXNjcmlwdGlvbjogJ291ciBmaXJzdCBmcmVuY2ggQlRDIG1lZXR1cCcsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ20yJyxcbi8vICAgICB0aXRsZTogJ0EgU2Vjb25kIE1lZXR1cCcsXG4vLyAgICAgaW1hZ2U6XG4vLyAgICAgICAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy80LzRiL0xhX1RvdXJfRWlmZmVsX3Z1ZV9kZV9sYV9Ub3VyX1NhaW50LUphY3F1ZXMlMkNfUGFyaXNfYW8lQzMlQkJ0XzIwMTRfJTI4MiUyOS5qcGcnLFxuLy8gICAgIGFkZHJlc3M6ICdSdWUgZGUgbGEgTGliZXJ0w6ksIDc1MDAxLCBQYXJpcycsXG4vLyAgICAgZGVzY3JpcHRpb246ICdvdXIgc2Vjb25kIGZyZW5jaCBCVEMgbWVldHVwJyxcbi8vICAgfSxcbi8vIF07XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XG4gIC8vIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAvL3NlbmQgaHR0cCByZXF1ZXN0IGFuZCBmZXRjaFxuICAvLyAgIHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUyk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz47XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuLy8gICAvLyBzaW1pbGFyIHRvIE5vZGUgSlMgd2UgaGF2ZSBhY2Nlc3MgdG8gcmVxIGFuZCByZXNwb25zZSBvYmplY3RzXG4vLyAgIC8vY2FuIGJlIGEgZGlzYWR2YW50YWdlIGlmIHdlIHdhbnQgdG8gd2FpdCBmb3IgZXZlcnkgcmVxdWVzdFxuLy8gICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcbi8vICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XG4vLyAgIC8vY29kZSB3aWxsIGFsd2F5cyBydW4gb24gdGhlIHNlcnZlclxuLy8gICAvLyB3ZSBjYW4gcnVuIG9wZXJhdGlvbiBvbiBjcmVkZW50aWFsc1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH1cblxuLy9vbmx5IHdvcmtzIGluIHBhZ2UgY29tcG9uZW50IGZpbGVzXG4vL2dldHMgY2FsbGVkIGJlZm9yZSBjYWxsaW5nIHRoZSBjb21wb25lbnQgZnVuY3Rpb25cbi8vbmV4dCBKcyB3b3VsZCB3YWl0IGZvciB0aGUgZGF0YSB0byBiZSBsb2FkZWQgYW5kIHdpdGggdGhhdCB3ZSdkIGxvYWQgZGF0YSB3aXRoIHRoZSByZXF1aXJlZCBkYXRhXG4vL2NhbiBydW4gY29kZSB3aGljaCBpcyBydW4gb24gYSBzZXJ2ZXIsIGl0IHdpbGwgbmV2ZXIgZW5kIHVwIG9uIHRoZSBjbGllbnQgc2lkZSwgaXQncyBleGVjdXRlZCBkdXJpbmcgdGhlXG4vL2J1aWxkIHByb2Nlc3NcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy9mZXRjaCBkYXRhIGZyb20gQVBJLCBmaWxlIHN5c3RlbVxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICdtb25nb2RiK3NydjovL2FudGhvOlFVRGY3cGQ3dTZqTUBjbHVzdGVyMC56cW1rbHhzLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xuICApO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcblxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcblxuICBjbGllbnQuY2xvc2UoKTtcblxuICAvL2F3bGF5cyBuZWVkIHRvIHJldHVybiBhbiBvYmplY3RcbiAgLy9pc3N1ZSB0aGF0IHdlIGNhbiBoYXZlIGhlcmUgaXMgdGhhdCBpZiB0aGUgZGF0YSBjaGFuZ2VzIHdlIHdvdWxkIHNlZSBvdXRkYXRlZCBkYXRhIHVubGVzcyB3ZSByZWJ1aWxkL3JlZGVwbG95XG4gIC8vZ29vZCB1c2UgY2FzZSBmb3IgcGVyc29uYWwgYmxvZyBmb3IgZXhhbXBsZSB1bmxlc3Mgd2UgYWRkIHRoZSByZXZhbGlkYXRlIHByb3BlcnR5IHVubG9ja2luZyBJbmNyZW1lbnRhbCBTdGF0aWMgR2VuZXJhdGlvblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xuICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxuICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcbiAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcbiAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcbiAgICAgIH0pKSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsIC8vIHdpbGwgcmVnZW5lcmF0ZSB0aGUgcGFnZSBldmVyeSAxMCBzZWNvbmRzIChidXQgc29tZXRpbWVzIGl0J3Mgbm90IGVub3VnaCB3ZSB3YW50IHRvIHJlZ2VuZXJhdGUgZXZlcnkgcmVxdWVzdClcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})