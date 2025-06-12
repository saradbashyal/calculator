let inputNumber = ""

function number(value){
    if (inputNumber==="0"){
        inputNumber=""
    }
    inputNumber += value
    document.getElementById("display").textContent = inputNumber
}
function calculate(){
    try{
        let result = eval(inputNumber)
        document.getElementById("display").textContent = result
        inputNumber = result.toString()
    }
    catch(error){
        document.getElementById("display").textContent = "Error"
    }
}
function clearDisplay(){
    inputNumber="0"
    document.getElementById("display").textContent = inputNumber
}