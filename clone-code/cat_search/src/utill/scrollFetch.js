

import {throttling} from './throttle.js';

const throttler = throttling();


function scrollFetch(fetchData){

    window.addEventListener('scroll' , () =>{

        throttler.throttle(()=>{


            // console.log("Activate Scroll Event");
            // console.log("window.pageYOffset" , window.pageYOffset);
            // //페이지 스크롤 y축으로 얼마나 했는지
            
            // console.log("document.body.scrollHeight" , document.body.scrollHeight);
            // console.log("document.body.offsetHeight" , document.body.offsetHeight);
            // console.log("document.documentElement.clientHeight" , document.documentElement.clientHeight);
            // console.log("document.documentElement.scrollHeight" , document.documentElement.scrollHeight);
            // console.log("document.documentElement.offsetHeight" , document.documentElement.offsetHeight);
            // console.log(getScrollTop())
            // console.log(getDocumentHeight() - window.innerHeight);

            if(getScrollTop() < getDocumentHeight() - window.innerHeight - 0.5) return;
            fetchData();
        }, 700);
    })

    //1941 2525-583 = 
}

function getScrollTop() {

    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode|| document.body).getScrollTop;

}

function getDocumentHeight() {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
        body.scrollHeight , body.offsetHeight,
        html.clientHeight , html.scrollHeight 
    );
}

export {scrollFetch };