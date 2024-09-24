
// importo gsap
import gsap from 'gsap'

let tl = gsap.timeline({repeat:0})
tl.from(".logo",
{
  x:200,
  opacity: 0,
  duration: 1 //1 segundo
})
tl.from ("#izq",{
  x:400,
  opacity: 0,
  duration: 1 
}, "-=.7")
tl.from ("#der h3, #der input, #der select, #der button",{
  stagger:0.1,
  y:100,
  opacity: 0,
  duration: 1 
}, "-=.5")
tl.from ("#social",{
  stagger:0.1,
  x:300,
  opacity: 0,
  duration: 1 
}, "-=.5")


function bg() {
  // 'use strict';

  // utilitiy
  var randum = function(max) {
    return Math.round(Math.random() * max);
  }
  var hexify = function(x) {
    return ('0' + parseInt(x).toString(16)).slice(-2);
  }
  var randex = function() {
    return '#' + hexify(randum(255)) + hexify(randum(255)) + hexify(randum(255));
  };

  var blender = function(c1, c2) {
    var p1 = randum(100),
      p2 = randum(100),
      deg = randum(360),
      mode = Math.round(Math.random());
    c1 = c1 || randex();
    c2 = c2 || randex();
    return {
      blend: (mode > 0 ? 'radial-gradient(circle at ' + p1 + '% ' + p2 + '%, ' + c1 + ', ' + c2 + ')' : 'linear-gradient(' + deg + 'deg, ' + c1 + ', ' + c2 + ')'),
      c1: c1,
      c2: c2
    };
  };

  // needed for transitioning the blends
  var a = blender();
  var b = blender(a.c1);
  var style = document.createElement('style');
  var body = document.querySelector('body');
  var createStyles = function(style, a, b){
    style.innerHTML = ''
    style.innerHTML += '.a {background: '+a.blend+'}';
    style.innerHTML += '.a::after {background: '+b.blend+'}';
  };
  
  body.appendChild(style);

  createStyles(style, a, b);

  var bgTime = setInterval(function() {
    // a = blender();
    b = blender();
    createStyles(style, a, b);
  }, 6000);

}
bg()

// const handleSubmit = (event) => {
//   event.preventDefault();

//   const myForm = event.target;
//   const formData = new FormData(myForm);
  
//   fetch("/", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: new URLSearchParams(formData).toString(),
//   })
//     .then(() => console.log("Form successfully submitted"))
//     .catch((error) => alert(error));
// };

// document
//   .querySelector("form")
//   .addEventListener("submit", handleSubmit);

  // __________________________________

// cargar modulos solo por secciones
// switch (document.location.pathname)
// {
//   case '/seccion':
//   break

//   default:
// }