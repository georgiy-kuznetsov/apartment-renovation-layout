var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
button.addEventListener('click', function () {
    modal.classList.add('modal_active');
    setTimeout(closeModal, 5000);
});
function closeModal() {
    modal.classList.remove('modal_active');
};
close.addEventListener('click', closeModal());