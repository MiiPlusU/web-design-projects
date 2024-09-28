class Calculator {
    constructor() {
        this.firstOperand = null;
        this.operator = null;
        this.secondOperand = null;
        this.screenElement = document.querySelector(".screen");
        this.equalElement = document.querySelector("#equals");
        this.buttons = document.querySelectorAll('.buttons button');
        this.screenValue = '';

        // Add event listener to all buttons
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => this.handleButtonClick(e));
        });
    }

    add(firstOperand, secondOperand) {
        return firstOperand + secondOperand;
    }

    subtract(firstOperand, secondOperand) {
        return firstOperand - secondOperand;
    }

    multiply(firstOperand, secondOperand) {
        return firstOperand * secondOperand;
    }

    divide(firstOperand, secondOperand) {
        if (secondOperand === 0) {
            throw new Error("You can't divide by zero bro");
        }
        return firstOperand / secondOperand;
    }

    handleButtonClick(event) {
        const buttonValue = event.target.textContent;

        // Handle clear button
        if (buttonValue === 'clear') {
            this.screenElement.value = '';
            this.screenValue = '';
            this.firstOperand = null;
            this.operator = null;
            this.secondOperand = null;
            return;
        }

        // Handle equals button
        if ("+-*/".includes(buttonValue)) {
            if (this.firstOperand !== null && this.operator !== null && this.screenValue !== '') {
                this.operate();
            }
            this.operator = buttonValue;
            this.firstOperand = parseFloat(this.screenElement.value);
            this.screenValue = '';
        } else if (buttonValue === '=') {
            this.operate();
        } else {
            this.screenValue += buttonValue;
            this.screenElement.value = this.screenValue;
        }
    }

    operate() {
        if (!this.firstOperand || !this.operator) {
            throw new Error("Missing operand or operator.");
        }

        this.secondOperand = parseFloat(this.screenValue);
        if (isNaN(this.firstOperand) || isNaN(this.secondOperand)) {
            throw new Error("Operands must be valid numbers");
        }

        let result;
        try{
            switch (this.operator) {
                case '+':
                    result = this.add(this.firstOperand, this.secondOperand);
                    break;
                case '-':
                    result = this.subtract(this.firstOperand, this.secondOperand);
                    break;
                case '*':
                    result = this.multiply(this.firstOperand, this.secondOperand);
                    break;
                case '/':
                    result = this.divide(this.firstOperand, this.secondOperand);
                    break;
                default:
                    throw new Error("Invalid operator");
            }

            result = Math.round(result * 10000) / 10000;

            // Display the result and reset values
            this.screenElement.value = result;
            this.firstOperand = result;
            this.operator = null;
            this.screenValue = '';
    }   catch (error) {
            this.screenElement.value = error.message;
            this.clear();
    }
}
}


const calculator = new Calculator();