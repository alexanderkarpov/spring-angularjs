(function () {
    'use strict';

    angular.module('HelloApp')
        .service('HelloService', HelloService);

    HelloService.$inject = ['$http'];

    function HelloService($http) {
        var service = this;
        service.getData = function () {
            return $http.get('/resource/');
        }
    }
})();