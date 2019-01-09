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
exports.push([module.i, ".manage-teacher-view {\n  padding: 50px; }\n", ""]);

// exports


/***/ }),

/***/ "./src/client/components/school/student/student-view.html":
/*!****************************************************************!*\
  !*** ./src/client/components/school/student/student-view.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n    <tr>\r\n        <td class=\"table-row-active-background-color\">\r\n            {{student.name}}\r\n        </td>\r\n        <td class=\"table-row-active-background-color\">\r\n            {{student.sex}}\r\n        </td>\r\n        <td class=\"table-row-active-background-color\">\r\n            {{student.division}}\r\n        </td>\r\n        <td>\r\n            <div class=\"buttons are-medium student-controls\">\r\n                <a href=\"#\" class=\"button is-primary\" v-on:click.prevent=\"editStudent\">Edit</a>\r\n                <a href=\"#\" class=\"button is-primary\" v-on:click.prevent=\"deleteTeacher\">Delete</a>  \r\n                 <a href=\"#\" class=\"button is-primary\" v-on:click.prevent=\"manageStudentMark\">mark Enter</a>\r\n            </div>\r\n\r\n        </td>\r\n\r\n    </tr>\r\n ";

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2Utc3R1ZGVudC9tYW5hZ2Utc3R1ZGVudC12aWV3LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3NjaG9vbC9zdHVkZW50L3N0dWRlbnQtdmlldy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLHlHQUF3RDtBQUMzRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMseUJBQXlCLGtCQUFrQixFQUFFOztBQUVwRTs7Ozs7Ozs7Ozs7O0FDUEEsNkdBQTZHLGNBQWMsK0ZBQStGLGFBQWEsK0ZBQStGLGtCQUFrQixxZiIsImZpbGUiOiJtYWluLmI4MTdiN2ZlZWYwN2EyNjcxY2M2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tYW5hZ2UtdGVhY2hlci12aWV3IHtcXG4gIHBhZGRpbmc6IDUwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiIFxcclxcbiAgICA8dHI+XFxyXFxuICAgICAgICA8dGQgY2xhc3M9XFxcInRhYmxlLXJvdy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvclxcXCI+XFxyXFxuICAgICAgICAgICAge3tzdHVkZW50Lm5hbWV9fVxcclxcbiAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgIDx0ZCBjbGFzcz1cXFwidGFibGUtcm93LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yXFxcIj5cXHJcXG4gICAgICAgICAgICB7e3N0dWRlbnQuc2V4fX1cXHJcXG4gICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICA8dGQgY2xhc3M9XFxcInRhYmxlLXJvdy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvclxcXCI+XFxyXFxuICAgICAgICAgICAge3tzdHVkZW50LmRpdmlzaW9ufX1cXHJcXG4gICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnV0dG9ucyBhcmUtbWVkaXVtIHN0dWRlbnQtY29udHJvbHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnV0dG9uIGlzLXByaW1hcnlcXFwiIHYtb246Y2xpY2sucHJldmVudD1cXFwiZWRpdFN0dWRlbnRcXFwiPkVkaXQ8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidXR0b24gaXMtcHJpbWFyeVxcXCIgdi1vbjpjbGljay5wcmV2ZW50PVxcXCJkZWxldGVUZWFjaGVyXFxcIj5EZWxldGU8L2E+ICBcXHJcXG4gICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidXR0b24gaXMtcHJpbWFyeVxcXCIgdi1vbjpjbGljay5wcmV2ZW50PVxcXCJtYW5hZ2VTdHVkZW50TWFya1xcXCI+bWFyayBFbnRlcjwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDwvdGQ+XFxyXFxuXFxyXFxuICAgIDwvdHI+XFxyXFxuIFwiOyJdLCJzb3VyY2VSb290IjoiIn0=