const myApp = angular.module("myApp", []);
//to not poluting the global namespace we use angular module inside variable.

myApp.controller("myCon", () => {
  let brolet = "asdasd";
  console.log(brolet);
  brolet = 12;
  document.querySelector(".az").style = `
    background: linear-gradient(310deg, #314755, #26a0da);
    font-size:3rem;
    display:inline-block;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `;
  console.log({ a: "asd", c: 123213 });
  console.log(brolet);
});
