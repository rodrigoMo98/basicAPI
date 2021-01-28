import { Request, Response } from "express";

export function get(req : Request, res:Response): Response{
    const fs = require('fs');
    let content2 = JSON.parse(fs.readFileSync( 'src/data/data.json', 'utf8'));
    return  res.json('Data list: '+JSON.stringify(content2));
}

export function add(req : Request, res:Response): Response{
    //reciebe json from request
    const newReq = req.body;
    //manage data.json
    const fs = require('fs');
    let content = JSON.parse(fs.readFileSync('src/data/data.json', 'utf8'));
    //add new data to json
    const returnedTarget = Object.assign(content, newReq);
    fs.writeFileSync('src/data/data.json', JSON.stringify(returnedTarget));
    return  res.json('Data added: '+JSON.stringify(returnedTarget));

}

export function del(req : Request, res:Response): Response {
    //reciebe json from request
    const newReq = req.body;
    const fs = require('fs');
    //manage data.json
    let content = JSON.parse(fs.readFileSync( 'src/data/data.json', 'utf8'));
    //delete data from json
    delete content[newReq.id];
    fs.writeFileSync('src/data/data.json', JSON.stringify(content));
    return  res.json('Data deleted: '+JSON.stringify(content));
}