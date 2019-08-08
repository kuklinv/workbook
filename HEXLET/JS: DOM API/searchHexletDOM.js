const elements = search(document, 'p');
console.log(elements.length); // 2
export default search;

// const document = document.documentElement;

function search(document, tagName) {
    let html = document.documentElement;
    let result = [];
    let elts = html.childNodes;
    return findIter(elts, tagName, result);
}

function findIter(node, tag, arr) {
    if (!node.childNodes) {
        if (node.tagName === 'tag') {
            arr.push(node.outerHTML);
        }
        return arr;
    }
    return findIter(node.childNodes, arr);
}

// return result;


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