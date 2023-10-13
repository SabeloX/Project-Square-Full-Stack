import { getBrands } from "@/lib/database/brands";

export const GET = async (request: Request) => {
    try {
        const brands = await getBrands();
        console.log(brands.brands)
        // if (!brands.brands) throw new Error("");
        // return new Response(brands.brands);
        return new Response(JSON.stringify({ brands: brands.brands }))
    }
    catch (error) {
        throw new Error("Internal server error.");
    }
}