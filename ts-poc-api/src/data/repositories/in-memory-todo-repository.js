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
const n_defensive_1 = require("@nivinjoseph/n-defensive");
const todo_1 = require("../../domain/aggregates/todo/todo");
const todo_not_found_exception_1 = require("../../domain/exceptions/todo-not-found-exception");
const n_ject_1 = require("@nivinjoseph/n-ject");
let InMemoryTodoRepository = class InMemoryTodoRepository {
    constructor(domainContext) {
        n_defensive_1.given(domainContext, "domainContext").ensureHasValue().ensureIsObject();
        this._domainContext = domainContext;
        this._todos = {};
    }
    getAll() {
        const result = new Array();
        for (const key in this._todos) {
            result.push(todo_1.Todo.deserialize(this._domainContext, this._todos[key].data));
        }
        return Promise.resolve(result.orderByDesc(t => t.updatedAt));
    }
    get(id) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        if (!this._todos[id])
            return Promise.reject(new todo_not_found_exception_1.TodoNotFoundException(id));
        const result = todo_1.Todo.deserialize(this._domainContext, this._todos[id].data);
        return Promise.resolve(result);
    }
    save(todo) {
        n_defensive_1.given(todo, "todo").ensureHasValue().ensureIsType(todo_1.Todo);
        const data = todo.serialize();
        const storageEntity = {
            id: todo.id,
            version: todo.currentVersion,
            updatedAt: todo.updatedAt,
            data,
            query: data.$state
        };
        console.log(JSON.stringify(storageEntity));
        this._todos[todo.id] = storageEntity;
        return Promise.resolve();
    }
    delete(id) {
        n_defensive_1.given(id, "string").ensureHasValue().ensureIsString();
        if (this._todos[id])
            delete this._todos[id];
        return Promise.resolve();
    }
};
InMemoryTodoRepository = __decorate([
    n_ject_1.inject("DomainContext"),
    __metadata("design:paramtypes", [Object])
], InMemoryTodoRepository);
exports.InMemoryTodoRepository = InMemoryTodoRepository;
//# sourceMappingURL=in-memory-todo-repository.js.map