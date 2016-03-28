/// <reference path="../lib.ts" />
///<reference path="NameService.ts"/>
///<reference path="GreeterDirective.ts"/>

angular.module('utils', [])
    .service('NameService', NameService)
    .directive('greeter', GreeterDirective);
