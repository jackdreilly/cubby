import {
    Database,
    DataTypes,
    Model,
    PostgresConnector
} from "https://deno.land/x/denodb@v1.4.0/mod.ts";

const connection = new PostgresConnector({
    host: Deno.env.get("DB_HOST") || "localhost",
    username: Deno.env.get("DB_USERNAME") || "postgres",
    password: Deno.env.get("DB_PASSWORD") || "postgres",
    database: Deno.env.get("DB_NAME") || "postgres",
});

export class Cubby extends Model {
    static table = 'cubbies';
    static timestamps = true;

    static fields = {
        cubby_hole: { primaryKey: true, type: DataTypes.STRING },
        stuff: DataTypes.JSON,
    };
}

export const db = new Database(connection);
db.link([Cubby]);
// await db.sync({ drop: true });