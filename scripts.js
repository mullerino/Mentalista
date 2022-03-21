var vSorteado = parseInt(Math.random()*11);
var tentativas = 3;
var qTents = document.getElementById("tents");
qTents.innerHTML = tentativas;

function Adivinhar(){
    var vIns = document.getElementById("valorRec").value;
    var respt = document.getElementById("resultado");

    if(vIns>=0 && vIns<=10 && vIns){
        if(vIns==vSorteado && tentativas>0){
            tentativas=0;
            respt.innerHTML = "Você acertou!🥳"
            qTents.innerHTML = tentativas;

        }
        else{
            if(tentativas>=1){
                tentativas--;
                qTents.innerHTML = tentativas;
                if((vSorteado-vIns)>0){
                    respt.innerHTML = "Tente outra vez, é um número maior 😉" 
                }
                else{
                    respt.innerHTML = "Tente outra vez, é um número menor 😉"
                }
                if(tentativas==0){
                     respt.innerHTML = "Suas chances acabaram, o número era " + vSorteado +" 🤭";
                }
            }
            }
        }
        else {
            respt.innerHTML = "Insira um valor entre 0 e 10";
        }
}

function Mudar(){
    tentativas = 3;
    vSorteado = parseInt(Math.random()*11);
    document.getElementById("valorRec").value = '';

    var respt = document.getElementById("resultado");
    respt.innerHTML = "Número atualizado."
    qTents.innerHTML = tentativas; 
}

