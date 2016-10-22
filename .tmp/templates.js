(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/navbar/navbar.html',
    '<div class="navbar navbar-default navbar-static-top" ng-init="isCollapsed = true"><div class="container"><div class="navbar-header"><button class="navbar-toggle" type="button" ng-click="isCollapsed = !isCollapsed"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a href="/" class="navbar-brand">{{appName}}</a></div><div collapse="isCollapsed" class="navbar-collapse collapse"><ul class="nav navbar-nav navbar-right"><li ng-class="{active: $state.is(\'main\')}"><a ui-sref="main">Main</a></li><li ng-class="{active: $state.is(\'about\')}"><a ui-sref="about">About</a></li></ul></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/about/about.html',
    '<div ng-include="\'components/navbar/navbar.html\'"></div><div class="container"><h1>About</h1><p>About page</p></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/main/main.html',
    '<div ng-include="\'components/navbar/navbar.html\'"></div><div class="container main"><h1>Fruit</h1><form class="form-inline form-add" ng-submit="add()"><input ng-model="newItem.name" name="name" placeholder="Enter fruit name" class="form-control" required ng-disabled="saving"> <button class="btn btn-default" ng-disabled="saving" ng-bind="saving ? \'Saving...\' : \'Add\'"></button></form><p>Double click the name of the fruit to edit</p><div class="panel panel-default"><div class="panel-body"><table class="table table-hover"><thead><tr><th>#</th><th>name</th><th>delete</th></tr></thead><tbody><tr ng-repeat="fruit in fruit"><td>{{$index}}</td><td ng-dblclick="startEdit(fruit); isEditing = !isEditing;" class="td-name"><span ng-hide="isEditing">{{fruit.name}}</span><form ng-submit="update(fruit, \'submit\'); isEditing = false" ng-show="isEditing" class="form-inline"><input ng-model="fruit.name" ng-blur="update(fruit, \'blur\'); isEditing = false" input-focus="isEditing" class="form-control input-sm" required></form></td><td><a href class="btn btn-xs btn-danger" ng-click="remove(fruit._id)">&times;</a></td></tr></tbody></table></div></div></div>');
}]);
})();
