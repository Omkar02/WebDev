const changeWidth = () => {
    const val = `${document.querySelector('.width-slider').value}`;
    document.querySelector('.js-order').style.order = val;
    document.querySelector('.js-range-val').innerHTML = val;
};

document.querySelector('.width-slider').addEventListener('change', changeWidth);

document.querySelector('.add').addEventListener('click', () => {
    let curVal = Number.parseInt(document.querySelector('.width-slider').value, 10);
    document.querySelector('.width-slider').value = Math.max(-2, curVal + 1)
    changeWidth()
});

document.querySelector('.sub').addEventListener('click', () => {
    let curVal = Number.parseInt(document.querySelector('.width-slider').value, 10);
    document.querySelector('.width-slider').value = Math.min(curVal - 1, 5);
    changeWidth()
});