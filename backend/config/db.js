import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://ravindrayegiti751:Ravi751@cluster0.3gjkj.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}