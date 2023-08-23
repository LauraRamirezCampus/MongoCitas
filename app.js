import dotenv from "dotenv";
import express from "express";
import appUsuario from "./routers/pacientes.js";
import appCita from "./routers/citas.js";
import appMedico from "./routers/medico.js";


dotenv.config();
let app = express();

app.use(express.json());

let config = JSON.parse(process.env.MY_SERVER);

app.use("/Usuario",appUsuario);
app.use("/Cita",appCita);
app.use("/Medico",appMedico);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});