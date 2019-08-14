export default function search(doc, tagName){
    var elem = doc;
    var response = [];
    arrCheck(Array.from(doc.children))
    return response;
    function arrCheck(arr) {
        arr.forEach(el => {
            if (el.tagName == tagName.toUpperCase()) {
                response.push(el)
            }
            arrCheck(Array.from(el.children))
        })
    }
}

 /// или

const search = (doc, tag) => {
    const coll = [...doc.children];
    const initAcc = coll.filter(e => e.tagName.toLowerCase() === tag);
    return coll.reduce((acc, child) => [...acc, ...search(child, tag)], initAcc);
};

export default search;






// let html = document.documentElement.outerHTML;
// search(html, 'p');
// function search(html, tagName) {
//     let
//     let result = [];
//     let targetEl = document.querySelectorAll(tagName);
//     // if (tagName == 'html') {
//     //     return [document.documentElement];
//     // } else {
//         for (let i = 0; i < targetEl.length; i += 1) {
//             result.push(targetEl[i].outerHTML);
//         }
//     }
//     console.log(result);
//     // return result;
// }
// // export default search;


// function search(document, tagName) {
//     let result = [];
//     let targetEl = document.querySelectorAll('tagName');
//     if (tagName == 'html') {
//         return [document.documentElement];
//     } else {
//         for (let i = 0; i < targetEl.length; i += 1) {
//             result.push(targetEl[i].outerHTML);
//         }
//     }
//     return result;
// }
// export default search;









// const elements = search(document, 'p');
// console.log(elements); // 2
// // console.log(elements.length); // 2
// // export default search;
//
// // const document = document.documentElement;
//
// function search(document, tagName) {
//     let html = document.documentElement; // for hexlet linter
//     let body = document.body;
//     let result = [];
//     let nodes = body.children;
//     for (let i = 0; i < nodes.length; i += 1) {
//         result = findIter(nodes[i], tagName, result);
//     }
//     return result;
//     // let result = findIter(nodes, tagName, result);
//     // return result;
// }
//
// function findIter(node, tag, arr) {
//     // console.log(node.children);
//     debugger
//     if (node.children.length == 0) {
//         let nodeTag = node.tagName.toLowerCase()
//         console.log(nodeTag);
//         if (nodeTag == 'tag') {                         // TODO не понимаю. не входит в блок при равенстве. почему не понимаю
//             let ok = node.outerHTML;
//             console.log(ok)
//             arr.push(ok);
//         }
//         return arr;
//     }
//     return findIter(node.children, tag, arr);
// }

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