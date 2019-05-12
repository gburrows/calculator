const axios = require('axios');

const app = () => {
	// Select DOM elements
	const   appElement          = document.querySelectorAll('.app')[0],
	        calculatorElement   = document.querySelectorAll('.calculator')[0],
          allButtons          = document.querySelectorAll('.calculator__button'),
          resultCalculation   = document.querySelectorAll('.calculator__result-calculation')[0],
          resultAnswer        = document.querySelectorAll('.calculator__result-answer')[0];
  
          
	// Fade in after CSS loads
	setTimeout(() => {
		appElement.setAttribute('style', 'opacity: 1;');
  }, 500);
  
	
	class Calculator {
		constructor(resultAnswer, resultCalculation) {
      this.resultAnswer = resultAnswer;
      this.resultCalculation = resultCalculation;
      this.totalSum = 0;
      this.currentNumber = null;
      this.currentCalculation = null;
      this.currentOperation = null;
      
      // Once equals is used, pressing number automatically ACs or user can run previous operation many times
      this.equalsUsed = false; 
      // Locked until user has used operation and a number (not 0)
      this.equalsLocked = true; 

      this.operationUsed = false;
    }
    
    enterNumber(number) {
      // Equals has been used so pressing a number will AC
      if (this.equalsUsed) {
        this.clear()
      }

      if (this.currentNumber !== null) {
        this.currentNumber = this.currentNumber + number;
      } else {
        if (number === '0') return;
        this.currentNumber = number;
      }

      // Unlocking equals as user has used operation and a number (not 0)
      if (this.operationUsed) {
        this.equalsLocked = false;
      }
      
      this.resultAnswer.innerText = this.numberWithCommas(this.currentNumber);
      adjustFontSizeResultAnswer();
    }

    enterDecimal() {
      if (this.currentNumber !== null && this.currentNumber.includes('.')) return;
      
      // Equals has been used so pressing a number will AC
      if (this.equalsUsed) {
        this.clear()
      }

      if (this.currentNumber !== null) {
        this.currentNumber = this.currentNumber + '.';
      } else {
        this.currentNumber = '0.';
      }
    }

    enterOperation(operation) {
      // Return if not entered a number OR equals has been used
      if (this.currentNumber === null || this.equalsUsed) return;

      // Update calculation area
      if (this.currentCalculation !== null) {
        this.currentCalculation = this.currentCalculation + ' ' + this.numberWithCommas(this.currentNumber) + ' ' + operation;
      } else {
        this.currentCalculation = this.numberWithCommas(this.currentNumber) + ' ' + operation;
      }

      // Show sum in answer area
      if (this.operationUsed) {
        this.calculateNewTotal();
        this.resultAnswer.innerText = this.numberWithCommas(this.totalSum);
        adjustFontSizeResultAnswer();
      } else {
        this.totalSum = this.numberRemoveCommas(this.resultAnswer.innerText);
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

    equals() {
      // Disabled if no operation has been pressed on fresh AC
      if (!this.operationUsed) {
        return;
      }

      // Disabled if user has not yet used an operation and a number (not 0)
      if (this.equalsLocked) {
        return;
      }

      this.calculateNewTotal();
      this.resultCalculation.innerText = this.currentCalculation + ' ' + this.numberWithCommas(this.currentNumber) + ' =';
      this.resultAnswer.innerText = this.numberWithCommas(this.totalSum);
      adjustFontSizeResultAnswer();
      this.equalsUsed = true;
    }

    clear() {
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

    save() {
      axios.post('/save', {
        numberSaved: this.totalSum
      })
      .then(function (response) {
        alert('The number has been saved, please see /calculations to view the saved numbers.');
      })
      .catch(function (error) {
        alert('The number could not be saved at this time, please try again.');
      });
    }

    calculateNewTotal() {
      if (this.totalSum === null) return;

      let currentNumberInt = parseFloat(this.currentNumber);
      
      switch(this.currentOperation) {
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

    numberWithCommas(x) {
      let parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
  
    numberRemoveCommas(x) {
      x=x.replace(/\,/g,'');
      x=parseInt(x,10);
      return x;
    }
	}
	
	const calculator = new Calculator(resultAnswer, resultCalculation);
	
	// Add event handlers
	allButtons.forEach(button => {
    let dataButtonType  = Object.keys(button.dataset)[0],
        dataButtonValue = button.dataset[dataButtonType];
		
		button.addEventListener('click', () => {
			switch(dataButtonType) {
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
		})  
  });

  // Adjust font size based on string length  
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
      resultCalculation.style.lineHeight = '1.8rem';
    } else if (resultCalculation.innerText.length >= 13) {
      resultCalculation.style.fontSize = '1.8em';
      resultCalculation.style.lineHeight = '2rem';
    } else if (resultCalculation.innerText.length < 12) {
      resultCalculation.style.fontSize = '2.8rem';
      resultCalculation.style.lineHeight = '2.8rem';
    } 
  } 

};

document.addEventListener('DOMContentLoaded', app);