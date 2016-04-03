module myapp.utils{
    export class Greeter {
        private name:string;

        static $inject = ['NameService'];

        constructor(NameService:NameService) {
            //i need this comment
            this.name = NameService.getName();
            console.log('Greeter ctor', this.name);
        }

        /**
         * method comment
         * @returns {string}
         */
        public greet():string {
            console.log('greet()', this.name);
            return "Hello " + this.name;
        }
    }
    
}
