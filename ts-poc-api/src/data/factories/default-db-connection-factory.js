"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const n_data_1 = require("@nivinjoseph/n-data");
const n_config_1 = require("@nivinjoseph/n-config");
class DefaultDbConnectionFactory {
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._dbConnectionFactory) {
                let dbConfig = n_config_1.ConfigurationManager.getConfig("dbConfig");
                this._dbConnectionFactory = new n_data_1.KnexPgDbConnectionFactory(dbConfig.host, dbConfig.port.toString(), dbConfig.database, dbConfig.username, dbConfig.password);
            }
            return yield this._dbConnectionFactory.create();
        });
    }
    dispose() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._dbConnectionFactory) {
                let dbConnectionFactory = this._dbConnectionFactory;
                this._dbConnectionFactory = null;
                yield dbConnectionFactory.dispose();
            }
        });
    }
}
exports.DefaultDbConnectionFactory = DefaultDbConnectionFactory;
//# sourceMappingURL=default-db-connection-factory.js.map