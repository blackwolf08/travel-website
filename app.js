Splitting();
var scroll = new SmoothScroll('a[href*="#"]');
let example = document.getElementById('example');

inView('.example')
    .on('enter', el => {
        el.style.opacity = 1;
        console.log("inview");
    })
    .on('exit', el => {
        el.style.opacity = 0.5;
        console.log("out view");
    });

{/* <a data-scroll href="#bazinga">Anchor Link</a>
...
<div id="bazinga">Bazinga!</div> */}