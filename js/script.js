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

function functioncalc(tecla) {
    console.log('entrou')
    let calcinput = document.getElementById('caculadorainput');
    if (tecla.which >= 96 && tecla.which <=105) {
        console.log('true')
        return true
    }

}