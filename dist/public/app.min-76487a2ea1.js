angular.module("app",["ui.bootstrap","ui.router"]).config(["$urlRouterProvider","$locationProvider",function(t,a){"use strict";a.html5Mode(!0),t.otherwise("/")}]).run(["$rootScope","$state",function(t,a){"use strict";t.appName="app",t.$state=a}]),angular.module("app").config(["$stateProvider",function(t){"use strict";t.state("about",{url:"/about",templateUrl:"app/about/about.html"})}]),angular.module("app").controller("MainCtrl",["$scope","$http",function(t,a){function n(){a.get("/api/fruit").success(function(a){t.fruit=a}).error(i)}function i(){console.log("there was an error accessing the api")}t.fruit=[],t.newItem={},t.add=function(){t.saving=!0,t.newItem.name&&a.post("/api/fruit",angular.copy(t.newItem)).success(function(a){t.fruit.push(a),t.newItem={},t.saving=!1}).error(function(){i(),t.saving=!1})},t.remove=function(n){var e=this.$index;a["delete"]("/api/fruit/"+n).success(function(){t.fruit.splice(e,1)}).error(i)},t.startEdit=function(a){t.currentEdit=angular.copy(a)},t.update=function(n,e,r){return n.name||(n.name=t.currentEdit.name),"blur"===e&&"submit"===t.saveEvent?void(t.saveEvent=null):(t.saveEvent=e,t.currentEdit=null,void a.put("/api/fruit/"+n._id,n).error(i))},n()}]),angular.module("app").config(["$stateProvider",function(t){"use strict";t.state("main",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"})}]),angular.module("app").directive("inputFocus",["$timeout",function(t){"use strict";return function(a,n,i){a.$watch(i.inputFocus,function(a){a&&t(function(){n[0].focus()},0,!1)})}}]),function(t){try{t=angular.module("app")}catch(a){t=angular.module("app",[])}t.run(["$templateCache",function(t){t.put("components/navbar/navbar.html",'<div class="navbar navbar-default navbar-static-top" ng-init="isCollapsed = true"><div class="container"><div class="navbar-header"><button class="navbar-toggle" type="button" ng-click="isCollapsed = !isCollapsed"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a href="/" class="navbar-brand">{{appName}}</a></div><div collapse="isCollapsed" class="navbar-collapse collapse"><ul class="nav navbar-nav navbar-right"><li ng-class="{active: $state.is(\'main\')}"><a ui-sref="main">Main</a></li><li ng-class="{active: $state.is(\'about\')}"><a ui-sref="about">About</a></li></ul></div></div></div>')}])}(),function(t){try{t=angular.module("app")}catch(a){t=angular.module("app",[])}t.run(["$templateCache",function(t){t.put("app/about/about.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class="container"><h1>About</h1><p>About page</p></div>')}])}(),function(t){try{t=angular.module("app")}catch(a){t=angular.module("app",[])}t.run(["$templateCache",function(t){t.put("app/main/main.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class="container main"><h1>Fruit</h1><form class="form-inline form-add" ng-submit="add()"><input ng-model="newItem.name" name="name" placeholder="Enter fruit name" class="form-control" required ng-disabled="saving"> <button class="btn btn-default" ng-disabled="saving" ng-bind="saving ? \'Saving...\' : \'Add\'"></button></form><p>Double click the name of the fruit to edit</p><div class="panel panel-default"><div class="panel-body"><table class="table table-hover"><thead><tr><th>#</th><th>name</th><th>delete</th></tr></thead><tbody><tr ng-repeat="fruit in fruit"><td>{{$index}}</td><td ng-dblclick="startEdit(fruit); isEditing = !isEditing;" class="td-name"><span ng-hide="isEditing">{{fruit.name}}</span><form ng-submit="update(fruit, \'submit\'); isEditing = false" ng-show="isEditing" class="form-inline"><input ng-model="fruit.name" ng-blur="update(fruit, \'blur\'); isEditing = false" input-focus="isEditing" class="form-control input-sm" required></form></td><td><a href class="btn btn-xs btn-danger" ng-click="remove(fruit._id)">&times;</a></td></tr></tbody></table></div></div></div>')}])}();