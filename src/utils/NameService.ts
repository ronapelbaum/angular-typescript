module myapp.Utils {
    export class NameService {

        private counter = 0;

        constructor() {
            console.log('NameService ctor');
        }

        getName():string {
            this.counter++;
            var result;
            if (this.counter % 2 == 0)
                result = "Bob";
            else
                result = "Alice";
            console.log('getName()', result + this.counter.toString());

            return result + this.counter.toString();
        }
    }
}