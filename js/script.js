function soma(n1, n2) {
    return n1 + n2
}

function subtracao(n1, n2) {
    return n1 - n2
}

function multiplicacao(n1, n2) {
    return n1 * n2
}

function divisao(n1, n2) {
    return n1 / n2
}


function mostrarnome() {
    let nome = prompt("Qual o seu nome?")
    alert("olá, " + nome)
}

function arearetangulo(base, altura) {
    return base * altura
}

function areacirculo(raio) {
    return 3.1 * (raio * raio)  //pi x raio^2
}

// a função para delimitar o input do calc
// function functioncalc(tecla) {
//     console.log('entrou', tecla.which, tecla)
//     let calcinput = document.getElementById('caculadorainput');
//     /* if para aceitar apenas numeros, enter, operadores de conta e o ponto */
//     if ((tecla.which >= 96 && tecla.which <= 105)|| tecla.which == 46 || (tecla.which >= 48 && tecla.which <= 57) || (tecla.which == 8) || tecla.which == 193 || tecla.which == 111||tecla.ctrlKey == true && !()) {

//         console.log('true')
//     } else {

//         return false
//     }

// }