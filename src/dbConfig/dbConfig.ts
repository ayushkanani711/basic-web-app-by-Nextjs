import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on('connected', ()=> {
        console.log("MongoDB connected successfully");
    })
    connection.on('error', (err)=>{
      console.log(err);
      process.exit();
    })
  } catch (error) {
    console.log('somthing wwent wrong!');
    console.log(error);
    
  }
}
