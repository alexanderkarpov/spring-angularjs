(function () {
    'use strict';

    angular.module('HelloApp')
        .controller('HelloController', HelloController);

    HelloController.$inject = ['HelloService'];

    function HelloController(HelloService) {
        var controller = this;

        controller.id = 'XXXX';
        controller.content = 'Hello World!';

        HelloService.getData()
            .then(function (response) {
                var data = response.data;
                controller.id = data.id;
                controller.content = data.content;
            })
            .catch(function (error) {
                console.log("something went terribly wrong", error)
            });

    }
})();