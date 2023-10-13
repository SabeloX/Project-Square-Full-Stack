import { Brand } from "@/app/sections/industries/Industries";

export const fetchBrands = async () => {
    try {
        const results = await fetch("http://localhost:3000/brands");
        const data = await results.json();
        return data.brands as Brand[];
    }
    catch (error: any) {
        throw new Error(error.message)
    }
}