import { Brand } from "@/app/sections/industries/Industries";

const baseURL = process.env.BASE_URL || "http://localhost:3000";

/**
 * Fetches brands data based on specified categories via a POST request.
 * @returns {Promise<Brand[]>} A promise that resolves to an array of Brand objects.
 * @throws {Error} Throws an error if there is a network error or if the response is not in the expected format.
 */
export const fetchBrands = async () => {
    try {
        // add categories to filter by inside the categories array
        const results = await fetch(`${baseURL}/brands`, { method: "POST", body: JSON.stringify({ categories: []})});
        const data = await results.json();
        return data.brands as Brand[];
    }
    catch (error: any) {
        throw new Error(error.message)
    }
}