function maiuscula() {
    if (event.keyCode == 13) {
        alert('Teste')
    }
    caixa.value = caixa.value.toUpperCase()
    quant.innerText = caixa.value.length
}