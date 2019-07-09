
interface ICategories {
    id: number;
    name: string;
    view: {checked: boolean, disabled: boolean};
    edit: {checked: boolean, disabled: boolean};
    remove: {checked: boolean, disabled: boolean};
}

interface IHeader {
    name: string,
    view: {checked: boolean, disabled: boolean},
    edit: {checked: boolean, disabled: boolean},
    remove: {checked: boolean, disabled: boolean},
}

const Header: IHeader = {name: "Sections", view: {checked: false, disabled: false}, edit:{checked: false, disabled: true}, remove:{checked: false, disabled: true}};

const Categories: ICategories[] = [
    { id: 1, name: "Calendar",
        view: {checked: false, disabled: false},
        edit: {checked: false, disabled: true},
        remove:{checked: false, disabled: true} },
    { id: 2, name: "Profile",
        view: {checked: false, disabled: false},
        edit: {checked: false, disabled: true},
        remove:{checked: false, disabled: true} },
    { id: 3, name: "Property",
        view: {checked: false, disabled: false},
        edit: {checked: false, disabled: true},
        remove:{checked: false, disabled: true} },
    { id: 4, name: "Contacts",
        view: {checked: false, disabled: false},
        edit: {checked: false, disabled: true},
        remove:{checked: false, disabled: true} }
];

export class AppComponentController implements ng.IComponentController {

    public categories: ICategories[];
    public header: IHeader;

    public ifCheckedAll: boolean = false;

    constructor() {}

    public $onInit () {
        this.categories = Categories;
        this.header = Header;
    }

    public toggleSelection(e) {
        const { name } = e.target;

        this.ifCheckedAll = this.categories.every(category => category[name].checked)

        if (this.ifCheckedAll) {
            this.header[name].checked = true;
            this.header[name].disabled = false;
        } else {
            this.header[name].checked = false;
            this.header[name].disabled = true;
        }
    }

    private mapper(){
        return this.categories.map(category => {
            return {
                section: category.name,
                permission: {
                    view: category.view.checked,
                    edit: category.edit.checked,
                    remove: category.remove.checked,
                }
            }
        })
    }

    public saveInLocalStorage() {
        const mappedObj =  this.mapper();
        window.localStorage.setItem('savedItems', JSON.stringify(mappedObj))
    }

}

export class AppComponent implements ng.IComponentOptions {

    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public template: string;

    constructor() {
        this.controller = AppComponentController;
        this.controllerAs = "$ctrl";
        this.template = `<div class="d-flex justify-content-center ">
<div class="row frame  mt-5 p-4">
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">{{$ctrl.header.name}}</th>
                <th scope="col"><input type="checkbox" class="d-block d-sm-inline mx-auto" ng-model="$ctrl.header.view.checked" ng-disabled="$ctrl.header.view.disabled"><span class="text-center d-sm-inline ml-sm-1">Check All</span></th>
                <th scope="col"><input type="checkbox" class="d-block d-sm-inline mx-auto" ng-model="$ctrl.header.edit.checked" ng-disabled="$ctrl.header.edit.disabled"><span class="text-center d-sm-inline ml-sm-1">Check All</span></th>
                <th scope="col"><input type="checkbox" class="d-block d-sm-inline mx-auto" ng-model="$ctrl.header.remove.checked" ng-disabled="$ctrl.header.remove.disabled"><span class="text-center d-sm-inline ml-sm-1">Check All</span></th>
            </tr>
            </thead>
            <tbody>
            <tr ng-repeat="category in $ctrl.categories" class="bottom-border-dotted">
                <td>{{category.name}}</td>
                <td><input class="d-flex d-sm-inline mx-auto" name="view" ng-click="$ctrl.toggleSelection($event)" type="checkbox" ng-model="category.view.checked" ng-disabled="category.view.disabled"><span class="text-center d-sm-inline ml-sm-1">View</span></td>
                <td><input class="d-flex d-sm-inline mx-auto" name="edit" ng-click="$ctrl.toggleSelection($event)" type="checkbox" ng-model="category.edit.checked" ng-disabled="!category.view.checked"><span class="text-center d-sm-inline ml-sm-1">Edit</span></td>
                <td><input class="d-flex d-sm-inline mx-auto" name="remove" ng-click="$ctrl.toggleSelection($event)" type="checkbox" ng-model="category.remove.checked" ng-disabled="!category.view.checked"><span class="text-center d-sm-inline ml-sm-1">Remove</span></td>
            </tr>
            </tbody>
        </table>
        <button type="button" class="btn btn-primary ml-auto d-block" ng-click="$ctrl.saveInLocalStorage()">Save</button>
    </div>
</div>
</div>
`;
    }
}



