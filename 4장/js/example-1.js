// 두 수를 입력 받아 곱한 결과를 리턴하여 화면에 출력하는 함수
// 함수 선언    
function multpiple(num1, num2) {
    //  let gop = num1 * num2;
    //  return gop; // 함수를 호출한 곳으로 돌려 줌.
    return num1 * num2;
}

let number1 = parseInt(prompt("첫 번째 정수 입력)"))
let number2 = parseInt(prompt("첫 번째 정수 입력)"))

document.write(`${number1} * ${number2} = ${multpiple(number1, number2)}`);