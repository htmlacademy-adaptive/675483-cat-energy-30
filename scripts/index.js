var e=document.querySelector(".main-nav"),n=document.querySelector(".main-nav__toggle"),a=document.querySelector(".main-footer__map-nojs");e.classList.remove("main-nav--nojs");n.addEventListener("click",()=>{e.classList.contains("main-nav--closed")?(e.classList.remove("main-nav--closed"),e.classList.add("main-nav--opened")):(e.classList.add("main-nav--closed"),e.classList.remove("main-nav--opened"))});a.style.zIndex="0";
