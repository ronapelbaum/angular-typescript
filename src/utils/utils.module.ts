module myapp.utils{
    angular.module('myapp.utils', [])
        .service('NameService', NameService)
        .controller('Greeter', Greeter)
        .directive('greeter', GreeterDirective);
}
