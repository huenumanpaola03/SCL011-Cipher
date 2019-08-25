window.cipher = {
  encode: (userMessage, numberKey) => {
    /* Acá va tu código */
    //declaro mi funcion encode trayendo los valores que el usuario va a ingresar

      // declaro result vacio 
          let result="";
          //recorro mi mensaje del indice 0
        for (let i = 0; i < userMessage.length ; i++) { 
        
         //declaro mi ascii que sera igual al mensaje con charcodeat
         //el cual es un método devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.
          let ascii = userMessage.charCodeAt(i)
          //mayusculas  los parametros en el codigo ascii son entre los 65 y 90
          if (ascii >= 65 && ascii <= 90) {
            result +=String.fromCharCode((ascii - 65 + parseInt(numberKey)) % 26 + 65)
          }
          //minusculas parametros entre 97 y 122
          if (ascii >= 97 && ascii <=122){
            result +=String.fromCharCode((ascii - 97 + parseInt(numberKey)) % 26 + 97)
          }
          //espacios es igual al parametro 32
          if (ascii==32) {
            result +=String.fromCharCode((ascii-32 + numberKey)%1 +32)
          }
          //number entre los numeros 48 y 57
          if(ascii >= 48 &&ascii <=57){
            result += String.fromCharCode(((ascii - 48 +parseInt(numberKey) + 20) % 10 )+48) 
          }
       
        }
        // retorna resultado basado en la condicion ascii 
        return result;
      },
     
    

  decode: (userMessage, numberKey) => {
    /* Acá va tu código */
    let result="";
        
    for (let i = 0; i < userMessage.length; i++) { 
      
    let ascii = userMessage.charCodeAt(i);

      if (ascii >= 65 && ascii <= 90) {
        result += String.fromCharCode((ascii - 90 - parseInt(numberKey)) % 26 + 90);
      }
      if (ascii >= 97 && ascii <= 122){
        result += String.fromCharCode((ascii - 122 - parseInt(numberKey)) % 26 + 122);
      }
      if (ascii==32) {
        result +=String.fromCharCode((ascii-32 + numberKey)%1 +32)
      }
      if(ascii >= 48 &&ascii <=57){
        result += String.fromCharCode(((ascii - 48 +parseInt(numberKey) + 20) % 10 )+48) 
      }
     
  }
  return result;

}


  }