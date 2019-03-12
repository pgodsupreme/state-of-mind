// Paste your JavaScript code here
function ece(midterms) {
  alert("rip my grades");
  alert("rip my life");
  alert("rip");
  if (midterms) 
    return true;
  else
    return false;
}

var depression = true;
var feeling;
var state;
while (depression) { 
  feeling = prompt("Are you depressed?","yes");
  if (feeling === "NO NO NO NO")
    depression = false;
  else {
    feeling = prompt("Do you have midterms?","yes");
    if(feeling === "No midterms!") {
        state = false;
    } else {
        state = true;
    }
    if (depression) {
    depression = ece(state);
    }
  }
}
