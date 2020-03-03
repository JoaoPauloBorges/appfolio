import React from "react"

import "./Projects.css";
import ocean from "../../assets/oceanlite.mp4";


const Projects: React.FC = () => {

    return (
    <section >
        <div className="bannervid">
            <video autoPlay muted loop>
                <source src={ocean} type="video/mp4" />
            </video>
            <h2>Projects</h2>
        </div>
        <div style={{maxWidth: "90%", margin: "0 auto"}}>
            <div className="card">.</div>
        </div>
    </section>
    );
}

export default Projects;