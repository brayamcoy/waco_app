import mongoose from "mongoose";

// database configuration

const dbConnection = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("Database online");
  } catch (error) {
    console.log(error);
    throw new Error("Error intializing database");
  }
};

export default dbConnection;
