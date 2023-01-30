const root = document.documentElement

const input = document.querySelectorAll('.color-box > input')
const range = document.querySelector('.booth-slider')

range.addEventListener('input', handleSlider)

function handleSlider(e) {
    let value = e.target.value
    console.log("Rotation in degree =", value)
    root.style.setProperty('--slider', value)
}

input.forEach( input => {
    input.addEventListener('input', handleInputChange)
})

function handleInputChange(e){
    let value = e.target.value
    let inputId = e.target.parentNode.id
    let inputBg = `--bg-${inputId}`
    console.log(value, inputBg, inputId)
    root.style.setProperty(inputBg, value)
}