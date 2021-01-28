import { Router } from "express";
import {add, get, del} from "../controllers/controller";

const router = Router();

router.route('/')
    .post(add)
    .get(get)
    .delete(del);

export default router;