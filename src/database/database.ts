import pgPromise, { IDatabase, IMain } from "pg-promise";

import { config } from "../config";

export const pgp: IMain = pgPromise();

export const database: IDatabase<unknown> = pgp(config.database);
