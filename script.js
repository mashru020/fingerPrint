'use strict';

console.log("hello");
const hand = document.getElementById('hand');

hand.addEventListener('click',function(e){
    console.log('clicked on hand');
    console.log(e);
    const id = e.target.getAttribute('alt');
    console.log(id);
    document.querySelector(`.${id}`).style.opacity=1;
 });
 