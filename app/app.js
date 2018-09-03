var myBookStoreApp = angular.module('myBookStoreApp', ['ngRoute', 'ngAnimate']);
myBookStoreApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
$locationProvider.html5Mode(true);
$routeProvider
.when('/home', {
  templateUrl: 'views/home.html'
})
.when('/contact', {
  templateUrl: 'views/contact.html',
  controller: 'ContactController'
})
.when('/contact-success', {
  templateUrl: 'views/contact-success.html',
  controller: 'ContactController'
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

$scope.removeAll = function(){
 $scope.books = [];
};

$scope.books = [
  {
  	name: "Anna Karenina",
  	belt: "brown",
  	price: 76.82,
    author: "Leo Tolstoy",
  	available: true,
  	thumb: "content/img/image.png"
  }, {
  	name: "Madame Bovary",
  	belt: "red",
  	price: 39.37,
    author: "Gustave Flaubert",
  	available: true,
  	thumb: "content/img/image.png"
  }, {
  	name: "War and Peace",
  	belt: "orange",
  	price: 89.93,
    author: "Leo Tolstoy",
  	available: true,
  	thumb: "content/img/image.png"
  }, {
  	name: "The Great Gatsby",
  	belt: "black",
  	price: 67.49,
    author: "F.Scott Fitzgerald",
  	available: true,
  	thumb: "content/img/image.png"
  }
  , {
  	name: "Lolita",
  	belt: "yellow",
  	price: 66.10,
    author: "Vladimir Nabokov",
  	available: true,
  	thumb: "content/img/image.png"
  }
  , {
  	name: "Middlemarch",
  	belt: "pink",
  	price: 68.22,
    author: "George Eliot",
  	available: true,
  	thumb: "content/img/image.png"
  }
  , {
  	name: "The Adventures of Huckleberry Finn",
  	belt: "purple",
  	price: 19.79,
    author: "Mark Twain",
  	available: true,
  	thumb: "content/img/image.png"
  }
  , {
    name: "The Stories of Anton Chekhov",
    belt: "magenta",
    price: 95.29,
    author: "Anton Chekhov",
    available: true,
    thumb: "content/img/image.png"
  }
  , {
    name: "In Search of Lost Time",
    belt: "silver",
    price: 151.53,
    author: "Marcel Proust",
    available: true,
    thumb: "content/img/image.png"
  }
  , {
    name: "Hamlet",
    belt: "gold",
    price: 37.76,
    author: "William Shakespeare",
    available: true,
    thumb: "content/img/image.png"
  }
];

}]);

myBookStoreApp.controller('ContactController', ['$scope', '$location', function($scope, $location){

$scope.sendMessage = function(){
  $location.path('/contact-success');
};

}]);
