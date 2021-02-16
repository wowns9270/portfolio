
export default class SearchBar {

    constructor({$target , onSearch , onRandom}){
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

    searchByKeyword(keyword){
        if(keyword.length == 0) return ;

        this.onSearch(keyword);
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
        
        wrapper.appendChild(searchBox);
        this.section.appendChild(randomBtn);
        this.section.appendChild(wrapper);
        
        randomBtn.addEventListener('click', this.onRandom);
        
        searchBox.addEventListener('keyup', event =>{
            if(event.keyCode === 13){
                this.searchByKeyword(searchBox.value);
            }
        })
    }
    
}