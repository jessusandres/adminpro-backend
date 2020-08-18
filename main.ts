import express, {Express, Request, Response} from "express";
import colors from "colors";
import {dbConnection} from "./src/database/config";
import * as dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

const app: Express = express();
//CORS
app.use(cors());

// DATABASE
dbConnection();

// adminprouser0
// livklixqr18

app.get('/', (req: Request, res: Response)=> {

    res.json({
        ok: true,
        message: 'Hola :D'
    })

});


app.listen(process.env.PORT, ()=> {
    console.log(colors.cyan(`APP BACKEND ON PORT ${process.env.PORT}`));
});
