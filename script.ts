interface ICategories {
    id: number;
    name: string;
    view: boolean;
    edit: boolean;
    remove: boolean;
    disabled: boolean;
}

interface IHeader {
    name: string,
    checkAllViews: boolean,
    checkAllEdits: boolean,
    checkAllRemoves: boolean,
    disabled: boolean
}

const Header: IHeader = {name: "Sections", checkAllViews: false, checkAllEdits:false, checkAllRemoves:false, disabled: true};

const Categories: ICategories[] = [
    { id: 1, name: "Calendar", view: {active: false, disabled: false}, edit: false, remove:false },
    { id: 2, name: "Profile", view: false, edit: false, remove:false },
    { id: 3, name: "Property", view: false, edit: false, remove:false },
    { id: 4, name: "Contacts", view: false, edit: false, remove:false }
]

class HerosComponentController implements ng.IComponentController {

    public categories: ICategories[];
    public header: IHeader;

    constructor() {}

    public $onInit () {
        this.categories = Categories;
        this.header = Header;
    }
}

class HerosComponent implements ng.IComponentOptions {

    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public template: string;

    constructor() {
        this.controller = HerosComponentController;
        this.controllerAs = "$ctrl";
        this.template = `
    <table border="1">
    <thead>
        <tr>
            <th>{{$ctrl.header.name}}</th>
            <th><input type="checkbox" ng-model="$ctrl.header.checkAllViews" disabled="$ctrl.header.disabled">Check All</th>
            <th><input type="checkbox" ng-model="$ctrl.header.checkAllEdits" disabled="$ctrl.header.disabled">Check All</th>
            <th><input type="checkbox" ng-model="$ctrl.header.checkAllRemoves" disabled="$ctrl.header.disabled">Check All</th>
        </tr>
    </thead>
    <tbody>
        <tr ng-repeat="category in $ctrl.categories">
            <td>{{category.name}}</td>
            <td><input type="checkbox" ng-model="category.view">View</td>
            <td><input type="checkbox" ng-model="category.edit">Edit</td>
            <td><input type="checkbox" ng-model="category.remove">Remove</td>
        </tr>
    </tbody>
</table>
    `;
    }
}

angular
    .module("mySuperAwesomeApp", [])
    .component("heros", new HerosComponent());

angular.element(document).ready(function() {
    angular.bootstrap(document, ["mySuperAwesomeApp"]);
});