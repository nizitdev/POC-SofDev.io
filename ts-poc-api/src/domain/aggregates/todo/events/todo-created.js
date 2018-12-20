"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n_defensive_1 = require("@nivinjoseph/n-defensive");
const n_domain_1 = require("@nivinjoseph/n-domain");
class TodoCreated extends n_domain_1.DomainEvent {
    constructor(data, todoId, title, description) {
        super(data);
        n_defensive_1.given(todoId, "todoId").ensureHasValue().ensureIsString();
        this._todoId = todoId;
        n_defensive_1.given(title, "title").ensureHasValue().ensureIsString();
        this._title = title;
        n_defensive_1.given(description, "description").ensureIsString();
        this._description = description;
    }
    static deserializeEvent(data) {
        n_defensive_1.given(data, "data").ensureHasValue().ensureIsObject();
        return new TodoCreated(data, data.todoId, data.title, data.description);
    }
    serializeEvent() {
        return {
            todoId: this._todoId,
            title: this._title,
            description: this._description
        };
    }
    applyEvent(state) {
        n_defensive_1.given(state, "state").ensureHasValue().ensureIsObject();
        state.id = this._todoId;
        state.title = this._title;
        state.description = this._description;
    }
}
exports.TodoCreated = TodoCreated;
//# sourceMappingURL=todo-created.js.map