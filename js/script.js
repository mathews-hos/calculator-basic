
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
function functioncalc(event) {
    console.log(event);
    let calcinput = event.srcElement;
    formula = calcinput.value
    tecla = event.key
    itens = { termos: {}, operador: {} }
    const operadores = "/*-+"
    const ponto = ".,"
    // console.log('entrou', tecla, event)
    /* if para aceitar apenas numeros, enter, operadores de conta e o ponto */
    if ((parseInt(tecla) >= 0 && parseInt(tecla) <= 9) || operadores.includes(tecla) || ponto.includes(tecla)) {

        console.log('sim')
    } else {
        console.log("não");
        return false
    }


}
function calcular(event) {
    console.log(event);
    const calcinput = document.getElementById("caculadorainput");
    a = new KeyboardEvent("keypress", {
        key: "3",
        target: calcinput,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        value: "3",
        repeat: false,
        isComposing: false,
        composed: true,
        code: "Digit3"
    })
    calcinput.dispatchEvent(a)
    console.log(a);
    console.log("foi")
    calcinput.focus()

}