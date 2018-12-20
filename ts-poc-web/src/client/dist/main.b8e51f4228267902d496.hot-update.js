webpackHotUpdate("main",{

/***/ "./src/client/services/todo/local-contact-service.js":
/*!***********************************************************!*\
  !*** ./src/client/services/todo/local-contact-service.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
class LocalContactService {
    constructor() {
        const contacts = new Array();
        const count = 10;
        for (let i = 0; i < count; i++) {
            contacts.push({
                id: "id" + i,
                firstName: "firstName" + i,
                lastName: "lastName" + i,
                isDeleted: false,
                email: "email" + i,
                phoneNo: "phoneNo" + i,
            });
        }
        this._contact = contacts;
        this._counter = count;
    }
    getContacts() {
        return Promise.resolve(this._contact);
    }
    getContact(id) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        return Promise.resolve(this._contact.find(t => t.id === id));
    }
    searchContacts(text) {
        n_defensive_1.given(text, "text").ensureHasValue().ensureIsString();
        return Promise.resolve(this._contact.filter(t => t.firstName === text));
    }
    createContact(firstName, lastName, phoneNo, email) {
        const contact = {
            id: "id" + this._counter,
            firstName: firstName,
            lastName: lastName,
            phoneNo: phoneNo,
            email: email,
            isDeleted: false,
        };
        this._contact.push(contact);
        return Promise.resolve(contact);
    }
    updateContact(id, firstName, lastName, phoneNo, email) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        n_defensive_1.given(firstName, "firstName").ensureHasValue().ensureIsString();
        n_defensive_1.given(lastName, "lastName").ensureIsString();
        n_defensive_1.given(phoneNo, "phoneNo").ensureIsString();
        n_defensive_1.given(email, "email").ensureIsString();
        const contact = this._contact.find(t => t.id === id);
        contact.firstName = firstName;
        contact.lastName = lastName;
        contact.phoneNo = phoneNo;
        contact.email = email;
        return Promise.resolve();
    }
    deleteContact(id) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        const todo = this._contact.find(t => t.id === id);
        todo.isDeleted = true;
        return Promise.resolve();
    }
}
exports.LocalContactService = LocalContactService;
//# sourceMappingURL=local-contact-service.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3RvZG8vbG9jYWwtY29udGFjdC1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELHNCQUFzQixtQkFBTyxDQUFDLHVGQUEwQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEIiwiZmlsZSI6Im1haW4uYjhlNTFmNDIyODI2NzkwMmQ0OTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5jbGFzcyBMb2NhbENvbnRhY3RTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhY3RzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSAxMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29udGFjdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJpZFwiICsgaSxcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogXCJmaXJzdE5hbWVcIiArIGksXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogXCJsYXN0TmFtZVwiICsgaSxcclxuICAgICAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJlbWFpbFwiICsgaSxcclxuICAgICAgICAgICAgICAgIHBob25lTm86IFwicGhvbmVOb1wiICsgaSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbnRhY3QgPSBjb250YWN0cztcclxuICAgICAgICB0aGlzLl9jb3VudGVyID0gY291bnQ7XHJcbiAgICB9XHJcbiAgICBnZXRDb250YWN0cygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2NvbnRhY3QpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29udGFjdChpZCkge1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oaWQsIFwiaWRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fY29udGFjdC5maW5kKHQgPT4gdC5pZCA9PT0gaWQpKTtcclxuICAgIH1cclxuICAgIHNlYXJjaENvbnRhY3RzKHRleHQpIHtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHRleHQsIFwidGV4dFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9jb250YWN0LmZpbHRlcih0ID0+IHQuZmlyc3ROYW1lID09PSB0ZXh0KSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDb250YWN0KGZpcnN0TmFtZSwgbGFzdE5hbWUsIHBob25lTm8sIGVtYWlsKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFjdCA9IHtcclxuICAgICAgICAgICAgaWQ6IFwiaWRcIiArIHRoaXMuX2NvdW50ZXIsXHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogbGFzdE5hbWUsXHJcbiAgICAgICAgICAgIHBob25lTm86IHBob25lTm8sXHJcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2NvbnRhY3QucHVzaChjb250YWN0KTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNvbnRhY3QpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlQ29udGFjdChpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGhvbmVObywgZW1haWwpIHtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlkLCBcImlkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGZpcnN0TmFtZSwgXCJmaXJzdE5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obGFzdE5hbWUsIFwibGFzdE5hbWVcIikuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHBob25lTm8sIFwicGhvbmVOb1wiKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oZW1haWwsIFwiZW1haWxcIikuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBjb250YWN0ID0gdGhpcy5fY29udGFjdC5maW5kKHQgPT4gdC5pZCA9PT0gaWQpO1xyXG4gICAgICAgIGNvbnRhY3QuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xyXG4gICAgICAgIGNvbnRhY3QubGFzdE5hbWUgPSBsYXN0TmFtZTtcclxuICAgICAgICBjb250YWN0LnBob25lTm8gPSBwaG9uZU5vO1xyXG4gICAgICAgIGNvbnRhY3QuZW1haWwgPSBlbWFpbDtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVDb250YWN0KGlkKSB7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihpZCwgXCJpZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgdG9kbyA9IHRoaXMuX2NvbnRhY3QuZmluZCh0ID0+IHQuaWQgPT09IGlkKTtcclxuICAgICAgICB0b2RvLmlzRGVsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTG9jYWxDb250YWN0U2VydmljZSA9IExvY2FsQ29udGFjdFNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvY2FsLWNvbnRhY3Qtc2VydmljZS5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9