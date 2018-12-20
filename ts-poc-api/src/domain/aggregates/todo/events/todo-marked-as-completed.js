"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n_defensive_1 = require("@nivinjoseph/n-defensive");
const n_domain_1 = require("@nivinjoseph/n-domain");
class TodoMarkedAsCompleted extends n_domain_1.DomainEvent {
    static deserializeEvent(data) {
        n_defensive_1.given(data, "data").ensureHasValue().ensureIsObject();
        return new TodoMarkedAsCompleted(data);
    }
    serializeEvent() {
        return {};
    }
    applyEvent(state) {
        n_defensive_1.given(state, "state").ensureHasValue().ensureIsObject();
        state.isCompleted = true;
    }
}
exports.TodoMarkedAsCompleted = TodoMarkedAsCompleted;
//# sourceMappingURL=todo-marked-as-completed.js.map