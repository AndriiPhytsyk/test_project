var Header = { name: "Sections", checkAllViews: false, checkAllEdits: false, checkAllRemoves: false, disabled: true };
var Categories = [
    { id: 1, name: "Calendar", view: { checked: false, disabled: false }, edit: { checked: false, disabled: true }, remove: { checked: false, disabled: true } },
    { id: 2, name: "Profile", view: { checked: false, disabled: false }, edit: { checked: false, disabled: true }, remove: { checked: false, disabled: true } },
    { id: 3, name: "Property", view: { checked: false, disabled: false }, edit: { checked: false, disabled: true }, remove: { checked: false, disabled: true } },
    { id: 4, name: "Contacts", view: { checked: false, disabled: false }, edit: { checked: false, disabled: true }, remove: { checked: false, disabled: true } }
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
        this.templateUrl = "./content.html";
    }
    return HerosComponent;
}());
angular
    .module("mySuperAwesomeApp", [])
    .component("heros", new HerosComponent());
angular.element(document).ready(function () {
    angular.bootstrap(document, ["mySuperAwesomeApp"]);
});
