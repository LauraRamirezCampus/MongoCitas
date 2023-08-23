import {con} from "../db/atlas.js";
import {limitGrt} from "../limit/config.js"
import { Router } from "express";

const appMedico = Router();
let db = await con();
let Medico = db.collection("medico");

appMedico.get("/",limitGrt(),async(req,res)=>{
    if(!req.rateLimit) return;
    let resul = await Medico.find({med_especialidad:"psicologia"}).toArray();
    res.send(resul);
    
});

export default appMedico