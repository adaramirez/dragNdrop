$(window).resize(function() {
    var imgWidth = $(this).width();
    // Container has a responsive height
    $('.receiver-cont').height(imgWidth / 2);
  }).resize();

function allowDrop(event) {
    event.preventDefault();
}


function drag(event) {
    event.dataTransfer.setData('text', event.target.id);
    $(event.target.id).parent().remove();
}


function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(data));
    console.log(drop);
}




// var dropTarget = document.querySelector('.source'); //esto es el contenedor donde están las imagenes
// var draggables = document.querySelectorAll('.yellow'); //llama a todas las imagenes

// console.log(dropTarget);
// console.log(draggables);


// for (let i = 0; i < draggables.length; i++) {
//     draggables[i].addEventListener('dragstart', function (ev) {
//         ev.dataTransfer.setData('srcId', ev.target.id);
//     });
// }


// dropTarget.addEventListener('dragover', function (ev) {
//     ev.preventDefault();
// });

// dropTarget.addEventListener('drop', function (ev) {
//     ev.preventDefault();
//     let target = ev.target;
//     let droppable = target.classList.contains('container');
//     let srcId = ev.dataTransfer.getData('srcId');

//     if (droppable) {
//         ev.target.appendChild(document.getElementById(srcId));
//     }

//     console.log(srcId);
// });




