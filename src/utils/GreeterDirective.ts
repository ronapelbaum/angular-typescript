///<reference path="Greeter.ts"/>
function GreeterDirective() {
    return {
        template: '{{greeter.greet()}}',
        //scope: {dataService: 'NameService'},
        controller: Greeter,
        controllerAs: 'greeter'
    }
}
