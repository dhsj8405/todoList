const todosWrap = document.querySelector(".todosWrap");
const todoWrap = todosWrap.querySelector(".todoWrap");
// const dayOfTheWeek = todoWrap.querySelector(".DayOfTheWeek");
// const calendarTitleDay = dayOfTheWeek.querySelector("span");
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function getDay(){
  var date = new Date();
  var month = date.getMonth() + 1 ;
  var day = date.getDate() ;
  var a = date.getDay() ;
  var year = date.getFullYear();
  // calendarTitleDay.innerText = `${month}/${day} ${weekday[a]}`;
  const calendarLength = todosWrap.children.length;

  lastMonthLastDate= new Date(year, month, 0);
   thisMonthFirstDate= new Date(year, month, 1);
   thisMonthLastDate= new Date(year, month + 1, 0);
   nextMonthFirstDate= new Date(year, month + 1, 1);
console.log(lastMonthLastDate);
console.log(thisMonthFirstDate);
  //
  // for(var i = 0; i<calendarLength ; i++){

  //   var dayOfTheWeek = todosWrap.children[i].querySelector(".DayOfTheWeek");
  //   var calendarTitleDay = dayOfTheWeek.querySelector("span");
  //   calendarTitleDay.innerText = `${month}/${day} ${weekday[a]}`;
  // }
}
function init(){
  getDay();
  console.log(todosWrap.children.length);
}
init();
