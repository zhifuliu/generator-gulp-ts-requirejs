/// <reference path="../references.d.ts" />

import $ = require("jquery");
//import ng = require('angular');
import ng = require('angular');

class Application {

}
//console.log(ng);
var app = new Application();
//ng.module('ngAppTs', []);
//var app = ng.module('myApp', []);
//app.controller('myCtrl', function($scope) {
//    $scope.firstName = 'zhifu'
//    $scope.lastName = 'liu';
//});

console.log($('#container').html());

export = app;
