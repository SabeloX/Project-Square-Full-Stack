"use client"
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useState } from "react";

/**
 * The Navbar component represents the navigation bar of the website.
 * @returns {JSX.Element} The Navbar component JSX.
 */
export const Navbar = () => {
    const [isActive, setIsActive] = useState<"" | "is-active">("");

    return (
        <nav className={`navbar ${styles.nav__background}`} role="navigation" aria-label="main navigation">
            <div className={`container ${styles.nav__background}`}>
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <a className="navbar-item" href="/">
                            <Image
                                src="/assets/logo.svg"
                                width={100}
                                height={30.77}
                                alt="Logo"
                                loading="lazy"
                            />
                        </a>
                    </div>
                    <a
                        role="button"
                        className={`${styles.nav__burgerMenu__color} navbar-burger ${isActive}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarMenu"
                        data-action="collapse"
                        onClick={() => setIsActive(isActive => isActive === "" ? "is-active" : "")}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarMenu" className={`is-collapsible is-shadowless container ${styles.nav__background} ${isActive} navbar-menu is-justify-content-center`}>
                    <div className={`columns p-5`}>
                        {
                            ["Services","Industries", "Cases", "Contact"].map((item, index) => (
                                <a href={`#${item}`} className={`column is-flex is-align-items-center navbar-item ${styles.nav__text}`} key={index + item}>
                                    { item }
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className={`navbar-end ${isActive === "" && "is-hidden-touch"}`}>
                    <div className="navbar-item">
                        <a className={`button is-rounded`}>
                            <strong className={styles.nav__button__font}>{"Let's Talk"}</strong>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}