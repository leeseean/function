app.service('dataService', [function ($http,$q) {
  var deferred = $q.defer();
  $http.get(url).then(function(data){
    deferred.resolve(data);
  });

  this.getData = function(){
    return deferred.promise;
  }
}]);
//控制器调用
app.controller('NameCtrl', ['$scope','dataService', function ($scope,dataService) {
  var promise = dataService.getData();
  promise.then(function(data){
    $scope.datas = data;
  })
}])