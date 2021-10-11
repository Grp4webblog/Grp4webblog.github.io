var oneZero = 0;
var imgOneZero = 0;
function showHidden() {
  var tospawn = event.srcElement.nextElementSibling;
  if (oneZero == 0) {
    tospawn.style.maxHeight = "50vh";
    oneZero = oneZero + 1;
    event.srcElement.style.marginTop = "2vw";
  } else if (oneZero == 1) {
    tospawn.style.maxHeight = "0";
    oneZero = oneZero - 1;
    event.srcElement.style.marginTop = "0";
  }
}
