// Empty JS for your own code to be here
function validateForm() {
  var x = document.querySelector('#nombre');
  if (x.value == "") {
    alert("Debe colocar el nombre");
    return false;
  }

  const firstPassword = document.querySelector('#password');
  if(firstPassword.value.length < 8 || firstPassword.value.length > 20){
    alert("La clave debe ser mayor a 8 y menor a 20 caracteres");
    return false;
  }

  const mail = document.querySelector("#mail");
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail.value))
  {
    return (true)
  } else {
    alert("Email NO VALIDO!")
    return (false)
  }
    
}
