import { getBrands } from "@/lib/database/brands";

/**
 * Handler for processing a POST request to retrieve brands based on categories.
 *
 * @param {Request} request - The incoming POST request.
 * @returns {Promise<Response>} A promise that resolves to the response containing brands.
 * @throws {Error} Throws an error if there's an internal server error.
 */
export const POST = async (request: Request) => {
    try {
        const { categories } = await request.json();
        const brands = await getBrands(categories);
        return new Response(JSON.stringify({ brands: brands.brands }))
    }
    catch (error) {
        throw new Error("Internal server error.");
    }
}