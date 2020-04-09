const body = document.getElementById('app')
const celsius = document.getElementById('celsius')
const fahrenheit = document.getElementById('fahrenheit')
const submit = document.getElementById('btn')

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
        fahrenheit.value = 'Invalid value'
        celsius.value = 'Required value' 
    } else {
        resultF ? fahrenheit.value = `${resultF} °F` : 'Invalid value'
    }
}

body.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault()
        submit.click()
    }
})

// Aqui ocorre um bug onde não copia o que está escrito no input.
// Buscando soluções pra corrigir.
function myFunction() {
    fahrenheit.setSelectionRange(0, 99999)
    fahrenheit.select()
    document.execCommand('copy')
    alert(`Grau convertido para Fahrenheit °F: ${fahrenheit.value}`)
}