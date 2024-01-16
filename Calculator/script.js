
function input_value(digit) {
    document.getElementById("output").innerText += digit;
}

function clr() 
{
      document.getElementById("output").innerText = "0";
      document.getElementById("history").innerText = "";
}


function result() {
    var res = document.getElementById("output").innerText;
          document.getElementById("history").innerText = res;
    if (res) {
        document.getElementById("output").innerText = eval(res);
    }
}


function backspace() {
         var bs = document.getElementById("output").innerText;
         document.getElementById("output").innerText = bs.substring(0, bs.length - 1);
        if (bs=="") {
            document.getElementById("output").innerText = "0";
        }
}