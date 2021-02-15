


import { api } from './api/theCatAPI.js';
import ResultsSection from './components/ResultsSection.js';
import SearchingSection from './components/SearchingSection.js'

export default class App {

    constructor($target){

        const data = [];

        const searchingSection = new SearchingSection({
            $target,
            onSearch: async keyword => {

                console.log("이거 맞아?");
                const response = await api.fetchCats(keyword);

                if(!response.isError){
                    console.log("맞다고?");
                    resultsSection.setState(response.data);
                }
                else{
                    console.log("틀리데?")
                    error.setState(response.data);
                }
            },
            
        });

        const resultsSection = new ResultsSection({
            $target,
            data,
        
        });

    }

    render(){

    }

}