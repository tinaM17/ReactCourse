function render(root,reactElement){
    const element=document.createElement(reactElement.type);
    element.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
        if(prop==='children') continue;
        element.setAttribute(prop,reactElement.props[prop]);
    }
    root.appendChild(element);

}
// select the root id where react manipulates all the dom properties
const root=document.getElementById('root')

//under the hood react creates this type of element object which is a tree like structure of all the components jsx

const reactElement = {
    type: 'a',
    props: {
      href: "https://www.google.com",
      target: "_blank"
    },
    children: "click me to visit google"

}

// render() method takes two argument one is the root where all the dom elements are to be modified and second this reactElement which is added to our index.html page
render(root,reactElement);

