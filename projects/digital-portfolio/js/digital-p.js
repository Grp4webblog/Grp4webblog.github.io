// for clicking arrow
let arrow = document.querySelectorAll('.arrow');
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  });
}

// for toggling sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");

sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});

let view = document.querySelectorAll(".info-link");
for (var i = 0; i < view.length; i++) {
  view[i].addEventListener("click", (e)=>{
    let light = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling;
    light.classList.toggle("expand");
    // insert 'view more' button opacity and pointer events
  });
}

let trivia = document.querySelectorAll(".trivia-title");
for (var i = 0; i < trivia.length; i++) {
  trivia[i].addEventListener("click", (e)=>{
    e.target.style.opacity = 0;
    e.target.style.pointerEvents = "none";
    e.target.nextElementSibling.style.opacity = 1;
    e.target.nextElementSibling.childNodes[3].style.opacity = 0.7;
    // console.log(e.target.nextElementSibling.childNodes[3]);
  });
}
