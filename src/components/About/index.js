import React from 'react'
import './About.css'

const About = ({heading, message, button})=>{
    return (
        <div className="project">
            <section className="project_info__section">
                <div className="project_info">
                    <div className="project_info__text">
                        <h2 className="project_h2">{heading}</h2>
                        <p className="project_p">{message}</p>
                    </div>
                    <div className="project_info__button">
                        <button className="project_button">{button}</button>
                    </div>
                </div>
            </section>
            
        </div>
        
    )
}

export default About