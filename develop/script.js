var wdaySchedule = [];
var dispHour = 0;
var meridiem = "";

function getcurrentDay(){
  var currentDate = moment().format ('dddd, MMMM Do, YYYY');
  $("#currentDay").text(currentDate);

}
//create a For loop
for(time = 9; time <=17; time++){
   var i = time-9
   var taskSchedule =""
   

   if (time === 12) {
       dispHour = "12";
       meridiem = "PM";
   }
   else if (time < 12){
       dispHour = time;
       meridiem = "AM";
   }
   else if (time > 12) {
       dispHour = time -12;
       meridiem = "PM";
   }
   dispHour = dispHour.toString()

     taskPlanner = {
        i: i,
        dispHour: dispHour,
        time: time,
        meridiem: meridiem,
        taskSchedule: taskSchedule
}

 wdaySchedule.push(taskSchedule)
console.log(taskSchedule);
}

function savewdayScheduleData() {
    localStorage.setItem("wdaySchedule", JSON.stringify(wdaySchedule));
}
function dispdayScheduleData() {
    wdaySchedlue.forEach(function (hour) {
        $("#" + hour.i).val(hour.taskSchedule)
    }) 
}
getcurrentDay();
