function exibir(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);
    let num4 = parseFloat(document.getElementById('num4').value);

    let media = ((num1+num2+num3+num4)/4).toFixed(2);
    let resposta="";
    
    if (media >= 6) {
        resposta("Aprovado");
    } 
    else if (media < 4) {
        resposta("Reprovado.");
    }
    else (media >=4 && media < 6);{
        resposta("IFA");
    }

    document.getElementById("resultado").innerText="A nota do aluno é " + media + ". Você está " + resposta + "!";

}