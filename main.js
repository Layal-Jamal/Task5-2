let input = document.getElementById("input-field");
let transfrom = document.getElementById("transfrom");
let transto = document.getElementById("transto");
let result = document.getElementById("result");
let button = document.getElementById("btn");


button.onclick = () => {
    if(transfrom.value == transto.value) {
        result.innerHTML=`${input.value} ${transto.value}`;
        input.value = ""; 
    } else if (transfrom.value =="km" && transto.value == "m"){
        result.innerHTML = `${input.value * 1000} ${transto.value}`;
        input.value = "";
    }else if (transfrom.value == "km" && transto.value =="cm"){
        result.innerHTML = `${input.value*100000} ${transto.value}`;
        input.value = "";
    }else if (transfrom.value == "m" && transto.value == "km"){
        result.innerHTML = `${input.value /1000} ${transto.value}`;
        input.value="";
    }else if (transfrom.value == "m" && transto.value == "cm"){
        result.innerHTML = `${input.value *100} ${transto.value}`;
        input.value = "";
    }else if (transfrom.value =="cm" && transto.value == "km") {
        result.innerHTML = `${input.value /100000} ${transto.value}`;
        input.value = "";
    }else if (transfrom.value = "cm" && transto.value == "m"){
        result.innerHTML = `${input.value /100} ${transto.value}`;
        input.value = "";
    }
}
