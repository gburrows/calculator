const app = () => {
	// Select DOM elements
	const   appElement          = document.querySelectorAll('.app')[0],
	        calculatorElement   = document.querySelectorAll('.calculator')[0],
	        allButtons          = document.querySelectorAll('.calculator__button');
	
	
	// Fade in after CSS loads
	setTimeout(() => {
		appElement.setAttribute('style', 'opacity: 1;');
	}, 500);
	
	
	class Calculator {
		constructor() {
			
    }
    
    enterNumber(number) {
    }

    enterOperation(operation) {
    }

    enterDecimal() {
    }

    equals() {
    }

    clear() {
    }

    save() {
    }
	}
	
	const calculator = new Calculator();
	
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