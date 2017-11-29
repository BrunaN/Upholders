var vw;
var vh;

function openNewTab(url){
    window.open(url, '_blank');
}

function run(elem,evento,func){
    document.getElementById(elem).addEventListener(evento, func);
}

function runQuery(elem,evento,func){
    document.querySelector(elem).addEventListener(evento, func);
}

function runQueryAll(elem,evento,func){
    var array = document.querySelectorAll(elem);
    for( i = 0 ; i < array.length ; i++){
        console.log(array[i]);
        array[i].addEventListener(evento, func);
    }
}

function nodeListHandler(nl, func){
var nodeList = nl;
    for (var i = 0; i < nodeList.length; ++i) {
        func(nodeList[i]);
    }
}

// Depois de o DOM ser carregado
$(function () {

    vw = window.innerWidth/100;
    vh = window.innerHeight/100;

    runQueryAll("#navegador-lateral .expand", "click", function(){
        // console.log();
        event.preventDefault(true);
        event.stopPropagation(true);
        var angle = event.currentTarget.style.transform;
        if(angle == "rotate(180deg)"){
            event.currentTarget.style.transform = "rotate(0deg)";
            event.currentTarget.parentElement.parentElement.children[1].style.maxHeight = "0";
        }else{
            event.currentTarget.style.transform = "rotate(180deg)";
            event.currentTarget.parentElement.parentElement.children[1].style.maxHeight = "400px";
        }
    });

    run("buttonClose","click", function(){
        var tam = "translate(-"+(25*vw)+"px)";
        document.getElementById("navegador-lateral").style.transform = tam;
        document.getElementById("content").style.width = 100*vw+"px";
        // alert(100*vw);
    });

    run("buttonDrawer","click", function(){
        var tam = "translate("+(25*vw)+"px)";
        document.getElementById("navegador-lateral").style.transform = "translate(0px)";
        document.getElementById("content").style.width = 75*vw+"px";
    });

    // //parallax do fundo e dos objetos
    // document.getElementById('scrollContent').onmousemove = function(e) {
    //     var w = window.innerWidth;
    //     var H = window.innerHeight;

    //     var offsetX = 0.5 - e.pageX / w;
    //     var offsetY = 0.5 - e.pageY / H;
    //     var container = document.getElementsByClassName('fundo')[0];
        
    //     var offsetForB = parseInt(container.getAttribute('data-offset'));
    //     var translateB = "translate("   + Math.round(offsetX * offsetForB) + "px,"
    //                                     + Math.round(offsetY * offsetForB) + "px";
    //     container.style.transform = translateB;
    // };


    // funcionamento do navegador principal
    var ni = document.querySelectorAll('.nav-item, .sub-item');
    for (var i = 0; i < ni.length; ++i) {
        ni[i].addEventListener("click", function(){
            var e = document.getElementById(this.getAttribute('data-container'));
            console.log(e);
            // console.log(e.offsetTop);
            nodeListHandler(ni, function(node){
                node.classList.remove("active");
                // console.log("opa"+i);
            });

            // document.getElementsByClassName('nav-item').classList.remove("active");
            event.target.classList.add("active");
            controller.scrollTo(function (newScrollPos) {
                $("html, body").animate({scrollTop: newScrollPos});
            });
            controller.scrollTo(e.offsetTop);
        });
    }

    




});



    
                