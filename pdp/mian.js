window.onload=function(){
    //this.document.write("Hello JavaScript!");
}

$(document).ready(function(){

    console.log(typeof($("[type=range]").val()));
    $("LABEL").text($("[type=range]").val()+" "+fiveIndex[$("[type=range]").val()-1]);

    $("[type=range]").change(function(e){
        //console.log("changed");
        console.log(e);
        $("LABEL").text($("[type=range]").val()+" "+fiveIndex[$("[type=range]").val()-1]);
    });

    let currentQuiz=null;
    $("#startButton").click(function(){
        //$("[type=range]").toggle();
        if(currentQuiz==null){
            currentQuiz=0;
            console.log(questions[0])
            $("#question").text(questions[0]);
        }
    });
});

