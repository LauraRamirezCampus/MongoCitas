import {con} from "../db/atlas.js";
import {limitGrt} from "../limit/config.js"
import { Router } from "express";

const appUsuario = Router();
let db = await con();
let Usuario = db.collection("usuario");

appUsuario.get("/",limitGrt(),async(req,res)=>{
    if(!req.rateLimit) return;
    let resul = await Usuario.find().sort({usu_nombre:"1"}).toArray();
    res.send(resul);
    
});

export default appUsuario