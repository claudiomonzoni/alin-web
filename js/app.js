
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