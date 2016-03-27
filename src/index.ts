import 'lib.ts';

function App () {
  return {
    restrict: 'E',
    template: '<h1>{{ App.what }}</h1>',
    controller: AppController,
    controllerAs: 'App'
  }
}

class AppController {

  what: string;

  constructor() {
    this.what = "Angular + TypeScript + Webpcak Minimal Starter!";
  }

}

angular.module('app', [])
.directive('app', App);

angular.bootstrap(document, ['app']);
