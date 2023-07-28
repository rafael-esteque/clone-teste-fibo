//FUNÇÃO DO EXERCÍCIO 01//
function calculaMedia () {
    let t1 = parseFloat(document.getElementById('trabalho1').value);
    let t2 = parseFloat(document.getElementById('trabalho2').value);
    let p1 = parseFloat(document.getElementById('prova1').value);
    
    if (isNaN(t1) || isNaN(t2) || isNaN(p1) || t1 < 0 || t1 > 10 || t2 < 0 || t2 > 10 || p1 < 0 || p1 > 10) {
        alert("Por favor, informe notas válidas.");
    } else {
        let media = ((t1 + t2 + p1) / 3).toFixed(2);

        if (media < 5) {
            alert('Reprovado.')
        } else if (media >= 4.9 && media <= 6.9) {
            alert('Em recuperação.')
        } else {
            alert('Aprovado.');
        }
        console.log(media);
        document.getElementById('resultadoExUm').innerHTML = `Média: ${media}`;
    }

}

function resetarExUm() {
    document.getElementById('trabalho1').value = "T1";
    document.getElementById('trabalho2').value = "T2";
    document.getElementById('prova1').value = "P1";
    document.getElementById('resultadoExUm').innerHTML = "Média:";
}

//FUNÇÃO DO EXERCÍCIO 02
function somaPares () {
    let resultadoExDois = document.getElementById("resultadoExDois");
    let soma = 0;
    let contagem = 0;
    let numero = 2;

    while (contagem < 50) {
        soma += numero;
        numero += 2;
        contagem++;
    }

    resultadoExDois.innerHTML = soma;

}

function resetarExDois() {
    document.getElementById('resultadoExDois').innerHTML = "Resultado:";
}


//FUNÇÃO DO EXERCÍCIO 03
let intervalId;

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  const clockElement = document.getElementById('clock');
  clockElement.textContent = timeString;
}

function startRelogio() {
  updateClock();
  intervalId = setInterval(updateClock, 1000);
  setTimeout(stopRelogio, 10000);
}

function stopRelogio() {
  clearInterval(intervalId);
  const clockElement = document.getElementById('clock');
  clockElement.textContent = 'BOOOM!';
}


//FUNÇÕES DO EXERCÍCIO 04
function opcoesHospedagem () {
    let opcao = prompt("Digite apenas o número de uma das opções:\n1. Fazer checkin;\n2. Fazer checkout;\n3. Estender hospedagem;\n4. Sair");

    switch (opcao) {
        case '1':
            alert("Seja bem-vindx!")
            break;
        case '2':
            confirmacao = prompt('Tem certeza que quer ir embora?\n1. Sim\n2. Não')
            if (confirmacao == 1) {
                alert("Até a próxima!")
                break;
            } else if (confirmacao == 2) {
                alert("Se desejar, comece este diálogo novamente no botão Rodar.");
                break;
            } else {
                alert("Resposta inválida.")
            }
            break;
        case '3':
            estender = prompt('Por quantos dias gostaria de estender sua hospedagem?');
            if (!isNaN(estender) && estender > 0) {
                alert(`Sua estadia foi estendida por ${estender} dias.`);
            } else {
                alert("Resposta inválida.")
            }
            break;
        case '4':
            alert("Ok.")
            break;
        default:
            alert("Resposta inválida.");
    }
}

//FUNÇÕES DO EXERCÍCIO 05
function compararCarbono() {
    let elementoUm = parseInt(prompt("Digite a quantidade de carbono do primeiro elemento."));
    let elementoDois = parseInt(prompt("Digite a quantidade de carbono do segundo elemento."));

    if (isNaN(elementoUm) || isNaN(elementoDois)) {
        alert("É necessário informar as quantiidades de carbono de dois elementos.")
    } else {
        elementoDois += 2;
        console.log(elementoUm)
        console.log(elementoDois)
        if (elementoUm == elementoDois) {
            alert("As quantidades de carbono são iguais, considerado o ajuste de +2 no segundo elemento")
        } else {
            alert("As quantidades de carbono são diferentes, considerado o ajuste de +2 no segundo elemento")
        }
    }
}

//FUNÇÕES DO EXERCÍCIO 05

function paresAteCem() {
    const resultadoExSeis = document.getElementById("resultadoExSeis");
    let listaPares = "";

    let i = 2;
    while (i < 102) {
        listaPares += i + "<br>";
        i +=2;
    }

    resultadoExSeis.innerHTML = listaPares + "FIM";
}

function resetarExSeis() {
    document.getElementById('resultadoExSeis').innerHTML = "Resultado:";
}



//FUNÇÕES DO EXERCÍCIO 07
function calopsita() {
    var idade = parseInt(prompt("Digite sua idade"));

    while (isNaN(idade)) {
        idade = idade = parseInt(prompt("Digite sua idade"));
    }

    alert(`A idade digitada foi ${idade}!`);
}


//FUNÇÕES EXERCÍCIO 08
function calculaAumentos() {
    alert('Não consegui colocar a solução no HTML em tempo :(\nPor favor, veja a solução no console via node.')
//    let salarioInicial = 1000;
//    let salarioInicialUsuario = document.getElementById('salarioInicialExOito').value;
//    if (salarioInicialUsuario != "") {
//        salarioInicial = document.getElementById('salarioInicialExOito').value;
//    }
//    console.log(`Controle: Salário inicial: R$${salarioInicial}`);

    const contratadoEm = 2013;
    const anoAtual = 2023;

    const salarioInicial = 1000;
    let salario = salarioInicial;
    let percentualAumento = 1.5 / 100;

    console.log(`Ano: ${contratadoEm}`);
    console.log(`Salário: R$${salario.toFixed(2)}`);

    for (let ano = contratadoEm + 1; ano <= anoAtual; ano++) {
    if (ano >= 2017) {
        percentualAumento = percentualAumento * 2;
    }
    salario = salario + (salario * percentualAumento);
    console.log(`\n\nAno: ${ano}`);
    document.getElementById("resultadoExOito").innerHTML = `\n\nAno: ${ano}`;
    console.log(`Percentual de aumento ${percentualAumento * 100}%`);
    document.getElementById("resultadoExOito").innerHTML = `Percentual de aumento ${percentualAumento * 100}%`;
    console.log(`Salário: R$${salario.toFixed(2)}`);
    }
    const percentualAumentoTotal = (salario / salarioInicial) * 100;
    console.log(`\n\nEm comparação ao seu salário inicial, houve um aumento de ${percentualAumentoTotal.toFixed(2)}%`);
    
//    document.getElementById("resultadoExOito").innerHTML = `Salário em 2013: R$ ${salarioInicial},00`;
//    document.getElementById("resultadoExOito").innerHTML = `Salário em 2014: R$ ${salarioInicial},00`;
}

function resetarExOito() {
    document.getElementById('salarioInicialExOito').value='1000';
    document.getElementById('anoAtual').reset(); //SE DER TEMPO, CHECAR POR QUE ANO NÃO ESTÁ RESETANDO
}



//FUNÇÕES EXERCÍCIO 09
function geraFibo(m) {
    m = parseFloat(document.getElementById('numeroUsuarioExNove').value);

    if (m < 1) {
        document.getElementById('resultadoExNove').textContent = "Por favor, forneça um número positivo."
    } else if (isNaN(m)) {
        document.getElementById('resultadoExNove').textContent = "Por favor, forneça um número."
    } else if (!Number.isInteger(m)) {
        document.getElementById('resultadoExNove').textContent = "Por favor, forneça um número inteiro."
    } else if (m === 1) {
        document.getElementById('resultadoExNove').textContent = "Apenas 1? Ok... O primeiro número da sequência de Fibonacci é 1."
    } else if (m === 2) {
        document.getElementById('resultadoExNove').textContent = "Apenas 2? Ok... Os dois primeiros números da sequência de Fibonacci são 1 e 1."
    } else if (m >= 3) {
        let sequencia = [0, 1];
        for (let i = 2; i <= m; i++) {
            let proximoFibo = sequencia[i - 1] + sequencia[i - 2];
            sequencia.push(proximoFibo);
            sequenciaFinal = sequencia.slice(1);
        }

        document.getElementById('resultadoExNove').textContent = sequenciaFinal.toString();
        console.log(sequencia);
    }
}

function resetarExNove() {
    document.getElementById('numeroUsuarioExNove').value='';
    document.getElementById('resultadoExNove').innerHTML = "Resultado:";
}


//FUNÇÕES EXERCÍCIO 10

function encontrarPrimosAteN(n) {
    n = parseFloat(document.getElementById('numeroUsuarioExDez').value);
    
    let primosEncontrados = [];

    if (n < 0) {
        document.getElementById('resultadoExDez').textContent = "Por favor, forneça um número positivo e maior que 1.";
        return [];
    } else if (n === 1) {
        document.getElementById('resultadoExDez').textContent = "Por favor, forneça um número maior que 1.";
        return [];
    } else if (n === 0) {
        document.getElementById('resultadoExDez').textContent = "Por favor, forneça um número maior que 1."
        return [];
    } else if (isNaN(n)) {
        document.getElementById('resultadoExDez').textContent = "Por favor, forneça um número."
    } else if (!Number.isInteger(n)) {
        document.getElementById('resultadoExDez').textContent = "Por favor, forneça um número inteiro."
    }



    let numeros = new Array(n + 1).fill(true);

    numeros[0] = false;
    numeros[1] = false;

    // Loop para marcar os múltiplos de cada número primo encontrado
    for (let i = 2; i * i <= n; i++) {
        if (numeros[i]) {
            for (let j = i * i; j <= n; j += i) {
                numeros[j] = false;
            }
        }
    }

    // Editando o array com os primos encontrdos
    for (let i = 2; i <= n; i++) {
        if (numeros[i]) {
            primosEncontrados.push(i);
        }
    }

    document.getElementById('resultadoExDez').textContent = primosEncontrados.toString();
    console.log(primosEncontrados);

    return primosEncontrados;
}

function resetarExDez() {
    document.getElementById('numeroUsuarioExDez').value='';
    document.getElementById('resultadoExDez').innerHTML = "Resultado:";
}
