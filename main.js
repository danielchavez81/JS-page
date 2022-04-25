function newElement(type, elementClass, elementId , elementParent){
    var element  = document.createElement(type);
    element.className = elementClass;
    element.id = elementId;
    if (elementParent){
        elementParent.appendChild(element);
    } else {
        document.body.appendChild(element)
    }
    return element;
}

var root = newElement("div", "root", "div_root");
var test = newElement("div", "test", "testt", root);

