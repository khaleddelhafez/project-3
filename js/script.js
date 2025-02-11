var copybtn = document.querySelectorAll(".copybtn")

copybtn.forEach (function(btn){
    btn.onclick = function(){
    alert("تم نسخ النص.")
}
}) 