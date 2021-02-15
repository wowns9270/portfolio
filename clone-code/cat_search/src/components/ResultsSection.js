
import Card from './Card.js';
import {lazyLoad} from '../utill/lazyLoad.js';


export default class ResultsSection {

    constructor({$target , data}){

        console.log($target);

        this.data = data;

        this.section = document.createElement('section');
        this.section.className = 'results-section';

        $target.appendChild(this.section);

        this.render();
        lazyLoad();
    }

    setState(data){
        this.data = data;
        this.render();
        lazyLoad();
    }


    render(){
        console.log("여기야");
        if(!this.data) return;

        this.section.innerHTML = "";

        if(this.data.length > 0){
            const cardContainer = document.createElement('div');

            cardContainer.className = 'card-container';

            this.data.map(cat =>{
            
                new Card({
                    $target : cardContainer,
                    data : cat
                });
            });

            this.section.appendChild(cardContainer);
        }
    }
}