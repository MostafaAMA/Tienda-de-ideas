var sections = document.querySelectorAll("section");
var h2 = document.querySelectorAll("h2");

h2.addEventListener('click', () => {
    if (sections[i].style.display === 'none'){
        sections[i].style.display = 'block';
    }else {
        sections[i].style.display = 'none';
    }
})