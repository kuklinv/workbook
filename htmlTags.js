const node = (name, value) => cons (name, cons(value, null));
const name = (tag) => head(tag);
const value = (tag) => head(tail(tag));

/*const append = (dom, tag) => {
  if (isEmpty(dom)) {
    return tag;
  }  
  return cons(head(dom), append(tail(dom), tag));
};
*/
const append = (dom, tag) => cons(name(tag), cons(value, cons(dom, null)));

const toString = (dom) => {

};

export { node, name, value, append, toString };