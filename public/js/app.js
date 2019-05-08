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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var app = function app() {
  // Select DOM elements
  var appElement = document.querySelectorAll('.app')[0],
      calculatorElement = document.querySelectorAll('.calculator')[0],
      allButtons = document.querySelectorAll('.calculator__button'),
      resultCalculation = document.querySelectorAll('.calculator__result-calculation')[0];
  resultAnswer = document.querySelectorAll('.calculator__result-answer')[0], // Fade in after CSS loads
  setTimeout(function () {
    appElement.setAttribute('style', 'opacity: 1;');
  }, 500);

  var Calculator =
  /*#__PURE__*/
  function () {
    function Calculator(resultAnswer, resultCalculation) {
      _classCallCheck(this, Calculator);

      this.resultAnswer = resultAnswer;
      this.resultCalculation = resultCalculation;
      this.totalSum = null;
      this.totalString = null;
      this.previousNumber = null;
      this.currentNumber = null;
      this.currentCalculation = null;
      this.currentOperation = null;
      this.equalsPressed = false;
    }

    _createClass(Calculator, [{
      key: "enterNumber",
      value: function enterNumber(number) {
        if (this.currentNumber !== null) {
          this.currentNumber = this.currentNumber + number;
        } else {
          if (number === '0') return;
          this.currentNumber = number;
        }

        this.resultAnswer.innerText = this.currentNumber;
        console.log('fdsalkh', _typeof(this.currentNumber));
      }
    }, {
      key: "enterOperation",
      value: function enterOperation(operation) {
        // Return if not entered a number
        if (this.currentNumber === null) return;
        this.totalSum = parseInt(this.resultAnswer.innerText);
        this.currentOperation = operation; // Shows sum from using operations

        if (this.currentCalculation !== null) {
          this.currentCalculation = this.currentCalculation + ' ' + this.currentNumber + ' ' + operation;
        } else {
          this.currentCalculation = this.currentNumber + ' ' + operation;
        }

        this.resultCalculation.innerText = this.currentCalculation;
        this.resultAnswer.innerText = 0;
        this.currentNumber = null;
      }
    }, {
      key: "enterDecimal",
      value: function enterDecimal() {}
    }, {
      key: "calculateNewTotal",
      value: function calculateNewTotal() {
        if (this.totalSum === null) return;
        var currentNumberInt = parseInt(this.currentNumber);

        switch (this.currentOperation) {
          case '÷':
            this.totalSum = this.totalSum / currentNumberInt;
            break;

          case '×':
            this.totalSum = this.totalSum * currentNumberInt;
            break;

          case '-':
            this.totalSum = this.totalSum - currentNumberInt;
            break;

          case '+':
            this.totalSum = this.totalSum + currentNumberInt;
            break;
        }
      }
    }, {
      key: "equals",
      value: function equals() {
        this.calculateNewTotal();
        this.resultCalculation.innerText = this.currentCalculation + ' ' + this.currentNumber + ' =';
        this.resultAnswer.innerText = this.totalSum;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.resultAnswer.innerText = '0';
        this.resultCalculation.innerText = '';
        this.currentCalculation = null;
        this.currentNumber = null;
      }
    }, {
      key: "save",
      value: function save() {}
    }]);

    return Calculator;
  }();

  var calculator = new Calculator(resultAnswer, resultCalculation); // Add event handlers

  allButtons.forEach(function (button) {
    var dataButtonType = Object.keys(button.dataset)[0],
        dataButtonValue = button.dataset[dataButtonType];
    button.addEventListener('click', function () {
      switch (dataButtonType) {
        case 'number':
          calculator.enterNumber(dataButtonValue);
          break;

        case 'operation':
          calculator.enterOperation(dataButtonValue);
          break;

        case 'decimal':
          calculator.enterDecimal();
          break;

        case 'equals':
          calculator.equals();
          break;

        case 'clear':
          calculator.clear();
          break;

        case 'save':
          calculator.save();
          break;
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', app);

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/home/phpstormprojects/calculator-laravel/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/home/phpstormprojects/calculator-laravel/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });