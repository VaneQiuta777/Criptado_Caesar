// "CIFRADO, DESCIFRADO CAESAR":

// Definir la función del cifrado
function cipher (phrases, n) { 
  
  var result = "" // Nombrar como un string, la variable result.
  // Definir que no acepte campos vacíos por el usuario.
  if(phrases===""){
    alert("Campo vacio")}
  // Hacer un ciclo repetitivo para recorrer la frase
  for (var i = 0; i < phrases.length; i++) {
    // Crear una variable letters para colocar el código ASCII de cada letra  
    var letters = phrases.charCodeAt(i);
      // Determinar un parámetro para letras mayúsculas, según el código ASCII
    if (65 <= letters && letters <=  90) {
      result += String.fromCharCode((letters - 65 + n) % 26 + 65);} 
      // Determinar un parámetro para letras minúsculas, según el código ASCII
    else if (97 <= letters && letters <= 122) {
      result += String.fromCharCode((letters - 97 + n) % 26 + 97);}  
      // Definir un mensaje error, si el usuario no escribe letras.
    else {
    alert("mensaje de error");
    break;
    }
  }
  return result;
}

console.log(cipher (prompt ("Escriba una frase para cifrar"), 33))

// Definir la función del descifrado
function decipher (phrases, n) { 
  // Nombrar una variable result, como un string
  var result = "";
    // Definir que no acepte campos vacíos por el usuario.
  if(phrases===""){
    alert("Campo vacio")
  }
  // Hacer un ciclo repetitivo para recorrer la frase
  for (var i = 0; i < phrases.length; i++) {
    // Crear una variable letters para colocar el código ASCII de cada letra  
    var letters = phrases.charCodeAt(i);
    // Determinar un parámetro para letras mayúsculas, según el código ASCII
      if (65 <= letters && letters <= 90) {
        result += String.fromCharCode((letters + 65 - n) % 26 + 65);}  
              // Determinar un parámetro para letras minúsculas, según el código ASCII
      else if (97 <= letters && letters <= 122){
        result += String.fromCharCode((letters + 97 + n) % 26 + 97);}  
      // Definir un mensaje error, si el usuario no escribe letras.
      else {
        alert ("mensaje de error");
        break;
      }
  }
  return result;
}

console.log(decipher(prompt ("Escriba una frase para descifrar"), 33))