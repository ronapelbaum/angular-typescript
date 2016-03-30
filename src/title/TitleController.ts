class TitleController {

    message:string;

    static $inject = ['$timeout'];
    static mid = 'TitleController';

    constructor(private $timeout:ng.ITimeoutService) {
        this.message = "Angular + TypeScript + Webpcak Minimal Starter!";
        $timeout(()=>this.message = "goodbye", 2000);
    }

}
