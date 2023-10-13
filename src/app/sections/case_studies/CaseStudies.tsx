"use client"
import { Shell } from "@/components/shell/Shell"
import styles from "./CaseStudies.module.css";
import { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { MantineProvider } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";

export type CaseStudy = {
    title: string;
    description: string;
    imageUrl: string;
}

const data: CaseStudy[] = [
    {
        title: "The Olympian",
        description: "The only athlete in the world to do her Olympic routine in 2020.",
        imageUrl: "/assets/case_studies/olympian.png"
    },
    {
        title: "The Savings Jar",
        description: "Grow your savings treasure and grow your dragon.",
        imageUrl: "/assets/case_studies/savings.png"
    },
    {
        title: "Skhokho seMali",
        description: "Helping South Africans become #CashCleva with Skhokho and TymeBank.",
        imageUrl: "/assets/case_studies/skhokho.png"
    }
]

/**
 * Renders a carousel of case studies.
 *
 * @param {CaseStudiesProps} props - The component's props.
 * @returns {JSX.Element} The rendered component.
 */
export const CaseStudies = () => {
    const autoplay = useRef<any>(Autoplay({ delay: 2500 }));
    return(
        <Shell id="Cases" heading="Case studies">
            <MantineProvider>
            {
                data &&
                    <div style={{ width: "100%"}} className="carousel" id="carousel-container">
                        <Carousel
                            slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
                            slideGap={{ base: 0, sm: 'md' }}
                            loop
                            draggable={false}
                            withControls={false}
                            maw={360}
                            align="start"
                            onMouseEnter={autoplay.current.stop}
                            onMouseLeave={autoplay.current.reset}
                            plugins={[autoplay.current]}
                        >
                            {
                                data.map((item, index) => (
                                    <Carousel.Slide
                                        key={index}
                                        className="column"
                                    >
                                        <div
                                            className={`column mb-3 card is-flex is-align-items-end ${styles.carousel__cardContainer}`}
                                            style={{
                                                backgroundImage: `url(${item.imageUrl})`
                                            }}
                                        >
                                            <div className="card-content">
                                                <p className={`title whiteText`}>{item.title}</p>
                                                <p className={`content whiteText`}>{item.description}</p>
                                            </div>
                                        </div>
                                    </Carousel.Slide>
                                ))
                            }
                        </Carousel>
                    </div>
                }
                </MantineProvider>
        </Shell>
    )
}