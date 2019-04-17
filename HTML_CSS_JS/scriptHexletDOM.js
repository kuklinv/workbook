/*
const search = (document, tag) => {
  const elements = [];
    for (let index = 0; index < document.length; index++) {
      if (document.documentElement.childNodes[index].tagName = tag) {
          elements.push(document.documentElement.childNodes[i])
      }
  }

//document.documentElement.childNodes[i]
//element.tagName
console.log(elements.length);

};

export default search;


const search = (document, tag) => {
  const elements = document.documentElement.childNodes;
  elements.toString()
  elementsArray = [...elements]; // теперь это массив
  const selectTag = elementsArray.map(function(tag) {
    return 
  });
}
*/

const search = (document, tag) => {
  if (tag == 'html') {
    return 
  }
  const elements = [...document.body.children]; // or var elements = Array.from(nodelist);
  // ниже получение html кода элементов с содержимым в массив
  //var htmls = elements.map(function(){
  //  return $(this).prop('outerHTML');
  //  }).get();
  const selectHtmls = elements.filter(function(element) {
     return element.tagName == tag;
  });
  return selectHtmls.length;
};

export default search;