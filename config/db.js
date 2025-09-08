const mongoose=require('mongoose');

//function to connect to mongoDB
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL); 
        console.log(`MongoDB connected ${mongoose.connection.host}`.bgGreen);
    } catch (error) {
        console.log("error in DB connection",error);
    }
};

module.exports={connectDB};