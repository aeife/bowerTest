angular.module('myApp', ['mySubmodule'])
    .controller('MainCtrl', function (mySubmoduleService) {
        this.msg = mySubmoduleService.getMsg();
    });