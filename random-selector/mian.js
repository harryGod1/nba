window.onload=function(){
    //this.document.write("Hello JavaScript!");
}

$(document).ready(function(){
    $("input").click(function(){
        let numberofListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberofListItem);
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());
        $("#random-pic").attr("src",pictures[randomChildNumber]);
       console.log(pictures[randomChildNumber])
        
    });
});