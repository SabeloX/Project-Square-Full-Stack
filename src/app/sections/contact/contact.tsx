import { Shell } from "@/components/shell/Shell"
import styles from "./Contact.module.css";

/**
 * Contact functional component.
 * @returns {JSX.Element} The Contact component JSX.
 */
export const Contact = () => {
    return (
        <div className={`mt-6 py-5 ${styles.contact__container}`}>
            <Shell id="Contact" heading="Contact us" textColor="whiteText">
                <div className="my-3 is-flex is-flex-wrap-wrap	 is-justify-content-space-between">
                    <p className="whiteText title">Have a project in mind?<br />{"Let's make it happen"}</p>
                    <div>
                        <p className="whiteText">
                            22 Street Name, Suburb, 8000,<br/>
                            Cape Town, South Africa<br/>
                            {"+27 21 431 0001"}<br/>
                            {"enquirie@website.co.za"}
                        </p>
                    </div>
                </div>
                <div className="columns my-3">
                    <p className="column whiteText">
                        Terms of service<br/>
                        Privacy policy<br/>
                        Impressum 
                    </p>
                    <p className="column whiteText">
                        Facebook<br/>
                        Instagram<br/>
                        Twitter
                    </p>
                    <p className="column whiteText">
                        Github<br/>
                        Linkedin<br/>
                        Teams
                    </p>
                    <p className="column whiteText">
                        Youtube<br/>
                        Behance<br/>
                        Dribbble
                    </p>
                    <p className="column whiteText">
                        Explore open jobs<br/><br/>
                        {"©2000—2023 Company Name"}
                    </p>
                </div>
            </Shell>
        </div>
    )
}