const elements = search(document, 'p');
console.log(elements); // 2
// console.log(elements.length); // 2
// export default search;

// const document = document.documentElement;

function search(document, tagName) {
    let html = document.documentElement; // for hexlet linter
    let body = document.body;
    let result = [];
    let nodes = body.children;
    for (let i = 0; i < nodes.length; i += 1) {
        result = findIter(nodes[i], tagName, result);
    }
    return result;
    // let result = findIter(nodes, tagName, result);
    // return result;
}

function findIter(node, tag, arr) {
    // console.log(node.children);
    debugger
    if (node.children.length == 0) {
        console.log(node.tagName);
        if (node.tagName == 'tag') {
            let ok = node.outerHTML;
            console.log(ok)
            arr.push(ok);
        }
        return arr;
    }
    return findIter(node.children, tag, arr);
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