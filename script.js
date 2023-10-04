//Almacenando lo que el usuario ingrese
let textArea = document.querySelector(".text-area");
//Almacenando el mensjae encriptado
let mensaje = document.querySelector(".mensaje");

//Lógica del botón encriptar
function btnEncriptar() {
    let textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
    let textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function copiar() {
    mensaje.select();
    document.execCommand("copy");
}

function encriptar(stringEncriptada) {
    //Llaves de encriptación
    let matrizCodigo = [
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringEncriptada = stringEncriptada.toLowerCase();

    /*
    El siguiente ciclo va a recorrer el input del usuario (el cual es un string) y va a verificar si "incluye" cada vocal.
    */
    for(let i = 0; i<matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            //El método .replaceAll( ) reemplaza el primer parámetro por el segundo. Si no coloco el All entonces solo se va a remplazar el primer caracter.
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    //Llaves de encriptación
    let matrizCodigo = [
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    /*
    El siguiente ciclo va a recorrer el input del usuario (el cual es un string) y va a verificar si "incluye" cada vocal.
    */
    for(let i = 0; i<matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            //El método .replaceAll( ) reemplaza el primer parámetro por el segundo. Si no coloco el All entonces solo se va a remplazar el primer caracter.
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}