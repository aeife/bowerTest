angular.module('mySubmodule', [])
    .service('mySubmoduleService', function () {
        return {
            getMsg: function () {
                return 'Hello, World!';
            }
        }
    });