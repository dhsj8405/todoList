const todosWrap = document.querySelector(".todosWrap");
const todoWrap = todosWrap.querySelector(".todoWrap");
// const dayOfTheWeek = todoWrap.querySelector(".DayOfTheWeek");
// const calendarTitleDay = dayOfTheWeek.querySelector("span");
const weekday_ch = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function getDay(){
  var date = new Date();
  var month = date.getMonth() ; //월
  var day = date.getDate() ;    //일
  var weekday = date.getDay() ; //요일
  var year = date.getFullYear();//년
  // calendarTitleDay.innerText = `${month}/${day} ${weekday[a]}`;
  const calendarLength = todosWrap.children.length;

  var lastMonthLastDate= new Date(year, month, 0);
  var thisMonthFirstDate= new Date(year, month, 1);
  var thisMonthLastDate= new Date(year, month + 1, 0);
  var nextMonthFirstDate= new Date(year, month + 1, 1);

  var lastMonth = lastMonthLastDate.getMonth() + 1;
  var lastMonthLastDay = lastMonthLastDate.getDate();
  var lastMonthLastWeekday = lastMonthLastDate.getDay();

  var thisMonth = thisMonthFirstDate.getMonth()+1;
  var thisMonthFirstDay = thisMonthFirstDate.getDate();
  var thisMonthFirstWeekday = thisMonthFirstDate.getDay();

  var thisMonthLastDay = thisMonthLastDate.getDate();
  var thisMonthLastWeekday = thisMonthLastDate.getDay();

  var nextMonth = nextMonthFirstDate.getMonth()+1;
  var nextMonthFirstDay = nextMonthFirstDate.getDate();
  var nextMonthFirstWeekday = nextMonthFirstDate.getDay();
  var a =0;
  var b =0;
  var c =0;
  for(var j=0 ; j< 35 ; j ++){
    var dayOfTheWeek = todosWrap.children[j].querySelector(".DayOfTheWeek");
    var calendarTitleDay = dayOfTheWeek.querySelector("span");
    if(j < lastMonthLastWeekday + 1){
      calendarTitleDay.innerText = `${lastMonth}/${lastMonthLastDay - lastMonthLastWeekday + a} ${weekday_ch[a]}`;
      a++;
    }else if(j > thisMonthLastDay){
      calendarTitleDay.innerText = `${nextMonth}/${nextMonthFirstDay +b} ${weekday_ch[nextMonthFirstWeekday+b]}`;
      b++;
    }else{
      calendarTitleDay.innerText = `${thisMonth}/${thisMonthFirstDay + c} ${weekday_ch[(thisMonthFirstWeekday + c) % 7]}`;
      c++;
    }
  }
    //
    // if(thisMonthFirstWeekday === 0 ){
    //     for(var i = 0 ; i < thiMonthLastDay ; i++){
    //       var dayOfTheWeek = todosWrap.children[i].querySelector(".DayOfTheWeek");
    //       var calendarTitleDay = dayOfTheWeek.querySelector("span");
    //       calendarTitleDay.innerText = `${thisMonth}/${thisMonthFirstDay + i} ${weekday_ch[(thisMonthFirstWeekday + i) % 7]}`;
    //     }
    // }
    // else{
    //   for(var i = 0 ; i < lastMonthLastWeekday + 1 ; i++){
    //     var dayOfTheWeek = todosWrap.children[i].querySelector(".DayOfTheWeek");
    //     var calendarTitleDay = dayOfTheWeek.querySelector("span");
    //     calendarTitleDay.innerText = `${lastMonth}/${lastMonthLastDay - lastMonthLastWeekday + i} ${weekday_ch[i]}`;
    //   }
    // }

// console.log(lastMonthLastMonth);
// console.log(thisMonthFirstMonth);
  //
  // for(var i = 0; i<calendarLength ; i++){

  //   var dayOfTheWeek = todosWrap.children[i].querySelector(".DayOfTheWeek");
  //   var calendarTitleDay = dayOfTheWeek.querySelector("span");
  //   calendarTitleDay.innerText = `${month}/${day} ${weekday[a]}`;
  // }
}
function init(){
  getDay();
  // console.log(todosWrap.children.length);
}
init();
