var app = angular.module('test', []);

app.controller('MainCtrl', function ($scope, $http) {

  let vm = this;
  vm.array_1 =[];
  
  $http({

    method: 'GET',
    url: 'http://localhost:8090/rest/people'

  }).then(function successCallback(response) {

    vm.array_1 = response.data;
    vm.array_1.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;

    })

  }, function errorCallback(response) {
        alert('Server or Internet error');
  });



});
