 class Calculator
 {
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
        this.clear()
        
    }
    clear(){
        this.currentOperand=''
        this.previousOperand=''
        this.operation=undefined
    }
    delete(){
        this .currentOperand = this.currentOperand.toString().slice(0,-1)


    }
    appendNuumber(number){
        if(number==='.' && this.currentOperand.includes('.'))return
            this.currentOperand=this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation){
        if (this.currentOperand==='') return
        if(this.previousOperand!==''){
            this.compute()
        }
            this.operation=operation
            this.previousOperand=this.currentOperand
            this.currentOperand=''
    }
    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+' : 
                computation = prev + current
                break
            case '-' : 
                computation = prev - current
                break
            case '*' : 
                computation = prev * current
                break
            case '/' : 
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand=computation
        this.operation=undefined
        this.previousOperand = ''
    }
    getDisplayNumber(number){
        return number
    }
    updateDisplay(){
        this.currentOperandTextElement.innerText=this.currentOperand
        if(this.operation !=null){
            this.previousOperandTextElement.innerText=
             $ {this.previousOperand} ${this.operation}

        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelectorAll('[data-equals]')
const deleteButtons = document.querySelectorAll('[data-delete]')
const allclearButtons = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]')

const calculator=new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListener('click' , ()=> {
        calculator.appendNuumber(button.innerText)
        calculator.updateDisplay()
      })
})
operatorButtons.forEach(button =>{
    button.addEventListener('click' , ()=> {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButtons.addEventListener('click', button=>{
    calculator.compute()
    calculator.updateDisplay()
})
allclearButtons.addEventListener('click', button=>{
    calculator.clear()
    calculator.updateDisplay()
})
deleteButtons.addEventListener('click', button=>{
    calculator.delete()
    calculator.updateDisplay()
})
