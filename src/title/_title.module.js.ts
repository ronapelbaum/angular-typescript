angular.module('title', [])
    .controller(TitleController.mid, TitleController)
    .directive('title', ()=>new TitleDirective());
