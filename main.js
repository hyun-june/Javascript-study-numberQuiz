// 랜덤번호 지정
// 유저가 번호를 입력한다, 그리고 버튼을 누른다.
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호 < 유저번호 Down!
// 랜덤번호 > 유저번호 Up!
// Reset버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다(버튼이 disable)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려주고, 기회를 깎지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려주고, 기회를 깎지 않는다.

let randomNum = 0;
let userInput = document.getElementById("user-input");
let playButton = document.getElementById("play-button");
let resetButton = document.getElementById("reset-button");
let resultArea = document.getElementById("result-area");
let chanceArea = document.getElementById("chance-area");
let historyArea = document.getElementById("history-area")
let chances = 5;
let history = [];

const randomNumber = () =>{
    randomNum = Math.floor(Math.random()*100+1);
    console.log("정답 :",randomNum)
}

const play = () =>{
    userValue = userInput.value;

    if(history.includes(userValue)){
        resultArea.textContent = "다른 숫자를 입력해주세요."
        return;
    }

    if(userValue < 1 || userValue > 100){
        resultArea.textContent = "1~100 사이의 숫자를 입력해주세요."
        return;
    }

    chances -- ;
    chanceArea.textContent = `남은 기회 : ${chances}번`

    history.push(userValue);
    historyArea.textContent = `입력한 숫자 : ${history}`

    if(userValue < randomNum){
        resultArea.textContent = "Up"
    } else if(userValue > randomNum){
        resultArea.textContent = "Down"
    } else if(userValue == randomNum){
        resultArea.textContent = "정답"
    }

    if(chances == 0){
        playButton.disabled = true;
    }
}

const reset = () =>{
    chances = 5;
    history = [];
    chanceArea.textContent = `남은 기회 : ${chances}번`
    historyArea.textContent = `입력한 숫자 : ${history}`
    playButton.disabled = false;
    userInput.value = "";
    randomNumber();
}

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",()=>{
    userInput.value = "";
})

randomNumber();
