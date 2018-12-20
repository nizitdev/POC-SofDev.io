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
const n_web_1 = require("@nivinjoseph/n-web");
const Routes = require("../routes");
const n_ject_1 = require("@nivinjoseph/n-ject");
const n_defensive_1 = require("@nivinjoseph/n-defensive");
let GetTodoController = class GetTodoController extends n_web_1.Controller {
    constructor(todoRepository) {
        super();
        n_defensive_1.given(todoRepository, "todoRepository").ensureHasValue().ensureIsObject();
        this._todoRepository = todoRepository;
    }
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
            const todo = yield this._todoRepository.get(id);
            return {
                id: todo.id,
                title: todo.title,
                description: todo.description,
                isCompleted: todo.isCompleted
            };
        });
    }
};
GetTodoController = __decorate([
    n_web_1.route(Routes.query.getTodo),
    n_web_1.query,
    n_ject_1.inject("TodoRepository"),
    __metadata("design:paramtypes", [Object])
], GetTodoController);
exports.GetTodoController = GetTodoController;
//# sourceMappingURL=get-todo-controller.js.map