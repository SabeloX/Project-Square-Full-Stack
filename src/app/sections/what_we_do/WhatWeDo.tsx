import { Shell } from "@/components/shell/Shell"
import Image from "next/image"

/**
 * Represents the type for services data.
 * @property {string} title - The title of the service.
 * @property {string} content - The content or description of the service.
 * @property {string} icon - The filename of the service's icon.
 */
type ServicesType = {
    title: string;
    content: string;
    icon: string;
}

/**
 * An array containing information about various services.
 * @type {ServicesType[]}
 */
const servicesData: ServicesType[] = [
    {
        title: "Web development",
        content: "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.",
        icon: "Web Dev Icon.svg"
    },
    {
        title: "User experience & design",
        content: "Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.",
        icon: "UX Icon.svg"
    },
    {
        title: "Mobile app development",
        content: "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.",
        icon: "App Dev Icon.svg"
    },
    {
        title: "Mobile app development",
        content: "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.",
        icon: "Blockchain Icon.svg"
    }
]

/**
 * The component representing "What We Do" section.
 * @returns {JSX.Element} The "What We Do" component JSX.
 */
export const WhatWeDo = () => {
    return (
        <Shell heading="What we do">
            <p className={`title blackText`}>
                We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces
            </p>
            <div className="columns is-8">
                {
                    servicesData.map((item, index) => (
                        <div key={index + item.title} className="column">
                            <Image src={`/assets/icons/${item.icon}`} width={64} height={64} alt={item.title} />
                            <p className="is-size-4 subtitle has-text-weight-semibold blackText">{item.title}</p>
                            <p className="blackText">{ item.content }</p>
                        </div>
                    ))
                }
            </div>
        </Shell>
    )
}