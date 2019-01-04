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
const sql1 = `
    create table s_class
    (
        id varchar(48) primary key,
        name varchar(48) not null
    );
    `;
const sql2 = `
    create table s_user
    (
        id varchar(48) primary key,
        name varchar(48) not null,
        qualification varchar(48) not null,
        isActive int not null,
        isAdmin int not null,
        userName varchar(48) not null,
        password varchar(48) not null,
        classInCharge varchar(48) not null
    );
    `;
const sql3 = `
    create table s_subject
    (
        id varchar(48) primary key,
        name varchar(48) not null 
    );
    `;
const sql4 = `
    create table s_qualification(
        id varchar(48) primary key,
        name varchar(48) not null 
    );
    `;
const sql5 = `insert into s_class 
    (id,name) 
    values(?, ?);`;
const params = [1, "X A"];
db.executeCommand(sql)
    .then(() => {
    console.log("DB created!!");
})
    .catch((e) => {
    console.log("DB creation failed!!", e);
});
const db1 = new n_data_1.KnexPgDb(new default_db_connection_factory_1.DefaultDbConnectionFactory());
db1.executeCommand(sql1)
    .then(() => {
    console.log("s_class created!!");
})
    .catch((e) => {
    console.log("s_class failed!!", e);
});
const db2 = new n_data_1.KnexPgDb(new default_db_connection_factory_1.DefaultDbConnectionFactory());
db2.executeCommand(sql2)
    .then(() => {
    console.log("s_user created!!");
})
    .catch((e) => {
    console.log("s_user creation failed!!", e);
});
const db3 = new n_data_1.KnexPgDb(new default_db_connection_factory_1.DefaultDbConnectionFactory());
db3.executeCommand(sql3)
    .then(() => {
    console.log("sub created!!");
})
    .catch((e) => {
    console.log("sub creation failed!!", e);
});
const db4 = new n_data_1.KnexPgDb(new default_db_connection_factory_1.DefaultDbConnectionFactory());
db4.executeCommand(sql4)
    .then(() => {
    console.log("quali created!!");
})
    .catch((e) => {
    console.log("quali creation failed!!", e);
});
db.executeCommand(sql5, ...params)
    .then(() => {
    console.log("insert created!!");
})
    .catch((e) => {
    console.log("insert creation failed!!", e);
    process.exit(1);
});
//# sourceMappingURL=db-script.js.map