//mandamos a llamar a las funciones del tipo de cifrado
function cifrar(){
    var tipo = document.getElementById("tipo").value;
     
    if(tipo=="1a"){
        cifrar1a()
    }
    if(tipo=="1b"){
        cifrar1b()
    }
    if(tipo=="1c"){
        cifrar1c()
    }

}

//Cifrado de 1a AES
function cifrar1a(){
    let txt = document.getElementById("txt").value;
    let clave = document.getElementById("clave").value;

    if(clave.length!=16){
        swal("RECUERDA que la clave debe contener 16 caracteres");
    }else{
        var cifrado = CryptoJS.AES.encrypt(txt, clave);
        document.getElementById("txtcifrado").innerHTML=cifrado;
        descargarArchivo(generarTexto(cifrado), 'CifradoAES-1a-'+Math.random()+'.txt');
    }

}

//cifrado de 1b AES
function cifrar1b(){
    let txt = document.getElementById("txt").value;
    let clave = document.getElementById("clave").value;

    if(clave.length!=24){
        swal("RECUERDA que la clave debe contener 24 caracteres");
    }else{
        var cifrado = CryptoJS.AES.encrypt(txt, clave);
        document.getElementById("txtcifrado").innerHTML=cifrado;
        descargarArchivo(generarTexto(cifrado), 'CifradoAES-1b-'+Math.random()+'.txt');
    }

}

//cifrado de 1c AES
function cifrar1c(){
    let txt = document.getElementById("txt").value;
    let clave = document.getElementById("clave").value;

    if(clave.length!=32){
        swal("RECUERDA que la clave debe contener 32 caracteres");
    }else{
        var cifrado = CryptoJS.AES.encrypt(txt, clave);
        document.getElementById("txtcifrado").innerHTML=cifrado;
        descargarArchivo(generarTexto(cifrado), 'CifradoAES-1c-'+Math.random()+'.txt');
    }

}

//mandamos a llamar a los metodos para descifrar
function descifrar(){
    var tipo = document.getElementById("tipo").value;
     
    if(tipo=="1a"){
        descifrar1a()
    }
    if(tipo=="1b"){
        descifrar1b()
    }
    if(tipo=="1c"){
        descifrar1c()
    }

}

//descifrar tipo 1a AES
function descifrar1a(){
    let txt = document.getElementById("txtcifrado").value;
    let clave = document.getElementById("clave").value;

    if(clave.length!=16){
        swal("RECUERDA que la clave debe contener 16 caracteres");
    }else{
        var descifrado = CryptoJS.AES.decrypt(txt, clave);
        document.getElementById("txtdescifrado").innerHTML=descifrado.toString(CryptoJS.enc.Utf8);
        descargarArchivo(generarTexto(descifrado.toString(CryptoJS.enc.Utf8)), 'DescifradoAES-1a-'+Math.random()+'.txt');
    }

}

//descifrar tipo 1b AES
function descifrar1b(){
    let txt = document.getElementById("txtcifrado").value;
    let clave = document.getElementById("clave").value;

    if(clave.length!=24){
        swal("RECUERDA que la clave debe contener 24 caracteres");
    }else{
        var descifrado = CryptoJS.AES.decrypt(txt, clave);
        document.getElementById("txtdescifrado").innerHTML=descifrado.toString(CryptoJS.enc.Utf8);
        descargarArchivo(generarTexto(descifrado.toString(CryptoJS.enc.Utf8)), 'DescifradoAES-1b-'+Math.random()+'.txt');
    }

}

//descifrar tipo 1c AES
function descifrar1c(){
    let txt = document.getElementById("txtcifrado").value;
    let clave = document.getElementById("clave").value;

    if(clave.length!=32){
        swal("RECUERDA que la clave debe contener 32 caracteres");
    }else{
        var descifrado = CryptoJS.AES.decrypt(txt, clave);
        document.getElementById("txtdescifrado").innerHTML=descifrado.toString(CryptoJS.enc.Utf8);
        descargarArchivo(generarTexto(descifrado.toString(CryptoJS.enc.Utf8)), 'DescifradoAES-1c-'+Math.random()+'.txt');
    }

}


/*Usaremos una funcion parra descargar el archivo, dandole un nombre y generando un texto para la descarga*/
function descargarArchivo(contenidoEnBlob, nombreArchivo) {
    
    var reader = new FileReader();
    
    reader.onload = function (event) {
      
      var save = document.createElement('a');
      save.href = event.target.result;
      save.target = '_blank';
      
      save.download = nombreArchivo;
      var clicEvent = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
      });
      
      save.dispatchEvent(clicEvent);
      
      (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };
    
    reader.readAsDataURL(contenidoEnBlob);
  };

  //generamos el texto que nos ayuda a la descarga
function generarTexto(datos) {
    let texto = [];
    texto.push(datos);

    return new Blob(texto, {
        type: 'text/plain'
    });
};