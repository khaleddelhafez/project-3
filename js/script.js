var copybtn = document.querySelectorAll(".copybtn")
var copytitle = document.querySelectorAll(".copytitle")
copybtn.forEach (function(btn){
    btn.onclick = function(){
    alert("تم نسخ النص."); 
}
}) 

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})