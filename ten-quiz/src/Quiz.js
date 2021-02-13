'use strict'

import * as EndPopUp from './End_popup.js';

export default class Quiz{

    constructor(){

    this.data = [];
    this.idx = 0;
    this.score = 0;
    this.current_pick = 0;
    this.select_num = 0;
    

    this.quiz = document.querySelector('.quiz');
    this.quiz_page = document.querySelector('.quiz_list');
    this.next_btn = document.querySelector('.next');
    this.quiz_number = document.querySelector('.quiz_number');
    this.qui_list = document.querySelectorAll('.qui');


    this.quiz_page.addEventListener('click', event =>{
        this.quiz_page_click(event)
    });

    this.next_btn.addEventListener('click', ()=>{

        this.correct_check();

        if(this.idx == 7){
            this.onClick && this.onClick(this.score);
        }
        else
            this.next_btn_click();
    })

    }
    quiz_page_click = (event) =>{
        const td = event.target.closest('.qui');
        if(td === null) return;
        //console.log(td.dataset.key);
        this.select_num = td.dataset.key;
        this.exChange_select();
        this.current_pick = this.select_num;
    }

    game_update(){
        this.quiz_number.textContent = this.idx+1;
        this.quiz.textContent = this.data[this.idx].question;
    
        this.qui_list.forEach( (item, i) =>{    
            item.lastElementChild.textContent =
            this.data[this.idx].answers[i];          
        })
    }

    exChange_select(){
        if(this.current_pick !=0)
        this.qui_list[this.current_pick-1].firstElementChild.style.background = "yellowgreen";

        this.qui_list[this.select_num-1].firstElementChild.style.background = "red";
    }

    next_clear(){
        if(this.current_pick == 0 ) return;
        this.qui_list[this.current_pick-1].firstElementChild.style.background = "yellowgreen"
    }

    start(){
        this.idx = 0;
        this.score = 0;
        this.game_update();
        this.next_clear();
    }
    correct_check(){
        if(this.current_pick == this.data[this.idx].correct){
            this.score++;
        }
    }

    next_btn_click = () =>{
        if(this.current_pick == 0) return;

        this.idx++;  
        this.next_clear();
        this.game_update();
        this.current_pick = 0;
    }

    setClickListener(onClick){
        this.onClick = onClick;
    }

    async setting(){

        if(this.data.length !== 0) return; 

        this.datas =  await fetch('./data/data.json')
        this.data_json = await this.datas.json();   

        this.data = this.data_json.items;

    }

}