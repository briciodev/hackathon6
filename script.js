const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav_list');

hamburger.addEventListener('click', () => 
    navList.classList.toggle('active'));