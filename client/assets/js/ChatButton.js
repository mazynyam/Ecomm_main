$('#submitButt').on("click", ()=> {
    $(this).toggleClass('active');
});
$(function() {
    $("#test").focus();
});
document.querySelector('.floating-btn').addEventListener('click', function(e) {
    e.target.closest('button').classList.toggle('clicked');
});