
import {setItem} from '../utill/sessionStorage.js'

export default class SearchBar {

    constructor({$target , keywords , onSearch , onRandom}){
        this.recent = keywords;
        this.section = document.createElement('section');
        this.section.className = 'searching-section';

        this.onSearch = onSearch;
        this.onRandom = onRandom;

        $target.appendChild(this.section);

        this.render();
        this.focusOnSearchBox();
    
    }

    focusOnSearchBox(){

        const searchBox = document.querySelector('.search-box');

        searchBox.focus();
    }

    addRecentKeyword(keyword){

        if(this.recent.includes(keyword)) return;

        if(this.recent.length === 5) this.recent.shift();
        // [1,2,3] => [2,3] 배열의 첫 번째 요소 제거

        this.recent.push(keyword);
        setItem('keywords' , this.recent);

        this.render();

    }

    searchByKeyword(keyword){
        if(keyword.length == 0) return ;

        this.addRecentKeyword(keyword);
        this.onSearch(keyword);
    }

    deleteKeyword(){
        const searchBox = document.querySelector('.search-box');
        searchBox.innerText= '';
    }

    


    render(){
        this.section.innerHTML ='';

        const randomBtn = document.createElement('span');
        randomBtn.className = 'random-btn';
        randomBtn.innerText = '🐱';

        const wrapper = document.createElement('div');
        wrapper.className = 'search-box-wrapper';

        const searchBox = document.createElement('input');
        searchBox.className = 'search-box';
        searchBox.placeholder = '고양이를 검색하세요.';

        //searchBox.addEventListener('focus' , this.del)
        const recentKeywords = document.createElement('div');
        recentKeywords.className = 'recent-keywords';

        this.recent.map(keyword =>{

            const link = document.createElement('span');
            link.className = 'keyword';
            link.innerText = keyword;

            link.addEventListener('click', () =>{
                this.onSearch(keyword);
            })

            recentKeywords.appendChild(link);
        })


        wrapper.appendChild(searchBox);
        wrapper.appendChild(recentKeywords);
        this.section.appendChild(randomBtn);
        this.section.appendChild(wrapper);
        
        randomBtn.addEventListener('click', this.onRandom);
        searchBox.addEventListener('focus', this.deleteKeyword);
        searchBox.addEventListener('keyup', event =>{
            if(event.keyCode === 13){
                this.searchByKeyword(searchBox.value);
            }
        })
    }
    
}