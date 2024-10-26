let list=document.querySelector(".nav-Items");
let button=document.querySelector(".fa-duotone");
function toggleList() {
    list.classList.toggle("active");
    button.classList.toggle("fa-bars")
    button.classList.toggle("fa-x")
}
 
 const carousel = document.querySelector(" .carousel"),
 firstImg = carousel.querySelectorAll("img")[0];
 arrowIcons = document.querySelectorAll(".wrapper i");
 
 let isDragstart = false, prevPageX,prevScrollLeft;
 let firstImgWidth = firstImg.clientWidth + 14;
 let scrollwidth = carousel.scrollWidth - carousel.clientWidth;
 const showHideIcon = () => {
arrowIcons[0].style.disply = carousel.scrollLeft==0 ? "none" : "block";
arrowIcons[1].style.disply = carousel.scrollLeft==scrollwidth ? "none" : "block";
 }

 arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
   carousel.prevScrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
   setTimeout(() => {
    showHideIcon(), 60;
   }, timeout);
 });
 });
 const dragstart = (e) => {
     //updatating global variables value on mouse down event
     let isDraStart = true;
     carousel.classList.add("dragstart");
     prevPageX=e.pageX;
     prevScrollLeft = carousel.scrollLeft;
 }
 
 
 const dragging = (e) => {
     if(!isDragstart) return;
     e.perventDefault();
     let positionDiff = e.pageX - prevPageX;
     carousel.scrollLeft =prevScrollLeft -  positionDiff;
 }
 
 const dragstop = () => {
     isDragstart = false;
 
 }
 
 carousel.addEventListener("mousedown", dragstart);
 carousel.addEventListener("mousemove", dragging);
 carousel.addEventListener("mouseup", dragstop);