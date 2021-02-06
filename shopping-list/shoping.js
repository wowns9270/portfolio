const items = document.querySelector('.items');
const plus_click = document.querySelector('.click');
const inin = document.querySelector('.inin');
let btn  = document.querySelectorAll('.btn');

plus_click.addEventListener('click' , funcc = () =>{
    const shoping_list = document.querySelectorAll('.item');
    let check = false;

    shoping_list.forEach( ( r , i ) =>{
          if(r.firstChild.innerText === inin.value){
              check = true;
         }
     })

    if (inin.value !== '' && check === false) {
        const para = document.createElement('article');
        para.setAttribute('class', 'item');

        const list_name = document.createElement('div');
        list_name.setAttribute('class' , 'list_name');
        list_name.innerHTML = inin.value;

        const btn2 = document.createElement('button');
        btn2.setAttribute('class', `btn`);
        btn2.innerHTML = 'clear';

        para.appendChild(list_name);
        para.appendChild(btn2);
        items.appendChild(para);


        btn2.addEventListener('click', () =>{
            const p = btn2.parentNode;
            items.removeChild(p);
        })
    }
    inin.value = '';
})

addEventListener('keydown', (event) =>{
    if(event.keyCode == 13){
        funcc();
        inin.value ='';
    }
})



