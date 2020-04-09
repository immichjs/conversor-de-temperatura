const body = document.getElementById('app')
const celsius = document.getElementById('celsius')
const fahrenheit = document.getElementById('fahrenheit')
const submit = document.getElementById('btn')

celsius.value = 0
fahrenheit.value = `${32} °F`

submit.onclick = () => {
    const resultF = (celsius.value * 9/5) + 32
    !isNaN(resultF) ? fahrenheit.value = `${resultF} °F` : fahrenheit.value = 'Valor inválido'
}

body.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault()
        submit.click()
    }
})