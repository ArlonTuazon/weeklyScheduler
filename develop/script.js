//initialize variable
var wdaySchedule = []
//current day for header 
function getCurrentDate() {
    var currentDate = moment().format('dddd, MMMM Do, YYYY');
    $("#currentDay").text(currentDate);
    console.log(currentDate);
}

//saves data to localStorage
function saveSchedule() {
    localStorage.setItem("wdaySchedule", JSON.stringify(wdaySchedule));
}

//displays data in time slots
function dispSchedule() {
    wdaySchedule.forEach(function (hour) {
        $("#" + hour.id).val(hour.dataSched)
    }) 
}

//load function
function loadSchedule() {
    var dataLoaded = JSON.parse(localStorage.getItem("wdaySchedule"));

    if (dataLoaded) {
        wdaySchedule = dataLoaded;
    }

    saveSchedule()
    dispSchedule()
}

//for loop to create array for loop
for (time = 9; time <= 17; time++) {
    //get index and set variable to store data in array
    var id = time - 9
    var dataSched = ""
   

   //Get display time 
   var displayHour = 0;
   var meridiem = "";


    if (time === 12) {
        displayHour = 12
        meridiem = "PM"
    } else if (time > 12) { 
       displayHour = time - 12;
       meridiem = "PM";
   } else if (time < 12) {
       displayHour = time;
       meridiem = "PM";
   }
   
   displayHour = displayHour.toString()
   
   dataSched = {
       id: id,
       displayHour: displayHour,
       time: time,
       meridiem: meridiem,
       dataSched: dataSched
   }

   wdaySchedule.push(dataSched)
   console.log(wdaySchedule);
}
console.log(displayHour);
   console.log(meridiem);



//get current date on page load
getCurrentDate()
//load data for page load
loadSchedule()
