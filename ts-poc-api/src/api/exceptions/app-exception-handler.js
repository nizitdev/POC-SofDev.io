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
const n_ject_1 = require("@nivinjoseph/n-ject");
const n_web_1 = require("@nivinjoseph/n-web");
const validation_exception_1 = require("./validation-exception");
const todo_not_found_exception_1 = require("../../domain/exceptions/todo-not-found-exception");
let AppExceptionHandler = class AppExceptionHandler extends n_web_1.DefaultExceptionHandler {
    constructor(logger) {
        super(logger, true);
        this.registerHandler(todo_not_found_exception_1.TodoNotFoundException, (exp) => {
            throw new n_web_1.HttpException(404);
        });
        this.registerHandler(validation_exception_1.ValidationException, (exp) => {
            throw new n_web_1.HttpException(400, exp.errors);
        });
    }
};
AppExceptionHandler = __decorate([
    n_ject_1.inject("Logger"),
    __metadata("design:paramtypes", [Object])
], AppExceptionHandler);
exports.AppExceptionHandler = AppExceptionHandler;
//# sourceMappingURL=app-exception-handler.js.map