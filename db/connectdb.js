import mongoose from "mongoose";

const connectDB = async(DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "books-management",
        };
        await mongoose.connect(DATABASE_URL, DB_OPTIONS, {
            useNewUrlParser: true
        });
        console.log("MongoDb is connected successfully...");

    } catch (err) {
        console.log(err.message);
    }
};

export default connectDB;