interface ICategories {
    id: number;
    name: string;
    view: boolean;
    edit: boolean;
    remove: boolean;
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
    { id: 1, name: "Calendar", view: {checked: true, disabled: false}, edit: {checked: false, disabled: true}, remove:{checked: false, disabled: true} },
    { id: 2, name: "Profile", view: {checked: false, disabled: false}, edit: {checked: false, disabled: true}, remove:{checked: false, disabled: true} },
    { id: 3, name: "Property", view: {checked: false, disabled: false}, edit: {checked: false, disabled: true}, remove:{checked: false, disabled: true} },
    { id: 4, name: "Contacts", view: {checked: false, disabled: false}, edit: {checked: false, disabled: true}, remove:{checked: false, disabled: true} }
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
<div class="row d-flex justify-content-center">
    <table class="table col-6">
    <thead>
        <tr>
            <th scope="col">{{$ctrl.header.name}}</th>
            <th scope="col"><input type="checkbox" ng-model="$ctrl.header.checkAllViews" disabled="$ctrl.header.disabled">Check All</th>
            <th scope="col"><input type="checkbox" ng-model="$ctrl.header.checkAllEdits" disabled="$ctrl.header.disabled">Check All</th>
            <th scope="col"><input type="checkbox" ng-model="$ctrl.header.checkAllRemoves" disabled="$ctrl.header.disabled">Check All</th>
        </tr>
    </thead>
    <tbody>
        <tr ng-repeat="category in $ctrl.categories" class="bottom-border-dotted">
            <td>{{category.name}}</td>
            <td><input type="checkbox" ng-model="category.checked.view">View</td>
            <td><input type="checkbox" ng-model="category.checked.edit">Edit</td>
            <td><input type="checkbox" ng-model="category.checked.remove">Remove</td>
        </tr>
    </tbody>
</table>
</div>
<div class="row d-flex justify-content-center">
<div class="col-6">
<button type="button" class="btn btn-primary ml-auto d-block">Save</button>
</div>
    
</div>


    `;
    }
}

angular
    .module("mySuperAwesomeApp", [])
    .component("heros", new HerosComponent());

angular.element(document).ready(function() {
    angular.bootstrap(document, ["mySuperAwesomeApp"]);
});
