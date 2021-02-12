'use strict'

export default class Start_popup {

    constructor(){

        this.start_popup =  document.querySelector('.start_popup');
        this.start_btn = document.querySelector('.start');


        this.start_btn.addEventListener('click', ()=>{

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

    async setting(){
        this.datas =  await fetch('./data/data.json')
        this.data_json = await this.datas.json();   
        return this.data_json.items;
    }


}