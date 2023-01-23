import { Router } from "express";
import { getAllUsers, login, register } from "../controller/user.controller";


const router = Router()

router.route("/register").post(register);
router.route("/login").get(login)
router.route("/getall").get(getAllUsers)

export default router