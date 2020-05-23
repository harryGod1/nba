window.onload=function(){
    //this.document.write("Hello JavaScript!");
}

$(document).ready(function(){
    setTable();

    //如果有人来设定日期
    $("#inputDate").change(function(){
        let inputDate = $(this).val();
        console.log(inputDate);
        let splitText = inputDate.split("-");
        console.log(splitText);
        setMonthAndDay(splitText[1],splitText[2]);
        setTable();
    })
    
});

function setTable(){
    $("#courseTable").empty();

    $("#courseTable").append(
        "<tr><th>场次</th><th>时间</th><th>主题</th><tr>"
    );

    //反复产生资料列
    let topicCount = topicsArray.length;

    //计算一天有多少毫秒
    let oneDayMilliseconds = 24*60*60*1000;

    for(let x=0; x<topicCount; x++){
        let thisDate = new Date(startDate.getTime()+7*x*oneDayMilliseconds);
        let trSpecial = "<tr>";
        if(topicsArray[x]=="不上课"){
            trSpecial = "<tr style='background-color:lightyellow'>";
        }
        $("#courseTable").append(
            trSpecial + 
            "<td>"+(x+1)+"</td>"+
            "<td>"+ thisDate.toLocaleDateString().slice(5) +"</td>"+
            "<td>"+ topicsArray[x]+"</td>"+
            "</tr>"
        ); //每一列有场次、预计日期、主题
    }
}