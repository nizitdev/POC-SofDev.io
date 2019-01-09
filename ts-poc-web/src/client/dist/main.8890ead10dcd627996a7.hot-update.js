webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".manage-teacher-view {\n  padding: 50px; }\n", ""]);

// exports


/***/ }),

/***/ "./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view-model.js":
/*!***********************************************************************************************!*\
  !*** ./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view-model.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const n_app_1 = __webpack_require__(/*! @nivinjoseph/n-app */ "./node_modules/@nivinjoseph/n-app/dist/index.js");
const Routes = __webpack_require__(/*! ../../routes */ "./src/client/pages/routes.js");
__webpack_require__(/*! ./manage-studentMarkEntry-view.scss */ "./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view.scss");
const n_ject_1 = __webpack_require__(/*! @nivinjoseph/n-ject */ "./node_modules/@nivinjoseph/n-ject/dist/index.js");
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
let ManageStudentMarkViewModel = class ManageStudentMarkViewModel extends n_app_1.PageViewModel {
    constructor(studentService, navigationService) {
        super();
        n_defensive_1.given(studentService, "studentService").ensureHasValue().ensureIsObject();
        this._studentService = studentService;
        n_defensive_1.given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
        this._subjects = [];
        this._studentMarkEntry = [];
        this._id = "";
        this._studentName = "";
        this._subject = "";
        this._mark = "";
        this._student_id = "";
    }
    get studentMarkEntry() { return this._studentMarkEntry; }
    get subjects() { return this._subjects; }
    get operation() { return this._operation; }
    get studentName() { return this._studentName; }
    set studentName(value) { this._studentName = value; }
    get subject() { return this._subject; }
    set subject(value) { this._subject = value; }
    get mark() { return this._mark; }
    set mark(value) { this._mark = value; }
    get student_id() { return this._student_id; }
    set student_id(value) { this._student_id = value; }
    get studentMarks() {
        return this._studentMarks;
    }
    save() {
        debugger;
        const savePromise = this._id
            ? this._studentService.updateStudentMarkEntry(this._id, this._studentName, this._subject, this._mark, this._student_id)
            : this._studentService.createStudentMarkEntry(this._studentName, this._subject, this._mark, this._student_id);
        savePromise
            .then(() => this._navigationService.navigate(Routes.listStudents, {}))
            .catch(e => console.log(e));
    }
    onEnter(id) {
        debugger;
        this._studentService.getSubjects()
            .then(t => this._subjects = t)
            .catch(e => console.log(e));
        if (id && !id.isEmptyOrWhiteSpace()) {
            this._operation = "Update";
            this._studentService.getStudentMarkEntry(id)
                .then(t => {
                this._id = t.id;
                this._student_id = t.student_id;
                this._mark = t.mark;
                this._studentName = t.studentName;
                this._subject = t.subject;
            })
                .catch(e => console.log(e));
        }
        else {
            this._operation = "Add";
        }
    }
};
ManageStudentMarkViewModel = __decorate([
    n_app_1.template(__webpack_require__(/*! ./manage-studentMarkEntry-view.html */ "./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view.html")),
    n_app_1.route(Routes.manageStudentMark),
    n_ject_1.inject("StudentService", "NavigationService"),
    __metadata("design:paramtypes", [Object, Object])
], ManageStudentMarkViewModel);
exports.ManageStudentMarkViewModel = ManageStudentMarkViewModel;
//# sourceMappingURL=manage-studentMarkEntry-view-model.js.map

/***/ }),

/***/ "./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view.html":
/*!*******************************************************************************************!*\
  !*** ./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"manage-teacher-view\">\r\n    <h1 class=\"title\">\r\n        {{operation}}\r\n    </h1>\r\n\r\n    <form>\r\n        <div class=\"field\">\r\n            <label class=\"label\">Student Name</label>  \r\n            <div class=\"control\">\r\n               {{studentName}}\r\n            </div>\r\n        </div>\r\n        <div class=\"field\">\r\n            <label class=\"label\">subject</label>\r\n        <div class=\"control\">\r\n          <div class=\"select\">\r\n            <select  v-model=\"subject\">\r\n                <option v-for=\"item in subjects\" v-bind:value=\"item.Name\" >\r\n                  {{ item.name }}\r\n                </option>\r\n              </select> \r\n          </div>\r\n        </div>\r\n      </div>\r\n        <div class=\"field\">\r\n            <label class=\"label\">Mark</label>\r\n            <div class=\"control\">\r\n                <input class=\"input\" type=\"text\" v-model=\"Mark\" placeholder=\"Mark\">\r\n            </div>\r\n        </div>\r\n       \r\n        <div class=\"field is-grouped\">\r\n            <div class=\"control\">\r\n                <button class=\"button is-link\" v-on:click.prevent=\"save\">Save</button>\r\n            </div>\r\n            <div class=\"control\">\r\n                <router-link class=\"button is-text\" to=\"/listStudent\">Cancel</router-link>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<studentElement v-for=\"item in studentMarks\" v-bind:key=\"item.id\" v-bind:value=\"item\"></studentElement>";

/***/ }),

/***/ "./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view.scss":
/*!*******************************************************************************************!*\
  !*** ./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!./manage-studentMarkEntry-view.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!./manage-studentMarkEntry-view.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!./manage-studentMarkEntry-view.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9zY2hvb2wvbWFuYWdlLXN0dWRlbnRNYXJrRW50cnkvbWFuYWdlLXN0dWRlbnRNYXJrRW50cnktdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9zY2hvb2wvbWFuYWdlLXN0dWRlbnRNYXJrRW50cnkvbWFuYWdlLXN0dWRlbnRNYXJrRW50cnktdmlldy5zY3NzPzQzOTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMseUdBQXdEO0FBQzNGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyx5QkFBeUIsa0JBQWtCLEVBQUU7O0FBRXBFOzs7Ozs7Ozs7Ozs7O0FDUGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsMkVBQW9CO0FBQzVDLGVBQWUsbUJBQU8sQ0FBQyxrREFBYztBQUNyQyxtQkFBTyxDQUFDLGdJQUFxQztBQUM3QyxpQkFBaUIsbUJBQU8sQ0FBQyw2RUFBcUI7QUFDOUMsc0JBQXNCLG1CQUFPLENBQUMsdUZBQTBCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQkFBK0I7QUFDM0Qsb0JBQW9CLHVCQUF1QjtBQUMzQyxxQkFBcUIsd0JBQXdCO0FBQzdDLHVCQUF1QiwwQkFBMEI7QUFDakQsNEJBQTRCLDJCQUEyQjtBQUN2RCxtQkFBbUIsc0JBQXNCO0FBQ3pDLHdCQUF3Qix1QkFBdUI7QUFDL0MsZ0JBQWdCLG1CQUFtQjtBQUNuQyxxQkFBcUIsb0JBQW9CO0FBQ3pDLHNCQUFzQix5QkFBeUI7QUFDL0MsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBTyxDQUFDLGdJQUFxQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEQ7Ozs7Ozs7Ozs7O0FDbkZBLCtGQUErRixXQUFXLHlMQUF5TCxhQUFhLDhWQUE4VixhQUFhLGc0Qjs7Ozs7Ozs7Ozs7O0FDQzNwQixjQUFjLG1CQUFPLENBQUMsK1lBQStNOztBQUVyTyw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsK0dBQTREOztBQUVqRjs7QUFFQSxHQUFHLElBQVU7QUFDYixtQkFBbUIsK1lBQStNO0FBQ2xPLG1CQUFtQixtQkFBTyxDQUFDLCtZQUErTTs7QUFFMU8sb0RBQW9ELFFBQVM7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoibWFpbi44ODkwZWFkMTBkY2Q2Mjc5OTZhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWFuYWdlLXRlYWNoZXItdmlldyB7XFxuICBwYWRkaW5nOiA1MHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fYXBwXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tYXBwXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vcm91dGVzXCIpO1xyXG5yZXF1aXJlKFwiLi9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3LnNjc3NcIik7XHJcbmNvbnN0IG5famVjdF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWplY3RcIik7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5sZXQgTWFuYWdlU3R1ZGVudE1hcmtWaWV3TW9kZWwgPSBjbGFzcyBNYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbCBleHRlbmRzIG5fYXBwXzEuUGFnZVZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdHVkZW50U2VydmljZSwgbmF2aWdhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc3R1ZGVudFNlcnZpY2UsIFwic3R1ZGVudFNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlID0gc3R1ZGVudFNlcnZpY2U7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYXZpZ2F0aW9uU2VydmljZSwgXCJuYXZpZ2F0aW9uU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UgPSBuYXZpZ2F0aW9uU2VydmljZTtcclxuICAgICAgICB0aGlzLl9zdWJqZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRNYXJrRW50cnkgPSBbXTtcclxuICAgICAgICB0aGlzLl9pZCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudE5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3N1YmplY3QgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX21hcmsgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRfaWQgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0dWRlbnRNYXJrRW50cnkoKSB7IHJldHVybiB0aGlzLl9zdHVkZW50TWFya0VudHJ5OyB9XHJcbiAgICBnZXQgc3ViamVjdHMoKSB7IHJldHVybiB0aGlzLl9zdWJqZWN0czsgfVxyXG4gICAgZ2V0IG9wZXJhdGlvbigpIHsgcmV0dXJuIHRoaXMuX29wZXJhdGlvbjsgfVxyXG4gICAgZ2V0IHN0dWRlbnROYW1lKCkgeyByZXR1cm4gdGhpcy5fc3R1ZGVudE5hbWU7IH1cclxuICAgIHNldCBzdHVkZW50TmFtZSh2YWx1ZSkgeyB0aGlzLl9zdHVkZW50TmFtZSA9IHZhbHVlOyB9XHJcbiAgICBnZXQgc3ViamVjdCgpIHsgcmV0dXJuIHRoaXMuX3N1YmplY3Q7IH1cclxuICAgIHNldCBzdWJqZWN0KHZhbHVlKSB7IHRoaXMuX3N1YmplY3QgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IG1hcmsoKSB7IHJldHVybiB0aGlzLl9tYXJrOyB9XHJcbiAgICBzZXQgbWFyayh2YWx1ZSkgeyB0aGlzLl9tYXJrID0gdmFsdWU7IH1cclxuICAgIGdldCBzdHVkZW50X2lkKCkgeyByZXR1cm4gdGhpcy5fc3R1ZGVudF9pZDsgfVxyXG4gICAgc2V0IHN0dWRlbnRfaWQodmFsdWUpIHsgdGhpcy5fc3R1ZGVudF9pZCA9IHZhbHVlOyB9XHJcbiAgICBnZXQgc3R1ZGVudE1hcmtzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdHVkZW50TWFya3M7XHJcbiAgICB9XHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGNvbnN0IHNhdmVQcm9taXNlID0gdGhpcy5faWRcclxuICAgICAgICAgICAgPyB0aGlzLl9zdHVkZW50U2VydmljZS51cGRhdGVTdHVkZW50TWFya0VudHJ5KHRoaXMuX2lkLCB0aGlzLl9zdHVkZW50TmFtZSwgdGhpcy5fc3ViamVjdCwgdGhpcy5fbWFyaywgdGhpcy5fc3R1ZGVudF9pZClcclxuICAgICAgICAgICAgOiB0aGlzLl9zdHVkZW50U2VydmljZS5jcmVhdGVTdHVkZW50TWFya0VudHJ5KHRoaXMuX3N0dWRlbnROYW1lLCB0aGlzLl9zdWJqZWN0LCB0aGlzLl9tYXJrLCB0aGlzLl9zdHVkZW50X2lkKTtcclxuICAgICAgICBzYXZlUHJvbWlzZVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShSb3V0ZXMubGlzdFN0dWRlbnRzLCB7fSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgIH1cclxuICAgIG9uRW50ZXIoaWQpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5nZXRTdWJqZWN0cygpXHJcbiAgICAgICAgICAgIC50aGVuKHQgPT4gdGhpcy5fc3ViamVjdHMgPSB0KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgaWYgKGlkICYmICFpZC5pc0VtcHR5T3JXaGl0ZVNwYWNlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gXCJVcGRhdGVcIjtcclxuICAgICAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ2V0U3R1ZGVudE1hcmtFbnRyeShpZClcclxuICAgICAgICAgICAgICAgIC50aGVuKHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faWQgPSB0LmlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3R1ZGVudF9pZCA9IHQuc3R1ZGVudF9pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21hcmsgPSB0Lm1hcms7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHVkZW50TmFtZSA9IHQuc3R1ZGVudE5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJqZWN0ID0gdC5zdWJqZWN0O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gXCJBZGRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbk1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsID0gX19kZWNvcmF0ZShbXHJcbiAgICBuX2FwcF8xLnRlbXBsYXRlKHJlcXVpcmUoXCIuL21hbmFnZS1zdHVkZW50TWFya0VudHJ5LXZpZXcuaHRtbFwiKSksXHJcbiAgICBuX2FwcF8xLnJvdXRlKFJvdXRlcy5tYW5hZ2VTdHVkZW50TWFyayksXHJcbiAgICBuX2plY3RfMS5pbmplY3QoXCJTdHVkZW50U2VydmljZVwiLCBcIk5hdmlnYXRpb25TZXJ2aWNlXCIpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtPYmplY3QsIE9iamVjdF0pXHJcbl0sIE1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsKTtcclxuZXhwb3J0cy5NYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbCA9IE1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3LW1vZGVsLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtYW5hZ2UtdGVhY2hlci12aWV3XFxcIj5cXHJcXG4gICAgPGgxIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxyXFxuICAgICAgICB7e29wZXJhdGlvbn19XFxyXFxuICAgIDwvaDE+XFxyXFxuXFxyXFxuICAgIDxmb3JtPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwibGFiZWxcXFwiPlN0dWRlbnQgTmFtZTwvbGFiZWw+ICBcXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250cm9sXFxcIj5cXHJcXG4gICAgICAgICAgICAgICB7e3N0dWRlbnROYW1lfX1cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwibGFiZWxcXFwiPnN1YmplY3Q8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbFxcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlbGVjdFxcXCI+XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCAgdi1tb2RlbD1cXFwic3ViamVjdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XFxcIml0ZW0gaW4gc3ViamVjdHNcXFwiIHYtYmluZDp2YWx1ZT1cXFwiaXRlbS5OYW1lXFxcIiA+XFxyXFxuICAgICAgICAgICAgICAgICAge3sgaXRlbS5uYW1lIH19XFxyXFxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+IFxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwibGFiZWxcXFwiPk1hcms8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2LW1vZGVsPVxcXCJNYXJrXFxcIiBwbGFjZWhvbGRlcj1cXFwiTWFya1xcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZCBpcy1ncm91cGVkXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250cm9sXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLWxpbmtcXFwiIHYtb246Y2xpY2sucHJldmVudD1cXFwic2F2ZVxcXCI+U2F2ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgY2xhc3M9XFxcImJ1dHRvbiBpcy10ZXh0XFxcIiB0bz1cXFwiL2xpc3RTdHVkZW50XFxcIj5DYW5jZWw8L3JvdXRlci1saW5rPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG48c3R1ZGVudEVsZW1lbnQgdi1mb3I9XFxcIml0ZW0gaW4gc3R1ZGVudE1hcmtzXFxcIiB2LWJpbmQ6a2V5PVxcXCJpdGVtLmlkXFxcIiB2LWJpbmQ6dmFsdWU9XFxcIml0ZW1cXFwiPjwvc3R1ZGVudEVsZW1lbnQ+XCI7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFuYWdlLXN0dWRlbnRNYXJrRW50cnktdmlldy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21hbmFnZS1zdHVkZW50TWFya0VudHJ5LXZpZXcuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFuYWdlLXN0dWRlbnRNYXJrRW50cnktdmlldy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==