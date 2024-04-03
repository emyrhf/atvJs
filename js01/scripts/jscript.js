/*Criar os objetos para os elementos que serão manipulados: */
const obj_num_largura = document.querySelector('#num_largura');
const obj_num_altura = document.querySelector('#num_altura');
const obj_div_poligono = document.querySelector('#div_poligono');
const obj_p_perimetro = document.querySelector('#p_perimetro');

/*Adicionar os eventos para chamar a função: */
obj_num_largura.addEventListener("change", funRedimensionaPoligono);
obj_num_altura.addEventListener("change", funRedimensionaPoligono);

/*Declarar as funções para executar as ações: */
function funRedimensionaPoligono() {
    if (obj_num_largura.value < 50 || obj_num_largura.value > 100 || obj_num_altura.value < 50 || obj_num_altura.value > 100) {
    alert('Valores inválidos!')
    }
}