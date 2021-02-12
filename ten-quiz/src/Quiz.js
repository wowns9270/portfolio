'use strict'

export default class Quiz{

    constructor(){

    this.quiz = document.querySelector('.quiz');
    this.quiz_page = document.querySelector('.quiz_list');
    this.next_btn = document.querySelector('.next');
    this.quiz_number = document.querySelector('.quiz_number');
    this.qui_list = document.querySelectorAll('.qui');


    this.quiz_page.addEventListener('click', (event)=>{

        this.onClick && this.onClick(event);
    })

    this.next_btn.addEventListener('click', (event , idx)=>{
        this.onClick2 && this.onClick2(idx);
    })

    }

    setClickListener_quiz_page(onClick){
        this.onClick = onClick;
    }

    setClickListener_next_btn(onClick){
        this.onClick2 = onClick
    }




    game_update(idx , data){
        this.quiz_number.textContent = idx+1;
        this.quiz.textContent = data[idx].question;
    
        this.qui_list.forEach( (item, i) =>{    
            item.lastElementChild.textContent =
            data[idx].answers[i];          
       })
    }

    exChange_select(cur , next){
        if(cur !=0)
        this.qui_list[cur-1].firstElementChild.style.background = "yellowgreen";

        this.qui_list[next-1].firstElementChild.style.background = "red";
    }

    next_clear(cur){
        if(cur == 0 ) return;
        this.qui_list[cur-1].firstElementChild.style.background = "yellowgreen"
    }

    start(idx, data, cur){
        this.game_update(idx , data);
        this.next_clear(cur);
    }


}