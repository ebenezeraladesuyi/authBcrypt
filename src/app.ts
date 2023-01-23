import express, { Application } from "express";
import cors from "cors"
import morgan from "morgan"
import router from "../router/user.router";

const appConfig = (app: Application) => {
    
    // middlewares
    app.use(express.json()).use(cors()).use(morgan("dev"))

    // routes
    app.use("api/auth", router)

};

export default appConfig