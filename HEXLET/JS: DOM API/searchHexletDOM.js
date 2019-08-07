const elements = search(document, 'p');
let result = [];

function search(document, tagName) {
    let elts = document.body.childNodes;

    return result;
}

console.log(elements.length); // 2
// export default search;

// let result = [];
// let nodes = document.documentElement.children;
//
// function f(nodes, arr) {
//     nodes.toString();
//     [...nodes];
//     nodes.forEach(function (node) {
//         if (!node.children) {
//             if (node.name === 'p') {
//                 return arr.push(node.outerHTML);
//             }
//         }
//         return f(nodes.children, arr);
//     });
// }
//
// return f(nodes, result);