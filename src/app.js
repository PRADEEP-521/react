import React from "react";
import ReactDOM from "react-dom";

//(7)create a header component from scratch using functional component with jsx. 
const header1 = () => {
    return (
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Logo" />  // add a logo on left
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />  // add a search bar in middle.
        </div>
        <div className="user-icon">
          <img src="user-icon.png" alt="User Icon" />  // add a user icon on right 
        </div>
      </header>
    )
  }
//ReactDOM.render(header1,document.getElementById("root"))

//(1) craete a nested header element using react. create element(h1,h2,h3 inside a div tag with class "title")
const header = React.createElement(
    "div",{classname:"title", key:"title"},
    [React.createElement("h1",{key:"h1"},"heading tag with h1 tag."),
    React.createElement("h2",{key:"h2"},"heading tag with h2 tag."),
    React.createElement("h3",{key:"h3"},"heading tag with h3 tag."),
]);
//ReactDOM.render(header,document.getElementById("root"))

//(2)create the same element using jsx
const same_element = (
    <div className="title">
        <h1>"same element using jsx"</h1>
        <h2>"same element using jsx"</h2>
        <h3>"same element using jsx"</h3>
    </div>
);
//ReactDOM.render(same_element,document.getElementById("root"))

//(3) create a functional component of the same with jsx
const functional_component = () => {
    return (
        <div className="title">
            <h1>"functional_component-1"</h1>
            <h2>"functional_component-2"</h2>
            <h3>"functional_component-3"</h3>
        </div>
    );
};
//ReactDOM.render(<functional_component/>,document.getElementById("root"))

//(4)pass attributes into the tag in jsx
const attributes = (
        <div className="title">
            <h1 style={{color:"aqua"}}>"passing attributes"</h1>
            <h2 style={{color:"pink"}}>"passing attributes"</h2>
            <h3 style={{color:"yellow"}}>"passing attributes"</h3>
        </div>  
);
//ReactDOM.render(attributes,document.getElementById("root"))

//(5)composition component (add a component inside another)
const composition_component =  () => {
    return (
        <h1> "components conatin another" </h1>,
        <functional_component/>
    )
}
//ReactDOM.render(<functional_component/>,document.getElementById("root"))

//(6){<title component>},{<title component/>},{{<title component>}vs{</title component}},
const title_element = () => {
     return <h1 style={{color:"aqua"}}> this is title element</h1>;
};
const title_componenet = () =>{
    return(
        <div calssName = "title" key = "title">
            <title_Element/>
            <title_Element></title_Element>
        </div>
    )
}
ReactDOM.render(<title_component/>,document.getElementById("root"))