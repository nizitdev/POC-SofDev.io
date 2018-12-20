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
const n_ject_1 = require("@nivinjoseph/n-ject");
const todo_1 = require("../../domain/aggregates/todo/todo");
const todo_not_found_exception_1 = require("../../domain/exceptions/todo-not-found-exception");
let DbTodoRepository = class DbTodoRepository {
    constructor(db, domainContext) {
        n_defensive_1.given(db, "db").ensureHasValue().ensureIsObject();
        this._db = db;
        n_defensive_1.given(domainContext, "domainContext").ensureHasValue().ensureIsObject();
        this._domainContext = domainContext;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `select data from todos order by created_at;`;
            const queryResult = yield this._db.executeQuery(sql);
            return queryResult.rows.map(t => todo_1.Todo.deserialize(this._domainContext, t.data));
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
            id = id.trim();
            const sql = `select data from todos where id = ?;`;
            const result = yield this._db.executeQuery(sql, id);
            if (result.rows.length === 0)
                throw new todo_not_found_exception_1.TodoNotFoundException(id);
            return todo_1.Todo.deserialize(this._domainContext, result.rows[0].data);
        });
    }
    save(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            n_defensive_1.given(todo, "todo").ensureHasValue().ensureIsType(todo_1.Todo);
            const exists = yield this.checkIfTodoExists(todo.id);
            if (exists && todo.hasChanges) {
                const sql = `update todos 
                            set version = ?, updated_at = ?, data = ? 
                            where id = ? and version = ?;`;
                const params = [todo.currentVersion, todo.updatedAt, todo.serialize(), todo.id, todo.retroVersion];
                yield this._db.executeCommand(sql, ...params);
            }
            else {
                const sql = `insert into todos 
                            (id, version, created_at, updated_at, data) 
                            values(?, ?, ?, ?, ?);`;
                const params = [todo.id, todo.version, todo.createdAt, todo.updatedAt, todo.serialize()];
                yield this._db.executeCommand(sql, ...params);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
            id = id.trim();
            const exists = yield this.checkIfTodoExists(id);
            if (!exists)
                return;
            const sql = `delete from todos where id = ?;`;
            yield this._db.executeCommand(sql, id);
        });
    }
    checkIfTodoExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `select exists (select 1 from todos where id = ?);`;
            const result = yield this._db.executeQuery(sql, id);
            return result.rows[0].exists;
        });
    }
};
DbTodoRepository = __decorate([
    n_ject_1.inject("Db", "DomainContext"),
    __metadata("design:paramtypes", [Object, Object])
], DbTodoRepository);
exports.DbTodoRepository = DbTodoRepository;
//# sourceMappingURL=db-todo-repository.js.map