function newElement(type, elementClass, elementId , elementParent){

    if (type) {
        var element  = document.createElement(type);
    } else {
        var element = document.createElement('div');
    }

    if (elementClass) {
        element.className = elementClass;
    }
    if (elementId) {
        element.id = elementId;
    }

    if (elementParent){
        elementParent.appendChild(element);
    } else {
        document.body.appendChild(element)
    }
    return element;
}

var root = newElement("div", "root", "div_root");


