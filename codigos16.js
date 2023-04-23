

function analisar() {
    let txtn = document.getElementById('txtnum')
    let n = Number(txtn.value)
    if (txtn.value.length == 0 || n.value > 100 || n.value < 1) {
        alert('Digite um valor válido dentro dos parâmetros!')
    } else {
        if (lista_numeros.indexOf(n) != -1) {
            alert('O valor já foi selecionado!')
        } else {
            lista_numeros.push(n)
            let select = document.getElementById("numeros")
            let option = document.createElement("option")
            option.text = `Número ${n} adicionado`
            select.add(option)
            resultado.innerHTML = ''
        }
    }
}


function mostrar_resultado() {
    if (lista_numeros == 0) {
        alert('Sua lista está vazia. Adicione ao menos 1 valor para finalizar!')
    } else {
        let maior = lista_numeros[0]
        let menor = lista_numeros[0]
        let soma = 0
       
        for (let pos in lista_numeros) {
            soma += lista_numeros[pos]
            if (lista_numeros[pos] > maior) {
                maior = lista_numeros[pos]
            }
            if (lista_numeros[pos] < menor) {
                menor = lista_numeros[pos]
            }
        }
        let media = soma / Number(lista_numeros.length)
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${lista_numeros.length} números cadastrados.<p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        resultado.innerHTML += `<p>A soma de todos os valores é igual a ${soma}</p>`
        resultado.innerHTML += `<p>A média de todos os valores é igual a ${media}</p>`


        
    }

}
let resultado = document.getElementById('res')
let lista_numeros = []



