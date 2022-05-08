import React from "react"
import profile from "../img/Profile photo.jpg"
import "../css/intro.css"
import {ReactComponent as Mylinkedinsvg} from "../img/linkedin-icon.svg"
import {ReactComponent as Myemailsvg} from "../img/email-icon.svg"

export default function Intro()
{
    return (
        <div className="intro">
            <img className = "profile" src = {profile} alt="Profile"/>
            <h1>Shivam Dhaka</h1>
            <h3>Software Developer</h3>
            {/* <p className="link"><a href="#">My website</a></p> */}
            <div className="btn">
                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=shivamdhaka1200@gmail.com"><button className="email btn-items"><Myemailsvg className="email-icon"/>Email</button></a>
                <a href="https://www.linkedin.com/in/shivam-dhaka-928817178/"><button className="linkedin btn-items"><Mylinkedinsvg className="linkedin-icon"/>Linkedin</button></a>
            </div>
        </div>
    )
}