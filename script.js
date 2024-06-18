const links = document.querySelectorAll('.card a');
console.log(links);


links.forEach(element=>{
    element.addEventListener('click',(e)=>{
            let card = e.target.closest('.card');
            card.classList.add('greenCard');
    })
})