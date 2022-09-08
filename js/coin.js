let icon = document.querySelector('#bar');
let side = document.querySelector('header');

icon.onclick = () => {
    icon.classList.toggle('fa-times');
    side.classList.toggle('active');
}
window.onscroll = () => {
    icon.classList.toggle('#bar');
    side.classList.remove('active');
}

