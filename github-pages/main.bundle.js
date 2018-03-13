webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__("./src/app/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tree_view_tree_view_component__ = __webpack_require__("./src/app/tree-view/tree-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__features_storage_service__ = __webpack_require__("./src/app/features-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_form_order_form_component__ = __webpack_require__("./src/app/order-form/order-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shop_client_service__ = __webpack_require__("./src/app/shop-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editable_tree_view_editable_tree_view_component__ = __webpack_require__("./src/app/editable-tree-view/editable-tree-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__feature_tree_editor_form_feature_tree_editor_form_component__ = __webpack_require__("./src/app/feature-tree-editor-form/feature-tree-editor-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__feature_tree_editor_service__ = __webpack_require__("./src/app/feature-tree-editor-service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__editable_tree_view_inline_feature_editor_inline_feature_editor_component__ = __webpack_require__("./src/app/editable-tree-view/inline-feature-editor/inline-feature-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__form_elements_numeric_input_numeric_input_component__ = __webpack_require__("./src/app/form-elements/numeric-input/numeric-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__editable_tree_view_inline_feature_set_editor_inline_feature_set_editor_component__ = __webpack_require__("./src/app/editable-tree-view/inline-feature-set-editor/inline-feature-set-editor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__tree_view_tree_view_component__["a" /* TreeViewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__order_form_order_form_component__["a" /* OrderFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__editable_tree_view_editable_tree_view_component__["a" /* EditableTreeViewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__feature_tree_editor_form_feature_tree_editor_form_component__["a" /* FeatureTreeEditorFormComponent */],
                __WEBPACK_IMPORTED_MODULE_11__editable_tree_view_inline_feature_editor_inline_feature_editor_component__["a" /* InlineFeatureEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_13__editable_tree_view_inline_feature_set_editor_inline_feature_set_editor_component__["a" /* InlineFeatureSetEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_12__form_elements_numeric_input_numeric_input_component__["a" /* NumericInputComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__features_storage_service__["a" /* FeaturesStorageService */],
                __WEBPACK_IMPORTED_MODULE_7__shop_client_service__["a" /* ShopClientService */],
                __WEBPACK_IMPORTED_MODULE_10__feature_tree_editor_service__["a" /* FormEditorService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1, h2, h3 {\r\n  font-weight: normal;\r\n  margin: 0;\r\n}\r\n\r\n:host {\r\n  font-family: sans-serif;\r\n  display: block;\r\n  position: relative;\r\n  max-width: 50em;\r\n  margin: 3em auto;\r\n  padding: 1em;\r\n  background: white;\r\n  -webkit-box-shadow: 2px 2px 14px -2px rgba(0, 0, 0, 0.47);\r\n          box-shadow: 2px 2px 14px -2px rgba(0, 0, 0, 0.47);\r\n}\r\n\r\nh2 {\r\n  margin-bottom: 0.6em\r\n}\r\n\r\n.edit-mode-switch {\r\n  position: absolute;\r\n  left: calc(100% + 1em);\r\n  top: 0;\r\n}"

/***/ }),

/***/ "./src/app/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-order-form\r\n  *ngIf=\"mode === 'order'\"\r\n  [features]=features\r\n  [orderFormStore]=orderFormStore\r\n  >\r\n</app-order-form>\r\n\r\n<app-feature-tree-editor-form\r\n  *ngIf=\"mode === 'edit'\"\r\n  [features]=features\r\n  [editorService]=editorService\r\n  >\r\n</app-feature-tree-editor-form>\r\n\r\n<button\r\n  *ngIf=\"mode === 'order'\"\r\n  class=edit-mode-switch\r\n  (click)=editForm()\r\n  >\r\n  Edit form\r\n</button>\r\n\r\n<button\r\n  *ngIf=\"mode === 'edit'\"\r\n  class=edit-mode-switch\r\n  (click)=previewForm()\r\n  >\r\n  Preview form\r\n</button>"

/***/ }),

/***/ "./src/app/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features_storage_service__ = __webpack_require__("./src/app/features-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__features_order_storage__ = __webpack_require__("./src/app/features-order-storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feature_tree_editor_service___ = __webpack_require__("./src/app/feature-tree-editor-service/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(featuresStorage, client) {
        this.featuresStorage = featuresStorage;
        this.client = client;
        this.mode = 'edit';
        this.editorService = null;
        this.features = this.featuresStorage.getAvailableFeatures();
        this.orderFormStore = new __WEBPACK_IMPORTED_MODULE_2__features_order_storage__["a" /* FeaturesOrderStorage */]();
    }
    AppComponent.prototype.editForm = function () {
        this.mode = 'edit';
        this.editorService = new __WEBPACK_IMPORTED_MODULE_4__feature_tree_editor_service___["a" /* FormEditorService */](this.featuresStorage);
    };
    AppComponent.prototype.previewForm = function () {
        this.mode = 'order';
        this.orderFormStore = new __WEBPACK_IMPORTED_MODULE_2__features_order_storage__["a" /* FeaturesOrderStorage */]();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__features_storage_service__["a" /* FeaturesStorageService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/editable-tree-view/editable-tree-view.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: block;\r\n}\r\n\r\n:host, .new-item-editor {\r\n  padding-left: 1em;\r\n}\r\n\r\nlabel {\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n:host(.root) {\r\n  padding: 0\r\n}\r\n\r\nbutton {\r\n  margin: 0.15em 0;\r\n}"

/***/ }),

/***/ "./src/app/editable-tree-view/editable-tree-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"rootNodeFlow != null\">\n  <span>{{rootNodeFlow?.name}}</span>\n  <button (click)=editorService.initiateNewFeatureCreation(tree)>Add feature</button>\n  <button (click)=editorService.initiateNewFeatureSetCreation(tree)>Add feature set</button>\n</div>\n<div *ngIf=\"rootNodeFlow == null\">\n  <app-inline-feature-editor\n    *ngIf=\"editFeatureFlow != null\"\n    [editorState]=\"editFeatureFlow?.editorState\"\n    (submit)=\"editorService.saveChanges()\"\n    (cancel)=\"editorService.cancelEditing()\"\n    >\n  </app-inline-feature-editor>\n  <app-inline-feature-set-editor\n    *ngIf=\"editFeatureSetFlow != null\"\n    [editorState]=\"editFeatureSetFlow?.editorState\"\n    (submit)=\"editorService.saveChanges()\"\n    (cancel)=\"editorService.cancelEditing()\"\n    >\n  </app-inline-feature-set-editor>\n  <span *ngIf=\"featurePreviewFlow\">\n    <span (click)=edit()>{{featurePreviewFlow?.name}}</span>\n    <span (click)=edit()>${{featurePreviewFlow?.price}}</span>\n    <button (click)=delete()>X</button>\n  </span>\n  <span *ngIf=\"featureSetPreviewFlow\">\n    <span (click)=edit()>{{featureSetPreviewFlow?.name}}</span>\n    <button (click)=delete()>X</button>\n    <button (click)=editorService.initiateNewFeatureCreation(tree)>Add feature</button>\n    <button (click)=editorService.initiateNewFeatureSetCreation(tree)>Add feature set</button>\n  </span>\n</div>\n<app-editable-tree-view\n  *ngFor=\"let option of children\"\n  [tree]=option\n  [disabled]=disabled\n  [depth]=\"depth + 1\"\n  >\n</app-editable-tree-view>\n<app-inline-feature-editor\n  class=\"new-item-editor\"\n  *ngIf=\"childFeatureIsBeingCreatedFlow != null\"\n  [editorState]=\"childFeatureIsBeingCreatedFlow?.editorState\"\n  (submit)=\"editorService.saveChanges()\"\n  (cancel)=\"editorService.cancelEditing()\"\n  >\n</app-inline-feature-editor>\n<app-inline-feature-set-editor\n  class=\"new-item-editor\"\n  *ngIf=\"childFeatureSetIsBeingCreatedFlow != null\"\n  [editorState]=\"childFeatureSetIsBeingCreatedFlow?.editorState\"\n  (submit)=\"editorService.saveChanges()\"\n  (cancel)=\"editorService.cancelEditing()\"\n  >\n</app-inline-feature-set-editor>"

/***/ }),

/***/ "./src/app/editable-tree-view/editable-tree-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditableTreeViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feature_tree_editor_service__ = __webpack_require__("./src/app/feature-tree-editor-service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_misc_utils__ = __webpack_require__("./src/utils/misc-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditableTreeViewComponent = /** @class */ (function () {
    function EditableTreeViewComponent(editorService) {
        var _this = this;
        this.editorService = editorService;
        this.depth = 0;
        this.disabled = false;
        this.tree = null;
        this.rootNodeFlow = null;
        this.editFeatureFlow = null;
        this.editFeatureSetFlow = null;
        this.featurePreviewFlow = null;
        this.featureSetPreviewFlow = null;
        this.childFeatureIsBeingCreatedFlow = null;
        this.childFeatureSetIsBeingCreatedFlow = null;
        editorService.formState.subscribe(function () { return _this.updateState(); });
        this.updateState();
    }
    EditableTreeViewComponent.prototype.updateState = function () {
        var state = this.editorService.formState.get();
        this.rootNodeFlow = (this.tree != null &&
            this.depth === 0 &&
            this.tree.isBranch())
            ? this.tree.content
            : null;
        this.editFeatureFlow =
            (state.type === 'edit-feature' &&
                state.editorState.node === this.tree)
                ? { editorState: state.editorState }
                : null;
        this.editFeatureSetFlow =
            (state.type === 'edit-feature-set' &&
                state.editorState.node === this.tree)
                ? { editorState: state.editorState }
                : null;
        if (!this.editFeatureFlow && !this.editFeatureSetFlow) {
            this.featurePreviewFlow =
                (this.tree &&
                    this.tree.isLeaf())
                    ? this.tree.content
                    : null;
            this.featureSetPreviewFlow =
                (this.tree &&
                    this.tree.isBranch())
                    ? this.tree.content
                    : null;
        }
        else {
            this.featurePreviewFlow = null;
            this.featureSetPreviewFlow = null;
        }
        if (state.type === 'edit-feature' &&
            state.newItemParameters != null &&
            state.newItemParameters.parent === this.tree) {
            this.childFeatureIsBeingCreatedFlow = {
                editorState: state.editorState
            };
        }
        else {
            this.childFeatureIsBeingCreatedFlow = null;
        }
        if (state.type === 'edit-feature-set' &&
            state.newItemParameters != null &&
            state.newItemParameters.parent === this.tree) {
            this.childFeatureSetIsBeingCreatedFlow = {
                editorState: state.editorState
            };
        }
        else {
            this.childFeatureSetIsBeingCreatedFlow = null;
        }
    };
    Object.defineProperty(EditableTreeViewComponent.prototype, "_tree", {
        set: function (node) {
            this.tree = node;
            this.updateState();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditableTreeViewComponent.prototype, "children", {
        get: function () {
            var tree = Object(__WEBPACK_IMPORTED_MODULE_2__utils_misc_utils__["a" /* throwOnNull */])(this.tree);
            if (tree.isBranch()) {
                return tree.getChildren();
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    EditableTreeViewComponent.prototype.edit = function () {
        var tree = Object(__WEBPACK_IMPORTED_MODULE_2__utils_misc_utils__["a" /* throwOnNull */])(this.tree);
        if (tree.isBranch()) {
            this.editorService.initiateFeatureSetEditing(tree);
        }
        else if (tree.isLeaf()) {
            this.editorService.initiateFeatureEditing(tree);
        }
    };
    EditableTreeViewComponent.prototype.delete = function () {
        this.editorService.delete(this.tree);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], EditableTreeViewComponent.prototype, "depth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], EditableTreeViewComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('tree'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditableTreeViewComponent.prototype, "_tree", null);
    EditableTreeViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-editable-tree-view',
            template: __webpack_require__("./src/app/editable-tree-view/editable-tree-view.component.html"),
            styles: [__webpack_require__("./src/app/editable-tree-view/editable-tree-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__feature_tree_editor_service__["a" /* FormEditorService */]])
    ], EditableTreeViewComponent);
    return EditableTreeViewComponent;
}());



/***/ }),

/***/ "./src/app/editable-tree-view/inline-feature-editor/inline-feature-editor.component.css":
/***/ (function(module, exports) {

module.exports = "form {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: column;\r\n          flex-flow: column;\r\n  -webkit-box-align: end;\r\n      -ms-flex-align: end;\r\n          align-items: flex-end;\r\n}\r\n"

/***/ }),

/***/ "./src/app/editable-tree-view/inline-feature-editor/inline-feature-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InlineFeatureEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_misc_utils__ = __webpack_require__("./src/utils/misc-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InlineFeatureEditorComponent = /** @class */ (function () {
    function InlineFeatureEditorComponent() {
        this.editorState = null;
        this.submit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    InlineFeatureEditorComponent.prototype.handleSubmit = function () {
        var validationResults = this.state.getValidityState();
        if (validationResults.valid) {
            this.submit.next(this.state);
        }
    };
    Object.defineProperty(InlineFeatureEditorComponent.prototype, "state", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_1__utils_misc_utils__["a" /* throwOnNull */])(this.editorState);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], InlineFeatureEditorComponent.prototype, "editorState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], InlineFeatureEditorComponent.prototype, "submit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], InlineFeatureEditorComponent.prototype, "cancel", void 0);
    InlineFeatureEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-inline-feature-editor',
            template: "\n    <form\n      (submit)=\"\n        $event.preventDefault();\n        $event.stopPropagation();\n        handleSubmit()\n      \">\n      <input\n        [value]=\"state.name\"\n        (change)=\"state.name = $event.target.value\"\n        placeholder=\"Name\"\n        />\n      <app-numeric-input\n        [value]=\"state.price\"\n        (valueInput)=\"state.price = $event\"\n        placeholder=\"Price\"\n        >\n      </app-numeric-input>\n      <div>\n        <input\n          type=\"button\"\n          value=\"Cancel\"\n          (click)=\"cancel.next(editorState)\"\n          />\n        <input\n          type=\"submit\"\n          value=\"Save\"\n          />\n      </div>\n    </form>\n  ",
            styles: [__webpack_require__("./src/app/editable-tree-view/inline-feature-editor/inline-feature-editor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InlineFeatureEditorComponent);
    return InlineFeatureEditorComponent;
}());



/***/ }),

/***/ "./src/app/editable-tree-view/inline-feature-set-editor/inline-feature-set-editor.component.css":
/***/ (function(module, exports) {

module.exports = "form {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: column;\r\n          flex-flow: column;\r\n  -webkit-box-align: end;\r\n      -ms-flex-align: end;\r\n          align-items: flex-end;\r\n}\r\n"

/***/ }),

/***/ "./src/app/editable-tree-view/inline-feature-set-editor/inline-feature-set-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InlineFeatureSetEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_misc_utils__ = __webpack_require__("./src/utils/misc-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InlineFeatureSetEditorComponent = /** @class */ (function () {
    function InlineFeatureSetEditorComponent() {
        this.editorState = null;
        this.submit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    InlineFeatureSetEditorComponent.prototype.handleSubmit = function () {
        var validationResults = this.state.getValidityState();
        if (validationResults.valid) {
            this.submit.next(this.state);
        }
    };
    Object.defineProperty(InlineFeatureSetEditorComponent.prototype, "state", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_1__utils_misc_utils__["a" /* throwOnNull */])(this.editorState);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], InlineFeatureSetEditorComponent.prototype, "editorState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], InlineFeatureSetEditorComponent.prototype, "submit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], InlineFeatureSetEditorComponent.prototype, "cancel", void 0);
    InlineFeatureSetEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-inline-feature-set-editor',
            template: "\n    <form\n      (submit)=\"\n        $event.preventDefault();\n        $event.stopPropagation();\n        handleSubmit()\n      \">\n      <input\n        [value]=\"state.name\"\n        (change)=\"state.name = $event.target.value\"\n        placeholder=\"Name\"\n        />\n      <div>\n        <input\n          type=\"button\"\n          value=\"Cancel\"\n          (click)=\"cancel.next(editorState)\"\n          />\n        <input\n          type=\"submit\"\n          value=\"Save\"\n          />\n      </div>\n    </form>\n  ",
            styles: [__webpack_require__("./src/app/editable-tree-view/inline-feature-set-editor/inline-feature-set-editor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InlineFeatureSetEditorComponent);
    return InlineFeatureSetEditorComponent;
}());



/***/ }),

/***/ "./src/app/feature-tree-editor-form/feature-tree-editor-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureTreeEditorFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feature_tree_editor_service__ = __webpack_require__("./src/app/feature-tree-editor-service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_containers_tree__ = __webpack_require__("./src/utils/containers/tree.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeatureTreeEditorFormComponent = /** @class */ (function () {
    function FeatureTreeEditorFormComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__feature_tree_editor_service__["a" /* FormEditorService */])
    ], FeatureTreeEditorFormComponent.prototype, "editorService", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__utils_containers_tree__["b" /* TreeNode */])
    ], FeatureTreeEditorFormComponent.prototype, "features", void 0);
    FeatureTreeEditorFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-feature-tree-editor-form',
            template: "\n    <h2>Feature set editor</h2>\n    <app-editable-tree-view\n      [tree]=features\n      >\n    </app-editable-tree-view>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], FeatureTreeEditorFormComponent);
    return FeatureTreeEditorFormComponent;
}());



/***/ }),

/***/ "./src/app/feature-tree-editor-service/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormEditorService; });
/* unused harmony export FeatureEditorState */
/* unused harmony export FeatureSetEditorState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features_storage_service__ = __webpack_require__("./src/app/features-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_containers_tree__ = __webpack_require__("./src/utils/containers/tree.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_validation__ = __webpack_require__("./src/utils/validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_observable_value__ = __webpack_require__("./src/utils/observable-value/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var FormEditorService = /** @class */ (function () {
    function FormEditorService(store) {
        this.store = store;
        this.formState = new __WEBPACK_IMPORTED_MODULE_4__utils_observable_value__["a" /* ObservableValue */]({ type: 'view' });
    }
    Object.defineProperty(FormEditorService.prototype, "state", {
        get: function () {
            return this.formState.get();
        },
        set: function (state) {
            this.formState.set(state);
        },
        enumerable: true,
        configurable: true
    });
    FormEditorService.prototype.initiateFeatureEditing = function (featureNode) {
        if (this.state.type === 'view') {
            this.state = {
                type: 'edit-feature',
                editorState: new FeatureEditorState(featureNode, null)
            };
        }
        else {
            throw new Error("You can only switch to 'edit-feature' state from 'view' state");
        }
    };
    FormEditorService.prototype.initiateFeatureSetEditing = function (featureSetNode) {
        if (this.state.type === 'view') {
            this.state = {
                type: 'edit-feature-set',
                editorState: new FeatureSetEditorState(featureSetNode, null)
            };
        }
        else {
            throw new Error("You can only switch to 'edit-feature-set' state from 'view' state");
        }
    };
    FormEditorService.prototype.initiateNewFeatureCreation = function (parent) {
        if (this.state.type === 'view') {
            this.state = {
                type: 'edit-feature',
                newItemParameters: {
                    parent: parent
                },
                editorState: new FeatureEditorState(null, parent)
            };
        }
        else {
            throw new Error("You can only switch to 'edit-feature' state from 'view' state");
        }
    };
    FormEditorService.prototype.initiateNewFeatureSetCreation = function (parent) {
        if (this.state.type === 'view') {
            this.state = {
                type: 'edit-feature-set',
                newItemParameters: {
                    parent: parent
                },
                editorState: new FeatureSetEditorState(null, parent)
            };
        }
        else {
            throw new Error("You can only switch to 'edit-feature-set' state from 'view' state");
        }
    };
    FormEditorService.prototype.delete = function (node) {
        if (this.state.type === 'view') {
            var parent_1 = Object(__WEBPACK_IMPORTED_MODULE_2__utils_containers_tree__["d" /* findParent */])(this.store.getAvailableFeatures(), node);
            parent_1.removeChild(node);
        }
        else {
            throw new Error("Can't call delete action when not in 'view' state");
        }
    };
    FormEditorService.prototype.cancelEditing = function () {
        if (this.state.type === 'edit-feature' ||
            this.state.type === 'edit-feature-set') {
            this.state = {
                type: 'view'
            };
        }
        else {
            throw new Error("Can't call cancelEditing action when not in 'edit-feature' or 'edit-feature-set' states");
        }
    };
    FormEditorService.prototype.saveChanges = function () {
        if (this.state.type === 'edit-feature' ||
            this.state.type === 'edit-feature-set') {
            this.state.editorState.save();
            this.state = {
                type: 'view'
            };
        }
        else {
            throw new Error("Can't call saveChanges action when not in 'edit-feature' or 'edit-feature-set' states");
        }
    };
    FormEditorService = __decorate([
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__features_storage_service__["a" /* FeaturesStorageService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__features_storage_service__["a" /* FeaturesStorageService */]])
    ], FormEditorService);
    return FormEditorService;
}());

var nameValidatorConfig = {
    check: function (name) { return name.length > 0 && name.length <= 100; },
    error: 'Name should not be empty nor be longer than 100 character'
};
var FeatureEditorState = /** @class */ (function () {
    function FeatureEditorState(node, parent) {
        this.node = node;
        this.parent = parent;
        this.name = node ? node.content.name : '';
        this.price = node ? node.content.price : null;
    }
    FeatureEditorState.prototype.getValidityState = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3__utils_validation__["a" /* validateObject */])({
            name: this.name,
            price: this.price
        }, {
            name: nameValidatorConfig,
            price: {
                check: function (p) { return p > 0; },
                error: 'Price should be higher than 0'
            }
        });
    };
    FeatureEditorState.prototype.getFeature = function () {
        var validationResult = this.getValidityState();
        if (validationResult.valid) {
            return validationResult.subject;
        }
        else {
            throw new Error("Can't create feature from provided input");
        }
    };
    FeatureEditorState.prototype.save = function () {
        if (this.noInputDone()) {
            return;
        }
        else {
            if (this.node != null) {
                this.node.content = this.getFeature();
            }
            else if (this.parent != null) {
                this.parent.addLeaf(this.getFeature());
            }
        }
    };
    FeatureEditorState.prototype.noInputDone = function () {
        return this.name === '' && this.price == null;
    };
    return FeatureEditorState;
}());

var FeatureSetEditorState = /** @class */ (function () {
    function FeatureSetEditorState(node, parent) {
        this.node = node;
        this.parent = parent;
        this.name = node ? node.content.name : '';
    }
    FeatureSetEditorState.prototype.getValidityState = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3__utils_validation__["a" /* validateObject */])({ name: this.name }, { name: nameValidatorConfig });
    };
    FeatureSetEditorState.prototype.getFeatureSet = function () {
        if (this.getValidityState().valid) {
            return {
                name: this.name
            };
        }
        else {
            throw new Error("Can't create feature set from provided input");
        }
    };
    FeatureSetEditorState.prototype.noInputDone = function () {
        return this.name === '';
    };
    FeatureSetEditorState.prototype.save = function () {
        if (this.noInputDone()) {
            return;
        }
        else {
            if (this.node != null) {
                this.node.content = this.getFeatureSet();
            }
            else if (this.parent != null) {
                this.parent.addBranch(this.getFeatureSet());
            }
        }
    };
    return FeatureSetEditorState;
}());



/***/ }),

/***/ "./src/app/features-order-storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturesOrderStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_traverse_tree__ = __webpack_require__("./src/utils/traverse-tree.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_array_utils__ = __webpack_require__("./src/utils/array-utils.ts");


var FeaturesOrderStorage = /** @class */ (function () {
    function FeaturesOrderStorage() {
        this.selectedFeatures = [];
    }
    FeaturesOrderStorage.prototype.selectFeature = function (feature) {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_traverse_tree__["a" /* traverseTree */])(feature, function (childFeature) {
            if (childFeature.isLeaf()) {
                Object(__WEBPACK_IMPORTED_MODULE_1__utils_array_utils__["a" /* addIfMissing */])(_this.selectedFeatures, childFeature);
            }
        });
    };
    FeaturesOrderStorage.prototype.deselectFeature = function (feature) {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_traverse_tree__["a" /* traverseTree */])(feature, function (childFeature) {
            if (childFeature.isLeaf()) {
                Object(__WEBPACK_IMPORTED_MODULE_1__utils_array_utils__["c" /* remove */])(_this.selectedFeatures, childFeature);
            }
        });
    };
    FeaturesOrderStorage.prototype.getTotalPrice = function () {
        return this.selectedFeatures.reduce(function (total, feature) { return total + feature.content.price; }, 0);
    };
    FeaturesOrderStorage.prototype.getFeatureSelectionState = function (feature) {
        var _this = this;
        var allChildrenSelected = true;
        var someChildrenSelected = false;
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_traverse_tree__["a" /* traverseTree */])(feature, function (childFeature) {
            if (childFeature.isLeaf()) {
                var childSelected = Object(__WEBPACK_IMPORTED_MODULE_1__utils_array_utils__["b" /* contains */])(_this.selectedFeatures, childFeature);
                allChildrenSelected = allChildrenSelected && childSelected;
                someChildrenSelected = someChildrenSelected || childSelected;
            }
        });
        if (allChildrenSelected) {
            return 'selected';
        }
        else if (someChildrenSelected) {
            return 'partially-selected';
        }
        else {
            return 'not-selected';
        }
    };
    return FeaturesOrderStorage;
}());



/***/ }),

/***/ "./src/app/features-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturesStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_containers_tree__ = __webpack_require__("./src/utils/containers/tree.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var dummyFeatures = [
    {
        name: 'File system drivers',
        features: [
            {
                name: 'NTFS',
            },
            {
                name: 'Fat32',
            },
            {
                name: 'ext4',
            }
        ]
    },
    {
        name: 'Multimedia features',
        features: [
            {
                name: 'Audio drivers',
            },
            {
                name: 'Video drivers',
                features: [
                    {
                        name: 'NVIDIA 10x'
                    },
                    {
                        name: 'NVIDIA 9x'
                    },
                    {
                        name: 'AMD desktop graphics'
                    }
                ]
            }
        ]
    }
];
var FeaturesStorageService = /** @class */ (function () {
    function FeaturesStorageService() {
        var _this = this;
        this.features = this.load();
        this.features.stateUpdated.subscribe(function (state) { return localStorage.setItem('feature-set', Object(__WEBPACK_IMPORTED_MODULE_1__utils_containers_tree__["e" /* serializeTree */])(_this.features, function (node) { return JSON.stringify(node); }, function (node) { return JSON.stringify(node); })); });
    }
    FeaturesStorageService.prototype.load = function () {
        var serialized = localStorage.getItem('feature-set');
        if (!serialized) {
            return createTreeFromFeatures(dummyFeatures);
        }
        else {
            return Object(__WEBPACK_IMPORTED_MODULE_1__utils_containers_tree__["c" /* deserializeTree */])(serialized, function (node) { return JSON.parse(node); }, function (node) { return JSON.parse(node); });
        }
    };
    FeaturesStorageService.prototype.getAvailableFeatures = function () {
        return this.features;
    };
    FeaturesStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FeaturesStorageService);
    return FeaturesStorageService;
}());

function createTreeFromFeatures(features, tree) {
    var branch = tree || new __WEBPACK_IMPORTED_MODULE_1__utils_containers_tree__["a" /* TreeBranch */]({ name: 'Additional OS features' }, null);
    features.forEach(function (feature) {
        if (feature.features != null) {
            var newBranch = branch.addBranch({
                name: feature.name
            });
            createTreeFromFeatures(feature.features, newBranch);
        }
        else {
            branch.addLeaf({
                name: feature.name,
                price: getRandomPrice()
            });
        }
    });
    return branch;
}
function getRandomPrice() {
    return +(Math.random() * 10 + 5).toFixed(2);
}


/***/ }),

/***/ "./src/app/form-elements/numeric-input/numeric-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumericInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumericInputComponent = /** @class */ (function () {
    function NumericInputComponent() {
        this.value = null;
        this.placeholder = "";
        this.valueInput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.validity = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    NumericInputComponent.prototype.handleInput = function (value) {
        if (value === '') {
            this.valueInput.next(null);
            this.validity.next(true);
        }
        else {
            var parsed = parseFloat(value);
            if (isNaN(parsed)) {
                this.validity.next(false);
            }
            else {
                this.valueInput.next(parsed);
                this.validity.next(true);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], NumericInputComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], NumericInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], NumericInputComponent.prototype, "valueInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], NumericInputComponent.prototype, "validity", void 0);
    NumericInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-numeric-input',
            template: "\n    <input\n      [value]=\"value\"\n      (change)=handleInput($event.target.value)\n      [placeholder]=placeholder\n      />\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], NumericInputComponent);
    return NumericInputComponent;
}());



/***/ }),

/***/ "./src/app/order-form/order-form.component.css":
/***/ (function(module, exports) {

module.exports = "form {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.preview {\r\n  margin-left: 1em;\r\n}\r\n\r\n.total {\r\n  margin: 0.3em 0 0.5em;\r\n}"

/***/ }),

/***/ "./src/app/order-form/order-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>We, programmers, love trees. So we've decided to make one for feature selection form!</h2>\n<form (submit)=\"$event.preventDefault(); submit()\">\n  <div>\n    <app-tree-view\n      class=root\n      [tree]=features\n      [orderFormStore]=orderFormStore\n      [disabled]=disabled\n      (featureSelected)=showPreview($event)\n      >\n    </app-tree-view>\n    <div class=\"total\">\n      <label>\n        Total:\n        <input\n          type=\"text\"\n          readonly\n          [value]=\"orderFormStore.getTotalPrice().toFixed(2)\"\n          />\n      </label>\n    </div>\n    <input\n      [disabled]=disabled\n      type=\"submit\"\n      value=\"Submit order\"\n      />\n  </div>\n  <div class=\"preview\" *ngIf=\"preview\">\n    {{preview}}\n  </div>\n</form>\n<iframe\n  *ngIf=\"responseURL\"\n  [src]=\"responseURL\"\n  frameborder=\"0\">\n</iframe>\n<div *ngIf=\"serverError\">Got problems communicating with server. Please, try again later or contact <a href=\"mailto:support@support.com\">our support</a></div>"

/***/ }),

/***/ "./src/app/order-form/order-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features_order_storage__ = __webpack_require__("./src/app/features-order-storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_containers_tree__ = __webpack_require__("./src/utils/containers/tree.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shop_client_service__ = __webpack_require__("./src/app/shop-client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderFormComponent = /** @class */ (function () {
    function OrderFormComponent(client) {
        this.client = client;
        this.serverError = false;
        this.busy = false;
        this.preview = null;
    }
    Object.defineProperty(OrderFormComponent.prototype, "disabled", {
        get: function () {
            return this.busy;
        },
        enumerable: true,
        configurable: true
    });
    OrderFormComponent.prototype.submit = function () {
        var _this = this;
        this.serverError = false;
        this.busy = true;
        this
            .client
            .submitOrder(this.orderFormStore)
            .then(function (result) { return _this.responseURL = result.saleURL; })
            .catch(function () { return _this.serverError = true; })
            .then(function () { return _this.busy = false; });
    };
    OrderFormComponent.prototype.showPreview = function (node) {
        this.preview = "Preview of " + node.content.name;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__features_order_storage__["a" /* FeaturesOrderStorage */])
    ], OrderFormComponent.prototype, "orderFormStore", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__utils_containers_tree__["a" /* TreeBranch */])
    ], OrderFormComponent.prototype, "features", void 0);
    OrderFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-order-form',
            template: __webpack_require__("./src/app/order-form/order-form.component.html"),
            styles: [__webpack_require__("./src/app/order-form/order-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shop_client_service__["a" /* ShopClientService */]])
    ], OrderFormComponent);
    return OrderFormComponent;
}());



/***/ }),

/***/ "./src/app/shop-client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopClientService = /** @class */ (function () {
    function ShopClientService(client) {
        this.client = client;
    }
    ShopClientService.prototype.submitOrder = function (orderStore) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this
                .client
                .post('https://preprod.paymeservice.com/api/generate-sale', {
                seller_payme_id: 'MPL14985-68544Z1G- SPV5WK2K-0WJWHC7N',
                sale_price: orderStore.getTotalPrice(),
                currency: 'USD',
                product_name: 'Payment for files',
                installments: '1',
                language: 'en'
            })
                .subscribe(function (result) { return resolve({
                saleURL: result.sale_url
            }); }, reject);
        });
    };
    ShopClientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ShopClientService);
    return ShopClientService;
}());



/***/ }),

/***/ "./src/app/tree-view/tree-view.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: block;\r\n  padding-left: 1em;\r\n}\r\n\r\nlabel {\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n:host(.root) {\r\n  padding: 0\r\n}"

/***/ }),

/***/ "./src/app/tree-view/tree-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <input\r\n    type=\"checkbox\"\r\n    (change)=\"featureSelect($event.target.checked)\"\r\n    [checked]=\"selected\"\r\n    [indeterminate]=\"partiallySelected\"\r\n    [disabled]=disabled\r\n    />\r\n  <span (click)=featureSelected.next(tree)>\r\n    {{label}}\r\n  </span>\r\n</div>\r\n<app-tree-view\r\n  *ngFor=\"let option of children\"\r\n  [tree]=option\r\n  [orderFormStore]=orderFormStore\r\n  [disabled]=disabled\r\n  (featureSelected)=featureSelected.next($event)\r\n  >\r\n</app-tree-view>"

/***/ }),

/***/ "./src/app/tree-view/tree-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features_order_storage__ = __webpack_require__("./src/app/features-order-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeViewComponent = /** @class */ (function () {
    function TreeViewComponent() {
        this.depth = 0;
        this.disabled = false;
        this.featureSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    Object.defineProperty(TreeViewComponent.prototype, "children", {
        get: function () {
            if (this.tree.isBranch()) {
                return this.tree.getChildren();
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeViewComponent.prototype, "label", {
        get: function () {
            return (this.tree.content.name +
                (this.tree.isBranch()
                    ? ':'
                    : '') +
                (this.tree.isLeaf()
                    ? ' $' + this.tree.content.price.toFixed(2)
                    : ''));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeViewComponent.prototype, "selected", {
        get: function () {
            return this.orderFormStore.getFeatureSelectionState(this.tree) === 'selected';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeViewComponent.prototype, "partiallySelected", {
        get: function () {
            return this.orderFormStore.getFeatureSelectionState(this.tree) === 'partially-selected';
        },
        enumerable: true,
        configurable: true
    });
    TreeViewComponent.prototype.featureSelect = function (selected) {
        if (selected) {
            this.orderFormStore.selectFeature(this.tree);
        }
        else {
            this.orderFormStore.deselectFeature(this.tree);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__features_order_storage__["a" /* FeaturesOrderStorage */])
    ], TreeViewComponent.prototype, "orderFormStore", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], TreeViewComponent.prototype, "depth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TreeViewComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], TreeViewComponent.prototype, "tree", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], TreeViewComponent.prototype, "featureSelected", void 0);
    TreeViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tree-view',
            template: __webpack_require__("./src/app/tree-view/tree-view.component.html"),
            styles: [__webpack_require__("./src/app/tree-view/tree-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeViewComponent);
    return TreeViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/utils/array-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = contains;
/* harmony export (immutable) */ __webpack_exports__["a"] = addIfMissing;
/* unused harmony export lastItem */
/* harmony export (immutable) */ __webpack_exports__["c"] = remove;
function contains(array, item) {
    return array.indexOf(item) !== -1;
}
function addIfMissing(array, item) {
    if (!contains(array, item)) {
        array.push(item);
    }
    return array;
}
function lastItem(array) {
    if (array.length === 0) {
        return null;
    }
    else {
        return array[array.length - 1];
    }
}
function remove(array, item) {
    if (!contains(array, item)) {
        return array;
    }
    else {
        var itemLocation = array.indexOf(item);
        array.splice(itemLocation, 1);
        return array;
    }
}


/***/ }),

/***/ "./src/utils/containers/tree.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeBranch; });
/* unused harmony export TreeLeaf */
/* unused harmony export createTreeRoot */
/* harmony export (immutable) */ __webpack_exports__["d"] = findParent;
/* harmony export (immutable) */ __webpack_exports__["e"] = serializeTree;
/* harmony export (immutable) */ __webpack_exports__["c"] = deserializeTree;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_utils__ = __webpack_require__("./src/utils/array-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__traverse_tree__ = __webpack_require__("./src/utils/traverse-tree.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observable_value__ = __webpack_require__("./src/utils/observable-value/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var TreeNode = /** @class */ (function () {
    function TreeNode(parent) {
        this.parent = parent;
        this._stateUpdated = new __WEBPACK_IMPORTED_MODULE_2__observable_value__["a" /* ObservableValue */](this);
    }
    TreeNode.prototype.dispatchUpdate = function () {
        if (this.parent) {
            this.parent.dispatchUpdate();
        }
        this._stateUpdated.set(this);
    };
    Object.defineProperty(TreeNode.prototype, "stateUpdated", {
        get: function () {
            return this._stateUpdated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (newContent) {
            this._content = newContent;
            this.dispatchUpdate();
        },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.isBranch = function () {
        return this.canHaveChildren;
    };
    TreeNode.prototype.isLeaf = function () {
        return !this.canHaveChildren;
    };
    return TreeNode;
}());

var TreeBranch = /** @class */ (function (_super) {
    __extends(TreeBranch, _super);
    function TreeBranch(content, parent) {
        var _this = _super.call(this, parent) || this;
        _this.children = [];
        _this.canHaveChildren = true;
        _this.content = content;
        return _this;
    }
    TreeBranch.prototype.getChildren = function () {
        return this.children.slice();
    };
    TreeBranch.prototype.getChildrenIterator = function () {
        return this.children.entries();
    };
    TreeBranch.prototype.addBranch = function (content) {
        var child = new TreeBranch(content, this);
        this.children.push(child);
        this.dispatchUpdate();
        return child;
    };
    TreeBranch.prototype.addLeaf = function (content) {
        var child = new TreeLeaf(content, this);
        this.children.push(child);
        this.dispatchUpdate();
        return child;
    };
    TreeBranch.prototype.removeChild = function (node) {
        Object(__WEBPACK_IMPORTED_MODULE_0__array_utils__["c" /* remove */])(this.children, node);
        this.dispatchUpdate();
    };
    return TreeBranch;
}(TreeNode));

var TreeLeaf = /** @class */ (function (_super) {
    __extends(TreeLeaf, _super);
    function TreeLeaf(content, parent) {
        var _this = _super.call(this, parent) || this;
        _this.content = content;
        return _this;
    }
    return TreeLeaf;
}(TreeNode));

function createTreeRoot(content) {
    return new TreeBranch(content, null);
}
function findParent(root, node) {
    if (root == node) {
        throw new Error("Root node can't be a child");
    }
    var result = null;
    Object(__WEBPACK_IMPORTED_MODULE_1__traverse_tree__["a" /* traverseTree */])(root, function (possibleParent) {
        if (possibleParent.isBranch() && Object(__WEBPACK_IMPORTED_MODULE_0__array_utils__["b" /* contains */])(possibleParent.getChildren(), node)) {
            result = possibleParent;
        }
    });
    if (result == null) {
        throw new Error("Node doesn't belong to specified tree");
    }
    return result;
}
function serializeTree(root, branchContentSerializer, leafContentSerializer) {
    return JSON.stringify(convertToPlainTree(root, branchContentSerializer, leafContentSerializer));
}
function convertToPlainTree(root, branchContentSerializer, leafContentSerializer, plainTree) {
    if (plainTree === void 0) { plainTree = {}; }
    if (root.isBranch()) {
        plainTree.content = branchContentSerializer(root.content);
        plainTree.children = root.getChildren().map(function (child) { return convertToPlainTree(child, branchContentSerializer, leafContentSerializer); });
    }
    if (root.isLeaf()) {
        plainTree.content = leafContentSerializer(root.content);
    }
    return plainTree;
}
function deserializeTree(serialized, branchContentDeserializer, leafContentDeserializer) {
    var plainTree = JSON.parse(serialized);
    try {
        return convertFromPlainTree(null, branchContentDeserializer, leafContentDeserializer, plainTree);
    }
    catch (e) {
        throw new Error('Unable to parse serialized tree');
    }
}
function convertFromPlainTree(root, branchContentDeserializer, leafContentDeserializer, plainTree) {
    if (root == null) {
        root = createTreeRoot(branchContentDeserializer(plainTree.content));
        if (plainTree.children) {
            plainTree.children.forEach(function (child) { return convertFromPlainTree(root, branchContentDeserializer, leafContentDeserializer, child); });
        }
    }
    else if (plainTree.children) {
        var branch_1 = root.addBranch(branchContentDeserializer(plainTree.content));
        plainTree.children.forEach(function (child) { return convertFromPlainTree(branch_1, branchContentDeserializer, leafContentDeserializer, child); });
    }
    else {
        root.addLeaf(leafContentDeserializer(plainTree.content));
    }
    return root;
}


/***/ }),

/***/ "./src/utils/misc-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwOnNull;
function throwOnNull(value) {
    if (value == null) {
        throw new Error("Value can't be null or undefined");
    }
    return value;
}


/***/ }),

/***/ "./src/utils/object-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = keyValuePairs;
function keyValuePairs(subject) {
    return Object
        .keys(subject)
        .map(function (key) { return ({
        key: key,
        value: subject[key]
    }); });
}


/***/ }),

/***/ "./src/utils/observable-value/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Emitter */
/* unused harmony export ObservableOutput */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservableValue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_utils__ = __webpack_require__("./src/utils/array-utils.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Emitter = /** @class */ (function () {
    function Emitter() {
        this.observers = [];
    }
    Emitter.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    Emitter.prototype.unsubscribe = function (observer) {
        Object(__WEBPACK_IMPORTED_MODULE_0__array_utils__["c" /* remove */])(this.observers, observer);
    };
    return Emitter;
}());

var ObservableOutput = /** @class */ (function (_super) {
    __extends(ObservableOutput, _super);
    function ObservableOutput(initialValue) {
        var _this = _super.call(this) || this;
        _this.value = initialValue;
        return _this;
    }
    ObservableOutput.prototype.get = function () {
        return this.value;
    };
    return ObservableOutput;
}(Emitter));

var ObservableValue = /** @class */ (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.observers.forEach(function (observer) { return observer(newValue, oldValue); });
    };
    return ObservableValue;
}(ObservableOutput));



/***/ }),

/***/ "./src/utils/traverse-tree.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = traverseTree;
function traverseTree(tree, itemVisitor) {
    itemVisitor(tree, 0, [tree], [0]);
    if (tree.isBranch()) {
        traverse(tree, itemVisitor, [0]);
    }
}
function traverse(node, itemVisitor, path) {
    node
        .getChildren()
        .forEach(function (child, index, items) {
        var newPath = path.concat([index]);
        itemVisitor(child, index, items, newPath);
        if (child.isBranch()) {
            traverse(child, itemVisitor, newPath);
        }
    });
}


/***/ }),

/***/ "./src/utils/validation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export validate */
/* harmony export (immutable) */ __webpack_exports__["a"] = validateObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_utils__ = __webpack_require__("./src/utils/object-utils.ts");

function validate(value, params) {
    if (params.check(value, params.config)) {
        return null;
    }
    else {
        if (typeof params.error === 'function') {
            return params.error(value, params.config);
        }
        else {
            return params.error;
        }
    }
}
function validateObject(subject, validationConfig) {
    var result = Object(__WEBPACK_IMPORTED_MODULE_0__object_utils__["a" /* keyValuePairs */])(validationConfig)
        .reduce(function (result, _a) {
        var key = _a.key, config = _a.value;
        var value = subject[key];
        if (config != null) {
            var fieldError = validate(value, config);
            if (fieldError != null) {
                return {
                    valid: false,
                    errors: result.errors.concat({
                        field: key,
                        message: fieldError
                    })
                };
            }
        }
        return result;
    }, {
        valid: true,
        errors: [],
    });
    if (result.valid) {
        return {
            valid: true,
            errors: result.errors,
            subject: subject
        };
    }
    else {
        return {
            valid: false,
            errors: result.errors
        };
    }
}


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map