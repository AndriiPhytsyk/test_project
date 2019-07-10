import * as angular from 'angular';
import '@uirouter/angularjs';
import 'angular-ui-bootstrap';
import './style.css';

import { AppComponent } from './src/app.component';


let appModule =
    angular
        .module('app', [])
        .component('myApp', new AppComponent)


angular.bootstrap(document, [appModule.name]);

