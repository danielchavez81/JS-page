function newElement(type, elementClass, elementId , elementParent, elementContent){
    //Si se especifica un tipo se asigna ese tipo, caso contrario se toma como div por default
    if (type) {
        var element  = document.createElement(type);
    } else {
        var element = document.createElement('div');
    }

    //si se especifica una clase se pone esa clase, sino no se asigna ninguna clase
    if (elementClass) {
        element.className = elementClass;
    }

    //Lo mismo pero con ID
    if (elementId) {
        element.id = elementId;
    }

    //Si se coloca un elemento padre se asigna a ese, caso contrario se coloca como hijo del body
    if (elementParent){
        elementParent.appendChild(element);
    } else {
        document.body.appendChild(element)
    }


    if (elementContent) {
        element.innerText = elementContent
    }
    return element;

}

let description_text = "Esta es una pagina creada enteramente por JS y estilizada con CSS, nada de HTML."

var root = newElement("div", "root", "div_root");
var container = newElement("div", "container", 0, root);
var content = newElement("div", "content", 0, container);
var top_bar = newElement("navbar", "navbar", 0, content, "JS Page");
var text_description = newElement("div", "description", 0, content, description_text)
var link = newElement("a", "link", 0, top_bar, "Github")
link.href = "https://github.com/danielchavez81"
var footer = newElement("div", "footer", 0, content, "Creado por Daniel F. Chavez");

