(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form>\n   <div class=\"form-group\">\n   <h1 class=\"text-center text-primary\">{{ title }}</h1>\n    <div class=\"input-group-prepend\">\n      <input type=\"text\" #todo class=\"form-control\" placeholder=\"Add Todo\" name=\"todo\" ngModel>\n      <span class=\"input-group-text\" (click)=\"addTodo(todo.value)\">\n        <i class=\"material-icons\">add</i>\n        </span>        \n    </div>\n   </div>\n\n  <div class=\"data\">\n    <ul class=\"list-unstyled\">\n      <li *ngFor=\"let todo of todoArray\">{{todo}}\n        <i (click)=\"deleteItem(todo)\" class=\"material-icons\">delete</i>\n        </li>\n    </ul>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url('https://fonts.googleapis.com/css?family=Raleway');\n/*Google fonts*/\nbody{\n    padding: 0;\n    margin: 0;\n   }\nform{\n    max-width: 30em;\n    margin: 4em auto;\n    position: relative;\n       background: #f4f4f4;\n       padding: 2em 3em;\n       overflow: hidden;\n   }\nform h1{\n       font-family: \"Raleway\";\n       color:#F97300; \n   }\nform input[type=text]::-webkit-input-placeholder{\n      font-family: \"Raleway\";\n      color:#666; \n   }\nform input[type=text]::-moz-placeholder{\n      font-family: \"Raleway\";\n      color:#666; \n   }\nform input[type=text]::-ms-input-placeholder{\n      font-family: \"Raleway\";\n      color:#666; \n   }\nform input[type=text]::placeholder{\n      font-family: \"Raleway\";\n      color:#666; \n   }\nform .data{\n       margin-top: 1em;\n   }\nform .data li{\n    background: #fff;\n    border-left: 4px solid #F97300;\n    padding: 1em;\n    margin: 1em auto;\n    color: #666;\n    font-family: \"Raleway\";\n   }\nform .data li i{\n       float: right;\n       color: #888;\n       cursor: pointer;\n   }\nform .input-group-text{\n       background: #F97300;\n       border-radius: 50%;\n       width: 5em;\n       height: 5em;\n       padding: 1em 23px;\n       color: #fff;\n       position: absolute;\n       right: 13px;\n       top: 68px;\n       cursor: pointer;\n   }\nform .input-group-text i{\n       font-size: 2em;\n   }\nform .form-control{\n    height: 3em;\n       font-family: \"Raleway\";\n   }\nform .form-control:focus{\n    box-shadow: 0;\n   }\n   \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDhEQUE4RDtBQUQ5RCxlQUFlO0FBQ2dEO0lBQzNELFVBQVU7SUFDVixTQUFTO0dBQ1Y7QUFDQTtJQUNDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO09BQ2YsbUJBQW1CO09BQ25CLGdCQUFnQjtPQUNoQixnQkFBZ0I7R0FDcEI7QUFDQTtPQUNJLHNCQUFzQjtPQUN0QixhQUFhO0dBQ2pCO0FBQ0E7TUFDRyxzQkFBc0I7TUFDdEIsVUFBVTtHQUNiO0FBSEE7TUFDRyxzQkFBc0I7TUFDdEIsVUFBVTtHQUNiO0FBSEE7TUFDRyxzQkFBc0I7TUFDdEIsVUFBVTtHQUNiO0FBSEE7TUFDRyxzQkFBc0I7TUFDdEIsVUFBVTtHQUNiO0FBQ0E7T0FDSSxlQUFlO0dBQ25CO0FBQ0E7SUFDQyxnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHNCQUFzQjtHQUN2QjtBQUNBO09BQ0ksWUFBWTtPQUNaLFdBQVc7T0FDWCxlQUFlO0dBQ25CO0FBQ0E7T0FDSSxtQkFBbUI7T0FDbkIsa0JBQWtCO09BQ2xCLFVBQVU7T0FDVixXQUFXO09BQ1gsaUJBQWlCO09BQ2pCLFdBQVc7T0FDWCxrQkFBa0I7T0FDbEIsV0FBVztPQUNYLFNBQVM7T0FDVCxlQUFlO0dBQ25CO0FBQ0E7T0FDSSxjQUFjO0dBQ2xCO0FBQ0E7SUFDQyxXQUFXO09BQ1Isc0JBQXNCO0dBQzFCO0FBQ0E7SUFDQyxhQUFhO0dBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qR29vZ2xlIGZvbnRzKi9cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheScpO2JvZHl7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICB9XG4gICBmb3Jte1xuICAgIG1heC13aWR0aDogMzBlbTtcbiAgICBtYXJnaW46IDRlbSBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICAgICAgIHBhZGRpbmc6IDJlbSAzZW07XG4gICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIH1cbiAgIGZvcm0gaDF7XG4gICAgICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICAgICAgIGNvbG9yOiNGOTczMDA7IFxuICAgfVxuICAgZm9ybSBpbnB1dFt0eXBlPXRleHRdOjpwbGFjZWhvbGRlcntcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcbiAgICAgIGNvbG9yOiM2NjY7IFxuICAgfVxuICAgZm9ybSAuZGF0YXtcbiAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICB9XG4gICBmb3JtIC5kYXRhIGxpe1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjRjk3MzAwO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcbiAgIH1cbiAgIGZvcm0gLmRhdGEgbGkgaXtcbiAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgfVxuICAgZm9ybSAuaW5wdXQtZ3JvdXAtdGV4dHtcbiAgICAgICBiYWNrZ3JvdW5kOiAjRjk3MzAwO1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICB3aWR0aDogNWVtO1xuICAgICAgIGhlaWdodDogNWVtO1xuICAgICAgIHBhZGRpbmc6IDFlbSAyM3B4O1xuICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICByaWdodDogMTNweDtcbiAgICAgICB0b3A6IDY4cHg7XG4gICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgfVxuICAgZm9ybSAuaW5wdXQtZ3JvdXAtdGV4dCBpe1xuICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgfVxuICAgZm9ybSAuZm9ybS1jb250cm9se1xuICAgIGhlaWdodDogM2VtO1xuICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcbiAgIH1cbiAgIGZvcm0gLmZvcm0tY29udHJvbDpmb2N1c3tcbiAgICBib3gtc2hhZG93OiAwO1xuICAgfVxuICAgIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.todoArray = [];
    }
    //todoForm: new FormGroup()
    addTodo(value) {
        if (value !== "") {
            this.todoArray.push(value);
            //console.log(this.todos) 
        }
        else {
            alert('Field required **');
        }
    }
    /*delete item*/
    deleteItem(todo) {
        for (let i = 0; i <= this.todoArray.length; i++) {
            if (todo == this.todoArray[i]) {
                this.todoArray.splice(i, 1);
            }
        }
    }
    // submit Form
    todoSubmit(value) {
        if (value !== "") {
            this.todoArray.push(value.todo);
            //this.todoForm.reset()
        }
        else {
            alert('Field required **');
        }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/marc/GitHub/Developpeur-Web/todo-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map