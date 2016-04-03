module myapp.utils{
    export function GreeterDirective() {
        return {
            restrict: 'E',
            replace: true,
            template: `<h1 style="color: red;">{{greeter.greet()}}</h1>`,
            //scope: {dataService: 'NameService'},
            controller: 'Greeter',
            controllerAs: 'greeter'
        }
    }
}
