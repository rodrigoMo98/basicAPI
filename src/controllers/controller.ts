import { Request, Response } from "express";
import * as data from '../data/data.json';

export async function get(req : Request, res:Response): Promise<Response<any, Record<string, any>>>{
    const fs = require('fs');
    let content2 = JSON.parse(fs.readFileSync( 'src/data/data.json', 'utf8'));
    return  res.json('Data list: '+JSON.stringify(content2));
}

export async function add(req : Request, res:Response) {
    //reciebe json from request
    const newReq = req.body;
    //manage data.json
    const fs = require('fs');
    let content = JSON.parse(fs.readFileSync( 'src/data/data.json', 'utf8'));
    //add new data to json
    const returnedTarget = Object.assign(content, newReq);
    await fs.writeFileSync('src/data/data.json', JSON.stringify(returnedTarget));
    //read data.json and response
    let content2 = JSON.parse(fs.readFileSync( 'src/data/data.json', 'utf8'));
    return  res.json('Data added: '+JSON.stringify(content2));

}

export async function del(req : Request, res:Response) {
    //reciebe json from request
    const newReq = req.body;
    const fs = require('fs');
    //manage data.json
    let content = JSON.parse(fs.readFileSync( 'src/data/data.json', 'utf8'));
    //delete data from json
    delete content[newReq.id];
    await fs.writeFileSync('src/data/data.json', JSON.stringify(content));
    //read data.json and response
    let content2 = JSON.parse(fs.readFileSync( 'src/data/data.json', 'utf8'));
    return  res.json('Data deleted: '+JSON.stringify(content2));
}