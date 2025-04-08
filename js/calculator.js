let addToScreen = (value) => {
    document.getElementById("screen").value += value;
}

let clearScreen = () => {
    document.getElementById("screen").value = "";
}

let checkOperators = (operation) => {
    let count = -1;
    for (let i = 0; i < operation.length; i++){
        if (!isNaN(operation[i]) && isNaN(operation[i+1])){
            count++;
        }
    }
    return count;
}

let doOperation = (operating1,operating2,sign) => {
    let res = "E";

    if (operating1 != "" && operating2 != "" && sign != "") {
        let num1 = parseFloat(operating1);
        let num2 = parseFloat(operating2);

        switch (sign) {
            case "+":
                res = num1 + num2;
                break;
            case "-":
                res = num1 - num2;
                break;
            case "*":
                res = num1 * num2;
                break;
            case "/":
                res = num2 != 0 ? num1 / num2 : "E";
                break;
            default:
                res = "E"; 
        }
    }

    return res;
}

let calculate = () => {
    let operation = document.getElementById("screen").value;
    let res = "E";
    let operating1 = "";
    let operating2 = "";
    let sign = "";
    pos = -1;


    console.log(operation);


            for (let i = 0; i < operation.length && pos == -1; i++){
                if (!isNaN(operation[i]) && isNaN(operation[i+1])){
                    operating1 = operation.substring(0, i+1);
                    operating2 = operation.substring(i+2, operation.length);
                    sign = operation[i+1];
                    pos = operation[i+1];
                }
            }
    console.log(operating1);
    console.log(operating2);
    console.log(sign);

    
    let count = checkOperators(operation); 
    res = doOperation(operating1,operating2,sign); 

    if (isNaN(res) == true || count > 1){  
        res = "E";
    } 

    document.getElementById("screen").value = res;
}
