// файл с общими заметками по курсу
//*************************************************************************************************************************************


// по поводу замыканий и локальной и глобальной области видимости, хорроший пример счетчика, не меняющего внешнюю среду ()
function counter() {
    let count = 0;
  
    return function() {
      count += 1;
      return count;
    };
  }
  /* in action:
const counter1 = counter();
counter1(); // 1
counter1(); // 2
counter1(); // 3
*/
// работа с обьектами и функциями
function filter(array, test) {
    const passed = [];
  
    for (var i = 0; i < array.length; i++) {
      if (test(array[i]))
        passed.push(array[i]);
    }
  
    return passed;
  }
  
  console.log(filter(people, function(person) {
    return person.born > 2000;
  }));
  // → [{name: "Philibert Haverbeke", …}, …]
  // работа с трансформацией массивов данных. обьекты MAP. продолжение прелдыдущег кода. по сути это раскадровка того что делает встроенный шаблон
  // map в JS
  function map(array, transform) {
    const mapped = [];
    
    for (var i = 0; i < array.length; i++) {
      mapped.push(transform(array[i]));
    }
  
    return mapped;
  }
  
  const overNinety = people.filter(function(person) {
    return person.died - person.born > 90;
  });
  
  console.log(map(overNinety, function(person) {
    return person.name;
  }));
  // → ["Clara Aernoudts", "Emile Haverbeke",
  //    "Maria Haverbeke"]
// а это то что делает паттерн reduce
function reduce(array, combine, start) {
    let current = start;
  
    for (var i = 0; i < array.length; i++) {
      current = combine(current, array[i]);
    }
  
    return current;
  }
  
  console.log(reduce([1, 2, 3, 4], function(a, b) {
    return a + b;
  }, 0));
  // → 10
  ///////////////////////////////////////////////////////////  spread operator and rest parameters!!!!!!!!!
  function businessNamesAndRatings (apiResult) {
    var newAr = apiResult.results.map(function (result) {
      var propertyNameRaiting = 'raiting';
      var propertyNameName = 'name';
      var rait = result.rating;
      var nam = result.name;
      return rait, nam;
    });
  return newAr;
  }








