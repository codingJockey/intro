function showPopup(){
    document.getElementById("contactPopup").style.visibility="visible";
    document.getElementById("screen").style.filter="blur(20px)";
    document.getElementById("screen").style.transition="1s";
}

function closePopup(){
    document.getElementById("contactPopup").style.visibility="hidden";
    document.getElementById("screen").style.filter="blur(0px)";
}
