function DOMNodeCollection(arr) {
  this.htmlElementsArr = arr;
  arr.forEach( (el, idx) =>{
    this[idx] = el;
  });
}

DOMNodeCollection.prototype.html = function(str){
  if (str.constructor.name === 'String') {
    this.htmlElementsArr.forEach(element => {
      element.innerHTML = str;
    });
  } else {
    return this.htmlElementsArr[0].innerHTML;
  }
};

DOMNodeCollection.prototype.empty = function() {
  this.htmlElementsArr.forEach(element => {
    element.innerHTML = "";
  });
};

DOMNodeCollection.prototype.append = function(arg) {
  this.htmlElementsArr.forEach(element => {
    if (arg.constructor.name === 'String'){
      element.innerHTML += arg;
    } else { 
      element.innerHTML +=  arg.outerHTML;
    }
  });
};

DOMNodeCollection.prototype.attr = function(arg) {
  return this.setAttributeNode(arg.cloneNode());
};

DOMNodeCollection.prototype.addClass = function(arg){
  this.htmlElementsArr.forEach(element => {
    element.classList.add(arg);
  });
};

DOMNodeCollection.prototype.removeClass = function(arg){
  this.htmlElementsArr.forEach(element => {
    element.classList.remove(arg);
  });
};

DOMNodeCollection.prototype.children = function() {
  let children = [];
  this.htmlElementsArr.forEach(el => {
    children = children.concat(Array.from(el.children));
  });
  return new DOMNodeCollection(children);
};

DOMNodeCollection.prototype.parent = function() {
  const parent = [];
  this.htmlElementsArr.forEach(el => {
    parent.push(el.parentNode);
    
  });

  return new DOMNodeCollection(parent);
};

DOMNodeCollection.prototype.find = function(arg) {
  let descendants = [];
  this.htmlElementsArr.forEach( (el) => {
    descendants = descendants.concat(Array.from(el.querySelectorAll(arg)));
  });
  // let descendants = [];
  // const childrenArr = Array.from(this.children()); 
  //   childrenArr.forEach((el) =>{
  //   descendants = descendants.concat(Array.from(el.querySelectorAll(arg)));
  // });
  return new DOMNodeCollection(descendants);
};

DOMNodeCollection.prototype.remove = function() {
  Array.from(this).forEach( (el) => {
    debugger
    el.html('');
    debugger
  });
};


DOMNodeCollection.prototype.on = function(arg) {
  
}

module.exports = DOMNodeCollection;