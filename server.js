import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
const app = express();
import {dbConnect} from "./dbConnect/dbConnect.js";
import cors from 'cors'
import {routers} from'./routes/routes.js'

// *********************************************************************************************************
dotenv.config(); // to include the funtionality of the of the dotenv\
app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use(express.json());
app.use(routers);


// *****************************************************************************************************************




app.listen(5000,()=>{
    console.log('server is running');
    dbConnect();
})
 