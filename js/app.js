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









