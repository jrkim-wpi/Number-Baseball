document.getElementById("p1SubmitBtn").addEventListener("click",getP1In);
var p1In = new Array();

function getP1In(){
    var temp = document.getElementById("p1In").value;
    p1In = Array.from(temp);
    document.getElementById("p1Num").innerText=p1In; //"o,o,o,o";
    document.getElementById("p1SubmitBtn").disabled = true;
}

//change p1 p2 to list
//take guess
//deal with the guess