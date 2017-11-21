/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _hub_profile = __webpack_require__(1);\n\nvar _hub_profile2 = _interopRequireDefault(_hub_profile);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    fetch(_hub_profile2.default, { mode: 'no-cors' }).then(function (response) {\n        return response.json();\n    }).then(function (response) {\n        console.log(response);\n    });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZldGNoIiwibW9kZSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFFQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQTZDLFlBQVU7QUFDbkRDLGlDQUFlLEVBQUVDLE1BQU0sU0FBUixFQUFmLEVBQ0tDLElBREwsQ0FDVSxVQUFDQyxRQUFELEVBQWM7QUFDaEIsZUFBT0EsU0FBU0MsSUFBVCxFQUFQO0FBQ0gsS0FITCxFQUlLRixJQUpMLENBSVUsVUFBQ0MsUUFBRCxFQUFjO0FBQ2hCRSxnQkFBUUMsR0FBUixDQUFZSCxRQUFaO0FBQ0gsS0FOTDtBQU9ILENBUkQiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9maWxlIGZyb20gJy4vZGF0YS9odWJfcHJvZmlsZS5qc29uJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oKXtcclxuICAgIGZldGNoKHByb2ZpbGUsIHsgbW9kZTogJ25vLWNvcnMnIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = {\"id\":\"75c61860-5ba0-45ed-b4c5-1eed0dc376b9\",\"registeredAt\":\"2017-10-13T08:18:47.338Z\",\"updatedAt\":\"2017-11-10T14:43:02.766Z\",\"extended\":{\"demo_name\":\"Giovanni Colangelo\",\"demo_date\":\"2017-10-13\",\"demo_manager\":\"ext.demo@maison\",\"favourite_products\":[\"shoes\",\"accessories\"],\"like_to_receive\":[\"Collections launch\",\"New collections available in store\"],\"preferred_boutique\":\"London\",\"interests\":[\"music\",\"cinema\"]},\"base\":{\"title\":\"Mr\",\"firstName\":\"Giovanni\",\"lastName\":\"Colangelo\",\"dob\":\"1979-04-01T00:00:00.000Z\",\"contacts\":{\"email\":\"giovanni.colangelo@contactlab.com\"},\"address\":{\"street\":\"Via Battaglia\",\"province\":\"Milano\"},\"subscriptions\":[{\"id\":\"NEWSLETTER\",\"name\":\"MAISON NEWSLETTER\",\"type\":\"NEWSLETTER\",\"kind\":\"DIGITAL_MESSAGE\",\"subscribed\":true,\"preferences\":[{\"key\":\"policy_marketing\",\"value\":\"false\"},{\"key\":\"behavior_policy_marketing\",\"value\":\"false\"}]}]}}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhL2h1Yl9wcm9maWxlLmpzb24/YmM5YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0IseUlBQXlJLG1SQUFtUixTQUFTLHdHQUF3Ryw0Q0FBNEMsWUFBWSw2Q0FBNkMsbUJBQW1CLDRIQUE0SCx5Q0FBeUMsRUFBRSxrREFBa0QsRUFBRSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XCJpZFwiOlwiNzVjNjE4NjAtNWJhMC00NWVkLWI0YzUtMWVlZDBkYzM3NmI5XCIsXCJyZWdpc3RlcmVkQXRcIjpcIjIwMTctMTAtMTNUMDg6MTg6NDcuMzM4WlwiLFwidXBkYXRlZEF0XCI6XCIyMDE3LTExLTEwVDE0OjQzOjAyLjc2NlpcIixcImV4dGVuZGVkXCI6e1wiZGVtb19uYW1lXCI6XCJHaW92YW5uaSBDb2xhbmdlbG9cIixcImRlbW9fZGF0ZVwiOlwiMjAxNy0xMC0xM1wiLFwiZGVtb19tYW5hZ2VyXCI6XCJleHQuZGVtb0BtYWlzb25cIixcImZhdm91cml0ZV9wcm9kdWN0c1wiOltcInNob2VzXCIsXCJhY2Nlc3Nvcmllc1wiXSxcImxpa2VfdG9fcmVjZWl2ZVwiOltcIkNvbGxlY3Rpb25zIGxhdW5jaFwiLFwiTmV3IGNvbGxlY3Rpb25zIGF2YWlsYWJsZSBpbiBzdG9yZVwiXSxcInByZWZlcnJlZF9ib3V0aXF1ZVwiOlwiTG9uZG9uXCIsXCJpbnRlcmVzdHNcIjpbXCJtdXNpY1wiLFwiY2luZW1hXCJdfSxcImJhc2VcIjp7XCJ0aXRsZVwiOlwiTXJcIixcImZpcnN0TmFtZVwiOlwiR2lvdmFubmlcIixcImxhc3ROYW1lXCI6XCJDb2xhbmdlbG9cIixcImRvYlwiOlwiMTk3OS0wNC0wMVQwMDowMDowMC4wMDBaXCIsXCJjb250YWN0c1wiOntcImVtYWlsXCI6XCJnaW92YW5uaS5jb2xhbmdlbG9AY29udGFjdGxhYi5jb21cIn0sXCJhZGRyZXNzXCI6e1wic3RyZWV0XCI6XCJWaWEgQmF0dGFnbGlhXCIsXCJwcm92aW5jZVwiOlwiTWlsYW5vXCJ9LFwic3Vic2NyaXB0aW9uc1wiOlt7XCJpZFwiOlwiTkVXU0xFVFRFUlwiLFwibmFtZVwiOlwiTUFJU09OIE5FV1NMRVRURVJcIixcInR5cGVcIjpcIk5FV1NMRVRURVJcIixcImtpbmRcIjpcIkRJR0lUQUxfTUVTU0FHRVwiLFwic3Vic2NyaWJlZFwiOnRydWUsXCJwcmVmZXJlbmNlc1wiOlt7XCJrZXlcIjpcInBvbGljeV9tYXJrZXRpbmdcIixcInZhbHVlXCI6XCJmYWxzZVwifSx7XCJrZXlcIjpcImJlaGF2aW9yX3BvbGljeV9tYXJrZXRpbmdcIixcInZhbHVlXCI6XCJmYWxzZVwifV19XX19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kYXRhL2h1Yl9wcm9maWxlLmpzb25cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);