function leiasMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var fotos=document.getElementById("fotos")
    var btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        fotos.style.display="none";
        btnLeiaMais.innerHTML="Mostrar Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        fotos.style.display="inline";
        btnLeiaMais.innerHTML="Mostrar Menos";   
    }

}
function LeiasMais(){
    var ponto=document.getElementById("ponto");
    var maisTexto=document.getElementById("MAis");
    var btnLeiasMais=document.getElementById("btnLeiasMais");

    if(ponto.style.display === "none"){
        ponto.style.display="inline";
        maisTexto.style.display="none";
        btnLeiasMais.innerHTML="Mostrar Mais";
    }else{
        ponto.style.display="none";
        maisTexto.style.display="inline";
        btnLeiasMais.innerHTML="Mostrar Menos";   
    }

}
function lermais(){
    var PONTOS=document.getElementById("PONTOS");
    var maisTexto=document.getElementById("MAIS");
    var btnLEiaMais=document.getElementById("btnLEiaMais");

    if(PONTOS.style.display === "none"){
        PONTOS.style.display="inline";
        maisTexto.style.display="none";
        btnLEiaMais.innerHTML="Mostrar Mais";
    }else{
        PONTOS.style.display="none";
        maisTexto.style.display="inline";
        btnLEiaMais.innerHTML="Mostrar Menos";   
    }
}
function LERMAIS(){
    var pontinhos=document.getElementById("pontinhos");
    var maisTexto=document.getElementById("maistexto");
    var btnLEIAMais=document.getElementById("btnLEIAMais");

    if(pontinhos.style.display === "none"){
        pontinhos.style.display="inline";
        maisTexto.style.display="none";
        btnLEIAMais.innerHTML="Mostrar Mais";
    }else{
        pontinhos.style.display="none";
        maisTexto.style.display="inline";
        btnLEIAMais.innerHTML="Mostrar Menos";   
    }
}