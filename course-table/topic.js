let topicsArray = [
    "课程介绍",
    "随机性",
    "不上课",
    "日期时间",
    "不上课",
    "条件判断"
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