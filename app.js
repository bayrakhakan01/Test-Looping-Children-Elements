
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
btn.addEventListener('click', ()=>{
    const parents = document.querySelector('.parents').children;
    for (let i = 0; i < parents.length; i++) {
        if (parents[i].classList.contains('hide')===true) {
            if (i===parents.length-1) {
                console.log('canim daha item yok basma');
                break
            }
             
            parents[i].classList.remove('hide');
            parents[i+1].classList.add('hide');
            break;
        } 
        
    }
})

btn2.addEventListener('click', ()=>{
    const parents = document.querySelector('.parents').children;
    for (let i = 0; i < parents.length; i++) {
        if (parents[i].classList.contains('hide')===true) {
            if (i===0) {
                console.log('canim daha item yok basma');
                break
            }
            parents[i].classList.remove('hide');
            parents[i-1].classList.add('hide');
            break;
        } 
        
    }
    
})

