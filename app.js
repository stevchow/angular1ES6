const myApp = angular.module("myApp", []);
//to not poluting the global namespace we use angular module inside variable.

myApp.controller("myCon", function($scope) {
  let brolet = "asdasd";
  console.log(brolet);
  brolet = 12;
  document.querySelector(".az").classList.add("gradient");
  console.log({ a: "asd", c: 123213 });
  console.log(brolet);

  const request = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const json = await response.json();
    console.log(json);
  };

  $scope.$watch.randUser = request();
});
