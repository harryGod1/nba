let topicsArray = [
  ["3/12","戈贝尔确认感染新冠"],
  ["3/14","美国所有篮球赛事暂停"],
  ["4/11","交易签约无限期暂停"],
  ["5/05","迪士尼乐意为NBA提供复赛场地"],
  ["5/30","萧华告知球队目标7/31复赛"]
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    //一次设定好月份与日期
    startDate.setMonth(startMonth-1, startDay);
    //时间先忽略。设为0
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(4,1);