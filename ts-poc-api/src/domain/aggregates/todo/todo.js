"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n_defensive_1 = require("@nivinjoseph/n-defensive");
require("@nivinjoseph/n-ext");
const todo_marked_as_completed_1 = require("./events/todo-marked-as-completed");
const n_domain_1 = require("@nivinjoseph/n-domain");
const todo_title_updated_1 = require("./events/todo-title-updated");
const todo_description_updated_1 = require("./events/todo-description-updated");
const todo_created_1 = require("./events/todo-created");
class Todo extends n_domain_1.AggregateRoot {
    get title() { return this.state.title; }
    get description() { return this.state.description; }
    get isCompleted() { return this.state.isCompleted; }
    constructor(domainContext, events) {
        super(domainContext, events, { isCompleted: false });
    }
    static deserialize(domainContext, data) {
        const eventTypes = [
            todo_created_1.TodoCreated,
            todo_title_updated_1.TodoTitleUpdated,
            todo_description_updated_1.TodoDescriptionUpdated,
            todo_marked_as_completed_1.TodoMarkedAsCompleted
        ];
        return n_domain_1.AggregateRoot.deserialize(domainContext, Todo, eventTypes, data);
    }
    updateTitle(title) {
        n_defensive_1.given(title, "title").ensureHasValue().ensureIsString();
        title = title.trim();
        this.applyEvent(new todo_title_updated_1.TodoTitleUpdated({}, title));
    }
    updateDescription(description) {
        n_defensive_1.given(description, "description").ensureIsString();
        description = description && !description.isEmptyOrWhiteSpace() ? description.trim() : null;
        this.applyEvent(new todo_description_updated_1.TodoDescriptionUpdated({}, description));
    }
    markAsCompleted() {
        this.applyEvent(new todo_marked_as_completed_1.TodoMarkedAsCompleted({}));
    }
}
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map