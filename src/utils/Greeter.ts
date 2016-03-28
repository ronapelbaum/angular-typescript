///<reference path="NameService.ts"/>
class Greeter {
    private name:string;

    constructor(NameService:NameService) {
        this.name = NameService.getName();
    }

    public greet():string {
        return "Hello " + this.name;
    }
}
