webpackHotUpdate("main",{

/***/ "./src/client/client.js":
/*!******************************!*\
  !*** ./src/client/client.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
__webpack_require__(/*! material-design-icons/iconfont/material-icons.css */ "./node_modules/material-design-icons/iconfont/material-icons.css");
__webpack_require__(/*! ./styles/main.scss */ "./src/client/styles/main.scss");
const n_app_1 = __webpack_require__(/*! @nivinjoseph/n-app */ "./node_modules/@nivinjoseph/n-app/dist/index.js");
const Routes = __webpack_require__(/*! ./pages/routes */ "./src/client/pages/routes.js");
const services_installer_1 = __webpack_require__(/*! ./services/services-installer */ "./src/client/services/services-installer.js");
const components_1 = __webpack_require__(/*! ./components/components */ "./src/client/components/components.js");
const pages_1 = __webpack_require__(/*! ./pages/pages */ "./src/client/pages/pages.js");
const client = new n_app_1.ClientApp("#app")
    .useInstaller(new services_installer_1.ServicesInstaller())
    .useAccentColor("#93C5FC")
    .registerComponents(...components_1.components)
    .registerPages(...pages_1.pages)
    .useAsInitialRoute(Routes.adminPage)
    .useAsUnknownRoute(Routes.adminPage)
    .useHistoryModeRouting();
client.bootstrap();
//# sourceMappingURL=client.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NsaWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxtQkFBTyxDQUFDLG9FQUFpQjtBQUN6QixtQkFBTyxDQUFDLDJIQUFtRDtBQUMzRCxtQkFBTyxDQUFDLHlEQUFvQjtBQUM1QixnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLG9EQUFnQjtBQUN2Qyw2QkFBNkIsbUJBQU8sQ0FBQyxrRkFBK0I7QUFDcEUscUJBQXFCLG1CQUFPLENBQUMsc0VBQXlCO0FBQ3RELGdCQUFnQixtQkFBTyxDQUFDLGtEQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDIiwiZmlsZSI6Im1haW4uMDdkZGJiYTk1MDM1NDdmMzI1N2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCJAYmFiZWwvcG9seWZpbGxcIik7XHJcbnJlcXVpcmUoXCJtYXRlcmlhbC1kZXNpZ24taWNvbnMvaWNvbmZvbnQvbWF0ZXJpYWwtaWNvbnMuY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi9zdHlsZXMvbWFpbi5zY3NzXCIpO1xyXG5jb25zdCBuX2FwcF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWFwcFwiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4vcGFnZXMvcm91dGVzXCIpO1xyXG5jb25zdCBzZXJ2aWNlc19pbnN0YWxsZXJfMSA9IHJlcXVpcmUoXCIuL3NlcnZpY2VzL3NlcnZpY2VzLWluc3RhbGxlclwiKTtcclxuY29uc3QgY29tcG9uZW50c18xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9jb21wb25lbnRzXCIpO1xyXG5jb25zdCBwYWdlc18xID0gcmVxdWlyZShcIi4vcGFnZXMvcGFnZXNcIik7XHJcbmNvbnN0IGNsaWVudCA9IG5ldyBuX2FwcF8xLkNsaWVudEFwcChcIiNhcHBcIilcclxuICAgIC51c2VJbnN0YWxsZXIobmV3IHNlcnZpY2VzX2luc3RhbGxlcl8xLlNlcnZpY2VzSW5zdGFsbGVyKCkpXHJcbiAgICAudXNlQWNjZW50Q29sb3IoXCIjOTNDNUZDXCIpXHJcbiAgICAucmVnaXN0ZXJDb21wb25lbnRzKC4uLmNvbXBvbmVudHNfMS5jb21wb25lbnRzKVxyXG4gICAgLnJlZ2lzdGVyUGFnZXMoLi4ucGFnZXNfMS5wYWdlcylcclxuICAgIC51c2VBc0luaXRpYWxSb3V0ZShSb3V0ZXMuYWRtaW5QYWdlKVxyXG4gICAgLnVzZUFzVW5rbm93blJvdXRlKFJvdXRlcy5hZG1pblBhZ2UpXHJcbiAgICAudXNlSGlzdG9yeU1vZGVSb3V0aW5nKCk7XHJcbmNsaWVudC5ib290c3RyYXAoKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpZW50LmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=