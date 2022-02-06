// for문 사용 - 시작과 끝의 값을 정확히 알고 있을 때
// const candidate = Array(45).fill().map((ele, i) => (i + 1));
// const shuffle = [];
// for( let i = candidate.length; i > 0; i-- ){
//   const random = Math.floor(Math.random() * i);
//   const spliceArray = candidate.splice(random, 1);
//   const value = spliceArray[0];
//   shuffle.push(value);
// }
// console.log(shuffle);

// while문 사용 - 몇번 반복되는지 정확히 모를 때
// 1~45까지 숫자가 담긴 배열 만들기
const candidate = Array(45).fill().map((ele, i) => i + 1);
const shuffle = [];
while(candidate.length > 0){
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}

const winBalls = shuffle.slice(0, 7).sort((a, b) => a - b);
const bonus = winBalls[6];

const $result = document.querySelector("#result");
const $bonus = document.querySelector("#bonus");

const changeColor = (number, $tag) => {
  console.log($tag);
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
    $tag.style.backgroundColor = "gray";
    $tag.style.color = "#fff";
  }
};

const showBall = (number, $target) => {
  const $ball = document.createElement("div");
  $ball.className = "ball";
  $ball.textContent = number;
  $target.appendChild($ball);
  changeColor(number, $ball);
};

for(let i = 0; i < winBalls.length - 1; i++){
  setTimeout(() => {
    showBall(winBalls[i], $result);
  }, (i + 1) * 1000);
}
setTimeout(() => {
  showBall(bonus, $bonus);
}, 7000);