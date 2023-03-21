import mongoose from "mongoose";

export const connectDb = async () => {

    const db = process.env.MONGO_URL;

    // console.log(db);

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}