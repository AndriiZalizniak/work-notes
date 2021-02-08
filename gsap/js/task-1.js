const tl = new TimelineMax();
const list = document.querySelector('.list');
const countEl = list.children.length;
const halfEl = Math.abs(countEl / 2);
// const centerEl = halfEl
// const centerChild = list.
var x = document.querySelector(".list").childElementCount;
console.log(halfEl);
console.log(x);


tl
  .fromTo(".box", 1, { 
    scale: 0.1,
    stagger: {
      amount: 1, 
      grid: 'auto',
      // from: "center"
    }
  }, {
    scale: 1, 
    ease: "power1.inOut",
    stagger: {
      amount: 1, 
      grid: 'auto',
      from: 'center'
    }
  })
