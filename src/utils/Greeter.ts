class Greeter{
    private name;
    constructor(name:string){
        this.name = name;
    }
    public greet():string{
        return "Hello " + this.name;
    }
}

function GreeterDirective(){
    return {
        template:'{{greeter.greet()}}',
        scope:{name:'"bob"'},
        controller: Greeter,
        controllerAs: 'greeter'
    }
}
