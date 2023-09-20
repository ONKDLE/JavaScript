const factor = 5;   // 변수 선언 및 생성.

function calc() {   // 함수를 가져와서 결과를 돌려준다
    return num * factor;    // 오류 발생
}

{
    const num = 10; // 지역 변수 (다른 곳에서 사용 불가)
    let result = calc();    //함수호출
    console.log(`result : ${result}`);  // 함수 출력
}


// 130p 책 참고 해보기