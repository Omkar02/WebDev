document.addEventListener("DOMContentLoaded", function(){
    const $container = document.querySelector('.container');
    const $dis_direction = document.querySelector('.dis-direction');
    const $dis_align_content = document.querySelector('.dis-align-content')

    let flexDirectionValue = 'row';
    let alignContentValue = 'strech';

    const flexDirButton = document.querySelectorAll('.flex-direction-buttons button');
    for (let b of flexDirButton) {
        b.addEventListener('click', (e) => {
            flexDirectionValue = e.target.dataset.value;
            $container.style.flexDirection = flexDirectionValue;
            $dis_direction.innerText = flexDirectionValue;
            });
        }
    const alignContentButtons = document.querySelectorAll('.align-content-buttons button')
    for (let b of alignContentButtons) {
        b.addEventListener('click', (e) => {
            alignContentValue = e.target.dataset.value;
            $container.style.alignContent = alignContentValue;
            $dis_align_content.innerText = alignContentValue;
            })
        }
    }
);

