"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/controller");
const router = express_1.Router();
router.route('/')
    .post(controller_1.add)
    .get(controller_1.get)
    .delete(controller_1.del);
exports.default = router;
