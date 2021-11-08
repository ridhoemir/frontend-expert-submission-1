const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');



menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    menu.classList.toggle('toggle');
    event.stopPropagation();
});

function scrollFunction() {
    if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
    ) {
        drawer.classList.add("scrolled");
    } else {
        drawer.classList.remove("scrolled");
    }
}
window.onscroll = function () {
    scrollFunction();
};