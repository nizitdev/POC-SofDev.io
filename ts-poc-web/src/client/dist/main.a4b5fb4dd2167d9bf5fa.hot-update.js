webpackHotUpdate("main",{

/***/ "./src/client/pages/list-contacts/list-contact-view.html":
/*!***************************************************************!*\
  !*** ./src/client/pages/list-contacts/list-contact-view.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-contacts-view\">\n    <nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n        <div class=\"searchPanel\">\n         \n                 \n            <div class=\"contact-container\">\n\n            <div class=\"columns\"> \n                    <input  class=\"input searchText\" type=\"text\" v-model=\"searchText\" placeholder=\"Search\">\n                    <button class=\"button is-link\" v-on:click.prevent=\"search\">Search</button>\n                    </div>\n                     \n<router-link to=\"/manageContact\" class=\"button is-primary last-child\">Create contact</router-link>\n                     \n                           \n            </div>\n            \n        </div>\n       \n    </nav>\n    \n    <div class=\"contact-container\">\n        <contact v-for=\"contact in contacts\" v-bind:key=\"contact.id\" v-bind:value=\"contact\"></contact>\n    </div>\n</div>";

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL2xpc3QtY29udGFjdHMvbGlzdC1jb250YWN0LXZpZXcuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2N0IiLCJmaWxlIjoibWFpbi5hNGI1ZmI0ZGQyMTY3ZDliZjVmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImxpc3QtY29udGFjdHMtdmlld1xcXCI+XFxuICAgIDxuYXYgY2xhc3M9XFxcIm5hdmJhclxcXCIgcm9sZT1cXFwibmF2aWdhdGlvblxcXCIgYXJpYS1sYWJlbD1cXFwibWFpbiBuYXZpZ2F0aW9uXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNlYXJjaFBhbmVsXFxcIj5cXG4gICAgICAgICBcXG4gICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhY3QtY29udGFpbmVyXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW5zXFxcIj4gXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIGNsYXNzPVxcXCJpbnB1dCBzZWFyY2hUZXh0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2LW1vZGVsPVxcXCJzZWFyY2hUZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy1saW5rXFxcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XFxcInNlYXJjaFxcXCI+U2VhcmNoPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICBcXG48cm91dGVyLWxpbmsgdG89XFxcIi9tYW5hZ2VDb250YWN0XFxcIiBjbGFzcz1cXFwiYnV0dG9uIGlzLXByaW1hcnkgbGFzdC1jaGlsZFxcXCI+Q3JlYXRlIGNvbnRhY3Q8L3JvdXRlci1saW5rPlxcbiAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgIFxcbiAgICA8L25hdj5cXG4gICAgXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhY3QtY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxjb250YWN0IHYtZm9yPVxcXCJjb250YWN0IGluIGNvbnRhY3RzXFxcIiB2LWJpbmQ6a2V5PVxcXCJjb250YWN0LmlkXFxcIiB2LWJpbmQ6dmFsdWU9XFxcImNvbnRhY3RcXFwiPjwvY29udGFjdD5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCI7Il0sInNvdXJjZVJvb3QiOiIifQ==