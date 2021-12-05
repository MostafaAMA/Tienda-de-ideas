var section = document.querySelectorAll("section");

section.addEventListener('click', () => {
    if (section.style.display === 'none'){
        section.style.display = 'block';
    }else {
        section.style.display = 'none';
    }
})