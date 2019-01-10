webpackHotUpdate("main",{

/***/ "./src/client/components/school/student/student-view-model.js":
/*!********************************************************************!*\
  !*** ./src/client/components/school/student/student-view-model.js ***!
  \********************************************************************/
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
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
const n_ject_1 = __webpack_require__(/*! @nivinjoseph/n-ject */ "./node_modules/@nivinjoseph/n-ject/dist/index.js");
const Routes = __webpack_require__(/*! ../../../pages/routes */ "./src/client/pages/routes.js");
__webpack_require__(/*! ./student-view.scss */ "./src/client/components/school/student/student-view.scss");
let StudentViewModel = class StudentViewModel extends n_app_1.ComponentViewModel {
    constructor(studentService, navigationService) {
        super();
        n_defensive_1.given(studentService, "studentService").ensureHasValue().ensureIsObject();
        n_defensive_1.given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._studentService = studentService;
        this._navigationService = navigationService;
    }
    get student() {
        return this.getBound("value");
    }
    manageStudentMark() {
        debugger;
        this._navigationService.navigate(Routes.manageStudentMark, {
            id: this.student.id
        });
    }
    editStudent() {
        this._navigationService.navigate(Routes.manageStudent, {
            id: this.student.id
        });
    }
    deleteStudent() {
        this._studentService.deleteStudent(this.student.id)
            .then(() => this.student.isDeleted = true)
            .catch(e => console.log(e));
    }
};
StudentViewModel = __decorate([
    n_app_1.template(__webpack_require__(/*! ./student-view.html */ "./src/client/components/school/student/student-view.html")),
    n_app_1.element("studentElement"),
    n_app_1.bind("value"),
    n_ject_1.inject("StudentService", "NavigationService"),
    __metadata("design:paramtypes", [Object, Object])
], StudentViewModel);
exports.StudentViewModel = StudentViewModel;
//# sourceMappingURL=student-view-model.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvc2Nob29sL3N0dWRlbnQvc3R1ZGVudC12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsc0JBQXNCLG1CQUFPLENBQUMsdUZBQTBCO0FBQ3hELGlCQUFpQixtQkFBTyxDQUFDLDZFQUFxQjtBQUM5QyxlQUFlLG1CQUFPLENBQUMsMkRBQXVCO0FBQzlDLG1CQUFPLENBQUMscUZBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMscUZBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDIiwiZmlsZSI6Im1haW4uNTczYTczYmQ4NmNkNDE3ZTEwNzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBuX2FwcF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWFwcFwiKTtcclxuY29uc3Qgbl9kZWZlbnNpdmVfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1kZWZlbnNpdmVcIik7XHJcbmNvbnN0IG5famVjdF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWplY3RcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9wYWdlcy9yb3V0ZXNcIik7XHJcbnJlcXVpcmUoXCIuL3N0dWRlbnQtdmlldy5zY3NzXCIpO1xyXG5sZXQgU3R1ZGVudFZpZXdNb2RlbCA9IGNsYXNzIFN0dWRlbnRWaWV3TW9kZWwgZXh0ZW5kcyBuX2FwcF8xLkNvbXBvbmVudFZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdHVkZW50U2VydmljZSwgbmF2aWdhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc3R1ZGVudFNlcnZpY2UsIFwic3R1ZGVudFNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obmF2aWdhdGlvblNlcnZpY2UsIFwibmF2aWdhdGlvblNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlID0gc3R1ZGVudFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UgPSBuYXZpZ2F0aW9uU2VydmljZTtcclxuICAgIH1cclxuICAgIGdldCBzdHVkZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJvdW5kKFwidmFsdWVcIik7XHJcbiAgICB9XHJcbiAgICBtYW5hZ2VTdHVkZW50TWFyaygpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShSb3V0ZXMubWFuYWdlU3R1ZGVudE1hcmssIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuc3R1ZGVudC5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWRpdFN0dWRlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGUoUm91dGVzLm1hbmFnZVN0dWRlbnQsIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuc3R1ZGVudC5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlU3R1ZGVudCgpIHtcclxuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5kZWxldGVTdHVkZW50KHRoaXMuc3R1ZGVudC5pZClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zdHVkZW50LmlzRGVsZXRlZCA9IHRydWUpXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgIH1cclxufTtcclxuU3R1ZGVudFZpZXdNb2RlbCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgbl9hcHBfMS50ZW1wbGF0ZShyZXF1aXJlKFwiLi9zdHVkZW50LXZpZXcuaHRtbFwiKSksXHJcbiAgICBuX2FwcF8xLmVsZW1lbnQoXCJzdHVkZW50RWxlbWVudFwiKSxcclxuICAgIG5fYXBwXzEuYmluZChcInZhbHVlXCIpLFxyXG4gICAgbl9qZWN0XzEuaW5qZWN0KFwiU3R1ZGVudFNlcnZpY2VcIiwgXCJOYXZpZ2F0aW9uU2VydmljZVwiKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbT2JqZWN0LCBPYmplY3RdKVxyXG5dLCBTdHVkZW50Vmlld01vZGVsKTtcclxuZXhwb3J0cy5TdHVkZW50Vmlld01vZGVsID0gU3R1ZGVudFZpZXdNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R1ZGVudC12aWV3LW1vZGVsLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=