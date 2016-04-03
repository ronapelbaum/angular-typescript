module myapp.title{
    angular.module('myapp.title', [])
        .controller(TitleController.mid, TitleController)
        .directive('title', ()=>new TitleDirective());
    
}
