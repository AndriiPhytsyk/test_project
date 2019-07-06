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

class HerosComponentController implements ng.IComponentController {

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
        console.log('name',name)
        console.log('categories',this.categories)

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

class HerosComponent implements ng.IComponentOptions {

    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public templateUrl: string;

    constructor() {
        this.controller = HerosComponentController;
        this.controllerAs = "$ctrl";
        this.templateUrl = `./content.html`;
    }
}

angular
    .module("mySuperAwesomeApp", [])
    .component("heros", new HerosComponent());

angular.element(document).ready(function() {
    angular.bootstrap(document, ["mySuperAwesomeApp"]);
});
