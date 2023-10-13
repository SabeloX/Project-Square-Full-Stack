import Image from "next/image";
import { ReactNode } from "react";
import styles from "./Shell.module.css"

export interface ShellProps {
    heading: string;
    children: ReactNode;
    id: string;
    className?: string;
    textColor?: "whiteText" | "blackText";
}

/**
 * The Shell component represents a container with a heading and content.
 * @param {ShellProps} props - The properties of the Shell component.
 * @param {string} props.heading - The heading or title for the shell.
 * @param {ReactNode} props.children - The content to be displayed within the shell.
 * @param {string} props.id - The id of the section.
 * @param {string} [props.className] - Additional CSS class name for customization.
 * @param {("whiteText" | "blackText")} [props.textColor] - The text color for the heading.
 * @returns {JSX.Element} The Shell component JSX.
 */
export const Shell = ({ heading, children, className, textColor = "blackText", id }: ShellProps) => {
    return (
        <div id={id} className={`container mt-6 ${styles.shell__container} is-flex is-flex-direction-column ${className}`}>
            <div className={`is-flex ${styles.shell__headingContainer}`}>
                <Image
                    src="/assets/icons/minus.svg"
                    width={40}
                    height={2}
                    alt="minus icon"
                />
                <p className={textColor}>{heading}</p>
            </div>
            { children }
        </div>
    )
}