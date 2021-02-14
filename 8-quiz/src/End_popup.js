'use strict'

export default class End_popup{

    constructor(){

        this.End_PopUp =document.querySelector('.pop_up');
        this.End_PopUp_comment = document.querySelector('.pop_score');
        this.End_Replay = document.querySelector('.replay');


        this.End_Replay.addEventListener('click', ()=>{
            this.onClick && this.onClick();
            this.hide();

        })
    }

    setClickListener(onClick){
        this.onClick = onClick;
    }

    updata_text(score){
        this.End_PopUp_comment.textContent =
        `You got: ${score} out of 8 questions right.`

    }


    hide(){
        this.End_PopUp.classList.add('pop_up_hide');
    }

    show(){
        this.End_PopUp.classList.remove('pop_up_hide');
    }

    end(score){
        this.show();
        this.updata_text(score);
    }

    



}