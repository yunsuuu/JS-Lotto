const $result = document.querySelector("#result");
const $bonus = document.querySelector("#bonus");

const candidate = Array(45).fill().map((ele, i) => i + 1);
const shuffle = [];

while(candidate.length > 0){
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}
// 랜덤으로 섞인 숫자를 담은 배열
console.log(shuffle);

// 숫자 7개 뽑기
const winBalls = shuffle.slice(0, 7).sort((a, b) => a - b);
console.log(winBalls);
console.log(winBalls.length);
const bonus = winBalls[6];

const changeColor = (number, $tag) => {
  if(number < 10){
    $tag.style.backgroundColor = "lightpink";
    $tag.style.color = "#fff";
  } else if(number < 20){
    $tag.style.backgroundColor = "orange";
    $tag.style.color = "#fff";
  } else if(number < 30){
    $tag.style.backgroundColor = "lightgreen";
    $tag.style.color = "#fff";
  } else if(number < 40){
    $tag.style.backgroundColor = "lightblue";
    $tag.style.color = "#fff";
  } else {
    $tag.style.backgroundColor = "lightgray";
    $tag.style.color = "#fff";
  }
};

const showBall = (number, $target) => {
  const $ball = document.createElement("div");
  $ball.className = "ball";
  $ball.innerText = number; // winBalls[0]
  $target.appendChild($ball);
  changeColor(number, $ball);
};

// 1초 간격으로 ball을 화면에 표시
for(let i = 0; i < winBalls.length - 1; i++){
  setTimeout(() => {
    showBall(winBalls[i], $result);
  }, (i + 1) * 1000);
}
setTimeout(() => {
  showBall(bonus, $bonus);
}, 7000);