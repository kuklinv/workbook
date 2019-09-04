function testDateTime(a, b) {
  var days = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  var date_str_1 = new Date();
  var date_str_2 = new Date();
  date_str_1.setTime(Date.parse(a));
  date_str_2.setTime(Date.parse(b));
  if(date_str_1>date_str_2){return (days[date_str_1.getDay()]);}
  else{return (days[date_str_2.getDay()]);}
}
