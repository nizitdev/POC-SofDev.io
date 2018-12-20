"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n_defensive_1 = require("@nivinjoseph/n-defensive");
const n_domain_1 = require("@nivinjoseph/n-domain");
class TodoTitleUpdated extends n_domain_1.DomainEvent {
    constructor(data, title) {
        super(data);
        n_defensive_1.given(title, "title").ensureHasValue().ensureIsString();
        this._title = title;
    }
    static deserializeEvent(data) {
        n_defensive_1.given(data, "data").ensureHasValue().ensureIsObject();
        return new TodoTitleUpdated(data, data.title);
    }
    serializeEvent() {
        return {
            title: this._title
        };
    }
    applyEvent(state) {
        n_defensive_1.given(state, "state").ensureHasValue().ensureIsObject();
        state.title = this._title;
    }
}
exports.TodoTitleUpdated = TodoTitleUpdated;
//# sourceMappingURL=todo-title-updated.js.map