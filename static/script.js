// script.js

document.addEventListener("DOMContentLoaded", function() {
    const checkButton = document.getElementById("check-answer");
    const resultMessage = document.getElementById("result-message");
    const studentAnswer = document.getElementById("student-answer");

    // 정답 (출력 결과)
    const correctOutput = `Hello, World!\n5`;  // 예상 출력 (문제 코드의 결과와 동일하게 설정)

    checkButton.addEventListener("click", function() {
        const userOutput = studentAnswer.value.trim();  // 학생 입력값 (공백 제거)

        if (userOutput === correctOutput) {
            resultMessage.textContent = "정답입니다! 잘했어요!";
            resultMessage.style.color = "green";
        } else {
            resultMessage.textContent = "틀렸습니다. 다시 시도해보세요!";
            resultMessage.style.color = "red";
        }
    });
});
