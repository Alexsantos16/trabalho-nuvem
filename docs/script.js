function adicionarProduto(){
const titulo=document.getElementById('titulo').value;
const preco=document.getElementById('preco').value;
const descricao=document.getElementById('descricao').value;
const imagem=document.getElementById('imagem').value;

if(!titulo||!preco||!descricao||!imagem){
alert('Preencha todos os campos!');
return;
}

const card=document.createElement('div');
card.className='card';

card.innerHTML=`
<img src="${imagem}" alt="${titulo}">
<h3>${titulo}</h3>
<p class="preco">R$ ${preco}</p>
<p>${descricao}</p>
<button class="excluir">Remover</button>
`;

card.querySelector('.excluir').onclick=()=>card.remove();

document.getElementById('lista').appendChild(card);

titulo.value='';
document.getElementById('titulo').value='';
document.getElementById('preco').value='';
document.getElementById('descricao').value='';
document.getElementById('imagem').value='';
}