// на входе фаловое дерево, обход и замена на нижний регистр

   const tree = mkdir('/', [
    mkdir('eTc', [
      mkdir('NgiNx'),
      mkdir('CONSUL', [
        mkfile('config.json'),
      ]),
    ]),
    mkfile('hOsts'),
  ]);

  const updatedTree = downcaseFileNames(tree);

  // возвращает обьект:
  /*
Представление директории:
{
  name: / ... /,
  type: 'directory',
  meta: {},
  children: [/ ... /],
}
Представление файла:

{
  name: / ... /,
  type: 'file',
  meta: {},
}
  */
 const downcaseFileNames = (node) => {
    if(!node.children) {
      return;
    }
    if (node.type == 'file') {
        return {...node, name: node.name.totoLowerCase() };
    }
    return {...node.children.map(downcaseFileNames) };
}

export default downcaseFileNames;


// for using anywear:
var obj ={"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0};
var result = Object.entries(obj);
console.log(result);

return:
[ [ '1', 5 ],
  [ '2', 7 ],
  [ '3', 0 ],
  [ '4', 0 ],
  [ '5', 0 ],
  [ '6', 0 ],
  [ '7', 0 ],
  [ '8', 0 ],
  [ '9', 0 ] ]