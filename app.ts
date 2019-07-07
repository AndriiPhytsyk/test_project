import * as angular from 'angular';
import '@uirouter/angularjs';
import 'angular-ui-bootstrap';
import './style.css';

import { AppComponent } from './script.ts';


let appModule =
    angular
        .module('app', [])
        .component('myApp', new AppComponent)


angular.bootstrap(document, [appModule.name]);

// angular
//     .module("mySuperAwesomeApp", [])
//     .component("heros", new HerosComponent());
//
// angular.element(document).ready(function() {
//     angular.bootstrap(document, ["mySuperAwesomeApp"]);
// });
