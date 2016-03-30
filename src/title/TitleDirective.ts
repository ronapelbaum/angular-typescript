class TitleDirective implements ng.IDirective {
    restrict:string = 'E';
    replace:boolean = true;
    template:string = `<h1>{{ App.message }}</h1>`;
    controller:string = TitleController.mid;
    controllerAs:string = 'App';
}

