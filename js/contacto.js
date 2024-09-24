const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const subject = document.getElementById("subject");
const tel = document.getElementById("tel");
const email = document.getElementById("email");
const empezar = document.getElementById("contactoBtn");
const numeroWhats = 41774362685;

console.log(empezar)
//user agent
const ua = navigator.userAgent;

//si es cel app si es pc web.app
const enviar = (e) => {
  e.preventDefault();

  if (nombre.value === "" || subject.value === "" || email.value === "" ) {
    console.log("vacio");
  } else {
    empezar.classList.remove("desactivado");
  }
  //comprobar si es cel o pc
  let whats = "";
  if (/Mobile/i.test(ua)) {
    whats = `https://api.whatsapp.com/send/?phone=${numeroWhats}&text=`;
  } else {
    whats = `https://web.whatsapp.com/send/?phone=${numeroWhats}&text=`;
  }

  envio(whats, nombre.value, apellido.value, subject.value, tel.value, email.value);
};

const envio = (whats, nombre, apellido, subject, tel, email) => {
  const url = `
  ${whats}Name:%20${nombre} ${apellido},%0aSubject:%20${subject},%0aPhone:%20${tel},%0aEmail:%20${email}.
  `;

  console.log(url)
  empezar.href = url;
};

nombre.addEventListener("focusout", enviar);
apellido.addEventListener("focusout", enviar);
subject.addEventListener("focusout", enviar);
tel.addEventListener("focusout", enviar);
email.addEventListener("focusout", enviar);