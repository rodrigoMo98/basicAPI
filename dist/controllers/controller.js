"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.add = exports.get = void 0;
function get(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const fs = require('fs');
        let content2 = JSON.parse(fs.readFileSync('src/data/data.json', 'utf8'));
        return res.json('Data list: ' + JSON.stringify(content2));
    });
}
exports.get = get;
function add(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //reciebe json from request
        const newReq = req.body;
        //manage data.json
        const fs = require('fs');
        let content = JSON.parse(fs.readFileSync('src/data/data.json', 'utf8'));
        //add new data to json
        const returnedTarget = Object.assign(content, newReq);
        yield fs.writeFileSync('src/data/data.json ', JSON.stringify(returnedTarget));
        //read data.json and response
        let content2 = JSON.parse(fs.readFileSync('src/data/data.json', 'utf8'));
        return res.json('Data added: ' + JSON.stringify(content2));
    });
}
exports.add = add;
function del(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //reciebe json from request
        const newReq = req.body;
        const fs = require('fs');
        //manage data.json
        let content = JSON.parse(fs.readFileSync('src/data/data.json', 'utf8'));
        //delete data from json
        delete content[newReq.id];
        yield fs.writeFileSync('src/data/data.json', JSON.stringify(content));
        //read data.json and response
        let content2 = JSON.parse(fs.readFileSync('src/data/data.json', 'utf8'));
        return res.json('Data deleted: ' + JSON.stringify(content2));
    });
}
exports.del = del;
