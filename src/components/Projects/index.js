import React, {useState, useEffect} from 'react'
import About from '../About'
import data from '../../data.json'
import "./Projects.css"
import Tilt from 'react-parallax-tilt'

const Project = ()=>{

    const [projectName, setProjectName] = useState([])

    useEffect(()=>{
        async function getProjects(){
            const projects = data
            setProjectName(projects)
        }
        getProjects()
    }, [])

    const projects = projectName.map(item=>{
        return (
            <Tilt className="parallax-effect" tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={500}>
                <div className="proj_div" key={item.id}>
                    <div className="project_hover"></div>
                        <div className="project_img">
                            <img className="proj_item__img" src={item.image} alt={item.work} />
                        </div>
                        <div className="proj_info">
                            <h2>{item.title}</h2>
                            <p>{item.work}</p>
                        </div>
                </div>
            </Tilt>
        )
    })

    return (
        <div className="project_div">
            <About
            heading="What we do"
            message="We help customers to deliver the best possible user experience on any platform.
            But after years in the industry, we also decided to build products on our own."
            button="OUR PROJECTS" 
            />
            <div className="project_cards">
                {projects}
            </div>
        </div>
    )
}

export default Project