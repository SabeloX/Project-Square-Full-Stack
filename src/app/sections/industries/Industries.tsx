import { Shell } from "@/components/shell/Shell"
import Image from "next/image"
import styles from "./Industries.module.css";
import { fetchBrands } from "@/lib/utils/get_brands";

export type Brand = {
    name: string;
    category: string;
    _id: string;
}


/**
 * A React component that displays a list of trusted brands in separate columns.
 * @returns {JSX.Element} The Industries component JSX.
 */
export const Industries = async () => {
    const brands = await fetchBrands();
    console.log(brands);
    return (
        <Shell id="Industries" heading="You’ll be in good company">
            <p className="blackText title">Trusted by leading brands</p>
            <div className="columns mt-5">
                {
                    brands.filter((_, index) => index < 5).map((item, index) => (
                        <div className={`column is-flex is-justify-content-center ${styles.industries__item}`} key={item._id}>
                            <Image className="image" src={`/assets/brands/${item.name}.svg`} width={130} height={40} alt={item.name} />
                        </div>
                    ))
                }
            </div>
            <div className="columns mt-5">
                {
                    brands.filter((_, index) => index >= 5 && index < 10).map((item, index) => (
                        <div className={`column is-flex is-justify-content-center ${styles.industries__item}`} key={item._id}>
                            <Image className="image" src={`/assets/brands/${item.name}.svg`} width={130} height={40} alt={item.name} />
                        </div>
                    ))
                }
            </div>
            <div className="columns mt-5">
                {
                    brands.filter((_, index) => index >= 10).map((item, index) => (
                        <div className={`column is-flex is-justify-content-center ${styles.industries__item}`} key={item._id}>
                            <Image className="image" src={`/assets/brands/${item.name}.svg`} width={130} height={40} alt={item.name} />
                        </div>
                    ))
                }
            </div>
        </Shell>
    )
}