'use strict'

import End_popup from './End_popup.js';
import Start_popup from './Start_popup.js';
import Quiz from './Quiz.js';

let data =[];
let idx = 0;
let score = 0;
let current_pick = 0;

const StartPopUp = new Start_popup();
const EndPopUp = new End_popup();
const Game = new Quiz();

StartPopUp.setClickListener( async ()=>{
     data = await StartPopUp.setting();
     EndPopUp.hide();
     idx=0;
     current_pick=0;
     score = 0;
     Game.start(idx , data, current_pick);
})

EndPopUp.setClickListener(()=>{
     StartPopUp.show();
})

// 다음 단계에서 선택된 보기 없애기.
Game.setClickListener_quiz_page((event)=>{
     let td = event.target.closest('.qui');
     if(td === null) return;
     //console.log(td.dataset.key);
     let select_num = td.dataset.key;
     Game.exChange_select(current_pick , select_num);
     current_pick = select_num;
})

Game.setClickListener_next_btn(()=>{
     if(current_pick == 0) return;
     if(current_pick == data[idx].correct){
          score++;
     }
     idx++;  
     Game.next_clear(current_pick);
     if(idx == 8){
          EndPopUp.end(score);
          return;
     }
     Game.game_update(idx , data);
     current_pick = 0;
})
