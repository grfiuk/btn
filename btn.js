document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("fuck");
    var btn2= document.getElementById("scream");
    var btn3= document.getElementById("hefuck");
    var btn4= document.getElementById("finish");
    var btn5=document.getElementById("hello");
    var btn6=document.getElementById("surprise");
    var fuck= new Audio ("assets/sound-effect.mp3");
    var scream= new Audio ("assets/recoupe.mp3");
    var hefuck= new Audio ("assets/It was at this moment he knew he fucked up (free download) copie.mp3");
    var finish=new Audio ("assets/FINISH HIM  Sound Effect.mp3");
    var hello= new Audio("assets/hello motherfucker thug life.mp3");
    var surprise= new Audio("assets/suprise-motherfucker.mp3");



    btn.addEventListener("click",function(){
        fuck.play();
        if(fuck.play){
            scream.currentTime = 0;
            scream.pause();
            hefuck.currentTime = 0;
            hefuck.pause();
            finish.currentTime = 0;
            finish.pause();
            hello.currentTime = 0;
            hello.pause();
            surprise.currentTime = 0;
            surprise.pause();
        }
    });

    btn2.addEventListener("click",function(){
        scream.play();
        if(scream.play){
            fuck.currentTime = 0;
            fuck.pause();
            hefuck.currentTime = 0;
            hefuck.pause();
            finish.currentTime = 0;
            finish.pause();
            hello.currentTime = 0;
            hello.pause();
            surprise.currentTime = 0;
            surprise.pause();
        }
    });

    btn3.addEventListener("click",function(){
        hefuck.play();
        if(hefuck.play){
            scream.currentTime = 0;
            scream.pause();
            fuck.currentTime = 0;
            fuck.pause();
            finish.currentTime = 0;
            finish.pause();
            hello.currentTime = 0;
            hello.pause();
            surprise.currentTime = 0;
            surprise.pause();
        }
    });

    btn4.addEventListener("click",function(){
        finish.play();
        if(finish.play){
            scream.currentTime = 0;
            scream.pause();
            hefuck.currentTime = 0;
            hefuck.pause();
            fuck.currentTime = 0;
            fuck.pause();
            hello.currentTime = 0;
            hello.pause();
            surprise.currentTime = 0;
            surprise.pause();
        }
    });

    btn5.addEventListener("click",function(){
        hello.play();
        if(hello.play){
            scream.currentTime = 0;
            scream.pause();
            hefuck.currentTime = 0;
            hefuck.pause();
            finish.currentTime = 0;
            finish.pause();
            fuck.currentTime = 0;
            fuck.pause();
            surprise.currentTime = 0;
            surprise.pause();
        }
    });

    btn6.addEventListener("click", function(){
        surprise.play();
        if(surprise.play){
            scream.currentTime = 0;
            scream.pause();
            hefuck.currentTime = 0;
            hefuck.pause();
            finish.currentTime = 0;
            finish.pause();
            hello.currentTime = 0;
            hello.pause();
            fuck.currentTime = 0;
            fuck.pause();
        }
    });

})
