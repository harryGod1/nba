window.onload=function(){
    //this.document.write("Hello JavaScript!");
}

let count =5;
let str;

$(document).ready(function(){
    setTable();

    //如果有人来设定日期
    $("#inputDate").change(function(){
        let inputDate = $(this).val();
        console.log(inputDate);
        let splitText = inputDate.split("-");
        console.log(splitText);
        //setMonthAndDay(splitText[1],splitText[2]);
        //setTable();
        str = splitText[1] + "/" + splitText[2];
        count++;
    })
    
    $("#inputText").change(function(){
        let inputText = $(this).val();
        let trSpecial = "<tr>";
        if(count%2 == 1){
            trSpecial = "<tr style='background-color:lightyellow'>";
        }
        $("#courseTable").append(
            trSpecial +
            "<td>" + count +"</td>"+
            "<td>" + str + "</td>"+
            "<td>" + inputText + "</td>"+
            "</tr>"
        );
        topicsArray.push([str,inputText]);
    });

});

function setTable(){
    $("#courseTable").empty();

    $("#courseTable").append(
        "<tr><th>场次</th><th>时间</th><th>主题</th><tr>"
    );

    //反复产生资料列
    let topicCount = 5;

    //计算一天有多少毫秒
    let oneDayMilliseconds = 24*60*60*1000;

    for(let x=0; x<count; x++){
        //let thisDate = new Date(startDate.getTime()+7*x*oneDayMilliseconds);
        let trSpecial = "<tr>";
        if(x%2 == 1){
            trSpecial = "<tr style='background-color:lightyellow'>";
        }
        console.log(topicsArray[x][0]);
        $("#courseTable").append(
            
            trSpecial + 
            "<td>"+(x+1)+"</td>"+
            "<td>"+ topicsArray[x][0] +"</td>"+
            "<td>"+ topicsArray[x][1] +"</td>"+
            "</tr>"
        ); //每一列有场次、预计日期、主题
    }
}