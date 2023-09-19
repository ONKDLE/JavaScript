const nums = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// 반복문 for로 배열에서 10보다 큰 숫자 출력하기
for(let i = 0; i < nums.length; i++) {
    if (10 < nums[i]) {
        document.write(`${num[i]}.<br>`);
    }
}

// 반복문 foreach로 배열에서 10보다 큰 숫자 출력하기
nums.forEach(function(num) {
    if (10 < nums[i]) {
        document.write(`${num[i]}.<br>`);
    }
})

// 반복문 for..of로 배열에서 10보다 큰 숫자 출력하기
for(let num of nums) {
    if (10 < nums[i]) {
        document.write(`${num[i]}.<br>`);
    }
}