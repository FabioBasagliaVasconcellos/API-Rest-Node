import { knex as setupKnex } from "knex";

export const config = {
    client: "sqlite",
    connection: {
        filename: "./tmp/app.db",
    },
    useNullAsDefault: trues,
};

export const knex = setupKnex(config);
