class Produto{
//vamos adicionar um método construtor para instanciar... 
 constructor(){
//definição de id que começaram com 0
this.id = 0;
this.nomeProduto = '';
this.valor = 0;
 }
 adicionar(){
alert("O método adicionar foi ativado")
 }
excluir(){
alert("Item deletado")
}
}
var produto = new  Produto();
