import mongoose from "mongoose";

const DB = "mongodb://localhost/authClass2"

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(DB);
        console.log(`database don connect to ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

export default dbConnect