"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = require("../controllers/controller");
var router = express_1.Router();
router.route('/:id')
    .post(controller_1.add)
    .delete(controller_1.del)
    .put(controller_1.edit)
    .get(controller_1.get);
exports.default = router;
