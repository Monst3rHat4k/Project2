const patrat = document.querySelector('.patrat')
const patrat2 = document.querySelector('.patrat2')

patrat.addEventListener('click',(ev)=>{
    patrat.classList.toggle('switch')
})

patrat2.addEventListener('click', (ev) =>{
    patrat2.classList.toggle('switch2')
})