// hexlet/ courses/sequences/lessons/map/

import {
    l, isEmpty, head, tail, cons, reverse,
  } from 'hexlet-pairs-data';
  
  import {
    getName, getValue, node, is,
  } from 'hexlet-html-tags';
  
  import { reverse as reverseStr } from './strings';

  // strings
export const identity = str => str;

export const reverse = str => str.split('').reverse().join('');

// hexlet-pairs-data



// hexlet-html-tags
  
  // BEGIN (write your solution here)
  
  // END
  
  export const b2p = (elements) => {
    if (isEmpty(elements)) {
      return l();
    }
  
    let newElement;
    const element = head(elements);
    if (is('blockquote', element)) {
      newElement = node('p', getValue(element));
    } else {
      newElement = element;
    }
  
    return cons(newElement, b2p(tail(elements)));
  };
  