const menuBtn = document.querySelector(".menu-burger");
const popup = document.querySelector(".popup");
const menu = document.querySelector(".menu__link").cloneNode(1);
const body = document.body;

menuBtn.addEventListener("click", btnHandler);

function btnHandler(e){
    e.preventDefault();
    menuBtn.classList.toggle("active");
    popup.classList.toggle("open");
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup() {
    popup.appendChild( menu );
    
}

