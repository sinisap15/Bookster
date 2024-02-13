import bodyParser from "body-parser";
import express from "express";
import { config } from "./config";

(async () => {
    const app = express()
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({ extended: true }));

    app.listen(config.port, config.host, () => {
        console.info(`Internal Server listening on ${config.host}:${config.port}`);
    });

})().catch((error) => {
    console.error("Initialization error", error);
    process.exit(1);
});
