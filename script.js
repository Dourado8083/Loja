class Produto{
//vamos adicionar um método construtor para instanciar... 
 constructor(){
//definição de id que começaram com 0
this.id = 1;
this.arrayProdutos = [];
 }
 salvar(){
let produto = this.lerDados();
if(this.validaCampos(produto)) {
    this.adicionar(produto);
    
}
this.listaTabela();
 }
 listaTabela(){
  let tbody = document.getElementById('tbody');
  tbody.innerText = ''; //para não vir duplicado na lista
  for(let i = 0; i< this.arrayProdutos.length; i++) {
      //lengt para sabe a quantidade de elementos que temos dentro da variavel
      let tr = tbody.insertRow(); //para inserir a linha criar uma nova linha
      let td_id = tr.insertCell(); //inserrir uma nova coluna e atribuir a coluna em td
      let td_produto = tr.insertCell(); 
      let td_acoes = tr.insertCell();

      td_id.innerText = this.arrayProdutos[i].id;
      td_produto.innerText = this.arrayProdutos[i].nomeProduto;
      td_valor.innerText = this.arrayProdutos[i].preco;
      td_id.classList.add('center'); //para centralizar o id...

    let imgEdit = document.createElement('img');
    imgEdit.src = 'img/edit.svg';
    td_acoes.appendChild(imgEdit); //esta dizendo que a imagem é filha do td ..
    //appendchild faz isso coloca um como filha da outra
  }   
 }
 adicionar(produto){
this.arrayProdutos.push(produto); //vai adicionar os campos dentro do array
this.id++;
}
 lerDados(){
let produto = {}
produto.id = this.id;
produto.nomeProduto = document.getElementById('produto').value;
produto.preco = document.getElementById('preco').value;
return produto; 
 }
 validaCampos(produto){
let msg = '';
if(produto.nomeProduto ==''){
msg += '- Informe o nome do Produto \n';
} 
if(produto.preco ==''){
    msg += '- Informe o Preço do Produto \n';
    } 
if(msg !=''){
  alert(msg);
  return false
    }
    return true;
     }
Cancelar(){

}
}
var produto = new  Produto();
