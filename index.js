import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 7000;

const app = express();

const DB_URL=`mongodb+srv://sano:1234@cluster1.dxexv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

app.use(express.json())
app.use('/api', router)


async function startApp(){
    try{
        await mongoose.connect(DB_URL)
        app.listen(PORT, ()=>console.log("Server working on port " + PORT))
    }catch(e){
        console.log(e);
    }
}
startApp()
