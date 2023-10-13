import Image from "next/image";
import styles from "./Hero.module.css";

/**
 * The Hero component displays a hero section with an image and content.
 * @returns {JSX.Element} The Hero component JSX.
 */
export const Hero = () => {
    return (
        <>
            <Image
                fill
                alt="background hero"
                src="/assets/hero.png"
                sizes="100vw"
                quality={100}
                loading="lazy"
                className={styles.hero__image}
            />
            <section className={`container ${styles.hero__container} is-fullheight-with-navbar hero`}>
                <div className={`hero-body p-5`}>
                    <div className={`${styles.hero__content} is-flex is-flex-direction-column`}>
                        <p className={`${styles.hero__text} is-size-1 title`}>Live with Confidence</p>
                        <p className={`${styles.hero__text} subtitle`}>José Mourinho brings confidence to pan-African Sanlam campaign.</p>
                        <button className={`is-borderless is-rounded button ${styles.hero__button}`}>View Project</button>
                    </div>
                </div>
            </section>
        </>
    )
}