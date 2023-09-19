const student = {
    major : "컴퓨터공학부",
    idNum : 202295029,
    name : '이종국'
}   

for(key in student) {
    document.write(`${key} : ${student[key]}<br>`)
}