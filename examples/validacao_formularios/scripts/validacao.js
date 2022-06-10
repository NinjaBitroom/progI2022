let form1 = document.forms['meuForm']
/*alert(form1['uf'].value)*/

form1.onsubmit = function() {
    event.preventDefault
    if(form1['nome'].value.length <= 5) {
        alert('Digite mais que 5 caracteres!!!')
        return false
    }

    let esportes = document.getElementsByClassName('esp')
    let achei = false
    console.log(Object.values(esportes))
    Object.values(esportes).forEach(function(e) {
        if (e.checked) {
            achei = true
        }
    });
    if(!achei) {
        alert('Marque pelo menos um esporte')
        return false
    }
    //validação select
    let est = form1['uf']
    if (est.value == 'Escolher...') {
        alert('Selecione um estado!')
        return false
    }
}