// которая принимает на вход количество минут (прошедших с начала суток)
// и возвращает строку, являющуюся временем в формате чч:мм.
const formattedTime = minutes => {
const hours = string (Math.floor(minutes);
const mins = string (minutes % 60);
let str = `${hours}${:}${mins}`;
return str;
};

//formattedTime(5); // 00:05
//formattedTime(15); // 00:15
//formattedTime(60); // 01:00
//formattedTime(67); // 01:07
//formattedTime(175); // 02:55
//formattedTime(600); // 10:00
//formattedTime(754); // 12:34