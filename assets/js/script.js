// Added current date to class currentDay
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//Color-code time blocks based on time to current time: past, present or future. 
function timeUpdate() {
    //check current 
    var currentHour = moment().hour();