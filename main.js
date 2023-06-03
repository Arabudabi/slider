
const slider = document.querySelector('.slider_wrapper');
const leftBtn = document.querySelector('.slider_left-btn');
const rightBtn = document.querySelector('.slider_right-btn');
const dots = document.querySelector('.slider-dots')

let state=0;
let.prevDot = null;


for (let i = 0;i<slider,children.length;i++){
    const dot = document.createElement("button");
    dot.classList.add("slider_dot");
    dot.dataset.index = i
    if (i === state){
        dot.classList.add("current");
        prevDot=dot;
    }
   dots.append(dot); 
   dot.addEventListener("click",() => {
    prevDot?.classList.remove("current");
    dot.classList.add("current");
    prevDot=dot;
    state=i;
    slider.style.setProperty("--x",state);
   });
}

rightBtn.addEventListener('click',function () {
    prevDot.classList.remove('current');
    prevDot = dots[state];
    state = (state +1) % slider.children.length;
    dots.children[state].classList.add('current');
    prevDot = dots.children[state];
    slider.style.setProperty('--x',state);
})

leftBtn.addEventListener('click',function () {
    if (state === 0) {
    state = slider.children.length -1;
    } else {
        state--;
    }
    prevDot.classList.remove('current')
    dots.children[state].classList.add('current');
    prevDot = dots.children[state];
    slider.style.setProperty('--x',state);
});
