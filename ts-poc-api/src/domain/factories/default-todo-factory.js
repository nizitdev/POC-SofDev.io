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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const n_defensive_1 = require("@nivinjoseph/n-defensive");
require("@nivinjoseph/n-ext");
const todo_1 = require("../aggregates/todo/todo");
const n_ject_1 = require("@nivinjoseph/n-ject");
const n_domain_1 = require("@nivinjoseph/n-domain");
const todo_created_1 = require("../aggregates/todo/events/todo-created");
let DefaultTodoFactory = class DefaultTodoFactory {
    constructor(domainContext, todoRepo) {
        n_defensive_1.given(domainContext, "domainContext").ensureHasValue().ensureIsObject();
        this._domainContext = domainContext;
        n_defensive_1.given(todoRepo, "todoRepo").ensureHasValue().ensureIsObject();
        this._todoRepo = todoRepo;
    }
    create(title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            n_defensive_1.given(title, "title").ensureHasValue().ensureIsString();
            n_defensive_1.given(description, "description").ensureIsString();
            title = title.trim();
            description = description && !description.isEmptyOrWhiteSpace() ? description.trim() : null;
            const event = new todo_created_1.TodoCreated({ $isCreatedEvent: true }, n_domain_1.DomainHelper.generateId(), title, description);
            const todo = new todo_1.Todo(this._domainContext, [event]);
            yield this._todoRepo.save(todo);
            return yield this._todoRepo.get(todo.id);
        });
    }
};
DefaultTodoFactory = __decorate([
    n_ject_1.inject("DomainContext", "TodoRepository"),
    __metadata("design:paramtypes", [Object, Object])
], DefaultTodoFactory);
exports.DefaultTodoFactory = DefaultTodoFactory;
//# sourceMappingURL=default-todo-factory.js.map