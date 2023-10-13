import { Shell } from "@/components/shell/Shell"
import Image from "next/image"
import styles from "./Industries.module.css";

const brands = ["visa", "tyme-bank", "distell", "spotify", "microsoft", "engen", "nike", "wesgrow", "multichoice", "pnp", "liquid", "tfg", "sanlam", "santam", "bbc"]

/**
 * A React component that displays a list of trusted brands in separate columns.
 * @returns {JSX.Element} The Industries component JSX.
 */
export const Industries = () => {
    return (
        <Shell id="Industries" heading="You’ll be in good company">
            <p className="blackText title">Trusted by leading brands</p>
            <div className="columns mt-5">
                {
                    brands.filter((_, index) => index < 5).map((item, index) => (
                        <div className={`column is-flex is-justify-content-center ${styles.industries__item}`} key={index}>
                            <Image className="image" src={`/assets/brands/${item}.svg`} width={130} height={40} alt={item} />
                        </div>
                    ))
                }
            </div>
            <div className="columns mt-5">
                {
                    brands.filter((_, index) => index >= 5 && index < 10).map((item, index) => (
                        <div className={`column is-flex is-justify-content-center ${styles.industries__item}`} key={index}>
                            <Image className="image" src={`/assets/brands/${item}.svg`} width={130} height={40} alt={item} />
                        </div>
                    ))
                }
            </div>
            <div className="columns mt-5">
                {
                    brands.filter((_, index) => index >= 10).map((item, index) => (
                        <div className={`column is-flex is-justify-content-center ${styles.industries__item}`} key={index}>
                            <Image className="image" src={`/assets/brands/${item}.svg`} width={130} height={40} alt={item} />
                        </div>
                    ))
                }
            </div>
        </Shell>
    )
}