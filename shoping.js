const items = document.querySelector('.items');
const click = document.querySelector('.click');
const inin = document.querySelector('.inin');

let btn  = document.querySelectorAll('.btn');

function gogo(){
    const list = document.querySelectorAll('.item');
    let check = false;

    for (let i = 0; i < list.length; i++) {

        if (list[i].firstChild.textContent.trim() === inin.value) {
            check = true;
        }
    }

    if (inin.value !== '' && check === false) {
        const para = document.createElement('div');
        para.setAttribute('class', 'item');

        para.innerHTML = inin.value;

        const btn2 = document.createElement('button');
        btn2.setAttribute('class', `btn`);
        btn2.innerHTML = '휴지통';

        para.appendChild(btn2);
        items.appendChild(para);


        btn2.addEventListener('click', () =>{
            
            const p = btn2.parentNode;
            items.removeChild(p);

        })

    }
    inin.value = '';
}

click.addEventListener('click' , gogo)

addEventListener('keydown' , (event) =>{

    if(event.keyCode == 13){
        gogo();
        inin.value ='';
    }
})



