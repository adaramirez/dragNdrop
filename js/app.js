var dropTarget = document.querySelector('.source'); //esto es el contenedor donde están las imagenes
var draggables = document.querySelectorAll('.yellow'); //llama a todas las imagenes

console.log(dropTarget);
console.log(draggables);


for (let i = 0; i < draggables.length; i++) {
    draggables[i].addEventListener('dragstart', function (ev) {
        ev.dataTransfer.setData('srcId', ev.target.id);
    });
}


dropTarget.addEventListener('dragover', function (ev) {
    ev.preventDefault();
});

dropTarget.addEventListener('drop', function (ev) {
    ev.preventDefault();
    let target = ev.target;
    let droppable = target.classList.contains('container');
    let srcId = ev.dataTransfer.getData('srcId');

    if (droppable) {
        ev.target.appendChild(document.getElementById(srcId));
    }

    console.log(srcId);
});




