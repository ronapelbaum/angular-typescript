function TitleDirective() {
    return {
        restrict: 'E',
        replace:true,
        template: '<h1>{{ App.message }}</h1>',
        controller: TitleController,
        controllerAs: 'App'
    }
}

