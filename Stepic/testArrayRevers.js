/* в нашу функцию testArray передаются две строки случайной длины и содержания. 
Вам нужно составить из символов этих строк один массив (каждый символ строки становится 
отдельным элементом массива), затем добавить первым элементом  массива текстовое значение "Иванов",
 и вернуть из функции все элементы в обратном порядке, преобразовав в строку.
  Обратите внимание, что в обратном порядке нужно переставить элементы внутри массива, 
  а данные внутри элементов инвертировать не нужно!
*/
function testArray(a, b) {
 var astr = String(a);
 var bstr = String(b);
 var arr1 = astr.split('');
 var arr2 = bstr.split('');
    arr1.reverse();
    arr2.reverse();
    var arr3 = arr2.concat(arr1);
    arr3.push("Иванов");
    var endstr = arr3.join('');
    return endstr;
}