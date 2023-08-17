//блок 4
let offset = 0;
const sliderLine = document.querySelector('.block4-perfectPair');

document.querySelector('.btn-next').addEventListener('click', function () {
    offset = offset + 1200;
    if (offset > 1100) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.btn-prev').addEventListener('click', function () {
    offset = offset - 1200;
    if (offset < 0) {
        offset = 1100;
    }
    sliderLine.style.left = -offset + 'px';
});
