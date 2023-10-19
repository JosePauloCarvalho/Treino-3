let num = document.querySelector ('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100) {
        return true
    } else{
        return false
    }
}
function inLista (n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else{
        return false
    }
}

function add() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item= document.createElement('Option')
        item.text= `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('valor invalido ou ja encontrada')
    }
    num.value=''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('adicione valores antes de finalizar')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores [pos]
            if(valores[pos]> maior)
            maior = valores [pos]
            if(valores [pos]< menor)
            menor = valores [pos]
        }
        media = soma / tot
        res.innerHTML=''
        res.innerHTML+= `<p> <strong> Ao todo, temos ${tot} numeros cadastrados. </strong> </p>`
        res.innerHTML+= `<p> <strong> O Maior valor foi ${maior} </strong> </p>`
        res.innerHTML+= `<p> <strong> O Menor valor foi ${menor}</strong> </p>`
        res.innerHTML+= `<p> <strong> A soma dos valores foi ${soma}</strong> </p>`
        res.innerHTML+= `<p> <strong> A Media dos valores foi ${media}</strong> </p>`
    }
}