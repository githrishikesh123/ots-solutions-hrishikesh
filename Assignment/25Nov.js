//  Event
//  Event Listners

//  DOM Manipulation
//          createElement== creates html element
//          appendChild==  it adds an element as child in another element.

// ===================  28 NOV ======================
// Bubbling====>

//       When an event happens on an element, it first runs the handlers on it, then on its parent,
//       then all the way up on other ancestors.

<form onclick="alert('form')">
  FORM
  <div onclick="alert('div')">
    DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>;

// Event Bubbling==>
//              propagation of event from child to parent

// Event Capturing==>
//              propagation of event from parent to child

// e.stopPropagation() : to stop the propagation to it's parent

// 