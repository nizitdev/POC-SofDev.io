webpackHotUpdate("main",{

/***/ "./src/client/pages/list-contacts/list-contact-view.html":
/*!***************************************************************!*\
  !*** ./src/client/pages/list-contacts/list-contact-view.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-contacts-view\">\n    <nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n           <div class=\"c\">\n                 \n                <div class=\"searchControls\">\n                    <input  class=\"input\" type=\"text\" v-model=\"searchText\" placeholder=\"Search\">\n                    <button class=\"button is-link\" v-on:click.prevent=\"search\">Search</button>\n                </div>\n            </div>\n            \n         \n        <div class=\"navbar-brand\">\n            <router-link to=\"/manageContact\" class=\"button is-primary create-todo-button\">Create contact</router-link>\n        </div>\n    </nav>\n    \n    <div class=\"todo-container\">\n        <contact v-for=\"contact in contacts\" v-bind:key=\"contact.id\" v-bind:value=\"contact\"></contact>\n    </div>\n</div>";

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL2xpc3QtY29udGFjdHMvbGlzdC1jb250YWN0LXZpZXcuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxtMkIiLCJmaWxlIjoibWFpbi5jNDg0NjU3NzQ4ZDY4NGJiOTRlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImxpc3QtY29udGFjdHMtdmlld1xcXCI+XFxuICAgIDxuYXYgY2xhc3M9XFxcIm5hdmJhclxcXCIgcm9sZT1cXFwibmF2aWdhdGlvblxcXCIgYXJpYS1sYWJlbD1cXFwibWFpbiBuYXZpZ2F0aW9uXFxcIj5cXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNcXFwiPlxcbiAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlYXJjaENvbnRyb2xzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgY2xhc3M9XFxcImlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2LW1vZGVsPVxcXCJzZWFyY2hUZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy1saW5rXFxcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XFxcInNlYXJjaFxcXCI+U2VhcmNoPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgIFxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIj5cXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XFxcIi9tYW5hZ2VDb250YWN0XFxcIiBjbGFzcz1cXFwiYnV0dG9uIGlzLXByaW1hcnkgY3JlYXRlLXRvZG8tYnV0dG9uXFxcIj5DcmVhdGUgY29udGFjdDwvcm91dGVyLWxpbms+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9uYXY+XFxuICAgIFxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8Y29udGFjdCB2LWZvcj1cXFwiY29udGFjdCBpbiBjb250YWN0c1xcXCIgdi1iaW5kOmtleT1cXFwiY29udGFjdC5pZFxcXCIgdi1iaW5kOnZhbHVlPVxcXCJjb250YWN0XFxcIj48L2NvbnRhY3Q+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiOyJdLCJzb3VyY2VSb290IjoiIn0=