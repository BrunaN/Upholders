var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onCenter"}});

// build scenes
$(function () { // wait for document ready
    // build scene

    // //fixa a barra de navegação
    // var scene = new ScrollMagic.Scene({triggerElement: "#navegador-principal", duration: 0})
    //                 .setPin("#navegador-principal")
    //                 .addTo(controller);
    // //altera o estilo da barra
    // var scene = new ScrollMagic.Scene({triggerElement: "#navegador-principal"})
    //                 .setClassToggle("#navegador-principal", "fixed")
    //                 .addTo(controller);

    
    //Alterar o indicador de ativo no navegador principal    
    var scene = new ScrollMagic.Scene({triggerElement: "#section1"})
                    .setClassToggle("#nav-section1", "active") // add class toggle
                    // .addIndicators() // add indicators (requires plugin)
                    .duration(document.getElementById("section1").clientHeight)
                    .addTo(controller);
                new ScrollMagic.Scene({triggerElement: "#section2"})
                    .setClassToggle("#nav-section2", "active") // add class toggle
                    // .addIndicators() // add indicators (requires plugin)
                    .duration(document.getElementById("section2").clientHeight)
                    .addTo(controller);
                new ScrollMagic.Scene({triggerElement: "#section3"})
                    .setClassToggle("#nav-section3", "active") // add class toggle
                    // .addIndicators() // add indicators (requires plugin)
                    .duration(document.getElementById("section3").clientHeight)
                    .addTo(controller);
                new ScrollMagic.Scene({triggerElement: "#section4"})
                    .setClassToggle("#nav-section4", "active") // add class toggle
                    // .addIndicators() // add indicators (requires plugin)
                    .duration(document.getElementById("section4").clientHeight)
                    .addTo(controller);
                new ScrollMagic.Scene({triggerElement: "#section5"})
                    .setClassToggle("#nav-section5", "active") // add class toggle
                    // .addIndicators() // add indicators (requires plugin)
                    .duration(document.getElementById("section5").clientHeight)
                    .addTo(controller);
                new ScrollMagic.Scene({triggerElement: "#section6"})
                    .setClassToggle("#nav-section6", "active") // add class toggle
                    // .addIndicators() // add indicators (requires plugin)
                    .duration(document.getElementById("section6").clientHeight)
                    .addTo(controller);
     
        
        // run("nav-videos","click", function(){alert("yes")});
        function run(elem,evento,func){
            document.getElementById(elem).addEventListener(evento, func);
        }
    
    });