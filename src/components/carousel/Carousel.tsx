"use client"
import { CaseStudy } from "@/utils/case_studies";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react"
import styles from "./Carousel.module.css";

export interface CarouselProps {
    data: CaseStudy[];
}

export const Carousel = ({ data }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<any>(null);

    const nextSlide = useCallback(() => {
        currentIndex === 0 ?
            setCurrentIndex(data.length - 1) :
            setCurrentIndex(currentIndex => currentIndex - 1)
    }, [currentIndex])

    useEffect(() => {
        console.log(data)
        if (sliderRef.current) clearTimeout(sliderRef.current)
        sliderRef.current = setTimeout(() => {
            nextSlide();
        }, 1000)

        return () => clearTimeout(sliderRef.current)
    })
    return (
        <div className={`columns ${styles.carousel__container}`}>
            {
                data.map((_, index) => {
                    const indexModified = currentIndex - index <= 0 ?
                        data.length - 1 - index : currentIndex - index - 1
                    return (
                        <div
                            className={`column mb-3 card is-flex is-align-items-end ${styles.carousel__cardContainer}`}
                            style={{
                                backgroundImage: `url(${data[indexModified].imageUrl})`
                            }}
                            key={index}
                        >
                            <div className="card-content">
                                <p className={`title whiteText`}>{data[indexModified].title}</p>
                                <p className={`content whiteText`}>{data[indexModified].description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

interface CarouselItemProps {
    items: CaseStudy[];
    index: number;
}

const CarouselItem = ({ items, index }: CarouselItemProps) => {
    const [currentIndex, setCurrentIndex] = useState(index);
    const [item, setItem] = useState<CaseStudy>(items[index]);
    useEffect(() => {
        setInterval(() => {
            if (currentIndex === items.length - 1) {
                setCurrentIndex(() => {
                    setItem(items[0]);
                    return 0;
                })
            }
            else {
                setCurrentIndex(currentIndex => {
                    setItem(items[currentIndex + 1]);
                    return currentIndex + 1;
                })
            }
        }, 3000);
    },[])
    return (
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
    )
}