// DATEANDTIME

function getCurrentTime(){
  var time = new Date().toLocaleTimeString();
  return console.log(time);
};

function getCurrentDate(){
  var date = new Date().toLocaleDateString();
  return console.log(date);
};
// Export ALL date and time functions, inline.
export {getCurrentTime, getCurrentDate}
