const body = document.getElementById('app')
const celsius = document.getElementById('celsius')
const fahrenheit = document.getElementById('fahrenheit')
const submit = document.getElementById('btn')
const clipboard = document.getElementById('clipboardButton')
const clipboardLegend = document.getElementById('clipboardLegend')

celsius.value = 0
fahrenheit.value = `${32} °F`
submit.value = 'Converter'

celsius.onclick = () => {
    fahrenheit.value = ''
    celsius.value = ''
}

submit.onclick = () => {
    const resultF = (celsius.value * 9/5) + 32
    if (celsius.value === '' || isNaN(resultF)) {
            fahrenheit.value = 'Valor inválido'
            celsius.value = 'Valor Obrigatório' 
    } else {
        resultF ? fahrenheit.value = `${resultF} °F` : 'Valor inválido'
    }
}

body.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault()
        submit.click()
    }
})

clipboard.onclick = () => {
    fahrenheit.select()
    document.execCommand('copy')
    clipboardLegend.innerHTML = `Copiado: ${fahrenheit.value}`
}

clipboard.onmouseout = () => {
    setTimeout(() => {
        clipboardLegend.innerHTML = 'Copiar'
    }, 250)
}