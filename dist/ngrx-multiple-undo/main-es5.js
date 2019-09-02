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

module.exports = "<div class=\"main-container\">\n  <div class=\"content-container\">\n    <div class=\"content-area\">\n      <h3>Multiple Undo Demo</h3>\n      <clr-datagrid [(clrDgSelected)]=\"selected\">\n\n        <clr-dg-action-bar>\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"onAdd()\">\n              <clr-icon shape=\"plus\"></clr-icon> Add\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"onDelete()\" [disabled]=\"!selected.length\">\n              <clr-icon shape=\"minus\"></clr-icon> Delete\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"onUndo()\" [disabled]=\"!undoable\">\n              <clr-icon shape=\"undo\"></clr-icon> Undo\n            </button>\n          </div>\n        </clr-dg-action-bar>\n        <clr-dg-column>Customer Name</clr-dg-column>\n        <clr-dg-column>Product</clr-dg-column>\n        <clr-dg-column>Rate</clr-dg-column>\n        <clr-dg-column>Total</clr-dg-column>\n\n        <clr-dg-row *ngFor=\"let order of orders\" [clrDgItem]=\"order\">\n          <clr-dg-cell>{{order.customerName}}</clr-dg-cell>\n          <clr-dg-cell>{{order.product}}</clr-dg-cell>\n          <clr-dg-cell>{{order.rate}}</clr-dg-cell>\n          <clr-dg-cell>{{order.total}}</clr-dg-cell>\n        </clr-dg-row>\n\n        <clr-dg-footer>{{orders?.length}} Orders</clr-dg-footer>\n      </clr-datagrid>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "clr-datagrid {\n  min-height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWdhcnMvUGVyc29uYWwvZ2l0aHViL25ncngtbXVsdGlwbGUtdW5kby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNsci1kYXRhZ3JpZCB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufSIsImNsci1kYXRhZ3JpZCB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_4__);





var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        var _this = this;
        this.store = store;
        this.title = 'ngrx-multiple-undo';
        this.selected = [];
        this.orders = [];
        store.select('ordersState').subscribe(function (ordersState) {
            _this.orders = ordersState.orders;
        });
        store.select(_reducers__WEBPACK_IMPORTED_MODULE_3__["hasUndo"]).subscribe(function (undoable) { return _this.undoable = undoable; });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onAdd = function () {
        var order = { id: Object(shortid__WEBPACK_IMPORTED_MODULE_4__["generate"])(), customerName: "Customer " + Object(shortid__WEBPACK_IMPORTED_MODULE_4__["generate"])(), product: Object(shortid__WEBPACK_IMPORTED_MODULE_4__["generate"])(), rate: 2, total: 100 };
        this.store.dispatch(Object(_reducers__WEBPACK_IMPORTED_MODULE_3__["addOrder"])(order));
    };
    AppComponent.prototype.onDelete = function () {
        this.store.dispatch(Object(_reducers__WEBPACK_IMPORTED_MODULE_3__["deleteOrder"])({ ids: this.selected.map(function (s) { return s.id; }) }));
        this.selected = [];
    };
    AppComponent.prototype.onUndo = function () {
        this.store.dispatch(Object(_reducers__WEBPACK_IMPORTED_MODULE_3__["undo"])());
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_7__["reducers"], {
                    metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_7__["metaReducers"],
                    runtimeChecks: {
                        strictStateImmutability: true,
                        strictActionImmutability: true
                    }
                }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: INIT_ORDER_STATE, INIT_STATE, reducers, addOrder, deleteOrder, undo, orderReducer, orderStateReducer, undoMetaReducer, metaReducers, hasUndo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_ORDER_STATE", function() { return INIT_ORDER_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_STATE", function() { return INIT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrder", function() { return addOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOrder", function() { return deleteOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undo", function() { return undo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderReducer", function() { return orderReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderStateReducer", function() { return orderStateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undoMetaReducer", function() { return undoMetaReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasUndo", function() { return hasUndo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



var INIT_ORDER_STATE = {
    orders: []
};
var INIT_STATE = {
    ordersState: INIT_ORDER_STATE,
    undoStack: []
};
// REDUCERS
var reducers = {
    ordersState: orderStateReducer,
    undoStack: function (state, action) { return state; }
};
var addOrder = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Order] Add", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
var deleteOrder = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Order] Delete", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
var undo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Order] Undo");
var orderReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(INIT_ORDER_STATE, 
// add order
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(addOrder, function (state, order) {
    var list = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state.orders);
    list.push(order);
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { orders: list });
}), 
// delete order
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(deleteOrder, function (state, _a) {
    var ids = _a.ids;
    var list = state.orders.filter(function (o) { return ids.indexOf(o.id) === -1; });
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { orders: list });
}));
function orderStateReducer(state, action) {
    return orderReducer(state, action);
}
function undoMetaReducer(reducer) {
    return function (state, action) {
        if (state === void 0) { state = INIT_STATE; }
        if (action.type === '@ngrx/store/init') {
            return state;
        }
        if (action.type === undo.type) {
            var stack = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state.undoStack);
            var replaceWith = stack.pop();
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { ordersState: replaceWith, undoStack: stack });
        }
        var undoStack = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state.undoStack);
        undoStack.push(state.ordersState);
        state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { undoStack: undoStack });
        return reducer(state, action);
    };
}
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? [undoMetaReducer] : [];
// SELECTORS
var hasUndo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(function (state) { return state.undoStack; }, function (undoStack) { return undoStack && undoStack.length > 0; });


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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nagars/Personal/github/ngrx-multiple-undo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map