var wdayPlanner = [];

function getcurrentDay(){
  var currentDate = moment().format ('dddd, MMMM Do, YYYY');
  $("#currentDay").text(currentDate);

}


getcurrentDay();
