"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n_defensive_1 = require("@nivinjoseph/n-defensive");
const n_domain_1 = require("@nivinjoseph/n-domain");
class TodoDescriptionUpdated extends n_domain_1.DomainEvent {
    constructor(data, description) {
        super(data);
        n_defensive_1.given(description, "description").ensureIsString();
        this._description = description;
    }
    static deserializeEvent(data) {
        n_defensive_1.given(data, "data").ensureHasValue().ensureIsObject();
        return new TodoDescriptionUpdated(data, data.description);
    }
    serializeEvent() {
        return {
            description: this._description
        };
    }
    applyEvent(state) {
        n_defensive_1.given(state, "state").ensureHasValue().ensureIsObject();
        state.description = this._description;
    }
}
exports.TodoDescriptionUpdated = TodoDescriptionUpdated;
//# sourceMappingURL=todo-description-updated.js.map