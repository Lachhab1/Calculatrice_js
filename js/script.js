let nbr = document.querySelectorAll('.nbr');
let operation = document.querySelectorAll('.op');
let btnEgale = document.querySelector('.egal');
let nbr1 = document.querySelector('.nbr1');
let op = document.querySelector('.op-span');
let nbr2 = document.querySelector('.nbr2');
let affichage = document.querySelector('.display-screen');
let del = document.querySelector('.del');
let result = 0;

function somme(nbr1,nbr2){
    return nbr1 + nbr2;
}
function division(nbr1,nbr2){
    if(nbr2 == 0){
        return "Cannot divide by zero";
    }
    else{
        return nbr1 / nbr2;
    }
}
function multiplication(nbr1,nbr2){
    return nbr1 * nbr2;
}
function sousTraction(nbr1,nbr2){
    return nbr1 - nbr2;
}
function modulo(nbr1,nbr2){
    return nbr1 % nbr2;
}
function operate(nbr1,nbr2){
    if(op.innerHTML == '*'){
        result = multiplication(nbr1,nbr2);
        return result;
    }
    else if(op.innerHTML == '+'){
        result = somme(nbr1,nbr2);
        return result;
    }
    else if(op.innerHTML == '/'){
        result = division(nbr1,nbr2);
        return result;
    }
    else if(op.innerHTML == '-'){
        result = sousTraction(nbr1,nbr2);
        return result;
    }
    else if(op.innerHTML == '%'){
        result = modulo(nbr1,nbr2);
        return result;
    }
}
btnEgale.addEventListener("click",function(){
    if (nbr2.innerHTML != "") {
        result = operate(+(nbr1.innerHTML),+(nbr2.innerHTML));
    }else {
        result = nbr1.innerHTML;
    }
    affichage.innerHTML = result;
});
nbr.forEach(value => {
    value.addEventListener("click",function(){
        if(op.innerHTML == '*' || op.innerHTML == '-' || op.innerHTML == '+' || op.innerHTML == '/' || op.innerHTML == '%'){
            nbr2.innerHTML += value.innerHTML;
        }
        else{
            nbr1.innerHTML += value.innerHTML;
            if (nbr1.innerHTML[0] == 0){
                nbr1.innerHTML = +(nbr1.innerHTML);
            }
        }
    })
});
operation.forEach(value => {
    value.addEventListener("click",function(){
        if(op.innerHTML === "+" || op.innerHTML === "*" || op.innerHTML === "-" || op.innerHTML === "/" || op.innerHTML === "%"){
            if(result.innerHTML != "Cannot divide by zero"){
                if(nbr1.innerHTML == 0 ){
                op.innerHTML = value.innerHTML;
            }
            else{
                result = operate(+(nbr1.innerHTML),+(nbr2.innerHTML));
                affichage.innerHTML = result;
                document.querySelector('.nbr1').innerHTML = "";
                document.querySelector('.nbr2').innerHTML = "";
                document.querySelector('.op').innerHTML = "";
                nbr1.innerHTML = result;
                op.innerHTML = value.innerHTML;
            }
            }
        }else if(nbr1.innerHTML == 0){
            switch(value.innerHTML){
                case "+":
                break;
                case "/":
                break;
                case "*":
                break;
                case "%":
                break;
                case "-":
                    nbr1.innerHTML = "";
                    op.innerHTML = "-";
                break;
            }
        }
        else{
            op.innerHTML = value.innerHTML;
            }
    })
});

document.querySelector('.ac').addEventListener("click",function(){
    nbr1.innerHTML = "0";
    nbr2.innerHTML = "";
    op.innerHTML = "";
    affichage.innerHTML = "";
});
//slice(debut,fin) extract a portion of the array object
del.addEventListener("click",function(){
    if((nbr2.innerHTML != "")){
        nbr2.innerHTML = nbr2.innerHTML.slice(0,-1);
    }
    else if(nbr2.innerHTML == "" && op.innerHTML != ""){
        op.innerHTML = op.innerHTML.slice(0,-1);
    }
    else if(op.innerHTML == "" && nbr2.innerHTML == ""){
        nbr1.innerHTML = nbr1.innerHTML.slice(0,-1);  
    }
}); 