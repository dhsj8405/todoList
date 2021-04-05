const todosWrap = document.querySelector(".todosWrap");
const topOfTheCalendar_Y_M = document.querySelector(".topOfTheCalendar_Y_M");
const calendarYear = topOfTheCalendar_Y_M.querySelector("h2");
const topOfTheCalendar_leftBtn = document.querySelector(".topOfTheCalendar_leftBtn");
const topOfTheCalendar_rightBtn = document.querySelector(".topOfTheCalendar_rightBtn");

const month_ch = ["January","February","March","April","May","June","Jul","August","September","October","November","December"];

var todoWrap = 0;
var calendarLength = 0;
var dayCount = 0;

var date = new Date();
var nowMonth = date.getMonth() + 1  ; //월
var nowDay = date.getDate() ;    //일
var nowWeekday = date.getDay() ; //요일
var nowYear = date.getFullYear();//년

var lastMonthLastDate= new Date(nowYear, nowMonth - 1, 0);
var thisMonthFirstDate= new Date(nowYear, nowMonth - 1, 1);
var thisMonthLastDate= new Date(nowYear, nowMonth , 0);
var nextMonthFirstDate= new Date(nowYear, nowMonth, 1);

var lastMonth = lastMonthLastDate.getMonth() + 1;
var lastMonthLastDay = lastMonthLastDate.getDate();
var lastMonthLastWeekday = lastMonthLastDate.getDay();
var dispLastMonthFirstDay = lastMonthLastDay - lastMonthLastWeekday;

var thisMonth = thisMonthFirstDate.getMonth()+1;
var thisMonthFirstDay = thisMonthFirstDate.getDate();

var thisMonthLastDay = thisMonthLastDate.getDate();

var nextMonth = nextMonthFirstDate.getMonth()+1;
var nextMonthFirstDay = nextMonthFirstDate.getDate();
var nextMonthFirstWeekday = nextMonthFirstDate.getDay();

var dispLastMonthNum = lastMonthLastWeekday + 1;
var dispThisMonthNum = thisMonthLastDay;
var dispNextMonthNum = 7 - nextMonthFirstWeekday;
calendarLength = dispLastMonthNum + dispThisMonthNum + dispNextMonthNum;

function getDaysForConstructCalendar(){
  var lastMonthLastDate= new Date(nowYear, nowMonth - 1, 0);
  var thisMonthFirstDate= new Date(nowYear, nowMonth - 1, 1);
  var thisMonthLastDate= new Date(nowYear, nowMonth , 0);
  var nextMonthFirstDate= new Date(nowYear, nowMonth, 1);

  var lastMonth = lastMonthLastDate.getMonth() + 1;
  var lastMonthLastDay = lastMonthLastDate.getDate();
  var lastMonthLastWeekday = lastMonthLastDate.getDay();
  var dispLastMonthFirstDay = lastMonthLastDay - lastMonthLastWeekday;

  var thisMonth = thisMonthFirstDate.getMonth()+1;
  var thisMonthFirstDay = thisMonthFirstDate.getDate();

  var thisMonthLastDay = thisMonthLastDate.getDate();

  var nextMonth = nextMonthFirstDate.getMonth()+1;
  var nextMonthFirstDay = nextMonthFirstDate.getDate();
  var nextMonthFirstWeekday = nextMonthFirstDate.getDay();

  var dispLastMonthNum = lastMonthLastWeekday + 1;
  var dispThisMonthNum = thisMonthLastDay;
  var dispNextMonthNum = 7 - nextMonthFirstWeekday;
  calendarLength = dispLastMonthNum + dispThisMonthNum + dispNextMonthNum;
}

function makeCalendarform(){
  for(var i = 0 ; i < calendarLength ; i ++){
    console.log("1");
    var create_todoWrap = document.createElement("div");
    todosWrap.append(create_todoWrap);
    create_todoWrap.classList.add('todoWrap');
  }
  todoWrap = todosWrap.children;
}

function inputCalendarDay(){
  calendarYear.innerText = `${nowYear} ${month_ch[nowMonth-1]}`;
  for(var i = 0 ; i < calendarLength ; i++){
    var create_todoWrapSmallDay = document.createElement("span");
    todoWrap[i].append(create_todoWrapSmallDay);
    holiDayFontColor(i,todoWrap[i].children[0]);

    if(i < lastMonthLastWeekday + 1){   //이전달 표시
      writeDay(todoWrap[i],dispLastMonthFirstDay + dayCount);
      todoWrap[i].children[0].classList.add('addOpacity');
      dayCount++;
    }else if(i > thisMonthLastDay){   // 다음달 표시
      checkChangeMonth(i,thisMonthLastDay+1);
      writeDay(todoWrap[i],nextMonthFirstDay +dayCount);
      todoWrap[i].children[0].classList.add('addOpacity');
      dayCount++;
    }else{ // 이번달 표시
      checkChangeMonth(i,lastMonthLastWeekday + 1);
      writeDay(todoWrap[i],thisMonthFirstDay + dayCount);
      markToday(todoWrap[i]);
      dayCount++;
    }
  }

}
function holiDayFontColor(i,writeTarget){
  if(i % 7 === 0){
    writeTarget.classList.add('SunColor');
  }else if(i % 7 === 6){
    writeTarget.classList.add('SatColor');
  }
}
function writeDay(writeTarget,day){
  var target = writeTarget.querySelector("span")
  target.innerText =  `${day}`;
}
function markToday(writeTarget){
  if(nowDay === dayCount + 1){
    var target = writeTarget.querySelector("span")
    target.classList.add('calendarTodaySmallDay');
  }
}
function checkChangeMonth(nthDay,changeDay){
  if(nthDay === changeDay){
    dayCount = 0;
  }
}
function changeMonthBtn(n){
  // console.log(todosWrap.length);
  // while(todosWrap.hasChildNodes()){
  // for(var i = 0 ; i <19 ; i ++){
  //   todoWrap[i].remove();
  // }
    // console.log(todoWrap);
  // }
  todosWrap.detach();
  // while(todosWrap.hasChildNodes()){
  //   todoWrap.remove();
  // }

  if ( n === 1 && nowMonth === 1){
    nowYear--;
    nowMonth = 12;
  }else if ( n === -1 && nowMonth === 12){
    nowYear++;
    nowMonth = 1;
  }else if(n === 1){
    nowMonth--;
  }else{
    nowMonth++;
  }
  getDaysForConstructCalendar();
  makeCalendar();
}
function makeCalendar(){
  makeCalendarform();
  inputCalendarDay();
}
function init(){
  makeCalendar();
  topOfTheCalendar_leftBtn.addEventListener('click',function(){
    changeMonthBtn(1)
  });
  topOfTheCalendar_rightBtn.addEventListener('click',function(){
    changeMonthBtn(-1)
  });
}
init();
