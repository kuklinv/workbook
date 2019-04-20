$(document).ready(function () {                        // обертка Jquery
  $("*").click(function () {                           // обработчик на кликание любого элемента в DOM
    //event.preventDefault();                          // прерывает дефолтное поведение но и отключает всплытие
      console.log("clicked", $(this).text());
  });
});