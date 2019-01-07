webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/list-students/list-student-view.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/list-students/list-student-view.scss ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-teacher-view {\n  padding: 50px; }\n  .list-teacher-view .create-teacher-button {\n    margin: 25px; }\n  .list-teacher-view .teacher-container {\n    display: flex;\n    flex-wrap: wrap; }\n", ""]);

// exports


/***/ }),

/***/ "./src/client/pages/school/list-students/list-student-view-model.js":
/*!**************************************************************************!*\
  !*** ./src/client/pages/school/list-students/list-student-view-model.js ***!
  \**************************************************************************/
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
__webpack_require__(/*! ./list-student-view.scss */ "./src/client/pages/school/list-students/list-student-view.scss");
const n_ject_1 = __webpack_require__(/*! @nivinjoseph/n-ject */ "./node_modules/@nivinjoseph/n-ject/dist/index.js");
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
let ListStudentViewModel = class ListStudentViewModel extends n_app_1.PageViewModel {
    constructor(studentService) {
        super();
        n_defensive_1.given(studentService, "studentService").ensureHasValue().ensureIsObject();
        this._studentService = studentService;
        this._students = [];
    }
    get student() {
        return this._students;
    }
    onEnter() {
        this._studentService.getStudents()
            .then(t => this._students = t)
            .catch(e => console.log(e));
    }
};
ListStudentViewModel = __decorate([
    n_app_1.template(__webpack_require__(/*! ./list-student-view.html */ "./src/client/pages/school/list-students/list-student-view.html")),
    n_app_1.route(Routes.listStudents),
    n_ject_1.inject("StudentService"),
    __metadata("design:paramtypes", [Object])
], ListStudentViewModel);
exports.ListStudentViewModel = ListStudentViewModel;
//# sourceMappingURL=list-student-view-model.js.map

/***/ }),

/***/ "./src/client/pages/school/list-students/list-student-view.html":
/*!**********************************************************************!*\
  !*** ./src/client/pages/school/list-students/list-student-view.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-teacher-view\">\r\n        <nav class=\"navbar  has-addons is-right\" role=\"navigation\" aria-label=\"main navigation\">\r\n            <div class=\"navbar-brand\">\r\n                <router-link to=\"/manageStudent\" class=\"button is-primary create-teacher-button\">Add Student</router-link>\r\n            </div>\r\n        </nav>\r\n        \r\n        <table class=\"table is-fullwidth \">\r\n            <tr> \r\n                <td class=\"table-row-active-background-color is-primary\">\r\n                    Name\r\n                </td>\r\n                <td class=\"table-row-active-background-color is-primary\">\r\n                        Sex\r\n                    </td>\r\n                    <td class=\"table-row-active-background-color is-primary\">\r\n                        Division\r\n                    </td>\r\n                    <td class=\"table-row-active-background-color is-primary\">\r\n\r\n                    </td>\r\n            </tr>\r\n            <tr v-for=\"item in teachers\" v-bind:key=\"item.id\" v-bind:value=\"item\">\r\n                <td >\r\n                    {{item.name}}\r\n                </td>\r\n                <td>\r\n                    {{item.sex}}\r\n                </td>\r\n                <td>\r\n                 {{item.division}}\r\n                </td>\r\n                <td>\r\n                        <a href=\"#\" class=\"card-footer-item btnEdit\" v-on:click.prevent=\"editTeacher\">Edit</a>\r\n                        <a href=\"#\" class=\"card-footer-item\" v-on:click.prevent=\"deleteTeacher\">Delete</a>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <div>\r\n           \r\n        </div>\r\n    \r\n       \r\n    </div>";

/***/ }),

/***/ "./src/client/pages/school/list-students/list-student-view.scss":
/*!**********************************************************************!*\
  !*** ./src/client/pages/school/list-students/list-student-view.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!./list-student-view.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/list-students/list-student-view.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!./list-student-view.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/list-students/list-student-view.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!./list-student-view.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/list-students/list-student-view.scss");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9saXN0LXN0dWRlbnRzL2xpc3Qtc3R1ZGVudC12aWV3LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9zY2hvb2wvbGlzdC1zdHVkZW50cy9saXN0LXN0dWRlbnQtdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9saXN0LXN0dWRlbnRzL2xpc3Qtc3R1ZGVudC12aWV3Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9zY2hvb2wvbGlzdC1zdHVkZW50cy9saXN0LXN0dWRlbnQtdmlldy5zY3NzPzUzMmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMseUdBQXdEO0FBQzNGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyx1QkFBdUIsa0JBQWtCLEVBQUUsK0NBQStDLG1CQUFtQixFQUFFLDJDQUEyQyxvQkFBb0Isc0JBQXNCLEVBQUU7O0FBRTdOOzs7Ozs7Ozs7Ozs7O0FDUGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsMkVBQW9CO0FBQzVDLGVBQWUsbUJBQU8sQ0FBQyxrREFBYztBQUNyQyxtQkFBTyxDQUFDLGdHQUEwQjtBQUNsQyxpQkFBaUIsbUJBQU8sQ0FBQyw2RUFBcUI7QUFDOUMsc0JBQXNCLG1CQUFPLENBQUMsdUZBQTBCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyxnR0FBMEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EOzs7Ozs7Ozs7OztBQ3ZDQSxnb0NBQWdvQyxXQUFXLDJFQUEyRSxVQUFVLHdFQUF3RSxlQUFlLG9iOzs7Ozs7Ozs7Ozs7QUNDdnpDLGNBQWMsbUJBQU8sQ0FBQywrV0FBb007O0FBRTFOLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQywrR0FBNEQ7O0FBRWpGOztBQUVBLEdBQUcsSUFBVTtBQUNiLG1CQUFtQiwrV0FBb007QUFDdk4sbUJBQW1CLG1CQUFPLENBQUMsK1dBQW9NOztBQUUvTixvREFBb0QsUUFBUzs7QUFFN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJtYWluLjhiYzY4N2RlYjRiYTE5MDRhN2Q2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5saXN0LXRlYWNoZXItdmlldyB7XFxuICBwYWRkaW5nOiA1MHB4OyB9XFxuICAubGlzdC10ZWFjaGVyLXZpZXcgLmNyZWF0ZS10ZWFjaGVyLWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMjVweDsgfVxcbiAgLmxpc3QtdGVhY2hlci12aWV3IC50ZWFjaGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBuX2FwcF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWFwcFwiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4uLy4uL3JvdXRlc1wiKTtcclxucmVxdWlyZShcIi4vbGlzdC1zdHVkZW50LXZpZXcuc2Nzc1wiKTtcclxuY29uc3Qgbl9qZWN0XzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tamVjdFwiKTtcclxuY29uc3Qgbl9kZWZlbnNpdmVfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1kZWZlbnNpdmVcIik7XHJcbmxldCBMaXN0U3R1ZGVudFZpZXdNb2RlbCA9IGNsYXNzIExpc3RTdHVkZW50Vmlld01vZGVsIGV4dGVuZHMgbl9hcHBfMS5QYWdlVmlld01vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0dWRlbnRTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHN0dWRlbnRTZXJ2aWNlLCBcInN0dWRlbnRTZXJ2aWNlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZSA9IHN0dWRlbnRTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRzID0gW107XHJcbiAgICB9XHJcbiAgICBnZXQgc3R1ZGVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3R1ZGVudHM7XHJcbiAgICB9XHJcbiAgICBvbkVudGVyKCkge1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLmdldFN0dWRlbnRzKClcclxuICAgICAgICAgICAgLnRoZW4odCA9PiB0aGlzLl9zdHVkZW50cyA9IHQpXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgIH1cclxufTtcclxuTGlzdFN0dWRlbnRWaWV3TW9kZWwgPSBfX2RlY29yYXRlKFtcclxuICAgIG5fYXBwXzEudGVtcGxhdGUocmVxdWlyZShcIi4vbGlzdC1zdHVkZW50LXZpZXcuaHRtbFwiKSksXHJcbiAgICBuX2FwcF8xLnJvdXRlKFJvdXRlcy5saXN0U3R1ZGVudHMpLFxyXG4gICAgbl9qZWN0XzEuaW5qZWN0KFwiU3R1ZGVudFNlcnZpY2VcIiksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW09iamVjdF0pXHJcbl0sIExpc3RTdHVkZW50Vmlld01vZGVsKTtcclxuZXhwb3J0cy5MaXN0U3R1ZGVudFZpZXdNb2RlbCA9IExpc3RTdHVkZW50Vmlld01vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXN0LXN0dWRlbnQtdmlldy1tb2RlbC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibGlzdC10ZWFjaGVyLXZpZXdcXFwiPlxcclxcbiAgICAgICAgPG5hdiBjbGFzcz1cXFwibmF2YmFyICBoYXMtYWRkb25zIGlzLXJpZ2h0XFxcIiByb2xlPVxcXCJuYXZpZ2F0aW9uXFxcIiBhcmlhLWxhYmVsPVxcXCJtYWluIG5hdmlnYXRpb25cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cXFwiL21hbmFnZVN0dWRlbnRcXFwiIGNsYXNzPVxcXCJidXR0b24gaXMtcHJpbWFyeSBjcmVhdGUtdGVhY2hlci1idXR0b25cXFwiPkFkZCBTdHVkZW50PC9yb3V0ZXItbGluaz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvbmF2PlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIGlzLWZ1bGx3aWR0aCBcXFwiPlxcclxcbiAgICAgICAgICAgIDx0cj4gXFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGFibGUtcm93LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yIGlzLXByaW1hcnlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgTmFtZVxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRhYmxlLXJvdy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvciBpcy1wcmltYXJ5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBTZXhcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRhYmxlLXJvdy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvciBpcy1wcmltYXJ5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXZpc2lvblxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGFibGUtcm93LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yIGlzLXByaW1hcnlcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgIDx0ciB2LWZvcj1cXFwiaXRlbSBpbiB0ZWFjaGVyc1xcXCIgdi1iaW5kOmtleT1cXFwiaXRlbS5pZFxcXCIgdi1iaW5kOnZhbHVlPVxcXCJpdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRkID5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHt7aXRlbS5uYW1lfX1cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAge3tpdGVtLnNleH19XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgIHt7aXRlbS5kaXZpc2lvbn19XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiY2FyZC1mb290ZXItaXRlbSBidG5FZGl0XFxcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XFxcImVkaXRUZWFjaGVyXFxcIj5FZGl0PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJjYXJkLWZvb3Rlci1pdGVtXFxcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XFxcImRlbGV0ZVRlYWNoZXJcXFwiPkRlbGV0ZTwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICBcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICBcXHJcXG4gICAgICAgXFxyXFxuICAgIDwvZGl2PlwiOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2xpc3Qtc3R1ZGVudC12aWV3LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbGlzdC1zdHVkZW50LXZpZXcuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbGlzdC1zdHVkZW50LXZpZXcuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=