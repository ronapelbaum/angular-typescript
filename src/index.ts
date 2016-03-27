/// <reference path="lib.ts" />
/// <reference path="utils/utils.module.ts" />

//import 'lib.ts';


function App () {
  return {
    restrict: 'E',
    template: '<h1>{{ App.message }}</h1>',
    controller: AppController,
    controllerAs: 'App'
  }
}

class AppController {

  message: string;

  constructor() {
    this.message = "Angular + TypeScript + Webpcak Minimal Starter!";
  }

}

angular.module('app', ['utils'])
.directive('app', App);

//angular.bootstrap(document, ['app']);
