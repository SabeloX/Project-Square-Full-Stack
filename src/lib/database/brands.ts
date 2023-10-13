import { Collection, Db } from "mongodb";
import clientPromise from "./connect";

let client;
let db: Db | undefined;
let brands: Collection;

const init = async () => {
    if (db) return;
    try {
        client = await clientPromise;
        db = await client.db();
        brands = db.collection('brands');
    }
    catch (error: any) {
        throw new Error('Database connection failed.');
    }
}

export const getBrands = async () => {
    try {
        if (!brands) await init();
        const results = await brands.find({}).map(item => ({ ...item, _id: item._id.toString() })).toArray();
        return { brands: results }
    }
    catch (error) {
        return { error, message: "Failed to fetch brands." }
    }
}