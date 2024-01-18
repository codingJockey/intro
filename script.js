function showPopup(){
    document.getElementById("contactPopup").style.visibility="visible";
    document.getElementById("screen").style.filter="blur(20px)";
    document.getElementById("screen").style.transition="1s";
}

function closePopup(){
    document.getElementById("contactPopup").style.visibility="hidden";
    document.getElementById("screen").style.filter="blur(0px)";
}

function sentToastNotification() {
    var Notification = document.getElementById('MessageSent');
    Notification.style.visibility = "visible";
    setTimeout(function () {
        Notification.style.visibility = "hidden";
    }, 2500);
}
