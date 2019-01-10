window.DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function(arg){
  if (arg instanceof HTMLElement || arg.constructor.name === "String") {
    const result = document.querySelectorAll(arg);
    const resultArr = Array.from(result);
    return new DOMNodeCollection(resultArr);
  }
};

