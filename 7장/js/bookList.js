const title = document.querySelector("#title"); // '제목' 정보
const author = document.querySelector("#author");   // '저자' 정보
const save = document.querySelector("#save");   // '저장하기' 버튼
const bookList = document.querySelector("#bookList");   // 정보가 표시될 영역

// 버튼을 클릭하면 ...
save.addEventListener("click", (e) => { // '저장하기' 버튼을 클릭할 경우
    e.preventDefault();

    // 제목와 저자 정보 출력
    // 리스트 요소 만들기
    const item = document.createElement("li");
    // item에 내용 넣기
    item.innerHTML = `
    ${title.value} - ${author.value}
    <spen class="delButton">삭제</spen>`;

    // 정보 영역에 추가
    bookList.appendChild(item);
    
    // input text 상자의 내용 지우기
    title.value = "";
    author.value = "";

    // 목록에서 제거하기
    // 삭제 버튼 요소를 모드 가져온다.
    const delButtons = document.querySelectorAll(".delButton");

    for(let delButton of delButtons) {
        delButton.addEventListener("click", function() {
            this.parentNode.remove(this.parentNode);
        });
    }
});