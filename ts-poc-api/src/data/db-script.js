"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n_data_1 = require("@nivinjoseph/n-data");
const default_db_connection_factory_1 = require("./factories/default-db-connection-factory");
const db = new n_data_1.KnexPgDb(new default_db_connection_factory_1.DefaultDbConnectionFactory());
const sql = `
    create table todos
    (
        id varchar (48) primary key,
        version int not null,
        created_at bigint not null,
        updated_at bigint not null,
        data jsonb not null
    );
`;
db.executeCommand(sql)
    .then(() => {
    console.log("DB created!!");
    process.exit(0);
})
    .catch((e) => {
    console.log("DB creation failed!!", e);
    process.exit(1);
});
//# sourceMappingURL=db-script.js.map