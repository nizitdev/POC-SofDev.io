"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n_web_1 = require("@nivinjoseph/n-web");
const n_config_1 = require("@nivinjoseph/n-config");
const controllers_1 = require("./controllers/controllers");
const n_defensive_1 = require("@nivinjoseph/n-defensive");
const default_todo_factory_1 = require("../domain/factories/default-todo-factory");
const n_log_1 = require("@nivinjoseph/n-log");
const app_exception_handler_1 = require("./exceptions/app-exception-handler");
const default_db_connection_factory_1 = require("../data/factories/default-db-connection-factory");
const n_data_1 = require("@nivinjoseph/n-data");
const db_todo_repository_1 = require("../data/repositories/db-todo-repository");
const n_domain_1 = require("@nivinjoseph/n-domain");
class Installer {
    install(registry) {
        n_defensive_1.given(registry, "registry").ensureHasValue().ensureIsObject();
        registry
            .registerInstance("DomainContext", new n_domain_1.SystemDomainContext())
            .registerSingleton("TodoRepository", db_todo_repository_1.DbTodoRepository)
            .registerSingleton("TodoFactory", default_todo_factory_1.DefaultTodoFactory)
            .registerSingleton("Logger", n_log_1.ConsoleLogger)
            .registerSingleton("DbConnectionFactory", default_db_connection_factory_1.DefaultDbConnectionFactory)
            .registerSingleton("Db", n_data_1.KnexPgDb)
            .registerScoped("UnitOfWork", n_data_1.KnexPgUnitOfWork);
    }
}
const server = new n_web_1.WebApp(n_config_1.ConfigurationManager.getConfig("PORT"))
    .useInstaller(new Installer())
    .registerControllers(...controllers_1.controllers)
    .registerExceptionHandler(app_exception_handler_1.AppExceptionHandler)
    .enableCors();
server.bootstrap();
//# sourceMappingURL=server.js.map