'use strict'

import Game from './Quiz.js';
import EndPopUp from './End_popup.js';

export default class Start_popup {

    constructor(){

        this.start_popup =  document.querySelector('.start_popup');
        this.start_btn = document.querySelector('.start');


        this.start_btn.addEventListener('click',()=>{
            this.onClick && this.onClick();
            this.hide();
            
        })
    }

    setClickListener(onClick){
        this.onClick = onClick;
    }

    

    hide(){
        this.start_popup.classList.add('pop_up_hide');
    }

    show(){
        this.start_popup.classList.remove('pop_up_hide');
    }

}