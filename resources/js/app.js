const app = () => {
	// Select DOM elements
	const   appElement          = document.querySelectorAll('.app')[0],
	        calculatorElement   = document.querySelectorAll('.calculator')[0],
          allButtons          = document.querySelectorAll('.calculator__button'),
          resultCalculation   = document.querySelectorAll('.calculator__result-calculation')[0];
          resultAnswer        = document.querySelectorAll('.calculator__result-answer')[0],
  
          
	// Fade in after CSS loads
	setTimeout(() => {
		appElement.setAttribute('style', 'opacity: 1;');
	}, 500);
	
	
	class Calculator {
		constructor(resultAnswer, resultCalculation) {
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
    
    enterNumber(number) {
      if (this.currentNumber !== null) {
        this.currentNumber = this.currentNumber + number;
      } else {
        if (number === '0') return;
        this.currentNumber = number;
      }
      this.resultAnswer.innerText = this.currentNumber;
      console.log('fdsalkh', typeof this.currentNumber)
    }

    enterOperation(operation) {
      // Return if not entered a number
      if (this.currentNumber === null) return;

      this.totalSum = parseInt(this.resultAnswer.innerText);
      this.currentOperation = operation;

      // Shows sum from using operations
      if (this.currentCalculation !== null) {
        this.currentCalculation = this.currentCalculation + ' ' + this.currentNumber + ' ' + operation;
      } else {
        this.currentCalculation = this.currentNumber + ' ' + operation;
      }

      this.resultCalculation.innerText = this.currentCalculation;
      this.resultAnswer.innerText = 0;
      this.currentNumber = null;
    }

    enterDecimal() {
    }

    calculateNewTotal() {
      if (this.totalSum === null) return;

      let currentNumberInt = parseInt(this.currentNumber);
      
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

    equals() {
      this.calculateNewTotal();
      this.resultCalculation.innerText = this.currentCalculation + ' ' + this.currentNumber + ' =';
      this.resultAnswer.innerText = this.totalSum;
    }

    clear() {
      this.resultAnswer.innerText = '0';
      this.resultCalculation.innerText = '';
      this.currentCalculation = null;
      this.currentNumber = null;
    }

    save() {
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
	})
};

document.addEventListener('DOMContentLoaded', app);