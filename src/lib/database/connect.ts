import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URL;

if (!uri) throw new Error("Database not found!");

let client = new MongoClient(uri);
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV !== "production") {
    if (!global._mongoClientPromise) global._mongoClientPromise = client.connect(); // use a connection that exists
    clientPromise = global._mongoClientPromise;
}
else clientPromise = client.connect();

export default clientPromise;