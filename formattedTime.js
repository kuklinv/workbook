const formattedTime = (minitsEnter) => {
var hours = Math.floor(minitsEnter / 60);
var minits = minitsEnter % 60;
if (minits === 0 && hours > 9) {
return `${hours}:00`  
} else if (String(minits).length > 1 && String(hours).length === 1) {
return `0${hours}:${minits}`
} else if (String(minits).length > 1 && String(hours).length > 1) {
return `${hours}:${minits}`
} else {
  return `0${hours}:0${minits}`
}
};

export default formattedTime;
