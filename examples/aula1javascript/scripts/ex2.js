//let num1 = parseInt(prompt('Numero 1:'));
//let num2 = parseInt(prompt('Numero 2:'));
let num1 = 0;
let num2 = 0;
// alert(num1+num2);

//document.write(num1+num2);
texto.innerHTML = num1+num2;
texto.style.backgroundColor = 'gray';
texto.style.border = '1px solid brown';

// Selecionando o elemente h1 com o id "titulo"

// 1
document.getElementById('titulo').innerHTML = "Exemplo Javascript";

// 2
document.querySelector('#titulo').style.backgroundColor = "red";

// 3
titulo.style.color = 'white';

if (confirm('Tudo bem com você? ')) {
    alert('Que bom!')
} else {
    alert('Que pena!')
}

let estado = prompt('Informe seu estado: ');

switch (estado.toLowerCase()) {
    case "rondonia":
        alert("legal")
        break;
    case "bahia":
        alert("muito legal")
        break;
    case "rio grande do sul":
        alert('que frio')
        break;
    default:
        alert('voce é legal')
        break;
}