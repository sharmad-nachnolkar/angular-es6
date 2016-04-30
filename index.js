import angular from 'angular'
import testCtrl from './controllers/testCtrl.js'
import directive1 from './directives/directive1.js'

console.dir(directive1)
var app = angular.module('app',[])
app.controller('testCtrl', testCtrl)
app.directive('directive1', () => new directive1())