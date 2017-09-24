module.exports.at = (hours, minutes = 0) => {
  let regex = /\d{2}[:]\d{2}/g
  let minutesRest = (minutes / 60);
  console.log(minutesRest.toFixed(2));

  hours += hours + minutesRest.toFixed(0);
  minutesRest -= minutesRest.toFixed(0);
  minutes = minutesRest;
}
