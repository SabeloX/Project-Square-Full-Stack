import { Collection, Db } from "mongodb";
import clientPromise from "./connect";

let client;
let db: Db | undefined;
let brands: Collection;

/**
 * Initializes the database connection and sets up the 'brands' collection.
 * @throws {Error} Throws an error if the database connection fails.
 */
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

/**
 * Retrieves brands based on specified categories.
 * @param {string[]} categories - An array of category names to filter brands.
 * @returns {Promise<{ brands: object[] }>} A promise that resolves to an object containing the brands.
 */
export const getBrands = async (categories: string[]) => {
    try {
        if (!brands) await init();
        const results = await brands
            .find(categories.length === 0 ? {} : { category: { $in: categories} })
            .map(item => ({ ...item, _id: item._id.toString() }))
            .toArray();
        return { brands: results }
    }
    catch (error) {
        return { error, message: "Failed to fetch brands." }
    }
}