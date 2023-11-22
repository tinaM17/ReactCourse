import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//Can we create a function component in our main.jsx? Yes ofcourse

function MyApp() {
  return (
    <h1>My custom component</h1>
  )
}

//Copy our custom react element and pass to the render function
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };

//Objects are not valid as a React child (found: object with keys {type, props, children}). If you meant to render a collection of children, use an array instead.


//create react objects using createElement function and pass it to our render function
const user="Tina"
const reactElement = React.createElement("a", {
  href: "https://www.google.com",
  target: "_blank",
},
"Click me ",user
);

//If we pass this objects to our render function then it converts this element to a html element and update our dom

//   /* <MyApp/>
//     {/* can we call the components as a function?  Yes we can. But this is not recommended*/
// MyApp();
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
