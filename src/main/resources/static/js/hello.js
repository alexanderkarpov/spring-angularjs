(function () {
    'use strict';

    angular.module('hello', [])
        .controller('HomeController', HomeController);

    function HomeController() {
        var controller = this;
        controller.id = 'xxxx';
        controller.content = 'Hello World!';
    }
})();