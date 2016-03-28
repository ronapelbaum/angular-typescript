///<reference path="NameService.ts"/>
class Greeter {
    private name:string;

    constructor(NameService:NameService) {
        this.name = NameService.getName();
        console.log('Greeter ctor',this.name);
    }

    public greet():string {
        console.log('greet()', this.name);
        return "Hello " + this.name;
    }
}
