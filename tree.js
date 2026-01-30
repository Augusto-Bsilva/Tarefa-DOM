function enviar_nota(){
    let input_nota = document.querySelector(".input_nota");
    let valor_bruto = input_nota.value.replace(',', '.');
    let nota = parseFloat(valor_bruto);
    if(isNaN(nota) || nota < 0 || nota > 10){
        alert("A nota digitada é invalida, por favor digite uma nota válida");
        return;
    }
    let escopo_notas = document.querySelector("#lista_notas");
    let nova_nota = document.createElement("li");
    nova_nota.innerText = nota;
    nova_nota.className = "nota_adicionada";
    input_nota.value = "";
    escopo_notas.appendChild(nova_nota);
}

function calcular_media(){
    let notas_section = document.querySelectorAll(".nota_adicionada");
    let quantidade = notas_section.length;
    if(quantidade === 0){
        alert("Por favor insira uma nota");}
    let soma = 0;

    for(let i = 0; i < quantidade; i++){
        soma += Number(notas_section[i].innerText);
    }
    let media = soma / quantidade;
    let resposta = document.querySelector("#resultado");
    resposta.innerText = "A média é: " + media.toFixed(2);
}

let btn_enviar = document.querySelector("#btn_enviar");
btn_enviar.addEventListener("click", enviar_nota);

let btn_calcular = document.querySelector("#btn_calcular");
btn_calcular.addEventListener("click", calcular_media);