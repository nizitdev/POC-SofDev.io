webpackHotUpdate("main",{

/***/ "./src/client/pages/list-contacts/list-contact-view.html":
/*!***************************************************************!*\
  !*** ./src/client/pages/list-contacts/list-contact-view.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-contacts-view\">\n    <nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n        <div class=\"searchPanel\">\n           <div class=\"columns\">\n                 \n            \n                    <input  class=\"input searchText\" type=\"text\" v-model=\"searchText\" placeholder=\"Search\">\n                    <button class=\"button is-link\" v-on:click.prevent=\"search\">Search</button>\n                    <div class=\"pullLeft \">\n<router-link to=\"/manageContact\" class=\"button is-primary level-right\">Create contact</router-link>\n                    </div>\n                           \n            </div>\n            \n        </div>\n       \n    </nav>\n    \n    <div class=\"todo-container\">\n        <contact v-for=\"contact in contacts\" v-bind:key=\"contact.id\" v-bind:value=\"contact\"></contact>\n    </div>\n</div>";

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL2xpc3QtY29udGFjdHMvbGlzdC1jb250YWN0LXZpZXcuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw0NEIiLCJmaWxlIjoibWFpbi5hMWQ2NTVhMzZjNGM5MjY3ZTRiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImxpc3QtY29udGFjdHMtdmlld1xcXCI+XFxuICAgIDxuYXYgY2xhc3M9XFxcIm5hdmJhclxcXCIgcm9sZT1cXFwibmF2aWdhdGlvblxcXCIgYXJpYS1sYWJlbD1cXFwibWFpbiBuYXZpZ2F0aW9uXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNlYXJjaFBhbmVsXFxcIj5cXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIGNsYXNzPVxcXCJpbnB1dCBzZWFyY2hUZXh0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2LW1vZGVsPVxcXCJzZWFyY2hUZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy1saW5rXFxcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XFxcInNlYXJjaFxcXCI+U2VhcmNoPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwdWxsTGVmdCBcXFwiPlxcbjxyb3V0ZXItbGluayB0bz1cXFwiL21hbmFnZUNvbnRhY3RcXFwiIGNsYXNzPVxcXCJidXR0b24gaXMtcHJpbWFyeSBsZXZlbC1yaWdodFxcXCI+Q3JlYXRlIGNvbnRhY3Q8L3JvdXRlci1saW5rPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgXFxuICAgIDwvbmF2PlxcbiAgICBcXG4gICAgPGRpdiBjbGFzcz1cXFwidG9kby1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGNvbnRhY3Qgdi1mb3I9XFxcImNvbnRhY3QgaW4gY29udGFjdHNcXFwiIHYtYmluZDprZXk9XFxcImNvbnRhY3QuaWRcXFwiIHYtYmluZDp2YWx1ZT1cXFwiY29udGFjdFxcXCI+PC9jb250YWN0PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIjsiXSwic291cmNlUm9vdCI6IiJ9