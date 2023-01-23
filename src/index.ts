import express, { Application } from "express";
const port = 4040
import appConfig from "./app";
import dbConnect from "../config/db";

const app: Application = express();

appConfig(app)
dbConnect()


app.listen(port, () => {
    console.log(`server listening on port: ${port}`)
})