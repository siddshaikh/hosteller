import mongoose from "mongoose";

const MONGO_URI = process.env.NEXT_PUBLIC_MONGO_URI;

if (!MONGO_URI) {
  throw new Error("No mongo URI found.");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function dataBaseConnection() {
  // If already connected, return the cached connection
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    // Create a new connection if there is no promise
    cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
      console.log("Connected to MongoDB.");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
