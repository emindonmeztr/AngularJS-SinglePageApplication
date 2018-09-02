var myBookStoreApp = angular.module('myBookStoreApp', ['ngRoute']);
myBookStoreApp.config(['$routeProvider', function($routeProvider){

$routeProvider
.when('/home', {
  templateUrl: 'views/home.html'
})
.when('/directory', {
  templateUrl: 'views/directory.html',
  controller: 'BookStoreController'
}).otherwise({
  redirectTo: '/home'
});

}]);

myBookStoreApp.controller('BookStoreController', ['$scope', function($scope){

$scope.removeBook = function(book){
  var removedBook = $scope.books.indexOf(book);
  $scope.books.splice(removedBook, 1);
};

$scope.addBook = function(){
$scope.books.push({
  name: $scope.newbook.name,
  belt: $scope.newbook.belt,
  price: parseInt($scope.newbook.price),
  author: $scope.newbook.author,
  available: true,
  thumb: $scope.newbook.thumb
});

$scope.newbook.name ="";
$scope.newbook.belt ="";
$scope.newbook.price ="";
$scope.newbook.author ="";
$scope.newbook.thumb ="";
};

$scope.books = [
  {
  	name: "Anna Karenina",
  	belt: "brown",
  	price: 1,
    author: "Leo Tolstoy",
  	available: true,
  	thumb: "content/img/yoshi.png"
  }, {
  	name: "Madame Bovary",
  	belt: "red",
  	price: 2,
    author: "Gustave Flaubert",
  	available: true,
  	thumb: "content/img/crystal.png"
  }, {
  	name: "War and Peace",
  	belt: "orange",
  	price: 3,
    author: "Leo Tolstoy",
  	available: true,
  	thumb: "content/img/ryu.png"
  }, {
  	name: "The Great Gatsby",
  	belt: "black",
  	price: 4,
    author: "F.Scott Fitzgerald",
  	available: true,
  	thumb: "content/img/shaun.png"
  }
  , {
  	name: "Lolita",
  	belt: "yellow",
  	price: 5,
    author: "Vladimir Nabokov",
  	available: true,
  	thumb: "content/img/shaun.png"
  }
  , {
  	name: "Middlemarch",
  	belt: "pink",
  	price: 6,
    author: "George Eliot",
  	available: true,
  	thumb: "content/img/shaun.png"
  }
  , {
  	name: "The Adventures of Huckleberry Finn",
  	belt: "purple",
  	price: 7,
    author: "Mark Twain",
  	available: true,
  	thumb: "content/img/shaun.png"
  }
  , {
    name: "The Stories of Anton Chekhov",
    belt: "magenta",
    price: 8,
    author: "Anton Chekhov",
    available: true,
    thumb: "content/img/shaun.png"
  }
  , {
    name: "In Search of Lost Time",
    belt: "silver",
    price: 9,
    author: "Marcel Proust",
    available: true,
    thumb: "content/img/shaun.png"
  }
  , {
    name: "Hamlet",
    belt: "gold",
    price: 10,
    author: "William Shakespeare",
    available: true,
    thumb: "content/img/shaun.png"
  }
];

}]);
