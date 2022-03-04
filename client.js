

console.log('js loaded!');
$(document).ready(handleReady);


function handleReady() {
    console.log('DOM/jquery loaded!');
     $('#redBtn').on('click', addRedBlock);
}