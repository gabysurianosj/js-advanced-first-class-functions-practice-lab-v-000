// Code your solution in this file!
function logDriverNames(drivers) {
  const logName = function(el, i, arr) {
    console.log(el.name);
  }

  drivers.forEach(logName);
}

function logDriversByHometown(drivers, hometown) {
  const logNameFilter = function(el, i, arr) {
    if (el.hometown === hometown) {
      console.log(el.name);
    }
  }
  drivers.forEach(logNameFilter);
}
