const question = document.querySelector('.quiz');
const anwser = document.querySelector('.quiz_list');

const anwser_list = document.querySelectorAll('.qui_content');
const next = document.querySelector('.next');
const quiz_number = document.querySelector('.quiz_number');

let data = [];
let idx = 0;
let score = 0;
let current_pick = 0;

async function game_setting(){  
     const data_json =  await fetch('./data/data.json')
     .then( res  =>{
          return res.json();
     })   
  
     //console.log(data_json.items);
     //question.innerHTML = data.items[0].question;
     data = data_json.items;
    

     //console.log(data);
     question.innerHTML = data[0].question;
     
     anwser_list.forEach( (item, i) =>{    
          //console.log(item.innerHTML , i);
          item.innerHTML = data[0].answers[i];
     })
}

function select_clear(cur , next){
     //console.log(cur , next);
     const qui_list = document.querySelectorAll('.qui');
     qui_list.forEach( item =>{
          let item_num = item.dataset.key;
               
          if(item_num == next){
               item.firstElementChild.style.background = "red";
          }
          else item.firstElementChild.style.background = "yellowgreen";
     })
}

function next_clear(){
     const qui_list = document.querySelectorAll('.qui');

     qui_list.forEach( item =>{
          item.firstElementChild.style.background = "yellowgreen";
     })
     current = 0;
}
function game_end(){
     alert(score , "score");
}
function quiz_start(){
     game_setting();
     let cnt= 0;
}
quiz_start();

anwser.addEventListener('click', (event) =>{
     //이전 선택의 취소와 현재 버튼의 선택
     let select_num = event.target.dataset.key;
     select_clear(current_pick , select_num);
     current_pick = select_num;
     //console.log(select_num);
})

function game_updata(idx){
     quiz_number.innerHTML = idx+1;
     question.innerHTML = data[idx].question;
     anwser_list.forEach( (item, i) =>{    
          //console.log(item.innerHTML , i);
          item.innerHTML = data[idx].answers[i];
     })
}
next.addEventListener('click', ()=>{ 
     if(current_pick == 0) return;   
     //console.log(current_pick);     
     if(current_pick == data[idx].correct){
          score++;
          console.log(score);
     }
     idx++;
     console.log(idx);  
     if(idx == 8){
          game_end();
          return;
     }
     next_clear();
     game_updata(idx);
})