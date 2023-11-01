// 반지름을 입력 받아 원의 넓이와 둘레를 출력한다.
// 반지름은 프롬프트로 입력 받는다.
// 원의 넓이와 둘레를 구하는 함수를 각각 작성합니다.
// 넓이와 둘레는 소수 3자리까지 출력합니다.

// 1. 함수 생성
function area(r) {
    return Math.PI* r * r;
}

function circum(r){
    return 2 * Math.PI * r;
}
// 2. 가져오기
const result = document.querySelector("#result");

// 3. 입력 받기
const radius = prompt("반지름을 입력하시오.");

// 4. 결과 출력
result.innerText = `반지름 : ${radius}
                    원의 넓이 : ${area(radius).toFixed(3)}
                    원의 둘레 : ${circum(radius).toFixed(3)}`;