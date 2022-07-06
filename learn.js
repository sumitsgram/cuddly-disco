var myNodelist = document.getElementsByTagName('li');
var i;
for (i = 0 ; i < myNodelist.length ; i++) {
    var button = document.createElement("button");
    var txt = document.createTextNode("\u00D7") ;
    button.className = "close"
    button.appendChild(txt);
    myNodelist[i].appendChild(button);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}