let Numbera = Number(prompt('Mời bạn nhập vào số a'));
let Numberb = Number(prompt('Mời bạn nhập vào số b'));
let Operator = prompt('Nhập phép tính (+, -, *, /)'); 

let result;

if (Operator == "+") {
    result = Numbera + Numberb;
} else if (Operator == "-") {
    result = Numbera - Numberb;
} else if (Operator == "*") {
    result = Numbera * Numberb;
} else if (Operator == "/") {
    if (Numberb === 0) {
        result = 'Không thể chia cho 0'; 
    } else {
        result = Numbera / Numberb;
    }
} else {
    result = 'Phép tính không hợp lệ';
}


alert(Numbera + " " + Operator + " " + Numberb + " = " + result);