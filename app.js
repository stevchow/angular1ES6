const myApp = angular.module("myApp", []);
//to not poluting the global namespace we use angular module inside variable.

myApp.controller("myCon", () => {
  let brolet = "asdasd";
  console.log(brolet);
  brolet = 12;
  document.querySelector(".az").classList.add("gradient");
  console.log({ a: "asd", c: 123213 });
  console.log(brolet);
});
