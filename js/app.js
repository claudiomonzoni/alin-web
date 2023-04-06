
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
tl.from ("#der h3, #der input, #der select, #der a",{
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


  window.$ = require('jquery');

$(document).ready(function () {

$("#contactoBtn").click(function (e) {

  var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var email = $("#email").val();
    var tel = $("#tel").val();
    var curso = $("#cursos").val();
    var edo = $("#edo").val();
    var ciudad = $("#ciudad").val();

    $("#msj").empty(); // To empty previous error/success message.
    // Checking for blank fields.

    if (nombre == "" || apellido == "" || curso == ""|| tel == "" ||  email == "") {
      alert("Por favor llena los campos marcados con * al final");
    } else {
      

      $.post(
        "contacto.php",
        {
          nombre1: nombre, apellido1: apellido, email1: email, tel1: tel,  curso1: curso, edo1: edo, ciudad1: ciudad
        },
        function (data) {
          $("#msj").append(data); // Append returned message to message paragraph.
          if (
            data ==
            "Gracias, pronto un asesor se pondra en contacto contigo 😎"
          ) {
            $("#formu").reset(); // To reset form fields on success.
          }
        }
      );
    }

    e.preventDefault();
  });

})
// cargar modulos solo por secciones
// switch (document.location.pathname)
// {
//   case '/seccion':
//   break

//   default:
// }