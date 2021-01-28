import { Request, Response } from "express";

export function get(req : Request, res:Response): Response{
    const newReq = req.params;
    console.log('PARAM: '+newReq.id);
    const fs = require('fs');
    let content2 = JSON.parse(fs.readFileSync( 'src/data/data.json', 'utf8'));
    if(content2["Nombre " +newReq.id] == undefined)
        return  res.json('HOLA MUNDO!! No encontramos tu nombre :(');
    return  res.json('Hola '+content2["Nombre " +newReq.id]+'!!');
}

export function add(req : Request, res:Response): Response{
    //reciebe json from request
    const newReq = req.body;
    //manage data.json
    const fs = require('fs');
    let content = JSON.parse(fs.readFileSync('src/data/data.json', 'utf8'));
    //add new data to 
    content.cont++;
    content["Nombre " +content.cont]=newReq.nombre;
    fs.writeFileSync('src/data/data.json', JSON.stringify(content));
    return  res.json('Nombre agregado! Hola '+ content["Nombre " +content.cont]+'!!');
}

export function edit(req : Request, res:Response): Response{
    //reciebe json from request
    const newReq = req.body;
    //manage data.json
    const fs = require('fs');
    let content = JSON.parse(fs.readFileSync('src/data/data.json', 'utf8'));
    //add new data to 
    content["Nombre " +newReq.id]=newReq.nombre;
    fs.writeFileSync('src/data/data.json', JSON.stringify(content));
    return  res.json('Nombre editado! Hola de nuevo '+ content["Nombre " +newReq.id]+'!!');
}

export function del(req : Request, res:Response): Response {
    //reciebe json from request
    const newReq = req.body;
    const fs = require('fs');
    //manage data.json
    let content = JSON.parse(fs.readFileSync( 'src/data/data.json', 'utf8'));
    //delete data from json
    delete content["Nombre "+newReq.id];
    fs.writeFileSync('src/data/data.json', JSON.stringify(content));
    return  res.json('Data deleted: '+JSON.stringify(content));
}