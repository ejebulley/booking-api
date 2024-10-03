import express from "express";
import { bookingRouter } from "./routes/all-route.js";
import mongoose from "mongoose";
import "dotenv/config"
import cors from "cors";
// create an app
 const bookingApp = express();

//  use route
bookingApp.use(cors());
bookingApp.use(express.json())
bookingApp.use(bookingRouter);


// connect database

await mongoose.connect(process.env.MONGO_URI);


// listen on port
bookingApp.listen( 3002, function(){
    console.log("My booking app is listening on port 3002");

});