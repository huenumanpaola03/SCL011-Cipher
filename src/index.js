/*Acá va tu código*/
/*const containerbox = document.getElementById("container1");
const modeofuse = document.getElementById("mododeuso");
const numberKey = document.getElementById("key");
const resultText = document.getElementById("Result");
const userMessage = document.getElementById("Message");
const btnAscii = document.getElementById("ascii");
const btninformacion = document.getElementById("informacion");*/



/*document.getElementById("containerascii").style.display = "none";
btnAscii.addEventListener("click", () =>{
let asciidiv = document.getElementById("containerascii");
        if (asciidiv.style.display === 'none') {
          asciidiv.style.display = 'block';
        } else {
          asciidiv.style.display = 'none';
        }
      })*/

const btnCode = document.getElementById("code");
btnCode.addEventListener("click", () => {
        let userMessage = document.getElementById("Message").value;
        let numberKey = document.getElementById("key").value;
        document.getElementById("Result").innerHTML = window.cipher.encode(userMessage, numberKey);
    });

const btnDecode = document.getElementById("decode");
    btnDecode.addEventListener("click", () => {
        let userMessage = document.getElementById("Message").value;
         let numberKey = document.getElementById("key").value;
         document.getElementById("Result").innerHTML = window.cipher.decode(userMessage, numberKey);
        });
        
const btnClean = document.getElementById("clean");        
btnClean.addEventListener("click",()=> {
            document.getElementById("key").value = "";  
            document.getElementById("Message").value = "";  
            document.getElementById("Result").value = "";   
        });

    
/*document.getElementById("mododeuso").style.display = "none";
btninformacion.addEventListener("click", () =>{
let modeofuse = document.getElementById("mododeuso");
        if (modeofuse.style.display === 'none') {
          modeofuse.style.display = 'block';
        } else {
          modeofuse.style.display = 'none';
        }
      })*/

const btnCopy = document.getElementById("copiar");
btnCopy.addEventListener("click",()=> {
const resultText = document.getElementById("Result");
resultText.select();
document.execCommand("copy");
});

