import {con} from "../db/atlas.js";
import {limitGrt} from "../limit/config.js"
import { Router } from "express";

const appCita = Router();
let db = await con();
let Cita = db.collection("cita");

appCita.get("/",limitGrt(),async(req,res)=>{
    if(!req.rateLimit) return;
    let resul = await Cita.find().sort({cit_id:"1"}).toArray();
    res.send(resul);
    
});



export default appCita