module myapp.Utils{
    angular.module('utils', [])
        .service('NameService', NameService)
        .controller('Greeter', Greeter)
        .directive('greeter', GreeterDirective);
}
