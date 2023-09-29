
const toggle_btn=document.getElementById('effect');
const bar=document.querySelector('.side-bar');
const content=document.querySelector('.content');


toggle_btn.addEventListener('click',()=>{
   bar.classList.toggle('close');
    content.classList.toggle('zoom');
});
