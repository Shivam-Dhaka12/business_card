import React from "react"
import Intro from "./components/Intro.js"
import About from "./components/About"
import Interest from "./components/Interest"
import Footer from "./components/Footer"
import "./css/app.css"

export default function App()
{
    return(
        <div className="app">
            <Intro/>
            <About/>
            <Interest/>
            <Footer />
        </div>
    )
}