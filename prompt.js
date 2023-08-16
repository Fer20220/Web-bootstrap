const BtnSum = document.querySelector("#BtnSum")

BtnSum.addEventListener('click', function(){
    console.log("le has dado click al boton")
    var numeroUno = parseInt(prompt("Ingrese el primer número"))

    if(!isNaN(numeroUno)){
        var numeroDos = parseInt(prompt("ingrese el segundo número"))

        if(!isNaN(numeroDos)) {
            var suma = numeroUno + numeroDos

            alert("La suma de " + numeroUno + " y el " + numeroDos + " es igual a " + suma)
        } else { alert("El numero ingresado no es valido")}
    } else { alert("EL numero ingresado no es valido")}
})

