const patrat = document.querySelector('.patrat')

patrat.addEventListener('click', (ev) => {
    patrat.classList.toggle('patrat__alp')
    patrat.classList.toggle('patrat')
})