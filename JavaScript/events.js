// TODO: If TRUE means CAPTURING, if FALSE means BUBBLING (default)
// !NOTE: The event capturing phase is the first phase of the event flow. In this phase, the event is captured by the outermost element and propagated to the innermost element.
// !NOTE: The event bubbling phase is the second phase of the event flow. In this phase, the event is bubbled up from the innermost element to the outermost element.

/*
document.getElementById("outer").addEventListener(
  "click",
  () => {
    console.log("outer");
  },
  true // CAPTURING
);
document.getElementById("middle").addEventListener(
  "click",
  () => {
    console.log("middle");
  },
  false // BUBBLING
);
document.getElementById("inner").addEventListener(
  "click",
  () => {
    console.log("inner");
  },
  true // CAPTURING
);
*/

// TODO: STOP PROPAGATION

document.getElementById("outer").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("outer");
  },
  true // CAPTURING
);
document.getElementById("middle").addEventListener(
  "click",
  () => {
    console.log("middle");
  },
  true // CAPTURING
);
document.getElementById("inner").addEventListener(
  "click",
  () => {
    console.log("inner");
  },
  true // CAPTURING
);
