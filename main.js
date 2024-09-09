let p = document.querySelectorAll('p');
let color_changer_btn = document.querySelector('.color_changer_btn');
let bold_on_off_btn = document.querySelector('.bold_on_off_btn');
let show_hide_btn = document.querySelector('.show_hide_btn');



function randomColor() {
    return Math.floor(Math.random() * (255 - 0 + 1) + 0)
}

color_changer_btn.addEventListener('click' , ()=>{
    p.forEach((p)=> {
        p.style.color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
    })
});

bold_on_off_btn.addEventListener('click' , ()=>{
    p.forEach((p)=>{
        p.classList.toggle('bold');
    })
});

show_hide_btn.addEventListener('click' , ()=>{
    p.forEach((p)=>{
        p.classList.toggle ('D-none');
    })
});


