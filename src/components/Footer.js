import React from "react"
import { ReactComponent as MytwitterSVG } from "../img/twitter-icon.svg"
import { ReactComponent as MyfacebookSVG } from "../img/facebook-icon.svg"
import { ReactComponent as MyinstaSVG } from "../img/instagram-icon.svg"
import { ReactComponent as MygithubSVG } from "../img/github-icon.svg"
import "../css/footer.css"

export default function Footer()
{
    return (
        <div className="footer">
            <a href="https://github.com/Shivam-Dhaka12"><MygithubSVG className="github-svg footer-item" /></a>
            <a href="https://www.instagram.com/shivam__dhaka__/"><MyinstaSVG className="insta-svg footer-item" /></a>
            <a href="https://twitter.com/shivamdhaka12"><MytwitterSVG className="twitter-svg footer-item" /></a>
            <a href="https://www.facebook.com/shivam.dhaka.77"><MyfacebookSVG className="facebook-svg footer-item" /></a>
        </div>
    )
}


