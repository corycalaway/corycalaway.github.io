import React from "react";
import background from "../../assets/images/hero.jpg"
import { v4 as uuidv4 } from 'uuid'

const About = () => (
    <section className="hero" style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }} id="about-me" className="flex-section">
        <div className="container-fluid">

            <div className="row selfImage" >
                <div className="col-sm-12 col-md selfImage1">
                    <img className="col selfImage1" src={require(`../../assets/images/self.jpg`).default}
                        alt='GitHub'
                        key={uuidv4()}

                    />




                </div>
                <div className="col-sm-12 col-md-8">
                    <p className="primary-text">
                        My name is Cory! I am a father/husband, developer, nerd, etc and so on. I have had a plethora of experiences
                        throughout my life. Some of these experiences have been difficult, but they have made me the individual I am today. My
                    experiences have also tought me that even though I am strong as an individual, I can accomplish more with a team. <br />
                        <br />
                    I am still continuing to learn and edcuate myself as a fullstack Web Developer. I am currently on track to completeing a
                    fullstack web development course from the University of Utah (Grad: May2021). Upon completion I am hoping to start a full
                    time career as a Web Developer.
                   
                 </p>
                 <div>
                <br />
                     
                 </div>

                    <div className="row">
                        <div className="col"></div>
                    <div className="col-xs-1 col-md-8 card">
                            <h3 className="secondaryText">Skills:</h3>
                            <p className="secondaryText">
HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command Line, and Git
                            </p>
                        <ul className="row">
                            
                                <div className="col-xs-12 col-sm-2 col-md-2">
                                <img src={require(`../../assets/images/mongoDB.png`).default}
                                    alt='Email'
                                    key={uuidv4()}
                                />
                            </div>
                                <div className="col-xs-12 col-sm-2 col-md-2">
                                <img src={require(`../../assets/images/node.png`).default}
                                    alt='Email'
                                    key={uuidv4()}
                                />
                            </div>
                                <div className="col-xs-12 col-sm-2 col-md-2">
                                <img src={require(`../../assets/images/react1.png`).default}
                                    key={uuidv4()}
                                />
                            </div>

                                <div className="col-xs-12 col-sm-2 col-md-2">
                                <img src={require(`../../assets/images/html1.png`).default}
                                    key={uuidv4()}
                                />
                            </div>
                                <div className="col-xs-12 col-sm-2 col-md-2">
                                <img src={require(`../../assets/images/css.png`).default}
                                    key={uuidv4()}
                                />
                            </div>
                                <div className="col-xs-12 col-sm-2 col-md-2">
                                <img src={require(`../../assets/images/sql.png`).default}
                                    key={uuidv4()}
                                />
                            </div>

                        </ul>
                    </div>

                        <div className="col"></div>
                    </div>
                </div>
            </div>
        </div>

    </section>

);

export default About;
