"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.edit = exports.add = exports.get = void 0;
function get(req, res) {
    //recibe params and read data.json file
    var newReq = req.params;
    var fs = require('fs');
    var content2 = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    var vari = newReq.id;
    //decide wich message return
    if (vari == '-1')
        return res.json(content2);
    if (content2[vari] == undefined)
        return res.json('HOLA MUNDO!! No encontramos tu nombre :(');
    return res.json('Hola ' + content2[newReq.id] + '!!');
}
exports.get = get;
function add(req, res) {
    //reciebe json from request
    var newReq = req.body;
    //manage data.json
    var fs = require('fs');
    var content = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    //add new data to json
    content.cont++;
    content[content.cont] = newReq.nombre;
    fs.writeFileSync('data.json', JSON.stringify(content));
    return res.json('Nombre agregado! Hola ' + content[content.cont] + '!! Tu id es: ' + content.cont);
}
exports.add = add;
function edit(req, res) {
    //reciebe json from request
    var reqParam = req.params;
    var vari = reqParam.id;
    var newReq = req.body;
    //manage data.json
    var fs = require('fs');
    var content = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    //edit new data
    content[vari] = newReq.nombre;
    fs.writeFileSync('data.json', JSON.stringify(content));
    return res.json('Nombre editado! Hola de nuevo ' + content[vari] + '!!');
}
exports.edit = edit;
function del(req, res) {
    //reciebe json from request
    var newReq = req.params.id;
    var fs = require('fs');
    //manage data.json
    var content = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    //delete data from json
    delete content[newReq];
    fs.writeFileSync('data.json', JSON.stringify(content));
    return res.json('Nombre eliminado, adios :(');
}
exports.del = del;
