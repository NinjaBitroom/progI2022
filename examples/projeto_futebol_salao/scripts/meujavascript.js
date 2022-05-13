//alert('funcionou!!!');
let t1 = document.getElementById('titulo');

t1.innerHTML = 'Futsal';
t1.style.border = '2px solid blue';
t1.style.fontSize = '42pt';
t1.style.backgroundColor = 'salmon';

// segunda forma
if(descricao.innerHTML.length > 100) {
    alert('Você tem muito texto neste parágrafo!!');
    descricao.style.color = 'red';
};

// terceira forma
let l1 = document.querySelector('#linha1');
l1.style.backgroundColor = 'green';

let itens = document.getElementsByTagName('li');
console.log(itens[8]);

let itens_acoes = document.querySelectorAll('#lista_acoes li');
console.log(itens_acoes);
