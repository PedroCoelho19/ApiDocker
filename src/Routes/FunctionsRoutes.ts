import express from "express";
import FunctionsControllers from "../controllers/FunctionsControllers";

const router = express.Router()

router.post('/senEmail', FunctionsControllers.sendEmail)

export  {router};