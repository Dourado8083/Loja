class  Produto{
constructor(){
this.id = 1;
this.arrayProdutos = [];
}
salvar(){
let produto = this.lerDados();
if(this.validaCampo(produto)){ // podemos colocar (this.validaCampo(produto) == true) só que assim é a mesam coisa 
this.adicionar(produto); //só cai aqui se o usuario colocar todas as informações
}   
this.listaTabela(); //serve para mostrar para o usuario
this.cancelar(); //para quando salvar limpar os campos
}
listaTabela(){ //metodo para criar nossa linhas e colunas
let tbody = document.getElementById('tbody');
tbody.innerText = ''; //começa com 0 para não ficar repetindo sempre 
for (let i = 0; i < this.arrayProdutos.length; i++ ){ //para verificar quantos registros tem dentro do array,lenght agente sabe a quantidade de registro q tem dentro da tabela
let tr = tbody.insertRow(); //criar uma nova linha na tabela
 let td_id = tr.insertCell(); //vai inserir uma nova coluna 
 let td_produto= tr.insertCell();
 let td_valor = tr.insertCell();
 let td_acoes = tr.insertCell();
//vai mostrar o elementos já
 td_id.innerText = this.arrayProdutos[i].id;
 td_produto.innerText = this.arrayProdutos[i].nomeProduto;
 td_valor.innerText = this.arrayProdutos[i].preco;

 td_id.classList.add('center'); //para centralizar os elementos 

 let imgEdit = document.createElement('img');
 imgEdit.src = 'img/edit.png';
 let imgDelete = document.createElement('img');
 imgDelete.src = 'img/delete.png';
  td_acoes.appendChild(imgEdit);
  td_acoes.appendChild(imgDelete);//esta dizendo que a tag img vai colocar o td  como filha do img
}
}
adicionar(produto){
this.arrayProdutos.push(produto); //essa função push serve parar adicionar 1 ou mais elementos no final de um array,e retornar um novo comprimento dentro desse arra
this.id++;
}
lerDados(){
let produto = {} //esta dizendo que aqui é um objeto
produto.id = this.id;
produto.nomeProduto = document.getElementById('produto').value;
produto.preco = document.getElementById('preco').value;
return produto;
}
validaCampo(produto){
    let msg = '';
if(produto.nomeProduto ==''){
msg += '-Informe o Nome do Produto \n';
}
if(produto.preco ==''){
    msg += '-Informe o Valor do Produto \n';
    }
    if(msg != ''){
alert(msg)
return false
    }
    return true;
}
cancelar(){
document.getElementById('produto').value = '';
document.getElementById('preco').value = '';
 }
}
var produto = new Produto()
