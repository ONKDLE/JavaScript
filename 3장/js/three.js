// 1. 정수를 입력 받는다. (정수로 변환)
// 2. 만약 정수가 3의 배수이면
//      1) 3의 배수입니다. 출력
// 3. 아니면
//      1)3의 배수가 아닙니다. 출력

let userNumber = prompt("숫자를 입력하시오.");

if(userNumber != null) {
    userNum = parseInt(userNumber);
    if(userNumber % 3 === 0) {
        alert(userNum + "은(는) 3의 배수입니다.");
    }
    else {
        alert(userNum + "은(는) 3의 배수가 아닙니다.");
    }
}
else{
    alert("입력이 취소되었습니다.");
}