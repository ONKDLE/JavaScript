function sum (num1, num2) {
    var result = num1 + num2;   // result는 지역 변수 (지역 스코프)
}

sum(10, 20);
console.log(result);    //  지금 6번 째 줄엔 result는 선언된 변수 값이 없다.