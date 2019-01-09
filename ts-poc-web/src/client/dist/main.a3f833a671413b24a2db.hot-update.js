webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/manage-student/manage-student-view.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/manage-student/manage-student-view.scss ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/client/pages/school/manage-student/manage-student-view-model.js":
/*!*****************************************************************************!*\
  !*** ./src/client/pages/school/manage-student/manage-student-view-model.js ***!
  \*****************************************************************************/
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
__webpack_require__(/*! ./manage-student-view.scss */ "./src/client/pages/school/manage-student/manage-student-view.scss");
const n_ject_1 = __webpack_require__(/*! @nivinjoseph/n-ject */ "./node_modules/@nivinjoseph/n-ject/dist/index.js");
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
let ManageStudentViewModel = class ManageStudentViewModel extends n_app_1.PageViewModel {
    constructor(studentService, navigationService, adminService) {
        super();
        n_defensive_1.given(adminService, "adminService").ensureHasValue().ensureIsObject();
        this._adminService = adminService;
        n_defensive_1.given(studentService, "studentService").ensureHasValue().ensureIsObject();
        this._studentService = studentService;
        n_defensive_1.given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
        this._divisions = [];
        this._operation = "";
        this._id = null;
        this._name = "";
        this._sex = " ";
        this._division = "";
        this._studentMarkEntry = [];
    }
    get studentMarkEntry() { return this._studentMarkEntry; }
    get divisions() { return this._divisions; }
    get operation() { return this._operation; }
    get name() { return this._name; }
    set name(value) { this._name = value; }
    get sex() { return this._sex; }
    set sex(value) { this._sex = value; }
    get division() { return this._division; }
    set division(value) { this._division = value; }
    save() {
        debugger;
        const savePromise = this._id
            ? this._studentService.updateStudent(this._id, this._name, this._sex, this._division)
            : this._studentService.createStudent(this._name, this._sex, this._division);
        savePromise
            .then(() => this._navigationService.navigate(Routes.listStudents, {}))
            .catch(e => console.log(e));
    }
    onEnter(id) {
        this._adminService.getDivisions()
            .then(t => this._divisions = t)
            .catch(e => console.log(e));
        this._studentService.getStudentMarkEntry()
            .then(t => this._studentMarkEntry = t)
            .catch(e => console.log(e));
        if (id && !id.isEmptyOrWhiteSpace()) {
            this._operation = "Update";
            this._studentService.getStudent(id)
                .then(t => {
                this._id = t.id;
                this._name = t.name;
                this._sex = t.sex;
                this._division = t.division;
            })
                .catch(e => console.log(e));
        }
        else {
            this._operation = "Add";
        }
    }
};
ManageStudentViewModel = __decorate([
    n_app_1.template(__webpack_require__(/*! ./manage-student-view.html */ "./src/client/pages/school/manage-student/manage-student-view.html")),
    n_app_1.route(Routes.manageStudent),
    n_ject_1.inject("StudentService", "NavigationService", "AdminService"),
    __metadata("design:paramtypes", [Object, Object, Object])
], ManageStudentViewModel);
exports.ManageStudentViewModel = ManageStudentViewModel;
//# sourceMappingURL=manage-student-view-model.js.map

/***/ }),

/***/ "./src/client/pages/school/manage-student/manage-student-view.html":
/*!*************************************************************************!*\
  !*** ./src/client/pages/school/manage-student/manage-student-view.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"manage-teacher-view\">\r\n        <h1 class=\"title\">\r\n            {{operation}}\r\n        </h1>\r\n    \r\n        <form>\r\n            <div class=\"field\">\r\n                <label class=\"label\">Name</label>\r\n                <div class=\"control\">\r\n                    <input class=\"input\" type=\"text\" v-model=\"name\" placeholder=\"Name\">\r\n                </div>\r\n            </div>\r\n            <div class=\"field\">\r\n                <label class=\"label\">sex</label>\r\n                <input type=\"radio\" v-model=\"sex\"  value=\"Male\">Male\r\n                <input type=\"radio\" v-model=\"sex\"  value=\"Female\">Female\r\n                \r\n            </div>\r\n            \r\n          \r\n            <div class=\"field\">\r\n                <label class=\"label\">Division</label>\r\n            <div class=\"control\">\r\n              <div class=\"select\">\r\n                <select  id=\"selectClassInCharge\"  v-model=\"division\">\r\n                    <option v-for=\"item in divisions\" v-bind:value=\"item.id\" >\r\n                      {{ item.name }}\r\n                    </option>\r\n                  </select> \r\n              </div>\r\n            </div>\r\n          </div>\r\n            <div class=\"field is-grouped\">\r\n                <div class=\"control\">\r\n                    <button class=\"button is-link\" v-on:click.prevent=\"save\">Save</button>\r\n                </div>\r\n                <div class=\"control\">\r\n                    <router-link class=\"button is-text\" to=\"/listStudent\">Cancel</router-link>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    ";

/***/ }),

/***/ "./src/client/pages/school/manage-student/manage-student-view.scss":
/*!*************************************************************************!*\
  !*** ./src/client/pages/school/manage-student/manage-student-view.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!./manage-student-view.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/manage-student/manage-student-view.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!./manage-student-view.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/manage-student/manage-student-view.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!./manage-student-view.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/manage-student/manage-student-view.scss");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2Utc3R1ZGVudC9tYW5hZ2Utc3R1ZGVudC12aWV3LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9zY2hvb2wvbWFuYWdlLXN0dWRlbnQvbWFuYWdlLXN0dWRlbnQtdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2Utc3R1ZGVudC9tYW5hZ2Utc3R1ZGVudC12aWV3Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9zY2hvb2wvbWFuYWdlLXN0dWRlbnQvbWFuYWdlLXN0dWRlbnQtdmlldy5zY3NzPzAwMmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMseUdBQXdEO0FBQzNGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUzs7QUFFdkI7Ozs7Ozs7Ozs7Ozs7QUNQYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLGtEQUFjO0FBQ3JDLG1CQUFPLENBQUMscUdBQTRCO0FBQ3BDLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFxQjtBQUM5QyxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQkFBK0I7QUFDM0QscUJBQXFCLHdCQUF3QjtBQUM3QyxxQkFBcUIsd0JBQXdCO0FBQzdDLGdCQUFnQixtQkFBbUI7QUFDbkMscUJBQXFCLG9CQUFvQjtBQUN6QyxlQUFlLGtCQUFrQjtBQUNqQyxvQkFBb0IsbUJBQW1CO0FBQ3ZDLG9CQUFvQix1QkFBdUI7QUFDM0MseUJBQXlCLHdCQUF3QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMscUdBQTRCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRDs7Ozs7Ozs7Ozs7QUNqRkEsdUdBQXVHLFdBQVcsdS9CQUF1L0IsYUFBYSxza0I7Ozs7Ozs7Ozs7OztBQ0N0bkMsY0FBYyxtQkFBTyxDQUFDLG9YQUFzTTs7QUFFNU4sNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLCtHQUE0RDs7QUFFakY7O0FBRUEsR0FBRyxJQUFVO0FBQ2IsbUJBQW1CLG9YQUFzTTtBQUN6TixtQkFBbUIsbUJBQU8sQ0FBQyxvWEFBc007O0FBRWpPLG9EQUFvRCxRQUFTOztBQUU3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6Im1haW4uYTNmODMzYTY3MTQxM2IyNGEyZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fYXBwXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tYXBwXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vcm91dGVzXCIpO1xyXG5yZXF1aXJlKFwiLi9tYW5hZ2Utc3R1ZGVudC12aWV3LnNjc3NcIik7XHJcbmNvbnN0IG5famVjdF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWplY3RcIik7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5sZXQgTWFuYWdlU3R1ZGVudFZpZXdNb2RlbCA9IGNsYXNzIE1hbmFnZVN0dWRlbnRWaWV3TW9kZWwgZXh0ZW5kcyBuX2FwcF8xLlBhZ2VWaWV3TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3Ioc3R1ZGVudFNlcnZpY2UsIG5hdmlnYXRpb25TZXJ2aWNlLCBhZG1pblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oYWRtaW5TZXJ2aWNlLCBcImFkbWluU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fYWRtaW5TZXJ2aWNlID0gYWRtaW5TZXJ2aWNlO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc3R1ZGVudFNlcnZpY2UsIFwic3R1ZGVudFNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlID0gc3R1ZGVudFNlcnZpY2U7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYXZpZ2F0aW9uU2VydmljZSwgXCJuYXZpZ2F0aW9uU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UgPSBuYXZpZ2F0aW9uU2VydmljZTtcclxuICAgICAgICB0aGlzLl9kaXZpc2lvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2lkID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9uYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9zZXggPSBcIiBcIjtcclxuICAgICAgICB0aGlzLl9kaXZpc2lvbiA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudE1hcmtFbnRyeSA9IFtdO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0dWRlbnRNYXJrRW50cnkoKSB7IHJldHVybiB0aGlzLl9zdHVkZW50TWFya0VudHJ5OyB9XHJcbiAgICBnZXQgZGl2aXNpb25zKCkgeyByZXR1cm4gdGhpcy5fZGl2aXNpb25zOyB9XHJcbiAgICBnZXQgb3BlcmF0aW9uKCkgeyByZXR1cm4gdGhpcy5fb3BlcmF0aW9uOyB9XHJcbiAgICBnZXQgbmFtZSgpIHsgcmV0dXJuIHRoaXMuX25hbWU7IH1cclxuICAgIHNldCBuYW1lKHZhbHVlKSB7IHRoaXMuX25hbWUgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IHNleCgpIHsgcmV0dXJuIHRoaXMuX3NleDsgfVxyXG4gICAgc2V0IHNleCh2YWx1ZSkgeyB0aGlzLl9zZXggPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IGRpdmlzaW9uKCkgeyByZXR1cm4gdGhpcy5fZGl2aXNpb247IH1cclxuICAgIHNldCBkaXZpc2lvbih2YWx1ZSkgeyB0aGlzLl9kaXZpc2lvbiA9IHZhbHVlOyB9XHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGNvbnN0IHNhdmVQcm9taXNlID0gdGhpcy5faWRcclxuICAgICAgICAgICAgPyB0aGlzLl9zdHVkZW50U2VydmljZS51cGRhdGVTdHVkZW50KHRoaXMuX2lkLCB0aGlzLl9uYW1lLCB0aGlzLl9zZXgsIHRoaXMuX2RpdmlzaW9uKVxyXG4gICAgICAgICAgICA6IHRoaXMuX3N0dWRlbnRTZXJ2aWNlLmNyZWF0ZVN0dWRlbnQodGhpcy5fbmFtZSwgdGhpcy5fc2V4LCB0aGlzLl9kaXZpc2lvbik7XHJcbiAgICAgICAgc2F2ZVByb21pc2VcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGUoUm91dGVzLmxpc3RTdHVkZW50cywge30pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICB9XHJcbiAgICBvbkVudGVyKGlkKSB7XHJcbiAgICAgICAgdGhpcy5fYWRtaW5TZXJ2aWNlLmdldERpdmlzaW9ucygpXHJcbiAgICAgICAgICAgIC50aGVuKHQgPT4gdGhpcy5fZGl2aXNpb25zID0gdClcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLmdldFN0dWRlbnRNYXJrRW50cnkoKVxyXG4gICAgICAgICAgICAudGhlbih0ID0+IHRoaXMuX3N0dWRlbnRNYXJrRW50cnkgPSB0KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgaWYgKGlkICYmICFpZC5pc0VtcHR5T3JXaGl0ZVNwYWNlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gXCJVcGRhdGVcIjtcclxuICAgICAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ2V0U3R1ZGVudChpZClcclxuICAgICAgICAgICAgICAgIC50aGVuKHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faWQgPSB0LmlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHQubmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NleCA9IHQuc2V4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGl2aXNpb24gPSB0LmRpdmlzaW9uO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gXCJBZGRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbk1hbmFnZVN0dWRlbnRWaWV3TW9kZWwgPSBfX2RlY29yYXRlKFtcclxuICAgIG5fYXBwXzEudGVtcGxhdGUocmVxdWlyZShcIi4vbWFuYWdlLXN0dWRlbnQtdmlldy5odG1sXCIpKSxcclxuICAgIG5fYXBwXzEucm91dGUoUm91dGVzLm1hbmFnZVN0dWRlbnQpLFxyXG4gICAgbl9qZWN0XzEuaW5qZWN0KFwiU3R1ZGVudFNlcnZpY2VcIiwgXCJOYXZpZ2F0aW9uU2VydmljZVwiLCBcIkFkbWluU2VydmljZVwiKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbT2JqZWN0LCBPYmplY3QsIE9iamVjdF0pXHJcbl0sIE1hbmFnZVN0dWRlbnRWaWV3TW9kZWwpO1xyXG5leHBvcnRzLk1hbmFnZVN0dWRlbnRWaWV3TW9kZWwgPSBNYW5hZ2VTdHVkZW50Vmlld01vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYW5hZ2Utc3R1ZGVudC12aWV3LW1vZGVsLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtYW5hZ2UtdGVhY2hlci12aWV3XFxcIj5cXHJcXG4gICAgICAgIDxoMSBjbGFzcz1cXFwidGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgIHt7b3BlcmF0aW9ufX1cXHJcXG4gICAgICAgIDwvaDE+XFxyXFxuICAgIFxcclxcbiAgICAgICAgPGZvcm0+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImxhYmVsXFxcIj5OYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2LW1vZGVsPVxcXCJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJsYWJlbFxcXCI+c2V4PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiB2LW1vZGVsPVxcXCJzZXhcXFwiICB2YWx1ZT1cXFwiTWFsZVxcXCI+TWFsZVxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIHYtbW9kZWw9XFxcInNleFxcXCIgIHZhbHVlPVxcXCJGZW1hbGVcXFwiPkZlbWFsZVxcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImxhYmVsXFxcIj5EaXZpc2lvbjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWxlY3RcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0ICBpZD1cXFwic2VsZWN0Q2xhc3NJbkNoYXJnZVxcXCIgIHYtbW9kZWw9XFxcImRpdmlzaW9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XFxcIml0ZW0gaW4gZGl2aXNpb25zXFxcIiB2LWJpbmQ6dmFsdWU9XFxcIml0ZW0uaWRcXFwiID5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS5uYW1lIH19XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gXFxyXFxuICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQgaXMtZ3JvdXBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLWxpbmtcXFwiIHYtb246Y2xpY2sucHJldmVudD1cXFwic2F2ZVxcXCI+U2F2ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgY2xhc3M9XFxcImJ1dHRvbiBpcy10ZXh0XFxcIiB0bz1cXFwiL2xpc3RTdHVkZW50XFxcIj5DYW5jZWw8L3JvdXRlci1saW5rPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIFwiOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21hbmFnZS1zdHVkZW50LXZpZXcuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYW5hZ2Utc3R1ZGVudC12aWV3LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21hbmFnZS1zdHVkZW50LXZpZXcuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=