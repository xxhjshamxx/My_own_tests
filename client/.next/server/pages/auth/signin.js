/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/auth/signin";
exports.ids = ["pages/auth/signin"];
exports.modules = {

/***/ "./components/SigninForm.js":
/*!**********************************!*\
  !*** ./components/SigninForm.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/app/components/SigninForm.js\";\n\n\n\n\nconst SigninForm = () => {\n  const {\n    0: email,\n    1: setEmail\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: password,\n    1: setPassword\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: errors,\n    1: setErrors\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    email: null,\n    password: null\n  });\n\n  const onSubmit = async event => {\n    event.preventDefault();\n\n    try {\n      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().post('/api/users/signin', {\n        email,\n        password\n      });\n      next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/');\n    } catch (err) {\n      const errors = {\n        other: []\n      };\n\n      for (let error of err.response.data.errors) {\n        if (error.field) {\n          errors[error.field] = error.message;\n        } else {\n          errors.other.push(error.message);\n        }\n      }\n\n      setErrors(errors);\n    }\n  };\n\n  const style = {\n    position: 'absolute',\n    left: '50%',\n    top: '50%',\n    transform: 'translate(-50%, -50%)'\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"col-4\",\n    style: style,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      onSubmit: onSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form-group\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Email:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          value: email,\n          onChange: e => setEmail(e.target.value),\n          className: \"form-control\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, undefined), errors.email]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form-group\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Password:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          value: password,\n          onChange: e => setPassword(e.target.value),\n          type: \"password\",\n          className: \"form-control\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, undefined), errors.password]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, undefined), errors.other, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"btn btn-primary\",\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SigninForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL1NpZ25pbkZvcm0uanM/MmE0OSJdLCJuYW1lcyI6WyJTaWduaW5Gb3JtIiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9ycyIsInNldEVycm9ycyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiYXhpb3MiLCJSb3V0ZXIiLCJlcnIiLCJvdGhlciIsImVycm9yIiwiZGF0YSIsImZpZWxkIiwibWVzc2FnZSIsInB1c2giLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInRyYW5zZm9ybSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLE1BQU07QUFDdkIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDRyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkosK0NBQVEsQ0FBQztBQUFDRixTQUFLLEVBQUMsSUFBUDtBQUFhRyxZQUFRLEVBQUM7QUFBdEIsR0FBRCxDQUFwQzs7QUFFQSxRQUFNSSxRQUFRLEdBQUcsTUFBT0MsS0FBUCxJQUFpQjtBQUNoQ0EsU0FBSyxDQUFDQyxjQUFOOztBQUNBLFFBQUk7QUFDRixZQUFNQyxRQUFRLEdBQUcsTUFBTUMsaURBQUEsQ0FBVyxtQkFBWCxFQUErQjtBQUFDWCxhQUFEO0FBQVFHO0FBQVIsT0FBL0IsQ0FBdkI7QUFDQVMsNkRBQUEsQ0FBWSxHQUFaO0FBQ0QsS0FIRCxDQUlBLE9BQU9DLEdBQVAsRUFBWTtBQUNWLFlBQU1SLE1BQU0sR0FBRztBQUFDUyxhQUFLLEVBQUM7QUFBUCxPQUFmOztBQUNBLFdBQUssSUFBSUMsS0FBVCxJQUFrQkYsR0FBRyxDQUFDSCxRQUFKLENBQWFNLElBQWIsQ0FBa0JYLE1BQXBDLEVBQTRDO0FBQzFDLFlBQUlVLEtBQUssQ0FBQ0UsS0FBVixFQUFpQjtBQUNmWixnQkFBTSxDQUFDVSxLQUFLLENBQUNFLEtBQVAsQ0FBTixHQUFzQkYsS0FBSyxDQUFDRyxPQUE1QjtBQUNELFNBRkQsTUFHSztBQUNIYixnQkFBTSxDQUFDUyxLQUFQLENBQWFLLElBQWIsQ0FBa0JKLEtBQUssQ0FBQ0csT0FBeEI7QUFDRDtBQUNGOztBQUNEWixlQUFTLENBQUNELE1BQUQsQ0FBVDtBQUNEO0FBQ0YsR0FsQkQ7O0FBb0JBLFFBQU1lLEtBQUssR0FBQztBQUNWQyxZQUFRLEVBQUUsVUFEQTtBQUVWQyxRQUFJLEVBQUUsS0FGSTtBQUdWQyxPQUFHLEVBQUUsS0FISztBQUlWQyxhQUFTLEVBQUU7QUFKRCxHQUFaO0FBT0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUF1QixTQUFLLEVBQUVKLEtBQTlCO0FBQUEsMkJBQ0U7QUFBTSxjQUFRLEVBQUViLFFBQWhCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBTyxlQUFLLEVBQUVQLEtBQWQ7QUFBcUIsa0JBQVEsRUFBRXlCLENBQUMsSUFBSXhCLFFBQVEsQ0FBQ3dCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQTVDO0FBQThELG1CQUFTLEVBQUM7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixFQUdHdEIsTUFBTSxDQUFDTCxLQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQU9FO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFPLGVBQUssRUFBRUcsUUFBZDtBQUF3QixrQkFBUSxFQUFFc0IsQ0FBQyxJQUFJckIsV0FBVyxDQUFDcUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEQ7QUFBb0UsY0FBSSxFQUFDLFVBQXpFO0FBQW9GLG1CQUFTLEVBQUM7QUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixFQUdHdEIsTUFBTSxDQUFDRixRQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixFQVlHRSxNQUFNLENBQUNTLEtBWlYsZUFhRTtBQUFRLGlCQUFTLEVBQUMsaUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW1CRCxDQW5ERDs7QUFxREEsK0RBQWVmLFVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ25pbkZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU2lnbmluRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe2VtYWlsOm51bGwsIHBhc3N3b3JkOm51bGx9KTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS91c2Vycy9zaWduaW4nLHtlbWFpbCwgcGFzc3dvcmR9KTtcbiAgICAgIFJvdXRlci5wdXNoKCcvJyk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHtvdGhlcjpbXX07XG4gICAgICBmb3IgKGxldCBlcnJvciBvZiBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgaWYgKGVycm9yLmZpZWxkKSB7XG4gICAgICAgICAgZXJyb3JzW2Vycm9yLmZpZWxkXSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZXJyb3JzLm90aGVyLnB1c2goZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldEVycm9ycyhlcnJvcnMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdHlsZT17XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknXG59XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCIgc3R5bGU9e3N0eWxlfT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgIDxoMT5Mb2dpbjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgIHtlcnJvcnMuZW1haWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17ZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cbiAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2Vycm9ycy5vdGhlcn1cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbmluRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SigninForm.js\n");

/***/ }),

/***/ "./pages/auth/signin.js":
/*!******************************!*\
  !*** ./pages/auth/signin.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SigninForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SigninForm */ \"./components/SigninForm.js\");\n\nvar _jsxFileName = \"/app/pages/auth/signin.js\";\n\n\nconst signin = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SigninForm__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (signin);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hdXRoL3NpZ25pbi5qcz9lOTg4Il0sIm5hbWVzIjpbInNpZ25pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDbkIsc0JBQU8sOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGRDs7QUFJQSwrREFBZUEsTUFBZiIsImZpbGUiOiIuL3BhZ2VzL2F1dGgvc2lnbmluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25pbkZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaWduaW5Gb3JtJztcblxuY29uc3Qgc2lnbmluID0gKCkgPT4ge1xuICByZXR1cm4gPFNpZ25pbkZvcm0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaWduaW47Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signin.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signin.js"));
module.exports = __webpack_exports__;

})();