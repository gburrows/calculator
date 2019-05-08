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
      this.totalSum = 0;
      this.currentNumber = null;
      this.currentCalculation = null;
      this.currentOperation = null; // Once equals is used, pressing number automatically ACs or user can run previous operation many times

      this.equalsUsed = false; // Locked until user has used operation and a number (not 0)

      this.equalsLocked = true;
      this.operationUsed = false;
    }

    _createClass(Calculator, [{
      key: "enterNumber",
      value: function enterNumber(number) {
        // Equals has been used so pressing a number will AC
        if (this.equalsUsed) {
          this.clear();
        }

        if (this.currentNumber !== null) {
          this.currentNumber = this.currentNumber + number;
        } else {
          if (number === '0') return;
          this.currentNumber = number;
        } // Unlocking equals as user has used operation and a number (not 0)


        if (this.operationUsed) {
          this.equalsLocked = false;
        }

        this.resultAnswer.innerText = this.currentNumber;
        adjustFontSizeResultAnswer();
      }
    }, {
      key: "enterDecimal",
      value: function enterDecimal() {
        if (this.currentNumber !== null && this.currentNumber.includes('.')) return; // Equals has been used so pressing a number will AC

        if (this.equalsUsed) {
          this.clear();
        }

        if (this.currentNumber !== null) {
          this.currentNumber = this.currentNumber + '.';
        } else {
          this.currentNumber = '0.';
        }
      }
    }, {
      key: "enterOperation",
      value: function enterOperation(operation) {
        // Return if not entered a number OR equals has been used
        if (this.currentNumber === null || this.equalsUsed) return; // Update calculation area

        if (this.currentCalculation !== null) {
          this.currentCalculation = this.currentCalculation + ' ' + this.currentNumber + ' ' + operation;
        } else {
          this.currentCalculation = this.currentNumber + ' ' + operation;
        } // Show sum in answer area


        if (this.operationUsed) {
          this.calculateNewTotal();
          this.resultAnswer.innerText = this.totalSum;
          adjustFontSizeResultAnswer();
        } else {
          this.totalSum = parseInt(this.resultAnswer.innerText);
          this.resultAnswer.innerText = 0;
          adjustFontSizeResultAnswer();
          this.operationUsed = true;
        }

        this.currentOperation = operation;
        this.resultCalculation.innerText = this.currentCalculation;
        this.currentNumber = null;
        this.equalsLocked = true;
        adjustFontSizeResultCalculation();
      }
    }, {
      key: "calculateNewTotal",
      value: function calculateNewTotal() {
        if (this.totalSum === null) return;
        var currentNumberInt = parseFloat(this.currentNumber);

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
        // Disabled if no operation has been pressed on fresh AC
        if (!this.operationUsed) {
          return;
        } // Disabled if user has not yet used an operation and a number (not 0)


        if (this.equalsLocked) {
          return;
        }

        this.calculateNewTotal();
        this.resultCalculation.innerText = this.currentCalculation + ' ' + this.currentNumber + ' =';
        this.resultAnswer.innerText = this.totalSum;
        adjustFontSizeResultAnswer();
        this.equalsUsed = true;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.resultAnswer.innerText = '0';
        adjustFontSizeResultAnswer();
        this.resultCalculation.innerText = '';
        adjustFontSizeResultCalculation();
        this.currentCalculation = null;
        this.currentOperation = null;
        this.currentNumber = null;
        this.equalsUsed = false;
        this.equalsLocked = true;
        this.operationUsed = false;
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
  }); // Adjust font size based on string length  

  function adjustFontSizeResultAnswer() {
    if (resultAnswer.innerText.length > 12) {
      resultAnswer.style.fontSize = '1.8rem';
    } else if (resultAnswer.innerText.length >= 6) {
      resultAnswer.style.fontSize = '2.8em';
    } else if (resultAnswer.innerText.length < 5) {
      resultAnswer.style.fontSize = '6rem';
    }
  }

  function adjustFontSizeResultCalculation() {
    if (resultCalculation.innerText.length > 22) {
      resultCalculation.style.fontSize = '1.6rem';
      resultCalculation.style.height = '3.8rem';
      resultCalculation.style.lineHeight = '1.8rem';
    } else if (resultCalculation.innerText.length >= 15) {
      resultCalculation.style.fontSize = '1.8em';
      resultCalculation.style.height = '2.8rem';
      resultCalculation.style.lineHeight = '2.8rem';
    } else if (resultCalculation.innerText.length < 14) {
      resultCalculation.style.fontSize = '2.8rem';
      resultCalculation.style.height = '2.8rem';
      resultCalculation.style.lineHeight = '2.8rem';
    }
  }
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