import React from "react"
import IconButton from '@material-ui/core/IconButton';

import JProfile from "../../assets/jp.jpeg";
import "./Cv.css";

const Cv = () => {
    return (
        <section className="container">
            <div className="content">
                <section className="header">
                    <img className="card-avatar" alt="foto-perfil" src={JProfile} />
                    <div>
                        <h2>João Paulo Borges</h2>
                        <p>Software Developer</p>
                    </div>
                </section>
                <section className="body">
                    <div className="about">
                        <div>
                            <h4>Sobre</h4>
                            <p>Undergraduate student in Computer Science from the Pontifícia Universidade Católica de Goiás.
Fields of Interest: Web Development, Computer Vision, Digital Image Processing, Pattern Recognition and Machine Learning. </p>
                            <div className="mat-divider" />
                        </div>
                        <div>
                            <h4>Phone Number</h4>
                            <p>62 9 8263 7916</p>
                            <div className="mat-divider" />
                        </div>
                        <div>
                            <h4>Email</h4>
                            <p>joaopaulo.borges.gm@hotmail.com</p>
                            <div className="mat-divider" />
                        </div>
                        <div>
                            <h4>Social networks</h4>
                            <div className="socialNetworks">
                                <p><a href="https://linkedin.com/in/joao-paulo-borges"
                                    rel="noopener noreferrer" target="_blank">
                                    <IconButton><i className="fab fa-linkedin-in"></i></IconButton></a>
                                </p>
                                <p><a href="https://twitter.com/gm_joaopaulo"
                                    rel="noopener noreferrer" target="_blank">
                                    <IconButton><i className="fab fa-twitter"></i></IconButton></a>
                                </p>
                                <p><a href="https://github.com/joaopauloborges"
                                    rel="noopener noreferrer" target="_blank">
                                    <IconButton><i className="fab fa-github"></i></IconButton></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Cv;
