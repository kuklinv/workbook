const node = (name, value) => consList(name, consList(value, null));
const name = (tag) => head(tag);
const value = (tag) => head(tail(tag));
const append = (dom, tag) => consList(tag, dom);

const toString = (dom) => {
  const iter = (dom, acc) => {
    if(isEmpty(dom)) {
  	  return acc;
    }
    return `${toString(tail(dom))}<${name(head(dom))}>${value(head(dom))}</${name(head(dom))}>${acc}` 
  }
  return iter(dom, ``);
};


export { node, name, value, append, toString };