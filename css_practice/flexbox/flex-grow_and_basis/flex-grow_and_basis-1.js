const changeWidth = () => {
    const newValue = `${document.querySelector('.width-slider').value}px`;
    document.querySelector('.js-variable-container').style.width = newValue;
    document.querySelector('.js-width-value').innerHTML = newValue;
}

// ** below is required when slider is moved manually
document.querySelector('.width-slider').addEventListener('change', changeWidth);

document.querySelector('.width-plus').addEventListener('click', () => {
    let num = document.querySelector('.width-slider').value
    document.querySelector('.width-slider').value = Math.min(
        600,
        Number.parseInt(num, 10) + 10
    );
    changeWidth();
});

document.querySelector('.width-minus').addEventListener('click', () => {
    let num = document.querySelector('.width-slider').value
    document.querySelector('.width-slider').value = Math.max(
        300,
        Number.parseInt(num, 10) - 10
    );
    console.log(num)
    changeWidth();
});