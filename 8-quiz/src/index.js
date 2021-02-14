'use strict'

import End_popup from './End_popup.js';
import Start_popup from './Start_popup.js';
import Quiz from './Quiz.js';

const StartPopUp = new Start_popup();
const EndPopUp = new End_popup();
const Game = new Quiz();



// start 팝업 에서 버튼 클릭
StartPopUp.setClickListener( async ()=>{
     await Game.setting();
     EndPopUp.hide();
     Game.start();
})


// 게임이 끝났을 때
Game.setClickListener((score)=>{
     EndPopUp.updata_text(score);
     EndPopUp.show();
})

// 다시 게임을 시작할 떄
EndPopUp.setClickListener(()=>{
     StartPopUp.show();
})




