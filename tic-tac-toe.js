const boxes = document.querySelectorAll("#boxex");
const winner = document.querySelector("h1");
const btns = document.querySelector("button");
const statusbar = document.querySelector("h1");
const body= document.querySelector('body')



let curTurn = true;

// const aray= Array(9).fill(null)
const winnerCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


boxes.forEach((box) => {
   box.addEventListener("click", () => {
    // console.log("click");
    if (curTurn) {
      box.innerHTML = "O";
      curTurn = false;
     
    } else {
      box.innerHTML = "X";
      curTurn = true;
    }
    box.disabled=true
    
    checkWin()
    btns.addEventListener('click',restart)
    body.style.background=`#${Math.random().toString(16).slice(2,8)}`
    console.log(body);
 });
});

function checkWin (){
  for(let pattern of  winnerCondition)
{
  let a =boxes[pattern[0]].innerText
  let b=boxes[pattern[1]].innerText
  let c =boxes[pattern[2]].innerText

  // console.log(a,b,c);
  if(a !=''&& b != '' && c !=''){
    if(a ===b && b===c){

winner.innerHTML= `congratulation winner is ${a}`  }
  }
}
}






let  restart=()=>{
setTimeout (()=>{
  boxes.forEach((box) => {
    box.innerText = '';
  });


  statusbar.innerText = ``;
body.style.background='black'
},1000)
}




stop()