var Header = { name: "Sections", checkAllViews: false, checkAllEdits: false, checkAllRemoves: false, disabled: true };
var Categories = [
    { id: 1, name: "Calendar", view: false, edit: false, remove: false },
    { id: 2, name: "Profile", view: false, edit: false, remove: false },
    { id: 3, name: "Property", view: false, edit: false, remove: false },
    { id: 4, name: "Contacts", view: false, edit: false, remove: false }
];
var HerosComponentController = /** @class */ (function () {
    function HerosComponentController() {
    }
    HerosComponentController.prototype.$onInit = function () {
        this.categories = Categories;
        this.header = Header;
    };
    return HerosComponentController;
}());
var HerosComponent = /** @class */ (function () {
    function HerosComponent() {
        this.controller = HerosComponentController;
        this.controllerAs = "$ctrl";
        this.template = "\n<div class=\"row d-flex justify-content-center\">\n    <table class=\"table col-6\">\n    <thead>\n        <tr>\n            <th scope=\"col\">{{$ctrl.header.name}}</th>\n            <th scope=\"col\"><input type=\"checkbox\" ng-model=\"$ctrl.header.checkAllViews\" disabled=\"$ctrl.header.disabled\">Check All</th>\n            <th scope=\"col\"><input type=\"checkbox\" ng-model=\"$ctrl.header.checkAllEdits\" disabled=\"$ctrl.header.disabled\">Check All</th>\n            <th scope=\"col\"><input type=\"checkbox\" ng-model=\"$ctrl.header.checkAllRemoves\" disabled=\"$ctrl.header.disabled\">Check All</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr ng-repeat=\"category in $ctrl.categories\" class=\"bottom-border-dotted\">\n            <td>{{category.name}}</td>\n            <td><input type=\"checkbox\" ng-model=\"category.view\">View</td>\n            <td><input type=\"checkbox\" ng-model=\"category.edit\">Edit</td>\n            <td><input type=\"checkbox\" ng-model=\"category.remove\">Remove</td>\n        </tr>\n    </tbody>\n</table>\n</div>\n<div class=\"row d-flex justify-content-center\">\n<div class=\"col-6\">\n<button type=\"button\" class=\"btn btn-primary ml-auto d-block\">Save</button>\n</div>\n    \n</div>\n\n\n    ";
    }
    return HerosComponent;
}());
angular
    .module("mySuperAwesomeApp", [])
    .component("heros", new HerosComponent());
angular.element(document).ready(function () {
    angular.bootstrap(document, ["mySuperAwesomeApp"]);
});
