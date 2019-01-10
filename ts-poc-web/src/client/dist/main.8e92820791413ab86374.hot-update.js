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
        debugger;
        this._studentService.deleteStudent(this.student.id)
            .then(() => this.student.isDeleted = true)
            .catch(e => console.log(e));
        alert("deleted");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvc2Nob29sL3N0dWRlbnQvc3R1ZGVudC12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsc0JBQXNCLG1CQUFPLENBQUMsdUZBQTBCO0FBQ3hELGlCQUFpQixtQkFBTyxDQUFDLDZFQUFxQjtBQUM5QyxlQUFlLG1CQUFPLENBQUMsMkRBQXVCO0FBQzlDLG1CQUFPLENBQUMscUZBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBTyxDQUFDLHFGQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QyIsImZpbGUiOiJtYWluLjhlOTI4MjA3OTE0MTNhYjg2Mzc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbl9hcHBfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1hcHBcIik7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5jb25zdCBuX2plY3RfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1qZWN0XCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vcGFnZXMvcm91dGVzXCIpO1xyXG5yZXF1aXJlKFwiLi9zdHVkZW50LXZpZXcuc2Nzc1wiKTtcclxubGV0IFN0dWRlbnRWaWV3TW9kZWwgPSBjbGFzcyBTdHVkZW50Vmlld01vZGVsIGV4dGVuZHMgbl9hcHBfMS5Db21wb25lbnRWaWV3TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3Ioc3R1ZGVudFNlcnZpY2UsIG5hdmlnYXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHN0dWRlbnRTZXJ2aWNlLCBcInN0dWRlbnRTZXJ2aWNlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNPYmplY3QoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKG5hdmlnYXRpb25TZXJ2aWNlLCBcIm5hdmlnYXRpb25TZXJ2aWNlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZSA9IHN0dWRlbnRTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlID0gbmF2aWdhdGlvblNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBnZXQgc3R1ZGVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZChcInZhbHVlXCIpO1xyXG4gICAgfVxyXG4gICAgbWFuYWdlU3R1ZGVudE1hcmsoKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGUoUm91dGVzLm1hbmFnZVN0dWRlbnRNYXJrLCB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLnN0dWRlbnQuaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVkaXRTdHVkZW50KCkge1xyXG4gICAgICAgIHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlKFJvdXRlcy5tYW5hZ2VTdHVkZW50LCB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLnN0dWRlbnQuaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRlbGV0ZVN0dWRlbnQoKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZGVsZXRlU3R1ZGVudCh0aGlzLnN0dWRlbnQuaWQpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuc3R1ZGVudC5pc0RlbGV0ZWQgPSB0cnVlKVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgYWxlcnQoXCJkZWxldGVkXCIpO1xyXG4gICAgfVxyXG59O1xyXG5TdHVkZW50Vmlld01vZGVsID0gX19kZWNvcmF0ZShbXHJcbiAgICBuX2FwcF8xLnRlbXBsYXRlKHJlcXVpcmUoXCIuL3N0dWRlbnQtdmlldy5odG1sXCIpKSxcclxuICAgIG5fYXBwXzEuZWxlbWVudChcInN0dWRlbnRFbGVtZW50XCIpLFxyXG4gICAgbl9hcHBfMS5iaW5kKFwidmFsdWVcIiksXHJcbiAgICBuX2plY3RfMS5pbmplY3QoXCJTdHVkZW50U2VydmljZVwiLCBcIk5hdmlnYXRpb25TZXJ2aWNlXCIpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtPYmplY3QsIE9iamVjdF0pXHJcbl0sIFN0dWRlbnRWaWV3TW9kZWwpO1xyXG5leHBvcnRzLlN0dWRlbnRWaWV3TW9kZWwgPSBTdHVkZW50Vmlld01vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHVkZW50LXZpZXctbW9kZWwuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==